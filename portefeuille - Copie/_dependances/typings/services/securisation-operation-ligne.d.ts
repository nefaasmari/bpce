
declare module myway.c0410.securisationOperationLigne {
    var securisationOperationLigneModule: ng.IModule;
}

declare module myway.c0410.securisationOperationLigne {
    class SecurisationOperationEnLigne {
        identificationSOL: IdentificationSOL;
        caracteristiqueSOL: CaracteristiqueSOL;
        constructor(formulaireSol: SecurisationOperationLigneFormulaire);
        miseAjourSoleDepuisContexte(codeEtablissement: string, identifiantTiers: number, identifiantProduitService: number, identifiantOffreSouscrite: number): void;
    }
    class IdentificationSOL {
        codeEtablissement: string;
        identifiantTiers: number;
        identifiantProduitService: number;
        identifiantOffreSouscrite: number;
    }
    class CaracteristiqueSOL {
        typeEnrolement: string;
        numeroTelephoneEnrolement: string;
        etatService: boolean;
        blocageService: boolean;
    }
}

declare module myway.c0410.securisationOperationLigne {
    class SecurisationOperationLigneControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private securisationOperationLigneService;
        private espaceGlobalService;
        private compteBddCommunService;
        static $inject: string[];
        CODE_TYPE_MEDIA: string;
        TYPE_SOL_SMS: string;
        formulaireSecurisationOperationEnLigne: SecurisationOperationLigneFormulaire;
        formulaireRecapAvenantsecurisationOperationLigne: SecurisationOperationLigneFormulaire;
        donneeSecurisationOperationEnLigne: SecurisationOperationEnLigne;
        private enModification;
        private enOuverture;
        private enCloture;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        idBloc: string;
        identifiantFormulaire: string;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        enRecapitulatif: boolean;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, securisationOperationLigneService: SecurisationOperationLigneDonneesService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
        getSolTelephone(medias: GestionGeneriqueOffres.Types.Tiers.Media[]): string;
        validerDonneesSecurisationOperationLigne: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerSecurisationOperationEnLigne();
        private modifierSecurisationOperationEnLigne();
        private cloturerSecurisationOperationEnLigne();
        private determinerMode(mode);
    }
}

declare module myway.c0410.securisationOperationLigne {
    function mwsolSecurisationOperationLigne(): ng.IDirective;
}

declare module myway.c0410.securisationOperationLigne {
    class SecurisationOperationLigneFormulaire extends myway.c0410.commun.ObjetGenerique {
        static MESSAGE_DE_MISEAJOUR: string;
        telephone: string;
        labelBoutonAction: string;
        cap: boolean;
        blocage: boolean;
        typeSol: string;
        constructor(identifiantFormulaire: string);
        isSolSMS(): boolean;
        isSolCap(): boolean;
        setDonneesSol(donneesSol: SecurisationOperationEnLigne): void;
        setLabelBouton(): void;
        bloquerDebloquerService(): void;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
        private estValideChamps(champs);
    }
}

declare module myway.c0410.securisationOperationLigne {
    class SecurisationOperationLigneDonneesService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerSecurisationOperationEnLigne(securisationOperationEnLigne: SecurisationOperationEnLigne, indicateurCommandeLecteurCAP: boolean): ng.IPromise<SecurisationOperationEnLigne>;
        recupererSecurisationOperationEnLigne(codeEtablissement: string, identifiantTiers: number, codeTypeEnrolement: string, numeroOffreSouscrite: number): ng.IPromise<SecurisationOperationEnLigne>;
        modifierOuSecurisationOperationEnLigne(securisationOperationEnLigne: SecurisationOperationEnLigne): ng.IPromise<SecurisationOperationEnLigne>;
    }
}
