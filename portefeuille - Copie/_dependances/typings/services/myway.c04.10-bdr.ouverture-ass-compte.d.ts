
declare module OuvertureAssuranceCompte {
    var app: ng.IModule;
}

declare module OuvertureAssuranceCompte {
}

/**
 * Contrôleur de la page de test de la directive d'ouverture de l'Assurance Sur Compte Professionels
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureAssuranceCompte.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevAssCompteOuvertureControleur {
        static $inject: any[];
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         * Code guichet interbanquaire
         */
        codeGuichet: string;
        /**
         * L'identifiant de l'entitée titulaire
         */
        identifiantEntiteTitulaire: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Le client bancaire issu du context GGO
         */
        clientBancaire: string;
        /**
         * Numéro du compte créé dans l'ouverture d'offre
         */
        numeroCompte: string;
        /**
         * Le code Produit service de ce compte
         */
        codeTypeProduitService: string;
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
        constructor();
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
 * Contrôleur de la directive mw-ass-compte-pro-ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureAssuranceCompte.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAssCompteOuvertureControleur {
        private $scope;
        private assuranceCompteService;
        private $q;
        private assCompteValiderOuvertureService;
        private serviceAgent;
        private assCptCourtTermeGestionSauvegardeService;
        static $inject: string[];
        /**
         * Correspond à l’identifiant du bloc de votre directive
         */
        idBloc: string;
        /**
         * Code établissement issu du contexte GGO
         */
        codeEtablissement: string;
        /**
         *  Le numéro de l'entité titulaire issu du contexte GGO
         */
        identifiantEntiteTitulaire: number;
        /**
         * Le client bancaire
         */
        clientBancaire: string;
        /**
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Objet AssuranceSurCompte contenant les informations de l'assurance
         */
        assuranceSurCompte: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte;
        /**
         * Indicateur pour le type du tableau
         */
        courtTerme: boolean;
        /**
         * Indicateur du type d'acte de gestion
         */
        ouverture: boolean;
        /**
         * Objet du contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Indicateur de requète en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * Indicateur de la réussite de la requête
         */
        private indicateurRequeteReussie;
        /**
         * Indicateur de la réussite de la recupération des données délocalisées
         */
        private indicateurDonneesDelocLien;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Indicateur de succes / echec des requetes
         */
        private indicateurSuccesRequetes;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, assuranceCompteService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssuranceCompteService, $q: ng.IQService, assCompteValiderOuvertureService: Services.Application.IAssCompteValiderOuvertureService, serviceAgent: MyWay.Services.ServiceAgentExtended, assCptCourtTermeGestionSauvegardeService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssCptCourtTermeGestionSauvegardeService);
        /**
         * Méthode pour le chargement de l'objet assuranceSurCompte depuis le service
         */
        private chargerAssuranceSurCompte();
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Permet de valider les données de l'ouverture de l'assurance sur compte
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerDonnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Méthode pour valider l'ouverture de l'assurance sur compte
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} le compte rendu de réponse pour GGO
         */
        validerAssurance(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
        /**
         * Méthode pour le rechargement des requêtes des directives filles
         */
        rechargerDirectiveFilleCommune(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la directive d'ouverture de l'Assurance Compte Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureAssuranceCompte.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwAssCompteProOuverture(): ng.IDirective;
}

/**
 * Service contenant les fonctionnalités pour la sauvegarde de l'ouverture pour l'assurance sur compte
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureAssuranceCompte.Services.Application {
    /**
     * Interface du service
     */
    interface IAssCompteValiderOuvertureService {
        sauvegarderOuverture: (assuranceSurCompte: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceSurCompte.IAssuranceSurCompte, context: GestionGeneriqueOffres.Types.DonneesContextuelles) => MyWay.Services.IPromesse<ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Application.Commun.IErreurService>;
    }
}
