
declare module myway.c0410.operationsCourantesIllimitees {
    var operationsCourantesIllimiteesModule: ng.IModule;
}

declare module myway.c0410.operationsCourantesIllimitees {
    class OperationsCourantesIllimiteesControleur {
        private $scope;
        private $q;
        private operationsCourantesIllimiteesService;
        private serviceAgentExtended;
        private espaceGlobalService;
        static $inject: string[];
        private enOuverture;
        private enModification;
        private enCloture;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        private identifiantProduitService;
        private numeroOffreSouscrite;
        private codeTypeProduitService;
        private operationCouranteIllimitee;
        constructor($scope: ng.IScope, $q: ng.IQService, operationsCourantesIllimiteesService: OperationsCourantesIllimiteesService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        private determinerCodeTypeProduitService(identifiantProduitService);
        private determinerMode(mode);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerOperationsCourantes();
        supprimerDonneesOperations(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

declare module myway.c0410.operationsCourantesIllimitees {
    function mwOperationsCourantesIllimitees(): ng.IDirective;
}

declare module myway.c0410.operationsCourantesIllimitees {
    class OperationsCourantesIllimitees {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        constructor(codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, referenceProduitService: string);
    }
}

declare module myway.c0410.operationsCourantesIllimitees {
    class OperationsCourantesIllimiteesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private operationCouranteIllimitee;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerOperationCouranteIllimitee(numeroOffreSouscrite: number, identifiantProduitService: number, operationCouranteIllimitee: OperationsCourantesIllimitees): ng.IPromise<any>;
        supprimerOperationCouranteIllimitee(numeroOffreSouscrite: number, identifiantProduitService: number, operationCouranteIllimitee: OperationsCourantesIllimitees): ng.IPromise<any>;
    }
}
