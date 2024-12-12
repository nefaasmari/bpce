
declare module PropositionCommerciale.Constantes.Inject {
    module Angular {
        const SCOPE: string;
        const LOCATION: string;
        const MODAL_INSTANCE: string;
        const Q: string;
        const ELEMENT: string;
        const WINDOW: string;
        const PARSE: string;
    }
    module Myway {
        const SERVICE_AGENT: string;
        const NOTIFICATION: string;
        const MODAL_SERVICE: string;
        const POPUP_SERVICE: string;
        const TABLE_SERVICE: string;
        const CONTEXTE_CLIENT_SERVICE: string;
        const PORTAIL_SERVICE: string;
        const mwsfRechercheEdsGlobaleService: string;
    }
    module PropositionCommerciale {
        const PROPOSITION_SERVICE_UTILS: string;
        const MODE_PROPOSITION_SERVICE_UTILS: string;
        const PROPOSITION_SERVICE: string;
        const eventService: string;
        const CONTEXTE_SERVICE: string;
        const PRODUIT_PROPOSABLE: string;
        const DATA: string;
        module Rest {
            const PROPOSITION_COMMERCIALE_SERVICE: string;
            const MENTIONS_LEGALES_SERVICE: string;
            const PRODUIT_SERVICE: string;
            const SEGMENTATION_MARCHE_SERVICE: string;
            const RECHERCHE_PORTEFEUILLE_SERVICE: string;
            const INFOS_ADMINISTRATIVES_REST_SERVICE: string;
            const TIERS_RECHERCHE_SERVICE: string;
            const RGPD_SERVICE: string;
        }
    }
    module Services {
        const choixEdsService: string;
        const PF_DRAG_AND_DROP_SERVICE: string;
        const lisaApplication: string;
        const portefeuilleService: string;
        const listeClientsService: string;
        const recherchePortefeuilleRestService: string;
        const indicateurService: string;
        const relationCommercialeRestService: string;
        const clientRestService: string;
    }
    module Utils {
        const GESTION_TYPE_JSON_SERVICE_UTILS: string;
        const PRODUIT_SERVICE_UTILS: string;
    }
}

declare module PropositionCommerciale.Constantes.Url {
    const URL_REST: string;
    const LOCALHOST: string;
    const GERER_PROPOSITION: string;
    const NOUVELLE_PROPOSITION: string;
    const ENGAGEMENT_PROPOSITION: string;
    const RECAP_PROPOSITION: string;
    const PROPOSITION_CORPORATE_V1: string;
    const URL_REST_PORTEFEUILLEV1_RECHERCHE: string;
    const URL_REST_PREFERENCE_UTILISATEUR: string;
    const URL_REST_PORTEFEUILLEV1_CLIENT: string;
    const URL_REST_PORTEFEUILLEV1_RELATION_COMMERCIALE: string;
    const URL_RGPD: string;
}

declare module PropositionCommerciale.Constantes.Lisa {
    const CODE_QUITTER: number;
    module PROCESSUS {
    }
    module NEXT {
    }
}

declare module PropositionCommerciale.Constantes.Contexte {
    const IDENTIFIANT_PERSONNE: string;
    const AUTHENTIFICATION_INFO: string;
    const CONTEXTUALISE: string;
    const PORTEFEUILLE: string;
    const MODE: string;
    module Tableau {
        const TABLEAU_GERER_PROPOSITIONS: string;
    }
}

declare module PropositionCommerciale {
    var app: any;
}

declare module PropositionCommerciale.Constantes.Ihm {
    const INPUT: string;
    const SELECT: string;
    const TEXTAREA: string;
    const BACKSPACE: string;
    const KEYDOWN: string;
    const TXT_SELECTIONNER_TOUT: string;
    const TXT_DESELECTIONNER_TOUT: string;
    const TXT_CHOIX_PORTEFEUILLE: string;
}

declare module PropositionCommerciale.Constantes.Rest {
    const SYNTHESE_CORPORATE: string;
    const INFOS_ADMINISTRATIVES: string;
    const INFOS_ADMINISTRATIVES_SERVICE: string;
}

declare module PropositionCommerciale.Constantes {
    module Messages {
        var MESSAGE_CHOIX_PORTEFEUILLE: string;
        var MESSAGE_AUCUN_PORTEFEUILLE: string;
        var MESSAGE_ERREUR_TECHNIQUE: string;
        var MESSAGE_NO_DATA_STATS: string;
        var MESSAGE_MODE_NON_CONTEXTUALISE: string;
        var MESSAGE_DATE_DE_FIN_DE_VALIDITE_NON_CONFORME: string;
    }
}

declare module PropositionCommerciale.Constantes.ModeProposition {
    const MODE_CONTEXTUALISE: number;
    const MODE_PORTEFEUILLES: number;
}

declare module PropositionCommerciale.Constantes {
    module Preferences {
        var CODE_PORTEFEUILLE: string;
    }
}

declare module PropositionCommerciale.Constantes {
    const REGEXP_NEW_LINE: RegExp;
    const GCEDOC_NEW_LINE: string;
    const REGEXP_CARACTERE_EURO: RegExp;
    const REGEXP_UNICODE_EURO: RegExp;
    const CARACTERE_EURO: string;
    const ESPACE: string;
    const SLASH: string;
    const DE_REMISE: string;
    const ID_STATUT_EN_COURS: string;
    const ID_STATUT_EN_ATTENTE_DELEGATION: string;
    const ID_STATUT_EN_ATTENTE_RETOUR_CLIENT: string;
    const ID_STATUT_ACCORD_CLIENT: string;
    const ID_STATUT_SANS_SUITE_AJOURNE: string;
    const ID_STATUT_SANS_SUITE_PERDU_CONCURRENCE: string;
    const ID_STATUT_SANS_SUITE_ABANDONNE: string;
    const ID_STATUT_REFUS_BANQUE: string;
    const ID_STATUT_ECHUE: string;
    const ID_STATUT_MODELE: string;
    const ID_STATUT_MODELE_REST: string;
    const NIVEAU_HIERARCHIQUE: string;
    const AIDE_NOUVEAU_PARAMETRE: string;
    const CODE_SOUS_FAMILLE_ENGAGEMENT_COMMERCIAL: string;
    const MODIFIER: string;
    const CONSULTER: string;
    module Date {
        const DEFAULT_DATE: string;
        const DEFAULT_DATE_IHM: string;
        const A_DEFINIR: string;
        const FORMAT_REST: string;
    }
    module Libelle {
        const NOMBRE_DE_PALIERS_1: string;
        const NOMBRE_DE_PALIERS_2: string;
        const NOMBRE_DE_PERIODE: string;
        const NOMBRE_DE_PERIODES: string;
        const BAREME_PAR_PALIER: string;
        const FICHE_PRODUIT: string;
    }
}

declare module PropositionCommerciale.Constante {
    module RelationCommerciale {
        var EDS_RECH_GLBL_PARAM_CODE_RELATION: string;
        var EDS_RECH_GLBL_PARAM_PRES_PM_PAR_FCT: boolean;
        var RELATION_COMMERCIALE_NB_MAX_RES: number;
        var RELATION_COMMERCIALE_NB_MAX_NO_LIMIT: number;
        var RELATION_COMMERCIALE_CODE_MAX_CLIENT_ATTEINT: string;
    }
}

declare module PropositionCommerciale.Constantes {
    module Token {
        var TOKEN_ENVIRONNEMENT: string;
        var TOKEN_ENVIRONNEMENT_VALEUR_DUA: string;
        var TOKEN_ENVIRONNEMENT_VALEUR_VFO: string;
    }
}

declare module PropositionCommerciale.Constantes.Propriete.Type {
    const STRING: string;
    const COMMENTAIRE: string;
    const DECIMAL_2: string;
    const CHOIX: string;
    const PERIODE: string;
    const ARRAYLIST: string;
    const BOOLEAN: string;
    const MULTI: string;
    const ENTIER: string;
    const DECIMAL_3: string;
    const INFORMATIONS: string;
    module GceDoc {
        const TAB_LIBELLE_PROPRIETE: string;
        const TAB_LIBELLE_2_PROPRIETE: string;
        const TAB_LIBELLE_3_PROPRIETE: string;
        const TAB_PALIER: string;
        const TAB_MONETIQUE: string;
        const TAB_PERIODE: string;
    }
}

declare module PropositionCommerciale.Controleur {
    class EngagementPropositionControleur {
        private serviceAgentExtended;
        private propositionService;
        private contexteService;
        private $location;
        private $scope;
        private propositionServiceRest;
        private propositionCommercialeServiceUtils;
        private produitService;
        private popupService;
        private lisaService;
        private segmentationMarcheRestService;
        private static CLASS_NAME;
        private static logger;
        nomNouvelleProposition: string;
        suggestions: Modele.Application.IProduit[];
        engagementsCommerciauxCommentaire: string;
        suggestionsExistentDeja: boolean;
        engagementExisteDeja: boolean;
        validite: boolean;
        dateFinValidite: string;
        signataires: Modele.Application.IProduit;
        signatairesExistentDeja: boolean;
        nombreJourMax: number;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: ng.ILocationService, $scope: ng.IScope, propositionServiceRest: Services.Rest.IPropositionCommercialeService, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, produitService: PropositionCommerciale.Services.Rest.IProduitService, popupService: Services.Utils.IPopupService, lisaService: Services.ILisaApplication, segmentationMarcheRestService: PropositionCommerciale.Services.Rest.ISegmentationMarcheRestService);
        /**
         * Permet d'enregistrer les modifications sur les suggestions et les signataires,
         * puis de se redirigé vers la page voulue
         * @param cheminRedirection la page à atteindre quand les données sont sauvegardées
         */
        private enregistrerLesModifications(codeNextLisa, cheminRedirection, dateEstInvalide);
        desactivationDuBoutonRecap(isInvalidDateFin: boolean): boolean;
        /**
         * Action bouton pour aller vers la page récap
         */
        accesRecap(): void;
        /**
         * Action bouton pour aller vers la page nouvelle propostion
         */
        retourNouvelleProposition(dateEstInvalide: boolean): void;
        private initialisation();
        private avoirIdentifiantProposition();
        /**
         * Permet d'enregistrer l'objet possédant les signataires
         * @param signataires l'objet à enregistrer
         */
        private enregistrerLesSignataires();
        private enregistrerEngagement();
        /**
         * Enregistre toutes les suggestions
         */
        private enregistrerLesSuggestions();
        /**
         * Enregistre les modifications sur Proposition
         */
        private enregistrerModificationProposition();
        /**
         * Gestion des erreurs
         */
        private gestionErreur(message);
    }
}

declare module PropositionCommerciale.Controleur {
    class GererPropositionControleur {
        private propositionService;
        private contexteService;
        private propositionCommercialeServiceUtils;
        private serviceAgentExtended;
        private popupService;
        private $location;
        private $scope;
        private $parse;
        private $filter;
        private tableauPropositionService;
        private portefeuilleService;
        private tableService;
        private lisaApplication;
        private portailService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        client: string;
        proposition: string;
        relationEconomique: string;
        libelleModifierBouton: string;
        messageAucunPtf: string;
        messageChoixPtf: string;
        mode: number;
        tableauProposition: Tableau.TableauProposition;
        constructor(propositionService: Services.IPropositionService, contexteService: Services.Utils.IContexteService, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, popupService: Services.Utils.IPopupService, $location: angular.ILocationService, $scope: ng.IScope, $parse: ng.IParseService, $filter: ng.IFilterService, tableauPropositionService: Services.ITableauPropositionService, portefeuilleService: Services.IPortefeuilleService, tableService: MyWay.UI.MwTableServiceOpefi, lisaApplication: Services.ILisaApplication, portailService: myway.portail.api.PortailService);
        /**
         * Initialisation de page Gérer les propositions
         */
        private initialisation();
        private initialisationPourModePortefeuille();
        /**
         * Initialisation de la page  Gérer les propositions  en mode contextualisé
         * @param mode
         */
        private initialisationPourModeContextualise();
        /**
         * Fonction qui permet d'afficher la popup de création d'une nouvelle proposition
         */
        modaleAjoutProposition(): void;
        /**
         * Fonction qui permet d'afficher la popup qui donne un aperçu du contenu d'une proposition (produits...)
         * @param prop
         */
        modaleApercuProposition(prop: Modele.Application.IProposition): void;
        /**
         * Fonction qui redirige vers la page Récapitulatif de la proposition
         */
        modifierProposition(): void;
        /**
         * Fonction qui fait appel au service qui permet d'imprimer une proposition commerciale à partir de la proposition sélectionnée dans le tableau
         */
        apercuPDF(): void;
        /**
         * Fonction qui affiche la popup pour dupliquer une proposition, puis met à jour le tableau avec la proposition duplliquée
         */
        dupliquerProposition(): void;
        convertirProposition(): void;
        private gererErreurDuplicationProposition;
        /**
         * Fonction pour afficher la popup de modification du statut d'une proposition
         */
        modaleModifierStatut(): void;
        /**
         * Condition de désactivation du bouton qui permet de modifier le statut d'une proposition
         */
        desactiverBoutonModifierStatut(): boolean;
        afficherBoutonConvertirEnProposition(): boolean;
    }
}

declare module PropositionCommerciale.Controleur {
    class NouvellePropositionControleur implements MyWay.UI.ITuileHandler {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private propositionService;
        private propositionServiceUtils;
        private popupService;
        private produitService;
        private contexteService;
        private lisaService;
        private static CLASS_NAME;
        private static logger;
        nomNouvelleProposition: string;
        ouvertureVoletProposition: boolean;
        listeUnivers: Modele.Application.IUnivers[];
        chargementListeUnivers: boolean;
        configPetitesTuiles: MyWay.UI.iMwConfigTuile;
        configPanierProduits: MyWay.UI.iMwConfigTuile;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, propositionService: PropositionCommerciale.Services.IPropositionService, propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, popupService: Services.Utils.IPopupService, produitService: PropositionCommerciale.Services.Rest.IProduitService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, lisaService: Services.ILisaApplication);
        accesDefinirEngagement(): void;
        retourGererProposition(): void;
        onTuileClick(objetTuile: any): void;
        modeEditionOn(): void;
        avoirStatutProduit(produit: Modele.Application.IProduit): string;
        statusEstComplet(produit: Modele.Application.IProduit): boolean;
        statusEstIncomplet(produit: Modele.Application.IProduit): boolean;
        statusEstVide(produit: Modele.Application.IProduit): boolean;
        onAction1(produitToDelete: Modele.Application.IProduit): void;
        onAction2(objetTuile: Modele.Application.IProduit): void;
        /**
         * Initialisation d'un produit vide
         * @param produitCatalogue
         * @param idProduit
         * @param niveauHierarchique
         */
        private initialisationProduitVide(produitCatalogue, idProduit, niveauHierarchique);
        onAction3(produitASupprimer: Modele.Application.IProduit): void;
        onAction4(produitAParametrer: Modele.Application.IProduit): void;
        onClickLeft(objetTuile: Object, listeObjetTuile: Object[]): void;
        onClickRight(objetTuile: Object, listeObjetTuile: Object[]): void;
    }
}

