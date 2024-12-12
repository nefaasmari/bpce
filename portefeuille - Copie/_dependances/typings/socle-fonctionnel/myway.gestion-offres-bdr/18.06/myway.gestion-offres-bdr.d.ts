
declare module GestionGeneriqueOffres.Demarrage {
    class Constantes {
        static addConstantsToRootScope($rootScope: GestionGeneriqueOffres.Constantes.IRootScopeServiceWithConstants, constantes: GestionGeneriqueOffres.Constantes.Definitions): void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    class AppProviders {
        private _provide;
        provide: ng.auto.IProvideService;
        private _routeProvider;
        routeProvider: ng.route.IRouteProvider;
        private _controllerProvider;
        controllerProvider: ng.IControllerProvider;
        private _compileProvider;
        compileProvider: ng.ICompileProvider;
        private _filterProvider;
        filterProvider: ng.IFilterProvider;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IConfigMocks {
        mockEntiteTitulaire: boolean;
        mockParametrageBlocs: boolean;
        mockPersonnes: boolean;
        mockSouscriptionAvenant: boolean;
        mockTarification: boolean;
        mockReprise: boolean;
        mockAvantageFamille: boolean;
        mockProcuration: boolean;
    }
    interface IConfigShunts {
        bdf: boolean;
        bale2: boolean;
    }
    interface IConfig {
        mocks: ConfigMocks;
        shunts: ConfigShunts;
    }
    class ConfigMocks {
        private _mockEntiteTitulaire;
        /**
         * Mocker les entités titulaires ?
         */
        mockEntiteTitulaire: boolean;
        private _mockParametrageBlocs;
        /**
         * Mocker le paramétrage des composants P/S ?
         */
        mockParametrageBlocs: boolean;
        private _mockPersonnes;
        /**
         * Mocker les personnes ?
         */
        mockPersonnes: boolean;
        private _mockSouscriptionAvenant;
        /**
         * Mocker les entités titulaires ?
         */
        mockSouscriptionAvenant: boolean;
        private _mockTarification;
        /**
         * Mocker les ressources liéees à la tarification
         */
        mockTarification: boolean;
        private _mockReprise;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockReprise: boolean;
        private _mockAvantageFamille;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockAvantageFamille: boolean;
        private _mockProcuration;
        /**
         * Mocker les reprises de P/S en avenant
         */
        mockProcuration: boolean;
        /**
         * Mocker les reprises de P/S en avenant
         */
        constructor(icm: IConfigMocks);
    }
    class ConfigShunts {
        private _bdf;
        /**
         * Shunter les interro BDF ?
         */
        bdf: boolean;
        private _bale2;
        /**
         * Shunter le contrôle Bâle 2 ?
         */
        bale2: boolean;
        constructor(ics: IConfigShunts);
    }
    class Config {
        /**
         * Configuration des mocks
         */
        private _mocks;
        /**
         *
         */
        mocks: ConfigMocks;
        /**
         * Configuration des shunts
         */
        private _shunts;
        /**
         *
         */
        shunts: ConfigShunts;
        constructor(ic: IConfig);
    }
}

declare module GestionGeneriqueOffres.Composition {
    var app: ng.IModule;
}

declare module GestionGeneriqueOffres.Composition {
    class AfficherErreur {
        private constantes;
        code: number;
        message: number;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        afficherToutesLesErreurs(): boolean;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IErreurService {
        /**
         *  Renvoie les messages d'erreur à afficher
         */
        getMessagesErreur(): Types.ErreurGestionGeneriqueOffre[];
        /**
         * Remet à zéro la liste des messages d'erreur
         */
        raz(): void;
        /**
         * Ajoute un message à la liste. L'emetteur est l'id du bloc émettant l'erreur
         */
        ajouterMessageErreur(emetteur: string, messageErreur: Types.ErreurGestionGeneriqueOffre): void;
        /**
         * Renvoie le nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre. Seuls les messages visibles sont décomptés.
         */
        compterMessages(criticites?: GestionGeneriqueOffres.Types.NiveauErreur[]): number;
    }
    class ErreurService implements IErreurService {
        private $rootScope;
        private constantes;
        private static listeMessagesErreur;
        static erreurServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         * Insertion d'un message d'erreur en fonction de sa criticité.
         */
        private static insererMessage;
        /**
         *  Renvoie les messages d'erreur à afficher
         */
        getMessagesErreur: () => Types.ErreurGestionGeneriqueOffre[];
        raz: () => void;
        /**
         * Ajoute un message à la liste.
         * @param [emetteur] L'emetteur est par exemple l'id du bloc émettant l'erreur. Dans un autre contexte celà peut être autre chose qui permet
         * d'identifier l'émetteur du message
         * @param [messageErreur] Le message à rajouter
         * @return rien
         */
        ajouterMessageErreur: (emetteur: string, messageErreur: Types.ErreurGestionGeneriqueOffre) => void;
        /**
         * Ajoute plusieurs messages à la liste.
         * @param [emetteur] L'emetteur est par exemple l'id du bloc émettant l'erreur. Dans un autre contexte celà peut être autre chose qui permet
         * d'identifier l'émetteur du message
         * @param [messagesErreur] Les messages à rajouter
         * @param [libelleComposantEmetteur] Sera rajouté dans le message si il est présent, sinon affichera "Emetteur inconnu".
         * @return rien
         */
        ajouterMessagesErreur: (emetteur: string, listeMessagesErreur: Types.ErreurGestionGeneriqueOffre[], libelleComposantEmetteur?: string) => void;
        /**
         * Renvoie le nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre. Seuls les messages visibles sont décomptés.
         * @param [criticites] Une liste de niveaux de criticité. Tous les messages dont le niveau de criticité figure dans la liste seront intégrés
         * au comptage. Si la liste est vide ou non passée, tous les messages sont comptés.
         * @return Nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre
         */
        compterMessages: (criticites?: Types.NiveauErreur[]) => number;
        nombreMessages: number;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IActionsService {
        /**
         *  Renvoie les actions à afficher
         */
        getActions(): Types.Action[];
        /**
         * Remet à zéro la liste des actions
         */
        raz(): void;
        /**
         * Ajoute une action à la liste.
         */
        ajouterAction(action: Types.Action): void;
        /**
         * Modifie l'état d'un bouton
         */
        modifierAction(codeAction: string, modificateur: any): void;
        /**
         * Supprime une action à la liste.
         */
        supprimerAction(codeAction: string): void;
    }
    class ActionsService implements IActionsService {
        private constantes;
        static actionsServiceId: string;
        private _listeActions;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         *  Renvoie les actions à afficher
         */
        getActions: () => Types.Action[];
        /**
         * Remet à zéro la liste des actions
         */
        raz: () => void;
        /**
         * Ajoute une action à la liste.
         */
        ajouterAction: (action: Types.IAction) => void;
        /**
         * Supprime une action de la liste.
         */
        supprimerAction: (codeAction: string) => void;
        /**
         * Modifie l'état d'un bouton
         * @param codeAction : L'id du bouton que l'on souhaite modifier
         * @param modificateur : peut être soit un objet composé de deux propriétés, soit un tableau d'objets composés de deux propriétés chacun,
         * si l'on souhaite modifier plusieurs propriétés du bouton en même temps. La première propriété est le nom de la propriété du bouton que l'on souhaite modifier, la seconde est la nouvelle valeur à y attribuer
         * ex : modifierAction("btn-fermer", { "visible": true });
         * ex : modifierAction("btn-fermer", [{ "visible": true }, {"texte" : "Coucou"}]);
         */
        modifierAction: (codeAction: string, modificateur: any) => void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class BarreAction {
        private actionsService;
        actions: Types.Action[];
        nonImplemente: () => void;
        static $inject: string[];
        constructor(actionsService: Services.ActionsService);
    }
}

declare module GestionGeneriqueOffres.Services {
    import Tiers = GestionGeneriqueOffres.Types.Tiers;
    import Constantes = GestionGeneriqueOffres.Constantes;
    interface ITiersService {
        /**
         *  Méthode de restitution des informations sur tiers (particulier information, media, identification, tiers liés)
         */
        getTiers(identifiantPersonne: number, codeEtablissement: string): ng.IPromise<Tiers.Personne | Tiers.PersonneMorale>;
        /**
         * Renvoie les tiers chargés par les sendGetRequest (version mockée ou réelle)
         */
        getPersonnes: () => Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        /**
         * raz
         */
        raz: () => void;
    }
    class TiersService implements ITiersService {
        private constantes;
        private $q;
        private tiersParticulierInformationService;
        private tiersIdentificationService;
        private tiersMediaService;
        private tiersMediaPersMoraleService;
        private tiersParticulierTiersLiesService;
        private tiersCorporateInformationService;
        private tiersCorporateTiersLiesService;
        private tiersNoyauService;
        static tiersServiceId: string;
        static $inject: string[];
        private static _instance;
        private static _instanceBdr;
        private traiterTiersServicesPersonneMorale(identifiantPersonne, codeEtablissementConnexion, identification);
        private traiterTiersServicesPersonnePhysique(identifiantPersonne, codeEtablissementConnexion, identification);
        private determinerTypeTierService(identifiantTiers, codeEtablissementConnexion);
        private traiterTiersBdrServices(identifiantTiers, codeEtablissementConnexion, identification);
        /**
         * Renvoie un tiers depuis le SI
         */
        getTiers: (identifiantPersonne: number, codeEtablissement: string) => ng.IPromise<Tiers.Personne | Tiers.PersonneMorale>;
        /**
         * Renvoie la liste des tiers
         */
        getPersonnes: () => Tiers.Personne[] | Tiers.PersonneMorale[];
        /**
         * raz
         */
        raz: () => void;
        constructor(constantes: Constantes.Definitions, $q: ng.IQService, tiersParticulierInformationService: Services.ITiersParticulierInformationService, tiersIdentificationService: Services.ITiersIdentificationService, tiersMediaService: Services.ITiersMediaService, tiersMediaPersMoraleService: Services.ITiersMediaPersMoraleService, tiersParticulierTiersLiesService: Services.ITiersParticulierTiersLiesService, tiersCorporateInformationService: Services.ITiersCorporateInformationService, tiersCorporateTiersLiesService: Services.ITiersCorporateTiersLiesService, tiersNoyauService: Services.ITiersNoyauService);
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0076105
     */
    interface IEntiteTitulaireBdrService {
        sendGetRequest(data: IEntiteTitulaireBdrGetInformationEntiteTitulaireBdrQuery): ng.IPromise<Types.IInformationEntiteTitulaireBdr>;
        getEntitesTitulaires(): Types.InformationEntiteTitulaireBdr[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "entitetitulaire/informationEntiteTitulaire"
     * avec le verbe d'action GET.
     * @author S0076105
     */
    interface IEntiteTitulaireBdrGetInformationEntiteTitulaireBdrQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireBdrAjaxImplService implements IEntiteTitulaireBdrService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireBdrGetInformationEntiteTitulaireBdrQuery): ng.IPromise<Types.IInformationEntiteTitulaireBdr>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaireBdr[];
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireBdrMockImplService implements IEntiteTitulaireBdrService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireBdrGetInformationEntiteTitulaireBdrQuery): ng.IPromise<Types.IInformationEntiteTitulaireBdr>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaireBdr[];
    }
    class EntiteTitulaireBdrService {
        static entiteTitulaireBdrServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IOffreDonneesService {
        /**
         *  Renvoie les informations liées à l'offre
         */
        get(): Types.OffreSouscrite;
        /**
         * Positionne les données de l'offre
         */
        set(offre: Types.OffreSouscrite): void;
    }
    class OffreDonneesService implements IOffreDonneesService {
        static offreDonneesServiceId: string;
        static $inject: any[];
        private _offreDonnees;
        /**
         *  Renvoie les informations liées à l'offre
         */
        get: () => Types.OffreSouscrite;
        /**
         * Positionne les données de l'offre
         */
        set: (offre: Types.OffreSouscrite) => void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface comportant les données permettant d'interroger la ressource parametrageOffre
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface IParametrageBlocsGetParametrageBlocsQuery {
        codeEtablissement: string;
    }
    /**
     * Interface de définition du service de récupération du paramétrage des composants P/S.
     * @author S0070531
     */
    interface IParametrageBlocsService {
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        getParametrageBlocs(): Types.ParametrageBlocs;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource parametrageOffre
     * @author S0076105
     */
    class ParametrageBlocsAjaxImplService implements IParametrageBlocsService {
        private serviceAgent;
        private $q;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $q: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getParametrageBlocs(): Types.ParametrageBlocs;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource "parametrageOffre".
     * @author S0076105
     */
    class ParametrageBlocsMockImplService implements IParametrageBlocsService {
        private serviceAgent;
        private mockLoaderService;
        private $q;
        static _instance: Types.ParametrageBlocs;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, $q: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IParametrageBlocsGetParametrageBlocsQuery): ng.IPromise<Types.IParametrageBlocs>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getParametrageBlocs(): Types.ParametrageBlocs;
    }
    class ParametrageBlocsService {
        static parametrageBlocsServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\identification".
     */
    interface ITiersProcurationService {
        sendGetRequest(data: ITiersGetProcurationQuery): ng.IPromise<Types.Tiers.IListeProcuration>;
        getTiersProcuration(): Types.Tiers.ListeProcuration;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\identification"
     * avec le verbe d'action GET.
     */
    interface ITiersGetProcurationQuery {
        referenceExterneAgent: string;
        codeTypeIntervenantMandat: string;
        codeEtatMandat: string;
        identifiantPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\identification".
     */
    class TiersProcurationAjaxImplService implements ITiersProcurationService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetProcurationQuery): ng.IPromise<Types.Tiers.IListeProcuration>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersProcuration(): Types.Tiers.ListeProcuration;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\identification".
     */
    class TiersProcurationMockImplService implements ITiersProcurationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetProcurationQuery): ng.IPromise<Types.Tiers.IListeProcuration>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersProcuration(): Types.Tiers.ListeProcuration;
    }
    class TiersProcurationService {
        static tiersProcurationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteService {
        getContexte(): ng.IPromise<Types.Contexte>;
    }
    class ContexteService implements IContexteService {
        private $q;
        private $timeout;
        private constantes;
        private serviceAgent;
        private serviceAgentExtended;
        static contexteServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getContexte: () => ng.IPromise<Types.Contexte>;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteGgoService {
        getContexteGgo(): ng.IPromise<Types.ContexteGgo>;
    }
    class ContexteGgoService implements IContexteGgoService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        static contexteGgoServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService);
        private controlerContexteGgo;
        /**
         * Contrôle du contexte.
         * TODO
         */
        private controlerContexte;
        getContexteGgo: () => ng.IPromise<Types.ContexteGgo>;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteGgoStockageService {
        getContexteGgo(): Types.ContexteGgo;
        setContexteGgo(offreSouscrite: Types.ContexteGgo): void;
    }
    class ContexteGgoStockageService implements IContexteGgoStockageService {
        private static _contexteGgoStockage;
        static contexteGgoStockageServiceId: string;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         * Récupère le contexte depuis une variable statique
         */
        getContexteGgo: () => Types.ContexteGgo;
        /**
         *  Sauve le contexte dans une variable statique
         */
        setContexteGgo: (contexteGgo: Types.ContexteGgo) => void;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IProcurationService {
        getProcuration(identifiantPersonne: number): ng.IPromise<Types.Tiers.IProcuration[]>;
        procuration: Types.Tiers.Procuration[];
    }
    class ProcurationService implements IProcurationService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteGgoStockageService;
        private tiersService;
        private procurationService;
        procuration: Types.Tiers.Procuration[];
        static procurationServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.IContexteGgoStockageService, tiersService: Services.ITiersService, procurationService: Services.ITiersProcurationService);
        getProcuration(identifiantPersonne: number): ng.IPromise<Types.Tiers.Procuration[]>;
    }
    /**
    * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
    * @author S0076105
    */
    class ProcurationServiceBdrMockImplService implements IProcurationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        procuration: Types.Tiers.Procuration[];
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        getProcuration(identifiantPersonne: number): ng.IPromise<Types.Tiers.IProcuration[]>;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0070531
     */
    interface ICatalogueService {
        /**
         *  Méthode de restitution des produits du catalogue
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         *  Renvoie les entités chargées par sendGetRequest (version mockée ou réelle)
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Renvoie les données de niveau offre
         */
        getOffre(): Types.Offre;
        /**
         * Renvoie l'identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Supprime les références circulaires présentes dans le catalogue (liens "ascendant") en vue d'une sérialisation de celui-ci.
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants du catalogue. [non implémenté]
         */
        retablirReferencesCirculaires(): void;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "souscription/avenant"
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface ICatalogueGetCatalogueQuery {
        codeActeGestion: string;
        codeEtablissement: string;
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        posteRattachementAgent: number;
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        codeEntiteVente: string;
        codeEtablissementProduitService: string;
        codeGuichetProduitService: string;
        referenceProduitService: string;
        codeTypeProduitService: string;
        codeCanalDossierVente: string;
        numeroOffreSouscrite: number;
        indicateurTypeClotureOffre: string;
        interfaceAppel: string;
    }
    class CatalogueAjaxImplService implements ICatalogueService {
        private serviceAgent;
        private serviceAgentExtended;
        private modalService;
        private qService;
        private parametrageBlocsService;
        private tiersService;
        private entiteTitulaireBdrService;
        private offreDonneesService;
        private codeTypeProduitServicePrincipalOffre;
        private procurationService;
        private static _instanceCatalogueBrut;
        private static _instanceCatalogue;
        private static _instanceOffre;
        private static _instanceReferencesProduits;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.OffreDonneesService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, procurationService: Services.IProcurationService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(query: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         * @return catalogue brut de type Types.CatalogueSouscriptionAvenant
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Catalogue
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage niveau offre
         * chargé via sendGetRequest
         * @author S0070531
         * @return Offre
         */
        getOffre(): Types.Offre;
        /**
         * Renvoie l'identifiant P/S de l'offre
         * @author S0070531
         * @return identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         * @author S0070531
         * @return le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Supprime les références circulaires créées dans le catalogue par les liens ascendants
         * @author S0070531
         * @return void
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants
         * @author S0070531
         * @return void
         */
        retablirReferencesCirculaires(): void;
        /**
         * Méthode de construction de l'url du web service
         * @author S0070531
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le mock "Catalogue".
     * @author S0070531
     */
    class CatalogueMockImplService implements ICatalogueService {
        private serviceAgent;
        private serviceAgentExtended;
        private modalService;
        private mockLoaderService;
        private qService;
        private parametrageBlocsService;
        private tiersService;
        private entiteTitulaireBdrService;
        private offreDonneesService;
        private procurationService;
        private codeTypeProduitServicePrincipalOffre;
        private static _instanceCatalogueBrut;
        private static _instanceCatalogue;
        private static _instanceOffre;
        private static _instanceReferencesProduits;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.OffreDonneesService, procurationService: Services.IProcurationService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(query: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         * Renvoie un tableau de produits avec leurs références contrat
         * En souscription ce tableau contient les P/S repris
         * En avenant ce tableau contient les P/S de l'offre
         */
        getReferencesProduits(): Types.ReferenceProduit[];
        /**
         * Renvoie le catalogue "brut" tel qu'il a été reçu de la ressource
         * Ce catalogue brut est utilisé lors de la mise en gestion pour effectuer la mise en référence
         * @return catalogue brut de type Types.CatalogueSouscriptionAvenant
         */
        getCatalogueBrut(): Types.CatalogueSouscriptionAvenant;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Catalogue
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Renvoie l'identifiant P/S de l'offre
         * @author S0070531
         * @return identifiant P/S de l'offre
         */
        getIdentifiantProduitServiceOffre(): number;
        /**
         * Renvoie le libellé de l'offre
         * @author S0070531
         * @return le libellé de l'offre
         */
        getLibelleProduitServiceOffre(): string;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage niveau offre
         * chargé via sendGetRequest
         * @author S0070531
         * @return Offre
         */
        getOffre(): Types.Offre;
        /**
         * Supprime les références circulaires créées dans le catalogue par les liens ascendants
         * @author S0070531
         * @return void
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants
         * @author S0070531
         * @return void
         */
        retablirReferencesCirculaires(): void;
    }
    class CatalogueService {
        static catalogueServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    interface IChargementScope extends ng.IScope {
        $location: ng.ILocationService;
    }
    class ChargementControleur {
        private $location;
        private serviceAgentExtended;
        private progressionChargement;
        static $inject: string[];
        constructor($location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, progressionChargement: Types.ProgressionChargement);
        animate: boolean;
        chargement: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISignatairesService {
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        messageErreur: string;
        afficherListeSignataires: boolean;
        afficherErreurListeSignataires(): void;
    }
    class SignatairesService implements ISignatairesService {
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgentExtended;
        afficherListeSignataires: boolean;
        private _listeSignataires;
        private _messageErreur;
        static signatairesServiceId: string;
        static $inject: string[];
        constructor($location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Liste des signataires sélectionnés
         * @return tableau d'Object ISignataireDirective
         */
        listeSignataires: myway.comContract.modeles.ISignataireComplet[];
        /**
         * Message d'erreur renseigné si :
         * - le champ précision signataire n'est pas renseigné
         * - la règle de gestion n'est pas respectée
         * @return string messageErreur
         */
        messageErreur: string;
        afficherErreurListeSignataires(): void;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDonneesMiseEnGestionService {
        /**
         *  Renvoie les données de mise en gestion de tous les composants P/S
         */
        getDonneesMiseEnGestion(): Types.DonneesMiseEnGestion[];
        /**
         * Remet à zéro la liste des données de mise en gestion
         */
        raz(): void;
        /**
         * Ajoute une donnée de mise en gestion à la liste.
         */
        ajouterDonneeMiseEnGestion(donnee: Types.DonneesMiseEnGestion): void;
        /**
         * Recherche dans les données de mise en gestion une propriété de nom "cle", et en renvoie la valeur. Undifined si la clé n'est pas trouvée.
         */
        rechercherOccurenceCle(cle: string): any;
        recuperationContartCarte(): any;
    }
    class DonneesMiseEnGestionService implements IDonneesMiseEnGestionService {
        private constantes;
        static donneesMiseEnGestionServiceId: string;
        static $inject: string[];
        private static listeDonneesMiseEnGestion;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        getDonneesMiseEnGestion: () => Types.DonneesMiseEnGestion[];
        raz: () => void;
        ajouterDonneeMiseEnGestion: (donneeMiseEnGestion: Types.DonneesMiseEnGestion) => void;
        /**
         * Recherche dans les données de mise en gestion une propriété de nom "cle", et renvoie la valeur de la première occurence trouvée. Undefined si la clé n'est pas trouvée.
         *
         */
        rechercherOccurenceCle: (cle: string) => any;
        /**
         * Correctif lié au contrat carte PRO
         */
        recuperationContartCarte: () => any;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre\enveloppeOffre".
     */
    interface IEnveloppeOffreService {
        sendPostRequest(enveloppeOffre: Types.IEnveloppeOffre): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * CodeAction="REF" : Mise en référence d'une offre dans le cas d'un avenant
         * CodeAction="MAJ" : Mise à jour d'une offre
         */
        sendPutRequest(enveloppeOffre: Types.IEnveloppeOffre, codeAction: IEnveloppeOffrePutQuery): ng.IPromise<Types.IEnveloppeOffreReponse>;
        getEnveloppeOffre(): Types.IEnveloppeOffreReponse;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre\enveloppeOffre"
     * avec le verbe d'action PUT.
     */
    interface IEnveloppeOffrePutQuery {
        codeAction: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre\enveloppeOffre".
     */
    class EnveloppeOffreAjaxImplService implements IEnveloppeOffreService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(enveloppeOffre: Types.IEnveloppeOffre): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param [enveloppeOffre] Objet contenant les champs permettant d'effectuer l'appel
         * @param [codeAction] Objet contenant le codeAction "MAJ" ou "REF" passé en query
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(enveloppeOffre: Types.IEnveloppeOffre, codeAction: IEnveloppeOffrePutQuery): ng.IPromise<Types.IEnveloppeOffreReponse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet EnveloppeOffreReponse
         */
        getEnveloppeOffre(): Types.EnveloppeOffreReponse;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    class EnveloppeOffreService {
        static enveloppeOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Classe de chargement des mocks
     */
    class InitialisationService {
        private $location;
        private config;
        static initialisationServiceId: string;
        static $inject: string[];
        constructor($location: ng.ILocationService, config: Types.Config);
        /**
         * Méthode permettant de déterminer si les mocks sont activés.
         * @author S0076105
         * @return Un booléen indiquant l'activation des mocks
         */
        isMockEnabled: (leMock: string) => boolean;
        /**
         * Méthode permettant de déterminer si un shunt est activé.
         * @author S0070531
         * @param [leShunt] Id du shunt à activer. Pour savoir ce qui existe, regarder la définition de l'objet "config" dans app.ts
         * @return Un booléen indiquant l'activation du shunt
         */
        isShuntEnabled: (leShunt: string) => boolean;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IForcageProduitsService {
        /**
         *  Renvoie les actions à afficher
         */
        getForcages(): Types.ForcageSuiteControleBdf;
        /**
         * Ajoute une personne à la liste.
         */
        ajouterPersonne(personne: Types.ForcagePersonne): void;
        modifierEtatPersonne(identifiantPersonne: number, pbCommFicp: boolean, pbCommFcc: boolean, ficheFicp: boolean, ficheFcc: boolean): void;
        /**
         * Ajoute un produit à la liste.
         */
        ajouterProduit(produit: Types.ForcageProduit): void;
        /**
         * Modifie l'état de forcage d'un produit. Aucune action si le produit n'existe pas.
         */
        modifierEtatForcageProduit(produitAModifier: Types.ForcageProduit, valeurForcage: boolean): void;
        /**
         * Indique si le produit a été forcé ou pas.
         */
        estForce(produit: Types.CompositionOffreProduit): boolean;
        /**
         * Mise à jour du controle associé au produit. donnee de type Any parce que donnee est potentiellement n'importe quoi renvoyé par un service quelconque.
         * idControle correspond à l'id du controle ("BDF" ...), id correspond à l'id de la personne.
         * En pratique comme le seul controle implémenté est le controle BDF, ca devrait être une myway.comRisquesClient.Model.PersonneBDF
         */
        mettreAJourResultatControles(idControle: string, id: number, donnee: any): void;
    }
    class ForcageProduitsService implements IForcageProduitsService {
        private constantes;
        static forcageProduitsServiceId: string;
        static $inject: string[];
        private forcages;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         *  Renvoie les forcages
         */
        getForcages: () => Types.ForcageSuiteControleBdf;
        /**
         * Ajoute une personne à la liste.
         */
        ajouterPersonne: (personne: Types.ForcagePersonne) => void;
        modifierEtatPersonne: (identifiantPersonne: number, pbCommFicp: boolean, pbCommFcc: boolean, ficheFicp: boolean, ficheFcc: boolean) => void;
        /**
         * Ajoute un produit à la liste. Evite d'y mettre des doublons
         */
        ajouterProduit: (produitAInserer: Types.ForcageProduit) => void;
        /**
         * Modifie l'état de forcage d'un produit. Aucune action si le produit n'existe pas.
         */
        modifierEtatForcageProduit: (produitAModifier: Types.ForcageProduit, valeurForcage: boolean) => void;
        /**
         * Indique si le produit a été forcé ou pas.
         * @return true si le produit a été trouvé dans la liste des produits à forcer, et que son indicateur de forcage est à true.
         * Renvoie aussi true si un controle a été demandé et que le contrôle s'est bien passé, donc l'indicateur de forcage ne s'applique pas.
         * Faux sinon.
         */
        estForce: (produit: Types.CompositionOffreProduit) => boolean;
        /**
         * Fonction spécifique d'interprétation du résultat du contrôle BDF depuis
         */
        static testResultatControleBdf: (donnee: myway.comRisquesClient.Model.PersonneBDF) => boolean;
        /**
         * Mise à jour du résultat du contrôle afin que le P/S demandeur puisse éventuellement en prendre connaissance
         * (cartes pour la mise en instance par ex.)
         */
        mettreAJourResultatControles: (idControle: string, id: number, donnee: any) => void;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ICompositionOffreService {
        /**
         * Renvoie le panier de l'offre en cours
         */
        getCompositionOffre(): Types.CompositionOffre;
        /**
         * Supprime les références circulaires présentes dans le panier (liens "ascendant") en vue d'une sérialisation de celui-ci.
         */
        supprimerReferencesCirculaires(): void;
        /**
         * Rétabli les liens ascendants du panier. [non implémenté]
         */
        retablirReferencesCirculaires(): void;
        /**
         * Permet de lancer l'extraction des produits de la composition courante
         */
        extractionProduitsDepuisComposition(): Types.CompositionOffreProduit[];
        presenceServiceChequierDansOffre(): boolean;
        recupererMandatairesPanier(): Types.Tiers.Procuration[];
        estUneOffreEpargne(): boolean;
    }
    class CompositionOffreService implements ICompositionOffreService {
        private $q;
        private $rootScope;
        private constantes;
        private entiteTitulaireBdrService;
        private tiersService;
        private contexteGgoStockageService;
        private catalogueService;
        private parametrageBlocsService;
        private procurationService;
        codeSousFamilleActeDeGestionOffre: string;
        private _parametrage;
        private _entites;
        private _personnes;
        private _catalogue;
        private _mandataires;
        private _contexte;
        private static compositionOffre;
        static compositionOffreServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, procurationService: Services.IProcurationService);
        retablirReferencesCirculaires: () => void;
        private supprimerReferencesCirculairesNiveauProduit;
        supprimerReferencesCirculaires: () => void;
        getCompositionOffre: () => Types.CompositionOffre;
        private formatterErreurProduitService;
        /**
         * Permet de récupérer le code sous famille acte de gestion du P/S correspond pour la directive à appeler durant la PERSO/MEG
         */
        private extraireFamilleActeGestionPourProduit;
        /**
         * CRI : Permet de retourner un tableau contenant la liste complète des P/S à mettre en gestion (entité + personne)
         */
        extractionProduitsDepuisComposition: () => Types.CompositionOffreProduit[];
        presenceServiceChequierDansOffre: () => boolean;
        recupererMandatairesPanier: () => Types.Tiers.Procuration[];
        estUneOffreEpargne: () => boolean;
    }
}

declare module GestionGeneriqueOffres.Services {
    class GestionEditiqueService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        private contractualisationActeService;
        private tiersService;
        private contexteGgoStockageService;
        private entiteTitulaireBdrService;
        private offreDonneesService;
        private signataireService;
        private compositionOffreService;
        private catalogueService;
        private codeTypeProduitServicePrincipalOffre;
        static gestionEditiqueServiceId: string;
        static codeModeMiseEnGestion: string;
        static codeTypeMarcheEntreprise: string;
        contractualisationActe: any;
        private _compositionOffre;
        private _numeroEntiteTitulaire;
        private _codeEtablissement;
        private _codeActionGestion;
        private _codeCanal;
        private _titulaires;
        static $inject: string[];
        /**
         * Constructeur du service GestionEditiqueService
         *
         * @param $q {ng.IQService}
         * @param serviceAgentExtended {MyWay.Services.ServiceAgentExtended}
         * @param constantes {GestionGeneriqueOffres.Constantes.Definitions}
         * @param contexteService {Services.ContexteService}
         * @param contractualisationActeService {myway.comEditiqueNumerisation.Services.ContractualisationActeService}
         * @param tiersService {Services.TiersService}
         * @param contexteGgoStockageService {Services.ContexteGgoStockageService}
         * @param entiteTitulaireBdrService {Services.IEntiteTitulaireBdrService}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.IOffreDonneesService, signataireService: Services.SignatairesService, compositionOffreService: Services.ICompositionOffreService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteReduit: () => ng.IPromise<void>;
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteComplet: () => ng.IPromise<void>;
        private getDonneesEligibilite;
        private getDonneesProduitsServices;
        private rechercheActeGestionSecondaire;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IControlePreRequisService {
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * lorsqu'un produit est ajouté à la composition de l'offre
         */
        effectuerControlesPreRequisComposition: (produitService: Types.CompositionOffreProduit, personne?: Types.Tiers.Personne | Types.Tiers.Procuration) => Types.ResultatControlePrerequis;
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * au moment de la mise en gestion
         */
        effectuerControlesPreRequisMiseEnGestion: (donneesContextuelles: Types.DonneesContextuelles[], controleBDFmodeBDR?: boolean) => ng.IPromise<boolean>;
    }
    class ControlePreRequisService implements IControlePreRequisService {
        private $q;
        private initialisationService;
        private constantes;
        private serviceAgent;
        private modalService;
        private serviceAgentExtended;
        private interroBDFService;
        private tiersService;
        private catalogueService;
        private forcageProduitsService;
        private gestionEditiqueService;
        private compositionOffreService;
        private parametrageBlocsService;
        private contexteGgoStockageService;
        private _parametrageBlocs;
        private _composition;
        static controlePreRequisId: string;
        static $inject: string[];
        constructor($q: ng.IQService, initialisationService: Services.InitialisationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, interroBDFService: myway.comRisquesClient.InterroBDFService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, forcageProduitsService: Services.ForcageProduitsService, gestionEditiqueService: Services.GestionEditiqueService, compositionOffreService: Services.CompositionOffreService, parametrageBlocsService: Services.IParametrageBlocsService, contexteGgoStockageService: Services.ContexteGgoStockageService);
        /**
         * Construit un tableau de personnes à controler vis a vis d'un controle principal et secondaire
         */
        private construireTableauPersonnesAControler;
        /**
         * Construit la question Contrôle BDF manuel
         */
        private construireQuestionControleBdfManuel;
        /**
         * Construit la question Contrôle BDF découvert
         */
        private construireQuestionControleBdfDecouvert;
        /**
         * Construit la question Contrôle BDF carte
         */
        private construireQuestionControleBdfCarte;
        /**
         * Construit la question Contrôle BDF Chèque
         */
        private construireQuestionControleBdfCheque;
        /**
         * Effectue le contrôle des pré-requis sur l'écran composition, à la mise au panier des produits
         */
        effectuerControlesPreRequisComposition: (produitServiceAControler: Types.CompositionOffreProduit, personne?: Types.Tiers.Personne | Types.Tiers.Procuration) => Types.ResultatControlePrerequis;
        /**
         * Effectue le contrôle des pré-requis sur l'écran récap, lors de la mise en gestion des produits
         * @param [listeDonneesContextuelles] Correspond à une collecte des objets DonneesContextuelles associés aux produits services mis en gestion
         * @return Rien
         */
        effectuerControlesPreRequisMiseEnGestion: (listeDonneesContextuelles: Types.DonneesContextuelles[], controleBDFmodeBDR?: boolean) => ng.IPromise<boolean>;
    }
}


declare module GestionGeneriqueOffres.Services {
    interface IMessagesService {
        /**
         *  Renvoie les messages à afficher
         */
        getMessages(): Types.Message[];
        raz(): void;
        ajouterMessage(message: string, style?: string, visible?: boolean, delai?: number): void;
    }
    class MessagesService implements IMessagesService {
        private $timeout;
        private mwNotificationService;
        private constantes;
        /**
         * Contient les messages
         */
        private _listeMessages;
        static messagesServiceId: string;
        static $inject: string[];
        constructor($timeout: ng.ITimeoutService, mwNotificationService: MyWay.UI.IMwNotificationService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         *  Renvoie les messages à afficher
         */
        getMessages: () => Types.Message[];
        /**
         * Remet à zéro la liste des messages
         */
        raz: () => void;
        /**
         * Ajoute un message à la liste.
         */
        ajouterMessage: (message: string, style?: string, visible?: boolean, delai?: number) => void;
        /**
         * Supprime un message a un index donné du tableau
         */
        private supprimerMessageParId;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionPreProducteurService {
        /**
         *  Effectue la mise en gestion :
         *
         *   Ce qui suit est partiellement obsolète depuis l'ajout des phases pré et post producteur.
         *
         *   - Appel de la création de l'enveloppe, ressource offre-v1/enveloppeOffre POST (enveloppe-offre-service) -- fait CHBR --
         *   - Appel de la liste des documents à produire (renvoie d'id IDN) (librairie contractualisationActe en mode complet) -- à faire CERI --
         *   - Appel des prérequis BdF / Bâle 2 en mode complet (édition / archivage) -- en cours CHBR --
         *   - Appel de chacun des P/S selon leur ordre de priorité -- fait CHBR --
         *   - Appel des producteurs (appel-producteur-service) -- à faire --
         *        Impulse
         *          Appel de Impulse conditionné par la présence de la valeur "BPCEA_IMPULSE" dans IdProducteur du contexte.
         *          Appel de Impulse via LISA, 1 appel par personne et par groupe de 3 P/S (lié à la structure de la querystring Impulse)
         *        Izivente
         *          Appel de Izivente via LISA, réserve
         *
         *   - Appel de la création du dossier de prélèvement, ressource tarification-v1/tarificationOffrePrelevement
         *     (tarification-offre-prelevement-service) -- en cours ADIAZ --
         *   - Appel du rattachement du code promo manuelle à l'offre, ressource tarification-v1/tarificationOffrePromotion
         *     (tarification-offre-promotion-service) -- A confirmer --  -- à faire --
         *   - Appel de la levée de l'instance, ressource offre-v1/enveloppeOffre PUT (enveloppe-offre-service) -- fait ADIAZ --
         *   - Rattachement des P/S externes, ressource offre-v1/miseEnGestionPSExterne (offre-mise-en-gestion-ps-externe-service)-- à faire --
         *   - Avantage famille, ressource offre-v1/avantageFamilleOffre POST -- fait ADIAZ --
         *
         */
        /**
         * Mise en gestion pré-producteur
         */
        mettreOffreEnGestionPreProducteur(): void;
        finirControleBDFavecArchivage: () => ng.IPromise<boolean>;
    }
    class MiseEnGestionPreProducteurService implements IMiseEnGestionPreProducteurService {
        private $rootScope;
        private $location;
        private $q;
        private modalService;
        private serviceAgentExtended;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private contexteGgoStockageService;
        private enveloppeOffreService;
        private catalogueService;
        private offreDonneesService;
        private actionsService;
        private tiersService;
        private entiteTitulaireBdrService;
        private controlePreRequisService;
        private forcageProduitsService;
        private signataireService;
        private gestionEditiqueService;
        private sauvegardeContexteService;
        private _contexteGgo;
        private _catalogue;
        private _listeProduitsServices;
        private _offreDonnees;
        private _acteDeGestion;
        private _composition;
        static miseEnGestionPreProducteurServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, enveloppeOffreService: Services.IEnveloppeOffreService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, actionsService: Services.ActionsService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, controlePreRequisService: Services.ControlePreRequisService, forcageProduitsService: Services.ForcageProduitsService, signataireService: Services.SignatairesService, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService);
        mettreOffreEnGestionPreProducteur: () => void;
        private doPopUpErreurBdf;
        finirControleBDFavecArchivage: () => ng.IPromise<boolean>;
        /**
         * Construit les données nécessaires aux contrôles de pré requis, càd, pour l'instant, uniquement le contrôle BDF
         */
        private construireDonneesContextuelles;
        /**
         * Ressource enveloppe, partie contexte, création (SU08)
         * @return Query offre contexte
         */
        private construireQueryEnveloppeOffreContexte;
        /**
         * On fait un peu de mapping pour fournir a la ressource quelque chose sans les n° d'entité/personne pour recherche.
         * On en profite pour patcher les modeTraitementProduitService incorrectement positionnés à 2 pour les produits
         * service marqué "ne pas reprendre" (codeRepriseEnForcage = N) qu'il faut positionner à 1 au lieu de 2 (problème de l'alertecureuil
         * repris à tort). On les repère dans la liste au fait que les n° de personne et entité sont à 0 mais le modeTraitementProduitService
         * = 2.
         */
        private mapper;
        private construireQueryCreationEnveloppeOffre;
        /**
         * Construit une liste de produits service au format attendu par la ressource pour la partie "contenu"
         * Cette liste contient tous les items présents dans catalogueBrut.
         * catalogueBrut contient le catalogue transmis par la ressource offre-v1/propositionOffre avant tout retraitement par GGO
         * On met 0 dans les entités et les personnes. balayerTousProduitsServices mettra les valeurs voulues dans ces zones, mais uniquement
         * pour les produits souscrits.
         * Pour les produits repris qu'on ne souhaite pas reprendre, on doit mettre 1 dans modeTraitementProduitService et 0 dans les personnes et entités.
         */
        private construireListeProduitsServicesDepuisCatalogueBrut;
        /**
         * Mise à jour de l'entité titulaire et de la personne pour un produit effectivement détenu.
         */
        private mettreAJourListeProduitsServicesDepuisComposition;
        /**
         * Parcours du produit service et de ceux situé sous lui. Chaque P/S est poussé dans un tableau
         */
        private balayerTousProduitsServices;
        /**
         * Ressource enveloppe, partie contenu et référence, création (SU09 et SU10)
         * Pour construire la partie contenu, il faut renvoyer tous les segments initialement envoyés à GGO via offre-v1/propositionOffre
         * @return void
         */
        private construireQueryEnveloppeOffreContenuEtReference;
        /**
         * Création de l'enveloppe de l'offre
         * @return Promesse sur un objet IEnveloppeOffreReponse, qui est l'objet renvoyé par la ressource et qui contient notamment
         * le n° de l'offre souscrite (en souscription)
         */
        creerEnveloppeOffre: () => ng.IPromise<Types.IEnveloppeOffreReponse>;
        verifierEligibiliteReduit: () => ng.IPromise<void>;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeContexteService {
        sauvegarderContexteCenet(idProduit: string, actionPtu: string): ng.IPromise<any>;
        sauvegarderContexteSepamail(rice: string, action: string): ng.IPromise<any>;
        sauvegarderContexteConnClientPart(idPersonne: string): ng.IPromise<any>;
        sauvegarderContexteGGHO(produit: Types.CompositionOffreProduit, param: IParametreGGHO): ng.IPromise<any>;
        lancerSPAEditique(modeReedition?: boolean): void;
    }
    interface IContratEntreeCenet {
        SIGLE: string;
        ACTION_PTU: string;
        CODE_ETAB: string;
        CLIENT_EXTERNE: string;
        OFFRE: string;
        NUM_OFFRE: string;
        EDS_AG: string;
    }
    interface IContratEntreeSepamail {
        SIGLE: string;
        COHCBQ: string;
        NODAPE: string;
        Service: string;
        Action: string;
        NOBCOF: string;
        RICE: string;
    }
    interface IContratEntreeConnClientPart {
        identifiantPersonne: string;
    }
    interface IParametreGGHO {
        codeEtablissementContrat: string;
        codeGuichetContrat: string;
        codeTypeProduitServiceContrat: string;
        referenceProduitServiceContrat: string;
        numeroPersonneDetentrice: number;
        codeActeGestion: string;
        codeProduitService: number;
    }
    interface IContratEntreeGGHO {
        codeEntite: string;
        codeCanal: string;
        identifiantContrat: string;
        codeSensCommunication: string;
        identifiantDossierVente: any;
        codeApplicationAppelante: string;
        codeProduitService: number;
        codeActeGestion: string;
        numeroPersonneIdentifiee: number;
        identifiantEntiteTitulaire: number;
        numeroPersonneDetentrice: string | number;
        codeEtablissementContrat: string | number;
        codeGuichetContrat: string | number;
        codeTypeProduitServiceContrat: string | number;
        referenceProduitServiceContrat: string | number;
    }
    interface IContratEntreeContractualisation {
        libelleActe: string;
        codeGuichet: string;
        referenceContrat: number;
        identifiantAgence: string;
        codeEntite: string;
        identifiantAgent: string;
        identifiantActeExterne: number;
        referenceActeProducteur: number;
        rangSign: number;
        codeRoleSignataire: string;
        codeTypeAttributaireDocument: string;
        identifiantAttributaire: string;
        intituleAttributaire: string;
        libelleExterneDocumentEntreprise: string;
        libelleDescriptionDocument: string;
        identifiantDocumentGED: number;
        identifiantComposantApplicatif: string;
        codeTypeSignataire: string;
        numeroAffichageDocument: string;
        idOptSignr: string;
        msgOptSignr: string;
    }
    interface IPanierProducteurIzivente {
        codeBinProducteur: number;
        compteSupportProducteur: string;
        typeAppelProducteur: string;
        numeroPersonneProducteur: string;
    }
    interface IPanierProducteurImpulse {
        typeDetenteur: string;
        idDetenteur: number;
        codeProducteur: string;
        codeEtablissement: string;
    }
    interface IPanierProducteur {
        impulse: any;
        izivente: any;
    }
    interface IAttributaire {
        id: string;
        intitule: string;
    }
    interface IDocumentBanqueDeFrance {
        idGED: string;
        numeroPersonne: number;
    }
    class SauvegardeContexteService implements ISauvegardeContexteService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        private contexteService;
        private tiersService;
        private contexteGgoStockageService;
        private entiteTitulaireBdrService;
        private compositionOffreService;
        private gestionEditiqueService;
        private catalogueService;
        private signataireService;
        private donneesMiseEnGestionService;
        private enveloppeOffreService;
        private modalService;
        private offreDonneesService;
        private saisieRiceService;
        private actionsService;
        private routageEditique;
        private $location;
        static sauvegardeContexteServiceId: string;
        compteSupport: any;
        private _ggoConstantes;
        private _numeroEntiteTitulaire;
        private _nombrePersonneEntiteTitulaire;
        private _libelleEntiteTitulaire;
        private _codeEtablissement;
        private _codeActionGestion;
        private _codeCanal;
        private _referenceExterneAgent;
        private _numeroExterneEds;
        private _numeroOffre;
        private _idTier;
        private _agent;
        private _codeGuichet;
        private _titrePrincipal;
        private _contexteGgo;
        private _idEdsExterne;
        private _catalogue;
        private _libelleOffre;
        private _contratEntreeCenetClefs;
        private _contratEntreeSepaMailClefs;
        private _contratEntreeConnClientPartClefs;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du service SauvegardeContexteService
         *
         * @param $q {ng.IQService}
         * @param serviceAgentExtended {MyWay.Services.ServiceAgentExtended}
         * @param constantes {GestionGeneriqueOffres.Constantes.Definitions}
         * @param contexteService {Services.ContexteService}
         * @param tiersService {Services.TiersService}
         * @param contexteGgoStockageService {Services.ContexteGgoStockageService}
         * @param entiteTitulaireBdrService {Services.IEntiteTitulaireBdrService}
         * @param compositionOffreService {Services.ICompositionOffreService}
         * @param gestionEditiqueService {Services.GestionEditiqueService}
         * @param catalogueService {Services.ICatalogueService}
         * @param signataireService {Services.SignatairesService}
         * @param donneesMiseEnGestionService {Services.IDonneesMiseEnGestionService}
         * @param enveloppeOffreService {Services.IEnveloppeOffreService}
         * @param modalService {MyWay.UI.IModalService}
         * @param offreDonneesService {Services.IOffreDonneesService}
         * @param saisieRiceService {myway.comInterdomaine.SaisieRiceService}
         * @param miseEnGestionPostProducteurService {Services.MiseEnGestionPostProducteurService}
         * @param actionsService {Services.IActionsService}
         * @returns {void}
         */
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.IContexteService, tiersService: Services.ITiersService, contexteGgoStockageService: Services.IContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, compositionOffreService: Services.ICompositionOffreService, gestionEditiqueService: Services.GestionEditiqueService, catalogueService: Services.ICatalogueService, signataireService: Services.SignatairesService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, enveloppeOffreService: Services.IEnveloppeOffreService, modalService: MyWay.UI.IModalService, offreDonneesService: Services.IOffreDonneesService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, actionsService: Services.ActionsService, routageEditique: Types.RoutageEditique, $location: ng.ILocationService);
        /**
         * @ngdoc method
         * @name sauvegarderContexteCenet
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application CENET avant le débranchement
         *
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteCenet(idProduit: string, actionPtu: string): ng.IPromise<{}>;
        /**
         * @ngdoc method
         * @name sauvegarderContexteSepamail
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application SEPAMAIL avant le débranchement
         *
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteSepamail(rice: string, action: string): ng.IPromise<{}>;
        /**
         * @ngdoc method
         * @name sauvegarderContexteConnClientPart
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application CONN_CLIENT_PART avant le débranchement
         *
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteConnClientPart(idPersonne: string): ng.IPromise<{}>;
        sauvegarderContexteGGHO(produit: Types.CompositionOffreProduit, param: IParametreGGHO): ng.IPromise<{}>;
        /**
         * @ngdoc method
         * @name lancerSPAEditique
         * @description
         * Méthode appelée après la mise en gestion et les débranchements, afin de poursuivre sur la SPA éditique
         *
         * @param {void}
         * @returns {void}
         */
        lancerSPAEditique(modeReedition?: boolean): void;
        /**
         * @ngdoc method
         * @name sauvegarderContexteEditique
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application éditique avant le débranchement
         *
         * @param {void}
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteEditique(): ng.IPromise<{}>;
        private getListeProduitsServices();
        private epureActesSecondairesApresMiseEnGestion(codeMiseEnGestion, etatProduit, acteGestion);
        private traitementProduitService(descendant);
        private constructionProduitService(descendant, etatDuProduit);
        constructionContexteContractualisation(): Myway.Ressource.ContractualisationActe.IContractualisationActe;
        private recuperationDocumentBanqueDeFrance();
        private getDonneesAttributaire(codeType);
        private getLibellePersonne(numeroPersonne);
        private constructionSignatairesParDocument(docAProduire, signatairesActe);
        /**
         * @ngdoc method
         * @name sauvegarderContexte
         * @description
         * Méthode permettant de sauvegarder un contexte à partir d'une structure et de ses valeurs
         *
         * @param {any} contratEntree
         * @param {any} contratEntreeClefs
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexte(contratEntree: any, contratEntreeClefs: any): ng.IPromise<any[]>;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IValidationFormulaireService {
        /**
         *  Validation des formulaires
         */
        validerComposition(): void;
        validerFormulaireBdr(produit: Types.CompositionOffreProduit): ng.IPromise<boolean>;
    }
    class ValidationFormulaireService implements IValidationFormulaireService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgentExtended;
        private constantes;
        private catalogueService;
        private compositionOffreService;
        private actionsService;
        private erreurService;
        private signatairesService;
        private modalService;
        private contexteGgoStockageService;
        private tarificationOffreService;
        private miseEnGestionPreProducteurService;
        private sauvegardeContexteService;
        private routageEditique;
        private gestionEditiqueService;
        private composition;
        private contexte;
        static validationFormulaireServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService, tarificationOffreService: Services.ITarificationOffreService, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService, sauvegardeContexteService: Services.SauvegardeContexteService, routageEditique: Types.RoutageEditique, gestionEditiqueService: Services.GestionEditiqueService);
        validerFormulaireBdr: (produit: Types.CompositionOffreProduit) => ng.IPromise<boolean>;
        private verifierEligibiliteReduit;
        private verifierEligibiliteComplet;
        private sauvegarderContexteEditique;
        private lancerSPAEditique;
        private afficherModaleReedition;
        private afficherModaleOffreVide;
        /**
         * Contrôle que les assemblages obligatoires ont été souscrits
         * @param [compositionProduit] : la composition
         * @return l'assemblage obligatoire pour lequel aucun produit n'a été souscrit, null si aucun assemblage n'a été trouvé (ok)
         */
        private controlerAssemblagesObligatoires;
        /**
         * Cette fonctione, qui permet de vérifier si AU MOINS UN P/S a été modifié, ajouté ou supprimé
         * retourne TRUE dans ce cas précis et FALSE si il n'y a aucune modification au niveau des P/S
         */
        private verifierProduitsServicesModifies;
        /**
         * Validation des formulaires
         */
        validerComposition: () => void;
        private mettreOffreEnGestion;
    }
}


declare module GestionGeneriqueOffres.Utilitaires {
    interface IDoPopInParametrage {
        confirmationOptions: MyWay.UI.IModalPopup;
        quitter: boolean;
    }
    class Utils {
        /**
         * Essaie de décoder ce qu'il y a dans raison.
         * @param [raison] Une erreur, typiquement le contenu du paramètre d'un callback (reject ou catch)
         * @param [message] Optionnel - Message
         * @return La fonction essaie de décoder le contenu de raison afin d'y trouver un message d'erreur significatif. Si la fonction s'avère être
         * incapable de comprendre le contenu de raison, elle renvoie soit le second paramètre optionnel "message" s'il est présent. Autrement, elle
         * renvoie "Erreur indéterminée".
         */
        static decoderRaison(raison: any, message?: string): string;
        static checkInject(classe: any, args: IArguments): void;
        /**
         * Reroute vers la page d'erreur GGO
         * message : le message d'erreur à afficher
         * cause : la cause
         * infosTechniques : optionnel. Peut être une stacktrace par exemple.
         */
        static erreurGGO(message: string, cause: any, modeAffichageErreur: Constantes.ModeAffichageErreur, infosTechniques?: string, erreurPleinEcranForcee?: boolean): void;
        /**
         * Permet de récupérer le titre principal
         */
        static getTitrePrincipal(codeActeGestion: string): string;
        /**
         * Ajouter des '0' devant un nombre
         * @param [num] le nombre à formater
         * @param [size] la taille de la chaîne retournée
         */
        static leadingZero(num: number, size: number): string;
        /**
         * Détermine si le domaine est autorisé à appeler les fonctions de débogage.
         * Les domaines autorisés sont localhost et dua.
         * Les fonctions sont les toolstips catalogue/panier, le bouton debug, les mocks etc.
         * @param [domaine] le domaine
         * @return vrai autorisé, faux non autorisé
         */
        static domaineAutorisePourDebug(domaine: string): boolean;
        /**
         * Formatte un numéro de compte si celui-ci fait + que 10 c
         * 131350008004123456789 ==> 13135-00080-04123456789
         * @param [numeroCompte] le n° de compte non formatté
         * @return le n° de compte formatté, vide si le numéro de compte = INDEFINI, inchangé si longueur < 10 caractères en entrée.
         */
        static formatterNumeroCompte(numeroCompte: string): string;
        static consoleLog(...args: any[]): void;
        static creerPersonne(codeEtablissement: string, idPersonne: number, codePersonnaliteJuridique: string, codeCivilite: string, nomFamillePersonnePhysique: string, designationCourte: string, prenom: string, dateNaissance: string): Types.Tiers.Personne;
        /**
         * Déplace la vue vers le haut de l'écran pour consulter les messages d'erreur
         */
        static allerAncre(ancre?: string): void;
        static creerCompositionOffreProduit(detenteur: Types.Tiers.Personne, acteGestion: string): Types.CompositionOffreProduit;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IChargementFichiersComposantService {
        charger(): void;
    }
    class ChargementFichiersComposantService implements IChargementFichiersComposantService {
        private $rootScope;
        private $q;
        private $ocLazyLoad;
        private modalService;
        private serviceAgent;
        private parametrageBlocsService;
        private catalogueService;
        private messagesService;
        private contexteGgoStockageService;
        private constantes;
        private offreDonneesService;
        private _tComposants;
        private _fichiersAChargerPromises;
        private _fichiersACharger;
        private _descriptionFichiers;
        private _stopChargement;
        private _niveauxDePriorites;
        static chargementFichiersComposantServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $ocLazyLoad: oc.ILazyLoad, modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgent, parametrageBlocsService: Services.IParametrageBlocsService, catalogueService: Services.ICatalogueService, messagesService: Services.MessagesService, contexteGgoStockageService: Services.IContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, offreDonneesService: Services.IOffreDonneesService);
        /**
         * Fonction appellée par parcourirCatalogue et permettant de récupérer les noms des composants utilisés par
         * une des tuiles du catalogue. Renvoyer vrai permet de passer à la tuile suivante (cf. parcourirCatalogue).
         * tComposants contiendra au final tous les composants à charger
         */
        private getIdComposant;
        /**
         * Détermination du produit de priorité de mise en gestion maximum
         * On teste les différents cas (pas de priorité, ou bien pas le bon type, etc. Si quelque chose ne va pas, on assume
         * une priorite de 0 (la plus faible)
         */
        private getPriorite;
        /**
         * Appel à oclazyload pour charger le fichier désigné par cheminAccesFichier
         */
        private effectuerChargement;
        /**
         * Traitement d'un niveau de priorité de mise en gestion
         * Le tableau listeProduitsPourPriorite contient les produits du niveau à mettre en gestion
         * @param [listeProduitsPourPriorite] Liste des produits du niveau de priorité courant
         * @param [defer] l'objet deffered qu'on trimballe dans chaque niveau de récursion. Lorsqu'on arrive au niveau 0,
         * càd à la fin de la récursion, on le resolve.
         */
        private traiterNiveauDePrioriteDeChargement;
        charger: () => ng.IPromise<boolean>;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\particulierInformation".
     */
    interface ITiersCorporateInformationService {
        sendGetRequest(data: ITiersGetCorporateInformationQuery): ng.IPromise<Types.Tiers.ICorporateInformation>;
        getCorporateInformation(): Types.Tiers.CorporateInformation;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierInformation"
     * avec le verbe d'action GET.
     */
    interface ITiersGetCorporateInformationQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierInformation".
     */
    class TiersCorporateInformationAjaxImplService implements ITiersCorporateInformationService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetCorporateInformationQuery): ng.IPromise<Types.Tiers.ICorporateInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getCorporateInformation(): Types.Tiers.CorporateInformation;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierInformation".
     */
    class TiersCorporateInformationMockImplService implements ITiersCorporateInformationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetCorporateInformationQuery): ng.IPromise<Types.Tiers.ICorporateInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getCorporateInformation(): Types.Tiers.CorporateInformation;
    }
    class TiersCorporateInformationService {
        static tiersCorporateInformationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDonneesInitialesService {
        /**
         * Effectue le traitement de chargement des données utilisées par GGO : personnes, entités, catalogue, paramétrage, ...
         * et renvoie une promesse sur un objet de type "Types.DonneesInitiales" qui doit être résolu avant de passer à la route /perso
         * (page de perso de GGO)
         * @return Promesse sur les données initiales
         */
        get(): ng.IPromise<Types.DonneesInitiales>;
    }
    class DonneesInitialesService implements IDonneesInitialesService {
        private $rootScope;
        private $q;
        private $timeout;
        private constantes;
        private progressionChargement;
        private contexteGgoService;
        private contexteGgoStockageService;
        private entiteTitulaireBdrService;
        private tiersService;
        private catalogueService;
        private parametrageBlocsService;
        private offreDonneesService;
        private chargementFichiersComposantService;
        private serviceAgentExtended;
        private $location;
        private tiersCorporateInformationService;
        private procurationService;
        /**
         * Indique si le get a déjà été appelé au cours de cette session
         */
        private static _donneesChargees;
        private _contexteGgo;
        private _entitesTitulaires;
        private _donnees;
        private _nbEntites;
        private _interfaceAppel;
        static donneesInitialesServiceId: string;
        static $inject: string[];
        donneesChargees: boolean;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, progressionChargement: Types.ProgressionChargement, contexteGgoService: Services.ContexteGgoService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, offreDonneesService: Services.OffreDonneesService, chargementFichiersComposantService: Services.ChargementFichiersComposantService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, tiersCorporateInformationService: Services.ITiersCorporateInformationService, procurationService: Services.IProcurationService);
        get: () => ng.IPromise<Types.DonneesInitiales>;
        private terminerTraitementEnErreur;
        /**
         * Chargement catalogue offre (appel de la ressource souscription / avenant
         */
        private traiterCatalogue;
        /**
         * Chargement de toutes les personnes qui figurent dans la composition des entités passées en paramètre
         */
        private traiterPersonnesEtParametrage;
        private traiterPersonnesEtParametrageWrapper;
        private traiterProcuration;
        private traiterProcurationWrapper;
        private traiterCatalogueWrapper;
        /**
         * Traitement des entités titulaires. On passe au traitement des personnes une fois que toutes les
         * entités sont chargées.
         */
        private traiterEntitesTitulaires;
        private traiterEntitesTitulairesWrapper;
        recupererContexteGgo: () => ng.IPromise<Types.ContexteGgo>;
        private traiterDonneesInitiales;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompoControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private $q;
        private donneesInitiales;
        private donneesInitialesService;
        private actionsService;
        private erreurService;
        private constantes;
        private validationFormulaireService;
        private serviceAgentExtended;
        private sauvegardeContexteService;
        private modalService;
        private signatairesService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        desabonnerChargementTermine: () => void;
        desabonnerChargementEnEchec: () => void;
        desabonnerActiverPanneauErreur: () => void;
        desabonnerActiverBloqueur: () => void;
        desabonnerDesactiverBloqueur: () => void;
        traitementEnCours: boolean;
        erreurChargementJs: boolean;
        chargementPerso: boolean;
        afficherLesErreurs: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, donneesInitialesService: Services.DonneesInitialesService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, constantes: GestionGeneriqueOffres.Constantes.Definitions, validationFormulaireService: Services.ValidationFormulaireService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, signatairesService: Services.SignatairesService);
        ajouterBoutonQuitterGgo(): void;
        afficherListeSignataires: boolean;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "offre/repriseOffre"
     */
    interface IRepriseOffreService {
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        getRepriseOffre(): Types.IRepriseOffre;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre/repriseOffre"
     * avec le verbe d'action GET.
     */
    interface IOffreGetRepriseOffreQuery {
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        identifiantElementStructureBis: number;
        identifiantProduitService: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeModaliteDetentionProduitService: string;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeModeGestionDansClient?: string;
        codeProduitServiceExterne?: string;
        codeDevise?: string;
        codeActionRepriseUnitaire?: string;
        codeEtablissementContrat?: string;
        codeGuichet?: string;
        referenceProduitService?: string;
        compteCodeGuichet?: string;
        compteCodeTypePS?: string;
        compteReferencePS?: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/repriseOffre".
     */
    class RepriseOffreAjaxImplService implements IRepriseOffreService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet RepriseOffre
         */
        getRepriseOffre(): Types.RepriseOffre;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/repriseOffre".
     */
    class RepriseOffreMockImplService implements IRepriseOffreService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: IOffreGetRepriseOffreQuery): ng.IPromise<Types.IRepriseOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet RepriseOffre
         */
        getRepriseOffre(): Types.RepriseOffre;
    }
    class RepriseOffreService {
        static repriseOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionEntite {
        private $rootScope;
        private $scope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private serviceAgent;
        private constantes;
        private contexteGgoStockageService;
        private entiteTitulaireBdrService;
        private tiersService;
        private offreDonneesService;
        private messagesService;
        private catalogueService;
        private compositionOffreService;
        compositionOffreEntitePersonne: Types.CompositionOffreEntitePersonne;
        positionPersonne: number;
        debug: boolean;
        conditionEntites: boolean;
        bouton: any;
        desabonnerSupprimerProduit: () => void;
        basculerBouton(): void;
        codeSousFamilleActeDeGestionOffre: string;
        codeEtablissement: string;
        /**
         * Fait scroller la perso vers une ancre de bloc.
         */
        allerAncre(idBloc: string): void;
        /**
         * Affiche la référence produit en fonction des données de référence et du mode d'affichage de la référence
         * (codeAffichageReferenceProduitService)
         */
        afficherReference(produit: Types.CompositionOffreProduit): string;
        /**
         * Cette fonction permet de ne pas afficher l'entête de la personne dans la composition si l'entité est en mode simple
         * (càd que l'entité ne contient qu'une personne, donc inutile de redonder la personne et l'entité dans la compo).
         */
        afficherPersonneDeLEntite(): boolean;
        /**
         * On force le recalcul de la directive métier en supprimant le produit du panier et en l'insérant à nouveau
         */
        private substituerProduitService(produit);
        /**
         * Gère les marqueurs (coche) et l'état (actif/inactif) de la tuile associée au produit passé en paramètre.
         */
        private gererEtatTuile(produit, assemblage);
        /**
         * Clôture d'un produit suite au clic sur la poubelle dans la composition
         * Soit le produit est purement et simplement supprimé du panier, soit il est marqué pour clôture
         */
        cloturerProduit(produit: Types.CompositionOffreProduit): void;
        /**
         * Annule le statut marquePourCloture positionné lorsque l'utilisateur clique sur l'icone d'annulation d'un produit déjà existant dans l'offre
         */
        retablirProduit(produit: Types.CompositionOffreProduit): void;
        /**
         * Permet de ne pas comptabiliser les "fausses personnes physiques" de la composition (type "PR" et "LA")
         */
        calculerNombrePersonneDansEntite(listeCompositionEntiteTitulaire: Types.PersonneEntiteTitulaire[]): number;
        /**
         * Au clic, l'utilisateur signale qu'un avenant sera demander sur ce produit, repris
         * lors des étapes de personnalisations.
         */
        editerProduit(produit: Types.CompositionOffreProduit): void;
        annulerEditerProduit(produit: Types.CompositionOffreProduit): void;
        editProduit(id: string): boolean;
        /**
         * Permet de savoir si on doit afficher l'icone permettant l'édition ou non
         */
        afficherIconeEdition(produit: Types.CompositionOffreProduit): boolean;
        testerAffichagePoubelleAssemblageSpecifique(produit: Types.CompositionOffreProduit): boolean;
        afficherCompositionEntitePersonne(): boolean;
        afficherCompositionIconeChevron(): boolean;
        afficherCompositionNomProduitProduitVisible(produit: Types.CompositionOffreProduit): boolean;
        afficherCompositionNomProduitProduitInvisible(produit: Types.CompositionOffreProduit): boolean;
        afficherIconeInvisible(produit: Types.CompositionOffreProduit): boolean;
        afficherIconePoubelle(produitCompte: Types.CompositionOffreProduit): boolean;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgent, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, offreDonneesService: Services.OffreDonneesService, messagesService: Services.MessagesService, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionTagsProduits {
        private constantes;
        private contexteGgoStockageService;
        modeAjoutProduitDansOffre: number;
        produitAjoute: Types.CompositionOffreProduit;
        estEnSouscription: boolean;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompteRenduControleur {
        private $q;
        private serviceAgentExtended;
        private contexteGgoStockageService;
        private contexteGgo;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteGgoStockageService: Services.ContexteGgoStockageService);
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        private majSyntheseNSDK();
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IDefautModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class DefautModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        triState: boolean;
        triStateIndeterminate: boolean;
        triStateLabel: string;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions);
        afficherBoutonValiderProduitAssemblage(): boolean;
        /**
         * Appelé lorsqu'on click sur une des case à cocher de la liste de choix.
         */
        multiselectionChange(items: Types.DonneesAssemblage[]): void;
        /**
         * Appeler lorsqu'on click sur la case à coché global (3 états).
         */
        forceMultiSelection(items: Types.DonneesAssemblage[]): void;
        /**
         * Appeler lorsqu'on actionne une touche et que la case à coché global (3 états) a le focus.
         */
        keyDownTroisEtat($event: KeyboardEvent, items: Types.DonneesAssemblage[]): void;
        assemblageCumulablePersonneAucunProduit(item: Types.DonneesAssemblage): boolean;
        caseACocherClic(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class EditiqueControleur {
        private $q;
        private serviceAgentExtended;
        private modaleService;
        private contexteGgoStockageService;
        private contexteGgo;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modaleService: MyWay.UI.ModalService, contexteGgoStockageService: Services.ContexteGgoStockageService);
        private controlerRetourEditique();
        private updateDocumentsGeneres();
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IErreurChargementComposantModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class ErreurChargementComposantModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IErreurScope extends ng.IScope {
        constantes: GestionGeneriqueOffres.Constantes.Definitions;
        source: string;
        message: string;
        cause: any;
        infosTechniques: string;
        contexte: Types.ContexteGgo;
    }
    class ErreurControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $http;
        private constantes;
        private contexteGgoStockageService;
        private serviceAgentExtended;
        static controllerId: string;
        static $inject: string[];
        source: string;
        message: string;
        cause: any;
        infosTechniques: string;
        contexte: Types.ContexteGgo;
        date: Date;
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $http: ng.IHttpService, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private analyserStackTrace();
        quitterGgo(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IFacturationModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class FacturationModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        private tiersService;
        private entiteTitulaireBdrService;
        private offreDonneesService;
        private donneesMiseEnGestionService;
        private routageEditique;
        private referenceProduitPrincipalOffre;
        private codeTypeProduitServicePrincipalOffre;
        private signataireService;
        private contexteGgoStockageService;
        private catalogueService;
        private compositionOffreService;
        contexte: Types.DonneesContextuelles;
        produit: Types.CompositionOffreProduit;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IFacturationModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.OffreDonneesService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, routageEditique: Types.RoutageEditique, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, signataireService: Services.SignatairesService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService);
        /**
         *  La fonction qui va fabriquer le contexte à passer au bloc à partir du contexte GGO et des données du P/S
         */
        fabriquerContexte(modeAcces: string, modeAffichage: string, contexteAppel: string, contexte: Types.ContexteGgo, produit: Types.CompositionOffreProduit, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne, catalogue: Types.CatalogueNode, composition: Types.CompositionOffre, invisible: boolean, estModifie: boolean, repris: boolean, produitSelectionne: Types.CleValeur, referencesProduits: Types.ReferenceProduit[]): Types.DonneesContextuelles;
        mettreEnGestion(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class InformationDossier {
        private $rootScope;
        private constantes;
        libelleModeVente: string;
        libelleActeGestion: string;
        titreInfoDossier: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionBdrService {
        /**
         *  Effectue la mise du P/S
         */
        recupererProduitServiceEnCoursDeTraitement(): Types.CompositionOffreProduit;
        mettreEnGestionProduitServiceCourant(): ng.IPromise<Types.CompositionOffreProduit>;
        mettreEnGestion(produitService: Types.CompositionOffreProduit): ng.IPromise<boolean>;
        listeProduitServicesAMettreEnGestion: Types.CompositionOffreProduit[];
        enchainerApresLaMiseEnGestion(): void;
        recupererProchainProduitServiceATraiter(): boolean;
        initialiserListeProduitServiceAMettreEnGestion(produitsExtraits: Types.CompositionOffreProduit[]): void;
    }
    class Priorites {
        prioriteMinimum: number;
        prioriteMaximum: number;
    }
    class MiseEnGestionBdrService implements IMiseEnGestionBdrService {
        private $q;
        private $location;
        private $anchorScroll;
        private modalService;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private contexteGgoStockageService;
        private catalogueService;
        private offreDonneesService;
        private forcageProduitsService;
        private gestionEditiqueService;
        private actionsService;
        private validationFormulaireService;
        private serviceAgentExtended;
        private enveloppeOffreService;
        private entiteTitulaireBdrService;
        private sauvegardeContexteService;
        private codeTypeProduitServicePrincipalOffre;
        private tiersService;
        private miseEnGestionPreProducteurService;
        private _miseEnGestionTerminee;
        private _stopMiseEnGestion;
        private _listeProduitServicesAMettreEnGestion;
        private _contexteGGO;
        private _offreSouscrite;
        private _compositionOffre;
        private _positionTableauListeProduitService;
        private _phaseMiseEnGestion;
        static miseEnGestionBdrServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, modalService: MyWay.UI.IModalService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, forcageProduitsService: Services.ForcageProduitsService, gestionEditiqueService: Services.GestionEditiqueService, actionsService: Services.ActionsService, validationFormulaireService: Services.ValidationFormulaireService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, enveloppeOffreService: Services.IEnveloppeOffreService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, sauvegardeContexteService: Services.ISauvegardeContexteService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, tiersService: Services.TiersService, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService);
        listeProduitServicesAMettreEnGestion: Types.CompositionOffreProduit[];
        private classerProduitService;
        private classerProduitServiceParNiveauDePriorite;
        private classerProduitServiceParTypeAction;
        /**
         * Pendant la MEG, nous parcourons un tableau qui n'est pas l'objet original du service compositionOffre.
         * Il faut donc pouvoir être capable de retrouver le P/S original de la composition lorsqu'on détient celui dans le tableau de MEG
         */
        private trouverProduitServiceOriginalComposition;
        /**
         * Résolution d'un niveau de priorité de mise en gestion
         * Le fait qu'on soit dans le resolve de la promesse ne signifie pas que la mise en gestion s'est bien passée au
         * sens fonctionnel. Seul l'examen des messages d'erreur reçus peut le dire.
         * On a du 1-pour-1 entre le tableau listeProduitsPourPriorite et le tableau comptesRenduMiseEnGestion
         * @param [listeProduitsPourPriorite] Liste des produits mis en gestion pour ce niveau de priorité
         * @param [comptesRenduMiseEnGestion] Liste des CRR de mise en gestion pour ce niveau de priorité
         * @return faux : une erreur empêche de poursuivre la mise en gestion, vrai: la mise en gestion peut se poursuivre
         */
        private resoudreCompteRenduDeMiseEnGestion;
        /**
         * Détermine si le résultat de la mise en gestion de ce produit doit bloquer ou pas le processus de mise en gestion
         * On s'arrête si au moins un message d'erreur est de niveau Erreur ou ErreurFatale ET que ce produit est obligatoire.
         * @param [produit] Référence vers le produit mis en gestion dans la composition
         * @param [compteRendu] Le compte rendu de mise en gestion
         * @return Vrai si au moins une erreur a été retournée par le produit, sinon faux.
         */
        private testerErreurPresentePourProduit;
        /**
         * Renvoie le premier message d'erreur significatif pour le produit en erreur
         */
        private renvoyerPremiereErreurPourProduit;
        private fabriquerDonneesDeMiseEnGestion;
        private gererDebranchement;
        mettreEnGestion: (produitService: Types.CompositionOffreProduit) => ng.IPromise<boolean>;
        /**
         * CRI : Renvoie le P/S actuellement en MEG
         */
        recupererProduitServiceEnCoursDeTraitement: () => Types.CompositionOffreProduit;
        private formaterProduitServiceFacturation;
        initialiserListeProduitServiceAMettreEnGestion: (produitsExtraits: Types.CompositionOffreProduit[]) => void;
        /**
         * CRI : On renvoie le prochain P/S à gérer ou null si on est arrivé à la fin du tableau
         * TODO : A gérer autrement
         */
        recupererProchainProduitServiceATraiter: () => boolean;
        enchainerApresLaMiseEnGestion: () => void;
        /**
         * CRI : On détermine la prochaine action à effectuer, 3 possibilités :
         *  1) On personnalise un P/S
         *  2) On mets en gesion ce même P/S
         *
         *  et on passe au P/S suivant...
         *  jusqu'à ce que tous les P/S soient traités
         */
        mettreEnGestionProduitServiceCourant: () => ng.IPromise<Types.CompositionOffreProduit>;
        /**
         * Mise à jour de l'état d'une offre (Qr BO39) [codeAction="MAJ"].
         * @return Promesse sur un objet IEnveloppeOffreReponse
         */
        private miseAJourEtatOffre;
        /**
         * La référence contrat n'est actualisée que pour une souscription (ouverture).
         * On considère qu'il s'agit de la référence produit du produit identifié comme étant le produit principal, qu'on détermine
         * via son codipr
         * Càd le CDD pour un BL, du livret A pour une épargne LA, etc.
         */
        private actualiserReferenceContrat;
    }
}


declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class PanneauMessages {
        private messagesService;
        listeMessages: Types.Message[];
        static $inject: string[];
        constructor(messagesService: Services.MessagesService);
    }
}


declare module GestionGeneriqueOffres.Composition {
    class PersoControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $location;
        private $anchorScroll;
        private $q;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private serviceAgentExtended;
        private gestionEditiqueService;
        private sauvegardeContexteService;
        private modalService;
        private donneesMiseEnGestionService;
        private compositionOffreService;
        private miseEnGestionBdrService;
        private erreurService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        chargementPerso: boolean;
        afficherLesErreurs: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, compositionOffreService: Services.CompositionOffreService, miseEnGestionBdrService: Services.MiseEnGestionBdrService, erreurService: Services.ErreurService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnalisation {
        private $scope;
        private $rootScope;
        private $location;
        private $anchorScroll;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private contexteGgoStockageService;
        private miseEnGestionBdrService;
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        contexte: Types.ContexteGgo;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeSousFamilleActeDeGestionOffre: string;
        compositionOffre: Types.CompositionOffre;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, contexteGgoStockageService: Services.ContexteGgoStockageService, miseEnGestionBdrService: Services.MiseEnGestionBdrService);
        produit: Types.CompositionOffreProduit;
        titre: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnes implements ng.IDirective {
        private $rootScope;
        private constantes;
        private tiersService;
        personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        determinerStyleAlerte: (personne: Types.Tiers.Personne | Types.Tiers.PersonneMorale) => string;
        filtrerParPersonne: () => void;
        desabonnerTopControle: () => void;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, tiersService: Services.TiersService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapControleur {
        private $scope;
        private $rootScope;
        private $timeout;
        private $location;
        private $anchorScroll;
        private $q;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private serviceAgentExtended;
        private gestionEditiqueService;
        private sauvegardeContexteService;
        private modalService;
        private donneesMiseEnGestionService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        chargementRecap: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService);
        ajouterBoutonQuitterGgo(): void;
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        majSyntheseNSDK(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifBoutonControleur {
        private $scope;
        private $rootScope;
        private $location;
        private constantes;
        private modalService;
        private compositionOffreService;
        private _modeAcces;
        private _modeAffichage;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, modalService: MyWay.UI.IModalService, compositionOffreService: Services.CompositionOffreService);
        visualiserAvancement(): void;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification\tarificationOffreSynthese".
     */
    interface ITarificationOffreSyntheseService {
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification\tarificationOffreSynthese".
     */
    class TarificationOffreSyntheseAjaxImplService implements ITarificationOffreSyntheseService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreSynthese
         */
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification\tarificationOffreSynthese".
     */
    class TarificationOffreSyntheseMockImplService implements ITarificationOffreSyntheseService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(produitService: Types.IProduitServiceOffre): ng.IPromise<Types.ITarificationOffreSynthese>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreSynthese
         */
        getTarificationOffreSynthese(): Types.TarificationOffreSynthese;
    }
    class TarificationOffreSyntheseService {
        static tarificationOffreSyntheseServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifControleur {
        private $scope;
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private entiteTitulaireBdrService;
        private tarificationOffreSyntheseService;
        private contexteGgoStockageService;
        private tiersService;
        private catalogueService;
        private miseEnGestionBdrService;
        static controllerId: string;
        modeAcces: string;
        modeAffichage: string;
        compatibiliteTarification: boolean;
        compositionOffre: Types.CompositionOffre;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        codeSousFamilleActeDeGestionOffre: string;
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeActeGestion: string;
        libelleOffreBouquet: string;
        listeCompositionEntiteTitulaire: Types.PersonneEntiteTitulaire[];
        listePersonnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        afficherPersonne: boolean;
        static $inject: string[];
        afficherRecapitulatifTarification(): string;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, contexteGgoStockageService: Services.ContexteGgoStockageService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, miseEnGestionBdrService: Services.IMiseEnGestionBdrService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IRecapitulatifModaleScope extends ng.IScope {
        modalDatas: any;
    }
    class RecapitulatifModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IRecapitulatifModaleSectionScope extends ng.IScope {
        modeAffichage: string;
        modalDatas: any;
    }
    class RecapitulatifModaleSectionControleur {
        private $scope;
        private constantes;
        private miseEnGestionBdrService;
        static controllerId: string;
        static $inject: string[];
        compositionOffre: Types.CompositionOffreProduit[];
        constantesAffichage: GestionGeneriqueOffres.Constantes.Definitions;
        constructor($scope: IRecapitulatifModaleSectionScope, constantes: GestionGeneriqueOffres.Constantes.Definitions, miseEnGestionBdrService: Services.IMiseEnGestionBdrService);
        afficherProduit(produit: Types.CompositionOffreProduit): boolean;
        afficherErreurMeg(produit: Types.CompositionOffreProduit): boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IRecapitulatifSectionControleur extends ng.IScope {
        codeSection: string;
        compositionOffre: Types.CompositionOffre;
        titre: string;
        modeAcces: string;
        modeAffichage: string;
    }
    class RecapitulatifSectionControleur {
        private $scope;
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private entiteTitulaireBdrService;
        private tarificationOffreSyntheseService;
        private contexteGgoStockageService;
        private catalogueService;
        private referenceProduitPrincipalOffre;
        modeAcces: string;
        modeAffichage: string;
        compatibiliteTarification: boolean;
        compositionOffre: Types.CompositionOffre;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        codeSousFamilleActeDeGestionOffre: string;
        activerModeDebug: boolean;
        desabonnerModeDebug: () => void;
        codeActeGestion: string;
        codeSection: string;
        titre: string;
        afficherSection: boolean;
        referencesProduits: Types.ReferenceProduit[];
        numeroDeCompte: string;
        constantesAffichage: GestionGeneriqueOffres.Constantes.Definitions;
        listeProduitsAfficher: Types.CompositionOffreProduit[];
        static $inject: string[];
        constructor($scope: IRecapitulatifSectionControleur, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
        /**
         * Cette fonction permet de ne pas afficher l'entête de la personne dans la composition si l'entité est en mode simple
         * (càd que l'entité ne contient qu'une personne, donc inutile de redonder la personne et l'entité dans la compo).
         * cette fonction tient compte également de la présence ou non de produit pour l'entité ou la personne
         */
        afficherPersonneDeLEntite(compositionOffreEntitePersonne: Types.CompositionOffreEntitePersonne): boolean;
        afficherProduit(produit: Types.CompositionOffreProduit): boolean;
        afficherErreurProduit(produit: Types.CompositionOffreProduit): boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Recapitulatif Signataires
     * @class RecapitulatifSignataires
     */
    class RecapitulatifSignataires {
        private gestionEditiqueService;
        private signatairesService;
        private actionsService;
        listeSignataires: myway.comContract.modeles.ISignataire[];
        afficherSignataires: boolean;
        eligibiliteSignatureElectronique: boolean;
        private libelleNonEligibilite;
        static $inject: string[];
        constructor(gestionEditiqueService: Services.GestionEditiqueService, signatairesService: Services.ISignatairesService, actionsService: Services.ActionsService);
        terminerTraitementEnErreur(message: string): void;
        getListeSignataires(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifTagsMiseEnGestion {
        private constantes;
        codeMiseEnGestion: number;
        modeAjoutProduitDansOffre: number;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
        afficherTagEnAttente: boolean;
        afficherTagMegOk: boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class SelectionProduitsMultiples {
        private $rootScope;
        private constantes;
        static $inject: string[];
        /**
         * Liste des produits à afficher
         */
        listeProduits: Types.CleValeur[];
        /**
         * Liste des produits pré-cochés, qui sont déjà détenus par le client
         */
        listeProduitsPrecoches: Types.CleValeur[];
        /**
         * Liste des produits qui sont cochés par l'utilisateur
         */
        listeProduitsSelectionnes: Types.CleValeur[];
        private listeProduitsPrecochesInterne;
        private indicateursSelectionProduits;
        /**
         * Actions effectuées lorsque l'utilisateur clique sur une des cases à cocher
         * @param {number} index Le rang de la case à cocher qui a été (dé)cochée
         */
        choixProduit(index: number): void;
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Signataires
     * @class Signataires
     */
    class Signataires {
        private $rootScope;
        private constantes;
        private contexteGgoStockageService;
        private signatairesService;
        private compositionOffreService;
        private catalogueService;
        private codeTypeProduitServicePrincipalOffre;
        donnees: myway.comContract.modeles.ISignataireInput;
        private _listSignataire;
        private _messageErreur;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, signatairesService: Services.SignatairesService, compositionOffreService: Services.CompositionOffreService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        /**
         * Liste des signataires sélectionnés
         * @return tableau d'Object ISignataireDirective
         */
        listSignataire: myway.comContract.modeles.ISignataireComplet[];
        /**
         * Message d'erreur renseigné si :
         * - le champ précision signataire n'est pas complété
         * - la règle de gestion n'est pas respectée
         * @return string messageErreur
         */
        messageErreur: string;
        afficherListeSignataires: boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Spinner implements ng.IDirective {
        afficher: boolean;
        static $inject: any[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface ITarificationControleur {
    }
    /**
     * Classe du controleur Tarification
     * @class Tarification
     */
    class TarificationControleur implements ITarificationControleur {
        private $rootScope;
        private tiersService;
        private entiteTitulaireBdrService;
        private modalService;
        private serviceAgent;
        private tarificationOffreService;
        private contexteGgoStockageService;
        private constantes;
        private $q;
        pictoData: any;
        titre: string;
        habilitationPersonnalisation: boolean;
        private _ouverturePanneau;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _codeSousFamilleActeGestion;
        private _messageErreur;
        static $inject: string[];
        /**
         * @ngdoc constructor
         * @name constructor
         * @description
         * Constructeur du controleur Tarification
         *
         * @param $rootScope {ng.IRootScopeService}
         * @param tiersService {Services.TiersService}
         * @param entiteTitulaireBdrService {Services.IEntiteTitulaireBdrService}
         * @param modalService {Services.IModalService}
         * @param tarificationOffreDetailService {Services.ITarificationOffreDetailService}
         * @param serviceAgent {MyWay.Services.ServiceAgent}
         * @param tarificationOffrePrelevementService {Services.ITarificationOffrePrelevementService}
         * @param tarificationOffreService {Services.ITarificationOffreService}
         * @returns {void}
         */
        constructor($rootScope: ng.IRootScopeService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgent, tarificationOffreService: Services.ITarificationOffreService, contexteGgoStockageService: Services.ContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, $q: ng.IQService);
        /**
         * @ngdoc getter
         * @name estOuvert
         * @description
         *
         * @returns this._ouverturePanneau {Boolean}
         */
        /**
         * @ngdoc setter
         * @name estOuvert
         * @description
         *
         * @param ouverture {Boolean}
         * @returns {void}
         */
        estOuvert: boolean;
        terminerTraitementEnErreur(message: string): void;
        compatibiliteTarification: boolean;
        getTarificationOffreSynthese(): void;
        activationBoutonFacturation: boolean;
        tarificationOffreSynthese: any;
        getTarificationFacturationPopin(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface ITarificationModaleScope extends ng.IScope {
        modalDatas: any;
        ajoutCodePromo: any;
    }
    interface ITarificationOffreAvecPromotions {
        socleComplementaire: boolean;
        promoS: Types.IPromotionProduitServiceBase;
        promoC: Types.IPromotionProduitServiceComplementaire[];
    }
    class TarificationModaleControleur {
        private $scope;
        private data;
        private $modalInstance;
        private constantes;
        private tarificationOffreService;
        private $q;
        private contexteGgoStockageService;
        private entiteTitulaireBdrService;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        modalDatas: any;
        ajoutCodePromo: any;
        static controllerId: string;
        static $inject: string[];
        constructor($scope: ITarificationModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions, tarificationOffreService: Services.ITarificationOffreService, $q: ng.IQService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService);
        codeSousFamilleActeGestion: string;
        activationBoutonValider: boolean;
        tarificationOffreSynthese: any;
        valider(): void;
        retour(): void;
        terminerTraitementEnErreur(message: string): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Titre Principal
     * @class TitrePrincipal
     */
    class TitrePrincipal {
        private $scope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private $q;
        private contexteGgoStockageService;
        private constantes;
        private catalogueService;
        private erreurService;
        private signatairesService;
        private tiersService;
        private referenceProduitPrincipalOffre;
        private codeTypeProduitServicePrincipalOffre;
        private serviceAgentExtended;
        private modalService;
        titrePrincipal: string;
        titreSecondaire: string;
        raisonSociale: string;
        afficherSignataires(): void;
        activerPanneauErreur(): void;
        static $inject: string[];
        affichageModeRecap: boolean;
        affichageModePerso: boolean;
        constructor($scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, $q: ng.IQService, contexteGgoStockageService: Services.ContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, erreurService: Services.ErreurService, signatairesService: Services.SignatairesService, tiersService: Services.ITiersService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        numeroDeCompte: string;
        quitterGgo(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class TuileCatalogue {
        private $rootScope;
        private constantes;
        static $inject: string[];
        /**
         *
         */
        identifiantProduitService: number;
        codeNatureProduitServiceAssocie: string;
        libelleProduitService: string;
        infoTuile: string;
        disabled: boolean;
        cochee: boolean;
        visible: boolean;
        obligatoire: boolean;
        /**
         * Vrai si la tuile correspond à un assemblage
         */
        disableSiNonAssemblage: () => boolean;
        /**
         * Fonction permettant de déterminer la classe CSS à appliquer à la tuile en fonction du codeNatureProduitServiceAssocie et de l'état de la tuile (active/inactive)
         */
        determinerClasseCssPourProduitService: (codeNatureProduitServiceAssocie: string, disabled: boolean) => string;
        tuileCatalogueAction: () => void;
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
}

/**
 * Filtres utilisés dans la barre d'action pour filtrer les boutons du côté droit ou gauche
 */
declare module GestionGeneriqueOffres.Filtres {
    class FiltrerBoutonsGauche {
        static filtrerBoutonsGaucheId: string;
        static filtrerBoutonsGauche(): (items: Types.Action[]) => Types.Action[];
    }
    class FiltrerBoutonsDroit {
        static filtrerBoutonsDroitId: string;
        static filtrerBoutonsDroit(): (items: Types.Action[]) => Types.Action[];
    }
}

declare module GestionGeneriqueOffres.Filtres {
    class Newline {
        static newlineId: string;
        static newline(): (data: string) => string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de Entite titulaire.
     * @author S0076105
     */
    interface IEntiteTitulaireService {
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "entitetitulaire/informationEntiteTitulaire"
     * avec le verbe d'action GET.
     * @author S0076105
     */
    interface IEntiteTitulaireGetInformationEntiteTitulaireQuery {
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireAjaxImplService implements IEntiteTitulaireService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Entite titulaire".
     * @author S0076105
     */
    class EntiteTitulaireMockImplService implements IEntiteTitulaireService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: IEntiteTitulaireGetInformationEntiteTitulaireQuery): ng.IPromise<Types.IInformationEntiteTitulaire>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getEntitesTitulaires(): Types.InformationEntiteTitulaire[];
    }
    class EntiteTitulaireService {
        static entiteTitulaireServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Classe de chargement des mocks
     */
    class MockLoaderService {
        private httpService;
        private qService;
        private serviceAgent;
        static BASE_URL: string;
        static FILE_TYPE_JSON: string;
        static $inject: string[];
        constructor(httpService: ng.IHttpService, qService: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent);
        /**
         * Méthode de restitution des données d'un fichier json à partir du nom du fichier.
         * Les fichiers sont à placer dans le dossier "assets/mocks/".
         * @author S0076105
         * @param fileNane  Nom du fichier json à récupérer
         * @param <T> Type représentant les données du mock
         * @return Une promesse ayant un type T paramétrable en fonction des données du mock
         */
        getDataByFileName<T>(fileName: string): ng.IPromise<T>;
        /**
         * Méthode de construction de l'URL du mock
         * @author S0076105
         * @param fileNane  Nom du fichier json à récupérer
         * @return L'url du web service
         */
        private url(fileNane);
    }
}


declare module GestionGeneriqueOffres.Services {
    interface ITarificationOffreService {
        estModifie: boolean;
        activationBoutonFacturation: boolean;
        compatibiliteTarification: boolean;
        tarificationOffreSynthese: any;
        getTarificationOffreSynthese(_codePeriodicite?: string, _date?: Date): void;
        miseAZeroTarification(): void;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePromotion".
     */
    class TarificationOffreService implements ITarificationOffreService {
        private serviceAgent;
        private $q;
        private constantes;
        private entiteTitulaireBdrService;
        private contexteGgoStockageService;
        private compositionOffreService;
        private tarificationOffreSyntheseService;
        private catalogueService;
        estModifie: boolean;
        activationBoutonFacturation: boolean;
        compatibiliteTarification: boolean;
        tarificationOffreSynthese: any;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _messageErreur;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, contexteGgoStockageService: Services.ContexteGgoStockageService, compositionOffreService: Services.CompositionOffreService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, catalogueService: Services.ICatalogueService);
        /**
         * @ngdoc method
         * @name miseAZeroTarification
         * @description
         * Remets à 0€ les montants de la tarification
         *
         * @returns {void}
         */
        miseAZeroTarification(): void;
        /**
         * Récupération de la composition de l'offre
         *
         * @param {void}
         * @return {array}
         */
        getCompositionOffre(): Types.IProduitServiceAssocie[];
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {Types.IProduitServiceOffre}
         */
        getProduitServiceTarification(_codePeriodicite: string, _date: any): Types.IProduitServiceOffre;
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {void}
         */
        getTarificationOffreSynthese(_codePeriodicite?: string, _date?: Date): void;
        terminerTraitementEnErreur(message: string): void;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers-V2\corporateTiersLies".
     */
    interface ITiersCorporateTiersLiesService {
        sendGetRequest(data: ITiersGetCorporateTiersLiesQuery): ng.IPromise<Types.Tiers.ICorporateTiersLies[]>;
        getTiersCorporateTiersLies(): Types.Tiers.CorporateTiersLies[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierTiersLies"
     * avec le verbe d'action GET.
     */
    interface ITiersGetCorporateTiersLiesQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierTiersLies".
     */
    class TiersCorporateTiersLiesAjaxImplService implements ITiersCorporateTiersLiesService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetCorporateTiersLiesQuery): ng.IPromise<Types.Tiers.ICorporateTiersLies[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersCorporateTiersLies(): Types.Tiers.CorporateTiersLies[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierTiersLies".
     */
    class TiersCorporateTiersLiesMockImplService implements ITiersCorporateTiersLiesService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetCorporateTiersLiesQuery): ng.IPromise<Types.Tiers.ICorporateTiersLies[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersCorporateTiersLies(): Types.Tiers.CorporateTiersLies[];
    }
    class TiersCorporateTiersLiesService {
        static tiersCorporateTiersLiesServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\identification".
     */
    interface ITiersIdentificationService {
        sendV3GetRequest(data: ITiersV3GetIdentificationQuery): ng.IPromise<Types.TiersV3.IIdentification>;
        sendV1GetRequest(data: ITiersV1GetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        getTiersV3Identification(): Types.TiersV3.Identification;
        getTiersV1Identification(): Types.Tiers.Identification;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\identification"
     * avec le verbe d'action GET.
     */
    interface ITiersV3GetIdentificationQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\identification"
     * avec le verbe d'action GET.
     */
    interface ITiersV1GetIdentificationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\identification".
     */
    class TiersIdentificationAjaxImplService implements ITiersIdentificationService {
        private serviceAgent;
        private qService;
        private static _instanceV3;
        private static _instanceV1;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendV3GetRequest(data: ITiersV3GetIdentificationQuery): ng.IPromise<Types.TiersV3.IIdentification>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendV1GetRequest(data: ITiersV1GetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersV3Identification(): Types.TiersV3.Identification;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersV1Identification(): Types.Tiers.Identification;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private urlV3();
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private urlV1();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\identification".
     */
    class TiersIdentificationMockImplService implements ITiersIdentificationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instanceV3;
        private static _instanceV1;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendV3GetRequest(data: ITiersV3GetIdentificationQuery): ng.IPromise<Types.TiersV3.IIdentification>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendV1GetRequest(data: ITiersV1GetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersV3Identification(): Types.TiersV3.Identification;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersV1Identification(): Types.Tiers.Identification;
    }
    class TiersIdentificationService {
        static tiersIdentificationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\media".
     */
    interface ITiersMediaPersMoraleService {
        sendGetRequest(data: ITiersPersMoraleGetMediaQuery): ng.IPromise<Types.Tiers.IMediaPersMorale[]>;
        getTiersMediaPersMorale(): Types.Tiers.IMediaPersMorale[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\media"
     * avec le verbe d'action GET.
     */
    interface ITiersPersMoraleGetMediaQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers-V2\media".
     */
    class TiersMediaPersMoraleAjaxImplService implements ITiersMediaPersMoraleService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersPersMoraleGetMediaQuery): ng.IPromise<Types.Tiers.IMediaPersMorale[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMediaPersMorale(): Types.Tiers.MediaPersMorale[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\media".
     */
    class TiersMediaPersMoraleMockImplService implements ITiersMediaPersMoraleService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersPersMoraleGetMediaQuery): ng.IPromise<Types.Tiers.IMediaPersMorale[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMediaPersMorale(): Types.Tiers.MediaPersMorale[];
    }
    class TiersMediaPersMoraleService {
        static tiersMediaPersMoraleService: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\media".
     */
    interface ITiersMediaService {
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        getTiersMedia(): Types.Tiers.Media[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\media"
     * avec le verbe d'action GET.
     */
    interface ITiersGetMediaQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\media".
     */
    class TiersMediaAjaxImplService implements ITiersMediaService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMedia(): Types.Tiers.Media[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\media".
     */
    class TiersMediaMockImplService implements ITiersMediaService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetMediaQuery): ng.IPromise<Types.Tiers.IMedia[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersMedia(): Types.Tiers.Media[];
    }
    class TiersMediaService {
        static tiersMediaServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\media".
     */
    interface ITiersNoyauService {
        sendGetRequest(data: ITiersGetNoyauQuery): ng.IPromise<Types.TiersV3.TiersNoyau>;
        getTiersNoyau(): Types.TiersV3.TiersNoyau;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\media"
     * avec le verbe d'action GET.
     */
    interface ITiersGetNoyauQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers-v3\tiersNoyau".
     */
    class TiersNoyauAjaxImplService implements ITiersNoyauService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetNoyauQuery): ng.IPromise<Types.TiersV3.TiersNoyau>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersNoyau(): Types.TiersV3.TiersNoyau;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers-v3\tiersNoyau".
     */
    class TiersNoyauMockImplService implements ITiersNoyauService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetNoyauQuery): ng.IPromise<Types.TiersV3.TiersNoyau>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Media
         */
        getTiersNoyau(): Types.TiersV3.TiersNoyau;
    }
    class TiersNoyauService {
        static tiersNoyauServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\particulierInformation".
     */
    interface ITiersParticulierInformationService {
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierInformation"
     * avec le verbe d'action GET.
     */
    interface ITiersGetParticulierInformationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierInformation".
     */
    class TiersParticulierInformationAjaxImplService implements ITiersParticulierInformationService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierInformation".
     */
    class TiersParticulierInformationMockImplService implements ITiersParticulierInformationService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierInformationQuery): ng.IPromise<Types.Tiers.IParticulierInformation>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierInformation
         */
        getParticulierInformation(): Types.Tiers.ParticulierInformation;
    }
    class TiersParticulierInformationService {
        static tiersParticulierInformationServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\particulierTiersLies".
     */
    interface ITiersParticulierTiersLiesService {
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\particulierTiersLies"
     * avec le verbe d'action GET.
     */
    interface ITiersGetParticulierTiersLiesQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\particulierTiersLies".
     */
    class TiersParticulierTiersLiesAjaxImplService implements ITiersParticulierTiersLiesService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\particulierTiersLies".
     */
    class TiersParticulierTiersLiesMockImplService implements ITiersParticulierTiersLiesService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendGetRequest(data: ITiersGetParticulierTiersLiesQuery): ng.IPromise<Types.Tiers.IParticulierTiersLie[]>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet ParticulierTiersLies
         */
        getTiersParticulierTiersLies(): Types.Tiers.ParticulierTiersLie[];
    }
    class TiersParticulierTiersLiesService {
        static tiersParticulierTiersLiesServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IAction {
        id: string;
        texte: string;
        modele: string;
        ngClick: () => void;
        visible: boolean;
        actif: boolean;
        enCours: boolean;
        rang: number;
        largeur?: number;
    }
    class Action {
        private _id;
        /**
         * Id du bouton
         */
        id: string;
        private _texte;
        /**
         * Texte affiché sur le bouton (ex : Valider)
         */
        texte: string;
        private _modele;
        /**
         * Apparence du bouton ("principale" => vert | "secondaire" => gris clair | "zone" => gris foncé | "contextuel" => blanc)
         */
        modele: string;
        private _ngClick;
        /**
         * Action exécutée lorsque le bouton est cliqué
         */
        ngClick: () => void;
        private _visible;
        /**
         * Bouton visible ou pas
         */
        visible: boolean;
        private _actif;
        /**
         * Bouton visible ou pas
         */
        actif: boolean;
        private _enCours;
        /**
         * Affiche un spinner, ou pas
         */
        enCours: boolean;
        private _rang;
        /**
         * Rang d'affichage du bouton.
         * Les rangs négatifs sont affichés à droite du plus petit vers le plus grand
         * Les rangs positifs sont affichés à gauche du plus petit au plus grand
         * Pas de rang à 0 (rien ne sera affiché !)
         *
         * |                                                                                   |
         * | [..-3..] [..-2..] [..-1..]                        [..1..] [..2..] [..3..] [..4..] |
         * |                                                                                   |
         *
         */
        rang: number;
        private _largeur;
        /**
         * @returns Largeur en colonnes du bouton. Par défaut, deux colonnes
         */
        largeur: number;
        constructor(action: IAction);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ICaracteristiqueProposition {
        codeEtablissement: string;
        /**
         * Indique le caractère Forfaitaire ou Unitaire d'une offre
         *     Valeurs:
         *     'F'        Forfaitaire
         *     'U'        Unitaire
         */
        codeCaractereForfaitaireOffre: string;
        /**
         * Code processus de vente sur 4c (FAFA, OUSI, ...)
         * Si le code process = "" : pas de dossier de vente. Autorisé dans le cas contraire.
         */
        codeProcessVente: string;
        /**
         * Type de processus possible tel que défini dans le catalogue de distribution. MEGI / VPC ou rien
         *
         */
        typeProcessVente: string;
    }
    interface IProduit {
        produitCaracteristique: IProduitCaracteristique;
        produitCatalogue: IProduitCatalogue;
        listePropositionReprise: IPropositionReprise[];
    }
    interface ICatalogueSouscriptionAvenant {
        /**
         *   Caractéristiques de la proposition
         */
        caracteristiqueProposition: ICaracteristiqueProposition;
        /**
         *   Liste des produits de l'offre
         */
        listeProduits: Types.IProduit[];
    }
    class Produit implements IProduit {
        private _produitCaracteristique;
        /**
         * Caractéristiques d'identification du produit
         */
        produitCaracteristique: Types.ProduitCaracteristique;
        private _produitCatalogue;
        /**
         * Autres caractéristiques
         */
        produitCatalogue: ProduitCatalogue;
        private _listePropositionReprise;
        /**
         * Propositions et reprise
         */
        listePropositionReprise: PropositionReprise[];
    }
    class CaracteristiqueProposition implements ICaracteristiqueProposition {
        private _codeEtablissement;
        codeEtablissement: string;
        private _codeCaractereForfaitaireOffre;
        codeCaractereForfaitaireOffre: string;
        private _codeProcessVente;
        codeProcessVente: string;
        private _typeProcessVente;
        typeProcessVente: string;
        constructor();
    }
    class CatalogueSouscriptionAvenant implements ICatalogueSouscriptionAvenant {
        private _caracteristiqueProposition;
        /**
         * Caractéristiques de la proposition
         */
        caracteristiqueProposition: ICaracteristiqueProposition;
        private _listeProduits;
        /**
         * Liste des produits de l'offre
         */
        listeProduits: Types.Produit[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Etat de la navigation entre les pages perso et recap
     * Initial : On est jamais allé sur l'écran recap
     * Retour : On est allé sur l'écran recap et on a demandé à revenir
     * InitialRecap : On est arrivé sur l'écran récap et il est interdit de revenir sur l'écran perso (cas du dossier de vente)
     */
    enum EtatNav {
        Initial = 0,
        Retour = 1,
        InitialRecap = 2,
    }
    /**
     * Objet contenant les données à charger durant la phase de chargement initiale. Doit être resolve pour passer sur l'écran de personnalisation
     */
    class DonneesInitiales {
        private _entitesTitulaires;
        /**
         * La liste des entités titulaires
         */
        entitesTitulaires: Types.InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[];
        private _personnes;
        /**
         * La liste des personnes
         */
        personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        private _catalogue;
        /**
         * Le catalogue de l'offre
         */
        catalogue: CatalogueNode;
        private _contexteGgo;
        contexteGgo: Types.ContexteGgo;
        private _dossierVente;
        /**
         * Le dossier de vente (VAD seulement)
         */
        dossierVente: Types.DossierDeVente.GestionDossierVente;
        private _etatNav;
        /**
         * Etat de la navigation
         */
        etatNav: EtatNav;
        constructor(etatNav: EtatNav, entitesTitulaires: Types.InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[], personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[], catalogue: CatalogueNode, contexteGgo: Types.ContexteGgo, dossierVente: Types.DossierDeVente.GestionDossierVente);
    }
}

/**
 * Définition de la ressource Enveloppe Offre
 */
declare module GestionGeneriqueOffres.Types {
    interface IEnveloppeOffreContexte {
        /**
         * Code qualité agent affecté au PF
         */
        codeQualiteAgent?: string;
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService?: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire?: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant élément structure
         */
        identifiantElementStructureBis?: number;
        /**
         * Identifiant Elément structure
         */
        identifiantElementStructure: number;
        /***
         * Numéro de l'offre. Optionnel en création (POST)
         */
        numeroOffre?: number;
        /***
         * Optionnel en création (POST)
         * Lors de l'impression en ouverture ou en avenant, permet d'indiquer au "central" que tous les P/S OBLIGATOIRES dans l'Offre ont été ouverts.
         * Si toutes les ouvertures sont correctes, l'Offre passe de l'état d'instance à celui d'ouverture effective.
         * En avenant sans ouverture ou en utilisation de l'impression lors du processus de synthése, il n'y a pas lieu de positionner l'indicateur.
         * Valeurs :
         * 'O'	Toutes les P/S obligatoires sont ouverts
         * 'N'	Au moins un P/S obligatoire n'a pas été ouvert
         * 'R'	Aucune ouverture de P/S obligatoire n'a été déclenchée (l'Offre a déjà été validée)
         */
        indicateurValidationOuvertureOffre?: string;
    }
    interface IEnveloppeOffreProduitService {
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Référence externe agent
         */
        referenceExterneAgent: number;
        /**
         * Identifiant Produit / Service support
         */
        identifiantProduitServiceSupport: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Code Guichet Interbancaire
         */
        codeGuichet: string;
        /**
         * Code type Produit / Service
         */
        codeTypeProduitService: string;
        /**
         * Référence produit
         */
        numeroCompte: string;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Indique l'action entreprise sur la référence d'un produit service dans le cadre d'un avenant
         * Indique quelle type d'action est entreprise sur la Référence d'un P/S dans le cadre d'un Avenant. Valeurs : 'R' Aucune Action sur la Référence.
         * 'T' Transfert (reprise unitaire) d'une Référence de P/S. 'D' Avenant Direct sur le P/S par l'interface locale de l'applicatif de gestion du P/S.
         * 'A' Avenant avec substitution d'un P/S par un autre P/S possédant le même CODIPR, mais un IDEGPS différent. ex: Découvert 3000 -> Découvert 4000
         * 'C' Clôture du P/S 'O' A ouvrir : positionné en central (envoi d'une SU29 pour ce P/S)
         */
        codeActionSurAvenantProduitService: string;
        modeTraitementProduitService: number;
    }
    interface IEnveloppeOffreReponse {
        /**
         * Identifiant Produit / Service
         */
        identifiantProduitService: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffre: number;
        /**
         * Date ouverture offre souscrite
         */
        dateOuvertureOffreSouscrite: Date;
        /**
         * Nom Commercial Court Produit / Service
         */
        nomCommercialCourtProduitService: string;
        /**
         * Date du dernier avenant effectué avant l'avenant du jour
         */
        dateAvantDernierAvenantOffre: Date;
        /**
         * Date du dernier avenant établi sur une offre donnée
         */
        dateDernierAvenantOffre: Date;
    }
    class EnveloppeOffreReponse {
        private _codeRetour;
        codeRetour: number;
        private _identifiantProduitService;
        identifiantProduitService: number;
        private _numeroOffre;
        numeroOffre: number;
        private _dateOuvertureOffreSouscrite;
        dateOuvertureOffreSouscrite: Date;
        private _nomCommercialCourtProduitService;
        nomCommercialCourtProduitService: string;
        private _dateAvantDernierAvenantOffre;
        dateAvantDernierAvenantOffre: Date;
        private _dateDernierAvenantOffre;
        dateDernierAvenantOffre: Date;
        constructor(enveloppeOffreReponse: IEnveloppeOffreReponse);
    }
    interface IEnveloppeOffre {
        offre: IEnveloppeOffreContexte;
        /**
         * Liste des produits services associés
         */
        listeProduitService: IEnveloppeOffreProduitService[];
    }
}

declare module GestionGeneriqueOffres.Types {
    class ErreursGestionGeneriqueOffre {
        private _nombreMessages;
        /**
         * Nombre de messages significatifs. Si > 0, le panneau est ouvert
         * Significatifs = Erreurs fatales, Erreurs, Warning avec pté visible = true
         */
        nombreMessages: number;
        private _messages;
        /**
         * Les messages.
         */
        messages: Types.ErreurGestionGeneriqueOffre[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    /**
     * Description associée à un produit à forcer
     */
    class ForcageProduit {
        private _produit;
        /** Lien vers les informations relatives au produit */
        produit: Types.ProduitService;
        private _lienVersComposition;
        /** Lien vers le panier (rend produit redondant) */
        lienVersComposition: Types.CompositionOffreProduit;
        private _detenteur;
        /**
         * Le détenteur du produit service
         */
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration;
        private _forcer;
        /**
         * Indicateur de forcage. Si vrai, il faut forcer le produit lors de la mise en gestion
         */
        forcer: boolean;
        private _controles;
        /**
         * Controle
         */
        controles: Types.ControlePreRequis[];
        constructor(produit: Types.ProduitService, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.InformationEntiteTitulaireBdr | Types.Tiers.PersonneMorale | Types.Tiers.Procuration, controles: any, lienVersComposition: Types.CompositionOffreProduit);
    }
    /**
     * Description associée à une personne : données FCC/FICP + liste des produits à forcer
     */
    class ForcagePersonne {
        private _identifiantPersonne;
        /**
         * Idenfiant personne (NODAPE)
         */
        identifiantPersonne: number;
        private _intitulePersonne;
        /**
         * Intitulé de la personne
         */
        intitulePersonne: string;
        private _pbCommFicp;
        /**
         *  Vrai si pb de comm FICP
         */
        pbCommFicp: boolean;
        private _pbCommFcc;
        /**
         * Vrai si pb de comm FCC
         */
        pbCommFcc: boolean;
        private _ficheFicp;
        /**
         * Vrai si fiché FICP, faux si non fiché ou si pb comm FICP
         */
        ficheFicp: boolean;
        private _ficheFcc;
        /**
         * Vrai si fiché FCC, faux si non fiché ou si pb comm FCC
         */
        ficheFcc: boolean;
        constructor(identifiantPersonne: number, intitulePersonne: string, personneBdf?: myway.comRisquesClient.Model.PersonneBDF);
    }
    /**
     * Description associéeà l'ensemble des forcages
     */
    class ForcageSuiteControleBdf {
        private _forcer;
        /**
         * Indicateur de forcage global. Si vrai, tous les produits sont forcés (toutes personnes confondues)
         */
        forcer: boolean;
        private _personnes;
        /**
         * Liste des personnes
         */
        personnes: ForcagePersonne[];
        private _produits;
        /**
         * Liste des produits
         */
        produits: ForcageProduit[];
        constructor(personnes: ForcagePersonne[], produits: ForcageProduit[]);
    }
}

declare module GestionGeneriqueOffres.Types {
    class Message {
        private _id;
        /**
         * id de message unique (timestamp)
         */
        id: number;
        private _visible;
        /**
         * Si visible est vrai, cela signifie que le message doit être restitué par GGO.
         * Dans le cas contraire, le message n'est pas restitué à l'écran mais peut néanmoins être utilisé à fins de contrôle ou autre.
         */
        visible: boolean;
        private _message;
        /**
         * Le message à afficher
         */
        message: string;
        private _style;
        /**
         * Un style optionnel. Doit être défini dans le less
         */
        style: string;
        private _delai;
        /**
         * Delai au bout duquel le message sera effacé. Défaut 3 sec. si non spécifié
         */
        delai: number;
        /**
         * Le paramètre message est obligatoire
         * Les paramètres visible et style sont facultatifs
         * Si visible est omis, il est considéré vrai.
         */
        constructor(message: string, style?: string, visible?: boolean, delai?: number);
    }
}


declare module GestionGeneriqueOffres.Types {
    interface IOffre {
        codeCaractereForfaitaireOffre: string;
    }
    class Offre {
        private _codeCaractereForfaitaireOffre;
        /**
         * Indique le caractère Forfaitaire ou Unitaire d'une offre (CIECGF)
         *     Valeurs:
         *     'F'        Forfaitaire
         *     'U'        Unitaire
         */
        codeCaractereForfaitaireOffre: string;
        constructor(offre: IOffre);
    }
}



declare module GestionGeneriqueOffres.Types {
    interface IProgressionChargement {
        valeur: number;
        message: string;
    }
    class ProgressionChargement {
        private _valeur;
        valeur: number;
        private _message;
        message: string;
        updateStatut: (progression: IProgressionChargement) => void;
        constructor(progression: IProgressionChargement);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IRepriseOffreProduitServiceRepris {
        codeGuichet: string;
        referenceProduitService: string;
        numeroOffre: number;
        codeRepriseEnForcage: string;
        codeEtablissement: string;
        codeTypeProduitService: string;
    }
    interface IRepriseOffre {
        listeProduitServiceRepris: IRepriseOffreProduitServiceRepris[];
    }
    class RepriseOffre {
        private _listeProduitServiceRepris;
        listeProduitServiceRepris: IRepriseOffreProduitServiceRepris[];
        constructor(repriseOffre: IRepriseOffre);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ITarificationGlobale {
        codeDevise: string;
        codePeriodicite: string;
        codePrestationTarifiable: number;
        prixMensuel: number;
        montantNonRemise: number;
        montantRemisesCumulees: number;
    }
    interface IProduitServiceBase {
        numeroOffreSouscrite: number;
    }
    interface IProduitServiceAssocie {
        identifiantProduitService: number;
    }
    interface ITarificationOffreSynthese {
        tarificationAssurance: ITarificationAssurance;
        tarificationGlobale: ITarificationGlobale;
        prixMensuelNet: number;
        codeDeviseIHM: string;
    }
    class TarificationOffreSynthese {
        private _tarificationAssurance;
        tarificationAssurance: ITarificationAssurance;
        private _tarificationGlobale;
        tarificationGlobale: ITarificationGlobale;
        private _prixMensuelNet;
        prixMensuelNet: number;
        private _codeDeviseIHM;
        codeDeviseIHM: string;
        constructor(tarification: ITarificationOffreSynthese);
    }
    interface IPromotionProduitServiceBase {
        codePromotion: string;
        tauxApplicationTarification: number;
    }
    interface IPromotionProduitServiceComplementaire {
        codePromotion: string;
        tauxApplicationTarification: number;
        identifiantProduitService: number;
    }
    interface IProduitServiceOffre {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: string;
        identifiantProduitServiceOffre: number;
        referenceExterneAgent: number;
        codeEtablissement: string;
        /**
         * Objet contenant le numéro d'offre souscrite NOBCOF
         */
        produitServiceBase?: IProduitServiceBase;
        listeProduitServiceAssocie: IProduitServiceAssocie[];
        promotionProduitServiceBase?: IPromotionProduitServiceBase;
        listePromotionPSAssocie?: IPromotionProduitServiceComplementaire[];
    }
    interface ITarificationAssurance {
        nbProduitsComplAssurance: number;
        montantRemiseAssurance: number;
        montantNonRemiseAssurance: number;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    enum ModeAffichageErreur {
        ModePleinEcran = 0,
        PopIn = 1,
        PopInAmelioree = 2,
        PanneauSynthese = 3,
    }
    interface IDebranchementCenetValeurAction {
        CREATION: string;
        AVENANT: string;
        CLOTURE: string;
    }
    interface IDebranchementSepamailValeurAction {
        OU: string;
        AV: string;
        CL: string;
    }
    /**
     * Les évènement internes à GGO
     */
    class Evenements {
        /**
         * Evènement déclenché lorsque l'utilisateur clique sur une tuile du catalogue
         */
        static TUILE_CATALOGUE_CLICK: string;
        /**
         * Evènement déclenché lorsque l'utilisateur clique sur le filtrage personne
         * Le filtrage personne ayant été désactivé, cet évènement n'est jamais déclenché.
         */
        static PERSONNE_CLICK: string;
        /**
         * Evènement déclenché lorsque l'utilisateur change le produit sélectionné dans un assemblage
         * dont l'IHM de gestion est externalisée dans un composant P/S ("exception carte")
         */
        static SUBSTITUTION_PRODUIT_SERVICE: string;
        /**
         * Activation du spinner
         */
        static WORK_IN_PROGRESS_DEBUT: string;
        /**
         * Désactivation du spinner
         */
        static WORK_IN_PROGRESS_FIN: string;
        /**
         * Activation/désactivation du mode debug
         */
        static MODE_DEBUG: string;
        /**
         * Activation/désactivation du mode debug
         */
        static ACTIVER_BLOQUEUR: string;
        /**
         * Notification émise lorsque le délai d'init des P/S est écoulé.
         */
        static DELAI_INIT_COMPOSANTS_ECOULE: string;
        /**
         * Notification émise en cas d'erreur fatale (écran d'erreur GGO)
         */
        static ERREUR_FATALE: string;
        /**
         * Interne Notification émise lorsqu'un produit est supprimé. Utilisé lorsque l'utilisateur
         * décide de substituer un P/S d'un assemblage par un autre, afin de pouvoir appeler le traitement de
         * suppression de l'ancien P/S qui va être remplacé par le nouveau. Comme le traitement de suppression est raccroché
         * au bouton poubelle et que celui ci n'est pas géné dans le même contrôleur, on passe par un évènement.
         */
        static SUPPRIMER_PRODUIT: string;
        /**
         * Rend visible le panneau des erreurs sur l'écran composition
         */
        static ACTIVER_PANNEAU_ERREUR: string;
    }
    /**
     * Tous les time-out sont exprimés en ms
     */
    class TimeOuts {
        /**
         * Timeout associé à la durée maxi des contrôles de surface. Au delà : erreur
         */
        static TIMEOUT_CONTROLE_SURFACE: number;
        /**
         * Timeout associé à la durée maxi de récupération des js/css des composants P/S
         * Une fois ce délai achevé, on vérifie qu'on a bien tout reçu.
         */
        static TIMEOUT_LECTURE_FICHIERS_COMPOSANTS: number;
        /**
         * Timeout maximal autorisé pour l'enregistrement dans angular des composants P/S
         * Devrait être divisible par TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS
         */
        static TIMEOUT_MAXI_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Intervalle d'attente lorsque l'on détermine qu'un composant P/S n'est pas encore enregistré
         */
        static TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée maxi d'initialisation du contexte (initialisation du serviceAgent). Au delà : erreur.
         */
        static TIMEOUT_INIT_SERVICE_AGENT: number;
        /**
         * Timeout associé à la durée maxi d'initialisation des P/S. Au delà : erreur.
         */
        static TIMEOUT_INIT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée au delà de laquelle on fait disparaitre les indicateurs d'init des P/S
         */
        static TIMEOUT_EFFACER_INDICATEURS: number;
    }
    class PhaseMiseEnGestion {
        static PHASE_PRE_PRODUCTEUR: number;
        static PHASE_POST_PRODUCTEUR: number;
    }
    class LisaConfig {
        static CodeEntree: any;
        static RAFRAICHISSEMENT_SYNTHESE_NSDK: number;
        static DEPART_CHARGEMENT_ARRIVEE_COMPO: number;
        static DEPART_COMPO_ARRIVEE_PERSO: number;
        static DEPART_PERSO_ARRIVEE_RECAP: number;
        static DEBRANCHEMENT_SPA_CONTRACTUALISATION: number;
        static RETOUR_PAGE_COMPO: number;
        static DEBRANCHEMENT_SPA_EDITIQUE_EPARGNE: number;
        static DEBRANCHEMENT_SPA_EDITIQUE_BDR: number;
        static REEDITION: number;
        static CHARGEMENT_PAGE_RECAP: number;
        static DEBRANCHEMENT_IZIVENTE: number;
        static DEBRANCHEMENT_IMPULSE: number;
        static DEBRANCHEMENT_SYNTHESE_NSDK_COMPO: number;
        static DEBRANCHEMENT_SYNTHESE_NSDK_PERSO: number;
        static DEBRANCHEMENT_SYNTHESE_NSDK_RECAP: number;
        static QUITTER_GGO: number;
        static DEBRANCHEMENT_SEPAMAIL: number;
        static DEBRANCHEMENT_SEPAMAIL_VALEUR_ACTION: IDebranchementSepamailValeurAction;
        static DEBRANCHEMENT_CENET: number;
        static DEBRANCHEMENT_CENET_VALEUR_ACTION: IDebranchementCenetValeurAction;
        static DEBRANCHEMENT_CONN_CLIENT_PART: number;
        static DEBRANCHEMENT_GGHO: number;
        static EVENEMENT_RETOUR_IFRAME: string;
    }
    class Promotions {
        static TYPE_PS_COMPLEMENTAIRE: string;
        static TYPE_PS_SOCLE: string;
    }
    class ComposantsTarification {
        static OUVERTURE: string;
        static AVENANT: string;
        static CLOTURE: string;
        static IDENTIFIANT_PRODUIT_SERVICE: number;
        static CODE_TYPE_PRODUIT_SERVICE: string;
        static OUVERTURE_LIBELLE_PRODUIT_SERVICE: string;
    }
    class Cartes {
        static CODE_TYPE_PRODUIT_SERVICE: string;
        static TYPE_MANDAT_CARTE: string;
    }
    class Contexte {
        static RETOUR_EDITIQUE: any;
        static CONTEXTE_GGO_RETOUR_EDITIQUE: string;
    }
    class ServiceChequier {
        static CODE_TYPE_PRODUIT_SERVICE: string;
    }
    class DebranchementGgho {
        static NUMERO_PERSONNE_DETENTRICE: string;
        static REFERENCE_PRODUIT_SERVICE_CONTRAT: string;
        static CODE_TYPE_PRODUIT_SERVICE_CONTRAT: string;
        static CODE_GUICHET_CONTRAT: string;
        static CODE_ETABLISSEMENT_CONTRAT: string;
        static CODE_ACTE_GESTION: string;
        static CODE_PRODUIT_SERVICE: string;
    }
}

declare module GestionGeneriqueOffres.Debug {
    class Chronometre {
        private elapse;
        private topDebut;
        private topFin;
        nom: string;
        start: () => void;
        stop: () => void;
        get: () => number;
        reset: () => void;
        constructor(nom?: string);
    }
    class GestionScopes {
        private static getScopes(root);
        static getWatchersNumber(): number;
        static calculDureeCycleDigest(): string;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}
