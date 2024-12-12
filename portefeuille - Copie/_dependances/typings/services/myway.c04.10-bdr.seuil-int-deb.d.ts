
declare module SeuilIntDeb {
    var app: any;
}

declare module SeuilIntDeb {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module SeuilIntDeb {
}

declare module SeuilIntDeb {
}

declare module SeuilIntDeb {
}

declare module SeuilIntDeb {
}

declare module SeuilIntDeb {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module SeuilIntDeb {
    function entete(): ng.IDirective;
}
