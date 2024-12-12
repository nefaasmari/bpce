
declare module Clients.SyntheseBDR.Constantes.Url {
    const SYNTHESE: string;
    const DETAIL_PRODUIT: string;
    const SYNTHESE_PM_MODE_GRAPHIQUE: string;
    const DETAIL_ADMINISTRATIF: string;
    const SELECTION_PERS_MORALE: string;
    const LOCALHOST: string;
    const DSC: string;
}

declare module Clients.SyntheseBDR.Constantes.Inject {
    module Angular {
        const SCOPE: string;
        const LOCATION: string;
        const MODAL_INSTANCE: string;
        const Q: string;
    }
    module Myway {
        const SERVICE_AGENT: string;
        const NOTIFICATION: string;
        const MODAL_SERVICE: string;
        const CONTEXTE_CLIENT_SERVICE: string;
        const PORTAIL_SERVICE: string;
    }
    module Synthese {
        const SYNTHESE_SERVICE_UTILS: string;
        const SYNTHESE_SERVICE: string;
        const MESSAGE_SERVICE: string;
        const CONTEXTE_SERVICE: string;
        const POPUP_SERVICE: string;
        const DETAIL_SYNTHESE_SERVICE: string;
        const CREATION_DIAGRAMME_SERVICE: string;
        const DEBRANCHEMENT_CONTRAT_SERVICE: string;
        const GERER_VUE_SERVICE: string;
        const COMMUN_DIAGRAMME_SERICE: string;
        const SYNTHESE_PM_SERVICE: string;
        const CREATION_POURCENT_SERVICE: string;
        const CREATION_DONUT_SERVICE: string;
        module Rest {
            const INFORMATION_SERVICE: string;
            const DOSSIER_REGLEMENTAIRE_SERVICE: string;
            const INFOS_ADMINISTRATIVES_SERVICE: string;
            const EQUIPEMENT_SERVICE: string;
            const DONNEE_BILAN_SERVICE: string;
            const CONSULTATION_REVISION_SERVICE: string;
            const DONNEE_FLUX_SERVICE: string;
            const INFOS_RISQUE_ALERTE_SERVICE: string;
            const LISTE_DEBRANCHEMENT_SERVICE: string;
            const TOTAUX_CLIENT_SERVICE: string;
            const ETABLISSEMENT_MYSYS: string;
            const ENCOURS_BDF_SERVICE: string;
        }
    }
}

declare module Clients.SyntheseBDR.Constantes.Lisa {
    const CODE_QUITTER: number;
    module PROCESSUS {
        const CONTACT_CLIENT: string;
        const GERR_CLSS_CLNT: string;
        const SYNTHESE_GROUPE: string;
    }
    module NEXT {
        const DSC: number;
        const SYNTHESE_GROUPE: number;
    }
}

declare module Clients.SyntheseBDR.Constantes.Rest {
    const URL_REST: string;
    const SYNTHESE: string;
    const SYNTHESE_CORPORATE: string;
    const CLASSEUR_CLIENT: string;
    const STRUCTURE: string;
}

declare module Clients.SyntheseBDR.Constantes.TableDelocalisee {
    const FORME_JURIDIQUE: string;
    const NOM_ETABLISSEMENT: string;
}

declare module Clients.SyntheseBDR.Constantes.Util {
    module ModeAffichageMessage {
        const MODE_AJOUT: string;
        const MODE_MODIFIER: string;
        const MODE_LISTE: string;
    }
    module Date {
        const FORMAT_REST: string;
        const FORMAT_FIN_EXERCICE: string;
        const FORMAT_ANGULAR_FILTER: string;
    }
    module Libelle {
        module bouton {
            const BT_MODE_GRAPHIQUE: string;
            const BT_MODE_CLASSIQUE: string;
        }
        module bloc {
            const BLOC_ENCOURS_BDF: string;
            const BLOC_ELEMENT_FINANCIER: string;
            const BLOC_FLUX: string;
            const BLOC_PART_EN_ENGAGEMENT: string;
            const BLOC_ENCOURS_PLACEMENT: string;
        }
    }
    module Autres {
        const ECHELLE_M: string;
        const ECHELLE_K: string;
        const ECHELLE_G: string;
        const ECHELLE_U_EURO: string;
        const ARRAY_NIVEAUX_UNITES: string[];
        const LENGTH_MAX_VALEURS_CHART: number;
    }
    module FamilleConcours {
        const CODE_MOBILISATION_POSTE_CLIENT: string;
        const LIBELLE_MOBILISATION_POSTE_CLIENT: string;
        const CODE_CREDIT_TRESORERIE: string;
        const LIBELLE_CREDIT_TRESORERIE: string;
        const CODE_ENGAGEMENT_PAR_SIGNAT: string;
        const LIBELLE_ENGAGEMENT_PAR_SIGNAT: string;
        const CODE_CREDIT_MLT: string;
        const LIBELLE_CREDIT_MLT: string;
        const CODE_CREDIT_BAIL: string;
        const LIBELLE_CREDIT_BAIL: string;
    }
    module IEncoursPlacement {
        const CODE_FAMILLE_ENCOURS_PLACEMENT: string;
    }
}

declare module Clients.SyntheseBDR {
    var app: ng.IModule;
}

declare module Clients.SyntheseBDR.Constantes.Contexte {
    const IDENTIFIANT_PERSONNE: string;
    const CODE_PAGE_CONN_CLIENT: string;
    const AUTHENTIFICATION_INFO: string;
}

declare module Clients.SyntheseBDR.Controleur {
    class FooterControleur {
        private $location;
        private messageService;
        private syntheseService;
        private gererVueService;
        private portailService;
        private serviceAgentExtended;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor($location: ng.ILocationService, messageService: Services.IMessageService, syntheseService: Services.ISyntheseService, gererVueService: Services.Utils.IGererVueService, portailService: myway.portail.api.PortailService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, contexteService: Services.Utils.IContexteService);
        ouvrirSyntheseGroupe(): void;
        ouvrirMessageService(): void;
        afficherBoutonRetour(): boolean;
        afficherBoutonMessageService(): boolean;
        retour(): void;
        changerMode(): void;
        getLibelletMode(): string;
        private isModeGraphique();
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class HeaderControleur {
        private serviceAgentExtended;
        private syntheseService;
        private contexteService;
        private gererVueService;
        private static CLASS_NAME;
        private static logger;
        donneesHeader: Modele.Application.IHeader;
        choixVue: boolean;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseService: Services.ISyntheseService, contexteService: Services.Utils.IContexteService, gererVueService: Services.Utils.IGererVueService);
        quitter(): void;
        afficherAide(): void;
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class SyntheseControleur {
        private serviceAgentExtended;
        private $scope;
        private syntheseService;
        private detailSyntheseService;
        private gererVueService;
        private synthesePmService;
        private static CLASS_NAME;
        private static logger;
        private isErreurChargement;
        private isChargementAdmin;
        private isChargementProduit;
        private isChargementIndicateurFinancier;
        private isChargementRisque;
        private isChargementFlux;
        private isChargementEncoursBdf;
        private erreurChargementAdmin;
        private erreurChargementProduit;
        private erreurChargementIndicateurFinancier;
        private erreurChargementRisque;
        private erreurChargementFlux;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, syntheseService: Services.ISyntheseService, detailSyntheseService: Services.IDetailSyntheseService, gererVueService: Services.Utils.IGererVueService, synthesePmService: Services.ISynthesePMService);
        initSynthese(): void;
        /**
         * Chargement du bloc administrateur
         * une fois les données récupérées, il faut lancer le chargement du bloc indicateurs financiers qui a besoin du SIREN
         */
        chargerBlocAdmin(): void;
        chargerDateRevisionAnnuelle(): void;
        chargerBlocCompte(): void;
        chargerBlocIndicateurFinancier(): void;
        chargerBlocFlux(): void;
        chargerBlocRisque(): void;
        chargerDonneesBlocEncoursBdf(): void;
        rechargerSynthese(): void;
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class SynthesePmGraphControleur {
        private serviceAgentExtended;
        private $scope;
        private syntheseService;
        private synthesePmService;
        private static CLASS_NAME;
        private static logger;
        titreBlocEncoursBdf: string;
        titreBlocElementFinn: string;
        titreBlocFlux: string;
        titreBlocPartEnEngagement: string;
        titreBlocEncoursPlacement: string;
        private isChargementEncoursBdf;
        private isChargementElementFinn;
        private isChargementFlux;
        private isChargementEncoursPlacement;
        private isErreurChargement;
        private erreurChargementEncoursBdf;
        private erreurChargementFluxGraph;
        private erreurChargementElementFinancier;
        private erreurEncoursDePlacement;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, syntheseService: Services.ISyntheseService, synthesePmService: Services.ISynthesePMService);
        initialiserBlocElementFinn(): void;
        chargerDonneesBlocElementFinn(): void;
        chargerDonneesEquipement(): void;
        chargerDonneesBlocEncoursBdf(): void;
        chargerDonneesBlocFlux(): void;
    }
}

declare module Clients.SyntheseBDR.Enum.Application {
    module Administratif {
        enum TypePersonneEnum {
            CLIENT,
            PROSPECT,
            TIERS,
            CLOTURE,
        }
    }
    enum TypeVueEnum {
        INTERNE,
        CLIENT,
    }
    enum ICompletudeEnum {
        VIDE,
        INCOMPLET,
        COMPLET,
        ALERTE,
        INCONNU,
    }
}

declare module Clients.SyntheseBDR.Enum.Application {
    module Compte {
        enum BordureEnum {
            GRIS,
            ROUGE,
            ORANGE,
            VERT,
        }
        enum MarqueurEnum {
            GRIS,
            ROUGE,
            ORANGE,
            VERT,
        }
        enum CategorieEnum {
            COMPTE = 1,
            CREDIT = 2,
            PLACEMENT = 3,
            SERVICE = 4,
        }
        enum CodiprEnum {
            LIVRET_A,
            LIVRET_B,
            COMPTE_EN_INSTANCE,
            COMPTE_COURANT,
            CAT,
            COMPTE_A_TERME,
            COMPTE_TITRE,
            PARTS_SOCIALES,
            CREDIT_ALIS,
            TRADE,
            FACTUREA,
            DECOUVERT,
            ESCOMPTE,
            CAUTION_GARANTIE,
            EPARGNE_NIE,
            PRODUITS_DERIVES,
            CREDIT_ALIS_SYNCHRO,
            CREDIT_SOCFIM,
            CREDIT_EXTERNES,
            PREVOYANCE_NATIXIS,
            CREDIT_MOYEN_LONG_TERME,
            CREDIT_BAUX,
            OUVERTURE_CREDIT_TRESORERIE,
            ASSURANCE_BP1818,
            CE_NET,
            CARTE,
            LOCATION_LONGUE_DUREE,
            SOL_SMS,
            SOL_CAP,
            LOGI_CASH,
            CREDIT_CEFI,
        }
    }
}

declare module Clients.SyntheseBDR.Enum.Rest {
    module Equipement {
        enum TypeRechercheEnum {
            TOUS,
            PRODUIT,
            CREDIT,
            SERVICE,
            COMPTE_COURANT,
            PLACEMENT,
        }
        enum CodeEtatRechercheEnum {
            TOUS_COMPTE,
            ACTIF,
            CLOS,
        }
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        enum CodeEtatContratEnum {
            OUVERT,
            FERME,
            OUVERTURE,
            EN_CLOTURE,
            INDETERMINE,
        }
    }
}

declare module Clients.SyntheseBDR.Enum.Application {
    module Risque {
        enum BooleanEnum {
            OUI,
            NON,
        }
    }
}

declare module Clients.SyntheseBDR.Filter {
    function customCurrencyFilter($filter: ng.IFilterService): Function;
}

declare module Clients.SyntheseBDR.Filter {
    function customDateFilter($filter: ng.IFilterService): Function;
}

declare module Clients.SyntheseBDR.Filter {
    function customTelephoneFilter($filter: ng.IFilterService): Function;
}

declare module Clients.SyntheseBDR.Tableaux {
    class TableauEntiteTitulaire implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsNumeroEntite: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleEntite: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsComposition: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsUsage: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modele.Application.IEntiteTitulaire>;
        selectedItems: Array<Modele.Application.IEntiteTitulaire>;
        templateUrl: string;
        caption: string;
        constructor();
    }
}

