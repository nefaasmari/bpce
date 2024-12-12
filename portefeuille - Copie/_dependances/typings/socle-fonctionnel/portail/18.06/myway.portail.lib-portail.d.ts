
declare module myway.portail.api {
    var app: ng.IModule;
    export import Utils = core.Utils;
    export import EdsUtils = core.EdsUtils;
    export import StringUtils = core.StringUtils;
    export import NumberUtils = core.NumberUtils;
}

declare module myway.portail.api {
    /**
     * Codes des applications de la base Portail
     */
    abstract class CodesApplication {
        /**
         * Outlook
         */
        static OUTLOOK: string;
    }
}

declare namespace myway.portail.api {
    class ApplicationService {
        protected $q: ng.IQService;
        protected agentService: core.AgentService;
        protected mobiliteService: core.MobiliteService;
        protected logger: core.LoggerService;
        protected habilitationService: HabilitationService;
        protected favoriPersoService: favori.FavoriPersoService;
        protected favoriMetierService: api.favori.FavoriMetierService;
        protected modalService: MyWay.UI.IModalService;
        private infosMobilitePromise;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: core.AgentService, mobiliteService: core.MobiliteService, logger: core.LoggerService, habilitationService: HabilitationService, favoriPersoService: favori.FavoriPersoService, favoriMetierService: api.favori.FavoriMetierService, modalService: MyWay.UI.IModalService);
        getFamilles(motClef?: string): ng.IPromise<application.FamilleList>;
        /**
         * Renvoie une liste d'applications auxquelles l'agent est habilité.
         */
        getApplications(applicationParams?: ressources.portailmyway.rechercheapplication.IGetQueryParams): ng.IPromise<ApplicationList>;
        rechercheApplications(params: ressources.portailmyway.rechercheapplication.IGetQueryParams): ng.IPromise<ressources.portailmyway.rechercheapplication.IApplication[]>;
        rechercheApplicationsByCodes(codes: string[]): ng.IPromise<ressources.portailmyway.rechercheapplication.IApplication[]>;
        getApplication(params: ressources.portailmyway.application.IGetQueryParams): ng.IPromise<Application>;
        saveApplication(application: ressources.portailmyway.application.IApplication): ng.IPromise<ressources.portailmyway.application.IApplication>;
        postApplication(application: ressources.portailmyway.application.IApplication): ng.IPromise<ressources.portailmyway.application.IApplication>;
        /**
         * Retourne des informations concernant la compatibilité de l'application vis à vis du device utilisé (dans un contexte mobilité).
         */
        getApplicationContexteMobilite(application: ressources.portailmyway.rechercheapplication.IApplication): ng.IPromise<DeviceCompatible>;
        /**
         * Retourne des informations concernant la compatibilité des applications vis à vis du device utilisé (dans un contexte mobilité).
         */
        getApplicationsContexteMobilite(applications: ressources.portailmyway.rechercheapplication.IApplication[]): ng.IPromise<IApplicationDevice>;
        getElementsConfigurationPortail(): ng.IPromise<ressources.portailmyway.elementconfportail.IElementConfigurationPortail[]>;
        getElementConfigurationZone(idZone?: string): ng.IPromise<ressources.portailmyway.elementconfzone.IElementConfigurationZone[]>;
        getListeZonePortail(): ng.IPromise<ressources.portailmyway.zoneportail.IZonePortail[]>;
        afficherModaleDeviceNonCompatible(): ng.IPromise<any>;
        afficherModaleClientIdentifie(): ng.IPromise<any>;
        /**
         * Charger les constantes des éléments de configuration et les zone. Tout est ensuite en statique dans ApplicationList.
         */
        chargerConfigurationElementZone(): ng.IPromise<void>;
        protected getInfosMobilite(): ng.IPromise<core.IInfosMobilite>;
        /**
         * Renvoie une liste d'applications enrichies.
         */
        private buildApplicationList(apps, codeEtablissement);
    }
}

declare module myway.portail.api {
    class AuthentificationService {
        protected $q: ng.IQService;
        protected agentService: core.AgentService;
        protected logger: core.LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: core.AgentService, logger: core.LoggerService);
        getAuthentificationInfo(): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
        /**
         * Vérifie que l'agent est bien habilité sur le portail.
         * Si ce n'est le cas, une erreur sera renvoyée.
         */
        verifierHabilitation(): ng.IPromise<void>;
        /**
         * Rechargement des habilitations si le poste fonctionnel retourné est différent du poste fonctionnel stocké dans le context
         */
        rechargerHabilitations(poste: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<any>;
        /**
         * Renvoie le ou les postes fonctionnels de l'agent correspondant à l'établissement de connexion.
         * Le service appelé peut renvoyer plusieurs établissements, il y a donc un post-filtre qui est appliqué.
         */
        getPosteFonctionnelAgent(): ng.IPromise<ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel[]>;
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
         *  @param posteFonctionnel
         *  @return adresseMessagerie
         */
        private getAdresseMessagerie(posteFonctionnel);
        /**
         * Mise à jour du poste fonctionnel dans la structure AuthentificationInfo
         */
        updatePosteFonctionnelAuthentificationInfo(poste: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<fwkManager.Services.Context.AuthentificationInfo>;
    }
}

declare module myway.portail.api {
    abstract class CodesHabilitations {
        /**
         * Habilité à utiliser le portail
         */
        static SHOR0S: string;
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
}

declare module myway.portail.api {
    class HabilitationService {
        private $q;
        private $rootScope;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, agentService: core.AgentService, logger: core.LoggerService);
        /**
         * Renvoie une liste filtrée avec les éléments habilités.
         * @param liste Liste d'éléments
         * @param habilitationFunction Fonction qui renvoie une expression habilitation
         */
        filterByHabilitation<T>(liste: T[], habilitationFunction: (element: T) => string, libelleFunction: (element: T) => string): ng.IPromise<T[]>;
        /**
         * Positionne l'indicateur d'habilitation sur chaque application de la liste.
         * @param liste Liste d'éléments
         * @param habilitationFunction Fonction qui renvoie une expression habilitation
         * @param setterFunction Fonction qui définit l'indicateur d'habilitation
         */
        setHabilitationFlags<T>(liste: T[], habilitationFunction: (element: T) => string, setterFunction: (element: T, value: boolean) => void): ng.IPromise<T[]>;
        estHabiliteExpression(habilitation: string): ng.IPromise<boolean>;
        private isExpressionValide(habilitation);
    }
}

declare namespace myway.portail.api.entiteTitulaire {
    interface ISelectEntiteTitulaireResult {
        identifiantEntiteTitulaire: string;
        identifiantProfessionnel?: string;
    }
}

declare namespace myway.portail.api.entiteTitulaire {
    class EntiteTitulaireService {
        private $q;
        private logger;
        private agentService;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, agentService: core.AgentService, modalService: MyWay.UI.ModalService);
        getEntitesTitulaires(identifiantPersonne: string): ng.IPromise<myway.ressources.entitetitulaire.recherche.IEntiteTitulaire[]>;
        getInformationEntiteTitulaire(identifiantEntiteTitulaire: string): ng.IPromise<myway.ressources.entitetitulaire.informationEntiteTitulaire.IInformationEntiteTitulaire>;
        selectEntiteTitulaire(identifiantPersonne: string, identifiantProfessionnel: boolean): ng.IPromise<ISelectEntiteTitulaireResult>;
    }
}

declare module myway.portail.api {
}

declare namespace myway.portail.api.entiteTitulaire {
    /**
     * Controleur des encours du client
     */
    class SelectionEntiteTitulaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private $q;
        private $modalInstance;
        private agentService;
        private entiteTitulaireService;
        private identifiantPersonne;
        private identifiantProfessionnel;
        loading: boolean;
        tableauOptions: MyWay.UI.ImwTableOptions;
        private entiteSelectionnee;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, agentService: myway.core.AgentService, entiteTitulaireService: EntiteTitulaireService, identifiantPersonne: string, identifiantProfessionnel: boolean);
        onSelectionChange(entite: myway.ressources.entitetitulaire.recherche.IEntiteTitulaire): void;
        valider(): void;
        private initTableau();
    }
}

declare module myway.portail.api {
}

declare module myway.portail.api {
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
}

declare module myway.portail.api {
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
}

declare module myway.portail.api {
    /**
     * Chemin des propriétés dans le contexte client du PCM.
     * Les propriétés à confirmer sont uniquement utilisées par le portail myway.
     */
    var CONTEXTE_CLIENT_PCM_PATHS: IContexteClientPaths;
    /**
     * Chemin des propriétés dans le contexte client du Portail Myway.
     */
    var CONTEXTE_CLIENT_MYWAY_PATHS: IContexteClientPaths;
}

