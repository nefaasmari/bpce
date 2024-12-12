
declare module ComposantsCommunsRemunerationCCE {
    var app: any;
}

declare module ComposantsCommunsRemunerationCCE {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ComposantsCommunsRemunerationCCE {
}

declare module ComposantsCommunsRemunerationCCE {
}

declare module ComposantsCommunsRemunerationCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module ComposantsCommunsRemunerationCCE {
    function entete(): ng.IDirective;
}
