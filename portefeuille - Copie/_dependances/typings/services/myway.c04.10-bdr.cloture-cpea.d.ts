
declare module ClotureConventionPaiementEffetsAccepte {
    var app: any;
}

declare module ClotureConventionPaiementEffetsAccepte {
}

/**
 * Controleur pour la page de test de la directive de cloture de convention paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementEffetsAccepte {
    class PageDevClotureConventionPaiementEffetsAccepteControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Controleur pour la directive de cloture de convention paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementEffetsAccepte.Controleurs {
    class ClotureConventionPaiementEffetsAccepteControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private cloturerConventionPaiementEffetsAccepte(query);
    }
}

/**
 * Directive pour la cloture de convention de paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementEffetsAccepte.Directives {
    function mwClotureConventionPaiementEffetsAccepte(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour la cloture de convention paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementEffetsAccepte.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
