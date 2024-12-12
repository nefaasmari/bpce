
declare module myway.clients.suiviDossierVenteAppTest {
    var app: any;
}

declare module myway.clients.suiviDossierVenteAppTest {
    class DefautControleur {
        private serviceAgent;
        private $timeout;
        private gestionDossierVenteMockService;
        dossierVente: {};
        private localite;
        private version;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService, gestionDossierVenteMockService: myway.clients.suiviDossierVente.IGestionDossierVenteMockService);
        testerServiceAgent(): void;
    }
}
