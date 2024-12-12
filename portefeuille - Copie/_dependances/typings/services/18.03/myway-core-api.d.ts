
declare module myway.core {
    var app: ng.IModule;
}

declare module myway.core {
    abstract class ContextKeys {
        /**
         * Indicateur de présence du portail myway (si la valeur vaut 1)
         */
        static PORTAIL_MYWAY: string;
        /**
         * Type de portail.
         * Valeurs possibles:
         * - MYWAY
         */
        static TYPE_PORTAIL: string;
    }
    const enum TypePortailEnum {
        MYWAY = 1,
        PCM = 2,
    }
    interface IInfosCaisses {
        sigle: string;
    }
    abstract class ConstantesSiglesCaisses {
        static TOKEN: string;
        static SIGLES_CAISSES: {
            [codeEtablissement: string]: IInfosCaisses;
        };
    }
}

declare module myway.core {
    /**
     * Configuration du fichier CSV (utilisé par le service mwCsvService).
     */
    interface ICsvOptions {
        /**
         * Use this characters to "escape" fields, otherwise will use double quotes as deafult
         */
        txtDelimiter?: string;
        /**
         * Defines the decimal separator character (default is ,). If set to "locale", it uses the language sensitive representation of the number.
         */
        decimalSeparator?: string;
        /**
         * Will force escaping of every string field. (it should always true)
         */
        quoteStrings?: boolean;
        /**
         * Add the Byte Order Mark, use this option if you are getting an unexpected char when opening the file on any windows App (default is true).
         */
        addByteOrderMarker?: boolean;
        /**
         * Defines the field separator character (default is ;)
         */
        fieldSeparator?: any;
        /**
         * charset encoding
         */
        charset?: string;
        /**
         * output filename (default is export.csv)
         */
        filename?: string;
        /**
         * Defines whether or not using keys as csv column value (default is false).
         */
        label?: boolean;
        /**
         * If provided, would use this attribute to create a header row. This property should be used along with columnOrder because natural order can eventually change.
         */
        header?: string[];
        /**
         * Defines the column order to be set when creating the body of the CSV (may be according to the csv-headers).
         * It can also be used to filter properties in csv.
         */
        columnOrder?: any;
    }
}

declare module myway.core {
    /**
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    class CsvService {
        private $q;
        private $parse;
        private $window;
        private $document;
        private $timeout;
        static EOL: string;
        static BOM: string;
        static SPECIAL_CHARS: {
            [index: string]: string;
        };
        static DEFAULT_OPTIONS: ICsvOptions;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $window: ng.IWindowService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService);
        /**
         * Création et téléchargement d'un fichier csv à partir du tableau passé en paramètre.
         * Le tableau doit être un objet simple sans sous-objets puisque ces derniers ne sont pas gérés.
         * Les options sont toutes détaillées dans l'interface dédiée.
         *
         * #Configuration
         * La configuration fonctionne par surcharge, il faut donc indiquer ce qui diffère de la configuration par défaut.
         * <pre class="prettyprint">
         *   header: [ "Nom", "Prénom", "Age" ],
         *   columnOrder: ["nom", "prenom", "age" ],
         *   filename: "personnes.csv"
         * </pre>
         *
         * ##Configuration par défaut du fichier csv:
         * <pre class="prettyprint">
         *   txtDelimiter: "\"",
         *   decimalSeparator: ",",
         *   quoteStrings: true,
         *   addByteOrderMarker: true,
         *   fieldSeparator: ";",
         *   charset: "utf-8",
         *   label: false,
         *   filename: "export.csv"
         * </pre>
         * @param data Tableau de données
         * @param options Configuration du fichier csv
         * @returns Promesse résolue lorsque le téléchargement est lancé ou rejetée en cas d'erreur.
         */
        downloadCsv(data: any[], options?: ICsvOptions): ng.IPromise<any>;
        /**
         * Get options
         */
        private getOptions(options?);
        /**
         * Creates a csv from a data array
         */
        private stringify(data, options?);
        /**
         * Helper function to check if input is really a special character
         */
        isSpecialChar(input: string): boolean;
        /**
         * Helper function to get what the special character was supposed to be since Angular escapes the first backslash
         */
        getSpecialChar(input: string): string;
        /**
         * Stringify one field
         */
        private stringifyField(data, options);
    }
}

