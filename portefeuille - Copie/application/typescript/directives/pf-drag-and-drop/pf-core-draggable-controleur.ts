/// <reference path="../../constantes/inject-constantes.ts" />

/**
 * Controleur pour la directive pf-core-draggable
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Controleurs {
    "use strict";
    let loggerClass = MyWay.Services.Loggers.LoggerFactory.INSTANCE.getClass;

    /**
     * Classe du controleur
     */
    export class PfCoreDraggableControleur {
        public static CLASS_NAME = "PfCoreDraggableControleur";
        public static logger: MyWay.Services.Loggers.ILogger = loggerClass(PfCoreDraggableControleur.CLASS_NAME);

        //Injection des dependances
        public static $inject = [
            Constantes.Inject.Angular.$scope,
            Constantes.Inject.Angular.$element,
            Constantes.Inject.Services.pfDragAndDropService
        ];

        // Variable d'entrée
        public dragSettings: Modeles.Application.IDragSettings;

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
            this.dragSettings = this.$scope.dragSettings;
            this.dragSettings.activerDrag = this.activerDrag;
            this.dragSettings.desactiverDrag = this.desactiverDrag;

            if (this.dragSettings.estActiver) {
                this.activerDrag();
            } else {
                this.desactiverDrag();
            }
            
            this.$element.bind(Constantes.DragAndDrop.EVENT_LISTENER_DRAGSTART, this.dragStart); // Gestion du dragstart
            this.$element.bind(Constantes.DragAndDrop.EVENT_LISTENER_DRAGEND, this.dragEnd); // Gestion du dragend
        }

        /**
         * Variable contenant la méthode permettant de gérer l'événement dragStart
         * @param {JQueryEventObject} event
         */
        /* istanbul ignore next */
        private dragStart = (event: JQueryEventObject) => {
            if (this.dragSettings.dragStartBeforeEvent) {
                this.dragSettings.dragStartBeforeEvent();
            }

            let listeDropTargetElements = document.getElementById(this.dragSettings.idHTMLElementConteneur).getElementsByClassName(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT);
            _.forEach(listeDropTargetElements, (dropTargetElement: Element) => {
                dropTargetElement.classList.add(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ON_DRAG);
            });

            this.pfDragAndDropService.setDonnees(this.dragSettings.donneesATransmettre);
        };

        /**
         * Variable contenant la méthode permettant de gérer l'événement dragEnd
         * @param {JQueryEventObject} event
         */
        /* istanbul ignore next */
        private dragEnd = (event: JQueryEventObject) => {
            if (this.dragSettings.dragEndBeforeEvent) {
                this.dragSettings.dragEndBeforeEvent();
            }

            let listeDropTargetElements = document.getElementById(this.dragSettings.idHTMLElementConteneur).getElementsByClassName(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT);
            _.forEach(listeDropTargetElements, (dropTargetElement: Element) => {
                dropTargetElement.classList.remove(Constantes.DragAndDrop.HTML_CLASS_NAME_PF_DROP_TARGET_ON_DRAG);
            });
        };

        /**
         * Variable contenant la méthode permettant d'activer le drag
         */
        private activerDrag = () => {
            this.dragSettings.estActiver = true;
            this.$element.attr(Constantes.DragAndDrop.ATTRIBUT_DRAGGABLE, Constantes.DragAndDrop.STRING_VALUE_TRUE);
        };

        /**
         * Variable contenant la méthode permettant de desactiver le drag
         */
        private desactiverDrag = () => {
            this.dragSettings.estActiver = false; 
            this.$element.attr(Constantes.DragAndDrop.ATTRIBUT_DRAGGABLE, Constantes.DragAndDrop.STRING_VALUE_FALSE);
        };
    }

    // Déclaration du controleur
    app.controller(PfCoreDraggableControleur.CLASS_NAME, PfCoreDraggableControleur);
} 