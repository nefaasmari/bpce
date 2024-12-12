
declare module AvenantRemunerationCCE {
    var app: any;
}

declare module AvenantRemunerationCCE {
}

declare module AvenantRemunerationCCE.Controleurs {
    class PageDevRemunerationAvenantControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Code guichet interbancaire
         */
        codeGuichet: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du GCE
         */
        numeroCompte: string;
        /**
         * Numéro de personne
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        protected identifiantProduitService: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        protected numeroOffre: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        protected identifiantElementStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        protected identifiantElementStructure2: number;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         */
        protected codeQualiteAgent: ComposantsCommunsRemunerationCCE.Enumerations.ContratCceService.RemunerationCce.CodeQualiteAgentEnum;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        /**
         * Liste des choix pour le code agent
         */
        private listeChoixCodeQualiteAgent;
        /**
         * Choix pour le code agent
         */
        private choixCodeQualiteAgent;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        rafraichirData(): void;
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la directive mw-remuneration-cce-avenant
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceAvenantControleur extends ComposantsCommunsRemunerationCCE.Controleurs.MwRemunerationCceRootControleur {
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, remunerationCacheService: ComposantsCommunsRemunerationCCE.Services.IRemunerationCacheService, remunerationCceRestService: ComposantsCommunsRemunerationCCE.Services.IRemunerationCceRestService, remunerationService: ComposantsCommunsRemunerationCCE.Services.IRemunerationService, baremeService: ComposantsCommunsRemunerationCCE.Services.IBaremeService, gestionModaleService: ComposantsCommunsRemunerationCCE.Services.IGestionModaleService);
    }
}

/**
 * Directive pour la gestion de l'affichage de la directive de rémunération dans le cadre d'un avenant de CCE
 * @author S0076471 (Grégory Barale)
 */
declare module AvenantRemunerationCCE.Directives {
    /**
     * Déclarion du constructeur de la directive
     * Nom du champs d'entrée | Rubrique PACBASE
     * - codeEtablissement | COCXBQ
     * - codeGuichet | COCXGU
     * - numeroCompte | NOGXCP
     * - identifiantTiers | NODAPE
     * - identifiantProduitService | IDEGPS
     * - numeroOffre | NOBCOF
     * - identifiantElementStructure | NOCEE1
     * - identifiantElementStructure2 | NOCEE6
     * - codeQualiteAgent | CTCEQU
     */
    function mwRemunerationCceAvenant(): ng.IDirective;
}
