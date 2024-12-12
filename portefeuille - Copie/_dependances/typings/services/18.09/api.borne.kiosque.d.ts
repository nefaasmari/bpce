
declare module borne.api {
    abstract class ServiceNames {
        static Activite: string;
        static Application: string;
        static Timeout: string;
        static Borne: string;
        static Message: string;
    }
    abstract class ProviderNames {
        static Timeout: string;
    }
    var app: ng.IModule;
}

declare namespace borne.api.activite {
    interface IActivite {
        idBorne: number;
        dateEvenement: Date;
        idApplication: number;
        evenementMajeur: string;
        evenementMineur: string;
        informations: string;
    }
}

declare namespace borne.api.activite {
    class ActiviteService {
        protected $q: ng.IQService;
        protected agentService: myway.core.AgentService;
        protected logger: myway.core.LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
        /**
         * Trace l'activité d'un utilisateur d'une borne en insérant un enregistrement.
         */
        createActivite(activite: IActivite): ng.IPromise<void>;
    }
}

declare namespace borne.api.application {
    interface IApplication {
        id: number;
        codeEtablissement: string;
        /**
         * Description de l'application destinée dans les écrans d'administration
         */
        description: string;
        /**
         * Message qui sera affiché sous l'icône de l'application
         * dans l'écran d'accueil présenté au client
         */
        message: string;
        /**
         * Libellé court de l'appli affiché dans les écrans d'administration
         */
        libelleCourt: string;
        url: string;
        /**
         * URI (http:// ou file://), chemin d'accès à l'icône de l'appli pour l'afficher sur la borne
         */
        icone: string;
        /**
         * Identifiant pour l'activité de la borne
         */
        idActivite: string;
    }
    interface IGetListeApplicationsQueryParams {
        codeEtablissement: string;
    }
    interface IGetListeApplicationsBorneQueryParams {
        codeEtablissement: string;
        idBorne: number;
    }
}

declare namespace borne.api.application {
    class ApplicationService {
        protected $q: ng.IQService;
        protected agentService: myway.core.AgentService;
        protected logger: myway.core.LoggerService;
        protected messageService: message.IMessageService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, logger: myway.core.LoggerService, messageService: message.IMessageService);
        /**
         * Fermer l'application courante.
         */
        closeCurrentApplication(): void;
        /**
         * Renvoie toutes les applications
         */
        getListeApplications(params?: IGetListeApplicationsQueryParams): ng.IPromise<IApplication[]>;
        /**
         * Renvoie les applications d'une borne, triées par le numéro d'ordre
         */
        getListeApplicationsBorne(params?: IGetListeApplicationsBorneQueryParams): ng.IPromise<IApplication[]>;
    }
}

declare namespace borne.api.borne.constantes {
    var DOMAINE: string;
}

declare namespace borne.api.borne {
    class Borne {
        id: number;
        nomPoste: string;
        codeEtablissement: string;
        idEdsAgence: string;
        typeEdsAgence: string;
        refExterneEdsAgence: string;
        libelleAgence: string;
        libelleBorne: string;
        adresseIp: string;
        domaine: string;
        dateDebutActivite: Date;
        dateFinActivite: Date;
        login: string;
        password: string;
        emailIncident: string;
        dateDernierBoot: Date;
        dernierHeartBeat: Date;
        frequenceHeartBeat: number;
        constructor(borne: IBorne);
        isActive: boolean;
    }
    interface IBorne {
        id: number;
        nomPoste: string;
        codeEtablissement: string;
        idEdsAgence: string;
        typeEdsAgence: string;
        refExterneEdsAgence: string;
        libelleAgence: string;
        libelleBorne: string;
        adresseIp: string;
        domaine: string;
        dateDebutActivite: string;
        dateFinActivite: string;
        login: string;
        password: string;
        emailIncident: string;
        dateDernierBoot: string;
        dernierHeartBeat: string;
        frequenceHeartBeat: number;
    }
    interface IGetListeBornesQueryParams {
        codeEtablissement: string;
    }
    interface IGetBorneQueryParams {
        codeEtablissement: string;
        nomPoste?: string;
        idBorne?: number;
    }
}

declare namespace borne.api.borne {
    class BorneService {
        protected $q: ng.IQService;
        protected agentService: myway.core.AgentService;
        protected logger: myway.core.LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
        /**
         * Renvoie toutes les bornes
         */
        getListeBornes(params?: IGetListeBornesQueryParams): ng.IPromise<Borne[]>;
        /**
         * Renvoie une borne
         */
        getBorne(params?: IGetBorneQueryParams): ng.IPromise<Borne>;
        /**
         * Renvoie la borne du poste
         */
        getBornePoste(): ng.IPromise<Borne>;
    }
}

declare namespace borne.api.message {
    class MessageNames {
        static FERMER_APPLICATION: string;
    }
    const enum EventTypeEnum {
        REQUEST = 0,
        RESPONSE = 1,
    }
    interface IPostMessageEvent<T> {
        event: string;
        type?: EventTypeEnum;
        uuid?: string;
        params?: T;
    }
    interface ISubscribe<T, U> {
        eventName: string;
        request: IRequestFunction<T, U>;
    }
    interface ISubscribeRequestParams<T, U> {
        eventName: string;
        request: IRequestFunction<T, U>;
    }
    interface ISendRequestParams<T> {
        eventName: string;
        params?: T;
        source?: Window;
    }
    interface IRequestFunction<T, U> {
        (params: IRequestFunctionParams<T, U>): void;
    }
    interface IRequestFunctionParams<T, U> {
        params?: T;
        answer?: IAnswerFunction<U>;
        event?: MessageEvent;
    }
    interface IAnswerFunction<T> {
        (params?: T): void;
    }
    interface ISendRequestSettings<T, U> {
        eventName: string;
        params?: T;
    }
}

