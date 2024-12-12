/**
 * Directive pf-puce-legende
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfPuceLegende(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-puce-legende/pf-puce-legende-vue.html",
            controller: "PfPuceLegendeControleur",
            controllerAs: "pfPuceLegendeCtrl",
            bindToController: true,
            scope: {
                intitule: "@",
                couleur: "@",
                affichagePuceLegendeActif: "=",
                sousIntitule: "@",
                sousCouleur: "@"
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfPuceLegende", mwPfPuceLegende);
}