
declare module myway.c0410.produitsEngages {
    var produitEngageModule: any;
}

declare module myway.c0410.produitsEngages {
    class ProduitsEngagesController {
        $scope: ng.IScope;
        $q: ng.IQService;
        serviceAgent: MyWay.Services.ServiceAgent;
        private compteBddCommunService;
        private produitEngageService;
        private espaceGlobalService;
        idBloc: string;
        contexteAppel: Object;
        modeAcces: string;
        modeAffichage: string;
        codeActeGestion: string;
        codeEtablissement: string;
        codeTypeOperation: string;
        idProduitService: number;
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
        estTracable: boolean;
        produitEngage: IParamPartageTracab;
        _indicateurTracabilite: boolean;
        _libelleDomaine: string;
        _codeUniversTracabilite: string;
        _libelleUniversTracabilite: string;
        _indicateurUniversDefaut: boolean;
        _indicateurPartageVisible: boolean;
        _codeEtablissement: string;
        _identifiantProduitService: number;
        _universTracabiliteChoisi: boolean;
        libelleDomaines: string;
        _listeLibelleUnviersTracabilite: string;
        _indicateurTracabiliteOblig: boolean;
        _identifiantBeneficaire: number;
        urlTest: string;
        urlNou: string;
        static choixTracabilite: string;
        static choixUniversTracabilite: string;
        static choixOrganisme: string;
        static choixTauxBaleur: string;
        messageErreur: string;
        modaleService: MyWay.UI.ModalService;
        afficherTauxValeur: boolean;
        _enOuverture: boolean;
        _enCloture: boolean;
        _enModification: boolean;
        _enRecapitulatif: boolean;
        _enPersonnalisation: boolean;
        identifiantFormulaire: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurPartageOblig: boolean;
        _indicateurTracabiliteVisible: boolean;
        idPersonne: number;
        valeurTaux: number;
        objetParametrePartage: myway.c0410.produitsEngages.IParametrePartage;
        objetParametreTracab: myway.c0410.produitsEngages.IParamPartageTracab;
        objetFormulaireRecap: myway.c0410.produitsEngages.ProduitEngageFormulaire;
        objetFormulaireNouveau: myway.c0410.produitsEngages.ProduitEngageFormulaire;
        objetProduitEngageService: myway.c0410.produitsEngages.IProduitEngageService;
        listeUniversTracab: Array<myway.c0410.produitsEngages.IUniversTracabilite>;
        _listeDesignationBeneficiaire: Array<myway.c0410.produitsEngages.IParametrePartage>;
        _listeValeurTaux: Array<myway.c0410.produitsEngages.ITauxPartage>;
        _listeInformationPartage: Array<myway.c0410.produitsEngages.IParametrePartage>;
        _valeurTaux: myway.c0410.produitsEngages.ITauxPartage;
        private detenteur;
        private referenceProduit;
        objetInfoPartageTracab: myway.c0410.produitsEngages.IInfoPartageTracab;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, produitEngageService: IProduitEngageService, espaceGlobalService: myway.c0410.commun.EspaceGlobalService);
        determinerMode(mode: string): boolean;
        clicChoixTracabilite(choixTracabilite: string): void;
        initAffichage(): void;
        initialiserIhmProduitEngage(): void;
        clicChoixOrganisme(choixOrganisme: string): void;
        hasModifieChamp(nomChamps: string): boolean;
        formatPercent(valeurTauxPartage: number): string;
        private enregistrerProduitEngage();
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
    }
}

declare module myway.c0410.produitsEngages {
}

declare module myway.c0410.produitsEngages {
    class ProduitEngageFormulaire extends myway.c0410.commun.ObjetGenerique {
        private static ROLE_PERSONNE_0;
        private _choixtracabilite;
        private _choixsecteur;
        private _indicateurPartageVisible;
        private _organismeBeneficiare;
        organismeBeneficiaire: string;
        indicateurPartageVisible: boolean;
        getInformationsChampsInvalidesFormualaire(): myway.c0410.commun.StatutChampsFormulaire[];
        choixTracabilite: boolean;
        choixSecteur: boolean;
        constructor(identifiantFormulaire: string, choixTracabilite: boolean, choixUnivers: string, choixPartage: boolean, choixOrganismeBeneficiaire: string, choixTauxPartage: string);
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
