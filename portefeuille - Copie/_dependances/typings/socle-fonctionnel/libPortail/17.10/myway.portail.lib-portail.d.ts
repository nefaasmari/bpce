
declare module libPortail {
    var app: ng.IModule;
}

declare module libPortail {
    interface IProcessusPortail {
        url: string;
        code: string;
    }
    abstract class ConstantesProcessus {
        static MA_JOURNEE: IProcessusPortail;
        static DEBUT_JOURNEE: IProcessusPortail;
        static MES_FAVORIS: IProcessusPortail;
        static PROCESSUS_ET_APPLICATIONS: IProcessusPortail;
    }
    abstract class PortailConstantes {
        static URL_PORTAIL: string;
        /**
         * nombre maxi de processus client à lancer dans le totem du Portail
         * -> pas utilisé pour le moment !
         */
        static NOMBRE_MAX_PROCESS_CLIENT: number;
        static SEP_PARAM_PROCESS: string;
    }
    abstract class CodesPersonnaliteJuridique {
        static PERSONNE_PHYSIQUE: string;
        static PERSONNE_MORALE: string;
        static INCONNU: string;
    }
    const CAPACITES_JURIDIQUES_PERSONNE_PROTEGEE: string[];
    abstract class CodesTypeRelation {
        static CLIENT: string;
        static TIERS: string;
        static PROSPECT: string;
    }
    abstract class TypeEds {
        static AGENCE: string;
    }
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
    /**
     * Chemin des propriétés dans le contexte client du PCM.
     * Les propriétés à confirmer sont uniquement utilisées par le portail myway.
     */
    var CONTEXTE_CLIENT_PCM_PATHS: IContexteClientPaths;
    /**
     * Chemin des propriétés dans le contexte client du Portail Myway.
     */
    var CONTEXTE_CLIENT_MYWAY_PATHS: IContexteClientPaths;
    /**
     * Codes processus LISA
     */
    abstract class CodesProcessus {
        /**
         * Synthèse client
         */
        static SYNTHESE_CLIENT: string;
        /**
         * Agenda
         */
        static AGENDA: string;
        /**
         * Identifier une personne
         */
        static IDENTIFICATION_PERSONNE: string;
        /**
         * Compte Rendu d'Entretien
         */
        static COMPTE_RENDU_ENTRETIEN: string;
        /**
         * Aide Préparation d'Entretien
         */
        static AIDE_PREPARATION_ENTRETIEN: string;
        /**
         * Classeur Client
         */
        static CLASSEUR_CLIENT: string;
        /**
         * Plan de Classement
         */
        static PLAN_CLASSEMENT: string;
    }
    abstract class CodesHabilitations {
        /**
         * Habilité à utiliser le portail
         */
        static SHOR0S: string;
        /**
         * Habilité à utiliser le portail sur un environnement standard
         */
        static SHOR0T: string;
        /**
         * Usage standard OPERA
         */
        static SHDYD0: string;
        /**
         * Enrichissement DRC
         */
        static SHDYD5: string;
        /**
         * 0283 ECM - Restitution Documentaire
         */
        static SHOPB3: string;
        static SHOPI3: string;
        static SHDS73: string;
        static SHDS75: string;
        static SHDS44: string;
        static SHDS43: string;
        static SHDS42: string;
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

declare module libPortail {
    class ContexteClientData {
        contextId: string;
        identifiantPersonne: number;
        designationCourte: string;
        codePersonnaliteJuridique: string;
        codeTypeRelation: string;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
        /**
         * EDS interne d'origine du client (agence de rattachement en général).
         */
        idEdsOrigineClient: number;
        nomCommercial: string;
        raisonSociale: string;
        codeAppartenanceReseau: string;
        codeCivilite: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        indicateurActiviteProfessionnel: boolean;
        dateDeces: string;
        constructor(contextId: string, identifiantPersonne: number);
        libelleTypeRelation: string;
        personneProtegee: boolean;
        isEmpty(): boolean;
    }
    interface IContexteClientConsolidationPromises {
        identificationV1?: ng.IPromise<myway.ressources.tiers.v1.identification.IIdentification>;
        portefeuille?: ng.IPromise<myway.ressources.tiers.portefeuille.ITiersPortefeuille>;
        infosTiers?: ng.IPromise<any>;
    }
    interface IConsolidationContexteClientOptions {
        infosTiers?: boolean;
        eds?: boolean;
    }
    interface IContexteClientPaths {
        indicateurSynchroSynthese: string;
        designationCourte: string;
        codeCivilite: string;
        nomCommercial: string;
        raisonSociale: string;
        numeroSiren: string;
        idEdsOrigineClient: string;
        idEdsInterneSuiviPar: string;
        codeAgentSuiviPar: string;
        codeAppartenanceReseau: string;
        codePersonnaliteJuridique: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        dateDeces: string;
        /**
         * Indicateur Activité professionnelle ("0" ou "1").
         */
        indicExistenceProfessionnel: string;
        codeClientTiers: string;
        codeProspect: string;
    }
    const enum IndicateurSynchroSyntheseEnum {
        /**
         * Pas de mise à jour de la synthèse
         */
        PAS_DE_MAJ = 0,
        /**
         * Mise à jour de la synthèse à partir du client contexte
         */
        MAJ_CONTEXTE_CLIENT = 1,
        /**
         * Mise à jour de la synthèse par un appel de la DBPE
         */
        MAJ_DBPE = 2,
    }
}

declare module libPortail {
    interface IFrameworkEventListener {
        onEvent: (event: fwkManager.Services.Component.ManagerEvent) => void;
    }
    abstract class PortailEvents {
        static LANCER_PROCESSUS: string;
        static TOGGLE_TOTEM_PORTAIL: string;
        static TERMINER_DEBUT_JOURNEE: string;
        static UPDATE_PROCESS_LIST: string;
        static SWITCH_PROCESS: string;
    }
    interface IPostMessageEvent {
        sendPostMessage: boolean;
        event: string;
        params: any;
    }
}

declare module libPortail {
    interface IGuichetAgent {
        coordonneeGuichet: IBureauGuichet;
        libelleEdsRattGuichet: string;
        guichetInterbancaire: string;
        numeroInterneEds: number;
    }
    interface IBureauGuichet {
        identifiantInterneGuichet: number;
        referenceExterneGuichet: number;
        referenceExterneGuichetAffichage: string;
        libelleGuichet: string;
        identifiantInterneGAB: string;
        referenceExterneGAB: string;
        referenceExterneGABAffichage: string;
        libelleGAB: string;
    }
    interface IInfosGuichetComptables {
        guichetEtGuichetDebutJournee: string;
        edsTypeRattachementGuichetComptable: string;
        libelleEdsRattachementGuichetComptable: string;
    }
}

declare module libPortail {
    class ParamPopupMedia {
        identifiantPersonne: number;
        libellePersonne: string;
        constructor();
    }
}

declare module libPortail {
    class ParamProcess {
        libelle: string;
        paramProcess: string;
        codeLISA: string;
        codeLISABandeauClient: string;
        flagPP: boolean;
        flagPM: boolean;
        flagPPRO: boolean;
        flagMultiInstance: boolean;
        flagAfficherProcessusStart: boolean;
        flagVisible: boolean;
        valeurDepart: number;
        constructor(libelle: string, codeLISA: string, paramProcess?: string);
        private setEligibilite(vecteurEligibilite);
    }
}

declare module libPortail {
    class ProcessHandler {
        portailContext: fwkManager.Services.Context.IPortalContext;
        private processes;
        client: ClientProcessHandler;
        current: CurrentProcessHandler;
        constructor(portailContext: fwkManager.Services.Context.IPortalContext);
        /**
         * Définit une nouvelle liste de processus
         */
        setListe(processes: ProcessPortail[]): void;
        allProcesses: ProcessPortail[];
        /**
         * Renvoie le dernier processus (correspond au dernier qui a été démarré).
         */
        lastProcess: ProcessPortail;
        processesWithContexteClient: ProcessPortail[];
        processesWithoutContexteClient: ProcessPortail[];
        /**
         * Renvoie un processus à partir de son code.
         * @param codeProcess Code du processus
         */
        getProcessByCode(codeProcess: string): ProcessPortail;
        /**
         * Renvoie un processus à partir de son id.
         * @param id Id du processus
         */
        getProcessById(id: string): ProcessPortail;
    }
    class ClientProcessHandler {
        private processHandler;
        constructor(processHandler: ProcessHandler);
        /**
         * Renvoie la liste des clients ayant un processus en cours
         */
        clients: number[];
        /**
         * Renvoie le processus le plus récent de chaque client.
         */
        mostRecentClientProcesses: ProcessPortail[];
        processesWithContexteClient: ProcessPortail[];
        /**
         * Renvoie le processus le plus récent d'un client.
         */
        getMostRecentClientProcess(identifiantPersonne: number): ProcessPortail;
        /**
         * Renvoie tous les processus d'un client
         */
        getProcesses(identifiantPersonne: number): ProcessPortail[];
        /**
         * Renvoie un processus à partir de son code.
         */
        getProcessByCode(identifiantPersonne: number, codeProcess: string): ProcessPortail;
    }
    class CurrentProcessHandler {
        private processHandler;
        /**
         * Processus courant du portail au premier plan (affiché)
         */
        process: ProcessPortail;
        /**
         * Code de l'application portail au premier plan (affichée).
         * (début de journée, ma journée, processus et application, mes favoris)
         */
        private codeApplicationPortail;
        constructor(processHandler: ProcessHandler);
        /**
         * Définit le processus courant.
         * @param empty Supprime la définition du processus courant si empty vaut true
         */
        setCurrentProcess(empty?: boolean): void;
        isCurrent(process: ProcessPortail): boolean;
        setApplicationPortail(code?: string): void;
        /**
         * Renvoie tous les processus du client courant
         */
        clientProcesses: ProcessPortail[];
        /**
         * Renvoie true si un processus client est en cours d'exécution (c'est à dire affiché dans l'iframe).
         */
        isProcessClient: boolean;
        isApplicationDebutJournee: boolean;
        isApplicationMaJournee: boolean;
        isApplicationProcessusEtApplications: boolean;
        isApplicationMesFavoris: boolean;
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
    interface IParamLisa extends fwkManager.Services.Lisa.IInitialisationData {
        addParamTab: (key: string, value: string) => void;
        addSingleParam: (key: string, value: string) => void;
        valeurEntree: number;
    }
    class ParamLisa implements IParamLisa {
        context: fwkManager.Services.Context.IContextKeyValuePair;
        contextArray: fwkManager.Services.Context.IContextKeyValuePair[];
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
    class ProcessPortail {
        process: fwkManager.Services.Context.IProcess;
        application: ParamProcess;
        contexteClientData: ContexteClientData;
        identifiantPersonne: number;
        dateDernierAffichage: Date;
        /**
         * Libellé du processus (figé, pas altéré par le changement de nom)
         */
        libelle: string;
        constructor(process: fwkManager.Services.Context.IProcess, identifiantPersonne: string);
        toString(): string;
        id: string;
        contexteClientId: string;
        isProcessClient: boolean;
        isPersonnePhysique: boolean;
        isPersonneMorale: boolean;
        libelleClient: string;
        libelleProcess: string;
        /**
         * Renvoie l'étape en cours d'exécution.
         */
        processStep: fwkManager.Services.Context.ProcessStep;
        /**
         * Renvoie le code du processus.
         * Il faut aller chercher le code du dernier sous-processus lancé et non pas le code du processus racine.
         */
        codeProcess: string;
        containsCodeLISABandeauClient(code: string): boolean;
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
        PAS_DE_CLIENT = 5,
        CONTEXTE_CLIENT_VIDE_OU_ILLISIBLE = 6,
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

declare module libPortail {
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

declare module libPortail {
    class ModaleFlashControleur {
        $modale: ng.ui.bootstrap.IModalServiceInstance;
        titre: string;
        contenu: string;
        static $inject: string[];
        constructor($modale: ng.ui.bootstrap.IModalServiceInstance, titre: string, contenu: string);
        fermer(): void;
    }
}

declare module libPortail {
    /**
     * Wrapper du serviceManager (Portail myway) et du techAgent (SPAs).
     *
     * Ce service existe parce que les déclarations Typescript ne sont pas compatibles entre les différents frameworks, et aussi à cause des variations dans les APIs disponibles.
     * Il s'appuie sur un typage légèrement modifié et surtout basé sur une version précise du framework (17.10).
     * C'est donc clairement du bricolage temporaire, puisque le framework devrait être unifié dans une version 18.xx.
     *
     * Toutes ces méthodes utilisent les promesses Angular, qui exécutent donc un cycle $digest lors de la résolution.
     */
    class AgentService {
        private $q;
        private $injector;
        private logger;
        static CONTEXT_KEY_AUTHENTIFICATION_INFO: string;
        static CONTEXT_KEY_PARAMETRES_COMPTABLES: string;
        static NON_GEREE: string;
        private serviceAgent;
        private techAgent;
        private phantomAgent;
        static $inject: string[];
        constructor($q: ng.IQService, $injector: ng.auto.IInjectorService, logger: LoggerService);
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
        addToContext(key: string, value: string): ng.IPromise<void | boolean>;
        lirePreference(nomVariable: string): ng.IPromise<any>;
        ecrirePreference(nomVariable: string, valeurVariable: string): ng.IPromise<any>;
        afficherUrl(url: string, processId?: string): ng.IPromise<boolean>;
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
        private initPhantomAgent();
        private initTechAgent();
        private initServiceAgent();
    }
}

declare module libPortail {
    class ApplicationService {
        private $q;
        private agentService;
        private logger;
        private referentielProcessusPromise;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: AgentService, logger: LoggerService);
        /**
         * Renvoie la liste des processus provenant de la base portail.
         */
        getReferentielProcessus(): ng.IPromise<ParamProcess[]>;
        /**
         * Renvoie une liste filtrée avec les éléments habilités.
         * @param liste Liste d'éléments
         * @param codeHabilitation Fonction qui renvoie le code habilitation d'un élément
         * @param includeFalseCodes Inclusion ou non des éléments dont le code habilitation contient BIDON.
         */
        filterByHabilitation<T>(liste: T[], codeHabilitationFunction: (element: T) => string, includeFalseCodes: boolean): ng.IPromise<T[]>;
        getListeApplications(params: myway.ressources.portailmyway.rechercheapplication.IGetQueryParams): ng.IPromise<myway.ressources.portailmyway.rechercheapplication.IApplication[]>;
        getDetailApplication(code: string): ng.IPromise<myway.ressources.portailmyway.application.IApplication>;
    }
}

declare module libPortail {
    class AuthentificationService {
        private $q;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: AgentService, logger: LoggerService);
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        /**
         * Vérifie que l'agent est bien habilité sur le portail.
         * Si ce n'est le cas, une erreur sera renvoyée.
         */
        verifierHabilitation(): ng.IPromise<void>;
        /**
         * Rechargement des habilitations si le poste fonctionnel retourné est différent du poste fonctionnel stocké dans le context
         */
        rechargerHabilitations(poste: myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<any>;
        /**
         * Renvoie le ou les postes fonctionnels de l'agent correspondant à l'établissement de connexion.
         * Le service appelé peut renvoyer plusieurs établissements, il y a donc un post-filtre qui est appliqué.
         */
        getPosteFonctionnelAgent(): ng.IPromise<myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel[]>;
        /**
         *  Valoriser la clé : adresseMessagerie à partir des données du poste fonctionnel
         *
         *  ATTENTION : la clé est retournée vide (actuellement)
         *  Le processus Crédit Gestion utilise cette clé lors de l'appel
         *  de la ressource REST : /v2/dossiercreditgestion/caracteristiqueDossier/
         *
         *  la clé utilisée : identifiantNationalAgent est valorisée par la clé adresseMessagerie
         *  issue du poste fonctionnel (emailPosteFonctionnel)
         *
         *  Si la clé adresseMessagerie est renseignée via une chaine de caractères supérieure à 8 caractères,
         *  le lancement du processus "Crédit Gestion" plante au démarrage (via la tuile de la Synthèse client MyWay).
         *  Pour contourner ce crash, la valeur retournée est vide
         *
         *  Les entêtes du header de l'appel REST utilisent la clé x-identifiantNationalAgent,
         *  si la clé adresseMessagerie est vide, la clé x-identifiantNationalAgent ne sera positionnée dans le header
         *
         *  @method
         *  @param {myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel} posteFonctionnel
         *  @return {string} adresseMessagerie
         */
        private getAdresseMessagerie(posteFonctionnel);
        /**
         * Mise à jour du poste fonctionnel dans la structure AuthentificationInfo
         */
        updatePosteFonctionnelAuthentificationInfo(poste: myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        /**
         * Renvoie true si l'agent connecté est un agent de La Hénin.
         */
        isAgentFromAgenceLaHenin(): ng.IPromise<boolean>;
    }
}

declare module libPortail {
    class ContexteClientService {
        private $q;
        private $parse;
        private $injector;
        private logger;
        private agentService;
        private tiersService;
        private edsService;
        static NON_GEREE: string;
        private serviceAgent;
        private techAgent;
        private phantomAgent;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $injector: ng.auto.IInjectorService, logger: LoggerService, agentService: AgentService, tiersService: TiersService, edsService: EdsService);
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
        /**
         * Met à jour le contexte client à partir des données fournies.
         * @param contextId Id du contexte client
         * @param contexteClientData Données du contexte client
         */
        setContexteClientData(contextId: string, contexteClientData: ContexteClientData): ng.IPromise<void>;
        /**
         * Renvoie les données du contexte client en allant récupérer les informations manquantes par des appels REST.
         * Pour le moment, seul le codePersonnaliteJuridique est récupéré.
         * @param identifiantPersonne Identifiant de la personne
         */
        getContexteClientDataFromServer(contextId: string, identifiantPersonne: number): ng.IPromise<ContexteClientData>;
        /**
         * Enrichit et met à jour les données du contexte client par l'appel de certains services.
         * @param contextId Id du contexte client. Ce paramètre peut-être null dans le cas d'une SPA vu qu'on utilisera le contexte client courant.
         * @param contexteClientData Données du contexte client
         * @param options Options pour indiquer les infos à consolider. Si omis, toutes les infos sont consolidées.
         *        Si les options sont partiellement définies, celles non définies ne sont pas consolidées.
         *        Les infos d'identification sont systématiquement consolidées elles sont un prérequis pour tout le reste.
         */
        consolidationContexteClient(contextId: string, contexteClientData: ContexteClientData, options?: IConsolidationContexteClientOptions): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client.
         * @param identifiantPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(identifiantPersonne: string | number): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param identifiantPersonne Identifiant de la personne
         * @param designation Désignation courte de la personne
         */
        setClient(identifiantPersonne: string | number, designation: string): ng.IPromise<void>;
        /**
         * Définit un client dans le contexte client et met à jour le nom du processus avec la désignation du client.
         * @param identifiantPersonne Identifiant de la personne
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        setClient(identifiantPersonne: string | number, civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): ng.IPromise<void>;
        /**
         * Renvoie la désignation du client à partir de ses informations.
         * @param civilite Civilité ou code civilité
         * @param nomUsage Nom d'usage (marital)
         * @param nomPatronymique nom patronymique (de famille)
         * @param prenom Prénom
         */
        getDesignationClient(civilite: string, nomUsage: string, nomPatronymique: string, prenom: string): string;
        /**
         * Renvoie le contexte client de la personne.
         * S'il est vide, les données sont récupérées par des appels rest et le contexte client sera mis à jour.
         * @param identifiantPersonne Identifiant de la personne
         * @param consolidation Indicateur de consolidation si le contexte est vide
         */
        getClient(identifiantPersonne: string | number, consolidation?: boolean): ng.IPromise<ContexteClientData>;
        /**
         * Renvoie tous les contextes client.
         */
        getAllClients(): ng.IPromise<ContexteClientData[]>;
        /**
         * Renvoie l'indicateur synchro-synthèse du contexte client.
         */
        getIndicateurSynchroSynthese(): ng.IPromise<IndicateurSynchroSyntheseEnum>;
        /**
         * Met à jour l'indicateur synchro-synthèse dans le contexte client.
         * @param indicateur Valeur de l'indicateur.
         */
        setIndicateurSynchroSynthese(indicateur: IndicateurSynchroSyntheseEnum): ng.IPromise<boolean>;
        /**
         * Log le contenu des contextes clients
         */
        logInfosContextes(): void;
        private consoliderInfosIdentification(contexteClientData, promises);
        private consoliderInfosTiers(contexteClientData, promises);
        private consoliderEDS(contexteClientData, promises);
        private extractPath(path, data);
        private initPhantomAgent();
        private initTechAgent();
        private initServiceAgent();
    }
}

declare module libPortail {
    class CultureNetService {
        private $q;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: AgentService, logger: LoggerService);
        updateHabilitationsCommunautaires(): ng.IPromise<any>;
        /**
         * Renvoie les rubriques cultureNet d'une origine donnée.
         * @param origineRubrique Origine de la rubrique: Communaute, National, Regional
         */
        private getRubriquesCultureNet(origineRubrique);
    }
}

declare module libPortail {
    class EdsService {
        private $q;
        private logger;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: LoggerService, agentService: AgentService);
        getCaracteristiqueEDS(params: myway.ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<myway.ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
        getCaracteristiqueAgence(params: myway.ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<myway.ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
    }
}

declare module libPortail {
    class GuichetService {
        private $q;
        private agentService;
        private authentificationService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: AgentService, authentificationService: AuthentificationService, logger: LoggerService);
        /**
         * Renvoie la liste de codes guichets COCXGU pour le code etablissement passé en param.
         */
        getCodesGuichets(): ng.IPromise<string[]>;
        /**
         * Tentative d'ouverture automatique du guichet. Il faut que:
         * - l'agent a un seul poste fonctionnel
         * - le guichet doit être mémorisé dans ses préférences utilisateur
         */
        tryOpenGuichet(poste: myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<void>;
        /**
         * Ouverture du guichet
         * - Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         * - Mise à jour du guichet et des paramètres comptables.
         */
        ouvrirGuichet(codeEtablissement: string, poste: myway.ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel, guichet: IGuichetAgent, memoriserGuichet?: boolean): ng.IPromise<any>;
        /**
         * Renvoie le guichet enregistré dans les préférences utilisateur
         */
        getPreferencesGuichet(): ng.IPromise<IGuichetAgent>;
        /**
         * Enregistre le guichet dans les préférences utilisateur
         */
        setPreferencesGuichet(guichetAgent: IGuichetAgent, controleDebutJournee: myway.ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee): ng.IPromise<void>;
        /**
         * Générer la clé d'appel pour lire les données "authentificationInfo" stockées dans le service des préférences.
         * La longueur de cette clé ne doit pas dépasser 32 caractères.
         */
        getKeyPreferencesBureauGuichet(): ng.IPromise<string>;
        /**
         * Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         */
        getControleDebutJournee(codeEtablissement: string, typeFonctionPF: string, identifiantInternePF: number, referenceExterneGuichet: number, identifiantInterneEDSRattPF: number): ng.IPromise<myway.ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee>;
    }
}

declare module libPortail {
    /**
     * Service d'initialisation du portail myway
     */
    class InitPortailService {
        private $q;
        private phantomAgent;
        private agentService;
        private authentificationService;
        private cultureNetService;
        private guichetService;
        private processusService;
        private applicationService;
        private logger;
        private promiseInit;
        private onEvent;
        private listeners;
        private onAffichageModalMessage;
        private onFermerModalMessage;
        portailContext: fwkManager.Services.Context.IPortalContext;
        static $inject: string[];
        constructor($q: ng.IQService, phantomAgent: fwkManager.Services.ServiceManagerExtended, agentService: AgentService, authentificationService: AuthentificationService, cultureNetService: CultureNetService, guichetService: GuichetService, processusService: ProcessusService, applicationService: ApplicationService, logger: LoggerService);
        /**
         * Ajouter une classe (service, contrôleur) pour écouter les évènements du framework.
         */
        registerEventListener(listener: IFrameworkEventListener): void;
        /**
         * Supprimer une classe (service, contrôleur) pour ne plus recevoir d'évènements
         */
        unregisterEventListener(listener: IFrameworkEventListener): void;
        /**
         * Initialisation du portail myway
         */
        init(): ng.IPromise<void>;
        initGuichet(): ng.IPromise<any>;
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
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: AgentService, logger: LoggerService);
        /**
         * Ouvre ou ferme le totem du portail.
         * @param state Indicateur d'ouverture du totem
         */
        toggleTotem(state: boolean): void;
        /**
         * Démarrer une synthèse client à partir d'un identifiant personne
         */
        lancerSyntheseClient(identifiantPersonne: number): void;
        /**
         * Lance un processus LISA avec le client spécifié ou celui du contexte si omis.
         */
        lancerProcessusClient(process: IStartProcess, identifiantPersonne?: number): void;
        /**
         * Lance un processus LISA au sein du portail.
         */
        lancerProcessus(process: IStartProcess): void;
        /**
         * Terminer le processus début de journée.
         */
        terminerDebutJournee(): void;
    }
}

declare module libPortail {
    class ProcessusService {
        private $q;
        private $parse;
        private $rootScope;
        private logger;
        private agentService;
        private contexteClientService;
        private personnePhysiqueService;
        private erreurService;
        private applicationService;
        processHandler: ProcessHandler;
        /**
         * Promesse d'enchainement des appels à la méthode updateProcessList.
         * Elle permet notamment de chainer un traitement après la mise à jour des processus.
         */
        updateProcessListPromise: ng.IPromise<void>;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $rootScope: ng.IRootScopeService, logger: LoggerService, agentService: AgentService, contexteClientService: ContexteClientService, personnePhysiqueService: TiersService, erreurService: ErreurService, applicationService: ApplicationService);
        init(portailContext: fwkManager.Services.Context.IPortalContext): void;
        /**
         * Démarrer un processus à partir d'une url
         */
        lancerProcessusUrl(url: string): void;
        /**
         * Démarrer un processus à partir d'un code et d'autres paramètres
         */
        lancerProcessus(params: IStartProcess, application?: fwkManager.Services.Application.ApplicationDTO): ng.IPromise<fwkManager.Services.Lisa.LisaCallbackResult>;
        /**
         * Fermer tous les processus et supprime tous les contextes clients
         */
        closeAllProcess(): ng.IPromise<void>;
        /**
         * Fermer tous les processus d'un client donné.
         */
        closeAllProcessFromClient(identifiantPersonne: number): void;
        /**
         * Fermer un processus à partir de son id.
         */
        closeProcessById(id: string): ng.IPromise<boolean>;
        /**
         * Basculer vers un processus.
         */
        switchProcess(processId: string): ng.IPromise<void>;
        /**
         * Mise à jour de la liste des processus dans le processHandler.
         * Le framework ne renvoie pas d'informations sur le processus créé, modifié, ou supprimé,
         * on met donc à jour toute la liste par simplicité.
         */
        updateProcessList(eventType: fwkManager.Services.Component.ManagerEventType): ng.IPromise<void>;
        /**
         * Création d'un objet ProcessPortail qui contient plus d'informations que celui du framework dont le contexte client.
         * @param process Objet process issu du framework
         */
        private createProcessPortail(process, eventType, oldProcess, applications);
        private checkDuplicateClientProcesses();
        /**
         * Log des infos sur les processus en cours
         */
        logInfosProcesses(): void;
    }
}

declare module libPortail {
    class TiersService {
        private $q;
        private logger;
        private modalService;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: LoggerService, modalService: MyWay.UI.IModalService, agentService: AgentService);
        getTiersLiesAdministratifs(idPersonne: number): any;
        getRelationEco(idPersonne: number): ng.IPromise<any>;
        getClient(idPersonne: number): ng.IPromise<any>;
        getMedia(idPersonne: number): ng.IPromise<any>;
        getIdentification(idPersonne: number): ng.IPromise<myway.ressources.tiers.v1.identification.IIdentification>;
        getSuiviCommercial(identifiantPersonne: number): ng.IPromise<myway.ressources.tiers.identification.ISuiviCommercial>;
        getParticulierInformation(identifiantPersonne: number): ng.IPromise<any>;
        getCorporateInformation(identifiantTiers: number): ng.IPromise<any>;
        getPortefeuille(identifiantPersonne: number): ng.IPromise<myway.ressources.tiers.portefeuille.ITiersPortefeuille>;
        ouvrirModaleDetailsMedia(param: ParamPopupMedia): void;
    }
}

declare module libPortail {
    abstract class Tools {
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
        /**
         * Décode une string en provenant d'un service REST.
         * Si elle est null ou a pour valeur "null", une chaine vide sera renvoyée
         */
        static decodeRestString(value: string): string;
        static parseInt(value: string): number;
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
