
declare module myway.comOpesFinancieres.FinClient {
    var app: any;
}

declare module myway.comOpesFinancieres.FinClient {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module myway.comOpesFinancieres.FinClient {
}

declare module myway.comOpesFinancieres.FinClient {
}

declare module myway.comOpesFinancieres.FinClient {
}

declare module myway.comOpesFinancieres.FinClient {
}

declare module myway.comOpesFinancieres.FinClient {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module myway.comOpesFinancieres.FinClient {
    function entete(): ng.IDirective;
}
