
declare module myway.c0410.produitsEngages {
    var produitEngageModule: any;
}

declare module myway.c0410.produitsEngages {
    class ProduitsEngagesController {
        $scope: ng.IScope;
        serviceAgent: MyWay.Services.ServiceAgent;
        idBloc: string;
        contexteAppel: Object;
        modeAcces: string;
        modeAffichage: string;
        codeActeGestion: string;
        contexte: Object;
        ERREUR_OUVERTURE: string;
        ERREUR_AVENANT: string;
        ERREUR_SUPPRESSION: string;
        OUVERTURE: string;
        AVENANT: string;
        CLOTURE: string;
        OUI_LABEL: string;
        NON_LABEL: string;
        IDEGPS_PRODUIT_ENGAGE: number;
        CHOIX_TRACABILITE: string;
        data: any;
        urlrest: string;
        error: MyWay.Services.Erreur;
        static $inject: string[];
        private estTracable;
        private produitEngage;
        private _indicateurTracabilite;
        private _libelleDomaine;
        private _codeUniversTracabilite;
        private _libelleUniversTracabilite;
        private _indicateurUniversDefaut;
        private _codeEtablissement;
        private _identifiantProduitService;
        private _universTracabiliteChoisi;
        libelleDomaines: string;
        libelleUnviersTracabilite: string;
        _indicateurTracabiliteVisible: boolean;
        private _indicateurTracabiliteOblig;
        private _designationBeneficaire;
        private _listeValeurTaux;
        private _identifiantBeneficaire;
        private urlTest;
        private urlNou;
        static choixTracabilite: string;
        static choixUniversTracabilite: string;
        static choixOrganisme: string;
        static choixTauxBaleur: string;
        messageErreur: string;
        modaleService: MyWay.UI.ModalService;
        afficherTauxValeur: boolean;
        private _enOuverture;
        private _enCloture;
        private _enModification;
        private _enRecapitulatif;
        objetUnivers: myway.c0410.produitsEngages.IUniversTracabilite;
        constructor($scope: ng.IScope, serviceAgent: MyWay.Services.ServiceAgent);
        private determinerMode(mode);
        getListProduits(url: string): void;
        getListUnviers(url: string): void;
        getIndicateurtracabiliteOblig(url: string): void;
        getDesignationBeneficiaire(url: string): void;
        getIdentifiantBeneficaire(url: string): void;
        getListeValeurtaux(url: string): void;
        selectResultChoixTracabilite(): void;
        clicChoixTracabilite(choixTracabilite: string): void;
        initAffichage(): void;
        clicChoixUniversTracabilite(choixUnivers: string): void;
        clicChoixOrganisme(choixOrganisme: string): boolean;
        showErrorPopupBloquante(): void;
    }
}

declare module myway.c0410.produitsEngages {
}

declare module myway.c0410.produitsEngages {
    class ProduitEngageFormulaire {
        private static ROLE_PERSONNE_0;
        private _choixtracabilite;
        private _choixsecteur;
        getInformationsChampsInvalidesFormualaire(): myway.c0410.commun.StatutChampsFormulaire[];
        choixTracabilite: boolean;
        choixSecteur: boolean;
    }
}

declare module myway.c0410.produitsEngages {
    interface IParametrePartage {
        identifiantBeneficiaire: number;
        listeTaux: Array<ITauxPartage>;
        designationBeneficiare: string;
    }
    interface IParametreTracabilite {
        libelleDomaine: string;
        listeUnivers: Array<IUniversTracabilite>;
    }
    interface ITauxPartage {
        valeurTauxPartage: number;
    }
    interface IUniversTracabilite {
        codeUniversTracabilite?: string;
        libelleUniversTracabilite?: string;
        indicateurUniversDefaut?: boolean;
    }
    interface IParamPartageTracab {
        codeEtablissement: string;
        identifiantProduitService: number;
        informationPartage: Array<IParametrePartage>;
        indicateurPartageOblig: boolean;
        indicateurTracabiliteOblig: boolean;
        informationTracabilite: IParametreTracabilite;
        indicateurPartageVisible: boolean;
        indicateurTracabiliteVisible: boolean;
    }
    interface IInfoPartageTracab {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        indicateurPartage: string;
        identifiantBeneficiaire: number;
        valeurTauxPartage: number;
        indicateurTracabilite: string;
        codeUniversTracabilite: string;
        codeProduit: string;
        identifiantProduitService: string;
        identifiantPersonne: number;
    }
}

declare module myway.c0410.produitsEngages {
    class ProduitEngageService implements IProduitEngageService {
        private serviceAgentExtended;
        static $inject: string[];
        private restServiceUrl;
        private restServiceInfo;
        private parametreTracabilite;
        private paramPartagTracab;
        error: MyWay.Services.Erreur;
        private libelleuniversTracab;
        private _libelleDomaine;
        _paramTracabiliteVisible: myway.c0410.produitsEngages.IParamPartageTracab;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getParamPartageTracab(codeEtablissementEngage: string, codeTypeOperationEngage: string, identifiantProduitServiceEngage: number): ng.IPromise<IParamPartageTracab>;
        putInfoPartageTracab(donneesInfoPartageTracab: IInfoPartageTracab): ng.IPromise<IInfoPartageTracab>;
    }
    interface IProduitEngageService {
        getParamPartageTracab(codeEtablissementEngage: string, codeTypeOperationEngage: string, identifiantProduitServiceEngage: number): ng.IPromise<IParamPartageTracab>;
        putInfoPartageTracab(donneesInfoPartageTracab: IInfoPartageTracab): ng.IPromise<IInfoPartageTracab>;
    }
}
