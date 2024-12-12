
declare module OuvertureDeiPro {
    var app: any;
}

/**
 * Contrôleur de la directive mw-dei-pro-ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureDeiPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiProOuvertureControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private deiProCaracteristiqueAbonnementService;
        private confirmationOuvertureService;
        private $q;
        private usagerPrincipalService;
        private entretienUtilsService;
        private resultatEntretienService;
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
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant abonne issu du contexte GGO/Contexte
         */
        identifiantAbonne: string;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant de la personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Code nécessaire pour le service d'entretien commercial
         */
        CODE_TYPE_PRODUIT_SERVICE_GCP_TABLE_DELOCALISE: string;
        /**
         * Les données délocalisées GCP
         */
        private donneeTableDeloc;
        /**
         * Indicateur de recherche d'une eventuelle offre CE Net ouverte pour éviter les incompatibilités en ouverture
         */
        checkCenet: boolean;
        /**
         * Indicateur de la présence d'un abonnement CE net
         */
        private indicateurAbonnementCenet;
        /**
         * Indicateur de requète de suppression réussie
         */
        indicateurRequeteReussie: boolean;
        /**
         * Indicateur de requète de suppression en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Objet
         */
        private caracteristiqueAbonnement;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, deiProCaracteristiqueAbonnementService: Services.IDeiProOuvertureCaracteristiqueAbonnementService, confirmationOuvertureService: ComposantsCommunsDeiPro.Services.Application.IConfirmationOuvertureService, $q: ng.IQService, usagerPrincipalService: ComposantsCommunsDeiPro.Services.Application.IUsagerPrincipalService, entretienUtilsService: ComposantsCommunsDeiPro.Services.Application.IEntretienCommercialUtilsService, resultatEntretienService: ComposantsCommunsDeiPro.Services.Rest.EntretienCommercial.ResultatEntretien.IResultatEntretienRestService);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerOuvertureDeiPro(): void;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Permet de valider les données de l'ouverture d'un DEI PRO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerDonnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Méthode pour valider l'ouverture d'un abonnement Dei Pro
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerOuvertureAbonnement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
        /**
         * Methode qui gère l'affichage ou non de la page si il y a une erreur
         * @returns true ou false
         */
        afficherPage(): boolean;
    }
}

/**
 * Directive pour la gestion de l'affichage de la page d'ouverture DEI PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureDeiPro.Directives {
    /**
     * Déclaration du constructeur de la directive
     */
    function mwDeiProOuverture(): ng.IDirective;
}

/**
 * Contrôleur de la page d'ouverture DEI PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureDeiPro.Controleurs {
    class DeiProOuvertureControleur {
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant abonne issu du contexte GGO/Contexte
         */
        identifiantAbonne: string;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Identifiant client
         */
        identifiantClient: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Identifiant de la personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
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
 * Service pour la gestion de l'objet issu du service REST "/contratbqdpro/v1/caracteristiqueAbonnement" pour DEI-Pro Ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureDeiPro.Services {
    /**
     * Interface du service
     */
    interface IDeiProOuvertureCaracteristiqueAbonnementService {
        sauvegarderCaracteristiques: (codeEtablissement: string, identifiantTiers: number, identifiantAbonne: string, identifiantAbonnement: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, numeroOffre: number, identifiantProduitService: number) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
        recupererCaracteristiqueAbonnement(codeEtablissement: string, identifiantClient: string, identifiantTiers: number): MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
    }
}
