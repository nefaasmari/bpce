
declare module DeiPro {
    var app: any;
}

declare module DeiPro {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module DeiPro {
}

declare module DeiPro {
}

declare module DeiPro {
}

declare module DeiPro {
}

declare module DeiPro {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module DeiPro {
    function entete(): ng.IDirective;
}
