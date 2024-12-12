
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
        const popinService: string;
        const lisaService: string;
    }
}

declare module Avenants.Commun {
    var app: any;
}

declare module Avenants.Commun.Constantes {
    module Donnees {
        const caisseEcureuilCredit: string;
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
    }
}

declare module Avenants.Commun.Constantes {
    module Habilitation {
        const tableauAmoitissement: string;
        const backOffice: string;
        const avenant: string;
        const avenantBis: string;
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
        const typeAvenant: string;
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
    }
    module Next {
        const finProcessusComplet: number;
        const rechercheToResultatEmprunteur: number;
        const resultatEmprunteurToRecherche: number;
        const resultatEmprunteurToTableauAmortissement: number;
        const resultatEmprunteurToListeAvenant: number;
        const tableauAmortissementToFinProcessus: number;
        const listeAvenantToHistorique: number;
        const historiqueToListeAvenant: number;
        const listeAvenantToCreationAvenant: number;
        const listeAvenantToOuvertureAvenant: number;
        const listeAvenantToSyntheseAvenant: number;
        const listeAvenantToContractualisation: number;
        const listeAvenantToRecherche: number;
        const syntheseAvenantToTableauAmortissement: number;
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
    }
}

declare module Avenants.Commun.Enum {
    /**
     * L'élement peut être de type Avenant ou Simulation
     */
    enum CodeAvenantSimulation {
        Simulation,
        Avenant,
    }
    enum CodeTypeAcces {
        Creation,
        Modification,
        Duplication,
        ListeAvenants,
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
    enum PersonneGenre {
        Homme = 0,
        Femme = 1,
        PersonneMorale = 2,
        Aucun = 3,
    }
}

declare module Avenants.Commun.Enum {
    type ErrorType = "Fonctionnelle" | "Technique" | "Javascript" | "Inconnue";
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
    interface IControleurParams {
        templateUrl: string;
        name: string;
        alias: string;
    }
}

declare module Avenants.Commun.Modeles {
    interface IRetourQR {
        messageRetour: Array<string>;
        /**
         * 0: Message info
         * 1: Message bloquant
         * 2: Message
         * 3
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
        private getMessages(listeBrute, isBloquante);
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
        handleError(error: Error | MyWay.Services.Erreur | Modeles.IRetourQRCustom): ng.IPromise<Modeles.CustomError>;
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
        showErreur(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, titre: string, message: string): ng.IPromise<void>;
        showErreurDetailMedium<U>(bloquants: Array<string>, nonBloquants: Array<string>): ng.IPromise<U>;
        showConfirmMedium<U>(libelleBtnConfirmation: string, libelleBtnFermer: string, titre: string, texte: string, iconName?: string): ng.IPromise<U>;
        showModalMedium<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
        showModalLarge<T, U>(data: T, controleurParams: Modeles.IControleurParams): ng.IPromise<U>;
    }
    class PopinService implements IPopinService {
        private modalService;
        static $inject: Array<string>;
        constructor(modalService: MyWay.UI.IModalService);
        /**
         * Popin simple avec un message d'information
         */
        showPopupMedium(titre: string, message: string): ng.IPromise<void>;
        /**
         * Popin simple avec un message d'erreur
         */
        showErreur(typeErreur: MyWay.UI.TYPE_POPUP_ERREUR, titre: string, message: string): ng.IPromise<void>;
        /**
         * Affiche une popin d'erreur en différenciant les messages bloquants et les non-bloqants
         */
        showErreurDetailMedium<U>(bloquants: Array<string>, nonBloquants: Array<string>): ng.IPromise<U>;
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
         * Convertit une date string en Date au format YYYY-MM-DD
         * @param date: string
         */
        static parse(date: string): Date;
        /**
         * Indique si la date est valorisée (non vide et valide)
         * @param date: Date
         */
        static isValued(date: Date): boolean;
        /**
         * Convertit une date en chaine de caractères
         * @param date: Date
         * @param template: optionnel, par défaut: DD/MM/YYYY
         */
        static format(date: Date, template?: string): string;
        private static minDateToNull(date);
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
         * @param precision
         */
        static numberToString(value: number, precision: number): string;
        /**
         * Indique si le nombre respecte le modulo
         * @param value
         * @param modulo
         * @param validate : optionnel, dans les cas où il ne faut pas vérifier la donnée
         */
        static isModuloRespected(value: number, modulo: number, validate?: boolean): boolean;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Assurance {
        static getRisqueByCode(code: string): Enum.RisqueAssurance;
        static getLibelleRisque(code: string, defautValue?: boolean): string;
        static getMotifDeliaisonByCode(code: string): Enum.MotifDeliaisonAssurance;
        static getLibelleTypeAssiette(codeTypeAssiette: string): string;
        static getModeCalculExhaustif(codeModeCalcul: string): Enum.ModeCalculExhaustif;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Credit {
        static getSymboleDevise(code: string): string;
        static getLibelleLongTypePhase(codeTypePhase: string): string;
        static getLibelleTypePhase(codeTypePhase: string): string;
        static getLibellePeriodicite(codePeriodicite: string): string;
        static getLibellePeriode(uniteDuree: string, multiple: boolean): string;
        private static getLibellePeriodeBase(uniteDuree);
        static getLibelleEtatCredit(libelleEtatCredit: string): string;
        static getLibelleModeTaux(modeCalculTaux: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Dossier {
        static getStatutDossier(codeEtatDossierEnGestion: string): string;
        static getLibelleOccupation(code: string): string;
        static getLibelleLongDestinationObjet(codeDestinationAutoriseeObjet: string, codeModaliteOccupation: string): string;
        static getLibelleDestinationObjet(codeDestinationAutoriseeObjet: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Garantie {
        static getClasseGarantie(classe: string): string;
    }
}

declare module Avenants.Commun.ToolsFunctionals {
    class Personne {
        static getLibelleRole(typeRolePersonne: string): string;
        static getCodeCivilite(code: string): string;
        static getSituationFamiliale(code: string): string;
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
