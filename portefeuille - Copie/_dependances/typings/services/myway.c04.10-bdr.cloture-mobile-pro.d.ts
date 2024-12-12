
declare module ClotureMobilePro {
    var app: any;
}

declare module ClotureMobilePro {
}

/**
 * Contrôleur de la page de tests de la directive mw-mobile-pro-cloture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureMobilePro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwMobileProClotureControleur {
        private $scope;
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Identifiant tiers issu du contexte GGO
         */
        identifiantTiers: number;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffreSouscrite: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitServiceOffre: number;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
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
         * Méthode pour déclencher la mise en gestion
         */
        executerMiseEnGestion(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la directive mw-mobile-pro-cloture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureMobilePro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwMobileProClotureControleur {
        private $scope;
        private serviceAgentExtended;
        private caracteristiqueAbonnementService;
        private entretienUtilsService;
        private resultatEntretienService;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
        /**
         * Identifiant client issu du contexte GGO
         */
        identifiantClient: string;
        /**
         * Code établissement issu du contexte GGO/Contexte
         */
        codeEtablissement: string;
        /**
         * Identifiant tiers issu du contexte GGO
         */
        identifiantTiers: number;
        /**
         * Le code service Banque à Distance
         */
        codeServiceBad: string;
        /**
         * Code nécessaire pour le service d'entretien commercial
         */
        CODE_TYPE_PRODUIT_SERVICE_GCP_TABLE_DELOCALISE: string;
        /**
         * Les données délocalisées GCP
         */
        private donneeTableDeloc;
        /**
         * Objet des caractéristiques de l'abonnement
         */
        private caracteristiqueAbonnement;
        /**
         * Le code détention authentification
         */
        private codeDetention;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService, entretienUtilsService: ComposantsCommunsDeiPro.Services.Application.IEntretienCommercialUtilsService, resultatEntretienService: ComposantsCommunsDeiPro.Services.Rest.EntretienCommercial.ResultatEntretien.IResultatEntretienRestService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode appelée pour la sauvegarde de la clôture de l'abonnement Mobile Pro
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        cloturer(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour charger l'objet CaracteristiqueAbonnement
         */
        private chargerCaracteristiqueAbonnementInitial();
        /**
         * Méthode appelée pour le traitement de la sauvegarde de la clôture de l'abonnement Mobile Pro
         * @return {ng.IPromise<any>} la promesse de compte rendu pour GGO
         */
        private traitementDeCloture();
    }
}

/**
 * Directive pour l'affichage de la page de clôture de Mobile Pro
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureMobilePro.Directives {
    function mwMobileProCloture(): ng.IDirective;
}