declare module PropositionCommerciale.Controleur {
    class RecapPropositionControleur {
        private serviceAgentExtended;
        private propositionService;
        private mentionsLegalesService;
        private contexteService;
        private $location;
        private popupService;
        private propositionServiceRest;
        private propositionServiceUtils;
        private lisaService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, mentionsLegalesService: PropositionCommerciale.Services.Rest.MentionsLegales.IMentionsLegalesRestService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: ng.ILocationService, popupService: Services.Utils.IPopupService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, propositionServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, lisaService: Services.ILisaApplication);
        retourEngagementsProposition(): void;
        conditionDesactivationModifications(): boolean;
    }
}

declare module PropositionCommerciale.Controleur {
    /**
     * Controleur de l'écran permettant de sélectionner une personne morale
     * @author: S0077481
     */
    class SelectionPersonneMoraleControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private contexteService;
        private contexteClientService;
        private popupService;
        private modePropositionUtils;
        static NOM_CLASSE: string;
        static $inject: string[];
        numeroPersonne: string;
        isChargement: boolean;
        isChargementPropositions: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, contexteClientService: myway.portail.api.ContexteClientService, popupService: Services.Utils.IPopupService, modePropositionUtils: Services.Utils.IModePropositionServiceUtils);
        accesGestionProposition(): void;
        recherchePM(): void;
    }
}

declare module PropositionCommerciale.Enum {
    module Indicateur {
        enum TYPE {
            DATE,
            NOMBRE,
            MONTANT,
            TEXTE,
        }
        enum FAMILLE {
            CA,
            SEGMENTATION,
            RENDEZ_VOUS,
            RISQUE,
            NC,
            PNB,
            REVUE,
            FLUX,
        }
    }
    module FiltrageRelationCommerciale {
        enum FILTRECLIENTPROSPECT {
            TOUS,
            CLIENT,
            PROSPECTTIERS,
        }
    }
    /**
     * Enumeration lièe aux filtres
     */
    module Filtre {
        enum COMPARATEUR {
            SUPERIEUR,
            INFERIEUR,
            EGALE,
            ENTRE,
        }
        enum OPERATEUR {
            ET,
            OU,
        }
    }
    /**
     * Enumeration lièe à la page clients
     */
    module PageClients {
        enum TYPE_VUE {
            VUE_RELATION_ECONOMIQUE,
            VUE_CLIENTS,
        }
        enum TYPE_FORCAGE {
            SANS,
            CLIENTS,
            PROSPECTS,
            TOUT,
        }
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module PropositionCommerciale.Controleur {
    class HeaderPropositionCommercialeControleur {
        private $scope;
        private serviceAgentExtended;
        private $location;
        private $window;
        private lisaApplication;
        private contexteService;
        private portefeuilleService;
        private eventService;
        private popupService;
        private $q;
        private rechercheEdsGlobaleService;
        private listeClientsService;
        private propositionService;
        private static CLASS_NAME;
        private static logger;
        edsChoisi: Modele.Application.ICaracteristiquesAgent;
        afficherHeader: boolean;
        listePortefeuilles: Modele.Application.IPortefeuille[];
        listePortefeuillesDropDown: Modele.Application.IPortefeuille[];
        ouvertureVoletChoixPortefeuille: boolean;
        messageAucunPortefeuille: string;
        tousPortfeuillesSelectionnes: any;
        chargementEnCours: boolean;
        estHabiliteChoixEDS: boolean;
        messageErreurTechnique: string;
        aErreurTechnique: boolean;
        finInit: boolean;
        url: string;
        static $inject: string[];
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, $window: ng.IWindowService, lisaApplication: Services.ILisaApplication, contexteService: Services.Utils.IContexteService, portefeuilleService: Services.IPortefeuilleService, eventService: Services.IEventService, popupService: Services.Utils.IPopupService, $q: ng.IQService, rechercheEdsGlobaleService: myway.comEds.RechercheEdsGlobaleService, listeClientsService: Services.IListeClientsService, propositionService: Services.IPropositionService);
        private initialiser();
        initListePortefeuilles(): ng.IPromise<void>;
        getLabelTroisEtats(): string;
        initialiserHabilitationChoixEDS(habilitation: boolean): void;
        validerChoixPortefeuille(): ng.IPromise<void>;
        annulerChoixPortefeuille(): void;
        aPortefeuillesNonCoches(): boolean;
        aPortefeuilleCoche(): boolean;
        aTousPortefeuillesCoches(): boolean;
        /**
         * Appelé lorsqu'on clique sur la case à cocher globale (3 états).
         */
        forceMultiSelection(): void;
        setIndetermine(): boolean;
        afficherPopupChoixEds(): void;
        majDonneesDonneesEds(edsChoisi: Modele.Application.ICaracteristiquesAgent, contexte: Modele.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void>;
        getTxtChoixPortefeuille(): string;
        /**
         * Permet de retourner le sous-titre
         * @return {string}
         */
        setSousTitrePage(): void;
        /**
         * Permet de retourner le nom et l'ID du portefeuille
         * @param {number} index
         * @return {string}
         */
        getLibelleEtIdPortefeuille(index: number): string;
        /**
         * Appelé lorsqu'on actionne une touche et que la case à cocher globale (3 états) a le focus.
         */
        keyDownTroisEtat($event: KeyboardEvent): void;
        /**
         * Appelé lorsqu'on ouvre/ferme le dropdown de choix de portefeuille
         */
        ouvrirFermerChoixPortefeuille(): void;
        /**
         * Permet d'ouvrir le choix de portefeuille
         * @return {void}
         */
        ouvrirChoixPortefeuille(): void;
        conditionAffichageListeDeroulantePortefeuilles(): boolean;
        stopPropagation(): void;
        /**
         * Fermeture de l'application
         */
        quitter(): void;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function headerPropositionCommerciale(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class AjoutProduitControleur implements MyWay.UI.ISelectionChangeHandler {
        private $modalInstance;
        private serviceAgentExtended;
        private propositionService;
        private contexteService;
        private data;
        private produitService;
        private propositionServiceUtils;
        private produitServiceUtils;
        private static CLASS_NAME;
        private static logger;
        nomNouveauProjet: string;
        isModele: boolean;
        listePeriode: {
            key: string;
            value: string;
        }[];
        static $inject: string[];
        nombreLignePalierMin: number;
        nombreLignePalierMax: number;
        messageErreurPalier: string;
        produit: Modele.Application.IProduit;
        indexProduit: number;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, data: Modele.Application.IProduit, produitService: PropositionCommerciale.Services.Rest.IProduitService, propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, produitServiceUtils: PropositionCommerciale.Services.Utils.IProduitServiceUtils);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        consultationFicheProduit(url: string): void;
        initialiserListePeriodeFonctionDeCreditMoyenLMoyenLongTerme(): void;
        enregistrerProduit(): void;
        ajoutPropriete(): void;
        estUnePropriete1Valeur(propriete: Modele.Application.IPropriete): boolean;
        estUneProprieteMulti(propriete: Modele.Application.IPropriete): boolean;
        estUnePropriete2Valeurs(propriete: Modele.Application.IPropriete): boolean;
        onSelectionChange(selectedObject: Object): void;
        annuler(): void;
    }
}

declare module PropositionCommerciale.Controleur {
    class AjoutPropositionControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private propositionService;
        private propositionServiceRest;
        private propositionServiceUtils;
        private contexteService;
        private $location;
        private popupService;
        private listeClientsService;
        private portefeuilleService;
        private lisaService;
        private $scope;
        private $q;
        private static CLASS_NAME;
        private static logger;
        nomNouveauProjet: string;
        isModele: boolean;
        listeClient: Modele.Application.IClient[];
        identifiantClient: string;
        result: myway.comGestionClient.RecherchePersonneResult;
        identifiantPersonne: string;
        raisonSociale: string;
        mode: number;
        clientChoisi: MyWay.Model.Client;
        clientDansHistoriqueChoisi: myway.comGestionClient.historique.HistoriqueEntry;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, propositionServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: angular.ILocationService, popupService: Services.Utils.IPopupService, listeClientsService: Services.IListeClientsService, portefeuilleService: Services.IPortefeuilleService, lisaService: Services.ILisaApplication, $scope: ng.IScope, $q: ng.IQService);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        accesNouvelleProposition(): void;
        private initialisationEtEnregistrementNouvelleProposition();
        private creationPropositionModePortefeuille(statutProposition);
        private enregistrementIdentifiantPersonneEtRaisonSocialeDansContexte();
        private creationPropositionModeContextualise(statutProposition);
        private initialisationIdentifiantPersonneEtRaisonSocialePourSelectionResultat();
        private selectionNomDeFamille(nomMarital, nomFamille);
        private initialisationIdentifiantPersonneEtRaisonSocialePourSelectionHistorique();
        private getCivilite(codeCivilite);
        private creationProposition(identifiantAgent, idPersonne, statutProposition);
        private buildPropositionRest(referenceExterneAgent, idPersonne, statutProposition);
        onSelectHistory(entry: myway.comGestionClient.historique.HistoriqueEntry): void;
        private initialisationStatut();
        conditionAffichageFiltreRecherchePersonne(): boolean;
        desactivationBoutonValider(): boolean;
        annuler(): void;
    }
}

declare module PropositionCommerciale.Controleur {
    interface IPropositionDate {
        label: string;
        date: Date;
    }
    class ApercuPropositionControleur {
        private $modalInstance;
        private data;
        private $location;
        private tableService;
        private propositionCommercialeServiceUtils;
        private propositionService;
        private $scope;
        private contexteService;
        private popupService;
        private propositionServiceRest;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        proposition: Modele.Application.IProposition;
        listeDateProposition: IPropositionDate[];
        listeProduit: Modele.Application.IProduit[];
        commentaire: string;
        commentaireEstEditable: boolean;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $location: angular.ILocationService, tableService: MyWay.UI.MwTableServiceOpefi, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, propositionService: Services.IPropositionService, $scope: ng.IScope, contexteService: PropositionCommerciale.Services.Utils.IContexteService, popupService: Services.Utils.IPopupService, propositionServiceRest: Services.Rest.IPropositionCommercialeService);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        conditionAffichageDateFinValiditePourModele(dateProposition: IPropositionDate): boolean;
        conditionAffichageDateFinValiditeADefinir(): boolean;
        conditionAffichageDateFinValidite(): boolean;
        estCeQueCommentaireEstEditable(): boolean;
        private mettreCommentaireNonEditable();
        private mettreCommentaireEditable();
        modifierCommentaire(): void;
        validerCommentaire(): void;
        formattageHtmlSautDeLigneCommentaire(commentaire: string): string;
        private constructionListeDatePourChaqueStatut();
        annuler(): void;
    }
}

declare module PropositionCommerciale.Controleur {
    class ConfirmationSuppressionControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private propositionService;
        private contexteService;
        private $location;
        private data;
        private produitService;
        private propositionServiceUtils;
        private popupService;
        private static CLASS_NAME;
        private static logger;
        private listeProduitSupprimmer;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: angular.ILocationService, data: Modele.Application.IProduit, produitService: PropositionCommerciale.Services.Rest.IProduitService, propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, popupService: Services.Utils.IPopupService);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        annuler(): void;
        supprimer(): ng.IPromise<Modele.Application.IProduit>;
    }
}

declare module PropositionCommerciale.Controleur {
    class ConvertirModaleControleur {
        private $modalInstance;
        private propositionService;
        private data;
        private $location;
        private tableService;
        private propositionCommercialeServiceUtils;
        private contexteService;
        private propositionServiceRest;
        private popupService;
        private $q;
        private serviceAgentExtended;
        private $scope;
        private static CLASS_NAME;
        private static logger;
        nomProposition: string;
        duplicationTypeModele: string;
        mode: number;
        isModele: boolean;
        result: myway.comGestionClient.RecherchePersonneResult;
        raisonSociale: string;
        clientChoisi: MyWay.Model.Client;
        clientDansHistoriqueChoisi: myway.comGestionClient.historique.HistoriqueEntry;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, propositionService: PropositionCommerciale.Services.IPropositionService, data: Modele.Application.IProposition, $location: angular.ILocationService, tableService: MyWay.UI.MwTableServiceOpefi, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, contexteService: PropositionCommerciale.Services.Utils.IContexteService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, popupService: Services.Utils.IPopupService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        private initialisation();
        afficherTitre(): string;
        mettreAJourDuplicationTypeModele(selectionTypeDuplication: string): void;
        /**
         * Désactivation de la touche retour
         */
        private desactiverToucheRetour();
        /**
         * Ajouter l'événement pour la désactivation de la touche retour
         */
        private enregistrerEcouteurDesactivationToucheRetour();
        /**
         * Supprimer l'événement pour la désactivation de la touche retour
         */
        private supprimerEcouteurDesactivationToucheRetour();
        /**
         * Annulation de la demande de duplication
         */
        annuler(): void;
        /**
         * Validation de la demande de duplication
         */
        dupliquer(): ng.IPromise<any>;
        /**
         * Créer une duplication "modèle" ou non en fonction de la config
         */
        private creerLaDuplication();
        /**
         * Procède au traitement pour créer une nouvelle duplication
         */
        traitementDuplicationProposition(identifiantPersonne: string, authInfo: MyWay.Services.Context.AuthentificationInfo, proposition: Modele.Rest.IProposition): ng.IPromise<Modele.Rest.IProposition>;
        conditionAffichageFiltreRecherchePersonne(): boolean;
        onSelectHistory(entry: myway.comGestionClient.historique.HistoriqueEntry): void;
        /**
         * Indiquer le type de duplication entre "duplication modèle" ou "duplication proposition"
         * @param proposition la proposition
         */
        private indiquerTypeDeDuplication(proposition);
        /**
         * Indiquer le type de duplication entre "duplication modèle" ou "duplication proposition"
         * @param proposition la proposition
         */
        private creationDateDeLaDuplication(proposition);
        /**
         * Gère le statut du duplicat
         * @param proposition la proposition
         */
        private gererStatutDuplicat(proposition);
        /**
         * Gére l'identifiant Personne.
         * Si la duplication à pour but de créer un modèle il n'y a aucun id reseigné
         * @param proposition la proposition
         */
        private gererIdentifiantPersonne(proposition, identifiantPersonne);
    }
}

