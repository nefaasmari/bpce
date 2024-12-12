
declare module LibrairieAffairesCreBdr {
    let app: ng.IModule;
}

declare module LibrairieAffairesCreBdr.Constantes.Application {
    module Tableaux {
        const THEAD_STICKY: string;
        const NB_LIGNE_TABLEAU: number;
        const CAPTION_TABLEAU_AFFAIRES: string;
        const TAB_AFFAIRES_AUCUN_ELEMENT: string;
    }
    module Environnement {
        const local: string;
    }
    module Affaire {
        const NUM_CREATION: number;
    }
    module ErreurDetectee {
        const RESSOURCE_NON_TROUVEE: string;
        const TITRE_POPUP_ERREUR_TRAITEMENT: string;
        const ERREUR_INTERNE_SERVICE: string;
        const AUCUN_CRITERE_RECHERCHE: string;
        const AUCUNE_AFFAIRE_A_ENREGISTRER: string;
        const SERVICE_NON_INSTANCIE: string;
        const PB_MAJ_TABLEAU_AFFAIRES: string;
        const PARAMETRE_APPEL_INVALIDE: string;
        const DONNEES_RECUES_INVALIDES: string;
        const ECHEC_INITIALISATION: string;
        const ECHEC_CREATION_AFFAIRE: string;
    }
    module Proposition {
        const EN_COURS: string;
        const EN_ATTENTE_DELEGATION: string;
        const EN_ATTENTE_RETOUR: string;
    }
    module Affichage {
        const NON_CONCERNE: string;
        const CODE_FACTICE: string;
        const MONTANT_ABSENT: string;
        const DATE_ABSENTE: string;
        const SOURCE_ABSENTE: LibrairieAffairesCreBdr.Modeles.Application.ISource;
        const STATUT_ABSENT: LibrairieAffairesCreBdr.Modeles.Application.IStatut;
        const PRODUIT_SERVICE_ABSENT: LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue;
    }
    module InfosPages {
        const VUE_MODIFICATION_AFFAIRE: string;
        const VUE_SUPPRESSION_AFFAIRE: string;
        const VUE_CREATION_AFFAIRE: string;
        const TITRE_MODIFICATION_AFFAIRE: string;
        const TITRE_SUPPRESSION_AFFAIRE: string;
        const TEXTE_SUPPRESSION_AFFAIRE: string;
        const TITRE_AJOUT_AFFAIRE: string;
    }
    module SourceCre {
        const CODE_CRE: string;
        const LIBELLE_CRE: string;
        const SOURCE_CRE: LibrairieAffairesCreBdr.Modeles.Application.ISource;
    }
    module StatutCre {
        const CODE_CRE: string;
        const LIBELLE_CRE: string;
        const STATUT_CRE: LibrairieAffairesCreBdr.Modeles.Application.IStatut;
    }
    module MarqueurStatique {
        const LABEL_PRIMARY: string;
        const LABEL_SUCCESS: string;
        const LABEL_WARNING: string;
        const LABEL_DEFAULT: string;
    }
    module Boutons {
        const BOUTON_ANNULER: string;
        const BOUTON_SUPPRIMER: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Format {
    module DateRest {
        const SSAA_MM_JJ_TIRET6: string;
        const SSAA_MM_JJ_SLASH: string;
        const DATE_DEFAUT_VERS_REST: string;
        const DATE_DEFAUT_DEPUIS_REST: string;
    }
    module DateApplication {
        const JJ_MM_SSAA_SLASH: string;
        const SSAA_MM_JJ_TIRET6: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Habilitation {
    const HABILITATION_MODIFICATION_AFFAIRE: string;
    const HABILITATION_CONSULTATION_REVUE: string;
    const HABILITATION_MODIFICATION_REVUE: string;
    const HABILITATION_PROPOSITION: string;
}

declare module LibrairieAffairesCreBdr.Constantes.Injection {
    const RADICAL_NOMMAGE_LIBRAIRE: string;
    module Angular {
        const $q: string;
        const $modalInstance: string;
        const $scope: string;
        const $location: string;
        const $filter: string;
        const $parse: string;
        const $window: string;
        const $rootScope: string;
        const $element: string;
        const $anchorScroll: string;
        const $injector: string;
        const $http: string;
    }
    module MyWay {
        const serviceAgentExtended: string;
        const serviceAgent: string;
        const tableServiceOpefi: string;
        const mwsfRechercheEdsGlobaleService: string;
        const data: string;
        const mwEvents: string;
        const portailService: string;
    }
    module ServicesUtilitaires {
        const MOCK_LOADER_SERVICE: string;
        const INITIALISATION_SERVICE: string;
        const OUTILS_SERVICE: string;
    }
    module ServicesRest {
        const AFFAIRES_SERVICE: string;
    }
    module ServicesApplication {
        const AFFAIRES_SERVICE: string;
        const GESTION_AFFAIRES_SERVICE: string;
        const TABLEAU_AFFAIRES_SERVICE: string;
        const CORPORATE_ORGANIGRAMME_SERVICE: string;
        const PROPOSITIONS_SERVICE: string;
    }
    module Controleur {
        const DETAIL_AFFAIRES_CONTROLEUR: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Mock {
    module CheminFichier {
        const GET_AFFAIRES: string;
        const PUT_AFFAIRES: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Nommage {
    module ControleursNomsLongs {
        const GESTION_AFFAIRES: string;
        const MODIFICATION_AFFAIRE: string;
        const SUPPRESSION_AFFAIRE: string;
        const CREATION_AFFAIRE: string;
        const AGREGAT_FAMILLES_PRODUITS: string;
        const COLONNE_STATUT: string;
        const COLONNE_MONTANT: string;
        const COLONNE_SOURCE: string;
    }
    module ControleursNomsCourts {
        const GESTION_AFFAIRES: string;
        const MODIFICATION_AFFAIRE: string;
        const SUPPRESSION_AFFAIRE: string;
        const CREATION_AFFAIRE: string;
        const AGREGAT_FAMILLES_PRODUITS: string;
        const COLONNE_STATUT: string;
    }
    module Directives {
        const GESTION_AFFAIRES: string;
        const AGREGAT_FAMILLES_PRODUITS: string;
    }
    module Filtres {
        const MONTANT_NA: string;
    }
    module ServicesRest {
        const AFFAIRES_MOCK_SERVICE: string;
        const AFFAIRES_REST_SERVICE: string;
        const LIEN_PROPAL_AFFAIRE_REST_SERVICE: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Rest {
    module CheminRessource {
        const racineRessources: string;
        const ressourceAffaire: string;
        const ressourceLienPropalAffaireGet: string;
        const ressourceLienPropalAffairePost: string;
    }
    module DonneeMock {
        const RACINE_FICHIERS: string;
        const EXTENSION_FICHIERS: string;
    }
    module RubriqueNotable {
        const VALEUR_CODE_APPLICATION: string;
        const CLOTUREE_PERDUE_NON_INTERESSE: string;
        const CLOTUREE_PERDUE_EN_COURS: string;
        const CLOTUREE_GAGNEE: string;
        const EN_COURS: string;
        const A_PROPOSER: string;
    }
    module Proposition {
        const EN_COURS: string;
        const EN_ATTENTE_DELEGATION: string;
        const EN_ATTENTE_RETOUR: string;
    }
    module urlsRest {
        var URL_REST_TIERSCORPORATEV1_CORPORATE_ORGANIGRAMME: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.TableDelocalisee {
    module NomTable {
        const P61A_FAMILLE_PRODUITS_BDR: string;
        const P61B_AFFICHAGE_SOUS_FAMILLE_PRODUITS_BDR: string;
        const P61C_SOUS_FAMILLE_PRODUITS_BDR: string;
        const P61F_SOUS_FAMILLE_PRODUITS_PAR_MARCHE_BDR: string;
    }
    module NomRubrique {
        const CEPIAF_STATUTS: string;
        const COPISA_SOURCE_CREATION: string;
        const COPIMA_SOURCE_MODIFICATION: string;
    }
}

declare module LibrairieAffairesCreBdr.Constantes.Url {
    module TemplateUrl {
        const GESTION_AFFAIRES: string;
        const AGREGAT_FAMILLES_PRODUITS: string;
    }
}

declare module LibrairieAffairesCreBdr.Enums {
    module Technique {
        enum TypeAction {
            CREER = 1,
            MODIFIER = 2,
            SUPPRIMER = 3,
        }
    }
    module TypeSource {
        enum Code {
            REVUE,
            CRE,
        }
    }
    module Statut {
        enum Code {
            SUPRIMER,
            CREATION,
            PROPOSITION,
        }
    }
}

declare module LibrairieAffairesCreBdr.Montants.Filter {
    /**
     * Affichage de montant NA
     */
    function montantNa(): (montant: number) => string;
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateModale {
    class CreationAffaireControleur {
        private $modalInstance;
        private data;
        private initialisationService;
        private affairesService;
        private propositionsService;
        private pdtHabilitationService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        private affaireACreer;
        private listeAffaires;
        private titreModale;
        private clientSelectionne;
        private affaireACreerParDefaut;
        private listeClientProspect;
        erreurAffaireExiste: boolean;
        erreurDateRelance: boolean;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataCreationAffaire, initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService, affairesService: LibrairieAffairesCreBdr.Services.Application.IAffairesService, propositionsService: LibrairieAffairesCreBdr.Services.Application.IPropositionsService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        getLiensPropositions(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): void;
        afficherPropositions(): boolean;
        private getDonneesClientByIdentifiant(identifiantPersonne);
        /**
         * rechargerListeAgregatFamilleProduitParCodeMarche
         * @returns {void}
         */
        rechargerListeAgregatFamilleProduitParCodeMarche(item: LibrairieAffairesCreBdr.Modeles.Application.IClientProspect): void;
        /**
         * Action sur la croix  pour recompiler
         * @returns {void}
         */
        fermer(): void;
        private getDonneesClientByRaisonSociale(raisonSociale);
        valider(): void;
        /**
         * Annule les changements effectués par l'utilisateur et affiche l'affaire telle qu'elle était à l'ouverture de la popup
         */
        annuler(): void;
        /**
         * Détermine si l'utilisateur a modifié l'affaire en cours (true si modifiée)
         */
        creationEstEnCours(): boolean;
        montantInputCheck(montant: number): boolean;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateModale {
    class ModificationAffaireControleur {
        private $modalInstance;
        private data;
        private initialisationService;
        private propositionsService;
        private affairesService;
        private tableauAffairesService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        private affaireAModifier;
        private titreModale;
        private sourceModificationDefaut;
        private choixListeStatut;
        private listeClientProspect;
        erreurAffaireExiste: boolean;
        erreurDateRelance: boolean;
        private listeAffaires;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataModificationAffaire, initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService, propositionsService: LibrairieAffairesCreBdr.Services.Application.IPropositionsService, affairesService: LibrairieAffairesCreBdr.Services.Application.IAffairesService, tableauAffairesService: LibrairieAffairesCreBdr.Services.Application.ITableauAffairesService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        private getcodeMarcheByIdentifiant(identifiantPersonne);
        /**
         * Action sur la croix
         * @returns {void}
         */
        fermer(): void;
        valider(): void;
        afficherPropositions(): boolean;
        annuler(): void;
        tableauAffaires: Modeles.Tableaux.TableauAffaires;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateModale {
    class SuppressionAffaireControleur {
        private $modalInstance;
        private data;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        private affaireASupprimer;
        private titreModale;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataSuppressionAffaire);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Action sur la croix
         * @returns {void}
         */
        fermer(): void;
        /**
         * Ferme la popup et retourne l'affaire supprimée
         */
        supprimer(): void;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateTableau {
    class ColonneDateRelanceControleur {
        static $inject: any[];
        constructor();
        formatAffichageDateRelance(date: string): string;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateTableau {
    class ColonneMontantControleur {
        static $inject: any[];
        constructor();
        formatAffichageMontant(montant: number): string;
        formatNumberInThousand(montant: number): string;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateTableau {
    class ColonneStatutControleur {
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        constructor();
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Détermine le style de la banière en fonction du code staut transmis
         * @param code
         */
        determinerClassLabel(codeStatut: string): string;
    }
}

declare module LibrairieAffairesCreBdr.Controleurs.TemplateTableau {
    class DetailAffaireControleur {
        private $q;
        private $scope;
        private initialisationService;
        private pdtHabilitationService;
        private propositionsService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        numAffaire: number;
        affairesShow: Array<Modeles.Application.ILienAffaireShow>;
        private _visible;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: ng.IScope, initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService, propositionsService: LibrairieAffairesCreBdr.Services.Application.IPropositionsService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param commentaire
         */
        estAvecCommentaire(commentaire: string): boolean;
        showLienPropalAffaire(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): void;
        rechercherLienPropalAffaire(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): void;
        genererAffairesShow(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): void;
        /**
         *
         * @param commentaire
         */
        estSansCommentaire(commentaire: string): boolean;
        visible: boolean;
    }
}

declare module LibrairieAffairesCreBdr.Directives.AgregatFamillesProduits.Controleur {
    class AgregatFamillesProduitsControleur {
        private initialisationService;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        affaireEnCours: LibrairieAffairesCreBdr.Modeles.Application.IAffaire;
        private listeAgregatFamilleProduitBdr;
        static $inject: string[];
        constructor(initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        chargerListeAgregatFamilleProduitParCodeMarcheBdr: Array<LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue>;
        /**
         * Indique si les données saisies dans la directive sont valides (true si valides)
         */
        donneesSaisiesSontOk(): boolean;
    }
}

/**
 * Directive agregat-familles-produits
 * @module LibrairieAffairesCreBdr.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module LibrairieAffairesCreBdr.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwLibAffAgregatFamillesProduits(): ng.IDirective;
}

declare module LibrairieAffairesCreBdr.Directives.GestionAffaires.Controleur {
    class LibAffGestionAffairesControleur implements MyWay.UI.ISelectionChangeHandler {
        private $q;
        private $scope;
        private affairesService;
        private gestionAffairesService;
        private popupService;
        private initialisationService;
        private propositionsService;
        private tableauAffairesService;
        private pdtHabilitationService;
        private serviceAgentExtended;
        static NOM_CLASSE: string;
        static logger: MyWay.Services.Loggers.ILogger;
        gestionAffaires: LibrairieAffairesCreBdr.Directives.GestionAffaires.IGestionAffaires;
        private nomTableauAffaires;
        private affaireEnCours;
        private indiceAffaireEnCours;
        private titreTableauAffaire;
        peutModifierAffaires: boolean;
        static $inject: string[];
        /**
         *
         * @param $q
         * @param $scope
         * @param affairesService
         * @param gestionAffairesService
         * @param popupService
         * @param initialisationService
         * @param tableauAffairesService
         * @param pdtHabilitationService
         * @param serviceAgentExtended
         */
        constructor($q: ng.IQService, $scope: ng.IScope, affairesService: LibrairieAffairesCreBdr.Services.Application.IAffairesService, gestionAffairesService: LibrairieAffairesCreBdr.Services.Application.IGestionAffairesService, popupService: PdtEntreprise.Services.IPopupService, initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService, propositionsService: LibrairieAffairesCreBdr.Services.Application.IPropositionsService, tableauAffairesService: LibrairieAffairesCreBdr.Services.Application.ITableauAffairesService, pdtHabilitationService: PdtEntreprise.Services.IPdtHabilitationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         *
         */
        initialisation(): void;
        /**
         * Méthode déclenchée sur la sélection d'une ligne du tableau (autrement dit une affaire).
         * @param affaireSelectionnee
         */
        onSelectionChange(affaireSelectionnee: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): void;
        /**
         * Indique si la directive doit être affichée ou non (true => affichée)
         * @param donneesRecuesDirective
         */
        directiveEstAffichable(donneesRecuesDirective: LibrairieAffairesCreBdr.Directives.GestionAffaires.IGestionAffaires): boolean;
        /**
         * Grise/dégrise le bouton Modifier => Dépend de la sélection/non sélection d'une ligne du tableau
         */
        inactiverBoutonModifier(): boolean;
        /**
         * Cache ou non le bouton Supprimer => Dépend de la sélection/non sélection d'une ligne du tableau
         */
        cacherBoutonSupprimer(): boolean;
        /**
         * Affiche de NEW
         */
        newCre(): boolean;
        /**
         * Méthode déclenchée sur le clic du bouton Ajouter
         */
        ajouterAffaire(): ng.IPromise<void>;
        /**
         * Méthode déclenchée sur le clic du bouton Modifier
         */
        modifierAffaire(): ng.IPromise<void>;
        /**
         * Méthode déclenchée sur le clic du bouton Supprimer
         */
        supprimerAffaire(): ng.IPromise<void>;
        /**
         * Méthode initialisant les données manipulées dans la directive.
         */
        private initialiserContenuDirective();
        /**
         * Méthode chargée d'initialiser les valeurs à présenter dans le tableau des affaires.
         */
        private initialiserTableau();
        private initialiserDonneesUtiles();
        /**
         * Méthode chargée de répercuter dans le tableau, les changements liés à une création,
         * modification ou suppression d'une affaire => Retour true si aucun problème
         * @param affaireConcernee
         * @param typeChangement
         */
        private repercuterChangement(affaireConcernee, typeChangement);
        /**
         * Méthode répercutant l'ajout d'une affaire dans le tableau => Retour à true si répercussion réalisée avec succès
         * @param affaire
         */
        private repercuterCreationAffaire(affaire);
        /**
         * Méthode répercutant la modification d'une affaire dans le tableau => Retour à true si répercussion réalisée avec succès
         * @param affaire
         */
        private repercuterModificationAffaire(affaire);
        /**
         * Méthode répercutant la suppression d'une affaire dans le tableau
         */
        private repercuterSuppressionAffaire(affaire);
        bouttonModifierAffaireDesactive: boolean;
        bouttonSupprimerAffaireVisible: boolean;
        modificationCreAutorisee: boolean;
        libelleIntituleRelation: string;
        directiveAffichable: boolean;
        chargementAffairesEnCours: boolean;
        tableauAffaires: Modeles.Tableaux.TableauAffaires;
    }
    /**
     * Interface de la classe GestionAffairesControleur
     */
    interface ILibAffGestionAffairesControleur {
        newCre(): boolean;
    }
}

/**
 * Directive gestion-affaires
 * @module LibrairieAffairesCreBdr.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module LibrairieAffairesCreBdr.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwLibAffGestionAffaires(): ng.IDirective;
}

/**
 * Ensemble d'interfaces des modèles applicatifs liés à la gestion des affaires
 * @module LibrairieAffairesCreBdr.Directives.GestionAffaires
 * @author S0005410 (Eric Jacquot)
 */
declare module LibrairieAffairesCreBdr.Directives.GestionAffaires {
    interface IGestionAffaires {
        identifiantPersonne: number;
        infosCre: LibrairieAffairesCreBdr.Directives.GestionAffaires.IInformationsCre;
    }
    interface IInformationsCre {
        identifiantCre?: number;
        dateCreationCre?: Date;
        modificationCreAutorisee: boolean;
    }
}

declare module LibrairieAffairesCreBdr.Directives.StatutProduits.Controleur {
    class StatutProduitsControleur {
        private initialisationService;
        static CLASS_NAME: string;
        affaireEnCours: LibrairieAffairesCreBdr.Modeles.Application.IAffaire;
        private listeStatutProduitBdr;
        static $inject: string[];
        constructor(initialisationService: LibrairieAffairesCreBdr.Services.Utilitaires.ILibAffCreBdrInitialisationService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Indique si les données saisies dans la directive sont valides (true si valides)
         */
        donneesSaisiesSontOk(): boolean;
    }
}

declare module LibrairieAffairesCreBdr.Directives {
    function mwLibAffStatutProduits(): ng.IDirective;
}

declare module LibrairieAffairesCreBdr.Modeles.Application {
    interface ICritereRechercheAffaire {
        identifiantPersonne: number;
        identifiantCre?: number;
        dateCre?: string;
    }
    interface IAffaire extends LibrairieAffairesCreBdr.Modeles.Tableaux.General.IElementTableau {
        numeroAffaire: number;
        sourceCreation: LibrairieAffairesCreBdr.Modeles.Application.ISource;
        sourceModification: LibrairieAffairesCreBdr.Modeles.Application.ISource;
        identifiantPersonne: number;
        montant: number;
        agregatInfosProduit: LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue;
        dateCreation: string;
        dateRelance: string;
        dateCloture: string;
        statut: LibrairieAffairesCreBdr.Modeles.Application.IStatut;
        raisonSociale: string;
        creeViaPopinAjout: boolean;
        commentaire: string;
        ajouterEnCours?: boolean;
        estModifier?: boolean;
        codeMarche: string;
        nbLienProposition: number;
        habiliteProposition: boolean;
        liensAffairePropal: Array<Modeles.Application.ILienAffairePropal>;
        liensAffairePropalModifie: Array<Modeles.Application.ILienAffairePropal>;
    }
    /**
     * Modèle famille/Sous-famille produit applicatif (concerne l'application 'REVUE' cf. table P61A)
     */
    interface IAgregatRevue {
        nomApplication: string;
        codeFamilleProduit: string;
        libelleFamilleProduit: string;
        codeSousFamilleProduit: string;
        libelleSousFamilleProduit: string;
    }
    /**
     * Modèle source : application à l'origine de l'affaire
     */
    interface ISource {
        code: string;
        libelle: string;
    }
    /**
     * Modèle statut : statut de l'affaire
     */
    interface IStatut {
        code: string;
        libelle: string;
    }
    /**
     * Modèle client prospect : Client Prospect combo box
     */
    interface IClientProspect {
        identifiantPersonne: number;
        raisonSociale: string;
        codeSegmentMarche: string;
        codeTypeSegmentMarche: string;
    }
    interface ILienAffaireShow {
        coche: boolean;
        libelle: string;
    }
    interface ILienAffairePropal {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroAffaireBDR: number;
        numeroProposition: number;
        codeStatutProposition: string;
        libelleProposition: string;
        dateCreationProposition: string;
        dateFinValiditeProposition: string;
        libelleLong: string;
        coche: boolean;
    }
}

/**
 * Ensemble d'interfaces de modèles des tables délocalisées
 * @module PortefeuilleRevue.Modeles.Application
 * @author S0005354 (JM FOLLETTI)
 */
declare module LibrairieAffairesCreBdr.Modeles.TableDelocalisee {
    /**
     * Modèle famille produit issu du Central (table delocalisée P61A)
     */
    interface IFamilleProduitRest {
        IDSECR: number;
        /** Code famille produit */
        CGPIFA: string;
        HDEHEG: string;
        IDSEMJ: string;
        /** Libellé famille produit */
        LBPIFA: string;
    }
    /**
     * Modèle de paramétrage famille produit issu du Central (table delocalisée P61B)
     */
    interface IConfigFamilleProduitRest {
        IDSECR: number;
        HMEHEG: string;
        HDEHEG: string;
        /** code sous famille */
        CGPISF: string;
        /** nom application */
        CGPIAP: string;
    }
    /**
     * Modèle sous famille produit issu du Central (table delocalisée P61C)
     */
    interface ISousFamilleProduitRest {
        CGPIAF: string;
        IDSECR: string;
        /** code famille */
        CGPIFA: string;
        HDEHEG: string;
        /** position sous famille */
        NSPISF: string;
        CIPISE: string;
        /** code sous famille */
        CGPISF: string;
        /** Libellé sous famille */
        LBPISF: string;
        IDSEMJ: number;
    }
    /**
     * Modèle sous famille produit avec code segment clientèle issu du Central (table delocalisée P61F)
     */
    interface ISousFamilleProduitParMarcheRest {
        /** code sous famille */
        CGPISF: string;
        /** Code type segment clientele */
        CODLTS: string;
        /** Code segment clientèle */
        CODLST: string;
        HDEHEG: string;
        IDSECR: string;
        HMEHEG: string;
        IDSEMJ: number;
    }
    /**
     * Modèle correspondant aux rubriques délocalisées
     */
    interface IRubriqueDelocalisee {
        Key: string;
        Value: string;
    }
    /**
     * Modèle source création issu du Central (rubrique délocalisée COPISA)
     */
    interface ISourceCreationRest extends IRubriqueDelocalisee {
    }
    /**
     * Modèle source modification issu du Central (rubrique délocalisée COPIMA)
     */
    interface ISourceModificationRest extends IRubriqueDelocalisee {
    }
    /**
     * Modèle statut issu du Central (rubrique délocalisée CEPIAF)
     */
    interface IStatutRest extends IRubriqueDelocalisee {
    }
}

declare module LibrairieAffairesCreBdr.Modeles.TemplateModale {
    interface ITemplateDataActionAffaire {
        titreModale: string;
    }
    interface ITemplateDataModificationAffaire extends LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataActionAffaire {
        affaireAModifier: LibrairieAffairesCreBdr.Modeles.Application.IAffaire;
        listeAffaires: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>;
    }
    interface ITemplateDataSuppressionAffaire extends LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataActionAffaire {
        affaireASupprimer: LibrairieAffairesCreBdr.Modeles.Application.IAffaire;
    }
    interface ITemplateDataCreationAffaire extends LibrairieAffairesCreBdr.Modeles.TemplateModale.ITemplateDataActionAffaire {
        identifiantPersonne: number;
        dateCreation: string;
        listeAffaires: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>;
    }
}

declare module LibrairieAffairesCreBdr.Modeles.Rest {
    interface IQueryAffaireRest {
        codeEtablissement: string;
        identifiantPersonne: number;
        identifiantCre?: number;
        dateCreationCre: string;
        identifiantRelationEco: number;
    }
    interface IAffaireBdr {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne.
         */
        identifiantPersonne: number;
        /**
         * Identifie une sous-famille de produit BDR commercialisée par le Groupe Caisse d'Epargne.
         * Valeurs :
         * - 'DISTANCE' : Banque à distance.
         * - 'CRED CT' : Crédits court terme.
         * - 'LIVRET' : Livrets.
         * ......
         */
        codeSousFamilleProduit: string;
        /**
         * Code déterminant le statut d'une affaire BDR.
         * Valeurs :
         * - 'EC' : En cours.
         * - 'CG' : Clôturée/Gagnée.
         * - 'CPNI' : Clôturée/Perdue - Non intéressé.
         * - 'CPEC' : Clôturée/Perdue - Équipé à la concurrence.
         */
        codeStatut: string;
        /**
         * Code déterminant la source de création d'une affaire BDR.
         * Valeurs :
         * - 'RV' : Revue de portefeuille.
         * - 'PC' : Proposition commerciale.
         * - 'CR' : Compte-rendu de rendez-vous clientèle.
         */
        codeSourceCreation: string;
        /**
         * Code déterminant la source de modification d'une affaire BDR.
         * Valeurs :
         * - 'RV' : Revue de portefeuille.
         * - 'PC' : Proposition commerciale.
         * - 'CR' : Compte -rendu de rendez-vous clientèle.
         */
        codeSourceModification: string;
        /**
         * Montant estimé ou calculé par le chargé clientèle d'une affaire BDR.
         */
        montant: number;
        /**
         * Date de création d'une affaire BDR qui est également la date du CRE.
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Date de relance d'une affaire BDR réalisée par le chargé d'affaire.
         * Type date au format yyyy-MM-dd
         */
        dateRelance: string;
        /**
         * Date de clôture d'une affaire BDR, qu'elle soit gagnée ou perdue.
         * Type date au format yyyy-MM-dd
         */
        dateCloture: string;
        /**
         * Numéro affaire BDR.
         */
        numeroAffaire: number;
        /**
         * Raison Sociale
         */
        raisonSociale: string;
        /**
         * La description/les commentaires d'affaire.
         */
        descriptionAffaire: string;
        /**
         * Nombre de propositions encours liées à l'affaire.
         */
        nombrePropositionLieeAffaire: number;
        /**
         * Nombre de propositions encours de la personne.
         */
        nombrePropositionPersonne: number;
    }
    interface IAffaire {
        listeAffaireBdr: Array<IAffaireBdr>;
        /**
         * La source de modification (pour le PUT).
         * Si 'AF' : affaire -> QR P176C500.
         * Sinon -> QR P176C200.
         */
        sourceModification?: string;
        /**
         * Code action suppression automatique des affaire BDR
         * Valeur :
         * - true :  dans le contexte d'une création de CRE pour effectuer une supression automatique des affaires existantes non alimentées en question.
         * - false : dans le contexte d'une modification CRE pour ne pas impacter l'existant.
         */
        creExistant: boolean;
    }
}

declare module LibrairieAffairesCreBdr.Modeles.Rest.corporateOrganigramme {
    interface ICorporateOrganigramme {
        controleCoherence: any;
        relation: ICorporateOrganigrammeRelation;
    }
    interface ICorporateOrganigrammeRelation {
        libelleIntituleRelation: string;
        identiteRelationEcoMenage: number;
        nombrePersonneRelationEco: number;
        listePersonne: ICorporateOrganigrammeListePersonne[];
    }
    interface ICorporateOrganigrammeListePersonne {
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        codeQualitePersonne: string;
        codeLeaderEspaceEntreprise: string;
        codeEspaceRelation: string;
        noteCalculee: string;
        libelleEtablissementNotation: string;
        codeCategorieJuridiqueINSEE: string;
        nombreLiensInterPersonnes: number;
        codeEtatFinReprise: string;
        listeDirigeants: ICorporateOrganigrammeListeDirigeants[];
        codeLeaderEspacePrive: string;
        indicateurGrappage: string;
        indicateurNPAI: string;
        indicateurProspect: string;
        codeSegmentMarche: string;
        numeroSiren: string;
        raisonSociale: string;
        codeTypeSegmentMarche: string;
        nombreJours: number;
        codeEtablissementEntitePilote: string;
        codeEntrepreneurIndividuel: boolean;
        listeAdresses: any[];
        listeComptes: any[];
        indicateurTiersPublic: boolean;
        indicateurTiersMarcheRegle: boolean;
        indicateurBordereauImprimer: boolean;
        typeRelation: number;
        codeEtatPersonne: number;
    }
    interface ICorporateOrganigrammeListeDirigeants {
        identifiantPersonne: number;
        codeTypeLienInterPersonnes: string;
        designationCourte: string;
    }
    interface ICorporateOrganigrammeParametres {
        identifiantPersonne: number;
        nombreDeLignesRelationEco: number;
        nombreLigneRelatnEcoARenvoyer: number;
        codeEtatFinReprise: string;
        codeEtablissement: string;
    }
}

declare module LibrairieAffairesCreBdr.Modeles.Rest {
    interface IQueryLienPropalAffaireRest {
        codeEtablissement: string;
        identifiantPersonne: number;
        numeroAffaireBDR: number;
        codeChoix?: string;
    }
    interface ILienPropalAffaire {
        /**
         * Code Banque sous lequel la Caisse est répertoriée dans le fichier des implantations bancaires gérés par la Banque de France.
         * Au niveau du réseau des Caisses d'Epargne le 1er car.= 1 et le 5ème = 5 Exemples : -------- 10001 =
         * Banque de France 30003 = Société Générale 15965 = Caisse de Flandre
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification d'une proposition commerciale pour l'application Poste de Travail en Mobilité.
         * Identifiant interne MYSYS. Référence unique dans MYSYS (compostage absolu). Numéro chronologique attribué par DB2 :
         * Etabli par la fonction IDENTITY COLUMN dans la table des étapes de proposition commerciale P62A / appli PROPENTR.
         * Plage de valeurs spécifiques à chaque instance de production (borne mini / borne maxi). Valeurs : 0
         * Début de plage IP1 299999999 Fin de plage IP1 300000000 Début de plage IP2 599999999
         * Fin de plage IP2 600000000 Début de plage IP3 899999999 Fin de plage IP3
         */
        numeroPropositionCommerciale: number;
        /**
         * Numéro d'identification interne attribué à chaque affaire BDR menée par un chargé d'affaires.
         * Identifiant interne MySys. Référence unique dans MySys (compostage absolu).
         * Numéro chronologique attribué par DB2 : Etabli par la fonction IDENTITY COLUMN dans la table de
         * gestion des affaires BDR P62D / PROPENTR Plage de valeurs spécifiques à chaque instance de production (borne mini / borne maxi).
         * Valeurs : 1 Début de plage IP1 2999999999 Fin de plage IP1 3000000001 Début de plage IP2 5999999999
         * Fin de plage IP2 6000000001 Début de plage IP3 8999999999 Fin de plage IP3
         */
        numeroAffaireBDR: number;
        /**
         * Détermine une sous famille de produits BDR
         * 'DISTANCE' Banque à distance
         * 'CRED CT'  Crédits court terme
         * 'LIVRET '  Livrets
         */
        codeSousFamille: string;
        /**
         * Libellé associé au code sous-famille produits BDR
         */
        libelleSousFamille: string;
        /**
         * Code action envoyé par IHM.
         * 'C' : Création
         * 'S' Suppression
         */
        codeActionIHM: string;
    }
    interface ILienAffairePropal {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne.
         */
        identifiantPersonne: number;
        /**
         * Numéro affaire BDR.
         */
        numeroAffaireBDR: number;
        /**
         * Numéro proposition commerciale.
         */
        numeroProposition: number;
        /**
         * Code statut proposition commerciale :
         * ‘1’ : Encours
         * ‘2’ : En attente délégation
         * ‘3’ : En attente retour client
         */
        codeStatutProposition: string;
        /**
         * Libellé proposition commerciale BDR.
         */
        libelleProposition: string;
        /**
         * Date création de la proposition.
         * Type date au format yyyy-MM-dd
         */
        dateCreationProposition: string;
        /**
         * Date fin validité de la proposition.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeProposition: string;
        /**
         * Indicateur lien affaire/proposition.
         */
        indLienAffaireProposition: string;
    }
}

declare module LibrairieAffairesCreBdr.Modeles.Tableaux.General {
    interface IElementTableau {
        checked?: boolean;
        estEnCoursManipulation: boolean;
    }
}

declare module LibrairieAffairesCreBdr.Modeles.Tableaux {
    /**
     * Classe de definition du tableau liste des affaires
     */
    class TableauAffaires implements MyWay.UI.ImwTableOptions {
        tableauColonneRaisonSociale: MyWay.UI.ImwTableColumnOptions;
        tableauColonneProduit: MyWay.UI.ImwTableColumnOptions;
        tableauColonneMontant: MyWay.UI.ImwTableColumnOptions;
        tableauColonneSource: MyWay.UI.ImwTableColumnOptions;
        tableauColonneStatut: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDateDeRelance: MyWay.UI.ImwTableColumnOptions;
        width: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        caption: string;
        theadSticky: string;
        readOnly: boolean;
        templateUrl: string;
        data: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>;
        selectedItems: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>;
        disabledItems: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>;
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        tableHandler: MyWay.UI.IMwTableHandler;
        hasNoneElements: string;
        nomTableau: string;
        pagination: MyWay.UI.IMwPaginationState;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, nom: string);
    }
}

declare module LibrairieAffairesCreBdr.Services.Application {
    interface IAffairesService {
        rechercherAffaires(critere: Modeles.Application.ICritereRechercheAffaire): ng.IPromise<Array<Modeles.Application.IAffaire>>;
        enregistrerAffaires(identifiantPersonne: number, identifiantCre: number, dateCreationCre: string, listeAffairesAEnregistrer: Array<Modeles.Application.IAffaire>): ng.IPromise<Array<Modeles.Application.IAffaire>>;
        affairesSontIdentiques(affaire1: Modeles.Application.IAffaire, affaire2: Modeles.Application.IAffaire): boolean;
        setChargementAffairesEnCours(activationSpinner: boolean): void;
        getChargementAffairesEnCours(): boolean;
        identiteRelationEcoMenage: number;
        libelleIntituleRelation: string;
        clientProspectListe: Array<Modeles.Application.IClientProspect>;
        setCreExistant(): void;
    }
}

declare module LibrairieAffairesCreBdr.Services.Application {
    interface IGestionAffairesService {
        donneesRecuesSontValides(donneesRecuesDirective: LibrairieAffairesCreBdr.Directives.GestionAffaires.IGestionAffaires, enregistrementEstDemande?: boolean): boolean;
        enregistrerAffaires(donneesRecuesDirective: LibrairieAffairesCreBdr.Directives.GestionAffaires.IGestionAffaires): ng.IPromise<void>;
        getAffichagePersistant(): boolean;
    }
}

declare module LibrairieAffairesCreBdr.Services.Application {
    interface IPropositionsService {
        getLienPropalAffaire(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire, ajout: boolean): ng.IPromise<Array<Modeles.Application.ILienAffairePropal>>;
        postLienPropalAffaire(lesAffaires: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>): ng.IPromise<void>;
        filtrerAffairesLiees(liens: Array<Modeles.Application.ILienAffairePropal>): Array<Modeles.Application.ILienAffairePropal>;
        filtrerAffaires(liens: Array<Modeles.Application.ILienAffairePropal>): Array<Modeles.Application.ILienAffairePropal>;
        liensAffairePropal: Array<Modeles.Application.ILienAffairePropal>;
        trierLiensAffairePropal(laListe: Array<Modeles.Application.ILienAffairePropal>): Array<Modeles.Application.ILienAffairePropal>;
        getAffairesShow(liens: Array<Modeles.Application.ILienAffairePropal>): Array<Modeles.Application.ILienAffaireShow>;
        getLibelleLong(lien: Modeles.Rest.ILienAffairePropal): string;
        getModificationLiens(lesAffaires: Array<LibrairieAffairesCreBdr.Modeles.Application.IAffaire>): Array<Modeles.Rest.ILienPropalAffaire>;
        estModifie(uneAffaire: LibrairieAffairesCreBdr.Modeles.Application.IAffaire): boolean;
        completerAjout(pourRest: Modeles.Rest.IAffaire, listeAffairesAEnregistrer: Array<Modeles.Application.IAffaire>): Array<Modeles.Application.IAffaire>;
    }
}

declare module LibrairieAffairesCreBdr.Services.Application {
    interface ITableauAffairesService {
        setNumeroPageAAfficherSelonTri(): void;
        setTableauAffaires(tableauAffaires: LibrairieAffairesCreBdr.Modeles.Tableaux.TableauAffaires): void;
        getTableauAffaires(): LibrairieAffairesCreBdr.Modeles.Tableaux.TableauAffaires;
    }
}

declare module LibrairieAffairesCreBdr.Services.Rest {
    interface IAffairesService {
        getAffaire(query: LibrairieAffairesCreBdr.Modeles.Rest.IQueryAffaireRest): ng.IPromise<LibrairieAffairesCreBdr.Modeles.Rest.IAffaire>;
        putAffaire(body: LibrairieAffairesCreBdr.Modeles.Rest.IAffaire): ng.IPromise<LibrairieAffairesCreBdr.Modeles.Rest.IAffaire>;
    }
}

declare module LibrairieAffairesCreBdr.Services.Rest.CorporateOrganigramme {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface ICorporateOrganigrammeService {
        getOrganigramme(query: LibrairieAffairesCreBdr.Modeles.Rest.corporateOrganigramme.ICorporateOrganigrammeParametres): ng.IPromise<LibrairieAffairesCreBdr.Modeles.Rest.corporateOrganigramme.ICorporateOrganigramme>;
    }
}

declare module LibrairieAffairesCreBdr.Services.Rest {
    interface ILienPropalAffaireService {
        getLienPropalAffaire(query: LibrairieAffairesCreBdr.Modeles.Rest.IQueryLienPropalAffaireRest): ng.IPromise<Array<LibrairieAffairesCreBdr.Modeles.Rest.ILienAffairePropal>>;
        postLienPropalAffaire(body: Array<LibrairieAffairesCreBdr.Modeles.Rest.ILienPropalAffaire>): ng.IPromise<Array<LibrairieAffairesCreBdr.Modeles.Rest.ILienPropalAffaire>>;
    }
}

declare module LibrairieAffairesCreBdr.Services.Utilitaires {
    /**
     * Interface de la classe InitialisationService
     */
    interface ILibAffCreBdrInitialisationService {
        initialisation(): ng.IPromise<boolean>;
        isMockEnabled: () => boolean;
        getCodeEtablissement(): ng.IPromise<string>;
        getListeAgregatFamilleProduitBdr(): ng.IPromise<Array<LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue>>;
        getListeAgregatFamilleProduitParCodeMarche(codeMarche: string): void;
        getListeSourcesAffaires(): ng.IPromise<Array<LibrairieAffairesCreBdr.Modeles.Application.ISource>>;
        getListeStatutsAffaires(): ng.IPromise<Array<LibrairieAffairesCreBdr.Modeles.Application.IStatut>>;
        getSourceAffaireCre(): ng.IPromise<LibrairieAffairesCreBdr.Modeles.Application.ISource>;
        getStatutAffaireCre(): ng.IPromise<LibrairieAffairesCreBdr.Modeles.Application.IStatut>;
        listeAgregatFamilleProduitParCodeMarcheBdr: any;
        codeEtablissement: string;
    }
}

declare module LibrairieAffairesCreBdr.Services.Utilitaires {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module LibrairieAffairesCreBdr.Services.Utilitaires {
    interface IOutilsService {
        stringSontIdentiques(chaine1: string, chaine2: string): boolean;
        numberSontIdentiques(nombre1: number, nombre2: number): boolean;
        booleenSontIdentiques(booleen1: boolean, booleen2: boolean): boolean;
        agregatRevueSontIdentiques(agregat1: LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue, agregat2: LibrairieAffairesCreBdr.Modeles.Application.IAgregatRevue): boolean;
        statutSontIdentiques(statut1: LibrairieAffairesCreBdr.Modeles.Application.IStatut, statut2: LibrairieAffairesCreBdr.Modeles.Application.IStatut): boolean;
        sourceSontIdentiques(source1: LibrairieAffairesCreBdr.Modeles.Application.ISource, source2: LibrairieAffairesCreBdr.Modeles.Application.ISource): boolean;
        comparerStringAStringB(chaineA: string, chaineB: string): number;
        comparerNumberANumberB(nombreA: number, nombreB: number): number;
        analyserRecursifPourTriUnCritere(objetA: Object, objetB: Object, listeProprietes: Array<string>, indicePropriete: number, triEstDecroissant: boolean): number;
        formaterDateRestVersDateApplicative(dateRest: string): string;
        formaterDateApplicativeVersDateRest(dateAplicative: string): string;
    }
}
