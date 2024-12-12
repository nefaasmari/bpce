
declare module ComposantsCommunsRemunerationCCE {
    var app: ng.IModule;
}

/**
 * Ensemble de filtre pour la manipulation des dates
 */
declare module ComposantsCommunsRemunerationCCE.Filtres {
}

/**
 * Ensemble de filtre pour la manipulation des montants des bornes
 */
declare module ComposantsCommunsRemunerationCCE.Filtres {
}

/**
 * Filtre pour le bon affichage du taux à l'écran
 */
declare module ComposantsCommunsRemunerationCCE.Filtres {
}

/**
 * Ensemble de filtres utilitaires pour l'application
 */
declare module ComposantsCommunsRemunerationCCE.Filtres {
}

/**
 * Contrôleur de la modale mw-remuneration-cce-modale-modification
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceModaleModificationControleur {
        private $scope;
        private $rootScope;
        private $modalInstance;
        private baremeEcran;
        private indicateurCreationBareme;
        static $inject: string[];
        /**
         * Indicateur de modification des propriétés des paliers
         */
        private indicateurModificationPalier;
        /**
         * Indicateur de la validité de la date de prise d'effet
         */
        private indicateurValiditeDatePriseEffet;
        /**
         * Message affiché dans le cas de non validité de la date de prise d'effet
         */
        private messageErreurValiditeDatePriseEffet;
        /**
         * Indicateur de la validité de la date de fin d'effet
         */
        private indicateurValiditeDateFinEffet;
        /**
         * Message affiché dans le cas de non validité de la date de fin d'effet
         */
        private messageErreurValiditeDateFinEffet;
        /**
         * Contrôleur du formulaire de modification
         */
        private formulaireModificationCtrl;
        /**
         * Indicateur d'affichage de la synthèse des erreurs
         */
        private indicateurAffichageSynthese;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, baremeEcran: Modeles.Application.IBaremeEcran, indicateurCreationBareme: boolean);
        /**
         * Fonction pour la validation du barème sélectionné
         */
        validerModificationBareme(): void;
        /**
         * Fonction pour l'annulation de la sélection d'un barème
         */
        annulerModificationBareme(): void;
        /**
         * Méthode pour la vérification des valeurs des dates de prise et de fin d'effet
         */
        private verifierDateEffet();
    }
}

/**
 * Contrôleur de la modale mw-remuneration-cce-modale-selection
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceModaleSelectionControleur {
        private $scope;
        private $modalInstance;
        private baremeService;
        private listeBaremeSelection;
        private bareme;
        /**
         * L'objet IBaremeModale sélectionné
         */
        baremeSelectionne: Modeles.Application.IBaremeEcran;
        /**
         * Liste des colonnes du tableau
         */
        private listeTableauColonne;
        /**
         * Liste des éléments du tableau
         */
        private listeTableauItem;
        currentPage: number;
        itemPerPage: number;
        /**
         * Indicateur de sélection d'un barème
         */
        private indicateurBaremeSelectionne;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, baremeService: Services.IBaremeService, listeBaremeSelection: Array<Modeles.Application.IBaremeEcran>, bareme: Modeles.Application.IBaremeEcran);
        /**
         * Méthode pour la gestion du clic sur un item du tableau
         */
        private onClickItem(itemSelectionne);
        trierColonne(colonneTrie: Modeles.Application.IRemunerationCceColonneItem): void;
        /**
         * Fonction pour la validation du barème sélectionné
         */
        validerSelectionBareme(): void;
        /**
         * Fonction pour l'annulation de la sélection d'un barème
         */
        annulerSelectionBareme(): void;
    }
}

