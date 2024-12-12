
declare module AvenantAssuranceCourtTerme {
    var app: ng.IModule;
}

declare module AvenantAssuranceCourtTerme {
}

/**
 * Contrôleur de la page de test de la directive d'avenant de l'Assurance Court Terme Professionels
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevAssCourtTermeAvenantControleur {
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
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: string;
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
 * Service contenant les fonctionnalités pour la sauvegarde de l'avenant pour l'assurance court terme
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantAssuranceCourtTerme.Services.Application {
    /**
     * Interface du service
     */
    interface IAssCourtTermeValiderAvenantService {
        sauvegarderAvenant: (context: GestionGeneriqueOffres.Types.DonneesContextuelles) => MyWay.Services.IPromesse<ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Application.Commun.IErreurService>;
    }
}

/**
 * Contrôleur de la directive mw-ass-court-terme-pro-avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantAssuranceCourtTerme.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAssCourtTermeAvenantControleur {
        private $scope;
        private assuranceCourtTermeService;
        private $q;
        private assCourtTermeValiderOuvertureService;
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
         * Le numéro de contrat de l'assurance
         */
        numeroContratAssurance: number;
        /**
         * Objet AssuranceCourtTerme contenant les informations de l'assurance
         */
        assuranceCourtTerme: ComposantsCommunsAssuranceCompteCourtTerme.Modeles.Rest.ContratAssCompte.AssuranceCourtTerme.IAssuranceCourtTerme;
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
         * Constructeur
         */
        constructor($scope: ng.IScope, assuranceCourtTermeService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssuranceCourtTermeService, $q: ng.IQService, assCourtTermeValiderOuvertureService: Services.Application.IAssCourtTermeValiderAvenantService, serviceAgent: MyWay.Services.ServiceAgentExtended, assCptCourtTermeGestionSauvegardeService: ComposantsCommunsAssuranceCompteCourtTerme.Services.Application.IAssCptCourtTermeGestionSauvegardeService);
        /**
         * Méthode pour le chargement de l'objet assuranceCourtTerme depuis le service
         */
        private chargerAssuranceCourtTerme();
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Permet de valider les données de l'ouverture de l'assurance court terme
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerDonnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Méthode pour valider l'avenant de l'assurance court terme
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
 * Directive pour la gestion de l'affichage de la directive d'avenant de l'Assurance Court Terme Professionnels
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantAssuranceCourtTerme.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwAssCourtTermeProAvenant(): ng.IDirective;
}
