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
    export function mwPfDiagrammeColonne(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-diagramme-colonne/pf-diagramme-colonne-vue.html",
            controller: "PfDiagrammeColonneControleur",
            controllerAs: "pfDiagrammeColonneCtrl",
            bindToController: true,
            transclude: true,
            scope: {
                svgId: "=",
                config: "=",
                typeDiagramme: "=?"
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDiagrammeColonne", mwPfDiagrammeColonne);
}