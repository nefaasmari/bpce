
declare module TelephonePro {
    var app: any;
}

declare module TelephonePro {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module TelephonePro {
}

declare module TelephonePro {
}

declare module TelephonePro {
}

declare module TelephonePro {
}

declare module TelephonePro {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module TelephonePro {
    function entete(): ng.IDirective;
}
