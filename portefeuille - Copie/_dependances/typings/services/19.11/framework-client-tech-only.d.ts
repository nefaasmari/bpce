declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Loggers: Loggers.LoggerTechAgent;
    }
}
declare module MyWay.Services.Loggers {
    class LoggerTechAgent extends Components.ComponentAgentBase<ILoggersMessage, LoggersMessageSubject, ILoggersMessageContent> {
        /**
        * Constructeur de la classe LoggerTechAgent
        */
        constructor();
        getConfigurationDB(pNom: string): IPromesse<IConfig>;
        setConfigurationDB(pNom: string, pConfiguration: IConfig): IPromesse<void>;
        getConfigurationActual(): IPromesse<IConfig>;
        setConfigurationActual(pConfiguration: IConfig): IPromesse<void>;
        loadConfiguration(pNom: string): IPromesse<void>;
        saveConfiguration(pNom: string): IPromesse<void>;
        getLoggers(): IPromesse<string[]>;
        getNomConfigActuelle(): IPromesse<string>;
        isClassExists(pNom: string): IPromesse<boolean>;
        reset(): IPromesse<void>;
    }
}
declare module MyWay.Services {
    class TechAgentProvider {
        private $q;
        private instanceLoaderService;
        private $timeout;
        private $rootScope;
        static $inject: string[];
        private static _techAgentExtended;
        constructor($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any);
        static Instance($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any): TechAgentExtended;
        init(serviceInit?: IServiceAgentInitialisation): ng.IPromise<TechAgentExtended>;
    }
    class TechLibrary {
        LoggerTechAgent: Loggers.LoggerTechAgent;
        private _errorCallback;
        constructor();
        private static onInitListener;
        static addInitListener(pCallback: (pInstance: TechLibrary, library: Components.ILibraryTechAgent) => void): void;
        static removeInitListener(pCallback: (pInstance: TechLibrary, library: Components.ILibraryTechAgent) => void): void;
        init(library: Components.ILibraryTechAgent, serviceInit?: IServiceAgentInitialisation): IPromesse<any>;
    }
    class TechAgent extends ServiceAgent {
        _techLibrary: TechLibrary;
        constructor();
        init(serviceInit?: IServiceAgentInitialisation): IPromesse<any>;
        readonly LoggerTechAgent: Loggers.LoggerTechAgent;
        SendRequest(settings: IRequestSettingsExtended): IPromesse<any>;
    }
    class TechAgentExtended extends ServiceAgentExtended {
        _techLibrary: TechLibrary;
        static $inject: string[];
        constructor($q: ng.IQService, instanceLoaderService: MyWay.Services.InstanceLoaderService, $timeout: any, $rootScope: any);
        /**
         * @ngdoc method
         * @name init
         * @methodOf moduleAgent.TechAgentExtended
         * @description
         * Permet l'initialisation du ServiceAgent.
         * @param {Object} serviceInit Objet contenant le code LISA de la SPA
         *      et une fonction de rappel en cas de notification du portail vers l'application
         * @returns {Object} Result promise.
         */
        init(serviceInit: IServiceAgentInitialisation): IPromesse<any>;
        readonly LoggerTechAgent: Loggers.LoggerTechAgent;
        SendRequest(settings: IRequestSettingsExtended): IPromesse<any>;
    }
}

declare module MyWay.Test.V1.Services {
}
declare module MyWay.Services.Bug {
}

