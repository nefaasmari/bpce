
declare module myway.recherchePersonne {
    var app: ng.IModule;
}

declare module myway.recherchePersonne {
}

declare module myway.recherchePersonne {
    class ParticulierInformationService {
        private serviceAgentExtended;
        private static TIERS_VERSION;
        private codeCapaciteJuridique;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getParticulierInformation(clientSelectionne: MyWay.Model.Client, rice: MyWay.Model.Rice): ng.IPromise<Array<MyWay.Model.Identification>>;
    }
}
