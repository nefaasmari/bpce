declare module MyWay.Services {
    interface ErreurCallback {
        (erreur: Erreur): void;
    }
    class Erreur {
        codeLibelle: string;
        valeurs: string[];
        error: Error;
        codeHttp: number;
        libelle: string;
        causes: Erreur[];
        constructor(codeLibelle: string, valeurs?: string[], causes?: Erreur[]);
    }
    /**
     * Fournit un contrat d'utilisation des promesses MyWay.
     *
     * Utilise le service de promesses d'AngularJS s'il est disponible ($q) et le service externe Q dans le cas contraire.
     *
     */
    interface IServiceDePromesse {
        /**
         * ~~~ts
         * var promises: MyWay.Services.IPromesse<any>[] = [];
         * promises.push(serviceAgent.Context.AddToContext('foo', 'toto'));
         * promises.push(serviceAgent.Context.AddToContext('bar', "titi"));
         * MyWay.Services.Promesses.ServiceDePromesse.all(promises).then(() => {
         *     // actions à effectuer si les 2 promesses sont tenues
         *     ...
         * });
         * ~~~
         */
        all<T>(promises: IPromesse<T>[]): IPromesse<T[]>;
        all<T>(promises: any[]): IPromesse<T[]>;
        /**
         * Créé un objet permettant de valider ou rejeter la promesse demandée.
         *
         * ~~~ts
         * var deferred: IDeferred<string> = Promesses.ServiceDePromesse.defer<string>();
         * this.SendMessage(
         *     "GetFromContext",
         *     { key: key },
         *     (value: string) => { deferred.resolve(value); },
         *     (error?: Erreur) => { deferred.reject(error); }
         * );
         * return deferred.promise;
         * ~~~
         */
        defer<T>(erreurCallback?: ErreurCallback): IDeferred<T>;
        /**
         * Retourne une promesse qui est rejetée avec comme raison le paramètre passé.
         *
         */
        reject<T>(reason?: Erreur): IPromesse<T>;
        /**
         * Encapsule un objet qui peut être soit une valeur soit une promesse "chainable" dans une promesse $q ou Q.
         *
         * Cela peut être utile lorsque on a affaire à un objet qui peut (ou ne pas) être une promesse, ou si la promesse provient d'une source qui ne peut pas être certifiée.
         */
        when<T>(value: T): IPromesse<T>;
    }
    interface IPromesse<T> {
        /**
         * La méthode "then" fournit les callbacks qui recoivent
         *
         * - soit la valeur actuelle (ou éventuelle) d'une promesse (fulfill),
         *
         * - soit la raison pour laquelle cette promesse ne peut pas être tenue (reject).
         *
         * ~~~ts
         *serviceAgent.Context.GetFromContext('toto').then((value: string) => {
         *    // traitement du retour de promesse tenue (value)
         *    ...
         * });
         * ~~~
         *
         */
        then<TResult>(onFulfill: (value: T) => IPromesse<TResult> | TResult, onReject?: (reason: Erreur) => any, onProgress?: Function): IPromesse<TResult>;
        then<TResult>(onFulfill: (value: T) => IPromesse<TResult> | TResult, onReject?: (reason: Erreur) => TResult, onProgress?: Function): IPromesse<TResult>;
        /**
         * Cette méthode est un alias du callback "onReject" de la méthode "then": promise.then(null, errorCallback)
         *
         * ~~~ts
         * serviceAgent.Context.GetFromContext('toto').then((value: string) => {
         *     // traitement du retour de promesse tenue
         *     ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *     // traitement du retour de promesse non tenue (erreur)
         *     ...
         * });
         * ~~~
         */
        catch<TResult>(onRejected: (reason: Erreur) => IPromesse<TResult> | TResult): IPromesse<TResult>;
        /**
         * Permet d'observer le succès ou le rejet d'une promesse, mais sans modifier la valeur finale.
         *
         * Cette méthode est utile pour libérer des resources ou effectuer un nettoyage peu importe le résultat de la promesse.
         *
         * ~~~ts
         * serviceAgent.Context.GetFromContext('toto').then((value: string) => {
         *     // traitement du retour de promesse tenue
         *     ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *     // traitement du retour de promesse non tenue (erreur)
         *     ...
         * }).finally(() => {
         *     // cleanup
         *     serviceAgent.Dispose();
         *     serviceAgent = null;
         * });
         * ~~~
         */
        finally(finallyCallback: () => any): IPromesse<T>;
    }
    /**
     * Objet retourné par la méthode "defer" permettant de valider ou rejeter la promesse demandée.
     */
    interface IDeferred<T> {
        /**
         * Cette méthode controle l'état de la propriété "promise" dans le cas où la promesse est tenue.
         *
         * Dans le cas où une promesse est tenue, sa résolution est permanente et ne peut pas être résolue une seconde fois.
         *
         * ~~~ts
         * var deferred: IDeferred<string> = Promesses.ServiceDePromesse.defer<string>();
         * this.SendMessage(
         *     "GetFromContext",
         *     { key: key },
         *     (value: string) => {
         *         deferred.resolve(value);
         *     },
         *     null
         * );
         * return deferred.promise;
         * ~~~
         */
        resolve(value?: T): void;
        /**
         * Cette méthode controle l'état de la propriété "promise" dans le cas où la promesse n'est pas tenue.
         *
         * On peut donner une raison de refus lors de l'appel à cette méthode. Dans notre cas une raison de type "Erreur".
         *
         * ~~~ts
         * var deferred: IDeferred<string> = Promesses.ServiceDePromesse.defer<string>();
         * this.SendMessage(
         *     "GetFromContext",
         *     { key: key },
         *     (value: string) => {
         *         deferred.resolve(value);
         *     }, // resolve
         *     (error?: Erreur) => {
         *         deferred.reject(error);
         *     }
         * );
         * return deferred.promise;
         * ~~~
         */
        reject(reason?: Erreur): void;
        /**
         * L'appel à cette méthode avec une valeur va notifier la promesse de cette valeur.
         *
         * Tout handler de type "onProgress" abonné à notre promesse réceptionnera cette valeur de progression (ou d'état).
         *
         */
        notify(state?: any): void;
        promise: IPromesse<T>;
    }
    class MonServiceDePromesse implements IServiceDePromesse {
        private innerService;
        lastReason: Erreur;
        constructor(innerService: IServiceDePromesse);
        all<T>(promises: IPromesse<T>[]): IPromesse<T[]>;
        all<T>(promises: any[]): IPromesse<T[]>;
        defer<T>(erreurCallback?: ErreurCallback): IDeferred<T>;
        reject<T>(reason?: Erreur): IPromesse<T>;
        when<T>(value: T): IPromesse<T>;
    }
    class MaPromesse<T> implements IPromesse<T> {
        private innerPromesse;
        private erreurCallback;
        lastReason: Erreur;
        private _catchHappened;
        constructor(innerPromesse: IPromesse<T>, erreurCallback: ErreurCallback);
        then<TResult>(onFulfill: (value: T) => IPromesse<TResult>, onReject?: (reason: Erreur) => any, onProgress?: Function): IPromesse<TResult>;
        then<TResult>(onFulfill: (value: T) => IPromesse<TResult>, onReject?: (reason: Erreur) => TResult, onProgress?: Function): IPromesse<TResult>;
        then<TResult>(onFulfill: (value: T) => TResult, onReject?: (reason: Erreur) => TResult, onProgress?: Function): IPromesse<TResult>;
        catch<TResult>(onRejected: (reason: Erreur) => TResult): IPromesse<TResult>;
        catch<TResult>(onRejected: (reason: Erreur) => IPromesse<TResult>): IPromesse<TResult>;
        finally(finallyCallback: () => any): IPromesse<T>;
    }
    class MonDeferred<T> implements IDeferred<T> {
        private innerDeferred;
        private erreurCallback;
        promesse: MaPromesse<T>;
        constructor(innerDeferred: IDeferred<T>, erreurCallback: ErreurCallback);
        resolve: (value?: T) => void;
        reject: (reason?: Erreur) => void;
        notify: (state?: any) => void;
        promise: IPromesse<T>;
    }
    class Promesses {
        private static ServiceDePromesse;
        private static promesseSelfResolved;
        static getServiceDePromesse(): IServiceDePromesse;
        static getPromesseSelfResoved(): IPromesse<void>;
        static createPromiseSelfResolved<T>(pValue?: T): IPromesse<T>;
        static createPromiseSelfError<T>(pError: Erreur): IPromesse<T>;
        static promesseTryCatch<T>(pCallback: (pDefer: IDeferred<T>) => any, pCallbackErreur?: (pErreur: Erreur, pDefer: IDeferred<T>) => any): IPromesse<T>;
        promesseTryCatch<T>(pCallback: (pDefer: IDeferred<T>) => any, pCallbackErreur?: (pErreur: Erreur, pDefer: IDeferred<T>) => any): IPromesse<T>;
        static executePromisesSequentially(pPromises: Array<() => IPromesse<any>>): IPromesse<void>;
        static executePromisesSimultaneous(pPromises: Array<IPromesse<any>>): IPromesse<void>;
        static all<T>(pPromises: Array<IPromesse<T>>): IPromesse<T[]>;
        static executePromisesSimultaneousAndWaitAllResolves(pPromises: Array<IPromesse<any>>): IPromesse<void>;
    }
}

declare module MyWay.Services.Loggers {
    interface IConfig {
        appenders: IConfigAppender[];
        loggers: IConfigLogger[];
    }
    interface IConfigAppender {
        type: string;
        level: LEVEL;
        class: string;
        config: any;
    }
    interface IConfigLogger {
        name: string;
        level: LEVEL;
        appenders: string[];
    }
    interface ILogger {
        debug: (pMessage: string, ...arguments: any[]) => void;
        info: (pMessage: string, ...arguments: any[]) => void;
        warn: (pMessage: string, ...arguments: any[]) => void;
        error: (pMessage: string, ...arguments: any[]) => void;
        tracer: (ILoggerWithContext: any) => void;
    }
    enum LEVEL {
        DEBUG,
        INFO,
        WARN,
        ERROR,
        NONE
    }
    interface IAppender {
        name: string;
        level: LEVEL;
        class: string;
        append(pMessage: ILoggerWithContext): boolean;
        getConfig: () => any;
    }
    interface ILoggerCategorie {
        name: string;
        level: LEVEL;
        appenders: IAppender[];
    }
    interface IConsoleAppenderConfig {
        format: string;
    }
    interface IFormater {
        format(pMessage: ILoggerWithContext): string;
    }
    interface ILoggerWithContext {
        packageName: string;
        niveau: LEVEL;
        message: string;
        arguments: any[];
        date: number;
        context: {
            [key: string]: any;
        };
    }
}
declare module MyWay.Services.Loggers {
    interface IClass {
        new (pNom: string, level: LEVEL, config: any): any;
    }
    class LoggerFactory {
        static LOGGER_PORTAIL: string;
        static LOGGER_AGENTS: string;
        isInit: boolean;
        private LOGGER_ACTUEL;
        static _INSTANCE: LoggerFactory;
        private appenders;
        private waitingAppenders;
        static INSTANCE: LoggerFactory;
        constructor();
        declareAppender(pClassPath: string, appenderClass: any): void;
        private getClassByName;
        getClass(pClass: string): ILogger;
        private addAppender;
        private addLogger;
        private appenderToConfigAppender;
        private loggerToConfigLogger;
        private rechargerConfigurationsLoggers;
        setConfigActual(pConfig: IConfig): void;
        setConfigDB(pNom: string, pConfig: IConfig): void;
        getConfigurationActual(): IConfig;
        getConfigurationDB(pNom: string): IConfig;
        saveConfiguration(pNom: string): void;
        loadConfiguration(pNom?: string): void;
        getNomConfigActuelle(): string;
        getAllLogggersNames(): string[];
        supprimerConfiguration(pNom: string): void;
        clearConfigurations(): void;
    }
}
declare module MyWay.Services.Loggers {
    var appenders: IAppender[];
    var categories: ILoggerCategorie[];
    var loggers: Logger[];
    var loggersParNom: {
        [key: string]: ILogger;
    };
    class LoggerHelper {
        static _INSTANCE: LoggerHelper;
        static INSTANCE: LoggerHelper;
        testLevel(pLevelMessage: LEVEL, pLevelSortie: LEVEL): boolean;
        getAppenders(pPackageName: string): {
            appender: IAppender;
            levelMin: LEVEL;
        }[];
        getContext(): {
            [key: string]: any;
        };
    }
}
declare module MyWay.Services.Loggers {
    class Logger implements ILogger {
        private packageName;
        private levelMinimum;
        private appenders;
        private _cache;
        constructor(classe: string);
        private internalLog;
        tracer(pTrace: ILoggerWithContext): void;
        debug(pMessage: string, ...args: any[]): void;
        info(pMessage: string, ...args: any[]): void;
        warn(pMessage: string, ...args: any[]): void;
        error(pMessage: string, ...args: any[]): void;
        verifierNiveauMinimum(): void;
        private clearCache;
    }
}
declare module MyWay.Services.Loggers {
    class MDC {
        private mdc;
        private stringify;
        static _INSTANCE: MDC;
        static INSTANCE: MDC;
        setValue(pCle: string, pValeur: any): void;
        getValue(pCle: string): any;
        remove(pCle: string): void;
        getAll(): {
            [key: string]: any;
        };
    }
}
declare module MyWay.Services.Loggers {
    class FLASH {
        private flash;
        static _INSTANCE: FLASH;
        static INSTANCE: FLASH;
        setValue(pCle: string, pValeur: any): void;
        getValue(pCle: string): any;
        setAll(pFlashs: {
            [key: string]: any;
        }): void;
        getAll(): {
            [key: string]: any;
        };
    }
}
declare module MyWay.Services.Loggers.Appenders {
    class AbstractAppender implements IAppender {
        name: string;
        level: LEVEL;
        private config;
        class: string;
        constructor(name: string, pClass: string, level: LEVEL, config: any);
        getConfig(): any;
        append(pMessage: ILoggerWithContext): boolean;
        protected onAppend(pMessage: ILoggerWithContext): void;
    }
}
declare module MyWay.Services.Loggers.Appenders {
    class ConsoleAppender extends AbstractAppender {
        static CLASSNAME: string;
        private format;
        constructor(pNom: string, level: LEVEL, config: IConsoleAppenderConfig);
        onAppend(pMessage: ILoggerWithContext): void;
        private parse;
    }
}
declare module MyWay.Services.Loggers {
    class WaitingAppender extends Appenders.AbstractAppender {
        static CLASSNAME: string;
        private internalAppender;
        private messagesEnAttente;
        constructor(name: string, level: LEVEL, config: any);
        setInternalAppender(pClass: IClass): void;
        onAppend(pMessage: ILoggerWithContext): boolean;
    }
}
declare module MyWay.Services.Loggers.Formaters {
    class DateFormater implements IFormater {
        private formatter;
        constructor(pConfig?: string);
        format(pMessage: ILoggerWithContext): string;
        private parse;
    }
}
declare module MyWay.Services.Loggers.Formaters {
    class MessageFormater implements IFormater {
        format(pMessage: ILoggerWithContext): string;
    }
}
declare module MyWay.Services.Loggers.Messages {
    var NOM_BIBLIOTHEQUE: string;
    enum TYPE {
        GET_CONFIG_ACTUAL,
        SET_CONFIG_ACTUAL,
        GET_CONFIG_DB,
        SET_CONFIG_DB,
        SAVE_CONFIG,
        LOAD_CONFIG,
        GET_LOGGERS,
        GET_NOM_CONFIG_ACTUELLE,
        IS_CLASS_EXISTS,
        RESET
    }
    interface IGetConfigDBRequest {
        nom: string;
    }
    interface IGetConfigDBResponse {
        config: IConfig;
    }
    interface IGetConfigActualResponse {
        config: IConfig;
    }
    interface IGetLoggersResponse {
        loggers: string[];
    }
    interface ISetConfigDBRequest {
        nom: string;
        config: IConfig;
    }
    interface ISetConfigActualRequest {
        config: IConfig;
    }
    interface ILoadConfigRequest {
        nom: string;
    }
    interface ISaveConfigRequest {
        nom: string;
    }
    interface IGetNomConfigActuelleResponse {
        nom: string;
    }
    interface IIsClassExistsRequest {
        nom: string;
    }
    interface IIsClassExistsResponse {
        isExists: boolean;
    }
}
declare module MyWay.Services.Loggers {
    function loggerToTrace(pLogger: ILogger): any;
}

