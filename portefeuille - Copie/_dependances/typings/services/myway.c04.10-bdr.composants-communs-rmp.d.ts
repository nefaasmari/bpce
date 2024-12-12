
declare module ComposantsCommunsRMP {
    var app: ng.IModule;
}

declare module ComposantsCommunsRMP {
    class DefautControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module ComposantsCommunsRMP {
}

declare module ComposantsCommunsRMP {
}

declare module ComposantsCommunsRMP {
}

/**
 * Ensemble d'énumérations pour l'application Rmp Professionnel
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Enumerations {
    /**
     * Énumération à usage interne pour les vues des formulaires de création.
     * Permet de déterminer une section du formulaire.
     */
    enum RmpSectionFormaulaire {
        PRODUIT = 1,
        ADRESSE = 2,
        TARIFICATION = 3,
    }
    /**
     * Énumération des codes d'évènements possibles
     */
    enum RmpLibelleEvent {
        NOUVEAU_RMP_LANCEMENT,
        NOUVEAU_RMP_VALIDATION,
        NOUVEAU_RMP_ANNULATION,
        MODIFICATION_RMP_VALIDATION,
        MODIFICATION_RMP_ANNULATION,
        FORMULAIRE_COMPOSANT_INITIE,
        AVENANT_DESELECTION_RELEVE_SEUL,
        AVENANT_DESELECTION_RELEVE_TOUS,
    }
}

/**
 * Ensemble d'énumérations pour les modèles Rmp Professionnel
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Enumerations {
    /**
     * Énumération des types de méthodes de recherche. Valeurs possibles :
     * C : pour une recherche par numéro de compte;
     * L : pour une recherche par numéro de personne.
     */
    enum RmpProfessionnelTypeRechercheEnum {
        COMPTE,
        PERSONNE,
    }
    /**
     * Énumération des périodicités possibles des relevés. Valeurs possibles :
     * J: Journaliere; H: Hebdomadaire; D: Décadaire; B: Bimensuelle;
     * M: Mensuelle; S: Semestrielle; T: Trimestrielle; A: Annuelle.
     */
    enum RmpPeriodiciteEnum {
        JOURNALIERE,
        HEBDOMADAIRE,
        DECADAIRE,
        BIMENSUELLE,
        MENSUELLE,
        SEMESTRIELLE,
        TRIMESTRIELLE,
        ANNUELLE,
    }
    /**
     * Énumération des types de présentations des opérations. Valeurs possibles :
     * C: Chronologique; T: Thématique.
     */
    enum RmpPresentationOperationEnum {
        CHRONOLOGIQUE,
        THEMATIQUE,
    }
    /**
     * Énumération des types de produit. Valeurs possibles :
     * C: Composant; T: Éligible.
     */
    enum RmpTypeProduitEnum {
        COMPOSANT,
        ELIGIBLE,
    }
    /**
     * Énumération des types de relevé. Valeurs possibles :
     * S: ...; E: Éligible
     */
    enum RmpTypeReleveEnum {
        STYPE,
        ELIGIBLE,
    }
    /**
     * Énumération des types d'actions pour l'appel au service REST /rmpprofessionnel/v1/informationDetaillee
     * C: Création; M: Modification
     */
    enum RmpTypeAction {
        CREATION,
        MODIFICATION,
    }
}

declare module ComposantsCommunsRMP {
}

/**
 * Filtre pour la génération de la chaîne de caractère de l'adresse normée AFNOR
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Filtres {
}

/**
 * Filtre pour la gestion des dates dans l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Filtres {
}

/**
 * Filtre pour la récupération des chaînes de caratères équivalentes aux énumérations
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Filtres {
}

/**
 * Filtres utilitaires
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Filtres {
}

declare module ComposantsCommunsRMP {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

/**
 * Contrôleur racine pour les contrôleur de directive pour les formulaires de création de relevés
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Interface de l'objet contenant l'ensemble des indicateurs pour le contrôleur
     */
    interface IFormulaireIndicateurObjet {
        initialisationListeProduitTerminee: boolean;
        initialisationSelectionAdresseTerminee: boolean;
        initialisationSelectionTarificationTerminee: boolean;
        initialisationFormulaireTerminee: boolean;
        presenceCompteEpargne: boolean;
        requeteEnCours: boolean;
        requeteReussie: boolean;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwRmpFormulaireNouveauControleur {
        protected $scope: ng.IScope;
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected releveService: ComposantsCommunsRMP.Services.IRmpProfessionnelReleveService;
        protected produitService: ComposantsCommunsRMP.Services.IRmpProfessionnelProduitService;
        /**
         * Objet contenant l'ensemble des indicateurs du contrôleur
         */
        indicateurs: IFormulaireIndicateurObjet;
        /**
         * Objet d'erreur dans le cas de l'échec de requêtes REST
         */
        erreurRequete: MyWay.Services.Erreur;
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant Tiers
         */
        identifiantTiers: number;
        /**
         * Numéro de compte du CCE ouvert
         */
        numeroCompteCCE: string;
        /**
         * Numéro entité titulaire
         */
        numeroEntiteTitulaire: number;
        /**
         * Nouveau relevé qui sera créé
         */
        nouveauReleve: Modeles.RmpProfessionnel.InformationDetaillee.IReleve;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, releveService: ComposantsCommunsRMP.Services.IRmpProfessionnelReleveService, produitService: ComposantsCommunsRMP.Services.IRmpProfessionnelProduitService);
        /**
         * Méthode d'initialisation du formulaire
         */
        initialisationFormulaire(): void;
        /**
         * Méthode pour la mise à jour des indicateurs d'initialisation du formulaire
         */
        miseAjourIndicateurInitialisation(section: Enumerations.RmpSectionFormaulaire): void;
    }
}

/**
 * Contrôleur de la navigation pour l'application Composants-communs-rmp
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
}

/**
 * Contrôleur de la page de tests de la directive mw-liste-rmp-ouverture
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    interface ITypeRechercheItem {
        label: string;
        value: Enumerations.RmpProfessionnelTypeRechercheEnum;
    }
    /**
     * Déclaration du contrôleur
     */
    class PageDevServiceRestControleur {
        private $scope;
        private rmpProfessionnelRechercheService;
        private rmpProfessionnelInformationDetailleService;
        static $inject: string[];
        rmpProfessionnelRechercheTypeRechercheArray: Array<ITypeRechercheItem>;
        rmpProfessionnelRechercheQuery: Services.IRmpProfessionnelRechercheServiceQuery;
        rmpProfessionnelRechercheReponse: Array<Modeles.RmpProfessionnel.Recherche.IReleve>;
        rmpProfessionnelRechercheErreur: MyWay.Services.Erreur;
        indicateurRmpProfessionnelRechercheEnCours: boolean;
        indicateurRechercheRmpProfessionnelRecherche: boolean;
        indicateurSuccesRmpProfessionnelRecherche: boolean;
        rmpProfessionnelInformationDetailleNumeroRMP: number;
        rmpProfessionnelInformationDetailleQuery: Services.IRmpProfessionnelInformationDetailleeServiceGetQuery;
        rmpProfessionnelInformationDetailleReponse: Modeles.RmpProfessionnel.InformationDetaillee.IReleve;
        constructor($scope: ng.IScope, rmpProfessionnelRechercheService: Services.IRmpProfessionnelRechercheService, rmpProfessionnelInformationDetailleService: Services.IRmpProfessionnelInformationDetailleeService);
        conditionIfChoixRMP(): boolean;
        conditionIfRechercheNonEffectuee(): boolean;
        sendRequestRecherche(): void;
        sendGetRequestInformation(): void;
    }
}

declare module ComposantsCommunsRMP {
    function entete(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-adresse-destinataire-select-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwAdresseDestinataireSelectRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelAdresseService;
        static $inject: string[];
        /**
         * Numéro de compte du produit principal du relevé
         */
        numeroCompteProduitPrincipal: string;
        /**
         * Liste des produits
         */
        listeProduit: Array<ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IProduit>;
        /**
         * Adresse sélectionnée
         */
        adresse: ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IAdresse;
        /**
         * Liste des adresses sélectionnables retournées par le service des adresses
         */
        private listeAdresse;
        /**
         * Adresse issu du service des adresses sélectionnée
         */
        private adresseSelected;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelAdresseService: Services.IRmpProfessionnelAdresseService);
    }
}

