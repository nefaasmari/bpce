
declare namespace AssuranceAdeCredit {
    var app: any;
}

declare namespace AssuranceAdeCredit.Constantes {
    /** Constantes relatives aux devises */
    namespace Devise {
        /** Code de la devise Euro (EUR) */
        const codeEuro: string;
        /** Code de la devise Dollar Canadien (CAD) */
        const codeDollarCanadien: string;
        /** Code de la devise Dollar (USD) */
        const codeDollar: string;
        /** Code de la devise Franc Suisse (CHF) */
        const codeFrancSuisse: string;
        /** Code de la devise Livre (GBP) */
        const codeLivre: string;
        /** Liste des codes et libellés devises */
        const listeLibellesByCode: {
            "EUR": string;
            "CAD": string;
            "USD": string;
            "CHF": string;
            "GBP": string;
            "": string;
        };
    }
}

declare namespace AssuranceAdeCredit.Constantes.Inject {
    namespace Angular {
        const $filter: string;
        const $scope: string;
        const $timeout: string;
        const $q: string;
    }
    namespace MyWay {
        const modalService: string;
        const serviceAgentExtended: string;
    }
    namespace Services {
        const assuranceAdeService: string;
        const assureService: string;
        const elementService: string;
        const restService: string;
        const sessionService: string;
    }
}

declare namespace AssuranceAdeCredit.Constantes {
    namespace Rest {
        const urlElementInstructionService: string;
    }
    namespace Url {
        const urlLireElements: string;
    }
}

