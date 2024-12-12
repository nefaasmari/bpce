/**
 * Directive pf-tuile-panier
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfTuilePanier(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-tuile-panier/pf-tuile-panier-vue.html",
            controller: "PfTuilePanierControleur",
            controllerAs: "pfTuilePanierCtrl",
            bindToController: true,
            scope: {
                tuilePanierSettings: "=",
                listeTuileCatalogueSettings: "=",
                listeTuilePanierSettings: "=",
                listeFiltresClients: "=",
                listeFiltresRelationEco: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfTuilePanier", mwPfTuilePanier);
}