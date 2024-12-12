
declare module ClotureAlerteBDR {
    var app: any;
}

declare module ClotureAlerteBDR {
}

/**
 * Contrôleur de la page de tests de la directive mw-cloture-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwClotureAlerteBDRControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Identifiant tiers de la personne
         */
        identifiantTiers: number;
        /**
         * Numéro offre souscrite
         */
        numeroOffreSouscrite: number;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        rafraichirData(): void;
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la directive mw-clôture-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwClotureAlerteBDRControleur {
        private $scope;
        private serviceAgentExtended;
        private alerteBDRAlerteEcureuilProService;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        identifiantTiers: number;
        numeroOffreSouscrite: number;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, alerteBDRAlerteEcureuilProService: ComposantsCommunsAlerteBDR.Services.IAlerteEcureuilProService);
        /**
         * Méthode appelée pour la clôture de l'abonnement
         */
        supprimerAbonnementAlerteBDR(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de la clôture d'un abonnement Alerte Ecureuil
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureAlerteBDR.Directives {
    function mwClotureAlerteBDR(): ng.IDirective;
}
