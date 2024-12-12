
declare module ClotureFacturationForfait {
    var app: any;
}

declare module ClotureFacturationForfait {
}

/**
 * Contrôleur de la page de tests de la directive mw-cloture-facturation-forfait
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureFacturationForfait.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwClotureFacturationForfaitControleur {
        private $scope;
        static $inject: string[];
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
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
        constructor($scope: ng.IScope);
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
 * Service pour les opérations de la clôture FACTURATION FORFAIT
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureFacturationForfait.Services {
    /**
     * Interface du service
     */
    interface IFacturationForfaitClotureService {
        supprimerFacturationForfait: (codeEtablissement: string, numeroOffre: number) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Contrôleur de la directive mw-facturation-forfait-cloture
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureFacturationForfait.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwFacturationForfaitClotureControleur {
        private $scope;
        private serviceAgentExtended;
        private facturationForfaitClotureService;
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
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, facturationForfaitClotureService: Services.IFacturationForfaitClotureService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode appelée pour la sauvegarde de la clôture de la facturation forfait
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        supprimer(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
    }
}

/**
 * Directive pour l'affichage de la page de clôture de la FACUTRATION FORFAIT
 * @author S0077536 (Arnaud Despalins)
 */
declare module ClotureFacturationForfait.Directives {
    function mwFacturationForfaitCloture(): ng.IDirective;
}