declare namespace AssuranceAdeCredit.Filters {
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IConfiguration {
        garantieDeces: boolean;
        garantiePtia: boolean;
        garantieArretTravail: boolean;
        garantieInvalidite: boolean;
        garantieFranchise: boolean;
        garantieCouvertureEcheance: boolean;
        garantieNiveauInvalidite: boolean;
        garantiePerteEmploi: boolean;
        montantPerteEmploi: number;
    }
    interface ISynthese {
        idPersonne?: string;
        intituleAssure?: string;
        idCredit?: string;
        libelleProduit?: string;
        montantCredit?: number;
        dureeCredit?: number;
        garanties?: string[];
        isCreditInFine?: boolean;
        garantieFranchise?: boolean;
        garantieCouvertureEcheance?: boolean;
        garantieNiveauInvalidite?: boolean;
        garantiePerteEmploi?: boolean;
        montantPerteEmploi?: number;
        quotite?: number;
        coutMoyenMensuel?: number;
        coutTotal?: number;
        tauxTaea?: number;
        codeDevise?: string;
        syntheses?: ISynthese[];
    }
    interface IViewModel {
        avantagePanels: IViewModelAvantagePanels;
        boutonPoursuivreVisible: boolean;
        cheminDeFer: Modeles.ICheminDeFer;
        codeDevise: string;
        detailConventionVisible: boolean;
        indexPersonneSelectionnee: number;
        libelleProduitInFine: string;
        listeCreditsVisible: boolean;
        listeMontantsPerteEmploi: number[];
        modeExpertActif: boolean;
        quotiteCouverture: number;
        quotiteCouvertureVisible: boolean;
        tabset: IViewModelTabset;
        tarificationDerogatoire: boolean;
    }
    interface IViewModelAvantagePanels {
        groupe: boolean;
        personnalises: boolean;
    }
    interface IViewModelTabset {
        ready: boolean;
        show: boolean;
        tabs: IViewModelTabs;
    }
    interface IViewModelTabs {
        garanties: boolean;
        personnalisation: boolean;
        syntheseAssure: boolean;
        synthesesProposition: boolean;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface ICheminDeFer {
        estVisible: boolean;
        etapes: ICheminDeFerEtape[];
    }
    interface ICheminDeFerEtape {
        cssClass: string;
        libelle: string;
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum CodeIdNeo {
        AccessoireComplementaire,
        AccessoireLieProduit,
        Assurance,
        GarantiePersonnelle,
        GarantieReelle,
        ServiceSurObjet,
        Garant,
        AlerteEnEntree,
        AlerteEnSortie,
        Agent,
        Apl,
        SynthesePlanFinancement,
        Avis,
        AvisOrganismeExt,
        BienAVendre,
        BatimentHabitableFinance,
        ConstructionFinance,
        SoulteFinance,
        TerrainFinance,
        TravauxFinance,
        BienConsoFinance,
        AutoMoto,
        BatimentSousJacent,
        BienSousJacentSoulte,
        TerrainSousJacent,
        BienEquipementPro,
        TresorerieFinancee,
        DetailCoutObjet,
        Antichrese,
        BienDivers,
        BonDeCaisseCapitalisation,
        CessionDaillyAutre,
        CessionDaillyLoyerImmeuble,
        ContratAssurance,
        DelegationLoyer,
        GageCompteInstrumentFinancier,
        GageVehicule,
        HypothequeAerienne,
        HypothequeImmobiliere,
        NantissementFondDeCommerce,
        NantissementPartSociale,
        NantissementValeurMateriel,
        NantissementValeurMobiliere,
        VersementAttendu,
        Proprietaire,
        ReferenceCadastrale,
        ReferenceLot,
        BlocNotes,
        ButLocatif,
        ClausePersonnalisee,
        CptDepotParticulier,
        CptProfessionnel,
        Compte,
        Cotisation,
        CotisationDerogation,
        CotisationPeriode,
        CotisationPhase,
        CotisationTrancheAgeLecture,
        TrancheMontantLecture,
        CouvertureCredit,
        CreditExterne,
        CreditInterne,
        DroitUtilise,
        AjustementTaux,
        CreditModalite,
        CompteCourant,
        CreditBonification,
        CreditBonificationInfo,
        CreditPalierProgression,
        CreditPalierTaux,
        CreditParamRevisionParPeriode,
        CreditParamRevisionParPhase,
        CreditParamIndexationParPeriode,
        CreditParamIndexationParPhase,
        CreditPhaseAmortissement,
        CreditPhaseDiffereAmortissement,
        CreditPhaseDiffereTotal,
        CreditPhaseMobilisation,
        CreditPhasePrefinancement,
        ComplementPhasePretCombine,
        Dossier,
        OffrePretIndustrialisee,
        DocumentOffreIndustrialisee,
        ActeIDNSignatureOffre,
        DocumentIDN,
        EcheanceOptimisation,
        Evenement,
        FamilleEpargne,
        GarantieHD,
        CreditHD,
        Emprunteur,
        InterditBancaire,
        Opposition,
        PalierContraint,
        W795,
        Payeur,
        PersonneMorale,
        PersonnePhysique,
        Personne,
        Activite,
        ComplementFicheContact,
        RelationEntrePersonne,
        PlanFinancement,
        ProjetImmobilier,
        ProjetNonImmobilier,
        ProjetEPS,
        CompteEpargneLogement,
        PlanEpargneLogement,
        TrancheEL,
        PromotionImmobiliere,
        Reamenagement,
        PretReamenage,
        PretReamenageInfoRegroup,
        RedacteurActe,
        RemiseClient,
        Charge,
        CreditExistant,
        PhaseCreditExistant,
        Ressource,
        RevenuFiscal,
        SuiviPlanifie,
        VariationDuree,
        Versement,
        VersementFractionne,
        PieceClient,
        PieceAgence,
        ControleManuel,
        ComplementDossier,
        PoolEPS,
        ComplementEPS,
        CreditEPS,
        TACreditEPS,
        MarcheEPS,
        CourrierEPS,
        SaisiesComplementaire,
        RefusAssuranceExterne,
        OrigineApport,
        GestionAdministrative,
        DecisionPreteur,
        Contrat,
        Signataire,
        EntrepreneurIndividuel,
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IControleurParametre {
        controleurAs: string;
        controleurName: string;
        templateUrl: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IDataAssures {
        credits: Rest.ICreditInterne[];
        personnes: Rest.IPersonnePhysique[];
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IAssuranceAdeService {
        /**
         * Retourne l'intitulé de la personne passée en paramètre
         * @param personne
         */
        getIntitulePersonne(personne: Modeles.Rest.IPersonnePhysique): string;
        /**
         * Retourne une synthèse assuré à l'aide des données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param personne
         */
        getSyntheseAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, isPretInFineOuRelais: boolean): Modeles.ISynthese;
        /**
         * Retourne une synthèse crédit à l'aide des données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param credit
         */
        getSyntheseCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.ICreditInterne, isProposition?: boolean): Modeles.ISynthese;
        /**
         * Retourne une synthèse de proposition pour un assuré à l'aide de données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param personne
         * @param listeCreditsSelectionnes
         */
        getSynthesePropositionAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, listeCreditsSelectionnes: Modeles.Rest.ICreditInterne[]): Modeles.ISynthese;
        /**
         * Retourne une synthèse de proposition pour un crédit à l'aide de données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param credit
         * @param personne
         */
        getSynthesePropositionCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.ICreditInterne, personne: Modeles.Rest.IPersonnePhysique): Modeles.ISynthese;
        /**
         * Indique si le produit passé en paramètre est un produit "in fine" ou un produit "relais"
         * TODO : to remove by using a better way
         * @param libelleProduit
         */
        isPretInFineOuRelais(libelleProduit: string): boolean;
    }
    class AssuranceAdeService implements IAssuranceAdeService {
        constructor();
        getIntitulePersonne(personne: Modeles.Rest.IPersonnePhysique): string;
        getSyntheseAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, isPretInFineOuRelais: boolean): Modeles.ISynthese;
        getSyntheseCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.ICreditInterne, isProposition?: boolean): Modeles.ISynthese;
        getSynthesePropositionAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, listeCreditsSelectionnes: Modeles.Rest.ICreditInterne[]): Modeles.ISynthese;
        getSynthesePropositionCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.ICreditInterne, personne: Modeles.Rest.IPersonnePhysique): Modeles.ISynthese;
        isPretInFineOuRelais(libelleProduit: string): boolean;
        private getCout(indexPersonneSelectionnee, isPretInFineOuRelais, isTotal?);
        private getGaranties(configuration, isCreditInFine);
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IAssureService {
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): Modeles.Rest.IConventionAssurance;
    }
    class AssureService implements IAssureService {
        private elementService;
        private $q;
        static $inject: Array<string>;
        constructor(elementService: IElementService, $q: ng.IQService);
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): Modeles.Rest.IConventionAssurance;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IElementService {
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
    }
    class ElementService implements IElementService {
        private restService;
        private $q;
        static $inject: Array<string>;
        constructor(restService: RestService, $q: ng.IQService);
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IRestService {
        /**
         * Exécution de la requête GET
         * @param urlService : url du service appelé
         * @param params : paramètres dans la query
         * @param timeout : optionnel
         */
        sendGetRequest<T, U>(urlService: string, params: U, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête POST
         * @param urlService : url du service appelé
         * @param data : données dans le body
         * @param params : optionnel, paramètres dans la query
         * @param timeout : optionnel
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête PUT
         * @param urlService : url du service appelé
         * @param data : données dans le body
         * @param params : optionnel, paramètres dans la query
         * @param timeout : optionnel
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requête DELETE
         * @param urlService : url du service appelé
         * @param data : optionnel, données dans le body
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
    }
    class RestService implements IRestService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        sendGetRequest<T, U>(urlService: string, params: U, timeout?: number): ng.IPromise<T>;
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
        private consume<T, U, V>(typeMethode, urlService, params?, data?, timeout?);
    }
}

declare namespace AssuranceAdeCredit.Services {
    import MywayContext = MyWay.Services.Context;
    interface ISessionService {
        getAuthentificationInfos(): ng.IPromise<MywayContext.AuthentificationInfo>;
    }
    class SessionService implements ISessionService {
        private serviceAgent;
        static $inject: Array<string>;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended);
        getAuthentificationInfos(): ng.IPromise<MywayContext.AuthentificationInfo>;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    type IElement = Modeles.Rest.IElementLecture;
    class Element {
        /**
         * Find an element by idws
         * @param elements
         * @param idws
         */
        static findById<T extends IElement>(elements: IElement[], idws: string): T;
        /**
         * Filter elements from a list of idws
         * @param elements
         * @param listIdws
         */
        static filterByIds<T extends IElement>(elements: IElement[], listIdws: string[]): T[];
    }
}