declare module myway.core {
    interface IInfosMobilite {
        /**
         * Type de réseau
         */
        typeReseau: fwkTech.Services.Mobilite.TYPE_RESEAU;
        /**
         * Ecran compatible myway
         */
        ecranCompatibleMyway: boolean;
        /**
         * Informations sur le device de l'utilisteur
         */
        infoMachine: fwkTech.Services.Mobilite.IInfoMachine;
        /**
         * Plateforme du device
         */
        plateforme?: IPlateforme;
        /**
         * Liste des plateformes supportées
         */
        plateformes: IPlateforme[];
    }
}

declare module myway.core {
    class ModaleErreurControleur {
        $modale: ng.ui.bootstrap.IModalServiceInstance;
        infos: IErreurModale;
        static $inject: string[];
        constructor($modale: ng.ui.bootstrap.IModalServiceInstance, infos: IErreurModale);
        fermer(): void;
    }
}

declare module myway.core {
    const enum ErreurCodeEnum {
        ERREUR_TECHNIQUE = 0,
        PAS_DE_GUICHET_DANS_PREFERENCE_UTILISATEUR = 1,
        DONNEES_AUTHENTIFICATION_INCOMPLETES = 2,
        AUCUN_POSTE_FONCTIONNEL = 3,
        PLUSIEURS_POSTES_FONCTIONNELS = 4,
        PAS_DE_CLIENT = 5,
        CONTEXTE_CLIENT_VIDE_OU_ILLISIBLE = 6,
    }
    class ErreurMyway {
        message: string;
        details: any;
        /**
         * Code d'erreur optionnel
         */
        code: ErreurCodeEnum;
        constructor(message: string);
        constructor(message: string, code: ErreurCodeEnum);
        constructor(message: string, details: string | Object);
        constructor(message: string, details: string | Object, code: ErreurCodeEnum);
    }
    interface IErreurModale {
        title?: string;
        bodyText?: string;
        erreur?: any;
        bouton?: IErreurBoutonModale;
        icone?: string;
        size?: string;
        /**
         * Ferme le navigateur sur le bouton fermer de la modale.
         */
        exitOnClose?: boolean;
        /**
         * Masque le bouton dans la modale.
         */
        hideButton?: boolean;
    }
    interface IErreurBoutonModale {
        text?: string;
        onClose?: () => void;
    }
}

declare module myway.core {
    class ErreurService {
        private $q;
        private $window;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, modalService: MyWay.UI.IModalService);
        /**
         * Affiche une modale d'erreur.
         * L'erreur est analysée pour afficher le message le plus pertinent.
         * Présence d'un bouton rafraichir en option et actif par défaut.
         */
        afficherErreur(erreur: any, refreshButton?: boolean): void;
        /**
         * Affiche une modale d'erreur
         */
        afficherModaleErreur(infos: IErreurModale): void;
        /**
         * Affiche une modale d'information
         */
        afficherModaleInformation(infos: IErreurModale): ng.IPromise<void>;
        /**
         * Affiche une modale d'erreur avec un bouton qui permet de rafraichir la page
         */
        afficherModaleErreurWithRefreshButton(infos: IErreurModale): void;
        /**
         * Affiche une modale d'erreur avec un bouton qui permet de quitter le navigateur
         * FIXME: ne fonctionne pas, car il n'est plus possible de fermer le navigateur en javascript
         */
        afficherModaleErreurWithQuitButton(infos: IErreurModale): void;
        /**
         * Renvoie une structure contenant les détails de l'erreur.
         */
        getInfosErreur(erreur: any): IErreurModale;
        private decodeServiceErreur(infos, erreur);
        private decodeErreurPortail(infos, erreur);
    }
}

