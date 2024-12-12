
declare module ClotureSolProSms {
    var app: any;
}

declare module ClotureSolProSms {
}

/**
 * Contrôleur de la page de tests de la directive mw-cloture-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwClotureSolProSmsControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        identifiantTiers: number;
        identifiantClient: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        referenceExterneAgent: number;
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
 * Contrôleur de la directive mw-cloture-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwClotureSolProSmsControleur {
        private $scope;
        private serviceAgentExtended;
        private solProService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantClient: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        referenceExterneAgent: number;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, solProService: ComposantsCommunsSolPro.Services.ISolProService);
        /**
         * Méthode appelée pour la sauvegarde de la clôture du service SOL PRO SMS
         */
        supprimer(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de la clôture d'un service SOL PRO SMS
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSolProSms.Directives {
    function mwClotureSolProSms(): ng.IDirective;
}