/**
 * Contrôleur racine des contrôleurs des directives mw-remuneration-cce-ouverture et mw-remuneration-cce-avenant
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceRootControleur {
        protected $scope: ng.IScope;
        protected $rootScope: ng.IRootScopeService;
        protected remunerationCacheService: Services.IRemunerationCacheService;
        protected remunerationCceRestService: Services.IRemunerationCceRestService;
        protected remunerationService: Services.IRemunerationService;
        protected baremeService: Services.IBaremeService;
        protected gestionModaleService: Services.IGestionModaleService;
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
        numeroCompte: string;
        /**
         * Identifiant tiers
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement.
         * Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffre: number;
        /**
         * Indicateur indiquant si l'on se trouve dans une situation
         */
        indicateurAffichageBaremeDefaut: boolean;
        /**
         * Indicateur indiquant qu'une modale est en court de chargement
         */
        indicateurChargementModale: boolean;
        /**
         * Rémunération de l'utilisateur
         */
        remuneration: Modeles.ContratCceService.RemunerationCce.IRemuneration;
        /**
         * Liste des barèmes du tableau de barèmes
         */
        listeBareme: Array<Modeles.Application.IBaremeEcran>;
        /**
         * Le barème sélectionné au niveau du tableau
         */
        baremeSelectionne: Modeles.Application.IBaremeEcran;
        /**
         * Objet pour la getion de l'affichage des boutons
         */
        donneesBtn: Controleurs.IAffichageBtnData;
        /**
         * Indicateur d'une requête REST en cours
         */
        indicateurRequeteEnCours: boolean;
        /**
         * Méthode à appeler dans le cadre d'une modification
         */
        callbackModifier: Function;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, remunerationCacheService: Services.IRemunerationCacheService, remunerationCceRestService: Services.IRemunerationCceRestService, remunerationService: Services.IRemunerationService, baremeService: Services.IBaremeService, gestionModaleService: Services.IGestionModaleService);
        /**
         * Méthode pour la mise à jour de l'affichage des boutons
         */
        protected mettreAjourAffichageBouton(): void;
        /**
         * Méthode pour la gestion des indicateurs d'activation des boutons
         */
        protected mettreAjourActivationBouton(): void;
        /**
         * Méthode pour la récupération de la rémunération
         */
        protected recupererRemuneration(): void;
        /**
         * Méthode pour l'initialisation de l'ajout d'un barème
         */
        protected initialiserAjoutBareme(): void;
        /**
         * Méthode pour l'initialisation de la modification d'un barème
         */
        protected initialiserModificationBareme(): void;
        /**
         * Méthode pour la création d'un barème
         * @param {Modeles.Application.IBaremeEcran} bareme - Le barème à créer
         */
        protected creerBareme(bareme: Modeles.Application.IBaremeEcran): void;
        /**
         * Méthode pour la modification d'un barème
         * @param {Modeles.Application.IBaremeEcran} bareme - Le barème à modifier
         */
        protected modifierBareme(bareme: Modeles.Application.IBaremeEcran): void;
        /**
         * Méthode pour la suppression d'un barème
         */
        protected supprimerBareme(): void;
    }
}

declare module ComposantsCommunsRemunerationCCE {
    class DefautControleur {
        private $scope;
        static $inject: string[];
        constructor($scope: ng.IScope);
    }
}

declare module ComposantsCommunsRemunerationCCE {
}

/**
 * Directive pour le scroll+focus d'un élément (utilisé dans le cadre de la synthèse des erreurs)
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    /**
     * Déclaration du constructeur de la directive
     */
    function focusSyntheseErreur($exceptionHandler: ng.IExceptionHandlerService): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-remuneration-cce-affichage-btn
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Interface des indicateurs de l'un des boutons de la directive
     */
    interface IBtnData {
        indicateurAffichage: boolean;
        indicateurActivation: boolean;
    }
    /**
     * Interface des indicateurs de l'ensemble des boutons de la directive
     */
    interface IAffichageBtnData {
        dataValider: IBtnData;
        dataRemplacer: IBtnData;
        dataModifier: IBtnData;
        dataSupprimer: IBtnData;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceAffichageBtnControleur {
        private $scope;
        static $inject: string[];
        /**
         * Indicateurs de l'ensemble des boutons de la directive
         */
        affichageBtnData: IAffichageBtnData;
        constructor($scope: ng.IScope);
    }
}

