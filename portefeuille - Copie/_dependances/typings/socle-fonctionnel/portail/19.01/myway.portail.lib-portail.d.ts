
declare module myway.portail.api {
    abstract class ServiceNames {
        static Application: string;
        static Authentification: string;
        static Habilitation: string;
        static EntiteTitulaire: string;
        static ContexteClient: string;
        static CultureNet: string;
        static FavoriMetier: string;
        static FavoriPerso: string;
        static MigrationFavori: string;
        static Guichet: string;
        static Lien: string;
        static ContexteLisa: string;
        static MigrationPreference: string;
        static MigrationPreference1803: string;
        static MigrationPreference1806: string;
        static MigrationPreference1811: string;
        static Preference: string;
        static Eds: string;
        static Portail: string;
        static Tiers: string;
        static Widget: string;
        static FavoriPersoV1: string;
        static FavoriPersoV2: string;
        static LienV1: string;
        static Hint: string;
        static Message: string;
        static Token: string;
        static Hook: string;
    }
    abstract class ProviderNames {
    }
    var app: ng.IModule;
    export import Utils = core.Utils;
    export import EdsUtils = core.EdsUtils;
    export import StringUtils = core.StringUtils;
    export import NumberUtils = core.NumberUtils;
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
        protected favoriMetierService: favori.FavoriMetierService;
        protected modalService: MyWay.UI.IModalService;
        private infosMobilitePromise;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: core.AgentService, mobiliteService: core.MobiliteService, logger: core.LoggerService, habilitationService: HabilitationService, favoriPersoService: favori.FavoriPersoService, favoriMetierService: favori.FavoriMetierService, modalService: MyWay.UI.IModalService);
        getFamilles(motClef?: string): ng.IPromise<application.FamilleList>;
        /**
         * Renvoie une liste d'applications auxquelles l'agent est habilité.
         */
        getApplications(applicationParams?: ressources.portailmyway.rechercheapplication.IGetQueryParams, cache?: boolean): ng.IPromise<ApplicationList>;
        rechercheApplications(params: ressources.portailmyway.rechercheapplication.IGetQueryParams, cache?: boolean): ng.IPromise<ressources.portailmyway.rechercheapplication.IApplication[]>;
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
        getVisibilites(): ng.IPromise<IVisibiliteApplication[]>;
        afficherModaleDeviceNonCompatible(): ng.IPromise<any>;
        afficherModaleClientIdentifie(): ng.IPromise<any>;
        afficherModaleProduitIdentifie(): ng.IPromise<any>;
        /**
         * Charger les constantes des éléments de configuration et les zone. Tout est ensuite en statique dans ApplicationList.
         */
        chargerConfigurationElementZone(): ng.IPromise<void>;
        getInfosMobilite(): ng.IPromise<core.IInfosMobilite>;
        /**
         * Renvoie une liste d'applications enrichies.
         */
        private buildApplicationList(apps, codeEtablissement);
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
        getEntitesTitulaires(identifiantPersonne: string): ng.IPromise<ressources.entitetitulaire.recherche.IEntiteTitulaire[]>;
        getInformationEntiteTitulaire(identifiantEntiteTitulaire: string): ng.IPromise<ressources.entitetitulaire.informationEntiteTitulaire.IInformationEntiteTitulaire>;
        selectEntiteTitulaire(identifiantPersonne: string, identifiantProfessionnel: boolean): ng.IPromise<ISelectEntiteTitulaireResult>;
    }
}

declare module myway.portail.api {
}

declare namespace myway.portail.api.entiteTitulaire {
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
        onSelectionChange(entite: ressources.entitetitulaire.recherche.IEntiteTitulaire): void;
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
        /**
         * Url de base de lancement d'une rubrique Culture Net
         */
        static URL_CULTURE_NET: string;
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
        indicateurChargement: boolean;
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
        nomFamille: string;
        prenom: string;
        codeCapaciteJuridique: string;
        codeCategorieSocioProf: string;
        numeroSIREN: string;
        indicateurActiviteProfessionnel: boolean;
        dateDeces: string;
        codeMarche: string;
        constructor(contextId: string, identifiantPersonne?: number);
        libelleTypeRelation: string;
        personneProtegee: boolean;
        designationLongue: string;
        libelleCourt: string;
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
        indicateurSyntheseClient: string;
        indicateurChargement: string;
        indicateurSynchroSynthese: string;
        designationCourte: string;
        codeCivilite: string;
        nomUsage: string;
        nomFamille: string;
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
        codeMarche: string;
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
        getIdClientFromContext(contextId: string): ng.IPromise<string>;
        /**
         * Renvoie l'ensemble des processus attachés à un contexte client
         *
         * @param contextId Identifiant du contexte client.
         * @return Liste des ids des processus
         */
        getAttachedProcessIdFromContext(contextId: string): string[];
        /**
         * Modifie le mode du contexte client (AUTOMATIQUE ou MANUEL).
         * @param contextId Id du contexte client
         * @param mode Mode
         */
        setContextMode(contextId: string, mode: fwkManager.Services.ContexteClient.Messages.ContexteClientMode): void;
        /**
         * Renvoie le contexte client du processus courant.
         */
        getCurrentContext(): ng.IPromise<any>;
        /**
         * Définit le contexte client du processus courant.
         */
        setCurrentContext(context: any): ng.IPromise<boolean>;
        /**
         * Définit une propriété dans le contexte client du processus courant.
         */
        setCurrentContextProperty(key: string, value: any): ng.IPromise<boolean>;
        /**
         * Met à jour le contexte client à partir des données fournies.
         * @param contextId Id du contexte client
         * @param contexteClientData Données du contexte client
         */
        setContexteClientData(contextId: string, contexteClientData: ContexteClientData): ng.IPromise<ContexteClientData>;
        /**
         * Enrichit et met à jour les données du contexte client par l'appel de certains services.
         * @param contextId Id du contexte client. Ce paramètre peut-être null dans le cas d'une SPA vu qu'on utilisera le contexte client courant.
         * @param contexteClientData Données du contexte client
         * @param options Options pour indiquer les infos à consolider. Si omis, toutes les infos sont consolidées.
         *        Si les options sont partiellement définies, celles non définies ne sont pas consolidées.
         *        Les infos d'identification sont systématiquement consolidées elles sont un prérequis pour tout le reste.
         */
        consolidationContexteClient(contextId: string, contexteClientData: ContexteClientData, options?: IConsolidationContexteClientOptions): ng.IPromise<ContexteClientData>;
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
         * Renvoie true si le client est défini dans le contexte (présence d'un contexte client et identifiant personne affecté).
         * @param identifiantPersonne Identifiant de la personne
         */
        isClientDefined(identifiantPersonne: string | number): ng.IPromise<boolean>;
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
         * Renvoie le contexte client à partir de son id.
         * @param contextId Id du contexte client
         */
        getContexteClientData(contextId: string): ng.IPromise<ContexteClientData>;
        /**
         * Renvoie tous les contextes client.
         */
        getAllClients(): ng.IPromise<ContexteClientData[]>;
        /**
         * Renvoie l'indicateur synchro-synthèse du contexte client courant.
         */
        getIndicateurSynchroSynthese(): ng.IPromise<IndicateurSynchroSyntheseEnum>;
        /**
         * Met à jour l'indicateur synchro-synthèse dans le contexte client courant.
         * @param indicateur Valeur de l'indicateur.
         */
        setIndicateurSynchroSynthese(indicateur: IndicateurSynchroSyntheseEnum): ng.IPromise<boolean>;
        getIndicateurChargement(): ng.IPromise<boolean>;
        setIndicateurChargement(indicateur: boolean): ng.IPromise<boolean>;
        setIndicateurSyntheseClient(indicateur: boolean): ng.IPromise<boolean>;
        /**
         * Log le contenu des contextes clients
         */
        logInfosContextes(): void;
        private consoliderInfosIdentification(contexteClientData, promises);
        private consoliderInfosTiers(contexteClientData, promises);
        private consoliderEDS(contexteClientData, promises);
        private extractStringFromPath(path, data);
        private extractBooleanFromPath(path, data);
    }
}

declare namespace myway.portail.api.culturenet {
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

declare namespace myway.portail.api.culturenet {
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
        /**
         * Renvoie la "Une" de BPCE (une liste de rubriques culture.net)
         */
        getUneBPCE(): ng.IPromise<IRubrique[]>;
    }
}

