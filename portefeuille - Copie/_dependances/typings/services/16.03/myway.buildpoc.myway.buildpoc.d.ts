
declare module MonApplication {
    var app: any;
}

declare module MonApplication {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module MonApplication {
}

declare module MonApplication {
}

declare module MonApplication {
}

declare module MonApplication {
}

declare module MonApplication {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module MonApplication {
    function entete(): ng.IDirective;
}
