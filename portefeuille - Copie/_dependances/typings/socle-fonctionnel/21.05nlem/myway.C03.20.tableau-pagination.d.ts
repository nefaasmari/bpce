
declare module LibrairieTableauPagination {
    var app: ng.IModule;
}

declare module LibrairieTableauPagination.Directives.TableauPagination.Controleur {
    class LibTableauPaginationControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        static logger: MyWay.Services.Loggers.ILogger;
        etablissements: {
            "ecart": string;
            "siret": string;
            "enseigne": string;
            "entiteTitulaire": string;
            "ville": string;
            "dept": string;
            "pnd": string;
        }[];
        myFilter: ng.IFilterService;
        totalItems: number;
        currentPage: number;
        maxSize: number;
        perPage: number;
        tableauHorsDirective: Object;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        onSelectionChange(selectedObject: Object): void;
    }
    interface ILibTableauPaginationControleur {
    }
}

/**
 * DirectiveTableau Pagination
 * @module LibrairieTableauPagination.Directives
 * @author S0061774 (Alexis KOLOPP)
*/
declare module LibrairieTableauPagination.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwLibTableauPagination(): ng.IDirective;
}
