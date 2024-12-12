
declare module OuvertureRMP {
    var app: ng.IModule;
}

/**
 * Contrôleur de la navigation pour l'application Ouverture-RMP
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
}

/**
 * Contrôleur de la page de tests de la directive mw-rmp-ouverture
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwRmpOuvertureControleur {
        private $scope;
        private $timeout;
        private serviceAgentExtended;
        private mwNotificationService;
        private modaleService;
        static $inject: string[];
        /**
         * Contexte GGO
         */
        donneesContextuellesProduitService: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Code guichet interbancaire
         */
        codeGuichet: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du GCE
         */
        numeroCompte: string;
        /**
         * Numéro de personne
         */
        identifiantTiers: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Indicateur d'affichage de la directive
         */
        indicateurVueDirective: boolean;
        constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, modaleService: MyWay.UI.ModalService);
        rafraichirData(): void;
        setJeuDonnees(id: number): void;
        /**
         * Méthode permettant la mise en gestion
         * @return void
         */
        executerMiseEnGestion(): void;
    }
}

/**
 * Contrôleur de la page de tests de la directive mw-rmp-ouverture-liste
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwRmpOuvertureListeControleur {
        constructor();
    }
}

/**
 * Contrôleur de la page de tests de la directive mw-rmp-ouverture-nouveau
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class PageDevMwRmpOuvertureNouveauControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

/**
 * Contrôleur de la directive mw-rmp-ouverture
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRmpOuvertureControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private tableauItemService;
        static $inject: string[];
        /**
         * Contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Code de l'établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte du CCE créé
         */
        numeroCompteCCE: string;
        /**
         * Identifiant tiers
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement.
         * Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Liste des relevés multi-produit
         */
        listeReleve: Array<ComposantsCommunsRMP.Services.IMwTableauRmpItem>;
        /**
         * Indicateur de réussite de la requête Rest de recherche de la liste des RMP
         */
        indicateurRequeteReussie: boolean;
        /**
         * Indicateur de fin de la requête Rest de recherche de la liste des RMP
         */
        indicateurRequeteTerminee: boolean;
        /**
         * Objet d'erreur dans le cas de l'échec de la requête Rest de recherche de la liste des RMP
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Indicateur si la liste des relevés est vide ou non
         */
        indicateurFormulaireNouveauReleve: boolean;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, tableauItemService: ComposantsCommunsRMP.Services.IRmpProfessionnelTableauItemService);
        /**
         * Méthode pour l'initialisation
         */
        private init();
        /**
         * Méthode pour la récupération de la liste des relevés
         */
        recupererListeReleve(): void;
        /**
         * Variable permettant de lancer la mise en gestion depuis GGO: coquille vide pour ce service
         */
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
    }
}

/**
 * Directive pour l'affichage de la liste des RMP dans le cas d'une ouverture d'une offre CCE.
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Directives {
    function mwRmpProOuverture(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-rmp-ouverture-liste
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRmpOuvertureListeControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelTableauItemService;
        private erreurService;
        private modalService;
        static $inject: string[];
        /**
         * Liste des relevés
         */
        listeReleve: Array<ComposantsCommunsRMP.Services.IMwTableauRmpItem>;
        /**
         * Numéro de compte du CCE créé
         */
        numeroCompteCCE: string;
        /**
         * Identifiant tiers
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement.
         * Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Relevé sélectionné
         */
        releveSelectionne: ComposantsCommunsRMP.Services.IMwTableauRmpItem;
        /**
         * Indicateur d'état du bouton de rattachement
         */
        private indicateurRattachementPossible;
        /**
         * Indicateur d'état du bouton de détachement
         */
        private indicateurDetachementPossible;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelTableauItemService: ComposantsCommunsRMP.Services.IRmpProfessionnelTableauItemService, erreurService: ComposantsCommunsRMP.Services.IErreurService, modalService: MyWay.UI.ModalService);
        /**
         * Méthode pour le rattachement du compte au relevé sélectionné
         */
        rattacherCompte(): void;
        /**
         * Méthode pour le détachement du compte au relevé sélectionné
         */
        detacherCompte(): void;
        /**
         * Méthode pour l'envoi de l'évènement de création d'un nouveau relevé
         */
        ajouterNouveauReleve(): void;
    }
}

/**
 * Directive pour l'affichage de la liste des RMP dans le cas d'une ouverture d'une offre CCE.
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Directives {
    function mwRmpOuvertureListe(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-rmp-ouverture-nouveau
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRmpOuvertureNouveauControleur extends ComposantsCommunsRMP.Controleurs.MwRmpFormulaireNouveauControleur {
        protected $scope: ng.IScope;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected releveService: ComposantsCommunsRMP.Services.IRmpProfessionnelReleveService;
        protected produitService: ComposantsCommunsRMP.Services.IRmpProfessionnelProduitService;
        protected erreurService: ComposantsCommunsRMP.Services.IErreurService;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, releveService: ComposantsCommunsRMP.Services.IRmpProfessionnelReleveService, produitService: ComposantsCommunsRMP.Services.IRmpProfessionnelProduitService, erreurService: ComposantsCommunsRMP.Services.IErreurService);
        /**
         * Méthode appelée lors de la validation du formulaire de création du relevé
         */
        validerCreationReleve(): void;
        /**
         * Méthode appelé pour l'annulation
         * @deprecated Doit normalement être géré par GGO
         */
        annulerCreationReleve(): void;
    }
}

/**
 * Directive pour l'affichage de la page d'un nouveau RMP dans le cas d'une ouverture d'un CCE.
 * @author S0076471 (Grégory Barale)
 */
declare module OuvertureRMP.Directives {
    function mwRmpOuvertureNouveau(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-rmp-ouverture-nouveau-modale
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module OuvertureRMP.Controleurs {
    interface IModalOuvertureNouveauScope extends ng.IScope {
        ouvertureNouveauModaleCtrl: IModalOuvertureNouveauControleur;
    }
    interface IModalOuvertureNouveauControleur {
        modalDatas: any;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwRmpOuvertureNouveauModaleControleur {
        protected $scope: IModalOuvertureNouveauScope;
        protected $rootScope: ng.IRootScopeService;
        protected $modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        protected data: any;
        static $inject: string[];
        modalDatas: any;
        constructor($scope: IModalOuvertureNouveauScope, $rootScope: ng.IRootScopeService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any);
        ok(): void;
        close(): void;
    }
}
