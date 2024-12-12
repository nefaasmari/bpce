
declare module Portail.ContexteClient {
    var app: any;
}

declare module Portail.ContexteClient {
    class ContexteClientData {
        identifiantPersonne: string;
        nomCommercial: string;
        raisonSociale: string;
        codeAppartenanceReseau: string;
        codeCivilite: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        designationCourte: string;
        constructor(idPersonne: string);
    }
}

declare module Portail.ContexteClient {
    class ContexteClientService {
        private $q;
        private $injector;
        private serviceAgent;
        private serviceManager;
        static $inject: string[];
        constructor($q: ng.IQService, $injector: ng.auto.IInjectorService);
        lire(): void;
        ecrire(): void;
        getClients(): ng.IPromise<ContexteClientData[]>;
        private getAllContextesClients();
    }
}
