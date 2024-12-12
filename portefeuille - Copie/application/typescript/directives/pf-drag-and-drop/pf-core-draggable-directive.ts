/**
 * Directive pf-core-draggable
 * @module portefeuille.Directives
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfCoreDraggable(): ng.IDirective {
        return {
            restrict: "A",
            controller: "PfCoreDraggableControleur",
            bindToController: true,
            scope: {
                dragSettings: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfCoreDraggable", mwPfCoreDraggable);
}