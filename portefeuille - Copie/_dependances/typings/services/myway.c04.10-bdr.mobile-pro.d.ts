
declare module MobilePro {
    var app: any;
}

declare module MobilePro {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module MobilePro {
}

declare module MobilePro {
}

declare module MobilePro {
}

declare module MobilePro {
}

declare module MobilePro {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module MobilePro {
    function entete(): ng.IDirective;
}
