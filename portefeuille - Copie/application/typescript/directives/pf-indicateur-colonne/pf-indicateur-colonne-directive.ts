/**
 * Directive pf-indicateur-colonne
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfIndicateurColonne(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-indicateur-colonne/pf-indicateur-colonne-vue.html",
            controller: "PfIndicateurColonneControleur",
            controllerAs: "pfIndicateurColonneCtrl",
            bindToController: true,
            scope: {
                data: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfIndicateurColonne", mwPfIndicateurColonne);
}