declare namespace AssuranceAdeCredit {
    class AssuranceAdeControleur {
        private $scope;
        private $timeout;
        private modalService;
        private assuranceAdeService;
        private assureService;
        private sessionService;
        static parametres: Modeles.IControleurParametre;
        dateTraitement: string;
        idConventionAssurance: string;
        estPage: boolean;
        listeIdCredits: string[];
        listeIdPersonnes: string[];
        loader: boolean;
        modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        idDossier: string;
        conventionAssurance: Modeles.Rest.IConventionAssurance;
        configurationActuelle: Modeles.IConfiguration;
        listeCreditsSelectionnes: Modeles.Rest.ICreditInterne[];
        listePersonnesSelectionnees: Modeles.Rest.IPersonnePhysique[];
        syntheseParAssure: Modeles.ISynthese[];
        synthesePropositionsParAssure: Modeles.ISynthese[];
        synthesePropositionsParCredit: Modeles.ISynthese[];
        tooltips: {};
        viewModel: Modeles.IViewModel;
        private isSyntheseProposition;
        private codeEtablissement;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modalService: MyWay.UI.ModalService, assuranceAdeService: Services.IAssuranceAdeService, assureService: Services.IAssureService, sessionService: Services.ISessionService);
        deleteElement(isCredit: boolean): void;
        cancel(): void;
        continue(): void;
        notImplemented(): void;
        submit(): void;
        toggleAvantagesPanel(): void;
        private clickOnAnchor(anchor);
        private createFakeAssurance(proposition, isApe?);
        private createListeFakeAssurance();
        private displayTabset();
        private getTabsetAnchor(selectors);
        private goToSynthesesViaModeExpert();
        private goToTab(index);
        private initCheminDeFer();
        private initConfigurationActuelle();
        private initTooltips();
        private initData();
        private initViewModel();
        private updateCheminDeFer(index);
        private updateNavigation(indexCourant, tabsetLength);
        updateTableSyntheseParAssure(): void;
        updateTableSynthesesProposition(personneSelectionnee: Modeles.Rest.IPersonnePhysique): void;
        private updateTabset();
    }
}

declare namespace AssuranceAdeCredit {
}

