
declare module RemunerationCompteCourantEntreprise {
    var app: any;
}

declare module RemunerationCompteCourantEntreprise {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module RemunerationCompteCourantEntreprise {
}

declare module RemunerationCompteCourantEntreprise {
}

declare module RemunerationCompteCourantEntreprise {
}

declare module RemunerationCompteCourantEntreprise {
}

declare module RemunerationCompteCourantEntreprise {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module RemunerationCompteCourantEntreprise {
    function entete(): ng.IDirective;
}
