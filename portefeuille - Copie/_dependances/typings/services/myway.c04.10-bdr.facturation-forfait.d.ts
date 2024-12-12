
declare module FacturationForfait {
    var app: any;
}

declare module FacturationForfait {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module FacturationForfait {
}

declare module FacturationForfait {
}

declare module FacturationForfait {
}

declare module FacturationForfait {
}

declare module FacturationForfait {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module FacturationForfait {
    function entete(): ng.IDirective;
}