declare namespace AssuranceAdeCredit.Modeles.Rest {
    interface IAnyType {
    }
    interface ICriteresFiltreRequest {
        versionWsdl: number;
        dateTraitement: string;
        identifiantConvention: string;
        codeEtablissement: number;
    }
    interface IScElement {
    }
    interface IScConvention extends IScConventionResume {
        /**
         * ListCots
         */
        listeCotisation: Array<IScCotisation>;
        /**
         * ListCdfcod_CritIdent
         */
        listeCritereId: Array<string>;
    }
    interface IScConventionResume extends IScElement {
        /**
         * Idfcco_IdntConv
         */
        idConvention: string;
        /**
         * Nufcco_NumrExtnConv
         */
        numeroExterneConvention: string;
        /**
         * Idit_IdntIntv
         */
        idIntervenant: string;
        /**
         * Llfcco_LiblLongConv
         */
        libelleLongConvention: string;
        /**
         * Lcfcco_LiblCrtConv
         */
        libelleCreationConvention: string;
        /**
         * Lbfcco_CommtConv
         */
        commentaireConvention: string;
        /**
         * Lbfcc1_CommtConv
         */
        commentaireConvention1: string;
        /**
         * Cdtg_CodeNatrCaut
         */
        codeNatureCaution: string;
        /**
         * Ddfcco_DatePrsDeffConv
         * Type date au format yyyy-MM-dd
         */
        datePresenceDeffConvention: string;
        /**
         * Dffcco_DateFinDeffConv
         * Type date au format yyyy-MM-dd
         */
        dateFinDeffConvention: string;
        /**
         * Nrfcas_ReglDateDeff
         */
        regleDateDeff: string;
        /**
         * Cnfcga_ModeDexp
         */
        modeDexp: number;
        /**
         * Mpfcas_MtMinCrdtPourConv
         */
        montantMinimumCreditPourConvention: number;
        /**
         * Msfcas_MtMaxCrdtPourConv
         */
        montantMaximumCreditPourConvention: number;
        /**
         * Npfcxa_NbPerdMinCrdt
         */
        nombrePeriodeMinimumCredit: number;
        /**
         * Pefcca_PerdicDexpConv
         */
        periodiciteDexpConvention: number;
        /**
         * Npfcma_NbPerdMaxCrdt
         */
        nombrePeriodeMaximumCredit: number;
        /**
         * Tpfcga_QuotMinParBenf
         */
        quotientMinimumParBeneficiaire: number;
        /**
         * Tsfcga_QuotMaxParBenf
         */
        quotientMaximumParBeneficiaire: number;
        /**
         * Txfcga_PasQuot
         */
        pasQuotient: number;
        /**
         * Mpfcga_MtMinGarnParTete
         */
        montantMinimumGarantieParTete: number;
        /**
         * Msfcga_MtMaxGarnParTete
         */
        montantMaximumGarantieParTete: number;
        /**
         * Mxfcga_PasMtGarn
         */
        pasMontantGarantie: number;
        /**
         * Cnfcpc_NatrPrsChrg
         */
        naturePresenceCharge: number;
        /**
         * Ptfcra_PerdicRecv
         */
        periodiciteRecouvrement: number;
        /**
         * Cdfcdr_CodeDetrDateRecv
         */
        codeDetrDateRecouvrement: number;
        /**
         * Npfcre_DelaiRver
         */
        delaiRver: number;
        /**
         * Cdfccm_CodeCommIntvExt
         */
        codeCommissionIntervenantExterieur: number;
        /**
         * Ttfcas_TxCommCais
         */
        tauxCommissionCaisse: number;
        /**
         * Ctfcar_CodeTypeAsstComm
         */
        codeTypeAssietteCommission: number;
        /**
         * Cdfcrr_CodeModlReglComm
         */
        codeModeleRegleCommission: number;
        /**
         * Cdfgga_CodeTierGarn
         */
        codeTiersGarantie: number;
        /**
         * Cdfgto_CodeTypeDobjAutr
         */
        codeTypeDobjAutre: number;
        /**
         * Cnfcbo_CodeNatrBonf
         */
        codeNatureBonification: number;
        /**
         * Cdfdrg_CodeModeRegl
         */
        codeModeRegle: string;
        /**
         * Mtfcge_MtMaxEncr
         */
        montantMaximumEncours: number;
        /**
         * Npfcmp_NbPerdMaxPf
         */
        nombrePeriodeMaximumPf: number;
        /**
         * Npfcmt_NbPerdMaxDt
         */
        nombrePeriodeMaximumDt: number;
        /**
         * Npfcmd_NbPerdMaxDa
         */
        nombrePeriodeMaximumDa: number;
        /**
         * Npfcmm_NbPerdMaxAm
         */
        nombrePeriodeMaximumAm: number;
        /**
         * Cdfcoc_CodeRestt
         */
        codeRestant: string;
        /**
         * Mpfena_MtPlfnPourDelg
         */
        montantPlafondPourDelegation: number;
        /**
         * Ctfctc_TypeConv
         */
        typeConvention: string;
        /**
         * Nbfcae_AgeMaxiReqsParConv
         */
        ageMaximumRequisParConvention: number;
        /**
         * Nbfcai_AgeMiniReqsParConv
         */
        ageMinimumRequisParConvention: number;
        /**
         * Ctfcea_TypeDacc
         */
        typeDacc: string;
        /**
         * Cdfcdv_CodeDevs
         */
        codeDevise: string;
        /**
         * Llfcc3_LiblLongConvJurd
         */
        libelleLongConventionJuridique: string;
        /**
         * Ctfcaa_TypeDass
         */
        typeDass: string;
        /**
         * Cdfcex_CodeDergAge
         */
        codeDerogationAge: number;
        /**
         * EstExterne
         */
        estExterne: boolean;
        /**
         * EstConventionSaccef
         */
        estConventionSaccef: boolean;
        /**
         * EstConventionFEI
         */
        estConventionFEI: boolean;
        /**
         * EstConventionOSEOEtudiant
         */
        estConventionOSEOEtudiant: boolean;
        /**
         * EstConventionSIAGI
         */
        estConventionSIAGI: boolean;
        /**
         * EstConventionCFG
         */
        estConventionCFG: boolean;
        /**
         * EstAERAS
         */
        estAERAS: boolean;
        /**
         * EstCautionMutuelle
         */
        estCautionMutuelle: boolean;
        /**
         * EstCautionMutuelle_ClausesEditiquePieco
         */
        estCautionMutuelle_ClausesEditiquePieco: boolean;
        /**
         * EstCreditLogementInitio
         */
        estCreditLogementInitio: boolean;
        /**
         * EstCreditLogement
         */
        estCreditLogement: boolean;
        /**
         * EstInterne
         */
        estInterne: boolean;
        /**
         * EstTAEA
         */
        estTAEA: boolean;
        /**
         * EstSFGAS
         */
        estSFGAS: boolean;
        /**
         * LibCompAssr
         */
        libelleCompAssurance: string;
    }
    interface IScCotisationCout extends IScElement {
        /**
         * MtMinRecv
         */
        montantMinimumRecouvrement: number;
        /**
         * MtMinAccs
         */
        montantMinimumAccessoire: number;
        /**
         * MtMaxAccs
         */
        montantMaximumAccessoire: number;
        /**
         * ValrCons
         */
        valeurConsolide: number;
    }
    interface IScCotisationCoutMontantListe extends IScCotisationCout {
        /**
         * ListeValeur
         */
        listeValeur: Array<number>;
        /**
         * MontantReduit
         */
        montantReduit: number;
        /**
         * MontantMajore
         */
        montantMajore: number;
    }
    interface IScCotisationCoutMontantIntervalle extends IScCotisationCout {
        /**
         * Min
         */
        minimum: number;
        /**
         * Max
         */
        maximum: number;
        /**
         * Pas
         */
        pas: number;
        /**
         * Defaut
         */
        defaut: number;
    }
    interface IScCotisationCoutQuotiteListe extends IScCotisationCoutQuotite {
        /**
         * ListeQuotite
         */
        listeQuotite: Array<number>;
        /**
         * TauxReduit
         */
        tauxReduit: number;
        /**
         * TauxMajore
         */
        tauxMajore: number;
        /**
         * TauxNormal
         */
        tauxNormal: number;
    }
    interface IScCotisationCoutQuotiteIntervalle extends IScCotisationCoutQuotite {
        /**
         * Min
         */
        minimum: number;
        /**
         * Max
         */
        maximum: number;
        /**
         * Pas
         */
        pas: number;
        /**
         * Defaut
         */
        defaut: number;
    }
    interface IScCotisationCoutQuotite extends IScCotisationCout {
        /**
         * TypeDass
         */
        typeDass: number;
        /**
         * TxPourLesPersAgs
         */
        tauxPourLesPersonneAge: number;
        /**
         * MtMaxiAssAccs
         */
        montantMaximumAssuranceAccessoire: number;
    }
    interface IScTrancheMontant {
        /**
         * Nufctr_NumrTrch
         */
        numeroTranche: number;
        /**
         * DebtTrchMt
         */
        debutTrancheMontant: number;
        /**
         * FinTrchMt
         */
        finTrancheMontant: number;
        /**
         * CotCout
         */
        cotCout: IScCotisationCout;
    }
    interface IScCotisation extends IScElement {
        /**
         * Ctfcat_SousTypeAcc
         */
        sousTypeAccessoire: string;
        /**
         * Ctfcac_TypeDaccCtfc
         */
        typeDaccCtfc: string;
        /**
         * Cdfcao_ReprsCarObgtFaclCots
         */
        repriseCarObligatoireFacultatifCotisation: number;
        /**
         * Ctfcca_ModeCalcLacc
         */
        modeCalculLacc: number;
        /**
         * Ddfcap_DateDebuDapp
         * Type date au format yyyy-MM-dd
         */
        dateDebutDapp: string;
        /**
         * Dffcap_DateFinDapp
         * Type date au format yyyy-MM-dd
         */
        dateFinDapp: string;
        /**
         * Nrfcmr_ReglDappLacc
         */
        regleDappLacc: string;
        /**
         * Nrfcda_ReglDateDebuDappLacc
         */
        regleDateDebutDappLacc: string;
        /**
         * Nrfcpa_ReglEvnmDeclr
         */
        regleEvenementDeclaration: string;
        /**
         * Pefcac_CodePerdicAppli
         */
        codePeriodiciteApplication: number;
        /**
         * Cdfceh_CodeRecvAccs
         */
        codeRecouvrementAccessoire: number;
        /**
         * Ctfcia_CodeTypeAppliAccs
         */
        codeTypeApplicationAccessoire: number;
        /**
         * Npfcap_NbPerdDappLacc
         */
        nombrePeriodeDappLacc: number;
        /**
         * Pefcap_PerdicDappLacc
         */
        periodiciteDappLacc: number;
        /**
         * Nrfcap_ReglDappAprd
         */
        regleDappAprd: string;
        /**
         * Cdfcat_CodeCalcTeg
         */
        codeCalculteg: number;
        /**
         * Cdfcrb_CodeAccsRembFinCrdt
         */
        codeAccessoireRemboursementFinCredit: boolean;
        /**
         * Cdfcap_CodeApplEchn
         */
        codeApplicationEcheance: boolean;
        /**
         * Cdfctx_CodeModeCalcTx
         */
        codeModeCalculTaux: number;
        /**
         * Nrfccr_ReglCalcLacc
         */
        regleCalculLacc: string;
        /**
         * InfosTxCots
         */
        informationTauxCotisation: Array<number>;
        /**
         * InfosMttCots
         */
        informationMontantCotisation: Array<number>;
        /**
         * Tsfcff_FrctFinnMaxiLacc
         */
        fractionFinancierMaximumLacc: number;
        /**
         * Ctfcai_CompatInstr
         */
        compatibiliteInstruction: boolean;
        /**
         * Ctfcaw_CompatAvnn
         */
        compatibiliteAvenant: boolean;
        /**
         * Ctfcfd_FinnAccCrdt
         */
        financierAccessoireCredit: boolean;
        /**
         * Cifcdb_RetrCodeIndicDerg
         */
        retardCodeIndiceDerogation: number;
        /**
         * Cifcip_CodeIntgPlanFinn
         */
        codeIntegrationPlanFinancier: number;
        /**
         * ListCoutCots
         */
        listeCoutCotisation: Array<IScCotisationCout>;
        /**
         * ListTrncMt
         */
        listeTrancheMontant: Array<IScTrancheMontant>;
    }
    interface IScCotisationPeriode extends IScCotisation {
        /**
         * Nufctr_NumTrch
         */
        numeroTranche: number;
        /**
         * Npfcap_DrPrd
         */
        drProduit: number;
        /**
         * Pefcap_PrdctPrd
         */
        producteurProduit: number;
        /**
         * Npfcel_DrEtlmnt
         */
        drElement: number;
        /**
         * Pefcde_PrdctEtlmnt
         */
        producteurElement: number;
    }
    interface IScCotisationPhase extends IScCotisation {
        /**
         * Ctfcfp_TypePhase
         */
        typePhase: string;
    }
    interface IScCotisationDerogation extends IScCotisation {
        /**
         * Npfcap_DureeDerogation
         */
        dureeDerogation: number;
        /**
         * Pefcap_PrdDerogation
         */
        produitDerogation: number;
        /**
         * Mtfcvp_MttMinCred
         */
        montantMinimumCredit: number;
        /**
         * Msfcvp_MttMaxCred
         */
        montantMaximumCredit: number;
        /**
         * Ctfcps_Personlsbl
         */
        personlsbl: number;
        /**
         * Nufcdo_NumDrgtn
         */
        numeroDirigeant: number;
    }
    interface IScCotisationTrancheAge extends IScCotisation {
        /**
         * Nufctr_NumrTrch
         */
        numeroTranche: number;
        /**
         * Nbfcai_DebuTrchAge
         */
        debutTrancheAge: number;
        /**
         * Nbfcae_FinTrchAge
         */
        finTrancheAge: number;
        /**
         * ListScCotisationDerogation
         */
        listeSousclasseCotisationDerogation: Array<IScCotisationDerogation>;
    }
    interface IConventionAssurance extends IScConvention {
        /**
         * Nbfcai_AgeMinEntrAssr
         */
        ageMinimumEntrAssurance: number;
        /**
         * Nbfcae_AgeMaxEntrAssr
         */
        ageMaximumEntrAssurance: number;
        /**
         * Cdfcsd_CodeDestReglSins
         */
        codeDestinataireRegleSinistre: number;
        /**
         * Nufcit_NDomcBanc
         */
        nDomiciliationBancaire: string;
        /**
         * Nbfcco_AgeMaxCouvAsre
         */
        ageMaximumCouvertureAssurance: number;
        /**
         * Nbfcex_AgeMaxAsreDerg
         */
        ageMaximumAssuranceDerogation: number;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest {
    /** LireElement : ICreditInterneLecture */
    interface ICreditInterne extends IElementLecture {
        /**
         * IndicEvltTxConsPond
         */
        indiceEvolutionTauxConsolidePondere: number;
        /**
         * Idfccp_IdntConvPres
         */
        idConventionPres: string;
        /**
         * Cdfdae_CodeIndicEnvAvisEche
         */
        codeIndiceEnvoiAvisEcheance: number;
        /**
         * Cifaio_CodeIndicOptmImps
         */
        codeIndiceOptimisationImps: number;
        /**
         * Cnfctx_CodeIndicTxInteRevs
         */
        codeIndiceTauxInterieurRevision: number;
        /**
         * Nofapd_NumeCredPlanFinn
         */
        numeroCreditPlanFinancier: number;
        /**
         * Idfacs_RefeExtnCred
         */
        referenceExterneCredit: string;
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Cdfcfc_CodeFamlContRegl
         */
        codeFamilleContratRegle: string;
        /**
         * Ctfcbs_CodeSclssBafi
         */
        codeSousclasseBafi: string;
        /**
         * Cdfcrl_CodeIndicCredRels
         */
        codeIndiceCreditRelease: number;
        /**
         * Idfcct_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Cdfccr_CodeIndicTrtInteIntr
         */
        codeIndiceTraitementInterieurIntr: number;
        /**
         * Cdfcia_CodeTypeActlInteIntr
         */
        codeTypeActuarielInterieurIntr: number;
        /**
         * Cdfbdv_CodeDevsVerst
         */
        codeDeviseVersement: string;
        /**
         * Cdfbje_CodeIndicExstPiecJustPourDeclechlVerst
         */
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        /**
         * Cdfbju_CodeExistJustDeclVerst
         */
        codeExistJustificatifDeclarationVersement: number;
        /**
         * Cdfbju_CodeTypeRattJustDecl
         */
        codeTypeRattachementJustificatifDeclaration: number;
        /**
         * Cdfbve_ModeReglVerst
         */
        modeRegleVersement: string;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Dtfam0_DateMer0
         * Type date au format yyyy-MM-dd
         */
        dateMER0: string;
        /**
         * Dtfam1_DateMer1
         * Type date au format yyyy-MM-dd
         */
        dateMER1: string;
        /**
         * Dtfccr_DateCretCred
         * Type date au format yyyy-MM-dd
         */
        dateCreationCredit: string;
        /**
         * Dlfbct_DateLimtVerstFond
         * Type date au format yyyy-MM-dd
         */
        dateLimiteVersementFond: string;
        /**
         * Dhfacj_QuantEche
         */
        jourDateEcheance: number;
        /**
         * Dffb1v_DateLimtPremVerstFond
         * Type date au format yyyy-MM-dd
         */
        dateLimitePremierVersementFond: string;
        /**
         * Cdfaea_CodeIndicElgbApl
         */
        codeIndiceEligibiliteAPL: number;
        /**
         * Cdfcie_CodeIndicelgbAuprInstemss
         */
        codeIndicelgbAuprInstemss: number;
        /**
         * Cdfacc_CodeIndicGestCredAvecCpteCrrt
         */
        codeIndiceGestionCreditAvecCompteCrrt: number;
        /**
         * Dtfcdc_DateDernCalcCred
         * Type date au format yyyy-MM-dd
         */
        dateDernierCalculCredit: string;
        /**
         * Ccfarc_CodeIndicCalcAFaire
         */
        codeIndiceCalculAFaire: number;
        /**
         * Mtfael_MtPrimEparLogm
         */
        montantPrimeEpargneLogement: number;
        /**
         * Txfasr_TxNegcSurcRembAntc
         */
        tauxNegocieSurcRemboursementAnticipe: number;
        /**
         * Txfcpd_TxPondCntExtr
         */
        tauxPondereCntExtr: number;
        /**
         * Txfck4_TxPondCons
         */
        tauxPondereConsolide: number;
        /**
         * Txfrr1_MargPondCons
         */
        margePondereConsolide: number;
        /**
         * Ccfbec_CodeCalcEcheVerst
         */
        codeCalculEcheanceVersement: number;
        /**
         * Cefbec_CodeettEcheVerst
         */
        codeettEcheanceVersement: number;
        /**
         * Cdfbct_CodeIndcNatrEcheVerst
         */
        codeIndiceNatureEcheanceVersement: number;
        /**
         * Lbfpa1_InttCred
         */
        intituleLigneUn: string;
        /**
         * Nufbdt_DomcTres
         */
        domiciliationTres: string;
        /**
         * Nufbve_NumeDomcPourMiseADispFond
         */
        numeroDomiciliationPourMiseADispFond: string;
        /**
         * Mtfcve_MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * Ctfcpc_CodeIndicNatrPretComb
         */
        codeIndiceNaturePretComb: number;
        /**
         * Cifaam_CodeIndicPresUneBonfUneMajreTx
         */
        codeIndicePresUneBonificationUneMajreTaux: number;
        /**
         * Cefad0_CodeConfmRedcDurePTZ
         */
        codeConfirmationReductionDurePTZ: number;
        /**
         * Cefam0_CodeConfmRedcMtPTZ
         */
        codeConfirmationReductionMontantPTZ: number;
        /**
         * Mtfcpz_MtReglPTZ
         */
        montantReglePTZ: number;
        /**
         * MtMinPTZ
         */
        montantMinimumPTZ: number;
        /**
         * Mcface_MtCredEuro
         */
        montantCreditEuro: number;
        /**
         * Msfcpv_MtMaxPretPVH
         */
        montantMaximumPretPVH: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfada_CodeDevsSaccef
         */
        codeDeviseSaccef: string;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * Mefape_MtPrmeEcheHorsAccsCred
         */
        montantPrmeEcheanceHorsAccessoireCredit: number;
        /**
         * Mefacc_MtPrmeEcheAssr
         */
        montantPrmeEcheanceAssurance: number;
        /**
         * Mcafco_MtTotlCredHorsAccsHorsPerdPref
         */
        montantTotalCreditHorsAccessoireHorsPeriodePref: number;
        /**
         * Mcfaac_CoutTotlAccsPostSurCred
         */
        coutTotalAccessoirePosteSurCredit: number;
        /**
         * Mcfafd_CoutTotlFrsDossAsscCred
         */
        coutTotalFrsDossierAssuranceCredit: number;
        /**
         * Mcfgfr_CoutTotlFrsGarnAsscCred
         */
        coutTotalFrsGarantieAssuranceCredit: number;
        /**
         * Mcfacf_CoutTotlFrsCrtgeAsscCred
         */
        coutTotalFrsCrtgeAssuranceCredit: number;
        /**
         * Mcfosp_CoutTotlServSurObjtPerdAsscCred
         */
        coutTotalServiceSurObjetPeriodeAssuranceCredit: number;
        /**
         * Mcfafp_CoutTotlAccsCompPerdAsscCred
         */
        coutTotalAccessoireCompPeriodeAssuranceCredit: number;
        /**
         * Mcfoso_CoutTotlServSurObjtAperAsscCred
         */
        coutTotalServiceSurObjetAperAssuranceCredit: number;
        /**
         * Mcfafr_CoutTotlAccsCompAperAsscCred
         */
        coutTotalAccessoireCompAperAssuranceCredit: number;
        /**
         * Mefoso_MtPrmeEcheServSurObjt
         */
        montantPrmeEcheanceServiceSurObjet: number;
        /**
         * Mefafr_MtPrmeEcheAccsComp
         */
        montantPrmeEcheanceAccessoireComp: number;
        /**
         * Mcfaia_MtTotlAssrPerd
         */
        montantTotalAssurancePeriode: number;
        /**
         * CodeIndicModeCalcTx
         */
        codeIndiceModeCalculTaux: number;
        /**
         * TxMoyeActuHorsBonf
         */
        tauxMoyenActuHorsBonification: number;
        /**
         * TxMoyePropHorsBonf
         */
        tauxMoyenPropHorsBonification: number;
        /**
         * TxFutr
         */
        tauxFutr: ITauxIndiceLecture;
        /**
         * TxIntl
         */
        tauxInitial: ITauxInteretAnnuelLecture;
        /**
         * TxMoyeActu
         */
        tauxMoyenActu: number;
        /**
         * TxMoyeProp
         */
        tauxMoyenProp: number;
        /**
         * TegActu
         */
        tegActu: number;
        /**
         * TegProp
         */
        tegProp: number;
        /**
         * TAEA
         */
        tAEA: number;
        /**
         * Txfamc_TxMontage
         */
        tauxMontage: number;
        /**
         * BornesFraisDossier
         */
        bornesFraisDossier: Array<number>;
        /**
         * TegModeRestitution
         */
        tegModeRestitution: number;
        /**
         * MontantPTZVerrouille
         */
        montantPTZVerrouille: boolean;
        /**
         * DureePTZVerrouillee
         */
        dureePTZVerrouillee: boolean;
        /**
         * EcheancesJustifieesAssociees
         */
        echeancesJustifieesAssociees: IEcheancesJustifieesAssocieesLecture;
        /**
         * EtatForcageFraisDossier
         */
        etatForcageFraisDossier: string;
        /**
         * TxUsure
         */
        tauxUsure: number;
        /**
         * AjustementTaux
         */
        ajustementTaux: IAjustementTauxLecture;
        /**
         * MargeRevConseil
         */
        margeRevisionConseil: number;
        /**
         * ExisteAssuranceSurCRD
         */
        existeAssuranceSurCRD: boolean;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
        /**
         * IdntCpteCrrt
         */
        idCompteCrrt: string;
        /**
         * IdntModl
         */
        idModele: string;
        /**
         * IdntModlVersFrct
         */
        idModeleVersementFraction: string;
        /**
         * IdntRemsClnt
         */
        idRemsClient: string;
        /**
         * ListIdntDrtUtls
         */
        listeIdDroitUtilisation: Array<string>;
        /**
         * ListIdntPayr
         */
        listeIdPayr: Array<string>;
        /**
         * ListIdntPhas
         */
        listeIdPhase: Array<string>;
        /**
         * ListIdntSuivPlnf
         */
        listeIdSuivantPlafond: Array<string>;
        /**
         * ListIdntParmRevs
         */
        listeIdParametreRevision: Array<string>;
        /**
         * ListIdntVartDure
         */
        listeIdVartDure: Array<string>;
        /**
         * ListIdntAccs
         */
        listeIdAccessoire: Array<string>;
        /**
         * ListIdntAssr
         */
        listeIdAssurance: Array<string>;
        /**
         * ListIdntGarn
         */
        listeIdGarantie: Array<string>;
        /**
         * ListIdntAccsComp
         */
        listeIdAccessoireComp: Array<string>;
        /**
         * ListIdntAccsLiesPrdt
         */
        listeIdAccessoireLiesProduit: Array<string>;
        /**
         * ListIdntCreditsEPS
         */
        listeIdCreditsEPS: Array<string>;
        /**
         * IdntComplementEPS
         */
        idComplementEPS: string;
    }
    interface ITauxInteretAnnuelLecture {
        /**
         * ModeCalcTx
         */
        modeCalculTaux: number;
        /**
         * NbPerdParAn
         */
        nombrePeriodeParAn: number;
        /**
         * TxActu
         */
        tauxActu: number;
        /**
         * TxProp
         */
        tauxProp: number;
    }
    interface ITauxIndiceLecture extends ITauxInteretAnnuelLecture {
        /**
         * Marg
         */
        marge: number;
        /**
         * ValrIndc
         */
        valeurIndice: number;
    }
    interface IEcheancesJustifieesAssocieesLecture {
        /**
         * TitreCredit
         */
        titreCredit: string;
        /**
         * MessagesInterets
         */
        messagesInterets: Array<string>;
        /**
         * TypesFrais
         */
        typesFrais: Array<IGroupeJustificationTEGLecture>;
    }
    interface IAjustementTauxLecture extends IElementLecture {
        /**
         * RemiseMajoration
         */
        remiseMajoration: number;
        /**
         * NouvelleRemiseMajoration
         */
        nouvelleRemiseMajoration: number;
        /**
         * TauxActuel
         */
        tauxActuel: number;
        /**
         * TauxBonificationMajoration
         */
        tauxBonificationMajoration: number;
        /**
         * TauxConseillePondere
         */
        tauxConseillePondere: number;
        /**
         * MargeRevision
         */
        margeRevision: number;
        /**
         * RemiseTaux
         */
        remiseTaux: boolean;
        /**
         * ChangementTauxConseille
         */
        changementTauxConseille: boolean;
    }
    interface IGroupeJustificationTEGLecture {
        /**
         * LibelleFrais
         */
        libelleFrais: string;
        /**
         * MessagesFrais
         */
        messagesFrais: Array<string>;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest {
    interface ILireElementsRequest {
        identifiantDossier: string;
        listeIdentifiantElement: Array<string>;
    }
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<IAnomalieLecture>;
    }
    interface IAnomalieLecture {
        /**
         * TypeCtrl
         */
        typeControle: number;
        /**
         * IdntAno
         */
        idAno: string;
        /**
         * LiblAno
         */
        libelleAno: string;
        /**
         * TypeAno
         */
        typeAno: number;
        /**
         * DateHeurAno
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeureAno: string;
        /**
         * Idfaco_IdntCtrlRegl
         */
        idControleRegle: string;
        /**
         * IdntObjt
         */
        idObjet: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest {
    interface IPersonne extends IElementLecture {
        /**
         * Cdfprs_CrteResd
         */
        crteResd: number;
        /**
         * LiblResidence
         */
        libelleResidence: string;
        /**
         * Ctfcae_CateAgntecnmBafi
         */
        cateAgntecnmBafi: number;
        /**
         * Ctfccl_CateClntBafi
         */
        cateClientBafi: number;
        /**
         * Ctfcad_CateTypeAdmnBafi
         */
        cateTypeAdmnBafi: number;
        /**
         * Ctfcba_ClssAgntBafi
         */
        classeAgentBafi: string;
        /**
         * Idfpbd_CleBdf
         */
        cleBDF: string;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Dtfper_DateEntrReltAvecCons
         * Type date au format yyyy-MM-dd
         */
        dateEntrRelationAvecConsolide: string;
        /**
         * Cdfptp_CodeTypePers
         */
        codeTypePersonne: number;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Cdfpap_CodeAssmPartc
         */
        codeAssmPartc: number;
        /**
         * Lbfpa1_InttAdrs
         */
        intituleAdresse: string;
        /**
         * Lbfpa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfpa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfpa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfpa5_Ville
         */
        ville: string;
        /**
         * Lbfpa6_ComplIntt
         */
        complementIntitule: string;
        /**
         * Lbfpa7_AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Llfaem_EmailPerso
         */
        emailPerso: string;
        /**
         * Nufptb_NumeTeleProf
         */
        numeroTeleProf: string;
        /**
         * Nufptl_NumeTelePers
         */
        numeroTelePersonne: string;
        /**
         * Nufptx_NumeTcpyProf
         */
        numeroTcpyProf: string;
        /**
         * Nufpto_NumePortPers
         */
        numeroPortPersonne: string;
        /**
         * Lbfpen_EnsgComm
         */
        ensgCommission: string;
        /**
         * Lbfpir_LieuInscRC
         */
        lieuInscRC: string;
        /**
         * Nufpir_NumeInscRC
         */
        numeroInscRC: string;
        /**
         * Ctfprp_RolsPersPourDoss
         */
        rolsPersonnePourDossier: Array<string>;
        /**
         * PersEstAssr
         */
        personneEstAssurance: boolean;
        /**
         * Nofpem_NumeOrdrPersEmpr
         */
        numeroOrdrePersonneEmprunt: number;
        /**
         * Ctfipe_CodeTypeBasePers
         */
        codeTypeBasePersonne: number;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * Hefcsd_DateSignDmdeCred
         * Type date au format yyyy-MM-dd
         */
        dateSigneDmdeCredit: string;
        /**
         * Hefcso_DateSignOffre
         * Type date au format yyyy-MM-dd
         */
        dateSigneOffre: string;
        /**
         * ReltnEntrPers
         */
        reltnEntrPersonne: Array<IRelationEntrePersonnesLecture>;
        /**
         * ListIdntRess
         */
        listeIdRessource: Array<string>;
        /**
         * ListIdntChrg
         */
        listeIdCharge: Array<string>;
        /**
         * ListIdntCpte
         */
        listeIdCompte: Array<string>;
        /**
         * ListIdntFamlEprg
         */
        listeIdFamilleEpargne: Array<string>;
        /**
         * IdntFicheContact
         */
        idFicheContact: string;
    }
    interface IRelationEntrePersonnesLecture extends IElementLecture {
        /**
         * Cnfcrp_CodeNatureRelation
         */
        codeNatureRelation: string;
        /**
         * IdntPers1
         */
        idPersonne1: string;
        /**
         * IdntPers2
         */
        idPersonne2: string;
    }
    interface IPersonnePhysique extends IPersonne {
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Ctfpse_CodeSexePers
         */
        codeSexePersonne: number;
        /**
         * Lbfpnj_NomJeunFill
         */
        nomJeunFill: string;
        /**
         * Dtfpna_DateNais
         * Type date au format yyyy-MM-dd
         */
        dateNais: string;
        /**
         * Lbfpna_LieuNais
         */
        lieuNais: string;
        /**
         * Cdfpce_CodePersCe
         */
        codePersonneCE: number;
        /**
         * Cdfprm_CodeRegmMatr
         */
        codeRegimeMatrimonial: string;
        /**
         * Cdfpsf_CodeSittFaml
         */
        codeSituationFamille: number;
        /**
         * Lbfpsf_LibelleSittFaml
         */
        libelleSituationFamille: string;
        /**
         * Nbfppc_NbPersAChrg
         */
        nombrePersonneACharge: number;
        /**
         * Cdfpsp_CateSoc
         */
        cateInteret: string;
        /**
         * Lbfmfc_LiblCatSocioPro
         */
        libelleCatSocioPro: string;
        /**
         * Dtfpma_DateEfftSittFaml
         * Type date au format yyyy-MM-dd
         */
        dateEffetSituationFamille: string;
        /**
         * Cdfmdo_CodeSalrDomcCe
         */
        codeSalrDomiciliationCE: number;
        /**
         * Cdfmlo_CodeModeLogm
         */
        codeModeLogement: number;
        /**
         * Lbfmlo_LibelleModeLogm
         */
        libelleModeLogement: string;
        /**
         * Dtfmlo_DateEntrLogm
         * Type date au format yyyy-MM-dd
         */
        dateEntrLogement: string;
        /**
         * Cdfmju_CodeCapcJurd
         */
        codeCapcJuridique: number;
        /**
         * LibelleCapaciteJurd
         */
        libelleCapaciteJuridique: string;
        /**
         * Ctfccj_CodeTypeCapJurd
         */
        codeTypeCapJuridique: string;
        /**
         * Cdfmnt_CodeNatn
         */
        codeNational: number;
        /**
         * LibelleNationalite
         */
        libelleNationalite: string;
        /**
         * Cdfmtd_CodeSaisAvisTierDtnr
         */
        codeSaisieAvisTiersDtnr: number;
        /**
         * Cdfmcx_CodeCtx
         */
        codeContentieuxHorsComptCE: number;
        /**
         * Mtfmes_MtEncrSaccefHorsOprt
         */
        montantEncoursSaccefHorsOprt: number;
        /**
         * Cdfmtr_TypeTrspUtls
         */
        typeTrspUtilisation: number;
        /**
         * Cdfmge_CodeGeotAdrsDomc
         */
        codeGeotAdresseDomiciliation: string;
        /**
         * Cdfppb_CodePaysResdEmpr
         */
        codePaysResdEmprunt: string;
        /**
         * Cdfopb_CodePaysLocsEmpr
         */
        codePaysLocalisationEmprunt: string;
        /**
         * Cdfkpa_CodePrflEmpr
         */
        codeProfilEmprunt: number;
        /**
         * Cofcpn_CodePstlLieuNais
         */
        codePstlLieuNais: string;
        /**
         * DossierAssurance
         */
        dossierAssurance: IDossierAssuranceLecture;
        /**
         * IdntActv
         */
        idActivite: string;
        /**
         * IdntIntdBanc
         */
        idIntdBancaire: string;
        /**
         * ListIdntOpps
         */
        listeIdOpps: Array<string>;
    }
    interface IDossierAssuranceLecture {
        /**
         * EtatDossierAssurance
         */
        etatDossierAssurance: IEtatDossierAssuranceLecture;
        /**
         * DecisionDossierAssurance
         */
        decisionDossierAssurance: IDecisionDossierAssuranceLecture;
    }
    interface IEtatDossierAssuranceLecture {
        /**
         * LibelleEtat
         */
        libelleEtat: string;
        /**
         * LibelleDossier
         */
        libelleDossier: string;
        /**
         * LibelleDemande
         */
        libelleDemande: string;
        /**
         * LibelleDateEnvoi
         */
        libelleDateEnvoi: string;
    }
    interface IDecisionDossierAssuranceLecture {
        /**
         * AccesLectureDecision
         */
        accessoireLectureDecision: boolean;
        /**
         * AvisValide
         */
        avisValide: boolean;
        /**
         * CodeDecision
         */
        codeDecision: number;
        /**
         * LibelleCredit
         */
        libelleCredit: string;
        /**
         * LibelleAvis
         */
        libelleAvis: string;
        /**
         * LibelleErreur
         */
        libelleErreur: string;
    }
}
