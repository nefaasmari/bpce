
declare module MaJournee {
    var widgets: any;
    var actuBPCE: any;
    var totem: any;
    var app: any;
}

declare module MaJournee {
}

declare module MaJournee {
}

declare module MaJournee {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module MaJournee {
    class DonneesService {
        private serviceAgentExtended;
        actuBPCEjson: any;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        initialisation(): ng.IPromise<void>;
    }
}

declare module MaJournee {
    function entete(): ng.IDirective;
}
