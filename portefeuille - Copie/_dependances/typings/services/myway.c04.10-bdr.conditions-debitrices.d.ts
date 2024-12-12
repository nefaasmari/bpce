
declare module ConditionsDebitrices {
    var app: any;
}

/***
 * Controleur de la directive conditions-arretes-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Classe de la directive
     */
    class ConditionsArretesDebitricesControleur {
        private $scope;
        private miseEnFormeDonneesService;
        static $inject: string[];
        infosGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        listeConditionsArretesDebitrices: any[];
        tableauConditionsDebitrices: MyWay.UI.ImwTableOptions;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, miseEnFormeDonneesService: Services.MiseEnFormeDonneesServiceDebitrice);
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
 * Controleur de la directive conditions-commissions-frais
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Classe de la directive
     */
    class ConditionsCommissionsFraisControleur {
        private $scope;
        private miseEnFormeDonneesService;
        static $inject: string[];
        infosGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale;
        listeConditionsCommissionsEtFrais: any[];
        tableauCommissionsEtFrais: MyWay.UI.ImwTableOptions;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, miseEnFormeDonneesService: Services.MiseEnFormeDonneesServiceDebitrice);
        /**
         * Méthode permettant de mettre en forme les données
         * @return void
         */
        miseEnFormeDonnees(): void;
        /**
         * Méthode permettant la construction du tableau des conditions de commissions et frais
         * @return void
         */
        construireTableauConditionsCommissionsEtFrais(): void;
    }
}

declare module ConditionsDebitrices {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ConditionsDebitrices {
}

declare module ConditionsDebitrices {
}

/***
 * Controleur de la directive mw-conditions-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Classe de la directive
     */
    class MwConditionsDebitricesControleur {
        private $scope;
        private serviceAgentExtended;
        private informationsGlobalesService;
        private listeDeviseService;
        static $inject: string[];
        parametresAppel: ComposantsCommunsConsultationCCE.Modeles.ComposantsCommuns.IParametresAppel;
        query: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery;
        informationsGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale;
        listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[];
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        indicateurRequeteEnCours: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService, listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService);
        /**
         * Méthode permettant de récuperer les informations globales utilisées dans toutes les pages
         * @return void
         */
        getInformationsGlobales(): void;
    }
}

declare module ConditionsDebitrices {
}

/***
 * Controleur de la page conditions-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Classe du controleur
     */
    class PageConditionsDebitricesControleur {
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
 * Controleur de la page dev-mw-conditions-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Classe du controleur
     */
    class PageDevMwConditionsDebitricesControleur {
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
 * Directive conditions-arretes-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwConditionsArretesDebitrices(): ng.IDirective;
}

/***
 * Directive conditions-commissions-frais
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwConditionsCommissionsFrais(): ng.IDirective;
}

/***
 * Directive mw-conditions-debitrices
 * @module ConditionsDebitrices
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwConditionsDebitrices(): ng.IDirective;
}

declare module ConditionsDebitrices {
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module ConditionsDebitrices.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices.Modeles {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

declare module ConditionsDebitrices {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

/***
 * Service de gestion de projet
 * @module ConditionsDebitrices.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConditionsDebitrices.Services {
    /**
     * Classe du service
     */
    class MiseEnFormeDonneesServiceDebitrice {
        private listeDeviseService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(listeDeviseService: ComposantsCommunsConsultationCCE.Services.ListeDeviseService);
        /**
         * Méthode permettant de mettre en forme les conditions débitrices et le condition débitrice par défaut pour les afficher ensemble dans un seul tableau
         * @param {ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale} informationsGlobales - infos globales
         * @param {ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[]} listeDevise - liste des devises
         * @return {ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IConditionDebitriceNegociee[]} le modèle de l'écran
         */
        miseEnFormeDonneesPourAffichageConditionsArretesDebitrices(informationsGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale, listeDevise: ComposantsCommunsConsultationCCE.Modeles.ListeDevise.IDevise[]): ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IConditionDebitriceNegociee[];
        /**
         * Méthode permettant la mise en forme des listes de commissions et frais pour les afficher dans le tableau
         * @param {ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale} informationsGlobales - infos globales
         * @return {ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.ICommissionFraisNegociee[]} le modèle de l'écran
         */
        miseEnFormeDonneesPourAffichageConditionsCommissionsFrais(informationsGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationGlobale): ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.ICommissionFraisNegociee[];
    }
}

declare module ConditionsDebitrices {
    function entete(): ng.IDirective;
}
