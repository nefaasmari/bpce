
declare namespace ICCommon.Constantes.Inject {
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
        const $document: string;
    }
    namespace MyWay {
        const mwsfAdresseService: string;
        const modalService: string;
        const notificationService: string;
        const serviceAgent: string;
        const serviceAgentExtended: string;
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
    }
    namespace Services {
        const fichierService: string;
        const lisaService: string;
        const managePromiseService: string;
        const processusContextService: string;
        const retryRequestService: string;
    }
}

declare module ICCommon {
    var app: any;
}

declare namespace ICCommon.Controleur {
    interface IControleurParametre {
        controleurAs: string;
        controleurName: string;
        templateUrl: string;
    }
}

declare namespace ICCommon.Logger {
    class ConsoleLoggerService implements ILogger {
        private serviceAgentExtended;
        static $inject: string[];
        private loggerLevel;
        constructor(serviceAgentExtended: MyWay.Services.IServiceAgent);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private getMessage(msg);
        private canLog(level);
        private getTime();
    }
}

declare namespace ICCommon.Logger {
    class FullLoggerService implements ILogger {
        private serviceAgentExtended;
        private loggers;
        static $inject: string[];
        private loggerLevel;
        constructor(consoleLogger: ILogger, kibanaLogger: ILogger, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        canLog(level: LoggerLevel): boolean;
    }
}

declare namespace ICCommon.Logger {
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

declare namespace ICCommon.Logger {
    class MyWayLoggerService implements ILogger {
        static CLASS_NAME: string;
        private logger;
        constructor();
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private getMessage(msg);
        private getExceptions(args);
        /**
         *  Transforme une Error JS en objet car celui-ci ne peux pas être JSON.stringify
         * @param obj
         */
        private getdetailsException(obj);
    }
}

declare namespace ICCommon.Constantes {
    namespace Events {
        const eventCarriageReturn: number;
    }
}

declare namespace ICCommon.Constantes.Format {
    /** TODO: This is fonctionnality and should not be in common */
    namespace Date {
        /** DD/MM/YYYY */
        const IHM: string;
        /** YYYY-MM-DD  */
        const REST: string;
    }
}

declare namespace ICCommon.Tools {
    interface IRouteExtended extends ng.route.IRoute {
        customParam: ICustomRouteParams;
    }
    interface ICustomRouteParams {
        hasTotem: boolean;
    }
}

declare namespace ICCommon.Tools {
    abstract class RouteUtils {
        static getRouteParams<T extends ng.route.IRoute, U>(params: Controleur.IControleurParametre, routeResolve: any, extendedProperty?: U): T;
    }
}

declare namespace ICCommon.Services {
    interface IFichierService {
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, convertSpecialFlux?: boolean): ng.IPromise<void>;
        convertirFluxToTxt(fluxDonnees: string, nomDocument: string): void;
    }
    class FichierService implements IFichierService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Convertie un flux de données en document pour l'enregistrer sur le poste du conseiller
         * @param {string} fluxDonnees
         * @param {string} nomDocument
         * @param {boolean} convertSpecialFlux
         */
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, convertSpecialFlux?: boolean): ng.IPromise<void>;
        convertirFluxToTxt(fluxDonnees: string, nomDocument: string): void;
        /**
         * Permet de décoder un flux encodé dans un format spécifique et renvoit un Blob
         * @param flux
         */
        private convertSpecialFluxToBlob(flux);
    }
}

declare namespace ICCommon.Services {
    /** This service provides functions to navigate between steps ans processes passing parameters */
    interface IlisaService {
        /**
         * Go to the next step defined in lisa
         * @param outputValue outValue defined in lisadmin to navigate to processus step
         */
        next<T extends {}>(outputValue: number): ng.IPromise<void>;
        /**
         * Go to the next step defined in lisa with oject representing the lisa step output values
         * @param outPutValue
         * @param contextObject
         */
        nextWithObject<T extends {}>(outPutValue: number, contextObject: T): ng.IPromise<void>;
        /**
         * Go to the next step defined in lisa with conext key/value representing the lisa step output value
         * @param outPutValue
         * @param contextKey
         * @param contextValue
         */
        nextWithKeyValue<T>(outPutValue: number, contextKey: string, contextValue: T): ng.IPromise<void>;
    }
}

declare namespace ICCommon.Services {
    /** This service wraps the serviceAgent context service to provide evolved functions to play with the processus context */
    interface IProcessusContextService {
        /**
         * Add any object to processus context
         * @param key
         * @param object
         */
        addToContext<T>(key: string, object: T): ng.IPromise<void>;
        /**
         * Remove value of the context
         * @param key
         */
        removeFromContext(key: string): ng.IPromise<void>;
        /**
         * Remove value from main context
         * @param key
         */
        removeFromMainProcessContext(key: string): ng.IPromise<void>;
        /**
         * Add object keys as context keys and object[key] values as context values
         * @param object
         */
        addObjectKeyValueToContext<T>(object: T): ng.IPromise<void>;
        /**
         * Get element from processus context
         * @param key
         */
        getFromContext<T>(key: string): ng.IPromise<T>;
        /**
         * Get a list from context and returns it as object
         * @param obj
         */
        getObjectKeyValueFromContext<T extends {}>(obj: T): ng.IPromise<T>;
    }
}

