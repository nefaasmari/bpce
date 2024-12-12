
declare module SeuilInteretsDebiteurs {
    var app: any;
}

declare module SeuilInteretsDebiteurs {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module SeuilInteretsDebiteurs {
}

declare module SeuilInteretsDebiteurs {
}

declare module SeuilInteretsDebiteurs {
}

declare module SeuilInteretsDebiteurs {
}

declare module SeuilInteretsDebiteurs {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module SeuilInteretsDebiteurs {
    function entete(): ng.IDirective;
}