declare module myway.portail.api {
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
        nomUsage: string;
        prenom: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        indicateurActiviteProfessionnel: boolean;
        dateDeces: string;
        constructor(contextId: string, identifiantPersonne: number);
        libelleTypeRelation: string;
        personneProtegee: boolean;
        designationLongue: string;
        isPersonnePhysique: boolean;
        isPersonneMorale: boolean;
        isEmpty(): boolean;
    }
    interface IContexteClientConsolidationPromises {
        identificationV1?: ng.IPromise<ressources.tiers.v1.identification.IIdentification>;
        portefeuille?: ng.IPromise<ressources.tiers.portefeuille.ITiersPortefeuille>;
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
        nomUsage: string;
        prenom: string;
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

declare module myway.portail.api {
    class ContexteClientService extends core.FrameworkService {
        private $q;
        private $parse;
        private logger;
        private agentService;
        private contexteClientService;
        private tiersService;
        private edsService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, $parse: ng.IParseService, logger: core.LoggerService, agentService: core.AgentService, contexteClientService: core.ContexteClientService, tiersService: TiersService, edsService: EdsService);
        /**
         * Supprimer tous les contextes clients
         */
        deleteAllContexts(): void;
        /**
         * Renvoie l'identifiant personne d'un contexte client.
         * @param contextId Id du contexte client
         */
        getIdClientFromContext(contextId: string): string;
        /**
         * Modifie le mode du contexte client (AUTOMATIQUE ou MANUEL).
         * @param contextId Id du contexte client
         * @param mode Mode
         */
        setContextMode(contextId: string, mode: fwkManager.Services.ContexteClient.Messages.ContexteClientMode): void;
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
         * @deprecated Utiliser la méthode statique core.ClientUtils.getDesignation
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
         */
        getClient(identifiantPersonne: string | number): ng.IPromise<ContexteClientData>;
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
    }
}

declare module myway.portail.api.culturenet {
    interface IRubrique {
        title: string;
        description: string;
        image: string;
        link: string;
    }
    interface IStatutHabilitation {
        rubriquesCommunautairesLoaded?: boolean;
        rubriquesEtablissementsLoaded?: boolean;
        erreurRubriquesCommunautaires?: any;
        erreurRubriquesEtablissements?: any;
    }
}

declare module myway.portail.api.culturenet {
    class CultureNetService {
        private $q;
        private $timeout;
        private $http;
        private agentService;
        private habilitationService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, $http: ng.IHttpService, agentService: core.AgentService, habilitationService: core.HabilitationService, logger: core.LoggerService);
        /**
         * Chargement des habilitations Culture.Net
         */
        chargerHabilitations(): ng.IPromise<IStatutHabilitation>;
        removeHabilitations(): ng.IPromise<IStatutHabilitation>;
        /**
         * Renvoie la "Une" de BPCE (une liste de rubriques culture.net)
         */
        getUneBPCE(): ng.IPromise<IRubrique[]>;
    }
}

declare module myway.portail.api.event {
    abstract class PortailEvents {
        static START_URL: string;
        static START_PROCESS: string;
        static START_APPLICATION: string;
        static UPDATE_PROCESS_LIST: string;
        static SWITCH_PROCESS: string;
        static APPLICATION_CONTEXT: string;
        static WRITE_FAVORIS: string;
        static WRITE_LIENS: string;
        static TOGGLE_TOTEM_PORTAIL: string;
        static TOGGLE_LOADER: string;
        static TOGGLE_LOCK_PORTAIL: string;
        static TERMINER_DEBUT_JOURNEE: string;
    }
    abstract class PortailEventOrigins {
        static URL_PORTAIL: string;
    }
}

declare module myway.portail.api.event {
    interface IFrameworkEventListener {
        onEvent: (event: fwkManager.Services.Component.ManagerEvent) => void;
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
    interface IStartApplicationParams {
        /**
         * Identifiant de l'application
         */
        id: string;
        /**
         * Zone de lancement
         */
        zoneId: string;
    }
    interface IStartProcessParams extends IStartProcess {
    }
    interface IStartUrlParams {
        name: string;
        url: string;
    }
    interface IToggleLoaderParams {
        toggle: boolean;
        /**
         * Source à l'origine de la demande (à titre purement indicatif)
         */
        source?: string;
        /**
         * Indicateur de présence d'un background pour bloquer l'IHM (true par défaut)
         */
        background?: boolean;
        /**
         * Le loader ne concerne que l'iframe (true par défaut)
         */
        targetIframe?: boolean;
    }
    interface ISuscribe<T, U> {
        eventName: string;
        request: IRequestFunction<T, U>;
    }
    interface ISuscribeRequestParams<T, U> {
        eventName: string;
        request: event.IRequestFunction<T, U>;
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
        callback?: (data: U) => void;
    }
}

declare module myway.portail.api {
    abstract class EventUtils {
        /**
         * Renvoie le nom de l'évènement par rapport à l'énumération.
         * Le type réel de eventType est MyWay.Services.Component.ManagerEventType.
         * Comme le typage n'est pas possible, on utilise une énumération interne.
         */
        static getManagerEventTypeName(eventType: any): string;
    }
}

declare module myway.portail.api.context {
    class SharedContext {
        private values;
        constructor();
        getValue(key: string): any;
        addValue(key: string, value: any): void;
    }
}

declare module myway.portail.api {
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

declare module myway.portail.api {
    class GuichetService {
        protected $q: ng.IQService;
        protected agentService: core.AgentService;
        protected authentificationService: AuthentificationService;
        protected logger: core.LoggerService;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: core.AgentService, authentificationService: AuthentificationService, logger: core.LoggerService);
        /**
         * Renvoie la liste de codes guichets COCXGU pour le code etablissement passé en param.
         */
        getCodesGuichets(): ng.IPromise<string[]>;
        /**
         * Tentative d'ouverture automatique du guichet. Il faut que:
         * - l'agent a un seul poste fonctionnel
         * - le guichet doit être mémorisé dans ses préférences utilisateur
         */
        tryOpenGuichet(poste: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel): ng.IPromise<void>;
        /**
         * Ouverture du guichet
         * - Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         * - Mise à jour du guichet et des paramètres comptables.
         */
        ouvrirGuichet(codeEtablissement: string, poste: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel, guichet: IGuichetAgent, memoriserGuichet?: boolean): ng.IPromise<any>;
        /**
         * Renvoie le guichet enregistré dans les préférences utilisateur
         */
        getPreferencesGuichet(): ng.IPromise<IGuichetAgent>;
        /**
         * Enregistre le guichet dans les préférences utilisateur
         */
        setPreferencesGuichet(guichetAgent: IGuichetAgent, controleDebutJournee: ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee): ng.IPromise<void>;
        /**
         * Générer la clé d'appel pour lire les données "authentificationInfo" stockées dans le service des préférences.
         * La longueur de cette clé ne doit pas dépasser 32 caractères.
         */
        getKeyPreferencesBureauGuichet(): ng.IPromise<string>;
        /**
         * Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         */
        getControleDebutJournee(codeEtablissement: string, typeFonctionPF: string, identifiantInternePF: number, referenceExterneGuichet: number, identifiantInterneEDSRattPF: number): ng.IPromise<ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee>;
    }
}

declare module myway.portail.api.favori {
    class MigrationFavoriService {
        private $q;
        private logger;
        private preferenceService;
        private favoriV1;
        private favoriV2;
        private categorieV1;
        private categorieV2;
        private lienV1;
        protected MIGRATION_PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, preferenceService: preference.PreferenceService, favoriV1: FavoriPersoInstanceV1, favoriV2: FavoriPersoInstanceV2, categorieV1: CategoriePersoInstanceV1, categorieV2: CategoriePersoInstanceV2, lienV1: lien.LienInstanceV1);
        /**
         * Effectue la migration des favoris.
         * @param context
         * @param overwrite Force la migration même si elle a déjà été faite (les favoris v2 sont d'abord supprimés)
         */
        start(context: api.application.Context, overwrite?: boolean): ng.IPromise<void>;
        /**
         * Migrer les favoris qui sont encore dans l'ancien format (<=18.03)
         */
        private migrerFavoris(context);
        private saveAll(context, suivi);
        /**
         * Log dans la console les favoris v1
         */
        private logFavorisV1();
        /**
         * Migrer les catégories.
         * Si aucune catégorie n'existait, on crée une catégorie par défaut.
         */
        private migrerCategories(applicationContext, suivi);
        /**
         * Migrer les liens favoris.
         * Les liens étaient uniquement des favoris, ils sont maintenant une entité à part entière.
         * Il faut donc recréer les liens qui sont uniquement stockés dans les favoris.
         */
        private migrerLiens(context, suivi);
        /**
         * Migrer les applications favorites.
         */
        private migrerApplications(context, suivi);
        private ajoutFavorisBDR(context, suivi);
        private reset(context);
    }
}

declare module myway.portail.api.lien {
    interface ILien extends preference.IBaseObject<string> {
        /**
         * Titre du lien
         */
        titre: string;
        /**
         * Url du lien
         */
        url: string;
    }
}

declare module myway.portail.api.lien {
    class LienService {
        private $q;
        private $filter;
        private modalService;
        private logger;
        private lienInstance;
        private favoriPersoService;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, modalService: MyWay.UI.IModalService, logger: core.LoggerService, lienInstance: lien.LienInstanceV1, favoriPersoService: favori.FavoriPersoService);
        getList(): ng.IPromise<LienList>;
        /**
         * Renvoie les liens
         */
        getLiens(): ng.IPromise<ILien[]>;
        write(): ng.IPromise<void>;
        editerLien(lien: ILien): ng.IPromise<ILien>;
    }
}