declare namespace borne.api.message {
    interface IMessageService {
        subscribeRequest<T, U>(params: ISubscribeRequestParams<T, U>): void;
        sendRequestToIFrames<T>(p: ISendRequestParams<T>): void;
        sendRequest<T>(p: ISendRequestParams<T>): void;
        sendResponse<T>(eventName: string, event: MessageEvent): void;
    }
    class MessageService implements IMessageService {
        private $q;
        private $window;
        private $rootScope;
        private agentService;
        private erreurService;
        private loaderService;
        private logger;
        subscribes: ISubscribe<any, any>[];
        responseDeferred: {
            [uuid: string]: ng.IDeferred<any>;
        };
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, $rootScope: ng.IRootScopeService, agentService: myway.core.AgentService, erreurService: myway.core.ErreurService, loaderService: myway.core.LoaderService, logger: myway.core.LoggerService);
        subscribeRequest<T, U>(params: ISubscribeRequestParams<T, U>): void;
        sendRequestToIFrames<T>(p: ISendRequestParams<T>): void;
        sendRequest<T>(p: ISendRequestParams<T>): void;
        sendRequestWithResponse<T, U>(settings: ISendRequestSettings<T, U>): ng.IPromise<U>;
        sendResponse<T>(eventName: string, event: MessageEvent, params?: T): void;
        init(): void;
        onMessageEvent(e: MessageEvent, data: IPostMessageEvent<any>): void;
    }
}

declare namespace borne.api.timeout {
    interface ITimeoutConfig {
        /**
         * Durée du timeout en secondes (15s par défaut).
         */
        timeout?: number;
        /**
         * Seuil en secondes à partir duquel on considère que l'état est inactif (5s par défaut).
         */
        idleThreshold?: number;
        /**
         * Afficher une popup de confirmation au timeout (false par défaut).
         * Cette popup permet de relancer ou non le timeout.
         */
        confirmPopin?: boolean;
        /**
         * Fermeture de l'application au timeout (true par défaut)
         */
        closeOnTimeout?: boolean;
        /**
         * Fonction appelée en cas de timeout (aucune par défaut).
         * Cette fonction doit renvoyer une promesse car l'application peut être fermée après.
         */
        timeoutHook?: () => ng.IPromise<void>;
        /**
         * Liste des évènements utilisés pour déclencher l'interruption du timeout.
         */
        interruptEvents?: string;
    }
}

declare namespace borne.api.timeout {
    interface ITimeoutService {
        isIdle: boolean;
        timeLeft: number;
        setTimeoutHook(func: () => ng.IPromise<void>): void;
        start(): void;
        stop(): void;
        onInterval(): void;
        onTimeout(): void;
    }
    class TimeoutService implements ITimeoutService {
        private $q;
        private $timeout;
        private $interval;
        private $document;
        private $rootScope;
        private modalService;
        private agentService;
        private logger;
        private applicationService;
        config: ITimeoutConfig;
        /**
         * Contient la promesse du timeout ou interval
         */
        intervalPromise: ng.IPromise<void>;
        /**
         * Date de début exprimée en millisecondes
         */
        timeoutStartTime: number;
        /**
         * Temps écoulé en secondes depuis la date de début
         */
        timeElapsed: number;
        /**
         * Indicateur de binding des évènements de contrôle du timeout
         */
        eventBindings: boolean;
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $interval: ng.IIntervalService, $document: ng.IDocumentService, $rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, agentService: myway.core.AgentService, logger: myway.core.LoggerService, applicationService: application.ApplicationService, config: ITimeoutConfig);
        isIdle: boolean;
        timeLeft: number;
        setTimeoutHook(func: () => ng.IPromise<void>): void;
        start(): void;
        stop(): void;
        onInterval(): void;
        onTimeout(): ng.IPromise<void>;
        executeTimeoutHookFunction(): ng.IPromise<void>;
        closeApplication(): void;
        reset(): void;
        showTimeoutConfirm(): ng.IPromise<void>;
        bindEvents(): void;
        unbindEvents(): void;
        onInterruptEvent: (event: JQueryEventObject) => void;
    }
    class TimeoutServiceProvider implements ng.IServiceProvider {
        private config;
        constructor();
        $get($q: ng.IQService, $timeout: ng.ITimeoutService, $interval: ng.IIntervalService, $document: ng.IDocumentService, $rootScope: ng.IRootScopeService, modalService: MyWay.UI.IModalService, agentService: myway.core.AgentService, logger: myway.core.LoggerService, applicationService: application.ApplicationService): TimeoutService;
        /**
         * Modifie ou enrichit la configuration du service de Timeout
         */
        setConfig(config: ITimeoutConfig): void;
    }
}

declare namespace borne.api.timeout {
    class TimeoutIndicateurControleur {
        private $scope;
        private $timeout;
        private $element;
        private $attrs;
        private timeoutService;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, timeoutService: TimeoutService);
        timeLeft: string;
    }
}

declare namespace borne.api.timeout {
}
