
declare module RemunerationCCE {
    var app: any;
}

declare module RemunerationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module RemunerationCCE {
}

declare module RemunerationCCE {
}

declare module RemunerationCCE {
}

declare module RemunerationCCE {
}

declare module RemunerationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module RemunerationCCE {
    function entete(): ng.IDirective;
}
