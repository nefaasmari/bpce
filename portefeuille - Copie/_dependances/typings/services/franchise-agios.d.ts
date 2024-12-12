
declare module myway.c0410.franchiseAgios {
    var franchiseAgiosModule: ng.IModule;
}

declare module myway.c0410.franchiseAgios {
    class FranchiseAgiosControleur {
        private $scope;
        private $q;
        private franchisesAgiosService;
        private serviceAgentExtended;
        private espaceGlobalService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private enModification;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        private identifiantProduitService;
        private identifiantPersonne;
        number: any;
        private numeroOffreSouscrite;
        private codeTypeProduitService;
        private numeroCompteProduitService;
        private franchiseAgios;
        idBloc: string;
        identifiantFormulaire: string;
        constructor($scope: ng.IScope, $q: ng.IQService, franchisesAgiosService: FranchiseAgiosService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        private determinerMode(mode);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerFranchisesAgios();
        supprimerDonneesFranchisesAgios(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

declare module myway.c0410.franchiseAgios {
    function mwFranchiseAgios(): ng.IDirective;
}

declare module myway.c0410.franchiseAgios {
    class FranchiseAgios {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompteProduitService: string;
        constructor(codeEtablissement: string, codeGuichet: string, numeroCompteProduitService: string);
    }
}

declare module myway.c0410.franchiseAgios {
    class FranchiseAgiosService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private franchisesAgios;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerFranchisesAgios(numeroOffreSouscrite: number, identifiantProduitService: number, franchisesAgios: FranchiseAgios, identifiantPersonne: number): ng.IPromise<any>;
        supprimerFranchisesAgios(numeroOffreSouscrite: number, identifiantProduitService: number, franchisesAgios: FranchiseAgios, identifiantPersonne: number): ng.IPromise<any>;
    }
}
