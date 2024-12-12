
declare module OuvertureConventionPaiementEffetsAccepte {
    var app: any;
}

declare module OuvertureConventionPaiementEffetsAccepte {
}

/**
 * Controleur pour la page de test de la directive de création de convention de paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementEffetsAccepte {
    class PageDevOuvertureConventionPaiementEffetsAccepteControleur {
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        constructor();
        initialiserDonnees(): void;
        executerDirective(): void;
        executerMiseEnGestion(): void;
    }
}

/**
 * Controleur pour la directive de création de convention de paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementEffetsAccepte.Controleurs {
    class OuvertureConventionPaiementEffetsAccepteControleur {
        private serviceAgentExtended;
        private miseEnGestionPSExterneService;
        static $inject: string[];
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: ComposantsCommunsProduitsNonGeres.Modeles.ServiceOffre.MiseEnGestionPSExterne.IMiseEnGestionPSExterneServicePostQuery;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnGestionPSExterneService: ComposantsCommunsProduitsNonGeres.Services.IMiseEnGestionPSExterneService);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerConventionPaiementEffetsAccepte(query);
    }
}

/**
 * Directive pour la création de convention de paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementEffetsAccepte.Directives {
    function mwOuvertureConventionPaiementEffetsAccepte(): ng.IDirective;
}

/**
 * Ensemble d'énumérations pour l'ouverture de convention de paiement effets accepte
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureConventionPaiementEffetsAccepte.Enumerations.Application {
    enum LibelleMessageCreationProduits {
        SUCCES,
        ECHEC,
    }
}
