/**
 * Directive pf-detail-filtre
 * @module portefeuille.Directives
 * @author S0005354 (JM FOLLETTI)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfDetailFiltre(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-detail-filtre/pf-detail-filtre-vue.html",
            controller: "PfDetailFiltreControleur",
            controllerAs: "pfDetailFiltreCtrl",
            bindToController: true,
            scope: {
                listeFiltres: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfDetailFiltre", mwPfDetailFiltre);
}