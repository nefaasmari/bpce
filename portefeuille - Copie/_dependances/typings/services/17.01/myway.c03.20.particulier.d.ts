declare module GceDoc.Opt_in {
    enum Opt_inLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface IOpt_in {
        CIVILITE: string;
        NOM: string;
        PRENOM: string;
        DATE_NAISSANCE: string;
        LOCALITE_NAISSANCE: string;
        NATIONNALITE: string;
        ADRESS: string;
        ID_CLIENT: string;
        DE_LA_BANQUE: string;
        LIBELLE_OPTION: string;
        MOBILE_PERSO: string;
        MOBILE_SUPP_PERSO: string;
        EMAIL_PERSO: string;
        MOBILE_PRO: string;
        MOBILE_SUPP_PRO: string;
        EMAIL_PRO: string;
        A_LA_BANQUE: string;
        LOGO_ETABLISSEMENT: GceDoc.Opt_in.Opt_inLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NR_DOCUMENT: string;
        MENTIONS_LEGALES: string;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface Opt_inLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    class Opt_in implements IOpt_in {
        CIVILITE: string;
        NOM: string;
        PRENOM: string;
        DATE_NAISSANCE: string;
        LOCALITE_NAISSANCE: string;
        NATIONNALITE: string;
        ADRESS: string;
        ID_CLIENT: string;
        DE_LA_BANQUE: string;
        LIBELLE_OPTION: string;
        MOBILE_PERSO: string;
        MOBILE_SUPP_PERSO: string;
        EMAIL_PERSO: string;
        MOBILE_PRO: string;
        MOBILE_SUPP_PRO: string;
        EMAIL_PRO: string;
        A_LA_BANQUE: string;
        LOGO_ETABLISSEMENT: GceDoc.Opt_in.Opt_inLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NR_DOCUMENT: string;
        MENTIONS_LEGALES: string;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class Opt_inGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class Opt_inImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class Opt_inGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

interface ImodalService {
    dismiss: (param: string) => void;
    close: (param: any) => void;
}
/**
 * Classe de base pour les controlleurs des popups
 * @class BasePopupController
 */
declare class BasePopupController {
    paramIHM: ConnaissanceClient.IParamIHM;
    scope: ConnaissanceClient.IPopin;
    Constantes: Menu.IConstantes;
    modalInstance: ImodalService;
    getDateAjout: () => number;
    annuler: () => void;
    /**
     * Constructeur du controlleur des popups
     * @param $scope {ConnaissanceClient.IPopin} Scope du constructeur
     */
    constructor($scope: ConnaissanceClient.IPopin, tierServices?: ITierService);
}

declare module SaisieSimple {
    interface ISaisieSimpleScope extends ConnaissanceClient.IRequiredScope {
        flag?: boolean;
        flagInvalid?: boolean;
        estErreur?: () => void;
        enSortie?: () => void;
        patterntype?: string;
        _pattern?: string;
        value: (string) => string;
        _id?: string;
        originalValue: string;
        getMask?: () => string;
    }
    class SaisieSimpleController {
        C: Menu.IConstantes;
        originalValue: string;
        _data: string;
        flag: boolean;
        flagInvalid: boolean;
        _pattern: string;
        estErreur: () => void;
        enSortie: () => void;
        getMask: () => string;
        patterntype: string;
        static $inject: string[];
        constructor($scope: SaisieSimple.ISaisieSimpleScope, Constantes: Menu.IConstantes, tierServices: ITierService);
    }
    class SaisieSimpleLink {
        constructor(scope: SaisieSimple.ISaisieSimpleScope, element: any, attrs: ng.IAttributes);
    }
}

declare module Gce.EditiqueVente.Services.Documents.SurveillancePPE {
    enum GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface ISurveillancePPE {
        SECTION1: Gce.EditiqueVente.Services.Documents.SurveillancePPE.SurveillancePPESECTION1[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SurveillancePPESECTION1 {
        GENERIC_TITREDOCUMENT: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_TITREDOCUMENT[];
        BL_ENTETE: Gce.EditiqueVente.Services.Documents.SurveillancePPE.SurveillancePPESECTION1BL_ENTETE[];
        BL_OUIQ1: number;
        BL_OUIQ1_1: number;
        BL_OUIQ1_1_1: number;
        BL_PAYS: Gce.EditiqueVente.Services.Documents.SurveillancePPE.SurveillancePPESECTION1BL_PAYS[];
        BL_1: number;
        BL_1_1: number;
        BL_2_2: number;
        BL_2: number;
        BL_3_3: number;
        BL_3: number;
        BL_4_4: number;
        BL_4: number;
        BL_5_5: number;
        BL_5: number;
        BL_6_6: number;
        BL_6: number;
        BL_7_7: number;
        BL_7: number;
        BL_8_8: number;
        BL_8: number;
        BL_9_9: number;
        BL_9: number;
        BL_NONQ1: number;
        BL_NONQ1_1: number;
        BL_PIED: number;
        BL_OUINONQ1: number;
        BL_OUINONQ1_1: number;
        GENERIC_SIGNATURE_STD_SANS_CNIL: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_SIGNATURE_STD_SANS_CNIL[];
        BL_PAVE_SIGN: number;
        BL_PIED_PAGE: number;
    }
    interface GENERIC_TITREDOCUMENT {
        TITRE_DOCUMENT: string;
    }
    interface SurveillancePPESECTION1BL_ENTETE {
        LIB_NOM: string;
        LIB_PRENOM: string;
        LIB_PAYSRESI: string;
        LIB_NUMP: string;
    }
    interface SurveillancePPESECTION1BL_PAYS {
        LIB_PAYSRESI1: string;
    }
    interface GENERIC_SIGNATURE_STD_SANS_CNIL {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB10175[];
        b13135: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB13135[];
        b13705: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB13705[];
        b14445: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB14445[];
        b14505: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB14505[];
        b15135: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB15135[];
        b15905: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB15905[];
        b15965: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB15965[];
        b16275: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB16275[];
        b18025: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB18025[];
        b18279: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB18279[];
        b43199: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB43199[];
        b18715: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB18715[];
        b13335: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB13335[];
        b17515: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB17515[];
        b62108: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB62108[];
        b12579: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB12579[];
        b13825: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB13825[];
        b16705: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB16705[];
        b12135: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB12135[];
        b14265: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB14265[];
        b13485: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB13485[];
        b18315: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB18315[];
        b11315: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB11315[];
        b11425: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB11425[];
        b12548: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB12548[];
        b30051: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    class SurveillancePPE implements ISurveillancePPE {
        SECTION1: Gce.EditiqueVente.Services.Documents.SurveillancePPE.SurveillancePPESECTION1[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.SurveillancePPE.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    interface ParametresSysteme {
        typeName: string;
        typeFullName: string;
        librairie: string;
    }
    interface ParametresObligatoires {
        typeFichier: number;
        nomFichier: string;
        restitutionVersion: number;
        sousRepModele: string;
    }
    interface ParametresOptionnels {
        annul?: boolean;
    }
    class SurveillancePPEParam {
        typeName: string;
        typeFullName: string;
        librairie: string;
        typeFichier: MyWay.Services.Fichier.TYPE_FICHIER;
        nomFichier: string;
        restitutionVersion: MyWay.Services.Impression.RESTITUTION_VERSION;
        sousRepModele: string;
        constructor();
    }
    class SurveillancePPEGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT {
    interface IFORMULAIRE_DONNEES_CLIENT {
        NOMCLIENT: string;
        NUMEROCLIENT: string;
        TYPE_PERSONNE: string;
        SUIVIPAR: string;
        DOMICILIE: string;
        SUIVIPAR2: string;
        TITRE_ETAT_CIVIL: string;
        ETAT_CIVIL: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTETAT_CIVIL[];
        TITRE_COORDONNEES: string;
        COORDONNEES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTCOORDONNEES[];
        TITRE_PROFESSION: string;
        PROFESSION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPROFESSION[];
        TITRE_RELATIONS: string;
        RELATION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTRELATION[];
        TITRE_REVENUS: string;
        SECTION_REVENUS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUS[];
        TITRE_CHARGES: string;
        SECTION_CHARGES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_CHARGES[];
        TITRE_PATRIMOINE_FI: string;
        ENTENTE_TAB_PATFI: number;
        PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFI[];
        ENTETE_PATFI_DETENTEUR: number;
        SECTION_PATFI_DETENTEUR: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEUR[];
        ENTETE_SERVICES: number;
        SECTION_SERVICES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_SERVICES[];
        TITRE_PATIMMO: string;
        PATIMMO: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMO[];
        TITE_HERITIERS: string;
        HERITIERS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTHERITIERS[];
        TITRE_SUCCESSION: string;
        TITRE_GESTION: string;
        LIGNE_GESTION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_GESTION[];
        TITRE_PERIODES: string;
        LIGNE_RECYCLAGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_RECYCLAGE[];
        TITRE_OPERATIONS: string;
        OPERATIONS_RECYCLAGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTOPERATIONS_RECYCLAGE[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTETAT_CIVIL {
        DATENAISSANCEAGE: string;
        REGIMEMATRIMONIAL: string;
        NATIONALITE: string;
        CAPACITE: string;
        NBENFANTS: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTCOORDONNEES {
        ADRESSE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTCOORDONNEESADRESSE[];
        LIGNE_MEDIA: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTCOORDONNEESLIGNE_MEDIA[];
    }
    interface FORMULAIRE_DONNEES_CLIENTCOORDONNEESADRESSE {
        CHAMP_ADRESSE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTCOORDONNEESLIGNE_MEDIA {
        CHAMP_MEDIA: string;
        CHAMP_ACCEPTEOFFCOM: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPROFESSION {
        PROFESSION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPROFESSIONPROFESSION[];
        vide: string;
        CSP: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPROFESSIONCSP[];
    }
    interface FORMULAIRE_DONNEES_CLIENTPROFESSIONPROFESSION {
        CHAMP_PROFESSION: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPROFESSIONCSP {
        CHAMP_CSP: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTRELATION {
        RELATION: string;
        LIGNE_RELATION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTRELATIONLIGNE_RELATION[];
        RELATION_PRO: string;
        LIGNE_RELATION_PRO: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTRELATIONLIGNE_RELATION_PRO[];
    }
    interface FORMULAIRE_DONNEES_CLIENTRELATIONLIGNE_RELATION {
        CHAMP_RELATION: string;
        PERSONNE_DECEDEE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTRELATIONLIGNE_RELATION_PRO {
        CHAMP_RELATION: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUS {
        TOTALREVENUS: string;
        LISTE_REVENUS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUS[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUS {
        BLOC_REVENUS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUS[];
        VIDE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUS {
        NOM_PERSONNE: string;
        LIGNE_REVENUS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUS[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUS {
        TYPE_REVENU: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUSTYPE_REVENU[];
        MONTANT_REVENU: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUSMONTANT_REVENU[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUSTYPE_REVENU {
        LIBELLE_REVENU: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_REVENUSLISTE_REVENUSBLOC_REVENUSLIGNE_REVENUSMONTANT_REVENU {
        MONTANT: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_CHARGES {
        TOTALCHARGES: string;
        SECTION_CHARGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGE[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGE {
        TYPE_CHARGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGETYPE_CHARGE[];
        MONTANT_CHARGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGEMONTANT_CHARGE[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGETYPE_CHARGE {
        LIBELLE_CHARGE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_CHARGESSECTION_CHARGEMONTANT_CHARGE {
        CHARGE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFI {
        SECTION_TITREPATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFI[];
        LIGNE_PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFI[];
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFI {
        TITRE_PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITITRE_PATFI[];
        TOTAL_CE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_CE[];
        TOTAL_HORSCE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_HORSCE[];
        TOTAL_PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_PATFI[];
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITITRE_PATFI {
        TITRE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_CE {
        CE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_HORSCE {
        HORS_CE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFISECTION_TITREPATFITOTAL_PATFI {
        TOTAL: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFI {
        TYPE_PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFITYPE_PATFI[];
        MONTANT_PATFICE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFIMONTANT_PATFICE[];
        MONTANT_PATFIHORSCE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFIMONTANT_PATFIHORSCE[];
        TOTAL_LIGNEPATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFITOTAL_LIGNEPATFI[];
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFITYPE_PATFI {
        LIGNE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFIMONTANT_PATFICE {
        MONTANT_CE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFIMONTANT_PATFIHORSCE {
        MONTANT_HORS_CE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATFILIGNE_PATFITOTAL_LIGNEPATFI {
        TOTAL_LIGNE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEUR {
        LIGNE_TITRE_PERSONNE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEURLIGNE_TITRE_PERSONNE[];
        LIGNE_PRODUIT_PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEURLIGNE_PRODUIT_PATFI[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEURLIGNE_TITRE_PERSONNE {
        NOM_PERSONNE_PATFI: string;
        TOTAL_CE_PATFI: string;
        TOTAL_HORS_CE_PATFI: string;
        TOTAL_PATFI_PERSONNE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEURLIGNE_PRODUIT_PATFI {
        PRODUITS_CHAMPS1: string;
        PRODUITS_CHAMPS2: string;
        PRODUITS_CHAMPS3: string;
        PRODUITS_CHAMPS4: string;
        PRODUITS_CHAMPS5: string;
        PRODUITS_CHAMPS6: string;
        PRODUITS_CHAMPS7: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_SERVICES {
        PERSONNE_SERVICES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_SERVICESPERSONNE_SERVICES[];
        LIGNE_SERVICES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_SERVICESLIGNE_SERVICES[];
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_SERVICESPERSONNE_SERVICES {
        NOM_PERSONNE_SERVICE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTSECTION_SERVICESLIGNE_SERVICES {
        NOM_SERVICE: string;
        ECHEANCE_SERVICE: string;
        PERIODICITE_SERVICE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMO {
        TITRE_LIGNEPATIMMO: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOTITRE_LIGNEPATIMMO;
        SECTION_PATIMMO: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMO[];
        LIGNE_REFUSE: string;
        LIGNE_SUPPLEMENTAIRE_PATIMMO: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOTITRE_LIGNEPATIMMO {
        LIGNEPATIMMO: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMO {
        TYPE_BIEN: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOTYPE_BIEN;
        USAGE_BIEN: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOUSAGE_BIEN;
        VALEUR_BIEN: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOVALEUR_BIEN;
        VILLE_BIEN: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOVILLE_BIEN;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOTYPE_BIEN {
        TYPE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOUSAGE_BIEN {
        USAGE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOVALEUR_BIEN {
        VALEUR: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTPATIMMOSECTION_PATIMMOVILLE_BIEN {
        VILLE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTHERITIERS {
        PERSONNE_HERITIER: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTHERITIERSPERSONNE_HERITIER[];
        VIDE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTHERITIERSPERSONNE_HERITIER {
        PERSONNE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTLIGNE_GESTION {
        LIGNES_GESTION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_GESTIONLIGNES_GESTION[];
        VIDE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTLIGNE_GESTIONLIGNES_GESTION {
        GESTION: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTLIGNE_RECYCLAGE {
        LIGNES_RECYCLAGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_RECYCLAGELIGNES_RECYCLAGE[];
        VIDE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTLIGNE_RECYCLAGELIGNES_RECYCLAGE {
        RECYCLAGE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTOPERATIONS_RECYCLAGE {
        LIGNES_OPERATIONS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTOPERATIONS_RECYCLAGELIGNES_OPERATIONS[];
        VIDE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTOPERATIONS_RECYCLAGELIGNES_OPERATIONS {
        OPERATION: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETS {
        b10175: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB10175[];
        b13135: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13135[];
        b13705: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13705[];
        b14445: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14445[];
        b14505: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14505[];
        b15135: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15135[];
        b15905: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15905[];
        b15965: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15965[];
        b16275: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB16275[];
        b18025: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18025[];
        b18279: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18279[];
        b43199: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB43199[];
        b18715: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18715[];
        b13335: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13335[];
        b17515: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB17515[];
        b62108: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB62108[];
        b12579: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12579[];
        b13825: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13825[];
        b16705: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB16705[];
        b12135: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12135[];
        b14265: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14265[];
        b13485: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13485[];
        b18315: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18315[];
        b11315: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB11315[];
        b11425: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB11425[];
        b12548: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12548[];
        b30051: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB30051[];
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
    }
    interface FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
    }
    class FORMULAIRE_DONNEES_CLIENT implements IFORMULAIRE_DONNEES_CLIENT {
        NOMCLIENT: string;
        NUMEROCLIENT: string;
        TYPE_PERSONNE: string;
        SUIVIPAR: string;
        DOMICILIE: string;
        SUIVIPAR2: string;
        TITRE_ETAT_CIVIL: string;
        ETAT_CIVIL: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTETAT_CIVIL[];
        TITRE_COORDONNEES: string;
        COORDONNEES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTCOORDONNEES[];
        TITRE_PROFESSION: string;
        PROFESSION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPROFESSION[];
        TITRE_RELATIONS: string;
        RELATION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTRELATION[];
        TITRE_REVENUS: string;
        SECTION_REVENUS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_REVENUS[];
        TITRE_CHARGES: string;
        SECTION_CHARGES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_CHARGES[];
        TITRE_PATRIMOINE_FI: string;
        ENTENTE_TAB_PATFI: number;
        PATFI: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATFI[];
        ENTETE_PATFI_DETENTEUR: number;
        SECTION_PATFI_DETENTEUR: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_PATFI_DETENTEUR[];
        ENTETE_SERVICES: number;
        SECTION_SERVICES: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTSECTION_SERVICES[];
        TITRE_PATIMMO: string;
        PATIMMO: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTPATIMMO[];
        TITE_HERITIERS: string;
        HERITIERS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTHERITIERS[];
        TITRE_SUCCESSION: string;
        TITRE_GESTION: string;
        LIGNE_GESTION: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_GESTION[];
        TITRE_PERIODES: string;
        LIGNE_RECYCLAGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTLIGNE_RECYCLAGE[];
        TITRE_OPERATIONS: string;
        OPERATIONS_RECYCLAGE: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTOPERATIONS_RECYCLAGE[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.FormulaireDonneesClient.FORMULAIRE_DONNEES_CLIENT.FORMULAIRE_DONNEES_CLIENTGENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class FORMULAIRE_DONNEES_CLIENTGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class FORMULAIRE_DONNEES_CLIENTImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class FORMULAIRE_DONNEES_CLIENTGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}


declare module ConnaissanceClient {
    var app: ng.IModule;
}

declare const enum JustificatifEnum {
    Identite = 0,
    Domicile = 1,
    Revenu = 2,
}
interface IPortefeuille {
    codeMotifPortefeuille: string;
    codeTypePortefeuille: string;
    identifiantElementStructurePortefeuille: number;
    identifiantElementStructureSuiviPortefeuille: number;
    identifiantPortefeuille: number;
    libelleElementStructurePortefeuille: string;
    libelleElementStructureSuiviPortefeuille: string;
    libellePortefeuille: string;
}
declare module ConnaissanceClientCtrl {
    interface IErreur {
        status: IErreurStatus;
    }
    interface IInfosErreur {
        codeRessource: number;
        libelleRessource: string;
        messageErreur: string;
    }
    interface IErreurStatus {
        codeStatus: number;
        infosErreur: Array<IInfosErreur>;
    }
}

declare module ConnaissanceClient {
    class EnteteControlleur {
        private _tierService;
        private _ServicesChampsObligatoires;
        private _type;
        private _types;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        labelCreation: string;
        static $inject: string[];
        constructor(Deloc: ConnaissanceClient.IDeloc, Constantes: Menu.IConstantes, Tools: any, tierServices: ITierService, $filter: ng.IFilterService, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceSuccession: ServiceIhm.IServiceSuccession, drcService: modService.IDrcService);
        setTypePersonne(): void;
        typePersonne: any;
        creation: boolean;
        enCoursDeSauvegarde: boolean;
    }
}



declare module ConnaissanceClient {
}

declare module ConnaissanceClient {
    class PiedPageControlleur {
        private habilitationsService;
        private $timeout;
        private FraicheurRubrique;
        private ServiceEtatCivil;
        private ServiceDonneesGestion;
        quitter: (titre: string) => void;
        creer: (typePersonne: string) => void;
        pretPourCreation: boolean;
        modifier: (typePersonne: string) => void;
        basculer: (typePersonne: string) => void;
        cloturer: () => void;
        navigationBDR: () => void;
        getTypePersonne: () => string;
        estPro: boolean;
        afficherNavigationBDR: boolean;
        C: Menu.IConstantes;
        documentsClient: () => void;
        private _optionsFATCA;
        private _annulerProcess;
        private _encours;
        private _verifierDecesEtRelation;
        private _particulierInformation;
        private _ppe;
        private _identifiantPersonne;
        private _tierService;
        private _serviceDonneesProfesionnelles;
        private _serviceCoordonnees;
        private _tier;
        private _tierOriginal;
        private _ServiceNavigation;
        private _ServicesChampsObligatoires;
        private _tools;
        private _printService;
        private _contexte;
        private _PortailAgent;
        private _$q;
        private identifiantElementStructure;
        static $inject: string[];
        constructor($scope: any, Constantes: Menu.IConstantes, ServiceNavigation: ServiceIhm.IServiceNavigation, modalService: MyWay.UI.ModalService, PortailAgent: MyWay.Services.ServiceAgentExtended, Contexte: ConnCliContexte.IContexte, tierServices: ITierService, habilitationsService: Habilitations.IHabilitationsService, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees, ServiceRelation: ServiceIhm.IServiceRelation, ServiceDonneesProfesionnelles: ServiceIhm.IServiceDonneesProfessionnelles, $q: ng.IQService, $timeout: any, ServicePiedPage: ServiceIhm.IServicePiedPage, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, FraicheurRubrique: any, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServiceDonneesGestion: ServiceIhm.IServiceDonneesGestion);
        initActivitePro(): void;
        compteurIsCreation: number;
        creation: boolean;
        indicateurArtisan: boolean;
        enCoursDeSauvegarde: boolean;
        typePersonne(): number;
        isFormulaireCompletEtModifie: boolean;
        isFormulaireComplet: boolean;
    }
}


declare var memoize: <T extends Function>(func: T, resolver?: Function) => T;
declare var groupBy: {
    <T>(collection: T[], callback?: _.ListIterator<T, any>, thisArg?: any): _.Dictionary<T[]>;
    <T>(collection: _.List<T>, callback?: _.ListIterator<T, any>, thisArg?: any): _.Dictionary<T[]>;
    <T>(collection: T[], pluckValue: string): _.Dictionary<T[]>;
    <T>(collection: _.List<T>, pluckValue: string): _.Dictionary<T[]>;
    <W, T>(collection: T[], whereValue: W): _.Dictionary<T[]>;
    <W, T>(collection: _.List<T>, whereValue: W): _.Dictionary<T[]>;
    <T>(collection: _.Dictionary<T>, callback?: _.ListIterator<T, any>, thisArg?: any): _.Dictionary<T[]>;
    <TValue>(collection: _.Dictionary<TValue>, pluckValue: string): _.Dictionary<TValue[]>;
    <W, TValue>(collection: _.Dictionary<TValue>, whereValue: W): _.Dictionary<TValue[]>;
};

declare module modService {
    class ClasseurClientConstants {
        static serviceUrl: string;
    }
}

interface IFactorySuccession {
    getSuccession: (codeEtablissement: any, idPersonne: any, indicateurListe: string) => ng.IPromise<Object>;
    ajouterSuccession: (succession: modService.ISuccession) => ng.IPromise<Object>;
    mettreAJourSuccession: (succession: modService.ISuccession) => ng.IPromise<Object>;
    effacerSuccession: (succession: modService.ISuccession) => ng.IPromise<Object>;
}


declare module modService {
    interface IDrcService {
        numerisation: (personneModifiee: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal, typeLisa: ConnaissanceClient.Enums.DRCTypeLisa) => any;
        personneOriginale: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        estEnregistre: boolean;
        getDonneesJustificatif: () => any;
        getFonctionBefore: () => ng.IPromise<void>;
    }
    /**
     * Classe du service gérant les contrôles pour la mise à jour DRC
     * @class DrcService
     */
    class DrcService implements IDrcService {
        static $inject: string[];
        private _proprietesMajDRC;
        private _personneOriginale;
        private _$parse;
        private _$q;
        private _numerisationService;
        private _ServiceDonneesProfesionnelles;
        private _estEnregistre;
        private _PortailAgent;
        private _tierServices;
        private _modalService;
        private _ServiceNavigation;
        getFonctionBefore: () => ng.IPromise<void>;
        constructor($parse: ng.IParseService, $q: ng.IQService, numerisationService: myway.comEditiqueNumerisation.Services.NumerisationService, ServiceDonneesProfesionnelles: ServiceIhm.IServiceDonneesProfessionnelles, PortailAgent: MyWay.Services.ServiceAgentExtended, tierServices: ITierService, modalService: MyWay.UI.ModalService, ServiceNavigation: ServiceIhm.IServiceNavigation);
        /**
         * fonction permettant de lancer les étapes de numérisation
         * @param personneModifiee {ConnaissanceClient.Modeles.Tiers.IObjetPrincipal} personne enregistrée
         * @param typeLisa {ConnaissanceClient.Enums.DRCTypeLisa} Type de sortie Lisa (Fermer ou synthèse)
         * @return {any} Résultat de la promesse
         */
        numerisation: (personneModifiee: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal, typeLisa: ConnaissanceClient.Enums.DRCTypeLisa) => any;
        /**
        * Fonction permettant de vérifier si des modifications ont été effectuées entre l'objet tier original et le tier modifié.
        * Le paramètre propriétés est optionnel, il permet de restreindre la comparaison entre les 2 objets tier à seulement
        * certaines propriétés des objets tier.
        * Exemple :
        * proprietes = ['particulierInformation.libelleProfession'];
        *
        * @method hasModificationsTier
        * @param tierModifie {Tier.ITierObject} L'objet tier modifié.
        * @param proprietes {Array<string>} La liste des propriétés des objets tier à vérifier
        * @returns {boolean} true s'il y a des modifications, false sinon
        */
        private hasModificationsTier;
        /**
         * Fonction retournant l'objet donneesJustificatif pour l'appel de la directive mwsf-justificatif
         * @return {any} l'objet donneesJustificatif
         */
        getDonneesJustificatif: () => {
            numerisation: {
                identifiantPersonne: any;
                codeEtablissement: any;
                edsInterneDomiciliation: any;
                codeCapaciteJuridique: any;
            };
            typePersonne: myway.comEditiqueNumerisation.Enums.TypePersonne;
        };
        private _confirmExit;
        personneOriginale: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        estEnregistre: boolean;
    }
}

declare module Erreurs {
    interface IErreursService {
        isSyntheseErreurAffichee: boolean;
        initSyntheseErreurAffichee: () => void;
    }
    /**
     * Service permettant de gérer l'affichage de la synthèse d'erreurs
     */
    class ServiceErreurs implements IErreursService {
        private PortailAgent;
        private Deloc;
        private tierServices;
        initSyntheseErreurAffichee: () => void;
        private _isSyntheseErreurAffichee;
        private _isInitDone;
        static $inject: string[];
        constructor(PortailAgent: MyWay.Services.ServiceAgentExtended, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService);
        isSyntheseErreurAffichee: boolean;
    }
}

declare module FraicheurRubrique {
    interface IFraicheurService {
        initFraicheur: (donneeFraicheur: any) => ng.IPromise<Array<IListeGPIHM>>;
        miseAJourFraicheur: () => void;
        miseAJourFraicheurDirect: () => void;
        getStatutFraicheur: (identifiantPersonne: string, idRubrique: string) => string;
        etatFraicheurPersonne: (identifiantPersonne: number) => string;
        getValeurDonnee: (idPersonne: number, idRubrique: string, idDonnee: string) => string;
        infirmerFraicheur: (identifiantPersonne: string, idRubrique: string) => void;
        infirmerFraicheurDonnee: (identifiantPersonne: string, idRubrique: string, idDonnee: string) => void;
        infirmerFraicheurDonneeToutesPersonnes: (idRubrique: string, idDonnee: string) => void;
        infirmerFraicheurToutesPersonnes: (idRubrique: string) => void;
        confirmerFraicheur: (identifiantPersonne: string, idRubrique: string, modification?: boolean) => void;
        confirmerFraicheurToutesPersonnes: (idRubrique: string, modification?: boolean) => void;
        confirmerFraicheurDonnee: (identifiantPersonne: string, idRubrique: string, idDonnee: string, clef: string) => void;
        confirmerFraicheurDonneeToutesPersonnes: (idRubrique: string, idDonnee: string, clef: string) => void;
        etatFraicheurRubriqueToutesPersonne: (idRubrique: string) => string;
        codeAction: Array<boolean | string>;
        obtenirFraicheur: (idPersonne: string, listeRetour: any, fiabiliserEnDirect?: string) => ng.IPromise<Array<IListeGPIHM>>;
        getDateFraicheur: (idPersonne: number, id: string) => string;
        getDateMAJ: (idPersonne: number, id: string) => string;
        _listeAFiabiliser: Array<any>;
        _listeAFiabiliserEnDirect: Array<any>;
    }
    interface IDX30 {
        COCXBQ: string;
        CTDSPA: string;
        LVDSPA: string;
    }
    class TraiterFraicheur {
        static $inject: string[];
        private donneesFraicheur;
        private _donneeRetravaillee;
        private Tools;
        private PortailAgent;
        private tiersService;
        private _ServiceEtatCivil;
        private $q;
        private urlFraicheurRubrique;
        private _options;
        private identifiantPersonne;
        _listeAFiabiliser: Array<any>;
        _modele: ConnaissanceClient.Modeles.Fraicheur.IRubriques;
        _listeAFiabiliserEnDirect: Array<any>;
        private particulierInformation;
        private ServicesChampsObligatoires;
        private _deloc;
        private _ServiceNavigation;
        exclumineur: boolean;
        constructor(Constantes: Menu.IConstantes, PortailAgent: MyWay.Services.ServiceAgentExtended, urlFraicheurRubrique: string, tierServices: ITierService, Tools: any, $q: ng.IQService, ServiceNavigation: ServiceIhm.IServiceNavigation, Deloc: any, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServiceDonneesDeloc: ServiceIhm.IServiceDonneesDeloc, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
        estValideEnCours: Array<boolean | string>;
        private estGlobalValideEnCours;
        codeAction: Array<boolean | string>;
        initFraicheur(donneeFraicheur: any): ng.IPromise<{}>;
        setPictoNavigation(): void;
        getDateMAJ(idPersonne: number, id: string): string;
        getDateFraicheur(idPersonne: number, id: string): any;
        getStatutFraicheur(idPersonne: number, id: string, personne?: boolean): any;
        getValeurDonnee(idPersonne: number, idRubrique: string, idDonnee: string): any;
        confirmerFraicheur(idPersonne: number, id: string, modification?: boolean): void;
        confirmerFraicheurToutesPersonnes(id: string, modification?: boolean): void;
        confirmerFraicheurDonnee(idPersonne: number, idRubrique: string, idDonnee: string, clef: string): void;
        confirmerFraicheurDonneeToutesPersonnes(idRubrique: string, idDonnee: string, clef: string): void;
        infirmerFraicheur(idPersonne: number, id: string): void;
        infirmerFraicheurDonnee(idPersonne: number, idRubrique: string, idDonnee: string): void;
        infirmerFraicheurDonneeToutesPersonnes(idRubrique: string, idDonnee: string): void;
        infirmerFraicheurToutesPersonnes(id: string): void;
        etatFraicheurRubriqueToutesPersonne(idRubrique: string): string;
        etatFraicheurPersonne(idPersonne: number): string;
        miseAJourFraicheur(): void;
        miseAJourFraicheurDirect(): void;
        obtenirFraicheur(idPersonne: any, listeRetour: any, fiabiliserEnDirect?: any): ng.IPromise<{}>;
    }
}

declare module GestionErreur {
    class GestionEcouteurs {
        static $inject: string[];
        constructor(PortailAgent: MyWay.Services.ServiceAgentExtended);
        setEcouteurs(_tier: any): void;
    }
}

declare module modService {
    class HabilitationsService {
        private PortailAgent;
        private Trace;
        static $inject: string[];
        private listeHabilitations;
        private listeRetourHabilitations;
        constructor(PortailAgent: MyWay.Services.ServiceAgentExtended, Trace: ConnaissanceClient.ITrace);
        getHabilitations(): MyWay.Services.IPromesse<void>;
        getHabilitation(identifiant: string): any;
    }
}

interface IHeritierItem {
    identifiantPersonneHeritier: number;
    designationCourtePersonne: string;
    dateNaissancePersonne: number;
    adresseLigne2: string;
    adresseLigne3: string;
    adresseLigne4: string;
    adresseLigne5: string;
    adresseLigne6: string;
    numeroTelephoneAdresse: any;
    typeLienHeritier: any;
    commentaireHeritier: string;
}
interface IHeritier {
    identifiantPersonne: number;
    identifiantRelationEconomique: number;
    codeRegimeMatrimonial: string;
    heritiers?: Array<IHeritierItem>;
}
interface IHeritiersService {
    getHeritiers: (identifiantRelationEconomique: number) => ng.IPromise<Object>;
    getLibelle: (codeTypeLien: string) => string;
    ajouterHeritier: (identifiantPersonne: number, heritierAAjouter: IHeritierItem) => ng.IPromise<IHeritier[]>;
    supprimerHeritier: (identifiantPersonne: number, identifiantHeritier: number) => ng.IPromise<IHeritier[]>;
    mettreAjourHeritier: (identifiantPersonne: number, heritierAAjouter: IHeritierItem) => ng.IPromise<IHeritier[]>;
    listeHeritiers: Array<IHeritier>;
    erreurGet?: boolean;
}
declare module modServices {
    class Heritier implements IHeritierItem {
        identifiantPersonneHeritier: number;
        designationCourtePersonne: string;
        dateNaissancePersonne: number;
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
        numeroTelephoneAdresse: string;
        typeLienHeritier: string;
        commentaireHeritier: string;
        constructor(data: any);
    }
    class HeritiersService {
        private Constantes;
        private PortailAgent;
        private Deloc;
        private urlHeritiers;
        private $q;
        static $inject: string[];
        listeHeritiers: Array<IHeritier>;
        listeLiens: any;
        identifiantRelationEconomique: number;
        erreurGet: boolean;
        constructor(Constantes: Menu.IConstantes, PortailAgent: MyWay.Services.ServiceAgentExtended, Deloc: ConnaissanceClient.IDeloc, urlHeritiers: string, $q: ng.IQService);
        getLibelle: (codeTypeLien: string) => any;
        getHeritiers(identifiantRelationEconomique: number): ng.IPromise<any>;
        ajouterHeritier(identifiantPersonne: number, heritier: IHeritierItem): ng.IPromise<{}>;
        supprimerHeritier(identifiantPersonne: number, identifiantHeritier: number): ng.IPromise<{}>;
        mettreAjourHeritier(identifiantPersonne: number, heritier: IHeritierItem): ng.IPromise<{}>;
    }
}

declare module modService {
    class PatrimoineFinancierService {
        private $q;
        private portailAgent;
        private tierServices;
        private Deloc;
        private urlPatrimoineFinancier;
        static $inject: string[];
        private scope;
        private donneesPatrimoine;
        private identifiantRelationEconomique;
        private tableauPromesses;
        private indexDomaine;
        private donneesTypologie;
        private donneesTitulaire;
        private promessesFiltreProduit;
        private promessesFiltreDomaine;
        private donneesDelocaliseesProduit;
        private tableauTemporaireProduits;
        private tableauTemporaireDomaine;
        private tableauTemporaireServices;
        private tableauTemporaireTitulaires;
        donneesChargees: boolean;
        private externe;
        private objetTemporairePatrimoine;
        private objetTemporaireProduit;
        private objetTemporaireDomaine;
        private objetTemporaireTitulaire;
        constructor($q: ng.IQService, portailAgent: MyWay.Services.ServiceAgentExtended, tierServices: ITierService, Deloc: ConnaissanceClient.IDeloc, urlPatrimoineFinancier: string);
        postPatrimoine(objet: PatrimoineFinancierModule.IDonneesProduit): MyWay.Services.IPromesse<any>;
        putPatrimoine(objet: PatrimoineFinancierModule.IDonneesProduit): MyWay.Services.IPromesse<any>;
        deletePatrimoine(objet: PatrimoineFinancierModule.IDonneesProduit): MyWay.Services.IPromesse<any>;
        /**
         * Fonction servant à récupérer les données patrimoine et à créer la vue pour ensuite la passer au controleur
         */
        construirePatrimoine($scope: ConnaissanceClient.IDonneesFinancieresScope, donneeActualisee?: any, callback?: any): void;
        private postTraiterDonnees();
        /** Requête GET
         *  Permet de récupérer tous les produits/services pour une entité titulaire donnée
         *  @return promise<donneesPatrimoine>
         */
        private recupererDonneesPatrimoine(donneeActualisee?);
        /**
         * Fonction servant à traiter les données du patrimoine afin de construire la vue de ces données
         * Pour chaque produit/service on appelle la fonction traiterDonneesTypologie
         */
        private nourrirTableaux(donneesPatrimoine);
        /**
         * Cette fonction permet de rechercher les libellés produit/domaine dans les tables délocalisées et de traiter les données
         * afin de nourrir le tableau de la vue
         * @param TypeDeProduit: Interne ou Externe
         * @param externe: false si interne, true si externe
         */
        private traiterDonneesTypologie(donneesPatrimoine, interne, externe);
        /**
         * Cette fonction permet de construire l'ensemble des promesses permettant de récupérer la liste des libellés produits
         */
        private recupererLibellesProduits(donneesPatrimoine, interne, externe);
        /**
         * Cette fonction permet de construire l'ensemble des promesses permettant de récupérer la liste des libellés domaine
         */
        private recupererLibellesDomaines();
        private recupererLibellesRelation();
        /**
         * Permet de calculer les totaux pour les produits, domaines et le patrimoine total du tableau typologie
         *
        **/
        private calculerTotaux();
        private remettreAZeroPatrimoine();
        private setPeriodicite(produit);
        /**
        * Fonction pour construire le tableau de la vue Typologie
        * Voir application guide de style pour plus d'information
        */
        private construireTableauTypologie(donneesTableau);
    }
    class TableauVue {
        donneesTableau: Array<PatrimoineFinancierModule.IDonneesProduit>;
        tableOptions: any;
        constructor(donneesTableau: Array<PatrimoineFinancierModule.IDonneesProduit>, columns: Array<Object>);
    }
}

declare module modServices {
    /**
     * Classe du service gérant les adresses
     * @class AdresseService
     */
    class AdresseService implements DonneesAdministratives.IAdresseService {
        saveAdressePrincipale: any;
        loadAdresses: any;
        getLocaliteNaissance: any;
        saveNpai: any;
        getTypeFamilleUsage: () => string;
        setTypeFamilleUsage: (typeFamilleUsage: string) => void;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes, dqeServices: any, $filter: any, modalService: any, tierServices: ITierService, serviceNpai: DonneesAdministratives.INPAIService, Typologie: any, Deloc: ConnaissanceClient.IDeloc, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees);
    }
}

declare module modServices {
    class ChampsObligatoiresService implements ChampsObligatoires.IChampsObligatoiresService {
        private _typePersonne;
        private _typePersonneBasculee;
        private Constantes;
        private champsEnErreur;
        private _estComplet;
        private _estModifie;
        private _listeChampsObligatoire;
        private _listeBloc;
        private IHMService;
        private _codeGuichetRisque;
        static $inject: string[];
        /**
         * Constructeur du service
         */
        constructor(Constantes: Menu.IConstantes, IHMService: any);
        codeGuichetRisque: any;
        /**
        * Fonction permettant de renvoyer le type de personne en cours (client, tiers, prospect)
        * @param aucun
        * @return le type personne 0,1 ou 2
        */
        getTypePersonne(): any;
        /**
        * Fonction permettant de mettre le type de personne en cours (client, tiers, prospect)
        * @param aucun
        * @return le type personne 0,1 ou 2
        */
        setTypePersonne(typePersonne: number): void;
        /**
        * Fonction permettant de renvoyer le type de personne avant bascule (client, tiers, prospect)
        * @param aucun
        * @return le type personne 0,1 ou 2
        */
        getTypePersonneBasculee(): any;
        /**
        * Fonction permettant de mettre le type de personne avant bascule (client, tiers, prospect)
        * @param aucun
        * @return le type personne 0,1 ou 2
        */
        setTypePersonneBasculee(typePersonneBasculee: number): void;
        /**
         * Fonction permettant d'ajouter un champs obligatoire
         */
        addChampsObligatoire(codeTypeBloc: string, champs: string): any;
        /**
         * Fonction permettant de supprimer un champs obligatoire
         */
        deleteChampsObligatoire(codeTypeBloc: string, champs: string): any;
        /**
        * Fonction permettant de renvoyer si le champ est obligatoire et s'il est bien saisi
        * @param listeChampsObligatoires: any[], codeTypeBloc {any} le bloc en cours de traitement,  typeDonnee: any le nom du champ
        * @return {any[]} La liste des champs obligatoire
        */
        verifierChampsObligatoires(dao: any): ChampsObligatoires.IRetourVerification;
        /**
            * Fonction permettant de renvoyer la liste des champs obligatoires
            * @param codeTypeBloc {any} le bloc en cours de traitement, typePersonne {any} le type de client (tiers, prospect, client)
            * @return {any[]} La liste des champs obligatoire
            */
        loadChampsObligatoires(codeTypeBloc: any, typePersonne: any): any;
        /**
        * Fonction permettant de renvoyer si le bloc est visible en fonction du profil
        * @param codeTypeBloc {any} le bloc en cours de traitement,  typeDonnee: any le nom du champ
        * @return {any[]} La liste des champs obligatoire
        */
        blocVisible(codeTypeBloc: string, typePersonne: any): any;
    }
}

declare module modServices {
    /**
     * Interface du service Client
     * @Interface IClientService
     */
    interface IClientService {
    }
    class Tier implements ConnaissanceClient.Modeles.Tiers.IObjetPrincipal {
        adresseEmployeur: ConnaissanceClient.Modeles.Tiers.IAdresseEmployeur;
        chargeImposition: ConnaissanceClient.Modeles.Tiers.IChargeImposition;
        etablissement: any;
        identification: ConnaissanceClient.Modeles.Tiers.IIdentification;
        informationProfessionnelle: any;
        listeAdresse: ConnaissanceClient.Modeles.Tiers.IAdresse[];
        listeBlocNotes: ConnaissanceClient.Modeles.Tiers.IBlocNote[];
        listeCharge: any[];
        listeFraicheurRubrique: ConnaissanceClient.Modeles.Tiers.IFraicheurRubrique[];
        listeMedia: any[];
        listeParticulierProjet: any[];
        listeParticulierSensibilite: any[];
        listePatrimoineFinancier: any[];
        listePatrimoineImmobilier: ConnaissanceClient.Modeles.Tiers.IPatrimoineImmobilier[];
        listeRevenu: any[];
        listeTiersLies: ConnaissanceClient.Modeles.Tiers.ITiersLies[];
        listeTiersLiesAdministratifs: ConnaissanceClient.Modeles.Tiers.ITiersLiesAdministratif[];
        listeTypeRelationEconomique: any[][];
        particulierInformation: ConnaissanceClient.Modeles.Tiers.IParticulierInformation;
        particulierNotation: ConnaissanceClient.Modeles.Tiers.IParticulierNotation;
        status: any;
        succession: ConnaissanceClient.Modeles.Tiers.ISuccession;
        manifestationPersonne: ConnaissanceClient.Modeles.Tiers.IManifestationPersonne;
    }
    /**
     * Classe du service gérant un client
     * @class ClientService
     */
    class ClientService implements IClientService {
    }
}



declare module modServices {
    /**
     * Classe du service gérant les revenus et les charges
     * @class DonneesFinancieresService
     */
    class DonneesFinancieresService implements DonneesAdministratives.IDonneesFinancieresService {
        savePatrimoineImmobilier: any;
        loadPatrimoineFinancier: any;
        savePatrimoineFinancier: any;
        loadPatrimoineImmobilier: any;
        rechargerChargeC2: any;
        getHabitation: any;
        setHabitation: any;
        private _chargesCtrl;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes, tierServices: ITierService, PortailAgent: any, urlCharges: any, $rootScope: any, ServiceCharges: ServiceIhm.IServiceCharges);
        chargeCtrl: any;
    }
}

declare module modServices {
    interface IDonneesGestionService {
        verifierIndicDecesPresume: (conncli: any, indicDecesPresume: any) => void;
        verifierDateDecesPresume: (conncli: any, dateDecesPresume: any) => void;
        loadBureauRattachement: (conncli: any) => string;
    }
    /**
        * Classe du service de l'état civil
        * @class EtatCivilService
        */
    class DonneesGestionService implements IDonneesGestionService {
        verifierIndicDecesPresume: any;
        verifierDateDecesPresume: any;
        loadBureauRattachement: any;
        static $inject: string[];
        /**
            * Constructeur du service
            * @Param Constantes {Menu.IConstantes} Constantes
            */
        constructor($rootScope: ng.IScope, PortailAgent: any, urlCaracteristiqueAgence: any);
    }
}

declare module modServices {
    /**
     * Classe du service gérant les données professionnelles
     * @class DonneesProfessionnellesService
     */
    class DonneesProfessionnellesService implements DonneesAdministratives.IDonneesProfessionnellesService {
        filtrerTypesContrats: any;
        estVisibleDateFinContrat: any;
        formateDate: any;
        formaterCodeSIRET: any;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc);
    }
}


declare module modServices {
    /**
     * Classe du service de l'état civil
     * @class EtatCivilService
     */
    class EtatCivilService implements DonneesAdministratives.IEtatCivilService {
        private ServicesChampsObligatoires;
        loadEtatCivil: any;
        saveEtatCivil: any;
        verifierDateNaissance: any;
        verifierdateEffetSituationFamiliale: any;
        isDateNaissanceValide: any;
        toggleRegimeMatrimonial: any;
        toggleTutelle: any;
        getPopupTutelle: any;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes, $filter: any, Deloc: ConnaissanceClient.IDeloc, PortailAgent: MyWay.Services.ServiceAgentExtended, $rootScope: ng.IScope, modalService: any, Tools: any, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
    }
}

declare module modFramework {
    interface ITypologie {
        getListeTypo: (typo: any) => any;
        getLibelle: (typo: any, clef: string, listeTypo: any) => string;
        getTableLibelle: (liste: Array<IQRObject>, clef: string) => string;
    }
}

declare module modServices {
    /**
     * Service qui renvoie les paramètres d'IHM de la vue particulier
     */
    class IHMService {
        paramIHMPart: any;
        paramIHMBDR: any;
        getParametres: () => any;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes);
    }
}




declare module modService {
    /**
     * Classe du service gérant les media
     * @class MediaService
     */
    class MediaService implements DonneesAdministratives.IMediaService {
        loadMedia: any;
        genererLibelles: any;
        ordonnerParType: any;
        getNumero: any;
        getIndicatif: any;
        listeMediaOriginale: any;
        isOPTIN: any;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes);
    }
}

declare module modServices {
    /**
     * Interface du service des navigation
     * @Interface INavigationService
     */
    interface INavigationService {
        chargerRelationHeritier: () => void;
        verifierCompletude: (controlleur: any) => void;
        verifierTierDecede: (controlleur: any) => void;
        verifierEtatCivilComplet: (controlleur: any) => void;
        verifierCoordonneesComplet: (controlleur: any) => void;
        verifierAdresseComplet: (controlleur: any) => void;
        verifierMediaComplet: (controlleur: any) => void;
        verifierProfessionComplet: (controlleur: any) => void;
        verifierPatrimoineImmobilierComplet: (controlleur: any) => void;
        verifierDonneesInternesComplet: (controlleur: any) => void;
        initWatchEtatCivil: (controlleur: any) => void;
        goToPatrimoineImmobilier: () => void;
        onSelectCodeSituationFamiliale: (codeSituationFamille: string, controlleur: any) => void;
        onSelectCodeRegimeMatrimonial: (codeRegimeMatrimonial: string, controlleur: any) => void;
        onClickMenu: (id1: any, id2?: any) => void;
    }
    /**
     * Classe du service gérant les navigation
     * @class NavigationService
     */
    class NavigationService implements modServices.INavigationService {
        private ServicesChampsObligatoires;
        chargerRelationHeritier: any;
        verifierCompletude: any;
        verifierTierDecede: any;
        verifierEtatCivilComplet: any;
        verifierCoordonneesComplet: any;
        verifierAdresseComplet: any;
        verifierMediaComplet: any;
        verifierProfessionComplet: any;
        verifierPatrimoineImmobilierComplet: any;
        verifierDonneesInternesComplet: any;
        initWatchEtatCivil: any;
        goToPatrimoineImmobilier: any;
        onSelectCodeSituationFamiliale: any;
        onSelectCodeRegimeMatrimonial: any;
        listeElementsCompletes: any;
        setErreurAdresse: (estErreur: boolean) => void;
        private _Constantes;
        static $inject: string[];
        /**
         * Constructeur du service
         * @param Constantes {Menu.IConstantes} Constantes
         * @param ParamConnaissanceClient {any} Paramètres du menu
         * @param NavigationService {MyWay.UI.NavigationService} Service de navigation de base
         * @param $filter {ng.IFilterService} Fonctions de filtre
         */
        constructor(Constantes: Menu.IConstantes, ParamConnaissanceClient: any, NavigationBddService: MyWay.UI.NavigationBddService, $filter: ng.IFilterService, etatCivilService: DonneesAdministratives.IEtatCivilService, PortailAgent: MyWay.Services.ServiceAgentExtended, $rootScope: ng.IScope, tierServices: ITierService, adresseService: DonneesAdministratives.IAdresseService, donneesFinancieresService: DonneesAdministratives.IDonneesFinancieresService, ServiceNavigation: ServiceIhm.IServiceNavigation, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
        onClickMenu(id1: any, id2: any): void;
    }
}


interface IProService {
    rechercherSirenAsync: (codeSiren: string) => ng.IPromise<Object>;
    rechercherRaisonSocialeAsync: (raisonSociale: string) => ng.IPromise<Object>;
}

declare module modServices {
    /**
     * Interface du service des données financières
     * @Interface IProjetsSensibiliteService
     */
    interface IProjetsSensibiliteService {
        saveListeSensibilites: (conncli: any) => void;
    }
    /**
     * Classe du service gérant les données financières
     * @class ProjetsSensibiliteService
     */
    class ProjetsSensibiliteService implements modServices.IProjetsSensibiliteService {
        saveListeSensibilites: any;
        static $inject: string[];
        /**
         * Constructeur du service
         * @Param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes);
    }
}

declare module RelationService {
    class TierLie implements Tier.ITierLie {
        codeEtablissement: any;
        identifiantPersonne: any;
        codeTypeLienInterPersonne: any;
        codeSensLienInterPersonne: any;
        identifiantPersonneLie: any;
        refPieceJustificatifLien: any;
        personneRattacheeRelation: any;
        pourcentageCapitalistique: any;
        codeQualificationLienInterPersonne: any;
        dateDebutEffetLienInterPersonne: any;
        dateFinEffetLienInterPersonne: any;
        Categorie: any;
        constructor(identifiantPersonne: number, codeTypeLienInterPersonne: string, codeSensLienInterPersonne: string, identifiantPersonneLie: number, dateDebutEffetLienInterPersonne: string, dateFinEffetLienInterPersonne: string, pourcentageCapitalistique: number, codeQualificationLienInterPersonne: string);
    }
    class PersonneRelation implements Tier.IRelationItem {
        identifiantPersonne: any;
        identifiantRelationEconomique: any;
        codeTypeLienInterPersonne: any;
        indicateurForcageGerePar: any;
        codePersonnaliteJuridique: any;
        codeOrigineEvenement: string;
        codeQualitePersonneRelation: any;
        constructor(identifiantPersonne: number, identifiantRelationEconomique: number, codeQualitePersonneRelation: string);
    }
}




declare module ConnaissanceClient {
    /**
     * Classe du controleur BlocNotesControlleur
     * @class BlocNotesControlleur
     */
    class BlocNotesControlleur {
        private _blocNotesControlleur;
        private _IHMService;
        private _ServiceBlocNotes;
        private _listeBlocNotes;
        paramIHM: any;
        static $inject: string[];
        /**
         * Constructeur du controleur BlocNotesControlleur
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServiceDonneesProfesionnelles {ServiceIhm.IServiceProjetsSensibilites}
         * @param projetsSensibiliteService {modServices.IProjetsSensibiliteService}
         */
        constructor($scope: any, IHMService: any, ServiceBlocNotes: ServiceIhm.IServiceBlocNotes, Constantes: Menu.IConstantes, ServiceNavigation: ServiceIhm.IServiceNavigation);
        listeBlocNotes: Modeles.Tiers.IBlocNote[];
    }
}

declare module ConnaissanceClient {
    class ChargesControlleur {
        private IHMService;
        private tierServices;
        private navigationTotemService;
        private _ServiceCharges;
        private _estModifie;
        private _ServiceNavigation;
        creation: boolean;
        paramIHM: any;
        estInfirmee: boolean;
        estConfirmee: boolean;
        chargeImposition: any;
        C: Menu.IConstantes;
        estPatrimoineFinancier: (charge: ServiceDaoIhm.DaoCharge) => boolean;
        static $inject: string[];
        constructor($scope: any, ServiceCharges: ServiceIhm.IServiceCharges, IHMService: any, tierServices: ITierService, navigationTotemService: any, Constantes: Menu.IConstantes, ServiceNavigation: ServiceIhm.IServiceNavigation);
        listeChargesIhm: ServiceDaoIhm.DaoCharge[];
    }
}

declare module ConnaissanceClient {
    class CoordonneesControlleur {
        private IHMService;
        private _tierServices;
        paramIHM: any;
        C: Menu.IConstantes;
        listeTelephoneFixe: ServiceDaoIhm.DaoMedia[];
        listeTelephoneMobile: ServiceDaoIhm.DaoMedia[];
        listeEMail: ServiceDaoIhm.DaoMedia[];
        mobileOptIn: string;
        mailOptIn: string;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        setMobileOptIn: () => void;
        setMailOptIn: () => void;
        listeAdresse: ServiceDaoIhm.DaoAdresse[];
        listeAdresseIHM: any;
        listeAdressePrincipale: any;
        listeRetourDistribution: any;
        afficherPND: () => boolean;
        listePatrimoineImmobilier: ServiceDaoIhm.DaoListePatrimoineImmobilier[];
        private creation;
        private serviceCoordonnees;
        propager: any;
        private _serviceRelation;
        estInfirmee: boolean;
        estConfirmee: boolean;
        setModifie: (indicateurOppositionTelephone, oppositionTelephone) => void;
        setModifieIndicateurOpposition: (indicateurOppositionTelephone, oppositionTelephone) => void;
        donneesJustificatif: any;
        fonctionBefore: (titre: string) => ng.IPromise<Object>;
        private _$q;
        private _ServiceNavigation;
        private _ServiceErreurs;
        static $inject: string[];
        constructor($scope: any, $rootScope: any, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees, IHMService: any, tierServices: ITierService, Constantes: Menu.IConstantes, adresseService: DonneesAdministratives.IAdresseService, $filter: any, ServiceNavigation: ServiceIhm.IServiceNavigation, drcService: modService.IDrcService, ServiceErreurs: Erreurs.IErreursService, modalService: any, ServiceRelation: ServiceIhm.IServiceRelation, ServicePiedPage: ServiceIhm.IServicePiedPage, $q: ng.IQService);
        setListeChampsObligatoires(): void;
        setChampsObligatoiresIHM(listeChamps: any): void;
        newListeChampsObligatoireIHM: any;
        estComplet: any;
        getListeChampsErreur(): any;
        afficherSyntheseErreurs: boolean;
        listeTypeRelationEconomique: any;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur DonneesGestionControlleur
     * @class DonneesGestionControlleur
     */
    class DonneesGestionControlleur {
        private restitueSuiviCommercialService;
        private modalService;
        private IHMService;
        private _ServiceDonneesGestion;
        private _tierServices;
        private _ServicesChampsObligatoires;
        private _ServiceNavigation;
        private _ServiceErreurs;
        private _listeChampsErreur;
        private _statutProOriginal;
        private _ModalService;
        paramIHM: any;
        C: Menu.IConstantes;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        identification: ServiceDaoIhm.DaoIdentification;
        manifestationPersonne: ServiceDaoIhm.DaoManifestationPersonne;
        afficherSuivi: () => boolean;
        estInfirmee: boolean;
        estConfirmee: boolean;
        _libellePortefeuille: string;
        _identifiantPersonne: any;
        _codeEtablissement: any;
        estCreation: boolean;
        estHabiliteDetails: boolean;
        estHabiliteModifier: boolean;
        static $inject: string[];
        /**
         * Constructeur du controleur BlocNotesControlleur
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServiceDonneesProfesionnelles {ServiceIhm.IServiceProjetsSensibilites}
         * @param projetsSensibiliteService {modServices.IProjetsSensibiliteService}
         */
        constructor(Constantes: Menu.IConstantes, $scope: any, IHMService: any, ServiceDonneesGestion: ServiceIhm.IServiceDonneesGestion, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, tierServices: ITierService, ServiceNavigation: ServiceIhm.IServiceNavigation, restitueSuiviCommercialService: myway.comGestCommerciale.RestitueSuiviCommercialService, PortailAgent: any, urlCaracteristiqueAgence: any, ServiceErreurs: Erreurs.IErreursService, modalService: MyWay.UI.ModalService, habilitationsService: any);
        initPortefeuille(): void;
        creation: boolean;
        portefeuilleTMP: string;
        portefeuille: any;
        agenceDestinataire: number;
        agence: any;
        setChampsObligatoiresIHM(listeChamps: any): void;
        newListeChampsObligatoireIHM: boolean;
        getListeChampsErreur(): any[];
        afficherSyntheseErreurs: boolean;
        codeMarche: Tier.ICodeMarche;
        SetStatutProModifie(statut: any): void;
        SetGestionPriveeModifie(): void;
        popupManifestation: (modele: any) => void;
        modifierManifestation(): void;
        voirManifestation(): void;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur DonneesProfessionnellesControlleur
     * @class DonneesProfessionnellesControlleur
     */
    class DonneesProfessionnellesControlleur {
        private _donneesProfessionnellesCtrl;
        private IHMService;
        private ServiceDonneesProfesionnelles;
        private _donneesProfessionnellesService;
        private tierServices;
        private ServicesChampsObligatoires;
        private _ServiceNavigation;
        private _ServiceErreurs;
        private _$q;
        paramIHM: any;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        adresseEmployeur: ServiceDaoIhm.DaoAdresseEmployeur;
        C: Menu.IConstantes;
        navigationBDR: () => void;
        estInfirmee: boolean;
        estConfirmee: boolean;
        __tier: any;
        donneesJustificatif: any;
        fonctionBefore: (titre: string) => ng.IPromise<Object>;
        static $inject: string[];
        /**
         * Constructeur du controleur ServiceDonneesProfesionnelles
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServiceDonneesProfesionnelles {ServiceIhm.IServiceDonneesProfessionnelles}
         * @param donneesProfessionnellesService {DonneesAdministratives.IDonneesProfessionnellesService}
         */
        constructor($scope: any, IHMService: any, ServiceDonneesProfesionnelles: ServiceIhm.IServiceDonneesProfessionnelles, donneesProfessionnellesService: DonneesAdministratives.IDonneesProfessionnellesService, tierServices: ITierService, Constantes: Menu.IConstantes, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceNavigation: ServiceIhm.IServiceNavigation, PortailAgent: MyWay.Services.ServiceAgentExtended, drcService: modService.IDrcService, ServiceErreurs: Erreurs.IErreursService, ServicePiedPage: ServiceIhm.IServicePiedPage, $q: ng.IQService);
        isCreation: () => boolean;
        isSecteurEmploiValide(selectedItem: any): void;
        estVisibleDateFinContrat(): boolean;
        onClickMenu(id1: any, id2: any): void;
        codeTypeContratTravail: any;
        appartenanceReseau: boolean;
        setChampsObligatoiresIHM(listeChamps: any): void;
        newListeChampsObligatoireIHM: boolean;
        indicateurArtisan: boolean;
        _listeChamps: any[];
        estComplet: boolean;
        getListeChampsErreur(): any[];
        afficherSyntheseErreurs: boolean;
        afficherNavigationBDR: boolean;
    }
}

declare module ConnaissanceClient {
    class EtatCivilControlleur {
        C: Menu.IConstantes;
        paramIHM: any;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        listeTiersLiesAdministratifs: any;
        listeTypeRelationEconomique: any;
        listeDesignation: any;
        estDejaDansLesLiens: boolean;
        creation: boolean;
        loading: boolean;
        DQE_Echec: boolean;
        DQE_errorMessage: string;
        btnDropdownPosition: number;
        btnDropdownVisible: boolean;
        naissanceErreurFlag: boolean;
        infobulle: any;
        donneesJustificatif: any;
        fonctionBefore: (titre: string) => ng.IPromise<Object>;
        dateDecesErreur: boolean;
        private _$q;
        private estConfirmee;
        private estInfirmee;
        private _localiteNaissance;
        private _dqeServices;
        private _$timeout;
        private _response;
        private _ServiceNavigation;
        private _serviceDonneesGestion;
        private IHMService;
        private tierServices;
        private etatCivilService;
        private navigationTotemService;
        private ServiceEtatCivil;
        private modalService;
        private ServiceTiersLies;
        private FraicheurRubrique;
        private _ServiceErreurs;
        static $inject: string[];
        constructor($scope: any, Constantes: Menu.IConstantes, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, IHMService: any, tierServices: ITierService, etatCivilService: any, navigationTotemService: modServices.INavigationService, ServiceTiersLies: ServiceIhm.ServiceTiersLiesIHM, modalService: any, $timeout: ng.ITimeoutService, FraicheurRubrique: FraicheurRubrique.IFraicheurService, dqeServices: any, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceDonneesGestion: ServiceIhm.IServiceDonneesGestion, drcService: modService.IDrcService, ServiceErreurs: Erreurs.IErreursService, ServicePiedPage: ServiceIhm.IServicePiedPage, $q: ng.IQService);
        checkCapacite(): void;
        getLocaliteNaissance(key: any): any;
        getVilleFromInsee(): void;
        sortirLocaliteNaissance(): void;
        verifierLiens(tableauCodes: any): void;
        listeDesignationsTronquee: any;
        getDateNaissanceMessage(): string;
        getDateDecesMessage(): string;
        getDateDecePresumesMessage(): string;
        getDateObtentionPieceJustificativeMessage(): string;
        getDateEffetSituationFamilialeMessage(): string;
        getDateNaturalisationMessage(): string;
        getListeChampsErreur(): any[];
        estValide(): boolean;
        estErreurHabilitation: boolean;
        estComplet: boolean;
        estMajeur(): boolean;
        toggleRegimeMatrimonial(selectedItem: any): void;
        onSelectCodeRegimeMatrimonial(selectedItem: any): void;
        changerListe(selection: any): void;
        localiteNaissance: string;
        codePaysNaissance: string;
        setChampsObligatoiresIHM(listeChamps: any): void;
        newListeChampsObligatoireIHM: boolean;
        _listeChamps: any[];
        afficherSyntheseErreurs: boolean;
    }
}

declare module ConnaissanceClient {
    class HeritiersAyantDroitControlleur {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        listeTypeRelationEconomique: any;
        C: Menu.IConstantes;
        private _ServiceRelation;
        estConfirmee: boolean;
        static $inject: string[];
        constructor($scope: any, ServiceHeritiersAyantDroit: ServiceIhm.IServiceHeritiersAyantDroit, Constantes: Menu.IConstantes, ServiceRelation: ServiceIhm.IServiceRelation);
        relationChargee(): boolean;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur ImpressionFormulaireControlleur
     * @class ImpressionFormulaireControlleur
     */
    class ImpressionFormulaireControlleur {
        private _tierService;
        private _tier;
        private FraicheurRubrique;
        C: Menu.IConstantes;
        selectionnerTout: () => void;
        verifPatFi: (item) => void;
        clickPatFi: () => void;
        isImpressionHide: () => boolean;
        impressionFormulaire: () => void;
        relancerImpression: () => void;
        isImpressionLancee: boolean;
        etatcivil: boolean;
        coordonnees: boolean;
        profession: boolean;
        revenus: boolean;
        charges: boolean;
        vueproduits: boolean;
        vuedetenteur: boolean;
        patimmo: boolean;
        relation: boolean;
        heritiers: boolean;
        succession: boolean;
        patfi: boolean;
        selectionnertout: boolean;
        estToutSelectionner: boolean;
        dateEtatCivil: string;
        dateCoordonnees: string;
        dateProfession: string;
        dateRevenus: string;
        dateCharges: string;
        datePatImmo: string;
        datePatFi: string;
        dateHeritiers: string;
        isDecede: boolean;
        static $inject: string[];
        /**
         * Constructeur du controleur ImpressionFourlaireControlleur
         * @param $scope {ng.IScope}
         * @param printService
         */
        constructor($scope: any, printService: any, Constantes: Menu.IConstantes, tierServices: ITierService, FraicheurRubrique: FraicheurRubrique.IFraicheurService, Tools: any, $timeout: ng.ITimeoutService);
        isCreation: boolean;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur PatrimoineFinancierControlleur
     * @class PatrimoineFinancierControlleur
     */
    class PatrimoineFinancierControlleur {
        private _listePatrimoineFinancier;
        private _patrimoineFinancierControlleur;
        private _IHMService;
        private _ServicePatrimoineFinancier;
        private _tierServices;
        private _ServiceNavigation;
        paramIHM: any;
        estInfirmee: boolean;
        estConfirmee: boolean;
        static $inject: string[];
        /**
         * Constructeur du controleur PatrimoineFinancierControlleur
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServicePatrimoineFinancier {ServiceIhm.IServicePatrimoineFinancier}
         */
        constructor($scope: any, IHMService: any, ServicePatrimoineFinancier: ServiceIhm.IServicePatrimoineFinancier, ServiceNavigation: ServiceIhm.IServiceNavigation);
        listePatrimoineFinancier: Modeles.Tiers.IProduitsFinanciers[];
        listeTypeRelationEconomique: Modeles.Tiers.IRelationEconomique[];
        /**
        * Fonction permettant de formater les Patrimoine Financier récupérés dans REST pour les afficher dans l'IHM
        */
        loadPatrimoineFinancier(): void;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur PatrimoineImmobilierControlleur
     * @class PatrimoineImmobilierControlleur
     */
    class PatrimoineImmobilierControlleur {
        private ServiceRelation;
        private tierServices;
        private _listePatrimoineImmobilier;
        private _patrimoineImmobilierCtrl;
        private _IHMService;
        private _ServicePatrimoineImmobilier;
        private _tierServices;
        private _habitation;
        private _ServiceNavigation;
        private _scope;
        paramIHM: any;
        estInfirmee: boolean;
        estConfirmee: boolean;
        static $inject: string[];
        /**
         * Constructeur du controleur PatrimoineImmobilierControlleur
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServicePatrimoineImmobilier {ServiceIhm.IServicePatrimoineImmobilier}
         */
        constructor($scope: any, IHMService: any, ServicePatrimoineImmobilier: ServiceIhm.IServicePatrimoineImmobilier, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceRelation: ServiceIhm.ServiceRelationIHM, tierServices: ITierService);
        listePatrimoineImmobilier: Modeles.Tiers.IPatrimoineImmobilier[];
        listeTypeRelationEconomique: any;
        relationChargee: boolean;
        isCreation: boolean;
        /**
        * Fonction permettant de formater les Patrimoine Immobilier récupérés dans REST pour les afficher dans l'IHM
        */
        loadPatrimoineImmobilier(): void;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur ProjetsSensibilitesControlleur
     * @class ProjetSensibilitesControlleur
     */
    class ProjetsSensibilitesControlleur {
        private _projetsSensibilitesControlleur;
        private _IHMService;
        private _ServiceProjetsSensibilites;
        private _projetsSensibiliteService;
        private _listeParticulierProjet;
        private _listeParticulierSensibilite;
        private estConfirmee;
        private estInfirmee;
        private _ServiceNavigation;
        paramIHM: any;
        static $inject: string[];
        /**
         * Constructeur du controleur ProjetsSensibilitesControlleur
         * @param $scope {ng.IScope}
         * @param IHMService {IIHMService}
         * @param ServiceDonneesProfesionnelles {ServiceIhm.IServiceProjetsSensibilites}
         * @param projetsSensibiliteService {modServices.IProjetsSensibiliteService}
         */
        constructor($scope: any, IHMService: any, ServiceProjetsSensibilites: ServiceIhm.IServiceProjetsSensibilites, projetsSensibiliteService: modServices.IProjetsSensibiliteService, ServiceNavigation: ServiceIhm.IServiceNavigation);
        listeParticulierProjet: Modeles.Tiers.IProjet[];
        listeParticulierSensibilite: Modeles.Tiers.ISensibilite[];
    }
}

declare module ConnaissanceClient {
    class RelationControlleur {
        private compteur;
        C: Menu.IConstantes;
        private IHMService;
        private tierServices;
        private navigationTotemService;
        private ServiceEtatCivil;
        private modalService;
        private ServiceTiersLies;
        private ServiceRelation;
        paramIHM: any;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        static $inject: string[];
        constructor($scope: any, $rootScope: any, Deloc: any, Constantes: Menu.IConstantes, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, IHMService: any, tierServices: ITierService, navigationTotemService: modServices.INavigationService, ServiceTiersLies: ServiceIhm.ServiceTiersLiesIHM, ServiceRelation: ServiceIhm.ServiceRelationIHM, modalService: any);
        listeTypeRelationEconomique: any;
        listeTiersLiesAdministratifs: any;
    }
}

declare module ConnaissanceClient {
    class RevenusControlleur {
        creation: boolean;
        private IHMService;
        private tierServices;
        private navigationTotemService;
        private _rootscope;
        private _ServiceRevenus;
        private _listeTypeRelationEconomique;
        private _estModifie;
        private _scope;
        paramIHM: any;
        listeRevenus: ServiceDaoIhm.DaoRevenu[];
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        ServiceRelation: ServiceIhm.ServiceRelationIHM;
        C: Menu.IConstantes;
        estInfirmee: boolean;
        estConfirmee: boolean;
        domiciliationModifiee: () => void;
        sauverDomiciliationRevenu: (personne) => void;
        estPersonneCourante: (idPersonneRelation: number, idPersonneCourante: number) => boolean;
        listePersonneCourante: boolean[];
        static $inject: string[];
        constructor($scope: any, ServiceRevenus: ServiceIhm.IServiceRevenus, IHMService: any, tierServices: ITierService, navigationTotemService: any, Constantes: Menu.IConstantes, ServiceRelation: ServiceIhm.ServiceRelationIHM, $rootScope: ConnaissanceClient.IDonnesFinancieresRootScope, $timeout: any, ServiceNavigation: ServiceIhm.IServiceNavigation, PortailAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * generation de la liste des revenus pour chaque personne de la relation
         */
        genererListeRevenus(): void;
        getListeTypeRelationEconomique(): any;
        totalRevenu: number;
        fermetureAuto: boolean;
    }
}

declare module ConnaissanceClient {
    class SuccessionControlleur {
        private _ServiceSuccession;
        listeSuccession: ServiceDaoIhm.DaoSuccession;
        TauxRecyclage: any;
        donneesOperationSuccession: any;
        retourOK: boolean;
        paramIhm: any;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        private _ServiceNavigation;
        static $inject: string[];
        constructor($scope: any, ServiceSuccession: ServiceIhm.IServiceSuccession, $timeout: ng.ITimeoutService, IHMService: any, ServiceNavigation: ServiceIhm.IServiceNavigation);
        getDateFinMessage(): string;
    }
}

declare module ConnaissanceClient {
    class SyntheseRevenusChargesControlleur {
        C: Menu.IConstantes;
        listeCharges: ServiceDaoIhm.DaoCharge[];
        listeRevenus: ServiceDaoIhm.DaoRevenu[];
        private _tierServices;
        private _ServiceRelation;
        private _ServiceRevenus;
        private _ServiceCharges;
        static $inject: string[];
        constructor($scope: any, Constantes: Menu.IConstantes, ServiceRevenus: ServiceIhm.IServiceRevenus, ServiceCharges: ServiceIhm.IServiceCharges, ServiceRelation: ServiceIhm.IServiceRelation, tierServices: ITierService);
        relationChargee(): boolean;
        totalRevenus: number;
        totalCharges: number;
        creation: boolean;
    }
}

interface IAjoutLienScope extends ConnaissanceClient.IRequiredScope {
    Recherche: any;
    modalDatas: any;
    personneALier: any;
    _familleLien: string;
    _typeLien: string;
    _sensLien: string;
    familleLoading: boolean;
    typeLienLoading: boolean;
    lstFamilleLien: any[];
    lstTypeLien: any[];
    lstTypeLienPourFamille: any[];
    setLstTypeLienPourFamille: (valeur: string) => void;
    gridOptions: any;
    mySelections: any;
    RechercherPersonne: () => void;
    lstPersonne: any[];
    personne: IPersonne;
    IsDonneesSaisiesOk: () => boolean;
    Annuler: () => void;
    Valider: (lien: string, codeSens: string) => void;
    getLibelle: (codetype: string) => string;
}
interface IPersonne {
    Nom: string;
    Prenom: string;
    DateNais: Date;
}

interface IIAPEScope extends ConnaissanceClient.IPopin {
    categories: any[];
    souscategories: any[];
    ape: string;
    sousfamille: string;
    sousfamille_libelle: string;
    refreshAPE: (ape: string) => void;
    globalAPE: any;
}

/**
 * Interface du scope de la popup des relations
 * @Interface IChoixTypeLienScope
 */
interface IChoixTypeLienScope extends ConnaissanceClient.IPopin {
    obj: any;
    enfant: boolean;
    personneCourante: any;
    typeQualite: any[];
    listeQualite: any[];
    typeQualiteLoading: boolean;
    filter: (lien: any) => void;
    paramChoixTypeLien: any;
    modifier: boolean;
    detail: boolean;
    errorMessageDateFin: string;
    refPieceJustificatifLien: string;
    creation: boolean;
    isInterlocuteur: boolean;
}
/**
 * Classe du controlleur de la popup des Liens
 * @class PopupChoixTypeLiensController
 */
declare class PopupChoixTypeLienController extends BasePopupController {
    scope: IChoixTypeLienScope;
    data: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IChoixTypeLienScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres angular
     */
    constructor($scope: IChoixTypeLienScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, tierServices: ITierService, modalService: MyWay.UI.IModalService);
}

/**
 * Interface du scope de la popup des relations
 * @Interface IChoixQualiteRelationScope
 */
interface IChoixQualiteRelationScope extends ConnaissanceClient.IPopin {
    obj: any;
    typeQualite: any[];
    listeQualite: any[];
    typeQualiteLoading: boolean;
    filter: (lien: any) => void;
    param: any;
}
/**
 * Classe du controlleur de la popup des relations
 * @class PopupChoixTypeRelationController
 */
declare class PopupChoixQualiteRelationController extends BasePopupController {
    scope: IChoixQualiteRelationScope;
    data: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IChoixQualiteRelationScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres
     */
    constructor($scope: IChoixQualiteRelationScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, tierServices: ITierService);
}

/**
 * Interface du scope de la popup des relations
 * @Interface IChoixQualiteRelationScope
 */
interface ICNILCtrlScope extends ConnaissanceClient.IPopin {
    modalDatas: any;
}
/**
 * Classe du controlleur de la popup des relations
 * @class PopupChoixTypeRelationController
 */
declare class PopupCNILController extends BasePopupController {
    scope: ICNILCtrlScope;
    data: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IChoixQualiteRelationScope} Scope du constructeur
     * @param data {any} Données affichées dans la poup
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres
     */
    constructor($scope: ICNILCtrlScope, data: any, $modalInstance: any, tierServices: ITierService);
}

/**
 * Interface du scope de la popup des relations
 * @Interface IConflitLeaderScope
 */
interface IConflitLeaderScope extends ConnaissanceClient.IPopin {
    obj: any;
    identifiantPersonne: number;
    devenirLeader: (personne: any) => void;
    chargementEnCours: boolean;
}
/**
 * Classe du controlleur de la popup de changement de leader dans la relation
 * @class PopupConflitLeaderController
 */
declare class PopupConflitLeaderController extends BasePopupController {
    scope: IConflitLeaderScope;
    chargementEnCours: boolean;
    data: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IConflitLeaderScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres angular
     * @param PortailAgent {MyWay.Services.ServiceAgentExtended} Occurrence du service agent
     * @param tierServices {ITierService} Service d'accès au tier
     */
    constructor($scope: IConflitLeaderScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, tierServices: ITierService, $rootScope: any);
}


/**
 * Interface du scope de la popup des charges
 * @Interface IDonneesFinancieresChargesScope
 */
interface IDonneesFinancieresChargesScope extends ConnaissanceClient.IPopinDonneesFinancieres {
    listeCharges: any[];
    familleCharges: string;
    modalDatas: any;
    paramIHM: IParamIHMDonneesFinancieresCharges;
    listeChargesValides: any[];
    url: IChargeUrl;
    tableauUrl: any[];
    listeUrl: any[];
    switchContent: (selectedItem: any, index: number) => void;
    listeAnneeImposition: any[];
    listeTranches: any[];
    listeReductions: any[];
    listeLibellesReduction: any[];
    changerAnnee: (annee: any, charge: any) => void;
    addReduction: (charge: any) => void;
    isReductionsSaisiesOk: (charge: any) => boolean;
    supprimerReduction: (charge: any, reduction: any) => void;
    impotIndex: number;
    tranche: any;
    resetMontantISF: (charge: any) => void;
    modificationImpot: boolean;
    afficherTranches: boolean;
}
/**
 * Interface des pamaètres IHM de la popup des charges
 * @Interface IParamIHMDonneesFinancieresCharges
 */
interface IParamIHMDonneesFinancieresCharges extends ConnaissanceClient.IParamIHM {
    montant: any;
    typeCharge: any;
    fiscalite: any;
    dateDebutValiditeCharge?: any;
    dateFinValiditeCharge?: any;
    anneeReferenceImposition?: any;
    nombrePartsImposition?: any;
    mntRevenuImposable?: any;
    mntImpotRevenu?: any;
    typeTrancheImposition?: any;
    reductionImpot?: any;
    reductionImpotListe?: any;
    indicPaiementISF?: any;
    mntISF?: any;
    montantChargeAnnuel?: any;
    mntTaxeFonciere?: any;
    mntTaxeHabitation?: any;
}
/**
 * Interface de l'objet url permettant de chargé dynamiquement le contenu de la popup en fonction du type de charge sélectionné
 * @Interface IChargeUrl
 */
interface IChargeUrl {
    code: string;
    defaut: string;
    impotRevenuTaxe: string;
    credit: string;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de charges
 * @class PopupDonneesFinancieresChargesController
 */
declare class PopupDonneesFinancieresChargesController extends BasePopupController {
    scope: IDonneesFinancieresChargesScope;
    data: any;
    $timeout: any;
    tools: any;
    private _index;
    /**
     * Constructeur du controlleur
     * @param $scope {IDonneesFinancieresChargesScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     */
    constructor($scope: IDonneesFinancieresChargesScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $rootScope: any, tierServices: ITierService, $q: ng.IQService, modalService: any, ServiceCharges: any, $timeout: any, Tools: any);
}

/**
 * Interface du scope de la popup du patrimoine financier
 * @Interface IDonneesFinancieresPatFinancierScope
 */
interface IDonneesFinancieresPatFinancierScope extends ConnaissanceClient.IPopinDonneesFinancieres {
    listePatrimoineFinancier: any[];
    listeRelation: any[];
    modalDatas: any;
    paramIHM: IParamIHMDonneesFinancieresPatFinancier;
    listeRelationTypo: any[];
}
/**
 * Interface des pamaètres IHM de la popup du patrimoine financier
 * @Interface IParamIHMDonneesFinancieresPatFinancier
 */
interface IParamIHMDonneesFinancieresPatFinancier extends ConnaissanceClient.IParamIHM {
    typeProduitServiceExterne: any;
    montantPeriodique: any;
    periodicite: any;
    dateFin: ConnaissanceClient.ILabelAvecDisplayIHM;
    commentaireProduitServiceExterne: any;
    nombreUnitesProduitServiceExterne: any;
    organismeFinancier?: any;
    detenteurProduitServiceExterne?: any;
    TypeUsageEntiteTitulaire?: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de patrimoine financier
 * @class PopupDonneesFinancieresPatFinancierController
 */
declare class PopupDonneesFinancieresPatFinancierController extends BasePopupController {
    private ServicePatrimoineFinancier;
    scope: IDonneesFinancieresPatFinancierScope;
    data: any;
    $timeout: any;
    tools: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IDonneesFinancieresPatFinancierScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     */
    constructor($scope: IDonneesFinancieresPatFinancierScope, Constantes: Menu.IConstantes, data: any, $filter: ng.IFilterService, CNILServices: ConnaissanceClient.ICNILServices, tierServices: any, ServicePatrimoineFinancier: any, $timeout: any, Tools: any);
}

/**
 * Interface du scope de la popup du patrimoine immobilier
 * @Interface IDonneesFinancieresPatImmobilierScope
 */
interface IDonneesFinancieresPatImmobilierScope extends ConnaissanceClient.IPopinDonneesFinancieres {
    listePatrimoineImmobilier: any[];
    modalDatas: any;
    listeRelation: any;
    lstPersonnesRelation: any;
    paramIHM: IParamIHMDonneesFinancieresPatImmobilier;
    verifierSiDejaResidencePrincipale: () => void;
    masquerResidencePrincipale: boolean;
    onSelect: (localite: any, pi: any) => void;
    getLocalite: (key: string) => any;
    loading: boolean;
    DQE_Echec: boolean;
    listeRelationTypo: any[];
}
/**
 * Interface des pamaètres IHM de la popup du patrimoine immobilier
 * @Interface IParamIHMDonneesFinancieresPatImmobilier
 */
interface IParamIHMDonneesFinancieresPatImmobilier extends ConnaissanceClient.IParamIHM {
    codeTypeUsageBien: any;
    codeTypeHabitation: any;
    codeNatureBien: any;
    codeNatureOccupationHabitat: any;
    dateEntreeLogement: ConnaissanceClient.ILabelAvecDisplayIHM;
    valeurEstimeeBien: ConnaissanceClient.ILabelAvecDisplayIHM;
    coutAcquisition: ConnaissanceClient.ILabelAvecDisplayIHM;
    capitalRestantDuBien: ConnaissanceClient.ILabelAvecDisplayIHM;
    dateMajCapitalRestantDu: ConnaissanceClient.ILabelAvecDisplayIHM;
    codePaysLocalisationBien: ConnaissanceClient.ILabelAvecDisplayIHM;
    commune: ConnaissanceClient.ILabelAvecDisplayIHM;
    detenteurDuBien: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de patrimoine immobilier
 * @class PopupDonneesFinancieresPatImmobilierController
 */
declare class PopupDonneesFinancieresPatImmobilierController extends BasePopupController {
    scope: IDonneesFinancieresPatImmobilierScope;
    data: any;
    $timeout: any;
    tools: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IDonneesFinancieresPatImmobilierScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     */
    static $inject: string[];
    constructor(Constantes: Menu.IConstantes, data: any, dqeServices: any, $rootScope: ng.IScope, tierServices: ITierService, ServicePatrimoineImmobilier: any, $scope: any, $timeout: any, Tools: any);
}

/**
 * Interface du scope de la popup des revenus
 * @Interface IDonneesFinancieresRevenusScope
 */
interface IDonneesFinancieresRevenusScope extends ConnaissanceClient.IPopinDonneesFinancieres {
    listeRevenu: any[];
    modalDatas: any;
    paramIHM: IParamIHMDonneesFinancieresRevenus;
}
/**
 * Interface des pamaètres IHM de la popup des revenus
 * @Interface IParamIHMDonneesFinancieresRevenus
 */
interface IParamIHMDonneesFinancieresRevenus extends ConnaissanceClient.IParamIHM {
    montant: any;
    typeRevenu: any;
    dateDebutValiditeRevenu?: any;
    dateFinValiditeRevenu?: any;
    message_enregistrement_instantane?: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de revenus
 * @class PopupDonneesFinancieresRevenusController
 */
declare class PopupDonneesFinancieresRevenusController extends BasePopupController {
    scope: IDonneesFinancieresRevenusScope;
    data: any;
    $timeout: any;
    tools: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IDonneesFinancieresRevenusScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     */
    constructor($scope: IDonneesFinancieresRevenusScope, Constantes: Menu.IConstantes, $rootScope: any, tierServices: ITierService, ServiceRevenus: any, data: any, $timeout: any, Tools: any);
}

declare module modController {
    class PopupDrcController {
        private $modalInstance;
        private data;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any);
        ok(): void;
    }
}

/**
 * Interface du scope de la popup Fermer
 * @Interface IFermerScope
 */
interface IFermerScope extends ConnaissanceClient.IPopin {
    modalDatas: any;
    param: any;
    valider: () => void;
    nePasEnregistrer: () => void;
}
interface IFermerObj {
}
/**
 * Classe du controlleur de la popup Fermer
 * @class PopupFermerController
 */
declare class PopupFermerController extends BasePopupController {
    scope: IFermerScope;
    data: any;
    /**
     * Constructeur du controleur
     */
    constructor($scope: IFermerScope, data: any, $modalInstance: any, tierServices: ITierService, Constantes: any, PortailAgent: MyWay.Services.ServiceAgent, $rootScope: ng.IScope);
}

/**
 * Interface du scope de la popup des tutelles
 * @Interface IGestionTutellesScope
 */
interface IGestionTutellesScope extends ConnaissanceClient.IPopin {
    paramIHM: IParamIHMGestionTutelles;
}
/**
 * Interface des pamaètres IHM de la popup des tutelles
 * @Interface IParamIHMGestionTutelles
 */
interface IParamIHMGestionTutelles extends ConnaissanceClient.IParamIHM {
    refTribunal: any;
    nomTribunal: any;
    dateJugement: any;
    nomDelegue: any;
    dateModif: any;
    motifModification: any;
    debutMesure: any;
    finMesure: any;
    moisReddition: any;
    dateReceptionMesure: any;
    conditions: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de tutelle
 * @class PopupGestionTutellesController
 */
declare class PopupGestionTutellesController extends BasePopupController {
    scope: IGestionTutellesScope;
    data: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IGestionTutellesScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     */
    constructor($scope: IGestionTutellesScope, Constantes: Menu.IConstantes, data: any, tierServices: ITierService);
}

/**
 * Interface du scope de la popup des héritiers
 * @Interface IHeritierScope
 */
interface IHeritierScope extends ConnaissanceClient.IPopin {
    modalDatas: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de héritiers
 * @class PopupHeritierController
 */
declare class PopupHeritierController extends BasePopupController {
    scope: IHeritierScope;
    data: any;
    modalInstance: ImodalService;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IHeritierScope} Scope du constructeur
     * @param data {any} Données affichées dans la poup
     */
    constructor($scope: IHeritierScope, data: any, CNILServices: ConnaissanceClient.ICNILServices, tierServices: ITierService, ServiceHeritiersAyantDroit: any);
}

/**
 * Interface du scope de la popup des interlocuteurs
 * @Interface IInterlocuteurScope
 */
interface IInterlocuteurScope extends ConnaissanceClient.IPopin {
    obj: any;
    typeQualite: any[];
    listeQualite: any[];
    typeQualiteLoading: boolean;
    filter: (lien: any) => void;
    param: any;
    identifiantPersonneCourante: any;
    identifiantMorale: any;
}
/**
 * Classe du controlleur de la popup des relations
 * @class PopupChoixTypeRelationController
 */
declare class PopupInterlocuteurController extends BasePopupController {
    scope: IInterlocuteurScope;
    data: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IChoixQualiteRelationScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres
     */
    constructor($scope: IChoixQualiteRelationScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, tierServices: ITierService);
}

interface ILocaliteScopePopin extends ConnaissanceClient.IPopin {
    critereRecherche: string;
    mySelections: any[];
    rechercher: (d: any) => void;
    lstLocalite: any[];
    tableauRecherche: any;
    localite: any;
}
declare module TableauRechercheLocalite {
    class TableauRechercheClasse {
        listeLocalites: Array<Object>;
        selectedLines: Array<Object>;
        tableOptions: any;
        constructor(listeLocalites: any[]);
    }
}

interface IManifestationScope extends ConnaissanceClient.IPopin {
    objet: any;
    paramIHM: any;
    ancienneManifestation: any;
    nouvelleManifestation: any;
    messagesErreurs: any;
}
/**
 * Classe du controlleur de la popup manifestation
 * @class PopupManifestationController
 */
declare class PopupManifestationController extends BasePopupController {
    scope: IManifestationScope;
    data: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IManifestationScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres angular
     */
    constructor($scope: IManifestationScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, tierServices: ITierService, CNILServices: CNIL.IObjetServiceCNIL);
}

/**
 * Interface du scope de la popup du SuiviGP
 * @Interface ISuiviGPScope
 */
interface ISuiviGPScope extends ConnaissanceClient.IPopin {
    modalDatas: any;
    suiviGP: ISuiviGP;
    valider: any;
    listeChoixSuiviGP: any;
    transferer: any;
    showChargeAffaire: any;
    habilitationService: any;
    estHabilite: any;
    verifierCommentaire: any;
    errorMessage: string;
    isInvalid: boolean;
}
interface ISuiviGP {
    statutActuel: string;
    statutNouveau: string;
    motivation: string;
    commentaire: string;
    chargeAffaire: string;
    codeActnMajSuivSpclGp: string;
    chargeAffaireTransferer: any;
    listeChargeAffaire: any;
    codeEdsAffecter: any;
    codeEdsTransferer: any;
    idPersonne: any;
    paramIHM?: any;
    affichageChargeAffaire?: any;
}
interface IListeGPIHM {
    Key: string;
    Value: string;
    libelleCourt: string;
    LibelleLong: string;
    aide: string;
}
declare class PopupSuiviGPController extends BasePopupController {
    private _commentaire;
    commentaireGP: string;
    scope: ISuiviGPScope;
    data: any;
    liste: any;
    listeMotivation: any;
    filter: any;
    nouveauStatut: any;
    codeEtatSuiviGP: any;
    statut: any;
    codeActnMajSuivSpclGp: any;
    codeMotivationGP: any;
    objetMotivationGP: any;
    objetSuiviGP: any;
    chargeAffaire: any;
    listeChargeAffaire: any;
    affichageChargeAffaire: any;
    chargeAffaireTransferer: any;
    idPersonne: any;
    habilitationService: any;
    constructor($scope: ISuiviGPScope, data: any, $modalInstance: any, tierServices: ITierService, habilitationServices: any, $filter: any, CNILServices: any);
    traiterNouveauStatut(typeActionSuiviGP: any, codEtatSuiviGP: any): void;
    traiterMotivation(codeMotivationGP: any): void;
    setObjetMotivationGP(codeMotivationGP: any): void;
    getObjetDepuisCodeMotivation(code: string): any;
    getListeMotivation(): any;
    getStatutCibleAffectation(code: string): any;
    getStatutCibleSuppression(code: string): any;
    getStatutCibleInvalidation(code: string): any;
    getStatutCibleReperage(code: string): any;
}

/**
 * Interface du scope de la popup NPAI
 * @Interface INpaiScope
 */
interface INpaiScope extends ConnaissanceClient.IPopin {
    modalDatas: any;
    param: any;
    valider: () => void;
    npaiObj: InpaiObj;
}
interface InpaiObj {
    dateNpaiSelected: any;
    motifNpaiSelected: any;
}
/**
 * Classe du controlleur de la popup NPAI
 * @class PopupNpaiController
 */
declare class PopupNpaiController extends BasePopupController {
    scope: INpaiScope;
    data: any;
    /**
     * Constructeur du controlleur
     */
    constructor($scope: INpaiScope, data: any, $modalInstance: any, Constantes: any, tierServices: ITierService, serviceNpai: DonneesAdministratives.INPAIService, PortailAgent: MyWay.Services.ServiceAgent, $rootScope: ng.IScope);
}

/**
 * Interface du scope de la popup du ppe
 * @Interface IPpeScope
 */
interface IPpeScope extends ConnaissanceClient.IPopin {
    listePays: any;
    obj: any;
    modal: any;
    questions: any;
}
/**
 * Classe du controlleur de la popup de changement de leader dans la relation
 * @class PopupConflitLeaderController
 */
declare class PopupPpeController extends BasePopupController {
    scope: IPpeScope;
    data: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IPpeScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres angular
     * @param PortailAgent {MyWay.Services.ServiceAgentExtended} Occurrence du service agent
     * @param tierServices {ITierService} Service d'accès au tier
     */
    constructor($scope: IPpeScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, tierServices: ITierService, $rootScope: any, modalService: MyWay.UI.ModalService, modalInstance: any, printService: any);
}

/**
 * Interface du scope de la popup des projets
 * @Interface IProjetsScope
 */
interface IProjetsScope extends ConnaissanceClient.IPopinDonneesFinancieres {
    common: any;
    listeProjets: any[];
    lstProjetsAAjouter: Array<Projets.IProjetObj>;
    idProjetSelectionne: number;
    addProjet: () => void;
    supprimerProjet: (id: number) => void;
    mettreAJourIndicateur: (p: Projets.IProjetObj) => void;
    paramIHM: IParamIHMProjets;
    getTypeLibelle: (projet: any) => string;
}
/**
 * Interface des pamaètres IHM de la popup des projets
 * @Interface IParamIHMProjets
 */
interface IParamIHMProjets extends ConnaissanceClient.IParamIHM {
    typeProjet: any;
    dateProjet: ConnaissanceClient.ISimpleLabelIHM;
    commentaire: ConnaissanceClient.ISimpleLabelIHM;
    sensDisplay: string;
    showCheck?: any;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de projets
 * @class PopupProjetsController
 */
declare class PopupProjetsController extends BasePopupController {
    scope: IProjetsScope;
    data: any;
    $timeout: any;
    tools: any;
    static $inject: string[];
    /**
     * Constructeur du controlleur
     * @param $scope {IProjetsScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     */
    constructor($scope: IProjetsScope, Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, $filter: ng.IFilterService, CNILServices: ConnaissanceClient.ICNILServices, Typologie: any, $rootScope: any, tierServices: ITierService, ServiceProjetsSensibilites: any, data: any, $timeout: any, Tools: any);
}

/**
 * Interface du scope de la popup des relations
 * @Interface IConflitLeaderScope
 */
interface IPropagationScope extends ConnaissanceClient.IPopin {
    obj: any;
    relation: any;
    fermer: () => void;
    propager: (personne: any, typePropagation: string) => void;
    identifiantPersonne: number;
    chargementEnCours: boolean;
    tierServices: ITierService;
    personneCourante: number;
    adresseAPropager: any;
    telephoneAPropager: any;
    mailAPropager: any;
}
/**
 * Classe du controlleur de la popup de changement de leader dans la relation
 * @class PopupConflitLeaderController
 */
declare class PopupPropagationCTRL extends BasePopupController {
    scope: IPropagationScope;
    chargementEnCours: boolean;
    tierServices: ITierService;
    data: any;
    private _listeMedia;
    adresseAPropager: any;
    _promesses: any[];
    /**
     * Constructeur du controlleur
     * @param $scope {IConflitLeaderScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres angular
     * @param PortailAgent {MyWay.Services.ServiceAgentExtended} Occurrence du service agent
     * @param tierServices {ITierService} Service d'accès au tier
     */
    constructor($scope: IPropagationScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, tierServices: ITierService, Typologie: any, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees, $q: ng.IQService);
}

/**
 * Interface du scope de la popup des sensibilités
 * @Interface ISensibilitesScope
 */
interface ISensibilitesScope extends ConnaissanceClient.IPopin {
    themesSensibilites: any[];
    toggleSensibilite: (item: any, valeur: string) => void;
}
/**
 * Classe du controlleur de la popup d'ajout/modification de sensibilités
 * @class PopupSensibilitesController
 */
declare class PopupSensibilitesController extends BasePopupController {
    scope: ISensibilitesScope;
    data: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IDonneesFinancieresChargesScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param $timeout {ng.ITimeoutService} Service de gestion des timeout
     */
    constructor($scope: ISensibilitesScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, $timeout: ng.ITimeoutService, $filter: ng.IFilterService, $modalInstance: any, tierServices: ITierService, ServiceProjetsSensibilites: any);
}

interface ISirenDetailsScope extends ConnaissanceClient.IPopin {
    particulierInformation: any;
    adresseEmployeur: any;
    siren: string;
    libelleCategorieJuridique: string;
    employeur: any;
}
declare class PopupSirenDetailsController extends BasePopupController {
    scope: ISirenDetailsScope;
    data: any;
    static $inject: string[];
    constructor($scope: ISirenDetailsScope, Constantes: Menu.IConstantes, proServices: any, Deloc: any, Typologie: any, tierServices: ITierService, data: any);
}

interface ISirenManuelleScope extends ConnaissanceClient.IPopin {
    annuler: () => void;
    tier: any[];
    paramIMH: any[];
    adresseEmployeur: any;
    conncli: any;
    $close: (objet: any) => void;
    boutons: any;
}
declare class PopupSirenManuelleController extends BasePopupController {
    private ServiceCoordonnees;
    scope: ISirenManuelleScope;
    data: any;
    constructor($scope: ISirenManuelleScope, Constantes: Menu.IConstantes, data: any, tierServices: ITierService, Deloc: ConnaissanceClient.IDeloc, Typologie: any, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees);
}

/**
 * Interface du scope de la popup du SIREN
 * @Interface ISirenScope
 */
interface ISirenScope extends ConnaissanceClient.IPopin {
    recherche: IRecherche;
    listeNonFiltree: any[];
    sirenListe: any[];
    nic: string;
    siren: string;
    siret: string;
    pasDeSiren: boolean;
    selected: string;
    departement: string;
    filtreDepartement: boolean;
    raisonSociale: string;
    filtreRaisonSociale: boolean;
    choisirSiren: (ISirenObject) => void;
    filtrerListe: (obj: any) => void;
    rechercherRaisonSociale: (raisonSociale: string, codePostal: string) => void;
    saisieManuelle: () => void;
    tableauRecherche: any;
    $close: (objet: any) => void;
    messageErreur: string;
    loading: boolean;
    premiereRecherche: boolean;
}
/**
 * Interface de l'objet de la recherche
 * @Interface IRecherche
 */
interface IRecherche {
    raisonSociale: string;
    siren: string;
    codePostal: number;
}
declare module TableauRecherche {
    /**
     * Classe du tableau de recherche
     * @class PopupSirenController
     */
    class TableauRechercheClasse {
        listeSiren: Array<any>;
        selectedLines: Array<Object>;
        tableOptions: any;
        constructor(listeSiren: any[]);
    }
}
/**
 * Classe du controlleur de la popup du siren
 * @class PopupSirenController
 */
declare class PopupSirenController extends BasePopupController {
    scope: ISirenScope;
    data: any;
    /**
     * Constructeur du controlleur
     * @param $scope {IChoixTypeRelationScope} Scope du constructeur
     * @param Constantes {Constantes: Menu.IConstantes} Constantes qui sont utilisées dans la popup
     * @param data {any} Données affichées dans la poup
     * @param Deloc {ConnaissanceClient.IDeloc} Service d'accès aux données délocalisées
     * @param proServices {any} Service
     * @param $filter {IFilterService} Service proposant des fonctionnalités de filtres
     * @param Typologie {any} Typologies
     * @param modalService {any} Service pour ouvrir des popins
     * @param donneesProfessionnellesService {DonneesAdministratives.IDonneesProfessionnellesService} Service des données professionnelles
     */
    constructor($scope: ISirenScope, Constantes: Menu.IConstantes, data: any, Deloc: ConnaissanceClient.IDeloc, proServices: any, $filter: ng.IFilterService, Typologie: any, modalService: any, donneesProfessionnellesService: DonneesAdministratives.IDonneesProfessionnellesService, $timeout: ng.ITimeoutService, $location: any, $anchorScroll: any, tierServices: ITierService, $q: ng.IQService);
}

interface ISuccessionScope extends ConnaissanceClient.IPopin {
    listeChoixDestinataire: any;
    operationSuccession: any;
    liste: any;
    listeCaisseBPCE: any;
    paramIHM: any;
    listeProduit: any;
    valider: any;
    choix: any;
}
declare class PopupSuccessionController extends BasePopupController {
    scope: ISuccessionScope;
    listeSuccession: modService.ISuccession;
    listeOperationSuccession: modService.IOperationSuccession;
    Operation: modService.IOperationSuccession;
    constructor($scope: ISuccessionScope, data: any, $modalInstance: any, ServiceSuccession: any, Constantes: Menu.IConstantes, $filter: ng.IFilterService);
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur AdministratifControlleur
     * @class AdministratifControlleur
     */
    class AdministratifControlleur {
        Constantes: Menu.IConstantes;
        private _ServiceEtatCivil;
        private _ServiceNavigation;
        static $inject: string[];
        /**
         * Constructeur du controleur AdministratifControlleur
         * @param $scope {ng.IScope}
         * @param Constantes {Menu.IConstantes}
         */
        constructor($scope: any, Constantes: Menu.IConstantes, $rootScope: any, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServiceErreurs: Erreurs.IErreursService);
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur ComplementaireControlleur
     * @class ComplementaireControlleur
     */
    class ComplementaireControlleur {
        private _tierService;
        private _ServiceNavigation;
        C: Menu.IConstantes;
        static $inject: string[];
        /**
         * Constructeur du controleur ComplementaireControlleur
         * @param $scope {ng.IScope}
         * @param Constantes {Menu.IConstantes}
         */
        constructor($scope: any, Constantes: Menu.IConstantes, tierServices: ITierService, ServiceNavigation: ServiceIhm.IServiceNavigation);
        creation: boolean;
        successionVisible: boolean;
        estClient: boolean;
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur FinancierControlleur
     * @class FinancierControlleur
     */
    class FinancierControlleur {
        Constantes: Menu.IConstantes;
        creation: boolean;
        static $inject: string[];
        /**
         * Constructeur du controleur FinancierControlleur
         * @param $scope {ng.IScope}
         * @param Constantes {Menu.IConstantes}
         */
        constructor($scope: any, Constantes: Menu.IConstantes, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil);
    }
}

declare module ConnaissanceClient {
    /**
     * Classe du controleur InterneControlleur
     * @class InterneControlleur
     */
    class InterneControlleur {
        Constantes: Menu.IConstantes;
        static $inject: string[];
        /**
         * Constructeur du controleur InterneControlleur
         * @param $scope {ng.IScope}
         * @param Constantes {Menu.IConstantes}
         */
        constructor($scope: any, Constantes: Menu.IConstantes, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceErreurs: Erreurs.IErreursService);
    }
}



interface IJQuery {
    datepicker: any;
}

declare module MyWay.Conncli {
    function mwChoixColonnes(): ng.IDirective;
    class ChoixColonnesCtrl {
        id: number;
        listerEnfants: (objet: any, $event: ng.IAngularEvent) => void;
        listeEnfants: any;
        montrerFiltreFamille: ($event: ng.IAngularEvent) => void;
        filtreFamilleVisible: boolean;
        montrerFiltreLien: ($event: ng.IAngularEvent) => void;
        filtreLienVisible: boolean;
        selectionnerLien: (item: any, $event: ng.IAngularEvent) => void;
        filtreFamille: string;
        filtreLien: string;
        selected: any;
        modele: any;
        espace: string;
        liste: any;
        listeDefinie: any;
        static $inject: string[];
        constructor($scope: any, $timeout: any, $rootScope: any, Constantes: any, PortailAgent: any, Contexte: any, Deloc: any, modalService: any, $filter: any);
    }
}

declare module MyWay.CodeMarche {
    interface IKeyValue {
        Key: string;
        Value: string;
    }
    interface IDeloc {
        getListe: (typo: string, errorCallback?: (msg: string) => void) => any;
        getListeParCode: (codePacbase: string) => any;
        getLibelle: (typo: string, valeur: string, errorCallback?: (msg: string) => void) => any;
    }
    interface IIdentificationModele {
        codeEtablissement: string;
        codeGuichetRisque: string;
        codePersonnaliteJuridique: string;
        codeStatut: string;
        codeTypeRelation: string;
        dateEntreeRelation: number;
        identifiantPersonne: number;
        libellePersonnaliteJuridique: string;
        libelleStatut: string;
        libelleTypeRelation: string;
        codeMarche: IModele;
    }
    interface IModele {
        codeTypeSegmentation: string;
        codeSegmenation2DernCar: string;
        libelleLongSegmentation: string;
        libelleCourtSegmentation: string;
        codeSegmentationCalculee: string;
        libelleFamilleMarche: string;
        codeSegmentationConfirmee: string;
        recalculSegmentation: string;
        indicateurForcage: string;
        codeSegmentationForcage: string;
    }
    interface IDU2LDonnees {
        CVDLHI: string;
        CODLTS: string;
        LIDLSG: string;
        CODLST: string;
        LIDLSC: string;
        CIDLRS: string;
    }
    interface IDU2L {
        donnees: Array<IDU2LDonnees>;
    }
    interface ICodeMarcheService {
        setIdentification: (identification: IIdentificationModele) => void;
        recalculAutomatique: (modele: IModele) => ng.IPromise<Object>;
        getCodeMarche: () => IModele;
        setCodeMarche: (modele: IDU2LDonnees, recalcul?: boolean) => void;
        preparerDonneeDelocaliseeFiltrer: (donnee: IDU2L, $q: ng.IQService) => ng.IPromise<Array<any>>;
    }
    class CodeMarcheService implements IModele {
        static $inject: string[];
        codeTypeSegmentation: any;
        codeSegmenation2DernCar: any;
        libelleLongSegmentation: any;
        libelleCourtSegmentation: any;
        codeSegmentationCalculee: any;
        libelleFamilleMarche: any;
        codeSegmentationConfirmee: any;
        recalculSegmentation: any;
        private serviceAgentExtended;
        private tierServices;
        private urlTierIdentification;
        objetIdentification: any;
        indicateurForcage: any;
        codeSegmentationForcage: any;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tierServices: ITierService);
        setIdentification(identification: IIdentificationModele): void;
        getCodeMarche(): {
            codeTypeSegmentation: any;
            libelleLongSegmentation: any;
            codeSegmentationCalculee: any;
            libelleCourtSegmentation: any;
            codeSegmenation2DernCar: any;
            codeSegmentationConfirmee: any;
            recalculSegmentation: any;
            indicateurForcage: any;
            codeSegmentationForcage: any;
        };
        setCodeMarche(modele: IDU2LDonnees, recalcul?: boolean): void;
        getIdentification(): any;
        recalculAutomatique(modele: IModele): any;
        preparerDonneeDelocaliseeFiltrer(liste: IDU2L, $q: any): any;
    }
    class CodeMarcheController {
        private $scope;
        static $inject: string[];
        codeSegmentationCalculee: any;
        codeTypeSegmentation: any;
        liste: any;
        modele: IModele;
        private modeleOriginal;
        estPro: boolean;
        objetIdentification: IIdentificationModele;
        objetCodeMarche: any;
        selectedItem: any;
        callback: any;
        agentConnecte: any;
        tierServices: any;
        private serviceAgentExtended;
        private mwCodeMarcheService;
        private $timeout;
        desactive: boolean;
        habilitationsService: any;
        indicateurForcage: any;
        estActif: any;
        private portailAgent;
        constructor($scope: any, Deloc: IDeloc, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwCodeMarcheService: ICodeMarcheService, $timeout: ng.ITimeoutService, tierServices: ITierService, $rootScope: any, habilitationsService: any, $q: ng.IQService, PortailAgent: MyWay.Services.ServiceAgentExtended);
        getListe(): any;
        setCodeMarche(objet: IDU2LDonnees): void;
        setObjetCodeMarche(modele?: IModele): void;
        changerCodeMarche(item: any): void;
        groupByCategories(item: any): any;
        getObjetDepuisCode(codeSegmentationCalculee: string, codeTypeSegmentation: string): any;
        gestionBoutonCodeMarche(indicateurForcage: any, identifiantPersonne: any): void;
        calculAutomatique(): void;
    }
}

declare module MyWay.UI {
    function mwDateLegereBdd(): ng.IDirective;
}

declare module MyWay.UI {
    interface IScopeNavigationBdd extends ng.IScope {
        navigations: Array<TotemBddComponent>;
        isActive(link: INavigationSecondaireLink): boolean;
        setActive(group: INavigationSecondaireGroup, link: INavigationSecondaireLink): void;
    }
    class NavigationBddCtrl {
        private _NavigationBddService;
        private sideBarPosition;
        constructor($scope: IScopeNavigationBdd, navigationBddService: NavigationBddService, $element: ng.IAugmentedJQuery);
        isActive(component: TotemBddComponent): void;
        isPageActive(page: TotemBddPage): boolean;
    }
    /**
     *   Directive mw-totem-contenu. Cette directive prend en compte le niveau chapitre et sous chapitre dans l'objet passé en paramétre.
     */
    function mwNavigationBdd(): ng.IDirective;
    function mwNavigationBddChapitre(): ng.IDirective;
    class NavigationBddSousChapitreCtrl {
        private _NavigationBddService;
        toggle: boolean;
        constructor(navigationService: NavigationBddService, $element: ng.IAugmentedJQuery);
        onClick(sousChapitre: TotemBddSSChapitre): void;
    }
    function mwNavigationBddSousChapitre(): ng.IDirective;
    class NavigationBddPageCtrl {
        private _NavigationBddService;
        private sideBarPosition;
        constructor(navigationService: NavigationBddService, $element: ng.IAugmentedJQuery);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActivePage(page: TotemBddPage): void;
        isPageActive(page: TotemBddPage): boolean;
    }
    function mwNavigationBddPage(): ng.IDirective;
    class NavigationBddSectionCtrl {
        private $location;
        private $anchorScroll;
        private $timeout;
        private _NavigationBddService;
        private sideBarPosition;
        constructor(navigationService: NavigationBddService, $element: ng.IAugmentedJQuery, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService);
        /**
         * Appeler lorsque l'utilisateur clic sur un lien de la navigation.
         */
        setActiveSection(page: TotemBddPage, section: TotemBddSection): void;
        isSectionActive(section: TotemBddSection): boolean;
    }
    function mwNavigationBddSection(): ng.IDirective;
}

declare module MyWay.StatusPro {
    interface IKeyValue {
        Key: string;
        Value: string;
    }
    interface IDeloc {
        getListe: (typo: string, errorCallback?: (msg: string) => void) => any;
        getListeParCode: (codePacbase: string) => any;
        getLibelle: (typo: string, valeur: string, errorCallback?: (msg: string) => void) => any;
    }
    interface IModele {
        codeEtatStatutPro?: string;
        identifiantPersonne?: number;
        codeEtablissement?: number;
        dateModificationStatutPro?: number;
        dateFinValiditeStatutPro?: number;
        identifiantExterneAgentModification?: number;
        identifiantInterneAgentModification?: number;
        libelleCalculeEDS?: string;
        libelleFonctionPF?: string;
        libelleEDS?: string;
    }
    class StatutProController {
        private $scope;
        static $inject: string[];
        codeEtatStatutPro: any;
        liste: any;
        modele: IModele;
        changerStatutPro: any;
        objetStatutPro: any;
        agentConnecte: any;
        estActif: any;
        habilitationsService: any;
        tierServices: any;
        desactive: boolean;
        Tools: any;
        callback: () => void;
        constructor($scope: any, PortailAgent: MyWay.Services.ServiceAgentExtended, Deloc: IDeloc, habilitationsService: any, tierServices: ITierService, Tools: any);
        getListe(): any;
        setStatutPro(objet: IKeyValue): void;
        setObjetStatutPro(): void;
        changerstatutPro(item: any): void;
        getLibelleDepuisCode(code: string): any;
    }
}

declare module MyWay.SuiviGP {
    interface ISuiviGPScope extends ng.IScope {
        reperer: () => void;
        invalider: () => void;
        affecter: () => void;
        transferer: () => void;
        isEnregistrerOk: () => void;
        modele: IModele;
        idpersonne: any;
    }
    interface ISuiviGPAppScope extends ng.IScope {
        Alert: Function;
        DlgShow: Function;
    }
    interface IPopinTemplatesDatas {
        param: any;
        closeButtonText?: string;
        actionButtonText?: string;
        headerText?: string;
        iconName?: string;
        bodyText?: string;
    }
    interface IPopinModalOptions {
        templateUrl: string;
        controller: any;
        windowClass?: string;
        backdrop: string;
        keyboard: boolean;
        modalFade: boolean;
        size: string;
        resolve: IPopinResolve;
    }
    interface IPopinResolve {
        callback: (obj: any) => void;
        data: (obj: any) => IPopinTemplatesDatas;
    }
    interface IKeyValue {
        Key: string;
        Value: string;
    }
    interface IDeloc {
        getListe: (typo: string, errorCallback?: (msg: string) => void) => any;
        getListeParCode: (codePacbase: string) => any;
        getLibelle: (typo: string, valeur: string, errorCallback?: (msg: string) => void) => any;
        getListeMotivation: (typo: string, errorCallback?: (msg: string) => void) => any;
    }
    interface IListeGP {
        CIDMSM: string;
        CIDMSN: string;
        CIDMSV: string;
        CMDMMO: string;
        CODMCA: string;
        CODMCI: string;
        CODMCR: string;
        CODMCS: string;
        CODMG9: string;
        CODMPF: string;
        GRDMGP: string;
        LIDMEL: string;
        LIDMFS: string;
        LIDMIT: string;
        LIDMSE: string;
        PEDMPE: string;
    }
    interface IListeMotivationGP {
        CBDMMO: string;
        CIDMOM: string;
        CMDMMO: string;
        LIDMCM: string;
        LIDMMO: string;
    }
    interface IListeGPIHM {
        Key: string;
        Value: string;
        libelleCourt: string;
        LibelleLong: string;
        aide: string;
    }
    interface IModele {
        identifiantPersonne?: number;
        codeEtablissement?: string;
        codeEtatSuiviGP?: string;
        identifiantEDS?: number;
        identifiantExterneEDS?: number;
        libelleCalculeEDS?: string;
        typeEDS?: string;
        libelleFonctionPF?: string;
        libelleEDS?: string;
        dateDebutValiditeGP?: number;
        dateFinValiditeGP?: number;
        identifiantEDS2?: number;
        identifiantExterneEDS2?: number;
        libelleCalculeEDS2?: string;
        codeMotivationMarquageGP?: string;
        commentaireMarquageProspect?: string;
        typeActionSuiviGP?: string;
        codeActnMajSuivSpclGp?: string;
        statutActuel?: string;
    }
    interface ISuiviGPService {
        preparerDonneeDelocalisee: (donnee: IListeGP) => Array<IListeGPIHM>;
        preparerDonneeDelocaliseeMotivation: (donnee: IListeMotivationGP, $q: ng.IQService) => ng.IPromise<Array<IListeGPIHM>>;
    }
    class DonneeDelocaliseeGP {
        constructor(donnee: IListeGP);
    }
    class DonneeDelocaliseeMotivationGP {
        constructor(donnee: IListeMotivationGP);
    }
    class SuiviGPService implements IModele {
        contructor(): void;
        preparerDonneeDelocalisee(donnee: any): any[];
        preparerDonneeDelocaliseeMotivation(donnee: any, $q: any): any;
    }
    class SuiviGPController {
        private $scope;
        static $inject: string[];
        codeEtatSuiviGP: any;
        habilitationServices: any;
        liste: any;
        modele: IModele;
        objetStatutGP: any;
        objetSuiviGP: any;
        agentConnecte: any;
        estActif: any;
        desactive: boolean;
        paramIHM: any;
        modalService: any;
        codeMotivationMarquageGP: any;
        listeMotivation: any;
        objetMotivationGP: any;
        commentaireGP: any;
        dateDebutValiditeGP: any;
        identifiantEDS2: any;
        estAffecte: any;
        statutGP: IListeGPIHM;
        libelleChargeAffaire: any;
        listeChargesAffaires: any;
        estEnregistrerOk: any;
        codeActionMajGP: any;
        identifiantPersonne: any;
        idPersonne: any;
        portailAgent: any;
        private _timeout;
        Tools: any;
        callback: () => void;
        constructor($scope: MyWay.SuiviGP.ISuiviGPScope, PortailAgent: MyWay.Services.ServiceAgentExtended, Deloc: IDeloc, mwSuiviGPService: ISuiviGPService, modalService: any, $rootScope: any, $q: ng.IQService, urlAgents: any, tierServices: ITierService, $timeout: ng.ITimeoutService, Tools: any, habilitationsService: any);
        getListe(): any;
        getListeMotivation(): any;
        setSuiviGP(objet: IKeyValue): void;
        setObjetSuiviGP(codeStatut: any, codeActnMajSuivSpclGp?: any): void;
        gestionBouton(): void;
        gestionBoutonSuiviGP(codeActionMajGP: any, identifiantPersonne: any): void;
        setObjetMotivationGP(): void;
        changerSuiviGP(item: any): void;
        getLibelleDepuisCode(code: string): any;
        getObjetDepuisCode(code: string): any;
        getLibelleDepuisCodeMotivation(code: string): any;
        getObjetDepuisCodeMotivation(code: string): any;
        estHabilite: {
            "SHDQG0": any;
            "SHDQG1": any;
            "SHDQG2": any;
            "SHDQG3": any;
            "SHDQG4": any;
        };
    }
}

declare module MyWay.UI {
    interface IMwPanelBddControllerScope extends ng.IScope {
        niveau: string;
        titre: string;
        _titre: string;
        icone: string;
        inconeClass: string;
        id: string;
    }
    class MwPanelBddController {
        private $scope;
        private navigationBddService;
        _navigationService: MyWay.UI.INavigationBddService;
        _titre: string;
        _niveau: string;
        _id: string;
        static $inject: string[];
        constructor($scope: IMwPanelBddControllerScope, navigationBddService: MyWay.UI.INavigationBddService);
        isPanelActif(): boolean;
    }
}

declare module MyWay.UI {
    function mwPanelBdd(): ng.IDirective;
    function mwPanelBddSticky($window: any, NavigationBddService: MyWay.UI.NavigationBddService): ng.IDirective;
}

declare module MyWay.ConnaissanceClient.RecherchePersonne {
    interface IRecherchePersonne extends ng.IScope {
        modalDatas: any;
        result: any;
        personne: MyWay.Model.Client;
        clientListe: Array<MyWay.Model.Client>;
        selectedClient: Array<MyWay.Model.Client>;
        ok: () => Array<MyWay.Model.Client>;
        close: () => void;
    }
}


declare module Connaissanceclient.FiabilisationDonnee {
    interface IFiabilisationDonneeScope extends ng.IScope {
        dateFraicheur: string;
        boutonVisible: boolean;
        estValideEnCours: () => boolean | string;
        mettreAJourFraicheur: () => void;
        confirmerFraicheur: (modifier?: boolean) => void;
        infirmerFraicheur: () => void;
        fraicheurEstVisible: () => boolean;
        fraicheurClasse: () => string;
        fraicheurTexte: () => string;
        fraicheurIcone: () => string;
    }
    class FiabilisationDonneeController {
        private $scope;
        static $inject: string[];
        creation: boolean;
        codeRubrique: string;
        codeDonnee: string;
        liste: Array<Object>;
        identifiantPersonne: number;
        _clef: string;
        private FraicheurRubrique;
        private idFraicheurRubrique;
        private idFraicheurDonnee;
        C: Menu.IConstantes;
        private tierServices;
        private ServiceEtatCivil;
        private ServicesChampsObligatoires;
        private _ServicePatrimoineImmobilier;
        private _ServiceCoordonnees;
        private _ServiceNavigation;
        private _ServiceDonneesDeloc;
        constructor($scope: IFiabilisationDonneeScope, tierServices: ITierService, Constantes: Menu.IConstantes, FraicheurRubrique: FraicheurRubrique.IFraicheurService, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServicePatrimoineImmobilier: ServiceIhm.ServicePatrimoineImmobilierIHM, ServiceCoordonnees: ServiceIhm.ServiceCoordonneesIHM, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceDonneesDeloc: ServiceIhm.IServiceDonneesDeloc, $rootScope: any);
        listeLibelles: {
            "D01": string;
            "D03": string;
            "D02": string;
            "D04": string;
            "D05": string;
            "D06": string;
        };
        estVisible: boolean;
        libelle: any;
        clef: string;
    }
}

declare module Connaissanceclient.FiabilisationPersonne {
    interface IFiabilisationPersonneScope extends ng.IScope {
    }
    class FiabilisationPersonneController {
        private $scope;
        static $inject: string[];
        creation: boolean;
        identifiantPersonne: number;
        private FraicheurRubrique;
        C: Menu.IConstantes;
        private tierServices;
        private ServiceEtatCivil;
        private ServicesChampsObligatoires;
        private ServiceDonneesDeloc;
        constructor($scope: IFiabilisationPersonneScope, tierServices: ITierService, Constantes: Menu.IConstantes, FraicheurRubrique: FraicheurRubrique.IFraicheurService, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServiceDonneesDeloc: ServiceIhm.IServiceDonneesDeloc);
        etatFraicheurClasse: string;
        estVisible: boolean;
    }
}

declare module Connaissanceclient.FiabilisationRubrique {
    interface IFiabilisationRubriqueScope extends ng.IScope {
        dateFraicheur: string;
        boutonVisible: boolean;
        estValideEnCours: () => boolean | string;
        mettreAJourFraicheur: () => void;
        confirmerFraicheur: (modifier?: boolean) => void;
        infirmerFraicheur: () => void;
        fraicheurEstVisible: () => boolean;
        fraicheurClasse: () => string;
        fraicheurTexte: () => string;
        fraicheurIcone: () => string;
        exclumineur: boolean;
    }
    class FiabilisationRubriqueController {
        private $scope;
        private $compile;
        static $inject: string[];
        creation: boolean;
        codeRubrique: string;
        identifiantPersonne: number;
        globale: boolean;
        private confirmer;
        private infirmer;
        private FraicheurRubrique;
        private _boutonVisible;
        private idFraicheurRubrique;
        C: Menu.IConstantes;
        private ServiceEtatCivil;
        private tierServices;
        private _ServiceNavigation;
        private ServicesChampsObligatoires;
        private ServiceDonneesDeloc;
        constructor($scope: IFiabilisationRubriqueScope, tierServices: ITierService, Constantes: Menu.IConstantes, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, FraicheurRubrique: FraicheurRubrique.IFraicheurService, ServiceNavigation: ServiceIhm.ServiceNavigationIHM, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceDonneesDeloc: ServiceIhm.IServiceDonneesDeloc, $rootScope: any, $compile: ng.ICompileProvider);
        estVisible: boolean;
        codeActionService: string;
        dateFraicheur: any;
        boutonVisible: boolean;
        private _codeAction;
        codeAction: boolean;
        estValideEnCours(): any;
        mettreAJourFraicheur(): void;
        mettreAJourFraicheurDirect(): void;
        confirmerFraicheur(modifier?: boolean): void;
        infirmerFraicheur(): void;
        fraicheurEstVisible(): boolean;
        fraicheurClasse(): string;
        fraicheurTexte(): string;
        fraicheurIcone(): string;
    }
}

declare module DQE {
    interface IInfoBulle {
        type: string;
        picto: string;
        ouvertureBlock: boolean;
        message1: string;
    }
    interface IAdresse {
        $$hashKey?: any;
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: any;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: any;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: any;
        numeroFax: any;
        codeAccesMinitel: any;
        indicateurDetentionTelephone: any;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: any;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
        numero: any;
    }
    interface IAdresseTemp {
        estDifferent: boolean;
        codePostalPTT?: string;
        codeInseeLocalite?: string;
        ligne2AdresseAFNOR?: string;
        ligne3AdresseAFNOR?: string;
        ligne4AdresseAFNOR?: string;
        ligne5AdresseAFNOR?: string;
        ligne6AdresseAFNOR?: string;
    }
}
declare module DonneesAdministratives {
    class SaisieAdresseDqeController {
        private dqeServices;
        private _verificationAdresse;
        private _bntDropdownVisible;
        private _adresseOriginale;
        private _verifierAdresseModifiee;
        private _donneesFinancieresService;
        private _serviceRelation;
        _data: DQE.IAdresse;
        infobulle: DQE.IInfoBulle;
        DQE_Echec: boolean;
        codePostalErreurFlag: boolean;
        C: Menu.IConstantes;
        loading: boolean;
        estHorsFrance: boolean;
        propagerAdresse: (adresse: DQE.IAdresse) => void;
        onBlur: (pays?: any) => void;
        adresseTemp: DQE.IAdresseTemp;
        forcerBtn: boolean;
        maxLengthLigne4: boolean;
        checkSize: () => void;
        messageErreur: string;
        flagAdresseKO: boolean;
        ouvrirPopupNpai: (typeAdresse: string) => void;
        confirmerAdresse: (adresse: DQE.IAdresse) => void;
        adresseVisible: boolean;
        onSelect: ($item: any) => void;
        onSelectVille: ($item: any) => void;
        validerAdresse: (adresse: DQE.IAdresse) => void;
        forcerAdresse: (validationAdresse?: boolean) => void;
        sortirRecherche: () => void;
        bntDropdownPosition: number;
        isDropdownButtonVisible: () => void;
        asyncSelected: string;
        entrerManuellement: () => void;
        getAdresse: (key: string) => void;
        toggleAdresseHorsFrance: () => void;
        supprimerAdresse: (adresse: DQE.IAdresse) => void;
        getLocalite: (key) => void;
        paramRecherche: any;
        paramAdresseHorsFrance: any;
        creation: boolean;
        _param: any;
        maxlengt: string;
        static $inject: string[];
        constructor($scope: any, Constantes: Menu.IConstantes, $timeout: any, $rootScope: any, dqeServices: any, modalService: any, navigationTotemService: any, tierServices: ITierService, Trace: ConnaissanceClient.ITrace, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees);
    }
    function saisieAdresseQqeDirective(): {
        controller: typeof SaisieAdresseDqeController;
        controllerAs: string;
        bindToController: boolean;
        link: (scope: any, element: any, attrs: any) => void;
        restrict: string;
        scope: {
            _param: string;
            _data: string;
        };
        templateUrl: string;
    };
}


declare module DonneesFinancieres {
    class SaisieChargesController {
        private ServiceCharges;
        C: Menu.IConstantes;
        total: number;
        _listeTitres: string[];
        _param: any;
        _data: any;
        chargeImposition: any;
        modeCreation: any;
        ajouter: ($event) => boolean;
        modifier: (elem: any, $event) => boolean;
        supprimer: (elem: any, codeType: string) => void;
        afficherMontant: (elem: any) => boolean;
        afficherCreditCharge: (typeCharge: any) => boolean;
        afficherISF: (elem: any) => boolean;
        private totalCharge;
        private _chargeImposition;
        static $inject: string[];
        constructor($scope: ConnaissanceClient.IDonneesFinancieresScope, modalService: any, Constantes: Menu.IConstantes, $timeout: ng.ITimeoutService, $rootScope: ConnaissanceClient.IDonnesFinancieresRootScope, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService, ServiceCharges: ServiceIhm.IServiceCharges);
        totalChargesIHM: number;
    }
    function saisieChargesDirective(): {
        controller: typeof SaisieChargesController;
        controllerAs: string;
        bindToController: boolean;
        restrict: string;
        scope: {
            _param: string;
            _display: string;
            _data: string;
            _chargeImposition: string;
        };
        templateUrl: string;
    };
}

interface IChoixTypoScope extends ConnaissanceClient.IRequiredScope {
    selectionnerBouton: (code: any) => void;
    Typologie: string;
    listeChoix: any;
    loading: boolean;
    _estErreur?: boolean;
    _messageErreur?: string;
    originalValue: number;
}

interface ICSPScope extends ConnaissanceClient.IRequiredScope {
    loading: boolean;
    selected: any;
    lstGroupeCSP: any[];
    listeCSP: any[];
    _critereRecherche: string;
    Rechercher: (_critereRecherche: string) => void;
    rechercheCSP: () => void;
    groupByCategories: (item: any) => any;
    lstGroupeCSPKey: any[];
    lstGroupeCSPValue: any[];
    onSelect: (item: any) => void;
    originalValue: string;
    toUpperCase: ($select: any) => void;
}
interface ICSPRootScope extends ConnaissanceClient.IRequiredScope {
    DlgShow: (template: string, controller: string, _critere: any, callback: any, format: string) => void;
}

declare module SaisieDate {
    interface IControleurScope extends ConnaissanceClient.IRequiredScope {
        _estErreur?: boolean;
        messageErreur?: string;
        dateNaissanceErreur?: boolean;
        changeDate: (valeur?: any) => void;
        value: (v: any) => any;
        originalValue: any;
    }
}

interface IDesignation extends SaisieSimple.ISaisieSimpleScope {
    flagInvalid: boolean;
    verifierPresenceNoms: ($select: any) => void;
}
declare module DesignationCourte {
    class SaisieDesignationController extends SaisieSimple.SaisieSimpleController {
        private ServiceEtatCivil;
        required: string;
        _data: any;
        _datanomfamille: string;
        _datanommarital: string;
        flagInvalid: boolean;
        Constantes: Menu.IConstantes;
        private _ServiceNavigation;
        static $inject: string[];
        constructor($scope: IDesignation, Constantes: Menu.IConstantes, tierServices: ITierService, ServiceNavigation: ServiceIhm.IServiceNavigation, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil);
    }
    function saisieDesignationDirective(): {
        controller: typeof SaisieDesignationController;
        link: typeof SaisieSimple.SaisieSimpleLink;
        controllerAs: string;
        bindToController: boolean;
        restrict: string;
        scope: {
            _param: string;
            _display: string;
            _data: string;
            _datanomfamille: string;
            _datanommarital: string;
            required: string;
            uimask: string;
            placeholder: string;
            autofocus: string;
            patterntype: string;
            tabindex: string;
            _id: string;
            maxlength: string;
        };
        templateUrl: string;
    };
}

interface IHeritiersScope extends ConnaissanceClient.IRequiredScope {
    openHeritier: (identifiantPersonne, heritier: any, titre: string, flag?: string, callback?: any) => void;
    flag: string;
    listeHeritiers: any;
    HeritierSelectionne: string;
    SelectionnerHeritier: (obj: any, tab: any) => void;
    DeselectionnerHeritier: (tab: any) => void;
    SupprimerHeritier: (liste: any[], index: number, tab: any) => void;
    AjouterHeritier: (identifiantPersonne: number, liste: any[]) => void;
}


interface IJustificatifScope extends ConnaissanceClient.IRequiredScope {
    waitAdd: boolean;
    justificatifVisible: boolean;
    AddPieceJustificative: () => void;
    Supprimer: (elem: any) => void;
}

interface ISaisieListeClauseScope extends ng.IScope {
    Typologie: any;
    uniqueId: number;
    loading: boolean;
    changerItem: Function;
    listeClause: any;
    traiterData: (data: any) => void;
    _data: any;
    _param: any;
    _filtrer?: boolean;
    required?: string;
    d: any;
    _regime: string;
}


interface ISaisieListePaysScope extends ng.IScope {
    Typologie: any;
    uniqueId: number;
    loading: boolean;
    changerItem: Function;
    listeTypo: IQRObject;
    traiterData: (data: any) => void;
    _data: any;
    _param: any;
    _filtrer?: boolean;
    required?: string;
    d: any;
    onSelect: (item: any) => void;
    _onSelect: (item: any) => void;
    originalValue: string;
    toUpperCase: ($select: any) => void;
}

interface ISaisieListeTypoAutocompleteScope extends ng.IScope {
    Typologie: any;
    uniqueId: number;
    loading: boolean;
    changerItem: Function;
    listeTypo: IQRObject;
    listeTypoComplete: Array<IQRObject>;
    traiterData: (data: any) => void;
    _data: any;
    _param: any;
    _filtrer?: boolean;
    required?: string;
    d: any;
    toUpperCase: ($select: any) => void;
}


interface ISaisieListeTypoScope extends ng.IScope {
    Typologie: any;
    uniqueId: number;
    loading: boolean;
    changerItem: Function;
    listeTypo: IQRObject;
    listeTypoComplete: Array<IQRObject>;
    traiterData: (data: any) => void;
    _data: any;
    _param: any;
    _filtrer?: boolean;
    required?: string;
    d: any;
    toUpperCase: ($select: any) => void;
}

declare module SaisieListe {
    interface ISaisieListeScope extends ConnaissanceClient.IRequiredScope {
        _label: string;
        setData: (objet) => void;
        _liste: any;
        onSelect: (item: any) => void;
        _onSelect: (item: any) => void;
        originalValue: string;
    }
}

interface IObjetDeRetourLocalite {
    flagOK: boolean;
    localite: any;
}
interface ILocaliteScope extends SaisieSimple.ISaisieSimpleScope {
    _departement: string;
    rechercheLocaliteEnCours: string;
    displayText: any;
    displayTextChargement: any;
    CallBackRechercheLocalite: (obj: IObjetDeRetourLocalite) => void;
    RechercherLocalite: () => void;
    verifierSiEntree: ($event: any) => void;
    lstLocalite: any[];
}
interface ILocaliteRootScope extends ng.IScope {
    DlgShow: (template: string, controller: string, critere: any, callback: any, format: string) => void;
}
declare class SaisieLocaliteLink extends SaisieSimple.SaisieSimpleLink {
    constructor(scope: ILocaliteScope, element: JQuery, attrs: ng.IAttributes);
}

interface IMail extends ConnaissanceClient.IRequiredScope {
    verifierAdresseEmail: (mail: any) => boolean;
    ajoutEstActif: () => boolean;
    estEligibleMailPrefere: (mail: any) => boolean;
    ajout: () => void;
    isPrefere: (mail: any) => boolean;
    setMailPrefere: (mail: any) => void;
    listeTypeUsage: any[];
    updateTypeUsage: (item: any, tel: any) => void;
    supprimerMail: (mail: any) => void;
    _media: any;
    isAjouteVisible: () => boolean;
    ChangerReferenceAccesMedia: (event: any, mail: any) => void;
}

interface IMontantPeriode extends ConnaissanceClient.IRequiredScope {
    uniqueID: number;
    listePeriodicite: any;
    montantMensuel: number;
    montantAnnuel: number;
    nombrePeriode: number;
    formaterDepuisMensuel: () => void;
    formaterDepuisAnnuel: () => void;
    formaterDepuisPeriodicite: () => void;
    value: (string) => string;
    originalValue: string;
}

interface IMontant extends ConnaissanceClient.IRequiredScope {
    montantAfficher: any;
    uniqueId: string;
}

interface INationaliteExt extends SaisieSimple.ISaisieSimpleScope {
    paramDate?: any;
    paramDouble?: any;
    _codeNationalite?: string;
    flagDouble?: boolean;
    _dateNaturalisation?: any;
    flagNaturalise?: boolean;
    _minDate: Date;
    erreur: boolean;
}
declare class SaisieNationaliteExtController extends SaisieSimple.SaisieSimpleController {
    erreur: any;
    paramDate: any;
    paramDouble: any;
    d: any;
    _dateNaturalisation: any;
    _codeNationalite: any;
    flagDouble: any;
    flagNaturalise: any;
    _minDate: any;
    _param: any;
    constructor($scope: INationaliteExt, Constantes: Menu.IConstantes, tierServices: ITierService);
}
declare class SaisieNationaliteExtLink {
    constructor(scope: INationaliteExt, element: JQuery, attrs: ng.IAttributes);
}

interface INotes extends ConnaissanceClient.IRequiredScope {
    nbNote: number;
    lstBlocNotes: Array<INote>;
    ajouterNote: () => void;
    annulerNote: (number) => void;
    supprimerNote: (number) => void;
    enregistrerNote: (number) => void;
    compterNote: () => number;
    controllerNote: (note: any) => any;
    setDateModification: (note: INote) => void;
    isAjoutActif: () => boolean;
    _listeOld: Array<INote>;
    verifierNote: (commentaire, index) => void;
}
interface INote {
    numeroOrdreDuCommentaire: number;
    dateCreationEnregistrement: Date;
    commentaireBlocNote: string;
    contenuAvantModif?: string;
    contenuModifie?: boolean;
    isInvalid: boolean;
    errorMessage: string;
}

interface INumerique extends ConnaissanceClient.IRequiredScope {
    numeriqueAfficher: any;
    uniqueId: string;
}

interface ISaisieOptionOuiNonScope extends ConnaissanceClient.IRequiredScope {
    originalValue: boolean;
    value: (v: boolean) => boolean;
    _ngClick: (value: any) => void;
}




interface IPrenom extends SaisieSimple.ISaisieSimpleScope {
    flag: boolean;
    flagInvalid: boolean;
    autrePrenomVisible: boolean;
    _data1: string;
    _data2: string;
    focusAutresPrenoms: boolean;
    estErreur: () => any;
}
declare class SaisiePrenomController extends SaisieSimple.SaisieSimpleController {
    required: string;
    _data1: string;
    _data2: string;
    autrePrenomVisible: boolean;
    focusAutresPrenoms: boolean;
    constructor($scope: IPrenom, Constantes: Menu.IConstantes, tierServices: ITierService);
}

declare function saisieProjets(modalService: any, tierServices: ITierService, $timeout: any, Typologie: any, Deloc: any, Constantes: any): ng.IDirective;

declare module Relation {
    function saisieRelation(): ng.IDirective;
    class RelationController {
        ServiceRelation: ServiceIhm.ServiceRelationIHM;
        private graphiqueService;
        estCharge: boolean;
        paramIHM: any;
        _data: any;
        _liens: any;
        _horsliens: any;
        nombreLiens: () => any;
        _ordonnerLiens: () => any;
        estHabiliteCreerLien: boolean;
        estHabiliteSupprimerLien: boolean;
        estHabiliteModifierLien: boolean;
        relationJSON: any;
        estPossibleAjoutRelation: boolean;
        listeUtilisateurs: any;
        personneCourante: any;
        montrerDesignation: (id: number) => string;
        listeFamillesQualite: Array<IQRObject>;
        listeQualite: Array<IQRObject>;
        listeTypesLiens: any;
        listeChoixQualitesParFamille: any;
        initListes: () => void;
        initQualitesRelation: () => void;
        filtrePrive: (item: IQRObject) => boolean;
        ajouterLien: (personne: any, index: number, $event?: ng.IAngularEvent) => any;
        ajouterInterlocuteur: (personne: any, index: number, $event?: ng.IAngularEvent) => any;
        ajouterALaRelation: (personne: any, espace: string, objetPret?: boolean) => any;
        effacerDeLaRelation: (personne: any, espace: string) => any;
        choixQualiteRelation: (personne: any, nouvellePersonne?: boolean, espace?: any) => any;
        ouvrirInterlocuteur: (personne: any) => any;
        preparerDonnees: () => any;
        ouvrirSousPersonne: (personne: any) => any;
        order: (predicate: any) => string;
        actionsLien: MyWay.UI.IBoutonActionRiche[];
        actionsLienInterlocuteur: MyWay.UI.IBoutonActionRiche[];
        indexLienCourant: number;
        getLienCourant: (index: number) => any;
        gererLien: (typeAction: string) => any;
        lancerPush: () => any;
        openChoixTypeLien: (param: any, fonction: any) => void;
        openConflitAgence: (agenceRattachee: number, agenceCourante: number, fonction: any) => void;
        openConflitPersonne: () => void;
        gererConflit: (personne: ConnaissanceClient.IRelationObj) => void;
        estPro: (personne: ConnaissanceClient.IRelationObj) => boolean;
        afficherGraphique: () => void;
        toggleDisplayGraphique: () => void;
        graphiqueToPDF: () => void;
        displayGraphique: boolean;
        getLibelleQualite: (code: string) => string;
        getLibelleLien: (code: string) => string;
        changerLeader: (personne: ConnaissanceClient.IRelationObj, estIdentifiantPersonne?: boolean, estRelationCourante?: boolean) => void;
        devenirLeader: (personne: ConnaissanceClient.IRelationObj) => void;
        mettreAJourRelation: (personneAModifier: ConnaissanceClient.IRelationObj, anciennePersonne: ConnaissanceClient.IRelationObj) => void;
        supprimerPersonnesLiees: (personne: any, $event?: ng.IAngularEvent) => void;
        C: Menu.IConstantes;
        private _$q;
        accesSynthese: (pidentifiantPersonne: number) => void;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, $rootScope: any, Constantes: Menu.IConstantes, PortailAgent: MyWay.Services.ServiceAgentExtended, Contexte: ConnCliContexte.IContexte, Deloc: ConnaissanceClient.IDeloc, modalService: MyWay.UI.IModalService, $filter: ng.IFilterService, tierServices: ITierService, relationServices: Relation.IRelationService, NavigationService: MyWay.UI.NavigationService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService, habilitationsService: any, FraicheurRubrique: FraicheurRubrique.IFraicheurService, $scope: any, Trace: ConnaissanceClient.ITrace, ServiceRelation: ServiceIhm.ServiceRelationIHM, ServiceNavigation: ServiceIhm.IServiceNavigation, ServicePiedPage: ServiceIhm.IServicePiedPage, graphiqueService: libc2.IGraphiqueRelationService, $q: ng.IQService);
    }
}

declare module DonneesFinancieres {
    class SaisieRevenusController {
        private _totalRevenu;
        private _callBackAjout;
        private _callBackModif;
        private _listeRelation;
        private _modeCreation;
        private _nomPersonne;
        private _idPersonne;
        C: Menu.IConstantes;
        total: number;
        _listeTitres: string[];
        _listeRevenuDeloc: string[];
        _param: any;
        _data: any;
        modeCreation: any;
        ajouter: ($event) => boolean;
        modifier: (elem: any, $event) => boolean;
        supprimer: (elem: any, codeType: string) => void;
        afficherMontant: (elem: any) => boolean;
        static $inject: string[];
        constructor($scope: ConnaissanceClient.IDonneesFinancieresScope, modalService: any, Constantes: Menu.IConstantes, $timeout: ng.ITimeoutService, $rootScope: ConnaissanceClient.IDonnesFinancieresRootScope, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService, ServiceRevenus: ServiceIhm.IServiceRevenus, PortailAgent: any, FraicheurRubrique: FraicheurRubrique.IFraicheurService);
    }
    function saisieRevenusDirective(): {
        controller: typeof SaisieRevenusController;
        controllerAs: string;
        bindToController: boolean;
        restrict: string;
        scope: {
            _param: string;
            _display: string;
            _data: string;
            _listeRelation: string;
            _idPersonne: string;
            _nomPersonne: string;
            _modeCreation: string;
        };
        templateUrl: string;
    };
}

interface ISensibiliteScope extends ConnaissanceClient.IRequiredScope {
    sensibilites: any;
    quantityInteresse: number;
    quantityPasInteresse: number;
    ajoutSensibilite(sensibilite?: any): void;
    modifierSensibilite(id: string): void;
    supprimerSensibilite(where: string, elem: ConnaissanceClient.IStandardSmallObj): void;
    totalInteresse(): number;
    totalPasInteresse(): number;
    getLibelle: (type: string) => string;
    themesSensibilites: any[];
}
declare function saisieSensibilites(Constantes: Menu.IConstantes, $rootScope: ng.IScope, modalService: any, tierServices: ITierService): ng.IDirective;


declare module SIREN {
    interface IInfoBulle {
        type: string;
        picto: string;
        ouvertureBlock: boolean;
        message1: string;
    }
}
declare module DonneesAdministratives {
    class SaisieSirenController {
        private _data;
        flag: boolean;
        _tier: any;
        _ihm: any;
        _infobulle: SIREN.IInfoBulle;
        oldVal: number;
        modifier: (elem: any) => void;
        supprimer: (elem: any) => void;
        rechercheSiren: (siren: string) => void;
        rechercheRaisonSociale: () => void;
        _parentCtrl: any;
        getLibelleApe: (code: string) => string;
        loading: boolean;
        sirenListe: any[];
        tableauRecherche: any;
        messageErreur: string;
        value: (string) => string;
        originalValue: string;
        isAdresseManquante: () => boolean;
        messageAdresseManquante: string;
        _nomemployeur: string;
        static $inject: string[];
        constructor($scope: any, donneesProfessionnellesService: DonneesAdministratives.IDonneesProfessionnellesService, Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, Typologie: any, modalService: any, $timeout: ng.ITimeoutService, proServices: any, tierServices: ITierService, $q: ng.IQService, ServiceDonneesProfesionnelles: ServiceIhm.IServiceDonneesProfessionnelles);
    }
    function saisieSirenDirective(): {
        controller: typeof SaisieSirenController;
        controllerAs: string;
        bindToController: boolean;
        link: (scope: ConnaissanceClient.IRequiredScope, element: JQuery, attrs: ng.IAttributes) => void;
        restrict: string;
        scope: {
            _param: string;
            _display: string;
            _data: string;
            required: string;
            uimask: string;
            _ihm: string;
            _nomemployeur: string;
        };
        templateUrl: string;
    };
}

declare module TableauRechercheS {
    interface IAyantDroit {
        adresseLigne2: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        adresseLigne6: string;
        commentaireHeritier: string;
        dateNaissancePersonne: string;
        designationCourtePersonne: string;
        identifiantPersonneHeritier: number;
        numeroTelephoneAdresse: string;
        typeLienHeritier: string;
    }
    interface ICaisse {
        Key: string;
        Value: string;
    }
    class TableauRechercheSuccession implements MyWay.UI.ISelectionChangeHandler {
        listeSuccession: Array<any>;
        selectedLines: Array<Object>;
        tableOptions: any;
        listeAyantDroit: any;
        operationSuccession: any;
        deuxiemePersonneEnRelation: number;
        constructor(listeSuccession: any[], listeAyantDroit: any, $filter: ng.IFilterService, listeCaisseBPCE: any, ServiceSuccession: any, listeCaisse: any);
        onSelectionChange(selectedObject: Object): void;
    }
}
declare module Succession {
    class SaisieSuccessionsController {
        _data: any;
        _identifiantrelationteconomique: any;
        static $inject: string[];
        tableauComplexeMultipleData: any;
        tableauColonneOptionsDateRecyclageSuccession: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDesignationAgent: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontantRecycleOrigineCE: MyWay.UI.ImwTableColumnOptions;
        tableauComplexeMultiple: MyWay.UI.ImwTableOptions;
        tableauRecherche: any;
        _listeAyantDroit: any;
        listeCaisseBPCE: any;
        listeProduit: any;
        _deuxiemePersonneEnRelation: number;
        _numeroCaisse: string;
        _montantRecycleOrigineCE: number;
        _identifiantContactAssocie: number;
        _montantRecycleAutreEtablissement: number;
        _operationSuccession: any;
        _dataSuccession: any;
        modalService: any;
        listeOperationSuccession: Array<any>;
        montantARecycler: number;
        filter: ng.IFilterService;
        constructor($scope: any, $timeout: ng.ITimeoutService, ServiceSuccession: any, heritiersService: any, modalService: any, $filter: ng.IFilterService, PortailAgent: MyWay.Services.ServiceAgent, Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, $rootScope: any, tierServices: ITierService);
    }
    function saisieSuccessionsDirective(): {
        controller: typeof SaisieSuccessionsController;
        controllerAs: string;
        bindToController: boolean;
        restrict: string;
        scope: {
            _data: string;
            _identifiantrelationteconomique: string;
        };
        templateUrl: string;
    };
}

interface ITelephoneScope extends ConnaissanceClient.IRequiredScope {
    isAjoutActif: () => boolean;
    isPrefere: (tel: ITelephone) => boolean;
    setNumeroPrefere: (tel: ITelephone) => void;
    isPrefereSol: (tel: ITelephone) => any;
    setNumeroPrefereSol: (tel: ITelephone) => void;
    isEligibleNumeroPrefere: (tel: ITelephone) => boolean;
    ajoutNumero: () => void;
    supprimerNumero: (tel: ITelephone) => void;
    getMask: (tel: ITelephone) => string;
    listeTypeUsage: any[];
    updateTypeUsage: (item: any, tel: ITelephone) => void;
    setOPTIN: (tel: ITelephone) => void;
    validerNumero: (tel: ITelephone) => void;
    validerNumeroChargement: (tel: ITelephone) => void;
    onKeypress: ($event: any) => void;
    isNumeroValide: (tel: ITelephone) => void;
    isInvalid: boolean;
    _media: any;
    refreshNumero: (tel: ITelephone) => void;
    isAjouteVisible: () => boolean;
}
interface ITelephone {
    $$hashKey?: string;
    Value?: string;
    Key?: string;
    typePersonne?: any;
    codeEtablissement?: string;
    errorMessage?: string;
    errorMessageUsage?: string;
    isInvalid?: boolean;
    isInvalidUsage?: boolean;
    identifiantPersonne?: number;
    blur?: boolean;
    indicateurEnvoiCourrier?: string;
    indicateurOppositionTelephone?: string;
    indicateurProOptout?: string;
    numeroChronoLieuActivite?: number;
    numeroChronoProfessionnel?: number;
    codeTypeMedia: string;
    codeTypeUsageMedia: string;
    indicateurOPTIN: string;
    indicateurPreferenceMedia: any;
    indicateurSecu: string;
    indicatifTel: any;
    libelleTypeMedia: string;
    libelleTypeUsageMedia: string;
    referenceAccesMedia: string;
}

interface ISaisieTextareaScope extends SaisieSimple.ISaisieSimpleScope {
}

interface IVignetteScope extends ConnaissanceClient.IRequiredScope {
    MajData: () => void;
    titre: string;
    sousTitre: string;
    dateAjout: string;
    Modifier: (elem: any) => void;
    Supprimer: (elem: any) => void;
    Ajouter: () => void;
    $parent: any;
}

declare module Erreurs {
    class SyntheseErreursController {
        private $scope;
        static $inject: string[];
        C: Menu.IConstantes;
        constructor($scope: any, Constantes: Menu.IConstantes);
    }
}

interface ISyntheseRevenusChargesScope extends ConnaissanceClient.IRequiredScope {
    options: any;
    wasInView: boolean;
    totalRevenusMensuels: number;
    totalRevenus: number;
    totalRevenusStr: string;
    totalChargesMensuels: number;
    totalCharges: number;
    pourcentCharges: any;
    pourcentResteAVivre: any;
    totalResteAVivre: number;
    capaciteEndettement: number;
    tauxEndettementMensuel: number;
    capaciteEpargne: number;
    montantEndettementActuel: number;
    _revenus: any[];
    _charges: any[];
    init: (inview: boolean) => void;
}

declare module MyWay.UI {
    /**
     * Énumération listant les types de composants possibles.
     * La hiérarchie étant : Chapitre -> SousChapitre -> Page -> Section.
     */
    enum TypeComponentBdd {
        Chapitre = 0,
        SousChapitre = 1,
        Page = 2,
        Section = 3,
    }
    /**
     * Classe mère des composants de la navigation.
     */
    class TotemBddComponent {
        titre: string;
        private isActif;
        TypeComponentBdd: TypeComponentBdd;
        parent: TotemBddComponent;
        isComplete: boolean;
        isFiabilise: boolean;
        /**
         * Constructeur de la classe mère
         * @param {string} titre - Titre du composant
         * @param {MyWay.UI.TypeComponentBdd} TypeComponentBdd - Type du composant
         */
        constructor(titre: string, TypeComponentBdd: TypeComponentBdd);
        /**
         * Méthode de vérification si le composant est de type Chapitre
         * @return {boolean}
         */
        isChapitre(): boolean;
        /**
         * Méthode de vérification si le composant est de type SousChapitre
         * @return {boolean}
         */
        isSousChapitre(): boolean;
        /**
         * Méthode de vérification si le composant est de type Page
         * @return {boolean}
         */
        isPage(): boolean;
        /**
         * Méthode de vérification si le composant est de type Section
         * @return {boolean}
         */
        isSection(): boolean;
        checkIsComplete(): boolean;
        checkIsFiabilise(): boolean;
    }
    class TotemBddComposite extends TotemBddComponent {
        list: TotemBddComponent[];
        constructor(titre: string, TypeComponentBdd: TypeComponentBdd);
        /**
         * Méthode d'ajout d'un composant dans la liste des composants fils
         * @param {MyWay.UI.TypeComponentBdd} c - Composant à ajouter
         */
        add(c: TotemBddComponent): void;
        /**
         * Méthode de suppression d'un composant dans la liste des composants fils
         * @param {number} i - Index de composant à supprimer
         */
        remove(i: number): void;
        /**
         * Méthode de vérification si le composant est terminé
         * @return {boolean}
         */
        checkIsComplete(): boolean;
    }
    /**
     * Classe des composants de type Page.
     * @extends MyWay.UI.TotemBddComposite
     */
    class TotemBddPage extends TotemBddComposite {
        target: string;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         * @param {string} target - Identifiant de l'élément du DOM visé
         */
        constructor(titre: string, target: string);
    }
    /**
     * Classe des composants de type Chapitre.
     * @extends MyWay.UI.TotemBddComposite
     */
    class TotemBddChapitre extends TotemBddComposite {
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         */
        constructor(titre: string);
    }
    /**
     * Classe des composants de type Sous-chapitre.
     * @extends MyWay.UI.TotemBddComposite
     */
    class TotemBddSSChapitre extends TotemBddComposite {
        toggle: boolean;
        pageAutoRoute: TotemBddPage;
        ouverturePageAuto: boolean;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         */
        constructor(titre: string);
    }
    /**
     * Classe des composants de type Section.
     * @extends MyWay.UI.TotemBddComponent
     */
    class TotemBddSection extends TotemBddComponent {
        target: string;
        /**
         * Constructeur de la classe
         * @param {string} titre - Titre du composant
         * @param {string} target - Identifiant de l'élément du DOM visé
         */
        constructor(titre: string, target: string);
    }
}

declare module MyWay.UI {
    interface INavigationBddService {
        setActivePage(page: TotemBddPage, section: TotemBddSection): any;
        setActiveSection(section: TotemBddSection): any;
        setActiveSousChapitre(sousChapitre: TotemBddSSChapitre): any;
        getChapitre(titre: string): TotemBddChapitre;
        getSousChapitre(titre: string): TotemBddSSChapitre;
        getPage(titre: string): TotemBddPage;
        getSection(titre: string): TotemBddSection;
        getActivePage(): TotemBddPage;
        getActiveSection(): TotemBddSection;
        changeRoute(page: TotemBddPage, section: TotemBddSection): any;
    }
    class NavigationBddService implements INavigationBddService {
        private $location;
        private $document;
        private mwSmoothScroll;
        private _navigation;
        private _activePage;
        private _activeSection;
        private _activeSousChapitreActif;
        _$rootScope: ng.IRootScopeService;
        private _MW_EVENTS;
        private _$timeout;
        private scrollInProgress;
        private isFromTotemContenuDirective;
        private deRegistrationChangeRouteHandler;
        constructor($rootScope: ng.IRootScopeService, totemEvent: IMwEvents, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $document: ng.IDocumentService, mwSmoothScroll: MyWay.UI.IMwSmoothScrollService);
        init(navigation: Array<TotemBddComponent>, origine?: string): void;
        setNavigation(navigation: Array<TotemBddComponent>): void;
        private getFirstPage(component);
        private findComponent(listComponent, titre, type);
        private findPageByTarget(listComponent, target);
        getActivePage(): TotemBddPage;
        getActiveSection(): TotemBddSection;
        setActiveSection(section: TotemBddSection): void;
        setActivePage(page: TotemBddPage, section: TotemBddSection): void;
        getActiveLinks(): TotemBddComponent[];
        /**
         * Active ou Desactive le sous chapitre.
         */
        setActiveSousChapitre(sousChapitre: TotemBddSSChapitre): void;
        getChapitre(titre: string): TotemBddChapitre;
        getSousChapitre(titre: string): TotemBddSSChapitre;
        getPage(titre: string): TotemBddPage;
        getSection(titre: string): TotemBddSection;
        isScrollInProgress(): boolean;
        setScrollInProgress(enable: boolean): void;
        changeRoute(page: TotemBddPage, section: TotemBddSection): void;
        scrollTotem(event: any): void;
        scrollTotemBy(deltaY: number): void;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServiceProjetsSensibilites
     */
    interface IServiceBlocNotes {
        listeBlocNotes: any;
        estModifie: boolean;
    }
}

declare module ServiceIhm {
    interface IServiceCharges {
        listeCharges: ServiceDaoIhm.DaoCharge[];
        chargeImposition: ConnaissanceClient.Modeles.Tiers.IChargeImposition;
        estModifie: boolean;
        listeChargesIhm: any;
        totalCharges: number;
        totalCharge: number;
    }
}

declare module ServiceIhm {
    interface IServiceCoordonnees {
        listeAdresse: ServiceDaoIhm.DaoAdresse[];
        listeAdresseIhm: any;
        listeMedia: ServiceDaoIhm.DaoMedia[];
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        residencePrincipale: ServiceDaoIhm.DaoPatrimoineImmobilier;
        listeTelephoneFixe: ServiceDaoIhm.DaoMedia[];
        listeTelephoneMobile: ServiceDaoIhm.DaoMedia[];
        listeEMail: ServiceDaoIhm.DaoMedia[];
        mailOptIn: string;
        mobileOptIn: string;
        listeRetourDistribution: any[];
        affichageBoutonOPTIN: () => boolean;
        isOPTIN: () => boolean;
        listePatrimoineImmobilier: ServiceDaoIhm.DaoListePatrimoineImmobilier[];
        setAdresseComplete: (codeTypeAdresse: string, complet: boolean) => void;
        setModifieIndicateurOpposition: (indicateurOppositionTelephone, oppositionTelephone) => void;
        estInitialisation: boolean;
        estComplet: boolean;
        estModifie: boolean;
        erreurAdresseEmployeur: boolean;
        newListeChampsObligatoireIHM: boolean;
        listeChampsErreur: any[];
        estModifiePropagation: boolean;
    }
}

declare module ServiceIhm {
    interface IServiceDonneesDeloc {
        ExcluMineur: boolean;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServiceProjetsSensibilites
     */
    interface IServiceDonneesGestion {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        identification: ServiceDaoIhm.DaoIdentification;
        portefeuilleTMP: string;
        portefeuille: any;
        agenceDestinataire: number;
        manifestationPersonne: ServiceDaoIhm.DaoManifestationPersonne;
        estComplet: boolean;
        estModifie: boolean;
        newListeChampsObligatoireIHM: boolean;
        init: () => void;
        getPortefeuille: () => void;
        setChampsObligatoire: (champs: any, dao: string) => void;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServiceDonneesProfessionnelles
     */
    interface IServiceDonneesProfessionnelles {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        adresseEmployeur: ServiceDaoIhm.DaoAdresseEmployeur;
        estComplet: boolean;
        estModifie: boolean;
        estModifieCatégorieSocioProfessionnelle: boolean;
        onClickMenu: (id1: any, id2?: any) => void;
        estVisibleDateFinContrat: (Ctrl: any) => boolean;
        newListeChampsObligatoireIHM: boolean;
        codeTypeContratTravail: any;
        appartenanceReseau: boolean;
        indicateurArtisan: boolean;
        listeChampsErreur: any[];
        afficherNavigationBDR: boolean;
    }
}

declare module ServiceIhm {
    interface IServiceEtatCivil {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        codePaysNaissance: string;
        estMajeur: boolean;
        estMarie: boolean;
        dateEffetSituationFamilialeMessage: string;
        dateNaissanceMessage: string;
        dateDecesMessage: string;
        dateDecesPresumeMessage: string;
        dateNaturalisationMessage: string;
        dateObtentionPieceJustificativeMessage: string;
        designationEnregistree: string;
        decede: boolean;
        erreurDateDecesHabilitation: boolean;
        localiteNaissanceGeneree: boolean;
        estComplet: boolean;
        estModifie: boolean;
        estVisible: boolean;
        newListeChampsObligatoireIHM: boolean;
        listeChampsErreur: any[];
    }
}

declare module ServiceIhm {
    interface IServiceHeritiersAyantDroit {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        listeTypeRelationEconomique: any;
        estModifie: boolean;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServiceNavigation
     */
    interface IServiceNavigation {
        etatChargement: number;
        initNavigation: () => void;
        isNavigationChargee: boolean;
        isSectionComplete: (titreSection: string) => boolean;
        setSectionComplete: (titreSection: string, estComplete: boolean) => void;
        isSectionFiabilisee: (titreSection: string) => boolean;
        setSectionFiabilisee: (titreSection: string, estFiabilisee: boolean) => void;
        isSectionVisible: (titreSection: string) => boolean;
        setSectionVisible: (titreSection: string, estVisible: boolean) => void;
        ajouterSection: (titrePage: string, identifiantSection: string, titreSection: string, urlSection: string, estComplete?: boolean) => void;
        supprimerSection: (titrePage: string, titreSection: string) => void;
        isFormulaireComplet: () => boolean;
        isFormulaireModifie: () => boolean;
        menu: Array<MyWay.UI.TotemBddComponent>;
        initSectionsModifiees: () => void;
        etatCivilModifie: boolean;
        coordonneesModifie: boolean;
        professionModifie: boolean;
        revenusModifie: boolean;
        chargesModifie: boolean;
        patrimoineImmobilierModifie: boolean;
        patrimoineFinancierModifie: boolean;
        projetsSensibilitesModifie: boolean;
        blocNotesModifie: boolean;
        relationLiensModifie: boolean;
        heritierAyantsDroitsModifie: boolean;
        donneesGestionModifie: boolean;
        successionModifie: boolean;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServicePatrimoineFinancier
     */
    interface IServicePatrimoineFinancier {
        listePatrimoineFinancier: ConnaissanceClient.Modeles.Tiers.IProduitsFinanciers[];
        listeTypeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[];
        estModifie: boolean;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServicePatrimoineImmobilier
     */
    interface IServicePatrimoineImmobilier {
        listePatrimoineImmobilier: any;
        listeTypeRelationEconomique: any;
        listeNatureOccupation: any;
        estModifie: boolean;
    }
}

declare module ServiceIhm {
    interface IServicePiedPage {
        annulerProcess: () => void;
        quitter: (titre: string, identifiantPersonne?: number) => void;
        debranchement: () => void;
        verifierDecesEtRelation: () => void;
        propagerCoordonnees: () => void;
        creer: (typePersonne: string, modification: boolean) => void;
        modifier: (typePersonne: string) => void;
        initSectionsModifiees: () => void;
        cloturer: () => void;
        navigationBDR: () => void;
        basculer: (typePersonne: string) => void;
        initActivitePro: () => void;
        documentsClient: () => void;
        enregistrerClient: () => void;
        pretPourCreation: boolean;
        ppe: boolean;
        identifiantElementStructure: any;
        identifiantPersonne: any;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        procedurePPETerminee: boolean;
        procedurePropagationTerminee: boolean;
        procedureLeaderDecedeTerminee: boolean;
    }
}

declare module ServiceIhm {
    /**
     * @interface IServiceProjetsSensibilites
     */
    interface IServiceProjetsSensibilites {
        listeParticulierProjet: any;
        listeParticulierSensibilite: any;
        estModifie: boolean;
    }
}

declare module ServiceIhm {
    interface IServiceRelation {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        listeTiersLies: ServiceDaoIhm.DaoTiersLies[];
        listeTiersLiesAdministratifs: ServiceDaoIhm.DaoTiersLiesAdministratif[];
        relationChargee: boolean;
        listeTypeRelationEconomique: any;
        init: () => void;
    }
}

declare module ServiceIhm {
    interface IServiceRevenus {
        listeRevenus: ServiceDaoIhm.DaoRevenu[];
        estModifie: boolean;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        totalRevenus: number;
        listeTypeRelationEconomique: any;
    }
}

declare module ServiceIhm {
    interface IServiceSuccession {
        PromesseSuccession: ng.IPromise<Object>;
        dateFinValide: string;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        listeSuccession: ServiceDaoIhm.DaoSuccession;
        afficherSuccession: () => void;
        retourSuccession: () => void;
        estModifie: boolean;
    }
}
declare module modService {
    interface IOperationSuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroOrdre: number;
        dateRecyclageSuccession: any;
        deuxiemePersonneEnRelation: number;
        numeroCaisse: string;
        codeTypeEpargneContrat: string;
        montantRecycleOrigineCE: number;
        montantRecycleAutreEtablissement: number;
        identifiantContactAssocie: number;
        identifiantInternePFMaj: number;
        designationAgent: string;
        dateMajRecyclageSuccession: any;
    }
    interface ISuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        dateOuvertureSuccession: any;
        dateFermetureSuccession: any;
        montantARecycler: number;
        dateModification: any;
        referenceExterneAgent: number;
        designationAgent: string;
        listeOperationSuccession: IOperationSuccession[];
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServiceBlocNotes
     * @class ServiceBlocNotesIHM
     */
    class ServiceBlocNotesIHM implements IServiceBlocNotes {
        private _Deloc;
        private _navigationTotemService;
        private _Constantes;
        private _tiersService;
        private _listeErreurs;
        private _DaoListeBlocNotes;
        private _estModifie;
        static $inject: string[];
        /**
         * Constructeur du service ServiceBlocNotes
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, navigationTotemService: modServices.INavigationService);
        listeBlocNotes: ConnaissanceClient.Modeles.Tiers.IBlocNote[];
        estModifie: boolean;
        onClickMenu(id1: any, id2: any): void;
    }
}

declare module ServiceIhm {
    class ServiceChargesIHM implements IServiceCharges {
        private listeChargesOriginale;
        private chargeImpositionOriginale;
        private _tierServices;
        private _listeCharges;
        private _listeChargesIhm;
        private _chargeImposition;
        private _totalCharges;
        private _estModifie;
        private _longueurListeChargesOriginale;
        private _DaoChargeImposition;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, tierServices: ITierService);
        estModifie: boolean;
        /**
         * Fonction permettant de formater une charge
         * @param charge {ServiceDaoIhm.IDaoCharge} La charge à formater
         * @return {ServiceDaoIhm.IDaoCharge} La charge formatée
         */
        formaterCharge(charge: ServiceDaoIhm.IDaoCharge): ServiceDaoIhm.IDaoCharge;
        chargeImposition: ConnaissanceClient.Modeles.Tiers.IChargeImposition;
        listeCharges: any;
        listeChargesIhm: any;
        totalCharges: number;
        totalCharge: number;
    }
}

declare module ServiceIhm {
    class ServiceCoordonneesIHM implements IServiceCoordonnees {
        private _listeAdressesOriginale;
        private _listeMediaOriginale;
        private _listeMobileOrigine;
        private _listeMailOrigine;
        private _listeMedia;
        private _tierServices;
        private _media;
        private _listeTelephoneFixe;
        private _listeTelephoneMobile;
        private _listeEMail;
        private _listeAdresse;
        private Constantes;
        private serviceChampsObligatoires;
        private NavigationService;
        private _listeAdresseIHM;
        private _rootScope;
        private _listeRetourDistribution;
        private _listeErreurs;
        private _listePatrimoineImmobilier;
        private _DaoListePatrimoineImmobilier;
        private _listeCompletudeAdresses;
        private _listeMediaErreur;
        private _listeMediaErreurTmp;
        private _listeAdressesErreurTmp;
        private _listeErreurOppositionTmp;
        private _isMediaValide;
        private _ServiceNavigation;
        private _estInitialisation;
        private _estModifie;
        private _estModifieMail;
        private _estModifieMobile;
        private _erreurAdresseEmployeur;
        private _listeChampsErreur;
        private _estModifiePropagation;
        private _oppositionTelephoneComplet;
        private _listeTelephoneFixeOriginale;
        private _telephoneFixeOriginale;
        private _listeMailOriginale;
        private _mailOriginale;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        residencePrincipale: ServiceDaoIhm.DaoPatrimoineImmobilier;
        setAdresseComplete: (codeTypeAdresse: string, complet: boolean) => void;
        newListeChampsObligatoireIHM: any;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, tierServices: ITierService, mediaService: DonneesAdministratives.IMediaService, $rootScope: any, Deloc: ConnaissanceClient.IDeloc, $filter: any, NavigationBddService: MyWay.UI.INavigationBddService, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceNavigation: ServiceIhm.IServiceNavigation);
        /**
         * Fonction permettant de formater une adresse
         * @param media {ServiceDaoIhm.IDaoAdresse} L'adresse Le media à formater
         * @return {ServiceDaoIhm.IDaoAdresse} L'adresse formatée
         */
        formaterAdresse(adresse: ServiceDaoIhm.IDaoAdresse): ServiceDaoIhm.IDaoAdresse;
        listeAdresse: any;
        listeAdresseIhm: any;
        listeRetourDistribution: any[];
        /**
         * Détermine si l'impression OPTIN est déclenchable automatiquement
         * @return {boolean} true si ll'impression OPTIN est déclenchable automatiquement
         */
        isOPTIN: () => boolean;
        /**
         * Fonction permettant d'afficher/masquer le bouton d'impression OPTIN
         * @return {boolean} true si le bouton doit être affiché
         */
        affichageBoutonOPTIN: () => boolean;
        checkMediaValide(media: ServiceDaoIhm.IDaoMedia): void;
        /**
         * Fonction permettant de formater un media
         * @param media {ServiceDaoIhm.IDaoMedia} Le media à formater
         * @return {ServiceDaoIhm.IDaoMedia} Le media formaté
         */
        formaterMedia(media: ServiceDaoIhm.IDaoMedia): ServiceDaoIhm.IDaoMedia;
        /**
         * Fonction permettant de contruire la liste des media avant pour l'enregistrer
         */
        construireListeMedia(): void;
        listeMedia: any;
        listeTelephoneFixe: any;
        listeTelephoneMobile: any;
        listeEMail: any;
        mobileOptIn: string;
        mailOptIn: string;
        listePatrimoineImmobilier: any;
        estInitialisation: boolean;
        estComplet: boolean;
        listeChampsErreur: any[];
        estModifie: boolean;
        erreurAdresseEmployeur: boolean;
        estModifiePropagation: boolean;
        setChampsObligatoire(champs: any): void;
        deleteChampsObligatoire(champs: any): void;
        setModifieIndicateurOpposition(indicateurOppositionTelephone: boolean, oppositionTelephone: number): void;
    }
}

declare module ServiceIhm {
    interface IDX30 {
        COCXBQ: string;
        CTDSPA: string;
        LVDSPA: string;
    }
    class ServiceDonneesDelocIHM implements IServiceDonneesDeloc {
        private Constantes;
        private $q;
        static $inject: string[];
        private _exclumineur;
        private _deloc;
        private tiersService;
        constructor(Constantes: any, Deloc: any, tierServices: ITierService, $q: any);
        getExcluMineur(): any;
        ExcluMineur: boolean;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServiceDonneesGestion
     * @class ServiceDonneesGestionIHM
     */
    class ServiceDonneesGestionIHM implements IServiceDonneesGestion {
        private Constantes;
        private Deloc;
        private tierServices;
        private $filter;
        private ServicesChampsObligatoires;
        private restitueSuiviCommercialService;
        private _listeErreurs;
        private serviceChampsObligatoires;
        private _portefeuilleTMP;
        private _portefeuille;
        private _agenceDestinataire;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        manifestationPersonne: ServiceDaoIhm.DaoManifestationPersonne;
        identification: ServiceDaoIhm.DaoIdentification;
        newListeChampsObligatoireIHM: any;
        static $inject: string[];
        /**
         * Constructeur du service ServiceDonneesGestion
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, restitueSuiviCommercialService: any);
        init(): void;
        getPortefeuille(): void;
        portefeuilleTMP: string;
        portefeuille: any;
        agenceDestinataire: number;
        estComplet: boolean;
        estModifie: boolean;
        setChampsObligatoire(champs: any): void;
        deleteChampsObligatoire(champs: any): void;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServiceDonneesProfesionnelles
     * @class ServiceDonneesProfesionnellesIHM
     */
    class ServiceDonneesProfesionnellesIHM implements IServiceDonneesProfessionnelles {
        private _particulierInformationOriginal;
        private _Deloc;
        private _navigationTotemService;
        private _Constantes;
        private _tiersService;
        private _listeErreurs;
        private Constantes;
        private serviceChampsObligatoires;
        private _indicateurArtisan;
        private _listeChampsErreur;
        private _afficherNavigationBDR;
        private _estModifieCatégorieSocioProfessionnelle;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        adresseEmployeur: ServiceDaoIhm.DaoAdresseEmployeur;
        newListeChampsObligatoireIHM: any;
        static $inject: string[];
        /**
         * Constructeur du service ServiceDonneesProfesionnelles
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, navigationTotemService: modServices.INavigationService, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
        init(): void;
        estVisibleDateFinContrat(Ctrl: any): boolean;
        onClickMenu(id1: any, id2: any): void;
        listeChampsErreur: string[];
        estComplet: boolean;
        estModifie: boolean;
        estModifieCatégorieSocioProfessionnelle: boolean;
        codeTypeContratTravail: string;
        appartenanceReseau: boolean;
        setChampsObligatoire(champs: any): void;
        deleteChampsObligatoire(champs: any): void;
        indicateurArtisan: boolean;
        afficherNavigationBDR: boolean;
    }
}

declare module ServiceIhm {
    class ServiceEtatCivilIHM implements IServiceEtatCivil {
        private particulierInformationOriginal;
        private Deloc;
        private NavigationService;
        private Constantes;
        private tiersService;
        private Tools;
        private _dateJour;
        private _date150;
        private _listeErreurs;
        private _particulierInformation;
        private serviceChampsObligatoires;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        private _listeChampsEtatCivil;
        private _tableauCodes;
        newListeChampsObligatoireIHM: any;
        private _designationEnregistree;
        private _decede;
        private _erreurDateDecesHabilitation;
        private _listeChampsErreur;
        private _localiteNaissanceGeneree;
        private tempoErreurDate;
        private _dateNaissanceOK;
        private _dateDecesOK;
        private _dateDecesPresumeOK;
        private _dateNaturalisationOK;
        private _dateObtentionPieceJustificativeOK;
        private _dateEffetSituationFamilialeMessageOK;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService, $filter: any, NavigationBddService: MyWay.UI.INavigationBddService, Tools: any, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
        init(): void;
        localiteNaissanceGeneree: boolean;
        codePaysNaissance: string;
        setListeErreurs(erreur: string): void;
        annulerErreur(erreur: string): void;
        estMajeur: boolean;
        estMarie: boolean;
        dateNaissanceMessage: string;
        dateDecesMessage: string;
        dateDecesPresumeMessage: string;
        dateNaturalisationMessage: string;
        dateObtentionPieceJustificativeMessage: string;
        dateEffetSituationFamilialeMessage: string;
        designationEnregistree: string;
        decede: boolean;
        erreurDateDecesHabilitation: boolean;
        listeChampsErreur: any[];
        estComplet: boolean;
        estModifie: boolean;
        estVisible: boolean;
        setChampsObligatoire(champs: any): void;
        deleteChampsObligatoire(champs: any): void;
    }
}

declare module ServiceIhm {
    class ServiceHeritiersAyantDroitIHM implements IServiceHeritiersAyantDroit {
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        private _ServiceRelation;
        private _estModifie;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, tierServices: ITierService, Deloc: ConnaissanceClient.IDeloc, $filter: any, ServiceRelation: ServiceIhm.IServiceRelation);
        listeTypeRelationEconomique: any;
        estModifie: boolean;
    }
}

declare module ConnaissanceClient.Service {
    class LiensRelationService {
        private Deloc;
        private Constantes;
        static $inject: string[];
        constructor(Deloc: ConnaissanceClient.IDeloc, Constantes: Menu.IConstantes);
        /**
         * Permet d'afficher le pictogramme en fonction de la civilité et de l'age de la personne
         * @param pictogramme:string
         * @param codeCivilité: string
         * @param age:string
         */
        afficherPictogramme(codeCivilite: string, dateNaissance: string, dateDuJour: Date, codePersonnaliteJuridique: string): string;
        /**
         * Permet de calculer l'age d'une personne à partir de sa date de naissance et de la date du jour
         * @param dateNaissance:Date
         * @param dateDuJour:Date
         */
        calculerAgePersonne(dateNaissance: string, dateDuJour: Date): number;
        /**
         * Permet de retourner le libellé su sens du lien à partie du code sens
         * @param codeSens:string
         */
        afficherSensLienInterPersonne(codeSens: string): string;
        /**
         * Permet de retourner le libellé su sens du lien à partie du code sens
         * @param codeType:string
         */
        afficherTypeLienInterPersonne(codeType: string): string;
        /**
         * Permet d'afficher la designation courte de la personne
         * @param designationCourte:string
         */
        afficherDesignationCourte(designationCourte: string): string;
        /**
         * Permet d'afficher l'identifiant de la personne
         * @param identifiantPersonne:number
         */
        afficherIdentifiantPersonne(identifiantPersonne: number): string;
        /**
         * Permet de définir si la personne est un PRO
         * @param codeQualitePersonneRelation:string
         */
        personnePro(codeQualitePersonneRelation: string): boolean;
        /**
         * Permet de définir si la personne est présente dans la relation de la personne courante
         * @param identifiantPersonne:number
         */
        personneIntegreeALaRelation(identifiantPersonne: number, listeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[][]): boolean;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServiceNavigation
     * @class ServiceNavigationIHM
     */
    class ServiceNavigationIHM implements IServiceNavigation {
        private _listeSectionsVisibles;
        private _navigation;
        private _isNavigationChargee;
        private _Constantes;
        private _tierServices;
        private _NavigationService;
        private _sectionsModifiees;
        etatChargement: number;
        initNavigation: () => void;
        initInformationsComplementaires: () => void;
        isSectionComplete: (titreSection: string) => boolean;
        setSectionComplete: (titreSection: string, estComplete: boolean) => void;
        isSectionFiabilisee: (titreSection: string) => boolean;
        setSectionFiabilisee: (titreSection: string, estFiabilisee: boolean) => void;
        isSectionVisible: (titreSection: string) => boolean;
        setSectionVisible: (titreSection: string, estVisible: boolean) => void;
        ajouterSection: (titrePage: string, identifiantSection: string, titreSection: string, urlSection: string, estComplete?: boolean) => void;
        supprimerSection: (titrePage: string, titreSection: string) => void;
        isFormulaireComplet: () => boolean;
        isFormulaireModifie: () => boolean;
        menu: Array<MyWay.UI.TotemBddComponent>;
        initSectionsModifiees: () => void;
        static $inject: string[];
        /**
         * Constructeur du service ServiceNavigation
         * @param Constantes {Menu.IConstantes} Constantes
         */
        constructor(Constantes: Menu.IConstantes, ParamConnaissanceClient: any, NavigationBddService: MyWay.UI.NavigationBddService, tierServices: ITierService, $timeout: ng.ITimeoutService);
        isNavigationChargee: boolean;
        etatCivilModifie: boolean;
        coordonneesModifie: boolean;
        professionModifie: boolean;
        revenusModifie: boolean;
        chargesModifie: boolean;
        patrimoineImmobilierModifie: boolean;
        patrimoineFinancierModifie: boolean;
        projetsSensibilitesModifie: boolean;
        blocNotesModifie: boolean;
        relationLiensModifie: boolean;
        heritierAyantsDroitsModifie: boolean;
        donneesGestionModifie: boolean;
        successionModifie: boolean;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServicePatrimoineFinancier
     * @class ServicePatrimoineFinancierIHM
     */
    class ServicePatrimoineFinancierIHM implements IServicePatrimoineFinancier {
        private _DaoListePatrimoineFinancier;
        private _Deloc;
        private _navigationTotemService;
        private _Constantes;
        private _tiersService;
        private _listeErreurs;
        private _estModifie;
        static $inject: string[];
        /**
         * Constructeur du service ServicePatrimoineFinancier
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, navigationTotemService: modServices.INavigationService, ServiceRelation: IServiceRelation);
        listePatrimoineFinancier: ConnaissanceClient.Modeles.Tiers.IProduitsFinanciers[];
        listeTypeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[];
        estModifie: boolean;
        onClickMenu(id1: any, id2: any): void;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServicePatrimoineImmobilier
     * @class ServicePatrimoineImmobilierIHM
     */
    class ServicePatrimoineImmobilierIHM implements IServicePatrimoineImmobilier {
        private _DaoListePatrimoineImmobilier;
        private _Deloc;
        private _navigationTotemService;
        private _Constantes;
        private _tiersService;
        private _listeErreurs;
        private _listeNatureOccupation;
        private _estModifie;
        static $inject: string[];
        /**
         * Constructeur du service ServicePatrimoineImmobilier
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, navigationTotemService: modServices.INavigationService, ServiceRelation: IServiceRelation);
        estModifie: boolean;
        listePatrimoineImmobilier: ConnaissanceClient.Modeles.Tiers.IPatrimoineImmobilier[];
        listeTypeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[];
        listeNatureOccupation: string[];
    }
}

declare module ServiceIhm {
    class ServicePiedPageIHM implements IServicePiedPage {
        private _pretPourCreation;
        private _ppe;
        private _identifiantElementStructure;
        private _particulierInformation;
        private _identifiantPersonne;
        private _encours;
        private _tier;
        private _tierOriginal;
        private _ServiceNavigation;
        private _habilitationsService;
        private _procedurePPETerminee;
        private _procedurePropagationTerminee;
        private _procedureLeaderDecedeTerminee;
        private _lancerCallBackEnregistrement;
        private _callBackEnregistrement;
        private _creerClient;
        private _$q;
        annulerProcess: () => void;
        quitter: (titre: string, identifiantPersonne?: number) => ng.IPromise<Object>;
        debranchement: () => void;
        verifierDecesEtRelation: () => void;
        propagerCoordonnees: () => void;
        creer: (typePersonne: string, modification: boolean) => void;
        modifier: (typePersonne: string) => void;
        initSectionsModifiees: () => void;
        cloturer: () => void;
        navigationBDR: () => void;
        basculer: (typePersonne: string) => void;
        initActivitePro: () => void;
        documentsClient: () => void;
        enregistrerClient: () => void;
        static $inject: string[];
        constructor($timeout: any, $rootScope: ng.IScope, $window: any, Deloc: ConnaissanceClient.IDeloc, Constantes: Menu.IConstantes, Tools: any, $filter: any, FraicheurRubrique: FraicheurRubrique.IFraicheurService, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, adresseService: DonneesAdministratives.IAdresseService, etatCivilService: DonneesAdministratives.IEtatCivilService, donneesFinancieresService: DonneesAdministratives.IDonneesFinancieresService, habilitationsService: Habilitations.IHabilitationsService, relationServices: Relation.IRelationService, ServiceRelation: ServiceIhm.IServiceRelation, CNILServices: CNIL.IObjetServiceCNIL, modalService: MyWay.UI.ModalService, ServiceEtatCivil: ServiceIhm.IServiceEtatCivil, ServiceCoordonnees: ServiceIhm.IServiceCoordonnees, PortailAgent: MyWay.Services.ServiceAgentExtended, Contexte: ConnCliContexte.IContexte, ServiceNavigation: ServiceIhm.IServiceNavigation, restitueSuiviCommercialService: myway.comGestCommerciale.RestitueSuiviCommercialService, ServiceDonneesGestion: ServiceIhm.IServiceDonneesGestion, ServicePatrimoineImmobilier: ServiceIhm.IServicePatrimoineImmobilier, ServiceRevenus: ServiceIhm.IServiceRevenus, navigationTotemService: any, ServiceSuccession: ServiceIhm.IServiceSuccession, drcService: modService.IDrcService, printService: any, ServiceDonneesProfesionnelles: ServiceIhm.IServiceDonneesProfessionnelles, NavigationBddService: any, tierServices: ITierService, ServiceCharges: ServiceIhm.ServiceChargesIHM, ServiceProjetsSensibilites: ServiceIhm.IServiceProjetsSensibilites, ServiceBlocNotes: ServiceIhm.IServiceBlocNotes, $q: ng.IQService);
        pretPourCreation: boolean;
        ppe: boolean;
        identifiantElementStructure: any;
        identifiantPersonne: any;
        isFormulaireCompletEtModifie: boolean;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        procedurePPETerminee: boolean;
        procedurePropagationTerminee: boolean;
        procedureLeaderDecedeTerminee: boolean;
    }
}

declare module ServiceIhm {
    /**
     * Classe du service ServiceProjetsSensibilites
     * @class ServiceProjetsSensibilitesIHM
     */
    class ServiceProjetsSensibilitesIHM implements IServiceProjetsSensibilites {
        private _Deloc;
        private _navigationTotemService;
        private _Constantes;
        private _tiersService;
        private _listeErreurs;
        private _DaoListeParticulierProjet;
        private _DaoListeParticulierSensibilite;
        private _estModifie;
        static $inject: string[];
        /**
         * Constructeur du service ServiceDonneesProfesionnelles
         * @param Constantes {Menu.IConstantes} Constantes
         * @param Deloc {ConnaissanceClient.IDeloc}
         * @param tierServices {ITierService}
         * @param $filter {ng.IFilterService} Fonctions de filtre
         * @param navigationTotemService {modServices.INavigationService}
         */
        constructor(Constantes: Menu.IConstantes, Deloc: any, tierServices: ITierService, $filter: any, navigationTotemService: modServices.INavigationService);
        estModifie: boolean;
        listeParticulierProjet: ConnaissanceClient.Modeles.Tiers.IProjet[];
        listeParticulierSensibilite: ConnaissanceClient.Modeles.Tiers.ISensibilite[];
    }
}

declare module ServiceIhm {
    class ServiceRelationIHM implements IServiceRelation {
        private $q;
        tiersLiesAdministratifs: ServiceDaoIhm.DaoTiersLiesAdministratif[];
        private Deloc;
        private tiersService;
        private NavigationService;
        private Constantes;
        private ServiceTiersLies;
        private relationServices;
        private _tableauCodes;
        private _relationChargee;
        private _relationEncoursDeChargement;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        private serviceChampsObligatoires;
        listeTiersLies: ServiceDaoIhm.DaoTiersLies[];
        listeTiersLiesAdministratifs: ServiceDaoIhm.DaoTiersLiesAdministratif[];
        private _listeTypeRelationEconomique;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService, $filter: any, NavigationBddService: MyWay.UI.INavigationBddService, ServiceTiersLies: ServiceIhm.ServiceTiersLiesIHM, relationServices: any, $rootScope: any, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, $q: ng.IQService);
        init(forcer?: boolean): ng.IPromise<any>;
        listeTypeRelationEconomique: any;
        relationChargee: boolean;
    }
}

declare module ServiceIhm {
    class ServiceRevenusIHM implements IServiceRevenus {
        private _listeRevenusOriginale;
        private _listeRevenus;
        private _tierServices;
        private Constantes;
        private serviceChampsObligatoires;
        private _totalRevenus;
        private _listeTypeRelationEconomique;
        private _estModifie;
        private serviceRelation;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, tierServices: ITierService, Deloc: any, $filter: any, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService, ServiceRelation: ServiceIhm.ServiceRelationIHM);
        estModifie: boolean;
        listeRevenus: any;
        totalRevenus: number;
        listeTypeRelationEconomique: any;
    }
}

declare module ServiceIhm {
    class ServiceSuccessionIHM implements IServiceSuccession {
        private Constantes;
        private factorySuccession;
        private urlSuccession;
        private $q;
        private heritiersService;
        private _listeSuccessionTiers;
        private _tierServices;
        private _succession;
        listeAyantDroit: any;
        PromesseSuccession: ng.IPromise<Object>;
        Factory: IFactorySuccession;
        CodeEtablissement: string;
        identifiantPersonne: string;
        indicateurListe: string;
        retourOK: boolean;
        succession: ServiceDaoIhm.DaoSuccession;
        listeSuccession: ServiceDaoIhm.DaoSuccession;
        TauxRecyclage: any;
        $Q: ng.IQService;
        particulierInformation: ServiceDaoIhm.DaoParticulierInformation;
        afficherSuccession: () => void;
        retourSuccession: () => void;
        private _estModifie;
        newListeChampsObligatoireIHM: any;
        private _Constantes;
        private serviceChampsObligatoires;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, factorySuccession: IFactorySuccession, urlSuccession: string, $q: ng.IQService, heritiersService: any, tierServices: ITierService, $timeout: ng.ITimeoutService, Deloc: ConnaissanceClient.IDeloc, $filter: any, ServiceNavigation: ServiceIhm.IServiceNavigation, ServicesChampsObligatoires: ChampsObligatoires.IChampsObligatoiresService);
        dateFinValide: string;
        estModifie: boolean;
        preparerDonneesSucession(tierServices: any): ng.IPromise<{}>;
    }
}

declare module ServiceIhm {
    class ServiceTiersLiesIHM {
        TiersLies: ServiceDaoIhm.DaoTiersLiesAdministratif[];
        tiersLies: any;
        tiersLiesAdministratifs: any;
        private Deloc;
        private tiersService;
        private relationServices;
        private NavigationService;
        private Constantes;
        private _tableauCodes;
        static $inject: string[];
        constructor(Constantes: Menu.IConstantes, Deloc: ConnaissanceClient.IDeloc, tierServices: ITierService, $filter: any, NavigationBddService: MyWay.UI.INavigationBddService, relationServices: Relation.IRelationService);
        checkCapacite(callback: any): void;
        setTiersLies(tierLies: ConnaissanceClient.Modeles.Tiers.ITiersLies[]): void;
        setTiersLiesAdministratifs(tierLiesAdministratifs: ConnaissanceClient.Modeles.Tiers.ITiersLiesAdministratif[]): void;
        getTiersLies(): void;
    }
}



declare module ServiceDaoIhm {
    class DaoAdresse implements ConnaissanceClient.Modeles.Tiers.IAdresse {
        adresse: ConnaissanceClient.Modeles.Tiers.IAdresse;
        private _agenceRattachement;
        private _codeAccesMinitel;
        private _codeEtablissement;
        private _codeExistenceListeRouge;
        private _codeInseeLocalite;
        private _codeInseePays;
        private _codeISOPays;
        private _codePostalFranceEtEtranger;
        private _codePostalPTT;
        private _codeQualiteAgent;
        private _codeQuartier;
        private _codeRetourDistribution;
        private _codeTypeAdresse;
        private _commentaireTelephone;
        private _dateDernierRetourPTT;
        private _identifiantAdresse;
        private _identifiantAgent;
        private _identifiantPersonne;
        private _indicateurDetentionTelephone;
        private _indicateurDifferencePostaleFiscale;
        private _indicateurEnvoiCourrier;
        private _libelleDifferencePostaleFiscale;
        private _libelleEnvoiCourrier;
        private _libelleInseeLocalite;
        private _libelleISOPays;
        private _libelleTypeAdresse;
        private _ligne1AdresseAFNOR;
        private _ligne2AdresseAFNOR;
        private _ligne3AdresseAFNOR;
        private _ligne4AdresseAFNOR;
        private _ligne5AdresseAFNOR;
        private _ligne6AdresseAFNOR;
        private _ligne7AdresseAFNOR;
        private _numeroChronoLieuActivite;
        private _numeroChronoProfessionnel;
        private _numeroFax;
        private _numeroTelephoneAdresse;
        private _numeroTourneeFacteur;
        private _numeroVoieHexavia;
        private _numeroVoiePTT;
        private _typePersonne;
        private serviceChampsObligatoires;
        champsObligatoires: any[];
        private _modifie;
        private _estValide;
        estValide: () => boolean;
        champsEnErreur: Array<string>;
        agenceRattachement: number;
        codeAccesMinitel: any;
        codeEtablissement: string;
        codeExistenceListeRouge: any;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeISOPays: string;
        codePostalFranceEtEtranger: any;
        codePostalPTT: string;
        codeQualiteAgent: string;
        codeQuartier: any;
        codeRetourDistribution: any;
        codeTypeAdresse: string;
        commentaireTelephone: any;
        dateDernierRetourPTT: any;
        identifiantAdresse: number;
        identifiantAgent: number;
        identifiantPersonne: number;
        indicateurDetentionTelephone: any;
        indicateurDifferencePostaleFiscale: string;
        indicateurEnvoiCourrier: string;
        libelleDifferencePostaleFiscale: any;
        libelleEnvoiCourrier: any;
        libelleInseeLocalite: any;
        libelleISOPays: string;
        libelleTypeAdresse: any;
        ligne1AdresseAFNOR: any;
        ligne2AdresseAFNOR: any;
        ligne3AdresseAFNOR: any;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: any;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: any;
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        numeroFax: any;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        typePersonne: string;
        verifierChampsObligatoires(dao: any): void;
        constructor(adresse?: ConnaissanceClient.Modeles.Tiers.IAdresse);
    }
}

declare module ServiceDaoIhm {
    class DaoAdresseEmployeur implements ConnaissanceClient.Modeles.Tiers.IAdresseEmployeur {
        private adresseEmployeur;
        private _codeEtablissement;
        private _codeISOPays;
        private _codeInseePays;
        private _codeTypeRetourPTT;
        private _dateCreationAdresse;
        private _dateDernierRetourPTTAdresse;
        private _dateDerniereMAJAdresse;
        private _dateRestructurationAdresse;
        private _identifiantPersonne;
        private _ligne2AdresseAFNOR;
        private _ligne3AdresseAFNOR;
        private _ligne4AdresseAFNOR;
        private _ligne5AdresseAFNOR;
        private _ligne6AdresseAFNOR;
        private _nomEmployeurParticulier;
        private _nombreModificationAdresse;
        private _nombreRetourPTT;
        codeEtablissement: string;
        identifiantPersonne: number;
        codeISOPays: string;
        codeInseePays: string;
        codeTypeRetourPTT: string;
        dateCreationAdresse: string;
        dateDernierRetourPTTAdresse: string;
        dateDerniereMAJAdresse: string;
        dateRestructurationAdresse: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nomEmployeurParticulier: string;
        nombreModificationAdresse: number;
        nombreRetourPTT: number;
        constructor(adresseEmployeur: ConnaissanceClient.Modeles.Tiers.IAdresseEmployeur);
    }
}

declare module ServiceDaoIhm {
    class DaoCharge implements ConnaissanceClient.Modeles.Tiers.ICharge {
        dao: ConnaissanceClient.Modeles.Tiers.ICharge;
        codeEtablissement: string;
        codeTypeCharge: string;
        dateDebutValiditeCharge: any;
        dateFinValiditeCharge: any;
        identifiantPersonne: any;
        identifiantRelationEconomique: any;
        montantChargeAnnuel: number;
        montantPeriodiqueCharge: number;
        nombrePeriode: number;
        numeroOrdreCharge: number;
        constructor(charge: ConnaissanceClient.Modeles.Tiers.ICharge);
    }
}

declare module ServiceDaoIhm {
    class DaoChargeImposition {
        chargeImposition: ConnaissanceClient.Modeles.Tiers.IChargeImposition;
        private _anneeReferenceImposition;
        private _codeEtablissement;
        private _dateModificationMntImpotRevenu;
        private _dateModificationTaxeFonciere;
        private _dateModificationTaxeHabitation;
        private _identifiantPersonne;
        private _identifiantRelationEconomique;
        private _indicMntImpot;
        private _indicMntTaxeHabitat;
        private _indicMtTaxeFonciere;
        private _indicPaiementISF;
        private _mntImpotRevenu;
        private _mntISF;
        private _mntRevenuImposable;
        private _mntTaxeFonciere;
        private _mntTaxeHabitation;
        private _nombrePartsImposition;
        private _reductionImpots;
        private _typeTrancheImposition;
        anneeReferenceImposition: string;
        codeEtablissement: string;
        dateModificationMntImpotRevenu: number;
        dateModificationTaxeFonciere: number;
        dateModificationTaxeHabitation: any;
        identifiantPersonne: any;
        identifiantRelationEconomique: number;
        indicMntImpot: number;
        indicMntTaxeHabitat: string;
        indicMtTaxeFonciere: string;
        indicPaiementISF: number;
        mntImpotRevenu: number;
        mntISF: number;
        mntRevenuImposable: number;
        mntTaxeFonciere: number;
        mntTaxeHabitation: number;
        nombrePartsImposition: number;
        reductionImpots: ConnaissanceClient.Modeles.Tiers.IReductionImpot[];
        typeTrancheImposition: string;
        constructor(chargeImposition: ConnaissanceClient.Modeles.Tiers.IChargeImposition);
    }
}

declare module ServiceDaoIhm {
    class DaoIdentification implements ServiceDaoIhm.IDaoIdentification {
        private identification;
        private _identifiantPersonne;
        private _codePersonnaliteJuridique;
        private _libellePersonnaliteJuridique;
        private _codeStatut;
        private _libelleStatut;
        private _codeTypeRelation;
        private _libelleTypeRelation;
        private _dateEntreeRelation;
        private _codeMarche;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: string;
        libelleStatut: any;
        codeTypeRelation: string;
        libelleTypeRelation: any;
        dateEntreeRelation: number;
        codeMarche: Tier.ICodeMarche;
        constructor(identification: ConnaissanceClient.Modeles.Tiers.IIdentification);
    }
}

declare module ServiceDaoIhm {
    class DaoListeBlocNotes {
        tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        private _listeBlocNotes;
        constructor(tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal);
        listeBlocNotes: ConnaissanceClient.Modeles.Tiers.IBlocNote[];
    }
}

declare module ServiceDaoIhm {
    class DaoListeParticulierProjet {
        tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        private _listeParticulierProjet;
        constructor(tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal);
        listeParticulierProjet: ConnaissanceClient.Modeles.Tiers.IProjet[];
    }
}

declare module ServiceDaoIhm {
    class DaoListeParticulierSensibilite {
        tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        private _listeParticulierSensibilite;
        constructor(tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal);
        listeParticulierSensibilite: ConnaissanceClient.Modeles.Tiers.ISensibilite[];
    }
}

declare module ServiceDaoIhm {
    class DaoListePatrimoineFinancier {
        private _listePatrimoineFinancier;
        tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        constructor(tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal);
        listePatrimoineFinancier: ConnaissanceClient.Modeles.Tiers.IProduitsFinanciers[];
        listeTypeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[];
    }
}

declare module ServiceDaoIhm {
    class DaoListePatrimoineImmobilier {
        private _listePatrimoineImmobilier;
        tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal;
        constructor(tier: ConnaissanceClient.Modeles.Tiers.IObjetPrincipal);
        listePatrimoineImmobilier: ConnaissanceClient.Modeles.Tiers.IPatrimoineImmobilier[];
        listeTypeRelationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique[];
    }
}

declare module ServiceDaoIhm {
    class DaoManifestationPersonne implements ServiceDaoIhm.IDaoManifestationPersonne {
        setManifestationPersonne: ConnaissanceClient.Modeles.Tiers.IManifestationPersonne;
        private _identifiantPersonne;
        private _codeEtablissement;
        private _codePersonnaliteJuridique;
        private _codeStatutDeces;
        private _dateDecesPersonne;
        private _dateDerniereManifestation;
        private _codeProvenanceManifestation;
        private _libelleDetailEvtManifestation;
        private _dateCreationMajEnregistrement;
        private _idAgentAppliCreationMaj;
        champsObligatoires: any[];
        private _modifie;
        identifiantPersonne: number;
        codeEtablissement: string;
        codePersonnaliteJuridique: string;
        codeStatutDeces: string;
        dateDecesPersonne: string;
        dateDerniereManifestation: string;
        codeProvenanceManifestation: string;
        libelleDetailEvtManifestation: string;
        dateCreationMajEnregistrement: string;
        idAgentAppliCreationMaj: string;
        estModifie: boolean;
        verifierChampsObligatoires(dao: any): void;
        constructor(manifestationPersonne: ConnaissanceClient.Modeles.Tiers.IManifestationPersonne, particulierInformation: ServiceDaoIhm.DaoParticulierInformation);
    }
}

declare module ServiceDaoIhm {
    class DaoMedia implements ConnaissanceClient.Modeles.Tiers.IMedia {
        media: ConnaissanceClient.Modeles.Tiers.IMedia;
        private _codeEtablissement;
        private _codeTypeMedia;
        private _codeTypeUsageMedia;
        private _identifiantPersonne;
        private _indicateurEnvoiCourrier;
        private _indicateurOppositionTelephone;
        private _indicateurOPTIN;
        private _indicateurPreferenceMedia;
        private _indicateurProOptout;
        private _indicateurSecu;
        private _indicatifTel;
        private _libelleTypeMedia;
        private _libelleTypeUsageMedia;
        private _numeroChronoLieuActivite;
        private _numeroChronoProfessionnel;
        private _referenceAccesMedia;
        private _typePersonne;
        codeEtablissement: string;
        codeTypeMedia: string;
        codeTypeUsageMedia: string;
        identifiantPersonne: number;
        indicateurEnvoiCourrier: string;
        indicateurOppositionTelephone: string;
        indicateurOPTIN: string;
        indicateurPreferenceMedia: string;
        indicateurProOptout: string;
        indicateurSecu: string;
        indicatifTel: string;
        libelleTypeMedia: string;
        libelleTypeUsageMedia: string;
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        referenceAccesMedia: string;
        typePersonne: any;
        constructor(media: ConnaissanceClient.Modeles.Tiers.IMedia);
    }
}

declare module ServiceDaoIhm {
    class DaoOperationSuccession implements ServiceDaoIhm.IDaoOperationSuccession {
        private _identifiantPersonne;
        private _codeEtablissement;
        private _numeroOrdre;
        private _dateRecyclageSuccession;
        private _deuxiemePersonneEnRelation;
        private _numeroCaisse;
        private _codeTypeEpargneContrat;
        private _montantRecycleOrigineCE;
        private _montantRecycleAutreEtablissement;
        private _identifiantContactAssocie;
        private _identifiantInternePFMaj;
        private _designationAgent;
        private _dateMajRecyclageSuccession;
        daoOperationSuccession: ConnaissanceClient.Modeles.Tiers.IOperationSuccession;
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroOrdre: number;
        dateRecyclageSuccession: any;
        deuxiemePersonneEnRelation: number;
        numeroCaisse: string;
        codeTypeEpargneContrat: string;
        montantRecycleOrigineCE: number;
        montantRecycleAutreEtablissement: number;
        identifiantContactAssocie: number;
        identifiantInternePFMaj: number;
        designationAgent: string;
        dateMajRecyclageSuccession: any;
        constructor(operationSuccession: modService.IOperationSuccession);
    }
}

declare module ServiceDaoIhm {
    class DaoParticulierInformation {
        particulierInformation: ConnaissanceClient.Modeles.Tiers.IParticulierInformation;
        private _modifie;
        private _modifieCatégorieSocioProfessionnelle;
        private _autresPrenom;
        private _categorieSocioprofessionnelle;
        private _codeAccesMinitel;
        private _codeAppartenanceReseau;
        private _codeBlocageVAO;
        private _codeCapaciteJuridique;
        private _codeCivilite;
        private _codeCommuneNaissance;
        private _codeDepartementNaissance;
        private _codeEtablissement;
        private _codeExistenceListeRouge;
        private _codeFamilleNAFINSEE;
        private _codeFamilleCategorieJuridique;
        private _codeCategorieJuridiqueDeuxDern;
        private _codeGuichetRisque;
        private _codeInseeLocalite;
        private _codeInseePays;
        private _codeInseePaysDoubleNationalite;
        private _codeInseePaysNationnalite;
        private _codeISOPays;
        private _codePaysNaissance;
        private _codePieceJustif;
        private _codePostalFranceEtEtranger;
        private _codePostalPTT;
        private _codeQuartier;
        private _codeRegimeMatrimonial;
        private _codeRetourDistribution;
        private _codeResident;
        private _codeSecteurEmploi;
        private _codeSexe;
        private _codeSituationFamiliale;
        private _codeTypeAdresse;
        private _codeTypeContratTravail;
        private _codeTypeNIF;
        private _codeValiditeAdresseUNIVERS;
        private _commentaireTelephone;
        private _dateDeces;
        private _dateDecesPresume;
        private _dateEffetCSP;
        private _dateEffetOptionResidence;
        private _dateEffetSituationFamiliale;
        private _dateEmbaucheEmployeurActuel;
        private _dateFinContratTravail;
        private _dateNaissance;
        private _dateNaissanceConjoint;
        private _dateNaturalisation;
        private _dateObtentionPieceJustificative;
        private _dernierChangement;
        private _designationCourte;
        private _domiciliationRevenu;
        private _indicateurDomiciliationRevenu;
        private _droitAuCompte;
        private _edsDomiciliation;
        private _edsInterneDomiciliation;
        private _eligibiliteFGDR;
        private _gestionPrivee;
        private _horsPresenceClient;
        private _identifiantAdresse;
        private _identifiantPersonne;
        private _identifiantRelationtEconomique;
        private _indicateurActiviteProfessionnel;
        private _indicateurAutoEntrepreneur;
        private _indicAutoEntrepreneur;
        private _indicateurDetentionTelephone;
        private _indicateurEnvoiCourrier;
        private _indicEnvoiCourrier;
        private _indicateurSocietaire;
        private _indicDecesPresume;
        private _indicDonationEntreEpoux;
        private _indiceAmericaniteFATCA;
        private _appartenanceReseau;
        private _libelleAppartenanceReseau;
        private _libelleCapaciteJuridique;
        private _libelleCategorieSocioprofessionnelle;
        private _libelleCivilite;
        private _libelleCommuneNaissance;
        private _libelleDepartementNaissance;
        private _libelleInseeLocalite;
        private _libelleInseePaysDoubleNationalite;
        private _libelleNAFInsee;
        private _libellePaysNaissance;
        private _libellePaysNationnalite;
        private _libelleProfession;
        private _libelleRegimeMatirimonial;
        private _libelleSexe;
        private _libelleSituationFamiliale;
        private _libelleSocietaire;
        private _libelleTypeContratTravail;
        private _ligne2AdresseAFNOR;
        private _ligne3AdresseAFNOR;
        private _ligne4AdresseAFNOR;
        private _ligne5AdresseAFNOR;
        private _ligne6AdresseAFNOR;
        private _nif;
        private _nombreEnfantACharge;
        private _nomEmployeur;
        private _nomFamillePersonnePhysique;
        private _nomMarital;
        private _numeroFax;
        private _numeroTelephoneAdresse;
        private _numeroTourneeFacteur;
        private _numeroVoieHexavia;
        private _numeroVoiePTT;
        private _oppositionTelephonePerso;
        private _oppositionTelephonePro;
        private _indicateurOppositionTelephone;
        private _prenom;
        private _refPieceJustificative;
        private _sirenEmployeur;
        private _sirenAutoEntrepreneur;
        private _statutPro;
        private _telephoneFixePro;
        private _troisDerniersCaracteresNAF;
        private _typeClauseMatrimoniale;
        private _dateNaissanceModifiee;
        private PortailAgent;
        private serviceChampsObligatoires;
        champsObligatoires: any[];
        private _estValide;
        estValide: () => boolean;
        champsEnErreur: Array<string>;
        private Deloc;
        private Constantes;
        private _designationEnregistree;
        getListeDesignations: () => Array<any>;
        listeCivilites: Array<string>;
        estMajeur: () => boolean;
        estMarie: () => boolean;
        estPresumeDecede: () => boolean;
        _listeDesignations: any;
        _listeDesignationsTronquee: any;
        private _libelleStatutFATCA;
        private _dateAttributionFATCA;
        private _erreurDesignation;
        erreurDesi: boolean;
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeAccesMinitel: any;
        codeAppartenanceReseau: string;
        codeBlocageVAO: any;
        codeCapaciteJuridique: string;
        codeCivilite: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeEtablissement: string;
        codeExistenceListeRouge: any;
        codeFamilleNAFINSEE: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        codeGuichetRisque: number;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeInseePaysDoubleNationalite: string;
        codeInseePaysNationnalite: string;
        codeISOPays: string;
        codePaysNaissance: string;
        codePieceJustif: string;
        codePostalFranceEtEtranger: any;
        codePostalPTT: string;
        codeQuartier: any;
        codeRegimeMatrimonial: string;
        codeResident: number;
        codeRetourDistribution: string;
        codeSecteurEmploi: string;
        codeSexe: number;
        codeSituationFamiliale: any;
        codeTypeAdresse: string;
        codeTypeContratTravail: string;
        codeTypeNIF: any;
        codeValiditeAdresseUNIVERS: string;
        commentaireTelephone: any;
        dateDeces: any;
        dateDecesPresume: any;
        dateEffetCSP: any;
        dateEffetOptionResidence: any;
        dateEffetSituationFamiliale: any;
        dateEmbaucheEmployeurActuel: any;
        dateFinContratTravail: any;
        dateNaissance: string;
        dateNaissanceConjoint: any;
        dateNaturalisation: any;
        dateObtentionPieceJustificative: any;
        dernierChangement: number;
        designationCourte: string;
        domiciliationRevenu: string;
        droitAuCompte: any;
        edsDomiciliation: any;
        edsInterneDomiciliation: number;
        eligibiliteFGDR: any;
        gestionPrivee: any;
        horsPresenceClient: any;
        identifiantAdresse: number;
        identifiantPersonne: number;
        identifiantRelationtEconomique: number;
        indicateurActiviteProfessionnel: string;
        indicateurAutoEntrepreneur: string;
        indicateurDetentionTelephone: any;
        indicateurEnvoiCourrier: string;
        indicateurSocietaire: number;
        indicDecesPresume: any;
        indicDonationEntreEpoux: boolean;
        indiceAmericaniteFATCA: any;
        libelleAppartenanceReseau: string;
        libelleCapaciteJuridique: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleCivilite: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libelleInseeLocalite: any;
        libelleInseePaysDoubleNationalite: string;
        libelleNAFInsee: string;
        libellePaysNaissance: string;
        libellePaysNationnalite: string;
        libelleProfession: string;
        libelleRegimeMatirimonial: string;
        libelleSexe: string;
        libelleSituationFamiliale: string;
        libelleSocietaire: string;
        libelleTypeContratTravail: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nif: any;
        nombreEnfantACharge: number;
        nomEmployeur: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        numeroFax: any;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        oppositionTelephonePerso: string;
        oppositionTelephonePro: string;
        prenom: string;
        refPieceJustificative: any;
        sirenEmployeur: string;
        sirenAutoEntrepreneur: string;
        statutPro: any;
        telephoneFixePro: any;
        troisDerniersCaracteresNAF: string;
        typeClauseMatrimoniale: any;
        libelleStatutFATCA: string;
        dateAttributionFATCA: any;
        verifierChampsObligatoires(dao: any): void;
        estDecesPresume(): string;
        estModifie: boolean;
        estModifieCatégorieSocioProfessionnelle: boolean;
        constructor(particulierInformation: ConnaissanceClient.Modeles.Tiers.IParticulierInformation, Deloc: ConnaissanceClient.IDeloc, Constantes: Menu.IConstantes, $filter: ng.IFilterService);
        changerDateDepuisTimestamp(dateTimestamp: number): number;
        decesPresume: boolean;
        dateNaissanceModifiee: boolean;
        indicAutoEntrepreneur: boolean;
        appartenanceReseau: boolean;
        indicateurDomiciliationRevenu: boolean;
        indicEnvoiCourrier: boolean;
        oppositionTelephone: number;
        indicateurOppositionTelephone: boolean;
        designationEnregistree: string;
    }
}

declare module ServiceDaoIhm {
    class DaoPatrimoineImmobilier implements ConnaissanceClient.Modeles.Tiers.IPatrimoineImmobilier {
        private patrimoineImmobilier;
        private _identifiantPersonne;
        private _codeEtablissement;
        private _identifiantRelationEconomique;
        private _codeNatureBien;
        private _codeNatureOccupationHabitat;
        private _codeTypeUsageBien;
        private _codeTypeHabitation;
        private _dateEntreeLogement;
        private _capitalRestantDuBien;
        private _dateModification;
        private _valeurEstimeeBien;
        private _coutAcquisition;
        private _codePostalLocalisationBien;
        private _codeLocaliteLocalisationBien;
        private _libelleLocaliteLocalisationBien;
        private _codePaysLocalisationBien;
        private _numeroOrdreBienImmobilier;
        private _dateMajCapitalRestantDu;
        capitalRestantDuBien: number;
        codeEtablissement: string;
        codeLocaliteLocalisationBien: any;
        codeNatureBien: string;
        codeNatureOccupationHabitat: string;
        codePaysLocalisationBien: string;
        codePostalLocalisationBien: any;
        codeTypeHabitation: string;
        codeTypeUsageBien: string;
        coutAcquisition: number;
        dateEntreeLogement: number;
        dateMajCapitalRestantDu: any;
        dateModification: number;
        identifiantPersonne: number;
        identifiantRelationEconomique: number;
        libelleLocaliteLocalisationBien: any;
        numeroOrdreBienImmobilier: number;
        valeurEstimeeBien: number;
        constructor(patrimoineImmobilier: ConnaissanceClient.Modeles.Tiers.IPatrimoineImmobilier);
    }
}

declare module ServiceDaoIhm {
    class DaoReductionImpot implements ConnaissanceClient.Modeles.Tiers.IReductionImpot {
        private reductionImpot;
        private _codeReductionImpot;
        private _identifiantRelationEconomique;
        private _mntReductionImpot;
        codeReductionImpot: string;
        identifiantRelationEconomique: number;
        mntReductionImpot: number;
        constructor(reductionImpot: ConnaissanceClient.Modeles.Tiers.IReductionImpot);
    }
}

declare module ServiceDaoIhm {
    class DaoRelation implements ConnaissanceClient.Modeles.Tiers.IRelationEconomique {
        relationEconomique: ConnaissanceClient.Modeles.Tiers.IRelationEconomique;
        private _identifiantPersonne;
        private _codeEtablissement;
        private _identifiantRelationEconomique;
        private _deuxiemePersonneRelation;
        private _codeTypeLienInterPersonne;
        private _codeSensLienInterPersonne;
        private _codeCivilitePersonne;
        private _nomFamillePersonne;
        private _nomUsagePersonne;
        private _premierPrenomPersonne;
        private _identifiantElementStrucutre;
        private _designationCourte;
        private _indicateurPersonneRelation;
        private _codeQualitePersonneRelation;
        private _codePersonnaliteJuridique;
        private _codeLeaderEspacePrive;
        private _codeLeaderEspaceEntreprise;
        private _codeOrigineEvenement;
        private _codeTypeContactRelation;
        private _indicateurForcageGerePar;
        private _nomCommercialProfessionnel;
        codeEtablissement: string;
        identifiantPersonne: number;
        codeSensLienInterPersonne: string;
        codeTypeLienInterPersonne: string;
        identifiantRelationEconomique: number;
        deuxiemePersonneRelation: number;
        codeCivilitePersonne: string;
        nomFamillePersonne: string;
        nomUsagePersonne: string;
        premierPrenomPersonne: string;
        identifiantElementStrucutre: number;
        designationCourte: string;
        indicateurPersonneRelation: string;
        codeQualitePersonneRelation: string;
        codePersonnaliteJuridique: string;
        codeLeaderEspacePrive: string;
        codeLeaderEspaceEntreprise: string;
        codeOrigineEvenement: any;
        codeTypeContactRelation: any;
        indicateurForcageGerePar: any;
        nomCommercialProfessionnel: any;
        constructor(relation: ConnaissanceClient.Modeles.Tiers.IRelationEconomique);
    }
}

declare module ServiceDaoIhm {
    class DaoRevenu implements ConnaissanceClient.Modeles.Tiers.IRevenu {
        private revenu;
        private _codeEtablissement;
        private _codeTypeRevenu;
        private _dateDebutValiditeRevenu;
        private _dateFinValiditeRevenu;
        private _identifiantPersonne;
        private _identifiantRelationEconomique;
        private _libelleTypeRevenu;
        private _montantPeriodiqueRevenu;
        private _montantRevenuAnnuel;
        private _nombrePeriode;
        private _numeroOrdreRevenu;
        codeEtablissement: string;
        codeTypeRevenu: string;
        dateDebutValiditeRevenu: any;
        dateFinValiditeRevenu: any;
        identifiantPersonne: number;
        identifiantRelationEconomique: number;
        libelleTypeRevenu: any;
        montantPeriodiqueRevenu: number;
        montantRevenuAnnuel: number;
        nombrePeriode: number;
        numeroOrdreRevenu: number;
        constructor(revenu: ConnaissanceClient.Modeles.Tiers.IRevenu);
    }
}

declare module ServiceDaoIhm {
    class DaoSuccession implements ServiceDaoIhm.IDaoSuccession {
        setSuccession: ConnaissanceClient.Modeles.Tiers.ISuccession;
        private _identifiantPersonne;
        private _codeEtablissement;
        private _dateOuvertureSuccession;
        private _dateFermetureSuccession;
        private _montantARecycler;
        private _dateModification;
        private _referenceExterneAgent;
        private _designationAgent;
        private _listeOperationSuccession;
        private _tauxRecyclage;
        private _estModifie;
        private serviceChampsObligatoires;
        private serviceSuccession;
        champsObligatoires: any[];
        identifiantPersonne: number;
        codeEtablissement: string;
        dateOuvertureSuccession: any;
        dateFermetureSuccession: any;
        montantARecycler: number;
        dateModification: any;
        referenceExterneAgent: number;
        designationAgent: string;
        listeOperationSuccession: IDaoOperationSuccession[];
        tauxRecyclage: number;
        estModifie: boolean;
        verifierChampsObligatoires(dao: any): void;
        constructor(succession: ConnaissanceClient.Modeles.Tiers.ISuccession);
        calculerTauxRecyclage(montantARecycler: any, listeOperationSuccession: any): number;
    }
}

declare module ServiceDaoIhm {
    class DaoTiersLies implements ConnaissanceClient.Modeles.Tiers.ITiersLies {
        private tiersLies;
        private _codeEtablissement;
        private _codeFamilleLienInterPersonne;
        private _codeSensLienInterPersonne;
        private _codeTypeLienInterPersonne;
        private _designationRelationEconomique;
        private _identifiantPersonne;
        private _identifiantPersonneLie;
        private _personneRattacheeRelation;
        private _refPieceJustificatifLien;
        codeEtablissement: string;
        identifiantPersonne: number;
        codeFamilleLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        codeTypeLienInterPersonne: string;
        designationRelationEconomique: string;
        identifiantPersonneLie: number;
        personneRattacheeRelation: string;
        refPieceJustificatifLien: string;
        constructor(tiersLies: ConnaissanceClient.Modeles.Tiers.ITiersLies);
    }
}

declare module ServiceDaoIhm {
    class DaoTiersLiesAdministratif implements ConnaissanceClient.Modeles.Tiers.ITiersLiesAdministratif {
        private tiersLiesAdministratifs;
        private _codeEtablissement;
        private _codeFamilleLienInterPersonne;
        private _codeSensLienInterPersonne;
        private _codeTypeLienInterPersonne;
        private _designationRelationEconomique;
        private _identifiantPersonne;
        private _identifiantPersonneLie;
        private _personneRattacheeRelation;
        private _refPieceJustificatifLien;
        private _numeroLienInterlocuteur;
        codeEtablissement: string;
        identifiantPersonne: number;
        codeFamilleLienInterPersonne: string;
        codeSensLienInterPersonne: string;
        codeTypeLienInterPersonne: string;
        designationRelationEconomique: string;
        identifiantPersonneLie: number;
        personneRattacheeRelation: string;
        refPieceJustificatifLien: string;
        numeroLienInterlocuteur: number;
        constructor(tiersLies: ConnaissanceClient.Modeles.Tiers.ITiersLiesAdministratif);
    }
}

declare module ServiceDaoIhm {
    interface IDaoAdresse {
        agenceRattachement: number;
        codeAccesMinitel: any;
        codeEtablissement: string;
        codeExistenceListeRouge: any;
        codeInseeLocalite: string;
        codeInseePays: string;
        codeISOPays: string;
        codePostalFranceEtEtranger: any;
        codePostalPTT: string;
        codeQualiteAgent: string;
        codeQuartier: any;
        codeRetourDistribution: any;
        codeTypeAdresse: string;
        commentaireTelephone: any;
        dateDernierRetourPTT: any;
        identifiantAdresse: number;
        identifiantAgent: number;
        identifiantPersonne: number;
        indicateurDetentionTelephone: any;
        indicateurDifferencePostaleFiscale: string;
        indicateurEnvoiCourrier: string;
        libelleDifferencePostaleFiscale: any;
        libelleEnvoiCourrier: any;
        libelleInseeLocalite: any;
        libelleISOPays: string;
        libelleTypeAdresse: any;
        ligne1AdresseAFNOR: any;
        ligne2AdresseAFNOR: any;
        ligne3AdresseAFNOR: any;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: any;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: any;
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        numeroFax: any;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        typePersonne: string;
        dao: ConnaissanceClient.Modeles.Tiers.IAdresse;
        champsObligatoires: any[];
        verifierChampObligatoire: any;
    }
}

declare module ServiceDaoIhm {
    interface IDaoAdresseemployeur {
        codeEtablissement?: string;
        codeISOPays?: string;
        codeInseePays?: string;
        codeTypeRetourPTT?: string;
        dateCreationAdresse?: string;
        dateDernierRetourPTTAdresse?: string;
        dateDerniereMAJAdresse?: string;
        dateRestructurationAdresse?: string;
        identifiantPersonne?: number;
        ligne2AdresseAFNOR?: string;
        ligne3AdresseAFNOR?: string;
        ligne4AdresseAFNOR?: string;
        ligne5AdresseAFNOR?: string;
        ligne6AdresseAFNOR?: string;
        nomEmployeurParticulier?: string;
        nombreModificationAdresse?: number;
        nombreRetourPTT?: number;
    }
}

declare module ServiceDaoIhm {
    interface IDaoCharge {
        codeEtablissement: string;
        codeTypeCharge: string;
        dateDebutValiditeCharge: any;
        dateFinValiditeCharge: any;
        identifiantPersonne: any;
        identifiantRelationEconomique: any;
        montantChargeAnnuel: number;
        montantPeriodiqueCharge: number;
        nombrePeriode: number;
        numeroOrdreCharge: number;
        dao: ConnaissanceClient.Modeles.Tiers.ICharge;
    }
}

declare module ServiceDaoIhm {
    interface IDaoChargeImposition {
        anneeReferenceImposition: string;
        codeEtablissement: string;
        dateModificationMntImpotRevenu: number;
        dateModificationTaxeFonciere: number;
        dateModificationTaxeHabitation: any;
        identifiantPersonne: any;
        identifiantRelationEconomique: number;
        indicMntImpot: number;
        indicMntTaxeHabitat: string;
        indicMtTaxeFonciere: string;
        indicPaiementISF: number;
        mntImpotRevenu: number;
        mntISF: number;
        mntRevenuImposable: number;
        mntTaxeFonciere: number;
        mntTaxeHabitation: number;
        nombrePartsImposition: number;
        reductionImpots: ConnaissanceClient.Modeles.Tiers.IReductionImpot[];
        typeTrancheImposition: string;
        dao: ConnaissanceClient.Modeles.Tiers.IChargeImposition;
    }
}

declare module ServiceDaoIhm {
    interface IDaoIdentification {
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeStatut: string;
        libelleStatut: any;
        codeTypeRelation: string;
        libelleTypeRelation: any;
        dateEntreeRelation: number;
        codeMarche: Tier.ICodeMarche;
    }
}

declare module ServiceDaoIhm {
    interface IDaoListeParticulierProjet {
        identifiantRelationEconomique?: number;
        typeProjet?: string;
        datePrevisionnelleProjet?: string;
        montantPrevisionnelProjet?: string;
        indicateurPresenceMontantProjet?: string;
        commentaireProjet?: string;
    }
}

declare module ServiceDaoIhm {
    interface IDaoManifestationPersonne {
        identifiantPersonne: number;
        codeEtablissement: string;
        codePersonnaliteJuridique: string;
        codeStatutDeces: string;
        dateDecesPersonne: string;
        dateDerniereManifestation: string;
        codeProvenanceManifestation: string;
        libelleDetailEvtManifestation: string;
        dateCreationMajEnregistrement: string;
        idAgentAppliCreationMaj: string;
        setManifestationPersonne: ConnaissanceClient.Modeles.Tiers.IManifestationPersonne;
        champsObligatoires: any[];
        estModifie: boolean;
    }
}

declare module ServiceDaoIhm {
    interface IDaoMedia {
        codeEtablissement: string;
        codeTypeMedia: string;
        codeTypeUsageMedia: string;
        identifiantPersonne: number;
        indicateurEnvoiCourrier: string;
        indicateurOppositionTelephone: string;
        indicateurOPTIN: string;
        indicateurPreferenceMedia: string;
        indicateurProOptout: string;
        indicateurSecu: string;
        indicatifTel: string;
        libelleTypeMedia: string;
        libelleTypeUsageMedia: string;
        numeroChronoLieuActivite: number;
        numeroChronoProfessionnel: number;
        referenceAccesMedia: string;
        typePersonne: any;
        media: ConnaissanceClient.Modeles.Tiers.IMedia;
    }
}

declare module ServiceDaoIhm {
    interface IDaoOperationSuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        numeroOrdre: number;
        dateRecyclageSuccession: any;
        deuxiemePersonneEnRelation: number;
        numeroCaisse: string;
        codeTypeEpargneContrat: string;
        montantRecycleOrigineCE: number;
        montantRecycleAutreEtablissement: number;
        identifiantContactAssocie: number;
        identifiantInternePFMaj: number;
        designationAgent: string;
        dateMajRecyclageSuccession: any;
    }
}

declare module ServiceDaoIhm {
    interface IDaoParticulierInformation {
        autresPrenom: string;
        categorieSocioprofessionnelle: string;
        codeAccesMinitel: any;
        codeAppartenanceReseau: number;
        codeBlocageVAO: any;
        codeCapaciteJuridique: string;
        codeCivilite: string;
        codeCommuneNaissance: string;
        codeDepartementNaissance: string;
        codeEtablissement: string;
        codeExistenceListeRouge: any;
        codeFamilleNAFINSEE: string;
        codeFamilleCategorieJuridique: string;
        codeCategorieJuridiqueDeuxDern: string;
        codeGuichetRisque: number;
        codeInseePays: string;
        codeInseePaysDoubleNationalite: string;
        codeInseePaysNationnalite: string;
        codeISOPays: string;
        codePaysNaissance: string;
        codePieceJustif: string;
        codePostalFranceEtEtranger: any;
        codePostalPTT: string;
        codeQuartier: any;
        codeRegimeMatrimonial: string;
        codeResident: number;
        codeRetourDistribution: string;
        codeSecteurEmploi: string;
        codeSexe: number;
        codeSituationFamiliale: string;
        codeTypeAdresse: string;
        codeTypeContratTravail: string;
        codeTypeNIF: any;
        codeValiditeAdresseUNIVERS: string;
        commentaireTelephone: any;
        dateDeces: any;
        dateDecesPresume: any;
        dateEffetCSP: any;
        dateEffetOptionResidence: any;
        dateEffetSituationFamiliale: any;
        dateEmbaucheEmployeurActuel: any;
        dateFinContratTravail: any;
        dateNaissance: string;
        dateNaissanceConjoint: any;
        dateNaturalisation: any;
        dateObtentionPieceJustificative: any;
        dernierChangement: number;
        designationCourte: string;
        designationEnregistree: string;
        domiciliationRevenu: string;
        droitAuCompte: any;
        edsDomiciliation: number;
        edsInterneDomiciliation: number;
        eligibiliteFGDR: any;
        gestionPrivee: any;
        horsPresenceClient: any;
        identifiantAdresse: number;
        identifiantPersonne: number;
        identifiantRelationtEconomique: number;
        indicateurActiviteProfessionnel: string;
        indicateurAutoEntrepreneur: string;
        indicateurDetentionTelephone: any;
        indicateurEnvoiCourrier: string;
        indicateurSocietaire: number;
        indicDecesPresume: string;
        indicDonationEntreEpoux: string;
        indiceAmericaniteFATCA: any;
        libelleAppartenanceReseau: string;
        libelleCapaciteJuridique: string;
        libelleCategorieSocioprofessionnelle: string;
        libelleCivilite: string;
        libelleCommuneNaissance: string;
        libelleDepartementNaissance: string;
        libelleInseeLocalite: any;
        libelleInseePaysDoubleNationalite: string;
        libelleNAFInsee: string;
        libellePaysNaissance: string;
        libellePaysNationnalite: string;
        libelleProfession: string;
        libelleRegimeMatirimonial: string;
        libelleSexe: string;
        libelleSituationFamiliale: string;
        libelleSocietaire: string;
        libelleTypeContratTravail: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        nif: any;
        nombreEnfantACharge: number;
        nomEmployeur: string;
        nomFamillePersonnePhysique: string;
        nomMarital: string;
        numeroFax: any;
        numeroTelephoneAdresse: string;
        numeroTourneeFacteur: number;
        numeroVoieHexavia: number;
        numeroVoiePTT: number;
        oppositionTelephonePerso: any;
        oppositionTelephonePro: any;
        prenom: string;
        refPieceJustificative: any;
        sirenEmployeur: string;
        statutPro: any;
        telephoneFixePro: any;
        troisDerniersCaracteresNAF: string;
        typeClauseMatrimoniale: any;
        champsObligatoires: any[];
        verifierChampObligatoire: any;
        erreurDesi: boolean;
        libelleStatutFATCA: string;
        dateAttributionFATCA: any;
    }
}

declare module ServiceDaoIhm {
    interface IDaoPatrimoineImmobilier {
        capitalRestantDuBien: number;
        codeEtablissement: string;
        codeLocaliteLocalisationBien: any;
        codeNatureBien: string;
        codeNatureOccupationHabitat: string;
        codePaysLocalisationBien: string;
        codePostalLocalisationBien: any;
        codeTypeHabitation: string;
        codeTypeUsageBien: string;
        coutAcquisition: number;
        dateEntreeLogement: number;
        dateMajCapitalRestantDu: any;
        dateModification: number;
        identifiantPersonne: number;
        identifiantRelationEconomique: number;
        libelleLocaliteLocalisationBien: any;
        numeroOrdreBienImmobilier: number;
        valeurEstimeeBien: number;
    }
}

declare module ServiceDaoIhm {
    interface IDaoReductionImpot {
        codeReductionImpot: string;
        identifiantRelationEconomique: number;
        mntReductionImpot: number;
    }
}

declare module ServiceDaoIhm {
    interface IDaoRelation {
        identifiantPersonne: number;
        codeEtablissement?: any;
        identifiantRelationEconomique: number;
        deuxiemePersonneRelation: number;
        codeTypeLienInterPersonne?: any;
        codeSensLienInterPersonne?: any;
        codeCivilitePersonne: string;
        nomFamillePersonne: string;
        nomUsagePersonne?: any;
        premierPrenomPersonne: string;
        identifiantElementStrucutre: number;
        designationCourte: string;
        indicateurPersonneRelation: string;
        codeQualitePersonneRelation: string;
        codePersonnaliteJuridique: string;
        codeLeaderEspacePrive: string;
        codeLeaderEspaceEntreprise: string;
        codeOrigineEvenement?: any;
        codeTypeContactRelation?: any;
        indicateurForcageGerePar?: any;
        nomCommercialProfessionnel?: any;
    }
}

declare module ServiceDaoIhm {
    interface IDaoRevenu {
        codeEtablissement: string;
        codeTypeRevenu: string;
        dateDebutValiditeRevenu: any;
        dateFinValiditeRevenu: any;
        identifiantPersonne: number;
        identifiantRelationEconomique: number;
        libelleTypeRevenu: any;
        montantPeriodiqueRevenu: number;
        montantRevenuAnnuel: number;
        nombrePeriode: number;
        numeroOrdreRevenu: number;
    }
}

declare module ServiceDaoIhm {
    interface IDaoSuccession {
        identifiantPersonne: number;
        codeEtablissement: string;
        dateOuvertureSuccession: any;
        dateFermetureSuccession: any;
        montantARecycler: number;
        dateModification: any;
        referenceExterneAgent: number;
        designationAgent: string;
        listeOperationSuccession: ServiceDaoIhm.IDaoOperationSuccession[];
        setSuccession: ConnaissanceClient.Modeles.Tiers.ISuccession;
        tauxRecyclage: number;
    }
}

declare module ServiceDaoIhm {
    interface IDaoTiersLies {
        codeEtablissement: string;
        codeFamilleLienInterPersonne?: string;
        codeSensLienInterPersonne: string;
        codeTypeLienInterPersonne: string;
        designationRelationEconomique?: string;
        identifiantPersonne: number;
        identifiantPersonneLie: number;
        personneRattacheeRelation: string;
        refPieceJustificatifLien?: string;
    }
}

declare module ServiceDaoIhm {
    interface IDaoTiersLiesAdministratifs {
        codeEtablissement: string;
        codeFamilleLienInterPersonne?: string;
        codeSensLienInterPersonne: string;
        codeTypeLienInterPersonne: string;
        designationRelationEconomique?: string;
        identifiantPersonne: number;
        identifiantPersonneLie: number;
        personneRattacheeRelation: string;
        refPieceJustificatifLien?: string;
    }
}

declare module gcedocOptin {
    interface IOptin {
        DATA_1: string;
        DATA_2: string;
        id: string;
    }
    class Optin implements IOptin {
        DATA_1: string;
        DATA_2: string;
        id: string;
        constructor();
    }
    class OptinParam {
        typeName: string;
        typeFullName: string;
        librairie: string;
        typeFichier: number;
        nomFichier: string;
        restitutionVersion: number;
        sousRepModele: string;
        constructor();
    }
}

declare module ConnaissanceClient.Enums {
    enum DRCCodeLisa {
        ACCES_SYNTHESE_ARCADE = 5,
        FERMER_ARCADE = -2,
        ACCES_SYNTHESE_CLASSEUR_CLIENT = 6,
        FERMER_CLASSEUR_CLIENT = -3,
        MISE_A_JOUR_CLASSEUR_CLIENT = 3,
    }
}

declare module ConnaissanceClient.Enums {
    enum DRCTypeLisa {
        ACCES_SYNTHESE = 0,
        FERMER = 1,
    }
}

declare module ConnaissanceClient.Enums {
    class DRCTypePersonne extends MyWay.Services.StringEnum {
        static TYPE_DRC_PERSONNE_PHYSIQUE: DRCTypePersonne;
        static TYPE_DRC_PERSONNE_MORALE: DRCTypePersonne;
        static TYPE_DRC_PERSONNE_PRO: DRCTypePersonne;
    }
}

declare module ConnaissanceClient.Enums {
    enum LisaSorties {
        ACCES_SYNTHESE = 1,
        ACCES_SYNTHESE_PERSONNE_LIEE = 7,
        DOCUMENTS_CLIENT = 2,
        FERMER = -1,
        NAVIGATION_BDR = 21,
        NAVIGATION_BDR_EI = 23,
        NAVIGATION_INTERNE = 99,
    }
    enum LisaEntrees {
        CREER_CLIENT = 1,
        CREER_PROSPECT = 21,
        CREER_TIERS = 11,
        MODIFIER_CLIENT = 2,
        MODIFIER_PROSPECT = 22,
        MODIFIER_TIERS = 12,
    }
}
