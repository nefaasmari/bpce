/**
 * Directive pf-tuile-catalogue
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
module Portefeuille.Directives {
    "use strict";

    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    export function mwPfTuileCatalogue(): ng.IDirective {
        return {
            restrict: "E",
            templateUrl: "typescript/directives/pf-tuile-catalogue/pf-tuile-catalogue-vue.html",
            controller: "PfTuileCatalogueControleur",
            controllerAs: "pfTuileCatalogueCtrl",
            bindToController: true,
            scope: {
                tuileCatalogueSettings: "=",
                listeTuileCatalogueSettings: "=",
                listeTuilePanierSettings: "=",
                listeFiltresClients: "=",
                listeFiltresRelationEco: "="
            }
        };
    }

    // Déclaration de la directive
    app.directive("mwPfTuileCatalogue", mwPfTuileCatalogue);
}