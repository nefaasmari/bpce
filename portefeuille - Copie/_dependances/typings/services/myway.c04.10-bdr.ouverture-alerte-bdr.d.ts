
declare module OuvertureAlerteBDR {
    var app: any;
}

declare module OuvertureAlerteBDR {
}

/**
 * Contrôleur de la page de tests de la directive mw-ouverture-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwOuvertureAlerteBDRControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        identifiantTiers: number;
        designationClient: string;
        nomTiersSignataire: string;
        prenomTiersSignataire: string;
        qualitePersonneSignataire: string;
        identifiantTiersSignataire: number;
        numeroOffreSouscrite: number;
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
 * Contrôleur de la directive mw-ouverture-alerte-bdr
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureAlerteBDR.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwOuvertureAlerteBDRControleur {
        private $scope;
        private serviceAgentExtended;
        private alerteBDRAlerteEcureuilProService;
        static $inject: string[];
        codeEtablissement: string;
        codeGuichet: string;
        identifiantTiers: number;
        designationClient: string;
        nomTiersSignataire: string;
        prenomTiersSignataire: string;
        qualitePersonneSignataire: string;
        identifiantTiersSignataire: number;
        numeroOffreSouscrite: number;
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
         * Méthode appelée pour la sauvegarde de l'ouverture de l'abonnement
         */
        sauvegarderOuvertureAbonnement(): void;
        miseEnFormeDonneesPourSauvegardeAlertes(objAlerteEcureuilPro: ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro): ComposantsCommunsAlerteBDR.Modeles.ServiceAlerteBDR.AlerteEcureuilPro.IAlerteEcureuilPro;
        /**
         * Méthode appelée pour l'impression de l'avenant de l'abonnement
         */
        imprimer(): void;
        /**
         * Méthode appelée pour l'annulation de l'ouverture de l'abonnement
         * Doit normalement être gérée par GGO
         */
        annuler(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de l'ouverture d'un abonnement Alerte Ecureuil
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureAlerteBDR.Directives {
    function mwOuvertureAlerteBDR(): ng.IDirective;
}
