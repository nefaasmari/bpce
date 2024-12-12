
declare module myway.transProduitEngage {
    var module: ng.IModule;
}

declare module myway.transProduitEngage {
    class ProduitEngageConstantes {
        static LIBELLE_BLOC_TRACABILITE: string;
        static LABEL_TRACABILITE: string;
        static LABEL_DOMAINE: string;
        static LABEL_OUI: string;
        static LABEL_NON: string;
        static LIBELLE_BLOC_PARTAGE: string;
        static LABEL_PARTAGE_INTERET_CHOIX: string;
        static LABEL_PARTAGE_ORGANISME: string;
        static LABEL_PARTAGE_TAUX: string;
        static FILTER_UNIVER_CODEUNIV: string;
        static FILTER_UNIVER_PAR_DEFAUT: string;
    }
    class ProduitEngageController {
        private $scope;
        private serviceAgentExtended;
        private produitEngageService;
        libBlocTracabilite: string;
        labelTracabilite: string;
        labelOui: string;
        labelNon: string;
        libelleDomaine: string;
        choixTracabilite: boolean;
        choixDomaineTracabilite: IUniversTracabilite;
        listDomaine: any[];
        indicateurTracabiliteOblig: boolean;
        libBlocPartage: string;
        labelPartageInteret: string;
        labelPartageOrganisme: string;
        labelPartageTaux: string;
        choixPartage: boolean;
        choixOrganismeBeneficiaire: IParametrePartage;
        choixTauxPartage: ITauxPartage;
        indicateurPartageOblig: boolean;
        listOrganismeBeneficiaire: any[];
        listTauxPartage: any[];
        visibleDropdownlistTaux: boolean;
        enCloture: boolean;
        enOuverture: boolean;
        enModification: boolean;
        enRecapitulatif: boolean;
        contexteProduitEngage: Model.DonneesProduitEngage;
        erreur: MyWay.Services.Erreur;
        produitEngageFormulaire: ProduitEngageFormulaire;
        infoPartageTracab: IInfoPartageTracab;
        chargementEncours: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, produitEngageService: ProduitEngageService);
        private initialiserIhm();
        private determinerMode(mode);
        private checkToSetDirtyFormulaire();
        private setUniverParDefaut();
        private getElementPartageOuTracabList(typeRecherche, liste, valeurRechercher);
        recupererParamProduitEngage(indicateurs: IIndicPartageTracab): ng.IPromise<any>;
        recupererInfoProduitEngage(indicateurs: IIndicPartageTracab): ng.IPromise<any>;
        recupererIndicesVisibilitePartageTracab(codeEtablissement: string, codeTypeOperation: string, identifiantProduitService: number): ng.IPromise<any>;
    }
}

declare module myway.transProduitEngage {
    function mwsfProduitEngage(): ng.IDirective;
}

declare module myway.transProduitEngage {
    class ProduitEngageFormulaire {
        private _choixTracabilite;
        private _domaineTracabilite;
        private _libelletDomaineTracabilite;
        private _choixPartage;
        private _organismeBeneficiaire;
        private _tauxPartage;
        private static _estModifieFormulaire;
        traceProduitEngageForm: any;
        private _champsInvalides;
        private _infoPartageTracab;
        private _donneesRestPartageTracab;
        constructor(choixTracabilite: boolean, choixPartage: boolean, domaineTracabilite?: IUniversTracabilite, organismeBeneficiaire?: IParametrePartage, tauxPartage?: ITauxPartage);
        choixTracabilite: boolean;
        choixPartage: boolean;
        domaineTracabilite: IUniversTracabilite;
        organismeBeneficiaire: IParametrePartage;
        tauxPartage: ITauxPartage;
        libelletDomaineTracabilite: string;
        estModifieFormulaire: boolean;
        infoPartageTracab: IInfoPartageTracab;
        donneesRestPartageTracab: DonneesPartageTracab;
        isValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaireProduitEngage(): StatutChampsFormulaire[];
    }
    class StatutChampsFormulaire {
        private _nomChamps;
        constructor(nomChamps: string);
        getMessageErreur(): string;
    }
    class DonneesPartageTracab {
        private _paramPartageTracab;
        paramPartageTracab: IParamPartageTracab;
    }
}

declare module myway.transProduitEngage {
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
        inactif?: boolean;
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
    interface IIndicPartageTracab {
        indicateurPartageVisible: boolean;
        indicateurTracabiliteVisible: boolean;
        indicateurPartageOblig: boolean;
        indicateurTracabiliteOblig: boolean;
    }
}

declare module myway.transProduitEngage {
    class ProduitEngageService implements IProduitEngageService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restUrlGetParamPartageTracab;
        private restUrlGererPartageTracabExistant;
        private restUrlGetIndicPartageTracab;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getParamPartageTracab(codeEtablissement: string, identifiantProduitService: number, indicateurs: IIndicPartageTracab): ng.IPromise<IParamPartageTracab>;
        putInfoPartageTracab(infoPartageTracab: IInfoPartageTracab): ng.IPromise<IInfoPartageTracab>;
        recupererPartageTracab(codeEtablissement: string, codeGuichet: string, numeroCompte: string, consultationPartage: boolean, consultationTracabilite: boolean): ng.IPromise<IInfoPartageTracab>;
        getIndicPartageTracab(codeEtablissement: string, codeTypeOperation: string, identifiantProduitService: number): ng.IPromise<IIndicPartageTracab>;
        enregistrerPartageTracab(produitEngageFormulaire: ProduitEngageFormulaire): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * permet de recuperer un objet light permettant de sauvegarder produit engagé à fin de le restaurer
         */
        getDonneesSauvegardeProduitEngage(produitEngageFormulaire: ProduitEngageFormulaire): IInfoPartageTracab;
        private initialiserInfoPartageTracab(infoPartageTracab, produitEngageFormulaire);
    }
    interface IProduitEngageService {
        getParamPartageTracab(codeEtablissement: string, identifiantProduitService: number, indicateurs: IIndicPartageTracab): ng.IPromise<IParamPartageTracab>;
        recupererPartageTracab(codeEtablissement: string, codeGuichet: string, numeroCompte: string, consultationPartage: boolean, consultationTracabilite: boolean): ng.IPromise<IInfoPartageTracab>;
        putInfoPartageTracab(donneesInfoPartageTracab: IInfoPartageTracab, produitEngageFormulaire: ProduitEngageFormulaire): ng.IPromise<IInfoPartageTracab>;
        getIndicPartageTracab(codeEtablissement: string, codeTypeOperation: string, identifiantProduitService: number): ng.IPromise<IIndicPartageTracab>;
    }
}

declare module myway.transProduitEngage.Model {
    class DonneesProduitEngage {
        enRecapitulatif: number;
        modePrecedent: boolean;
        offreSouscrite: IContexteOffre;
        produitService: IProduitService;
        etablissement: IEtablissement;
        indicateurs: IIndicPartageTracab;
    }
    class IEtablissement {
        codeEtablissement: string;
        codeGuichet: string;
    }
    class IContexteOffre {
        codeActeGestion: string;
        numeroCompte: string;
        identifiantPersonne: number;
    }
    class IProduitService {
        codeTypeOperation: string;
        identifiantProduitService: number;
        codeProduit: string;
    }
}
