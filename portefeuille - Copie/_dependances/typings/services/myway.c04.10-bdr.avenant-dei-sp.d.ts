
declare module AvenantDeiSP {
    var app: any;
}

/**
 * Contrôleur de la page d'avenant DEI SP
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiSP {
    /**
     * Déclaration du contrôleur
     */
    class DeiSPAvenantControleur {
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant de la personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Identifiant client
         */
        identifiantClient: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Objet de données issues de GGO
         */
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueReload: boolean;
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
        /**
         * Méthode pour initialiser les données GGO
         */
        initialiserDonneesGGO(): void;
        /**
         * Méthode pour rafraichir la directive avec de nouvelles données entrées à partir du formulaire
         */
        executerDirective(): void;
        /**
         * Méthode permettant de rafraichir la directive
         * @return void
         */
        rafraichirDirective(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
        /**
         * Méthode permettant la mise en gestion
         * @return void
         */
        executerMiseEnGestion(): void;
    }
}

/**
 * Contrôleur de la directive mw-dei-sp-avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiSP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiSpAvenantControleur {
        private $scope;
        private deiSpCaracteristiqueAbonnementService;
        private avenantCaracteristiqueAbonnementService;
        private $rootScope;
        private serviceAgent;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
        /**
         * Code établissement issu du contexte GGO/Contexte
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant de la personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Indicateur de blocage de l'abonnement
         */
        private indicateurErreurBlocageAbonnement;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, deiSpCaracteristiqueAbonnementService: Services.Application.IDeiSPAvenantCaracteristiqueAbonnementService, avenantCaracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService, $rootScope: ng.IRootScopeService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerAvenantDeiSP(): void;
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider l'avenant d'un abonnement Dei SP
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerModificationsAbonnement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la page d'avenant DEI SP
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantDeiSP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiSpAvenant(): ng.IDirective;
}

/**
 * Service pour la gestion de l'objet issu du service REST "/contratbqdpro/v1/caracteristiqueAbonnement" pour DEI-SP Avenant
 * @author S0077536 (Arnaud DESPALINS)
 */
declare module AvenantDeiSP.Services.Application {
    /**
     * Interface du service
     */
    interface IDeiSPAvenantCaracteristiqueAbonnementService {
        sauvegarderModifications: (codeEtablissement: string, identifiantTiers: number, identifiantClient: string, identifiantPersonne: number, identifiantAbonnement: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, numeroOffre: number, identifiantProduitService: number, caracteristiqueAbonnement: ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        getListeErreurs: () => MyWay.Services.IPromesse<Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>>;
        setListeErreurs: (liste: Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>) => void;
    }
}
