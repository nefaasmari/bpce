
declare module ClotureSeuilIntDeb {
    var app: any;
}

/**
 * Contrôleur de la directive mw-cloture-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwClotureSeuilIntDebControleur {
        private $scope;
        private serviceAgentExtended;
        private seuilFranchiseAgioCceService;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        identifiantProduitService: number;
        typeFranchiseAgio: string;
        numeroOffreSouscrite: number;
        montantSeuilIHM: MyWay.Model.MontantDevise;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        boutonValiderActif: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, seuilFranchiseAgioCceService: ComposantsCommunsSeuilIntDeb.Services.ISeuilFranchiseAgioCceService);
        /**
         * Méthode appelée pour la clôture du service Seuil intérêts débiteurs
         */
        supprimerSeuilIntDeb(): void;
    }
}

/**
 * Directive pour l'affichage de la page de clôture du service Seuil d'intérêts débiteurs
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSeuilIntDeb.Directives {
    function mwClotureSeuilIntDeb(): ng.IDirective;
}

/**
 * Contrôleur de la page de tests de la directive mw-cloture-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module ClotureSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwClotureSeuilIntDebControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantProduitService: number;
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
