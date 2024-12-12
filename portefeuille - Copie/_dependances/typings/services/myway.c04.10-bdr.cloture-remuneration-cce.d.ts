
declare module ClotureRemunerationCCE {
    var app: any;
}

declare module ClotureRemunerationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ClotureRemunerationCCE {
}

declare module ClotureRemunerationCCE {
}

declare module ClotureRemunerationCCE {
}

declare module ClotureRemunerationCCE {
}

declare module ClotureRemunerationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module ClotureRemunerationCCE {
    function entete(): ng.IDirective;
}
