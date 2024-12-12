/// <reference path="../../constantes/inject-constantes.ts" />

module Portefeuille.Services.Application {
    "use strict";

    /**
     * Implémentation du service d'ouverture des popups
     */
    class PopupService implements IPopupService {

        // Injection de dépendances 
        public static $inject: string[] = [
            Constantes.Inject.Services.modalService,
            Constantes.Inject.Services.lisaApplication
        ];

        /**
         * Constructeur
         * @param modalService: MyWay.UI.IModalService
         * @param lisaApplication: assisynt.Services.Application.ILisaApplication
         */
        constructor(
            private modalService: MyWay.UI.IModalService,
            private lisaApplication: Portefeuille.Services.Application.ILisaApplication) {
        }

        /**
         * Permet d'ouvrir une popup simple d'informations
         */
        public showInfos(titre: string, texte: string): ng.IPromise<any> {
            var popupOptions = {
                closeButtonText: Constantes.Popup.BOUTON_FERMER,
                headerText: titre,
                bodyText: texte,
                iconName: "itce-warning",
                size: "md"
            };
            return this.modalService.showPopup(popupOptions);
        }

        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {MyWay.Services.Erreur} erreur
         */
        public showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any> {
            if (!erreur.libelle) {
                erreur.libelle = Constantes.Popup.LIBELLE_ERREUR_CHARGEMENT;
            }
            return this.modalService.showErreur(MyWay.UI.TYPE_POPUP_ERREUR.BLOQUANT, erreur.codeLibelle, erreur.libelle);
        }

        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {string} titre
         * @param {string} texte
         * @param {string} validerTexte
         * @param {string} closeTexte
         */
        public showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any> {
            var confirmOptions = {
                actionButtonText: validerTexte,
                closeButtonText: closeTexte,
                headerText: titre,
                bodyText: texte,
                //iconName: "itce-question",
                size: "md"
            };
            return this.modalService.showConfirm(confirmOptions);
        }

        /**
         * Permet d'ouvrir une fenêtre modale large. Le template est donné par templateUrl
         * @param {string} templateUrl
         * @param {string} controllerName
         * @param {Modeles.Application.IPopupData<any>} templateDatas
         */
        public showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any> {
            var modalOptions: ng.ui.bootstrap.IModalSettings = {
                templateUrl: templateUrl,
                controller: controllerName,
                controllerAs: "popupCtrl",
                windowClass: "app-modal-window-MEG",
                backdrop: "static",
                keyboard: true,
                size: "lg",
                resolve: {
                    callback: /* istanbul ignore next */ function () {
                    },
                    data: /* istanbul ignore next */ function () {
                        return templateDatas;
                    }
                }
            };
            return this.modalService.showModal(modalOptions);
        }

        /**
         * Permet d'ouvrir une fenêtre modale medium. Le template est donné par templateUrl
         * @param {string} templateUrl
         * @param {string} controllerName
         * @param {Modeles.Application.IPopupData<any>} templateDatas
         */
        public showModalMd(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any> {
            var modalOptions: ng.ui.bootstrap.IModalSettings = {
                templateUrl: templateUrl,
                controller: controllerName,
                controllerAs: "popupCtrl",
                windowClass: "app-modal-window-MEG",
                backdrop: "static",
                keyboard: true,
                size: "md",
                resolve: {
                    callback: /* istanbul ignore next */ function () {
                    },
                    data: /* istanbul ignore next */ function () {
                        return templateDatas;
                    }
                }
            };
            return this.modalService.showModal(modalOptions);
        }

        /**
         * Permet d'ouvrir une fenêtre modale large. Le template est donné par templateUrl
         * @param {string} templateUrl
         * @param {string} controllerName
         * @param {Modeles.Application.IPopupData<any>} templateDatas
         */
        public showModalLg(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any> {
            var modalOptions: ng.ui.bootstrap.IModalSettings = {
                templateUrl: templateUrl,
                controller: controllerName,
                controllerAs: "popupCtrl",
                windowClass: "app-modal-window-MEG",
                backdrop: "static",
                keyboard: true,
                size: "lg",
                resolve: {
                    callback: /* istanbul ignore next */ function () {
                    },
                    data: /* istanbul ignore next */ function () {
                        return templateDatas;
                    }
                }
            };
            return this.modalService.showModal(modalOptions);
        }

        /**
         * Permet d'ouvrir une fenêtre modale large. Le template est donné par templateUrl
         * @param {string} templateUrl
         * @param {string} controllerName
         * @param {Modeles.Application.IPopupData<any>} templateDatas
         */
        public showModalFull(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any> {
            var modalOptions: ng.ui.bootstrap.IModalSettings = {
                templateUrl: templateUrl,
                controller: controllerName,
                controllerAs: "popupCtrl",
                windowClass: "app-modal-window-MEG",
                backdrop: "static",
                keyboard: true,
                size: "full",
                resolve: {
                    callback: /* istanbul ignore next */ function () {
                    },
                    data: /* istanbul ignore next */ function () {
                        return templateDatas;
                    }
                }
            };
            return this.modalService.showModal(modalOptions);
        }
    }

    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    export interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;

        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher      
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;

        /**
         * Ouverture d'une popup demandant la confirmation d'une action 
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;

        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalMd(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalLg(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalFull(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
    }

    app.service("PopupService", PopupService);
}  