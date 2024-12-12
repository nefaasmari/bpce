
declare module GestionCreditApi {
    var app: any;
}

declare module GestionCreditApi.Controleur {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module GestionCreditApi.Controleur {
}

declare module GestionCreditApi.Controleur {
}

declare module GestionCreditApi.Controleur {
}

declare module GestionCreditApi.Filtre {
}

declare module GestionCreditApi.Service {
    class DefautService {
        static $inject: any[];
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module GestionCreditApi.Service {
    class MotDePasseService {
        static $inject: any[];
        constructor();
        forceDeMotDePasse(motDePasse: string): string;
    }
}

declare module GestionCreditApi.Directive {
    function entete(): ng.IDirective;
}
