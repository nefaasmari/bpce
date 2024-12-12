
declare module AvenantRemunerationCCE {
    var app: any;
}

declare module AvenantRemunerationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module AvenantRemunerationCCE {
}

declare module AvenantRemunerationCCE {
}

declare module AvenantRemunerationCCE {
}

declare module AvenantRemunerationCCE {
}

declare module AvenantRemunerationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module AvenantRemunerationCCE {
    function entete(): ng.IDirective;
}