declare module myway.core {
    class LoaderService {
        private $q;
        private $templateCache;
        private $compile;
        private $document;
        private loaderElement;
        private backgroundElement;
        static $inject: string[];
        constructor($q: ng.IQService, $templateCache: ng.ITemplateCacheService, $compile: ng.ICompileService, $document: ng.IDocumentService);
        /**
         * Active le loader et affiche un spinner.
         * @param background Indicateur de présence d'un background pour bloquer l'IHM (false par défaut)
         */
        start(background?: boolean): void;
        /**
         * Désactive le loader.
         */
        stop(): void;
        /**
         * Ajoute un background en dessous du spinner pour bloquer l'IHM.
         */
        private addBackground();
    }
}

declare module myway.core {
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 0,
        WARNING = 1,
        INFO = 2,
        TRACE = 3,
        ALL = 10,
    }
    /**
     * Service lié aux loggers
     */
    class LoggerService {
        private traceService;
        protected logLevel: LoggerLevel;
        protected bufferCapacity: number;
        protected consolePrefix: string;
        protected frameworkAppender: boolean;
        protected consoleAppender: boolean;
        private buffer;
        constructor(traceService: TraceService, logLevel: LoggerLevel, bufferCapacity: number, consolePrefix: string, frameworkAppender: boolean, consoleAppender: boolean);
        trace(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        /**
         * Vide le buffer dans la console.
         */
        flush(): void;
        private log(func, funcFwk, flushMode, level, message, args?);
        private handleBuffer(func, flushMode, level, message, args?);
    }
    class LoggerServiceProvider implements ng.IServiceProvider {
        private level;
        private bufferCapacity;
        private consolePrefix;
        /**
         * Active les traces du framework
         */
        private frameworkAppender;
        /**
         * Active la console du navigateur
         */
        private consoleAppender;
        constructor();
        $get(traceService: TraceService): LoggerService;
        /**
         * Définit le niveau du logger
         */
        setLoggerLevel(level: LoggerLevel): void;
        /**
         * Préfixe du message dans la console, ce qui permet de les regrouper par un filtre.
         */
        setConsolePrefix(consolePrefix: string): void;
        /**
         * Capacité du buffer (en nombre de lignes).
         * Toute instruction console correspond à une entrée dans le buffer.
         * Le buffer fonctionne comme une file.
         *
         * Ce buffer peut ensuite être utilisé pour restituer la console à tout moment
         * puisqu'elle est désactivée par défaut sur IE tant que le debugger tools est fermé
         */
        setBufferCapacity(buffer: number): void;
        /**
         * Définit l'activation des traces du framework
         */
        setAppenderFramework(frameworkAppender: boolean): void;
        /**
         * Définit l'activation des traces de la console
         */
        setAppenderConsole(consoleAppender: boolean): void;
    }
}

declare module myway.core {
    abstract class EdsUtils {
        static getIdentifiantPersonne(id: string | number): string;
        static getIdentifiantEDS(id: number | string): string;
        static isValidIdentifiantEDS(id: string): boolean;
        static getTypeEDS(type: number | string): string;
    }
}

declare module myway.core {
    abstract class NumberUtils {
        /**
         * Renvoie un number (integer) à partir d'un string, ou undefined si la string est null, vide, ou undefined.
         */
        static parseInt(value: string): number;
        /**
         * Helper function to check if input is float
         */
        static isFloat(input: any): boolean;
    }
}

declare module myway.core {
    abstract class RibUtils {
        static format(rib: string): string;
    }
}

declare module myway.core {
    abstract class StringUtils {
        /**
         * Décode une string en provenant d'un service REST.
         * Si elle est null ou a pour valeur "null", une chaine vide sera renvoyée
         */
        static decodeRestString(value: string): string;
    }
}

declare module myway.core {
    abstract class Utils {
        /**
         * Indique si le portail est exécuté dans en environnement standard.
         */
        static isEnvironnementStandard(): boolean;
        /**
         * Crée un objet à partir de son prototype et recopie ses propriétés.
         * Cette méthode permet de recréer un objet récupéré du contexte ou d'un postMessage.
         * @param func Fonction du prototype (Class)
         * @param object
         */
        static fromPrototype(func: any, object: any): any;
        static getStrDateHeureCourante(): string;
    }
}

