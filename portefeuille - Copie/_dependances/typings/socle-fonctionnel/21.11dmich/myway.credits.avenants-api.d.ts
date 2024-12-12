
declare module Avenants.Commun.Constantes.Inject {
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $location: string;
        const $window: string;
        const $scope: string;
        const $rootScope: string;
        const $timeout: string;
        const $filter: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const navigationService: string;
        const modalService: string;
        const adresseService: string;
        const rechercherPersonneService: string;
    }
    module Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
        const applicationLoggerName: string;
    }
    module Services {
        const errorService: string;
        const routeService: string;
        const cacheService: string;
        const actionDomService: string;
        const fichierService: string;
        const popinService: string;
        const lisaService: string;
    }
}

declare module Avenants.Commun {
    var app: any;
}

declare module Avenants.Commun.Enum {
    enum TypeAssurance {
        Obligatoire,
        Facultatif,
        NonDefini,
    }
    class RisqueAssurance extends MyWay.Services.StringEnum {
        static risqueSimple: RisqueAssurance;
        static risqueAggrave: RisqueAssurance;
        static extensionVieux: RisqueAssurance;
    }
    class MotifDeliaisonAssurance extends MyWay.Services.StringEnum {
        static substitutionAnnee: MotifDeliaisonAssurance;
        static substitutionAnniversaire: MotifDeliaisonAssurance;
        static autre: MotifDeliaisonAssurance;
        static renegociationTarifBase: MotifDeliaisonAssurance;
        static renegociationOption: MotifDeliaisonAssurance;
    }
}

declare module Avenants.Commun.Enum {
    /**
     * Type de l'élément
     */
    enum CodeAvenantSimulation {
        Simulation,
        Avenant,
    }
    /**
     * Le type d'avenant
     */
    enum TypeAvenant {
        SimulationAvenant,
        AvenantTechnique,
        AvenantCommercial,
        AvenantRecouvrement,
    }
    /**
     * Le contenu modifié par l'avenant
     */
    enum ModificationCredit {
        Assurance = 0,
        Garantie = 1,
        Financier = 2,
        ChangementProduit = 3,
        Quantieme = 4,
        ReportFinPret = 5,
        AmenagementTemporaireEcheances = 6,
        Personne = 7,
        Objet = 8,
        Inconnu = 9,
    }
    /**
     * Accès souhaité pour l'avenant (ou ses éléments)
     */
    enum CodeTypeAcces {
        Creation,
        Modification,
        Duplication,
        Lecture,
        Annulation,
        SansObjetMixte,
        ErreurProduction,
        NonRenseigne,
    }
    /**
     * Codes Sous type d'avenant de recouvrement
     */
    enum CodeSousTypeAvenant {
        RecouvrementJudiciaire,
        RecouvrementImpose,
        SurendettementNegocie,
        SurendettementImpose,
        NonRenseigne,
    }
    /**
     * Codes Sous type d'avenant de recouvrement d'objet non personne
     */
    enum CodeSousTypeAvenantObjet {
        RecouvrementJudiciaire,
        RecouvrementImpose,
        SurendettementNegocie,
        SurendettementImpose,
        NonRenseigne,
    }
    /**
     * Codes Sous type d'avenant de recouvrement de personne
     */
    enum CodeSousTypeAvenantPersonne {
        RecouvrementJudiciaire,
        RecouvrementImpose,
        SurendettementNegocie,
        SurendettementImpose,
        NonRenseigne,
    }
}

declare module Avenants.Commun.Enum {
    enum AppelCreditOrigine {
        Totalite = 0,
        CreditOrigine = 1,
        CreditOrigineDateEffet = 2,
    }
    enum ModeCalculTaux {
        Proportionnel,
        Actuariel,
        EquivalentPeriodique,
    }
}

declare module Avenants.Commun.Enum {
    enum TimeGranularity {
        Day,
        Month,
        Year,
    }
}

declare module Avenants.Commun.Enum {
    enum TypeEditionPieco {
        Electronique,
        IndustrielleOffre,
        IndustrielleLettreAvenant,
        Autre,
    }
    class GarantieToAssurance extends MyWay.Services.StringEnum {
        static deces: GarantieToAssurance;
        static perteTotaleAutonomie: GarantieToAssurance;
        static incapaciteTemporaireTotale: GarantieToAssurance;
        static invaliditePermanenteTotale: GarantieToAssurance;
        static invaliditePermanentePartielle: GarantieToAssurance;
        static perteEmploi: GarantieToAssurance;
    }
}

