
declare module libPortail {
    var app: ng.IModule;
    abstract class PortailConstantes {
        static URL_PORTAIL: string;
    }
}

declare module libPortail.framework {
    const enum ManagerEventType {
        PortalContextChanged = 1,
        FinDeTransition = 2,
        FinDeProcessus = 3,
        NouvelleEtape = 4,
        NouveauProcess = 5,
        NouveauSousProcess = 6,
        NouvelleAppliExterne = 7,
        BasculeProcess = 8,
        ChangementNomProcess = 9,
        DemandeDeDemarrageDeProcessus = 10,
        AcceptPhase = 11,
        ConnectionSignalR = 12,
        AfficherLogOn = 13,
        MasquerLogOn = 14,
        Extraction = 15,
        Diagnostic = 16,
        MiseAJourContexteClient = 17,
        Log = 18,
        ChangementAuthentificationInfo = 19,
        BriqueCommunication = 20,
    }
    interface IContextKeyValuePair {
        Key: string;
        Value: string;
    }
    class ContextKeyValuePair implements IContextKeyValuePair {
        Key: string;
        Value: string;
    }
    interface IInitialisationData {
        /**
         * Données de contexte à insérer dans un processus sous forme d'objet: ex: {"idPersonne":"1234"}
         */
        context?: any;
        /**
         * Données de contexte à insérer dans un processus sous forme de tableau clé valeur ex: [{"Key":"idPersonne", "Value":"1234"}]
         */
        contextArray?: IContextKeyValuePair[];
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
    /**
     * Ensemble des données liées à l'utilisateur bancaire
     */
    interface AuthentificationInfo {
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
    }
    interface ParametresComptables {
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
    interface AgentConnecte {
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
    }
    interface GuichetAgent {
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
    interface StepInfo {
        StepCode: string;
        BusinessCode: string;
        ProcessCode: string;
        ValeurEntree: number;
        Contrats: ContratInfo[];
        AuthorizedOutputs: number[];
        ProcessType: string;
        ScopeInitialise: boolean;
    }
    interface StepInfoExtended extends StepInfo {
        CurrentStepId: string;
        CurrentProcessId: string;
        CurrentParentProcessId: string;
        NomComposant: string;
        NiveauTrace: number;
        Aide: Aide.IAideResult;
        VersionComposant: string;
        Diagnostic: boolean;
        PreviousStepEndTime: number;
        StartTime: number;
        DisplayTime: number;
    }
    interface ContratInfo {
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
    }
    interface IRequestSettingsExtended extends IRequestSettings {
        authentificationInfo?: AuthentificationInfo;
        parametresComptables?: ParametresComptables;
        stepInfo?: StepInfoExtended;
        logger?: ILogger;
        additionalHeaders?: {
            [key: string]: string;
        };
        type?: string;
        versionComposant?: string;
    }
    enum MethodEnum {
        DELETE = 0,
        GET = 1,
        POST = 2,
        PUT = 3,
    }
    enum ContentTypeEnum {
        NONE = 0,
        URL_ENCODED = 1,
        JSON = 2,
    }
    enum ResponseTypeEnum {
        BLOB = 0,
        JSON = 1,
        EMPTY = 2,
        NOT_DEFINED = 3,
    }
    enum AcceptEnum {
        ALL = 0,
        JSON = 1,
    }
    module Aide {
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
        interface ChampDeSaisieResult {
            Id: string;
            IdChamp: string;
            MessageCommunautaire: string;
            MessageEtablissement: string;
            EstUneNouveaute: boolean;
        }
        interface ModalePushResult {
            Message: string;
        }
        interface TotemResult {
            Categorie: string;
            Titre: string;
            FormatDocument: string;
            Lien: string;
            EstUneNouveaute: boolean;
        }
        interface Infobulle {
        }
        interface InfobulleAfficheeResult extends Infobulle {
            getNomChampLie(): string;
            getEstNouveaute(): boolean;
        }
        interface DetailInfobulleAfficheeResult extends InfobulleAfficheeResult {
            getNomChampLie(): string;
            getEstNouveaute(): boolean;
            getMessage(): string;
            getImage(): string;
        }
    }
    interface ILogger {
        debug(message: string, action?: string, object?: any): void;
        info(message: string, action?: string, object?: any): void;
        warning(message: string, action?: string, object?: any): void;
        error(message: string, action?: string, object?: any): void;
    }
}

declare module libPortail {
    abstract class PortailEvents {
        static LANCER_PROCESSUS: string;
        static TOGGLE_TOTEM_PORTAIL: string;
        static TERMINER_DEBUT_JOURNEE: string;
    }
    interface IPostMessageEvent {
        sendPostMessage: boolean;
        event: string;
        params: any;
    }
}

declare module libPortail {
    interface IStartProcess {
        /**
         * Code du processus
         */
        codeProcessus: string;
        /**
         * Indicateur stand-alone (false par défaut)
         */
        standAlone?: boolean;
        /**
         * Paramètre LISA (contexte)
         */
        initData?: ParamLisa;
        /**
         * Valeur de départ (LISA)
         */
        valeurDepart?: number;
        /**
         * Identifiant de la personne
         */
        idPersonne?: number;
        /**
         * Indicateur de création d'un contexte client (false par défaut)
         */
        client?: boolean;
    }
    interface IParamLisa extends framework.IInitialisationData {
        addParamTab: (key: string, value: string) => void;
        addSingleParam: (key: string, value: string) => void;
        valeurEntree: number;
    }
    class ParamLisa implements IParamLisa {
        context: framework.IContextKeyValuePair;
        contextArray: framework.IContextKeyValuePair[];
        displayName: string;
        idClient: string;
        idContexteClient: string;
        processusAOuvrirDansUneNouvelleInstance: boolean;
        subProcessCode: string;
        valeurEntree: number;
        constructor();
        addSingleParam(key: string, value: string): void;
        addParamTab(key: string, value: string): void;
    }
}

declare module libPortail {
    class ModaleErreurControleur {
        $modale: ng.ui.bootstrap.IModalServiceInstance;
        infos: IErreurModale;
        static $inject: string[];
        constructor($modale: ng.ui.bootstrap.IModalServiceInstance, infos: IErreurModale);
        fermer(): void;
    }
}

declare module libPortail {
    const enum ErreurCodeEnum {
        ERREUR_TECHNIQUE = 0,
        PAS_DE_GUICHET_DANS_PREFERENCE_UTILISATEUR = 1,
        DONNEES_AUTHENTIFICATION_INCOMPLETES = 2,
        AUCUN_POSTE_FONCTIONNEL = 3,
        PLUSIEURS_POSTES_FONCTIONNELS = 4,
    }
    class ErreurPortail {
        message: string;
        details: any;
        /**
         * Code d'erreur optionnel
         */
        code: ErreurCodeEnum;
        constructor(message: string);
        constructor(message: string, code: ErreurCodeEnum);
        constructor(message: string, details: string | Object);
    }
    interface IErreurModale {
        title?: string;
        bodyText?: string;
        erreur?: any;
        bouton?: IErreurBoutonModale;
        icone?: string;
        size?: string;
    }
    interface IErreurBoutonModale {
        text?: string;
        onClose?: () => void;
    }
}

declare module libPortail {
    class ErreurService {
        private $q;
        private $window;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, modalService: MyWay.UI.IModalService);
        /**
         * Affiche une modale d'erreur avec un bouton qui permet de rafraichir la page
         * L'erreur est analysée pour afficher le message le plus pertinent
         */
        afficherErreur(erreur: any): void;
        /**
         * Affiche une modale d'erreur
         */
        afficherModaleErreur(infos: IErreurModale): void;
        /**
         * Affiche une modale d'erreur avec un bouton qui permet de rafraichir la page
         */
        afficherModaleErreurWithRefreshButton(infos: IErreurModale): void;
        /**
         * Renvoie une structure contenant les détails de l'erreur.
         */
        getInfosErreur(erreur: any): IErreurModale;
        private decodeServiceErreur(infos, erreur);
    }
}

declare module libPortail.framework {
    class AgentService {
        private $q;
        private $injector;
        private logger;
        private serviceAgent;
        private serviceManager;
        static $inject: string[];
        constructor($q: ng.IQService, $injector: ng.auto.IInjectorService, logger: LoggerService);
        init(): void;
        getAuthentificationInfo(): ng.IPromise<framework.AuthentificationInfo>;
        estHabilite(codes: string[]): ng.IPromise<boolean[]>;
        sendRequest<T>(settings: IRequestSettings): ng.IPromise<T>;
    }
}

declare module libPortail {
    class AuthentificationService {
        private $q;
        private logger;
        private agentService;
        authentificationInfos: framework.AuthentificationInfo;
        parametresComptables: framework.ParametresComptables;
        static $inject: string[];
        constructor($q: ng.IQService, logger: LoggerService, agentService: framework.AgentService);
        /**
         * Vérifie que l'agent est bien habilité sur le portail (code SHOR0S).
         * Si ce n'est le cas, une erreur sera renvoyée.
         */
        verifierHabilitation(): ng.IPromise<void>;
        /**
         * Renvoie le ou les postes fonctionnels de l'agent correspondant à l'établissement de connexion.
         * Le service appelé peut renvoyer plusieurs établissements, il y a donc un post-filtre qui est appliqué.
         */
        getPosteFonctionnelAgent(codeEtablissement: string, referenceExterneAgent: string): ng.IPromise<myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel[]>;
    }
}

declare module libPortail {
    const enum LoggerLevel {
        NONE = -1,
        ERROR = 0,
        WARNING = 1,
        INFO = 2,
        TRACE = 3,
        ALL = 10,
    }
    interface ILoggerBufferEntry {
        date: Date;
        func: (message?: any, ...optionalParams: any[]) => void;
        level: LoggerLevel;
        message: any;
        args?: any[];
    }
    /**
     * Service lié aux loggers
     */
    class LoggerService {
        protected logLevel: LoggerLevel;
        protected bufferCapacity: number;
        protected consolePrefix: string;
        private buffer;
        static $inject: string[];
        constructor(logLevel: LoggerLevel, bufferCapacity: number, consolePrefix: string);
        trace(message: any, ...args: any[]): void;
        info(message: any, ...args: any[]): void;
        warn(message: any, ...args: any[]): void;
        error(message: any, ...args: any[]): void;
        /**
         * Renvoie le buffer.
         */
        getBuffer(): ILoggerBufferEntry[];
        /**
         * Vide le buffer dans la console.
         */
        flush(): void;
        private log(func, flushMode, level, message, args?);
    }
    class LoggerServiceProvider implements ng.IServiceProvider {
        private level;
        private bufferCapacity;
        private consolePrefix;
        constructor();
        $get(): LoggerService;
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
    }
}

declare module libPortail {
    class PortailService {
        private $q;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, logger: LoggerService);
        /**
         * Ouvre ou ferme le totem du portail.
         * @param state Indicateur d'ouverture du totem
         */
        toggleTotem(state: boolean): void;
        /**
         * Lance un processus LISA au sein du portail.
         */
        lancerProcessus(process: libPortail.IStartProcess): void;
        /**
         * Terminer le processus début de journée.
         */
        terminerDebutJournee(): void;
    }
}

declare module libPortail {
    abstract class Tools {
        /**
         * Décode une string en provenant d'un service REST.
         * Si elle est null ou a pour valeur "null", une chaine vide sera renvoyée
         */
        static decodeRestString(value: string): string;
        static extractErreur(data: any): any;
        static getStrDateHeureCourante(): string;
        static getIdentifiantPersonne(id: string | number): string;
        static getIdentifiantEDS(id: number | string): string;
        static isValidIdentifiantEDS(id: string): boolean;
        static getTypeEDS(type: number | string): string;
        /**
         * Renvoie le nom de l'évènement par rapport à l'énumération.
         * Le type réel de eventType est MyWay.Services.Component.ManagerEventType.
         * Comme le typage n'est pas possible, on utilise une énumération interne.
         */
        static getManagerEventTypeName(eventType: any): string;
    }
}
