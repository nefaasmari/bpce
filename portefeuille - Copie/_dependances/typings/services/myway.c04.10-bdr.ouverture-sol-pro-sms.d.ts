
declare module OuvertureSolProSms {
    var app: any;
}

declare module OuvertureSolProSms {
}

/**
 * Contrôleur de la page de tests de la directive mw-ouverture-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwOuvertureSolProSmsControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        identifiantClient: string;
        designationClient: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        referenceExterneAgent: number;
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
 * Contrôleur de la directive mw-ouverture-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwOuvertureSolProSmsControleur {
        private $scope;
        private serviceAgentExtended;
        private solProService;
        private porteurSolProService;
        private adresseService;
        private mediaService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantClient: string;
        designationClient: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        referenceExterneAgent: number;
        listePorteurs: any[];
        blocPorteur: any;
        listeBlocsPorteurs: any[];
        codeActionServiceSolPro: ComposantsCommunsSolPro.Enumerations.CodeActionServiceSolPro;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        boutonValiderActif: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, solProService: ComposantsCommunsSolPro.Services.ISolProService, porteurSolProService: ComposantsCommunsSolPro.Services.IPorteurSolProService, adresseService: ComposantsCommunsSolPro.Services.IAdresseService, mediaService: ComposantsCommunsSolPro.Services.IMediaService);
        /**
         * Méthode pour vérifier que le service SOL PRO SMS n'existe pas
         */
        verifierNonExistenceSolProSms(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer la liste des porteurs éligibles au service SOL PRO SMS
         */
        recupererListePorteursEligibles(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer l'adresse des porteurs éligibles au service SOL PRO SMS
         */
        recupererAdressePorteurEligible(porteur: any): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer le téléphone des porteurs éligibles au service SOL PRO SMS
         */
        recupererTelephonePorteurEligible(porteur: any): MyWay.Services.IPromesse<any>;
        /**
         * Méthode appelée pour l'ajout d'un bloc Porteur
         */
        ajouterBlocPorteur(): void;
        /**
         * Méthode appelée pour la sauvegarde de l'ouverture du service SOL PRO SMS
         */
        valider(): void;
        /**
         * Méthode appelée pour l'annulation de l'ouverture de l'abonnement
         * Doit normalement être gérée par GGO
         */
        annuler(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de l'ouverture d'un service SOL PRO SMS
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSolProSms.Directives {
    function mwOuvertureSolProSms(): ng.IDirective;
}
