
declare module ConsultationDeiPro {
    var app: any;
}

/**
 * Contrôleur de la page de consultation DEI PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationDeiPro {
    /**
     * Déclaration du contrôleur
     */
    class DeiProConsultationRecetteControleur {
        private $scope;
        private $timeout;
        private caracteristiqueAbonnementService;
        static $inject: string[];
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
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, caracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService);
        /**
         * Méthode pour rafraichir la directive avec de nouvelles données entrées à partir du formulaire
         */
        rafraichirData(): void;
        /**
         * Méthode pour le chargement des jeux de test par defaut
         * @param {number} id - l'identifiant du jeu de test à charger
         */
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la page de consultation DEI PRO
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationDeiPro {
    /**
     * Déclaration du contrôleur
     */
    class DeiProConsultationControleur {
        private $scope;
        private caracteristiqueAbonnementService;
        static $inject: string[];
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
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, caracteristiqueAbonnementService: ComposantsCommunsDeiPro.Services.Application.IAvenantCaracteristiqueAbonnementService);
    }
}

declare module ConsultationDeiPro {
}