declare module myway.portail.api {
    interface IContexteLisaKeyValue {
        key: string;
        value: string | boolean | number | Object;
        variable: boolean;
        format?: string;
    }
    interface IContexteLisa {
        [key: string]: string | boolean | number | Object;
    }
    interface IScopeContexteLisa {
        auth?: fwkManager.Services.Context.AuthentificationInfo;
        identifiantPersonne?: number;
        libellePersonne?: string;
        dateJour?: Date;
        produit?: any;
    }
}

declare module myway.portail.api {
    class ContexteLisaService {
        private $q;
        private $parse;
        private $interpolate;
        private logger;
        private agentService;
        private entiteTitulaireService;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $interpolate: ng.IInterpolateService, logger: core.LoggerService, agentService: core.AgentService, entiteTitulaireService: entiteTitulaire.EntiteTitulaireService, modalService: MyWay.UI.ModalService);
        getConfigLisa(codeProcessus: string, valeurEntree: number): ng.IPromise<fwkTech.Services.Lisa.ResultBase>;
        /**
         * Renvoie un scope minimal applicable au contexte Lisa.
         * Si un scope est passé en paramètre, il sera enrichi si nécessaire.
         * @param scope Scope optionnel
         */
        getScope(scope?: IScopeContexteLisa): ng.IPromise<IScopeContexteLisa>;
        /**
         * Renvoie un contexte Lisa dynamisé prêt pour le lancement du processus.
         * @param contexte Contexte Lisa provenant de la base de données dont une partie des valeurs sont à remplacer.
         * @param scope Structure qui regroupe toutes les données susceptibles d'être utilisées dans le contexte Lisa.
         */
        getFromObject(contexte: IContexteLisa, scope: IScopeContexteLisa): ParamLisa;
        /**
         * Enrichit le contexte Lisa du processus à démarrer par saisie de l'utilisateur
         * @param param
         * @param codeProcessus
         */
        enrichitContexteLisa(param: ParamLisa, codeProcessus: string): ng.IPromise<void>;
        /**
         * Remplace une valeur de contexte à partir du scope.
         * @param keyValue Structure contenant la clé-valeur.
         * @param scope Structure qui regroupe toutes les données susceptibles d'être utilisées dans le contexte Lisa.
         */
        private linkValue(keyValue, scope);
        /**
         * Renvoie une structure de type clé-valeur sur une clé de contexte Lisa avec des informations sur la partie dynamique si applicable.
         * @param key
         * @param value
         */
        private getKeyValue(key, value);
        /**
         * Renvoie une structure de type clé-valeur sur une clé de contexte Lisa avec des informations sur la partie dynamique.
         * @param key
         * @param value
         */
        private getKeyValueFromVariable(key, value);
    }
}

declare module myway.portail.api {
    abstract class ContexteLisaUtils {
        /**
         * Normalise le contexte LISA pour qu'il soit correctement exploité dans le portail:
         * identifiantPersonne: string sur 9 caractères avec des 0 à gauche
         * @param contexte Contexte LISA
         * @returns contexte normalisé
         */
        static normalize(contexte: fwkManager.Services.Context.IContextKeyValuePair[]): fwkManager.Services.Context.IContextKeyValuePair[];
    }
}

declare module myway.portail.api {
    abstract class ScopeLisa {
        static IDENTIFIANT_PERSONNE: string;
        static IDENTIFIANT_ENTITE_TITULAIRE: string;
        static NUMERO_CHRONO_PROFESSIONNEL: string;
        static LIBELLE_PERSONNE: string;
        static AUTHENTIFICATION_INFOS: string;
        static DATE_JOUR: string;
        static PRODUIT: string;
    }
}

declare namespace myway.portail.api {
    class ParamLisa implements fwkManager.Services.Lisa.IInitialisationData {
        contextArray: fwkManager.Services.Context.IContextKeyValuePair[];
        displayName: string;
        idClient: string;
        idContexteClient: string;
        processusAOuvrirDansUneNouvelleInstance: boolean;
        subProcessCode: string;
        valeurEntree: number;
        /**
         *
         * @param params Objet de clé/valeur pour les paramètres de contexte LISA
         */
        constructor(params?: {
            [key: string]: string;
        });
        /**
         * Ajoute une clé-valeur à placer dans le contexte LISA
         * @param key
         * @param value
         */
        addParam(key: string, value: string): void;
        getParam(key: string): fwkManager.Services.Context.IContextKeyValuePair;
    }
}

declare module myway.portail.api.preference.v1 {
    interface ICategoriePerso {
        id: string;
        titre: string;
        shortTitre: string;
        position: number;
    }
    interface IFavoriPreferences {
        [idCategorie: string]: IFavori[];
    }
    interface IFavori {
        /**
         * Identifiant
         */
        id: string;
        /**
         * Titre du favori
         */
        t: string;
        /**
         * Position
         */
        p: number;
        /**
         * Identifiant de la catégorie
         */
        c_id: string;
        /**
         * Identifiant de l'application
         */
        cApp: string;
        /**
         * Lien du favori
         */
        l: string;
    }
}

declare module myway.portail.api.preference.v2 {
    interface ICategoriePerso {
        id: string;
        titre: string;
        position: number;
    }
    interface IFavori {
        /**
         * Identifiant
         */
        id: string;
        /**
         * Position
         */
        position: number;
        /**
         * Position globale du favori (ne tient pas compte de la catégorie)
         */
        positionGlobale: number;
        /**
         * Identifiant de la catégorie
         */
        idCategorie: string;
        /**
         * Timestamp de fin de nouveauté du favori
         */
        timestampFinNouveaute?: number;
        /**
         * Identifiant de l'application
         */
        idApplication?: string;
        /**
         * Identifiant du lien
         */
        idLien?: string;
    }
}

declare module myway.portail.api.preference.v1 {
    interface ILien {
        /**
         * Identifiant
         */
        id: string;
        /**
         * Titre du lien
         */
        titre: string;
        /**
         * Url du lien
         */
        url: string;
    }
}

declare namespace myway.portail.api.preference {
    /**
     * Classe abstraite d'une entité stockée dans les préférences
     * T correspond au DTO (pas forcément le même typage que le stockage)
     * U est un conteneur de la liste des DTOs
     * V correspond au type stocké dans les préférences
     * W correspond au type de l'identifiant du DTO
     */
    abstract class PreferenceInstance<T extends preference.IBaseObject<W>, U extends modele.ItemList<T, W>, V, W> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: any;
        protected loadPromise: ng.IPromise<void>;
        protected itemContainer: U;
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        initFromContainer(itemContainer: U): void;
        getList(): ng.IPromise<U>;
        /**
         * Vérifie l'intégrité des éléments de la liste et corrige les erreurs quand c'est possible.
         * Si des changements ont été fait, la liste est enregistrée.
         */
        checkIntegrity(): ng.IPromise<void>;
        write(): ng.IPromise<void>;
        deleteAll(): ng.IPromise<void>;
        protected read(): ng.IPromise<T[]>;
        /**
         * Chargement de l'instance pour toutes les données soient accessibles en local
         */
        protected abstract load(): ng.IPromise<void>;
        protected abstract createDTO(item: V): T;
        protected abstract createObjectPreference(dto: T): V;
    }
}

declare namespace myway.portail.api.preference {
    interface IDescripteur {
        timestamp: string;
        countRecords: number;
    }
    const enum StatutEnum {
        ENREGISTRE = 0,
        AJOUTE = 1,
        MODIFIE = 2,
        SUPPRIME = 3,
        ORPHELIN = 4,
    }
    /**
     * Interface de base d'un DTO lié aux préférences utilisateur
     * U correspond au type de l'identifiant de l'entité
     */
    interface IBaseObject<U> {
        /**
         * Identifiant
         */
        id: U;
        statut: StatutEnum;
    }
}

declare module myway.portail.api.preference {
    class PreferenceService {
        private $q;
        private $filter;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: core.AgentService, logger: core.LoggerService);
        readArray<T>(key: string): ng.IPromise<T[]>;
        readObject<T>(key: string): ng.IPromise<T>;
        write<T>(key: string, items: T): ng.IPromise<any>;
        private readDescripteur(key);
        private readData<T>(key, descripteur);
        /**
         * Découpe de la chaine de caractères (string) contenant les données à sauvegarder
         * La limite imposée par le service REST est 500 caractères pour chaque string.
         */
        private splitValue(value);
        private getKeyDescripteur(key);
    }
}

