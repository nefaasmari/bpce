
declare module myway.c0410.franchiseRetraitsDeplaces {
    var franchiseRetraitsDeplaces: ng.IModule;
}

declare module myway.c0410.franchiseRetraitsDeplaces {
    class FranchiseRetraitsDeplacesControleur {
        private $scope;
        private $q;
        private franchisesRetraitsDeplacesService;
        private serviceAgentExtended;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private enModification;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        private identifiantProduitService;
        private identifiantPersonne;
        private numeroOffreSouscrite;
        private referenceProduitService;
        private franchiseRetraitsDeplaces;
        constructor($scope: ng.IScope, $q: ng.IQService, franchisesRetraitsDeplacesService: FranchiseRetraitsDeplacesService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private determinerMode(mode);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerFranchisesRetraitsDeplaces();
        private supprimerDonneesFranchisesRetraitsDeplaces();
    }
}

declare module myway.c0410.franchiseRetraitsDeplaces {
    function mwFranchiseRetraitsDeplaces(): ng.IDirective;
}

declare module myway.c0410.franchiseRetraitsDeplaces {
    class FranchiseRetraitsDeplaces {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        constructor(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, referenceProduitService: string);
    }
}

declare module myway.c0410.franchiseRetraitsDeplaces {
    class FranchiseRetraitsDeplacesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private franchisesRetraitsDeplaces;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerFranchisesRetraitsDeplaces(numeroOffreSouscrite: number, identifiantProduitService: number, franchisesRetraitsDeplaces: FranchiseRetraitsDeplaces): ng.IPromise<any>;
        supprimerFranchisesRetraitsDeplaces(numeroOffreSouscrite: number, identifiantProduitService: number, franchisesRetraitsDeplaces: FranchiseRetraitsDeplaces): ng.IPromise<any>;
    }
}
