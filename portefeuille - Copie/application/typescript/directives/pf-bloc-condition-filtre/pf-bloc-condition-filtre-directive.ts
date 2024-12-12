/**
 * Directive pf-bloc-condition-filtre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfBlocConditionFiltre(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-bloc-condition-filtre/pf-bloc-condition-filtre-vue.html",
            controller: "PfBlocConditionFiltreControleur",
            controllerAs: "pfBlocConditionFiltreCtrl",
            bindToController: true,
            scope: {
                listeIndicateurs: "=",
                listeFiltres: "=",
                noIndex: "=",
                filtre: "=",
                afficherOperateur: "=",
                estVueClient: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfBlocConditionFiltre", mwPfBlocConditionFiltre);
}