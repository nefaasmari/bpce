
declare module Editique {
    var app: any;
}

declare module Editique.Controleurs {
    class EditiqueControleur {
        private $scope;
        private serviceAgentExtended;
        private donneesContexteService;
        private intervenantEntiteTitulaireService;
        private tiersCorporateInformationService;
        private outilImpressionBandeauClientService;
        private $filter;
        static $inject: string[];
        static titre: string;
        generationNok: boolean;
        private contexteNok;
        private serviceRestNok;
        private aucunDocuments;
        private contexteEditiqueGGO;
        private intervenantEntiteTitulaireGetQuery;
        private tiersCorporateInformationGetQuery;
        private outilImpressionBandeauClientGetQuery;
        private listePersonne;
        private tiersCorporateInfo;
        private listePersonnePPBandeauClient;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, donneesContexteService: Services.Application.IDonneesContexteService, intervenantEntiteTitulaireService: Services.Rest.IIntervenantEntiteTitulaireService, tiersCorporateInformationService: Services.Rest.ITiersCorporateInformationService, outilImpressionBandeauClientService: Services.Rest.IOutilImpressionBandeauClientService, $filter: ng.IFilterService);
    }
}

declare module Editique.Controleurs {
    class FooterControleur {
        private $rootScope;
        private $location;
        static $inject: string[];
        isLocationEditique: boolean;
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService);
        clickRetour(): void;
    }
}

declare module Editique.Controleurs {
    class HeaderControleur {
        static $inject: any[];
        constructor();
        getTitre(): string;
    }
}

declare module Editique.Controleurs {
    class PageDevFormulaireContexteControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private donneesContexteService;
        static $inject: string[];
        static titre: string;
        contexte: Editique.Services.Application.IDonneesContexte;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, donneesContexteService: Editique.Services.Application.IDonneesContexteService);
        initContexte(): void;
        lancerEditique(): void;
    }
}