declare module myway.portail.api.event {
    interface IFrameworkEventListener {
        onEvent: (event: fwkManager.Services.Component.ManagerEvent) => void;
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

declare module myway.portail.api.guichet {
    interface IGuichetAgent {
        /**
         * Identifiant interne du poste fonctionnel de l'agent
         */
        idPosteFonctionnel: number;
        /**
         * Guichet interbancaire
         */
        guichetInterbancaire: string;
        /**
         * Coordonnées du bureau-guichet
         */
        coordonneeGuichet: IBureauGuichet;
        /**
         * Identifiant interne de l'EDS de rattachement du bureau-guichet
         */
        idEdsRattachement: number;
        /**
         * Libellé de l'EDS de rattachement du bureau-guichet
         */
        libelleEdsRattachement: string;
    }
    interface IBureauGuichet {
        /**
         * Identifiant interne du bureau-guichet
         */
        idEds: number;
        /**
         * Référence externe du bureau-guichet
         */
        referenceExterne: number;
        /**
         * Référence externe du bureau-guichet (uniquement utilisée pour la saisie)
         */
        referenceExterneInput: string;
    }
    interface IInfosGuichetComptables {
        guichetEtGuichetDebutJournee: string;
        edsTypeRattachementGuichetComptable: string;
        libelleEdsRattachementGuichetComptable: string;
    }
}

declare namespace myway.portail.api.guichet {
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
         * Tentative d'ouverture automatique du guichet.
         * Il faut que l'agent ait déjà fait une connexion avec l'un de ses postes fonctionnels sur l'établissement courant.
         */
        tryOpenGuichet(postes: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel[]): ng.IPromise<void>;
        /**
         * Ouverture du guichet
         * - Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         * - Mise à jour du guichet et des paramètres comptables.
         */
        ouvrirGuichet(codeEtablissement: string, poste: ressources.structure.posteFonctionnelAgent.IInformationPosteFonctionnel, guichet: IGuichetAgent): ng.IPromise<any>;
        /**
         * Renvoie le guichet enregistré dans les préférences utilisateur
         */
        getPreferencesGuichet(): ng.IPromise<IGuichetAgent>;
        /**
         * Enregistre le guichet dans les préférences utilisateur
         */
        setPreferencesGuichet(guichetAgent: IGuichetAgent, controleDebutJournee: ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee): ng.IPromise<void>;
        /**
         * Contrôler le droit de l'agent connecté à travailler sur le guichet choisi et à accéder aux applications financières.
         */
        getControleDebutJournee(codeEtablissement: string, typeFonctionPF: string, identifiantInternePF: number, referenceExterneGuichet: number, identifiantInterneEDSRattPF: number): ng.IPromise<ressources.encaisseagenceservice.ctrlDebutJournee.IControleDebutJournee>;
        /**
         * Générer la clé qui sert à stocker le guichet-poste fonctionnel dans les préférences utilisateur.
         * La longueur de cette clé ne doit pas dépasser 32 caractères.
         */
        private getKeyPreferencesBureauGuichet();
    }
}

declare module myway.portail.api.hint {
}

declare namespace myway.portail.api.hint {
    interface IHint {
        key: HintKeyEnum;
        text: string;
        offset?: number;
        viewed?: boolean;
    }
    enum HintKeyEnum {
        STORE_DRAG_DROP = 0,
    }
    var HINTS: IHint[];
}

declare namespace myway.portail.api.hint {
    class HintService {
        private $q;
        private notificationService;
        private modalService;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, notificationService: MyWay.UI.IMwNotificationService, modalService: MyWay.UI.IModalService, agentService: core.AgentService, logger: core.LoggerService);
        show(key: HintKeyEnum): void;
        showModaleStoreFavori(): ng.IPromise<void>;
        showModaleStoreCatalogue(): ng.IPromise<void>;
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
        /**
         *  Lancer dans le container du Portail ou dans une autre fenêtre
         */
        containerPortail?: string;
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
    class ContexteLisaKeyValue {
        key: string;
        variable: boolean;
        format: string;
        private _value;
        constructor(key: string, value: string | boolean | number | Object, variable?: boolean);
        value: string | boolean | number | Object;
        private formatValue(value);
        private formatString(value, length);
    }
    interface IContexteLisa {
        [key: string]: string | boolean | number | Object;
    }
    class ContexteLisa {
        private contexte;
        keyValues: ContexteLisaKeyValue[];
        constructor(contexte: IContexteLisa);
        identifiantPersonne: string;
        /**
         * Renvoie true si la clé existe et a une valeur indéfinie ou nulle
         */
        isUndefined(key: string): boolean;
        get(key: string): ContexteLisaKeyValue;
        getValue(key: string): string | boolean | number | Object;
        set(key: string, value: string | boolean | number | Object): void;
        /**
         * Renvoie une structure de type clé-valeur sur une clé de contexte Lisa avec des informations sur la partie dynamique si applicable.
         */
        private getKeyValue(key);
        /**
         * Renvoie une structure de type clé-valeur sur une clé de contexte Lisa avec des informations sur la partie dynamique.
         * @param key
         * @param value
         */
        private getKeyValueFromVariable(key);
        private getOrderedKeys();
    }
    interface IScopeContexteLisa {
        auth?: fwkManager.Services.Context.AuthentificationInfo;
        guichet?: fwkManager.Services.Context.ParametresComptables;
        identifiantPersonne?: number;
        libellePersonne?: string;
        codePersonnaliteJuridique?: string;
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
        private tokenService;
        private entiteTitulaireService;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $interpolate: ng.IInterpolateService, logger: core.LoggerService, agentService: core.AgentService, tokenService: token.TokenService, entiteTitulaireService: entiteTitulaire.EntiteTitulaireService);
        getParamLisaFromString(value: string): ParamLisa;
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
        getFromObject(contexte: IContexteLisa, scope: IScopeContexteLisa): ng.IPromise<ParamLisa>;
        private getIdentifiantPersonne(contexte);
        private getEntiteTitulaire(contexte);
        /**
         * Remplace une valeur de contexte à partir du scope.
         * @param keyValue Structure contenant la clé-valeur.
         * @param scope Structure qui regroupe toutes les données susceptibles d'être utilisées dans le contexte Lisa.
         */
        private linkValue(keyValue, scope);
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
        static PARAMETRES_COMPTABLES: string;
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

declare namespace myway.portail.api.Media.Constantes {
    namespace Angular {
        const $q: string;
    }
    namespace MyWay {
        const modalService: string;
    }
    namespace Services {
        const personneService: string;
        const mediaService: string;
        const agentService: string;
    }
    namespace UrlRest {
        const urlTiersMedia: string;
        const urlETAdresse: string;
    }
    namespace Controleur {
        const ctrlTemplateUrl: string;
        const ctrlName: string;
        const ctrlAs: string;
    }
    namespace Medias {
        const codeDistributionNPAI: string;
    }
}

declare namespace myway.portail.api.Media.Modeles {
    abstract class Media {
        indicateurPreference: boolean;
        private libelleTypeMedia;
        private libelleTypeUsageMedia;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string);
        libelle: string;
    }
    class Telephone extends Media {
        isMobile: boolean;
        numero: string;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string, referenceAcces: string, isMobile: boolean);
    }
    class Mail extends Media {
        mail: string;
        constructor(indicateurPref: boolean, libelleType: string, libelleTypeUsage: string, referenceAcces: string);
    }
    class IAdresse {
        ligne1adresseAfnor: string;
        ligne2adresseAfnor: string;
        ligne3adresseAfnor: string;
        ligne4adresseAfnor: string;
        ligne5adresseAfnor: string;
        ligne6adresseAfnor: string;
        npai: boolean;
    }
}

declare namespace myway.portail.api.Media {
    class MediaControleur {
        private $modalInstance;
        private medias;
        private identifiantPersonne;
        private adresse;
        title: string;
        telephones: Modeles.Telephone[];
        mails: Modeles.Mail[];
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, medias: Modeles.Media[], identifiantPersonne: number, libellePersonne: string, adresse: Modeles.IAdresse);
        closeModale(): void;
    }
}

declare namespace myway.portail.api.Media {
    class MediaService {
        private modalService;
        private $q;
        private personneRestService;
        private agentService;
        static $inject: string[];
        constructor(modalService: MyWay.UI.IModalService, $q: ng.IQService, personneRestService: IPersonneService, agentService: myway.core.AgentService);
        ouvrirModaleMedias(identifiantPersonne: number, libellePersonne: string): ng.IPromise<any>;
        getMedias(idPersonne: number): ng.IPromise<Modeles.Media[]>;
        getAdressePostale(idPersonne: number): ng.IPromise<Modeles.IAdresse>;
    }
}

