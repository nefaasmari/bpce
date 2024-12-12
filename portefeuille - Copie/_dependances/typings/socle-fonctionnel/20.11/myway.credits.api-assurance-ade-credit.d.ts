
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

declare namespace AssuranceAdeCredit.Constantes {
    namespace Events {
        const eventCarriageReturn: number;
    }
}

declare namespace AssuranceAdeCredit.Constantes.Format {
    namespace Date {
        /** DD/MM/YYYY */
        const IHM: string;
        /** YYYY-MM-DD  */
        const REST: string;
    }
}

declare namespace AssuranceAdeCredit.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
        const $interval: string;
        const $route: string;
        const $rootScope: string;
        const $filter: string;
        const $modalInstance: string;
    }
    namespace MyWay {
        const mwsfAdresseService: string;
        const modalService: string;
        const notificationService: string;
        const serviceAgent: string;
        const serviceAgentExtended: string;
    }
    namespace Services {
        const assuranceAdeService: string;
        const assureService: string;
        const elementService: string;
        const restService: string;
        const propositionAssuranceService: string;
        const sessionService: string;
        const adeRulesService: string;
        const adeFormSettingsService: string;
    }
}

declare namespace AssuranceAdeCredit.Constantes.Tooltips {
    const quotite: string;
}

declare namespace AssuranceAdeCredit.Constantes {
    namespace Wsdl {
        const derniereVersionWsdl: number;
    }
    namespace Rest {
        const urlElementInstructionService: string;
        const urlDossierCreditInstruc: string;
        const urlCreditParametre: string;
    }
    namespace Url {
        const urlLireElements: string;
        const urlSupprimerElements: string;
        const urlCreerPropAssurance: string;
        const urlLirePropAssurance: string;
        const urlChargerConventionAssurance: string;
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum ModeConsultation {
        Creation = 0,
        Modification = 1,
        Consultation = 2,
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum RetourAde {
        Ok = 0,
        ErreurNeo = 1,
        Annulation = 2,
        NonAssurable = 3,
        Exception = 4,
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum TypeContrat {
        Groupe = 0,
        Personnalise = 1,
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum TypeCouverture {
        Socle = 1,
        Option = 3,
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum TypeGarantie {
        /** Cas particulier, on ne doit pas recevoir de garantie indeterminée */
        NonDetermine = 0,
        ArretTravail = 1,
        Couverture = 2,
        Deces = 3,
        Franchise = 4,
        Indemnisation = 5,
        Invalidite = 6,
        NiveauInvalidite = 7,
        PTIA = 8,
        APE = 9,
    }
}

declare namespace AssuranceAdeCredit.Filters {
}

declare namespace AssuranceAdeCredit.ModelTransformers {
    class ConventionAssuranceTransformer {
        static parseConventionAssurance(convention: Modeles.Rest.ConventionAssurance.IConventionAssurance): Modeles.IConventionAssurance;
    }
}

declare namespace AssuranceAdeCredit.ModelTransformers {
    import CreerPropAssurance = Modeles.Rest.CreerPropAssurance;
    class PropositionAssuranceTransformer {
        static parseRetourCreation(dataRetour: CreerPropAssurance.ISortiePropositionAssurance): Modeles.IConfiguration;
        private static parseArguments(data);
        private static parseGaranties(data);
        private static parseOption(option);
        private static parseNums(option);
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IConfiguration {
        idPersonne: string;
        idProposition: string;
        idAssurances: string[];
        /** Liste de toutes les garanties configurées */
        garanties: Configuration.IGarantie[];
        /** Filtre sur les garanties socles  */
        garantiesNonPerso: Configuration.IGarantie[];
        /** Filtre sur les garanties options (hors perte emploi) */
        garantiesPerso: Configuration.IGarantie[];
        /** Garantie perte emploi */
        garantiePerteEmploi: Configuration.IGarantie;
        /** Liste de tous les arguments */
        arguments: Configuration.IArgumentContrat[];
        /** Filtre sur les arguments groupe */
        argumentsGroupe: Configuration.IArgumentContrat[];
        /** Filtre sur les arguments perso */
        argumentsPerso: Configuration.IArgumentContrat;
        anomalies: string[];
    }
    interface ISynthese {
        idPersonne?: string;
        intituleAssure?: string;
        idCredit?: string;
        libelleProduit?: string;
        montantCredit?: number;
        dureeCredit?: number;
        isCreditInFine?: boolean;
        quotite?: number;
        coutMoyenMensuel?: number;
        coutTotal?: number;
        tauxTaea?: number;
        codeDevise?: string;
        listeGarantiesSocle?: Configuration.IGarantie[];
        listeGarantiesOption?: Configuration.IGarantie[];
        garantiePerteEmploi?: Configuration.IGarantie;
        syntheses?: ISynthese[];
    }
    interface IViewModel {
        avantagePanels: IViewModelAvantagePanels;
        boutonPoursuivreVisible: boolean;
        cheminDeFer: Modeles.ICheminDeFer;
        codeDevise: string;
        detailConventionVisible: boolean;
        indexPersonneSelectionnee: number;
        listeCreditsVisible: boolean;
        listeMontantsPerteEmploi: number[];
        modeExpertActif: boolean;
        quotiteCouverture: number;
        quotiteCouvertureVisible: boolean;
        tabset: IViewModelTabset;
        tarificationDerogatoire: boolean;
        tarificationDerogatoireSelected: number;
        tarificationDerogatoireListe: number[];
    }
    interface IViewModelAvantagePanels {
        groupe: boolean;
        personnalises: boolean;
        ready: boolean;
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
    interface ICodeLabel<T extends string | number | boolean> {
        code: T;
        label: string;
        customObject?: Object;
        toAsciiValue?: () => string;
        toAsciiCode?: () => number;
        /** indique que cet élement représente un groupe est n'est pas sélectionnable */
        isGroupType?: boolean;
    }
    class CodeLabel<T extends string | number> implements ICodeLabel<T> {
        code: T;
        label: string;
        customObject: Object;
        constructor(code: T, label: string, customObject?: Object);
        toAsciiCode(): number;
        toAsciiValue(): string;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IControleAffichage {
        name: string;
        estActif: boolean;
        estSelectionne: boolean;
        estVisible: boolean;
        infobulle: string;
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
    interface IConventionAssurance {
        libelle: string;
        codeDevise: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IDataAssures {
        credits: Rest.CreditInterne.ICreditInterne[];
        personnes: Rest.IPersonnePhysique[];
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface INomProposition {
        idPersonne: string;
        idProposition: string;
    }
    interface IInputParams {
        idDossier: string;
        isConsultation: boolean;
        /** Id de la proposition d'assurance, a laisser undefined en création */
        idNomProposition?: INomProposition[];
        /** Format YYYYMMDD */
        dateTraitement: string;
        idConventionAssurance: string;
        listeIdCredits: string[];
        listeIdPersonnes: string[];
        estPage: boolean;
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
        getSyntheseCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.CreditInterne.ICreditInterne, isProposition?: boolean): Modeles.ISynthese;
        /**
         * Retourne une synthèse de proposition pour un assuré à l'aide de données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param personne
         * @param listeCreditsSelectionnes
         */
        getSynthesePropositionAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, listeCreditsSelectionnes: Modeles.Rest.CreditInterne.ICreditInterne[]): Modeles.ISynthese;
        /**
         * Retourne une synthèse de proposition pour un crédit à l'aide de données passées en paramètre
         * @param configuration
         * @param viewModel
         * @param credit
         * @param personne
         */
        getSynthesePropositionCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.CreditInterne.ICreditInterne, personne: Modeles.Rest.IPersonnePhysique): Modeles.ISynthese;
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
        getSyntheseCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.CreditInterne.ICreditInterne, isProposition?: boolean): Modeles.ISynthese;
        getSynthesePropositionAssure(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, personne: Modeles.Rest.IPersonnePhysique, listeCreditsSelectionnes: Modeles.Rest.CreditInterne.ICreditInterne[]): Modeles.ISynthese;
        getSynthesePropositionCredit(configuration: Modeles.IConfiguration, viewModel: Modeles.IViewModel, credit: Modeles.Rest.CreditInterne.ICreditInterne, personne: Modeles.Rest.IPersonnePhysique): Modeles.ISynthese;
        isPretInFineOuRelais(libelleProduit: string): boolean;
        private getCout(indexPersonneSelectionnee, isPretInFineOuRelais, isTotal?);
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IAssureService {
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Modeles.IConventionAssurance>;
    }
    class AssureService implements IAssureService {
        private elementService;
        private $q;
        private restService;
        static $inject: Array<string>;
        constructor(elementService: IElementService, $q: ng.IQService, restService: RestService);
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Modeles.IConventionAssurance>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IElementService {
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
        supprimerElements(identifiantDossier: string, listeIdws: string[]): ng.IPromise<void>;
    }
    class ElementService implements IElementService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: RestService);
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
        supprimerElements(identifiantDossier: string, listeIdws: string[]): ng.IPromise<void>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IPropositionAssuranceService {
        creerPropositionAssurance(idDossier: string, idPersonnes: string[], idCredits: string[]): ng.IPromise<Modeles.IConfiguration[]>;
        lirePropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[]): ng.IPromise<Modeles.IConfiguration[]>;
        majPropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[]): ng.IPromise<Modeles.IConfiguration[]>;
    }
    class PropositionAssuranceService implements IPropositionAssuranceService {
        private restService;
        private $q;
        static $inject: Array<string>;
        constructor(restService: RestService, $q: ng.IQService);
        creerPropositionAssurance(idDossier: string, idPersonnes: string[], idCredits: string[]): ng.IPromise<Modeles.IConfiguration[]>;
        lirePropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[]): ng.IPromise<Modeles.IConfiguration[]>;
        majPropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[]): ng.IPromise<Modeles.IConfiguration[]>;
        private processRetour<T>(dataRetour);
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
    /**
     * Utilitaires pour les booleéns
     */
    class BooleanUtils {
        /**
         * Converts a boolean value to a string value
         * @param value
         */
        static convertBooleanToString(value: boolean): string;
        /**
         * Fonction pour retourner "oui" ou "non" en minsucule
         * @param valeur
         */
        static txtOuiNonMinuscule(valeur: boolean): string;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    enum TypeDate {
        years = 0,
        months = 1,
        weeks = 2,
        days = 3,
        hours = 4,
        minutes = 5,
        seconds = 6,
    }
    /**
     * Tools for dates
     */
    class DateUtils {
        static birthDateToAge(birth: string): number;
        /**
         * Parse a string yyyy-MM-dd to Date
         * Return null if the date is at year 1 '0001-01-01'
         * @param date
         */
        static parse(date: string, format?: string): Date;
        /**
         * Returns true if the date is null or the date is at year 1 like '0001-01-01'
         * @param date
         * @param format
         */
        static isConsideredNull(date: string, format?: string): boolean;
        /**
         * Format Date using moment.js template
         * @param date
         * @param templateOut templateOut
         * @param templateIn if date is string, specify template
         */
        static format(date: Date | string, templateOut: string, templateIn?: string): string;
        private static minDateToNull(date);
        /**
         * Give the current timestamp
         */
        static getNowISOString(): string;
        /**
         * Trouve le string associé en fonction
         * @param type
         */
        static getTypeDate(type: TypeDate): string;
        /**
         * Donne la différence entre 2 dates en fonction du type passé en paramètre (years, months, weeks, days, hours, minutes, and seconds)
         * @param date1
         * @param date2
         */
        static getBetweenDates(date1: string, date2: string, type: TypeDate): number;
        static addToDate(dateDebut: string, nb: number, type: TypeDate, formatIn?: string, formatOut?: string): string;
        static isGreaterThan(date: string, comparedDate: string, dateFormat?: string, comparedDateFormat?: string): boolean;
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

declare namespace AssuranceAdeCredit.Tools {
    /**
     * Tools for list
     */
    abstract class List {
        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate),
         * or an empty object if no value passes the test.
         * The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
         * @param list
         * @param predicate
         */
        static findOrEmpty<T>(list: T[], predicate: _.ListIterator<T, boolean>): T;
        /**
         * Returns the first element of an array or an empty Object if the list is null or empty
         * @param list
         */
        static firstOrEmpty<T>(list: T[]): T;
        /**
         * Check if a list is not null and contains elements
         * @param list
         */
        static isNullOrEmpty<T>(list: T[]): boolean;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /**
     * Math tools
     */
    class MathTools {
        /**
         * Retourne la somme d'un tableau de décimale
         * @param array Le tableau contenant les nombres
         * @param precision Le nombre de décimales souhaitées (par défaut : 2)
         */
        static sumWithPrecision(array: number[], precision?: number): number;
        static sum(array: number[]): number;
        static sumBy<T>(array: T[], iteratee: (i: T) => number): number;
        private static sumBase<T>(array, iteratee);
        /**
         * apply quotient to amount
         * @param quotient
         * @param fromAmount
         * @param precision default : 0
         */
        static applyQuotient(quotient: number, fromAmount: number, precision?: number): number;
        /**
         * Calculate quotient from 2 numbers
         * @param fromTotal
         * @param partialAmount
         * @param precision default : 0
         */
        static calculateQuotient(fromTotal: number, partialAmount: number, precision?: number): number;
        /**
         * No comments
         * @param fromTotal
         * @param partialAmount
         * @param precision default : 0
         */
        static substract(fromTotal: number, partialAmount: number, precision?: number): number;
        /**
         * Round to a precision from float number
         * @param number
         * @param precision
         */
        static toPrecision(number: number, precision: number): number;
        static isFloat(number: number): boolean;
        static isInt(number: number): boolean;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    abstract class ObjectUtils {
        /** as this is a singleton returned as empty obj, Object.freez prevents it to be modified   */
        private static obj;
        /**
         * Return an object reference that cannot be set
         * @param o
         */
        static nullToEmpty<T>(o: T): T;
        /**
         * try to access properties with null parent.
         * if failed, return an empty object.
         * Example a.b.c => if b is null: return empty object. else return c
         * @param o the methods returning the property to access
         */
        static safeAccess<T>(o: () => T): T;
        /**
         * Returns string to display all keys/value  of the object
         * @param o
         */
        static toString<T>(o: T): string;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    class String {
        /**
         * Lowers the first letter of a string
         * @param str the string to transform
         */
        static toFirstLetterLower(str: string): string;
        /**
         * Upper first letter of a string
         * @param str the string to transform
         */
        static toFirstLetterUpper(str: string): string;
        /**
         * Checks if a string contains another substring
         * @param str The string that may contain the substring
         * @param substring The sub-string
         * @param ignoreCase Optional value indicating that the case should be ignored (default: false)
         */
        static contains(str: string, substring: string, ignoreCase?: boolean): boolean;
        /**
         * Format String to the length wanted
         * @param str
         * @param length
         */
        static stringToLength(str: string, length: number): string;
        /**
         * Unescapes newline & tab characters
         * @param str String to process
         * @param keepEol Keep the end of line linebreaks
         */
        static unescape(str: string, keepEol?: boolean): string;
        /** Removes trailing space & double spaces in a string */
        static fixSpacing(str: string): string;
    }
}

declare namespace AssuranceAdeCredit {
    class AssuranceAdeControleur {
        private $q;
        private $scope;
        private $timeout;
        private modalService;
        private assuranceAdeService;
        private assureService;
        private sessionService;
        private propositionAssuranceService;
        private formSettingsService;
        private inputRulesService;
        private elementService;
        static parametres: Modeles.IControleurParametre;
        params: Modeles.IInputParams;
        callback: (map: {}) => void;
        loader: boolean;
        conventionAssurance: Modeles.IConventionAssurance;
        configurationActuelle: Modeles.IConfiguration;
        configurations: Modeles.IConfiguration[];
        listeCreditsSelectionnes: Modeles.Rest.CreditInterne.ICreditInterne[];
        listePersonnesSelectionnees: Modeles.Rest.IPersonnePhysique[];
        syntheseParAssure: Modeles.ISynthese[];
        synthesePropositionsParAssure: Modeles.ISynthese[];
        synthesePropositionsParCredit: Modeles.ISynthese[];
        tooltips: {};
        viewModel: Modeles.IViewModel;
        anomalies: string[];
        formSettings: Services.FormSettings.IAdeFormSettings;
        rules: Services.InputRules.IAdeRules;
        private isSyntheseProposition;
        private codeEtablissement;
        isConsultation: boolean;
        private modeDirective;
        private listeIdAssurances;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, $timeout: ng.ITimeoutService, modalService: MyWay.UI.ModalService, assuranceAdeService: Services.IAssuranceAdeService, assureService: Services.IAssureService, sessionService: Services.ISessionService, propositionAssuranceService: Services.IPropositionAssuranceService, formSettingsService: Services.FormSettings.IAdeFormSettingsService, inputRulesService: Services.InputRules.AdeRulesService, elementService: Services.IElementService);
        cancel(): void;
        throwTechnical(anomalies: string[], doRetour?: boolean): void;
        continue(): void;
        deleteElement(isCredit: boolean): void;
        getLabelClause(garantie: Modeles.Configuration.IGarantie): string;
        notImplemented(): void;
        toggleAvantagesPanel(): void;
        submit(): void;
        syncSyntheses(): void;
        toggleOptionGarantie(option: Modeles.Configuration.IOption, garantie: Modeles.Configuration.IGarantie): void;
        updateTableSyntheseParAssure(): void;
        updateTableSynthesesProposition(personneSelectionnee: Modeles.Rest.IPersonnePhysique): void;
        private buildListeArguments();
        private buildListeGaranties();
        private filterGaranties(callback);
        private retourAde();
        private retourAdeErreur(reason, error?);
        private doCleanup();
        private clickOnAnchor(anchor);
        private displayTabset();
        private getTabsetAnchor(selectors);
        private getServiceProposition();
        private getServiceLecture();
        private goToSynthesesViaModeExpert();
        private goToTab(index);
        private initCheminDeFer();
        private initConfigurationActuelle();
        private initConfigurationActuelleFromService();
        private initConfigurationActuelleFromExistant();
        private initData();
        private initViewModel();
        private showCountriesModal();
        private updateCheminDeFer(index);
        private updateNavigation(indexCourant, tabsetLength);
        private updateTabset();
    }
}

declare namespace AssuranceAdeCredit {
}

declare namespace AssuranceAdeCredit.Modeles.Configuration {
    interface IArgumentContrat {
        ordre: number;
        titre: string;
        typeArgument: Enum.TypeContrat;
        arguments: IArgument[];
    }
    interface IArgument {
        ordre: number;
        description: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Configuration {
    interface IGarantie {
        generatedId: string;
        libelle: string;
        description: string;
        idClausesSuspensives: string[];
        type: Enum.TypeGarantie;
        typeCouverture: Enum.TypeCouverture;
        controle: IControleAffichage;
        optionsPersonnalisation: IPersonnalisationOption;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Configuration {
    interface IPersonnalisationOption {
        type: Object;
        libellesOptions: IOption[];
        montants: number[];
        selectedMontant: number;
        devise: string;
    }
    interface IOption {
        label: string;
        value: string;
        isChecked: boolean;
        isDefault: boolean;
    }
    interface IMontantSettings {
        montantConseille: number;
        montantMax: number;
        montantMin: number;
        montantSaisi: number;
        montantPas: number;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.ConventionAssurance {
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

declare namespace AssuranceAdeCredit.Modeles.Rest.CreditInterne {
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

declare namespace AssuranceAdeCredit.Modeles.Rest.CreerPropAssurance {
    interface IEntreePropositionAssurance {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Idws_IdntPers
         */
        idPersonne: string;
        /**
         * IdwsCreditsInterne
         */
        idwsCreditsInterne: Array<string>;
        /**
         * RecuperationArgumentaire
         */
        recuperationArgumentaire: boolean;
    }
    interface IElementComplet {
        /**
         * Idws
         */
        idws: string;
    }
    interface IControleIhm {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IMontantComplet extends IElementComplet {
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantMaximal
         */
        montantMaximal: number;
        /**
         * MontantMinimal
         */
        montantMinimal: number;
        /**
         * MontantSaisi
         */
        montantSaisi: number;
        /**
         * Pas
         */
        pas: number;
    }
    interface ITauxComplet extends IElementComplet {
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxMaximal
         */
        tauxMaximal: number;
        /**
         * TauxMinimal
         */
        tauxMinimal: number;
        /**
         * TauxSaisi
         */
        tauxSaisi: number;
    }
    interface ICouvertureCreditComplet {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mtfgfr_MontantFraisGarantie
         */
        montantFraisGarantie: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: IMontantComplet;
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: ITauxComplet;
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
    }
    interface IAccessoireComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpim_CodeBeneficiaire
         */
        codeBeneficiaire: string;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Ctfcas_CodeTypeAssiette
         */
        codeTypeAssiette: number;
        /**
         * EstFinance
         */
        estFinance: boolean;
        /**
         * Lbfpne_LibelleBeneficiaire
         */
        libelleBeneficiaire: string;
        /**
         * LibelleTypeAssiette
         */
        libelleTypeAssiette: string;
        /**
         * ListMontantSouhaite
         */
        listeMontantSouhaite: Array<number>;
        /**
         * ListTauxSouhaite
         */
        listeTauxSouhaite: Array<number>;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * Montant
         */
        montant: number;
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantSouhaite
         */
        montantSouhaite: number;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxSouhaite
         */
        tauxSouhaite: number;
        /**
         * Payabilite
         */
        payabilite: string;
        /**
         * Periodicite
         */
        periodicite: number;
        /**
         * NbPeriodes
         */
        nombrePeriodes: number;
        /**
         * Cnfcga_ModeDexp
         */
        modeDexp: number;
        /**
         * Cefaas_CodeEtatAccs
         */
        codeEtatAccessoire: number;
        /**
         * Dtfaaa_DateAccpAccs
         * Type date au format yyyy-MM-dd
         */
        dateAccpAccessoire: string;
        /**
         * Dffacl_DateCltr
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * SaisieMontantEtTaux
         */
        saisieMontantEtTaux: boolean;
        /**
         * ListCouverturesCredits
         */
        listeCouverturesCredits: Array<ICouvertureCreditComplet>;
        /**
         * Ctfcac_CodeTypeAccs
         */
        codeTypeAccessoire: string;
    }
    interface IAvisOrganismeExterneComplet extends IElementComplet {
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd
         */
        dateAvis: string;
    }
    interface IControle {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IPersonnalisationOptionAdeComplet {
        /**
         * TypePersonnalisation
         */
        typePersonnalisation: number;
        /**
         * EstPreconise
         */
        estPreconise: boolean;
        /**
         * EstChoisi
         */
        estChoisi: boolean;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Montant
         */
        montant: number;
        /**
         * Unite
         */
        unite: string;
    }
    interface IPersonnalisationAdeComplet {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAdeComplet>;
    }
    interface IGarantieAdeComplet {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Description
         */
        description: string;
        /**
         * IdwsCreditsExclus
         */
        idwsCreditsExclus: Array<string>;
        /**
         * Type
         */
        type: number;
        /**
         * Controle
         */
        controle: IControle;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAdeComplet>;
    }
    interface ICompteComplet extends IElementComplet {
        /**
         * CompteJoint
         */
        compteJoint: boolean;
        /**
         * Dtfmou_DateOuvr
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Cdfppr_TypeCpte
         */
        typeCompte: string;
        /**
         * Nufpcp_NumeCpte
         */
        numeroCompte: string;
    }
    interface ICompteDepotComplet extends ICompteComplet {
        /**
         * Cdfmce_CodeProduitCE
         */
        codeProduitCE: number;
    }
    interface IPersonneComplet extends IElementComplet {
        /**
         * Ctfipe_CodeTypeBasePers
         */
        codeTypeBasePersonne: number;
        /**
         * ListComptesDepots
         */
        listeComptesDepots: Array<ICompteDepotComplet>;
        /**
         * ListComptesPrelVersModalite
         */
        listeComptesPrelVersementModalite: Array<ICompteComplet>;
        /**
         * Cdfptp_CodeTypePers
         */
        codeTypePersonne: number;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
    }
    interface IAssuranceComplet extends IAccessoireComplet {
        /**
         * Lcfcaa_LibelleCourtTypeAssr
         */
        libelleCourtTypeAssurance: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * Llfcco_LiblLongConv
         */
        libelleLongConvention: string;
        /**
         * LibCompAssr
         */
        libelleCompAssurance: string;
        /**
         * CodeDecision
         */
        codeDecision: number;
        /**
         * DernierAvisOrganismeExt
         */
        dernierAvisOrganismeExterieur: IAvisOrganismeExterneComplet;
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAdeComplet>;
        /**
         * Personne
         */
        personne: IPersonneComplet;
        /**
         * EstAssuranceCNP
         */
        estAssuranceCNP: boolean;
        /**
         * IdntConv
         */
        idConvention: string;
    }
    interface IArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * LibelleCourt
         */
        libelleCourt: string;
        /**
         * Description
         */
        description: string;
    }
    interface IGroupeArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * Titre
         */
        titre: string;
        /**
         * TypeArgument
         */
        typeArgument: number;
        /**
         * Arguments
         */
        arguments: Array<IArgumentContratComplet>;
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
        /**
         * ClasseAnomalie
         */
        classeAnomalie: number;
    }
    interface ISortiePropositionAssurance {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Assurances
         */
        assurances: Array<IAssuranceComplet>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAdeComplet>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContratComplet>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
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

declare namespace AssuranceAdeCredit.Modeles.Rest.LirePropAssurance {
    interface IEntreePropositionAssurance {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Idws_IdntPers
         */
        idPersonne: string;
        /**
         * IdwsCreditsInterne
         */
        idwsCreditsInterne: Array<string>;
        /**
         * RecuperationArgumentaire
         */
        recuperationArgumentaire: boolean;
    }
    interface IElementComplet {
        /**
         * Idws
         */
        idws: string;
    }
    interface IControleIhm {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IMontantComplet extends IElementComplet {
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantMaximal
         */
        montantMaximal: number;
        /**
         * MontantMinimal
         */
        montantMinimal: number;
        /**
         * MontantSaisi
         */
        montantSaisi: number;
        /**
         * Pas
         */
        pas: number;
    }
    interface ITauxComplet extends IElementComplet {
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxMaximal
         */
        tauxMaximal: number;
        /**
         * TauxMinimal
         */
        tauxMinimal: number;
        /**
         * TauxSaisi
         */
        tauxSaisi: number;
    }
    interface ICouvertureCreditComplet {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mtfgfr_MontantFraisGarantie
         */
        montantFraisGarantie: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: IMontantComplet;
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: ITauxComplet;
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
    }
    interface IAccessoireComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpim_CodeBeneficiaire
         */
        codeBeneficiaire: string;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Ctfcas_CodeTypeAssiette
         */
        codeTypeAssiette: number;
        /**
         * EstFinance
         */
        estFinance: boolean;
        /**
         * Lbfpne_LibelleBeneficiaire
         */
        libelleBeneficiaire: string;
        /**
         * LibelleTypeAssiette
         */
        libelleTypeAssiette: string;
        /**
         * ListMontantSouhaite
         */
        listeMontantSouhaite: Array<number>;
        /**
         * ListTauxSouhaite
         */
        listeTauxSouhaite: Array<number>;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * Montant
         */
        montant: number;
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantSouhaite
         */
        montantSouhaite: number;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxSouhaite
         */
        tauxSouhaite: number;
        /**
         * Payabilite
         */
        payabilite: string;
        /**
         * Periodicite
         */
        periodicite: number;
        /**
         * NbPeriodes
         */
        nombrePeriodes: number;
        /**
         * Cnfcga_ModeDexp
         */
        modeDexp: number;
        /**
         * Cefaas_CodeEtatAccs
         */
        codeEtatAccessoire: number;
        /**
         * Dtfaaa_DateAccpAccs
         * Type date au format yyyy-MM-dd
         */
        dateAccpAccessoire: string;
        /**
         * Dffacl_DateCltr
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * SaisieMontantEtTaux
         */
        saisieMontantEtTaux: boolean;
        /**
         * ListCouverturesCredits
         */
        listeCouverturesCredits: Array<ICouvertureCreditComplet>;
        /**
         * Ctfcac_CodeTypeAccs
         */
        codeTypeAccessoire: string;
    }
    interface IAvisOrganismeExterneComplet extends IElementComplet {
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd
         */
        dateAvis: string;
    }
    interface IControle {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IPersonnalisationOptionAdeComplet {
        /**
         * TypePersonnalisation
         */
        typePersonnalisation: number;
        /**
         * EstPreconise
         */
        estPreconise: boolean;
        /**
         * EstChoisi
         */
        estChoisi: boolean;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Montant
         */
        montant: number;
        /**
         * Unite
         */
        unite: string;
    }
    interface IPersonnalisationAdeComplet {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAdeComplet>;
    }
    interface IGarantieAdeComplet {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Description
         */
        description: string;
        /**
         * IdwsCreditsExclus
         */
        idwsCreditsExclus: Array<string>;
        /**
         * Type
         */
        type: number;
        /**
         * Controle
         */
        controle: IControle;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAdeComplet>;
    }
    interface ICompteComplet extends IElementComplet {
        /**
         * CompteJoint
         */
        compteJoint: boolean;
        /**
         * Dtfmou_DateOuvr
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Cdfppr_TypeCpte
         */
        typeCompte: string;
        /**
         * Nufpcp_NumeCpte
         */
        numeroCompte: string;
    }
    interface ICompteDepotComplet extends ICompteComplet {
        /**
         * Cdfmce_CodeProduitCE
         */
        codeProduitCE: number;
    }
    interface IPersonneComplet extends IElementComplet {
        /**
         * Ctfipe_CodeTypeBasePers
         */
        codeTypeBasePersonne: number;
        /**
         * ListComptesDepots
         */
        listeComptesDepots: Array<ICompteDepotComplet>;
        /**
         * ListComptesPrelVersModalite
         */
        listeComptesPrelVersementModalite: Array<ICompteComplet>;
        /**
         * Cdfptp_CodeTypePers
         */
        codeTypePersonne: number;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
    }
    interface IAssuranceComplet extends IAccessoireComplet {
        /**
         * Lcfcaa_LibelleCourtTypeAssr
         */
        libelleCourtTypeAssurance: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * Llfcco_LiblLongConv
         */
        libelleLongConvention: string;
        /**
         * LibCompAssr
         */
        libelleCompAssurance: string;
        /**
         * CodeDecision
         */
        codeDecision: number;
        /**
         * DernierAvisOrganismeExt
         */
        dernierAvisOrganismeExterieur: IAvisOrganismeExterneComplet;
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAdeComplet>;
        /**
         * Personne
         */
        personne: IPersonneComplet;
        /**
         * EstAssuranceCNP
         */
        estAssuranceCNP: boolean;
        /**
         * IdntConv
         */
        idConvention: string;
    }
    interface IArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * LibelleCourt
         */
        libelleCourt: string;
        /**
         * Description
         */
        description: string;
    }
    interface IGroupeArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * Titre
         */
        titre: string;
        /**
         * TypeArgument
         */
        typeArgument: number;
        /**
         * Arguments
         */
        arguments: Array<IArgumentContratComplet>;
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
        /**
         * ClasseAnomalie
         */
        classeAnomalie: number;
    }
    interface ISortiePropositionAssurance {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Assurances
         */
        assurances: Array<IAssuranceComplet>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAdeComplet>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContratComplet>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.MajPropAssurance {
    interface IEntreePropositionAssurance {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Idws_IdntPers
         */
        idPersonne: string;
        /**
         * IdwsCreditsInterne
         */
        idwsCreditsInterne: Array<string>;
        /**
         * RecuperationArgumentaire
         */
        recuperationArgumentaire: boolean;
    }
    interface IElementComplet {
        /**
         * Idws
         */
        idws: string;
    }
    interface IControleIhm {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IMontantComplet extends IElementComplet {
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantMaximal
         */
        montantMaximal: number;
        /**
         * MontantMinimal
         */
        montantMinimal: number;
        /**
         * MontantSaisi
         */
        montantSaisi: number;
        /**
         * Pas
         */
        pas: number;
    }
    interface ITauxComplet extends IElementComplet {
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxMaximal
         */
        tauxMaximal: number;
        /**
         * TauxMinimal
         */
        tauxMinimal: number;
        /**
         * TauxSaisi
         */
        tauxSaisi: number;
    }
    interface ICouvertureCreditComplet {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mtfgfr_MontantFraisGarantie
         */
        montantFraisGarantie: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: IMontantComplet;
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: ITauxComplet;
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
    }
    interface IAccessoireComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpim_CodeBeneficiaire
         */
        codeBeneficiaire: string;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Ctfcas_CodeTypeAssiette
         */
        codeTypeAssiette: number;
        /**
         * EstFinance
         */
        estFinance: boolean;
        /**
         * Lbfpne_LibelleBeneficiaire
         */
        libelleBeneficiaire: string;
        /**
         * LibelleTypeAssiette
         */
        libelleTypeAssiette: string;
        /**
         * ListMontantSouhaite
         */
        listeMontantSouhaite: Array<number>;
        /**
         * ListTauxSouhaite
         */
        listeTauxSouhaite: Array<number>;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * Montant
         */
        montant: number;
        /**
         * MontantConseille
         */
        montantConseille: number;
        /**
         * MontantSouhaite
         */
        montantSouhaite: number;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxConseille
         */
        tauxConseille: number;
        /**
         * TauxSouhaite
         */
        tauxSouhaite: number;
        /**
         * Payabilite
         */
        payabilite: string;
        /**
         * Periodicite
         */
        periodicite: number;
        /**
         * NbPeriodes
         */
        nombrePeriodes: number;
        /**
         * Cnfcga_ModeDexp
         */
        modeDexp: number;
        /**
         * Cefaas_CodeEtatAccs
         */
        codeEtatAccessoire: number;
        /**
         * Dtfaaa_DateAccpAccs
         * Type date au format yyyy-MM-dd
         */
        dateAccpAccessoire: string;
        /**
         * Dffacl_DateCltr
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * SaisieMontantEtTaux
         */
        saisieMontantEtTaux: boolean;
        /**
         * ListCouverturesCredits
         */
        listeCouverturesCredits: Array<ICouvertureCreditComplet>;
        /**
         * Ctfcac_CodeTypeAccs
         */
        codeTypeAccessoire: string;
    }
    interface IAvisOrganismeExterneComplet extends IElementComplet {
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd
         */
        dateAvis: string;
    }
    interface IControle {
        /**
         * EstActif
         */
        estActif: boolean;
        /**
         * EstSelectionne
         */
        estSelectionne: boolean;
        /**
         * EstVisible
         */
        estVisible: boolean;
        /**
         * InfoBulle
         */
        informationBulle: string;
        /**
         * Nom
         */
        nom: string;
    }
    interface IPersonnalisationOptionAdeComplet {
        /**
         * TypePersonnalisation
         */
        typePersonnalisation: number;
        /**
         * EstPreconise
         */
        estPreconise: boolean;
        /**
         * EstChoisi
         */
        estChoisi: boolean;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Montant
         */
        montant: number;
        /**
         * Unite
         */
        unite: string;
    }
    interface IPersonnalisationAdeComplet {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAdeComplet>;
    }
    interface IGarantieAdeComplet {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Description
         */
        description: string;
        /**
         * IdwsCreditsExclus
         */
        idwsCreditsExclus: Array<string>;
        /**
         * Type
         */
        type: number;
        /**
         * Controle
         */
        controle: IControle;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAdeComplet>;
    }
    interface ICompteComplet extends IElementComplet {
        /**
         * CompteJoint
         */
        compteJoint: boolean;
        /**
         * Dtfmou_DateOuvr
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Cdfppr_TypeCpte
         */
        typeCompte: string;
        /**
         * Nufpcp_NumeCpte
         */
        numeroCompte: string;
    }
    interface ICompteDepotComplet extends ICompteComplet {
        /**
         * Cdfmce_CodeProduitCE
         */
        codeProduitCE: number;
    }
    interface IPersonneComplet extends IElementComplet {
        /**
         * Ctfipe_CodeTypeBasePers
         */
        codeTypeBasePersonne: number;
        /**
         * ListComptesDepots
         */
        listeComptesDepots: Array<ICompteDepotComplet>;
        /**
         * ListComptesPrelVersModalite
         */
        listeComptesPrelVersementModalite: Array<ICompteComplet>;
        /**
         * Cdfptp_CodeTypePers
         */
        codeTypePersonne: number;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
    }
    interface IAssuranceComplet extends IAccessoireComplet {
        /**
         * Lcfcaa_LibelleCourtTypeAssr
         */
        libelleCourtTypeAssurance: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * Llfcco_LiblLongConv
         */
        libelleLongConvention: string;
        /**
         * LibCompAssr
         */
        libelleCompAssurance: string;
        /**
         * CodeDecision
         */
        codeDecision: number;
        /**
         * DernierAvisOrganismeExt
         */
        dernierAvisOrganismeExterieur: IAvisOrganismeExterneComplet;
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAdeComplet>;
        /**
         * Personne
         */
        personne: IPersonneComplet;
        /**
         * EstAssuranceCNP
         */
        estAssuranceCNP: boolean;
        /**
         * IdntConv
         */
        idConvention: string;
    }
    interface IArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * LibelleCourt
         */
        libelleCourt: string;
        /**
         * Description
         */
        description: string;
    }
    interface IGroupeArgumentContratComplet extends IElementComplet {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * Titre
         */
        titre: string;
        /**
         * TypeArgument
         */
        typeArgument: number;
        /**
         * Arguments
         */
        arguments: Array<IArgumentContratComplet>;
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
        /**
         * ClasseAnomalie
         */
        classeAnomalie: number;
    }
    interface ISortiePropositionAssurance {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Assurances
         */
        assurances: Array<IAssuranceComplet>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAdeComplet>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContratComplet>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
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

declare namespace AssuranceAdeCredit.Modeles.Rest.SupprimerElements {
    interface ISupprimerElementsRequest {
        identifiantDossier: string;
        listeIdentifiantsElement: Array<string>;
    }
}

declare namespace AssuranceAdeCredit.Services.FormSettings {
    interface IAdeFormSettings {
        inputBasique: Forms.IInputSettings;
        inputReadonly: Forms.IInputSettings;
        inputRequired: Forms.IInputSettings;
    }
    interface IAdeFormSettingsService {
        getSettings(isConsultation: boolean): IAdeFormSettings;
    }
    class AdeFormSettingsService implements IAdeFormSettingsService {
        getSettings(isConsultation: boolean): IAdeFormSettings;
        protected getSimpleButton(consultation: boolean): Forms.ISettings;
        protected getSimpleField(consultation: boolean): Forms.IInputSettings;
        protected getRequiredField(consultation: boolean): Forms.IInputSettings;
        protected getReadonlyField(): Forms.IInputSettings;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class CustomRule implements IValidationRule {
        private delegate;
        private ruleLabel;
        /**
         * Create custom rule
         * @param delegate delegated validation function
         * @param ruleLabel label to show
         */
        constructor(delegate: () => boolean, ruleLabel: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MaxDateRule implements IValidationRule {
        private max;
        private dateToValidate;
        private ruleLabel;
        private maxFormat;
        private dateToValidateFormat;
        static maxnumberRuleLabel: string;
        /**
         *
         * @param max au Format "YYYY-DD-MM"
         * @param dateToValidate
         * @param ruleLabel
         */
        constructor(max: string | Date, dateToValidate: () => string | Date, ruleLabel?: string, maxFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MaxLengthRule implements IValidationRule {
        private value;
        private maxLength;
        static maxLengthRuleLabel: string;
        constructor(value: () => string, maxLength: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MaxNumberRule implements IValidationRule {
        private max;
        private numberToValidate;
        private ruleLabel;
        static maxnumberRuleLabel: string;
        constructor(max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MinDateRule implements IValidationRule {
        private min;
        private dateToValidate;
        private ruleLabel;
        private minFormat;
        private dateToValidateFormat;
        static minnumberRuleLabel: string;
        constructor(min: string | Date, dateToValidate: () => string | Date, ruleLabel?: string, minFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MinMaxDateRule implements IValidationRule {
        private min;
        private max;
        private dateToValidate;
        private ruleLabel;
        private minFormat;
        private maxFormat;
        private dateToValidateFormat;
        static defaultRuleLabel: string;
        constructor(min: string | Date, max: string | Date, dateToValidate: () => string | Date, ruleLabel?: string, minFormat?: string, maxFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MinMaxNumberRule implements IValidationRule {
        private min;
        private max;
        private numberToValidate;
        private ruleLabel;
        constructor(min: number, max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class MinNumberRule implements IValidationRule {
        private min;
        private numberToValidate;
        static minNumberRuleLabel: string;
        constructor(min: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class ModuloNumberFloatRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
    class ModuloNumberRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class PreciseLengthRule implements IValidationRule {
        private value;
        private length;
        static preciseLengthRuleLabel: string;
        constructor(value: () => string, length: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class RequiredRule<T> implements IValidationRule {
        private value;
        static requiredRuleLabel: string;
        constructor(value: () => T);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    interface IValidationRuleResult {
        isValid: boolean;
        messages: string[];
    }
    interface IValidationRule {
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Rules {
    class ValidationRulesEvaluator implements IValidationRule {
        private rules;
        constructor(rules: IValidationRule[]);
        validate(): IValidationRuleResult;
    }
}

declare namespace AssuranceAdeCredit.Services.InputRules {
    interface IInputRules {
        allRules: Rules.IValidationRule[];
    }
    interface IAdeRules extends IInputRules {
        quotite: Rules.IValidationRule[];
    }
    class AdeRulesService {
        private notificationService;
        static $inject: string[];
        constructor(notificationService: MyWay.UI.IMwNotificationService);
        getRules(viewModel: Modeles.IViewModel): IAdeRules;
        validate(rules: IInputRules): boolean;
    }
}

declare namespace AssuranceAdeCredit.Forms {
    interface ISettings {
        hidden?: () => boolean;
        readonly?: () => boolean;
    }
    interface IInputSettings extends ISettings {
        consultation: () => boolean;
        disabled?: () => boolean;
        required?: () => boolean;
    }
}

declare namespace AssuranceAdeCredit.Forms {
    let inputDirectiveScope: IInputDirectiveScope;
    abstract class InputControleur {
        private $timeout;
        blur: <T>() => T;
        change: <T>() => T;
        consulting: boolean;
        fieldClass: string;
        form: ng.IFormController;
        inputSettings: IInputSettings;
        label: string;
        labelClass: string;
        protected model: any;
        name: string;
        placeholder: string;
        readonly: boolean;
        required: boolean;
        rules: Rules.IValidationRule[];
        suffix: string;
        suffixClass: string;
        _onEnter: <T>() => T;
        errorLabel: string;
        fieldClassExtended: string;
        /** return true if consulting mode is set and model is null or undefined */
        hideField: boolean;
        private inputSettingsHidden(inputSettings);
        isDisabled: boolean;
        /** return true if consulting mode is set or readonly is set */
        isReadOnly: boolean;
        isRequired: boolean;
        protected isSettingsConsultation: boolean;
        protected isSettingsReadonly: boolean;
        protected isSettingsRequired: boolean;
        labelClassExtended: string;
        /** role used for accessibility aria attribute */
        role: string;
        constructor($timeout: ng.ITimeoutService);
        isValid(): boolean;
        onKeyDown($event: KeyboardEvent): void;
        onChange(): void;
        onBlur(): void;
    }
}

declare namespace AssuranceAdeCredit.Forms {
    interface IInputDirectiveScope {
        blur: string;
        change: string;
        consulting: string;
        fieldClass: string;
        form: string;
        inputSettings: string;
        label: string;
        labelClass: string;
        model: any;
        name: string;
        placeholder: string;
        readonly: string;
        required: string;
        rules: string;
        suffix: string;
        suffixClass: string;
        _onEnter: string;
    }
}

declare namespace AssuranceAdeCredit.Forms {
    class InputNumberControleur extends InputControleur {
        static parametres: Modeles.IControleurParametre;
        static $inject: string[];
        decimals: number;
        devise: string;
        model: number;
        customErrorLabel: string;
        maxLength: string;
        addonSuffix: string;
        tooltipPlacement: string;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        getMaxLength(): string;
    }
}

declare namespace AssuranceAdeCredit.Forms {
}

declare namespace AssuranceAdeCredit.Forms {
    class InputListBoxControleur<T extends string | number> extends InputControleur {
        static parametres: Modeles.IControleurParametre;
        static $inject: string[];
        isLoading: boolean;
        items: Modeles.ICodeLabel<T>[];
        model: Modeles.ICodeLabel<T>;
        onOpen: <U>(...args: any[]) => ng.IPromise<U>;
        noFormGroup: boolean;
        constructor($timeout: ng.ITimeoutService);
        listBoxPlaceholder: string;
    }
}

declare namespace AssuranceAdeCredit.Forms {
}

declare namespace AssuranceAdeCredit.Forms {
    class InputCheckBoxControleur extends InputControleur {
        static parametres: Modeles.IControleurParametre;
        static $inject: string[];
        model: number;
        constructor($timeout: ng.ITimeoutService);
    }
}

declare namespace AssuranceAdeCredit.Forms {
}

declare namespace AssuranceAdeCredit.Forms {
    class InputStringControleur extends InputControleur {
        static parametres: Modeles.IControleurParametre;
        static $inject: string[];
        model: string;
        mask: string;
        maxLength: number;
        noFormGroup: boolean;
        displayNumberCharacters: boolean;
        private showMore;
        constructor($timeout: ng.ITimeoutService);
        moreClass: string;
        /**
         * Renvoie le nombre de caratères sous la forme "{Longueur saisie}/{Longueur maximum} caratères"
         */
        numberOfCharacters: string;
        showNumberCharacters: boolean;
    }
}

declare namespace AssuranceAdeCredit.Forms {
}
