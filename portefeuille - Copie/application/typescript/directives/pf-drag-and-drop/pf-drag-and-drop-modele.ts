/**
 * Ensemble d'interfaces de modèles drag and drop
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Modeles.Application {
    "use strict";

    /**
     * Modèle des paramètres d'élément glissable (draggable)
     */
    export interface IDragSettings {
        donneesATransmettre: any;
        idHTMLElementConteneur: string;
        estActiver: boolean;
        activerDrag?: () => void;
        desactiverDrag?: () => void;
        dragStartBeforeEvent?: () => void;
        dragEndBeforeEvent?: () => void;
    }

    /**
     * Modèle des paramètres d'élément drop
     */
    export interface IDropSettings {
        idHTMLElementConteneur: string;
        estActiver: boolean;
        dropEventAction: (donnees: any) => void;
        activerDragOver?: () => void;
        desactiverDragOver?: () => void;
    }

}