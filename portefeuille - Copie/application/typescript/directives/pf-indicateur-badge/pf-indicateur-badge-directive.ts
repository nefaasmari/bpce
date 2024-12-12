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
    export function mwPfIndicateurBadge(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-indicateur-badge/pf-indicateur-badge-vue.html",
            controller: "PfIndicateurBadgeControleur",
            controllerAs: "pfIndicateurBadgeCtrl",
            bindToController: true,
            scope: {
                intitule: "=",
                valeur: "=",
                isSousIntitule: "=",
                debranchementLisa: "=",
                debranchementLocal: "=",
                showZero: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfIndicateurBadge", mwPfIndicateurBadge);
}