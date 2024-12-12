
declare module OuvertureSolProCap {
    var app: any;
}

declare module OuvertureSolProCap {
}

/**
 * Contrôleur de la page de tests de la directive mw-ouverture-sol-pro-cap
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSolProCap.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwOuvertureSolProCapControleur {
        private $scope;
        private $timeout;
        static $inject: string[];
        codeEtablissement: string;
        identifiantTiers: number;
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
 * Contrôleur de la directive mw-ouverture-sol-pro-cap
 * @author S0080162 (François GALOPIN)
 */
declare module OuvertureSolProCap.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwOuvertureSolProCapControleur {
        private $scope;
        private serviceAgentExtended;
        private solProService;
        private porteurSolProService;
        private adresseService;
        private compteSupSecuraccesService;
        static $inject: string[];
        codeEtablissement: string;
        identifiantTiers: number;
        identifiantClient: string;
        designationClient: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        referenceExterneAgent: number;
        listePorteurs: any[];
        listeComptesSupports: any[];
        blocPorteur: any;
        listeBlocsPorteurs: any[];
        codeActionServiceSolPro: ComposantsCommunsSolPro.Enumerations.CodeActionServiceSolPro;
        indicateurRequeteReussie: boolean;
        indicateurRequeteEnCours: boolean;
        erreurRequete: MyWay.Services.Erreur;
        boutonValiderActif: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, solProService: ComposantsCommunsSolPro.Services.ISolProService, porteurSolProService: ComposantsCommunsSolPro.Services.IPorteurSolProService, adresseService: ComposantsCommunsSolPro.Services.IAdresseService, compteSupSecuraccesService: ComposantsCommunsSolPro.Services.ICompteSupSecuraccesService);
        /**
         * Méthode pour vérifier que le service SOL PRO CAP n'existe pas
         */
        verifierNonExistenceSolProCap(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer la liste des porteurs éligibles au service SOL PRO CAP
         */
        recupererListePorteursEligibles(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer l'adresse des porteurs éligibles au service SOL PRO CAP
         */
        recupererAdressePorteurEligible(porteur: any): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer la liste des comptes supports des porteurs éligibles au service SOL PRO CAP
         */
        recupererListeComptesSupportsPorteurEligible(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode appelée pour l'ajout d'un bloc Porteur
         */
        ajouterBlocPorteur(): void;
        /**
         * Méthode appelée pour la sauvegarde de l'ouverture du service SOL PRO CAP
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
declare module OuvertureSolProCap.Directives {
    function mwOuvertureSolProCap(): ng.IDirective;
}
