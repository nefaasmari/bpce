/**
 * Directive pf-tuile-indicateur
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfTuileIndicateur(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-tuile-indicateur/pf-tuile-indicateur-vue.html",
            controller: "PfTuileIndicateurControleur",
            controllerAs: "pfTuileIndicateurCtrl",
            bindToController: true,
            replace: true,
            scope: {
                type: "=",
                intitule: "=",
                valeur: "=",
                valeurNumber: "=",
                icone: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfTuileIndicateur", mwPfTuileIndicateur);
}