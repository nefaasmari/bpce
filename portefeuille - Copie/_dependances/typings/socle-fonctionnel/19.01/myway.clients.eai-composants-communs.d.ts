
declare module composantsCommunsEAI {
    var app: any;
}

declare module composantsCommunsEAI.T {
    function isDefined(value: any): boolean;
    function isUndefined(value: any): boolean;
    function isBoolean(value: boolean): boolean;
    function isBooleanOfValue(object: any, value: boolean): boolean;
    function isString(value: string): boolean;
    function isStringOfValue(object: any, value: string): boolean;
    function isArray(value: Array<any>): boolean;
    function isArrayNotEmpty(value: any): boolean;
    function isDate(value: Date): boolean;
    function isNumber(value: number): boolean;
    function replaceNUStringWith(value: string, replacedValue: string): string;
}

declare module composantsCommunsEAI.Constantes {
    module Format {
        const personnePhysique: string;
        const personneMorale: string;
        const codeCivilite: string[];
        const codeCanalTel: string;
        const codeCanalFace: string;
        const codeCanalNet: string;
        const codeCanalCourrier: string;
        const libelleCanalTel: string;
        const libelleCanalFace: string;
        const libelleInternet: string;
        const libelleCourrier: string;
        const formatDate: string;
        const formatDateToRest: string;
    }
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $location: string;
        const $window: string;
        const $scope: string;
        const $route: string;
        const $timeout: string;
    }
    module Services {
        const restService: string;
        const lisaService: string;
        const errorService: string;
        const cacheService: string;
        const initService: string;
        const utilService: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const navigationService: string;
        const modalService: string;
        const notificationService: string;
    }
    module Logger {
        const consoleLogService: string;
        const logService: string;
        const myWayLogService: string;
        const applicationLogName: string;
    }
}

declare module composantsCommunsEAI.Enums {
    enum EtapesChargement {
        INIT_SERVICE_AGENT = 0,
        GET_PARAM_COMPTABLES = 1,
        GET_AUTHENTIFICATION = 2,
        GET_ID_PERSONNE = 3,
        GET_INFOS_CLIENT = 4,
        GET_RETOUR_REST = 5,
        INIT_ECRAN_INITIAL = 6,
        DEFAUT = 99,
    }
    enum statutEtatChargement {
        EN_COURS = 0,
        TERMINE = 1,
        INCONNU = 2,
    }
}

declare module composantsCommunsEAI.Services {
    interface IAgent {
        codeAgent: string;
        edsInterne: string;
    }
    interface IInitialisationService {
        formaterNumeroPersonne(nodape: string): number;
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        chargerVuesClient(route: string): void;
        genererUrlListePersonne(entiteTitulaire: number, idPage: string, typePersonne: string): string;
        genererUrlDetailPersonne(numeroPersonne: number, typePersonne: string): string;
        getCodeEtablissement(): string;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
    }
    class InitialisationService implements IInitialisationService {
        private $location;
        private $route;
        private _numeroPersonne;
        private _codeEtablissement;
        private _codeAgent;
        private _posteFonctionnel;
        static $inject: string[];
        constructor($location: ng.ILocationService, $route: ng.route.IRouteService);
        /**
         * formate le numéro de personne depuis une string vers un nombre,
         * renvoi null si valeur d'entrée undefined ou non convertible en nombre
         * @param numeroPersonne {string}
         * @return retour {number}
         */
        formaterNumeroPersonne(numeroPersonne: string): number;
        /**
         * retourne un objet simplifié, contenant le codeAgent et l'edsInterne, au format numérique,
         * à partir des informations d'authentification du contexte MyWay
         * @param authentificationInfo {MyWay.Services.Context.AuthentificationInfo}
         *
         */
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        chargerVuesClient(route: string): void;
        /**
         * Genere l'url de la vue EAI demandée
         * @param codeAgent {string}
         * @param entiteTitulaire {number}
         * @param idPage {string}
         * @param typePersonne {string}
         */
        genererUrlListePersonne(entiteTitulaire: number, idPage: string, typePersonne: string): string;
        /**
         * Genere l'url de la vue détail des infos d'une personne
         * @param codeAgent {string}
         * @param numeroPersonne {number}
         * @param idPage {string}
         * @param typePersonne {string}
         */
        genererUrlDetailPersonne(numeroPersonne: number, typePersonne: string): string;
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
    }
}

declare module composantsCommunsEAI.Services {
    interface ILisaService {
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        getListFromContext(keys: string[]): ng.IPromise<void>;
        getFromContext(key: string): ng.IPromise<string>;
        getAuthentificationInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
    }
    class LisaService implements ILisaService {
        private $q;
        private serviceAgentExtended;
        private modalService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        /**
         * Méthode de débranchement LISA vers un autre processus
         * @param valueNext
         * @param params
         */
        next(valueNext: number, params?: Array<MyWay.Services.Context.IContextKeyValuePair>): ng.IPromise<void>;
        /**
         * Méthode d'ajout de paramètres lié au débranchement LISA vers un autre processus
         * @param params
         */
        private addParams(params);
        /**
         * Débranchement LISA, appel au serviceAgent next
         * @param valueNext
         */
        private toNext(valueNext);
        /**
         * Lecture d'une liste de données dans le context
         * @param keys
         */
        getListFromContext(keys: string[]): ng.IPromise<void>;
        /**
         * Lecture d'une donnée dans le context
         * @param key
         */
        getFromContext(key: string): ng.IPromise<string>;
        /**
         * Méthode de recupération de l'objet authentificationInfo dans le context
         */
        getAuthentificationInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         * permet de recuperer les donnees comptables
         */
        getParametresComptables(): ng.IPromise<MyWay.Services.Context.ParametresComptables>;
    }
}