/**
 * Directive pour la gestion de l'affichage du Set de boutons des pages de tableau de barème
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwRemunerationCceAffichageBtn(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-remuneration-cce-palier-item
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCcePalierItemControleur {
        private $scope;
        static $inject: string[];
        /**
         * Palier à afficher
         */
        palier: Modeles.Application.IPalierEcran;
        /**
         * Indicateur de modification possible
         */
        indicateurModification: boolean;
        /**
         * Indicateur renseignant sur la position du palier dans le barème
         */
        indicateurMontantSuperieurModifiable: boolean;
        /**
         * Indicateur renseignant sur la possibilité de modifier la variation
         */
        indicateurVariationModifiable: boolean;
        /**
         * Contrôleur du formulaire du palier
         */
        formulairePalierCtrl: Modeles.Application.IFormulairePalierCtrl;
        /**
         * Indicateur de validité de saisie de la variation client
         */
        private indicateurVariationClientValide;
        /**
         * Indicateur de validité du format de la saisie de la variation client
         */
        private indicateurFormatVariationFaux;
        /**
         * Indicateur de validité du montant
         */
        private indicateurBorneSuperieureValide;
        /**
         * Message d'erreur en cas de mauvaise saisie de la variation client
         */
        private messageErreurVariationClient;
        /**
         * Message d'erreur en cas de mauvaise saisie de la variation client
         */
        private messageErreurFormatVariation;
        /**
         * Message d'erreur en cas de mauvaise saisie de la borne supérieure
         */
        private messageErreurBorneSuperieure;
        constructor($scope: ng.IScope);
        /**
         * Méthode pour la vérification de la valeur de la variation de la variation client
         */
        verifierVariationClient(): void;
        /**
         * Méthode pour la vérification de l'ordre des montants du palier
         * @return {boolean} Booléen indiquant la validité du montant de la borne supérieure
         */
        verifierBorneSuperieur(composantDeviseCtrl: ng.INgModelControllerExtended): boolean;
        /**
         * Méthode pour la gestion des paramètres suite à la saisie d'une mauvaise valeur de la borne supérieure
         * @param {boolean} indicateurValidite - Indicateur de la validité de la valeur
         * @param {ng.INgModelControllerExtended} composantDeviseCtrl - Le contrôleur du champs de l'élément Devise Montant du socle fonctionnel
         * @param {string} messageErreur - Message à afficher à l'écran
         * @param {string} cleErreur - Clé de l'erreur angular associée au formulaire
         */
        private gererErreurBorneSuperieure(indicateurValidite, composantDeviseCtrl, messageErreur, cleErreur);
    }
}

/**
 * Directive pour l'affichage d'un palier d'un barème
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    interface IMwRemunerationCcePalierItemScope extends ng.IScope {
        mwRemunerationCcePalierItemCtrl: Controleurs.MwRemunerationCcePalierItemControleur;
    }
    /**
     * Déclarion du constructeur de la directive
     */
    function mwRemunerationCcePalierItem(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-remuneration-cce-palier-liste
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCcePalierListeControleur {
        private $scope;
        private palierService;
        static $inject: string[];
        /**
         * Liste des paliers issu du service Rest
         */
        listePalier: Array<Modeles.Application.IPalierEcran>;
        /**
         * Indicateur de modification possible
         */
        indicateurModification: boolean;
        /**
         * Indicateur de tri par validité de date
         */
        triValiditeActuelle: boolean;
        constructor($scope: ng.IScope, palierService: Services.IPalierService);
    }
}

/**
 * Directive pour l'affichage d'une liste de paliers d'un barème
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwRemunerationCcePalierListe(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-remuneration-cce-synthese-erreur
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceSyntheseErreurControleur {
        private $scope;
        private $rootScope;
        private $window;
        static $inject: string[];
        /**
         * Formulairede modification du barème
         */
        formulaireCtrl: Modeles.Application.IFormulaireModificationCtrl;
        /**
         * Indicateur d'affichage de la synthèse
         */
        indicateurAffichage: boolean;
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $window: ng.IWindowService);
    }
}

/**
 * Directive pour l'affichage de la synthèse des erreurs dans la modale de modification d'un barème
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    /**
     * Déclaration du constructeur de la directive
     */
    function mwRemunerationCceSyntheseErreur(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-remuneration-cce-tableau
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRemunerationCceTableauControleur {
        private $scope;
        static $inject: string[];
        /**
         * Liste des barèmes de l'utilisateur
         */
        listeBareme: Array<Modeles.Application.IBaremeEcran>;
        /**
         * Bareme sélectionné par le tableau
         */
        baremeSelectionne: Modeles.Application.IBaremeEcran;
        /**
         * Liste des colonnes du tableau
         */
        private listeTableauColonne;
        /**
         * Liste des éléments du tableau
         */
        private listeTableauItem;
        currentPage: number;
        itemPerPage: number;
        constructor($scope: ng.IScope);
        /**
         * Méthode pour la gestion du clic sur un item du tableau
         * @param {Modeles.Application.IRemunerationCceTableauItem} itemSelectionne - L'item sur lequel au eu lieu le clic
         */
        private onClickItem(itemSelectionne);
        /**
         * Méthode pour le tri des éléments selon une colonne
         * @param {Modeles.Application.IRemunerationCceColonneItem} colonneTrie - La colonne sur laquelle effectuer le tri
         */
        private trierColonne(colonneTrie);
    }
}

/**
 * Directive pour l'affichage d'un tableau de barèmes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Directives {
    /**
     * Déclarion du constructeur de la directive
     */
    function mwRemunerationCeeTableau(): ng.IDirective;
}

