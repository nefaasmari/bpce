
declare module CloturePaiement3Fois {
    var app: any;
}

declare module CloturePaiement3Fois {
}

/**
 * Controleur pour la page de test de la directive de cloture de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module CloturePaiement3Fois {
    class PageDevCloturePaiement3FoisControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Controleur pour la directive de cloture de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module CloturePaiement3Fois.Controleurs {
    class CloturePaiement3FoisControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private cloturePaiement3Fois(query);
    }
}

/**
 * Directive pour la cloture de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module CloturePaiement3Fois.Directives {
    function mwCloturePaiement3Fois(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour la cloture de paiement 3 fois
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module CloturePaiement3Fois.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
