
declare module AvenantSeuilIntDeb {
    var app: any;
}

/**
 * Contrôleur de la page de tests de la directive mw-avenant-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwAvenantSeuilIntDebControleur {
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
 * Contrôleur de la directive mw-avenant-seuil-int-deb
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSeuilIntDeb.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAvenantSeuilIntDebControleur {
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
         * Méthode pour la récupération du service Seuil d'intérêts débiteurs
         */
        recupererSeuilIntDeb(): void;
        /**
         * Méthode appelée pour la sauvegarde de l'avenant du service Seuil intérêts débiteurs
         */
        valider(): void;
        /**
         * Méthode appelée pour l'annulation de l'avenant du service Seuil intérêts débiteurs
         * Doit normalement être gérée par GGO
         */
        quitter(): void;
    }
}

/**
 * Directive pour l'affichage de la page d'avenant du service Seuil d'intérêts débiteurs
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSeuilIntDeb.Directives {
    function mwAvenantSeuilIntDeb(): ng.IDirective;
}
