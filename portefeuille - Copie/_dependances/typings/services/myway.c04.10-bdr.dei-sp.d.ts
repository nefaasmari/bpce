
declare module DeiSP {
    var app: any;
}

declare module DeiSP {
}

declare module DeiSP {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module DeiSP {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module DeiSP {
}

declare module DeiSP {
}

declare module DeiSP {
}

declare module DeiSP {
    function entete(): ng.IDirective;
}