declare namespace myway.portail.api.modele {
    /**
     * Classe abstraite d'une liste d'entités
     * T correspond au type de l'entité
     * U correspond au type de l'identifiant de l'entité
     */
    abstract class ItemList<T extends preference.IBaseObject<U>, U> {
        items: T[];
        private backupItems;
        constructor(items: T[]);
        addAll(items: T[]): void;
        /**
         * Crée un point de sauvegarde de la liste d'objets (copie intégrale des objets de la liste)
         */
        createSavePoint(): void;
        /**
         * Supprime le point de sauvegarde
         */
        deleteSavePoint(): void;
        /**
         * Restaure le point de sauvegarde.
         * Les objets de la liste sauvegardés sont intégralement restitués sans modifier la référence de la liste.
         */
        restoreSavePoint(): void;
        /**
         * Conserve les objets dont la fonction renvoie true (les autres sont supprimés de la liste).
         */
        filteredBy(func: (item: T) => boolean): void;
        /**
         * Supprime les objets dont la fonction renvoie true.
         */
        removeBy(func: (item: T) => boolean): void;
        /**
         * Supprime un élément à partir de son id.
         */
        removeById(id: U): void;
        /**
         * Renvoie le delta entre la liste d'objets et le point de sauvegarde.
         * La comparaison se fait à partir d'une fonction passée en paramètre.
         * @param func Fonction de comparaison qui renvoie true si les 2 éléments sont identiques. Le test sur l'id est intégré et n'a pas besoin d'être inclus.
         */
        getDeltaWithSavePoint(comparator: (item: T, backupItem: T) => boolean): T[];
        /**
         * Renvoie un objet à partir de son id.
         */
        getById(id: U): T;
        /**
         * Renvoie l'index d'un objet à partir de son id.
         */
        getIndexById(id: U): number;
        /**
         * Vérifie l'intégrité des éléments de la liste et corrige les erreurs quand c'est possible.
         * Renvoie true si des changements ont été fait.
         */
        checkIntegrity(): boolean;
        /**
         * Génèrer un id.
         */
        abstract generateItemId(item: T): void;
    }
}

declare module myway.portail.api {
    /**
     * Codes processus LISA
     */
    abstract class CodesProcessus {
        /**
         * Synthèse client
         */
        static SYNTHESE_CLIENT: string;
        /**
         * Service de recherche
         */
        static SERVICE_RECHERCHE: string;
        /**
         * Agenda
         */
        static AGENDA: string;
        /**
         * Identifier une personne
         */
        static IDENTIFICATION_PERSONNE: string;
        /**
         * Classeur Client
         */
        static CLASSEUR_CLIENT: string;
        /**
         * Souscrire une épargne salariale
         */
        static SOUSCRIRE_EPARGNE_SALARIALE: string;
    }
    interface IApplicationPortail {
        name: string;
        url: string;
        code: string;
    }
    abstract class ApplicationPortail {
        static MA_JOURNEE: IApplicationPortail;
        static DEBUT_JOURNEE: IApplicationPortail;
        static MES_FAVORIS: IApplicationPortail;
        static APPLICATIONS: IApplicationPortail;
    }
}

declare module myway.portail.api {
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
        /**
         * Zone de lancement du processus
         */
        idZone?: string;
    }
}

declare module myway.portail.api {
    class DeviceCompatible {
        plateformes: IPlateforme[];
        resolutionMinimaleMyway: boolean;
        ecranTactile: boolean;
        plateformeCompatible: boolean;
        resolutionCompatible: boolean;
        touchCompatible: boolean;
        reseauCompatible: boolean;
        constructor(libelleDeviceCompatible: string);
        selectedPlateformes: core.IPlateforme[];
        testPlateforme(plateforme: core.IPlateforme): boolean;
        /**
         * Indique si l'application est compatible mobilité
         */
        isCompatible: boolean;
        toString(): string;
        private extractValue(chaine, id, defaultValue);
        private getCodesPlateformes(plateformes);
    }
}

declare module myway.portail.api {
    interface IApplicationDevice {
        [codeApplication: string]: DeviceCompatible;
    }
    interface IPlateforme extends core.IPlateforme {
        selected: boolean;
    }
}

declare module myway.portail.api {
    class EdsService {
        private $q;
        private logger;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, agentService: core.AgentService);
        getCaracteristiqueEDS(params: ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
        getCaracteristiqueAgence(params: ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
    }
}

declare namespace myway.portail.api {
    class PortailService {
        private $q;
        private $window;
        private $rootScope;
        private agentService;
        private erreurService;
        private loaderService;
        private logger;
        private applicationService;
        private suscribes;
        private responseDeferred;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, $rootScope: ng.IRootScopeService, agentService: core.AgentService, erreurService: core.ErreurService, loaderService: core.LoaderService, logger: core.LoggerService, applicationService: api.ApplicationService);
        suscribeRequest<T, U>(params: event.ISuscribeRequestParams<T, U>): void;
        sendRequestToIFrames<T>(p: event.ISendRequestParams<T>): void;
        sendRequest<T>(p: event.ISendRequestParams<T>): void;
        sendRequestWithResponse<T, U>(settings: event.ISendRequestSettings<T, U>): ng.IPromise<U>;
        sendResponse<T>(eventName: string, event: MessageEvent, params?: T): void;
        /**
         * Démarrer une URL dans le container du portail.
         */
        startUrl(name: string, url: string): void;
        /**
         * Démarrer une application (processus, application windows ou culture.net...)
         * @param application
         * @param zoneId Id de la zone (cf api.Zone.xxx). Zone portail par défaut
         */
        lancerApplication(application: Application, zoneId?: string): ng.IPromise<boolean>;
        /**
         * Démarrer une synthèse client à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         * @param zoneId Id de la zone (cf api.Zone.xxx). Zone portail par défaut
         */
        lancerSyntheseClient(identifiantPersonne: number, zoneId?: string): ng.IPromise<void>;
        /**
         * Lance un processus LISA avec le client spécifié ou celui du contexte si omis.
         * @param process Processus
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerProcessusClient(process: event.IStartProcessParams, identifiantPersonne?: number): ng.IPromise<void>;
        /**
         * Lance un processus LISA au sein du portail.
         * @param process Processus
         */
        lancerProcessus(process: event.IStartProcessParams): ng.IPromise<void>;
        /**
         * Terminer le processus début de journée.
         */
        terminerDebutJournee(): void;
        /**
         * Récupérer le contexte applicatif
         */
        getApplicationContext(): ng.IPromise<api.application.Context>;
        /**
         * Permuter l'état du loader (activé ou non).
         */
        toggleLoader(settings: event.IToggleLoaderParams): void;
        /**
         * Ouvre ou ferme le totem du portail.
         * @param state Indicateur d'ouverture du totem
         */
        toggleTotem(state: boolean): void;
        /**
         * Verrouille ou déverrouille le portail.
         * @param state Indicateur de vérouillage du portail
         */
        toggleLockPortail(state: boolean): void;
        /**
         * Enregistre les favoris.
         */
        writeFavoris(): ng.IPromise<void>;
        /**
         * Enregistre les liens.
         */
        writeLiens(): ng.IPromise<void>;
        private sharedContext;
        private init();
        private onPortailEvent(e);
    }
}

declare module myway.portail.api {
    class TiersService {
        private $q;
        private logger;
        private modalService;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, modalService: MyWay.UI.IModalService, agentService: core.AgentService);
        getTiersLiesAdministratifs(idPersonne: number): any;
        getRelationEco(idPersonne: number): ng.IPromise<any>;
        getClient(idPersonne: number): ng.IPromise<any>;
        getMedia(idPersonne: number): ng.IPromise<ressources.tiers.media.IListeMedia[]>;
        getIdentification(idPersonne: number): ng.IPromise<ressources.tiers.v1.identification.IIdentification>;
        getSuiviCommercial(identifiantPersonne: number): ng.IPromise<ressources.tiers.identification.ISuiviCommercial>;
        getParticulierInformation(identifiantPersonne: number): ng.IPromise<any>;
        getCorporateInformation(identifiantTiers: number): ng.IPromise<any>;
        getPortefeuille(identifiantPersonne: number): ng.IPromise<ressources.tiers.portefeuille.ITiersPortefeuille>;
    }
}

declare module myway.portail.api {
    class WidgetService {
        private $q;
        private agentService;
        private RECHERCHE_URL;
        private RECHERCHE_JOURNEE_URL;
        private WIDGET_URL;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: core.AgentService);
        rechercherWidgets(): ng.IPromise<ressources.portailmyway.recherchewidget.IWidget[]>;
        rechercherWidgetsJournee(): ng.IPromise<ressources.portailmyway.recherchewidgetjourneefo.IWidget[]>;
        getWidget(identifiantWidget: number, versionMySys: string): ng.IPromise<ressources.portailmyway.widget.IWidget>;
        getNewWidget(): ng.IPromise<ressources.portailmyway.widget.IWidget>;
        enregistrerWidget(widget: ressources.portailmyway.widget.IWidget): ng.IPromise<ressources.portailmyway.widget.IWidget>;
    }
}

declare module myway.portail.api.application {
    class Context {
        applicationList: ApplicationList;
        lienList: lien.LienList;
        favoriList: favori.FavoriPersoList;
        categoriePersoList: favori.CategoriePersoList;
        familleList: FamilleList;
        isAgentBDR: boolean;
        constructor();
        init(): void;
        /**
         * Ajoute les liens et applications aux favoris
         */
        bindFavoris(): void;
    }
}

