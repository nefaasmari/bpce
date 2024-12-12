
declare module myway.comRisquesClient {
    var app: ng.IModule;
}

declare module myway.comRisquesClient {
    class InterroBDFController {
        private $scope;
        private genereCleBDFService;
        private interroBDFService;
        private $modalInstance;
        private data;
        private modeImpression;
        private serviceAgentExtended;
        static $inject: string[];
        lastExpandedItem: any;
        donnees: Object;
        personneInterrogee: myway.comRisquesClient.Model.PersonneBDF;
        personneListeFCC: myway.comRisquesClient.Model.PersonneFCC[];
        personneListeFICP: myway.comRisquesClient.Model.PersonneFICP[];
        erreurFCC: string;
        erreurFICP: string;
        boutonContinuerDisable: boolean;
        lanceBindingFCC: boolean;
        lanceBindingFICP: boolean;
        modeEdition: boolean;
        modeAveugle: boolean;
        afficherInterface: boolean;
        compteurListeCodeOrigine: number;
        static VALUE_ARCHIVAGE: string;
        static VALUE_IMPRESSION: string;
        static LISTE_MOTIFS: {
            id: string;
            value: string;
        }[];
        constructor($scope: ng.IScope, genereCleBDFService: myway.comRisquesClient.GenereCleBDFService, interroBDFService: myway.comRisquesClient.InterroBDFService, $modalInstance: any, data: any, modeImpression: string, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private checkTypeDonneeEnEntree(entree);
        private getRetourCommeNSDK(entree?);
        private callInterroBDFManuelle(entree);
        private processErrorFICP(error);
        private processErrorFCC(error);
        private callInterroBDFDecouvertCredit(entree);
        private callInterroBDFCarte(entree);
        private callInterroBDFCheque(entree);
        private gereListeCodeOrigineFICP(entree);
        private gereListeCodeOrigineFCC(entree);
        private traiteRetourFCC(data);
        private traiteRetourFICP(data);
        bindData(): void;
        onClickLigneFICP(item: myway.comRisquesClient.Model.PersonneFICP): void;
        onClickLigneFCC(item: myway.comRisquesClient.Model.PersonneFCC): void;
        private remplitInfosPersonneFCC(item, data);
        private expandedCollpase(item);
        onCheckedRadioButtonFICP(item: any, value: boolean): void;
        onCheckedRadioButtonFCC(item: any, value: boolean): void;
        checkAllRadioButton(): void;
        afficheSynthese(): void;
        appelEdition(): void;
    }
}

declare module myway.comRisquesClient {
}

declare module myway.comRisquesClient {
    class InterroBDFService {
        private serviceAgentExtended;
        private modalService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.ModalService);
        /**
         * @ngdoc function
         * @name afficheInterroBDFModale
         * @methodOf myway.comGestionClient.RechercherPersonneService.rechercherPersonneModale()
         * @description
         * fonction qui permet d'appler le moteur de recherche en mode modale.
         * @param {string, MyWay.Model.Client} : un string contenant le mode d'appel souhaité + une instance de l'objectMyWay.Model.Client().
         * @returns {ng.IPromise<MyWay.Model.Client>} promesse contenant la personne selectionnée.
         */
        afficheInterroBDFModale(criteres: Object, modeImpression: string): void;
        /**
         * @Returns a currentCOCXBQ from the context {ng.IPromise<string>}.
         * @alias getCurrentCOCXBQ.
         * @param {void} : string.
         * @description return le code COCXBQ du context.
         */
        getCurrentCOCXBQ(): ng.IPromise<string>;
        /**
         * @Returns a CodeGuichetInterbancaire des Paramètres Comptables {ng.IPromise<string>}.
         * @alias getCodeGuichetInterbancaire.
         * @param {void} : string.
         * @description return le CodeGuichetInterbancaire.
         */
        getCodeGuichetInterbancaire(): ng.IPromise<string>;
        /**
         * @Returns an Object {ng.IPromise<Object>}.
         * @alias getInterroFCC.
         * @param {void} : Object.
         * @description return les infos pour l'interro BDF FCC.
         */
        getInterroFCCManuelle(cleBdf: string, codeOrigine: string, sousCle?: string): ng.IPromise<Object>;
        getInterroFCCDecouvertCredit(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string): ng.IPromise<Object>;
        getInterroFCCCarte(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeProduitCarte: string): ng.IPromise<Object>;
        getInterroFCCCheque(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeTypeChequier: string, nombreChequier: number, codeFamilleChequier: string): ng.IPromise<Object>;
        /**
         * @Returns an Object {ng.IPromise<Object>}.
         * @alias getInterroFICP.
         * @param {void} : Object.
         * @description return les infos pour l'interro BDF FICP.
         */
        getInterroFICPManuelle(cleBdf: string, codeOrigine: string, sousCle: string): ng.IPromise<Object>;
        getInterroFICPDecouvertCredit(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string): ng.IPromise<Object>;
        getInterroFICPCarte(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeProduitCarte: string): ng.IPromise<Object>;
        getInterroFICPCheque(cleBdf: string, codeOrigine: string, sousCle: string, idTiers: string, codeProduitService: string, designation: string, referenceProduit: string, codeTypeChequier: string, nombreChequier: number, codeFamilleChequier: string): ng.IPromise<Object>;
    }
}

