
declare module CashManagementCCE {
    var app: any;
}

declare module CashManagementCCE.Controleurs {
    class CashManagementControleur {
        private $scope;
        private serviceAgentExtended;
        private cashManagementService;
        static $inject: string[];
        private identifiantProduitService;
        codeActeGestion: string;
        private modeActionDirective;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        query: Modeles.ICashManagement;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, cashManagementService: Services.Rest.CashManagementService);
        private determinerMode(mode);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private miseEnGestionCashManagement(query);
    }
}

/**
 * Directive pour le Cash Management
 * @author S0077482 (Thomas PRAT)
 */
declare module CashManagementCCE.Directives {
    function mwCashManagement(): ng.IDirective;
}

/**
 * Controleur de la page de dev de la directive Cash Management
 * @module CashManagementCCE.Controleurs
 * @author S0077482 (Thomas PRAT)
 */
declare module CashManagementCCE.Controleurs {
    /**
     * Classe du controleur
     */
    class PageDevCashManagementControleur {
        static $inject: any[];
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        indicateurVueDirective: boolean;
        indicateurCasOuvertureOffreEnOuverture: boolean;
        indicateurDirectiveEnOuverture: boolean;
        modeActionOffre: string;
        modeActionDirective: string;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Methode appellée lors du changement de valeur du choix du mode d'action de l'offre : ouverture ou avenant
         */
        changeModeActionOffre(): void;
        /**
         * Methode appellée lors du changement de valeur du choix du mode d'action de la directive : ouverture ou cloture
         */
        changeModeActionDirective(): void;
        /**
         * Méthode permettant d'initialiser les données avec une offre en ouverture
         * @return void
         */
        initialiserDonneesAvecOffreEnOuverture(): void;
        /**
         * Méthode permettant d'initialiser les données avec une offre en avenant
         * @return void
         */
        initialiserDonneesAvecOffreEnAvenant(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
        /**
         * Méthode permettant la mise en gestion
         * @return void
         */
        executerMiseEnGestion(): void;
    }
}

/**
 * Ensemble d'énumérations pour le cash management
 * @author S0077482 (Thomas PRAT)
 */
declare module CashManagementCCE.Enumerations.Application {
    enum ModeAction {
        OUVERTURE,
        CLOTURE,
    }
}

declare module CashManagementCCE.Modeles {
    interface ICashManagement {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
    }
}

declare module CashManagementCCE.Services.Rest {
    interface ICashManagementService {
        ouvertureCashManagement: (cashManagement: Modeles.ICashManagement) => ng.IPromise<Modeles.ICashManagement>;
        supprimerCashManagement: (cashManagement: Modeles.ICashManagement) => ng.IPromise<Modeles.ICashManagement>;
        createQuery: (identifiantProduitService: number, modeActionDirective: string, contexteGGO: GestionGeneriqueOffres.Types.DonneesContextuelles) => ng.IPromise<Modeles.ICashManagement>;
    }
    class CashManagementService implements ICashManagementService {
        private $q;
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        createQuery(identifiantProduitService: number, modeActionDirective: string, contexteGGO: GestionGeneriqueOffres.Types.DonneesContextuelles): ng.IPromise<Modeles.ICashManagement>;
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        private creationQueryDepuisContexte(identifiantProduitService, contexteGGO, authentificationInfo, parametresComptables, modeActionDirective);
        /**
         * Methode d'appel POST
         */
        ouvertureCashManagement(cashManagement: Modeles.ICashManagement): ng.IPromise<Modeles.ICashManagement>;
        /**
         * Methode d'appel DELETE
         */
        supprimerCashManagement(cashManagement: Modeles.ICashManagement): ng.IPromise<{}>;
    }
}
