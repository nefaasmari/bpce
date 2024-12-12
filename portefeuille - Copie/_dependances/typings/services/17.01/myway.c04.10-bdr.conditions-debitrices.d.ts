
declare module ConditionsDebitrices {
    var app: any;
}

declare module ConditionsDebitrices {
    class MwConditionsDebitricesControleur {
        static $inject: any[];
        constructor();
    }
}

declare module ConditionsDebitrices {
}

declare module ConditionsDebitrices {
    class PageDevMwConditionsDebitricesControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        infosCompte: Model.IInformationsCompte;
        infosGlobalesCompte: Model.IInformationsGlobalesCompte;
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        executerDirective(): void;
    }
}

declare module ConditionsDebitrices {
    function mwConditionsDebitrices(): ng.IDirective;
}

declare module ConditionsDebitrices.Model {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

declare module ConditionsDebitrices.Model {
    interface IInformationsGlobalesCompte {
        indicateurInfoDecouvert: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeAction: string;
    }
}
