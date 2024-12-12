/**
 * Directive pf-diagramme-colonne
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDiagrammeMultiColonne(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-multi-colonne/pf-diagramme-multi-colonne-vue.html",
            controller: "PfDiagrammeMultiColonneControleur",
            controllerAs: "pfDiagrammeMultiColonneCtrl",
            bindToController: true,
            transclude: true,
            scope: {
                config: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammeMultiColonne", mwPfDiagrammeMultiColonne);
}