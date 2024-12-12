
declare module myway.c0410.coffreFortNumerique {
    var coffreFortNumeriqueModule: ng.IModule;
}

declare module myway.c0410.coffreFortNumerique {
    class CoffreFortNumeriqueControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private coffreFortNumeriqueService;
        static $inject: string[];
        private enModification;
        private enOuverture;
        private enCloture;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        mode: string;
        private habiliteConsultation;
        private habiliteModification;
        private coffreFortNumerique;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, coffreFortNumeriqueService: CoffreFortNumeriqueService);
        private determinerMode(mode);
        private verifierHabilitation();
        initOuvertureCoffreFortNumerique(): void;
        initClotureCoffreFortNumerique(): void;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        enregistrerCoffreFort(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        supprimerCoffreFort(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        validerDonneesCoffre: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
    }
}

declare module myway.c0410.coffreFortNumerique {
    function mwCoffreFortNumerique(): ng.IDirective;
}

declare module myway.c0410.coffreFortNumerique {
    interface ICoffreFortNumerique {
        codeBanque: string;
        codeBanqueComptePrelevement: string;
        codeGuichetComptePrelevement: string;
        numeroComptePrelevement: string;
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        identifiantCoffreFortNumerique: string;
        IdentifiantExterneCFNISAN: string;
        dateSouscriptionCoffreFortNumerique: Date;
        codeDevise: string;
        montantTarificationService: number;
        dateClotureCoffreFortNumerique: Date;
    }
}

declare module myway.c0410.coffreFortNumerique {
    class CoffreFortNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private coffreFortNumerique;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerCoffreFortNumerique(numeroOffreSouscrite: number, donneesCoffre: ICoffreFortNumerique): ng.IPromise<ICoffreFortNumerique>;
        recupererCoffreFortNumerique(codeBanque: string, identifiantCoffreFortNumerique: string): ng.IPromise<ICoffreFortNumerique>;
        supprimerCoffreFortNumerique(donneesCoffre: ICoffreFortNumerique, numeroOffreSouscrite: number): ng.IPromise<void>;
        initialiser(codeBanque: string, codeBanqueComptePrelevement: string, codeGuichetComptePrelevement: string, identifiantProduitService: number, numeroEntiteTitulaire: number): ICoffreFortNumerique;
        copier(coffreFortNumerique: ICoffreFortNumerique): ICoffreFortNumerique;
    }
}
