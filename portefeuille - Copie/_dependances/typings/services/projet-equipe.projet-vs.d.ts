
declare module $maintsmodule$ {
    var app: any;
}

declare module $maintsmodule$ {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
}

declare module $maintsmodule$ {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module $maintsmodule$ {
    class MotDePasseService {
        constructor();
        forceDeMotDePasse(motDePasse: string): string;
    }
}

declare module $maintsmodule$ {
    function entete(): ng.IDirective;
}
