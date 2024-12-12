/**
 * Directive pf-diagramme-petite-barre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDiagrammePetiteBarre(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-petite-barre/pf-diagramme-petite-barre-vue.html",
            controller: "PfDiagrammePetiteBarreControleur",
            controllerAs: "pfDiagrammePetiteBarreCtrl",
            bindToController: true,
            scope: {
                config: "=",
                listeConfig: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammePetiteBarre", mwPfDiagrammePetiteBarre);
}