declare module Clients.SyntheseBDR.Tableaux {
    class TableauMessageService implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsDateCreation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDateFin: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleMessage: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCreerPar: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Array<Modele.Application.IMessageService>;
        selectedItems: Array<Modele.Application.IMessageService>;
        templateUrl: string;
        caption: string;
        constructor();
    }
}

declare module Clients.SyntheseBDR.Controleur {
    /**
     * Controleur de l'écran permettant de sélectionner une personne morale
     * @author: S0077481
     */
    class SelectionPersonneMoraleControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        static NOM_CLASSE: string;
        static $inject: string[];
        numeroPersonne: string;
        isChargement: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService);
        accederSelectionSignataire(): void;
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class DetailProduitControleur {
        private $scope;
        private syntheseService;
        private $location;
        private detailSyntheseService;
        private syntheseUtilService;
        private $route;
        private debranchementContratService;
        private static CLASS_NAME;
        private static logger;
        listeEntiteActif: Modele.Application.IProduitParEntite[];
        listeEntiteSolde: Modele.Application.IProduitParEntite[];
        listeServiceActif: Modele.Application.IService[];
        listeServiceSolde: Modele.Application.IService[];
        actif: Modele.Application.IProduitDetail;
        solde: Modele.Application.IProduitDetail;
        isAffichageProduitActif: boolean;
        private chargement;
        private chargementSolde;
        private isErreurChargementActif;
        private isErreurChargementSolde;
        private erreurActif;
        private erreurSolde;
        etatGlobal: string;
        private nombreActif;
        private nombreSolde;
        listeFiltre: Modele.Application.IFiltreProduit[];
        filtreActif: boolean;
        static $inject: string[];
        constructor($scope: ng.IScope, syntheseService: Services.ISyntheseService, $location: ng.ILocationService, detailSyntheseService: Services.IDetailSyntheseService, syntheseUtilService: SyntheseBDR.Services.Utils.ISyntheseServiceUtils, $route: ng.route.IRouteService, debranchementContratService: Services.IDebranchementContratService);
        initDetail(): void;
        /**
         * Filtre les produits en fonction de sa catégorie
         * Si aucun filtre selectionné, revoie la liste tel quel
         * @param listeEntite
         */
        filtrerProduit(listeEntite: Modele.Application.IProduitParEntite[], typeFiltre: Enum.Application.Compte.CategorieEnum, displayed: boolean): Modele.Application.IProduitParEntite[];
        /**
         * Met a jour le compteur en fonction des filtres
         * @param displayed
         * @param liste Pas obligatoire car la liste des services n'est pas rattaché a l'entité
         */
        private miseAJourCompteurCompte(displayed, liste?);
        nombreActifSolde(actif: boolean, ajouter: boolean): void;
        changementFiltre(typeFiltre: Enum.Application.Compte.CategorieEnum, displayed: boolean): void;
        /**
         * Compte le nombre de produits actifs ou soldés selon le deuxième paramètre dans listeProduit
         * Pour obtenir le nombre de soldés, faire taille de la liste - nombre actifs
         * @param listeProduit
         * @param actif
         */
        compterActif(listeProduit: Array<Modele.Application.ICompteGenerique>): number;
        /**
         * Récupère la liste des tous les filtres qui existent
         */
        getListeFiltre(): Modele.Application.IFiltreProduit[];
        rechargerDetail(): void;
        /**
         * Change l'affichage des produits, soit actif soit soldé
         * @param actif
         */
        switchDisplay(actif: boolean): void;
        debranchementService(service: Modele.Application.IService): void;
        affichageDetails(detail: string, codipr: string): boolean;
        libelleDynamiqueDateOuvertureActif(codipr: string): string;
        libelleDynamiqueDateOuvertureClos(codipr: string): string;
        libelleDynamiqueDateFermetureClos(codipr: string): string;
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class ModalMessageServiceControleur {
        private serviceAgentExtended;
        private syntheseService;
        private messageService;
        private $modalInstance;
        private contexteService;
        private informationService;
        private scope;
        private mwNotificationService;
        private static CLASS_NAME;
        private static logger;
        listeMessageService: Modele.Application.IMessageService[];
        tableauEntiteTitulaire: Tableaux.TableauEntiteTitulaire;
        tableauMessageService: Tableaux.TableauMessageService;
        message: string;
        designationLongueAgentInterne: string;
        creePar: string;
        dateCreation: string;
        dateFin: string;
        identifiantChrono: number;
        MODE_AJOUT: string;
        MODE_MODIFIER: string;
        MODE_LISTE: string;
        modeAjout: boolean;
        modeModifier: boolean;
        modeListe: boolean;
        messageAModifier: Modele.Application.IMessageService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseService: Services.ISyntheseService, messageService: Services.IMessageService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, contexteService: Services.Utils.IContexteService, informationService: Services.Rest.InformationService.IInformationServiceRestService, scope: ng.IScope, mwNotificationService: MyWay.UI.IMwNotificationService);
        ajouterMessage(): void;
        /**
         * A
         */
        supprimerMessage(): void;
        modifierMessage(): void;
        getListeEntiteTitulaire(): Array<Modele.Application.IEntiteTitulaire>;
        fermerModal(): void;
        isEmptyListeMessageService(): boolean;
        /**
         *
         * @param modeAffichage
         */
        choixAffichageMessageService(modeAffichage: string): void;
        disabledBoutonAjouter(): boolean;
        disabledBoutonGestion(): boolean;
        disabledBoutonModifier(): boolean;
    }
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrBlocContenuCtrl {
        private serviceAgentExtended;
        private $location;
        private portailService;
        private contexteService;
        private syntheseServiceUtils;
        private static CLASS_NAME;
        private static logger;
        /**
         * ID du bloc
         */
        private id;
        /**
         * url détail
         */
        private urlDetail;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService, portailService: myway.portail.api.PortailService, contexteService: Services.Utils.IContexteService, syntheseServiceUtils: Services.Utils.ISyntheseServiceUtils);
        accesDetail(): void;
        lancerDSC(): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc
     * id : ID du bloc
     * titre : Titre à affiché dans la partie entête du bloc
     * icone : Icône à afficher dans l'entête
     *         Si non renseigné, aucune icône
     * urlDetail : Url du bouton détail
     *             Si non renseigné le bouton Détail n'apparait pas
     * @author: S0077481
     */
    function sbdrBlocContenu(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrAdministratifControleur {
        private serviceAgentExtended;
        private syntheseService;
        private portailService;
        private gererVueService;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        adresseCorrespondance: string;
        adresseSiege: string;
        adresseSelectionnee: string;
        isAdresseCorrespondance: boolean;
        private donnees;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseService: Services.ISyntheseService, portailService: myway.portail.api.PortailService, gererVueService: Services.Utils.IGererVueService, contexteService: Services.Utils.IContexteService);
        lancerContact(): void;
        afficherSegRelationnelle(): boolean;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrBlocAdministratif(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrElementFinancierControleur {
        private serviceAgentExtended;
        private $scope;
        private syntheseService;
        private creationDiagrammeService;
        private communDiagService;
        private static CLASS_NAME;
        private static logger;
        private donneesElementFinn;
        private annee1;
        private annee2;
        erreurBloc: MyWay.Services.Erreur;
        private isChartBuilt;
        affichageGraphique: boolean;
        private static idBloc;
        private static idChart;
        private options;
        private donneesChart;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, syntheseService: Services.ISyntheseService, creationDiagrammeService: Services.ICreationDiagrammeService, communDiagService: Services.ICommunDiagrammeService);
        formatDonneesElementFinn(): Modele.Application.IDonneesD3[];
        buildChart(): void;
        initOptions(): void;
        private getElementChartElementFinancier();
        private checkData();
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc element financier
     * id : ID du bloc
     */
    function sbdrBlocElementFinancier(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrEncoursBdfControleur {
        private serviceAgentExtended;
        private $scope;
        private synthesePmService;
        private creationDiagrammeService;
        private communDiagService;
        private contexteService;
        private $filter;
        private static CLASS_NAME;
        private static logger;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        private isChartBuilt;
        private static idBloc;
        private static idChart;
        private options;
        private donneesChart;
        private afficherSvg;
        private messageInformation;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, synthesePmService: Services.ISynthesePMService, creationDiagrammeService: Services.ICreationDiagrammeService, communDiagService: Services.ICommunDiagrammeService, contexteService: Services.Utils.IContexteService, $filter: ng.IFilterService);
        private getDonneesEtabEtHorsEtab();
        private getDonneesEtabEtTotal();
        private checkEncours(donnees);
        buildChart(): void;
        private initOptions();
        /**
         * Permet de construire l'objet des données pour la face par défaut de la chart des Encours BDF
         * La face à afficher par défaut : montants établissement + montants hors etab
         */
        private getElementChartEncoursBdfEtabEtHorsEtab();
        /**
         * Permet de construire l'objet des données pour la 2éme face de la chart des Encours BDF
         * Face 2 : montants établissement + Total
         * Total : montant etab + montant hors etab
         */
        private getElementChartEncoursBdfEtabEtTotal();
        private getLibelleEtablissementByCode(code);
        checkAffichageDiagramme(): void;
        private getTotalCreditEtab();
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc risques bdf
     * id : ID du bloc
     */
    function sbdrBlocEncoursBdf(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrEncoursPlacementControleur {
        private creationDonutService;
        private synthesePmService;
        private $filter;
        private syntheseService;
        private static CLASS_NAME;
        private static logger;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        dataEncoursPlacement: Modele.Application.IDonneesFluxD3[];
        private static idGraph;
        static $inject: string[];
        constructor(creationDonutService: Services.ICreationDonutService, synthesePmService: Services.ISynthesePMService, $filter: angular.IFilterService, syntheseService: Services.ISyntheseService);
        initDonneesCreation(options: any): void;
        afficherSvg(): boolean;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc encours-placement
     * id : ID du bloc
     */
    function sbdrBlocEncoursPlacement(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrBlocFluxGraphiqueCtrl {
        private creationPourcentService;
        private creationDonutService;
        private syntheseService;
        private $filter;
        private static CLASS_NAME;
        private static logger;
        donnees: Modele.Application.IFlux;
        erreurBloc: MyWay.Services.Erreur;
        private pourcentageFluxDebit;
        private pourcentageFluxCredit;
        affichageDonneesFlux: boolean;
        private couleursDonutDebit;
        private couleursDonutCredit;
        static $inject: string[];
        constructor(creationPourcentService: Services.ICreationPourcentService, creationDonutService: Services.ICreationDonutService, syntheseService: Services.ISyntheseService, $filter: angular.IFilterService);
        initDonneesCreation(): void;
        /**
         * Méthode qui retourne le tableau de données pour les donuts
         * @param annee "annee1" ou "annee2"
         * @param debitOuCredit "debit" ou "credit"
         */
        getDataFluxDebit(debitOuCredit: string, annee: string): Array<Modele.Application.IDonneesFluxD3>;
        getDataFluxCredit(debitOuCredit: string, annee: string): Array<Modele.Application.IDonneesFluxD3>;
        calculerPourcentage(flux: number, totalFlux: number): number;
        getPartEnFlux(debitOuCredit: string, annee: string): number;
        private checkDataFlux();
    }
}

declare module Clients.SyntheseBDR.Directives {
    function sbdrBlocFluxGraphique(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrIndicateurControleur {
        private serviceAgentExtended;
        private syntheseService;
        private syntheseServiceUtils;
        private synthesePmService;
        private static CLASS_NAME;
        private static logger;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        erreurChargementEncoursBdf: MyWay.Services.Erreur;
        annee1: Modele.Application.IColonneElementFinancier;
        annee2: Modele.Application.IColonneElementFinancier;
        private pourcentagePartEngg;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseService: Services.ISyntheseService, syntheseServiceUtils: Services.Utils.ISyntheseServiceUtils, synthesePmService: Services.ISynthesePMService);
        /**
         * Vérifie la présence d'éléments financiers et determine l'affichage ou non de l'onglet
         */
        affichageOngletElementsFinanciers(): boolean;
        /**
         * Vérifie la présence d'une année, n'affiche pas la colonne si elle n'est pas présente
         */
        affichageElementFinancier(annee: Modele.Application.IColonneElementFinancier): boolean;
        affichagePartEngagement(): boolean;
        lancerStructureDSC(): void;
        lancerActiviteRentabiliteDSC(): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrBlocIndicateur(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrPartEnEngagementControleur {
        private creationPourcentService;
        private creationDonutService;
        private synthesePmService;
        private $filter;
        private static CLASS_NAME;
        private static logger;
        private pourcentageParEnEngagement;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        private static idGraph;
        static $inject: string[];
        constructor(creationPourcentService: Services.ICreationPourcentService, creationDonutService: Services.ICreationDonutService, synthesePmService: Services.ISynthesePMService, $filter: angular.IFilterService);
        initDonneesCreation(): void;
        afficherSvg(): boolean;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc part-en-engagement
     * id : ID du bloc
     */
    function sbdrBlocPartEnEngagement(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrProduitControleur {
        private serviceAgentExtended;
        private $scope;
        private syntheseService;
        private $location;
        private syntheseUtilService;
        private debranchementService;
        private static CLASS_NAME;
        private static logger;
        private donnees;
        static $inject: string[];
        isCompteActif: boolean;
        isCreditActif: boolean;
        isPlacementActif: boolean;
        isServiceActif: boolean;
        nombreCompte: number;
        nombreCredit: number;
        nombrePlacement: number;
        nombreService: number;
        listeRegroupe: any;
        private filtreActif;
        isAffichageCompte: boolean;
        listeAffiche: Modele.Application.ICompteGenerique[];
        entiteTitulaire: Modele.Application.IEntiteTitulaire;
        nombreContrat: number;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, syntheseService: Services.ISyntheseService, $location: ng.ILocationService, syntheseUtilService: SyntheseBDR.Services.Utils.ISyntheseServiceUtils, debranchementService: SyntheseBDR.Services.IDebranchementContratService);
        determinerLibelleService(service: Array<Modele.Application.IService>): string;
        regrouperServices(): void;
        /**
         * retourne la taille d'un tableau ou 0 si le tableau n'est pas défini
         * @param tableau
         */
        getLength<T>(tableau: Array<T>): number;
        afficherCompte(): void;
        afficherCredit(): void;
        afficherPlacement(): void;
        afficherService(): void;
        getTitreListe(): string;
        changerListeSelonEntite(entiteTitulaire?: Modele.Application.IEntiteTitulaire): void;
        /**
         * Permet d'aller sur la page des détails, quand on clique sur un service on arrive directement au niveau de celui-ci
         * @param service
         */
        accesDetailProduit(service: Array<Modele.Application.IService>): void;
        afficherFleche(service: Array<Modele.Application.IService>): boolean;
        afficherDetailsCartes(service: Array<Modele.Application.IService>): boolean;
        afficherNumeroCarte(service: Array<Modele.Application.IService>): boolean;
        afficherDetailsReference(service: Array<Modele.Application.IService>): boolean;
        accesDetailProduitFiltre(): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrBlocProduit(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrFluxControleur {
        private serviceAgentExtended;
        private $scope;
        private syntheseService;
        private creationDiagrammeService;
        private communDiagService;
        private gererVueService;
        private static CLASS_NAME;
        private static logger;
        private static idBloc;
        private static idChart;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        private isChartBuilt;
        private options;
        private donneesChart;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, syntheseService: Services.ISyntheseService, creationDiagrammeService: Services.ICreationDiagrammeService, communDiagService: Services.ICommunDiagrammeService, gererVueService: Services.Utils.IGererVueService);
        getDataDebit(): Modele.Application.IDonneesD3[];
        getDataCredit(): Modele.Application.IDonneesD3[];
        /**
         * Permet de construire l'objet des données pour la face par défaut (Flux crédit) de la chart des Flux
         */
        private getElementChartFluxCredit();
        /**
         * Permet de construire l'objet des données pour la 2éme face (Flux débit) de la chart des Flux
         */
        private getElementChartFluxDebit();
        buildChart(): void;
        private initOptions();
        private formatDate(date);
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrBlocFlux(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrRisqueControleur {
        private serviceAgentExtended;
        private $q;
        private syntheseService;
        private portailService;
        private contexteService;
        private static CLASS_NAME;
        private static logger;
        private donnees;
        erreurBloc: MyWay.Services.Erreur;
        labelColor: string;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, syntheseService: Services.ISyntheseService, portailService: myway.portail.api.PortailService, contexteService: Services.Utils.IContexteService);
        private determinerCouleurLabelDRC();
        lancerDRC(): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrBlocRisque(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrCompteControleur {
        private serviceAgentExtended;
        private $scope;
        private debranchementContratService;
        private popupService;
        private notifService;
        private static CLASS_NAME;
        private static logger;
        compte: Modele.Application.ICompteGenerique;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, debranchementContratService: Services.IDebranchementContratService, popupService: Services.Utils.IPopupService, notifService: MyWay.UI.IMwNotificationService);
        debranchementCompte(): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive compte
     * id : ID dela Compte
     */
    function sbdrCompte(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrListeCreditElementaireControleur {
        private serviceAgentExtended;
        private $scope;
        private debranchementService;
        private popupService;
        private notifService;
        private static CLASS_NAME;
        private static logger;
        ouvertureAccordeonCreditElementaires: boolean;
        listeCreditElementaire: Modele.Application.ICreditElementaire[];
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, debranchementService: SyntheseBDR.Services.IDebranchementContratService, popupService: Services.Utils.IPopupService, notifService: MyWay.UI.IMwNotificationService);
        debranchementCreditElementaire(entite: Modele.Application.ICompteGenerique): void;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive liste des crédits élémentaires d'un crédit enveloppe
     * id : ID dela Compte
     */
    function sbdrListeCreditElementaire(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Controleur {
    class SbdrProduitEntiteControleur {
        private serviceAgentExtended;
        private $scope;
        private $location;
        private detailSyntheseService;
        private debranchementContratService;
        private popupService;
        private notifService;
        private static CLASS_NAME;
        private static logger;
        produitEntite: Modele.Application.IProduitParEntite;
        isAffichageActif: boolean;
        ouvertureAccordeonCreditElementaires: boolean;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $location: ng.ILocationService, detailSyntheseService: Services.IDetailSyntheseService, debranchementContratService: Services.IDebranchementContratService, popupService: Services.Utils.IPopupService, notifService: MyWay.UI.IMwNotificationService);
        isDisplayed(produit: Modele.Application.ICompteGenerique): boolean;
        isEntiteAffiche(produitEntite: Modele.Application.IProduitParEntite): boolean;
        contractNumber: number;
        debranchementCompteDetail(entite: Modele.Application.ICompteGenerique): void;
        affichageNumeroCompte(produit: Modele.Application.ICompteGenerique): boolean;
        checkValue(value: any): boolean;
    }
}

declare module Clients.SyntheseBDR.Directives {
    /**
     * Directive bloc administratif
     * id : ID du bloc
     */
    function sbdrProduitEntite(): ng.IDirective;
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IAdministratif {
        codeEtablissement: string;
        numeroPersonne: string;
        raisonSociale: string;
        typePersonne: Enum.Application.Administratif.TypePersonneEnum;
        codeMarche: IMarche;
        siren: string;
        libelleCodeMarche: string;
        adresseCorrespondance: IAdresse;
        adresseSiege: IAdresse;
        contactPrincipal: string;
        email: string;
        fixe: string;
        portable: string;
        opportunites: number;
        segmentationRelationnelle: string;
        formeJuridique: string;
    }
    interface IAdresse {
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
        ligne6: string;
    }
    interface IMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IDonneesD3 {
        title: string;
        donnee1?: number;
        donnee2?: number;
        codeDonnee?: string;
    }
    interface IElementChart {
        /**
         * Identifiant unique de l'élément
         */
        idElement: number;
        texte: string;
        donnees: IDonneesD3[];
        options: IOptionsElementChart;
        legende: IChartLegende;
    }
    interface IChartLegende {
        texte: string;
        couleurs: string[][];
    }
    interface IOptionsElementChart {
        texteBouton: string;
    }
    interface IOptionsChart {
        echelle: string;
        isMultiElementChart: boolean;
        elementChartParDefaut: IElementChart;
        /**
         * L'identifiant de l'élément HTML appelant du SVG container
         */
        idChart: string;
        /**
         * L'identifiant de l'élément HTML global dans lequel on va placer notre élément SVG
         */
        idBlocChart: string;
        animationDuration: number;
        margin: any;
        baseColor: string;
        pressedColor: string;
        baseTextColor: string;
        pressedTextColor: string;
    }
    interface IChartUtil {
        id: any;
        optionsChart: IOptionsChart;
        elementEncours: IElementChart;
        width?: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Application.DonneeDelocalisee {
    interface IDonneeDelocalisee<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    /**
     * Table DU1P
     */
    interface IJuridique {
        codeFamilleCategorieJuridique: string;
        codeFormeJuridiqueProfessionel: string;
        codeCategorieJuridiqueStatut: string;
        categorieJuridiqueEligibleEirl: string;
        libelleCategorieJuridique: string;
    }
    /**
     * Table CU3A
     */
    interface IListeEtablissement {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<IEtablissement>;
    }
    interface IEtablissement {
        CICEOR: string;
        CTCEOG: string;
        COCXBQ: string;
        LBCEOR: string;
        COCEOR: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IEncoursBdf {
        familleEncoursBdf: IFamilleEncoursBdf[];
        /**
         * Part en engagement :
         * Concours Etablissement / (Concours Etablissement + Concours GCE hors Etablissement + Concours hors GCE)
         * La part est exprimée en pourcentage
         */
        partEnEngagement: number;
    }
    interface IFamilleEncoursBdf {
        libelleFamilleConcours: string;
        codeFamilleConcours: string;
        montantConcoursEtablissement: number;
        montantConcoursGCEHorsEtab: number;
        montantConcoursHorsGce: number;
        codeEtablissement: string;
        dateArreteBDF: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface ICompteEtService {
        interditBancaire?: boolean;
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
        listeCompte: Array<ICompteGenerique>;
        listeCredit: Array<ICompteGenerique>;
        listePlacement: Array<ICompteGenerique>;
        listeService: Array<IService>;
    }
    interface IEntiteTitulaire {
        identifiant: string;
        libelleEntite: string;
        adresse: string;
        gerePar: string;
        modeEntite: string;
        usageEntite: string;
        noteBale2: string;
        cotation: string;
    }
    interface ICompteGenerique {
        libelleCompte: string;
        numeroCompte: string;
        numeroDossier: string;
        /**
         * Toujours à EUR
         */
        codeDevise: string;
        /** Renseigné si le compte est en devise autre que EUR */
        codeDeviseNonEuro?: string;
        montantNonEuro: number;
        identifiantProduitService: number;
        identifiantEntiteTitulaire: string;
        actif: boolean;
        etat?: string;
        marquage?: boolean;
        styleMarqueur?: Enum.Application.Compte.MarqueurEnum;
        couleurBordure?: Enum.Application.Compte.BordureEnum;
        ligne1?: string | number;
        ligne2?: string | number;
        codipr: Enum.Application.Compte.CodiprEnum;
        /**
         * Reprend les données avec les noms des paramètres pour pouvoir se débrancher
         */
        parametresLisa: IParametreLisaCompte;
        quotite: number;
        donneesDetail: Array<IDonneesDetailProduit>;
        montantOrigine: number;
        montantDecouvert: number;
        montantGaranti: number;
        montanEcheance: number;
        montantUtilisation: number;
        ancre: string;
        detailsCredit?: IDetailsCredit;
        libelleLigneAlisOrigine?: string;
        listeCreditElementaire?: Array<ICreditElementaire>;
    }
    interface ICreditElementaire {
        identifiantCreditElementaire: string;
        dateEffet: string;
        dateFinEffet: string;
        dateEcheance: string;
        datePremiereEcheance: string;
        nombreEcheance: number;
        periodiciteAmortissement: string;
        montantCapitalRestantDu: number;
        montantOrigine: number;
        montantImpaye: number;
        tauxEffectifGlobal: string;
        chargeMensuelleEndettement: number;
        dureeAjusteeCredit: string;
        tauxInteretPalier: string;
        parametresLisa?: IParametreLisaCompte;
    }
    interface IDetailsCredit {
        /**
         * Taux équivalent rapporté à la période
         */
        tauxPalier: number;
        /**
         * Taux effectif global du crédit (définition légale)
         */
        tauxEffectifGlobal: number;
        /**
         * Montant impayé
         */
        montantImpaye: number;
    }
    interface IDonneesDetailProduit {
        /** Label à afficher dans la vue */
        libelleChamp: string;
        /** valeur du champ */
        value: number | string;
    }
    interface IParametreLisaCompte {
        riceContrat?: string;
        refExterneAgent?: string;
        identifiantPersonne?: string;
        numeroPersonne?: string;
        numeroPersonneIdentifiee?: string;
        identifiantCredit?: string;
        numeroEntiteTitulaire?: string;
        objetParametrage?: {
            [key: string]: string;
        };
        codeProcessus?: string;
        designationEntiteTitulaire?: string;
        ACTION_PTU?: string;
        CLIENT_EXTERNE?: string;
        CODE_ETAB?: string;
        EDS_AG?: string;
        NUM_OFFRE?: string;
        OFFRE?: string;
        codeEtablissement?: string;
        codeGuichetInterbancaire?: string;
        identifiantDuSupportDeCarte?: string;
        numeroDuCompte?: string;
        identifiantClient?: string;
        identifiantProduitService?: string;
        numeroDeOffre?: string;
        identifiantTiers?: string;
        identifiantEPS?: string;
        identifiantEntiteTitulaire?: string;
    }
    interface ICompteCourant extends ICompteGenerique {
        /**
         * Découvert ou dailly
         */
        decouvert?: number;
        courtTerme?: number;
    }
    interface ICompteDepot extends ICompteGenerique {
        decouvert?: number;
    }
    /**
     * Livret A, B...
     * Catégorie Placement
     */
    interface ILivret extends ICompteGenerique {
        solde: number;
    }
    /**
     * Catégorie Placement
     */
    interface ICompteTerme extends ICompteGenerique {
        dateEcheancePlacement: string;
        montantPlacement: number;
    }
    /**
     * Catégorie Placement
     */
    interface IPartsSociales extends ICompteGenerique {
        montantPlacement: number;
    }
    /**
     * Catégorie Placement
     */
    interface ICompteTitre extends ICompteGenerique {
        montantPlacement: number;
    }
    /**
     * Catégorie Crédit
     */
    interface ICreditMoyenLongTerme extends ICompteGenerique {
        capitalRestantDu: number;
        montantEcheance: number;
    }
    interface ICreditBailImmobilier extends ICompteGenerique {
        montantGarantie: number;
        montantFinancement: number;
    }
    interface ICreditBailMobilier extends ICompteGenerique {
        montantGarantie: number;
    }
    interface ILocationLongueDuree extends ICompteGenerique {
        montantGarantie: number;
        montantFinancement: number;
    }
    interface IEPS extends ICompteGenerique {
        dateEcheance: string;
        montantGaranti: number;
    }
    interface IOuvertureCreditTreso extends ICompteGenerique {
        capitalRestantDu: number;
        montantDeLigne: number;
    }
    interface ILigneTresoInteractive extends ICompteGenerique {
        montantUtilise: number;
        dateEcheanceDeLigne: string;
    }
    interface IService {
        nombreDetenu: number;
        referenceCompteService?: string;
        identifiantEntiteTitulaire: string;
        libelleService: string;
        identifiantService: number;
        dateDebut: string;
        dateFin: string;
        actif: boolean;
        numeroCarte: string;
        equipe: boolean;
        codipr: Enum.Application.Compte.CodiprEnum;
        identifiantContrat: string;
        parametresLisa?: IParametreLisaCompte;
        /**
         * Permet d'arriver sur le bon produit/service dans les details
         */
        ancre: string;
        designationCourte: string;
        etatActivation: string;
        riceContrat: string;
        nomCommercial: string;
    }
    /**
     * Modèle de données spécifique à la page détail
     */
    interface IProduitDetail {
        listeProduitEntite: IProduitParEntite[];
        listeService: IService[];
        nombreActif: number;
        nombreSolde: number;
    }
    interface IProduitParEntite {
        donneesEntite: IEntiteTitulaire;
        comptagePlacement: IComptageContrat;
        comptageCompte: IComptageContrat;
        comptageCredit: IComptageContrat;
        listeCompte: Array<ICompteGenerique>;
        listePlacement: Array<ICompteGenerique>;
        listeCredit: Array<ICompteGenerique>;
    }
    interface IComptageContrat {
        nombreActif: number;
        nombreSolde: number;
    }
    interface IFiltreProduit {
        typeFiltre: Enum.Application.Compte.CategorieEnum;
        coche: boolean;
        label: string;
    }
    interface IFamilleEncoursPlacement {
        /**
         * Code famille de regroupement
         */
        codeFamille: string;
        /**
         * Libellé famille :
         * Ecours de crédit, Encours de placement
         */
        libelleFamille: string;
        /**
         * Montant cumul famille
         */
        montantCumulFamille: number;
        listeSousFamilleEncours: Array<ISousFamilleEncours>;
    }
    interface ISousFamilleEncours {
        /**
         * Code de la sous-famille
         */
        code: string;
        /**
         * Libellé de la sous-famille
         */
        libelle: string;
        /**
         * Part exprimé en pourcentage
         */
        part: number;
        /**
         * Montant total des encours dans la sous famille
         */
        montant: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IFlux {
        debit: ITypeFlux;
        credit: ITypeFlux;
        presenceFlux: boolean;
    }
    interface ITypeFlux {
        donneesAnnee1: IAnneeFlux;
        annee1: string;
        donneesAnnee2: IAnneeFlux;
        annee2: string;
        annee2Debut: string;
    }
    interface IAnneeFlux {
        totalFlux: number;
        prelevement: number;
        cheque: number;
        espece: number;
        virement: number;
        pourcentCE: number;
        carte: number;
        escompte: number;
        encaissement: number;
        effetDebit: number;
        fluxReels: number;
    }
    interface IDonneesFluxD3 {
        nom: string;
        pourcentage: number;
        montant?: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IHeader {
        raisonSociale: string;
        identifiant: string;
        suiviPar: string;
        plusInformation: Array<string>;
        cloture: boolean;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IIndicateurFinancier {
        fonctionnement: IFonctionnement;
        elementFinancier: IElementFinancier;
    }
    interface IFonctionnement {
        tresorerie: number;
        credits: number;
        collecte: number;
        impayes: number;
        debitDiffere: number;
        compteDevise: number;
        partEngagement: number;
        dateRevision: string;
    }
    interface IElementFinancier {
        annee1: IColonneElementFinancier;
        annee2: IColonneElementFinancier;
    }
    interface IColonneElementFinancier {
        annee: string;
        chiffreAffaire: number;
        ebe: number;
        resultatNet: number;
        caf: number;
        dettes: number;
        fondsPropres: number;
        effectif: string;
        devise: string;
        unite: string;
        delaiPaiementDettesFiscales?: number;
        ratioPaieFournisseur?: number;
        chargeDecaissable: number;
        ratioDelaiFournisseur?: number;
        ratioDelaiPayement?: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IMessageService {
        dateCreation: string;
        dateFin: string;
        identifiantChrono?: number;
        libelleMessage: string;
        creePar: string;
        provenance: string;
        identifiantEntiteTitulaire: number;
    }
}

declare module Clients.SyntheseBDR.Modele.ProjetLien {
    interface ITree {
        root: INode;
    }
    interface INode extends D3.Layout.GraphNode {
        nodeTitle: string;
        typeNode: TypeNodeEnum;
        children: INode[];
        numeroPersonne?: string;
        numeroTelephone?: string;
        mail?: string;
        childrenNumber?: number;
    }
    enum TypeNodeEnum {
        LARGE = 0,
        SMALL = 1,
        LINK = 2,
    }
    interface IPoint {
        x: number;
        y: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface IRisque {
        noteBale2: string;
        fiben: string;
        creditImpaye: Enum.Application.Risque.BooleanEnum;
        saisieATD: string;
        dirigeantMalNote: Enum.Application.Risque.BooleanEnum;
        competenceFinanciere: string;
        drcComplet: Enum.Application.ICompletudeEnum;
        reclamation: number;
        interditBancaire: boolean;
        dateNotation: string;
        pieceEnAlerte?: number;
        dateRevision: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Application {
    interface ISynthese {
        administratif: IAdministratif;
        indicateur: IIndicateurFinancier;
        risque: IRisque;
        flux: IFlux;
        compteService: ICompteEtService;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IPieceEnAlerte {
        typeJustificatif: string;
        libelleTypeJustificatif: string;
    }
    interface ICompletudeDRC {
        piecesManquantes: string[];
        piecesEnAlerte: IPieceEnAlerte[];
        etatCompletude: string;
        nombrePiecesConcernees: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IConsultationRevision {
        /**
         * date de dernière mise à jour révisionnel annuel
         * Type date au format yyyy-MM-dd
         */
        dateDerniereMiseaJour: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IDonneeBilan {
        /**
         * La liste des bilans
         */
        listeBilan: Array<IBilan>;
    }
    interface IBilan {
        /**
         * Identifiant technique bilan
         */
        identifiantBilan: number;
        /**
         * Désignation liasse fiscale (« French », « 2033 », « 2035 », « 2050 », « 2144 », « 2139 »)
         */
        designationLiasseFiscale: string;
        /**
         * Type origine création bilan (Bilan service, Jedeclare.com, I-Datech, Saisie, Infogreffe)
         */
        typeOrigineCreationBilan: string;
        /**
         * Durée exercice
         */
        dureeExercice: number;
        /**
         * Type exercice (définitif, intermédiaire, prévisionnel)
         */
        typeExercice: string;
        /**
         * Effectif
         */
        effectif: string;
        /**
         * Excédent brut d'exploitation (exprimé en cents d’euros)
         */
        excedentBrutExploitation: number;
        /**
         * Résultat Net (RN) (exprimé en cents d’euros)
         */
        resultatNet: number;
        /**
         * Capacité d'autofinancement (exprimé en cents d’euros)
         */
        capAutoFinance: number;
        /**
         * Dettes bancaires (exprimé en cents d’euros)
         */
        detteBancaire: number;
        /**
         * Ratio délai paiement fournisseurs de type décimal signée
         */
        ratioPaieFournisseur: number;
        /**
         * Code erreur
         */
        codeErreur: number;
        /**
         * Code devise
         */
        codeDevise: string;
        /**
         * Montant total bilan
         */
        montantTotalBilan: number;
        /**
         * Montant chiffre d’affaires net
         */
        montantChiffreAffairesNet: number;
        /**
         * Montant capitaux propres
         */
        montantCapitauxPropres: number;
        /**
         * Montant capital social
         */
        montantCapitalSocial: number;
        /**
         * Charges décaissables
         */
        chargesDecaissables: number;
        /**
         * Délai paiement dettes fiscales
         */
        delaiPaiementDettesFiscales: number;
        /**
         * Annuités
         */
        annuites: number;
        /**
         * Date fin exercice yyyy-mm-dd
         */
        dateFinExercice: string;
        /**
         * Unie du montant
         */
        uniteMontant: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IInfosFlux {
        /**
         * Le code établissement / le numéro de l'établissement / numéro agence CE du client.
         */
        codeEtablissement: string;
        /**
         * Le numéro de personne / identifiant client.
         */
        identifiantPersonne: number;
        /**
         * Le flux pour année N
         */
        fluxAnneeN: IInfosFluxN;
        fluxAnneeNmoins1: IInfosFluxNmoins1;
        periode: IPeriode;
    }
    interface IInfosFluxNmoins1 {
        /**
         * Le montant des prélèvements au débit
         */
        prelevementDebit: number;
        /**
         * Le montant des virements au crédit
         */
        virementCredit: number;
        /**
         * Le montant des virements au débit.
         */
        virementDebit: number;
        /**
         * Le montant des chèques au crédit.
         */
        chequesCredit: number;
        /**
         * Le montant des chèques au débit.
         */
        chequesDebit: number;
        /**
         * Le montant des cartes bancaires au crédit.
         */
        carteBancaireCredit: number;
        /**
         * Le montant des cartes bancaires au débit.
         */
        carteBancaireDebit: number;
        /**
         * Le montant des espèces au crédit.
         */
        especeCredit: number;
        /**
         * Le montant des espèces au débit.
         */
        especeDebit: number;
        /**
         * Le montant effets escompte crédit.
         */
        effetsEscompte: number;
        /**
         * Le montant effets encaissement Cr.
         */
        effetsEncaissement: number;
        /**
         * Le montant des effets au débit.
         */
        effetDebit: number;
        /**
         * Somme des montants de flux créditeurs du mois quelle que soit l'opération
         */
        fluxCrediteurs: number;
        /**
         * Somme des montants des mouvements créditeurs réels du mois
         */
        fluxCrediteursReels: number;
        /**
         * Somme des montants de flux débiteurs du mois quelle que soit l'opération
         */
        fluxDebiteurs: number;
        /**
         * Somme des montants des mouvements débiteurs réels du mois
         */
        fluxDebiteursReels: number;
    }
    interface IInfosFluxN {
        /**
         * Le montant des prélèvements au débit
         */
        prelevementDebit: number;
        /**
         * Le montant des virements au crédit
         */
        virementCredit: number;
        /**
         * Le montant des virements au débit.
         */
        virementDebit: number;
        /**
         * Le montant des chèques au crédit.
         */
        chequesCredit: number;
        /**
         * Le montant des chèques au débit.
         */
        chequesDebit: number;
        /**
         * Le montant des cartes bancaires au crédit.
         */
        carteBancaireCredit: number;
        /**
         * Le montant des cartes bancaires au débit.
         */
        carteBancaireDebit: number;
        /**
         * Le montant des espèces au crédit.
         */
        especeCredit: number;
        /**
         * Le montant des espèces au débit.
         */
        especeDebit: number;
        /**
         * le montant effets escompte crédit.
         */
        effetsEscompte: number;
        /**
         * Le montant effets encaissement Cr
         */
        effetsEncaissement: number;
        /**
         * Le montant des effets au débit.
         */
        effetDebit: number;
        /**
         * Somme des montants de flux créditeurs du mois quelle que soit l'opération
         */
        fluxCrediteurs: number;
        /**
         * Somme des montants des mouvements créditeurs réels du mois
         */
        fluxCrediteursReels: number;
        /**
         * Somme des montants de flux débiteurs du mois quelle que soit l'opération
         */
        fluxDebiteurs: number;
        /**
         * Somme des montants des mouvements débiteurs réels du mois
         */
        fluxDebiteursReels: number;
    }
    interface IIdentifiantFlux {
        /**
         * Le code établissement / le numéro de l'établissement / numéro agence CE du client.
         */
        codeEtablissement: string;
        /**
         * Le numéro de personne / identifiant client.
         */
        identifiantPersonne: number;
    }
    interface IPeriode {
        /**
         * Début de la période N
         */
        debutPeriodeN: string;
        /**
         * Fin de la période N
         */
        finPeriodeN: string;
        /**
         * Début de la période N - 1
         */
        debutPeriodeNMoinsUn: string;
        /**
         * Fin de la période N - 1
         */
        finPeriodeNMoinsUn: string;
    }
    interface IDonneeFlux {
        listeInfosFlux: Array<IInfosFlux>;
        periode: IPeriode;
        infosFlux: IInfosFlux;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IDonneesEncoursBdf {
        listeEncours: Array<IEncours>;
        indicateur: IIndicateur;
    }
    interface IEncours {
        /**
         * Code Banque
         */
        codeEtablissement: string;
        /**
         * Identifiant de la personne
         */
        identifiantPersonne: string;
        /**
         * Numero chrono attribue par le systeme pour les personnes physiques ayant plusieurs activites en tant que professionnel.
         *  Il a la valeur "1" pour les personnes morales.
         */
        numeroChrono: string;
        /**
         * CC   Crédits liés à des créances
         * AF   Affacturage
         * CO   Comptes ordinaires débiteurs
         * CA   Autres crédits court terme
         * AC   Avals et cautions
         * OC   Autorisation sur crédits confirmés
         * OD   Ouverture de crédits documentaires
         * TE   Crédits à l exportation
         * TA   Crédits équipement, habitat et divers
         * BM   Opérations mobilières
         * BI   Opérations immobilières
         */
        categorieConcours: string;
        /**
         * MOBI Mobilisation poste client : regroupe les catégories CC et AF
         * TRES Crédit de trésorerie : regroupe les catégories CA et CO
         * EPS Engagement par signature : regroupe les catégories OC AC et OD
         * MLT Crédit moyne et long terme : regroupe les catégories TA et TE
         * BAIL Crédit bail : regroupe les catégories  BM et BI
         */
        familleConcours: string;
        /**
         * Montant utilisé ou CRD (selon la catégorie) pour les concours de l'établissement
         */
        montantConcoursEtablissement: number;
        /**
         * Montant utilisé ou CRD  (selon la catégorie) pour les concours GCE d'un autre établissement
         */
        montantConcoursGCEHorsEtab: number;
        /**
         * Montant utilisé ou CRD  (selon la catégorie) pour les concours hors établissements GCE
         */
        montantConcoursHorsGce: number;
        /**
         * Date de révision de la BDF
         */
        dateArreteBdf: string;
    }
    interface IIndicateur {
        /**
         * Part en engagement :
         * Concours Etablissement / (Concours Etablissement + Concours GCE hors Etablissement + Concours hors GCE)
         * La part est exprimée en pourcentage
         */
        partEngagement: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IClient {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS.
         */
        identifiantPersonne: string;
        listeContrats: IListeContrats;
        /**
         * La liste des entités titulaires
         */
        listeEntitesTitulaires: IListeEntiteTitulaires;
        listeFamilleEncours: Array<IFamilleEncours>;
    }
    interface IEntiteTitulaire {
        /**
         * La liste de tous les identifiants de contrat de l'entité titulaire.
         */
        identifiantContrat: Array<string>;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire. Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse.
         * Selon les Communautés et les entités titulaires, cette désignation pourra être soit calculée automatiquement par assemblage des civilités et
         * noms patronymiques (exemple: "M et Mme Dupond"), soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
    }
    interface IListeContrats {
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        services: Array<IService>;
        comptesCourants: Array<ICompteCourant>;
        placements: Array<IPlacement>;
        credits: Array<ICredit>;
    }
    interface IContrat {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        codeEtatContrat: Enum.Rest.Equipement.CodeEtatContratEnum;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin d'effet du contrat. Correspond à l'échéance du contrat. Ce n'est pas la date de clôture administrative.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Date ouverture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Date fermeture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateFermeture: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire. Ce libellé constitue la première ligne de l'intitulé bancaire.
         * Elle constitue notamment la ligne 1 de l'adresse. Selon les Communautés et les entités titulaires, cette désignation pourra être soit
         * calculée automatiquement par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"),
         * soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Valeur monétaire du contrat, exprimée en euros.
         *
         * Ce montant n'est pas valorisé pour les services.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits amortissables, ce montant correspond au montant du capital restant du de l'engagement.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         *
         * Pour les comptes Titre, ce montant correspond au montant estimé de la position Valeur. Il s'agit de la quantité multipliée par le cours.
         *
         * Pour les assurances hors épargne, ce montant correspond au montant du contrat calculé à la date de calcul valeur de rachat.
         *
         * Pour l'épargne salariale, ce montant correspond au montant des avoirs investis et valorisés sur les comptes des salariés (y compris l'abondement s'il a été versé et investi).
         */
        valeurProduit: number;
        /**
         * Valeur monétaire du contrat, exprimée en devise de tenue de compte.
         *
         * Ce montant n'est pas valorisé que pour les CDD/CCE et pour les crédits par autorisation.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         */
        valeurProduitDevise: number;
        /**
         * Référence interne de la gestion du compte ou service.
         * Ce champ est composé du code guichet + de la référence du compte ou du service.
         *
         * Exemple : 00400-08100014096
         */
        referenceCompteService: string;
        /**
         * Identifiant de l'offre.
         */
        identifiantOffre: string;
        /**
         * Libellé du forfait dans le cadre d'une offre forfaitaire.
         */
        libelleForfaitOffre: string;
        /**
         * Code famille produit service
         */
        codeFamilleProduitService: string;
        /**
         * le code produit service national
         */
        codeProduitServiceNational: string;
        /**
         * Le montant d'échéance, ajouté pour être affiché dans le détail des produit.
         * ce champ est alimenté par le segment 4I73 et il est équivalent au "montant d'échéance".
         */
        montantEcheance: number;
        /**
         * Le montant garanti, ajouté pour être affiché dans le détail des produit.
         * Ce champ est alimenté par les segments 4I73 et 4I74.
         * Il est équivalent au "montant garanti par la caisse d'épargne".
         */
        montantGaranti: number;
        /**
         * Le montant du découvert autorisé, ajouté pour être affiché dans le détail des produit.
         * ce champ est alimenté par le segment 4I74 et il est équivalent au "montant du plafond autorisé".
         */
        montantDecouvert: number;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: Enum.Application.Compte.CodiprEnum;
        /**
         * Le compte découvert associé au compte 0008 (le compte courant).
         */
        compteDecouvert: IContratDecouvert;
        /**
         * ce champ est le taux nominal.
         * ce champ est alimenté par le segment 4I73
         */
        tauxNominal: number;
        /**
         * Ce champ est alimenté par le  segment  4I73.
         * Il est équivalent au "montant origine crédit" du segment 4I73.
         *
         * Dans le cas des produits de type  LLD (Location Longue durée) et CBM (Crédit-bail Immobilier) , ce montant correspond au montant engagé.
         */
        montantOrigine: number;
        /**
         * Ce champ est alimenté par deux segment, 4I73 et 4I74.
         * La date d'échéance est équivalent à:
         * * "la date de dernière échéance" pour le segment 4I73 (rubrique DD5ECH).
         * * "la date de fin d'effet autorisation" pour le segment 4I74 (rubrique DF5AUT).
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Date début effet autorisation ".
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffetAuto: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Date de première utilisation ".
         *
         * Dans le cas des produits de type  LLD (Location Longue durée) et CBM (Crédit-bail Immobilier) , cette date correspond à la date de la prochaine échéance. Il sera alimenté par la rubrique DF5ECN du segment 4I73.
         * Type date au format yyyy-MM-dd
         */
        dateDepart: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Quotité en risque portée par le garant".
         */
        quotite: number;
        /**
         * Le libellé personnalisé est un  champ qui est alimenté par deux segments de deux QRs différentes:
         *
         * * Pour la QR Z4I00060, ce champ est alimenté par la rubrique 4I72. Il est utilisé comme le libellé personnalisé pour les compte 0008.
         *
         * * Pour la QR P17IN300, ce champ est alimenté par la rubrique NOKRC2.  Il est utilisé comme le numéro de carte SAM CH02 pour les produits de type carte.
         */
        libellePerso: string;
        /**
         * Ce champ représente la désignation courte du produit.
         */
        designationCourte: string;
        /**
         * Ce champ désigne l'état de la carte, il permet de savoir si la carte est activée ou non par le client.
         */
        etatActivation: string;
        /**
         * Ce champs représente le nom commercial P/S.
         */
        nomCommercial: string;
        /**
         * Le  code établissement d’origine.
         * Ce champ est alimenté par la rubrique ID3ETP du segment 4I71, pour les LLD (Location Longue durée) et les CBM (Crédit-bail Immobilier).
         */
        codeEtabOrigine: string;
        /**
         * Le numéro de dossier.
         * Ce champ est alimenté par la rubrique ID3DOS du segment 4I73, pour les LLD (Location Longue durée) et les CBM (Crédit-bail Immobilier).
         */
        numDossier: string;
        /**
         * ce champs représente la date arrêté, il a été ajouté uniquement pour les produits de type LLD (Location Longue durée) et les CBM (Crédit-bail Immobilier).
         *  Il sera alimenté par la rubrique DT5IMA du segment 4I73.
         * Type date au format yyyy-MM-dd
         */
        dateArrete: string;
        detailCredit: ICreditAmortissable;
        detailCreditEnveloppe: IDetailCreditEnveloppe;
    }
    interface IListeEntiteTitulaires {
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        entiteTitulaires: Array<IEntiteTitulaire>;
        detailCreditEnveloppe: IDetailCreditEnveloppe;
    }
    interface IContratDecouvert {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Valeur monétaire du contrat, exprimée en euros.
         *
         * Ce montant n'est pas valorisé pour les services.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits amortissables, ce montant correspond au montant du capital restant du de l'engagement.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         *
         * Pour les comptes Titre, ce montant correspond au montant estimé de la position Valeur. Il s'agit de la quantité multipliée par le cours.
         *
         * Pour les assurances hors épargne, ce montant correspond au montant du contrat calculé à la date de calcul valeur de rachat.
         *
         * Pour l'épargne salariale, ce montant correspond au montant des avoirs investis et valorisés sur les comptes des salariés (y compris l'abondement s'il a été versé et investi).
         */
        valeurProduit: number;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: string;
    }
    interface IDetailCreditEnveloppe {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Catégorie de gestion du produit/service.
         */
        codipr: string;
        /**
         * Identifiant externe de la ligne d'origine dans le progiciel ALIS.
         * Elle est constituée de la référence externe du dossier Alis sur 8 car + n° ligne sur 3 caractères
         */
        identifiantLigneAlisOrigine: string;
        /**
         * Libellé de la ligne saisie dans Alis
         */
        libelleLigneAlisOrigine: string;
        /**
         * Total des versements depuis l'origine d'un prêt (en centimes)
         */
        montantTotalVerse: number;
        /**
         * Montant du crédit restant à verser.
         * Ce montant correspond au montant non débloqué pour un crédit en phase de préfinancement. Il est obtenu par différence entre le montant du prêt et le cumul des versements déjà effectués.
         */
        montantNonVerse: number;
        /**
         * Montant composant une échéance à recouvrer
         */
        montantEcheance: number;
        /**
         * Capital restant dû
         */
        montantCapitalRestantDu: number;
        listCreditElementaire: Array<ICreditElementaire>;
    }
    interface ICreditElementaire {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Catégorie de gestion du produit/service.
         */
        codipr: string;
        /**
         * Identifiant du crédit élémentaire
         */
        identifiantCreditElementaire: string;
        /**
         * Catégorie de gestion du produit/service.
         */
        typeProduitService: string;
        /**
         * Devise
         */
        codeDevise: string;
        /**
         * Situation de gestion à un instant donné d'un contrat de produit
         * '0'        Produit/Service ouvert
         * '1'        Cloture demandée
         * '2'        Cloture en cours
         * '3'        Produit/Service fermé
         * '8'        Produit/Service en cours d'ouverture
         * '9'        Versements non autorisés
         * 'A'        En attente d'activation par le client
         */
        codeEtatProduit: string;
        /**
         * Capital restant dû
         */
        montantCapitalRestantDu: number;
        /**
         * charge mensuelle d'endettement
         */
        chargeMensuelleEndettement: number;
        /**
         * Nombre d'échéances
         */
        nombreEcheance: number;
        /**
         * Date de fin d'effet du contrat
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Somme des montants impayés sur un crédit
         */
        montantImpaye: number;
        /**
         * Code produit dans le catalogue de l'établissement
         */
        codeProduit: string;
        /**
         * Objet du prêt
         */
        codeObjetPret: string;
        /**
         * TEG
         */
        tauxEffectifGlobal: number;
        /**
         * Date d'effet du contrat
         * Type date au format yyyy-MM-dd
         */
        dateEffet: string;
        /**
         * Montant du capital prêté / souscrit avant réductions éventuelles; concerne un crédit élémentaire.
         * Ce montant n'est jamais mis à jour
         */
        montantOrigine: number;
        /**
         * Périodicité de mise en recouvrement des amortissements calculés sur chaque phase.
         * 'A'        Annuelle
         * 'S'        Semestrielle
         * 'T'        Trimestrielle
         * 'B'        Bimestrielle
         * 'M'        Mensuelle
         */
        periodiciteAmortissement: string;
        /**
         * Durée d'un crédit élémentaire après prise en compte des variations de durée dues à un recalcul.
         */
        dureeAjusteeCredit: number;
        /**
         * Date de prélèvement
         * Type date au format yyyy-MM-dd
         */
        dateEcheance: string;
        /**
         * Date de la première échéance
         * Type date au format yyyy-MM-dd
         */
        datePremiereEcheance: string;
        /**
         * Dans un palier, le taux peux être exprimé de manières diverses (différentes valeurs, plage de valeur). La signification de chacune d'entre elles sera différente selon le mode d'expression du taux.
         * Ce taux est le taux équivalent rapporté à la période
         */
        tauxInteretPalier: number;
    }
    interface ICreditAmortissable {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Catégorie de gestion du produit/service.
         */
        codipr: string;
        /**
         * Périodicité de mise en recouvrement des amortissements calculés sur chaque phase.
         */
        periodiciteAmortissement: string;
        /**
         * Taux équivalent rapporté à la période
         */
        tauxPalier: number;
        /**
         * Taux effectif global du crédit (définition légale)
         */
        tauxEffectifGlobal: number;
        /**
         * Montant impayé
         */
        montantImpaye: number;
        /**
         * Nombre d'échéances
         */
        nombreEcheance: number;
        /**
         * Montant de l'utilisation
         */
        montantUtilisation: number;
        /**
         * Charge mensuelle d'endettement
         */
        chargeMensuelleEndettement: number;
    }
    interface IService {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné
         */
        identifiantContrat: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        codeEtatContrat: Enum.Rest.Equipement.CodeEtatContratEnum;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin d'effet du contrat. Correspond à l'échéance du contrat. Ce n'est pas la date de clôture administrative
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Date ouverture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Date fermeture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateFermeture: string;
        /**
         * Ce champ est alimenté par deux segment, 4I73 et 4I74.
         * La date d'échéance est équivalent à:
         * * "la date de dernière échéance" pour le segment 4I73 (rubrique DD5ECH).
         * * "la date de fin d'effet autorisation" pour le segment 4I74 (rubrique DF5AUT).
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire. Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse.
         * Selon les Communautés et les entités titulaires, cette désignation pourra être soit calculée automatiquement par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"),
         * soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Référence interne de la gestion du compte ou service.
         * Ce champ est composé du code guichet + de la référence du compte ou du service.
         *
         * Exemple : 00400-08100014096
         */
        referenceCompteService: string;
        /**
         * Le libellé personnalisé est un  champ qui est alimenté par deux segments de deux QRs différentes:
         *
         * * Pour la QR Z4I00060, ce champ est alimenté par la rubrique 4I72. Il est utilisé comme le libellé personnalisé pour les compte 0008.
         *
         * * Pour la QR P17IN300, ce champ est alimenté par la rubrique NOKRC2.  Il est utilisé comme le numéro de carte SAM CH02 pour les produits de type carte.
         */
        libellePerso: string;
        /**
         * Ce champ représente la désignation courte du produit.
         */
        designationCourte: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: Enum.Application.Compte.CodiprEnum;
        /**
         * Ce champs représente le nom commercial P/S.
         */
        nomCommercial: string;
        /**
         * Identifiant de l'offre.
         */
        identifiantOffre: string;
        /**
         * Libellé du forfait dans le cadre d'une offre forfaitaire.
         */
        libelleForfaitOffre: string;
        /**
         * Ce champ désigne l'état de la carte, il permet de savoir si la carte est activée ou non par le client.
         */
        etatActivation: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         */
        valeurProduit: number;
        /**
         * Code famille produit service
         */
        codeFamilleProduitService: string;
        /**
         * Code produit service national
         */
        codeProduitServiceNational: string;
    }
    interface IPlacement {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné
         */
        identifiantContrat: string;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: string;
        /**
         * Le libellé personnalisé est un  champ qui est alimenté par deux segments de deux QRs différentes:
         *
         * * Pour la QR Z4I00060, ce champ est alimenté par la rubrique 4I72. Il est utilisé comme le libellé personnalisé pour les compte 0008.
         */
        libellePerso: string;
        /**
         * Référence interne de la gestion du compte ou service.
         * Ce champ est composé du code guichet + de la référence du compte ou du service.
         *
         * Exemple : 00400-08100014096
         */
        referenceCompteService: string;
        /**
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         */
        valeurProduit: number;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Ce champ est alimenté par deux segment, 4I73 et 4I74.
         * La date d'échéance est équivalent à:
         * * "la date de dernière échéance" pour le segment 4I73 (rubrique DD5ECH).
         * * "la date de fin d'effet autorisation" pour le segment 4I74 (rubrique DF5AUT).
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Date de fin d'effet du contrat. Correspond à l'échéance du contrat. Ce n'est pas la date de clôture administrative.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Ce champ est alimenté par le  segment  4I73.
         * Il est équivalent au "montant origine crédit" du segment 4I73.
         *
         * Dans le cas des produits de type  LLD (Location Longue durée) et CBM (Crédit-bail Immobilier) , ce montant correspond au montant engagé.
         */
        montantOrigine: number;
        /**
         * Libellé PS
         */
        libelleProduit: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Date de première utilisation ".
         * Type date au format yyyy-MM-dd
         */
        dateDepart: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        codeEtatContrat: string;
        /**
         * Date d'ouverture administrative
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire. Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse. Selon les Communautés et les entités titulaires,
         * cette désignation pourra être soit calculée automatiquement par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"),
         * soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Code famille produit service
         */
        codeFamilleProduitService: string;
        /**
         * Code produit service national
         */
        codeProduitServiceNational: string;
    }
    interface ICredit {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné.
         */
        identifiantContrat: string;
        /**
         * Libellé du PS régional.
         */
        libelleProduit: string;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: string;
        /**
         * Le numéro de dossier.
         * Ce champ est alimenté par la rubrique ID3DOS du segment 4I73, pour les LLD (Location Longue durée) et les CBM (Crédit-bail Immobilier).
         */
        numDossier: string;
        /**
         * Ce champ est alimenté par le  segment  4I73.
         * Il est équivalent au "montant origine crédit" du segment 4I73.
         *
         * Dans le cas des produits de type  LLD (Location Longue durée) et CBM (Crédit-bail Immobilier) , ce montant correspond au montant engagé.
         */
        montantOrigine: number;
        /**
         * Valeur monétaire du contrat, exprimée en euros.
         *
         * Ce montant n'est pas valorisé pour les services.
         *
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         *
         * Pour les crédits amortissables, ce montant correspond au montant du capital restant du de l'engagement.
         *
         * Pour les crédits par autorisation, ce montant correspond au montant utilisé sur l'engagement d'autorisation.
         *
         * Pour les comptes Titre, ce montant correspond au montant estimé de la position Valeur. Il s'agit de la quantité multipliée par le cours.
         *
         * Pour les assurances hors épargne, ce montant correspond au montant du contrat calculé à la date de calcul valeur de rachat.
         */
        valeurProduit: number;
        /**
         * Le montant garanti, ajouté pour être affiché dans le détail des produit.
         * Ce champ est alimenté par les segments 4I73 et 4I74.
         * Il est équivalent au "montant garanti par la caisse d'épargne".
         */
        montantGaranti: number;
        /**
         * Le montant d'échéance, ajouté pour être affiché dans le détail des produit.
         * ce champ est alimenté par le segment 4I73 et il est équivalent au "montant d'échéance".
         */
        montantEcheance: number;
        /**
         * Date ouverture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Date à laquelle le contrat prend effet.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffet: string;
        /**
         * Date de fin d'effet du contrat. Correspond à l'échéance du contrat. Ce n'est pas la date de clôture administrative.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffet: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Date de première utilisation ".
         *
         * Dans le cas des produits de type  LLD (Location Longue durée) et CBM (Crédit-bail Immobilier) , cette date correspond à la date de la prochaine échéance. Il sera alimenté par la rubrique DF5ECN du segment 4I73.
         * Type date au format yyyy-MM-dd
         */
        dateDepart: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Quotité en risque portée par le garant".
         */
        quotite: number;
        /**
         * Code établissement d'origine
         */
        codeEtabOrigine: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * ce champs représente la date arrêté, il a été ajouté uniquement pour les produits de type LLD (Location Longue durée) et les CBM (Crédit-bail Immobilier).
         *  Il sera alimenté par la rubrique DT5IMA du segment 4I7
         * Type date au format yyyy-MM-dd
         */
        dateArrete: string;
        /**
         * Ce champ est alimenté par deux segment, 4I73 et 4I74.
         * La date d'échéance est équivalent à:
         * * "la date de dernière échéance" pour le segment 4I73 (rubrique DD5ECH).
         * * "la date de fin d'effet autorisation" pour le segment 4I74 (rubrique DF5AUT).
         * Type date au format yyyy-MM-dd
         */
        dateFin: string;
        /**
         * Code produit service national
         */
        codeProduitServiceNational: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        codeEtatContrat: string;
        /**
         * Le montant du découvert autorisé, ajouté pour être affiché dans le détail des produit.
         * ce champ est alimenté par le segment 4I74 et il est équivalent au "montant du plafond autorisé".
         */
        montantDecouvert: number;
        detailCredit: ICreditAmortissable;
    }
    interface ICompteCourant {
        /**
         * Identifie un contrat souscrit dans un Etablissement. Cet identifiant doit être unique pour un établissement donné
         */
        identifiantContrat: string;
        /**
         * Numéro d'identification du compte constitué du code banque + code guichet + numéro de compte. Uniquement pour les comptes de dépôt / épargne.
         */
        riceContrat: string;
        /**
         * Ce code indique l'état du contrat.
         *
         * Valeurs : O - Ouvert F - Fermé / clos I - En instance d'ouverture K - En instance de clôture X - Indéterminé
         */
        codeEtatContrat: string;
        /**
         * Identifiant de l'entité titulaire affecté par le système.
         * Doit être unique au sein d'un établissement.
         */
        identifiantEntiteTitulaire: string;
        /**
         * Désignation bancaire de l'entité titulaire. Ce libellé constitue la première ligne de l'intitulé bancaire. Elle constitue notamment la ligne 1 de l'adresse.
         * Selon les Communautés et les entités titulaires, cette désignation pourra être soit calculée automatiquement par assemblage des civilités et noms patronymiques (exemple: "M et Mme Dupond"),
         * soit être choisie spécifiquement par l'entité titulaire lorsque le résultat de l'assemblage précédent ne lui convient pas.
         */
        libelleEntiteTitulaire: string;
        /**
         * Identifiant du code produit service régional.
         */
        identifiantProduit: number;
        /**
         * Libellé PS régional
         */
        libelleProduit: string;
        /**
         * Code de la devise dans laquelle le contrat est libellé.
         */
        codeDeviseContrat: string;
        /**
         * Pour les comptes courants (CDD/CCE) ou produits d'Epargne (hors épargne salariale et comptes Titre), ce montant, signé, correspond à la position instantané du compte.
         */
        valeurProduit: number;
        /**
         * Valeur monétaire du contrat, exprimée en devise de tenue de compte.
         */
        valeurProduitDevise: number;
        /**
         * Référence interne de la gestion du compte ou service.
         * Ce champ est composé du code guichet + de la référence du compte ou du service.
         *
         * Exemple : 00400-08100014096
         */
        referenceCompteService: string;
        /**
         * la famille de produit correspondant à la rubrique codipr.
         * Exemple: 0008 = compte courant entreprise.
         */
        codipr: string;
        compteDecouvert: IContratDecouvert;
        /**
         * Le libellé personnalisé est un  champ qui est alimenté par deux segments de deux QRs différentes:
         *
         * * Pour la QR Z4I00060, ce champ est alimenté par la rubrique 4I72. Il est utilisé comme le libellé personnalisé pour les compte 0008.
         */
        libellePerso: string;
        /**
         * Ce champ est uniquement alimenté par le segment 4I74.
         * Il est équivalent à la "Quotité en risque portée par le garant".
         */
        quotite: number;
        /**
         * Ce champ est alimenté par le  segment  4I73.
         * Il est équivalent au "montant origine crédit" du segment 4I73.
         */
        montantOrigine: number;
        /**
         * Le montant garanti, ajouté pour être affiché dans le détail des produit.
         */
        montantGaranti: number;
        /**
         * Le montant d'échéance, ajouté pour être affiché dans le détail des produit.
         */
        montantEcheance: number;
        /**
         * Date ouverture administrative contrat
         * Type date au format yyyy-MM-dd
         */
        dateOuverture: string;
        /**
         * Identifiant de l'offre
         */
        identifiantOffre: string;
        /**
         * Libellé du forfait dans le cadre d'une offre forfaitaire
         */
        libelleForfaitOffre: string;
        /**
         * Code famille produit service
         */
        codeFamilleProduitService: string;
        /**
         * Code produit service national
         */
        codeProduitServiceNational: string;
    }
    interface IFamilleEncours {
        /**
         * Code famille de regroupement
         */
        codeFamille: string;
        /**
         * Libellé famille :
         * Ecours de crédit, Encours de placement
         */
        libelleFamille: string;
        /**
         * Montant cumul famille
         */
        montantCumulFamille: number;
        listeSousFamilleEncours: Array<ISousFamilleEncours>;
    }
    interface ISousFamilleEncours {
        /**
         * Code de la sous-famille
         */
        code: string;
        /**
         * Libellé de la sous-famille
         */
        libelle: string;
        /**
         * Part exprimé en pourcentage
         */
        part: number;
        /**
         * Montant total des encours dans la sous famille
         */
        montant: number;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IDetailInformationService {
        /**
         * Désignation bancaire courte
         */
        designationBancaireCourte: string;
        /**
         * Mode composition entité titulaire
         */
        modeCompositionET: string;
        /**
         * Code type usage entité titulaire
         */
        codeTypeUsageET: string;
        /**
         * Identifiant personne
         */
        identifiantPersonne: number;
        /**
         * le code établissement
         */
        codeEtablissement: string;
        /**
         * Numéro chrono information
         */
        identifiantChrono: number;
        /**
         * Numéro entité titulaire
         */
        identifiantEntiteTitulaire: number;
        /**
         * Date mise en application information
         * Type date au format yyyy-MM-dd
         */
        dateDebutApplication: string;
        /**
         * Date fin mise en application  information
         * Type date au format yyyy-MM-dd
         */
        dateFinApplication: string;
        /**
         * Libellé 1 information de service
         */
        libelle1: string;
        /**
         * Désignation longue agent intervention
         */
        designationLongueAgentInterne: string;
        /**
         * Code provenance information
         */
        codeProvenance: string;
        /**
         * identifiant élément de structure
         */
        identifiantEDSAgent: number;
    }
    interface IInformationService {
        listeDetailInformationservice: Array<IDetailInformationService>;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
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
        codeMarche: ICodeMarche;
        /**
         * Segmentation Relationnelle
         */
        segmentRelationnelle: ICodeSegment;
        /**
         * interlocuteurPrincipal
         */
        interlocuteurPrincipal: IInterlocuteurPrincipal;
        /**
         * AdresseSiege
         */
        adresses: IGroupeAdresse;
        codeJuridique: string;
        etatPersonne: string;
    }
    interface IInterlocuteurPrincipal {
        /**
         * La Désignation courte
         */
        designationCourte: string;
        /**
         * L'Adresse E-MAIL
         */
        adresseEmail: string;
        /**
         * Le Numéro téléphone 1
         */
        telephoneFixe: string;
        /**
         * Le Numéro téléphone 2
         */
        telephonePortable: string;
    }
    interface IAdresse {
        /**
         * La ligne 2 permet d'indiquer le point de remise ou un complément d'identification du destinataire.
         * La ligne 2 correspond à tout ce qui est situé à l'intérieur d'un bâtiment, cela peut être l'indication d'étage,
         * d'appartement, de porte, de numéro de boite aux lettres, etc.
         */
        ligne2Adresse: string;
        /**
         * La ligne 3 permet d'indiquer le point de remise (informations complémentaires de distribution).
         * La ligne 3 correspond à tout ce qui est à l'extérieur du bâtiment (entrée, bâtiment, bloc, tour etc.)
         */
        ligne3Adresse: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination. Peut comprendre, le numéro dans la voie, type et
         * nom de voie, le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou
         * à un lieu-dit, un service X, une boîte postale ou un numéro de CEDEX.
         */
        ligne4Adresse: string;
        /**
         * La ligne 5 permet d'identifier la destination. Peut comprendre, le nom d'un quartier, d'un lieu-dit,
         * d'un hameau, le nom d'un ensemble immobilier pouvant être assimilé à une commune ou à un lieu-dit et possédant
         * plusieurs voies internes.
         */
        ligne5Adresse: string;
        /**
         * La ligne 6 permet d'identifier la destination. Peut comprendre, le numéro de code postal et
         * nom de la localité, le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX.
         */
        ligne6Adresse: string;
        /**
         * Cette propriété permet de distinguer le type d'adresse.
         */
        typeAdresse: string;
        /**
         * Numéro chrono professionnel
         */
        numPro: number;
        /**
         * Numéro chrono lieu activité
         */
        numLieuAct: number;
    }
    interface ICodeMarche {
        /**
         * Code Marché de la personne.
         * Exemple : MN 101102 / Particuliers : Particuliers non Professionnels MN 102102 / Professionnels : Professions Libérales
         * MN 206101 / Professionnels Privé : Promoteurs
         * MN : code marché
         * BM : segmentation relationnelle
         */
        codeMarche: string;
        /**
         * Libellé de désignation d'un segment clientèle.
         */
        libelleLongCodeMarche: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail. Libellé à caractère confidentiel
         * pour ne pas être interprété par la clientèle.
         */
        libelleCourtCodeMarche: string;
        /**
         * Ce libellé permet de restituer le libellé de la famille du code marché.
         * Exemple :
         * 101 : Particuliers
         */
        libelleFamilleCodeMarche: string;
    }
    interface ICodeSegment {
        /**
         * Code Marché de la personne.
         * Exemple : MN 101102 / Particuliers : Particuliers non Professionnels MN 102102 / Professionnels : Professions Libérales
         * MN 206101 / Professionnels Privé : Promoteurs
         * MN : code marché
         * BM : segmentation relationnelle
         */
        codeSegment: string;
        /**
         * Libellé de désignation d'un segment clientèle.
         */
        libelleLongSegment: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail. Libellé à caractère confidentiel
         * pour ne pas être interprété par la clientèle.
         */
        libelleCourtSegment: string;
        /**
         * Ce libellé permet de restituer le libellé de la famille du code marché.
         * Exemple :
         * 101 : Particuliers
         */
        libelleFamilleSegment: string;
    }
    interface IGroupeAdresse {
        adresseSiege: IAdresse;
        adresseCorrespondance: IAdresse;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IInfosRisqueAlerte {
        /**
         * la note Bale2
         */
        noteBale2: string;
        /**
         * Le champ fibenBDF
         */
        fibenBDF: string;
        /**
         * La saisie ATD
         */
        saisieATD: string;
        /**
         * Ce champ indique si le client est interdit bancaire
         */
        interditBancaire: Enum.Application.Risque.BooleanEnum;
        /**
         * DateNotation
         */
        dateNotation: string;
    }
    interface IIncidentPersonne {
        /**
         * Le code type incident
         */
        codeTypeIncident: Array<string>;
        /**
         * Le code incident
         */
        codeIncident: string;
    }
    interface IInfoGeneral {
        /**
         * la valeur note bale2
         */
        valeurNoteBale2: string;
        /**
         * Le fibenA
         */
        fibenA: string;
        /**
         * Le fibenC
         */
        fibenC: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface IListeDebranchement {
        listeCodipr: Array<ICodipr>;
    }
    interface ICodipr {
        /**
         * Le code processus
         */
        codeProcessus: string;
        /**
         * La liste  des habilitations associées aux codes processus.
         */
        paramLisa: Array<string>;
        /**
         * Ce champ représente la valeur de l'habilitation correspondant à un processus.
         */
        habilitaion: string;
        /**
         * La valeur du code de l'élément codipr.
         */
        code: string;
    }
}

declare module Clients.SyntheseBDR.Modele.Rest {
    interface ITotauxClient {
        /**
         * Correspond au code Banque sous lequel un Etablissement du Groupe BPCE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement. Référence interne MYSYS.
         */
        identifiantPersonne: number;
        /**
         * Total trésorerie (cptes en euros)
         */
        totalTresorerieEuros: number;
        /**
         * Total trésorerie (cptes en devises)
         */
        totalTresorerieDevis: number;
        /**
         * Total crédits d'une personne
         */
        totalCredits: number;
        /**
         * Total collecte d'une personne
         */
        totalCollecte: number;
        /**
         * Total impayés d'une personne
         */
        totalImpayes: number;
        /**
         * Total débit différé d'une personne
         */
        totalDebitDiffere: number;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface ICreationDiagrammeService {
        createChartGeneric(data: Modele.Application.IElementChart[], options: Modele.Application.IOptionsChart): D3._Selection<any>;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface ICreationDonutService {
        creationDonut(data: Array<Modele.Application.IDonneesFluxD3>, id: string, couleurs: Array<string>, options?: any): void;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface IDonneesPourcentageD3 {
        pourcentageUn: string;
        pourcentageDeux?: string;
        legendeUn?: string;
        legendeDeux?: string;
        titre?: string;
        legendeTopUn?: string;
    }
    interface ICreationPourcentService {
        createPourcentage(data: IDonneesPourcentageD3, id: string, options?: any): any;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface ICommunDiagrammeService {
        /**
         * Service permettant de determiner l'échelle d'une liste des données
         * @return un objet string contenant l'échelle : 'M' / 'K'
         */
        getEchelle(listeDonnee: Modele.Application.IDonneesD3[]): string;
        /**
         * Service permettant de reduire le longueur des montants à afficher dans la charte graphique.
         * @param donneesChart contenant les donnees à traiter
         * @param echelle répresente l'echelle en cours : 'U' => Euro, 'K' => K Euro, 'M' => M Euro, 'G' => G Euro
         * @return le nouveau echelle
         */
        reduireLongueurMontants(donneesChart: Modele.Application.IElementChart[], echelle: string): string;
    }
    class CommunDiagrammeService implements ICommunDiagrammeService {
        private serviceAgentExtended;
        private $q;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        getEchelle(listeDonnee: Modele.Application.IDonneesD3[]): string;
        reduireLongueurMontants(donneesChart: Modele.Application.IElementChart[], echelle: string): string;
        private limiterLengthValeurs(donneesChart, lengthMax);
        private convertir(donnees, uniteEncours, uniteCible);
        private determinerOperandeOperation(uniteEncours, uniteCible);
        private determinerMaxValeur(donneesChart);
        private getOperandeSelon(unite);
        private nombreDeNiveauUniteAMonter(valeur);
        private subValeur(val, longueur);
    }
}

declare module Clients.SyntheseBDR.Services {
    class DebranchementContratService implements IDebranchementContratService {
        private serviceAgentExtended;
        private $q;
        private listeDebranchementRestService;
        private portailService;
        private static CLASS_NAME;
        private static logger;
        private listeDebranchement;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, listeDebranchementRestService: Services.Rest.SyntheseCorporate.IListeDebranchementRestService, portailService: myway.portail.api.PortailService);
        consulterDetail(codipr: string, compte?: Modele.Application.ICompteGenerique, service?: Modele.Application.IService): ng.IPromise<boolean>;
        getListeDebranchement(): ng.IPromise<Modele.Rest.IListeDebranchement>;
    }
    interface IDebranchementContratService {
        /**
         * Ouvre le processus correspondant au codipr en paramètre
         * @param codipr
         */
        consulterDetail(codipr: string, compte?: Modele.Application.ICompteGenerique, service?: Modele.Application.IService): ng.IPromise<boolean>;
        getListeDebranchement(): ng.IPromise<Modele.Rest.IListeDebranchement>;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface IDetailSyntheseService {
        isCreditDisplayed: boolean;
        isPlacementDisplayed: boolean;
        isCompteDisplayed: boolean;
        isServiceDisplayed: boolean;
    }
}

declare module Clients.SyntheseBDR.Services {
    class MessageService implements IMessageService {
        private serviceAgentExtended;
        private informationServiceRestService;
        private popupService;
        private static CLASS_NAME;
        private static logger;
        private listeMessageService;
        private alertDoneOnce;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, informationServiceRestService: Services.Rest.InformationService.IInformationServiceRestService, popupService: Services.Utils.IPopupService);
        ouvrirModalMessageService(): void;
        getListeMessagesService(): Array<Modele.Application.IMessageService>;
        ajouterMessageService(informations: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        deleteMessageService(informations: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        modifierMessageService(informations: Modele.Rest.IInformationService, oldMessage: Modele.Application.IMessageService): ng.IPromise<Modele.Rest.IInformationService>;
        ouvrirAuChargement(): void;
        informationServiceRestToMessageServiceApp(listeInformationService: Modele.Rest.IInformationService): void;
        chargerMessageService(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<void>;
    }
    interface IMessageService {
        ouvrirModalMessageService(): void;
        getListeMessagesService(): Array<Modele.Application.IMessageService>;
        ajouterMessageService(informations: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        modifierMessageService(informations: Modele.Rest.IInformationService, oldMessage: Modele.Application.IMessageService): ng.IPromise<Modele.Rest.IInformationService>;
        deleteMessageService(informations: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        ouvrirAuChargement(): void;
        informationServiceRestToMessageServiceApp(listeInformationService: Modele.Rest.IInformationService): void;
        chargerMessageService(identifiantPersonne: string, codeEtablissement: string): ng.IPromise<void>;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface ISynthesePMService {
        chargerEncoursBdf(): ng.IPromise<void>;
        encoursBdf: Modele.Application.IEncoursBdf;
        erreurChargementEncoursBdf: MyWay.Services.Erreur;
    }
}

declare module Clients.SyntheseBDR.Services {
    interface ISyntheseService {
        /**
         * Initialisation de la synthèse du client
         */
        chargerAdministratifEtHeader(): ng.IPromise<void>;
        chargerEquipement(actif?: boolean): ng.IPromise<void>;
        /**
         * La ressource donneeBilan a besoin du numéro de siren
         * A appeller après le chargement du bloc administratif
         */
        chargerIndicateursFinancier(): ng.IPromise<void>;
        chargerRisque(): ng.IPromise<void>;
        chargerFlux(actif?: boolean): ng.IPromise<void>;
        administratif: Modele.Application.IAdministratif;
        equipementActif: Modele.Application.ICompteEtService;
        equipementSolde: Modele.Application.ICompteEtService;
        encoursDePlacement: Modele.Application.IFamilleEncoursPlacement;
        indicateurFinancier: Modele.Application.IIndicateurFinancier;
        risque: Modele.Application.IRisque;
        flux: Modele.Application.IFlux;
        getDonneesHeader(): Modele.Application.IHeader;
        getDonneesDetailProduitSolde(): Modele.Application.IProduitDetail;
        getDonneesDetailProduitActif(): Modele.Application.IProduitDetail;
        chargerElementFinancier(): ng.IPromise<any>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

declare module Clients.SyntheseBDR.Services.Rest {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest {
    /**
     * Classe de fonction utilitaire pour les services de l'application
     * @author S0077481
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

declare module Clients.SyntheseBDR.Services.Utils {
    interface IContexteService {
        paramComptable: MyWay.Services.Context.ParametresComptables;
        authInfo: MyWay.Services.Context.AuthentificationInfo;
        getIdentifiantPersonne(): ng.IPromise<string>;
        initialiserApplication(): ng.IPromise<void>;
        getAuthInfo(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        delocFormeJuridique: Modele.Application.DonneeDelocalisee.IDonneeDelocalisee<Modele.Application.DonneeDelocalisee.IJuridique>;
        delocListeNomEtablissement: Modele.Application.DonneeDelocalisee.IListeEtablissement;
        getIsDua(): boolean;
        getIsPortailMyWay(): boolean;
        choixVue: boolean;
    }
}

declare module Clients.SyntheseBDR.Services.Utils {
    interface IGererVueService {
        setVueCollaborateur(typeVue: boolean): void;
        isVueCollaborateur(): boolean;
        changerVue(isVueCollaborateur: boolean): void;
    }
}

declare module Clients.SyntheseBDR.Services.Utils {
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
    }
}

declare module Clients.SyntheseBDR.Services.Utils {
    interface ISyntheseServiceUtils {
        infosAdminRestToApp(infosAdmin: Modele.Rest.IInfosAdmin, donneesDeloc: Modele.Application.DonneeDelocalisee.IDonneeDelocalisee<Modele.Application.DonneeDelocalisee.IJuridique>): Modele.Application.IAdministratif;
        equipementRestToApp(equipement: Modele.Rest.IClient, listeDebranchement: Modele.Rest.IListeDebranchement): Modele.Application.ICompteEtService;
        infoFluxRestToApp(donneesFlux: Modele.Rest.IDonneeFlux): Modele.Application.IFlux;
        infosRisqueAlerteRestToApp(infosRisqueAlerte: Modele.Rest.IInfosRisqueAlerte): Modele.Application.IRisque;
        donneeBilanRestToIndicateurFinancier(donneesBilanRest: Modele.Rest.IDonneeBilan): Modele.Application.IElementFinancier;
        mapFonctionnement(totauxClient: Modele.Rest.ITotauxClient): Modele.Application.IFonctionnement;
        creerDetailEntite(listeCompte: Array<Modele.Application.ICompteGenerique>, listeCredit: Array<Modele.Application.ICompteGenerique>, listePlacement: Array<Modele.Application.ICompteGenerique>, entite: Modele.Application.IEntiteTitulaire): Modele.Application.IProduitParEntite;
        goToAnchor(ancre: string): void;
        debranchementDSC(CPAGE: string): ng.IPromise<void>;
        donneesEncoursBdf(encoursBdf: Modele.Rest.IDonneesEncoursBdf): Clients.SyntheseBDR.Modele.Application.IEncoursBdf;
        encoursDePlacementRestToApp(equipement: Modele.Rest.IClient): Modele.Application.IFamilleEncoursPlacement;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.DossierReglementaireRestService {
    interface IDossierReglementaireQuery {
        identifiantPorteur: string;
        typeEntiteSupport: string;
    }
    class DossierReglementaireRestService implements IDossierReglementaireRestService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        /** Url de la ressource dossier reglementaire */
        private url();
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        verifierCompletudeDRC(query: IDossierReglementaireQuery): ng.IPromise<Modele.Rest.ICompletudeDRC>;
    }
    interface IDossierReglementaireRestService {
        verifierCompletudeDRC(query: IDossierReglementaireQuery): ng.IPromise<Modele.Rest.ICompletudeDRC>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.InformationService {
    interface IInformationServiceRestQuery {
        identifiantPersonne: number;
        codeEtablissement: string;
    }
    class InformationServiceRestService implements IInformationServiceRestService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        /** Url de la ressource bareme tarification client */
        private url();
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        getInformationService(query: IInformationServiceRestQuery): ng.IPromise<Modele.Rest.IInformationService>;
        postInformationService(information: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        deleteInformationService(information: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
        putInformationService(information: Modele.Rest.IInformationService): ng.IPromise<Modele.Rest.IInformationService>;
    }
    interface IInformationServiceRestService {
        getInformationService(query: IInformationServiceRestQuery): ng.IPromise<Modele.Rest.IInformationService>;
        postInformationService(information: Modele.Rest.IInformationService): any;
        deleteInformationService(information: Modele.Rest.IInformationService): any;
        putInformationService(information: Modele.Rest.IInformationService): any;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IConsultationRevisionQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IConsultationRevisionService {
        getConsultationRevision(query: IConsultationRevisionQuery): ng.IPromise<Modele.Rest.IConsultationRevision>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IDonneesBilanQuery {
        numeroSIREN: string;
    }
    interface IDonneesBilanService {
        getDonneeBilan(query: IDonneesBilanQuery): ng.IPromise<Modele.Rest.IDonneeBilan>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IDonneesFluxQuery {
        codeEtablissement: string;
        identifiantPersonne: number;
    }
    interface IDonneesFluxService {
        getDonneeFlux(query: IDonneesFluxQuery): ng.IPromise<Modele.Rest.IDonneeFlux>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IDonneesEncoursBdfQuery {
        codeEtablissement: string;
        identifiantPersonne: string;
        codeCritereAcces: string;
    }
    interface IEncoursBdfService {
        getDonneeEncoursBdf(query: IDonneesEncoursBdfQuery): ng.IPromise<Modele.Rest.IDonneesEncoursBdf>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IEquipementRestQuery {
        identifiantPersonne: string;
        codeEtablissement: string;
        typeRecherche: Enum.Rest.Equipement.TypeRechercheEnum;
        codeEtatRecherche: Enum.Rest.Equipement.CodeEtatRechercheEnum;
        categorieEncours: boolean;
    }
    interface IEquipementRestService {
        getEquipement(query: IEquipementRestQuery): ng.IPromise<Modele.Rest.IClient>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IInfosAdministrativesRestQuery {
        identifiantPersonne: string;
        codeEtablissement: string;
    }
    interface IInfosAdministrativesRestService {
        getInfosAdministratives(query: IInfosAdministrativesRestQuery): ng.IPromise<Modele.Rest.IInfosAdmin>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IInfosRisqueAlerteQuery {
        codeEtablissement: string;
        identifiantPersonne: string;
    }
    interface IInfosRisqueAlerteRestService {
        getInfosRisqueAlerte(query: IInfosRisqueAlerteQuery): ng.IPromise<Modele.Rest.IInfosRisqueAlerte>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface IListeDebranchementRestService {
        getListeDebranchement(): ng.IPromise<Modele.Rest.IListeDebranchement>;
    }
}

declare module Clients.SyntheseBDR.Services.Rest.SyntheseCorporate {
    interface ITotauxClientQuery {
        codeEtablissement: string;
        identifiantPersonne: string;
    }
    interface ITotauxClientService {
        getTotauxClient(query: ITotauxClientQuery): ng.IPromise<Modele.Rest.ITotauxClient>;
    }
}
