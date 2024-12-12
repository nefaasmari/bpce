/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur de la modale de choix EDS
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleChoixEdsControleur {
        public static CLASS_NAME: string = "ModaleChoixEdsControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleChoixEdsControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            //Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$q,
            Constantes.Inject.MyWay.data,
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.Services.choixEdsService,
            Constantes.Inject.Services.popupService,
            Constantes.Inject.Services.choixUtilisateurService,
            Constantes.Inject.Services.contexteService
        ];

        // Variables d'entrée

        // Variables utiles
        public agentChoisi: MyWay.Model.Agent;
        public titre: string;

        // Variables utiles (Ajouter)
        public chargementAgences: boolean;
        public chargementAgents: boolean;

        public listeAgences: Array<Modeles.Application.IAgenceEds>;
        public agenceChoisi: Modeles.Application.IAgenceEds;
        //    si on a une valeur on va permettre de remonter a ce niveau
        public ancienNiveauEds: number = 0; 
        public agenceReadOnly: boolean = false;
        public edsAncien: Modeles.Application.IAgenceEds;
        public sauveAgentRechercher: MyWay.Model.Agent;

        /**
         * Constructeur
         */
        constructor(
            //private $scope: ng.IScope,
            private $q: ng.IQService,
            private data: Portefeuille.Modeles.Application.IPopupData<string>,
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private choixEdsService: Services.Application.IChoixEdsService,
            private popupService: Services.Application.IPopupService,
            private choixUtilisateurService: Services.Application.IChoixUtilisateurService,
            private contexteService: Services.Application.IContexteService) {

            // Récupération des données transmises
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleChoixEdsControleur.logger.info(">>> Appel de la méthode : ModaleChoixEdsControleur.initialiser <<<");
            this.titre = this.data.headerText;    
            this.edsAncien = this.choixUtilisateurService.edsSelectionne;

            if (this.estVueEDS) {
                this.choixUtilisateurService.edsSelectionne = null;
                // par défaut on se positionne sur l'agent qui est connecté : on le met dans le modèle pour qu'il soit affiché dans la dropdown,
                // puis on va charger ses N+1/N+2
                if (!this.sauveAgentRechercher) {

                    this.contexteService.getAuthentification().then((resultat: any) => {
                        // converti dans le modèle cible => A TRANSFORMER PAR UNE METHODE DANS UTILS !
                        this.agentChoisi = <MyWay.Model.Agent>{};
                        this.agentChoisi.id = resultat.agentConnecte.referenceExterneAgent;      // important, c'est ce qu'on utilisera par la suite ! 
                        this.agentChoisi.designation = resultat.agentConnecte.designationLongueAgent;
                        this.agentChoisi.idEds = resultat.agentConnecte.numeroInterneEds;
                        this.agentChoisi.idEdsHierarchique = resultat.agentConnecte.numeroEdsSuperieur;
                        this.agentChoisi.libelle = resultat.agentConnecte.libelleEds;
                        this.agentChoisi.refEDS = resultat.agentConnecte.numeroInterneEds;
                        this.agentChoisi.typeEdsHierarchique = resultat.agentConnecte.typeEdsRattachement;
                        this.agentChoisi.typeFonction = resultat.agentConnecte.typeFonction;
                        this.agentChoisi.dateDebutValidite = new Date(resultat.agentConnecte.dateDebutValidite);      // format: 2004-04-01
                        this.agentChoisi.dateFinValidite = new Date(resultat.agentConnecte.dateFinValidite);

                        // récupère les N+1/+2 de cet agent
                        this.changeAgent(this.agentChoisi);
                    });
                } else {
                    this.changeAgent(this.sauveAgentRechercher);
                }
            }
        }

        /**
         * Recherche les agents par le nom qui est tapé dans la liste
         * @param agent
         */
        public changeAgent(agent: MyWay.Model.Agent): ng.IPromise<void> {
            // 1ère chose, on récupère l'agent connecté et on le met dans la 1ère liste. Au change on va maj la 2ème liste
            // @note On n'a pas de filtre ici
            this.chargementAgences = true;
            this.choixUtilisateurService.edsSelectionne = null;
            this.agenceChoisi = null;
            this.sauveAgentRechercher = agent;
            // attention, c'est l'identifiantAgent qu'il faut donner a cette ressource !
            return this.choixUtilisateurService.
                rechercherListeAgence(+agent.id).
                then((listeAgences: Array<Modeles.Application.IAgenceEds>) => {
                    this.listeAgences = listeAgences;
                    if (this.listeAgences &&
                        this.listeAgences.length === 1) {
                        this.agenceChoisi = listeAgences[0];
                        // Ouvre le premier niveau  si une seul EDS de ratachement
                        this.changementAgence(this.agenceChoisi, null);
                        this.agenceReadOnly = true;
                    } else {
                        this.agenceReadOnly = false;
                    }
                    this.chargementAgences = false;
                }).catch(/* istanbul ignore next */
                    (erreur: MyWay.Services.Erreur) => {
                        ModaleChoixEdsControleur.logger.error("Erreur de recherche de la liste des agences", erreur.codeLibelle, erreur.libelle);
                        this.popupService.showErreur(erreur);
                        // ne bloque pas la liste
                        this.chargementAgences = false;
                    });
        }

        /**
         * Méthode appelé lors du changement d'agence
         * @returns {void}
         */
        public changementAgence(EDS: Modeles.Application.IAgenceEds, ancienEDS: Modeles.Application.IAgenceEds): ng.IPromise<void> {
            //this.listeAgencesInferieures = [];
            this.chargementAgents = true;
            this.choixUtilisateurService.edsSelectionne = null;

            return this.choixUtilisateurService.rechercherEdsInferieurs(EDS)
                .then((caracteristiquesEDS: Modeles.Application.IAgenceEds) => {
                    // Si c'est le premier noeud EDS (identifier par ancienEds à null) on charge les EDS et on l'affiche
                    if (!ancienEDS) {
                        this.changementAgence(this.agenceChoisi, EDS);
                        this.agenceChoisi.affiche = true;
                    }                       
                    this.chargementAgents = false;
                    return this.$q.when();
            }).catch(/* istanbul ignore next */
                (erreur: MyWay.Services.Erreur) => {
                    ModaleChoixEdsControleur.logger.error("Erreur de recherche de la liste des agents", erreur.codeLibelle, erreur.libelle);
                    return this.popupService.showErreur(erreur);
            });
        }

        /**
         * Action du bouton "Valider"
         * @returns {void}
         */
        public valider(): void {
            this.choixEdsService.getCaracteristiquesAgent(this.agentChoisi).
                then((edsChoisi: Modeles.Application.ICaracteristiquesAgent) => {
                if (!this.estVueEDS) {
                    this.choixUtilisateurService.edsSelectionne = null;
                }
                this.$modalInstance.close(edsChoisi);
            }).catch((erreur: MyWay.Services.Erreur) => {
                ModaleChoixEdsControleur.logger.error("Erreur de recherche de l'EDS", erreur.codeLibelle, erreur.libelle);
                this.popupService.showErreur(erreur);
            });
        }

        /**
         * 
         */
        public get estVueEDS(): boolean {
            return this.data.model === Enum.Vue.TYPE_VUE.VUE_EDS.toString();
        }


        /**
         * 
         */
        public get estChoisiEDS(): boolean {
            return (this.agentChoisi && this.agentChoisi.id) ? true : false;
        }

        /**
         * 
         */
        public get estChoisiEDSvalide(): boolean {
            if ((!this.estVueEDS &&
                 this.estChoisiEDS) ||
                (this.estVueEDS &&
                 this.estChoisiEDS &&
                 this.agenceChoisi &&
                 this.edsSelectionne)) {
                return true;
            } else {
                return false;
            }
        }

        /**
         *
         */
        public get edsRattachement(): Modeles.Application.IAgenceEds {
            return (this.estVueEDS && this.agenceChoisi) ? this.agenceChoisi : <Modeles.Application.IAgenceEds>{};
        }

        /**
         *
         */
        public get afficheListeEdsRattachement(): boolean {
            return (!this.agenceReadOnly && this.agentChoisi && this.agentChoisi.id) ? true : false;
        }

        /**
         * 
         */
        public get afficheLibelleEdsRattachement(): boolean {
            return (this.agenceReadOnly && this.agentChoisi && this.agentChoisi.id) ? true : false;
        }

        /**
         *
         */
        public get nomEdsRattachement(): string {
            return (this.agenceChoisi && this.agenceChoisi.nomEds) ? this.agenceChoisi.nomEds : "";
        }

        /**
         * 
         */
        public get afficheEdsSelectionne(): boolean {
            return this.estVueEDS;
        }

        /**
         * 
         */
        public get nomEdsSelectionne(): string {
            return (this.choixUtilisateurService.edsSelectionne) ? this.choixUtilisateurService.edsSelectionne.nomEds : "";
        }

        /**
         * 
         */
        public get edsSelectionne(): Modeles.Application.IAgenceEds {
            return this.choixUtilisateurService.edsSelectionne;
        }

        /**
         * 
         */
        public get afficheBlocEds(): boolean {
            return this.estVueEDS && this.estChoisiEDS && this.agenceChoisi != null;
        }
               
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        public fermer(): void {
            this.choixUtilisateurService.edsSelectionne = this.edsAncien;
            this.$modalInstance.dismiss();
        }
    }
    // Déclaration du controlleur
    app.controller(ModaleChoixEdsControleur.CLASS_NAME, ModaleChoixEdsControleur);
}