declare module Avenants.Commun.Enum {
    class CessionRangGarantie extends MyWay.Services.StringEnum {
        static inscriptionEnConcurrence: CessionRangGarantie;
        static inscriptionSansConcurrence: CessionRangGarantie;
        static pasCessionRang: CessionRangGarantie;
        static cessionRang: CessionRangGarantie;
    }
    class TypeLogementGarantie extends MyWay.Services.StringEnum {
        static type1Bis: TypeLogementGarantie;
        static type1: TypeLogementGarantie;
        static type2: TypeLogementGarantie;
        static type3: TypeLogementGarantie;
        static type4: TypeLogementGarantie;
        static type5: TypeLogementGarantie;
        static type6: TypeLogementGarantie;
        static type7: TypeLogementGarantie;
        static type8: TypeLogementGarantie;
        static type9: TypeLogementGarantie;
        static type10: TypeLogementGarantie;
        static type11: TypeLogementGarantie;
        static type12: TypeLogementGarantie;
        static type13: TypeLogementGarantie;
        static type14: TypeLogementGarantie;
        static type15: TypeLogementGarantie;
        static type16: TypeLogementGarantie;
        static type17: TypeLogementGarantie;
        static type18: TypeLogementGarantie;
        static type19: TypeLogementGarantie;
        static type20: TypeLogementGarantie;
        static type21: TypeLogementGarantie;
        static type22: TypeLogementGarantie;
        static type23: TypeLogementGarantie;
        static type24: TypeLogementGarantie;
        static type25: TypeLogementGarantie;
    }
    class DestinationBienGarantie extends MyWay.Services.StringEnum {
        static principale: DestinationBienGarantie;
        static secondaire: DestinationBienGarantie;
        static locatifResidencePrincipal: DestinationBienGarantie;
        static locatifResidenceSecondaire: DestinationBienGarantie;
    }
    class CautionnementGarantie extends MyWay.Services.StringEnum {
        static solidaire: CautionnementGarantie;
        static solidaireLimite: CautionnementGarantie;
        static simple: CautionnementGarantie;
    }
    class TypeVersement extends MyWay.Services.StringEnum {
        static periodique: TypeVersement;
        static aperiodique: TypeVersement;
    }
}

declare module Avenants.Commun.Enum {
    enum HabilitationNiveau {
        Interdiction = 0,
        Consultation = 1,
        MiseAJour = 2,
        Forçage = 3,
    }
}

declare module Avenants.Commun.Enum {
    enum ModeCalcul {
        Inconnu = 0,
        TauxSaisissable = 1,
        TauxChoix = 2,
        MontantSaisissable = 3,
        MontantChoix = 4,
    }
    /**
     *  1: Règle de calcul
     *  2: Montant fixe
     *  3: plage de montants avec valeur par défaut
     *  4: application d'un taux fixe sur une assiette
     *      - en assurance, ce taux est à choisir parmi 4 (réseau, standard, majoré, personnes âgées); en garantie, il est à choisir parmi 3(réseau, standard, majoré)
     *      - pour les autres conventions, un seul taux est proposé.
     *  5: application sur une assiette d'un taux choisi dans une plage.
     *  6: application d'un taux par tranche de montant.
     *      - Ce code permet de déterminer la façon dont est calculé le montant d'un accessoire.
     *  7: montant fixe + (taux x assiette)
     */
    enum ModeCalculExhaustif {
        Calcule,
        MontantFixe,
        MontantPlage,
        TauxFixeAssiette,
        TauxPlage,
        TauxTrancheMontant,
        MontantFixeAvecTaux,
    }
}

declare module Avenants.Commun.Enum {
    enum TypePersonne {
        PersonnePhysique = 0,
        PersonneMorale = 1,
        Autre = 2,
    }
    enum GenrePersonne {
        Homme = 0,
        Femme = 1,
        Aucun = 2,
    }
    class RolePersonne extends MyWay.Services.StringEnum {
        static avocat: RolePersonne;
        static caution: RolePersonne;
        static emprunteur: RolePersonne;
        static personneEmprunteur: RolePersonne;
        static vendeur: RolePersonne;
        static proprietaire: RolePersonne;
        static huissier: RolePersonne;
        static payeur: RolePersonne;
        static organismeSignataireConvention: RolePersonne;
        static caf: RolePersonne;
        static redacteurActe: RolePersonne;
        static beneficiaireVersement: RolePersonne;
        static dirigeant: RolePersonne;
        static representant: RolePersonne;
        static conjointCollaborateur: RolePersonne;
        static architecte: RolePersonne;
        static partenaireCessionAutoCaisse: RolePersonne;
        static partenaireGestionnaireCaisse: RolePersonne;
        static greffeTribunalCommerce: RolePersonne;
        static tresorPublic: RolePersonne;
        static beneficiaire: RolePersonne;
        static banqueGarantissantMarchePrincipal: RolePersonne;
        static tiersMarchePrincipal: RolePersonne;
    }
}

declare module Avenants.Commun.Enum {
    type ErrorType = "Fonctionnelle" | "Technique" | "Javascript" | "Inconnue";
}

declare module Avenants.Commun.Factory {
    /**
     * Permet de gérer les erreurs, même celles non issues des promesses
     */
    function extendExceptionHandler($injector: ng.auto.IInjectorService): (exception: Error) => void;
}

declare module Avenants.Commun.Filtres {
}

declare module Avenants.Commun.Filtres {
}

declare module Avenants.Commun.Filtres {
}

declare module Avenants.Commun.Filtres {
}

declare module Avenants.Commun.Filtres {
}

declare module Avenants.Commun.Logger {
    class ConsoleLoggerService implements ILogger {
        private serviceAgentExtended;
        private loggerLevel;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.IServiceAgent);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
        private getTime();
    }
}

