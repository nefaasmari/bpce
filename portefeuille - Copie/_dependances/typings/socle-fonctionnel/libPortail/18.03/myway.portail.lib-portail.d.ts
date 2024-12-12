
declare module libPortail {
    var app: ng.IModule;
    export import Utils = myway.core.Utils;
    export import EdsUtils = myway.core.EdsUtils;
    export import StringUtils = myway.core.StringUtils;
    export import NumberUtils = myway.core.NumberUtils;
}

declare module libPortail {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: string;
        codeEtablissement: string;
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeEtatEntiteTitulaire: string;
        modeCompositionIndivision: string;
        complementDesignationEntiteTitulaire: string;
        affichageIdentifiantEntiteTitulaire?: string;
    }
}

declare module libPortail {
    class TableauEntiteTitulaire implements MyWay.UI.ImwTableOptions {
        private colonneNumero;
        private colonneLibelle;
        private colonneUsage;
        private colonneModeDeComposition;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<IEntiteTitulaire>;
        selectedItems: Array<IEntiteTitulaire>;
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module libPortail {
}

declare module libPortail {
    /**
     * Controleur des encours du client
     */
    class SelectionEntiteTitulaireControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private data;
        private $modalInstance;
        private agentService;
        private $q;
        /** Injection de Dépendances */
        static $inject: string[];
        /** Données de la modale */
        modalDatas: any;
        private identifiantPersonne;
        private selectionEntiteTitulaire;
        tableauSelectionEntiteTitulaire: libPortail.TableauEntiteTitulaire;
        traitementEnCours: boolean;
        /** Initialisation */
        constructor($scope: ng.IScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, agentService: myway.core.AgentService, $q: ng.IQService);
        onSelectionChange(ligne: IEntiteTitulaire): void;
        /** Retourne le format d'un identifiant à la taille 9
         * @param identifiant {string} identifiant d'entré
         * @return reponse {string} identifiant au bon format
         */
        formaterIdentifiantClientBancaire(identifiant: string, pas?: number): string;
        selectionner(): void;
        /** Fermeture de la modale (retour) */
        close(): void;
    }
}

declare module libPortail {
}

declare module libPortail {
    abstract class PortailConstantes {
        static URL_PORTAIL: string;
        /**
         * nombre maxi de processus client à lancer dans le totem du Portail
         * -> pas utilisé pour le moment !
         */
        static NOMBRE_MAX_PROCESS_CLIENT: number;
        static SEP_PARAM_PROCESS: string;
    }
}

declare module libPortail {
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

declare module libPortail {
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

declare module libPortail {
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
    abstract class CodesOperatorsLogic {
        static NOT: string;
        static AND: string;
        static OR: string;
    }
}

declare module libPortail {
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
}

declare module libPortail {
    abstract class ScopeLisa {
        static IDENTIFIANT_PERSONNE: string;
        static LIBELLE_PERSONNE: string;
        static AUTHENTIFICATION_INFOS: string;
        static DATE_JOUR: string;
        static PRODUIT: string;
    }
}

declare module libPortail {
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

import IElementConfiguration = myway.ressources.portailmyway.rechercheapplication.IElementConfiguration;
import IZonePortail = myway.ressources.portailmyway.zoneportail.IZonePortail;
import IElementConfigurationZone = myway.ressources.portailmyway.elementconfzone.IElementConfigurationZone;
import IElementConfigurationPortail = myway.ressources.portailmyway.elementconfportail.IElementConfigurationPortail;
declare module libPortail {
    class Application {
        application: myway.ressources.portailmyway.rechercheapplication.IApplication;
        device: DeviceCompatible;
        private listeElementsConf;
        private listeElementsZone;
        private listeZonePortail;
        constructor(application: myway.ressources.portailmyway.rechercheapplication.IApplication, device: DeviceCompatible, listeElementsConf: IElementConfigurationPortail[], listeElementsZone: IElementConfigurationZone[], listeZonePortail: IZonePortail[]);
        codeApplication: string;
        descriptionApplication: string;
        isClient: boolean;
        paramUrls: myway.ressources.portailmyway.rechercheapplication.IApplicationUrlValeur[];
        codeSousFamille: string;
        isConteneurMyway: boolean;
        listeElementsConfiguration: IElementConfiguration[];
        getHabilitation(zoneId?: string): string;
        isMultiInstance(zoneId?: string): boolean;
        isVisible(zoneId?: string): boolean;
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
        isPersonnePhysique: boolean;
        isPersonneMorale: boolean;
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
    class ContexteLisaService {
        private $q;
        private $parse;
        private $interpolate;
        private logger;
        private agentService;
        private modalService;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $interpolate: ng.IInterpolateService, logger: myway.core.LoggerService, agentService: myway.core.AgentService, modalService: MyWay.UI.ModalService);
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
        rulesEnrichmentActive(param: ParamLisa): boolean;
        defineEnrichmentContextByRules(param: ParamLisa): ng.IPromise<ParamLisa>;
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

declare module libPortail {
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

declare module libPortail {
    class ApplicationService {
        private $q;
        private agentService;
        private mobiliteService;
        private habilitationService;
        private logger;
        private modalService;
        private referentielProcessusPromise;
        private infosMobilitePromise;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, mobiliteService: myway.core.MobiliteService, habilitationService: libPortail.HabilitationService, logger: myway.core.LoggerService, modalService: MyWay.UI.IModalService);
        /**
         * Renvoie la liste des processus provenant de la base portail.
         */
        getReferentielProcessus(): ng.IPromise<Application[]>;
        /**
         * Renvoie une liste d'applications auxquelles l'agent est habilité.
         */
        getApplications(params: myway.ressources.portailmyway.rechercheapplication.IGetQueryParams): ng.IPromise<Application[]>;
        rechercheApplications(params: myway.ressources.portailmyway.rechercheapplication.IGetQueryParams): ng.IPromise<myway.ressources.portailmyway.rechercheapplication.IApplication[]>;
        getApplication(params: myway.ressources.portailmyway.application.IGetQueryParams): ng.IPromise<libPortail.Application>;
        saveApplication(application: myway.ressources.portailmyway.application.IApplication): ng.IPromise<myway.ressources.portailmyway.application.IApplication>;
        postApplication(application: myway.ressources.portailmyway.application.IApplication): ng.IPromise<myway.ressources.portailmyway.application.IApplication>;
        /**
         * Retourne des informations concernant la compatibilité de l'application vis à vis du device utilisé (dans un contexte mobilité).
         */
        getApplicationContexteMobilite(application: myway.ressources.portailmyway.rechercheapplication.IApplication): ng.IPromise<DeviceCompatible>;
        /**
         * Retourne des informations concernant la compatibilité des applications vis à vis du device utilisé (dans un contexte mobilité).
         */
        getApplicationsContexteMobilite(applications: myway.ressources.portailmyway.rechercheapplication.IApplication[]): ng.IPromise<IApplicationDevice>;
        getElementsConfigurationPortail(): ng.IPromise<myway.ressources.portailmyway.elementconfportail.IElementConfigurationPortail[]>;
        getElementConfigurationZone(idZone?: string): ng.IPromise<myway.ressources.portailmyway.elementconfzone.IElementConfigurationZone[]>;
        getListeZonePortail(): ng.IPromise<myway.ressources.portailmyway.zoneportail.IZonePortail[]>;
        afficherModaleDeviceNonCompatible(): ng.IPromise<any>;
        /**
         * Log des infos sur les applications
         */
        logInfosApplications(): void;
        private getInfosMobilite();
    }
}

declare module libPortail {
    class AuthentificationService {
        private $q;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
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
    }
}

declare module libPortail {
    class ContexteClientService extends myway.core.FrameworkService {
        private $q;
        private $parse;
        private logger;
        private agentService;
        private contexteClientService;
        private tiersService;
        private edsService;
        static $inject: string[];
        constructor($injector: ng.auto.IInjectorService, $q: ng.IQService, $parse: ng.IParseService, logger: myway.core.LoggerService, agentService: myway.core.AgentService, contexteClientService: myway.core.ContexteClientService, tiersService: TiersService, edsService: EdsService);
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
    }
}

declare module libPortail {
    class CultureNetService {
        private $q;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
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
        constructor($q: ng.IQService, logger: myway.core.LoggerService, agentService: myway.core.AgentService);
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
        constructor($q: ng.IQService, agentService: myway.core.AgentService, authentificationService: AuthentificationService, logger: myway.core.LoggerService);
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
    class HabilitationService {
        private $q;
        private $rootScope;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
        /**
         * Renvoie une liste filtrée avec les éléments habilités.
         * @param liste Liste d'éléments
         * @param habilitationFunction Fonction qui renvoie une expression habilitation
         */
        filterByHabilitation<T>(liste: T[], habilitationFunction: (element: T) => string, libelleFunction: (element: T) => string): ng.IPromise<T[]>;
        estHabiliteExpression(habilitation: string): ng.IPromise<boolean>;
        private isExpressionValide(habilitation);
    }
}

declare module libPortail {
    class PortailService {
        private $q;
        private agentService;
        private applicationService;
        private erreurService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, agentService: myway.core.AgentService, applicationService: libPortail.ApplicationService, erreurService: myway.core.ErreurService, logger: myway.core.LoggerService);
        /**
         * Ouvre ou ferme le totem du portail.
         * @param state Indicateur d'ouverture du totem
         */
        toggleTotem(state: boolean): void;
        lancerApplication(application: libPortail.Application, zoneId?: string): ng.IPromise<any>;
        /**
         * Démarrer une synthèse client à partir d'un identifiant personne
         * @param identifiantPersonne Identifiant de la personne
         * @param zoneId Id de la zone (cf libPortail.Zone.xxx). Zone portail par défaut
         */
        lancerSyntheseClient(identifiantPersonne: number, zoneId?: string): void;
        /**
         * Lance un processus LISA avec le client spécifié ou celui du contexte si omis.
         * @param process Processus
         * @param identifiantPersonne Identifiant de la personne
         */
        lancerProcessusClient(process: IStartProcess, identifiantPersonne?: number): void;
        /**
         * Lance un processus LISA au sein du portail.
         * @param process Processus
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
        private contexteLisaService;
        processHandler: ProcessHandler;
        /**
         * Promesse d'enchainement des appels à la méthode updateProcessList.
         * Elle permet notamment de chainer un traitement après la mise à jour des processus.
         */
        updateProcessListPromise: ng.IPromise<void>;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $rootScope: ng.IRootScopeService, logger: myway.core.LoggerService, agentService: myway.core.AgentService, contexteClientService: ContexteClientService, personnePhysiqueService: TiersService, erreurService: myway.core.ErreurService, applicationService: ApplicationService, contexteLisaService: libPortail.ContexteLisaService);
        init(portailContext: fwkManager.Services.Context.IPortalContext): void;
        /**
         * Démarrer un processus à partir d'une url
         */
        lancerProcessusUrl(url: string): void;
        /**
         * Démarre une application (base portail) à partir d'une zone et d'un scope donné.
         * Le scope peut être omis, dans ce cas, un scope minimal sera fourni. Sinon il sera éventuellement enrichi.
         * @param application Application enrichie issue de la base
         * @param zoneId Identifiant de la zone (constantes Zone)
         * @param scope Scope applicable au contexte Lisa
         */
        lancerApplication(application: Application, zoneId: string, scope?: IScopeContexteLisa): ng.IPromise<void>;
        /**
         * Démarrer un processus à partir d'un code et d'autres paramètres
         */
        lancerProcessus(params: IStartProcess, zoneId?: string): ng.IPromise<void>;
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
        constructor($q: ng.IQService, logger: myway.core.LoggerService, modalService: MyWay.UI.IModalService, agentService: myway.core.AgentService);
        getTiersLiesAdministratifs(idPersonne: number): any;
        getRelationEco(idPersonne: number): ng.IPromise<any>;
        getClient(idPersonne: number): ng.IPromise<any>;
        getMedia(idPersonne: number): ng.IPromise<myway.ressources.tiers.media.IListeMedia[]>;
        getIdentification(idPersonne: number): ng.IPromise<myway.ressources.tiers.v1.identification.IIdentification>;
        getSuiviCommercial(identifiantPersonne: number): ng.IPromise<myway.ressources.tiers.identification.ISuiviCommercial>;
        getParticulierInformation(identifiantPersonne: number): ng.IPromise<any>;
        getCorporateInformation(identifiantTiers: number): ng.IPromise<any>;
        getPortefeuille(identifiantPersonne: number): ng.IPromise<myway.ressources.tiers.portefeuille.ITiersPortefeuille>;
    }
}

declare module libPortail {
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

declare module libPortail {
    abstract class EventUtils {
        /**
         * Renvoie le nom de l'évènement par rapport à l'énumération.
         * Le type réel de eventType est MyWay.Services.Component.ManagerEventType.
         * Comme le typage n'est pas possible, on utilise une énumération interne.
         */
        static getManagerEventTypeName(eventType: any): string;
    }
}

declare module libPortail {
    class DeviceCompatible {
        plateformes: IPlateforme[];
        resolutionMinimaleMyway: boolean;
        ecranTactile: boolean;
        plateformeCompatible: boolean;
        resolutionCompatible: boolean;
        touchCompatible: boolean;
        reseauCompatible: boolean;
        constructor(libelleDeviceCompatible: string, allPlateformes: myway.core.IPlateforme[]);
        selectedPlateformes: myway.core.IPlateforme[];
        testPlateforme(plateforme: myway.core.IPlateforme): boolean;
        /**
         * Indique si l'application est compatible mobilité
         */
        isCompatible: boolean;
        toString(): string;
        private extractValue(chaine, id, defaultValue);
        private getCodesPlateformes(plateformes);
    }
}

declare module libPortail {
    interface IApplicationDevice {
        [codeApplication: string]: DeviceCompatible;
    }
    interface IPlateforme extends myway.core.IPlateforme {
        selected: boolean;
    }
}

declare module libPortail {
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
        constructor(params?: {
            [key: string]: string | number;
        });
        addSingleParam(key: string, value: string): void;
        addParamTab(key: string, value: string): void;
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
        /**
         * Renvoie un processus à partir de son code et d'un contexte LISA qui correspond à une zone donnée.
         */
        getProcessByCodeAndContexteLisaAndZone(codeProcess: string, contextArray: fwkManager.Services.Context.IContextKeyValuePair[], zoneId: string): ProcessPortail;
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
    class ProcessPortail {
        process: fwkManager.Services.Context.IProcess;
        application: Application;
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
        libelleProcessContextualise: string;
        /**
         * Renvoie le complément du libellé du processus (basé sur le contexte Lisa).
         */
        complementLibelleProcess: string;
        /**
         * Renvoie l'étape en cours d'exécution.
         */
        processStep: fwkManager.Services.Context.ProcessStep;
        /**
         * Renvoie le code du processus.
         * Il faut aller chercher le code du dernier sous-processus lancé et non pas le code du processus racine.
         */
        codeProcess: string;
        /**
         * Renvoie la valeur d'une clé du contexte LISA.
         * Si clé n'existe pas, une chaine vide est renvoyée.
         * @param key Key du contexte LISA
         */
        private getContexteValue(key);
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
        /**
         * Zone de lancement du processus
         */
        idZone?: string;
    }
}