declare module PropositionCommerciale.Controleur {
    class DupliquerModaleControleur {
        private $modalInstance;
        private propositionService;
        private data;
        private $location;
        private tableService;
        private propositionCommercialeServiceUtils;
        private contexteService;
        private propositionServiceRest;
        private popupService;
        private $q;
        private serviceAgentExtended;
        private $scope;
        private static CLASS_NAME;
        private static logger;
        nomProposition: string;
        duplicationTypeModele: string;
        mode: number;
        isModele: boolean;
        result: myway.comGestionClient.RecherchePersonneResult;
        raisonSociale: string;
        clientChoisi: MyWay.Model.Client;
        clientDansHistoriqueChoisi: myway.comGestionClient.historique.HistoriqueEntry;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, propositionService: PropositionCommerciale.Services.IPropositionService, data: Modele.Application.IProposition, $location: angular.ILocationService, tableService: MyWay.UI.MwTableServiceOpefi, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, contexteService: PropositionCommerciale.Services.Utils.IContexteService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, popupService: Services.Utils.IPopupService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope);
        private initialisation();
        afficherTitre(): string;
        mettreAJourDuplicationTypeModele(selectionTypeDuplication: string): void;
        /**
         * Désactivation de la touche retour
         */
        private desactiverToucheRetour();
        /**
         * Ajouter l'événement pour la désactivation de la touche retour
         */
        private enregistrerEcouteurDesactivationToucheRetour();
        /**
         * Supprimer l'événement pour la désactivation de la touche retour
         */
        private supprimerEcouteurDesactivationToucheRetour();
        /**
         * Annulation de la demande de duplication
         */
        annuler(): void;
        /**
         * Validation de la demande de duplication
         */
        dupliquer(): ng.IPromise<any>;
        /**
         * Créer une duplication "modèle" ou non en fonction de la config
         */
        private creerLaDuplication();
        /**
         * Procède au traitement pour créer une nouvelle duplication
         */
        traitementDuplicationProposition(identifiantPersonne: string, authInfo: MyWay.Services.Context.AuthentificationInfo, proposition: Modele.Rest.IProposition): ng.IPromise<Modele.Rest.IProposition>;
        conditionAffichageFiltreRecherchePersonne(): boolean;
        onSelectHistory(entry: myway.comGestionClient.historique.HistoriqueEntry): void;
        /**
         * Indiquer le type de duplication entre "duplication modèle" ou "duplication proposition"
         * @param proposition la proposition
         */
        private indiquerTypeDeDuplication(proposition);
        /**
         * Indiquer le type de duplication entre "duplication modèle" ou "duplication proposition"
         * @param proposition la proposition
         */
        private creationDateDeLaDuplication(proposition);
        /**
         * Gère le statut du duplicat
         * @param proposition la proposition
         */
        private gererStatutDuplicat(proposition);
        /**
         * Gére l'identifiant Personne.
         * Si la duplication à pour but de créer un modèle il n'y a aucun id reseigné
         * @param proposition la proposition
         */
        private gererIdentifiantPersonne(proposition, identifiantPersonne);
    }
}

declare module PropositionCommerciale.Controleur {
    /**
     * Classe du controleur
     */
    class ModaleChoixEdsControleur {
        private $scope;
        private $modalInstance;
        private choixEdsService;
        private popupService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        agentChoisi: MyWay.Model.Agent;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, choixEdsService: Services.IChoixEdsService, popupService: Services.Utils.IPopupService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Action du bouton "Valider"
         * @returns {void}
         */
        valider(): void;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

declare module PropositionCommerciale.Controleur {
    class ModifierStatutControleur {
        private $modalInstance;
        private propositionService;
        private data;
        private $location;
        private tableService;
        private propositionCommercialeServiceUtils;
        private contexteService;
        private propositionServiceRest;
        private popupService;
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        private static logger;
        proposition: Modele.Application.IProposition;
        nouveauStatut: Modele.Application.IStatut;
        listeStatut: Modele.Application.IStatut[];
        isModele: boolean;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, propositionService: PropositionCommerciale.Services.IPropositionService, data: Modele.Application.IProposition, $location: angular.ILocationService, tableService: MyWay.UI.MwTableServiceOpefi, propositionCommercialeServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, contexteService: PropositionCommerciale.Services.Utils.IContexteService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, popupService: Services.Utils.IPopupService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        private statutSuivantEstPossible(unStatut);
        private statutEnAttenteDelegation(unStatut);
        private statutEnAttenteRetourClient(unStatut);
        private statutSansSuite(unStatut);
        private statutRefusBanque(unStatut);
        private statutAccordClient(unStatut);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        annuler(): void;
        valider(): ng.IPromise<any>;
        private miseAJourStatutProposition();
        private miseAJourLibelleBoutonRedirectionRecap();
        private initialisationObjetRetour(proposition);
        private miseAJourPropositionCourante(mode, ancienStatut, authInfo, idPersonneContextualise);
        private formatDateIhm(date);
    }
}

declare module PropositionCommerciale.Controleur {
    class RecherchePersonneControleur {
        private $modalInstance;
        private contexteService;
        private $scope;
        private popupService;
        private mwgcRechercherPersonneService;
        private static CLASS_NAME;
        private static logger;
        proposition: Modele.Application.IProposition;
        nouveauStatut: Modele.Application.IStatut;
        listeStatut: Modele.Application.IStatut[];
        result: myway.comGestionClient.RecherchePersonneResult;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $scope: ng.IScope, popupService: Services.Utils.IPopupService, mwgcRechercherPersonneService: myway.comGestionClient.RechercherPersonneService);
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        onSelectHistory(entry: myway.comGestionClient.historique.HistoriqueEntry): void;
        close(): void;
        ok(): MyWay.Model.Client;
    }
}

declare module PropositionCommerciale.Controleur {
    class ReorganiserOrdreProduitsControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $location;
        private propositionService;
        private contexteService;
        private propositionServiceRest;
        private static CLASS_NAME;
        private static logger;
        proposition: Modele.Application.IProposition;
        listeStatut: Modele.Application.IStatut[];
        nouveauStatut: Modele.Application.IStatut;
        listeProduit: PropositionCommerciale.Modele.Application.IProduit[];
        indexElementSelectionne: number;
        elementSelectionne: HTMLElement;
        elementMere: HTMLElement;
        elementSelectionneConditionInitialTop: number;
        estModeReorganisation: boolean;
        elements: HTMLCollection;
        private produitASortir;
        private listeEstInitialisePourDrag;
        classeElementSelectionne: string;
        classePourReorganiserProduit: string;
        prefixeClasseIdDrag: string;
        classeZoneDeDeplacement: string;
        evenementDOMSubtreeModified: string;
        evenementPointerDown: string;
        evenementPointerUp: string;
        evenementPointerOut: string;
        evenementPointerLeave: string;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $location: angular.ILocationService, propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, propositionServiceRest: Services.Rest.IPropositionCommercialeService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        desactiverToucheRetour: (event: KeyboardEvent) => void;
        enregistrerEcouteurDesactivationToucheRetour(): void;
        supprimerEcouteurDesactivationToucheRetour(): void;
        ajouterListenerSurDom(): void;
        supprimerListenerSurDom(): void;
        private ordonnerProduit();
        private initialiserListenerSurElements;
        private drop;
        private dragOver;
        private avoirHTMLCollectionDesListeProduit();
        private dragEnd;
        private trouverElementSelectionne(elementCherche, event);
        /**
         * Initialiser tout les éléments pour la réorganisation des la liste produit par drag
         * @param idDrag l'id de la balise concerné
         * @param index l'index de l'élément HTML
         */
        dragStart: (event: DragEvent) => void;
        private avoirIndexElementSelectionne(element);
        private intervertirePosition(centreHauteur);
        private sortirProduit(liste, indexRetraitProduit, indexAjoutProduit, compte?, produitADeplacer?);
        private elementSelectionneEstSurAutreElement(unElement, centreHauteur);
        metreAJourListeProduitWebService(): void;
        private miseAJourListeProduit();
        private creerListProduitPourEnvoieWebService(listeDeProduit);
        private creerUnProduitPourEnvoieWebService(produitsPourModification, produit);
        annuler(): void;
        valider(): void;
    }
}

declare module PropositionCommerciale.Modele.Application {
    interface IContexte {
        identifiantUser: string;
        identifiantVisu: string;
        identifiantPersonne?: string;
        codeEtablissement: string;
        designation: string;
        edsUser: number;
        edsVisu: number;
        edsSuperieurUser: number;
    }
}

declare module PropositionCommerciale.Modele.Application {
    interface IHeader {
        raisonSociale: string;
        identifiant: string;
    }
}

declare module PropositionCommerciale.Modele.Application {
    interface IPopupData<T> {
        closeButtonText: string;
        actionButtonText: string;
        headerText: string;
        iconName: string;
        bodyText: string;
        model?: T;
    }
    interface IMessageErreurIHM {
        message: string;
        champs: string;
        ancre: string;
    }
}

declare module PropositionCommerciale.Modele.Application {
    interface IContexteVersRevue {
        idEds: number;
        designationAgent: string;
        listeIdsPortefeuille: Array<number>;
        nombreTotalPortefeuilles: number;
        identifiantPersonne: number;
        raisonSociale: string;
        siren: string;
        identifiantRelation: number;
        libelleRelation: string;
    }
    interface IContexteVersSyntheseClient {
        identifiantPersonne: number;
    }
    interface IContexteGererPortefeuille {
        identifiantPersonne: number;
        raisonSociale: string;
        siren: string;
        identifiantRelation: number;
        libelleRelation: string;
        objetEdsVisu: IObjetEdsChoisi;
    }
    /**
     * Modèle de portefeuille
     */
    interface IPortefeuille {
        id: number;
        libelle: string;
        estAffiche: boolean;
        listeRelations: Array<IRelationEconomique>;
        nombreTotalClients?: number;
        nombreTotalProspectsTiers?: number;
    }
    /**
     * Modèle d'un indicateur
     */
    interface IIndicateur {
        intitule: string;
        code: string;
        valeur: string;
        valeurNumber: number;
        valeurDate: Date;
        typeIndicateur: Enum.Indicateur.TYPE;
        dateMaj: Date;
        icone: string;
    }
    interface IIndicateurType {
        code: string;
        codeRel?: string;
        codeRest: string;
        typeIndicateur: Enum.Indicateur.TYPE;
        intitule: string;
        estUniquementVueClients: boolean;
        estVisibleColonne: boolean;
        famille?: Enum.Indicateur.FAMILLE;
        codePreference: string;
    }
    /**
     * Modèle d'un client
     */
    interface IClient extends IElementTableau {
        nom: string;
        id: string;
        siren: string;
        estClient: boolean;
        estActif: boolean;
        estActifRenseigne: boolean;
        nomRelationEconomique: string;
        idRelationEconomique: number;
        listeIndicateurs: Array<IIndicateur>;
        estLeader: boolean;
    }
    /**
     * Modèle d'une relation economique
     */
    interface IRelationEconomique extends IElementTableau {
        idPortefeuille: number;
        nom: string;
        id: string;
        idLeader: number;
        relationEconomique: string;
        listeClients: Array<IClient>;
        listeIndicateurs: Array<IIndicateur>;
        estClient: boolean;
    }
    interface IElementTableau {
        checked?: boolean;
    }
    /**
     * Modèle de caractéristiques agent
     */
    interface ICaracteristiquesAgent {
        designationAgent: string;
        libelleFonction: string;
        identifiantElementStructure: number;
        codeEtablissement: string;
        identifiantAgent?: string;
    }
    interface IObjetEdsChoisi {
        objCaractAgent: ICaracteristiquesAgent;
        nombrePortefeuilleTotalAgent: number;
        listePtfVisu: Array<number>;
        typeForcage: Enum.PageClients.TYPE_FORCAGE;
        affichageModificationChoix: boolean;
        locationPath: string;
    }
    /**
     * Modèle de filtre sur indicateur
     */
    interface IIndicateurFiltre {
        indicateur: IIndicateurType;
        listeValeurs: Array<IValeurFiltre>;
        utilise: boolean;
        utiliseRelationEco: boolean;
        estPanier: boolean;
    }
    /**
     * Modèle de valeur de filtre
     */
    interface IValeurFiltre {
        libelle: string;
        actif: boolean;
    }
    /**
     * Modèle d'un filtre
     */
    interface IFiltre {
        id: number;
        indicateur: IIndicateurFiltre;
        comparateur?: Enum.Filtre.COMPARATEUR;
        operateur?: Enum.Filtre.OPERATEUR;
        valeurUnique?: number;
        valeurMultiple1?: number;
        valeurMultiple2?: number;
    }
    /**
     * Modèle d'entree/sortie de la popup de filtres
     */
    interface IDonneesEntreeSortiePopupFiltres {
        listeIndicateursFiltre: Array<IIndicateurFiltre>;
        listeIndicateursTableau: Array<Modele.Application.IIndicateurChoix>;
        listeFiltres: Array<IFiltre>;
        estVueClient?: boolean;
    }
    /**
     * Modèle d'entree/sortie de la popup de indicateurs
     */
    interface IDonneesEntreeSortiePopupIndicateurs {
        listeTotaleIndicateurs: Array<Modele.Application.IIndicateurType>;
        listeFiltresClients: Array<IFiltre>;
        listeFiltresRelationEco: Array<IFiltre>;
        listePaniers?: Array<Modele.Application.IPanier>;
        panier?: Modele.Application.IPanier;
    }
    /**
     * Modèle d'un indicateur de la popup choix indicateur
     */
    interface IIndicateurChoix {
        indicateur: IIndicateurType;
        choisi: boolean;
        desactive: boolean;
    }
    /**
     * Modèle d'un panier
     */
    interface IPanier {
        nom: string;
        listeChoixIndicateurs: Array<Modele.Application.IIndicateurChoix>;
        estDefaut: boolean;
        numero: number;
    }
    /**
     * Modèle d'une agence
     */
    interface IAgence {
        identifiantEDS: number;
        libelle: string;
    }
    /**
     * Modèle d'indicateur colonne
     */
    interface IDataIndicateurColonne {
        id: string;
        intitule: string;
        valeur: number;
        couleur: COULEUR_GRANDE_COLONNE;
        hauteur: number;
        estMontant: boolean;
        nePasAfficherIntitule: boolean;
    }
    /**
     * Enumeration lièe à la page clients
     */
    module PageClients {
        enum TYPE_VUE {
            VUE_RELATION_ECONOMIQUE,
            VUE_CLIENTS,
        }
        enum TYPE_FORCAGE {
            SANS,
            CLIENTS,
            PROSPECTS,
            TOUT,
        }
    }
    enum COULEUR_GRANDE_COLONNE {
        COULEUR_CLIENT,
        COULEUR_ACTIF,
        COULEUR_PROSPECT,
        COULEUR_RELATIONS,
        COULEUR_PERIODE1,
        COULEUR_PERIODE2,
    }
    interface IConfigIndicateurFleche {
        valeurFormate: string;
        couleur: string;
        icone: string;
    }
}

declare module PropositionCommerciale.Modele.Application {
    interface IProposition {
        id: number;
        proposition: string;
        relationEconomique: string;
        identifiantPersonne: number;
        client: string;
        statut: IStatut;
        dateCreation: string;
        dateFinValidite: string;
        redacteurProposition: string;
        commentaire: string;
        produits: IProduit[];
        listeHistorique: Modele.Rest.IHistorique[];
    }
    interface IProduit {
        id: number;
        nomUnivers: string;
        sousFamille: string;
        nom: string;
        marquage?: boolean;
        proprietes: IPropriete[];
        commentaire?: IPropriete;
        infos?: IPropriete;
        nombreProduitAjouteParCat?: number;
        niveauHierarchique?: number;
        parametrageOk?: boolean;
        parametrageVide?: boolean;
        couleurEtiquette?: string;
        lienIpid?: string;
    }
    interface IUrlFicheProduit {
        label: string;
        url: string;
    }
    interface IPropriete {
        lib: string;
        val?: string | number | boolean;
        typ?: string;
        unit?: string;
        choix?: String[];
        sousProprietes?: ISousPropriete[];
        aide?: string;
        oblig?: string;
        recap?: number;
        tab?: any[];
        array?: any[];
        col?: any[];
        ligne?: any[];
        cle?: any[];
    }
    interface ISousPropriete {
        condition: string;
        proprietes: IPropriete[];
    }
    interface IStatut {
        id: string;
        libelle1: string;
        libelle2: string;
        libelle3: string;
        class: string;
        checked: boolean;
    }
    interface IUnivers {
        id: string;
        libelle: string;
        checked: boolean;
        produits: IProduit[];
    }
}

