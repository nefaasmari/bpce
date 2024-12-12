
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
    }
    namespace Logger {
        const consoleLoggerService: string;
        const fullLoggerService: string;
        const myWayLoggerService: string;
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
    }
}

declare namespace ICCommon.Tools {
    class StringTools {
        /**
         * Upper first letter of a string
         * @param str the string tu upper
         */
        static toFirstLetterUpper(str: string): string;
    }
}
