
declare module DatesValeur {
    var app: any;
}

/***
 * Controleur de la directive mw-dates-valeur
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Classe de la directive
     */
    class MwDatesValeurControleur {
        private $scope;
        private serviceAgentExtended;
        private baremeConditionEtablissementService;
        private dateValeurService;
        private informationsGlobalesService;
        static $inject: string[];
        indicateurRequeteEnCours: boolean;
        indicateurDonneesRecus: boolean;
        infosCompte: Modeles.IInformationsCompte;
        queryBaremeConditionEtablissement: ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement.IBaremeConditionEtablissementRestServiceGetQuery;
        queryDateValeur: ComposantsCommunsConsultationCCE.Modeles.DateValeur.IDateValeurRestServiceGetQuery;
        queryInfosGlobales: ComposantsCommunsConsultationCCE.Modeles.InformationsGlobales.IInformationsGlobalesRestServiceGetQuery;
        dateValeurDefaut: ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement.IDateValeurDefaut[];
        dateValeur: ComposantsCommunsConsultationCCE.Modeles.DateValeur.IDateValeur[];
        codeDateValeurCheque: string;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, baremeConditionEtablissementService: ComposantsCommunsConsultationCCE.Services.BaremeConditionEtablissementService, dateValeurService: ComposantsCommunsConsultationCCE.Services.DateValeurService, informationsGlobalesService: ComposantsCommunsConsultationCCE.Services.IInformationsGlobalesService);
        /**
         * Méthode permettant de récuperer les résultats des 2 services
         * @return void
         */
        getDonneesService(): void;
    }
}

/***
 * Controleur de la page dates-valeur
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Classe du controleur
     */
    class PageDatesValeurControleur {
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
         * @return {void}
         */
        recupererInformationsCompte(): void;
    }
}

/***
 * Controleur de la page dev-mw-dates-valeur
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Classe du controleur
     */
    class PageDevMwDatesValeurControleur {
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
 * Controleur de la directive tableau-dates-valeur
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Classe de la directive
     */
    class TableauDatesValeurControleur {
        private $scope;
        private serviceAgentExtended;
        private miseEnFormeDonneesService;
        static $inject: string[];
        dateValeur: ComposantsCommunsConsultationCCE.Modeles.DateValeur.IDateValeur[];
        dateValeurDefaut: ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement.IDateValeurDefaut[];
        codeDateValeurCheque: string;
        listeDateValeur: any[];
        tableauDateValeur: MyWay.UI.ImwTableOptions;
        libelleDateDeValeur: string;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, miseEnFormeDonneesService: Services.MiseEnFormeDonneesService);
        /**
         * Méthode permettant de mettre en forme les données
         * @return void
         */
        miseEnFormeDonnees(): void;
        /**
         * Méthode permettant la construction du tableau des dates de valeur
         * @return void
         */
        construireTableauDatesValeur(): void;
    }
}

/***
 * Directive mw-dates-valeur
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwDatesValeur(): ng.IDirective;
}

/***
 * Directive mw-tableau-conditions-creditrices
 * @module DatesValeur
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwTableauDatesValeur(): ng.IDirective;
}

/***
 * Ensemble d'énumérations concernant l'ecran des comptes fusionnés
 * @module ComptesFusionnes.Enumerations
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes.Enumerations {
    /**
     * Indicateur de fusion
     * Cet indicateur précise si le compte est fusionné en agio ou capital
     * 'O' Fusionné
     * 'N' Non fusionné
     */
    enum EcranFusionEnum {
        OUI,
        NON,
    }
    /**
     * Code type de fusion
     * Ce code permet de déterminer si un compte client est fusionné avec un autre compte
     * 'F' Fusionnant. Ce compte fusionne sur un autre compte
     * 'G' Support de fusion. Au moins un autre compte fusionne sur ce compte
     */
    enum CodeTypeFusionEnum {
        F,
        G,
    }
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module DatesValeur.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur.Modeles {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
}

/***
 * Service de gestion de projet
 * @module DatesValeur.Services
 * @author S0078068 (Yannis Vessereau)
 */
declare module DatesValeur.Services {
    /**
     * Classe du service
     */
    class MiseEnFormeDonneesService {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant la mise en forme des dates de valeur pour les afficher dans le tableau
         * @param {ComposantsCommunsConsultationCCE.Modeles.DateValeur.IDateValeur[]} dateValeur - liste de date de valeur
         * @param {ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement.IDateValeurDefaut[]} dateValeurDefaut - liste de date de valeur par défault
         * @return {any[]} le modèle de l'écran
         */
        miseEnFormeDonneesPourAffichageDatesValeur(dateValeur: ComposantsCommunsConsultationCCE.Modeles.DateValeur.IDateValeur[], dateValeurDefaut: ComposantsCommunsConsultationCCE.Modeles.BaremeConditionEtablissement.IDateValeurDefaut[]): any[];
        /**
         * Méthode permettant de récupérer les libellés opération des dates de valeurs
         * @param {string} typeOperation - type d'Opération
         * @param {string} codeProvenance - code de provenance
         * @param {string} typeProvenance - type de provenance
         * @return {string} la référence
         */
        getLibelleOperationDateDeValeur(typeOperation: string, codeProvenance: string, typeProvenance: string): string;
        /**
         * Méthode permettant de récupérer les libellés des types calendrier
         * @param {string} typeCalendrier - type de calendrier
         * @return {string} la référence
         */
        getLibelleTypeCalendrier(typeCalendrier: string): string;
        /**
         * Méthode permettant de récupérer les libellés des dates de valeurs appliquées
         * @param {string} typeValeurAppliquee - type de valeur appliquée
         * @return {string} la référence
         */
        getLibelleDateDeValeurAppliquee(typeValeurAppliquee: string): string;
    }
}
