
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


declare module GestionGeneriqueOffres {
    var app: ng.IModule;
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
        raz(): void;
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
    class AuthentificationControleur {
        private $scope;
        private $rootScope;
        private contexteGgoStockageService;
        private serviceAgentExtended;
        private signatairesService;
        private compositionOffreService;
        private gestionEditiqueService;
        private tiersService;
        private actionsService;
        static $inject: string[];
        contexte: Types.ContexteGgo;
        compositionOffre: Types.CompositionOffre;
        modePapier: boolean;
        typeClient: string;
        chargementAuthentification: boolean;
        contractualisationActe: Myway.Ressource.ContractualisationActe.IEligibiliteSAGSED;
        personnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        listeSignataires: Types.Authentification.IClientSignataireAuthentification[];
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, contexteGgoStockageService: Services.ContexteGgoStockageService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, signatairesService: Services.ISignatairesService, compositionOffreService: Services.CompositionOffreService, gestionEditiqueService: Services.GestionEditiqueService, tiersService: Services.TiersService, actionsService: Services.ActionsService);
    }
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
        private serviceAgentExtended;
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
        constructor($q: ng.IQService, $rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, procurationService: Services.IProcurationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
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
    interface IDonneesEligibiliteProduits {
        actesSecondaires: string[];
        modesOperationsFinanciers: string[];
        /**
         * Le code acte de gestion du "compte support" de l'offre, càd le produit principal (le CDD pour un BL, le LVA pour une offre LVA etc)
         */
        acteGestionCompteSupport: string;
    }
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
        private liasseService;
        static gestionEditiqueServiceId: string;
        static codeModeMiseEnGestion: string;
        contractualisationActe: any;
        private _compositionOffre;
        private _numeroEntiteTitulaire;
        private _codeEtablissement;
        private _codeActionGestion;
        private _codeCanal;
        private _titulaires;
        private _donneesSignerContrat;
        private _typeProfessionnel;
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.ContexteService, contractualisationActeService: myway.comContract.Services.ContractualisationActeService, tiersService: Services.TiersService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, offreDonneesService: Services.IOffreDonneesService, signataireService: Services.SignatairesService, compositionOffreService: Services.ICompositionOffreService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, liasseService: Services.LiasseService);
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteReduit(acteSecondaire?: any): ng.IPromise<void>;
        getContractualisationActeComplet(): Myway.Ressource.ContractualisationActe.IContractualisationActe;
        /**
         * TODO
         * @param {void}
         * @return {ng.IPromise}
         */
        verifierEligibiliteComplet(donneesSignerContrat?: Types.Authentification.IFormulaireAuthentification, acteSecondaire?: any, listeLiasse?: any, listeSignataire?: myway.comContract.modeles.ISignataireComplet[]): ng.IPromise<void>;
        getDonneesEligibilite(): myway.comContract.ContractualisationActe.Modeles.IActe;
        getDonneesProduitsServices(): IDonneesEligibiliteProduits;
        private rechercheActeGestionSecondaire(descendant);
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
        private tarificationOffreService;
        private _contexteGgo;
        private _catalogue;
        private _listeProduitsServices;
        private _offreDonnees;
        private _acteDeGestion;
        private _composition;
        static miseEnGestionPreProducteurServiceId: string;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, modalService: MyWay.UI.IModalService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, donneesMiseEnGestionService: Services.DonneesMiseEnGestionService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any, contexteGgoStockageService: Services.ContexteGgoStockageService, enveloppeOffreService: Services.IEnveloppeOffreService, catalogueService: Services.ICatalogueService, offreDonneesService: Services.OffreDonneesService, actionsService: Services.ActionsService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, controlePreRequisService: Services.ControlePreRequisService, forcageProduitsService: Services.ForcageProduitsService, signataireService: Services.SignatairesService, gestionEditiqueService: Services.GestionEditiqueService, sauvegardeContexteService: Services.ISauvegardeContexteService, tarificationOffreService: GestionGeneriqueOffres.Services.ITarificationOffreService);
        mettreOffreEnGestionPreProducteur(): void;
        private controlerEtMiseEnGestion();
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
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery, sauvegardeModel?: boolean): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
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
        sendPutRequest(dossier: Types.DossierDeVente.IGestionDossierVente, query: IGestionDossierVentePutDossierVenteQuery, sauvegardeModel?: boolean): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
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
        sauvegarder(codeActionContexte: string, indicateurs: Constantes.IndicateursDeMiseAJourEPI, executer: boolean, passageContractualisation: boolean, questionDVP?: any, contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature?: string, transactionIcg?: string, compteRenduOperationFonctionnelle?: Types.DossierDeVente.CompteRenduOperationFonctionnelle, indicateurEnvoiMail?: string, indicateurExemplairePapier?: string, modeEnvoiDocumentPapier?: string, indicateurImpressionEffectuee?: string, isLiassePMNonSigne?: boolean, liasseEncours?: any, listeLiasses?: any, codeRetourAppliExterne?: string, valeurReponseAppliExterne?: string, indicateurBlocageFinalisation?: string, indicateurExecutionImmediate?: string, indicateurGestionPiece?: string): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
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
        private liasseService;
        private historiqueDossierService;
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
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, gestionDossierVenteService: Services.IGestionDossierVenteService, contexteGgoStockageService: Services.IContexteGgoStockageService, tiersService: Services.TiersService, signatairesService: Services.SignatairesService, commentaireService: Services.CommentaireService, messagesService: Services.MessagesService, contexteService: Services.ContexteService, piecesJustificativesService: Services.PiecesJustificativesService, tarificationOffreService: Services.ITarificationOffreService, repriseEditiqueService: Services.RepriseEditiqueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, offreDonneesService: Services.OffreDonneesService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, liasseService: Services.LiasseService, historiqueDossierService: Services.Rest.DossierVente.IHistoDossierVenteService);
        /**
         * Sauvegarde du dossier de vente
         */
        sauvegarder(codeActionContexte: string, indicateurs: Constantes.IndicateursDeMiseAJourEPI, executer: boolean, passageContractualisation: boolean, questionDVP?: any, contractualisationActe?: Myway.Ressource.ContractualisationActe.IContractualisationActe, modeSignature?: string, transactionIcg?: string, compteRenduOperationFonctionnelle?: Types.DossierDeVente.CompteRenduOperationFonctionnelle, indicateurEnvoiMail?: string, indicateurExemplairePapier?: string, modeEnvoiDocumentPapier?: string, indicateurImpressionEffectuee?: string, isLiassePMNonSigne?: boolean, liasseEncours?: any, listeLiasses?: any, codeRetourAppliExterne?: string, valeurReponseAppliExterne?: string, indicateurBlocageFinalisation?: string, indicateurExecutionImmediate?: string, indicateurGestionPiece?: string): ng.IPromise<Types.DossierDeVente.GestionDossierVente>;
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
        putDossierNumerique(dossiernumerique: Myway.Ressource.DossierNumerique.IDossierNumerique): ng.IPromise<Myway.Ressource.DossierNumerique.IDossierNumerique>;
        /**
         * Appel des ressources dossier de vente en POST ou PUT selon qu'on ait un n° de dossier ou pas dans le contexte. Si on en a pas
         * (mode création dossier de vente) on remet le contexte à jour avec le n° de dossier renvoyé par le central. Ainsi, les appels suivants
         * se feront en put.
         * @param {Types.DossierDeVente.GestionDossierVente} dossierVente Le dossier de vente prêt à être sauvegardé
         * @param {Services.IGestionDossierVentePutDossierVenteQuery} query La query de la ressource.
         */
        private doSauvegarde;
        private initialiserIdentifiantsOccurance;
        /**
         * Préparer le dossier de vente pour une PM
         */
        private preparerDVPM(dossierVente, liasseEncours, listeLiasses, contexteGgo);
        /**
         *  Ajoute un deuxième libellé au dossier de vente
         * @param compoDV
         * @param resume
         */
        private ajouterResumeDossierVente(compoDV, resume);
        /**
         * Préparation des données JSON data transverses à sauvegarder via appel aux services concernés
         * Si les données transverses venaient à se multiplier : déporter leur gestion dans un service spécifique.
         */
        private preparerDonneesTransverses(divers);
        private genererPromesseDV(executer, dossierVente, codeActionContexte, contexteGgo, indicateurs, indicateurEnvoiMail, indicateurExemplairePapier, modeEnvoiDocumentPapier, indicateurImpressionEffectuee, codeRetourAppliExterne, valeurReponseAppliExterne, donneesGeneriquesMisesEnForme, compteRenduOperationFonctionnelle, passageContractualisation, modeSignature, contractualisationActe, transactionIcg, isLiassePMNonSigne, questionDVP, liasseEncours, listeLiasses);
        /**
         * genere le dossier de vente avec les personnes issues des services "classiques"
         */
        private genererDossierVente;
        /**
         * génère le dossier de vente à l'aide des personnes liées récupérées depuis le contexte
         * @param personnesLiees
         */
        private genererDossierVenteViaContexte;
        private produitEstUnCompteSupportPro;
        /**
         * Si la liasse en paramètre possède un identifiant externe,
         * on cherche si un dossier de vente existe déjà pour cet id.
         * S'il existe, on le passe à abandonné
         */
        verifierExistenceDossierVente(ensembleLiasse: Types.Liasse.IDossierSignature, liasseEnCours: Types.Liasse.ILiasse): ng.IPromise<void>;
        private annulerDossier(dossier);
        private rechercherHistorique(historique, libelleAChercher);
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
        applicationAppelante?: string;
        indicateurSignaturePapier?: string;
        typeProfessionnel?: string;
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
        private controlePreRequisService;
        private messagesService;
        private erreurService;
        private activerErreurGgo;
        static sauvegardeContexteServiceId: string;
        compteSupport: any;
        listeLiasse: Types.Liasse.IDossierSignature;
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
        private _acteSecondaireAverifier;
        private indexActeSecondaireAverifier;
        private _contratEntreeCenetClefs;
        private _contratEntreeSepaMailClefs;
        private _contratEntreeConnClientPartClefs;
        private _acteDeGestion;
        private _offreDonnees;
        private isCarteHorsOffreEstPresentePourSE;
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
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteService: Services.IContexteService, tiersService: Services.ITiersService, contexteGgoStockageService: Services.IContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, compositionOffreService: Services.ICompositionOffreService, gestionEditiqueService: Services.GestionEditiqueService, catalogueService: Services.ICatalogueService, signataireService: Services.SignatairesService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, enveloppeOffreService: Services.IEnveloppeOffreService, modalService: MyWay.UI.IModalService, offreDonneesService: Services.IOffreDonneesService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, actionsService: Services.ActionsService, routageEditique: Types.RoutageEditique, $location: ng.ILocationService, gestionDossierVenteService: Services.IGestionDossierVenteService, sauvegardeDossierVenteService: Services.SauvegardeDossierVenteService, controlePreRequisService: Services.ControlePreRequisService, messagesService: Services.MessagesService, erreurService: Services.ErreurService, activerErreurGgo: any);
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
        sauvegarderContexteEditique(typeProfessionnel?: string): ng.IPromise<any>;
        private supprimerEspaces;
        private getListeProduitsServices();
        private initialiserIndicateurApplicationAppellanteGGHO(contratEntreeContract);
        private epureActesSecondairesApresMiseEnGestion(codeMiseEnGestion, etatProduit, acteGestion);
        private traitementProduitService(descendant);
        private constructionProduitService(descendant, etatDuProduit);
        constructionContexteContractualisation(refProduit?: string, typeProfessionnel?: string): Myway.Ressource.ContractualisationActe.IContractualisationActe;
        private recuperationDocumentBanqueDeFrance();
        private getDonneesAttributaire(codeType, typeProfessionnel?);
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
        private liasseService;
        private signataireService;
        private mwNotificationService;
        private composition;
        private contexte;
        static validationFormulaireServiceId: string;
        listeLiasse: Array<Types.CompositionOffreProduit>;
        listeActeGestionEligibilitePM: Array<any>;
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, compositionOffreService: Services.CompositionOffreService, actionsService: Services.ActionsService, erreurService: Services.ErreurService, signatairesService: Services.ISignatairesService, modalService: MyWay.UI.IModalService, contexteGgoStockageService: Services.IContexteGgoStockageService, tarificationOffreService: Services.ITarificationOffreService, miseEnGestionPreProducteurService: Services.MiseEnGestionPreProducteurService, sauvegardeContexteService: Services.SauvegardeContexteService, routageEditique: Types.RoutageEditique, gestionEditiqueService: Services.GestionEditiqueService, liasseService: Services.LiasseService, signataireService: Services.SignatairesService, mwNotificationService: MyWay.UI.IMwNotificationService);
        validerFormulaireBdr(produit: Types.CompositionOffreProduit): ng.IPromise<boolean>;
        private verifierEligibiliteReduit();
        private verifierEligibiliteComplet();
        private sauvegarderContexteEditique();
        private lancerSPAEditique();
        private afficherModaleReedition(estUneOffreEpargne);
        private afficherModaleOffreVide();
        /**
         * Contrôle que les assemblages obligatoires ont été souscrits
         * @param [compositionProduit] : la composition
         * @return l'assemblage obligatoire pour lequel aucun produit n'a été souscrit, null si aucun assemblage n'a été trouvé (ok)
         */
        private controlerAssemblagesObligatoires(compositionOffre);
        /**
         * Cette fonctione, qui permet de vérifier si AU MOINS UN P/S a été modifié, ajouté ou supprimé
         * retourne TRUE dans ce cas précis et FALSE si il n'y a aucune modification au niveau des P/S
         */
        private verifierProduitsServicesModifies(compositionOffre, codeSousFamilleActeDeGestion);
        /**
         * Cette fonction permet de détecter la gestion d'un service Découvert en Ouverture dans le panier
         * et retourne TRUE dans ce cas précis et FALSE si il n'y a aucun service Découvert en Ouverture dans le panier
         */
        private confirmerGestionDecouvertDansPanier(compositionOffre, codeSousFamilleActeDeGestion);
        /**
         * Validation des formulaires
         */
        validerComposition(): void;
        checkIfDateIsBetween(fromDate: string, toDate: string): boolean;
        private mettreOffreEnGestion();
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
        constructor($rootScope: ng.IRootScopeService, $q: ng.IQService, constantes: GestionGeneriqueOffres.Constantes.Definitions, progressionChargement: Types.ProgressionChargement, contexteGgoService: Services.ContexteGgoService, contexteGgoStockageService: Services.ContexteGgoStockageService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService, parametrageBlocsService: Services.IParametrageBlocsService, offreDonneesService: Services.OffreDonneesService, chargementFichiersComposantService: Services.ChargementFichiersComposantService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, tiersCorporateInformationService: Services.ITiersCorporateInformationService, procurationService: Services.IProcurationService);
        get: () => ng.IPromise<Types.DonneesInitiales>;
        private terminerTraitementEnErreur(message);
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
        private $q;
        private donneesInitiales;
        private actionsService;
        private erreurService;
        private constantes;
        private validationFormulaireService;
        private serviceAgentExtended;
        private modalService;
        private signatairesService;
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        desabonnerWorkInProgressEventDebut: () => void;
        desabonnerWorkInProgressEventFin: () => void;
        desabonnerActiverPanneauErreur: () => void;
        traitementEnCours: boolean;
        erreurChargementJs: boolean;
        afficherLesErreurs: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, erreurService: Services.ErreurService, constantes: GestionGeneriqueOffres.Constantes.Definitions, validationFormulaireService: Services.ValidationFormulaireService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, signatairesService: Services.SignatairesService);
        ajouterBoutonQuitterGgo(): void;
        afficherListeSignataires: boolean;
    }
}

