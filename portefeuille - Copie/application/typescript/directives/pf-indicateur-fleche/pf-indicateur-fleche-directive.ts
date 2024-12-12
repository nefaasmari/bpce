/**
 * Directive pf-indicateur-badge
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfIndicateurFleche(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-indicateur-fleche/pf-indicateur-fleche-vue.html",
            controller: "PfIndicateurFlecheControleur",
            controllerAs: "pfIndicateurFlecheCtrl",
            bindToController: true,
            scope: {
                config: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfIndicateurFleche", mwPfIndicateurFleche);
}