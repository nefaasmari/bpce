
declare module ClotureConventionPaiementSaufDesaccord {
    var app: any;
}

declare module ClotureConventionPaiementSaufDesaccord {
}

/**
 * Controleur pour la page de test de la directive de cloture de convention paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementSaufDesaccord {
    class PageDevClotureConventionPaiementSaufDesaccordControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Controleur pour la directive de cloture de convention paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementSaufDesaccord.Controleurs {
    class ClotureConventionPaiementSaufDesaccordControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private cloturerConventionPaiementSaufDesaccord(query);
    }
}

/**
 * Directive pour la cloture de convention de paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementSaufDesaccord.Directives {
    function mwClotureConventionPaiementSaufDesaccord(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour la cloture de convention paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ClotureConventionPaiementSaufDesaccord.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
