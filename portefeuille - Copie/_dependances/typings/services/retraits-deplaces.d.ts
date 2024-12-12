
declare module myway.c0410.retraitsDeplaces {
    var retraitsDeplacesModule: ng.IModule;
}

declare module myway.c0410.retraitsDeplaces {
}

declare module myway.c0410.retraitsDeplaces {
    function mwRetraitsDeplaces(): ng.IDirective;
}

declare module myway.c0410.retraitsDeplaces {
    class RetraitsDeplaces {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        constructor(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, referenceProduitService: string);
    }
}

declare module myway.c0410.retraitsDeplaces {
    class RetraitsDeplacesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private retraitsDeplaces;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerRetraitsDeplaces(numeroOffreSouscrite: number, identifiantProduitService: number, retraitsDeplaces: RetraitsDeplaces): ng.IPromise<any>;
        supprimerRetraitsDeplaces(numeroOffreSouscrite: number, identifiantProduitService: number, retraitsDeplaces: RetraitsDeplaces): ng.IPromise<any>;
    }
}
