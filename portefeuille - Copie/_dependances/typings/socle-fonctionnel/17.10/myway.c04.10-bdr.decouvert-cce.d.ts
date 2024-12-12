
declare module decouvert {
    var app: any;
}

declare module decouvert {
    class DefautControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        private appContext;
        indicateurVueDirective: boolean;
        listeActesGestionOffre: Array<string>;
        listeActesGestionPS: Array<string>;
        /**
         * Paramètres directive avec interfaçage GGO
         */
        idBloc: string;
        codeActeGestion: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        private initDefaultContext();
        executerDirective(): void;
        validerGGO(): void;
    }
}

declare module decouvert {
}

declare module decouvert {
    class PageTestSubstitutionControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        private initDefaultContext();
        executerDirective(): void;
    }
}

declare module Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele {
    interface ISIPCGCE_Forfait_Pro {
        Section0: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0[];
        GENERIC_LOGO_ETS: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_LOGO_ETS[];
        GENERIC_PIEDPAGEETS: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIPCGCE_Forfait_ProSection0 {
        _blocChoice_: (choice_SIPCGCE_Forfait_ProSection0_BLOC_1 | choice_SIPCGCE_Forfait_ProSection0_BLOC_2 | choice_SIPCGCE_Forfait_ProSection0_BLOC_3 | choice_SIPCGCE_Forfait_ProSection0_BLOC_4 | choice_SIPCGCE_Forfait_ProSection0_BLOC_5 | choice_SIPCGCE_Forfait_ProSection0_BLOC_6 | choice_SIPCGCE_Forfait_ProSection0_BLOC_61 | choice_SIPCGCE_Forfait_ProSection0_BLOC_7 | choice_SIPCGCE_Forfait_ProSection0_BLOC_8 | choice_SIPCGCE_Forfait_ProSection0_BLOC_9 | choice_SIPCGCE_Forfait_ProSection0_BLOC_10 | choice_SIPCGCE_Forfait_ProSection0_BLOC_12 | choice_SIPCGCE_Forfait_ProSection0_BLOC_11 | choice_SIPCGCE_Forfait_ProSection0_BLOC_91 | choice_SIPCGCE_Forfait_ProSection0_BLOC_92 | choice_SIPCGCE_Forfait_ProSection0_BLOC_93 | choice_SIPCGCE_Forfait_ProSection0_BLOC_94 | choice_SIPCGCE_Forfait_ProSection0_BLOC_62 | choice_SIPCGCE_Forfait_ProSection0_BLOC_41)[];
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_1 {
        BLOC_1: SIPCGCE_Forfait_ProSection0BLOC_1;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_2 {
        BLOC_2: SIPCGCE_Forfait_ProSection0BLOC_2;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_3 {
        BLOC_3: SIPCGCE_Forfait_ProSection0BLOC_3;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_4 {
        BLOC_4: SIPCGCE_Forfait_ProSection0BLOC_4;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_5 {
        BLOC_5: SIPCGCE_Forfait_ProSection0BLOC_5;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_6 {
        BLOC_6: SIPCGCE_Forfait_ProSection0BLOC_6;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_61 {
        BLOC_61: SIPCGCE_Forfait_ProSection0BLOC_61;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_7 {
        BLOC_7: SIPCGCE_Forfait_ProSection0BLOC_7;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_8 {
        BLOC_8: SIPCGCE_Forfait_ProSection0BLOC_8;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_9 {
        BLOC_9: number;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_10 {
        BLOC_10: SIPCGCE_Forfait_ProSection0BLOC_10;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_12 {
        BLOC_12: SIPCGCE_Forfait_ProSection0BLOC_12;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_11 {
        BLOC_11: SIPCGCE_Forfait_ProSection0BLOC_11;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_91 {
        BLOC_91: SIPCGCE_Forfait_ProSection0BLOC_91;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_92 {
        BLOC_92: SIPCGCE_Forfait_ProSection0BLOC_92;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_93 {
        BLOC_93: SIPCGCE_Forfait_ProSection0BLOC_93;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_94 {
        BLOC_94: SIPCGCE_Forfait_ProSection0BLOC_94;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_62 {
        BLOC_62: SIPCGCE_Forfait_ProSection0BLOC_62;
    }
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_41 {
        BLOC_41: SIPCGCE_Forfait_ProSection0BLOC_41;
    }
    interface GENERIC_LOGO_ETS {
        LOGO_ETABLISSEMENT: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_LOGO_ETSLOGO_ETABLISSEMENT;
    }
    interface GENERIC_LOGO_ETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB10175[];
        b13135: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB13135[];
        b13705: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB13705[];
        b14445: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB14445[];
        b14505: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB14505[];
        b15135: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB15135[];
        b15905: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB15905[];
        b15965: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB15965[];
        b16275: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB16275[];
        b18025: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB18025[];
        b18279: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB18279[];
        b43199: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB43199[];
        b18715: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB18715[];
        b13335: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB13335[];
        b17515: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB17515[];
        b62108: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB62108[];
        b12579: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB12579[];
        b13825: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB13825[];
        b16705: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB16705[];
        b12135: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB12135[];
        b14265: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB14265[];
        b13485: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB13485[];
        b18315: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB18315[];
        b11315: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB11315[];
        b11425: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB11425[];
        b12548: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB12548[];
        b30051: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETSB30051[];
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
    interface SIPCGCE_Forfait_ProSection0BLOC_1 {
        NOM_CLIENT: string;
        ADR1: string;
        ADR2: string;
        ADR3: string;
        ADR4: string;
        ADR5: string;
        DATE_ET_LIEU: string;
        DESIGNATION: string;
        NUM_COMPTE: string;
        MTPCDD: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_10 {
        UDDDE: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_11 {
        La_Etab1: string;
        la_Etab1: string;
        ala_Etab1: string;
        la_Etab2: string;
        la_Etab3: string;
        dela_Etab1: string;
        NOM_CLIENT: string;
        dela_Etab2: string;
        la_Etab4: string;
        dela_Etab4: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_12 {
        UDDDE: string;
        UDFDE: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_2 {
        TXPEB1: string;
        dela_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_3 {
        LIPBTD: string;
        TEPBR1: string;
        TXPEB1: string;
        la_Etab1: string;
        dela_Etab1: string;
        dela_Etab2: string;
        ala_Etab1: string;
        ala_Etab2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_4 {
        TXPECO: string;
        MTPCDD: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_41 {
        TXPCNU: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_5 {
        TXPRPA: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_6 {
        MTPCDO: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_61 {
        dela_Etab1: string;
        TIPBD1: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_62 {
        dela_Etab1: string;
        TIPBD1: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_7 {
        dela_Etab1: string;
        dela_Etab2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_8 {
        dela_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_91 {
        LIGNE1: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_91LIGNE1[];
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_91LIGNE1 {
        MSPBI2: string;
        LIEGT2: string;
        TAUX1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_92 {
        LIGNE1: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_92LIGNE1[];
        LIGNE2: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_92LIGNE2[];
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_92LIGNE1 {
        MSPBI2: string;
        MSPBS2: string;
        LIEGT2: string;
        TAUX1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_92LIGNE2 {
        MSPBI3: string;
        LIEGT3: string;
        TAUX2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_93 {
        LIGNE1: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_93LIGNE1[];
        LIGNE2: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_93LIGNE2[];
        LIGNE3: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_93LIGNE3[];
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_93LIGNE1 {
        MSPBI2: string;
        MSPBS2: string;
        LIEGT2: string;
        TAUX1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_93LIGNE2 {
        MSPBI3: string;
        MSPBS3: string;
        LIEGT3: string;
        TAUX2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_93LIGNE3 {
        MSPBI4: string;
        LIEGT4: string;
        TAUX3: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_94 {
        LIGNE1: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_94LIGNE1[];
        LIGNE2: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_94LIGNE2[];
        LIGNE3: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_94LIGNE3[];
        LIGNE4: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0BLOC_94LIGNE4[];
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_94LIGNE1 {
        MSPBI2: string;
        MSPBS2: string;
        LIEGT2: string;
        TAUX1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_94LIGNE2 {
        MSPBI3: string;
        MSPBS3: string;
        LIEGT3: string;
        TAUX2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_94LIGNE3 {
        MSPBI4: string;
        MSPBS4: string;
        LIEGT4: string;
        TAUX3: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_94LIGNE4 {
        MSPBI5: string;
        LIEGT5: string;
        TAUX4: string;
    }
    class SIPCGCE_Forfait_Pro implements ISIPCGCE_Forfait_Pro {
        Section0: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.SIPCGCE_Forfait_ProSection0[];
        GENERIC_LOGO_ETS: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_LOGO_ETS[];
        GENERIC_PIEDPAGEETS: Decouvert.Editique.SIPCGCE_Forfait_Pro.Modele.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIPCGCE_Forfait_ProArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_Forfait_ProGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_Forfait_ProArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_Forfait_ProImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPCGCE_Forfait_ProArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPCGCE_Forfait_ProImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module Decouvert.Editique.SIPCGCE_Forfait_Pro.Service {
    function createArchiverParams(): Modele.SIPCGCE_Forfait_ProArchiverParams;
    function createGenererParams(): Modele.SIPCGCE_Forfait_ProGenererParams;
    function createArchiverGenererParams(): Modele.SIPCGCE_Forfait_ProArchiverGenererParams;
    function createImpressionParams(): Modele.SIPCGCE_Forfait_ProImpressionParams;
    function createArchiverImpressionParams(): Modele.SIPCGCE_Forfait_ProArchiverImpressionParams;
    function createImpressionLotParams(): Modele.SIPCGCE_Forfait_ProImpressionLotParams;
    function createDocument(decouvert: decouvert.IDecouvert, authentification: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, designationClient: string, adresse: decouvert.IAdresse, nomUsageSignataire: string, infosLettreConfirmation: decouvert.ILettreConfirmationDecouvert): Modele.SIPCGCE_Forfait_Pro;
}

declare module decouvert {
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v2/adresse"
 * @author S0080162 (François Galopin)
 */
declare module decouvert {
    interface IAdresseServiceGetQuery {
        codeEtablissement: string;
        idPersonne: string;
        numeroChronoProfessionnel?: string;
        numeroChronoLieuActivite?: string;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        libelleRetourDistribution: string;
        indicateurEnvoiCourrier: boolean;
        indicateurDifferencePostFisc: boolean;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        codeValiditeAdresseUNIVERS: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: Date;
        nombreRetourPTT: number;
    }
}

declare module decouvert {
    interface IAppContexte {
        acteGestionOffre: string;
        numeroOffreSouscrite: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        identifiantAgentTexte: any;
        designationClient: string;
        nomUsageSignataire: string;
    }
}

declare module decouvert {
    interface IDecouvert {
        dateDebut: Date;
        dateFin: Date;
        dateFinDecouvertModifie?: Date;
        etat: string;
        montant: number;
        codeDevise: string;
        typeDecouvert: string;
        typeDureeDecouvert: string;
        libTypeDureeDecouvert: string;
        libTypeDureeDecouvertCourt: string;
        editionLettreConfirmation: string;
        libelleTauxBareme?: string;
        tauxDebiteur?: number;
        fraisDossier?: number;
        typeCommission: string;
        ressource: string;
        reconduction?: string;
        tauxCommission?: number;
        periodicite?: string;
        pourcentageCAConfie?: number;
        codeAnnulation?: string;
        duree?: number;
        codeGuichet: string;
        codeEtablissement: string;
        numeroCompte: string;
        numeroEntiteTitulaire: string;
        numeroPersonne: string;
        identifiantContrat?: number;
        identifiantContratEntreprise?: number;
        identifiantProduitService: number;
        numeroOffreSouscrite: number;
        tauxInteretGlobalDebiteur?: number;
        tauxCalculePrimeAssurance?: number;
        tauxEffectifGlobal?: number;
        indicateurPossibiliteComEngagement?: boolean;
        indicateurPrelevementCNU?: boolean;
    }
    interface IDecouvertDuree {
        typeDecouvert: string;
        listeTypeDuree: Array<ITypeDuree>;
    }
    interface ITypeDuree {
        typeDureeDecouvert: string;
    }
    interface ISubstitutionDecouvert {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
    }
    interface ILettreConfirmationDecouvertGetQuery {
        dateDebutEffet: Date;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        montantAutorisationDecouvert: number;
    }
    interface ILettreConfirmationDecouvert {
        dateDebutApplicationDecouvert: Date;
        listePalier: Array<IPalier>;
        nombrePaliersActifs: number;
        libelleCourtBareme: string;
        libelleBareme: string;
        conditionDebitriceNegocie: string;
        dateDebutEffetCommission: Date;
        ListeTauxCommissionDepassement: Array<ITauxCommissionDepassement>;
        codeDeviseISO: string;
        codeDevise: string;
        commissionDepassement: string;
    }
    interface IPalier {
        tauxReference: string;
        borneInferieure: number;
        libelleTauxReference: string;
        borneSuperieure: number;
        numero: number;
        valeurTaux: number;
        montant: number;
        margeTauxReference: number;
    }
    interface ITauxCommissionDepassement {
        taux: number;
        tauxApplication: number;
        tauxReel: number;
    }
    interface IPalier1 {
    }
    interface IPalier2 {
    }
    interface IPalier3 {
    }
    interface IPalier5 {
    }
    interface IPalier4 {
    }
    interface ITauxCommissionDepassement1 {
    }
    interface ITauxCommissionDepassement2 {
    }
    interface ITauxCommissionDepassement3 {
    }
}

declare module decouvert {
    class AdresseService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: IAdresseServiceGetQuery): ng.IPromise<Array<IAdresse>>;
    }
    interface IAdresseService {
        getRequest: (query: IAdresseServiceGetQuery) => ng.IPromise<Array<IAdresse>>;
    }
}

declare module decouvert {
    interface ICommonService {
        getLibelleTypeDecouvert: (cle: string) => string;
        getLibelleTypeDureeDecouvert: (cle: string) => string;
        getLibelleTypeCommission: (cle: string) => string;
        mapperAutorisationDecouvertVersIDecouvert: (autorisationDecouvert: Object) => IDecouvert;
        mapperIDecouvertVersAutorisationDecouvert: (decouvert: IDecouvert, context: any) => Object;
    }
    class CommonService implements ICommonService {
        static SERVICE_DECOUVERTS_URL: string;
        static SERVICE_SUBSTITUTION_DECOUVERT_URL: string;
        static SERVICE_LETTRE_CONFIRMATION_DECOUVERT_URL: string;
        static NON_UTILISATION_DE_DECOUVERT: string;
        static COMMISSION_ENGAGEMENT: string;
        static NON_REGLEMENTE: string;
        static LDD_LA: string;
        static DECOUVERT_ECHU: string;
        static EN_COURS: string;
        static A_VENIR: string;
        static ANNULE: string;
        static A_DUREE_DETERMINEE: string;
        static A_DUREE_INDETERMINEE: string;
        static SANS_LETTRE_CONFIRMATION: string;
        static PERIODICITE_ANNUELLE: string;
        static PERIODICITE_TRIMESTRIELLE: string;
        static TACITE_RECONDUCTION: string;
        static PERMANENT: string;
        constructor();
        getLibelleTypeDecouvert(cle: string): string;
        getLibelleTypeDureeDecouvert(cle: string): string;
        getLibelleTypeDureeDecouvertCourt(cle: string): string;
        getLibelleTypeCommission(cle: string): string;
        /** Ce service permet de mapper l'objet AutorisationDecouvert retourné par les services REST par un objet IDecouvert simplifié */
        mapperAutorisationDecouvertVersIDecouvert(autorisationDecouvert: any): IDecouvert;
        private getLibelleReconduction(indicateurReconductionDecouvert);
        private getLibelleLettreConfirmation(indicateurEditionLettreConfirmation);
        /** Cette méthode retourne le libellé associé aux commissions d'un découvert */
        private getLibelleCommission(autorisationDecouvert);
        /** Cette méthode retourne le libellé associé au codeRessourceFinancement d'un découvert */
        private getLibelleRessource(codeRessourceFinancement);
        /** Cette métthode retoure le libellé associé au codeEtat d'un découvert */
        private getLibelleEtat(autorisationDecouvert);
        /** Cette méthode retourne le libellé associé à la periodicité d'un découvert */
        private getLibellePeriodicite(periodiciteComEngagement);
        /** Cette méthode retourne le taux correspondant au type de commission */
        private getTauxCommission(autorisationDecouvert);
        /**  Ce service Permet de mapper l'objet AutorisationDecouvert retourné par les services REST par un objet IDecouvert simplifié */
        mapperIDecouvertVersAutorisationDecouvert(decouvert: IDecouvert, context: any): Object;
        private getIndicateurEditionLettreConfirmation(editionLettreConfirmation);
        private getCodeTypeDecouvert(typeDecouvert);
        /** Cette méthode permet de récupérer l'état d'un découvert à partir du libellé de cet état. */
        private getEtat(etat);
        /**  Cette méthode permet de savoir si le type de commission d'un découvert est Commission d'engagement ou non */
        private isPossibiliteComEngagement(decouvert);
        /**  Cette méthode permet de savoir si le type de commission d'un découvert est Commission de non utilisation de découvert ou non */
        private isPrelevementCNU(decouvert);
        /** Cette méthode permet de savoir si un découvert de type tacite reconduction est renouvelé automatiquement est validé ou non */
        private isReconduction(reconduction);
        /** Cette méthode permet de récupérer le code associé à une ressource de découvert. */
        private getRessource(ressource);
        /** Cette méthode permet de récupérer le code associé à la périocité d'un découvert  */
        private getValeurPeriodicite(periodicite);
        private formatDate(date);
    }
}

declare module decouvert {
    interface IDecouvertService extends ICommonService {
        getAuthenticatedAgent: () => any;
        getListeDeDecouverts: (context: any) => ng.IPromise<Object>;
        modifierDecouvert: (decouvert: IDecouvert, context: any) => ng.IPromise<IDecouvert>;
        supprimerDecouvert: (decouvert: IDecouvert, context: any) => ng.IPromise<Object>;
        substituerDecouvert: (decouvert: ISubstitutionDecouvert) => ng.IPromise<Object>;
        recupererInfosLettreConfirmationDecouvert: (query: ILettreConfirmationDecouvertGetQuery) => ng.IPromise<Object>;
    }
    class DecouvertService extends CommonService implements IDecouvertService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        static ANNULE: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getAuthenticatedAgent(): any;
        /** Récupération des découvert liés à un compte */
        getListeDeDecouverts(context: any): ng.IPromise<Object>;
        /** Ce service permet de modifier un découvert.  */
        modifierDecouvert(decouvertAmodifier: IDecouvert, context: any): ng.IPromise<IDecouvert>;
        supprimerDecouvert(decouvertASupprimer: IDecouvert, context: any): ng.IPromise<Object>;
        substituerDecouvert(decouvertASubstituer: ISubstitutionDecouvert): ng.IPromise<Object>;
        recupererInfosLettreConfirmationDecouvert(query: ILettreConfirmationDecouvertGetQuery): ng.IPromise<Object>;
    }
}

declare module decouvert {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module decouvert {
    class ReferentielDecouvert {
        static typesDecouvert: any;
        static typesCommission: any;
        static typesDureeDecouvert: any;
        static typesDureeDecouvertCourt: any;
    }
}

declare module decouvert.creationDecouvert {
    interface ICreationDecouvertScope extends ng.IScope {
    }
    class CreationDecouvertControleur {
        private $scope;
        private $location;
        private $timeout;
        private creationDecouvertService;
        private decouvertService;
        private adresseService;
        private serviceAgentExtended;
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        nomUsageSignataire: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        indicateurRequeteEnCours: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        private context;
        private static SANS_COMMISSION;
        private static COMMISSION_ENGAGEMENT;
        private static COMMISSION_NON_UTILISATION;
        private static DUREE_INDETERMINEE;
        private static DUREE_INDETERMINEE_COURT;
        static $inject: string[];
        private decouvert;
        private typesDecouvert;
        private typesDureeDecouvert;
        private typesCommission;
        private showButtonImprimer;
        private lettreAImprimer;
        private helpInfoBullLettre;
        private helpInfoBullMontant;
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        adresse: IAdresse;
        infosLettreConfirmation: ILettreConfirmationDecouvert;
        constructor($scope: ICreationDecouvertScope, $location: ng.ILocationService, $timeout: ng.ITimeoutService, creationDecouvertService: ICreationDecouvertService, decouvertService: IDecouvertService, adresseService: IAdresseService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /** Initialisation du contexte depuis le Scope */
        private initialiserContexte();
        private initialiserDecouvertParDefaut();
        private setTauxInteretDuCompte();
        /** Mise à jour du taux et le libellé barême du découvert à créer */
        private setTauxEtLibelleBareme(conditionArreteSynthese, listeConditionDebitriceGenerale);
        /** Mise à jour du libellé taux barême en faisant un nouvel appel du service informationGlobale */
        private setLibelleAvecNouveauxParemetres(conditionArreteSynthese);
        private getLibelleConditionDebitrice(listeConditionDebitricesGenerales, baremeDebiteur);
        private initialiserTypesDecouvert(context);
        private initialiserTypesDureeDecouvert(context);
        changerTypeDecouvert(typeDecouvert: string): void;
        private initialiserTypesCommission();
        private initialiserinfoBullData();
        getTypesDecouvert(): Object[];
        getTypesCommission(): Object[];
        getTypeDecouvert(cle: string): Object;
        getTypeDureeDecouvert(cle: string): Object;
        getTypeCommission(cle: string): Object;
        afficherTaux(choix: string): boolean;
        afficherPeriodicite(choix: string): boolean;
        /** Indique si on affiche où non le champ pourcentage CA confié à l'entreprise */
        affichePourcentageCAConfie(): boolean;
        imprimerLettreDecouvert(): void;
        changerEditionLettreConfirmation(): void;
        /** Indique si on peut modifier la date de fin d'un découvert de type tacite reconduction */
        canEditDateDeFin(): boolean;
        /** Mise à jour de la date de fin en fonction de la durée choisie */
        setDateFin(): void;
        /** Calcule de la durée en mois entre deux date données */
        private getDuree(dateDebut, dateFin);
        /** mise à jour de la durée selon la date de fin choisie */
        setDuree(): void;
        /** Création d'un nouveau découvert. */
        creerNouveauDecouvert(): void;
        /** Retour à la page d'accueil, liste des découvert */
        revenirListeDecouverts(): void;
        afficherConditionsArretes(): void;
        afficherGarantie(): void;
        /**
         * Méthode appelée pour poursuivre l'ouverture des P/S dans GGO
         * Doit normalement être gérée par GGO
         */
        valider(): void;
        /**
         * Méthode appelée pour l'annulation de la création de l'autorisation de découvert et retour dans GGO
         * Doit normalement être gérée par GGO
         */
        annuler(): void;
        /**
         * Méthode pour récupérer l'adresse du titulaire du découvert
         */
        recupererAdresse(): MyWay.Services.IPromesse<Array<IAdresse>>;
        /**
         * Méthode pour récupérer les infos nécessaires à l'édition de la lettre de confirmation
         */
        recupererInfosLettreConfirmation(): MyWay.Services.IPromesse<ILettreConfirmationDecouvert>;
    }
}

declare module decouvert.creationDecouvert {
    function mwCreationDecouvert(): ng.IDirective;
}

declare module decouvert.creationDecouvert {
    interface ICreationDecouvertService extends ICommonService {
        getAuthenticatedAgent: () => MyWay.Services.IPromesse<MyWay.Services.Context.AuthentificationInfo>;
        getListeTypeDecouvert: () => string[];
        getListeTypeDureeDecouvert: () => string[];
        getListeTypeCommission: () => string[];
        getInformationGlobale: (context: any, indicateurInfoDecouvert: string, codeAction: string) => ng.IPromise<Object>;
        enregistrerDecouvert: (decouvertACreer: IDecouvert, context: any) => ng.IPromise<IDecouvert>;
    }
    class CreationDecouvertService extends CommonService implements ICreationDecouvertService {
        private serviceAgentExtended;
        private static SERVICE_CCE_URL;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getAuthenticatedAgent(): MyWay.Services.IPromesse<MyWay.Services.Context.AuthentificationInfo>;
        getListeTypeDecouvert(): string[];
        getListeTypeDureeDecouvert(): string[];
        getListeTypeCommission(): string[];
        /** Ce service permet de récupérer l'objet informationGlobale du CCE */
        getInformationGlobale(context: any, indicateurInfoDecouvert: string, codeAction: string): ng.IPromise<Object>;
        /** Ce service permet de créer un nouveau découvert: */
        enregistrerDecouvert(decouvertACreer: IDecouvert, context: any): ng.IPromise<IDecouvert>;
    }
}

declare module decouvert.decouvert {
    interface IDecouvertControleurScope extends ng.IScope {
    }
    class DecouvertControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Paramètres directive avec interfaçage GGO
         */
        idBloc: string;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Variables pour appel directives filles
         */
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        informationContrat: contratCCE.Model.IInformationGlobaleOuverture;
        informationGlobale: contratCCE.Model.IInformationGlobale;
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        nomUsageSignataire: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        /**
         * Autres variables
         */
        indicateurRequeteEnCours: boolean;
        constructor($scope: IDecouvertControleurScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        exploiterDonneesGGO(): void;
        validerFormulaire: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        mettreEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        validerDecouvert(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /** Retour à la page de création découvert */
        revenirDecouvert(): void;
    }
}

declare module decouvert.decouvert {
    function mwDecouvert(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-erreur-seuil-int-deb
 * @author S0080162 (François GALOPIN
 */
declare module decouvert.erreurDecouvert {
    /**
     * Déclaration du contrôleur
     */
    class MwErreurDecouvertControleur {
        static $inject: any[];
        mwErreur: MyWay.Services.Erreur;
        constructor();
    }
}

declare module decouvert.erreurDecouvert {
    function mwErreurDecouvert(): ng.IDirective;
}

declare module decouvert.listeDecouverts {
    interface IListeDecouvertsControleurScope extends ng.IScope {
    }
    class ListeDecouvertsControleur {
        private $scope;
        private $location;
        private decouvertService;
        private adresseService;
        private modalService;
        private serviceAgentExtended;
        static $inject: string[];
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        nomUsageSignataire: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        context: IAppContexte;
        static IMPRIMER_LETTRE: string;
        static RECONDUIRE: string;
        indicateurRequeteEnCours: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        private tableOptions;
        private decouverts;
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        adresse: IAdresse;
        infosLettreConfirmation: ILettreConfirmationDecouvert;
        constructor($scope: IListeDecouvertsControleurScope, $location: ng.ILocationService, decouvertService: IDecouvertService, adresseService: IAdresseService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /** Initialisation du contexte depuis le Scope */
        private initialiserContexte();
        /** Initialisation des options de la table des découverts */
        private initialiserTableOptions();
        /** Chargement des colonnes de la tables des découverts */
        private getTableColumns();
        /** Chargement de la liste des découverts */
        private initialiserListeDesDecouverts();
        /** cette méthode précise si la ligne sélectionné du tableau est un découvert de type tacite reconduction on non */
        isTaciteReconduction(): boolean;
        /** cette méthode précise si la ligne sélectionné du tableau est un découvert dont l'état est annulé ou échu */
        isDecouvertAnnuleEchu(): boolean;
        isOkPourImpression(): boolean;
        isModifiableOuSupprimable(): boolean;
        private ouvrirCreationDecouvert();
        /** Construction des prérequis pour la création de la modale de modification d'un decouvert */
        private buildModificationModalOptions(decouvert);
        ouvrirModificationDecouvert(decouvertsSelectionnes: Array<IDecouvert>): void;
        supprimerDecouvert(decouvertsSelectionnes: Array<IDecouvert>): void;
        imprimerLettreDecouvert(decouvertsSelectionnes: Array<IDecouvert>): void;
        /**
         * Méthode pour récupérer l'adresse du titulaire du découvert
         */
        recupererAdresse(): MyWay.Services.IPromesse<Array<IAdresse>>;
        /**
         * Méthode pour récupérer les infos nécessaires à l'édition de la lettre de confirmation
         */
        recupererInfosLettreConfirmation(decouvertSelectionne: IDecouvert): MyWay.Services.IPromesse<ILettreConfirmationDecouvert>;
    }
}

declare module decouvert.listeDecouverts {
    function mwListeDecouverts(): ng.IDirective;
}

declare module decouvert.modificationDecouvert {
    interface IModificationDecouvertScope extends ng.IScope {
        modificationDecouvert: ModificationDecouvertControleur;
    }
    class ModificationDecouvertControleur {
        private $scope;
        private $modalInstance;
        private $modal;
        private data;
        static $inject: string[];
        private modalDatas;
        private dateFinNotOk;
        calendrierOuvert: boolean;
        constructor($scope: IModificationDecouvertScope, $modalInstance: any, $modal: any, data: any);
        ok(decouvertModifie: IDecouvert): void;
        close(): void;
        /** Listener rajouter pour la date de fin. ceci permet d'afficher un message d'erreur à l'utilisateur */
        private addListenerToDate();
        /** Cette méthode vérifie si le découvert à modifier est de type tacite reconduction ou non */
        isTaciteReconduction(): boolean;
        /** Cette méthode vérifie si le découvert à modifier est de type permanent ou non */
        isPermanent(): boolean;
    }
}

declare module decouvert.substitutionDecouvert {
    interface ISubstitutionDecouvertControleurScope extends ng.IScope {
    }
    class SubstitutionDecouvertControleur {
        private $scope;
        private decouvertService;
        private serviceAgentExtended;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        indicateurRequeteEnCours: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        constructor($scope: ISubstitutionDecouvertControleurScope, decouvertService: IDecouvertService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module decouvert.substitutionDecouvert {
    function mwSubstitutionDecouvert(): ng.IDirective;
}
