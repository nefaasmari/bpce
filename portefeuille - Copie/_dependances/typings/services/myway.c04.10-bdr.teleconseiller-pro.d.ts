
declare module TeleconseillerPro {
    var app: any;
}

declare module TeleconseillerPro {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module TeleconseillerPro {
}

declare module TeleconseillerPro {
}

declare module TeleconseillerPro {
}

declare module TeleconseillerPro {
}

declare module TeleconseillerPro {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module TeleconseillerPro {
    function entete(): ng.IDirective;
}
