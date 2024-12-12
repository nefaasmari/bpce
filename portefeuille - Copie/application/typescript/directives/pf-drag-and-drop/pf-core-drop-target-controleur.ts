/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-core-drop-target
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    var loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfCoreDropTargetControleur {
        public static CLASS_NAME = "PfCoreDropTargetControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfCoreDropTargetControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$element,
            Constantes.Inject.Services.pfDragAndDropService
        ];

        // Variable d'entrée
        public dropSettings: Modeles.Application.IDropSettings;

        // Variables utiles


        /**
         * Constructeur
         */
        constructor(
            private $scope: any,
            private $element: ng.IAugmentedJQuery,
            private pfDragAndDropService: Services.Application.IPfDragAndDropService) {

            this.initialiser();
        }

        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser(): void {
            this.dropSettings = this.$scope.dropSettings;
            this.dropSettings.activerDragOver = this.activerDragOver;
            this.dropSettings.desactiverDragOver = this.desactiverDragOver;

            if (this.dropSettings.estActiver) {
                this.activerDragOver();
            } else {
                this.desactiverDragOver();
            }
            
            this.$element.bind(Constantes.DragAndDrop.EVENT_LISTENER_DROP, this.onDrop); // Gestion du drop
            //this.$element.bind("dragenter", this.onDragEnter); // Gestion du dragenter
            //this.$element.bind("dragleave", this.onDragLeave); // Gestion du dragleave
        }

        /**
         * Méthode permettant de gérer l'événement dragover
         * @param {JQueryEventObject} event
         */
        /* istanbul ignore next */
        private onDragOver = (event: JQueryEventObject) => {
            event.preventDefault();
        };

        /**
         * Méthode permettant de gérer l'événement drop
         * @param {JQueryEventObject} event
         */
        /* istanbul ignore next */
        private onDrop = (event: JQueryEventObject) => {
            event.preventDefault();
            event.stopPropagation();
            
            let listeDropTargetElements = document.
                getElementById(this.dropSettings.idHTMLElementConteneur).
                getElementsByClassName(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT);
            _.forEach(listeDropTargetElements, (dropTargetElement: Element) => {
                dropTargetElement.classList.remove(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ON_DRAG);
            });

            let donnees = this.pfDragAndDropService.getDonnees();
            this.dropSettings.dropEventAction(donnees);
        };

        /**
         * Méthode permettant de gérer l'événement dragenter
         * @param {JQueryEventObject} event
         */
        //private onDragEnter = (event: JQueryEventObject) => {
        //    event.preventDefault();
        //};

        /**
         * Méthode permettant de gérer l'événement dragleave
         * @param {JQueryEventObject} event
         */
        //private onDragLeave = (event: JQueryEventObject) => {
        //    event.preventDefault();
        //};

        /**
         * Variable contenant la méthode permettant d'activer le dragover
         */
        private activerDragOver = () => {
            this.dropSettings.estActiver = true;
            this.$element.bind(Constantes.DragAndDrop.EVENT_LISTENER_DRAGOVER, this.onDragOver);
            this.$element.addClass(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT);
        };

        /**
         * Variable contenant la méthode permettant de desactiver le dragover
         */
        private desactiverDragOver = () => {
            this.dropSettings.estActiver = false;
            this.$element.unbind(Constantes.DragAndDrop.EVENT_LISTENER_DRAGOVER, this.onDragOver);
            this.$element.removeClass(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT);
            this.$element.removeClass(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ON_DRAG);
        };
    }

    // Déclaration du controleur
    app.controller(PfCoreDropTargetControleur.CLASS_NAME, PfCoreDropTargetControleur);
} 