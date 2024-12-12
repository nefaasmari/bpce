
declare module ClotureProduitsNonGeres {
    var app: any;
}

declare module ClotureProduitsNonGeres {
}

/**
 * Controleur pour la page de test de la directive de cloture de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module ClotureProduitsNonGeres {
    class PageDevClotureProduitsNonGeresControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        offreMiseEnGestionPSExternePostQuery: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        initialiserQueryServicePost(): void;
        executerDirective(): void;
    }
}

/**
 * Ensemble d'énumérations pour la cloture des produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module ClotureProduitsNonGeres.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}

/**
 * Controleur pour la directive de cloture de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module ClotureProduitsNonGeres.Controleurs {
    class ClotureProduitsNonGeresControleur {
        private $scope;
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        private mwNotificationService;
        static $inject: string[];
        referenceExterneAgent: any;
        identifiantElementStructure: any;
        numeroOffreSouscrite: any;
        identifiantProduitService: any;
        codeEtablissement: any;
        codeTypeProduitService: any;
        referenceProduitService: any;
        codeGuichet: string;
        codeActionMajContenuOffre: ComposantsCommunsProduitsNonGeres.Enumerations.ProduitsNonGeresCodeActionMAJContenuOffre;
        codeAffichageReferenceProduitService: ComposantsCommunsProduitsNonGeres.Enumerations.ProduitsNonGeresCodeAffichageReferenceProduit;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService, mwNotificationService: MyWay.UI.IMwNotificationService);
        clotureProduitsNonGeres(): void;
    }
}

/**
 * Directive pour la cloture de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module ClotureProduitsNonGeres.Directives {
    function mwClotureProduitsNonGeres(): ng.IDirective;
}