declare module myway.portail.api {
    class ApplicationList {
        allApplications: Application[];
        static LISTE_ELEMENTS_CONF: IElementConfigurationPortail[];
        static LISTE_ELEMENTS_ZONE: IElementConfigurationZone[];
        static LISTE_ZONE_PORTAIL: IZonePortail[];
        static PLATEFORMES: core.IPlateforme[];
        /**
         * Masque les applications dont la fonction renvoie true
         */
        hideApplication: (app: Application) => boolean;
        /**
         * Grise les applications dont la fonction renvoie true
         */
        fadeApplication: (app: Application) => boolean;
        constructor(allApplications: Application[]);
        applications: Application[];
        preconisationEtablissements: Application[];
        processus: Application[];
        search(text: string): Application[];
        filterByZone(zone: string): Application[];
        filterBy(func: (app: Application) => boolean): Application[];
        getByCodeProcessus(codeProcessus: string, zone?: string): Application;
        getByCodeApplication(codeApplication: string): Application;
        sortByTitreAlpha(applications?: Application[]): void;
    }
}

import IElementConfiguration = myway.ressources.portailmyway.rechercheapplication.IElementConfiguration;
import IZonePortail = myway.ressources.portailmyway.zoneportail.IZonePortail;
import IElementConfigurationZone = myway.ressources.portailmyway.elementconfzone.IElementConfigurationZone;
import IElementConfigurationPortail = myway.ressources.portailmyway.elementconfportail.IElementConfigurationPortail;
declare module myway.portail.api {
    class Application {
        application: ressources.portailmyway.rechercheapplication.IApplication;
        device: DeviceCompatible;
        categorie: string;
        isFavoriMetier: boolean;
        isHabilite: boolean;
        constructor();
        constructor(application: ressources.portailmyway.rechercheapplication.IApplication, device: DeviceCompatible);
        isProcessus: boolean;
        isUrl: boolean;
        codeApplication: string;
        descriptionApplication: string;
        isClient: boolean;
        paramUrls: ressources.portailmyway.rechercheapplication.IApplicationUrlValeur[];
        codeSousFamille: string;
        codeFamilleBDR: string;
        isConteneurMyway: boolean;
        listeElementsConfiguration: IElementConfiguration[];
        motCles: string[];
        getHabilitation(zoneId?: string): string;
        isMultiInstance(zoneId?: string): boolean;
        isVisible(zoneId?: string): boolean;
        isVisibleBDR(zoneId?: string): boolean;
        getLibelleProcessus(zoneId?: string): string;
        getIcone(zoneId?: string): string;
        getCodeProcessus(zoneId?: string): string;
        /**
         * Renvoie true si l'application contient le code processus dans sa configuration (de base ou l'une des zones).
         * @param codeProcessus
         */
        containsCodeProcessus(codeProcessus: string): boolean;
        getValeurEntreeLisa(zoneId?: string): number;
        getContexteEntreeLisa(zoneId?: string): IContexteLisa;
        getAllContexteEntreeLisa(): IContexteLisa[];
        isExclusPersonnePhysique(zoneId?: string): boolean;
        isExclusPersonneMorale(zoneId?: string): boolean;
        isExclusActivitePro(zoneId?: string): boolean;
        isExclusAgentLaHenin(zoneId?: string): boolean;
        /**
         * Renvoie la valeur d'un Ã©lÃ©ment Ã  partir de son id et d'une zone.
         * Si aucune valeur n'a Ã©tÃ© dÃ©finie, on recherche dans les zones parentes.
         * Si toujours rien, on prend la valeur par dÃ©faut dÃ©finie pour la zone (ou ses parentes).
         * @param elementId Identifiant de l'Ã©lÃ©ment
         * @param zoneId Identifiant de la zone
         */
        getValueElementByIdZoneAndIdElement(elementId: string, zoneId: string): any;
        /**
         * Renvoie la valeur d'un Ã©lÃ©ment pour une zone donnÃ©e.
         * Si cette valeur n'est pas dÃ©finie, on remonte dans les zones parentes jusqu'Ã  trouver une valeur.
         * Renvoie null si aucune n'est trouvÃ©e.
         * @param elementId Identifiant de l'Ã©lÃ©ment
         * @param zoneId Identifiant de la zone
         */
        private getValeurElementByIdAndZone(elementId, zoneId);
        /**
         * Renvoie la valeur par dÃ©faut d'un Ã©lÃ©ment pour une zone donnÃ©e.
         * Si cette valeur n'est pas dÃ©finie, on remonte dans les zones parentes jusqu'Ã  trouver une valeur.
         * Renvoie null si aucune n'est trouvÃ©e.
         * @param elementId Identifiant de l'Ã©lÃ©ment
         * @param zoneId Identifiant de la zone
         */
        getValeurDefautByElementAndZone(elementId: string, zoneId: string): IElementConfigurationZone;
        /**
         * Renvoie l'identifiant parent d'une zone.
         * @param zoneId Identifiant de la zone
         */
        private getIdZoneParente(zoneId);
        /**
         * Renvoie un Ã©lÃ©ment de configuration Ã  partir de son id.
         * @param elementId Identifiant de l'Ã©lÃ©ment
         */
        private getElementConfigurationById(elementId);
        /**
         * Cast d'une valeur Ã  partir de son type
         */
        private castValeurElementConfiguration(valeur, typeElement);
    }
}

declare module myway.portail.api {
    abstract class ElementConfiguration {
        /**
         * Habilitation sous forme d''une expression
         */
        static HABILITATION: string;
        /**
         * Le processus peut-il être lancé plusieurs fois (plusieurs instances)
         */
        static MULTI_INSTANCE: string;
        /**
         * Processus affiché ou non
         */
        static VISIBLE: string;
        /**
         * Libellé du processus
         */
        static LIBELLE_PROCESSUS: string;
        /**
         * Code du processus
         */
        static CODE_PROCESSUS: string;
        /**
         * Valeur d'entrée LISA du processus
         */
        static VALEUR_ENTREE_LISA: string;
        /**
         * Contexte d'entrée LISA du processus
         */
        static CONTEXTE_ENTREE_LISA: string;
        /**
         * Icône de l'application
         */
        static ICONE: string;
        /**
         * Exclusion des personnes physiques
         */
        static BDD: string;
        /**
         * Exclusion des personnes morales
         */
        static BDR: string;
        /**
         * Exclusion des personnes physiques disposant d'une activité pro
         */
        static PRO: string;
        /**
         * Exclusion des agents de la hénin
         */
        static HENIN: string;
        /**
         * Afficher le processus uniquement pour un agent BDR
         */
        static AGENT_BDR: string;
    }
    const enum TypeElementConfigurationEnum {
        INTEGER = 1,
        STRING = 2,
        BOOLEAN = 3,
        OBJECT = 4,
        FLOAT = 5,
    }
    const enum TypologieElementConfigurationEnum {
        LISA = 1,
        CLIENT = 2,
        AUTRE = 3,
    }
}

declare module myway.portail.api.application {
    class FamilleList {
        FAMILLE_FAVORIS_METIERS: string;
        FAMILLE_MES_LIENS: string;
        FAMILLE_ALL_APPLICATIONS: string;
        FAMILLE_OTHER_APPLICATIONS: string;
        private familles;
        constructor(familles: myway.ressources.portailmyway.recherchefamille.IFamille[]);
        removeFamillesSpeciales(): void;
        removeByCode(code: string): void;
        addFamilleTout(): void;
        addFamilleAutre(): void;
        addFamillePreconisationsEtablissements(): void;
        addFamilleMesLiens(): void;
        getFamilleDefautBDR(familles: Famille[]): Famille;
        /**
         * Renvoie une liste filtrée des familles à partir des applications fournies et d'un profil agent (BDR ou non).
         * Les familles ou sous-familles vides seront exclues.
         */
        filtrerFamilles(applications: Application[], isAgentBDR: boolean): Famille[];
        private filtrerFamillesBDR(applications);
        private filtrerFamillesBDD(applications);
    }
    class Famille {
        codeFamille: string;
        codeEtablissement: string;
        libelleFamille: string;
        position: number;
        sousFamilles: SousFamille[];
        special: boolean;
        constructor(codeFamille: string, libelleFamille: string);
        constructor(famille: myway.ressources.portailmyway.recherchefamille.IFamille);
        /**
         * Renvoie les applications d'une famille (BDR uniquement)
         */
        getApplications(applications: Application[]): Application[];
        filtrerSousFamillesBDD(applications: Application[]): SousFamille[];
    }
    class SousFamille {
        codeSousFamille: string;
        codeFamille: string;
        libelleSousFamille: string;
        position: number;
        constructor(sousFamille: myway.ressources.portailmyway.recherchefamille.ISousFamille);
        /**
         * Renvoie les applications d'une sous-famille
         */
        getApplications(applications: Application[]): Application[];
    }
}

declare module myway.portail.api {
    abstract class Zone {
        /**
         * Portail Myway
         */
        static PORTAIL: string;
        /**
         * Totem de gauche
         */
        static TOTEM_GAUCHE: string;
        /**
         * Bandeau client
         */
        static BANDEAU_CLIENT: string;
        /**
         * Icônes du bandeau client
         */
        static BANDEAU_CLIENT_ICONE: string;
        /**
         * Liste déroulante du bandeau client
         */
        static BANDEAU_CLIENT_LISTE: string;
        /**
         * Processus et Applications
         */
        static PROCESS_APP: string;
        /**
         * Synthèse client (tuiles)
         */
        static SYNTHESE_CLIENT: string;
    }
}

