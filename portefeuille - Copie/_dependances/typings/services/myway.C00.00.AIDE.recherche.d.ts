
declare module AideRecherche {
    var app: any;
}

declare module AideRecherche {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        private listeDemandes;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, $templateCache: ng.ITemplateCacheService);
        testerServiceAgent(): void;
        creer(): void;
    }
}

declare module AideRecherche {
}

declare module AideRecherche {
}

declare module AideRecherche {
    class FooterControleur {
        private serviceAgent;
        static $inject: string[];
        /**
         * Contruction du formulaire projet
         * @param $scope: ng.IScope
         * @param footerService: administrationAide.Service.FooterService
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope);
        creer(): void;
        cloturer(): void;
    }
}

declare module AideRecherche {
}

declare module AideRecherche {
}

declare module AideRecherche {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module AideRecherche {
    class InfoBulleService {
        private $q;
        private serviceAgent;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
    }
}

declare module AideRecherche {
    function entete(): ng.IDirective;
}
