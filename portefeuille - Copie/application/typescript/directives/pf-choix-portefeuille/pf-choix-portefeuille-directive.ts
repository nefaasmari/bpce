/**
 * Directive pf-choix-portefeuille
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfChoixPortefeuille(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-choix-portefeuille/pf-choix-portefeuille-vue.html",
            controller: "PfChoixPortefeuilleControleur",
            controllerAs: "PfChoixPortefeuilleCtrl",
            bindToController: true,
            scope: {
                listePortefeuillesDropDown: "=",
                listePortefeuilles: "=",
                ouvertureVoletChoixPortefeuille: "=",
                estVueGlobalConsolide: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfChoixPortefeuille", mwPfChoixPortefeuille);
}