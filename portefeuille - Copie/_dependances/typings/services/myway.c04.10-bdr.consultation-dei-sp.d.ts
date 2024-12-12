
declare module ConsultationDeiSP {
    var app: any;
}

/***
 * Service de la consultation DEI SP
 * @module ConsultationDeiSP
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationDeiSP {
    /**
     * Classe du service
     */
    class ConsultationDeiSPService {
        private serviceAgentExtended;
        private $location;
        private $q;
        private $rootScope;
        private tiersNoyauRestService;
        static $inject: string[];
        private donnees;
        private donneesDejaRecuperees;
        private tiersNoyauDejaAppele;
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        libellePersonneMorale: string;
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $q: ng.IQService, $rootScope: ng.IRootScopeService, tiersNoyauRestService: ComposantsCommunsDeiPro.Services.Rest.Tiers.TiersNoyau.ITiersNoyauRestService);
        /**
         * Méthode permettant de récupérer les données et de les renvoyer
         * @return {ng.IPromise<any>} Une promesse contenant le tableau de données
         */
        getDonnees(): ng.IPromise<any>;
        /**
         * Renvoie une liste d'éléments du contexte myway sous une forme plus exploitable que celle du framework client
         */
        getListFromContext(keys: string[]): ng.IPromise<{
            [key: string]: any;
        }>;
        /**
         * Méthode permettant de récupérer le libellé personne morale
         * @return {ng.IPromise<any>} Une promesse contenant le libellé personne morale
         */
        getLibellePersonneMoralee(): ng.IPromise<any>;
        /**
         * Méthode permettant de récupérer le code nature juridique
         * @return {ng.IPromise<any>} Une promesse contenant le code nature juridique
         */
        getCodeNatureJuridique(): ng.IPromise<any>;
        /**
         * Méthode permettant de récupérer les données du Tiers noyau
         * @return {ng.IPromise<any>} Une promesse
         */
        private getTiersNoyau();
    }
}

/**
 * Contrôleur de la page de consultation DEI SP
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationDeiSP {
    /**
     * Déclaration du contrôleur
     */
    class DeiSPConsultationControleur {
        private $scope;
        private consultationDeiSPService;
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Code établissement issu du contexte GGO/Contexte
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu du contexte GGO/Contexte
         */
        identifiantClient: string;
        /**
         * Identifiant de la personne issu du contexte GGO/Contexte
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu du contexte GGO/Contexte
         */
        libellePersonneMorale: string;
        /**
         * Nature juridique issu du contexte GGO/Contexte
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant tiers issu du contexte GGO/Contexte
         */
        identifiantTiers: number;
        /**
         * Le code service Banque à Distance du projet
         */
        codeServiceBad: string;
        donneesChargees: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, consultationDeiSPService: ConsultationDeiSPService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
    }
}

/**
 * Controleur de la partie Header de la SPA Consultation DEI SP
 * @module ConsultationDeiSP
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module ConsultationDeiSP {
    class HeaderControleur {
        private serviceAgentExtended;
        static $inject: string[];
        donnees: any;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de quitter la consultation SOL PRO Cap via LISA
         * CODE DEBRANCHEMENT LISA -> 1
         * @return {void}
         */
        quitterConsultationCcie(): void;
    }
}

/**
 * Contrôleur de la directive mw-dei-sp-consultation
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationDeiSP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwDeiSpConsultationControleur {
        private $scope;
        private $rootScope;
        static $inject: string[];
        /**
         * Code établissement issu de la directive
         */
        codeEtablissement: string;
        /**
         * Identifiant client issu de la directive
         */
        identifiantClient: string;
        /**
         * Identifiant de la personne issu de la directive
         */
        identifiantPersonne: number;
        /**
         * Libellé de la personne morale issu de la directive
         */
        libellePersonneMorale: string;
        /**
         * Nature juridique issu de la directive
         */
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        /**
         * Identifiant tiers issu de la directive
         */
        identifiantTiers: number;
        /**
         * Le code service Banque à Distance du projet issu de la directive
         */
        codeServiceBad: string;
        /**
         * Indicateur de blocage de l'abonnement
         */
        private indicateurErreurBlocageAbonnement;
        /**
         * Indicateur de lecture seule de la page
         */
        lectureSeule: boolean;
        /**
         * L'objet erreur contenant les informations
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService);
        /**
         * Méthode qui déclenche le chargement des informations venant du portail et de GGO
         */
        chargerConsultationDeiSP(): void;
        /**
         * Méthode pour le rechargement des requêtes de la directive
         */
        rechargerDirective(): void;
    }
}

/**
 * Directive pour la gestion de l'affichage de la page de consultation DEI SP
 * @author S0078068 (Yannis Vessereau)
 */
declare module ConsultationDeiSP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwDeiSpConsultation(): ng.IDirective;
}
