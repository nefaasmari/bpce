
declare module AideTraitement {
    var app: any;
}

declare module AideTraitement {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module AideTraitement {
}

declare module AideTraitement {
}

declare module AideTraitement {
}

declare module AideTraitement {
}

declare module AideTraitement {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module AideTraitement {
    function entete(): ng.IDirective;
}
