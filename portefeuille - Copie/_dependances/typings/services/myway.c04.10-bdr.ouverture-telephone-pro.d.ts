
declare module OuvertureTelephonePro {
    var app: any;
}

/**
 * Contrôleur de la page d'ouverture TELEPHONE PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureTelephonePro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class TelephoneProOuvertureControleur {
        private $scope;
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO
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
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Identifiant abonne issu du contexte GGO/Contexte
         */
        identifiantAbonne: string;
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
 * Contrôleur de la directive mw-telephone-pro-ouverture
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureTelephonePro.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTelephoneProOuvertureControleur {
        private $scope;
        private serviceAgentExtended;
        private telephoneProCaracteristiqueAbonnementService;
        private confirmationOuvertureService;
        private $q;
        private usagerPrincipalService;
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
         * Numero de l'offre souscrite issu du contexte GGO/Contexte
         */
        numeroOffre: number;
        /**
         * Identifiant du produit ou service issu du contexte GGO/Contexte
         */
        identifiantProduitService: number;
        /**
         * Identifiant abonnement issu du contexte GGO/Contexte
         */
        identifiantAbonnement: string;
        /**
         * Identifiant abonne issu du contexte GGO/Contexte
         */
        identifiantAbonne: string;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, telephoneProCaracteristiqueAbonnementService: OuvertureTelephonePro.Services.Application.ITelephoneProOuvertureCaracteristiqueAbonnementService, confirmationOuvertureService: ComposantsCommunsDeiPro.Services.Application.IConfirmationOuvertureService, $q: ng.IQService, usagerPrincipalService: ComposantsCommunsDeiPro.Services.Application.IUsagerPrincipalService);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerOuvertureTelephonePro(): void;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Méthode pour valider l'ouverture d'un abonnement TELEPHONE PRO
         * @return {ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>} la promesse de compte rendu pour GGO
         */
        validerOuvertureAbonnement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la page d'ouverture Telephone PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module OuvertureTelephonePro.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwTelephoneProOuverture(): ng.IDirective;
}

/**
 * Service pour la gestion de l'objet issu du service REST "/contratbqdpro/v1/caracteristiqueAbonnement" pour TELEPHONE PRO Ouverture
 * @author S0077536 (Arnaud DESPALINS)
 */
declare module OuvertureTelephonePro.Services.Application {
    /**
     * Interface du service
     */
    interface ITelephoneProOuvertureCaracteristiqueAbonnementService {
        sauvegarderCaracteristiques: (codeEtablissement: string, identifiantTiers: number, identifiantAbonnement: string, codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum, numeroOffre: number, identifiantProduitService: number, identifiantAbonne: string) => MyWay.Services.IPromesse<ComposantsCommunsDeiPro.Modeles.Rest.ContratBqdPro.CaracteristiqueAbonnement.ICaracteristiqueAbonnement>;
    }
}
