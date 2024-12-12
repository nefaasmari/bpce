
declare namespace ContentieuxCommun.Constantes.Inject {
    namespace Angular {
        const $location: string;
        const $q: string;
        const $window: string;
        const $scope: string;
        const $timeout: string;
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
    namespace Services {
        const errorService: string;
        const habilitationsService: string;
    }
    namespace Metier {
        const entiteTitulaireUtils: string;
    }
}

declare namespace ContentieuxCommun.Constantes {
    namespace Routes {
        /**
         * "/erreur"
         */
        const erreur: string;
        const erreurLisa: number;
    }
}

declare namespace ContentieuxCommun {
    var app: any;
}

declare namespace ContentieuxCommun.Constantes {
    namespace ContentieuxHabilitations {
        const superviseur: string;
        const consultation: string;
        const gestionnaire: string;
        type Roles = "superviseur" | "consultation" | "gestionnaire";
    }
}

declare namespace ContentieuxCommun.Constantes {
    namespace ContentieuxMetier {
        const codeNatureLienEntiteTitulairePE: string;
        const codeNatureLienEntiteTitulaireProLA: string;
        const etatDossierArchive: string;
        const texteDossierArchive: string;
        const finTexteDossierArchive: string;
        const titreDossierArchive: string;
        const codeEtatCreanceDouteux: string;
        const codeEtatCreanceEchu: string;
    }
    namespace ContentieuxGeneral {
        const formatDate: string;
        const eventToucheEntree: number;
    }
}

declare namespace ContentieuxCommun.Controleur {
    interface IControleurParametre {
        controleurAs: string;
        controleurName: string;
        templateUrl: string;
    }
}

declare namespace ContentieuxCommun.Habilitations {
    class HabilitationsService implements IHabilitationsService {
        private serviceAgent;
        private $q;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.IServiceAgent, $q: ng.IQService);
        private isRoleSuperviseur();
        private isRoleConsultation();
        private isRoleGestionnaire();
        isHabilite(role: ContentieuxCommun.Constantes.ContentieuxHabilitations.Roles): MyWay.Services.IPromesse<boolean>;
    }
}

declare namespace ContentieuxCommun.Habilitations {
    interface IHabilitationsService {
    }
}