/***
 * Ensemble d'énumérations concernant les erreurs de l'applications
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Enumerations {
    /**
     * Énumération des clés des erreurs de l'application
     */
    enum RemunerationCleErreur {
        BORNE_SUPERIEUR_PALIER_MAX,
        BORNE_SUPERIEUR_PLUS_PETIT_INFERIEUR,
        DATE_EFFET_FIN_ANTERIEUR_DATE_EFFET_DEBUT,
    }
}

/***
 * Ensemble d'énumérations concernant les évènements de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Enumerations {
    /**
     * Énumération des libellé des évènements de l'application
     */
    enum RemunerationLibelleEvent {
        DESELECTION_AUTO_BAREME_DEFAUT,
        SELECTION_AUTO_BAREME_DEFAUT,
        FIN_CHARGEMENT_MODALE,
    }
}

/***
 * Ensemble d'énumérations utilitaires pour les contrôleurs de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Enumerations.UtilitaireControleur {
    /**
     * Énumération du type de modale de modification
     */
    enum typeModaleModification {
        MODALE_CREATION = 0,
        MODALE_MODIFICATION = 1,
    }
}

/***
 * Ensemble d'énumérations utilitaires pour les services de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Enumerations.UtilitaireService {
    /**
     * Énumération de la position du palier dans un barème
     */
    enum RemunerationPositionPalier {
        PREMIER_PALIER,
        PALIER_INTERMEDIAIRE,
        DERNIER_PALIER,
        PALIER_UNIQUE,
    }
    /**
     * Énumération du type d'objet palier manipulé
     */
    enum RemunerationTypePalier {
        PALIER_SYNTHESE = 0,
        PALIER_DETAIL = 1,
        PALIER_CONDITION_REMUNERATION = 2,
    }
    /**
     * Énumération des clés du cache des valeurs issu de GGO
     */
    enum CleCacheGGO {
        NUMERO_COMPTE,
        IDENTIFIANT_TIERS,
        IDENTIFIANT_PRODUIT_SERVICE,
        NUMERO_OFFRE,
        IDENTIFIANT_ELEMENT_STRUCTURE,
        IDENTIFIANT_ELEMENT_STRUCTURE_2,
        CODE_QUALITE_AGENT,
    }
    /**
     * Énumération des clés du cache des valeurs issu du PDT
     */
    enum CleCachePDT {
        CODE_ETABLISSEMENT,
        CODE_GUICHET,
    }
}

/***
 * Ensemble d'énumérations concernant le service REST "contratcceservice/v1/remunerationCce"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Enumerations.ContratCceService.RemunerationCce {
    /**
     * Indicateur du type de recherche du service REST "contratcceservice/v1/remunerationCce" GET
     * "S" Appel de la QR PCLA Synthèse condition rémunération
     * "L" Appel de la QR PCLC Liste des barèmes de rémunération
     */
    enum IndicateurInfoRemunerationEnum {
        SYNTHESECONDITION,
        LISTEBAREME,
    }
    /**
     * Indicateur conditions personnalisées
     * Cet indicateur précise si le client se voit appliqué des conditions de rémunération personnalisées.
     * 'O' Conditions personnalisée
     * 'N' Conditions standards
     */
    enum IndicateurConditionsPersoEnum {
        PERSONNALISEE,
        STANDARD,
    }
    /**
     * Indicateur conditions supprimables
     * 'N' Cette condition ne peut plus être supprimée
     * 'O' Cette condition peut être supprimée
     */
    enum IndicateurConditionsSuppEnum {
        SUPPRIMABLE,
        INSUPPRIMABLE,
    }
    /**
     * Cet indicateur précise si la conditions peuvent être modifiées ou non.
     * '0' Condition non modifiable
     * '1' Condition modifiable - uniquement la date de fin
     * '2' Condition modifiable - tout est modifiable suivant l'habilitation du chargé de clientèle.
     */
    enum IndicateurConditionsModifiableEnum {
        NONMODIFIABLE,
        DATEMODIFIABLE,
        TOUTMODIFIABLE,
    }
    /**
     * Cet indicateur permet de savoir si le barème a été choisi par l'établissement pour être affiché
     * par défaut au poste de travail lors de la création d'une condition de rémunération pour un compte
     * 'O' OUI
     * 'N' NON
     */
    enum IndicateurBaremeDefautEnum {
        OUI,
        NON,
    }
    /**
     * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
     * 'T' Titulaire
     * 'R' Remplaçant
     * 'S' Suppléant
     * 'A' Affectation temporaire
     */
    enum CodeQualiteAgentEnum {
        TITULAIRE,
        REMPLACANT,
        SUPPLEANT,
        AFFECTATIONTEMPORAIRE,
    }
    /**
     * Détermine les traitements à réaliser dans le cadre d'une opération fonctionnelle.
     * 'C' Contrôles
     * 'M' Contrôles + Mise à jour
     */
    enum CodeTypeTraitementEnum {
        CONTROLES,
        MISEAJOUR,
    }
}

