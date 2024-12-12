/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service de gestion de la liste des portefeuilles
     */
    class PortefeuilleService implements IPortefeuilleService {
        public static CLASS_NAME = "PortefeuilleService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PortefeuilleService.CLASS_NAME);

        // Proprietés
        private listePortefeuilles: Modeles.Application.IPortefeuille[];
        private portefeuilleInitialise: boolean;
        private caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent;
        private typeForcage: Enum.PageClients.TYPE_FORCAGE;

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.MyWay.serviceAgentExtended,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$window,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Services.recherchePortefeuilleRestService,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.preferencesService
        ];

        /**
         * Constructeur
         * @param serviceAgentExtended
         * @param $location
         */
        constructor(
            private serviceAgentExtended: MyWay.Services.ServiceAgentExtended,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private $q: ng.IQService,
            private recherchePortefeuilleService: Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleService,
            private contexteService: Services.Application.IContexteService,
            private eventService: Services.Application.IEventService,
            private preferencesService: Services.Application.IPreferencesService) {

            this.listePortefeuilles = [];
            this.portefeuilleInitialise = false;
        }


        /**
         * Méthode de mise à jour des portefeuilles selectionnés dans les préférences
         * @param {Modeles.Application.IPortefeuille[]} portefeuilles
         */
        public setListePortfeuillesVisu(portefeuilles: Modeles.Application.IPortefeuille[]): ng.IPromise<void> {
            this.listePortefeuilles = portefeuilles;
            return this.contexteService.getContexte().then((ctx: Modeles.Application.IContexte) => {
                // On enregistre les choix de portefeuille que si l'on est sur l'eds de l'agent connecté
                return (ctx.edsUser === ctx.edsVisu) ?
                    <ng.IPromise<void>>this.preferencesService.ecrireChoixPortefeuilles(portefeuilles) :
                    this.$q.when();
            });
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles selectionnées 
         * @return {Array<Modeles.Application.IPortefeuille>}
         */
        public getListePortefeuillesVisu(): Array<Modeles.Application.IPortefeuille> {
            return this.listePortefeuilles;
        }

        public getListeCodeSuiviParComplementairePortefeuillesExpertVisu(): string[] {
            return _.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && item.estAffiche
            ).map((ptf: Modeles.Application.IPortefeuille) => {
                return ptf.codeSuiviParComplementaire;
            });
        }

        public getListeLibelleSuiviParComplementairePortefeuillesExpertVisu(): string[] {
            return _.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && item.estAffiche
            ).map((ptf: Modeles.Application.IPortefeuille) => {
                return ptf.libelle;
            });
        }

        /**
         * Méthode permettant d'indiquer si au moins 1 portefeuille est séléctionné pour affichage
         */
        public aPortefeuillesAffiche(): boolean {
            return (_.where(this.listePortefeuilles, { "estAffiche": true }).length > 0);
        }

        /**
         * Méthode permettant d'indiquer si au moins 1 portefeuille est séléctionné pour affichage
         */
        public aPortefeuillesReelAffiche(): boolean {
            return (_.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id > (Constantes.Application.ID_PORTEFEUILLE_MAX_SPC - 1) && item.estAffiche
            ).length > 0);
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles de l'agent connecté
         * @return {ng.IPromise<Modeles.Application.IPortefeuille[]>}
         */
        getListePortefeuilleAgentConnecte(): ng.IPromise<Modeles.Application.IPortefeuille[]> {
            if (this.portefeuilleInitialise) {
                return this.$q.when(this.listePortefeuilles);
            } else {
                this.portefeuilleInitialise = true;
                return this.contexteService.getAuthentification().
                    then((contexte: MyWay.Services.Context.AuthentificationInfo) => {
                        let query: Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery =
                            <Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery>{};
                        query.codeEtablissement = contexte.codeEtablissement;
                        query.IdentifianElementStructure = +contexte.agentConnecte.numeroInterneEds;
                        query.typeRecherche = "C"; // recherche en incluant le suiviPar complémentaire 'SPC'
                        return this.getListePortefeuilleQuery(query);
                    });
            }
        }

        /**
         * Récupèrer le caracterisitque de l'agent connecté
         */
        public getCaracteristiquesAgentConnecte(): ng.IPromise<Modeles.Application.ICaracteristiquesAgent> {
            return this.contexteService.getAuthentification().then((contexte: MyWay.Services.Context.AuthentificationInfo) => {
                let caracteristiquesAgent = <Modeles.Application.ICaracteristiquesAgent>{};
                caracteristiquesAgent.codeEtablissement = contexte.codeEtablissement;
                caracteristiquesAgent.designationAgent = contexte.agentConnecte.designationLongueAgent;
                caracteristiquesAgent.identifiantElementStructure = +contexte.agentConnecte.numeroInterneEds;
                caracteristiquesAgent.libelleFonction = contexte.agentConnecte.designationPosteFonctionnel;
                this.setCaracteristiquesAgent(caracteristiquesAgent);
                return this.caracteristiquesAgent;
            });
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles d'un agent choisi
         * @param {Modeles.Application.ICaracteristiquesAgent} edsChoisi
         * @return {ng.IPromise<Modeles.Application.IPortefeuille[]>}
         */
        public getListePortefeuilleAgentChoisi(edsChoisi: Modeles.Application.ICaracteristiquesAgent): ng.IPromise<Modeles.Application.IPortefeuille[]> {
            let query = <Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery>{};
            query.codeEtablissement = edsChoisi.codeEtablissement;
            query.IdentifianElementStructure = edsChoisi.identifiantElementStructure;
            query.typeRecherche = "C"; // recherche en incluant le suiviPar complémentaire 'SPC'
            return this.getListePortefeuilleQuery(query);
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles d'une structure qui contient des agents
         * @param {Modeles.Application.ICaracteristiquesAgent} edsChoisi
         * @return {ng.IPromise<Modeles.Application.IPortefeuille[]>}
         */
        public getListePortefeuilleEDSChoisi(codeEtablissement: string, edsChoisi: number): ng.IPromise<Modeles.Application.IPortefeuille[]> {
            let query = <Services.Rest.RecherchePortefeuille.IListeRecherchePortefeuilleQuery>{};
            query.codeEtablissement = codeEtablissement;
            query.IdentifianElementStructure = edsChoisi;
            return this.getListePortefeuilleParEdsQuery(query);
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles multi suivi par à partir d'un query
         * @param {Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery} query
         * @return {ng.IPromise<Modeles.Application.IPortefeuille[]>}
         */
        private getListePortefeuilleQuery(query: Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery): ng.IPromise<Modeles.Application.IPortefeuille[]> {
            let listPromesse: Array<ng.IPromise<number[] | Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche>> = [];
            listPromesse.push(<ng.IPromise<number[]>>this.preferencesService.lireChoixPortefeuilles().
                then((listePreferences: Array<number>) => {
                    return listePreferences;
                })
            );
            listPromesse.push(this.recherchePortefeuilleService.getPortefeuilles(query).
                then((listePortefeilleRest: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche) => {
                    return listePortefeilleRest;
                })
            );
            return this.$q.all(listPromesse).then((resultat: Array<Array<number> | Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche>) => {
                let listePreferences: Array<number> = <Array<number>>resultat[0];
                let listePortefeilleRest: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche = <Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche>resultat[1];

                this.listePortefeuilles = [];
                if (listePortefeilleRest && listePortefeilleRest.DonneeSignifiante) {
                    _.forEach(listePortefeilleRest.DonneeSignifiante, ((portefeuilleAgent: Modeles.Rest.PortefeuilleV1.recherche.IDonneeSignifiante) => {
                        let portefeuille: Modeles.Application.IPortefeuille = Utils.ApplicationUtils.getPortefeuilleDepuisDonneeSignifiante(portefeuilleAgent);
                        // on verifie si le portefeuille traite est dans les preferences
                        if (listePreferences && listePreferences.indexOf(portefeuille.id) >= 0) {
                            portefeuille.estAffiche = true;
                        }
                        this.listePortefeuilles.push(portefeuille);
                    }));
                }
                // Forçage de l'affichage si 1 seul portefeuille
                if (this.listePortefeuilles.length === 1) {
                    this.listePortefeuilles[0].estAffiche = true;
                }
                this.portefeuilleInitialise = true;
                // console.log('getListePortefeuilleQuery', this.listePortefeuilles);
                return this.$q.when(this.listePortefeuilles);
            });
        }

        /**
         * Methode permetant de récupérer la liste des portefeuilles pour un EDS à partir d'un query
         * @param {Services.Rest.RecherchePortefeuille.IRecherchePortefeuilleQuery} query
         * @return {ng.IPromise<Modeles.Application.IPortefeuille[]>}
         */
        private getListePortefeuilleParEdsQuery(
            query: Services.Rest.RecherchePortefeuille.IListeRecherchePortefeuilleQuery): ng.IPromise<Modeles.Application.IPortefeuille[]> {
            return this.recherchePortefeuilleService.getlistePortefeuillesParEds(query).
                then((listePortefeilleRest: Modeles.Rest.PortefeuilleV1.recherche.IListePortefeuille) => {
                    this.listePortefeuilles = [];
                    if (listePortefeilleRest &&
                        listePortefeilleRest.donneePortefeuille) {
                        _.forEach(
                            listePortefeilleRest.donneePortefeuille,
                            ((portefeuilleAgent: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleInfo) => {
                                if (portefeuilleAgent.codeTypePortefeuille === "C" ||
                                    portefeuilleAgent.codeTypePortefeuille === "R" ||
                                    (portefeuilleAgent.codeTypePortefeuille === "N" &&
                                        portefeuilleAgent.indicateurAffectation === "N")) {
                                    // on ne prend pas les portefeuille reservoir, collectif et principal non affecté
                                } else {
                                    // Si le libelle court EDS est null on met une un libelle avec le numéro EDS du suivi Par
                                    if (!portefeuilleAgent.libelleCourtEDS) {
                                        portefeuilleAgent.libelleCourtEDS = "AGENT-" + portefeuilleAgent.identifiantEdsSuiviPortefeuille;
                                    }

                                    let portefeuille: Modeles.Application.IPortefeuille =
                                        Utils.ApplicationUtils.getPortefeuilleDepuisListePortefeuille(portefeuilleAgent);
                                    this.listePortefeuilles.push(portefeuille);
                                }
                            }));
                    }
                    // Forçage de l'affichage si 1 seul portefeuille
                    if (this.listePortefeuilles.length === 1) {
                        this.listePortefeuilles[0].estAffiche = true;
                    }
                    this.portefeuilleInitialise = true;
                    return this.$q.when(this.listePortefeuilles);
                });
        }

        /**
         * Méthode de récupération des caractéristiques Agent
         *  @return {Modeles.Application.ICaracteristiquesAgent}
         */
        public getCaracteristiquesAgent(): Modeles.Application.ICaracteristiquesAgent {
            return this.caracteristiquesAgent;
        }

        /**
         * Méthode de Mise à jour des caractéristiques Agent
         * @param {Modeles.Application.ICaracteristiquesAgent} caracteristiquesAgent
         */
        public setCaracteristiquesAgent(caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent): void {
            this.caracteristiquesAgent = caracteristiquesAgent;
        }

        /**
         * Méthode permettant de voir si l'eds en cours a au moins un portefeuille
         */
        public aPortefeuille(): boolean {
            return (this.listePortefeuilles.length > 0);
        }

        /**
         * Méthode permettant de savoir si l'eds en cours à au moins un portefeuille de type portefeuille
         */
        public aPortefeuilleReel(): boolean {
            return (_.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC - 1
            ).length > 0);
        }

        /**
         * 
         */
        public aPortefeuilleExpertAffiche(): boolean {
            return (_.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC && item.estAffiche
            ).length > 0);
        }

        /**
         * Méthode permettant de savoir si l'eds en cours à au moins un suivi par complémentaire
         */
        public aSuiviParComplementaire(): boolean {
            // return (_.where(this.listePortefeuilles, { "id": 0 }).length > 0);
            return (_.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id < Constantes.Application.ID_PORTEFEUILLE_MAX_SPC
            ).length > 0);
        }

        public nbPortefeuilleReel(): number {
            return _.filter(this.listePortefeuilles, (item: Modeles.Application.IPortefeuille) =>
                item.id > Constantes.Application.ID_PORTEFEUILLE_MAX_SPC - 1
            ).length;
        }

        /**
         * Méthode retournant les portefeuilles sélectionnés
         */
        public getListePortefeuillesActifs(): Array<Modeles.Application.IPortefeuille> {
            return _.where(this.listePortefeuilles, { "estAffiche": true });
        }

        /**
         * 
         * @param listePtfActifs
         */
        public setListePortefeuillesActifs(listePtfActifs: Array<number>): void {
            _.forEach(listePtfActifs, (ptfId: number) => {
                let ptfTemp: Array<Modeles.Application.IPortefeuille> = _.where(this.listePortefeuilles, { "id": ptfId });
                if (ptfTemp && ptfTemp.length > 0) {
                    ptfTemp[0].estAffiche = true;
                }
            });
        }

        /**
         * 
         * @param typeForcage
         */
        public setTypeForcage(typeForcage: Enum.PageClients.TYPE_FORCAGE): void {
            this.typeForcage = typeForcage;
        }

        /**
         * 
         */
        public getTypeForcage(): Enum.PageClients.TYPE_FORCAGE {
            return this.typeForcage;
        }

        /**
         * Grouper les portefeuille par agent
         * @param listePortefeuilles
         */
        public regrouperPortfeuilleParAgent(
            listePortefeuilles: Array<Modeles.Application.IPortefeuille>): Array<Modeles.Application.IAgent> {
            _.forEach(listePortefeuilles, (item: Modeles.Application.IPortefeuille) => {
                if (!item.idAgent) {
                    item.idAgent = 0;
                    item.nomPrenonAgent = "";
                }
                item.idAgentString = "" + item.idAgent;
            });
            let listPortfeuilleParAgent: Array<Modeles.Application.IAgent>;
            if (listePortefeuilles) {
                listPortfeuilleParAgent = _.chain(listePortefeuilles).
                    groupBy("idAgentString").
                    map((value: Modeles.Application.IPortefeuille[]) => {
                        return <Modeles.Application.IAgent>{
                            "id": value[0].idAgent,
                            "nomPrenonAgent": value[0].nomPrenonAgent,
                            "listPortefeuilleParAgent": value,
                            "estAffiche": true,
                            "isVisu": true
                        };
                    }).value();
                listPortfeuilleParAgent = _.sortBy(
                    listPortfeuilleParAgent,
                    (obj: Modeles.Application.IAgent) => {
                        return obj.nomPrenonAgent.replace("MR ", "").replace("ME ", "");
                    });
            } else {
                listPortfeuilleParAgent = [];
            }
            return listPortfeuilleParAgent;
        }

        /**
         * degrouper la liste des portefeuilles (contraire du regroupement des portefeuilles par agent)
         * @param listPortfeuilleParAgent
         */
        public regrouperToutPortfeuille(
            listPortfeuilleParAgent: Array<Modeles.Application.IAgent>): Array<Modeles.Application.IPortefeuille> {
            let listetRegrouper: Modeles.Application.IPortefeuille[];
            if (listPortfeuilleParAgent) {
                listetRegrouper =
                    _.reduce(listPortfeuilleParAgent,
                        (resultat: Array<Modeles.Application.IPortefeuille>,
                            value: Modeles.Application.IAgent) => {
                            return resultat.concat(value.listPortefeuilleParAgent);
                        },
                        <Array<Modeles.Application.IPortefeuille>>[]);
                listetRegrouper = _.sortBy(listetRegrouper, (item: Modeles.Application.IPortefeuille) => {
                    return item.nomPrenonAgent;
                });
            }
            return listetRegrouper;
        }
    }

    /**
     * Interface de la classe PortefeuilleService
     */
    export interface IPortefeuilleService {
        getListePortefeuilleAgentConnecte(): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        getListePortefeuilleAgentChoisi(edsChoisi: Modeles.Application.ICaracteristiquesAgent): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        getListePortefeuilleEDSChoisi(codeEtablissement: string, edsChoisi: number): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        setListePortfeuillesVisu(portfeuilles: Modeles.Application.IPortefeuille[]): ng.IPromise<void>;
        getListePortefeuillesVisu(): Array<Modeles.Application.IPortefeuille>;
        getListeCodeSuiviParComplementairePortefeuillesExpertVisu(): string[];
        getListeLibelleSuiviParComplementairePortefeuillesExpertVisu(): string[];
        aPortefeuillesAffiche(): boolean;
        aPortefeuillesReelAffiche(): boolean;
        getCaracteristiquesAgent(): Modeles.Application.ICaracteristiquesAgent;
        setCaracteristiquesAgent(caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent): void;
        getCaracteristiquesAgentConnecte(): ng.IPromise<Modeles.Application.ICaracteristiquesAgent>;
        aPortefeuille(): boolean;
        getListePortefeuillesActifs(): Array<Modeles.Application.IPortefeuille>;
        setListePortefeuillesActifs(listePtfActifs: Array<number>): void;
        setTypeForcage(typeForcage: Enum.PageClients.TYPE_FORCAGE): void;
        getTypeForcage(): Enum.PageClients.TYPE_FORCAGE;
        regrouperPortfeuilleParAgent(
            listePortefeuilles: Array<Modeles.Application.IPortefeuille>): Array<Modeles.Application.IAgent>;
        regrouperToutPortfeuille(
            listPortfeuilleParAgent: Array<Modeles.Application.IAgent>): Array<Modeles.Application.IPortefeuille>;
        aSuiviParComplementaire(): boolean;
        aPortefeuilleReel(): boolean;
        aPortefeuilleExpertAffiche(): boolean;
        nbPortefeuilleReel(): number;
    }

    app.service(PortefeuilleService.CLASS_NAME, PortefeuilleService);
}  