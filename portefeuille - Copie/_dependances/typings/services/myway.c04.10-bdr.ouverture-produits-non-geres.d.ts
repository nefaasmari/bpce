
declare module OuvertureProduitsNonGeres {
    var app: any;
}

declare module OuvertureProduitsNonGeres {
}

/**
 * Controleur pour la page de test de la directive de création de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module OuvertureProduitsNonGeres {
    class PageDevOuvertureProduitsNonGeresControleur {
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
 * Controleur pour la directive de création de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module OuvertureProduitsNonGeres.Controleurs {
    class OuvertureProduitsNonGeresControleur {
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
        codeGuichet: any;
        codeTypeProduitService: any;
        referenceProduitService: string;
        codeActionMajContenuOffre: ComposantsCommunsProduitsNonGeres.Enumerations.ProduitsNonGeresCodeActionMAJContenuOffre;
        codeAffichageReferenceProduitService: ComposantsCommunsProduitsNonGeres.Enumerations.ProduitsNonGeresCodeAffichageReferenceProduit;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService, mwNotificationService: MyWay.UI.IMwNotificationService);
        creationProduitsNonGeres(): void;
    }
}

/**
 * Directive pour la création de produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module OuvertureProduitsNonGeres.Directives {
    function mwOuvertureProduitsNonGeres(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour l'ouverture des produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module OuvertureProduitsNonGeres.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
