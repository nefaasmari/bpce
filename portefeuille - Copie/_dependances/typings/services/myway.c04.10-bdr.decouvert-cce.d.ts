
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
        listeActesGestionDecouvert: Array<string>;
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
        changerActeGestionOffre(acteGestionOffre: string): void;
        executerDirectiveOuverture(): boolean;
        executerDirectiveAvenant(): boolean;
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
        _blocChoice_: (choice_SIPCGCE_Forfait_ProSection0_BLOC_1 | choice_SIPCGCE_Forfait_ProSection0_BLOC_2 | choice_SIPCGCE_Forfait_ProSection0_BLOC_3 | choice_SIPCGCE_Forfait_ProSection0_BLOC_4 | choice_SIPCGCE_Forfait_ProSection0_BLOC_5 | choice_SIPCGCE_Forfait_ProSection0_BLOC_6 | choice_SIPCGCE_Forfait_ProSection0_BLOC_61 | choice_SIPCGCE_Forfait_ProSection0_BLOC_7 | choice_SIPCGCE_Forfait_ProSection0_BLOC_8 | choice_SIPCGCE_Forfait_ProSection0_BLOC_9 | choice_SIPCGCE_Forfait_ProSection0_BLOC_10 | choice_SIPCGCE_Forfait_ProSection0_BLOC_12 | choice_SIPCGCE_Forfait_ProSection0_BLOC_13 | choice_SIPCGCE_Forfait_ProSection0_BLOC_91 | choice_SIPCGCE_Forfait_ProSection0_BLOC_92 | choice_SIPCGCE_Forfait_ProSection0_BLOC_93 | choice_SIPCGCE_Forfait_ProSection0_BLOC_94 | choice_SIPCGCE_Forfait_ProSection0_BLOC_62 | choice_SIPCGCE_Forfait_ProSection0_BLOC_41)[];
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
    interface choice_SIPCGCE_Forfait_ProSection0_BLOC_13 {
        BLOC_13: SIPCGCE_Forfait_ProSection0BLOC_13;
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
        LIGNE_SIGNATAIRE2: SIPCGCE_Forfait_ProSection0LIGNE_SIGNATAIRE2;
        NUM_COMPTE: string;
        MTPCDD: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0LIGNE_SIGNATAIRE2 {
        DESIGNATION2: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_10 {
        UDDDE: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_13 {
        La_Etab1: string;
        accord_Tenu1: string;
        la_Etab1: string;
        ala_Etab1: string;
        la_Etab2: string;
        la_Etab3: string;
        dela_Etab1: string;
        NOM_CLIENT: string;
        paveSignature: GENERIC_SIGNAT_SANS_CNIL_ELEC;
        dela_Etab2: string;
        la_Etab4: string;
        dela_Etab4: string;
        la_Etab5: string;
        ala_Etab5: string;
        site_Etab: string;
        majLaEtab: string;
    }
    interface GENERIC_SIGNAT_SANS_CNIL_ELEC {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
        QUALITE_NOM_SIGNATAIRE_1: string;
        QUALITE_NOM_SIGNATAIRE_2: string;
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
        accord_Ce_Dernier1: string;
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
        txPeriodeJourn: string;
        la_Etab1: string;
    }
    interface SIPCGCE_Forfait_ProSection0BLOC_62 {
        dela_Etab1: string;
        TIPBD1: string;
        txPeriodeJourn: string;
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
    function createDocument(decouvert: decouvert.IDecouvert, authentification: MyWay.Services.Context.AuthentificationInfo, parametresComptables: MyWay.Services.Context.ParametresComptables, designationClient: string, adresse: decouvert.IAdresse, nomDestinataire: string, nomDestinataire2: string, designataireSignataire: string, designataireSignataire2: string, nomSignataire: string, nomSignataire2: string, libelleEtablissement: decouvert.Modeles.OutilImpressionLibelleEtablissementService.ILibelleEtablissement, infosLettreConfirmation: decouvert.ILettreConfirmationDecouvert): Modele.SIPCGCE_Forfait_Pro;
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
        acteGestionDecouvert: string;
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
        nomUsageSignataire: number;
        designataireSignataire: string;
        nomSignataire: string;
        nomUsageSignataire2: number;
        designataireSignataire2: string;
        nomSignataire2: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/decouvertcce/v1/autorisationDecouvert"
 * @author S0080162 (François Galopin)
 */
declare module decouvert {
    interface IAutorisationDecouvert {
        listeAutorisation: Array<IAutorisation>;
        listeDecouvertDuree: Array<IDecouvertDuree>;
    }
    interface IAutorisation {
        /**
         * Ce code indique la périodicité pour le calcul de la commission d'engagement appliquée à la ligne de découvert.
         */
        periodiciteComEngagement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         * cf Fichier des implantations bancaires
         * Un Etablissement bancaire peut disposer de plusieurs guichets
         */
        codeGuichet: string;
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un compte géré par un Etablissement du GCE.
         */
        numeroCompte: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect
         */
        numeroPersonne: number;
        /**
         * Date de début d'autorisation de découvert
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Date de fin d'autorisation de découvert
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Montant du découvert autorisé
         */
        montantDecouvertAutorise: number;
        /**
         * Type de découvert
         * '01' Tacite Reconduction
         * '02' Nouveau
         * '03' Renouvellement
         * '04' Découvert temporaire
         * '05' Découvert technique
         * '06' Facilité de caisse
         * '07' Découvert permanent
         */
        typeDecouvert: string;
        /**
         * Code précisant si le local doit éditer une "lettre de confirmation" qui n'est autre qu'un avenant au contrat de découvert.
         * Cette information n'est plus reprise sur le relevé de compte.
         * 'O'        OUI - Edition d'un découvert à durée DETERMINEE
         * 'P'        OUI - Edition d'un découvert à durée INDETERMINEE
         * 'N'        NON
         */
        indicEditionLettreConfirmation: string;
        /**
         * Ce code indique si le découvert de type "tacite
         * reconduction", renouvelé automatiquement a été
         * ou non validé par le chargé de clientèle.
         *
         * Lors de la création manuelle d'un découvert de type Tacite Reconduction, ce code est systématiquement valorisé à OUI.
         * Lors du renouvellement automatique d'un découvert cette information est valorisée par défaut à NON.
         * Même si ce code est à NON, le découvert est actif.
         */
        indicateurReconductionDecouvert: boolean;
        /**
         * Ce code indique si pour la ligne de découvert la commission d'engagement est possible.
         * 'O'        OUI : commission d'engagement à prélever
         * 'N'        NON : pas de prélèvement de la commission d'engagement
         * ' '        NON (anciens découverts)
         */
        indicPossibiliteComEngagement: boolean;
        /**
         * Valeur du taux pour la commission d'engagement pour la ligne de découvert.
         * Taux annuel.
         */
        valeurTauxComEngagement: number;
        /**
         * Montant des frais de dossier appliqué pour la ligne de découvert.
         */
        montantFraisDossierDecouvert: number;
        /**
         * Pourcentage du Chiffre d'Affaire de l'entreprise confié par la ligne de découvert.
         */
        pourcentCAConfieTauxDecouvert: number;
        /**
         * Code monnaie de fonctionnement
         */
        codeDevise: string;
        /**
         * Montant de l'autorisation de découvert pour un compte CCE.
         * Ce montant est exprimé suivant les cas :
         * - dans la monnaie de tenue de compte (c'est à dire en euros ou en devise)
         * - ou systématiquement en EUROS (conversion en euros si compte en devise)
         */
        montantAutorisationDecouvert: number;
        /**
         * Montant des frais de dossier appliqué pour la ligne de découvert.
         */
        fraisDossierDecouvertDevise: number;
        /**
         * Numéro d'identification de l'offre souscrite par  un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffreSouscrite: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Code devise des commissions
         */
        codeDeviseCommission: string;
        /**
         * Type de ressources servant à financer un découvert CCE.
         * Exemples :
         * ' '        Non réglementé
         * 'L'        LDD/LA (Livret Développement Durable / Livret A)
         */
        codeRessourceFinancement: string;
        /**
         * Ce code indique si pour la ligne de découvert il y a une commission de non utilisation du découvert du CCE à prélever (CNU)
         * 'O'        OUI : commission de non utilisation à prélever
         * 'N'        NON : pas de choix de la CNU à prélever
         * ' '        NON (anciens découverts)
         */
        indicateurPrelevementCNU: boolean;
        /**
         * Valeur du taux de la commission de non utilisation pour la ligne de découvert/crédit
         * Représente un pourcentage à appliquer sur le montant non utilisé du découvert/ligne de crédit
         * Taux annuel.
         */
        tauxCommissionNonUtilisation: number;
        /**
         * Identifie un contrat détenu par un client auprès d'un Etablissement du Groupe CE :
         * Concerne l'épargne, les engagements, les services ...
         */
        identifiantContratEntreprise: number;
        /**
         * Taux effectif global.
         * Il doit théoriquement être inférieur au taux de l'Usure.
         */
        tauxEffectifGlobal: number;
        /**
         * Libellé du taux débiteur de référence.
         */
        libelleTauxDebiteur: string;
        /**
         * Taux à ajouter au barème débiteur Caisse par défaut
         * obtenir le taux d'intérêts débiteurs qui sera pratiqué pour le calcul des intérêts débiteurs, dans le cas où le compte n'a pas de conditions d'arrêté spécifiques et que sa cotation client n'est pas valorisée.
         */
        variationBaremeTauxDebiteurDef: number;
        /**
         * Taux utilisé pour le calcul des intérêts débiteurs.
         * En principe, ce taux doit être inférieur au taux de l'usure.
         * Ce taux correspond à un taux débiteur augmenté de la variation par rapport à ce taux (variation spécifique au client).
         * ex : P03 + 1,000001%
         */
        tauxInteretGlobalDebiteur: number;
        /**
         * Identifie un produit/service d'engagement  au sens Bale2
         * BALE 2 : Concerne les contrats d'engagement détenus par les clients du Groupe et gérés par le GCE
         */
        codeProduitEngagement: string;
        /**
         * Numéro de contrat découvert
         */
        identifiantContrat: number;
        /**
         * Taux pour le calcul de la prime d'assurance "professionnels" à appliquer pour un personne.
         * Ce taux varie selon la périodicité.
         * Si la périodicité est mensuelle, le taux est un taux mensuel.
         * Si la périodicité est annuelle, le taux est un taux annuel.
         */
        tauxCalculePrimeAssurance: number;
        /**
         * Date de création profil découvert
         * Type date au format yyyy-MM-dd
         */
        dateCreationProfil: string;
        /**
         * Heure de création profil découvert
         */
        heureCreationProfil: string;
        /**
         * Date de modification profil découvert
         * Type date au format yyyy-MM-dd
         */
        dateModificationProfil: string;
        /**
         * Précise si le découvert a fait l'objet d'une  annulation (fonction PTMS : "supprimer").
         * Si, après une annulation d'un découvert, une modification intervient, ce code annulation repasse à NON.
         * Pour les découverts de type Tacite Reconduction, une annulation interdit le renouvellement du découvert.
         */
        codeAnnulation: string;
        /**
         * Ce code, attaché à un découvert négocié ou multi-service indique si le découvert est actif ou inactif,  pour une date donnée.
         * 'E'        Découvert échu
         * 'A'        En cours
         * 'V'        A venir
         */
        codeEtat: string;
        /**
         * Indique le taux de base de référence pour un taux révisable
         * Concerne les engagements DECOUVERT, CREDIT   amortissable et Renouvelable
         */
        codeTauxBase: string;
        /**
         * Date de fin de découvert modifiée
         * Type date au format yyyy-MM-dd
         */
        dateFinDecouvertModifie: string;
        /**
         * Ce code précise pour un découvert si sa durée d'autorisation est déterminée ou indéterminée.
         * 'D'      Déterminée
         * 'I'        Indéterminée
         */
        typeDureeDecouvert: string;
        /**
         * Le taux journalier est obtenu en divisant le TEG annuel par 365(366).
         */
        tauxPeriodeJournalier: number;
        /**
         * Indicateur découvert confirmé.
         * O / N
         * utilisé à partir de la version W du segment question pour le POST ( PC21 )
         */
        indicateurDecouvertConfirme: boolean;
    }
}

declare module decouvert.Modeles.BaremeConditionEtablissement {
    interface IDateValeurDefaut {
        codeProvenance: string;
        typeCalendrier: string;
        typeOperationInterbancaire: string;
        typeProvenance: string;
        typeOperation: string;
        nombreJours: number;
    }
    interface IBaremesDebiteur {
        identifiantBaremeDebiteur: number;
        dateDebutValidite: string;
        dateFinCommercialisation: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        codeNiveauResponsabilite: string;
        codeTaux: string;
        libelleTauxDebiteur: string;
        periodiciteMajTaux: string;
        valeurTauxReference: number;
        indicateurBaremeDefaut: string;
        nombrePaliersActifs: number;
        nombreMaxPaliers: number;
        margeMiniBareme: number;
        margeMaxBareme: number;
        codeDevise: string;
        codeTauxSubstitution1: string;
        libelleTauxSubstitution1: string;
        valeurTauxSubstitution1: number;
        periodiciteMajTauxSubst1: string;
        codeTauxSubstitution2: string;
        libelleTauxSubstitution2: string;
        periodiciteMajTauxSubst2: string;
        valeurTauxSubstitution2: number;
        codeTauxUsure: string;
        libelleTauxUsure: string;
        tauxUsure: number;
        codeGestionTechnique: string;
    }
    interface ICommissions {
        numeroBaremeCommission: number;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionImmobilisation: number;
        commissionMouvement: number;
        fraisOperation: number;
        codeNiveauResponsabilite: string;
        dateCreationBareme: string;
        dateModificationBareme: string;
        codeMonnaie: string;
        codeGestionTechnique: string;
        montantFraisTenueCompte: number;
        libelleBaremeCommissions: string;
        indicateurBaremeCommission: string;
        codeMarche: string;
    }
    interface IBaremeConditionEtablissement {
        baremeDebiteur: Array<IBaremesDebiteur>;
        commissions: Array<ICommissions>;
        dateValeurDefaut: Array<IDateValeurDefaut>;
    }
    interface IBarementConditionEtablissementQuery {
        codeEtablissement: string;
        codeGuichet: string;
        codeNatureCompte?: string;
        typeContratEntreprise?: string;
        codeFonction: string;
        codeMonnaie: string;
        codeCotation?: string;
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
        montantAvecSymbole?: string;
        codeDeviseCommission: string;
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
        confirme: string;
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
        tauxPeriodeJournalier?: number;
        indicateurPossibiliteComEngagement?: boolean;
        indicateurPrelevementCNU?: boolean;
        dateCreationProfil?: Date;
        heureCreationProfil?: string;
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

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/habilitation/v2/habilitationMysys"
 * @author S0080162 (François Galopin)
 */
declare module decouvert {
    interface IHabilitationGetQuery {
        codeAgent: string;
        codeEtablissement: string;
        typeFonction?: string;
    }
    interface ICHSC5Z {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code état ( fin / reprise )
         */
        codeEtatFinReprise: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Date de dernière modification
         * Type date au format yyyy-MM-dd
         */
        dateDerniereModification: string;
    }
    interface ICHSW32 {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code état ( fin / reprise )
         */
        codeEtatFinReprise: string;
        /**
         * Code domaine
         */
        codeDomaine: string;
        /**
         * Code application Cartographie
         */
        codeApplication: string;
        /**
         * Code groupe d'habilitation
         */
        codeGroupeHabilitation: string;
        /**
         * Position Habilitation dans vecteur
         */
        positionHabilitationDansVecteur: number;
        /**
         * Code habilitation
         */
        codeHabilitation: string;
        /**
         * Code Transaction App. Bancaire
         */
        codeTransactionAppbancaire: string;
        /**
         * Code Application Externe Poste
         */
        codeApplicationExternePoste: string;
    }
    interface IContainer {
        CHSW03: Array<ICHSW03>;
        CHSW1U: Array<ICHSW1U>;
        CHSW45: Array<ICHSW45>;
        CHSW02: Array<ICHSW02>;
        CHSW1N: Array<ICHSW1N>;
    }
    interface ICHSW01 {
        /**
         * Code agent alphanumérique
         */
        codeAgent: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Référence externe agent
         */
        codeAgent1: number;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Type fonction
         */
        typeFonction: string;
        /**
         * Code suite de descente
         */
        codeSuiteDescente: string;
        /**
         * Code domaine
         */
        codeDomaine: string;
        /**
         * Code application Cartographie
         */
        codeApplication: string;
        /**
         * Code groupe d'habilitation
         */
        codeGroupeHabilitation: string;
        /**
         * Date de dernière modification
         * Type date au format yyyy-MM-dd
         */
        dateDerniereModification: string;
        /**
         * Heure de traitement
         */
        heureTraitement: string;
        /**
         * Code Action
         */
        codeAction: string;
    }
    interface ICHSW03 {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Type fonction
         */
        typeFonction: string;
        /**
         * Code domaine
         */
        codeDomaine: string;
        /**
         * Code application Cartographie
         */
        codeApplication: string;
        /**
         * Code groupe d'habilitation
         */
        codeGroupeHabilitation: string;
        /**
         * Vecteur valorisé
         */
        GRCHVV: string;
    }
    interface ICHSW1U {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Alphanumerique Banalisée832
         */
        alphanumeriqueBanalisee832: string;
    }
    interface ICHSW2B {
        /**
         * Code agent alphanumérique
         */
        codeAgent: string;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Référence externe agent
         */
        codeAgent1: number;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Type fonction
         */
        typeFonction: string;
        /**
         * Code suite de descente
         */
        codeSuiteDescente: string;
        /**
         * Code domaine
         */
        codeDomaine: string;
        /**
         * Code application Cartographie
         */
        codeApplication: string;
        /**
         * Code groupe d'habilitation
         */
        codeGroupeHabilitation: string;
        /**
         * Date de dernière modification
         * Type date au format yyyy-MM-dd
         */
        dateDerniereModification: string;
        /**
         * Heure de traitement
         */
        heureTraitement: string;
        /**
         * Code Action
         */
        codeAction: string;
    }
    interface ICHSW45 {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Type fonction
         */
        typeFonction: string;
        /**
         * Code domaine
         */
        codeDomaine: string;
        /**
         * Code application Cartographie
         */
        codeApplication: string;
        /**
         * Code groupe d'habilitation
         */
        codeGroupeHabilitation: string;
        /**
         * Vecteur valorisé
         */
        GRCHVV: string;
    }
    interface ICHSW02 {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Date début validité référentiel
         * Type date au format yyyy-MM-dd
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité référentiel
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
    }
    interface ICHSW1N {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code suite de descente
         */
        codeSuiteDescente: string;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "devise/v1/listeDevise"
 * @module decouvert.Modeles.ListeDevise
 * @author S0077482 (Thomas Prat)
 */
declare module decouvert.Modeles.ListeDevise {
    interface IDevise {
        codeDevise: string;
        libelleDevise: string;
        symboleDevise: string;
        nombreDecimalesReelles: number;
        nombreDecimalesGerees: number;
    }
}

declare module decouvert.Modeles.OutilImpressionLibelleEtablissementService {
    interface IOutilImpressionLibelleEtablissementGetQuery {
        codeEtablissement: string;
    }
    interface ILibelleEtablissement {
        libelleMinuscule: string;
        libelleMajuscule: string;
        genreNomEtablissement: string;
        url: string;
        nomServiceInternet: string;
        articleMinusculeDeLaDu: string;
        articleMinusculeALaAu: string;
        articleMinusculeLaLe: string;
        adjectifMinusucleSaSon: string;
        articleMajusculeDeLaDu: string;
        articleMajusculeALaAu: string;
        articleMajusculeLaLe: string;
        adjectifMajusculeSaSon: string;
        articleReseauDeLaDu: string;
        articleServiceRelCliDeLaDuDeSon: string;
        articleServiceRelCliALaAuASon: string;
        codeEtablissement: string;
        articleLaLe: string;
        articleALaAu: string;
        articleDeLaDu: string;
        etablissementLibelleLong: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "/tiers/v3/noyau"
 * @author S0080162 (François Galopin)
 */
declare module decouvert {
    interface ITiersNoyauGetQuery {
        codeEtablissement?: string;
        identifiantPersonne?: number;
        numeroChrono?: number;
        numeroLieuActivite?: number;
    }
    interface IIdentificationTiers {
        numeroChrono: number;
        numeroLieuActivite: number;
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiers {
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypePersonne: string;
        dateEntreeRelation: Date;
        codeGuichetRisque: string;
        eligibiliteTiers: string;
        identifiantEDSDomiciliation: string;
        indicateurDroitCompte: string;
        identifiantClientBad: string;
    }
    interface IInformationParticulier {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        codeCivilite: string;
        libelleCivilite: string;
        sexe: string;
        libelleSexe: string;
        id: string;
        nomMarital: string;
        designationCourte: string;
        prenom: string;
        dateNaissance: Date;
        codeCommuneNaissance: string;
        libelleCommuneNaissance: string;
        codeDepartementNaissance: string;
        libelleDepartementNaissance: string;
        codeInseePaysNationalite: string;
        libelleNationalite: string;
        dateDeces: Date;
        codeAppartenanceReseau: string;
        libelleAppartenanceReseau: string;
        indicSocietaire: string;
        codeCapaciteJuridique: string;
        libelleCapaciteJuridique: string;
        codePaysNaissance: string;
        libellePaysNaissance: string;
        codeInseePaysDoubleNationalite: string;
        libelleDoubleNationalitePays: string;
        situationFamille: string;
        libelleCodeSituationFamiliale: string;
        dateEffetSituationFamille: Date;
        codeRegimeMatrimonial: string;
        libelleRegimeMatrimonial: string;
        nombreEnfantACharge: number;
        codeCategorieSocioProf: string;
        libelleCsp: string;
        dateEffetCsp: Date;
        nomEmployeur: string;
        numeroSirenEmployeurPrincipal: string;
        dateEmbaucheParEmployeurActuel: Date;
        codeTypeContratTravail: string;
        libelleCodeTypeContratTravail: string;
        dateFinContrat: Date;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeResident: string;
        identiteRelationEcoMenage: number;
        referenceExterneEds: number;
        typeClauseMatrimoniale: string;
        codeDonationEntreEpoux: string;
        indicateurAutoEntrepreneur: string;
        autresPrenomsEtatCivil: string;
        indicDomiciliationRevenus: string;
        indicEnregHorsPresenceClient: string;
        libelleProfessionParticulier: string;
        codeTypeSecteurEmploi: string;
        indicateurEnvoiCourrier: string;
        codePieceJustificative: string;
        dateObtentionPieceJustificative: Date;
        referencePieceJustificative: string;
        noIdentificationFiscaleNifNni: string;
        codeTypeNifNni: string;
        dateNaturalisation: Date;
        dateNaissanceConjoint: Date;
        indicDecesPresume: string;
        dateDecesPresume: Date;
        eligibiliteTiers: string;
        indicDroitCompte: string;
        numeroSirenAutoEntrepreneur: string;
        dateEffetOptionResidence: Date;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        libelleStatutFatca: string;
        dateAttributionStatutFatca: Date;
        identifiantBad: string;
        indicateurActiviteProfessionnel: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationProfessionnel {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroSiren: string;
        codeTypeNifNni: string;
        libelleCodeTypeNifNni: string;
        noIdentificationFiscaleNifNni: string;
        nomCommercial: string;
        raisonSocial: string;
        codeSituationJuridique: string;
        libelleSituationJuridiqueProf: string;
        codeINSEE: string;
        libelleCategorieJuridiqueInsee: string;
        dateCreationJuridique: Date;
        codeNafInsee: string;
        libelleEtablissement: string;
        codeRegimeFiscal: string;
        libelleCodeRegimeFiscal: string;
        montantChiffreAffaires: number;
        anneeChiffreAffaires: number;
        montantCapitalSocial: number;
        dateArreteComptable: number;
        idEdsInterne: number;
        activiteEconomiqueReelleProf: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeDevise: string;
        codeAppartenanceReseau: string;
        codeAgentEconomique: string;
        codeTypeCommerceOrganise: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        referencePieceJustificativeProf: string;
        codeCotation: string;
        edsDomiciliation: number;
        sigle: string;
        codeTypeTiers: string;
        effectif: number;
        codeBanqueEntitePilote: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEco: string;
        indicateurEirl: string;
        dateDebutOptionEirl: Date;
        dateFinOptionEirl: Date;
        indicOptionOpposabiliteEirl: string;
        indicPersMoraleOrganismePublic: string;
        indicPersMoraleMarcheReglemente: string;
        indicEditionBenefrEffectifs: string;
        identifiantLei: string;
        codeEmir: string;
        dateClotureJuridiqueProf: Date;
        codeIndicateurEntrepEtrangere: string;
        indicDelegationClientDeclarat: string;
    }
    interface IInformationEtablissement {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        designationEntiteTitulaire: string;
        codeStatutLieuActivite: string;
        numTelex: string;
        numTelecopieur: string;
        effectifDuLieuActivite: number;
        enseigneCommercialeLieuActivit: string;
        dateDebut: Date;
        dateFin: Date;
        activiteEconomiqueReelleLieu: string;
        dateEnregistrementLieuActivite: Date;
        dateDerniereMiseAJourLieu: Date;
        dateDerniereVerifLieuActivite: Date;
        designationLongueLieuActivite: string;
        numeroSIREN: string;
        complementSIRET: string;
        codeFamilleApeInsee: string;
        deuxDernierCaractereApe: string;
        codeResident: string;
        dateDernTracageApeProf: Date;
        libelleTracageCodificationApe: string;
        typeTracageCodificationApe: string;
        codeFamilleNAFINSEE: string;
        troisDerniersCaracteresNAF: string;
        libelleEtablissement: string;
        codeRafraichLieuActivite: string;
    }
    interface IAdresseNoyau {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        numeroChrono: number;
        numeroLieuActivite: number;
        identifiant: number;
        codeType: string;
        libelleType: string;
        ligne2AFNOR: string;
        ligne3AFNOR: string;
        ligne4AFNOR: string;
        ligne5AFNOR: string;
        ligne6AFNOR: string;
        codePostalPTT: string;
        codePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseelocalite: string;
        libelleInseeLocalite: string;
        codeTypeRetourPtt: string;
        libelleCodeTypeRetourPtt: string;
        indicateurEnvoiCourrier: string;
        inddifadresseFiscalePostale: string;
        numeroVoiePttVillePlus50000Hab: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephone: string;
        codeValiditeAdresseUniserv: string;
        codeExistenceListeRouge: string;
        numeroFAX: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        libelleCommune: string;
        codeTypeLieu: string;
        dateDernierRetourPttAdresse: Date;
        nombreRetourPtt: number;
        codePostalFranceEtranger: string;
    }
    interface IMedia {
        codeRetour: number;
        codeEtab: string;
        numeroPersonne: number;
        typeMoyenContact: string;
        adresseMoyenContact: string;
        codeIndicatifInternationalTel: string;
        numeroTelephone: string;
        codeOptIn: string;
        indicEnvoiMediaProOptOut: string;
        indicEnvoiSmsFax: string;
        telephoneEmailPrefere: string;
        telephoneEmailSecurise: string;
    }
    interface IInformationTiersLie {
        codeType: string;
        codeSensLienInterPersonnes: string;
        libelleSensLien: string;
        codeEtablissementTiersLie: string;
        identifiantTiersLie: number;
        indicateurRattRelationEco: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresseNoyau>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
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

/***
 * Service concernant le service REST "/contratcceparametre/v1/baremeConditionEtablissement"
 * @module decouvert.Services
 * @author S0077482 (Thomas Prat)
 */
declare module decouvert.Services {
    /**
     * Classe du service
     */
    class BaremeConditionEtablissementService implements IBaremeConditionEtablissementService {
        private serviceAgentExtended;
        static $inject: string[];
        listeBareme: Modeles.BaremeConditionEtablissement.IBaremesDebiteur[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Methode pour récupérer la liste de bareme enregistrée
         * @returns Modeles.BaremeConditionEtablissement.IBaremesDebiteur[]
         */
        getListeBaremeSauvegardee(): Modeles.BaremeConditionEtablissement.IBaremesDebiteur[];
        /**
         * Méthode permettant de récupérer le bareme debiteur et bareme de commission et enregistre la liste de bareme
         * @return {MyWay.Services.IPromesse<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>} La promesse contenant les résultats
         */
        getBaremeConditionEtablissement(baremeConditionEtablissementQuery: Modeles.BaremeConditionEtablissement.IBarementConditionEtablissementQuery): MyWay.Services.IPromesse<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>;
    }
    /**
     * Interface du service
     */
    interface IBaremeConditionEtablissementService {
        getBaremeConditionEtablissement(baremeConditionEtablissementQuery: Modeles.BaremeConditionEtablissement.IBarementConditionEtablissementQuery): ng.IPromise<Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissement>;
        getListeBaremeSauvegardee(): Modeles.BaremeConditionEtablissement.IBaremesDebiteur[];
    }
}

declare module decouvert {
    interface ICommonService {
        getLibelleTypeDecouvert: (cle: string) => string;
        getLibelleTypeDureeDecouvert: (cle: string) => string;
        getLibelleTypeCommission: (cle: string) => string;
        getCodeTypeDecouvert: (cle: string) => string;
        mapperAutorisationVersIDecouvert: (autorisationDecouvert: IAutorisation) => IDecouvert;
        mapperIDecouvertVersAutorisation: (decouvert: IDecouvert, context: any) => IAutorisation;
    }
    class CommonService implements ICommonService {
        $filter: ng.IFilterService;
        listeDeviseService: Services.IListeDeviseDecouvertService;
        sauvegardeListeDeviseService: ISauvegardeListeDeviseService;
        static $inject: string[];
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
        listeDevise: Modeles.ListeDevise.IDevise[];
        constructor($filter: ng.IFilterService, listeDeviseService: Services.IListeDeviseDecouvertService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService);
        getLibelleTypeDecouvert(cle: string): string;
        getLibelleTypeDureeDecouvert(cle: string): string;
        getLibelleTypeDureeDecouvertCourt(cle: string): string;
        getLibelleTypeCommission(cle: string): string;
        /** Ce service permet de mapper l'objet Autorisation manipulé par les services REST par un objet IDecouvert simplifié */
        mapperAutorisationVersIDecouvert(autorisationDecouvert: IAutorisation): IDecouvert;
        private getLibelleReconduction(indicateurReconductionDecouvert);
        private getLibelleConfirme(indicateurConfirme);
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
        /**  Ce service Permet de mapper l'objet Autorisation manipulé par les services REST par un objet IDecouvert simplifié */
        mapperIDecouvertVersAutorisation(decouvert: IDecouvert, context: any): IAutorisation;
        private getIndicateurEditionLettreConfirmation(editionLettreConfirmation);
        getCodeTypeDecouvert(typeDecouvert: string): string;
        /** Cette méthode permet de récupérer l'état d'un découvert à partir du libellé de cet état. */
        private getEtat(etat);
        /**  Cette méthode permet de savoir si le type de commission d'un découvert est Commission d'engagement ou non */
        private isPossibiliteComEngagement(decouvert);
        /**  Cette méthode permet de savoir si le type de commission d'un découvert est Commission de non utilisation de découvert ou non */
        private isPrelevementCNU(decouvert);
        /** Cette méthode permet de savoir si un découvert de type tacite reconduction est renouvelé automatiquement est validé ou non */
        private isReconduction(reconduction);
        /** Cette méthode permet de savoir si un découvert est de type confirmé ou non */
        private isConfirme(confirme);
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
        getListeDeDecouverts: (context: any) => ng.IPromise<IAutorisationDecouvert>;
        modifierDecouvert: (decouvert: IDecouvert, context: any) => ng.IPromise<IDecouvert>;
        supprimerDecouvert: (decouvert: IDecouvert, context: any) => ng.IPromise<Object>;
        substituerDecouvert: (decouvert: ISubstitutionDecouvert) => ng.IPromise<Object>;
        recupererInfosLettreConfirmationDecouvert: (query: ILettreConfirmationDecouvertGetQuery) => ng.IPromise<Object>;
    }
    class DecouvertService extends CommonService implements IDecouvertService {
        private $q;
        private serviceAgentExtended;
        private mwNotificationService;
        $filter: ng.IFilterService;
        listeDeviseService: Services.IListeDeviseDecouvertService;
        sauvegardeListeDeviseService: ISauvegardeListeDeviseService;
        static $inject: string[];
        static ANNULE: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, $filter: ng.IFilterService, listeDeviseService: Services.IListeDeviseDecouvertService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService);
        getAuthenticatedAgent(): any;
        /** Récupération des découvert liés à un compte */
        getListeDeDecouverts(context: any): ng.IPromise<IAutorisationDecouvert>;
        /** Ce service permet de modifier un découvert.  */
        modifierDecouvert(decouvertAmodifier: IDecouvert, context: any): ng.IPromise<IDecouvert>;
        supprimerDecouvert(decouvertASupprimer: IDecouvert, context: any): ng.IPromise<Object>;
        substituerDecouvert(decouvertASubstituer: ISubstitutionDecouvert): ng.IPromise<Object>;
        recupererInfosLettreConfirmationDecouvert(query: ILettreConfirmationDecouvertGetQuery): ng.IPromise<Object>;
    }
}

declare module decouvert {
    class HabilitationService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: IHabilitationGetQuery): ng.IPromise<any>;
    }
    interface IHabilitationService {
        getRequest: (query: IHabilitationGetQuery) => ng.IPromise<any>;
    }
}

/***
 * Service concernant le service REST "devise/v1/listeDevise"
 * @module decouvert.Services
 * @author S0077482 (Thomas Prat)
 */
declare module decouvert.Services {
    /**
     * Classe du service
     */
    class ListeDeviseDecouvertService implements IListeDeviseDecouvertService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer la liste des devises
         * @return {MyWay.Services.IPromesse<Modeles.ListeDevise.IDevise[]>} La promesse contenant les résultats
         */
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
        /**
         * Méthode permettant de récupérer les informations d'une devise à partir de la liste des devises et d'un code devise recherché
         * @param {Modeles.ListeDevise.IDevise[]} listeDevise - la liste des devises
         * @param {string} codeDevise - le code devise recherché
         * @return {MyWay.Services.IPromesse<Modeles.ListeDevise.IDevise[]>} La promesse contenant les résultats
         */
        getDevise(listeDevise: Modeles.ListeDevise.IDevise[], codeDevise: string): Modeles.ListeDevise.IDevise;
    }
    /**
     * Interface du service
     */
    interface IListeDeviseDecouvertService {
        getListeDevise(): ng.IPromise<Modeles.ListeDevise.IDevise[]>;
        getDevise(listeDevise: Modeles.ListeDevise.IDevise[], codeDevise: string): Modeles.ListeDevise.IDevise;
    }
}

declare module decouvert.Services.Rest {
    /**
     * Interface du service Outil Impression Libelle Etablissement
     */
    interface IOutilImpressionLibelleEtablissementService {
        getRequest: (query: Modeles.OutilImpressionLibelleEtablissementService.IOutilImpressionLibelleEtablissementGetQuery) => ng.IPromise<Modeles.OutilImpressionLibelleEtablissementService.ILibelleEtablissement>;
    }
    /**
     * Déclaration du service Outil Impression Libelle Etablissement
     */
    class OutilImpressionLibelleEtablissementService implements IOutilImpressionLibelleEtablissementService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        /**
         * Methode d'appel GET
         */
        getRequest(query: Modeles.OutilImpressionLibelleEtablissementService.IOutilImpressionLibelleEtablissementGetQuery): ng.IPromise<Modeles.OutilImpressionLibelleEtablissementService.ILibelleEtablissement>;
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

declare module decouvert {
    interface ISauvegardeListeDeviseService {
        sauvegarderListeDevise(listeDeviseASauvegarder: Modeles.ListeDevise.IDevise[]): any;
        getListeDeviseSauvegardee(): Modeles.ListeDevise.IDevise[];
    }
    class SauvegardeListeDeviseService implements ISauvegardeListeDeviseService {
        listeDevise: Modeles.ListeDevise.IDevise[];
        sauvegarderListeDevise(listeDeviseASauvegarder: Modeles.ListeDevise.IDevise[]): void;
        getListeDeviseSauvegardee(): Modeles.ListeDevise.IDevise[];
    }
}

declare module decouvert {
    class TiersNoyauV3Service {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getRequest(query: ITiersNoyauGetQuery): ng.IPromise<ITiersNoyau>;
    }
    interface ITiersNoyauV3Service {
        getRequest: (query: ITiersNoyauGetQuery) => ng.IPromise<ITiersNoyau>;
    }
}

declare module decouvert.creationDecouvert {
    interface ICreationDecouvertScope extends ng.IScope {
    }
    class CreationDecouvertControleur {
        private $scope;
        private $q;
        private $location;
        private $timeout;
        private creationDecouvertService;
        private decouvertService;
        private adresseService;
        private tiersNoyauService;
        private serviceAgentExtended;
        private mwNotificationService;
        private listeDeviseService;
        private sauvegardeListeDeviseService;
        private baremeConditionEtablissementService;
        private outilImpressionLibelleEtablissement;
        listeAutoDecouvertOk: boolean;
        montantSaisiOk: boolean;
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        retourCreation: boolean;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        eligibleSag: boolean;
        nomUsageSignataire: number;
        nomUsageSignataire2: number;
        designataireSignataire: string;
        designataireSignataire2: string;
        nomSignataire: string;
        nomSignataire2: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        ajoutForm: ng.IFormController;
        montantAutorisationSignataire: number;
        estHabiliteDecouvertNonConfirme: boolean;
        indicateurRequeteEnCours: boolean;
        indicateurRequeteReussie: boolean;
        erreurRequete: MyWay.Services.Erreur;
        private context;
        private loader;
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
        listeDevise: Modeles.ListeDevise.IDevise[];
        symboleDeviseMontant: string;
        constructor($scope: ICreationDecouvertScope, $q: ng.IQService, $location: ng.ILocationService, $timeout: ng.ITimeoutService, creationDecouvertService: ICreationDecouvertService, decouvertService: IDecouvertService, adresseService: IAdresseService, tiersNoyauService: ITiersNoyauV3Service, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, listeDeviseService: Services.IListeDeviseDecouvertService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService, baremeConditionEtablissementService: Services.IBaremeConditionEtablissementService, outilImpressionLibelleEtablissement: Services.Rest.OutilImpressionLibelleEtablissementService);
        /** Initialisation du contexte depuis le Scope */
        private initialiserContexte();
        private initialiserDecouvertParDefaut();
        private setTauxInteretDuCompte();
        /** Mise à jour du taux et le libellé barême du découvert à créer */
        private setTauxEtLibelleBareme(conditionArreteSynthese, listeConditionDebitriceGenerale, listeConditionsDebitricesDefaut);
        /** Mise à jour du libellé taux barême en faisant un nouvel appel du service informationGlobale */
        private setLibelleAvecNouveauxParemetres(conditionArreteSynthese);
        private getLibelleConditionDebitriceGenerales(listeConditionDebitricesGenerales, baremeDebiteur);
        private getLibelleConditionDebitriceDefaut(listeConditionDebitricesDefaut, baremeDebiteur);
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
        validerMontant(): boolean;
        changerEditionLettreConfirmation(): void;
        /** Indique si on affiche où non le champ Indicateur confirmé */
        afficherIndicateurConfirme(): boolean;
        changerIndicateurConfirme(): void;
        isDecouvertNonConfirme(): boolean;
        /** Indique si on peut modifier la date de fin d'un découvert de type tacite reconduction */
        canEditDateDeFin(): boolean;
        /** Mise à jour de la date de fin en fonction de la durée choisie */
        setDateFin(): void;
        testValidationDateFin(): boolean;
        testValidationDateFinTernaire(): any;
        testValidationDateDebut(): boolean;
        testValidationDateDebutTernaire(): any;
        /** Création d'un nouveau découvert */
        creerNouveauDecouvert(): void;
        /** Enregistrement du découvert */
        enregistrerDecouvert(): void;
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
        /**
         * Méthode pour récupérer les infos du signataire
         */
        recupererNomUsageSignataire(): MyWay.Services.IPromesse<ITiersNoyau>;
        /**
         * Méthode pour récupérer les infos du signataire2
         */
        recupererNomUsageSignataire2(): MyWay.Services.IPromesse<ITiersNoyau>;
        /**
         * Méthode pour récupérer les libellés de l'etablissement
         */
        recupererLibelleEtablissement(): MyWay.Services.IPromesse<Modeles.OutilImpressionLibelleEtablissementService.ILibelleEtablissement>;
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
        enregistrerFormulaireCreationDecouvert(decouvertAenregistrer: IDecouvert): any;
        recupererFormulaireCreationDecouvert: () => IDecouvert;
    }
    class CreationDecouvertService extends CommonService implements ICreationDecouvertService {
        private serviceAgentExtended;
        private mwNotificationService;
        $filter: ng.IFilterService;
        listeDeviseService: Services.IListeDeviseDecouvertService;
        decouvertService: IDecouvertService;
        sauvegardeListeDeviseService: ISauvegardeListeDeviseService;
        private static SERVICE_CCE_URL;
        static $inject: string[];
        private formulaireDecouvertEnregistre;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, $filter: ng.IFilterService, listeDeviseService: Services.IListeDeviseDecouvertService, decouvertService: IDecouvertService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService);
        getAuthenticatedAgent(): MyWay.Services.IPromesse<MyWay.Services.Context.AuthentificationInfo>;
        getListeTypeDecouvert(): string[];
        getListeTypeDureeDecouvert(): string[];
        getListeTypeCommission(): string[];
        /** Ce service permet de récupérer l'objet informationGlobale du CCE */
        getInformationGlobale(context: any, indicateurInfoDecouvert: string, codeAction: string): ng.IPromise<Object>;
        /** Ce service permet de créer un nouveau découvert: */
        enregistrerDecouvert(decouvertACreer: IDecouvert, context: any): ng.IPromise<IDecouvert>;
        /** Ce service permet d'enregistrer le formulaire de création du découvert: */
        enregistrerFormulaireCreationDecouvert(decouvertAenregistrer: IDecouvert): void;
        /** Ce service permet de recupérer le formulaire de création du découvert: */
        recupererFormulaireCreationDecouvert(): IDecouvert;
    }
}

declare module decouvert.decouvert {
    interface IDecouvertControleurScope extends ng.IScope {
    }
    class DecouvertControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private mwNotificationService;
        private sauvegardeListeDeviseService;
        private listeDeviseService;
        private creationDecouvertService;
        private habilitationService;
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
        listeAutoDecouvertOK: boolean;
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        retourCreation: boolean;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        eligibleSag: boolean;
        nomUsageSignataire: number;
        nomUsageSignataire2: number;
        designataireSignataire: string;
        designataireSignataire2: string;
        nomSignataire: string;
        nomSignataire2: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        enConsultationCce: boolean;
        montantAutorisationSignataire: number;
        estHabiliteDecouvertNonConfirme: boolean;
        /**
         * Autres variables
         */
        indicateurRequeteEnCours: boolean;
        constructor($scope: IDecouvertControleurScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService, listeDeviseService: Services.IListeDeviseDecouvertService, creationDecouvertService: creationDecouvert.ICreationDecouvertService, habilitationService: IHabilitationService);
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
        private $q;
        private $location;
        private decouvertService;
        private adresseService;
        private tiersNoyauService;
        private modalService;
        private serviceAgentExtended;
        private mwNotificationService;
        private listeDeviseService;
        private sauvegardeListeDeviseService;
        private outilImpressionLibelleEtablissement;
        private $filter;
        static $inject: string[];
        listeAutoDecouvertOk: boolean;
        affichageListeDecouverts: boolean;
        affichageCreation: boolean;
        affichageConditionsArretes: boolean;
        affichageGaranties: boolean;
        retourCreation: boolean;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: string;
        codeDevise: string;
        codeProduitService: number;
        numeroOffreSouscrite: number;
        designationClient: string;
        eligibleSag: boolean;
        nomUsageSignataire: number;
        nomUsageSignataire2: number;
        designataireSignataire: string;
        designataireSignataire2: string;
        nomSignataire: string;
        nomSignataire2: string;
        listeDecouvertDuree: Array<IDecouvertDuree>;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        enConsultation: boolean;
        montantAutorisationSignataire: number;
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
        private loader;
        constructor($scope: IListeDecouvertsControleurScope, $q: ng.IQService, $location: ng.ILocationService, decouvertService: IDecouvertService, adresseService: IAdresseService, tiersNoyauService: ITiersNoyauV3Service, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, listeDeviseService: Services.IListeDeviseDecouvertService, sauvegardeListeDeviseService: ISauvegardeListeDeviseService, outilImpressionLibelleEtablissement: Services.Rest.OutilImpressionLibelleEtablissementService, $filter: ng.IFilterService);
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
        imprimerLettreDecouvert(decouvertsSelectionnes: Array<IDecouvert>, forcageGenerationPapier: boolean): void;
        /**
         * Méthode pour récupérer l'adresse du titulaire du découvert
         */
        recupererAdresse(): MyWay.Services.IPromesse<Array<IAdresse>>;
        /**
         * Méthode pour récupérer les infos nécessaires à l'édition de la lettre de confirmation
         */
        recupererInfosLettreConfirmation(decouvertSelectionne: IDecouvert): MyWay.Services.IPromesse<ILettreConfirmationDecouvert>;
        /**
         * Méthode pour récupérer les infos du signataire
         */
        recupererNomUsageSignataire(): MyWay.Services.IPromesse<ITiersNoyau>;
        /**
         * Méthode pour récupérer les infos du signataire2
         */
        recupererNomUsageSignataire2(): MyWay.Services.IPromesse<ITiersNoyau>;
        /**
         * Méthode pour récupérer les libellés de l'etablissement
         */
        recupererLibelleEtablissement(): MyWay.Services.IPromesse<Modeles.OutilImpressionLibelleEtablissementService.ILibelleEtablissement>;
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
