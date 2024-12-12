
declare module AvenantSolProSms {
    var app: any;
}

declare module AvenantSolProSms {
}

/**
 * Contrôleur de la page de tests de la directive mw-avenant-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwAvenantSolProSmsControleur {
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
 * Contrôleur de la directive mw-avenant-sol-pro-sms
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProSms.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAvenantSolProSmsControleur {
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
         * Méthode pour récupérer la liste des porteurs du service SOL PRO SMS
         */
        recupererListePorteursSolProSms(): MyWay.Services.IPromesse<any>;
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
         * Méthode appelée pour mise en forme de la date existante au format JJ/MM/SSAA
         */
        mettreEnFormeDateExistante(date: string): string;
        /**
         * Méthode appelée pour la sauvegarde de l'avenant du service SOL PRO SMS
         */
        valider(): void;
        /**
         * Méthode appelée pour l'annulation de l'avenant de l'abonnement
         * Doit normalement être gérée par GGO
         */
        annuler(): void;
    }
}

/**
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de l'avenant d'un service SOL PRO SMS
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProSms.Directives {
    function mwAvenantSolProSms(): ng.IDirective;
}
