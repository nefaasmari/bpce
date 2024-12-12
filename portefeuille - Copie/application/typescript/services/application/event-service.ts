/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion d'événement
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant d'exposer tout ou partie de fonctions de certains controleurs
     */
    class EventService implements IEventService {
        public static CLASS_NAME = "EventService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(EventService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [
            Constantes.Inject.Angular.$q
        ];

        // Variables utiles
        private clientsControleur: Controleurs.ClientsControleur;
        private indexControleur: Controleurs.IndexControleur;
        private portefeuilleControleur: Controleurs.PortefeuilleControleur;
        private pfLigneRelationEcoControleur: Controleurs.PfLigneRelationEcoControleur;
        private pfDiagrammeDonutControleur: Controleurs.PfDiagrammeDonutControleur;
        private pfChoixPortefeuilleControleur: Controleurs.PfChoixPortefeuilleControleur;
        
        /**
         * Constructeur
         */
        constructor(
            private $q: ng.IQService) {
        }

        /**
         * Méthode permettant de modifier le PfDiagrammeDonutControleur
         * @param PfDiagrammeDonutControleur
         * @return {void}
         */
        public setPfDiagrammeDonutControleur(pfDiagrammeDonutControleur: Controleurs.PfDiagrammeDonutControleur): void {
            this.pfDiagrammeDonutControleur = pfDiagrammeDonutControleur;
        }

        /**
         * 
         */
        public initialiserPfDiagrammeDonutControleur(): void {
            if (this.pfDiagrammeDonutControleur) {
                this.pfDiagrammeDonutControleur.initialiser();
            }
        }

        /**
         * Méthode permettant de modifier le portefeuilleControleur
         * @param portefeuilleControleur
         * @return {void}
         */
        public setPortefeuilleControleur(portefeuilleControleur: Controleurs.PortefeuilleControleur): void {
            this.portefeuilleControleur = portefeuilleControleur;
        }

        /**
         * Méthode permettant de modifier le pfLigneRelationEcoControleur
         * @param pfLigneRelationEcoControleur
         * @return {void}
         */
        public setPfLigneRelationEcoControleur(pfLigneRelationEcoControleur: Controleurs.PfLigneRelationEcoControleur): void {
            this.pfLigneRelationEcoControleur = pfLigneRelationEcoControleur;
        }

        /**
         * 
         * @param listeIndicateurs
         */
        public reInitialiserLigneRelationEcoPfLigneRelationEcoControleur(listeIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void {
            if (this.pfLigneRelationEcoControleur) {
                this.pfLigneRelationEcoControleur.reInitialiser(listeIndicateurs);
            }
        }

        /**
         * Méthode permettant de modifier le clientControleur
         * @param clientsControleur
         * @return {void}
         */
        public setClientsControleur(clientsControleur: Controleurs.ClientsControleur): void {
            this.clientsControleur = clientsControleur;
        }

        /**
         * Méthode permettant de modifier l'indexControleur
         * @param indexControleur
         * @return {void}
         */
        public setIndexControleur(indexControleur: Controleurs.IndexControleur): void {
            this.indexControleur = indexControleur;
        }

        /**
         * Méthode permettant de modifier l'indexControleur
         * @param indexControleur
         * @return {void}
         */
        public setChoixPortfeuilleControleur(choixPortfeilleControleur: Controleurs.PfChoixPortefeuilleControleur): void {
            this.pfChoixPortefeuilleControleur = choixPortfeilleControleur;
        }

        /**
         * 
         */
        public initialiserListePortfeuilleIndexControleur(): ng.IPromise<void> {
            if (this.pfChoixPortefeuilleControleur) {
                return this.indexControleur.initListePortefeuilles();
            }
        }

        /**
         * 
         * @param edsChoisi
         * @param contexte
         * @param listePtfActifs
         */
        public majDonneesDonneesEdsIndexControleur(edsChoisi: Modeles.Application.ICaracteristiquesAgent,
            contexte: Modeles.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void> {
            if (this.indexControleur) {
                return this.indexControleur.majDonneesDonneesEds(edsChoisi, contexte, listePtfActifs);
            } else {
                return this.$q.when();
            }
        }

        /**
         * 
         * @param estHabilite
         */
        public initialiserHabilitationChoixAgentIndexControleur(estHabilite: boolean): void {
            if (this.indexControleur) {
                this.indexControleur.initialiserHabilitationChoixAgent(estHabilite);
            }
        }

        /**
         * 
         * @param estHabilite
         */
        public initialiserHabilitationChoixEDSIndexControleur(estHabilite: boolean): void {
            if (this.indexControleur) {
                this.indexControleur.initialiserHabilitationChoixEDS(estHabilite);
            }
        }

        /**
         * Méthode permettant d'ouvrir le volet de choix de portefeuille via l'indexControleur
         * @param indexControleur
         * @return {void}
         */
        public ouvrirVoletChoixPortefeuilleIndexControleur(): void {
            if (this.indexControleur) {
                this.indexControleur.ouvrirChoixPortefeuille();
            }
        }

        /**
         * Permet d'effectuer le filtrage relation economique sur le tableau client
         * @param idRelationFiltre
         * @returns {void}
         */
        public filtrageTableauClientClientsControleur(idRelationFiltre: string): void {
            if (this.clientsControleur) {
                this.clientsControleur.filtrageTableauClient(idRelationFiltre);
            }
        }

        /**
         * 
         * @param typeForcage
         */
        public initialiserListeRelationEtClient(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<void> {
            if (this.clientsControleur) {
                return this.clientsControleur.initialiser(typeForcage);
            }
        }

        /**
         * 
         */
        public initialiserVueGlobale(): ng.IPromise<void> {
            if (this.portefeuilleControleur) {
                return this.portefeuilleControleur.initialiserStatistiques();
            }
        }

        /**
         * Permet de supprimer tous les filtres d'un tableau via le clients controleur
         * @returns {void}
         */
        public supprimerTousLesFiltresClientsControleur(): void {
            if (this.clientsControleur) {
                this.clientsControleur.supprimerTousLesFiltres();
            }
        }

        /**
         * 
         */
        public reinitInitStatsVueGlobale(): void {
            if (this.portefeuilleControleur) {
                this.portefeuilleControleur.reinitInitStats();
            }
        }

        /**
         * 
         */
        public initListePortefeuilles(): ng.IPromise<void> {
            if (this.indexControleur) {
                return this.indexControleur.initListePortefeuilles();
            } else {
                return this.$q.when();
            }
        }

        /**
         * 
         */
        public chargerListePortefeilleDropDown(): void {
            if (this.indexControleur) {
                this.indexControleur.chargerListePortefeilleDropDown();
            }
        }

        /**
         * 
         */
        public setEstVueMultiGererPar(etat: boolean): void {
            if (this.portefeuilleControleur) {
                this.portefeuilleControleur.setEstVueMultiSuiviPar(etat);
            }
        }
    }

    /**
     * Interface de la classe EventService
     */
    export interface IEventService {
        setPfDiagrammeDonutControleur(pfDiagrammeDonutControleur: Controleurs.PfDiagrammeDonutControleur): void;
        initialiserPfDiagrammeDonutControleur(): void;
        setPfLigneRelationEcoControleur(pfLigneRelationEcoControleur: Controleurs.PfLigneRelationEcoControleur): void;
        reInitialiserLigneRelationEcoPfLigneRelationEcoControleur(listeIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void;
        setClientsControleur(clientsControleur: Controleurs.ClientsControleur): void;
        filtrageTableauClientClientsControleur(idRelationFiltre: string): void;
        setIndexControleur(indexControleur: Controleurs.IndexControleur): void;
        setChoixPortfeuilleControleur(choixPortfeilleControleur: Controleurs.PfChoixPortefeuilleControleur): void;
        initialiserListePortfeuilleIndexControleur(): ng.IPromise<void>;
        initialiserHabilitationChoixAgentIndexControleur(estHabilite: boolean): void;
        initialiserHabilitationChoixEDSIndexControleur(estHabilite: boolean): void;
        ouvrirVoletChoixPortefeuilleIndexControleur(): void;
        initialiserListeRelationEtClient(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<void>;
        supprimerTousLesFiltresClientsControleur(): void;
        setPortefeuilleControleur(portefeuilleControleur: Controleurs.PortefeuilleControleur): void;
        initialiserVueGlobale(): ng.IPromise<void>;
        reinitInitStatsVueGlobale(): void;
        majDonneesDonneesEdsIndexControleur(edsChoisi: Modeles.Application.ICaracteristiquesAgent, contexte: Modeles.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void>;
        initListePortefeuilles(): ng.IPromise<void>;
        chargerListePortefeilleDropDown(): void;
        setEstVueMultiGererPar(etat: boolean): void;
    }

    // Déclaration du service
    app.service(EventService.CLASS_NAME, EventService);
}  