declare module Avenants.Commun.Logger {
    class FullLoggerService implements ILogger {
        private consoleLogger;
        private kibanaLogger;
        private serviceAgentExtended;
        private loggers;
        private loggerLevel;
        static $inject: Array<string>;
        constructor(consoleLogger: ILogger, kibanaLogger: ILogger, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
    }
}

declare module Avenants.Commun.Logger {
    interface ILogger {
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 1,
        WARN = 2,
        INFO = 3,
        DEBUG = 4,
        ALL = 10,
    }
}

declare module Avenants.Commun.Logger {
    class MyWayLoggerService implements ILogger {
        private logger;
        constructor();
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
}

declare module Avenants.Commun.Constantes {
    module Donnees {
        /**
         * Valeurs des icônes selon le type
         */
        const iconePersonneHomme: string;
        const iconePersonneFemme: string;
        const iconePersonneMorale: string;
        /**
         * Dernière version du wsdl
         * Permet d'accéder à la dernière version des QR
         */
        const lastVersionWsdlNeo: number;
        const codeParameApplicatifSignatureElec: string;
        /**
         * Par défaut, positionnement de ce mode de régleemnt (RIB)
         */
        const codeModeReglementDefaut: string;
        /**
         * Code de la composante socle de type Décès (DEC)
         */
        const codeTypeComposanteDeces: string;
        /**
         * Code de la composante socle de type Perte Emploi (CHO)
         */
        const codeTypeComposantePerteEmploi: string;
        /**
         * Constantes des modes de flux financier
         */
        module ModeFluxFinancier {
            /**
             * Code du flux financier Releve Identite Bancaire (RIB)
             */
            const codeReleveIdentiteBancaire: string;
            /**
             * Code du flux financier Saisie Libre ou Chèque (NOM)
             */
            const codeSaisieLibre: string;
            /**
             * Code du flux financier SEPA ou BIC/IBAN (IBA)
             */
            const codeSepaBicIban: string;
            /**
             * Code du flux financier Tresorerie (TRE)
             */
            const codeTresorerie: string;
        }
    }
}

declare module Avenants.Commun.Constantes.Editique {
    /**
     * Nom du fichier à l'édition
     * Attention il faut que le nom soit raccord avec l'intitulé du paramètrage PIECO ..
     * Dans le cas contraire il ne sera pas possible d'éditer un document souhaité par l'indus en myway
     */
    module NomFichier {
        const avenantQuantieme: string;
        const lettreAvenantAssurance: string;
        const ta: string;
        const taPlanRemboursement: string;
        const conspli: string;
        const conspliEmprunteur: string;
        const addemdumAte: string;
    }
    module ReferenceDoc {
        const addemdumAte: string;
    }
}

declare module Avenants.Commun.Constantes {
    module Etablissement {
        const ecureuilCredit: string;
        const creditFoncier: string;
        const creditCooperatif: string;
        const axa: string;
    }
}

declare module Avenants.Commun.Constantes {
    module Format {
        /**
         * YYYY-MM-DD
         */
        const DATE_REST: string;
        /**
         * DD/MM/YYYY
         */
        const DATE_IHM: string;
        /**
         * DD
         */
        const DATE_QUANTIEME: string;
        /**
         * YYYY/MM/DD T HH/MM/SS
         */
        const DATE_INDUS: string;
        /**
         * DD/MM/YYYY
         */
        const DATE_EDITION: string;
    }
}

declare module Avenants.Commun.Constantes {
    module Habilitation {
        const tableauAmortissement: string;
        const backOffice: string;
        const accesGestionAvenant: string;
        const avenantTechnique: string;
        const avenantRecouvrement: string;
        const avenantCommercial: string;
        const simulationAvenant: string;
        const simulationAvenantSaisieRetroactve: string;
        const signatureElectronique: string;
    }
}

declare module Avenants.Commun.Constantes.Lisa {
    const ERREUR_LISA_CODE_LIBELLE: string;
    /**
     * Retranscription des enchainements Lisa
     */
    module Params {
        const idCredit: string;
        const idDossier: string;
        const idPersonne: string;
        const numRelatif: string;
        const numAvenant: string;
        const dateEffet: string;
        const dateTraitement: string;
        const typeAvenant: string;
        const sousTypeAvenant: string;
        const modificationCredit: string;
        const codeAvenantSimulation: string;
        const codeTypeAcces: string;
        const isTaApres: string;
        const editionSynchroMode: string;
        const editionSynchroEtablissement: string;
        const editionSynchroNumCredit: string;
        const editionSynchroNumSimulation: string;
        const editionSynchroNumAvenant: string;
        const editionSynchroDocs: string;
        const editionSynchroOptions: string;
        const editionSynchroActeIdn: string;
        const editionSynchroChemin: string;
        const editionTaEtablissement: string;
        const editionTaIdCredit: string;
        const editionTaDateDeb: string;
        const editionTaDateFin: string;
        const editionTaNumAvenant: string;
        const editionTaNumSimu: string;
        const isChangementProduit: string;
    }
    module Next {
        const finProcessusComplet: number;
        const rechercheToResultatEmprunteur: number;
        const resultatEmprunteurToRecherche: number;
        const resultatEmprunteurToTableauAmortissement: number;
        const resultatEmprunteurToListeAvenant: number;
        const resultatEmprunteurToProcessusGestionCredit: number;
        const tableauAmortissementToEdition: number;
        const tableauAmortissementToFinProcessus: number;
        const listeAvenantToHistorique: number;
        const historiqueToListeAvenant: number;
        const listeAvenantToCreationAvenant: number;
        const listeAvenantToOuvertureAvenant: number;
        const listeAvenantToSyntheseAvenant: number;
        const listeAvenantToContractualisation: number;
        const listeAvenantToRecherche: number;
        const syntheseAvenantToTableauAmortissement: number;
        const syntheseAvenantToEditionTAAvant: number;
        const syntheseAvenantToEditionTAApres: number;
        const syntheseAvenantToListeAvenant: number;
        const contractualisationToSignature: number;
        const contractualisationToEditionSynchro: number;
        const contractualisationToListeAvenant: number;
        const signatureToContractualisation: number;
        const creationAvenantToSyntheseAvenant: number;
        const editionAvenantToRetourListeAvenant: number;
    }
}

declare module Avenants.Commun.Constantes.Navigation {
    module Localhost {
        const spaRecherche: string;
        const spaConsultation: string;
    }
    module Routes {
        const erreur: string;
    }
}

declare module Avenants.Commun.Constantes {
    module TablesDelocalisees {
        const categorieSocioPro: string;
    }
}

declare module Avenants.Commun.Services {
    interface IActionDomService {
        /**
         * Permet de gérer l'enchainement des actions <=> clic multiple sur un même bouton
         */
        getStartTheProcess(key: string): boolean;
    }
    class ActionDomService implements IActionDomService {
        private dataCache;
        /**
         * 1,5 secondes <=> évite le clic multiple sur un bouton pendant ce laps de temps
         */
        private defaultTimeToLive;
        constructor();
        getStartTheProcess(key: string): boolean;
        /**
         * Stocke l'action dans le cache
         */
        setToCache(key: string): void;
        /**
         * Vérification si l'élément a expiré
         */
        isExpired(cacheData: Modeles.ICacheAction): boolean;
    }
}

declare module Avenants.Commun.Services {
    interface ICacheService {
        /**
         * Tente de trouver le résultat à partir du cache. Sinon retourne la promesse en stockant le résultat
         * @param key
         * @param promise
         * @param fromCache: optionnel (par défaut: true)
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, fromCache?: boolean): ng.IPromise<T>;
    }
}

declare module Avenants.Commun.Services {
    interface IErrorService {
        errorHandler(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): ng.IPromise<Modeles.CustomError>;
    }
    class ErrorService implements IErrorService {
        private $q;
        private $location;
        private logger;
        private popinService;
        /**
         * Traite une seule erreur à la fois, permet de ne pas gérer une même erreur si cela vient de 2 points d'entrée différents
         */
        private _isTreatedError;
        static $inject: Array<string>;
        constructor($q: ng.IQService, $location: ng.ILocationService, logger: Commun.Logger.ILogger, popinService: Commun.Services.IPopinService);
        errorHandler: (error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom) => ng.IPromise<Modeles.CustomError>;
        /**
         * Interprétation de l'erreur
         */
        exceptionHandler(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): ng.IPromise<Modeles.CustomError>;
        /**
         * Identification du type de l'erreur
         */
        isLisaError(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): boolean;
        isQrError(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): boolean;
        isRestError(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): boolean;
        /**
         * Comportement de l'erreur Lisa
         */
        lisaErrorHandler(error: MyWay.Services.Erreur): ng.IPromise<Modeles.CustomError>;
        /**
         * The rules for IT-CE Services is:
         * TimeOut : 0
         * code http in 4XX are Fonctional errors
         * code http in 5XX are Technical errors
         */
        restErrorHandler(error: MyWay.Services.Erreur): ng.IPromise<Modeles.CustomError>;
        /**
         * Interprétation d'une erreur de type javascript
         */
        otherErrorHandler(error: Error): ng.IPromise<Modeles.CustomError>;
        errorUndefinedHandler(): ng.IPromise<Modeles.CustomError>;
        qrErrorHandler(error: Modeles.IRetourQRCustom): ng.IPromise<Modeles.CustomError>;
        /**
         * Affichage de l'erreur et redirection si bloquante
         */
        executeError(erreur: Modeles.CustomError): ng.IPromise<Modeles.CustomError>;
        /**
         * Affichage de l'erreur
         */
        showError(customError: Modeles.CustomError): ng.IPromise<Modeles.CustomError>;
        /**
         * Gestion de la popin de l''erreur à afficher
         */
        showPopinErreur(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, customError: Commun.Modeles.CustomError): ng.IPromise<void>;
        getTypePopupErreur(type: Enum.ErrorType): MyWay.UI.TYPE_POPUP_ERREUR;
    }
}

declare module Avenants.Commun.Services {
    interface IFichierService {
        lireLeFichier(fichier: File): ng.IPromise<any>;
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, identifiantDossier: string): ng.IPromise<void>;
    }
    class FichierService implements IFichierService {
        private $q;
        private serviceAgentExtended;
        private errorService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, errorService: Commun.Services.IErrorService);
        /**
         * généré le flux pour un fichier
         * @param fichier
         */
        lireLeFichier(fichier: File): ng.IPromise<any>;
        /**
         * Convertie un flux de données en document pour l'enregistrer sur le poste du conseiller
         * @param {string} fluxDonnees
         * @param {string} nomDocument
         */
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, identifiantDossier: string): ng.IPromise<void>;
    }
}

