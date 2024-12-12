
declare module AvenantSolProCap {
    var app: any;
}

declare module AvenantSolProCap {
}

/**
 * Contrôleur de la page de tests de la directive mw-avenant-sol-pro-cap
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProCap.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwAvenantSolProCapControleur {
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
 * Contrôleur de la directive mw-avenant-sol-pro-cap
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProCap.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAvenantSolProCapControleur {
        private $scope;
        private serviceAgentExtended;
        private solProService;
        private porteurSolProService;
        private adresseService;
        private compteSupSecuraccesService;
        private contratCarteRechercheService;
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
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, solProService: ComposantsCommunsSolPro.Services.ISolProService, porteurSolProService: ComposantsCommunsSolPro.Services.IPorteurSolProService, adresseService: ComposantsCommunsSolPro.Services.IAdresseService, compteSupSecuraccesService: ComposantsCommunsSolPro.Services.ICompteSupSecuraccesService, contratCarteRechercheService: ComposantsCommunsSolPro.Services.IContratCarteRechercheService);
        /**
         * Méthode pour récupérer la liste des porteurs du service SOL PRO CAP
         */
        recupererListePorteursSolProCap(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer la liste des porteurs éligibles au service SOL PRO CAP
         */
        recupererListePorteursEligibles(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer l'adresse des porteurs du service SOL PRO CAP
         */
        recupererAdressePorteur(porteur: any): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour vérifier la détention d'une carte Securacces service SOL PRO CAP
         */
        verifierDetentionCarteSecuracces(porteur: any): MyWay.Services.IPromesse<any>;
        /**
         * Méthode pour récupérer la liste des comptes supports des porteurs éligibles au service SOL PRO CAP
         */
        recupererListeComptesSupportsPorteurEligible(): MyWay.Services.IPromesse<any>;
        /**
         * Méthode appelée pour mise en forme de la date existante au format JJ/MM/SSAA
         */
        mettreEnFormeDateExistante(date: string): string;
        /**
         * Méthode appelée pour l'ajout d'un bloc Porteur
         */
        ajouterBlocPorteur(): void;
        /**
         * Méthode appelée pour la sauvegarde de l'avenant du service SOL PRO CAP
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
 * Directive pour l'affichage de la page des alertes BDR dans le cadre de l'avenant d'un service SOL PRO CAP
 * @author S0080162 (François GALOPIN)
 */
declare module AvenantSolProCap.Directives {
    function mwAvenantSolProCap(): ng.IDirective;
}