declare namespace myway.portail.api.message {
    var DOMAINE: string;
    class MessageNames {
        static START_URL: string;
        static START_URL_WITH_PARAMS: string;
        static START_PROCESS: string;
        static STOP_CURRENT_PROCESS: string;
        static START_APPLICATION: string;
        static START_STORE: string;
        static SWITCH_PROCESS: string;
        static START_SYNTHESE_CLIENT: string;
        static START_CONNAISSANCE_CLIENT_PART: string;
        static START_CONNAISSANCE_CLIENT_PRO: string;
        static APPLICATION_CONTEXT: string;
        static USER_PREFERENCES: string;
        static RELOAD_APPLICATION_CONTEXT: string;
        static RESET_FAVORIS_APPLICATION: string;
        static CHECK_PRECONISATIONS_ETABLISSEMENTS: string;
        static IS_VUE_CLIENT: string;
        static SET_VUE_CLIENT: string;
        static CHANGEMENT_VUE: string;
        static WRITE_FAVORIS: string;
        static WRITE_LIENS: string;
        static TOGGLE_TOTEM_PORTAIL: string;
        static TOGGLE_LOADER: string;
        static TOGGLE_LOCK_PORTAIL: string;
        static TERMINER_DEBUT_JOURNEE: string;
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
    interface IStartSyntheseClient {
        identifiantPersonne: number;
        codePersonnaliteJuridique?: string;
    }
    interface IStartConnaissanceClient {
        identifiantPersonne: number;
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
}

declare namespace myway.portail.api.message {
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

declare namespace myway.portail.api.message {
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
        constructor($q: ng.IQService, $window: ng.IWindowService, $rootScope: ng.IRootScopeService, agentService: myway.core.AgentService, erreurService: myway.core.ErreurService, loaderService: myway.core.loader.LoaderService, logger: myway.core.LoggerService);
        private sharedContext;
        subscribeRequest<T, U>(params: ISubscribeRequestParams<T, U>): void;
        sendRequestToIFrames<T>(p: ISendRequestParams<T>): void;
        sendRequest<T>(p: ISendRequestParams<T>): void;
        sendRequestWithResponse<T, U>(settings: ISendRequestSettings<T, U>): ng.IPromise<U>;
        sendResponse<T>(eventName: string, event: MessageEvent, params?: T): void;
        init(): void;
        onMessageEvent(e: MessageEvent, data: IPostMessageEvent<any>): void;
    }
}

declare module myway.portail.api.message {
    class SharedContext {
        private values;
        constructor();
        getValue(key: string): any;
        addValue(key: string, value: any): void;
    }
}

declare namespace myway.portail.api {
    class DeviceCompatible {
        private codeVisibiliteApplication;
        plateformes: IPlateforme[];
        resolutionMinimaleMyway: boolean;
        ecranTactile: boolean;
        plateformeCompatible: boolean;
        resolutionCompatible: boolean;
        touchCompatible: boolean;
        reseauCompatible: boolean;
        constructor(libelleDeviceCompatible: string, codeVisibiliteApplication: ressources.portailmyway.rechercheapplication.VisibiliteApplicationEnum);
        selectedPlateformes: core.IPlateforme[];
        testPlateforme(plateforme: core.IPlateforme): boolean;
        init(infos: core.IInfosMobilite): void;
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
        /**
         * Indique si des entités ont été ajoutées, modifiées, ou supprimées physiquement
         */
        hasPendingModifications: boolean;
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

declare module myway.portail.api.preference.v1 {
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
         * Contexte de lancement du favori (store, client, produit)
         */
        contexteLancement: application.ContexteLancementEnum;
        /**
         * Statut du favoris
         */
        statut: StatutEnum;
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
        /**
         * Lancement dans container Portail ou non
         */
        containerPortail?: string;
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
        SAVED = 1,
        SOFT_DELETED = 2,
        HARD_DELETED = 3,
        CREATED = 4,
        MODIFIED = 5,
        ORPHAN = 6,
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

declare namespace myway.portail.api.preference {
    class PreferenceService {
        private $q;
        private $filter;
        private agentService;
        private logger;
        private USER_PREFERENCES_KEY;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: core.AgentService, logger: core.LoggerService);
        getUserPreferences(): ng.IPromise<IUserPreferences>;
        writeUserPreferences(preferences: IUserPreferences): ng.IPromise<IUserPreferences>;
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

declare namespace myway.portail.api.preference {
    interface IUserPreferences {
        /**
         * Version des préférences
         */
        version: UserPreferenceVersion;
        /**
         * Affichage des catégories dans le store
         */
        afficherCategorieStore: boolean;
        /**
         * Filtrage des applications préconisées dans le catalogue du store
         */
        filtrerPrecoStore: boolean;
        /**
         * Vue du store (défaut, favoris, ou catalogue)
         */
        vueStore: ui.applicationsFavoris.ViewEnum;
    }
    const DEFAULT_USER_PREFERENCES: IUserPreferences;
    interface IGuichetPreferences {
        codeEtablissement: string;
        numeroStationTravail: string;
        guichetAgent: guichet.IGuichetAgent;
    }
    const enum UserPreferenceVersion {
        V1803 = 1803,
        V1806 = 1806,
        V1811 = 1811,
    }
}

declare module myway.portail.api {
    /**
     * Codes processus LISA
     */
    abstract class CodesProcessus {
        /**
         * Synthèse client Tous marchés
         */
        static SYNTHESE_CLIENT: string;
        /**
         * Synthèse client Personne Morale
         */
        static SYNTHESE_CLIENT_PM: string;
        /**
         * Connaissance client particulier
         */
        static CONNAISSANCE_CLIENT_PART: string;
        /**
         * Connaissance client pro
         */
        static CONNAISSANCE_CLIENT_PRO: string;
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
        static STORE: IApplicationPortail;
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
        /**
         * Indicateur d'un contexte lisa customisé
         */
        isCustomContexteLisa?: boolean;
    }
}

declare module myway.portail.api {
    class EdsService {
        private $q;
        private logger;
        private agentService;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, agentService: core.AgentService);
        getEtablissementMysys(params?: ressources.structure.etablissementmysys.IGetQueryParams): ng.IPromise<ressources.structure.etablissementmysys.IEtablissement[]>;
        getCaracteristiqueEDS(params: ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
        getCaracteristiqueAgence(params: ressources.structure.caracteristiqueeds.IGetQueryParams): ng.IPromise<ressources.structure.caracteristiqueeds.ICaracteristiqueEDS>;
    }
}

declare module myway.portail.api.service {
    class HookService {
        private $q;
        private hook;
        static $inject: string[];
        constructor($q: ng.IQService);
        setHook(hook: () => ng.IPromise<void>): void;
        clearHook(): void;
        getHook(): ng.IPromise<void>;
    }
}

declare namespace myway.portail.api {
    /**
     * Ce service permet à un processus de communiquer avec le Portal MyWay.
     * Pour des raisons de simplicité, c'est l'unique moyen de communication mis à disposition tout comme le serviceAgent pour le framework client.
     */
    class PortailService {
        private $q;
        private $window;
        private $rootScope;
        private agentService;
        private erreurService;
        private loaderService;
        private logger;
        private messageService;
        private applicationService;
        private tiersService;
        static $inject: string[];
        constructor($q: ng.IQService, $window: ng.IWindowService, $rootScope: ng.IRootScopeService, agentService: core.AgentService, erreurService: core.ErreurService, loaderService: core.loader.LoaderService, logger: core.LoggerService, messageService: message.MessageService, applicationService: ApplicationService, tiersService: TiersService);
        /**
         * Démarrer une URL dans le container du portail.
         */
        startUrl(name: string, url: string): void;
        /**
         * Démarrer une URL avec enrichissement de token dans le container du portail.
         */
        startUrlWithParams(name: string, url: string): void;
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
        lancerSyntheseClient(identifiantPersonne: number, codePersonnaliteJuridique?: string): ng.IPromise<void>;
        /**
         * Démarrer une synthèse client PP à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerSyntheseClientPersonnePhysique(identifiantPersonne: number): ng.IPromise<void>;
        /**
         * Démarrer une synthèse client PM à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerSyntheseClientPersonneMorale(identifiantPersonne: number): ng.IPromise<void>;
        /**
         * Démarrer une connaissance client part à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerConnaissanceClientPersonnePhysique(identifiantPersonne: number): ng.IPromise<void>;
        /**
         * Démarrer une connaissance client pro à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerConnaissanceClientPersonneMorale(identifiantPersonne: number): ng.IPromise<void>;
        /**
         * Lance un processus LISA avec le client spécifié ou celui du contexte si omis.
         * @param process Processus
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerProcessusClient(process: message.IStartProcessParams, identifiantPersonne?: number): ng.IPromise<void>;
        /**
         * Lance un processus LISA au sein du portail.
         * @param process Processus
         */
        lancerProcessus(process: message.IStartProcessParams): ng.IPromise<void>;
        /**
         * Lance le store du portail.
         */
        lancerStore(): void;
        /**
         * Terminer le processus début de journée.
         */
        terminerDebutJournee(): void;
        /**
         * Récupérer le contexte applicatif
         */
        getApplicationContext(): ng.IPromise<api.application.Context>;
        /**
         * Indique si la vue actuelle du portail est celle orientée client.
         */
        isVueClient(): ng.IPromise<boolean>;
        /**
         * Définit la vue affichée (client ou non).
         */
        setVueClient(etat: boolean): ng.IPromise<void>;
        onChangementVue(func: (isVueClient: boolean) => void): void;
        /**
         * Renvoie les préférences de l'utilisateur
         */
        getUserPreferences(): ng.IPromise<api.preference.IUserPreferences>;
        /**
         * Réinitialise les favoris de type application
         */
        resetFavorisApplication(): ng.IPromise<void>;
        /**
         * Recharge le contexte applicatif (permet d'outre-passer le cache dans le cas de maj externes côté base de données)
         */
        reloadApplicationContext(): ng.IPromise<void>;
        /**
         * Vérifies que les préconisations établissement (favoris métier) sont bien intégrées dans les favoris persos de l'agent.
         * Elles sont ajoutées le cas échéant.
         */
        checkPreconisationsEtablissements(): ng.IPromise<void>;
        /**
         * Permuter l'état du loader (activé ou non).
         */
        toggleLoader(settings: message.IToggleLoaderParams): void;
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

declare namespace myway.portail.api.token {
    class TokenService {
        private $q;
        private $parse;
        private $interpolate;
        private logger;
        private agentService;
        private TOKENS;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $interpolate: ng.IInterpolateService, logger: core.LoggerService, agentService: core.AgentService);
        /**
         * Remplace les tokens d'environnement
         * @param value valeur pouvant contenir des tokens d'environnement
         */
        replaceEnvironmentTokens(value: string): ng.IPromise<string>;
        /**
         * Remplace les tokens contextuels à partir du scope
         * @param value valeur pouvant contenir des tokens contextuels
         * @param scope Structure qui regroupe toutes les données susceptibles d'être utilisées dans le contexte Lisa.
         */
        replaceScopeTokens(value: string, scope: IScopeContexteLisa): string;
        private formatEnvironmentToken(token);
        private formatScopeToken(token);
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

declare namespace myway.portail.api.application {
    class Context {
        applicationList: ApplicationList;
        lienList: lien.LienList;
        favoriList: favori.FavoriPersoList;
        familleList: FamilleList;
        isAgentBDR: boolean;
        isVueClient: boolean;
        /**
         * Préférences de l'utilisateur
         */
        userPreferences: preference.IUserPreferences;
        constructor();
        init(): void;
        /**
         * Ajoute les liens et applications aux favoris
         */
        bindFavoris(): void;
        getLibelleCategorieApplication(app: Application): string;
    }
}

declare namespace myway.portail.api {
    const enum ApplicationSearchTypeEnum {
        NORMAL = 0,
        TECHNICAL = 1,
    }
    const enum ApplicationSortEnum {
        LIBELLE = 0,
        PERTINENCE = 1,
    }
    interface IApplicationSearchParams {
        onlyApplicationsPreconisees?: boolean;
        includeNonHabilite?: boolean;
        byCodeApplication?: boolean;
        byCodeProcessus?: boolean;
        byLibelle?: boolean;
        byMotsCles?: boolean;
        sort?: ApplicationSortEnum;
    }
    interface ICategorieApplications {
        categorie: application.Famille;
        applications: Application[];
        applicationsPartials?: Application[];
        visible: boolean;
    }
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
        /**
         * Applications personnelles
         */
        lienList: lien.LienList;
        applicationsPersonnelles: Application[];
        constructor(allApplications: Application[]);
        applications: Application[];
        preconisationEtablissements: Application[];
        preconisationEtablissementsToFavoris: Application[];
        processus: Application[];
        generateApplicationsPersonnelles(): Application[];
        sortAndGroupByCategories(applications: Application[], categories: application.Famille[]): ICategorieApplications[];
        search(text: string, params?: IApplicationSearchParams): Application[];
        filterByZone(zone: string): Application[];
        filterBy(func: (app: Application) => boolean): Application[];
        getByCodeProcessus(codeProcessus: string, zone?: string): Application;
        getByCodeApplication(codeApplication: string): Application;
        sortByLibelle(applications?: Application[]): Application[];
        sortByPertinence(applications?: Application[]): Application[];
    }
}

import IElementConfiguration = myway.ressources.portailmyway.rechercheapplication.IElementConfiguration;
import IZonePortail = myway.ressources.portailmyway.zoneportail.IZonePortail;
import IElementConfigurationZone = myway.ressources.portailmyway.elementconfzone.IElementConfigurationZone;
import IElementConfigurationPortail = myway.ressources.portailmyway.elementconfportail.IElementConfigurationPortail;
declare namespace myway.portail.api {
    const enum OrigineApplicationEnum {
        PUBLIC = 0,
        PERSONNELLE = 1,
    }
    interface IQueryParams {
        [key: string]: any;
    }
    class Application {
        application: ressources.portailmyway.rechercheapplication.IApplication;
        device: DeviceCompatible;
        isFavoriMetier: boolean;
        pushToFavoris: boolean;
        isHabilite: boolean;
        visibilite: IVisibiliteApplication;
        origine: OrigineApplicationEnum;
        constructor();
        constructor(application: ressources.portailmyway.rechercheapplication.IApplication, device: DeviceCompatible);
        ordreCompteur: number;
        getUrlCompteur(zoneId: string): string;
        getQueryParamsCompteur(zoneId: string): IQueryParams;
        getLibelleCompteur(zoneId: string): string;
        isVueClient: boolean;
        isPersonnelle: boolean;
        isEtablissement: boolean;
        isProcessus: boolean;
        isUrl: boolean;
        codeApplication: string;
        descriptionApplication: string;
        isAfficherBoutonFermer: boolean;
        isClient: boolean;
        paramUrls: ressources.portailmyway.rechercheapplication.IApplicationUrlValeur[];
        codeFamille: string;
        isConteneurMyway: boolean;
        listeElementsConfiguration: IElementConfiguration[];
        motCles: string[];
        libelleType: string;
        isVisibleStore: boolean;
        isVisibleBandeauClientIcone: boolean;
        isVisibleStoreContextuelClient: boolean;
        isContextuelClient: boolean;
        isContextuelProduit: boolean;
        getHabilitation(zoneId?: string): string;
        isVisible(zoneId?: string): boolean;
        getLibelleProcessus(zoneId?: string): string;
        getIcone(zoneId?: string): string;
        getCodeProcessus(zoneId?: string): string;
        getOrdre(zoneId?: string): number;
        /**
         * Renvoie true si l'application contient le code processus dans sa configuration (de base ou l'une des zones).
         * @param codeProcessus
         */
        containsCodeProcessus(codeProcessus: string): boolean;
        getValeurEntreeLisa(zoneId?: string): number;
        getContexteEntreeLisa(zoneId?: string): IContexteLisa;
        hasContexteEntreeLisa(zoneId?: string): boolean;
        getAllContexteEntreeLisa(): IContexteLisa[];
        isExclusPersonnePhysique(zoneId?: string): boolean;
        isExclusPersonneMorale(zoneId?: string): boolean;
        isExclusActivitePro(zoneId?: string): boolean;
        isExclusAgentLaHenin(zoneId?: string): boolean;
        /**
         * Renvoie la valeur d'un élément à partir de son id et d'une zone.
         * Si aucune valeur n'a été définie, on recherche dans les zones parentes.
         * Si toujours rien, on prend la valeur par défaut définie pour la zone (ou ses parentes).
         * @param elementId Identifiant de l'élément
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
         * Renvoie un élément de configuration à partir de son id.
         * @param elementId Identifiant de l'élément
         */
        private getElementConfigurationById(elementId);
        /**
         * Cast d'une valeur Ã  partir de son type
         */
        private castValeurElementConfiguration(valeur, typeElement);
    }
}

declare namespace myway.portail.api.application {
    const enum ContexteLancementEnum {
        STORE = 0,
        CLIENT = 1,
        PRODUIT = 2,
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
         * Ordre
         */
        static ORDRE: string;
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
        /**
         * Url du service pour le compteur
         */
        static URL_COMPTEUR: string;
        /**
         * Query params pour le service du compteur
         */
        static QUERY_PARAMS_CPT: string;
        /**
         * Libellé du compteur
         */
        static LIBELLE_COMPTEUR: string;
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

declare namespace myway.portail.api.application {
    interface IFamilleFilterParams {
        onlyApplicationsPreconisees?: boolean;
    }
    class Famille {
        codeFamille: string;
        codeEtablissement: string;
        libelleFamille: string;
        position: number;
        hidden: boolean;
        constructor(codeFamille: string, libelleFamille: string, position: number, hidden: boolean);
        constructor(famille: ressources.portailmyway.recherchefamille.ISousFamille);
        /**
         * Renvoie les applications d'une famille
         */
        getApplications(applications: Application[]): Application[];
    }
    class FamilleList {
        static FAMILLE_APPLI_PERSO: Famille;
        static FAMILLE_NON_AFFECTE: Famille;
        familles: Famille[];
        constructor(sousFamilles: ressources.portailmyway.recherchefamille.ISousFamille[]);
        /**
         * Renvoie une liste filtrée des familles à partir des applications fournies.
         * Les familles non rattachées à des applications seront exclues sauf si le flag alwaysVisible vaut true
         */
        filtrerFamilles(applications: Application[], params?: IFamilleFilterParams): Famille[];
    }
}

declare module myway.portail.api {
    interface IVisibiliteApplication {
        code: myway.ressources.portailmyway.rechercheapplication.VisibiliteApplicationEnum;
        libelle: string;
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
         * Store du bandeau client
         */
        static BANDEAU_CLIENT_STORE: string;
        /**
         * My Store
         */
        static PROCESS_APP: string;
        /**
         * Synthèse client (tuiles)
         */
        static SYNTHESE_CLIENT: string;
        static MA_JOURNEE: string;
        /**
         * Section Infos de ma journée
         */
        static MA_JOURNEE_INFOS: string;
        /**
         * Section Compteurs de ma journée
         */
        static MA_JOURNEE_COMPTEURS: string;
        /**
         * Ma journée (compteur)
         */
        static COMPTEUR1: string;
        /**
         * Ma journée (compteur)
         */
        static COMPTEUR2: string;
    }
}

declare namespace myway.portail.api.ui.applicationsCatalogue {
    class ApplicationsCatalogueControleur {
        private $scope;
        private $timeout;
        private $q;
        private $element;
        private notificationService;
        private logger;
        private preferenceService;
        private lienService;
        CONTENEUR_CATALOGUE_ID: string;
        SEACH_TEXT_ID: string;
        SEARCH_TEXT_MINLENGTH: number;
        private INFINITE_SCROLL_NUMBER;
        settings: ISettings;
        applications: Application[];
        categorieApplications: ICategorieApplications[];
        categories: application.Famille[];
        navigationSettings: ui.navigation.ISettings<application.Famille>;
        filtreCategorieSettings: ui.IBoutonMenuContextuelSettings;
        boutonAjouterAppliPersoSettings: ui.tuile.ITuileActionSettings;
        /**
         * Utilisé pour afficher les catégories sur plusieurs colonnes
         */
        colonnesCategories: number[];
        tuileApplicationConfig: ui.tuile.ITuileEditableSettings<Application>;
        tuileAppliPersoConfig: ui.tuile.ITuileEditableSettings<Application>;
        corbeilleDropsSettings: dragdrop.IDropsSettings;
        editionDropsSettings: dragdrop.IDropsSettings;
        mode: applicationsFavoris.ModeEnum;
        searchText: string;
        afficherCategories: boolean;
        afficherAppliPerso: boolean;
        filtrerPrecos: boolean;
        private onStartApplication;
        private onStartEdition;
        private onCancelEdition;
        private onUpdate;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $q: ng.IQService, $element: ng.IAugmentedJQuery, notificationService: MyWay.UI.IMwNotificationService, logger: core.LoggerService, preferenceService: preference.PreferenceService, lienService: lien.LienService);
        hasPrecos: boolean;
        titre: string;
        isMaxView: boolean;
        isMinView: boolean;
        isConsultation: boolean;
        isEditionCatalogue: boolean;
        isAjoutFavoris: boolean;
        isEditionAppliPerso: boolean;
        allCategories: boolean;
        isTotemNavigation: boolean;
        isActiveSearch: boolean;
        searchTextMinLength: number;
        nombreResultatRecherche: string;
        libelleFiltreCategorie: string;
        libelleCategorieEnCours: string;
        applicationsPersonnelles: Application[];
        toggleView(): void;
        toggleAppliPerso(): void;
        gererAppliPerso(): void;
        afficherAide(): void;
        annuler(): void;
        enregistrer(): void;
        setHeight(): void;
        getCategorieApplicationsParColonne(colonne: number): ICategorieApplications[];
        isFirstCategorieAffichee(index: number): boolean;
        toggleAllCategories(): void;
        getApplicationsByCategorie(ca: ICategorieApplications): Application[];
        loadMore(): void;
        clearFilters(): void;
        onChangeSearchText(): void;
        ajouterAppliPerso(): void;
        modifierAppliPerso(id: string): ng.IPromise<void>;
        supprimerAppliPerso(id: string): ng.IPromise<void>;
        private onDropModifierAppliPerso(sourceId);
        private onDropSupprimerAppliPerso(sourceId);
        onSelectCategorie(): void;
        onAfficherCategories(): void;
        onFiltrerPrecos(): void;
        refreshApplications(applications: Application[], categorieApplications: ICategorieApplications[]): void;
        startApplication(application: Application): void;
        private initTotemNavigation();
        private initFiltres();
        private initConfigTuiles();
        private initConfigTuilesApplications();
        private initConfigTuilesApplicationsPersonnelles();
        /**
         * Scroll top la liste les tuiles
         */
        private scrollTop();
        private initApplicationsPersonnelles();
    }
}

declare module myway.portail.api.ui.applicationsCatalogue {
}

declare module myway.portail.api.ui.applicationsCatalogue {
    interface ISettings {
        searchMode?: boolean;
        titre?: string;
        zone?: string;
        contexteLancement: application.ContexteLancementEnum;
        favoriList?: favori.FavoriPersoList;
        applicationList: ApplicationList;
        familleList?: application.FamilleList;
        isEdition?: () => boolean;
        userPreferences: preference.IUserPreferences;
        heights?: applicationsFavoris.Heights;
    }
}

declare module myway.portail.api.ui.applicationsFavoris {
    class ApplicationsFavorisControleur {
        private $q;
        private $element;
        private $scope;
        private notificationService;
        private modalService;
        private logger;
        private loaderService;
        private erreurService;
        private applicationService;
        private portailService;
        private lienService;
        private favoriPersoService;
        private hintService;
        private hookService;
        settings: ISettings;
        mode: ModeEnum;
        favorisSettings: favoris.ISettings;
        applicationsCatalogueSettings: applicationsCatalogue.ISettings;
        private onStartApplication;
        private onStartLien;
        private previousVueStore;
        static $inject: string[];
        constructor($q: ng.IQService, $element: ng.IAugmentedJQuery, $scope: ng.IScope, notificationService: MyWay.UI.IMwNotificationService, modalService: MyWay.UI.IModalService, logger: core.LoggerService, loaderService: core.loader.LoaderService, erreurService: core.ErreurService, applicationService: ApplicationService, portailService: PortailService, lienService: lien.LienService, favoriPersoService: favori.FavoriPersoService, hintService: hint.HintService, hookService: service.HookService);
        startApplication(application: Application): void;
        startLien(lien: lien.ILien): void;
        onStartEdition(mode: ModeEnum): void;
        onCancelEdition(): void;
        onUpdate(): void;
        private saveFavorisEtLiens();
        private toggleLockPortail(value);
        private resize();
    }
}

declare module myway.portail.api.ui.applicationsFavoris {
}

declare module myway.portail.api.ui.applicationsFavoris {
    abstract class DragDropId {
        static FAVORIS: string;
        static CATALOGUE: string;
    }
    interface IDataTransfer {
        idApplication: string;
        idLien: string;
    }
    interface ISettings {
        zone: string;
        contexteLancement: application.ContexteLancementEnum;
        favoriList: favori.FavoriPersoList;
        lienList: lien.LienList;
        applicationList: ApplicationList;
        familleList: application.FamilleList;
        userPreferences: preference.IUserPreferences;
        /**
         * Hauteur en pixel non disponible.
         * Le store calcule les hauteurs par rapport au viewport diminué de cette hauteur.
         */
        unavailableHeight?: number;
    }
    interface IHeights {
        height: () => number;
        heightFavoris?: number;
        heightCatalogue?: number;
    }
    class Heights {
        private containerHeight;
        private vue;
        /**
         * Hauteur de la section tuile des favoris
         */
        favorisHeight: number;
        /**
         * Hauteur filler des favoris (inclus le titre du panel, les filtres éventuels, et les marges hautes et basses)
         */
        private FAVORIS_FILLER_HEIGHT;
        constructor(containerHeight: () => number, vue: () => ViewEnum);
        /**
         * Hauteur maximum de la section tuile des favoris
         */
        favorisMaxHeight: number;
        /**
         * Hauteur maximum de la section tuile du catalogue
         */
        catalogueMaxHeight: number;
    }
    const enum ModeEnum {
        CONSULTATION = 0,
        AJOUT_FAVORIS = 1,
        EDITION_FAVORIS = 2,
        EDITION_LIENS = 3,
    }
    const enum ViewEnum {
        DEFAUT = 0,
        FAVORIS = 1,
        CATALOGUE = 2,
    }
    interface IStartEditionLocals {
        mode: ModeEnum;
    }
    interface IStartApplicationLocals {
        application: Application;
    }
    interface IStartLienLocals {
        lien: lien.ILien;
    }
}

declare module myway.portail.api.ui.applicationsFavoris {
    abstract class ApplicationUtils {
        /**
         * Renvoie l'icône correspondant au contexte de lancement d'une application:
         * - store : générique, pas d'icône
         * - client: icône client, itce-undefined
         * - produit: icône synthèse client, itce-product-category-circle
         */
        static getIconeContexteLancementApplication(app: Application): string;
        /**
         * Renvoie l'icône correspondant au contexte de lancement d'une application:
         * - store : générique, pas d'icône
         * - client: icône client, itce-undefined
         * - produit: icône synthèse client, itce-product-category-circle
         */
        static getIconeContexteLancementApplicationByZone(app: Application, zoneId: string): string;
    }
}

declare namespace myway.portail.api.ui {
}

declare module myway.portail.api.ui {
}

declare module myway.portail.api.ui {
    interface IBoutonMenuContextuelSettings {
        /**
         * Id du bouton
         */
        id: string;
        /**
         * Libellé du bouton
         */
        libelle?: () => string;
        /**
         * Icône du bouton
         */
        icone?: () => string;
        /**
         * Affiche l'icône et le texte (false par défaut)
         */
        showIconAndText?: boolean;
        /**
         * Style du bouton : principal, secondaire, zone ou contextuel
         */
        modele?: string;
        /**
         * Désactivation du bouton
         */
        disabled?: () => boolean;
        /**
         * Indicateur d'ouverture du menu contextuel
         */
        ouvert?: boolean;
        /**
         * La popup est ouverte au dessus du bouton toggle (en dessous par défaut)
         */
        topDirection?: boolean;
        /**
         * La popup est aligné sur la droite du bouton toggle (à gauche par défaut)
         */
        rightAlign?: boolean;
        /**
         * Affichage d'un badge de type compteur en haut à droite du bouton
         */
        compteur?: () => number;
        /**
         * Activation du mouseOver pour l'ouverture du menu (false par défaut)
         */
        mouseOver?: boolean;
        /**
         * Permet de changer la largeur par défaut du menu contextuel
         */
        width?: string;
        /**
         * Désactivé pour le moment, ne pas utiliser !
         */
        height?: string;
    }
    const enum DirectionEnum {
        LEFT = 0,
        RIGHT = 1,
        UP = 2,
        DOWN = 3,
    }
    const enum VerticalPositionEnum {
        NONE = 0,
        TOP = 1,
        BOTTOM = 2,
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
        disableOnDrag?: (sourceId: string) => boolean;
    }
    interface IDropsSettings {
        /**
         * Classe CSS qui permet de mettre en valeur les cibles pour un drop lorsqu'un drag est commencé.
         */
        dropTargetMarkerClass: string;
        /**
         * Classe CSS qui permet de mettre en valeur l'élément sur lequel on effectue un mouse over.
         */
        dropTargetMouseOverClass?: string;
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

declare module myway.portail.api.ui {
    class PortailDropdownController {
        private $scope;
        private $timeout;
        private $attrs;
        private $parse;
        private $animate;
        private $element;
        private $document;
        private hookService;
        /**
         * Used with bootstrap css: .open>.dropdown-menu { display: block; }
         * dropdown-menu is not displayed by default
         */
        private OPEN_CLASS;
        isOpen: boolean;
        toggleElement: ng.IAugmentedJQuery;
        private getIsOpen;
        private setIsOpen;
        private toggleInvoker;
        private openInvoker;
        /**
         * Indique s'il faut fermer la dropdown lorsqu'une action est exécutée à l'extérieur (oui par défaut)
         */
        private getExternalClose;
        private externalClose;
        /**
         * Indique s'il faut fermer la dropdown lorsque la touche échap est activée (oui par défaut)
         */
        private getEscapeClose;
        private escapeClose;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $attrs: IDirectiveDropdownAttributes, $parse: ng.IParseService, $animate: ng.IAnimateService, $element: ng.IAugmentedJQuery, $document: ng.IDocumentService, hookService: service.HookService);
        /**
         * Bascule d'ouverture-fermeture de la dropdown
         */
        toggle(): void;
        private focusToggleElement();
        private watcherIsOpen;
        private open();
        private close();
        /**
         * Ferme la dropdown sur un clic externe (hormis une modale bootstrap)
         */
        private closeDropdown;
        private escapeKeyBind;
    }
}

declare module myway.portail.api.ui {
    interface IDirectiveDropdownAttributes extends ng.IAttributes {
        onToggle: string;
        isOpen: string;
        onOpen: string;
        externalClose: string;
        escapeClose: string;
        onClose: string;
    }
    interface IDirectiveDropdownToggleAttributes extends ng.IAttributes {
        disabled: string;
    }
}

declare namespace myway.portail.api.ui.favoris {
    class FavorisControleur {
        private $scope;
        private $timeout;
        private $element;
        private notificationService;
        private logger;
        private preferenceService;
        CONTENEUR_FAVORIS_ID: string;
        settings: ISettings;
        mode: applicationsFavoris.ModeEnum;
        private onStartApplication;
        private onStartLien;
        private onStartEdition;
        private onCancelEdition;
        private onUpdate;
        tuilePersoConfig: ui.tuile.ITuileEditableSettings<favori.IFavori>;
        boutonActionSettings: ui.IBoutonMenuContextuelSettings;
        boutonAjouterSettings: ui.tuile.ITuileActionSettings;
        conteneurFavorisDropsSettings: dragdrop.IDropsSettings;
        corbeilleDropsSettings: dragdrop.IDropsSettings;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, notificationService: MyWay.UI.IMwNotificationService, logger: core.LoggerService, preferenceService: api.preference.PreferenceService);
        isMaxView: boolean;
        isMinView: boolean;
        favoris: favori.IFavori[];
        isEdition: boolean;
        isAjout: boolean;
        toggleView(): void;
        setHeight(): void;
        gerer(): void;
        basculerModeAjout(): void;
        annuler(): void;
        enregistrer(): void;
        afficherAide(): void;
        startFavori(fav: favori.IFavori): void;
        supprimerFavori(fav: favori.IFavori): void;
        moveLeft(favori: favori.IFavori, index: number): void;
        moveRight(favori: favori.IFavori, index: number): void;
        private onDropAjout(sourceId, cibleId);
        private onDropSuppression(sourceId);
        private onDropDeplace(sourceId, cibleId);
        private initConfigTuiles();
        private initDragDrops();
    }
}

declare module myway.portail.api.ui.favoris {
}

declare module myway.portail.api.ui.favoris {
    interface ISettings {
        titre?: string;
        zone?: string;
        contexteLancement: application.ContexteLancementEnum;
        favoriList?: favori.FavoriPersoList;
        applicationList: ApplicationList;
        lienList?: lien.LienList;
        userPreferences: preference.IUserPreferences;
        heights?: applicationsFavoris.Heights;
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

declare module myway.portail.api.ui.navigation {
    class TotemNavigationControleur<T> {
        private $scope;
        private logger;
        settings: ISettings<T>;
        static $inject: string[];
        constructor($scope: ng.IScope, logger: core.LoggerService);
        selectItem(item: T): void;
        getIdItem(item: T): string;
        getLibelleItem(item: T): string;
        isItemActive(item: T): boolean;
    }
}

declare module myway.portail.api.ui.navigation {
}

declare module myway.portail.api.ui.navigation {
    interface IItemSettings<T> {
        id: (item: T) => string;
        libelle: (item: T) => string;
        action?: (item: T) => void;
    }
    interface ISettings<T> {
        itemSettings?: IItemSettings<T>;
        items?: T[];
        activeItem?: T;
    }
}

declare module myway.portail.api.ui.tuile {
    class TuileActionControleur {
        private $scope;
        private $timeout;
        private $element;
        private $attrs;
        id: string;
        settings: ITuileActionSettings;
        static $inject: string[];
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $element: ng.IAugmentedJQuery, $attrs: IAttributes);
        titre: string;
        icone: string;
        buttonClasses: string[];
    }
}

declare module myway.portail.api.ui.tuile {
}

declare module myway.portail.api.ui.tuile {
    interface ITuileActionSettings {
        titre: () => string;
        icone?: () => string;
        /**
         * Taille de la tuile (moyenne par défaut)
         */
        taille?: SizeEnum;
        /**
         * Action déclenchée lors du click sur la tuile
         */
        onAction?: () => void;
        dropsSettings?: dragdrop.IDropsSettings;
    }
}

declare module myway.portail.api.ui.tuile {
    class TuileControleur<T> {
        protected $scope: ng.IScope;
        protected $timeout: ng.ITimeoutService;
        protected $element: ng.IAugmentedJQuery;
        protected $attrs: IAttributes;
        id: string;
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
        titre: string;
        texteMarquage: string;
        bordureMarquage: boolean;
        iconeMarquage: string;
        iconeTopRight: string;
        iconeBottomLeft: string;
        iconeBottomRight: string;
        isMarked: boolean;
        isFaded: boolean;
        rootClasses: string[];
        buttonClasses: string[];
        onMainAction(): void;
        onBoutonAction(bouton: IBoutonAction<T>): void;
        private initSettings();
        private initDragDrop();
        private initDrag(s);
        private initDrops(s);
    }
}

declare module myway.portail.api.ui.tuile {
}

declare module myway.portail.api.ui.tuile {
    interface ITuileSettings<T> {
        titre: (data: T, index?: number) => string;
        /**
         * Thème couleur de la tuile: couleur-defaut (par défaut), couleur-rouge, couleur-vert, couleur-jaune
         */
        couleur?: string;
        /**
         * Texte de marquage affiché en haut à gauche
         */
        texteMarquage?: (data: T, index?: number) => string;
        /**
         * Icône de marquage affichée en haut à gauche
         */
        iconeMarquage?: (data: T, index?: number) => string;
        /**
         * Indicateur de marquage de la tuile via une bordure gauche
         */
        bordureMarquage?: (data: T, index?: number) => boolean;
        /**
         * Icône affichée en haut à droite
         */
        iconeTopRight?: (data: T, index?: number) => string;
        /**
         * Icône affichée en bas à droite
         */
        iconeBottomRight?: (data: T, index?: number) => string;
        /**
         * Icône affichée en bas à gauche
         */
        iconeBottomLeft?: (data: T, index?: number) => string;
        /**
         * Indique si la tuile s'affiche de manière estompée (comme grisée mais toujours cliquable)
         */
        isFaded?: (data: T, index?: number) => boolean;
        /**
         * Taille de la tuile (moyenne par défaut)
         */
        taille?: SizeEnum;
        /**
         * Action déclenchée lors du click sur la tuile
         */
        onAction?: (data: T, index?: number) => void;
        /**
         * Configuration du drag & drop
         */
        dragDropSettings?: IDragDropSettings<T>;
    }
    const DROP_TARGET_MARKER_CLASS: string;
    const enum SizeEnum {
        MEDIUM = 0,
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

declare module myway.portail.api.ui.tuile {
    class TuileEditableControleur<T> {
        private $scope;
        private $timeout;
        private $element;
        private $attrs;
        id: string;
        boutonsActions: IBoutonAction<T>[];
        settings: ITuileEditableSettings<T>;
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
        titre: string;
        texteMarquage: string;
        bordureMarquage: boolean;
        iconeMarquage: string;
        iconeTopRight: string;
        iconeBottomLeft: string;
        iconeBottomRight: string;
        isBackdropAction: boolean;
        isMarked: boolean;
        isFaded: boolean;
        rootClasses: string[];
        buttonClasses: string[];
        onClickBackdrop(): void;
        onMainAction(): void;
        onBoutonAction(bouton: IBoutonAction<T>): void;
        private initSettings();
        private initActions();
        private initDragDrop();
        private initDrag(s);
        private initDrops(s);
    }
}

declare module myway.portail.api.ui.tuile {
}

declare module myway.portail.api.ui.tuile {
    interface ITuileEditableSettings<T> extends ITuileSettings<T> {
        /**
         * Indique si la tuile est en mode édition (non par défaut)
         */
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
         * Action gauche, située au milieu-gauche. Dans le cas d'une petite taille, c'est le coin bas gauche (même localisation que l'action 4)
         */
        actionGauche?: IAction<T>;
        /**
         * Action droite, située au milieu-droite. Dans le cas d'une petite taille, c'est le coin bas droit (même localisation que l'action 3)
         */
        actionDroite?: IAction<T>;
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
}

declare namespace myway.portail.api.ui.lanceur {
    /**
     * Contexte de lancement multiple (ex: VARIO, SYNTH_PART, SYNTH_PRO)
     */
    abstract class ContexteLancement {
        /**
         * Synthèse client Part/Pro
         */
        static SYNTHESE_CLIENT_PART: string;
        /**
         * Synthèse client BDR
         */
        static SYNTHESE_CLIENT_PM: string;
        /**
         * Synthèse vario
         */
        static SYNTHESE_VARIO: string;
    }
}

declare namespace myway.portail.api.ui.lanceur {
    class VoletLancementMultiple {
        private $scope;
        private $q;
        private $element;
        private portailService;
        donneesProcessus: IDonneesApplication[];
        voletOuvert: boolean;
        contexte: string;
        tabIndex: string;
        private onStartApplication;
        static $inject: string[];
        constructor($scope: ng.IScope, $q: ng.IQService, $element: ng.IAugmentedJQuery, portailService: PortailService);
        debrancherApplication(lancementApp: IDonneesApplication): void;
    }
}

declare module myway.portail.api.ui.lanceur {
}

declare module myway.portail.api.ui.lanceur {
    interface IDonneesApplication {
        contexte?: string;
        codeProcessus?: string;
        titre?: string;
        habilitation?: string;
        cleBascule1?: string;
        cleBascule2?: string;
        paramsLisa?: {
            [key: string]: string;
        };
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
         * Position du favori
         */
        position: number;
        /**
         * Contexte de lancement du favori (store, client, produit)
         */
        contexteLancement: application.ContexteLancementEnum;
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

declare namespace myway.portail.api.favori {
    class FavoriPersoService {
        private $q;
        private modalService;
        private notificationService;
        private logger;
        private favoriInstance;
        private migrationService;
        static $inject: string[];
        constructor($q: ng.IQService, modalService: MyWay.UI.IModalService, notificationService: MyWay.UI.IMwNotificationService, logger: core.LoggerService, favoriInstance: FavoriPersoInstanceV2, migrationService: MigrationPreference1811Service);
        getList(): ng.IPromise<FavoriPersoList>;
        resetFavorisApplication(): ng.IPromise<void>;
        /**
         * Enregistre les favoris
         */
        write(): ng.IPromise<void>;
        logFavoris(): void;
    }
}

declare namespace myway.portail.api.lien {
    abstract class LienInstance<T> extends preference.PreferenceInstance<ILien, LienList, T, string> {
        protected load(): ng.IPromise<void>;
    }
    class LienList extends modele.ItemList<ILien, string> {
        getByUrl(url: string): ILien;
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
        afficherAide(): void;
        valider(): void;
    }
}

declare namespace myway.portail.api.Media.Modeles {
    interface IMedia {
        identificationPersonne: IIdentificationPersonne;
        listeMedia: Array<IListeMedia>;
    }
    interface IIdentificationPersonne {
        /**
         * Identifiant d'un Etablissement du RCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le  SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identifiantPersonne: number;
    }
    interface IListeMedia {
        /**
         * '01'       Téléphone fixe
         * '02'       Téléphone mobile
         * '03'       E-mail
         * '04'       Fax
         * '05'       SiteWeb
         */
        codeTypeMedia: string;
        /**
         * libellé type média
         */
        libelleTypeMedia: string;
        /**
         * 'P'        Personnel
         * 'T'        Professionnel
         * 'A'       Sécurisation Opérations en Ligne (SOL)
         */
        codeTypeUsageMedia: string;
        /**
         * libellé type usage média
         */
        libelleTypeUsageMedia: string;
        /**
         * ‘O’        Oui
         * ‘N’        Non
         */
        indicateurPreferenceMedia: boolean;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
        /**
         * Indique si le client accepte d'être contacté par ce moyen de contact (Mail, téléphone).
         * Valeurs possibles :
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurOptin: boolean;
        /**
         * commentaire d'un numero de telephone
         */
        commentaire: string;
        /**
         * Code indicatif téléphone international
         */
        indicatifTelephone: string;
        /**
         * Un téléphone défini comme étant sécurisé est celui qui sera utilisé pour les transactions en ligne, les opérations sécurisées...
         * 'O'        Oui
         * 'N'        Non
         */
        indicateurSecu: boolean;
        /**
         * Option choisie par le client pro pour refuser de recevoir des informations commerciales par SMS, fax ou mail (ensemble des média)
         * '0'        envoi commercial par SMS, fax ou mail
         * '1'        pas d'envoi commercial par SMS, fax ou mail
         */
        indicateurProOptout: boolean;
        /**
         * Option choisie par le client pour recevoir des informations commerciales par SMS ou fax.
         * '0'        envoi commercial par SMS ou fax
         * '1'        pas d'envoi commercial par SMS ou fax
         */
        indicateurSmsFax: boolean;
    }
    interface IAdresse {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantAgent: number;
        typePersonne: string;
        agenceRattachement: number;
        codeQualiteAgent: string;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        libelleTypeAdresse: string;
        codePostalPTT: string;
        codeInseePays: string;
        codeISOPays: string;
        libelleISOPays: string;
        codeInseeLocalite: string;
        libelleInseeLocalite: string;
        codeRetourDistribution: string;
        codeValiditeAdresseUNIVERS: string;
        indicateurEnvoiCourrier: string;
        libelleEnvoiCourrier: string;
        indicateurDifferencePostaleFiscale: string;
        libelleDifferencePostaleFiscale: string;
        ligne1AdresseAFNOR: string;
        ligne2AdresseAFNOR: string;
        ligne3AdresseAFNOR: string;
        ligne4AdresseAFNOR: string;
        ligne5AdresseAFNOR: string;
        ligne6AdresseAFNOR: string;
        ligne7AdresseAFNOR: string;
        numeroVoiePTT: number;
        codeQuartier: string;
        numeroTourneeFacteur: number;
        numeroTelephoneAdresse: string;
        codeExistenceListeRouge: string;
        numeroFax: string;
        codeAccesMinitel: string;
        indicateurDetentionTelephone: string;
        commentaireTelephone: string;
        numeroVoieHexavia: number;
        codePostalFranceEtEtranger: string;
        dateDernierRetourPTT: string;
        nombreRetourPTT: number;
    }
}

declare namespace myway.portail.api.Media {
    interface IPersonneService {
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
    }
    class PersonneService implements IPersonneService {
        private agentService;
        static $inject: string[];
        constructor(agentService: core.AgentService);
        getMedia(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IMedia>;
        getAdressePostale(codeEtablissement: string, idPersonne: number): ng.IPromise<Modeles.IAdresse[]>;
    }
}

declare namespace myway.portail.api.favori {
    class MigrationPreference1803Service {
        private $q;
        private logger;
        private favoriV1;
        private VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, favoriV1: FavoriPersoInstanceV1);
        /**
         * Retourne le contexte applicatif partiel de la version du service. Partiel parce qu'il ne contient que les éléments liés aux préférences.
         */
        getApplicationContext(): ng.IPromise<application.Context>;
        /**
         * Log dans la console les préférences de la version du service.
         */
        logPreferences(version?: string): ng.IPromise<void>;
        private logLineSeparator(char?);
    }
}

declare module myway.portail.api.favori {
    class MigrationPreference1806Service {
        private $q;
        private logger;
        private preferenceService;
        private migrationPreference1803;
        private favoriV2;
        private lienV1;
        private VERSION;
        private ANCIENNE_VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, preferenceService: preference.PreferenceService, migrationPreference1803: MigrationPreference1803Service, favoriV2: FavoriPersoInstanceV2, lienV1: lien.LienInstanceV1);
        /**
         * Migre les préférences utilisateur de l'ancienne version vers la version du service.
         */
        start(preferences: preference.IUserPreferences): ng.IPromise<void>;
        /**
         * Retourne le contexte applicatif partiel de la version du service. Partiel parce qu'il ne contient que les éléments liés aux préférences.
         */
        getApplicationContext(): ng.IPromise<application.Context>;
        /**
         * Log dans la console les préférences de la version du service.
         */
        logPreferences(version?: string): ng.IPromise<void>;
        private migrerFavoris(oldContext, newContext);
        /**
         * Migrer les favoris de type application.
         */
        private migrerFavoriApplications(oldContext, newContext);
        /**
         * Migrer les favoris de type lien.
         * Les liens étaient uniquement des favoris, ils sont maintenant une entité à part entière.
         * Il faut donc recréer les liens qui sont uniquement stockés dans les favoris.
         */
        private migrerFavoriLiens(oldContext, newContext);
        private logLineSeparator(char?);
    }
}

declare namespace myway.portail.api.favori {
    class MigrationPreference1811Service {
        private $q;
        private logger;
        private preferenceService;
        private favoriV2;
        private lienV1;
        private VERSION;
        private ANCIENNE_VERSION;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, preferenceService: preference.PreferenceService, favoriV2: FavoriPersoInstanceV2, lienV1: lien.LienInstanceV1);
        /**
         * Migre les préférences utilisateur de l'ancienne version vers la version du service.
         */
        start(preferences: preference.IUserPreferences): ng.IPromise<void>;
        /**
         * Retourne le contexte applicatif partiel de la version du service. Partiel parce qu'il ne contient que les éléments liés aux préférences.
         */
        getApplicationContext(): ng.IPromise<application.Context>;
        /**
         * Log dans la console les préférences de la version du service.
         */
        logPreferences(version?: string): ng.IPromise<void>;
        /**
         * Log dans la console les préférences de la version du service.
         */
        logPreferencesAncienneVersion(version?: string): ng.IPromise<void>;
        private migrerFavoris(context);
        private logLineSeparator(char?);
    }
}

declare module myway.portail.api.favori {
    class MigrationPreferenceService {
        private $q;
        private logger;
        private preferenceService;
        private migrationPreference1806;
        private migrationPreference1811;
        static $inject: string[];
        constructor($q: ng.IQService, logger: core.LoggerService, preferenceService: preference.PreferenceService, migrationPreference1806: MigrationPreference1806Service, migrationPreference1811: MigrationPreference1811Service);
        /**
         * Vérifie l'état des préférences utilisateur et met à jour les données obsolètes
         */
        check(context: api.application.Context): ng.IPromise<void>;
        /**
         * Détermine la version des préférences utilisateur
         */
        private checkVersion(preferences);
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
        generateItemId(item: IFavori): void;
        getByContexte(contexte: application.ContexteLancementEnum): favori.IFavori[];
        getByContexteAndType(contexte: application.ContexteLancementEnum, type: favori.TypeFavoriEnum): favori.IFavori[];
        getFavorisActifsByContexte(contexte: application.ContexteLancementEnum): favori.IFavori[];
        getByOrigineAndIdAndContexte(origine: OrigineApplicationEnum, id: string, contexteLancement: application.ContexteLancementEnum): IFavori;
        /**
         * Renvoie un favori à partir d'un code application
         * @param codeApplication
         * @param contexteLancement
         * @param includeDeleted Inclut les éléments supprimés logiquement (false par défaut)
         */
        getByCodeApplicationAndContexte(codeApplication: string, contexteLancement: application.ContexteLancementEnum, includeDeleted?: boolean): IFavori;
        /**
         * Renvoie un favori à partir d'un id lien
         * @param idLien
         * @param contexteLancement
         * @param includeDeleted Inclut les éléments supprimés logiquement (false par défaut)
         */
        getByIdLienAndContexte(idLien: string, contexteLancement: application.ContexteLancementEnum, includeDeleted?: boolean): IFavori;
        /**
         * Insère un nouveau favori avant le favori cible.
         */
        insertBefore(nouveauFavori: IFavori, favoriCible: IFavori): void;
        /**
         * Déplace la position d'un favori avant celle du favori cible.
         */
        movePositionBefore(source: IFavori, cible: IFavori): void;
        addFavoriApplication(codeApplication: string, contexteLancement: application.ContexteLancementEnum, application?: Application): IFavori;
        removeFavoriApplication(codeApplication: string): void;
        addFavoriLien(idLien: string, contexteLancement: application.ContexteLancementEnum, lien?: lien.ILien): IFavori;
        removeFavoriLien(idLien: string): void;
        /**
         * Basculer le favori d'une application.
         * Si le favori n'existe pas, il est ajouté.
         * Si le favori est supprimé logiquement, il est repositionné à l'état ENREGISTRE
         * Si le favori est à l'état AJOUTE, il est supprimé physiquement de la liste.
         * Si le favori est à l'état ENREGISTRE, il est supprimé logiquement
         * @returns true si le favori est ajouté, false si supprimé
         */
        toggleFavoriApplication(app: Application, contexteLancement: application.ContexteLancementEnum): boolean;
        /**
         * Basculer le favori d'un lien.
         * Si le favori n'existe pas, il est ajouté.
         * Si le favori est supprimé logiquement, il est repositionné à l'état ENREGISTRE
         * Si le favori est à l'état AJOUTE, il est supprimé physiquement de la liste.
         * Si le favori est à l'état ENREGISTRE, il est supprimé logiquement
         * @returns true si le favori est ajouté, false si supprimé
         */
        toggleFavoriLien(lien: lien.ILien, contexteLancement: application.ContexteLancementEnum): boolean;
        createFavoriApplication(codeApplication: string, contexteLancement: application.ContexteLancementEnum, application?: Application): IFavori;
        createFavoriLien(idLien: string, contexteLancement: application.ContexteLancementEnum, lien?: lien.ILien): IFavori;
        /**
         * Renvoie la prochaine position disponible.
         */
        getNextAvailablePosition(contexteLancement: application.ContexteLancementEnum): number;
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
