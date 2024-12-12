/**
 * Directive pf-core-drop-target
 * @module portefeuille.Directives
 * @author S0078068 (Yannis VESSEREAU)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfCoreDropTarget(): ng.IDirective {
        return {
            restrict: "A",
            controller: "PfCoreDropTargetControleur",
            bindToController: true,
            scope: {
                dropSettings: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfCoreDropTarget", mwPfCoreDropTarget);
}