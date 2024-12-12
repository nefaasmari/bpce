/// <reference path="../constantes/inject-constantes.ts" />

/**
 * Controleur de l'index
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Controleur de l'index
     */
    export class IndexControleur {
        public static CLASS_NAME = "IndexControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(IndexControleur.CLASS_NAME);

        // Proprietées
        public edsChoisi: Modeles.Application.ICaracteristiquesAgent;
        public titrePage: string;
        public afficherHeader: boolean = false;
        public messageAucunPortefeuille: string;
        public chargementEnCours: boolean;
        public estHabiliteChoixAgent: boolean;
        public estHabiliteChoixEDS: boolean;
        public messageErreurTechnique: string;
        public aErreurTechnique: boolean;

        public ouvertureVoletChoixPortefeuille: boolean;
        public listePortefeuillesDropDown: Modeles.Application.IAgent[];
        public listePortefeuilles: Modeles.Application.IPortefeuille[];
        public estVueGlobalConsolide: boolean;
        
        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$location,
            Constantes.Inject.Angular.$window,
            Constantes.Inject.Services.lisaApplication,
            Constantes.Inject.Services.contexteService,
            Constantes.Inject.Services.portefeuilleService,
            Constantes.Inject.Services.eventService,
            Constantes.Inject.Services.popupService,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.Services.listeClientsService,
            Constantes.Inject.Services.choixUtilisateurService
        ];

        /**
         * Constructeur
         * @param $scope
         * @param serviceAgentExtended
         * @param $location
         * @param lisaApplication
         */
        constructor(
            private $scope: ng.IScope,
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private lisaApplication: Portefeuille.Services.Application.ILisaApplication,
            private contexteService: Services.Application.IContexteService,
            private portefeuilleService: Services.Application.IPortefeuilleService,
            private eventService: Services.Application.IEventService,
            private popupService: Services.Application.IPopupService,
            private $q: ng.IQService,
            private listeClientsService: Services.Application.IListeClientsService,
            private choixUtilisateurService: Services.Application.IChoixUtilisateurService
        ) {
            this.initialiser();
        }

        /**
         * 
         */
        private initialiser(): void {
            this.eventService.setIndexControleur(this);
            this.chargementEnCours = true;
            this.estHabiliteChoixAgent = false;
            this.estHabiliteChoixEDS = false;
            this.titrePage = Constantes.Application.TITRE_APPLICATION;
            this.afficherHeader = true;
            this.messageAucunPortefeuille = Constantes.Messages.MESSAGE_AUCUN_PORTEFEUILLE;
            this.chargementEnCours = false;
            this.aErreurTechnique = false;
            this.messageErreurTechnique = Constantes.Messages.MESSAGE_ERREUR_TECHNIQUE;
        }

        /**
         * 
         * @param habilitation
         */
        public initialiserHabilitationChoixAgent(habilitation: boolean): void {
            this.estHabiliteChoixAgent = habilitation;
        }

        /**
         * 
         * @param habilitation
         */
        public initialiserHabilitationChoixEDS(habilitation: boolean): void {
            this.estHabiliteChoixEDS = habilitation;
        }

        /**
         * 
         */
        public estVueMultiSuiviPar(): boolean {
            return this.estVueGlobalConsolide;
        }

        /**
         * 
         */
        public afficherPopupChoixAgent(): void {
            this.afficherPopupEDS(<Portefeuille.Modeles.Application.IPopupData<string>>{
                actionButtonText: null,
                closeButtonText: null,
                headerText: "Changer d'agent",
                bodyText: null,
                iconName: null,
                model: Enum.Vue.TYPE_VUE.VUE_AGENT.toString()
            });
        }

        /**
         * 
         */
        public afficherPopupChoixEds(): void {
            this.afficherPopupEDS(<Portefeuille.Modeles.Application.IPopupData<string>>{
                    actionButtonText: null,
                    closeButtonText: null,
                    headerText: "Choisir l'EDS",
                    bodyText: null,
                    iconName: null,
                    model: Enum.Vue.TYPE_VUE.VUE_EDS.toString()
            });
        }

        /**
         * 
         * @param data
         */
        private afficherPopupEDS(data: Portefeuille.Modeles.Application.IPopupData<string>): void {
            const templateChoixEds: string = "vues/template-modale/modale-choix-eds-vue.html";
            const controleurChoixEds: string = "ModaleChoixEdsControleur";
            let contexte: Modeles.Application.IContexte = <Modeles.Application.IContexte>{};
            this.contexteService.getContexte().then((contexteRecu: Modeles.Application.IContexte) => {
                let modalChoixEds: ng.IPromise<any> = (data.model === Enum.Vue.TYPE_VUE.VUE_EDS.toString()) ?
                    this.popupService.showModalFull(templateChoixEds, controleurChoixEds, data) :
                    this.popupService.showModalMd(templateChoixEds, controleurChoixEds, data);
                return modalChoixEds.then((edsChoisi: Modeles.Application.ICaracteristiquesAgent) => {
                    // ajoute une action remarquable
                    this.contexteService.tracerSuiviAction(IndexControleur.logger, Constantes.ActionsRemarquables.BTN_CHANGER_AGENT);
                    this.estVueGlobalConsolide = (data.model === Enum.Vue.TYPE_VUE.VUE_EDS.toString());
                    this.eventService.setEstVueMultiGererPar(this.estVueGlobalConsolide);
                    this.chargementEnCours = true;
                    this.$window.scrollTo(0, 0);
                    return this.majDonneesDonneesEds(edsChoisi, contexte, null).then(() => {
                        this.$location.path(Constantes.Url.PORTEFEUILLE);
                        this.chargementEnCours = false;
                        return this.$q.when();
                    });
                });
            }).catch((erreur: MyWay.Services.Erreur) => {
                if (erreur) {
                    IndexControleur.logger.error("Erreur de recherche de l'EDS", erreur.codeLibelle, erreur.libelle);
                    this.popupService.showErreur(erreur);
                } else {
                    IndexControleur.logger.error("Erreur de recherche de l'EDS");
                }
            });
        }

        /**
         * 
         * @param edsChoisi
         * @param contexte
         * @param listePtfActifs
         */
        public majDonneesDonneesEds(
            edsChoisi: Modeles.Application.ICaracteristiquesAgent,
            contexte: Modeles.Application.IContexte,
            listePtfActifs: Array<number>): ng.IPromise<void> {
            this.edsChoisi = edsChoisi;
            //Defini si un changement de contexte à été effectue soit par :
            //  - changement d'agent
            //  - choix d'un EDS
            if (edsChoisi &&
                (edsChoisi.identifiantElementStructure !== contexte.edsVisu ||
                this.estVueGlobalConsolide !== contexte.estVueMultiSuiviPar)) {
                this.contexteService.setEdsVisu(edsChoisi.identifiantElementStructure);
                this.contexteService.setestVueMultiSuiviPar(this.estVueGlobalConsolide);
                this.listeClientsService.razRelations();
                this.portefeuilleService.setCaracteristiquesAgent(edsChoisi);
                this.portefeuilleService.setTypeForcage(Enum.PageClients.TYPE_FORCAGE.SANS);

                if (this.estVueMultiSuiviPar()) {
                    return this.portefeuilleService.
                        getListePortefeuilleEDSChoisi(contexte.codeEtablissement, this.choixUtilisateurService.edsSelectionne.id).
                        then((portefeuille: Modeles.Application.IPortefeuille[]) => {
                        return this.integrerPortefeuilleActifs(portefeuille, listePtfActifs);
                    });
                } else {
                    return this.portefeuilleService.
                        getListePortefeuilleAgentChoisi(edsChoisi).
                        then((portefeuille: Modeles.Application.IPortefeuille[]) => {
                        return this.integrerPortefeuilleActifs(portefeuille, listePtfActifs);
                    });
                }
            } else {
                return this.$q.when();
            }
        }

        /**
         * 
         * @param portefeuille
         * @param listePtfActifs
         */
        private integrerPortefeuilleActifs(
            portefeuille: Modeles.Application.IPortefeuille[],
            listePtfActifs: Array<number>): ng.IPromise<void> {
            console.log("indexControleur integrerPortefeuilleActifs listePtfActifs", listePtfActifs);
            this.listePortefeuilles = angular.copy(portefeuille);
            this.$scope.$apply();
            if (this.portefeuilleService.aPortefeuille()) {
                if (listePtfActifs && listePtfActifs.length > 0) {
                    this.portefeuilleService.setListePortefeuillesActifs(listePtfActifs);
                    this.listePortefeuilles = this.portefeuilleService.getListePortefeuillesVisu();
                }
                if (this.portefeuilleService.aPortefeuille() && 
                    (!this.portefeuilleService.aPortefeuillesAffiche() ||
                    this.estVueGlobalConsolide)) {
                    // si on l'agent a des portefeuilles mais qu'aucun n'est coché, 
                    // on ouvre automatiquement le volet pour choisir les portefeuilles à afficher
                    // ou que nous somme en vue EDS
                    this.chargerListePortefeilleDropDown();
                    this.ouvertureVoletChoixPortefeuille = true;
                    this.eventService.reinitInitStatsVueGlobale();
                }
                if (this.portefeuilleService.aPortefeuillesAffiche()) {
                    this.chargerListePortefeilleDropDown();
                    this.eventService.reinitInitStatsVueGlobale(); 
                    return this.eventService.initialiserVueGlobale();
                }
                return this.$q.when();
            } else {
                this.eventService.reinitInitStatsVueGlobale();
            }
            return this.$q.when();
        }

        /**
         * Permet de retourner le sous-titre
         * @return {string}
         */
        public getSousTitrePage(): string {
            let listePortefeuilles: Array<Modeles.Application.IPortefeuille> = this.portefeuilleService.getListePortefeuillesVisu();
            let listePortefeuillesActifs = this.portefeuilleService.getListePortefeuillesActifs();
            let libellePortefeuille = "";

            if (this.estVueGlobalConsolide) {
                let nblisteAgent: number = _.uniq(listePortefeuillesActifs, "idAgent").length;
                let nblisteAgentTotal: number = _.uniq(listePortefeuilles, "idAgent").length;
                let pluriel = (nblisteAgent > 1) ? "s" : ""; 
                let nomEds = (this.choixUtilisateurService &&
                    this.choixUtilisateurService.edsSelectionne &&
                    this.choixUtilisateurService.edsSelectionne.nomEds) ?
                    this.choixUtilisateurService.edsSelectionne.nomEds : "";
                libellePortefeuille = ` / ${nblisteAgent} collaborateur${pluriel} selectionné${pluriel} sur ${nblisteAgentTotal}`;
                return nomEds + libellePortefeuille;
            } else {
                let designationAgent = this.edsChoisi ? this.edsChoisi.designationAgent : this.contexteService.getDesignation();
                if (listePortefeuilles.length > 0) {
                    let pluriel = (listePortefeuillesActifs.length > 1) ? "s" : "";
                    libellePortefeuille = ` / ${listePortefeuillesActifs.length} portefeuille${pluriel} sélectionné${pluriel} sur ${listePortefeuilles.length}`;
                    if (listePortefeuillesActifs.length === 1) {
                        libellePortefeuille = libellePortefeuille + ` (${listePortefeuillesActifs[0].libelle})`;
                    }
                }
                return "SUIVI PAR " + designationAgent + libellePortefeuille;
            }
        }

        /**
         * Charger la listePorteFeuilleDropDown
         */
        public chargerListePortefeilleDropDown(): void {
            this.listePortefeuillesDropDown = this.portefeuilleService.regrouperPortfeuilleParAgent(this.listePortefeuilles);
        }

        /**
         * 
         */
        public initListePortefeuilles(): ng.IPromise<void> {
            this.chargementEnCours = true;
            let defer = this.$q.defer();
            if (!this.listePortefeuilles) {
                return this.portefeuilleService.getListePortefeuilleAgentConnecte().then((res: Modeles.Application.IPortefeuille[]) => {
                    this.listePortefeuilles = angular.copy(res);
                    this.chargerListePortefeilleDropDown();
                    this.chargementEnCours = false;
                    if (this.portefeuilleService.aPortefeuillesAffiche()) {
                        this.$location.path(Constantes.Url.PORTEFEUILLE);
                    } else {
                    }
                }).catch((error: MyWay.Services.Erreur) => {
                    defer.reject();
                    this.popupService.showErreur(error);
                    this.aErreurTechnique = true;
                    this.chargementEnCours = false;
                });
            } else {
                this.chargerListePortefeilleDropDown();
                this.chargementEnCours = false;
                return this.$q.when();
            }
        }

        /**
         * Permet d'ouvrir le choix de portefeuille
         * @return {void}
         */
        public ouvrirChoixPortefeuille(): void {
            this.ouvertureVoletChoixPortefeuille = true;
        }

        /**
         * Fermeture de l'application
         */
        public quitter(): void {
            IndexControleur.logger.info(">>> Appel de la méthode : IndexControleur.quitter() <<<");

            let listeContexteASupprimer: Array<string> = [Constantes.Contexte.CONTEXTE_GERR_PORTF];
            this.contexteService.supprimerContexteDevenuInutile(listeContexteASupprimer).then(() => {
                IndexControleur.logger.info("Suppression du contexte => OK");
            }).catch(() => {
                IndexControleur.logger.error("Suppression du contexte => KO");
            }).finally(() => {
                this.lisaApplication.next(Constantes.CodeProcessusLisa.CODE_LISA_SORTIE, "");
            });
        }
    }

    /**
     * Interface de la classe IndexControleur
     */
    export interface IIndexControleur {
        chargerListePortefeilleDropDown(): void;
        initListePortefeuilles(): ng.IPromise<void>;
    }

    app.controller(IndexControleur.CLASS_NAME, IndexControleur);
}