/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion des donnees de la vue globale présentant les statistiques des portefeuilles selectionnes
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant d'exposer tout ou partie de fonctions de certains controleurs
     */
    class StatsService implements IStatsService {
        public static CLASS_NAME = "StatsService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(StatsService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.restStatRentabiliteService,
            Constantes.Inject.Services.restStatRevueService,
            Constantes.Inject.Services.rechercheRevueService,
            Constantes.Inject.Services.restStatPortefeuilleService,
            Constantes.Inject.Services.restStatFluxMouvementFinancierService,
            Constantes.Inject.Services.restStatPortefeuilleEdsService
        ];

        // Variables utiles
        public statsRentab: Modeles.ApplicationStats.IRentabilite;
        public statsRdvPtf: Modeles.ApplicationStats.IRdvPtf;
        public statsRevuePtf: Modeles.ApplicationStats.IRevuePortefeuille;
        public statsFluxFinancier: Array<Modeles.ApplicationStats.IFlux>;
        public statsDetail: Modeles.ApplicationStats.IDetailPtf;
        public queryStatsRentab: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres;
        public queryStatsRevue: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres;
        public queryStatsPortefeuille: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres;
        public queryStatsPortefeuilleEds: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds;

        /**
         * Constructeur
         */
        constructor(
            private $q: ng.IQService,
            private contexteService: Services.Application.IContexteService,
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private restStatRentabiliteService: Services.Rest.StatRentabilite.IStatRentabiliteService,
            private restStatRevueService: Services.Rest.StatRevue.IStatRevueService,
            private rechercheRevueService: Services.Rest.RechercheRevue.IRechercheRevueService,
            private restStatPortefeuilleService: Services.Rest.StatPortefeuille.IStatPortefeuilleService,
            private restStatFluxMouvementFinancierService: Services.Rest.StatFluxMouvementFinancier.IStatFluxMouvementFinancierService,
            private restStatPortefeuilleEdsService: Services.Rest.PropositioncorporateV1.StatPortefeuilleEds.IStatPortefeuilleEdsService) {
        }

        /**
         * Méthode permettant de récupérer les statistiques de la rentabilite
         * @param 
         * @return {Modeles.ApplicationStats.IRentabilite}
         */
        public getStatsRentabilite(): ng.IPromise<Modeles.ApplicationStats.IRentabilite> {

            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                let query: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres =
                    <Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres>{};
                query.codeEtablissement = ctx.codeEtablissement;
                query.identifiantElementStructure = ctx.edsVisu;
                query.listeIdentifiantPortefeuille = _.pluck(this.portefeuilleService.getListePortefeuillesActifs(), "id");
                if (!this.statsRentab ||
                    this.isQueryStatsRentabDifferent(query)) {
                    return this.restStatRentabiliteService.getStatsRentab(query).
                        then((statsRentab: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabilite) => {
                            this.queryStatsRentab = query;
                            this.statsRentab = statsRentab ?
                                Utils.ApplicationUtils.getStatsRentabiliteAppDepuisRest(statsRentab.infoPnb) :
                                this.statsRentab;

                            if (this.statsRentab &&
                                !this.statsRentab.pnb12DerniersMoisGlissantN &&
                                !this.statsRentab.pnb12DerniersMoisGlissNMoins1 &&
                                !this.statsRentab.pnb3112AnneeNMoins1 &&
                                !this.statsRentab.ratioPNBImportants &&
                                !this.statsRentab.tauxEvolutionPnb) {
                                this.statsRentab = undefined;
                            }
                            return this.statsRentab;
                        });
                } else {
                    return this.$q.when(this.statsRentab);
                }
            });
        }

        /**
         * 
         */
        public getStatsRdvEtPortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf> {

            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                let query: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres =
                    <Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres>{};
                query.codeEtablissement = ctx.codeEtablissement;
                query.identifiantEds = ctx.edsVisu;
                query.listeIdentifiantPortefeuille = _.pluck(this.portefeuilleService.getListePortefeuillesActifs(), "id");
                if (!this.statsRdvPtf ||
                    this.isQueryStatsPortefeuilleDifferent(query)) {
                    return this.restStatPortefeuilleService.getStats(query).
                        then((statsPtf: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille) => {
                        this.queryStatsPortefeuille = query;
                        this.statsRdvPtf = Utils.ApplicationUtils.getStatsPortefeuilleAppDepuisRest(statsPtf);
                        return this.statsRdvPtf;
                    });
                } else {
                    return this.$q.when(this.statsRdvPtf);
                }
            });
        }

        //public getStatsRevuePortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille> {
        //    return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
        //        let query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres =
        //            <Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres>{};
        //        query.codeEtablissement = ctx.codeEtablissement;
        //        query.identifiantElementStructure = ctx.edsVisu;
        //        query.listeIdentifiantPortefeuille = _.pluck(this.portefeuilleService.getListePortefeuillesActifs(), "id");
        //        if (!this.statsRevuePtf ||
        //            this.isQueryStatsRevueDifferent(query)) {
        //            return this.restStatRevueService.getStats(query).
        //                then((statsRevue: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue) => {
        //                this.queryStatsRevue = query;
        //                this.statsRevuePtf = Utils.ApplicationUtils.getStatsRevueAppDepuisRest(statsRevue);
        //                return this.statsRevuePtf;
        //            });
        //        } else {
        //            return this.$q.when(this.statsRevuePtf);
        //        }
        //    });
        //}

        /**
         * 
         */
        public getStatsRevuePortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille> {
            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                let query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres =
                    <Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres>{};
                query.codeEtablissement = ctx.codeEtablissement;
                query.identifiantElementStructure = ctx.edsVisu;
                query.listeIdentifiantPortefeuille = _.pluck(this.portefeuilleService.getListePortefeuillesActifs(), "id");
                return this.restStatRevueService.getStats(query).
                    then((statsRevue: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue) => {
                        this.queryStatsRevue = query;
                        this.statsRevuePtf = Utils.ApplicationUtils.getStatsRevueAppDepuisRest(statsRevue);
                        return this.statsRevuePtf;
                    });
            });
        }

        /**
         * 
         */
        public getStatsListeEds(): ng.IPromise<void> {
            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                let query: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds;
                query = <Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds>{};
                query.parametres = <Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IParametres>{};
                query.parametres.codeEtablissement = ctx.codeEtablissement;

                // Creer la liste des portefeuilles à partir de la liste selectionné pour charger la vue EDS
                query.parametres.listePortefeuilleEds = _.map(
                    this.portefeuilleService.getListePortefeuillesActifs(),
                    (value: Modeles.Application.IPortefeuille) => {
                        return <Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IPortefeuilleEds> {
                            "identifiantEds": value.idAgent,
                            "identifiantPortefeuille": value.id
                        };
                    });
                query.parametres.typeVue = Enum.Rest.TYPE_VUE_STAT_GLOBAL.VUE_GLOBAL_ET_DETAILLE.toString();
                if (!this.statsRevuePtf ||
                    this.isQueryStatsPortefeuilleEdsDifferent(query)) {
                    return this.restStatPortefeuilleEdsService.getStatPortefeuilleEds(query).
                        then((statsPortfeuilleEds: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds) => {
                        this.queryStatsPortefeuilleEds = query;
                        this.statsRevuePtf = Utils.ApplicationUtils.getStatsRevueAppDepuisRestGlobal(statsPortfeuilleEds);
                        this.statsRentab = Utils.ApplicationUtils.getStatsRentabiliteAppDepuisRestGlobal(statsPortfeuilleEds);
                        this.statsRdvPtf = Utils.ApplicationUtils.getStatsPortefeuilleAppDepuisRestGlobal(statsPortfeuilleEds);
                        this.statsFluxFinancier = Utils.ApplicationUtils.getStatsFluxFinancierPortefeuilleAppDepuisRestGlobal(statsPortfeuilleEds);
                        this.statsDetail = Utils.ApplicationUtils.getStatsDetailPortefeuilleAppDepuisRestGlobal(statsPortfeuilleEds);
                        if (this.statsRentab &&
                            !this.statsRentab.pnb12DerniersMoisGlissantN &&
                            !this.statsRentab.pnb12DerniersMoisGlissNMoins1 &&
                            !this.statsRentab.pnb3112AnneeNMoins1 &&
                            !this.statsRentab.ratioPNBImportants &&
                            !this.statsRentab.tauxEvolutionPnb) {
                            this.statsRentab = undefined;
                        }
                        return this.$q.when();
                    });
                } else {
                    return this.$q.when();
                }
            });
        }

        /**
         * Restitue la liste des clinets à activer à partir d'une liste de portefeuilles
         * @param codeEtablissement
         * @param identifiantElementStructure
         * @param listeIdentifiantPortefeuille
         */
        public getClientsAActiver(
            codeEtablissement: string,
            identifiantElementStructure: number,
            listeIdentifiantPortefeuille: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>> {

            if (codeEtablissement &&
                (identifiantElementStructure > 0) &&
                (listeIdentifiantPortefeuille &&
                    listeIdentifiantPortefeuille.length > 0)) {
                return this.getRevue(codeEtablissement, identifiantElementStructure, listeIdentifiantPortefeuille).
                    then((resultatPromesse: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue) => {
                    let listeClientsAActiver: Array<Modeles.ApplicationStats.IClientSimplifie>;
                    if (resultatPromesse) {
                        listeClientsAActiver = this.extraireClientsAActiverDepuisRevue(resultatPromesse);
                    }
                    return listeClientsAActiver;
                });
            }
            return this.$q.reject(new MyWay.Services.Erreur("Paramètres insuffisamment renseignés => recherche de revue impossible"));
        }

        /**
         * Restitue la liste des clinets à renégocier à partir d'une liste de portefeuilles
         * @param codeEtablissement
         * @param identifiantElementStructure
         * @param listeIdentifiantPortefeuille
         */
        public getClientsARenegocier(
            codeEtablissement: string,
            identifiantElementStructure: number,
            listeIdentifiantPortefeuille: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>> {

            if (codeEtablissement &&
                (identifiantElementStructure > 0) &&
                (listeIdentifiantPortefeuille &&
                    listeIdentifiantPortefeuille.length > 0)) {
                return this.getRevue(codeEtablissement, identifiantElementStructure, listeIdentifiantPortefeuille).
                    then((resultatPromesse: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue) => {
                    let listeClientsAActiver: Array<Modeles.ApplicationStats.IClientSimplifie>;
                    if (resultatPromesse) {
                        listeClientsAActiver = this.extraireClientsARenegocierDepuisRevue(resultatPromesse);
                    }
                    return listeClientsAActiver;
                });
            }
            return this.$q.reject(new MyWay.Services.Erreur("Paramètres insuffisamment renseignés => recherche de revue impossible"));
        }

        /**
         * Restitue une liste de clients à renégocier à partir des données de la revue.
         * @param revue
         */
        private extraireClientsARenegocierDepuisRevue(
            revue: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue): Array<Modeles.ApplicationStats.IClientSimplifie> {
            let resultat: Array<Modeles.ApplicationStats.IClientSimplifie>;
            if (revue &&
                revue.listeBilanRevue) {
                resultat = [];
                if (revue.listeBilanRevue.length > 0) {
                    resultat = _.where(revue.listeBilanRevue, { "indicateurTarifARenegocier": "O" });
                }
            }
            return resultat;
        }

        /**
         * 
         * @param listeIdentifiantPortefeuille
         * @param listeIdentifiantRelationEco
         */
        public getStatsFluxMouvementFinancier(
            listeIdentifiantPortefeuille: Array<number>,
            listeIdentifiantRelationEco: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>> {
            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                let parametresRenseignes: boolean = 
                    ctx.codeEtablissement &&
                    (ctx.edsVisu > 0) &&
                    ((listeIdentifiantPortefeuille && listeIdentifiantPortefeuille.length > 0) ||
                    (listeIdentifiantRelationEco && listeIdentifiantRelationEco.length > 0));

                if (parametresRenseignes) {
                    let queryFlux: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancierParametres;
                    queryFlux = <Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancierParametres>{};
                    queryFlux.codeEtablissement = ctx.codeEtablissement;
                    queryFlux.identifiantElementStructure = ctx.edsVisu;
                    queryFlux.listeIdentifiantPortefeuille =
                        (listeIdentifiantPortefeuille && listeIdentifiantPortefeuille.length > 0) ?
                        listeIdentifiantPortefeuille : null;
                    queryFlux.listeIdentifiantRelationEco =
                        (listeIdentifiantRelationEco && listeIdentifiantRelationEco.length > 0) ?
                            listeIdentifiantRelationEco : null;
                    return this.restStatFluxMouvementFinancierService.postStatFluxMvtFinancier(queryFlux).
                        then((resultatPromesse: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancier) => {
                        if (resultatPromesse && resultatPromesse.infoFluxMvtFinancier) {
                            this.statsFluxFinancier = this.definirFluxFinancier(resultatPromesse.infoFluxMvtFinancier);
                        }
                        return this.statsFluxFinancier;
                    });
                }
                return this.$q.reject(new MyWay.Services.Erreur("Paramètres insuffisamment renseignés => recherche de stats mouvement financier impossible"));
            });
        }

        /**
         * Contrôle les paramètres en entrée puis sollicite le service REST pour obtenir les données de la revue.
         * @param codeEtablissement
         * @param identifiantElementStructure
         * @param listeIdentifiantPortefeuille
         * @param listeIdentifiantRelationEco
         * @param listeIdentifiantPersonne
         */
        private getRevue(
            codeEtablissement: string,
            identifiantElementStructure: number,
            listeIdentifiantPortefeuille?: Array<number>,
            listeIdentifiantRelationEco?: Array<number>, listeIdentifiantPersonne?: Array<number>
            ): ng.IPromise<Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue> {

            if (codeEtablissement &&
                (identifiantElementStructure > 0) &&
                ((listeIdentifiantPortefeuille && listeIdentifiantPortefeuille.length > 0) ||
                    (listeIdentifiantRelationEco && listeIdentifiantRelationEco.length > 0) ||
                    (listeIdentifiantPersonne && listeIdentifiantPersonne.length > 0))) {
                let queryRechercheRevue: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevueParametres;
                queryRechercheRevue = <Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevueParametres>{};
                queryRechercheRevue.codeEtablissement = codeEtablissement;
                queryRechercheRevue.identifiantElementStructure = identifiantElementStructure;
                queryRechercheRevue.codeActionEquipement = "A";
                queryRechercheRevue.listeIdentifiantPersonne = this.alimenterListeNombre(listeIdentifiantPersonne);
                queryRechercheRevue.listeIdentifiantPortefeuille = this.alimenterListeNombre(listeIdentifiantPortefeuille);
                queryRechercheRevue.listeIdentifiantRelationEco = this.alimenterListeNombre(listeIdentifiantRelationEco);

                return this.rechercheRevueService.postRechercheRevue(queryRechercheRevue).
                    then((resultatPromesseRest: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue) => {
                    return resultatPromesseRest;
                });
            }
            return this.$q.reject(new MyWay.Services.Erreur("Aucun paramètre renseigné => recherche de revue impossible"));
        }

        /**
         * alimente la liste
         * @param liste
         */
        private alimenterListeNombre(liste: Array<number>): Array<number> {
            return (liste && liste.length > 0) ? liste : null;        
        }

        /**
         * Restitue une liste de clients à activer à partir des données de la revue.
         * @param revue
         */
        private extraireClientsAActiverDepuisRevue(
            revue: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue): Array<Modeles.ApplicationStats.IClientSimplifie> {
            let resultat: Array<Modeles.ApplicationStats.IClientSimplifie>;
            if (revue &&
                revue.listeBilanRevue) {
                resultat = (revue.listeBilanRevue.length > 0) ? _.where(revue.listeBilanRevue, { "indicateurClientAActiver": "O" }) : [];
            } else {
                resultat = null;
            }
            return resultat;
        }

        /**
         * 
         * @param infoFluxFinancierRest
         */
        private definirFluxFinancier(
            infoFluxFinancierRest: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IInfoFluxMvtFinancier
        ): Array<Modeles.ApplicationStats.IFlux> {

            let resultat: Array<Modeles.ApplicationStats.IFlux>;
            if (infoFluxFinancierRest) {
                let fluxTravail: Modeles.ApplicationStats.IFlux;
                resultat = [];

                //Flux créditeurs
                fluxTravail = <Modeles.ApplicationStats.IFlux>{};
                //Traitement des dates
                fluxTravail.dateDebFlux12DerMoisGlissN = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateDebFluxAnneeN);
                fluxTravail.dateDebFlux12DerMoisGlissNMoins1 = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateDebFluxAnneeNMoins1);
                fluxTravail.dateFinFlux12DerMoisGlissN = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateFinFluxAnneeN);
                fluxTravail.dateFinFlux12DerMoisGlissNMoins1 = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateFinFluxAnneeNMoins1);
                //Traitement des chiffres
                fluxTravail.flux12DerniersMoisGlissantN = infoFluxFinancierRest.fluxCrediteursAnneeN;
                fluxTravail.flux12DerniersMoisGlissNMoins1 = infoFluxFinancierRest.fluxCrediteursNMoins1;
                fluxTravail.tauxEvolutionFlux = infoFluxFinancierRest.tauxEvolutionFluxCrediteurs;

                resultat.push(fluxTravail);

                //Flux débiteurs
                fluxTravail = <Modeles.ApplicationStats.IFlux>{};
                //Traitement des dates
                fluxTravail.dateDebFlux12DerMoisGlissN = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateDebFluxAnneeN);
                fluxTravail.dateDebFlux12DerMoisGlissNMoins1 = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateDebFluxAnneeNMoins1);
                fluxTravail.dateFinFlux12DerMoisGlissN = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateFinFluxAnneeN);
                fluxTravail.dateFinFlux12DerMoisGlissNMoins1 = Services.Utils.DataUtils.formaterDateValide(infoFluxFinancierRest.dateFinFluxAnneeNMoins1);
                //Traitement des chiffres
                fluxTravail.flux12DerniersMoisGlissantN = infoFluxFinancierRest.fluxDebiteursAnneeN;
                fluxTravail.flux12DerniersMoisGlissNMoins1 = infoFluxFinancierRest.fluxDebiteursNMoins1;
                fluxTravail.tauxEvolutionFlux = infoFluxFinancierRest.tauxEvolutionFluxDebiteurs;

                resultat.push(fluxTravail);
            }
            return resultat;
        }

        /**
         * Méthode de comparaison de query pour appel restStatRentabiliteService.getStatsRentab:
         * renvoie Vrai si duery différentes, Faux sinon
         * @param query
         */
        private isQueryStatsRentabDifferent(
            query: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres): boolean {
            this.queryStatsPortefeuilleEds = null;
            return (!this.queryStatsRentab ||
                query.identifiantElementStructure !== this.queryStatsRentab.identifiantElementStructure ||
                !_.isEqual(query.listeIdentifiantPortefeuille, this.queryStatsRentab.listeIdentifiantPortefeuille)) ? true : false;
        }

        /**
         * Méthode de comparaison de query pour appel restStatRevueService.getStats:
         * renvoie Vrai si duery différentes, Faux sinon
         * @param query
         */
        //private isQueryStatsRevueDifferent(
        //    query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres): boolean {
        //    this.queryStatsPortefeuilleEds = null;
        //    return (!this.queryStatsRevue ||
        //        query.identifiantElementStructure !== this.queryStatsRevue.identifiantElementStructure ||
        //        !_.isEqual(query.listeIdentifiantPortefeuille, this.queryStatsRevue.listeIdentifiantPortefeuille)) ? true : false;
        //}

        /**
         * Méthode de comparaison de query pour appel restStatPortefeuilleService.getStats:
         * renvoie Vrai si query différentes, Faux sinon
         * @param query
         */
        private isQueryStatsPortefeuilleDifferent(
            query: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres): boolean {
            this.queryStatsPortefeuilleEds = null;
            return (!this.queryStatsPortefeuille ||
                query.identifiantEds !== this.queryStatsPortefeuille.identifiantEds ||
                !_.isEqual(query.listeIdentifiantPortefeuille, this.queryStatsPortefeuille.listeIdentifiantPortefeuille)) ? true : false;
        }

        /**
         * Méthode de comparaison de query pour appel :
         * renvoie Vrai si query différentes, Faux sinon
         * @param query
         */
        private isQueryStatsPortefeuilleEdsDifferent(
            query: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): boolean {
            this.queryStatsPortefeuille = null;
            return (!this.queryStatsPortefeuilleEds ||
                !_.isEqual(query.parametres.listePortefeuilleEds,
                    this.queryStatsPortefeuilleEds.parametres.listePortefeuilleEds)) ? true : false;
        }

        /**
         *
         */
        public getStatsRevuePortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille> {
            this.queryStatsRevue = undefined;
            return this.$q.when(this.statsRevuePtf);
        }

        /**
         * 
         */
        public getStatsRentabiliteEds(): ng.IPromise<Modeles.ApplicationStats.IRentabilite> {
            this.queryStatsRentab = undefined;
            return this.$q.when(this.statsRentab);
        }

        /**
         * 
         */
        public getStatsRdvEtPortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf> {
            this.queryStatsPortefeuille = undefined;
            return this.$q.when(this.statsRdvPtf);
        }
        
        /**
         * 
         */
        public getStatsFluxMouvementFinancierEds(): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>> {
            return this.$q.when(this.statsFluxFinancier);
        }

        /**
         * 
         */
        public getStatsDetail(): Modeles.ApplicationStats.IDetailPtf {
            return this.statsDetail;
        }

    }

    /**
     * Interface de la classe StatsService
     */
    export interface IStatsService {
        getStatsRentabilite(): ng.IPromise<Modeles.ApplicationStats.IRentabilite>;
        getStatsRdvEtPortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf>;
        getStatsRevuePortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille>;
        getStatsListeEds(): ng.IPromise<void>;
        getClientsAActiver(
            codeEtablissement: string,
            identifiantElementStructure: number,
            listeIdentifiantPortefeuille?: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>>;
        getClientsARenegocier(
            codeEtablissement: string,
            identifiantElementStructure: number,
            listeIdentifiantPortefeuille?: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>>;
        getStatsFluxMouvementFinancier(
            listeIdentifiantPortefeuille: Array<number>,
            listeIdentifiantRelationEco: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>>;
        getStatsRentabiliteEds(): ng.IPromise<Modeles.ApplicationStats.IRentabilite>;
        getStatsRdvEtPortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf>;
        getStatsRevuePortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille>;
        getStatsFluxMouvementFinancierEds(): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>>;
        getStatsDetail(): Modeles.ApplicationStats.IDetailPtf;

    }

    // Déclaration du service
    app.service(StatsService.CLASS_NAME, StatsService);
}  