declare module composantsCommunsEAI.Services {
    interface IUtilitaireService {
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        afficherCodeCivilite(genre: string): string;
        formaterDate(date: string, dateVide?: boolean): string;
        formaterDateToRest(date: string): string;
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        formaterTelephone(numeroTelephone: string): string;
        extractErreur(data: any): string;
        msgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        transformerAccents(value: string): string;
        completerIdPersonne(idPersonne: number): string;
        displayInfo(mes: string): void;
        getIcone(codeCanal: string): string;
        getLibelleCanal(codeCanal: string): string;
    }
    class UtilitaireService implements IUtilitaireService {
        private modalService;
        private notificationService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService);
        /**
         * Permet d'afficher le code civilite et la designation courte de la personne physique
         * @param codePersonnaliteJuridique:string
         * @param libelleDesignationCourte:string
         * @param codeCivilite:string
         * @param nomFamille:string
         * @param prenom:string
         */
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        /**
         * permet d'afficher le libelle du code civilite
         * le resultat doit etre Mme ou Melle ou M
         * @param {string} codeCivilite
         * @return {string} libellé associé à la civilité
         */
        afficherCodeCivilite(genre: string): string;
        /**
         * permet d'afficher le format de la date
         * le resultat doit etre JJ/MM/AAAA
         * @param {string} formatDate
         * @return {string} la date au format JJ/MM/AAAA
         */
        formaterDate(date: string, dateVide?: boolean): string;
        /**
         * Permet de formater une date pour l'envoyer aux ressources
         * @param date {string} la date au format JJ/MM/AAA
         * @return {string} la date au format AAAA-MM-JJ
         */
        formaterDateToRest(date: string): string;
        /**
         * Permet de retourner le statut "pp" ou "pm" (personne physique ou personne morale)
         * @param codePersonnaliteJuridique:string ("1" pour particulier, "2" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        /**
         * Permet de formater l'affichage d'un numero de telephone
         * Le résultat doit être sous la forme xx xx xx xx xx
         * @param {string} le numéro de téléphone
         * @return {string} le numéro formaté sur 10 caractères avec des espaces
         */
        formaterTelephone(numeroTelephone: string): string;
        /**
         * permet d'extraire les erreurs
         * @param data
         */
        extractErreur(data: any): string;
        /**
         * permet d'afficher un popup d'information
         * @param header
         * @param msg
         * @param icon
         * @param size
         */
        msgBox(header: string, msg: string, icon?: string, size?: any): ng.IPromise<any>;
        /**
         * Retourne la chaine tronqué pour limiter la taille du libellé
         * @param {string} chaine d'origine
         * @param {number} le nombre de caractères maximum attendues
         * @return {string} la chaine tronquée
         */
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        /**
         * TODO : TU
         * @param value
         */
        transformerAccents(value: string): string;
        /**
         * Permet de formater le numero de personne sur 9 caracteres
         * @param idPersonne
         */
        completerIdPersonne(idPersonne: number): string;
        /** TODO:TU
         * Message de notification lors d'une validation
         * @param mes
         */
        displayInfo(mes: string): void;
        /**
         * permet d'afficher l'icone correspondant à un code canal
         * @param codeCanal
         */
        getIcone(codeCanal: string): string;
        /**
         * permet d'afficher le libelle correspondant à un code canal
         * @param codeCanal
         */
        getLibelleCanal(codeCanal: string): string;
    }
}

declare module composantsCommunsEAI.Logger {
    class ConsoleLogService implements ILogger {
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

declare module composantsCommunsEAI.Logger {
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
    class LogService implements ILogger {
        private consoleLogger;
        private kibanaLogger;
        private serviceAgentExtended;
        private loggers;
        static $inject: Array<string>;
        constructor(consoleLogger: ILogger, kibanaLogger: ILogger, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private loggerLevel;
        /**
         * log debuggage
         * @param message
         * @param args
         */
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        private canLog(level);
    }
}

declare module composantsCommunsEAI.Logger {
    class MyWayLogService implements ILogger {
        private logger;
        constructor();
        debug(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
    }
}

/**
 * S0076082
 */
declare module composantsCommunsEAI.Services {
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

declare module composantsCommunsEAI.Services {
    interface IRestService {
        /**
         * Exécution de la requète GET, les données récupérées sont mises en cache
         * @param urlService
         * @param params : paramètres dans le query
         * @param fromCache: optionnel, par défaut true, mais il est possible de forcer la récupération
         * @param timeout: optionnel
         */
        sendGetRequest<T, U>(urlService: string, params: U, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète POST
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète PUT
         * @param urlService
         * @param data : données dans le BODY
         * @param params: optionnel, paramètres dans le query
         * @param timeout: optionnel
         */
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        /**
         * Exécution de la requète DELETE
         * @param urlService
         * @param data: optionnel
         */
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
    }
    class RestService implements IRestService {
        private serviceAgentExtended;
        private cacheService;
        private logger;
        static $inject: Array<string>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, cacheService: Services.ICacheService, logger: Logger.ILogger);
        sendGetRequest<T, U>(urlService: string, params: U, cacheKey: string, fromCache?: boolean, timeout?: number): ng.IPromise<T>;
        sendPostRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendPutRequest<T, U, V>(urlService: string, data: U, params?: V, timeout?: number): ng.IPromise<T>;
        sendDeleteRequest<T, U>(urlService: string, data?: U): ng.IPromise<T>;
        /**
         *
         * @param typeMethode
         * @param urlService
         * @param params
         * @param data
         * @param timeout
         */
        private consume<T, U, V>(typeMethode, urlService, params?, data?, timeout?);
    }
}