declare module myway.core {
    /**
     * Wrapper du serviceManager (Portail myway) et du techAgent (SPAs).
     *
     * Ce service existe parce que les déclarations Typescript ne sont pas compatibles entre les différents frameworks, et aussi à cause des variations dans les APIs disponibles.
     * Il s'appuie sur un typage légèrement modifié et surtout basé sur une version précise du framework (17.10).
     * C'est donc clairement du bricolage temporaire, puisque le framework devrait être unifié dans une version 18.xx.
     *
     * Toutes ces méthodes utilisent les promesses Angular, qui exécutent donc un cycle $digest lors de la résolution.
     */
    abstract class FrameworkService {
        private $injector;
        protected serviceAgent: fwkTech.Services.TechAgentExtended;
        protected techAgent: fwkTech.Services.TechAgentExtended;
        protected phantomAgent: fwkManager.Services.ServiceManagerExtended;
        protected NON_GEREE: string;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService);
        private initPhantomAgent();
        private initTechAgent();
        private initServiceAgent();
    }
}

declare module myway.core {
    /**
     * Wrapper du serviceManager (Portail myway) et du techAgent (SPAs).
     *
     * Ce service existe parce que les déclarations Typescript ne sont pas compatibles entre les différents frameworks, et aussi à cause des variations dans les APIs disponibles.
     * Il s'appuie sur un typage légèrement modifié et surtout basé sur une version précise du framework (17.10).
     * C'est donc clairement du bricolage temporaire, puisque le framework devrait être unifié dans une version 18.xx.
     *
     * Toutes ces méthodes utilisent les promesses Angular, qui exécutent donc un cycle $digest lors de la résolution.
     */
    class AgentService extends FrameworkService {
        private commonService;
        private contexteService;
        private habilitationService;
        private mobiliteService;
        private processusService;
        private traceService;
        private mailService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, commonService: CommonService, contexteService: ContexteService, habilitationService: HabilitationService, mobiliteService: MobiliteService, processusService: ProcessusService, traceService: TraceService, mailService: MailService);
        init(serviceInit: fwkManager.Services.IServiceManagerInitialisation): ng.IPromise<fwkManager.Services.Context.IPortalContext>;
        init(serviceInit: fwkTech.Services.IServiceAgentInitialisation): ng.IPromise<any>;
        initialize(): ng.IPromise<any>;
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        setAuthentificationInfo(value: fwkManager.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        getParametresComptables(): ng.IPromise<fwkManager.Services.Context.ParametresComptables>;
        setParametresComptables(value: fwkManager.Services.Context.ParametresComptables): ng.IPromise<void>;
        getDonneesDelocalisees<T>(objectDataName: string): ng.IPromise<MyWay.TableDeloc.Donnees<T>>;
        chargerHabilitations(): ng.IPromise<any>;
        estHabilite(code: string): ng.IPromise<boolean>;
        estHabilite(codes: string[]): ng.IPromise<boolean[]>;
        /**
         * Ajoute ou modifie une habilitation
         * @param code Le code de l'habilitation à insérer / modifier
         * @param valeur La valeur true/false de l'habilitation
         */
        modifierHabilitation(code: string, valeur: boolean): ng.IPromise<any>;
        /**
         * Renvoie un objet avec les codes habilitations et leurs valeurs respectives.
         * @param codes Codes habilitations
         */
        estHabiliteKV(codes: string[]): ng.IPromise<{
            [code: string]: boolean;
        }>;
        sendRequest<T>(settings: fwkManager.Services.IRequestSettings): ng.IPromise<T>;
        sendRequest<T>(settings: fwkTech.Services.IRequestSettings): ng.IPromise<T>;
        getFromContext<T>(key: string): ng.IPromise<T | string>;
        addToGlobalContext(key: string, value: string): ng.IPromise<boolean | any>;
        addListToGlobalContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addListToContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addToContext(key: string, value: string): ng.IPromise<void | boolean>;
        afficherUrl(url: string, processId?: string): ng.IPromise<boolean>;
        lirePreference(nomVariable: string): ng.IPromise<any>;
        ecrirePreference(nomVariable: string, valeurVariable: string): ng.IPromise<any>;
        startProcess(processCode: string, standAlone?: boolean, initData?: fwkManager.Services.Lisa.IInitialisationData, valeurDepart?: number): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult | void>;
        /**
         * Terminer un processus à partir de son id.
         * Bascule l'affichage automatiquement sur le dernier processus actif.
         * Emet un événement de [[Component.ManagerEventType.BasculeProcess]] avec le contexte du portail en paramètre.
         * Renvoie une promesse indiquant si la fin de processus s'est bien passée.
         */
        stopProcess(processId: string): ng.IPromise<boolean>;
        /**
         * Basculer vers un processus donnée en le mettant au 1er plan (iframe).
         */
        switchProcess(processId: string): ng.IPromise<boolean>;
        trace: fwkManager.Services.Trace.TraceManagerExtended | fwkTech.Services.Trace.Logger;
        changeMainProcessName(name: string): ng.IPromise<any>;
        /**
         * Renvoie le type de portail (Myway ou PCM).
         */
        getTypePortail(): ng.IPromise<TypePortailEnum>;
        /**
         * Renvoie les informations de la caisse de l'établissement.
         * @param codeEtablissement Code établissement. Par défaut celui de l'agent connecté.
         */
        getInfosCaisse(codeEtablissement?: string): ng.IPromise<IInfosCaisses>;
        envoyerMail(mail: fwkTech.Services.Communication.Mail): ng.IPromise<string>;
        getCapacite(regle: fwkTech.Services.Capacites.REGLE): ng.IPromise<boolean>;
        /**
         * Renvoie true si l'agent connecté est un agent de La Hénin.
         */
        isAgentFromAgenceLaHenin(): ng.IPromise<boolean>;
        versionMySys(): string;
        startApplication(codeApplication: string): ng.IPromise<boolean>;
        isPCM(): ng.IPromise<boolean>;
        isPortailMobilite(): ng.IPromise<boolean>;
    }
}