declare module myway.comRisquesClient.Model {
    class PersonneBDF {
        cleBDF: string;
        sousCle: string;
        nomUsage: string;
        nomFamille: string;
        prenom: string;
        dateNaissance: string;
        lieuNaissance: string;
        departement: string;
        fichier: string;
        date: Date;
        sexe: string;
        fichage: boolean;
        expanded: boolean;
        spinner: boolean;
        motifs: string;
        messageFCC: string;
        messageFICP: string;
        personneFCC: myway.comRisquesClient.Model.PersonneFCC;
        personneFICP: myway.comRisquesClient.Model.PersonneFICP;
    }
    class PersonneFCC extends myway.comRisquesClient.Model.PersonneBDF {
        dateFinIB: string;
        dateFinIJ: string;
        dateDernierRetrait: string;
        remarques: string;
        nombreComptesIndiv: number;
        nombreChequesIndiv: number;
        montantIndiv: number;
        nombreComptesColl: number;
        nombreChequesColl: number;
        montantColl: number;
        siren: string;
        pcs: string;
        adresse: string;
    }
    class PersonneFICP extends myway.comRisquesClient.Model.PersonneBDF {
        dateRadiation: string;
        nombreIncidents: number;
        nombreDeclarants: number;
        natureCredit: number;
        mesures: string;
    }
    class InterroBDFManuelle {
        dateNaissance: string;
        nomFamille: string;
        codeOrigine: string;
        sousCle: string;
    }
    class InterroBDFDecouvertCredit extends InterroBDFManuelle {
        codeProduitService: string;
        identifiantTiers: string;
        referenceProduit: string;
        designationCourteTiers: string;
    }
    class InterroBDFCarte extends InterroBDFDecouvertCredit {
        codeProduitCarte: string;
    }
    class InterroBDFCheque extends InterroBDFDecouvertCredit {
        codeTypeChequier: string;
        nombreChequierCommande: number;
        codeFamilleChequier: string;
    }
}

declare module myway.comRisquesClient {
    class GenereCleBDFService {
        private serviceAgentExtended;
        static $inject: string[];
        private static MAX_COUNT_MONTH;
        private static MAX_COUNT_DAY;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        genereCleBDF(dateNaiss: string, nom: string): string;
        private normalize(chaine);
    }
}

