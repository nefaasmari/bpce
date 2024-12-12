
declare module myway.composantsCommuns {
    var app: ng.IModule;
}

declare module gcedoc.siprgce_bordereau_BORD001 {
    interface Isiprgce_bordereau_BORD001 {
        SECTION1: gcedoc.siprgce_bordereau_BORD001.siprgce_bordereau_BORD001SECTION1[];
        GENERIC_ENTETEETS: gcedoc.siprgce_bordereau_BORD001.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: gcedoc.siprgce_bordereau_BORD001.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface siprgce_bordereau_BORD001SECTION1 {
        _blocChoice_: (choice_siprgce_bordereau_BORD001SECTION1_BL_1 | choice_siprgce_bordereau_BORD001SECTION1_BL_Infosgene | choice_siprgce_bordereau_BORD001SECTION1_BL_Lignes | choice_siprgce_bordereau_BORD001SECTION1_BL_Lignes2 | choice_siprgce_bordereau_BORD001SECTION1_BL_Suite | choice_siprgce_bordereau_BORD001SECTION1_BL_SuiteFin | choice_siprgce_bordereau_BORD001SECTION1_BL_SuiteMon | choice_siprgce_bordereau_BORD001SECTION1_BL_Avis | choice_siprgce_bordereau_BORD001SECTION1_GENERIC_CLAUSECNIL | choice_siprgce_bordereau_BORD001SECTION1_GENERIC_SIGNATURE_BORD | choice_siprgce_bordereau_BORD001SECTION1_BL_Saut)[];
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_1 {
        BL_1: siprgce_bordereau_BORD001SECTION1BL_1;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Infosgene {
        BL_Infosgene: siprgce_bordereau_BORD001SECTION1BL_Infosgene;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Lignes {
        BL_Lignes: siprgce_bordereau_BORD001SECTION1BL_Lignes;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Lignes2 {
        BL_Lignes2: siprgce_bordereau_BORD001SECTION1BL_Lignes2;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Suite {
        BL_Suite: siprgce_bordereau_BORD001SECTION1BL_Suite;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_SuiteFin {
        BL_SuiteFin: siprgce_bordereau_BORD001SECTION1BL_SuiteFin;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_SuiteMon {
        BL_SuiteMon: siprgce_bordereau_BORD001SECTION1BL_SuiteMon;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Avis {
        BL_Avis: number;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_GENERIC_CLAUSECNIL {
        GENERIC_CLAUSECNIL: number;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_GENERIC_SIGNATURE_BORD {
        GENERIC_SIGNATURE_BORD: GENERIC_SIGNATURE_BORD;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1_BL_Saut {
        BL_Saut: number;
    }
    interface GENERIC_ENTETEETS {
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_1 {
        TITRE: string;
    }
    interface GENERIC_SIGNATURE_BORD {
        QUALITE_SIGNATAIRE: string;
        LIDANM: string;
        LIDAPP: string;
        LIB_PROCURATION: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Infosgene {
        D3: string;
        D9: string;
        D4: string;
        D10: string;
        D5: string;
        D12: string;
        D6: string;
        D7: string;
        D8: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Lignes {
        Tableau_Lignes: gcedoc.siprgce_bordereau_BORD001.siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes[];
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes {
        _blocChoice_: (choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE1 | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE2 | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE2BIS | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE6 | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE5 | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE5BIS | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE3 | choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE4)[];
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE1 {
        LIGNE1: number;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE2 {
        LIGNE2: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE2BIS {
        LIGNE2BIS: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2BIS;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE6 {
        LIGNE6: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE6;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE5 {
        LIGNE5: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE5BIS {
        LIGNE5BIS: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5BIS;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE3 {
        LIGNE3: siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE3;
    }
    interface choice_siprgce_bordereau_BORD001SECTION1BL_LignesTableau_Lignes_LIGNE4 {
        LIGNE4: number;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2 {
        D1: string;
        D2: string;
        D3: string;
        D4: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE2BIS {
        D1B: string;
        D2B: string;
        D3B: string;
        D4B: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE3 {
        D6: string;
        D7: string;
        D8: string;
        D9: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5 {
        D21: string;
        D22: string;
        D23: string;
        D24: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE5BIS {
        D21B: string;
        D22B: string;
        D23B: string;
        D24B: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_LignesTableau_LignesLIGNE6 {
        D31: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Lignes2 {
        LIGNE2: number;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_Suite {
        D1: string;
        D2: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D5: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_SuiteFin {
        D5: string;
        D6: string;
        D7: string;
        D8: string;
        D9: string;
        D10: string;
        D11: string;
    }
    interface siprgce_bordereau_BORD001SECTION1BL_SuiteMon {
        NB1: string;
        VB1: string;
        NP1: string;
        VP1: string;
        NB2: string;
        VB2: string;
        NP2: string;
        VP2: string;
        NB3: string;
        VB3: string;
        NP3: string;
        VP3: string;
        NB4: string;
        VB4: string;
        NP4: string;
        VP4: string;
        NB5: string;
        VB5: string;
        NP5: string;
        VP5: string;
        NB6: string;
        VB6: string;
        NP6: string;
        VP6: string;
        NB7: string;
        VB7: string;
        NP7: string;
        VP7: string;
        NP8: string;
        VP8: string;
        TotBil: string;
        TotMon: string;
        TotEnc: string;
    }
    class siprgce_bordereau_BORD001 implements Isiprgce_bordereau_BORD001 {
        SECTION1: gcedoc.siprgce_bordereau_BORD001.siprgce_bordereau_BORD001SECTION1[];
        GENERIC_ENTETEETS: gcedoc.siprgce_bordereau_BORD001.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: gcedoc.siprgce_bordereau_BORD001.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class siprgce_bordereau_BORD001ArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class siprgce_bordereau_BORD001ImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class siprgce_bordereau_BORD001ArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module gcedoc.siprgce_bordereau_BORD001 {
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: gcedoc.siprgce_bordereau_BORD001.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    function createImpressionParams(): siprgce_bordereau_BORD001ImpressionParams;
    function createArchiverParams(): siprgce_bordereau_BORD001ArchiverParams;
    function createArchiverImpressionParams(): siprgce_bordereau_BORD001ArchiverImpressionParams;
    function createDocument(): siprgce_bordereau_BORD001;
}

declare module myway.composantsCommuns {
    class GcedocService {
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        impressionParams: any;
        archivageParams: any;
        archivageImpressionParams: any;
        autentification: any;
        codeEtablissement: string;
        logo: string;
        libelleagence: string;
        coceelagence: string;
        nodatpagence: string;
        titre: string;
        dateDuJour: string;
        localite: string;
        version: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        enteteSiprgceBordereauBORD00(numrefdoc: string, codebarre: string, refacte: string): gcedoc.siprgce_bordereau_BORD001.GENERIC_ENTETEETS[];
        setInputImpressionReceptionFondJSON(entreeTransfertFondJSON: string, contexteOD: MyWay.composantsCommuns.model.IContexteOD, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        setInputImpressionDifferenceCaisseAvecConstatJSON(entreeDifferenceCaisseAvecConstatFondJSON: string, contexteOD: MyWay.composantsCommuns.model.IContexteOD, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        setInputBilletPresumesFauxOuMutileFromJSON(entreeBilletPresumesFauxOuMutileJSON: string, contexteOD: MyWay.composantsCommuns.model.IContexteOD, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        setInputImpressionDelestageJSON(entreeTransfertFondJSON: string, contexteOd: MyWay.composantsCommuns.model.IContexteOD, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        setInputImpressionGestionFondGabJSON(entreeTransfertFondJSON: string, contexteOd: MyWay.composantsCommuns.model.IContexteOD, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        setInputImpressionMouvementInterneJSON(entreeMouvementInterne: string, extourne: boolean): MyWay.composantsCommuns.model.IInputGcedocBordereau;
        impressionBoredereau(inputGcedocBordereau: any, identifiantBordereau: string): void;
    }
}

declare module myway.composantsCommuns {
    class InitialisationService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getContextesOd(parametres: MyWay.composantsCommuns.model.IEntreesGetContexteOd): ng.IPromise<Array<MyWay.composantsCommuns.model.IContexteOD>>;
        getCaracteristiqueEDS(parametres: MyWay.composantsCommuns.model.IEntreesCaracteristiqueEDS): ng.IPromise<MyWay.composantsCommuns.model.ICaracteristiqueEDS>;
    }
}

declare module myway.composantsCommuns {
    class OperationsDiversesService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        contexteReception: MyWay.composantsCommuns.model.IContexteOD;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        typeReceptionFond(entree: MyWay.composantsCommuns.model.ItypeReceptionFondInput): ng.IPromise<MyWay.composantsCommuns.model.ITypeReceptionFond>;
        transfertFondsSansBordereau(entree: MyWay.composantsCommuns.model.ITransfertFondsSansBordereau): ng.IPromise<MyWay.composantsCommuns.model.ITransfertFondsSansBordereau>;
        differenceCaisseAvecConstat(entree: MyWay.composantsCommuns.model.IDifferenceCaisseAvecConstat): ng.IPromise<MyWay.composantsCommuns.model.IDifferenceCaisseAvecConstat>;
        BilletsPresumesFauxOuMutiles(entree: MyWay.composantsCommuns.model.IVersementODGeneral): ng.IPromise<MyWay.composantsCommuns.model.IVersementODGeneral>;
        natureErreurEspece(entree: String): ng.IPromise<Array<MyWay.composantsCommuns.model.INatureErreurEspece>>;
        MouvementsInternesCaisse(entree: MyWay.composantsCommuns.model.IMouvementInterneCaisse): ng.IPromise<MyWay.composantsCommuns.model.IMouvementInterneCaisse>;
        DeblocageFinJournee(entree: MyWay.composantsCommuns.model.IDeblocageFinJournee): MyWay.Services.IPromesse<any>;
    }
}

declare module MyWay.composantsCommuns.constant {
    class GcedocBordereau {
        static section1BL1Titre: string;
        static section1BL1LignesTableauLignesLignesLIGNE5D23: string;
        static labelOd: string;
    }
    class Guichet {
        static edsGlobaleParamCodeRelation: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IInfoEDS {
        typeEDS: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
        numeroTelephone: string;
        codePays: string;
        dateDebutValiditeEds: Date;
        dateFinValiditeEds: Date;
        identifiantInterneEDS: number;
        libelleEDS: string;
        referenceExterneEDS: number;
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        codeAgent: number;
        typeFonction: string;
        libelleFonction: string;
        codeQualiteAgent: string;
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        identifiantEDSRattachement: number;
        referenceEDSRattachement: number;
        typeEDSRattachement: string;
        libelleEDSRattachement: string;
        dateFinValiditeEDSRattachement: Date;
        responsableEDSRattachement: number;
    }
    interface IEntreesCaracteristiqueEDS {
        codeEtablissement: string;
        identifiantInterneEDS: string;
        typeEDS: string;
        referenceExterneEDS: string;
        codeAgent: string;
        typeOrganisation: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IContexteOperationDiverse {
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        libelleOperationDiverse: string;
        codeSens: string;
        modeExtourne: boolean;
    }
    interface IListeTypeDifferenceCaisse {
        libelleOperationDiverse: string;
        codeOperationDiverse: string;
        codeSens: string;
        libelleSens: string;
    }
    interface IDetailDifferenceCaisse {
        codeDevise: string;
        codeModeApparitionFamille: string;
        codeSensTransaction: string;
        codeAnnulationOperation: string;
        modeFinancier: string;
        codeSensDifferenceCaisse: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        referenceExterneEDS: number;
        identifiantEDSGuichet: number;
        referenceExterneEDSGuichet: number;
        referenceExterneAgent: number;
        montantOperation: number;
        libelleNatureErreurEspece: string;
        libelleOperation: string;
        libelleOperationComplementaire: string;
        codeNatureErreurEspece: string;
        dateConstatEcartInitial: Date;
        identifiantEcart: string;
    }
    interface IDifferenceCaisseAvecConstat {
        contexteOperationDiverse: IContexteOperationDiverse;
        detailDifferenceCaisse: IDetailDifferenceCaisse;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IEntreesGetContexteOd {
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        identifiantElementStructure: string;
        modeExtourne: boolean;
    }
    interface IContexteOD {
        codeBanque: string;
        codeFamilleOperationDiverse: string;
        libelleFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        libelleOperationDiverse: string;
        codeModeApparition: string;
        codeSens: string;
        libelleSens: string;
        intitule1LibelleOperationEcran: string;
        intitule2LibelleOperationEcran: string;
        identificationRequete: string;
        autorisation: boolean;
        libelleAutorisation: string;
        modeExtourne: boolean;
        nomService: string;
        libelleNatureTransfert: string;
        intitule1Obligatoire: boolean;
        intitule2Obligatoire: boolean;
    }
    interface ITravailJu2c {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITravailJu2cItem>;
    }
    interface ITravailJu2cItem {
        YNOXCE: string;
        NOCEEL: string;
        UCGWRT: string;
    }
    interface ITravailJu2a {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITravailJu2aItem>;
    }
    interface ITravailJu2aItem {
        UCGWBA: string;
        UCGWMO: string;
        UCGWSR: string;
        COJOFA: string;
        YNOXCE: string;
        CIJOAS: string;
        UCGWGA: string;
        UCGWBD: string;
        UCGWRT: string;
        ULIWFO: string;
    }
    interface ITravailJu2b {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITravailJu2bItem>;
    }
    interface ITravailJu2bItem {
        UCGWMO: string;
        UCTXS5: string;
        COJCIN: string;
        COJOFA: string;
        COJOMC: string;
        COJOMB: string;
        LIJCSC: string;
        COJOMA: string;
        UCGWGA: string;
        UCGWBD: string;
        COJOME: string;
        COJOMD: string;
        IDSEQ3: string;
        ULIWOD: string;
        CIJMOB: string;
        DFJOVA: string;
        LIJMTI: string;
        CIJMTI: string;
        COJXHD: string;
        DDEXPH: string;
        UCGWRT: string;
        COJCSC: string;
        UCGWBA: string;
        UCGWSR: string;
        YNOXCE: string;
        LIJMOB: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IDeblocageFinJournee {
        typeEDSRattachementGuichet: string;
        referenceEDSRattachementGuichet: number;
    }
}

declare module MyWay.composantsCommuns.model {
    class CExtourne implements IExtourne {
        libelleOperationDiverse: string;
        codeSens: string;
        montant: number;
        libelleSens: string;
        intitule1LibelleOperationEcran: string;
        intitule2LibelleOperationEcran: string;
        intitule1OperationEcran: string;
        intitule2OperationEcran: string;
        libelleFamilleOperationDiverse: string;
        identificationRequete: string;
        autorisation: boolean;
        libelleAutorisation: string;
        modeExtourne: boolean;
        nomService: string;
        libelleNatureTransfert: string;
        guichet: string;
        natureErreur: string;
        dateErreur: string;
        typeDifferenceCaisse: string;
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        referenceExterneEDSRattGuichetEmetteur: number;
        typeEDSRattGuichetEmetteur: string;
        identifiantEDSRattGuichetEmetteur: number;
        identifiantGuichetEmetteur: number;
        referenceExterneGuichetEmetteur: number;
        typeEDSGuichetEmetteur: string;
        identifiantEDSRattGuichetDestinataire: number;
        typeEDSRattGuichetDestinataire: string;
        identifiantGuichetDestinataire: number;
        referenceExterneGuichetDestinataire: number;
        typeEDSGuichetDestinataire: string;
        codeSensTransaction: string;
        codeModeApparitionFamille: string;
        libelleOperation: string;
        libelleOperationComplementaire: string;
    }
    interface IExtourne {
        libelleOperationDiverse: string;
        codeSens: string;
        montant: number;
        libelleSens: string;
        intitule1LibelleOperationEcran: string;
        intitule2LibelleOperationEcran: string;
        intitule1OperationEcran: string;
        intitule2OperationEcran: string;
        libelleFamilleOperationDiverse: string;
        identificationRequete: string;
        autorisation: boolean;
        libelleAutorisation: string;
        modeExtourne: boolean;
        nomService: string;
        libelleNatureTransfert: string;
        guichet: string;
        natureErreur: string;
        dateErreur: string;
        typeDifferenceCaisse: string;
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        referenceExterneEDSRattGuichetEmetteur: number;
        typeEDSRattGuichetEmetteur: string;
        identifiantEDSRattGuichetEmetteur: number;
        identifiantGuichetEmetteur: number;
        referenceExterneGuichetEmetteur: number;
        typeEDSGuichetEmetteur: string;
        identifiantEDSRattGuichetDestinataire: number;
        typeEDSRattGuichetDestinataire: string;
        identifiantGuichetDestinataire: number;
        referenceExterneGuichetDestinataire: number;
        typeEDSGuichetDestinataire: string;
        codeSensTransaction: string;
        codeModeApparitionFamille: string;
        libelleOperation: string;
        libelleOperationComplementaire: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IInputGcedocBordereau {
        Section1BL1Titre: string;
        Section1BL1LignesTableauLignesLIGNE2D1: string;
        Section1BL1LignesTableauLignesLIGNE2D2: string;
        Section1BL1LignesTableauLignesLIGNE2D3: string;
        Section1BL1LignesTableauLignesLIGNE2BISD1B: string;
        Section1BL1LignesTableauLignesLIGNE2BISD1B2: string;
        Section1BL1LignesTableauLignesLignesLIGNE5D23: string;
        Section1BL1LignesTableauLignesLignesLIGNE5D21: string;
        Section1BL1LignesTableauLignesLignesLIGNE5BISD21B: string;
        Section1BL1BLSuiteD1: string;
        Section1BL1BLSuiteD2: string;
        Section1BL1BLSuiteD2_2: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IContexteMouvementsInternes {
        modeExtourne: boolean;
    }
    interface IDetailMouvementInterne {
        codeDevise: string;
        codeAnnulationOperation: string;
        modeFinancier: string;
        montantOperation: number;
        refExtEDSRattGuichetDest: number;
        identifiantEDSRattGuichetDest: number;
        typeEDSRattGuichetDest: string;
        identifiantGuichetDest: number;
        typeEDSGuichetDest: string;
        refExtGuichetDest: number;
        identifiantEDSRattGuichetEmet: number;
        refExtEDSRattGuichetEmet: number;
        typeEDSRattGuichetEmet: string;
        identifiantGuichetEmet: number;
        refExtGuichetEmet: number;
        typeEDSGuichetEmet: string;
        texteOperation1: string;
        texteOperation2: string;
    }
    interface IMouvementInterneCaisse {
        contexteOperationDiverse: IContexteMouvementsInternes;
        detailMouvementInterne: IDetailMouvementInterne;
    }
}

declare module MyWay.composantsCommuns.model {
    interface INatureErreurEspece {
        codeBanque: string;
        codeNatureErreurEspece: string;
        libelleNatureErreurEspece: string;
        indicateurGabOperationnel: boolean;
    }
    interface IObjetDelocaliseTravail {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IJu2eTravail>;
    }
    interface IJu2eTravail {
        COJOAG: string;
        COJOPC: string;
        COJOPF: string;
        COJOGA: string;
        COCXBQ: string;
        COJONE: string;
        LIJONE: string;
        COJOCO: string;
    }
    interface IRetourTravail {
        typeElementStructure: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IDetailTransfertFonds {
        codeDevise: string;
        codeModeApparitionFamille: string;
        codeSensTransaction: string;
        codeNatureTransfertFonds: string;
        codeAnnulationOperation: string;
        modeFinancier: string;
        referenceExterneEDSRattGuichetEmetteur: number;
        typeEDSRattGuichetEmetteur: string;
        identifiantEDSRattGuichetEmetteur: number;
        identifiantGuichetEmetteur: number;
        referenceExterneGuichetEmetteur: number;
        typeEDSGuichetEmetteur: string;
        identifiantEDSRattGuichetDestinataire: number;
        referenceExterneEDSRattGuichetDestinataire: number;
        typeEDSRattGuichetDestinataire: string;
        identifiantGuichetDestinataire: number;
        referenceExterneGuichetDestinataire: number;
        typeEDSGuichetDestinataire: string;
        montantOperation: number;
        libelleOperation: string;
        libelleOperationComplementaire: string;
    }
    interface ITransfertFondsSansBordereau {
        contexteOperationDiverse: IContexteOperationDiverse;
        detailTransfertFondsSansBordereau: IDetailTransfertFonds;
    }
}

declare module MyWay.composantsCommuns.model {
    interface ITypeReceptionFond {
        codeEtablissement: string;
        identifiantAgence: number;
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        listeReferences: Array<IReference>;
    }
    interface IReference {
        identifiantConditionnement: string;
    }
    interface ItypeReceptionFondInput {
        codeEtablissement: string;
        identifiantAgence: string;
    }
}

declare module MyWay.composantsCommuns.model {
    interface IContexteOperationDiverseVersementODGeneral {
        codeFamilleOperationDiverse: string;
        codeOperationDiverse: string;
        libelleOperationDiverse: string;
        modeExtourne: boolean;
    }
    interface IVersementODGeneral {
        contexteOperationDiverse: IContexteOperationDiverseVersementODGeneral;
        detailOperationDiverse: IDetailOperationDiverse;
    }
    interface IDetailOperationDiverse {
        codeDevise: string;
        codeModeApparitionFamille: string;
        codeSensTransaction: string;
        modeFinancier: string;
        libelleOperation: string;
        libelleOperationComplementaire: string;
        typeCheque: string;
        codeAnnulationOperation: string;
        montantOperation: number;
    }
}

declare module myway.composantsCommuns {
    class GuichetControleur {
        private $scope;
        private initialisationService;
        private serviceAgentExtended;
        static $inject: string[];
        guichetDestinataireSelectionne: any;
        private parametresComptables;
        private edsSelectionne;
        private paramListeGuichet;
        private typeDeGuichet;
        lbl: string;
        private edsGlobaleParam;
        private authentificationInfo;
        constructor($scope: ng.IScope, initialisationService: InitialisationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module myway.composantsCommuns {
}

declare module myway.composantsCommuns {
    class CommentairesControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        messageInfoBulle: string;
        infobulleEx0: any;
        placeHolder: string;
        libelle: string;
        commentaire: string;
        numeroCommentaire: string;
        obligatoire: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        watchCommentaireSaisi(commentaire: string): void;
    }
}

declare module myway.composantsCommuns {
}

declare module myway.composantsCommuns {
    class MontantControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        montantOperation: number;
        devise: string;
        placeHolder: string;
        required: string;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        watchMontantSaisi(): void;
    }
}

declare module myway.composantsCommuns {
}
