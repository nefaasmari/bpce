
declare module OuverturePaiement3Fois {
    var app: any;
}

/**
 * Controleur pour la directive de création de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuverturePaiement3Fois.Controleurs {
    class OuverturePaiement3FoisControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private creationPaiement3Fois(query);
    }
}

/**
 * Directive pour la création de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuverturePaiement3Fois.Directives {
    function mwOuverturePaiement3Fois(): ng.IDirective;
}

declare module OuverturePaiement3Fois {
}

/**
 * Controleur pour la page de test de la directive de création de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuverturePaiement3Fois {
    class PageDevOuverturePaiement3FoisControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Ensemble d'énumérations pour l'ouverture de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuverturePaiement3Fois.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