/**
 * Directive pour la sélection de l'adresse du destinataire principal avec une liste déroulante
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwAdresseDestinataireSelectRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-erreur-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwErreurRmpProControleur {
        static $inject: any[];
        mwErreur: MyWay.Services.Erreur;
        constructor();
    }
}

/**
 * Directive pour l'affichage d'une erreur suite à un appel REST
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    /**
     * Déclaration de la directive
     */
    function mwErreurRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-liste-produit-composant-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwListeProduitComposantRmpProControleur {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Numéro de compte du produit principal du relevé
         * Ce dernier n'est ni modifiable, ni supprimable
         */
        numeroCompteProduitPrincipal: string;
        /**
         * Liste des sous groupes de produits
         */
        listeSousGroupe: Array<Services.IGroupeProduit>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode pour la vérification si le produit est le produit principal
         * @param {Modeles.RmpProfessionnel.InformationDetaillee.IProduit} produit - Le produit à vérifier
         */
        testerAffichageCheck(produit: Modeles.RmpProfessionnel.InformationDetaillee.IProduit): boolean;
        /**
         * Méthode pour le changement de type de produit
         * @param {Modeles.RmpProfessionnel.InformationDetaillee.IProduit} produit - Produit dont il faut modifier le type
         */
        changerValeurTypeProduit(produit: Modeles.RmpProfessionnel.InformationDetaillee.IProduit): void;
    }
}

/**
 * Directive pour l'affichage des produits composants un RMP au sein d'un formulaire de création/modification d'un RMP.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    /**
     * Déclaration de la directive
     */
    function mwListeProduitComposantRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-liste-produit-eligible-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwListeProduitEligibleRmpProControleur {
        private serviceAgentExtended;
        static $inject: string[];
        /**
         * Liste des sous groupes de produits
         */
        listeSousGroupe: Array<Services.IGroupeProduit>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode pour le changement de type de produit
         * @param {Modeles.RmpProfessionnel.InformationDetaillee.IProduit} produit - Produit dont il faut modifier le type
         */
        changerValeurTypeProduit(produit: Modeles.RmpProfessionnel.InformationDetaillee.IProduit): void;
    }
}

/**
 * Directive pour l'affichage des produits éligibles à un un RMP au sein d'un formulaire de création/modification d'un RMP.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    /**
     * Déclaration de la directive
     */
    function mwListeProduitEligibleRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-liste-produit-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwListeProduitRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelProduitService;
        static $inject: string[];
        /**
         * Numéro de compte du produit principal du relevé
         * Ce dernier n'est ni modifiable, ni supprimable
         */
        numeroCompteProduitPrincipal: string;
        /**
         * Liste des produits associés au RMP
         */
        listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>;
        /**
         * Liste des groupes de produits composants le relevé
         */
        listeGroupeProduitComposant: Array<Services.IGroupeProduit>;
        /**
         * Liste des groupes de produits éligibles au relevé
         */
        listeGroupeProduitEligible: Array<Services.IGroupeProduit>;
        /**
         * Indicateur de premier chargement des données
         */
        indicateurPremierChargement: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelProduitService: Services.IRmpProfessionnelProduitService);
        /**
         * Méthode pour le calcul des données à afficher
         */
        modifierJeuDonnees(): void;
    }
}

/**
 * Directive pour l'affichage des listes de produits composants ou éligibles au relevé
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    /**
     * Déclaration de la directive
     */
    function mwListeProduitRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-periodicite-select-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Interface définnissant les objets qui seront manipulés dans la directive
     */
    interface IMwSelectPeriodiciteCompte extends Modeles.RmpProfessionnel.InformationDetaillee.IPeriodiciteCompte {
        labelPeriodicite: string;
    }
    /**
     * Déclaration du contrôleur
     */
    class MwPeriodiciteSelectRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelPeriodiciteService;
        static $inject: string[];
        /**
         * Identifiant du composant
         */
        id: string;
        /**
         * Liste des périodicités disponibles issu du service Rest
         */
        listePeriodicite: Array<Modeles.RmpProfessionnel.InformationDetaillee.IPeriodiciteCompte>;
        /**
         * Code périodicité de la périodicité sélectionnée
         */
        codePeriodicite: Enumerations.RmpPeriodiciteEnum;
        /**
         * Date de la dernière édition du relevé
         */
        dateDerniereEdition: string;
        /**
         * Date de la prochaine édition du relevé
         */
        dateProchaineEdition: string;
        /**
         * Libellé du label du champs
         */
        libelleLabel: string;
        /**
         * Liste des périodicités issu du service des périodicités
         */
        private listePeriodiciteService;
        /**
         * Indicateur qui permet de savoir si on fait une modification du RMP ou une création
         */
        private modificationRmp;
        /**
         * Périodicité qui est sélectionnée
         */
        private periodiciteSelectionne;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelPeriodiciteService: Services.IRmpProfessionnelPeriodiciteService);
        /**
         * Méthode pour l'initialisation de la valeur par défaut de la périodicité
         */
        initialisationListe(): void;
        /**
         * Méthode pour la modification de la périodicité
         */
        modificationPeriodicite(): void;
    }
}

/**
 * Directive pour l'affichage de la page d'un nouveau RMP dans le cas d'une ouverture d'un CCE.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwPeriodiciteSelectRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-presentation-select-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwPresentationSelectRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelPresentationService;
        static $inject: string[];
        /**
         * Code du type de présentation
         */
        indicateurPresentationOperation: Enumerations.RmpPresentationOperationEnum;
        /**
         * Liste des possibilités retournées par le service
         */
        private listePresentationService;
        /**
         * Type de présentation retourné par le service choisi
         */
        private typePresentationServiceSelected;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelPresentationService: Services.IRmpProfessionnelPresentationService);
    }
}

/**
 * Directive pour la sélection du type de présentation des opérations avec une liste déroulante
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwPresentationSelectRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-rmp-nouveau
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwRmpNouveauControleur extends ComposantsCommunsRMP.Controleurs.MwRmpFormulaireNouveauControleur {
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
 * Directive pour l'affichage de la page d'un nouveau RMP.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwRmpNouveau(): ng.IDirective;
}

/**
 * Directive pour mettre en place le mécanisme de communication pour la sélection unique entre plusieurs tableaux de relevé
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwTableSelectionHandler(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-tableau-detail-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTableauDetailRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelInformationDetailleeService;
        private rmpProfessionnelProduitService;
        static $inject: string[];
        /**
         * Objet représentant le relevé
         */
        tableauRmpItem: Services.IMwTableauRmpItem;
        /**
         * Libellé du client bancaire du compte de tarification du relevé
         */
        libelleClientCompteTarification: string;
        /**
         * Booléen indiquant l'état d'ouverture du panneau des détails
         */
        indicateurOuvertureDetail: boolean;
        /**
         * Booléen indiquant la périodicité des comptes épargne doit être affichée
         */
        indicateurAffichagePeriodiciteEpargne: boolean;
        /**
         * Booléen indiquant si la requête de récupération des informations détaillées est terminée
         */
        indicateurRequeteTerminee: boolean;
        /**
         * Booléen indiquant si la requête de récupération des informations détaillées est un succès
         */
        indicateurRequeteReussie: boolean;
        /**
         * Contexte GGO
         */
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Objet d'erreurs retourné dans le cas d'un échec de la requête de récupération des détails du relevé
         */
        erreurRequete: MyWay.Services.Erreur;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelInformationDetailleeService: Services.IRmpProfessionnelInformationDetailleeService, rmpProfessionnelProduitService: Services.IRmpProfessionnelProduitService);
        /**
         * Méthode pour l'appel du service de récupération des détails du relevé
         */
        recupererInformationsDetails(): void;
        /**
         * Méthode pour l'appel du service de récupération du libellé du client du compte de tarification
         */
        recupererLibelleClientCompteTarification(): void;
    }
}

