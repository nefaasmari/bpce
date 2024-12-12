
declare module ICCommon {
    var app: any;
}

declare namespace ICCommon.Constantes {
    namespace Events {
        const eventCarriageReturn: number;
    }
}

declare namespace ICCommon.Constantes.Format {
    /** TODO: This is fonctionnality and should not be in common */
    namespace Date {
        const IHM: string;
        const REST: string;
    }
}

declare namespace ICCommon.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
        const $route: string;
        const $rootScope: string;
        const $filter: string;
        const $modalInstance: string;
    }
    namespace MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const modalService: string;
        const notificationService: string;
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
    }
    namespace Services {
        const processusContextService: string;
        const lisaService: string;
        const fichierService: string;
    }
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
        private canLog(level);
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
    class FichierService {
        private serviceAgentExtended;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Convertie un flux de données en document pour l'enregistrer sur le poste du conseiller
         * @param {string} fluxDonnees
         * @param {string} nomDocument
         */
        convertirBase64Pdf(fluxDonnees: string, nomDocument: string, identifiantDossier: string): void;
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
        getObjectKeyValueFromConext<T extends {}>(obj: T): ng.IPromise<T>;
    }
}

declare namespace ICCommon.Services {
    /** This service provides functions to navigate between steps ans processes passing parameters */
    class LisaService {
        private contextService;
        private serviceAgent;
        static $inject: Array<string>;
        constructor(contextService: Services.IProcessusContextService, serviceAgent: MyWay.Services.IServiceAgent);
        next<T extends {}>(outputValue: number): ng.IPromise<void>;
        nextWithObject<T extends {}>(outPutValue: number, contextObject: T): ng.IPromise<void>;
        nextWithKeyValue<T>(outPutValue: number, contextKey: string, contextValue: T): ng.IPromise<void>;
    }
}

declare namespace ICCommon.Services {
    /** This service wraps the serviceAgent context service to provide evolved functions to play with the processus context */
    class ProcessusContextService {
        private serviceAgent;
        static $inject: Array<string>;
        constructor(serviceAgent: MyWay.Services.IServiceAgent);
        addToContext<T>(key: string, object: T): ng.IPromise<void>;
        removeFromContext(key: string): ng.IPromise<void>;
        addObjectKeyValueToContext<T extends {}>(object: T): ng.IPromise<void>;
        getFromContext<T>(key: string): ng.IPromise<T>;
        getObjectKeyValueFromConext<T extends {}>(obj: T): ng.IPromise<T>;
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

declare namespace ICCommon.Tools {
    /**
     * Tools for dates
     */
    class DateUtils {
        /**
         * Parse a string yyyy-MM-dd to Date
         * Return null if the date is at year 1 '0001-01-01'
         * @param date
         */
        static parse(date: string, format?: string): Date;
        /**
         * Format Date using moment.js template
         * @param date
         * @param templateOut templateOut
         * @param templateIn if date is string, specify template
         */
        static format(date: Date | string, templateOut: string, templateIn?: string): string;
        private static minDateToNull(date);
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
         * Upper first letter of a string
         * @param str the string tu upper
         */
        static toFirstLetterUpper(str: string): string;
        /**
         * Checks if a string contains another substring
         * @param str The string that may contain the substring
         * @param substring The sub-string
         * @param ignoreCase Optional value indicating that the case should be ignored (default: false)
         */
        static contains(str: string, substring: string, ignoreCase?: boolean): boolean;
    }
}
