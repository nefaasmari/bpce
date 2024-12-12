/**
 * Directive pf-indicateur-Pourcentage
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfIndicateurPourcentage(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-indicateur-pourcentage/pf-indicateur-pourcentage-vue.html",
            controller: "PfIndicateurPourcentageControleur",
            controllerAs: "pfIndicateurPourcentageCtrl",
            bindToController: true,
            scope: {
                config: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfIndicateurPourcentage", mwPfIndicateurPourcentage);
}