declare module MyWay.Services {
    interface TechAgentExtended {
        ContextTechAgent: Context.ContextTechAgent;
        AddToGlobalContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToTempoContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToMainProcessContext: (key: string, value: string) => IPromesse<any>;
        GetFromMainProcessContext: (key: string) => IPromesse<string>;
        GetCurrentMainProcess: () => IPromesse<Context.IProcess>;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        ContextTechAgent: Context.ContextTechAgent;
        AddToGlobalContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToTempoContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToMainProcessContext: (key: string, value: string) => IPromesse<any>;
        GetFromMainProcessContext: (key: string) => IPromesse<string>;
        GetCurrentMainProcess: () => IPromesse<Context.IProcess>;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        ContextTechAgent: Context.ContextTechAgent;
        AddToGlobalContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToTempoContext: (kvp: MyWay.Services.Context.IContextKeyValuePair[]) => IPromesse<any>;
        AddToMainProcessContext: (key: string, value: string) => IPromesse<any>;
        GetFromMainProcessContext: (key: string) => IPromesse<string>;
        GetCurrentMainProcess: () => IPromesse<Context.IProcess>;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Context: Context.ContextTechAgent;
    }
}
declare module MyWay.Services.Context {
    class ContextTechAgent extends ContextAgent {
        constructor();
        /**
         * Renvoie toutes les variables partagées
         * @return {} [description]
         */
        GetSharedStorage(): IPromesse<any>;
        /**
         * Renvoie toutes les variables processus hors portail
         * @return {} [description]
         */
        GetWaitingProcesses(): IPromesse<any>;
        /**
         * Renvoie toutes les variables du portail
         * @return {} [description]
         */
        GetPortals(): IPromesse<any>;
        /**
         * Renvoie toutes les variables du global storage
         * @return {} [description]
         */
        GetGlobalStorage(): IPromesse<IContextKeyValuePair[]>;
        /**
         * Efface le contexte
         * @return {} [description]
         */
        ClearContext(): IPromesse<any>;
        /**
        * Efface le bus interop
        * @return {} [description]
        */
        ClearBus(): IPromesse<any>;
        AddToContext(key: string, value: string): IPromesse<boolean>;
        AddToContext(level: MyWay.Services.Context.StorageLevel, kvp: MyWay.Services.Context.IContextKeyValuePair[], elementId?: string): IPromesse<any>;
        AddToGlobalContext(kvp: MyWay.Services.Context.IContextKeyValuePair[]): IPromesse<any>;
        AddToTempoContext(kvp: MyWay.Services.Context.IContextKeyValuePair[]): IPromesse<any>;
        AddToMainProcessContext(key: string, value: string): IPromesse<any>;
        AddToProcessStepContext(key: string, value: string, processStepId: string): IPromesse<any>;
        GetFromMainProcessContext(key: string): IPromesse<string>;
        GetCurrentMainProcess(): IPromesse<Context.IProcess>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        ContexteClientTechAgent: ContexteClient.ContexteClientTechAgent;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        ContexteClientTechAgent: ContexteClient.ContexteClientTechAgent;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        ContexteClientTechAgent: ContexteClient.ContexteClientTechAgent;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        ContexteClient: ContexteClient.ContexteClientTechAgent;
    }
}
declare module MyWay.Services.ContexteClient {
    /**
     * Agent technique du contexte client
     */
    class ContexteClientTechAgent extends ContexteClientAgent {
        /**
         * Récupération de l'ensemble des <b>id techniques</b> de tous les contextes clients (même ceux qui ne sont pas attachés à des clients!)
         * @returns Id technique de chaque contexte client
         */
        getContextes(): IPromesse<string[]>;
        /**
         * Destruction d'un contexte client. Chacun de ses processus sera alors détaché immédiatement
         * @throws Erreur si contexte client inexistant
         * @param pIdContexteClient Identifiant technique du contexte client à détruire
         * @returns true si destruction effective, false sinon
         */
        detruireContexte(pIdContexteClient: string): IPromesse<boolean>;
        /**
         * Création d'un nouveau contexte client. Plusieurs cas sont envisagés vis-a-vis du paramètre pIdClient
         * <ul>
         *  <li>Si non fourni alors un nouveau contexte client sans id client sera retourné</li>
         *  <li>Si fourni et qu'un autre contexte client a déjà cet identifiant client alors aucun nouveau contexte client sera créé et le contexte client trouvé sera retourné</li>
         *  <li>Si fourni et qu'aucun autre contexte client ne possède déjà cet identifiant client alors un nouveau contexte client attaché à cet identifiant client sera créé et retourné</li>
         * </ul>
         * @param pIdClient [OPTIONNEL] Identifiant du client pour le nouveau contexte client
         * @returns Identifiant technique du nouveau contexte client créé
         */
        nouveauContexte(pIdClient?: string): IPromesse<string>;
        /**
         * Change le contexte client d'un processus. Passer "null" comme id contexte client pour retirer le processus de tout contexte
         * @throws Erreur si le processus n'existe pas
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à assigner au processus. Peut être null
         * @param pCodeProcessus Code du processus à assigner au contexte client
         */
        changerContexteDuProcessus(pIdContexteClient: string, pCodeProcessus: string): IPromesse<void>;
        /**
         * Changer le mode de fonctionnement du contexte client. Attention RAPPEL : En mode automatique le contexte client se supprime de lui-même s'il n'est associé à aucun processus
         * @throws Erreur si le processus n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à assigner au processus
         * @param pMode Nouveau mode du contexte client
         */
        changerModeContexteClient(pIdContexteClient: string, pMode: Messages.ContexteClientMode): IPromesse<void>;
        /**
         * Récupérer tous les détails d'un contexte
         * @throws Erreur si le processus n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @returns Renvois tous les détails du processus demandé
         */
        getDetailsContexte(pIdContexteClient: string): IPromesse<Messages.ITechActionGetDetailsContextResponse>;
        /**
         * Modification de l'identifiant client d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @throws Erreur si code client non valide
         * @throws Erreur si le contexte client a déjà un code client
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pClient Code du client à assigner au contexte client
         */
        setClientOfContexteSpecifique(pIdContexteClient: string, pClient: string): IPromesse<void>;
        /**
         * Lis une donnée d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pCle Clé à récupérer
         * @returns Valeur cherchée
         */
        getPropertyOfContexteSpecifique(pIdContexteClient: string, pCle: string): IPromesse<any>;
        /**
         * Ajoute une donnée dans un tableau d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pCle Clé à modifier
         * @param pValeur Valeur à ajouter
         * @returns true si valeur ajoutée, false sinon
         */
        addToListOfContexteSpecifique(pIdContexteClient: string, pCle: string, pValeur: any): IPromesse<boolean>;
        /**
         * Fixe une donnée dans un objet d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pCle Clé à modifier
         * @param pValeur Valeur à placer
         * @returns true si valeur modifiée, false sinon
         */
        setPropertyOfContexteSpecifique(pIdContexteClient: string, pCle: string, pValeur: any): IPromesse<boolean>;
        /**
         * Supprime une donnée d'un tableau d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pCle Clé à supprimer
         * @returns true si valeur supprimée, false sinon
         */
        removeFromListOfContexteSpecifique(pIdContexteClient: string, pCle: string): IPromesse<boolean>;
        /**
         * Supprime une donnée d'un objet d'un contexte spécifique
         * @throws Erreur si le contexte client n'existe pas
         * @param pIdContexteClient Identifiant du contexte client à traiter
         * @param pCle Clé à supprimer
         * @returns true si valeur supprimée, false sinon
         */
        deletePropertyOfContexteSpecifique(pIdContexteClient: string, pCle: string): IPromesse<boolean>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        InteropTechAgent: Interop.InteropTechAgent;
        Lancer: (executableWrapper: Interop.ExecutableWrapper, contexte: Interop.ContexteMyway, parametres: string[], sync: boolean, errorCallback: ErreurCallback) => IPromesse<void>;
        AddToContextInterop: (level: string, key: string, value: string, callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        AddListToContextInterop: (level: string, datas: MyWay.Services.Context.IContextKeyValuePair[], callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        GetListFromContextInterop: (level: string, datas: string[], callback: (returnDatas: MyWay.Services.Context.IContextKeyValuePair[]) => void, errorCallback: ErreurCallback) => IPromesse<Context.IContextKeyValuePair[]>;
        GetFromContextInterop: (level: string, key: string, value: string, callback: (returnData: string) => void, errorCallback: ErreurCallback) => IPromesse<string>;
        EndStep: () => IPromesse<any>;
        AfficherWindowParHandle: (handle: string, affiche: boolean) => IPromesse<void>;
        AfficherWindowParPid: (pid: string, affiche: boolean) => IPromesse<void>;
        AfficherSynthese: (numeroClient: string) => IPromesse<void>;
        ActiverApplicationAppelante: (numeroPlan: string) => IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        InteropTechAgent: Interop.InteropTechAgent;
        Lancer: (executableWrapper: Interop.ExecutableWrapper, contexte: Interop.ContexteMyway, parametres: string[], sync: boolean, errorCallback: ErreurCallback) => IPromesse<void>;
        AddToContextInterop: (level: string, key: string, value: string, callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        AddListToContextInterop: (level: string, datas: MyWay.Services.Context.IContextKeyValuePair[], callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        GetListFromContextInterop: (level: string, datas: string[], callback: (returnDatas: MyWay.Services.Context.IContextKeyValuePair[]) => void, errorCallback: ErreurCallback) => IPromesse<Context.IContextKeyValuePair[]>;
        GetFromContextInterop: (level: string, key: string, value: string, callback: (returnData: string) => void, errorCallback: ErreurCallback) => IPromesse<string>;
        EndStep: () => IPromesse<any>;
        AfficherWindowParHandle: (handle: string, affiche: boolean) => IPromesse<void>;
        AfficherWindowParPid: (pid: string, affiche: boolean) => IPromesse<void>;
        AfficherSynthese: (numeroClient: string) => IPromesse<void>;
        ActiverApplicationAppelante: (numeroPlan: string) => IPromesse<void>;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        InteropTechAgent: Interop.InteropTechAgent;
        Lancer: (executableWrapper: Interop.ExecutableWrapper, contexte: Interop.ContexteMyway, parametres: string[], sync: boolean, errorCallback: ErreurCallback) => IPromesse<void>;
        AddToContextInterop: (level: string, key: string, value: string, callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        AddListToContextInterop: (level: string, datas: MyWay.Services.Context.IContextKeyValuePair[], callback: (any: any) => void, errorCallback: ErreurCallback) => IPromesse<any>;
        GetListFromContextInterop: (level: string, datas: string[], callback: (returnDatas: MyWay.Services.Context.IContextKeyValuePair[]) => void, errorCallback: ErreurCallback) => IPromesse<Context.IContextKeyValuePair[]>;
        GetFromContextInterop: (level: string, key: string, value: string, callback: (returnData: string) => void, errorCallback: ErreurCallback) => IPromesse<string>;
        EndStep: () => IPromesse<any>;
        AfficherWindowParHandle: (handle: string, affiche: boolean) => IPromesse<void>;
        AfficherWindowParPid: (pid: string, affiche: boolean) => IPromesse<void>;
        AfficherSynthese: (numeroClient: string) => IPromesse<void>;
        ActiverApplicationAppelante: (numeroPlan: string) => IPromesse<void>;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Interop: Interop.InteropTechAgent;
    }
}
declare module MyWay.Services.Interop {
    class InteropTechAgent extends InteropAgent {
        constructor();
        Lancer(executableWrapper: Interop.ExecutableWrapper, contexte: Interop.ContexteMyway, parametres: string[], sync: boolean, errorCallback?: ErreurCallback): IPromesse<void>;
        AddToContextInterop(level: string, key: string, value: string, callback?: (any: any) => void, errorCallback?: ErreurCallback): IPromesse<any>;
        AddListToContextInterop(level: string, datas: MyWay.Services.Context.IContextKeyValuePair[], callback?: (any: any) => void, errorCallback?: ErreurCallback): IPromesse<any>;
        GetListFromContextInterop(level: string, datas: string[], callback?: (returnDatas: MyWay.Services.Context.IContextKeyValuePair[]) => void, errorCallback?: ErreurCallback): IPromesse<MyWay.Services.Context.IContextKeyValuePair[]>;
        GetFromContextInterop(level: string, key: string, value: string, callback?: (returnData: string) => void, errorCallback?: ErreurCallback): IPromesse<string>;
        EndStep(): IPromesse<any>;
        AfficherWindowParHandle(handle: string, affiche: boolean): IPromesse<void>;
        AfficherWindowParPid(pid: string, affiche: boolean): IPromesse<void>;
        AfficherSynthese(numeroClient: string): IPromesse<void>;
        ActiverApplicationAppelante(numeroPlan: string): IPromesse<void>;
        LireFichier(nomFichier: string, callback?: (content: string) => void, errorCallback?: ErreurCallback): IPromesse<string>;
        clearBus(): IPromesse<void>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        TraceTechAgent: Trace.TraceTechAgent;
        purgerTraces: () => IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        TraceTechAgent: Trace.TraceTechAgent;
        purgerTraces: () => IPromesse<any>;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        TraceTechAgent: Trace.TraceTechAgent;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Trace: Trace.TraceTechAgent;
    }
}
declare module MyWay.Services.Trace {
    class TraceTechAgent extends TraceAgent {
        /**
        * Constructeur de la classe TechDonneesDelocaliseesTools
        */
        constructor();
        getIntervallePurge(callback?: (intervallePurge: number) => void, callbackError?: (erreur: Erreur) => void): IPromesse<number>;
        getQuotaPurge(callback?: (quotaPurge: number) => void, callbackError?: (erreur: Erreur) => void): IPromesse<number>;
        getEnregistrerTracesDansBD(callback?: (enregistrerTracesDansBD: boolean) => void, callbackError?: (erreur: Erreur) => void): IPromesse<boolean>;
        setNiveauMinimumTraceConsole(niveauMinimumTraceConsole: Trace.NIVEAUX_TRACE, callback?: () => void, callbackError?: (erreur: Erreur) => void): IPromesse<void>;
        getNiveauMinimumTraceConsole(callback?: (niveauMinimumTraceConsole: Trace.NIVEAUX_TRACE) => void, callbackError?: (erreur: Erreur) => void): IPromesse<Trace.NIVEAUX_TRACE>;
        setNiveauMinimumTraceBD(niveauMinimumTraceBD: Trace.NIVEAUX_TRACE, callback?: () => void, callbackError?: (erreur: Erreur) => void): IPromesse<Trace.NIVEAUX_TRACE>;
        getNiveauMinimumTraceBD(callback?: (niveauMinimumTraceBD: Trace.NIVEAUX_TRACE) => void, callbackError?: (erreur: Erreur) => void): IPromesse<Trace.NIVEAUX_TRACE>;
        getAfficherTracesDansConsole(callback?: (afficherTracesDansConsole: boolean) => void, callbackError?: (erreur: Erreur) => void): IPromesse<boolean>;
        reInitDbTraces(callback?: () => void, callbackError?: (erreur: Erreur) => void): IPromesse<void>;
        addOldTraces(nbJours: number, callback: () => void, callbackError: (erreur: Erreur) => void): IPromesse<void>;
        purgeTrace(dbRecordLimitInDays?: number, callback?: () => void, callbackError?: (erreur: Erreur) => void): IPromesse<void>;
        getTracesByLevel(niveau: Trace.NIVEAUX_TRACE, callback?: (traces: any[]) => void, callbackError?: (erreur: Erreur) => void): IPromesse<any[]>;
        setModeDebug(active: boolean, callback: (traces: any[]) => void, callbackError: (erreur: Erreur) => void): IPromesse<any[]>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        DonneesDelocaliseesTechAgent: DonneesDelocalisees.DonneesDelocaliseesTechAgent;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        DonneesDelocaliseesTechAgent: DonneesDelocalisees.DonneesDelocaliseesTechAgent;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        DonneesDelocaliseesTechAgent: DonneesDelocalisees.DonneesDelocaliseesTechAgent;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        DonneesDelocalisees: DonneesDelocalisees.DonneesDelocaliseesTechAgent;
    }
}
declare module MyWay.Services.DonneesDelocalisees {
    /**
    * Classe encapsulant les outils de debug et de diagnostics des données délocalisées
    * @classe DonneesDelocaliseesTechAgent
    * fonction : deleteDbDonneesDelocalisees – private - Permet de supprimer la base de données IndexedDb des données délocalisées
    * fonction : getTDTById – private - Permet de récupérer l'objet TDT correspondant à l'identifiant passé en paramètre dans le storeTDT
    * fonction : deleteTDTById – private - Permet de supprimer l'objet TDT correspondant à l'identifiant passé en paramètre dans le storeTDT
    */
    class DonneesDelocaliseesTechAgent extends DonneesDelocaliseesAgent {
        /**
        * Constructeur de la classe DonneesDelocaliseesTechAgent
        */
        constructor();
        /**
         * Permet de supprimer et de réinitialiser la base de données IndexedDB des données délocalisées
         * @param callback {function} action à exécuter une fois les données supprimées
         * @param callbackError {function} action à exécuter en cas d'erreur (le message d'erreur est transmis en paramètre: messageErreur)
         */
        reInitDbDonneesDelocalisees(callback?: () => void, callbackError?: (erreur: Erreur) => void): IPromesse<void>;
        /**
        * Permet de récupérer l'objet TDT correspondant à l'identifiant passé en paramètre dans le storeTDT
        * @param idTDT {string} identifiant du TDT à récupérer dans le storeTDT
        * @param callback {function} action à exécuter une fois que l'objet TDT a été récupérer (l'objet TDT récupéré est transmis en paramètre: objectTDT)
        * @param callbackError {function} action à exécuter en cas d'erreur (le message d'erreur est transmis en paramètre: messageErreur)
        */
        getTDTById(idTDT: string, callback?: (objectTDT: any) => void, callbackError?: (erreur: Erreur) => void): IPromesse<any>;
        /**
        * Permet de supprimer l'objet TDT correspondant à l'identifiant passé en paramètre dans le storeTDT
        * @param idTDT {string} identifiant du TDT à supprimer dans le storeTDT
        * @param callback {function} action à exécuter une fois que l'objet TDT a été supprimé
        * @param callbackError {function} action à exécuter en cas d'erreur (le message d'erreur est transmis en paramètre: messageErreur)
        */
        deleteTDTById(idTDT: string, callback: () => void, callbackError: (erreur: Erreur) => void): IPromesse<void>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        TraceSuiviTechAgent: TraceSuivi.TraceSuiviTechAgent;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        TraceSuiviTechAgent: TraceSuivi.TraceSuiviTechAgent;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        TraceSuiviTechAgent: TraceSuivi.TraceSuiviTechAgent;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        TraceSuivi: TraceSuivi.TraceSuiviTechAgent;
    }
}
declare module MyWay.Services.TraceSuivi {
    class TraceSuiviTechAgent extends TraceSuiviAgent {
        constructor();
        forcerTrace(trace: MyWay.Services.TraceSuivi.TraceSuiviModel): IPromesse<void>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        HabilitationTechAgent: Habilitation.HabilitationTechAgent;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        HabilitationTechAgent: Habilitation.HabilitationTechAgent;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        HabilitationTechAgent: Habilitation.HabilitationTechAgent;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Habilitation: Habilitation.HabilitationTechAgent;
    }
}
/**
* Module de gestion technique des habilitations
* @module MyWay.Services.Habilitation
* classe : HabilitationTechAgent - public - Classe permettant l'administration des habilitations
*/
declare module MyWay.Services.Habilitation {
    /**
    * Classe permettant la gestion des habilitations
    */
    class HabilitationTechAgent extends HabilitationAgent {
        /**
        * Constructeur de la classe HabilitationTechAgent
        */
        constructor();
        init(pAgentLibrary: Components.ILibraryAgent, pMessageService: Message.IMessageService, pMessageInitializer: Components.IAgentInitializer): IPromesse<void>;
        /**
         * Renvoie toutes les habilitations disponibles, dans un tableau d'habilitations
         * @return {IPromesse<HabilitationModel[]>} [description]
         */
        ObtenirHabilitations(): IPromesse<{
            [key: string]: boolean;
        }>;
        /**
         * Permet de récupérer une habilitation au format HabilitationModel
         * @param  {string}                       code [description]
         * @return {IPromesse<HabilitationModel>}                  [description]
         */
        ObtenirHabilitation(code: string): IPromesse<HabilitationModel>;
        /**
         * Ajoute ou modifie une habilitation
         * @param  {string}                       code Le code de l'habilitation à insérer / modifier
         * @param  {boolean}                      valeur           La valeur true/false de l'habilitation
         * @return {IPromesse<HabilitationModel>}                  [description]
         */
        ModifierHabilitation(code: string, valeur: boolean): IPromesse<HabilitationModel>;
        /**
         * Charge les habilitations en écrasant toutes les modifications faites par l'utilisateur
         * @return {IPromesse<HabilitationModel[]>} [description]
         */
        ChargerHabilitations(): IPromesse<HabilitationModel>;
    }
}

declare module MyWay.Services {
    interface TechAgentExtended {
        LisaTechAgent: Lisa.LisaTechAgent;
        StartProcess: (processCode: string, initData: MyWay.Services.Lisa.IInitialisationData, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartSubProcess: (processCode: string, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartExternalApp: (name: string, url: string, standAlone?: boolean) => IPromesse<void>;
        GetProcesses: () => IPromesse<Lisa.ProcessResult[]>;
        GetTools: () => IPromesse<Lisa.ApplicationResult[]>;
        GetCodesProcessus: () => IPromesse<string[]>;
        GetInfoProcessus: (codeProcessus: string) => IPromesse<Lisa.IInfoProcessus>;
    }
}
declare module MyWay.Services {
    interface TechAgent {
        LisaTechAgent: Lisa.LisaTechAgent;
        StartProcess: (processCode: string, initData: MyWay.Services.Lisa.IInitialisationData, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartSubProcess: (processCode: string, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartExternalApp: (name: string, url: string, standAlone?: boolean) => IPromesse<void>;
        GetProcesses: () => IPromesse<Lisa.ProcessResult[]>;
        GetTools: () => IPromesse<Lisa.ApplicationResult[]>;
        GetCodesProcessus: () => IPromesse<string[]>;
        GetInfoProcessus: (codeProcessus: string) => IPromesse<Lisa.IInfoProcessus>;
    }
}
declare module MyWay.Services {
    interface TechLibrary {
        LisaTechAgent: Lisa.LisaTechAgent;
        StartProcess: (processCode: string, initData: MyWay.Services.Lisa.IInitialisationData, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartSubProcess: (processCode: string, valeurDepart?: number) => IPromesse<Lisa.LisaCallbackResult>;
        StartExternalApp: (name: string, url: string, standAlone?: boolean) => IPromesse<void>;
        GetProcesses: () => IPromesse<Lisa.ProcessResult[]>;
        GetTools: () => IPromesse<Lisa.ApplicationResult[]>;
        GetCodesProcessus: () => IPromesse<string[]>;
        GetInfoProcessus: (codeProcessus: string) => IPromesse<Lisa.IInfoProcessus>;
    }
}
declare module MyWay.Services.Components {
    interface ILibraryTechAgent {
        Lisa: Lisa.LisaTechAgent;
    }
}
declare module MyWay.Services.Lisa {
    class LisaTechAgent extends LisaAgent {
        constructor();
        StartProcess(processCode: string, initData: MyWay.Services.Lisa.IInitialisationData, valeurDepart?: number): IPromesse<LisaCallbackResult>;
        StartSubProcess(processCode: string, valeurDepart?: number): IPromesse<LisaCallbackResult>;
        StartExternalApp(name: string, url: string, standAlone?: boolean): IPromesse<void>;
        GetProcesses(): IPromesse<Lisa.ProcessResult[]>;
        GetTools(): IPromesse<Lisa.ApplicationResult[]>;
        /**
        * Récupère les codes des processus LISA
        */
        GetCodesProcessus(): IPromesse<string[]>;
        /**
        * Récupère les infos d'un processus LISA
        * @param {string}   codeProcessus
        * code du processus
        */
        GetInfoProcessus(codeProcessus: string): IPromesse<Lisa.IInfoProcessus>;
    }
}

