
declare namespace AssuranceAdeCredit {
    var app: any;
}

declare namespace AssuranceAdeCredit.Ascii {
    namespace Caractere {
        const space: number;
        const interrogation: number;
    }
    /**
     * Code ascii des caractères numériques
     */
    namespace Nombre {
        const zero: number;
        const un: number;
        const deux: number;
        const trois: number;
        const quatre: number;
        const cinq: number;
        const six: number;
        const sept: number;
        const huit: number;
        const neuf: number;
    }
    /**
     * Code ascii des lettres
     */
    namespace Lettre {
        const A: number;
        const B: number;
        const C: number;
        const D: number;
        const E: number;
        const F: number;
        const G: number;
        const H: number;
        const I: number;
        const J: number;
        const K: number;
        const L: number;
        const M: number;
        const N: number;
        const O: number;
        const P: number;
        const Q: number;
        const R: number;
        const S: number;
        const T: number;
        const U: number;
        const V: number;
        const W: number;
        const X: number;
        const Y: number;
        const Z: number;
        const a: number;
        const b: number;
        const c: number;
        const d: number;
        const e: number;
        const f: number;
        const g: number;
        const h: number;
        const i: number;
        const j: number;
        const k: number;
        const l: number;
        const m: number;
        const n: number;
        const o: number;
        const p: number;
        const q: number;
        const r: number;
        const s: number;
        const t: number;
        const u: number;
        const v: number;
        const w: number;
        const x: number;
        const y: number;
        const z: number;
    }
}

declare namespace AssuranceAdeCredit.Constantes {
    /**
     * Namespace de constantes contenant les identifiants des classes pour les appels ListerConstantes, MajElement et MajElements
     */
    namespace ClasseNeo {
        /** Identifiant de classe pour la mise à jour des données d'une assurance */
        const assuranceMaj: string;
        /** Identifiant de classe pour la mise à jour des données de la couverture d'une assurance */
        const couvertureCreditMaj: string;
    }
}

declare namespace AssuranceAdeCredit.Constantes.SchemaComplet {
    enum CodeIdNeo {
        ParametreFonctionnel,
    }
}

declare namespace AssuranceAdeCredit.Constantes {
    /** Constantes relatives aux Collectivités */
    namespace Collectivite {
        const codeCollectiviteHorsOutreMer: string;
    }
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
        const assuranceService: string;
        const assureService: string;
        const collectivitesService: string;
        const elementService: string;
        const modalesService: string;
        const restService: string;
        const parametreFonctionnelService: string;
        const propositionAssuranceService: string;
        const schemaCompletService: string;
        const sessionService: string;
        const adeRulesService: string;
        const adeFormSettingsService: string;
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
    enum IndicateurComposant {
        Obligatoire = 1,
        Facultatif = 2,
    }
    enum IndicateurComposantPreconise {
        Option = 2,
        Preconise = 3,
    }
}

declare namespace AssuranceAdeCredit.Constantes {
    namespace Options {
        /** Constantes relatives aux assurances. Utilisé pour indiquer si l'assurance est facultative ou obligatoire */
        const assuranceObligatoire: Modeles.ICodeLabel<boolean>[];
        const listeTypeGarantieManuelle: Modeles.ICodeLabel<number>[];
        const listeOptionPreconiseeManuelle: Modeles.ICodeLabel<number>[];
    }
}

declare namespace AssuranceAdeCredit.Constantes.ParametreFonctionnel {
    namespace Idws {
        const residentFiscal: string;
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
        const urlDossierInstructionService: string;
        const urlCreditParametre: string;
    }
    namespace Url {
        const urlLireElements: string;
        const urlMajElements: string;
        const urlSupprimerElements: string;
        const urlChargerConventionAssurance: string;
        const urlListerCollectivitesCnp: string;
        const urlCreerPropAssurance: string;
        const urlLirePropAssurance: string;
        const urlMajPropAssurance: string;
        const urlEnregistrerPersAssur: string;
        const urlLireSchemasComplet: string;
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum CategoriePersonnalisation {
        NonDetermine = 0,
        Couverture = 1,
        Franchise = 2,
        Indemnisation = 3,
        NiveauInvalidite = 4,
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

declare namespace AssuranceAdeCredit.Enum {
    enum ModeOuverture {
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
    enum TypeAno {
        AnomalieNonBloquante = 0,
        AnomalieBloquante = 1,
        AnomalieManuelle = 2,
        Alerte = 3,
        Technique = 4,
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
        SocleEdit = 2,
        Option = 3,
    }
}

declare namespace AssuranceAdeCredit.Enum {
    enum TypePersonnalisation {
        NonDetermine = 0,
        Franchise30J = 1,
        Franchise90J = 2,
        CouvertureForfaitaire = 3,
        CouvertureIndemnitaire = 4,
        InvaliditeIPP33 = 5,
        InvaliditeIPT66 = 6,
        ApeIndemnisation = 7,
    }
}

declare namespace AssuranceAdeCredit.Filters {
}

declare namespace AssuranceAdeCredit.ModelTransformers {
    /** ModelTransformer des modèles de conventions d'assurances */
    class ConventionAssuranceTransformer {
        /** Parse une convention d'assurance REST au format ADE */
        static parseConventionAssurance(convention: Modeles.Rest.ConventionAssurance.IConventionAssurance): Modeles.IConventionAssurance;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /** Utilitaires pour les listes */
    abstract class List {
        /**
         * Looks through each value in the list, returning the first one that passes a truth test (predicate),
         * or an empty object if no value passes the test.
         * The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
         */
        static findOrEmpty<T>(list: T[], predicate: _.ListIterator<T, boolean>): T;
        /** Returns the first element of an array or an empty Object if the list is null or empty */
        static firstOrEmpty<T>(list: T[]): T;
        /** Check if a list is not null and contains elements */
        static isNullOrEmpty<T>(list: T[]): boolean;
    }
}

declare namespace AssuranceAdeCredit.ModelTransformers {
    import CreerPropAssurance = Modeles.Rest.CreerPropAssurance;
    /** ModelTransformer des modèles de propositions d'assurances */
    class PropositionAssuranceTransformer {
        /** Parse une proposition ADE en entrée de service de mise à jour des propositions */
        static parseEntreeEnregistrement(idDossier: string, proposition: Modeles.Proposition.IPropositionsAssurance, estSaisieManuelle: boolean): Modeles.Rest.EnregistrerPersAssur.IEntreePersonnalisationAssurance[];
        /** Mise à jour de la proposition suite à un appel au service enregistrerPropAssurance */
        static updatePropositionEnregistrement(proposition: Modeles.Proposition.IPropositionsAssurance, retourEnreg: Modeles.Proposition.IPropositionsAssurance[]): Modeles.Proposition.IPropositionsAssurance;
        private static parseGarantiesChoisies(prop, estSaisieManuelle);
        private static parsePersonnalisationApeForSaisieManuelle(garantie);
        private static parsePersonnalisationApe(garantie);
        private static parsePersonnalisationAde(garantie, isSaisieManuelle);
        /** Parse les données retournées suite à la création d'une proposition */
        static parseRetourCreation(dataRetour: CreerPropAssurance.ISortiePropositionAssurances[], estCreationSaisieManuelle: boolean, initialQuotite: number): Modeles.Proposition.IPropositionsAssurance;
        private static mapAnomalies(sortiePropAssurance);
        static mapAnomalie(anomalie: CreerPropAssurance.IAnomalieLecture): Modeles.Proposition.IPropositionAnomalie;
        private static parseConfigurationsGeneriques(dataRetour, estCreationSaisieManuelle);
        /**
         * Map un ICredit en fonction des données renvoyées du socle
         * Ajoute également le formRules
         * @param creditCouverture ICouvertureCreditAde
         * @param prop IPropositionAssurance
         */
        private static mapCreditWithForm(creditCouverture, prop, estRelaiInFine, tauxRelaiInFine);
        private static parseConfigurationsInitialesPersonne(dataRetour, estCreationSaisieManuelle);
        private static parseGarantiesSocles(garanties, estCreationSaisieManuelle);
        private static parseGarantiesOptions(garanties);
        private static findPersonnalisationOptionSaisieManuelle(personnalisation, options);
        private static isPersonnalisationOptionForSaisieManuelle(catPersonnalisation, typePersonnalisation);
        private static parseGarantieApe(garanties, montantMensuel);
        private static parseArguments(prop, perso);
        private static parseArgument(arg);
    }
}

declare namespace AssuranceAdeCredit.Modeles {
    interface IViewModel {
        avantagePanels: IViewModelAvantagePanels;
        boutonPoursuivreVisible: boolean;
        boutonValiderVisible: boolean;
        cheminDeFer: Modeles.ICheminDeFer;
        codeDevise: string;
        detailConventionVisible: boolean;
        indexPersonneSelectionnee: number;
        listeCreditsVisible: boolean;
        listeMontantsPerteEmploi: number[];
        modeExpertActif: boolean;
        quotiteCouverture: number;
        quotiteCouvertureVisible: boolean;
        listeCollectivitesVisible: boolean;
        selectedCollectivite: Modeles.ICodeLabel<string>;
        editedCollectivite: string;
        tabset: IViewModelTabset;
        tarificationDerogatoire: boolean;
        saisieManuelleConvention: boolean;
        saisieManuelleActive: boolean;
        estResidentFiscal: boolean;
        residentFiscalVisible: boolean;
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
    interface IAssuranceForm {
        idws: string;
        obligatoire: boolean;
        estApe: boolean;
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
    interface IInputRules {
        allRules?: Rules.IValidationRule[];
    }
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
        quotite?: number;
        idPlanFinancement?: string;
        assuranceDatas?: IAssuranceParams;
        listeAllIdCreditsDossier?: string[];
        codeCollectivite?: string;
        tarificationDerogatoireActive?: () => ng.IPromise<boolean>;
        tarificationDerogatoire?: boolean;
        saisieManuelleActive?: boolean;
        assuranceObligatoireEditable?: boolean;
    }
    interface IAssuranceParams {
        idws: string;
        obligatoire: boolean;
        estApeSelected: boolean;
        estParcoursManuel?: boolean;
    }
}

declare namespace AssuranceAdeCredit.Modeles.ParametreFonctionnel {
    interface IParametreFonctionnel {
        codeParametre: string;
        idObjetConcerne: string;
        visible: boolean;
        actif: boolean;
    }
}

declare namespace AssuranceAdeCredit.Services {
    /** Interface des services internes de l'application ADE */
    interface IAssuranceAdeService {
        /**
         * Retourne l'intitulé de la personne passée en paramètre
         * @param personne
         */
        getIntitulePersonne(personne: Modeles.Rest.IPersonnePhysique): string;
        updateQuotiteCouvertureCredit(idDossier: string, listCredit: Modeles.Proposition.ICredit[]): ng.IPromise<void>;
        /**
         * Mise à jour des valeurs "isQuotiteDirty" sur les crédits
         * @param propositionAssurance
         */
        resetQuotiteDirtyOnProposition(propositionAssurance: Modeles.Proposition.IPropositionsAssurance): Modeles.Proposition.IPropositionsAssurance;
    }
    /** Services internes de l'application ADE */
    class AssuranceAdeService implements IAssuranceAdeService {
        private elementService;
        static $inject: string[];
        constructor(elementService: Services.IElementService);
        getIntitulePersonne(personne: Modeles.Rest.IPersonnePhysique): string;
        updateQuotiteCouvertureCredit(idDossier: string, listCredit: Modeles.Proposition.ICredit[]): ng.IPromise<void>;
        resetQuotiteDirtyOnProposition(propositionAssurance: Modeles.Proposition.IPropositionsAssurance): Modeles.Proposition.IPropositionsAssurance;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IAssuranceService {
        getAssuranceFormData(assuranceParams: Modeles.IAssuranceParams): Modeles.IAssuranceForm;
        updateAssuranceObligatoire(idDossier: string, assurance: Modeles.IAssuranceForm): ng.IPromise<void>;
    }
    /** Services internes de l'application ADE */
    class AssuranceService implements IAssuranceService {
        private elementService;
        static $inject: string[];
        constructor(elementService: Services.IElementService);
        getAssuranceFormData(assuranceParams: Modeles.IAssuranceParams): Modeles.IAssuranceForm;
        /**
         * Met à jour l'indiquation d'assurance obligatoire (O: Obligatoire, F: Facultative)
         * @param assurance
         */
        updateAssuranceObligatoire(idDossier: string, assurance: Modeles.IAssuranceForm): ng.IPromise<void>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    /** Interface des services de récupération des données de l'assuré */
    interface IAssureService {
        /** Récupère le détail d'une liste de crédits/personnes */
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        /** Récupère le détail d'une convention d'assurance */
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Modeles.IConventionAssurance>;
    }
    /** Services de récupération des données de l'assuré */
    class AssureService implements IAssureService {
        private elementService;
        private restService;
        static $inject: Array<string>;
        constructor(elementService: IElementService, restService: RestService);
        /** Récupère le détail d'une liste de crédits/personnes */
        getDataAssure(idDossier: string, idCredits: string[], idPersonnes: string[]): ng.IPromise<Modeles.IDataAssures>;
        /** Récupère le détail d'une convention d'assurance */
        getConventionAssurance(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Modeles.IConventionAssurance>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    /** Interface des services de récupération des collectivités */
    interface ICollectivitesService {
        /** Récupère la liste des collectivités CNP disponibles */
        listerCollectivitesCnp(idDossier: string, idPersonne: string, idPlanFinancement: string): ng.IPromise<Modeles.ICodeLabel<string>[]>;
    }
    class CollectivitesService implements ICollectivitesService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: RestService);
        /** Récupère la liste des collectivités CNP disponibles */
        listerCollectivitesCnp(idDossier: string, idPersonne: string, idPlanFinancement: string): ng.IPromise<Modeles.ICodeLabel<string>[]>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IMiseAJourElementParams {
        identifiantClasse: string;
    }
    interface IElementService {
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
        supprimerElements(identifiantDossier: string, listeIdws: string[]): ng.IPromise<void>;
        /**
         * Appelle la ressource REST qui met à jour la liste des IElementMaj passés en paramètre
         * @param identifiantDossier
         * @param elements
         */
        majElements(identifiantClasse: string, identifiantDossier: string, elements: Modeles.Rest.MajElements.IElementMaj[]): ng.IPromise<void>;
    }
    class ElementService implements IElementService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: RestService);
        lireElements(identifiantDossier: string, listeIdws: Array<string>): ng.IPromise<Modeles.Rest.IElementLecture[]>;
        supprimerElements(identifiantDossier: string, listeIdws: string[]): ng.IPromise<void>;
        majElements(identifiantClasse: string, identifiantDossier: string, elements: Modeles.Rest.MajElements.IElementMaj[]): ng.IPromise<void>;
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IModalesService {
        /** Affichage d'une modale de confirmation présentant la liste des pays valids pour personnes non résidentes assurables */
        showCountriesWarning(): ng.IPromise<void>;
        /** Affichage d'une modale présentant une erreur bloquante */
        showErreurBloquante(titre: string, message: string): ng.IPromise<void>;
        /** Affichage d'une popin indiquant que tous les crédits du dossier ne sont pas sélectionnés */
        showAlertAllCreditNotSelected(): ng.IPromise<void>;
        /** Affichage d'une popin indiquant les anomalies bloquantes */
        showAnomaliesPropAssurance(anomalies: string): ng.IPromise<void>;
    }
    class ModalesService implements IModalesService {
        private modalService;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.ModalService);
        /** Affichage d'une modale de confirmation présentant la liste des pays valids pour personnes non résidentes assurables */
        showCountriesWarning(): ng.IPromise<void>;
        /** Affichage d'une modale présentant une erreur bloquante */
        showErreurBloquante(titre: string, message: string): ng.IPromise<void>;
        /** Affichage d'une popin indiquant que tous les crédits du dossier ne sont pas sélectionnés */
        showAlertAllCreditNotSelected(): ng.IPromise<void>;
        /** Affichage d'une popin indiquant les anomalies bloquantes */
        showAnomaliesPropAssurance(anomalies: string): ng.IPromise<void>;
    }
}

/** Services pour le paramétrage fonctionnel */
declare namespace AssuranceAdeCredit.Services {
    interface IParametreFonctionnelService {
        /**
         * Permet de récupérer le paramètre fonctionnel indiquant la valeur de résident fiscal
         * @param idDossier
         */
        getResidentFiscalParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Modeles.ParametreFonctionnel.IParametreFonctionnel>;
    }
    class ParametreFonctionnelService implements IParametreFonctionnelService {
        private schemaService;
        static $inject: string[];
        constructor(schemaService: Services.ISchemaCompletService);
        getResidentFiscalParametreFonctionnel(idDossier: string, idPlanFinancement: string): ng.IPromise<Modeles.ParametreFonctionnel.IParametreFonctionnel>;
        private getParametresFonctionnels(idDossier, entrees);
        private mapParametreFonctionnel(codeParametre, idObjetConcerne, visible?, actif?);
    }
}

declare namespace AssuranceAdeCredit.Services {
    interface IPropositionAssuranceService {
        /** Créé et retourne une proposition d'assurance */
        creerPropositionAssurance(idDossier: string, idPersonnes: string[], idCredits: string[], codeCollectivite: string, estParcoursManuel: boolean, estResidentFiscal: boolean, quotite: number, tarifDerogatoire: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /** Récupère les données de la proposition d'assurance (sans mise à jour) */
        lirePropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[], estParcoursManuel: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /**
         * Récupère les données de la proposition (avec actualisation des données)
         * @param idDossier
         * @param idCredits
         * @param nomPropositions
         * @param quotite
         * @param tarificationDerogatoire
         * @param actualQuotite Permet d'indiquer la valeur par défaut de la quotité sur l'interface de sélection quand on est en modification
         * @param estParcoursManuel
         * @param estResidentFiscal
         */
        majPropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[], quotite: number, tarifDerogatoire: boolean, actualQuotite: number, estParcoursManuel: boolean, estResidentFiscal: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /**
         * Mappage des données à envoyer à majPropAssurance suite à la suppression d'assurance
         * @param propositionAssurance
         * @param deletedAssuranceByAssure
         * @param idDossier
         * @param tarificationDerogatoireValue
         * @param estParcoursManuel
         * @param estResidentFiscal
         */
        mapDatasEntreesPropAssurancesAfterDelete(propositionAssurance: Modeles.Proposition.IPropositionsAssurance, deletedAssuranceByAssure: Modeles.Proposition.IDeletedAssuranceByAssure[], idDossier: string, tarificationDerogatoireValue: boolean, estParcoursManuel: boolean, estResidentFiscal: boolean): Modeles.Rest.MajPropAssurance.IEntreePropositionAssurances[];
        /**
         * Récupère les données de la proposition suite à la suppression d'une ou plusieurs assurances (avec actualisation des données)
         * @param entreesPropAss
         * @param defaultQuotite
         */
        majPropositionAssuranceAfterDelete(entreesPropAss: Modeles.Rest.MajPropAssurance.IEntreePropositionAssurances[], defaultQuotite: number): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /** Enregistre la personnalisation d'assurance */
        enregistrerPersonnalisationAssurance(idDossier: string, proposition: Modeles.Proposition.IPropositionsAssurance, estSaisieManuelle: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
    }
    class PropositionAssuranceService implements IPropositionAssuranceService {
        private restService;
        private $q;
        static $inject: Array<string>;
        constructor(restService: RestService, $q: ng.IQService);
        /** Créé et retourne une proposition d'assurance */
        creerPropositionAssurance(idDossier: string, idPersonnes: string[], idCredits: string[], codeCollectivite: string, estParcoursManuel: boolean, estResidentFiscal: boolean, quotite: number, tarifDerogatoire: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /** Récupère les données de la proposition d'assurance (sans mise à jour) */
        lirePropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[], estParcoursManuel: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /**
         * Mappage des données à envoyer à majPropAssurance suite à la suppression d'assurance
         * @param propositionAssurance
         * @param deletedAssuranceByAssure
         * @param idDossier
         * @param tarificationDerogatoireValue
         * @param estParcoursManuel
         * @param estResidentFiscal
         */
        mapDatasEntreesPropAssurancesAfterDelete(propositionAssurance: Modeles.Proposition.IPropositionsAssurance, deletedAssuranceByAssure: Modeles.Proposition.IDeletedAssuranceByAssure[], idDossier: string, tarificationDerogatoireValue: boolean, estParcoursManuel: boolean, estResidentFiscal: boolean): Modeles.Rest.MajPropAssurance.IEntreePropositionAssurances[];
        majPropositionAssuranceAfterDelete(entreesPropAss: Modeles.Rest.MajPropAssurance.IEntreePropositionAssurances[], defaultQuotite: number): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        majPropositionAssurance(idDossier: string, idCredits: string[], nomPropositions: Modeles.INomProposition[], quotite: number, tarificationDerogatoire: boolean, actualQuotite: number, estParcoursManuel: boolean, estResidentFiscal: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        enregistrerPersonnalisationAssurance(idDossier: string, proposition: Modeles.Proposition.IPropositionsAssurance, estSaisieManuelle: boolean): ng.IPromise<Modeles.Proposition.IPropositionsAssurance>;
        /**
         *  Construit les données en entrée des différents services de lecture d'une proposition d'assurance
         *  pour les appels à lirePropAssurance et majPropAssurance
         */
        private getDataEntree(idDossier, nomProposition, idCredits, estParcoursManuel, estResidentFiscal, quotite?, tarificationDerogatoire?);
        /**
         *  Construit les données en entrée des différents services de lecture d'une proposition d'assurance pour l'appel à creerPropAssurance
         */
        private getDataCreerEntree(idDossier, idPersonne, idCredits, idProposition, codeCollectivite, estParcoursManuel, estResidentFiscal, quotite?, tarificationDerogatoire?);
        /** Parse les données en retour des services de création/maj/lecture de proposition d'assurance */
        private traitementSortiePropositionAssurances<T>(dataRetour, estCreationSaisieManuelle?, initialQuotite?);
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
    interface ISchemaCompletService {
        /**
         * Lecture d'éléments de schema à la demande
         * @param identifiantDossier
         * @param descriptionSchema
         */
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: Modeles.Rest.LireSchemasComplet.IEntreeLireSchemaComplet[]): ng.IPromise<Modeles.Rest.LireSchemasComplet.IResultatLireSchemaComplet[]>;
    }
    class SchemaCompletService implements ISchemaCompletService {
        private restService;
        static $inject: Array<string>;
        constructor(restService: RestService);
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: Modeles.Rest.LireSchemasComplet.IEntreeLireSchemaComplet[]): ng.IPromise<Modeles.Rest.LireSchemasComplet.IResultatLireSchemaComplet[]>;
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

declare namespace AssuranceAdeCredit.Services {
    class SynthesePropositionService {
        /** Initialisation des vues Credits et Personne à partir d'une configuration générique */
        static initSynthesesInitiales(proposition: Modeles.Proposition.IPropositionsAssurance): void;
        /** Parse les données de la synthèse personne de l'objet proposition */
        private static parseSynthPersonne(listePersonnes, proposition);
        /** Parse les données de la synthèse crédit de l'objet proposition */
        private static parseSynthCredits(listeCredits, proposition);
        /**
         * Mise à jour des garanties a partir des configurations initiales (pre-synthèse)
         * @param proposition proposition initiale
         * @param updatedConfigGarantieOptions Liste de garanties qui auraient été mise à jour
         */
        static updateFromSyntheseInitiales(proposition: Modeles.Proposition.IPropositionsAssurance, originalConfigPersonnes: Modeles.Proposition.IConfigurationInitialePersonne[]): Modeles.Proposition.IPropositionsAssurance;
        /**
         * Permet de récupérer les options de garanties qui auraient été mise à jour
         * @param idPersonne
         * @param configUpdatedPersonnes
         * @param configInitialPersonnes
         */
        private static getUpdatedGarantiesOptions(idPersonne, configUpdatedPersonnes, configInitialPersonnes);
        /**
         * Mise à jour de la configuration APE et update de la configuration initiale > garantieApe.estSelectionne
         * @param configurationsInitialesPersonne
         * @param configurationGenerique
         */
        private static setGarantieApe(configurationsInitialesPersonne, configurationGenerique);
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /** Utilitaires pour les booleéns */
    class BooleanUtils {
        /** Converts a boolean value to a string value */
        static convertBooleanToString(value: boolean): string;
        /** Fonction pour retourner "oui" ou "non" en minsucule */
        static txtOuiNonMinuscule(valeur: boolean): string;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /** Enumération des types de dates */
    enum TypeDate {
        years = 0,
        months = 1,
        weeks = 2,
        days = 3,
        hours = 4,
        minutes = 5,
        seconds = 6,
    }
    /** Utilitaires pour les dates */
    class DateUtils {
        /** Transforme une date de naissance en age */
        static birthDateToAge(birth: string): number;
        /**
         * Parse a string yyyy-MM-dd to Date
         * Return null if the date is at year 1 '0001-01-01'
         */
        static parse(date: string, format?: string): Date;
        /** Returns true if the date is null or the date is at year 1 like '0001-01-01' */
        static isConsideredNull(date: string, format?: string): boolean;
        /**
         * Format Date using moment.js template
         * @param date
         * @param templateOut templateOut
         * @param templateIn if date is string, specify template
         */
        static format(date: Date | string, templateOut: string, templateIn?: string): string;
        private static minDateToNull(date);
        /** Give the current timestamp */
        static getNowISOString(): string;
        /** Trouve le string associé a une énumération TypeDate */
        static getTypeDate(type: TypeDate): string;
        /** Donne la différence entre 2 dates en fonction du type passé en paramètre */
        static getBetweenDates(date1: string, date2: string, type: TypeDate): number;
        /** Ajoute deux dates au format spécififé */
        static addToDate(dateDebut: string, nb: number, type: TypeDate, formatIn?: string, formatOut?: string): string;
        /** Retourne true si date > comparedDate */
        static isGreaterThan(date: string, comparedDate: string, dateFormat?: string, comparedDateFormat?: string): boolean;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    type IElement = Modeles.Rest.IElementLecture;
    /** Utilitaires pour les classes REST "Element" */
    class Element {
        /** Find an element by idws */
        static findById<T extends IElement>(elements: IElement[], idws: string): T;
        /** Filter elements from a list of idws */
        static filterByIds<T extends IElement>(elements: IElement[], listIdws: string[]): T[];
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /** Math tools */
    class MathTools {
        /**
         * Retourne la somme d'un tableau de décimale
         * @param array Le tableau contenant les nombres
         * @param precision Le nombre de décimales souhaitées (par défaut : 2)
         */
        static sumWithPrecision(array: number[], precision?: number): number;
        /** Retourne la somme d'un tableau de décimales */
        static sum(array: number[]): number;
        /** Retourne la somme d'un tableau typé via son iteratee */
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
        /** Round to a precision from float number */
        static toPrecision(number: number, precision: number): number;
        /** Retourne true si le nombre est décimale */
        static isFloat(number: number): boolean;
        /** Retourne true si le nombre est entier */
        static isInt(number: number): boolean;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    abstract class ObjectUtils {
        /** as this is a singleton returned as empty obj, Object.freez prevents it to be modified   */
        private static obj;
        /** Return an object reference that cannot be set */
        static nullToEmpty<T>(o: T): T;
        /**
         * try to access properties with null parent.
         * if failed, return an empty object.
         * Example a.b.c => if b is null: return empty object. else return c
         * @param o the methods returning the property to access
         */
        static safeAccess<T>(o: () => T): T;
        /** Returns string to display all keys/value  of the object */
        static toString<T>(o: T): string;
    }
}

declare namespace AssuranceAdeCredit.Tools {
    /** Utilitaires pour les chaînes de caractères */
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
        private modalesService;
        private assuranceAdeService;
        private assuranceService;
        private assureService;
        private sessionService;
        private propositionAssuranceService;
        private formSettingsService;
        private inputRulesService;
        private elementService;
        private collectivitesService;
        private parametreFonctionnelService;
        static parametres: Modeles.IControleurParametre;
        params: Modeles.IInputParams;
        callback: (map: {}) => void;
        loader: boolean;
        private _listIdCredits;
        infobulleReferenceManuelle: string;
        conventionAssurance: Modeles.IConventionAssurance;
        propositionAssurance: Modeles.Proposition.IPropositionsAssurance;
        private _initialConfigPersonnes;
        currentConfigPersonne: Modeles.Proposition.IConfigurationInitialePersonne;
        listeCreditsSelectionnes: Modeles.Rest.CreditInterne.ICreditInterne[];
        listePersonnesSelectionnees: Modeles.Rest.IPersonnePhysique[];
        estCasInFineOuRelai: boolean;
        tooltips: {};
        viewModel: Modeles.IViewModel;
        anomalies: Modeles.Proposition.IPropositionAnomalie[];
        formSettings: Services.FormSettings.IAdeFormSettings;
        rules: Services.InputRules.IAdeRules;
        private isSyntheseProposition;
        private _codeEtablissement;
        isConsultation: boolean;
        private modeDirective;
        listeIdAssurances: string[];
        listeCollectivites: Modeles.ICodeLabel<string>[];
        listeTypeGarantieManuelle: Modeles.ICodeLabel<number>[];
        listeOptionPreconiseeManuelle: Modeles.ICodeLabel<number>[];
        private _isDirty;
        isQuotiteDirty: boolean;
        showGarantie: boolean;
        showPerso: boolean;
        private _tarificationDerogatoireActive;
        assuranceData: Modeles.IAssuranceForm;
        private _initialAssuranceData;
        optionsAssuranceObligatoire: Modeles.ICodeLabel<boolean>[];
        private _hasDeletedAssurance;
        private isModeCreation;
        private listeAllIdCreditsDossier;
        hasAnomalieBloquante: boolean;
        btnValiderDisabled: boolean;
        private tarificationDerogatoireActive;
        estSaisieManuelle: boolean;
        estDejaParcoursManuel: boolean;
        showResidentFiscal: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, $timeout: ng.ITimeoutService, modalesService: Services.IModalesService, assuranceAdeService: Services.IAssuranceAdeService, assuranceService: Services.IAssuranceService, assureService: Services.IAssureService, sessionService: Services.ISessionService, propositionAssuranceService: Services.IPropositionAssuranceService, formSettingsService: Services.FormSettings.IAdeFormSettingsService, inputRulesService: Services.InputRules.IAdeRulesService, elementService: Services.IElementService, collectivitesService: Services.ICollectivitesService, parametreFonctionnelService: Services.IParametreFonctionnelService);
        private initialiseDirectiveData();
        /** Affiche une modale indiquant que tout les crédits ne sont pas sélectionnés. Poursuivre permet de sélectionner tout les crédits, Abandonner annule la création */
        checkAllCreditNotSelected(): ng.IPromise<boolean>;
        setAssuranceFormData(assuranceParams: Modeles.IAssuranceParams): void;
        cancel(): void;
        private throwTechnical(anomalies, doRetour?);
        /**
         * Set la configuration en cours de modification (écran Personnalisation)
         * @param config
         */
        private setConfigurationPersonne(config);
        continue(): void;
        /** Permet de mettre à jour la visibilité des options pour la config personne actuellement traitée */
        private setConfigOptionVisibilite();
        /**
         * Action de suppression venant de la synthèse crédit
         * @param idCredit
         * @param syntheseCredit
         * @param idAssure définit si on sélectionne l'action
         */
        deleteFromSynthCredit(idCredit: string, syntheseCredit: Modeles.Proposition.ISyntheseCredit[], idAssure?: string): void;
        /**
         * Action de suppression venant de la synthèse assuré
         * @param idAssure
         * @param synthesePersonne
         * @param idCredit
         */
        deleteFromSynthAssure(idAssure: string, synthesePersonne: Modeles.Proposition.ISynthesePersonne[], idCredit?: string): void;
        /**
         * Sauvegarde les données ayant été modifiée, Supprime les différentes assurance souhaitées et recharge la proposition
         * @param idsAssuranceToDelete
         * @param deletedAssurancesByPropAssurance
         */
        private deleteAssuranceAndReloadProposition(idsAssuranceToDelete, deletedAssurancesByPropAssurance);
        /**
         * Rechargement de la proposition sans prendre en compte les différentes assurances supprimées
         * @param deletedAssurancesByPropAssurance
         */
        private reloadPropositionAssurance(deletedAssurancesByPropAssurance);
        getLabelClause(garantie: Modeles.Proposition.IGarantieSocle | Modeles.Proposition.IGarantieOption): string;
        toggleAvantagesPanelGroupe(): void;
        toggleAvantagesPanelPerso(): void;
        submit(): void;
        private initCasInFineOuRelai();
        private updateAssuranceData();
        toggleOptionGarantie(option: Modeles.Proposition.IOption, garantie: Modeles.Proposition.IGarantieOption): void;
        private retourAde();
        private retourAdeErreur(reason, error?);
        /** En création, supprime les assurances éventuellement créées */
        private deleteCreatedAssurances();
        private displayTabset(modeExpert?);
        private tarificationDerogatoireValue;
        private getServiceProposition();
        /**
         * Méthode permettant de charger les données de la modale
         * En consultation, un lirePropAssurance suffit
         * Hors consultation, on doit relancer la méthode majPropAssurance dans le cas où des données du crédit auraient été modifiées
         * On repasse également ici lors de la validation du formulaire (si modification) de sélection (première partie de la modale)
         */
        private getServiceLecture();
        private goToSynthesesViaModeExpert();
        /** Chemin de fer méthodes */
        private initCheminDeFer();
        private updateCheminDeFer(index);
        private updateCheminDeFerModeExpert();
        /**
         * Permet de charger la configuration actuelle
         * @param quotiteUpdated Indique s'il y a eu un update de la quotité
         */
        private initConfigurationActuelle(quotiteUpdated?);
        /**
         * Récupère les valeur depuis le serveur
         * @param majPropAssuranceRequest Requête utilisée pour recharger les données suite à la suppression d'assurance
         */
        private initConfigurationActuelleFromService(majPropAssuranceRequest?);
        /**
         * Permet de récupérer la liste des headers d'options qui seront affichés sur le tableau
         * @param syntheses
         */
        private getOptionsForSyntheseHeader(syntheses);
        getOptionsForSyntheseAssureHeader(syntheses: Modeles.Proposition.ISynthese[]): Modeles.Proposition.IGarantieOption[];
        getOptionsForSyntheseCreditHeader(): Modeles.Proposition.IGarantieOption[];
        /**
         * Permet d'ajouter un TD vide pour respecter l'affichage des colonnes
         * @param garantiesOption
         * @param syntheses
         */
        private completeMissingOptionsForSynthese(garantiesOption, syntheses);
        completeMissingOptionsForSyntheseAssure(garantiesOption: Modeles.Proposition.IGarantieOption[], syntheses: Modeles.Proposition.ISynthese[]): Modeles.Proposition.IGarantieOption[];
        completeMissingOptionsForSyntheseCredit(garantiesOption: Modeles.Proposition.IGarantieOption[]): Modeles.Proposition.IGarantieOption[];
        getApePerson(config: Modeles.Proposition.IConfigurationPersonne): Modeles.Proposition.IGarantieApe;
        getApeCredit(config: Modeles.Proposition.IConfigurationCredit): Modeles.Proposition.IGarantieApe;
        getApeMontant(config: Modeles.Proposition.IConfigurationPersonne | Modeles.Proposition.IConfigurationCredit): number;
        getGarantieSocle(garantie: Modeles.Proposition.IGarantieSocle): string;
        getConfigByPerson(idPersonne: string): Modeles.Proposition.IConfigurationInitialePersonne;
        /**
         * Action permettant de faire la distinction entre le click sur le bouton actualiser et l'exécution de la méthode actualiser() (qui est appelé à différents endroits)
         * Permet également d'indiquer à l'utilisateur si des anomalies bloquantes sont présentes
         */
        actionActualiser(): void;
        private actualiser(isSubmit?);
        /** Mise à jour de la proposition */
        private updatePropositionAssurance();
        /** Mise à jour des quotités et reset des données "isQuotiteDirty" sur les credits */
        private updateQuotiteCouvertureCredit();
        private initConfigurationActuelleFromExistant();
        /** Permet de charger les différentes données des listes (Crédits, personnes et collectivités) */
        private loadListDatas();
        private initViewModel(residentFiscalParamFonctionnel);
        private showCountriesModal();
        private updateNavigation();
        private updateTabset();
        hideGarantiesPerso(): boolean;
        disableOption(garantie: Modeles.Proposition.IGarantieOption | Modeles.Proposition.IGarantieSocle, option: Modeles.Proposition.IOption): boolean;
        setDirty(): void;
        hasValidGarantiesSocles(): boolean;
        setQuotiteDirty(): void;
        setCreditQuotiteDirty(credit: Modeles.Proposition.ICredit): void;
        isGarantieCheckboxInputDisabled(garantie: Modeles.Proposition.IGarantieSocle): boolean;
        isSyntheseAssureOptionRadioDisabled(garantie: Modeles.Proposition.IGarantieOption | Modeles.Proposition.IGarantieApe): boolean;
        isSyntheseCreditOptionRadioDisabled(garantie: Modeles.Proposition.IGarantieOption | Modeles.Proposition.IGarantieApe): boolean;
        printGarantieOptionInfo(garantie: Modeles.Proposition.IGarantieOption, option: Modeles.Proposition.IOption, preconise: boolean): boolean;
        retourSaisieManuelle(): void;
    }
}

declare namespace AssuranceAdeCredit {
}

declare namespace AssuranceAdeCredit.Modeles.Proposition {
    /** Interface du modèle des groupes d'arguments de vente */
    interface IGroupeArgument {
        /** Ordre d'affichage */
        order: number;
        titre: string;
        argument: IArgument[];
    }
    /** Interface du modèle des arguments de vente */
    interface IArgument {
        /** Ordre d'affichage */
        order: number;
        description: string;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Proposition {
    /** Interface du modèle de proposition d'assurance */
    interface IPropositionsAssurance {
        /** Liste des anomalies de la proposition */
        anomalies: IPropositionAnomalie[];
        /** Configuration basique de la configuration */
        initialSettings: IInitialSettings;
        /** Configuration initiale par personne (pre-synthèses) */
        configurationsInitialesPersonne: IConfigurationInitialePersonne[];
        /** Montant de la première échéance de la proposition */
        montantPremiereEcheance: number;
        /** Montant de la première échéance de la proposition (assurances uniquement) */
        montantPremiereEcheanceAvecAssurances: number;
        /** Montant de la première échéance de la proposition (crédits uniquement) */
        montantPremiereEcheanceSansAssurances: number;
        /** Configuration générique des garanties */
        configurationsGeneriques: IConfigurationGenerique[];
        /** Vue des configurations triées par personnes */
        configurationsPersonnes: IConfigurationPersonne[];
        /** Vue des configurations triées par crédits */
        configurationsCredits: IConfigurationCredit[];
        /** IDs de proposition d'assurance */
        idPropAssurances: string[];
        estSaisieManuelle: boolean;
    }
    interface IPropositionAnomalie {
        libelle: string;
        estBloquante: boolean;
    }
    /** Représente les données initiales à la configuration de la proposition d'assurance */
    interface IInitialSettings {
        quotite: number;
        tarificationDerogatoire: boolean;
    }
    /** Modèle de base pour la configuration d'une proposition d'assurance */
    interface IConfiguration {
        idPropositionCnp: string;
    }
    /** Modèle de base pour configuration */
    interface ISynthese {
        garantiesSocle: IGarantieSocle[];
        garantiesOption: IGarantieOption[];
        garantieApe: IGarantieApe;
    }
    /** Représente les données initiales pour la configuration d'une proposition d'assurance par personne */
    interface IConfigurationInitialePersonne extends IConfiguration {
        idPersonne: string;
        IdCnpPropositionPersonnalisation: string;
        argumentsGroupe: IGroupeArgument[];
        argumentsPerso: IGroupeArgument[];
        garantiesSocle: IGarantieSocle[];
        garantiesOptions: IGarantieOption[];
        garantieApe: IGarantieApe;
        referenceManuelle: string;
        settingsSaisieManuelle?: ISettingsSaisieManuelle;
        rulesSaisieManuelle?: IRulesSaisieManuelle;
    }
    interface ISettingsSaisieManuelle {
        referenceManuelle: Forms.IInputSettings;
    }
    interface IRulesSaisieManuelle {
        referenceManuelle: Rules.IValidationRule[];
    }
    /** Représente une configuration personne */
    interface ISynthesePersonne extends ISynthese {
        credit: ICreditForm;
    }
    /** Représente une vue pour 1 personne et X crédits */
    interface IConfigurationPersonne {
        personne: IPersonne;
        synthesePersonne: ISynthesePersonne[];
    }
    /** Représente une vue pour 1 credit et X personnes */
    interface IConfigurationCredit {
        credit: ICreditForm;
        synthesesCredit: ISyntheseCredit[];
    }
    interface ICreditForm extends ICredit {
        formRules: ICreditFormRules;
        formSettings: ICreditFormSettings;
    }
    interface ICreditFormRules extends IInputRules {
        quotite: Rules.IValidationRule[];
    }
    interface ICreditFormSettings {
        tauxRelaiInFine: Forms.IInputSettings;
    }
    /** Représente une configuration crédit */
    interface ISyntheseCredit extends ISynthese {
        personne: IPersonne;
        coutTotalAssurance: number;
        coutMoyenMensuelAssurance: number;
    }
    /** Représente une configuration générique (1 personne / 1 crédit) */
    interface IConfigurationGenerique {
        idAssurance: string;
        idPropAssurance: string;
        personne: IPersonne;
        credit: ICreditForm;
        garantiesSocle: IGarantieSocle[];
        garantiesOption: IGarantieOption[];
        garantieApe: IGarantieApe;
    }
    /** Représente une personne */
    interface IPersonne {
        id: string;
        civilite: string;
        nom: string;
        prenom: string;
        intitule: string;
    }
    /** Représente un crédit */
    interface ICredit extends ICreditWithQuotite {
        id: string;
        idCouvertureCredit: string;
        libelleLong: string;
        quotite: number;
        montantCapitalCredit: number;
        nombrePeriodeCredit: number;
        codePeriodeCredit: number;
        coutTotalAssurance: number;
        coutMoyenMensuelAssurance: number;
        idCnpPropositionContrat: string;
        idCnpPropositionPerso: string;
        estRelaiInFine: boolean;
        tauxRelaiInFine: number;
    }
    interface ICreditWithQuotite {
        isQuotiteDirty?: boolean;
    }
    interface IGarantieCommun {
        idCnpCouverture: string;
        libelle: string;
        description: string;
        idCreditsExclus: string[];
        typeGarantie: Enum.TypeGarantie;
        estSelectionne: boolean;
        infobulle: string;
        controle: IControle;
        couvertureOption: Enum.TypeCouverture;
    }
    /** Représente les données d'une garantie (sans options) */
    interface IGarantieSocle extends IGarantieCommun {
        tauxSaisieManuelle: number;
        typeGarantieSaisieManuelle: Modeles.ICodeLabel<number>;
        formSettings?: ISettingsGarantieSocle;
    }
    interface ISettingsGarantieSocle {
        taux: Forms.IInputSettings;
        typeGarantie: Forms.IInputSettings;
    }
    interface IRulesGarantieSocle {
        taux: Rules.IValidationRule[];
        typeGarantie: Rules.IValidationRule[];
    }
    /** Représente les données d'une garantie (avec options) */
    interface IGarantieOption extends IGarantieCommun {
        options: IOption[];
        tauxSaisieManuelle: number;
        preconiseSaisieManuelle: number;
        formSettings?: ISettingsGarantieOption;
    }
    interface ISettingsGarantieOption {
        tauxSaisieManuelle: Forms.IInputSettings;
        preconiseSaisieManuelle: Forms.IInputSettings;
    }
    /** Représente les données d'une garantie option APE (Assurance Perte Emploi) */
    interface IGarantieApe extends IGarantieCommun {
        options: IOption[];
        couvertureOptionPerso: Enum.TypeCouverture;
        devise: string;
        categoriePerso: number;
        montants: number[];
        montantMensuelAssurance: number;
        selectedMontant: number;
        typePersonnalisation: number;
        montantSaisieManuelle: number;
        hauteurSaisieManuelle: number;
        formSettings?: ISettingsGarantieApe;
    }
    interface ISettingsGarantieApe {
        montantSaisieManuelle: Forms.IInputSettings;
        hauteurSaisieManuelle: Forms.IInputSettings;
    }
    /** Représente une option d'une personnalisation */
    interface IOption {
        categoriePersonnalisation: number;
        typePersonnalisation: number;
        estPreconise: boolean;
        estChoisi: boolean;
        libelle: string;
    }
    /** Représente les contrôles de visibilités */
    interface IControle {
        estVisible: boolean;
        estActif: boolean;
    }
    interface IDeletedAssuranceByAssure {
        idPropAssuranceCnp: string;
        idsDeletedCredit: string[];
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
    interface IPersonnalisationAde {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAde>;
    }
    interface IPropositionAssurance {
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAde>;
        /**
         * CouverturesCreditAde
         */
        couverturesCreditAde: Array<ICouvertureCreditAde>;
        /**
         * IdCnpPropositionContrat
         */
        idCnpPropositionContrat: string;
        /**
         * IdCnpPropositionPersonnalisation
         */
        idCnpPropositionPersonnalisation: string;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * IdwsAssurance
         */
        idwsAssurance: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
    }
    interface IArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
    interface IGroupeArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
        arguments: Array<IArgumentContrat>;
    }
    interface IGarantieAde {
        /**
         * IdCnpCouvertureOptionnel
         */
        idCnpCouvertureOptionnel: string;
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
        controle: IControleIhm;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAde>;
    }
    interface ISortiePropositionAssurances {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Nufaaa_IdExterneAssurance
         */
        idExterneAssurance: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * MontantPremiereEcheance
         */
        montantPremiereEcheance: number;
        /**
         * MontantPremiereEcheanceAss
         */
        montantPremiereEcheanceAssurance: number;
        /**
         * MontantPremiereEcheanceSansAss
         */
        montantPremiereEcheanceSansAssurance: number;
        /**
         * PropositionsAssurance
         */
        propositionsAssurance: Array<IPropositionAssurance>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAde>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContrat>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
    interface IPersonnalisationOptionAde {
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
        /**
         * Mffacm_MontantComposante
         */
        montantComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
    }
    interface IEntreePropositionAssurances {
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
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * TarificationDerogatoire
         */
        tarificationDerogatoire: boolean;
        /**
         * CodeCollectivite
         */
        codeCollectivite: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * ForcerResidenceFiscaleFuture
         */
        forcerResidenceFiscaleFuture: boolean;
    }
    interface ICouvertureCreditAde {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * IdwsCouvertureCredit
         */
        idwsCouvertureCredit: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
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
         * CoutTotalAssurance
         */
        coutTotalAssurance: number;
        /**
         * CoutMoyenMensuelAssurance
         */
        coutMoyenMensuelAssurance: number;
        /**
         * EstRelaisOuInFine
         */
        estRelaisOuInFine: boolean;
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

declare namespace AssuranceAdeCredit.Modeles.Rest.EnregistrerPersAssur {
    interface IPersonnalisationAdeChoisie {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAdeChoisie>;
    }
    interface IPropositionAssuranceChoisie {
        /**
         * IdCnpPropositionContrat
         */
        idCnpPropositionContrat: string;
        /**
         * IdCnpPropositionPersonnalisation
         */
        idCnpPropositionPersonnalisation: string;
        /**
         * GarantiesChoisies
         */
        garantiesChoisies: Array<IGarantieAdeChoisie>;
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
    interface IPersonnalisationAde {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAde>;
    }
    interface IPropositionAssurance {
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAde>;
        /**
         * CouverturesCreditAde
         */
        couverturesCreditAde: Array<ICouvertureCreditAde>;
        /**
         * IdCnpPropositionContrat
         */
        idCnpPropositionContrat: string;
        /**
         * IdCnpPropositionPersonnalisation
         */
        idCnpPropositionPersonnalisation: string;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * IdwsAssurance
         */
        idwsAssurance: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
    }
    interface IArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
    interface IGroupeArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
        arguments: Array<IArgumentContrat>;
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
    interface IGarantieAdeChoisie {
        /**
         * IdCnpCouvertureOptionnel
         */
        idCnpCouvertureOptionnel: string;
        /**
         * EstAcceptee
         */
        estAcceptee: boolean;
        /**
         * Type
         */
        type: number;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * Cifaop_IndicComposante
         */
        indiceComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
        /**
         * PersonnalisationsAdeChoisies
         */
        personnalisationsAdeChoisies: Array<IPersonnalisationAdeChoisie>;
    }
    interface IEntreePersonnalisationAssurance {
        /**
         * IdntDoss
         */
        idDossier: string;
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Nufaaa_IdExterneAssurance
         */
        idExterneAssurance: string;
        /**
         * PropositionsChoisies
         */
        propositionsChoisies: Array<IPropositionAssuranceChoisie>;
    }
    interface IGarantieAde {
        /**
         * IdCnpCouvertureOptionnel
         */
        idCnpCouvertureOptionnel: string;
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
        controle: IControleIhm;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAde>;
    }
    interface ISortiePropositionAssurances {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Nufaaa_IdExterneAssurance
         */
        idExterneAssurance: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * MontantPremiereEcheance
         */
        montantPremiereEcheance: number;
        /**
         * MontantPremiereEcheanceAss
         */
        montantPremiereEcheanceAssurance: number;
        /**
         * MontantPremiereEcheanceSansAss
         */
        montantPremiereEcheanceSansAssurance: number;
        /**
         * PropositionsAssurance
         */
        propositionsAssurance: Array<IPropositionAssurance>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAde>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContrat>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
    interface IPersonnalisationOptionAdeChoisie {
        /**
         * TypePersonnalisation
         */
        typePersonnalisation: number;
        /**
         * Cifaop_IndicComposante
         */
        indiceComposante: number;
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
        /**
         * Mffacm_MontantComposante
         */
        montantComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
    }
    interface IPersonnalisationOptionAde {
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
        /**
         * Mffacm_MontantComposante
         */
        montantComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
    }
    interface ICouvertureCreditAde {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * IdwsCouvertureCredit
         */
        idwsCouvertureCredit: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
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
         * CoutTotalAssurance
         */
        coutTotalAssurance: number;
        /**
         * CoutMoyenMensuelAssurance
         */
        coutMoyenMensuelAssurance: number;
        /**
         * EstRelaisOuInFine
         */
        estRelaisOuInFine: boolean;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.LirePropAssurance {
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
    interface IPersonnalisationAde {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAde>;
    }
    interface IPropositionAssurance {
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAde>;
        /**
         * CouverturesCreditAde
         */
        couverturesCreditAde: Array<ICouvertureCreditAde>;
        /**
         * IdCnpPropositionContrat
         */
        idCnpPropositionContrat: string;
        /**
         * IdCnpPropositionPersonnalisation
         */
        idCnpPropositionPersonnalisation: string;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * IdwsAssurance
         */
        idwsAssurance: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
    }
    interface IArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
    interface IGroupeArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
        arguments: Array<IArgumentContrat>;
    }
    interface IGarantieAde {
        /**
         * IdCnpCouvertureOptionnel
         */
        idCnpCouvertureOptionnel: string;
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
        controle: IControleIhm;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAde>;
    }
    interface ISortiePropositionAssurances {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Nufaaa_IdExterneAssurance
         */
        idExterneAssurance: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * MontantPremiereEcheance
         */
        montantPremiereEcheance: number;
        /**
         * MontantPremiereEcheanceAss
         */
        montantPremiereEcheanceAssurance: number;
        /**
         * MontantPremiereEcheanceSansAss
         */
        montantPremiereEcheanceSansAssurance: number;
        /**
         * PropositionsAssurance
         */
        propositionsAssurance: Array<IPropositionAssurance>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAde>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContrat>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
    interface IPersonnalisationOptionAde {
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
        /**
         * Mffacm_MontantComposante
         */
        montantComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
    }
    interface IEntreePropositionAssurances {
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
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * TarificationDerogatoire
         */
        tarificationDerogatoire: boolean;
        /**
         * CodeCollectivite
         */
        codeCollectivite: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * ForcerResidenceFiscaleFuture
         */
        forcerResidenceFiscaleFuture: boolean;
    }
    interface ICouvertureCreditAde {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * IdwsCouvertureCredit
         */
        idwsCouvertureCredit: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
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
         * CoutTotalAssurance
         */
        coutTotalAssurance: number;
        /**
         * CoutMoyenMensuelAssurance
         */
        coutMoyenMensuelAssurance: number;
        /**
         * EstRelaisOuInFine
         */
        estRelaisOuInFine: boolean;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.LireSchemasComplet {
    interface ILireSchemasCompletRequest {
        identifiantDossier: string;
        listeEntreeLireSchemaComplet: Array<IEntreeLireSchemaComplet>;
    }
    interface IElementComplet {
        /**
         * Idws
         */
        idws: string;
    }
    interface IPretReamenageComplet extends IElementComplet {
        /**
         * Lbfcvs_LiblPrdt
         */
        libelleProduit: string;
        /**
         * listeIdws
         */
        listeIdws: Array<string>;
        /**
         * Cdfidr_CodeDev
         */
        codeDev: string;
        /**
         * Mkfd01_CRD
         */
        crd: number;
        /**
         * EstCapitalRestantDuVisible
         */
        estCapitalRestantDuVisible: boolean;
        /**
         * Dtfcer_DateEnvsPourRembAntc
         * Type date au format yyyy-MM-dd
         */
        dateEnvsPourRemboursementAnticipe: string;
        /**
         * Mtfard_MtRestDuSurPretRefn
         */
        montantRestantDuSurPretRefn: number;
        /**
         * EstSommeRestantDueVisible
         */
        estSommeRestantDueVisible: boolean;
        /**
         * EstExterne
         */
        estExterne: boolean;
        /**
         * Idfct1_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Mefacg_MtechePerdPretRefn
         */
        montantEcheancePeriodiquePretRefn: number;
        /**
         * Dffmce_DateFinCred
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
    }
    interface IRedacteurActeComplet extends IElementComplet {
        /**
         * RedacteurActeObligatoire
         */
        redacteurActeObligatoire: boolean;
        /**
         * Dgfapn_DatePrevSignNotr
         * Type date au format yyyy-MM-dd
         */
        datePrevSigneNotaire: string;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Lbfpnm_NomRedcActe
         */
        nomReductionActe: string;
        /**
         * Lbfppn_PrenRedcActe
         */
        prenReductionActe: string;
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
        listeMontantsSouhaite: Array<number>;
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
    interface IAccessoireComplementaireComplet extends IAccessoireComplet {
        /**
         * LibelleFraisComplementaire
         */
        libelleFraisComplementaire: string;
        /**
         * Ctfprp_RoleTiers
         */
        roleTiers: string;
        /**
         * Lbfpa1_Intitule
         */
        intitule: string;
        /**
         * Ctfcat_CodeSousTypeAccs
         */
        codeSousTypeAccessoire: string;
    }
    interface IAccessoireLieProduitComplet extends IAccessoireComplet {
        /**
         * Llfcac_LibelleTypeAccessoire
         */
        libelleTypeAccessoire: string;
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
    }
    interface ICompteProfessionnelComplet extends ICompteComplet {
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
    interface IInterditBancaireComplet extends IElementComplet {
    }
    interface IOppositionComplet extends IElementComplet {
    }
    interface IRoleComplet extends IElementComplet {
        /**
         * Ctfprp_TypeRolePersonne
         */
        typeRolePersonne: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
    }
    interface IEntrepreneurIndividuelComplet extends IElementComplet {
        /**
         * CodeNace
         */
        codeNace: string;
        /**
         * CodeInsee
         */
        codeINSEE: string;
        /**
         * DateDebutEIRL
         * Type date au format yyyy-MM-dd
         */
        dateDebutEIRL: string;
        /**
         * DateFinEIRL
         * Type date au format yyyy-MM-dd
         */
        dateFinEIRL: string;
        /**
         * IndicateurOpposabiliteEIRL
         */
        indicateurOpposabiliteEIRL: number;
        /**
         * NomConjoint
         */
        nomConjoint: string;
        /**
         * EstMandataire
         */
        estMandataire: boolean;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * EstEIRL
         */
        estEIRL: boolean;
        /**
         * IndicateurEIRL
         */
        indicateurEIRL: number;
        /**
         * LibelleEIRL
         */
        libelleEIRL: string;
        /**
         * AccordConjoint
         */
        accordConjoint: boolean;
    }
    interface ISignataireComplet extends IElementComplet {
        /**
         * ListEmailsContactsChoisissables
         */
        listeEmailsContactsChoisissables: Array<string>;
        /**
         * ListNumerosContactsChoisissables
         */
        listeNumerosContactsChoisissables: Array<string>;
        /**
         * EstAutoriseASigner
         */
        estAutoriseASigner: boolean;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * TypeSignataire
         */
        typeSignataire: number;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: boolean;
    }
    interface IPersonneMoraleComplet extends IPersonneComplet {
        /**
         * Nufpin_NumeInsee
         */
        numeroINSEE: string;
        /**
         * ListRoles
         */
        listeRoles: Array<IRoleComplet>;
        /**
         * ListRepresantants
         */
        listeRepresantants: Array<IPersonneComplet>;
    }
    interface IRetenueImpayeComplet extends IElementComplet {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: number;
        /**
         * TypeDonnee
         */
        typeDonnee: number;
    }
    interface IRetenuesImpayesComplet extends IElementComplet {
        /**
         * RIRetard
         */
        rIRetard: IRetenueImpayeComplet;
        /**
         * RIIndemnite
         */
        rIIndemnite: IRetenueImpayeComplet;
        /**
         * RIReduction
         */
        rIReduction: IRetenueImpayeComplet;
    }
    interface ICreditModaliteComplet extends IElementComplet {
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * RetenuesImpayesComplet
         */
        retenuesImpayesComplet: IRetenuesImpayesComplet;
        /**
         * TauxIndemniteRemboursementAnticipe
         */
        tauxIndemniteRemboursementAnticipe: ITauxComplet;
        /**
         * SurcoutTauxRemboursementAnticipe
         */
        surcoutTauxRemboursementAnticipe: ITauxComplet;
        /**
         * Txffmi_TxInteRetdImpe
         */
        tauxInterieurRetardImpe: number;
        /**
         * Cdfccr_CodeTrtInteIntrSurImpe
         */
        codeTraitementInterieurIntrSurImpe: number;
        /**
         * Libelle_CodeTrtInteIntrSurImpe
         */
        libelleTraitementInterieurIntrSurImpe: string;
        /**
         * Idfcmi_IdntModlCalcImpe
         */
        idModeleCalculImpe: string;
        /**
         * Nofcmc_NumeModlRembAntc
         */
        numeroModeleRemboursementAnticipe: number;
    }
    interface IPayeurComplet extends IElementComplet {
        /**
         * Cdfdrg_ModeReglUtlsParPayr
         */
        modeRegleUtilisationParPayr: string;
        /**
         * Nufddt_NumeCptePayr
         */
        numeroComptePayr: string;
        /**
         * Ctfctd_CodeTypeDom
         */
        codeTypeDom: string;
        /**
         * Llmreg_LibModRegl
         */
        libelleModRegle: string;
        /**
         * Mtfdfx_MtPaieCred
         */
        montantPaiementCredit: number;
        /**
         * Idfdma_RefeUnqMand
         */
        referenceUniqueMand: string;
        /**
         * Bic
         */
        bic: string;
        /**
         * Iban
         */
        iban: string;
        /**
         * Dgfdma_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Cdfdrs_ModeReglUtlsParPayrSecours
         */
        modeRegleUtilisationParPayrSecours: string;
        /**
         * Ctfctd_CodeTypeDomSecours
         */
        codeTypeDomSecours: string;
        /**
         * Llmreg_LibModReglSecours
         */
        libelleModRegleSecours: string;
        /**
         * NumeroComptePayeurSecours
         */
        numeroComptePayeurSecours: string;
        /**
         * Idfdms_RefeUnqMandSecours
         */
        referenceUniqueMandSecours: string;
        /**
         * BicSecours
         */
        bicSecours: string;
        /**
         * IbanSecours
         */
        ibanSecours: string;
        /**
         * Dgfdms_DateSignMandSecours
         * Type date au format yyyy-MM-dd
         */
        dateSigneMandSecours: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
        /**
         * Txfdec_PctPaieCred
         */
        pourcentagePaiementCredit: number;
    }
    interface ISuiviPlanifieComplet extends IElementComplet {
        /**
         * Dtfarv_DateSuivPlnf
         * Type date au format yyyy-MM-dd
         */
        dateSuiviPlanifie: string;
        /**
         * Ctfcrx_CodeAffecSuivPlnfPrdt
         */
        codeAffectationSuivantPlafondProduit: number;
        /**
         * Llfcrv_LiblSuivPlnf
         */
        libelleSuivantPlafond: string;
        /**
         * Llfcrd_LiblRegleDeclmt
         */
        libelleRegleDeclmt: string;
        /**
         * Cifcai_CodeSuivPlnfAutoIntr
         */
        codeSuivantPlafondAutomatiqueIntr: number;
        /**
         * Cifcpd_CodePostnmtDefaut
         */
        codePostnmtDefaut: number;
        /**
         * Ctfcrv_CodeTypeSuivPlnf
         */
        codeTypeSuiviPlanifie: string;
    }
    interface IPhaseCreditExistantComplet extends IElementComplet {
        /**
         * LibelleTypePhase
         */
        libelleTypePhase: string;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
    }
    interface IFamilleEpargneComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * CodeProduitCE
         */
        codeProduitCE: number;
        /**
         * Lbfmpr_LibelleProduitAdr
         */
        libelleProduitAdresse: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Cdfmpr_CodeFamlPrdtAdr
         */
        codeFamilleProduitAdresse: string;
        /**
         * Mtfmve_MtValrEprgAvntOper
         */
        montantValeurEpargneAvenantOper: number;
    }
    interface IRevenuFiscalComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
    }
    interface IPatrimoineImmobilierComplet extends IElementComplet {
        /**
         * LibelleNaturePatrimoineImmmobilier
         */
        libelleNaturePatrimoineImmmobilier: string;
        /**
         * Ctfcnp_NatrPtrmImmb
         */
        naturePatrimoineImmobilier: number;
        /**
         * Mtfmvb_ValrActlPtrm
         */
        valeurActuarielPatrimoine: number;
    }
    interface IContratEpargneLogementComplet extends IElementComplet {
        /**
         * Ddfpct_DateOuvrCont
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureContrat: string;
        /**
         * Lbfptc_LiblTitlCont
         */
        libelleTitulaireContrat: string;
        /**
         * LibelleCdfpprTypeEL
         */
        libelleCdfpprTypeEL: string;
        /**
         * LibelleTypeDrt
         */
        libelleTypeDroit: string;
        /**
         * Nufpct_IdntContEl
         */
        idContratEpargneLogement: string;
    }
    interface IDateComplet extends IElementComplet {
        /**
         * DateMaximale
         * Type date au format yyyy-MM-dd
         */
        dateMaximale: string;
        /**
         * DateMinimale
         * Type date au format yyyy-MM-dd
         */
        dateMinimale: string;
        /**
         * DateConseille
         * Type date au format yyyy-MM-dd
         */
        dateConseille: string;
        /**
         * DateSaisie
         * Type date au format yyyy-MM-dd
         */
        dateSaisie: string;
    }
    interface IDecisionPreteurComplet extends IElementComplet {
        /**
         * AutorisationADecider
         */
        autorisationADecider: boolean;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Cvfide_NiveauRequis
         */
        niveauRequis: string;
        /**
         * DateDecision
         */
        dateDecision: IDateComplet;
        /**
         * EtatDossier
         */
        etatDossier: string;
        /**
         * LibelleNiveauRequis
         */
        libelleNiveauRequis: string;
        /**
         * MessageAlerteDelegation
         */
        messageAlerteDelegation: string;
        /**
         * MoteurDelegationExterne
         */
        moteurDelegationExterne: boolean;
        /**
         * Nofcdi_NiveauDelegationAgent
         */
        niveauDelegationAgent: string;
        /**
         * Ntfmba_NotifEngagementBale2
         */
        notifEngagementBale2: string;
        /**
         * Tvfyal_ValeurDelegation
         */
        valeurDelegation: string;
    }
    interface IReamenagementComplet extends IElementComplet {
        /**
         * LibelleTypeReamenagement
         */
        libelleTypeReamenagement: string;
        /**
         * Mtfmva_CapitalRestantDu
         */
        capitalRestantDu: number;
        /**
         * Mttotdu_MontantTotalDu
         */
        mttotdu_MontantTotalDu: number;
        /**
         * Mtfmvc_AncienneEcheance
         */
        ancienneEcheance: number;
        /**
         * Npfmrp_DureeResiduelle
         */
        dureeResiduelle: number;
        /**
         * Mtfmvd_ValeurAchatObjetFinance
         */
        valeurAchatObjetFinance: number;
        /**
         * GenreReamenagement
         */
        genreReamenagement: number;
        /**
         * EstAjoutCreditInternePossible
         */
        estAjoutCreditInternePossible: boolean;
        /**
         * EstAjoutCreditExternePossible
         */
        estAjoutCreditExternePossible: boolean;
        /**
         * EstSommeRestantDueVisible
         */
        estSommeRestantDueVisible: boolean;
        /**
         * EstMontantTotalDuVisible
         */
        estMontantTotalDuVisible: boolean;
        /**
         * LibelleReamenagement
         */
        libelleReamenagement: string;
        /**
         * IdwsProjet
         */
        idwsProjet: string;
        /**
         * Cdfadv_codeDevise
         */
        codeDevise: string;
        /**
         * EstReamenagementUnSeulCredit
         */
        estReamenagementUnSeulCredit: boolean;
        /**
         * listeTypeReamenagement
         */
        listeTypeReamenagement: Array<IScConstante>;
        /**
         * PretsReamenages
         */
        pretsReamenages: Array<IPretReamenageComplet>;
        /**
         * Cdfare_TypeReam
         */
        typeReamenagement: number;
    }
    interface IScElement {
    }
    interface IScConstante extends IScElement {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
    interface IIntervenantComplet extends IElementComplet {
        /**
         * Signe
         */
        signe: boolean;
        /**
         * Refuse
         */
        refuse: boolean;
        /**
         * DateReponse
         * Type date au format yyyy-MM-dd
         */
        dateReponse: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
        /**
         * Ctfprp_RolsPersPourDoss
         */
        rolsPersonnePourDossier: Array<string>;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
    }
    interface IBienAVendreComplet extends IElementComplet {
        /**
         * Mtfgrd_MtCrdRachSurBienVend
         */
        montantCRDRachSurBienVend: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
    }
    interface IBienConsoFinanceComplet extends IElementComplet {
        /**
         * Idfove_IdntVndr
         */
        idVendeur: string;
    }
    interface IBienDetailleComplet extends IElementComplet {
        /**
         * MontantTotalHorsInstruction
         */
        montantTotalHorsInstruction: number;
        /**
         * Mtfote_CoutTerrain
         */
        coutTerrain: number;
        /**
         * Mtfoac_CoutAcquisitCommercial
         */
        coutAcquisitCommercial: number;
        /**
         * Mtfoai_CoutAcquisitHabitation
         */
        coutAcquisitHabitation: number;
        /**
         * Mtfoco_CoutConstruction
         */
        coutConstruction: number;
        /**
         * Mtfotr_CoutTravauxAmenagement
         */
        coutTravauxAmenagement: number;
        /**
         * Mtfopp_CoutPasPort
         */
        coutPasPort: number;
        /**
         * Mtfofc_CoutFondDeCommerce
         */
        coutFondDeCommerce: number;
        /**
         * Mtfomo_CoutEquipements
         */
        coutEquipements: number;
        /**
         * Mtfovp_CoutVehiculesPrfs
         */
        coutVehiculesPrfs: number;
        /**
         * Mtfops_CoutPartsSociales
         */
        coutPartsSociales: number;
        /**
         * Mtfofg_MontantFraisNegociatio
         */
        montantFraisNegociatio: number;
        /**
         * Mtfofn_CoutFraisNotaire
         */
        coutFraisNotaire: number;
        /**
         * Mtfost_CoutStocks
         */
        coutStocks: number;
        /**
         * Mtfosc_CoutStocksHorsInstruct
         */
        coutStocksHorsInstruct: number;
        /**
         * Mtfobf_CoutBFR
         */
        coutBFR: number;
        /**
         * Mtfobc_CoutBFRHorsInstruction
         */
        coutBFRHorsInstruction: number;
        /**
         * Mtfodv_CoutAutresFraisPrfs
         */
        coutAutresFraisPrfs: number;
        /**
         * Mtfodc_CoutEmpruntHInstuction
         */
        coutEmpruntHInstuction: number;
        /**
         * Mcfotv_MontantTVA
         */
        montantTVA: number;
        /**
         * Mtfora_MontantRachatCreances
         */
        montantRachatCreances: number;
        /**
         * Mtfods_CoutPartsSocietes
         */
        coutPartsSocietes: number;
    }
    interface IBienEquipementProComplet extends IBienDetailleComplet {
    }
    interface ITresorerieFinanceeComplet extends IBienDetailleComplet {
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
    interface ISignatairesComplet extends IElementComplet {
        /**
         * Signataires
         */
        signataires: Array<IPersonneComplet>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
    interface IAvisComplet extends IElementComplet {
        /**
         * Lbfaad_LiblAvis
         */
        libelleAvis: string;
        /**
         * Motif
         */
        motif: string;
        /**
         * Conformite
         */
        conformite: boolean;
        /**
         * Ctfita_CodeTyplAvis
         */
        codeTypologieAvis: string;
        /**
         * Dtfaad_DateSaisAvis
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateSaisieAvis: string;
        /**
         * Idfaen_IdntEnttSaisAvis
         */
        idEntiteSaisieAvis: string;
        /**
         * Lbfaen_LiblEnttSaisAvis
         */
        libelleEntiteSaisieAvis: string;
        /**
         * Nofiav_NumeAvis
         */
        numeroAvis: number;
    }
    interface IResultatLireSchemaComplet {
        /**
         * ListElementComplet
         */
        listeElementComplet: Array<IElementComplet>;
        /**
         * ListAno
         */
        listeAno: Array<IAnomalieLecture>;
        /**
         * MemoObject
         */
        memoObject: string;
        /**
         * IdwsObjectParent
         */
        idwsObjectParent: string;
    }
    interface IRattachementFoyerFiscalTiersComplet extends IElementComplet {
        /**
         * Identification
         */
        identification: string;
        /**
         * Annee
         */
        annee: number;
        /**
         * Montant
         */
        montant: number;
    }
    interface IFormulaireLienAvecEmprunteurComplet extends IElementComplet {
        /**
         * MontantRFRN2
         */
        montantRFRN2: number;
        /**
         * ListeOccupant
         */
        listeOccupant: Array<IOccupantComplet>;
        /**
         * ListeAnomalie
         */
        listeAnomalie: Array<IAnomalieLecture>;
        /**
         * IdentifiantRattache
         */
        identifiantRattache: string;
    }
    interface IFormulaireStatutOccupationPTZComplet extends IElementComplet {
        /**
         * LibellePersonne
         */
        libellePersonne: string;
        /**
         * ListeInformationOccupation
         */
        listeInformationOccupation: Array<IInformationOccupationComplet>;
        /**
         * ListeAnomalie
         */
        listeAnomalie: Array<IAnomalieLecture>;
        /**
         * IdentifiantRattache
         */
        identifiantRattache: string;
    }
    interface IChampRadioButton {
        /**
         * Checked1
         */
        checked1: boolean;
        /**
         * Checked2
         */
        checked2: boolean;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle1
         */
        libelle1: string;
        /**
         * Libelle2
         */
        libelle2: string;
    }
    interface IReponseQuestionComplet extends IElementComplet {
        /**
         * IdentifiantRattache
         */
        identifiantRattache: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * RadioButton
         */
        radioButton: IChampRadioButton;
    }
    interface IQuestionnaireAnnexeComplet extends IElementComplet {
        /**
         * ListeQuestionAnnexe
         */
        listeQuestionAnnexe: Array<IQuestionAnnexeComplet>;
        /**
         * ListeFormulaireStatutOccupation
         */
        listeFormulaireStatutOccupation: Array<IFormulaireStatutOccupationPTZComplet>;
        /**
         * FormulaireLienAvecEmprunteur
         */
        formulaireLienAvecEmprunteur: IFormulaireLienAvecEmprunteurComplet;
        /**
         * ListeFormulaireRattachementFoyerFiscal
         */
        listeFormulaireRattachementFoyerFiscal: Array<IFormulaireRattachementFoyerFiscalComplet>;
    }
    interface ISuiviEditionComplet extends IElementComplet {
        /**
         * SuiviDocuments
         */
        suiviDocuments: Array<ISuiviDocumentComplet>;
    }
    interface IClausePersonnaliseeComplet extends IElementComplet {
        /**
         * LiblClsePers
         */
        libelleClassePersonne: string;
        /**
         * NumeReltClsePers
         */
        numeroRelationClassePersonne: number;
        /**
         * DestClsePers
         */
        destinataireClassePersonne: number;
    }
    interface IClausesPersonnaliseesComplet extends IElementComplet {
        /**
         * ClausesPersonnalisees
         */
        clausesPersonnalisees: Array<IClausePersonnaliseeComplet>;
        /**
         * PresenceRedacteurActe
         */
        presenceRedacteurActe: boolean;
    }
    interface IFormulaireRattachementFoyerFiscalComplet extends IElementComplet {
        /**
         * LibellePersonne
         */
        libellePersonne: string;
        /**
         * RattachementFoyerFiscalTiers
         */
        rattachementFoyerFiscalTiers: IRattachementFoyerFiscalTiersComplet;
        /**
         * ListeAnomalie
         */
        listeAnomalie: Array<IAnomalieLecture>;
        /**
         * IdentifiantRattache
         */
        identifiantRattache: string;
    }
    interface IOccupantComplet extends IElementComplet {
        /**
         * LibelleOccupant
         */
        libelleOccupant: string;
        /**
         * Lien
         */
        lien: number;
        /**
         * LibelleLien
         */
        libelleLien: string;
        /**
         * RevenuFiscal
         */
        revenuFiscal: number;
    }
    interface IInformationOccupationComplet extends IElementComplet {
        /**
         * DateDebutOccupation
         * Type date au format yyyy-MM-dd
         */
        dateDebutOccupation: string;
        /**
         * DateFinOccupation
         * Type date au format yyyy-MM-dd
         */
        dateFinOccupation: string;
        /**
         * LibelleStatutOccupation
         */
        libelleStatutOccupation: string;
        /**
         * StatutOccupation
         */
        statutOccupation: number;
        /**
         * RattachementAutre
         */
        rattachementAutre: string;
        /**
         * Adresse
         */
        adresse: string;
    }
    interface ITerrainFinanceComplet extends IElementComplet {
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
    }
    interface ISoulteFinanceComplet extends IElementComplet {
        /**
         * Mtfoac_MtSoul
         */
        montantSoul: number;
    }
    interface IDetailCoutObjetComplet extends IElementComplet {
        /**
         * Mtfoct_CoutTrvx
         */
        coutTravaux: number;
    }
    interface ITravauxFinancesComplet extends IElementComplet {
        /**
         * Dffotr_DateFinTrvx
         * Type date au format yyyy-MM-dd
         */
        dateFinTravaux: string;
        /**
         * Dtfoco_DateConstBatmSjac
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentSousJacent: string;
        /**
         * Nbfosh_SurfHabtBatmSjac
         */
        surfHabitationBatimentSousJacent: number;
        /**
         * DetailsCoutObjet
         */
        detailsCoutObjet: Array<IDetailCoutObjetComplet>;
        /**
         * Mtfotr_CoutTrvx
         */
        coutTravaux: number;
    }
    interface IConstructionFinanceeComplet extends IElementComplet {
        /**
         * Dffotr_DateFinConst
         * Type date au format yyyy-MM-dd
         */
        dateFinConstruction: string;
        /**
         * Mtfotm_CoutTrvxAChrgMoa
         */
        coutTravauxAChargeMoa: number;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Mtfoco_CoutConstFinn
         */
        coutConstructionFinancier: number;
    }
    interface IComplementDossierComplet extends IElementComplet {
        /**
         * Llfidr_LiblDelRelsProj
         */
        libelleDelReleaseProjet: string;
    }
    interface IProjetImmobilierComplet extends IProjetComplet {
        /**
         * Cdfomo_OccupePar
         */
        occupePar: number;
        /**
         * Cdfose_CodeBatmBassConso
         */
        codeBatimentBassConsommation: number;
        /**
         * Cdfqem_QualEmplaProj
         */
        qualEmplaProjet: number;
        /**
         * Cifclh_EstLogmHLM
         */
        estLogementHLM: boolean;
        /**
         * Ctfacf_CadreFiscal
         */
        cadreFiscal: string;
        /**
         * Ctfcve_CodeTypeMarcPourVent
         */
        codeTypeMarchePourVent: number;
        /**
         * LibelleCadreFiscal
         */
        libelleCadreFiscal: string;
        /**
         * LibelleConsoEnergieBatiment
         */
        libelleConsoEnergieBatiment: string;
        /**
         * LibelleModeOccupation
         */
        libelleModeOccupation: string;
        /**
         * LibelleQualiteEmplacement
         */
        libelleQualiteEmplacement: string;
        /**
         * LibelleTypeMarcPourVent
         */
        libelleTypeMarchePourVent: string;
        /**
         * ListeIdws
         */
        listeIdws: Array<string>;
        /**
         * ZoneReglRobnBien
         */
        zoneRegleRobnBien: string;
        /**
         * BatimentHabitableFinanceComplet
         */
        batimentHabitableFinanceComplet: IBatimentHabitableFinanceComplet;
        /**
         * ConstructionFinanceeComplet
         */
        constructionFinanceeComplet: IConstructionFinanceeComplet;
        /**
         * TravauxFinancesComplet
         */
        travauxFinancesComplet: ITravauxFinancesComplet;
        /**
         * SoulteFinanceeComplet
         */
        soulteFinanceeComplet: ISoulteFinanceComplet;
        /**
         * TerrainFinanceComplet
         */
        terrainFinanceComplet: ITerrainFinanceComplet;
    }
    interface IProprietaireComplet extends IElementComplet {
        /**
         * Civilite
         */
        civilite: string;
        /**
         * Lbfpnm_Nom
         */
        nom: string;
        /**
         * Lbfppn_Prenom
         */
        prenom: string;
        /**
         * Age
         */
        age: number;
        /**
         * IsEmprunteur
         */
        isEmprunteur: boolean;
        /**
         * Txffim_QuotPleinProp
         */
        quotientPleinProp: number;
        /**
         * Txfcnp_QuotNueProp
         */
        quotientNueProp: number;
        /**
         * Txfcdu_QuotUsuf
         */
        quotientUsuf: number;
        /**
         * Txfcus_QuotDroiUsag
         */
        quotientDroiUsag: number;
        /**
         * Ctfcdb_CdModDettnBien
         */
        codeModDettnBien: number;
        /**
         * IdntPersn
         */
        idPersn: string;
    }
    interface IQuestionAnnexeComplet extends IElementComplet {
        /**
         * LibelleQuestion
         */
        libelleQuestion: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * LibelleDonneeARestituer
         */
        libelleDonneeARestituer: string;
        /**
         * Reponses
         */
        reponses: Array<IReponseQuestionComplet>;
        /**
         * ListeAnomalie
         */
        listeAnomalie: Array<IAnomalieLecture>;
    }
    interface ICreditExterneComplet extends IElementComplet {
        /**
         * Lbface_LiblLibrSurConcr
         */
        libelleLibrSurConcr: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Npface_DureAmrtMois
         */
        dureAmortissementMois: number;
        /**
         * Txface_TxAmrt
         */
        tauxAmortissement: number;
        /**
         * Meface_MtEcheAmrt
         */
        montantEcheanceAmortissement: number;
        /**
         * Mkface_MtCapt
         */
        montantCapital: number;
    }
    interface IProjetNonImmobilierComplet extends IProjetComplet {
        /**
         * Description
         */
        description: string;
        /**
         * BienConsoFinance
         */
        bienConsommationFinance: IBienConsoFinanceComplet;
        /**
         * BienEquipementProComplet
         */
        bienEquipementProComplet: IBienEquipementProComplet;
        /**
         * TresorerieFinanceeComplet
         */
        tresorerieFinanceeComplet: ITresorerieFinanceeComplet;
        /**
         * ProprietairesComplet
         */
        proprietairesComplet: Array<IProprietaireComplet>;
    }
    interface ISuiviSignataireComplet extends IElementComplet {
        /**
         * LibelleSignataire
         */
        libelleSignataire: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
        /**
         * IdentifiantPersonne
         */
        identifiantPersonne: string;
        /**
         * CodeEtatSignatureDocument
         */
        codeEtatSignatureDocument: string;
        /**
         * EtatSignatureDocument
         */
        etatSignatureDocument: string;
        /**
         * DateEnvoiDocument
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDocument: string;
        /**
         * DateSignature
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
    }
    interface ISuiviEditionDocumentComplet extends IElementComplet {
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * LibelleDocument
         */
        libelleDocument: string;
        /**
         * IdentifiantWsPersonne
         */
        identifiantWsPersonne: string;
        /**
         * LibellePersonne
         */
        libellePersonne: string;
        /**
         * EstSignElectEligible
         */
        estSigneElectEligible: boolean;
        /**
         * CodeEtatSignatureDocument
         */
        codeEtatSignatureDocument: string;
        /**
         * EtatSignature
         */
        etatSignature: string;
        /**
         * DateEdition
         * Type date au format yyyy-MM-dd
         */
        dateEdition: string;
        /**
         * CanalEdition
         */
        canalEdition: number;
        /**
         * LibelleCanalEdition
         */
        libelleCanalEdition: string;
        /**
         * DateEnvoiDocument
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiDocument: string;
        /**
         * DateSignature
         * Type date au format yyyy-MM-dd
         */
        dateSignature: string;
        /**
         * EstEditionEnCours
         */
        estEditionEnCours: boolean;
        /**
         * SuiviSignataires
         */
        suiviSignataires: Array<ISuiviSignataireComplet>;
    }
    interface IRefusAssuranceExterneComplet extends IElementComplet {
        /**
         * LibellePersonneAssure
         */
        libellePersonneAssure: string;
        /**
         * IdentifiantAssure
         */
        identifiantAssure: string;
        /**
         * Lbfcia_CompagnieAssurance
         */
        compagnieAssurance: string;
        /**
         * Lbfrcc_ReferenceContrat
         */
        referenceContrat: string;
        /**
         * Ddfpic_DateImpressionDemande
         * Type date au format yyyy-MM-dd
         */
        dateImpressionDemande: string;
    }
    interface IProduitFinancierComplet extends IElementComplet {
        /**
         * DureeCatDureeListeValeur
         */
        dureeCatDureeListeValeur: boolean;
        /**
         * Npfcfi_DureeMin
         */
        dureeMinimum: number;
        /**
         * Npfcf1_DureeMax
         */
        dureeMaximum: number;
        /**
         * Npfcf3_DureePas
         */
        dureePas: number;
        /**
         * ListDuree
         */
        listeDuree: Array<number>;
        /**
         * EstECOPATZ
         */
        estECOPATZ: boolean;
        /**
         * EstLissage
         */
        estLissage: boolean;
        /**
         * EstPATZ
         */
        estPATZ: boolean;
    }
    interface IGarantieComplet extends IAccessoireComplet {
        /**
         * Cdfaag_CodeFormActeAuth
         */
        codeFormeActeAuthentique: number;
        /**
         * Lbfcng_LibelleNatureGarantie
         */
        libelleNatureGarantie: string;
        /**
         * Lcfcni_LibelleCourt
         */
        libelleCourt: string;
        /**
         * LibelleGarant
         */
        libelleGarant: string;
        /**
         * Llfcco_LibelleConvention
         */
        libelleConvention: string;
        /**
         * MontantFraisGarantie
         */
        montantFraisGarantie: number;
        /**
         * EtatBoutonSaccef
         */
        etatBoutonSaccef: number;
        /**
         * EstComplete
         */
        estComplete: boolean;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Cdfcng_NatrGarn
         */
        natureGarantie: string;
    }
    interface ISuiviDocumentComplet extends IElementComplet {
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * LibelleDocument
         */
        libelleDocument: string;
        /**
         * EntiteRattachementDocument
         */
        entiteRattachementDocument: number;
        /**
         * SuiviObligatoire
         */
        suiviObligatoire: boolean;
        /**
         * SuiviEditionDocuments
         */
        suiviEditionDocuments: Array<ISuiviEditionDocumentComplet>;
    }
    interface IProjetComplet extends IElementComplet {
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Cdfomp_CodeMiseOeuvrProjPro
         */
        codeMiseOeuvrProjetPro: number;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * Cdfwrl_PresBienAVend
         */
        presBienAVend: boolean;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: boolean;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Ctfaen_TypeEngagement
         */
        typeEngagement: string;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Ctfgce_CritElgGarFEI
         */
        critereEligibiliteFEI: string;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * GenreReamenagement
         */
        genreReamenagement: number;
        /**
         * Lbfcor_LibelleLong
         */
        libelleLong: string;
        /**
         * Lbfiaa_LibelleModEstimation
         */
        libelleModEstimation: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Lbfomo_LibelleMeta
         */
        libelleMeta: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Lbni_LibelleLong
         */
        libelleLong1: string;
        /**
         * LibelleCanalDeDistribution
         */
        libelleCanalDeDistribution: string;
        /**
         * LibelleOrigineCommProjet
         */
        libelleOrigineCommissionProjet: string;
        /**
         * LibelleMiseEnOeuvre
         */
        libelleMiseEnOeuvre: string;
        /**
         * LibelleTechniqueVente
         */
        libelleTechniqueVente: string;
        /**
         * LibelleUsageDuBien
         */
        libelleUsageDuBien: string;
        /**
         * Mtfcra_MtRachCren
         */
        montantRachCren: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Mtfofd_MtFrsDivr
         */
        montantFrsDivr: number;
        /**
         * Mtfofn_CoutFrsNotr
         */
        coutFrsNotaire: number;
        /**
         * Mtfoho_CoutTotlObjtHt
         */
        coutTotalObjetHt: number;
        /**
         * Mtfott_CoutTotlObjtTtc
         */
        coutTotalObjetTTC: number;
        /**
         * FraisDeNotairesSaisissables
         */
        fraisDeNotairesSaisissables: boolean;
        /**
         * ListReamenagement
         */
        listeReamenagement: Array<IScConstante>;
        /**
         * ListCtfgceCritEligGarFEI
         */
        listeCritereEligibiliteFEI: Array<IScConstante>;
        /**
         * BienAVendreComplet
         */
        bienAVendreComplet: IBienAVendreComplet;
        /**
         * ExpertiseComplet
         */
        expertiseComplet: IExpertiseComplet;
        /**
         * Cdfcni_TypeObjtFinn
         */
        typeObjetFinancier: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
    }
    interface IExpertiseComplet extends IElementComplet {
        /**
         * IdentifiantExpertisePVH
         */
        identifiantExpertisePVH: string;
        /**
         * DateEstimationExpertisePVH
         * Type date au format yyyy-MM-dd
         */
        dateEstimationExpertisePVH: string;
        /**
         * MontantEstimationExpertisePVH
         */
        montantEstimationExpertisePVH: number;
        /**
         * NoteBienExpertisePVH
         */
        noteBienExpertisePVH: number;
        /**
         * AdressesMailDestinataire
         */
        adressesMailDestinataire: Array<string>;
        /**
         * IdwsHypothequeImmobiliere
         */
        idwsHypothequeImmobiliere: string;
        /**
         * DateDemandeExpertisePVH
         * Type date au format yyyy-MM-dd
         */
        dateDemandeExpertisePVH: string;
    }
    interface ISynthesePhaseComplet extends IElementComplet {
        /**
         * ModeCalcTx
         */
        modeCalculTaux: number;
        /**
         * TxActu
         */
        tauxActu: number;
        /**
         * TxProp
         */
        tauxProp: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * MontantTotal1ereEcheance
         */
        montantTotal1ereEcheance: number;
        /**
         * Mtfacc_MtPrmeecheAccsPerd
         */
        montantPrmeecheAccessoirePeriode: number;
        /**
         * Npfcph_NbPerdPhas
         */
        nombrePeriodePhase: number;
        /**
         * Pefcph_CodePerdDurePhas
         */
        codePeriodeDurePhase: number;
    }
    interface IGraphEch {
        /**
         * Debut
         */
        debut: number;
        /**
         * Fin
         */
        fin: number;
        /**
         * mtEch
         */
        montantEch: number;
    }
    interface ISyntheseGroupeJustificationTEGComplet {
        /**
         * LibelleFrais
         */
        libelleFrais: string;
        /**
         * MessagesFrais
         */
        messagesFrais: Array<string>;
    }
    interface ISyntheseEcheancesJustifieesAssocieesComplet {
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
        typesFrais: Array<ISyntheseGroupeJustificationTEGComplet>;
    }
    interface IEntreeLireSchemaComplet {
        /**
         * MemoObject
         */
        memoObject: string;
        /**
         * BloquerSousObjets
         */
        bloquerSousObjets: boolean;
        /**
         * IdwsObjectParent
         */
        idwsObjectParent: string;
        /**
         * Idws
         */
        idws: string;
    }
    interface ICompteComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
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
    interface IPalierContraintComplet extends IElementComplet {
        /**
         * Ddpe_DateDebutPeriode
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriode: string;
        /**
         * Dfpe_DateFinPeriode
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriode: string;
        /**
         * Meface_MontantEcheance
         */
        montantEcheance: number;
        /**
         * Npfpco_DureePalier
         */
        dureePalier: number;
    }
    interface ICriteresOptimisationComplet extends IElementComplet {
        /**
         * IdwsPlanFinancement
         */
        idwsPlanFinancement: string;
        /**
         * Ctfico_TypeCritOptim
         */
        typeCritereOptim: number;
        /**
         * Nbfico_ValeurCritOptim
         */
        valeurCritereOptim: number;
        /**
         * Cifaao_HorsAssurances
         */
        horsAssurances: boolean;
        /**
         * ListPaliersContraints
         */
        listePaliersContraints: Array<IPalierContraintComplet>;
    }
    interface ISyntheseCreditExterneComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Lbface_LiblLibrSurConcr
         */
        libelleLibrSurConcr: string;
        /**
         * Mkface_MtCapt
         */
        montantCapital: number;
        /**
         * Npface_DureAmrtMois
         */
        dureAmortissementMois: number;
        /**
         * Meface_MtEcheAmrt
         */
        montantEcheanceAmortissement: number;
        /**
         * Npfwdd_DureDiffMois
         */
        dureDiffereMois: number;
        /**
         * Mefadi_MtecheDiff
         */
        mtecheDiffere: number;
        /**
         * Echeances
         */
        echeances: Array<IGraphEch>;
    }
    interface ITuteurComplet extends IElementComplet {
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
         * Lbfpnm_NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Dtfpna_DateNais
         * Type date au format yyyy-MM-dd
         */
        dateNais: string;
        /**
         * Libelle
         */
        libelle: string;
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
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IChargeComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpao_CodeExstCharApreOper
         */
        codeExisteCharApreOper: number;
        /**
         * Lbfpch_LiblCharge
         */
        libelleCharge: string;
        /**
         * LibelleCodeExstCharApreOper
         */
        libelleCodeExisteCharApreOper: string;
        /**
         * Txfmrc_TxPondChrg
         */
        tauxPondereCharge: number;
        /**
         * IdntGrpeIntv
         */
        idGrpeIntervenant: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Ctfpch_TypeDech
         */
        typeDech: string;
        /**
         * Mtfpch_MtChrg
         */
        montantCharge: number;
        /**
         * Npfpch_NbPerdParAn
         */
        nombrePeriodeParAn: number;
    }
    interface IRessourceComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpao_CodeExstRessApreOper
         */
        codeExisteRessourceApreOper: number;
        /**
         * Lbfpre_LiblRessource
         */
        libelleRessource: string;
        /**
         * LibelleCodeExstCharApreOper
         */
        libelleCodeExisteCharApreOper: string;
        /**
         * Txfmrc_TxPondRess
         */
        tauxPondereRessource: number;
        /**
         * IdntGrpeIntv
         */
        idGrpeIntervenant: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * Ctfpre_TypeRess
         */
        typeRessource: string;
        /**
         * Mtfpre_MtRess
         */
        montantRessource: number;
        /**
         * Npfpre_NbPerdParAn
         */
        nombrePeriodeParAn: number;
    }
    interface IDossierComplet extends IElementComplet {
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Ctfipi_CodePrcsInstr
         */
        codeProcessusInstruction: string;
        /**
         * Ctfitr_CodeTrtComp
         */
        codeTraitementComp: string;
        /**
         * Idfaac_IdntDossGest
         */
        idDossierGestion: string;
        /**
         * Lbfaem_Denomination
         */
        denomination: string;
        /**
         * ListIdws
         */
        listeIdws: Array<string>;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * NatureProjet
         */
        natureProjet: number;
        /**
         * PresEmprunteur
         */
        presEmprunteur: boolean;
        /**
         * PresencePATZPlanRetenu
         */
        presencePATZPlanRetenu: boolean;
        /**
         * Cifcgd_CodeActivationGestionDevises
         */
        activationGestionDevise: boolean;
        /**
         * CodeEtapeSimulation
         */
        codeEtapeSimulation: number;
        /**
         * Idfast_EntiteInstructeur
         */
        entiteInstructeur: string;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: boolean;
        /**
         * PresenceRefusAssuranceEdite
         */
        presenceRefusAssuranceEdite: boolean;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cefado_SousEtatDoss
         */
        sousEtatDossier: number;
        /**
         * Ctfado_EtatDoss
         */
        etatDossier: number;
        /**
         * DevisEcoPTZExiste
         */
        devisEcoPTZExiste: boolean;
        /**
         * CreationDossierSGFGASPossible
         */
        creationDossierSGFGASPossible: boolean;
    }
    interface IResultatControle {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Messages
         */
        messages: Array<string>;
    }
    interface ICreditExistantComplet extends IChargeComplet {
        /**
         * Ctfmtc_CodeTypeCred
         */
        codeTypeCredit: number;
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Lbfmet_LiblEnttTitlCe
         */
        libelleEntiteTitulaireCE: string;
        /**
         * LibelleCodeTypeCred
         */
        libelleCodeTypeCredit: string;
        /**
         * Mefmpe_MtPrcheche
         */
        montantPrcheche: number;
        /**
         * Mkfmpc_MtCaptDejaRemb
         */
        montantCapitalDejaRemboursement: number;
        /**
         * Npfmam_DureAmrt
         */
        dureAmortissement: number;
        /**
         * TauxCalcule
         */
        tauxCalcule: number;
        /**
         * ListPhasesCreditExistant
         */
        listePhasesCreditExistant: Array<IPhaseCreditExistantComplet>;
        /**
         * Mkfard_MtRestDu
         */
        montantRestantDu: number;
    }
    interface ICreditBonificationComplet extends IElementComplet {
        /**
         * Llfcco_LibLongConv
         */
        libelleLongConvention: string;
        /**
         * Mefdbc_MontantEtablissement
         */
        montantEtablissement: number;
        /**
         * Mefdbr_MontantPartenaire
         */
        montantPartenaire: number;
        /**
         * IdentifiantConvention
         */
        identifiantConvention: string;
    }
    interface IBatimentHabitableFinanceComplet extends IElementComplet {
        /**
         * Dtfoco_DateConstBatmHabt
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentHabitation: string;
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Mtfcmf_MtMobilierFinancable
         */
        montantMobilierFinancable: number;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Mtfoac_CoutAcqsBatmHabt
         */
        coutAcqsBatimentHabitation: number;
    }
    interface ISyntheseCreditInterneComplet extends IElementComplet {
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * MontantCapital
         */
        montantCapital: number;
        /**
         * CoutTotal
         */
        coutTotal: number;
        /**
         * Cdfcfc_CodeFamlContRegl
         */
        codeFamilleContratRegle: string;
        /**
         * TegModeRestitution
         */
        tegModeRestitution: number;
        /**
         * TegActu
         */
        tegActu: number;
        /**
         * TegProp
         */
        tegProp: number;
        /**
         * SynthesePhaseComplets
         */
        synthesePhaseComplets: Array<ISynthesePhaseComplet>;
        /**
         * Echeances
         */
        echeances: Array<IGraphEch>;
        /**
         * SyntheseEcheancesJustifieesAssocieesComplet
         */
        syntheseEcheancesJustifieesAssocieesComplet: ISyntheseEcheancesJustifieesAssocieesComplet;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Txfamc_TxMontage
         */
        tauxMontage: number;
        /**
         * ExisteAssuranceSurCRD
         */
        existeAssuranceSurCRD: boolean;
        /**
         * EstLissage
         */
        estLissage: boolean;
        /**
         * EstRelais
         */
        estRelais: boolean;
    }
    interface ICompteDepotComplet extends ICompteComplet {
        /**
         * Cdfmce_CodeProduitCE
         */
        codeProduitCE: number;
        /**
         * Lbfmet_LiblEnttTitl
         */
        libelleEntiteTitulaire: string;
    }
    interface IFormulePaiementComplet extends IElementComplet {
        /**
         * Idfcct_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Cdfdrg_ModeReglUtlsParPayr
         */
        modeRegleUtilisationParPayr: string;
        /**
         * Llmreg_LibModRegl
         */
        libelleModRegle: string;
        /**
         * Idfdma_RefeUnqMand
         */
        referenceUniqueMand: string;
        /**
         * Bic
         */
        bic: string;
        /**
         * Iban
         */
        iban: string;
        /**
         * Txfdec_PctPaieCred
         */
        pourcentagePaiementCredit: number;
        /**
         * Dgfdma_DateSignMand
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateSigneMand: string;
        /**
         * MandatIban
         */
        mandatIban: boolean;
        /**
         * Editable
         */
        editable: boolean;
        /**
         * Cdfadv_CodeDevise
         */
        codeDevise: string;
        /**
         * DomiciliationTresorCompte
         */
        domiciliationTresorCompte: string;
    }
    interface IDebiteurComplet extends IElementComplet {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Usage
         */
        usage: number;
        /**
         * ListeFormulePaiement
         */
        listeFormulePaiement: Array<IFormulePaiementComplet>;
    }
    interface ICouvertureCreditComplet {
        /**
         * Cdfadv_CodeDevsCred
         */
        codeDeviseCredit: string;
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * Mtfgfr_MontantFraisGarantie
         */
        montantFraisGarantie: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
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
    interface IGarantComplet extends IElementComplet {
        /**
         * Ctfmfc_CodeTypeFctCpteDepoCeRecent
         */
        codeTypeFctCompteDepoCERecent: number;
        /**
         * Lbfmgp_NomGrpe
         */
        nomGrpe: string;
        /**
         * LibelleFctCpteDepoCeRecent
         */
        libelleFctCompteDepoCERecent: string;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmep_MtPartEprgLgmt
         */
        montantPartEpargneLgmt: number;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * PresenceCompteDepotCeRecent
         */
        presenceCompteDepotCERecent: boolean;
        /**
         * TotalEpargneContractuelle
         */
        totalEpargneContractuelle: number;
        /**
         * TotalEpargneLiquide
         */
        totalEpargneLiquide: number;
        /**
         * ListCharges
         */
        listeCharges: Array<IChargeComplet>;
        /**
         * ListComptes
         */
        listeComptes: Array<ICompteComplet>;
        /**
         * ListFamillesEpargneComplet
         */
        listeFamillesEpargneComplet: Array<IFamilleEpargneComplet>;
        /**
         * ListPersonnes
         */
        listePersonnes: Array<IPersonneComplet>;
        /**
         * ListRessources
         */
        listeRessources: Array<IRessourceComplet>;
    }
    interface IEmprunteurComplet extends IElementComplet {
        /**
         * Cdfadv_CodeDeviseEmprunteur
         */
        codeDeviseEmprunteur: string;
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cdfcke_CodeCateEmpr
         */
        codeCateEmprunt: string;
        /**
         * Cdfwsl_StttOccpLogmActl
         */
        stttOccpLogementActuariel: number;
        /**
         * Cofopz_CodeCondDergPourPtz
         */
        codeConditionDerogationPourPtz: number;
        /**
         * Ctfmfc_CodeTypeFctCpteDepoCeRecent
         */
        codeTypeFctCompteDepoCERecent: number;
        /**
         * Idfaep_IdntEnttTitlClnt
         */
        idEntiteTitulaireClient: string;
        /**
         * Lbfaem_DenmEmpr
         */
        denmEmprunt: string;
        /**
         * Lbfcke_LiblCateEmpr
         */
        libelleCateEmprunt: string;
        /**
         * LibelleCondDergPourPtz
         */
        libelleConditionDerogationPourPtz: string;
        /**
         * LibelleFctCpteDepoCeRecent
         */
        libelleFctCompteDepoCERecent: string;
        /**
         * LibelleStttOccpLogmActl
         */
        libelleStttOccpLogementActuariel: string;
        /**
         * Lbfmae_ListAgesEnfants
         */
        listeAgesEnfants: Array<number>;
        /**
         * MntMaxAutoriseCEL
         */
        mntMaximumAutoriseCEL: number;
        /**
         * MntMaxAutorisePEL
         */
        mntMaximumAutorisePEL: number;
        /**
         * MntMaxAutorisePELCEL
         */
        mntMaximumAutorisePELCEL: number;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmep_MtPartEprgLgmt
         */
        montantPartEpargneLgmt: number;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Mtftlh_EncoursLivretsAutresEtabs
         */
        encoursLivretsAutresEtabs: number;
        /**
         * Mtftli_EncoursPretsIssusLEL
         */
        encoursPretsIssusLEL: number;
        /**
         * Mtftph_EncoursPlansAutresEtabs
         */
        encoursPlansAutresEtabs: number;
        /**
         * Mtftpl_EncoursPretsIssusPEL
         */
        encoursPretsIssusPEL: number;
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * Nbfpnp_NbPersCmpstMeng
         */
        nombrePersonneCmpstMeng: number;
        /**
         * PlafondMaxCEL
         */
        plafondMaximumCEL: number;
        /**
         * PlafondMaxPEL
         */
        plafondMaximumPEL: number;
        /**
         * PlafondMaxPELCEL
         */
        plafondMaximumPELCEL: number;
        /**
         * PresenceCompteDepotCeRecent
         */
        presenceCompteDepotCERecent: boolean;
        /**
         * TotalEpargneContractuelle
         */
        totalEpargneContractuelle: number;
        /**
         * TotalEpargneLiquide
         */
        totalEpargneLiquide: number;
        /**
         * ListCharges
         */
        listeCharges: Array<IChargeComplet>;
        /**
         * ListComptes
         */
        listeComptes: Array<ICompteComplet>;
        /**
         * ListContratsEpargneLogement
         */
        listeContratsEpargneLogement: Array<IContratEpargneLogementComplet>;
        /**
         * ListFamillesEpargneComplet
         */
        listeFamillesEpargneComplet: Array<IFamilleEpargneComplet>;
        /**
         * ListPatrimoinesImmo
         */
        listePatrimoinesImmobilier: Array<IPatrimoineImmobilierComplet>;
        /**
         * ListPersonnes
         */
        listePersonnes: Array<IPersonneComplet>;
        /**
         * ListRessources
         */
        listeRessources: Array<IRessourceComplet>;
        /**
         * ListRevenusFiscaux
         */
        listeRevenusFiscaux: Array<IRevenuFiscalComplet>;
    }
    interface IAvisOrganismeExterneComplet extends IElementComplet {
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateAvis: string;
        /**
         * Nufpt2_NumeFaxInstr
         */
        numeroFaxInstruction: string;
    }
    interface ICreditInterneComplet extends IElementComplet {
        /**
         * Ccfarc_CodeIndicCalcAFaire
         */
        codeIndiceCalculAFaire: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfbje_CodeIndicExstPiecJustPourDeclechlVerst
         */
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        /**
         * Cdfbju_CodeTypeRattJustDecl
         */
        codeTypeRattachementJustificatifDeclaration: number;
        /**
         * Cifaio_CodeIndicOptmImps
         */
        codeIndiceOptimisationImps: number;
        /**
         * Dhfacj_QuantEche
         */
        jourDateEcheance: number;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Idfcct_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * IndicEvltTxConsPond
         */
        indiceEvolutionTauxConsolidePondere: number;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Lbfech_LibelleEchelle
         */
        libelleEchelle: string;
        /**
         * LibelleTegModeRestitution
         */
        libelletegModeRestitution: string;
        /**
         * ListCdfcngNatrGarn
         */
        listeCdfcngNatureGarantie: Array<string>;
        /**
         * ListIdntPhas
         */
        listeIdPhase: Array<string>;
        /**
         * Mcfafd_CoutTotlFrsDossAsscCred
         */
        coutTotalFrsDossierAssuranceCredit: number;
        /**
         * Mcfgfr_CoutTotlFrsGarnAsscCred
         */
        coutTotalFrsGarantieAssuranceCredit: number;
        /**
         * Mcfaia_MtTotlAssrPerd
         */
        montantTotalAssurancePeriode: number;
        /**
         * Mefacc_MtPrmeEcheAssr
         */
        montantPrmeEcheanceAssurance: number;
        /**
         * Mefape_MtPrmeEcheHorsAccsCred
         */
        montantPrmeEcheanceHorsAccessoireCredit: number;
        /**
         * Mtfcve_MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * MontantEcheance
         */
        montantEcheance: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxAffiche
         */
        tauxAffiche: number;
        /**
         * TauxAnnuelEffectifGlobal
         */
        tauxAnnuelEffectifGlobal: number;
        /**
         * TauxUsure
         */
        tauxUsure: number;
        /**
         * TegModeRestitution
         */
        tegModeRestitution: number;
        /**
         * Txfasr_TxNegcSurcRembAntc
         */
        tauxNegocieSurcRemboursementAnticipe: number;
        /**
         * Txfcmg_MargeTauxFutur
         */
        margeTauxFutur: number;
        /**
         * Cdfcie_CodeIndicelgbAuprInstemss
         */
        codeIndicelgbAuprInstemss: number;
        /**
         * LibelleIndicelgbAuprInstemss
         */
        libelleIndicelgbAuprInstemss: string;
        /**
         * ProduitFinancierComplet
         */
        produitFinancierComplet: IProduitFinancierComplet;
        /**
         * CreditModaliteComplet
         */
        creditModaliteComplet: ICreditModaliteComplet;
        /**
         * CreditBonificationComplet
         */
        creditBonificationComplet: ICreditBonificationComplet;
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
        /**
         * EstBonifiableFlat
         */
        estBonifiableFlat: boolean;
        /**
         * ExistePhasePF
         */
        existePhasePF: boolean;
        /**
         * ExistePhaseAM
         */
        existePhaseAM: boolean;
        /**
         * Txfamc_TxMontage
         */
        tauxMontage: number;
        /**
         * MontantMaxPretPVH
         */
        montantMaximumPretPVH: number;
        /**
         * Mcface_MtCredEuro
         */
        montantCreditEuro: number;
        /**
         * EstAjustable
         */
        estAjustable: boolean;
        /**
         * ListPayeurs
         */
        listePayeurs: Array<IPayeurComplet>;
        /**
         * ListSuivisPlanifies
         */
        listeSuivisPlanifies: Array<ISuiviPlanifieComplet>;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
    }
    interface IPlanFinancementComplet extends IElementComplet {
        /**
         * CalcAFaire
         */
        calculAFaire: boolean;
        /**
         * Cdfazc_CodeProduitAtoutClic
         */
        codeProduitAtoutClic: string;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: boolean;
        /**
         * DureePlanGLobale
         */
        dureePlanGLobale: number;
        /**
         * Lbfcor_LibelleLong
         */
        libelleLong: string;
        /**
         * Lbfomo_LibelleMeta
         */
        libelleMeta: string;
        /**
         * Lbni_LibelleLong
         */
        libelleLong1: string;
        /**
         * LoanToValue
         */
        loanToValue: number;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * Mtfarf_MtRestFinn
         */
        montantRestantFinancier: number;
        /**
         * MtMensualiteAvecAssurance
         */
        montantMensualiteAvecAssurance: number;
        /**
         * PresenceLissage
         */
        presenceLissage: boolean;
        /**
         * MontantAtoutClic
         */
        montantAtoutClic: number;
        /**
         * TauxApportPersonnel
         */
        tauxApportPersonnel: number;
        /**
         * IdwsSynthesePlanFinancement
         */
        idwsSynthesePlanFinancement: string;
        /**
         * ListAccessoiresComplementaires
         */
        listeAccessoiresComplementaires: Array<IAccessoireComplementaireComplet>;
        /**
         * ListAccessoiresLiesProduit
         */
        listeAccessoiresLiesProduit: Array<IAccessoireLieProduitComplet>;
        /**
         * ListAssurances
         */
        listeAssurances: Array<IAssuranceComplet>;
        /**
         * ListCreditsExternes
         */
        listeCreditsExternes: Array<ICreditExterneComplet>;
        /**
         * ListCreditsInternes
         */
        listeCreditsInternes: Array<ICreditInterneComplet>;
        /**
         * ListeCreditComplementaires
         */
        listeCreditComplementaires: Array<ICreditExistantComplet>;
        /**
         * ListeCreditsExistantsPourLissage
         */
        listeCreditsExistantsPourLissage: Array<ICreditExistantComplet>;
        /**
         * ListGaranties
         */
        listeGaranties: Array<IGarantieComplet>;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Mtfaap_MtApprPers
         */
        montantApportPersonne: number;
        /**
         * Mtfaso_MtTotlEmprPlan
         */
        montantTotalEmpruntPlan: number;
    }
    interface IGestionAdministrativeComplet extends IElementComplet {
        /**
         * Cdfafc_CodeAuthCont
         */
        codeAuthentiqueContrat: boolean;
        /**
         * Cdfbve_ModeReglementVersement
         */
        modeReglementVersement: string;
        /**
         * Cdfdrg_ModeReglementSecours
         */
        modeReglementSecours: string;
        /**
         * Cifpcd_OuvCpteSupEchCred
         */
        ouvertureCompteSupEchCredit: boolean;
        /**
         * Controles
         */
        controles: Array<IControleIhm>;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Ctfctd_CodeTypeDomRegSecours
         */
        codeTypeDomRegSecours: string;
        /**
         * Ctfctd_CodeTypeDomRegSecoursEnDevise
         */
        codeTypeDomRegSecoursEnDevise: string;
        /**
         * Ctfctd_CodeTypeDomVersement
         */
        codeTypeDomVersement: string;
        /**
         * Ctfctd_CodeTypeDomVersementEnDevise
         */
        codeTypeDomVersementEnDevise: string;
        /**
         * LibelleTypeLoiScrv
         */
        libelleTypeLoiScrivener: string;
        /**
         * Llmreg_LibelleModeRegSecours
         */
        libelleModeRegSecours: string;
        /**
         * Llmreg_LibelleModeRegSecoursEnDevise
         */
        libelleModeRegSecoursEnDevise: string;
        /**
         * Llmreg_LibelleModeVersement
         */
        libelleModeVersement: string;
        /**
         * Llmreg_LibelleModeVersementEnDevise
         */
        libelleModeVersementEnDevise: string;
        /**
         * Mtfcon_MontantConvenu
         */
        montantConvenu: number;
        /**
         * Nufpr1_NumeCpteSecoPrel
         */
        numeroCompteSecoPrel: string;
        /**
         * NumeroComptePayeurSecours
         */
        numeroComptePayeurSecours: string;
        /**
         * NumeroComptePayeurSecoursEnDevise
         */
        numeroComptePayeurSecoursEnDevise: string;
        /**
         * NumeroCompteVersement
         */
        numeroCompteVersement: string;
        /**
         * NumeroCompteVersementEnDevise
         */
        numeroCompteVersementEnDevise: string;
        /**
         * EstCopro100
         */
        estCopro100: boolean;
        /**
         * ListAssurances
         */
        listeAssurances: Array<IAssuranceComplet>;
        /**
         * ListCreditsInternes
         */
        listeCreditsInternes: Array<ICreditInterneComplet>;
        /**
         * ListGaranties
         */
        listeGaranties: Array<IGarantieComplet>;
        /**
         * ListPersonnes
         */
        listePersonnes: Array<IPersonneComplet>;
    }
    interface ISynthesePlanFinancementComplet extends IElementComplet {
        /**
         * LibelleAcquisition
         */
        libelleAcquisition: string;
        /**
         * Mcfoof_CoutTotalTTC
         */
        coutTotalTTC: number;
        /**
         * Mcfafd_CoutTotalFraisDossier
         */
        coutTotalFraisDossier: number;
        /**
         * Mcfacf_CoutTotalFraisCourtage
         */
        coutTotalFraisCourtage: number;
        /**
         * Mcfgfr_CoutTotalFraisGarantie
         */
        coutTotalFraisGarantie: number;
        /**
         * MontantTotalOperation
         */
        montantTotalOperation: number;
        /**
         * Mtfaap_MtApportPersonnel
         */
        montantApportPersonnel: number;
        /**
         * nMkface_MtConcoursExternes
         */
        mkface_MontantConcoursExternes: number;
        /**
         * nMtfaso_MtConcoursInternes
         */
        mtfaso_MontantConcoursInternes: number;
        /**
         * DureePlanGlobale
         */
        dureePlanGlobale: number;
        /**
         * MtMensualiteAvecAssurance
         */
        montantMensualiteAvecAssurance: number;
        /**
         * MtMensualiteHorsAssurances
         */
        montantMensualiteHorsAssurances: number;
        /**
         * CoutTotalCreditsInternes
         */
        coutTotalCreditsInternes: number;
        /**
         * TxEndettement
         */
        tauxEndettement: number;
        /**
         * MntResteAVivre
         */
        mntResteAVivre: number;
        /**
         * CoutTotalHorsAccessoires
         */
        coutTotalHorsAccessoires: number;
        /**
         * CoutTotalAssurance
         */
        coutTotalAssurance: number;
        /**
         * MontantFraisDivers
         */
        montantFraisDivers: number;
        /**
         * MtRessourcesAvecApl
         */
        montantRessourcesAvecAPL: number;
        /**
         * MtChargesAvecApl
         */
        montantChargesAvecAPL: number;
        /**
         * TxEndettementAvecApl
         */
        tauxEndettementAvecAPL: number;
        /**
         * MntResteAVivreAvecApl
         */
        mntResteAVivreAvecAPL: number;
        /**
         * DebtToIncome
         */
        debutToIncome: number;
        /**
         * LoanToValue
         */
        loanToValue: number;
        /**
         * TauxApportPersonnel
         */
        tauxApportPersonnel: number;
        /**
         * Mtfiba_MtApl
         */
        montantAPL: number;
        /**
         * MtMensualiteNet
         */
        montantMensualiteNet: number;
        /**
         * SyntheseCreditInterneComplets
         */
        syntheseCreditInterneComplets: Array<ISyntheseCreditInterneComplet>;
        /**
         * SyntheseCreditExterneComplets
         */
        syntheseCreditExterneComplets: Array<ISyntheseCreditExterneComplet>;
        /**
         * AccordDePrincipe
         */
        accordDePrincipe: number;
        /**
         * ListResultatControle
         */
        listeResultatControle: Array<IResultatControle>;
    }
    interface IContratComplet extends IElementComplet {
        /**
         * CalculBonificationRequise
         */
        calculBonificationRequise: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Dtfieo_DateEdtnOffr
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * EtatDossierEditionIndustrialisee
         */
        etatDossierEditionIndustrialisee: string;
        /**
         * LibelleTypeLoiScrv
         */
        libelleTypeLoiScrivener: string;
        /**
         * NumeroOffre
         */
        numeroOffre: number;
        /**
         * LibelleAutorisationEdition
         */
        libelleAutorisationEdition: string;
        /**
         * ClausesPersonnalisees
         */
        clausesPersonnalisees: IClausesPersonnaliseesComplet;
        /**
         * ListCreditsInternes
         */
        listeCreditsInternes: Array<ICreditInterneComplet>;
        /**
         * Signataires
         */
        signataires: ISignatairesComplet;
        /**
         * Projet
         */
        projet: IProjetComplet;
        /**
         * DebiteurComplets
         */
        debiteurComplets: Array<IDebiteurComplet>;
        /**
         * Interventants
         */
        interventants: Array<IIntervenantComplet>;
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
         * EstApe
         */
        estApe: boolean;
        /**
         * EstConfigurateurCnp
         */
        estConfigurateurCnp: boolean;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * EstTarifDerogatoire
         */
        estTarifDerogatoire: boolean;
        /**
         * IndemniteJournaliereObligatoire
         */
        indemniteJournaliereObligatoire: boolean;
        /**
         * IndemniteJournaliere
         */
        indemniteJournaliere: IMontantComplet;
        /**
         * DernierAvisOrganismeExt
         */
        dernierAvisOrganismeExterieur: IAvisOrganismeExterneComplet;
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
    interface IPersonnePhysiqueComplet extends IPersonneComplet {
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * Ctfpse_CodeSexePers
         */
        codeSexePersonne: number;
        /**
         * Dtfpna_DateNais
         * Type date au format yyyy-MM-dd
         */
        dateNais: string;
        /**
         * EstEntrepreneurIndividuel
         */
        estEntrepreneurIndividuel: boolean;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfpnj_NomJeunFill
         */
        nomJeunFill: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Llfco1_LibelleTypeLien
         */
        libelleTypeLien: string;
        /**
         * InterditBancaire
         */
        interditBancaire: IInterditBancaireComplet;
        /**
         * ListOpposition
         */
        listeOpposition: Array<IOppositionComplet>;
        /**
         * ListRoles
         */
        listeRoles: Array<IRoleComplet>;
        /**
         * EntrepreneurIndividuel
         */
        entrepreneurIndividuel: IEntrepreneurIndividuelComplet;
        /**
         * Signataire
         */
        signataire: ISignataireComplet;
        /**
         * IdntActv
         */
        idActivite: string;
    }
    interface IEntiteExterneCreditComplet extends IElementComplet {
        /**
         * Idfaie_IdEntiteExterneCredit
         */
        idEntiteExterneCredit: string;
    }
    interface IParametreFonctionnelComplet extends IElementComplet {
        /**
         * CodeParametre
         */
        codeParametre: string;
        /**
         * Actif
         */
        actif: boolean;
        /**
         * IdntObjtConcerne
         */
        idObjetConcerne: string;
    }
    interface IEndettementComplet extends IElementComplet {
        /**
         * MtRessources
         */
        montantRessources: number;
        /**
         * MtRessourcesAvecApl
         */
        montantRessourcesAvecAPL: number;
        /**
         * MtCharges
         */
        montantCharges: number;
        /**
         * MtChargesAvecApl
         */
        montantChargesAvecAPL: number;
        /**
         * TxEndettement
         */
        tauxEndettement: number;
        /**
         * TxEndettementAvecApl
         */
        tauxEndettementAvecAPL: number;
        /**
         * MntResteAVivre
         */
        mntResteAVivre: number;
        /**
         * MntResteAVivreParPersonne
         */
        mntResteAVivreParPersonne: number;
        /**
         * IndicResteAVivre
         */
        indiceResteAVivre: number;
        /**
         * IndicResteAVivreAvecApl
         */
        indiceResteAVivreAvecAPL: number;
        /**
         * MtEchConcoursInt
         */
        montantEchConcoursIntitule: number;
        /**
         * MtEchConcoursExt
         */
        montantEchConcoursExterieur: number;
        /**
         * MntResteAVivreAvecApl
         */
        mntResteAVivreAvecAPL: number;
        /**
         * MntRAVAvecAplParPersonne
         */
        mntRAVAvecAPLParPersonne: number;
        /**
         * DebtToIncome
         */
        debutToIncome: number;
        /**
         * Mpfprr_SeuilMinimumRAV
         */
        seuilMinimumRAV: number;
        /**
         * Txftpa_TauxEndettementMax
         */
        tauxEndettementMaximum: number;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.ListerCollectivites {
    interface IListerCollectivitesRequest {
        identifiantDossier: string;
        identifiantPersonne: string;
        identifiantPlanFinancement: string;
    }
    interface ICollectiviteCNP {
        /**
         * Cle
         */
        cle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
    interface IResultatCollectiviteCNP {
        /**
         * LibErreur
         */
        libelleErreur: string;
        /**
         * ListeCollectiviteCNP
         */
        listeCollectiviteCNP: Array<ICollectiviteCNP>;
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.MajElements {
    type IAnyType = any;
    interface IMiseAJourElementsRequest {
        identifiantDossier: string;
        listeElementsMiseAJour: Array<IElementMaj>;
    }
    interface IElementMaj {
        /**
         * Idws
         */
        idws: string;
    }
    interface IMarcheEPSMaj extends IElementMaj {
        /**
         * Ctfcme_CodeTypeMarche
         */
        codeTypeMarche: string;
        /**
         * Idfcmb_IdMarche
         */
        idMarche: string;
        /**
         * Idfcmp_IdTiersMarcePrinc
         */
        idTiersMarcePrinc: string;
        /**
         * Lbfcmo_LibMoeMarchePrinc
         */
        libelleMoeMarchePrinc: string;
        /**
         * Lbfcom_LibelleObjetMarche
         */
        libelleObjetMarche: string;
        /**
         * Mtfcmd_MontantMarche
         */
        montantMarche: number;
        /**
         * Dtfcma_DateSignMarche
         * Type date au format yyyy-MM-dd
         */
        dateSigneMarche: string;
        /**
         * Dffcme_DateFinMarche
         * Type date au format yyyy-MM-dd
         */
        dateFinMarche: string;
        /**
         * Lnfagr_NomGroupMarche
         */
        nomGroupMarche: string;
        /**
         * Lbfctr_LibLieuExecTravaux
         */
        libelleLieuExecTravaux: string;
        /**
         * Nxfctr_NumTranMarche
         */
        numeroTranMarche: string;
        /**
         * Nxfclo_NumLotMarche
         */
        numeroLotMarche: string;
        /**
         * Idfamp_refCautionPrincipale
         */
        refCautionPrincipale: string;
        /**
         * Dtfcmp_dateEmisCautionPrinc
         * Type date au format yyyy-MM-dd
         */
        dateEmisCautionPrinc: string;
        /**
         * Mtfccp_montantCautionPrinc
         */
        montantCautionPrinc: number;
        /**
         * Cdfadv_codeDevise
         */
        codeDevise: string;
    }
    interface ISuiviEditionDocumentMaj extends IElementMaj {
        /**
         * codeHistorisationDocument
         */
        codeHistorisationDocument: number;
        /**
         * Hefisd_DateSignatureDocument
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDocument: string;
        /**
         * ListeIdentifiantPersonne
         */
        listeIdentifiantPersonne: Array<string>;
    }
    interface IButLocatifMaj extends IElementMaj {
        /**
         * Cdfopl_IndicPretTrnsLocf
         */
        indicePretTransfertLocf: boolean;
        /**
         * Nufofg_NumeDecsFavrGlbl
         */
        numeroDecisionFavrGlbl: number;
        /**
         * Dtfodf_DateDecsFavrLoct
         * Type date au format yyyy-MM-dd
         */
        dateDecisionFavrLoct: string;
        /**
         * Cdfofg_IndicDecsGlblFavr
         */
        indiceDecisionGlblFavr: boolean;
        /**
         * Dtfocl_DateConvLoct
         * Type date au format yyyy-MM-dd
         */
        dateConventionLoct: string;
        /**
         * Cdfofi_NatrAvtgFisc
         */
        natureAvantageFiscal: string;
        /**
         * Mtfofi_MtAvtgFisc
         */
        montantAvantageFiscal: number;
        /**
         * Mtfogl_MtFrsAnnlGestLogm
         */
        montantFrsAnnulationGestionLogement: number;
        /**
         * Mtfoel_MtFrsAnnlEntnLogm
         */
        montantFrsAnnulationEntnLogement: number;
        /**
         * Mtfofo_MtTaxeFonc
         */
        montantTaxeFonc: number;
        /**
         * Cdfolg_PresServVacnLogm
         */
        presServiceVacnLogement: boolean;
        /**
         * Cdfoli_PresUneAssrLoyeImpe
         */
        presUneAssuranceLoyeImpe: boolean;
        /**
         * Mtfolp_MtAnnuLoyePerc
         */
        montantAnnuLoyePerc: number;
    }
    interface ISoulteFinanceeMaj extends IElementMaj {
        /**
         * Mtfoac_MtSoul
         */
        montantSoul: number;
        /**
         * Ctfmpt_PermDetrSiSoulFaitSuiteDivo
         */
        permDetrSiSoulFaitSuiteDivo: boolean;
        /**
         * Txfapo_PctPrprOrig
         */
        pourcentageProprietaireOrigine: number;
        /**
         * Mtfmvc_ValrActvCorrValrBienOrig
         */
        valeurActiviteCorrValeurBienOrigine: number;
        /**
         * Nbfosh_SurfHabtBienSous
         */
        surfHabitationBienSous: number;
        /**
         * Dtfoac_DateAcqsBienSous
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBienSous: string;
    }
    interface IBatimentHabitableFinanceMaj extends IElementMaj {
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Nbfosa_SurfAnnx
         */
        surfAnnx: number;
        /**
         * Mtfoac_CoutAcqsBatmHabt
         */
        coutAcqsBatimentHabitation: number;
        /**
         * Ctfopm_CodePrixMarcBale2
         */
        codePrixMarcheBale2: number;
        /**
         * Mtfomf_MtMoblFinn
         */
        montantMoblFinancier: number;
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Dtfaoc_DateAcqsBatmHabt
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBatimentHabitation: string;
        /**
         * Dtfoco_DateConstBatmHabt
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentHabitation: string;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * Nbfolo_NbLogmConst
         */
        nombreLogementConstruction: number;
        /**
         * Nbfwpp_NbPiecPrncConst
         */
        nombrePiecePrincipalConstruction: number;
        /**
         * Ctfmoi_TypeLogm
         */
        typeLogement1: number;
    }
    interface IConstructionFinanceeMaj extends IElementMaj {
        /**
         * Mtfoco_CoutConstFinn
         */
        coutConstructionFinancier: number;
        /**
         * Dtfoac_DateDebtConst
         * Type date au format yyyy-MM-dd
         */
        dateDebutConstruction: string;
        /**
         * Dffotr_DateFinConst
         * Type date au format yyyy-MM-dd
         */
        dateFinConstruction: string;
        /**
         * Mtfotm_CoutTrvxAChrgMoa
         */
        coutTravauxAChargeMoa: number;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Ctfmcc_TypeContConst
         */
        typeContratConstruction: number;
        /**
         * Cdfwti_TypeImeu
         */
        typeImeu: number;
        /**
         * Cdfoga_PresUneGarnAcheTrvx
         */
        presUneGarantieAcheTravaux: number;
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Nbfosa_SurfAnnx
         */
        surfAnnx: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * Nbfolo_NbLogmConst
         */
        nombreLogementConstruction: number;
        /**
         * Nbfwpp_NbPiecPrncConst
         */
        nombrePiecePrincipalConstruction: number;
        /**
         * Ctfmoi_TypeLogm
         */
        typeLogement1: number;
    }
    interface ITerrainSousJacentMaj extends IBienSousJacentMaj {
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfoft_TerrEstFinnParCred
         */
        terrEstFinancierParCredit: number;
        /**
         * Dtfoat_DateEntrPtrmDateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateEntrPatrimoineDateAcqs: string;
        /**
         * MtLoyeParMois
         */
        montantLoyeParMois: number;
        /**
         * Ctfmma_ModeAcqsTerr
         */
        modeAcqsTerr: number;
    }
    interface IBienSousJacentMaj extends IElementMaj {
        /**
         * Ctfmma_ModeAcqsBien
         */
        modeAcqsBien: number;
        /**
         * Mkfmct_CrdBienSjac
         */
        crdbienSousJacent: number;
        /**
         * Dtfoat_DateEntrCaptDateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateEntrCapitalDateAcqs: string;
        /**
         * Ctfogp_ModeFinn
         */
        modeFinancier: number;
        /**
         * Cdfcni_TypeObjtComl
         */
        typeObjetCommercialisation: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Cnfcng_NatrGarnt
         */
        natureGarnt: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
    }
    interface ITravauxFinancesMaj extends IElementMaj {
        /**
         * Mtfotr_CoutTrvx
         */
        coutTravaux: number;
        /**
         * Dffotr_DateFinTrvx
         * Type date au format yyyy-MM-dd
         */
        dateFinTravaux: string;
        /**
         * Nbfose_SurfHabtCree
         */
        surfHabitationCree: number;
        /**
         * Cdfoig_TypeTrvxCadrEcpt
         */
        typeTravauxCadreEcpt: number;
        /**
         * Dtfoco_DateConstBatmSjac
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentSousJacent: string;
        /**
         * Nbfosh_SurfHabtBatmSjac
         */
        surfHabitationBatimentSousJacent: number;
        /**
         * Dtfoac_DateAcqsBatmSjac
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBatimentSousJacent: string;
        /**
         * Ctfmoi_TypeLogmBatmSous
         */
        typeLogementBatimentSous: number;
        /**
         * Nbfolo_NbreLogmBatmSous
         */
        nbreLogementBatimentSous: number;
        /**
         * Caftte_TypeEcoPtz
         */
        typeEcoPtz: number;
        /**
         * Mtfap6_MontantEcoPtzInitial
         */
        montantEcoPtzInitial: number;
        /**
         * Dtftde_DateCreationEcoPtzInitial
         * Type date au format yyyy-MM-dd
         */
        dateCreationEcoPtzInitial: string;
        /**
         * RealisationTravaux
         */
        realisationTravaux: number;
    }
    interface ITerrainFinanceMaj extends IElementMaj {
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
        /**
         * Dtfaot_DateAcqsTerr
         * Type date au format yyyy-MM-dd
         */
        dateAcqsTerr: string;
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfoft_CodeFinnTerr
         */
        codeFinancierTerr: number;
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
    }
    interface IDossierMaj extends IElementMaj {
        /**
         * Dgfano_DateHorzProj
         * Type date au format yyyy-MM-dd
         */
        dateHorizonProjet: string;
        /**
         * Cdfiei_CodeImprParExprVers
         */
        codeImprParExpressionVersement: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Cdfado_CodeVisbInstr
         */
        codeVisbInstruction: number;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Cifoli_CodeLivrnImme
         */
        codeLivrnImme: boolean;
        /**
         * Nofaac_NumeAccrCmps
         */
        numeroAccrCmps: number;
        /**
         * Cnfaeg_EnggRevc
         */
        engagementRevc: number;
        /**
         * Dtfasp_DateSignPret
         * Type date au format yyyy-MM-dd
         */
        dateSignePret: string;
        /**
         * Dtfisy_DateTrt
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * Idfccp_IdntConvPres
         */
        idConventionPres: string;
        /**
         * Idfipp_IdntPres
         */
        idPres: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Cefapd_CodeEttPlns
         */
        codeEtatPlns: number;
        /**
         * Cdfaar_CodeApplAnlsRisq
         */
        codeApplicationAnlsRisque: boolean;
        /**
         * Ctfacf_CodeTyplCadrFisc
         */
        codeTypologieCadreFiscal: string;
        /**
         * Cdfadv_CdeDevs
         */
        cdeDevise: string;
        /**
         * Cifcsb_CodeLevrSecrBanc
         */
        codeLevrSecrBancaire: number;
        /**
         * Dtfaro_DateRecpOffrParClnt
         * Type date au format yyyy-MM-dd
         */
        dateRecuperationOffreParClient: string;
        /**
         * Cdfdrg_ModeRegl
         */
        modeRegle: string;
        /**
         * Cdfbve_ModeReglVerst
         */
        modeRegleVersement: string;
        /**
         * Nufpr1_NumeCpteSecoPrel
         */
        numeroCompteSecoPrel: string;
        /**
         * Nufddt_DomcTresCpteSeco
         */
        domiciliationTresCompteSeco: string;
        /**
         * Dtfart_DateLimtRetrEmprLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardEmpruntLoiConsommation: string;
        /**
         * Idfaex_IdntExtnDoss
         */
        idExterneDossier: string;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Cdfafc_CodeAuthCont
         */
        codeAuthentiqueContrat: boolean;
        /**
         * Mtfcon_MtVerstCnvn
         */
        montantVersementCnvn: number;
        /**
         * Txaufi_PctFinn
         */
        pourcentageFinancier: number;
        /**
         * Idfano_IdntRedcActe
         */
        idReductionActe: string;
        /**
         * Idfaoc_IdntOrigDemn
         */
        idOrigineDemande: string;
        /**
         * Lbfaoc_LiblOrigDemn
         */
        libelleOrigineDemande: string;
        /**
         * Dgfapn_DatePrevSignNotr
         * Type date au format yyyy-MM-dd
         */
        datePrevSigneNotaire: string;
        /**
         * Nufadn_RefeExtnDoss
         */
        referenceExterneDossier: string;
        /**
         * Idfas5_ElemStrc5
         */
        elementStructure5: string;
        /**
         * Idfas6_ElemStrc6
         */
        elementStructure6: string;
        /**
         * Llfic1_CritRechAppli1
         */
        critereRechercheApplication1: string;
        /**
         * Llfic2_CritRechAppli2
         */
        critereRechercheApplication2: string;
        /**
         * Llfic3_CritRechAppli3
         */
        critereRechercheApplication3: string;
        /**
         * Llfic4_CritRechAppli4
         */
        critereRechercheApplication4: string;
        /**
         * Llfic5_CritRechAppli5
         */
        critereRechercheApplication5: string;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Idfaei_IdntAgntInstrDoss
         */
        idAgentInstructionDossier: string;
        /**
         * Idfada_IdntAgntPourDecsConf
         */
        idAgentPourDecisionConf: string;
        /**
         * Idfabi_IdntEnttPourTrnfBo
         */
        idEntitePourTransfertBo: string;
        /**
         * BlocNotes
         */
        blocNotes: string;
        /**
         * Ctfcse_CodeEtpeSiml
         */
        codeEtapeSimulation: number;
        /**
         * Idfifd_NumeFichPres
         */
        numeroFichPres: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Cdficd_CodeDevCredDev
         */
        codeDevCreditDev: string;
        /**
         * Idfics_NumCompteDev
         */
        numeroCompteDev: string;
        /**
         * Ctfimr_ModeReglDev
         */
        modeRegleDev: string;
        /**
         * Ctfimv_ModReglVerstDev
         */
        modRegleVersementDev: string;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Defiag_DateEnvConvAG
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiConventionAG: string;
        /**
         * Idfdma_ReferenceMandat
         */
        referenceMandat: string;
        /**
         * Dgfdms_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * Cifpcd_OuvCpteSupEchCred
         */
        ouvertureCompteSupEchCredit: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * CodeTypeEditionAutorisee
         */
        codeTypeEditionAutorisee: string;
    }
    interface IInterditBancaireMaj extends IElementMaj {
        /**
         * Cdfpbd_CodeRepnBdf
         */
        codeRepnBDF: number;
        /**
         * Cdfpfi_CodeRepnFicp
         */
        codeRepnFicp: number;
        /**
         * Ctfpbd_CodeTypeRepnBdf
         */
        codeTypeRepnBDF: string;
        /**
         * Ctfpfi_CodeTypeRepnFicp
         */
        codeTypeRepnFicp: string;
        /**
         * Dtfpbd_DateApplBdf
         * Type date au format yyyy-MM-dd
         */
        dateApplicationBDF: string;
        /**
         * Dtfpfi_DateApplFicp
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFicp: string;
        /**
         * Lbfpbd_LiblRepnBdf
         */
        libelleRepnBDF: string;
        /**
         * Lbfpfi_LiblRepnFicp
         */
        libelleRepnFicp: string;
        /**
         * Cdfmas_CodeArreSurSalr
         */
        codeArreSurSalr: number;
        /**
         * Dtfpfb_DateApplFbe
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFbe: string;
        /**
         * Cdfpfb_CodeRepnFbe
         */
        codeRepnFbe: number;
        /**
         * Cdfmln_CodePresListnSurCntrTechRegn
         */
        codePresListnSurCntrTechniqueRegn: number;
        /**
         * Lbfmln_LiblListnSurCntrTechRegn
         */
        libelleListnSurCntrTechniqueRegn: string;
        /**
         * Cbfpfb_CodeCottFibenDirg
         */
        codeCotisationFibenDirg: string;
    }
    interface IActiviteMaj extends IElementMaj {
        /**
         * Cdfmcs_CodeClssRisqCsp
         */
        codeClasseRisqueCSP: number;
        /**
         * Dtfmcs_DateEfftCsp
         * Type date au format yyyy-MM-dd
         */
        dateEffetCSP: string;
        /**
         * Dtfmea_DateEmbc
         * Type date au format yyyy-MM-dd
         */
        dateEmbc: string;
        /**
         * Ctfmce_CodeTypeContEmbc
         */
        codeTypeContratEmbc: number;
        /**
         * Lbfmpl_RaisSoclEmplr
         */
        raisonSocialeEmplr: string;
        /**
         * Cpfmpl_CodePostEmplr
         */
        codePosteEmplr: string;
        /**
         * Lofmpl_CodeApNEmplr
         */
        codeApNEmplr: string;
        /**
         * Cdfmdo_CodeSalrDomcCe
         */
        codeSalrDomiciliationCE: number;
        /**
         * Cdfmsa_CodePresActvSalr
         */
        codePresActiviteSalr: number;
        /**
         * Cdfmsu_CodePresSuivPers
         */
        codePresSuivantPersonne: number;
        /**
         * Nbfmkm_NbKilmEtrLogmTrvl
         */
        nombreKilmEntreLogementTrvl: number;
        /**
         * Dffmea_DateFinCdd
         * Type date au format yyyy-MM-dd
         */
        dateFinCdd: string;
        /**
         * Ctfmsa_CodeSectActv
         */
        codeSecteurActivite: number;
    }
    interface IRefusAssuranceExterneMaj extends IElementMaj {
        /**
         * Lbfcia_CompagnieAssurance
         */
        compagnieAssurance: string;
        /**
         * Lbfrcc_ReferenceContrat
         */
        referenceContrat: string;
        /**
         * Ddfddr_DateReceptionDemande
         * Type date au format yyyy-MM-dd
         */
        dateReceptionDemande: string;
        /**
         * Llfprp_RolePersonne
         */
        rolePersonne: string;
        /**
         * Lvfdmr_MotifRefus
         */
        motifRefus: string;
    }
    interface IGarantMaj extends IElementMaj {
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmpf_NbPersGrpe
         */
        nombrePersonneGrpe: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * Ctfmli_TypeLienEtrLesPers
         */
        typeLienEntreLesPersonne: number;
        /**
         * Lbfmgp_NomGrpe
         */
        nomGrpe: string;
        /**
         * Lbfmae_AgsEnfn
         */
        ageEnfant: Array<number>;
        /**
         * Dtfmrp_DateDernRapp
         * Type date au format yyyy-MM-dd
         */
        dateDernierRapp: string;
        /**
         * Nbfma_AnneNaisEnfn
         */
        anneNaisEnfant: Array<number>;
        /**
         * Cdfmec_CodeEmplrComun
         */
        codeEmplrComun: number;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmac_AncnChrgLiesAOperImmb
         */
        ancnChargeLiesAOperImmobilier: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Nbfmvo_NbVoit
         */
        nombreVoiture: number;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
    }
    interface IDonneesCreditMaj {
        /**
         * IdCreditModifie
         */
        idCreditModifie: string;
        /**
         * MontantCreditModifie
         */
        montantCreditModifie: string;
    }
    interface ICreditTauxFixeMaj {
        /**
         * ReferenceIndiceCredit
         */
        referenceIndiceCredit: string;
        /**
         * TauxFixeCredit
         */
        tauxFixeCredit: string;
    }
    interface IOutilMaj {
        /**
         * MarqueOutil
         */
        marqueOutil: string;
        /**
         * TypeOutil
         */
        typeOutil: string;
        /**
         * DateLivraisonOutil
         * Type date au format yyyy-MM-dd
         */
        dateLivraisonOutil: string;
        /**
         * SerieOutil
         */
        serieOutil: string;
        /**
         * PrixOutil
         */
        prixOutil: string;
        /**
         * VendIntituleOutil
         */
        vendIntituleOutil: string;
        /**
         * VendCpltIntOutil
         */
        vendCpltIntituleOutil: string;
        /**
         * VendAdrOutil
         */
        vendAdresseOutil: string;
        /**
         * VendCpltAdrOutil
         */
        vendCpltAdresseOutil: string;
        /**
         * VendCPOutil
         */
        vendCPOutil: string;
        /**
         * VendVilleOutil
         */
        vendVilleOutil: string;
        /**
         * AdrOutil
         */
        adresseOutil: string;
        /**
         * CpltAdrOutil
         */
        cpltAdresseOutil: string;
        /**
         * CPOutil
         */
        cPOutil: string;
        /**
         * VilleOutil
         */
        villeOutil: string;
        /**
         * DeplacementOutil
         */
        deplacementOutil: boolean;
    }
    interface IPretDeviseMaj {
        /**
         * IdentifiantProduitPretDevise
         */
        identifiantProduitPretDevise: string;
        /**
         * NumCreditPlanPretDevise
         */
        numeroCreditPlanPretDevise: string;
        /**
         * TypePretDevise
         */
        typePretDevise: string;
        /**
         * IdggiPretDevise
         */
        idggiPretDevise: string;
        /**
         * CdngPretDevise
         */
        cdngPretDevise: string;
        /**
         * FraisEnDevises
         */
        fraisEnDevises: string;
        /**
         * DevisePretDevise
         */
        devisePretDevise: string;
        /**
         * FraisContrePartiePretDevise
         */
        fraisContrePartiePretDevise: string;
    }
    interface IDonneesCautionPersonneMoraleMaj {
        /**
         * RepresCautionPersoMorale
         */
        represCautionPersoMorale: string;
        /**
         * AgissantQualitéCaution
         */
        agissantQualiteCaution: string;
        /**
         * AgissantVertuCaution
         */
        agissantVertuCaution: string;
        /**
         * Agissant3Caution
         */
        agissant3Caution: string;
        /**
         * Agissant4Caution
         */
        agissant4Caution: string;
        /**
         * Agissant5Caution
         */
        agissant5Caution: string;
    }
    interface ISaisiesComplementaireMaj extends IElementMaj {
        /**
         * NomPersonneMorale
         */
        nomPersonneMorale: string;
        /**
         * NombreCreditsAModifierACA
         */
        nombreCreditsAModifierACA: number;
        /**
         * ListeDonneesCreditAModifierACA
         */
        listeDonneesCreditAModifierACA: Array<IDonneesCreditMaj>;
        /**
         * An1AttestationPTZ
         */
        an1AttestationPTZ: boolean;
        /**
         * An2AttestationPTZ
         */
        an2AttestationPTZ: boolean;
        /**
         * An3AttestationPTZ
         */
        an3AttestationPTZ: boolean;
        /**
         * An4AttestationPTZ
         */
        an4AttestationPTZ: boolean;
        /**
         * An5AttestationPTZ
         */
        an5AttestationPTZ: boolean;
        /**
         * An6AttestationPTZ
         */
        an6AttestationPTZ: boolean;
        /**
         * An7AttestationPTZ
         */
        an7AttestationPTZ: boolean;
        /**
         * An8AttestationPTZ
         */
        an8AttestationPTZ: boolean;
        /**
         * An9AttestationPTZ
         */
        an9AttestationPTZ: boolean;
        /**
         * AnXAttestationPTZ
         */
        anXAttestationPTZ: boolean;
        /**
         * AnXIAttestationPTZ
         */
        anXIAttestationPTZ: boolean;
        /**
         * AnIIIAttestationPTZ
         */
        anIIIAttestationPTZ: boolean;
        /**
         * AnIVAttestationPTZ
         */
        anIVAttestationPTZ: boolean;
        /**
         * AnXIVAttestationPTZ
         */
        anXIVAttestationPTZ: boolean;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: boolean;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: boolean;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: boolean;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: boolean;
        /**
         * NomCopropriete
         */
        nomCopropriete: string;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: string;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: string;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: string;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: string;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: string;
        /**
         * EffetCopropriete
         */
        effetCopropriete: string;
        /**
         * ListeCreditTauxFixe
         */
        listeCreditTauxFixe: Array<ICreditTauxFixeMaj>;
        /**
         * ContenuConditionsSuspensives
         */
        contenuConditionsSuspensives: string;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: boolean;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: string;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: boolean;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: string;
        /**
         * PresenceEINonEmprunteur
         */
        presenceEINonEmprunteur: boolean;
        /**
         * LibelleEINonEmprunteur
         */
        libelleEINonEmprunteur: string;
        /**
         * AccordConjointEINonEmprunteur
         */
        accordConjointEINonEmprunteur: boolean;
        /**
         * LibelleConjointEINonEmprunteur
         */
        libelleConjointEINonEmprunteur: string;
        /**
         * DateTransfertBoSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateTransfertBoSuiveuse: string;
        /**
         * DateDispositionFondsSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateDispositionFondsSuiveuse: string;
        /**
         * DateEnvoiNumerisationSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiNumerisationSuiveuse: string;
        /**
         * DateSignatureNotaireSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureNotaireSuiveuse: string;
        /**
         * EditionSuiveuse
         */
        editionSuiveuse: string;
        /**
         * Statut1Suiveuse
         */
        statut1Suiveuse: Array<string>;
        /**
         * Statut2Suiveuse
         */
        statut2Suiveuse: Array<string>;
        /**
         * Statut3Suiveuse
         */
        statut3Suiveuse: Array<string>;
        /**
         * NumeroDossierAssocieSuiveuse
         */
        numeroDossierAssocieSuiveuse: string;
        /**
         * CorbeilleWorkflowSuiveuse
         */
        corbeilleWorkflowSuiveuse: string;
        /**
         * CommentaireSuiveuse
         */
        commentaireSuiveuse: string;
        /**
         * IndexGarantie
         */
        indexGarantie: number;
        /**
         * ExisteAgrementGarantie
         */
        existeAgrementGarantie: boolean;
        /**
         * DateAgrementGarantie
         * Type date au format yyyy-MM-dd
         */
        dateAgrementGarantie: string;
        /**
         * PublierGreffeGarantie
         */
        publierGreffeGarantie: boolean;
        /**
         * ConjointsEmprunteursGarantie
         */
        conjointsEmprunteursGarantie: string;
        /**
         * ConjointsCautionsGarantie
         */
        conjointsCautionsGarantie: string;
        /**
         * DateDebutLigneInvestissement
         * Type date au format yyyy-MM-dd
         */
        dateDebutLigneInvestissement: string;
        /**
         * DateFinLigneInvestissement
         * Type date au format yyyy-MM-dd
         */
        dateFinLigneInvestissement: string;
        /**
         * ATauxFixeLigneInvestissement
         */
        aTauxFixeLigneInvestissement: boolean;
        /**
         * TauxFixeLigneInvestissement
         */
        tauxFixeLigneInvestissement: string;
        /**
         * TauxRevisableLigneInvestissement
         */
        tauxRevisableLigneInvestissement: string;
        /**
         * ReferenceIndiceLigneInvestissement
         */
        referenceIndiceLigneInvestissement: string;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: string;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
        /**
         * NombreOutils
         */
        nombreOutils: number;
        /**
         * AjoutNotices
         */
        ajoutNotices: boolean;
        /**
         * NumeroOrias
         */
        numeroOrias: string;
        /**
         * NombreCreditsAModifier
         */
        nombreCreditsAModifier: number;
        /**
         * ListeDonneesCreditAModifier
         */
        listeDonneesCreditAModifier: Array<IDonneesCreditMaj>;
        /**
         * ListeOutil
         */
        listeOutil: Array<IOutilMaj>;
        /**
         * SousignePouvoirNotaire
         */
        sousignePouvoirNotaire: string;
        /**
         * LibelleEtablissementPouvoirNotaire
         */
        libelleEtablissementPouvoirNotaire: string;
        /**
         * DatePouvoirNotaire
         * Type date au format yyyy-MM-dd
         */
        datePouvoirNotaire: string;
        /**
         * Nom1PouvoirNotaire
         */
        nom1PouvoirNotaire: string;
        /**
         * Nom2PouvoirNotaire
         */
        nom2PouvoirNotaire: string;
        /**
         * Nom3PouvoirNotaire
         */
        nom3PouvoirNotaire: string;
        /**
         * Nom4PouvoirNotaire
         */
        nom4PouvoirNotaire: string;
        /**
         * RibPretDevise
         */
        ribPretDevise: string;
        /**
         * PretDevise
         */
        pretDevise: Array<IPretDeviseMaj>;
        /**
         * MontantMiniDeblocagePretDevise
         */
        montantMinimumDeblocagePretDevise: string;
        /**
         * AccordPrincipe
         */
        accordPrincipe: boolean;
        /**
         * Rdv
         */
        rdv: boolean;
        /**
         * Deroulement
         */
        deroulement: boolean;
        /**
         * RaisonCaution
         */
        raisonCaution: string;
        /**
         * RepresentantCaution
         */
        representantCaution: string;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: string;
        /**
         * DatePouvoirCaution
         * Type date au format yyyy-MM-dd
         */
        datePouvoirCaution: string;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: string;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: string;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: string;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: string;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: string;
        /**
         * DateRCSEmprunteurBailleur
         * Type date au format yyyy-MM-dd
         */
        dateRCSEmprunteurBailleur: string;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: string;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: string;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: string;
        /**
         * DatePouvoirEmprunteurPersMorale
         * Type date au format yyyy-MM-dd
         */
        datePouvoirEmprunteurPersonneMorale: string;
        /**
         * PouvoirEmprunteurPersMorale
         */
        pouvoirEmprunteurPersonneMorale: string;
        /**
         * ListeDonneesCautionPersonneMorale
         */
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleMaj>;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: string;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: string;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: string;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: string;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: string;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: string;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: string;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: string;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: string;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: string;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: string;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: string;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: string;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: string;
        /**
         * RepresPersoMoraleAssurance
         */
        represPersoMoraleAssurance: string;
        /**
         * AgissantQualitePersoMoraleAssurance
         */
        agissantQualitePersoMoraleAssurance: string;
        /**
         * Vertu1PersoMoraleAssurance
         */
        vertu1PersoMoraleAssurance: string;
        /**
         * Vertu2PersoMoraleAssurance
         */
        vertu2PersoMoraleAssurance: string;
        /**
         * DatePourvoirPersoMoraleAssurance
         * Type date au format yyyy-MM-dd
         */
        datePourvoirPersoMoraleAssurance: string;
        /**
         * Vertu4PersoMoraleAssurance
         */
        vertu4PersoMoraleAssurance: string;
        /**
         * CompoOffrePersoMoraleAssurance
         */
        compositionOffrePersoMoraleAssurance: string;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: string;
        /**
         * ReservesRedacteur
         */
        reservesRedacteur: string;
        /**
         * RaisonSocialePersMoraleNantissement
         */
        raisonSocialePersonneMoraleNantissement: string;
        /**
         * RepresPersMoraleNantissement
         */
        represPersonneMoraleNantissement: string;
        /**
         * EnQualitePersMoraleNantissement
         */
        enQualitePersonneMoraleNantissement: string;
        /**
         * Vertu1PersMoraleNantissement
         */
        vertu1PersonneMoraleNantissement: string;
        /**
         * Vertu2PersMoraleNantissement
         */
        vertu2PersonneMoraleNantissement: string;
        /**
         * VilleTribunal
         */
        villeTribunal: string;
    }
    interface IAgentMaj extends IElementMaj {
    }
    interface IProjetNonImmobilierMaj extends IProjetMaj {
        /**
         * DescProjNonImmb
         */
        descriptionProjetNonImmobilier: string;
        /**
         * Dtfbso_DateMiseDispFond
         * Type date au format yyyy-MM-dd
         */
        dateMiseDispFond: string;
    }
    interface IProjetImmobilierMaj extends IProjetMaj {
        /**
         * Cifopa_DefnSiEmprEstPrm
         */
        defnSiEmpruntEstPrm: boolean;
        /**
         * Cofopz_CodeCondDergPourPtz
         */
        codeConditionDerogationPourPtz: number;
        /**
         * Cdfose_CodeBatmBassConso
         */
        codeBatimentBassConsommation: number;
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cdfomo_CodeModlOccpLogm
         */
        codeModeleOccpLogement: number;
        /**
         * Ctfopm_CodePrixMarc
         */
        codePrixMarche: number;
        /**
         * Ctfmmc_CodeTypeMarc
         */
        codeTypeMarche: number;
        /**
         * Ctfmpo_TypePrpr
         */
        typeProprietaire: number;
        /**
         * Txfmpa_PctPrprApreOper
         */
        pourcentageProprietaireApreOper: number;
        /**
         * Mgfovh_MtInscHypt
         */
        montantInscHypotheque: number;
        /**
         * Cdfqem_QualEmplaProj
         */
        qualEmplaProjet: number;
        /**
         * ZoneReglRobnBien
         */
        zoneRegleRobnBien: string;
        /**
         * ZonePlusLogm
         */
        zonePlusLogement: string;
        /**
         * Cdfozg_CodeZoneGegrRegl
         */
        codeZoneGegrRegle: number;
        /**
         * Cdfizf_CodeZoneFrncSins
         */
        codeZoneFrncSinistre: number;
        /**
         * Cdfwti_TypeImeu
         */
        typeImeu: number;
        /**
         * Idfapi_IdntPrgmImmb
         */
        idProgrammeImmobilier: string;
        /**
         * Idfaap_IdntAccrPourInst
         */
        idAccrPourInstruction: string;
        /**
         * Cifcep_IndicemssNouvPartScpi
         */
        indicemssNouvPartScpi: number;
        /**
         * Ctfcve_CodeTypeMarcPourVent
         */
        codeTypeMarchePourVent: number;
        /**
         * Idfove_NomSoceGest
         */
        nomSoceGestion: string;
        /**
         * Cdfizf_CentreBourgRural
         */
        centreBourgadeRural: boolean;
    }
    interface IProjetEPSMaj extends IProjetMaj {
    }
    interface IProjetMaj extends IElementMaj {
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Cdfcon_NegcEffcParNotr
         */
        negocieEffcParNotaire: boolean;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Cdfomp_CodeMiseOeuvrProjPro
         */
        codeMiseOeuvrProjetPro: number;
        /**
         * Cdfwrl_IndicAchtRvnt
         */
        indiceAchtRvnt: boolean;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: number;
        /**
         * Ctfgce_CritElgGarFEI
         */
        critereElgGarFEI: string;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Ctfoan_TypeAcqs
         */
        typeAcqs: number;
        /**
         * Ctfonu_NbUnteContPrgmImmb
         */
        nombreUnteContratProgrammeImmobilier: string;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Lbfoof_DescObjt
         */
        descriptionObjet: string;
        /**
         * CodePaysLocs
         */
        codePaysLocs: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * Mofcpz_CoutRelOper
         */
        coutRelOper: number;
        /**
         * Mtfcra_MtRachCren
         */
        montantRachCren: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Mtfofd_MtFrsDivr
         */
        montantFrsDivr: number;
        /**
         * Mtfofn_CoutFrsNotr
         */
        coutFrsNotaire: number;
        /**
         * Mtfoho_CoutTotlObjtHt
         */
        coutTotalObjetHt: number;
        /**
         * Mtfott_CoutTotlObjtTtc
         */
        coutTotalObjetTTC: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * bFinancementTCC
         */
        bFinancementTCC: boolean;
    }
    interface IComplementEPSMaj extends IElementMaj {
        /**
         * Cnfcnb_NatrGarnEps
         */
        natureGarantieEPS: string;
        /**
         * Idfapa_RefrExtnDossParn
         */
        referenceExterneDossierParent: string;
        /**
         * Ddfaen_DateDebuEngg
         * Type date au format yyyy-MM-dd
         */
        dateDebutEngagement: string;
        /**
         * Dffaen_DateFinEngg
         * Type date au format yyyy-MM-dd
         */
        dateFinEngagement: string;
        /**
         * Mgfggo_MtEnggGlblOrig
         */
        montantEngagementGlblOrigine: number;
        /**
         * Idfagl_IdntEnggGlbl
         */
        idEngagementGlbl: string;
        /**
         * Cifcrg_CodeIndRetrocessionEPS
         */
        codeIndicateurRetrocessionEPS: number;
        /**
         * Cifcrh_CodeIndicRadiationAutoEPS
         */
        codeIndiceRadiationAutomatiqueEPS: number;
        /**
         * Cifcri_CodeIndicEPSAmortissable
         */
        codeIndiceEPSAmortissable: number;
        /**
         * Cifeng_CodeEngagementGlobal
         */
        codeEngagementGlobal: number;
        /**
         * Cnfcnh_CodeTypeObjetEPS
         */
        codeTypeObjetEPS: string;
        /**
         * Cofcca_CodeCanalDistributionEPS
         */
        codeCanalDistributionEPS: string;
        /**
         * Cofcsi_CodeSignatureElectroniqueEPS
         */
        codeSignatureElectroniqueEPS: string;
        /**
         * Dtfcdd_DateDecisionEPS
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEPS: string;
        /**
         * Idfaei_IdEntiteInstructeur
         */
        idEntiteInstructeur: string;
        /**
         * Idfagd_CodeAgentDecideur
         */
        codeAgentDecideur: string;
        /**
         * Idfcma_IdModeleActeEPS
         */
        idModeleActeEPS: string;
        /**
         * Idfcs1_IdEDSSignataire
         */
        idEDSSignataire: string;
        /**
         * Idfcs2_IdEDSSignataire
         */
        idEDSSignataire1: string;
        /**
         * Mtfcad_MontantAssietteCommission
         */
        montantAssietteCommission: number;
        /**
         * Nxfcse_NumSignatureElectroniqueEPS
         */
        numeroSignatureElectroniqueEPS: string;
        /**
         * Idfcfa_IdFamilleEPS
         */
        idFamilleEPS: string;
        /**
         * Dtfcru_DateRadiationEPS
         * Type date au format yyyy-MM-dd
         */
        dateRadiationEPS: string;
        /**
         * Idfaic_IdPreuveICG
         */
        idPreuveICG: string;
        /**
         * Idfapc_IdClientWeb
         */
        idClientWeb: string;
        /**
         * Lbfauc_LibelleUtilisateurWeb
         */
        libelleUtilisateurWeb: string;
        /**
         * Lbfas1_LibelleCiviliteSignataire1
         */
        libelleCiviliteSignataire1: string;
        /**
         * Lbfas3_LibelleCiviliteSignataire2
         */
        libelleCiviliteSignataire2: string;
        /**
         * Lbfas4_LibelleFonctionSignataire2
         */
        libelleFonctionSignataire2: string;
        /**
         * Lbfas2_LibelleFonctionSignataire1
         */
        libelleFonctionSignataire1: string;
        /**
         * Cdfcew_CodeEtatDossierEPSWeb
         */
        codeEtatDossierEPSWeb: string;
    }
    interface IControleManuelMaj extends IPieceMaj {
        /**
         * Llfccm_CommtCtrl
         */
        commentaireControle: string;
    }
    interface IPieceAgenceMaj extends IPieceMaj {
    }
    interface IPieceClientMaj extends IPieceMaj {
    }
    interface IPieceMaj extends IElementMaj {
        /**
         * Cdfaju_StttPiecCtrl
         */
        stttPieceControle: number;
    }
    interface ITresorerieFinanceeMaj extends IBienDetailleMaj {
        /**
         * Idfove_IdntVndr
         */
        idVendeur: string;
    }
    interface IBienEquipementProMaj extends IBienDetailleMaj {
    }
    interface IBienDetailleMaj extends IElementMaj {
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
        /**
         * Mtfoac_CoutAcqsComlInds
         */
        coutAcqsCommercialisationInds: number;
        /**
         * Mtfoai_CoutAcqsHabt
         */
        coutAcqsHabitation: number;
        /**
         * Mtfoco_CoutConst
         */
        coutConstruction: number;
        /**
         * Mtfotr_CoutTrvxAmen
         */
        coutTravauxAmen: number;
        /**
         * Mtfopp_CoutPasPort
         */
        coutPasPort: number;
        /**
         * Mtfofc_CoutFondComc
         */
        coutFondComc: number;
        /**
         * Mtfomo_CoutEqpmMte
         */
        coutEqpmMte: number;
        /**
         * Mtfovp_CoutVehcPrfs
         */
        coutVehcPrfs: number;
        /**
         * Mtfops_CoutPartSocl
         */
        coutPartSociale: number;
        /**
         * Mtfofg_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Mtfofn_MtFrsNotr
         */
        montantFrsNotaire: number;
        /**
         * Mtfost_CoutStck
         */
        coutStck: number;
        /**
         * Mtfosc_CoutStckHorsInstr
         */
        coutStckHorsInstruction: number;
        /**
         * Mtfobf_CoutBfr
         */
        coutBfr: number;
        /**
         * Mtfobc_CoutBfrHorsInstr
         */
        coutBfrHorsInstruction: number;
        /**
         * Mtfodv_CoutAutrFrsPrfs
         */
        coutAutreFrsPrfs: number;
        /**
         * Mtfodc_CoutAutrFrsPrfsHorsInstr
         */
        coutAutreFrsPrfsHorsInstruction: number;
        /**
         * Mcfotv_MtTvaFinn
         */
        montantTVAFinancier: number;
        /**
         * Mtfora_MtRachCren
         */
        montantRachCren: number;
        /**
         * Mtfods_CoutPartSoce
         */
        coutPartSoce: number;
    }
    interface IAutoMotoMaj extends IBienConsoFinanceMaj {
        /**
         * Ctfmov_TypeMotr
         */
        typeMotr: number;
        /**
         * Lbfmov_ModeVehc
         */
        modeVehc: string;
        /**
         * Lbfqov_MarqVehc
         */
        marqVehc: string;
        /**
         * Ctfmvh_TypeVehc
         */
        typeVehc: number;
        /**
         * Ctfmgv_GnreVehc
         */
        gnreVehc: number;
        /**
         * Cdfmpv_PuisFisc
         */
        puisFiscal: number;
        /**
         * Ddfmpc_DatePrmeMiseCircl
         * Type date au format yyyy-MM-dd
         */
        datePrmeMiseCircl: string;
    }
    interface IBienConsoFinanceMaj extends IElementMaj {
        /**
         * Idfove_IdntVndr
         */
        idVendeur: string;
        /**
         * Mgfovh_MtInscHypt
         */
        montantInscHypotheque: number;
    }
    interface IEvenementMaj extends IElementMaj {
        /**
         * Lbfamd_MessEnrgSurEvenDoss
         */
        messEnregistrementSurEvenDossier: string;
        /**
         * Dtfaee_DateEfftEven
         * Type date au format yyyy-MM-dd
         */
        dateEffetEven: string;
        /**
         * Idfase_IdntEnttSaisEven
         */
        idEntiteSaisieEven: string;
        /**
         * Lbfase_LiblEnttSaisEven
         */
        libelleEntiteSaisieEven: string;
        /**
         * Cefhgc_CodeIndicGestCentEven
         */
        codeIndiceGestionCentralEven: number;
        /**
         * Cdfabo_ElemStrcGestBackCent
         */
        elementStructureGestionBackCentral: string;
        /**
         * Idfce3_IdntCaisAsscBackCent
         */
        idCaisseAssuranceBackCentral: number;
    }
    interface IBlocNotesMaj extends IElementMaj {
        /**
         * ContBlc
         */
        contratBlocNote: string;
    }
    interface ICreditPalierProgressionMaj extends IElementMaj {
        /**
         * Txfcam_ValrTxPrgrAmrt
         */
        valeurTauxProgressifAmortissement: number;
        /**
         * Cdfdcg_CodeIndxTxPrgrAmrt
         */
        codeIndexTauxProgressifAmortissement: number;
        /**
         * Npfca1_NbPerdDureePalrPrgr
         */
        nombrePeriodeDureePalierProgressif: number;
    }
    interface IComplementPhasePretCombineMaj extends IElementMaj {
        /**
         * Mafaqa_MtAmrt
         */
        montantAmortissement: number;
        /**
         * Mkfaif_MtInfine
         */
        montantInfine: number;
        /**
         * Ctfark_ModeSaisReprCapt
         */
        modeSaisieReprCapital: number;
        /**
         * Tafaqa_QuotAmrt
         */
        quotientAmortissement: number;
    }
    interface ICreditPhaseAmortissementMaj extends ICreditPhaseMaj {
        /**
         * Txfcqa_QuotAmrt
         */
        quotientAmortissement: number;
        /**
         * Txfaom_TxConstPhasCred
         */
        tauxConstructionPhaseCredit: number;
        /**
         * Mefhcd_MtEchmOptm
         */
        montantEchmOptimisation: number;
    }
    interface ICreditPhaseDiffereAmortissementMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhaseDiffereTotalMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhaseMobilisationMaj extends ICreditPhaseMaj {
    }
    interface ICreditPhasePrefinancementMaj extends ICreditPhaseMaj {
        /**
         * Cdfppf_CodeRedcDureePref
         */
        codeReductionDureePref: number;
        /**
         * RedcDureePref
         */
        reductionDureePref: boolean;
    }
    interface ICreditPhaseMaj extends IElementMaj {
        /**
         * Capitalisation
         */
        capitalisation: boolean;
        /**
         * Ctfcki_ModeCaptRecvInte
         */
        modeCapitalRecouvrementInterieur: number;
        /**
         * Cdfcki_CodeCaptRecvInte
         */
        codeCapitalRecouvrementInterieur: number;
        /**
         * Ptfcin_CodePerdAsscCalcInte
         */
        codePeriodeAssuranceCalculInterieur: number;
        /**
         * Ptfcam_CodePerdCalcMer
         */
        codePeriodeCalculMER: number;
        /**
         * Npfcph_NbPerdPhas
         */
        nombrePeriodePhase: number;
        /**
         * Pefcph_CodePerdDurePhas
         */
        codePeriodeDurePhase: number;
        /**
         * ValrTxPhas
         */
        valeurTauxPhase: number;
    }
    interface ICreditParamRevisionParPeriodeMaj extends ICreditParamRevisionMaj {
    }
    interface ICreditParamRevisionParPhaseMaj extends ICreditParamRevisionMaj {
    }
    interface ICreditParamRevisionMaj extends IElementMaj {
        /**
         * Nofrji_NumeJeuIndcRevsAsscCred
         */
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        /**
         * Ctfrub_ModeExprButrTxBais
         */
        modeExpressionButoireTauxBaisse: number;
        /**
         * Ctfruh_ModeExprButrTxHaus
         */
        modeExpressionButoireTauxHausse: number;
        /**
         * Tvfru1_ValrButrTxBais
         */
        valeurButoireTauxBaisse: number;
        /**
         * Tvfru2_ValrButrTxHaus
         */
        valeurButoireTauxHausse: number;
    }
    interface ICreditPalierTauxMaj extends IElementMaj {
        /**
         * Txfcpg_TxPrgrEcheSurPalr
         */
        tauxProgressifEcheanceSurPalier: number;
        /**
         * Npfcal_NbPerdDureePalr
         */
        nombrePeriodeDureePalier: number;
    }
    interface ISuiviPlanifieMaj extends IElementMaj {
        /**
         * Ddfarv_DatePremSuiv
         * Type date au format yyyy-MM-dd
         */
        datePremierSuivant: string;
        /**
         * Dtfarv_DateSuivPlnf
         * Type date au format yyyy-MM-dd
         */
        dateSuivantPlafond: string;
        /**
         * Lbfarw_LiblLibrAsscSuiv
         */
        libelleLibrAssuranceSuivant: string;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Npfcrw_NbPerdSuivPlnf
         */
        nombrePeriodeSuivantPlafond: number;
        /**
         * Ptfcrv_CodePerdSuivPlnf
         */
        codePeriodeSuivantPlafond: number;
    }
    interface ICreditModaliteMaj extends IElementMaj {
        /**
         * Idfcmi_IdntModlCalcImpe
         */
        idModeleCalculImpe: string;
        /**
         * Txfdri_TxIndmRembAntc
         */
        tauxIndemniteRemboursementAnticipe: number;
        /**
         * Nofcmc_NumeModlRembAntc
         */
        numeroModeleRemboursementAnticipe: number;
        /**
         * Txfcsr_SurcTxParRappRembAntc
         */
        surcTauxParRappRemboursementAnticipe: number;
        /**
         * Txffmi_TxInteRetdImpe
         */
        tauxInterieurRetardImpe: number;
        /**
         * Mtffmi_MtIndmImpe
         */
        montantIndemniteImpe: number;
        /**
         * Cdfccr_CodeTrtInteIntrSurImpe
         */
        codeTraitementInterieurIntrSurImpe: number;
    }
    interface ICompteCourantMaj extends IElementMaj {
        /**
         * Mtfasc_MtHyptCapt
         */
        montantHypothequeCapital: number;
        /**
         * Cifcmh_CodeIndicBlcgSaisMtHyptCapt
         */
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
    }
    interface IEmprunteurMaj extends IElementMaj {
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmpf_NbPersGrpe
         */
        nombrePersonneGrpe: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * Ctfmli_TypeLienEtrLesPers
         */
        typeLienEntreLesPersonne: number;
        /**
         * Lbfmgp_NomGrpe
         */
        nomGrpe: string;
        /**
         * Lbfmae_AgsEnfn
         */
        ageEnfant: Array<number>;
        /**
         * Dtfmrp_DateDernRapp
         * Type date au format yyyy-MM-dd
         */
        dateDernierRapp: string;
        /**
         * Nbfma_AnneNaisEnfn
         */
        anneNaisEnfant: Array<number>;
        /**
         * Cdfmec_CodeEmplrComun
         */
        codeEmplrComun: number;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmac_AncnChrgLiesAOperImmb
         */
        ancnChargeLiesAOperImmobilier: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Nbfmvo_NbVoit
         */
        nombreVoiture: number;
        /**
         * Lbfaem_DenmEmpr
         */
        denmEmprunt: string;
        /**
         * Lnfpem_LiblLongEmpr
         */
        libelleLongEmprunt: string;
        /**
         * Lbfain_IntlcEmpr
         */
        intlcEmprunt: string;
        /**
         * Idfaep_IdntEnttTitlClnt
         */
        idEntiteTitulaireClient: string;
        /**
         * Idfaeg_IdntElemStrcGest
         */
        idElementStructureGestion: string;
        /**
         * Cdfcke_CodeCateEmpr
         */
        codeCateEmprunt: string;
        /**
         * Ctfmfc_CodeTypeFctCpteDepoCeRecent
         */
        codeTypeFctCpteDepoCeRecent: number;
        /**
         * Ctfpmp_CodeTypeMarcPers
         */
        codeTypeMarchePersonne: number;
        /**
         * Ctfcae_CateAgntEcnmBafi
         */
        cateAgentEcnmBafi: number;
        /**
         * Ctfccl_CateClntBafi
         */
        cateClientBafi: number;
        /**
         * Ctfcad_TypeAdmnBafi
         */
        typeAdmnBafi: number;
        /**
         * Ctfcba_ClssAgntBafi
         */
        classeAgentBafi: string;
        /**
         * Cdfpsf_CodeSittFaml
         */
        codeSituationFamille: number;
        /**
         * Cdfpsr_CodeSittFamlRegl
         */
        codeSituationFamilleRegle: number;
        /**
         * Nbfpnp_NbPersCmpstMeng
         */
        nombrePersonneCmpstMeng: number;
        /**
         * Cdfpma_NbActfMeng
         */
        nombreActfMeng: number;
        /**
         * Dtfpen_DateEncrEparLogm
         * Type date au format yyyy-MM-dd
         */
        dateEncoursEpargneLogement: string;
        /**
         * Mtftpl_EncrEncrIsssPretPel
         */
        encoursEncoursIsssPretPEL: number;
        /**
         * Mtftli_MtEncrIsssPretLel
         */
        montantEncoursIsssPretLEL: number;
        /**
         * Mtftlh_MtEncrLivrAutrEtbl
         */
        montantEncoursLivrAutreEtbl: number;
        /**
         * Mtftph_MtEncrPlnsAutrEtbl
         */
        montantEncoursPlnsAutreEtbl: number;
        /**
         * Mtfwrt_TotlRevnAnnlNets
         */
        totalRevnAnnulationNets: number;
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
        /**
         * Cdfwsl_StttOccpLogmActl
         */
        stttOccpLogementActuariel: number;
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Lbfpnm_NomRaisSoclEmpr
         */
        nomRaisonSocialeEmprunt: string;
        /**
         * Lbfpa1_Intt
         */
        intituleLigne1: string;
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
         * Lbfpa6_CompIntt
         */
        compIntituleLigne2: string;
        /**
         * Lbfpa7_AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cdfpse_CodeSectRatt
         */
        codeSecteurRattachement: string;
        /**
         * Cdfpjm_CodeJeunMeng
         */
        codeJeunMeng: number;
        /**
         * Qmfcvi_EsperVie
         */
        esperVie: number;
        /**
         * Qmfcvd_EsperVieDec
         */
        esperVieDecision: number;
        /**
         * Qmfcvs_EsperVieStrs
         */
        esperVieStress: number;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * Cdfadv_CodeDeviseEmprunteur
         */
        codeDeviseEmprunteur: string;
    }
    interface ICessionDaillyLoyerImmeubleMaj extends IBienPorteEnGarantieMaj {
    }
    interface IHypothequeAerienneMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_NumeSer
         */
        numeroSer: string;
        /**
         * Lbfolt_NumeImmt
         */
        numeroImmt: string;
    }
    interface IBonDeCaisseCapitalisationMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_NumeSiren
         */
        numeroSiren: string;
        /**
         * Lbfoo2_ValrBonOrig
         */
        valeurBonOrigine: number;
        /**
         * Lbfoo3_NumeContTitr
         */
        numeroContratTitre: string;
        /**
         * Lbfoo4_NatrBon
         */
        natureBon: string;
        /**
         * Lbfoo5_Dateeche
         * Type date au format yyyy-MM-dd
         */
        dateeche: string;
        /**
         * Lbfoo6_TitrNomPrenDeps
         */
        titreNomPrenDeps: string;
    }
    interface IDelegationLoyerMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_MtAnnuLoye
         */
        montantAnnuLoye: number;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_DateExtnBail
         * Type date au format yyyy-MM-dd
         */
        dateExterneBail: string;
        /**
         * Lbfoo2_NomGern
         */
        nomGern: string;
    }
    interface ICessionDaillyAutreMaj extends IBienPorteEnGarantieMaj {
    }
    interface IContratAssuranceMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_DateNaisAssr
         * Type date au format yyyy-MM-dd
         */
        dateNaisAssurance: string;
        /**
         * Lbfolt_NumeContAssr
         */
        numeroContratAssurance: string;
        /**
         * Lbfoo1_NomCieAssr
         */
        nomCieAssurance: string;
        /**
         * Lbfoo2_NumeSiren
         */
        numeroSiren: string;
        /**
         * Lbfoo3_CntrGest
         */
        cntrGestion: string;
        /**
         * Lbfoo4_TypeTechJurd
         */
        typeTechniqueJuridique: string;
        /**
         * Lbfoo5_NomContAssr
         */
        nomContratAssurance: string;
        /**
         * Lbfoo6_ApprPers
         */
        apportPersonne: number;
        /**
         * Lbfoo7_MtMinmVerstSign
         */
        montantMinimumVersementSigne: number;
        /**
         * Cdfvat_CodeIndicAttnVerst
         */
        codeIndiceAttnVersement: number;
    }
    interface IAntichreseMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_RefeCads
         */
        referenceCads: string;
        /**
         * Lbfolt_NumeLot
         */
        numeroLot: string;
    }
    interface IGageVehiculeMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_NumeSer
         */
        numeroSer: string;
        /**
         * Lbfolt_NumeImmt
         */
        numeroImmt: string;
    }
    interface IGageCompteInstrumentFinancierMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
    }
    interface INantissementPartSocialeMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_NumeEnrg
         */
        numeroEnregistrement: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_TitrInte
         */
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielleMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_TypeValrMatr
         */
        typeValeurMatrimonial: string;
        /**
         * Lbfolt_NumeSer
         */
        numeroRefTypeLot: string;
    }
    interface INantissementValeurMobiliereMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
    }
    interface INantissementFondDeCommerceMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_NumeInscRcs
         */
        numeroInscRcs: string;
        /**
         * Lbfolt_LiblLibr
         */
        libelleLibr: string;
        /**
         * Cdfomo_TitrOccpLocLeqlFondEstExpl
         */
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface IHypothequeImmobiliereMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_RefeCads
         */
        referenceCads: string;
        /**
         * Lbfolt_RefeLot
         */
        referenceLot: string;
        /**
         * Ctfmoi_TypeBien
         */
        typeBien: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * Cdfcdo_DestBien
         */
        destinataireBien: number;
        /**
         * Nbfosh_SurfHabt
         */
        surfHabitation: number;
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfcoi_ZoneImplBien
         */
        zoneImplBien: string;
        /**
         * Cdfqem_QualEmpla
         */
        qualEmpla: number;
        /**
         * Lbfoo1_MtDernMutt
         */
        montantDernierMutt: string;
        /**
         * Lbfoo2_DateDernMutt
         */
        dateDernierMutt: string;
        /**
         * Dtfoco_AnneConst
         */
        anneConstruction: number;
        /**
         * Lbfoo3_MtAnnuLoye
         */
        montantAnnuLoye: string;
        /**
         * Lbfoo5_NumeLotCopr
         */
        numeroLotCopr: string;
        /**
         * Lbfoo4_NumeSctn
         */
        numeroSctn: string;
        /**
         * Cifcoc_OccpActlBien
         */
        occpActuarielBien: number;
        /**
         * Cifcph_CodePresHypt
         */
        codePresHypotheque: number;
        /**
         * Idfceb_IdntExpr
         */
        idExpression: string;
        /**
         * Dtfcde_DateDemnExpr
         * Type date au format yyyy-MM-dd
         */
        dateDemandeExpression: string;
        /**
         * Dtfoac_DateAcquisitio
         * Type date au format yyyy-MM-dd
         */
        dateAcquisition: string;
        /**
         * Mtfoac_CoutAcquisition
         */
        coutAcquisition: number;
        /**
         * Nbfosa_SurfaceAnnexes
         */
        surfaceAnnexes: number;
        /**
         * Cdfomo_ModaliteOccupation
         */
        numeroDeVolume: number;
    }
    interface IBienDiversMaj extends IBienPorteEnGarantieMaj {
        /**
         * Lbfoca_Refe1
         */
        reference1: string;
        /**
         * Lbfolt_Refe2
         */
        reference2: string;
    }
    interface IBienPorteEnGarantieMaj extends IElementMaj {
        /**
         * Lbfoof_LiblObjt
         */
        libelleObjet: string;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Mtfgo2_MtEstmPrdn
         */
        montantEstmPrdn: number;
        /**
         * Dtfgo2_DateEstmPrdn
         * Type date au format yyyy-MM-dd
         */
        dateEstmPrdn: string;
        /**
         * Cdfgm2_CodeModlEstmPrdn
         */
        codeModeleEstmPrdn: string;
        /**
         * Cmfgt2_CodeMotfReSPrdn
         */
        codeMotfReSPrdn: string;
        /**
         * Dtfiex_DateExprBienCff
         * Type date au format yyyy-MM-dd
         */
        dateExpressionBienCff: string;
        /**
         * Lbfpex_NoteExprBienCff
         */
        noteExpressionBienCff: number;
        /**
         * Cifaan_SouscriptionContratAssurance
         */
        souscriptionContratAssurance: boolean;
    }
    interface ICreditHDMaj extends IElementMaj {
        /**
         * Nufpct_NumrContEpar
         */
        numeroContratEpargne: string;
        /**
         * Mtfggi_MtIntlGarn
         */
        montantInitialGarantie: number;
    }
    interface IGarantieHDMaj extends IElementMaj {
        /**
         * Cdfcng_NatrGarnHorsDoss
         */
        natureGarantieHorsDossier: string;
        /**
         * Idfgg1_IdntOrigGarnHorsDoss
         */
        idOrigineGarantieHorsDossier: string;
        /**
         * Nofghy_RangPrncHypt
         */
        rangPrincipalHypotheque: number;
        /**
         * Nofgsh_RangSecnHypt
         */
        rangSecnHypotheque: number;
        /**
         * Cdfgrh_CodeCessRangHypt
         */
        codeCessRangHypotheque: number;
        /**
         * IdnttblPrt
         */
        idEtabPreteur: string;
        /**
         * VilleConsvHypt
         */
        villeConsvHypotheque: string;
        /**
         * DatePublHypt
         * Type date au format yyyy-MM-dd
         */
        datePublHypotheque: string;
        /**
         * RfVolm
         */
        refVolume: string;
        /**
         * NumVolm
         */
        numeroVolume: number;
        /**
         * DateEfftHypt
         * Type date au format yyyy-MM-dd
         */
        dateEffetHypotheque: string;
        /**
         * DateFinHypt
         * Type date au format yyyy-MM-dd
         */
        dateFinHypotheque: string;
        /**
         * LiblEmpr
         */
        libelleEmprunt: string;
        /**
         * LiblNotr
         */
        libelleNotaire: string;
        /**
         * VilleNotr
         */
        villeNotaire: string;
        /**
         * MtInscHyptOrig
         */
        montantInscHypothequeOrigine: number;
        /**
         * MtHyptDisp
         */
        montantHypothequeDisp: number;
        /**
         * DateDispMt
         * Type date au format yyyy-MM-dd
         */
        dateDispMontant: string;
        /**
         * Cdfgpc_PactCommr
         */
        pactCommr: string;
        /**
         * Cefggi_CodEttGarn
         */
        codeEtatGarantie: number;
        /**
         * Cdfgex_CodeIndicGarnExtn
         */
        codeIndiceGarantieExterne: number;
        /**
         * CodeIndicTrfoGarn
         */
        codeIndiceTrfoGarantie: number;
        /**
         * Npfgdg_DurIntlMois
         */
        dureeInitialMois: number;
        /**
         * Ctfggm_CodeTypeGarnMyss
         */
        codeTypeGarantieMyss: string;
    }
    interface ICreditBonificationInfoMaj extends IElementMaj {
        /**
         * sCdfddi_CodeDetail
         */
        codeDetail: string;
    }
    interface ICreditBonificationMaj extends IElementMaj {
        /**
         * Idfdce_IdCreditExterne
         */
        idCreditExterne: string;
    }
    interface IGarantieReelleMaj extends IGarantieMaj {
        /**
         * Nofgsh_NumeRangSecnHypt
         */
        numeroRangSecnHypotheque: number;
        /**
         * Npfgdg_DureHyptMois
         */
        dureHypothequeMois: number;
        /**
         * Cdfgpc_PactCommr
         */
        pactCommr: number;
        /**
         * Nofghy_RangHypt
         */
        rangHypotheque: number;
        /**
         * Cdfgrh_CodeCessRangHypt
         */
        codeCessRangHypotheque: number;
        /**
         * Mtfghy_MtCouvParHyptRangInfe
         */
        montantCouvertureParHypothequeRangInfe: number;
        /**
         * Mtfghy_MtFrais
         */
        montantFrais: number;
        /**
         * Llfgvh_VilleConservationHypotheque
         */
        villeConservationHyp: string;
        /**
         * Llfgvo_LibelleReferenceVolume
         */
        lblRefVolume: string;
        /**
         * Dtfgpu_DateDePublication
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * Nofgvo_NumeroDeVolume
         */
        numeroDeVolume: number;
    }
    interface IGarantiePersonnelleMaj extends IGarantieMaj {
        /**
         * Cdfgtg_CodeNatrCaut
         */
        codeNatureCaution: number;
    }
    interface IGarantieMaj extends IAccessoireMaj {
        /**
         * Lbfgga_Commt
         */
        commentaire: string;
        /**
         * Cdfaag_CodeFormActeAuth
         */
        codeFormeActeAuthentique: number;
        /**
         * IdntPers
         */
        idPersonne: string;
    }
    interface IAssuranceMaj extends IAccessoireMaj {
        /**
         * Cdasdg_CodeDeleAssr
         */
        codeDeleAssurance: number;
        /**
         * Lbfabe_BenfAssrAvntVerst
         */
        beneficiaireAssuranceAvenantVersement: string;
        /**
         * Cdfaex_CodeCouvExts
         */
        codeCouvertureExts: number;
        /**
         * Ctfarq_TypeRisq
         */
        typeRisque: number;
        /**
         * CodeAssrObgt
         */
        codeAssuranceObligatoire: number;
        /**
         * Cdfaat_CodeAssrPart
         */
        codeAssurancePart: number;
        /**
         * Cdfarv_CodeResr
         */
        codeResr: number;
        /**
         * Lbfaex_LiblAssrExtn
         */
        libelleAssuranceExterne: string;
        /**
         * Nosrn_NumeSirenCieAssr
         */
        numeroSirenCieAssurance: string;
        /**
         * Nrfcan_NumeReglCalcDateEfft
         */
        numeroRegleCalculDateEffet: string;
        /**
         * Ctfaaa_CodeAgreAssrExtr
         */
        codeAgreAssuranceExtr: number;
    }
    interface IAccessoireComplementaireMaj extends IAccessoireMaj {
        /**
         * Cnfcoi_CodeNatrOrigAccs
         */
        codeNatureOrigineAccessoire: number;
    }
    interface IAccessoireLieProduitMaj extends IAccessoireMaj {
    }
    interface IServiceSurObjetMaj extends IAccessoireMaj {
        /**
         * Nrfcan_NumeReglCalcDateEfftServ
         */
        numeroRegleCalculDateEffetService: string;
    }
    interface IAccessoireMaj extends IElementMaj {
        /**
         * Nufaaa_IdntExtnAccs
         */
        idExterneAccessoire: string;
        /**
         * Txfipf_PartFinnAccs
         */
        partFinancierAccessoire: number;
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
         * Cefaas_CodeEtatAccs
         */
        codeEtatAccessoire: number;
        /**
         * Dtfaev_DateEnv
         * Type date au format yyyy-MM-dd
         */
        dateEnvoi: string;
        /**
         * Ddfaaa_DateEfft
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Dffaaa_DateFinEfft
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Cdfpim_CodeBeneficiaire
         */
        codeBeneficiaire: string;
    }
    interface ITrancheMontantMaj extends ICotisationMaj {
        /**
         * Txfcaa_TxTrchMt
         */
        tauxTrancheMontant: number;
    }
    interface ICotisationTrancheAgeMaj extends ICotisationMaj {
    }
    interface ICotisationPhaseMaj extends ICotisationMaj {
    }
    interface ICotisationPeriodeMaj extends ICotisationMaj {
        /**
         * Npfcel_NbPerdetlm
         */
        nombrePerdetlm: number;
        /**
         * Pefcde_PerdEtlm
         */
        periodeEtlm: number;
    }
    interface ICotisationDerogationMaj extends ICotisationMaj {
    }
    interface ICotisationMaj extends IElementMaj {
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: number;
        /**
         * Cifccb_CodeIndicBlcgSaisMont
         */
        codeIndiceBlcgSaisieMontant: number;
        /**
         * Pefcac_CodePerdCalc
         */
        codePeriodeCalcul: number;
        /**
         * Dtfhac_DateApplCots
         * Type date au format yyyy-MM-dd
         */
        dateApplicationCotisation: string;
        /**
         * Ddfhac_DateDebtAppliCots
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationCotisation: string;
        /**
         * Dffhac_DateFinAppliCots
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationCotisation: string;
        /**
         * Mtfhac_MtAsst
         */
        montantAssiette: number;
        /**
         * Ctfcel_CodeTypeAsstCalculElt
         */
        codeTypeAssietteCalculElt: string;
        /**
         * Cdfc1a_CodeRegleEvtPremierAppel
         */
        codeRegleEvenementPremierAppel: string;
        /**
         * Ctftva_CodeTypeTvaAcc
         */
        codeTypeTVAAccessoire: string;
        /**
         * Npfdaa_NbJoursAnneeNumerateur
         */
        nombreJoursAnneeNumerateur: number;
        /**
         * Npfdad_NbJoursAnneeDenominateur
         */
        nombreJoursAnneeDenominateur: number;
        /**
         * Npfce1_NbPerdAppliCots
         */
        nombrePeriodeApplicationCotisation: number;
        /**
         * Pefcde_PerdAppliCots
         */
        periodeApplicationCotisation: number;
        /**
         * Mtfgfr_MtFrsGarn
         */
        montantFrsGarantie: number;
        /**
         * Txfipf_PartFinn
         */
        partFinancier: number;
        /**
         * Cdfceh_CodeRecv
         */
        codeRecouvrement: number;
    }
    interface ICouvertureCreditMaj extends IElementMaj {
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * Mefaas_MtEcheCouv
         */
        montantEcheanceCouverture: number;
        /**
         * Dffgaf_DateFinAffecCouv
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectationCouverture: string;
        /**
         * Idfcoc_IdPretOrgCaution
         */
        idPretOrganismeCaution: string;
    }
    interface IAplMaj extends IElementMaj {
        /**
         * Mtfiba_MtApl
         */
        montantAPL: number;
        /**
         * Ctfape_PerdicApl
         */
        periodiciteAPL: number;
    }
    interface ICompteProfessionnelMaj extends ICompteMaj {
        /**
         * Nbfmjp_NbJourDepsAutrPourCpteProf
         */
        nombreJourDepsAutrePourCompteProf: number;
        /**
         * Cdfmxp_CodeCtx
         */
        codeCtx: number;
    }
    interface ICompteDepotMaj extends ICompteMaj {
        /**
         * Cdfmce_CodePrdtCe
         */
        codeProduitCE: number;
        /**
         * Nofmet_NumeEnttTitl
         */
        numeroEntiteTitulaire: number;
        /**
         * Lbfmet_LiblEnttTitl
         */
        libelleEntiteTitulaire: string;
        /**
         * Cdfmmc_CodeCompoEntiteTitulaire
         */
        codeCompositionEntiteTitulaire: number;
        /**
         * Cdfmcp_CodeEttPrdt
         */
        codeEtatProduit: number;
        /**
         * Mtfmmy_SoldMoyeLongTermCpteDepoCe
         */
        soldMoyenLongTermeCompteDepoCE: number;
        /**
         * Mtfmbs_SoldMiniCpteDepoCe
         */
        soldMinimumCompteDepoCE: number;
        /**
         * Mtfmds_SoldRelCpteDepoCe
         */
        soldRelCompteDepoCE: number;
        /**
         * Ctfmca_CodeTypeCart
         */
        codeTypeCartographie: number;
        /**
         * Dtfmca_DateDelvCart
         * Type date au format yyyy-MM-dd
         */
        dateDelvCartographie: string;
        /**
         * Ctfmtd_CodeTypeDecvCpteDepo
         */
        codeTypeDecvCompteDepo: number;
        /**
         * Mtfmde_MtDecvAutrSurCpteDepo
         */
        montantDecvAutreSurCompteDepo: number;
        /**
         * Mtfmvr_MtTotlVerstCredRelsSurCpteDepo
         */
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        /**
         * Nbfmjd_NbJourDepsAutrDecv
         */
        nombreJourDepsAutreDecv: number;
        /**
         * Mtfmpe_MtPrelExteRelsSurCpteDepo
         */
        montantPrelExteReleaseSurCompteDepo: number;
        /**
         * Cdfmdj_CodeDepsJust
         */
        codeDepsJustificatif: number;
        /**
         * Cdfmdi_CodePresDecvIrreSurCpteDepo
         */
        codePresDecvIrreSurCompteDepo: number;
        /**
         * Cdfmae_CodeExstCartBancHorsCe
         */
        codeExisteCartographieBancaireHorsCE: number;
        /**
         * Cdfmrc_CodeComnRelvCpteHorsCe
         */
        codeComnRelvCompteHorsCE: number;
        /**
         * Cdfmch_CodeExstCheq
         */
        codeExisteCheq: number;
        /**
         * Mtfmyc_SoldMoyeMensCrtCpteDepoCe
         */
        soldMoyenMensCreationCompteDepoCE: number;
        /**
         * Mtfmcm_MvtCredMensSurCpteDepo
         */
        mvtCreditMensSurCompteDepo: number;
        /**
         * Ctfmfc_CodeTypeFctCpteDepoCeHorsCe
         */
        codeTypeFctCompteDepoCEHorsCE: number;
        /**
         * Ddfmhc_DateOuerCpteDepoHorsCe
         * Type date au format yyyy-MM-dd
         */
        dateOuerCompteDepoHorsCE: string;
        /**
         * Lifcee_LibEtabHorsCE
         */
        libelleEtablissementHorsCE: string;
        /**
         * Mcffa1_MtTotAgiosM1HorsCE
         */
        montantTotalAgiosM1HorsCE: number;
        /**
         * Mcffa2_MtTotAgiosM2HorsCE
         */
        montantTotalAgiosM2HorsCE: number;
        /**
         * Mcffa3_MtTotAgiosM3HorsCE
         */
        montantTotalAgiosM3HorsCE: number;
        /**
         * Ciffci_IndCommIntCDDHorsCE
         */
        indicateurCommIntervCDDHorsCE: number;
        /**
         * Ciffim_IndImpayeCDDHorsCE
         */
        indicateurImpayeCDDHorsCE: number;
        /**
         * Ciffrc_IndRejetChqCDDHorsCE
         */
        indicateurRejetChequeCDDHorsCE: number;
        /**
         * Ciffrp_IndRejetPrlvtCDDHorsCE
         */
        indicateurRejetPrelevCDDHorsCE: number;
        /**
         * Cifffi_IndFraisDosBDFCDDHorsCE
         */
        indicateurFraisDossBDFCDDHorsCE: number;
        /**
         * Ciffpp_IndPrlvtPartielCDDHorsCE
         */
        indicateurPrelevPartCDDHorsCE: number;
        /**
         * Nbffd1_NbJoursDebM1CDDHorsCE
         */
        nombreJoursDebiteurM1CDDHorsCE: number;
        /**
         * Nbffd2_NbJoursDebM2CDDHorsCE
         */
        nombreJoursDebiteurM2CDDHorsCE: number;
        /**
         * Nbffd3_NbJoursDebM3CDDHorsCE
         */
        nombreJoursDebiteurM3CDDHorsCE: number;
        /**
         * Mtfcsa_MtSoldeArreteM1CDDHorsCE
         */
        montantSoldeArreteM1CDDHorsCE: number;
        /**
         * Mtfcsb_MtSoldeArreteM2CDDHorsCE
         */
        montantSoldeArreteM2CDDHorsCE: number;
        /**
         * Mtfcsc_MtSoldeArreteM3CDDHorsCE
         */
        montantSoldeArreteM3CDDHorsCE: number;
    }
    interface ICompteMaj extends IElementMaj {
        /**
         * Dtfmou_DateOuvr
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
    }
    interface IPhaseCreditExistantMaj extends IElementMaj {
        /**
         * Ddfcph_DateDebtPhas
         * Type date au format yyyy-MM-dd
         */
        dateDebutPhase: string;
        /**
         * Dffcph_DateFinPhas
         * Type date au format yyyy-MM-dd
         */
        dateFinPhase: string;
        /**
         * Meface_MtEchePhas
         */
        montantEcheancePhase: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Pftmam_PerdAmrt
         */
        periodeAmortissement: number;
    }
    interface ICreditExistantMaj extends IChargeMaj {
        /**
         * Cdfccg_CodeTypeCredCe
         */
        codeTypeCreditCE: string;
        /**
         * Cdfopc_CodePrsCompCred
         */
        codePresenceCompCredit: number;
        /**
         * Cdfimu_InvsUsgLocf
         */
        invsUsageLocf: number;
        /**
         * Ctfmlc_LienPersCred
         */
        lienPersonneCredit: number;
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Ctfmtc_CodeTypeCred
         */
        codeTypeCredit: number;
        /**
         * Mtfaoc_MtOrigCred
         */
        montantOrigineCredit: number;
        /**
         * Mkfard_MtRestDu
         */
        montantRestantDu: number;
        /**
         * Ddfmam_DateDebtAmrt
         * Type date au format yyyy-MM-dd
         */
        dateDebutAmortissement: string;
        /**
         * Cdfmce_CodePrdtCe
         */
        codeProduitCE: number;
        /**
         * Nofmcp_RefePrdtCe
         */
        referenceProduitCE: string;
        /**
         * Nofmc2_CompRefePrdtCe
         */
        compReferenceProduitCE: string;
        /**
         * Nofmet_NumeEnttTitlCe
         */
        numeroEntiteTitulaireCE: number;
        /**
         * Lbfmet_LiblEnttTitlCe
         */
        libelleEntiteTitulaireCE: string;
        /**
         * Mkfmpc_MtCaptDejaRemb
         */
        montantCapitalDejaRemboursement: number;
        /**
         * Nbfmim_NbImpayes
         */
        nombreImpayes: number;
        /**
         * Nbfmir_NbImpeReglSurLesMoisGlss
         */
        nombreImpeRegleSurLesMoisGlss: number;
        /**
         * Npfmam_DureAmrt
         */
        dureAmortissement: number;
        /**
         * Cifgeh_CodeIndicAInclettHypt
         */
        codeIndiceAInclettHypotheque: boolean;
        /**
         * Mtfggi_MtGarn
         */
        montantGarantie: number;
        /**
         * Cmfmro_MotfRembAntc
         */
        motfRemboursementAnticipe: string;
        /**
         * Cdfmro_RembAvecAntc
         */
        remboursementAvecAnticipe: number;
        /**
         * Lbfmro_LiblMotfRembAntc
         */
        libelleMotfRemboursementAnticipe: string;
    }
    interface IChargeMaj extends IElementMaj {
        /**
         * Ctfpch_TypeDech
         */
        typeDech: string;
        /**
         * Mtfpch_MtChrg
         */
        montantCharge: number;
        /**
         * Txfmrc_TxPondChrg
         */
        tauxPondereCharge: number;
        /**
         * Npfpch_NbPerdParAn
         */
        nombrePeriodeParAn: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Nufpct_NumeContEprg
         */
        numeroContratEpargne: string;
        /**
         * Cdfpao_CodeExstRessApreOper
         */
        codeExisteRessourceApreOper: number;
    }
    interface IRevenuFiscalMaj extends IElementMaj {
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
        /**
         * Ctfprm_TypeRevnMeng
         */
        typeRevnMeng: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
    }
    interface IPoolEPSMaj extends IElementMaj {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Idfaop_IdntOprtCess
         */
        idOprtCess: string;
        /**
         * Idfccf_IdntCadrFinn
         */
        idCadreFinancier: string;
        /**
         * Cnflpo_CodeNatrPool
         */
        codeNaturePool: number;
        /**
         * Cdfcor_CodeOrigCess
         */
        codeOrigineCess: number;
        /**
         * Ctfesr_TypeSousRolePool
         */
        typeSousRolePool: number;
        /**
         * Nofcca_NumVersionCadre
         */
        numeroVersionCadre: number;
    }
    interface ICourrierEPSMaj extends IElementMaj {
        /**
         * Ctfclv_TypeLettre
         */
        typeLettre: number;
        /**
         * Cdfpci_CodeCivilite
         */
        codeCivilite: string;
        /**
         * Lbfce1_AdresseLigne1
         */
        adresseLigne1: string;
        /**
         * Lbfce2_AdresseLigne2
         */
        adresseLigne2: string;
        /**
         * Lbfce3_AdresseLigne3
         */
        adresseLigne3: string;
        /**
         * Lbfce4_AdresseLigne4
         */
        adresseLigne4: string;
        /**
         * Lbfce5_AdresseLigne5
         */
        adresseLigne5: string;
        /**
         * Lbfce6_AdresseLigne6
         */
        adresseLigne6: string;
    }
    interface ICreditEPSMaj extends IElementMaj {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Txfccc_QuotCredCouvParEps
         */
        quotientCreditCouvertureParEPS: number;
        /**
         * Idfaez_RefeExtnCredCouvEps
         */
        referenceExterneCreditCouvertureEPS: string;
    }
    interface IPersonnePhysiqueMaj extends IPersonneMaj {
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
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
         * Nbfppc_NbPersAChrg
         */
        nombrePersonneACharge: number;
        /**
         * Cdfpsp_CateSoc
         */
        cateInteret: string;
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
         * Dtfmlo_DateEntrLogm
         * Type date au format yyyy-MM-dd
         */
        dateEntrLogement: string;
        /**
         * Cdfmju_CodeCapcJurd
         */
        codeCapcJuridique: number;
        /**
         * Ctfccj_CodeTypeCapJurd
         */
        codeTypeCapJuridique: string;
        /**
         * Cdfmnt_CodeNatn
         */
        codeNational: number;
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
         * HebergementGratuit2Ans
         */
        hebergementGratuit2Ans: boolean;
        /**
         * RattachementFoyerFiscalN2
         */
        rattachementFoyerFiscalN2: boolean;
        /**
         * EnfantsGardeAlternee
         */
        enfantsGardeAlternee: boolean;
        /**
         * ActiviteProSeinLogement
         */
        activiteProSeinLogement: boolean;
    }
    interface IPersonneMoraleMaj extends IPersonneMaj {
        /**
         * Nufpin_NumeInsee
         */
        numeroINSEE: string;
        /**
         * Dtfpir_DateInscRcs
         * Type date au format yyyy-MM-dd
         */
        dateInscRcs: string;
        /**
         * Dtfpcs_DateCretSoce
         * Type date au format yyyy-MM-dd
         */
        dateCreationSoce: string;
        /**
         * Mcfpch_ChffAffrHtExrcPrec
         */
        chiffreAffrHtExrcPrec: number;
        /**
         * Nbfpsa_NbSalr
         */
        nombreSalr: number;
        /**
         * Cdfpfj_FormJurd
         */
        formeJuridique: string;
        /**
         * Cdfpdp_TypeDrtPersMorl
         */
        typeDroitPersonneMorl: number;
        /**
         * Mkfpca_MtCapt
         */
        montantCapital: number;
        /**
         * ListIdntPersPhys
         */
        listeIdPersonnePhys: Array<string>;
        /**
         * ListRolePersPhys
         */
        listeRolePersonnePhys: Array<string>;
    }
    interface IPersonneMaj extends IElementMaj {
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Cdfprs_CrteResd
         */
        crteResd: number;
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
         * Dtfper_DateEntrReltAvecCons
         * Type date au format yyyy-MM-dd
         */
        dateEntrRelationAvecConsolide: string;
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
         * RolePersonne
         */
        rolePersonne: number;
        /**
         * Rattachement
         */
        rattachement: boolean;
        /**
         * ForcerRattachement
         */
        forcerRattachement: boolean;
        /**
         * ForcerAjout
         */
        forcerAjout: boolean;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
    }
    interface IPayeurMaj extends IElementMaj {
        /**
         * Mtfdfx_MtPaieCred
         */
        montantPaiementCredit: number;
        /**
         * Txfdec_PctPaieCred
         */
        pourcentagePaiementCredit: number;
        /**
         * Cdfdrg_ModeReglUtlsParPayr
         */
        modeRegleUtilisationParPayr: string;
        /**
         * Nufddt_NumeCptePayr
         */
        numeroComptePayr: string;
        /**
         * PersonneMaj
         */
        personneMAJ: IPersonneMaj;
        /**
         * Idfdma_RefeUnqMand
         */
        referenceUniqueMand: string;
        /**
         * Dgfdma_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Cdfdrs_ModeReglUtlsParPayrSecours
         */
        modeRegleUtilisationParPayrSecours: string;
        /**
         * NumeroComptePayeurSecours
         */
        numeroComptePayeurSecours: string;
        /**
         * Idfdms_RefeUnqMandSecours
         */
        referenceUniqueMandSecours: string;
        /**
         * Dgfdms_DateSignMandSecours
         * Type date au format yyyy-MM-dd
         */
        dateSigneMandSecours: string;
    }
    interface ICreditInterneMaj extends IElementMaj {
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
         * Idfacs_RefeExtnCred
         */
        referenceExterneCredit: string;
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
         * Dhfacj_QuantEche
         */
        jourDateEcheance: number;
        /**
         * Cdfcie_CodeIndicelgbAuprInstemss
         */
        codeIndicelgbAuprInstemss: number;
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
         * Lbfpa1_InttCred
         */
        intituleLigneUn: string;
        /**
         * Nufbdt_DomcTres
         */
        domiciliationTres: string;
        /**
         * Nufbve_NumeDomcDispFond
         */
        numeroDomiciliationDispFond: string;
        /**
         * Mtfcve_MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * Cifaam_CodeIndicPresUneBonfUneMajreTx
         */
        codeIndicePresUneBonificationUneMajreTaux: number;
        /**
         * TegModeRestitution
         */
        tegModeRestitution: number;
        /**
         * Cefad0_CodeConfmRedcDurePTZ
         */
        codeConfirmationReductionDurePTZ: number;
        /**
         * Cefam0_CodeConfmRedcMtPTZ
         */
        codeConfirmationReductionMontantPTZ: number;
        /**
         * Mcface_MtCredEuro
         */
        montantCreditEuro: number;
        /**
         * Msfcpv_MtMaxPretPVH
         */
        montantMaximumPretPVH: number;
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
         * Mcfafd_CoutTotlFrsDossAsscCred
         */
        coutTotalFrsDossierAssuranceCredit: number;
        /**
         * Txfcmg_MargTxFutr
         */
        margeTauxFutr: number;
        /**
         * Txfacs_ValrTxIntl
         */
        valeurTauxInitial: number;
        /**
         * Txfamc_TxMontage
         */
        tauxMontage: number;
        /**
         * MontantPTZVerrouille
         */
        montantPTZVerrouille: boolean;
        /**
         * DureePTZVerrouillee
         */
        dureePTZVerrouillee: boolean;
        /**
         * EtatForcageFraisDossier
         */
        etatForcageFraisDossier: string;
    }
    interface ITACreditEPSMaj extends IElementMaj {
        /**
         * Nufcrl_NumRelCred
         */
        numeroRelCredit: number;
        /**
         * Dtfhpr_DateEchnMER
         * Type date au format yyyy-MM-dd
         */
        dateEcheanceMER: string;
        /**
         * Mkfh03_MtCaptAmrt
         */
        montantCapitalAmortissement: number;
        /**
         * Mkfd01_MtCaptRestDu
         */
        montantCapitalRestantDu: number;
        /**
         * Nufcet_NumEcheanceTable
         */
        numeroEcheanceTable: number;
    }
    interface IDroitUtiliseMaj extends IElementMaj {
        /**
         * Mtfadu_MtDrtAcqsUtls
         */
        montantDroitAcqsUtilisation: number;
        /**
         * Mtfali_MtDrtLimt
         */
        montantDroitLimite: number;
    }
    interface IDetailCoutObjetMaj extends IElementMaj {
        /**
         * Cnfctr_CodeNatrTrvx
         */
        codeNatureTravaux: string;
        /**
         * Ctfccc_CodeTyplCoutTrvx
         */
        codeTypologieCoutTravaux: string;
        /**
         * Mtfoct_CoutTrvx
         */
        coutTravaux: number;
    }
    interface IComplementFicheContactMaj extends IElementMaj {
        /**
         * Hdfcpc_HrDebtPlgHor
         */
        hrDebutPlgHor: number;
        /**
         * Hffcpc_HrFinPlgHor
         */
        hrFinPlgHor: number;
        /**
         * Llfccp_Comentair
         */
        comentair: string;
    }
    interface IDocumentOffreIndustrialiseeMaj extends IElementMaj {
        /**
         * FluxDocument
         */
        fluxDocument: string;
    }
    interface IDocumentSignatureElectroniqueMaj extends IElementMaj {
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
    }
    interface IRessourceMaj extends IElementMaj {
        /**
         * Ctfpre_TypeRess
         */
        typeRessource: string;
        /**
         * Mtfpre_MtRess
         */
        montantRessource: number;
        /**
         * Npfpre_NbPerdParAn
         */
        nombrePeriodeParAn: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpao_CodeExstRessApreOper
         */
        codeExisteRessourceApreOper: number;
    }
    interface IFamilleEpargneMaj extends IElementMaj {
        /**
         * Cdfmpr_CodeFamlPrdtAdr
         */
        codeFamilleProduitAdresse: string;
        /**
         * Nbfmpr_NbPrdtDetnPourUneFamlPrdtAdr
         */
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        /**
         * Mtfmve_MtValrEprgAvntOper
         */
        montantValeurEpargneAvenantOper: number;
        /**
         * Lbfcej_LiblCaisEprg
         */
        libelleCaisseEpargne: string;
        /**
         * Dtfmve_DateValrEprg
         * Type date au format yyyy-MM-dd
         */
        dateValeurEpargne: string;
        /**
         * Mtfmep_MtEprgApreOper
         */
        montantEpargneApreOper: number;
    }
    interface IContratEpargneLogementMaj extends IElementMaj {
        /**
         * Cdfppr_CodeTypeEL
         */
        codeTypeEL: string;
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
        /**
         * Ctfpli_LienParnAvecCedn
         */
        lienParentAvecCedn: number;
        /**
         * Lbfptc_LiblTitlCont
         */
        libelleTitulaireContrat: string;
        /**
         * Cdfpbc_CodeIndicBenePrimEl
         */
        codeIndiceBenePrimeEpargneLogement: number;
        /**
         * Ddfpct_DateOuvrCont
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureContrat: string;
        /**
         * Dtfprf_DateCltrCont
         * Type date au format yyyy-MM-dd
         */
        dateClotureContrat: string;
        /**
         * Cdfifr_CodeForc
         */
        codeForc: number;
        /**
         * Cdfiel_CodeRaptContEparLogm
         */
        codeRaptContratEpargneLogement: number;
        /**
         * Idfppc_IdntPersApprDrtCont
         */
        idPersonneApportDroitContrat: string;
        /**
         * Cdfpdj_CodeDrtJust
         */
        codeDroitJustificatif: number;
        /**
         * Cdfird_CodeResrDrtAcqs
         */
        codeResrDroitAcqs: number;
        /**
         * RapatrierTranche
         */
        rapatrierTranche: boolean;
        /**
         * DroitEstCede
         */
        droitEstCede: boolean;
        /**
         * Nufpct_IdntContEl
         */
        idContratEpargneLogement: string;
        /**
         * AttributionPrime
         */
        attributionPrime: boolean;
    }
    interface ITrancheELMaj extends IElementMaj {
        /**
         * Txfpep_TxEpar
         */
        tauxEpargne: number;
        /**
         * Mtfaac_MtDrtAcqs
         */
        montantDroitAcqs: number;
        /**
         * Dtfpae_DateArreEpar
         * Type date au format yyyy-MM-dd
         */
        dateArreEpargne: string;
        /**
         * Lbfpet_LibletblOrigDrtPret
         */
        libletblOrigineDroitPret: string;
        /**
         * Cdfdpj_CodeDrtJust
         */
        codeDroitJustificatif: number;
        /**
         * Cdfiel_CodeRaptContEparLogm
         */
        codeRaptContratEpargneLogement: number;
        /**
         * Mtfida_MtDrtAcqsDepsOrigContEparLogm
         */
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfird_CodeResrDrtAcqs
         */
        codeResrDroitAcqs: number;
    }
    interface IOppositionMaj extends IElementMaj {
        /**
         * Cdfmop_CodeOppo
         */
        codeOpposition: string;
        /**
         * Ddfmop_DateDebtOppo
         * Type date au format yyyy-MM-dd
         */
        dateDebutOpposition: string;
        /**
         * Dffmop_DateFinOppo
         * Type date au format yyyy-MM-dd
         */
        dateFinOpposition: string;
    }
    interface IVersementFractionneMaj extends IElementMaj {
        /**
         * Ptfbmv_PerdicVerst
         */
        periodiciteVersement: number;
        /**
         * Mvfbmv_MtPremVerst
         */
        montantPremierVersement: number;
        /**
         * Cdfbve_ModeReglVerst
         */
        modeRegleVersement: string;
        /**
         * Nufbve_NumrDomcMadFond
         */
        numeroDomiciliationMADFond: string;
        /**
         * Mvfbmf_MtVerstFrct
         */
        montantVersementFraction: number;
        /**
         * Nbfbvs_NbVerstSouh
         */
        nombreVersementSouh: number;
        /**
         * Mvfcpm_MtVerstPerdMaxm
         */
        montantVersementPeriodeMaximum: number;
        /**
         * Mvfcim_MtVerstIntlMaxm
         */
        montantVersementInitialMaximum: number;
        /**
         * Txfcpv_QuotPremVerst
         */
        quotientPremierVersement: number;
        /**
         * Txfcvp_QuotVerstPerd
         */
        quotientVersementPeriode: number;
    }
    interface IBienAVendreMaj extends IElementMaj {
        /**
         * Cdfcni_CodeTypeObjtComl
         */
        codeTypeObjetCommercialisation: string;
        /**
         * Ctfcor_CodeTypeObjtRegl
         */
        codeTypeObjetRegle: string;
        /**
         * Ctfmve_TypeVent
         */
        typeVent: number;
        /**
         * Mtfmvc_PrixNetVndr
         */
        prixNetVendeur: number;
        /**
         * Mtfmva_MtCrdSurBienVend
         */
        montantCRDSurBienVend: number;
        /**
         * Mtfgrd_MtCrdRachSurBienVend
         */
        montantCRDRachSurBienVend: number;
        /**
         * Mtfaag_MtComsAgnc
         */
        montantComsAgence: number;
        /**
         * Mtfaoc_MtAcqs
         */
        montantAcqs: number;
        /**
         * Dtfaoc_DateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateAcqs: string;
        /**
         * Ctfmma_ModeAcqs
         */
        modeAcqs: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
    }
    interface IComplementDossierMaj extends IElementMaj {
        /**
         * Llfidr_LiblDelRelsProj
         */
        libelleDelReleaseProjet: string;
        /**
         * Ctfipt_CodePrrtTrt
         */
        codePrrtTraitement: string;
        /**
         * Dtfisi_DateSaisSurItnt
         * Type date au format yyyy-MM-dd
         */
        dateSaisieSurInternet: string;
        /**
         * Hefisi_HeurSaisSurItnt
         */
        heureSaisieSurInternet: number;
    }
    interface IReamenagementMaj extends IElementMaj {
        /**
         * Cdfare_TypeReam
         */
        typeReamenagement: number;
        /**
         * Ctfmup_UsgPretTres
         */
        usagePretTres: number;
        /**
         * Mtfmvc_AncnEche
         */
        ancnEcheance: number;
        /**
         * Mtfmva_CaptRestDu
         */
        capitalRestantDu: number;
        /**
         * Mtfmvd_ValrAchtObjtFinn
         */
        valeurAchtObjetFinancier: number;
        /**
         * Npfmrp_DureResdPretRefn
         */
        dureResdPretRefn: number;
        /**
         * Dtfoac_DateAcqsObjtRefn
         * Type date au format yyyy-MM-dd
         */
        dateAcqsObjetRefn: string;
        /**
         * Mtfaoc_CoutAcqsObjtRefn
         */
        coutAcqsObjetRefn: number;
    }
    interface IPretReamenageMaj extends IElementMaj {
        /**
         * Cdfpbq_CodeBanq
         */
        codeBanque: string;
        /**
         * Idfct1_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Idfaac_IdntDossComl
         */
        idDossierCommercialisation: string;
        /**
         * Idfao2_IdntDossOrig
         */
        idDossierOrigine: string;
        /**
         * Cdfcpo_CodePrdtetbl
         */
        codePrdtetbl: string;
        /**
         * Cdfars_CodeApparRes
         */
        codeApparRes: boolean;
        /**
         * Ctfars_TypeApparRes
         */
        typeApparRes: number;
        /**
         * Dtfccl_DateCltr
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Mtfard_MtRestDuSurPretRefn
         */
        montantRestantDuSurPretRefn: number;
        /**
         * Mefacg_MtechePerdPretRefn
         */
        mtechePeriodePretRefn: number;
        /**
         * Peface_Perdeche
         */
        perdeche: number;
        /**
         * Dffmce_DateFinCred
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * Lbfcvs_LiblPrdt
         */
        libelleProduit: string;
        /**
         * Ctfals_TypeRegl
         */
        typeRegle: number;
        /**
         * Ctfmtc_TypeCred
         */
        typeCredit: number;
        /**
         * Lbfaep_NometblPret
         */
        nometblPret: string;
        /**
         * Ctfpag_CodeOrigAppliGestCred
         */
        codeOrigineApplicationGestionCredit: number;
        /**
         * Cdfidr_CodeDev
         */
        codeDev: string;
    }
    interface IInfoRegroupementMaj extends IElementMaj {
        /**
         * Mkfd01_MtCrd
         */
        montantCRD: number;
        /**
         * Cifcao_OrigInfoSurMtCrd
         */
        origineInformationSurMontantCRD: number;
        /**
         * Dtfcer_DateEnvsPourRembAntc
         * Type date au format yyyy-MM-dd
         */
        dateEnvsPourRemboursementAnticipe: string;
        /**
         * Cdfara_CodeExstModlIndmRaSurCred
         */
        codeExisteModeleIndemniteRaSurCredit: number;
        /**
         * Mtfhir_MtEstmRa
         */
        montantEstmRa: number;
        /**
         * Cifca1_OrigInfoSurMtEstmIndmRa
         */
        origineInformationSurMontantEstmIndemniteRa: number;
        /**
         * Cifafr_CodeIndicFinnIndmRa
         */
        codeIndiceFinancierIndemniteRa: number;
        /**
         * Cifamp_CodeModlPrevPourRa
         */
        codeModelePrevPourRa: number;
        /**
         * Cifca2_OrigInfoSurExstPrevCont
         */
        origineInformationSurExistePrevContrat: number;
        /**
         * Npfapr_DelPrevCont
         */
        delPrevContrat: number;
        /**
         * Cifca3_OrigInfoSurDelPrevCont
         */
        origineInformationSurDelPrevContrat: number;
        /**
         * Cifagh_ExstUneGarnHypt
         */
        existeUneGarantieHypotheque: number;
        /**
         * Mtfgmt_MtFrsMainTotlUneGarnHypt
         */
        montantFrsMainTotalUneGarantieHypotheque: number;
        /**
         * Cifac4_OrigInfoSurMtFrsMainTotl
         */
        origineInformationSurMontantFrsMainTotal: number;
        /**
         * Cifafm_CodeFinnFrsMain
         */
        codeFinancierFrsMain: number;
        /**
         * Mtfaid_MtInteDusJusqFinCred
         */
        montantInterieurDusJusqFinCredit: number;
        /**
         * Ctfcaf_CodeAffecTypeObjt
         */
        codeAffectationTypeObjet: number;
        /**
         * Mefepd_MtecheHorsAccs
         */
        mtecheHorsAccessoire: number;
        /**
         * Cifca5_OrigInfoSurMtecheHorsAccs
         */
        origineInformationSurMtecheHorsAccessoire: number;
        /**
         * Trfrtx_TxRefe
         */
        tauxReference: number;
        /**
         * Cifac6_OrigInfoSurTxRefe
         */
        origineInformationSurTauxReference: number;
        /**
         * Dtfari_DateRappDonn
         * Type date au format yyyy-MM-dd
         */
        dateRappDonneur: string;
        /**
         * Cifac7_OrigInfoSurDateFinCred
         */
        origineInformationSurDateFinCredit: number;
        /**
         * Cifac8_OrigInfoSurMtRestDuSuurPretRach
         */
        origineInformationSurMontantRestantDuSuurPretRach: number;
        /**
         * Cifac9_OrigInfoSurTypeLoiScrvCredRach
         */
        origineInformationSurTypeLoiScrivenerCreditRach: number;
    }
    interface IPlanFinancementMaj extends IElementMaj {
        /**
         * Cifaai_IndicAllt
         */
        indiceAllt: number;
        /**
         * Mtfaap_MtApprPers
         */
        montantApportPersonne: number;
        /**
         * Mtfmpl_MtPretEparLogmTher
         */
        montantPretEpargneLogementTher: number;
        /**
         * Dtfcep_DateEditPropCred
         * Type date au format yyyy-MM-dd
         */
        dateEditPropCredit: string;
        /**
         * Npfamo_DurSouh
         */
        dureeSouh: number;
    }
    interface ICreditExterneMaj extends IElementMaj {
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Npface_DureAmrtMois
         */
        dureAmortissementMois: number;
        /**
         * Txface_TxAmrt
         */
        tauxAmortissement: number;
        /**
         * Mkface_MtCapt
         */
        montantCapital: number;
        /**
         * Meface_MtecheAmrt
         */
        mtecheAmortissement: number;
        /**
         * Peface_CodePerdAmrt
         */
        codePeriodeAmortissement: number;
        /**
         * Cdfaia_CodeIndicInteTantPPers
         */
        codeIndiceInterieurTantPPersonne: number;
        /**
         * Lbface_LiblLibrSurConcr
         */
        libelleLibrSurConcr: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfwna_CodeIndicNatrPret
         */
        codeIndiceNaturePret: number;
        /**
         * Cnfctx_CodeIndicTxRevs
         */
        codeIndiceTauxRevision: number;
        /**
         * Npfwdd_DureDiffMois
         */
        dureDiffereMois: number;
        /**
         * Ctfwsr_TypeSurt
         */
        typeSurtaxe: number;
        /**
         * Cdfwch_CodeIndicPresAssrPertEmpl
         */
        codeIndicePresAssurancePertEmpl: number;
        /**
         * Ctfwtb_CodeIndicTypeRemb
         */
        codeIndiceTypeRemboursement: number;
        /**
         * Txfatg_TegActu
         */
        tegActu: number;
        /**
         * Mefadi_MtecheDiff
         */
        mtecheDiffere: number;
        /**
         * Pefadi_CodePerdDiff
         */
        codePeriodeDiffere: number;
    }
    interface IPalierContraintMaj extends IElementMaj {
        /**
         * Dfpe_DateFinPerd
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriode: string;
        /**
         * Meface_MtEche
         */
        montantEcheance: number;
        /**
         * Npfpco_DurePalr
         */
        durePalier: number;
    }
    interface IVersementAttenduMaj extends IElementMaj {
        /**
         * Ctftve_TypeVerst
         */
        typeVersement: string;
        /**
         * Mtfvat_MtVerst
         */
        montantVersement: number;
        /**
         * Dtfdeb_DateDebt
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Dtfvfn_DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Ctfapi_PerdVerst
         */
        periodeVersement: number;
    }
    interface IProprietaireMaj extends IElementMaj {
        /**
         * Txffim_QuotPleinProp
         */
        quotientPleinProp: number;
        /**
         * Txfcnp_QuotNueProp
         */
        quotientNueProp: number;
        /**
         * Txfcdu_QuotUsuf
         */
        quotientUsuf: number;
        /**
         * Txfcus_QuotDroiUsag
         */
        quotientDroiUsag: number;
        /**
         * Ctfcdb_CdModDettnBien
         */
        codeModDettnBien: number;
    }
    interface IReferenceCadastraleMaj extends IElementMaj {
        /**
         * Lbfoca_ReferenceCadastre
         */
        referenceCadastre: string;
        /**
         * Lbfcsc_SectionCadastre
         */
        sectionCadastre: string;
        /**
         * Qtfcsc_SurfaceReferenceCadastrale
         */
        surfaceReferenceCadastrale: number;
        /**
         * Llfcob_commentaires
         */
        commentaires: string;
    }
    interface IReferenceLotMaj extends IElementMaj {
        /**
         * Lbfolt_ReferenceTypeDeLot
         */
        referenceTypeDeLot: string;
        /**
         * Llfcnl_NatureDuLot
         */
        natureDuLot: string;
        /**
         * Nbftta_Tantieme
         */
        tantieme: number;
    }
    interface IPatrimoineImmobilierMaj extends IElementMaj {
        /**
         * Ctfcnp_NatrPtrmImmb
         */
        naturePatrimoineImmobilier: number;
        /**
         * Cdfcdo_CodeIndicUsgLogm
         */
        codeIndiceUsageLogement: number;
        /**
         * Mtfmvb_ValrActlPtrm
         */
        valeurActuarielPatrimoine: number;
        /**
         * Dtfdac_DateAcqsPtrm
         * Type date au format yyyy-MM-dd
         */
        dateAcqsPatrimoine: string;
        /**
         * Mkfkrd_CaptRestSurPtrm
         */
        capitalRestantSurPatrimoine: number;
        /**
         * Mefhpa_MensPretSurPtrm
         */
        mensPretSurPatrimoine: number;
        /**
         * Dffacr_DateFinPretSurPtrm
         * Type date au format yyyy-MM-dd
         */
        dateFinPretSurPatrimoine: string;
    }
    interface IClausePersonnaliseeMaj extends IElementMaj {
        /**
         * DestClsePers
         */
        destinataireClausePersonne: number;
        /**
         * LiblClsePers
         */
        libelleClausePersonne: string;
    }
    interface IAvisMaj extends IElementMaj {
        /**
         * Dtfaad_DateSaisAvis
         * Type date au format yyyy-MM-dd
         */
        dateSaisieAvis: string;
        /**
         * Lbfaad_LiblAvis
         */
        libelleAvis: string;
        /**
         * Ctfita_CodeTyplAvis
         */
        codeTypologieAvis: string;
        /**
         * Valide
         */
        valide: boolean;
        /**
         * Motif
         */
        motif: string;
    }
    interface IAvisOrganismeExterneMaj extends IElementMaj {
        /**
         * Idfcex_IdntExtnEnv
         */
        idExterneEnvoi: string;
        /**
         * Dtfal1_DateEnv
         * Type date au format yyyy-MM-dd
         */
        dateEnvoi: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd
         */
        dateAvis: string;
        /**
         * Cifctr_CodeIndicTrtEnv
         */
        codeIndiceTraitementEnvoi: number;
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Cdfar2_CodeMotf
         */
        codeMotf: string;
        /**
         * Llfar1_LiblAvisDecs1
         */
        libelleAvisDecision1: string;
        /**
         * Llfar2_LiblAvisDecs2
         */
        libelleAvisDecision2: string;
        /**
         * Lbfpin_NomAgntInstr
         */
        nomAgentInstruction: string;
        /**
         * Nufpt1_NumeTeleInstr
         */
        numeroTeleInstruction: string;
        /**
         * Lbfpma_LiblAdrsMail
         */
        libelleAdresseMail: string;
        /**
         * Nufpt2_NumeFaxInstr
         */
        numeroFaxInstruction: string;
        /**
         * Cdfar1_TypeLiaiSaccefTp
         */
        typeLiaiSaccefTp: number;
        /**
         * Cdfar3_TypeRepnOrgnExtn
         */
        typeRepnOrgnExterne: number;
    }
    interface IVersementMaj extends IElementMaj {
        /**
         * MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * Txfave_PctVerst
         */
        pourcentageVersement: number;
        /**
         * Nufccl_NumeOrdrClss
         */
        numeroOrdreClasse: number;
        /**
         * Lbfasa_LiblAvnc
         */
        libelleAvnc: string;
    }
    interface IOrigineApportMaj extends IElementMaj {
        /**
         * Cdfoap_CodeOrigine
         */
        codeOrigine: number;
        /**
         * Mtfoap_MontantApportOrigine
         */
        montantApportOrigine: number;
    }
    interface IRedacteurActeMaj extends IElementMaj {
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Lbfpnm_NomRedcActe
         */
        nomReductionActe: string;
        /**
         * Lbfppn_PrenRedcActe
         */
        prenReductionActe: string;
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
    interface IAplLecture extends IElementLecture {
        /**
         * Mtfiba_MtApl
         */
        montantAPL: number;
        /**
         * TypeApl
         */
        typeAPL: number;
        /**
         * Ctfape_PerdicApl
         */
        periodiciteAPL: number;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
    }
    interface ILigneTirageLecture extends IElementLecture {
        /**
         * Idfcej_IdntCaisEprg
         */
        idCaisseEpargne: number;
        /**
         * Idfaac_IdntDossComl
         */
        idDossierCommercialisation: string;
        /**
         * Idfcct_IdntCredElem
         */
        idCreditElement: string;
        /**
         * Lbvspo_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Npfbfi_DureCred
         */
        dureCredit: number;
        /**
         * Pefcfi_PerdCred
         */
        periodeCredit: number;
        /**
         * Mtfact_MtActlCred
         */
        montantActuarielCredit: number;
        /**
         * Txfamo_TxActuCred
         */
        tauxActuCredit: number;
    }
    interface ILigneInvestissementLecture extends IElementLecture {
        /**
         * Idfaoe_IdntOperAsscLignInvs
         */
        idOperAssuranceLigneInvs: string;
        /**
         * Dtfano_DateNotfAccr
         * Type date au format yyyy-MM-dd
         */
        dateNotfAccr: string;
        /**
         * Dffano_DateFinValdAccr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAccr: string;
        /**
         * Mtfaso_MtEmprTotlSurPlan
         */
        montantEmpruntTotalSurPlan: number;
        /**
         * Mkfadi_MtRestDisp
         */
        montantRestantDisp: number;
        /**
         * Dtam_DateAnnlModf
         * Type date au format yyyy-MM-dd
         */
        dateAnnulationModification: string;
        /**
         * Cdam_CodeMotfAnnlModf
         */
        codeMotfAnnulationModification: string;
        /**
         * ListIdntLignTirg
         */
        listeIdLigneTirg: Array<string>;
    }
    interface IInfoRegroupementLecture extends IElementLecture {
        /**
         * Cdfpbq_CodeBanq
         */
        codeBanque: string;
        /**
         * Idfct1_IdntDossComl
         */
        idDossierCommercialisation: string;
        /**
         * Mkfd01_MtCrd
         */
        montantCRD: number;
        /**
         * Cifcao_OrigInfoSurMtCrd
         */
        origineInformationSurMontantCRD: number;
        /**
         * Dtfcer_DateEnvsPourRembAntc
         * Type date au format yyyy-MM-dd
         */
        dateEnvsPourRemboursementAnticipe: string;
        /**
         * Cdfara_CodeExstModlIndmRaSurCred
         */
        codeExisteModeleIndemniteRaSurCredit: number;
        /**
         * Mtfhir_MtEstmRa
         */
        montantEstmRa: number;
        /**
         * Cifca1_OrigInfoSurMtEstmIndmRa
         */
        origineInformationSurMontantEstmIndemniteRa: number;
        /**
         * Cifafr_CodeIndicFinnIndmRa
         */
        codeIndiceFinancierIndemniteRa: number;
        /**
         * Cifamp_CodeModlPrevPourRa
         */
        codeModelePrevPourRa: number;
        /**
         * Cifca2_OrigInfoSurExstPrevCont
         */
        origineInformationSurExistePrevContrat: number;
        /**
         * Npfapr_DelPrevCont
         */
        delPrevContrat: number;
        /**
         * Cifca3_OrigInfoSurDelPrevCont
         */
        origineInformationSurDelPrevContrat: number;
        /**
         * Cifagh_ExstUneGarnHypt
         */
        existeUneGarantieHypotheque: number;
        /**
         * Mtfgmt_MtFrsMainTotlUneGarnHypt
         */
        montantFrsMainTotalUneGarantieHypotheque: number;
        /**
         * Cifac4_OrigInfoSurMtFrsMainTotl
         */
        origineInformationSurMontantFrsMainTotal: number;
        /**
         * Cifafm_CodeFinnFrsMain
         */
        codeFinancierFrsMain: number;
        /**
         * Mtfaid_MtInteDusJusqFinCred
         */
        montantInterieurDusJusqFinCredit: number;
        /**
         * Ctfcaf_CodeAffecTypeObjt
         */
        codeAffectationTypeObjet: number;
        /**
         * Mefepd_MtecheHorsAccs
         */
        mtecheHorsAccessoire: number;
        /**
         * Cifca5_OrigInfoSurMtecheHorsAccs
         */
        origineInformationSurMtecheHorsAccessoire: number;
        /**
         * Trfrtx_TxRefe
         */
        tauxReference: number;
        /**
         * Cifac6_OrigInfoSurTxRefe
         */
        origineInformationSurTauxReference: number;
        /**
         * Dtfari_DateRappDonn
         * Type date au format yyyy-MM-dd
         */
        dateRappDonneur: string;
        /**
         * Cifac7_OrigInfoSurDateFinCred
         */
        origineInformationSurDateFinCredit: number;
        /**
         * Cifac8_OrigInfoSurMtRestDuSuurPretRach
         */
        origineInformationSurMontantRestantDuSuurPretRach: number;
        /**
         * Cifac9_OrigInfoSurTypeLoiScrvCredRach
         */
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        /**
         * IdntPretReam
         */
        idPretReamenagement: string;
    }
    interface ICompteProfessionnelLecture extends ICompteLecture {
        /**
         * Nofmcp_RefePrdtCe
         */
        referenceProduitCE: string;
        /**
         * Nbfmjp_NbJourDepsAutrPourCpteProf
         */
        nombreJourDepsAutrePourCompteProf: number;
        /**
         * Cdfmxp_CodeCtx
         */
        codeCtx: number;
    }
    interface ICompteDepotLecture extends ICompteLecture {
        /**
         * Cdfmce_CodePrdtCe
         */
        codeProduitCE: number;
        /**
         * Nofmet_NumeEnttTitl
         */
        numeroEntiteTitulaire: number;
        /**
         * Lbfmet_LiblEnttTitl
         */
        libelleEntiteTitulaire: string;
        /**
         * Cdfmmc_CodeCompoEntiteTitulaire
         */
        codeCompositionEntiteTitulaire: number;
        /**
         * Cdfmcp_CodeEttPrdt
         */
        codeEtatProduit: number;
        /**
         * Mtfmmy_SoldMoyeLongTermCpteDepoCe
         */
        soldMoyenLongTermeCompteDepoCE: number;
        /**
         * Mtfmbs_SoldMiniCpteDepoCe
         */
        soldMinimumCompteDepoCE: number;
        /**
         * Mtfmds_SoldRelCpteDepoCe
         */
        soldRelCompteDepoCE: number;
        /**
         * Ctfmca_CodeTypeCart
         */
        codeTypeCartographie: number;
        /**
         * Dtfmca_DateDelvCart
         * Type date au format yyyy-MM-dd
         */
        dateDelvCartographie: string;
        /**
         * Ctfmtd_CodeTypeDecvCpteDepo
         */
        codeTypeDecvCompteDepo: number;
        /**
         * Mtfmde_MtDecvAutrSurCpteDepo
         */
        montantDecvAutreSurCompteDepo: number;
        /**
         * Mtfmvr_MtTotlVerstCredRelsSurCpteDepo
         */
        montantTotalVersementCreditReleaseSurCompteDepo: number;
        /**
         * Nbfmjd_NbJourDepsAutrDecv
         */
        nombreJourDepsAutreDecv: number;
        /**
         * Mtfmpe_MtPrelExteRelsSurCpteDepo
         */
        montantPrelExteReleaseSurCompteDepo: number;
        /**
         * Cdfmdj_CodeDepsJust
         */
        codeDepsJustificatif: number;
        /**
         * Cdfmdi_CodePresDecvIrreSurCpteDepo
         */
        codePresDecvIrreSurCompteDepo: number;
        /**
         * Cdfmae_CodeExstCartBancHorsCe
         */
        codeExisteCartographieBancaireHorsCE: number;
        /**
         * Cdfmrc_CodeComnRelvCpteHorsCe
         */
        codeComnRelvCompteHorsCE: number;
        /**
         * Cdfmch_CodeExstCheq
         */
        codeExisteCheq: number;
        /**
         * Mtfmyc_SoldMoyeMensCrtCpteDepoCe
         */
        soldMoyenMensCreationCompteDepoCE: number;
        /**
         * Mtfmcm_MvtCredMensSurCpteDepo
         */
        mvtCreditMensSurCompteDepo: number;
        /**
         * Ctfmfc_CodeTypeFctCpteDepoCeHorsCe
         */
        codeTypeFctCompteDepoCEHorsCE: number;
        /**
         * Ddfmhc_DateOuerCpteDepoHorsCe
         * Type date au format yyyy-MM-dd
         */
        dateOuerCompteDepoHorsCE: string;
        /**
         * Cdfmbq_Codeetbl
         */
        codeEtablissement: string;
        /**
         * Cdfmgu_CodeGuic
         */
        codeGuic: string;
        /**
         * Lifcee_LibEtabHorsCE
         */
        libelleEtablissementHorsCE: string;
        /**
         * Mcffa1_MtTotAgiosM1HorsCE
         */
        montantTotalAgiosM1HorsCE: number;
        /**
         * Mcffa2_MtTotAgiosM2HorsCE
         */
        montantTotalAgiosM2HorsCE: number;
        /**
         * Mcffa3_MtTotAgiosM3HorsCE
         */
        montantTotalAgiosM3HorsCE: number;
        /**
         * Ciffci_IndCommIntCDDHorsCE
         */
        indicateurCommIntervCDDHorsCE: number;
        /**
         * Ciffim_IndImpayeCDDHorsCE
         */
        indicateurImpayeCDDHorsCE: number;
        /**
         * Ciffrc_IndRejetChqCDDHorsCE
         */
        indicateurRejetChequeCDDHorsCE: number;
        /**
         * Ciffrp_IndRejetPrlvtCDDHorsCE
         */
        indicateurRejetPrelevCDDHorsCE: number;
        /**
         * Cifffi_IndFraisDosBDFCDDHorsCE
         */
        indicateurFraisDossBDFCDDHorsCE: number;
        /**
         * Ciffpp_IndPrlvtPartielCDDHorsCE
         */
        indicateurPrelevPartCDDHorsCE: number;
        /**
         * Nbffd1_NbJoursDebM1CDDHorsCE
         */
        nombreJoursDebiteurM1CDDHorsCE: number;
        /**
         * Nbffd2_NbJoursDebM2CDDHorsCE
         */
        nombreJoursDebiteurM2CDDHorsCE: number;
        /**
         * Nbffd3_NbJoursDebM3CDDHorsCE
         */
        nombreJoursDebiteurM3CDDHorsCE: number;
        /**
         * Mtfcsa_MtSoldeArreteM1CDDHorsCE
         */
        montantSoldeArreteM1CDDHorsCE: number;
        /**
         * Mtfcsb_MtSoldeArreteM2CDDHorsCE
         */
        montantSoldeArreteM2CDDHorsCE: number;
        /**
         * Mtfcsc_MtSoldeArreteM3CDDHorsCE
         */
        montantSoldeArreteM3CDDHorsCE: number;
    }
    interface ICompteLecture extends IElementLecture {
        /**
         * Nufpcp_NumeCpte
         */
        numeroCompte: string;
        /**
         * Dtfmou_DateOuvr
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Ctfpdt_ModeCompo
         */
        modeComposition: number;
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
        /**
         * Cdfppr_TypeCpte
         */
        typeCompte: string;
        /**
         * Libelle
         */
        libelle: string;
    }
    interface ICreditExistantLecture extends IChargeLecture {
        /**
         * Cdfccg_CodeTypeCredCe
         */
        codeTypeCreditCE: string;
        /**
         * Cdfopc_CodePrsCompCred
         */
        codePresenceCompCredit: number;
        /**
         * Cdfimu_InvsUsgLocf
         */
        invsUsageLocf: number;
        /**
         * Ctfmlc_LienPersCred
         */
        lienPersonneCredit: number;
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Ctfmtc_CodeTypeCred
         */
        codeTypeCredit: number;
        /**
         * Mtfaoc_MtOrigCred
         */
        montantOrigineCredit: number;
        /**
         * Mkfard_MtRestDu
         */
        montantRestantDu: number;
        /**
         * Ddfmam_DateDebtAmrt
         * Type date au format yyyy-MM-dd
         */
        dateDebutAmortissement: string;
        /**
         * Dtfam0_DateMer0
         * Type date au format yyyy-MM-dd
         */
        dateMER0: string;
        /**
         * Dffmce_DateFinCred
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * Cdfmce_CodePrdtCe
         */
        codeProduitCE: number;
        /**
         * Nofmcp_RefePrdtCe
         */
        referenceProduitCE: string;
        /**
         * Nofmc2_CompRefePrdtCe
         */
        compReferenceProduitCE: string;
        /**
         * Nofmet_NumeEnttTitlCe
         */
        numeroEntiteTitulaireCE: number;
        /**
         * Lbfmet_LiblEnttTitlCe
         */
        libelleEntiteTitulaireCE: string;
        /**
         * Mkfmpc_MtCaptDejaRemb
         */
        montantCapitalDejaRemboursement: number;
        /**
         * Mefmpe_MtPrcheche
         */
        montantPrcheche: number;
        /**
         * Mefmea_MtPrmeecheAmrt
         */
        montantPrmeecheAmortissement: number;
        /**
         * Mefmpc_MtechePrsComp
         */
        mtechePresenceComp: number;
        /**
         * Nbfmim_NbImpayes
         */
        nombreImpayes: number;
        /**
         * Nbfmir_NbImpeReglSurLesMoisGlss
         */
        nombreImpeRegleSurLesMoisGlss: number;
        /**
         * Ptfmam_PerdAmrt
         */
        periodeAmortissement: number;
        /**
         * Npfmam_DureAmrt
         */
        dureAmortissement: number;
        /**
         * Cifgeh_CodeIndicAInclettHypt
         */
        codeIndiceAInclettHypotheque: boolean;
        /**
         * Mtfggi_MtGarn
         */
        montantGarantie: number;
        /**
         * Cmfmro_MotfRembAntc
         */
        motfRemboursementAnticipe: string;
        /**
         * Cdfmro_RembAvecAntc
         */
        remboursementAvecAnticipe: number;
        /**
         * Lbfmro_LiblMotfRembAntc
         */
        libelleMotfRemboursementAnticipe: string;
        /**
         * InvestissementLocatifVisible
         */
        investissementLocatifVisible: boolean;
        /**
         * InvestissementLocatifAccessible
         */
        investissementLocatifAccessible: boolean;
        /**
         * ListIdntPhssCredExst
         */
        listeIdPhssCreditExiste: Array<string>;
        /**
         * LibelleCodeTypeCred
         */
        libelleCodeTypeCred: string;
    }
    interface IChargeLecture extends IElementLecture {
        /**
         * Ctfpch_TypeDech
         */
        typeDech: string;
        /**
         * Mtfpch_MtChrg
         */
        montantCharge: number;
        /**
         * Txfmrc_TxPondChrg
         */
        tauxPondereCharge: number;
        /**
         * Npfpch_NbPerdParAn
         */
        nombrePeriodeParAn: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Nufpct_NumeContEprg
         */
        numeroContratEpargne: string;
        /**
         * Cdfpao_CodeExstRessApreOper
         */
        codeExisteRessourceApreOper: number;
        /**
         * Lbfpch_LiblCharge
         */
        libelleCharge: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * IdntGrpeIntv
         */
        idGrpeIntervenant: string;
    }
    interface IInterditBancaireLecture extends IElementLecture {
        /**
         * Cdfpbd_CodeRepnBdf
         */
        codeRepnBDF: number;
        /**
         * Cdfpfi_CodeRepnFicp
         */
        codeRepnFicp: number;
        /**
         * Ctfpbd_CodeTypeRepnBdf
         */
        codeTypeRepnBDF: string;
        /**
         * Ctfpfi_CodeTypeRepnFicp
         */
        codeTypeRepnFicp: string;
        /**
         * Dtfpbd_DateApplBdf
         * Type date au format yyyy-MM-dd
         */
        dateApplicationBDF: string;
        /**
         * Dtfpfi_DateApplFicp
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFicp: string;
        /**
         * Lbfpbd_LiblRepnBdf
         */
        libelleRepnBDF: string;
        /**
         * Lbfpfi_LiblRepnFicp
         */
        libelleRepnFicp: string;
        /**
         * Cdfmas_CodeArreSurSalr
         */
        codeArreSurSalr: number;
        /**
         * Dtfpfb_DateApplFbe
         * Type date au format yyyy-MM-dd
         */
        dateApplicationFbe: string;
        /**
         * Cdfpfb_CodeRepnFbe
         */
        codeRepnFbe: number;
        /**
         * Cdfmln_CodePresListnSurCntrTechRegn
         */
        codePresListnSurCntrTechniqueRegn: number;
        /**
         * Lbfmln_LiblListnSurCntrTechRegn
         */
        libelleListnSurCntrTechniqueRegn: string;
        /**
         * Cbfpfb_CodeCottFibenDirg
         */
        codeCotisationFibenDirg: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IActiviteLecture extends IElementLecture {
        /**
         * Cdfmcs_CodeClssRisqCsp
         */
        codeClasseRisqueCSP: number;
        /**
         * Lbfmcs_LibelleClssRisqCsp
         */
        libelleClasseRisqueCSP: string;
        /**
         * Dtfmcs_DateEfftCsp
         * Type date au format yyyy-MM-dd
         */
        dateEffetCSP: string;
        /**
         * Dtfmea_DateEmbc
         * Type date au format yyyy-MM-dd
         */
        dateEmbc: string;
        /**
         * Ctfmce_CodeTypeContEmbc
         */
        codeTypeContratEmbc: number;
        /**
         * Libelle_TypeContratEmbc
         */
        libelle_TypeContratEmbc: string;
        /**
         * Lbfmpl_RaisSoclEmplr
         */
        raisonSocialeEmplr: string;
        /**
         * Cpfmpl_CodePostEmplr
         */
        codePosteEmplr: string;
        /**
         * Lofmpl_CodeApNEmplr
         */
        codeApNEmplr: string;
        /**
         * Cdfmdo_CodeSalrDomcCe
         */
        codeSalrDomiciliationCE: number;
        /**
         * Cdfmsa_CodePresActvSalr
         */
        codePresActiviteSalr: number;
        /**
         * Cdfmsu_CodePresSuivPers
         */
        codePresSuivantPersonne: number;
        /**
         * Nbfmkm_NbKilmEtrLogmTrvl
         */
        nombreKilmEntreLogementTrvl: number;
        /**
         * Dffmea_DateFinCdd
         * Type date au format yyyy-MM-dd
         */
        dateFinCdd: string;
        /**
         * Ctfmsa_CodeSectActv
         */
        codeSecteurActivite: number;
        /**
         * Libelle_SecteurActv
         */
        libelle_SecteurActivite: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IButLocatifLecture extends IElementLecture {
        /**
         * Cdfopl_IndicPretTrnsLocf
         */
        indicePretTransfertLocf: boolean;
        /**
         * Nufofg_NumeDecsFavrGlbl
         */
        numeroDecisionFavrGlbl: number;
        /**
         * Dtfodf_DateDecsFavrLoct
         * Type date au format yyyy-MM-dd
         */
        dateDecisionFavrLoct: string;
        /**
         * Cdfofg_IndicDecsGlblFavr
         */
        indiceDecisionGlblFavr: boolean;
        /**
         * Dtfocl_DateConvLoct
         * Type date au format yyyy-MM-dd
         */
        dateConventionLoct: string;
        /**
         * Cdfofi_NatrAvtgFisc
         */
        natureAvantageFiscal: string;
        /**
         * Mtfofi_MtAvtgFisc
         */
        montantAvantageFiscal: number;
        /**
         * Mtfogl_MtFrsAnnlGestLogm
         */
        montantFrsAnnulationGestionLogement: number;
        /**
         * Mtfoel_MtFrsAnnlEntnLogm
         */
        montantFrsAnnulationEntnLogement: number;
        /**
         * Mtfofo_MtTaxeFonc
         */
        montantTaxeFonc: number;
        /**
         * Cdfolg_PresServVacnLogm
         */
        presServiceVacnLogement: boolean;
        /**
         * Cdfoli_PresUneAssrLoyeImpe
         */
        presUneAssuranceLoyeImpe: boolean;
        /**
         * Mtfolp_MtAnnuLoyePerc
         */
        montantAnnuLoyePerc: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface ISoulteFinanceeLecture extends IElementLecture {
        /**
         * Mtfoac_MtSoul
         */
        montantSoul: number;
        /**
         * Ctfmpt_PermDetrSiSoulFaitSuiteDivo
         */
        permDetrSiSoulFaitSuiteDivo: boolean;
        /**
         * Txfapo_PctPrprOrig
         */
        pourcentageProprietaireOrigine: number;
        /**
         * Mtfmvc_ValrActvCorrValrBienOrig
         */
        valeurActiviteCorrValeurBienOrigine: number;
        /**
         * Nbfosh_SurfHabtBienSous
         */
        surfHabitationBienSous: number;
        /**
         * Dtfoac_DateAcqsBienSous
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBienSous: string;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * IdntBienSjac
         */
        idBienSousJacent: string;
    }
    interface ITerrainSousJacentLecture extends IBienSousJacentLecture {
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfoft_TerrEstFinnParCred
         */
        terrEstFinancierParCredit: number;
        /**
         * Dtfoat_DateEntrPtrmDateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateEntrPatrimoineDateAcqs: string;
        /**
         * MtLoyeParMois
         */
        montantLoyeParMois: number;
        /**
         * Ctfmma_ModeAcqsTerr
         */
        modeAcqsTerr: number;
    }
    interface IDetailCoutObjetLecture extends IElementLecture {
        /**
         * Cnfctr_CodeNatrTrvx
         */
        codeNatureTravaux: string;
        /**
         * Ctfccc_CodeTyplCoutTrvx
         */
        codeTypologieCoutTravaux: string;
        /**
         * Mtfoct_CoutTrvx
         */
        coutTravaux: number;
        /**
         * IdntTrvxFinn
         */
        idTravauxFinancier: string;
    }
    interface ITerrainFinanceLecture extends IElementLecture {
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
        /**
         * Dtfaot_DateAcqsTerr
         * Type date au format yyyy-MM-dd
         */
        dateAcqsTerr: string;
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfodt_CodeDonTerr
         */
        codeDonTerr: number;
        /**
         * Cdfoft_CodeFinnTerr
         */
        codeFinancierTerr: number;
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface IDossierLecture extends IElementLecture {
        /**
         * Idfadi_IdntDoss
         */
        idDossier: string;
        /**
         * VersDoss
         */
        versionDossier: number;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * Cdfiei_CodeImprParExprVers
         */
        codeImprParExpressionVersement: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Nbfapo_NbPassOffr
         */
        nombrePassOffre: number;
        /**
         * Dtfmva_DateDernReslAdr
         * Type date au format yyyy-MM-dd
         */
        dateDernierReslAdresse: string;
        /**
         * Dgfano_DateHorzProj
         * Type date au format yyyy-MM-dd
         */
        dateHorizonProjet: string;
        /**
         * Cdfado_CodeVisbInstr
         */
        codeVisbInstruction: number;
        /**
         * DossExstCent
         */
        dossierExisteCentral: boolean;
        /**
         * NbPersAssrParDeft
         */
        nombrePersonneAssuranceParDeft: number;
        /**
         * ModfEffcPendSess
         */
        modificationEffcPendantSess: boolean;
        /**
         * ModeOuvrDoss
         */
        modeOuvertureDossier: number;
        /**
         * DossModf
         */
        dossierModification: boolean;
        /**
         * ExisteMandatSEPA
         */
        existeMandatSEPA: boolean;
        /**
         * PjPrealableToutesRecues
         */
        pjPrealableToutesRecues: boolean;
        /**
         * PjSuspensifToutesRecues
         */
        pjSuspensifToutesRecues: boolean;
        /**
         * TypeMoteurADR
         */
        typeMoteurADR: number;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Cifoli_CodeLivrnImme
         */
        codeLivrnImme: boolean;
        /**
         * Nofaac_NumeAccrCmps
         */
        numeroAccrCmps: number;
        /**
         * Cnfaeg_EnggRevc
         */
        engagementRevc: number;
        /**
         * Dtfasp_DateSignPret
         * Type date au format yyyy-MM-dd
         */
        dateSignePret: string;
        /**
         * EvenMomnVertPourContConf
         */
        evenMomnVertPourContratConf: string;
        /**
         * Dtfisy_DateTrt
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * DateTrtRegl
         * Type date au format yyyy-MM-dd
         */
        dateTraitementRegle: string;
        /**
         * Cdfbve_ModReglVerst
         */
        modRegleVersement: string;
        /**
         * Cdfiro_IndicPrrgOffr
         */
        indicePrrgOffre: number;
        /**
         * Idfccp_IdntConvPres
         */
        idConventionPres: string;
        /**
         * Idfipp_IdntPres
         */
        idPres: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Mtfasi_MtSouhIntlEmpr
         */
        montantSouhInitialEmprunt: number;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Cefapd_CodeEttPlns
         */
        codeEtatPlns: number;
        /**
         * Cdfaar_CodeApplAnlsRisq
         */
        codeApplicationAnlsRisque: boolean;
        /**
         * Idfaac_IdntDossGest
         */
        idDossierGestion: string;
        /**
         * Idfaeg_IdntelemStrcGest
         */
        idElementStructureGestion: string;
        /**
         * Idfast_IdntelemStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Idfagd_CodeAgntDecd
         */
        codeAgentDecd: string;
        /**
         * Ctfacf_CodeTyplCadrFisc
         */
        codeTypologieCadreFiscal: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cifcsb_CodeLevrSecrBanc
         */
        codeLevrSecrBancaire: number;
        /**
         * Dtfccr_DateCretDoss
         * Type date au format yyyy-MM-dd
         */
        dateCreationDossier: string;
        /**
         * Dmfidm_DateDernMaj
         * Type date au format yyyy-MM-dd
         */
        dateDernierMAJ: string;
        /**
         * Ctfado_EtatDoss
         */
        etatDossier: number;
        /**
         * Cefado_SousEtatDoss
         */
        sousEtatDossier: number;
        /**
         * Dtfadf_DateDemnFinn
         * Type date au format yyyy-MM-dd
         */
        dateDemandeFinancier: string;
        /**
         * Dtfaem_DateemssOffr
         * Type date au format yyyy-MM-dd
         */
        dateemssOffre: string;
        /**
         * Dtfirl_DateCiblProj
         * Type date au format yyyy-MM-dd
         */
        dateCiblProjet: string;
        /**
         * Cdfaod_CodeOrigDemn
         */
        codeOrigineDemande: string;
        /**
         * Dtfard_DateAccrPrtr
         * Type date au format yyyy-MM-dd
         */
        dateAccrPrtr: string;
        /**
         * Cefahb_CodeEttEnggHors
         */
        codeEtatEngagementHors: number;
        /**
         * Mtfahb_MtEnggHorsBiln
         */
        montantEngagementHorsBiln: number;
        /**
         * Dffavl_DateFinValdOffr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeOffre: string;
        /**
         * Dtfaro_DateRecpOffrParClnt
         * Type date au format yyyy-MM-dd
         */
        dateRecuperationOffreParClient: string;
        /**
         * Dtfaef_DateEfftOffr
         * Type date au format yyyy-MM-dd
         */
        dateEffetOffre: string;
        /**
         * Cdfdrg_ModeRegl
         */
        modeRegle: string;
        /**
         * Nufpr1_NumeCpteSecoPrel
         */
        numeroCompteSecoPrel: string;
        /**
         * Nufddt_DomcTresCpteSeco
         */
        domiciliationTresCompteSeco: string;
        /**
         * Dtfart_DateLimtRetrEmprLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardEmpruntLoiConsommation: string;
        /**
         * Dffaof_DateLimtRetrOffrLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardOffreLoiConsommation: string;
        /**
         * Dffaao_DateMiniAccpOffrLoiImmo
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAccpOffreLoiImmobilier: string;
        /**
         * Dtfasg_DateSignEmpr
         * Type date au format yyyy-MM-dd
         */
        dateSigneEmprunt: string;
        /**
         * Dtfare_DateRefuOffrParEmpr
         * Type date au format yyyy-MM-dd
         */
        dateRefuOffreParEmprunt: string;
        /**
         * Dffavi_DateMinnPourVerstFondLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateMinnPourVersementFondLoiConsommation: string;
        /**
         * Dtfieo_DateEdtnOffr
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * Idfaex_IdntExtnDoss
         */
        idExterneDossier: string;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Cdfafc_CodeAuthCont
         */
        codeAuthentiqueContrat: boolean;
        /**
         * Npfars_DelRetrScrv1
         */
        delRetardScrivener1: number;
        /**
         * Cdfive_CodeVersCret
         */
        codeVersementCreation: string;
        /**
         * Cdfwve_CodeVersDernModf
         */
        codeVersementDernierModification: string;
        /**
         * Mtfcon_MtVerstCnvn
         */
        montantVersementCnvn: number;
        /**
         * Txaufi_PctFinn
         */
        pourcentageFinancier: number;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Ctfco2_TorechlVerst
         */
        torechlVersement: string;
        /**
         * Cdfali_CodeEtatEnvDossSaccef
         */
        codeEtatEnvoiDossierSaccef: number;
        /**
         * Dtfali_DateLieEnvSaccef
         * Type date au format yyyy-MM-dd
         */
        dateLieEnvoiSaccef: string;
        /**
         * Idfcpo_IdntEnvSaccef
         */
        idEnvoiSaccef: string;
        /**
         * Idfaoc_IdntOrigDemn
         */
        idOrigineDemande: string;
        /**
         * Lbfaoc_LiblOrigDemn
         */
        libelleOrigineDemande: string;
        /**
         * Dgfapn_DatePrevSignNotr
         * Type date au format yyyy-MM-dd
         */
        datePrevSigneNotaire: string;
        /**
         * Nufadn_RefeExtnDoss
         */
        referenceExterneDossier: string;
        /**
         * Idfas5_ElemStrc5
         */
        elementStructure5: string;
        /**
         * Idfas6_ElemStrc6
         */
        elementStructure6: string;
        /**
         * ModeDecn
         */
        modeDecn: boolean;
        /**
         * Llfic1_CritRechAppli1
         */
        critereRechercheApplication1: string;
        /**
         * Llfic2_CritRechAppli2
         */
        critereRechercheApplication2: string;
        /**
         * Llfic3_CritRechAppli3
         */
        critereRechercheApplication3: string;
        /**
         * Llfic4_CritRechAppli4
         */
        critereRechercheApplication4: string;
        /**
         * Llfic5_CritRechAppli5
         */
        critereRechercheApplication5: string;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Dtfano_DateSignDossEnv
         * Type date au format yyyy-MM-dd
         */
        dateSigneDossierEnvoi: string;
        /**
         * Dffan1_DateFinValdAccr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAccr: string;
        /**
         * IndicOffrPre
         */
        indiceOffrePre: boolean;
        /**
         * Ctfipi_CodePrcsInstr
         */
        codeProcessusInstruction: string;
        /**
         * Ctfitr_CodeTrtComp
         */
        codeTraitementComp: string;
        /**
         * Cefipc_CodeEttPrsChrgDoss
         */
        codeEtatPresenceChargeDossier: number;
        /**
         * Cefiac_CodeEttActvDoss
         */
        codeEtatActiviteDossier: number;
        /**
         * IndicPrsChrgPiecJustParPiec
         */
        indicePresenceChargePieceJustificatifParPiece: number;
        /**
         * Idfabp_IdntAgntBoActlChrgDoss
         */
        idAgentBoActuarielChargeDossier: string;
        /**
         * Idfaes_IdntAgntPrprDoss
         */
        idAgentProprietaireDossier: string;
        /**
         * Idfaei_IdntAgntInstrDoss
         */
        idAgentInstructionDossier: string;
        /**
         * Idfaec_IdntAgntConnDoss
         */
        idAgentConnaissanceDossier: string;
        /**
         * Idfada_IdntAgntPourDecsConf
         */
        idAgentPourDecisionConf: string;
        /**
         * Idfael_IdntEnttDecs
         */
        idEntiteDecision: string;
        /**
         * Idfabi_IdntEnttPourTrnfBo
         */
        idEntitePourTransfertBo: string;
        /**
         * BlocNotes
         */
        blocNotes: string;
        /**
         * Ctfcse_CodeEtpeSiml
         */
        codeEtapeSimulation: number;
        /**
         * Idfifd_NumeFichPres
         */
        numeroFichPres: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Idfdma_ReferenceMandat
         */
        referenceMandat: string;
        /**
         * Dgfdms_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Ctfind_PrecisionTaux
         */
        precisionTaux: number;
        /**
         * Cdficd_CodeDevCredDev
         */
        codeDevCreditDev: string;
        /**
         * Idfics_NumCompteDev
         */
        numeroCompteDev: string;
        /**
         * Ctfimr_ModeReglDev
         */
        modeRegleDev: string;
        /**
         * Ctfimv_ModReglVerstDev
         */
        modRegleVersementDev: string;
        /**
         * IdntComplDoss
         */
        idComplementDossier: string;
        /**
         * Cifiid_IntegrationDossierDeVente
         */
        integrationDossierDeVente: number;
        /**
         * Ctficc_CanalDeCreation
         */
        canalDeCreation: string;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Defiag_DateEnvConvAG
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiConventionAG: string;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * Cifpcd_OuvCpteSupEchCred
         */
        ouvertureCompteSupEchCredit: boolean;
        /**
         * CodeTypeEditionAutorisee
         */
        codeTypeEditionAutorisee: string;
        /**
         * EstEcoPtzCopro
         */
        estEcoPtzCopro: boolean;
        /**
         * EstCopro100
         */
        estCopro100: boolean;
        /**
         * AutoriserCalculIndicateurEditionAgence
         */
        autoriserCalculIndicateurEditionAgence: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * IdntBlcNotsDivr
         */
        idBlocNoteNotsDivr: string;
        /**
         * IdntRedcActe
         */
        idReductionActe: string;
        /**
         * IdntEmpr
         */
        idEmprunt: string;
        /**
         * ListIdntEven
         */
        listeIdEven: Array<string>;
        /**
         * ListIdntAvis
         */
        listeIdAvis: Array<string>;
        /**
         * ListIdntAlrtEntr
         */
        listeIdAlerteEntr: Array<string>;
        /**
         * ListIdntAlrtSort
         */
        listeIdAlerteSort: Array<string>;
        /**
         * ListIdntPrjt
         */
        listeIdProjet: Array<string>;
        /**
         * ListIdntVerst
         */
        listeIdVersement: Array<string>;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * ListIdntGarants
         */
        listeIdGarants: Array<string>;
        /**
         * ListIdntClssPers
         */
        listeIdClassePersonne: Array<string>;
        /**
         * ListIdntAgents
         */
        listeIdAgents: Array<string>;
        /**
         * IdntPoolEPS
         */
        idPoolEPS: string;
        /**
         * Cmmics_MotifConsultFICP
         */
        motifConsultFICP: number;
        /**
         * Mtfaff_MtFraisDebloAuto
         */
        montantFraisDebloAuto: number;
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
    interface ISuiviPlanifieLecture extends IElementLecture {
        /**
         * Idfarv_IdntSuivPlnf
         */
        idSuivantPlafond: string;
        /**
         * Ctfcrw_CateSuivPlnf
         */
        cateSuivantPlafond: string;
        /**
         * Ctfcrv_CodeTypeSuivPlnf
         */
        codeTypeSuivantPlafond: string;
        /**
         * Ddfarv_DatePremSuiv
         * Type date au format yyyy-MM-dd
         */
        datePremierSuivant: string;
        /**
         * Dtfarv_DateSuivPlnf
         * Type date au format yyyy-MM-dd
         */
        dateSuivantPlafond: string;
        /**
         * Lbfarw_LiblLibrAsscSuiv
         */
        libelleLibrAssuranceSuivant: string;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Npfcrw_NbPerdSuivPlnf
         */
        nombrePeriodeSuivantPlafond: number;
        /**
         * Ptfcrv_CodePerdSuivPlnf
         */
        codePeriodeSuivantPlafond: number;
        /**
         * Ctfcrd_ReglDeclt
         */
        regleDeclaration: string;
        /**
         * Ctfcfp_TypePhasSuivPlnf
         */
        typePhaseSuivantPlafond: string;
        /**
         * Npfcrx_NbPerdDelDeclSuivPlnf
         */
        nombrePeriodeDelDeclarationSuivantPlafond: number;
        /**
         * Ptfcrx_CodePerdDelDeclSuivPlnf
         */
        codePeriodeDelDeclarationSuivantPlafond: number;
        /**
         * Ctfcrx_CodeAffecSuivPlnfPrdt
         */
        codeAffectationSuivantPlafondProduit: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface IOrigineApportLecture extends IElementLecture {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Nofapd_NumeroPlanDossier
         */
        numeroPlanDossier: number;
        /**
         * Cdfoap_CodeOrigine
         */
        codeOrigine: number;
        /**
         * Mtfoap_MontantApportOrigine
         */
        montantApportOrigine: number;
    }
    interface IGarantLecture extends IElementLecture {
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmpf_NbPersGrpe
         */
        nombrePersonneGrpe: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * Ctfmli_TypeLienEtrLesPers
         */
        typeLienEntreLesPersonne: number;
        /**
         * Lbfmgp_NomGrpe
         */
        nomGrpe: string;
        /**
         * Lbfmae_AgsEnfn
         */
        ageEnfant: Array<number>;
        /**
         * Dtfmrp_DateDernRapp
         * Type date au format yyyy-MM-dd
         */
        dateDernierRapp: string;
        /**
         * Nbfma_AnneNaisEnfn
         */
        anneNaisEnfant: Array<number>;
        /**
         * Cdfmec_CodeEmplrComun
         */
        codeEmplrComun: number;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmac_AncnChrgLiesAOperImmb
         */
        ancnChargeLiesAOperImmobilier: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Nbfmvo_NbVoit
         */
        nombreVoiture: number;
        /**
         * Mcfpre_MtRessPond
         */
        montantRessourcePondere: number;
        /**
         * Mcfpce_MtChrgEmprHorsPrjtPond
         */
        montantChargeEmpruntHorsProjetPondere: number;
        /**
         * Mcfpac_MtAutrChrgPond
         */
        montantAutreChargePondere: number;
        /**
         * TotalEpargneContractuelle
         */
        totalEpargneContractuelle: number;
        /**
         * TotalEpargneLiquide
         */
        totalEpargneLiquide: number;
        /**
         * MtRessAvntProj
         */
        montantRessourceAvenantProjet: number;
        /**
         * MtChrgEmprAvntProj
         */
        montantChargeEmpruntAvenantProjet: number;
        /**
         * MtAutrChrgAvntProj
         */
        montantAutreChargeAvenantProjet: number;
        /**
         * RestVivrAvntProj
         */
        restantVivrAvenantProjet: number;
        /**
         * TxEndtAvntProj
         */
        tauxEndtAvenantProjet: number;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * ListIdntCpteDeptGrpePers
         */
        listeIdCompteDeptGrpePersonne: Array<string>;
        /**
         * ListIdntCptePrfsPers
         */
        listeIdComptePrfsPersonne: Array<string>;
        /**
         * ListIdntRessGrpe
         */
        listeIdRessourceGrpe: Array<string>;
        /**
         * ListIdntChrgGrpe
         */
        listeIdChargeGrpe: Array<string>;
        /**
         * ListIdntCredExstGrpe
         */
        listeIdCreditExisteGrpe: Array<string>;
        /**
         * ListIdntFamlEprgPers
         */
        listeIdFamilleEpargnePersonne: Array<string>;
    }
    interface IRefusAssuranceExterneLecture extends IElementLecture {
        /**
         * Lvfdmr_MotifRefus
         */
        motifRefus: string;
        /**
         * Idfadi_IdDossierInstruction
         */
        idDossierInstruction: string;
        /**
         * Nofapd_NumeroRelatifPlanDossier
         */
        numeroRelatifPlanDossier: number;
        /**
         * Idfppe_Identifiantpersonne
         */
        identifiantpersonne: string;
        /**
         * Nofrfp_NumRangRefusProposition
         */
        numeroRangRefusProposition: number;
        /**
         * Lbfcia_CompagnieAssurance
         */
        compagnieAssurance: string;
        /**
         * Lbfrcc_ReferenceContrat
         */
        referenceContrat: string;
        /**
         * Ddfddr_DateReceptionDemande
         * Type date au format yyyy-MM-dd
         */
        dateReceptionDemande: string;
        /**
         * Ddfpic_DateImpressionDemande
         * Type date au format yyyy-MM-dd
         */
        dateImpressionDemande: string;
        /**
         * Cdfdda_CodeDecision
         */
        codeDecision: number;
        /**
         * Llfprp_RolePersonne
         */
        rolePersonne: string;
    }
    interface ILabel {
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IChampTextBox {
        /**
         * Text
         */
        text: string;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IFC003DC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IChampRadioButton {
        /**
         * Checked1
         */
        checked1: boolean;
        /**
         * Checked2
         */
        checked2: boolean;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle1
         */
        libelle1: string;
        /**
         * Libelle2
         */
        libelle2: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IChampCheckBox {
        /**
         * Checked
         */
        checked: boolean;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IChampTextBoxDate {
        /**
         * Text
         * Type date au format yyyy-MM-dd
         */
        text: string;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IFC003PC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFC003RE {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFC004LA {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * ReservesRedacteur
         */
        reservesRedacteur: IChampTextBox;
    }
    interface IFC007ARO {
        /**
         * ContenuConditionsSuspensives
         */
        contenuConditionsSuspensives: IChampTextBox;
    }
    interface IFC010CP {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface ICreditTauxFixeLecture {
        /**
         * ReferenceIndiceCredit
         */
        referenceIndiceCredit: IChampTextBox;
        /**
         * TauxFixeCredit
         */
        tauxFixeCredit: IChampTextBox;
    }
    interface IFC010HS {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * ListeCreditTauxFixe
         */
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        /**
         * RaisonCaution
         */
        raisonCaution: IChampTextBox;
        /**
         * RepresentantCaution
         */
        representantCaution: IChampTextBox;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: IChampTextBox;
        /**
         * DatePouvoirCaution
         */
        datePouvoirCaution: IChampTextBoxDate;
        /**
         * RepresPersoMoraleAssurance
         */
        represPersoMoraleAssurance: IChampTextBox;
        /**
         * AgissantQualitePersoMoraleAssurance
         */
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu1PersoMoraleAssurance
         */
        vertu1PersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu2PersoMoraleAssurance
         */
        vertu2PersoMoraleAssurance: IChampTextBox;
        /**
         * DatePourvoirPersoMoraleAssurance
         */
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        /**
         * Vertu4PersoMoraleAssurance
         */
        vertu4PersoMoraleAssurance: IChampTextBox;
        /**
         * CompoOffrePersoMoraleAssurance
         */
        compositionOffrePersoMoraleAssurance: IChampTextBox;
    }
    interface IFC010HSC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IPretDevise {
        /**
         * IdentifiantProduitPretDevise
         */
        identifiantProduitPretDevise: IChampTextBox;
        /**
         * NumCreditPlanPretDevise
         */
        numeroCreditPlanPretDevise: IChampTextBox;
        /**
         * TypePretDevise
         */
        typePretDevise: IChampTextBox;
        /**
         * IdggiPretDevise
         */
        idggiPretDevise: IChampTextBox;
        /**
         * CdngPretDevise
         */
        cdngPretDevise: IChampTextBox;
        /**
         * FraisEnDevises
         */
        fraisEnDevises: IChampTextBox;
        /**
         * DevisePretDevise
         */
        devisePretDevise: IChampTextBox;
        /**
         * FraisContrePartiePretDevise
         */
        fraisContrePartiePretDevise: IChampTextBox;
    }
    interface IFC010LCD {
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * RibPretDevise
         */
        ribPretDevise: IChampTextBox;
        /**
         * PretDevise
         */
        pretDevise: Array<IPretDevise>;
        /**
         * MontantMiniDeblocagePretDevise
         */
        montantMinimumDeblocagePretDevise: IChampTextBox;
        /**
         * RaisonCaution
         */
        raisonCaution: IChampTextBox;
        /**
         * RepresentantCaution
         */
        representantCaution: IChampTextBox;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: IChampTextBox;
        /**
         * DatePouvoirCaution
         */
        datePouvoirCaution: IChampTextBoxDate;
    }
    interface IFC010LCM {
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * RibPretDevise
         */
        ribPretDevise: IChampTextBox;
        /**
         * PretDevise
         */
        pretDevise: Array<IPretDevise>;
        /**
         * RaisonCaution
         */
        raisonCaution: IChampTextBox;
        /**
         * RepresentantCaution
         */
        representantCaution: IChampTextBox;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: IChampTextBox;
        /**
         * DatePouvoirCaution
         */
        datePouvoirCaution: IChampTextBoxDate;
        /**
         * MontantMiniDeblocagePretDevise
         */
        montantMinimumDeblocagePretDevise: IChampTextBox;
    }
    interface IFC010LI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * ListeCreditTauxFixe
         */
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        /**
         * RaisonCaution
         */
        raisonCaution: IChampTextBox;
        /**
         * RepresentantCaution
         */
        representantCaution: IChampTextBox;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: IChampTextBox;
        /**
         * DatePouvoirCaution
         */
        datePouvoirCaution: IChampTextBoxDate;
        /**
         * RepresPersoMoraleAssurance
         */
        represPersoMoraleAssurance: IChampTextBox;
        /**
         * AgissantQualitePersoMoraleAssurance
         */
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu1PersoMoraleAssurance
         */
        vertu1PersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu2PersoMoraleAssurance
         */
        vertu2PersoMoraleAssurance: IChampTextBox;
        /**
         * DatePourvoirPersoMoraleAssurance
         */
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        /**
         * Vertu4PersoMoraleAssurance
         */
        vertu4PersoMoraleAssurance: IChampTextBox;
        /**
         * CompoOffrePersoMoraleAssurance
         */
        compositionOffrePersoMoraleAssurance: IChampTextBox;
    }
    interface IChampTextArea {
        /**
         * Text
         */
        text: string;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IFC010LIA {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
        /**
         * PouvoirEmprunteurPersMorale
         */
        pouvoirEmprunteurPersonneMorale: IChampTextArea;
    }
    interface IFC010LIC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFC017ANL {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFC017BON {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CAT {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CGV {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFC017CIF {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFC017SCP {
        /**
         * IndexGarantie
         */
        indexGarantie: number;
        /**
         * ExisteAgrementGarantie
         */
        existeAgrementGarantie: IChampCheckBox;
        /**
         * DateAgrementGarantie
         */
        dateAgrementGarantie: IChampTextBoxDate;
        /**
         * PublierGreffeGarantie
         */
        publierGreffeGarantie: IChampCheckBox;
        /**
         * ConjointsEmprunteursGarantie
         */
        conjointsEmprunteursGarantie: IChampTextBox;
        /**
         * ConjointsCautionsGarantie
         */
        conjointsCautionsGarantie: IChampTextBox;
    }
    interface IFC019AN {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * An1AttestationPTZ
         */
        an1AttestationPTZ: IChampCheckBox;
        /**
         * An2AttestationPTZ
         */
        an2AttestationPTZ: IChampCheckBox;
        /**
         * An3AttestationPTZ
         */
        an3AttestationPTZ: IChampCheckBox;
        /**
         * An4AttestationPTZ
         */
        an4AttestationPTZ: IChampCheckBox;
        /**
         * An5AttestationPTZ
         */
        an5AttestationPTZ: IChampCheckBox;
        /**
         * An6AttestationPTZ
         */
        an6AttestationPTZ: IChampCheckBox;
        /**
         * An7AttestationPTZ
         */
        an7AttestationPTZ: IChampCheckBox;
        /**
         * An8AttestationPTZ
         */
        an8AttestationPTZ: IChampCheckBox;
        /**
         * An9AttestationPTZ
         */
        an9AttestationPTZ: IChampCheckBox;
        /**
         * AnXAttestationPTZ
         */
        anXAttestationPTZ: IChampCheckBox;
        /**
         * AnXIAttestationPTZ
         */
        anXIAttestationPTZ: IChampCheckBox;
        /**
         * AnIIIAttestationPTZ
         */
        anIIIAttestationPTZ: IChampCheckBox;
        /**
         * AnIVAttestationPTZ
         */
        anIVAttestationPTZ: IChampCheckBox;
        /**
         * AnXIVAttestationPTZ
         */
        anXIVAttestationPTZ: IChampCheckBox;
    }
    interface IFC028PNO {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SousignePouvoirNotaire
         */
        sousignePouvoirNotaire: IChampTextBox;
        libelleEtabPouvoirNotaire: IChampTextBox;
        /**
         * DatePouvoirNotaire
         */
        datePouvoirNotaire: IChampTextBoxDate;
        /**
         * Nom1PouvoirNotaire
         */
        nom1PouvoirNotaire: IChampTextBox;
        /**
         * Nom2PouvoirNotaire
         */
        nom2PouvoirNotaire: IChampTextBox;
        /**
         * Nom3PouvoirNotaire
         */
        nom3PouvoirNotaire: IChampTextBox;
        /**
         * Nom4PouvoirNotaire
         */
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IDonneesCreditLecture {
        /**
         * IdCreditModifie
         */
        idCreditModifie: string;
        /**
         * MontantCreditModifie
         */
        montantCreditModifie: IChampTextBox;
    }
    interface IFC050ACA {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SaisieComplementaireNecessaire
         */
        saisieComplementaireNecessaire: boolean;
        /**
         * NomPersonneMorale
         */
        nomPersonneMorale: IChampTextBox;
        /**
         * NombreCreditsAModifierACA
         */
        nombreCreditsAModifierACA: number;
        /**
         * ListeDonneesCreditAModifierACA
         */
        listeDonneesCreditAModifierACA: Array<IDonneesCreditLecture>;
    }
    interface IChampComboBox {
        /**
         * ListValue
         */
        listeValue: Array<string>;
        /**
         * SelectedValue
         */
        selectedValue: string;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IChampCheckBoxList {
        /**
         * ListValue
         */
        listeValue: Array<string>;
        /**
         * ListSelectedValue
         */
        listeSelectedValue: Array<string>;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IFC050FSC {
        /**
         * DateTransfertBoSuiveuse
         */
        dateTransfertBoSuiveuse: IChampTextBoxDate;
        /**
         * DateDispositionFondsSuiveuse
         */
        dateDispositionFondsSuiveuse: IChampTextBoxDate;
        /**
         * DateEnvoiNumerisationSuiveuse
         */
        dateEnvoiNumerisationSuiveuse: IChampTextBoxDate;
        /**
         * DateSignatureNotaireSuiveuse
         */
        dateSignatureNotaireSuiveuse: IChampTextBoxDate;
        /**
         * EditionSuiveuse
         */
        editionSuiveuse: IChampComboBox;
        /**
         * Statut1Suiveuse
         */
        statut1Suiveuse: IChampCheckBoxList;
        /**
         * Statut2Suiveuse
         */
        statut2Suiveuse: IChampCheckBoxList;
        /**
         * Statut3Suiveuse
         */
        statut3Suiveuse: IChampCheckBoxList;
        /**
         * NumeroDossierAssocieSuiveuse
         */
        numeroDossierAssocieSuiveuse: IChampTextBox;
        /**
         * CorbeilleWorkflowSuiveuse
         */
        corbeilleWorkflowSuiveuse: IChampComboBox;
        /**
         * CommentaireSuiveuse
         */
        commentaireSuiveuse: IChampTextBox;
    }
    interface IChampLabelMultiLine {
        /**
         * ListValue
         */
        listeValue: Array<string>;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IChampCache {
        /**
         * Value
         */
        value: string;
        /**
         * Enabled
         */
        enabled: boolean;
        /**
         * Visible
         */
        visible: boolean;
        /**
         * Type
         */
        type: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Required
         */
        required: boolean;
    }
    interface IFC050FSI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SaisieComplementaireNecessaire
         */
        saisieComplementaireNecessaire: boolean;
        /**
         * Messages
         */
        messages: IChampLabelMultiLine;
        /**
         * NumeroOrias
         */
        numeroOrias: IChampCache;
        /**
         * NombreCreditsAModifier
         */
        nombreCreditsAModifier: IChampCache;
        /**
         * ListeDonneesCreditAModifier
         */
        listeDonneesCreditAModifier: Array<IDonneesCreditLecture>;
    }
    interface IDonneesCautionPersonneMoraleLecture {
        /**
         * RepresCautionPersoMorale
         */
        represCautionPersoMorale: IChampTextBox;
        /**
         * AgissantQualitéCaution
         */
        agissantQualiteCaution: IChampTextBox;
        /**
         * AgissantVertuCaution
         */
        agissantVertuCaution: IChampTextBox;
        /**
         * Agissant3Caution
         */
        agissant3Caution: IChampTextBox;
        /**
         * Agissant4Caution
         */
        agissant4Caution: IChampTextBox;
        /**
         * Agissant5Caution
         */
        agissant5Caution: IChampTextBox;
    }
    interface IFC104LEC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * ListeDonneesCautionPersonneMorale
         */
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleLecture>;
    }
    interface IFCM03DC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFCM03RE {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
    }
    interface IFCM04LA {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * ReservesRedacteur
         */
        reservesRedacteur: IChampTextBox;
    }
    interface IFCM10HS {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * ListeCreditTauxFixe
         */
        listeCreditTauxFixe: Array<ICreditTauxFixeLecture>;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonCaution
         */
        raisonCaution: IChampTextBox;
        /**
         * RepresentantCaution
         */
        representantCaution: IChampTextBox;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: IChampTextBox;
        /**
         * DatePouvoirCaution
         */
        datePouvoirCaution: IChampTextBoxDate;
        /**
         * RepresPersoMoraleAssurance
         */
        represPersoMoraleAssurance: IChampTextBox;
        /**
         * AgissantQualitePersoMoraleAssurance
         */
        agissantQualitePersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu1PersoMoraleAssurance
         */
        vertu1PersoMoraleAssurance: IChampTextBox;
        /**
         * Vertu2PersoMoraleAssurance
         */
        vertu2PersoMoraleAssurance: IChampTextBox;
        /**
         * DatePourvoirPersoMoraleAssurance
         */
        datePourvoirPersoMoraleAssurance: IChampTextBoxDate;
        /**
         * Vertu4PersoMoraleAssurance
         */
        vertu4PersoMoraleAssurance: IChampTextBox;
        /**
         * CompoOffrePersoMoraleAssurance
         */
        compositionOffrePersoMoraleAssurance: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM10HSC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: IChampRadioButton;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: IChampTextBox;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: IChampCheckBox;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: IChampTextBox;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: IChampTextBox;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: IChampTextBox;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: IChampTextBox;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: IChampTextBox;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: IChampTextBox;
        /**
         * DateRCSEmprunteurBailleur
         */
        dateRCSEmprunteurBailleur: IChampTextBoxDate;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: IChampTextBox;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: IChampTextBox;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: IChampTextBox;
        /**
         * DatePouvoirEmprunteurPersMorale
         */
        datePouvoirEmprunteurPersonneMorale: IChampTextBoxDate;
    }
    interface IFCM17ANL {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17BON {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CAT {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CFG {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * NomCopropriete
         */
        nomCopropriete: IChampTextBox;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: IChampTextBox;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: IChampTextBox;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: IChampTextBox;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: IChampTextBox;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: IChampTextBox;
        /**
         * EffetCopropriete
         */
        effetCopropriete: IChampTextBox;
    }
    interface IFCM17CGV {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17CIF {
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
    }
    interface IFCM17NFX {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * PresenceEINonEmprunteur
         */
        presenceEINonEmprunteur: IChampRadioButton;
        /**
         * LibelleEINonEmprunteur
         */
        libelleEINonEmprunteur: IChampTextBox;
        /**
         * AccordConjointEINonEmprunteur
         */
        accordConjointEINonEmprunteur: IChampRadioButton;
        /**
         * LibelleConjointEINonEmprunteur
         */
        libelleConjointEINonEmprunteur: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
        /**
         * RaisonSocialePersMoraleNantissement
         */
        raisonSocialePersonneMoraleNantissement: IChampTextBox;
        /**
         * RepresPersMoraleNantissement
         */
        represPersonneMoraleNantissement: IChampTextBox;
        /**
         * EnQualitePersMoraleNantissement
         */
        enQualitePersonneMoraleNantissement: IChampTextBox;
        /**
         * Vertu1PersMoraleNantissement
         */
        vertu1PersonneMoraleNantissement: IChampTextBox;
        /**
         * Vertu2PersMoraleNantissement
         */
        vertu2PersonneMoraleNantissement: IChampTextBox;
    }
    interface IFCM17FDC {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * PresenceEINonEmprunteur
         */
        presenceEINonEmprunteur: IChampRadioButton;
        /**
         * LibelleEINonEmprunteur
         */
        libelleEINonEmprunteur: IChampTextBox;
        /**
         * AccordConjointEINonEmprunteur
         */
        accordConjointEINonEmprunteur: IChampRadioButton;
        /**
         * LibelleConjointEINonEmprunteur
         */
        libelleConjointEINonEmprunteur: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
        /**
         * RaisonSocialePersMoraleNantissement
         */
        raisonSocialePersonneMoraleNantissement: IChampTextBox;
        /**
         * RepresPersMoraleNantissement
         */
        represPersonneMoraleNantissement: IChampTextBox;
        /**
         * EnQualitePersMoraleNantissement
         */
        enQualitePersonneMoraleNantissement: IChampTextBox;
        /**
         * Vertu1PersMoraleNantissement
         */
        vertu1PersonneMoraleNantissement: IChampTextBox;
        /**
         * Vertu2PersMoraleNantissement
         */
        vertu2PersonneMoraleNantissement: IChampTextBox;
    }
    interface IOutilLecture {
        /**
         * MarqueOutil
         */
        marqueOutil: IChampTextBox;
        /**
         * TypeOutil
         */
        typeOutil: IChampTextBox;
        /**
         * DateLivraisonOutil
         */
        dateLivraisonOutil: IChampTextBoxDate;
        /**
         * SerieOutil
         */
        serieOutil: IChampTextBox;
        /**
         * PrixOutil
         */
        prixOutil: IChampTextBox;
        /**
         * VendIntituleOutil
         */
        vendIntituleOutil: IChampTextBox;
        /**
         * VendCpltIntOutil
         */
        vendCpltIntituleOutil: IChampTextBox;
        /**
         * VendAdrOutil
         */
        vendAdresseOutil: IChampTextBox;
        /**
         * VendCpltAdrOutil
         */
        vendCpltAdresseOutil: IChampTextBox;
        /**
         * VendCPOutil
         */
        vendCPOutil: IChampTextBox;
        /**
         * VendVilleOutil
         */
        vendVilleOutil: IChampTextBox;
        /**
         * AdrOutil
         */
        adresseOutil: IChampTextBox;
        /**
         * CpltAdrOutil
         */
        cpltAdresseOutil: IChampTextBox;
        /**
         * CPOutil
         */
        cPOutil: IChampTextBox;
        /**
         * VilleOutil
         */
        villeOutil: IChampTextBox;
        /**
         * DeplacementOutil
         */
        deplacementOutil: IChampCheckBox;
    }
    interface IFCM17OME {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: IChampTextBox;
        /**
         * NomMandataire
         */
        nomMandataire: IChampTextBox;
        /**
         * VertuMandataire
         */
        vertuMandataire: IChampTextBox;
        /**
         * NombreOutils
         */
        nombreOutils: number;
        /**
         * ListeOutil
         */
        listeOutil: Array<IOutilLecture>;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: IChampTextBox;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: IChampTextBox;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: IChampTextBox;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: IChampTextBox;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: IChampTextBox;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: IChampTextBox;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: IChampTextBox;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: IChampTextBox;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: IChampTextBox;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: IChampTextBox;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: IChampTextBox;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: IChampTextBox;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: IChampTextBox;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: IChampTextBox;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: IChampTextBox;
        /**
         * VilleTribunal
         */
        villeTribunal: IChampTextBox;
    }
    interface IFCM20CLI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * DateDebutLigneInvestissement
         */
        dateDebutLigneInvestissement: IChampTextBoxDate;
        /**
         * DateFinLigneInvestissement
         */
        dateFinLigneInvestissement: IChampTextBoxDate;
        /**
         * ATauxFixeLigneInvestissement
         */
        aTauxFixeLigneInvestissement: IChampRadioButton;
        /**
         * TauxFixeLigneInvestissement
         */
        tauxFixeLigneInvestissement: IChampTextBox;
        /**
         * TauxRevisableLigneInvestissement
         */
        tauxRevisableLigneInvestissement: IChampTextBox;
        /**
         * ReferenceIndiceLigneInvestissement
         */
        referenceIndiceLigneInvestissement: IChampTextBox;
    }
    interface IFCM28PNO {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SousignePouvoirNotaire
         */
        sousignePouvoirNotaire: IChampTextBox;
        /**
         * DatePouvoirNotaire
         */
        datePouvoirNotaire: IChampTextBoxDate;
        /**
         * Nom1PouvoirNotaire
         */
        nom1PouvoirNotaire: IChampTextBox;
        /**
         * Nom2PouvoirNotaire
         */
        nom2PouvoirNotaire: IChampTextBox;
        /**
         * Nom3PouvoirNotaire
         */
        nom3PouvoirNotaire: IChampTextBox;
        /**
         * Nom4PouvoirNotaire
         */
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFCM99LEI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: IChampTextBox;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: IChampRadioButton;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: IChampTextBox;
    }
    interface IFCX28PNO {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SousignePouvoirNotaire
         */
        sousignePouvoirNotaire: IChampTextBox;
        /**
         * DatePouvoirNotaire
         */
        datePouvoirNotaire: IChampTextBoxDate;
        /**
         * Nom1PouvoirNotaire
         */
        nom1PouvoirNotaire: IChampTextBox;
        /**
         * Nom2PouvoirNotaire
         */
        nom2PouvoirNotaire: IChampTextBox;
        /**
         * Nom3PouvoirNotaire
         */
        nom3PouvoirNotaire: IChampTextBox;
        /**
         * Nom4PouvoirNotaire
         */
        nom4PouvoirNotaire: IChampTextBox;
    }
    interface IFZ001SI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * AccordPrincipe
         */
        accordPrincipe: IChampCheckBox;
        /**
         * Rdv
         */
        rdv: IChampCheckBox;
        /**
         * Deroulement
         */
        deroulement: IChampCheckBox;
    }
    interface INOTICES {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * AjoutNotices
         */
        ajoutNotices: IChampCheckBox;
    }
    interface ISaisiesComplementaireLecture extends IElementLecture {
        /**
         * FC003DC
         */
        fC003DC: IFC003DC;
        /**
         * FC003PC
         */
        fC003PC: IFC003PC;
        /**
         * FC003RE
         */
        fC003RE: IFC003RE;
        /**
         * FC004LA
         */
        fC004LA: IFC004LA;
        /**
         * FC007ARO
         */
        fC007ARO: IFC007ARO;
        /**
         * FC010CP
         */
        fC010CP: IFC010CP;
        /**
         * FC010HS
         */
        fC010HS: IFC010HS;
        /**
         * FC010HSC
         */
        fC010HSC: IFC010HSC;
        /**
         * FC010LCD
         */
        fC010LCD: IFC010LCD;
        /**
         * FC010LCM
         */
        fC010LCM: IFC010LCM;
        /**
         * FC010LI
         */
        fC010LI: IFC010LI;
        /**
         * FC010LIA
         */
        fC010LIA: IFC010LIA;
        /**
         * FC010LIC
         */
        fC010LIC: IFC010LIC;
        /**
         * FC017ANL
         */
        fC017ANL: IFC017ANL;
        /**
         * FC017BON
         */
        fC017BON: IFC017BON;
        /**
         * FC017CAT
         */
        fC017CAT: IFC017CAT;
        /**
         * FC017CGV
         */
        fC017CGV: IFC017CGV;
        /**
         * FC017CIF
         */
        fC017CIF: IFC017CIF;
        /**
         * FC017SCP
         */
        fC017SCP: IFC017SCP;
        /**
         * FC019AN
         */
        fC019AN: IFC019AN;
        /**
         * FC028PNO
         */
        fC028PNO: IFC028PNO;
        /**
         * FC050ACA
         */
        fC050ACA: IFC050ACA;
        /**
         * FC050FSC
         */
        fC050FSC: IFC050FSC;
        /**
         * FC050FSI
         */
        fC050FSI: IFC050FSI;
        /**
         * FC104LEC
         */
        fC104LEC: IFC104LEC;
        /**
         * FCM03DC
         */
        fCM03DC: IFCM03DC;
        /**
         * FCM03RE
         */
        fCM03RE: IFCM03RE;
        /**
         * FCM04LA
         */
        fCM04LA: IFCM04LA;
        /**
         * FCM10HS
         */
        fCM10HS: IFCM10HS;
        /**
         * FCM10HSC
         */
        fCM10HSC: IFCM10HSC;
        /**
         * FCM17ANL
         */
        fCM17ANL: IFCM17ANL;
        /**
         * FCM17BON
         */
        fCM17BON: IFCM17BON;
        /**
         * FCM17CAT
         */
        fCM17CAT: IFCM17CAT;
        /**
         * FCM17CFG
         */
        fCM17CFG: IFCM17CFG;
        /**
         * FCM17CGV
         */
        fCM17CGV: IFCM17CGV;
        /**
         * FCM17CIF
         */
        fCM17CIF: IFCM17CIF;
        /**
         * FCM17FDC
         */
        fCM17FDC: IFCM17FDC;
        /**
         * FCM17OME
         */
        fCM17OME: IFCM17OME;
        /**
         * FCM20CLI
         */
        fCM20CLI: IFCM20CLI;
        /**
         * FCM28PNO
         */
        fCM28PNO: IFCM28PNO;
        /**
         * FCM99LEI
         */
        fCM99LEI: IFCM99LEI;
        /**
         * FCX28PNO
         */
        fCX28PNO: IFCX28PNO;
        /**
         * FZ001SI
         */
        fZ001SI: IFZ001SI;
        /**
         * NOTICES
         */
        nOTICES: INOTICES;
        /**
         * NomPersonneMorale
         */
        nomPersonneMorale: string;
        /**
         * An1AttestationPTZ
         */
        an1AttestationPTZ: boolean;
        /**
         * An2AttestationPTZ
         */
        an2AttestationPTZ: boolean;
        /**
         * An3AttestationPTZ
         */
        an3AttestationPTZ: boolean;
        /**
         * An4AttestationPTZ
         */
        an4AttestationPTZ: boolean;
        /**
         * An5AttestationPTZ
         */
        an5AttestationPTZ: boolean;
        /**
         * An6AttestationPTZ
         */
        an6AttestationPTZ: boolean;
        /**
         * An7AttestationPTZ
         */
        an7AttestationPTZ: boolean;
        /**
         * An8AttestationPTZ
         */
        an8AttestationPTZ: boolean;
        /**
         * An9AttestationPTZ
         */
        an9AttestationPTZ: boolean;
        /**
         * AnXAttestationPTZ
         */
        anXAttestationPTZ: boolean;
        /**
         * AnXIAttestationPTZ
         */
        anXIAttestationPTZ: boolean;
        /**
         * AnIIIAttestationPTZ
         */
        anIIIAttestationPTZ: boolean;
        /**
         * AnIVAttestationPTZ
         */
        anIVAttestationPTZ: boolean;
        /**
         * AnXIVAttestationPTZ
         */
        anXIVAttestationPTZ: boolean;
        /**
         * ValeurCondGenLIA
         */
        valeurConditionGenLIA: boolean;
        /**
         * VisibiliteCheckBoxCondGenLIA
         */
        visibiliteCheckBoxConditionGenLIA: boolean;
        /**
         * ValeurCondSpeLIA
         */
        valeurConditionSpeLIA: boolean;
        /**
         * VisibiliteCheckBoxCondSpeLIA
         */
        visibiliteCheckBoxConditionSpeLIA: boolean;
        /**
         * NomCopropriete
         */
        nomCopropriete: string;
        /**
         * Adresse1Copropriete
         */
        adresse1Copropriete: string;
        /**
         * Adresse2Copropriete
         */
        adresse2Copropriete: string;
        /**
         * Adresse3Copropriete
         */
        adresse3Copropriete: string;
        /**
         * TypePersonneCopropriete
         */
        typePersonneCopropriete: string;
        /**
         * MandataireCopropriete
         */
        mandataireCopropriete: string;
        /**
         * EffetCopropriete
         */
        effetCopropriete: string;
        /**
         * ListeCreditTauxFixe
         */
        listeCreditTauxFixe: Array<ICreditTauxFixeMaj>;
        /**
         * ContenuConditionsSuspensives
         */
        contenuConditionsSuspensives: string;
        /**
         * PresenceEmprunteurIndividuel
         */
        presenceEmprunteurIndividuel: boolean;
        /**
         * LibelleEmprunteurIndividuel
         */
        libelleEmprunteurIndividuel: string;
        /**
         * AccordConjointEmprunteurIndividuel
         */
        accordConjointEmprunteurIndividuel: boolean;
        /**
         * LibelleConjointEmprunteurIndividuel
         */
        libelleConjointEmprunteurIndividuel: string;
        /**
         * PresenceEINonEmprunteur
         */
        presenceEINonEmprunteur: boolean;
        /**
         * LibelleEINonEmprunteur
         */
        libelleEINonEmprunteur: string;
        /**
         * AccordConjointEINonEmprunteur
         */
        accordConjointEINonEmprunteur: boolean;
        /**
         * LibelleConjointEINonEmprunteur
         */
        libelleConjointEINonEmprunteur: string;
        /**
         * DateTransfertBoSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateTransfertBoSuiveuse: string;
        /**
         * DateDispositionFondsSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateDispositionFondsSuiveuse: string;
        /**
         * DateEnvoiNumerisationSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiNumerisationSuiveuse: string;
        /**
         * DateSignatureNotaireSuiveuse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureNotaireSuiveuse: string;
        /**
         * EditionSuiveuse
         */
        editionSuiveuse: string;
        /**
         * Statut1Suiveuse
         */
        statut1Suiveuse: Array<string>;
        /**
         * Statut2Suiveuse
         */
        statut2Suiveuse: Array<string>;
        /**
         * Statut3Suiveuse
         */
        statut3Suiveuse: Array<string>;
        /**
         * NumeroDossierAssocieSuiveuse
         */
        numeroDossierAssocieSuiveuse: string;
        /**
         * CorbeilleWorkflowSuiveuse
         */
        corbeilleWorkflowSuiveuse: string;
        /**
         * CommentaireSuiveuse
         */
        commentaireSuiveuse: string;
        /**
         * IndexGarantie
         */
        indexGarantie: number;
        /**
         * ExisteAgrementGarantie
         */
        existeAgrementGarantie: boolean;
        /**
         * DateAgrementGarantie
         * Type date au format yyyy-MM-dd
         */
        dateAgrementGarantie: string;
        /**
         * PublierGreffeGarantie
         */
        publierGreffeGarantie: boolean;
        /**
         * ConjointsEmprunteursGarantie
         */
        conjointsEmprunteursGarantie: string;
        /**
         * ConjointsCautionsGarantie
         */
        conjointsCautionsGarantie: string;
        /**
         * DateDebutLigneInvestissement
         * Type date au format yyyy-MM-dd
         */
        dateDebutLigneInvestissement: string;
        /**
         * DateFinLigneInvestissement
         * Type date au format yyyy-MM-dd
         */
        dateFinLigneInvestissement: string;
        /**
         * ATauxFixeLigneInvestissement
         */
        aTauxFixeLigneInvestissement: boolean;
        /**
         * TauxFixeLigneInvestissement
         */
        tauxFixeLigneInvestissement: string;
        /**
         * TauxRevisableLigneInvestissement
         */
        tauxRevisableLigneInvestissement: string;
        /**
         * ReferenceIndiceLigneInvestissement
         */
        referenceIndiceLigneInvestissement: string;
        /**
         * RaisonConstituantMandataire
         */
        raisonConstituantMandataire: string;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
        /**
         * NombreOutils
         */
        nombreOutils: number;
        /**
         * AjoutNotices
         */
        ajoutNotices: boolean;
        /**
         * NumeroOrias
         */
        numeroOrias: string;
        /**
         * NombreCreditsAModifierFSI
         */
        nombreCreditsAModifierFSI: number;
        /**
         * ListeDonneesCreditAModifierFSI
         */
        listeDonneesCreditAModifierFSI: Array<IDonneesCreditLecture>;
        /**
         * ListeOutil
         */
        listeOutil: Array<IOutilMaj>;
        /**
         * SousignePouvoirNotaire
         */
        sousignePouvoirNotaire: string;
        /**
         * DatePouvoirNotaire
         * Type date au format yyyy-MM-dd
         */
        datePouvoirNotaire: string;
        /**
         * Nom1PouvoirNotaire
         */
        nom1PouvoirNotaire: string;
        /**
         * Nom2PouvoirNotaire
         */
        nom2PouvoirNotaire: string;
        /**
         * Nom3PouvoirNotaire
         */
        nom3PouvoirNotaire: string;
        /**
         * Nom4PouvoirNotaire
         */
        nom4PouvoirNotaire: string;
        /**
         * RibPretDevise
         */
        ribPretDevise: string;
        /**
         * IdentifiantProduitPretDevise
         */
        identifiantProduitPretDevise: string;
        /**
         * NumCreditPlanPretDevise
         */
        numeroCreditPlanPretDevise: string;
        /**
         * TypePretDevise
         */
        typePretDevise: string;
        /**
         * IdggiPretDevise
         */
        idggiPretDevise: string;
        /**
         * CdngPretDevise
         */
        cdngPretDevise: string;
        /**
         * FraisEnDevises
         */
        fraisEnDevises: string;
        /**
         * DevisePretDevise
         */
        devisePretDevise: string;
        /**
         * FraisContrePartiePretDevise
         */
        fraisContrePartiePretDevise: string;
        /**
         * MontantMiniDeblocagePretDevise
         */
        montantMinimumDeblocagePretDevise: string;
        /**
         * AccordPrincipe
         */
        accordPrincipe: boolean;
        /**
         * Rdv
         */
        rdv: boolean;
        /**
         * Deroulement
         */
        deroulement: boolean;
        /**
         * RaisonCaution
         */
        raisonCaution: string;
        /**
         * RepresentantCaution
         */
        representantCaution: string;
        /**
         * EnQualiteCaution
         */
        enQualiteCaution: string;
        /**
         * DatePouvoirCaution
         * Type date au format yyyy-MM-dd
         */
        datePouvoirCaution: string;
        /**
         * NomSocieteEmprunteurBailleur
         */
        nomSocieteEmprunteurBailleur: string;
        /**
         * CapitalEmprunteurBailleur
         */
        capitalEmprunteurBailleur: string;
        /**
         * SiegeEmprunteurBailleur
         */
        siegeEmprunteurBailleur: string;
        /**
         * LieuRCSEmprunteurBailleur
         */
        lieuRCSEmprunteurBailleur: string;
        /**
         * NumeroRCSEmprunteurBailleur
         */
        numeroRCSEmprunteurBailleur: string;
        /**
         * DateRCSEmprunteurBailleur
         * Type date au format yyyy-MM-dd
         */
        dateRCSEmprunteurBailleur: string;
        /**
         * RepresentantEmprunteurBailleur
         */
        representantEmprunteurBailleur: string;
        /**
         * LibelleRepresEmprunteurPersMorale
         */
        libelleRepresEmprunteurPersonneMorale: string;
        /**
         * EnQualiteEmprunteurPersMorale
         */
        enQualiteEmprunteurPersonneMorale: string;
        /**
         * DatePouvoirEmprunteurPersMorale
         * Type date au format yyyy-MM-dd
         */
        datePouvoirEmprunteurPersonneMorale: string;
        /**
         * ListeDonneesCautionPersonneMorale
         */
        listeDonneesCautionPersonneMorale: Array<IDonneesCautionPersonneMoraleMaj>;
        /**
         * RepresPersMorale
         */
        represPersonneMorale: string;
        /**
         * AgissantPersMorale
         */
        agissantPersonneMorale: string;
        /**
         * Vertu1PersMorale
         */
        vertu1PersonneMorale: string;
        /**
         * Vertu2PersMorale
         */
        vertu2PersonneMorale: string;
        /**
         * Vertu3PersMorale
         */
        vertu3PersonneMorale: string;
        /**
         * Vertu4PersMorale
         */
        vertu4PersonneMorale: string;
        /**
         * Vertu5PersMorale
         */
        vertu5PersonneMorale: string;
        /**
         * Vertu6PersMorale
         */
        vertu6PersonneMorale: string;
        /**
         * Vertu7PersMorale
         */
        vertu7PersonneMorale: string;
        /**
         * Vertu8PersMorale
         */
        vertu8PersonneMorale: string;
        /**
         * Vertu9PersMorale
         */
        vertu9PersonneMorale: string;
        /**
         * Vertu10PersMorale
         */
        vertu10PersonneMorale: string;
        /**
         * Vertu11PersMorale
         */
        vertu11PersonneMorale: string;
        /**
         * Vertu12PersMorale
         */
        vertu12PersonneMorale: string;
        /**
         * RepresPersoMoraleAssurance
         */
        represPersoMoraleAssurance: string;
        /**
         * AgissantQualitePersoMoraleAssurance
         */
        agissantQualitePersoMoraleAssurance: string;
        /**
         * Vertu1PersoMoraleAssurance
         */
        vertu1PersoMoraleAssurance: string;
        /**
         * Vertu2PersoMoraleAssurance
         */
        vertu2PersoMoraleAssurance: string;
        /**
         * DatePourvoirPersoMoraleAssurance
         * Type date au format yyyy-MM-dd
         */
        datePourvoirPersoMoraleAssurance: string;
        /**
         * Vertu4PersoMoraleAssurance
         */
        vertu4PersoMoraleAssurance: string;
        /**
         * CompoOffrePersoMoraleAssurance
         */
        compositionOffrePersoMoraleAssurance: string;
        /**
         * RepresPreteurCE
         */
        represPreteurCE: string;
        /**
         * ReservesRedacteur
         */
        reservesRedacteur: string;
        /**
         * RaisonSocialePersMoraleNantissement
         */
        raisonSocialePersonneMoraleNantissement: string;
        /**
         * RepresPersMoraleNantissement
         */
        represPersonneMoraleNantissement: string;
        /**
         * EnQualitePersMoraleNantissement
         */
        enQualitePersonneMoraleNantissement: string;
        /**
         * Vertu1PersMoraleNantissement
         */
        vertu1PersonneMoraleNantissement: string;
        /**
         * Vertu2PersMoraleNantissement
         */
        vertu2PersonneMoraleNantissement: string;
        /**
         * VilleTribunal
         */
        villeTribunal: string;
        /**
         * mtoDocInfos
         */
        mtoDocInformation: Array<IAnyType>;
        /**
         * FCM17NFX
         */
        fCM17NFX: IFCM17NFX;
    }
    interface IAgentLecture extends IElementLecture {
        /**
         * Idfaen_IdntAgent
         */
        idAgent: string;
        /**
         * Lbfaes_LblAgent
         */
        lblAgent: string;
        /**
         * Idfaeg_IdntEdsGest
         */
        idEDSGestion: string;
        /**
         * Lbfiba_LblAgenceRat
         */
        lblAgenceRat: string;
        /**
         * Cdfaaa_CdeAgentRat
         */
        cdeAgentRat: string;
        /**
         * Nofcdi_NivDelegation
         */
        niveauDelegation: string;
        /**
         * Ctfauc_TypeUtilisateurCo
         */
        typeUtilisateurCo: number;
        /**
         * Idfies_IdntAgentInterne
         */
        idAgentInterne: string;
        /**
         * Idfce3_EtabBaofCent
         */
        etabBaofCentral: number;
        /**
         * Cdfabo_IdntEdsBaofCent
         */
        idEDSBaofCentral: string;
        /**
         * Cifttv_TechniqueDeVente
         */
        techniqueDeVente: number;
        /**
         * EstAgentBO
         */
        estAgentBO: boolean;
        /**
         * EstBackup
         */
        estBackup: boolean;
        /**
         * EstAgentExterne
         */
        estAgentExterne: boolean;
        /**
         * DerogationBornes
         */
        derogationBornes: boolean;
        /**
         * AutoriserForcage
         */
        autoriserForcage: boolean;
        /**
         * AutoriserForcagePIECO
         */
        autoriserForcagePIECO: boolean;
        /**
         * AutoriserInstructionPourX
         */
        autoriserInstructionPourX: boolean;
        /**
         * AutoriserMajPourX
         */
        autoriserMAJPourX: boolean;
        /**
         * AutoriserDateTraitement
         */
        autoriserDateTraitement: boolean;
        /**
         * AutoriserAXANet
         */
        autoriserAXANet: boolean;
        /**
         * AutoriserDevisEcoPTZ
         */
        autoriserDevisEcoPTZ: boolean;
        /**
         * AutoriserCNPNet
         */
        autoriserCNPNet: boolean;
        /**
         * AutoriserCAPI
         */
        autoriserCAPI: boolean;
        /**
         * AutoriserSDPI
         */
        autoriserSDPI: boolean;
        /**
         * AutoriserAgrementAssurance
         */
        autoriserAgrementAssurance: boolean;
        /**
         * AutoriserAccesDNC
         */
        autoriserAccesDNC: boolean;
        /**
         * AutoriserGenerationNouvelleDemandeMyFlow
         */
        autoriserGeneNvelleDmdeMyFlow: boolean;
        /**
         * ListerHabilitation
         */
        listerHabilitation: Array<string>;
        /**
         * ListerEtablissementsGcm
         */
        listerEtablissementsGcm: Array<number>;
        /**
         * ExisteDossiersEnAlerte
         */
        existeDossiersEnAlerte: boolean;
        /**
         * EstAgentRefusAssuranceExterne
         */
        estAgentRefusAssuranceExterne: boolean;
    }
    interface ISynthesePlanFinancementLecture extends IElementLecture {
        /**
         * Mcfoof_CoutTotalTTC
         */
        coutTotalTTC: number;
        /**
         * Mcfgfr_CoutTotalFraisGarantie
         */
        coutTotalFraisGarantie: number;
        /**
         * Mcfafd_CoutTotalFraisDossier
         */
        coutTotalFraisDossier: number;
        /**
         * Mtfaap_MtApportPersonnel
         */
        montantApportPersonnel: number;
        /**
         * nMtfaso_MtConcoursInternes
         */
        montantConcoursInternes: number;
        /**
         * nMkface_MtConcoursExternes
         */
        montantConcoursExternes: number;
        /**
         * Mcfacf_CoutTotalFraisCourtage
         */
        coutTotalFraisCourtage: number;
        /**
         * MtMensualiteAvecAssurance
         */
        montantMensualiteAvecAssurance: number;
        /**
         * MtMensualiteNet
         */
        montantMensualiteNet: number;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
    }
    interface ICourrierEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdDosInst
         */
        idDosInstruction: string;
        /**
         * Nofapd_NumPlanDossier
         */
        numeroPlanDossier: number;
        /**
         * Nofacp_NumCreditPlan
         */
        numeroCreditPlan: number;
        /**
         * Nufcrl_NumRelatif
         */
        numeroRelatif: number;
        /**
         * Ctfclv_TypeLettre
         */
        typeLettre: number;
        /**
         * Cdfpci_CodeCivilite
         */
        codeCivilite: string;
        /**
         * Lbfce1_AdresseLigne1
         */
        adresseLigne1: string;
        /**
         * Lbfce2_AdresseLigne2
         */
        adresseLigne2: string;
        /**
         * Lbfce3_AdresseLigne3
         */
        adresseLigne3: string;
        /**
         * Lbfce4_AdresseLigne4
         */
        adresseLigne4: string;
        /**
         * Lbfce5_AdresseLigne5
         */
        adresseLigne5: string;
        /**
         * Lbfce6_AdresseLigne6
         */
        adresseLigne6: string;
    }
    interface IMarcheEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdDosInst
         */
        idDosInstruction: string;
        /**
         * Nofapd_NumRelPlanDoss
         */
        numeroRelPlanDossier: number;
        /**
         * Nofacp_NumRelCreditPlan
         */
        numeroRelCreditPlan: number;
        /**
         * Ctfcme_CodeTypeMarche
         */
        codeTypeMarche: string;
        /**
         * Idfcmb_IdMarche
         */
        idMarche: string;
        /**
         * Idfcmp_IdTiersMarcePrinc
         */
        idTiersMarcePrinc: string;
        /**
         * Lbfcmo_LibMoeMarchePrinc
         */
        libelleMoeMarchePrinc: string;
        /**
         * Lbfcom_LibelleObjetMarche
         */
        libelleObjetMarche: string;
        /**
         * Mtfcmd_MontantMarche
         */
        montantMarche: number;
        /**
         * Dtfcma_DateSignMarche
         * Type date au format yyyy-MM-dd
         */
        dateSigneMarche: string;
        /**
         * Dffcme_DateFinMarche
         * Type date au format yyyy-MM-dd
         */
        dateFinMarche: string;
        /**
         * Lnfagr_NomGroupMarche
         */
        nomGroupMarche: string;
        /**
         * Lbfctr_LibLieuExecTravaux
         */
        libelleLieuExecTravaux: string;
        /**
         * Nxfctr_NumTranMarche
         */
        numeroTranMarche: string;
        /**
         * Nxfclo_NumLotMarche
         */
        numeroLotMarche: string;
        /**
         * Idfamp_refCautionPrincipale
         */
        refCautionPrincipale: string;
        /**
         * Dtfcmp_dateEmisCautionPrinc
         * Type date au format yyyy-MM-dd
         */
        dateEmisCautionPrinc: string;
        /**
         * Mtfccp_montantCautionPrinc
         */
        montantCautionPrinc: number;
        /**
         * Cdfadv_codeDevise
         */
        codeDevise: string;
    }
    interface ITACreditEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdDosInst
         */
        idDosInstruction: string;
        /**
         * Nofapd_NumRelPlanDos
         */
        numeroRelPlanDos: number;
        /**
         * Nofacp_NumRelCredPlan
         */
        numeroRelCreditPlan: number;
        /**
         * Nufcrl_NumRelCred
         */
        numeroRelCredit: number;
        /**
         * Dtfhpr_DateEchnMER
         * Type date au format yyyy-MM-dd
         */
        dateEcheanceMER: string;
        /**
         * Mkfh03_MtCaptAmrt
         */
        montantCapitalAmortissement: number;
        /**
         * Mkfd01_MtCaptRestDu
         */
        montantCapitalRestantDu: number;
        /**
         * Nufcet_NumEcheanceTable
         */
        numeroEcheanceTable: number;
    }
    interface IScElement {
    }
    interface IScConstante extends IScElement {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
    interface IProjetNonImmobilierLecture extends IProjetLecture {
        /**
         * IndicProjProf
         */
        indiceProjetProf: boolean;
        /**
         * IndicProjConsTres
         */
        indiceProjetConsolideTres: boolean;
        /**
         * ObjTresEtdn
         */
        objTresEtdn: boolean;
        /**
         * ObjFinnConso
         */
        objFinancierConsommation: boolean;
        /**
         * ObjTresPrfs
         */
        objTresPrfs: boolean;
        /**
         * DescProjNonImmb
         */
        descriptionProjetNonImmobilier: string;
        /**
         * Dtfbso_DateMiseDispFond
         * Type date au format yyyy-MM-dd
         */
        dateMiseDispFond: string;
        /**
         * IdntBienConso
         */
        idBienConsommation: string;
        /**
         * IdntBienEqpmProf
         */
        idBienEqpmProf: string;
        /**
         * IdntBienTres
         */
        idBienTres: string;
    }
    interface IProjetEPSLecture extends IProjetLecture {
    }
    interface ICreditEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdDosInst
         */
        idDosInstruction: string;
        /**
         * Nofapd_NumRelPlanDos
         */
        numeroRelPlanDos: number;
        /**
         * Nofacp_NumRelCredPlan
         */
        numeroRelCreditPlan: number;
        /**
         * Nufcrl_NumRelCred
         */
        numeroRelCredit: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Txfccc_QuotCredCouvParEps
         */
        quotientCreditCouvertureParEPS: number;
        /**
         * Idfaez_RefeExtnCredCouvEps
         */
        referenceExterneCreditCouvertureEPS: string;
        /**
         * ListIdntTaCredCouvParEps
         */
        listeIdtaCreditCouvertureParEPS: Array<string>;
    }
    interface IComplementEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Nofapd_NumrReltPlanDoss
         */
        numeroRelationPlanDossier: number;
        /**
         * Nofacp_NumrReltCrdtPlan
         */
        numeroRelationCreditPlan: number;
        /**
         * Cnfcnb_NatrGarnEps
         */
        natureGarantieEPS: string;
        /**
         * Idfapa_RefrExtnDossParn
         */
        referenceExterneDossierParent: string;
        /**
         * Ddfaen_DateDebuEngg
         * Type date au format yyyy-MM-dd
         */
        dateDebutEngagement: string;
        /**
         * Dffaen_DateFinEngg
         * Type date au format yyyy-MM-dd
         */
        dateFinEngagement: string;
        /**
         * Mgfggo_MtEnggGlblOrig
         */
        montantEngagementGlblOrigine: number;
        /**
         * Idfagl_IdntEnggGlbl
         */
        idEngagementGlbl: string;
        /**
         * Cifcrg_CodeIndRetrocessionEPS
         */
        codeIndicateurRetrocessionEPS: number;
        /**
         * Cifcrh_CodeIndicRadiationAutoEPS
         */
        codeIndiceRadiationAutomatiqueEPS: number;
        /**
         * Cifcri_CodeIndicEPSAmortissable
         */
        codeIndiceEPSAmortissable: number;
        /**
         * Cifeng_CodeEngagementGlobal
         */
        codeEngagementGlobal: number;
        /**
         * Cnfcnh_CodeTypeObjetEPS
         */
        codeTypeObjetEPS: string;
        /**
         * Cofcca_CodeCanalDistributionEPS
         */
        codeCanalDistributionEPS: string;
        /**
         * Cofcsi_CodeSignatureElectroniqueEPS
         */
        codeSignatureElectroniqueEPS: string;
        /**
         * Dtfcdd_DateDecisionEPS
         * Type date au format yyyy-MM-dd
         */
        dateDecisionEPS: string;
        /**
         * Idfaei_IdEntiteInstructeur
         */
        idEntiteInstructeur: string;
        /**
         * Idfagd_CodeAgentDecideur
         */
        codeAgentDecideur: string;
        /**
         * Idfcma_IdModeleActeEPS
         */
        idModeleActeEPS: string;
        /**
         * Idfcs1_IdEDSSignataire
         */
        idEDSSignataire: string;
        /**
         * Idfcs2_IdEDSSignataire
         */
        idEDSSignataire1: string;
        /**
         * Mtfcad_MontantAssietteCommission
         */
        montantAssietteCommission: number;
        /**
         * Nxfcse_NumSignatureElectroniqueEPS
         */
        numeroSignatureElectroniqueEPS: string;
        /**
         * ListIdntMarcheEPS
         */
        listeIdMarcheEPS: Array<string>;
        /**
         * Idfcfa_IdFamilleEPS
         */
        idFamilleEPS: string;
        /**
         * Dtfcru_DateRadiationEPS
         * Type date au format yyyy-MM-dd
         */
        dateRadiationEPS: string;
        /**
         * Idfaic_IdPreuveICG
         */
        idPreuveICG: string;
        /**
         * Idfapc_IdClientWeb
         */
        idClientWeb: string;
        /**
         * Lbfauc_LibelleUtilisateurWeb
         */
        libelleUtilisateurWeb: string;
        /**
         * Lbfas1_LibelleCiviliteSignataire1
         */
        libelleCiviliteSignataire1: string;
        /**
         * Lbfas3_LibelleCiviliteSignataire2
         */
        libelleCiviliteSignataire2: string;
        /**
         * Lbfas4_LibelleFonctionSignataire2
         */
        libelleFonctionSignataire2: string;
        /**
         * Lbfas2_LibelleFonctionSignataire1
         */
        libelleFonctionSignataire1: string;
        /**
         * Cdfcew_CodeEtatDossierEPSWeb
         */
        codeEtatDossierEPSWeb: string;
    }
    interface ITresorerieFinanceeLecture extends IBienDetailleLecture {
        /**
         * CodeIndicBienConso
         */
        codeIndiceBienConsommation: boolean;
        /**
         * CodeIndicTresProf
         */
        codeIndiceTresProf: boolean;
        /**
         * CodeIndicTresEtdn
         */
        codeIndiceTresEtdn: boolean;
        /**
         * Idfove_IdntVndr
         */
        idVendeur: string;
    }
    interface IBienEquipementProLecture extends IBienDetailleLecture {
    }
    interface IBienDetailleLecture extends IElementLecture {
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
        /**
         * Mtfoac_CoutAcqsComlInds
         */
        coutAcqsCommercialisationInds: number;
        /**
         * Mtfoai_CoutAcqsHabt
         */
        coutAcqsHabitation: number;
        /**
         * Mtfoco_CoutConst
         */
        coutConstruction: number;
        /**
         * Mtfotr_CoutTrvxAmen
         */
        coutTravauxAmen: number;
        /**
         * Mtfopp_CoutPasPort
         */
        coutPasPort: number;
        /**
         * Mtfofc_CoutFondComc
         */
        coutFondComc: number;
        /**
         * Mtfomo_CoutEqpmMte
         */
        coutEqpmMte: number;
        /**
         * Mtfovp_CoutVehcPrfs
         */
        coutVehcPrfs: number;
        /**
         * Mtfops_CoutPartSocl
         */
        coutPartSociale: number;
        /**
         * Mtfofg_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Mtfofn_MtFrsNotr
         */
        montantFrsNotaire: number;
        /**
         * Mtfost_CoutStck
         */
        coutStck: number;
        /**
         * Mtfosc_CoutStckHorsInstr
         */
        coutStckHorsInstruction: number;
        /**
         * Mtfobf_CoutBfr
         */
        coutBfr: number;
        /**
         * Mtfobc_CoutBfrHorsInstr
         */
        coutBfrHorsInstruction: number;
        /**
         * Mtfodv_CoutAutrFrsPrfs
         */
        coutAutreFrsPrfs: number;
        /**
         * Mtfodc_CoutAutrFrsPrfsHorsInstr
         */
        coutAutreFrsPrfsHorsInstruction: number;
        /**
         * Mcfotv_MtTvaFinn
         */
        montantTVAFinancier: number;
        /**
         * Mtfora_MtRachCren
         */
        montantRachCren: number;
        /**
         * Mtfods_CoutPartSoce
         */
        coutPartSoce: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface IAutoMotoLecture extends IBienConsoFinanceLecture {
        /**
         * Ctfmov_TypeMotr
         */
        typeMotr: number;
        /**
         * Lbfmov_ModeVehc
         */
        modeVehc: string;
        /**
         * Lbfqov_MarqVehc
         */
        marqVehc: string;
        /**
         * Ctfmvh_TypeVehc
         */
        typeVehc: number;
        /**
         * Ctfmgv_GnreVehc
         */
        gnreVehc: number;
        /**
         * Cdfmpv_PuisFisc
         */
        puisFiscal: number;
        /**
         * Ddfmpc_DatePrmeMiseCircl
         * Type date au format yyyy-MM-dd
         */
        datePrmeMiseCircl: string;
    }
    interface IBienConsoFinanceLecture extends IElementLecture {
        /**
         * Idfove_IdntVndr
         */
        idVendeur: string;
        /**
         * Mgfovh_MtInscHypt
         */
        montantInscHypotheque: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface IAlerteEnEntreeLecture extends IElementLecture {
        /**
         * Nofaix_NumeAlrt
         */
        numeroAlerte: number;
        /**
         * Ctfiai_CodeAlrt
         */
        codeAlerte: number;
        /**
         * Cdfiai_CodeTrtAlrt
         */
        codeTraitementAlerte: number;
        /**
         * Dcfiai_DateEmssAlrt
         * Type date au format yyyy-MM-dd
         */
        dateEmissionAlerte: string;
        /**
         * Lbfiai_LiblAlrt
         */
        libelleAlerte: string;
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
    interface ITauxFixeLecture extends ITauxInteretAnnuelLecture {
    }
    interface ITauxMixteLecture extends ITauxInteretAnnuelLecture {
        /**
         * Rpar
         */
        repartition: number;
        /**
         * TxIndcCmpstTxMixt
         */
        tauxIndiceCmpstTauxMixte: ITauxIndiceLecture;
        /**
         * TxFixeCmpstTxMixt
         */
        tauxFixeCmpstTauxMixte: ITauxFixeLecture;
    }
    interface ICreditPalierProgressionLecture extends IElementLecture {
        /**
         * Nufape_NumeReltPrmeEchePalrPhas
         */
        numeroRelationPrmeEcheancePalierPhase: number;
        /**
         * Nufapp_NumeReltDernEchePalrPhas
         */
        numeroRelationDernierEcheancePalierPhase: number;
        /**
         * Txfcam_TxPrgrAmrt
         */
        tauxProgressifAmortissement: ITauxInteretAnnuelLecture;
        /**
         * Cdfdcg_CodeIndxTxPrgrAmrt
         */
        codeIndexTauxProgressifAmortissement: number;
        /**
         * Ptfcpa_CodePerdPrgrAmrt
         */
        codePeriodeProgressifAmortissement: number;
        /**
         * Npfca1_NbPerdDureePalrPrgr
         */
        nombrePeriodeDureePalierProgressif: number;
        /**
         * Ctfcam_TypeTauxProgreAmort
         */
        typeTauxProgreAmort: number;
        /**
         * IdntCredPhasAM
         */
        idCreditPhaseAM: string;
        /**
         * IdntPalrPrgrAmrtNivPrdt
         */
        idPalierProgressifAmortissementNiveauProduit: string;
    }
    interface IComplementPhasePretCombineLecture extends IElementLecture {
        /**
         * Mafaqa_MtAmrt
         */
        montantAmortissement: number;
        /**
         * Mkfaif_MtInfine
         */
        montantInfine: number;
        /**
         * Ctfapa_CodeAjtInteCapt
         */
        codeAjtInterieurCapital: number;
        /**
         * Ctfark_ModeSaisReprCapt
         */
        modeSaisieReprCapital: number;
        /**
         * Tafaqa_QuotAmrt
         */
        quotientAmortissement: number;
        /**
         * IdntCredPhasAM
         */
        idCreditPhaseAM: string;
    }
    interface IScProduitPhase extends IScElement {
        /**
         * Cdfcpo_CodeFamlPrdt
         */
        codeFamilleProduit: string;
        /**
         * Nofcvp_NumrReltPrdt
         */
        numeroRelationProduit: string;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Nofcfp_NoReltPhas
         */
        numeroRelationPhase: number;
        /**
         * Dtfisy_DateTrt
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * Dffcap_DateFinAppli
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * Ddfcap_DateDebuAppli
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * Pefcph_UnitDurDunPhas
         */
        uniteDureeDunPhase: number;
        /**
         * Cdfcph_ModeExprDurPhas
         */
        modeExpressionDureePhase: number;
        /**
         * Npfcq1_DurPhasPrdt
         */
        dureePhaseProduit: number;
        /**
         * Npfcq2_DurPhasPrdt
         */
        dureePhaseProduit1: number;
        /**
         * Npfcq3_DurPhasPrdt
         */
        dureePhaseProduit2: number;
        /**
         * Npfcq4_DurDunPhasPas
         */
        dureeDunPhasePas: number;
        /**
         * Ptfcin_PerdicCalcIntr
         */
        periodiciteCalculIntr: number;
        /**
         * Ptfci1_PerdicCalcIntr
         */
        periodiciteCalculIntr1: number;
        /**
         * Ptfci2_PerdicCalcIntr
         */
        periodiciteCalculIntr2: number;
        /**
         * Ptfci3_PerdicCalcIntr
         */
        periodiciteCalculIntr3: number;
        /**
         * Ptfci4_PerdicCalcIntr
         */
        periodiciteCalculIntr4: number;
        /**
         * Ptfcam_PerdicMerAmrt
         */
        periodiciteMERAmortissement: number;
        /**
         * Ptfca1_PerdicMerAmrt
         */
        periodiciteMERAmortissement1: number;
        /**
         * Ptfca2_PerdicMerAmrt
         */
        periodiciteMERAmortissement2: number;
        /**
         * Ptfca3_PerdicMerAmrt
         */
        periodiciteMERAmortissement3: number;
        /**
         * Ptfca4_PerdicMerAmrt
         */
        periodiciteMERAmortissement4: number;
        /**
         * Cdfcpt_CodePerdicDiffMer
         */
        codePeriodiciteDiffereMER: number;
        /**
         * Cdfcei_CdRecvIntrTermEchu
         */
        codeRecouvrementIntrTermeEchu: number;
        /**
         * Cdfcea_CdRecvAmrtTermEchu
         */
        codeRecouvrementAmortissementTermeEchu: number;
        /**
         * Cdfccf_CdTypeConfmTxIntr
         */
        codeTypeConfirmationTauxIntr: number;
        /**
         * Cdfctx_ModeCalcTx
         */
        modeCalculTaux: number;
        /**
         * Nbfcaa_NbJourAnnNumrt
         */
        nombreJourAnnulationNumerateur: number;
        /**
         * Cdfcam_ModeCalcAmrt
         */
        modeCalculAmortissement: number;
        /**
         * Mtfckr_CaptRefrTablCste
         */
        capitalReferenceTableConstante: number;
        /**
         * Ctfcrb_TypeAsstRemb
         */
        typeAssietteRemboursement: number;
        /**
         * Cdfcva_CdVerstAutrPendPhas
         */
        codeVersementAutrePendantPhase: number;
        /**
         * Cdfcfp_CodeRedcDurPrfn
         */
        codeReductionDureePrefinancement: number;
        /**
         * Cdfcpr_CodePrlnDurPrfn
         */
        codePrelevementDureePrefinancement: number;
        /**
         * Ctfcpe_CodeTypePrfn
         */
        codeTypePrefinancement: number;
        /**
         * Cdfcip_CodeRecvPartlIntr
         */
        codeRecouvrementPartielIntr: number;
        /**
         * Cdfcir_CodeCalcIntrRepr
         */
        codeCalculIntrRepr: number;
        /**
         * Cdfcki_CodeCaptIntrDiff
         */
        codeCapitalIntrDiffere: number;
        /**
         * Ptfcci_CalcIntrJourReel
         */
        calculIntrJourReel: number;
        /**
         * Ptfcd1_PerdicMerIntr
         */
        periodiciteMERIntr: number;
        /**
         * Ptfcd2_PerdicMerIntr
         */
        periodiciteMERIntr1: number;
        /**
         * Ptfcd3_PerdicMerIntr
         */
        periodiciteMERIntr2: number;
        /**
         * Ptfcd4_PerdicMerIntr
         */
        periodiciteMERIntr3: number;
        /**
         * Ctfck2_ModeCaptIntr
         */
        modeCapitalIntr: number;
        /**
         * Ctfck1_ModeRecvIntr
         */
        modeRecouvrementIntr: number;
        /**
         * Ptfcco_PerdicCompoIntr
         */
        periodiciteCompositionIntr: number;
        /**
         * Cdfcpm_CdModeExprTxMoyePhas
         */
        codeModeExpressionTauxMoyenPhase: number;
        /**
         * Txfcp1_ValrMinTxMoyePhas
         */
        valeurMinimumTauxMoyenPhase: number;
        /**
         * Txfcp2_ValrMaxTxMoyePhas
         */
        valeurMaximumTauxMoyenPhase: number;
        /**
         * Txfcp3_ValrConsTxMoyePhas
         */
        valeurConsolideTauxMoyenPhase: number;
        /**
         * Cdfcth_CodeTxPalrCalc
         */
        codeTauxPalierCalcul: number;
        /**
         * Cdfcin_CodeIndc
         */
        codeIndice: string;
        /**
         * Nbfrvd_NbMaxiPerdVartDur
         */
        nombreMaximumPeriodeVartDuree: number;
        /**
         * Cdfcop_CodeOptnSurPhasPrdt
         */
        codeOptionSurPhaseProduit: number;
        /**
         * Cdfcoo_CodeObjtOptn
         */
        codeObjetOption: number;
        /**
         * Cdfcto_TypeOptn
         */
        typeOption: number;
        /**
         * Cdfcsr_CodeCourPourPrsDopt
         */
        codeCourtPourPresenceDopt: number;
        /**
         * Npfcsr_DelaiCourPrsDopt
         */
        delaiCourtPresenceDopt: number;
        /**
         * Pefcpo_PerdicOptn
         */
        periodiciteOption: number;
        /**
         * Nbjja1_NbJourAnnDenom
         */
        nombreJourAnnulationDenomination: number;
        /**
         * Txfccz_QuotConsCaptAmrt
         */
        quotientConsolideCapitalAmortissement: number;
        /**
         * Tpfcc1_QuotMiniCaptAmrt
         */
        quotientMinimumCapitalAmortissement: number;
        /**
         * Tsfcc1_QuotMaxiCaptAmrt
         */
        quotientMaximumCapitalAmortissement: number;
        /**
         * Pefrie_UnitPerdValrIntIndc
         */
        unitePeriodeValeurIntituleIndice: number;
        /**
         * Npfrie_NbPerdValrIntIndc
         */
        nombrePeriodeValeurIntituleIndice: number;
        /**
         * Ctfcte_CodeTypeTrtDech
         */
        codeTypeTraitementDech: number;
        /**
         * Tsfcif_QuotMaxiCaptIfin
         */
        quotientMaximumCapitalIfin: number;
        /**
         * Txfcca_QuotConsCaptAmrt
         */
        quotientConsolideCapitalAmortissement1: number;
        /**
         * Tpfcca_QuotMiniCaptAmrt
         */
        quotientMinimumCapitalAmortissement1: number;
        /**
         * Tsfcca_QuotMaxiCaptAmrt
         */
        quotientMaximumCapitalAmortissement1: number;
        /**
         * Idfrbd_IdntReglButrDur
         */
        idRegleButoireDuree: string;
    }
    interface ICreditPhaseAmortissementLecture extends ICreditPhaseLecture {
        /**
         * Cdfcea_CodeRecvAmrtTermEchu
         */
        codeRecouvrementAmortissementTermeEchu: number;
        /**
         * Txfcqa_QuotAmrt
         */
        quotientAmortissement: number;
        /**
         * Cdfcam_ModeCalcAmrt
         */
        modeCalculAmortissement: number;
        /**
         * Cifapi_CodePrelFinPhas
         */
        codePrelFinPhase: number;
        /**
         * Txfaom_TxConstPhasCred
         */
        tauxConstructionPhaseCredit: number;
        /**
         * AmrtPossible
         */
        amortissementPossible: boolean;
        /**
         * ProgTaux
         */
        progTaux: boolean;
        /**
         * TypePretCombine
         */
        typePretCombine: string;
        /**
         * IdntCompPhasPourPretComb
         */
        idCompPhasePourPretComb: string;
        /**
         * ListIdntPalrPrgrAmrt
         */
        listeIdPalierProgressifAmortissement: Array<string>;
    }
    interface ICreditPhaseDiffereAmortissementLecture extends ICreditPhaseLecture {
        /**
         * Cdfcei_CodeRecvInteTermEchu
         */
        codeRecouvrementInterieurTermeEchu: number;
        /**
         * Cdfcip_CodeRecvPartlInte
         */
        codeRecouvrementPartielInterieur: number;
        /**
         * Cdfcam_CodeIndicRembIfin
         */
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseDiffereTotalLecture extends ICreditPhaseLecture {
        /**
         * Cdfcei_CodeRecvInteTermEchu
         */
        codeRecouvrementInterieurTermeEchu: number;
        /**
         * Cdfcam_CodeIndicRembIfin
         */
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhaseMobilisationLecture extends ICreditPhaseLecture {
        /**
         * Cdfcei_CodeRecvInteTermEchu
         */
        codeRecouvrementInterieurTermeEchu: number;
        /**
         * Cdfcip_CodeRecvPartlInte
         */
        codeRecouvrementPartielInterieur: number;
        /**
         * Cdfcam_CodeIndicRembIfin
         */
        codeIndiceRemboursementIfin: number;
    }
    interface ICreditPhasePrefinancementLecture extends ICreditPhaseLecture {
        /**
         * Cdfcei_CodeRecvInteTermEchu
         */
        codeRecouvrementInterieurTermeEchu: number;
        /**
         * Cdfppf_CodeRedcDureePref
         */
        codeReductionDureePref: number;
        /**
         * Personnalisable
         */
        personnalisable: boolean;
        /**
         * Reduction
         */
        reduction: boolean;
    }
    interface ICreditPhaseLecture extends IElementLecture {
        /**
         * Cdfcir_CodeCalcInteRepr
         */
        codeCalculInterieurRepr: number;
        /**
         * Ctfcki_ModeCaptRecvInte
         */
        modeCapitalRecouvrementInterieur: number;
        /**
         * Cdfcki_CodeCaptRecvInte
         */
        codeCapitalRecouvrementInterieur: number;
        /**
         * Ptfcin_CodePerdAsscCalcInte
         */
        codePeriodeAssuranceCalculInterieur: number;
        /**
         * Ptfcam_CodePerdCalcMer
         */
        codePeriodeCalculMER: number;
        /**
         * Ptfcci_CodeCalcInteJourRels
         */
        codeCalculInterieurJourRelease: number;
        /**
         * Ptfcco_CodePerdCompoInte
         */
        codePeriodeCompositionInterieur: number;
        /**
         * Mefoso_MtPrmeecheServ
         */
        montantPrmeecheService: number;
        /**
         * Mefafr_MtPrmeecheAccsComp
         */
        montantPrmeecheAccessoireComp: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Cdfava_CodeIndicVerstFondAutrPendPhas
         */
        codeIndiceVersementFondAutrePendantPhase: number;
        /**
         * Dtfccr_DateCretPhas
         * Type date au format yyyy-MM-dd
         */
        dateCreationPhase: string;
        /**
         * Cdfdcf_CodeConfmTxInteCred
         */
        codeConfirmationTauxInterieurCredit: number;
        /**
         * Npfcph_NbPerdPhas
         */
        nombrePeriodePhase: number;
        /**
         * Pefcph_CodePerdDurePhas
         */
        codePeriodeDurePhase: number;
        /**
         * Txfcmg_Marge
         */
        marge: number;
        /**
         * Txfcvi_Taux
         */
        taux: number;
        /**
         * Tvfrui_Repart
         */
        repart: number;
        /**
         * TxPhasFixe
         */
        tauxPhaseFixe: number;
        /**
         * TxPhasInit
         */
        tauxPhaseInit: number;
        /**
         * DateTraitIndic
         * Type date au format yyyy-MM-dd
         */
        dateTraitIndice: string;
        /**
         * MajorBonif
         */
        majorBonif: number;
        /**
         * CalculButoirHausse
         */
        calculButoirHausse: boolean;
        /**
         * CalculButoirBaisse
         */
        calculButoirBaisse: boolean;
        /**
         * PersoButoirHausse
         */
        persoButoirHausse: boolean;
        /**
         * PersoButoirBaisse
         */
        persoButoirBaisse: boolean;
        /**
         * ModeButoirHausse
         */
        modeButoirHausse: string;
        /**
         * ModeButoirBaisse
         */
        modeButoirBaisse: string;
        /**
         * DateButoirHausse
         */
        dateButoirHausse: string;
        /**
         * DateButoirBaisse
         */
        dateButoirBaisse: string;
        /**
         * TxPhas
         */
        tauxPhase: ITauxInteretAnnuelLecture;
        /**
         * TxPhasHorsBonfMajre
         */
        tauxPhaseHorsBonificationMajre: ITauxInteretAnnuelLecture;
        /**
         * Mefiha_MtPrmeecheHorsAccs
         */
        montantPrmeecheHorsAccessoire: number;
        /**
         * Mtfacc_MtPrmeecheAccsPerd
         */
        montantPrmeecheAccessoirePeriode: number;
        /**
         * InteretsDifferes
         */
        interetsDifferes: boolean;
        /**
         * CodeRecouvCapitInterets
         */
        codeRecouvCapitInterets: number;
        /**
         * ModeRecouvInterets
         */
        modeRecouvInterets: number;
        /**
         * ModeCapitInterets
         */
        modeCapitInterets: number;
        /**
         * CapitActive
         */
        capitActive: boolean;
        /**
         * RecouvActive
         */
        recouvActive: boolean;
        /**
         * ChoixCapitalisation
         */
        choixCapitalisation: boolean;
        /**
         * ChoixRecouvrement
         */
        choixRecouvrement: boolean;
        /**
         * Capitalisation
         */
        capitalisation: boolean;
        /**
         * Recouvrement
         */
        recouvrement: boolean;
        /**
         * MtPremiereEcheance
         */
        montantPremiereEcheance: number;
        /**
         * ChoixPeriode
         */
        choixPeriode: boolean;
        /**
         * ChoixPeriodicite
         */
        choixPeriodicite: boolean;
        /**
         * EstVisibleTaux
         */
        estVisibleTaux: boolean;
        /**
         * EstVisibleMarge
         */
        estVisibleMarge: boolean;
        /**
         * ListeChoixPeriode
         */
        listeChoixPeriode: Array<number>;
        /**
         * EstActifDuree
         */
        estActifDuree: boolean;
        /**
         * EstActifPeriodicite
         */
        estActifPeriodicite: boolean;
        /**
         * EstActifTaux
         */
        estActifTaux: boolean;
        /**
         * EstActifMarge
         */
        estActifMarge: boolean;
        /**
         * ListeModeCapitalisation
         */
        listeModeCapitalisation: Array<IScConstante>;
        /**
         * ListeModeRecouvrement
         */
        listeModeRecouvrement: Array<IScConstante>;
        /**
         * EstVisibleButoirHausse
         */
        estVisibleButoirHausse: boolean;
        /**
         * EstVisibleButoirBaisse
         */
        estVisibleButoirBaisse: boolean;
        /**
         * EstActifButoirHausse
         */
        estActifButoirHausse: boolean;
        /**
         * EstActifButoirBaisse
         */
        estActifButoirBaisse: boolean;
        /**
         * EstVisibleTauxHausse
         */
        estVisibleTauxHausse: boolean;
        /**
         * EstVisibleTauxBaisse
         */
        estVisibleTauxBaisse: boolean;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
        /**
         * IdntParmRevsParPhas
         */
        idParametreRevisionParPhase: string;
        /**
         * ListIdntPalrTx
         */
        listeIdPalierTaux: Array<string>;
        /**
         * PhasePrdt
         */
        phaseProduit: IScProduitPhase;
    }
    interface ICreditParamIndexationLecture extends IElementLecture {
        /**
         * Nofrpe_NumePerdRevsAsscParmIndx
         */
        numeroPeriodeRevisionAssuranceParametreIndex: number;
        /**
         * Nofcfp_NumePhasPrdtAsscParmIndx
         */
        numeroPhaseProduitAssuranceParametreIndex: number;
        /**
         * Nofrji_NumeIndcRevsCred
         */
        numeroIndiceRevisionCredit: number;
        /**
         * Ctfrri_TypeRolIndc
         */
        typeRolIndice: string;
        /**
         * Cdfcin_CodeIndcRevs
         */
        codeIndiceRevision: string;
        /**
         * Ctfrui_ModeExprUtlsIndc
         */
        modeExpressionUtilisationIndice: number;
        /**
         * Cdfrui_ValrRefeIndc
         */
        valeurReferenceIndice: number;
        /**
         * Tvfrui_ValrCoefParmRevs
         */
        valeurCoefficientParametreRevision: number;
        /**
         * Cdfrop_CodeReptModfeche
         */
        codeReptModfeche: number;
        /**
         * Ctfrop_ModeReptModfeche
         */
        modeReptModfeche: number;
        /**
         * Nrfrrv_EvenDeclRevs
         */
        evenDeclarationRevision: string;
        /**
         * Nrfrr1_EvenDeclPrmeRevs
         */
        evenDeclarationPrmeRevision: string;
        /**
         * Npfrp1_NbPerdDetrPrmePerdRevs
         */
        nombrePeriodeDetrPrmePeriodeRevision: number;
        /**
         * Pefrp1_CodePerdDelUtlsDetrDatePrmeRevs
         */
        codePeriodeDelUtilisationDetrDatePrmeRevision: number;
        /**
         * Cdfrpj_CodeJourRevs
         */
        codeJourRevision: string;
        /**
         * Cdfrpp_CodeMoisRevs
         */
        codeMoisRevision: string;
        /**
         * Qcfrpj_NbJourAjtPourDetrDatePrmeRevs
         */
        nombreJourAjtPourDetrDatePrmeRevision: number;
        /**
         * Cnfrut_NatrLimtVart
         */
        natureLimiteVart: number;
        /**
         * Cdfrut_CodeValrRefeVartMaxi
         */
        codeValeurReferenceVartMaximum: number;
        /**
         * Ctfrut_ModeExprVartTxIndc
         */
        modeExpressionVartTauxIndice: number;
        /**
         * Tvfrut_ValrVartTxIndc
         */
        valeurVartTauxIndice: number;
        /**
         * Nrfrie_CodeEvenPermDetrValrIntlIndc
         */
        codeEvenPermDetrValeurInitialIndice: string;
        /**
         * Dtfrie_DateFixeDetrValrIntlIndc
         * Type date au format yyyy-MM-dd
         */
        dateFixeDetrValeurInitialIndice: string;
        /**
         * Npfrie_NbPerdDelEvenDetrDateValrIntlIndc
         */
        nombrePeriodeDelEvenDetrDateValeurInitialIndice: number;
        /**
         * Pefrie_CodePerdDelUtlsDetrValrIntlIndc
         */
        codePeriodeDelUtilisationDetrValeurInitialIndice: number;
        /**
         * Cdfrve_CodeIndicValrRefeVartEche
         */
        codeIndiceValeurReferenceVartEcheance: number;
        /**
         * Tvfrve_ValrVartMaxiEche
         */
        valeurVartMaximumEcheance: number;
        /**
         * IdntParmRevs
         */
        idParametreRevision: string;
    }
    interface ICreditParamRevisionParPeriodeLecture extends ICreditParamRevisionLecture {
        /**
         * Nofpre_NumePerdPrdt
         */
        numeroPeriodeProduit: number;
        /**
         * Npfrpf_NbPerdDurePerd
         */
        nombrePeriodeDurePeriode: number;
        /**
         * Ptfrpe_CodePerdDurePerd
         */
        codePeriodeDurePeriode: number;
        /**
         * Nxfrpe_EvenDeclDebtPerd
         */
        evenDeclarationDebutPeriode: string;
        /**
         * Npfrpe_NbPerdCmpstDelPremPerdRevs
         */
        nombrePeriodeCmpstDelPremierPeriodeRevision: number;
        /**
         * Pefrpe_CodePerdCorrNbPerdCmpstDel
         */
        codePeriodeCorrNombrePeriodeCmpstDel: number;
    }
    interface ICreditParamRevisionParPhaseLecture extends ICreditParamRevisionLecture {
        /**
         * Ctfcfp_CodeTypePhasAsscParmRevs
         */
        codeTypePhaseAssuranceParametreRevision: string;
    }
    interface ICreditParamRevisionLecture extends IElementLecture {
        /**
         * Idfrlr_IdntLoiRevs
         */
        idLoiRevision: string;
        /**
         * Nofrji_NumeJeuIndcRevsAsscCred
         */
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        /**
         * Cdfres_CodeIndicecheRecl
         */
        codeIndicecheReclame: number;
        /**
         * Ctfrub_ModeExprButrTxBais
         */
        modeExpressionButoireTauxBaisse: number;
        /**
         * Ctfruh_ModeExprButrTxHaus
         */
        modeExpressionButoireTauxHausse: number;
        /**
         * Tvfru1_ValrButrTxBais
         */
        valeurButoireTauxBaisse: number;
        /**
         * Tvfru2_ValrButrTxHaus
         */
        valeurButoireTauxHausse: number;
        /**
         * Llfrlr_LibelleLoiRevision
         */
        libelleLoiRevision: string;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
        /**
         * ListIdntParmIndx
         */
        listeIdParametreIndex: Array<string>;
    }
    interface IEcheanceOptimisationLecture extends IElementLecture {
        /**
         * Mefhcd_MtRembSais
         */
        montantRemboursementSaisie: number;
        /**
         * Ctfhel_CodeTypeElemSais
         */
        codeTypeElementSaisie: number;
        /**
         * IdntPalrTx
         */
        idPalierTaux: string;
    }
    interface ICreditPalierTauxLecture extends IElementLecture {
        /**
         * TxIntePalr
         */
        tauxInterieurPalier: ITauxInteretAnnuelLecture;
        /**
         * Ctfctb_CodeTypeRemb
         */
        codeTypeRemboursement: number;
        /**
         * Txfcpg_TxPrgrEcheSurPalr
         */
        tauxProgressifEcheanceSurPalier: number;
        /**
         * Pefcpg_CodePerdAppliTxPrgrEchePalr
         */
        codePeriodeApplicationTauxProgressifEcheancePalier: number;
        /**
         * Nufape_NumeReltPrmeEchePalr
         */
        numeroRelationPrmeEcheancePalier: number;
        /**
         * Nufapp_NumeReltDernEchePalr
         */
        numeroRelationDernierEcheancePalier: number;
        /**
         * Npfcal_NbPerdDureePalr
         */
        nombrePeriodeDureePalier: number;
        /**
         * IdntCredPhas
         */
        idCreditPhase: string;
        /**
         * ListIdntEcheOptm
         */
        listeIdEcheanceOptimisation: Array<string>;
        /**
         * IdntPalrTxAsscPrdt
         */
        idPalierTauxAssuranceProduit: string;
    }
    interface ITrancheELLecture extends IElementLecture {
        /**
         * Txfpep_TxEpar
         */
        tauxEpargne: number;
        /**
         * Mtfaac_MtDrtAcqs
         */
        montantDroitAcqs: number;
        /**
         * Dtfpae_DateArreEpar
         * Type date au format yyyy-MM-dd
         */
        dateArreEpargne: string;
        /**
         * Lbfpet_LibletblOrigDrtPret
         */
        libletblOrigineDroitPret: string;
        /**
         * Cdfdpj_CodeDrtJust
         */
        codeDroitJustificatif: number;
        /**
         * Cdfiel_CodeRaptContEparLogm
         */
        codeRaptContratEpargneLogement: number;
        /**
         * Mtfida_MtDrtAcqsDepsOrigContEparLogm
         */
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfird_CodeResrDrtAcqs
         */
        codeResrDroitAcqs: number;
        /**
         * IdntDrtUtls
         */
        idDroitUtilisation: string;
        /**
         * IdntContEparLogm
         */
        idContratEpargneLogement: string;
    }
    interface ICreditModaliteLecture extends IElementLecture {
        /**
         * Idfcmi_IdntModlCalcImpe
         */
        idModeleCalculImpe: string;
        /**
         * Txfdri_TxIndmRembAntc
         */
        tauxIndemniteRemboursementAnticipe: number;
        /**
         * Nofcmc_NumeModlRembAntc
         */
        numeroModeleRemboursementAnticipe: number;
        /**
         * Txfcsr_SurcTxParRappRembAntc
         */
        surcTauxParRappRemboursementAnticipe: number;
        /**
         * Txffmi_TxInteRetdImpe
         */
        tauxInterieurRetardImpe: number;
        /**
         * Mtffmi_MtIndmImpe
         */
        montantIndemniteImpe: number;
        /**
         * Cdfccr_CodeTrtInteIntrSurImpe
         */
        codeTraitementInterieurIntrSurImpe: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface ICompteCourantLecture extends IElementLecture {
        /**
         * Mtfasc_MtHyptCapt
         */
        montantHypothequeCapital: number;
        /**
         * Cifcmh_CodeIndicBlcgSaisMtHyptCapt
         */
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface ICreditBonificationInfoLecture extends IElementLecture {
        /**
         * Cdfdic_CodeInfo
         */
        codeInformation: string;
        /**
         * sCdfddi_CodeDetail
         */
        codeDetail: string;
    }
    interface ICreditBonificationLecture extends IElementLecture {
        /**
         * Idfdce_IdCreditExterne
         */
        idCreditExterne: string;
        /**
         * Cifdcm_CodeEtat
         */
        codeEtat: number;
        /**
         * Mefdbc_MontantEtablissement
         */
        montantEtablissement: number;
        /**
         * Mefdbr_MontantPartenaire
         */
        montantPartenaire: number;
        /**
         * EstEligible
         */
        estEligible: boolean;
        /**
         * Lbfpnm_NomPartenaire
         */
        nomPartenaire: string;
        /**
         * ModeCalculTaux
         */
        modeCalculTaux: number;
        /**
         * TauxHorsBonif
         */
        tauxHorsBonif: number;
        /**
         * IdntConv
         */
        idConvention: string;
        /**
         * Infos
         */
        information: Array<ICreditBonificationInfoLecture>;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface IHypothequeAerienneLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_NumeSer
         */
        numeroSer: string;
        /**
         * Lbfolt_NumeImmt
         */
        numeroImmt: string;
    }
    interface IBonDeCaisseCapitalisationLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_NumeSiren
         */
        numeroSiren: string;
        /**
         * Lbfoo2_ValrBonOrig
         */
        valeurBonOrigine: number;
        /**
         * Lbfoo3_NumeContTitr
         */
        numeroContratTitre: string;
        /**
         * Lbfoo4_NatrBon
         */
        natureBon: string;
        /**
         * Lbfoo5_Dateeche
         * Type date au format yyyy-MM-dd
         */
        dateeche: string;
        /**
         * Lbfoo6_TitrNomPrenDeps
         */
        titreNomPrenDeps: string;
    }
    interface IDelegationLoyerLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_MtAnnuLoye
         */
        montantAnnuLoye: number;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_DateExtnBail
         * Type date au format yyyy-MM-dd
         */
        dateExterneBail: string;
        /**
         * Lbfoo2_NomGern
         */
        nomGern: string;
    }
    interface ICessionDaillyAutreLecture extends IBienPorteEnGarantieLecture {
    }
    interface IContratAssuranceLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_DateNaisAssr
         * Type date au format yyyy-MM-dd
         */
        dateNaisAssurance: string;
        /**
         * Lbfolt_NumeContAssr
         */
        numeroContratAssurance: string;
        /**
         * Lbfoo1_NomCieAssr
         */
        nomCieAssurance: string;
        /**
         * Lbfoo2_NumeSiren
         */
        numeroSiren: string;
        /**
         * Lbfoo3_CntrGest
         */
        cntrGestion: string;
        /**
         * Lbfoo4_TypeTechJurd
         */
        typeTechniqueJuridique: string;
        /**
         * Lbfoo5_NomContAssr
         */
        nomContratAssurance: string;
        /**
         * Lbfoo6_ApprPers
         */
        apportPersonne: number;
        /**
         * Lbfoo7_MtMinmVerstSign
         */
        montantMinimumVersementSigne: number;
        /**
         * Cdfvat_CodeIndicAttnVerst
         */
        codeIndiceAttnVersement: number;
        /**
         * ListIdntVerstAttn
         */
        listeIdVersementAttn: Array<string>;
    }
    interface IAntichreseLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_RefeCads
         */
        referenceCads: string;
        /**
         * Lbfolt_NumeLot
         */
        numeroLot: string;
    }
    interface ICessionDaillyLoyerImmeubleLecture extends IBienPorteEnGarantieLecture {
    }
    interface IGageVehiculeLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_NumeSer
         */
        numeroSer: string;
        /**
         * Lbfolt_NumeImmt
         */
        numeroImmt: string;
    }
    interface IGageCompteInstrumentFinancierLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
    }
    interface INantissementPartSocialeLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_NumeEnrg
         */
        numeroEnregistrement: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
        /**
         * Lbfoo1_TitrInte
         */
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielleLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_TypeValrMatr
         */
        typeValeurMatrimonial: string;
        /**
         * Lbfolt_NumeSer
         */
        numeroRefTypeLot: string;
    }
    interface INantissementValeurMobiliereLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_Etab
         */
        referenceCadastrale: string;
        /**
         * Lbfolt_NumeCpte
         */
        numeroCompte: string;
    }
    interface INantissementFondDeCommerceLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_NumeInscRcs
         */
        numeroInscRcs: string;
        /**
         * Lbfolt_LiblLibr
         */
        libelleLibr: string;
        /**
         * Cdfomo_TitrOccpLocLeqlFondEstExpl
         */
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface IHypothequeImmobiliereLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_RefeCads
         */
        referenceCads: string;
        /**
         * Lbfolt_RefeLot
         */
        referenceLot: string;
        /**
         * Ctfmoi_TypeBien
         */
        typeBien: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * Cdfcdo_DestBien
         */
        destinataireBien: number;
        /**
         * Nbfosh_SurfHabt
         */
        surfHabitation: number;
        /**
         * Nbfost_SurfTerr
         */
        surfTerr: number;
        /**
         * Cdfcoi_ZoneImplBien
         */
        zoneImplBien: string;
        /**
         * Cdfqem_QualEmpla
         */
        qualEmpla: number;
        /**
         * Lbfoo1_MtDernMutt
         */
        montantDernierMutt: string;
        /**
         * Lbfoo2_DateDernMutt
         */
        dateDernierMutt: string;
        /**
         * Dtfoco_AnneConst
         */
        anneConstruction: number;
        /**
         * Lbfoo3_MtAnnuLoye
         */
        montantAnnuLoye: string;
        /**
         * Lbfoo5_NumeLotCopr
         */
        numeroLotCopr: string;
        /**
         * Lbfoo4_NumeSctn
         */
        numeroSctn: string;
        /**
         * Cifcoc_OccpActlBien
         */
        occpActuarielBien: number;
        /**
         * Cifcph_CodePresHypt
         */
        codePresHypotheque: number;
        /**
         * Idfceb_IdntExpr
         */
        idExpression: string;
        /**
         * Dtfcde_DateDemnExpr
         * Type date au format yyyy-MM-dd
         */
        dateDemandeExpression: string;
        /**
         * ListIdntProprios
         */
        listeIdProprios: Array<string>;
        /**
         * ListIdntRefCadastrls
         */
        listeIdReferenceCadastrls: Array<string>;
        /**
         * ListIdntRefLot
         */
        listeIdReferenceLot: Array<string>;
        /**
         * Dtfoac_DateAcquisitio
         * Type date au format yyyy-MM-dd
         */
        dateAcquisition: string;
        /**
         * Mtfoac_CoutAcquisition
         */
        coutAcquisition: number;
        /**
         * Nbfosa_SurfaceAnnexes
         */
        surfaceAnnexes: number;
        /**
         * Cdfomo_ModaliteOccupation
         */
        numeroDeVolume: number;
    }
    interface IBienDiversLecture extends IBienPorteEnGarantieLecture {
        /**
         * Lbfoca_Refe1
         */
        reference1: string;
        /**
         * Lbfolt_Refe2
         */
        reference2: string;
    }
    interface IBienPorteEnGarantieLecture extends IElementLecture {
        /**
         * Lbfoof_LiblObjt
         */
        libelleObjet: string;
        /**
         * Cdfcni_TypeObjtComl
         */
        typeObjetCommercialisation: string;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Mtfgo2_MtEstmPrdn
         */
        montantEstmPrdn: number;
        /**
         * Dtfgo2_DateEstmPrdn
         * Type date au format yyyy-MM-dd
         */
        dateEstmPrdn: string;
        /**
         * Cdfgm2_CodeModlEstmPrdn
         */
        codeModeleEstmPrdn: string;
        /**
         * Cmfgt2_CodeMotfReSPrdn
         */
        codeMotfReSPrdn: string;
        /**
         * Dtfiex_DateExprBienCff
         * Type date au format yyyy-MM-dd
         */
        dateExpressionBienCff: string;
        /**
         * Lbfpex_NoteExprBienCff
         */
        noteExpressionBienCff: number;
        /**
         * Idfoof_IdntObjtGest
         */
        idObjetGestion: string;
        /**
         * PorteSurProjet
         */
        porteSurProjet: boolean;
        /**
         * Cifaan_SouscriptionContratAssurance
         */
        souscriptionContratAssurance: boolean;
        /**
         * IdntGarnReel
         */
        idGarantieReel: string;
    }
    interface ICreditHDLecture extends IElementLecture {
        /**
         * Txfgcr_Quot
         */
        pourcentCreditCouvert: number;
        /**
         * Mkfaco_CaptCouv
         */
        capitalCouverture: number;
        /**
         * Dtfgaf_DateAffec
         * Type date au format yyyy-MM-dd
         */
        dateAffectation: string;
        /**
         * Dffgaf_DateFinAffec
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectation: string;
        /**
         * Idfcct_RefrPret
         */
        referencePret: string;
        /**
         * Idfadi_IdntDossRefe
         */
        idDossierReference: string;
        /**
         * Lbfcvs_LiblPret
         */
        libellePret: string;
        /**
         * Mtfaoc_MtPret
         */
        montantPret: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cnfctx_CodeRevs
         */
        codeRevision: boolean;
        /**
         * Txfama_Taux
         */
        tauxMoyen: number;
        /**
         * Cdfcin_CodeIndc
         */
        codeIndice: string;
        /**
         * Txfrrv_MargRevs
         */
        margeRevision: number;
        /**
         * Dtfam0_DateMer0
         * Type date au format yyyy-MM-dd
         */
        dateMER0: string;
        /**
         * Dtfaef_DateEfft
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Dffacr_DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Mkfard_Crd
         */
        cRDCredit: number;
        /**
         * Mefmpe_MtEchnTotl
         */
        montantEcheanceTotal: number;
        /**
         * Cdfcno_NatrPret
         */
        naturePret: string;
        /**
         * Nufpct_NumrContEpar
         */
        numeroContratEpargne: string;
        /**
         * Mtfggi_MtIntlGarn
         */
        montantInitialGarantie: number;
        /**
         * EtabPrtr
         */
        etabPrtr: string;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TegModeRestitution
         */
        tegModeRestitution: number;
        /**
         * IdntCrdtExst
         */
        idCreditExiste: string;
    }
    interface IGarantieHDLecture extends IElementLecture {
        /**
         * Cdfcng_NatrGarnHorsDoss
         */
        natureGarantieHorsDossier: string;
        /**
         * Idfgg1_IdntOrigGarnHorsDoss
         */
        idOrigineGarantieHorsDossier: string;
        /**
         * CodeGarnRchab
         */
        codeGarantieRchab: number;
        /**
         * Nofghy_RangPrncHypt
         */
        rangPrincipalHypotheque: number;
        /**
         * Nofgsh_RangSecnHypt
         */
        rangSecnHypotheque: number;
        /**
         * Cdfgrh_CodeCessRangHypt
         */
        codeCessRangHypotheque: number;
        /**
         * IdnttblPrt
         */
        idEtabPreteur: string;
        /**
         * VilleConsvHypt
         */
        villeConsvHypotheque: string;
        /**
         * DatePublHypt
         * Type date au format yyyy-MM-dd
         */
        datePublHypotheque: string;
        /**
         * RfVolm
         */
        refVolume: string;
        /**
         * NumVolm
         */
        numeroVolume: number;
        /**
         * DateEfftHypt
         * Type date au format yyyy-MM-dd
         */
        dateEffetHypotheque: string;
        /**
         * DateFinHypt
         * Type date au format yyyy-MM-dd
         */
        dateFinHypotheque: string;
        /**
         * LiblEmpr
         */
        libelleEmprunt: string;
        /**
         * LiblNotr
         */
        libelleNotaire: string;
        /**
         * VilleNotr
         */
        villeNotaire: string;
        /**
         * MtInscHyptOrig
         */
        montantInscHypothequeOrigine: number;
        /**
         * MtHyptDisp
         */
        montantHypothequeDisp: number;
        /**
         * DateDispMt
         * Type date au format yyyy-MM-dd
         */
        dateDispMontant: string;
        /**
         * Cdfgpc_PactCommr
         */
        pactCommr: string;
        /**
         * Cefggi_CodEttGarn
         */
        codeEtatGarantie: number;
        /**
         * Cdfgex_CodeIndicGarnExtn
         */
        codeIndiceGarantieExterne: number;
        /**
         * CodeIndicTrfoGarn
         */
        codeIndiceTrfoGarantie: number;
        /**
         * Npfgdg_DurIntlMois
         */
        dureeInitialMois: number;
        /**
         * Idfoof_IdntObjtPortGarn
         */
        idObjetPortGarantie: string;
        /**
         * Ctfggm_CodeTypeGarnMyss
         */
        codeTypeGarantieMyss: string;
        /**
         * IdntGarnReel
         */
        idGarantieReel: string;
        /**
         * ListIdntCredExstHorsDoss
         */
        listeIdCreditExisteHorsDossier: Array<string>;
    }
    interface ITrancheMontantLecture extends IElementLecture {
        /**
         * Nufctr_NumeTrchMt
         */
        numeroTrancheMontant: number;
        /**
         * Txfcaa_TxTrchMt
         */
        tauxTrancheMontant: number;
        /**
         * DebtTrchMt
         */
        debutTrancheMontant: number;
        /**
         * FinTrchMt
         */
        finTrancheMontant: number;
        /**
         * IdntCots
         */
        idCotisation: string;
        /**
         * IdntRemsClnt
         */
        idRemsClient: string;
    }
    interface ICotisationDerogationLecture extends ICotisationLecture {
        /**
         * Nufctr_NumeTrchAge
         */
        numeroTrancheAge: number;
        /**
         * Npfcap_NbPerdAppliDerg
         */
        nombrePeriodeApplicationDerogation: number;
        /**
         * Pefcap_PerdAppliDerg
         */
        periodeApplicationDerogation: number;
    }
    interface ICotisationTrancheAgeLecture extends ICotisationLecture {
        /**
         * Nufctr_NumeTrchAge
         */
        numeroTrancheAge: number;
        /**
         * Nbfcai_AgeMini
         */
        ageMinimum: number;
        /**
         * Nbfcae_AgeMaxi
         */
        ageMaximum: number;
    }
    interface ICotisationPhaseLecture extends ICotisationLecture {
        /**
         * IdntPhas
         */
        idPhase: string;
    }
    interface ICotisationPeriodeLecture extends ICotisationLecture {
        /**
         * Nufctr_NumeTrch
         */
        numeroTranche: number;
        /**
         * Npfcap_NbPerdPerd
         */
        nombrePeriodePeriode: number;
        /**
         * Pefcap_PerdPerd
         */
        periodePeriode: number;
        /**
         * Npfcel_NbPerdEtlm
         */
        nombrePeriodeEtlm: number;
        /**
         * Pefcde_PerdEtlm
         */
        periodeEtlm: number;
    }
    interface ICotisationLecture extends IElementLecture {
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: number;
        /**
         * CodeIndicBlcgSaisMont
         */
        codeIndiceBlcgSaisieMontant: number;
        /**
         * Ctfhac_CodeModeCalc
         */
        codeModeCalcul: number;
        /**
         * Cdfcap_CodeIndicApplEche
         */
        codeIndiceApplicationEcheance: boolean;
        /**
         * Pefcac_CodePerdCalc
         */
        codePeriodeCalcul: number;
        /**
         * Dtfhac_DateApplCots
         * Type date au format yyyy-MM-dd
         */
        dateApplicationCotisation: string;
        /**
         * Ddfhac_DateDebtAppliCots
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplicationCotisation: string;
        /**
         * Dffhac_DateFinAppliCots
         * Type date au format yyyy-MM-dd
         */
        dateFinApplicationCotisation: string;
        /**
         * Cdfceh_CodeRecv
         */
        codeRecouvrement: number;
        /**
         * Mtfhac_MtAsst
         */
        montantAssiette: number;
        /**
         * Ctfcac_TypeAccs
         */
        typeAccessoire: string;
        /**
         * Ctfcat_CodeSousTypeAccs
         */
        codeSousTypeAccessoire: string;
        /**
         * Ctfcel_CodeTypeAsstCalculElt
         */
        codeTypeAssietteCalculElt: string;
        /**
         * Cdfc1a_CodeRegleEvtPremierAppel
         */
        codeRegleEvenementPremierAppel: string;
        /**
         * Ctftva_CodeTypeTvaAcc
         */
        codeTypeTVAAccessoire: string;
        /**
         * Npfdaa_NbJoursAnneeNumerateur
         */
        nombreJoursAnneeNumerateur: number;
        /**
         * Npfdad_NbJoursAnneeDenominateur
         */
        nombreJoursAnneeDenominateur: number;
        /**
         * Npfce1_NbPerdAppliCots
         */
        nombrePeriodeApplicationCotisation: number;
        /**
         * Pefcde_PerdAppliCots
         */
        periodeApplicationCotisation: number;
        /**
         * Nrfccr_NumeReglCalcCots
         */
        numeroRegleCalculCotisation: string;
        /**
         * Nrfcmr_NumeReglAppliCots
         */
        numeroRegleApplicationCotisation: string;
        /**
         * Ctfcia_CodeTypeAppliCots
         */
        codeTypeApplicationCotisation: number;
        /**
         * Mtfgfr_MtFrsGarn
         */
        montantFrsGarantie: number;
        /**
         * Txfcac_TxConsFrsDoss
         */
        tauxConsolideFrsDossier: number;
        /**
         * Mtfca5_MtConsFrsDoss
         */
        montantConsolideFrsDossier: number;
        /**
         * Txfipf_PartFinn
         */
        partFinancier: number;
        /**
         * CodeIndicDepsBorn
         */
        codeIndiceDepsBorne: number;
        /**
         * Cifcip_CodeIndicIntePlanFinn
         */
        codeIndiceInterieurPlanFinancier: number;
        /**
         * IdntAccs
         */
        idAccessoire: string;
        /**
         * IdntCouv
         */
        idCouverture: string;
        /**
         * ListIdntTrchMt
         */
        listeIdTrancheMontant: Array<string>;
        /**
         * IdntRemsClnt
         */
        idRemsClient: string;
    }
    interface IRemiseClientLecture extends IElementLecture {
        /**
         * Ctfcrm_TypeRemsClnt
         */
        typeRemsClient: string;
        /**
         * MtAppl
         */
        montantApplication: number;
        /**
         * TxAppl
         */
        tauxApplication: number;
        /**
         * MargAppl
         */
        margeApplication: number;
        /**
         * Mtfirm_MtDerg
         */
        montantDerogation: number;
        /**
         * Txfirt_TxDerg
         */
        tauxDerogation: number;
        /**
         * Txfira_MargDerg
         */
        margeDerogation: number;
        /**
         * Mtfcac_MtCons
         */
        montantConsolide: number;
        /**
         * Txfcac_TxCons
         */
        tauxConsolide: number;
        /**
         * Txfcmc_MargCons
         */
        margeConsolide: number;
        /**
         * Cdfctx_ModeCalcTx
         */
        modeCalculTaux: number;
        /**
         * Dtfccr_DateCret
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Mtfire_MtRems
         */
        montantRems: number;
        /**
         * Mtfird_MtRemsDerg
         */
        montantRemsDerogation: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
        /**
         * IdntCots
         */
        idCotisation: string;
        /**
         * IdntTrch
         */
        idTranche: string;
    }
    interface IPoolEPSLecture extends IElementLecture {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Idfaop_IdntOprtCess
         */
        idOprtCess: string;
        /**
         * Idfccf_IdntCadrFinn
         */
        idCadreFinancier: string;
        /**
         * Cnflpo_CodeNatrPool
         */
        codeNaturePool: number;
        /**
         * Cdfcor_CodeOrigCess
         */
        codeOrigineCess: number;
        /**
         * Ctfesr_TypeSousRolePool
         */
        typeSousRolePool: number;
        /**
         * Nofcca_NumVersionCadre
         */
        numeroVersionCadre: number;
    }
    interface IPayeurLecture extends IElementLecture {
        /**
         * Mtfdfx_MtPaieCred
         */
        montantPaiementCredit: number;
        /**
         * Txfdec_PctPaieCred
         */
        pourcentagePaiementCredit: number;
        /**
         * Cdfdrg_ModeReglUtlsParPayr
         */
        modeRegleUtilisationParPayr: string;
        /**
         * Nufddt_NumeCptePayr
         */
        numeroComptePayr: string;
        /**
         * Idfdma_RefeUnqMand
         */
        referenceUniqueMand: string;
        /**
         * Dgfdma_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Cdfdrs_ModeReglUtlsParPayrSecours
         */
        modeRegleUtilisationParPayrSecours: string;
        /**
         * NumeroComptePayeurSecours
         */
        numeroComptePayeurSecours: string;
        /**
         * Idfdms_RefeUnqMandSecours
         */
        referenceUniqueMandSecours: string;
        /**
         * Dgfdms_DateSignMandSecours
         * Type date au format yyyy-MM-dd
         */
        dateSigneMandSecours: string;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
        /**
         * IdntPersIdntCommPayr
         */
        idPersonneIdCommissionPayr: string;
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
    interface IPersonneMoraleLecture extends IPersonneLecture {
        /**
         * Nufpin_NumeInsee
         */
        numeroINSEE: string;
        /**
         * Dtfpir_DateInscRcs
         * Type date au format yyyy-MM-dd
         */
        dateInscRcs: string;
        /**
         * Dtfpcs_DateCretSoce
         * Type date au format yyyy-MM-dd
         */
        dateCreationSoce: string;
        /**
         * Mcfpch_ChffAffrHtExrcPrec
         */
        chiffreAffrHtExrcPrec: number;
        /**
         * Nbfpsa_NbSalr
         */
        nombreSalr: number;
        /**
         * Cdfpfj_FormJurd
         */
        formeJuridique: string;
        /**
         * Lbfpfj_LiblFormJurd
         */
        libelleFormeJuridique: string;
        /**
         * Cdfpdp_TypeDrtPersMorl
         */
        typeDroitPersonneMorl: number;
        /**
         * Mkfpca_MtCapt
         */
        montantCapital: number;
        /**
         * ListIdntPersPhys
         */
        listeIdPersonnePhys: Array<string>;
        /**
         * ListRolePersPhys
         */
        listeRolePersonnePhys: Array<string>;
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
    interface IPersonnePhysiqueLecture extends IPersonneLecture {
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
        libelle_CapaciteJuridique: string;
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
        libelle_Nationalite: string;
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
        /**
         * Lbfce1_LbAdrEPS1
         */
        libelleAdresseEPS1: string;
        /**
         * Lbfce2_LbAdrEPS2
         */
        libelleAdresseEPS2: string;
        /**
         * Lbfce3_LbAdrEPS3
         */
        libelleAdresseEPS3: string;
        /**
         * Lbfce4_LbAdrEPS4
         */
        libelleAdresseEPS4: string;
        /**
         * Lbfce5_LbAdrEPS5
         */
        libelleAdresseEPS5: string;
        /**
         * Codaac_CatSocioPro
         */
        categorieSocioProfessionnelle: string;
        /**
         * Irdqsn_NumSirenEnt
         */
        numeroSirenEntreprise: string;
        /**
         * Lbfprm_LbRegMat
         */
        libelleRegimeMatrimonial: string;
        /**
         * Llfco1_LbClsRegMat
         */
        libelleClauseRegimeMatrimonial: string;
        /**
         * IdntEntrepreneurIndiv
         */
        idEntrepreneurIndiv: string;
        /**
         * IdntSignataire
         */
        idSignataire: string;
    }
    interface IPersonneLecture extends IElementLecture {
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
    interface IGarantieReelleLecture extends IGarantieLecture {
        /**
         * Cdfghr_CodeGarnRchab
         */
        codeGarantieRchab: number;
        /**
         * Nofgsh_NumeRangSecnHypt
         */
        numeroRangSecnHypotheque: number;
        /**
         * Npfgdg_DureHyptMois
         */
        dureHypothequeMois: number;
        /**
         * Cdfgpc_PactCommr
         */
        pactCommr: number;
        /**
         * Nofghy_RangHypt
         */
        rangHypotheque: number;
        /**
         * Cdfgrh_CodeCessRangHypt
         */
        codeCessRangHypotheque: number;
        /**
         * Mtfghy_MtCouvParHyptRangInfe
         */
        montantCouvertureParHypothequeRangInfe: number;
        /**
         * PortesurProjet
         */
        portesurProjet: boolean;
        /**
         * FinancableEstVisible
         */
        financableEstVisible: boolean;
        /**
         * FinancableEstActif
         */
        financableEstActif: boolean;
        /**
         * FinancableEstCoche
         */
        financableEstCoche: boolean;
        /**
         * IdntGarnHorsDoss
         */
        idGarantieHorsDossier: string;
        /**
         * IdntObjtPortGarn
         */
        idObjetPortGarantie: string;
        /**
         * Llfgvh_VilleConservationHypotheque
         */
        villeConservationHyp: string;
        /**
         * Llfgvo_LibelleReferenceVolume
         */
        lblRefVolume: string;
        /**
         * Dtfgpu_DateDePublication
         * Type date au format yyyy-MM-dd
         */
        datePublication: string;
        /**
         * Nofgvo_NumeroDeVolume
         */
        numeroDeVolume: number;
    }
    interface IGarantiePersonnelleLecture extends IGarantieLecture {
        /**
         * Cdfgtg_CodeNatrCaut
         */
        codeNatureCaution: number;
        /**
         * Montant_Encours
         */
        montantEncours: number;
        /**
         * FinancableEstVisible
         */
        financableEstVisible: boolean;
        /**
         * FinancableEstActif
         */
        financableEstActif: boolean;
        /**
         * FinancableEstCoche
         */
        financableEstCoche: boolean;
        /**
         * CalculSaccefAuto
         */
        calculSaccefAuto: boolean;
        /**
         * ListErrrTechNonBlqn
         */
        listeErrrTechniqueNonBlqn: Array<string>;
    }
    interface IGarantieLecture extends IAccessoireLecture {
        /**
         * Cdfcng_NatrGarn
         */
        natureGarantie: string;
        /**
         * Lbfgga_Commt
         */
        commentaire: string;
        /**
         * Dtfgre_DateLimtRetrCaut
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardCaution: string;
        /**
         * Cdfaag_CodeFormActeAuth
         */
        codeFormeActeAuthentique: number;
        /**
         * Ctfcgg_CodeClssGarn
         */
        codeClasseGarantie: number;
        /**
         * Ctfggm_CodeTypeGarantieMysys
         */
        codeTypeGarantieMysys: string;
        /**
         * Ctfcsu_TypeSurt
         */
        typeSurtaxe: number;
        /**
         * SaccefPossible
         */
        saccefPossible: boolean;
        /**
         * bAccesSaccef
         */
        accessoireSaccef: boolean;
        /**
         * EtatBoutonSaccef
         */
        etatBoutonSaccef: number;
        /**
         * bAccesENET
         */
        accessoireENET: boolean;
        /**
         * IdntPers
         */
        idPersonne: string;
    }
    interface IAssuranceLecture extends IAccessoireLecture {
        /**
         * EstAssuranceAXA
         */
        estAssuranceAXA: boolean;
        /**
         * EstAssuranceCNP
         */
        estAssuranceCNP: boolean;
        /**
         * EstAssuranceGroupePourTAEA
         */
        estAssuranceGroupePourTAEA: boolean;
        /**
         * Ctfcaa_TypeAssr
         */
        typeAssurance: string;
        /**
         * Cdasdg_CodeDeleAssr
         */
        codeDeleAssurance: number;
        /**
         * Lbfabe_BenfAssrAvntVerst
         */
        beneficiaireAssuranceAvenantVersement: string;
        /**
         * Cdfaex_CodeCouvExts
         */
        codeCouvertureExts: number;
        /**
         * Ctfarq_TypeRisq
         */
        typeRisque: number;
        /**
         * CodeAssrObgt
         */
        codeAssuranceObligatoire: number;
        /**
         * Cdfaat_CodeAssrPart
         */
        codeAssurancePart: number;
        /**
         * Facultative
         */
        facultative: number;
        /**
         * Obligatoire
         */
        obligatoire: number;
        /**
         * ObligatoirePartielle
         */
        obligatoirePartielle: number;
        /**
         * Cdfarv_CodeResr
         */
        codeResr: number;
        /**
         * Lbfaex_LiblAssrExtn
         */
        libelleAssuranceExterne: string;
        /**
         * Nosrn_NumeSirenCieAssr
         */
        numeroSirenCieAssurance: string;
        /**
         * Nrfcan_NumeReglCalcDateEfft
         */
        numeroRegleCalculDateEffet: string;
        /**
         * Ctfaaa_CodeAgreAssrExtr
         */
        codeAgreAssuranceExtr: number;
        /**
         * Montant_Encours
         */
        montant_Encours: number;
        /**
         * Idfaos_IdntConfOffrAssr
         */
        idConfOffreAssurance: string;
        /**
         * Nrfcrt_NumeReglTarfAssr
         */
        numeroRegleTarfAssurance: string;
        /**
         * Idfaof_IdntCrdtConfCnp
         */
        idCreditConfCnp: string;
        /**
         * Txfaso_TauxSoclAssr
         */
        tauxSocialeAssurance: number;
        /**
         * IdntPersAssr
         */
        idPersonneAssurance: string;
    }
    interface IAccessoireLieProduitLecture extends IAccessoireLecture {
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
    }
    interface IAccessoireComplementaireLecture extends IAccessoireLecture {
        /**
         * Cnfcoi_CodeNatrOrigAccs
         */
        codeNatureOrigineAccessoire: number;
        /**
         * IdntCatlFrsComp
         */
        idCatlFrsComp: string;
        /**
         * IdntCatlParmRverTier
         */
        idCatlParametreRverTiers: string;
        /**
         * Ctfprp_RoleTiers
         */
        roleTiers: string;
        /**
         * Lbfpa1_Intitule
         */
        intitule: string;
    }
    interface IServiceSurObjetLecture extends IAccessoireLecture {
        /**
         * Nrfcan_NumeReglCalcDateEfftServ
         */
        numeroRegleCalculDateEffetService: string;
        /**
         * Nofood_NumeReltObjtDossAuqlEstRattServ
         */
        numeroRelationObjetDossierAuqlEstRattachementService: number;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
        /**
         * IdntObjtServ
         */
        idObjetService: string;
    }
    interface IAccessoireLecture extends IElementLecture {
        /**
         * Idfaaa_IdntAccsGest
         */
        idAccessoireGestion: string;
        /**
         * Nufaaa_IdntExtnAccs
         */
        idExterneAccessoire: string;
        /**
         * Ctfcat_CodeSousTypeAccs
         */
        codeSousTypeAccessoire: string;
        /**
         * Ctfcac_CodeTypeAccs
         */
        codeTypeAccessoire: string;
        /**
         * Ctfcah_CodeTyplAccs
         */
        codeTypologieAccessoire: string;
        /**
         * Txfipf_PartFinnAccs
         */
        partFinancierAccessoire: number;
        /**
         * CodeIndicAccsAper
         */
        codeIndiceAccessoireAper: boolean;
        /**
         * CodeIndicAccsFinn
         */
        codeIndiceAccessoireFinancier: boolean;
        /**
         * Dtfccr_DateCret
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
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
         * Cefaas_CodeEtatAccs
         */
        codeEtatAccessoire: number;
        /**
         * Dtfaev_DateEnv
         * Type date au format yyyy-MM-dd
         */
        dateEnvoi: string;
        /**
         * Ddfaaa_DateEfft
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Dffaaa_DateFinEfft
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Cdfpim_CodeBeneficiaire
         */
        codeBeneficiaire: string;
        /**
         * Cdfpnb_PersonnalisationBeneficiare
         */
        personnalisationBeneficiare: number;
        /**
         * MontantFraisAccessoire
         */
        montantFraisAccessoire: number;
        /**
         * MontantSouhaite
         */
        montantSouhaite: number;
        /**
         * TauxRetenuAccessoire
         */
        tauxRetenuAccessoire: number;
        /**
         * ListIdntCouv
         */
        listeIdCouverture: Array<string>;
        /**
         * ListIdntCots
         */
        listeIdCotisation: Array<string>;
        /**
         * IdntConv
         */
        idConvention: string;
        /**
         * ListIdntAvisOrgnExtr
         */
        listeIdAvisOrgnExtr: Array<string>;
        /**
         * IdntPlan
         */
        idPlan: string;
    }
    interface IContexteCoproLecture extends IElementLecture {
        /**
         * EstCopro100
         */
        estCopro100: boolean;
    }
    interface IDroitUtiliseLecture extends IElementLecture {
        /**
         * Mtfadu_MtDrtAcqsUtls
         */
        montantDroitAcqsUtilisation: number;
        /**
         * Mtfali_MtDrtLimt
         */
        montantDroitLimite: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
        /**
         * IdntTrchEparLogm
         */
        idTrancheEpargneLogement: string;
    }
    interface IVariationDureeLecture extends IElementLecture {
        /**
         * Npfarv_NbPerdVartPoss
         */
        nombrePeriodeVartPossibilite: number;
        /**
         * TypeButrVartDure
         */
        typeButoireVartDure: number;
        /**
         * IdntCredIntr
         */
        idCreditIntr: string;
    }
    interface IPieceClientLecture extends IPieceLecture {
    }
    interface IControleManuelLecture extends IPieceLecture {
        /**
         * Ctfchq_TypeActrOrigCtrl
         */
        typeActrOrigineControle: number;
        /**
         * Llfccm_CommtCtrl
         */
        commentaireControle: string;
        /**
         * HistCtrl
         */
        histControle: Array<IControleManuelLecture>;
    }
    interface IPieceAgenceLecture extends IPieceLecture {
    }
    interface IPieceLecture extends IElementLecture {
        /**
         * IdentifiantPiece
         */
        identifiantPiece: string;
        /**
         * Llfcpt_LiblPiecCtrl
         */
        libellePieceControle: string;
        /**
         * Ctfcth_CodeThm
         */
        codeTheme: string;
        /**
         * Ctfcp1_CodePrcs
         */
        identifiantProcessusAuPlusTard: string;
        /**
         * Cifcch_IndicCasEchn
         */
        indiceCasEcheance: number;
        /**
         * Cifcob_IndicObgt
         */
        indiceObligatoire: number;
        /**
         * Cdfaju_StttPiecCtrl
         */
        stttPieceControle: number;
        /**
         * Dtfarj_DateDernMajSttt
         * Type date au format yyyy-MM-dd
         */
        dateDernierMAJSttt: string;
        /**
         * Nufccl_NumrOrdrClss
         */
        numeroOrdreClasse: number;
        /**
         * Llfcai_LiblAide
         */
        libelleAide: string;
        /**
         * CodeEtatAcquistion
         */
        codeEtatAcquistion: string;
    }
    interface IContratEpargneLogementLecture extends IElementLecture {
        /**
         * Cdfppr_CodeTypeEL
         */
        codeTypeEL: number;
        /**
         * Cdfadv_CodeDevsCpte
         */
        codeDeviseCompte: string;
        /**
         * TypeDrt
         */
        typeDroit: number;
        /**
         * Ctfpli_LienParnAvecCedn
         */
        lienParentAvecCedn: number;
        /**
         * Nufpct_IdntContEl
         */
        idContratEpargneLogement: string;
        /**
         * Lbfptc_LiblTitlCont
         */
        libelleTitulaireContrat: string;
        /**
         * Cdfpbc_CodeIndicBenePrimEl
         */
        codeIndiceBenePrimeEpargneLogement: number;
        /**
         * Ddfpct_DateOuvrCont
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureContrat: string;
        /**
         * Dtfprf_DateCltrCont
         * Type date au format yyyy-MM-dd
         */
        dateClotureContrat: string;
        /**
         * Cdfifr_CodeForc
         */
        codeForc: number;
        /**
         * Cdfiel_CodeRaptContEparLogm
         */
        codeRaptContratEpargneLogement: number;
        /**
         * Lbfpet_EtabOrigInte
         */
        etabOrigineInterieur: string;
        /**
         * Idfppc_IdntPersApprDrtCont
         */
        idPersonneApportDroitContrat: string;
        /**
         * Cdfpdj_CodeDrtJust
         */
        codeDroitJustificatif: number;
        /**
         * Cdfird_CodeResrDrtAcqs
         */
        codeResrDroitAcqs: number;
        /**
         * ContratPostReforme
         */
        contratPosteReforme: boolean;
        /**
         * ListIdntTrncEl
         */
        listeIdTrancheEpargneLogement: Array<string>;
        /**
         * IdwsPersBenef
         */
        idPersonneBeneficiaire: string;
    }
    interface IComplementFicheContactLecture extends IElementLecture {
        /**
         * Hdfcpc_HrDebtPlgHor
         */
        hrDebutPlgHor: number;
        /**
         * Hffcpc_HrFinPlgHor
         */
        hrFinPlgHor: number;
        /**
         * Llfccp_Comentair
         */
        comentair: string;
    }
    interface IPiecoThemeLecture extends IElementLecture {
        /**
         * CodeTheme
         */
        codeTheme: string;
        /**
         * Llfcth_LibelleLong
         */
        libelleLong: string;
        /**
         * Lcfcth_LibelleCourt
         */
        libelleCourt: string;
        /**
         * Nufccl_NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Ctfcet_CodeTypeElement
         */
        codeTypeElement: string;
    }
    interface IPiecoElementLecture extends IElementLecture {
        /**
         * Id
         */
        id: string;
        /**
         * NumRel
         */
        numeroRel: number;
        /**
         * TypeElement
         */
        typeElement: string;
        /**
         * Theme
         */
        theme: IPiecoThemeLecture;
        /**
         * Libelle
         */
        libelle: string;
    }
    interface IMotifEvenementConformiteLecture extends IElementLecture {
        /**
         * Id
         */
        id: string;
        /**
         * Idfadi_Dossier
         */
        dossier: string;
        /**
         * Origine
         */
        origine: IPiecoElementLecture;
        /**
         * Hefima_DateDebut
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Hefilm_DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Dtfar4_DerniereMaj
         * Type date au format yyyy-MM-dd
         */
        derniereMAJ: string;
        /**
         * Idfaen_IdEntite
         */
        idEntite: string;
        /**
         * Nofajd_NumeroRelatif
         */
        numeroRelatif: number;
        /**
         * Cefima_EtatMotif
         */
        etatMotif: number;
        /**
         * Ctfcet_TypeMotif
         */
        typeMotif: string;
        /**
         * MotifActif
         */
        motifActif: boolean;
        /**
         * CtfCth_ThemeRegroupement
         */
        themeRegroupement: string;
        /**
         * Llfcth_LibelleLongTheme
         */
        libelleLongTheme: string;
        /**
         * Qcfima_CptEvenementConformite
         */
        cptEvenementConformite: number;
        /**
         * Llfcpt_LiblPiecCtrl
         */
        libellePieceControle: string;
    }
    interface IEvenementConformiteLecture extends IElementLecture {
        /**
         * Idfadi_Dossier
         */
        dossier: string;
        /**
         * Qcfima_CptEvenementConformite
         */
        cptEvenementConformite: number;
        /**
         * Motifs
         */
        motifs: Array<IMotifEvenementConformiteLecture>;
        /**
         * Hdfima_DateDebut
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Hffima_DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Llfima_Motif
         */
        motif: string;
        /**
         * LibelleType
         */
        libelleType: string;
    }
    interface IDocumentOffreIndustrialiseeLecture extends IElementLecture {
        /**
         * CodeEntiteFonctionnelle
         */
        codeEntiteFonctionnelle: string;
        /**
         * IdEntiteFonctionnelle
         */
        idEntiteFonctionnelle: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * LibelleDocument
         */
        libelleDocument: string;
        /**
         * LibelleAide
         */
        libelleAide: string;
        /**
         * CodeExterneDocument
         */
        codeExterneDocument: string;
        /**
         * IndicateurCasEcheant
         */
        indicateurCasEcheant: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Origine
         */
        origine: string;
        /**
         * DateCreation
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DateModification
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * EtatDocument
         */
        etatDocument: string;
        /**
         * DocumentCommun
         */
        documentCommun: string;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * Destinataire
         */
        destinataire: string;
        /**
         * UrlPDF
         */
        urlPDF: string;
        /**
         * EstDocNEO
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
    }
    interface IOffrePretIndustrialiseeLecture extends IElementLecture {
        /**
         * EditionEligible
         */
        editionEligible: boolean;
        /**
         * EditionEligibleEnAgence
         */
        editionEligibleEnAgence: boolean;
        /**
         * LibelleDossier
         */
        libelleDossier: string;
        /**
         * DossierGdeACree
         */
        dossierGdeACree: boolean;
        /**
         * EtatDossierEdition
         */
        etatDossierEdition: string;
        /**
         * NbEnveloppesLigne1
         */
        nombreEnveloppesLigne1: number;
        /**
         * NbEnveloppesLigne2
         */
        nombreEnveloppesLigne2: number;
        /**
         * NbEnveloppesLigne3
         */
        nombreEnveloppesLigne3: number;
        /**
         * LibEnveloppeLigne1
         */
        libelleEnveloppeLigne1: string;
        /**
         * LibEnveloppeLigne2
         */
        libelleEnveloppeLigne2: string;
        /**
         * LibEnveloppeLigne3
         */
        libelleEnveloppeLigne3: string;
        /**
         * NbEnveloppesLigne1NO
         */
        nombreEnveloppesLigne1NO: number;
        /**
         * NbEnveloppesLigne2NO
         */
        nombreEnveloppesLigne2NO: number;
        /**
         * NbEnveloppesLigne3NO
         */
        nombreEnveloppesLigne3NO: number;
        /**
         * LibEnveloppeLigne1NO
         */
        libelleEnveloppeLigne1NO: string;
        /**
         * LibEnveloppeLigne2NO
         */
        libelleEnveloppeLigne2NO: string;
        /**
         * LibEnveloppeLigne3NO
         */
        libelleEnveloppeLigne3NO: string;
        /**
         * NbEnveloppesLigne1CA
         */
        nombreEnveloppesLigne1CA: number;
        /**
         * NbEnveloppesLigne2CA
         */
        nombreEnveloppesLigne2CA: number;
        /**
         * NbEnveloppesLigne3CA
         */
        nombreEnveloppesLigne3CA: number;
        /**
         * LibEnveloppeLigne1CA
         */
        libelleEnveloppeLigne1CA: string;
        /**
         * LibEnveloppeLigne2CA
         */
        libelleEnveloppeLigne2CA: string;
        /**
         * LibEnveloppeLigne3CA
         */
        libelleEnveloppeLigne3CA: string;
        /**
         * LibAbregeCaisse
         */
        libelleAbregeCaisse: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * EdsEdition
         */
        eDSEdition: string;
        /**
         * ValidationImplicite
         */
        validationImplicite: boolean;
        /**
         * DocumentGlobalPDF
         */
        documentGlobalPDF: string;
        /**
         * ListeDocIndusLecture
         */
        listeDocIndusLecture: Array<IDocumentOffreIndustrialiseeLecture>;
    }
    interface IDocumentSignatureElectroniqueLecture extends IElementLecture {
        /**
         * IdentifiantDocument
         */
        identifiantDocument: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * IdentifiantIDN
         */
        identifiantIDN: string;
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * NomDocument
         */
        nomDocument: string;
        /**
         * RefDocProd
         */
        referenceDocProd: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Origine
         */
        origine: string;
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
        /**
         * EstPresent
         */
        estPresent: boolean;
        /**
         * IndicePlan
         */
        indicePlan: number;
        /**
         * IndiceCredit
         */
        indiceCredit: number;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * estDocNeo
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
    }
    interface IInformationSignataire {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationDossierSignature {
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataire>;
    }
    interface IOffreSignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignature;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IMandatLecture extends IElementLecture {
        /**
         * Cocxbq_CodeCaisse
         */
        codeCaisse: string;
        /**
         * Dgfdms_DateDeSignature
         * Type date au format yyyy-MM-dd
         */
        dateDeSignature: string;
        /**
         * Ctfdfm_TypeFrequenceMandat
         */
        typeFrequenceMandat: string;
        /**
         * Ctfdma_TypeMandatSepaSdd
         */
        typeMandatSepaSdd: number;
        /**
         * Cnfdma_CodeNatureMandat
         */
        codeNatureMandat: number;
        /**
         * Idfdma_RefeMandat
         */
        referenceMandat: string;
        /**
         * Llfdcr_NomDuCreancier
         */
        nomDuCreancier: string;
        /**
         * Llfdac_AdresseDuCreancier
         */
        adresseDuCreancier: string;
        /**
         * Cofdpc_CodePostalDuCreancier
         */
        codePostalDuCreancier: string;
        /**
         * Lcfdvc_VilleDuCreancier
         */
        villeDuCreancier: string;
        /**
         * Ctfdpa_CodePaysDuCreancier
         */
        codePaysDuCreancier: string;
        /**
         * Llfdpo_LibDuPaysDonneurOrdre
         */
        libelleDuPaysDonneurOrdre: string;
        /**
         * Idfdcr_IdntCreancierSepaDomaine
         */
        idCreancierSepaDomaine: string;
        /**
         * Llfddb_NomDuDebiteur
         */
        nomDuDebiteur: string;
        /**
         * Idfdb3_CodeBicDebiteur
         */
        codeBicDebiteur: string;
        /**
         * Idfdi3_NumeroIbanCompteDebiteur
         */
        numeroIbanCompteDebiteur: string;
        /**
         * Idfddb_IdntDuDebiteur
         */
        idDuDebiteur: string;
        /**
         * Llfdad_AdresseDuDebiteur
         */
        adresseDuDebiteur: string;
        /**
         * Cofdpd_CodePostalDuDebiteur
         */
        codePostalDuDebiteur: string;
        /**
         * Lcfdvd_VilleDuDebiteur
         */
        villeDuDebiteur: string;
        /**
         * Ctfdpd_CodePaysDuDebiteur
         */
        codePaysDuDebiteur: string;
        /**
         * Llfdpd_LibPaysDuDebiteur
         */
        libellePaysDuDebiteur: string;
        /**
         * Llfdci_LibCreancierInitial
         */
        libelleCreancierInitial: string;
        /**
         * Idfdct_IdntCreancierInitial
         */
        idCreancierInitial: string;
        /**
         * Llfddf_LibDebiteurFinal
         */
        libelleDebiteurFinal: string;
        /**
         * Idfddf_IdntDebiteurFinal
         */
        idDebiteurFinal: string;
    }
    interface IDossierMRHLecture extends IElementLecture {
        /**
         * UrlIHM
         */
        urlIHM: string;
        /**
         * codeReseau
         */
        codeReseau: string;
        /**
         * idInstanceProcessus
         */
        idInstanceProcessus: string;
        /**
         * codeProcessus
         */
        codeProcessus: string;
        /**
         * idEtape
         */
        idEtape: string;
        /**
         * codeEtape
         */
        codeEtape: string;
        /**
         * AgncDomc
         */
        agenceDomiciliation: string;
        /**
         * urlRetour
         */
        urlRetour: string;
        /**
         * Sigle
         */
        sigle: string;
        /**
         * CdPrflAssr
         */
        codeProfilAssurance: string;
        /**
         * IdActrEtab
         */
        idActrEtab: string;
        /**
         * CdOrgnFinnActrEtab
         */
        codeOrgnFinancierActrEtab: string;
        /**
         * NomUsgActrEtab
         */
        nomUsageActrEtab: string;
        /**
         * IdEdsActrEtabl
         */
        idEDSActrEtabl: string;
        /**
         * ModeIntgIhm
         */
        modeIntegrationIhm: number;
        /**
         * CdAffSynth
         */
        codeAffSynth: number;
        /**
         * CdModeAccesSynth
         */
        codeModeAccessoireSynth: number;
        /**
         * CdEtabFinnTier
         */
        codeEtabFinancierTiers: string;
        /**
         * IdTier
         */
        idTiers: string;
        /**
         * CdTypeCanlDistn
         */
        codeTypeCanlDistn: string;
        /**
         * CdTypePerimEnt
         */
        codeTypePerimEnt: string;
        /**
         * CdAppliApl
         */
        codeApplicationAPL: string;
        /**
         * DateAcces
         * Type date au format yyyy-MM-dd
         */
        dateAccessoire: string;
        /**
         * AppelEffectue
         */
        appelEffectue: boolean;
    }
    interface IRessourceLecture extends IElementLecture {
        /**
         * Ctfpre_TypeRess
         */
        typeRessource: string;
        /**
         * Mtfpre_MtRess
         */
        montantRessource: number;
        /**
         * Txfmrc_TxPondRess
         */
        tauxPondereRessource: number;
        /**
         * Npfpre_NbPerdParAn
         */
        nombrePeriodeParAn: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfpao_CodeExstRessApreOper
         */
        codeExisteRessourceApreOper: number;
        /**
         * Lbfpre_LiblRessource
         */
        libelleRessource: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * IdntGrpeIntv
         */
        idGrpeIntervenant: string;
    }
    interface IPhaseCreditExistantLecture extends IElementLecture {
        /**
         * Ddfcph_DateDebtPhas
         * Type date au format yyyy-MM-dd
         */
        dateDebutPhase: string;
        /**
         * Dffcph_DateFinPhas
         * Type date au format yyyy-MM-dd
         */
        dateFinPhase: string;
        /**
         * Meface_MtEchePhas
         */
        montantEcheancePhase: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Pftmam_PerdAmrt
         */
        periodeAmortissement: number;
        /**
         * Duree
         */
        duree: number;
        /**
         * IdntCredExst
         */
        idCreditExiste: string;
    }
    interface IFamilleEpargneLecture extends IElementLecture {
        /**
         * Cdfmpr_CodeFamlPrdtAdr
         */
        codeFamilleProduitAdresse: string;
        /**
         * Nbfmpr_NbPrdtDetnPourUneFamlPrdtAdr
         */
        nombreProduitDetnPourUneFamilleProduitAdresse: number;
        /**
         * Mtfmve_MtValrEprgAvntOper
         */
        montantValeurEpargneAvenantOper: number;
        /**
         * Lbfcej_LiblCaisEprg
         */
        libelleCaisseEpargne: string;
        /**
         * Dtfmve_DateValrEprg
         * Type date au format yyyy-MM-dd
         */
        dateValeurEpargne: string;
        /**
         * Mtfmep_MtEprgApreOper
         */
        montantEpargneApreOper: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * IdntPers
         */
        idPersonne: string;
    }
    interface IOppositionLecture extends IElementLecture {
        /**
         * Cdfmop_CodeOppo
         */
        codeOpposition: string;
        /**
         * Ddfmop_DateDebtOppo
         * Type date au format yyyy-MM-dd
         */
        dateDebutOpposition: string;
        /**
         * Dffmop_DateFinOppo
         * Type date au format yyyy-MM-dd
         */
        dateFinOpposition: string;
        /**
         * IdntPersPhys
         */
        idPersonnePhys: string;
    }
    interface IVersementFractionneLecture extends IElementLecture {
        /**
         * Ptfbmv_PerdicVerst
         */
        periodiciteVersement: number;
        /**
         * Mvfbmv_MtPremVerst
         */
        montantPremierVersement: number;
        /**
         * Cdfbve_ModeReglVerst
         */
        modeRegleVersement: string;
        /**
         * Nufbve_NumrDomcMadFond
         */
        numeroDomiciliationMADFond: string;
        /**
         * Mvfbmf_MtVerstFrct
         */
        montantVersementFraction: number;
        /**
         * Nbfbvs_NbVerstSouh
         */
        nombreVersementSouh: number;
        /**
         * Mvfcpm_MtVerstPerdMaxm
         */
        montantVersementPeriodeMaximum: number;
        /**
         * Mvfcim_MtVerstIntlMaxm
         */
        montantVersementInitialMaximum: number;
        /**
         * Txfcpv_QuotPremVerst
         */
        quotientPremierVersement: number;
        /**
         * Txfcvp_QuotVerstPerd
         */
        quotientVersementPeriode: number;
    }
    interface IBienAVendreLecture extends IElementLecture {
        /**
         * Cdfcni_CodeTypeObjtComl
         */
        codeTypeObjetCommercialisation: string;
        /**
         * Ctfcor_CodeTypeObjtRegl
         */
        codeTypeObjetRegle: string;
        /**
         * Ctfmve_TypeVent
         */
        typeVent: number;
        /**
         * Mtfmvc_PrixNetVndr
         */
        prixNetVendeur: number;
        /**
         * Mtfmva_MtCrdSurBienVend
         */
        montantCRDSurBienVend: number;
        /**
         * Mtfgrd_MtCrdRachSurBienVend
         */
        montantCRDRachSurBienVend: number;
        /**
         * Mtfaag_MtComsAgnc
         */
        montantComsAgence: number;
        /**
         * Mtfaoc_MtAcqs
         */
        montantAcqs: number;
        /**
         * Dtfaoc_DateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateAcqs: string;
        /**
         * Ctfmma_ModeAcqs
         */
        modeAcqs: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface IComplementDossierLecture extends IElementLecture {
        /**
         * Llfidr_LiblDelRelsProj
         */
        libelleDelReleaseProjet: string;
        /**
         * Ctfipt_CodePrrtTrt
         */
        codePrrtTraitement: string;
        /**
         * Dtfisi_DateSaisSurItnt
         * Type date au format yyyy-MM-dd
         */
        dateSaisieSurInternet: string;
        /**
         * Hefisi_HeurSaisSurItnt
         */
        heureSaisieSurInternet: number;
    }
    interface IReamenagementLecture extends IElementLecture {
        /**
         * Cdfare_TypeReam
         */
        typeReamenagement: number;
        /**
         * Ctfmup_UsgPretTres
         */
        usagePretTres: number;
        /**
         * Mtfmvc_AncnEche
         */
        ancnEcheance: number;
        /**
         * Mtfmva_CaptRestDu
         */
        capitalRestantDu: number;
        /**
         * Mtfmvd_ValrAchtObjtFinn
         */
        valeurAchtObjetFinancier: number;
        /**
         * Npfmrp_DureResdPretRefn
         */
        dureResdPretRefn: number;
        /**
         * Dtfoac_DateAcqsObjtRefn
         * Type date au format yyyy-MM-dd
         */
        dateAcqsObjetRefn: string;
        /**
         * Mtfaoc_CoutAcqsObjtRefn
         */
        coutAcqsObjetRefn: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * ListIdntPretReam
         */
        listeIdPretReamenagement: Array<string>;
    }
    interface IPretReamenageLecture extends IElementLecture {
        /**
         * Cdfpbq_CodeBanq
         */
        codeBanque: string;
        /**
         * Idfct1_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Idfaac_IdntDossComl
         */
        idDossierCommercialisation: string;
        /**
         * Idfao2_IdntDossOrig
         */
        idDossierOrigine: string;
        /**
         * Cdfcpo_CodePrdtetbl
         */
        codePrdtetbl: string;
        /**
         * Cdfars_CodeApparRes
         */
        codeApparRes: boolean;
        /**
         * Ctfars_TypeApparRes
         */
        typeApparRes: number;
        /**
         * Dtfccl_DateCltr
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Mtfard_MtRestDuSurPretRefn
         */
        montantRestantDuSurPretRefn: number;
        /**
         * Mefacg_MtechePerdPretRefn
         */
        mtechePeriodePretRefn: number;
        /**
         * Peface_Perdeche
         */
        perdeche: number;
        /**
         * Dffmce_DateFinCred
         * Type date au format yyyy-MM-dd
         */
        dateFinCredit: string;
        /**
         * Lbfcvs_LiblPrdt
         */
        libelleProduit: string;
        /**
         * Ctfals_TypeRegl
         */
        typeRegle: number;
        /**
         * Ctfmtc_TypeCred
         */
        typeCredit: number;
        /**
         * Lbfaep_NometblPret
         */
        nometblPret: string;
        /**
         * Ctfpag_CodeOrigAppliGestCred
         */
        codeOrigineApplicationGestionCredit: number;
        /**
         * Cdfidr_CodeDev
         */
        codeDev: string;
        /**
         * IdntReam
         */
        idReamenagement: string;
        /**
         * IdntInfoCompRegr
         */
        idInformationCompRegr: string;
    }
    interface IPretReamenageableLecture extends IElementLecture {
        /**
         * InfoPret
         */
        informationPret: IPretReamenageLecture;
        /**
         * InfoRegroupement
         */
        informationRegroupement: IInfoRegroupementLecture;
    }
    interface IResultatControle {
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Messages
         */
        messages: Array<string>;
    }
    interface IPlanFinancementLecture extends IElementLecture {
        /**
         * Lbfapl_LiblRetrAdr
         */
        libelleRetardAdresse: string;
        /**
         * Mtfaso_MtTotlEmprPlan
         */
        montantTotalEmpruntPlan: number;
        /**
         * Mtfarf_MtRestFinn
         */
        montantRestantFinancier: number;
        /**
         * Cefapl_CodeEttPlanFinn
         */
        codeEtatPlanFinancier: number;
        /**
         * Cdfacp_CodeContPlan
         */
        codeContratPlan: number;
        /**
         * Dtfccr_DateCretPlan
         * Type date au format yyyy-MM-dd
         */
        dateCreationPlan: string;
        /**
         * Dtfmva_DateDernAnlsAdr
         * Type date au format yyyy-MM-dd
         */
        dateDernierAnlsAdresse: string;
        /**
         * Dtfcep_DateEditPropCred
         * Type date au format yyyy-MM-dd
         */
        dateEditPropCredit: string;
        /**
         * Ntfmba_NotfEnggBale2
         */
        notfEngagementBale2: string;
        /**
         * Cdfmte_CodeAnlsMeneTerm
         */
        codeAnlsMeneTerme: number;
        /**
         * Cdfdsp_CodeDecsSpec
         */
        codeDecisionSpec: number;
        /**
         * Txfita_CorcTarfCalcParAdr
         */
        corcTarfCalculParAdresse: number;
        /**
         * Mtfiar_CottAnlsRisq
         */
        cotisationAnlsRisque: number;
        /**
         * Txfgca_CoefTarfCalcParAdr
         */
        coefficientTarfCalculParAdresse: number;
        /**
         * Cdfwor_CodeOrigPretPrnc
         */
        codeOriginePretPrincipal: number;
        /**
         * Cifaai_IndicAllt
         */
        indiceAllt: number;
        /**
         * Mtfaap_MtApprPers
         */
        montantApportPersonne: number;
        /**
         * Mtfmpl_MtPretEparLogmTher
         */
        montantPretEpargneLogementTher: number;
        /**
         * Idfcsm_NumrDossSmac
         */
        numeroDossierSmac: string;
        /**
         * Ctfico_TypeCritOptim
         */
        typeCritereOptim: number;
        /**
         * Nbfico_ValeurCritOptim
         */
        valeurCritereOptim: number;
        /**
         * AccordDePrincipe
         */
        accordDePrincipe: number;
        /**
         * ListResultatControle
         */
        listeResultatControle: Array<IResultatControle>;
        /**
         * EstEligibleApl
         */
        estEligibleAPL: boolean;
        /**
         * MontantAplModifiable
         */
        montantAPLModifiable: boolean;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * ListIdntCredIntr
         */
        listeIdCreditIntr: Array<string>;
        /**
         * ListIdntCredExtr
         */
        listeIdCreditExtr: Array<string>;
        /**
         * ListIdntAssr
         */
        listeIdAssurance: Array<string>;
        /**
         * ListIdntRefusAssExt
         */
        listeIdRefusAssuranceExterieur: Array<string>;
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
         * ListIdntServSurObjt
         */
        listeIdServiceSurObjet: Array<string>;
        /**
         * ListIdntPalrCont
         */
        listeIdPalierContrat: Array<string>;
        /**
         * IdntApl
         */
        idAPL: string;
        /**
         * IdntSynthesePlanFinancement
         */
        idSynthesePlanFinancement: string;
    }
    interface ICreditExterneLecture extends IElementLecture {
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Npface_DureAmrtMois
         */
        dureAmortissementMois: number;
        /**
         * Txface_TxAmrt
         */
        tauxAmortissement: number;
        /**
         * Mkface_MtCapt
         */
        montantCapital: number;
        /**
         * Meface_MtEcheAmrt
         */
        montantEcheanceAmortissement: number;
        /**
         * Peface_CodePerdAmrt
         */
        codePeriodeAmortissement: number;
        /**
         * Cdfaia_CodeIndicInteTantPPers
         */
        codeIndiceInterieurTantPPersonne: number;
        /**
         * Lbface_LiblLibrSurConcr
         */
        libelleLibrSurConcr: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfwna_CodeIndicNatrPret
         */
        codeIndiceNaturePret: number;
        /**
         * Cnfctx_CodeIndicTxRevs
         */
        codeIndiceTauxRevision: number;
        /**
         * Npfwdd_DureDiffMois
         */
        dureDiffereMois: number;
        /**
         * Ctfwsr_TypeSurt
         */
        typeSurtaxe: number;
        /**
         * Cdfwch_CodeIndicPresAssrPertEmpl
         */
        codeIndicePresAssurancePertEmpl: number;
        /**
         * Ctfwtb_CodeIndicTypeRemb
         */
        codeIndiceTypeRemboursement: number;
        /**
         * Txfatg_TegActu
         */
        tegActu: number;
        /**
         * Mefadi_MtecheDiff
         */
        mtecheDiffere: number;
        /**
         * Pefadi_CodePerdDiff
         */
        codePeriodeDiffere: number;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
    }
    interface IPalierContraintLecture extends IElementLecture {
        /**
         * Ddpe_DateDebtPerd
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriode: string;
        /**
         * Dfpe_DateFinPerd
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriode: string;
        /**
         * Meface_MtEche
         */
        montantEcheance: number;
        /**
         * Npfpco_DurePalr
         */
        durePalier: number;
        /**
         * IdntPlanFinn
         */
        idPlanFinancier: string;
    }
    interface IAlerteEnSortieLecture extends IElementLecture {
        /**
         * Nofiax_NumeAlrt
         */
        numeroAlerte: number;
        /**
         * Ctfiax_CodeAlrt
         */
        codeAlerte: string;
        /**
         * Cefiax_CodeTrtAlrt
         */
        codeTraitementAlerte: number;
        /**
         * Dcfiax_DateEmssAlrt
         * Type date au format yyyy-MM-dd
         */
        dateEmissionAlerte: string;
        /**
         * Drfiax_DateRepnAlrt
         * Type date au format yyyy-MM-dd
         */
        dateRepnAlerte: string;
    }
    interface IVersementAttenduLecture extends IElementLecture {
        /**
         * Nufcrl_NumeReltVerstAttn
         */
        numeroRelationVersementAttn: number;
        /**
         * Ctftve_TypeVerst
         */
        typeVersement: string;
        /**
         * Mtfvat_MtVerst
         */
        montantVersement: number;
        /**
         * Dtfdeb_DateDebt
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Dtfvfn_DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Ctfapi_PerdVerst
         */
        periodeVersement: number;
        /**
         * IdntContAssrGarn
         */
        idContratAssuranceGarantie: string;
    }
    interface IProprietaireLecture extends IElementLecture {
        /**
         * Txffim_QuotPleinProp
         */
        quotientPleinProp: number;
        /**
         * Txfcnp_QuotNueProp
         */
        quotientNueProp: number;
        /**
         * Txfcdu_QuotUsuf
         */
        quotientUsuf: number;
        /**
         * Txfcus_QuotDroiUsag
         */
        quotientDroiUsag: number;
        /**
         * Ctfcdb_CdModDettnBien
         */
        codeModDettnBien: number;
        /**
         * IdntPersn
         */
        idPersn: string;
    }
    interface IReferenceCadastraleLecture extends IElementLecture {
        /**
         * Lbfoca_ReferenceCadastre
         */
        referenceCadastre: string;
        /**
         * Lbfcsc_SectionCadastre
         */
        sectionCadastre: string;
        /**
         * Qtfcsc_SurfaceReferenceCadastrale
         */
        surfaceReferenceCadastrale: number;
        /**
         * Llfcob_commentaires
         */
        commentaires: string;
    }
    interface IReferenceLotLecture extends IElementLecture {
        /**
         * Lbfolt_ReferenceTypeDeLot
         */
        referenceTypeDeLot: string;
        /**
         * Llfcnl_NatureDuLot
         */
        natureDuLot: string;
        /**
         * Nbftta_Tantieme
         */
        tantieme: number;
    }
    interface ICouvertureCreditLecture extends IElementLecture {
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * Mefaas_MtEcheCouv
         */
        montantEcheanceCouverture: number;
        /**
         * Dffgaf_DateFinAffecCouv
         * Type date au format yyyy-MM-dd
         */
        dateFinAffectationCouverture: string;
        /**
         * IdntAccs
         */
        idAccessoire: string;
        /**
         * IdntCredCouv
         */
        idCreditCouverture: string;
        /**
         * ListIdntCots
         */
        listeIdCotisation: Array<string>;
        /**
         * Idfcoc_IdPretOrgCaution
         */
        idPretOrganismeCaution: string;
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
    interface ICreditInterneLecture extends IElementLecture {
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
    interface IPatrimoineImmobilierLecture extends IElementLecture {
        /**
         * Ctfcnp_NatrPtrmImmb
         */
        naturePatrimoineImmobilier: number;
        /**
         * Cdfcdo_CodeIndicUsgLogm
         */
        codeIndiceUsageLogement: number;
        /**
         * Mtfmvb_ValrActlPtrm
         */
        valeurActuarielPatrimoine: number;
        /**
         * Dtfdac_DateAcqsPtrm
         * Type date au format yyyy-MM-dd
         */
        dateAcqsPatrimoine: string;
        /**
         * Mkfkrd_CaptRestSurPtrm
         */
        capitalRestantSurPatrimoine: number;
        /**
         * Mefhpa_MensPretSurPtrm
         */
        mensPretSurPatrimoine: number;
        /**
         * Dffacr_DateFinPretSurPtrm
         * Type date au format yyyy-MM-dd
         */
        dateFinPretSurPatrimoine: string;
    }
    interface IBlocNotesLecture extends IElementLecture {
        /**
         * Idfwac_TypeBlc
         */
        typeBlocNote: string;
        /**
         * ContBlc
         */
        contratBlocNote: string;
    }
    interface IClausePersonnaliseeLecture extends IElementLecture {
        /**
         * DestClsePers
         */
        destinataireClassePersonne: number;
        /**
         * LiblClsePers
         */
        libelleClassePersonne: string;
        /**
         * NumeReltClsePers
         */
        numeroRelationClassePersonne: number;
    }
    interface IAvisLecture extends IElementLecture {
        /**
         * Dtfaad_DateSaisAvis
         * Type date au format yyyy-MM-dd
         */
        dateSaisieAvis: string;
        /**
         * Lbfaad_LiblAvis
         */
        libelleAvis: string;
        /**
         * Idfaen_IdntEnttSaisAvis
         */
        idEntiteSaisieAvis: string;
        /**
         * Lbfaen_LiblEnttSaisAvis
         */
        libelleEntiteSaisieAvis: string;
        /**
         * Ctfita_CodeTyplAvis
         */
        codeTypologieAvis: string;
        /**
         * Nofiav_NumeAvis
         */
        numeroAvis: number;
    }
    interface IAvisOrganismeExterneLecture extends IElementLecture {
        /**
         * Idfpit_IdntOrgnExtn
         */
        idOrgnExterne: string;
        /**
         * Idfcin_IdntInteEnv
         */
        idInterieurEnvoi: string;
        /**
         * Idfcex_IdntExtnEnv
         */
        idExterneEnvoi: string;
        /**
         * Dtfal1_DateEnv
         * Type date au format yyyy-MM-dd
         */
        dateEnvoi: string;
        /**
         * Dtfaad_DateAvis
         * Type date au format yyyy-MM-dd
         */
        dateAvis: string;
        /**
         * Cifctr_CodeIndicTrtEnv
         */
        codeIndiceTraitementEnvoi: number;
        /**
         * Cdfads_CodeDecs
         */
        codeDecision: string;
        /**
         * Cdfar2_CodeMotf
         */
        codeMotf: string;
        /**
         * Llfar1_LiblAvisDecs1
         */
        libelleAvisDecision1: string;
        /**
         * Llfar2_LiblAvisDecs2
         */
        libelleAvisDecision2: string;
        /**
         * Lbfpin_NomAgntInstr
         */
        nomAgentInstruction: string;
        /**
         * Nufpt1_NumeTeleInstr
         */
        numeroTeleInstruction: string;
        /**
         * Lbfpma_LiblAdrsMail
         */
        libelleAdresseMail: string;
        /**
         * Nufpt2_NumeFaxInstr
         */
        numeroFaxInstruction: string;
        /**
         * Cdfar1_TypeLiaiSaccefTp
         */
        typeLiaiSaccefTp: number;
        /**
         * Cdfar3_TypeRepnOrgnExtn
         */
        typeRepnOrgnExterne: number;
        /**
         * IdntAccs
         */
        idAccessoire: string;
    }
    interface IEvenementLecture extends IElementLecture {
        /**
         * Nofaed_NumeReltEvenDoss
         */
        numeroRelationEvenDossier: number;
        /**
         * Cefadc_CodeEttDoss
         */
        codeEtatDossier: number;
        /**
         * Dtfaed_DateSaisEven
         * Type date au format yyyy-MM-dd
         */
        dateSaisieEven: string;
        /**
         * Lbfamd_MessEnrgSurEvenDoss
         */
        messEnregistrementSurEvenDossier: string;
        /**
         * Dtfaee_DateEfftEven
         * Type date au format yyyy-MM-dd
         */
        dateEffetEven: string;
        /**
         * Ctfaev_CodeTypeEven
         */
        codeTypeEven: string;
        /**
         * Idfase_IdntEnttSaisEven
         */
        idEntiteSaisieEven: string;
        /**
         * Lbfase_LiblEnttSaisEven
         */
        libelleEntiteSaisieEven: string;
        /**
         * Cefhgc_CodeIndicGestCentEven
         */
        codeIndiceGestionCentralEven: number;
        /**
         * Cdfabo_ElemStrcGestBackCent
         */
        elementStructureGestionBackCentral: string;
        /**
         * Idfce3_IdntCaisAsscBackCent
         */
        idCaisseAssuranceBackCentral: number;
        /**
         * LiblEven
         */
        libelleEven: string;
        /**
         * CodeNatrEven
         */
        codeNatureEven: string;
        /**
         * IdntAvisAsscEven
         */
        idAvisAssuranceEven: string;
    }
    interface IVersementLecture extends IElementLecture {
        /**
         * MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * Txfave_PctVerst
         */
        pourcentageVersement: number;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Nufccl_NumeOrdrClss
         */
        numeroOrdreClasse: number;
        /**
         * Lbfasa_LiblAvnc
         */
        libelleAvnc: string;
    }
    interface IPromotionImmobiliereLecture extends IElementLecture {
        /**
         * SittPrgm
         */
        situationProgramme: number;
        /**
         * LiblSyntDoss
         */
        libelleSyntDossier: string;
        /**
         * InttPrgm
         */
        intituleProgramme: string;
        /**
         * NomScpi
         */
        nomScpi: string;
        /**
         * DateDiss
         * Type date au format yyyy-MM-dd
         */
        dateDiss: string;
        /**
         * AdrsPrgmImmb
         */
        adresseProgrammeImmobilier: string;
        /**
         * LoclPrgmImmb
         */
        loclProgrammeImmobilier: string;
        /**
         * CodePostPrgmImmb
         */
        codePosteProgrammeImmobilier: string;
        /**
         * CodePays
         */
        codePays: string;
        /**
         * StttCapi
         */
        stttCapitalisation: number;
        /**
         * DateFinComl
         * Type date au format yyyy-MM-dd
         */
        dateFinCommercialisation: string;
        /**
         * IndicAlltDeps
         */
        indiceAlltDeps: number;
        /**
         * IdntPrjt
         */
        idProjet: string;
    }
    interface IRedacteurActeLecture extends IElementLecture {
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Lbfpnm_NomRedcActe
         */
        nomReductionActe: string;
        /**
         * Lbfppn_PrenRedcActe
         */
        prenReductionActe: string;
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
    }
    interface IEmprunteurLecture extends IElementLecture {
        /**
         * Nbfmec_NbEnfnChrg
         */
        nombreEnfantCharge: number;
        /**
         * Nbfmpf_NbPersGrpe
         */
        nombrePersonneGrpe: number;
        /**
         * Nbfmps_NbPersSuppChrg
         */
        nombrePersonneSuppCharge: number;
        /**
         * Ctfmli_TypeLienEtrLesPers
         */
        typeLienEntreLesPersonne: number;
        /**
         * LiblLienPersonne
         */
        libelleLienPersonne: string;
        /**
         * Lbfmgp_NomGrpe
         */
        nomGrpe: string;
        /**
         * Lbfmae_AgsEnfn
         */
        ageEnfant: Array<number>;
        /**
         * Dtfmrp_DateDernRapp
         * Type date au format yyyy-MM-dd
         */
        dateDernierRapp: string;
        /**
         * Nbfma_AnneNaisEnfn
         */
        anneNaisEnfant: Array<number>;
        /**
         * Cdfmec_CodeEmplrComun
         */
        codeEmplrComun: number;
        /**
         * Mtfmcv_CapceprgAvntOper
         */
        capceprgAvenantOper: number;
        /**
         * Mtfmac_AncnChrgLiesAOperImmb
         */
        ancnChargeLiesAOperImmobilier: number;
        /**
         * Mtfmvp_ValrPtrmImmb
         */
        valeurPatrimoineImmobilier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Mtfmpa_MtPtrmMobl
         */
        montantPatrimoineMobl: number;
        /**
         * Nbfmvo_NbVoit
         */
        nombreVoiture: number;
        /**
         * Mcfpre_MtRessPond
         */
        montantRessourcePondere: number;
        /**
         * Mcfpce_MtChrgEmprHorsPrjtPond
         */
        montantChargeEmpruntHorsProjetPondere: number;
        /**
         * Mcfpac_MtAutrChrgPond
         */
        montantAutreChargePondere: number;
        /**
         * Lbfaem_DenmEmpr
         */
        denmEmprunt: string;
        /**
         * Lnfpem_LiblLongEmpr
         */
        libelleLongEmprunt: string;
        /**
         * Lbfain_IntlcEmpr
         */
        intlcEmprunt: string;
        /**
         * Idfaep_IdntEnttTitlClnt
         */
        idEntiteTitulaireClient: string;
        /**
         * Idfaeg_IdntelemStrcGest
         */
        idElementStructureGestion: string;
        /**
         * Cdfcke_CodeCateEmpr
         */
        codeCateEmprunt: string;
        /**
         * Lbfcke_LiblCateEmpr
         */
        libelleCateEmprunt: string;
        /**
         * Ctfcma_CodeTypeMarc
         */
        codeTypeMarche: number;
        /**
         * Ctfpmp_CodeTypeMarcPers
         */
        codeTypeMarchePersonne: number;
        /**
         * Ctfprm_CodeTypeRevnMeng
         */
        codeTypeRevnMeng: number;
        /**
         * Ctfcae_CateAgntecnmBafi
         */
        cateAgntecnmBafi: number;
        /**
         * Ctfccl_CateClntBafi
         */
        cateClientBafi: number;
        /**
         * Ctfcad_TypeAdmnBafi
         */
        typeAdmnBafi: number;
        /**
         * Ctfcba_ClssAgntBafi
         */
        classeAgentBafi: string;
        /**
         * Cdfpsf_CodeSittFaml
         */
        codeSituationFamille: number;
        /**
         * Lbfpsf_LiblSittFaml
         */
        libelleSituationFamille: string;
        /**
         * Cdfpsr_CodeSittFamlRegl
         */
        codeSituationFamilleRegle: number;
        /**
         * Nbfpnp_NbPersCmpstMeng
         */
        nombrePersonneCmpstMeng: number;
        /**
         * Nbfppc_NbPersAChrg
         */
        nombrePersonneACharge: number;
        /**
         * Cdfpma_NbActfMeng
         */
        nombreActfMeng: number;
        /**
         * Dtfpen_DateEncrEparLogm
         * Type date au format yyyy-MM-dd
         */
        dateEncoursEpargneLogement: string;
        /**
         * Mtftpl_MtEncrIsssPretPel
         */
        montantEncoursIsssPretPEL: number;
        /**
         * Mtftli_MtEncrIsssPretLel
         */
        montantEncoursIsssPretLEL: number;
        /**
         * Mtftlh_MtEncrLivrAutretbl
         */
        montantEncoursLivrAutretbl: number;
        /**
         * Mtftph_MtEncrPlnsAutretbl
         */
        montantEncoursPlnsAutretbl: number;
        /**
         * Mtfwrt_TotlRevnAnnlNets
         */
        totalRevnAnnulationNets: number;
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
        /**
         * Cdfwsl_StttOccpLogmActl
         */
        stttOccpLogementActuariel: number;
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Lbfpnm_NomRaisSoclEmpr
         */
        nomRaisonSocialeEmprunt: string;
        /**
         * Lbfpa1_Intt
         */
        intituleLigne1: string;
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
         * Lbfpa6_CompIntt
         */
        compIntituleLigne2: string;
        /**
         * Lbfpa7_AdrsLign5
         */
        adresseLigne5: string;
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cofopz_CodeCondDergPourPtz
         */
        codeConditionDerogationPourPtz: number;
        /**
         * Cdfpse_CodeSectRatt
         */
        codeSecteurRattachement: string;
        /**
         * Cdfpjm_CodeJeunMeng
         */
        codeJeunMeng: number;
        /**
         * PresUnePersAttnRepnFicp
         */
        presUnePersonneAttnRepnFicp: boolean;
        /**
         * PresUnePersFichFicp
         */
        presUnePersonneFichFicp: boolean;
        /**
         * Qmfcvi_EsperVie
         */
        esperVie: number;
        /**
         * Qmfcvd_EsperVieDec
         */
        esperVieDecision: number;
        /**
         * Qmfcvs_EsperVieStrs
         */
        esperVieStress: number;
        /**
         * MtRessAvntProj
         */
        montantRessourceAvenantProjet: number;
        /**
         * MtChrgEmprAvntProj
         */
        montantChargeEmpruntAvenantProjet: number;
        /**
         * MtAutrChrgAvntProj
         */
        montantAutreChargeAvenantProjet: number;
        /**
         * RestVivrAvntProj
         */
        restantVivrAvenantProjet: number;
        /**
         * IndicRestVivrAvntProj
         */
        indiceRestantVivrAvenantProjet: number;
        /**
         * TxEndtAvntProj
         */
        tauxEndtAvenantProjet: number;
        /**
         * TotalEpargneContractuelle
         */
        totalEpargneContractuelle: number;
        /**
         * TotalEpargneLiquide
         */
        totalEpargneLiquide: number;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * Cdfadv_CodeDeviseEmprunteur
         */
        codeDeviseEmprunteur: string;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * ListIdntCpteDeptGrpePers
         */
        listeIdCompteDeptGrpePersonne: Array<string>;
        /**
         * ListIdntCptePrfsPers
         */
        listeIdComptePrfsPersonne: Array<string>;
        /**
         * ListIdntRessGrpe
         */
        listeIdRessourceGrpe: Array<string>;
        /**
         * ListIdntChrgGrpe
         */
        listeIdChargeGrpe: Array<string>;
        /**
         * ListIdntCredExstGrpe
         */
        listeIdCreditExisteGrpe: Array<string>;
        /**
         * ListIdntFamlEprgPers
         */
        listeIdFamilleEpargnePersonne: Array<string>;
        /**
         * ListIdntRevnFiscAsscEmpr
         */
        listeIdRevnFiscalAssuranceEmprunt: Array<string>;
        /**
         * ListIdntDonnPtrmImmb
         */
        listeIdDonneurPatrimoineImmobilier: Array<string>;
    }
    interface IRevenuFiscalLecture extends IElementLecture {
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
        /**
         * Ctfprm_TypeRevnMeng
         */
        typeRevnMeng: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * IdntEmpr
         */
        idEmprunt: string;
    }
    interface IElementSchema {
        /**
         * Idws
         */
        idws: string;
        /**
         * Desc
         */
        description: string;
    }
    interface IBlocNotesSchema extends IElementSchema {
        /**
         * Idfwac_TypeBlc
         */
        typeBlocNote: string;
    }
    interface IClausePersonnaliseeSchema extends IElementSchema {
        /**
         * DestClsePers
         */
        destinataireClassePersonne: number;
    }
    interface IAlerteEnSortieSchema extends IElementSchema {
        /**
         * Ctfiax_CodeAlrt
         */
        codeAlerte: string;
        /**
         * Dcfiax_DateEmssAlrt
         * Type date au format yyyy-MM-dd
         */
        dateEmissionAlerte: string;
    }
    interface IAlerteEnEntreeSchema extends IElementSchema {
        /**
         * Ctfiai_CodeAlrt
         */
        codeAlerte: number;
        /**
         * Dcfiai_DateEmssAlrt
         * Type date au format yyyy-MM-dd
         */
        dateEmissionAlerte: string;
    }
    interface IAvisSchema extends IElementSchema {
        /**
         * Ctfita_CodeTyplAvis
         */
        codeTypologieAvis: string;
        /**
         * Dtfaad_DateSaisAvis
         * Type date au format yyyy-MM-dd
         */
        dateSaisieAvis: string;
        /**
         * Idfaen_IdntEnttSaisAvis
         */
        idEntiteSaisieAvis: string;
        /**
         * Lbfaen_LiblEnttSaisAvis
         */
        libelleEntiteSaisieAvis: string;
        /**
         * Nofiav_NumeAvis
         */
        numeroAvis: number;
    }
    interface IEvenementSchema extends IElementSchema {
        /**
         * Ctfaev_CodeTypeEven
         */
        codeTypeEven: string;
        /**
         * Dtfaee_DateEfftEven
         * Type date au format yyyy-MM-dd
         */
        dateEffetEven: string;
    }
    interface IVersementSchema extends IElementSchema {
        /**
         * Txfave_PctVerst
         */
        pourcentageVersement: number;
    }
    interface IRedacteurActeSchema extends IElementSchema {
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
    }
    interface IRessourceSchema extends IElementSchema {
        /**
         * Ctfpre_TypeRess
         */
        typeRessource: string;
        /**
         * Mtfpre_MtRess
         */
        montantRessource: number;
        /**
         * Npfpre_NbPerdParAn
         */
        nombrePeriodeParAn: number;
    }
    interface IChargeSchema extends IElementSchema {
        /**
         * Ctfpch_TypeDech
         */
        typeDech: string;
        /**
         * Mtfpch_MtChrg
         */
        montantCharge: number;
        /**
         * Npfpch_NbPerdParAn
         */
        nombrePeriodeParAn: number;
    }
    interface IPhaseCreditExistantSchema extends IElementSchema {
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
    }
    interface ICreditExistantSchema extends IChargeSchema {
        /**
         * Mkfard_MtRestDu
         */
        montantRestantDu: number;
        /**
         * PhasesCreditExistant
         */
        phasesCreditExistant: Array<IPhaseCreditExistantSchema>;
    }
    interface IRevenuFiscalSchema extends IElementSchema {
        /**
         * Mtfprm_MtRevnMeng
         */
        montantRevnMeng: number;
    }
    interface IPatrimoineImmobilierSchema extends IElementSchema {
        /**
         * Ctfcnp_NatrPtrmImmb
         */
        naturePatrimoineImmobilier: number;
        /**
         * Mtfmvb_ValrActlPtrm
         */
        valeurActuarielPatrimoine: number;
    }
    interface IEmprunteurSchema extends IElementSchema {
        /**
         * IdwsPersonnes
         */
        idwsPersonnes: Array<string>;
        /**
         * Ressources
         */
        ressources: Array<IRessourceSchema>;
        /**
         * Charges
         */
        charges: Array<IChargeSchema>;
        /**
         * RevenusFiscaux
         */
        revenusFiscaux: Array<IRevenuFiscalSchema>;
        /**
         * PatrimoinesImmo
         */
        patrimoinesImmobilier: Array<IPatrimoineImmobilierSchema>;
    }
    interface IGarantSchema extends IElementSchema {
        /**
         * IdwsPersonnes
         */
        idwsPersonnes: Array<string>;
        /**
         * Ressources
         */
        ressources: Array<IRessourceSchema>;
        /**
         * Charges
         */
        charges: Array<IChargeSchema>;
    }
    interface IFamilleEpargneSchema extends IElementSchema {
        /**
         * Cdfmpr_CodeFamlPrdtAdr
         */
        codeFamilleProduitAdresse: string;
        /**
         * Mtfmve_MtValrEprgAvntOper
         */
        montantValeurEpargneAvenantOper: number;
    }
    interface ICompteSchema extends IElementSchema {
        /**
         * Nufpcp_NumeCpte
         */
        numeroCompte: string;
        /**
         * Cdfppr_TypeCpte
         */
        typeCompte: string;
        /**
         * Composition
         */
        composition: string;
    }
    interface ICompteProfessionnelSchema extends ICompteSchema {
    }
    interface ICompteDepotSchema extends ICompteSchema {
    }
    interface IRelationEntrePersonnesSchema extends IElementSchema {
        /**
         * Cnfcrp_CodeNatureRelation
         */
        codeNatureRelation: string;
        /**
         * IdntPers2
         */
        idPersonne2: string;
    }
    interface IComplementFicheContactSchema extends IElementSchema {
    }
    interface IPersonneSchema extends IElementSchema {
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
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * Roles
         */
        roles: Array<string>;
        /**
         * Ressources
         */
        ressources: Array<IRessourceSchema>;
        /**
         * Charges
         */
        charges: Array<IChargeSchema>;
        /**
         * FamillesEpargne
         */
        famillesEpargne: Array<IFamilleEpargneSchema>;
        /**
         * Comptes
         */
        comptes: Array<ICompteSchema>;
        /**
         * RelationsEntrePersonnes
         */
        relationsEntrePersonnes: Array<IRelationEntrePersonnesSchema>;
        /**
         * ComplementFicheContact
         */
        complementFicheContact: IComplementFicheContactSchema;
        /**
         * ComptesPrelVersModalite
         */
        comptesPrelVersementModalite: Array<ICompteSchema>;
    }
    interface IPersonneMoraleSchema extends IPersonneSchema {
        /**
         * ListIdntPersPhys
         */
        listeIdPersonnePhys: Array<string>;
    }
    interface IOppositionSchema extends IElementSchema {
        /**
         * Cdfmop_CodeOppo
         */
        codeOpposition: string;
        /**
         * Ddfmop_DateDebtOppo
         * Type date au format yyyy-MM-dd
         */
        dateDebutOpposition: string;
        /**
         * Dffmop_DateFinOppo
         * Type date au format yyyy-MM-dd
         */
        dateFinOpposition: string;
    }
    interface IInterditBancaireSchema extends IElementSchema {
    }
    interface IActiviteSchema extends IElementSchema {
        /**
         * Cdfmcs_CodeClssRisqCsp
         */
        codeClasseRisqueCSP: number;
    }
    interface IPersonnePhysiqueSchema extends IPersonneSchema {
        /**
         * Oppositions
         */
        oppositions: Array<IOppositionSchema>;
        /**
         * InterditBancaire
         */
        interditBancaire: IInterditBancaireSchema;
        /**
         * Activite
         */
        activite: IActiviteSchema;
    }
    interface IBienAVendreSchema extends IElementSchema {
        /**
         * Cdfcni_CodeTypeObjtComl
         */
        codeTypeObjetCommercialisation: string;
        /**
         * Ctfcor_CodeTypeObjtRegl
         */
        codeTypeObjetRegle: string;
        /**
         * Mtfmvc_PrixNetVndr
         */
        prixNetVendeur: number;
    }
    interface IInfoRegroupementSchema extends IElementSchema {
    }
    interface IPretReamenageSchema extends IElementSchema {
        /**
         * Cdfpbq_CodeBanq
         */
        codeBanque: string;
        /**
         * Idfct1_IdntCredGest
         */
        idCreditGestion: string;
        /**
         * Mtfard_MtRestDuSurPretRefn
         */
        montantRestantDuSurPretRefn: number;
        /**
         * InfosRegroupement
         */
        informationRegroupement: IInfoRegroupementSchema;
    }
    interface IReamenagementSchema extends IElementSchema {
        /**
         * Cdfare_TypeReam
         */
        typeReamenagement: number;
        /**
         * Mtfmva_CaptRestDu
         */
        capitalRestantDu: number;
        /**
         * PretsReamenages
         */
        pretsReamenages: Array<IPretReamenageSchema>;
    }
    interface IAplSchema extends IElementSchema {
        /**
         * Mtfiba_MtApl
         */
        montantAPL: number;
        /**
         * TypeApl
         */
        typeAPL: number;
    }
    interface ISynthesePlanFinancementSchema extends IElementSchema {
        /**
         * Mcfoof_CoutTotalTTC
         */
        coutTotalTTC: number;
        /**
         * Mcfgfr_CoutTotalFraisGarantie
         */
        coutTotalFraisGarantie: number;
        /**
         * Mcfafd_CoutTotalFraisDossier
         */
        coutTotalFraisDossier: number;
        /**
         * Mtfaap_MtApportPersonnel
         */
        montantApportPersonnel: number;
        /**
         * nMtfaso_MtConcoursInternes
         */
        mtfaso_MontantConcoursInternes: number;
        /**
         * nMkface_MtConcoursExternes
         */
        mkface_MontantConcoursExternes: number;
        /**
         * Mcfacf_CoutTotalFraisCourtage
         */
        coutTotalFraisCourtage: number;
        /**
         * MtMensualiteAvecAssurance
         */
        montantMensualiteAvecAssurance: number;
        /**
         * MtMensualiteNet
         */
        montantMensualiteNet: number;
    }
    interface ICreditExterneSchema extends IElementSchema {
        /**
         * Lbfaep_LibletblPret
         */
        libletblPret: string;
        /**
         * Mkface_MtCapt
         */
        montantCapital: number;
        /**
         * Txfatg_TegActu
         */
        tegActu: number;
    }
    interface IPalierContraintSchema extends IElementSchema {
        /**
         * Ddpe_DateDebtPerd
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriode: string;
        /**
         * Npfpco_DurePalr
         */
        durePalier: number;
        /**
         * Meface_MtEche
         */
        montantEcheance: number;
    }
    interface IRemiseClientSchema extends IElementSchema {
        /**
         * MtAppl
         */
        montantApplication: number;
        /**
         * TxAppl
         */
        tauxApplication: number;
    }
    interface ITrancheMontantSchema extends IElementSchema {
        /**
         * Txfcaa_TxTrchMt
         */
        tauxTrancheMontant: number;
        /**
         * DebtTrchMt
         */
        debutTrancheMontant: number;
        /**
         * FinTrchMt
         */
        finTrancheMontant: number;
        /**
         * RemiseClient
         */
        remiseClient: IRemiseClientSchema;
    }
    interface ICotisationSchema extends IElementSchema {
        /**
         * Txfca1_TxCots
         */
        tauxCotisation: number;
        /**
         * Mtfcac_MtCots
         */
        montantCotisation: number;
        /**
         * Npfce1_NbPerdAppliCots
         */
        nombrePeriodeApplicationCotisation: number;
        /**
         * Txfipf_PartFinn
         */
        partFinancier: number;
        /**
         * Mtfgfr_MtFrsGarn
         */
        montantFrsGarantie: number;
        /**
         * Ctfcac_TypeAccs
         */
        typeAccessoire: string;
        /**
         * RemiseClient
         */
        remiseClient: IRemiseClientSchema;
        /**
         * TranchesMontant
         */
        tranchesMontant: Array<ITrancheMontantSchema>;
    }
    interface ICotisationPeriodeSchema extends ICotisationSchema {
    }
    interface ICotisationDerogationSchema extends ICotisationSchema {
    }
    interface ICotisationTrancheAgeSchema extends ICotisationSchema {
    }
    interface ICotisationPhaseSchema extends ICotisationSchema {
    }
    interface ICouvertureCreditSchema extends IElementSchema {
        /**
         * Mkfaco_MtCouv
         */
        montantCouverture: number;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * dMontantCoutTotalAssurance
         */
        montantCoutTotalAssurance: number;
        /**
         * dMontantEcheanceMaximale
         */
        montantEcheanceMaximale: number;
        /**
         * dMontantEcheanceMinimale
         */
        montantEcheanceMinimale: number;
        /**
         * dMontantMensualiteEcheance
         */
        montantMensualiteEcheance: number;
        /**
         * IdCredit
         */
        idCredit: string;
        /**
         * Cotisations
         */
        cotisations: Array<ICotisationSchema>;
    }
    interface IAccessoireSchema extends IElementSchema {
        /**
         * CouverturesCredits
         */
        couverturesCredits: Array<ICouvertureCreditSchema>;
        /**
         * Ctfcac_CodeTypeAccs
         */
        codeTypeAccessoire: string;
    }
    interface IAccessoireComplementaireSchema extends IAccessoireSchema {
        /**
         * Ctfcat_CodeSousTypeAccs
         */
        codeSousTypeAccessoire: string;
    }
    interface IAccessoireLieProduitSchema extends IAccessoireSchema {
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
    }
    interface IAvisOrganismeExterneSchema extends IElementSchema {
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
    interface IAssuranceSchema extends IAccessoireSchema {
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * IdntConv
         */
        idConvention: string;
        /**
         * EstAssuranceAXA
         */
        estAssuranceAXA: boolean;
        /**
         * EstAssuranceCNP
         */
        estAssuranceCNP: boolean;
        /**
         * EstAssuranceGroupePourTAEA
         */
        estAssuranceGroupePourTAEA: boolean;
        /**
         * AvisOrganismeExterne
         */
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
        /**
         * DerniersAvisOrganismeExterne
         */
        derniersAvisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
    }
    interface IGarantieSchema extends IAccessoireSchema {
        /**
         * IdPersonne
         */
        idPersonne: string;
    }
    interface IBienPorteEnGarantieSchema extends IElementSchema {
    }
    interface IHypothequeAerienneSchema extends IBienPorteEnGarantieSchema {
    }
    interface IBonDeCaisseCapitalisationSchema extends IBienPorteEnGarantieSchema {
    }
    interface IDelegationLoyerSchema extends IBienPorteEnGarantieSchema {
    }
    interface ICessionDaillyAutreSchema extends IBienPorteEnGarantieSchema {
    }
    interface IVersementAttenduSchema extends IElementSchema {
        /**
         * Mtfvat_MtVerst
         */
        montantVersement: number;
    }
    interface IContratAssuranceSchema extends IBienPorteEnGarantieSchema {
        /**
         * VersementsAttendus
         */
        versementsAttendus: Array<IVersementAttenduSchema>;
    }
    interface IAntichreseSchema extends IBienPorteEnGarantieSchema {
    }
    interface ICessionDaillyLoyerImmeubleSchema extends IBienPorteEnGarantieSchema {
    }
    interface IGageVehiculeSchema extends IBienPorteEnGarantieSchema {
    }
    interface IGageCompteInstrumentFinancierSchema extends IBienPorteEnGarantieSchema {
    }
    interface INantissementPartSocialeSchema extends IBienPorteEnGarantieSchema {
    }
    interface INantissementValeurMaterielleSchema extends IBienPorteEnGarantieSchema {
    }
    interface INantissementValeurMobiliereSchema extends IBienPorteEnGarantieSchema {
    }
    interface INantissementFondDeCommerceSchema extends IBienPorteEnGarantieSchema {
    }
    interface IProprietaireSchema extends IElementSchema {
    }
    interface IHypothequeImmobiliereSchema extends IBienPorteEnGarantieSchema {
        /**
         * Proprietaires
         */
        proprietaires: Array<IProprietaireSchema>;
    }
    interface IBienDiversSchema extends IBienPorteEnGarantieSchema {
    }
    interface ICreditHDSchema extends IElementSchema {
        /**
         * Idfcct_RefrPret
         */
        referencePret: string;
        /**
         * Mtfaoc_MtPret
         */
        montantPret: number;
        /**
         * IdntCredExnt
         */
        idCreditExnt: string;
    }
    interface IGarantieHDSchema extends IElementSchema {
        /**
         * Cdfcng_NatrGarnHorsDoss
         */
        natureGarantieHorsDossier: string;
        /**
         * Idfgg1_IdntOrigGarnHorsDoss
         */
        idOrigineGarantieHorsDossier: string;
        /**
         * CreditsHD
         */
        creditsHD: Array<ICreditHDSchema>;
    }
    interface IGarantieReelleSchema extends IGarantieSchema {
        /**
         * BienPorteEnGarantie
         */
        bienPorteEnGarantie: IBienPorteEnGarantieSchema;
        /**
         * GarantieHD
         */
        garantieHD: IGarantieHDSchema;
        /**
         * FinancableEstVisible
         */
        financableEstVisible: boolean;
        /**
         * FinancableEstActif
         */
        financableEstActif: boolean;
        /**
         * FinancableEstCoche
         */
        financableEstCoche: boolean;
    }
    interface IGarantiePersonnelleSchema extends IGarantieSchema {
        /**
         * AvisOrganismeExterne
         */
        avisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
        /**
         * DerniersAvisOrganismeExterne
         */
        derniersAvisOrganismeExterne: Array<IAvisOrganismeExterneSchema>;
        /**
         * FinancableEstVisible
         */
        financableEstVisible: boolean;
        /**
         * FinancableEstActif
         */
        financableEstActif: boolean;
        /**
         * FinancableEstCoche
         */
        financableEstCoche: boolean;
        /**
         * IdntConv
         */
        idConvention: string;
    }
    interface IServiceSurObjetSchema extends IAccessoireSchema {
        /**
         * IdntConv
         */
        idConvention: string;
    }
    interface IEcheanceOptimisationSchema extends IElementSchema {
        /**
         * Mefhcd_MtRembSais
         */
        montantRemboursementSaisie: number;
        /**
         * Ctfhel_CodeTypeElemSais
         */
        codeTypeElementSaisie: number;
    }
    interface ICreditPalierTauxSchema extends IElementSchema {
        /**
         * TxIntePalr
         */
        tauxInterieurPalier: ITauxInteretAnnuelLecture;
        /**
         * Txfcpg_TxPrgrEcheSurPalr
         */
        tauxProgressifEcheanceSurPalier: number;
        /**
         * DureeEnMois
         */
        dureeEnMois: number;
        /**
         * EcheancesOptimisation
         */
        echeancesOptimisation: Array<IEcheanceOptimisationSchema>;
    }
    interface ICreditParamIndexationSchema extends IElementSchema {
        /**
         * Nofrji_NumeIndcRevsCred
         */
        numeroIndiceRevisionCredit: number;
    }
    interface ICreditParamRevisionSchema extends IElementSchema {
        /**
         * Idfrlr_IdntLoiRevs
         */
        idLoiRevision: string;
        /**
         * Nofrji_NumeJeuIndcRevsAsscCred
         */
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        /**
         * CreditParamsIndexation
         */
        creditParamsIndexation: Array<ICreditParamIndexationSchema>;
    }
    interface ICreditParamRevisionParPhaseSchema extends ICreditParamRevisionSchema {
    }
    interface ICreditPhaseSchema extends IElementSchema {
        /**
         * DureeEnMois
         */
        dureeEnMois: number;
        /**
         * CreditPaliersTaux
         */
        creditPaliersTaux: Array<ICreditPalierTauxSchema>;
        /**
         * CreditParamsRevisionParPhase
         */
        creditParamsRevisionParPhase: ICreditParamRevisionParPhaseSchema;
    }
    interface ICreditPalierProgressionSchema extends IElementSchema {
    }
    interface IComplementPhasePretCombineSchema extends IElementSchema {
    }
    interface ICreditPhaseAmortissementSchema extends ICreditPhaseSchema {
        /**
         * CreditPaliersProgression
         */
        creditPaliersProgression: Array<ICreditPalierProgressionSchema>;
        /**
         * ComplementPhasePretCombine
         */
        complementPhasePretCombine: IComplementPhasePretCombineSchema;
    }
    interface ICreditPhaseDiffereAmortissementSchema extends ICreditPhaseSchema {
    }
    interface ICreditPhaseDiffereTotalSchema extends ICreditPhaseSchema {
    }
    interface ICreditPhasePrefinancementSchema extends ICreditPhaseSchema {
    }
    interface ICreditPhaseMobilisationSchema extends ICreditPhaseSchema {
    }
    interface ISuiviPlanifieSchema extends IElementSchema {
    }
    interface IPayeurSchema extends IElementSchema {
        /**
         * Txfdec_PctPaieCred
         */
        pourcentagePaiementCredit: number;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
    }
    interface ICreditParamRevisionParPeriodeSchema extends ICreditParamRevisionSchema {
    }
    interface ICreditModaliteSchema extends IElementSchema {
        /**
         * Idfcmi_IdntModlCalcImpe
         */
        idModeleCalculImpe: string;
        /**
         * Nofcmc_NumeModlRembAntc
         */
        numeroModeleRemboursementAnticipe: number;
    }
    interface ICreditBonificationInfoSchema extends IElementSchema {
        /**
         * Cdfdic_CodeInfo
         */
        codeInformation: string;
        /**
         * sCdfddi_CodeDetail
         */
        codeDetail: string;
    }
    interface ICreditBonificationSchema extends IElementSchema {
        /**
         * IdentifiantConvention
         */
        idConvention: string;
        /**
         * Infos
         */
        information: Array<ICreditBonificationInfoSchema>;
    }
    interface IDroitUtiliseSchema extends IElementSchema {
        /**
         * Mtfadu_MtDrtAcqsUtls
         */
        montantDroitAcqsUtilisation: number;
        /**
         * IdntTrancheEL
         */
        idTrancheEL: string;
    }
    interface ICompteCourantSchema extends IElementSchema {
        /**
         * Mtfasc_MtHyptCapt
         */
        montantHypothequeCapital: number;
        /**
         * Cifcmh_CodeIndicBlcgSaisMtHyptCapt
         */
        codeIndiceBlcgSaisieMontantHypothequeCapital: number;
    }
    interface IVariationDureeSchema extends IElementSchema {
        /**
         * Npfarv_NbPerdVartPoss
         */
        nombrePeriodeVartPossibilite: number;
        /**
         * TypeButrVartDure
         */
        typeButoireVartDure: number;
    }
    interface IVersementFractionneSchema extends IElementSchema {
        /**
         * Nbfbvs_NbVerstSouh
         */
        nombreVersementSouh: number;
        /**
         * Mvfbmf_MtVerstFrct
         */
        montantVersementFraction: number;
    }
    interface IMarcheEPSSchema extends IElementSchema {
        /**
         * Idfadi_IdDosInst
         */
        idDosInstruction: string;
        /**
         * Nofapd_NumRelPlanDoss
         */
        numeroRelPlanDossier: number;
        /**
         * Nofacp_NumRelCreditPlan
         */
        numeroRelCreditPlan: number;
        /**
         * Ctfcme_CodeTypeMarche
         */
        codeTypeMarche: string;
    }
    interface IComplementEPSSchema extends IElementSchema {
        /**
         * Cnfcnb_NatrGarnEps
         */
        natureGarantieEPS: string;
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Idfapa_RefrExtnDossParn
         */
        referenceExterneDossierParent: string;
        /**
         * Idfcma_IdModeleActeEPS
         */
        idModeleActeEPS: string;
        /**
         * MarchesEPS
         */
        marchesEPS: Array<IMarcheEPSSchema>;
    }
    interface ITACreditEPSSchema extends IElementSchema {
        /**
         * Dtfhpr_DateEchnMER
         * Type date au format yyyy-MM-dd
         */
        dateEcheanceMER: string;
        /**
         * Mkfh03_MtCaptAmrt
         */
        montantCapitalAmortissement: number;
        /**
         * Mkfd01_MtCaptRestDu
         */
        montantCapitalRestantDu: number;
    }
    interface ICreditEPSSchema extends IElementSchema {
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Txfccc_QuotCredCouvParEps
         */
        quotientCreditCouvertureParEPS: number;
        /**
         * Idfaez_RefeExtnCredCouvEps
         */
        referenceExterneCreditCouvertureEPS: string;
        /**
         * TaCredCouvParEps
         */
        taCreditCouvertureParEPS: Array<ITACreditEPSSchema>;
    }
    interface IAjustementTauxSchema extends IElementSchema {
    }
    interface ICreditInterneSchema extends IElementSchema {
        /**
         * Idfcvp_IdntPrdtFinn
         */
        idProduitFinancier: string;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
        /**
         * TegProp
         */
        tegProp: number;
        /**
         * Phases
         */
        phases: Array<ICreditPhaseSchema>;
        /**
         * RemiseClient
         */
        remiseClient: IRemiseClientSchema;
        /**
         * SuivisPlanifies
         */
        suivisPlanifies: Array<ISuiviPlanifieSchema>;
        /**
         * Payeurs
         */
        payeurs: Array<IPayeurSchema>;
        /**
         * CreditParamsRevision
         */
        creditParamsRevision: Array<ICreditParamRevisionSchema>;
        /**
         * CreditModalite
         */
        creditModalite: ICreditModaliteSchema;
        /**
         * CreditBonification
         */
        creditBonification: ICreditBonificationSchema;
        /**
         * DroitsUtilises
         */
        droitsUtilises: Array<IDroitUtiliseSchema>;
        /**
         * CompteCourant
         */
        compteCourant: ICompteCourantSchema;
        /**
         * VariationsDuree
         */
        variationsDuree: Array<IVariationDureeSchema>;
        /**
         * VersementFractionne
         */
        versementFractionne: IVersementFractionneSchema;
        /**
         * ComplementEPS
         */
        complementEPS: IComplementEPSSchema;
        /**
         * CreditsEPS
         */
        creditsEPS: Array<ICreditEPSSchema>;
        /**
         * AjustementTaux
         */
        ajustementTaux: IAjustementTauxSchema;
    }
    interface IRefusAssuranceExterneSchema extends IElementSchema {
        /**
         * Idfadi_IdDossierInstruction
         */
        idDossierInstruction: string;
        /**
         * Nofapd_NumeroRelatifPlanDossier
         */
        numeroRelatifPlanDossier: number;
        /**
         * Idfppe_Identifiantpersonne
         */
        identifiantpersonne: string;
        /**
         * Nofrfp_NumRangRefusProposition
         */
        numeroRangRefusProposition: number;
        /**
         * Lbfcia_CompagnieAssurance
         */
        compagnieAssurance: string;
        /**
         * Lbfrcc_ReferenceContrat
         */
        referenceContrat: string;
        /**
         * Ddfddr_DateReceptionDemande
         * Type date au format yyyy-MM-dd
         */
        dateReceptionDemande: string;
        /**
         * Ddfpic_DateImpressionDemande
         * Type date au format yyyy-MM-dd
         */
        dateImpressionDemande: string;
        /**
         * Cdfdda_CodeDecision
         */
        codeDecision: number;
        /**
         * Llfprp_RolePersonne
         */
        rolePersonne: string;
    }
    interface IOrigineApportSchema extends IElementSchema {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Nofapd_NumeroPlanDossier
         */
        numeroPlanDossier: number;
        /**
         * Cdfoap_CodeOrigine
         */
        codeOrigine: number;
        /**
         * Mtfoap_MontantApportOrigine
         */
        montantApportOrigine: number;
    }
    interface IPlanFinancementSchema extends IElementSchema {
        /**
         * Mtfaso_MtTotlEmprPlan
         */
        montantTotalEmpruntPlan: number;
        /**
         * Mtfaap_MtApprPers
         */
        montantApportPersonne: number;
        /**
         * Mteh01_MtPreEchPhse
         */
        montantPreEchPhase: number;
        /**
         * Apl
         */
        aPL: IAplSchema;
        /**
         * SynthesePlanFinancement
         */
        synthesePlanFinancement: ISynthesePlanFinancementSchema;
        /**
         * CreditsExternes
         */
        creditsExternes: Array<ICreditExterneSchema>;
        /**
         * PaliersContraints
         */
        paliersContraints: Array<IPalierContraintSchema>;
        /**
         * AccessoiresComplementaires
         */
        accessoiresComplementaires: Array<IAccessoireComplementaireSchema>;
        /**
         * AccessoiresLiesProduit
         */
        accessoiresLiesProduit: Array<IAccessoireLieProduitSchema>;
        /**
         * Assurances
         */
        assurances: Array<IAssuranceSchema>;
        /**
         * Garanties
         */
        garanties: Array<IGarantieSchema>;
        /**
         * ServicesSurObjet
         */
        servicesSurObjet: Array<IServiceSurObjetSchema>;
        /**
         * CreditsInternes
         */
        creditsInternes: Array<ICreditInterneSchema>;
        /**
         * RefusAssuranceExternes
         */
        refusAssuranceExternes: Array<IRefusAssuranceExterneSchema>;
        /**
         * OriginesApport
         */
        originesApport: Array<IOrigineApportSchema>;
    }
    interface IProjetSchema extends IElementSchema {
        /**
         * Cdfcni_TypeObjtFinn
         */
        typeObjetFinancier: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Cdfcno_CodeNatrFinn
         */
        codeNatureFinancier: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * BienAVendre
         */
        bienAVendre: IBienAVendreSchema;
        /**
         * Reamenagement
         */
        reamenagement: IReamenagementSchema;
        /**
         * PlansFinancement
         */
        plansFinancement: Array<IPlanFinancementSchema>;
        /**
         * IdntPlanRetn
         */
        idPlanRetn: string;
    }
    interface IBienConsoFinanceSchema extends IElementSchema {
    }
    interface IAutoMotoSchema extends IBienConsoFinanceSchema {
    }
    interface IBienDetailleSchema extends IElementSchema {
    }
    interface IBienEquipementProSchema extends IBienDetailleSchema {
    }
    interface ITresorerieFinanceeSchema extends IBienDetailleSchema {
    }
    interface IProjetNonImmobilierSchema extends IProjetSchema {
        /**
         * BienConsoFinance
         */
        bienConsommationFinance: IBienConsoFinanceSchema;
        /**
         * BienEquipementPro
         */
        bienEquipementPro: IBienEquipementProSchema;
        /**
         * TresorerieFinancee
         */
        tresorerieFinancee: ITresorerieFinanceeSchema;
    }
    interface IPromotionImmobiliereSchema extends IElementSchema {
        /**
         * InttPrgm
         */
        intituleProgramme: string;
        /**
         * SittPrgm
         */
        situationProgramme: number;
    }
    interface ITerrainFinanceSchema extends IElementSchema {
        /**
         * Mtfote_CoutTerr
         */
        coutTerr: number;
    }
    interface IBienSousJacentSchema extends IElementSchema {
    }
    interface ITerrainSousJacentSchema extends IBienSousJacentSchema {
    }
    interface ISoulteFinanceeSchema extends IElementSchema {
        /**
         * Mtfoac_MtSoul
         */
        montantSoul: number;
        /**
         * BienSousJacent
         */
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IDetailCoutObjetSchema extends IElementSchema {
        /**
         * Ctfccc_CodeTyplCoutTrvx
         */
        codeTypologieCoutTravaux: string;
        /**
         * Mtfoct_CoutTrvx
         */
        coutTravaux: number;
    }
    interface ITravauxFinancesSchema extends IElementSchema {
        /**
         * Mtfotr_CoutTrvx
         */
        coutTravaux: number;
        /**
         * BienSousJacent
         */
        bienSousJacent: IBienSousJacentSchema;
        /**
         * DetailsCoutObjet
         */
        detailsCoutObjet: Array<IDetailCoutObjetSchema>;
    }
    interface IConstructionFinanceeSchema extends IElementSchema {
        /**
         * Mtfoco_CoutConstFinn
         */
        coutConstructionFinancier: number;
        /**
         * BienSousJacent
         */
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IBatimentHabitableFinanceSchema extends IElementSchema {
        /**
         * Mtfoac_CoutAcqsBatmHabt
         */
        coutAcqsBatimentHabitation: number;
        /**
         * BienSousJacent
         */
        bienSousJacent: IBienSousJacentSchema;
    }
    interface IButLocatifSchema extends IElementSchema {
        /**
         * Mtfolp_MtAnnuLoyePerc
         */
        montantAnnuLoyePerc: number;
    }
    interface ITrancheELSchema extends IElementSchema {
        /**
         * Mtfaac_MtDrtAcqs
         */
        montantDroitAcqs: number;
    }
    interface IContratEpargneLogementSchema extends IElementSchema {
        /**
         * Cdfppr_CodeTypeEL
         */
        codeTypeEL: number;
        /**
         * Nufpct_IdntContEl
         */
        idContratEpargneLogement: string;
        /**
         * TranchesEL
         */
        tranchesEL: Array<ITrancheELSchema>;
        /**
         * IdwsPersBenef
         */
        idPersonneBeneficiaire: string;
    }
    interface IProjetImmobilierSchema extends IProjetSchema {
        /**
         * PromotionImmobiliere
         */
        promotionImmobiliere: IPromotionImmobiliereSchema;
        /**
         * TerrainFinance
         */
        terrainFinance: ITerrainFinanceSchema;
        /**
         * SoulteFinance
         */
        soulteFinance: ISoulteFinanceeSchema;
        /**
         * TravauxFinance
         */
        travauxFinance: ITravauxFinancesSchema;
        /**
         * ConstructionFinance
         */
        constructionFinance: IConstructionFinanceeSchema;
        /**
         * BatimentHabitableFinance
         */
        batimentHabitableFinance: IBatimentHabitableFinanceSchema;
        /**
         * ButLocatif
         */
        butLocatif: IButLocatifSchema;
        /**
         * ContratsEL
         */
        contratsEL: Array<IContratEpargneLogementSchema>;
    }
    interface IProjetEPSSchema extends IProjetSchema {
    }
    interface IComplementDossierSchema extends IElementSchema {
        /**
         * Llfidr_LiblDelRelsProj
         */
        libelleDelReleaseProjet: string;
        /**
         * Ctfipt_CodePrrtTrt
         */
        codePrrtTraitement: string;
        /**
         * Dtfisi_DateSaisSurItnt
         * Type date au format yyyy-MM-dd
         */
        dateSaisieSurInternet: string;
        /**
         * Hefisi_HeurSaisSurItnt
         */
        heureSaisieSurInternet: number;
    }
    interface IPoolEPSSchema extends IElementSchema {
        /**
         * Idfadi_IdntDossInstr
         */
        idDossierInstruction: string;
        /**
         * Idfaop_IdntOprtCess
         */
        idOprtCess: string;
        /**
         * Idfccf_IdntCadrFinn
         */
        idCadreFinancier: string;
        /**
         * Cnflpo_CodeNatrPool
         */
        codeNaturePool: number;
        /**
         * Cdfcor_CodeOrigCess
         */
        codeOrigineCess: number;
        /**
         * Ctfesr_TypeSousRolePool
         */
        typeSousRolePool: number;
        /**
         * Nofcca_NumVersionCadre
         */
        numeroVersionCadre: number;
    }
    interface IAgentSchema extends IElementSchema {
        /**
         * Idfaen_IdntAgent
         */
        idAgent: string;
        /**
         * Lbfaes_LblAgent
         */
        lblAgent: string;
        /**
         * EstAgentBO
         */
        estAgentBO: boolean;
        /**
         * EstBackup
         */
        estBackup: boolean;
        /**
         * EstAgentExterne
         */
        estAgentExterne: boolean;
        /**
         * Idfaeg_IdntEdsGest
         */
        idEDSGestion: string;
        /**
         * Lbfiba_LblAgenceRat
         */
        lblAgenceRat: string;
        /**
         * Cdfaaa_CdeAgentRat
         */
        cdeAgentRat: string;
        /**
         * Ctfauc_TypeUtilisateurCo
         */
        typeUtilisateurCo: number;
        /**
         * Idfce3_EtabBaofCent
         */
        etabBaofCentral: number;
        /**
         * Cdfabo_IdntEdsBaofCent
         */
        idEDSBaofCentral: string;
        /**
         * Cifttv_TechniqueDeVente
         */
        techniqueDeVente: number;
        /**
         * DerogationBornes
         */
        derogationBornes: boolean;
        /**
         * Role
         */
        role: number;
        /**
         * EstAgentRefusAssuranceExterne
         */
        estAgentRefusAssuranceExterne: boolean;
    }
    interface IDocumentOffreIndustrialiseeSchema extends IElementSchema {
        /**
         * DocumentCommun
         */
        documentCommun: string;
        /**
         * CodeEntiteFonctionnelle
         */
        codeEntiteFonctionnelle: string;
        /**
         * IdEntiteFonctionnelle
         */
        idEntiteFonctionnelle: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * LibelleDocument
         */
        libelleDocument: string;
        /**
         * IndicateurCasEcheant
         */
        indicateurCasEcheant: string;
        /**
         * EtatDocument
         */
        etatDocument: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Origine
         */
        origine: string;
    }
    interface IOffrePretIndustrialiseeSchema extends IElementSchema {
        /**
         * EditionEligible
         */
        editionEligible: boolean;
        /**
         * EditionEligibleEnAgence
         */
        editionEligibleEnAgence: boolean;
        /**
         * LibelleDossier
         */
        libelleDossier: string;
        /**
         * DossierGdeACree
         */
        dossierGdeACree: boolean;
        /**
         * EtatDossierEdition
         */
        etatDossierEdition: string;
        /**
         * ListeDocumentsSchema
         */
        listeDocumentsSchema: Array<IDocumentOffreIndustrialiseeSchema>;
    }
    interface IDossierSchema extends IElementSchema {
        /**
         * Ctfado_EtatDoss
         */
        etatDossier: number;
        /**
         * TypeMoteurADR
         */
        typeMoteurADR: number;
        /**
         * Cefado_SousEtatDoss
         */
        sousEtatDossier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * EstEcoPtzCopro
         */
        estEcoPtzCopro: boolean;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * BlocNotesDivers
         */
        blocNotesDivers: Array<IBlocNotesSchema>;
        /**
         * ClausesPersonnalisees
         */
        clausesPersonnalisees: Array<IClausePersonnaliseeSchema>;
        /**
         * AlertesEnSortie
         */
        alertesEnSortie: Array<IAlerteEnSortieSchema>;
        /**
         * AlertesEnEntree
         */
        alertesEnEntree: Array<IAlerteEnEntreeSchema>;
        /**
         * Avis
         */
        avis: Array<IAvisSchema>;
        /**
         * Evenements
         */
        evenements: Array<IEvenementSchema>;
        /**
         * Versements
         */
        versements: Array<IVersementSchema>;
        /**
         * RedacteurActe
         */
        redacteurActe: IRedacteurActeSchema;
        /**
         * Emprunteur
         */
        emprunteur: IEmprunteurSchema;
        /**
         * Garants
         */
        garants: Array<IGarantSchema>;
        /**
         * Personnes
         */
        personnes: Array<IPersonneSchema>;
        /**
         * Projet
         */
        projet: IProjetSchema;
        /**
         * ComplementDossier
         */
        complementDossier: IComplementDossierSchema;
        /**
         * PoolEPS
         */
        poolEPS: IPoolEPSSchema;
        /**
         * Agents
         */
        agents: Array<IAgentSchema>;
        /**
         * AnoCtlOuvrtDossier
         */
        anoCtlOuvrtDossier: Array<IAnomalieLecture>;
        /**
         * OffrePretIndustrialisee
         */
        offrePretIndustrialisee: IOffrePretIndustrialiseeSchema;
    }
    interface ILienEPSTirageLecture extends IElementLecture {
        /**
         * Idfadi_IdntDossInstr
         */
        sIdntDoss: string;
        /**
         * Idfaps_IdentifiantEPS
         */
        identifiantEPS: string;
        /**
         * Idfcej_Etablissement
         */
        etablissement: number;
    }
    interface ILienEPSTirageSchema extends IElementSchema {
        /**
         * Idfadi_IdntDossInstr
         */
        sIdntDoss: string;
        /**
         * Idfaps_IdentifiantEPS
         */
        identifiantEPS: string;
        /**
         * Idfcej_Etablissement
         */
        etablissement: number;
    }
    interface ILienEPSTirageMaj extends IElementMaj {
        /**
         * Idfadi_IdntDossInstr
         */
        sIdntDoss: string;
        /**
         * Idfaps_IdentifiantEPS
         */
        identifiantEPS: string;
        /**
         * Idfcej_Etablissement
         */
        etablissement: number;
    }
    interface IEntrepreneurIndividuelMaj extends IElementMaj {
        /**
         * AccordConjoint
         */
        accordConjoint: boolean;
        /**
         * NomConjoint
         */
        nomConjoint: string;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
    }
    interface ISignataireMaj extends IElementMaj {
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: boolean;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
    }
    interface IEntrepreneurIndividuelSchema extends IElementSchema {
        /**
         * EstEIRL
         */
        estEIRL: boolean;
        /**
         * IndicateurEIRL
         */
        indicateurEIRL: number;
        /**
         * LibelleEIRL
         */
        libelleEIRL: string;
        /**
         * AccordConjoint
         */
        accordConjoint: boolean;
    }
    interface ISignataireSchema extends IElementSchema {
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: boolean;
    }
    interface IPretReamenageableMaj extends IElementMaj {
        /**
         * InfoPretMaj
         */
        informationPretMAJ: IPretReamenageMaj;
        /**
         * InfoRegroupementMaj
         */
        informationRegroupementMAJ: IInfoRegroupementMaj;
    }
    interface IPersonneAutreMaj extends IPersonneMaj {
        /**
         * Prenoms
         */
        prenoms: string;
    }
    interface IOffreSignatureElectroniqueMaj extends IElementMaj {
    }
    interface IOffrePretIndustrialiseeMaj extends IElementMaj {
    }
    interface IMotifEvenementConformiteMaj extends IElementMaj {
    }
    interface IEvenementConformiteMaj extends IElementMaj {
    }
    interface IDossierMRHMaj extends IElementMaj {
        /**
         * AppelEffectue
         */
        appelEffectue: boolean;
    }
    interface IAlerteEnSortieMaj extends IElementMaj {
        /**
         * Idfcej_IdCaisse
         */
        idCaisse: string;
        /**
         * Idfadi_IdntDoss
         */
        idDossier: string;
        /**
         * Dcfiax_DateAlerte
         * Type date au format yyyy-MM-dd
         */
        dateAlerte: string;
        /**
         * Drfiax_dateReponseAlerte
         * Type date au format yyyy-MM-dd
         */
        drfiax_DateReponseAlerte: string;
        /**
         * Ctfiax_TypeAlerte
         */
        typeAlerte: string;
        /**
         * Cefiax_EtatAlerte
         */
        etatAlerte: number;
        /**
         * Nofiax_NumRelatifAlerte
         */
        numeroRelatifAlerte: number;
    }
    interface IAjustementTauxMaj extends IElementMaj {
    }
    interface IInformationSignataireOffre {
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationSignataireDemandeDeCreditAgence {
        /**
         * DateMiseADispoDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateMiseADispoDemandeDeCredit: string;
        /**
         * DateSignatureDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDemandeDeCredit: string;
    }
    interface IInformationSignataireGenerique {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * InformationsSignataireOffre
         */
        informationsSignataireOffre: IInformationSignataireOffre;
        /**
         * InformationSignataireDemandeDeCreditAgence
         */
        informationSignataireDemandeDeCreditAgence: IInformationSignataireDemandeDeCreditAgence;
    }
    interface IInformationDossierSignatureOffre {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierDemandeDeCreditAgence {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierSignatureGenerique {
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataireGenerique>;
        /**
         * InformationsSignatureOffre
         */
        informationsSignatureOffre: IInformationDossierSignatureOffre;
        /**
         * InformationsDemandeDeCreditAgence
         */
        informationsDemandeDeCreditAgence: IInformationDossierDemandeDeCreditAgence;
    }
    interface ISignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureGenerique;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface ISignataireLecture extends IElementLecture {
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EmailsContactsChoisissables
         */
        emailsContactsChoisissables: Array<string>;
        /**
         * NumerosContactsChoisissables
         */
        numerosContactsChoisissables: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: boolean;
        /**
         * EstAutoriseASigner
         */
        estAutoriseASigner: boolean;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * TypeSignataire
         */
        typeSignataire: number;
    }
    interface IFCX50ACA {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SaisieComplementaireNecessaire
         */
        saisieComplementaireNecessaire: boolean;
        /**
         * NomPersonneMorale
         */
        nomPersonneMorale: IChampTextBox;
        /**
         * NombreCreditsAModifierACA
         */
        nombreCreditsAModifierACA: number;
        /**
         * ListeDonneesCreditAModifierACA
         */
        listeDonneesCreditAModifierACA: Array<IDonneesCreditLecture>;
    }
    interface IFC055FSI {
        /**
         * Titre
         */
        titre: ILabel;
        /**
         * SaisieComplementaireNecessaire
         */
        saisieComplementaireNecessaire: boolean;
        /**
         * Messages
         */
        messages: IChampLabelMultiLine;
        /**
         * NumeroOrias
         */
        numeroOrias: IChampCache;
        /**
         * NombreCreditsAModifier
         */
        nombreCreditsAModifier: IChampCache;
        /**
         * ListeDonneesCreditAModifier
         */
        listeDonneesCreditAModifier: Array<IDonneesCreditLecture>;
    }
    interface IPersonneAutreLecture extends IPersonneLecture {
        /**
         * Prenoms
         */
        prenoms: string;
    }
    interface IEntrepreneurIndividuelLecture extends IElementLecture {
    }
    interface IDocumentAssuranceLecture extends IElementLecture {
        /**
         * IdDocument
         */
        idDocument: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * IdContrat
         */
        idContrat: string;
        /**
         * TabDonneesDocument
         */
        tabDonneesDocument: string;
    }
    interface ICalculELLecture extends IElementLecture {
        /**
         * Tranche
         */
        tranche: ITrancheELLecture;
        /**
         * DroitUtilise
         */
        droitUtilise: IDroitUtiliseLecture;
        /**
         * Idfadi_IdDossier
         */
        idDossier: string;
        /**
         * Nufpct_IdContrat
         */
        idContrat: string;
        /**
         * Nofpdp_NumRelatifDossier
         */
        numeroRelatifDossier: number;
        /**
         * Ddfpct_DateOuvertureContrat
         */
        dateOuvertureContrat: string;
        /**
         * Txfpep_TauxEpargne
         */
        tauxEpargne: number;
        /**
         * Mtfaac_MontantDroitsAcquis
         */
        montantDroitsAcquis: number;
        /**
         * Dtfpae_DateArrete
         */
        dateArrete: string;
        /**
         * Ctfpli_LienParenteAvecCedant
         */
        lienParenteAvecCedant: string;
        /**
         * Cdfadv
         */
        cdfadv: string;
        /**
         * Mtfadu_MtDroitsAcquisUtilises
         */
        montantDroitsAcquisUtilises: number;
        /**
         * Txftpr_TauxPretCatalogue
         */
        tauxPretCatalogue: number;
        /**
         * Mkfmax_CapMaxOct
         */
        capMaximumOct: number;
        /**
         * Mtfaoc_MtPretOctroye
         */
        montantPretOctroye: number;
        /**
         * Mtfmax_EchMaxOct
         */
        echMaximumOct: number;
        /**
         * Mtfape_MtEchUtilise
         */
        montantEchUtilise: number;
        /**
         * Mtfali_MtLimite
         */
        montantLimite: number;
        /**
         * bDroitUtilisable
         */
        droitUtilisable: boolean;
    }
    interface ITravauxFinancesLecture extends IElementLecture {
        /**
         * Mtfotr_CoutTrvx
         */
        coutTravaux: number;
        /**
         * Dffotr_DateFinTrvx
         * Type date au format yyyy-MM-dd
         */
        dateFinTravaux: string;
        /**
         * Nbfose_SurfHabtCree
         */
        surfHabitationCree: number;
        /**
         * Cdfoig_TypeTrvxCadrEcpt
         */
        typeTravauxCadreEcpt: number;
        /**
         * SurfHabtTotlApreTrvx
         */
        surfHabitationTotalApreTravaux: number;
        /**
         * Dtfoco_DateConstBatmSjac
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentSousJacent: string;
        /**
         * Nbfosh_SurfHabtBatmSjac
         */
        surfHabitationBatimentSousJacent: number;
        /**
         * Dtfoac_DateAcqsBatmSjac
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBatimentSousJacent: string;
        /**
         * Ctfmoi_TypeLogmBatmSous
         */
        typeLogementBatimentSous: number;
        /**
         * LibelleTypeLogmBatmSous
         */
        libelleTypeLogementBatimentSous: string;
        /**
         * Nbfolo_NbreLogmBatmSous
         */
        nbreLogementBatimentSous: number;
        /**
         * Caftte_TypeEcoPtz
         */
        typeEcoPtz: number;
        /**
         * Mtfap6_MontantEcoPtzInitial
         */
        montantEcoPtzInitial: number;
        /**
         * Dtftde_DateCreationEcoPtzInitial
         * Type date au format yyyy-MM-dd
         */
        dateCreationEcoPtzInitial: string;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * IdntBienSjac
         */
        idBienSousJacent: string;
        /**
         * ListIdntDetlCoutTrvxEcpt
         */
        listeIdDetlCoutTravauxEcpt: Array<string>;
        /**
         * LibelleTypeTrvxCadrEcpt
         */
        libelleTypeTrvxCadrEcpt: string;
    }
    interface IProjetImmobilierLecture extends IProjetLecture {
        /**
         * Cifopa_DefnSiEmprEstPrm
         */
        defnSiEmpruntEstPrm: boolean;
        /**
         * Cofopz_CodeCondDergPourPtz
         */
        codeConditionDerogationPourPtz: number;
        /**
         * ValdelgbaPrmAccsPourCateReglAttr
         */
        valdelgbaPrmAccessoirePourCateRegleAttribut: boolean;
        /**
         * ElgbPtz
         */
        eligibilitePtz: boolean;
        /**
         * ElgbPc
         */
        eligibilitePC: boolean;
        /**
         * ElgbPas
         */
        eligibilitePas: boolean;
        /**
         * ElgbaEl
         */
        elgbaEpargneLogement: boolean;
        /**
         * ElgbaEcpt
         */
        elgbaEcpt: boolean;
        /**
         * Cdfose_CodeBatmBassConso
         */
        codeBatimentBassConsommation: number;
        /**
         * Cdfomo_CodeModlOccpLogm
         */
        codeModeleOccpLogement: number;
        /**
         * Ctfopm_CodePrixMarc
         */
        codePrixMarche: number;
        /**
         * LibelleCodePrixMarc
         */
        libelleCodePrixMarche: string;
        /**
         * Ctfmmc_CodeTypeMarc
         */
        codeTypeMarche: number;
        /**
         * LibelleCodeTypeMarc
         */
        libelleCodeTypeMarche: string;
        /**
         * Ctfmpo_TypePrpr
         */
        typeProprietaire: number;
        /**
         * LibelleTypePrpr
         */
        libelleTypeProprietaire: string;
        /**
         * Txfmpa_PctPrprApreOper
         */
        pourcentageProprietaireApreOper: number;
        /**
         * Mgfovh_MtInscHypt
         */
        montantInscHypotheque: number;
        /**
         * Cdfqem_QualEmplaProj
         */
        qualEmplaProjet: number;
        /**
         * ZoneReglRobnBien
         */
        zoneRegleRobnBien: string;
        /**
         * ZonePlusLogm
         */
        zonePlusLogement: string;
        /**
         * Cdfozg_CodeZoneGegrRegl
         */
        codeZoneGegrRegle: number;
        /**
         * Cdfwti_TypeImeu
         */
        typeImeu: number;
        /**
         * Cifclh_CodeLogmHlm
         */
        codeLogementHlm: number;
        /**
         * Cifclh_EstLogmHlm
         */
        estLogementHlm: boolean;
        /**
         * Idfapi_IdntPrgmImmb
         */
        idProgrammeImmobilier: string;
        /**
         * Idfaap_IdntAccrPourInst
         */
        idAccrPourInstruction: string;
        /**
         * Cifcep_IndicemssNouvPartScpi
         */
        indicemssNouvPartScpi: number;
        /**
         * Ctfcve_CodeTypeMarcPourVent
         */
        codeTypeMarchePourVent: number;
        /**
         * Idfove_NomSoceGest
         */
        nomSoceGestion: string;
        /**
         * Cdfizf_CentreBourgRural
         */
        centreBourgadeRural: boolean;
        /**
         * DroitAcquisPEL
         */
        droitAcquisPEL: number;
        /**
         * DroitAcquisCEL
         */
        droitAcquisCEL: number;
        /**
         * IdntTerrFinn
         */
        idTerrFinancier: string;
        /**
         * IdntTrvxFinn
         */
        idTravauxFinancier: string;
        /**
         * IdntConstFinn
         */
        idConstructionFinancier: string;
        /**
         * IdntBatmHabtFinn
         */
        idBatimentHabitationFinancier: string;
        /**
         * IdntSoulFinn
         */
        idSoulFinancier: string;
        /**
         * IdntObjtButLocf
         */
        idObjetButLocf: string;
        /**
         * IdntObjtPrmtImmb
         */
        idObjetPrmtImmobilier: string;
    }
    interface IProjetLecture extends IElementLecture {
        /**
         * AdrsLign5
         */
        adresseLigne5: string;
        /**
         * BonificationEstValide
         */
        bonificationEstValide: boolean;
        /**
         * Cdfcdo_CodeDestAutrParObjt
         */
        codeDestinataireAutreParObjet: number;
        /**
         * Cdfcfo_CateReglAttr
         */
        cateRegleAttribut: string;
        /**
         * Cdfcni_TypeObjtFinn
         */
        typeObjetFinancier: string;
        /**
         * Cdfcno_CodeNatrFinn
         */
        codeNatureFinancier: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * LibelleModlEstVenl
         */
        libelleModeleEstVenl: string;
        /**
         * Cdfomp_CodeMiseOeuvrProjPro
         */
        codeMiseOeuvrProjetPro: number;
        /**
         * LibelleCodeMiseOeuvrProjPro
         */
        libelleCodeMiseOeuvrProjetPro: string;
        /**
         * Cdfonn_NegcEffcParNotr
         */
        negocieEffcParNotaire: boolean;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * Cdfwna_NaturesConcoursExternes
         */
        naturesConcoursExternes: Array<IScConstante>;
        /**
         * Cdfwrl_PresBienAVend
         */
        presBienAVend: boolean;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: number;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Ctfgce_CritElgGarFEI
         */
        critereElgGarFEI: string;
        /**
         * Ctfifd_InteFrsDivrFinn
         */
        interieurFrsDivrFinancier: string;
        /**
         * Ctfoan_TypeAcqs
         */
        typeAcqs: number;
        /**
         * Ctfonu_NbUnteContPrgmImmb
         */
        nombreUnteContratProgrammeImmobilier: string;
        /**
         * Ctmicr_TypeLoiFICP
         */
        typeLoiFICP: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * FraisDeNotairesSaisissables
         */
        fraisDeNotairesSaisissables: boolean;
        /**
         * Lbfoa1_Intt
         */
        adresseLigne1: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Lbfoof_DescObjt
         */
        descriptionObjet: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * Mofcpz_CoutRelOper
         */
        coutRelOper: number;
        /**
         * Mtfcra_MtRachCren
         */
        montantRachCren: number;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Mtfofd_MtFrsDivr
         */
        montantFrsDivr: number;
        /**
         * Mtfofn_CoutFrsNotr
         */
        coutFrsNotaire: number;
        /**
         * Mtfoho_CoutTotlObjtHt
         */
        coutTotalObjetHt: number;
        /**
         * Mtfott_CoutTotlObjtTtc
         */
        coutTotalObjetTTC: number;
        /**
         * PrendreBienSousJacentPourGarantie
         */
        prendreBienSousJacentPourGarantie: boolean;
        /**
         * RedacteurActeObligatoire
         */
        redacteurActeObligatoire: boolean;
        /**
         * IdntBienAVend
         */
        idBienAVend: string;
        /**
         * IdntLignInvs
         */
        idLigneInvs: string;
        /**
         * IdntLignTirg
         */
        idLigneTirg: string;
        /**
         * IdntPlanRetn
         */
        idPlanRetn: string;
        /**
         * IdntReam
         */
        idReamenagement: string;
        /**
         * ListIdntPlanFinn
         */
        listeIdPlanFinancier: Array<string>;
    }
    interface IConstructionFinanceeLecture extends IElementLecture {
        /**
         * Mtfoco_CoutConstFinn
         */
        coutConstructionFinancier: number;
        /**
         * Dtfoac_DateDebtConst
         * Type date au format yyyy-MM-dd
         */
        dateDebutConstruction: string;
        /**
         * Dffotr_DateFinConst
         * Type date au format yyyy-MM-dd
         */
        dateFinConstruction: string;
        /**
         * Mtfotm_CoutTrvxAChrgMoa
         */
        coutTravauxAChargeMoa: number;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Ctfmcc_TypeContConst
         */
        typeContratConstruction: number;
        /**
         * LibelleTypeContConst
         */
        libelleTypeContratConstruction: string;
        /**
         * Cdfwti_TypeImeu
         */
        typeImeu: number;
        /**
         * Cdfoga_PresUneGarnAcheTrvx
         */
        presUneGarantieAcheTravaux: number;
        /**
         * LibellePresUneGarnAcheTrvx
         */
        libellePresUneGarantieAcheTravaux: string;
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Nbfosa_SurfAnnx
         */
        surfAnnx: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * LibelleCtfoloTypeLogement
         */
        libelleTypeLogement: string;
        /**
         * Nbfolo_NbLogmConst
         */
        nombreLogementConstruction: number;
        /**
         * Nbfwpp_NbPiecPrncConst
         */
        nombrePiecePrincipalConstruction: number;
        /**
         * Ctfmoi_TypeLogm
         */
        typeLogement1: number;
        /**
         * LibelleCtfmoiTypeLogement
         */
        libelleTypeLogement1: string;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * IdntTerrSjac
         */
        idTerrSousJacent: string;
    }
    interface IBienSousJacentLecture extends IElementLecture {
        /**
         * Ctfmma_ModeAcqsBien
         */
        modeAcqsBien: number;
        /**
         * LibelleModeAcquisition
         */
        libelleModeAcquisition: string;
        /**
         * Mkfmct_CrdBienSjac
         */
        crdbienSousJacent: number;
        /**
         * Dtfoat_DateEntrCaptDateAcqs
         * Type date au format yyyy-MM-dd
         */
        dateEntrCapitalDateAcqs: string;
        /**
         * Ctfogp_ModeFinn
         */
        modeFinancier: number;
        /**
         * LibelleModeFinancement
         */
        libelleModeFinancement: string;
        /**
         * Cdfcni_TypeObjtComl
         */
        typeObjetCommercialisation: string;
        /**
         * Lbni_LibelleLong
         */
        libelleTypeObjCom: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Lbfcor_LibelleLong
         */
        libelleTypeObjReg: string;
        /**
         * Cnfcng_NatrGarnt
         */
        natureGarnt: number;
        /**
         * LibelleNatureGarantie
         */
        libelleNatureGarantie: string;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd
         */
        dateEstmVenl: string;
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * LibelleModlEstmVenl
         */
        libelleModeleEstmVenl: string;
        /**
         * IdntBien
         */
        idBien: string;
    }
    interface IBatimentHabitableFinanceLecture extends IElementLecture {
        /**
         * Nbfosh_SurfHabtCreeParConst
         */
        surfHabitationCreeParConstruction: number;
        /**
         * Nbfosa_SurfAnnx
         */
        surfAnnx: number;
        /**
         * Mtfoac_CoutAcqsBatmHabt
         */
        coutAcqsBatimentHabitation: number;
        /**
         * Ctfopm_CodePrixMarcBale2
         */
        codePrixMarcheBale2: number;
        /**
         * Mtfomf_MtMoblFinn
         */
        montantMoblFinancier: number;
        /**
         * Mtfcfn_MtFrsNegc
         */
        montantFrsNegocie: number;
        /**
         * Dtfaoc_DateAcqsBatmHabt
         * Type date au format yyyy-MM-dd
         */
        dateAcqsBatimentHabitation: string;
        /**
         * Dtfoco_DateConstBatmHabt
         * Type date au format yyyy-MM-dd
         */
        dateConstructionBatimentHabitation: string;
        /**
         * Mtfotv_MtTvaFinnARemb
         */
        montantTVAFinancierARemboursement: number;
        /**
         * Ctfolo_TypeLogm
         */
        typeLogement: string;
        /**
         * LibelleCtfoloTypeLogement
         */
        libelleTypeLogement: string;
        /**
         * Nbfolo_NbLogmConst
         */
        nombreLogementConstruction: number;
        /**
         * Nbfwpp_NbPiecPrncConst
         */
        nombrePiecePrincipalConstruction: number;
        /**
         * Ctfmoi_TypeLogm
         */
        typeLogement1: number;
        /**
         * LibelleCtfmoiTypeLogement
         */
        libelleTypeLogement1: string;
        /**
         * IdntPrjt
         */
        idProjet: string;
        /**
         * IdntTerrSjac
         */
        idTerrSousJacent: string;
    }
    interface IOccupantMaj extends IElementMaj {
        /**
         * LibelleOccupant
         */
        libelleOccupant: string;
        /**
         * Lien
         */
        lien: number;
        /**
         * RevenuFiscal
         */
        revenuFiscal: number;
    }
    interface IRattachementFoyerFiscalTiersMaj extends IElementMaj {
        /**
         * Identification
         */
        identification: string;
        /**
         * Annee
         */
        annee: number;
        /**
         * Montant
         */
        montant: number;
    }
    interface IInformationOccupationMaj extends IElementMaj {
        /**
         * DateDebut
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * DateFin
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * StatutOccupation
         */
        statutOccupation: number;
        /**
         * RattachementAutre
         */
        rattachementAutre: string;
        /**
         * Adresse
         */
        adresse: string;
    }
    interface ITuteurMaj extends IElementMaj {
    }
}

declare namespace AssuranceAdeCredit.Modeles.Rest.MajPropAssurance {
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
    interface IPersonnalisationAde {
        /**
         * CategoriePersonnalisation
         */
        categoriePersonnalisation: number;
        /**
         * PersonnalisationsOptionAde
         */
        personnalisationsOptionAde: Array<IPersonnalisationOptionAde>;
    }
    interface IPropositionAssurance {
        /**
         * GarantiesAde
         */
        garantiesAde: Array<IGarantieAde>;
        /**
         * CouverturesCreditAde
         */
        couverturesCreditAde: Array<ICouvertureCreditAde>;
        /**
         * IdCnpPropositionContrat
         */
        idCnpPropositionContrat: string;
        /**
         * IdCnpPropositionPersonnalisation
         */
        idCnpPropositionPersonnalisation: string;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * IdwsAssurance
         */
        idwsAssurance: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
    }
    interface IArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
    interface IGroupeArgumentContrat {
        /**
         * Idws
         */
        idws: string;
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
        arguments: Array<IArgumentContrat>;
    }
    interface IGarantieAde {
        /**
         * IdCnpCouvertureOptionnel
         */
        idCnpCouvertureOptionnel: string;
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
        controle: IControleIhm;
        /**
         * CouvertureOption
         */
        couvertureOption: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
        /**
         * PersonnalisationsAde
         */
        personnalisationsAde: Array<IPersonnalisationAde>;
    }
    interface ISortiePropositionAssurances {
        /**
         * Idfaos_IdntPropAssrCnp
         */
        idPropAssuranceCnp: string;
        /**
         * Nufaaa_IdExterneAssurance
         */
        idExterneAssurance: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * MontantPremiereEcheance
         */
        montantPremiereEcheance: number;
        /**
         * MontantPremiereEcheanceAss
         */
        montantPremiereEcheanceAssurance: number;
        /**
         * MontantPremiereEcheanceSansAss
         */
        montantPremiereEcheanceSansAssurance: number;
        /**
         * PropositionsAssurance
         */
        propositionsAssurance: Array<IPropositionAssurance>;
        /**
         * SyntheseGarantieAde
         */
        syntheseGarantieAde: Array<IGarantieAde>;
        /**
         * GroupeArgumentsContrat
         */
        groupeArgumentsContrat: Array<IGroupeArgumentContrat>;
        /**
         * Anomalies
         */
        anomalies: Array<IAnomalieLecture>;
    }
    interface IPersonnalisationOptionAde {
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
        /**
         * Mffacm_MontantComposante
         */
        montantComposante: number;
        /**
         * Txfacm_TauxComposante
         */
        tauxComposante: number;
    }
    interface IEntreePropositionAssurances {
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
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
        /**
         * TarificationDerogatoire
         */
        tarificationDerogatoire: boolean;
        /**
         * CodeCollectivite
         */
        codeCollectivite: string;
        /**
         * EstParcoursManuel
         */
        estParcoursManuel: boolean;
        /**
         * ForcerResidenceFiscaleFuture
         */
        forcerResidenceFiscaleFuture: boolean;
    }
    interface ICouvertureCreditAde {
        /**
         * IdwsCreditInterne
         */
        idwsCreditInterne: string;
        /**
         * IdwsCouvertureCredit
         */
        idwsCouvertureCredit: string;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Txfacr_QuotCouv
         */
        quotientCouverture: number;
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
         * CoutTotalAssurance
         */
        coutTotalAssurance: number;
        /**
         * CoutMoyenMensuelAssurance
         */
        coutMoyenMensuelAssurance: number;
        /**
         * EstRelaisOuInFine
         */
        estRelaisOuInFine: boolean;
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

declare namespace AssuranceAdeCredit.Services.FormSettings {
    /** Interface des configurations de comportement des champs de saisie */
    interface IAdeFormSettings {
        inputBasique: Forms.IInputSettings;
        inputReadonly: Forms.IInputSettings;
        inputRequired: Forms.IInputSettings;
        inputCollectivite: Forms.IInputSettings;
        inputAssuranceObligatoire: Forms.IInputSettings;
        inputTarificationDerogatoire: Forms.IInputSettings;
        inputSaisieManuelleConvention: Forms.IInputSettings;
        inputModeExpert: Forms.IInputSettings;
        inputResidentFiscal: Forms.IInputSettings;
    }
    /** Interface du service de configuration de comportement des champs de saisies */
    interface IAdeFormSettingsService {
        getSettings(isConsultation: boolean, isCreation: boolean, assurance: Modeles.IAssuranceForm, viewModel: Modeles.IViewModel, listCollectivite: Modeles.ICodeLabel<string>[], tarificationDerogatoireActif: () => boolean, assuranceObligatoireEditable: boolean, estDejaParcoursManuel: boolean): IAdeFormSettings;
        getSettingsConfigurationPersonne(config: Modeles.Proposition.IConfigurationInitialePersonne, consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsSaisieManuelle;
        getRulesConfigurationPersonne(config: Modeles.Proposition.IConfigurationInitialePersonne, estSaisieManuelle: boolean): Modeles.Proposition.IRulesSaisieManuelle;
        getSettingsGarantieSocle(garantie: Modeles.Proposition.IGarantieSocle, consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieSocle;
        getSettingsGarantieOption(consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieOption;
        getSettingsGarantieApe(consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieApe;
    }
    /** Service de configuration de comportement des champs de saisies */
    class AdeFormSettingsService implements IAdeFormSettingsService {
        /** Récupère le paramètrage du comportement des champs de saisies */
        getSettings(isConsultation: boolean, isCreation: boolean, assurance: Modeles.IAssuranceForm, viewModel: Modeles.IViewModel, listCollectivite: Modeles.ICodeLabel<string>[], tarificationDerogatoireActif: () => boolean, assuranceObligatoireEditable: boolean, estDejaParcoursManuel: boolean): IAdeFormSettings;
        /**
         * Génère une configuration de champ de saisie simple :
         * - Read-only en mode consultation
         */
        private getSimpleField(consultation);
        /**
         * Génère une configuration de champ de saisie requis :
         * - Read-only en mode consultation
         * - Requis à la saisie
         */
        private getRequiredField(consultation);
        /**
         * Génère une configuration de champ de saisie read-only
         */
        private getReadonlyField();
        getSettingsConfigurationPersonne(config: Modeles.Proposition.IConfigurationInitialePersonne, consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsSaisieManuelle;
        getRulesConfigurationPersonne(config: Modeles.Proposition.IConfigurationInitialePersonne, estSaisieManuelle: boolean): Modeles.Proposition.IRulesSaisieManuelle;
        getSettingsGarantieSocle(garantie: Modeles.Proposition.IGarantieSocle, consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieSocle;
        getSettingsGarantieOption(consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieOption;
        getSettingsGarantieApe(consultation: boolean, estSaisieManuelle: boolean): Modeles.Proposition.ISettingsGarantieApe;
    }
}

declare namespace AssuranceAdeCredit.Services.InputRules {
    /** Interface des configurations de la validation des champs de saisie */
    interface IAdeRules extends Modeles.IInputRules {
        /** Champs quotité : 0 à 100 & requis */
        inputQuotite: Rules.IValidationRule[];
        inputCollectivite: Rules.IValidationRule[];
    }
    interface IAdeRulesService {
        getRules(viewModel: Modeles.IViewModel, formSettings: Services.FormSettings.IAdeFormSettings): IAdeRules;
    }
    /** Service de configuration de la validation des champs de saisie */
    class AdeRulesService implements IAdeRulesService {
        static $inject: string[];
        constructor();
        getRules(viewModel: Modeles.IViewModel, formSettings: Services.FormSettings.IAdeFormSettings): IAdeRules;
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
    class InputRadioControleur<T extends string | number> extends InputControleur {
        static parametres: Modeles.IControleurParametre;
        static $inject: string[];
        isInline: boolean;
        model: T;
        options: Modeles.ICodeLabel<T>[];
        prefixId: string;
        noFormGroup: boolean;
        listStyleClass: string;
        readOnlyModel: string;
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