/**
 * Module pour la déclartion des interfaces de l'application concernant les erreurs de formulaire
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Modeles.Application {
    /**
     * Interface du formulaire de modification d'un barème
     */
    interface IFormulaireModificationCtrl extends ng.IFormController {
        formDateValidite: IFormulaireDateCtrl;
        formPalier1?: IFormulairePalierCtrl;
        formPalier2?: IFormulairePalierCtrl;
        formPalier3?: IFormulairePalierCtrl;
        formPalier4?: IFormulairePalierCtrl;
        formPalier5?: IFormulairePalierCtrl;
    }
    /**
     * Interface du sous-formulaire de modification des dates de validités
     */
    interface IFormulaireDateCtrl extends ng.IFormController {
        dateDebutValidite: ng.INgModelController;
        dateFinValidite: ng.INgModelController;
    }
    /**
     * Interface du sous-formulaire d'un palier
     */
    interface IFormulairePalierCtrl extends ng.IFormController {
        palierVariationClient1?: ng.INgModelController;
        palierVariationClient2?: ng.INgModelController;
        palierVariationClient3?: ng.INgModelController;
        palierVariationClient4?: ng.INgModelController;
        palierVariationClient5?: ng.INgModelController;
    }
}

/**
 * Module pour la déclartion des interfaces de l'application concernant les services
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Modeles.Application {
    /**
     * Interface des objets barème de l'application
     */
    interface IBaremeEcran {
        identifiantBareme: number;
        libelleCourtBareme: string;
        libelleBareme: string;
        dateFinCommercialisation: Date;
        dateDebutApplication: Date;
        dateFinApplication: Date;
        nombrePalier: number;
        listePalier: Array<IPalierEcran>;
        indicateurConditionsPersonnalisees: Enumerations.ContratCceService.RemunerationCce.IndicateurConditionsPersoEnum;
        numeroChrono: number;
    }
    /**
     * Interface des objets retournés lors de la fermeture d'une modale
     */
    interface IRetourModale {
        indicateurAnnulationProcessus: boolean;
        bareme: IBaremeEcran;
    }
    /**
     * Interface des paliers utilisés pour les écrans
     */
    interface IPalierEcran {
        positionPalier: Enumerations.UtilitaireService.RemunerationPositionPalier;
        numeroPalier: number;
        borneInferieur: MyWay.Model.MontantDevise;
        borneSuperieur: MyWay.Model.MontantDevise;
        codeTaux: string;
        valeurTaux: number;
        margeEtablissement: number;
        variationMinimum: number;
        variationMaximum: number;
        variationClient: number;
        dateDebutValidite: Date;
        dateFinValidite: Date;
        validiteActuelle: boolean;
    }
}

/**
 * Module pour la déclaration des interfaces de l'application concernant les tableaux
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Modeles.Application {
    /**
     * Interface des objets représentant des items des tableaux de barèmes de l'application
     */
    interface IRemunerationCceTableauItem {
        bareme: IBaremeEcran;
        selectionne: boolean;
    }
    /**
     * Interface des objets représentant des colonnes des tableaux de barèmes de l'application
     */
    interface IRemunerationCceColonneItem {
        label: string;
        cle: string;
        indicateurTrie: boolean;
        indicateurTrieAscendant: boolean;
    }
}

