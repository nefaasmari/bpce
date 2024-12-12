
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
         * TODO : ajouter le n° du jeu d'essai ?
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
    var appProviders: Types.AppProviders;
}

declare module GestionGeneriqueOffres.Composition {
    class AfficherErreur {
        message: string;
        static $inject: any[];
        constructor();
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
        /**
         *
         */
        getNombreMessages(): number;
    }
    class ErreurService implements IErreurService {
        static erreurServiceId: string;
        static $inject: string[];
        private static listeMessagesErreur;
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
        ajouterMessagesErreur: (emetteur: string, messagesErreur: Types.ErreurGestionGeneriqueOffre[], libelleComposantEmetteur?: string) => void;
        /**
         * Renvoie le nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre. Seuls les messages visibles sont décomptés.
         * @param [criticites] Une liste de niveaux de criticité. Tous les messages dont le niveau de criticité figure dans la liste seront intégrés
         * au comptage. Si la liste est vide ou non passée, tous les messages sont comptés.
         * @return Nombre de messages correspondant au(x) niveau(x) de criticité passés en paramètre
         */
        compterMessages: (criticites?: GestionGeneriqueOffres.Types.NiveauErreur[]) => number;
        /**
         *
         */
        getNombreMessages: () => number;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    import Tiers = GestionGeneriqueOffres.Types.Tiers;
    import Constantes = GestionGeneriqueOffres.Constantes;
    interface ITiersService {
        getTiers(identifiantPersonne: number, codeEtablissement: string): ng.IPromise<Tiers.Personne>;
        getPersonnes: () => Types.Tiers.Personne[];
    }
    class TiersService implements ITiersService {
        private constantes;
        private $q;
        private tiersParticulierInformationService;
        private tiersIdentificationService;
        private tiersMediaService;
        private tiersParticulierTiersLiesService;
        private $timeout;
        static tiersServiceId: string;
        static $inject: string[];
        /**
         * Renvoie un tiers depuis le SI
         */
        getTiers: (identifiantPersonne: number, codeEtablissement: string) => ng.IPromise<Tiers.Personne>;
        /**
         * Renvoie la liste des tiers
         */
        getPersonnes: () => Types.Tiers.Personne[];
        private static _instance;
        constructor(constantes: Constantes.Definitions, $q: ng.IQService, tiersParticulierInformationService: Services.ITiersParticulierInformationService, tiersIdentificationService: Services.ITiersIdentificationService, tiersMediaService: Services.ITiersMediaService, tiersParticulierTiersLiesService: Services.ITiersParticulierTiersLiesService, $timeout: ng.ITimeoutService);
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
    interface IContexteService {
        getContexte(): ng.IPromise<Types.Contexte>;
    }
    class ContexteService implements IContexteService {
        private $q;
        private constantes;
        private serviceAgent;
        private serviceAgentExtended;
        static contexteServiceId: string;
        static $inject: string[];
        getContexte: () => ng.IPromise<Types.Contexte>;
        constructor($q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDossierVenteService {
        getDossierVente(numeroDossierVente: number): ng.IPromise<Types.DossierVente>;
        setDossierVente(dossierVente: Types.DossierVente): number;
    }
    class DossierVenteService implements IDossierVenteService {
        private $q;
        private constantes;
        static dossierVenteServiceId: string;
        static $inject: string[];
        getDossierVente: (numeroDossierVente: number) => ng.IPromise<Types.DossierVente>;
        setDossierVente: (dossierVente: Types.DossierVente) => number;
        constructor($q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
        private dossierVenteService;
        static contexteGgoServiceId: string;
        static $inject: string[];
        getContexteGgo: () => ng.IPromise<Types.ContexteGgo>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, dossierVenteService: Services.DossierVenteService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IContexteGgoStockageService {
        getContexteGgo(): Types.ContexteGgo;
        setContexteGgo(offreSouscrite: Types.ContexteGgo): void;
    }
    class ContexteGgoStockageService implements IContexteGgoStockageService {
        static contexteGgoStockageServiceId: string;
        static $inject: string[];
        private static contexteGgoStockage;
        getContexteGgo: () => Types.ContexteGgo;
        setContexteGgo: (contexteGgo: Types.ContexteGgo) => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
     * Interface de définition du service de Entite titulaire.
     * @author S0070531
     */
    interface ICatalogueService {
        /**
         *  Méthode de restitution des produits du catalogue
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
        /**
         *  Renvoie les entités chargées par sendGetRequest (version mockée ou réelle)
         */
        getCatalogue(): Types.CatalogueNode;
        /**
         * Renvoie les données de niveau offre
         */
        getOffre(): Types.Offre;
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
    }
    class CatalogueAjaxImplService implements ICatalogueService {
        private serviceAgent;
        private qService;
        private parametrageBlocsService;
        private static _instanceCatalogue;
        private static _instanceOffre;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
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
        private mockLoaderService;
        private qService;
        private parametrageBlocsService;
        private static _instanceCatalogue;
        private static _instanceOffre;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService, parametrageBlocsService: Services.IParametrageBlocsService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(data: ICatalogueGetCatalogueQuery): ng.IPromise<Types.CatalogueNode>;
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
    }
    class CatalogueService {
        static catalogueServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ICompositionOffreService {
        getCompositionOffre(): Types.CompositionOffre;
    }
    class CompositionOffreService implements ICompositionOffreService {
        private constantes;
        private entiteTitulaireService;
        private tiersService;
        private contexteGgoStockageService;
        private catalogueService;
        private parametrageBlocsService;
        static compositionOffreServiceId: string;
        static $inject: string[];
        private static compositionOffre;
        getCompositionOffre: () => Types.CompositionOffre;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireService: Services.IEntiteTitulaireService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IValidationFormulaireService {
        /**
         *
         */
        validerFormulaire(): void;
    }
    class ValidationFormulaireService implements IValidationFormulaireService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private constantes;
        private compositionOffreService;
        private erreurService;
        static validationFormulaireServiceId: string;
        static $inject: string[];
        validerFormulaire: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IActionsService {
        /**
         *  Renvoie les actions à afficher
         */
        getActions(): Types.Action[];
        raz(): void;
        ajouterAction(action: Types.Action): void;
    }
    class ActionsService implements IActionsService {
        private constantes;
        private compositionOffreService;
        private erreurService;
        private validationFormulaireService;
        static actionsServiceId: string;
        static $inject: string[];
        private static listeActions;
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
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, validationFormulaireService: Services.ValidationFormulaireService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class BarreAction {
        private $rootScope;
        private $scope;
        private $location;
        private $anchorScroll;
        private $timeout;
        private constantes;
        private actionsService;
        private erreurService;
        actions: Types.Action[];
        nonImplemente: () => void;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, actionsService: Services.ActionsService, erreurService: Services.ErreurService);
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    interface IChargementScope extends ng.IScope {
        $location: ng.ILocationService;
        constantes: GestionGeneriqueOffres.Constantes.Definitions;
        demarrerSpinner: boolean;
    }
    class ChargementControleur {
        private $location;
        private constantes;
        static $inject: string[];
        demarrerSpinner: boolean;
        constructor($location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
        isMockEnabled(leMock: string): boolean;
        /**
         * Méthode permettant de déterminer si un shunt est activé.
         * @author S0070531
         * @param [leShunt] Id du shunt à activer. Pour savoir ce qui existe, regarder la définition de l'objet "config" dans app.ts
         * @return Un booléen indiquant l'activation du shunt
         */
        isShuntEnabled(leShunt: string): boolean;
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
        private constantes;
        static messagesServiceId: string;
        static $inject: string[];
        private static listeMessages;
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
        constructor($timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionEntite {
        private $rootScope;
        private $location;
        private $anchorScroll;
        private constantes;
        compositionOffreEntitePersonne: Types.CompositionOffreEntitePersonne;
        bouton: any;
        basculerBouton: () => void;
        allerAncre: (idBloc: string) => void;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompositionTagsProduits {
        private constantes;
        modeAjoutProduitDansOffre: string;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IDefautModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance);
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
        message: string;
        cause: any;
        infosTechniques: string;
        quote: string;
    }
    class ErreurControleur {
        private $scope;
        private $location;
        private $http;
        private constantes;
        static controllerId: string;
        static $inject: string[];
        message: string;
        cause: any;
        infosTechniques: string;
        quote: string;
        constructor($scope: IErreurScope, $location: ng.ILocationService, $http: ng.IHttpService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
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


declare module GestionGeneriqueOffres.Utilitaires {
    class Utils {
        static checkInject(classe: any, args: IArguments): void;
        /**
         * Reroute vers la page d'erreur GGO
         * message : le message d'erreur à afficher
         * cause : la cause
         * infosTechniques : optionnel. Peut être une stacktrace par exemple.
         */
        static erreurGGO(message: string, cause: any, infosTechniques?: string): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class PersoControleur {
        private $scope;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private validationFormulaireService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        constructor($scope: ng.IScope, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, validationFormulaireService: Services.ValidationFormulaireService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnalisation {
        private $rootScope;
        private $location;
        private $anchorScroll;
        private constantes;
        private compositionOffreService;
        private erreurService;
        modeAcces: string;
        modeAffichage: string;
        compositionOffre: Types.CompositionOffre;
        contexte: Types.ContexteGgo;
        allerAncreTop: () => void;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Personnes implements ng.IDirective {
        private $rootScope;
        private constantes;
        private tiersService;
        personnes: Types.Tiers.Personne[];
        determinerStyleAlerte: (personne: Types.Tiers.Personne) => string;
        filtrerParPersonne: () => void;
        desabonnerTopControle: () => void;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, tiersService: Services.TiersService);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IDonneesMiseEnGestionService {
        /**
         *  Renvoie les données de mise en gestion de tous les composants P/S
         */
        getDonneesMiseEnGestion(): Types.DonneesMiseEnGestion[];
        raz(): void;
        ajouterDonneeMiseEnGestion(donnee: Types.DonneesMiseEnGestion): void;
    }
    class DonneesMiseEnGestionService implements IDonneesMiseEnGestionService {
        private constantes;
        static donneesMiseEnGestionServiceId: string;
        static $inject: string[];
        private static listeDonneesMiseEnGestion;
        /**
         *    Renvoie les données de mise en gestion de tous les composants P/S
         */
        getDonneesMiseEnGestion: () => Types.DonneesMiseEnGestion[];
        /**
         * Remet à zéro la liste des données de mise en gestion
         */
        raz: () => void;
        /**
         * Ajoute une donnée de mise en gestion à la liste.
         */
        ajouterDonneeMiseEnGestion: (donneeMiseEnGestion: Types.DonneesMiseEnGestion) => void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IMiseEnGestionService {
        /**
         *
         */
        miseEnGestion(): void;
    }
    class MiseEnGestionService implements IMiseEnGestionService {
        private $rootScope;
        private $q;
        private $location;
        private $anchorScroll;
        private $timeout;
        private constantes;
        private compositionOffreService;
        private donneesMiseEnGestionService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        static miseEnGestionServiceId: string;
        static $inject: string[];
        miseEnGestion: () => void;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapControleur {
        private $scope;
        private $timeout;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private miseEnGestionService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, miseEnGestionService: Services.MiseEnGestionService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class Recapitulatif {
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private erreurService;
        modeAcces: string;
        modeAffichage: string;
        compositionOffre: Types.CompositionOffre;
        contexte: Types.ContexteGgo;
        allerAncreTop: () => void;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifTagsMiseEnGestion {
        private constantes;
        codeMiseEnGestion: string;
        static $inject: string[];
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
    /**
     * Classe du controleur Tarification
     * @class Tarification
     */
    class Tarification {
        private $q;
        private $rootScope;
        private $location;
        private constantes;
        private compositionOffreService;
        private catalogueService;
        private tiersService;
        private entiteTitulaireService;
        private parametrageBlocsService;
        private contexteGgoStockageService;
        private modalService;
        private tarificationOffreSyntheseAjaxImplService;
        private tarificationOffreDetailAjaxImplService;
        private promotionCaisseAjaxImplService;
        private promotionSystematiqueAjaxImplService;
        pictoData: any;
        titre: string;
        tarificationOffreSynthese: any;
        private _$q;
        private _compositionOffreService;
        private _tarificationOffreSyntheseAjaxImplService;
        private _tarificationOffreDetailAjaxImplService;
        private _promotionCaisseAjaxImplService;
        private _promotionSystematiqueAjaxImplService;
        private _modalService;
        private _ouverturePanneau;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _periodicitePromotion;
        private _messageErreur;
        static $inject: string[];
        /**
         * Constructeur du controleur Tarification
         * @param $rootScope {ng.IRootScopeService}
         * @param $location {ng.ILocationService}
         * @param constantes {ng.ILocationService}
         * @param compositionOffreService {ng.ILocationService}
         * @param catalogueService {ng.ILocationService}
         *
         * TODO...
         */
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, catalogueService: Services.ICatalogueService, tiersService: Services.TiersService, entiteTitulaireService: Services.IEntiteTitulaireService, parametrageBlocsService: Services.IParametrageBlocsService, contexteGgoStockageService: Services.ContexteGgoStockageService, modalService: MyWay.UI.IModalService, tarificationOffreSyntheseAjaxImplService: Services.ITarificationOffreSyntheseService, tarificationOffreDetailAjaxImplService: Services.ITarificationOffreDetailService, promotionCaisseAjaxImplService: Services.IPromotionCaisseService, promotionSystematiqueAjaxImplService: Services.IPromotionSystematiqueService);
        estOuvert: boolean;
        /**
         * Récupération de la composition de l'offre
         *
         * @param {void}
         * @return {array}
         */
        getCompositionOffre(): any[];
        calculMontantEtRemiseTarification(tarifs: Types.ITarificationOffreSynthese): Types.ITarificationOffreSynthese;
        terminerTraitementEnErreur(message: string): void;
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {void}
         */
        getTarificationOffreSynthese(_codePeriodicite?: string, _date?: Date): void;
        /**
         * Demande de MAJ de la tarification
         *
         * @param {string || null} _codePeriodicite
         * @param {Date || null} _date
         * @return {Types.IProduitServiceOffre}
         */
        getProduitServiceTarification(_codePeriodicite: string, _date: any): Types.IProduitServiceOffre;
        getTarificationDetailsRequete(): {
            "listeTarificationPSDetail": {
                "typeLigneEcran": string;
                "prixMensuelStandard": number;
                "tauxReduction": number;
                "prixFacture": number;
                "libelleRemise": string;
                "libelleProduitService": string;
            }[];
        };
        getProduitServiceTarificationDetails(_codePeriodicite?: string, _date?: any): Types.IProduitServiceOffreDetail;
        getTarificationDetailsPopin(): void;
        getPromotionSystematique(_date?: any): ng.IPromise<Types.IPromotionSystematique>;
        getPromotionSystematiqueRequete(): {
            "typeMotifTarification": string;
            "pourcentageRemise": number;
            "dateFinApplication": string;
            "indicateurPromotionSystematique": string;
            "codeEtablissement": string;
            "numeroOffreSouscrite": number;
            "identifiantProduitService": number;
            "codePromotion": string;
            "libelleRemise": string;
            "typePSSocleComplementaire": string;
        }[];
        getPromotionCaisse(_date?: any): ng.IPromise<Types.IPromotionCaisse>;
        getTarificationPersonnalisationPopin(): void;
    }
}


declare module GestionGeneriqueOffres.Composition {
    class TuileCatalogue {
        private $rootScope;
        private constantes;
        codeProduitService: number;
        codeNatureProduitServiceAssocie: string;
        libelleProduitService: string;
        infoTuile: string;
        disabled: boolean;
        visible: boolean;
        determinerClasseCssPourProduitService: (codeNatureProduitServiceAssocie: string, disabled: boolean) => string;
        tuileCatalogueAction: () => void;
        static $inject: string[];
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
     * Interface de définition de la ressource élémentaire "offre/avantageFamilleOffre".
     */
    interface IAvantageFamilleOffreService {
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        sendPostRequest(produitService: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "offre/avantageFamilleOffre"
     * avec le verbe d'action GET.
     */
    interface IOffreGetAvantageFamilleQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        numeroPersonne: number;
        identifiantTiers?: number;
        modeAppelModule: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/avantageFamilleOffre".
     */
    class AvantageFamilleOffreAjaxImplService implements IAvantageFamilleOffreService {
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
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(avantageFamille: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet AvantageFamilleOffre
         */
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/avantageFamilleOffre".
     */
    class AvantageFamilleOffreMockImplService implements IAvantageFamilleOffreService {
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
        sendGetRequest(data: IOffreGetAvantageFamilleQuery): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(avantageFamille: Types.IAvantageFamilleOffreModification): ng.IPromise<Types.IAvantageFamilleOffre>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet AvantageFamilleOffre
         */
        getAvantageFamilleOffre(): Types.AvantageFamilleOffre;
    }
    class AvantageFamilleOffreService {
        static avantageFamilleOffreServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IChargementFichiersComposantService {
        charger(cb: Function): any;
    }
    class ChargementFichiersComposantService implements IChargementFichiersComposantService {
        private $rootScope;
        private $q;
        private $ocLazyLoad;
        private $http;
        private $templateCache;
        private $timeout;
        private modalService;
        private urlComposantsGgo;
        private parametrageBlocsService;
        private catalogueService;
        private messagesService;
        private serviceAgent;
        private contexteGgoService;
        static chargementFichiersComposantServiceId: string;
        private _$rootScope;
        private _$q;
        private _$ocLazyLoad;
        private _$timeout;
        private _modalService;
        private _parametrageBlocsService;
        private _catalogueService;
        private _messagesService;
        private _serviceAgent;
        private _contexteGgoService;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $ocLazyLoad: oc.ILazyLoad, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService, modalService: MyWay.UI.IModalService, urlComposantsGgo: string, parametrageBlocsService: Services.IParametrageBlocsService, catalogueService: Services.ICatalogueService, messagesService: Services.MessagesService, serviceAgent: MyWay.Services.ServiceAgent, contexteGgoService: Services.IContexteGgoService);
        charger(cb: Function): void;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IControlePreRequisService {
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * lorsqu'un produit est ajouté à la composition de l'offre
         */
        effectuerControlesPreRequisComposition: (donneesContextuelles: Types.DonneesContextuelles) => void;
        /**
         * Déclenche tous les prérequis déclarés dans donneesContextuelles.donneesProduit.controlesPreRequis
         * au moment de la mise en gestion
         */
        effectuerControlesPreRequisMiseEnGestion: (donneesContextuelles: Types.DonneesContextuelles) => void;
    }
    class ControlePreRequisService implements IControlePreRequisService {
        private initialisationService;
        private constantes;
        private serviceAgent;
        private modalService;
        private interroBDFService;
        private tiersService;
        static controlePreRequisId: string;
        static $inject: string[];
        effectuerControlesPreRequisComposition: (donneesContextuelles: Types.DonneesContextuelles) => void;
        effectuerControlesPreRequisMiseEnGestion: (donneesContextuelles: Types.DonneesContextuelles) => void;
        constructor(initialisationService: Services.InitialisationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgent: MyWay.Services.ServiceAgent, modalService: MyWay.UI.IModalService, interroBDFService: myway.comRisquesClient.InterroBDFService, tiersService: Services.TiersService);
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
        /**
         * Permet de savoir si un appel à get() a déjà été effectué
         */
        donneesChargees(): boolean;
    }
    class DonneesInitialesService implements IDonneesInitialesService {
        private $rootScope;
        private $q;
        private $timeout;
        private constantes;
        private messagesService;
        private contexteGgoService;
        private contexteGgoStockageService;
        private entiteTitulaireService;
        private tiersService;
        private catalogueService;
        private parametrageBlocsService;
        private chargementFichiersComposantService;
        /**
         * Indique si le get a déjà été appelé au cours de cette session
         */
        private static _donneesChargees;
        static donneesInitialesServiceId: string;
        static $inject: string[];
        get: () => ng.IPromise<Types.DonneesInitiales>;
        donneesChargees: () => boolean;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $timeout: ng.ITimeoutService, constantes: GestionGeneriqueOffres.Constantes.Definitions, messagesService: Services.MessagesService, contexteGgoService: Services.ContexteGgoService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireService: Services.IEntiteTitulaireService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, chargementFichiersComposantService: Services.ChargementFichiersComposantService);
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
    /**
     * Interface de définition de la ressource élémentaire "offre/miseEnGestionPSExterne".
     */
    interface IMiseEnGestionPSExterneService {
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "offre/miseEnGestionPSExterne".
     */
    class MiseEnGestionPSExterneAjaxImplService implements IMiseEnGestionPSExterneService {
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
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet MiseEnGestionPSExterne
         */
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "offre/miseEnGestionPSExterne".
     */
    class MiseEnGestionPSExterneMockImplService implements IMiseEnGestionPSExterneService {
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
        sendPostRequest(miseEnGestion: Types.IMiseEnGestionPSExterneDemande): ng.IPromise<Types.IMiseEnGestionPSExterne>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet MiseEnGestionPSExterne
         */
        getMiseEnGestionPSExterne(): Types.MiseEnGestionPSExterne;
    }
    class MiseEnGestionPSExterneService {
        static miseEnGestionPSExterneServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre/personnalisationPromotion".
     */
    interface IPersonnalisationPromotionService {
        sendPutRequest(personnalisationPromotion: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre/personnalisationPromotion".
     */
    class PersonnalisationPromotionAjaxImplService implements IPersonnalisationPromotionService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(personnalisationPromotion: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPutRequest
         * @return Objet PersonnalisationPromotionBestOf
         */
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/personnalisationPromotion".
     */
    class PersonnalisationPromotionMockImplService implements IPersonnalisationPromotionService {
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
        sendPutRequest(tarification: Types.IPersonnalisationPromotionBestOf): ng.IPromise<Types.IPersonnalisationPromotionBestOf>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPutRequest
         * @return Objet PersonnalisationPromotionBestOf
         */
        getPersonnalisationPromotion(): Types.PersonnalisationPromotionBestOf;
    }
    class PersonnalisationPromotionService {
        static personnalisationPromotionServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre\promotionCaisse"
     */
    interface IPromotionCaisseService {
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        getPromotionCaisse(): Types.PromotionCaisse;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tarificationparametre\promotionCaisse"
     * avec le verbe d'action GET.
     */
    interface ITarificationGetPromotionCaisseQuery {
        codeEtablissement: string;
        referenceExterneAgent?: number;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre\promotionCaisse".
     */
    class PromotionCaisseAjaxImplService implements IPromotionCaisseService {
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
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionCaisse
         */
        getPromotionCaisse(): Types.PromotionCaisse;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/promotionCaisse".
     */
    class PromotionCaisseMockImplService implements IPromotionCaisseService {
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
        sendGetRequest(data: ITarificationGetPromotionCaisseQuery): ng.IPromise<Types.IPromotionCaisse>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet PromotionCaisse
         */
        getPromotionCaisse(): Types.PromotionCaisse;
    }
    class PromotionCaisseService {
        static promotionCaisseServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarificationparametre/promotionSystematique".
     */
    interface IPromotionSystematiqueService {
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        getPromotionSystematique(): Types.PromotionSystematique;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarificationparametre/promotionSystematique".
     */
    class PromotionSystematiqueAjaxImplService implements IPromotionSystematiqueService {
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
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet PromotionSystematique
         */
        getPromotionSystematique(): Types.PromotionSystematique;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarificationparametre/promotionSystematique".
     */
    class PromotionSystematiqueMockImplService implements IPromotionSystematiqueService {
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
        sendPostRequest(personnalisationPromotion: Types.IPersonnalisationPromotion): ng.IPromise<Types.IPromotionSystematique>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet PromotionSystematique
         */
        getPromotionSystematique(): Types.PromotionSystematique;
    }
    class PromotionSystematiqueService {
        static promotionSystematiqueServiceId: string;
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
        codeEtablissement: string;
        referenceExterneAgent: number;
        codeTypeProduitService: string;
        identifiantElementStructure: number;
        identifiantElementStructureBis: number;
        numeroEntiteTitulaire: number;
        identifiantProduitService: number;
        codeModaliteDetentionProduitService: string;
        codeGuichet: string;
        referenceProduitService: string;
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

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification\tarificationOffreDetail".
     */
    interface ITarificationOffreDetailService {
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification\tarificationOffreDetail".
     */
    class TarificationOffreDetailAjaxImplService implements ITarificationOffreDetailService {
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
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreDetail
         */
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification\tarificationOffreDetail".
     */
    class TarificationOffreDetailMockImplService implements ITarificationOffreDetailService {
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
        sendPostRequest(produitService: Types.IProduitServiceOffreDetail): ng.IPromise<Types.ITarificationOffreDetail>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendPostRequest
         * @return Objet TarificationOffreDetail
         */
        getTarificationOffreDetail(): Types.TarificationOffreDetail;
    }
    class TarificationOffreDetailService {
        static tarificationOffreDetailServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification/tarificationOffrePrelevement".
     */
    interface ITarificationOffrePrelevementService {
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tarification/tarificationOffrePrelevement"
     * avec le verbe d'action GET.
     */
    interface ITarificationGetInformationDossierPrelevementQuery {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        dateApplication: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementAjaxImplService implements ITarificationOffrePrelevementService {
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
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action POST
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet InformationDossierPrelevement
         */
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementMockImplService implements ITarificationOffrePrelevementService {
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
        sendGetRequest(data: ITarificationGetInformationDossierPrelevementQuery): ng.IPromise<Types.IInformationDossierPrelevement>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPostRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePrelevement): ng.IPromise<Types.ITarificationOffrePrelevement>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet InformationDossierPrelevement
         */
        getInformationDossierPrelevement(): Types.InformationDossierPrelevement;
    }
    class TarificationOffrePrelevementService {
        static tarificationOffrePrelevementServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tarification/tarificationOffrePromotion".
     */
    interface ITarificationOffrePromotionService {
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePromotion".
     */
    class TarificationOffrePromotionAjaxImplService implements ITarificationOffrePromotionService {
        private serviceAgent;
        private qService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification/tarificationOffrePromotion".
     */
    class TarificationOffrePromotionMockImplService implements ITarificationOffrePromotionService {
        private serviceAgent;
        private mockLoaderService;
        private qService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
    }
    class TarificationOffrePromotionService {
        static tarificationOffrePromotionServiceId: string;
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

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition de la ressource élémentaire "tiers\identification".
     */
    interface ITiersIdentificationService {
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        getTiersIdentification(): Types.Tiers.Identification;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "tiers\identification"
     * avec le verbe d'action GET.
     */
    interface ITiersGetIdentificationQuery {
        codeEtablissement: string;
        idPersonne: number;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tiers\identification".
     */
    class TiersIdentificationAjaxImplService implements ITiersIdentificationService {
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
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersIdentification(): Types.Tiers.Identification;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tiers\identification".
     */
    class TiersIdentificationMockImplService implements ITiersIdentificationService {
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
        sendGetRequest(data: ITiersGetIdentificationQuery): ng.IPromise<Types.Tiers.IIdentification>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer les données
         * chargées via sendGetRequest
         * @return Objet Identification
         */
        getTiersIdentification(): Types.Tiers.Identification;
    }
    class TiersIdentificationService {
        static tiersIdentificationServiceId: string;
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

declare module GestionGeneriqueOffres.Constantes {
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
    }
    /**
     * Time out en ms
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
    }
}

declare module GestionGeneriqueOffres.Debug {
    class GestionScopes {
        private static getScopes(root);
        static getWatchersNumber(): number;
        static calculDureeCycleDigest(): string;
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
        rang: number;
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
        private _rang;
        /**
         * Rang d'affichage du bouton.
         * Les rangs négatifs sont affichés à droite du plus petit vers le plus grand
         * Les rangs positifs sont affichés à gauche du plus petit au plus grand
         * Pas de rang à 0
         *
         * |                                                                                   |
         * | [..-3..] [..-2..] [..-1..]                        [..1..] [..2..] [..3..] [..4..] |
         * |                                                                                   |
         *
         */
        rang: number;
        constructor(action: IAction);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IAvantageFamilleOffre {
        listePersonnes: IAvantageFamilleOffrePersonne[];
    }
    class AvantageFamilleOffre {
        private _listePersonnes;
        listePersonnes: IAvantageFamilleOffrePersonne[];
        constructor(offre: IAvantageFamilleOffre);
    }
    interface IAvantageFamilleOffrePersonne {
        agePersonnePhysique: number;
        dateFinValiditeLien: Date;
        codeTypeLienInterPersonnes: string;
        civilitePersonnePhysique: string;
        nomPersonnePhysique: string;
        prenomPersonnePhysique: string;
        dateNaissancePersonnePhysique: Date;
        beneficiaireCarte: number;
        possedeAvantageFamille: string;
    }
    interface IAvantageFamilleOffreModification {
        identifiantElementStructure: number;
        deuxiemePersonneEnRelation: number;
        dateFinValiditeLien: Date;
        codeAction: string;
        referenceExterneAgent: number;
        posteRattachementAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantPersonneTitulaire: number;
        codeTypeLienInterPersonnes: string;
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
    class CompositionOffreProduitMethods extends CompositionOffreProduit {
    }
}

declare module GestionGeneriqueOffres.Types {
    class DonneesInitiales {
        private _entitesTitulaires;
        entitesTitulaires: Types.InformationEntiteTitulaire[];
        private _personnes;
        personnes: Types.Tiers.Personne[];
        private _catalogue;
        catalogue: CatalogueNode;
        private _contexteGgo;
        contexteGgo: Types.ContexteGgo;
        private _dossierVente;
        dossierVente: Types.DossierVente;
        constructor(entitesTitulaires: Types.InformationEntiteTitulaire[], personnes: Types.Tiers.Personne[], catalogue: CatalogueNode, contexteGgo: Types.ContexteGgo, dossierVente: Types.DossierVente);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IEnveloppeOffreContexte {
        codeQualiteAgent: string;
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantElementStructureBis: number;
        identifiantElementStructure: number;
        numeroOffre: number;
        /**
         * Lors de l'impression en ouverture ou en avenant, permet d'indiquer au "central" que tous les P/S OBLIGATOIRES dans l'Offre ont été ouverts.
         * Si toutes les ouvertures sont correctes, l'Offre passe de l'état d'instance à celui d'ouverture effective.
         * En avenant sans ouverture ou en utilisation de l'impression lors du processus de synthése, il n'y a pas lieu de positionner l'indicateur.
         * Valeurs :
         * 'O'	Toutes les P/S obligatoires sont ouverts
         * 'N'	Au moins un P/S obligatoire n'a pas été ouvert
         * 'R'	Aucune ouverture de P/S obligatoire n'a été déclenchée (l'Offre a déjà été validée)
         */
        indicateurValidationOuvertureOffre: string;
    }
    interface IEnveloppeOffreContenu {
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeEtablissement: string;
        referenceExterneAgent: number;
        identifiantProduitServiceSupport: number;
    }
    interface IEnveloppeOffreReference {
        identifiantProduitService: number;
        numeroEntiteTitulaire: number;
        numeroPersonne: number;
        codeGuichet: string;
        numeroCompte: string;
        numeroOffre: number;
        referenceExterneAgent: number;
        identifiantProduitServiceSupport: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeActionSurAvenantProduitService: string;
    }
    interface IEnveloppeOffreReponse {
        codeRetour: number;
        identifiantProduitService: number;
        numeroOffre: number;
        dateOuvertureOffreSouscrite: Date;
        nomCommercialCourtProduitService: string;
        dateAvantDernierAvenantOffre: Date;
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
        listeProduitService: IEnveloppeOffreContenu[];
        listeProduitServiceReference: IEnveloppeOffreReference[];
        offre: IEnveloppeOffreContexte;
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
    interface IMiseEnGestionPSExterneDemande {
        identifiantProduitService: number;
        referenceProduitService: string;
        codeActionMajContenuOffre: string;
        referenceExterneAgent: number;
        identifiantElementStructure: number;
        numeroOffreSouscrite: number;
        codeEtablissement: string;
        codeTypeProduitService: string;
        codeAffichageReferenceProduitService: string;
        codeGuichet: string;
    }
    interface IMiseEnGestionPSExterne {
        codeRetour: number;
        alphanumeriqueBanalisee080: string;
        indicateurAjoutProduitServiceOffre: string;
        referenceProduitService: string;
    }
    class MiseEnGestionPSExterne {
        private _codeRetour;
        codeRetour: number;
        private _alphanumeriqueBanalisee080;
        alphanumeriqueBanalisee080: string;
        private _indicateurAjoutProduitServiceOffre;
        indicateurAjoutProduitServiceOffre: string;
        private _referenceProduitService;
        referenceProduitService: string;
        constructor(miseEnGestion: IMiseEnGestionPSExterne);
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
    interface IPersonnalisationPromotionBestOf {
        listePromotionAppliquee: IPromotionAppliquee[];
    }
    class PersonnalisationPromotionBestOf {
        private _listePromotionAppliquee;
        listePromotionAppliquee: IPromotionAppliquee[];
        constructor(promotion: IPersonnalisationPromotionBestOf);
    }
    interface IPromotionAppliquee {
        tauxApplicationParDefaut: number;
        periodeValiditeNegocieeParDefaut: number;
        dateFinApplication: string;
        codeEtablissement: string;
        identifiantProduitService: number;
        codePromotion: string;
        typePSSocleComplementaire: string;
        referenceExterneAgent: number;
        dateApplication: string;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPromotionCaisse {
        listePromotionCaisse: ICodePromotionCaisse[];
    }
    class PromotionCaisse {
        private _listePromotionCaisse;
        listePromotionCaisse: ICodePromotionCaisse[];
        constructor(promotion: IPromotionCaisse);
    }
    interface ICodePromotionCaisse {
        typeMotifTarification: string;
        codeInternePrestationTarifiable: number;
        typeNatureCondition: string;
        periodeValiditeNegocieeNormale: number;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        dateDerniereMajDonnee: Date;
        codeMonnaiePriseOrdre: string;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        identifiantProduitService: number;
        codePromotion: string;
        typeApplicationCondition: string;
        libelleRemise: string;
        referenceExterneAgent: number;
        typeConditionParticuliere: string;
        montantDeductionPrixNormal: number;
        typePSSocleComplementaire: string;
        libellePTUPrestationTarifiable: string;
        pourcentageRemise: number;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPromotionSystematique {
        listeCodePromotionSystematique: ICodePromotionSystematique[];
    }
    class PromotionSystematique {
        private _listeCodePromotionSystematique;
        listeCodePromotionSystematique: ICodePromotionSystematique[];
        constructor(promotion: IPromotionSystematique);
    }
    interface ICodePromotionSystematique {
        typeMotifTarification: string;
        pourcentageRemise: number;
        dateFinApplication: Date;
        indicateurPromotionSystematique: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codePromotion: string;
        libelleRemise: string;
        typePSSocleComplementaire: string;
    }
    interface IPersonnalisationPromotion {
        dateApplication: Date;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        codeActionOuvertureAvenant: string;
        produitServiceOffre?: IProduitServiceOffrePromotionSystematique;
    }
    interface IProduitServiceOffrePromotionSystematique {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        listeProduitServiceAssocie: IProduitServiceAssocie[];
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
    interface ITarificationOffreDetail {
        listeTarificationPSDetail: ITarificationPSDetail[];
    }
    class TarificationOffreDetail {
        private _listeTarificationPSDetail;
        listeTarificationPSDetail: ITarificationPSDetail[];
        constructor(tarification: ITarificationOffreDetail);
    }
    interface ITarificationPSDetail {
        typeLigneEcran: string;
        prixMensuelStandard: number;
        tauxReduction: number;
        prixFacture: number;
        libelleRemise: string;
        libelleProduitService: string;
    }
    interface IProduitServiceOffreDetail {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: Date;
        referenceExterneAgent: number;
        codeEtablissement: string;
        identifiantProduitServiceOffre: number;
        numeroOffreSouscrite: number;
        listeProduitServiceAssocie: Array<IProduitServiceAssocie>;
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IInformationDossierPrelevement {
        codeDevise: string;
        codePeriodicite: string;
        dateDerniereEcheanceEffectuee: Date;
        dateProchaineEcheance: Date;
        codeBanqueComptePrelevement: string;
        codeGuichet: string;
        dateOuvertureService: Date;
        codeNatureProchaineEcheance: string;
        dateEcheanceIntercalaire: Date;
        codeProduit: string;
        datePremiereEcheance: Date;
        prixMensuel: number;
        numeroComptePrelevement: string;
        libellePeriodicite: string;
        periodeParDefaut: string;
        indicateurCalculProrata: string;
        codeTypePeriodicite: string;
        codeTypeAugmentation: string;
        periodiciteProrata: string;
        indicateurPremiereEcheance: string;
    }
    class InformationDossierPrelevement {
        private _codeDevise;
        codeDevise: string;
        private _codePeriodicite;
        codePeriodicite: string;
        private _dateDerniereEcheanceEffectuee;
        dateDerniereEcheanceEffectuee: Date;
        private _dateProchaineEcheance;
        dateProchaineEcheance: Date;
        private _codeBanqueComptePrelevement;
        codeBanqueComptePrelevement: string;
        private _codeGuichet;
        codeGuichet: string;
        private _dateOuvertureService;
        dateOuvertureService: Date;
        private _codeNatureProchaineEcheance;
        codeNatureProchaineEcheance: string;
        private _dateEcheanceIntercalaire;
        dateEcheanceIntercalaire: Date;
        private _codeProduit;
        codeProduit: string;
        private _datePremiereEcheance;
        datePremiereEcheance: Date;
        private _prixMensuel;
        prixMensuel: number;
        private _numeroComptePrelevement;
        numeroComptePrelevement: string;
        private _libellePeriodicite;
        libellePeriodicite: string;
        private _periodeParDefaut;
        periodeParDefaut: string;
        private _indicateurCalculProrata;
        indicateurCalculProrata: string;
        private _codeTypePeriodicite;
        codeTypePeriodicite: string;
        private _codeTypeAugmentation;
        codeTypeAugmentation: string;
        private _periodiciteProrata;
        periodiciteProrata: string;
        private _indicateurPremiereEcheance;
        indicateurPremiereEcheance: string;
        constructor(information: IInformationDossierPrelevement);
    }
    interface ITarificationOffrePrelevement {
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        informationDossierPrelevement: IInformationDossierPrelevement;
    }
    class TarificationOffrePrelevement {
        private _referenceExterneAgent;
        referenceExterneAgent: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _numeroOffreSouscrite;
        numeroOffreSouscrite: number;
        private _informationDossierPrelevement;
        informationDossierPrelevement: IInformationDossierPrelevement;
        constructor(tarification: ITarificationOffrePrelevement);
    }
}

declare module GestionGeneriqueOffres.Types {
    interface ITarificationOffrePromotion {
        typeMotifTarification: string;
        dateApplication: Date;
        periodeValiditeNegocieeParDefaut: number;
        codePeriodicite: string;
        codeActionMajDb2: string;
        idEdsInterne: number;
        identifiantElementStructure: number;
        codeActionMajContenuOffre: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        codePromotion: string;
        tauxReduction: number;
        libelleRemise: string;
    }
    class TarificationOffrePromotion {
        private _typeMotifTarification;
        typeMotifTarification: string;
        private _dateApplication;
        dateApplication: Date;
        private _periodeValiditeNegocieeParDefaut;
        periodeValiditeNegocieeParDefaut: number;
        private _codePeriodicite;
        codePeriodicite: string;
        private _codeActionMajDb2;
        codeActionMajDb2: string;
        private _idEdsInterne;
        idEdsInterne: number;
        private _identifiantElementStructure;
        identifiantElementStructure: number;
        private _codeActionMajContenuOffre;
        codeActionMajContenuOffre: string;
        private _referenceExterneAgent;
        referenceExterneAgent: number;
        private _codeEtablissement;
        codeEtablissement: string;
        private _numeroOffreSouscrite;
        numeroOffreSouscrite: number;
        private _identifiantProduitServiceOffre;
        identifiantProduitServiceOffre: number;
        private _codePromotion;
        codePromotion: string;
        private _tauxReduction;
        tauxReduction: number;
        private _libelleRemise;
        libelleRemise: string;
        constructor(tarification: ITarificationOffrePromotion);
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
    }
    class TarificationOffreSynthese {
        private _tarificationAssurance;
        tarificationAssurance: ITarificationAssurance;
        private _tarificationGlobale;
        tarificationGlobale: ITarificationGlobale;
        constructor(tarification: ITarificationOffreSynthese);
    }
    interface IPromotionOffre {
        codePromotion: string;
        tauxApplicationTarification: number;
    }
    interface IProduitServiceOffre {
        codePeriodicite: string;
        numeroEntiteTitulaire: number;
        dateApplication: Date;
        identifiantProduitServiceOffre: number;
        referenceExterneAgent: number;
        codeEtablissement: string;
        /**
         * Objet contenant le numéro d'offre souscrite NOBCOF
         */
        produitServiceBase?: IProduitServiceBase;
        /**
         * Objet contenant le code promotion
         */
        promotionOffre?: IPromotionOffre;
        listeProduitServiceAssocie: IProduitServiceAssocie[];
    }
    interface ITarificationAssurance {
        nbProduitsComplAssurance: number;
        montantRemiseProduitAssurance: number;
        montantNonRemiseProduitAssurance: number;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}







declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocLse(): ng.IDirective;
}

declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocReleveCompteNumerique(): ng.IDirective;
}

declare module GestionGeneriqueOffres.ComposantsProduitsService {
    function blocReleveCompte(): ng.IDirective;
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
    function entete(): ng.IDirective;
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