declare module myway.core {
    class CommonService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        init(serviceInit: fwkManager.Services.IServiceManagerInitialisation): ng.IPromise<fwkManager.Services.Context.IPortalContext>;
        init(serviceInit: fwkTech.Services.IServiceAgentInitialisation): ng.IPromise<any>;
        initialize(): ng.IPromise<any>;
        sendRequest<T>(settings: fwkManager.Services.IRequestSettings): ng.IPromise<T>;
        sendRequest<T>(settings: fwkTech.Services.IRequestSettings): ng.IPromise<T>;
        getDonneesDelocalisees<T>(objectDataName: string): ng.IPromise<MyWay.TableDeloc.Donnees<T>>;
        afficherUrl(url: string, processId?: string): ng.IPromise<boolean>;
        lirePreference(nomVariable: string): ng.IPromise<any>;
        ecrirePreference(nomVariable: string, valeurVariable: string): ng.IPromise<any>;
        /**
         * Renvoie le type de portail (Myway ou PCM).
         */
        getTypePortail(): ng.IPromise<TypePortailEnum>;
        isPCM(): ng.IPromise<boolean>;
        isPortailMobilite(): ng.IPromise<boolean>;
        /**
         * Renvoie les informations de la caisse de l'établissement.
         * @param codeEtablissement Code établissement. Par défaut celui de l'agent connecté.
         */
        getInfosCaisse(codeEtablissement?: string): ng.IPromise<IInfosCaisses>;
        /**
         * Renvoie true si l'agent connecté est un agent de La Hénin.
         */
        isAgentFromAgenceLaHenin(): ng.IPromise<boolean>;
        /**
         * Renvoie l'état de bascule d'un processus pour l'établissement dans le contexte.
         * La table délocalisée SU1P est utilisée pour déterminer l'état.
         * Le code application est PETRA par défaut.
         * @returns Promesse contenant un booléen.
         */
        isProcessusBascule(codeProcessus: string, codeApplication?: string): ng.IPromise<boolean>;
        versionMySys(): string;
    }
}