declare module GestionGeneriqueOffres.Composition {
    class CompteRenduControleur {
        private $q;
        private serviceAgentExtended;
        private $timeout;
        private contexteGgoStockageService;
        private sauvegardeDossierVenteService;
        private contexteGgo;
        private _acteDeGestion;
        private listeLiasse;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService, contexteGgoStockageService: Services.ContexteGgoStockageService, sauvegardeDossierVenteService: Services.SauvegardeDossierVenteService);
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
        recupererProduitServiceEnCoursDeTraitement(): Types.CompositionOffreProduit;
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
    class PersoControleur {
        private $scope;
        private $rootScope;
        private $location;
        private $q;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private serviceAgentExtended;
        private modalService;
        private miseEnGestionBdrService;
        modeAcces: string;
        modeAffichage: string;
        contexteAppel: string;
        traitementEnCours: boolean;
        chargementPerso: boolean;
        afficherLesErreurs: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService, miseEnGestionBdrService: Services.MiseEnGestionBdrService);
    }
}

declare module GestionGeneriqueOffres.Composition {
    interface IDonneesEligibiliteProduits {
        actesSecondaires: string[];
        modesOperationsFinanciers: string[];
        /**
         * Le code acte de gestion du "compte support" de l'offre, càd le produit principal (le CDD pour un BL, le LVA pour une offre LVA etc)
         */
        acteGestionCompteSupport: string;
    }
    class RecapControleur {
        private $scope;
        private $timeout;
        private $location;
        private $anchorScroll;
        private $q;
        private donneesInitiales;
        private actionsService;
        private constantes;
        private serviceAgentExtended;
        private gestionEditiqueService;
        private modalService;
        private compositionOffreService;
        private entiteTitulaireBdrService;
        private signataireService;
        private liasseService;
        static $inject: string[];
        modeAcces: string;
        modeAffichage: string;
        traitementEnCours: boolean;
        typeProfessionnel: string;
        chargementRecap: boolean;
        private _numeroEntiteTitulaire;
        listeLiasse: Array<any>;
        private codeActeGestion;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $q: ng.IQService, donneesInitiales: Types.DonneesInitiales, actionsService: Services.ActionsService, constantes: GestionGeneriqueOffres.Constantes.Definitions, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService, modalService: MyWay.UI.IModalService, compositionOffreService: Services.CompositionOffreService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, signataireService: Services.SignatairesService, liasseService: Services.LiasseService);
        poursuivreEditique(): void;
        creerLiasse(): ng.IPromise<void>;
        testerEligibiliteOffrePrincipalePM(): ng.IPromise<void>;
        avenantSansModification(): ng.IPromise<void>;
        ajouterBoutonQuitterGgo(): void;
        /**
         * Permet de rafraîchir la synthèse NSDK avec la nouvelle offre souscrite
         */
        majSyntheseNSDK(): void;
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
    class TransitionControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private gestionEditiqueService;
        static $inject: string[];
        listeLiasse: any;
        etatChargementVerifEligibilite: boolean;
        constructor($scope: IErreurScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, gestionEditiqueService: Services.GestionEditiqueService);
    }
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
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
    class ActeFactory {
        createActeFromContractualisationActe(identifiantIDN: string, identifiantDossierVente: number): Myway.Ressource.DossierNumerique.IActe;
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
    interface ILiasseService {
        listeProduitComposition: Array<Types.CompositionOffreProduit>;
        listeLiasse: Array<Types.Liasse.ILiasse>;
        /**
         * Prépare les liasses et les ajoute dans le contexte
         * Renvoie true si le contrat a bien été modifié (Au moins un acte secondaire dans la liasse principale ou existence d'au moins une liasse supp)
         * false sinon
         * Si false, il faut demander à l'utilisateur s'il veut continuer la signature
         * @param donneesInitiales
         */
        preparerLiasseV2(donneesInitiales: Types.DonneesInitiales): ng.IPromise<boolean>;
        creerListeProduit(contexteGGO: Types.ContexteGgo, donneesInitiales?: Types.DonneesInitiales, descendantsP?: Types.CompositionOffreProduit): void;
        getDonneesEligibilite(donneesInitiales: Types.DonneesInitiales, produitService: Types.CompositionOffreProduit): myway.comContract.ContractualisationActe.Modeles.IActe;
        getDonneesProduitsServices(donneesInitiales: Types.DonneesInitiales): Composition.IDonneesEligibiliteProduits;
    }
    class ErreurModel {
        idService: string;
        message: string;
        estBloquant: boolean;
    }
    class LiasseService implements ILiasseService {
        private $q;
        private $timeout;
        private serviceAgentExtended;
        private compositionOffreService;
        private signataireService;
        private servicesAuthentification;
        private entiteTitulaireBdrService;
        private codeTypeProduitServicePrincipalOffre;
        private constantes;
        private offreDonneesService;
        private actionsService;
        private enveloppeOffreService;
        private donneesMiseEnGestionService;
        private contexteGgoStockageService;
        static liasseServiceId: string;
        _listeProduitComposition: Array<Types.CompositionOffreProduit>;
        _listeLiasse: Array<Types.Liasse.ILiasse>;
        private _compositionOffre;
        private _typeProfessionnel;
        private _numeroEntiteTitulaire;
        static URL_CLIENT: string;
        static URL_DOCUMENTPARAMETRE: string;
        static URL_RISQUESCLIENT: string;
        promises: MyWay.Services.IPromesse<any>[];
        private _offreDonnees;
        private donneesMiseEnGestion;
        codeTypeMarcheDocumentEntreprise: string;
        private isLimitSignatairesAtteint;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, compositionOffreService: Services.CompositionOffreService, signataireService: Services.SignatairesService, servicesAuthentification: GGOCommunEpi.Services.AuthentificationService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, constantes: GestionGeneriqueOffres.Constantes.Definitions, offreDonneesService: Services.IOffreDonneesService, actionsService: Services.ActionsService, enveloppeOffreService: Services.IEnveloppeOffreService, donneesMiseEnGestionService: Services.IDonneesMiseEnGestionService, contexteGgoStockageService: Services.ContexteGgoStockageService);
        getSegmentationMarche(codeEtablissement: string, idPersonne: number, indexLiasse: number): ng.IPromise<any>;
        getClient(codeEtablissement: string, idPersonne: number, typeCompositionRelation: string, indexLiasse: number): ng.IPromise<GestionGeneriqueOffres.Types.Authentification.ITiers>;
        getDocumentParametre(listeActes: Array<string>, codeCanal: string, codeModeMiseGestion: string, codeTypeMarcheDocumentEntreprise: string): ng.IPromise<GestionGeneriqueOffres.Types.Authentification.IDocumentParametre>;
        listeProduitComposition: Array<Types.CompositionOffreProduit>;
        listeLiasse: Array<Types.Liasse.ILiasse>;
        private callServiceRest(params, methode, url, idService, important, indexLiasse?);
        preparerLiasseV2(donneesInitiales: Types.DonneesInitiales): ng.IPromise<boolean>;
        /**
         * Signature nécessaire si plus d'une liasse ou si il y a des actes secondaires dans la liasse principale
         * @param liasses
         */
        private isSignatureNecessaire(liasses);
        private creerLiasseSupplementaires(listeProduitCompo, donneesInitiales);
        private creerLiasseCarte(produitCarte, donneesInitiales, index);
        private creerLiasseCenet(produitCenet, donneesInitiales, listeAdministrateursCenet, indicateurSignatureCenet, creerDossier, fermerDossier, isSouscriptionCENET);
        private creerLiassePrincipale(donneesInitiales);
        creerListeProduit(contexteGGO: Types.ContexteGgo, donneesInitiales?: Types.DonneesInitiales, descendantsP?: Types.CompositionOffreProduit): Array<Types.CompositionOffreProduit>;
        ajouterSignataire(indexLiasse: number, donneesSecurAccess?: any): myway.comContract.modeles.ISignataireComplet[];
        private creerLiasseSecuraccess(donneesSecurAccess, donneesInitiales);
        private recupererListeActeSecondaire();
        getDonneesEligibilite: (donneesInitiales: Types.DonneesInitiales, produitService: any, donneesSignerContrat?: any) => myway.comContract.ContractualisationActe.Modeles.IActe;
        getDonneesProduitsServices: (donneesInitiales: Types.DonneesInitiales) => Composition.IDonneesEligibiliteProduits;
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

declare module GestionGeneriqueOffres.Types {
    interface IAction {
        id: string;
        texte: string;
        modele: string;
        /** valeurs : "primary" | "zone" | "default" | "contextuel" */
        classeBouton?: string;
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
        private _classeBouton;
        classeBouton: string;
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

declare module GestionGeneriqueOffres.Types.DossierNumerique {
    class DossierNumeriqueFactory {
        constructor();
        createDossierNumeriqueFromContractualisationActe(contractualisationActe: Myway.Ressource.ContractualisationActe.IContractualisationActe, identifiantDossierVente: number, codeEtablissementFinancier: string, codeApplication: string): Myway.Ressource.DossierNumerique.IDossierNumerique;
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

declare module GestionGeneriqueOffres.Constantes {
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
    module CodeActionPossible {
        const ENREGISTRER: string;
        const VALIDER_PERSO: string;
        const CHOIX_NOUVEAU_CANAL: string;
        const CONTINUER_MEME_CANAL: string;
        const INIT: string;
        const BE12: string;
    }
    module PhaseMiseEnGestion {
        const PHASE_PRE_PRODUCTEUR: number;
        const PHASE_POST_PRODUCTEUR: number;
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
    module Promotions {
        const TYPE_PS_COMPLEMENTAIRE: string;
        const TYPE_PS_SOCLE: string;
    }
    module ComposantsTarification {
        const OUVERTURE: string;
        const AVENANT: string;
        const CLOTURE: string;
        const IDENTIFIANT_PRODUIT_SERVICE: number;
        const CODE_TYPE_PRODUIT_SERVICE: string;
        const OUVERTURE_LIBELLE_PRODUIT_SERVICE: string;
    }
    module Cartes {
        const CODE_TYPE_PRODUIT_SERVICE: string;
        const TYPE_MANDAT_CARTE: string;
        const MESSAGE_CARTE_OBLIGATOIRE: string;
    }
    module Contexte {
        const RETOUR_EDITIQUE: {
            OK: string;
            KO: string;
            codeErreurPasDocuments: number;
        };
        const CONTEXTE_GGO_RETOUR_EDITIQUE: string;
        const CONTEXTE_GGO_EDITIQUE: string;
        /**
         * Contexte liasses à signer pour les PM
         */
        const LISTE_LIASSE: string;
        /**
         * Contexte DONNEES_SIGNER_CONTRAT  pour les PM
         */
        const CONTEXTE_DONNEES_SIGNER_CONTRAT: string;
        /**
         * Contexte DONNEES_AUTHENTIFICATION  pour les PM
         */
        const CONTEXTE_DONNEES_AUTHENTIFICATION_PM: string;
        /**
         * Indicateur si on réedite les documents en AV
         */
        const CONTEXTE_IS_EDITIQUE_REEDITION: string;
        /**
         * Contexte mode de signature pour la gestion du découvert EPI
         */
        const MODE_SIGNATURE_DECOUVERT: string;
        /**
         * Contexte mode de signature "tout papier" (pour tous les actes de gestions à traiter)
         */
        const MODE_TOUT_PAPIER: string;
        /**
         * Contexte Type Professionnel (PM ou EI)
         */
        const TYPE_PROFESSIONNEL: string;
        /**
         * Contexte indicateur paramétrage SU1P présent pour le type de client traité (Professionnel, EI)
         */
        const SU1P_RENSEIGNEE: string;
        /**
         * Contexte indicateur éligibilité signature électronique pour type de client traité selon paramétrage SU1P
         */
        const SU1P_CAISSE_ELIGIBLE: string;
        const MONTANT_AUTORISATION_SIGNATAIRE: string;
        /**
         * Contexte indicateur précisant si la signature électronique du service CENet est bloquée via table SU1P
         */
        const BLOCAGE_CENET_SU1P: string;
    }
    module ServiceChequier {
        const CODE_TYPE_PRODUIT_SERVICE: string;
    }
    module DebranchementGgho {
        const NUMERO_PERSONNE_DETENTRICE: string;
        const REFERENCE_PRODUIT_SERVICE_CONTRAT: string;
        const CODE_TYPE_PRODUIT_SERVICE_CONTRAT: string;
        const CODE_GUICHET_CONTRAT: string;
        const CODE_ETABLISSEMENT_CONTRAT: string;
        const CODE_ACTE_GESTION: string;
        const CODE_PRODUIT_SERVICE: string;
    }
    module DossierVente {
        const RESUME_CENET: string;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    module ClesContexte {
        /**
         * Code de l'opération fonctionnelle en cours de traitement. Positionné en cas de débranchement nécessaire durant l'exécution de l'opération fonctionnelle.
         */
        const OPERATION_FONCTIONNELLE_VAD: string;
        /**
         * Objet contractualisationActe
         */
        const CONTRACTUALISATION_ACTE: string;
        /**
         * tableau des personnes liées du dossier de vente
         */
        const TABLEAU_PERSONNES_LIEES: string;
        /**
         * ?
         */
        const IDNT_PJ: string;
        /**
         * Objet permettant de gérer les débranchements vers les producteurs (Izivente, Impulse, Domilis, ...)
         */
        const PANIER_PRODUCTEUR: string;
        /**
         * Code positionné par la SPA Editique. En VAD, permet de savoir si la SPA éditique a correctement fonctionné ou pas.
         */
        const CODE_RETOUR_EDITIQUE_GGO: string;
        /**
         * Permet de remettre à jour la synthèse NSDK
         */
        const MAJ_SYNTHESE_NSDK: string;
        /**
         * Paramètre "mode d'appel" de la SPA de contractualisation
         */
        const CONTRACTUALISATION_MODE: string;
        /**
         * Identifiant personne. Utilisé en conjonction avec MAJ_SYNTHESE_NSDK
         */
        const IDENTIFIANT_PERSONNE: string;
        /**
         * Contexte IZIVENTE
         */
        const CONTEXTE_IZIVENTE: string;
        /**
         * Contexte éditique
         */
        const CONTEXTE_GGO_EDITIQUE: string;
        /**
         * Identifiant IDN, type : string, exemple : « 175150076222170302154320143794 ».
         */
        const ID_IDN: string;
        /**
         * Identifiant Matériel (tablette de signature), type : string, exemple « w10 ». Non utilisé.
         */
        const ID_MAT: string;
        /**
         * ModeEnvoi récupéré en sortie de IDN impression, exemple « H (Impression Hubmail),  M (Impression par conseiller) ».
         */
        const MODE_ENVOI: string;
        /**
         * Indique si une remise papier a été effectué après la SAG (une copie papier des documents signés électroniquement a été remise au client. Type boolean
         */
        const REMISE_PAPIER: string;
        /**
         * Tableau identifiant personne/email qui ont servi à envoyer le mail SED (ou SAG si envoi d’une copie des docs signés)
         */
        const ADRESSE_MAIL: string;
        /**
         * Identifiant de la transaction dans l'infrastructure de confiance groupe. Type string
         */
        const ID_TRANSACTION_ICG: string;
        /**
         * Mode Signature (E : électronique , P : papier), type : string
         */
        const MODE_SIGNATURE: string;
        /**
         * (booléen) indique si une impression a été réalisée par le conseiller
         */
        const INDICATEUR_IMPRESSION: string;
        /**
         * indicateur pour déclencher l’appel à l’IHM d’acquisition Classeur client, sur le bouton fin client (Pas d’utilisation par GGO, donnée
         * transmise à la synthèse NSDK).
         */
        const APPEL_IHM_ACQ_CLACLI: string;
        /**
         * Indicateur pour savoir si le mail SED est parti ou bien si une copie des docs signés électroniquement a été envoyée au client (SAG)
         * true = envoi mail SED ok ou envoi mail d’une copie des docs signés électroniquement en SAG ok
         * false = envoi mail non effectué
         */
        const ENVOI_MAIL: string;
        /**
         * Indicateur de fin de chargement pour les mesures (listenedContextKey)
         */
        const LISTENED_CONTEXT_KEY: string;
        const ADMINISTRATEURS_CENET: string;
        const CONTRAT_CENET: string;
        const INDICATEUR_SIGNATURE_CENET: string;
        const IDENTIFIANT_EXTERNE_CENET: string;
        const CREER_DOSSIER_VENTE_CENET: string;
        const FERMER_DOSSIER_VENTE_CENET: string;
        const CENET_SOUSCRIPTION: string;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    module ContractualisationActeConstants {
        const RESSOURCE_REST_URL: string;
    }
    module ModeContractualisation {
        const FAFE: string;
        const FAFP: string;
        const VADE: string;
        const VADP: string;
        const FFPE: string;
        const AUCUN: string;
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
}

declare module GestionGeneriqueOffres.Constantes {
    /**
     * Les évènement internes à GGO
     */
    module Evenements {
        /**
         * Evènement déclenché lorsque l'utilisateur clique sur une tuile du catalogue
         */
        const TUILE_CATALOGUE_CLICK: string;
        /**
         * Evènement déclenché lorsque l'utilisateur change le produit sélectionné dans un assemblage
         * dont l'IHM de gestion est externalisée dans un composant P/S ("exception carte")
         */
        const SUBSTITUTION_PRODUIT_SERVICE: string;
        /**
         * Activation du spinner
         */
        const WORK_IN_PROGRESS_DEBUT: string;
        /**
         * Désactivation du spinner
         */
        const WORK_IN_PROGRESS_FIN: string;
        /**
         * Activation/désactivation du mode debug
         */
        const MODE_DEBUG: string;
        /**
         * Activation/désactivation du mode debug
         */
        const ACTIVER_BLOQUEUR: string;
        /**
         * Notification émise lorsque le délai d'init des P/S est écoulé.
         */
        const DELAI_INIT_COMPOSANTS_ECOULE: string;
        /**
         * Notification émise en cas d'erreur fatale (écran d'erreur GGO)
         */
        const ERREUR_FATALE: string;
        /**
         * Interne Notification émise lorsqu'un produit est supprimé. Utilisé lorsque l'utilisateur
         * décide de substituer un P/S d'un assemblage par un autre, afin de pouvoir appeler le traitement de
         * suppression de l'ancien P/S qui va être remplacé par le nouveau. Comme le traitement de suppression est raccroché
         * au bouton poubelle et que celui ci n'est pas géné dans le même contrôleur, on passe par un évènement.
         */
        const SUPPRIMER_PRODUIT: string;
        /**
         * Rend visible le panneau des erreurs sur l'écran composition
         */
        const ACTIVER_PANNEAU_ERREUR: string;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    module LisaConfig {
        const codeEntree: {
            pageRecap: number;
        };
        const RAFRAICHISSEMENT_SYNTHESE_NSDK: number;
        const DEPART_CHARGEMENT_ARRIVEE_COMPO: number;
        const DEPART_COMPO_ARRIVEE_PERSO: number;
        const DEPART_PERSO_ARRIVEE_RECAP: number;
        const DEBRANCHEMENT_SPA_CONTRACTUALISATION: number;
        const RETOUR_PAGE_COMPO: number;
        const DEBRANCHEMENT_SPA_EDITIQUE_EPARGNE: number;
        const DEBRANCHEMENT_SPA_EDITIQUE_HORS_OFFRE: number;
        const DEBRANCHEMENT_SPA_EDITIQUE_BDR: number;
        const REEDITION: number;
        const CHARGEMENT_PAGE_RECAP: number;
        const DEBRANCHEMENT_IZIVENTE: number;
        const DEBRANCHEMENT_IMPULSE: number;
        const DEBRANCHEMENT_SYNTHESE_NSDK_COMPO: number;
        const DEBRANCHEMENT_SYNTHESE_NSDK_PERSO: number;
        const DEBRANCHEMENT_SYNTHESE_NSDK_RECAP: number;
        const DEBRANCHEMENT_SYNTHESE_NSDK_IHM_AUTHENTIFICATION: number;
        const DEBRANCHEMENT_SYNTHESE_IHM_MODE_AUTHENTIFICATION: number;
        const DEBRANCHEMENT_COMPO_ELGB_SIGN_PM: number;
        const DEBRANCHEMENT_ELGB_SIGN_PM_AUTHENTIFICATION: number;
        const DEBRANCHEMENT_RECAP_ELGB_SIGN_PM: number;
        const DEBRANCHEMENT_CPT_RENDU_ELGB_SIGN_PM: number;
        const QUITTER_GGO: number;
        const RETOUR_TRANS_EDITIQUE: number;
        const DEBRANCHEMENT_SEPAMAIL: number;
        const DEBRANCHEMENT_SEPAMAIL_VALEUR_ACTION: {
            OU: string;
            AV: string;
            CL: string;
        };
        const DEBRANCHEMENT_CENET: number;
        const DEBRANCHEMENT_CENET_VALEUR_ACTION: {
            CREATION: string;
            AVENANT: string;
            CLOTURE: string;
        };
        const DEBRANCHEMENT_CONN_CLIENT_PART: number;
        const DEBRANCHEMENT_GGHO: number;
        const EVENEMENT_RETOUR_IFRAME: string;
    }
}

declare module GestionGeneriqueOffres.Constantes {
    /**
     * Tous les time-out sont exprimés en ms
     */
    module TimeOuts {
        /**
         * Timeout associé à la durée maxi des contrôles de surface. Au delà : erreur
         */
        const TIMEOUT_CONTROLE_SURFACE: number;
        /**
         * Timeout associé à la durée maxi de récupération des js/css des composants P/S
         * Une fois ce délai achevé, on vérifie qu'on a bien tout reçu.
         */
        const TIMEOUT_LECTURE_FICHIERS_COMPOSANTS: number;
        /**
         * Timeout maximal autorisé pour l'enregistrement dans angular des composants P/S
         * Devrait être divisible par TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS
         */
        const TIMEOUT_MAXI_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Intervalle d'attente lorsque l'on détermine qu'un composant P/S n'est pas encore enregistré
         */
        const TIMEOUT_INTERVALLE_ENREGISTREMENT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée maxi d'initialisation du contexte (initialisation du serviceAgent). Au delà : erreur.
         */
        const TIMEOUT_INIT_SERVICE_AGENT: number;
        /**
         * Timeout associé à la durée maxi d'initialisation des P/S. Au delà : erreur.
         */
        const TIMEOUT_INIT_COMPOSANTS: number;
        /**
         * Timeout associé à la durée au delà de laquelle on fait disparaitre les indicateurs d'init des P/S
         */
        const TIMEOUT_EFFACER_INDICATEURS: number;
        /**
         * Timeout associé à la durée au delà de laquelle on plante en erreur à la sauvegarde du DV, durant la phase de récupération des
         * données des P/S
         */
        const TIMEOUT_RECUPERATION_DONNEES_PS: number;
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

declare module GestionGeneriqueOffres.Types.Cenet {
    interface IAdministrateurCenet {
        numeroPersonne: number;
        role: string;
        rang: number;
        nom: string;
        designataire: string;
    }
    interface IContratCenet {
        idGed: string;
        codeNature: string;
    }
}

declare module GestionGeneriqueOffres.Types.HistoriqueDossier {
    interface IHistoriqueDossier {
        historiqueVente: Array<IHistoriqueVente>;
        informationsOffre: Array<IInformationsOffre>;
        informationsPersonne: Array<IInformationsPersonne>;
        libellesEtatDossier: Array<ILibellesEtatDossier>;
        relationsClient: Array<IRelationsClient>;
    }
    interface IHistoriqueVente {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Numéro d'offre VMC
         */
        numeroOffre: number;
        /**
         * Code entité vente :
         *           Valeurs :
         * '1'       AGENCE
         * '2'       CRC
         * '3'       E-AGENCE
         * '4'       INTERNET
         */
        codeEntiteVente: string;
        /**
         * Code canal dossier vente
         *
         *            Valeurs :
         * 'CO'       courrier
         * 'TL'       Téléphone
         * 'IN'       Internet
         * 'FF'       face à face
         */
        codeCanal: string;
        /**
         * Code entité de vente courante
         */
        codeEntiteVenteCourante: string;
        /**
         * Code canal courant du dossier de vente
         */
        codeCanalDossierVenteCourant: string;
        /**
         * Timestamp de création du dossier de vente
         */
        timestampCreationDossierVente: string;
        /**
         * Timestamp de la dernière relance effectuée sur le dossier de vente
         */
        timestampDerniereRelance: string;
        /**
         * Code phase vente, détermine une phase dans le processus de vente
         */
        codePhaseVente: string;
        /**
         * Code étape vente, détermine l'étape du processus de vente
         */
        codeEtapeVente: string;
        /**
         * Code statut du dossier de vente
         */
        codeStatutEtape: string;
        /**
         * Détermine le mode de vente/gestion des dossiers
         * de vente
         */
        typeProcessus: string;
        /**
         * Indique si le dossier est prioritaire ou non. les
         * dossiers prioritaires sont ceux qui sont en phase de
         * simulation ou de proposition.
         */
        indicDossierVentePrioritaire: string;
        /**
         * Détermine un processus de vente dans la gestion des
         * dossiers de vente.
         * Un processus de vente est une suite ordonnée d'étapes
         * qui décrivent comment une offre doit être vendue sur
         * un canal de vente bien précis.
         */
        codeProcessus: string;
        /**
         * Date d'échéance de l'étape de vente en cours
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Code Mode de signature
         *            Valeurs:
         * 'I'        Indéterminé
         * 'P'        Papier
         * 'E'        Electronique
         * 'D'        Double clic
         */
        codeModeSignature: string;
        /**
         * Cette information indique le mode de gestion
         * réellement utilisé dans le cadre du dossier.
         *            Valeurs:
         * 'M'        Mise en gestion Manuelle
         * 'A'        Mise en gestion immédiAte sans re-saisie
         * 'I'        Indéterminé
         */
        codeModeMiseGestionEffectif: string;
        /**
         * Identifiant document numérisé établi par l'application IDN
         * Format :
         * concaténation des données suivantes :
         * -Code établissement financier 5 car ;
         * -Identifiant agence 7 car ;
         * -Identifiant agent 7 car ;
         * -Code acte de gestion 10 car ;
         * -Date du jour SSAAMMJJhhmmss.
         */
        identifiantDocumentNumerise: string;
        /**
         * Code de désignation de l'application externe. Concerne les échanges avec les producteurs
         */
        codeExterneApplication: string;
        /**
         * Référence du dossier fournie par le producteur qui gère l'offre (exemple : numéro FFI pour les crédit conso)
         */
        identifiantExterneDossierVente: string;
        /**
         * Timestamp signature dossier vente
         */
        timestampSignatureDossierVente: string;
        /**
         * Indique si le dossier a été créé par un producteur en
         * mode standard ou en mode dégradé.
         *            Valeurs:
         * 'STD'      Standard
         * 'DEG'      Dégradé
         */
        codeModeProducteur: string;
        /**
         * Indique la situation de traitement d'un document
         * (ou liasse de documents) dans IDN en lien avec
         * un dossier de vente
         *            Valeurs :
         * ' '        Pas de dépôt.
         * 'P'        Dépôt d'un document par le producteur
         * 'V'        Dépôt effectué par Vmc.
         */
        codeEtatDepotIDN: string;
        /**
         * Détermine si un processus de vente donné concerne
         * la plateforme MyWay.
         *            Valeurs :
         * 'O'        Oui - MyWay
         * 'N'        Non - Mysys (par défaut)
         */
        indicateurProcessMyway: string;
    }
    interface ILibellesEtatDossier {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Cette zone permet de stocker les informations sur
         * l'action à mener (libellé long) pour faire avancer le
         * le dossier de vente dans son processus de vente
         * lorsque le dossier est sur un statut d'étape donné.
         */
        libelleLongActionAMener: string;
        /**
         * Date et heure à laquelle une étape de vente
         * est créée
         */
        timestampDebutEtape: string;
        /**
         * Date et heure à laquelle une étape de vente
         * se termine
         */
        timestampFinEtape: string;
        /**
         * Date et heure à laquelle le dossier de vente
         * est passé à l'état 'confirmé'
         */
        timestampConfirmation: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         */
        identifiantPersonne: number;
        /**
         * Détermine une situation de gestion caractéristique du
         * dossier de vente
         *            Exemples :
         * '01'       Non encore validé
         * '02'       En attente envoi documents
         * '03'       En attente de retours
         */
        codeMomentVie: string;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourteParticulier: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement bancaire ou financier sur la plateforme
         * Mysys
         */
        numeroEntiteTitulaire: number;
        /**
         * Détermine si l'entité titulaire est privée ou
         * professionnelle.
         *            Valeurs :
         * 1          Usage privé
         * 2          Usage professionnel
         */
        typeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une
         * entité titulaire
         *            Valeurs :
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeCompoEntiteTitulaire: string;
        /**
         * Complète l'information sur le mode composition de l'entité titulaire dans le cas d'une indivision :
         *            Valeurs :
         * 1          Mode indivision successorale
         * 2          Mode indivision conventionnel avec solidarité
         * 3          Mode indivision conventionnel sans solidarité
         */
        sousModeCompoEntiteTitulaire: string;
        /**
         * Dernier code entité de vente
         */
        dernierCodeEntiteVente: string;
        /**
         * Dernier code sens de communication
         */
        dernierCodeSensCommunication: string;
        /**
         * Dernier code canal dossier de vente
         */
        dernierCodeCanalDossierVente: string;
        /**
         * Dernière date d'intervention (Timestamp)
         */
        dernierDateIntervention: string;
    }
    interface IInformationsOffre {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Détermine le type d'opération lié au dossier de vente.
         * Exemples:
         * '01'       Ouverture
         * '02'       Versement
         * '03'       Activation
         * ...
         */
        codeOpeDossierVente: string;
        /**
         * Libellé du produit/service commercial à
         * communiquer au client.
         */
        libelleProduitCommercial: string;
        /**
         * Libellé commercial personnalisé associé à l'offre de
         * vente.
         */
        libellePersonnalise: string;
        /**
         * Désignation du type d'opération dans la gestion des
         * dossiers de vente
         */
        libelleOperation: string;
        /**
         * Numéro d'identification de l'offre souscrite par
         * un client d'un Etablissement sur la plateforme
         * Mysys
         */
        numeroOffreSouscrite: number;
    }
    interface IInformationsPersonne {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Etablit le rôle de l'interlocuteur (personne de la
         * clientèle) du dossier de vente
         *            valeurs :
         * '1'        Titulaire
         * '2'        Représentant légal
         * '3'        Emprunteur
         * '4'        Co-Emprunteur
         */
        codeRoleInterlocuteur: string;
        /**
         * Cet indicateur permet d'indiquer si la personne
         * liée est signataire du Dossier de Vente
         */
        indicateurPersSignataire: string;
    }
    interface IRelationsClient {
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourteParticulier: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         */
        identifiantPersonne: number;
        /**
         * Détermine une situation de gestion caractéristique du
         * dossier de vente
         *            Exemples :
         * '01'       Non encore validé
         * '02'       En attente envoi documents
         * '03'       En attente de retours
         */
        codeMomentVie: string;
        /**
         * Permet de connaître à quel titre une personne
         * (particulier personne physique ou une personne
         * morale) est en relation avec une autre personne.
         */
        typeLienInterPersonnes: string;
        /**
         * Code qui permet de respecter la dénomination
         * de la personne suivant sa situation de famille.
         *            Valeurs :
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite: string;
        /**
         * Date naissance personne physique
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Détermine le type de personnalité juridique
         * de la personne.
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et
         *   les entités reconnus comme sujets de droit
         *   (ex : sociétés, associations ...)
         * La personnalité juridique conditionne les droits et
         * obligations.
         *
         * Attribut de la personne mémorisé dans DU7A / appli
         * GESTADM
         *
         * Valeurs :
         * "1" Personne physique
         * "2" Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Désignation de la personne morale.
         * Identique à celle de l'INSEE ou du Registre du
         * Commerce et des Sociétés (RCS).
         * Figure impérativement dans les statuts.
         * La nature et la composition de ce nom ainsi que les
         * principes le régissant varient selon que la société
         * est commerciale ou civile.
         * Désignation propre à la personne : contrôle de
         * l'unicité.
         */
        raisonSociale: string;
    }
    interface IListeDossier {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Numéro d'offre VMC
         */
        numeroOffre: number;
        /**
         * Code entité vente :
         *           Valeurs :
         * '1'       AGENCE
         * '2'       CRC
         * '3'       E-AGENCE
         * '4'       INTERNET
         */
        codeEntiteVente: string;
        /**
         * Code canal dossier vente
         *
         *            Valeurs :
         * 'CO'       courrier
         * 'TL'       Téléphone
         * 'IN'       Internet
         * 'FF'       face à face
         */
        codeCanal: string;
        /**
         * Code entité de vente courante
         */
        codeEntiteVenteCourante: string;
        /**
         * Code canal courant du dossier de vente
         */
        codeCanalDossierVenteCourant: string;
        /**
         * Timestamp de création du dossier de vente
         */
        timestampCreationDossierVente: string;
        /**
         * Code étape vente, détermine l'étape du processus de vente
         */
        codeEtapeVente: string;
        /**
         * Code statut du dossier de vente
         */
        codeStatutEtape: string;
        /**
         * Détermine le mode de vente/gestion des dossiers
         * de vente
         */
        typeProcessus: string;
        /**
         * Détermine un processus de vente dans la gestion des
         * dossiers de vente.
         * Un processus de vente est une suite ordonnée d'étapes
         * qui décrivent comment une offre doit être vendue sur
         * un canal de vente bien précis.
         */
        codeProcessus: string;
        /**
         * Date d'échéance de l'étape de vente en cours
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Détermine si un processus de vente donné concerne
         * la plateforme MyWay.
         *            Valeurs :
         * 'O'        Oui - MyWay
         * 'N'        Non - Mysys (par défaut)
         */
        indicateurProcessMyway: string;
        /**
         * Cette zone permet de stocker les informations sur
         * l'action à mener (libellé long) pour faire avancer le
         * le dossier de vente dans son processus de vente
         * lorsque le dossier est sur un statut d'étape donné.
         */
        libelleLongActionAMener: string;
        /**
         * Détermine une situation de gestion caractéristique du
         * dossier de vente
         *            Exemples :
         * '01'       Non encore validé
         * '02'       En attente envoi documents
         * '03'       En attente de retours
         */
        codeMomentVie: string;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourteParticulier: string;
        /**
         * Numéro d'identification d'un client détenteur de
         * contrat(s) de produit/service dans le SI d'un
         * Etablissement bancaire ou financier sur la plateforme
         * Mysys
         */
        numeroEntiteTitulaire: number;
        /**
         * Détermine si l'entité titulaire est privée ou
         * professionnelle.
         *            Valeurs :
         * 1          Usage privé
         * 2          Usage professionnel
         */
        typeUsageEntiteTitulaire: string;
        /**
         * Mode de relation des personnes composant une
         * entité titulaire
         *            Valeurs :
         * 1          mode simple
         * 2          mode joint entre époux
         * 3          mode joint entre tiers
         * 4          mode indivision
         */
        modeCompoEntiteTitulaire: string;
        /**
         * Complète l'information sur le mode composition de l'entité titulaire dans le cas d'une indivision :
         *            Valeurs :
         * 1          Mode indivision successorale
         * 2          Mode indivision conventionnel avec solidarité
         * 3          Mode indivision conventionnel sans solidarité
         */
        sousModeCompoEntiteTitulaire: string;
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         */
        identifiantPersonne: number;
        /**
         * Libellé du produit/service commercial à
         * communiquer au client.
         */
        libelleProduitCommercial: string;
        /**
         * Libellé commercial personnalisé associé à l'offre de
         * vente.
         */
        libellePersonnalise: string;
        /**
         * Désignation du type d'opération dans la gestion des
         * dossiers de vente
         */
        libelleOperation: string;
        /**
         * Etablit le rôle de l'interlocuteur (personne de la
         * clientèle) du dossier de vente
         *            valeurs :
         * '1'        Titulaire
         * '2'        Représentant légal
         * '3'        Emprunteur
         * '4'        Co-Emprunteur
         */
        codeRoleInterlocuteur: string;
        /**
         * Cet indicateur permet d'indiquer si la personne
         * liée est signataire du Dossier de Vente
         */
        indicateurPersSignataire: string;
        /**
         * Numéro d'identification de l'offre souscrite par
         * un client d'un Etablissement sur la plateforme
         * Mysys
         */
        numeroOffreSouscrite: number;
        /**
         * Dernier code entité de vente
         */
        dernierCodeEntiteVente: string;
        /**
         * Dernier code sens de communication
         */
        dernierCodeSensCommunication: string;
        /**
         * Dernier code canal dossier de vente
         */
        dernierCodeCanalDossierVente: string;
        /**
         * Dernière date d'intervention (Timestamp)
         */
        dernierDateIntervention: string;
        /**
         * Libellé complémentaire
         */
        libelleJSONResume: string;
        /**
         * Identifiant document numérisé établi par l'application IDN
         * Format :
         * concaténation des données suivantes :
         * -Code établissement financier 5 car ;
         * -Identifiant agence 7 car ;
         * -Identifiant agent 7 car ;
         * -Code acte de gestion 10 car ;
         * -Date du jour SSAAMMJJhhmmss.
         */
        identifiantDocumentNumerise: string;
    }
    interface IListePersonne {
        /**
         * Numéro d'identification de la personne dans le
         * SI d'un Etablissement bancaire sur la plateforme
         * Mysys
         */
        identifiantPersonne: number;
        /**
         * Dénomination banalisée de la personne :
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourteParticulier: string;
        /**
         * Permet de connaître à quel titre une personne
         * (particulier personne physique ou une personne
         * morale) est en relation avec une autre personne.
         */
        typeLienInterPersonnes: string;
        /**
         * Code qui permet de respecter la dénomination
         * de la personne suivant sa situation de famille.
         *            Valeurs :
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite: string;
        /**
         * Date naissance personne physique
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Détermine le type de personnalité juridique
         * de la personne.
         * Il existe principalement deux types de personnalité :
         * - PJ physique : concerne les individus
         * - PJ morale : concerne les groupes d'individus et
         *   les entités reconnus comme sujets de droit
         *   (ex : sociétés, associations ...)
         * La personnalité juridique conditionne les droits et
         * obligations.
         *
         * Attribut de la personne mémorisé dans DU7A / appli
         * GESTADM
         *
         * Valeurs :
         * "1" Personne physique
         * "2" Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Désignation de la personne morale.
         * Identique à celle de l'INSEE ou du Registre du
         * Commerce et des Sociétés (RCS).
         * Figure impérativement dans les statuts.
         * La nature et la composition de ce nom ainsi que les
         * principes le régissant varient selon que la société
         * est commerciale ou civile.
         * Désignation propre à la personne : contrôle de
         * l'unicité.
         */
        raisonSociale: string;
        listeDossier: Array<IListeDossier>;
    }
    interface IListeMomentDeVie {
        /**
         * Détermine une situation de gestion caractéristique du
         * dossier de vente
         *            Exemples :
         * '01'       Non encore validé
         * '02'       En attente envoi documents
         * '03'       En attente de retours
         */
        codeMomentVie: string;
        listePersonne: Array<IListePersonne>;
    }
    interface IListeHistoriqueDossier {
        listeMomentDeVie: Array<IListeMomentDeVie>;
    }
    interface ICompositionDossier {
        /**
         * Code Etab Banque Entité Juridique : Référence d'identification d'un Etablissement bancaire
         * ou financier utilisant la plateforme bancaire Mysys.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification du dossier de vente
         */
        identifiantDossierVente: number;
        /**
         * Libellé complémentaire
         */
        libelleJSONResume: string;
    }
}

declare module GestionGeneriqueOffres.Types.Liasse {
    interface IDossierSignature {
        liasses: ILiasse[];
        entiteTitulaire: IEntiteLiasse;
        numeroOffreSouscrite: number;
        codeTypeCompte: string;
        codeGuichetContrat: string;
        codeEtablissementContrat: string;
        referenceProduitServiceContrat: string;
        enveloppeOffre: IEnveloppeOffreReponse;
        titulaire: number;
        numeroDeCompte?: string;
        panier?: Types.IContextePanier;
        dateOuvertureOffre?: string;
        listeContratCarte?: Types.IContratCarte[];
        listeClients?: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
    }
    interface ILiasse {
        acte: IActeLiasse;
        listeSignataire: myway.comContract.modeles.ISignataireComplet[];
        valider: string;
        isEligibleSAGSED: string;
        active: string;
        numeroClientPorteur: number;
        isLimitSignatairesAtteint?: boolean;
        identifiantProduitService?: number;
        codeTypeProduitService?: string;
        referenceContratCarte?: string;
        identifiantProduitServiceCompo?: number;
        contexteCarte?: any;
        listeContratCarte?: any;
        liasseForcagePapier?: boolean;
        /** Si identifiantExterneDossierVente est renseigné, il faut aussi valoriser libelleResume pour permettre de retrouver le dossier de vente */
        identifiantExterneDossierVente?: string;
        libelleResume?: string;
        /** si non renseigné, il faut quand même créer le dossier pour éviter la regression */
        creerDossierVente?: boolean;
        fermerDossierVente?: boolean;
    }
    interface IActeLiasse extends myway.comContract.ContractualisationActe.Modeles.IActe {
        isCarteSecuracces?: boolean;
    }
    interface IEntiteLiasse {
        numeroEntiteTitulaire: number;
        libelleEntiteTitulaire: string;
    }
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

declare module GestionGeneriqueOffres.Composition {
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

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Objet composite constitué d'un Types.IRepriseOffre et d'un détenteur
     * Utilisé par verifierPresenceProduitServiceDansAutreOffre pour remonter en même temps le detenteur et les infos de reprises
     * car on ne peut pas se baser sur l'itération sur personnes à cause de l'asynchronisme engendré par l'appel à ressource
     */
    class RepriseEtDetenteur {
        repriseOffre: Types.IRepriseOffre;
        detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration;
        entite: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr;
        produit: Types.CatalogueNode;
        constructor();
    }
    /**
     * Model associé aux pop up d'assemblage
     */
    class ModalAssemblageModel {
        private _modeDebug;
        modeDebug: boolean;
        private _contexteAppel;
        contexteAppel: string;
        private _liste;
        liste: Types.DonneesAssemblage[];
        constructor(modeDebug: boolean, contexteAppel: string, liste: Types.DonneesAssemblage[]);
    }
    class ModalRepriseAssemblageModel {
        private _libelleProduit;
        libelleProduit: string;
        private _repriseEtDetenteur;
        repriseEtDetenteur: RepriseEtDetenteur[];
        private _optionsTableau;
        optionsTableau: MyWay.UI.ImwTableOptions;
        constructor(libelleProduit: string, repriseEtDetenteur: RepriseEtDetenteur[], optionsTableau: MyWay.UI.ImwTableOptions);
    }
    class CompositionController {
        private $scope;
        private $rootScope;
        private $q;
        private modalService;
        private constantes;
        private initialisationService;
        private compositionOffreService;
        private catalogueService;
        private tiersService;
        private entiteTitulaireBdrService;
        private parametrageBlocsService;
        private contexteGgoStockageService;
        private repriseOffreService;
        private controlePreRequisService;
        private $timeout;
        private procurationService;
        private erreurService;
        private _produitServiceEnCoursAjout;
        contexteAppel: string;
        compositionOffre: Types.CompositionOffre;
        allerAncre: (idBloc: string) => void;
        activerModeDebug: boolean;
        private contexte;
        private paramBlocs;
        private catalogue;
        private tiers;
        private entites;
        private afficherPopUp;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, modalService: MyWay.UI.IModalService, constantes: GestionGeneriqueOffres.Constantes.Definitions, initialisationService: Services.InitialisationService, compositionOffreService: Services.CompositionOffreService, catalogueService: Services.ICatalogueService, tiersService: Services.TiersService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, parametrageBlocsService: Services.IParametrageBlocsService, contexteGgoStockageService: Services.ContexteGgoStockageService, repriseOffreService: Services.IRepriseOffreService, controlePreRequisService: Services.ControlePreRequisService, $timeout: ng.ITimeoutService, procurationService: Services.IProcurationService, erreurService: Services.IErreurService);
        /**
         * Initialisation des icônes pour les produits rajoutés automatiquement au panier.
         */
        balayerNiveauPrincipalComposition(composition: Types.CompositionOffre): void;
        private balayerTousProduitsServices(compositionProduit);
        /**
         * Renvoie vrai si pour au moins une proposition / reprise, le compte produit support est renseigné
         * Permet notamment de filtrer les cartes vers insererProduitAvecCompteSupport même si le code modalité de détention
         * du produit est bien PERSONNE.
         * @param produit Le produit faisant l'objet du test
         */
        estUnProduitAvecCompteSupport(produit: Types.ProduitService): boolean;
        /**
         * Affichage des références des produits à reprendre. L'affichage n'est effectué que si l'utilisateur a un choix à faire.
         * @param {RepriseEtDetenteur} dataReprise Les données de reprise provenant de traiterReprisesPourAssemblage
         * @return {ng.IPromise<RepriseEtDetenteur>} Liste de reprises à effectuer après choix éventuel de l'utilisateur (si il a un choix à faire)
         */
        afficherReprisesPourProduitsAvecProduitSupport(produit: Types.CatalogueNode, dataReprise: RepriseEtDetenteur[]): ng.IPromise<ModalRepriseAssemblageModel>;
        /**
         * Renvoie une liste de promises sur des reprises de produits gérés en mode personne et en produit support (en particulier, des cartes)
         * Chaque promise dit s'il faut reprendre ou pas.
         * @param produit : le produit qu'on va essayer de reprendre
         * @param personne : la personne détenant ce produit
         */
        traiterReprisesPourProduitsAvecProduitSupport(produit: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.Tiers.Procuration): ng.IPromise<RepriseEtDetenteur[]>;
        /**
         * Ajout d'un produit simple au panier. Fonction appelée après la validation de la modale de sélection si celle ci est active
         * (à priori elle ne l'est pas) dans ajouterProduitSimple
         * @param [produitService] Le produit à ajouter
         * @param [result] Un tableau qui contient une liste (personnes ou entités) qui permet de savoir sur quelle personne / entité
         * rajouter le produit.
         */
        traiterProduitSimple(produitService: Types.CatalogueNode, result: Types.ResultatSelection[]): void;
        /**
         * Permet de déterminer si un P/S est en mode mandataire ou non
         * @param [produitService] Le produit à ajouter
         * @return boolean
         */
        determinerModeMandataire(produitService: Types.ProduitService): boolean;
        /**
         * Ajout d'un produit simple en passant ou pas par une popin de sélection
         * @param [produitService] Le produit à ajouter
         * @return rien
         */
        ajouterProduitSimple(produitService: Types.CatalogueNode): void;
        isAssemblageModePersonne(produitService: Types.CatalogueNode): boolean;
        traiterEntitesSelectionAssemblageInterchangeablePersonne(produit: Types.CatalogueNode, donneesSelectionAssemblage: Types.DonneesAssemblage, personne: Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.Tiers.Procuration): void;
        traiterEntitesSelectionAssemblageInterchangeable(produit: Types.CatalogueNode, donneesSelectionAssemblage: Types.DonneesAssemblage, entite: Types.InformationEntiteTitulaireBdr): void;
        traiterSelectionAssemblageInterchangeablePersonne(data: Types.DonneesAssemblage[]): void;
        traiterSelectionAssemblageInterchangeableEntite(data: Types.DonneesAssemblage[]): void;
        /**
         * Traitement d'un assemblage interchangeable composé de produits détenus uniquement en mode personne
         */
        ajouterProduitAssemblageInterchangeableModePersonne(assemblage: Types.CatalogueNode): void;
        /**
         *  Traitement d'un assemblage interchangeable composé de produits détenus dans n'importe quel mode autre que personne
         */
        ajouterProduitAssemblageInterchangeableModeAutreQuePersonne(assemblage: Types.CatalogueNode): void;
        /**
         * Regarde pour un produit donné si il existe des produits déjà existants du même assemblage et les supprime
         * si ils viennent d'être ajoutés, ou les marque pour clôture s'ils font déjà partie de l'offre
         * @param {type} compositionProduit Le produit à clôturer ou supprimer
         * @param {type} produitCatalogue Le produit dans le catalogue
         * @param {type} detenteur Le détenteur
         * @returns void
         */
        traiterProduitAssemblageCumulableDejaExistant(compositionProduit: Types.CompositionOffreProduit, produitCatalogue: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaireBdr | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.Tiers.Procuration): void;
        /**
         * Assemblage cumulable. Ajout des produits sélectionnées dans le panier et suppression du panier des produits qui ne sont pas dans la liste des
         * produits sélectionnés. Traitement de chaque entité contenant la personne.
         * Pour chaque entité, on tente d'ajouter autant de produits que possible
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage
         * @param {Types.Tiers.Personne} personne
         */
        traiterEntitesSelectionAssemblageCumulablePersonne(donneesSelectionAssemblage: Types.DonneesAssemblage, personne: Types.Tiers.Personne | Types.Tiers.Procuration, donneesAssemblageOrigineZero: Types.DonneesAssemblage): void;
        /**
         * Traitement du résultat produit par la popin de sélection d'un assemblage cumulable
         * @param {Types.DonneesAssemblage[]} data Correspond au model passé à la popin pour les assemblages en mode personne
         */
        traiterSelectionAssemblageCumulablePersonne(data: Types.DonneesAssemblage[]): void;
        traiterEntitesSelectionAssemblageCumulable(donneesSelectionAssemblage: Types.DonneesAssemblage, entite: Types.InformationEntiteTitulaireBdr): void;
        ajouterProduit(event: ng.IAngularEvent, codeProduitService: number): void;
        /**
         * Traitement du résultat produit par la popin de sélection d'un assemblage cumulable
         * @param {Types.DonneesAssemblage[]} data Correspond au model passé à la popin pour les assemblages en mode entité / compte
         */
        traiterSelectionAssemblageCumulableEntite(data: Types.DonneesAssemblage[]): void;
        /**
         * Traitement d'un assemblage cumulable composé de produits détenus uniquement en mode personne
         * @param {Types.CatalogueNode} assemblage L'assemblage à traiter
         * @returns void
         */
        ajouterProduitAssemblageCumulableModePersonne(assemblage: Types.CatalogueNode): void;
        /**
         *  Traitement d'un assemblage interchangeable composé de produits détenus dans n'importe quel mode autre que personne
         */
        ajouterProduitAssemblageCumulableModeAutreQuePersonne(assemblage: Types.CatalogueNode): void;
        ajouterProduitAssemblageInterchangeable(produitService: Types.CatalogueNode): void;
        ajouterProduitAssemblageCumulable(produitService: Types.CatalogueNode): void;
        /**
         * Fonction d'appel au service de reprise de P/S depuis une autre offre ou hors offre
         * @param produit : le produit pour lequel on souhaite faire une reprise
         * @param detenteur: le detenteur du produit
         * @param contexte: contexte GGO pour les infos d'authentification (agent etc.)
         * @entites: liste des entités de l'offre
         * @codeGuichetProduitSupport?: pour la reprise des produits avec compte support (cartes) : code guichet du produit support
         * @referenceProduitSupport?: pour la reprise des produits avec compte support (cartes) : code guichet du produit support
         * @codeTypeProduitServiceProduitSupport?: pour la reprise des produits avec compte support (cartes) : code guichet du produit support
         * @return Promise renvoyée par le service
         */
        verifierPresenceProduitServiceDansAutreOffreOuHorsOffre(produit: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, contexte: Types.ContexteGgo, entites: Types.InformationEntiteTitulaire[] | Types.InformationEntiteTitulaireBdr[], codeGuichetProduitSupport?: string, referenceProduitSupport?: string, codeTypeProduitServiceProduitSupport?: string): ng.IPromise<RepriseEtDetenteur>;
        substituerProduitService(event: ng.IAngularEvent, data: Types.DonneesSubstitutionProduitService): void;
        /**
         * Fonction d'appel au service de reprise de P/S depuis une autre offre
         * @param produit : le produit pour lequel on souhaite faire une reprise
         * @param detenteur: le detenteur du produit
         * @param contexte: contexte GGO pour les infos d'authentification (agent etc.)
         * @entites: liste des entités de l'offre
         * @return Promise renvoyée par le service
         */
        verifierPresenceProduitServiceDansAutreOffre(produit: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration, contexte: Types.ContexteGgo, entites: Types.InformationEntiteTitulaireBdr[]): ng.IPromise<RepriseEtDetenteur>;
        /**
         * Renvoie les produits qui sont dans l'assemblage mais qui n'ont pas été sélectionnés par l'utilisateur
         * @param {Types.DonneesAssemblage} donneesSelectionAssemblage Les données de l'assemblage
         * @return {Types.CleValeur[]} Les produits non sélectionnés dans l'assemblage
         */
        calculerProduitsNonSelectionnes(donneesSelectionAssemblage: Types.DonneesAssemblage): Types.CleValeur[];
        /**
         * Condition pour l'affichage de la poubelle
         * La poubelle est toujours affichée pour un produit repris, afin de permettre à l'utilisateur de choisir s'il veut le reprendre ou pas.
         * On n'affiche la poubelle que si le produit n'est pas marqué pour clôture (on ne peut pas supprimer un produit déjà supprimé)
         * On n'affiche la poubelle que pour les produits non obligatoire ou pour les produits qui ont un nb d'exemplaires mini = 0
         * qui ne sont pas dans un assemblage.
         * Si le produit est dans un assemblage qui ne contient qu'un produit avec au moins un acte de gestion, on affiche pas la poubelle
         * En avenant d'offre, si le produit est obligatoire, on ne doit pas afficher la poubelle. Sinon il faut que le code sous famille
         * acte de gestion CL soit présent pour le produit si le produit est en avenant
         * TODO : faire en sorte que ca ne soit appelé qu'une fois. Actuellement cette fonction est bindée directement depuis le template.
         */
        gererAffichageIcone(produit: Types.CompositionOffreProduit): void;
        /**
         * Regarde pour un produit donné si il existe des produits déjà existants du même assemblage et les supprime
         * si ils viennent d'être ajoutés, ou les marque pour clôture s'ils font déjà partie de l'offre
         */
        traiterProduitAssemblageDejaExistant(compositionProduit: Types.CompositionOffreProduit, produitCatalogue: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr): void;
        /**
         * Traitement de reprise effectué après réponse de la ressource. Utilisé à l'origine pour traiter les produit en mode personne sans produit
         * support puis adapté pour le traitement des produits en mode personne avec produit support (ie les cartes)
         * Assure la MAJ "catalogueBrut" si nécessaire dans le cas d'un produit repris (indispensable afin d'assurer que le produit
         * est bien repris lorsqu'on va effectuer la maj de l'enveloppe de l'offre. Puis ajoute le(s) produit(s) au panier.
         *
         * @param {type} produitService : Produit à ajouter au panier
         * @param {type} data Données de reprise
         * @param {type} origine Indique si le P/S est un produit simple ou si il a été ajouté via un assemblage
         * @param {type} donneesAssemblage? Les données de sélection assemblage si le produit vient d'un assemblage
         * @param {type} entite? Pour les produits avec produit support, l'entité sous laquelle insérer
         * @returns Types.CompositionOffreProduit | Types.EvenementProduit[] Renvoie le produit inséré pour les produits détenus en mode personne
         * dans produit support. Renvoie une série d'EvenementProduit qui seront utilisés par l'appelant pour éméttre des events vers les P/S après l'insertion
         */
        traiterReprise(produitService: Types.CatalogueNode, data: RepriseEtDetenteur, origine: Types.OrigineProduit, donneesAssemblage?: Types.DonneesAssemblage, entite?: Types.InformationEntiteTitulaire | Types.InformationEntiteTitulaireBdr): Types.CompositionOffreProduit | Types.EvenementProduit[];
        /**
         * Détermine le mode d'ajout du produit.
         * Repris si il existe dans le produit une proposition de reprise avec un numéro d'offre d'origine non vide pour le détenteur => (R)
         * Faisant partie de l'offre si il existe dans le produit une proposition de reprise avec un numéro d'offre d'origine vide pour le détenteur => rien
         * Sinon, manuel (càd, un nouveau produit) => [new]
         * @param [produit] Le produit
         * @param [detenteur] Le detenteur du produit
         */
        determinerModeAjoutProduitDansOffre(produit: Types.ProduitService, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration): Types.ModeAjoutProduitDansOffre;
        /**
         * Regarde pour un produit donné si il existe des produits déjà existants du même assemblage et les supprime
         * si ils viennent d'être ajoutés, ou les marque pour clôture s'ils font déjà partie de l'offre
         * @param {type} compositionProduit Noeud du panier
         * @param {type} produitCatalogue Le produit dans le catalogue
         * @param {type} detenteur Le détenteur
         * @returns void
         */
        traiterProduitAssemblageInterchangeableDejaExistant(compositionProduit: Types.CompositionOffreProduit, produitCatalogue: Types.CatalogueNode, detenteur: Types.InformationEntiteTitulaire | Types.Tiers.Personne | Types.Tiers.PersonneMorale | Types.InformationEntiteTitulaireBdr | Types.Tiers.Procuration): void;
        ajouterControlePreRequis(produit: Types.CompositionOffreProduit): void;
        /**
         * Permet d'ajouter les controles pré requis reçu par le paramétrage, aux P/S présents dans le panier
         */
        ajouterControlePreRequisComposition(composition: Types.CompositionOffreEntitePersonne[]): void;
        /**
         * Sticky function
         *
         * @param void
         * @returns void
         */
        isSticky(): void;
        transformerProcurationEnPersonne(p: Types.Tiers.Procuration): Types.Tiers.Personne;
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
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
    class EditiqueControleur {
        private $q;
        private serviceAgentExtended;
        private modaleService;
        private contexteGgoStockageService;
        private $location;
        private gestionEditiqueService;
        private contexteGgo;
        private contexteGgoEditique;
        private _donneesSecurAcces;
        private retourEditiqueGGHO;
        private typeProfessionnel;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modaleService: MyWay.UI.ModalService, contexteGgoStockageService: Services.ContexteGgoStockageService, $location: ng.ILocationService, gestionEditiqueService: Services.GestionEditiqueService);
        private controlerRetourEditique();
        private updateDocumentsGeneres();
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class InformationDossier {
        private libelleModeVente;
        private libelleActeGestion;
        private titreInfoDossier;
        static $inject: any[];
        constructor();
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class Personnalisation {
        private $scope;
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
        codeSousFamilleActeDeGestionOffre: string;
        compositionOffre: Types.CompositionOffre;
        static $inject: string[];
        constructor($scope: ng.IScope, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, contexteGgoStockageService: Services.ContexteGgoStockageService, miseEnGestionBdrService: Services.MiseEnGestionBdrService);
        produit: Types.CompositionOffreProduit;
        titre: string;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
    class RecapitulatifControleur {
        private $scope;
        private compositionOffreService;
        private erreurService;
        private entiteTitulaireBdrService;
        private tarificationOffreSyntheseService;
        private contexteGgoStockageService;
        private tiersService;
        private catalogueService;
        static controllerId: string;
        modeAcces: string;
        modeAffichage: string;
        compatibiliteTarification: boolean;
        compositionOffre: Types.CompositionOffre;
        listeErreurs: Types.ErreurGestionGeneriqueOffre[];
        codeSousFamilleActeDeGestionOffre: string;
        activerModeDebug: boolean;
        codeActeGestion: string;
        libelleOffreBouquet: string;
        listeCompositionEntiteTitulaire: Types.PersonneEntiteTitulaire[];
        listePersonnes: Types.Tiers.Personne[] | Types.Tiers.PersonneMorale[];
        afficherPersonne: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, compositionOffreService: Services.CompositionOffreService, erreurService: Services.ErreurService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, contexteGgoStockageService: Services.ContexteGgoStockageService, tiersService: Services.TiersService, catalogueService: Services.ICatalogueService);
        afficherRecapitulatifTarification(): string;
    }
}

declare module GestionGeneriqueOffres.Composition {
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

declare module GestionGeneriqueOffres.Composition {
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
        constructor($scope: IRecapitulatifSectionControleur, $rootScope: ng.IRootScopeService, $location: ng.ILocationService, constantes: GestionGeneriqueOffres.Constantes.Definitions, erreurService: Services.ErreurService, entiteTitulaireBdrService: Services.IEntiteTitulaireBdrService, tarificationOffreSyntheseService: Services.ITarificationOffreSyntheseService, contexteGgoStockageService: Services.ContexteGgoStockageService, catalogueService: Services.ICatalogueService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre);
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
        getListeSignataires(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
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
}

declare module GestionGeneriqueOffres.Personnalisation {
}

declare module GestionGeneriqueOffres.Composition {
    class SelectionProduitsMultiples {
        private $rootScope;
        private constantes;
        static $inject: string[];
        id: string;
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
}

declare module GestionGeneriqueOffres.Composition {
    /**
     * Classe du controleur Signataires
     * @class Signataires
     */
    class Signataires {
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
        constructor(constantes: GestionGeneriqueOffres.Constantes.Definitions, contexteGgoStockageService: Services.ContexteGgoStockageService, signatairesService: Services.SignatairesService, compositionOffreService: Services.CompositionOffreService, catalogueService: Services.ICatalogueService, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre);
        balayerNiveauPrincipalComposition(): myway.comContract.modeles.IProduitService[];
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
}

declare module GestionGeneriqueOffres.Composition {
    class Spinner {
        afficher: boolean;
        static $inject: any;
        constructor();
    }
}

declare module GestionGeneriqueOffres.Composition {
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
        static $inject: string[];
        affichageModeRecap: boolean;
        affichageModePerso: boolean;
        constructor($scope: ng.IScope, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, $timeout: ng.ITimeoutService, $q: ng.IQService, contexteGgoStockageService: Services.ContexteGgoStockageService, constantes: GestionGeneriqueOffres.Constantes.Definitions, catalogueService: Services.ICatalogueService, erreurService: Services.ErreurService, signatairesService: Services.SignatairesService, tiersService: Services.ITiersService, referenceProduitPrincipalOffre: Types.ReferenceProduitPrincipalOffre, codeTypeProduitServicePrincipalOffre: Types.CodeTypeProduitServicePrincipalOffre, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modalService: MyWay.UI.IModalService);
        numeroDeCompte: string;
        afficherSignataires(): void;
        activerPanneauErreur(): void;
        quitterGgo(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Composition {
    class TuileCatalogue {
        private $rootScope;
        private constantes;
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
        static $inject: string[];
        constructor($rootScope: ng.IRootScopeService, constantes: GestionGeneriqueOffres.Constantes.Definitions);
        /**
         * Vrai si la tuile correspond à un assemblage
         */
        disableSiNonAssemblage(): boolean;
        /**
         * Fonction permettant de déterminer la classe CSS à appliquer à la tuile en fonction du codeNatureProduitServiceAssocie
         * et de l'état de la tuile (active/inactive)
         */
        determinerClasseCssPourProduitService(codeNatureProduitServiceAssocie: string, disabled: boolean): string;
        tuileCatalogueAction(): void;
    }
}

declare module GestionGeneriqueOffres.Composition {
}

declare module GestionGeneriqueOffres.Services.Rest.DossierVente {
    interface IHistoriqueQuery {
        /**
         * Type de recherche demandé. Valeurs : '1' : recherche de la liste des dossiers d'une personne
         * '2' : recherche de la liste des dossiers des personnes composant la relation économique
         * '3' : appel successif recherche 1 et recherche 2
         */
        typeRecherche: "1" | "2" | "3";
        codeEtablissement: string;
        identifiantPersonne: number;
        referenceExterneAgent: number;
    }
    interface IHistoDossierVenteService {
        getHistorique(params: IHistoriqueQuery): ng.IPromise<Types.HistoriqueDossier.IListeHistoriqueDossier>;
    }
    /**
     * Classe permettant d'effectuer la communication avec la ressource dossier de vente.
     */
    class HistoDossierVente implements IHistoDossierVenteService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode de restitution du dossier de vente
         * @param {IGestionDossierVenteGetDossierVenteQuery} data : Les données à passer en entrée de la ressource, dont notamment
         * l'identifiant du dossier de vente.
         */
        getHistorique(params: IHistoriqueQuery): ng.IPromise<Types.HistoriqueDossier.IListeHistoriqueDossier>;
        /**
         * Méthode de construction de l'url du web service
         * @author S0076105
         * @return L'url du web service
         */
        private url();
    }
}
