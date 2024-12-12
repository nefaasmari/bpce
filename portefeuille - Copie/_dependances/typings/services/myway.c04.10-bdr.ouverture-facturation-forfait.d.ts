
declare module OuvertureFacturationForfait {
    var app: ng.IModule;
}

declare module OuvertureFacturationForfait {
}

/**
 * Contrôleur de la page de test de la directive d'ouverture FACTURATON FORFAIT
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureFacturationForfait.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevFacturationForfaitOuvertureControleur {
        private $scope;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffreSouscrite: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitServiceOffre: number;
        /**
         * Code produit issu du contexte GGO/Contexte
         */
        codeProduit: number;
        /**
         * L'identifiant de l'entitée titulaire de l'offre
         */
        numeroEntiteTitulaire: number;
        /**
         * Variables pour acceuillir la liste des identifiants produit service associés depuis l'ihm de test
         */
        produitAssocies: string;
        /**
         * Variables pour acceuillir la liste des identifiants produit service associés
         */
        listeProduitServiceAssocies: Array<string>;
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
         * Méthode permettant d'exécuter la directive
         * @return void
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
 * Contrôleur de la directive mw-facturation-forfait-ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureFacturationForfait.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwFacturationForfaitOuvertureControleur {
        private $scope;
        private $q;
        private facturationForfaitValiderOuvertureService;
        private serviceAgent;
        private tarificationOffrePrelevementService;
        private conditionPrestationService;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
        /**
         * La référence externe de l'agent issus du context PDT
         */
        referenceExterneAgent: number;
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffreSouscrite: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitServiceOffre: number;
        /**
         * Code produit issu du contexte GGO/Contexte
         */
        codeProduit: number;
        /**
         * L'identifiant de l'entitée titulaire de l'offre
         */
        numeroEntiteTitulaire: number;
        /**
         * La liste des indentifiant des produit service associés
         */
        listeProduitServiceAssocies: Array<ComposantsCommunsFacturationForfait.Modeles.Rest.Tarification.TarificationOffreSynthese.IProduitServiceAssocie>;
        /**
         * L'identifiant de l'élément Structure issus du context PDT
         */
        elementStructure1: number;
        /**
         * L'identifiant de l'élément Structure 2 issus du context PDT
         */
        elementStructure2: number;
        /**
         * Le type d'appel (ici Ouverture)
         */
        typeAppel: string;
        /**
         * Indicateur d'une requête REST en cours
         */
        private indicateurRequeteEnCours;
        /**
         * Erreur récupérée dans le cas d'un échec de la récupération des informations
         */
        private erreurRequete;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Indicateur de succes / echec de la récupération des variables du portail / GGO
         */
        private indicateurErreurParametresPortail;
        /**
         * Indicateur de chargement des données du context
         */
        private donneesChargees;
        /**
         * Indicateur de présence d'une erreur sur le champ taux de réduction
         */
        private indicateurErreurTaux;
        /**
         * Indicateur de présence d'une erreur sur le champ date de fin
         */
        private indicateurErreurDate;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $q: ng.IQService, facturationForfaitValiderOuvertureService: Services.Application.IFacturationForfaitValiderOuvertureService, serviceAgent: MyWay.Services.ServiceAgentExtended, tarificationOffrePrelevementService: ComposantsCommunsFacturationForfait.Services.Application.ITarificationOffrePrelevementService, conditionPrestationService: ComposantsCommunsFacturationForfait.Services.Application.IConditionPrestationService);
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Permet de valider les données de l'ouverture de la facturation forfait
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerDonnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Méthode pour valider l'ouverture de la tarification
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerTarification(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la directive d'ouverture de la Facturation Forfait
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureFacturationForfait.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwFacturationForfaitOuverture(): ng.IDirective;
}

/**
 * Service contenant les fonctionnalités pour la sauvegarde de l'ouverture pour FACTURATION FORFAIT
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureFacturationForfait.Services.Application {
    /**
     * Interface du service
     */
    interface IFacturationForfaitValiderOuvertureService {
        sauvegarderOuverture: (referenceExterneAgent: number, codeEtablissement: string, numeroOffreSouscrite: number, codeProduit: number) => MyWay.Services.IPromesse<Array<ComposantsCommunsFacturationForfait.Modeles.Application.Commun.IErreurService>>;
    }
}