declare module myway.core {
    class ContexteClientService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        /**
         * Créer un contexte client sur un client donné transmis par son id
         * @param identifiantPersonne identifiant de la personne
         * @return id technique du contexte client créé (ou mergé)
         */
        createNewContext(identifiantPersonne?: number | string): string;
        /**
         * Supprimer tous les contextes clients
         */
        deleteAllContexts(): void;
        /**
         * Renvoie l'identifiant personne du contexte client courant.
         */
        getIdClient(): ng.IPromise<string>;
        /**
         * Modification de l'identifiant client du contexte client courant.
         * L'identifiant personne est correctement formaté puisqu'il est la clé du client.
         * @throws Erreur si processus non associé à un contexte client
         * @throws Erreur si contexte client déjà associé à un client
         * @throws Erreur si code client invalide (ex : null, undefined, ...)
         * @param identifiantPersonne Identifiant de la personne
         */
        setIdClient(identifiantPersonne: number | string): ng.IPromise<void>;
        /**
         * Renvoie l'identifiant personne d'un contexte client.
         * @param contextId Id du contexte client
         */
        getIdClientFromContext(contextId: string): string;
        /**
         * Renvoie la liste des identifiants clients assignés à des contextes clients.
         */
        getAllIdClients(): ng.IPromise<string[]>;
        /**
         * Renvoie la liste des identifiants des contextes clients.
         */
        getAllIdContextes(): ng.IPromise<string[]>;
        /**
         * Modifie le mode du contexte client (AUTOMATIQUE ou MANUEL).
         * @param contextId Id du contexte client
         * @param mode Mode
         */
        setContextMode(contextId: string, mode: fwkManager.Services.ContexteClient.Messages.ContexteClientMode): void;
        /**
         * Récupère le contexte client d'une personne.
         * @param identifiantPersonne Identifiant de la personne
         */
        getContextByIdClient(identifiantPersonne: number | string): ng.IPromise<any>;
        /**
         * Récupère un contexte client à partir de son id.
         * @param contextId Id du contexte client
         */
        getContextById(contextId: string): ng.IPromise<any>;
        /**
         * Récupère la valeur d'une propriété du context client courant. Si cette dernière est omise, renvoie tout le contexte client.
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        getProperty(prop?: string): ng.IPromise<any>;
        /**
         * Définit la valeur d'une propriété dans le context client courant.
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        setProperty(prop: string, valeur: any): ng.IPromise<boolean>;
        /**
         * Récupère la valeur d'une propriété d'un contexte client. Si cette dernière est omise, renvoie tout le contexte client.
         * @param contextId Id du contexte client
         * @param prop Nom de la propriété.
         * @return Valeur de la propriété
         */
        getContextProperty(contextId: string, prop?: string): ng.IPromise<any>;
        /**
         * Définit la valeur d'une propriété dans le contexte client.
         * @param prop Nom de la propriété.
         * @param value Valeur de la propriété.
         * @param contextId Id du contexte client. Dans le cas d'une SPA, ce paramètre n'a pas de sens car on utilise systématiquement le contexte client courant.
         */
        setContextProperty(prop: string, value: any, contextId?: string): ng.IPromise<any>;
    }
}

declare module myway.core {
    class ContexteService extends FrameworkService {
        private $q;
        private CONTEXT_KEY_AUTHENTIFICATION_INFO;
        private CONTEXT_KEY_PARAMETRES_COMPTABLES;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        setAuthentificationInfo(value: fwkManager.Services.Context.AuthentificationInfo): ng.IPromise<void>;
        getParametresComptables(): ng.IPromise<fwkManager.Services.Context.ParametresComptables>;
        setParametresComptables(value: fwkManager.Services.Context.ParametresComptables): ng.IPromise<void>;
        getFromContext<T>(key: string): ng.IPromise<T | string>;
        addToGlobalContext(key: string, value: string): ng.IPromise<boolean | any>;
        addListToGlobalContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
        addToContext(key: string, value: string): ng.IPromise<void | boolean>;
        addListToContext(context: IContextKeyValue): ng.IPromise<boolean | any>;
    }
}

