
declare module OuvertureConventionPaiementSaufDesaccord {
    var app: any;
}

declare module OuvertureConventionPaiementSaufDesaccord {
}

/**
 * Controleur pour la page de test de la directive de création de convention de paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementSaufDesaccord {
    class PageDevOuvertureConventionPaiementSaufDesaccordControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Controleur pour la directive de création de convention de paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementSaufDesaccord.Controleurs {
    class OuvertureConventionPaiementSaufDesaccordControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerConventionPaiementSaufDesaccord(query);
    }
}

/**
 * Directive pour la création de convention de paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementSaufDesaccord.Directives {
    function mwOuvertureConventionPaiementSaufDesaccord(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour l'ouverture de convention de paiement sauf desaccord
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementSaufDesaccord.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
