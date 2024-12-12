
declare module AlerteBDR {
    var app: any;
}

declare module AlerteBDR {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module AlerteBDR {
}

declare module AlerteBDR {
}

declare module AlerteBDR {
}

declare module AlerteBDR {
}

declare module AlerteBDR {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module AlerteBDR {
    function entete(): ng.IDirective;
}