declare module Avenants.Commun.Services {
    interface ILisaService {
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
    }
    class LisaService implements ILisaService {
        private $q;
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Add the parameters to the processus's context
         * then calls lisa.next
         * @param valueNext
         * @param params
         */
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        /**
         * Add the params to the processus's context
         * @param params
         */
        private addParams(params);
        /**
         * Call of serviceAgentExtended next
         * @param valueNext
         */
        private toNext(valueNext);
    }
}

declare module Avenants.Commun.Services {
    interface IPopinService {
        showPopupMedium(titre: string, message: string): ng.IPromise<void>;
        showErreurSimple(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, titre: string, message: string): ng.IPromise<void>;
        showErreurDetails(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, customError: Commun.Modeles.CustomError): ng.IPromise<void>;
        showPopinErreurRetourQr<U>(bloquants: Array<string>, nonBloquants: Array<string>): ng.IPromise<U>;
        showConfirmMedium<U>(libelleBtnConfirmation: string, libelleBtnFermer: string, titre: string, texte: string, iconName?: string): ng.IPromise<U>;
        showModalMedium<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
        showModalLarge<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
    }
    class PopinService implements IPopinService {
        private $q;
        private modalService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService);
        /**
         * Popin simple avec un message d'information
         */
        showPopupMedium(titre: string, message: string): ng.IPromise<void>;
        /**
         * Popin simple avec un message d'erreur
         */
        showErreurSimple(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, titre: string, message: string): ng.IPromise<void>;
        /**
         * Popin avec un détail de la stack
         */
        showErreurDetails(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, customError: Commun.Modeles.CustomError): ng.IPromise<void>;
        /**
         * Affiche une popin d'erreur en différenciant les messages bloquants et les non-bloqants
         */
        showPopinErreurRetourQr<U>(bloquants: Array<string>, nonBloquants: Array<string>): ng.IPromise<U>;
        /**
         * Ouverture d'une popin de confirmation en taille medium (md)
         */
        showConfirmMedium<U>(libelleBtnConfirmation: string, libelleBtnFermer: string, titre: string, texte: string, iconName?: string): ng.IPromise<U>;
        /**
         * Génération de l'objet nécessaire au paramétrage d'une popin de confirmation
         */
        getModalConfirm(libelleBtnConfirmation: string, libelleBtnFermer: string, titre: string, texte: string, size: string, iconName: string): MyWay.UI.IModalConfirm;
        /**
         * Ouverture d'une popin personnalisée en taille medium (md)
         * @param data
         * @param controleurParams : Template url, name Controleur, alias
         */
        showModalMedium<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
        /**
         * Ouverture d'une popin personnalisée en taille large (lg)
         * @param data
         * @param controleurParams : Template url, name Controleur, alias
         */
        showModalLarge<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
        /**
         * Génération de l'objet nécessaire au paramétrage d'une popin libre
         */
        getModalSetting<T>(data: T, controleurParams: Modeles.IControleurParams, size: string): ng.ui.bootstrap.IModalSettings;
    }
}