declare module PropositionCommerciale.Modele.GceDoc {
    enum ETImageMarchéImgMarchéContent {
        Id = 0,
        Flux = 1,
    }
    interface IpropositioncommercialePM {
        ETImageMarché: ETImageMarché;
        ETPageDeGarde: ETPageDeGarde;
        ETIntroductionPropal: ETIntroductionPropal;
        ETUniversProduit: ETUniversProduit[];
        ETEngagementCommercial: ETEngagementCommercial;
        ETAccompagnement: ETAccompagnement;
        ETRGPD: ETRGPD;
        GENERIC_LOGO_ETS: GENERIC_LOGO_ETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface ETImageMarché {
        imgMarché: ETImageMarchéImgMarché;
    }
    interface ETImageMarchéImgMarché {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface ETPageDeGarde {
        TitrePropalRouge: ETPageDeGardeTitrePropalRouge;
        TitrePropalBleu: ETPageDeGardeTitrePropalBleu;
        NomClient: string;
        NomProposition: string;
        DateProposition: string;
        ResponsableDossier: string;
        FonctionResponsable: string;
        NumeroTelephone: string;
    }
    interface ETPageDeGardeTitrePropalRouge {
        Titre: string;
        Titre2: string;
    }
    interface ETPageDeGardeTitrePropalBleu {
        Titre: string;
        Titre2: string;
    }
    interface ETIntroductionPropal {
        NomProposition: string;
        civilite: string;
        dateFinValidite: string;
        civilite2: string;
        nomPrenomChargeAffaire: string;
        libelleEtablissement: string;
    }
    interface ETUniversProduit {
        TitreRouge: ETUniversProduitTitreRouge;
        TitreBleu: ETUniversProduitTitreBleu;
        ListeTableau: ETUniversProduitListeTableau[];
        commentaire: ETUniversProduitCommentaire[];
        InfoLegale: string;
        IPID: ETUniversProduitIPID;
        FicheProduit: ETUniversProduitFicheProduit;
    }
    interface ETUniversProduitIPID {
        url: string;
    }
    interface ETUniversProduitFicheProduit {
        url: string;
    }
    interface ETUniversProduitTitreRouge {
        Univers: string;
        CategorieProduit: string;
    }
    interface ETUniversProduitTitreBleu {
        Univers: string;
        CategorieProduit: string;
    }
    interface ETUniversProduitListeTableau {
        TabLibellePropriete: ETUniversProduitListeTableauTabLibellePropriete[];
        TabPalier: ETUniversProduitListeTableauTabPalier;
        TabPeriode: ETUniversProduitListeTableauTabPeriode;
        caracteristiques: ETUniversProduitListeTableauCaracteristiques;
        commentaire: ETUniversProduitListeTableauCommentaire[];
        TabMonetique: ETUniversProduitListeTableauTabMonetique;
    }
    interface ETUniversProduitListeTableauTabPeriode {
        LigneDetail: ETUniversProduitListeTableauTabPeriodeLigneDetail[];
    }
    interface ETUniversProduitListeTableauTabLibelle2Propriete {
        Libelle: string;
        Propriete1: string;
        Propriete2: string;
    }
    interface ETUniversProduitListeTableauTabPeriodeLigneDetail {
        Periode: string;
        Taux: string;
    }
    interface ETUniversProduitListeTableauTabLibellePropriete {
        Libelle: string;
        Propriete: string;
    }
    interface ETUniversProduitListeTableauTabLibelle3Propriete {
        Libelle: string;
        Propriete1: string;
        Propriete2: string;
        Propriete3: string;
    }
    interface ETUniversProduitListeTableauTabPalier {
        Titre: string;
        UniteInf: string;
        UniteSup: string;
        LignePalier: ETUniversProduitListeTableauTabPalierLignePalier[];
    }
    interface ETUniversProduitListeTableauTabMonetique {
        LigneDetail: ETUniversProduitListeTableauTabMonetiqueLigneDetail[];
    }
    interface ETUniversProduitListeTableauTabMonetiqueLigneDetail {
        Libelle: string;
        Taux: string;
        Montant1: string;
        Montant2: string;
    }
    interface ETUniversProduitListeTableauTabPalierLignePalier {
        BorneInferieure: string;
        BorneSuperieure: string;
        Taux: string;
    }
    interface ETRGPD {
        libEtablissementMinuscule: string;
        url: string;
        libelleEtablissementMajuscule: string;
    }
    interface ETUniversProduitListeTableauCaracteristiques {
        txtCaracteristiques: string;
    }
    interface ETUniversProduitListeTableauCommentaire {
        txtCommentaire: string;
    }
    interface ETUniversProduitCommentaire {
        LigneCommentaire: ETUniversProduitLigneCommentaire[];
    }
    interface ETUniversProduitLigneCommentaire {
        txtCommentaire: string;
    }
    interface ETEngagementCommercial {
        TitreRouge: ETEngagementCommercialTitreRouge;
        TitreBleu: ETEngagementCommercialTitreBleu;
    }
    interface ETEngagementCommercialTitreRouge {
        EngagementRouge: string;
        TexteEngagementRouge: string;
    }
    interface ETEngagementCommercialTitreBleu {
        EngagementBleu: string;
        TexteEngagementBleu: string;
    }
    interface ETAccompagnement {
        TitreRouge: boolean;
        TitreBleu: boolean;
        TabSuggestion: ETAccompagnementTabSuggestion[];
    }
    interface ETAccompagnementTabSuggestion {
        TitreRouge: ETAccompagnementTabSuggestionTitreRouge;
        TitreBleu: ETAccompagnementTabSuggestionTitreBleu;
        LigneDetail: ETAccompagnementTabSuggestionLigneDetail[];
    }
    interface ETAccompagnementTabSuggestionTitreRouge {
        Chevron1: string;
        Titre1: string;
        Chevron2: string;
        Titre2: string;
    }
    interface ETAccompagnementTabSuggestionTitreBleu {
        Chevron1: string;
        Titre1: string;
        Chevron2: string;
        Titre2: string;
    }
    interface ETAccompagnementTabSuggestionLigneDetail {
        Suggestion1: string;
        Suggestion2: string;
    }
    interface ETSignataire {
        NomPrenom1: string;
        Fonction1: string;
        NomPrenom2: string;
        Fonction2: string;
    }
    interface GENERIC_LOGO_ETS {
        LOGO_ETABLISSEMENT: GENERIC_LOGO_ETSLOGO_ETABLISSEMENT;
    }
    interface GENERIC_LOGO_ETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
        b10175: GENERIC_PIEDPAGEETSB10175[];
        b13135: GENERIC_PIEDPAGEETSB13135[];
        b13705: GENERIC_PIEDPAGEETSB13705[];
        b14445: GENERIC_PIEDPAGEETSB14445[];
        b14505: GENERIC_PIEDPAGEETSB14505[];
        b15135: GENERIC_PIEDPAGEETSB15135[];
        b15905: GENERIC_PIEDPAGEETSB15905[];
        b15965: GENERIC_PIEDPAGEETSB15965[];
        b16275: GENERIC_PIEDPAGEETSB16275[];
        b18025: GENERIC_PIEDPAGEETSB18025[];
        b18279: GENERIC_PIEDPAGEETSB18279[];
        b43199: GENERIC_PIEDPAGEETSB43199[];
        b18715: GENERIC_PIEDPAGEETSB18715[];
        b13335: GENERIC_PIEDPAGEETSB13335[];
        b17515: GENERIC_PIEDPAGEETSB17515[];
        b62108: GENERIC_PIEDPAGEETSB62108[];
        b12579: GENERIC_PIEDPAGEETSB12579[];
        b13825: GENERIC_PIEDPAGEETSB13825[];
        b16705: GENERIC_PIEDPAGEETSB16705[];
        b12135: GENERIC_PIEDPAGEETSB12135[];
        b14265: GENERIC_PIEDPAGEETSB14265[];
        b13485: GENERIC_PIEDPAGEETSB13485[];
        b18315: GENERIC_PIEDPAGEETSB18315[];
        b11315: GENERIC_PIEDPAGEETSB11315[];
        b11425: GENERIC_PIEDPAGEETSB11425[];
        b12548: GENERIC_PIEDPAGEETSB12548[];
        b30051: GENERIC_PIEDPAGEETSB30051[];
    }
    interface GENERIC_PIEDPAGEETSB10175 {
        d10175_L1: string;
        d10175_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13135 {
        d13135_L1: string;
        d13135_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13705 {
        d13705_L1: string;
        d13705_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB14445 {
        d14445_L1: string;
        d14445_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB14505 {
        d14505_L1: string;
        d14505_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15135 {
        d15135_L1: string;
        d15135_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15905 {
        d15905_L1: string;
        d15905_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB15965 {
        d15965_L1: string;
        d15965_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16275 {
        d16275_L1: string;
        d16275_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18025 {
        d18025_L1: string;
        d18025_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18279 {
        d18279_L1: string;
        d18279_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB43199 {
        d43199_L1: string;
        d43199_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18715 {
        d18715_L1: string;
        d18715_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13335 {
        d13335_L1: string;
        d13335_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB17515 {
        d17515_L1: string;
        d17515_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB62108 {
        d62108_L1: string;
        d62108_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB12579 {
        d12579_L1: string;
        d12579_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13825 {
        d13825_L1: string;
        d13825_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB16705 {
        d16705_L1: string;
        d16705_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB12135 {
        d12135_L1: string;
        d12135_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB14265 {
        d14265_L1: string;
        d14265_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB13485 {
        d13485_L1: string;
        d13485_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB18315 {
        d18315_L1: string;
        d18315_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB11315 {
        d11315_L1: string;
        d11315_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB11425 {
        d11425_L1: string;
        d11425_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB12548 {
        d12548_L1: string;
        d12548_L2: string;
    }
    interface GENERIC_PIEDPAGEETSB30051 {
        d30051_L1: string;
        d30051_L2: string;
    }
    class propositioncommercialePM implements IpropositioncommercialePM {
        ETImageMarché: ETImageMarché;
        ETPageDeGarde: ETPageDeGarde;
        ETIntroductionPropal: ETIntroductionPropal;
        ETUniversProduit: ETUniversProduit[];
        ETEngagementCommercial: ETEngagementCommercial;
        ETAccompagnement: ETAccompagnement;
        ETSignataire: ETSignataire;
        ETRGPD: ETRGPD;
        GENERIC_LOGO_ETS: GENERIC_LOGO_ETS[];
        GENERIC_PIEDPAGEETS: GENERIC_PIEDPAGEETS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class ArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class GenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class ImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class ImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module PropositionCommerciale.Modele.Rest.PortefeuilleV1.client {
    interface IClient {
        listeClientIndicateur: Array<IClientIndicateur>;
    }
    interface IIndicateur {
        /**
         * Le libellé de l'inducateur :
         * Exemple: "PersonnesProtegees" ....
         */
        code: string;
        /**
         * Le nombre de personnes protégées pour un identifiant de client.
         */
        valeur: string;
        /**
         * La date de dernière mise à jour.
         */
        dateMaj: string;
    }
    interface IParametresEntree {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * La liste des identifiants des clients.
         */
        listeClients: Array<IClients>;
        /**
         * Liste des indicateurs :
         *
         * * Exemple de valeurs possibles:
         *       PP : Personne Protégée.
         *       PNB ....
         */
        listeIndicateurs: Array<string>;
    }
    interface IClients {
        /**
         * L'identifiant du client
         */
        idClient: number;
        /**
         * Le SIREN du client
         */
        sirenClient: string;
    }
    interface IClientIndicateur {
        /**
         * Numéro d'identification de la personne morale.
         */
        identifiantPersonne: number;
        listeIndicateurClient: Array<IIndicateur>;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IInfosAdmin {
        /**
         * Le code établissement / le numéro de l'établissement / numéro agence CE du client.
         */
        codeEtablissement: string;
        /**
         * Le numéro de personne / identifiant client.
         */
        numeroPersonne: number;
        /**
         * La raison sociale
         */
        raisonSociale: string;
        /**
         * Le numéro SIREN.
         */
        numeroSiren: string;
        /**
         * Infos personne mise en suivi
         */
        suiviPar: string;
        /**
         * permet d'aiguiller vers les QR concernées.
         *
         * 0 : Personne connue comme client
         * 1 : Personne connue comme Tiers
         * 2 : Personne connue comme prospect
         * 3 : Personne connue comme Prospect enrichi
         */
        codeTypePersonne: string;
        codeMarche: any;
        /**
         * Segmentation Relationnelle
         */
        segmentRelationnelle: any;
        /**
         * interlocuteurPrincipal
         */
        interlocuteurPrincipal: any;
        /**
         * AdresseSiege
         */
        adresses: any;
        codeJuridique: string;
        etatPersonne: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IMentionLegalePied {
        codeEtablissement: string;
        codePied: number;
        typeEditique: string;
        typeSaisie: string;
        typeEntete: string;
        ligne1: string;
        ligne2: string;
        ligne6: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligneEntete: string;
    }
    interface IMentionLegaleCorps {
        codeEtablissement: string;
        idEdsInterne: number;
        codeInterneEtab: string;
        codeInterneEtab2: string;
        codeCtrRattachement: string;
        critereRoutageBin: string;
        numTelex: string;
        numTelecopieur: string;
        numSiret: string;
        lieuEnregistrement: string;
        mntDotation: number;
        libEdsChequier: string;
        libEdsDomiciliation: string;
        raisonSociale: string;
        codeCategorieJuridique: string;
        codeBic: string;
        numSiretEtab: string;
        numRcsSiren: string;
        mntCapitalEtab: number;
        numNationalEmetteur: string;
        commentaire1: string;
        commentaire2: string;
        commentaire3: string;
        commentaire4: string;
        numOrias: string;
    }
    interface IMentionLegale {
        corps: IMentionLegaleCorps;
        pied: IMentionLegalePied;
        dateModification: string;
        codeEtablissement: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IPreference {
        /**
         * Clé
         */
        cle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
    interface IParametresEntree {
        /**
         * Code agent
         */
        codeAgent: string;
    }
}

declare module PropositionCommerciale.Modele.Rest.ProduitProposable {
    interface IProduitProposable {
        listeParamProduit: Array<IParamProduit>;
        listParamSuggestion: Array<IParamSuggestion>;
        signataire: IParamProduit;
        engagementCommercial: IParamProduit;
    }
    interface IParamProduit {
        /**
         * Identifie une sous-famille de produits BDR commercialisée par le Groupe Caisse d'Epargne
         */
        codeSousFamilleProduit: string;
        /**
         * Libellé de la sous-famille bancaire BDR utilisée lors de l'affichage des propositions commerciales.
         */
        libelleSousFamille: string;
        /**
         * Détermine une famille de produits BDR
         */
        codeFamilleProduit: string;
        /**
         * Libellé Famille Bancaire BDR
         */
        libelleFamille: string;
        /**
         * Détermine la catégorie d'une sous-famille de produits BDR afin de distinguer le type d'information à remonter au chargé d'affaire sur cette sous-famille.
         */
        categorieSousFamille: string;
        /**
         * Modèle JSON produit propositiion
         */
        json: string;
    }
    interface IParamSuggestion {
        /**
         * Identifie une sous-famille de produits BDR commercialisée par le Groupe Caisse d'Epargne
         */
        codeSousFamilleProduit: string;
        /**
         * Libellé de la sous-famille bancaire BDR utilisée lors de l'affichage des propositions commerciales.
         */
        libelleSousFamille: string;
        /**
         * Détermine une famille de produits BDR
         */
        codeFamilleProduit: string;
        /**
         * Détermine une famille de produits BDR
         */
        libelleFamille: string;
        /**
         * Détermine la catégorie d'une sous-famille de produits BDR afin de distinguer le type d'information à remonter au chargé d'affaire sur cette sous-famille.
         */
        categorieSousFamille: string;
        /**
         * Modèle JSON Engagements Suggestions
         */
        json: string;
    }
}

declare module PropositionCommerciale.Modele.Rest.Produit {
    interface IProduit {
        /**
         * Référence d'identification d'une proposition commerciale
         */
        identifiantProposition: number;
        /**
         * Identifiant produit sélectionné
         */
        identifiantProduit: number;
        /**
         * Sous famille de produits BDR
         */
        sousFamille: string;
        /**
         * Position (d'affichage) d'un produit sélectionné dans une
         * proposition commerciale.
         */
        niveauHierarchique?: number;
        /**
         * Identifiant Agent
         */
        identifiantAgent: number;
        /**
         * Données valorisées relatives à une sous-famille bancaire utilisée dans les propositions commerciales aux clients BDR.
         */
        jsonValorise: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IPropositionCommerciale {
        /**
         * Référence d'identification d'une proposition d'une proposition commerciale
         */
        identifiantProposition: number;
        /**
         * Libellé de la proposition commerciale proposée au client. Saisissable par l'agent bancaire.
         */
        libelleProposition: string;
        /**
         * Numéro d'identification de la relation économique (ex dossier ménage) dans le SI
         */
        identifiantRelationEconomique?: number;
        /**
         * Désignation courte donnée d'une relation économique
         */
        libelleRelationEconomique?: string;
        /**
         * Identifiant Personne
         */
        identifiantPersonne?: number;
        /**
         * Raison sociale
         */
        raisonSociale?: string;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE
         */
        numeroSiren?: string;
        /**
         * '1 '       En cours
         * '2 '       En attente dérogation
         * '3 '       En attente retour client
         * '4 '       Accord client
         * '5A'       Sans suite - Ajourné
         * '5B'       Sans suite - Perdu concurrence
         * '5C'       Sans suite - Abandonné
         * '6 '       Refus banque
         * '7 '       Echu
         * '8 '       Modèle
         */
        statutProposition: string;
        /**
         * Date de création de la proposition
         * Type date au format yyyy-MM-dd
         */
        dateCreation?: string;
        /**
         * Date de fin de validité de la proposition
         * Type date au format yyyy-MM-dd
         */
        dateFinValidite: string;
        /**
         * Identifiant agent
         */
        identifiantAgent: number;
        /**
         * '1'        MME
         * '2'        MLLE
         * '3'        M
         */
        codeCivilite?: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés
         *        ordre quelconque, dans la limite d'un nom
         *        de famille par parent
         */
        nomFamille?: string;
        /**
         * Premier prénom de l'état civil de la personne
         */
        premierPrenom?: string;
        /**
         * Dénomination de la personne autre que le nom de
         * famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de
         *   celui de l'époux(se) dans un ordre quelconque
         */
        nomUsage?: string;
        /**
         * 0 personne connue comme client
         * 1 personne connue comme tiers
         * 2 personne connue comme prospect
         * 3 personne connue comme prospect enrichi
         */
        typePersonne?: string;
        /**
         * Identifie une sous-famille de produits BDR commercialisée par le Groupe Caisse d'Epargne
         */
        sousFamilleProduit?: string;
        /**
         * Libellé du motif du statut de la proposition commerciale. Saisissable par l'agent bancaire.
         */
        libelleMotifStatut?: string;
        /**
         * Commentaire sur la proposition commerciale
         */
        libelleCommentaire?: string;
        listeProduit?: Array<IProduit>;
        listeHistorique?: Array<IHistorique>;
        /**
         * Indicateur précisant si la proposition commerciale dupliquée est une proposition commerciale modèle
         *  (proposition non rattachée à un client)
         * 'O'        La proposition commerciale dupliquée est un modèle
         * 'N'        La proposition commerciale dupliquée n'est pas un modèle
         */
        indicDuplicationModele?: string;
        /**
         * Numéro d'identification du portefeuille de clientèle.
         */
        numeroPortefeuille?: number;
        /**
         * Indicateur précisant si les produits de la proposition doivent être ré ordonnancés
         */
        indicOrdonnancementProduit?: boolean;
    }
    interface IProduit {
        /**
         * identifiant Proposition
         */
        identifiantProposition: number;
        /**
         * Référence d'identification d'un  produit sélectionné dans une proposition commerciale
         */
        identifiantProduit: number;
        /**
         * Identifie une sous-famille de produits BDR commercialisée par le Groupe Caisse d'Epargne
         */
        sousFamilleProduit: string;
        /**
         * Position d'affichage d'un produit sélectionné dans une  proposition commerciale.
         */
        niveauHierarchiqueProposition: number;
        /**
         * Modèle JSON produit propositiion
         */
        json: string;
        /**
         * Propriétés ajoutées pour rendre compatibles les objet IProduit et IProduitProposable
         */
        codeSousFamilleProduit: string;
        libelleSousFamille: string;
        codeFamilleProduit: string;
        libelleFamille: string;
        categorieSousFamille: string;
    }
    interface IHistorique {
        /**
         * identifiant Proposition
         */
        identifiantProposition: number;
        /**
         * statut de la Proposition
         * '1 '       En cours
         * '2 '       En attente délégation
         * '3 '       En attente retour client
         * '4 '       Accord client
         * '5A'       Sans suite - Ajourné
         * '5B'       Sans suite - Perdu concurrence
         * '5C'       Sans suite - Abandonné
         * '6 '       Refus banque
         * '7 '       Echu
         * '8 '       Modèle
         */
        statutProposition: string;
        /**
         * Date de création du statut
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * Libellé du statut
         */
        libelleStatut: string;
    }
    interface IProposition {
        propositionCommerciale?: IPropositionCommerciale;
        listePropositionCommerciale?: Array<IPropositionCommerciale>;
        listePortefeuille?: Array<IPortefeuille>;
        infoClient?: IInfoClient;
        filtre?: IFiltre;
    }
    interface IPortefeuille {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant agent
         */
        referenceAgent: number;
        /**
         * Numéro du portefeuille
         */
        numeroPortefeuille: number;
        /**
         * Poste fonctionnel agent
         */
        posteFonctionnel: number;
    }
    interface IInfoClient {
        /**
         * Numéro d'identification de la relation économique (ex dossier ménage) dans le SI
         */
        identifiantRelationEconomique: number;
        /**
         * Désignation courte donnée d'une relation économique
         */
        libelleRelationEconomique: string;
        /**
         * Raison sociale
         */
        raisonSociale: string;
        /**
         * Numéro d'identification d'une entreprise francaise répertoriée dans le fichier SIRENE de l'INSEE
         */
        numeroSiren: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
    }
    interface IFiltre {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * Identifiant agent
         */
        referenceAgent: number;
        /**
         * Univers du produit
         */
        codeFamilleProduit?: string;
        /**
         * Date de début de la période recherchée
         * Type date au format yyyy-MM-dd
         */
        dateDebut?: string;
        /**
         * Date de fin de la période recherchée
         * Type date au format yyyy-MM-dd
         */
        dateFin?: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IPortefeuilleRecherche {
        /**
         * Code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France
         */
        CodeEtablissement: string;
        /**
         * Numéro d'identification interne de l'élément de structure pouvant être
         *    - de type agence (type3)
         *    - de type poste fonctionnel (type1)
         */
        IdentifiantElementStructure: number;
        DonneeSignifiante: Array<IDonneeSignifiante>;
    }
    interface IDonneeSignifiante {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle
         */
        identifiantPortefeuille: number;
        /**
         * indique le type de portefeuille de suivi clientèle, à pour valeur :
         * •H : hors portefeuille
         * •R : portefeuille réservoir
         * •C : portefeuille collectif
         * •N: portefeuille nominatif
         */
        codeTypePortefeuille: string;
        /**
         * indique si le portefeuille est affecté :
         *  - O : oui
         *  - N : non
         */
        indicateurAffectation: string;
        /**
         * Numéro d'identification interne de l'élément de structure de type agence (type3) propriétaire du portefeuille de suivi clientèle.
         */
        identifiantElementStructurePortefeuille: number;
        /**
         * Libellé de l'élément de structure propriétaire du portefeuille de suivi de clientèle
         */
        libelleElementStructurePortefeuille: string;
        /**
         * numéro d'identification interne de l'élément de structure assurant le suivi du portefeuille clientèle, correspond à :
         *  - un poste fonctionnel pour un portefeuille nominatif affecté
         */
        identifiantElementStructureSuiviPortefeuille: number;
        /**
         * Libellé de l'élément de structure assurant le suivi du portefeuille clientèle
         */
        libelleElementStructureSuiviPortefeuille: string;
        /**
         * libellé du portefeuille de suivi clientèle
         */
        libellePortefeuille: string;
    }
}

declare module PropositionCommerciale.Modele.Rest.PortefeuilleV1.relationCommerciale {
    interface IClient {
        /**
         * Numéro d'identification de la personne morale.
         */
        identifiantPersonne: number;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Valeurs :
         * "1" : Entrepreneur individuel
         * "2" : Personne morale ou assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * La raison sociale est un nom ou une dénomination attribuée à une société. Elle est pour la personne morale ce que le nom patronymique est pour la Personne Physique. Par contre, elle doit être unique.
         */
        raisonSociale: string;
        /**
         * Numéro SIREN professionnel
         */
        numeroSiren: string;
        /**
         * Code leader espace entreprise
         * Définition : Détermine si la personne de la relation est leader de l'espace entreprise
         * Valeurs : 'L' Leader 'N' Personne sans spécificité
         */
        codeLeaderEspaceEntreprise: string;
        /**
         * Nom Leader de la Relation Economique.
         */
        nomLeaderRelationEco: string;
        /**
         * Détermine la typologie de segmentation clientèle.
         *
         * Correspond au 2 premiers caractères du code
         * EX : MN : Marché national
         */
        codeTypeSegmentMarche: string;
        /**
         * Détermine un segment de clientèle dans une typologie donnée : MN : Marché national
         */
        codeSegmentMarche: string;
        listeIndicateurClient: Array<IIndicateur>;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
         *
         * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) :
         * pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé)
         * pour un segment, elle correspond aux 4 carac. codifiant le segment.
         * le rang de la rubrique (sur 3 car.)
         * le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
    interface IRelationCommercialeParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Permet de filtrer la réponse et de n’inclure que des clients, des prospects (enrichis ou restreints) ou les 2).
         * Valeurs :
         * "00" : Client + Prospect + Tiers.
         * "01" : Client.
         * "02" : Prospect (enrichis/restreints) + Tiers
         * Par défaut "01" : Clients (si non fourni, forcé à "01")
         */
        filtrageClientProspect: string;
        /**
         * En Entrée :
         * - nombreLimiteMaxClient : Nombre de clients maximun à retourner.
         *  Si non fourni, la ressource va initialiser = 0L, et la QR va prendre la valeur par défaut = 350.
         *  Si la valeur = 0L : limite = 350.
         *  Si la valeur = 9999 : aucune limite ne devra être
         *  appliquée.
         */
        nombreLimiteMaxClient: number;
    }
    interface IRelationCommerciale {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle.
         */
        listePortefeuilles: Array<IPortefeuille>;
        messageInformation: IMessageFonctionnel;
    }
    interface IRelation {
        /**
         * Numéro d'identification de la relation économique.
         */
        identifiantRelationEco: number;
        /**
         * Désignation courte de la relation Economique.
         */
        libelleRelationEco: string;
        listeIndicateurRelation: Array<IIndicateur>;
        listeClient: Array<IClient>;
    }
    interface IIndicateur {
        /**
         * Le code indicateur :
         * Valeurs :
         * "dateDernierRdv", "dateProchaineRdv", "pnb", codeTypePersonne".....
         */
        code: string;
        /**
         * Valeur du code indicateur :
         * "codeTypePersonne" (CTDAPR)
         * 0 : Personne connue comme client
         * 1 : Personne connue comme Tiers
         * 2 : Personne connue comme prospect
         * 3 : Personne connue comme Prospect enrichi
         */
        valeur: string;
        /**
         * Date de Maj.
         */
        dateMaj: string;
    }
    interface IPortefeuille {
        /**
         * Numéro d'identification d'un portefeuille de suivi clientèle.
         */
        identifiantPortefeuille: number;
        /**
         * Libellé du portefeuille de suivi clientèle.
         */
        libellePortefeuille: string;
        /**
         * Nombre total de clients (de type Personne Morale et EI) dans le protefeuille.
         */
        nombreTotalClients: number;
        /**
         * Nombre total de Prospect + Tiers (de type Personne Morale et EI) dans le portefeuille.
         */
        nombreTotalProspectsTiers: number;
        listeRelation: Array<IRelation>;
        listeMessageFonctionnel: Array<IMessageFonctionnel>;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IRgpd {
        libelleMinuscule: string;
        libelleMajuscule: string;
        genreNomEtablissement: string;
        url: string;
        nomServiceInternet: string;
        articleMinusculeDeLaDu: string;
        articleMinusculeALaAu: string;
        articleMinusculeLaLe: string;
        adjectifMinusucleSaSon: string;
        articleMajusculeDeLaDu: string;
        articleMajusculeALaAu: string;
        articleMajusculeLaLe: string;
        adjectifMajusculeSaSon: string;
        articleReseauDeLaDu: string;
        articleServiceRelCliDeLaDuDeSon: string;
        articleServiceRelCliALaAuASon: string;
        codeEtablissement: string;
        articleLaLe: string;
        articleALaAu: string;
        articleDeLaDu: string;
        etablissementLibelleLong: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface ISegmentationMarche {
        /**
         * Référence d'identification d'un Etablissement bancaire ou financier utilisant la plateforme bancaire Mysys.
         * Concerne les Caisses d'Epargne, la banque BCP, Expanso, le CFF, ...
         * Correspond au code Banque sous lequel un Etablissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement.
         * Référence interne MYSYS.
         * Personne référencée comme client, tiers ou prospect.
         */
        identificationTiers: string;
        /**
         * Libellé de désignation d'un segment clientèle calculée.
         */
        libelleSegmentationCalculee: string;
        /**
         * Détermine le segment de clientèle calculée dans la typologie du Marché National.
         *
         * Exemple de valeurs possibles :
         * 101102 / Particuliers : Parti. non Prof
         * 102102 / Professionnels : Prof. Lib.
         * 206101 / Professionnels Privé Promoteurs
         */
        codeSegmentationCalculee: string;
        /**
         * Libellé court de la segmentation clientèle calculée pour affichage sur le poste de travail.
         * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
         */
        libelleCourtSegmentationCalculee: string;
        /**
         * Date à laquelle à été calculée la segmentation.
         * Type date au format yyyy-MM-dd
         */
        dateCalculSegmentation: string;
        /**
         * Date à laquelle la segmentation est modifiée au Poste de Travail.
         * Type date au format yyyy-MM-dd
         */
        dateModificationSegmentation: string;
        /**
         * Code de forçage de la segmentation au poste de travail.
         *
         * Valeurs possibles :
         * ' ' - Non forcé
         * '1' - Forcé au poste de travail
         * '2' - Forcé par propagation
         */
        codeForcageSegmentation: string;
        /**
         * Détermine le segment de clientèle forcée dans la typologie du Marché National.
         *
         * Exemple de valeurs possibles :
         * 101102 / Particuliers : Parti. non Prof
         * 102102 / Professionnels : Prof. Lib.
         * 206101 / Professionnels Privé Promoteurs
         */
        codeSegmentationForcee: string;
        /**
         * Libellé de désignation d'un segment clientèle forcée.
         */
        libelleSegmentationForcee: string;
        /**
         * Libellé court de la segmentation clientèle forcée pour affichage sur le poste de travail.
         * Libellé à caractère confidentiel pour ne pas être interprété par la clientèle.
         */
        libelleCourtSegmentationForcee: string;
        codeTypeSegmentMarche: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface ITiersRechercheQuery {
        codeEtablissement: string;
        codeTypeRecherche: number;
        identifiantRecherche: string;
    }
    interface IDonneeCommune {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifiant de la personne au sein de l'établissement du Groupe CE.
         */
        identifiantPersonne: number;
        /**
         * Code servant à distinguer une personne connue comme tiers et une personne connue comme client ou prospect.
         * Valeurs :
         * ---------
         * 0. Personne connue comme client
         * 1. Personne connue comme Tiers
         * 2 .Personne connue comme prospect
         */
        codeTypePersonne: string;
        /**
         * Détermine le type de personnalité juridique de la personne.
         * Valeurs :
         * ----------
         * 1=personne physique
         * 2=personne morale / assimilée morale
         */
        codePersonnaliteJuridique: string;
        /**
         * Référence externe de l’agence à laquelle le client est rattaché.
         */
        edsDomiciliation: number;
        /**
         * Codé état de la personne (0:Actif, 1:clôturé)
         */
        codeStatut: string;
    }
    interface IDonneePersonnePhysique {
        /**
         * Nom patronymique du mari.
         * Il s'agit d'une donnée règlementaire.
         */
        nomMarital: string;
        /**
         * Premier prénom de l'état civil de la personne physique. Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         * Il s'agit d'une donnée règlementaire.
         */
        prenom: string;
        /**
         * Date de naissance de la personne physique.
         * Type date au format yyyy-MM-dd
         */
        dateNaissance: string;
        /**
         * Code qui permet de respecter la dénomination
         * de la personne suivant sa situation de famille.
         * Valeurs :
         * ----------
         * '1' = MME
         * '2' = MLLE
         * '3' = M
         */
        codeCivilite: string;
        /**
         * Nom de famille de la personne physique.
         * Pour une femme, il s'agit de son nom de jeune fille (par opposition au nom marital).
         * Il s'agit d'une donnée règlementaire.
         */
        nomFamillePersonnePhysique: string;
        /**
         * Indicateur précisant si la personne physique a une activité professionnelle (statut d'entrepreneur individuel)
         */
        indicateurCodeActiviteProfessionnel: string;
        /**
         * Détermine le statut pro de la personne à un instant donné. Permet de déterminer si la personne est un professionnel de par son activité.
         */
        codeEtatStatutPro: string;
        /**
         * Détermine l'état du suivi personnalisé de la personne à un instant donné.
         */
        codeEtatSuiviGP: string;
        /**
         * Détermine la capacité juridique d'une personne donnée.
         */
        codeTypeCapaciteJuridique: string;
    }
    interface IDonneePersonneMorale {
        /**
         * identifie de manière unique un professionnel au niveau national.
         * Identifiant attribué à toute personne juridique, physique ou morale, introduite dans le répertoire SIREN.
         */
        numeroSiren: string;
        /**
         * La raison sociale est un nom ou une dénomination attribuée à une société. Elle est pour la personne morale ce que le nom patronymique est pour la Personne Physique. Par contre, elle doit être unique.
         */
        raisonSociale: string;
        /**
         * Désignation de forme réduite de la personne morale.
         * Ensemble de lettres initiales (de certains termes de la dénomination) formant un mot servant d'abréviation
         */
        sigle: string;
    }
    interface IAdresse {
        /**
         * Libellé de la ligne 2 d'une adresse normée AFNOR.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage, d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2AdresseAFNOR: string;
        /**
         * Libellé de la ligne 3 d'une adresse normée AFNOR.
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment : entrée, bâtiment, bloc, tour etc.
         */
        ligne3AdresseAFNOR: string;
        /**
         * Libellé de la ligne 4 d'une adresse normée AFNOR.
         * Peut comprendre le numéro dans la voie, type et nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX
         */
        ligne4AdresseAFNOR: string;
        /**
         * Libellé de la ligne 5 d'une adresse normée AFNOR.
         * Peut comprendre le nom d'un quartier, d'un lieu-dit, d'un hameau ou d’un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant plusieurs voies internes.
         */
        ligne5AdresseAFNOR: string;
        /**
         * Libellé de la ligne 6 d'une adresse normée AFNOR.
         * Peut comprendre le numéro de code postal et nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6AdresseAFNOR: string;
    }
    interface IMedia {
        /**
         * Valeurs :
         * ----------
         * '01' Téléphone fixe personnel
         * '02' Téléphone fixe professionnel
         * '03' Téléphone mobile personnel
         * '04' Téléphone mobile professionnel
         * '05' Téléphone mobile supplémentaire personnel
         * '06' Téléphone mobile supplémentaire professionnel
         * '07' Téléphone mobile préféré
         * '08' Téléphone mobile pour opérations sécurisées en ligne
         * '09' E-mail personnel
         * '10' E-Mail professionnel
         * '11' E-mail préféré
         */
        codeTypeMedia: string;
        /**
         * Adresse mail ou n° de téléphone
         */
        referenceAccesMedia: string;
    }
    interface ITiers {
        donneeCommune: IDonneeCommune;
        donneePersonnePhysique: IDonneePersonnePhysique;
        donneePersonneMorale: IDonneePersonneMorale;
        adresse: IAdresse;
        listMedia: Array<IMedia>;
    }
    interface IMessageErreur {
        /**
         * Code de l'erreur
         */
        codeErreur: string;
        /**
         * Description de l'erreur
         */
        libelleErreur: string;
    }
    interface IMediaTraitement {
        /**
         * Téléphone mobile
         */
        telephoneMobile: string;
        /**
         * Téléphone personnel
         */
        telephonePersonnel: string;
        /**
         * Adresse E-mail préférée
         */
        adresseEmailPrincipal: string;
    }
}

declare module PropositionCommerciale.Modele.Rest {
    interface IUrlProduit {
        listeLienIpid: Array<ILienIPID>;
        listeProduit: Array<IProduit>;
    }
    interface ILienIPID {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * ex : ASS_HCLE, CCE, CARTES
         * Produit définit dans la table P61C
         */
        codeProduit: string;
        /**
         * URL d'accès à l'IPID
         */
        url: string;
    }
    interface ILienFicheProduit {
        /**
         * Label décrivant l'url
         */
        label: string;
        /**
         * URL de la fiche produit
         */
        url: string;
    }
    interface IProduit {
        /**
         * Code établissement
         */
        codeEtablissement: string;
        /**
         * ex : ASS_HCLE, CCE, CARTES
         * Produit définit dans la table P61C
         */
        codeProduit: string;
        listeLienFicheProduit: Array<ILienFicheProduit>;
    }
}

/**
 * Service applicatif de choix EDS
 * @module Portefeuille.Services.Application
 */
declare module PropositionCommerciale.Services {
    /**
     * Interface de la classe EventService
     */
    interface IChoixEdsService {
        getCaracteristiquesAgent(agent: MyWay.Model.Agent): ng.IPromise<Modele.Application.ICaracteristiquesAgent>;
    }
}

/**
 * Service applicatif de gestion d'événement
 * @module PropositionCommerciale.Services.Application
 */
declare module PropositionCommerciale.Services {
    /**
     * Interface de la classe EventService
     */
    interface IEventService {
        setHeaderPropositionCommercialeControleur(headerPropositionCommercialeControleur: Controleur.HeaderPropositionCommercialeControleur): void;
        initialiserListePortfeuilleIndexControleur(): ng.IPromise<void>;
        initialiserHabilitationChoixEDSIndexControleur(estHabilite: boolean): void;
        ouvrirVoletChoixPortefeuilleIndexControleur(): void;
        majDonneesDonneesEdsIndexControleur(edsChoisi: Modele.Application.ICaracteristiquesAgent, contexte: Modele.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void>;
    }
}

declare module PropositionCommerciale.Services {
    /**
     * Interface de la classe LisaApplication
     */
    interface ILisaApplication {
        next(valeurSortie: number, urlLocal: string): ng.IPromise<void>;
    }
}

declare module PropositionCommerciale.Services {
    /**
     * Interface de la classe ListeClientsService
     */
    interface IListeClientsService {
        razRelations(): void;
        getListeClient(identifiantEds: number, listePortefeuilles: Array<Modele.Application.IPortefeuille>, typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<Modele.Application.IClient[]>;
    }
}

declare module PropositionCommerciale.Services {
    /**
     * Interface de la classe PortefeuilleService
     */
    interface IPortefeuilleService {
        getListePortefeuilleAgentConnecte(codeEtablissement: string, identifiantAgent: string): ng.IPromise<Modele.Application.IPortefeuille[]>;
        getListePortefeuilleAgentChoisi(edsChoisi: Modele.Application.ICaracteristiquesAgent): ng.IPromise<Modele.Application.IPortefeuille[]>;
        setListePortfeuillesVisu(portefeuilles: Modele.Application.IPortefeuille[]): any;
        getListePortefeuillesVisu(): Array<Modele.Application.IPortefeuille>;
        aPortefeuillesAffiche(): boolean;
        getCaracteristiquesAgent(): Modele.Application.ICaracteristiquesAgent;
        setCaracteristiquesAgent(caracteristiquesAgent: Modele.Application.ICaracteristiquesAgent): void;
        aPortefeuille(): boolean;
        getListePortefeuillesActifs(): Array<Modele.Application.IPortefeuille>;
        setListePortefeuillesActifs(listePtfActifs: Array<number>): void;
        setTypeForcage(typeForcage: Enum.PageClients.TYPE_FORCAGE): void;
        getTypeForcage(): Enum.PageClients.TYPE_FORCAGE;
        initListePortefeuilles(contexte: Modele.Application.IContexte): ng.IPromise<Modele.Application.IPortefeuille[]>;
        verificationSiAgentADesPortefeuilles(): boolean;
        buildSousTitrePage(contexteDesignation: string): string;
    }
}

declare module PropositionCommerciale.Services {
    class PreferencesService implements IPreferencesService {
        private serviceAgentExtended;
        private $q;
        private preferenceUtilisateurRestService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, preferenceUtilisateurRestService: Services.Rest.IPreferenceUtilisateurService);
        /**
         * Permet de lire une liste d'identifiants portefeuilles selectionnes provenant des préférences
         * @returns {Array<number>}
         */
        lireChoixPortefeuilles(identifiantAgent: string): ng.IPromise<Array<number>>;
        /**
         * Permet de recupérer une préférence
         * @param {string} cle
         * @returns {ng.IPromise<any>}
         */
        private lirePreference(cle, identifiantAgent);
        /**
         * Permet d'ecrire les preferences de portefeuilles affiches
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {MyWay.Services.IPromesse<void>}
         */
        ecrireChoixPortefeuilles(portefeuilles: Array<Modele.Application.IPortefeuille>): MyWay.Services.IPromesse<void>;
        /**
         * Permet de convertir la liste des portefeuilles en liste d'identifiants correspondant aux portefeuilles selectionnes
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {Array<number>}
         */
        convertirListePortefeuilleEnPreference(portefeuilles: Array<Modele.Application.IPortefeuille>): Array<number>;
    }
    /**
     * Interface de la classe PreferencesService
     */
    interface IPreferencesService {
        lireChoixPortefeuilles(identifiantAgent: string): ng.IPromise<Array<number>>;
        ecrireChoixPortefeuilles(portefeuilles: Array<Modele.Application.IPortefeuille>): MyWay.Services.IPromesse<void>;
        convertirListePortefeuilleEnPreference(portefeuilles: Array<Modele.Application.IPortefeuille>): Array<number>;
    }
}

declare module PropositionCommerciale.Services {
    interface IPropositionService {
        /**
         * Nom de la proposition en cours de consultation
         */
        nomNouvelleProposition: string;
        /**
         * Booleen qui indique si c'est une proposition modèle
         */
        isModele: boolean;
        /**
         * Liste des produits contenus dans la proposition
         */
        listeProduit: Modele.Application.IProduit[];
        /**
         * Liste des suggestions de la proposition en cours de consultation
         */
        suggestions: Modele.Application.IProduit[];
        /**
         * Liste des niveaux hierarchiques de chaque produit, permettant de générer le prochain niveau hiérarchique
         */
        listeNiveauHierarchiqueProduit: any[];
        /**
         * Catalogue de tous les produits
         */
        listeUnivers: Modele.Application.IUnivers[];
        initialisationDuContexteDeLaPropositionCommerciale(): ng.IPromise<Modele.Application.IUnivers[]>;
        /**
         * Objet REST de la proposition en cours de consultation
         */
        propositionCourante: Modele.Rest.IProposition;
        /**
         * Objet IHM de la proposition en cours de consultation
         */
        propositionApplicationCourante: Modele.Application.IProposition;
        /**
         * Fonction qui permet de savoir si un produit est complet
         * @param produitPanier
         */
        isParametrageOk(produitPanier: Modele.Application.IProduit): boolean;
        /**
         * Fonction qui permet de savoir si un produit est vide
         * @param produitPanier
         */
        isParametrageVide(produitPanier: Modele.Application.IProduit): boolean;
        /**
         * Fonction qui permet de lancer l'impression d'une proposition à partir de la page principale
         * @param proposition
         */
        editionPdfPagePrincipale(proposition: Modele.Application.IProposition): any;
        /**
         * Fonction qui permet de lancer l'impression à partir du récapitulatif
         */
        editionPdf(): void;
        /**
         * Fonction qui prépare et effectue l'appel au webservice REST GET proposition
         * @param propositionAbrege
         */
        getProposition(propositionAbrege: Modele.Application.IProposition): ng.IPromise<Modele.Rest.IProposition>;
        /**
         * Vérification que la proposition est correctement paramétrée pour être imprimée
         */
        verificationConditionAffichagePdf(): boolean;
        /**
         * Libellé affiché dans le bouton pour consulter / modifier une proposition
         */
        libelleModifierBouton: string;
        /**
         * Booléen qui permet d'activer le loader d'une page pour indiquer qu'un traitement est en cours
         */
        chargementPage: boolean;
        postProposition(numeroAgent: number, posteFonctionnel: number, listePortefeuille: Modele.Application.IPortefeuille[], filtre: Modele.Rest.IFiltre): ng.IPromise<Modele.Rest.IPropositionCommerciale[]>;
        /**
         * Signataires d'une proposition en cours de consultation
         */
        signataires: Modele.Application.IProduit;
        /**
         * Engagements commerciaux de la proposition en cours de consultation
         */
        engagement: Modele.Application.IProduit;
        decrementationDansCatalogueProduit(sousFamille: string): any;
        incrementationDansCatalogueProduit(sousFamille: string): any;
    }
}

declare module PropositionCommerciale.Services {
    interface ITableauPropositionService {
        filtrer(filtre: any): ng.IPromise<Modele.Application.IProposition[]>;
        dupliquerProposition(tableauProposition: Tableau.TableauProposition): ng.IPromise<Modele.Application.IProposition>;
        convertirProposition(tableauProposition: Tableau.TableauProposition): ng.IPromise<Modele.Application.IProposition>;
        creerPropositionIhm(propositionCommerciale: Modele.Rest.IPropositionCommerciale): Modele.Application.IProposition;
        modaleModifierStatut(tableauProposition: Tableau.TableauProposition): void;
        buildListePropositionIhm(listePropositionCommerciale: Modele.Rest.IPropositionCommerciale[]): Modele.Application.IProposition[];
        chargementListeProposition: boolean;
    }
}

declare module PropositionCommerciale.Services {
    interface IPiedPageService {
        genererPiedPage(mentionsLegales: Modele.Rest.IMentionLegale, authInfo: MyWay.Services.Context.AuthentificationInfo): any;
    }
}

declare module PropositionCommerciale.Services {
    interface IGCEDOCProduitService {
        ajoutProduit(listeProduitsGCEDOC: Modele.GceDoc.ETUniversProduit[], produit: Modele.Application.IProduit, estRouge: boolean): any;
    }
}

declare module PropositionCommerciale.Services {
    interface IGCEDOCService {
        createImpressionParams(): any;
        createDocument(proposition: Modele.Application.IProposition, listeProduits: Modele.Application.IProduit[], engagement: Modele.Application.IProduit, listeSuggestions: Modele.Application.IProduit[], signataires: Modele.Application.IProduit, infoClient: Modele.Rest.IInfoClient, mentionsLegales: Modele.Rest.IMentionLegale, authInfo: MyWay.Services.Context.AuthentificationInfo, codeTypeSegmentationMarche: string, rgpd: Modele.Rest.IRgpd): any;
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface de la classe ClientService
     */
    interface IClientService {
        getClientsIndicateurs(query: Modele.Rest.PortefeuilleV1.client.IParametresEntree): ng.IPromise<Modele.Rest.PortefeuilleV1.client.IClient>;
    }
}

declare module PropositionCommerciale.Services.Rest.SyntheseCorporate {
    interface IInfosAdministrativesRestQuery {
        identifiantPersonne: string;
        codeEtablissement: string;
    }
    interface IInfosAdministrativesRestService {
        getInfosAdministratives(query: IInfosAdministrativesRestQuery): ng.IPromise<Modele.Rest.IInfosAdmin>;
    }
}

declare module PropositionCommerciale.Services.Rest.MentionsLegales {
    interface IMentionLegaleQuery {
        date: string;
        codeEtablissement: string;
    }
    interface IMentionsLegalesRestService {
        getMentionsLegales(query: IMentionLegaleQuery): ng.IPromise<Modele.Rest.IMentionLegale>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IPreferenceUtilisateurService {
        getListePreferences(query: Modele.Rest.IParametresEntree): ng.IPromise<Array<Modele.Rest.IPreference>>;
    }
}

declare module PropositionCommerciale.Services.Rest.ProduitProposable {
    interface IProduitProposableQuery {
        codeAffichage: string;
    }
    interface IProduitProposableRestService {
        getProduitProposable(query: IProduitProposableQuery): ng.IPromise<Modele.Rest.ProduitProposable.IProduitProposable>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    interface IProduitService {
        putProduit(produit: PropositionCommerciale.Modele.Rest.Produit.IProduit): ng.IPromise<PropositionCommerciale.Modele.Rest.Produit.IProduit>;
        postProduit(produit: PropositionCommerciale.Modele.Rest.Produit.IProduit): ng.IPromise<PropositionCommerciale.Modele.Rest.Produit.IProduit>;
        deleteProduit(produit: PropositionCommerciale.Modele.Rest.Produit.IProduit): ng.IPromise<PropositionCommerciale.Modele.Rest.Produit.IProduit>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    interface IPropositionCommercialeQuery {
        /**
         * Code Etablissement Bancaire
         */
        codeEtablissement: string;
        /**
         * Identifiant Personne
         */
        identifiantPersonne: number;
        /**
         * Référence Agent
         */
        referenceAgent?: number;
        /**
         * Identifiant Proposition
         */
        identifiantProposition?: number;
        /**
         * Univers du produit
         */
        codeFamilleProduit?: string;
        /**
         * Date de début de la période recherchée
         */
        dateDebut?: string;
        /**
         * Date de début de la période recherchée
         */
        dateFin?: string;
    }
    interface IPropositionCommercialeService {
        getProposition(query: IPropositionCommercialeQuery): ng.IPromise<Modele.Rest.IProposition>;
        putProposition(proposition: Modele.Rest.IProposition): ng.IPromise<Modele.Rest.IProposition>;
        postProposition(proposition: Modele.Rest.IProposition): ng.IPromise<Modele.Rest.IProposition>;
        deleteProposition(proposition: Modele.Rest.IProposition): ng.IPromise<Modele.Rest.IProposition>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface représentant un objet pour la méthode GET
     */
    interface IRecherchePortefeuilleQuery {
        codeEtablissement: string;
        IdentifianElementStructure: number;
    }
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IRecherchePortefeuilleService {
        getPortefeuilles(query: IRecherchePortefeuilleQuery): ng.IPromise<Modele.Rest.IPortefeuilleRecherche>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IRechercheCommercialeService {
        getRelationCommerciale(query: Modele.Rest.PortefeuilleV1.relationCommerciale.IRelationCommercialeParametres): ng.IPromise<Modele.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    interface ICodeEtablissementQuery {
        codeEtablissement: string;
    }
    interface IRgpdRestService {
        getRgpd(query: ICodeEtablissementQuery): ng.IPromise<Modele.Rest.IRgpd>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    interface ISegmentationMarcheQuery {
        codeEtablissement: string;
        identifiantTiers: number;
    }
    interface ISegmentationMarcheRestService {
        getSegmentationMarche(query: ISegmentationMarcheQuery): ng.IPromise<Modele.Rest.ISegmentationMarche[]>;
    }
}

/***
 * Service concernant le service REST "tiers/v3/recherche"
 * @module PropositionCommerciale.Services.Rest.TiersRecherche
 * @author S0061501 (Sébastien ROUSSEAU)
 */
declare module PropositionCommerciale.Services.Rest.TiersRecherche {
    /**
     * Classe du service
     */
    class TiersRechercheService implements ITiersRechercheService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getTiersRecherche(query: Modele.Rest.ITiersRechercheQuery): ng.IPromise<Modele.Rest.ITiers[]>;
    }
    /**
     * Interface du service
     */
    interface ITiersRechercheService {
        getTiersRecherche(query: Modele.Rest.ITiersRechercheQuery): ng.IPromise<Modele.Rest.ITiers[]>;
    }
}

declare module PropositionCommerciale.Services.Rest {
    interface IUrlProduitQuery {
        codeEtablissement: string;
    }
    interface IUrlProduitRestService {
        getUrlProduit(query: IUrlProduitQuery): ng.IPromise<Modele.Rest.IUrlProduit>;
    }
}

declare module PropositionCommerciale.Services.Utils {
    interface IContexteService {
        /**
         * Données de l'utilisateur authentifié sur le portail MyWay
         */
        authInfo: MyWay.Services.Context.AuthentificationInfo;
        /**
         * Récupération de l'identifiant du client actif
         */
        getIdentifiantPersonne(): ng.IPromise<string>;
        /**
         *  Méthode qui permet l'initialisation des données de la page Gérer les propositions commerciales (tableau des propositions commerciales)
         */
        initialiserApplicationConsulterPropositionCommerciale(): ng.IPromise<void>;
        /**
         *  Méthode qui permet l'initialisation des données des pages de consultation / modification d'une proposition commerciale
         */
        initialiserApplicationGererPropositionCommerciales(): ng.IPromise<void>;
        /**
         * Getter des données de l'utilisateur authentifié sur le portail MyWay
         */
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        /**
         *  Méthode qui permet de savoir si l'application est hébergée sur un serveurs DUA, ou non
         */
        getIsDua(): boolean;
        /**
         *  Liste des statuts possibles d'une proposition
         */
        listeStatut: Array<Modele.Application.IStatut>;
        /**
         *  Récupération des élements constitutifs initiaux d'une proposition dans le référentiel (Produits / Suggestions / Engagement commercial / Signataires)
         */
        getElementsConstitutifsInitiauxDUneProposition(): ng.IPromise<Modele.Rest.ProduitProposable.IParamProduit[]>;
        /**
         *  Liste des propositions au format REST liés à des portefeuilles (mode portefeuille), ou à un client (mode contextualisé),
         *  avec en plus les propositions "Modèle"
         */
        listeProposition: Modele.Rest.IPropositionCommerciale[];
        /**
         *  Liste des périodes (6 mois / 12 mois / 24 mois) utilisées dans la popup d'édition d'un produit
         */
        listePeriode: any[];
        /**
         *  Liste des suggestions provenant du référentiel, au format REST
         */
        listeSuggestionEngagement: Modele.Rest.ProduitProposable.IParamSuggestion[];
        /**
         *  Liste des suggestions provenant du référentiel, au format IHM
         */
        listeSuggestionIhm: Modele.Application.IProduit[];
        /**
         * Liste des portefeuilles sélectionnés (en mode portefeuille)
         */
        listePortefeuillesSelectionnes: Array<Modele.Application.IPortefeuille>;
        /**
         * Signataires
         */
        signataires: Modele.Application.IProduit;
        /**
         *  Engagement commercial
         */
        engagement: Modele.Application.IProduit;
        /**
         *  Informations sur le client (utilisé en mode contextualisé)
         */
        infoClient: Modele.Rest.IInfoClient;
        /**
         *  Booléen pour indiquer  que l'agent sélectionné n'a aucun portefeuille(s)
         */
        aAucunPtf: boolean;
        /**
         *  Méthode pour récupérer le contexte de l'application "Gérer les propositions commerciales"
         */
        getContexte(): ng.IPromise<Modele.Application.IContexte>;
        /**
         * Fonction qui permet d'enregistrer l'identifiant de l'agent sélectionné
         * @param edsVisu
         */
        setEdsVisu(edsVisu: number): any;
        /**
         * Fonction qui permet d'enregistrer l'identifiantPersonne du client sélectionné (mode Portefeuille)
         * @param identifiantPersonne
         */
        setIdentifiantPersonne(identifiantPersonne: string): any;
        /**
         *  Civilité - Prénom - Nom de l'agent choisi (mode portefeuille)
         */
        getDesignation(): string;
        /**
         * Suppression des données stockées dans le contexte du portail MyWay
         * @param listeClesAEffacer
         */
        supprimerContexteDevenuInutile(listeClesAEffacer: Array<string>): ng.IPromise<void>;
        /**
         *  Objet qui contient les données affichées dans le tableau des propositions
         */
        tableauProposition: Tableau.TableauProposition;
        /**
         *  Permet de récupérer le sous-titre à afficher dans le header
         */
        getSousTitre(): string;
        /**
         * Permet de stocker le sous-titre à afficher dans le header
         * @param sousTitre
         */
        setSousTitre(sousTitre: string): void;
        listeUrlProduit: Array<Modele.Rest.IProduit>;
        listeLienIpid: Array<Modele.Rest.ILienIPID>;
        url: string;
        setIdentifiantVisu(identifiantVisu: string): void;
        miseAJourSousTitreDuHeader(idStatutProposition: string): void;
        getModePropositionCommerciale(): ng.IPromise<number>;
        initialiserRgpd(): ng.IPromise<void>;
        rgpd: Modele.Rest.IRgpd;
        estModeContextualise(): boolean;
        estModePorteFeuille(): boolean;
    }
}

declare module PropositionCommerciale.Services.Utils {
    interface IModePropositionServiceUtils {
        avoirMode(identifiantPersonneSiLocationEstLocalhost?: string): ng.IPromise<number>;
        estModeContextualise(): boolean;
        estModePorteFeuille(): boolean;
        mode: number;
    }
}

declare module PropositionCommerciale.Services.Utils {
    interface IGestionTypeJsonServiceUtils {
        /**
         * Test si la propriété est de type 'string'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstString(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'commentaire'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstCommentaire(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'decimal2'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstDecimal2(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'choix'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstChoix(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'periode'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstPeriode(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'arrayList'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstArrayList(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'boolean'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstBoolean(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'multi'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstMulti(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'entier'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstEntier(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'decimal3'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstDecimal3(propriete: Modele.Application.IPropriete): boolean;
        /**
         * Test si la propriété est de type 'informations'
         * Retourne 'True' dans ce cas
         * @param propriete une propriété
         */
        typePropEstInformations(propriete: Modele.Application.IPropriete): boolean;
    }
}

declare module PropositionCommerciale.Services.Utils {
    /**
     * Service d'ouverture des popup
     * @author Kevin GARRIDO S0077481
     */
    interface IPopupService {
        /**
         * Permet d'ouvrir une popup simple d'informations
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         */
        showInfos(titre: string, texte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur
         * @param {erreur} Erreur à afficher
         */
        showErreur(erreur: MyWay.Services.Erreur): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une popup simple affichant un message d'erreur personnalisé
         * @param titre le titre de la popup
         * @param message le message de la popup
         */
        showErreurPersonnalise(titre: string, message: string): ng.IPromise<any>;
        /**
         * Ouverture d'une popup demandant la confirmation d'une action
         * @param {titre} Titre de la popup
         * @param {texte} Texte de la popup
         * @param {validerTexte} Texte du bouton de validation
         * @param {closeTexte} Texte du bouton de fermeture
         */
        showConfirmations(titre: string, texte: string, validerTexte: string, closeTexte: string): ng.IPromise<any>;
        /**
         * Permet d'ouvrir une fenêtre modale. Le template est donné par templateUrl
         * et le controleur de la modale par controllerName, les données exploités par la modale sont transmis via templateDatas
         */
        showModal(templateUrl: string, controllerName: string, templateDatas: any, backdrop?: string): ng.IPromise<any>;
        showModalMd(templateUrl: string, controllerName: string, templateDatas: Modele.Application.IPopupData<any>): ng.IPromise<any>;
    }
}

declare module PropositionCommerciale.Services.Utils {
    interface IProduitServiceUtils {
        commentaireEstVide(produit: Modele.Application.IProduit): boolean;
        rempacerCaractereEspacementParTiret(propriete: Modele.Application.IPropriete, index?: number): any;
    }
}

declare module PropositionCommerciale.Services.Utils {
    interface IPropositionCommercialeServiceUtils {
        buildDate(dateStr: string): Date;
        getStatutIhm(i: string): Modele.Application.IStatut;
        conversionObjetProposition(propositionRest: Modele.Rest.IPropositionCommerciale): Modele.Application.IProposition;
        produitProposableRestToApp(listeProduitRest: Modele.Rest.ProduitProposable.IParamProduit[], listeUrlProduit: Array<Modele.Rest.IProduit>, urlIpid: string): Modele.Application.IUnivers[];
        conversionProduitAppToRest(produitApp: Modele.Application.IProduit, identifiantProposition: number): ng.IPromise<Modele.Rest.Produit.IProduit>;
        conversionSuggestionRestToApp(suggestion: Modele.Rest.ProduitProposable.IParamSuggestion): Modele.Application.IProduit;
        generationNiveauHierarchique(listeNiveauHierarchique: any[]): number;
        formattageChiffre(val: any): string;
        changerLeNombreDePalier(proprietes: Modele.Application.IPropriete[], nombreLigneSouhaite: any): any;
        changerLeNomDeLaPeriode(proprietes: Modele.Application.IPropriete[], periodeSelectionne: string): any;
        initialiserTableauPalierSiNombreNullOuZero(proprietes: Modele.Application.IPropriete[]): any;
        estUnNombrePourNombreDePalier(propriete: Modele.Application.IPropriete): boolean;
        conditionAffichageTableau(propriete: Modele.Application.IPropriete, sousPropriete: Modele.Application.IPropriete): boolean;
        conditionAffichageTableauProprieteSimple(propriete: Modele.Application.IPropriete): boolean;
        avoirNombreLignePalierMin(): number;
        avoirNombreLignePalierMax(): number;
    }
}

declare module PropositionCommerciale.Tableau {
    class TableauProposition implements MyWay.UI.ImwTableOptions {
        private tableService;
        private propositionService;
        private $parse;
        private $filter;
        private tableauColonneOptionsProposition;
        private tableauColonneOptionsRelationEco;
        private tableauColonneOptionsClient;
        private tableauColonneOptionsStatut;
        private tableauColonneOptionsDateCreation;
        private tableauColonneOptionsDateFinValidite;
        private tableauColonneOptionsRedacteurProposition;
        width: "col-md-12";
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modele.Application.IProposition[];
        selectedItems: Modele.Application.IProposition[];
        openSelected: boolean;
        selectionChangeHandler: this;
        templateUrl: string;
        static $inject: string[];
        constructor(tableService: MyWay.UI.MwTableServiceOpefi, propositionService: Services.IPropositionService, $parse: ng.IParseService, $filter: ng.IFilterService, mode?: number, triDesignation?: boolean);
        onSelectionChange(selectedObject: Modele.Application.IProposition): void;
    }
}

declare module PropositionCommerciale.Controleur {
    class ChampAvecOuSansUniteControleur {
        propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils;
        private gestionTypeJsonServiceUtils;
        static $inject: string[];
        private propriete;
        private complementUnite;
        constructor(propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils);
        estSansAucuneUniteEtSansInformationSupplémentaire(): boolean;
        estAvecUneUnitéMaisSansInformationSupplémentaire(): boolean;
        estAvecUneUniteEtAvecInformationSupplémentaire(): boolean;
        avoirUnite(): string;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function champAvecOuSansUnite(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class ChampSelectControleur {
        propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils;
        private gestionTypeJsonServiceUtils;
        static $inject: string[];
        private propriete;
        private proprietes;
        private liste;
        listeFormatter: Object[];
        constructor(propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils);
        typePropEstEntierSimple(): boolean;
        typePropEstEntierPourPalier(): boolean;
        typePropEstDecimal2(): boolean;
        typePropEstDecimal3(): boolean;
        typePropEstString(): boolean;
        typePropEstCommentaire(): boolean;
        estUneProprieteMulti(): boolean;
        typePropEstChoix(): boolean;
        typePropEstPeriode(): boolean;
        changerLeNomDeLaPeriode(): void;
        nombreLignePalierMin(): number;
        nombreLignePalierMax(): any;
        changerLeNombreDePalier(): void;
        /**
         * Fromatter la liste afin qu'elle soit exploitable par l'input
         */
        formatterListe(): void;
        private creerObjectDeLaListe(cle, valeur);
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function champSelect(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class Propriete1ValeurControleur {
        private propositionServiceUtils;
        private gestionTypeJsonServiceUtils;
        private produitServiceUtils;
        static $inject: string[];
        propriete: Modele.Application.IPropriete;
        constructor(propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils, produitServiceUtils: PropositionCommerciale.Services.Utils.IProduitServiceUtils);
        estPasUnNouveauParametre(): boolean;
        estPasUneProprieteMultiEtUnit(): boolean;
        estUneProprieteMulti(): boolean;
        avoirNomChamp(index?: number): any;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function propriete1Valeur(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class Propriete2ValeursControleur {
        private gestionTypeJsonServiceUtils;
        private produitServiceUtils;
        static $inject: string[];
        private propriete;
        listePeriode: {
            key: string;
            value: string;
        }[];
        duTarifStandard: string;
        constructor(gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils, produitServiceUtils: PropositionCommerciale.Services.Utils.IProduitServiceUtils);
        conditionAffichageValeurStringOuNumber(propriete: Modele.Application.IPropriete): boolean;
        typePropEstDecimal2(propriete: Modele.Application.IPropriete): boolean;
        typePropEstDecimal3(propriete: Modele.Application.IPropriete): boolean;
        typePropEstPeriode(propriete: Modele.Application.IPropriete): boolean;
        typePropEstString(propriete: Modele.Application.IPropriete): boolean;
        avoirUnite(unite?: string, complementUnite?: string): string;
        avoirNomChamp(index?: number): any;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function propriete2Valeurs(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class Propriete3ValeursControleur {
        private gestionTypeJsonServiceUtils;
        private produitServiceUtils;
        static $inject: string[];
        private propriete;
        listePeriode: {
            key: string;
            value: string;
        }[];
        constructor(gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils, produitServiceUtils: PropositionCommerciale.Services.Utils.IProduitServiceUtils);
        typePropEstArrayList(): boolean;
        typePropEstEntier(propriete: Modele.Application.IPropriete): boolean;
        typePropEstDecimal2(propriete: Modele.Application.IPropriete): boolean;
        typePropEstPeriode(propriete: Modele.Application.IPropriete): boolean;
        typePropEstString(propriete: Modele.Application.IPropriete): boolean;
        avoirUnite(unite?: string, complementUnite?: string): string;
        avoirNomChamp(index?: number): any;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function propriete3Valeurs(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class ProprieteSupplementaireControleur {
        constructor();
        estUnNouveauParametre(propriete: Modele.Application.IPropriete): boolean;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function proprieteSupplementaire(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class SelecteurDeChampControleur {
        propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils;
        private gestionTypeJsonServiceUtils;
        static $inject: string[];
        private propriete;
        private proprietes;
        periodes: string[];
        constructor(propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, gestionTypeJsonServiceUtils: PropositionCommerciale.Services.Utils.IGestionTypeJsonServiceUtils);
        typePropEstEntierSimple(): boolean;
        typePropEstEntierPourPalier(): boolean;
        typePropEstDecimal2(): boolean;
        typePropEstDecimal3(): boolean;
        typePropEstString(): boolean;
        typePropEstCommentaire(): boolean;
        estUneProprieteMulti(): boolean;
        typePropEstChoix(): boolean;
        typePropEstPeriode(): boolean;
        changerLeNomDeLaPeriode(): void;
        nombreLignePalierMin(): number;
        nombreLignePalierMax(): any;
        changerLeNombreDePalier(): void;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function selecteurDeChamp(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class TableauGeneriqueControleur {
        constructor();
        estPasUnChampEditable(nomColonne: string): boolean;
        estFixeOuMinOperation(nomColonne: string): boolean;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function tableauGenerique(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class DateFinValiditeControleur {
        private propositionService;
        private $scope;
        private contexteService;
        private segmentationMarcheRestService;
        private static CLASS_NAME;
        private static logger;
        dateCreation: string;
        dateFinValiditeStr: string;
        messageDateFinValiditeNonConforme: string;
        nombreJourMax: number;
        validite: boolean;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, $scope: ng.IScope, contexteService: Services.Utils.IContexteService, segmentationMarcheRestService: PropositionCommerciale.Services.Rest.ISegmentationMarcheRestService);
        conditionAffichageMessageErreurFinValidite(isInvalidDateFin: boolean): string;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function editionDateFinValidite(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class EditionSuggestionsControleur {
        private propositionService;
        private $scope;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        suggestions: Modele.Application.IProduit[];
        private suggestionsExistentDeja;
        private engagementExisteDeja;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, $scope: ng.IScope, contexteService: PropositionCommerciale.Services.Utils.IContexteService);
        filtreListeSansEngagementCommercial(suggestionCategorie: Modele.Application.IProduit): boolean;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function editionSuggestions(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class EngagementsCommerciauxControleur {
        private propositionService;
        private static CLASS_NAME;
        private static logger;
        engagementsCommerciauxCommentaire: string;
        engagementExisteDeja: boolean;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService);
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function editionEngagementsCommerciauxCommentaire(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class FiltreRecherchePropositionControleur {
        private propositionService;
        private propositionServiceRest;
        private contexteService;
        private popupService;
        private tableauPropositionService;
        private $scope;
        private static CLASS_NAME;
        private static logger;
        filtreAffichePlusCritere: boolean;
        tableauProposition: Tableau.TableauProposition;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, popupService: Services.Utils.IPopupService, tableauPropositionService: Services.ITableauPropositionService, $scope: ng.IScope);
        mettreFiltreAffichePlusCritereTrue(): void;
        mettreFiltreAffichePlusCritereFalse(): void;
        filtrer(filtre: any): void;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function filtreRechercheProposition(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class EditionNomPropositionControleur {
        private propositionService;
        private propositionServiceRest;
        private contexteService;
        private popupService;
        private static CLASS_NAME;
        private static logger;
        nomPropositionEstEditable: boolean;
        nomNouvelleProposition: string;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, popupService: Services.Utils.IPopupService);
        estCeQueNomPropositionEstEditable(): boolean;
        private mettreNomPropositionEditable();
        private mettreNomPropositionNonEditable();
        modifierNomProposition(): void;
        validerNomProposition(): void;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function editionNomProposition(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class EngagementsEtSuggestionsControleur {
        private propositionService;
        private contexteService;
        private $location;
        private popupService;
        private propositionServiceRest;
        private propositionServiceUtils;
        private static CLASS_NAME;
        private static logger;
        suggestionsCochees: Modele.Application.IProduit[];
        engagementsCommerciauxCommentaire: string;
        dateFinValidite: string;
        listeSuggestions: Modele.Application.IProduit[];
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: ng.ILocationService, popupService: Services.Utils.IPopupService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, propositionServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils);
        private initialisationDesSuggestions();
        private initialisationDateFinValidite();
        formattageHtmlSautDeLigneEngagements(commentaire: string): string;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function engagementsEtSuggestions(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class FooterRecapPropositionControleur {
        private serviceAgentExtended;
        private propositionService;
        private contexteService;
        private $location;
        private lisaApplication;
        private static CLASS_NAME;
        private static logger;
        signataires: Modele.Application.IProduit;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: Services.Utils.IContexteService, $location: ng.ILocationService, lisaApplication: Services.ILisaApplication);
        apercuPDF(): void;
        retourGererProposition(): void;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function footerRecapProposition(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class ProduitsSelectionnesControleur {
        private propositionService;
        private contexteService;
        private $location;
        private popupService;
        private propositionServiceRest;
        private propositionServiceUtils;
        private produitService;
        private $scope;
        private lisaApplication;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, $location: ng.ILocationService, popupService: Services.Utils.IPopupService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, propositionServiceUtils: Services.Utils.IPropositionCommercialeServiceUtils, produitService: PropositionCommerciale.Services.Rest.IProduitService, $scope: ng.IScope, lisaApplication: Services.ILisaApplication);
        conditionAffichageProprieteLibelleValeur(prop: Modele.Application.IPropriete): boolean;
        conditionAffichageTableau(propriete: Modele.Application.IPropriete, sousPropriete: Modele.Application.IPropriete): boolean;
        conditionAffichageTableauProprieteSimple(proprietes: Modele.Application.IPropriete[], propriete: Modele.Application.IPropriete): boolean;
        redirectionPanierProduit(): void;
        modifierProduit(produitAModifier: Modele.Application.IProduit): void;
        copierProduit(produitACopier: Modele.Application.IProduit): void;
        supprimerProduit(produitASupprimer: Modele.Application.IProduit): void;
        modaleReorganiserOrdreProduits(): void;
        estCeQuelisteProduitEstVide(): boolean;
        conditionAffichageProprieteMulti(propriete: Modele.Application.IPropriete): boolean;
        constructionValeurProprieteMulti(proprietes: Modele.Application.IPropriete[]): string;
        private valeurNonVide(val);
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function produitsSelectionnes(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class RecapBlocProprietesControleur {
        private propositionServiceUtils;
        private propositionService;
        static $inject: string[];
        constructor(propositionServiceUtils: PropositionCommerciale.Services.Utils.IPropositionCommercialeServiceUtils, propositionService: PropositionCommerciale.Services.IPropositionService);
        conditionAffichageProprieteMulti(propriete: Modele.Application.IPropriete): boolean;
        constructionValeurProprieteMulti(proprietes: Modele.Application.IPropriete[]): string;
        private valeurNonVide(val);
        conditionDesactivationModifications(): boolean;
        formattageHtmlSautDeLigne(prop: Modele.Application.IPropriete): any;
        formattageHtmlSautDeLigneEngagements(commentaire: string): string;
        conditionAffichageProprieteLibelleValeur(prop: Modele.Application.IPropriete): boolean;
        conditionAffichageTableauProprieteSimple(proprietes: Modele.Application.IPropriete[], propriete: Modele.Application.IPropriete): boolean;
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function mwRecapBlocProprietes(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class SignatairesControleur {
        private propositionService;
        private propositionServiceRest;
        private contexteService;
        private popupService;
        private static CLASS_NAME;
        private static logger;
        signataires: Modele.Application.IProduit;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, propositionServiceRest: Services.Rest.IPropositionCommercialeService, contexteService: PropositionCommerciale.Services.Utils.IContexteService, popupService: Services.Utils.IPopupService);
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function signataires(): ng.IDirective;
}

declare module PropositionCommerciale.Controleur {
    class EditionSignatairesControleur {
        private propositionService;
        private $scope;
        private produitService;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        signataires: Modele.Application.IProduit;
        private signatairesExistentDeja;
        static $inject: string[];
        constructor(propositionService: PropositionCommerciale.Services.IPropositionService, $scope: ng.IScope, produitService: PropositionCommerciale.Services.Rest.IProduitService, contexteService: PropositionCommerciale.Services.Utils.IContexteService);
        /**
         * Ajoute
         */
        private miseAJourSignataire();
        private selectionNomDeFamille(nomMarital, nomFamille);
        private getCivilite(codeCivilite);
    }
}

declare module PropositionCommerciale {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function editionSignataires(): ng.IDirective;
}