declare namespace ICCommon.Services {
    /** This service provides functions to navigate between steps ans processes passing parameters */
    class LisaService {
        private contextService;
        private serviceAgent;
        private $q;
        static $inject: Array<string>;
        constructor(contextService: Services.IProcessusContextService, serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService);
        next<T extends {}>(outputValue: number): ng.IPromise<void>;
        nextWithObject<T extends {}>(outPutValue: number, contextObject: T): ng.IPromise<void>;
        nextWithKeyValue<T>(outPutValue: number, contextKey: string, contextValue: T): ng.IPromise<void>;
    }
}

declare namespace ICCommon.Services {
    /**
     * Utilitaires pour les promises
     */
    class ManagePromiseService {
        private $q;
        static $inject: string[];
        constructor($q: ng.IQService);
        reduceArrayOfPromise<A>(promiseArray: ng.IPromise<A>[]): ng.IPromise<A>;
    }
}

declare namespace ICCommon.Services {
    /** This service wraps the serviceAgent context service to provide evolved functions to play with the processus context */
    class ProcessusContextService implements IProcessusContextService {
        private serviceAgent;
        static $inject: Array<string>;
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        addToContext<T>(key: string, object: T): ng.IPromise<void>;
        removeFromContext(key: string): ng.IPromise<void>;
        removeFromMainProcessContext(key: string): ng.IPromise<void>;
        addObjectKeyValueToContext<T extends {}>(object: T): ng.IPromise<void>;
        getFromContext<T>(key: string): ng.IPromise<T>;
        getObjectKeyValueFromContext<T extends {}>(obj: T): ng.IPromise<T>;
        /**
         * Convert ContextKeyValueArray into object
         * ex: [[Key: name, Value:"Tarzan"],[Key: age, Value:22]] => { name: "Tarzan", age:22}
         * @param kvs
         */
        private convertContextKeyValueToObject<T>(kvs);
        /**
         * Convert an object into iContextKeyValuePair[]
         * @param o
         */
        private convertToContextKeyValue<T>(o);
    }
}

declare namespace ICCommon.Services {
    interface IRetryRequestService {
        /**
         * Permet de créer ou récupérer la retryRequest correspondant à un appel qui devrait se lancer régulièrement
         * (vérification visibilité d'un bouton, désactivation d'un bouton, etc...)
         * @param key Clé correspondant à une retryRequest précédement créée
         * @param f Méthode qui doit être exécutée
         * @param catchAction Catch à exécuter
         * @param defaultValue Valeur par défaut retournée
         */
        getRetry<T>(key: string, f: () => ng.IPromise<T>, catchAction: (er: MyWay.Services.Erreur) => void, defaultValue: T): RetryRequest<T>;
    }
    class RetryRequestService implements IRetryRequestService {
        private $q;
        private listRetries;
        static $inject: Array<string>;
        constructor($q: ng.IQService);
        getRetry<T>(key: string, f: () => ng.IPromise<T>, catchAction: (er: MyWay.Services.Erreur) => void, defaultValue: T): RetryRequest<T>;
    }
    class RetryRequest<T> {
        private key;
        private request;
        private catchAction;
        private maximumCall;
        private interval;
        private defaultValue;
        private $q;
        private _lastTimesstampCall;
        private _lastFailedCall;
        private _callSucced;
        private _getting;
        private _finalValue;
        private _countCall;
        constructor(key: string, request: () => ng.IPromise<T>, catchAction: (er: MyWay.Services.Erreur) => void, maximumCall: number, interval: number, defaultValue: T, $q: ng.IQService);
        getKey(): string;
        getValue(): T;
        private inInterval();
    }
}

declare namespace ICCommon.Tools {
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
         * @param value
         */
        static txtOuiNonMinuscule(value: boolean): string;
    }
}

declare namespace ICCommon.Tools {
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
         * Format Date non null using moment.js template
         * @param date
         * @param templateOut templateOut
         * @param templateIn if date is string, specify template
         */
        static formatNonNullDate(date: string, templateOut: string, templateIn?: string): string;
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
         * @param date date qu'on utilise comme référence du jour (ouverture dossier à une date passée)
         * @param format format de la date passé en paramètre
         */
        static getNowISOString(date?: string, format?: string): string;
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
        /**
         * Permet de convertir des mois (en nombre) en valeur string
         * info: Code récupérer immo > A voir si besoin d'adapter
         * @param dureeEnMois
         */
        static convertirMoisEntierEnAnneeMois(dureeEnMois: number): string;
        /**
         * Permet de récupérer la date du premier jour du mois, selon la date passée en paramètre
         * @param date
         * @param inputFormat
         * @param outputFormat
         */
        static getFirstDayOfMonthByDate(date: string, inputFormat?: string, outputFormat?: string): string;
        /**
         * Permet de récupérer la date du dernier jour du mois, selon la date passée en paramètre
         * @param date
         * @param inputFormat
         * @param outputFormat
         */
        static getLastDayOfMonthByDate(date: string, inputFormat?: string, outputFormat?: string): string;
    }
}

declare namespace ICCommon.Tools {
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

declare namespace ICCommon.Tools {
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

declare namespace ICCommon.Tools {
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

declare namespace ICCommon.Tools {
    class StringTools {
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
    }
}

declare namespace ICCommon.Tools {
    /**
     * Outil pour les dates
     */
    class TelephoneUtils {
        /**
         * Formatte un numéro de téléphone 0102030405
         * Retourne un numéro sous la forme 01.02.03.04.05
         * @param telephone
         */
        static formatWihDot(telephone: string): string;
    }
}
