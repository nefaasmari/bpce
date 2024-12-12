/**
 * Directive pf-panel-niveau-2
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfPanelNiveau2(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-panel-niveau-2/pf-panel-niveau-2-vue.html",
            controller: "PfPanelNiveau2Controleur",
            controllerAs: "pfPanelNiveau2Ctrl",
            bindToController: true,
            scope: {
                id: "@",
                titre: "@",
                titre2: "@",
                icone: "@?",
                configBouton: "="
            },
            transclude: true
        };
    }

    // Déclaration de la directive
    app.directive("mwPfPanelNiveau2", mwPfPanelNiveau2);
}