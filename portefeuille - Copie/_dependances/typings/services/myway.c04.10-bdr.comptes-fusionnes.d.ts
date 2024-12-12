
declare module ComptesFusionnes {
    var app: any;
}

/***
 * Controleur de la directive mw-comptes-fusionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Classe de la directive
     */
    class MwComptesFusionnesControleur {
        private $scope;
        private serviceAgentExtended;
        private fusionAgioCapitalService;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        queryAgios: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapitalRestServiceGetQuery;
        queryCapital: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapitalRestServiceGetQuery;
        fusionAgio: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital;
        fusionCapital: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        indicateurRequeteEnCours: boolean;
        indicateurDonneesRecus: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, fusionAgioCapitalService: ComposantsCommunsConsultationCCE.Services.IFusionAgioCapitalService);
        /**
         * Méthode permettant de récuperer les comptes fusionnés (agios et capital)
         * @return void
         */
        getFusionAgioCapital(): void;
    }
}

/***
 * Controleur de la directive onglet-comptes-fussionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Classe de la directive
     */
    class OngletComptesFusionnesControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        fusionAgio: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital;
        listeAgios: Modeles.ICompteFusionneEcran[];
        tableauAgios: MyWay.UI.ImwTableOptions;
        indicateurAffichageAgio: boolean;
        fusionCapital: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital;
        listeCapital: Modeles.ICompteFusionneEcran[];
        tableauCapital: MyWay.UI.ImwTableOptions;
        indicateurAffichageCapital: boolean;
        infosCompte: Modeles.IInformationsCompte;
        numeroComptePrincipal: string;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de mettre en forme les données
         * @param {ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital} listeFusion - liste de fusion
         * @return {Modeles.ICompteFusionneEcran[]} La liste de mise en forme du modèle écran
         */
        miseEnFormeDonnees(listeFusion: ComposantsCommunsConsultationCCE.Modeles.FusionAgioCapital.IFusionAgioCapital): Modeles.ICompteFusionneEcran[];
        /**
         * Méthode permettant de determiner des indicateurs
         * @return void
         */
        determinerIndicateur(): void;
        /**
         * Méthode permettant de construire un tableau d'agios
         * @return void
         */
        construireTableauAgios(): void;
        /**
         * Méthode permettant de construire un tableau de capital
         * @return void
         */
        construireTableauCapital(): void;
    }
}

/***
 * Controleur de la page comptes-fusionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Classe du controleur
     */
    class PageComptesFusionnesControleur {
        private $scope;
        private serviceAgentExtended;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return void
         */
        recupererInformationsCompte(): void;
    }
}

/***
 * Controleur de la page dev-mw-comptes-fusionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Classe du controleur
     */
    class PageDevMwComptesFusionnesControleur {
        private $scope;
        private serviceAgentExtended;
        private $timeout;
        static $inject: string[];
        infosCompte: Modeles.IInformationsCompte;
        indicateurVueDirective: boolean;
        indicateurVueFormulaire: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService);
        /**
         * Méthode permettant de récupérer les informations du compte
         * @return void
         */
        recupererInformationsCompte(): void;
        /**
         * Méthode permettant d'exécuter la directive
         * @return void
         */
        executerDirective(): void;
    }
}

/***
 * Ensemble d'énumérations concernant l'ecran des comptes fusionnés
 * @module ComptesFusionnes.Enumerations
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes.Enumerations {
    /**
     * Indicateur de fusion
     * Cet indicateur précise si le compte est fusionné en agio ou capital
     * 'O' Fusionné
     * 'N' Non fusionné
     */
    enum EcranFusionEnum {
        OUI,
        NON,
    }
    /**
     * Code type de fusion
     * Ce code permet de déterminer si un compte client est fusionné avec un autre compte
     * 'F' Fusionnant. Ce compte fusionne sur un autre compte
     * 'G' Support de fusion. Au moins un autre compte fusionne sur ce compte
     */
    enum CodeTypeFusionEnum {
        F,
        G,
    }
}

/***
 * Directive mw-comptes-fusionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwComptesFusionnes(): ng.IDirective;
}

/***
 * Directive onglet-comptes-fusionnes
 * @module ComptesFusionnes
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwOngletComptesFusionnes(): ng.IDirective;
}

/***
 * Ensemble d'interfaces de modèles du projet
 * @module ComptesFusionnes.Modeles
 * @author S0078068 (Yannis Vessereau)
 */
declare module ComptesFusionnes.Modeles {
    interface IInformationsCompte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
    }
    interface ICompteFusionneEcran {
        compteRattache: string;
        fusion: Enumerations.EcranFusionEnum;
    }
}
