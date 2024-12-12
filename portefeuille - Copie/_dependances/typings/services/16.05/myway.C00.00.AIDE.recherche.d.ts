
declare module AideRecherche {
    var app: any;
}

declare module AideRecherche {
    class DefautControleur {
        private infoBulleService;
        static $inject: string[];
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        private $scope;
        private listeInfoBullesPresentes;
        showInfoBulleInconnu: boolean;
        showInfoBulleNodape: boolean;
        nouveauteInfoBulleNomPatronymique: boolean;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $scope: ng.IScope, $timeout: ng.ITimeoutService, $templateCache: ng.ITemplateCacheService, infoBulleService: AideRecherche.InfoBulleService);
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
    class InfoBulle {
        nomchamp: string;
        nouveaute: boolean;
        /**
         * Construction
         * @param publicationDateDebut: string - Date de début du message
         */
        constructor(donnees?: InfoBulle);
    }
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
        private resultat;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        getListeInfoBulle(): ng.IPromise<Array<AideRecherche.InfoBulle>>;
    }
}

declare module AideRecherche {
    function entete(): ng.IDirective;
}