/**
 * Directive pour l'affichage du détail d'un relevé multi-produit.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwTableauDetailRmpPro(): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-tableau-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTableauRmpProControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelReleveService;
        static $inject: string[];
        /**
         * Liste des relevés Multi-Produits
         */
        listeReleve: Array<Services.IMwTableauRmpItem>;
        /**
         * Relevé sélectionné dans la liste des relevés
         */
        releveSelectionne: Services.IMwTableauRmpItem;
        /**
         * Objet paramétrant les options du tableau des RMP
         */
        private tableauOptions;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelReleveService: Services.IRmpProfessionnelReleveService);
        /**
         * Méthode appelé lors de la sélection/désélection d'une ligne.
         * @param {Object} objet - L'objet sélectionné.
         */
        onSelectionChange(releve: Object): void;
    }
}

/**
 * Directive pour l'affichage d'un tableau de Rmp.
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    /**
     * Interface définissant le scope de la directive
     */
    interface IMwTableauRmpProScope extends ng.IScope {
        mwTableauRmpProCtrl: Controleurs.MwTableauRmpProControleur;
    }
    function mwTableauRmpPro($window: ng.IWindowService, $timeout: ng.ITimeoutService): ng.IDirective;
}

/**
 * Contrôleur de la directive mw-tarification-select-rmp-pro
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Controleurs {
    /**
     * Déclaration du contrôleur
     */
    class MwTarificationSelectRmpProControleur {
        private $scope;
        private serviceAgentExtended;
        private rmpProfessionnelSupportTarificationService;
        static $inject: string[];
        /**
         * Liste des supports disponibles à la sélection
         */
        listeSupportTarification: Array<Modeles.RmpProfessionnel.InformationDetaillee.ISupportTarification>;
        /**
         * Liste des produits
         */
        listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>;
        /**
         * Code établissement du compte sélectionné
         */
        codeEtablissementComptePrelev: string;
        /**
         * Code guichet du compte sélectionné
         */
        codeGuichetComptePrelevement: string;
        /**
         * Numéro de compte du compte sélectionné
         */
        numeroComptePrelevement: string;
        /**
         * Cas d'utilisation de la directive dans la modification de Gestion RMP
         */
        casModificationGestionRmp: boolean;
        /**
         * Liste des données qui seront affichées dans la vue
         */
        private listeDonneesAffichage;
        /**
         * Objet représentant le support sélectionné
         */
        private supportSelectionne;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, rmpProfessionnelSupportTarificationService: Services.IRmpProfessionnelSupportTarificationService);
        /**
         * Méthode pour l'initialisation des données pour la directive
         */
        initialisationDonnees(): void;
        /**
         * Méthode pour la modification des informations sur le support sélectionné
         */
        modifierSupportTarification(): void;
    }
}