/***
 * Ensemble d'interfaces de modèles concernant le service REST "contratcceservice/v1/remunerationCce"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Modeles.ContratCceService.RemunerationCce {
    interface IRemuneration {
        /**
         * Objet contenant les informations de Marché et de devise de la rémunération
         */
        information: IInformation;
        /**
         * Objet contenant les informations concernant les conditions du barème
         */
        conditionsBareme: IConditionsBareme;
        /**
         * Objet contenant les informations concernant le barème à proposer
         */
        baremeaProposer: IBaremeaProposer;
        /**
         * Objet contenant les informations concernant les paliers à proposer
         */
        paliersaProposer: Array<IPalierSynthese>;
        /**
         * Objet contenant les informations concernant les barèmes
         */
        bareme: Array<IBareme>;
        /**
         * Objet contenant les informations concernant les paliers
         */
        paliers: Array<IPalierSynthese>;
    }
    interface IInformation {
        /**
         * Classification de regroupement de segments de marché
         */
        codeMarche: string;
        /**
         * Libellé abrégé du code marché
         */
        libelleFamilleMarche: string;
        /**
         * Code devise de fonctionnement du compte
         */
        codeDevise: string;
    }
    interface IConditionsBareme {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * CodeGuichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChronoConditionCredit: number;
        /**
         * Date de début d'application des conditions
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application des conditions
         */
        dateFinApplication: string;
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court du barème
         */
        libelleCourtBareme: string;
        /**
         * Libellé du barème
         */
        libelleBareme: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
        /**
         * Indicateur conditions personnalisées
         * Cet indicateur précise si le client se voit appliqué des conditions de rémunération personnalisées.
         * 'O' Conditions personnalisée
         * 'N' Conditions standards
         */
        indicateurConditionsPerso: Enumerations.ContratCceService.RemunerationCce.IndicateurConditionsPersoEnum;
        /**
         * Indicateur conditions supprimables
         * 'N' Cette condition ne peut plus être supprimée
         * 'O' Cette condition peut être supprimée
         */
        indicateurConditionsSupp: Enumerations.ContratCceService.RemunerationCce.IndicateurConditionsSuppEnum;
        /**
         * Libellé message d'erreur
         */
        libelleMessageErreur: string;
        /**
         * Date de fin de commercialisation d'un barème de rémunération
         */
        dateFinCommercialisationBareme: string;
        /**
         * Cet indicateur précise si la conditions peuvent être modifiées ou non.
         * '0' Condition non modifiable
         * '1' Condition modifiable - uniquement la date de fin
         * '2' Condition modifiable - tout est modifiable suivant l'habilitation du chargé de clientèle.
         */
        indicateurConditionsModifiable: Enumerations.ContratCceService.RemunerationCce.IndicateurConditionsModifiableEnum;
        /**
         * Liste des paliers du barème
         */
        listePalierDetail: Array<IPalierDetail>;
    }
    interface IPalierDetail {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChronoCondition: number;
        /**
         * Numéro du palier
         */
        numeroPalier: number;
        /**
         * Il s'agit de la borne montant supérieur du palier de rémunération
         */
        borneSuperieure: number;
        /**
         * Code taux de référence
         */
        codeTauxReference: string;
        /**
         * Il s'agit de la valeur du taux de référence pour la rémunération des CAV
         */
        valeurTauxReference: number;
        /**
         * Marge établissement sur taux de rémunération
         */
        margeEtablissement: number;
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
        /**
         * Marge minimum du palier sur taux de rémunération
         */
        margeMinimumPalier: number;
        /**
         * Marge maxumum du palier sur taux de rémunération
         */
        margeMaximumPalier: number;
        /**
         * Date de début de validité palier
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité palier
         */
        dateFinValidite: string;
    }
    interface IBareme {
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court barème de rémunération
         */
        libelleCourtBareme: string;
        /**
         * Libellé barème de rémunération
         */
        libelleBareme: string;
        /**
         * Date de fin de commercialisation
         */
        dateFinCommercialisation: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
        /**
         * Niveau d'habilitation des fonctionnalités de l'application Rémunération des comptes à vue.
         */
        niveauHabilitation: number;
        /**
         * Date de début de commercialisation
         */
        dateDebutCommercialisation: string;
        /**
         * Cet indicateur permet de savoir si le barème a été choisi par l'établissement pour être affiché
         * par défaut au poste de travail lors de la création d'une condition de rémunération pour un compte
         * 'O' OUI
         * 'N' NON
         */
        indicateurBaremeDefaut: Enumerations.ContratCceService.RemunerationCce.IndicateurBaremeDefautEnum;
    }
    interface IPalier {
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
        /**
         * Borne montant supérieur du palier de rémunération
         */
        borneSuperieure: number;
        /**
         * Taux de référence Palier Chaque palier est associé à un code taux qui doit exister dans la table des
         * barèmes débiteurs ou pour le dernier palier correspondre au taux particulier "USU". Exemple : T4M, P01, P12, TBC, USU ...
         */
        tauxReference: string;
        /**
         * Numéro du palier
         */
        numeroPalier: number;
    }
    interface IBaremeaProposer {
        /**
         * Date de début d'application des conditions
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application des conditions
         */
        dateFinApplication: string;
        /**
         * Identifiant barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Libellé court barème de rémunération
         */
        libelleCourtBareme: string;
        /**
         * Libellé barème de rémunération
         */
        libelleBareme: string;
        /**
         * Date de fin de commercialisation d'un barème de rémunération
         */
        dateFinCommercialisation: string;
        /**
         * Nombre de paliers du barème
         */
        nombrePaliers: number;
    }
    interface IPalierSynthese {
        /**
         * Numéro chronologique attribué par le système à chaque création de barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Numéro de palier du barème de rémunération
         */
        numeroPalier: number;
        /**
         * Borne montant supérieur du palier de rémunération
         */
        borneSuperieurePalier: number;
        /**
         * Date de début de validité du palier
         */
        dateDebutValidite: string;
        /**
         * Date de fin de validité du palier
         */
        dateFinValidite: string;
        /**
         * Code taux de référence
         */
        codeTauxReference: string;
        /**
         * Valeur du taux de référence pour la rémunération des CAV
         */
        valeurTauxReference: number;
        /**
         * Marge établissement sur taux de rémunération
         */
        margeEtablissement: number;
        /**
         * Marge minimum du palier sur taux de rémunération
         */
        margeMinimumPalier: number;
        /**
         * Marge maximum du palier sur taux de rémunération
         */
        margeMaximumPalier: number;
        /**
         * Marge sur taux de référence
         */
        margeTauxReference: number;
    }
    interface IConditionRemuneration {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Code guichet
         */
        codeGuichet: string;
        /**
         * Numéro de compte
         */
        numeroCompte: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         * Référence interne MYSYS
         * Personne référencée comme client, tiers ou prospect
         */
        identifiantPersonne: number;
        /**
         * numéro chrono des conditions créditrices affectées à un compte à vue (CDD ou CCE).
         */
        numeroChrono: number;
        /**
         * Date de début d'application
         */
        dateDebutApplication: string;
        /**
         * Date de fin d'application
         */
        dateFinApplication: string;
        /**
         * Numéro chronologique attribué par le système à chaque création de barème de rémunération
         */
        identifiantBareme: number;
        /**
         * Nombre de paliers du barème de rémunération
         */
        nombrePaliers: number;
        /**
         * Liste des paliers
         */
        listePalier: Array<IPalier>;
        /**
         * Code devise
         */
        codeDevise: string;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         */
        identifiantProduitService: number;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépôts (ou compte courant) pour un tarif en général forfaitaire.
         */
        numeroOffre: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure2: number;
        /**
         * Permet d'indiquer si un agent donné occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         * 'T' Titulaire
         * 'R' Remplaçant
         * 'S' Suppléant
         * 'A' Affectation temporaire
         */
        codeQualiteAgent: Enumerations.ContratCceService.RemunerationCce.CodeQualiteAgentEnum;
        /**
         * Détermine un marché selon la segmentation marché national / MN
         * Permet de catégorier la clientèle.
         */
        codeMarche: string;
        /**
         * Détermine les traitements à réaliser dans le cadre d'une opération fonctionnelle.
         * 'C' Contrôles
         * 'M' Contrôles + Mise à jour
         */
        codeTypeTraitement: Enumerations.ContratCceService.RemunerationCce.CodeTypeTraitementEnum;
    }
    interface IPalier1 {
    }
    interface IPalier2 {
    }
    interface IPalier3 {
    }
    interface IPalier4 {
    }
    interface IPalier5 {
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des objets barèmes
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IBaremeService {
        initialiserDevise: (codeDevise: string) => MyWay.Services.IPromesse<void>;
        genererBaremeFromIBaremeaProposer: (bareme: Modeles.ContratCceService.RemunerationCce.IBaremeaProposer, listePalier: Array<Modeles.ContratCceService.RemunerationCce.IPalierSynthese>) => Modeles.Application.IBaremeEcran;
        genererBaremeFromIConditionsBareme: (bareme: Modeles.ContratCceService.RemunerationCce.IConditionsBareme) => Modeles.Application.IBaremeEcran;
        genererBaremeFromIBareme: (bareme: Modeles.ContratCceService.RemunerationCce.IBareme, listePalier: Array<Modeles.ContratCceService.RemunerationCce.IPalierSynthese>) => Modeles.Application.IBaremeEcran;
    }
}

