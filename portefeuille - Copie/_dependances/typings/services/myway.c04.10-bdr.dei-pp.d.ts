
declare module DeiPP {
    var app: any;
}

declare module DeiPP {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module DeiPP {
}

declare module DeiPP {
}

declare module DeiPP {
}

declare module DeiPP {
}

declare module DeiPP {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module DeiPP {
    function entete(): ng.IDirective;
}