/**
 * Directive pour la sélection du compte de tarification dans le formulaire
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Directives {
    function mwTarificationSelectRmpPro(): ng.IDirective;
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "rmpprofessionnel/v1/composition"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Modeles.RmpProfessionnel.Composition {
    /**
     * Interface représentant un produit pour le service REST "composition".
     */
    interface IProduit {
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Code guichet.
         */
        codeGuichet: string;
        /**
         * Numéro de compte.
         */
        numeroCompte: string;
        /**
         * Code du type de produit.
         */
        codeTypeProduit: string;
        /**
         * Identifiant du relevé multi produit.
         */
        identifiantRMP: number;
        /**
         * Identifiant tiers.
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantTiers: number;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "rmpprofessionnel/v1/destinataireComplementaire"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Modeles.RmpProfessionnel.DestinataireComplementaire {
    /**
     * Interface représentant un destinataire pour le service REST "destinataire complémentaire".
     */
    interface IDestinataire {
        /**
         * Identifie l'adresse comme "disponible" ou "sélectionnée", pour affichage dans une liste.
         * 'D' disponible.
         * 'S' sélectionnée.
         */
        typeAdresse: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire: string;
        /**
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identifiaction du destinataire :
         * N° APP ou BAL-ETAGE-COULOIR-ESC.
         */
        ligne2Adresse: string;
        /**
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution) :
         * ENTREE-BATIMENT-IMMEUBLE-RESIDENCE.
         */
        ligne3Adresse: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination NUMERO-LIBELLE DE LA VOIE.
         */
        ligne4Adresse: string;
        /**
         * La ligne 5 permet d'identifier la destination :
         * LIEU DIT ou SERVICE PARTICULIER DE DISTRIBUTION.
         */
        ligne5Adresse: string;
        /**
         * La ligne 6 permet d'identifier la destination :
         * CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX.
         */
        ligne6Adresse: string;
        /**
         * Détermine si le relevé doit être édité en braille. Peut concerner :
         * - le titulaire du RMP.
         * - le (les) destinataire(s) complémentaire(s).
         * 'N' Pas d'édition en braille (valeur par défaut).
         * 'O' édition d'un RMP Pro en braille.
         */
        codeOptionBraille: string;
    }
    /**
     * Interface représentant un destinataire complémentaire pour le service REST "destinataire complémentaire".
     */
    interface IDestinataireComplementaire {
        /**
         * Liste de destinataires complémentaires
         */
        destinataireComplementaire: Array<IDestinataire>;
    }
    /**
     * Interface représentant un line RMP pour le service REST "destinataire complémentaire".
     */
    interface ILienRmp {
        /**
         * Code établissement.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un relevé RMP Pro référence interne non connue du client.
         */
        numeroIdentifiantRmp: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Etablissement du GCE.
         * Synonyme : Client bancaire.
         * Une ET se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Désignation courte de l'entité titulaire, optionnelle et choisie au niveau de l'entité titulaire,
         * lorsque la désignation bancaire calculée sur 32 caractères ne convient pas au client (cas de forçage).
         * Cette désignation sera utilisée dans la ligne V1 de l'adresse.
         */
        designationBancaire: string;
        /**
         * Détermine si le relevé doit être édité en braille. Peut concerner :
         * - le titulaire du RMP.
         * - le (les) destinataire(s) complémentaire(s).
         * 'N' Pas d'édition en braille (valeur par défaut).
         * 'O' édition d'un RMP Pro en braille.
         */
        codeOptionBraille: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "rmpprofessionnel/v1/informationDetaillee"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee {
    /**
     * Interface représentant un relevé pour le service REST "informationDetaillee".
     */
    interface IReleve {
        /**
         * Produits composants le RMP.
         */
        listeProduit: Array<IProduit>;
        /**
         * Liste des destinataires disponibles à la sélection.
         */
        listeDestinataire: Array<IDestinataire>;
        /**
         * Date de la derniere édition du relevé du compte courant.
         * Concerne le réleve en cours.
         */
        derniereEditionCompteCourant: string;
        /**
         * Date de la prochaine édition du relevé du compte courant.
         * Concerne le relevé en cours.
         */
        prochaineEditionCompteCourant: string;
        periodiciteCompteEpargne: ComposantsCommunsRMP.Enumerations.RmpPeriodiciteEnum;
        /**
         * Date de la derniere édition du relevé du compte épargne.
         * Concerne le releve en cours.
         */
        derniereEditionCompteEpargne: string;
        /**
         * Date de la prochaine édition du relevé du compte épargne.
         * Concerne le relevé en cours.
         */
        prochaineEditionCompteEpargne: string;
        /**
         * Code de présentation des opérations.
         * Il s'agit de l'indicateur de présentation des opérations des comptes courants éditées sur le RMP Pro.
         */
        indicateurPresentationOperation: ComposantsCommunsRMP.Enumerations.RmpPresentationOperationEnum;
        /**
         * Indicateur si le relevé doit être envoyé a l'agence.
         */
        indicateurEnvoiAAgence: boolean;
        /**
         * Numéro du compte de prélèvement.
         */
        numeroComptePrelevement: string;
        /**
         * Libellé du client bancaire détenteur du RMP.
         */
        designationBancaire: string;
        indicateurOptionBraille: boolean;
        /**
         * Indicateur de numérisation de papier.
         */
        indicateurNumerisationPapier: string;
        /**
         * Code de l’état du service de numérisation.
         */
        codeEtatServNumerisation: string;
        /**
         * Date de début de validité de numérisation.
         */
        dateDebutValiditeNumerisation: string;
        /**
         * Date de fin de validité de numérisation.
         */
        dateFinValiditeNumerisation: string;
        /**
         * Liste des périodicités disponibles pour les comptes épargnes.
         */
        listePeriodiciteCompteEpargne: Array<IPeriodiciteCompte>;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire.
         * Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Indique la fréquence des relevés.
         */
        periodiciteCompteCourant: ComposantsCommunsRMP.Enumerations.RmpPeriodiciteEnum;
        /**
         * Liste des supports de tarification disponibles pour le RMP.
         */
        listeSupportTarification: Array<ISupportTarification>;
        /**
         * Liste des périodicités disponibles pour les comptes courants.
         */
        listePeriodiciteCompteCourant: Array<IPeriodiciteCompte>;
        /**
         * Adresse du destinataire principal.
         */
        adresse: IAdresse;
        /**
         * Identifiant du releve multi produit
         */
        identifiantRMP: number;
        /**
         * Code de l'établissement.
         */
        codeEtablissement: string;
        /**
         * Type de RMP
         */
        typeRMP: Enumerations.RmpTypeReleveEnum;
        /**
         * Code de l'établissement du compte de prélèvement.
         */
        codeEtablissementComptePrelev: string;
        /**
         * Code du guichet du compte de prélèvement.
         */
        codeGuichetComptePrelevement: string;
        /**
         * Identifiant tiers (issu de GGO).
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantTiers: number;
    }
    /**
     * Interface représentant un produit pour le service REST "informationDetaillee".
     */
    interface IProduit {
        /**
         * Identifiant d'un Etablissement du Réseau BPCE.
         * Correspond au code Banque sous lequel un établissement du réseau BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Code guichet.
         */
        codeGuichet: string;
        /**
         * Numéro de compte.
         */
        numeroCompte: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Libellé du produit.
         */
        libelleProduit: string;
        /**
         * Code du type de produit.
         * Catégorie de gestion du produit/service.
         * Correspond à un produit/service élémentaire ou à un regroupement de P/S
         */
        codeTypeProduit: string;
        /**
         * Client auquel le produit est rattaché
         */
        client: IClient;
        /**
         * Libellé spécifique du compte CCE.
         */
        libelleCompteCCE: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement
         */
        identifiantPersonne: number;
        /**
         * Identifiant du releve multi produit
         */
        identifiantRMP: number;
        /**
         * Type du produit
         * Identifie le produit comme "éligible au RMP", ou "composant le RMP", à des fins d'affichage dans une liste ou une autre.
         * 'E' éligible.
         * 'C' composant.
         */
        indicateurCompostion: ComposantsCommunsRMP.Enumerations.RmpTypeProduitEnum;
        /**
         * Propriété utilisée pour le PUT
         * "C" Création
         * "S" Suppression
         */
        codeAction: string;
    }
    /**
     * Interface représentant un support de tarification pour le service REST "informationDetaillee".
     */
    interface ISupportTarification {
        /**
         * Code de l'établissement.
         */
        codeEtablissement: string;
        /**
         * Code du guichet.
         */
        codeGuichet: string;
        /**
         * Numéro du compte.
         */
        numeroCompte: string;
        /**
         * Code du type de produit.
         */
        codeTypeProduitService: string;
        /**
         * Code de présentation des opérations. Indicateur nécessaire au tri de présentation des comptes supports de tarification dans l'écran de gestion des RMP.
         * 10 Comptes courants.
         * 20 Comptes réservés aux établissements de crédit.
         * 30 Comptes de dépôt professionnel.
         * 40 Comptes de redressement judiciaire.
         * 50 Comptes de promotion immobilière.
         * 60 LCG à usage privé.
         * 70 LCG à usage professionnel.
         * 80 Livrets A.
         * 90 Livrets B.
         * 99 Pas d'affichage du compte.
         */
        indicateurPresentation: string;
    }
    /**
     * Interface représentant un client pour le service REST "informationDetaillee".
     */
    interface IClient {
        /**
         * Adresse du client.
         */
        adresse: IAdresse;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire. Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
        /**
         * Libellé du client bancaire.
         */
        designationBancaire: string;
        /**
         * Liste des types de produit d'une personne .
         * Type du produit. Identifie le produit comme "éligible au RMP", ou "composant le RMP", à des fins d'affichage dans une liste ou une autre.
         * 'E' éligible.
         * 'C' composant.
         */
        listeTypeProduit: Array<Enumerations.RmpTypeProduitEnum>;
    }
    /**
     * Interface représentant un destinataire pour le service REST "informationDetaillee"
     */
    interface IDestinataire {
        /**
         * Indicateur précisant si le relevé doit être en braille ou non.
         */
        indicateurOptionBraille: boolean;
    }
    /**
     * Interface représentant une adresse pour le service REST "informationDetaillee".
     */
    interface IAdresse {
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage,
         * d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution).
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.).
         */
        ligne3: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * La ligne 4 permet d'identifier la voie de destination.
         * Peut comprendre, le numéro dans la voie, type et nom de voie,
         * le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit,
         * un service X, une boîte postale ou un numéro de CEDEX.
         */
        ligne4: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * La ligne 5 permet d'identifier la destination.
         * Peut comprendre, le nom d'un quartier, d'un lieu-dit, d'un hameau,
         * le nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * La ligne 6 permet d'identifier la destination.
         * Peut comprendre, le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
         */
        ligne6: string;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un établissement de BPCE.
         * Synonyme : Client bancaire Une entité titulaire (ET) se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire: number;
    }
    /**
     * Interface représentant une périodicité pour un compte pour le service REST "informationDetaillee".
     */
    interface IPeriodiciteCompte {
        /**
         * Indique la fréquence des relevés.
         */
        periodicite: ComposantsCommunsRMP.Enumerations.RmpPeriodiciteEnum;
        /**
         * Le date de la prochaine édition.
         */
        prochaineEdition: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "rmpprofessionnel/v1/recherche"
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Modeles.RmpProfessionnel.Recherche {
    interface IAdresse {
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
    }
    interface IReleve {
        adresse: IAdresse;
        identifiantRMP: number;
        periodiciteCompte: ComposantsCommunsRMP.Enumerations.RmpPeriodiciteEnum;
        indicateurOptionBraille: boolean;
        indicateurPresentationOperation: ComposantsCommunsRMP.Enumerations.RmpPresentationOperationEnum;
        codeEtablissementComptePrelev: string;
        codeGuichetComptePrelevement: string;
        numeroComptePrelevement: string;
        /**
         * Type de RMP dans une liste. "E" si RMP éligible.
         */
        typeRMP: Enumerations.RmpTypeReleveEnum;
        designationBancaire: string;
        codeEtablissement: string;
        listeClient: Array<IClient>;
        listeCompte: Array<ICompte>;
    }
    interface IClient {
        identifiantRMP: number;
        entiteTitulaire: number;
        designationBancaire: string;
    }
    interface ICompte {
        identifiantRMP: number;
        entiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        libelleProduit: string;
        typeProduitService: string;
        libelleCompte: string;
    }
}

/**
 * Ensemble d'interfaces de modèles concernant le service REST "tiers-v3/tiersNoyau"
 * @author S0076082 (Amy DIOP)
 */
declare module ComposantsCommunsRMP.Modeles.RmpProfessionnel.Tiers {
    interface IIdentificationTiers {
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
    }
    interface ICaracteristiqueTiers {
        /**
         * Libellé Code personnalité juridique
         */
        libellePersonnaliteJuridique: string;
        /**
         * Code état personne/entité titulaire
         */
        codeEtatPersonne: string;
        /**
         * Code type relation personne
         */
        codeTypePersonne: string;
        /**
         * Date première entrée en relation
         * Type date au format yyyy-MM-dd
         */
        dateEntreeRelation: string;
        /**
         * Code Guichet Risques BDF
         */
        codeGuichetRisque: string;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Indic droit au compte
         */
        indicateurDroitCompte: string;
        identifiantClientBad: string;
        /**
         * Code personnalité juridique
         */
        codePersonnaliteJuridique: string;
    }
    interface IInformationParticulier {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Civilité Particulier
         */
        codeCivilite: string;
        /**
         * Libellé Code Civilité
         */
        libelleCivilite: string;
        /**
         * Code Sexe Particulier
         */
        sexe: string;
        /**
         * Libellé Code Sexe Particulier
         */
        libelleSexe: string;
        /**
         * nom marital
         */
        nomMarital: string;
        /**
         * Désignation courte particulier
         */
        designationCourte: string;
        /**
         * Premier prénom état civil Personne
         */
        prenom: string;
        /**
         * Date Naissance Personne Physique
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Code INSEE localité naissance
         */
        codeCommuneNaissance: string;
        /**
         * Libellé commune naissance
         */
        libelleCommuneNaissance: string;
        /**
         * Code département naissance
         */
        codeDepartementNaissance: string;
        /**
         * libellé Département naissance
         */
        libelleDepartementNaissance: string;
        /**
         * Code pays nationalité INSEE
         */
        codeInseePaysNationalite: string;
        /**
         * Libellé nationalité pays
         */
        libelleNationalite: string;
        /**
         * Date décès Personne Physique
         * Type date au format yyyy-MM-dd
         */
        dateDeces: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Libellé appartenance réseau
         */
        libelleAppartenanceReseau: string;
        /**
         * Indic sociétaire
         */
        indicSocietaire: string;
        /**
         * Code type capacité juridique
         */
        codeCapaciteJuridique: string;
        /**
         * Libellé type capacité juridique
         */
        libelleCapaciteJuridique: string;
        /**
         * Code pays naissance INSEE
         */
        codePaysNaissance: string;
        /**
         * Libellé INSEE Pays de Naissance
         */
        libellePaysNaissance: string;
        /**
         * Code INSEE PAYS double nationalité
         */
        codeInseePaysDoubleNationalite: string;
        /**
         * Libellé double nationalité du pays
         */
        libelleDoubleNationalitePays: string;
        /**
         * Code type situation de famille
         */
        situationFamille: string;
        /**
         * Libellé situation famille
         */
        libelleCodeSituationFamiliale: string;
        /**
         * Date effet situation famille
         * Type date au format yyyy-MM-dd
         */
        dateEffetSituationFamille: string;
        /**
         * Code type régime matrimonial
         */
        codeRegimeMatrimonial: string;
        /**
         * Libellé du régime matrimonial
         */
        libelleRegimeMatrimonial: string;
        /**
         * Nombre enfants à charge
         */
        nombreEnfantACharge: number;
        /**
         * Code catégorie socio-professionnelle
         */
        codeCategorieSocioProf: string;
        /**
         * libellé CSP
         */
        libelleCsp: string;
        /**
         * Date effet CSP
         * Type date au format yyyy-MM-dd
         */
        dateEffetCsp: string;
        /**
         * Nom employeur du particulier
         */
        nomEmployeur: string;
        /**
         * Numéro SIREN employeur principal
         */
        numeroSirenEmployeurPrincipal: string;
        /**
         * Date embauche par employeur actuel
         * Type date au format yyyy-MM-dd
         */
        dateEmbaucheParEmployeurActuel: string;
        /**
         * Code type contrat travail
         */
        codeTypeContratTravail: string;
        /**
         * Libellé Code type contrat travail
         */
        libelleCodeTypeContratTravail: string;
        /**
         * Date fin contrat
         * Type date au format yyyy-MM-dd
         */
        dateFinContrat: string;
        /**
         * Code famille NAF INSEE
         */
        codeFamilleNAFINSEE: string;
        /**
         * Code NAF 3 dernier caractere
         */
        troisDerniersCaracteresNAF: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Code résident
         */
        codeResident: string;
        /**
         * Idt relation économique (ménage)
         */
        identiteRelationEcoMenage: number;
        /**
         * Référence externe EDS
         */
        referenceExterneEds: number;
        /**
         * Type clause matrimoniale
         */
        typeClauseMatrimoniale: string;
        /**
         * Code donation entre époux
         */
        codeDonationEntreEpoux: string;
        /**
         * Indicateur auto entrepreneur
         */
        indicateurAutoEntrepreneur: string;
        /**
         * Autres prénoms état civil
         */
        autresPrenomsEtatCivil: string;
        /**
         * Indic domiciliation revenus
         */
        indicDomiciliationRevenus: string;
        /**
         * Indic enreg hors présence client
         */
        indicEnregHorsPresenceClient: string;
        /**
         * Libellé profession particulier
         */
        libelleProfessionParticulier: string;
        /**
         * Code type secteur emploi
         */
        codeTypeSecteurEmploi: string;
        /**
         * Indic envoi courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Code pièce justif professionnelle
         */
        codePieceJustificative: string;
        /**
         * date d'obtention piece justificative
         * Type date au format yyyy-MM-dd
         */
        dateObtentionPieceJustificative: string;
        /**
         * Référence pièce justificative
         */
        referencePieceJustificative: string;
        /**
         * No identification fiscale NIF NNI
         */
        noIdentificationFiscaleNifNni: string;
        /**
         * Code type NIF NNI
         */
        codeTypeNifNni: string;
        /**
         * Date naturalisation
         * Type date au format yyyy-MM-dd
         */
        dateNaturalisation: string;
        /**
         * Date naissance conjoint
         * Type date au format yyyy-MM-dd
         */
        dateNaissanceConjoint: string;
        /**
         * Indic décès présumé
         */
        indicDecesPresume: string;
        /**
         * Date décès présumé
         * Type date au format yyyy-MM-dd
         */
        dateDecesPresume: string;
        /**
         * Code classe pers non éligible FGDR
         */
        eligibiliteTiers: string;
        /**
         * Indic droit au compte
         */
        indicDroitCompte: string;
        /**
         * Numero SIREN auto entrepreneur
         */
        numeroSirenAutoEntrepreneur: string;
        /**
         * Date effet option résidence
         * Type date au format yyyy-MM-dd
         */
        dateEffetOptionResidence: string;
        /**
         * Code famille catégorie juridique
         */
        codeCategorieJuridique: string;
        /**
         * Code catégorie juridique 2 dern car
         */
        codeCategoJuridi2DerCaracteres: string;
        /**
         * libelle statut FATCA
         */
        libelleStatutFatca: string;
        /**
         * Date attribution statut FATCA
         * Type date au format yyyy-MM-dd
         */
        dateAttributionStatutFatca: string;
        /**
         * Identifiant Client
         */
        identifiantBad: string;
        /**
         * Indicateur Activité Professionnelle
         */
        indicateurActiviteProfessionnel: string;
        /**
         * Idt élément structure domiciliation
         */
        identifiantEDSDomiciliation: number;
        /**
         * Nom famille Personne Physique
         */
        nomFamillePersonnePhysique: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
    }
    interface IInformationProfessionnel {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro SIREN entreprise
         */
        numeroSiren: string;
        /**
         * Code type NIF NNI
         */
        codeTypeNifNni: string;
        /**
         * Libellé code type NIF NNI
         */
        libelleCodeTypeNifNni: string;
        /**
         * No identification fiscale NIF NNI
         */
        noIdentificationFiscaleNifNni: string;
        /**
         * Nom commercial professionnel
         */
        nomCommercial: string;
        /**
         * Raison sociale
         */
        raisonSocial: string;
        /**
         * Code situation jurid professionnel
         */
        codeSituationJuridique: string;
        /**
         * libellé situation juridique prof
         */
        libelleSituationJuridiqueProf: string;
        /**
         * Code catégorie juridique INSEE
         */
        codeINSEE: string;
        /**
         * Libellé catégorie juridique INSEE
         */
        libelleCategorieJuridiqueInsee: string;
        /**
         * Date création juridique prof
         * Type date au format yyyy-MM-dd
         */
        dateCreationJuridique: string;
        /**
         * Code NAF INSEE
         */
        codeNafInsee: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Code régime fiscal du professionnel
         */
        codeRegimeFiscal: string;
        /**
         * libellé code régime fiscal
         */
        libelleCodeRegimeFiscal: string;
        /**
         * Mt Chiffre affaires social
         */
        montantChiffreAffaires: number;
        /**
         * Année CA ou budget
         */
        anneeChiffreAffaires: number;
        /**
         * Montant capital social en euro
         */
        montantCapitalSocial: number;
        /**
         * Date arrêté bilan du professionnel
         */
        dateArreteComptable: number;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Activité économique réelle prof
         */
        activiteEconomiqueReelleProf: string;
        /**
         * Code famille APE INSEE
         */
        codeFamilleApeInsee: string;
        /**
         * Deux derniers caractères APE
         */
        deuxDernierCaractereApe: string;
        /**
         * Code devise ISO 4217 alpha-3
         */
        codeDevise: string;
        /**
         * Code appartenance réseau
         */
        codeAppartenanceReseau: string;
        /**
         * Code agent économique BAFI
         */
        codeAgentEconomique: string;
        /**
         * Code Type Commerce Organisé
         */
        codeTypeCommerceOrganise: string;
        /**
         * Durée de vie personne morale
         */
        dureeViePersonneMorale: number;
        /**
         * Code pièce justif professionnelle
         */
        codePieceJustificative: string;
        /**
         * Référence pièce justificative prof
         */
        referencePieceJustificativeProf: string;
        /**
         * Code cotation Professionnel
         */
        codeCotation: string;
        /**
         * Référence externe EDS
         */
        edsDomiciliation: number;
        /**
         * Sigle
         */
        sigle: string;
        /**
         * Type de personne
         */
        codeTypeTiers: string;
        /**
         * Effectif salarié professionnel
         */
        effectif: number;
        /**
         * Code banque entité pilote
         */
        codeBanqueEntitePilote: string;
        /**
         * Code agent économique théorique
         */
        codeAgentEconomiqueTheorique: string;
        /**
         * Code mode attribution agent éco
         */
        codeModeAttributionAgentEco: string;
        /**
         * Indicateur EIRL
         */
        indicateurEirl: string;
        /**
         * Date début option EIRL
         * Type date au format yyyy-MM-dd
         */
        dateDebutOptionEirl: string;
        /**
         * Date fin option EIRL
         * Type date au format yyyy-MM-dd
         */
        dateFinOptionEirl: string;
        /**
         * Indic option opposabilité EIRL
         */
        indicOptionOpposabiliteEirl: string;
        /**
         * Indic Pers morale organisme public
         */
        indicPersMoraleOrganismePublic: string;
        /**
         * Indic Pers morale marché règlementé
         */
        indicPersMoraleMarcheReglemente: string;
        /**
         * Indic édition benefr effectifs
         */
        indicEditionBenefrEffectifs: string;
        /**
         * Identifiant LEI
         */
        identifiantLei: string;
        /**
         * Code EMIR
         */
        codeEmir: string;
        /**
         * Date clôture juridique professionnel
         * Type date au format yyyy-MM-dd
         */
        dateClotureJuridiqueProf: string;
        /**
         * Code indicateur entreprise étrangère
         */
        codeIndicateurEntrepEtrangere: string;
        /**
         * Indic délégation Client déclaration
         */
        indicDelegationClientDeclarat: string;
        identifiantEDSDomiciliation: number;
    }
    interface IInformationEtablissement {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Désignation courte lieu activité
         */
        designationEntiteTitulaire: string;
        /**
         * Code statut lieu activité
         */
        codeStatutLieuActivite: string;
        /**
         * Numéro telex lieu activité
         */
        numTelex: string;
        /**
         * Numéro télécopieur lieu activité
         */
        numTelecopieur: string;
        /**
         * Effectif du lieu d'activité
         */
        effectifDuLieuActivite: number;
        /**
         * Enseigne commerciale lieu d'activité
         */
        enseigneCommercialeLieuActivit: string;
        /**
         * Date début exploit lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateDebut: string;
        /**
         * Date fin exploitation lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Activité économique réelle lieu
         */
        activiteEconomiqueReelleLieu: string;
        /**
         * Date d' enregistrement lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateEnregistrementLieuActivite: string;
        /**
         * Date dernière mise à jour du lieu
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMiseAJourLieu: string;
        /**
         * Date dernière vérif lieu activité
         * Type date au format yyyy-MM-dd
         */
        dateDerniereVerifLieuActivite: string;
        /**
         * Désignation longue lieu activité
         */
        designationLongueLieuActivite: string;
        /**
         * Numéro SIREN professionnel
         */
        numeroSIREN: string;
        /**
         * No complément SIRET établissement
         */
        complementSIRET: string;
        /**
         * Code famille APE INSEE
         */
        codeFamilleApeInsee: string;
        /**
         * Deux derniers caractères APE
         */
        deuxDernierCaractereApe: string;
        /**
         * Code résident
         */
        codeResident: string;
        /**
         * Date dern traçage APE du prof
         * Type date au format yyyy-MM-dd
         */
        dateDernTracageApeProf: string;
        /**
         * Libellé traçage codification APE
         */
        libelleTracageCodificationApe: string;
        /**
         * Type traçage codification APE
         */
        typeTracageCodificationApe: string;
        /**
         * Code famille NAF INSEE
         */
        codeFamilleNAFINSEE: string;
        /**
         * Code NAF 3 dernier caractere
         */
        troisDerniersCaracteresNAF: string;
        /**
         * Libelle Code NAF rev2 INSEE
         */
        libelleEtablissement: string;
        /**
         * Code rafraîchissement lieu activité
         */
        codeRafraichLieuActivite: string;
    }
    interface IAdresse {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Numéro chrono professionnel
         */
        numeroChrono: number;
        /**
         * Numéro chrono lieu activité
         */
        numeroLieuActivite: number;
        /**
         * Identifiant adresse
         */
        identifiant: number;
        /**
         * Code type adresse
         */
        codeType: string;
        /**
         * Libellé type adresse
         */
        libelleType: string;
        /**
         * Ligne 2 adresse AFNOR
         */
        ligne2AFNOR: string;
        /**
         * Ligne 3 adresse AFNOR
         */
        ligne3AFNOR: string;
        /**
         * Ligne 4 adresse AFNOR
         */
        ligne4AFNOR: string;
        /**
         * Ligne 5 adresse AFNOR
         */
        ligne5AFNOR: string;
        /**
         * Ligne 6 adresse AFNOR
         */
        ligne6AFNOR: string;
        /**
         * Code postal PTT
         */
        codePostalPTT: string;
        /**
         * Code pays INSEE
         */
        codePays: string;
        /**
         * Code Pays norme ISO 3166-1 alpha-2
         */
        codeISOPays: string;
        /**
         * Libellé pays ISO3166-1
         */
        libelleISOPays: string;
        /**
         * Code INSEE localité
         */
        codeInseelocalite: string;
        /**
         * Libellé commune
         */
        libelleInseeLocalite: string;
        /**
         * Code type retour PTT
         */
        codeTypeRetourPtt: string;
        /**
         * libellé code type de retour PTT
         */
        libelleCodeTypeRetourPtt: string;
        /**
         * Indic envoi courrier
         */
        indicateurEnvoiCourrier: string;
        /**
         * Ind. dif. adresse fiscale postale
         */
        inddifadresseFiscalePostale: string;
        /**
         * Code quartier
         */
        codeQuartier: string;
        /**
         * Numéro tournée facteur
         */
        numeroTourneeFacteur: number;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Code validité adresse UNISERV
         */
        codeValiditeAdresseUniserv: string;
        /**
         * Code existence liste rouge
         */
        codeExistenceListeRouge: string;
        /**
         * Numéro fax
         */
        numeroFAX: string;
        /**
         * Code accès au Minitel
         */
        codeAccesMinitel: string;
        /**
         * Indicateur détention téléphone
         */
        indicateurDetentionTelephone: string;
        /**
         * Commentaire téléphone
         */
        commentaireTelephone: string;
        /**
         * Libellé commune
         */
        libelleCommune: string;
        /**
         * Type personne ou lieu Adresse
         */
        codeTypeLieu: string;
        /**
         * Date dernier retour PTT adresse
         * Type date au format yyyy-MM-dd
         */
        dateDernierRetourPttAdresse: string;
        /**
         * Nombre retour PTT
         */
        nombreRetourPtt: number;
        /**
         * Code postal France & Etranger
         */
        codePostalFranceEtranger: string;
        /**
         * Numéro voie PTT ville plus 50000 hab
         */
        numeroVoiePTT: number;
    }
    interface IMedia {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtab: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Type moyen de contact
         */
        typeMoyenContact: string;
        /**
         * Adresse moyen de contact
         */
        adresseMoyenContact: string;
        /**
         * Code indicatif international tel
         */
        codeIndicatifInternationalTel: string;
        /**
         * Numéro téléphone adresse
         */
        numeroTelephone: string;
        /**
         * Code Opt'in
         */
        codeOptIn: string;
        /**
         * Indic envoi média PRO OPT'OUT
         */
        indicEnvoiMediaProOptOut: string;
        /**
         * Indic envoi SMS ou fax
         */
        indicEnvoiSmsFax: string;
        /**
         * Téléphone/E-Mail préféré
         */
        telephoneEmailPrefere: string;
        /**
         * Telephone sécurisé
         */
        telephoneEmailSecurise: string;
        codeTypeMedia: string;
        libelleTypeMedia: string;
        codeTypeUsageMedia: string;
        libelleTypeUsageMedia: string;
    }
    interface IInformationTiersLie {
        identifiantPersonne: number;
        designationRelationEconomique: string;
        codeFamilleLienInterPersonne: string;
        pourcentageCapitalistique: number;
        codeQualifLienInterPersonne: string;
        dateDebutEffetLienInterPersonne: string;
        dateFinEffetLienInterPersonne: string;
        /**
         * Code banque Etablissement GCE
         */
        codeEtablissement: string;
        /**
         * Deuxième personne en relation
         */
        identifiantPersonneLie: number;
        refPieceJustificatifLien: string;
        /**
         * Personne Rattachée Relation Economiq
         */
        personneRattacheeRelation: string;
        /**
         * Code type lien inter-personnes
         */
        codeTypeLienInterPersonne: string;
        /**
         * Code sens lien inter-personnes
         */
        codeSensLienInterPersonne: string;
    }
    interface ITiersNoyau {
        caracteristiqueTiers: ICaracteristiqueTiers;
        identificationTiers: IIdentificationTiers;
        informationParticulier: IInformationParticulier;
        informationProfessionnel: Array<IInformationProfessionnel>;
        informationEtablissement: Array<IInformationEtablissement>;
        adresse: Array<IAdresse>;
        media: Array<IMedia>;
        informationTiersLie: Array<IInformationTiersLie>;
        informationsEAI: IInformationsEAI;
    }
    interface IInformationsEAI {
        codeModeSignatureEAI: string;
        indicateurOuvertureCompte: string;
        codeStatutEAI: string;
        libelleCodeStatutEAI: string;
        libelleCodeModeSignatureEAI: string;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des adresses dans l'application
 * @author S0077482 (Thomas Prat)
 */
declare module ComposantsCommunsRMP.Services {
    interface IAdresseClient {
        adresseRest: Modeles.RmpProfessionnel.InformationDetaillee.IAdresse;
        client: Modeles.RmpProfessionnel.InformationDetaillee.IClient;
        libelleCompletAdresse: string;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelAdresseClientService {
        creerListeAdresseFromListeProduit: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>) => Array<IAdresseClient>;
        transformerAdresseRestEnAdresseService: (clientWithAdresseRest: Modeles.RmpProfessionnel.InformationDetaillee.IClient) => IAdresseClient;
        recupererClientFromListeAdresse: (listeAdresse: Array<Services.IAdresseClient>, adresse: Modeles.RmpProfessionnel.InformationDetaillee.IAdresse) => Modeles.RmpProfessionnel.InformationDetaillee.IClient;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des adresses dans l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    interface IAdresse {
        adresseRest: Modeles.RmpProfessionnel.InformationDetaillee.IAdresse;
        libelleCompletAdresse: string;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelAdresseService {
        creerListeAdresseFromListeProduit: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>) => Array<IAdresse>;
        transformerAdresseRestEnAdresseService: (adresseRest: Modeles.RmpProfessionnel.InformationDetaillee.IAdresse) => IAdresse;
        recupererAdresseFromListeProduit: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>, numeroCompteProduitPrincipal: string) => Modeles.RmpProfessionnel.InformationDetaillee.IAdresse;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des dates
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IDateService {
        convertirRestVersDate: (dateRest: string) => Date;
        convertirDateVersRest: (date: Date) => string;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des erreurs
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IErreurService {
        afficherErreur: (reason: MyWay.Services.Erreur) => void;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des périodicités
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface des objets périodicité utilisé par le service
     */
    interface IPeriodicite {
        periodicite: Modeles.RmpProfessionnel.InformationDetaillee.IPeriodiciteCompte;
        libelleCompletPeriodicite: string;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelPeriodiciteService {
        creerListePeriodiciteService: (listePeriodiciteRest: Array<Modeles.RmpProfessionnel.InformationDetaillee.IPeriodiciteCompte>) => Array<IPeriodicite>;
        creerPeriodiciteService: (periodiciteRest: Modeles.RmpProfessionnel.InformationDetaillee.IPeriodiciteCompte) => IPeriodicite;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des types de présentations
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface des objets présentations utilisés par le service
     */
    interface IPresentation {
        codePresentation: Enumerations.RmpPresentationOperationEnum;
        libelleCompletPresentation: string;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelPresentationService {
        creerListeTypePresentation: () => Array<IPresentation>;
    }
}

/**
 * Service contenant des fonctionnalités pour la récupération de compte
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface d'un groupe de produits, permet d'avoir les produits par titulaire
     */
    interface IGroupeProduit {
        titulaireProduit: string;
        listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelProduitService {
        recupererInfoParProduit: (produit: Modeles.RmpProfessionnel.InformationDetaillee.IProduit) => MyWay.Services.IPromesse<MyWay.Model.Compte>;
        recupererInfoParParametre: (codeEtablissement: string, codeGuichet: string, numeroCompte: string) => MyWay.Services.IPromesse<MyWay.Model.Compte>;
        filtrerProduitParType: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>, typeProduit: Enumerations.RmpTypeProduitEnum) => Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>;
        creerSousGroupeProduit: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>) => Array<IGroupeProduit>;
        verifierPresenceCompteEpargne: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>, typeProduit: Enumerations.RmpTypeProduitEnum) => boolean;
        modifierTypeProduitPrincipal: (listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>, numeroComptePrincipal: string, typeProduit: Enumerations.RmpTypeProduitEnum) => void;
        rattacherCompteAuReleve: (releve: Modeles.RmpProfessionnel.InformationDetaillee.IReleve, numeroCompte: string, identifiantTiers: number) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.Composition.IProduit>;
        detacherCompteAuReleve: (releve: Modeles.RmpProfessionnel.InformationDetaillee.IReleve, numeroCompte: string, identifiantTiers: number) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des relevés
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IRmpProfessionnelReleveService {
        genererNouveauReleve: (codeEtablissement: string, identifiantTiers: number, numeroCompteCCE: string) => MyWay.Services.IPromesse<ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        genererModificationReleve: (codeEtablissement: string, identifiantTiers: number, identifiantRMP: number) => MyWay.Services.IPromesse<ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        creerReleve: (nouveauReleve: ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve, codeEtablissement: string, identifiantTiers: number, numeroEntiteTitulaire: number) => MyWay.Services.IPromesse<ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        modifierReleve: (releveModifie: ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve, codeEtablissement: string, identifiantTiers: number, numeroEntiteTitulaire: number, listeProduitsAvantModification: ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IProduit[]) => MyWay.Services.IPromesse<ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        verifierPresenceCompte: (releve: ComposantsCommunsRMP.Modeles.RmpProfessionnel.InformationDetaillee.IReleve, numeroCompte: string) => boolean;
    }
}

/**
 * Service contenant des fonctionnalités pour la gestion des supports de tarification
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface des objects représentant les supports manipulés par la directive
     */
    interface ISupportTarification extends Modeles.RmpProfessionnel.InformationDetaillee.ISupportTarification {
        nomClientBancaire: string;
        libelleSupportComplet: string;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelSupportTarificationService {
        creerListeDonnesSupportDirective: (listeSupport: Array<Modeles.RmpProfessionnel.InformationDetaillee.ISupportTarification>, listeProduit: Array<Modeles.RmpProfessionnel.InformationDetaillee.IProduit>) => Array<ISupportTarification>;
        trouverSupportPreAffichage: (numeroCompte: string, listeSupport: Array<ISupportTarification>) => ISupportTarification;
    }
}

/**
 * Service contenant des fonctionnalités pour la récupération et la manipulation des relevés d'un tableau de relevé
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface définissant la structure des éléments manipulés par les tableaux de RMP
     */
    interface IMwTableauRmpItem {
        identifiantRMP: number;
        typeDeRmp: string;
        destinatairePrincipal: string;
        indicateurCompteAjoute: boolean;
        informationRMPGeneral: Modeles.RmpProfessionnel.Recherche.IReleve;
        queryInformationRMPDetaille: IRmpProfessionnelInformationDetailleeServiceGetQuery;
        informationRMPDetaille: Modeles.RmpProfessionnel.InformationDetaillee.IReleve;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelTableauItemService {
        recupererListeTableauItem: (query: Services.IRmpProfessionnelRechercheServiceQuery) => MyWay.Services.IPromesse<Array<IMwTableauRmpItem>>;
        recupererTypeReleve: (listeReleve: Array<IMwTableauRmpItem>, typeReleve: Enumerations.RmpTypeReleveEnum) => Array<IMwTableauRmpItem>;
        rattacherCompte: (releve: IMwTableauRmpItem, numeroCompte: string, identifiantTiers: number) => MyWay.Services.IPromesse<void>;
        detacherCompte: (releve: IMwTableauRmpItem, numeroCompte: string, identifiantTiers: number) => MyWay.Services.IPromesse<void>;
        detacherCompteSansMajServeur: (releve: IMwTableauRmpItem, numeroCompte: string, identifiantTiers: number) => void;
    }
}

declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST /rmpprofessionnel/v1/composition
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface du service
     */
    interface IRmpProfessionnelCompositionService {
        sendPostRequest: (data: Modeles.RmpProfessionnel.Composition.IProduit) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.Composition.IProduit>;
        sendDeleteRequest: (data: Modeles.RmpProfessionnel.Composition.IProduit) => MyWay.Services.IPromesse<void>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST /rmpprofessionnel/v1/destinataireComplementaire
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface de la requête au service REST /rmpprofessionnel/v1/recherche de type GET
     */
    interface IRmpProfessionnelDestinataireComplementaireServiceQuery {
        /**
         * Code de l'établissement
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'un relevé RMP Pro. Référence interne non connue du client
         */
        numeroIdentifiantRmp: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Établissement
         * Référence interne MYSYS
         */
        identifiantPersonne: number;
        /**
         * Numéro d'identification d'un client détenteur de contrat(s) de produit/service dans le SI d'un Établissement du GCE.
         * Synonyme : Client bancaire.
         * Une Entité Titulaire se compose d'une ou plusieurs personnes.
         */
        numeroEntiteTitulaire?: number;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelDestinataireComplementaireService {
        sendGetRequest: (query: IRmpProfessionnelDestinataireComplementaireServiceQuery) => ng.IPromise<Modeles.RmpProfessionnel.DestinataireComplementaire.IDestinataireComplementaire>;
        sendPostRequest: (data: Modeles.RmpProfessionnel.DestinataireComplementaire.ILienRmp) => ng.IPromise<Modeles.RmpProfessionnel.DestinataireComplementaire.ILienRmp>;
        sendDeleteRequest: (data: Modeles.RmpProfessionnel.DestinataireComplementaire.ILienRmp) => ng.IPromise<void>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST /rmpprofessionnel/v1/informationDetaillee
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface de la requête au service REST /rmpprofessionnel/v1/recherche de type GET
     */
    interface IRmpProfessionnelInformationDetailleeServiceGetQuery {
        /**
         * Code de l'établissement
         */
        codeEtablissement: string;
        /**
         * Indentifiant du RMP
         */
        identifiantRMP?: number;
        /**
         * Code action de la requête
         */
        codeAction: Enumerations.RmpTypeAction;
        /**
         * Identifiant tiers
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement.
         * Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantTiers?: number;
    }
    /**
     * Interface de la requête au service REST /rmpprofessionnel/v1/recherche de type DELETE
     */
    interface IRmpProfessionnelInformationDetailleeServiceDeleteQuery {
        /**
         * Code de l'établissement
         */
        codeEtablissement: string;
        /**
         * Indentifiant du RMP
         */
        identifiantRMP: number;
        /**
         * Identifiant tiers
         * Définition : Numéro d'identification du tiers dans le SI d'un Etablissement.
         * Référence interne MYSYS Personne référencée comme client, tiers ou prospect.
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne)
         */
        identifiantPersonne: number;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelInformationDetailleeService {
        sendGetRequest: (query: IRmpProfessionnelInformationDetailleeServiceGetQuery) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        sendPostRequest: (data: Modeles.RmpProfessionnel.InformationDetaillee.IReleve) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        sendPutRequest: (data: Modeles.RmpProfessionnel.InformationDetaillee.IReleve) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
        sendDeleteRequest: (query: IRmpProfessionnelInformationDetailleeServiceDeleteQuery) => MyWay.Services.IPromesse<Modeles.RmpProfessionnel.InformationDetaillee.IReleve>;
    }
}

/**
 * Service permettant d'effectuer les appels au service REST /rmpprofessionnel/v1/recherche
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
    /**
     * Interface de la requête au service REST /rmpprofessionnel/v1/recherche de type GET
     */
    interface IRmpProfessionnelRechercheServiceQuery {
        /**
         * Code établissement banque entité juridique
         */
        codeEtablissement: string;
        /**
         * Code guichet interbancaire
         */
        codeGuichet?: string;
        /**
         * Numéro d'identification d'un compte géré par un établissement du GCE
         */
        numeroCompte?: string;
        /**
         * Numéro de personne
         */
        identifiantTiers?: number;
        /**
         * Permet de choisir la méthode de recherche des RMP.
         * Type de Recherche :
         * 'C' pour une recherche par numero de compte;
         * 'L' pour une recherche par numero de personne.
         */
        typeRecherche: Enumerations.RmpProfessionnelTypeRechercheEnum;
    }
    /**
     * Interface du service
     */
    interface IRmpProfessionnelRechercheService {
        sendGetRequest: (query: IRmpProfessionnelRechercheServiceQuery) => MyWay.Services.IPromesse<Array<Modeles.RmpProfessionnel.Recherche.IReleve>>;
    }
}

/**
 * Service contenant des fonctionnalités pour la récupération des informations liées à la personne courante dans NSDK
 * @author S0076082
 */
declare module ComposantsCommunsRMP.Services {
    class RmpProfessionnelTiersService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        private _tiersInformation;
        /**
         * Préparation de l'objet
         * @author S0076082
         * @param objet
         */
        private setTiersInformation(objet);
        urlRestTiersNoyau: string;
        /**
         * Méthode de recuperation de la ressource TiersNoyau : Projet ergonomie myway
         * @author S0076082
         * @param codeEtablissement
         * @param identifiantPersonne
         */
        recupererTiersNoyau(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Modeles.RmpProfessionnel.Tiers.ITiersNoyau>;
    }
}

/**
 * Classe de fonction utilitaire pour les services de l'application
 * @author S0076471 (Grégory Barale)
 */
declare module ComposantsCommunsRMP.Services {
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