declare module myway.portail.api.ui.applicationsFavoris {
    class ApplicationsFavorisControleur {
        private $q;
        private $element;
        private notificationService;
        private logger;
        private loaderService;
        private erreurService;
        private applicationService;
        private portailService;
        private lienService;
        private favoriPersoService;
        settings: ISettings;
        mode: ModeEnum;
        favorisSettings: favoris.ISettings;
        applicationsLiensSettings: applicationsLiens.ISettings;
        private onStartApplication;
        private onStartLien;
        static $inject: string[];
        constructor($q: ng.IQService, $element: ng.IAugmentedJQuery, notificationService: MyWay.UI.IMwNotificationService, logger: core.LoggerService, loaderService: core.LoaderService, erreurService: core.ErreurService, applicationService: api.ApplicationService, portailService: api.PortailService, lienService: api.lien.LienService, favoriPersoService: api.favori.FavoriPersoService);
        startApplication(application: Application): void;
        startLien(lien: lien.ILien): void;
        onStartAjoutFavoris(): void;
        onEndAjoutFavoris(cancelled: boolean): void;
        onStartEditionFavoris(): void;
        onEndEditionFavoris(cancelled: boolean): void;
        onStartEditionLiens(): void;
        onEndEditionLiens(cancelled: boolean): void;
        private saveLiens();
    }
}

declare module myway.portail.api.ui.applicationsFavoris {
}

declare module myway.portail.api.ui.applicationsFavoris {
    abstract class DragDropId {
        static ORDONNER_FAVORIS: string;
        static AJOUTER_FAVORIS: string;
    }
    interface IDataTransfer {
        idApplication: string;
        idLien: string;
    }
    interface ISettings {
        titre?: string;
        zone: string;
        categoriePersoList: favori.CategoriePersoList;
        favoriList: favori.FavoriPersoList;
        lienList: lien.LienList;
        applicationList: ApplicationList;
        familleList?: application.FamilleList;
        isAgentBDR: boolean;
    }
    const enum ModeEnum {
        CONSULTATION = 0,
        EDITION_FAVORIS = 1,
        AJOUT_FAVORIS = 2,
        EDITION_LIENS = 3,
    }
    interface IEndActionLocals {
        /**
         * Indicateur d'annulation de l'action de fin
         */
        cancelled: boolean;
    }
    interface IStartApplicationLocals {
        application: Application;
    }
    interface IStartLienLocals {
        lien: lien.ILien;
    }
}

declare namespace myway.portail.api.ui.dragdrop {
    class DragControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $element;
        private $attrs;
        private logger;
        private settings;
        private initDeregisterFunction;
        private isEnabled;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, logger: core.LoggerService);
        private initSettings;
        private onDisableChange;
        private enable();
        private disable();
        private dragStart;
        private dragEnd;
    }
}

declare module myway.portail.api.ui.dragdrop {
    const DIRECTIVE_DRAGGABLE: string;
}

declare module myway.portail.api.ui.dragdrop {
    const DRAGGING_TYPE: string;
    abstract class Events {
        static DRAG_START: string;
        static DRAG_END: string;
    }
    interface IDragStartEventParams {
        dragId: string;
        sourceId: string;
    }
    interface IDragEndEventParams {
        dragId: string;
    }
    interface IEventDataTransfer {
        dragId: string;
        sourceId: string;
    }
    interface IDragSettings {
        /**
         * Identifiant du drag (doit correspondre à un identifiant du drop)
         */
        id: string;
        /**
         * Identifiant de l'objet source (drag)
         */
        sourceId?: () => string;
        /**
         * Indicateur d'ajout d'un curseur main
         */
        cursor?: () => boolean;
        disable?: () => boolean;
    }
    interface IDropSettings {
        onDropAction: (sourceId: string, cibleId: string) => void;
        disable?: () => boolean;
    }
    interface IDropsSettings {
        /**
         * Classe CSS qui permet de mettre en valeur les cibles pour un drop lorsqu'un drag est commencé.
         */
        dropTargetMarkerClass: string;
        /**
         * Identifiant de l'objet cible (drop)
         */
        cibleId?: () => string;
        /**
         * Collection de drop.
         * id: identifiant du drop (doit correspondre à un identifiant de drag)
         */
        drops?: {
            [id: string]: IDropSettings;
        };
    }
}

declare namespace myway.portail.api.ui.dragdrop {
    class DropControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $element;
        private $attrs;
        private logger;
        private settings;
        private initDeregisterFunction;
        private listenerDeregisterFunctions;
        private isEnabled;
        private dragParams;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, logger: core.LoggerService);
        private initSettings;
        private initSettingsWatchers();
        private onDisableChange;
        private enable();
        private disable();
        private onDragStart;
        private onDragEnd;
        private dragenter;
        private dragleave;
        private dragover;
        private drop;
    }
}

declare module myway.portail.api.ui.dragdrop {
    const DIRECTIVE_DROP_TARGET: string;
}

declare module myway.portail.api.ui.sortable {
}

declare module myway.portail.api.ui.sortable {
}

declare module myway.portail.api.ui.applicationsLiens {
    class ApplicationsLiensControleur {
        private $scope;
        private $timeout;
        private $element;
        private $q;
        private logger;
        private loaderService;
        private erreurService;
        private applicationService;
        private portailService;
        private lienService;
        SEACH_TEXT_ID: string;
        PANNEAU_APPLICATIONS_LIENS: string;
        settings: ISettings;
        applications: (Application | lien.ILien)[];
        navigationSettings: ui.navigation.INavigationSettings<application.Famille, application.SousFamille>;
        tuileApplicationLienConfig: ui.tuile.ITuileSettings<Application | lien.ILien>;
        tuileLienConfig: ui.tuile.ITuileSettings<lien.ILien>;
        mode: applicationsFavoris.ModeEnum;
        searchText: string;
        filterLoading: boolean;
        private onStartApplication;
        private onStartLien;
        private onStartAjoutFavoris;
        private onEndAjoutFavoris;
        private onStartEditionLiens;
        private onEndEditionLiens;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $q: ng.IQService, logger: core.LoggerService, loaderService: core.LoaderService, erreurService: core.ErreurService, applicationService: api.ApplicationService, portailService: api.PortailService, lienService: lien.LienService);
        isCategorieTout: boolean;
        isCategorieAutre: boolean;
        isCategorieLiens: boolean;
        isCategorieFavorisMetiers: boolean;
        isCategorieApplications: boolean;
        isEditionLiens: boolean;
        isEditionFavoris: boolean;
        isAjoutFavoris: boolean;
        filtrerApplications(): void;
        selectFamille(famille: application.Famille): void;
        selectSousFamille(sousFamille: application.SousFamille): void;
        startApplication(application: Application): void;
        startLien(lien: lien.ILien): void;
        modifierFavoris(): void;
        annuler(): void;
        enregistrer(): void;
        toggleFavoriApplication(app: Application): void;
        toggleFavoriLien(lien: lien.ILien): void;
        activerEditionLiens(): void;
        ajouterLien(): void;
        modifierLien(lien: lien.ILien): void;
        supprimerLien(lien: lien.ILien): void;
        private initConfigTuiles();
        trierApplications(): void;
        private afficherFilterLoader();
        private isApplication(app);
        private isFavori(app);
        private scrollTop();
    }
}

declare module myway.portail.api.ui.applicationsLiens {
}

declare module myway.portail.api.ui.applicationsLiens {
    interface ISettings {
        searchMode?: boolean;
        titre?: string;
        zone?: string;
        favoriList?: favori.FavoriPersoList;
        applicationList: ApplicationList;
        lienList?: lien.LienList;
        categoriePersoList: favori.CategoriePersoList;
        familleList?: application.FamilleList;
        isAgentBDR: boolean;
        isEdition?: () => boolean;
        /**
         * Indicateur d'ouverture du panneau rétractable
         */
        open?: boolean;
    }
}

declare module myway.portail.api.ui {
    class IconeStatutControleur {
        private $scope;
        private $timeout;
        private $element;
        private $attrs;
        private modalService;
        value: boolean;
        erreur: any;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: ng.IAttributes, modalService: MyWay.UI.IModalService);
        voirErreur(): void;
    }
}

declare module myway.portail.api.ui {
}