/**
 * Service définissant les fonction de gestion de l'affichage des modales
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IGestionModaleService {
        creerBareme: (queryRest: Services.IRemunerationCceRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.Application.IRetourModale>;
        modifierBareme: (bareme: Modeles.Application.IBaremeEcran) => MyWay.Services.IPromesse<Modeles.Application.IRetourModale>;
        afficherErreur: (reason: MyWay.Services.Erreur) => void;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des paliers
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IPalierService {
        genererListePalierEcranFromPalierDetail: (listePalier: Array<Modeles.ContratCceService.RemunerationCce.IPalierDetail>, devise: MyWay.Model.Devise) => Array<Modeles.Application.IPalierEcran>;
        genererListePalierEcranFromPalierSynthese: (identifiantBareme: number, listePalierRest: Array<Modeles.ContratCceService.RemunerationCce.IPalierSynthese>, devise: MyWay.Model.Devise) => Array<Modeles.Application.IPalierEcran>;
        modifierBorneInferieur: (listePalierEcran: Array<Modeles.Application.IPalierEcran>) => void;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion du cache des valeurs de l'applications
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IRemunerationCacheService {
        initialiserCachePDT: (codeEtablissement: string, codeGuichet: string) => void;
        initialiserCacheGGO: (numeroCompte: string, identifiantTiers: number, identifiantProduitService: number, numeroOffre: number, identifiantElementStructure: number, identifiantElementStructure2: number, codeQualiteAgent: Enumerations.ContratCceService.RemunerationCce.CodeQualiteAgentEnum) => void;
        recupererValeurCacheGGO: (cle: Enumerations.UtilitaireService.CleCacheGGO) => any;
        recupererValeurCachePDT: (cle: Enumerations.UtilitaireService.CleCachePDT) => any;
    }
}

/**
 * Service contenant des fonctionnalités pour les rémunérations
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IRemunerationService {
        creerBareme: (informations: Modeles.ContratCceService.RemunerationCce.IInformation, bareme: Modeles.Application.IBaremeEcran) => MyWay.Services.IPromesse<Modeles.ContratCceService.RemunerationCce.IConditionRemuneration>;
        modifierBareme: (informations: Modeles.ContratCceService.RemunerationCce.IInformation, bareme: Modeles.Application.IBaremeEcran) => MyWay.Services.IPromesse<Modeles.ContratCceService.RemunerationCce.IConditionRemuneration>;
        supprimerBareme: (bareme: Modeles.Application.IBaremeEcran) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST "contratcceservice/v1/remunerationCce"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface de la requête au service REST "contratcceservice/v1/remunerationCce" de type GET
     */
    interface IRemunerationCceRestServiceGetQuery {
        indicateurInfoRemuneration: Enumerations.ContratCceService.RemunerationCce.IndicateurInfoRemunerationEnum;
        codeEtablissement: string;
        codeGuichet?: string;
        numeroCompte?: string;
        identifiantPersonne?: number;
        codeMarche?: string;
        codeDevise?: string;
    }
    /**
     * Interface de la requête au service REST "contratcceservice/v1/remunerationCce" de type DELETE
     */
    interface IRemunerationCceRestServiceDeleteQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantPersonne: number;
        numeroChrono: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        numeroOffre: number;
        identifiantProduitService: number;
        identifiantElementStructure: number;
        identifiantElementStructure1: number;
        codeQualiteAgent: string;
        indicateurCloture: string;
    }
    /**
     * Interface du service
     */
    interface IRemunerationCceRestService {
        sendGetRequest: (query: IRemunerationCceRestServiceGetQuery) => MyWay.Services.IPromesse<Modeles.ContratCceService.RemunerationCce.IRemuneration>;
        sendPostRequest: (data: Modeles.ContratCceService.RemunerationCce.IConditionRemuneration) => MyWay.Services.IPromesse<Modeles.ContratCceService.RemunerationCce.IConditionRemuneration>;
        sendPutRequest: (data: Modeles.ContratCceService.RemunerationCce.IConditionRemuneration) => MyWay.Services.IPromesse<Modeles.ContratCceService.RemunerationCce.IConditionRemuneration>;
        sendDeleteRequest: (query: IRemunerationCceRestServiceDeleteQuery) => MyWay.Services.IPromesse<void>;
    }
}

declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

/**
 * Classe de fonction utilitaire pour les services de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRemunerationCCE.Services {
    /**
     * Déclaration de la classe
     */
    class UtilsService {
        /**
         * Méthode pour la suppression des éléments ajouté par Angular dans l'objet
         * @param {T} objet - L'objet à nettoyer
         * @return {T} L'objet nettoyé
         */
        static nettoyerObjetCleAngular<T>(objet: T): T;
    }
}
