/**
 * Directive pf-ligne-relation-eco
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfLigneRelationEco(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-ligne-relation-eco/pf-ligne-relation-eco-vue.html",
            controller: "PfLigneRelationEcoControleur",
            controllerAs: "pfLigneRelationEcoCtrl",
            bindToController: true,
            scope: {
                relationEconomique: "=",
                listeIndicateursTableau: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfLigneRelationEco", mwPfLigneRelationEco);
}