declare namespace myway.portail.api.ui.favoris {
    class FavorisControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $element;
        private notificationService;
        private loaderService;
        private erreurService;
        private logger;
        private applicationService;
        private portailService;
        private lienService;
        private favoriPersoService;
        ICONE_FAVORIS: string;
        ICONE_AJOUT_FAVORIS: string;
        settings: ISettings;
        mode: applicationsFavoris.ModeEnum;
        private onStartApplication;
        private onStartLien;
        private onStartModeAjout;
        private onEndModeAjout;
        private onStartModeEdition;
        private onEndModeEdition;
        tuileMetierConfig: ui.tuile.ITuileSettings<ressources.portailmyway.recherchefavori.IFavori>;
        tuilePersoConfig: ui.tuile.ITuileSettings<favori.IFavori>;
        boutonAjouterDropSettings: dragdrop.IDropsSettings;
        globalDropsSettings: dragdrop.IDropsSettings;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, notificationService: MyWay.UI.IMwNotificationService, loaderService: core.LoaderService, erreurService: core.ErreurService, logger: core.LoggerService, applicationService: api.ApplicationService, portailService: api.PortailService, lienService: api.lien.LienService, favoriPersoService: api.favori.FavoriPersoService);
        isEdition: boolean;
        isAjout: boolean;
        isEditionLiens: boolean;
        activerModeEdition(): void;
        activerModeAjout(): void;
        annulerModeEdition(): void;
        enregistrerFavoris(): void;
        startFavori(fav: favori.IFavori): void;
        supprimerFavori(fav: favori.IFavori, index: number): void;
        moveLeft(favori: favori.IFavori, index: number): void;
        moveRight(favori: favori.IFavori, index: number): void;
        private initConfigTuiles();
        private onDropAjout(sourceId, cibleId);
        private onDropDeplace(sourceId, cibleId);
    }
}

declare module myway.portail.api.ui.favoris {
}

declare module myway.portail.api.ui.favoris {
    interface ISettings {
        titre?: string;
        zone?: string;
        favoriList?: favori.FavoriPersoList;
        applicationList: ApplicationList;
        lienList?: lien.LienList;
        categoriePersoList: favori.CategoriePersoList;
        /**
         * Indicateur d'ouverture du panneau rétractable
         */
        open?: boolean;
    }
}

declare module myway.portail.api.ui.navigation {
    class TotemNavigationControleur<T, U> {
        settings: INavigationSettings<T, U>;
        sousChapitreActif: T;
        pageActive: U;
        static $inject: any[];
        constructor();
        sousChapitres: T[];
        selectSousChapitre(sousChapitre: T): void;
        isSousChapitreActif(sousChapitre: T): boolean;
        getIdSousChapitre(sousChapitre: T): string;
        getLibelleSousChapitre(sousChapitre: T): string;
        getSousChapitrePages(sousChapitre: T): U[];
        isPageActive(page: U): boolean;
        getIdPage(page: U): string;
        getLibellePage(page: U): string;
        selectPage(page: U): void;
    }
}

declare module myway.portail.api.ui.navigation {
}

declare module myway.portail.api.ui.navigation {
    interface INavigationItemSettings<T> {
        id: (sousChapitre: T) => string;
        libelle: (sousChapitre: T) => string;
        action?: (page: T) => void;
    }
    interface INavigationSousChapitreSettings<T, U> extends INavigationItemSettings<T> {
        pages?: (sousChapitre: T) => U[];
    }
    interface INavigationPageSettings<U> extends INavigationItemSettings<U> {
    }
    interface INavigationSettings<T, U> {
        sousChapitresSettings: INavigationSousChapitreSettings<T, U>;
        pagesSettings?: INavigationPageSettings<U>;
        sousChapitres?: T[];
        sousChapitreActif?: T;
        pageActive?: U;
    }
}

declare module myway.portail.api.ui.tuile {
    class TuileControleur<T> {
        private $scope;
        private $timeout;
        private $element;
        private $attrs;
        id: string;
        boutonsActions: IBoutonAction<T>[];
        settings: ITuileSettings<T>;
        dragSettings: dragdrop.IDragSettings;
        dropsSettings: dragdrop.IDropsSettings;
        /**
         * Données représentées par la tuile (paramètre d'entrée)
         */
        data: T;
        /**
         * Index de la tuile (paramètre d'entrée optionnel)
         */
        index: number;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: IAttributes);
        isBackdropAction: boolean;
        isMarked: boolean;
        isTextMarked: boolean;
        isIconMarked: boolean;
        isFaded: boolean;
        rootClasses: string[];
        buttonClasses: string[];
        innerButtonClasses: string[];
        nomarkerClasses: string[];
        onClickBackdrop(): void;
        onMainAction(): void;
        onBoutonAction(bouton: IBoutonAction<T>): void;
        private initActions();
        private initDragDrop();
        private initDrag(s);
        private initDrops(s);
    }
}

declare module myway.portail.api.ui.tuile {
}

declare module myway.portail.api.ui.tuile {
    const DROP_TARGET_MARKER_CLASS: string;
    const enum SizeEnum {
        SMALL = 0,
        LARGE = 1,
    }
    interface IAttributes extends ng.IAttributes {
        id: string;
        settings: string;
        data: string;
    }
    interface IActionLocals<T> {
        data: T;
        index: number;
    }
    interface ITuileSettings<T> {
        titre: (data: T, index?: number) => string;
        /**
         * Thème couleur de la tuile: couleur-sombre (par défaut), couleur-rouge, couleur-vert, couleur-jaune
         */
        couleur?: string;
        texteMarquage?: (data: T, index?: number) => string;
        iconeMarquage?: (data: T, index?: number) => string;
        bordureMarquage?: (data: T, index?: number) => boolean;
        /**
         * Indique si la tuile s'affiche de manière estompée (comme grisée mais toujours cliquable)
         */
        isFaded?: (data: T, index?: number) => boolean;
        taille: SizeEnum;
        isEdition?: () => boolean;
        /**
         * Affichage d'un calque transparent sur la tuile en mode édition (false par défaut)
         */
        backdrop?: boolean;
        /**
         * Indicateur d'un effet visuel sur le backdrop pour signaler sa présence (false par défaut)
         */
        backdropOpacity?: boolean;
        /**
         * Action déclenchée lors du click sur la tuile
         */
        onAction?: (data: T, index?: number) => void;
        /**
         * Action déclenchée lors du click sur la tuile en mode édition
         */
        onActionEdition?: (data: T, index?: number) => void;
        /**
         * Action déclenchée lors du click sur le backdrop
         */
        onActionBackdrop?: (data: T, index?: number) => void;
        /**
         * Action 1, située dans le coin haut gauche
         */
        action1?: IAction<T>;
        /**
         * Action 2, située dans le coin haut droit
         */
        action2?: IAction<T>;
        /**
         * Action 3, située dans le coin bas droit
         */
        action3?: IAction<T>;
        /**
         * Action 4, située dans le coin bas gauche
         */
        action4?: IAction<T>;
        /**
         * Action gauche, située au milieu-gauche
         */
        actionGauche?: IAction<T>;
        /**
         * Action droite, située au milieu-droite
         */
        actionDroite?: IAction<T>;
        /**
         * Configuration du drag & drop
         */
        dragDropSettings?: IDragDropSettings<T>;
    }
    interface IAction<T> {
        visible?: (data: T, index?: number) => boolean;
        icone: (data: T, index?: number) => string;
        libelle: (data: T, index?: number) => string;
        action: (data: T, index?: number) => void;
    }
    interface IBoutonAction<T> {
        id: string;
        cssClass: () => string;
        libelle: (data: T) => string;
        visible?: (data: T, index?: number) => boolean;
        onAction?: (data: T, index?: number) => void;
    }
    interface IDragDropSettings<T> {
        /**
         * Fonction qui renvoie l'identifiant de la donnée de la tuile.
         * Doit nécessairement être typé en string.
         */
        dataId?: (data: T) => string;
        isDisabled?: (data: T) => boolean;
        dragSettings?: dragdrop.IDragSettings;
        dropsSettings?: dragdrop.IDropsSettings;
    }
}

declare module myway.portail.api.favori {
    interface ICategoriePerso extends preference.IBaseObject<string> {
        titre: string;
        position: number;
    }
    abstract class CategorieConstantes {
        static NOM_CATEGORIE_DEFAUT: string;
        static NOM_NOUVELLE_CATEGORIE: string;
    }
}

declare module myway.portail.api.favori {
    class CategoriePersoService {
        private $q;
        private logger;
        private categorieInstance;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, categorieInstance: CategoriePersoInstanceV2);
        getList(): ng.IPromise<CategoriePersoList>;
        getCategorieParDefaut(): ng.IPromise<ICategoriePerso>;
        write(): ng.IPromise<void>;
    }
}

declare module myway.portail.api.favori {
}

declare module myway.portail.api.favori {
    class FavoriMetierService {
        private $q;
        private $filter;
        private agentService;
        private preferenceService;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: core.AgentService, preferenceService: preference.PreferenceService);
        /**
         * Recherche les favoris métiers de l'utilisateur.
         */
        getUserFavoris(): ng.IPromise<ressources.portailmyway.recherchefavori.IFavori[]>;
        /**
         * Recherche les catégories métiers de l'utilisateur.
         */
        getUserCategories(): ng.IPromise<ressources.portailmyway.recherchefavori.ICategorieMetier[]>;
        /**
         * Recherche les favoris métiers.
         */
        searchFavorites(params: ressources.portailmyway.recherchefavori.IGetQueryParams): ng.IPromise<ressources.portailmyway.recherchefavori.ICategorieMetier[]>;
        /**
         * Renvoie une catégorie avec ses favoris.
         */
        getCategorie(id: number): ng.IPromise<ressources.portailmyway.recherchefavori.ICategorieMetier>;
    }
}

