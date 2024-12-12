
declare module Avenants.Commun.Constantes.Inject {
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $location: string;
        const $window: string;
        const $scope: string;
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
        const lisaService: string;
        const popinRetourQrService: string;
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
        const DATE_REST: string;
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
    /**
     * Retranscription des enchainements Lisa
     */
    module Params {
        const idCredit: string;
        const idDossier: string;
        const idPersonne: string;
        const numAvenant: string;
        const numSimulation: string;
        const dateEffet: string;
        const typeAvenant: string;
    }
    module Next {
        const rechercheToResultatEmprunteur: number;
        const resultatEmprunteurToRecherche: number;
        const resultatEmprunteurToTableauAmortissement: number;
        const resultatEmprunteurToListeAvenant: number;
        const tableauAmortissementToResultatEmprunteur: number;
        const listeAvenantToHistorique: number;
        const historiqueToListeAvenant: number;
        const listeAvenantToCreationAvenant: number;
        const listeAvenantToOuvertureAvenant: number;
        const listeAvenantToSyntheseAvenant: number;
        const listeAvenantToContractualisation: number;
        const listeAvenantToRecherche: number;
        const syntheseAvenantToTableauAmortissement: number;
        const syntheseAvenantToFin: number;
        const tableauAmortissementToSyntheseAvenant: number;
        const contractualisationToSignature: number;
        const contractualisationToEdition: number;
        const signatureToContractualisation: number;
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
        static personnelReseau: RisqueAssurance;
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
    enum CodeAvenantSimulation {
        Simulation,
        Avenant,
    }
    enum CodeTypeAcces {
        Creation,
        Ouverture,
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
        Aucun = 2,
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

declare module Avenants.Commun.Logger {
}

declare module Avenants.Commun.Logger {
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
         * @param date
         */
        static parse(date: string): Date;
        /**
         * Convertit une date en chaine de caractères
         * @param date
         * @param template: optionnale, par défaut: DD/MM/YYYY
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

declare module Avenants.Commun.Services {
    interface IPopinRetourQrService {
        popinErreur(bloquants: Array<string>, nonBloquants: Array<string>): ng.IPromise<void>;
    }
}
