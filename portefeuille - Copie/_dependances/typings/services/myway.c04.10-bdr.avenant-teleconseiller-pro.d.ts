
declare module AvenantTeleconseillerPro {
    var app: any;
}

declare module AvenantTeleconseillerPro {
}

/**
 * Contrôleur de la page d'avenant TELECONSEILLER PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantTeleconseillerPro {
    /**
     * Déclaration du contrôleur
     */
    class TeleconseillerProAvenantControleur {
        private $scope;
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
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
         * Indicateur d'affichage du bouton validation formulaire
         */
        indicateurVueBoutonValidationFormulaire: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
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
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
        /**
         * Méthode permettant la validation formulaire GGO
         * @return void
         */
        executerValidationFormulaire(): void;
        /**
         * Méthode permettant la mise en gestion
         * @return void
         */
        executerMiseEnGestion(): void;
    }
}

/**
 * Contrôleur de la directive mw-teleconseiller-pro-avenant
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantTeleconseillerPro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTeleconseillerProAvenantControleur {
        private $scope;
        private $rootScope;
        private $q;
        private teleconseillerProValiderAvenantService;
        private caracteristiqueAbonnementService;
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
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
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
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Indicateur de blocage de l'abonnement
         */
        private indicateurErreurBlocageAbonnement;
        /**
         * Indicateur de blocage du bouton Valider en cas d'erreur sur le tableau des plafonds de virement
         */
        private indicateurBlocageValidation;
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
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, teleconseillerProValiderAvenantService: Services.Application.ITeleconseillerProValiderAvenantService, caracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService, serviceAgent: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerAvenantTeleconseillerPro(): void;
        /**
         * Permet de valider les données de l'avenant TELECONSEILLER PRO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerDonnee: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        /**
         * Permet de lancer la mise en gestion depuis GGO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider les modifications d'un abonnement Teleconseiller Pro
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
 * Directive pour la gestion de l'affichage de la page d'avenant TELECONSEILLER PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantTeleconseillerPro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwTeleconseillerProAvenant(): ng.IDirective;
}

/**
 * Service contenant les fonctionnalités pour la sauvegarde des modifications sur la page d'avenant TELECONSEILLER PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module AvenantTeleconseillerPro.Services.Application {
    /**
     * Interface du service
     */
    interface ITeleconseillerProValiderAvenantService {
        sauvegarderModifications: (codeEtablissement: string, identifiantTiers: number, identifiantAbonnement: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, numeroOffre: number, identifiantProduitService: number, identifiantPersonne: number, identifiantClient: string) => MyWay.Services.IPromesse<Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>>;
        getListeErreurs: () => Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>;
        setListeErreurs: (liste: Array<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.IErreurService>) => void;
    }
}