declare module Avenants.Commun.Services {
    abstract class RouteService {
        static getRouteParams(params: Modeles.IControleurParams, routeResolve: any): ng.route.IRoute;
    }
}

declare module Avenants.Commun.Tools {
    class DateUtils {
        /**
         * Convertit une date string au format Date
         * @param date: string
         * @param template: optionnel, par défaut: YYYY-MM-DD
         */
        static parse(date: string, template?: string): Date;
        /**
         * Indique si la date est valorisée (non vide et valide)
         * @param date: Date ou String
         */
        static isValued(date: Date | string): boolean;
        /**
         * Convertit une date en chaine de caractères
         * @param date: Date au format string ou Date
         * @param template: optionnel, par défaut: DD/MM/YYYY
         */
        static format(date: Date | string, template?: string): string;
        private static minDateToNull(date);
        /**
         * Valide que deux dates sont identiques
         * De plus, vérification que les deux dates sont valides
         * @param granularity: par défaut Enum.TimeGranularity.Day => granularité de la vérification
         */
        static isEquals(dateUne: Date | string, dateDeux: Date | string, granularity?: Enum.TimeGranularity): boolean;
        /**
         * Indique si la date une se situe AVANT la date deux
         * De plus, vérification que les deux dates sont valides
         * @param granularity: par défaut Enum.TimeGranularity.Day => granularité de la vérification
         */
        static isBefore(dateUne: Date | string, dateDeux: Date | string, granularity?: Enum.TimeGranularity): boolean;
        /**
         * Indique si la date une se situe APRES la date deux
         * De plus, vérification que les deux dates sont valides
         * @param granularity: par défaut Enum.TimeGranularity.Day => granularité de la vérification
         */
        static isAfter(dateUne: Date | string, dateDeux: Date | string, granularity?: Enum.TimeGranularity): boolean;
    }
}

declare module Avenants.Commun.Tools {
    class Dom {
        /**
         * Monte le scroll en haut de page
         */
        static scrollTop(): void;
    }
}

declare module Avenants.Commun.Tools {
    class List {
        static findOrEmpty<T>(list: T[], predicate: _.ListIterator<T, boolean>): T;
        static firstOrEmpty<T>(list: T[]): T;
        static lastOrEmpty<T>(list: T[]): T;
    }
}

declare module Avenants.Commun.Tools {
    class Object {
        /**
         * Empêche les valeurs null et undefined pour un Object
         * @param object
         */
        static nullToEmpty<T extends Object>(object: T): T;
        /**
         * Empêche les valeurs null et undefined pour une chaine
         * @param value
         */
        static stringNotNull(value: string): string;
        /**
         * Valide si la chaine n'est pas null, pas undefined, pas vide et contient des caractères (pas que des espaces)
         */
        static isStringNotEmpty(value: string): boolean;
        /**
         * Empêche les valeurs null et undefined pour un nombre
         * @param value
         */
        static numberToStringNotNull(value: number): string;
        /**
         * Convertir une chaine de caractères en casse d'expression standard
         *   "ATTENTE DéCISION éTABLISSEMENT" -> "Attente décision établissement"
         * @param libelle
         */
        static stringToExpressionCase(libelle: string): string;
        /**
         * Convertit un nombre en chaine de caractères avec une précision après la virgule
         * @param value
         * @param precision: nombre de chiffres après la virgule
         */
        static numberToString(value: number, precision: number): string;
        /**
         * Convertit une chaine de caractères en nombre en chaine
         */
        static stringToNumber(value: string): number;
        /**
         * Indique si le nombre respecte le modulo
         * @param value
         * @param modulo
         * @param validate : optionnel, dans les cas où il ne faut pas vérifier la donnée
         */
        static isModuloRespected(value: number, modulo: number, validate?: boolean): boolean;
    }
}