declare namespace ContentieuxCommun.Logger {
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

declare namespace ContentieuxCommun.Logger {
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

declare namespace ContentieuxCommun.Logger {
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

declare namespace ContentieuxCommun.Logger {
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

declare namespace ContentieuxCommun.Metier {
    /**
     * Tools for Créance
     */
    class CreanceUtils {
        /**
         * Retourne le code Etat de la Créance à renseigner pour l'appel de provision
         */
        static getCodeEtatCreance(codeActiviteCreance: number, codeDecheanceDuTerme: number, codePassageCreditStatutDouteux: string): string;
    }
}

declare namespace ContentieuxCommun.Metier {
    /**
     * Tools for Entité Titulaire
     */
    class EntiteTitulaireUtils {
        private static getLibelleUsage(codeUsage);
        private static getLibelleModeComposition(modeComposition);
        private static getLibelleSousModeComposition(sousModeComposition);
        /**
         * Renvoi le libellé du type d'usage de l'entité titulaire
         */
        static getLibelleTypeUsageEntiteTitulaire(codeUsage: string, modeComposition: string, sousCodeModeComposition: string): string;
    }
}

declare namespace ContentieuxCommun.Modeles {
    interface IInfoEntiteTitulaire {
        designation: string;
        idET?: number;
        domiciliation: string;
        idDomiciliation: number;
        gerePar: string;
        idGerePar: number;
        modeComposition: string;
        listePersonnesTitulaires: Array<PersonneEntiteTitulaire>;
        typeUsage: string;
    }
    type TypeRole = "Titulaire" | "Mandataire";
    class PersonneEntiteTitulaire {
        designation: string;
        titulaire: boolean;
        idPersonne: number;
        estPro: boolean;
        role: TypeRole;
        libelle: string;
        constructor(designation: string, idPersonne: number, titulaire?: boolean, estPro?: boolean);
    }
}

declare namespace ContentieuxCommun.Route {
    abstract class RouteUtils {
        static getRouteParams(params: Controleur.IControleurParametre, routeResolve: any): ng.route.IRoute;
    }
}

declare namespace ContentieuxCommun.Rules {
    interface IValidationRuleResult {
        isValid: boolean;
        messages: string[];
    }
    interface IValidationRule {
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class MaxNumberRule implements IValidationRule {
        private max;
        private numberToValidate;
        static maxnumberRuleLabel: string;
        constructor(max: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class MinMaxNumberRule implements IValidationRule {
        private min;
        private max;
        private numberToValidate;
        constructor(min: number, max: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class MinNumberRule implements IValidationRule {
        private min;
        private numberToValidate;
        static minNumberRuleLabel: string;
        constructor(min: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class ModuloNumberRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class RequiredRule<T> implements IValidationRule {
        private value;
        private maxLength;
        constructor(value: () => T | string | number, maxLength?: number);
        static requiredRuleLabel: string;
        static maxLengthRuleLabel: string;
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Rules {
    class ValidationRulesEvaluator implements IValidationRule {
        private rules;
        constructor(rules: IValidationRule[]);
        validate(): IValidationRuleResult;
    }
}

declare namespace ContentieuxCommun.Services {
    class ErrorService implements IErrorService {
        private serviceAgent;
        private modalService;
        private logger;
        static $inject: Array<string>;
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, logger: Logger.ILogger);
        handleError: (error: Error | MyWay.Services.Erreur) => CustomError;
        /**
         * Check if  the error is of type MyWay.Services.Erreur
         * @param error
         */
        private isMyWayError(error);
        /**
         * The rules for IT-CE Services is:
         * code http in 4XX are Fonctional errors
         * code http in 5XX are Technical errors
         * @param error MyWay.Services.Erreur
         */
        private handleRestError(error);
        /**
         * Handle Error of type Javascript
         * It can ppend if a code in promise.then as a JS bug, this bug will be catched by this handler
         * @param error Js Error
         */
        private handleOtherError(error);
        private displayAndRedirectIfNeeded(erreur);
        private getPopupType(type);
    }
}

declare namespace ContentieuxCommun.Services {
    type ErrorType = "Fonctionnelle" | "Technique" | "Javascript";
    interface IError extends Error {
        type: ErrorType;
    }
    class CustomError implements IError {
        type: ErrorType;
        name: string;
        message: string;
        stack: string;
        constructor(type: ErrorType, name: string, message: string, stack: string);
    }
    interface IErrorService {
        handleError(error: Error | MyWay.Services.Erreur): CustomError;
    }
}

declare namespace ContentieuxCommun.Tools {
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
         * @param template
         */
        static format(date: Date, template: string): string;
        private static minDateToNull(date);
    }
}

declare namespace ContentieuxCommun.Tools {
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

declare namespace ContentieuxCommun.Tools {
    abstract class ObjectUtils {
        constructor();
        private static obj;
        /**
         * Return an object reference that cannot be set
         * @param o
         */
        static nullToEmpty<T>(o: T): T;
    }
}

declare namespace ContentieuxCommun.Formulaire {
    var inputDirectiveScope: {
        label: string;
        suffix: string;
        name: string;
        rules: string;
        readonly: string;
        required: string;
        fieldclass: string;
        labelclass: string;
        form: string;
        focusMe: string;
        _onEnter: string;
    };
    abstract class InputDirectiveControleur {
        private $scope;
        private $timeout;
        label: string;
        required: boolean;
        readonly: boolean;
        suffix: string;
        name: string;
        focusMe: boolean;
        _onEnter: any;
        rules: Rules.IValidationRule[];
        labelclass: string;
        fieldclass: string;
        form: ng.IFormController;
        fieldClassError: string;
        labelclassRequired: string;
        errorLabel: string;
        role: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        protected focus(): void;
        protected isValid(): boolean;
        onKeyDown($event: KeyboardEvent): void;
    }
}

declare namespace ContentieuxCommun.Formulaire {
    class InputCheckboxDirectiveControleur {
        model: number;
        label: string;
        required: boolean;
        readonly: boolean;
        constructor();
    }
}

declare namespace ContentieuxCommun.Formulaire {
}

declare namespace ContentieuxCommun.Formulaire {
    class InputListboxDirectiveControleur extends InputDirectiveControleur {
        model: IListboxItem;
        source: IListboxItem[];
        rules: Rules.IValidationRule[];
        noformgroup: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
    }
}

declare namespace ContentieuxCommun.Formulaire {
}

declare namespace ContentieuxCommun.Formulaire {
    interface IListboxItem {
        value: number | string;
        label: string;
    }
    class ListBoxItem implements IListboxItem {
        value: number | string;
        label: string;
        constructor(value: number | string, label: string);
    }
}

declare namespace ContentieuxCommun.Formulaire {
    class InputNumberDirectiveControleur extends InputDirectiveControleur {
        model: string;
        decimals: number;
        noformgroup: boolean;
        maxLength: number;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
    }
}

declare namespace ContentieuxCommun.Formulaire {
}

declare namespace ContentieuxCommun.Formulaire {
    class InputStringDirectiveControleur extends InputDirectiveControleur {
        model: string;
        noformgroup: boolean;
        maxlength: number;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
    }
}

declare namespace ContentieuxCommun.Formulaire {
}