declare module myway.portail.api.favori {
    const enum TypeFavoriEnum {
        LIEN = 0,
        APPLICATION = 1,
    }
    interface IFavori extends preference.IBaseObject<string> {
        /**
         * Position du favori au sein de sa catégorie
         */
        position: number;
        /**
         * Position globale du favori (ne tient pas compte de la catégorie)
         */
        positionGlobale?: number;
        /**
         * Identifiant de la catégorie
         */
        idCategorie: string;
        /**
         * Type de favori
         */
        type: TypeFavoriEnum;
        /**
         * Identifiant de l'application
         */
        codeApplication?: string;
        /**
         * Id du lien
         */
        idLien?: string;
        /**
         * Timestamp de fin de nouveauté du favori
         */
        timestampFinNouveaute?: number;
        /**
         * Rattachement de l'entité en favori
         */
        lien?: lien.ILien;
        application?: Application;
    }
}

declare module myway.portail.api.favori {
    class FavoriPersoService {
        private $q;
        private logger;
        private favoriInstance;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, favoriInstance: FavoriPersoInstanceV2);
        getList(): ng.IPromise<FavoriPersoList>;
        getFavoris(): ng.IPromise<IFavori[]>;
        getFavorisApplication(): ng.IPromise<IFavori[]>;
        getFavorisLien(): ng.IPromise<IFavori[]>;
        /**
         * Enregistre les favoris
         */
        write(): ng.IPromise<void>;
        logFavoris(): void;
    }
}

declare module myway.portail.api.lien {
    abstract class LienInstance<T> extends preference.PreferenceInstance<ILien, LienList, T, string> {
        protected load(): ng.IPromise<void>;
    }
    class LienList extends modele.ItemList<ILien, string> {
        addLien(titre: string, url: string, id?: string): ILien;
        createLien(titre: string, url: string): ILien;
        generateItemId(item: ILien): void;
    }
}

declare module myway.portail.api.lien {
    class LienInstanceV1 extends LienInstance<preference.v1.ILien> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        protected read(): ng.IPromise<ILien[]>;
        protected createDTO(item: preference.v1.ILien): ILien;
        protected createObjectPreference(dto: ILien): preference.v1.ILien;
    }
}

declare module myway.portail.api.lien {
    class ModaleEditerLienControleur {
        private $modalInstance;
        private erreurService;
        lien: ILien;
        isAjout: boolean;
        urlRegexp: RegExp;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, erreurService: core.ErreurService, lien: ILien);
        titre: string;
        labelBoutonValider: string;
        valider(): void;
    }
}

declare namespace myway.portail.api.favori {
    abstract class CategoriePersoInstance<T> extends preference.PreferenceInstance<ICategoriePerso, CategoriePersoList, T, string> {
        protected load(): ng.IPromise<void>;
    }
    class CategoriePersoList extends modele.ItemList<ICategoriePerso, string> {
        /**
         * Renvoie une catégorie à partir de son id
         */
        getCategorieById(idCategorie: string): ICategoriePerso;
        /**
         * Renvoie la catégorie par défaut
         */
        categorieParDefaut: ICategoriePerso;
        /**
         * Ajoute une catégorie par défaut
         */
        addCategorieParDefaut(): void;
        addCategorie(titre: string): ICategoriePerso;
        createCategorie(titre: string): ICategoriePerso;
        /**
         * Génère une catégorie par défaut
         */
        generateCategorieParDefaut(): ICategoriePerso;
        /**
         * Renvoie la prochaine position disponible.
         */
        getNextAvailablePosition(): number;
        isExistCategorie(idCategorie: string): boolean;
        generateItemId(item: ICategoriePerso): void;
    }
}

declare module myway.portail.api.favori {
    class CategoriePersoInstanceV1 extends CategoriePersoInstance<preference.v1.ICategoriePerso> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        protected read(): ng.IPromise<ICategoriePerso[]>;
        protected createDTO(item: preference.v1.ICategoriePerso): ICategoriePerso;
        protected createObjectPreference(dto: ICategoriePerso): preference.v1.ICategoriePerso;
    }
}

declare module myway.portail.api.favori {
    class CategoriePersoInstanceV2 extends CategoriePersoInstance<preference.v2.ICategoriePerso> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        protected read(): ng.IPromise<ICategoriePerso[]>;
        protected createDTO(item: preference.v2.ICategoriePerso): ICategoriePerso;
        protected createObjectPreference(dto: ICategoriePerso): preference.v2.ICategoriePerso;
    }
}

declare namespace myway.portail.api.favori {
    abstract class FavoriPersoInstance<T> extends preference.PreferenceInstance<IFavori, FavoriPersoList, T, string> {
        protected load(): ng.IPromise<void>;
    }
    class FavoriPersoList extends modele.ItemList<IFavori, string> {
        /**
         * Renvoie les favoris de type application
         */
        favorisApplication: IFavori[];
        /**
         * Renvoie les favoris de type liens
         */
        favorisLien: IFavori[];
        favorisActifs: favori.IFavori[];
        /**
         * Renvoie les favoris d'une catégorie
         */
        getFavorisByCategorieAndByType(idCategorie: string, type: TypeFavoriEnum): IFavori[];
        /**
         * Renvoie les favoris d'une catégorie
         */
        getFavorisByCategorieId(idCategorie: string): IFavori[];
        /**
         * Renvoie un favori à partir d'un code application
         * @param codeApplication
         * @param includeDeleted Inclut les éléments supprimés logiquement (false par défaut)
         */
        getFavoriByCodeApplication(codeApplication: string, includeDeleted?: boolean): IFavori;
        /**
         * Renvoie un favori à partir d'un id lien
         * @param idLien
         * @param includeDeleted Inclut les éléments supprimés logiquement (false par défaut)
         */
        getFavoriByIdLien(idLien: string, includeDeleted?: boolean): IFavori;
        /**
         * Insère un nouveau favori avant le favori cible.
         */
        insertBefore(nouveauFavori: IFavori, favoriCible: IFavori): void;
        /**
         * Déplace la position d'un favori avant celle du favori cible.
         */
        movePositionBefore(source: IFavori, cible: IFavori): void;
        addFavoriApplication(codeApplication: string, idCategorie: string, application?: Application): IFavori;
        removeFavoriApplication(codeApplication: string): void;
        addFavoriLien(idLien: string, idCategorie: string, lien?: lien.ILien): IFavori;
        removeFavoriLien(idLien: string): void;
        /**
         * Basculer le favori d'une application.
         * Si le favori n'existe pas, il est ajouté.
         * Si le favori est supprimé logiquement, il est repositionné à l'état ENREGISTRE
         * Si le favori est à l'état AJOUTE, il est supprimé physiquement de la liste.
         * Si le favori est à l'état ENREGISTRE, il est supprimé logiquement
         * @param app
         * @param idCategorie
         * @returns true si le favori est ajouté, false si supprimé
         */
        toggleFavoriApplication(app: Application, idCategorie: string): boolean;
        /**
         * Basculer le favori d'un lien.
         * Si le favori n'existe pas, il est ajouté.
         * Si le favori est supprimé logiquement, il est repositionné à l'état ENREGISTRE
         * Si le favori est à l'état AJOUTE, il est supprimé physiquement de la liste.
         * Si le favori est à l'état ENREGISTRE, il est supprimé logiquement
         * @param app
         * @param idCategorie
         * @returns true si le favori est ajouté, false si supprimé
         */
        toggleFavoriLien(lien: lien.ILien, idCategorie: string): boolean;
        createFavoriApplication(codeApplication: string, idCategorie: string, application?: Application): IFavori;
        createFavoriLien(idLien: string, idCategorie: string, lien?: lien.ILien): IFavori;
        /**
         * Renvoie la dernière position d'un favori pour une catégorie donnée.
         */
        getLastFavoriPositionForCategorie(idCategorie: string): number;
        /**
         * Renvoie la prochaine position disponible au sein de la catégorie.
         */
        getNextAvailablePosition(idCategorie: string): number;
        /**
         * Renvoie la prochaine position globale disponible.
         */
        getNextAvailableGlobalePosition(): number;
        getFavoriById(idFavori: string): IFavori;
        generateItemId(item: IFavori): void;
        swapFavoris(item1: IFavori, item2: IFavori): void;
    }
}

declare module myway.portail.api.favori {
    class FavoriPersoInstanceV1 extends FavoriPersoInstance<preference.v1.IFavori> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        write(): ng.IPromise<void>;
        protected read(): ng.IPromise<IFavori[]>;
        protected createDTO(favori: preference.v1.IFavori): IFavori;
        protected createObjectPreference(dto: IFavori): preference.v1.IFavori;
    }
}

declare namespace myway.portail.api.favori {
    class FavoriPersoInstanceV2 extends FavoriPersoInstance<preference.v2.IFavori> {
        protected $q: ng.IQService;
        protected preferenceService: preference.PreferenceService;
        protected PREFERENCE_KEY: string;
        static $inject: string[];
        constructor($q: ng.IQService, preferenceService: preference.PreferenceService);
        protected read(): ng.IPromise<IFavori[]>;
        protected createDTO(item: preference.v2.IFavori): IFavori;
        protected createObjectPreference(dto: IFavori): preference.v2.IFavori;
    }
}
