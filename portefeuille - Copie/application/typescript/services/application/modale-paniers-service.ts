/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Service applicatif de gestion du drag and drop
 * @module Portefeuille.Services.Application
 */
module Portefeuille.Services.Application {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Service permettant de gerer le choix EDS
     */
    class ModalePaniersService implements IModalePaniersService {
        public static CLASS_NAME = "ModalePaniersService";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(ModalePaniersService.CLASS_NAME);

        // Injection de dépendances 
        public static $inject = [];

        // Variables utiles
        private modalePaniersControleur: Controleurs.ModalePaniersControleur;
        private selectionIndicateursControleur: Controleurs.SelectionIndicateursControleur;
        private estEditionPanier: boolean;

        /**
         * Constructeur
         */
        constructor() { }

        /**
         * Méthode permettant de modifier modalePaniersControleur
         * @param clientsControleur
         * @return {void}
         */
        public setModalePaniersControleur(modalePaniersControleur: Controleurs.ModalePaniersControleur): void {
            this.modalePaniersControleur = modalePaniersControleur;
        }

        /**
         * Méthode permettant de modifier modalePaniersControleur
         * @param clientsControleur
         * @return {void}
         */
        public setSelectionIndicateursControleur(selectionIndicateursControleur: Controleurs.SelectionIndicateursControleur): void {
            this.selectionIndicateursControleur = selectionIndicateursControleur;
        }

        /**
         * Méthode pour mettre à jour la valeur de estEditionPanier
         * @param val
         */
        public majEstEditionPanier(val: boolean): void {
            this.estEditionPanier = val;
        }

        public getEstEditionPanier(): boolean {
            return this.estEditionPanier ? this.estEditionPanier : false;
        }

        /**
         * Méthode permettant de modifier l'état du drop panier à vrai
         * @returns {void}
         */
        public activerDropPanier(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstActiverDropPanier(true);
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.setEstActiverDropPanier(true);
            }
        }

