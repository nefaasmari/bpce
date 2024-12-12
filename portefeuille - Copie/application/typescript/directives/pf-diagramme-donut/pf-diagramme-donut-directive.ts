/**
 * Directive pf-diagramme-donut
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDiagrammeDonut(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-donut/pf-diagramme-donut-vue.html",
            controller: "PfDiagrammeDonutControleur",
            controllerAs: "pfDiagrammeDonutCtrl",
            bindToController: true,
            scope: {
                svgId: "=",
                config: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammeDonut", mwPfDiagrammeDonut);
}