declare module MyWay {
    /**
     * Informations statiques du Socle Technique Client
     */
    class Framework {
        /**
         * Nom actuel du Socle Technique Client, utilisé dans les traces.
         * @type {string}
         */
        static NAME: string;
        /**
         * Version actuelle du Socle Technique Client, utilisé dans les traces.
         * @type {string}
         */
        static VERSION: string;
        /**
         * Informations sur le build TFS ayant généré cette version du Socle Technique Client
         * @type {string}
         */
        static BUILD: string;
    }
}
declare module MyWay.Services.Core {
    var override: <T, R>(pClass: {
        new (): T;
        prototype: any;
    }, pMethodeName: string, pContent: (pInstance: T, pOldMethod: any) => any) => void;
    interface IGetterSetter<P> {
        get?: () => P;
        set?: (a: P) => void;
    }
    var defineProperty: <P>(pClass: {
        new (...args: any[]): any;
        prototype: any;
    }, pProperty: string, pGetterSetter: IGetterSetter<P>) => void;
}
declare module MyWay.Services.Context {
    enum ScopeType {
        View = 1,
        Root = 2,
        Service = 3
    }
}
declare module MyWay.Services.Components {
    interface IAbstractRegistryClass {
        new (): AbstractRegistry<any, any, any>;
    }
    enum RegistryType {
    }
    abstract class AbstractRegistry<TClass extends IComponentConstructor<TInstance>, TInstance extends IComponent, TLibrary extends ILibraryBase> {
        protected _components: TClass[];
        private _registryType;
        private _dependencies;
        protected _componentsInstances: TInstance[];
        protected _componentsInstancesByKey: {
            [key: number]: TInstance;
        };
        protected _dependenciesInstances: Array<AbstractRegistry<IComponentConstructor<IComponent>, IComponent, ILibraryBase>>;
        constructor(pRegistryType: RegistryType, pDependencies: Array<RegistryType>);
        register(pComponent: TClass): void;
        components: TClass[];
        reset(): void;
        getComponentInstance(pName: ComponentType): TInstance;
        getComponentsInstances(): TInstance[];
        getLibrary(): TLibrary;
        registryType: RegistryType;
        init(pComponent: Components.ComponentType): IPromesse<void>;
        private createInstances;
        dependencies: Array<RegistryType>;
        dependenciesInstances: Array<AbstractRegistry<IComponentConstructor<IComponent>, IComponent, ILibraryBase>>;
        protected abstract initializeComponent(pComponent: TInstance): IPromesse<void>;
        dispose(): IPromesse<void>;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
    }
    interface IComponentConstructor<TClassInstance> {
        new (): TClassInstance;
    }
    interface IComponent {
        dispose(): IPromesse<void>;
        name: ComponentType;
    }
    interface IComponentConnected<MessageType extends IMessage<any, any>> extends IComponent {
        reception<ResponseType>(pMessage: MessageType): IPromesse<ResponseType>;
    }
    interface ILibraryBase {
    }
    interface IMessage<SubjectType, MessageType> {
        subject: SubjectType;
        message: MessageType;
        iframe: Window;
    }
    interface IComponentCommonConstructor extends IComponentConstructor<IComponentCommon> {
    }
    interface IComponentCommon extends IComponent {
        init(pLibraryCommon: ILibraryCommon): IPromesse<void>;
    }
    interface ILibraryCommon extends ILibraryBase {
    }
}
declare module MyWay.Services.Components {
    class FactoryRegistries {
        private static INSTANCE;
        private static CLASS_NAME;
        private static logger;
        static getInstance(): FactoryRegistries;
        private registries;
        private registriesByKeys;
        private dependencies;
        private reorderRegistries;
        private reorderComponents;
        init(): IPromesse<void>;
        private injectDependencies;
        dispose(): IPromesse<void>;
        addRegistry(pRegistry: AbstractRegistry<any, any, any>): void;
        declareComponent(pComponent: ComponentType, pDependencies: ComponentType[]): void;
        getRegistryInstance<T extends AbstractRegistry<any, any, any>>(pRegistryType: RegistryType): T;
    }
}
declare module MyWay.Services.Components {
    enum RegistryType {
        COMMON = 0
    }
    class RegistryCommon extends AbstractRegistry<IComponentCommonConstructor, IComponentCommon, ILibraryCommon> {
        private static instance;
        constructor();
        static getInstance(): RegistryCommon;
        protected initializeComponent(pComponent: IComponentCommon): IPromesse<void>;
    }
}
declare module MyWay.Services.Components {
    abstract class ComponentBase implements Components.IComponent {
        private _name;
        private static CLASS_NAMEBase;
        private static loggerBase;
        constructor(_name: ComponentType);
        abstract dispose(): IPromesse<void>;
        name: ComponentType;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Controle = 0
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Controle {
    enum ControleMessageSubject {
    }
    interface IControleMessageContent {
    }
    interface IControleMessage extends Components.IMessage<ControleMessageSubject, IControleMessageContent> {
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle du type any (classe utilisée depuis les managers)
    * @classe StaticAnyControle
    * fonction : isNotUndefinedAndNotNull – public - Permet de contrôler que le paramètre en entrée n'est ni null ni undefined
    */
    class StaticAnyControle {
        /**
        * Contrôle que le paramètre en entrée n'est ni undefined ni null
        * @param value {any} valeur à contrôler
        */
        static isNotUndefinedAndNotNull(value: any): boolean;
    }
    /**
    * Classe de contrôle du type any (classe utilisée depuis les agents)
    * @classe AnyControle
    * fonction : isNotUndefinedAndNotNull – public - Permet de contrôler que le paramètre en entrée n'est ni null ni undefined
    */
    class AnyControle {
        /**
        * Contrôle que le paramètre en entrée n'est ni undefined ni null
        * @param value {any} valeur à contrôler
        */
        isNotUndefinedAndNotNull(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des tableaux (classe utilisée depuis les managers)
    * @classe StaticArrayControle
    * fonction : isArray – public - Contrôle que le paramètre en entrée est un tableau,
    */
    class StaticArrayControle {
        /**
        * Contrôle que le paramètre en entrée est un tableau
        * @param value {any} valeur à contrôler
        */
        static isArray(value: any): boolean;
    }
    /**
    * Classe statique de contrôle des tableaux (classe utilisée depuis les agents)
    * @classe ArrayControle
    * fonction : isArray – public - Contrôle que le paramètre en entrée est un tableau
    */
    class ArrayControle {
        /**
        * Contrôle que le paramètre en entrée est un tableau
        * @param value {any} valeur à contrôler
        */
        isArray(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle du type any (classe utilisée depuis les managers)
    * @classe StaticDateControle
    * fonction : isDate – public - Contrôle que le paramètre en entrée est une date
    */
    class StaticDateControle {
        /**
        * Contrôle que le paramètre en entrée est une date
        * @param value {any} valeur à contrôler
        */
        static isDate(value: any): boolean;
    }
    /**
    * Classe de contrôle du type any (classe utilisée depuis les agents)
    * @classe DateControle
    * fonction : isDate – public - Contrôle que le paramètre en entrée est une date
    */
    class DateControle {
        /**
        * Contrôle que le paramètre en entrée est une date
        * @param value {any} valeur à contrôler
        */
        isDate(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des enum (classe utilisée depuis les managers)
    * @classe StaticEnumControle
    * fonction : isAnEnumValueOrNullOrUndefined - public - Contrôle que la valeur est bien une valeur de l'enum ou null ou undefined
    * fonction : isAnEnumValue – public - Contrôle que la valeur est bien une valeur de l'enum
    * fonction : isAnEnumMember – public - Contrôle que le membre est bien un membre de l'enum
    */
    class StaticEnumControle {
        /**
        * Contrôle que la valeur est bien une valeur de l'enum ou null ou undefined
        * @param value {any} valeur à contrôler
        * @param enumObject {any} l'enum
        */
        static isAnEnumValueOrNullOrUndefined(value: any, enumObject: any): boolean;
        /**
        * Contrôle que la valeur est bien une valeur de l'enum
        * @param value {any} valeur à contrôler
        * @param enumObject {any} l'enum
        */
        static isAnEnumValue(value: any, enumClass: any): boolean;
        /**
        * Contrôle que le membre est bien un membre de l'enum
        * @param member {any} membre à contrôler
        * @param enumObject {any} l'enum
        */
        static isAnEnumMember(member: any, enumClass: any): boolean;
    }
    /**
    * Classe de contrôle des enum (classe utilisée depuis les agents)
    * @classe EnumControle
    * fonction : isAnEnumValueOrNullOrUndefined - public - Contrôle que la valeur est bien une valeur de l'enum ou null ou undefined
    * fonction : isAnEnumValue – public - Contrôle que la valeur est bien une valeur de l'enum
    * fonction : isAnEnumMember – public - Contrôle que le membre est bien un membre de l'enum
    */
    class EnumControle {
        /**
        * Contrôle que la valeur est bien une valeur de l'enum ou null ou undefined
        * @param value {any} valeur à contrôler
        * @param enumObject {any} l'enum
        */
        isAnEnumValueOrNullOrUndefined(value: any, enumObject: any): boolean;
        /**
        * Contrôle que la valeur est bien une valeur de l'enum
        * @param value {any} valeur à contrôler
        * @param enumObject {any} l'enum
        */
        isAnEnumValue(value: any, enumObject: any): boolean;
        /**
        * Contrôle que le membre est bien un membre de l'enum
        * @param member {any} membre à contrôler
        * @param enumObject {any} l'enum
        */
        isAnEnumMember(member: any, enumObject: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des fonctions (classe utilisée depuis les managers)
    * @classe StaticFunctionControle
    * fonction : isFunction – public - Contrôle que le paramètre en entrée est une fonction
    * fonction : isFunctionOrNull – public - Contrôle que le paramètre en entrée est une fonction ou null
    */
    class StaticFunctionControle {
        /**
        * Contrôle que le paramètre en entrée est une fonction
        * @param value {any} valeur à contrôler
        */
        static isFunction(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une fonction ou null
        * @param value {any} valeur à contrôler
        */
        static isFunctionOrNull(value: any): boolean;
    }
    /**
    * Classe de contrôle des fonctions (classe utilisée depuis les agents)
    * @classe FunctionControle
    * fonction : isFunction – public - Contrôle que le paramètre en entrée est une fonction
    * fonction : isFunctionOrNull – public - Contrôle que le paramètre en entrée est une fonction ou null
    */
    class FunctionControle {
        /**
        * Contrôle que le paramètre en entrée est une fonction
        * @param value {any} valeur à contrôler
        */
        isFunction(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une fonction ou null
        * @param value {any} valeur à contrôler
        */
        isFunctionOrNull(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des nombres (classe utilisée depuis les managers)
    * @classe StaticNumberControle
    * fonction : isNumber – public - Contrôle que le paramètre en entrée est un nombre
    * fonction : isInt – public - Contrôle que le paramètre en entrée est un nombre entier
    */
    class StaticNumberControle {
        /**
        * Contrôle que le paramètre en entrée est un nombre
        * @param value {any} valeur à contrôler
        */
        static isNumber(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un nombre entier
        * @param value {any} valeur à contrôler
        */
        static isInt(value: any): boolean;
    }
    /**
    * Classe de contrôle des nombres (classe utilisée depuis les managers)
    * @classe NumberControle
    * fonction : isNumber – public - Contrôle que le paramètre en entrée est un nombre
    * fonction : isInt – public - Contrôle que le paramètre en entrée est un nombre entier
    */
    class NumberControle {
        /**
        * Contrôle que le paramètre en entrée est un nombre
        * @param value {any} valeur à contrôler
        */
        isNumber(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un nombre entier
        * @param value {any} valeur à contrôler
        */
        isInt(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique permettant d'appliquer un contrôle sur les objets (classe utilisée depuis les managers)
    * @classe StaticObjectControle
    * fonction : isObject – public - Contrôle que le paramètre en entrée est un objet de type Object
    * fonction : isObjectOrNull – public - Contrôle que le paramètre en entrée est un objet ou null
    * fonction : isObjectOrNullOrUndefined – public - Contrôle que le paramètre en entrée est un objet ou null ou undefined
    * fonction : isObjectSpecified – public - Contrôle que le paramètre en entrée est un objet correspondant au type spécifié
    */
    class StaticObjectControle {
        /**
        * Contrôle que le paramètre en entrée est un objet de type Object
        * @param value {any} valeur à contrôler
        */
        static isObject(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet ou null
        * @param value {any} valeur à contrôler
        */
        static isObjectOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        static isObjectOrNullOrUndefined(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet correspondant au type spécifié
        * @param value {any} valeur à contrôler
        * @param objectType {string} type auquel doit correspondre la valeur
        */
        static isObjectSpecified(value: any, objectType: string): boolean;
    }
    /**
    * Classe permettant d'appliquer un contrôle sur les objets (classe utilisée depuis les agents)
    * @classe ObjectControle
    * fonction : isObject – public - Contrôle que le paramètre en entrée est un objet de type Object
    * fonction : isObjectOrNull – public - Contrôle que le paramètre en entrée est un objet ou null
    * fonction : isObjectOrNullOrUndefined – public - Contrôle que le paramètre en entrée est un objet ou null ou undefined
    * fonction : isObjectSpecified – public - Contrôle que le paramètre en entrée est un objet correspondant au type spécifié
    */
    class ObjectControle {
        /**
        * Contrôle que le paramètre en entrée est un objet de type Object
        * @param value {any} valeur à contrôler
        */
        isObject(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet ou null
        * @param value {any} valeur à contrôler
        */
        isObjectOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        isObjectOrNullOrUndefined(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est un objet correspondant au type spécifié
        * @param value {any} valeur à contrôler
        * @param objectType {string} type auquel doit correspondre la valeur
        */
        isObjectSpecified(value: any, objectType: string): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des chaines de caractères (classe utilisée depuis les managers)
    * @classe StaticStringControle
    * fonction : isString – public - Contrôle que le paramètre en entrée est une chaine de caractères
    * fonction : isStringOrNull – public - Contrôle que le paramètre en entrée est une chaine de caractères ou null
    * fonction : isStringOrNullOrUndefined – public - Contrôle que le paramètre en entrée est une chaine de caractères ou null ou undefined
    * fonction : isStringNotEmpty – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide
    * fonction : isStringNotEmptyOrNull – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null
    * fonction : isStringNotEmptyOrNullOrUndefined – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null ou undefined
    * fonction : isStringNotEmptyOrNullOrUndefined – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null ou undefined
    * fonction : isType - public - Contrôle que le paramètre [value] en entrée est correspond bien au [type] passé en paramètre
    */
    class StaticStringControle {
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères
        * @param value {any} valeur à contrôler
        */
        static isString(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères ou null
        * @param value {any} valeur à contrôler
        */
        static isStringOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        static isStringOrNullOrUndefined(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide
        * @param value {any} valeur à contrôler
        */
        static isStringNotEmpty(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null
        * @param value {any} valeur à contrôler
        */
        static isStringNotEmptyOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        static isStringNotEmptyOrNullOrUndefined(value: any): boolean;
    }
    /**
    * Classe de contrôle des chaines de caractères (classe utilisée depuis les agents)
    * @classe StringControle
    * fonction : isString – public - Contrôle que le paramètre en entrée est une chaine de caractères
    * fonction : isStringOrNull – public - Contrôle que le paramètre en entrée est une chaine de caractères ou null
    * fonction : isStringOrNullOrUndefined – public - Contrôle que le paramètre en entrée est une chaine de caractères ou null ou undefined
    * fonction : isStringNotEmpty – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide
    * fonction : isStringNotEmptyOrNull – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null
    * fonction : isStringNotEmptyOrNullOrUndefined – public - Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null ou undefined
    */
    class StringControle {
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères
        * @param value {any} valeur à contrôler
        */
        isString(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères ou null
        * @param value {any} valeur à contrôler
        */
        isStringOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        isStringOrNullOrUndefined(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide
        * @param value {any} valeur à contrôler
        */
        isStringNotEmpty(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null
        * @param value {any} valeur à contrôler
        */
        isStringNotEmptyOrNull(value: any): boolean;
        /**
        * Contrôle que le paramètre en entrée est une chaine de caractères non vide ou null ou undefined
        * @param value {any} valeur à contrôler
        */
        isStringNotEmptyOrNullOrUndefined(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle des booléens (classe utilisée depuis les managers)
    * @classe StaticBooleanControle
    * fonction : isBoolean – public - Contrôle que le paramètre en entrée est un booléen
    */
    class StaticBooleanControle {
        /**
        * Contrôle que le paramètre en entrée est un booléen
        * @param value {any} valeur à contrôler
        */
        static isBoolean(value: any): boolean;
    }
    /**
    * Classe de contrôle des booléens (classe utilisée depuis les agents)
    * @classe BooleanControle
    * fonction : isBoolean – public - Contrôle que le paramètre en entrée est un booléen
    */
    class BooleanControle {
        /**
        * Contrôle que le paramètre en entrée est un booléen
        * @param value {any} valeur à contrôler
        */
        isBoolean(value: any): boolean;
    }
}
declare module MyWay.Services.Controle {
    /**
    * Classe statique de contrôle de parametres (classe utilisée depuis les managers)
    * @classe StaticParametresControle
    * fonction : checkParameters – public - Permet de contrôler un ensemble de paramétres
    */
    class StaticParametresControle {
        /**
        * Permet de contrôler un ensemble de paramétres
        * Retourne une chaine de caractères correspondant à la description de l'ensemble des erreurs rencontrées (séparées par '/')
        * Si tous les contrôles sont OK, la chaine retournée est vide
        * @param parametres {parametre[]} Tableau de parametres à contrôler
        */
        static checkParameters(parametres: Parametre[]): string;
    }
    /**
    * Interface permettant de définir un paramétre à contrôler
    * @interface Controle.Parametre
    */
    interface Parametre {
        name: string;
        value: any;
        controle: CONTROLES;
        enumObject?: any;
        enumName?: any;
        objectType?: string;
    }
    /**
    * Enumération correspondant aux différents contrôles applicables sur une valeur
    * @enum Controle.CONTROLES
    */
    enum CONTROLES {
        isNotUndefinedAndNotNull = 0,
        isArray = 100,
        isBoolean = 200,
        isDate = 300,
        isAnEnumValue = 400,
        isAnEnumMember = 401,
        isAnEnumValueOrNullOrUndefined = 402,
        isFunction = 500,
        isFunctionOrNull = 501,
        isNumber = 600,
        isInt = 601,
        isObject = 700,
        isObjectOrNull = 701,
        isObjectOrNullOrUndefined = 702,
        isObjectSpecified = 703,
        isString = 800,
        isStringOrNull = 801,
        isStringOrNullOrUndefined = 802,
        isStringNotEmpty = 803,
        isStringNotEmptyOrNull = 804,
        isStringNotEmptyOrNullOrUndefined = 805
    }
}
declare module MyWay.Services.Message {
    interface ResponseCallback {
        (event: MessageEvent, callbackContent: any, error: Erreur): void;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Message = 1
    }
}
declare module MyWay.Services {
    interface IServiceAgentInitialisation {
        codeApplication: string;
        onGlobalError?: ErreurCallback;
        onNotification?: (notification: NotificationMessage, serviceAgent?: IServiceAgent) => void;
        disableGetStepInfo?: boolean;
        scopeType?: Context.ScopeType;
        /**
         * Attribut permettant la désactivation de la sauvegarde du scope
         *
         * Si disableScopeSave est à true ou n'est pas renseigné, la sauvegarde du scope ne s'effectue pas
         *
         * Si disableScopeSave est à false, la sauvegarde du scope s'effectue
         *
         * @type {boolean}
         */
        disableScopeSave?: boolean;
        donneesScopeASauvegarder?: string[];
        listenedContextKey?: string;
        capacitesChat?: boolean;
    }
    interface IServiceAgent {
        Core: CoreCommon;
        init(serviceInit?: IServiceAgentInitialisation): IPromesse<any>;
        SendRequest(settings: IRequestSettings): IPromesse<any>;
        SubscribeToNotification(onNotification: (notification: NotificationMessage, serviceAgent?: IServiceAgent) => void): any;
        Dispose(): any;
        OnNotification(notification: NotificationMessage, serviceAgent?: IServiceAgent): any;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface NotificationEvent<T> extends NotificationMessage {
        type: CommonEventType;
        Contenu: T;
    }
    enum CommonEventType {
        BriqueCommunication = 1
    }
}
declare module MyWay.Services {
    class PortalServiceParameters {
        private static _instance;
        constructor();
        static Instance(): PortalServiceParameters;
        /**
         * URL
         */
        RestUrl: string;
        TraceUrl: string;
        SpaUrl: string;
        ServiceLocaleUrl: string;
        ImpressionUrl: string;
        PortsServiceUrl: string;
        /**
         * Variables
         */
        Environnement: string;
        Version: string;
        PresPMM: string;
        EnvPMM: string;
        DomainePMM: string;
        AuthorizedDomains: string[];
        LisaFilePath: string;
        CDNUrl: string;
    }
}
declare module MyWay.Services.Component {
    interface ResponseCallback {
        (event: MessageEvent, callbackContent: any, error: Erreur): void;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Evennements = 2
    }
}
declare module MyWay.Services {
    interface ICommonLibrary {
        Core: CoreCommon;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Core = 3
    }
    interface ILibraryCommon {
        Core: CoreCommon;
    }
}
declare var Symbol: any;
declare module MyWay.Services {
    class Toposort {
        private edges;
        private _classCallCheck;
        constructor();
        /**
         * Adds dependency edges.
         *
         * @since   0.1.0
         * @param   {String} item               An dependent name. Must be an string and not empty
         * @param   {String[]|String} [deps]    An dependency or array of dependencies
         * @returns {Toposort}                  The Toposort instance
         */
        add(item: any, deps: any): this;
        /**
         * Runs the toposorting and return an ordered array of strings
         *
         * @since   0.1.0
         * @returns {String[]}  The list of items topologically sorted.
         */
        sort(): any[];
        /**
         * Clears edges
         *
         * @since   0.4.0
         * @returns {Toposort}                  The Toposort instance
         */
        clear(): this;
    }
    class InstanceLoaderService {
        private $parse;
        static $inject: string[];
        constructor($parse: ng.IParseService);
        createInstance<T>(name: string, ...args: any[]): T;
    }
    class CoreCommon extends Components.ComponentBase implements Components.IComponentCommon {
        private static CLASS_NAME;
        private static logger;
        private _supportIndexed;
        private _serviceLocalDisponible;
        static PreventMultipleJSONCalls: boolean;
        static VersionMySys: string;
        constructor();
        static ServiceDePromesse: IServiceDePromesse;
        init(): IPromesse<void>;
        getServiceDePromesse(): IServiceDePromesse;
        static getPromesseSelfResoved(): IPromesse<void>;
        dispose(): IPromesse<void>;
        getPromesseSelfResoved(): IPromesse<void>;
        createPromiseSelfResolved<T>(pValue?: T): IPromesse<T>;
        createPromiseSelfError<T>(pError: Erreur): IPromesse<T>;
        static createPromiseSelfResolved<T>(pValue?: T): IPromesse<T>;
        static createPromiseSelfError<T>(pError: Erreur): IPromesse<T>;
        static executePromisesSequentially(pPromises: Array<() => IPromesse<any>>): IPromesse<void>;
        static executePromisesSimultaneous(pPromises: Array<IPromesse<any>>): IPromesse<void>;
        static executePromisesSimultaneousAndWaitAllResolves(pPromises: Array<IPromesse<any>>): IPromesse<void>;
        FindKeysToReplace(rawPathData: any): string[];
        /**
        * Permet de connaître le navigateur utilisé
        * @return {string}   nom du navigateur
        */
        GetBrowser(): string;
        static GetBrowserStatic(): string;
        /**
        * Permet de connaître la version du navigateur utilisé
        * @return {string}   nom du navigateur
        */
        GetBrowserVersion(): string;
        static GetBrowserVersionStatic(): string;
        /**
        * Permet si le navigateur utilisé est un navigateur mobile ou non
        * @return {boolean}   oui : c'est un navigateur mobile
        */
        static IsMobileBrowser(): boolean;
        SerializeScope(scope: any): string;
        ApplyProperties(from: any, to: any): void;
        static IsFunction(functionToCheck: any): boolean;
        /**
        * Détermine si le navigateur utilisé est IE ou non
        */
        static checkIsIE(): boolean;
        /**
        * Détermine si le service local est disponible ou non
        */
        serviceLocalDisponible(): boolean;
        /**
        * Retourne la version d'Internet Explorer
        */
        private static getInternetExplorerVersion;
        SwapArrayElements(arrayObject: any[], index_a: number, index_b: number): void;
        static SendRequestWithPromise(settings: IRequestSettingsExtended): IPromesse<any>;
        sendRequest<T>(settings: IRequestSettingsExtended): IPromesse<T>;
        static SendRequest(settings: IRequestSettingsExtended, success: (data: any) => void, error: ErreurCallback): IXMLHttpRequest;
        static FixedEncodeURIComponent(str: string): string;
        static GetParams(params: any): string;
        private static listenersOnAddMyWayHeaders;
        static addListenerOnAddMyWayHeaders(pCallback: (headers: {
            [key: string]: string;
        }, settings: IRequestSettingsExtended) => void): void;
        static removeListenerOnAddMyWayHeaders(pCallback: (headers: {
            [key: string]: string;
        }, settings: IRequestSettingsExtended) => void): void;
        private static AddMyWayHeaders;
        private static SavedJSON;
        private static Send;
        private static GetResponse;
        private static traiterErreur;
        private static listenersOnCheckSettings;
        static addListenerOnCheckSettings(pCallback: (settings: IRequestSettingsExtended) => void): void;
        static removeListenerOnCheckSettings(pCallback: (settings: IRequestSettingsExtended) => void): void;
        private static CheckSettings;
        static creerChaineAleatoire(taille: number): string;
        creerChaineAleatoire(taille: number): string;
        static applyProperties(source: any, target: any, propName: any): void;
        /**
        * Permet le chargement dynamique d'un script présent dans le repertoire services du cdn
        * @param {string}   path
        * nom du fichier à charger
        */
        static loadCdnServiceScript(path: any): void;
        /**
        * Permet le chargement dynamique d'un script présent dans le repertoire services-addons du cdn
        * @param {string}   path
        * nom du fichier à charger
        */
        static loadCdnAddonsServiceScript(path: any): void;
        /**
        * Permet le récuperer le chemin d'un fichier de framework
        * @param {string}   path
        * nom du fichier à charger
        */
        static getBaseFolder(path: any): string;
        /**
        * Permet le chargement dynamique d'un script JS
        * @param {string}   path
        * chemin du fichier à charger
        */
        static loadScript(path: any): void;
        /**
         * Permet d'encoder certains caractères d'une string dont ~!*()' pour les passer en paramètres d'une URL
         * @param  {string} str Chaine de caractères à encoder
         * @return {string}     Chaine de caractères encodée
         */
        static encoderURL(str: string): string;
        static promesseTryCatch<T>(pCallback: (pDefer: IDeferred<T>) => any, pCallbackErreur?: (pErreur: Erreur, pDefer: IDeferred<T>) => any): IPromesse<T>;
        promesseTryCatch<T>(pCallback: (pDefer: IDeferred<T>) => any, pCallbackErreur?: (pErreur: Erreur, pDefer: IDeferred<T>) => any): IPromesse<T>;
        /**
         * Utilitaires pour le traitement des strings
         */
        static StringUtils: {
            /**
             * Ajout de caractères en début de chaine
             * @param pMorceauAFormater Chaîne d'origine
             * @param pMorceauARajouter Caractères à ajouter en début pour compléter la longueur voulue
             * @param pLongueurDesiree Longueur minimum désirée
             */
            leftPad: (pMorceauAFormater: string | number, pMorceauARajouter: string, pLongueurDesiree: number) => string;
            /**
             * Ajout de caractères en fin de chaine
             * @param pMorceauAFormater Chaîne d'origine
             * @param pMorceauARajouter Caractères à ajouter en fin pour compléter la longueur voulue
             * @param pLongueurDesiree Longueur minimum désirée
             */
            rightPad: (pMorceauAFormater: string | number, pMorceauARajouter: string, pLongueurDesiree: number) => string;
        };
        StringUtils: {
            /**
             * Ajout de caractères en début de chaine
             * @param pMorceauAFormater Chaîne d'origine
             * @param pMorceauARajouter Caractères à ajouter en début pour compléter la longueur voulue
             * @param pLongueurDesiree Longueur minimum désirée
             */
            leftPad: (pMorceauAFormater: string | number, pMorceauARajouter: string, pLongueurDesiree: number) => string;
            /**
             * Ajout de caractères en fin de chaine
             * @param pMorceauAFormater Chaîne d'origine
             * @param pMorceauARajouter Caractères à ajouter en fin pour compléter la longueur voulue
             * @param pLongueurDesiree Longueur minimum désirée
             */
            rightPad: (pMorceauAFormater: string | number, pMorceauARajouter: string, pLongueurDesiree: number) => string;
        };
        /**
         * Test si la valeur passé en paramètre est un objet
         *
         * @param {any} item la valeur à tester
         *
         * @return {boolean} true si c'est un objet sinon false
         */
        static isObject(item: any): boolean;
        /**
         * Utilitaires pour les tableaux
         */
        static ArrayUtils: {
            /**
             * Suppression d'éléments dans un tableau. Travaille directement sur le tableau passé en paramètre
             * @param pArray Tableau à modifier
             * @param pCompare Callback. Si retourne "true" alors l'élément sera supprimé
             * @return Le même tableau (même instance mémoire) modifié
             */
            remove: (pArray: any[], pCompare: (pElement: any) => boolean) => any[];
            /**
             * Test si une clé est présente dans un tableau ou un objet
             *
             * @param {any} key la clé à rechercher
             * @param {Array/Object} search le tableau ou l'objet à tester
             * @return {boolean} true si 'elle existe sinon false
             */
            keyExists: (key: any, search: any) => boolean;
            getOne(pArray: any[], pCompare: (pElement: any) => boolean): any;
        };
        /**
         * Utilitaires pour les enums
         */
        static EnumUtils: {
            getNamesAndValues<T extends number>(e: any): {
                name: string;
                value: T;
            }[];
            getNames(e: any): string[];
            getValues<T extends number>(e: any): T[];
            getObjValues(e: any): (string | number)[];
            /**
             * Méthode qui retourne sous forme de tableau les valeurs d'un enum
             * @param {enum} Enum à convertir sous forme de tableau
             * @return {Array<T>}
             */
            listerEnums<T>(enumClass: any): T[];
            /**
             * Permet de récupérer un membre d'un enum correspondant à la valeur passée en paramètre
             * @param e {any} enum pour lequel on veut récupérer le membre
             * @param value {number} valeur pour laquelle on veut récupérer le membre de l'enum
             * @return {string} Retourne le membre de l'enum correspondant à la valeur passée en paramètre
             */
            getName(enumClass: any, value: number): string;
        };
        /**
         * Utilitaires pour les objets
         */
        static ObjectUtils: {
            /**
             * Test si un objet a les clés passées en paramètres
             * Si la propriété strict est à true il vérifie qu'il y a exactement les mêmes clés
             *
             * @param {string} key la clé à rechercher
             * @param {Array/Object} search le tableau ou l'objet à tester
             * @return {boolean} true si 'elle existe sinon false
             */
            hasKeys: (keys: string[], object: Object, strict?: boolean) => boolean;
            /**
             * Test si un objet existe avec un couple de clé/valeur dans un tableau d'objets
             *
             * @param {Array<IKeyValuePair>} keyValueList la liste de couple clé/valeur à rechercher
             * @param {Array} search le tableau d'objet à tester
             * @return {Object} l'objet s'il existe sinon null
             */
            objectExistsByKeyValueList: <T extends Object>(keyValueList: IKeyValuePair<string, any>[], search: T[]) => T;
            /**
             * Test si un objet a une liste de couple de clé/valeur
             *
             * @param {Array<IKeyValuePair>} keyValueList la liste de couple clé/valeur à rechercher
             * @param {Object} search le tableau ou l'objet à tester
             * @return {boolean} true si cet abjet a ce couple clé/valeur
             */
            hasKeyValuePairList: (obj: Object, keyValueList: IKeyValuePair<string, any>[]) => boolean;
            /**
            * Récupère les propriétés de l'objet object et
            * retourne un tableau d'objet (Clé/Valeur) correspondant aux propriétés de l'objet object
            *
            * @param {Object} object l'objet
            * @return {Array<IKeyValuePair>} le tableau d'objets (Clé/valeur)
            */
            objectToArray: (object: Object) => IKeyValuePair<string, any>[];
            /**
            * Permet de merger les propriétés de deux objets
            *
            * @param {Object} destination l'objet merger
            * @param {Object} source l'objet à merger
            *
            * @return {Object} l'objet mergé
            */
            merge: (destination: Object, source: Object) => Object;
            deepEquals: (pObject1: any, pObject2: any) => boolean;
        };
        ObjectUtils: {
            /**
             * Test si un objet a les clés passées en paramètres
             * Si la propriété strict est à true il vérifie qu'il y a exactement les mêmes clés
             *
             * @param {string} key la clé à rechercher
             * @param {Array/Object} search le tableau ou l'objet à tester
             * @return {boolean} true si 'elle existe sinon false
             */
            hasKeys: (keys: string[], object: Object, strict?: boolean) => boolean;
            /**
             * Test si un objet existe avec un couple de clé/valeur dans un tableau d'objets
             *
             * @param {Array<IKeyValuePair>} keyValueList la liste de couple clé/valeur à rechercher
             * @param {Array} search le tableau d'objet à tester
             * @return {Object} l'objet s'il existe sinon null
             */
            objectExistsByKeyValueList: <T extends Object>(keyValueList: IKeyValuePair<string, any>[], search: T[]) => T;
            /**
             * Test si un objet a une liste de couple de clé/valeur
             *
             * @param {Array<IKeyValuePair>} keyValueList la liste de couple clé/valeur à rechercher
             * @param {Object} search le tableau ou l'objet à tester
             * @return {boolean} true si cet abjet a ce couple clé/valeur
             */
            hasKeyValuePairList: (obj: Object, keyValueList: IKeyValuePair<string, any>[]) => boolean;
            /**
            * Récupère les propriétés de l'objet object et
            * retourne un tableau d'objet (Clé/Valeur) correspondant aux propriétés de l'objet object
            *
            * @param {Object} object l'objet
            * @return {Array<IKeyValuePair>} le tableau d'objets (Clé/valeur)
            */
            objectToArray: (object: Object) => IKeyValuePair<string, any>[];
            /**
            * Permet de merger les propriétés de deux objets
            *
            * @param {Object} destination l'objet merger
            * @param {Object} source l'objet à merger
            *
            * @return {Object} l'objet mergé
            */
            merge: (destination: Object, source: Object) => Object;
            deepEquals: (pObject1: any, pObject2: any) => boolean;
        };
    }
    interface IKeyValuePair<K, V> {
        Key: K;
        Value: V;
    }
    /**
     * Interface de définition d'un message pour l'affichage
    *
    * @param Type {string} optionnel : Le type de message (nom de la classe Bootstrap)
    * @param Message {string} : Le message à afficher
    * @param Duree {number} optionel :
    */
    interface IMessage {
        Type?: string;
        Message: string;
        Duree?: number;
    }
    class ExecutionAppliExt {
        CodeRetour: string;
        MessageRetour: string;
        DonneesRetour: string;
        Pid: string;
        constructor(codeRetour: string, messageRetour: string, donneesRetour: string, pid: string);
    }
    class ErreurClient extends Erreur {
        constructor(codeLibelle: string, valeurs?: string[], error?: Error);
    }
    class ErreurServeur extends Erreur {
        constructor(codeHttp: number, codeLibelle: string, libelle: string, valeurs?: string[], causes?: ErreurServeur[]);
    }
    /**
        * Interface de définition des paramètres d'envoi d'une requête REST
        *
        * @param method  {MethodEnum} optionnel : Methode de la requête (valeur par défaut : GET si data est vide, POST si data est un non vide)
        * @param url  {string} optionnel : Url de la ressource
        * @param params  {any} optionnel : Paramètre d'appel de la resource. C'est un objet dont les noms des champs seront utilisés pour créer les paramètres de l'url
        * @param data  {any} optionnel : Donnée contenue dans le corps de la requête
        * @param async  {boolean} optionnel : Permet de définir des requetes synchrones/asynchrones (valeur par défaut : true)
        * @param contentType  {ContentTypeEnum} optionnel : Type du contenu (valeur par défaut : NONE si data est vide, JSON si data est non vide)
        * @param accept {AcceptEnum} optionnel : Contenu accepté en retour (valeur par défaut : ALL)
        * @param cache {boolean} optionnel : Utilisation du cache (valeur par défaut : false)
        * @param withHeaders {boolean} optionnel : Ajoute à la requête les headers MyWay si vrai (valeur par défaut : false)
        * @param responseType {ResponseTypeEnum} optionnel : Type de réponse attendue (valeur par défaut : NOT_DEFINED)
        * @param oldHeader {boolean} optionnel
        * @param timeout {number} optionnel
        */
    interface IRequestSettings {
        method?: MethodEnum;
        url?: string;
        params?: any;
        data?: any;
        async?: boolean;
        contentType?: ContentTypeEnum;
        accept?: AcceptEnum;
        cache?: boolean;
        withHeaders?: boolean;
        responseType?: ResponseTypeEnum;
        oldHeader?: boolean;
        timeout?: number;
        originalResponse?: boolean;
    }
    interface IRequestSettingsExtended extends IRequestSettings {
        logger?: Loggers.ILogger;
        additionalHeaders?: {
            [key: string]: string;
        };
        type?: string;
        versionComposant?: string;
    }
    enum ContentTypeEnum {
        NONE = 0,
        URL_ENCODED = 1,
        JSON = 2
    }
    enum ResponseTypeEnum {
        BLOB = 0,
        JSON = 1,
        EMPTY = 2,
        NOT_DEFINED = 3
    }
    enum AcceptEnum {
        ALL = 0,
        JSON = 1
    }
    enum MethodEnum {
        DELETE = 0,
        GET = 1,
        POST = 2,
        PUT = 3
    }
    interface IXMLHttpRequest {
        url?: string;
        headers?: {
            [key: string]: string;
        };
        method?: string;
        async?: boolean;
        data?: string;
        responseType?: string;
        success?: (data: any) => void;
        timeout?: number;
        error?: ErreurCallback;
        originalResponse?: boolean;
    }
    /**
     * Information de diagnostic du demarrage d'une application
     *    Les jalons de démarrage d'une SPA sont:
     *     - previousStepEndTime : fin de l'étape précédente
     *       * si première étape, temps de démarrage du processus
     *       * si étape précédente est routeur, temps de fin de l'étape précédente
     *     - stepStartTime : début de l'étape
     *     - displayTime: début de l'affichage SPA
     *     - initTime: init service agent
     *     - lastDigestCycleTime: dernier cycle de digestion angular
     *
     *     Les temps de démarrage d'une SPA sont calculés à partir des jalons suivants:
     *     - stepStartDuration : entre fin de l'étape précédente et début affichage SPA
     *     - displayDuration : entre début affichage SPA et init serviceAgent
     *     - digestDuration : entre init serviceAgent et dernier cycle de digestion
     *
     *    Le temps d'analyse sont:
     *     - totalDisplayDuration : displayDuration + digestDuration
     *     - totalStartDuration: stepStartDuration + totalDisplayDuration
     */
    class ApplicationDiagnostic {
        /**
         * Code Application
         */
        codeApplication: string;
        /**
         * Id de l'étape
         */
        stepId: string;
        stepPath: string;
        private _previousStepEndTime;
        /**
         * Jalon de début d'étape
         */
        private _stepStartTime;
        /**
         * Jalon de début d'affichage de la SPA
         */
        private _displayTime;
        /**
         * Jalon de début initialisation du serviceAgent
         */
        private _initTime;
        /**
         * Jalon du ressenti utilisateur (utilisation du listenedContextKey par les applications)
         */
        private _userTime;
        /**
         * Jalon du dernier cycle de digestion angular
         */
        private _lastDigestCycleTime;
        timeBeforeTransition: number;
        /**
         * Nombre de watchers dans l'application
         */
        watchers: number;
        /**
         * Nombre de cycles de digestion angular
         */
        digestCycles: number;
        /**
         * Taille du contexte
         */
        contextSize: number;
        finalDiagnostic: boolean;
        constructor();
        /**
         * Jalon de fin d'étape précédente
         */
        previousStepEndTime: number;
        /**
         * Jalon de début d'étape
         */
        stepStartTime: number;
        /**
         * Jalon de début d'affichage de la SPA
         */
        displayTime: number;
        /**
         * Jalon de début initialisation du serviceAgent
         */
        initTime: number;
        /**
         * Jalon du ressenti utilisateur (utilisation du listenedContextKey par les applications)
         */
        userTime: number;
        /**
         * Jalon du dernier cycle de digestion angular
         */
        lastDigestCycleTime: number;
        /**
         * Temps de démarrage entre fin de l'étape précédente et début affichage SPA
         */
        stepStartDuration: number;
        /**
         * Temps de démarrage entre début affichage SPA et init serviceAgent
         */
        staticFilesLoadDuration: number;
        /**
         * Temps de démarrage entre init serviceAgent et dernier cycle de digestion
         */
        digestDuration: number;
        /**
         * Temps de démarrage entre début affichage SPA et jalon du ressenti utilisateur (utilisation du listenedContextKey par les applications)
         */
        userDuration: number;
        /**
         * Durée totale de l'affichage de l'application
         */
        totalDisplayDuration: number;
        /**
         * Durée totale du démarrage de l'application
         */
        totalStartDuration: number;
        /**
         * Durée totale du démarrage de l'application ressenti par l'utilisateur
         */
        totalUserDuration: number;
        userDurationEnabled: boolean;
        /**
         * Status du démarrage
         */
        startStatus: string;
        /**
         * Status du nombre de watchers
         */
        watchersStatus: string;
        /**
         * Status du nombre de cycles de digestion
         */
        digestStatus: string;
        /**
         * Status de la quantité de données de contexte
         */
        contextStatus: string;
        /**
         * Clone les valeurs d'un diagnostic
         */
        clone(source: ApplicationDiagnostic): void;
    }
}
interface JSON {
    pruned(value: any, depthDecr?: any, arrayMaxLength?: any): any;
}
declare module MyWay.Services {
    class NotificationMessage {
        Sujet: string;
        Contenu: any;
    }
}
declare module MyWay.Services.Common {
    class ArbreBinaire<T> {
        private _racine;
        private _fonctionCompare;
        private _doublonsPossibles;
        private _nombreElements;
        constructor(pFonctionCompare: (pEl1: T, pEl2: T) => number, pDoublonsPossibles: boolean);
        testerElements(pEl1: T, pEl2: T): number;
        doublonsPossibles: boolean;
        nombreElements: number;
        ajouter(pNouveauElement: T): boolean;
        retirer(pFonctionTest: (pElement: T) => boolean): void;
        inferieurAAsc(pElementSuperieur: T, pInclureElement: boolean, pCallback: (pElement: T) => void): void;
        inferieurADesc(pElementSuperieur: T, pInclureElement: boolean, pCallback: (pElement: T) => void): void;
        superieurAAsc(pElementSuperieur: T, pInclureElement: boolean, pCallback: (pElement: T) => void): void;
        superieurADesc(pElementSuperieur: T, pInclureElement: boolean, pCallback: (pElement: T) => void): void;
        entreBornesAsc(pElementInferieur: T, pInclureElementInferieur: boolean, pElementSuperieur: T, pInclureElementSuperieur: boolean, pCallback: (pElement: T) => void): void;
        entreBornesDesc(pElementInferieur: T, pInclureElementInferieur: boolean, pElementSuperieur: T, pInclureElementSuperieur: boolean, pCallback: (pElement: T) => void): void;
        toutParcourir(pCallback: (pElement: T) => void): void;
        getParCritere(pFonctionTest: (pElement: T) => boolean, pCallback: (pElement: T) => void): void;
        isExists(pElement: T): boolean;
        getElement(pElement: T): T;
        private getElementInternal;
        private getPlusGrandInferieurA;
        private getPlusPetitSuperieurA;
        private getMinimum;
        private getMaximum;
        private getSuivant;
        private getPrecedent;
        private placerElement;
        private retirerElement;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Loggers = 4
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Loggers {
    enum LoggersMessageSubject {
        GetConfigActual = 0,
        SetConfigActual = 1,
        GetConfigDB = 2,
        SetConfigDB = 3,
        SaveConfig = 4,
        LoadConfig = 5,
        GetLoggers = 6,
        GetNomConfigAcuelle = 7,
        IsClassExists = 8,
        Reset = 9
    }
    interface ILoggersMessageContentGetConfigActual extends ILoggersMessageContent {
    }
    interface ILoggersMessageContentSetConfigActual extends ILoggersMessageContent {
        config: IConfig;
    }
    interface ILoggersMessageContentGetConfigDB extends ILoggersMessageContent {
        nom: string;
    }
    interface ILoggersMessageContentSetConfigDB extends ILoggersMessageContent {
        nom: string;
        config: IConfig;
    }
    interface ILoggersMessageContentSaveConfig extends ILoggersMessageContent {
        nom: string;
    }
    interface ILoggersMessageContentLoadConfig extends ILoggersMessageContent {
        nom: string;
    }
    interface ILoggersMessageContentGetLoggers extends ILoggersMessageContent {
    }
    interface ILoggersMessageContentGetNomConfigAcuelle extends ILoggersMessageContent {
    }
    interface ILoggersMessageContentIsClassExists extends ILoggersMessageContent {
        nom: string;
    }
    interface ILoggersMessageContentReset extends ILoggersMessageContent {
    }
    interface ILoggersMessageContent {
    }
    interface ILoggersMessage extends Components.IMessage<LoggersMessageSubject, ILoggersMessageContent> {
    }
}
declare module MyWay.Services.Message {
    abstract class MessageBase {
        private canReceiveResponses;
        private canReceiveNewMessages;
        private static CLASS_NAMEMessageBase;
        private static loggerMessageBase;
        private _targetWindow;
        private _targetDomain;
        private _authorizedDomains;
        private _currentIndex;
        private _callbackArray;
        private _recipientZone;
        private _zoneName;
        private _me;
        protected _library: Components.ILibraryCommon;
        constructor(targetWindow: Window, targetDomain: string, authorizedDomains: string[], recipientZone: string, zoneName: string, library: Components.ILibraryCommon, canReceiveResponses: boolean, canReceiveNewMessages: boolean);
        private createMessage;
        send<SubjectType, ContentType>(pComponent: Components.ComponentType, pSubject: SubjectType, pContent: ContentType, targetWindow?: Window, targetDomain?: string, pIdFrame?: string): IPromesse<void>;
        sendWithResponse<SubjectType, ContentType, ResponseType>(pComponent: Components.ComponentType, pSubject: SubjectType, pContent: ContentType, targetWindow?: Window, targetDomain?: string, pIdFrame?: string): IPromesse<ResponseType>;
        protected abstract postMessage<SubjectType, ContentType>(pMessage: IFrameMessage<SubjectType, ContentType>, pTargetWindow: Window, pTargetDomain: string, pIdFrame: string): void;
        private _AddCallback;
        _ReceiveMessage: (event: MessageEvent) => void;
        private static _getBaseDomain;
        private handleReception;
        protected transmettreMessage(event: MessageEvent): void;
        protected handleResponse(event: MessageEvent): void;
        private static IsDomainAuthorized;
        private _ExecuteCallback;
        private _RemoveCallback;
        private _SendResponse;
        private ValidateMessage;
    }
    interface IFrameMessage<SubjectType, ContentType> {
        RecipientZone: string;
        RecipientComponent: Components.ComponentType;
        SenderZone: string;
        Subject: SubjectType;
        Content: ContentType;
        CallbackIndex: number;
        ErreurCallbackIndex: number;
        Error: Erreur;
        type?: string;
    }
    interface ResponseMessage<ResponseType> extends IFrameMessage<string, ResponseType> {
    }
}
declare module MyWay.Services.Message {
    interface IMessageService {
        send<SubjectType, ContentType>(pComponent: Components.ComponentType, pSubject: SubjectType, pContent?: ContentType, targetWindow?: Window, targetDomain?: string, pIdFrame?: string): IPromesse<void>;
        sendWithResponse<SubjectType, ContentType, ResponseType>(pComponent: Components.ComponentType, pSubject: SubjectType, pContent?: ContentType, targetWindow?: Window, targetDomain?: string, pIdFrame?: string): IPromesse<ResponseType>;
        dispose(): any;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Core {
    enum CoreMessageSubject {
    }
    interface ICoreMessageContent {
    }
    interface ICoreMessage extends Components.IMessage<CoreMessageSubject, ICoreMessageContent> {
    }
}

declare module MyWay.Test.V1.Services {
    type IDeferred<T> = MyWay.Services.IDeferred<T>;
    type IPromesse<T> = MyWay.Services.IPromesse<T>;
    type Erreur = MyWay.Services.Erreur;
    const Erreur: typeof MyWay.Services.Erreur;
    const Promesses: typeof MyWay.Services.Promesses;
    function generateEmptyLibraryCommon(): MyWay.Services.Components.ILibraryCommon;
    function override(pObject: any, pMethod: string, pValue: any): void;
    function generateMessageService(): MyWay.Services.Message.IMessageService;
    enum TestMode {
        DeepEquals = 0,
        StrictEquals = 1,
        NoCheck = 2,
        ObjectPropertiesEquals = 3,
        ArrayObjectPropertiesEquals = 4
    }
}

declare module MyWay.Services.Components {
    interface IComponentAgentConstructor extends IComponentConstructor<IComponentAgent<any>> {
    }
    interface IComponentAgent<MessageType extends IMessage<any, any>> extends IComponentConnected<MessageType> {
        init(pAgentLibrairy: ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: IAgentInitializer): IPromesse<void>;
    }
    interface ILibraryAgent extends ILibraryCommon {
    }
    interface ILibraryTechAgent extends ILibraryAgent {
    }
    interface IAgentInitializer {
        donneesScopeASauvegarder?: string[];
        disableScopeSave?: boolean;
        disableGetStepInfo?: boolean;
        scopeType?: Context.ScopeType;
        codeApplication?: string;
        applicationVersion?: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    enum RegistryType {
        AGENT = 1
    }
    class RegistryAgent extends AbstractRegistry<IComponentAgentConstructor, IComponentAgent<any>, ILibraryAgent> {
        private static instance;
        private messageService;
        private _agentInitializer;
        constructor();
        static getInstance(): RegistryAgent;
        managerInitializer: IAgentInitializer;
        private getRegistryCommon;
        init(pComponent: ComponentType): IPromesse<void>;
        protected initializeComponent(pAgent: IComponentAgent<any>): IPromesse<void>;
    }
}
declare module MyWay.Services.Components {
    abstract class ComponentAgentBase<TypeMessage extends IMessage<SubjectType, ContentType>, SubjectType, ContentType> extends ComponentBase implements IComponentAgent<TypeMessage> {
        protected library: ILibraryAgent;
        private messageService;
        constructor(pName: ComponentType);
        init(pAgentLibrary: ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: IAgentInitializer): IPromesse<void>;
        reception(pMessage: TypeMessage): IPromesse<any>;
        dispose(): IPromesse<void>;
        sendMessage<ResponseType>(pSubject: SubjectType, pContent?: ContentType): IPromesse<ResponseType>;
    }
}
declare module MyWay.Services.Loggers.Appenders {
    class BroadcastAppender extends AbstractAppender {
        static CLASSNAME: string;
        private static logs;
        private static _METHODE_PURGE_TRACES;
        static METHODE_PURGE_TRACES: (pLog: ILoggerWithContext) => void;
        constructor(pNom: string, level: LEVEL, config: IConsoleAppenderConfig);
        onAppend(pMessage: ILoggerWithContext): void;
    }
}
declare module MyWay.Services.Loggers {
    var DEFAULT_CONFIGURATION_AGENTS: IConfig;
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Controle: Controle.ControleAgent;
    }
}
declare module MyWay.Services.Controle {
    class ControleAgent extends Components.ComponentAgentBase<IControleMessage, ControleMessageSubject, IControleMessageContent> {
        private static CLASS_NAME;
        private static logger;
        constructor();
        Any: AnyControle;
        Array: ArrayControle;
        Boolean: BooleanControle;
        Date: DateControle;
        Enum: EnumControle;
        Function: FunctionControle;
        Number: NumberControle;
        Object: ObjectControle;
        String: StringControle;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Message: Message.MessageAgent;
    }
}
declare module MyWay.Services.Message {
    abstract class MessageAgentBase extends MessageBase implements IMessageService {
        constructor(library: Components.ILibraryCommon, otherWindow: Window, uri: string);
        replaceLibrary(library: Components.ILibraryCommon): void;
        dispose(): void;
    }
    class MessageAgent extends MessageAgentBase {
        private static CLASS_NAME;
        private static logger;
        constructor(library: Components.ILibraryCommon);
        dispose(): void;
        protected postMessage(pMessage: IFrameMessage<any, any>, pTargetWindow: Window, pTargetDomain: string, pIIFrameId: string): void;
    }
    class MessageAgentFactory {
        static createMessageAgent(library: Components.ILibraryCommon): IMessageService;
    }
    class SelfMessageManager extends MessageAgentBase {
        private static CLASS_NAME;
        private static logger;
        constructor(library: Components.ILibraryCommon);
        SendMessage(recipient: string, subject: string, content: any, callback?: (any: any) => void, errorCallback?: (error: any) => void, targetWindow?: Window, targetDomain?: string): void;
        protected postMessage(pMessage: IFrameMessage<any, any>, pTargetWindow: Window, pTargetDomain: string, pIIFrameId: string): void;
    }
    class MobileMessageAgent extends MessageAgentBase {
        private static CLASS_NAME;
        static Instance: MobileMessageAgent;
        private static logger;
        constructor(library: Components.ILibraryCommon);
        protected postMessage(pMessage: IFrameMessage<any, any>, pTargetWindow: Window, pTargetDomain: string, pIIFrameId: string): void;
    }
}
/**
* Module Service Agent
* @module MyWay.Services.ServiceAgent
*/
declare module MyWay.Services {
    var onInitUsableLoggerForServiceAgent: (pServiceAgent: ServiceAgent, pCodeApplication: string) => void;
    /**
    * Classe du ServiceAgent
    */
    class ServiceAgent implements IServiceAgent {
        $$framework: string;
        protected _serviceLibrary: Components.ILibraryAgent;
        IsInitDone: boolean;
        IsInitInProgress: boolean;
        private _serializedInitialisationValues;
        private _idServiceAgent;
        Core: CoreCommon;
        Controle: Controle.ControleAgent;
        private static CLASS_NAME;
        static logger: Loggers.ILogger;
        private onNotificationForSPA;
        Library: Components.ILibraryAgent;
        idServiceAgent: string;
        /**
        * Constructeur de la classe serviceAgent
        * Permet d'instancier ServiceAgent. Si on utilise le ServiceAgent dans une application angular,
        * cette instanciation n'est pas obligatoire. Il suffit d'utiliser l'injection de dépendance angular.JS,
        * et d'injeter le module 'moduleAgent' dans la déclaration de l'application. Le service serviceAgent
        * sera alors disponible pour chacun des controllers.
        *
        * ~~~ts
        * // ---- instanciation normale
        * var serviceAgent = new MyWay.Services.ServiceAgent();
        *
        * // ---- instanciation via l'injection de dépendance
        * var app = angular.module('app', ['moduleAgent']);
        *
        * app.controller('monController', [ 'serviceAgent', function(serviceAgent) {
        *     //je peux utiliser ici l'instance du service agent
        *     serviceAgent.init({ codeApplication: 'maSPA'});
        * }]);
        * ~~~
        */
        constructor();
        /**
         * Permet l'initialisation du ServiceAgent
         *
         * #### Syntaxe
         * ~~~ts
         * // initialisation du serviceAgent
         * serviceAgent.init(serviceInit?: IServiceAgentInitialisation);
         * ~~~
         *
         * @param  serviceInit {IServiceAgentInitialisation}             dont le code lisa de la SPA
         *
         * @return {IPromesse<any>}
         *
         * #### Exemple d'utilisation
         * ~~~ts
         * function alert(notification: MyWay.Services.NotificationMessage){
         *      //afficher la notification
         *      alert(notification.Sujet + ": " + notification.Contenu);
         * }
         *
         * serviceAgent.init({ codeApplication: 'GERC', onNotification: alert}).then(function () {
         *      //l'initialisation est terminée
         *      serviceAgent.SendRequest({url: 'http://data.json', method: MyWay.Services.MethodEnum.GET }, function(data) {
         *          $scope.data = data;
         *          $scope.$apply();
         *     });
         * ~~~
         */
        init(serviceInit: IServiceAgentInitialisation): IPromesse<any>;
        private _initAgents;
        private _initTerminee;
        private _displayError;
        /**
         * Envoie une requête XHR en surchargeant par des headers MyWay
         *
         * /!\ Cette méthode est surchargée par le contexte pour y ajouter les données de contexte (step info, authentification info, ...)
         *
         * #### Syntaxe
         * ~~~ts
         * serviceAgent.SendRequest(settings: IRequestSettings)
         * ~~~
         *
         * @param  settings{IRequestSettings}  Paramètres de la requête
         *
         * @return {IPromesse<any>}
         *
         * #### Exemple
         * ~~~ts
         * serviceAgent.SendRequest(
         *  {
         *      url: restServiceUrl + 'api/opportunity',
         *      withHeaders: true,
         *      method: MyWay.Services.MethodEnum.GET
         *  }).then($scope.onLoadSuccess)
         * .catch($scope.onLoadError);
         *
         * $scope.onLoadSuccess = function (data) {
         *  for (var index in data) {
         *      var opportunity = new OpportunityModel(data[index]);
         *      $scope.opportunitys.push(opportunity);
         *  }
         *  $scope.$apply();
         * };
         *
         * $scope.onLoadError = function (error) {
         *  serviceAgent.DisplayMessage({ Type: 'danger', Message: 'Impossible de charger le portefeuille' });
         * };
         * ~~~
         */
        SendRequest(settings: IRequestSettings): IPromesse<any>;
        SubscribeToNotification(onNotification: (notification: NotificationMessage, agent?: IServiceAgent) => void): void;
        Dispose(): IPromesse<void>;
        OnNotification(notification: NotificationMessage, agent?: IServiceAgent): void;
        static staticInit(): void;
    }
}
declare module MyWay.Services {
    class AppServiceParameters {
        private static _instance;
        constructor();
        static Instance(): AppServiceParameters;
        PortalDomain: string;
        MessageAgent: Message.IMessageService;
    }
}
declare module MyWay.Services {
    var moduleAgent: ng.IModule;
}
declare module MyWay.Services {
    class ServiceAgentProvider {
        private $q;
        private instanceLoaderService;
        private $timeout;
        private $rootScope;
        static $inject: string[];
        private static _serviceAgentExtended;
        constructor($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any);
        static Instance($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any): ServiceAgentExtended;
        /**
         * Initialisation du serviceAgent.
         *
         * Le provider angular fournit un objet de type [[ServiceAgentExtended]].
         *
         * Le serviceAgent, injecté dans la SPA angular, doit être initialisé pour chaque route de la SPA.
         *
         * ~~~ts
         * $routeProvider
         * .when("/", {
         *       controller: "Controleur"
         *       , templateUrl: "views/defaut.html"
         *       , controllerAs: "ctrlr"
         *       , resolve: {
         *           serviceAgent: ["serviceAgentProvider",
         *               function (serviceAgentProvider: MyWay.Services.ServiceAgentProvider) {
         *                   return serviceAgentProvider.init({ codeApplication: "CREDIT" });
         *               }]
         *        }
         * });
         * ~~~
         * @param  {IServiceAgentInitialisation}       serviceInit
         *
         * @return {ng.IPromise<ServiceAgentExtended>}
         *
         */
        init(serviceInit?: IServiceAgentInitialisation): IPromesse<any>;
    }
    /**
     * @ngdoc service
     * @name moduleAgent.service:serviceAgentExtended
     * @requires $q
     * @requires moduleAgent.instanceLoaderService
     * @description
     * Ce service est une extension du serviceAgent (framework technique). Il permet d'en simplifier l'utilisation.
     */
    class ServiceAgentExtended extends ServiceAgent {
        private $q;
        private instanceLoaderService;
        private $timeout;
        private $rootScope;
        private static CLASS_NAME_EXTENDED;
        static logger_extended: Loggers.ILogger;
        private static onNewInstanceTraitements;
        private _clearWatchListener;
        private _lastDigestTimerHandle;
        private _diagnostic;
        private _watcherCountTimeout;
        private _listenedContextKey;
        static $inject: string[];
        constructor($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any);
        static onNewInstance(pCallback: (pServiceAgentExtended: ServiceAgentExtended) => void): void;
        /**
         * @ngdoc method
         * @name init
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * Permet l'initialisation du ServiceAgent.
         * @param {Object} serviceInit Objet contenant le code LISA de la SPA
         *      et une fonction de rappel en cas de notification du portail vers l'application
         * @returns {Object} Result promise.
         */
        init(serviceInit: MyWay.Services.IServiceAgentInitialisation): IPromesse<any>;
        private listenersBeforeInitialization;
        private listenersAfterInitialization;
        addListenerBeforeInitialization(pCallback: () => void): void;
        addListenerAfterInitialization(pCallback: (serviceInit: IServiceAgentInitialisation, initDate: number) => void): void;
        removeListenerBeforeInitialization(pCallback: () => void): void;
        removeListenerAfterInitialization(pCallback: (serviceInit: IServiceAgentInitialisation, initDate: number) => void): void;
        /**
         * @ngdoc method
         * @name sendRequest
         * @methodOf moduleAgent.serviceAgentExtended
         * @description
         * Envoi une requête pour consommer une ressource.
         * L'objet retourné peut être instancié par un type si fourni. L'opération est asynchrone et renvoie donc une promise.
         * @param {Object} settings interface de définition des paramètres d'envoi d'une requête REST.
         * @param {string=} resultType Type explicite de l'objet à renvoyer. Ce paramètre permet d'instancier un objet de type classe.
         * @returns {Object} Promise contenant la réponse de la requête.
         */
        sendRequest<T>(settings: IRequestSettings, resultType?: string): ng.IPromise<T>;
        LogDemarrage(): void;
        OnNotification(notification: NotificationMessage, agent?: IServiceAgent): void;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Core: Core.CoreAgent;
    }
}
declare module MyWay.Services.Core {
    class CoreAgent extends CoreCommon implements Components.IComponentAgent<ICoreMessage> {
        private _listenersOnNotification;
        protected library: Components.ILibraryAgent;
        private messageService;
        constructor();
        addListenerOnNotification(pCallback: (notification: NotificationMessage) => void): void;
        removeListenerOnNotification(pCallback: (notification: NotificationMessage) => void): void;
        sendNotification(notification: NotificationMessage): void;
        init(pAgentLibrary?: Components.ILibraryAgent, pMessageService?: Message.IMessageService, pMessageInitializer?: Components.IAgentInitializer): IPromesse<void>;
        reception(pMessage: ICoreMessage): IPromesse<any>;
        dispose(): IPromesse<void>;
        sendMessage<ResponseType>(pSubject: CoreMessageSubject, pContent?: ICoreMessageContent): IPromesse<ResponseType>;
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        JAB = 5
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.JAB {
    enum JABMessageSubject {
        Enregistrer = 0
    }
    interface IJABMessageContentEnregistrer extends IJABMessageContent {
        data: string;
    }
    interface IJABMessageContent {
    }
    interface IJABMessage extends Components.IMessage<JABMessageSubject, IJABMessageContent> {
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Persistence = 6
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Persistence {
    enum PersistenceMessageSubject {
    }
    interface IPersistenceMessageContent {
    }
    interface IPersistenceMessage extends Components.IMessage<PersistenceMessageSubject, IPersistenceMessageContent> {
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        BaseDeDonnees = 7
    }
}
declare module MyWay.Services.BaseDeDonnees {
    interface IInstanceAvecCle<TClass, TKey> {
        element: TClass;
        cle: TKey;
    }
}
declare module MyWay.Services.BaseDeDonnees.Messages {
    enum BaseDeDonneesMessageSubject {
        GetBases = 0,
        Get = 1,
        GetAll = 2,
        Find = 3,
        Count = 4,
        Ajouter = 5,
        Supprimer = 6,
        MettreAJour = 7,
        ResetAll = 8
    }
    interface IBaseDeDonneesMessageContent {
    }
    interface IBaseDeDonneesMessageContentGetBases extends IBaseDeDonneesMessageContent {
    }
    interface IBaseDeDonneesMessageContentDbUpgrade extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        actions: MyWay.Services.BaseDeDonnees.messages.DB_UPGRADE_ACTION[];
        fixVersion: number;
    }
    interface IBaseDeDonneesMessageContentGet extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        cle: any;
    }
    interface IBaseDeDonneesMessageContentGetAll extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
    }
    interface IBaseDeDonneesMessageContentFind extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        critere: string;
    }
    interface IBaseDeDonneesMessageContentCount extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        critere?: string;
    }
    interface IBaseDeDonneesMessageContentAjouter extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        elements: any[];
    }
    interface IBaseDeDonneesMessageContentSupprimer extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        cles: any[];
    }
    interface IBaseDeDonneesMessageContentMettreAJour extends IBaseDeDonneesMessageContent {
        base: MyWay.Services.BaseDeDonnees.messages.BASE;
        table: string;
        elements: IInstanceAvecCle<any, any>[];
    }
    interface IBaseDeDonneesMessageContentResetAll extends IBaseDeDonneesMessageContent {
    }
    interface IBaseDeDonneesMessage extends Components.IMessage<BaseDeDonneesMessageSubject, IBaseDeDonneesMessageContent> {
    }
}
declare module MyWay.Services.BaseDeDonnees.messages {
    var NOM_BIBLIOTHEQUE: string;
    enum DB_UPGRADE_TYPE {
        TABLE_CREER,
        TABLE_SUPPRIMER,
        INDEX_CREER,
        INDEX_SUPPRIMER
    }
    interface BASE {
        nom: string;
        implementation: TYPE_BASE;
        version: number;
    }
    interface BASE_DETAIL extends BASE {
        tables: TABLE[];
    }
    interface TABLE {
        nom: string;
    }
    interface CLE_ABSTRACT {
        estAutoIncrement: boolean;
    }
    interface CLE_AUTOINCREMENT extends CLE_ABSTRACT {
    }
    interface CLE_PATH extends CLE_ABSTRACT {
        valeurs: string[];
    }
    enum CAPACITE {
        VOLATILE = 1,
        MONO_ENREGISTREMENT = 2,
        MULTI_ENREGISTREMENT = 3
    }
    enum TYPE_BASE {
        INDEXEDDB,
        LOCALSTORAGE,
        MEMORY
    }
    interface DB_UPGRADE {
        base: BASE;
        actions: DB_UPGRADE_ACTION[];
        fixVersion: number;
    }
    interface DB_UPGRADE_ACTION {
        type: DB_UPGRADE_TYPE;
    }
    interface TABLE_CREER extends DB_UPGRADE_ACTION {
        nom: string;
        typeCle: CLE_TYPE;
        path: string[];
        indexes: INDEX[];
    }
    interface TABLE_SUPPRIMER extends DB_UPGRADE_ACTION {
        nom: string;
    }
    interface INDEX_CREER extends DB_UPGRADE_ACTION {
        table: string;
        index: INDEX;
    }
    interface INDEX_SUPPRIMER extends DB_UPGRADE_ACTION {
        table: string;
        nom: string;
    }
    interface GET {
        base: BASE;
        table: string;
        cle: any;
    }
    interface GETALL {
        base: BASE;
        table: string;
    }
    interface FIND {
        base: BASE;
        table: string;
        criteres: CRITERES_RECHERCHE;
    }
    interface COUNT {
        base: BASE;
        table: string;
        criteres?: CRITERES_RECHERCHE;
    }
    interface AJOUTER {
        base: BASE;
        table: string;
        element: any;
    }
    interface SUPPRIMER {
        base: BASE;
        table: string;
        cle: any;
    }
    interface METTRE_A_JOUR {
        base: BASE;
        table: string;
        cle: any;
        element: any;
    }
    enum CLE_TYPE {
        AUTOINCREMENT,
        PATH
    }
    interface INDEX {
        nom: string;
        estUnique: boolean;
        valeurs: string[];
    }
    interface CRITERES_RECHERCHE {
        critereType: CRITERE_TYPE;
        index: string;
        direction: CRITERE_DIRECTION;
    }
    interface CRITERES_RECHERCHE_SIMPLE extends CRITERES_RECHERCHE {
        valeurIndex: any[];
        inclureValeurReference: boolean;
    }
    interface CRITERES_RECHERCHE_BORNES extends CRITERES_RECHERCHE {
        minValeurIndex: any[];
        maxValeurIndex: any[];
        minInclureValeurReference: boolean;
        maxInclureValeurReference: boolean;
    }
    interface IDBEntry<Key, Value> {
        cle: Key;
        valeur: Value;
        rowid: number;
    }
    enum CRITERE_TYPE {
        EGAL,
        INFERIEUR,
        SUPERIEUR,
        BORNES
    }
    enum CRITERE_DIRECTION {
        PRECEDENT,
        PRECEDENT_UNIQUE,
        SUIVANT,
        SUIVANT_UNIQUE
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Dates = 8
    }
    interface ILibraryCommon {
        Dates: Dates.DatesCommon;
    }
}
declare module MyWay.Services.Dates {
    enum FORMATS_DATE {
        aaaammjj = 10
    }
    class DatesCommon extends Components.ComponentBase {
        private static CLASS_NAME;
        private static logger;
        constructor();
        init(): IPromesse<void>;
        dispose(): IPromesse<void>;
        getDateDuJour(format: FORMATS_DATE): string;
        private isBissextile;
        private getNbJoursMois;
        CompareDates(date1: Date, date2: Date, Periode: string): number;
        addDate(d: Date, jours: number, mois?: number, annees?: number): Date;
    }
}

/**
* Module qui fournit des méthodes utilitaires sur les tableaux
* @module MyWay.Donnees.ArrayExtension
* classe : StaticArrayExtension - public - Classe statique qui fournit des méthodes utilitaires sur les tableaux (classe utilisée depuis les managers)
* classe : ArrayExtension - public - Classe qui fournit des méthodes utilitaires sur les tableaux (classe utilisée depuis les agents)
*/
declare module MyWay.Services.Donnees {
    /**
    * Classe statique qui fournit des méthodes utilitaires sur les tableaux (classe utilisée depuis les managers)
    * @classe StaticArrayExtension
    * fonction : filtrer – public - Permet de filtrer les éléments dans un tableau en fonction des critères définis
    */
    class StaticArrayExtension {
        /**
        * Permet de filtrer les éléments dans un tableau en fonction des critères définis
        * @param collection {Array<any>} tableau contenant les données à filtrer
        * @param predicat {function} Action de filtre à appliquer sur chaque donnée contenue dans le tableau (la donnée courante est transmise en paramètre: data)
        *                            Doit retourner true si la donnée répond aux critères, false si la données ne répond pas aux critères et null en cas d'erreur
        * @return {Array<any>} Retourne les éléments du tableau qui correspondent au filtre (null en cas d'erreur)
        */
        static filtrer(collection: Array<any>, predicat: (data: any) => boolean): Array<any>;
    }
    /**
    * Classe qui fournit des méthodes utilitaires sur les tableaux (classe utilisée depuis les agents)
    * @classe ArrayExtension
    * fonction : filtrer – public - Permet de filtrer les éléments dans un tableau en fonction des critères définis
    */
    class ArrayExtension {
        /**
        * Permet de filtrer les éléments dans un tableau en fonction des critères définis
        * @param collection {Array<any>} tableau contenant les données à filtrer
        * @param predicat {function} action de filtre à appliquer sur chaque donnée contenue dans le tableau (la donnée courante est transmise en paramètre: data)
        * @return {Array<any>} Retourne les éléments du tableau qui correspondent au filtre
        */
        filtrer(collection: Array<any>, predicat: (data: any) => boolean): Array<any>;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Donnees = 9
    }
    interface ILibraryCommon {
        Donnees: Donnees.DonneesCommon;
    }
}
declare module MyWay.Services.Donnees {
    class DonneesCommon extends Components.ComponentBase {
        constructor();
        Enum: EnumExtension;
        Array: ArrayExtension;
        Object: ObjectExtension;
        String: StringExtension;
        init(): IPromesse<void>;
        dispose(): IPromesse<void>;
    }
}
/**
* Module qui fournit des méthodes utilitaires sur les enum
* @module MyWay.Donnees
* classe : StaticEnumExtension - public - Classe statique qui fournit des méthodes utilitaires sur les enum (classe utilisée depuis les managers)
* classe : EnumExtension - public - Classe qui fournit des méthodes utilitaires sur les enum (classe utilisée depuis les agents)
*/
declare module MyWay.Services.Donnees {
    /**
    * Classe statique qui fournit des méthodes utilitaires sur les enum (classe utilisée depuis les managers)
    * @classe StaticEnumExtension
    * fonction : getNames – public - Permet de récupérer tous les membres d'un enum sous la forme d'un tableau de chaines de caractères
    * fonction : getName – public - Permet de récupérer un membre d'un enum correspondant à la valeur passée en paramètre
    * fonction : getValues – public - Permet de récupérer toutes les valeurs d'un enum sous la forme d'un tableau de nombres
    * fonction : getValue – public - Permet de récupérer une valeur d'un enum correspondant au membre passé en paramètre
    * fonction : getValuesAndNames - public - Permet de récupérer toutes les valeurs et tous les membres d'un enum sous la forme d'un tableau de valeur, membre
    */
    class StaticEnumExtension {
        /**
        * Permet de récupérer tous les membres d'un enum sous la forme d'un tableau de chaines de caractères
        * @param e {any} enum pour lequel on veut récupérer les différents membres
        * @return {Array<string>} Retourne les membres de l'enum
        */
        static getNames(e: any): Array<string>;
        /**
        * Permet de récupérer un membre d'un enum correspondant à la valeur passée en paramètre
        * @param e {any} enum pour lequel on veut récupérer le membre
        * @param value {number} valeur pour laquelle on veut récupérer le membre de l'enum
        * @return {string} Retourne le membre de l'enum correspondant à la valeur passée en paramètre
        */
        static getName(e: any, value: number): string;
        /**
        * Permet de récupérer toutes les valeurs d'un enum sous la forme d'un tableau de nombres
        * @param e {any} enum pour lequel on veut récupérer les différentes valeurs
        * @return {Array<number>} Retourne les valeurs de l'enum
        */
        static getValues(e: any): Array<number>;
        /**
        * Permet de récupérer une valeur d'un enum correspondant au membre passé en paramètre
        * @param e {any} enum pour lequel on veut récupérer la valeur
        * @param name {string} membre pour lequel on veut récupérer la valeur
        * @return {number} Retourne la valeur de l'enum correspondant au membre passé en paramètre
        */
        static getValue(e: any, name: string): number;
        /**
        * Permet de récupérer toutes les valeurs et tous les membres d'un enum sous la forme d'un tableau d'objets contenant les membres et les valeurs de l'enum
        * @param e {any} enum pour lequel on veut récupérer les différents membres et les différentes valeurs
        * @return {number} Retourne toutes les valeurs et tous les membres de l'enum
        */
        static getValuesAndNames(e: any): any[];
    }
    /**
    * Classe qui fournit des méthodes utilitaires sur les enum (classe utilisée depuis les agents)
    * @classe EnumExtension
    * fonction : getNames – public - Permet de récupérer tous les membres d'un enum sous la forme d'un tableau de chaines de caractères
    * fonction : getName – public - Permet de récupérer un membre d'un enum correspondant à la valeur passée en paramètre
    * fonction : getValues – public - Permet de récupérer toutes les valeurs d'un enum sous la forme d'un tableau de nombres
    * fonction : getValue – public - Permet de récupérer une valeur d'un enum correspondant au membre passé en paramètre
    * fonction : getValuesAndNames - public - Permet de récupérer toutes les valeurs et tous les membres d'un enum sous la forme d'un tableau de valeur, membre
    */
    class EnumExtension {
        /**
        * Permet de récupérer tous les membres d'un enum sous la forme d'un tableau de chaines de caractères
        * @param e {any} enum pour lequel on veut récupérer les différents membres
        * @return {Array<string>} Retourne les membres de l'enum
        */
        getNames(e: any): Array<string>;
        /**
        * Permet de récupérer un membre d'un enum correspondant à la valeur passée en paramètre
        * @param e {any} enum pour lequel on veut récupérer le membre
        * @param value {number} valeur pour laquelle on veut récupérer le membre de l'enum
        * @return {string} Retourne le membre de l'enum correspondant à la valeur passée en paramètre
        */
        getName(e: any, value: number): string;
        /**
        * Permet de récupérer toutes les valeurs d'un enum sous la forme d'un tableau de nombres
        * @param e {any} enum pour lequel on veut récupérer les différentes valeurs
        * @return {Array<number>} Retourne les valeurs de l'enum
        */
        getValues(e: any): Array<number>;
        /**
        * Permet de récupérer une valeur d'un enum correspondant au membre passé en paramètre
        * @param e {any} enum pour lequel on veut récupérer la valeur
        * @param name {string} membre pour lequel on veut récupérer la valeur
        * @return {number} Retourne la valeur de l'enum correspondant au membre passé en paramètre
        */
        getValue(e: any, name: string): number;
        /**
        * Permet de récupérer toutes les valeurs et tous les membres d'un enum sous la forme d'un tableau d'objets contenant les membres et les valeurs de l'enum.
        * @param e {any} enum pour lequel on veut récupérer les différents membres et les différentes valeurs
        * @return {number} Retourne toutes les valeurs et tous les membres de l'enum
        */
        getValuesAndNames(e: any): any[];
    }
}
/**
* Module qui fournit des méthodes utilitaires sur les objets
* @module MyWay.Donnees.ObjectExtension
* classe : StaticObjectExtension - public - Classe statique qui fournit des méthodes utilitaires sur les objets (classe utilisée depuis les managers)
* classe : ObjectExtension - public - Classe qui fournit des méthodes utilitaires sur les objets (classe utilisée depuis les agents)
*/
declare module MyWay.Services.Donnees {
    /**
    * Classe statique qui fournit des méthodes utilitaires sur les objets (classe utilisée depuis les managers)
    * @classe StaticObjectExtension
    * fonction : getTaille – public - Retourne la taille d'un objet
    */
    class StaticObjectExtension {
        /**
        * Retourne la taille d'un objet
        * @param objet {any} objet dont on veut calculer la taille
        * @return {number} Retourne la taille de l'objet
        */
        static getTaille(objet: any): number;
    }
    /**
    * Classe qui fournit des méthodes utilitaires sur les objets (classe utilisée depuis les agents)
    * @classe ObjectExtension
    * fonction : getTaille – public - Retourne la taille d'un objet
    */
    class ObjectExtension {
        /**
        * Retourne la taille d'un objet
        * @param objet {any} objet dont on veut calculer la taille
        * @return {number} Retourne la taille de l'objet
        */
        getTaille(objet: any): number;
    }
}
/**
* Module qui fournit des méthodes utilitaires sur les chaines de caractères
* @module MyWay.Donnees.StringExtension
* classe : StaticStringExtension - public - Classe statique qui fournit des méthodes utilitaires sur les string (classe utilisée depuis les managers)
* classe : StringExtension - public - Classe qui fournit des méthodes utilitaires sur les string (classe utilisée depuis les agents)
*/
declare module MyWay.Services.Donnees {
    /**
    * Classe statique qui fournit des méthodes utilitaires sur les string (classe utilisée depuis les managers)
    * @classe StaticStringExtension
    * fonction : getEmptyStringIfNotStringOrGetItSelf – public - Retourne une chaine de caractères vide si le paramètre en entrée n'est pas une chaine de caractère. Retourne le paramètre en entrée sinon.
    */
    class StaticStringExtension {
        /**
        * Retourne une chaine de caractères vide si le paramètre en entrée n'est pas une chaine de caractère. Retourne le paramètre en entrée sinon.
        * @param valueToTest {any} valeur à tester/modifer
        * @return {number} Retourne une chaine de caractères vide si le paramètre en entrée n'est pas une chaine de caractère. Retourne le paramètre en entrée sinon
        */
        static getEmptyStringIfNotStringOrGetItSelf(valueToTest: any): string;
    }
    /**
    * Classe qui fournit des méthodes utilitaires sur les objets (classe utilisée depuis les agents)
    * @classe ObjectExtension
    * fonction : getTaille – public - Retourne la taille d'un objet
    */
    class StringExtension {
        /**
        * Retourne une chaine de caractères vide si le paramètre en entrée n'est pas une chaine de caractère. Retourne le paramètre en entrée sinon.
        * @param valueToTest {any} valeur à tester/modifer
        * @return {number} Retourne une chaine de caractères vide si le paramètre en entrée n'est pas une chaine de caractère. Retourne le paramètre en entrée sinon
        */
        getEmptyStringIfNotStringOrGetItSelf(valueToTest: any): string;
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Export = 10
    }
}
declare module MyWay.Services.Export {
    enum ExportMessageSubject {
        ExporterFichier = 0
    }
    interface IExportMessageContent {
    }
    interface IExportMessageContentExporterFichierRequest extends IExportMessageContent {
        donnees: IDonneesAExporter;
        format: FORMAT_FICHIER;
        options: IOptionsExportFichier;
    }
    interface IExportMessage extends Components.IMessage<ExportMessageSubject, IExportMessageContent> {
    }
}
/**
* Module de gestion des exports (module commun aux agents et aux managers)
* @module MyWay.Services.Export
*/
declare module MyWay.Services.Export {
    /**
    * Enumération permettant de définir le format du fichier à exporter
    * @enum Export.FORMAT_FICHIER
    */
    enum FORMAT_FICHIER {
        CSV
    }
    /**
    * Enumération permettant la localisation du fichier à exporter
    * Permet de formater les données suivant la localisation du logiciel.
    * @enum Export.LOCALISATION
    */
    enum LOCALISATION {
        EN = 0,
        FR = 1
    }
    /**
    * Description des options pour l'export dans un fichier
    * @interface Export.IOptionsExportFichier
    */
    interface IOptionsExportFichier {
        nomFichier?: string;
        localisation?: LOCALISATION;
        columnDetails?: IColumnDetail<any>[];
    }
    interface IColumnDetail<T> {
        index: number;
        addquote?: boolean;
        format?: (rawValue: T) => string | number;
    }
    interface ICellule {
        cellule: string | number;
    }
    interface ILigne {
        ligne: Array<ICellule>;
    }
    interface IDonneesAExporter {
        entetes: string[];
        contenu: Array<ILigne>;
    }
}

declare module MyWay.Services.Fichier {
    /**
    * Enumération correspondant aux différents types de fichier
    * Les valeurs inférieures à 100 sont réservées aux types de fichier autorisés pour la génération de document (API Impression)
    * @enum Fichier.TYPE_FICHIER
    */
    enum TYPE_FICHIER {
        PDF = 0,
        PDF_EMBED = 5,
        PDFA_1A = 10,
        PDFA_1B = 15,
        PDFX_1_2001 = 20,
        PDFX_1A_2001 = 25,
        PDFX_1A_2003 = 30,
        PDFX_3_2002 = 35,
        PDFX_3_2003 = 40,
        JSON = 105,
        TAR_GZ = 110,
        WORDML = 100
    }
    /**
    * Enumération correspondant aux différents types de données à sauvegarder
    * @enum Fichier.TYPE_DONNEES_A_SAUVER
    */
    enum TYPE_DONNEES_A_SAUVER {
        BLOB = 0,
        BASE64 = 1
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Fichier = 11
    }
}
declare module MyWay.Services.Fichier {
    enum FichierMessageSubject {
        SaveAs = 0
    }
    interface IFichierMessageContent {
    }
    interface IFichierMessageContentSaveAsRequest extends IFichierMessageContent {
        data: any;
        type: TYPE_FICHIER;
        nomFichier: string;
        typeDonnees: TYPE_DONNEES_A_SAUVER;
    }
    interface IFichierMessage extends Components.IMessage<FichierMessageSubject, IFichierMessageContent> {
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        TraitementNsdk = 12
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.TraitementNsdk {
    enum TraitementNsdkMessageSubject {
        Lancer = 0
    }
    interface ITraitementNsdkMessageContentLancer extends ITraitementNsdkMessageContent {
        data: string;
        traitement: string;
    }
    interface ITraitementNsdkMessageContent {
    }
    interface ITraitementNsdkMessage extends Components.IMessage<TraitementNsdkMessageSubject, ITraitementNsdkMessageContent> {
    }
}

declare module MyWay.Test.V1.Services {
    function generateEmptyLibraryAgent(): MyWay.Services.Components.ILibraryAgent;
    interface IDeclareAgentVersExterieurATester<EnumType> {
        component: MyWay.Services.Components.ComponentType;
        enumTypeMessage: any;
        classAgentName: string;
        beforeEach?: (pAgentBefore: ITestAgentBeforeParams) => void | MyWay.Services.IPromesse<void>;
        afterEach?: (pAgentAfter: ITestAgentAfterParams) => void | MyWay.Services.IPromesse<void>;
    }
    interface ITestAgentVersExterieur<EnumType> {
        only?: boolean;
        testMethodSuffix?: string;
        agentMethod: string;
        agentHasMethodParams: boolean;
        agentMethodParams?: any[];
        typeMessage: EnumType;
        hasRequestMessage: boolean;
        requestMessage?: any;
        requestMessageTestMode?: TestMode;
        requestMessageIframe?: Window;
        hasResponseMessage: boolean;
        responseMessage?: any;
        responseMessageTestMode?: TestMode;
        agentHasResult: boolean;
        agentResult?: any;
        agentResultTestMode?: TestMode;
        agentResultErreur: string;
        before?: (pAgentBefore: ITestAgentBeforeParams) => void | MyWay.Services.IPromesse<void>;
        after?: (pAgentAfter: ITestAgentAfterParams) => void | MyWay.Services.IPromesse<void>;
    }
    interface ITestAgentBeforeParams {
        instance: MyWay.Services.Components.IComponentAgent<any>;
        agentLibrary: MyWay.Services.Components.ILibraryAgent;
        isErrorMode: boolean;
    }
    interface ITestAgentAfterParams {
        instance: MyWay.Services.Components.IComponentAgent<any>;
        agentLibrary: MyWay.Services.Components.ILibraryAgent;
        isErrorMode: boolean;
    }
    function declareAgentVersExterieurATester<EnumType>(pParamsDeclare: IDeclareAgentVersExterieurATester<EnumType>): {
        execute: () => void;
        test: (pParams: ITestAgentVersExterieur<EnumType>) => void;
    };
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Context = 13
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Context {
    enum ContextMessageSubject {
        AddToContext = 0,
        AddToContextTech = 1,
        ClearContext = 2,
        AddToSharedContext = 3,
        RemoveFromSharedContext = 4,
        AddToProcessStepContext = 5,
        AddToGlobalContext = 6,
        AddToTempoContext = 7,
        AddListToContext = 8,
        AddToMainProcessContext = 9,
        GetFromMainProcessContext = 10,
        ChangeMainProcessName = 11,
        GetFromContext = 12,
        GetObjectFromContext = 13,
        GetTypedObjectFromContext = 14,
        ReinitialisationServiceAgent = 15,
        GetCurrentStepInfo = 16,
        GetSharedStorage = 17,
        GetWaitingProcesses = 18,
        GetPortals = 19,
        GetGlobalStorage = 20,
        SetMyWayCompatible = 21,
        GetListFromContext = 22,
        GetAuthentificationInfo = 23,
        GetParametresComptables = 24,
        PutProcessInPortalContext = 25,
        PutTaskInPortalContext = 26,
        GetCurrentProcessId = 27,
        GetCurrentMainProcess = 28,
        GetCurrentStepId = 29,
        Notification = 30,
        AnalyseApp = 31,
		GetFromSharedContext = 32
    }
    interface IContextMessageContentAddToContext extends IContextMessageContent {
        key: string;
        value: string;
    }
    interface IContextMessageContentAddToContextTech extends IContextMessageContent {
        kvp: IContextKeyValuePair[];
        level: StorageLevel;
        elementId?: string;
    }
    interface IContextMessageContentClearContext extends IContextMessageContent {
    }
    interface IContextMessageContentAddToSharedContext extends IContextMessageContent {
        key: string;
        value: string;
    }
    interface IContextMessageContentRemoveFromSharedContext extends IContextMessageContent {
        key: string;
    }
    interface IContextMessageContentAddToProcessStepContext extends IContextMessageContent {
        key: string;
        value: string;
        processStepId?: string;
    }
    interface IContextMessageContentAddToGlobalContext extends IContextMessageContent {
        kvp: IContextKeyValuePair[];
    }
    interface IContextMessageContentAddToTempoContext extends IContextMessageContent {
        kvp: IContextKeyValuePair[];
    }
    interface IContextMessageContentAddListToContext extends IContextMessageContent {
        kvp: IContextKeyValuePair[];
    }
    interface IContextMessageContentAddToMainProcessContext extends IContextMessageContent {
        key: string;
        value: string;
    }
    interface IContextMessageContentGetFromMainProcessContext extends IContextMessageContent {
        key: string;
    }
    interface IContextMessageContentChangeMainProcessName extends IContextMessageContent {
        name: string;
    }
    interface IContextMessageContentGetFromContext extends IContextMessageContent {
        key: string;
    }
	interface IContextMessageContentGetFromSharedContext extends IContextMessageContent {
        key: string;
    }
    interface IContextMessageContentGetObjectFromContext extends IContextMessageContent {
        keyArray: string[];
    }
    interface IContextMessageContentGetTypedObjectFromContext<T> extends IContextMessageContent {
        template: T;
    }
    interface IContextMessageContentReinitialisationServiceAgent extends IContextMessageContent {
        idServiceAgentGenere: string;
    }
    interface IContextMessageContentGetCurrentStepInfo extends IContextMessageContent {
    }
    interface IContextMessageContentGetSharedStorage extends IContextMessageContent {
    }
    interface IContextMessageContentGetWaitingProcesses extends IContextMessageContent {
    }
    interface IContextMessageContentGetPortals extends IContextMessageContent {
    }
    interface IContextMessageContentGetGlobalStorage extends IContextMessageContent {
    }
    interface IContextMessageContentSetMyWayCompatible extends IContextMessageContent {
    }
    interface IContextMessageContentGetListFromContext extends IContextMessageContent {
        keyArray: string[];
    }
    interface IContextMessageContentGetAuthentificationInfo extends IContextMessageContent {
    }
    interface IContextMessageContentGetParametresComptables extends IContextMessageContent {
    }
    interface IContextMessageContentGetWaitingProcesses extends IContextMessageContent {
    }
    interface IContextMessageContentPutProcessInPortalContext extends IContextMessageContent {
        processId: string;
    }
    interface IContextMessageContentPutTaskInPortalContext extends IContextMessageContent {
        taskId: string;
    }
    interface IContextMessageContentGetCurrentProcessId extends IContextMessageContent {
    }
    interface IContextMessageContentGetCurrentMainProcess extends IContextMessageContent {
    }
    interface IContextMessageContentGetCurrentStepId extends IContextMessageContent {
    }
    interface IContextMessageContentNotification extends IContextMessageContent {
    }
    interface IContextMessageContentAnalyseApp extends IContextMessageContent {
    }
    interface IContextMessageContent {
    }
    interface IContextMessage extends Components.IMessage<ContextMessageSubject, IContextMessageContent> {
    }
}
declare module MyWay.Services {
    interface IRequestSettingsExtended extends IRequestSettings {
        authentificationInfo?: Context.AuthentificationInfo;
        stepInfo?: Context.StepInfoExtended;
        parametresComptables?: Context.ParametresComptables;
    }
}
declare module MyWay.Services.Context {
}
declare module MyWay.Services {
    interface ICommonLibrary {
        Context: Context.IContextCommon;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Context {
    interface IContextCommon {
        getAuthentificationInfo(): MyWay.Services.IPromesse<AuthentificationInfo>;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Context {
    enum StorageLevel {
        Global = 0,
        Process = 1,
        Step = 2,
        Shared = 3,
        Tempo = 4,
        MainProcess = 5
    }
    enum PATH_PART {
        MAIN_PROCESS_ID = 0,
        LAST_PROCESS_ID = 1,
        PREVIOUS_PROCESS_ID = 2,
        STEP_ID = 3
    }
    interface IContext {
        globalStorage: IContextKeyValuePair[];
        sharedStorage: IContextKeyValuePair[];
        portals: IPortalContext[];
        waitingProcesses: IProcess[];
    }
    interface IPortalContext {
        temporayContextStorage: IContextKeyValuePair[];
        processes: IProcess[];
        currentPath: string;
        isSingle: boolean;
        GetProcess(processId: string): MyWay.Services.Context.IProcess;
        GetProcessByPathPart(path: string, pathPart: PATH_PART): MyWay.Services.Context.IProcess;
        GetCurrentProcess(): IProcess;
        GetCurrentMainProcess(): IProcess;
        GetCurrentStep(process: IProcess): IProcessStep;
    }
    interface IContextKeyValuePair {
        Key: string;
        Value: string;
    }
    interface IProcessElement {
        id: string;
        contextStorage: IContextKeyValuePair[];
        type: string;
        codeEtape: string;
        getPath(): string;
        authorizedOutputs: number[];
        creationDate: number;
    }
    interface IProcess extends IProcessElement {
        icon: string;
        displayName: string;
        putInWaitTime: number;
        subElements: IProcessElement[];
        knownSteps: string[];
        codeProcess: string;
        currentInnerElementPath: string;
        typeProcess: string;
        estApplicationExterne: boolean;
        outputContracts: string[];
        isSubProcess: boolean;
        contexteClientId: string;
        lastNextTime: number;
    }
    interface IProcessStep extends IProcessElement {
        codeMetier: string;
        parentPath: string;
        codeApplication: string;
        nomApplication: string;
        url: string;
        boundId: string;
        isEnd: boolean;
        nextStep: IProcessStep;
        actions: IStepAction[];
        valeurEntree: number;
        contrats: IStepContrat[];
        processusMaitre: boolean;
        processName: string;
        maintienIFrame: boolean;
        maintienIFrameLastAction: boolean;
        etapeResultAsString: string;
        isRouteur: boolean;
        etatEtape: EtatEtape;
        displayTime: number;
        diagnosticTraceSentForStep: boolean;
    }
    enum EtatEtape {
        NONE = 0,
        STARTED = 1,
        RESET = 2
    }
    class IStepAction {
        Nom: string;
        CodeEtape: string;
        ValeurSortie: number;
        SurchargeValeurEntree: number;
        NouvelleActivite: boolean;
        EstExterne: boolean;
        Options: string;
    }
    class IStepContrat {
        Code: string;
        Type: string;
        Longueur: number;
        Nullable: boolean;
        Mode: string;
    }
    interface IStepOption {
        ProcessusMaitre?: boolean;
        ChangeTypeProcess?: string;
        MaintienIFrame?: boolean | string;
        NouvelleIFrame?: boolean;
        OutputContracts?: string[];
        Mappage?: string[];
    }
    interface IStepActionOption {
        ProcessusMaitre?: boolean;
        ChangeTypeProcess?: string;
        MaintienIFrame?: boolean | string;
        NouvelleIFrame?: boolean;
        OutputContracts?: string[];
        Mappage?: string[];
    }
    interface IProcessOption {
        Icon?: string;
        ForeColor?: string;
        BackColor?: string;
        TypeProcess?: string;
        EstApplicationExterne?: boolean;
    }
    class AnalyseResult {
        TotalWatchers: number;
        TotalWatchers2: number;
        TotalWatchers3: number;
        WatcherByScope: AnalyseScope[];
        constructor();
        ToString(): string;
    }
    class AnalyseScope {
        Name: string;
        WatcherCount: number;
        constructor(Name: string, WatcherCount: number);
    }
}
declare module MyWay.Services.Context {
    class StepInfo {
        StepCode: string;
        BusinessCode: string;
        ProcessCode: string;
        ValeurEntree: number;
        Contrats: ContratInfo[];
        AuthorizedOutputs: number[];
        ProcessType: string;
        ScopeInitialise: boolean;
        constructor();
    }
    class StepInfoExtended extends StepInfo {
        CurrentStepId: string;
        CurrentProcessId: string;
        CurrentParentProcessId: string;
        NomComposant: string;
        NiveauTrace: number;
        Aide: any;
        VersionComposant: string;
        Diagnostic: boolean;
        PreviousStepEndTime: number;
        StartTime: number;
        DisplayTime: number;
        DiagnosticTraceSentForStep: boolean;
        CurrentPath: string;
        constructor();
    }
    class ContratInfo {
        /**
         * Correspond au nom de la donnée du contexte
         *
         */
        NomData: string;
        /**
        * Correspond au mode IN (entrée) ou OUT (sortie)
        *
        */
        Mode: string;
    }
    class DonneesLocales {
        AuthentificationInfo: AuthentificationInfo;
        ParametresComptables: ParametresComptables;
        ParametresNumerisation: ParametresNumerisation;
        ParametresServeurPoste: ParametresServeurPoste;
    }
    /**
     * Ensemble des données liées à l'utilisateur bancaire
     */
    class AuthentificationInfo {
        /**
         * Code Etablissement (COCXBQ)
         */
        codeEtablissement: string;
        /**
         * Correspond au nom du poste de l'utilisateur
         *
         * Transmis à travers le header X-identifiantPoste des requêtes envoyées à travers le [[CoreCommon.SendRequest]]
         */
        numeroStationTravail: string;
        /**
         * Environnement MySys (DUA, VFO, ...)
         */
        ENVIRON: string;
        /**
         * Données relatives à l'agent
         */
        agentConnecte: AgentConnecte;
        /**
         * Données relatives au guichet
         */
        guichetAgent: GuichetAgent;
        constructor();
    }
    class ParametresComptables {
        codeGuichetInterbancaire: string;
        edsInterneGuichetComptable: string;
        /**
         * Correspond à l'identifiant de guichet opération
         *
         * Transmis à travers le header X-identifiantGuichetOperation des requêtes envoyées à travers le [[CoreCommon.SendRequest]]
         */
        edsExterneGuichetComptable: string;
        edsTypeGuichetComptable: string;
        edsInterneRattachementGuichetComptable: string;
        edsExterneRattachementGuichetComptable: string;
        edsTypeRattachementGuichetComptable: string;
        dateOperationJourneeComptable: string;
        typeCA: string;
        libelleEdsRattachementGuichetComptable: string;
        numTelEdsRattachementGuichetComptable: string;
    }
    class ParametresNumerisation {
        ModeNumr: string;
    }
    class ParametresServeurPoste {
        NomServeur: string;
    }
    class AgentConnecte {
        /**
         * Reference externe de l'agent (COCEAG)
         */
        referenceExterneAgent: string;
        /**
         * Type de fonction (CTCEAG)
         */
        typeFonction: string;
        /**
         * Numero interne EDS (NOCEEL)
         */
        numeroInterneEds: string;
        /**
         * Type d'EDS (CTCEEL)
         */
        typeEds: string;
        /**
         * Numero EDS Superieur (NOCEEL)
         */
        numeroEdsSuperieur: string;
        /**
         * Type EDS de rattachement (CECEFS)
         */
        typeEdsRattachement: string;
        /**
         * Reference externe de l'EDS de rattachement (COCEEL)
         */
        referenceExterneEdsRattachemen: string;
        /**
         * ?? (LICEE1)
         */
        LICEE1: string;
        /**
         * Numero externe Eds (COCEEL)
         */
        numeroExterneEds: string;
        /**
         * Libelle EDS (LICELI)
         */
        libelleEds: string;
        /**
         * Désignation longue Agent (LICEAG)
         */
        designationLongueAgent: string;
        /**
         * Libelle du type d'EDS (LICEEL)
         */
        libelleTypeEds: string;
        /**
         * Designation du poste fonctionnel (LNCEAG)
         */
        designationPosteFonctionnel: string;
        /**
         * Code civilité (LIDAVC)
         */
        codeCivilite: string;
        /**
         * Nom de l'agent (LIDANP)
         */
        nomFamillePersonnePhysique: string;
        /**
         * Prenom de l'agent (LIDAPP)
         */
        prenom: string;
        nomUsagePersonnePhysique: string;
        /**
         * Adresse mail (LBCEAM)
         */
        adresseMessagerie: string;
        identifiantInterneSite: string;
        /**
         * Ligne d'adresse 2 (LIDGV1)
         */
        ligne2Adresse: string;
        /**
         * Ligne d'adresse 3 (LIDGV3)
         */
        ligne3Adresse: string;
        /**
         * Ligne d'adresse 4 (LIDGV4)
         */
        ligne4Adresse: string;
        /**
         * Ligne d'adresse 5 (LIDGV5)
         */
        ligne5Adresse: string;
        /**
         * Ligne d'adresse 6 (LIDGV6)
         */
        ligne6Adresse: string;
        /**
         * ?? (NODATP)
         */
        NODATP: string;
        /**
         * Code pays (??)
         */
        codeInseePays: string;
        /**
         * Debut de validité (DDCEDS)
         */
        dateDebutValidite: string;
        /**
         * Fin de validité (DFCEDS)
         */
        dateFinValidite: string;
        /**
         * Qualité agent (CTCEQU)
         */
        codeQualiteAgent: string;
        /**
         * Indicateur de fin de structure (code)
         */
        codeIndicateurFinStructure: string;
        /**
         * Debut de validité reférentiel (?)
         */
        dateDebutValiditeReferentiel: string;
        constructor();
    }
    class GuichetAgent {
        /**
         * Code Guichet (??)
         */
        codeGuichetInterbancaire: string;
        /**
         * Numero EDS (??)
         */
        numeroEdsGuichet: string;
        /**
         * Reference externe EDS (??)
         */
        referenceExterneEdsGuichet: string;
        /**
         * Type EDS (??)
         */
        typeEdsGuichet: string;
        /**
         * ?? (DAGXOP)
         */
        DAGXOP: string;
    }
    class InfosUserPoste {
        IdentifiantUser: string;
        DomaineADUser: string;
        CodeEtabPoste: string;
        CodeEnvPoste: string;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Display = 14
    }
}
declare module MyWay.Services.Display {
    enum DisplayMessageSubject {
        Redirect = 0,
        RedirectInStep = 1,
        PrepareSubmit = 2,
        DisplayMessage = 3,
        GetMyIFrameId = 4,
        Refresh = 5
    }
    interface IDisplayMessageContent {
    }
    interface IDisplayMessageContentRedirect extends IDisplayMessageContent {
        url?: string;
        previousUrl?: string;
    }
    interface IDisplayMessageContentRedirectInStep extends IDisplayMessageContent {
        url: string;
    }
    interface IDisplayMessageContentPrepareSubmit extends IDisplayMessageContent {
        url: string;
    }
    interface IDisplayMessageContentDisplayMessage extends IDisplayMessageContent {
        message: IMessage;
    }
    interface IDisplayMessageContentGetMyIFrameId extends IDisplayMessageContent {
    }
    interface IDisplayMessageContentRefresh extends IDisplayMessageContent {
    }
    interface IDisplayMessage extends Components.IMessage<DisplayMessageSubject, IDisplayMessageContent> {
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Context: Context.IContextAgent;
    }
}
declare module MyWay.Services.Context {
    interface IContextAgent extends IContextCommon {
        VersionComposant: string;
        AddToContext(key: string, value: string): IPromesse<any>;
        AddToMainProcessContext(key: string, value: string): IPromesse<any>;
        AddListToContext(kvp: MyWay.Services.Context.IContextKeyValuePair[]): IPromesse<any>;
        GetFromContext(key: string): IPromesse<string>;
		GetFromSharedContext(key: string): IPromesse<string>;
        GetObjectFromContext<T>(keyArray: string[]): IPromesse<any>;
        GetTypedObjectFromContext<T>(template: T): IPromesse<T>;
        GetListFromContext(keyArray: string[]): IPromesse<MyWay.Services.Context.IContextKeyValuePair[]>;
        GetAuthentificationInfo(): IPromesse<AuthentificationInfo>;
        GetParametresComptables(): IPromesse<ParametresComptables>;
        Redirect(url?: string, previousUrl?: string): IPromesse<any>;
        GetWaitingProcesses(): IPromesse<MyWay.Services.Context.IProcess[]>;
        PutProcessInPortalContext(processId: string): IPromesse<any>;
        PutTaskInPortalContext(taskId: string): IPromesse<any>;
        GetCurrentProcessId(): IPromesse<string>;
        GetCurrentStepId(): IPromesse<string>;
        reinitialisationServiceAgent(pIdGenere: string): IPromesse<void>;
        GetCurrentStepInfo(): IPromesse<Context.StepInfoExtended>;
        SetMyWayCompatible(): IPromesse<boolean>;
        SubscribeToNotification(onNotification: {
            (notification: NotificationMessage, agent?: IServiceAgent): void;
        }[], serviceAgent: IServiceAgent): IPromesse<any>;
        AnalyseApp(): AnalyseResult;
        ChangeMainProcessName(name: string): IPromesse<any>;
        AddToSharedContext(key: string, value: string): IPromesse<any>;
        RemoveFromSharedContext(key: string): IPromesse<any>;
        StepInfo: StepInfoExtended;
        AnalyseApp(): AnalyseResult;
        SetContextListener(key: string, callback: () => void): any;
        sendNotification(notification: NotificationMessage, event?: MessageEvent, sendResponseCallback?: Message.ResponseCallback): void;
        retirerListenerNotification(onNotification: (notification: NotificationMessage, agent?: IServiceAgent) => void): void;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        JAB: JAB.JABAgent;
    }
}
/**
* Module de gestion des jab
* @module MyWay.Services.JAB
* classe : JABAgent - public - Classe permettant la gestion des Journaux d'Archivage Bancaires
*/
declare module MyWay.Services.JAB {
    /**
    * Classe permettant la gestion des Journaux d'Archivage Bancaires
    */
    class JABAgent extends Components.ComponentAgentBase<IJABMessage, JABMessageSubject, IJABMessageContent> {
        /**
         * Constructeur de la classe JABAgent
         */
        constructor();
        Enregistrer(data: string): IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        JAB: JAB.JABAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface ServiceAgent {
        Donnees: Donnees.DonneesCommon;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        Dates: Dates.DatesCommon;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgent {
        Dates: Dates.DatesCommon;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        BaseDeDonnees: BaseDeDonnees.BaseDeDonneesAgent;
    }
}
declare module MyWay.Services.BaseDeDonnees {
    class BaseDeDonneesAgent extends Components.ComponentAgentBase<Messages.IBaseDeDonneesMessage, Messages.BaseDeDonneesMessageSubject, Messages.IBaseDeDonneesMessageContent> {
        /**
        * Constructeur de la classe BaseDeDonneesAgent
        */
        constructor();
        getBases(): IPromesse<messages.BASE_DETAIL[]>;
        get(pParametres: messages.GET): IPromesse<any>;
        getAll(pParametres: messages.GETALL): IPromesse<IInstanceAvecCle<any, any>[]>;
        find(pParametres: messages.FIND): IPromesse<IInstanceAvecCle<any, any>[]>;
        count(pParametres: messages.COUNT): IPromesse<number>;
        ajouter(pParametres: messages.AJOUTER): IPromesse<any>;
        supprimer(pParametres: messages.SUPPRIMER): IPromesse<void>;
        modifier(pParametres: messages.METTRE_A_JOUR): IPromesse<void>;
        resetAll(): IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        BaseDeDonnees: BaseDeDonnees.BaseDeDonneesAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface ServiceAgent {
        TraitementNsdk: TraitementNsdk.TraitementNsdkAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        TraitementNsdk: TraitementNsdk.TraitementNsdkAgent;
    }
}
/**
* Module de gestion des traitement Nsdk
* @module MyWay.Services.TraitementNsdk
* classe : TraitementNsdkAgent - public - Classe permettant Le lancement de traitment NSDK depuis MyWay
*/
declare module MyWay.Services.TraitementNsdk {
    /**
    * Classe permettant la gestion des traitements NSDK depuis MyWay
    */
    class TraitementNsdkAgent extends Components.ComponentAgentBase<ITraitementNsdkMessage, TraitementNsdkMessageSubject, ITraitementNsdkMessageContent> {
        /**
         * Constructeur de la classe TraitementNsdkAgent
         * @param {AgentLibrary}   agentLibrary  [description]
         * @param {ErreurCallback} errorCallback [description]
         */
        constructor();
        Lancer(traitement: string, data: string): IPromesse<any>;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Export: Export.ExportAgent;
    }
}
/**
* Module de gestion des exports
* @module MyWay.Services.Export
* @author Laurie Marchaterre
*/
declare module MyWay.Services.Export {
    /**
    * Classe permettant de gérer les exports
    */
    class ExportAgent extends Components.ComponentAgentBase<IExportMessage, ExportMessageSubject, IExportMessageContent> {
        private static CLASS_NAME;
        private static logger;
        /**
         * Constructeur de la classe ExportAgent
         */
        constructor();
        /**
         * Permet d'exporter un tableau de données Json dans un fichier.
         * @param {IDonneesAExporter}   donnees        Données Json à exporter dans un fichier
         * @param {FORMAT_FICHIER} format       Format du fichier exporté
         * @param {IOptionsExportFichier} options        Options d'exportation du fichier
         * @return {IPromesse<void>}
         *
         * ~~~ts
         * serviceAgent.export.exporterFichier(donnees: IDonneesAExporter, format: FORMAT_FICHIER, options: IOptionsExportFichier).then(() => {
         * // Le fichier a été exporté
         * ...
         * * }).catch((erreur: MyWay.Services.Erreur) => {
         * // Renvoi une erreur
         * ...
         * });
         * ~~~
         */
        exporterFichier(donnees: IDonneesAExporter, format: FORMAT_FICHIER, options: IOptionsExportFichier): IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Export: Export.ExportAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Fichier: Fichier.FichierAgent;
    }
}
declare module MyWay.Services.Fichier {
    /**
    * Classe gestion des fichiers
    * @classe FichierAgent
    * fonction : saveAs – public - Permet de sauvegarder un fichier sur le filesystem
    */
    class FichierAgent extends Components.ComponentAgentBase<IFichierMessage, FichierMessageSubject, IFichierMessageContent> {
        constructor();
        /**
        * Permet de sauvegarder un fichier sur le poste: le fichier est téléchargé par le navigateur
        * @param data {any} données à sauvegarder
        * @param type {TYPE_FICHIER} type du fichier à télécharger
        * @param nomFichier {string} nom attribué au fichier téléchargé
        * @param typeDonnees {TYPE_DONNEES_A_SAUVER} type de données à enregistrer (Optionnel: par défaut TYPE_DONNEES_A_SAUVER.BLOB)
        *
        * ~~~ts
        * // Exemple de création d'un fichier PDF
        * serviceAgent.Fichier.saveAs({}, MyWay.Services.Fichier.TYPE_FICHIER.PDF, "Fichier de test.pdf")
        *   .then(function () {
        *       // Sauvegarde OK
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Sauvegarde KO
        *   });
        * // Exemple de création d'un fichier JSON
        * serviceAgent.Fichier.saveAs("{ \"Key\": \"Value\" }", MyWay.Services.Fichier.TYPE_FICHIER.JSON, "Fichier de test.json")
        *   .then(function () {
        *       // Sauvegarde OK
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Sauvegarde KO
        *   });
        * ~~~
        */
        saveAs(data: any, type: TYPE_FICHIER, nomFichier: string, typeDonnees?: TYPE_DONNEES_A_SAUVER): IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Fichier: Fichier.FichierAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        ContexteClient = 15
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.ContexteClient {
    enum ContextClientMessageSubject {
        GetContextesParClients = 0,
        GetId = 1,
        GetClient = 2,
        SetClient = 3,
        GetProperty = 4,
        AddToList = 5,
        SetProperty = 6,
        RemoveFromList = 7,
        DeleteProperty = 8,
        GetContenu = 9,
        SetContenu = 10,
        GetContextes = 11,
        DestroyContext = 12,
        NewContext = 13,
        ChangeContextProcess = 14,
        ChangeContextMode = 15,
        DetailsContext = 16,
        SetReloadSynthese = 17
    }
    interface IContextClientMessageContentSetClientRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        client: string;
        expediteur: string;
    }
    interface IContextClientMessageContentGetRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        cle: string;
    }
    interface IContextClientMessageContentGetContenuRequest extends IContextClientMessageContent {
        idClient: string;
    }
    interface IContextClientMessageContentGetContenuResponse extends IContextClientMessageContent {
        valeur: any;
    }
    interface IContextClientMessageContentAddRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        cle: string;
        valeur: any;
        expediteur: string;
    }
    interface IContextClientMessageContentSetRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        cle: string;
        valeur: any;
        expediteur: string;
    }
    interface IContextClientMessageContentSetContenuRequest extends IContextClientMessageContent {
        idClient: string;
        valeur: any;
        expediteur: string;
    }
    interface IContextClientMessageContentSetReloadSyntheseRequest extends IContextClientMessageContent {
        idClient: string;
        expediteur: string;
    }
    interface IContextClientMessageContentSetContenuResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContentSetReloadSyntheseResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContentRemoveRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        cle: string;
        expediteur: string;
    }
    interface IContextClientMessageContentDeleteRequest extends IContextClientMessageContent {
        idContexteClient?: string;
        cle: string;
        expediteur: string;
    }
    interface IContextClientMessageContentGetContextesParClientsResponse extends IContextClientMessageContent {
        ids: string[];
    }
    interface IContextClientMessageContentGetIdResponse extends IContextClientMessageContent {
        id: string;
    }
    interface IContextClientMessageContentGetClientResponse extends IContextClientMessageContent {
        id: string;
    }
    interface IContextClientMessageContentGetResponse extends IContextClientMessageContent {
        valeur: string;
    }
    interface IContextClientMessageContentAddResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContentSetResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContentRemoveResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContentDeleteResponse extends IContextClientMessageContent {
        estOk: boolean;
    }
    interface IContextClientMessageContent {
    }
    interface IContextClientMessage extends Components.IMessage<ContextClientMessageSubject, IContextClientMessageContent> {
    }
}
/**
 * Contexte client
 *
 * <uml>
 *
 * title Agents du contexte client
 *
 * class ContextClientAgent {
 *   +getContextesParClients(): string[]
 *   +getId(): string
 *   +getIdClient(): string
 *   +setIdClient(): void
 *   +getProperty(pCle: string, pValeur: any): IPromesse<string>
 *   +addToList(pCle: string, pValeur: any): IPromesse<boolean>
 *   +setProperty(pCle: string): IPromesse<boolean>
 *   +removeFromList(pCle: string): IPromesse<boolean>
 *   +deleteProperty(pCle: string): IPromesse<boolean>
 * }
 *
 * class ContexteClientTechAgent  {
 *   +getContextes(): IPromesse<string[]>
 *   +detruireContexte(pIdContexteClient: string): IPromesse<boolean>
 *   +nouveauContexte(pIdClient?: string): IPromesse<string>
 *   +changerContexteDuProcessus(pIdContexteClient: string, pCodeProcessus: string): IPromesse<void>
 *   +changerModeContexteClient(pIdContexteClient: string, pMode: Messages.ContexteClientMode): IPromesse<void>
 *   +getDetailsContexte(pIdContexte: string): IPromesse<Messages.ITechActionGetDetailsContextResponse>
 *   +setClientOfContexteSpecifique(pIdContexte: string, pClient: string): IPromesse<void>
 *   +getPropertyOfContexteSpecifique(pIdContexte: string, pCle: string): IPromesse<any>
 *   +addToListOfContexteSpecifique(pIdContexte: string, pCle: string, pValeur: any): IPromesse<boolean>
 *   +setPropertyOfContexteSpecifique(pIdContexte: string, pCle: string, pValeur: any): IPromesse<boolean>
 *   +removeFromListOfContexteSpecifique(pIdContexte: string, pCle: string): IPromesse<boolean>
 *   +deletePropertyOfContexteSpecifique(pIdContexte: string, pCle: string): IPromesse<boolean>
 * }
 *
 * ContextClientAgent <|-- ContexteClientTechAgent
 *
 * note "Classe disponible uniquement avec le framework TECH" as NoteContexteClientTechAgent
 *
 * NoteContexteClientTechAgent .. ContexteClientTechAgent
 *
 * </uml>
 */
declare module MyWay.Services.ContexteClient {
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.ContexteClient.Messages {
    interface ITechActionGetContextesResponse {
        idContextes: string[];
    }
    interface ITechActionDestroyContexteRequest {
        idContexte: string;
        expediteur: string;
    }
    interface ITechActionDestroyContexteResponse {
        isDestroy: boolean;
    }
    interface ITechActionNewContextRequest {
        idClient?: string;
        expediteur: string;
    }
    interface ITechActionNewContextResponse {
        idContexte: string;
    }
    interface ITechActionChangeContextProcessRequest {
        idContexte: string;
        codeProcessus: string;
        expediteur: string;
    }
    interface ITechActionChangeContextModeRequest {
        idContexte: string;
        mode: ContexteClientMode;
    }
    interface ITechActionGetDetailsContextRequest {
        idContexte: string;
    }
    interface ITechActionGetDetailsContextResponse {
        idClient: string;
        idContexte: string;
        mode: ContexteClientMode;
        processus: string[];
        content: {
            [key: string]: any;
        };
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.ContexteClient.Messages {
    enum ContexteClientMode {
        AUTOMATIQUE,
        MANUEL
    }
    interface IMiseAJourContexteClient {
        contexteClientId: string;
        type: MiseAJourContexteClientType;
        cleModifie?: string;
        details?: any;
    }
    enum MiseAJourContexteClientType {
        addToList,
        removeFromList,
        deleteProperty,
        setProperty,
        setClient,
        nouveauContexte,
        detructionContexte,
        changementContexte
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        ConfigurationPoste = 16
    }
}
declare module MyWay.Services.ConfigurationPoste {
    enum ConfigurationPosteMessageSubject {
        GetConfiguration = 0
    }
    interface IConfigurationPosteMessageContent {
    }
    interface IConfigurationPosteMessageContentGetConfiguration extends IConfigurationPosteMessageContent {
    }
    interface IConfigurationPosteMessage extends Components.IMessage<ConfigurationPosteMessageSubject, IConfigurationPosteMessageContent> {
    }
}
declare module MyWay.Services.ConfigurationPoste {
    interface IConfigPosteDTO<T extends IConfigPosteDetails> {
        configuration: T;
        dateConfig: number;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.ConfigurationPoste {
    interface IConfigPosteDetails {
        [key: string]: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.ConfigurationPoste {
    interface IConfigDetailsBase extends IConfigPosteDetails {
        ENVIRONNEMENT: string;
        VERSION: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.ConfigurationPoste {
    interface IGetConfigurationPosteParams {
        poste?: string;
        etablissement?: string;
        refreshLocalStorage?: boolean;
    }
}
declare module MyWay.Services.Bug {
}

/**
* Module de gestion du contexte
* @module MyWay.Services.Context
*/
declare module MyWay.Services.Context {
    interface ISauvegardeScopeParam {
        donneesScopeASauvegarder?: string[];
        disableScopeSave?: boolean;
        scopeType?: ScopeType;
    }
    class ScopeData {
        id: number;
        data: any;
        children: ScopeData[];
    }
    class ServiceData {
        name: string;
        data: any;
        constructor(name: string, data: any);
    }
    class ContextAgent extends Components.ComponentAgentBase<IContextMessage, ContextMessageSubject, IContextMessageContent> implements IContextAgent, IContextCommon {
        private static CLASS_NAME;
        private static logger;
        private _serviceAgent;
        StepInfo: StepInfoExtended;
        VersionComposant: string;
        sauvegardeScopeParam: ISauvegardeScopeParam;
        constructor();
        init(pAgentLibrairy: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        /**
        * Permet d'ajouter une données au contexte
        *
        * ~~~ts
        * serviceAgent.Context.AddToContext('global', 'NODAPE', '123456')
        *    .then(() => {
        *       // Donnée ajoutée au contexte
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Ajout de la donnée KO: traitement de l'erreur
        * });
        * ~~~
        * @param key {string} nom de la clé de la donnée
        * @param value {string} nom de la valeur de la donnée
        * @return {IPromesse<boolean>}
        */
        AddToContext(key: string, value: string): IPromesse<boolean>;
        AddToSharedContext(key: string, value: string): IPromesse<any>;
        RemoveFromSharedContext(key: string): IPromesse<any>;
        AddToMainProcessContext(key: string, value: string): IPromesse<any>;
        /**
        * Permet d'ajouter une liste de données au contexte
        *
        * ~~~ts
        * serviceAgent.Context.AddListToContext(kvp)
        *    .then(() => {
        *       // Données ajoutées au contexte
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Ajout des données KO: traitement de l'erreur
        * });
        * ~~~
        * @param kvp {MyWay.Services.Context.IContextKeyValuePair[]} Liste de tuple clé/valeur à ajouter au contexte
        * @return {IPromesse<any>}
        */
        AddListToContext(kvp: MyWay.Services.Context.IContextKeyValuePair[]): IPromesse<any>;
        /**
        * Permet de récupérer une donnée depuis le contexte
        *
        * ~~~ts
        * serviceAgent.Context.GetFromContext('NODAPE')
        *    .then((value: string) => {
        *       console.log("la valeur récupérée est : " + value);
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Récupération de la donnée KO: traitement de l'erreur
        * });
        * ~~~
        * @param key {string} Clé de la donnée
        * @return {IPromesse<string>}
        */
        GetFromContext(key: string): IPromesse<string>;
		GetFromSharedContext(key: string): IPromesse<string>;
        GetObjectFromContext(keyArray: string[]): IPromesse<any>;
        GetTypedObjectFromContext<T>(template: T): IPromesse<T>;
        /**
        * Permet de récupérer une liste de données depuis le contexte
        *
        * ~~~ts
        * serviceAgent.Context.GetListFromContext(keyArray)
        *    .then((kvp: MyWay.Services.Context.IContextKeyValuePair[]) => {
        *        for(let i in kvp) {
        *           console.log('la valeur de ' + kvp[i].Key + ' a été récupérée: ' + kvp[i].Value);
        *        }
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Récupération des données KO: traitement de l'erreur
        * });
        * ~~~
        * @param keyArray {string[]} La liste de clé à récupérer
        * @return {IPromesse<MyWay.Services.Context.IContextKeyValuePair[]>}
        */
        GetListFromContext(keyArray: string[]): IPromesse<MyWay.Services.Context.IContextKeyValuePair[]>;
        /**
        * Récupère les données d'authentification
        *
        * ~~~ts
        * serviceAgent.Context.GetAuthentificationInfo()
        *    .then((authenticationInfo: AuthentificationInfo) => {
        *        console.log('user connecté :' + authentificationInfo.agentConnecte.referenceExterneAgent);
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Récupération des données d'authentification KO: traitement de l'erreur
        * });
        * ~~~
        * @param keyArray {string[]} La liste de clé à récupérer
        * @return {IPromesse<AuthentificationInfo>}
        */
        GetAuthentificationInfo(): IPromesse<AuthentificationInfo>;
        getAuthentificationInfo(): IPromesse<AuthentificationInfo>;
        GetParametresComptables(): IPromesse<ParametresComptables>;
        Redirect(url?: string, previousUrl?: string): IPromesse<any>;
        GetWaitingProcesses(): IPromesse<MyWay.Services.Context.IProcess[]>;
        PutProcessInPortalContext(processId: string): IPromesse<any>;
        PutTaskInPortalContext(taskId: string): IPromesse<any>;
        GetCurrentProcessId(): IPromesse<string>;
        GetCurrentStepId(): IPromesse<string>;
        reinitialisationServiceAgent(pIdGenere: string): IPromesse<void>;
        GetCurrentStepInfo(): IPromesse<Context.StepInfoExtended>;
        SetMyWayCompatible(): IPromesse<boolean>;
        private listenersNotificationsCorrespondance;
        SubscribeToNotification(onNotifications: {
            (notification: NotificationMessage, agent?: IServiceAgent): void;
        }[], serviceAgent: IServiceAgent): IPromesse<any>;
        retirerListenerNotification(onNotificationASupprimer: (notification: NotificationMessage, agent?: IServiceAgent) => void): void;
        /**
         * Permet de changer le titre contextuel d'une application.
         *
         * ~~~ts
         * // Changement du titre de son application
         * serviceAgentExtended.Context.ChangeMainProcessName('Nouveau nom de l'application').then((result: MyWay.Services.Context.IPortalContext) => {
         * ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string}  name
         * Correspond au nom de l'application
         *
         * @return {IPromesse<any>}
         * Promesse retournant le context du portail courant "MyWay.Services.Context.IPortalContext"
         *
         */
        ChangeMainProcessName(name: string): IPromesse<any>;
        getAllElementsWithAttribute(attribute: any): any[];
        SauvegarderDonneesScope(): any;
        private _addToProcessStepContext;
        private _getAngularScope;
        private _getOverallScopeContent;
        private _getScopeData;
        private _setScope;
        private _getServiceData;
        private _setServices;
        private _getScopeById;
        private _isObject;
        private _getScopeContent;
        getId(element: any): string;
        getClasses(element: any): string;
        InitialiserDonneesScope(stepInfo: StepInfoExtended): IPromesse<boolean>;
        sendNotification(notification: NotificationMessage): IPromesse<void>;
        reception(pMessage: IContextMessage): IPromesse<any>;
        AnalyseApp(): AnalyseResult;
        CountWatcher2(): number;
        CountWatcher3(): number;
        private _listenedKey;
        private _listernerCallback;
        SetContextListener(key: string, callback: () => void): void;
        private _checkKey;
        private _checkKeys;
    }
}
declare module MyWay.Services {
    interface IServiceAgent {
        Context: Context.IContextAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgentExtended {
        OnContextEvent: () => void;
        addToSharedContext: (key: string, value: any) => ng.IPromise<void>;
        removeFromSharedContext: (key: string) => ng.IPromise<void>;
        addToContext: (key: string, value: any) => ng.IPromise<void>;
        addListToContext: (data: Object) => ng.IPromise<void>;
        getFromContext: <T>(key: string, resultType?: string) => ng.IPromise<T>;
		getFromSharedContext: <T>(key: string, resultType?: string) => ng.IPromise<T>;
        getListFromContext: (keyArray: string[]) => ng.IPromise<MyWay.Services.Context.IContextKeyValuePair[]>;
        getAuthentificationInfo: () => ng.IPromise<Context.AuthentificationInfo>;
        getParametresComptables: () => ng.IPromise<Context.ParametresComptables>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Context: Context.IContextAgent;
        Step: Context.StepInfoExtended;
        SendRequest(settings: IRequestSettings): IPromesse<any>;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Display: Display.DisplayAgent;
    }
}
declare module MyWay.Services.Display {
    class DisplayAgent extends Components.ComponentAgentBase<IDisplayMessage, DisplayMessageSubject, IDisplayMessageContent> {
        private static CLASS_NAME;
        private static logger;
        private myIFrameId;
        constructor();
        getMyIFrameId(): string;
        reception(pMessage: IDisplayMessage): IPromesse<any>;
        Refresh(): void;
        RedirectInStep(url: string): IPromesse<void>;
        PrepareSubmit(url: string): IPromesse<void>;
        redirect(url?: string, previousUrl?: string): IPromesse<void>;
        displayMessage(message: IMessage): IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Display: Display.DisplayAgent;
        /**
         * Affiche un message dans le portail
         *
         * #### Syntaxe
         * ~~~ts
         * serviceAgent.DisplayMessage(message: IMessage);
         * ~~~
         *
         * @param  message{IMessage}  Message à afficher
         *
         * #### Exemple
         * ~~~ts
         * // Envoi d'un message danger au portail
         * serviceAgent.DisplayMessage({ Type: 'danger', Message: 'Impossible de charger les applications' });
         * ~~~
         */
        DisplayMessage(message: IMessage): any;
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        BriqueCommunication = 17
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.BriqueCommunication {
    enum BriqueCommunicationMessageSubject {
    }
    interface IBriqueCommunicationMessageContentGetListeSubjects extends IBriqueCommunicationMessageContent {
    }
    interface IBriqueCommunicationMessageContent {
    }
    interface IBriqueCommunicationMessage extends Components.IMessage<BriqueCommunicationMessageSubject, IBriqueCommunicationMessageContent> {
    }
}
declare module MyWay.Services.BriqueCommunication {
    interface ICanalControlerReadAndWrite<T> extends ICanalControlerReadOnly<T> {
        writer: (pMessage: T) => void;
    }
    interface ICanalControlerReadOnly<T> extends ICanalControler {
        reader: (pMessage: T) => void;
    }
    interface ICanalControler {
        close: () => void;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.BriqueCommunication.Messages {
    enum EVENT_TYPE {
        CHAT = 1,
        NOTIFICATION = 2
    }
    interface IBriqueCommunicationMessage<T> {
        mainEventType: EVENT_TYPE;
        event: T;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Chat = 18
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.BriqueCommunication.Chat {
    enum ChatMessageSubject {
        OpenChatroom = 0,
        OpenChat = 1,
        SendMessage = 2,
        CloseChat = 3,
        GetUtilisateurs = 4,
        EnvoyerMessageVideoroom = 5,
        ReceptionMessageVideoroom = 6,
        GetChatrooms = 7,
        GetChatroom = 8,
        PrendreLaMainVideoroom = 9,
        DemarrerVideoChatroom = 10,
        ArreterVideoChatroom = 11,
        AccepterDemanderExpert = 12,
        InviterPersonnesAUneChatroom = 13,
        SetStatut = 14,
        AddChatCapacity = 15,
        WebRTC = 16
    }
    interface IChatMessageContentOpenChatroom extends IChatMessageContent {
        idChat: string;
    }
    interface IChatMessageContentOpenChat extends IChatMessageContent {
        destinataire: string;
    }
    interface IChatMessageContentSendMessage extends IChatMessageContent {
        idChat: string;
        message: string;
    }
    interface IChatMessageContentCloseChat extends IChatMessageContent {
        idChat: string;
    }
    interface IChatMessageContentGetUtilisateurs extends IChatMessageContent {
    }
    interface IChatMessageContentEnvoyerMessageVideoroom extends IChatMessageContent {
        chatroom_id: string;
        user_id: string;
        message: any;
    }
    interface IChatMessageContentReceptionMessageVideoroom extends IChatMessageContent {
    }
    interface IChatMessageContentGetChatrooms extends IChatMessageContent {
    }
    interface IChatMessageContentGetChatroom extends IChatMessageContent {
        chatroom_id: string;
    }
    interface IChatMessageContentPrendreLaMainVideoroom extends IChatMessageContent {
    }
    interface IChatMessageContentDemarrerVideoChatroom extends IChatMessageContent {
        idChat: string;
    }
    interface IChatMessageContentArreterVideoChatroom extends IChatMessageContent {
        idChat: string;
    }
    interface IChatMessageContentAccepterDemanderExpert extends IChatMessageContent {
        chatroom_id: string;
        domaine: string;
        prospect_id: string;
    }
    interface IChatMessageContentInviterPersonnesAUneChatroom extends IChatMessageContent {
        chatroom_id: string;
        users_id: string[];
    }
    interface IChatMessageContentSetStatut extends IChatMessageContent {
        statut: Messages.UTILISATEUR_STATUT;
    }
    interface IChatMessageContentAddChatCapacity extends IChatMessageContent {
    }
    interface IChatMessageContentWebRTC extends IChatMessageContent {
        chatroom_id: string;
        user_id: string;
        content: any;
    }
    interface IChatMessageContent {
    }
    interface IChatMessage extends Components.IMessage<ChatMessageSubject, IChatMessageContent> {
    }
}
declare module MyWay.Services.BriqueCommunication.Chat {
    interface IChatConnexionMessage {
        chatroom_id: string;
        user_id: string;
        type: string;
        users_ids: string[];
    }
    interface IChatConfirmationConnexionMessage {
        chatroom_id: string;
        user_id: string;
        accepted: boolean;
        type: string;
    }
    interface IWriterChat {
        write: (pMessage: string) => void;
    }
    interface IChatExpertiseMessageBase {
        type: string;
        chatroom_id: string;
        domain: string;
        date: number;
        user_id: string;
    }
    interface IChatExpertiseMessageRequest extends IChatExpertiseMessageBase {
        type: "request";
    }
    interface IChatExpertiseMessageResponse extends IChatExpertiseMessageBase {
        type: "response";
        accepted: boolean;
    }
    interface IVideoroom {
        canal: ICanalControlerReadAndWrite<any>;
        start: () => void;
        stop: () => void;
    }
    interface ChatRoom {
        id: string;
        membres: string[];
        membresObject: {
            [key: string]: boolean;
        };
        myUserId: string;
        close: () => void;
        reader: (pMessage: Messages.IChatMessage) => void;
        writeMessage: (pMessage: string) => void;
        writeResponse: (pEstAccepte: boolean) => void;
        writeEnd: () => void;
        videosrooms: {
            [key: string]: IVideoroom;
        };
        videoroomAjoutee: (IVideoroom: IVideoroom, pUserId: string) => void;
        framePrincipale: string;
        videoEstEnCours: boolean;
        utilisateurConnecte: (pUserId: string) => void;
        utilisateurDeconnecte: (pUserId: string) => void;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.BriqueCommunication.Chat.Messages {
    enum TYPE {
        OPEN_CHATROOM = 1,
        OPEN_CHAT = 2,
        SEND_MESSAGE = 3,
        CLOSE_CHAT = 4,
        GET_UTILISATEURS = 5,
        ENVOYER_MESSAGE_VIDEOROOM = 6,
        RECEPTION_MESSAGE_VIDEOROOM = 7,
        GET_CHATROOMS = 8,
        GET_CHATROOM = 16,
        PRENDRE_LA_MAIN_VIDEOROOM = 9,
        DEMARRER_VIDEO_CHATROOM = 10,
        ARRETER_VIDEO_CHATROOM = 11,
        ACCEPTER_DEMANDE_EXPERT = 12,
        INVITER_PERSONNES_A_UNE_CHATROOM = 13,
        SET_STATUT = 14,
        ADD_CHAT_CAPACITY = 15
    }
    interface OpenChatResponse {
        id: string;
        membres: string[];
        framePrincipale: string;
        estFramePrincipale: boolean;
        videoEstEnCours: boolean;
    }
    interface OpenChatRoomRequest {
        idChat: string;
    }
    interface SendMessageRequest {
        idChat: string;
        message: string;
    }
    interface PrendreLaMainSurVideoroomRequest {
        idChat: string;
    }
    interface ArreterVideoChatroomRequest {
        idChat: string;
    }
    interface IChatMessage {
        chatroom_id: string;
        user_id: string;
        message: string;
        type: string;
    }
    enum EVENT_TYPE {
        MESSAGE_RECU = 1,
        CHAT_FERME = 2,
        CHAT_OUVERT = 3,
        MISE_A_JOUR_LISTE_UTILISATEURS = 4,
        UTILISATEUR_CONNECTE_A_CHAT = 5,
        UTILISATEUR_DECONNECTE_A_CHAT = 6,
        CHANGEMENT_MAIN_CHATROOM = 7,
        DEMANDE_EXPERT = 8,
        FIN_DEMANDE_EXPERT = 9,
        CHAT_DIV_ELEMENT = 10,
        FIN_VIDEOROOM = 11
    }
    interface IChatEventDetails {
        eventType: EVENT_TYPE;
    }
    interface IChatEventDetailsNouveauMessage extends IChatEventDetails {
        message: IChatMessage;
    }
    interface IChatEventDetailsChatFerme extends IChatEventDetails {
        chatroom_id: string;
    }
    interface IChatEventDetailsChatOuvert extends IChatEventDetails {
        chatroom_id: string;
        membres: string[];
        framePrincipale: string;
        estFramePrincipale: boolean;
    }
    interface IChatEventDetailsMiseAJourListeUtilisateurs extends IChatEventDetails {
        utilisateurs: IUtilisateur[];
    }
    interface IChatEventDetailsUtilisateurConnecteAChat extends IChatEventDetails {
        chatroom_id: string;
        user_id: string;
        framePrincipale: string;
        estFramePrincipale: boolean;
    }
    interface IChatEventDetailsUtilisateurDeconnecteAChat extends IChatEventDetails {
        chatroom_id: string;
        user_id: string;
    }
    interface IChatEventDetailsChangementChatroomMain extends IChatEventDetails {
        chatroom_id: string;
        framePrincipale: string;
        videoEstEnCours: boolean;
        estFramePrincipale: boolean;
    }
    interface IChatEventDetailsDemandeExpert extends IChatEventDetails {
        chatroom_id: string;
        expertise: string;
        user_id: string;
    }
    interface IChatEventDetailsFinDemandeExpert extends IChatEventDetails {
        chatroom_id: string;
        expertise: string;
        user_id: string;
    }
    interface IChatEventDetailsDemandeDivElement extends IChatEventDetails {
        chatroom_id: string;
        user_id: string;
        cestmoi: boolean;
    }
    interface IChatEventDetailsFinVideoRoom extends IChatEventDetails {
        chatroom_id: string;
        user_id: string;
    }
    interface IUtilisateur {
        nom: string;
        prenom: string;
        id: string;
        isConnected: boolean;
        type: UTILISATEUR_TYPE;
    }
    interface IUtilisateurExpert extends IUtilisateur {
        expertises: string[];
    }
    enum UTILISATEUR_TYPE {
        CONSEILLER = 0,
        EXPERT = 1,
        CLIENT = 2,
        PROSPECT = 3
    }
    enum UTILISATEUR_STATUT {
        CONNECTE = 1,
        DECONNECTE = 2
    }
}
declare module MyWay.Services.BriqueCommunication.Notification.Messages {
    enum TYPE {
        ABONNEMENT = 1,
        DESABONNEMENT = 2,
        GET_LISTE_SUJETS = 3
    }
    class INotificationMessageAbonnementRequest {
        sujet: string;
    }
    class INotificationMessageDesabonnementRequest {
        sujet: string;
    }
    class INotificationMessageListeSujetsResponse {
        sujets: ISujetDetails[];
    }
    enum EVENT_TYPE {
        NOUVEL_ABONNEMENT = 1,
        DESABONNEMENT = 2,
        NOTIFICATION_MESSAGE = 3
    }
    interface INotificationEventDetails {
        eventType: EVENT_TYPE;
    }
    interface INotificationEventDetailsAbonnement extends INotificationEventDetails {
        subject: string;
    }
    interface INotificationEventDetailsDesabonnement extends INotificationEventDetails {
        subject: string;
    }
    interface INotificationEventDetailsNotification extends INotificationEventDetails {
        message: INotification;
        subject: string;
    }
    interface INotification {
        subject: string;
        messageid: string;
        title: string;
        userid: string;
        content: string;
        data?: any;
    }
    interface ISujetDetails {
        nom: string;
        estAbonne: boolean;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Notification = 19
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.BriqueCommunication.Notification {
    enum NotificationMessageSubject {
        Abonnement = 0,
        Desabonnement = 1,
        GetListeSubjects = 2
    }
    interface INotificationMessageContentAbonnement extends INotificationMessageContent {
        subject: string;
    }
    interface INotificationMessageContentDesabonnement extends INotificationMessageContent {
        subject: string;
    }
    interface INotificationMessageContentGetListeSubjects extends INotificationMessageContent {
    }
    interface INotificationMessageContent {
    }
    interface INotificationMessage extends Components.IMessage<NotificationMessageSubject, INotificationMessageContent> {
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Acquisition = 20
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Acquisition.Messages {
    var START_STATE;
    var END_STATE;
    var ERROR;
    enum AcquisitionMessageSubject {
        AppelRADLAD = 0,
        ChangeState = 1,
        ConvertBase64ToBin = 2,
        ConvertFileToImg = 3,
        FermetureSpiFactory = 4,
        GetDocumentGEDAtAndOpen = 5,
        GetDocumentGEDAndOpen = 6,
        GetDocumentGEDAndSave = 7,
        GetProcessingTask = 8,
        MergeAndOpenPDF = 9,
        MergerEtArchiver = 10,
        MergerEtUploader = 11,
        OuvrirListeDocumentGED = 12,
        Purge = 13,
        RecupereListeDocumentGED = 14,
        SetConfigurationScanner = 15,
        GetListeScanner = 16,
        IsPrisEnMainADistance = 17,
        UploadDocumentFrom = 18
    }
    interface IAcquisitionMessageContent {
    }
    interface IAcquisitionMessageContentAppelRADLAD extends IAcquisitionMessageContent {
        fileInfos: IFileInformation[];
        params: IRadladParams;
    }
    interface IAcquisitionMessageContentConvertFileToImg extends IAcquisitionMessageContent {
        fileInfo: IFileInformation;
        params: IConvertFileParams;
		autoriseDocumentSigne?: Boolean;
    }
    interface IAcquisitionMessageContentMergerEtArchiver extends IAcquisitionMessageContent {
        fileInfos: IMergeFileInformation[];
        putDocumentInput: IPutDocumentInput;
    }
    interface IAcquisitionMessageContentMergerEtUploader extends IAcquisitionMessageContent {
        fileInfos: IMergeFileInformation[];
    }
    interface IAcquisitionMessageContentConvertBase64ToBin extends IAcquisitionMessageContent {
        urls: string[];
    }
    interface IAcquisitionMessageContentPurge extends IAcquisitionMessageContent {
        hour: number;
    }
    interface IAcquisitionMessageContentFermetureSpiFactory extends IAcquisitionMessageContent {
    }
    interface IAcquisitionMessageContentSetConfigurationScanner extends IAcquisitionMessageContent {
        typeScanner: string;
    }
    interface IAcquisitionMessageContentMergeAndOpenPDF extends IAcquisitionMessageContent {
        params: IGedParams;
    }
    interface IAcquisitionMessageContentGetProcessingTask extends IAcquisitionMessageContent {
        guid: string;
    }
    interface IAcquisitionMessageContentChangeState extends IAcquisitionMessageContent {
        guid: string;
        state: string;
        detail?: string;
    }
	
	/**
     * interface utilisée par l'agent et le manager lors de la récupération de la liste des scanners accessibles depuis le poste.
     */
    interface IAcquisitionMessageContentGetListeScanner extends IAcquisitionMessageContent {
        checkRemote: Boolean;
    }
    /**
     * interface utilisée par l'agent et le manager lors de la vérification de la prise en main (ou non) à distance du poste.
     */
    interface IAcquisitionMessageContentIsPrisEnMainADistance extends IAcquisitionMessageContent {
    }
    /**
     * interface utilisée par l'agent et le manager lors de l'enregistrement d'un document GED sur le poste local (à un endroit
     * déterminé en paramètre) et de l'ouverture de ce document.
     */
    interface IAcquisitionMessageContentGetDocumentGEDAtAndOpen extends IAcquisitionMessageContent {
        params: IGedOneSaveAtAndOpenParams;
    }
    /**
     * interface utilisée par l'agent et le manager lors de l'ouverture d'un document présent sur le poste au chemin spécifié.
     */
    interface IAcquisitionMessageContentUploadDocumentFrom extends IAcquisitionMessageContent {
        cheminDuFichierSurLePoste: string;
    }
	
    interface IAcquisitionMessageContentGetDocumentGEDAndSave extends IAcquisitionMessageContent {
        params: IGedParams;
    }
    interface IAcquisitionMessage extends Components.IMessage<AcquisitionMessageSubject, IAcquisitionMessageContent> {
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différent types de document envoyés à la RADLAD
     *
     * @enum Acquisition.ACQUISITION_TYPE
     */
    enum ACQUISITION_TYPE {
        BINARY = 0,
        BASE64 = 1
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différentes methodes de binarization supportées
     *
     * @enum Acquisition.BINARIZE_METHOD
     */
    enum BINARIZE_METHOD {
        SIMPLE_THRESHOLD = 0,
        GLOBAL_THRESHOLD = 1,
        ADAPTIVE_THRESHOLD = 2,
        DYNAMIC_THRESHOLD = 3
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différents types de fichiers
     *
     * @enum Acquisition.FILE_FORMAT
     */
    enum FILE_FORMAT {
        BMP = 0,
        PNG = 1,
        GIF = 2,
        JPG_JPEG = 3,
        PDF = 4,
        TIF_TIFF = 5
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différents types de format du fichier résultant du merge de documents
     *
     * @enum Acquisition.FORMAT_MERGE
	 * @version 19.09
     */
    enum FORMAT_MERGE {
        PDF = 0,
        ZIP = 1
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différents types d'ouverture de l'archive des documents.
     *
     * @enum Acquisition.OUVERTURE_ARCHIVE
	 * @version 19.09
     */
    enum OUVERTURE_ARCHIVE {
        NATIVE = 0,
        OUTLOOK = 1
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * Enumération correspondant aux différentes valeurs de rotation de document possible
     *
     * @enum Acquisition.ROTATION_VALUES
     */
    enum ROTATION_VALUES {
        ANGLE_90 = 90,
        ANGLE_180 = 180,
        ANGLE_270 = 270
    }
}
declare module MyWay.Services.Acquisition {
    /**
     * @author : Benoît Ouvrié
     * @version : 20.03
     * @description Enumération correspondant aux différents types de localisation du scanner.
     * @enum Acquisition.LOCALISATION_SCANNER
     */
    enum LOCALISATION_SCANNER {
        SCANNER_DISTANT = 0,
        SCANNER_LOCAL = 1,
        NONE = 2
    }
}

declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir l'url d'une image et sa base64
     *
     * @interface Acquisition.IResultatRecuperationImageKofax
     */
    interface IBase64File {
        path?: string;
        name: string;
        base64: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres de conversion d'un fichier
     *
     * @param dpi la résolution
     * @param quality la qualité de l'image normal
     * @param thumbQuality la qualité de l'image miniature
     *
     * @interface Acquisition.IConvertFileParams
     */
    class IConvertFileParams {
        dpi: number;
        quality: number;
        thumbQuality: number;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres de création bitonale
     *
     * @param dpibase64List la liste des images en base 64
     * @param save sauvegarde ou non de l'image
     * @param binarizeMethod méthode de binarization
     *
     * @interface Acquisition.IConvertPdfParams
     */
    class ICreerImageBitonalParams {
        save: boolean;
        binarizeMethod: BINARIZE_METHOD;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les informations des fichiers
     *
     * @interface Acquisition.IFileInformation
     */
    interface IFileInformation {
        url?: string;
        base64?: string;
        type?: ACQUISITION_TYPE;
        format?: FILE_FORMAT;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les documents Ged
     *
     * @interface Acquisition.IGedDocument
     */
    interface IGedDocument {
        details: any;
        fichier: {
            contenu: string;
            nom: string;
            taille: number;
        };
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres du merge et de l'ouverture des PDF
     *
     * @interface Acquisition.IOpenPdfParams
     */
    class IPdfParams {
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres du merge et de l'ouverture des PDF
     *
     * @interface Acquisition.IGedOpenPdfParams
     */
    interface IGedParams extends IPdfParams {
        applicationCode: string;
        documents: IGedDocumentParams[] | IGedDocumentParams;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres du merge et de l'ouverture des PDF
     *
     * @interface Acquisition.IGuidOpenPdfParams
     */
    class IGuidParams extends IPdfParams {
    }
}

declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres du merge et de l'ouverture des PDF
     *
     * @interface Acquisition.IGedOneParams
     */
    interface IGedOneParams extends IPdfParams {
        applicationCode: string;
        id: string;
        nature?: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * @author : Benoît Ouvrié
     * @version : 20.03
     *
     * Interface permettant de définir les paramètres nécessaires à la sauvegarde d'un document Ged sur le poste puis de son ouverture.
     *
     * @interface Acquisition.IGedOneSaveAtAndOpenParams
     */
    interface IGedOneSaveAtAndOpenParams extends IGedOneParams {
        cheminSauvegardeSurLePoste: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir le résultat d'un merge de pdf
     *
     * @interface Acquisition.IMergePdfResult
     */
    interface IMergePdfResult {
        base64: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    interface IMergeFileInformation extends IFileInformation {
        rotation?: ROTATION_VALUES;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Acquisition {
    /**
     * @author : Benoît Ouvrié
     * @version : 20.03
     * @description Interface définissant le résultat de la prise en main à distance ou non.
     *
     * @interface Acquisition.IPrisEnMainADistanceResult
     */
    interface IPrisEnMainADistanceResult {
        /**
         * true si le poste a été pris en main à distance, false dans le cas contraire.
         */
        isPrisEnMainAD: boolean;
        /**
         * nom du poste sur lequel s'exécute le serviceLocal.
         */
        computerName: string;
        /**
         * nom du poste qui a pris le contrôle.
         */
        clientName: string;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Acquisition {
    interface IPutDocumentInput {
        codeEtablissement: string;
        idntCmpstApplf: string;
        codeTypeNatrDoc: string;
        idAgntTech: string;
        agenceUtilisateur: string;
        nomFichier: string;
        docElect: string;
        dateDelivrance: Date;
        donneesRadLad: string;
        dureeAvantPurge: number;
        typeAttributaire: string;
        idntAttributaire1: string;
        idntAttributaire2: string;
        descriptionDocument: string;
        dateNumerisation: Date;
        dateCollecte: Date;
        datePeremption: Date;
        modeAcquisition: string;
        origineAcquisition: string;
        typeSignature: string;
        statutDocument: string;
        isTransitoire: boolean;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les paramètres de l'appel RADLAD
     *
     * @interface Acquisition.IRadladParams
     */
    class IRadladParams {
        activationVRS: boolean;
        activationLAD: boolean;
        save: boolean;
        binarizeMethod: BINARIZE_METHOD;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * @author : Benoît Ouvrié
     * @version : 20.03
     * @description Interface définissant un scanner accessible.
     *
     * @interface Acquisition.IScannerAccessibleResult
     */
    class IScannerAccessibleResult {
        /**
         * nom du scanner.
         */
        nomScanner: string;
        /**
         * localisation du scanner : LOCAL, DISTANT.
         */
        localisationScanner: LOCALISATION_SCANNER;
        /**
         * Nom invariable du driver périphérique
         */
        nomDriver: String;
        /**
         * Nom du driver twain
         */
        nomDriverTwain: String;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de définir les documents Ged
     *
     * @interface Acquisition.IGedDocument
     */
    interface IGedDocumentParams {
        id: string;
        nature?: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Acquisition {
    /**
     * Interface permettant de déclarer une tâche de traitement
     *
     * @interface Acquisition.IProcessingTasks
     */
    class IProcessingTasks {
        guid: string;
        promise: IPromesse<void>;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Mobilite = 21
    }
}
/**
* Module de gestion de la mobilité (module commun aux agents et aux managers)
* @module MyWay.Services.Mobilite
*/
declare module MyWay.Services.Mobilite.Messages {
    enum MobiliteMessageSubject {
        GetInfoMachine = 0,
        GetPeripheriques = 1,
        GetPeripheriquesParType = 2,
        GetReseau = 3
    }
    interface IMobiliteMessageContentGetInfoMachine extends IMobiliteMessageContent {
    }
    interface IMobiliteMessageContentGetPeripheriques extends IMobiliteMessageContent {
    }
    interface IMobiliteMessageContentGetPeripheriquesParType extends IMobiliteMessageContent {
        typePeripherique: TYPE_PERIPHERIQUE;
    }
    interface IMobiliteMessageContentGetReseau extends IMobiliteMessageContent {
    }
    interface IMobiliteMessageContent {
    }
    interface IMobiliteMessage extends Components.IMessage<MobiliteMessageSubject, IMobiliteMessageContent> {
    }
}
declare module MyWay.Services.Mobilite {
    class CaisseAuto implements ICaisseAuto {
        typePeripherique: TYPE_PERIPHERIQUE;
        type: string;
        constructor();
    }
}
declare module MyWay.Services.Mobilite {
    /**
    * Enumération permettant de définir le type de plateforme
    * @enum Mobilite.PLATEFORME
    */
    enum PLATEFORME {
        MYSYS = 1,
        WINDOWS = 2,
        APPLE = 3,
        ANDROID = 4,
        AUTRE = 99
    }
}
declare module MyWay.Services.Mobilite {
    /**
    * Enumération permettant de définir les types de périphérques connectés au poste
    * @enum Mobilite.TYPE_PERIPHERIQUE
    */
    enum TYPE_PERIPHERIQUE {
        TABLETTE_SIGNATURE = 0,
        CAISSE_AUTO = 1
    }
    /**
     * Variable pour assurer la rétrocompatibilité avec la 16.03
     */
    let TypePeripherique: typeof TYPE_PERIPHERIQUE;
}
declare module MyWay.Services.Mobilite {
    /**
    * Enumération permettant de définir les types de réseau
    * @enum Mobilite.TYPE_RESEAU
    */
    enum TYPE_RESEAU {
        DECONNECTE = 0,
        VPN = 10,
        WIFI_AGENCE = 20,
        FILAIRE = 30,
        CONNECTE = 99,
        INCONNU = 99
    }
}
declare module MyWay.Services.Mobilite {
    interface ICaisseAuto extends IPeripherique {
        type: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    interface IDonneesMobilite {
        adresseIp: string;
        timeout: number;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    /**
    * Description des informations de la machine de l'utilisateur
    * @interface Mobilite.IInfoMachine
    */
    interface IInfoMachine {
        plateforme?: PLATEFORME;
        largeurEcran?: number;
        hauteurEcran?: number;
        ecranTactile?: boolean;
        navigateur?: INavigateur;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    interface INavigateur {
        nom: string;
        version: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    interface IPeripherique {
        typePeripherique: TYPE_PERIPHERIQUE;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    /**
    * Description des plages réseaux CE
    * @interface Mobilite.IPlageReseau
    */
    interface IPlageReseau {
        adresseIP: string;
        masque: number;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    interface ITabletteSignature extends IPeripherique {
        type: string;
        modele: string;
        codeModele: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Mobilite {
    class TabletteSignature implements ITabletteSignature {
        type: string;
        modele: string;
        codeModele: string;
        typePeripherique: TYPE_PERIPHERIQUE;
        constructor(type: string, modele: string, codeModele: string);
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Preferences {
    interface IPreferenceUtilisateur {
        cle: string;
        valeur: string;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Preferences = 22
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Preferences {
    enum PreferencesMessageSubject {
        LirePreference = 0,
        EcrirePreference = 1,
        LireMultiPreference = 2
    }
    interface IPreferencesMessageContentLireMultiPreferenceRequest extends IPreferencesMessageContent {
        codesPreference: string[];
    }
    interface IPreferencesMessageContentLireMultiPreferenceResponse extends IPreferencesMessageContent {
        preferences: IPreferenceUtilisateur[];
    }
    interface IPreferencesMessageContentLirePreferenceRequest extends IPreferencesMessageContent {
        nomVariable: string;
		isChargerServeur: boolean;
    }
    interface IPreferencesMessageContentLirePreferenceResponse extends IPreferencesMessageContent {
        valeurVariable: string;
    }
    interface IPreferencesMessageContentEcrirePreferenceRequest extends IPreferencesMessageContent {
        preferences: IPreferenceUtilisateur[];
    }
    interface IPreferencesMessageContentEcrirePreferenceResponse extends IPreferencesMessageContent {
    }
    interface IPreferencesMessageContent {
    }
    interface IPreferencesMessage extends Components.IMessage<PreferencesMessageSubject, IPreferencesMessageContent> {
    }
}

declare module MyWay.Services.Trace {
    enum NIVEAUX_TRACE {
        DEBUG = 30,
        INFO = 50,
        WARNING = 70,
        ERROR = 90
    }
    interface ILogger {
        debug(message: string, action?: string, object?: any): void;
        info(message: string, action?: string, object?: any): void;
        warning(message: string, action?: string, object?: any): void;
        error(message: string, action?: string, object?: any): void;
    }
    class Utils {
        static gererErreur(object: any): any;
    }
}
declare module MyWay.Services.Trace {
    interface ITraceService extends Messages.ITraceCommon {
        sendDiagnostic(diagnostic: ApplicationDiagnostic): void;
        sendLog(pLog: Loggers.ILoggerWithContext): IPromesse<void>;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Trace {
    class Logger implements ILogger {
        private _componentName;
        private _zoneName;
        private _library;
        constructor(componentName: string, zoneName: string, library: Components.ILibraryCommon);
        debug(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
        private send;
        private createTrace;
    }
    class TraceModel {
        /** Date de la trace */
        datetime: number;
        /** Niveau de la trace (DEBUG, INFO, WARNING, ERROR) */
        niveau: NIVEAUX_TRACE;
        /** Numero station de travail */
        client: string;
        /** Nom du serveur (opt.) */
        serveur: string;
        /** URL de la page provoquant la trace */
        url: string;
        /** Id du processus courant */
        idProcessus: string;
        /** Chemin de l'étape courante */
        cheminInstances: string;
        /** Nom de l'application provoquant la trace */
        application: string;
        /** Nom du composant provoquant la trace */
        composant: string;
        /** Action en cours lors de la trace */
        action: string;
        /** Code agent */
        COCEAG: string;
        /** Code etablissement */
        COCXBQ: string;
        /** Type fonction */
        CTCEAG: string;
        /** Numero interne EDS */
        NOCEEL: string;
        /** Message de la trace */
        message: string;
        /** Détails de la trace */
        details: any;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Trace = 23
    }
    interface ILibraryCommon {
        Trace: Trace.Messages.ITraceCommon;
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Trace.Messages {
    interface ITraceCommon {
        send(trace: Trace.TraceModel): void;
    }
    enum TraceMessageSubject {
        Tracer = 0,
        Logger = 1,
        GetIntervallePurge = 2,
        GetQuotaPurge = 3,
        PurgerTraces = 4,
        SendDiagnostic = 5,
        SetModeDebug = 6,
        ReInitDbTraces = 7
    }
    interface ITraceMessageContentTracer extends ITraceMessageContent {
        trace: TraceModel;
    }
    interface ITraceMessageContentLogger extends ITraceMessageContent {
        log: Loggers.ILoggerWithContext;
    }
    interface ITraceMessageContentGetIntervallePurge extends ITraceMessageContent {
    }
    interface ITraceMessageContentGetQuotaPurge extends ITraceMessageContent {
    }
    interface ITraceMessageContentPurgerTraces extends ITraceMessageContent {
    }
    interface ITraceMessageContentSendDiagnostic extends ITraceMessageContent {
        diagnostic: ApplicationDiagnostic;
    }
    interface ITraceMessageContentSetModeDebug extends ITraceMessageContent {
        active: boolean;
    }
    interface ITraceMessageContentReInitDbTraces extends ITraceMessageContent {
    }
    interface ITraceMessageContent {
    }
    interface ITraceMessage extends Components.IMessage<TraceMessageSubject, ITraceMessageContent> {
    }
}

declare module MyWay.Services.Libelle {
    interface ILibelleService {
        afficherMessage(codeLibelle: string, typeAffichage: TYPE_AFFICHAGE, valeurs?: string[], callback?: () => void, callbackClic?: (any: any) => void): void;
        constituerLibelle(codeLibelle: string, callback: (any: any) => void, valeurs?: string[]): void;
    }
    enum TYPE_AFFICHAGE {
        ERREUR = 10,
        AVERTISSEMENT = 30,
        INFORMATION = 50,
        OUI_NON = 70,
        OUI_NON_ANNULER = 90,
        VALIDER_ANNULER = 110,
        ANNULER = 120,
        VIDE = 140
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Libelle = 24
    }
    interface ILibraryCommon {
        Libelle: Libelle.ILibelleBase;
    }
}
declare module MyWay.Services.Libelle {
    interface ILibelleBase {
        constituerLibelle(codeLibelle: string, valeurs?: string[]): IPromesse<string>;
    }
    enum LibelleMessageSubject {
        afficherMessage = 0,
        constituerLibelle = 1
    }
    interface ILibelleMessageContent {
    }
    interface ILibelleMessageContentAfficherMessageRequest extends ILibelleMessageContent {
        codeLibelle: string;
        typeAffichage: TYPE_AFFICHAGE;
        valeurs?: string[];
        delai?: number;
    }
    interface ILibelleMessageContentAfficherMessageResponse extends ILibelleMessageContent {
    }
    interface ILibelleMessageContentConstituerLibelleRequest extends ILibelleMessageContent {
        codeLibelle: string;
        valeurs?: string[];
    }
    interface ILibelleMessageContentConstituerLibelleResponse extends ILibelleMessageContent {
    }
    interface ILibelleMessage extends Components.IMessage<LibelleMessageSubject, ILibelleMessageContent> {
    }
}
declare module MyWay.Services.Libelle {
    class LibelleModel {
        static COM: {
            MESSAGE_SANS_VARIABLE: string;
            RESULTATS: string;
            ERREUR_PARAMETRE_MAUVAIS_TYPE: string;
            ERREUR_PARAMETRES: string;
            ERREUR_FRAMEWORK: string;
            ERREUR_SERVEUR: string;
            ERREUR_TIMEOUT_SERVEUR: string;
            ERREUR_TIMEOUT_CLIENT: string;
            ERREUR_ACCES_SERVEUR: string;
            ERREUR_CONFIGURATION_PAS_DE_CONFIG: string;
            ERREUR_HABILITATION_MAUVAIS_FORMAT: string;
            ERREUR_HABILITATION_CODE_INCONNU: string;
            ERREUR_HABILITATION_PARAMETRES_INSUFFISANTS: string;
            ERREUR_HABILITATION_AUTHENTIFICATION_MANQUANTE: string;
            ERREUR_INDEXED_DB_NON_SUPPORTE: string;
            ERREUR_INDEXED_DB_GENERIQUE: string;
            ERREUR_INDEXED_DB_SUPPRESSION_IMPOSSIBLE: string;
            ERREUR_INDEXED_DB_ACCES_IMPOSSIBLE: string;
            ERREUR_INDEXED_DB_LECTURE_IMPOSSIBLE: string;
            ERREUR_INDEXED_DB_AJOUT_IMPOSSIBLE: string;
            ERREUR_INDEXED_DB_MAJ_IMPOSSIBLE: string;
            ERREUR_INDEXED_DB_REQUETE_IMPOSSIBLE_INDEX: string;
            ERREUR_INDEXED_DB_REQUETE_IMPOSSIBLE_CRITERE: string;
            ERREUR_INDEXED_DB_CALCUL_TAILLE: string;
            ERREUR_CONTEXTE_RECUP_CODE_ETAB_IMPOSSIBLE: string;
            ERREUR_CONTEXTE_RECUP_ID_AGENCE_IMPOSSIBLE: string;
            ERREUR_DONNEESDELOC_OBJET_MAL_FORME: string;
            ERREUR_DONNEESDELOC_PROPRIETE_ABSENTE: string;
            ERREUR_DONNEESDELOC_RECUP_DERNMAJ_IMPOSSIBLE: string;
            ERREUR_LISA_NEXT_IMPOSSIBLE: string;
            ERREUR_LISA_START_IMPOSSIBLE: string;
            ERREUR_LISA_GETPROCESSES_IMPOSSIBLE: string;
            ERREUR_LISA_GETTOOLS_IMPOSSIBLE: string;
            ERREUR_NUMERISATION_RECUP_CODE_ETAB_IMPOSSIBLE: string;
            ERREUR_NUMERISATION_RECUP_DONNEES_DELOCALISEES_IMPOSSIBLE: string;
            ERREUR_INTEROP_SERVICE_LOCAL_APPEL_IMPOSSIBLE: string;
            ERREUR_FICHIER_PARAMETRE_DATA_VIDE: string;
            ERREUR_FICHIER_PARAMETRE_B64_VIDE: string;
            ERREUR_APPLICATION: string;
            ERREUR_APPLICATION_CODE_NON_RENSEIGNE: string;
            ERREUR_APPLICATION_TYPE_INCONNU: string;
            ERREUR_APPLICATION_DEMARRAGE_IMPO: string;
            ERREUR_APPLICATION_MAINTENANCE: string;
            ERREUR_MOBILITE_RECUP_RESEAU_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_LISTE_PERIPH_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_LISTE_TABLETTES_SIGNATURES_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_INFO_MACHINE_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_PLATEFORME_MACHINE_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_RESOLUTION_ECRAN_IMPOSSIBLE: string;
            ERREUR_MOBILITE_RECUP_TYPE_ECRAN_IMPOSSIBLE: string;
            ERREUR_CAPACITES_REGLE_INCONNU: string;
            ERREUR_COMMUNICATION_MESSAGE_INDISPONIBLE: string;
            ERREUR_COMMUNICATION_FORMAT_MAIL_INCORRECT: string;
            ERREUR_COMMUNICATION_FORMAT_NUMERO_INCORRECT: string;
            ERREUR_COMMUNICATION_DONNEES_APPEL_MANQUANTE: string;
            ERREUR_COMMUNICATION_PARAMETRES_INSUFFISANTS: string;
            ERREUR_CONTROLE_STRING_ADRESSEIP_INCORRECT: string;
            ERREUR_ACQUISITION_PARAMETRES_INSUFFISANTS: string;
            ERREUR_EXPORT_DONNEES_ENTREES_FORMAT_INVALIDE: string;
            ERREUR_EXPORT_DONNEES_ENTREES_VIDE: string;
            ERREUR_EXPORT_DONNEES_ENTREES_NB_INVALIDE: string;
            ERREUR_EXPORT_CONVERSION_CSV_IMPOSSIBLE: string;
            ERREUR_EXPORT_TELECHARGEMENT_IMPOSSIBLE: string;
            ERREUR_EXPORT_FORMAT_FICHIER_INCONNU: string;
        };
        static TEC: {
            CHAINE_VIDE: string;
            VALIDATION_ARRAY: string;
            IMPRESSION_GENERATION_EN_COURS: string;
            IMPRESSION_IMPRESSION_EN_COURS: string;
            IMPRESSION_GENERATION_IMPRESSION_EN_COURS: string;
            NUMERISATION_EN_COURS: string;
        };
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Communication = 25
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Communication {
    enum CommunicationMessageSubject {
        EnvoyerMail = 0,
        DeclencherAppel = 1,
        RaccrocherAppel = 2
    }
    interface ICommunicationMessageContentEnvoyerMail extends ICommunicationMessageContent {
        mail: Mail;
    }
    interface ICommunicationMessageContentDeclencherAppel extends ICommunicationMessageContent {
        call: Call;
    }
    interface ICommunicationMessageContentRaccrocherAppel extends ICommunicationMessageContent {
    }
    interface ICommunicationMessageContent {
    }
    interface ICommunicationMessage extends Components.IMessage<CommunicationMessageSubject, ICommunicationMessageContent> {
    }
}
/**
* Module de gestion des moyens de communication
* @module MyWay.Services.Communication
* @methode controleEnvoyerMail – public - Permet de contrôler l'envoi d'un mail
* @methode controleDeclencherAppel – public - Permet de contrôler le déclenchement d'un appel
*/
declare module MyWay.Services.Communication {
    /**
    * Permet de contrôler l'envoi d'un mail
    *
    * @param {Mail} mail Le mail à envoyer
    */
    function controleEnvoyerMail(mail: Mail): string;
    /**
    * Permet de contrôler le déclenchement d'un appel
    *
    * @param {Call} call    Les données d'appel
    */
    function controleDeclencherAppel(call: Call): string;
}
/**
* Module de gestion des moyens de communication (module commun aux agents et aux managers)
* @module MyWay.Services.Communication
* @interface Mail - public - Interface permettant de décrire un objet Mail
*/
declare module MyWay.Services.Communication {
    /**
    * Interface permettant de décrire un objet Mail
    *
    * @interface Communication.Mail
    */
    interface IMail {
        /** Le(s) destinataire(s) du mail */
        to: string;
        /** Le sujet du mail */
        subject?: string;
        /** Le corps du message du mail */
        body?: string;
        /** Le(s) destinataire(s) mis en copie du mail */
        cc?: string;
        /** Le(s) destinataire(s) mis en copie cachée du mail */
        bcc?: string;
    }
    /**
    * Interface permettant de décrire un objet Call
    *
    * @interface Communication.Call
    */
    interface ICall {
        /** Le numéro du destinataire */
        numeroDestinataire: string;
    }
    /**
     * DTO du service REST Numérotation Téléphonique
     */
    interface INumerotationTelephoniqueDTO {
    }
    /**
    * Modèle d'un mail
    */
    class Mail implements IMail {
        /** Le(s) destinataire(s) du mail */
        to: string;
        /** Le sujet du mail */
        subject: string;
        /** Le corps du message du mail */
        body: string;
        /** Le(s) destinataire(s) mis en copie du mail */
        cc: string;
        /** Le(s) destinataire(s) mis en copie cachée du mail */
        bcc: string;
        constructor(_to: string, _subject?: string, _body?: string, _cc?: string, _bcc?: string);
    }
    /**
    * Modèle d'un appel
    */
    class Call implements ICall {
        /** Le numéro du destinataire */
        numeroDestinataire: string;
        constructor(_numeroDestinataire: string);
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Communication: Communication.ICommunicationAgent;
    }
}
declare module MyWay.Services.Communication {
    interface ICommunicationAgent {
        /**
        * Permet d'envoyer un mail
        *
        * @param mail Mail
        *
        */
        envoyerMail(mail: Mail): IPromesse<string>;
        /**
        * Permet de déclencher un appel
        *
        * @param {Call} call    Données de l'appel
        *
        */
        declencherAppel(call: Call): IPromesse<INumerotationTelephoniqueDTO>;
        /**
        * Permet de raccrocher un appel
        *
        */
        raccrocherAppel(): IPromesse<INumerotationTelephoniqueDTO>;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Interop {
    class InfoFichier {
        DateModification: Date;
        Taille: number;
        constructor();
    }
    class ExecutableWrapper {
        ExecApp: ExecApp;
        ExecTransaction: ExecTransaction;
        ExecServ: ExecServ;
        ExecWeb: ExecWeb;
        constructor(execapp: ExecApp, exectransaction: ExecTransaction, execserv: ExecServ, execweb: ExecWeb);
    }
    class ExecApp {
        Executable: string;
        constructor(executable: string);
    }
    class ExecTransaction {
        Numero: string;
        constructor(numero: string);
    }
    class ExecServ {
        CodeSortie: string;
        constructor(codesortie: string);
    }
    class ExecWeb {
        Url: string;
        Libelle: string;
        constructor(url: string, libelle: string);
    }
    class ContexteMyway {
        ProcessId: string;
        StepId: string;
        constructor(processId: string, stepId: string);
    }
    class ContexteClient {
        NumeroClient: string;
        Plan: number;
        constructor(numeroClient: string, plan: number);
    }
    class JsonStringArray {
        Valeur: string[];
        constructor(tableau: string[]);
    }
    class infoDataStructNSDK {
        DataName: string;
        DataLength: number;
    }
    class SegmentNsdkClass {
        _StructData: infoDataStructNSDK[];
        static Size: number;
        constructor(data?: infoDataStructNSDK[]);
        StructData: infoDataStructNSDK[];
        DeSerializeData(fluxData: string): void;
        SerializeData(): string;
        private CalcSize;
    }
    class s_5s6f5a extends MyWay.Services.Interop.SegmentNsdkClass {
        StructData: MyWay.Services.Interop.infoDataStructNSDK[];
        cwlgqr: string;
        cwlnqr: string;
        cidfiej: string;
        cnuf9cg: string;
        cdtfkc0: string;
        ccdtn: string;
        cnocee1: string;
        ccocee3: string;
        cddf9tr: string;
        cdff9tr: string;
        cidct: string;
        cidtiem: string;
        cidit: string;
        cmtf9op: string;
        cmtf9o1: string;
        ccdfadv: string;
        cnsf9rq: string;
        cdtfkcc: string;
        constructor();
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Interop = 26
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Interop.Messages {
    enum InteropMessageSubject {
        AfficherWindowParHandle = 0,
        AfficherWindowParPid = 1,
        AfficherSynthese = 2,
        ActiverApplicationAppelante = 3,
        AddToContextInterop = 4,
        AddListToContextInterop = 5,
        GetFromContextInterop = 6,
        GetListFromContextInterop = 7,
        Lancer = 8,
        EndStep = 9,
        TriggerNotifications = 10,
        LireFichier = 11,
        EcrireFichier = 12,
        ClearBus = 13
    }
    interface IInteropMessageContentAfficherWindowParHandle extends IInteropMessageContent {
        handle: string;
        affiche: boolean;
    }
    interface IInteropMessageContentAfficherWindowParPid extends IInteropMessageContent {
        pid: string;
        affiche: boolean;
    }
    interface IInteropMessageContentAfficherSynthese extends IInteropMessageContent {
        numeroClient: string;
    }
    interface IInteropMessageContentActiverApplicationAppelante extends IInteropMessageContent {
        numeroPlan: string;
    }
    interface IInteropMessageContentAddToContextInterop extends IInteropMessageContent {
        level: string;
        key: string;
        value: string;
    }
    interface IInteropMessageContentAddListToContextInterop extends IInteropMessageContent {
        level: string;
        datas: Context.IContextKeyValuePair[];
    }
    interface IInteropMessageContentGetFromContextInterop extends IInteropMessageContent {
        level: string;
        key: string;
    }
    interface IInteropMessageContentGetListFromContextInterop extends IInteropMessageContent {
        level: string;
        datas: string[];
    }
    interface IInteropMessageContentLancer extends IInteropMessageContent {
        executableWrapper: ExecutableWrapper;
        parametres: string[];
        sync: boolean;
        contexte: ContexteMyway;
    }
    interface IInteropMessageContentEndStep extends IInteropMessageContent {
    }
    interface IInteropMessageContentTriggerNotifications extends IInteropMessageContent {
    }
    interface IInteropMessageContentClearBus extends IInteropMessageContent {
    }
    interface IInteropMessageContent {
    }
    interface IInteropMessage extends Components.IMessage<InteropMessageSubject, IInteropMessageContent> {
    }
    interface IInteropMessageContentLireFichierRequest extends IInteropMessageContent {
        nomFichier: string;
    }
    interface IInteropMessageContentLireFichierResponse extends IInteropMessageContent {
        data: string;
    }
    interface IInteropMessageContentEcrireFichierRequest extends IInteropMessageContent {
        nomFichier: string;
        fluxdonnees: string;
        ajouter: boolean;
        creeDir: boolean;
    }
    interface IInteropMessageContentEcrireFichierResponse extends IInteropMessageContent {
        data: string;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        ContexteClient: ContexteClient.ContexteClientAgent;
    }
}
declare module MyWay.Services.ContexteClient {
    /**
     * Agent du contexte client.
     */
    class ContexteClientAgent extends Components.ComponentAgentBase<IContextClientMessage, ContextClientMessageSubject, IContextClientMessageContent> {
        /**
         * Constructeur de la classe ContexteClientAgent.
         */
        constructor();
        /**
         * Méthode permettant d'initialiser l'agent.
         *
         * @param pAgentLibrary         La librairie de l'agent.
         * @param pMessageService       Le service de message.
         * @param pManagerInitializer   L'objet d'initialisation de l'agent.
         */
        init(pAgentLibrary: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        /**
         * Méthode permettant de récupérer l'expéditeur.
         * @returns l'expéditeur.
         */
        protected getExpediteur(): string;
        /**
         * Récupération de l'ensemble des contextes ouverts sur des clients.
         * @returns Liste des identifiants clients assignés à des contextes clients.
         */
        getContextesParClients(): IPromesse<string[]>;
        /**
         * Récupération de l'identifiant technique du contexte client courant.
         * @returns Id technique du contexte client courant.
         */
        getId(): IPromesse<string>;
        /**
         * Récupération de l'identifiant client du contexte client courant.
         * @returns Id du client du contexte client courant.
         */
        getClient(): IPromesse<string>;
        /**
         * Modification de l'identifiant client du contexte client courant.
         *
         * @throws          Erreur si processus non associé à un contexte client.
         * @throws          Erreur si contexte client déjà associé à un client.
         * @throws          Erreur si code client invalide (ex : null, undefined, ...).
         * @param pClient   Identifiant du client à assigner au contexte courant.
         */
        setClient(pClient: string): IPromesse<void>;
        /**
         * Lis une donnée du contexte client.
         *
         * @throws      Erreur si processus non associé à un contexte client.
         * @param pCle  Cle à récupérer. Passer "null" pour récupérer tout le contexte client complet.
         * @returns     Valeur associée à la clé spécifiée.
         */
        getProperty(pCle: string): IPromesse<any>;
        /**
         * Ajoute une donnée dans un tableau du contexte client.
         *
         * @throws          Erreur si processus non associé à un contexte client.
         * @param pCle      Clé de la liste à modifier.
         * @param pValeur   Valeur à ajouter à la liste.
         * @returns         true sur valeur ajoutée, false sinon.
         */
        addToList(pCle: string, pValeur: any): IPromesse<boolean>;
        /**
         * Fixe une donnée dans un objet du contexte client.
         *
         * @throws          Erreur si processus non associé à un contexte client.
         * @param pCle      Clé de la propriété à modifier.
         * @param pValeur   Valeur à donner à la propriété.
         * @returns         true sur valeur ajoutée, false sinon.
         */
        setProperty(pCle: string, pValeur: any): IPromesse<boolean>;
        /**
         * Supprime une donnée d'un tableau du contexte client.
         *
         * @throws      Erreur si processus non associé à un contexte client.
         * @param pCle  Clé de la liste à modifier.
         * @returns     true sur valeur supprimée, false sinon.
         */
        removeFromList(pCle: string): IPromesse<boolean>;
        /**
         * Supprime une donnée d'un objet du contexte client.
         *
         * @throws      Erreur si processus non associé à un contexte client.
         * @param pCle  Clé de la propriété à modifier.
         * @returns     true sur valeur supprimée, false sinon.
         */
        deleteProperty(pCle: string): IPromesse<boolean>;
        /**
         * Lis le contenu du contexte client pour un client donné.
         *
         * @throws Erreur si aucun client n'est associé à un contexte client
         * @param pIdClient Id du client
         * @returns Contenu du contexte client
         */
        getContenu(pIdClient: string): IPromesse<any>;
        /**
         * Fixe le contenu d'un contexte client pour un client donné
         * @throws Erreur si aucun client n'est associé à un contexte client
         * @param pIdClient Id du client
         * @param pValeur Contenu à assigner
         * @returns true sur contenu modifié, false sinon
         */
        setContenu(pIdClient: string, pValeur: any): IPromesse<boolean>;
        /**
         * Fixe l'indicateur de synchrosynthese à RELOAD
         * @throws          Erreur si aucun client n'est associé à un contexte client.
         * @param pIdClient Id du client.
         * @returns         true sur reload OK, false sinon.
         */
        setReloadSynthese(pIdClient: string): IPromesse<boolean>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        ContexteClient: ContexteClient.ContexteClientAgent;
    }
}
declare module MyWay.Services.Bug {
}

/**
 * Module de gestion de la numérisation
 * @module MyWay.Services.Acquisition
 */
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Acquisition: Acquisition.AcquisitionAgent;
    }
}
declare module MyWay.Services.Acquisition {
    /**
    * Classe permettant la gestion de la numérisation
    *
    * @classe AcquisitionAgent
    */
    class AcquisitionAgent extends Components.ComponentAgentBase<Messages.IAcquisitionMessage, Messages.AcquisitionMessageSubject, Messages.IAcquisitionMessageContent> {
        /**
         * Constructeur de la classe AcquisitionAgent
         * @param agentLibrary {AgentLibrary}
         * @param errorCallback {ErreurCallback}
         */
        constructor();
        /**
         * Permet d'extraire les données de fichiers
         *
         * @param fileInfos les informations sur les fichiers (url et type)
         * @param params la liste des paramètres RADLAD
         *
         * @return les informations du traitement RADLAD
         */
        appelRADLAD(fileInfos: IFileInformation[], params: IRadladParams): IPromesse<any>;
        /**
         * Permet de convertir des fichiers en images
         *
         * @param fileInfo information du fichier
         * @param params paramètres de conversion du fichier
         *
         * @return array un tableau contenant les liens vers les images, les miniatures et les pdfs de chaque fichier
         */
        convertFileToImg(fileInfo: IFileInformation, params?: IConvertFileParams, autoriseDocumentSigne?: Boolean): IPromesse<any>;
        /**
         * Permet de merger des pdf en un seul et de l'archiver en GED
         *
         * @param fileInfos information des pdfs
         * @param putDocumentInput le document à envoyer en GED
         *
         * @return
         */
        mergerEtArchiver(fileInfos: IMergeFileInformation[], putDocumentInput: IPutDocumentInput): IPromesse<any>;
        /**
         * Permet de merger des pdf en un seul et de l'uploader
         *
         * @param fileInfos information des pdfs
         *
         * @return
         */
        mergerEtUploader(fileInfos: IMergeFileInformation[]): IPromesse<any>;
        /**
         * Permet de convertir des pdfs en images
         *
         * @param urls la liste des urls des fichiers base64 à convertir
         *
         * @return array un tableau contenant la liste des liens vers les images convertis
         */
        convertBase64ToBin(urls: string[]): IPromesse<any>;
        /**
         * Permet de vider le répertoire où sont stocké les images
         * @param le nombre d'heure pour que la purge s'effectue depuis la création du fichier
         *
         * @return boolean true si tout s'est bien passé sinon false
         */
        purge(hour?: number): IPromesse<boolean>;
        /**
         * Permet de fermer SpiFactory
         *
         *
         * @return boolean true si tout s'est bien passé sinon false
         */
        fermetureSpiFactory(): IPromesse<boolean>;
        /**
         * Permet de configurer un scanner
         *
         * @param typeScanner le type du scanner à configurer
         *
         * @return boolean true si tout s'est bien passé sinon false
         */
        setConfigurationScanner(typeScanner: string): IPromesse<boolean>;
        /**
         * Permet de merger des PDF et de les ouvrir
         *
         * @param params les paramètres nécessaires à l'ouverture d'un PDF
         *
         * @return boolean true si tout s'est bien passé sinon false
         */
        mergeAndOpenPDF(params: IGedParams): IPromesse<IProcessingTasks>;
        /**
         * retourne le chemin du fichier de résultat (au format demandé) mergeant les documents passés en paramètres.
         * Si le format demandé est de type FORMAT_MERGE.PDF mais qu'un des documents n'est pas de ce type, une archive au format FORMAT_MERGE.ZIP sera créée.
         * @param params IGedParams liste des documents à merger ou à archiver.
         * @param pFormatResultat FORMAT_MERGE type de format du fichier de résultat.
         * @returns une promesse de type string contenant le chemin du fichier de résultat.
		 * @version : 19.09
         */
        recupereListeDocumentGED(params: IGedParams, pFormatResultat: MyWay.Services.Acquisition.FORMAT_MERGE): IPromesse<string>;
        /**
         * ouvre ou ajoute en pièce jointe à un mail (dépend du paramètre correspondant) une archive de documents fournis en paramètre.
         * @param params IGedParams liste des documents constituant l'archive.
         * @param pFormatResultat FORMAT_MERGE type de format du fichier de résultat.
         * @param pTypeOuverture OUVERTURE_ARCHIVE type de manipulation de l'archive : ouverture ou ajout en pièce jointe d'un mail.
         * @returns une promesse.
		 * @version : 19.09
         */
        ouvrirListeDocumentGED(params: IGedParams, pFormatResultat: MyWay.Services.Acquisition.FORMAT_MERGE, pTypeOuverture: MyWay.Services.Acquisition.OUVERTURE_ARCHIVE): IPromesse<any>;
        private defers;
        /**
         * Permet connaître l'état d'un traitement d'un merge et ouvrir pdf
         *
         * @param guid l'identifiant du traitement à connaître
         *
         * @return string status le statut du traitement correspondant au guid
         */
        getProcessingTask(guid: string): IPromesse<any>;
        /**
         * Permet de récupérer des documents en GED, de les sauvegarder et de les récupérer
         *
         * @param params information du fichier
         *
         * @return array un tableau contenant les liens vers les documents GED, les miniatures et les pds de chaque fichier
         */
        getDocumentGEDAndSave(params: IGedParams): IPromesse<any>;
		
		/**
         * @author : Benoît Ouvrié.
         * @version : 20.03
         * @description : liste des scanners accessibles depuis le poste.
         * @returns Une promesse de type liste de IScannerAccessibleResult.
         */
        getListeScanner(checkRemote: Boolean): IPromesse<[IScannerAccessibleResult]>;
        /**
         * @author : Benoît Ouvrié.
         * @version : 20.03
         * @description : vérification de la prise en main (ou non) à distance du poste.
         * @returns Une promesse de type IPrisEnMainADistanceResult.
         */
        isPrisEnMainADistance(): IPromesse<IPrisEnMainADistanceResult>;
        /**
         * @author : Benoît Ouvrié
         * @version : 20.03
         * @description : Sauvegarde le document GED (passé en paramètre) sur le poste à l'endroit précisé en paramètre
         * puis ouvre le document.
         * @param params interface de type IGedOneSaveAtAndOpenParams. Il contient les éléments nécessaires pour retrouver le document en GED
         * et le chemin où le document GED sera sauvegardé (cheminSauvegardeSurLePoste).
         * @returns une IPromesse de type string représentant le chemin du document sur le poste.
         *
         */
        getDocumentGedSaveAtAndOpen(params: IGedOneSaveAtAndOpenParams): IPromesse<string>;
        /**
         * @author : Benoît Ouvrié
         * @version : 20.03
         * @description Ouvre le fichier présent sur le poste localement, à l'adresse fournie en paramètre.
         * @param leParam chemin du fichier, présent localement sur le poste, à ouvrir.
         * @returns une IPromesse de type booelan : true si l'ouverture s'est bien passée.
         */
        uploadDocumentFrom(leParam: string): MyWay.Services.IPromesse<boolean>;
        reception(message: MyWay.Services.Acquisition.Messages.IAcquisitionMessage): MyWay.Services.IPromesse<any>;
    }
}
/**
 * Module de gestion de la numérisation
 * @module MyWay.Services.Acquisition
 */
declare module MyWay.Services {
    interface ServiceAgent {
        Acquisition: Acquisition.AcquisitionAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Chat: BriqueCommunication.Chat.ChatAgent;
    }
}
declare module MyWay.Services.BriqueCommunication.Chat {
    class ChatAgent extends Components.ComponentAgentBase<IChatMessage, ChatMessageSubject, IChatMessageContent> {
        private static CLASS_NAME;
        private static logger;
        private noop;
        private producersConsumers;
        private producersConsumersById;
        private promesseCodeAgent;
        constructor();
        init(pAgentLibrary: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        private sendNotification;
        addChatCapacity(): void;
        getMe(): IPromesse<string>;
        setStatut(pStatut: Messages.UTILISATEUR_STATUT): IPromesse<void>;
        openChat(pUserDestinataire: string): MyWay.Services.IPromesse<Messages.OpenChatResponse>;
        openTchatroom(pChatroomId: string): MyWay.Services.IPromesse<Messages.OpenChatResponse>;
        closeChat(pChatroomId: string): MyWay.Services.IPromesse<void>;
        sendMessageChat(pChatroomId: string, pMessage: string): MyWay.Services.IPromesse<void>;
        getUtilisateurs(): MyWay.Services.IPromesse<Messages.IUtilisateur[]>;
        getChatrooms(): MyWay.Services.IPromesse<Messages.OpenChatResponse[]>;
        getChatroom(pChatroomId: string): MyWay.Services.IPromesse<Messages.OpenChatResponse>;
        accepterInvitationExpert(pChatroomId: string, pDomaine: string, pProspect: string): MyWay.Services.IPromesse<void>;
        inviterPersonnesAUneChatroom(pChatroomId: string, ...pUsersId: string[]): MyWay.Services.IPromesse<void>;
        setHtmlElementVideo(pChatroomId: string, pUserId: string, pHtmlElement: HTMLVideoElement): void;
        commencerVideo(pChatroomId: string): void;
        arreterVideo(pChatroomId: string): void;
        devenirFramePrincipalePourChatroomVideo(pChatroomId: string): void;
        reception(pMessage: IChatMessage): IPromesse<any>;
        private traiterEvennement;
        private traiterEvennementBriqueCommunication;
        private traiterEvennementChat;
        private numMessage;
        private changementMainChatroom;
        private ajouterVideoroom;
        private terminerVideoroom;
        private getMyCode;
        etablirVideorooms(pChatroomId: string, pUsers: string[], pEstFramePrincipale: boolean): void;
        private terminerToutesVideorooms;
        private handleMessageWebRTC;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Notification: BriqueCommunication.Notification.NotificationAgent;
    }
}
declare module MyWay.Services.BriqueCommunication.Notification {
    class NotificationAgent extends Components.ComponentAgentBase<INotificationMessage, NotificationMessageSubject, INotificationMessageContent> {
        constructor();
        abonnement(pSubject: string): IPromesse<void>;
        desabonnement(pSubject: string): IPromesse<void>;
        getListeSujets(): IPromesse<Messages.ISujetDetails[]>;
    }
}

declare module MyWay.Services.TraceSuivi {
    class TraceSuiviModel {
        dateUse: number;
        timezone: string;
        deviceType: string;
        deviceId: string;
        computerSi: string;
        establishment: string;
        agentEdsType: string;
        agentEdsCode: string;
        agentEdsInternalRef: string;
        agentCode: string;
        computerEdsInternalId: string;
        processIdMaster: string;
        processIdCurrent: string;
        stepIdCurrent: string;
        processIdBusiness: string;
        action: string;
        state: string;
        resultStep: string;
        data: any;
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        TraceSuivi = 27
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.TraceSuivi.Messages {
    enum TraceSuiviMessageSubject {
        SendTraceSuivi = 0,
        SendTraceSuiviForcee = 1
    }
    interface ITraceSuiviMessageContentSendTraceSuivi extends ITraceSuiviMessageContent {
        trace: TraceSuiviModel;
    }
    interface ITraceSuiviMessageContentSendTraceSuiviForcee extends ITraceSuiviMessageContent {
        trace: TraceSuiviModel;
    }
    interface ITraceSuiviMessageContent {
    }
    interface ITraceSuiviMessage extends Components.IMessage<TraceSuiviMessageSubject, ITraceSuiviMessageContent> {
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Mobilite: Mobilite.MobiliteAgent;
    }
}
/**
* Module de gestion de la mobilité
* @module MyWay.Services.Mobilite
* @author Laurie Marchaterre
*/
declare module MyWay.Services.Mobilite {
    /**
    * Classe permettant d'accéder aux données de mobilité
    */
    class MobiliteAgent extends Components.ComponentAgentBase<Messages.IMobiliteMessage, Messages.MobiliteMessageSubject, Messages.IMobiliteMessageContent> {
        private static CLASS_NAME;
        private static logger;
        /**
         * Constructeur de la classe MobiliteAgent
         * @param {AgentLibrary}   agentLibrary  [description]
         * @param {ErreurCallback} errorCallback [description]
         */
        constructor();
        /**
         * Méthode qui récupère la liste des caisses auto connectées.
         * @return {IPromesse<ICaisseAuto[]>} liste de caisses auto
         * ~~~ts
         * serviceAgent.mobilite.getCaissesAuto().then((result: ICaissesAuto[]) => {
         *  // Renvoi un tableau de Caisse Auto
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *  // Renvoi une erreur
         * });
         * ~~~
         */
        getCaissesAuto(): IPromesse<ICaisseAuto[]>;
        /**
         * Méthode qui récupère la liste les informations de la machine de l'utilisateur.
         * Les informations retournées sont :
         *     - La plateforme
         *     - La largeur de l'écran
         *     - La hauteur de l'écran
         *     - La résolution Minimale MyWay (boolean)
         *     - Ecran tactile (boolean)
         *     - Le navigateur
         * @return {IPromesse<IInfoMachine>} : IInfoMachine
         * ~~~ts
         * serviceAgent.mobilite.getInfoMachine().then((result: IInfoMachine) => {
         *  // Renvoi les infos machine
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *  // Renvoi une erreur
         * });
         * ~~~
         */
        getInfoMachine(): IPromesse<IInfoMachine>;
        /**
         * **DEPRECIEE:** Méthode qui récupère la liste des périphériques connectés.
         * Il faut utiliser la méthode getPeripheriques();
        **/
        GetPeripheriques(...params: any[]): any;
        /**
         * Méthode qui récupère la liste des périphériques connectés.
         * Les périphériques retournées sont :
         *     - Les caisses auto
         *     - Les tablettes de signature Wacom
         * @return {IPromesse<IPeripherique[]>} liste de IPeripherique
         * ~~~ts
         * serviceAgent.mobilite.getPeripheriques().then((result: IPeripherique[]) => {
         *  // Renvoi un tableau de Peripherique
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *  // Renvoi une erreur
         * });
         * ~~~
         */
        getPeripheriques(): IPromesse<IPeripherique[]>;
        /**
         * Permet de savoir à quel type de réseau on est connecté.
         * @return {IPromesse<TYPE_RESEAU>}
         *      - CONNECTE : Connecté (réseau inconnu)
         *      - OFFLINE: Déconnecté
         *
         * ~~~ts
         * serviceAgent.mobilite.getReseau().then((result: TYPE_RESEAU) => {
         * // Renvoi le type de connexion
         * ...
         * * }).catch((erreur: MyWay.Services.Erreur) => {
         * // Renvoi une erreur
         * ...
         * });
         * ~~~
         */
        getReseau(): IPromesse<TYPE_RESEAU>;
        /**
         * Méthode qui récupère la liste des tablettes de signature connectées.
         * @return {IPromesse<ITabletteSignature[]>} liste de tablettes de signature Wacom
         * ~~~ts
         * serviceAgent.mobilite.getTablettesSignature().then((result: ITabletteSignature[]) => {
         *  // Renvoi un tableau de tablettes de signature Wacom
         * }).catch((erreur: MyWay.Services.Erreur) => {
         *  // Renvoi une erreur
         * });
         * ~~~
         */
        getTablettesSignature(): IPromesse<ITabletteSignature[]>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Mobilite: Mobilite.MobiliteAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Capacites = 28
    }
}
declare module MyWay.Services.Capacites.Messages {
    enum CapacitesMessageSubject {
        GetCapacite = 0
    }
    interface ICapacitesMessageContent {
    }
    interface ICapacitesMessageContentGetCapacite extends ICapacitesMessageContent {
        regle: REGLE;
    }
    interface ICapacitesMessage extends Components.IMessage<CapacitesMessageSubject, ICapacitesMessageContent> {
    }
}
/**
* Module de gestion de la cpacités (module commun aux agents et aux managers)
* @module MyWay.Services.Capacites
*/
declare module MyWay.Services.Capacites {
    /**
     * Liste des diférentes règles
     */
    enum REGLE {
        INTEROP_APPLI_BANCAIRE = 0,
        INTEROP_WINDOWS = 1,
        TABLETTE_SIGNATURE = 2,
        CAISSE_AUTO = 3,
        CONNECTE = 4,
        MODIFIER_HABILITATION = 5,
        ECRAN_COMPATIBLE_MYWAY = 6,
        RESEAU_INTERNE = 7,
        PORTAIL_MYWAY = 8
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Aide = 29
    }
}
declare module MyWay.Services.Aide.Messages {
    enum AideMessageSubject {
        GetContenuInfobulle = 0,
        GetInfobullesAffichables = 1
    }
    interface IAideMessageContent {
    }
    interface IAideMessageContentGetContenuInfobulle extends IAideMessageContent {
        idChampLie: string;
        horsProcessus: boolean;
        codeProcessus: string;
        codeEtape: string;
    }
    interface IAideMessageContentGetInfobullesAffichables extends IAideMessageContent {
        horsProcessus: boolean;
        codeProcessus: string;
        codeEtape: string;
    }
    interface IAideMessage extends Components.IMessage<AideMessageSubject, IAideMessageContent> {
    }
}
declare module MyWay.Services.Aide {
    interface IAideFlash {
        titre: string;
        contenu: string;
        id: number;
    }
    interface IAideResult {
        ChampsDeSaisie: ChampDeSaisieResult[];
        ModalePush: ModalePushResult;
        Totem: TotemResult[];
        InfobullesAffichees: InfobulleAfficheeResult[];
        DetailInfobulleAffichee: DetailInfobulleAfficheeResult;
    }
    class AideResult implements IAideResult {
        ChampsDeSaisie: ChampDeSaisieResult[];
        ModalePush: ModalePushResult;
        Totem: TotemResult[];
        InfobullesAffichees: InfobulleAfficheeResult[];
        DetailInfobulleAffichee: DetailInfobulleAfficheeResult;
        constructor(data: IAideResult);
    }
    class ChampDeSaisieResult {
        Id: string;
        IdChamp: string;
        MessageCommunautaire: string;
        MessageEtablissement: string;
        EstUneNouveaute: boolean;
        constructor(data: any);
    }
    class ModalePushResult {
        Message: string;
        constructor(data: any);
    }
    class TotemResult {
        Categorie: string;
        Titre: string;
        FormatDocument: string;
        Lien: string;
        EstUneNouveaute: boolean;
        constructor(data: any);
    }
    class Infobulle {
    }
    class InfobulleAfficheeResult extends Infobulle {
        private _nomChampLie;
        private _estNouveaute;
        constructor(nomChamp: any, nouveaute?: boolean);
        getNomChampLie(): string;
        getEstNouveaute(): boolean;
    }
    class DetailInfobulleAfficheeResult extends InfobulleAfficheeResult {
        private _message;
        private _image;
        constructor(nomChamp: any, nouveaute?: boolean, message?: string, img?: string);
        getNomChampLie(): string;
        getEstNouveaute(): boolean;
        getMessage(): string;
        getImage(): string;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Preferences: Preferences.PreferencesAgent;
    }
}
/**
 * Module de gestion des preferences
 * @module MyWay.Services.Preferences
 * classe : PreferencesAgent - public - Classe permettant la gestion de preferences
 */
declare module MyWay.Services.Preferences {
    /**
     * Classe permettant la gestion de la configuration.
     */
    class PreferencesAgent extends Components.ComponentAgentBase<IPreferencesMessage, PreferencesMessageSubject, IPreferencesMessageContent> {
        /**
         * Constructeur de la classe ConfigurationAgent.
         */
        constructor();
        /**
         * Méthode permettant de lire une préférence spécifique.
         *
         * @param nomVariable Le nom de la préférence à récupérer.
         * @returns une promesse avec une préférence en retour.
         */
        LirePreference(nomVariable: string, isChargerServeur?: boolean): IPromesse<string>;
        /**
         * Méthode permettant d'écrire une préférence ou d'en modifier une existante.
         *
         * @param nomVariable       Le nom de la préférence à écrire ou à modifier.
         * @param valeurVariable    La valeur de la préférence.
         * @returns une promesse sans valeur de retour.
         */
        EcrirePreference(nomVariable: string, valeurVariable: string): IPromesse<void>;
        /**
         * Méthode permettant de lire plusieurs préférences à la fois.
         *
         * @param codesPreference Une liste de nom de préférences à lire.
         * @returns une promesse avec un tableau de préférences.
         */
        lireMultiPreference(codesPreference: string[]): IPromesse<IPreferenceUtilisateur[]>;
        /**
         * Méthode permettant d'écrire ou modifier plusieurs préférences à la fois.
         *
         * @param preferences Une liste de préférences à écrire ou modifier.
         * @returns une promesse sans valeur de retour.
         */
        ecrireMultiPreference(preferences: IPreferenceUtilisateur[]): IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Preferences: Preferences.PreferencesAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        Trace: Trace.Logger;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgentExtended {
        demarrerDiagnostic: (serviceInit: MyWay.Services.IServiceAgentInitialisation, initDate: number) => void;
        prepareTracesTechniques: () => void;
        ajouteEvenementsUtilisateurs: () => void;
        retireEvenementsUtilisateurs: () => void;
        OnPremiereAction: (ev: any) => void;
        stringify: (d: ApplicationDiagnostic, ev: any) => string;
        countWatchers: () => void;
        cleanTimers: () => void;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Trace: Trace.Logger;
    }
}
declare module MyWay.Services.Trace {
    var KEY_TIME_BEFORE_TRANSITION;
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Trace: Trace.TraceAgent;
    }
}
declare module MyWay.Services.Trace {
    class TraceAgent extends Components.ComponentAgentBase<Messages.ITraceMessage, Messages.TraceMessageSubject, Messages.ITraceMessageContent> implements ITraceService, Messages.ITraceCommon {
        private _application;
        private _applicationVersion;
        private regExpSTC;
        constructor();
        init(pAgentLibrary: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        dispose(): IPromesse<void>;
        send(trace: TraceModel): IPromesse<any>;
        sendLog(pLog: Loggers.ILoggerWithContext): IPromesse<void>;
        sendDiagnostic(diagnostic: ApplicationDiagnostic): IPromesse<void>;
        /**
         * Permet à une SPA  de rajouter un temp à la trace de fin de chargement
         * Cette durée est stockée dans le context à l'étape A pour être utilisée dans le calcul du temps de chargement de l'étape B
         */
        setTempsAvantTransition(temps: number): IPromesse<boolean>;
    }
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Impression = 30
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Impression.Messages {
    enum ImpressionMessageSubject {
        Generer = 0,
        GetJsonConverti = 1,
        Imprimer = 2,
        ImprimerLot = 3,
        GenererImprimer = 4
    }
    interface IImpressionMessageContentGenerer extends IImpressionMessageContent {
        data: any;
        generationParams: GenerationParams;
    }
    interface IImpressionMessageContentGetJsonConverti extends IImpressionMessageContent {
        data: any;
    }
    interface IImpressionMessageContentImprimer extends IImpressionMessageContent {
        data: any;
        impressionParams: ImpressionParams;
    }
    interface IImpressionMessageContentImprimerLot extends IImpressionMessageContent {
        data: any;
        parametresActiveXGlobaux: ParametresActiveXGlobaux;
    }
    interface IImpressionMessageContentGenererImprimer extends IImpressionMessageContent {
        data: any;
        generationImpressionParams: GenerationImpressionParams;
    }
    interface IImpressionMessageContent {
    }
    interface IImpressionMessage extends Components.IMessage<ImpressionMessageSubject, IImpressionMessageContent> {
    }
}
/**
* Module de gestion des impressions (module commun aux agents et aux managers)
* @module MyWay.Services.Impression
* @enum RESTITUTION_VERSION - public - Enumération correspondant aux différentes versions du serveur de restitution
* @enum GENERATION_ACTION - public - Enumération correspondant aux différentes actions du service de génération
* @enum GENERATION_IMPRESSION_ACTION - public - Enumération correspondant aux différentes actions du service de génération et d'impression
* @enum TYPE_IMAGE - public - Enumération correspondant aux différentes types de données images possibles dans le flux de données d'impression
* @interface DocumentGenere - public - Interface permettant de décrire un objet document généré
* @interface DocumentImpressionLot - public - Interface permettant de définir les paramètres de documents pour l'impression par lot
* @interface GenerationParams - public - Interface permettant de définir les paramètres de génération d'un document
* @interface ParametresGenerationSysteme - public - Interface permettant de définir les paramètres système pour la génération d'un document
* @interface ParametresGenerationObligatoires - public - Interface permettant de définir les paramètres obligatoires pour la génération d'un document
* @interface ParametresGenerationFichier - public - Interface permettant de définir les paramètres nécessaires à la génération d'un fichier d'impression
* @interface ParametresGenerationOptionnels - public - Interface permettant de définir les paramètres optionnels pour la génération d'un document
* @interface MentionsLegales - public - Interface permettant de définir les mentions légales
* @interface Archivage - public - Interface permettant d’archiver lors de la génération du fichier
* @interface GceContextSoapHeader - public - Interface contenant les  informations d'entête du contexte SOAP
* @interface AQstnCreerDoc - public - Interface contenant les questions pour la création de document
* @interface DonnCntx - public - Interface contenant les données contextuelles
* @interface Document - public - Interface permettant de créer un document
* @interface ProprietesDoc - public - Interface contenant les métadonnées du document à créer
* @interface FichierDoc - public - Interface contenant les propriétés propres à la pièce-jointe du document à créer
* @interface BlocGenerique - public - Interface
* @interface ImpressionParams - public - Interface permettant de définir les paramètres d'impression d'un document
* @interface ParametresImpressionObligatoires - public - Interface permettant de définir les paramètres obligatoires pour l'impression d'un document
* @interface ParametresImpressionOptionnels - public - Interface permettant de définir les paramètres optionnels pour l'impression d'un document
* @interface GenerationImpressionParams - public - Interface permettant de définir les paramètres de génération et d'impression d'un document
* @interface ParametresGenerationImpressionObligatoires - public - Interface permettant de définir les paramètres obligatoires pour la génération et l'impression d'un document
* @interface ParametresGenerationImpressionOptionnels - public - Interface permettant de définir les paramètres optionnels pour la génération et l'impression d'un document
* @interface ParametreActiveX - public - Interface permettant de définir les paramètres de l'ActiveX d'impression pour une impression simple
* @interface ParametresActiveXIndividuels - public - Interface permettant de définir les paramètres individuels de l'ActiveX d'impression pour une impression par lot
* @interface ParametresActiveXGlobaux - public - Interface permettant de définir les paramètres globaux de l'ActiveX d'impression pour une impression par lot
*/
declare module MyWay.Services.Impression {
    /**
    * Enumération correspondant aux différentes versions du serveur de restitution
    * @enum Impression.RESTITUTION_VERSION
    */
    enum RESTITUTION_VERSION {
        /** Version 180 du serveur de restitution */
        V180 = 180
    }
    /**
    * Enumération correspondant aux différentes actions de génération possibles
    * @enum Impression.GENERATION_ACTION
    */
    enum GENERATION_ACTION {
        /** Permet d'archiver le document généré en GED */
        archiver = 10,
        /** Permet d'archiver en GED et d'obtenir le fichier généré */
        archiverAndGetFichier = 20,
        /** Permet d'obtenir le fichier généré */
        getFichier = 30
    }
    /**
    * Enumération correspondant aux différentes actions de génération et d'impression possibles
    * @enum Impression.GENERATION_IMPRESSION_ACTION
    */
    enum GENERATION_IMPRESSION_ACTION {
        /** Permet d'archiver en GED et d'obtenir le fichier généré et imprimé */
        archiverAndGetFichier = 20,
        /** Permet d'obtenir le fichier généré et imprimé */
        getFichier = 30
    }
    /**
    * Enumération correspondant aux différentes types de données images possibles dans le flux de données d'impression
    * @enum Impression.TYPE_IMAGE
    */
    enum TYPE_IMAGE {
        /** Nom de l'image */
        Id = 0,
        /** Image en Base 64 */
        Flux = 1
    }
    /**
    * Interface permettant de décrire un objet document généré
    * @interface Impression.DocumentGenere
    */
    interface DocumentGenere {
        /**
        * L'identifiant d'archivage en GED sous forme de chaine de caractères<br />
        * <i>null</i> si l'archivage n’a pas été demandé
        */
        IdntPJ: any;
        /**
        * Le fichier généré sous forme de chaine de caractères (BASE64)<br />
        * <i>null</i> si aucun retour de fichier n’a été demandé
        */
        Fichier: any;
        /**
        * Date de la création du document généré<br />
        * NE PAS UTILISER, VA ETRE SUPPRIME
        */
        DateCrtn: string;
    }
    /**
    * Interface permettant de définir les paramètres de documents pour l'impression par lot
    * @interface Impression.DocumentImpressionLot
    */
    interface DocumentImpressionLot {
        /** Le numéro d'identification de l'élément */
        numeroOrdre: number;
        /**
        * Le fichier au format PDF (Base 64)<br />
        * Peut-être <i>null</i> si idGed est renseigné
        */
        fichier?: any;
        /**
        * L'identifiant GED du document<br />
        * Peut-être <i>null</i> si fichier est renseigné
        */
        idGed?: any;
        /**
        * Nom du composant applicatif<br />
        * Si non renseigné, 'CONTELEC' est utilisé
        */
        composantApplicatif?: string;
        /**
        * Permet de définir le code Banque sous lequel l'établissement est répertorié par la Banque de France<br />
        * Si non renseigné, récupéré du contexte
        */
        codeEtablissement?: string;
        /** Permet de définir les paramètres d'impression d'un document */
        impressionParams: ImpressionParams;
    }
    /**
    * Interface permettant de définir les paramètres de génération d'un document
    * @interface Impression.GenerationParams
    */
    interface GenerationParams {
        /** Permet de définir les paramètres système pour la génération d'un document */
        systeme: ParametresGenerationSysteme;
        /** Permet de définir les paramètres obligatoires pour la génération d'un document */
        obligatoires: ParametresGenerationObligatoires;
        /** Permet de définir les paramètres optionnels pour la génération d'un document */
        optionnels: ParametresGenerationOptionnels;
    }
    /**
    * Interface permettant de définir les paramètres système pour la génération d'un document
    * @interface Impression.ParametresGenerationSysteme
    */
    interface ParametresGenerationSysteme {
        /** Permet de définir le nom de la classe d'impression */
        typeName: string;
        /** Permet de définir le nom complet de la classe d'impression */
        typeFullName: string;
        /** Permet de définir la librairie d'impression */
        librairie: string;
    }
    /**
    * Interface permettant de définir les paramètres obligatoires pour la génération d'un document
    * @interface Impression.ParametresGenerationObligatoires
    */
    interface ParametresGenerationObligatoires {
        /**
        * Permet de définir l'action à réaliser lors de la génération<br />
        * Si ces actions impliquent l’obtention d’un fichier généré alors le paramètre optionnel <i>nomFichier</i> doit être renseigné
        */
        action: GENERATION_ACTION;
        /** Permet de définir les paramètres nécessaires à la génération d'un fichier d'impression */
        parametresGenerationFichier: ParametresGenerationFichier;
    }
    /**
    * Interface permettant de définir les paramètres nécessaires à la génération d'un fichier d'impression
    * @interface Impression.ParametresGenerationFichier
    */
    interface ParametresGenerationFichier {
        /** Permet de définir les différents types de fichier */
        typeFichier: MyWay.Services.Fichier.TYPE_FICHIER;
        /** Permet de définir les différentes versions du serveur de restitution */
        restitutionVersion: RESTITUTION_VERSION;
        /**
        * Permet de définir le chemin relatif du sous répertoire contenant le modèle à utiliser<br />
        * Valoriser à "" pour utiliser le répertoire racine
        */
        sousRepModele: string;
    }
    /**
    * Interface permettant de définir les paramètres optionnels pour la génération d'un document
    * @interface Impression.ParametresGenerationOptionnels
    */
    interface ParametresGenerationOptionnels {
        /**
        * Permet de définir les paramètres nécessaires à la génération du fichier d’impression<br />
        * Si non défini, c’est le flux XML avant génération qui est archivé
        */
        nomFichier?: string;
        /**
        * Permet de définir les paramètres nécessaires à l’alimentation automatique des mentions légales : la data correspondant au nom passé en paramètre sera automatiquement alimentée<br />
        * Si non défini, les mentions légales ne seront pas automatiquement injectées lors de la génération du flux XML
        */
        mentionsLegales?: MentionsLegales;
        /**
        * Permet de définir les paramètres nécessaires à l'archivage en GED d'un document généré<br />
        * Ne pas oublier de mettre <i>action</i> de <i>ParametresGenerationObligatoires</i> à <i>GENERATION_ACTION.archiver</i> ou <i>GENERATION_ACTION.archiverAndGetFichier</i>
        */
        archivage?: Archivage;
        /**  */
        blocGenerique?: BlocGenerique;
    }
    /**
    * Interface permettant de définir les mentions légales
    * @interface Impression.MentionsLegales
    */
    interface MentionsLegales {
        /**  */
        numEtablissement: string;
    }
    /**
    * Interface permettant d’archiver lors de la génération du fichier.
    * @interface Impression.Archivage
    */
    interface Archivage {
        /** Permet de définir les paramètres contenant les informations d'entête du contexte SOAP */
        gceContextSoapHeader?: GceContextSoapHeader;
        /** Permet de définir les paramètres contenant les questions pour la création d'un document */
        aQstnCreerDoc: AQstnCreerDoc;
    }
    /**
    * Interface contenant les informations d'entête du contexte SOAP
    * @interface Impression.GceContextSoapHeader
    */
    interface GceContextSoapHeader {
        /**  */
        codePrflAgnt?: string;
        /**  */
        codeTypeIdntExtn?: string;
        /**  */
        extendedProperties?: string;
        /**  */
        idntAgnt?: string;
        /**  */
        idntAgntAcces?: string;
        /**  */
        idntAgntTech?: string;
        /**  */
        idntEtabEntt?: string;
        /**  */
        idntExtnConx?: string;
        /**  */
        idntInteEdsAgnt?: string;
        /**  */
        refrExtnAgnt?: string;
        /**  */
        refrPosteFoncAgnt?: string;
        /**  */
        typeCanlAcces?: string;
        /**  */
        typePrflAgnt?: string;
    }
    /**
    * Interface contenant les questions pour la création de document
    * @interface Impression.AQstnCreerDoc
    */
    interface AQstnCreerDoc {
        /** Permet de définir les paramètres contenant les données contextuelles du document à archiver */
        donnCntx: DonnCntx;
        /** Permet de définir les paramètres du document à archiver */
        document: Document;
    }
    /**
    * Interface contenant les données contextuelles
    * @interface Impression.DonnCntx
    */
    interface DonnCntx {
        /**
        * Permet de définir le code Banque sous lequel l'établissement est répertorié par la Banque de France<br />
        * Si pas renseigné, récupérer dans le contexte
        */
        codeEtablissement?: string;
        /** Identifiant de l'application à l'origine de la demande */
        idntCmpstApplf: string;
    }
    /**
    * Interface permettant de créer un document
    * @interface Impression.Document
    */
    interface Document {
        /** Permet de définir les paramètres contenant les métadonnées du document à archiver */
        proprietesDoc: ProprietesDoc;
        /** Permet de définir les paramètres contenant les propriétés propres à la pièce jointe du document à archiver */
        fichierDoc: FichierDoc;
    }
    /**
    * Interface contenant les métadonnées du document à créer
    * @interface Impression.ProprietesDoc
    */
    interface ProprietesDoc {
        /** Permet de définir l'identifiant du lot */
        idntLot?: string;
        /**
        * Permet de définir le mode d'acquisition du document. Prend les valeurs :
        * <ol>
        *     <li>Signature Agence</li>
        *     <li>Signature à distance </li>
        *     <li>RAD-LAD CE</li>
        *     <li>Numérisation CE </li>
        *     <li>Reprise de masse </li>
        *     <li>Flux de masse </li>
        *     <li>Numérisation externe</li>
        *     <li>Injection Temps Réel</li>
        * </ol>
        * Valoriser à 8 si ActionDocument = 4<br />
        * Ce paramètre devient obligatoire si l'archivage se fait en GED définitive (codeTypeStck = "A")
        */
        codeTypeModeAcqs?: string;
        /**
        * Permet de définir le moyen d'acquisition du document. Prend les valeurs:
        * <ol>
        *     <li>Fax</li>
        *     <li>E-mail</li>
        *     <li>Editique </li>
        *     <li>Numérique</li>
        *     <li>Papier</li>
        * </ol>
        * Valoriser à 3 si ActionDocument = 4<br />
        * Ce paramètre devient obligatoire si l'archivage se fait en GED définitive
        */
        codeTypeOrigAcqs?: string;
        /** Permet de définir la nature du document */
        codeTypeNatrDoc: string;
        /**
        * Permet de définir le type d'attributaire :
        * <ol>
        *    <li>Attributaire type contrat</li>
        *    <li>Attributaire type personne particulier</li>
        *    <li>Attributaire type personne Professionnel</li>
        *    <li>Attributaire type personne Morale </li>
        *    <li>Attributaire type relation économique </li>
        *    <li>Attributaire type demande de financement</li>
        *    <li>Attributaire type entité titulaire</li>
        *    <li>Attributaire type Sinistre assurance</li>
        *    <li>Attributaire type dossier temporaire VMC</li>
        *    <li>Attributaire type prospect BDR</li>
        *    <li>Attributaire type bénéficiaire assurance vie</li>
        *    <li>Dossier de fraude interne</li>
        *    <li>Document d'entreprise</li>
        * </ol>
        */
        codeTypeAttrb: string;
        /**
        * Si Type attributaire égal à :
        * <ol>
        *    <li>Identifiant du contrat souscrit</li>
        *    <li>Identifiant de la personne</li>
        *    <li>Identifiant de la personne</li>
        *    <li>Identifiant de la personne</li>
        *    <li>Identifiant de la relation Economique</li>
        *    <li>Identifiant de la demande de financement</li>
        *    <li>Identifiant de l'entité titulaire</li>
        *    <li>Identifiant d'un sinistre Assurance</li>
        *    <li>Identifiant d'un dossier temporaire</li>
        *    <li>Identifiant Prospect BDR</li>
        *    <li>Attributaire bénéficiaire assurance vie</li>
        *    <li>Dossier de fraude interne</li>
        *    <li>Document d'entreprise</li>
        * </ol>
        */
        idntAttrb: string;
        /**
        * Permet de définir l'identifiant secondaire de l'attributaire<br />
        * Il n'est renseigné que pour certains types d'attributaire<br />
        * Pour le code type=3 (Professionnel), contient le numéro chrono professionnel… */
        idntAttrSecn?: string;
        /**
        * Permet de définir, pour un document issu d'une numérisation, la "date de délivrance" située sur la pièce numérisée<br />
        * Sinon, défini la date de création du fichier (généré ou saisie) */
        dateDeliv: Date;
        /** Permet de définir, dans le cas d'un document issu d'une numérisation, la date à laquelle le document a été numérisé */
        dateNumr: Date;
        /** Permet de définir, dans le cas d'un document issu d'une numérisation, la date à laquelle le chargé d'affaire à pris possession du document origine */
        dateColt?: Date;
        /**
        * Permet de définir la date à laquelle le document pourra être purgé<br />
        * Si non renseignée, document non purgé
        */
        datePerm?: Date;
        /** Permet de définir la date d'élimination du document (date de purge) */
        dateFinVald?: Date;
        /** Permet de définir le numéro de l'archive physique */
        numUnitePhysique?: string;
        /** Permet de définir la position dans l'archive physique */
        posUnitePhysique?: number;
        /**
        * Exemples:
        * <ul style="list-style-type: none;">
        *    <li>Pour "particulier" correspond à DESIGNATION PARTICULIER</li>
        *    <li>Pour "Professionnel" correspond à NOM COMMERCIAL</li>
        *    <li>Pour "personne morale" correspond à RAISON SOCIALE</li>
        *    <li>Pour "Contrat" correspond à INTITULE ENTITE TITULAIRE</li>
        *    <li>Pour "Relation Economique" correspond à INTITULE RELATION ECONOMIQUE</li>
        *    <li>Pour "Demande de Financement" correspond OBJET DE LA DEMANDE DE FINANCEMENT</li>
        * </ul>
        */
        inttAttr: string;
        /**
        * Permet de définir la date qualifiant l'attributaire<br />
        * Exemples :
        * <ul style="list-style-type: none;">
        *    <li>Si code type attributaire = 2 (particulier) correspond à la date de naissance</li>
        *    <li>Si code attributaire = 4 (personne morale) date création entreprise</li>
        *    <li>etc.</li>
        * </ul>
        */
        dateAttr?: Date;
        /** Permet de définir le numéro d'identification du poste fonctionnel au sein d'un Etablissement */
        refrPosteFoncAcqs?: string;
        /** Permet de définir la description sommaire du document */
        descDoc?: string;
        /**
        * Permet de définir la zone de stockage où sera créé le document, à savoir :
        * <ul style="list-style-type: none;">
        *    <li>A : archivage (par défaut si rubrique non renseignée)</li>
        *    <li>T : transitoire</li>
        *    <li>L : temporaire</li>
        * </ul>
        */
        codeTypeStck?: string;
        /**
        * Code permettant le forçage du code accessibilité associé à la nature du document<br />
        * <b>!!! NON GERE ACTUELLEMENT !!!!</b>
        */
        codeForcAccs?: string;
        /**
        * Permet de définir le mode de signature. Prend les valeurs :
        * <ol start="0">
        *    <li>Non signé </li>
        *    <li>Signature papier </li>
        *    <li>Signature électronique</li>
        * </ol>
        * interface Ce paramètre devient obligatoire si l'archivage se fait en GED définitive
        */
        codeTypeSign?: string;
    }
    /**
    * Interface contenant les propriétés propres à la pièce-jointe du document à créer
    * @interface Impression.FichierDoc
    */
    interface FichierDoc {
        /** Nom du document qui sera stocké dans la GED définitive (avec l'extension) */
        nomFich: string;
    }
    /**
    * Interface
    * @interface Impression.BlocGenerique
    */
    interface BlocGenerique {
        /**  */
        idBloc?: string;
        /**  */
        dateBloc: Date;
    }
    /**
    * Interface permettant de définir les paramètres d'impression d'un document
    * @interface Impression.ImpressionParams
    */
    interface ImpressionParams {
        /** Permet de définir les paramètres obligatoires pour l'impression d'un document */
        obligatoires: ParametresImpressionObligatoires;
        /** Permet de définir les paramètres optionnels pour l'impression d'un document */
        optionnels: ParametresImpressionOptionnels;
    }
    /**
    * Interface permettant de définir les paramètres obligatoires pour l'impression d'un document
    * @interface Impression.ParametresImpressionObligatoires
    */
    interface ParametresImpressionObligatoires {
        /** Permet de définir le nom du fichier imprimé */
        nomFichier: string;
    }
    /**
    * Interface permettant de définir les paramètres optionnels pour l'impression d'un document
    * @interface Impression.ParametresImpressionOptionnels
    */
    interface ParametresImpressionOptionnels {
        /** @DEPRECATED Permet de définir les paramètres de l'ActiveX d'impression */
        parametreActiveX?: ParametreActiveX;
        /** Permet de définir les paramètres individuels de l'ActiveX d'impression */
        parametresActiveXIndividuels?: ParametresActiveXIndividuels;
    }
    /**
    * Interface permettant de définir les paramètres de génération et d'impression d'un document
    * @interface Impression.GenerationImpressionParams
    */
    interface GenerationImpressionParams {
        /** Permet de définir les paramètres système pour la génération et l'impression d'un document */
        systeme: ParametresGenerationSysteme;
        /** Permet de définir les paramètres obligatoires pour la génération et l’impression d'un document */
        obligatoires: ParametresGenerationImpressionObligatoires;
        /** Permet de définir les paramètres optionnels pour la génération et l’impression d'un document */
        optionnels: ParametresGenerationImpressionOptionnels;
    }
    /**
    * Interface permettant de définir les paramètres obligatoires pour la génération et l'impression d'un document
    * @interface Impression.ParametresGenerationImpressionObligatoires
    */
    interface ParametresGenerationImpressionObligatoires {
        /** Permet de définir les actions à réaliser lors de la génération et de l’impression */
        action: GENERATION_IMPRESSION_ACTION;
        /** Permet de définir le nom du fichier téléchargé par le navigateur si l’impression n’est pas possible (ex : exécution du service sur une tablette) */
        nomFichier: string;
        /** Permet de définir les paramètres nécessaires à la génération du fichier d’impression */
        parametresGenerationFichier: ParametresGenerationFichier;
    }
    /**
    * Interface permettant de définir les paramètres optionnels pour la génération et l'impression d'un document
    * @interface Impression.ParametresGenerationImpressionOptionnels
    */
    interface ParametresGenerationImpressionOptionnels {
        /**
        * Permet de définir le paramètre nécessaire à l'archivage en GED d'un document généré et imprimé<br />
        * Ne pas oublier de mettre <i>action</i> de <i>ParametresGenerationImpressionObligatoires</i> à <i>GENERATION_IMPRESSION_ACTION.archiverAndGetFichier</i>
        */
        archivage?: Archivage;
        /** @DEPRECATED Permet de définir les paramètres de l'ActiveX d'impression */
        parametreActiveX?: ParametreActiveX;
        /** Permet de définir les paramètres individuels de l'ActiveX d'impression  */
        parametresActiveXIndividuels?: ParametresActiveXIndividuels;
        /** @DEPRECATED Permet de définir si la génération se fait en local */
        local?: boolean;
    }
    /**
    * Interface permettant de définir les paramètres de l'ActiveX d'impression pour une impression simple<br />
    * @interface Impression.ParametreActiveX
    */
    interface ParametreActiveX {
        /**
        * Permet d'afficher ou non le bouton icône <i>Aperçu</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        voir?: boolean;
        /**
        * Permet d'afficher ou non le bouton icône <i>Enregistrer</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        enregistrer?: boolean;
        /**
        * Permet de bloquer et donc d’imposer le nombre de copies à imprimer pour un document <br />
        * La valeur par défaut est false
        */
        blocnbex?: boolean;
        /**
        * Permet de définir le nombre de copies par défaut du document à imprimer<br />
        * Si non défini, le nombre de copies est 1
        */
        nbcopiesdef?: number;
        /**
        * Permet de définir le nombre minimum de copies pour le document à imprimer<br />
        * Si non défini, le nombre de copies minimum est 0
        */
        mincop?: number;
        /**
        * Permet de définir le nombre maximum de copies pour le document à imprimer<br />
        * La valeur par défaut est 0
        */
        maxcop?: number;
        /**
        * Permet d'afficher ou non le bouton <i>Annuler</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        annul?: boolean;
        /**
        * Permet d’imposer l’impression sur l’imprimante par défaut<br />
        * <i>true</i>, obligation d’utiliser l’imprimante par défaut. Impossibilité de sélectionner une autre imprimante<br />
        * <i>false</i> ou non défini, l’utilisateur peut choisir l’imprimante désirée dans la liste des imprimantes proposées
        */
        impdef?: boolean;
        /**
        * Permet d’effectuer l’impression dans une fenêtre réduite<br />
        * <i>true</i>, ouverture d’une fenêtre d’impression réduite<br />
        * <i>false</i> ou non défini, affiche la fenêtre d’impression normale
        */
        affred?: boolean;
        /**
        * Permet de conserver les fichiers nécessaires à la réimpression du ou des documents
        * <i>true</i>, création et enregistrement dans le répertoire temporaire (%temp%) du poste de travail de 3 fichiers :
        * <ul>
        *   <li><strong>REIMPTYP.txt</strong> : ce fichier contient le type d’impression (« <strong>SIMPLE</strong> » ou « <strong>MULTI</strong> »)</li>
        *   <li>
        *       <strong>REIMPDOC.txt</strong> : ce fichier contient en fonction du type d’impression :
        *       <ul>
        *           <li>Impression simple : le flux d’impression envoyé à l’ActiveX</li>
        *           <li>Impression multiple : les flux d’impression et paramétrages associés envoyés à l’ActiveX</li>
        *       </ul>
        *   </li>
        *   <li>
        *       <strong>REIMPPAR.txt</strong> : ce fichier contient :
        *       <ul>
        *           <li>Dans le cas d’une impression simple : le paramétrage associé au document à imprimer</li>
        *           <li>Dans le cas d’une impression multiple : ce fichier n’est pas créé car inutile</li>
        *       </ul>
        *   </li>
        * </ul>
        * <i>false</i> ou non défini, l’utilisateur peut choisir l’imprimante désirée dans la liste des imprimantes proposées
        */
        reimp?: boolean;
    }
    /**
    * Interface permettant de définir les paramètres individuels de l'ActiveX d'impression pour une impression par lot
    * @interface Impression.ParametresActiveXIndividuels
    */
    interface ParametresActiveXIndividuels {
        /**
        * Permet d'afficher ou non le bouton icône <i>Aperçu</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        voir?: boolean;
        /**
        * Permet d'afficher ou non le bouton icône <i>Enregistrer</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        enregistrer?: boolean;
        /**
        * Permet de bloquer et donc d’imposer le nombre de copies à imprimer pour un document <br />
        * La valeur par défaut est false
        */
        blocknbex?: boolean;
        /**
        * Permet de définir le nombre de copies par défaut du document à imprimer<br />
        * Si non défini, le nombre de copies est 1
        */
        nbcopiesdef?: number;
        /**
        * Permet de définir le nombre minimum de copies pour le document à imprimer<br />
        * Si non défini, le nombre de copies minimum est 0
        */
        mincop?: number;
        /**
        * Permet de définir le nombre maximum de copies pour le document à imprimer<br />
        * La valeur par défaut est 0
        */
        maxcop?: number;
    }
    /**
    * Interface permettant de définir les paramètres globaux de l'ActiveX d'impression pour une impression par lot
    * @interface Impression.ParametresActiveXGlobaux
    */
    interface ParametresActiveXGlobaux {
        /**
        * Permet d'afficher ou non le bouton <i>Annuler</i> dans l'ActiveX d'impression<br />
        * Si non défini, le bouton ne sera pas affiché
        */
        annul?: boolean;
        /**
        * Permet d’imposer l’impression sur l’imprimante par défaut<br />
        * <i>true</i>, obligation d’utiliser l’imprimante par défaut. Impossibilité de sélectionner une autre imprimante<br />
        * <i>false</i> ou non défini, l’utilisateur peut choisir l’imprimante désirée dans la liste des imprimantes proposées
        */
        impdef?: boolean;
        /**
        * Permet d’effectuer l’impression dans une fenêtre réduite<br />
        * <i>true</i>, ouverture d’une fenêtre d’impression réduite<br />
        * <i>false</i> ou non défini, affiche la fenêtre d’impression normale
        */
        affred?: boolean;
        /**
        * Permet de conserver les fichiers nécessaires à la réimpression du ou des documents<br />
        * <i>true</i>, création et enregistrement dans le répertoire temporaire (%temp%) du poste de travail de 3 fichiers :
        * <ul>
        *   <li><strong>REIMPTYP.txt</strong> : ce fichier contient le type d’impression (« <strong>SIMPLE</strong> » ou « <strong>MULTI</strong> »)</li>
        *   <li>
        *       <strong>REIMPDOC.txt</strong> : ce fichier contient en fonction du type d’impression :
        *       <ul>
        *           <li>Impression simple : le flux d’impression envoyé à l’ActiveX</li>
        *           <li>Impression multiple : les flux d’impression et paramétrages associés envoyés à l’ActiveX</li>
        *       </ul>
        *   </li>
        *   <li>
        *       <strong>REIMPPAR.txt</strong> : ce fichier contient :
        *       <ul>
        *           <li>Dans le cas d’une impression simple : le paramétrage associé au document à imprimer</li>
        *           <li>Dans le cas d’une impression multiple : ce fichier n’est pas créé car inutile</li>
        *       </ul>
        *   </li>
        * </ul>
        * <i>false</i> ou non défini, l’utilisateur peut choisir l’imprimante désirée dans la liste des imprimantes proposées
        */
        reimp?: boolean;
    }
    /**
    * Interface permettant de définir les paramètres globaux REST de l'ActiveX d'impression pour une impression par lot
    * @interface Impression.ParametresActiveXGlobauxREST
    */
    interface IParametresActiveXGlobauxREST {
        /**
        ** Liste des parametres activeX globaux de l'activeX d'impression
        */
        serializedImpressionParams: ParametresActiveXGlobaux;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Libelle: Libelle.LibelleAgent;
    }
}
/**
* Module de gestion des libellés
* @module MyWay.Services.Libelle
*/
declare module MyWay.Services.Libelle {
    class LibelleAgent extends Components.ComponentAgentBase<ILibelleMessage, LibelleMessageSubject, ILibelleMessageContent> {
        private static CLASS_NAME;
        private static logger;
        constructor();
        /**
         * Permet au portail d'afficher un message à l'aide d'une modal bootstrap ou d'une application.
         *
         * ~~~ts
         * $scope.message_information = function () {
         *   serviceAgent.Libelle.afficherMessage(MyWay.Services.Libelle.LibelleModel.COM.MESSAGE_SANS_VARIABLE, MyWay.Services.Libelle.TYPE_AFFICHAGE.INFORMATION, null, null);
         * }
         *
         * // cas où une promesse est utilisée, qui renvoie le nom du bouton cliqué le cas échéant
         *
         * $scope.message_oui_non = function () {
         *   serviceAgent.Libelle.afficherMessage(MyWay.Services.Libelle.LibelleModel.COM.RESULTATS, MyWay.Services.Libelle.TYPE_AFFICHAGE.OUI_NON, ["Nom 1", "Nom 2"], 1000).then((resultat: any) => {
         *      console.log("bouton cliqué :"+resultat);
         *   });
         * }
         * ~~~
         *
         * @param  {any} codeLibelle
         * @param  {TYPE_AFFICHAGE}
         * @param  {string[]} Optionnel - Tableau de string qui constitueront le message
         * @param  {number} Optionnel - Indique le délai avant d'afficher les boutons une fois la modal ouverte
         *
         * @return {IPromesse<any>}
         */
        afficherMessage(codeLibelle: any, typeAffichage: TYPE_AFFICHAGE, valeurs?: string[], delai?: number): IPromesse<any>;
        constituerLibelle(codeLibelle: string, valeurs?: string[]): IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Libelle: Libelle.LibelleAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        DonneesDelocalisees = 31
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.DonneesDelocalisees.Messages {
    enum DonneesDelocaliseesMessageSubject {
        GetDonneesDelocalisees = 0,
        GetListeDonneesDelocalisees = 1,
        GetRubriqueLibelle = 2,
        GetDonneesParCriteres = 3,
        ReInitDbDonneesDelocalisees = 4,
        GetTDTById = 5,
        DeleteTDTById = 6
    }
    interface IDonneesDelocaliseesMessageContentGetDonneesDelocalisees extends IDonneesDelocaliseesMessageContent {
        numEtablissement: string;
        objectDataName: string;
    }
    interface IDonneesDelocaliseesMessageContentGetListeDonneesDelocalisees extends IDonneesDelocaliseesMessageContent {
        numEtablissement: string;
        objectDataNames: string[];
    }
    interface IDonneesDelocaliseesMessageContentGetRubriqueLibelle extends IDonneesDelocaliseesMessageContent {
        numEtablissement: string;
        objectDataName: string;
        code: string;
    }
    interface IDonneesDelocaliseesMessageContentGetDonneesParCriteres extends IDonneesDelocaliseesMessageContent {
        numEtablissement: string;
        objectDataName: string;
        criteres: Array<ObjectDataCritere>;
    }
    interface IDonneesDelocaliseesMessageContentReInitDbDonneesDelocalisees extends IDonneesDelocaliseesMessageContent {
    }
    interface IDonneesDelocaliseesMessageContentGetTDTById extends IDonneesDelocaliseesMessageContent {
        idTDT: string;
    }
    interface IDonneesDelocaliseesMessageContentDeleteTDTById extends IDonneesDelocaliseesMessageContent {
        idTDT: string;
    }
    interface IDonneesDelocaliseesMessageContent {
    }
    interface IDonneesDelocaliseesMessage extends Components.IMessage<DonneesDelocaliseesMessageSubject, IDonneesDelocaliseesMessageContent> {
    }
}
/**
* Module de gestion des données délocalisées (module commun aux agents et aux managers)
* @module MyWay.Services.DonneesDelocalisees
* enum : CRITERES_OPERATEUR - public - Enumération correspondant aux différents opérateurs applicables sur un critère
* interface : ObjectDataCritere - public - Description d'un critère de recherche pour un objet de données
*/
declare module MyWay.Services.DonneesDelocalisees {
    /**
    * Enumération correspondant aux différents opérateurs applicables sur un critère
    * @enum DonneesDelocalisees.CRITERES_OPERATEUR
    */
    enum CRITERES_OPERATEUR {
        EGAL = 0,
        CONTIENT = 1
    }
    /**
    * Interface permettant de définir un critère de recherche pour un objet de données
    * @interface DonneesDelocalisees.ObjectDataCritere
    */
    interface ObjectDataCritere {
        /** Propriété pour laquelle un critère doit être appliqué. */
        propriete: string;
        /** Valeur à tester pour le critere donné. */
        valeur: string;
        /** Opérateur à appliquer pour la recherche. */
        operateur: CRITERES_OPERATEUR;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        DonneesDelocalisees: DonneesDelocalisees.IDonneesDelocaliseesAgent;
    }
}
declare module MyWay.Services.DonneesDelocalisees {
    interface IDonneesDelocaliseesAgent {
        getDonneesDelocalisees(numEtablissement: string, objectDataName: string): IPromesse<any>;
        getListeDonneesDelocalisees(numEtablissement: string, objectDataNames: string[]): IPromesse<any[]>;
        getRubriqueLibelle(numEtablissement: string, objectDataName: string, code: string): IPromesse<string>;
        getDonneesParCriteres(numEtablissement: string, objectDataName: string, criteres: Array<ObjectDataCritere>): IPromesse<any>;
    }
}
declare module MyWay.Services.Bug {
}

/**
* Module de gestion des moyens de communication
* @module MyWay.Services.Communication
* @classe CommunicationAgent - public - Classe permettant la gestion des moyens de communication
*/
declare module MyWay.Services.Communication {
    class CommunicationAgent extends Components.ComponentAgentBase<ICommunicationMessage, CommunicationMessageSubject, ICommunicationMessageContent> implements ICommunicationAgent {
        /**
         * Constructeur de la classe CommunicationAgent
         *
         * @param agentLibrary {AgentLibrary} La librairie de construction de l'agent
         * @param errorCallback {ErreurCallback} Action à executer en cas d'erreur lors de la construction de l'agent
         *
         */
        constructor();
        /**
         * Permet d'envoyer un mail
         *
         * @param mail Mail
         *
         */
        envoyerMail(mail: Mail): IPromesse<string>;
        /**
        * Permet de déclencher un appel
        *
        * @param {Call} call    Données de l'appel
        *
        */
        declencherAppel(call: Call): IPromesse<INumerotationTelephoniqueDTO>;
        /**
        * Permet de raccrocher un appel
        *
        */
        raccrocherAppel(): IPromesse<INumerotationTelephoniqueDTO>;
    }
}
declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        Communication: Communication.ICommunicationAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgent {
        Communication: Communication.ICommunicationAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Interop: Interop.InteropAgent;
    }
}
declare module MyWay.Services.Interop {
    class InteropAgent extends Components.ComponentAgentBase<Messages.IInteropMessage, Messages.InteropMessageSubject, Messages.IInteropMessageContent> {
        constructor();
        lireFichier(nomFichier: string): IPromesse<string>;
        ecrireFichier(nomFichier: string, fluxdonnees: string, ajouter: boolean, creeDir: boolean): IPromesse<string>;
        triggerNotifications(): IPromesse<void>;
    }
}

declare module MyWay.Services {
    interface ServiceAgent {
        TraceSuivi: TraceSuivi.TraceSuiviAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        TraceSuivi: TraceSuivi.TraceSuiviAgent;
    }
}
declare module MyWay.Services.TraceSuivi {
    class TraceSuiviAgent extends Components.ComponentAgentBase<Messages.ITraceSuiviMessage, Messages.TraceSuiviMessageSubject, Messages.ITraceSuiviMessageContent> {
        constructor();
        tracer(trace: MyWay.Services.TraceSuivi.TraceSuiviModel): IPromesse<number>;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Capacites: Capacites.CapacitesAgent;
    }
}
declare module MyWay.Services.Capacites {
    class CapacitesAgent extends Components.ComponentAgentBase<Messages.ICapacitesMessage, Messages.CapacitesMessageSubject, Messages.ICapacitesMessageContent> {
        /**
        * Constructeur de la classe CapacitesAgent
        * @param agentLibrary {AgentLibrary}
        * @param errorCallback {ErreurCallback}
        */
        constructor();
        getCapacite(regle: REGLE): IPromesse<boolean>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Capacites: Capacites.CapacitesAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Habilitation = 32
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Habilitation {
    enum HabilitationMessageSubject {
        EstHabilite = 0,
        ChargerHabilitations = 1,
        ObtenirHabilitations = 2,
        ObtenirHabilitation = 3,
        ModifierHabilitation = 4
    }
    interface IHabilitationMessageContentEstHabilite extends IHabilitationMessageContent {
        code: string[];
    }
    interface IHabilitationMessageContentChargerHabilitations extends IHabilitationMessageContent {
    }
    interface IHabilitationMessageContentObtenirHabilitations extends IHabilitationMessageContent {
    }
    interface IHabilitationMessageContentObtenirHabilitation extends IHabilitationMessageContent {
        code: string;
    }
    interface IHabilitationMessageContentModifierHabilitation extends IHabilitationMessageContent {
        code: string;
        valeur: boolean;
    }
    interface IHabilitationMessageContent {
    }
    interface IHabilitationMessage extends Components.IMessage<HabilitationMessageSubject, IHabilitationMessageContent> {
    }
}
/**
* Module de gestion technique des habilitations
*
* @module MyWay.Services.Habilitation
*/
declare module MyWay.Services.Habilitation {
    enum DOMAIN {
        MYSYS,
        IAM,
        CULTURENET
    }
    /**
     * Modèle d'une habilitation
     */
    class HabilitationModel {
        [code: string]: boolean;
        constructor(_code: string, _valeur: boolean);
    }
    enum EHabilitationType {
        MYSYS = 0,
        IAM = 1,
        CULTURENET = 2
    }
    /**
     * DTO du service REST habilitation
     */
    interface IHabilitationsDTO {
        mysys: string[];
        iam: string[];
        cultureNet: string[];
        erreurs: MyWay.Services.Erreur;
        timestamp: any;
    }
    /**
     * DTO du service REST habilitation
     */
    interface IHabilitationsContextDTO {
        codesHabilites: any[];
        codesNonHabilites: any[];
        timestamp: number;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Habilitation: Habilitation.IHabilitationAgent;
    }
}
declare module MyWay.Services.Habilitation {
    interface IHabilitationAgent {
        /**
         * Permet de récupérer une habilitation pour un utilisateur.
         *
         * Cette méthode ne prend qu'un seul code habilitation en paramètre.
         *
         * ~~~ts
         *
         * // Récupération de l'habilitation 'SHOP24' pour l'utilisateur authentifié
         * serviceAget.Habilitation.EstHabilite('SHOP24').then((result: boolean) => {
         * ...
         * }).catch((rreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string}             codeHabilitation
         *
         * Code de la fonction, du processus,... exemple : SHOP24
         *
         * @return {IPromesse<boolean>}
         *
         * Promesse indiquant si oui(true) ou non(false) l'utilisateur est habilité au code habilitation passé en paramètre
         *
         */
        EstHabilite(codeHabilitation: string): IPromesse<boolean>;
        /**
         * Permet de récupérer plusieurs habilitations pour un utilisateur (Méthode à privilégier pour la récupération de plusieurs codes dans un même traitement)
         *
         * ~~~ts
         *
         * // Récupération des habilitations 'SHOP24', 'SHOMW1', 'SHOMW2' pour l'utilisateur authentifié
         * serviceAgent.Habilitation.EstHabilite(['SHOP24','SHOMW1','SHOMW2']).then((result: boolean []) => {
         * ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string[]}             codesHabilitation
         *
         * Codes des fonctions, des processus,... exemple : [‘SHOP24’,’SHOMW1’]
         *
         * @return {IPromesse<boolean[]>}
         *
         * Promesse indiquant si oui(true) ou non(false) l'utilisateur est habilité à chaque code habilitation passé en paramètre
         *
         */
        EstHabilite(codesHabilitation: string[]): IPromesse<boolean[]>;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Aide: Aide.AideAgent;
    }
}
declare module MyWay.Services.Aide {
    interface IAideAgent {
        GetContenuInfobulle(idChamp: string, utilisationHorsProcessus?: boolean, codeProcessusVoulu?: string, codeEtapeVoulu?: string): IPromesse<DetailInfobulleAfficheeResult>;
        GetInfobullesAffichables(utilisationHorsProcessus?: boolean, codeProcessusVoulu?: string, codeEtapeVoulu?: string): IPromesse<InfobulleAfficheeResult[]>;
    }
    /**
    * Classe permettant la gestion de l'aide
    */
    class AideAgent extends Components.ComponentAgentBase<Messages.IAideMessage, Messages.AideMessageSubject, Messages.IAideMessageContent> implements IAideAgent {
        constructor();
        GetContenuInfobulle(idChamp: string, utilisationHorsProcessus?: boolean, codeProcessusVoulu?: string, codeEtapeVoulu?: string): IPromesse<DetailInfobulleAfficheeResult>;
        GetInfobullesAffichables(utilisationHorsProcessus?: boolean, codeProcessusVoulu?: string, codeEtapeVoulu?: string): IPromesse<InfobulleAfficheeResult[]>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Aide: Aide.AideAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Impression: Impression.ImpressionAgent;
    }
}
/**
* Module de gestion des impressions
* @module MyWay.Services.Impression
* classe : ImpressionAgent - public - Classe permettant la gestion impressions
*/
declare module MyWay.Services.Impression {
    /**
    * Classe permettant la gestion des impressions
    * @classe ImpressionAgent
    * @methode generer – public - Permet de lancer la génération d'un document d'impression
    * @methode imprimer – public - Permet de lancer une impression
    * @methode imprimerLot - public - Permet de lancer une impression de document par lot
    * @methode genererImprimer – public - Permet de lancer la génération et l'impression d'un document
    * @methode imprimerEcran – public - Permet de lancer l'impression du navigateur
    */
    class ImpressionAgent extends Components.ComponentAgentBase<Messages.IImpressionMessage, Messages.ImpressionMessageSubject, Messages.IImpressionMessageContent> {
        /**
        * Constructeur de la classe ImpressionAgent
        */
        constructor();
        /**
        * Permet de lancer la génération d'un document d'impression
        * @param data {any} Données à envoyer pour la génération du document d'impression
        * @param generationParams {GenerationParams} Paramètres de génération du document d'impression
        * @return {IPromesse<any>} Renvoie une promesse MyWay
        *
        * ~~~ts
        * var myDocument: Editique.Tests.DocFicheConcours.DocFicheConcours = Editique.Tests.DocFicheConcours.createDocument();
        * var documentGenerationParams: MyWay.Services.Impression.GenerationParams = new Editique.Tests.DocFicheConcours.DocFicheConcoursGenerationParam();
        *
        * serviceAgent.Impression.generer(myDocument, documentGenerationParams)
        *   .then(function (documentGenere: MyWay.Services.Impression.DocumentGenere) {
        *   // Génération OK
        * })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *   // Génération KO: traitement de l'erreur
        * });
        * ~~~
        */
        generer(data: any, generationParams: MyWay.Services.Impression.GenerationParams): IPromesse<any>;
        /**
        * Permet de lancer une impression d'un document
        * @param data {any} Données à envoyer pour l’impression.
        * Si c’est le flux XML et non le PDF qui est passé en paramètre alors le paramètre optionnel parametresGenerationFichier doit obligatoirement être renseigné.
        * @param impressionParams {ImpressionParams} Paramètres d'impression du document
        * @return {IPromesse<any>} Renvoie une promesse MyWay
        *
        * ~~~ts
        * // Impression avec un PDF
        * serviceAgent.Impression.imprimer(myPdf, documentImpressionParams)
        *    .then(function () {
        *       // Impression OK
        *    })
        *    .catch(function (erreur: MyWay.Services.Erreur) {
        * // Impression KO: traitement de l'erreur
        * });
        * // Impression avec un flux XML
        * serviceAgent.Impression.imprimer(myFluxXML, documentImpressionParams)
        *    .then(function () {
        *       // Impression OK
        *    })
        *    .catch(function (erreur: MyWay.Services.Erreur) {
        *      // Impression KO: traitement de l'erreur
        *    });
        * ~~~
        */
        imprimer(data: any, impressionParams: MyWay.Services.Impression.ImpressionParams): IPromesse<any>;
        /**
        * Permet de lancer une impression de document par lot
        * @param data {DocumentImpressionLot[]} Lot de documents à envoyer pour l'impression (uniquement PDF, avec possibilité de les récupérer en GED)
        * @param parametresActiveXGlobaux {ParametresActiveXGlobaux} Paramètres globaux de l'ActiveX d'impression
        * @return {IPromesse<any>} Renvoie une promesse MyWay
        *
        * ~~~ts
        * var data: DocumentImpressionLot[] = [{
        *   numeroOrdre: 0,
        *   idGed: 'ce39fe6d-6e37-4a50-a44e-4222319ff222',
        *   composantApplicatif: 'DOCENTPR',
        *   codeEtablissement: '17515',
        *   impressionParams: {obligatoires: {nomFichier: 'TestGED.pdf'}, optionnels: {parametresActiveXIndividuels: {enregistrer: true,voir: true,nbcopiesdef: 2}}}
        * },{
        *   numeroOrdre: 1,
        *   fichier: 'UN FICHIER EN BASE 64'
        *   impressionParams: {
        *   obligatoires: { nomFichier: 'TestFichier.pdf'},
        *   optionnels: {parametresActiveXIndividuels: {enregistrer: false, voir: true, nbcopiesdef: 1, mincop: 1, maxcop: 2}}}
        * }];
        *
        * var parametresActiveXGlobaux: ParametresActiveXGlobaux = {annul: true, reimp: true, impedef: false};
        *
        * serviceAgent.Impression.imprimerLot(data, parametresActiveXGlobaux)
        *   .then(function () {
        *       // Impression OK
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *        // Impression KO: traitement de l'erreur
        *   });
        * ~~~
        */
        imprimerLot(data: DocumentImpressionLot[], parametresActiveXGlobaux?: MyWay.Services.Impression.ParametresActiveXGlobaux): IPromesse<any>;
        /**
        * Permet de lancer la génération et l'impression d'un document
        * @param data {any} Données à envoyer pour la génération et l'impression d'un document
        * @param generationImpressionParams {GenerationImpressionParams} Paramètres de génération et d'impression d'un document
        * @return {IPromesse<any>} Renvoie une promesse MyWay
        * ~~~ts
        * var myDocument: Editique.Tests.DocFicheConcours.DocFicheConcours = Editique.Tests.DocFicheConcours.createDocument();
        * var documentGenerationImpressionParams: MyWay.Services.Impression.GenerationImpressionParams = new Editique.Tests.DocFicheConcours.DocFicheConcoursGenerationImpressionParam();
        *
        * serviceAgent.Impression.genererImprimer(myDocument, documentGenerationImpressionParams)
        *   .then(function (documentGenere: MyWay.Services.Impression.DocumentGenere) {
        *       // Génération OK
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Génération KO: traitement de l'erreur
        * });
        * ~~~
        */
        genererImprimer(data: any, generationImpressionParams: MyWay.Services.Impression.GenerationImpressionParams): IPromesse<any>;
        /**
         * Permet de récupérer le json converti
         *
         * @param data {any} Données à envoyer pour la génération du document d'impression
         * @return {IPromesse<string>} Le json converti
         */
        getJsonConverti(data: any): IPromesse<string>;
        /**
        * Permet de lancer l'impression du navigateur
        * @return L'imprime écran
        */
        imprimerEcran(): void;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Impression: Impression.ImpressionAgent;
    }
}
declare module MyWay.Services.Bug {
}

/**
* Module de gestion des données délocalisées
* @module MyWay.Services.DonneesDelocalisees
* classe : DonneesDelocaliseesAgent - public - Classe permettant la gestion des données délocalisées
*/
declare module MyWay.Services.DonneesDelocalisees {
    /**
    * Classe permettant la gestion des données délocalisées
    * @classe DonneesDelocaliseesAgent
    * fonction : getDonneesDelocalisees – public - Permet de récupérer des données délocalisées
    * fonction : getRubriqueLibelle - public - Permet de récupérer le libellé du code d'une rubrique
    */
    class DonneesDelocaliseesAgent extends Components.ComponentAgentBase<Messages.IDonneesDelocaliseesMessage, Messages.DonneesDelocaliseesMessageSubject, Messages.IDonneesDelocaliseesMessageContent> implements IDonneesDelocaliseesAgent {
        /**
        * Constructeur de la classe DonneesDelocaliseesAgent
        */
        constructor();
        /**
        * Permet de récupérer un objet de données (rubrique ou table délocalisée) pour l'établissement spécifié.
        * @param numEtablissement {string} identifiant de la Table des tables (numéro d'établissement). Si null, c'est celui du contexte qui est utilisé (via GetAuthentificationInfo).
        * @param objectDataName {string} Nom de l'objet de données à récupérer.
        * @return {IPromesse<any>}
        * Le then est exécuté dans le cas où l'objet de données a bien été récupéré.
        * Il est également exécuté dans le cas où l'objet de données n'a pas pu être récupéré mais qu'il est possible et permis (paramètrage en central) d'utiliser une ancienne version de celui-ci (une trace d'avertissement est alors automatiquement envoyée).
        *
        * ~~~ts
        * // Récupération de la rubrique délocalisée "COLIDV" pour l'établissement 13135
        * serviceAgent.DonneesDelocalisees.getDonneesDelocalisees("13135", "COLIDV")
        *   .then(function (objectData) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        *   // Récupération de la table délocalisée "CARTE" pour l'établissement enregistré dans le contexte
        * serviceAgent.DonneesDelocalisees.getDonneesDelocalisees(null, "CARTE")
        *   .then(function (objectData) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        * ~~~
        */
        getDonneesDelocalisees(numEtablissement: string, objectDataName: string): IPromesse<any>;
        /**
        * Permet de récupérer une liste de données délocalisées (rubriques ou tables délocalisées) pour l'établissement spécifié.
        * @param numEtablissement {string} Numéro d'établissement. Si null, c'est celui du contexte qui est utilisé (via GetAuthentificationInfo).
        * @param objectDataNames {Array<string>} Liste des noms d'objets de données à récupérer.
        * @return {IPromesse<any>}
        * Le then est exécuté dans le cas où l'objet de données a bien été récupéré.
        * Il est également exécuté dans le cas où l'objet de données n'a pas pu être récupéré mais qu'il est possible et permis (paramètrage en central) d'utiliser une ancienne version de celui-ci (une trace d'avertissement est alors automatiquement envoyée).
        *
        * ~~~ts
        * // Récupération de la rubrique délocalisée "COLIDV" et de la table délocalisée "CARTE" pour l'établissement 13135
        * serviceAgent.DonneesDelocalisees.getListeDonneesDelocalisees("13135", ["COLIDV","CARTE"])
        *   .then(function (objectsData: any[]) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        *
        * // Récupération de la rubrique délocalisée "COLIDV"  et de la table délocalisée "CARTE" pour l'établissement enregistré dans le contexte
        * serviceAgent.DonneesDelocalisees.getListeDonneesDelocalisees(null, ["COLIDV","CARTE"])
        *   .then(function (objectsData: any[]) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        * ~~~
        */
        getListeDonneesDelocalisees(numEtablissement: string, objectDataNames: string[]): IPromesse<any[]>;
        /**
        * Permet de récupérer le libellé du code d'un objet de données
        * @param numEtablissement {string} identifiant de la Table des tables (numéro d'établissement). Si null, c'est la valeur du contexte qui est utilisée (via GetAuthentificationInfo).
        * @param objectDataName {string} nom de l'objet de données à récupérer.
        * @param code {string} code pour lequel on veut obtenir le libellé
        * @return {IPromesse<string>}
        *
        * ~~~ts
        * serviceAgent.DonneesDelocalisees.getRubriqueLibelle("18715", "LIDACT", "5")
        *   .then(function (rubriqueLibelle: string) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        * ~~~
        */
        getRubriqueLibelle(numEtablissement: string, objectDataName: string, code: string): IPromesse<string>;
        /**
        * Permet de récupérer les données d'un objet de données correspondant aux critères choisis
        * @param numEtablissement {string} identifiant de la Table des tables (numéro d'établissement). Si null, c'est la valeur du contexte qui est utilisée (via GetAuthentificationInfo).
        * @param objectDataName {string} nom de l'objet de données à récupérer.
        * @param criteres {Array<ObjectDataCritere>} critères de recherche des données
        * @return {IPromesse<any>}
        *
        * ~~~ts
        * // Ce filtre retournera les données qui correspondent aux 2 critères suivant : le critère "CODMPR" doit être égal à "K006" ET le critère "LLKTCT" doit contenir la valeur "NATIONAL"
        * var filtres = [{
        *   critere: "CODMPR", valeur: "K006", operateur: MyWay.Services.DonneesDelocalisees.CRITERES_OPERATEUR.EGAL
        * }, {
        *   critere: "LLKTCT", valeur: "NATIONAL", operateur: MyWay.Services.DonneesDelocalisees.CRITERES_OPERATEUR.CONTIENT
        * }]
        *
        * serviceAgent.DonneesDelocalisees.getDonneesParCriteres("13135", "CARTES", filtres)
        *   .then(function (objectData) {
        *       // Traitement
        *   })
        *   .catch(function (erreur: MyWay.Services.Erreur) {
        *       // Traitement en cas d'erreur
        *   });
        * ~~~
        */
        getDonneesParCriteres(numEtablissement: string, objectDataName: string, criteres: Array<ObjectDataCritere>): IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        DonneesDelocalisees: DonneesDelocalisees.IDonneesDelocaliseesAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgentExtended {
        getDonneesDelocalisees: (numEtablissement: string, objectDataName: string) => ng.IPromise<any>;
        getListDonneesDelocalisees: <T>(objectDataName: string, resultType?: string) => ng.IPromise<T[]>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        DonneesDelocalisees: DonneesDelocalisees.IDonneesDelocaliseesAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Numerisation = 33
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Acquisition
*/
declare module MyWay.Services.Numerisation {
    enum NumerisationMessageSubject {
        Numeriser = 0,
        GetSpiFactoryActivationStatut = 1,
        NumeriserArcade = 2
    }
    interface INumerisationMessageContentNumeriser extends INumerisationMessageContent {
        data: any;
        numerisationParams: NumerisationParams;
    }
    interface INumerisationMessageContentGetSpiFactoryActivationStatut extends INumerisationMessageContent {
    }
    interface INumerisationMessageContentNumeriserArcade extends INumerisationMessageContent {
        data: any;
        numerisationParams: any;
    }
    interface INumerisationMessageContent {
    }
    interface INumerisationMessage extends Components.IMessage<NumerisationMessageSubject, INumerisationMessageContent> {
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Numerisation
* interface : NumerisationParams - public - Interface permettant de définir les paramètres de numérisation d'un document
*/
declare module MyWay.Services.Numerisation {
    /**
    * Interface permettant de définir les données nécessaires à la numérisation d'un document
    * @interface Numerisation.NumerisationData
    */
    interface NumerisationData {
        CCLI_TYP: any;
        CCLI_UTL: any;
        NATURE: any;
        data: string;
    }
    /**
    * Interface permettant de définir les données nécessaires à la numérisation d'un document avec SpiFactory Arcade
    * @interface Numerisation.NumerisationDataArcade
    */
    interface NumerisationDataArcade {
        D93F: any;
        D93G: any;
        D93J: any;
        D93K: any;
        D93M: any;
        D93T: any;
        D93V: any;
        D93Y: any;
        data: string;
    }
    /**
    * Interface permettant de définir les paramètres nécessaires à la numérisation d'un document
    * @interface Numerisation.NumerisationParams
    */
    interface NumerisationParams {
        dropZonePath: string;
        configurationFilePath: string;
    }
}
declare module MyWay.Services.Bug {
}

/**
* Module de gestion des habilitations
* @module MyWay.Services.Habilitation
* classe : HabilitationAgent - public - Classe permettant la gestion des habilitations
*/
declare module MyWay.Services.Habilitation {
    /**
    * Classe permettant la gestion des habilitations
    */
    class HabilitationAgent extends Components.ComponentAgentBase<IHabilitationMessage, HabilitationMessageSubject, IHabilitationMessageContent> implements IHabilitationAgent {
        /**
         * Constructeur de la classe HabilitationAgent
         */
        constructor();
        /**
         * Permet de récupérer une habilitation pour un utilisateur.
         *
         * Cette méthode ne prend qu'un seul code habilitation en paramètre.
         *
         * ~~~ts
         *
         * // Récupération de l'habilitation 'SHOP24' pour l'utilisateur authentifié
         * serviceAget.Habilitation.EstHabilite('SHOP24').then((result: boolean) => {
         * ...
         * }).catch((rreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string}             codeHabilitation
         *
         * Code de la fonction, du processus,... exemple : SHOP24
         *
         * @return {IPromesse<boolean>}
         *
         * Promesse indiquant si oui(true) ou non(false) l'utilisateur est habilité au code habilitation passé en paramètre
         *
         */
        EstHabilite(codeHabilitation: string): IPromesse<boolean>;
        /**
         * Permet de récupérer plusieurs habilitations pour un utilisateur (Méthode à privilégier pour la récupération de plusieurs codes dans un même traitement)
         *
         * ~~~ts
         *
         * // Récupération des habilitations 'SHOP24', 'SHOMW1', 'SHOMW2' pour l'utilisateur authentifié
         * serviceAgent.Habilitation.EstHabilite(['SHOP24','SHOMW1','SHOMW2']).then((result: boolean []) => {
         * ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string[]}             codesHabilitation
         *
         * Codes des fonctions, des processus,... exemple : [‘SHOP24’,’SHOMW1’]
         *
         * @return {IPromesse<boolean[]>}
         *
         * Promesse indiquant si oui(true) ou non(false) l'utilisateur est habilité à chaque code habilitation passé en paramètre
         *
         */
        EstHabilite(codesHabilitation: string[]): IPromesse<boolean[]>;
    }
}
declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        Habilitation: Habilitation.IHabilitationAgent;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    interface ServiceAgent {
        Habilitation: Habilitation.IHabilitationAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Lisa {
    class LisaCallbackResult {
        processId: string;
        codeProcessus: string;
        codeEtape: string;
        finDeProcessus: boolean;
        sousProcessusDemarre: string;
        etapeCourante: Context.IProcessStep;
        retourEtapePrecedente: boolean;
        nouvelleIframe: boolean;
    }
    interface IInitialisationData {
        /**
         * Données de contexte à insérer dans un processus sous forme d'objet: ex: {"idPersonne":"1234"}
         */
        context?: any;
        /**
         * Données de contexte à insérer dans un processus sous forme de tableau clé valeur ex: [{"Key":"idPersonne", "Value":"1234"}]
         */
        contextArray?: MyWay.Services.Context.IContextKeyValuePair[];
        /**
         * Nom a utiliser pour l'affichage du processus dans le navigateur
         */
        displayName?: string;
        /**
         * id du client pour rattachement de ce processus au contexte client
         */
        idClient?: string;
        /**
         * id du contexte client pour rattachement de ce processus au contexte client
         */
        idContexteClient?: string;
        /**
         * (Technique) Sous-processus à démarrer immédiatement après le démarrage du processus
         */
        subProcessCode?: string;
        /**
         * (Technique) Permet d'indiquer que le processus doit démarrer dans une nouvelle instance
         */
        processusAOuvrirDansUneNouvelleInstance?: boolean;
    }
    interface IInfoEtape {
        codeTechnique: string;
        codeMetier: string;
    }
    interface IInfoProcessus {
        dateExport: string;
        codeProcessus: string;
        identifiantAgent: string;
        nomProcessus: string;
        etapes: IInfoEtape[];
    }
    interface IAddOns {
        nextsSubProcess: IAddOnsNextSubProcess[];
    }
    interface IAddOnsNextSubProcess {
        codeEtape: string;
        valeurSortie: number;
        valeurDepartSousProcessus: number;
        actionsFinSousProcessus: IAddOnsActionFinProcess[];
    }
    interface IAddOnsActionFinProcess {
        ValeurSortie: number;
        EstExterne: boolean;
        NomExterne: string;
        ValeursFinProcessPossibles: number[];
    }
}
declare module MyWay.Services.Components {
    enum ComponentType {
        Lisa = 34
    }
}
/**
* Module de gestion de la numérisation (module commun aux agents et aux managers)
* @module MyWay.Services.Lisa
*/
declare module MyWay.Services.Lisa.Messages {
    enum LisaMessageSubject {
        Next = 0,
        StartProcess = 1,
        StartSubProcess = 2,
        StartExternalApp = 3,
        GetProcesses = 4,
        GetTools = 5,
        GetCodesProcessus = 6,
        GetInfoProcessus = 7
    }
    interface ILisaMessageContentNext extends ILisaMessageContent {
        valeurSortie: number;
    }
    interface ILisaMessageContentStartProcess extends ILisaMessageContent {
        processCode: string;
        valeurDepart?: number;
        initData: IInitialisationData;
    }
    interface ILisaMessageContentStartSubProcess extends ILisaMessageContent {
        processCode: string;
        valeurDepart?: number;
    }
    interface ILisaMessageContentStartExternalApp extends ILisaMessageContent {
        name: string;
        url: string;
        standAlone: boolean;
    }
    interface ILisaMessageContentGetProcesses extends ILisaMessageContent {
    }
    interface ILisaMessageContentGetTools extends ILisaMessageContent {
    }
    interface ILisaMessageContentGetCodesProcessus extends ILisaMessageContent {
    }
    interface ILisaMessageContentGetInfoProcessus extends ILisaMessageContent {
        codeProcessus: string;
    }
    interface ILisaMessageContent {
    }
    interface ILisaMessage extends Components.IMessage<LisaMessageSubject, ILisaMessageContent> {
    }
}
declare module MyWay.Services.Lisa {
    class ResultBase {
        ProchaineEtape: EtapeResult;
        ProcessDemarre: ProcessResult;
        Init(data: any): void;
    }
    class NextResult extends ResultBase {
        CodeEtape: string;
        ValeurSortie: number;
        FinProcess: boolean;
        ValeurFinProcess: number;
        constructor(nextData: any);
    }
    class StartResult extends ResultBase {
        CodeProcessus: string;
        VersionExport: string;
        constructor(startData: any);
    }
    class ProcessResult {
        Code: string;
        ValeurDepart: number;
        Nom: string;
        EtapesConnues: string[];
        CodeEtape: string;
        OptionsProcess: string;
        OptionsProcessAsEtape: string;
        Actions: ActionResult[];
        constructor(processData: any);
    }
    class EtapeResult {
        TypeApplication: string;
        ValeurEntree: number;
        CodeApplication: string;
        NomApplication: string;
        CodeEtape: string;
        CodeMetier: string;
        Icone: string;
        LocalisationAbsolue: string;
        LocalisationRelative: string;
        Contrats: ContratResult[];
        Actions: ActionResult[];
        OptionsEtape: string;
        OptionsPointEntree: string;
        constructor(etapeData: any);
    }
    class ContratResult {
        Code: string;
        Type: string;
        Longueur: number;
        Nullable: boolean;
        Mode: string;
        OptionsContrat: string;
        constructor(contratData: any);
    }
    class ActionResult {
        ValeurSortie: number;
        EstExterne: boolean;
        NomExterne: string;
        OptionsAction: string;
        ValeursFinProcessPossibles: number[];
        constructor(actionData: any);
    }
    class ApplicationResult {
        Nom: string;
        Icone: string;
        Url: string;
        constructor(Nom: string, Icone: string, Url: string);
    }
}
declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Lisa: Lisa.ILisaAgent;
    }
}
declare module MyWay.Services.Lisa {
    interface ILisaAgent {
        Next(valeurSortie: number): IPromesse<LisaCallbackResult>;
        NextWithStep(stepCode: string, valeurSortie: number): IPromesse<any>;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services.Lisa {
    interface IRouteurAgent {
        StepInfo: Context.StepInfo;
        Next: (valeurSortie: number) => void;
        AddToContext: (key: string, value: string) => void;
        GetFromContext: (key: string) => string;
        LireFichier: (nomFichier: string) => IPromesse<string>;
        Previous: () => void;
    }
}
declare module MyWay.Services.Bug {
}
declare module MyWay.Services {
    import IRouteurAgent = MyWay.Services.Lisa.IRouteurAgent;
    class RouteurAgent implements IRouteurAgent {
        private static CLASS_NAME;
        private static logger;
        private static implementation;
        static setImplementation(implementation: IRouteurAgent): void;
        constructor();
        StepInfo: Context.StepInfo;
        Next(valeurSortie: any): void;
        AddToContext(key: string, value: string): void;
        GetFromContext(key: string): string;
        LireFichier(nomFichier: string): IPromesse<string>;
        Previous(): void;
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Numerisation: Numerisation.NumerisationAgent;
    }
}
/**
* Module de gestion de la numérisation
* @module MyWay.Services.Numerisation
* classe : NumerisationAgent - public - Classe permettant la gestion de la numérisation
*/
declare module MyWay.Services.Numerisation {
    /**
    * Classe permettant la gestion de la numérisation
    * @classe NumérisationAgent
    * fonction : numeriser – public - Permet de numériser un document
    * fonction : getSpiFactoryActivationStatut – public - Permet de savoir si le jeton d'activation SpiFactory est présent sur le serveur d'agence
    * fonction : numeriserArcade – public - Permet de numériser un document avec Spifactory Arcade
    */
    class NumerisationAgent extends Components.ComponentAgentBase<INumerisationMessage, NumerisationMessageSubject, INumerisationMessageContent> {
        private static CLASS_NAME;
        private static logger;
        /**
        * Constructeur de la classe NumerisationAgent
        */
        constructor();
        /**
        * Permet de numeriser via SpiFactory (fonctionne uniquement sur les postes agences).
        *
        * ~~~ts
        * serviceAgent.Numerisation.numeriser(documentData, documentParams)
        *    .then(() => {
        *       // Numérisation OK
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Numérisation KO: traitement de l'erreur
        * });
        * ~~~
        * @param data {any} données à envoyer pour la numérisation (xml sérializé)
        * @param numerisationParams {NumerisationParams} paramètres de numérisation du document
        * @return {IPromesse<any>}
        */
        numeriser(data: any, numerisationParams: MyWay.Services.Numerisation.NumerisationParams): IPromesse<any>;
        /**
        * Permet de lancer une numérisation avec Spifactory Arcade  (fonctionne uniquement sur les postes agences).
        *
        * ~~~ts
        * serviceAgent.Numerisation.numeriserArcade(documentData, null)
        *    .then(() => {
        *       // Numérisation Arcade OK
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Numérisation Arcade KO: traitement de l'erreur
        * });
        * ~~~
        * @param data {any} données à envoyer pour la numérisation (xml sérializé)
        * @param numerisationParams {any} paramètres de numérisation du document
        * @return {IPromesse<any>}
        */
        numeriserArcade(data: any, numerisationParams: any): IPromesse<any>;
        /**
        * Permet de savoir si le jeton d'activation SpiFactory est présent sur le serveur d'agence
        *
        * ~~~ts
        * serviceAgent.Numerisation.getSpiFactoryActivationStatut()
        *    .then((jetonSpiFactory) => {
        *       // Traitement
        *    }).catch((erreur: MyWay.Services.Erreur) => {
        *       // Traitement en cas d'erreur
        * });
        * ~~~
        *
        * @param callback {function} action à executer une fois le statut d'activation récupéré
        * @param callbackError {function} action à executer en cas d'erreur
        * @return {IPromesse<any>}
        */
        getSpiFactoryActivationStatut(): IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Numerisation: Numerisation.NumerisationAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface IServiceAgentInitialisation {
    }
    interface IServiceAgent {
        Lisa: Lisa.ILisaAgent;
    }
}
declare module MyWay.Services.Bug {
}
/**
* Module de gestion des enchainements entre les applications
* @module MyWay.Services.Lisa
*/
declare module MyWay.Services.Lisa {
    class LisaAgent extends Components.ComponentAgentBase<Messages.ILisaMessage, Messages.LisaMessageSubject, Messages.ILisaMessageContent> implements ILisaAgent {
        StepCode: string;
        constructor();
        init(pAgentLibrary: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        /**
        * Permet de réaliser un enchainement vers l'étape suivante du processus.
        * A la fin de l'enchainement, si l'application suivante est une autre application que l'application courante, celle-ci est détruite.
        * La promesse retournée par la méthode ne doit être utilisée uniquement que pour des tests unitaires.
        * @param {number} valeurSortie la valeur de sortie de l'application
        * @return {IPromesse<LisaCallbackResult>}
        *
        * ~~~ts
        * // Démarrage de l'application AC1
        * serviceAgent.Lisa.Next(1).then((result: LisaCallbackResult) => {
        * ...
        * }).catch((erreur: MyWay.Services.Erreur) => {
        * ...
        * });
        * ~~~
        *
        */
        Next(valeurSortie: number): IPromesse<LisaCallbackResult>;
        NextWithStep(stepCode: string, valeurSortie: number): IPromesse<LisaCallbackResult>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Lisa: Lisa.ILisaAgent;
    }
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services.Components {
    enum ComponentType {
        Application = 35
    }
}
declare module MyWay.Services.Application.Messages {
    enum ApplicationMessageSubject {
        Demarrer = 0,
        DemarrerProcessus = 1
    }
    interface IApplicationMessageContentDemarrer extends IApplicationMessageContent {
        codeApplication: string;
    }
    interface IApplicationMessageContentDemarrerProcessus extends IApplicationMessageContent {
        codeProcessus: string;
        valeurDepart: string;
        initData: Lisa.IInitialisationData;
        delegationPortail: boolean;
    }
    interface IApplicationMessageContent {
    }
    interface IApplicationMessage extends Components.IMessage<ApplicationMessageSubject, IApplicationMessageContent> {
    }
}

declare module MyWay.Services.Components {
    interface ILibraryAgent {
        Application: Application.ApplicationAgent;
    }
}
/**
* Module de gestion des applications
* @module MyWay.Services.Application
*/
declare module MyWay.Services.Application {
    /**
    * Classe permettant la gestion des applications
    */
    class ApplicationAgent extends Components.ComponentAgentBase<Messages.IApplicationMessage, Messages.ApplicationMessageSubject, Messages.IApplicationMessageContent> {
        /**
         * Constructeur de la classe ApplicationAgent
         */
        constructor();
        /**
         * Permet de démarrer une application à partir d'un code application.
         *
         * ~~~ts
         * // Démarrage de l'application AC1
         * serviceAgent.Application.Demarrer('AC1').then((result: boolean) => {
         * ...
         * }).catch((erreur: MyWay.Services.Erreur) => {
         * ...
         * });
         * ~~~
         *
         * @param  {string}             codeApplication
         * Correspond au code de l'application
         *
         * @return {IPromesse<boolean>}
         * Promesse indiquant si oui(true) ou non(false) l'application a correctement démarrée sinon retourne une **erreur**
         *
         * #### Listes des erreurs
         * | codeLibelle                               | libelle                                                        |
         * | ----------------------------------------- |:-------------------------------------------------------------- |
         * | ERREUR_APPLICATION_TYPE_INCONNU           | Le type de l'application n'est pas pris en charge              |
         * | ERREUR_APPLICATION_DEMARRAGE_IMPOSSIBLE   | L'application n'a pas pu être démarrée                         |
         * | ERREUR_APPLICATION_CODE_NON_RENSEIGNE     | Le code de l'application n'est pas renseigné                   |
         * | ERREUR_APPLICATION_MAINTENANCE            | L'application est indisponible temporairement pour maintenance |

         */
        Demarrer(codeApplication: string): IPromesse<boolean>;
        /**  Démarrage du processus SYNTH_CLI
        * serviceManager.Application.DemarrerProcessus('SYNTH_CLI',true,{"idClient":"1111111111","context": {"identifiantPersonne": "11111111111"},"valeurEntree":"1"}).then((result: boolean) => {
        * ...
        * }).catch((erreur: MyWay.Services.Erreur) => {
        * ...
        * });
         * ~~~
        *
        *
         * @param {string} codeProcessus Le code de référence de l'Application
         * @param {string} initData Données de contexte passées pour lancer un processus
         * @param {string} valeurDepart Valeur LISA d'entrée dans le processus
         * @param {boolean} delegationPortail Indicateur pour savoir si on délègue le lancement du processus au portail (MyWay ou PCM)
         * Correspond au code de l'application
         *
         * @return {IPromesse<boolean>}
         * Promesse indiquant si oui(true) ou non(false) l'application a correctement démarrée sinon retourne une **erreur**
         *
         * #### Listes des erreurs
         * | codeLibelle                               | libelle                                                        |
         * | ----------------------------------------- |:-------------------------------------------------------------- |
         * | ERREUR_APPLICATION_TYPE_INCONNU           | Le type de l'application n'est pas pris en charge              |
         * | ERREUR_APPLICATION_DEMARRAGE_IMPOSSIBLE   | L'application n'a pas pu être démarrée                         |
         * | ERREUR_APPLICATION_CODE_NON_RENSEIGNE     | Le code de l'application n'est pas renseigné                   |
         * | ERREUR_APPLICATION_MAINTENANCE            | L'application est indisponible temporairement pour maintenance |

         */
        DemarrerProcessus(codeProcessus: string, delegationPortail: boolean, initData: Lisa.IInitialisationData, valeurDepart?: string): IPromesse<boolean>;
    }
}
declare module MyWay.Services {
    interface ServiceAgent {
        Application: Application.ApplicationAgent;
    }
}
declare module MyWay.Services.Bug {
}

