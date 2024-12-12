/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur de la modale de filtre
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Controleurs {
    "use strict";

    /**
     * Classe du controleur
     */
    export class ModaleFiltreControleur {
        private static CLASS_NAME: string = "ModaleFiltreControleur";
        private static logger: MyWay.Services.Loggers.ILogger = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass(ModaleFiltreControleur.CLASS_NAME);

        //Injection des dependances
        static $inject: string[] = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$modalInstance,
            Constantes.Inject.MyWay.data,
            Constantes.Inject.Angular.$filter,
            Constantes.Inject.Services.indicateurService,
            Constantes.Inject.Services.filtreService,
            Constantes.Inject.Services.begacliService
        ];

        // Variables d'entrée
        public listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>;
        public listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        public listeFiltres: Array<Modeles.Application.IFiltre>;
        public estVueClient: boolean;

        // Variables utiles
        public listeIndicateursFiltreDisponible: Array<Modeles.Application.IIndicateurFiltre>;
        public pasDeFiltreDisponible: boolean;
        public unSeulFiltreDisponible: boolean;
        public sansFiltreActif: boolean;

        /**
         * Constructeur
         */
        constructor(
            private $scope: ng.IScope,
            private $modalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private data: Modeles.Application.IPopupData<any>,
            private $filter: ng.IFilterService,
            private indicateurService: Services.Application.IIndicateurService,
            private filtreService: Services.Application.IFiltreService,
            private begacliService: Services.Application.IBegacliService) {
            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser(): void {
            ModaleFiltreControleur.logger.info(">>> Appel de la méthode : ModaleFiltreControleur.initialiser <<<");

            console.log("--> filtre Begacli", this.begacliService.getFiltreBegacli());

            // Récupération des données transmises
            this.listeIndicateurs = this.data.model.listeIndicateursFiltre;
            this.listeIndicateursTableau = this.data.model.listeIndicateursTableau;
            this.listeFiltres = this.data.model.listeFiltres;
            this.estVueClient = this.data.model.estVueClient;

            // Initialisation du boolean filtre actif ou non
            this.sansFiltreActif = this.listeFiltres.length === 0;

            // Création de la liste des indicateurs disponibles
            this.listeIndicateursFiltreDisponible = [];

            _.forEach(this.listeIndicateursTableau, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                // n'affiche pas premier_Equipement car il est déjà géré en premier_Equipement TAG
                if (indicateurChoix.indicateur.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                    if (this.estVueClient) {
                        this.ajouterFiltreDisponible(indicateurChoix.indicateur.code);
                    } else if (!indicateurChoix.indicateur.estUniquementVueClients) {
                        this.ajouterFiltreDisponible(indicateurChoix.indicateur.codeRel);
                    }
                }
            });

            // Ajout des indicateurs non visibles
            // Et n'affiche pas premier_Equipement car il est déjà géré en premier_Equipement TAG
            _.forEach(this.indicateurService.getListeTotaleIndicateursType(), (indicateurType: Modeles.Application.IIndicateurType) => {
                if (!indicateurType.estVisibleColonne
                    && indicateurType.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT.toString()) {
                    if (this.estVueClient) {
                        this.ajouterFiltreDisponible(indicateurType.code);
                    } else if (!indicateurType.estUniquementVueClients) {
                        this.ajouterFiltreDisponible(indicateurType.codeRel);
                    }
                }
            });

            let listeIndicateurFiltered = this.$filter("sansIndicateurDateFiltre")(this.listeIndicateursFiltreDisponible);
            this.pasDeFiltreDisponible = listeIndicateurFiltered.length === 0;
            this.unSeulFiltreDisponible = listeIndicateurFiltered.length === 1;

            if (this.sansFiltreActif) {
                this.ajouterCondition(false);
            }
        }

        private ajouterFiltreDisponible(code: string) {
            let indicateurFiltreExistant = _.find(this.listeIndicateurs, (indicateurFiltre: Modeles.Application.IIndicateurFiltre) => {
                return code === indicateurFiltre.indicateur.code;
            });

            // console.log("--> indicateurFiltreExistant.indicateur.code : ", indicateurFiltreExistant.indicateur.code);
            if (indicateurFiltreExistant) {
                if (indicateurFiltreExistant.indicateur.code !== Enum.Indicateur.CODE.PREMIER_EQUIPEMENT_TAG.toString()) {
                    // on ignore le PREMIER_EQUIPEMENT_TAG qui a été remplacé par PREMIER_EQUIPEMENT_TEXTE
                    this.listeIndicateursFiltreDisponible.push(indicateurFiltreExistant);
                }
            }
        }

        /**
         * Méthode permettant d'ajouter une condition interne au bloc
         * @returns {void}
         */
        public ajouterCondition(setDefaultEt: boolean): void {
            this.filtreService.ajouterFiltre(this.listeFiltres, setDefaultEt);
        }

        /**
         * Action du bouton "Appliquer"
         * @returns {void}
         */
        public appliquer(): void {
            let donneesDeSortie = <Modeles.Application.IDonneesEntreeSortiePopupFiltres>{};
            donneesDeSortie.listeFiltres = this.listeFiltres;
            donneesDeSortie.listeIndicateursFiltre = this.listeIndicateurs;
            console.log("--> appliquer : ", this.listeFiltres);
            // on fait le ménage pour BEGACLI...
            if (this.listeFiltres.length === 0) {
                this.begacliService.setCasesDecochees();
            }

            this.$modalInstance.close(donneesDeSortie);
        }

        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        public fermer(): void {
            this.$modalInstance.dismiss();
        }

        /**
         * Action de l'appui de la touche "Entrer"
         * @returns {void}
         */
        public appuiToucheEntrer($event: any): void {
            if ($event.keyCode === 13 && !this.desactiverBoutonAppliquer()) {
                $event.preventDefault();
                this.appliquer();
            }
        }

        /**
         * Action du bouton "Ajouter +"
         * @returns {void}
         */
        public afficherBoutonAjouter(): boolean {
            return (this.listeFiltres.length === 1
                && this.unSeulFiltreDisponible) ?
                false :
                !(this.listeFiltres.length >= 2);
        }

        /**
         * Desactiver ou non le bouton "Annuler"
         * @returns {void}
         */
        public desactiverBoutonAnnuler(): boolean {
            return this.pasDeFiltreDisponible
                || (this.sansFiltreActif
                    && this.listeFiltres.length === 0);
        }

        /**
         * Descativer ou non le bouton "Appliquer"
         * @returns {void}
         */
        public desactiverBoutonAppliquer(): boolean {
            let estMalRempli = false;
            _.forEach(this.listeFiltres, (filtre: Modeles.Application.IFiltre, index: number) => {
                // Test de l'indicateur
                if (filtre.indicateur) {
                    switch (filtre.indicateur.indicateur.typeIndicateur) {
                        case Enum.Indicateur.TYPE.TEXTE:
                            if (!_.find(filtre.indicateur.listeValeurs, (valeur: Modeles.Application.IValeurFiltre) => {
                                return valeur.actif;
                            })) {
                                estMalRempli = true;
                                return false;
                            }
                            break;
                        case Enum.Indicateur.TYPE.BEGACLI:
                            if (!this.begacliService.getCasesCochees()) {
                                estMalRempli = true;
                                return false;
                            }
                            break;
                        case Enum.Indicateur.TYPE.NOMBRE:
                        case Enum.Indicateur.TYPE.DATE:
                        case Enum.Indicateur.TYPE.MONTANT:
                        case Enum.Indicateur.TYPE.POURCENT:
                            // Test du comparateur
                            if (this.controllerComparateurKo(filtre)) {
                                estMalRempli = true;
                                return false;
                            }
                            break;

                        default:
                            estMalRempli = true;
                            return false;
                    }

                    // Test de l'opérateur
                    if (!filtre.operateur && index > 0) {
                        estMalRempli = true;
                        return false;
                    }
                } else {
                    estMalRempli = true;
                    return false;
                }
            });

            return estMalRempli
                || this.pasDeFiltreDisponible
                || (this.sansFiltreActif && this.listeFiltres.length === 0);
        }

        /**
         * Controle si un nombre est : 
         *  - non null
         *  - non defini
         *  - non négatif
         * @param valeur valeur à controler
         */
        private estVide(valeur: number): boolean {
            return valeur === null ||
                valeur === undefined ||
                valeur < 0;
        }

  
        /**
         * Controle le la validité du comparateur
         * @param filtre
         */
        private controllerComparateurKo(filtre: Modeles.Application.IFiltre): boolean {
            let retour: boolean = false;
            if (filtre.comparateur) {
                if (filtre.comparateur === Enum.Filtre.COMPARATEUR.NC
                    || filtre.comparateur === Enum.Filtre.COMPARATEUR.NONREALISEE
                    || filtre.comparateur === Enum.Filtre.COMPARATEUR.ECHUE
                    || filtre.comparateur === Enum.Filtre.COMPARATEUR.ENCOURS) {
                    retour = false;
                } else if (filtre.comparateur === Enum.Filtre.COMPARATEUR.ENTRE) {
                    if (this.estVide(filtre.valeurMultiple1)
                        || this.estVide(filtre.valeurMultiple2)) {
                        // On intérdit toute saisie partielle
                        retour = true;
                    } else if (filtre.valeurMultiple1 > filtre.valeurMultiple2) {
                        // On intérdit toute saisie inverse sur un interval de date ou de nombre
                        retour = true;
                    }; 
                } else if (this.estVide(filtre.valeurUnique)) {
                    retour = true;
                }
            } else {
                retour = true;
            }
            return retour;
        }
    }

    // Déclaration du controlleur
    app.controller("ModaleFiltreControleur", ModaleFiltreControleur);
}
