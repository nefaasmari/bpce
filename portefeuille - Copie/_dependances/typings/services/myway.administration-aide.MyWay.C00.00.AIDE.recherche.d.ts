
declare module AideRecherche {
    var app: any;
}

declare module AideRecherche {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
        gospa2(): void;
    }
}

declare module AideRecherche {
}

declare module AideRecherche {
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
    function entete(): ng.IDirective;
}
