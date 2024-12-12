
declare module LibrairieTableauPagination {
    var app: ng.IModule;
}

declare module LibrairieTableauPagination.Directives.TableauPagination.Controleur {
    class LibTableauPaginationControleur implements ILibTableauPaginationControleur {
        private $scope;
        private serviceAgentExtended;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
    interface ILibTableauPaginationControleur {
    }
}
