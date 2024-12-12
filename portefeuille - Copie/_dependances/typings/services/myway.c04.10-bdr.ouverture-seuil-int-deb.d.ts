
declare module OuvertureSeuilIntDeb {
    var app: any;
}

/**
 * Contrôleur de la page de tests de la directive mw-ouverture-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwOuvertureSeuilIntDebControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        identifiantProduitService: number;
        typeFranchiseAgio: string;
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
 * Contrôleur de la directive mw-ouverture-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwOuvertureSeuilIntDebControleur {
        private $scope;
        private serviceAgentExtended;
        private seuilFranchiseAgioCceService;
        private mwsfDeviseService;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, seuilFranchiseAgioCceService: ComposantsCommunsSeuilIntDeb.Services.ISeuilFranchiseAgioCceService, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        /**
         * Méthode appelée pour la sauvegarde de l'ouverture du service Seuil intérêts débiteurs
         */
        valider(): void;
        /**
         * Méthode appelée pour l'annulation de l'ouverture du service Seuil intérêts débiteurs
         * Doit normalement être gérée par GGO
         */
        quitter(): void;
    }
}

/**
 * Directive pour l'affichage de la page d'ouverture du service Seuil d'intérêts débiteurs
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSeuilIntDeb.Directives {
    function mwOuvertureSeuilIntDeb(): ng.IDirective;
}
