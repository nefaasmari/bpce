
declare module ConsultationDeiPP {
    var app: any;
}

/**
 * Contrôleur de la page d'avenant DEI PP
 * @author S0077536 (Arnaud Despalins)
 */
declare module ConsultationDeiPP {
    /**
     * Déclaration du contrôleur
     */
    class DeiPPConsultationControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Code établissement issu de LISA
         */
        codeEtablissement: string;
        /**
         * Numero personne issu de LISA
         */
        numeroPersonne: number;
        /**
         * Identifiant client issu de LISA
         */
        identifiantClient: string;
        requeteEnCours: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
    }
}

/**
 * Contrôleur de la partie header de la page de consultation dei pp
 * @author S0077482 (Thomas Prat)
 */
declare module ConsultationDeiPP {
    class HeaderControleur {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de quitter la consultation DEI PP via LISA
         * CODE DEBRANCHEMENT LISA -> 1
         * @return {void}
         */
        quitterDeiPP(): void;
    }
}

declare module ConsultationDeiPP {
}

/**
 * Contrôleur de la directive mw-consultation-dei-pp-controleur
 * @author S0077482 (Thomas Prat)
 */
declare module ConsultationDeiPP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwConsultationDeiPPControleur {
        private $scope;
        private $rootScope;
        private serviceAgentExtended;
        private tiersNoyauRestService;
        static $inject: string[];
        codeEtablissement: string;
        numeroPersonne: string;
        identifiantClient: string;
        codeServiceBad: string;
        codeNatureJuridique: ComposantsCommunsDeiPro.Enumerations.Rest.ContratBqdPro.Communs.CodeNatureJuridiqueEnum;
        libellePersonneMorale: string;
        /**
         * Indicateur de blocage de l'abonnement
         */
        private indicateurErreurBlocageAbonnement;
        /**
         * Indicateur de blocage du tiers noyau
         */
        private indicateurErreurBlocageTiersNoyau;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tiersNoyauRestService: ComposantsCommunsDeiPro.Services.Rest.Tiers.TiersNoyau.ITiersNoyauRestService);
        blocageAffichageContenuDirective(): boolean;
    }
}

/**
 * Directive pour la consultation de dei pp
 * @author S0077482 (Thomas Prat)
 */
declare module ConsultationDeiPP.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwConsultationDeiPp(): ng.IDirective;
}