declare module Editique.Services {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module Editique.Services {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module Editique.Modeles.SIPCGCE_Immobiliers {
    interface ISIPCGCE_Immobiliers {
        SECTION1: Editique.Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersSECTION1[];
        GENERIC_ENTETEETS: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIPCGCE_ImmobiliersSECTION1 {
        _blocChoice_: (choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_TITREDOCUMENT | choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_LIGNEVIDE | choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_INFO_PM | choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_INFO_PP | choice_SIPCGCE_ImmobiliersSECTION1_BL_CORPS | choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_SIGNATURE_CACHET)[];
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_TITREDOCUMENT {
        GENERIC_TITREDOCUMENT: GENERIC_TITREDOCUMENT;
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_LIGNEVIDE {
        GENERIC_LIGNEVIDE: number;
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_INFO_PM {
        GENERIC_INFO_PM: GENERIC_INFO_PM;
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_INFO_PP {
        GENERIC_INFO_PP: GENERIC_INFO_PP;
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_BL_CORPS {
        BL_CORPS: SIPCGCE_ImmobiliersSECTION1BL_CORPS;
    }
    interface choice_SIPCGCE_ImmobiliersSECTION1_GENERIC_SIGNATURE_CACHET {
        GENERIC_SIGNATURE_CACHET: GENERIC_SIGNATURE_CACHET;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
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
        b10175: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB10175[];
        b13135: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB13135[];
        b13705: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB13705[];
        b14445: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB14445[];
        b14505: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB14505[];
        b15135: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB15135[];
        b15905: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB15905[];
        b15965: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB15965[];
        b16275: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB16275[];
        b18025: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB18025[];
        b18279: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB18279[];
        b43199: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB43199[];
        b18715: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB18715[];
        b13335: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB13335[];
        b17515: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB17515[];
        b62108: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB62108[];
        b12579: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB12579[];
        b13825: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB13825[];
        b16705: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB16705[];
        b12135: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB12135[];
        b14265: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB14265[];
        b13485: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB13485[];
        b18315: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB18315[];
        b11315: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB11315[];
        b11425: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB11425[];
        b12548: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB12548[];
        b30051: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETSB30051[];
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
    interface SIPCGCE_ImmobiliersSECTION1BL_CORPS {
        LIB_LALE_ETS: string;
        DDPCCE: string;
        LIDARS: string;
        SIEGE_SOCIAL: string;
        LIDALI: string;
        LIDACJ: string;
        MTDAC2: string;
        LLPCNC: string;
        RICE: string;
    }
    interface GENERIC_SIGNATURE_CACHET {
        LIB_DELADU_ETS: string;
        PRENOM_NOM_AGENT: string;
    }
    interface GENERIC_INFO_PP {
        LISTE_PERSONNES: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_INFO_PPLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PPLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE)[];
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS {
        INFOS_PERS: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 {
        INFOS_PERS2: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 {
        INFOS_PERS3: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE {
        INFOS_PERS_VIDE: number;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS {
        LIDACV: string;
        LIDANM: string;
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2 {
        LIDACV2: string;
        NOM_PRENOM_CLIENT2: string;
        LIDANM2: string;
        NOM_USAGE2: string;
        LIB_CODIRC2: string;
        DADANA2: string;
        LIDGIL_NAISSANCE2: string;
        LIDGV2_62: string;
        LIDGNA2: string;
        IDNSBD2: string;
        NODATP_CLIENT2: string;
        SITUATION_FAMILLE2: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3 {
        LIDACV3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDANM3: string;
        NOM_USAGE3: string;
        LIB_CODIRC3: string;
        DADANA3: string;
        LIDGIL_NAISSANCE3: string;
        LIDGV2_63: string;
        LIDGNA3: string;
        IDNSBD3: string;
        NODATP_CLIENT3: string;
        SITUATION_FAMILLE3: string;
        REGIME_MATRIMONIAL3: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface GENERIC_INFO_PM {
        LISTE_PERSONNES: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_INFO_PMLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PMLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM)[];
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM {
        INFOS_PM: GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM {
        LIDARS: string;
        DADATJ: string;
        LIDGV2_6: string;
        IDNSBD: string;
        NODATP: string;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface GENERIC_TITREDOCUMENT {
        TITRE_DOCUMENT: string;
    }
    class SIPCGCE_Immobiliers implements ISIPCGCE_Immobiliers {
        SECTION1: Editique.Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersSECTION1[];
        GENERIC_ENTETEETS: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: Editique.Modeles.SIPCGCE_Immobiliers.GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIPCGCE_ImmobiliersArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_ImmobiliersGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_ImmobiliersArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPCGCE_ImmobiliersImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPCGCE_ImmobiliersArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPCGCE_ImmobiliersImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module Editique.Modeles.IntervenantEntiteTitulaireService {
    interface IIntervenantEntiteTitulaireGetQuery {
        identifiantPersonne: number;
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        codeProduitService: string;
        incideRechercheIdentifiantBAD?: string;
    }
    interface IPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        codeTypePersonne: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        dateFin: Date;
        dateDebut: Date;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
    }
    interface IIntervenantEntiteTitulaire {
        listPersonne: Array<IPersonne>;
    }
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
    }
}

declare module Editique.Modeles.OutilImpressionBandeauClientService {
    interface IOutilImpressionBandeauClientGetQuery {
        numeroEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompte: string;
        niveauAffichageRepLegal: number;
        typeDeTraitement?: number;
    }
    interface IElementEditionRole {
        ELEMENT: string;
        LIB_CTDHLI: string;
    }
    interface IElementEditionRoleEtPersonne {
        leRole: IElementEditionRole;
        lesPersonnes: Array<IElementEditionPersonneGenerique>;
    }
    interface IBandeauClient {
        roleEtPersonnes: Array<IElementEditionRoleEtPersonne>;
        nombreDePersonnes: number;
        nombreDeRoles: number;
    }
    interface IElementEditionPersonneGenerique {
        ELEMENT: string;
        numeroPersonne: string;
        infosPersonne: IInformationsPersonne;
    }
    interface IInformationsPersonne {
        LIDGNA3: string;
        LIDACV3: string;
        LIDANM3?: string;
        NOM_USAGE3?: string;
        LIB_CODIRC3?: string;
        NODATP_CLIENT3: string;
        IDNSBD3: string;
        LIDGV2_63: string;
        DADANA3: string;
        SITUATION_FAMILLE3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDGIL_NAISSANCE3: string;
        REGIME_MATRIMONIAL3: string;
    }
}

declare module Editique.Modeles.TiersCorporateInformationService {
    interface ITiersCorporateInformationGetQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    interface ISituationFinanciere {
        montantCapitalSocial: number;
        montantChiffreAffaires: number;
        effectif: number;
        dateArreteComptable: number;
        anneeChiffreAffaires: number;
    }
    interface ICorporateInformation {
        codeSituationJuridique: string;
        numeroSiren: string;
        codeIndicateurEntrepriseEtrangere: string;
        dateCreationJuridique: Date;
        raisonSociale: string;
        nomCommercial: string;
        codeTypeCommerceOrganise: string;
        codeAgentEconomique: string;
        identifiantTiers: number;
        situationFinanciere: ISituationFinanciere;
        codeEtablissement: string;
        codeDeviseISO4217a3: string;
        dureeViePersonneMorale: number;
        codePieceJustificative: string;
        codeTypeTiers: string;
        codeRegimeFiscal: string;
        codeCotation: string;
        codeAppartenanceReseau: string;
        adresse: IAdresse;
        codeCategoJuridi2DerCaracteres: string;
        codeFamilleCategorieJuridique: string;
        codeGuichetRisque: number;
        referenceExterneEDS: number;
        eligibiliteTiers: string;
        codeTypeRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
        numeroImmatriculation: string;
        sigle: string;
        etablissement: IEtablissement;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        listeMotCle: Array<string>;
        numeroChrono: number;
        codeTeteGroupe: string;
        troisDerniersCaracteresNAF: string;
        codeFamilleNAFINSEE: string;
        activiteEconomiqueReelleProfessionnelle: string;
        codeAgentEconomiqueTheorique: string;
        codeModeAttributionAgentEconomique: string;
        codeTypePersonne: string;
        prospect: IProspect;
        indicateurDroitAuCompte: string;
        professionnelImmobilier: IProfessionnelImmobilier;
        dateClotureJuridique: Date;
        codeMajImmatriculation: string;
        listeImmatriculation: Array<IImmatriculation>;
        identifiantLei: string;
        codeEmir: string;
        indicateurDelegationDeclaration: string;
        codeBlocageVao: string;
        indiceAmericanite: string;
        indicateurPresenceClassif: string;
        brancheActivite: string;
        indicProspectRestreint: boolean;
        codeEtatPersonne: string;
        typeRelation: string;
    }
    interface IAdresse {
        identifiant: number;
        codeType: string;
        indicateurEnvoiCourrier: string;
        codePays: string;
        codeTypeLieu: string;
    }
    interface IEtablissement {
        designationCourteLieuActivite: string;
        designationLongueLieuActivite: string;
        dateDebutExploitationLieuActivite: Date;
        codeResident: string;
        numeroComplementSIRET: string;
        dateFinExploitation: Date;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
    interface IProspect {
        codeSegmentation: string;
        numeroPortefeuille: number;
        codeTypeSegmentation: string;
    }
    interface IProfessionnelImmobilier {
        indicateurSteCivileImmoPatrimoniale: boolean;
        indicateurSocieteExploitation: boolean;
        indicateurStrDedieeA1OpeImmoMax: boolean;
        indicateurGarantieSurActifImmoFi: boolean;
        indicateurStrRemboursementDesConcours: boolean;
        indicateurExerciceSup1ActiviteImmo: boolean;
        codeCategorieProfImmo: string;
        timestampCreationQuestionnairePIM: string;
    }
    interface IImmatriculation {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroChronoProfesionnel: number;
        codeTypeRegistre: string;
        numeroImmatriculationRegistre: string;
        lieuInscriptionRegistre: string;
        dateImmatriculation: Date;
    }
}

declare module Editique.Services.Application {
    interface IDonneesContexte {
        codeEtablissement: string;
        codeGuichet: string;
        libelleEdsRattachementGuichetComptable: string;
        edsExterneGuichetComptable: string;
        numTelEdsRattachementGuichetComptable: string;
        codeTypeProduitService: string;
        codeProduitService: string;
        prenomAgent: string;
        nomAgent: string;
    }
    interface IDonneesContexteService {
        enregistrerDonneesContexte(donnees: IDonneesContexte): any;
        recupererDonneesContexte(): IDonneesContexte;
    }
    class DonneesContexteService implements IDonneesContexteService {
        donneesContexte: IDonneesContexte;
        enregistrerDonneesContexte(donnees: IDonneesContexte): void;
        recupererDonneesContexte(): IDonneesContexte;
    }
}

declare module Editique.Services.Application.SIPCGCE_Immobiliers {
    function createArchiverParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersArchiverParams;
    function createGenererParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersGenererParams;
    function createArchiverGenererParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersArchiverGenererParams;
    function createImpressionParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersImpressionParams;
    function createArchiverImpressionParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersArchiverImpressionParams;
    function createImpressionLotParams(): Modeles.SIPCGCE_Immobiliers.SIPCGCE_ImmobiliersImpressionLotParams;
    function createDocument(contexteEditiqueGGO: Services.Application.IDonneesContexte, listePersonne: Editique.Modeles.IntervenantEntiteTitulaireService.IPersonne[], listePersonnePPBandeauClient: Editique.Modeles.OutilImpressionBandeauClientService.IElementEditionPersonneGenerique[], tiersCorporateInfo: Editique.Modeles.TiersCorporateInformationService.ICorporateInformation): Modeles.SIPCGCE_Immobiliers.SIPCGCE_Immobiliers;
}

declare module Editique.Services.Rest {
    /**
     * Interface du service Intervenant Entite Titulaire
     */
    interface IIntervenantEntiteTitulaireService {
        getRequest: (query: Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaireGetQuery) => ng.IPromise<Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaire>;
    }
    /**
     * Déclaration du service Intervenant Entite Titulaire
     */
    class IntervenantEntiteTitulaireService implements IIntervenantEntiteTitulaireService {
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
        getRequest(query: Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaireGetQuery): ng.IPromise<Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaire>;
    }
    /**
     * Déclaration du service Mock Intervenant Entite Titulaire
     */
    class IntervenantEntiteTitulaireMockService implements IIntervenantEntiteTitulaireService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaireGetQuery): ng.IPromise<Modeles.IntervenantEntiteTitulaireService.IIntervenantEntiteTitulaire>;
    }
}

declare module Editique.Services.Rest {
    /**
     * Interface du service Outil Impression Bandeau Client
     */
    interface IOutilImpressionBandeauClientService {
        getRequest: (query: Modeles.OutilImpressionBandeauClientService.IOutilImpressionBandeauClientGetQuery) => ng.IPromise<Modeles.OutilImpressionBandeauClientService.IBandeauClient>;
    }
    /**
     * Déclaration du service Outil Impression Bandeau Client
     */
    class OutilImpressionBandeauClientService implements IOutilImpressionBandeauClientService {
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
        getRequest(query: Modeles.OutilImpressionBandeauClientService.IOutilImpressionBandeauClientGetQuery): ng.IPromise<Modeles.OutilImpressionBandeauClientService.IBandeauClient>;
    }
    /**
     * Déclaration du service Mock Outil Impression Bandeau Client
     */
    class OutilImpressionBandeauClientMockService implements IOutilImpressionBandeauClientService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: Modeles.OutilImpressionBandeauClientService.IOutilImpressionBandeauClientGetQuery): ng.IPromise<Modeles.OutilImpressionBandeauClientService.IBandeauClient>;
    }
}

declare module Editique.Services.Rest {
    /**
     * Interface du service de Tiers Corporate Information
     */
    interface ITiersCorporateInformationService {
        getRequest: (query: Modeles.TiersCorporateInformationService.ITiersCorporateInformationGetQuery) => ng.IPromise<Modeles.TiersCorporateInformationService.ICorporateInformation>;
    }
    /**
     * Déclaration du service Tiers Corporate Information
     */
    class TiersCorporateInformationService implements ITiersCorporateInformationService {
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
        getRequest(query: Modeles.TiersCorporateInformationService.ITiersCorporateInformationGetQuery): ng.IPromise<Modeles.TiersCorporateInformationService.ICorporateInformation>;
    }
    /**
     * Déclaration du service Mock Tiers Corporate Information
     */
    class TiersCorporateInformationMockService implements ITiersCorporateInformationService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: Modeles.TiersCorporateInformationService.ITiersCorporateInformationGetQuery): ng.IPromise<Modeles.TiersCorporateInformationService.ICorporateInformation>;
    }
}