        /**
         * Méthode permettant de modifier l'état du drop panier à faux
         * @returns {void}
         */
        public desactiverDropPanier(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstActiverDropPanier(false);
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.setEstActiverDropPanier(false);
            }
        }

        /**
         * Méthode permettant de modifier l'état du drop des tuiles du panier à vrai
         * @param {Array<Modeles.Application.ITuilePanierSettings>} listeTuilePanierSettings
         * @returns {void}
         */
        public activerDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void {
            _.forEach(listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                tuile.dropSettings.activerDragOver();
            });
        }

        /**
         * Méthode permettant de modifier l'état du drop des tuiles du panier à faux
         * @param {Array<Modeles.Application.ITuilePanierSettings>} listeTuilePanierSettings
         * @returns {void}
         */
        public desactiverDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void {
            _.forEach(listeTuilePanierSettings, (tuile: Modeles.Application.ITuilePanierSettings) => {
                if (tuile.dropSettings) {
                    tuile.dropSettings.desactiverDragOver();
                }
            });
        }

        /**
         * Méthode permettant de modifier l'état du drop poubelle à vrai
         * @returns {void}
         */
        public afficherDropPoubelle(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstAfficherDropPoubelle(true);
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.setEstAfficherDropPoubelle(true);
            }
        }

        /**
         * Méthode permettant de modifier l'état du drop poubelle à faux
         * @returns {void}
         */
        public cacherDropPoubelle(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstAfficherDropPoubelle(false);
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.setEstAfficherDropPoubelle(false);
            }
        }

        /**
         * Méthode permettant de modifier l'état du bouton valider à vrai
         * @returns {void}
         */
        public afficherBoutonValider(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstAfficherBoutonAjouter(true);
            }
        }

        /**
         * Méthode permettant de modifier l'état du bouton valider à faux
         * @returns {void}
         */
        public cacherBoutonValider(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.setEstAfficherBoutonAjouter(false);
            }
        }

        /**
         * Méthode permettant de rafraichir listeTuileCatalogueSettings
         * @return {void}
         */
        public rafraichirListeTuileCatalogueSettings(): void {
            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.rafraichirListeTuileCatalogueSettings();
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.rafraichirListeTuileCatalogueSettings();
            }
        }

        /**
         * Methode permetant de rendre compatible les tuiles avec le drag and drop
         * @return {void}
         */
        public rendreCompatibleTuilesAvecDragAndDrop(): void {
            let boutons = document.getElementById(Constantes.ModalePaniers.ID_HTML_MODALE_PANIERS_BODY).getElementsByClassName(Constantes.ModalePaniers.CLASS_HTML_BOUTON_TUILE_STANDARD);

            _.forEach(boutons, (bouton: Element) => {
                bouton.setAttribute(Constantes.ModalePaniers.ATTRIBUT_HTML_DISABLED, Constantes.ModalePaniers.STRING_VALUE_TRUE);
                bouton.setAttribute(Constantes.ModalePaniers.ATTRIBUT_HTML_STYLE, Constantes.ModalePaniers.STRING_VALUE_CURSOR_POINTER_IMPORTANT);
            });
        }

        /**
         * Méthode permettant de créer un dragSettings
         * @param {Modeles.Application.ITuileCatalogueSettings} tuileCatalogueSettings
         * @return {Modeles.Application.IDragSettings}
         */
        public creerDragSettings(tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings): Modeles.Application.IDragSettings {
            let dragSettings = <Modeles.Application.IDragSettings>{};
            dragSettings.idHTMLElementConteneur = Constantes.ModalePaniers.ID_HTML_MODALE_PANIERS_BODY;
            dragSettings.donneesATransmettre = tuileCatalogueSettings;
            dragSettings.estActiver = this.estEditionPanier ? this.estEditionPanier : false;
            return dragSettings;
        }

        /**
         * Méthode permettant de créer un dropSettings
         * @param {string} codeIndicateur
         * @return {Modeles.Application.IDropSettings}
         */
        public creerDropSettings(event: (donnees: any) => void): Modeles.Application.IDropSettings {
            let dropSettings = <Modeles.Application.IDropSettings>{};
            dropSettings.idHTMLElementConteneur = Constantes.ModalePaniers.ID_HTML_MODALE_PANIERS_BODY;
            dropSettings.estActiver = this.estEditionPanier ? this.estEditionPanier : false;
            dropSettings.dropEventAction = event;
            return dropSettings;
        }

        /**
         * Méthode permettant de supprimer un indicateur du panier
         * @param {Modeles.Application.ITuilePanierSettings} tuilePanierSettings
         * @param {Array<Modeles.Application.ITuileCatalogueSettings>} listeTuileCatalogueSettings
         * @param {Array<Modeles.Application.ITuilePanierSettings>} listeTuilePanierSettings
         * @param {Array<Modeles.Application.IFiltre>} listeFiltresClients
         * @param {Array<Modeles.Application.IFiltre>} listeFiltresRelationEco
         * @return {void}
         */
        public supprimerIndicateurPanier(
            tuilePanierSettings: Modeles.Application.ITuilePanierSettings,
            listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>,
            listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>,
            listeFiltresClients: Array<Modeles.Application.IFiltre>,
            listeFiltresRelationEco: Array<Modeles.Application.IFiltre>): void {

            // Récupération de la tuile catalogue settings
            let tuileCatalogueSettings = _.find(listeTuileCatalogueSettings, (tuileCatalogue: Modeles.Application.ITuileCatalogueSettings) => {
                return tuileCatalogue.indicateur.indicateur.code === tuilePanierSettings.indicateur.indicateur.code;
            });

            // Changement de l'état de l'indicateur
            tuileCatalogueSettings.indicateur.choisi = false;

            // Suppression de la tuile panier
            _.remove(listeTuilePanierSettings, (tuilePanier: Modeles.Application.ITuilePanierSettings) => {
                return tuilePanier.indicateur.indicateur.code === tuilePanierSettings.indicateur.indicateur.code;
            });

            // Mise à jour du message d'avertissement de modification de filtre
            this.afficherMessageAvertissementFiltre(
                listeFiltresRelationEco,
                listeFiltresClients,
                _.pluck(listeTuilePanierSettings, "indicateur")); 

            // Rafraichir listeTuileCatalogueSettings
            this.rafraichirListeTuileCatalogueSettings();
        }

        /**
         * Fonction permettant de copier une liste sans copier les items
         * @param {Array<any>} liste
         * @returns {Array<any>}
         */
        public copierListe(liste: Array<any>): Array<any> {
            let copieListe = [];

            _.forEach(liste, (item: any) => {
                copieListe.push(item);
            });

            return copieListe;
        }

        /**
         * Methode qui permet d'afficher ou non le message d'avertissement filtre
         * @param {Array<Modeles.Application.IFiltre>} listeFiltresRelationEco
         * @param {Array<Modeles.Application.IFiltre>} listeFiltresClients
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeChoixIndicateurs
         * @return {void}
         */
        public afficherMessageAvertissementFiltre(
            listeFiltresRelationEco: Array<Modeles.Application.IFiltre>,
            listeFiltresClients: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void {
            let nomFiltre1 = null;
            let nomFiltre2 = null;
            let nomFiltre3 = null;
            let nomFiltre4 = null;

            // Recuperation du nom des filtres relation eco
            _.forEach(listeFiltresRelationEco, (filtre: Modeles.Application.IFiltre) => {
                let indicateurChoixExistant = _.find(listeChoixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                    return indicateurChoix.indicateur.codeRel === filtre.indicateur.indicateur.code;
                });

                if (!indicateurChoixExistant) {
                    if (nomFiltre1) {
                        nomFiltre2 = filtre.indicateur.indicateur.intitule;
                    } else {
                        nomFiltre1 = filtre.indicateur.indicateur.intitule;
                    }
                }
            });

            // Recuperation du nom des filtres client
            _.forEach(listeFiltresClients, (filtre: Modeles.Application.IFiltre) => {
                let indicateurChoixExistant = _.find(listeChoixIndicateurs, (indicateurChoix: Modeles.Application.IIndicateurChoix) => {
                    return indicateurChoix.indicateur.code === filtre.indicateur.indicateur.code;
                });

                if (!indicateurChoixExistant) {
                    if (nomFiltre3) {
                        nomFiltre4 = filtre.indicateur.indicateur.intitule;
                    } else {
                        nomFiltre3 = filtre.indicateur.indicateur.intitule;
                    }
                }
            });

            if (this.modalePaniersControleur) {
                this.modalePaniersControleur.afficherMessageAvertissementFiltre(nomFiltre1, nomFiltre2, nomFiltre3, nomFiltre4);
            }
            if (this.selectionIndicateursControleur) {
                this.selectionIndicateursControleur.afficherMessageAvertissementFiltre(nomFiltre1, nomFiltre2, nomFiltre3, nomFiltre4);
            }
        }

        /**
         * Fonction permettant de generer un identifiant aléatoire
         * @returns {number}
         */
        public genererIdentifiantAleatoire(): number {
            return Math.floor(new Date().valueOf() * Math.random());
        }
    }

    /**
     * Interface de la classe ModalePaniersService
     */
    export interface IModalePaniersService {
        setModalePaniersControleur(modalePaniersControleur: Controleurs.ModalePaniersControleur): void;
        setSelectionIndicateursControleur(selectionIndicateursControleur: Controleurs.SelectionIndicateursControleur): void;
        activerDropPanier(): void;
        desactiverDropPanier(): void;
        activerDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void;
        desactiverDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void;
        afficherDropPoubelle(): void;
        cacherDropPoubelle(): void;
        afficherBoutonValider(): void;
        cacherBoutonValider(): void;
        rafraichirListeTuileCatalogueSettings(): void;
        rendreCompatibleTuilesAvecDragAndDrop(): void;
        creerDragSettings(tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings): Modeles.Application.IDragSettings;
        creerDropSettings(event: (donnees: any) => void): Modeles.Application.IDropSettings;
        supprimerIndicateurPanier(
            tuilePanierSettings: Modeles.Application.ITuilePanierSettings,
            listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>,
            listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>,
            listeFiltresClients: Array<Modeles.Application.IFiltre>,
            listeFiltresRelationEco: Array<Modeles.Application.IFiltre>): void;
        copierListe(liste: Array<any>): Array<any>;
        afficherMessageAvertissementFiltre(
            listeFiltresRelationEco: Array<Modeles.Application.IFiltre>,
            listeFiltresClients: Array<Modeles.Application.IFiltre>,
            listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void;
        genererIdentifiantAleatoire(): number;
        majEstEditionPanier(val: boolean): void;
        getEstEditionPanier(): boolean;
    }

    // Déclaration du service
    app.service("ModalePaniersService", ModalePaniersService);
}  