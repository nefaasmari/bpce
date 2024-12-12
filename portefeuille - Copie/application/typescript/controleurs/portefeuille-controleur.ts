/// <reference path="../constantes/inject-constantes.ts" />

/**
 * Controleur de la page portefeuille
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Controleur de l'index
     */
    export class PortefeuilleControleur {
        public static CLASS_NAME = "PortefeuilleControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PortefeuilleControleur.CLASS_NAME);

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.statService,
            Constantes.Inject.Services.ihmService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.habilitationService,
            Constantes.Inject.LibrairieD3.creationDonutService,
            Constantes.Inject.Services.indicateurFlecheService,
            Constantes.Inject.Services.popupService
        ];


        public chargementEnCours: boolean;
        public estVueMultiSuiviPar: boolean = false;
        public anneeEnCours: number = moment().year();

        public messageChoixPtf: string;
        public messageAucunPtf: string;
        public messageChoixPtfExpert: string;
        public estHabiliteBlocRentabilite: boolean;
        public estHabiliteBlocRevue: boolean;
        public estHabiliteConsultAffaires: boolean;
        public estHabiliteConsultPropositions: boolean;

        // chargements pour chaque panel
        public chargementRentabEnCours: boolean = false;
        public chargementRdvEnCours: boolean = false;
        public chargementPtfEnCours: boolean = false;
        public chargementRevuePtfEnCours: boolean = false;

        public isInitRentab: boolean = false;
        public messageInitRentab: string;
        public isInitRevuePtf: boolean = false;
        public messageInitRevuePtf: string;
        public isInitPtf: boolean = false;
        public messageInitPtf: string;
        public isInitRdv: boolean = false;
        public messageInitRdv: string;

        // Variables bloc Portefeuille
        public configBoutonDetailsPortefeuille: IConfigBoutonPanelNiv2;
        public configBoutonDetailsPortefeuilleExpert: IConfigBoutonPanelNiv2;
        public configDonutSegRel: Services.LibrairieD3.IConfigDonutD3;
        public dataIndicateurClientsPmeEsi: IDataIndicateurBadge;
        public dataIndicateurClientsPEetPEES: IDataIndicateurBadge;
        public dataIndicateurClientsMEetMEES: IDataIndicateurBadge;
        public dataIndicateurClientsGEetGEES: IDataIndicateurBadge;
        public dataIndicateurClientsPro: IDataIndicateurBadge;
        public dataIndicateurAutres: IDataIndicateurBadge;

        // Variables bloc Rendez-vous
        public titrePanelRdv: string;
        public titrePanelRdv2: string;
        public configPourcentageVisites: Services.LibrairieD3.IConfigPourcentageD3;
        public dataIndicateurNbRdvProspectsRealisesAnneeEnCours: IDataIndicateurBadge;
        public dataIndicateurNbRdvProspectsVusAnneeEnCours: IDataIndicateurBadge;
        public dataIndicateurNbRelationsEconomiquesAnneeEnCours: IDataIndicateurBadge;
        public dataIndicateurNbRdvClientsRealisesAnneeEnCours: IDataIndicateurBadge;
        public dataIndicateurNbRdvRealisesAnneeEnCours: IDataIndicateurBadge;


        // Variables bloc Revue Portefeuille
        public configBoutonAccederRevuePortefeuille: IConfigBoutonPanelNiv2;
        public configPourcentagePortefeuilleRealise: Services.LibrairieD3.IConfigPourcentageD3;
        public dataIndicateurNbProduitsAEquiper: IDataIndicateurBadge;
        public dataIndicateurNbProduitsAppetence: IDataIndicateurBadge;
        public dataIndicateurNbProduitsEquipes: IDataIndicateurBadge;
        public dataIndicateurNbClientsAActiver: IDataIndicateurBadge;
        public dataIndicateurNbClientsARenegocier: IDataIndicateurBadge;

        public dataIndicateurNbPropositionsEnCours: IDataIndicateurBadge;
        public dataIndicateurNbAffairesEnCours: IDataIndicateurBadge;

        public configDiagrammeColonnePortefeuille: Array<Modeles.Application.IDataIndicateurColonne>;
        public afficheAppetencesProduits: boolean = true;  // masque la ligne appetences pour Crédit Coop et BTP (pas d'appétences chez eux)


        // Variables bloc Rentabilité
        public dataIndicateurAnneePrecedente: IDataIndicateurBadge;
        public configDiagrammeColonneRentabilite: Array<Modeles.Application.IDataIndicateurColonne>;
        public configPourcentageRentabilite: Services.LibrairieD3.IConfigPourcentageD3;
        public configFlecheRentabilite: Modeles.Application.IConfigIndicateurFleche;
        public afficheErreurPoidsPNB: boolean = false;


        // Variables bloc Flux
        public estActifBlocFlux: boolean = true;
        private isInitFlux: boolean;
        private messageInitFlux: string;
        private chargementFluxEnCours: boolean = false;
        private configFlecheFluxCrediteurs: Modeles.Application.IConfigIndicateurFleche;
        private configFlecheFluxDebiteurs: Modeles.Application.IConfigIndicateurFleche;
        private configDiagrammeColonneFluxCrediteurs: Array<Modeles.Application.IDataIndicateurColonne>;
        private configDiagrammeColonneFluxDebiteurs: Array<Modeles.Application.IDataIndicateurColonne>;

        /**
         * Constructeur
         */
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $q: ng.IQService,
            private $scope: ng.IScope,
            private $location: ng.ILocationService,
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private eventService: Services.Application.IEventService,
            private statService: Services.Application.IStatsService,
            private ihmService: Services.Application.IIhmService,
            private contexteService: Services.Application.IContexteService,
            private habilitationService: Services.Application.IHabilitationService,
            private creationDonutService: Services.LibrairieD3.ICreationDonutService,
            private indicateurFlecheService: Services.Application.IIndicateurFlecheService,
            private popupService: Services.Application.IPopupService
        ) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): ng.IPromise<void> {
            PortefeuilleControleur.logger.info(">>> Appel de la méthode : PortefeuilleControleur.initialiser <<<");
            this.reinitInitStats();

            this.messageChoixPtf = Constantes.Messages.MESSAGE_CHOIX_PORTEFEUILLE;
            this.messageChoixPtfExpert = Constantes.Messages.MESSAGE_CHOIX_PORTEFEUILLE_EXPERT;
            this.messageAucunPtf = Constantes.Messages.MESSAGE_AUCUN_PORTEFEUILLE;
            this.estHabiliteBlocRentabilite = this.habilitationService.estHabiliteAccesPNB();
            this.estHabiliteBlocRevue = this.habilitationService.estHabiliteConsultRevue();
            this.estHabiliteConsultAffaires = this.habilitationService.estHabiliteConsultAffaires();
            this.estHabiliteConsultPropositions = this.habilitationService.estHabiliteConsultPropositions();

            this.eventService.setPortefeuilleControleur(this);

            //Titre du panel RDV
            this.titrePanelRdv = Portefeuille.Constantes.Application.TITRE_PANEL_RDV + this.anneeEnCours.toString();
            this.titrePanelRdv2 = Portefeuille.Constantes.Application.TITRE_PANEL_RDV_AVEC_CRE;

            // mise à vide du donut pour qu'il soit recréé
            this.creationDonutService.viderDonut();
            // Configs du bloc Portefeuille
            this.creerConfigBoutonDetailsPortefeuille();
            // Configs du bloc Portefeuille Expert
            this.creerConfigBoutonDetailsPortefeuilleExpert();

            // Configs du bloc Revue Portefeuille
            this.creerConfigBoutonAccederRevuePortefeuille();

            if (this.portefeuilleService.aPortefeuillesAffiche() && this.portefeuilleService.aPortefeuillesReelAffiche()) {
                return this.initialiserStatistiques();
            } else {
                return this.$q.when();
            }
        }

        /**
         * 
         * @param etat
         */
        public setEstVueMultiSuiviPar(etat: boolean): void {
            if (this.estVueMultiSuiviPar !== etat) {
                this.estVueMultiSuiviPar = etat;
                this.creerConfigBoutonDetailsPortefeuille();
                this.creerConfigBoutonAccederRevuePortefeuille();
            }
        }

        /**
         * Méthode pour initialiser les blocs de statistiques
         */
        public initialiserStatistiques(): ng.IPromise<void> {
            if (this.portefeuilleService.aPortefeuillesAffiche() && this.portefeuilleService.aPortefeuillesReelAffiche()) {
                this.chargementRentabEnCours = true;
                this.chargementPtfEnCours = true;
                this.chargementRdvEnCours = true;
                this.chargementRevuePtfEnCours = true;
                this.chargementFluxEnCours = true;

                // Charger les données stat globale on creer une promesse vide
                let promesse: ng.IPromise<void> =
                    (this.estVueMultiSuiviPar) ?
                        this.statService.getStatsListeEds() :
                        this.$q.when();
                promesse.then(() => {
                    // initialisation bloc Rentabilité
                    this.initBlocRentabilite();
                    // initialisation bloc Rdv et Portefeuille
                    this.initStatsRdvEtPortefeuille();
                    // initialisation bloc Revue Portefeuille
                    this.initStatsRevuePortefeuille();
                    // initialisation bloc Flux
                    this.initStatsFluxMouvementFinancier();
                    return this.$q.when();
                });
            }
            if (!this.portefeuilleService.aPortefeuillesReelAffiche()) {
                this.reinitInitStats();
            }
            return this.$q.when();
        }

        /**
         * initialisation bloc Rentabilité
         */
        private initBlocRentabilite() {
            if (this.estHabiliteBlocRentabilite) {
                let statRentabilite = (this.estVueMultiSuiviPar) ?
                    this.statService.getStatsRentabiliteEds() :
                    this.statService.getStatsRentabilite();
                statRentabilite.then((statsRentab: Modeles.ApplicationStats.IRentabilite) => {
                    if (statsRentab) {
                        this.creerBlocRentab(statsRentab);
                        this.isInitRentab = true;
                    } else {
                        this.initStatRentab();
                    }
                }).catch((erreur: MyWay.Services.Erreur) => {
                    this.isInitRentab = false;
                    this.messageInitRentab = `Un problème technique empêche la récupération des données: ${erreur.libelle}`;
                }).finally(() => {
                    this.chargementRentabEnCours = false;
                });
            }
        }

        /**
         * initialisation bloc Rdv et Portefeuille
         */
        private initStatsRdvEtPortefeuille() {
            let statsRdvEtPortefeuille = (this.estVueMultiSuiviPar) ?
                this.statService.getStatsRdvEtPortefeuilleEds() :
                this.statService.getStatsRdvEtPortefeuille();
            statsRdvEtPortefeuille.then((statsRdvEtPtf: Modeles.ApplicationStats.IRdvPtf) => {
                this.creerBlocPtf(statsRdvEtPtf);
                this.creerBlocRdv(statsRdvEtPtf);
                this.isInitRdv = true;
                this.isInitPtf = true;
            }).catch((erreur: MyWay.Services.Erreur) => {
                this.isInitRdv = false;
                this.isInitPtf = false;
                this.messageInitPtf = `Un problème technique empêche la récupération des données: ${erreur.libelle}`;
                this.messageInitRdv = `Un problème technique empêche la récupération des données: ${erreur.libelle}`;
                this.creationDonutService.viderDonut();
            }).finally(() => {
                this.chargementPtfEnCours = false;
                this.chargementRdvEnCours = false;
            });
        }

        /**
         * initialisation bloc Revue Portefeuille
         */
        private initStatsRevuePortefeuille() {
            if (this.estHabiliteBlocRevue) {
                let statsRevuePortefeuille = (this.estVueMultiSuiviPar) ?
                    this.statService.getStatsRevuePortefeuilleEds() :
                    this.statService.getStatsRevuePortefeuille();
                statsRevuePortefeuille.then((statsRevuePtf: Modeles.ApplicationStats.IRevuePortefeuille) => {
                    this.creerBlocRevuePortefeuille(statsRevuePtf);
                    this.isInitRevuePtf = true;
                }).catch((erreur: MyWay.Services.Erreur) => {
                    this.isInitRevuePtf = false;
                    this.messageInitRevuePtf = `Un problème technique empêche la récupération des données: ${erreur.libelle}`;
                }).finally(() => {
                    this.chargementRevuePtfEnCours = false;
                });
            }
        }

        /**
         * 
         */
        private initStatsFluxMouvementFinancier() {
            let statsFluxMouvementFinancier: ng.IPromise<Array<Modeles.ApplicationStats.IFlux>>;
            this.chargementFluxEnCours = true;
            if (this.estVueMultiSuiviPar) {
                statsFluxMouvementFinancier = this.statService.getStatsFluxMouvementFinancierEds();
            } else {
                // initialisation bloc Flux
                let listeIdsPortefeuilles: Array<number> =
                    _.pluck(_.where(this.portefeuilleService.getListePortefeuillesVisu(), { "estAffiche": true }), "id");
                statsFluxMouvementFinancier = this.statService.getStatsFluxMouvementFinancier(listeIdsPortefeuilles, null);
            }
            statsFluxMouvementFinancier.then((statsFlux: Array<Modeles.ApplicationStats.IFlux>) => {
                if (statsFlux &&
                    statsFlux.length === 2) {
                    this.creerBlocFluxCrediteurs(statsFlux[0]);
                    this.creerBlocFluxDebiteurs(statsFlux[1]);
                    this.isInitFlux = true;
                } else {
                    this.initStatFlux();
                }
            }).catch((erreur: MyWay.Services.Erreur) => {
                this.isInitFlux = false;
                this.messageInitFlux = `Un problème technique empêche la récupération des données: ${erreur.libelle}`;
            }).finally(() => {
                this.chargementFluxEnCours = false;
            });
        }

        /**
         * Méthode pour mettre à false les booléen d'init des stats + maj des messages stats
         */
        public reinitInitStats(): void {
            this.initStatPtf();
            this.initStatRdv();
            this.initStatRevuePtf();
            this.initStatRentab();
            this.initStatFlux();
            //On vide le donut => utile lorsque l'on change d'agent pour un agent qui possède plusieurs portefeuilles
            this.creationDonutService.viderDonut();
        }

        /**
         *  ouvre la popin détail des portefeuilles en vue multi-conseiller
         */
        public debrancherVersDetailsPorteuille(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-portefeuille-vue.html",
                "ModaleDetailsPortefeuilleControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *  ouvre la popin détail des taux de visite en vue multi-conseiller
         */
        public debrancherVersDetailsTauxVisite(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-taux-visite-vue.html",
                "ModaleDetailsTauxVisiteControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *  ouvre la popin détail de la rentablité PNB en vue multi-conseiller
         */
        public debrancherVersDetailsRentabilitePNB(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-rentabilite-pnb-vue.html",
                "ModaleDetailsRentabilitePNBControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *  ouvre la popin détail des revue portfeuille en vue multi-conseiller
         */
        public debrancherVersDetailsRevuePortfeuille(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-revue-portefeuille-vue.html",
                "ModaleDetailsRevuePortefeuilleControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *  ouvre la popin détail du flux créditeur en vue multi-conseiller
         */
        public debrancherVersDetailsFluxCrediteur(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-flux-crediteur-vue.html",
                "ModaleDetailsFluxCrediteurControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *  ouvre la popin détail du flux débiteur en vue multi-conseiller
         */
        public debrancherVersDetailsFluxDebiteur(): void {
            this.popupService.showModalFull(
                "vues/template-modale/modale-details-flux-debiteur-vue.html",
                "ModaleDetailsFluxDebiteurControleur",
                <any>this.statService.getStatsDetail()).then((data: any) => {
                });
        }

        /**
         *
         */
        private initStatRdv(): void {
            this.messageInitRdv = Constantes.Messages.MESSAGE_NO_DATA_STATS;
            this.isInitRdv = false;
        }

        /**
         *
         */
        private initStatPtf(): void {
            this.messageInitPtf = Constantes.Messages.MESSAGE_NO_DATA_STATS;
            this.isInitPtf = false;
        }

        /**
         *
         */
        private initStatRevuePtf(): void {
            this.messageInitRevuePtf = Constantes.Messages.MESSAGE_NO_DATA_STATS;
            this.isInitRevuePtf = false;
        }

        /**
         *
         */
        private initStatRentab(): void {
            this.messageInitRentab = Constantes.Messages.MESSAGE_NO_DATA_STATS;
            this.isInitRentab = false;
        }

        /**
         * 
         */
        private initStatFlux(): void {
            this.messageInitFlux = Constantes.Messages.MESSAGE_NO_DATA_STATS;
            this.isInitFlux = false;
        }

        /**
         * Méthode permettant de créer la config du bouton de détails portefeuille
         * @returns {void}
         */
        private creerConfigBoutonDetailsPortefeuille(): void {
            if (this.estVueMultiSuiviPar) {
                this.configBoutonDetailsPortefeuille = null;
            } else {
                this.configBoutonDetailsPortefeuille = <IConfigBoutonPanelNiv2>{};
                this.configBoutonDetailsPortefeuille.label = "Accéder";
                this.configBoutonDetailsPortefeuille.action = this.accederGestionPortefeuilles;
            }
        }

        /**
         * Méthode permettant de créer la config du bouton de détails portefeuille Expert
         * @returns {void}
         */
        private creerConfigBoutonDetailsPortefeuilleExpert(): void {
            
                this.configBoutonDetailsPortefeuilleExpert = <IConfigBoutonPanelNiv2>{};
            this.configBoutonDetailsPortefeuilleExpert.label = "Accéder";
            this.configBoutonDetailsPortefeuilleExpert.action = this.accederGestionPortefeuillesExpert;
        }

        /**
         * 
         * @param statsRdvEtPortefeuille
         */
        private creerBlocPtf(statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): void {
            this.dataIndicateurClientsPmeEsi = <IDataIndicateurBadge>{};
            this.dataIndicateurClientsPmeEsi.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_PME_ESI;
            this.dataIndicateurClientsPmeEsi.valeur = statsRdvEtPortefeuille.nombreClientsPMEESI.toString();

            this.dataIndicateurClientsPEetPEES = <IDataIndicateurBadge>{};
            this.dataIndicateurClientsPEetPEES.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_PE_ET_PEES;
            this.dataIndicateurClientsPEetPEES.valeur = statsRdvEtPortefeuille.nombreClientsPEetPEES.toString();
            this.dataIndicateurClientsPEetPEES.isSousIntitule = true;

            this.dataIndicateurClientsMEetMEES = <IDataIndicateurBadge>{};
            this.dataIndicateurClientsMEetMEES.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_ME_ET_MEES;
            this.dataIndicateurClientsMEetMEES.valeur = statsRdvEtPortefeuille.nombreClientsMEetMEES.toString();
            this.dataIndicateurClientsMEetMEES.isSousIntitule = true;

            this.dataIndicateurClientsGEetGEES = <IDataIndicateurBadge>{};
            this.dataIndicateurClientsGEetGEES.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_GE_ET_GEES;
            this.dataIndicateurClientsGEetGEES.valeur = statsRdvEtPortefeuille.nombreClientsGEetGEES.toString();
            this.dataIndicateurClientsGEetGEES.isSousIntitule = true;

            this.dataIndicateurClientsPro = <IDataIndicateurBadge>{};
            this.dataIndicateurClientsPro.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_PRO;
            this.dataIndicateurClientsPro.valeur = statsRdvEtPortefeuille.nombreClientsPro.toString();

            this.dataIndicateurAutres = <IDataIndicateurBadge>{};
            this.dataIndicateurAutres.intitule = Portefeuille.Constantes.Application.BADGE_AUTRES_CLIENTS;
            this.dataIndicateurAutres.valeur = statsRdvEtPortefeuille.nombreClientsAutres.toString();

            this.creerConfigDonutSegRel(statsRdvEtPortefeuille);
            this.creerConfigDiagrammeColonnePortefeuille(statsRdvEtPortefeuille);
        }

        /**
         * 
         * @param statsRdvEtPortefeuille
         */
        private creerBlocRdv(statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): void {
            //RDV Clients réalisés année en cours
            this.dataIndicateurNbRdvClientsRealisesAnneeEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbRdvClientsRealisesAnneeEnCours.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_REALISES_ANNEE_EN_COURS;
            this.dataIndicateurNbRdvClientsRealisesAnneeEnCours.valeur = statsRdvEtPortefeuille.nombreRdvClientAnneeEnCours.toString();
            this.dataIndicateurNbRdvClientsRealisesAnneeEnCours.isSousIntitule = true;

            //RDV Prospects réalisés année en cours
            this.dataIndicateurNbRdvProspectsRealisesAnneeEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbRdvProspectsRealisesAnneeEnCours.intitule = Portefeuille.Constantes.Application.BADGE_PROSPECTS_REALISES_ANNEE_EN_COURS;
            this.dataIndicateurNbRdvProspectsRealisesAnneeEnCours.valeur = statsRdvEtPortefeuille.nombreRdvProspectAnneeCivile.toString();
            this.dataIndicateurNbRdvProspectsRealisesAnneeEnCours.isSousIntitule = true;

            //RDV Clients + Prospects réalisés année en cours
            this.dataIndicateurNbRdvRealisesAnneeEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbRdvRealisesAnneeEnCours.intitule = Portefeuille.Constantes.Application.BADGE_RDV_REALISES_ANNEE_EN_COURS;
            this.dataIndicateurNbRdvRealisesAnneeEnCours.valeur = (statsRdvEtPortefeuille.nombreRdvClientAnneeEnCours + statsRdvEtPortefeuille.nombreRdvProspectAnneeCivile).toString();

            this.dataIndicateurNbRdvProspectsVusAnneeEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbRdvProspectsVusAnneeEnCours.intitule = Portefeuille.Constantes.Application.BADGE_PROSPECTS_VUS_ANNEE_EN_COURS;
            this.dataIndicateurNbRdvProspectsVusAnneeEnCours.valeur = statsRdvEtPortefeuille.nombreRdvProspectAnneeEnCours.toString();

            this.dataIndicateurNbRelationsEconomiquesAnneeEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbRelationsEconomiquesAnneeEnCours.intitule = Portefeuille.Constantes.Application.BADGE_RELATION_ECONOMIQUE_ANNEE_EN_COURS;
            this.dataIndicateurNbRelationsEconomiquesAnneeEnCours.valeur = statsRdvEtPortefeuille.nombreRdvRelationEcoClient.toString();

            this.configPourcentageVisites = <Services.LibrairieD3.IConfigPourcentageD3>{};
            this.configPourcentageVisites.titre = "Taux de visites (relations économiques)";
            this.configPourcentageVisites.pourcentageUn = statsRdvEtPortefeuille.rdvTauxVisite;
            this.configPourcentageVisites.degrade = Services.LibrairieD3.DEGRADE_POURCENTAGE.BLEU;
        }

        /**
         * Méthode permettant de créer la config du donut segmentation Relationnelle
         * @returns {void}
         */
        private creerConfigDonutSegRel(statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): void {
            this.configDonutSegRel = <Services.LibrairieD3.IConfigDonutD3>{};
            this.configDonutSegRel.titre = Constantes.Application.GRAPHE_SEGMENTATION_TITRE_GROUPE;
            this.configDonutSegRel.degrade = Services.LibrairieD3.DEGRADE_DONUT.ROSE;

            let listeDonnees: Array<Services.LibrairieD3.IDonneeFluxD3> = [];

            if (statsRdvEtPortefeuille.nombreClientsPMEESI > statsRdvEtPortefeuille.nombreClientsPro) {
                this.configDonutSegRel.donutChoisi = Constantes.Application.DONUT_PME_ESI;
                this.configDonutSegRel.nombreClients = statsRdvEtPortefeuille.nombreClientsPMEESI.toString();
                _.forEach(statsRdvEtPortefeuille.listeSegmentationsPMEESI, (seg: Modeles.ApplicationStats.ISegmentationRelationnelle) => {
                    let section = <Services.LibrairieD3.IDonneeFluxD3>{};
                    section.nom = seg.libelle;
                    section.pourcentage = seg.pourcentage;
                    listeDonnees.push(section);
                });

            } else {
                this.configDonutSegRel.donutChoisi = Constantes.Application.DONUT_PRO;
                this.configDonutSegRel.nombreClients = statsRdvEtPortefeuille.nombreClientsPro.toString();
                _.forEach(statsRdvEtPortefeuille.listeSegmentationsPro, (seg: Modeles.ApplicationStats.ISegmentationRelationnelle) => {
                    let section = <Services.LibrairieD3.IDonneeFluxD3>{};
                    section.nom = seg.libelle;
                    section.pourcentage = seg.pourcentage;
                    listeDonnees.push(section);
                });
            }

            this.configDonutSegRel.listeDonnees = listeDonnees;
            this.eventService.initialiserPfDiagrammeDonutControleur();
        }

        /**
         * Méthode permettant de créer les données d'entrée du diagramme présenté en colonnes.
         * @returns {void}
         */
        private creerConfigDiagrammeColonnePortefeuille(statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): void {
            this.configDiagrammeColonnePortefeuille = [];
            let valeurMax: number = Math.max(
                statsRdvEtPortefeuille.nombreRelations,
                statsRdvEtPortefeuille.nombreClientsAvecProduitService,
                statsRdvEtPortefeuille.nombreClientsSansContratEtProspect
            );
            this.configDiagrammeColonnePortefeuille.push(<Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-relations",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_RELATIONS,
                valeur: statsRdvEtPortefeuille.nombreRelations,
                couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_RELATIONS,
                hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRdvEtPortefeuille.nombreRelations),
                estMontant: false

            });
            this.configDiagrammeColonnePortefeuille.push(<Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-clients",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_CLIENTS,
                sousIntitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_CLIENTS_ACTIFS,
                valeur: statsRdvEtPortefeuille.nombreClientsAvecProduitService,
                sousValeur: statsRdvEtPortefeuille.nombreClientsActifs,
                couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_CLIENT,
                couleurSousValeur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_ACTIF,
                hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRdvEtPortefeuille.nombreClientsAvecProduitService - statsRdvEtPortefeuille.nombreClientsActifs),
                sousHauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRdvEtPortefeuille.nombreClientsActifs),
                estMontant: false
            });
            this.configDiagrammeColonnePortefeuille.push(<Modeles.Application.IDataIndicateurColonne>{
                id: "colonne-prospects",
                intitule: Portefeuille.Constantes.Application.DIAGRAMME_COLONNE_PROSPECTS,
                valeur: statsRdvEtPortefeuille.nombreClientsSansContratEtProspect,
                couleur: Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_SANS_CONTRAT,
                hauteur: Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRdvEtPortefeuille.nombreClientsSansContratEtProspect),
                estMontant: false
            });
        }

        /**
         * Méthode permettant de créer la config du bouton de accéder portefeuille
         * @returns {void}
         */
        private creerConfigBoutonAccederRevuePortefeuille(): void {
            if (this.estVueMultiSuiviPar) {
                this.configBoutonAccederRevuePortefeuille = null;
            } else {
                this.configBoutonAccederRevuePortefeuille = <IConfigBoutonPanelNiv2>{};
                this.configBoutonAccederRevuePortefeuille.label = "Accéder";
                this.configBoutonAccederRevuePortefeuille.action = this.accederRevuePortefeuilles;
            }
        }

        private creerBlocRevuePortefeuille(statsRevuePtf: Modeles.ApplicationStats.IRevuePortefeuille): void {
            this.configPourcentagePortefeuilleRealise = <Services.LibrairieD3.IConfigPourcentageD3>{};
            this.configPourcentagePortefeuilleRealise.titre = Portefeuille.Constantes.Application.GRAPHE_REVUE_PORTEFEUILLE;
            this.configPourcentagePortefeuilleRealise.pourcentageUn = statsRevuePtf.pourcentageRevuePtfRealisee;
            this.configPourcentagePortefeuilleRealise.degrade = Services.LibrairieD3.DEGRADE_POURCENTAGE.BLEU;

            this.dataIndicateurNbProduitsAEquiper = <IDataIndicateurBadge>{};
            this.dataIndicateurNbProduitsAEquiper.intitule = Portefeuille.Constantes.Application.BADGE_PRODUITS_PROPOSER;
            if (this.estVueMultiSuiviPar) {
                this.dataIndicateurNbProduitsAEquiper.debranchementLisa = Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_PRODUIT_A_PROPOSER;
                this.dataIndicateurNbProduitsAEquiper.debranchementLocal = null;
            } else {
                this.dataIndicateurNbProduitsAEquiper.debranchementLisa = Portefeuille.Constantes.CodeProcessusLisa.CODE_LISA_BILAN_REVUES_PORTEFEUILLE;
                this.dataIndicateurNbProduitsAEquiper.debranchementLocal = Portefeuille.Constantes.Url.BILAN_REVUES_PORTEFEUILLE;
            }
            this.dataIndicateurNbProduitsAEquiper.valeur = statsRevuePtf.nombreDeProduitsAProposer.toString();

            this.dataIndicateurNbProduitsAppetence = <IDataIndicateurBadge>{};
            this.dataIndicateurNbProduitsAppetence.intitule = Portefeuille.Constantes.Application.BADGE_APPETENCE_PRODUITS;
            if (this.estVueMultiSuiviPar) {
                this.dataIndicateurNbProduitsAEquiper.debranchementLisa = Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_APPETENCE_PRODUIT;
                this.dataIndicateurNbProduitsAEquiper.debranchementLocal = null;
            } else {
                this.dataIndicateurNbProduitsAppetence.debranchementLisa = Portefeuille.Constantes.CodeProcessusLisa.CODE_LISA_BILAN_APPETENCES_PORTEFEUILLE;
                this.dataIndicateurNbProduitsAppetence.debranchementLocal = Portefeuille.Constantes.Url.BILAN_APPETENCES_PORTEFEUILLE;
            }
            this.dataIndicateurNbProduitsAppetence.valeur = (statsRevuePtf.nombreDeClientsAAppetence) ? statsRevuePtf.nombreDeClientsAAppetence.toString() : "0";

            // EPIPTF-104 si il n'y a aucune appétence on n'affiche pas du tout la ligne pour ne pas perturber les marchés qui n'ont pas d'appétences
            this.afficheAppetencesProduits = (!statsRevuePtf.nombreDeClientsAAppetence || statsRevuePtf.nombreDeClientsAAppetence === 0) ? false : true;

            this.dataIndicateurNbClientsAActiver = <IDataIndicateurBadge>{};
            this.dataIndicateurNbClientsAActiver.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_ACTIVER;
            this.dataIndicateurNbClientsAActiver.debranchementLisa = (this.estVueMultiSuiviPar) ? 0 : Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_A_ACTIVER;
            this.dataIndicateurNbClientsAActiver.valeur = statsRevuePtf.nombreDeClientsAActiver.toString();

            this.dataIndicateurNbClientsARenegocier = <IDataIndicateurBadge>{};
            this.dataIndicateurNbClientsARenegocier.intitule = Portefeuille.Constantes.Application.BADGE_CLIENTS_RENEGOCIER;
            this.dataIndicateurNbClientsARenegocier.debranchementLisa = (this.estVueMultiSuiviPar) ? 0 : Portefeuille.Enum.Revue.POPUP_REVUE.POPUP_CLIENTS_TARIFICATION;
            this.dataIndicateurNbClientsARenegocier.valeur = (statsRevuePtf.nombreDeClientsARenegocier) ? statsRevuePtf.nombreDeClientsARenegocier.toString() : "0";

            this.dataIndicateurNbPropositionsEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbPropositionsEnCours.intitule = Portefeuille.Constantes.Application.BADGE_PROPOSITIONS_EN_COURS;
            this.dataIndicateurNbPropositionsEnCours.debranchementLisa = (this.estVueMultiSuiviPar) ? 0 : Portefeuille.Constantes.CodeProcessusLisa.CODE_LISA_PROPOSITONS;
            // this.dataIndicateurNbPropositionsEnCours.debranchementLisa = 0;
            this.dataIndicateurNbPropositionsEnCours.debranchementLocal = null;
            this.dataIndicateurNbPropositionsEnCours.valeur = statsRevuePtf.nombreDePropositionsEnCours.toString();

            this.dataIndicateurNbAffairesEnCours = <IDataIndicateurBadge>{};
            this.dataIndicateurNbAffairesEnCours.intitule = Portefeuille.Constantes.Application.BADGE_AFFAIRES_EN_COURS;
            this.dataIndicateurNbAffairesEnCours.debranchementLisa = (this.estVueMultiSuiviPar) ? 0 : Portefeuille.Constantes.CodeProcessusLisa.CODE_LISA_GESTION_AFFAIRES;
            this.dataIndicateurNbAffairesEnCours.debranchementLocal = null;
            this.dataIndicateurNbAffairesEnCours.valeur = statsRevuePtf.nombreDeAffairesEnCours.toString();
        }

        /**
         * Méthode d'alimentation du bloc stats rentabilité
         * @param statsRentab
         */
        private creerBlocRentab(statsRentab: Modeles.ApplicationStats.IRentabilite): void {
            this.creerConfigPourcentageRentabilite(statsRentab);
            this.configFlecheRentabilite = this.indicateurFlecheService.getConfigIndicateurFleche(statsRentab.tauxEvolutionPnb);
            this.creerConfigDiagrammeColonneRentabilite(statsRentab);
        }

        /**
         * Méthode d'alimentation du bloc flux créditeurs
         * @param statsFlux
         */
        private creerBlocFluxCrediteurs(statsFlux: Modeles.ApplicationStats.IFlux): void {
            this.configFlecheFluxCrediteurs = this.indicateurFlecheService.getConfigIndicateurFleche(statsFlux.tauxEvolutionFlux);
            this.creerConfigDiagrammeColonneFluxCrediteurs(statsFlux);
        }

        /**
         * Méthode d'alimentation du bloc flux débiteurs
         * @param statsFlux
         */
        private creerBlocFluxDebiteurs(statsFlux: Modeles.ApplicationStats.IFlux): void {
            this.configFlecheFluxDebiteurs = this.indicateurFlecheService.getConfigIndicateurFleche(statsFlux.tauxEvolutionFlux);
            this.creerConfigDiagrammeColonneFluxDebiteurs(statsFlux);
        }

        /**
         * Méthode permettant de créer la liste des configs grande barre Flux Créditeurs
         * @returns {void}
         */
        private creerConfigDiagrammeColonneFluxCrediteurs(statsFlux: Modeles.ApplicationStats.IFlux): void {
            this.configDiagrammeColonneFluxCrediteurs = [];

            let valeurMax: number = Math.max(statsFlux.flux12DerniersMoisGlissantN, statsFlux.flux12DerniersMoisGlissNMoins1);

            let configGrandeBarrePeriode1 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode1.intitule = statsFlux ? `${moment(statsFlux.dateDebFlux12DerMoisGlissNMoins1).format("MM/YYYY")} à ${moment(statsFlux.dateFinFlux12DerMoisGlissNMoins1).format("MM/YYYY")}` : "";
            configGrandeBarrePeriode1.valeur = statsFlux ? statsFlux.flux12DerniersMoisGlissNMoins1 : 0;
            configGrandeBarrePeriode1.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2;
            configGrandeBarrePeriode1.estMontant = true;
            configGrandeBarrePeriode1.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsFlux.flux12DerniersMoisGlissNMoins1);
            configGrandeBarrePeriode1.nePasAfficherIntitule = true;
            this.configDiagrammeColonneFluxCrediteurs.push(configGrandeBarrePeriode1);

            let configGrandeBarrePeriode2 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode2.intitule = statsFlux ? `${moment(statsFlux.dateDebFlux12DerMoisGlissN).format("MM/YYYY")} à ${moment(statsFlux.dateFinFlux12DerMoisGlissN).format("MM/YYYY")}` : "";
            configGrandeBarrePeriode2.valeur = statsFlux ? statsFlux.flux12DerniersMoisGlissantN : 0;
            configGrandeBarrePeriode2.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1;
            configGrandeBarrePeriode2.estMontant = true;
            configGrandeBarrePeriode2.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsFlux.flux12DerniersMoisGlissantN);
            configGrandeBarrePeriode2.nePasAfficherIntitule = true;
            this.configDiagrammeColonneFluxCrediteurs.push(configGrandeBarrePeriode2);
        }

        /**
         * Méthode permettant de créer la liste des configs grande barre Flux Débiteurs
         * @returns {void}
         */
        private creerConfigDiagrammeColonneFluxDebiteurs(statsFlux: Modeles.ApplicationStats.IFlux): void {
            this.configDiagrammeColonneFluxDebiteurs = [];

            let valeurMax: number = Math.max(statsFlux.flux12DerniersMoisGlissantN, statsFlux.flux12DerniersMoisGlissNMoins1);

            let configGrandeBarrePeriode1 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode1.intitule = statsFlux ? `${moment(statsFlux.dateDebFlux12DerMoisGlissNMoins1).format("MM/YYYY")} à ${moment(statsFlux.dateFinFlux12DerMoisGlissNMoins1).format("MM/YYYY")}` : "";
            configGrandeBarrePeriode1.valeur = statsFlux ? statsFlux.flux12DerniersMoisGlissNMoins1 : 0;
            configGrandeBarrePeriode1.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2;
            configGrandeBarrePeriode1.estMontant = true;
            configGrandeBarrePeriode1.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsFlux.flux12DerniersMoisGlissNMoins1);
            configGrandeBarrePeriode1.nePasAfficherIntitule = true;
            this.configDiagrammeColonneFluxDebiteurs.push(configGrandeBarrePeriode1);

            let configGrandeBarrePeriode2 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode2.intitule = statsFlux ? `${moment(statsFlux.dateDebFlux12DerMoisGlissN).format("MM/YYYY")} à ${moment(statsFlux.dateFinFlux12DerMoisGlissN).format("MM/YYYY")}` : "";
            configGrandeBarrePeriode2.valeur = statsFlux ? statsFlux.flux12DerniersMoisGlissantN : 0;
            configGrandeBarrePeriode2.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1;
            configGrandeBarrePeriode2.estMontant = true;
            configGrandeBarrePeriode2.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsFlux.flux12DerniersMoisGlissantN);
            configGrandeBarrePeriode2.nePasAfficherIntitule = true;
            this.configDiagrammeColonneFluxDebiteurs.push(configGrandeBarrePeriode2);
        }

        /**
         * Méthode permettant de créer la liste des configs grande barre PNB
         * @returns {void}
         */
        private creerConfigDiagrammeColonneRentabilite(statsRentab: Modeles.ApplicationStats.IRentabilite): void {
            this.configDiagrammeColonneRentabilite = [];

            let valeurMax: number = Math.max(statsRentab.pnb12DerniersMoisGlissantN, statsRentab.pnb12DerniersMoisGlissNMoins1, statsRentab.pnb3112AnneeNMoins1);

            let configGrandeBarrePeriode3 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode3.intitule = (statsRentab.dateDebPnb3112AnneeNMoins1 && moment(statsRentab.dateDebPnb3112AnneeNMoins1).isValid()) ?
                "31/12/" + statsRentab.dateDebPnb3112AnneeNMoins1.getFullYear().toString() : "Année précédente";
            configGrandeBarrePeriode3.valeur = statsRentab ? statsRentab.pnb3112AnneeNMoins1 : 0;
            configGrandeBarrePeriode3.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE3;
            configGrandeBarrePeriode3.estMontant = true;
            configGrandeBarrePeriode3.nePasAfficherIntitule = true;
            configGrandeBarrePeriode3.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRentab.pnb3112AnneeNMoins1);
            this.configDiagrammeColonneRentabilite.push(configGrandeBarrePeriode3);

            let configGrandeBarrePeriode1 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode1.intitule = statsRentab ? `${moment(statsRentab.dateDebPnb12DerMoisGlissNMoins1).format("DD/MM/YYYY")} à ${moment(statsRentab.dateFinPnb12DerMoisGlissNMoins1).format("DD/MM/YYYY")}` : "";
            configGrandeBarrePeriode1.valeur = statsRentab ? statsRentab.pnb12DerniersMoisGlissNMoins1 : 0;
            configGrandeBarrePeriode1.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE2;
            configGrandeBarrePeriode1.estMontant = true;
            configGrandeBarrePeriode1.nePasAfficherIntitule = true;
            configGrandeBarrePeriode1.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRentab.pnb12DerniersMoisGlissNMoins1);

            this.configDiagrammeColonneRentabilite.push(configGrandeBarrePeriode1);

            let configGrandeBarrePeriode2 = <Modeles.Application.IDataIndicateurColonne>{};
            configGrandeBarrePeriode2.intitule = statsRentab ? `${moment(statsRentab.dateDebPnb12DerMoisGlissN).format("DD/MM/YYYY")} à ${moment(statsRentab.dateFinPnb12DerMoisGlissN).format("DD/MM/YYYY")}` : "";
            configGrandeBarrePeriode2.valeur = statsRentab ? statsRentab.pnb12DerniersMoisGlissantN : 0;
            configGrandeBarrePeriode2.couleur = Modeles.Application.COULEUR_GRANDE_COLONNE.COULEUR_PERIODE1;
            configGrandeBarrePeriode2.estMontant = true;
            configGrandeBarrePeriode2.nePasAfficherIntitule = true;
            configGrandeBarrePeriode2.hauteur = Services.Utils.ApplicationUtils.calculerHauteurRelativeColonne(valeurMax, statsRentab.pnb12DerniersMoisGlissantN);
            this.configDiagrammeColonneRentabilite.push(configGrandeBarrePeriode2);
        }

        /**
         * Méthode permettant de créer la config du pourcentage Rentabilité
         * @returns {void}
         */
        private creerConfigPourcentageRentabilite(statsRentab: Modeles.ApplicationStats.IRentabilite): void {
            this.configPourcentageRentabilite = <Services.LibrairieD3.IConfigPourcentageD3>{};
            this.configPourcentageRentabilite.titre = Portefeuille.Constantes.Application.GRAPHE_POIDS_PNB;
            this.configPourcentageRentabilite.pourcentageUn = statsRentab ? statsRentab.ratioPNBImportants : 0;
            this.configPourcentageRentabilite.degrade = Services.LibrairieD3.DEGRADE_POURCENTAGE.BLEU;
        }

        /**
         * Variable contenant la méthode permettant d'acceder à la gestion des portefeuilles Expert
         * @returns {void}
         */
        accederGestionPortefeuillesExpert = () => {
            this.ihmService.setTypeVue(Enum.PageClients.TYPE_VUE.VUE_CLIENTS); // demande vue client
            this.portefeuilleService.setTypeForcage(Enum.PageClients.TYPE_FORCAGE.CLIENTS);  // forçage client
            //On indique qu'on ne vient pas du bouton "accéder" du bloc revue portefeuille
            this.serviceAgentExtended.addToContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE, "N").then(() => {
                // ajoute une action remarquable
                this.contexteService.tracerSuiviAction(PortefeuilleControleur.logger, Constantes.ActionsRemarquables.BTN_ACCES_LISTE_CLIENTS);
                this.$location.path(Constantes.Url.CLIENTS);
            });
        };

        /**
         * Variable contenant la méthode permettant d'acceder à la gestion des portefeuilles
         * @returns {void}
         */
        private accederGestionPortefeuilles = () => {
            this.contexteService.recupererRetourDebranchement(
            ).then((resultatPromesse: Modeles.Application.IContexteGererPortefeuille) => {
                if (resultatPromesse) {
                    let contexteMisAJour: Modeles.Application.IContexteGererPortefeuille;
                    //1°) On ne conserve que objeVisu s'il est valorisé
                    if (resultatPromesse.objetEdsVisu) {
                        contexteMisAJour = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteMisAJour = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteMisAJour.objetEdsVisu = angular.copy(resultatPromesse.objetEdsVisu);
                    }

                    //2°) On supprime les données contextuelles, puis on valorise les données contextuelles nécessaires à la gestion des portefeuilles
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE, Constantes.Contexte.CONTEXTE_GERR_PORTF]
                    ).then(() => {
                        //this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        ).catch((erreur: MyWay.Services.Erreur) => {
                            PortefeuilleControleur.logger.info(JSON.stringify(">>accederGestionPortefeuilles<< Erreur lors de l'écriture du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                        });
                    }).catch((erreur: MyWay.Services.Erreur) => {
                        PortefeuilleControleur.logger.info(JSON.stringify(">>accederGestionPortefeuilles<< Erreur lors de la suppression du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                    });
                } else {
                    // On supprime les données contextuelles liée à la Revue
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE]);
                }
            }).catch((erreur: MyWay.Services.Erreur) => {
                PortefeuilleControleur.logger.info(">>accederGestionPortefeuilles<< Erreur lors de la récupération du contexte de gestion des portefeuilles: " + JSON.stringify(erreur));
            }).finally(() => {
                // On change va vers la liste des relations éco
                this.ihmService.setTypeVue(Enum.PageClients.TYPE_VUE.VUE_RELATION_ECONOMIQUE);
                this.portefeuilleService.setTypeForcage(Enum.PageClients.TYPE_FORCAGE.SANS);  // ICI, je remets
                //On indique qu'on ne vient pas du bouton "accéder" du bloc revue portefeuille
                this.serviceAgentExtended.addToContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE, "N").then(() => {
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(PortefeuilleControleur.logger, Constantes.ActionsRemarquables.BTN_ACCES_LISTE_CLIENTS);
                    this.$location.path(Constantes.Url.CLIENTS);
                });
            });
        };

        /**
         * Variable contenant la méthode permettant d'acceder à la revue portefeuille
         * @returns {void}
         */
        private accederRevuePortefeuilles = () => {
            this.contexteService.recupererRetourDebranchement(
            ).then((resultatPromesse: Modeles.Application.IContexteGererPortefeuille) => {
                if (resultatPromesse) {
                    let contexteMisAJour: Modeles.Application.IContexteGererPortefeuille;
                    //1°) On ne conserve que objeVisu s'il est valorisé
                    if (resultatPromesse.objetEdsVisu) {
                        contexteMisAJour = <Modeles.Application.IContexteGererPortefeuille>{};
                        contexteMisAJour.objetEdsVisu = angular.copy(resultatPromesse.objetEdsVisu);
                    }

                    //2°) On supprime les données contextuelles, puis on valorise les données contextuelles nécessaires à la gestion des portefeuilles
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE, Constantes.Contexte.CONTEXTE_GERR_PORTF]
                    ).then(() => {
                        //this.serviceAgentExtended.addToSharedContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        this.serviceAgentExtended.addToContext(Constantes.Contexte.CONTEXTE_GERR_PORTF, contexteMisAJour
                        ).catch((erreur: MyWay.Services.Erreur) => {
                            PortefeuilleControleur.logger.info(JSON.stringify(">>accederRevuePortefeuilles<< Erreur lors de l'écriture du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                        });
                    }).catch((erreur: MyWay.Services.Erreur) => {
                        PortefeuilleControleur.logger.info(JSON.stringify(">>accederRevuePortefeuilles<< Erreur lors de la suppression du contexte de gestion des portefeuilles: " + JSON.stringify(erreur)));
                    });
                } else {
                    // On supprime les données contextuelles liée à la Revue
                    this.contexteService.supprimerContexteDevenuInutile([Constantes.Contexte.CONTEXTE_VERS_REVUE]);
                }
            }).catch((erreur: MyWay.Services.Erreur) => {
                PortefeuilleControleur.logger.info(">>accederRevuePortefeuilles<< Erreur lors de la récupération du contexte de gestion des portefeuilles: " + JSON.stringify(erreur));
            }).finally(() => {
                // On change va vers la liste des clients
                this.ihmService.setTypeVue(Enum.PageClients.TYPE_VUE.VUE_CLIENTS);
                //on impose aucune limite du nombre de client a rechercher dans le cas d'un acces aux indicateurs de revue
                this.portefeuilleService.setTypeForcage(Enum.PageClients.TYPE_FORCAGE.TOUT);
                //On indique qu'on vient du bouton "accéder" du bloc revue portefeuille
                this.serviceAgentExtended.addToContext(Constantes.Contexte.ACCES_DEPUIS_BLOC_REVUE, "O").then(() => {
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(PortefeuilleControleur.logger, Constantes.ActionsRemarquables.BTN_ACCES_LISTE_CLIENTS_REVUE);
                    this.$location.path(Constantes.Url.CLIENTS);
                });
            });
        };
    }
    app.controller("PortefeuilleControleur", PortefeuilleControleur);
}