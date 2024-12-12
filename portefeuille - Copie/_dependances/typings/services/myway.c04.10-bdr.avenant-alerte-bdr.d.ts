
declare module AvenantAlerteBDR {
    var app: any;
}

declare module AvenantAlerteBDR {
}

/**
 * Contrôleur de la page de tests de la directive mw-avenant-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwAvenantAlerteBDRControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant tiers de la personne
         */
        identifiantTiers: number;
        /**
         * Libellé entité titulaire
         */
        designationClient: string;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService);
        rafraichirData(): void;
        setJeuDonnees(id: number): void;
    }
}

/**
 * Contrôleur de la directive mw-avenant-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAvenantAlerteBDRControleur {
        private $scope;
        private serviceAgentExtended;
        private alerteBDRAlerteEcureuilProService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantTiers: number;
        designationClient: string;
        codeRecherche: ComposantsCommunsAlerteBDR.Enumerations.AlerteBDRCodeRechercheAlertesEnum;
        codeActionAbonnement: ComposantsCommunsAlerteBDR.Enumerations.AlerteBDRCodeActionAbonnementEnum;
        objAlerteEcureuilProTraite: ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        boutonValiderActif: boolean;
        boutonImprimerActif: boolean;
        authentification: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, alerteBDRAlerteEcureuilProService: ComposantsCommunsAlerteBDR.Services.IAlerteEcureuilProService);
        /**
         * Méthode pour la récupération de l'abonnement Alerte Ecureuil
         */
        recupererAbonnementAlerteBDR(): void;
        /**
         * Méthode appelée pour la sauvegarde de l'avenant de l'abonnement
         */
        sauvegarderAvenantAbonnement(): void;
        /**
         * Méthode appelée pour l'impression de l'avenant de l'abonnement
         */
        imprimer(): void;
        /**
         * Méthode appelée pour l'annulation de l'avenant de l'abonnement
         * Doit normalement être gérée par GGO
         */
        annuler(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de l'avenant d'un abonnement Alerte Ecureuil
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantAlerteBDR.Directives {
    function mwAvenantAlerteBDR(): ng.IDirective;
}