declare module Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF {
    enum GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent {
        Id = 0,
        Flux = 1,
    }
    interface ISIDCGCE_Interro_BDF {
        Section1: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.SIDCGCE_Interro_BDFSection1[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETS[];
        id: string;
        xmlns: string;
    }
    interface SIDCGCE_Interro_BDFSection1 {
        Items: any[];
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
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
        Content: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_ENTETEETSLOGO_ETABLISSEMENTContent;
        Value: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB10175[];
        b13135: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB13135[];
        b13705: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB13705[];
        b14445: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB14445[];
        b14505: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB14505[];
        b15135: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB15135[];
        b15905: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB15905[];
        b15965: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB15965[];
        b16275: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB16275[];
        b18025: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB18025[];
        b18279: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB18279[];
        b43199: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB43199[];
        b18715: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB18715[];
        b13335: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB13335[];
        b17515: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB17515[];
        b62108: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB62108[];
        b12579: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB12579[];
        b13825: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB13825[];
        b16705: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB16705[];
        b12135: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB12135[];
        b14265: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB14265[];
        b13485: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB13485[];
        b18315: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB18315[];
        b11315: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB11315[];
        b11425: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB11425[];
        b12548: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB12548[];
        b30051: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETSB30051[];
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
    interface SIDCGCE_Interro_BDFSection1BL_FCC {
        GENERIC_LIGNEVIDE: number;
        Clé_FCC: string;
        Sous_Clé_FCC: string;
        Date_FCC: string;
        Nom_Famille_FCC: string;
        Prénom_FCC: string;
        Nom_Usage_FCC: string;
        SIREN_FCC: string;
        PCS_FCC: string;
        Sexe_FCC: string;
        Dat_Naiss_FCC: string;
        Lieu_Naiss_FCC: string;
        Adresse1_FCC: string;
        Adresse2_FCC: string;
        Date_Fin_IB_FCC: string;
        Date_Fin_IJ_FCC: string;
        Date_Dern_Retrait_FCC: string;
        Remarque1_FCC: string;
        Remarque2_FCC: string;
        Nb_Cpte_Ind_FCC: string;
        Nb_Chèque_Ind_FCC: string;
        Montant_Ind_FCC: string;
        Nb_Cpte_Coll_FCC: string;
        Nb_Chèque_Coll_FCC: string;
        Montant_Coll_FCC: string;
    }
    interface GENERIC_TITREDOCUMENT {
        TITRE_DOCUMENT: string;
    }
    interface SIDCGCE_Interro_BDFSection1BL_FICP {
        GENERIC_LIGNEVIDE: number;
        Clé_BDF_FICP: string;
        Sous_Clé_FICP: string;
        Fichier_FICP: string;
        Date_FICP: string;
        Nom_Famille_FICP: string;
        Prénom_FICP: string;
        Nom_Usage_FICP: string;
        Sexe_FICP: string;
        Date_Naiss_FICP: string;
        Lieu_Naiss_FICP: string;
        Date_Radiation_FICP: string;
        Nb_Incident_FICP: string;
        Nb_Déclarant_FICP: string;
        Nb_Nature_Credit_FICP: string;
        Mesure_FICP: string;
    }
    interface SIDCGCE_Interro_BDFSection1Bloc_1 {
        TEXTE_1: string;
        TEXTE_2: string;
        TEXTE_3: string;
        TEXTE_4: string;
    }
    class SIDCGCE_Interro_BDF implements ISIDCGCE_Interro_BDF {
        Section1: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.SIDCGCE_Interro_BDFSection1[];
        GENERIC_ENTETEETS: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF.GENERIC_PIEDPAGEETS[];
        id: string;
        xmlns: string;
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
    class SIDCGCE_Interro_BDFParam {
        systeme: ParametresSysteme;
        obligatoires: ParametresObligatoires;
        optionnels: ParametresOptionnels;
        constructor();
    }
    class siprgce_interro_BDFGenerationParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class siprgce_interro_BDFImpressionParams {
        obligatoires: MyWay.Services.Impression.ParametresImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresImpressionOptionnels;
        constructor();
    }
    class siprgce_interro_BDFGenerationImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
}

declare module Gce.EditiqueVente.Services.Documents.SIDCGCE_Interro_BDF {
    function createDocument(): SIDCGCE_Interro_BDF;
}
