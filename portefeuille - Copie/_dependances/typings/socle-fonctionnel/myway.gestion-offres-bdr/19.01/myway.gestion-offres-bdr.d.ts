
declare module GestionGeneriqueOffres.Demarrage {
    class Constantes {
        static addConstantsToRootScope($rootScope: GestionGeneriqueOffres.Constantes.IRootScopeServiceWithConstants, constantes: GestionGeneriqueOffres.Constantes.Definitions): void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Types {
    interface IPilotageEcran {
        bloquer: boolean;
        traitementEnCours: boolean;
        message: string;
    }
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
        /**
         * MAJ CONTEXTE_GGO dans le contexte processus
         */
        setContexte: (contexte: Types.Contexte) => ng.IPromise<void>;
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
    class AuthentificationIhmConst {
        static TITRE_GROUPE_1: string;
        static TITRE_GROUPE_2: string;
        static LIB_MODE_SIGNATURE_ECTRONIQUE: string;
        static LIB_MODE_SIGNATURE_PAPIER: string;
        static CODE_MODE_SIGNATURE_ELECTRONIQUE: string;
        static CODE_MODE_SIGNATURE_PAPIER: string;
        static LIB_EXPEDITEUR_SUIVI_PAR: string;
        static LIB_EXPEDITEUR_OPERANT: string;
        static LIB_EXPEDITEUR_OPERANT_POUR_LE_COMPTE_DU_SUIVI_PAR: string;
        static NUM_SORTIE_LISA_CONNAISSANCE_CLIENT_PRO: number;
        static NUM_SORTIE_LISA_CONNAISSANCE_CLIENT_PART: number;
        static NUM_SORTIE_LISA_ROUTAGE_EDITIQUE: number;
        static TYPE_PERSONNE_MORALE: string;
        static TYPE_PERSONNE_PHYSIQUE: string;
        static TYPE_PROCURATION: string;
        static MESSAGE_ASTUCE_CONTOURNEMENT_CAS_BLOCAGE: string;
        static TYPE_AGENT_OPERANT: string;
        static TYPE_AGENT_SUIVI_PAR: string;
        static ID_SERVICE_REST_PORTEFEUIL: string;
        static ID_SERVICE_REST_MEDIA_PART: string;
        static ID_SERVICE_REST_ACT_PRO: string;
        static ID_SERVICE_REST_MOYEN_AUTH: string;
        static ID_SERVICE_REST_CARACTERISTIQUES_EDS: string;
        static ID_SERVICE_REST_AGENT: string;
    }
    class AuthentificationControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $http;
        private $q;
        private $timeout;
        private contexteGgoStockageService;
        private serviceAgentExtended;
        private servicesAuth;
        private signatairesService;
        private compositionOffreService;
        private offreDonneesService;
        private gestionEditiqueService;
        private actionsService;
        private sauvegardeContexteService;
        private modalService;
        private entiteTitulaireBdrService;
        static $inject: string[];
        contexte: Types.ContexteGgo;
        compostionOffre: Types.CompositionOffre;
        offreSouscrite: Types.OffreSouscrite;
        private typeClient;
        private modePapier;
        titreGroupe1: string;
        titreGroupe2: string;
        libModeSignatElectronique: string;
        libModeSignatPapier: string;
        libSignatiareSuiviPar: string;
        libSignatiareOperant: string;
        libSignatiareOperantPourLeCompteSP: string;
        private checkDestinataireOperant;
        private checkDestinataireSuiviPar;
        private estMemePersonneOperantSuiviPar;
        private clientPossedeSuiviPar;
        private modeSignature;
        private signatiare;
        private suiviPar;
        private caracteristiqueEdsSuiviPar;
        private caracteristiqueEdsOperant;
        messageAstuceContournementCasBlocage: string;
        identifiantAgentSuiviPar: any;
        listeSignataires: Types.IClientSignataireAuthentification[];
        private formulaireAuthentification;
        private operantAdrMailExiste;
        private suiviParAdrMailExiste;
        private listeErreurs;
        private listeErreursOpSp;
        private existeErreurBloquante;
        private entitesTitulaires;
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $http: ng.IHttpService, $q: ng.IQService, $timeout: ng.ITimeoutService, contexteGgoStockageService: Services.ContexteGgoStockageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicesAuth: GestionGeneriqueOffres.Services.AuthentificationService, signatairesService: Services.ISignatairesService, compositionOffreService: Services.CompositionOffreService, offreDonneesService: Services.OffreDonneesService, gestionEditiqueService: Services.GestionEditiqueService, actionsService: Services.ActionsService, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService);
        private initialiserIhm;
        private possedeSuiviPar;
        determinerEstMemePersonneOperantSuiviPar: () => void;
        disableListeBox: (arrayListeBox: any[]) => boolean;
        allerAConnaissanceClient: () => void;
        getListeSignataires: () => void;
        estFinDeChargementListeBox(array: any[]): boolean;
        reloadAllBlocSignataire: () => void;
        loadBlocSigantaire: (index: number) => void;
        private formatNumeroTel(num);
        private isNumeroMobile(num);
        private isNotInitializedListe(signataire, liste);
        private pasUnDoublon(listeTelAdminPro, numTel);
        private nettoyerListeExceptionsMedia();
        private miseAJourEtatBoutonValider();
        valider: () => void;
        afficherBlocDetailSignature: () => boolean;
        ajouterBoutonValiderGgo: () => void;
        ajouterBoutonQuitterGgo(): void;
        afficherErreurs: () => boolean;
        afficherErreursOpSp: () => boolean;
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        majSyntheseNSDK(): void;
        toggleBoutonValider(actif: boolean): void;
        choisirMode(mode: string): void;
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
        static $inject: any;
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
        private _verifierEligibiliteReduitPromise;
        private static compositionOffre;
        static compositionOffreServiceId: string;
        static $inject: string[];
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, procurationService: Services.IProcurationService);
        getVerifierEligibiliteReduitPromise(): ng.IPromise<void>;
        setVerifierEligibiliteReduitPromise(verifierEligibiliteReduitPromise: ng.IPromise<void>): void;
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
        private servicesAuthentification;
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
        private _donneesSignerContrat;
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.IOffreDonneesService, signataireService: Services.SignatairesService, compositionOffreService: Services.ICompositionOffreService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, servicesAuthentification: GestionGeneriqueOffres.Services.AuthentificationService);
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteReduit: () => ng.IPromise<void>;
        getContractualisationActeComplet: () => Myway.Ressource.ContractualisationActe.IContractualisationActe;
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteComplet: (donneesSignerContrat?: Types.IFormulaireAuthentification) => ng.IPromise<void>;
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
        private servicesAuthentification;
        private tarificationOffreService;
        private _contexteGgo;
        private _catalogue;
        private _listeProduitsServices;
        private _offreDonnees;
        private _acteDeGestion;
        private _composition;
        static miseEnGestionPreProducteurServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, enveloppeOffreService: Services.IEnveloppeOffreService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, actionsService: Services.ActionsService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, controlePreRequisService: Services.ControlePreRequisService, forcageProduitsService: Services.ForcageProduitsService, signataireService: Services.SignatairesService, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, servicesAuthentification: GestionGeneriqueOffres.Services.AuthentificationService, tarificationOffreService: GestionGeneriqueOffres.Services.ITarificationOffreService);
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
        verifierEligibiliteReduit: (execute?: boolean) => ng.IPromise<void>;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ICommentaireService {
        /**
         *  Renvoie le commentaire
         */
        get(): string;
        /**
         * Met à jour le commentaire
         */
        set(commentaire: string): void;
        /**
         * Vrai si le commentaire a été modifié
         */
        estModifie(): boolean;
    }
    class CommentaireService implements ICommentaireService {
        static commentaireServiceId: string;
        static $inject: any;
        private _commentaire;
        private _estModifie;
        /**
         *  Renvoie le commentaire
         */
        get: () => string;
        /**
         * Met à jour le commentaire
         */
        set: (commentaire: string) => void;
        /**
         * Vrai si le commentaire a été modifié
         */
        estModifie: () => boolean;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service Dossier de vente.
     * @author S0070531
     */
    interface IGestionDossierVenteService {
        /**
         * Renvoie le premier MF trouvé dans la compo du dossier de vente initial
         *  @return Le mode financier trouvé, null si aucun trouvé ou pas de dossier de vente
         *
         */
        rechercherModeFinancier(): string;
        /**
         * méthode comparant les P/S du dossier de vente à ceux générés dans le panier
         * @param dossier< Types.DossierDeVente.GestionDossierVente> : le dossier de vente
         * @param compositionOffre<Types.CompositionOffreEntitePersonne> : l'objet de composition
         * @return retour: une string avec le message d'info à remonter, ou alors null si aucun écart fonctionnel détecté
         */
        verifierEcartsFonctionnels: (dossier: Types.DossierDeVente.GestionDossierVente, compositionOffre: Types.CompositionOffreEntitePersonne[]) => string;
        /**
         * Indique si on peut faire du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data
         */
        dossierVenteAutorise: boolean;
        /**
         * Méthode de restitution du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data : Les données à passer en entrée de la ressource, dont notamment
         * l'identifiant du dossier de vente.
         */
        sendGetRequest(data: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de màj d'un dossier de vente
         * @param {IGestionDossierVentePutDossierVenteQuery} data : Les données à mettre à jour.
         */
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de création d'un dossier de vente
         * @param {IGestionDossierVentePostDossierVenteQuery} data : Les données du dossier de vente
         */
        sendPostRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePostDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Renvoie le dossier de vente stocké en mémoire
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        /**
         * Met à jour le dossier de vente en mémoire avec un dossier de vente reçu d'un traitement externe (suivi de dossier, cas du bouton abandonner)
         */
        setGestionDossierVente(dossierVente: Types.DossierDeVente.GestionDossierVente): void;
        /**
         * Renvoie le dossier de vente obtenu via le premier get
         * C'est ce dossier de vente qui va notamment contenir la composition de l'offre et les json data des P/S
         * Les DV issus des PUT/POST effectués par la suite ne contiennent plus ces infos.
         */
        getGestionDossierVenteInitial(): Types.DossierDeVente.GestionDossierVente;
        /**
         *  Renvoie les données génériques du dossier de vente
         */
        consoliderDonneesGeneriques(): Types.DossierDeVente.IDonneesGeneriques[];
        /**
         * Désérialise un produit dossier de vente
         * @param {Types.DossierDeVente.CompositionDossier} produit
         */
        deserialiserDonneesProduit(produit: Types.DossierDeVente.CompositionDossier): Types.DossierDeVente.IDonneesGeneriques[];
        /**
         * Désérialise une donnée transverse
         * @param {string} id Id de la donnée transverse à désérialiser.
         */
        deserialiserDonneeTransverse(id: string): Types.DossierDeVente.IDonneeTransverse;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action GET.
     * @author S0070531
     */
    interface IGestionDossierVenteGetDossierVenteQuery {
        /**
         *  Identifiant d'un Etablissement du Réseau BPCE
         */
        codeEtablissement: string;
        /**
         *  Numéro d'identification du dossier de vente
         *  Cette entrée est obligatoire si l'identifiantExterneDossierVente et le codeExterneApplication ne sont pas renseignés.
         */
        identifiantDossierVente?: number;
        /**
         * Référence du dossier fournie par le producteur qui gère l'offre.
         * Cette entrée est obligatoire si l'identifiantDossierVente n'est pas renseigné. Si l'identifiantExterneDossierVente est renseigné, le
         * codeExterneApplication doit être renseigné.
         */
        identifiantExterneDossierVente?: string;
        /**
         * Code de désignation externe de l'application dans la gestion des dossiers de vente.
         * Cette entrée est obligatoire si l'identifiantExterneDossierVente est renseigné.
         */
        codeExterneApplication?: string;
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte?: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cette rubrique spécifie l'entité type de l'organisation consultant, créant ou modifiant le dossier de vente.
         * Valeurs :
         *   '1' = Agence
         *   '2' = CRC
         *   '3' = E - Agence
         *   '4' = Internet
         *   '5' = Administratif
         *   Si cette entrée n'est pas renseignée, les entrées sur l'EDS doivent être renseignées.
         */
        codeEntiteVenteContexte?: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Cette entrée doit être renseignée si le codeEntiteVenteContexte et le codeEdsExternePFContexte ne sont pas renseignés.
         */
        codeEdsInternePFContexte?: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement
         * Identifiant défini en fonction du type d'élément de structure (type EDS).
         *
         * Cette entrée doit être renseignée, si le codeEntiteVenteContexte et le codeEdsInternePFContexte ne sont pas renseignés
         */
        codeEdsExternePFContexte?: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE.
         *   Typologie propre à chaque Etablissement du GCE.
         *   Cette entrée est obligatoire si le codeEdsExternePFContexte est renseigné.
         */
        typeEdsExterneContexte?: string;
        /**
         * Référence externe de l' agent ayant demandé à consulter, le dossier de vente.
         * Cette entrée est facultative.
         */
        referenceExterneAgentContexte?: number;
        /**
         * Cet indicateur permet de savoir si les données Composition (objet compositionCaracteristique) seules ou complétées des données Détail
         * Composition (objet compositionDonneeDetail), ou aucune donnée composition, sont à restituer en sortie de la ressource.
         *   Valeurs :
         *  'C' = seules les données Composition caractéristique sont à restituer
         *  'D' = les données Composition caractéristique et détail sont à restituer
         *  'N' = pas de restitution des données Composition
         */
        indicRestCompoDetail: string;
        /**
         * Cet indicateur permet de savoir si le chemin d'avancement (objet cheminAvancement) du Dossier de Vente est à restituer en sortie de la
         * ressource. Valeurs :
         *   'O' = le chemin d'avancement est à restituer
         *   'N' = le chemin d'avancement n'est pas à restituer
         */
        indicRestCheminAvancement: string;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action PUT.
     * @author S0070531
     */
    interface IGestionDossierVentePutDossierVenteQuery {
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cet indicateur permet de savoir si le commentaire lié au dossier de vente (objet Commentaire) doit être ou pas mis à jour dans la base
         * de donnée dossier de vente. En cas de mise à jour, le commentaire existant sera écrasé et remplacé par le nouveau commentaire (annule et
         *  remplace).
         *  Valeurs :
         * 'O' = le commentaire est à mettre à jour
         * 'N' = aucune mise à jour du commentaire
         */
        indicMajCommentaire: string;
        /**
         * En cas de mise à jour, toutes les personnes liées au dossier de vente seront annulées et remplacées par les nouvelles données fournies
         * en entrée de la ressource.
         *  Valeurs :
         *  'O' = toutes les personnes liées sont à mettre à jour
         *  'N' = aucune mise à jour des personnes liées
         */
        indicMajPersonne: string;
        /**
         * Cet indicateur permet de savoir si les données des partenaires prescripteur (objet Partenaire) doivent être mises à jour dans la base
         * de donnée dossier de vente.
         * En cas de mise à jour, toutes les données liées au partenaire seront annulées et remplacées par les nouvelles données fournies en entrée
         *  de la ressource.Valeurs :
         * 'O' = toutes les données partenaire sont à mettre à jour
         * 'N' = aucune mise à jour des données partenaire
         * nb : non utilisé dans GGO
         */
        indicMajPartenaire: string;
        /**
         * Cet indicateur permet de savoir si la composition du dossier (objet CompositionDossier) doit être ou pas mise à jour dans la base de donnée
         * dossier de vente
         * Si oui , c'est toute la composition (caractéristique et détail) qui est mise à jour en annule et remplace.
         * Valeurs:
         *
         * 'O' = Toutes les données composition sont à mettre à jour
         * 'N' = Aucune mise à jour des données composition
         */
        indicMajCompositionDetail: string;
        /**
         * Cet indicateur permet de savoir si la contractualisation du dossier de vente doit être ou pas mise à jour dans la base de données
         * dossier de vente.
         * Si oui c'est toutes les données de la contractualisation qui seront mises à jour en annule et remplace. Valeurs :
         *
         * 'O' : Toutes les données contractualisation signature sont à mettre à jour
         * 'N' : Aucune mise à jour des données contractualisation signature
         */
        indicMajContractSignature: string;
        /**
         * Code retour renvoyé par les applications externes au dossier de vente.
         * Ce code retour peut prendre des valeurs très différentes en fonction de l'application externe. Exemples :
         *
         * 'OK'
         * 'KO'
         * '01'
         * '00'
         * Cette entrée est à renseigner si une application externe a été appelée (Mise en gestion, BAT éditique, Pop up...)
         */
        codeRetourAppliExterne?: string;
        /**
         * Réponse renvoyée par les applications externes au dossier de vente.
         * La réponse peut prendre des valeurs très différentes en fonction de l'application externe. Exemples : 'OUI'
         * 'NON'
         * 'VALIDER' 'ANNULER'
         *
         * Cette entrée est à renseigner, si besoin, en complément du codeRetourAppliExterne si une application externe a été appelée.
         */
        valeurReponseAppliExterne?: string;
        /**
         * Cet indicateur permet de savoir si l'envoi du mail au client pour la signature électronique a été effectuée ou non.
         * Valeurs:
         *
         * ' ' = Non concerné
         * 'O' = L'envoi du mail SED a été effectué
         * 'N' = L'envoi du mail SED n'a pas été effectué
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'E' (électronique).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurEnvoiMail?: string;
        /**
         * Indique si le client a demandé un exemplaire papier des documents lors de la signature électronique en face à face (SAG).Valeurs :
         *
         * ' ' Non concerné.
         * 'O' Le client a demandé un exemplaire papier.
         * 'N' Le client n'a pas demandé d'exemplaire papier.
         * Cette entrée n'est pas obligatoire et est alimentée lorsque le codeModeSignature est égal à 'E' (électronique) et que le
         * codeCanalContexte est égal à 'FF' (face à face).Elle est renseignée en retour de l'application éditique.
         */
        indicateurExemplairePapier?: string;
        /**
         * Désigne le mode d'envoi souhaité pour les documents papier.
         * Lorsque l'utilisateur a choisi un mode de signature papier, il doit préciser comment doit se faire l'envoi.
         *
         *     Valeurs :
         *
         * ' ' Non concerné
         * 'M' Manuel - envoi à la charge de l'utilisateur
         * 'H' Hubmail - service d'envoi vers un sous-traitant qui édite les documents associés au dossier
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        modeEnvoiDocumentPapier?: string;
        /**
         * Cet indicateur permet de savoir si l'impression papier des documents a été effectuée ou non.
         *
         * Valeurs:
         *
         * ' ' Non concerné
         * 'O' L'impression papier n'a pas été effectuée.
         * 'N' L'impression papier a été effectuée.
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurImpressionEffectuee?: string;
        /**
         * Indicateur valorisé par les processus métier permettant de forcer le mode de vente VPC en fonction de règles de gestion propre au process métier.
         * Exemples :
         *
         * si mode financier = chèque
         *     si mode financier = prélèvement externe
         *     si offre contient un CFN joint
         *     si montant versement PEL > 1500
         * Valeurs:
         *
         *     'O' = Le mode de vente est forcée à VPC
         *     'N' = Pas de forçage
         *     ' ' = Non concerné
         */
        indicateurForcageVPC?: string;
    }
    /**
     * Interface comportant les données permettant d'interroger la ressource "dossiervente/gestionDossierVente"
     * avec le verbe d'action POST.
     * @author S0070531
     */
    interface IGestionDossierVentePostDossierVenteQuery {
        /**
         * Ce codeAction représente ce qui peut être fait au niveau du dossier de vente.
         * Les codes actions possibles sont :
         * COCO = consultation du dossier de vente courant. Ce code action correspond au besoin de consulter le dossier de vente dans son état et
         * d’avoir connaissance de l’ensemble des canaux de reprises possibles.
         * COCA = consultation du dossier de vente sur un canal précis. Ce code action correspond au besoin de consulter le dossier de vente sur un
         *  canal particulier, donc seule la reprise sur ce canal sera analysée.
         *  Cette entrée doit être renseignée.
         */
        codeActionContexte: string;
        /**
         * Caractérise le type d'appelant de l'application dossier de vente. Valeurs :
         *  'I' = IHM caisse (VMC, GGO)
         *  'C' = IHM client (espace client internet DEI MDEC)
         *  'B' = Batch ou ESB
         *  Cette entrée doit être renseignée.
         */
        typeAppelant: string;
        /**
         * Cette rubrique spécifie le canal de vente sur lequel on souhaite consulter le dossier de vente. Exemples :
         *   'TL' = Téléphone
         *   'FF' = Face à face
         *   'IN' = Internet
         *   Cette entrée doit être renseignée si le codeActionContexte = 'COCA'
         */
        codeCanalContexte: string;
        /**
         * Cette rubrique spécifie le sens de la communication dans lequel on souhaite consulter, créer ou mettre à jour le dossier de vente :
         *  contact entrant (à l'initiative du client), contact sortant (à l'initiative de l'Etablissement). Valeurs :
         *   'E' = Entrant
         *   'S' = Sortant
         *   Cette entrée n'est pas obligatoire.
         */
        codeSensCommunicationContexte?: string;
        /**
         * Cet indicateur permet de savoir si le commentaire lié au dossier de vente (objet Commentaire) doit être ou pas mis à jour dans la base
         * de donnée dossier de vente. En cas de mise à jour, le commentaire existant sera écrasé et remplacé par le nouveau commentaire (annule et
         *  remplace).
         *  Valeurs :
         * 'O' = le commentaire est à mettre à jour
         * 'N' = aucune mise à jour du commentaire
         */
        indicMajCommentaire: string;
        /**
         * En cas de mise à jour, toutes les personnes liées au dossier de vente seront annulées et remplacées par les nouvelles données fournies
         * en entrée de la ressource.
         *  Valeurs :
         *  'O' = toutes les personnes liées sont à mettre à jour
         *  'N' = aucune mise à jour des personnes liées
         */
        indicMajPersonne: string;
        /**
         * Cet indicateur permet de savoir si les données des partenaires prescripteur (objet Partenaire) doivent être mises à jour dans la base
         * de donnée dossier de vente.
         * En cas de mise à jour, toutes les données liées au partenaire seront annulées et remplacées par les nouvelles données fournies en entrée
         *  de la ressource.Valeurs :
         * 'O' = toutes les données partenaire sont à mettre à jour
         * 'N' = aucune mise à jour des données partenaire
         * nb : non utilisé dans GGO
         */
        indicMajPartenaire: string;
        /**
         * Cet indicateur permet de savoir si la composition du dossier (objet CompositionDossier) doit être ou pas mise à jour dans la base de donnée
         * dossier de vente
         * Si oui , c'est toute la composition (caractéristique et détail) qui est mise à jour en annule et remplace.
         * Valeurs:
         *
         * 'O' = Toutes les données composition sont à mettre à jour
         * 'N' = Aucune mise à jour des données composition
         */
        indicMajCompositionDetail: string;
        /**
         * Cet indicateur permet de savoir si la contractualisation du dossier de vente doit être ou pas mise à jour dans la base de données
         * dossier de vente.
         * Si oui c'est toutes les données de la contractualisation qui seront mises à jour en annule et remplace. Valeurs :
         *
         * 'O' : Toutes les données contractualisation signature sont à mettre à jour
         * 'N' : Aucune mise à jour des données contractualisation signature
         */
        indicMajContractSignature: string;
        /**
         * Code retour renvoyé par les applications externes au dossier de vente.
         * Ce code retour peut prendre des valeurs très différentes en fonction de l'application externe. Exemples :
         *
         * 'OK'
         * 'KO'
         * '01'
         * '00'
         * Cette entrée est à renseigner si une application externe a été appelée (Mise en gestion, BAT éditique, Pop up...)
         */
        codeRetourAppliExterne?: string;
        /**
         * Réponse renvoyée par les applications externes au dossier de vente.
         * La réponse peut prendre des valeurs très différentes en fonction de l'application externe. Exemples : 'OUI'
         * 'NON'
         * 'VALIDER' 'ANNULER'
         *
         * Cette entrée est à renseigner, si besoin, en complément du codeRetourAppliExterne si une application externe a été appelée.
         */
        valeurReponseAppliExterne?: string;
        /**
         * Cet indicateur permet de savoir si l'envoi du mail au client pour la signature électronique a été effectuée ou non.
         * Valeurs:
         *
         * ' ' = Non concerné
         * 'O' = L'envoi du mail SED a été effectué
         * 'N' = L'envoi du mail SED n'a pas été effectué
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'E' (électronique).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurEnvoiMail?: string;
        /**
         * Indique si le client a demandé un exemplaire papier des documents lors de la signature électronique en face à face (SAG).Valeurs :
         *
         * ' ' Non concerné.
         * 'O' Le client a demandé un exemplaire papier.
         * 'N' Le client n'a pas demandé d'exemplaire papier.
         * Cette entrée n'est pas obligatoire et est alimentée lorsque le codeModeSignature est égal à 'E' (électronique) et que le
         * codeCanalContexte est égal
         * à 'FF' (face à face).Elle est renseignée en retour de l'application éditique.
         */
        indicateurExemplairePapier?: string;
        /**
         * Désigne le mode d'envoi souhaité pour les documents papier.
         * Lorsque l'utilisateur a choisi un mode de signature papier, il doit préciser comment doit se faire l'envoi.
         *
         *     Valeurs :
         *
         * ' ' Non concerné
         * 'M' Manuel - envoi à la charge de l'utilisateur
         * 'H' Hubmail - service d'envoi vers un sous-traitant qui édite les documents associés au dossier
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        modeEnvoiDocumentPapier?: string;
        /**
         * Cet indicateur permet de savoir si l'impression papier des documents a été effectuée ou non.
         *
         * Valeurs:
         *
         * ' ' Non concerné
         * 'O' L'impression papier n'a pas été effectuée.
         * 'N' L'impression papier a été effectuée.
         * Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier).Elle est renseignée en retour de l'application éditique.
         *
         */
        indicateurImpressionEffectuee?: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente.
     */
    class GestionDossierVenteAjaxImplService implements IGestionDossierVenteService {
        private serviceAgentExtended;
        private qService;
        private commentaireService;
        private offreDonneesService;
        private erreurService;
        private referenceProduitPrincipalOffre;
        dossierVenteAutorise: boolean;
        private static _instance;
        private static _premiereInstance;
        /**
         * Recherche du MF associé au dossier
         * @return Le mode financier trouvé dans la composition du dossier, null si pas de dossier / pas de mode financier
         */
        rechercherModeFinancier(): string;
        /**
         * méthode comparant les P/S du dossier de vente à ceux générés dans le panier
         * @param dossier< Types.DossierDeVente.GestionDossierVente> : le dossier de vente
         * @param compositionOffre<Types.CompositionOffreEntitePersonne> : l'objet de composition
         * @return retour: une string avec le message d'information à remonter, ou alors null si aucun écart fonctionnel n'est détecté
         */
        verifierEcartsFonctionnels: (dossier: Types.DossierDeVente.GestionDossierVente, compositionOffre: Types.CompositionOffreEntitePersonne[]) => string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService, commentaireService: Services.CommentaireService, offreDonneesService: Services.OffreDonneesService, erreurService: Services.ErreurService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
        /**
         * Méthode de restitution du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data : Les données à passer en entrée de la ressource, dont notamment
         * l'identifiant du dossier de vente.
         */
        sendGetRequest(params: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à màj
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à créer
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPostRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le dossier de vente
         * chargé via sendGetRequest
         * @author S0070531
         * @return Dossier de vente
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        /**
         * Permet de mettre à jour le dossier de vente en mémoire
         * @author S0070531
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à créer
         * @return void
         */
        setGestionDossierVente(dossiervente: Types.DossierDeVente.GestionDossierVente): void;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le dossier de vente
         * chargé via le premier sendGetRequest effectué ou via la première sauvegarde
         * @author S0070531
         * @return Dossier de vente
         */
        getGestionDossierVenteInitial(): Types.DossierDeVente.GestionDossierVente;
        consoliderDonneesGeneriques(): Types.DossierDeVente.IDonneesGeneriques[];
        deserialiserDonneesProduit(produit: Types.DossierDeVente.CompositionDossier): Types.DossierDeVente.IDonneesGeneriques[];
        deserialiserDonneeTransverse(id: string): Types.DossierDeVente.IDonneeTransverse;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente (version mockée).
     * @author S0070531
     */
    class GestionDossierVenteMockImplService implements IGestionDossierVenteService {
        private serviceAgentExtended;
        private mockLoaderService;
        private qService;
        private commentaireService;
        private offreDonneesService;
        private erreurService;
        private referenceProduitPrincipalOffre;
        dossierVenteAutorise: boolean;
        private static _instance;
        private static _premiereInstance;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService, commentaireService: Services.CommentaireService, offreDonneesService: Services.OffreDonneesService, erreurService: Services.ErreurService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
        /**
         * Recherche du MF associé au dossier
         * @return Le mode financier trouvé dans la composition du dossier, null si pas de dossier / pas de mode financier
         */
        rechercherModeFinancier(): string;
        /**
         * méthode comparant les P/S du dossier de vente à ceux générés dans le panier
         * juste un return à null dans le cas d'un mock
         */
        verifierEcartsFonctionnels: (dossier: Types.DossierDeVente.GestionDossierVente, compositionOffre: Types.CompositionOffreEntitePersonne[]) => string;
        /**
         * Requête d'appel d'un mock
         * @author S0070531
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse mockée
         */
        sendGetRequest(data: IGestionDossierVenteGetDossierVenteQuery): ng.IPromise<Types.DossierDeVente.IGestionDossierVente>;
        /**
         * Méthode de mise à jour du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à màj
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPutRequest(dossier: Types.DossierDeVente.GestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Méthode de création du dossier de vente.
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à créer
         * @param {Types.IGestionDossierVentePutDossierVenteQuery} query : les paramètres de la query
         */
        sendPostRequest(dossier: Types.DossierDeVente.GestionDossierVente, query: IGestionDossierVentePostDossierVenteQuery): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        /**
         * Permet aux différents composants de l'application (directives/services/controleurs ...) de récupérer le paramétrage
         * chargé via sendGetRequest
         * @author S0070531
         * @return Paramétrage des composants P/S
         */
        getGestionDossierVente(): Types.DossierDeVente.GestionDossierVente;
        /**
         * Permet de mettre à jour le dossier de vente en mémoire
         * @author S0070531
         * @param {Types.DossierDeVente.GestionDossierVente} data : le dossier de vente à créer
         * @return void
         */
        setGestionDossierVente(dossiervente: Types.DossierDeVente.GestionDossierVente): void;
        getGestionDossierVenteInitial(): Types.DossierDeVente.GestionDossierVente;
        consoliderDonneesGeneriques(): Types.DossierDeVente.IDonneesGeneriques[];
        deserialiserDonneesProduit(produit: Types.DossierDeVente.CompositionDossier): Types.DossierDeVente.IDonneesGeneriques[];
        deserialiserDonneeTransverse(id: string): Types.DossierDeVente.IDonneeTransverse;
    }
    class GestionDossierVenteService {
        static gestionDossierVenteServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    /**
     * Données nécessaires à la reprise de l'éditique en VAD (en cas de plantage, en VPC .. ?)
     * Ces données sont sauvegardées sous la forme de données génériques transverses lorsqu'elles sont disponibles
     * En MEGI, elles sont disponibles après la mise en gestion
     * En VPC, je n'en ai aucune idée. Analyse à faire, sans doute côté P/S. Par exemple, comment avoir le n° bordereau alors qu'on a pas fait la MEG vu que
     * en VPC la MEG vient après l'éditique pré-contrat ?
     */
    class DonneesGeneriquesEditique {
        dateOuvertureOffre: string;
        dateDernierAvenantOffre: string;
        numeroDeCompte: string;
        codeGuichet: string;
        codeTypeCompte: string;
        identifiantBordereau: GestionGeneriqueOffres.Types.IContexteBordereau;
        echeancier: GestionGeneriqueOffres.Types.IContexteEcheancier;
        prixMensuel: number;
        routageEditique: Types.RoutageEditique;
        constructor();
    }
    interface IRepriseEditiqueService {
        /**
         *  Renvoie les données de reprise
         */
        get(): DonneesGeneriquesEditique;
        /**
         * Met à jour les données de reprise
         */
        set(donnees: DonneesGeneriquesEditique): void;
    }
    class RepriseEditiqueService implements IRepriseEditiqueService {
        static repriseEditiqueServiceId: string;
        static $inject: any;
        private _donneesReprise;
        /**
         *  Renvoie les données de reprise
         */
        get: () => DonneesGeneriquesEditique;
        /**
         * Met à jour les données de reprise
         */
        set: (donnees: DonneesGeneriquesEditique) => void;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Services {
    interface IPiecesJustificativesService {
        /**
         * Contruit un objet IRecherchePieceJustif et renvoie en retour ce même objet enrichi des pièces justificatives.
         * @returns Les pièces justificatives
         */
        calculerPiecesJustificatives(): Types.IRecherchePieceJustif;
        /**
         * Appelle la ressource /cataloguereferentiel-v1/recherchePieceJustif";
         */
        sendPutRequest(data: Types.IRecherchePieceJustif): ng.IPromise<Types.IRecherchePieceJustif>;
        /**
         *  Renvoie la liste des pièces justificatives récupérées via sendGetRequest
         */
        getPiecesJustificatives(): Types.IRecherchePieceJustif;
        /**
         * Renvoie le MDEC des pièces justificatives
         */
        getMdecPiecesJustificatives(): Types.IRecherchePieceJustif;
        /**
         * RAZ les pièces justificatives en mémoire
         */
        raz(): void;
    }
    class PiecesJustificativesService implements IPiecesJustificativesService {
        private serviceAgentExtended;
        private qService;
        private constantes;
        private contexteGgoStockageService;
        private compositionOffreService;
        private tiersService;
        private signatairesService;
        private referenceProduitPrincipalOffre;
        static piecesJustificativesServiceId: string;
        static $inject: string[];
        private piecesJustificatives;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendPutRequest(data: Types.IRecherchePieceJustif): ng.IPromise<Types.IRecherchePieceJustif>;
        getPiecesJustificatives: () => Types.IRecherchePieceJustif;
        setPiecesJustificatives: Types.IRecherchePieceJustif;
        getMdecPiecesJustificatives: () => Types.IRecherchePieceJustif;
        raz: () => void;
        /**
         * Contruit un objet IRecherchePieceJustif et renvoie en retour ce même objet enrichi des pièces justificatives.
         * @returns Les pièces justificatives
         */
        calculerPiecesJustificatives: () => Types.IRecherchePieceJustif;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, compositionOffreService: Services.CompositionOffreService, tiersService: Services.TiersService, signatairesService: Services.SignatairesService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
    }
}

declare module GestionGeneriqueOffres.Types.DossierDeVente {
    const PIECES_JUSTIFICATIVES: string;
    const PIECES_JUSTIFICATIVES_MDEC: string;
    const TARIFICATION: string;
    const EDITIQUE: string;
    const SIGNATAIRE_SAISI: string;
    const QUESTION_DV: string;
}
declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeDossierVenteService {
        /**
         * Sauvegarde de l'offre en cours dans le dossier de vente
         *
         * Parcours du panier et collecte des promesses sur données génériques de chaque P/S (retournerDonneesGeneriques)
         * Résolution des promesses collectées. Si succès :
         * Fabrication de l'objet personnesLiees (creerPersonnesLiees)
         * Construction de la query
         * Appel de la ressource (sauvegarder).Si on a un n° de dossier de vente, appel en post (création), sinon en put (màj)
         *
         * Seul les paramètres codeActionContexte est obligatoire, il correspond au code action sur 4 positions (INIT, ENRG etc).
         * Les autres paramètres sont initialisés par défaut si ils ne sont pas précisés / initialisés à undefined.
         *
         * @param {string} codeActionContexte : Le code action (ENRG, INIT etc.). Obligatoire.
         * @param {Constantes.IndicateursDeMiseAJourEPI} indicateurs : La liste des indicateurs de maj
         * @param {Types.DossierDeVente.CompteRenduOperationFonctionnelle} compteRenduOperationFonctionnelle? : Ce CR contient les infos renvoyées par l'opération fonctionnelle s'étant exécutée avant l'appel à la fonction de sauvegarde
         * @param {string} indicateurEnvoiMail? : Cet indicateur permet de savoir si l'envoi du mail au client pour la signature électronique a été effectuée
         * ou non. Valeurs : O/N/vide (non concerné). Cette entrée est obligatoire si le codeModeSignature est égal à 'E' (électronique). Elle est renseignée
         * en retour de l'application éditique. Si non renseigné lors de l'appel, positionné par défaut à vide.
         * @param {string} indicateurExemplairePapier? : Indique si le client a demandé un exemplaire papier des documents lors de la signature électronique en
         * face à face (SAG). Valeurs : O/N/vide (non concerné). Cette entrée n'est pas obligatoire et est alimentée lorsque le codeModeSignature est égal à
         * 'E' (électronique) et que le codeCanalContexte est égal à 'FF' (face à face). Elle est renseignée en retour de l'application éditique. Si non
         * renseigné lors de l'appel, positionné par défaut à vide.
         * @param {string} modeEnvoiDocumentPapier? Désigne le mode d'envoi souhaité pour les documents papier. Lorsque l'utilisateur a choisi un mode de
         * signature papier, il doit préciser comment doit se faire l'envoi. Valeurs : M (manuel)/ H (Hubmail) /vide (non concerné). Cette entrée est
         * obligatoire si le codeModeSignature est égal à 'P' (papier). Elle est renseignée en retour de l'application éditique. Si non renseigné lors de
         * l'appel, positionné par défaut à vide.
         * @param {string} indicateurImpressionEffectuee? Cet indicateur permet de savoir si l'impression papier des documents a été effectuée ou non.
         * Valeurs : O/N/vide (non concerné). Cette entrée est obligatoire si le codeModeSignature est égal à 'P' (papier). Elle est renseignée en retour de
         * l'application éditique. Si non renseigné lors de l'appel, positionné par défaut à vide.
         * @param {string} codeRetourAppliExterne? Code retour renvoyé par les applications externes au dossier de vente. Cette entrée est à renseigner si une
         * application externe a été appelée (Mise en gestion, BAT éditique, Pop up...).  Si non renseigné lors de l'appel, initialisé à chaîne vide.
         * @param {string} valeurReponseAppliExterne? Réponse renvoyée par les applications externes au dossier de vente. Cette entrée est à renseigner, si
         * besoin, en complément du codeRetourAppliExterne si une application externe a été appelée. Si non renseigné lors de l'appel, initialisé à chaîne
         * vide.
         * @param {string} indicateurBlocageFinalisation? Cet indicateur, permet ou non de bloquer la finalisation du dossier de vente. En cas de signature
         * client, en fonction de cet indicateur, le processus de vente sera différent.  Si non renseigné lors de l'appel, initialisé à N
         * @param {string} indicateurExecutionImmediate? Indique si le client a choisi une exécution immédiate. Dans l'affirmative, l'offre associée au dossier
         * peut être ouverte immédiatement. Dans le cas contraire, un délai (14 jours) doit être observé avant l'ouverture. Si non renseigné lors de l'appel,
         * initialisé à chaîne vide.
         * @param {string} indicateurGestionPiece? Indique si l'étape permet la gestion de la collecte de pièces ou non. Si non renseigné lors de l'appel,
         * initialisé à chaîne vide.
         * @return : une promise sur le dossier de vente renvoyé par la ressource
         */
        sauvegarder(codeActionContexte: string, indicateurs: Constantes.IndicateursDeMiseAJourEPI, executer: boolean, passageContractualisation: boolean, contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature?: string, transactionIcg?: string, compteRenduOperationFonctionnelle?: Types.DossierDeVente.CompteRenduOperationFonctionnelle, indicateurEnvoiMail?: string, indicateurExemplairePapier?: string, modeEnvoiDocumentPapier?: string, indicateurImpressionEffectuee?: string, codeRetourAppliExterne?: string, valeurReponseAppliExterne?: string, indicateurBlocageFinalisation?: string, indicateurExecutionImmediate?: string, indicateurGestionPiece?: string): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
    }
    class SauvegardeDossierVenteService implements ISauvegardeDossierVenteService {
        private $rootScope;
        private $q;
        private $timeout;
        private serviceAgentExtended;
        private constantes;
        private compositionOffreService;
        private erreurService;
        private gestionDossierVenteService;
        private contexteGgoStockageService;
        private tiersService;
        private signatairesService;
        private commentaireService;
        private messagesService;
        private contexteService;
        private piecesJustificativesService;
        private tarificationOffreService;
        private repriseEditiqueService;
        private referenceProduitPrincipalOffre;
        private offreDonneesService;
        private entiteTitulaireBdrService;
        static sauvegardeDossierVenteServiceId: string;
        static $inject: string[];
        private listeLibellesProduits;
        private compositionProduits;
        private listePromessesSauvegarderDossierVente;
        private composition;
        private contientIZI;
        private succesRecuperationDonneesProduitsServices;
        private contexteGgo;
        private entitesTitulaires;
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, gestionDossierVenteService: Services.IGestionDossierVenteService, contexteGgoStockageService: Services.IContexteGgoStockageService, tiersService: Services.TiersService, signatairesService: Services.SignatairesService, commentaireService: Services.CommentaireService, messagesService: Services.MessagesService, contexteService: Services.ContexteService, piecesJustificativesService: Services.PiecesJustificativesService, tarificationOffreService: Services.ITarificationOffreService, repriseEditiqueService: Services.RepriseEditiqueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, offreDonneesService: Services.OffreDonneesService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService);
        /**
         * Sauvegarde du dossier de vente
         */
        sauvegarder(codeActionContexte: string, indicateurs: Constantes.IndicateursDeMiseAJourEPI, executer: boolean, passageContractualisation: boolean, contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature?: string, transactionIcg?: string, compteRenduOperationFonctionnelle?: Types.DossierDeVente.CompteRenduOperationFonctionnelle, indicateurEnvoiMail?: string, indicateurExemplairePapier?: string, modeEnvoiDocumentPapier?: string, indicateurImpressionEffectuee?: string, codeRetourAppliExterne?: string, valeurReponseAppliExterne?: string, indicateurBlocageFinalisation?: string, indicateurExecutionImmediate?: string, indicateurGestionPiece?: string): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
        private doDebug;
        /**
         * Surcharge le contenu de la query par la valeur des clés contenues dans compteRendu. Pour être surchargée,
         * la clé doit déjà exister. par exemple je peux surcharger "codeRetourAppliExterne" mais pas "blablabla"
         * @param query La query de la ressource dossier de vente, qui doit être initialisée à des valeurs par défaut
         * @param compteRendu Le compte rendu d'une opération fonctionnelle
         */
        private traiterSurchargeQuery;
        /**
         * Si dans le compte rendu des données ont été rajoutées dans donneesDossierVente, on les traite ici
         * @param compteRendu Le compte rendu d'une opération fonctionnelle
         */
        private traiterSurchargeData;
        /**
         * Retraitement des données reçues des P/S. En principe on devrait pouvoir recevoir plusieurs données génériques (tableau)
         * par P/S mais la plupart des P/S n'en renvoient qu'une, et pas sous la forme d'un tableau, mais sous la forme d'un objet simple.
         * Cette fonction va retraiter les objets simples reçus pour les mettre dans un tableau afin d'unifier le traitement par la suite.
         * @param {Types.DossierDeVente.ISauvegardeDonneesGeneriques[][]} donneesGeneriques Les données reçues des P/S
         */
        private mettreEnFormeDonneesGeneriques;
        /**
         * Déclenche la sauvegarde du P/S passé en paramètre ainsi que de tous ceux situés sous lui.
         */
        private sauvegarderTousProduitsServices;
        /**
         *
         * Parcours du panier et collecte des promesses sur données génériques de chaque P/S
         */
        private retournerPromesseDonneesGeneriques;
        /**
         * génère le nouveau tableau des personnes liées à l'aide de l'ancien et des données de la contract
         * @param {Types.DossierDeVente.PersonneLiee[]} personnesLiees Personnes liées
         * @param {Types.DossierDeVente.PersonneLiee[]} personnesLieesContract les personnes issues de la contract/signataires
         */
        private creerPersonnesLieesAvecDV;
        /**
         * Création de l'objet personnesLiees du dossier de vente
         * @param {Types.Tiers.Personne[]} personnes Personnes associées à l'offre
         * @param {myway.comContract.modeles.ISignataireComplet[]} signataires Signataires de l'offre
         * @returns objet personnesLiees
         */
        private creerPersonnesLiees;
        /**
         * Détermination de l'indicateur forcage VPC en fonction de la valeur individuelle de chaque indicateurForcageVpc
         * positionné par les P/S
         * @param {Types.DossierDeVente.ISauvegardeDonneesGeneriques[][]} donneesGeneriques Les données génériques collectées
         * @returns "O" si il y a au moins un P/S qui a positionné son indicateur indicateurForcageVpc à vrai, sinon "N".
         */
        private calculerIndicateurForcageVpc;
        /**
         * Sauvegarde de l'id dossier de vente dans le contexte processus de GGO.
         * Lorsqu'on fait de la VAD depuis NSDK, on entre sans dossier de vente et on le créée en faisant avancer le process.
         * En cas de débranchement, lorsqu'on revient de l'éditique ou de la contract, il faudra avoir connaissance du n° de dossier
         * de vente, comme personne ne va aller le positionner dans le contexte, il faut bien le faire nous même.
         * @param identifiantDossierVente
         */
        private sauvegarderContexteGgo;
        /**
         * Permet de consommer la ressource dossierNumerique en mode PUT.
         * @param {dossiernumerique: MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique}
         * @returns {ng.IPromise<MyWay.Contractualisation.Ressources.DossierNumerique.IDossierNumerique>}.
         */
        putDossierNumerique(dossiernumerique: Types.DossierNumerique.IDossierNumerique): ng.IPromise<Types.DossierNumerique.IDossierNumerique>;
        /**
         * Appel des ressources dossier de vente en POST ou PUT selon qu'on ait un n° de dossier ou pas dans le contexte. Si on en a pas
         * (mode création dossier de vente) on remet le contexte à jour avec le n° de dossier renvoyé par le central. Ainsi, les appels suivants
         * se feront en put.
         * @param {Types.DossierDeVente.GestionDossierVente} dossierVente Le dossier de vente prêt à être sauvegardé
         * @param {Services.IGestionDossierVentePutDossierVenteQuery} query La query de la ressource.
         */
        private doSauvegarde;
        /**
         * Préparation des données JSON data transverses à sauvegarder via appel aux services concernés
         * Si les données transverses venaient à se multiplier : déporter leur gestion dans un service spécifique.
         */
        private preparerDonneesTransverses;
        private genererPromesseDV;
        /**
         * genere le dossier de vente avec les personnes issues des services "classiques"
         */
        private genererDossierVente;
        /**
         * génère le dossier de vente à l'aide des personnes liées récupérées depuis le contexte
         * @param personnesLiees
         */
        private genererDossierVenteViaContexte;
    }
}

declare module GestionGeneriqueOffres.Services {
    interface ISauvegardeContexteService {
        sauvegarderContexteCenet(idProduit: string, actionPtu: string): ng.IPromise<any>;
        sauvegarderContexteSepamail(rice: string, action: string): ng.IPromise<any>;
        sauvegarderContexteConnClientPart(idPersonne: string): ng.IPromise<any>;
        sauvegarderContexteGGHO(produit: Types.CompositionOffreProduit, param: IParametreGGHO): ng.IPromise<any>;
        lancerSPAEditique(modeReedition?: boolean, isSignatureElectronique?: boolean): void;
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
        codeEtablissementContrat: string | number;
        codeGuichetContrat: string | number;
        codeTypeProduitServiceContrat: string | number;
        referenceProduitServiceContrat: string | number;
        numeroPersonneDetentrice: number | number;
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
        private $rootScope;
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
        private gestionDossierVenteService;
        private sauvegardeDossierVenteService;
        private servicesAuthentification;
        private controlePreRequisService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        private codeTypeProduitServicePrincipalOffre;
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
        private _composition;
        private _idEdsExterne;
        private _catalogue;
        private _libelleOffre;
        private _donneesSignerContrat;
        private _isReedition;
        private _contratEntreeCenetClefs;
        private _contratEntreeSepaMailClefs;
        private _contratEntreeConnClientPartClefs;
        private _acteDeGestion;
        private _offreDonnees;
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
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.IContexteService, tiersService: Services.ITiersService, contexteGgoStockageService: Services.IContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, compositionOffreService: Services.ICompositionOffreService, gestionEditiqueService: Services.GestionEditiqueService, catalogueService: Services.ICatalogueService, signataireService: Services.SignatairesService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, enveloppeOffreService: Services.IEnveloppeOffreService, modalService: MyWay.UI.IModalService, offreDonneesService: Services.IOffreDonneesService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, actionsService: Services.ActionsService, routageEditique: Types.RoutageEditique, $location: ng.ILocationService, gestionDossierVenteService: Services.IGestionDossierVenteService, sauvegardeDossierVenteService: Services.SauvegardeDossierVenteService, servicesAuthentification: GestionGeneriqueOffres.Services.AuthentificationService, controlePreRequisService: Services.ControlePreRequisService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
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
        lancerSPAEditique(modeReedition?: boolean, isSignatureElectronique?: boolean): void;
        /**
         * @ngdoc method
         * @name sauvegarderContexteEditique
         * @description
         * Méthode permettant de sauvegarder dans le contexte les informations attendues par l'application éditique avant le débranchement
         *
         * @param {void}
         * @returns {ng.IPromise} promise
         */
        sauvegarderContexteEditique: () => ng.IPromise<any>;
        private supprimerEspaces;
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
        private servicesAuthentification;
        private composition;
        private contexte;
        static validationFormulaireServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService, tarificationOffreService: Services.ITarificationOffreService, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService, sauvegardeContexteService: Services.SauvegardeContexteService, routageEditique: Types.RoutageEditique, gestionEditiqueService: Services.GestionEditiqueService, servicesAuthentification: GestionGeneriqueOffres.Services.AuthentificationService);
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
        checkIfDateIsBetween: (fromDate: string, toDate: string) => boolean;
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
        private mwNotificationService;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, qService: ng.IQService, mwNotificationService: MyWay.UI.IMwNotificationService);
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
        private $timeout;
        private contexteGgoStockageService;
        private sauvegardeDossierVenteService;
        private messagesService;
        private contexteGgo;
        private _acteDeGestion;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService, contexteGgoStockageService: Services.ContexteGgoStockageService, sauvegardeDossierVenteService: Services.SauvegardeDossierVenteService, messagesService: Services.MessagesService);
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
        private contexteGgoEditique;
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
        messagesErreur: Array<Types.ErreurGestionGeneriqueOffre>;
        static controllerId: string;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IFacturationModaleScope, data: any, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, constantes: GestionGeneriqueOffres.Constantes.Definitions, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.OffreDonneesService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, routageEditique: Types.RoutageEditique, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, signataireService: Services.SignatairesService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService);
        /**
         *  La fonction qui va fabriquer le contexte à passer au bloc à partir du contexte GGO et des données du P/S
         */
        fabriquerContexte(modeAcces: string, modeAffichage: string, contexteAppel: string, contexte: Types.ContexteGgo, produit: Types.CompositionOffreProduit, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne, catalogue: Types.CatalogueNode, composition: Types.CompositionOffre, invisible: boolean, estModifie: boolean, repris: boolean, produitSelectionne: Types.CleValeur, referencesProduits: Types.ReferenceProduit[]): Types.DonneesContextuelles;
        mettreEnGestion(): void;
        isErreur(): boolean;
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
        private signatairesService;
        private referenceProduitPrincipalOffre;
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
        constructor($q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, modalService: MyWay.UI.IModalService, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, forcageProduitsService: Services.ForcageProduitsService, gestionEditiqueService: Services.GestionEditiqueService, actionsService: Services.ActionsService, validationFormulaireService: Services.ValidationFormulaireService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, enveloppeOffreService: Services.IEnveloppeOffreService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, sauvegardeContexteService: Services.ISauvegardeContexteService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, tiersService: Services.TiersService, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService, signatairesService: Services.SignatairesService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
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
        mettreEnGestionProduitServiceCourant: () => ng.IPromise<any>;
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
        private compositionOffreService;
        private servicesAuthentification;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        traitementEnCours: boolean;
        private codeActeGestion;
        chargementRecap: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, modalService: MyWay.UI.IModalService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, compositionOffreService: Services.CompositionOffreService, servicesAuthentification: GestionGeneriqueOffres.Services.AuthentificationService);
        checkIfDateIsBetween: (fromDate: string, toDate: string) => boolean;
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
    class RoutageEditiqueControleur {
        private $scope;
        private $rootScope;
        private contexteGgoStockageService;
        private serviceAgentExtended;
        private sauvegardeContexteService;
        static $inject: string[];
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, contexteGgoStockageService: Services.ContexteGgoStockageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, sauvegardeContexteService: Services.ISauvegardeContexteService);
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
        static $inject: any;
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
    interface IAuthentificationService {
        getListeMediaPart(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Types.IMedia>;
        getActivitePro(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Types.ICorporateActiviteProfessionnelle>;
        getListeInterlocuteurs(codeEtablissement: string, identifiantPersonne: string, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<any>;
        getDetailsInterlocuteur(identifiantPersonne: string, numeroLienInterlocuteur: string): ng.IPromise<any>;
        getPortefeuille(identifiantTiers: number, codeEtablissement: string): ng.IPromise<GestionGeneriqueOffres.Types.ITiersPortefeuille>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: string, identifiantInterneEDS?: string): ng.IPromise<GestionGeneriqueOffres.Types.ICaracteristiqueEDS>;
        getRecherche(codeEtablissement: string, groupeFonction: string): ng.IPromise<Array<GestionGeneriqueOffres.Types.IRechercheAgent>>;
    }
    class ErreurModel {
        idService: string;
        message: string;
        estBloquant: boolean;
    }
    class AuthentificationService implements IAuthentificationService {
        private $q;
        private serviceAgentExtended;
        static authentificationServiceId: string;
        static URL_PORTEFEUILLE: string;
        static URL_MEDIA_PART: string;
        static URL_CORPORATE_ACT_PRO: string;
        static URL_CARACTERISTIQUE_EDS: string;
        static URL_AGENT: string;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getPortefeuille(identifiantTiers: number, codeEtablissement: string): ng.IPromise<GestionGeneriqueOffres.Types.ITiersPortefeuille>;
        getListeMediaPart(codeEtablissement: string, identifiantPersonne: string): ng.IPromise<Types.IMedia>;
        getActivitePro(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Types.ICorporateActiviteProfessionnelle>;
        getMoyensAuthentification(): ng.IPromise<Types.IMoyenAuth[]>;
        getDetailsInterlocuteur(identifiantPersonne: string, numeroLienInterlocuteur: string): ng.IPromise<any>;
        getListeInterlocuteurs(codeEtablissement: string, identifiantPersonne: string, typeInterlocuteur: string, codeApplicationCartographie: string): ng.IPromise<any>;
        getCaracteristiqueEDS(codeEtablissement: string, codeAgent: string, identifiantInterneEDS?: string): ng.IPromise<GestionGeneriqueOffres.Types.ICaracteristiqueEDS>;
        getRecherche(codeEtablissement: string, groupeFonction: string): ng.IPromise<Array<GestionGeneriqueOffres.Types.IRechercheAgent>>;
        private callServiceRest(params, methode, url, idService, important);
        determinerTypeClient(compositionOffre: Types.CompositionOffre, contexte: Types.ContexteGgo): string;
    }
}

declare module GestionGeneriqueOffres.Types {
    class CaracteristiqPrdServ {
        support: Array<ISupport>;
        periodeGestionDomaine: Array<IPeriodeGestionDomaine>;
        definition: IDefinition;
        transformation: Array<ITransformation>;
    }
}
declare module GestionGeneriqueOffres.Services {
    /**
     * Interface de définition du service de catalogue référentiel.
     */
    interface ICatalogueReferentielService {
        sendGetRequest(identifiantProduitService: number): ng.IPromise<Types.CaracteristiqPrdServ>;
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "catalogue référentiel".
     * @author S0076105
     */
    class CatalogueReferentielAjaxImplService implements ICatalogueReferentielService {
        private serviceAgentExtended;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Requête d'appel du web service avec le verbe d'action GET
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(identifiantProduitService: number): ng.IPromise<Types.CaracteristiqPrdServ>;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
    /**
     * Classe permettant d'effectuer la communication avec le web service "Catalogue référentiel".
     * @author S0076105
     */
    class CatalogueReferentielMockImplService implements ICatalogueReferentielService {
        private serviceAgentExtended;
        private mockLoaderService;
        private qService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        /**
         * Requête d'appel d'un mock
         * @author S0076105
         * @param Objet contenant les champs permettant d'effectuer l'appel au web service
         * @return Une promesse contenant la réponse du web service
         */
        sendGetRequest(identifiantProduitService: number): ng.IPromise<Types.CaracteristiqPrdServ>;
    }
    class CatalogueReferentielService {
        static catalogueReferentielServiceId: string;
    }
}

declare module GestionGeneriqueOffres.Services {
    class DossierNumeriqueRequestFactory {
        private methode;
        private dossierNumerique;
        private annulationDossier;
        constructor(methode: MyWay.Services.MethodEnum, dossierNumerique: Myway.Ressource.DossierNumerique.IDossierNumerique, annulationDossier: Myway.Ressource.DossierNumerique.IAnnulationDossier);
        create(): MyWay.Services.IRequestSettings;
    }
}

/**
 * Repris avec adaptations de la SPA dossier de vente (myway.clients-dossier-de-vente)
 */
declare module GestionGeneriqueOffres.Services {
    class DossierNumeriqueService {
        private $q;
        private serviceAgentExtended;
        static dossierNumeriqueServiceId: string;
        static $inject: string[];
        private restDossierNumeriqueServiceURL;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête DELETE
         * Permet d'annuler la signature electronique
         * @return promise<IReponseAnnulationDossier>
         */
        annuleSignatureElectronique(donneesAnnulation: Types.DossierNumerique.IAnnulationDossier): ng.IPromise<Types.DossierNumerique.IReponseAnnulationDossier>;
    }
    class ReferenceActeFactory {
        static TYPE_REFERENCE_ACTE_E01: string;
        static TYPE_REFERENCE_ACTE_E02: string;
        constructor();
        createReferenceActe(typeReferenceActe: string, valReferenceActe: string): Myway.Ressource.DossierNumerique.IReferenceActe;
        createListeReferenceActe(typeReferenceActe: string, valReferenceActe: string): Array<Myway.Ressource.DossierNumerique.IReferenceActe>;
    }
    class TitulaireFactory {
        constructor();
        createTitulaireFromTitulaireActe(titulaireActe: Myway.Ressource.ContractualisationActe.ITitulaireActe): Myway.Ressource.DossierNumerique.ITitulaire;
        createListeTitulaireFromListeTitulaireActe(listeTitulaireActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>): Array<Myway.Ressource.DossierNumerique.ITitulaire>;
    }
    class ContractualisationUtils {
        static convertirDateTOYYYYMMDD(date: Date): string;
        convertirDateTOYYMMDD(date: Date): string;
        convertirDateTOHHMMSS(date: Date): string;
        static checkContractualisationActeObject(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe): boolean;
        static checkActeRepriseObjet(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, acteReprise: IActeReprise): boolean;
    }
    interface IActeReprise {
        codeActeGestion: string;
        codeCanal: string;
        numeroEntiteTitulaire: string;
        codeTypeMarcheEntreprise: string;
        codeModeMiseEnGestion: string;
        indicateurPapier?: boolean;
        indicateurDossierIDNExistant?: boolean;
        referenceOffre: string;
        referenceContrat: string;
        codeTypeProduit: string;
        identifiantActeIDN: string;
        listeActeSecondaires: Array<string>;
        listeSignataires: Array<myway.comContract.modeles.ISignataire>;
        listeTitulairesActe: Array<Myway.Ressource.ContractualisationActe.ITitulaireActe>;
        libelleActe: string;
        codeGuichet?: string;
        identifiantAgent?: string;
        referenceEDSExterneClient: string;
        referenceEDSInterneClient: string;
        nbPersonneEntiteTitulaire: number;
        acteGestionCompteSupport: string;
        codeEntite?: string;
        numeroOffreVMC?: string;
        typeProfessionnel?: string;
        identifiantActeExterne?: string;
    }
    class ActeFactory {
        createActeFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, identifiantDossierVente: number): Myway.Ressource.DossierNumerique.IActe;
        /**
         *
         * @param contractualisationActe
         */
        private getReferenceContrat(contractualisationActe);
        /**
         *
         * @param acteGestion
         */
        private isActeGestionBPCEA(codeActeGestion);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionMSI(contractualisationActe);
        private getLibelleMotifNonEligibilite(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionPJI(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionContrat(contractualisationActe);
        /**
         *
         * @param contractualisationActe
         */
        private getCodeTypeActionCRE(contractualisationActe);
        private getCodeMailSignataire(contractualisationActe);
        private getDateFinValiditeActe();
        private getTopFAFGXML();
        private getListeReferenceActe(referenceOffre, referenceContratCarte);
    }
    class FluxFilenetFactory {
        private static TYPE_DOCUMENT_CCSE;
        private static GED_DOCUMENT_CCSE;
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        constructor();
        createFluxFilenet(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.IFluxFilenet;
        private getIdentifiantGEDDocument(documentAProduire, codeEtablissementFinancier);
    }
    class FluxGedTemporaireFactory {
        private static IDENTIFIANT_COMPOSANT_APPLICATIF;
        constructor();
        createFluxGedTemporaireFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IFluxGedTemporaire;
        private getIdentifiantDocumentTemporaire(documentAProduire);
    }
    class FluxDocPartageICGFactory {
        constructor();
        createFluxDocPartageICG(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IFluxDocPartageICG;
        private getReferencePartage(documentAProduire);
    }
    class ContenuDocumentFactory {
        constructor();
        createContenuDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Myway.Ressource.DossierNumerique.IContenuDocument;
    }
    class StockageDocumentFactory {
        constructor();
        createStockageDocumentFromDocumentAProduire(documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IStockageDocument;
    }
    class InfoDocumentFactory {
        private static TYPE_DOCUMENT_CCSE;
        private static LABEL_DOCUMENT_CCSE;
        private static LIBELLE_DESCRIPTION_DOCUMENT_IDN_CCSE;
        private static TYPE_MIME_DOCUMENT;
        constructor();
        createInfoDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IInfoDocument;
        private getLabelDocument(documentAProduire);
        private getLibelleDescriptionDocumentIDN(documentAProduire);
        private getUrlDocument(documentAProduire);
        private getModeUsageDocument(documentAProduire, codeCanal);
    }
    class SignataireDocumentFactory {
        private static NUMERO_AFFICHAGE_DOC_ENTREPRISE;
        constructor();
        createSignataireDocumentFromSignataireDocument(signataireDocument: Myway.Ressource.ContractualisationActe.ISignataireDocument, numeroAffichageDocument: number, codeIndicateurSignature: boolean): Myway.Ressource.DossierNumerique.ISignataireDocument;
        createListeSignataireDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Array<Myway.Ressource.DossierNumerique.ISignataireDocument>;
        private getCodeIndicateurSignature(documentAProduire);
        private getNumeroAffichageDocument(contractualisationActe, documentAProduire);
    }
    class ComportementSignatureDocumentFactory {
        constructor();
        createComportementSignatureDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire): Myway.Ressource.DossierNumerique.IComportementSignatureDocument;
    }
    class DocumentFactory {
        constructor();
        createDocumentFromDocumentAProduire(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentAProduire: Myway.Ressource.ContractualisationActe.IDocumentAProduire, codeEtablissementFinancier: string): Types.DossierNumerique.IDocument;
        createListeDocumentFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, codeEtablissementFinancier: string): Array<Types.DossierNumerique.IDocument>;
        private getReferenceDocumentProducteur(contractualisationActe, documentAProduire);
        private getReferenceDocumentProducteurContractuel(identifiantAgent, indice);
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
    interface IPreparationContractualisationService {
        preparerContractualisation(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentsGeneres: Types.IContexteIdntPJ[]): ng.IPromise<any[]>;
    }
    class PreparationContractualisationService implements IPreparationContractualisationService {
        private $q;
        private serviceAgentExtended;
        private constantes;
        static preparationContractualisationServiceId: string;
        static $inject: string[];
        preparerContractualisation(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, documentsGeneres: Types.IContexteIdntPJ[]): ng.IPromise<any[]>;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions);
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
    class PromotionSystematiqueService implements IPromotionSystematiqueService {
        private serviceAgentExtended;
        private qService;
        static promotionSystematiqueId: string;
        private static _instance;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
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
        sendGetPeriodiciteRequest(codeCaisse: string, identifiantProduitServiceOffre: number): ng.IPromise<Types.IPeriodicite[]>;
        compteSupport: MyWay.Model.Contrat;
        isCompteSupportSaisi: boolean;
        periodiciteSelectionnee: Types.IPeriodicite;
        codePeriodicite: string;
        libellePeriodicite: string;
        getLibellePeriodicitePrelevement(codePeriodicite: string): string;
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
        codeActeGestion: string;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource REST "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementAjaxImplService implements ITarificationOffrePrelevementService {
        private serviceAgentExtended;
        private qService;
        private static _instance;
        compteSupport: MyWay.Model.Contrat;
        isCompteSupportSaisi: boolean;
        codePeriodicite: string;
        libellePeriodicite: string;
        periodiciteSelectionnee: Types.IPeriodicite;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        getLibellePeriodicitePrelevement(codePeriodiciteDefaut: string): string;
        sendGetPeriodiciteRequest(codeCaisse: string, identifiantProduitServiceOffre: number): ng.IPromise<Types.IPeriodicite[]>;
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
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private urlPeriodiciteOffre();
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource mockée "tarification/tarificationOffrePrelevement".
     */
    class TarificationOffrePrelevementMockImplService implements ITarificationOffrePrelevementService {
        private serviceAgentExtended;
        private mockLoaderService;
        private qService;
        private static _instance;
        compteSupport: MyWay.Model.Contrat;
        isCompteSupportSaisi: boolean;
        codePeriodicite: string;
        libellePeriodicite: string;
        periodiciteSelectionnee: Types.IPeriodicite;
        static $inject: string[];
        getLibellePeriodicitePrelevement(codePeriodicite: string): string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mockLoaderService: GestionGeneriqueOffres.Services.MockLoaderService, qService: ng.IQService);
        sendGetPeriodiciteRequest(codeCaisse: string, identifiantProduitServiceOffre: number): ng.IPromise<Types.IPeriodicite[]>;
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
        sendPutRequestAvenant(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
    }
    class TarificationOffrePromotionService implements ITarificationOffrePromotionService {
        private serviceAgentExtended;
        private qService;
        static tarificationOffrePromotionServiceId: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, qService: ng.IQService);
        /**
         * Requête d'appel de la ressource avec le verbe d'action PUT
         * @param Objet contenant les champs permettant d'effectuer l'appel
         * @return Une promesse contenant la réponse
         */
        sendPutRequest(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
        sendPutRequestAvenant(tarification: Types.ITarificationOffrePromotion): ng.IPromise<Types.ITarificationOffrePromotion>;
        /**
         * Méthode de construction de l'url du web service
         * @return L'url du web service
         */
        private url();
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
        getDonneesPourDossierDeVente(): DonneesTarificationASauvegarder;
        miseAJourFacturation(): ng.IPromise<any>;
    }
    class DonneesTarificationASauvegarder {
        prixMensuel: number;
        compteSupport: MyWay.Model.Contrat;
        dateEnregistrement: Date;
        periodicite: string;
        constructor(compteSupport: MyWay.Model.Contrat, codePeriodicite: string);
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
        private tarificationOffrePrelevementService;
        private tiersService;
        private signatairesService;
        private promotionSystematiqueService;
        private tarificationOffrePromotionService;
        private offreDonneesService;
        estModifie: boolean;
        activationBoutonFacturation: boolean;
        compatibiliteTarification: boolean;
        tarificationOffreSynthese: any;
        private _numeroEntiteTitulaire;
        private _referenceExterneAgent;
        private _codeEtablissement;
        private _codeProduitService;
        private _numeroOffreSouscrite;
        private _acteGestion;
        private _contexteGgo;
        private _messageErreur;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, contexteGgoStockageService: Services.ContexteGgoStockageService, compositionOffreService: Services.CompositionOffreService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, catalogueService: Services.ICatalogueService, tarificationOffrePrelevementService: Services.ITarificationOffrePrelevementService, tiersService: Services.TiersService, signatairesService: Services.SignatairesService, promotionSystematiqueService: Services.IPromotionSystematiqueService, tarificationOffrePromotionService: Services.ITarificationOffrePromotionService, offreDonneesService: Services.OffreDonneesService);
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
        /**
         * Envoie au dossier de vente les données de tarification à sauvegarder
         */
        getDonneesPourDossierDeVente(): DonneesTarificationASauvegarder;
        miseAJourFacturation(): ng.IPromise<any>;
        private getTypeMotifTarificationForce(codePromotion);
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

declare module GestionGeneriqueOffres.Services {
    interface ITraitementsPostContractualisationService {
        /**
         * Traitement des données reçues de la SPA contractualisation via le contexte processus (IdIDN...)
         * @param valeurEntreeLisa la valeur d'entrée de la contract dans GGO
         * @returns void
         */
        retourContractualisation(valeurEntreeLisa: number): void;
        /**
         * Mise à jour de la synthèse NSDK
         * @param valeurEntreeLisa la valeur d'entrée de la contract dans GGO
         * @returns void
         */
        majSyntheseNSDK(valeurEntreeLisa: number): void;
    }
    class TraitementsPostContractualisationService implements ITraitementsPostContractualisationService {
        private constantes;
        private $q;
        private serviceAgentExtended;
        static traitementsPostContractualisationServiceId: string;
        static $inject: string[];
        retourContractualisation(valeurEntreeLisa: number): ng.IPromise<any[]>;
        majSyntheseNSDK(valeurEntreeLisa: number): void;
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

declare module GestionGeneriqueOffres.Constantes {
    /**
     * Cette classe permettant de présenter les contstantes utilisées pour consommer la ressource contractualisationActe
     * @author S0076222
     */
    class ContractualisationActeConstants {
        static RESSOURCE_REST_URL: string;
    }
    class ModeContractualisation {
        static FAFE: string;
        static FAFP: string;
        static VADE: string;
        static VADP: string;
        static FFPE: string;
        static AUCUN: string;
    }
    class CodeCanalVente {
        static FF: string;
        static TL: string;
    }
    class ContractualisationMessageErreur {
        static PB_GET_CONTRACTUALISATION_ACTE_FROM_CONTEXT: string;
        static PB_GET_ACTE_REPRISE_FROM_CONTEXT: string;
        static PB_ADD_CONTRACTUALISATION_ACTE_TO_CONTEXT: string;
        static PB_CONTEXT: string;
        static CODE_ACTE_GESTION_UNDEFINED: string;
        static ID_IDN_UNDEFINED: string;
        static ERREUR_TECHNIQUE: string;
        static CODE_CANAL_UNDEFINED: string;
        static CODE_ENTITE_UNDEFINED: string;
        static INDICATEUR_PAPIER_UNDEFINED: string;
        static CODE_ETABLISSEMENT_FINANACIER_UNDEFINED: string;
        static ACTE_GESTION_UNDEFINED: string;
        static NOMBRE_SIGNATAIRES_ACTE_VIDE: string;
        static PB_CANAL_NUM: string;
        static PB_CONTEXT_ETAPE_ROUTEUR: string;
        static PB_DOSSIER_NUMERIQUE: string;
        static PB_CONTEXT_VALEUR_ENTREE_1: string;
        static PB_CONTEXT_VALEUR_ENTREE_2: string;
        static PB_CONTEXT_VALEUR_ENTREE_3: string;
        static PB_CONTEXT_AUTHENTIFICATION_INFO: string;
        static PB_CONTEXT_VALEUR_ENTREE: string;
        static PB_HUBMAIL_ENTREE: string;
        messageErreur: string;
        private messageComplementaire;
        private action;
        private erreurMyWay;
        private classeTypeScript;
        /**
         * @constructor
         */
        constructor(messageErreur: string, action: string, classe?: string, erreurMyWay?: MyWay.Services.Erreur, messageComplementaire?: string);
    }
    /**
     * Indicateurs de mise à jour du dossier de vente. Indique ce qui doit être mis à jour
     */
    class IndicateursDeMiseAJourEPI {
        indicMajCommentaire: boolean;
        indicMajPersonne: boolean;
        indicMajPartenaire: boolean;
        indicMajCompositionDetail: boolean;
        indicMajContractSignature: boolean;
        codeRetourAppliExterne: "OK";
        valeurReponseAppliExterne: "";
        indicateurForcageVPC: "N";
        indicateurEnvoiMail: "";
        modeEnvoiDocumentPapier: "M";
        indicateurImpressionEffectuee: "O";
    }
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
    class CodeActionPossible {
        static ENREGISTRER: string;
        static VALIDER_PERSO: string;
        static CHOIX_NOUVEAU_CANAL: string;
        static CONTINUER_MEME_CANAL: string;
        static INIT: string;
        static BE12: string;
    }
    class ClesContexte {
        /**
         * Code de l'opération fonctionnelle en cours de traitement. Positionné en cas de débranchement nécessaire durant l'exécution de l'opération fonctionnelle.
         */
        static OPERATION_FONCTIONNELLE_VAD: string;
        /**
         * Objet contractualisationActe
         */
        static CONTRACTUALISATION_ACTE: string;
        /**
         * tableau des personnes liées du dossier de vente
         */
        static TABLEAU_PERSONNES_LIEES: string;
        /**
         * ?
         */
        static IDNT_PJ: string;
        /**
         * Objet permettant de gérer les débranchements vers les producteurs (Izivente, Impulse, Domilis, ...)
         */
        static PANIER_PRODUCTEUR: string;
        /**
         * Code positionné par la SPA Editique. En VAD, permet de savoir si la SPA éditique a correctement fonctionné ou pas.
         */
        static CODE_RETOUR_EDITIQUE_GGO: string;
        /**
         * Permet de remettre à jour la synthèse NSDK
         */
        static MAJ_SYNTHESE_NSDK: string;
        /**
         * Paramètre "mode d'appel" de la SPA de contractualisation
         */
        static CONTRACTUALISATION_MODE: string;
        /**
         * Identifiant personne. Utilisé en conjonction avec MAJ_SYNTHESE_NSDK
         */
        static IDENTIFIANT_PERSONNE: string;
        /**
         * Contexte IZIVENTE
         */
        static CONTEXTE_IZIVENTE: string;
        /**
         * Contexte éditique
         */
        static CONTEXTE_GGO_EDITIQUE: string;
        /**
         * Identifiant IDN, type : string, exemple : « 175150076222170302154320143794 ».
         */
        static ID_IDN: string;
        /**
         * Identifiant Matériel (tablette de signature), type : string, exemple « w10 ». Non utilisé.
         */
        static ID_MAT: string;
        /**
         * ModeEnvoi récupéré en sortie de IDN impression, exemple « H (Impression Hubmail),  M (Impression par conseiller) ».
         */
        static MODE_ENVOI: string;
        /**
         * Indique si une remise papier a été effectué après la SAG (une copie papier des documents signés électroniquement a été remise au client. Type boolean
         */
        static REMISE_PAPIER: string;
        /**
         * Tableau identifiant personne/email qui ont servi à envoyer le mail SED (ou SAG si envoi d’une copie des docs signés)
         */
        static ADRESSE_MAIL: string;
        /**
         * Identifiant de la transaction dans l'infrastructure de confiance groupe. Type string
         */
        static ID_TRANSACTION_ICG: string;
        /**
         * Mode Signature (E : électronique , P : papier), type : string
         */
        static MODE_SIGNATURE: string;
        /**
         * (booléen) indique si une impression a été réalisée par le conseiller
         */
        static INDICATEUR_IMPRESSION: string;
        /**
         * indicateur pour déclencher l’appel à l’IHM d’acquisition Classeur client, sur le bouton fin client (Pas d’utilisation par GGO, donnée
         * transmise à la synthèse NSDK).
         */
        static APPEL_IHM_ACQ_CLACLI: string;
        /**
         * Indicateur pour savoir si le mail SED est parti ou bien si une copie des docs signés électroniquement a été envoyée au client (SAG)
         * true = envoi mail SED ok ou envoi mail d’une copie des docs signés électroniquement en SAG ok
         * false = envoi mail non effectué
         */
        static ENVOI_MAIL: string;
        /**
         * Indicateur de fin de chargement pour les mesures (listenedContextKey)
         */
        static LISTENED_CONTEXT_KEY: string;
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
        /**
         * Timeout associé à la durée au delà de laquelle on plante en erreur à la sauvegarde du DV, durant la phase de récupération des
         * données des P/S
         */
        static TIMEOUT_RECUPERATION_DONNEES_PS: number;
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
        static DEBRANCHEMENT_SYNTHESE_NSDK_IHM_AUTHENTIFICATION: number;
        static DEBRANCHEMENT_SYNTHESE_IHM_MODE_AUTHENTIFICATION: number;
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
        static MESSAGE_CARTE_OBLIGATOIRE: string;
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
    interface IFormulaireAuthentification {
        /**
         * 'P' => Pour papier
         * 'E' => Pour Electronique
         */
        modeSignature: string;
        autresDestinataire: IAgent[];
        /**
         * Si le tableau contient 2 éléments cela signifie que l'utilisateur a choisi 'Opérant pour le compte du suivi par...'
         */
        signataireMail: IAgent[];
        listeClientsSignataires: Types.IClientSignataireAuthentification[];
        /**
         * PERSONNE MORALE =>"0"
         * PERSONNE PHYSIQUE => "1"
         * PROCURATION => "2"
         */
        typeClient: string;
    }
    class FormulaireAuthentification implements IFormulaireAuthentification {
        modeSignature: string;
        autresDestinataire: IAgent[];
        signataireMail: IAgent[];
        listeClientsSignataires: Types.IClientSignataireAuthentification[];
        typeClient: string;
        constructor();
    }
    interface IMoyenAuth {
        codeMoyAuth: number;
        libelle: string;
    }
    interface IClientSignataireAuthentification extends myway.comContract.modeles.ISignataireComplet {
        /**
         * Le moyen d'authentification choisi
         */
        moyenAuthentification?: IMoyenAuth;
        /**
         * Le n° de téléphone choisi
         */
        numeroTelephone?: string;
        /**
         * l'adresse mail choisie
         */
        email?: string;
        dataAuthentification?: IDataClientSigantaireAuth;
    }
    interface IDataClientSigantaireAuth {
        /**
         * Le moyen d'authentification choisi
         */
        listeMoyenAuthentification?: IMoyenAuth[];
        /**
         * liste des medias téléphones
         */
        listeNumeroTelephone?: string[];
        /**
         * liste des medias email
         */
        listeEmail?: string[];
    }
    interface IAgent {
        identifiantElementStructure: number;
        identifiantAgent: string;
        libelleElementStructure: string;
        adresseMail: string;
        /**
         * 'OP'  ==> Opérant
         * 'SP'  ==> Suivi Par
         */
        typeAgent: string;
    }
    class Agent implements IAgent {
        identifiantElementStructure: number;
        identifiantAgent: string;
        libelleElementStructure: string;
        adresseMail: string;
        typeAgent: string;
        constructor(caracteristiqueEds: Types.ICaracteristiqueEDS, typeAgent: string, identifiantAgent: string);
    }
    interface ISuiviPar extends IAgent {
    }
    class AgentSuiviPar extends Agent {
    }
    interface IOperant extends IAgent {
    }
    class AgentOperant extends Agent {
    }
    interface IInfoEDS {
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Ligne 2 adresse de l'élément de structure
         */
        ligne2: string;
        /**
         * Ligne 3 adresse de l'élément de structure
         */
        ligne3: string;
        /**
         * Ligne 4 adresse de l'élément de structure
         */
        ligne4: string;
        /**
         * Ligne 5 adresse de l'élément de structure
         */
        ligne5: string;
        /**
         * Ligne 6 adresse de l'élément de structure
         */
        ligne6: string;
        /**
         * Numéro téléphone de contact de l'élément de structure
         */
        numeroTelephone: string;
        /**
         * Code pays INSEE de l'élément de structure
         */
        codePays: string;
        /**
         * Date de début de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEds: string;
        /**
         * Date de fin de validité de l'élément de structure
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEds: string;
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Code établissement de l'élément de structure
         */
        codeEtablissement: string;
    }
    interface ICaracteristiqueEDS {
        infoEDS: IInfoEDS;
        infoRattachementEDS: IInfoRattachementEDS;
        infoPosteFonctionnel: IInfoPosteFonctionnel;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code qualité de l'agent affecté au poste fonctionnel
         */
        codeQualiteAgent: string;
        /**
         * Adresse messagerie de l'agent
         */
        adresseEMail: string;
    }
    interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Date de fin de validité de l'EDS de rattachement de l'EDS identifié
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDSRattachement: string;
        /**
         * Identifiant du responsable de l'EDS de rattachement de l'EDS identifié
         */
        responsableEDSRattachement: number;
    }
    interface IRechercheAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identfiantAgent: number;
    }
    interface ISituationFinanciere {
        /**
         * Détermine le montant brut de l'activité d'un professionnel sur un exercice annuel :
         * - Le chiffre d'affaires social concerne les entreprises total des ventes TTC de biens et de services
         * - Le montant du budget concerne plus particulièrement les collectivités locales : total des enveloppes de crédits permettant les dépenses de l'exercice.
         *
         * Exprimé en milliers d'euros.
         */
        montantChiffreAffaires: number;
        /**
         * Année de référence du chiffre d'affaire ou du montant du budget.
         */
        anneeChiffreAffaires: number;
        /**
         * Montant des apports (en biens ou numéraires) effectué par les actionnaires ou associés au moment de la création ou de l'augmentation
         * de capital de la société. En milliers d'euros.
         */
        montantCapitalSocial: number;
        /**
         * Montant du capital social de la personne morale exprimé en centimes d'euros.
         */
        montantCapitalSocialEnCentimes: number;
        /**
         * Correspond au volume d'affaire de l'activité de promotion immobilière. Il est stocké en centimes d'Euros, mais restitué au poste de travail en KEuros.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        montantDuCADeLaPromotionImmobiliere: number;
        /**
         * Définition : correspond à l'année de valorisation du volume d'affaire de l'activité de promotion immobilière.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        anneeDuCADeLaPromotionImmobiliere: number;
        /**
         * Cette rubrique permet au central de mettre à jour la date de traçage de la rubrique CA si le CA est saisi sur le PTU. Elle permet aussi
         * au PTU de ne pas afficher les zéros par défaut.
         *
         * Valorisation:
         * - __O__ : Rubrique CA renseignée
         * - __N__ : Rubrique CA non renseignée (zéro par défaut)
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDePresenceDuCA: string;
    }
    interface ISecteurActivite {
        /**
         * Famille de code activité exercée par le professionnel.
         *
         * Exemple:
         * - __01__ : agriculture
         * - __03__ : pêche
         * - __16__ : industrie du verre
         */
        codeDeLaFamilleAPE: string;
        /**
         * Classification des catégories juridiques des personnes selon l'INSEE. Correspond au niveau 2 de la nomenclature de l'INSEE. Correspond aux
         * deux premiers caractères du code catégorie juridique / CODACJ.
         *
         * Typologie gérée dans la table DU1F / appli GESTADM.
         *
         * Exemples:
         * - __11__ : artisan - commerçant
         * - __12__ : commercant
         * - __13__ : artisant
         * - __14__ : officier public ou ministériel
         * - __15__ : profession libéral
         * - __16__ : Exploitant agricole
         * - __19__ : autre personne physique
         */
        codeFamilleCategorieJuridique: string;
        /**
         * Détermine le statut dans une catégorie juridique donnée. Correspond à la typologie de niveau 3 de l'INSEE . Correspond aux 2 derniers
         * caractères du code catégorie juridique / CODACJ : format X4.
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * Cette rubrique permet de définir les deux derniers caractères du code APE.
         */
        deuxDernierCaracteresAPE: string;
        /**
         * Précise l'activité économique principale du professionnel. Complète le code APE.
         *
         * Exemples:
         * - Concessionnaire Renault
         * - Franchisé Rodier
         */
        activiteEconomiquePrincipale: string;
        /**
         * Libellé libre qui précise le code APE du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        activiteEconomiqueReelleDuLieu: string;
        /**
         * Détermine une famille d'activités des personnes selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaFamilleNAF: string;
        /**
         * Détermine une activité au sein d'une famille d'activités selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeNAF3DerniersCaracteres: string;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant
         * de paramétrer des      regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
    }
    interface IInformationJuridique {
        /**
         * Date à laquelle une entité professionnelle a commencé d'exister:
         * - date de début d'exploitation pour les personnes physiques
         * - date de création pour les personnes morales
         * Type date au format yyyy-MM-dd
         */
        dateDeCreation: string;
        /**
         * Date à partir de laquelle une entité professionnelle a cessé d'exister :
         * - date de fin d'exploitation pour les personnes physique
         * - date de dissolution d'une personne morale
         * Type date au format yyyy-MM-dd
         */
        dateDeCloture: string;
        /**
         * Le code situation juridique indique dans quel état juridique se trouve une entité professionnelle.
         *
         * Valorisation:
         * - __1__ : En formation
         * - __2__ : Normale
         * - __3__ : Dissoute
         * - __4__ : Sans objet (pseudo personne morale)
         * - __5__ : En cours d'immatriculation
         *
         * __Gestion des incidents__ : Pour avoir un état complet du professionnel, il faut également vérifier qu'il ne fait pas l'objet d'un
         * incident "redressement liquidation judiciaire".
         */
        codeSituation: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         *
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et les entités reconnus comme sujets de droit (ex : sociétés, associations ...)
         *
         * La personnalité juridique conditionne les droits et obligations.
         *
         * Valorisation:
         * - __1__ : Personne physique
         * - __2__ : Personne morale ou assimilée morale
         */
        indicateurPersonnePhysiqueOuMorale: string;
        /**
         * Détermine si l'entrepreneur individuel a opté pour le statut à responsabilité limitée. Se traduit par la création d'un patrimoine
         * affecté à l'activité professionnelle et séparé du patrimoine personnel.
         *
         * Valorisation:
         * - __O__ : EI
         * - __N__ : Non Concerné (cas des personnes morales)
         */
        indicateurEIRL: string;
        /**
         * Détermine la date de début de validité de l'option de statut à responsabilité limitée pour un entrepreneur individuel donné.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutDeOptionEIRL: string;
        /**
         * Détermine la date de fin de validité de l'option de statut à responsabilité limitée pour un entrepreneur individuel donné.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinDeOptionEIRL: string;
        /**
         * Détermine si l'Entrepreneur Individuel a indiqué l'option d'opposabilité de son patrimoine pour ses créances antérieures.
         * Le patrimoine exclusivement affecté à l'activité professionnelle est pris en compte, également pour les litiges antérieurs à la déclaration en EIRL.
         *
         * Valorisation:
         * - __O__ : Oui
         * - __N__ : Non
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDeOptionOpposabiliteEIRL: string;
        /**
         * Date de début d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutExploitationDuLieu: string;
        /**
         * Date de fin d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinExploitationDuLieu: string;
        /**
         * Indicateur de droit au compte
         */
        indicateurDroitAuCompte: string;
        /**
         * Référence d'identification des entités juridiques (LEI : LEGAL ENTITY IDENTIFIER) effectuant des transactions financières.
         */
        identifiantLei: string;
        /**
         * Classification de la personne selon le règlement EMIR / European Market and Infrastructure Regulation. Attribut porté par une contrepartie
         * effectuant une transaction sur le marché des dérivés
         */
        codeEmir: string;
        /**
         * Autorisation donnée par le Client pour que l'Etablissement puisse effectuer des déclarations à sa place (LEI, classification EMIR).
         * 'O' Etab autorisé à effectuer les déclarations 'N' Etab non autorisé à effectuer les déclarations
         */
        indicateurDelegationDeclaration: string;
    }
    interface IDonneeAdministrative {
        /**
         * Code positionné par traitement qui indique si les données professionnel sont à vérifier.
         *
         * Valorisation:
         * - __0__ : pas de vérification
         * - __1__ : vérification à effectuer
         */
        codeDeRafraichissement: string;
        /**
         * Date système de dernière vérification des données du professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereVerification: string;
        /**
         * Référence libre de la pièce justificative qui a servi lors de la gestion administrative du professionnel.
         *
         * Exemple:
         * - __EXEMPLAIRE DES STATUTS CERTIFIE CONFORME__
         * - __EXEMPLAIRE DU JOURNAL OFFICIEL__
         * - __EXTRAIT DE DELIBERATION SIGNE__
         */
        referenceDeLaPieceJustificative: string;
        /**
         * Code indiquant si l'entreprise est étrangère.
         *
         * Valorisation:
         * - __0__ : Oui
         * - __1__ : Non
         */
        codeIndicateurEntrepriseEtrangere: string;
        /**
         * Détermine une monnaie / devise selon la nomenclature ISO 4217 alpha.
         *
         * Exemple:
         * - __USD__ : dollar - USA
         * - __JPY__ : yen - JAPON
         * - __CNY__ : yuan - CHINE
         * - __DKK__ : couronne - DANEMARK
         */
        codeDevise: string;
        /**
         * __TODO__: Déterminer la différence entre la rubrique ECOLIDV (codeDevise) et la rubrique ECOLID9 (codeDeviseBis).
         */
        codeDeviseBis: string;
        /**
         * Détermine le niveau de relation de la personne avec l’Établissement GCE, personne connue comme :
         * - client : personne détentrice de contrat(s) de produit / service
         * - tiers : personne non _client_ en lien avec une personne _client_; concerne la sphère du Particulier ou Professionnel.
         * Ex : participant à un contrat, représentant légal
         *
         * Le prospect est enregistré comme un tiers au niveau de CODATI et est explicitement déterminé comme prospect dans CDDAPO. Le tiers
         *  requiert moins d'information que le client dans la gestion administrative.
         *
         * Caractéristique de la personne / table DU7A. Permet de déterminer la relation-type de la personne.
         *
         * connue avec L’Établissement -> voir CTDAPR en fonction de CDDAPO / code prospect.
         *
         * Valorisation:
         * - __0__ : Client
         * - __1__ : Tiers
         */
        indicateurClientOuTier: string;
        /**
         * Identifie une personne (tiers) dans BPCE. Identifiant Chrono affecté par la Direction. Risque du Groupe via le flux retour de la Base
         * Tiers Groupe (BTG). Cet identifiant correspond à l'identifiant unique de la personne pour l'ensemble du Groupe BPCE.
         *
         * Cet identifiant peut être modifié durant l'existence de la personne au sein du Systeme d'Information. En effet la BTG *
         * considère une personne active lorsque celle-ci à des engagements au sens Bâle 2.
         */
        identifiantDuTiersGCE: string;
        /**
         * Code établissement de l'entité appartenant à BPCE identifiée par la DRG comme pilote des données sur un Tiers (personne).
         */
        codeEtablissementDeLEntitePilote: string;
        /**
         * Mode d'imposition auquel est assujetti un professionnel entreprise ou entrepreneur individuel.
         *
         * Valorisation:
         * - __1__ : Forfait
         * - __2__ : Réel
         * - __3__ : Impôt sur les sociétés (IS)
         * - __4__ : Sans régime particulier
         * - __5__ : Réel simplifié
         * - __6__ : Impôt sur le revenu des personnes physiques (IRPP)
         */
        codeRegimeFiscal: string;
        /**
         * Mois d'arrêté de la déclaration risques BDF. Format SSAAMM.
         */
        moisDArreteDesRisquesBDF: string;
        /**
         * Dénomination commerciale se rapportant à un fonds de commerce exploité par une société ou assimilée. Dénomination vis à vis
         * de la clientèle. Peut correspondre à l'enseigne. Une société peut avoir un nom commercial différent pour chacun des fonds de commerce qu'elle exploite.
         *
         * Exemples:
         * - La Samaritaine
         * - But
         */
        nomCommercial: string;
        /**
         * Ordre de grandeur du nombre de salariés (en effet l'effectif peut varier en fonction de l'activité du professionnel).
         */
        nombreDeSalaries: number;
        /**
         * Jour d'arrêté du bilan d'un professionnel pour un exercice donné. Format : JJMM. utilisée en complément de l'année du bilan.
         */
        dateArreteComptable: number;
        /**
         * Date système de mise à jour d'au moins une des données professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateDeMiseAJour: string;
        /**
         * Date système d'enregistrement du professionnel.
         * Type date au format yyyy-MM-dd
         */
        dateEnregistrement: string;
        /**
         * Correspond à l'expérience du dirigeant dans l'activité de promotion immobilière.
         *
         * Valorisation:
         * - __1__ : Moins de 5 ans
         * - __2__ : 5 ans et plus
         * - _blanc_ : Inconnue
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        experienceDuDirigeantEnImmobilier: string;
        /**
         * Correspond à l'année de valorisation de l'expérience du dirigeant concernant l'activité de promotion immobilière.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        anneeDeSaisieDeExperienceDuDirigeant: string;
        /**
         * Nature de l'organisation commerciale; Caractérise l'activité professionnelle.
         *
         * Valorisation:
         * - _blanc_ : Inconnu
         * - __0__ : Non concerné
         * - __1__ : Franchisé ou Entreprise Affiliée
         * - __2__ : Franchiseur ou Tête de Réseau
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        natureDeLOrganisationCommerciale: string;
        /**
         * Détermine le profil d'un professionnel. Classification des professionnels selon la gestion des données comptables et financières.
         *
         * Valorisation:
         * - __Z1__ : 2050 PRO REEL NORMAL
         * - __Z2__ : 2033 PRO REEL SIMPLIFIE
         * - __Z3__ : 2035 PROFESSION LIBERALE
         * - __Z4__ : 2050 PME REEL NORMAL
         * - __Z5__ : AUTRE PRO REEL NORMAL
         * - __Z6__ : AUTRE PRO REEL SIMPLIFIE
         * - __Z7__ : PROFESSIONNEL AU FORFAIT
         * - __ZA__ : 2050 PROMOTEUR
         * - __ZB__ : 2050 LOTISSEUR
         * - __ZC__ : 2050 MARCHAND DE BIENS
         * - __ZD__ : 2050 INVESTISSEUR
         * - __ZE__ : 2050 PRO AUTRES SR
         * - __ZF__ : 2050 PME AUTRES SR
         * - __ZG__ : 2033 PRO AUTRES SR
         * - __ZH__ : 2035 PRO AUTRES SR
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDuProfilClient: string;
        /**
         * Résidents:
         * - Personnes physiques ayant leur principal centre d'interet en FRANCE
         * - Fonctionnaires et autres agents publics français en poste à l'etranger
         * - Personnes morales françaises ou étrangères pour leurs etablissement en FRANCE
         * La France est définie comme suit :
         * 	- France métropolitaine (avec la principaute de MONACO )
         * 	- DOM (avec Saint-Pierre et Miquelon)
         * 	- TOM (avec Mayotte)..
         *
         * Non résidents:
         * - Personnes physiques ayant leur principal centre d'interet à l'etranger
         * - Fonctionnaires et autres agents publics étrangers en poste en FRANCE
         * L'étranger est défini comme suite :
         * 	- Pays autre que la France (y compris les Etats dont dont l'Institut d'Emission est lié au Trésor Français
         * 	par un compte d'opérations).
         * - La distinction entre les deux types de non-résidents
         * 	- Non-résident zone euro : Personnes appartenant à un un Etat membre de la zone de monnaie unique (EMUM),hors-France,
         * 	- Non-résident hors zones euro : Personnes appartenant à un autre pays étranger (non-EMUM).
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeResident: string;
        /**
         * Code permettant d'identifier l'établissement qui souhaite être pilote ou qui est pilote du Tiers.
         *
         * Valorisation:
         * - __1__ : Je suis pilote, ou je souhaite être pilote
         * - __2__ : Je ne suis pas pilote, ou je ne souhaite pas être pilote
         * - __3__ : Je ne me prononce pas, je n'ai pas d'avis
         * - _blanc_ : N.C.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codePiloteDuTiers: string;
        /**
         * Détermine un type de pièce justifiant d'une activité/situation professionnelle.
         *
         * Exemples:
         * - __00__ : EXEMPLAIRE DES STATUTS CERTIFIE CONFORME
         * - __01__ : EXEMPLAIRE DU JOURNAL OFFICIEL
         * - __02__ : EXTRAIT DE DELIBERATION SIGNE
         * - __03__ : COPIE CERTIFIE CONFORME DU J.O
         * - __04__ : AGREMENT DE L'ASSOCIATION
         * - __05__ : COPIE DE L'ACTE AUTHENTIQUE OU TESTAMENT
         * - __06__ : STATUTS DE LA DELEGATION DEPARTEMENTALE
         * - __07__ : DECRET DE RECONNAISSANCE LEGALE
         * - __08__ : COPIE DES STATUTS CERTIFIEE CONFORME
         * - __09__ : COPIE DE L'EXTRAIT KBIS REG. DU COMMERCE
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaPieceJustificativeProfessionnelle: string;
        /**
         * Cette rubrique permet au central de mettre à jour la date de traçage de la rubrique nb de salariés si le nb de salariés est saisi sur
         * le PTU. Elle permet aussi au PTU de ne pas afficher les zéros par défaut.
         *
         * Valorisation:
         * - __O__ : Rubrique nb de salariés renseignée
         * - __N__ : Rubrique nb de salariés non renseignée (zéro par défaut)
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        indicateurDePresenceDuNombreDeSalarie: string;
        /**
         * Désignation longue du lieu d'activité. Elle est utilisée pour l'impression du volet un de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        designationLongueDuLieuActivite: string;
        /**
         * Libellé de désignation de l'enseigne d'un lieu d'activité d'un Professionnel. Signe/marque/appellation apposé sur un établissement
         * commercial le distinguant des autres établissements. Élément incorporel du fonds de commerce, elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         *
         * L'enseigne peut ne pas être unique mais commune, ex: Café du Commerce.
         *
         * Désignation longue qui référence le volet un et deux de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        enseigneCommercialeDuLieuActivite: string;
        /**
         * Numéro de télex du lieu activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroDeTelexDuLieuActivite: string;
        /**
         * Numéro de télécopie du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroTelecopieurDuLieuActivite: string;
    }
    interface ICotation {
        /**
         * Cote d'une entreprise établie à une date donnée. Concerne les entreprises suivies dans la base FIBEN.
         */
        cotation: string;
        /**
         * En retour des traitements FIBEN, contient la date de cotation de la Banque de France, en lien avec la cote Banque de France COMRCT.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotation: string;
        /**
         * Cotation précédemment enregistrée pour une entreprise donnée.
         */
        cotationPrecedente: string;
        /**
         * Date de cotation Fiben BDF N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotationPrecedente: string;
        /**
         * Détermine la cotation FIBEN d'un dirigeant donné pour une personne morale donnée.
         *
         * Valorisation:
         * - __000__ : Pas de réserve
         * - __040__ : Attention particulière
         * - __050__ : Réserves
         * - __060__ : Réserves sérieuses
         */
        cotationDuDirigeant: string;
        /**
         * Date à laquelle est référencée la dernière mise à jour de la cotation FIBEN du dirigeant.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCotationDuDirigeant: string;
        /**
         * La cotation FIBEN du dirigeant est attribué au dirigeant d'une personne morale ou de l'activité d'une personne physique.
         *
         * Règles de gestion et types de contrôle : La cotation du dirigeant est saisie et stockée sur l'activité. Aucune application ne
         * l'utilise. Elle est utilisée par des procédures internes caisses.
         *
         * Valorisation:
         * - __0__ : Pas de réserve
         * - __4__ : Attention particulière
         * - __5__ : Réserves
         * - __6__ : Réserves sérieuses
         */
        cotationSimplifieDuDirigeant: string;
        /**
         * Date à laquelle est référencée la dernière mise à jour de la cotation professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereMiseAJourDeLaCotation: string;
        /**
         * Cette rubrique identifie la date de dernière révision de l'activité professionnelle. Dans le cadre des interfaces ANADEFI --> SIRIS,
         * elle correspond à la date de dernière mise à jour du dossier ANADEFI, même si la cotation n'évolue pas.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereRevisionDeLaCotation: string;
        /**
         * Précise la "qualité" d'un professionnel/collectivité.
         *
         * Règles de gestion et types de contrôle : Obligation de côter tout client ouvrant un compte commercial. La cote permet d'établir les
         *  fourchettes de taux d'agios ou de frais.
         *
         * Valorisation:
         * - __A__ : Affaire excellente
         * - __B__ : Bonne affaire : rien de défavorable
         * - __C__ : Affaire de qualité moyenne : précautions à prendre
         * - __D__ : Affaire de mauvaise qualité : à surveiller
         * - _blanc_ : Client non encore coté ('*' à l'édition)
         * - __E__ : Contentieux
         */
        codeCotation: string;
    }
    interface IActiviteProfessionnelle {
        /**
         * Numéro de SIREN du professionnel enregistré dans le SI d'un Établissement du GCE.
         */
        numeroSiren: string;
        /**
         * Identifiant d'un Établissement du RCE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est
         * répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS Perso.
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Établissement du Groupe CE. Numéro chrono attribué
         * par le système. Une personne morale est enregistrée sous une seule activité : valeur 1. Une personne physique peut avoir plusieurs
         *  activités en tant que professionnel : enregistrement chrono.
         *
         * Un professionnel est référencé dans le SI d'un Établissement du Groupe CE par :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * Constitue une référence unique dans MYSYS.
         */
        numeroChrono: number;
        situationFinanciere: ISituationFinanciere;
        secteurActivite: ISecteurActivite;
        donneAdministrative: IDonneeAdministrative;
        informationJuridique: IInformationJuridique;
        cotation: ICotation;
        listeAdresse: Array<IAdresse>;
        listeEtablissement: Array<IEtablissement>;
        /**
         * RUBRIQUE MERE : IKDQST
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroComplementaireSIRET: string;
        listeImmatriculation: Array<IImmatriculation>;
        /**
         * à partir de la V17.01 seulement
         *
         * Si 'T' : mise à jour complète avec les Immatriculations
         * Si 'I' : mise à jour des Immatriculations seulement
         * Sinon mise à jour de corporateInformation sans les Immatriculations
         */
        codeMajImmatriculation: string;
    }
    interface IParametreCorporate {
        compteurEnregistrement: number;
        /**
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        referenceExterneDeAgent: number;
        /**
         * Poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         *
         * Valorisation:
         * - __T__ : Titulaire
         * - __R__ : Remplaçant
         * - __S__ : Suppléant
         * - __A__ : Affectation temporaire
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeQualiteDeAgentAffecte: string;
        /**
         * Trouver la différence entre les rubriques _ENOCEE1_ et _ENOCEE6_.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        identifiantDeElementDeStructure: number;
        /**
         * Trouver la différence entre les rubriques _ENOCEE1_ et _ENOCEE6_.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        identifiantDeElementDeStructureBis: number;
        /**
         * Indique si la personne est à l'état bloquée dans la table VAO.
         *
         * Valorisation:
         * - __N__ : Non bloqué
         * - __B__ : Bloqué
         * - __D__ : Débloqué
         */
        codeDeBlocageVAO: string;
        /**
         * La rubrique CIDCCB indique si un client bancaire existe pour une activité professionnelle.
         *
         * Valorisation:
         * - __O__ : Existe
         * - __N__ : N'existe pas
         */
        indicateurExistanceDeEntiteTitulaire: string;
    }
    interface ICorporateActiviteProfessionnelle {
        activitesProfessionnelles: Array<IActiviteProfessionnelle>;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
        parametreCorporate: IParametreCorporate;
    }
    interface IImmatriculation {
        /**
         * Identifiant d'un Etablissement du RCE. Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement bancaire
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification de l'activité professionnelle d'une personne dans le SI d'un Etablissement du Groupe CE.
         */
        numeroChronoProfesionnel: number;
        /**
         * Détermine un registre officiel en France permettant l'immatriculation de personnes ou la publication d'informations
         * 01 RCS (Registre du commerce et des sociétés) 02 RM (Répertoire des métiers) 03 MSA (Mutualité sociale agricole) 04 Publication journal
         *  officiel 05 Préfecture 06 Mairie 07 Ordre des métiers 08 Autres
         */
        codeTypeRegistre: string;
        /**
         * Numéro d'immatriculation à un registre officiel d'un professionnel.
         *
         * Ce numéro peut être notamment :
         * - un numéro RCS
         * - un numéro Registre des métiers
         * - un numéro d'inscription à la préfecture
         * - un numéro d'inscription à la MSA
         * - un ordre des métiers pour les professions libérales
         * - un numéro de publication au JO
         *
         * Le contenu de NODAIM est interprété en fonction de la valeur du code CTDARI qui lui correspond.
         */
        numeroImmatriculationRegistre: string;
        /**
         * Libellé du lieu d'inscription au registre.
         */
        lieuInscriptionRegistre: string;
        /**
         * Date à laquelle une personne est immatriculé en tant que professionnel auprès d'un organisme habilité (ex: chambre de commerce,...).
         * Type date au format yyyy-MM-dd
         */
        dateImmatriculation: string;
    }
    interface IAdresse {
        /**
         * Numéro d'identification d'une adresse en tant que localisation géographique d'une personne référencée dans Client-Tiers / appli GESTADM.
         */
        identifiantAdresse: number;
        /**
         * Indique le numéro de la voie au fichier des PTT pour les voies francaises répertoriées.
         */
        numeroDeLaVoiePTT: number;
        /**
         * RUBRIQUE MERE : CODGCP. CODIFICATION NON NORMALISEE : UTILISER CODGCP.
         */
        numeroDuCodePostalPTT: string;
        /**
         * Détermine le quartier d'une adresse.
         */
        codeDuQuartier: string;
        /**
         * Numéro de la tournée du facteur. Cette donnée pourra être utilisée à des fins de ciblage marketing de la clientèle.
         */
        numeroDeLaTourneeDuFacteur: number;
        /**
         * Numéro de téléphone associé à une adresse et concernant un particulier ou un lieu d'activité pour un professionnel.
         */
        numeroDeTelephoneAdresse: string;
        /**
         * Identifie un pays ou territoire selon la norme INSEE.
         *
         * Exemples:
         * - __99000__ : France
         * - __99132__ : Grande Bretagne
         * - __99109__ : Allemagne
         * - __99134__ : Espagne
         */
        codeDuPaysINSEE: string;
        /**
         * Identifie une commune / lieu-dit selon la nomenclature INSEE.
         *
         * Format du code INSEE des communes :
         * - numéro minéralogique du département
         * - numéro de code de la commune
         *
         * Format du code pour les lieux-dits (localités n'ayant pas le statut de commune) :
         * - numéro minéralogique du département
         * - numéro de code du lieu-dit
         */
        codeDeLaLocaliteINSEE: string;
        /**
         * Permet de savoir qui est le possesseur de l'adresse.
         *
         * Valorisation:
         * - __1__ : PERSONNE
         * - __2__ : LIEU D'ACTIVITE
         * - __3__ : ENTITE JURIDIQUE (pas géré)
         * - __4__ : ELEMENT DE STRUCTURE (pas géré)
         */
        indicateurDePossessionAdresse: string;
        /**
         * Numéro d'identification du lieu d'activité d'un professionnel dans le SI d'un Établissement du Groupe CE.
         *  Implantation d'une activité d'un professionnel. Peut correspondre à un établissement au sens INSEE.
         *
         * Numéro chrono attribué par le système. Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * - NODALS / Numéro chrono Lieu
         *
         * Constitue une référence unique dans MYSYS.
         */
        numeroChronoDuLieuActivite: number;
        /**
         * Détermine la nature/finalité d'une adresse.
         *
         * Valorisation:
         * - __1__ : Adresse légale (domicile), localisation pour un lieu d'activité
         * - __4__ : Adresse communication (correspondance)
         * - __6__ : Adresse spéciale communication
         */
        codeDuTypeAdresse: string;
        /**
         * Code validité de l'adresse. Code initialisé lors du traitement de l'adresse par le logiciel UNICONVERT.
         *
         * Valorisation:
         * - __00__ : Adresse correcte
         * - __XY__ : Adresse forcée avec X : contrôle analyse syntaxique et Y : contrôle analyse géographique (code issu d'une transposition des codes retour UNISERV).
         */
        codeDeValiditeAdresse: string;
        /**
         * Cette rubrique est initialisée lors de la saisie des adresses au PTMS. Elle indique si le téléphone de la personne est en liste rouge ou non.
         *
         * Valorisation:
         * - __0__ : Pas en liste rouge
         * - __1__ : En liste rouge
         */
        indicateurDeTelephoneSurListeRouge: string;
        /**
         * Numéro de fax du particulier ou du lieu d'activité pour un professionnel. Pour un particulier, il s'agit dans la plupart des cas, du numéro de fax du domicile.
         */
        numeroFax: string;
        /**
         * Cette rubrique indique si le client détient un téléphone. Permet d'indiquer que la rubrique numéro de téléphone de
         * l'adresse client n'est pas renseignée parce que le client n'a pas le téléphone.
         *
         * Valorisation:
         * - _blanc_ : Valeur d'initialisation
         * - __1__ : Ne détient pas de téléphone
         */
        indicateurDeDetentionDeTelephone: string;
        /**
         * Cette donnée précise à quoi correspond le téléphone NODATP.
         */
        commentaireTelephone: string;
        /**
         * Indique le numéro de la voie du fichier HEXAVIA pour les voies francaises répertoriées.
         */
        numeroDeVoieHEXAVIA: number;
        /**
         * Code postal pour la France et l'étranger :
         * - Sur 5 caractères pour la France
         * - Sur 9 caractères pour l'étranger : peut être en alphanumérique
         */
        codePostalPourFranceEtEtranger: string;
        /**
         * RUBRIQUE MERE : LIDGCM
         */
        libelleCommune: string;
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR. La ligne 2 permet d'indiquer le point de remise ou un complément
         * d'identifiaction du destinataire : N° APP ou BAL-ETAGE-COULOIR-ESC.
         *
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement
         * , de porte, de numéro de boite aux lettres, etc ...
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR. La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution)
         * : ENTREE-BATIMENT-IMMEUBLE-RESIDENCE.
         *
         * La ligne 3 correspond à tout ce qui est à l'extérieur du batiment. entrée, batiment, bloc, tour etc ...
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR. La ligne 4 permet d'identifier la voie de destination NUMERO-LIBELLE DE LA VOIE. Peut comprendre :
         * - Le numéro dans la voie, type et nom de voie
         * - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         * - Un service X
         * - Une boîte postale
         * - Un numéro de CEDEX
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR. La ligne 5 permet d'identifier la destination : LIEU DIT ou SERVICE PARTICULIER
         *  DE DISTRIBUTION. Peut comprendre :
         * - Nom d'un quartier, d'un lieu dit, d'un hameau
         * - Nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR. La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION
         * ou CODE CEDEX et LIBELLE CEDEX. Peut comprendre :
         * - Le numéro de code postal et nom de la localite
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseAFNOR: string;
        /**
         * le code iso du pays
         */
        codeISOPays: string;
        /**
         * le libelle du pays
         */
        libelleISOPays: string;
        /**
         * indicatif du téléphone :
         *  - +33 pour la france
         * - + 32 pour la belgique
         */
        indicatifTelephone: string;
        /**
         * indicatif du téléphone du fax :
         *  - +33 pour la france
         * - + 32 pour la belgique
         */
        indicatifTelephoneFax: string;
    }
    interface IEtablissement {
        /**
         * Numéro de télex du lieu activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroDeTelexDuLieuActivite: string;
        /**
         * Numéro de télécopie du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroTelecopieurDuLieuActivite: string;
        /**
         * Désignation longue du lieu d'activité. Elle est utilisée pour l'impression du volet un de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        designationLongueDuLieuActivite: string;
        /**
         * Libellé de désignation de l'enseigne d'un lieu d'activité d'un Professionnel. Signe/marque/appellation apposé sur un établissement
         * commercial le distinguant des autres établissements. Élément incorporel du fonds de commerce, elle désigne :
         * - un nom de personne
         * - un emblème
         * - une dénomination de fantaisie
         *
         * L'enseigne peut ne pas être unique mais commune, ex: Café du Commerce.
         *
         * Désignation longue qui référence le volet un et deux de l'adresse.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        enseigneCommercialeDuLieuActivite: string;
        /**
         * Date de début d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutExploitationDuLieu: string;
        /**
         * Date de fin d'exploitation du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinExploitationDuLieu: string;
        /**
         * Libellé libre qui précise le code APE du lieu d'activité.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        activiteEconomiqueReelleDuLieu: string;
        /**
         * Détermine une famille d'activités des personnes selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeDeLaFamilleNAF: string;
        /**
         * Détermine une activité au sein d'une famille d'activités selon l'INSEE.
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        codeNAF3DerniersCaracteres: string;
        /**
         * Détermine le statut du lieu d'activité d'un professionnel.
         * Permet de déterminer le siège
         *
         * Valeurs :
         *
         * - '1'        Etablissement siège
         * - '2'        Etablissement secondaire
         */
        codeStatut: string;
        /**
         * RUBRIQUE MERE : IKDQST
         *
         * __Remarque__: Ce champs est utilisé uniquement lors de la __création__ d'une activité professionnelle.
         */
        numeroComplementaireSIRET: string;
        listeAdresse: Array<IAdresse>;
        /**
         * Numéro d'identification du lieu d'activité d'un professionnel dans le SI d'un Établissement du Groupe CE. Implantation d'une
         * activité d'un professionnel. Peut correspondre à un établissement au sens INSEE.
         *
         * Numéro chrono attribué par le système. Identification du lieu :
         * - NODAPE / Numéro de personne
         * - NODAPS / Numéro chrono Prof
         * - NODALS / Numéro chrono Lieu
         *
         * Constitue une référence unique dans MYSYS.
         */
        numeroChronoDuLieuActivite: number;
        /**
         * Code associé à la branche d'activité.
         * Codification pour l'ensemble des caisses.
         * Donnée relative aux personnes morales et entrepreneurs individuels, basée sur une approche commerciale ou sectorielle, permettant de paramétrer
         * des      regroupements fonctionnels de codes NAF.
         * Format XX9999
         */
        brancheActivite: string;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur. Valeurs
         * : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) . pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères
         * du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé) . pour un segment, elle correspond
         *  aux 4 carac. codifiant le segment. le rang de la rubrique (sur 3 car.) le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues
         *  via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
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
    interface IPortefeuilleRattachement {
        /**
         * indique le type de portefeuille de suivi clientèle, à pour valeur :
         *  - H : hors portefeuille
         *  - R : portefeuille réservoir
         *  - C : portefeuille collectif
         *  - N: portefeuille nominatif
         */
        codeTypePortefeuille: string;
        /**
         * Numéro d'identification interne de l'élément de structure de type agence (type3) propriétaire du portefeuille de suivi clientèle.
         */
        identifiantElementStructurePortefeuille: number;
        /**
         * Libellé de l'élément de structure propriétaire du portefeuille de suivi de clientèle
         */
        libelleElementStructurePortefeuille: string;
        /**
         * numéro d'identification interne de l'élément de structure assurant le suivi du portefeuille clientèle, correspond à :
         *  - un poste fonctionnel pour un portefeuille nominatif affecté
         *  - (à compléter)pour les portefeuille non affecté
         */
        identifiantElementStructureSuiviPortefeuille: number;
        /**
         * Libellé de l'élément de structure assurant le suivi du portefeuille clientèle
         */
        libelleElementStructureSuiviPortefeuille: string;
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle
         */
        identifiantPortefeuille: number;
        /**
         * Indique le motif de rattachement à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
         *  - A : Autre Motif
         *  - P : Proposition de mise en portefeuille
         *  - S : changement de segmentation
         *  - D : Changement de domiciliation
         */
        codeMotifPortefeuille: string;
        /**
         * libellé du portefeuille de suivi clientèle
         */
        libellePortefeuille: string;
    }
    interface IPortefeuilleTransfert {
        /**
         * Numéro d'identification du portefeuille destnatire du transfert
         */
        identifiantPortefeuilleTransfert: number;
        /**
         * Indicateur d'envoi d'un message d'information au chef d'agence sur demande de transfert de portefeuille, prend les valeurs:
         *  - O : envoi de message
         *  - N : pas d'envoi de message
         */
        indicateurEnvoiMessage: string;
        /**
         * Indique le motif de transfert à un portefeuille de clientèle (de type réservoir uniquement), à pour valeur :
         *  - A : Autre Motif
         *  - P : Proposition de mise en portefeuille
         *  - S : changement de segmentation
         *  - D : Changement de domiciliation
         */
        codeTypeMotifTransfert: string;
        /**
         * Numéro d'identification de l'élément de structure affecté au portefeuille de transfert,
         */
        identifiantElementStructurePortefeuilleTransfert: number;
    }
    interface ITiersPortefeuille {
        portefeuilleRattachement: IPortefeuilleRattachement;
        portefeuilleTransfert: IPortefeuilleTransfert;
        /**
         * Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une relation économique correspondant à une regroupement de plusieurs tiers ayant un lien familial et/ou économique entre elles
         */
        identifiantRelationEconomique: number;
        /**
         * Numéro d'identification d'une personne référencé comme client d'un établissement CEP
         */
        identifiantTiers: number;
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

declare module GestionGeneriqueOffres.Types.DossierNumerique {
    class DossierNumeriqueFactory {
        constructor();
        createDossierNumeriqueFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, identifiantDossierVente: number, codeEtablissementFinancier: string, codeApplication: string): Myway.Ressource.DossierNumerique.IDossierNumerique;
    }
    interface IActe {
        /**
         * libellé de l'acte de gestion
         */
        libelleActe: string;
        /**
         * code de l'acte de gestion. Correspond à un identifiant du référentiel des actes (REFACTE)
         */
        codeActe: string;
        /**
         * CodeEntite
         */
        codeEntite: string;
        /**
         * Code du canal de déroulement de  l'acte
         */
        codeCanal: string;
        /**
         * Date de fin de validité de l'acte de gestion. Cette date permet de gérer la durée de vie et l'épuration du  dossier
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeActe: Date;
        /**
         * CodeMailSignataire
         */
        codeMailSignataire: string;
        /**
         * CdGuichet
         */
        codeGuichet: string;
        /**
         * TopFAFGXML
         */
        topFAFGXML: boolean;
        /**
         * identifiant externe de l'acte. Il permet d'identifier le dossier numérique
         */
        identifiantActeExterne: string;
        /**
         * identifiant de l'agence ou du point de vente où se déroule l'acte
         */
        identifiantAgence: string;
        /**
         * identifiant de l'agent associé à l'acte de gestion
         */
        identifiantAgent: string;
        /**
         * Référence du contrat associé à l'acte de gestion
         */
        referenceContrat: string;
        /**
         * référence du contrat dans le SI du producteur, dans le cas d'un acte de gestion instruit chez un producteur externe (exemple : numéro FFI chez Natixis Financement)
         */
        referenceActeProducteur: string;
        /**
         * code type action associé à la contractualisation
         */
        codeTypeActionContrat: string;
        /**
         * libellé fourni en cas d'inégibilité de l'acte à la signature électronique
         */
        libelleMotifNonEligibilite: string;
        /**
         * Numéro de l'entité titulaire concernée à l'acte
         */
        numreroEntiteTitulaire: string;
        /**
         * Code Message de Consentement pour l'acte.
         */
        codeMessageConsentement: string;
        /**
         * code indiquant si la contractualisation de l'acte force la création d'une BAL MSI pour le signataire
         */
        codeTypeActionMSI: string;
        /**
         * Code indiquant si la contractualisation de l'acte nécessite la recherche d'une Pièce justificative d'identité pour le signataire
         */
        codeTypeActionPJI: string;
        /**
         * code permettant l'émission d'un CRE suite à la contractualisation
         */
        codeTypeActionCRE: string;
        /**
         * identifiant de l'acte donné par IDN
         */
        identifiantActeIDN: string;
        /**
         * Signataires
         */
        listeSignataire: Array<ISignataire>;
        /**
         * liste des titulaires concernés par l'acte de gestion
         */
        listeTitulaire: Array<ITitulaire>;
        /**
         * ReferencesActe
         */
        listeReferenceActe: Array<IReferenceActe>;
        /**
         * OperationsFinancieres
         */
        listeOperationFinanciere: Array<IOperationFinanciere>;
        /**
         * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
         */
        suiviActe: ISuiviActe;
        /**
         * Identifiant agent conseiller
         */
        identifiantAgentConseiller: string;
        /**
         * Signature Agent Email :
         *         Operant = 0,
         *         ChargeAffaire = 1,
         *         OperantPourChargeAffaire = 2
         *         Aucun = 3
         */
        signatureAgentEmail: number;
        /**
         * Destinataire Email Conseiller :
         *         Operant = 0,
         *         ChargeAffaire = 1,
         *         OperantChargeAffaire = 2,
         *         Aucun = 3
         */
        destinataireEmailConseiller: number;
    }
    interface IReferenceActe {
        /**
         * TypeReferenceActe
         */
        typeReferenceActe: string;
        /**
         * ValReferenceActe
         */
        valReferenceActe: string;
    }
    interface ITitulaire {
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * AdrMailContr
         */
        adresseMailContr: string;
    }
    interface IFluxGCEDoc {
        /**
         * Nom du modèle permettant la génération du document (Gcedoc à ce jour)
         */
        nomModeleGcedoc: string;
        /**
         * Flux Xml Gcedoc. Ce flux, associé au modèle, permet à l'outil de générer un document.
         */
        fluxXmlGcedoc: string;
    }
    interface IFluxBinaire {
        /**
         * flux binaire d'un document (Pdf, ...).
         */
        documentElectronique: string;
    }
    interface IFluxFilenet {
        /**
         * Identifiant de l''application de référence en GED
         */
        identifiantComposantApplicatif: string;
        /**
         * identifiant du document dans la GED
         */
        identifiantGEDDocument: string;
    }
    interface IFluxGedTemporaire {
        /**
         * Identifiant de l'application de référence en GED
         */
        identifiantComposantApplicatif: string;
        /**
         * identifiant du document dans la GED temporaire
         */
        identifiantDocumentTemporaire: string;
    }
    interface IFluxDocPartageICG {
        /**
         * Reference de partage du document. Cette référence correspond à un document d'entreprise stocké dans l'ICG
         */
        referencePartage: string;
    }
    interface IFluxXHTML {
        /**
         * contenu de la représentation alternative du document. Permet lors du processus de signature client, d'afficher le document dans une page web
         */
        contenuDocumentAlternatif: string;
    }
    interface IFluxLignes {
        /**
         * Ligne1 du document alternatif
         */
        ligne1DocumentAlternatif: string;
        /**
         * Ligne2 du document alternatif
         */
        ligne2DocumentAlternatif: string;
        /**
         * Ligne3 du document alternatif
         */
        ligne3DocumentAlternatif: string;
        /**
         * Ligne4 du document alternatif
         */
        ligne4DocumentAlternatif: string;
        /**
         * Ligne 5 du document alternatif
         */
        ligne5DocumentAlternatif: string;
        /**
         * Ligne 6 du document alternatif
         */
        ligne6DocumentAlternatif: string;
        /**
         * Ligne7 du document alternatif
         */
        ligne7DocumentAlternatif: string;
        /**
         * Ligne8 du document alternatif
         */
        ligne8DocumentAlternatif: string;
        /**
         * Ligne9 du document alternatif
         */
        ligne9DocumentAlternatif: string;
        /**
         * Ligne10 du document alternatif
         */
        ligne10DocumentAlternatif: string;
    }
    interface IDocument {
        /**
         * Nom du document
         */
        nomDocument: string;
        /**
         * Identifiant du document dans le dossier IDN en cours
         */
        identifiantDocumentIDN: string;
        /**
         * référence du document chez le producteur responsable de sa production(cas d'un document fourni par un producteur externe - Natixis, IARD, ...)
         */
        referenceDocumentProducteur: string;
        /**
         * StockageDoc
         */
        donneesStockageDocument: IStockageDocument;
        /**
         * RecupDoc
         */
        donneesContenuDocument: IContenuDocument;
        /**
         * RecupDocAlternatif
         */
        donneesDocumentAlternatif: IContenuDocumentAlternatif;
        donneesComportementSignatureDocument: IComportementSignatureDocument;
    }
    interface ISignataire {
        /**
         * CdTypeSignr
         */
        codeTypeSignr: string;
        /**
         * IdntPers
         */
        idPersonne: string;
        /**
         * AdrMailContr
         */
        adresseMailContr: string;
        /**
         * IdntJustIdGed
         */
        idJustificatifIdGed: string;
        /**
         * RangSignr
         */
        rangSignr: number;
        /**
         * Le moyen authentification ICG
         */
        moyenAuthentificationICG: string;
        /**
         * Le numéro de téléphone portable du signataire
         */
        numeroTelephonePortable: string;
    }
    interface IOptionSignataire {
        /**
         * IdOptSignr
         */
        idOptSignr: string;
        /**
         * MsgOptSignr
         */
        msgOptSignr: string;
    }
    interface IContenuDocument {
        /**
         * FluxBinaire
         */
        fluxBinaire: IFluxBinaire;
        /**
         * FluxGCEDoc
         */
        fluxGCEDoc: IFluxGCEDoc;
        /**
         * FluxFilenet
         */
        fluxFilenet: IFluxFilenet;
        /**
         * FluxGedTemporaire
         */
        fluxGedTemporaire: IFluxGedTemporaire;
        /**
         * FluxDocPartageICG
         */
        fluxDocPartageICG: IFluxDocPartageICG;
    }
    interface IContenuDocumentAlternatif {
        /**
         * FluxXHTML
         */
        fluxXHTML: IFluxXHTML;
        /**
         * FluxLignes
         */
        listeFluxLignes: Array<IFluxLignes>;
    }
    interface IStockageDocument {
        /**
         * code type de fichier correspondant au docuemnt
         */
        codeTypeFichier: string;
        /**
         * code type attributaire du document. Il correspond à un code défini dans le catalogue GED. exemple 1 - contrat, 2 - personne, ....)
         */
        codeTypeAttributaire: string;
        /**
         * identifiant de l'attributaire. Correspond à un identifiant métier du type d'attributaire. Par exemple, pour un type attributaire 1 (contrat), l'identifiant correspond à la référence du contrat
         */
        identifiantAttributaire: string;
        /**
         * libellé d'intitulé de l'attributaire. Par exemple, pour un contrat, correspond à l'intitulé du contrat. Pour une personne, correspond à l'intitulé de la personne
         */
        intituleAttributaire: string;
        /**
         * identifiant de typologie du document. Ce typage correspond à une nature de document gérée par le catalogue GED. Permet de classifier le document (offre contrat, pièce justificative d'identité, avis d'imposition, ...)
         */
        identifiantNaturePieceJointe: string;
        /**
         * libellé décrivant le document.
         */
        libelleDescriptionDocument: string;
        /**
         * CodeForcAccs
         */
        codeForcageAccessibilite: number;
    }
    interface ISignatureEntite {
        /**
         * type de signataire du dossier)
         */
        codeTypeSignataire: string;
        /**
         * correspond à l'identifiant de la banque qui signe le contra
         */
        identifiantEntiteSignataire: string;
        /**
         * Numéro de la page où se situe la signature dans le document
         */
        numeroPageDocument: number;
        /**
         * coordonnée abscisse où la signature se trouve sur la page du document
         */
        numeroAbscisseSignature: number;
        /**
         * coordonnée ordonnée où la signature se trouve sur la page du document
         */
        numeroOrdonneeSignature: number;
        /**
         * hauteur de la zone de signature.
         */
        hauteurSignature: number;
        /**
         * largeur de la zone de signature
         */
        largeurSignature: number;
        /**
         * référence de l'image correspondant à la signature entité. Permet d'apposer une signature scripturale dans un document
         */
        imageSignatureEntite: string;
    }
    interface ISignatureClient {
        /**
         * CdTypeSignr
         */
        codeTypeSignr: string;
        /**
         * NumrOrdrSign
         */
        numeroOrdreSigne: number;
        /**
         * LablSign
         */
        lablSigne: string;
        /**
         * NumrPageDoc
         */
        numeroPageDoc: number;
        /**
         * NumrAbscSign
         */
        numeroAbscSigne: number;
        /**
         * NumrOrdnSign
         */
        numeroOrdnSigne: number;
        /**
         * HautSign
         */
        hautSigne: number;
        /**
         * LargSign
         */
        largSigne: number;
    }
    interface ISignataireDocument {
        /**
         * OptionsSignataire
         */
        optionsSignataire: IOptionSignataire;
        /**
         * type au sens numéro de signataire du dossier.
         * on affecte un type (1, 2,...) à un signataire (personne)
         */
        codeTypeSignataire: string;
        /**
         * Numéro permettant de gérer l'ordre d'affichage du document lors du processus de signature
         */
        numeroAffichageDocument: number;
        /**
         * indicateur permettant de gérer la signature du document par le signataire
         */
        codeIndicateurSignature: boolean;
    }
    interface IImpressionDoc {
        /**
         * nExmpImpr
         */
        exmpImpr: number;
        /**
         * nExmpImprMin
         */
        exmpImprMinimum: number;
        /**
         * nExmpImprMax
         */
        exmpImprMaximum: number;
    }
    interface IInfoDocument {
        /**
         * typologie de document utilisée pour la signature. Se réfère au paramétrage de la contractualisation dans l'application CONTELEC
         */
        codeTypeDocument: string;
        /**
         * type mim du document. Donnée caractérisant le type de fichier du document
         */
        typeMimDocument: string;
        /**
         * Label du document. Un label peut être utilisé dans le processus de signature
         */
        labelDocument: string;
        /**
         * caractérise l'usage du document lors de la contractualisation (papier ou électronique).
         * cas de figure possibles :
         * - document pour impression papier uniquement
         * - document pour signature électronique uniquement
         * - document tout mode (papier et électronique)
         */
        modeUsageDocument: string;
        /**
         * référence du contrat associé au document chez le producteur (fait le lien avec la référence fournie par le producteur responsable du document)
         */
        referenceContratProducteur: string;
        /**
         * référence du contrat associé au document chez le distributeur
         */
        referenceContratDistributeur: string;
        /**
         * libellé de description du document pour IDN (pour affichage)
         */
        libelleDescriptionDocumentIDN: string;
        /**
         * libellé de la section de regroupement dans laquelle le document sera présenté lors de l'affichage. Permet de présenter les documents par thème de regroupement
         */
        libelleSectionRegroupement: string;
        /**
         * la ressource documentparametre.documentEntreprise renvoi un objet ResponseDocumentEntreprise avec une donnée url à sauvegarder dans urlDocument et à envoyer à IDN
         */
        urlDocument: string;
    }
    interface IOperationFinanciere {
        /**
         * LiblClientOpe
         */
        libelleClientOpe: string;
        /**
         * LiblCompteOpe
         */
        libelleCompteOpe: string;
        /**
         * DtOpe
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dtOpe: Date;
        /**
         * MontantOpe
         */
        montantOpe: number;
        /**
         * NatureOpe
         */
        natureOpe: string;
        /**
         * IdntPers
         */
        idPersonne: string;
    }
    interface IDossierNumerique {
        /**
         * Acte
         */
        acte: IActe;
        /**
         * code application à l'origine du dossier
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocument: Array<IDocument>;
    }
    class DossierNumerique implements IDossierNumerique {
        /**
         * Acte
         */
        acte: IActe;
        /**
         * code application à l'origine du dossier
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocument: Array<IDocument>;
    }
    interface IComportementSignatureDocument {
        descriptionDocument: IInfoDocument;
        /**
         * caractéristique d'impression document
         */
        impressionDocument: IImpressionDoc;
        listeSignataireDocument: Array<ISignataireDocument>;
        listeSignatureClient: Array<ISignatureClient>;
        listeSignatureEntite: Array<ISignatureEntite>;
    }
    interface ISuiviActe {
        /**
         * code de l'état de l'acte associé au dossier. Permet de connaître notamment l'état de contractualisation
         */
        codeEtatActe: string;
        /**
         * Identifiant de la transaction ICG de signature de l'acte en cas de signature électronique
         */
        identifiantTransactionICG: string;
        /**
         * code indiquant le mode de signature de l'acte (Papier, Electronique)
         */
        codeModeContractualisation: string;
        /**
         * Date à laquelle l'acte a été signé
         */
        dateContractualisation: string;
    }
    interface IAnnulationDossier {
        /**
         * IdntActeIdn
         */
        idActeIdn: string;
        /**
         * CodeAppli
         */
        codeApplication: string;
        /**
         * CdnEtabFinn
         */
        codeEtablissement: string;
    }
    interface IReponseAnnulationDossier {
        /**
         * IdntActeIdn
         */
        idActeIdn: string;
        /**
         * CodeRetour
         */
        codeRetour: string;
        /**
         * LblRetour
         */
        libelleRetour: string;
    }
    interface ITerminerActeVadInput {
        /**
         * Code etablissement
         */
        codeEtablissement: string;
        /**
         * Identifiant de l'acte IDN
         */
        idActeIdn: string;
        /**
         * Code Application. Exemple : CONTELEC, MYWAY ...
         */
        codeApplication: string;
        /**
         * Documents
         */
        listeDocuments: Array<IDocumentActeVad>;
    }
    interface ITerminerActeVadOutput {
        /**
         * Identifiant IDN de l'acte
         */
        idActeIdn: string;
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Libelle retour
         */
        libelleRetour: string;
    }
    interface IDocumentActeVad {
        /**
         * Identifiant IDN du document
         */
        idDocumentIdn: string;
        /**
         * Code type attributaire du document
         */
        codeTypeAttributaire: string;
        /**
         * Identifiant attributaire du document
         */
        idAttributaire: string;
        /**
         * Intitule attributaire du document
         */
        intituleAttributaire: string;
    }
    interface IRspnWebService {
        /**
         * CorrelationId
         */
        correlationId: string;
    }
    interface IQstnBasculerActeContractPapier {
        /**
         * Identifiant acte IDN
         */
        idActeIdn: string;
        /**
         * Code Application, exemple: CONTELEC, MYWAY
         */
        codeApplication: string;
        /**
         * Code Etablissement Financière
         */
        codeEtablissement: string;
    }
    interface IRspnBasculerActeContractPapier {
        /**
         * Code Retour
         */
        codeRetour: number;
        /**
         * Identifiant Acte IDN
         */
        idActeIdn: string;
        /**
         * Message Erreur Interne
         */
        messageErreurInterne: string;
        /**
         * LibelleRetour
         */
        libelleRetour: string;
    }
    interface IInitierSignatureInput {
        /**
         * Code application : Exemple : CONTELEC,MYWAY
         */
        codeApplication: string;
        /**
         * Code Mode Contractualisation
         */
        codeModeContractualisation: string;
        /**
         * Emettre Email Initial
         */
        emettreEmailInitial: boolean;
        /**
         * Code établissement financier
         */
        codeEtablissement: string;
        /**
         * Identifiant acte IDN
         */
        identifiantIDN: string;
    }
    interface IInitierSignatureOutput {
        /**
         * Code retour
         */
        codeRetour: number;
        /**
         * Identifiant de transaction Icg
         */
        idTransactionIcg: string;
        /**
         * Correlation id
         */
        correlationId: string;
        /**
         * Identifiant acte Idn
         */
        identifiantIDN: string;
        /**
         * Libellé de retour
         */
        libelleRetour: string;
    }
    class SignataireFactory {
        constructor();
        createSignataireFromSignataireActe(signataireActe: Myway.Ressource.ContractualisationActe.ISignataireActe): Myway.Ressource.DossierNumerique.ISignataire;
        createListeSignataireFromListeSignataireeActe(listeSignataireActe: Array<Myway.Ressource.ContractualisationActe.ISignataireActe>): Array<Myway.Ressource.DossierNumerique.ISignataire>;
        private getCodeTypeSignr(codeTypeSignataire);
    }
    class OperationFinanciereFactory {
        constructor();
        createOperationFinanciereFromContractualisationActe(operationFinanciere: Myway.Ressource.ContractualisationActe.IOperationFinanciere): Myway.Ressource.DossierNumerique.IOperationFinanciere;
        createListeOperationFinanciere(listeOperationFinanciere: Array<Myway.Ressource.ContractualisationActe.IOperationFinanciere>): Array<Myway.Ressource.DossierNumerique.IOperationFinanciere>;
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
    interface ICompositionPanier {
        /**
         *        Détermine une sous-famille d'actes de gestion : chaque famille d'actes de gestion est décomposée en sous-familles d'actes selon
         * le catalogue des actes de gestion. Exemples :
         *
         *  'OU' = Ouverture contrat normale
         *  'OT' = Ouverture contrat par transfert
         *  'AV' = Avenant
         *  Création ou maj : doit être renseigné si l'occurrence concerne un produit/service et codeActeGestionComposition non renseigné
         */
        codeSousFamilleActeComposition: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         * Création ou maj : doit être renseigné si l'occurrence concerne un produit/service et codeActeGestionComposition non renseigné
         */
        identifiantProduitServiceCompo: number;
        /**
         * cet indicateur est à true si ce produit est de la famille des izicarte
         */
        familleIzicarte: boolean;
        /**
         * Codipr du produit service en question
         */
        codeProduitServiceCompo: string;
    }
    interface IPieceJustif {
        /**
         * il s'agit du document nécessaire a la justification
         */
        documentJustificatif: string;
        /**
         * message à afficher pour la demande du document
         */
        messageJustificatif: string;
    }
    interface IRecherchePieceJustif {
        /**
         * code guichet du compte
         */
        codeGuichetCompte: string;
        /**
         * code Etablissement du compte
         */
        codeEtablissementCompte: string;
        /**
         * numero du compte
         */
        numeroCompte: string;
        /**
         * undefined
         */
        listePersonneComposantOffre: Array<IPersonneComposantOffre>;
        /**
         * undefined
         */
        entiteTitulaireComposantOffre: IEntiteTitulaireComposantOffre;
        /**
         * Objet MDEC fabriqué par la ressource
         */
        sections: Types.DossierDeVente.SectionMDEC[];
        /**
         * Vrai : présence de PJ dans l'objet, faux : pas de PJ
         */
        presencePJ: boolean;
    }
    interface IPersonneComposantOffre {
        /**
         * Nodape de la personne
         */
        numeroPersonne: number;
        /**
         * date de naissance de la personne
         */
        dateNaissancePersonne: Date;
        /**
         * undefined
         */
        listeCompositionPanier: Array<ICompositionPanier>;
        /**
         * undefined
         */
        listePieceJustif: Array<IPieceJustif>;
        /**
         * il s'agit du rang de la personne dans l'ET ex '01' '02' '03'
         */
        rangPersonneET: string;
        /**
         * undefined
         */
        nomPersonne: string;
        /**
         * undefined
         */
        prenomPersonne: string;
        /**
         * undefined
         */
        codeCivilitePersonne: string;
    }
    interface IEntiteTitulaireComposantOffre {
        /**
         * Nodiet de l'offre
         */
        numeroEntiteTitulaire: number;
        /**
         * undefined
         */
        listeCompositionPanier: Array<ICompositionPanier>;
        /**
         * date de creation du Client bancaire
         */
        dateCreationCB: Date;
        /**
         * undefined
         */
        listeRepresentantLegal: Array<IRepresentantLegal>;
    }
    interface IRepresentantLegal {
        /**
         * numero de la personne représentant légal
         */
        numeroPersonneRepresentant: number;
        /**
         * undefined
         */
        listePieceJustif: Array<IPieceJustif>;
        /**
         * undefined
         */
        nomRepresentantLegal: string;
        /**
         * undefined
         */
        prenomRepresentantLegal: string;
        /**
         * undefined
         */
        codeCiviliteRepresentantLegal: string;
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
        dateApplication: string;
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
        engagementClient?: IEngagementClient;
    }
    class CodePromotionSystematique {
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
        constructor(codePromotionSystematique: Types.ICodePromotionSystematique);
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
    interface IPlageGratuite {
        dateProchaineEcheance: string;
        indicateurPremiereEcheance: string;
    }
    interface IPeriodiciteOffre {
        listePeriodicite: Array<IPeriodicite>;
    }
    interface IPeriodicite {
        codePeriodicite: string;
        libellePeriodicite: string;
        periodeParDefaut: string;
        indicateurCalculProrata: string;
        periodiciteProrata: string;
        codeTypePeriodicite: string;
        codeTypeAugmentation: string;
    }
    interface IInformationDossierPrelevement {
        codeDevise: string;
        codePeriodicite: string;
        dateDerniereEcheanceEffectuee: Date;
        dateProchaineEcheance: string;
        codeBanqueComptePrelevement: string;
        codeGuichet: string;
        dateOuvertureService: Date;
        codeNatureProchaineEcheance: string;
        dateEcheanceIntercalaire: Date;
        codeProduit: string;
        datePremiereEcheance: string;
        prixMensuel: number;
        numeroComptePrelevement: string;
        libellePeriodicite: string;
        periodeParDefaut: string;
        indicateurCalculProrata: string;
        codeTypePeriodicite: string;
        codeTypeAugmentation: string;
        periodiciteProrata: string;
        indicateurPremiereEcheance: string;
        listePlageGratuite: IPlageGratuite[];
    }
    class InformationDossierPrelevement {
        private _codeDevise;
        codeDevise: string;
        private _codePeriodicite;
        codePeriodicite: string;
        private _dateDerniereEcheanceEffectuee;
        dateDerniereEcheanceEffectuee: Date;
        private _dateProchaineEcheance;
        dateProchaineEcheance: string;
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
        datePremiereEcheance: string;
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
        private _listePlageGratuite;
        listePlageGratuite: IPlageGratuite[];
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
        dateApplication: string;
        periodeValiditeNegociee: number;
        codePeriodicite: string;
        codeActionMajDb2: string;
        identifiantElementStructure: number;
        posteRattachementAgent: number;
        codeActionMajContenuOffre: string;
        referenceExterneAgent: number;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitServiceOffre: number;
        codePromotion: string;
        tauxReduction: number;
        libelleRemise: string;
        listePromotionPSAssocie: IPromotionProduitServiceAssocie[];
    }
    interface IPromotionProduitServiceAssocie {
        typeMotifTarification: string;
        codeActionMajDb2: string;
        codePromotion: string;
        tauxReduction: number;
        libelleRemise: string;
        periodeValiditeNegociee: number;
        identifiantProduitService: number;
        typeProduitServiceAssurance: string;
    }
    class TarificationOffrePromotion {
        private _typeMotifTarification;
        typeMotifTarification: string;
        private _dateApplication;
        dateApplication: string;
        private _periodeValiditeNegociee;
        periodeValiditeNegociee: number;
        private _codePeriodicite;
        codePeriodicite: string;
        private _codeActionMajDb2;
        codeActionMajDb2: string;
        private _identifiantElementStructure;
        identifiantElementStructure: number;
        private _posteRattachementAgent;
        posteRattachementAgent: number;
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
        private _listePromotionPSAssocie;
        listePromotionPSAssocie: IPromotionProduitServiceAssocie[];
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
        engagementClient?: IEngagementClient;
    }
    interface ITarificationAssurance {
        nbProduitsComplAssurance: number;
        montantRemiseAssurance: number;
        montantNonRemiseAssurance: number;
    }
    interface IEngagementClient {
        codeEtablissement: string;
        identifiantProduitService: number;
        indicateurEngagementDom: boolean;
        montantEngagementDom: number;
        montantEngagementDomiciliation?: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
    }
}

declare module GestionGeneriqueOffres.Types.DossierDeVente {
    /**
     * Décrit une opération fonctionnelle
     */
    class OperationFonctionnelle {
        /**
         * Code de l'opération fonctionnelle
         */
        codeOperationFonctionnelle: string;
        /**
         * Traitement associé à l'opération fonctionnelle. Le traitement doit renvoyer une promise sur un CompteRenduOperationFonctionnelle
         */
        fonction: (operationFonctionnelle: Types.DossierDeVente.OperationFonctionnelle) => ng.IPromise<Types.DossierDeVente.CompteRenduOperationFonctionnelle>;
        constructor(codeOperationFonctionnelle: string, fonction: (operationFonctionnelle: Types.DossierDeVente.OperationFonctionnelle) => ng.IPromise<Types.DossierDeVente.CompteRenduOperationFonctionnelle>);
    }
    /**
     * Paramétrage des opérations fonctionnelles
     * Le tableau des opérations fonctionnelles est initialisé "en dur" dans workflow-vad-service. Les traitements sont déclarés dans ce service.
     * C'est également dans ce service qu'est réalisé l'association entre le code de l'opération et le traitement.
     */
    class OperationsFonctionnelles {
        operationsFonctionnelles: OperationFonctionnelle[];
        constructor();
    }
    /**
     * Le CompteRenduOperationFonctionnelle est renvoyé par chaque fonction de traitement d'opération fonctionnelle.
     * Le compte-rendu permet de faire transiter des informations relatives au traitement de l'opération fonctionnelle vers le dossier
     * de vente. Par exemple, savoir si un traitement s'est bien déroulé, ou bien pour positionner une donnée (l'id IDN...)
     * Dans le compte rendu, la fonction de traitement va déposer des clés/valeurs dont les clés correspondent aux ptés de la query
     * du dossier de vente. Lors de la sauvegarde (dans sauvegarde-dossier-vente-service), les valeurs associées aux clés vont venir
     * surcharger la query.
     * donneesDossiervente contient des données complémentaires destinées à la sauvegarde du dossier de vente (ex personnes liées lors
     * du retour contract pour mettre à jour la liste des mails)
     */
    class CompteRenduOperationFonctionnelle {
        compteRendu: any;
        indicateurs: Constantes.IndicateursDeMiseAJourEPI;
        donneesDossierVente: any;
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

declare module GestionGeneriqueOffres.Composition {
}