declare module myway.core {
    interface IPlateforme {
        id: fwkTech.Services.Mobilite.PLATEFORME;
        code: string;
        libelle: string;
    }
    interface IContextKeyValue {
        [key: string]: any;
    }
}

declare module myway.core {
    class HabilitationService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        chargerHabilitations(): ng.IPromise<any>;
        estHabilite(code: string): ng.IPromise<boolean>;
        estHabilite(codes: string[]): ng.IPromise<boolean[]>;
        /**
         * Ajoute ou modifie une habilitation
         * @param code Le code de l'habilitation à insérer / modifier
         * @param valeur La valeur true/false de l'habilitation
         */
        modifierHabilitation(code: string, valeur: boolean): ng.IPromise<any>;
        /**
         * Renvoie un objet avec les codes habilitations et leurs valeurs respectives.
         * @param codes Codes habilitations
         */
        estHabiliteKV(codes: string[]): ng.IPromise<{
            [code: string]: boolean;
        }>;
    }
}

declare module myway.core {
    class MailService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        envoyerMail(mail: fwkTech.Services.Communication.Mail): ng.IPromise<string>;
    }
}

declare module myway.core {
    class MobiliteService extends FrameworkService {
        private $q;
        private logger;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, logger: LoggerService);
        /**
         * Retourne les informations sur le device de l'utilisteur
         */
        getInfoMachine(): ng.IPromise<fwkTech.Services.Mobilite.IInfoMachine>;
        /**
         * Retourne la liste des périphériques associé au device de l'utilisteur
         */
        getPeripheriques(): ng.IPromise<fwkTech.Services.Mobilite.IPeripherique[]>;
        /**
         * Retourne la signature de la tablette de l'utilisteur
         */
        getTablettesSignature(): ng.IPromise<fwkTech.Services.Mobilite.ITabletteSignature[]>;
        /**
         * Retourne le numéro de caisse de l'utilisteur
         */
        getCaissesAuto(): ng.IPromise<fwkTech.Services.Mobilite.ICaisseAuto[]>;
        /**
         * Permet de savoir à quel type de réseau on est connecté
         */
        getReseau(): ng.IPromise<fwkTech.Services.Mobilite.TYPE_RESEAU>;
        /**
         * Retourne une capacité
         */
        getCapacite(regle: fwkTech.Services.Capacites.REGLE): ng.IPromise<boolean>;
        /**
         * Renvoie une liste des plateformes
         */
        getPlateformes(): ng.IPromise<IPlateforme[]>;
        /**
         * Renvoie des informations relatives à la mobilité du device utilisé par l'agent.
         * En cas d'erreur, chaque information concernée sera nulle.
         *
         */
        getInfosMobilite(): ng.IPromise<IInfosMobilite>;
    }
}

declare module myway.core {
    class ProcessusService extends FrameworkService {
        private $q;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService);
        startApplication(codeApplication: string): ng.IPromise<boolean>;
        startProcess(processCode: string, standAlone?: boolean, initData?: fwkManager.Services.Lisa.IInitialisationData, valeurDepart?: number): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult | void>;
        /**
         * Terminer un processus à partir de son id.
         * Bascule l'affichage automatiquement sur le dernier processus actif.
         * Emet un événement de [[Component.ManagerEventType.BasculeProcess]] avec le contexte du portail en paramètre.
         * Renvoie une promesse indiquant si la fin de processus s'est bien passée.
         */
        stopProcess(processId: string): ng.IPromise<boolean>;
        /**
         * Basculer vers un processus donnée en le mettant au 1er plan (iframe).
         */
        switchProcess(processId: string): ng.IPromise<boolean>;
        changeMainProcessName(name: string): ng.IPromise<any>;
    }
}

declare module myway.core {
    class TraceService extends FrameworkService {
        private $q;
        private contexteService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, contexteService: ContexteService);
        trace: fwkManager.Services.Trace.TraceManagerExtended | fwkTech.Services.Trace.Logger;
        debug(message: string, action?: string, detail?: any): void;
        info(message: string, action?: string, detail?: any): void;
        warning(message: string, action?: string, detail?: any): void;
        error(message: string, action?: string, detail?: any): void;
    }
}
