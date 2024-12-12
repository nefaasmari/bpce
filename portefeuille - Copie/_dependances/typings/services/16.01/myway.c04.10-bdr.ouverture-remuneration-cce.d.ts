
declare module OuvertureRemunerationCCE {
    var app: any;
}

declare module OuvertureRemunerationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module OuvertureRemunerationCCE {
}

declare module OuvertureRemunerationCCE {
}

declare module OuvertureRemunerationCCE {
}

declare module OuvertureRemunerationCCE {
}

declare module OuvertureRemunerationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module OuvertureRemunerationCCE {
    function entete(): ng.IDirective;
}