declare module Avenants.Commun.Modeles {
    interface IError extends Error {
        type: Enum.ErrorType;
    }
    class CustomError implements IError {
        type: Enum.ErrorType;
        name: string;
        message: string;
        stack: string;
        constructor(type: Enum.ErrorType, name: string, message: string, stack: string);
    }
}

declare module Avenants.Commun.Modeles {
    interface ICacheAction {
        timeToLive: number;
        instantiatedTime: number;
    }
}

declare module Avenants.Commun.Modeles {
    interface IControleurParams {
        templateUrl: string;
        name: string;
        alias: string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class RetourQr {
        static getMessagesBloquants(listeRetour: Array<Modeles.IRetourQR>): Array<string>;
        static getMessagesNonBloquants(listeRetour: Array<Modeles.IRetourQR>): Array<string>;
        static getMessagesInformation(listeRetour: Array<Modeles.IRetourQR>): Array<string>;
        static getMessagesConfirmation(listeRetour: Array<Modeles.IRetourQR>): Array<string>;
        private static getMessagesFiltres(listeRetour, predicate);
    }
}

declare module Avenants.Commun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        /**
         * 0: Message info
         * 1: Message bloquant
         * 2: Message
         * 3 : Message (ex: demande de forçage ; non bloquant)
         * 4: confirmation de mise à jour
         */
        codeRetour: number;
        isErreurBloquante: boolean;
    }
    interface IRetourQRCustom {
        listeRetourQrBloquant: Array<string>;
        listeRetourQrNonBloquant: Array<string>;
        presenceRetourBloquant: boolean;
        retourAttendu: boolean;
    }
    class RetourQRCustom implements IRetourQRCustom {
        listeRetourQrBloquant: Array<string>;
        listeRetourQrNonBloquant: Array<string>;
        presenceRetourBloquant: boolean;
        retourAttendu: boolean;
        constructor(retours: Array<IRetourQR>);
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Accessoire {
        static getLibelleTypeAssiette(codeTypeAssiette: string): string;
        static getModeCalculAccessoire(codeModeCalculAccessoire: string): Enum.ModeCalcul;
        static getModeCalculAccessoireExhaustif(codeModeCalculAccessoire: string): Enum.ModeCalculExhaustif;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Assurance {
        static getRisqueByCode(code: string): Enum.RisqueAssurance;
        static getLibelleRisque(code: string, defautValue?: boolean): string;
        static getMotifDeliaisonByCode(code: string): Enum.MotifDeliaisonAssurance;
        /**
         * Sinistre couvert pour ce code dans le cadre d'une assurance
         */
        static getLibelleGarantieSinistreByCode(code: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Avenant {
        static getIntituleTypeAvenant(typeAvenant: Commun.Enum.TypeAvenant): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Credit {
        static getSymboleDevise(code: string): string;
        static getLibelleLongTypePhase(codeTypePhase: string): string;
        static getLibelleTypePhase(codeTypePhase: string): string;
        static getLibelleEtatCredit(libelleEtatCredit: string): string;
        static getModeCalculTaux(modeCalculTaux: string): Enum.ModeCalculTaux;
        static getLibelleModeTaux(modeCalculTaux: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class DateEffet {
        static getDateEffetButoire(dateEffetRetroactiveSouhaitee: Date, dateNow: Date, codeCategorieEmprunteur: string): Date;
        /**
         * Création d'une date calculée selon sa périodicité et le sens d'itération
         * @param dateEcheancePrev: dernière échéance traitée
         * @param numeroQuantieme : quantième positionné sur le crédit (important si la prochaine échéance n'est pas positionnée sur le quantième et qu'il faut ajuster)         *
         * @param periodicite
         * @param isNextDate: true: date dans le futur ; false: date dans le passé
         */
        static getDateEffetTestable(dateEcheancePrev: Date, numeroQuantieme: number, periodicite: string, isNextDate: boolean): Date;
        /**
         * Indique si la date d'effet doit être calculée pour être en phase avec le quantième
         * @Return: true => date obligatoirement au quantième / false => Possibilité de saisir hors quantième
         */
        static getIsDateEffetObligatoireQuantieme(codeAvenantSimulation: Enum.CodeAvenantSimulation, listeModificationCredit: Array<Enum.ModificationCredit>, isCreditWithAjustementEcheances: boolean): boolean;
    }
    class DateEffetHelper {
        /**
         * L'emprunteur est-il un emprunteur particulier
         */
        static isEmprunteurParticulier(codeCategorieEmprunteur: string): boolean;
        /**
         * Pour les avenants technique et recouvrement, la date d'effet doit dans certains cas être positionné au qutième
         * Dans le cas contraire elle peut être sans calcul <=> possibilité saisie hors quantième
         */
        static getIsCasAvenantWithDateEffetObligatoireQuantieme(listeModificationCredit: Array<Enum.ModificationCredit>, isCreditWithAjustementEcheances: boolean): boolean;
        static getQuantieme(dateReference: Date, numeroQuantiemeByCredit: number): number;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Dossier {
        static getStatutDossier(codeEtatDossierEnGestion: string): string;
        static getLibelleOccupation(code: string): string;
        static getLibelleLongDestinationObjet(codeDestinationAutoriseeObjet: string, codeModaliteOccupation: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    /**
     * Permet de convertir une durée dans une périodicité souhaitée
     */
    class PeriodiciteConverter {
        /**
         * Convertit une durée dans une unité fournie en nombre de jours
         * Ex: 3 mois donne 90 jours
         * @param unitePeriodeInit : unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         * @param nbJoursAn: nombre de jours dans l'année
         */
        static getPeriodiciteJournaliere(unitePeriodeInit: string, dureeInit: number, nbJoursAn: number): number;
        /**
         * Convertit une durée dans une unité fournie en nombre de mois
         * Ex: 1 an donne 12 mois
         * @param unitePeriodeInit : unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         */
        static getPeriodiciteMensuelle(unitePeriodeInit: string, dureeInit: number): number;
        /**
         * Convertit une durée dans une unité fournie en nombre de bimestre
         * ex: 1an donne 6 bimestres
         * @param unitePeriodeInit : unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         */
        static getPeriodiciteBimestrielle(unitePeriodeInit: string, dureeInit: number): number;
        /**
         * Convertit une durée dans une unité fournie en nombre de trimestre
         * ex: 2 ans donne 8 trimestres
         * @param unitePeriodeInit: unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         */
        static getPeriodiciteTrimestrielle(unitePeriodeInit: string, dureeInit: number): number;
        /**
         * Convertit une durée dans une unité fournie en nombre de semestre
         * ex: 2 ans donne 4 semestres
         * @param unitePeriodeInit : unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         */
        static getPeriodiciteSemestrielle(unitePeriodeInit: string, dureeInit: number): number;
        /**
         * Convertit une durée dans une unité fournie en nombre d'année
         * ex: 24 mois donne 2 ans
         * @param unitePeriodeInit : unité de période de départ
         * @param dureeInit: durée à convertir (exprimée en unité de période fournie)
         * @param nbJoursAn: nombre de jours dans l'année
         */
        static getPeriodiciteAnnuelle(unitePeriodeInit: string, dureeInit: number, nbJoursAn: number): number;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class FonctionsAvenant {
        /**
         * Cette fonction permet de convertir une durée exprimée en une certaine unité en une autre unité demandé.
         *  Exemple : on fournit 24 exprimée en 'M'(mois)  et l'on veut recevoir sa valeur en 'A' (année), la fonction renverra 2 ( 2 années dans 24 mois )
         * @param unitePeriodeInit: l'unité de période fournie
         * @param dureeInit: la durée à convertir (exprimée en unité de période fournie)
         * @param pefiDem: l'unité de période demandée
         * @param nbja: nombre de jours dans l'année
         */
        static simulConvDuree(unitePeriodeInit: string, dureeInit: number, unitePeriodeSouhaitee: string, nbja: number): number;
        /**
         * Ajout ou soustrait à une date en entrée un nombre de périodes exprimé en une unité de période.
         * @param date_init
         * @param nbPeriode_init
         * @param unitePeriode
         */
        static simulAjoutPeriode(dateInit: Date, nbPeriodeInit: number, unitePeriode: string): Date;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Garantie {
        static getClasseGarantie(classe: string): string;
        static getCessionRangByCode(code: string): Enum.CessionRangGarantie;
        static getTypeLogementByCode(code: string): Enum.TypeLogementGarantie;
        static getDestinationBienByCode(code: string): Enum.DestinationBienGarantie;
        static getLibelleDestinationObjet(codeDestinationAutoriseeObjet: string): string;
        static getCautionnementByCode(code: string): Enum.CautionnementGarantie;
        static getTypeVersementByCode(code: string): Enum.TypeVersement;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    /**
     * Les paramètres Lisa sont toujours passés en chaine de caractères (string)
     * Le but est ici de le convertir dans le format attendu
     */
    class ParamsLisa {
        /**
         * La chaine passée doit être valide
         */
        static getNumeroSimulationAvenant(num: string): number;
        /**
         * Récupère l'enum Avenant ou Simulation correspondant à une chaine
         */
        static getCodeAvenantSimulation(codeByParam: string): Enum.CodeAvenantSimulation;
        /**
         * Convertit la liste en string pour passer en paramètre
         */
        static getParamsTypeAvenant(liste: Array<Enum.ModificationCredit>): string;
        /**
         * Les éléments sont concaténés dans une chaine avec un séparateur
         * @param listeTypeByParamUrl
         */
        static getListeModificationCredit(listeTypeByParamUrl: string): Array<Enum.ModificationCredit>;
        /**
         * Récupère l'enum ModificationCredit correspondant à une chaine
         */
        private static getModificationCredit(typeByParamUrl);
        /**
         * Récupère l'enum Type d'avenant correspondant à une chaine
         */
        static getEnumTypeAvenant(codeByParam: string): Enum.TypeAvenant;
        /**
         * Récupère l'enum Type d'avenant correspondant à une chaine
         */
        static getEnumCodeSousTypeAvenant(codeByParam: string): Enum.CodeSousTypeAvenant;
        /**
         * Récupère l'enum CodeTypeAcces correspondant à une chaine
         */
        static getCodeTypeAcces(codeByParam: string): Enum.CodeTypeAcces;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Periodicite {
        /**
         * Indique le type de périodicité.
         * Exemple: M -> Mensuelle
         */
        static getLibellePeriodicite(codePeriodicite: string): string;
        /**
         * Indique le type de périodicité pour un accessoire (moins de choix)
         * Par défaut: échéance(s)
         */
        static getLibellePeriodiciteAccessoire(uniteDureeApplicAccess: string): string;
        /**
         * Indique le libellé de l'unité de période
         * Exemple: M -> Mois
         */
        static getLibellePeriode(uniteDuree: string, multiple: boolean): string;
        /**
         * Indique le libellé de l'unité de période en anglais pour la méthode add de momentJS
         * Exemple: M -> Mois
         */
        static getPeriodiciteForAdd(codePeriodicite: string): string;
        static getPeriodiciteByUnitePeriode(unitePeriode: string): number;
    }
    /**
     * Méthodes appelées dans la class Periodicite, elles sont externalisées afin de pouvoir faire des TU
     */
    class PeriodiciteHelper {
        static getLibellePeriodeBase(uniteDuree: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Personne {
        static getCessionRangByCode(code: string): Enum.CessionRangGarantie;
        static getRoleByCode(typeRolePersonne: string): Enum.RolePersonne;
        static getLibelleRole(typeRolePersonne: string): string;
        /**
         * Indique si une personne possède le rôle d'emprunteur sur le crédit (04, 05)
         */
        static isRoleEmprunteur(role: Enum.RolePersonne): boolean;
        static getCodeCivilite(code: string): string;
        static getSituationFamiliale(code: string): string;
        static getTypePersonne(codeTypePersonne: string): Enum.TypePersonne;
        static getCodeTypePersonne(typePersonne: Enum.TypePersonne): string;
        static getGenre(codeSexe: string): Enum.GenrePersonne;
        static getIconePersonne(typePersonne: Enum.TypePersonne, genrePersonne: Enum.GenrePersonne): string;
        static getIconePersonnePhysique(genrePersonne: Enum.GenrePersonne): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    /**
     * TODO : faire les TU !!
     */
    class Taux {
        /**
         * Arrondi un nombre avec une certaine précision
         */
        static roundDecimal(nombre: number, precision: number): number;
        /**
         * Convertit le taux
         * ex: J'ai un taux actuariel que je souhaite transformer en taux proportionnel
         * @param taux
         * @param unitePeriode
         * @param modeCalculTauxStart: Proportionnel ou Actuariel
         * @param modeCalculTauxFinal
         */
        static getTauxFromModeToMode(taux: number, unitePeriode: string, modeCalculTauxStart: Enum.ModeCalculTaux, modeCalculTauxFinal: Enum.ModeCalculTaux): number;
    }
    /**
     * Méthodes appelées dans la class taux, elles sont externalisées afin de pouvoir faire des TU
     */
    class TauxHelper {
        /**
         * Convertit le taux actuariel en un taux souhaité
         */
        static getTauxByActuariel(taux: number, periodicite: number, modeCalculTauxFinal: Enum.ModeCalculTaux): number;
        /**
         * Convertit le taux Proportionnel en un taux souhaité
         */
        static getTauxByProportionnel(taux: number, periodicite: number, modeCalculTauxFinal: Enum.ModeCalculTaux): number;
        /**
         * A partir d'un taux actuariel fourni, calcule le taux équivalent périodique
         */
        static getTauxEquivalentPeriodiqueByActuariel(tauxActuariel: number, periodicite: number): number;
        /**
         * A partir d'un taux équivalent périodique fourni, calcule le taux actuariel annuel
         */
        static getTauxActuarielByEquivalentPeriodique(tauxEquivalentPeriodique: number, periodicite: number): number;
        /**
         * A partir d'un taux proportionnel annuel fourni, calcule le taux équivalent périodique
         */
        static getTauxEquivalentPeriodiqueByProportionnel(tauxProportionnel: number, periodicite: number): number;
        /**
         * A partir d'un taux équivalent périodique fourni, calcule le taux proportionnel annuel
         */
        static getTauxProportionnelByEquivalentPeriodique(tauxEquivalent: number, periodicite: number): number;
    }
}

declare module Avenants.Commun {
    interface IPopinErreurData {
        typeErreur: MyWay.UI.TYPE_POPUP_ERREUR;
        customError: Commun.Modeles.CustomError;
    }
    class PopinErreurControleur {
        private data;
        private $modalInstance;
        static parametres: Modeles.IControleurParams;
        titre: string;
        message: string;
        stack: string;
        static $inject: Array<string>;
        constructor(data: IPopinErreurData, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        close(): void;
    }
}

declare module Avenants.Commun {
    interface IPopinRetourQrData {
        listeMessagesBloquant: Array<string>;
        listeMessagesNonBloquant: Array<string>;
    }
    class PopinRetourQrControleur {
        private data;
        private $modalInstance;
        static parametres: Modeles.IControleurParams;
        afficherFooter: boolean;
        static $inject: Array<string>;
        constructor(data: IPopinRetourQrData, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        continuer(): void;
        close(): void;
    }
}

declare module Avenants.Commun {
    class SautLigneControleur {
        static parametres: Commun.Modeles.IControleurParams;
        constructor();
    }
}

declare module Avenants.Commun {
}

declare module Avenants.Commun {
}
