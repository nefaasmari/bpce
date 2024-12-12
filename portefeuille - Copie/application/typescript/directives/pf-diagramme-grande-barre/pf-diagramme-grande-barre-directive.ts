/**
 * Directive pf-diagramme-grande-barre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDiagrammeGrandeBarre(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-grande-barre/pf-diagramme-grande-barre-vue.html",
            controller: "PfDiagrammeGrandeBarreControleur",
            controllerAs: "pfDiagrammeGrandeBarreCtrl",
            bindToController: true,
            scope: {
                config: "=",
                listeConfig: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammeGrandeBarre", mwPfDiagrammeGrandeBarre);
}