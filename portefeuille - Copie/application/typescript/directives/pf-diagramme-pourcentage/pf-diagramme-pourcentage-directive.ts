/**
 * Directive pf-diagramme-liste-donut
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDiagrammePourcentage(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-pourcentage/pf-diagramme-pourcentage-vue.html",
            controller: "PfDiagrammePourcentageControleur",
            controllerAs: "pfDiagrammePourcentageCtrl",
            bindToController: true,
            transclude: true,
            scope: {
                config: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammePourcentage", mwPfDiagrammePourcentage);
}