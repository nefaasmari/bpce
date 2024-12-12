
declare module ConditionsCreditrices {
    var app: any;
}

/***
 * Directive mw-conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwConditionsCreditrices(): ng.IDirective;
}

/***
 * Directive mw-tableau-conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwTableauConditionsCreditrices(): ng.IDirective;
}

/***
 * Controleur de la directive mw-conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Classe de la directive
     */
    class MwConditionsCreditricesControleur {
        private $scope;
        private serviceAgentExtended;
        private remunerationCceService;
        private listeDeviseService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        query: ComposantsCommunsConsultationCCE.Modeles.RemunerationCce.IRemunerationCceRestServiceGetQuery;
        remuneration: ComposantsCommunsConsultationCCE.Modeles.RemunerationCce.IRemuneration;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        indicateurRequeteEnCours: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, remunerationCceService: ComposantsCommunsConsultationCCE.Services.IRemunerationCceService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService);
        /**
         * Méthode permettant de récuperer la rémuneration cce utilisée dans toutes les pages
         * @return void
         */
        getRemunerationCce(): void;
    }
}

/***
 * Controleur de la page conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Classe du controleur
     */
    class PageConditionsCreditricesControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return void
         */
        recupererInformationsCompte(): void;
    }
}

/***
 * Controleur de la page dev-mw-conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Classe du controleur
     */
    class PageDevMwConditionsCreditricesControleur {
        private $scope;
        private serviceAgentExtended;
        private $timeout;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        indicateurVueFormulaire: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return void
         */
        recupererInformationsCompte(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
    }
}

/***
 * Controleur de la directive tableau-conditions-creditrices
 * @module ConditionsCreditrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices {
    /**
     * Classe de la directive
     */
    class TableauConditionsCreditricesControleur {
        private $scope;
        private miseEnFormeDonneesService;
        private listeDeviseService;
        static $inject: string[];
        infosRemuneration: ComposantsCommunsConsultationCCE.Modeles.RemunerationCce.IRemuneration;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        listeConditionsCreditrices: any[];
        tableauConditionsCreditrices: MyWay.UI.ImwTableOptions;
        infoDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, miseEnFormeDonneesService: ConditionsCreditrices.Services.MiseEnFormeDonneesServiceCreditrice, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService);
        /**
         * Méthode permettant de mettre en forme les données
         * @return void
         */
        miseEnFormeDonnees(): void;
        /**
         * Méthode permettant la construction du tableau des conditions d'arrêtés
         * @return void
         */
        construireTableauConditionsArretesDebitrices(): void;
    }
}

/***
 * Ensemble d'énumérations concernant l'ecran des conditions créditrices
 * @module ConditionsCreditrices.Enumerations
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices.Enumerations {
    /**
     * Indicateur conditions personnalisées
     * Cet indicateur précise si le client se voit appliqué des conditions de rémunération personnalisées.
     * 'O' Conditions personnalisée
     * 'N' Conditions standards
     */
    enum EcranConditionsPersoEnum {
        PERSONNALISEE,
        STANDARD,
    }
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module ConditionsCreditrices.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices.Modeles {
    /**
     * Interface des objets barème de l'application
     */
    interface IBaremeEcran {
        libelleBareme: string;
        dateFinCommercialisation: string;
        dateDebutApplication: string;
        dateFinApplication: string;
        nombrePaliers: number;
        listePalier: Array<IPalierEcran>;
        indicateurConditionsPersonnalisees: Enumerations.EcranConditionsPersoEnum;
        infoDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise;
    }
    /**
     * Interface des paliers utilisés pour les écrans
     */
    interface IPalierEcran {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        codeTaux: string;
        valeurTaux: number;
        variationMinimum: number;
        variationMaximum: number;
        variationClient: number;
        listeHistorique: Array<IPalierEcran>;
        dateFinValidite: string;
    }
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module ConditionsCreditrices.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices.Modeles {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantPersonne: number;
    }
}

/***
 * Service de gestion de projet
 * @module ConditionsCreditrices.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsCreditrices.Services {
    /**
     * Classe du service
     */
    class MiseEnFormeDonneesServiceCreditrice {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la mise en forme des listes de conditions créditrices pour les afficher dans le tableau
         * @param {ComposantsCommunsConsultationCCE.Modeles.RemunerationCce.IRemuneration} informationsRemuneration - infos de rémunération
         * @param {ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise} infoDevise - infos devise
         * @return {Modeles.IBaremeEcran[]} le modèle de l'écran
         */
        miseEnFormeDonneesPourAffichageConditionsCreditrices(informationsRemuneration: ComposantsCommunsConsultationCCE.Modeles.RemunerationCce.IRemuneration, infoDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise): Modeles.IBaremeEcran[];
    }
}
