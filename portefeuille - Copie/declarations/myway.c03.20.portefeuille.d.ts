/// <reference path="../_dependances/typings/services/com-interdomaine.d.ts" />
/// <reference path="../_dependances/typings/services/com-eds.d.ts" />
/// <reference path="../_dependances/typings/reference.commun.d.ts" />
/// <reference path="../_dependances/typings/third-party/d3/d3.d.ts" />
/// <reference path="../_dependances/typings/socle-fonctionnel/portail/19.05/myway.portail.lib-portail.d.ts" />
/// <reference path="../_dependances/typings/services/19.05/myway-core-api.d.ts" />
/// <reference path="../_dependances/typings/socle-fonctionnel/libSynchroSynthese/18.03/myway.lib-synchro-synthese-cc.d.ts" />
/// <reference path="../_dependances/typings/services/portail/framework-client-portal.d.ts" />
/// <reference path="../_dependances/typings/services/portail/framework-client-tech.d.ts" />
/// <reference path="../_dependances/typings/services/tables-delocalisees.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/entitetitulaire/v1/recherche.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/entitetitulaire/v2/informationEntiteTitulaire.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/tiers/v1/tiers-identification.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/tiers/v3/tiers-media.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/tiers/v2/tiers-identification.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/tiers/v2/tiers-portefeuille.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/structure/v2/caracteristique-eds.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/structure/v2/poste-fonctionnel-agent.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/structure/v2/etablissement-mysys.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/rechercheapplication.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/application.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/regleApplication.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/elementconfportail.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/elementconfzone.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/recherchefamille.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/recherchesousfamille.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/recherchefavori.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/widget.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/recherchewidget.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/recherchewidgetjourneefo.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/zoneportail.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/sousfamille.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/portailmyway/v1/famille.d.ts" />
/// <reference path="../_dependances/typings/services/ressources/encaisseagenceservice/v1/ctrlDebutJournee.d.ts" />
/// <reference path="../_dependances/typings/socle-fonctionnel/19.11/myway.trans-pdt-entreprise.pdt-entreprise.d.ts" />

declare module Portefeuille {
    let app: any;
}

/**
 * Enumeartions applicatives
 * @module Portefeuille.Enum
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Enum {
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
    /**
     * Enumeration lièe à la directive pf-tuile-indicateur
     */
    module PfTuileIndicateur {
        enum COULEUR {
            AGENDA,
            PNB,
            CA,
            EQUIPEMENTS,
            COLLECT,
            BALE2,
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
     * Enumeration concernant le type de valeur d'indicateur
     */
    module Indicateur {
        enum TYPE {
            DATE,
            NOMBRE,
            MONTANT,
            POURCENT,
            TEXTE,
            BEGACLI,
        }
        enum CODE {
            CLIENTPROSPECT,
            ACTIF,
            EQUIPE,
            LEADER,
            CA_N,
            CA_N_MOINS_1,
            MARCHE,
            POTENTIEL_PROSPECT,
            SEG_RELATIONNELLE,
            SEG_RELATIONNELLE_GROUPE,
            DATE_DERNIER_ENTRETIEN,
            DATE_DERNIER_RDV,
            NB_RDV_ANNEE_EN_COURS,
            NB_RDV_12_MOIS_GLISSANTS,
            DATE_PROCHAIN_RDV,
            NOTE_BALE2,
            PART_ENGAG,
            PROCHAINE_REVISION,
            PNB_3112,
            PNB_N,
            PNB_N_MOINS_1,
            REV_DATE_DERNIERE_REVUE,
            REV_NB_SSFAMILLES_PROPOSE,
            REV_VALIDEE_PAR,
            FLUX_CREDITEURS_N,
            FLUX_CREDITEURS_N_MOINS_1,
            FLUX_DEBITEURS_N,
            FLUX_DEBITEURS_N_MOINS_1,
            NB_AFFAIRES_EN_COURS,
            NB_PROPOSITIONS_EN_COURS,
            NB_APPETENCES,
            SCORE_ACTIVATION,
            SCORE_DEFAILLANCE,
            SCORE_APPETENCE,
            TOP_CC,
            PART_FLUX_CONFIES_CRED,
            PART_FLUX_CONFIES_DEB,
            PREMIER_EQUIPEMENT,
            PREMIER_EQUIPEMENT_TAG,
            PREMIER_EQUIPEMENT_TEXTE,
            OBJECTIF_FLUX,
            ENCOURS_BDF,
            BEGACLI,
        }
        enum CODEPREF {
            CLIENTPROSPECT,
            ACTIF,
            LEADER,
            CA_N,
            CA_N_MOINS_1,
            MARCHE,
            POTENTIEL_PROSPECT,
            SEG_RELATIONNELLE,
            SEG_RELATIONNELLE_GROUPE,
            DATE_DERNIER_ENTRETIEN,
            DATE_DERNIER_RDV,
            NB_RDV_ANNEE_EN_COURS,
            NB_RDV_12_MOIS_GLISSANTS,
            DATE_PROCHAIN_RDV,
            NOTE_BALE2,
            PART_ENGAG,
            PROCHAINE_REVISION,
            PNB_N,
            PNB_N_MOINS_1,
            REV_DATE_DERNIERE_REVUE,
            REV_NB_SSFAMILLES_PROPOSE,
            REV_VALIDEE_PAR,
            FLUX_CREDITEURS_N,
            FLUX_CREDITEURS_N_MOINS_1,
            FLUX_DEBITEURS_N,
            FLUX_DEBITEURS_N_MOINS_1,
            SANS_CONTRAT,
            PNB_3112,
            NB_AFFAIRES_EN_COURS,
            NB_APPETENCES,
            NB_PROPOSITIONS_EN_COURS,
            SCORE_ACTIVATION,
            SCORE_DEFAILLANCE,
            SCORE_APPETENCE,
            TOP_CC,
            PART_FLUX_CONFIES_CRED,
            PART_FLUX_CONFIES_DEB,
            PREMIER_EQUIPEMENT,
            PREMIER_EQUIPEMENT_TAG,
            OBJECTIF_FLUX,
            ENCOURS_BDF,
            BEGACLI,
            PREMIER_EQUIPEMENT_TEXTE,
        }
        enum CODEREST {
            ACTIF,
            PERSONNE_PROTEGEE,
            CA_N,
            CA_N_MOINS_1,
            PNB12MOISGLISSANT,
            PROCHAINE_REVISION,
            NOTE_BALE2,
            PNB_3112,
            PNB_N,
            PNB_N_MOINS_1,
            REVUE,
            FLUX,
            POT_PROS,
            AFFAIRES_EN_COURS,
            SEG_RELATIONNELLE_GROUPE,
            PROPOSITIONS_EN_COURS,
            NB_APPETENCES,
            PART_ENGAG,
            SCORE_ACTIVATION,
            SCORE_DEFAILLANCE,
            SCORE_APPETENCE,
            TOP_CC,
            PART_FLUX_CONFIES_CRED,
            PART_FLUX_CONFIES_DEB,
            PREMIER_EQUIPEMENT,
            PREMIER_EQUIPEMENT_TAG,
            PREMIER_EQUIPEMENT_TEXTE,
            OBJECTIF_FLUX,
            ENCOURS_BDF,
            BEGACLI,
        }
        enum CODEREL {
            CLIENTPROSPECT,
            DATE_DERNIER_ENTRETIEN,
            DATE_DERNIER_RDV,
            DATE_PROCHAIN_RDV,
            NB_RDV_ANNEE_EN_COURS,
            NB_RDV_12_MOIS_GLISSANTS,
            REV_NB_SSFAMILLES_PROPOSE,
            PNB_3112,
            PNB_N,
            PNB_N_MOINS_1,
            POTENTIEL_PROSPECT,
            NB_AFFAIRES_EN_COURS,
            SEG_RELATIONNELLE_GROUPE,
            NB_PROPOSITIONS_EN_COURS,
            NB_APPETENCES,
            PART_ENGAG,
            REV_DATE_DERNIERE_REVUE,
            ENCOURS_BDF,
            BEGACLI,
        }
        enum INTITULE {
            CLIENTPROSPECT,
            ACTIF,
            NON_EQUIPE,
            CA_N,
            CA_N_MOINS_1,
            LEADER,
            MARCHE,
            POTENTIEL_PROSPECT,
            SEG_RELATIONNELLE,
            SEG_RELATIONNELLE_GROUPE,
            DATE_DERNIER_ENTRETIEN,
            DATE_DERNIER_RDV,
            NB_RDV_ANNEE_EN_COURS,
            NB_RDV_12_MOIS_GLISSANTS,
            DATE_PROCHAIN_RDV,
            NOTE_BALE2,
            PART_ENGAG,
            PROCHAINE_REVISION,
            PNB_3112,
            PNB_N,
            PNB_N_MOINS_1,
            REV_DATE_DERNIERE_REVUE,
            REV_NB_SSFAMILLES_PROPOSE,
            REV_VALIDEE_PAR,
            FLUX_CREDITEURS_N,
            FLUX_CREDITEURS_N_MOINS_1,
            FLUX_DEBITEURS_N,
            FLUX_DEBITEURS_N_MOINS_1,
            NB_AFFAIRES_EN_COURS,
            NB_APPETENCES,
            NB_PROPOSITIONS_EN_COURS,
            SCORE_ACTIVATION,
            SCORE_DEFAILLANCE,
            SCORE_APPETENCE,
            TOP_CC,
            PART_FLUX_CONFIES_CRED,
            PART_FLUX_CONFIES_DEB,
            PREMIER_EQUIPEMENT,
            PREMIER_EQUIPEMENT_TAG,
            PREMIER_EQUIPEMENT_TEXTE,
            OBJECTIF_FLUX,
            ENCOURS_BDF,
            BEGACLI,
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
            PROSPECT,
            OPPORTUNITES,
            PROSPECTION,
        }
        enum ICONE {
            DATE_DERNIER_RDV,
            DATE_PROCHAIN_RDV,
            DATE_DERNIER_ENTRETIEN,
            NB_RDV_ANNEE_EN_COURS,
            NB_RDV_12_MOIS_GLISSANTS,
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
            NC,
            ECHUE,
            ENCOURS,
            NONREALISEE,
        }
        enum OPERATEUR {
            ET,
            OU,
        }
    }
    /**
     * Enumération liée à la Revue
     */
    module Revue {
        enum POPUP_REVUE {
            POPUP_CLIENTS_PRODUIT_A_PROPOSER = 0,
            POPUP_CLIENTS_APPETENCE_PRODUIT = 0,
            POPUP_CLIENTS_A_ACTIVER,
            POPUP_CLIENTS_TARIFICATION = 99977,
        }
    }
    /**
     * Enumération type de vue dans la ressource statPortfeuilleEds
     */
    module Rest {
        enum TYPE_VUE_STAT_GLOBAL {
            VUE_GLOBAL,
            VUE_DETAILLE,
            VUE_GLOBAL_ET_DETAILLE,
        }
    }
    /**
     *
     */
    module Vue {
        enum TYPE_VUE {
            VUE_AGENT,
            VUE_EDS,
        }
    }
}

declare module Portefeuille.Constantes.Inject {
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
    module Services {
        const suiviParComplementaireRestService: string;
        const choixEdsService: string;
        const contexteService: string;
        const eventService: string;
        const filtreService: string;
        const begacliService: string;
        const indicateurService: string;
        const lisaApplication: string;
        const listeClientsService: string;
        const popupService: string;
        const portefeuilleService: string;
        const preferencesService: string;
        const rechercheAgentRestService: string;
        const recherchePortefeuilleRestService: string;
        const indicateursRestService: string;
        const rechercheCommercialRestService: string;
        const corporateInformationRestService: string;
        const relationCommercialeRestService: string;
        const clientRestService: string;
        const habilitationService: string;
        const gestionAffectationRestService: string;
        const choixUtilisateurService: string;
        const modalePaniersService: string;
        const pfDragAndDropService: string;
        const mwNotificationService: string;
        const modalService: string;
        const applicationUtils: string;
        const preferenceUtilisateurRestService: string;
        const restStatRentabiliteService: string;
        const restStatRevueService: string;
        const restStatPortefeuilleService: string;
        const restStatFluxMouvementFinancierService: string;
        const statService: string;
        const ihmService: string;
        const rechercheRevueService: string;
        const indicateurFlecheService: string;
        const creationPourcentageService: string;
        const restStatPortefeuilleEdsService: string;
        const mwCsvService: string;
        const edsNiveauInferieurService: string;
        const mockService: string;
    }
    module LibrairieD3 {
        const creationDonutService: string;
        const creationPourcentageService: string;
    }
    module Autres {
        const dataModale: string;
    }
}

/// <reference path="../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la page Clients
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Controleur de l'index
     */
    class ClientsControleur implements MyWay.UI.ISelectionChangeHandler, MyWay.UI.IMwTableHandler {
        private serviceAgentExtended;
        private $scope;
        private $q;
        private $location;
        private $window;
        private listeClientsService;
        private $filter;
        private popupService;
        private $parse;
        private tableService;
        private eventService;
        private lisaApplication;
        private contexteService;
        private indicateurService;
        private filtreService;
        private portefeuilleService;
        private preferencesService;
        private ihmService;
        private portailService;
        private habilitationService;
        private mwCsvService;
        private exportService;
        private $timeout;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        listeClients: Array<Modeles.Application.IClient>;
        listeClientsFiltre: Array<Modeles.Application.IClient>;
        listeClientsAAfficher: Array<Modeles.Application.IClient>;
        listeRelationEcoAAfficher: Array<Modeles.Application.IRelationEconomique>;
        listeRelationEco: Array<Modeles.Application.IRelationEconomique>;
        listeRelationEcoFiltre: Array<Modeles.Application.IRelationEconomique>;
        choixRelationEco: Modeles.Application.IRelationEconomique;
        typeVue: Enum.PageClients.TYPE_VUE;
        chargementEnCours: boolean;
        tableauClients: Modeles.Tableaux.TableauClient;
        tableauRelations: Modeles.Tableaux.TableauRelation;
        messageChoixPtf: string;
        messageAucunPtf: string;
        listeFiltresClients: Array<Modeles.Application.IFiltre>;
        listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        listeFiltres: Array<Modeles.Application.IFiltre>;
        listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>;
        listeIndicateursRelationEcoFiltre: Array<Modeles.Application.IIndicateurFiltre>;
        listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        pageActuelle: number;
        estAvecFiltreColonne: boolean;
        radioBoutonEstVueClient: Enum.PageClients.TYPE_VUE;
        messageLimiteClientsAtteinte: string;
        estHabiliteConsultRevue: boolean;
        estHabiliteMajRevue: boolean;
        panierDefaut: Modeles.Application.IPanier;
        private contexteGererRelation;
        private nombreAppelInitialiserTableaux;
        private etatChargementLong;
        private accessibiliteBoutonVoirProduitsPourClient;
        private relationEcoPourConsultationProduits;
        private isAfficherMessageLimiteClientAtteinte;
        private isAccesDepuisBlocRevue;
        private chaineMaxPourComparaison;
        private dateMin;
        private dateMax;
        private formatDate;
        private exportCSVEnCours;
        private nomFichierExport;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $q: ng.IQService, $location: ng.ILocationService, $window: ng.IWindowService, listeClientsService: Services.Application.IListeClientsService, $filter: ng.IFilterService, popupService: Services.Application.IPopupService, $parse: ng.IParseService, tableService: MyWay.UI.IMwTableServiceOpefi, eventService: Services.Application.IEventService, lisaApplication: Portefeuille.Services.Application.ILisaApplication, contexteService: Services.Application.IContexteService, indicateurService: Services.Application.IIndicateurService, filtreService: Services.Application.IFiltreService, portefeuilleService: Services.Application.IPortefeuilleService, preferencesService: Services.Application.IPreferencesService, ihmService: Services.Application.IIhmService, portailService: myway.portail.api.PortailService, habilitationService: Services.Application.IHabilitationService, mwCsvService: Services.Application.CsvService, exportService: Services.Application.ExportService, $timeout: ng.ITimeoutService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        initialiser(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<void>;
        /**
         *
         * @param typeForcage
         */
        private initApplication(typeForcage);
        private initTableaux(typeForcage);
        private getRelationEconomiques(typeForcage);
        private appliquerFiltresApresDebranchement(filtres);
        private appliquerFiltresRelationApresDebranchement(filtres);
        private majFiltres();
        private getRelationEcoToutes();
        filtrageTableauClient(filtreRelationEco: string): void;
        /**
         * Méthode appelé lors de l'action de sélection d'un client dans le tableau
         * @param {Modeles.Application.IRelation} relation ou {Modeles.Application.IClient} client
         * @returns {void}
         */
        onSelectionChange(selectedObjet: Portefeuille.Modeles.Application.IRelationEconomique | Portefeuille.Modeles.Application.IClient): void;
        /**
         * Methode qui permet d'ouvrir la modale de filtrage
         * @returns {void}
         */
        accederAuxFiltres(): void;
        /**
         * Methode qui permet de mettre à jour un tableau suite à une modification de filtre
         * @param {Array<Modeles.Application.IIndicateurFiltre>} listeIndicateursFiltre
         * @returns {void}
         */
        private majTableauSuiteModificationFiltre(listeIndicateursFiltre);
        /**
         * Methode qui permet d'aller à la page de gestion des indicateurs
         * @returns {void}
         */
        accederAuxIndicateursV2(): void;
        /**
         * Methode qui permet d'ouvrir la modale de forcage
         * @returns {void}
         */
        private accederForcage();
        afficherLigneRelationEco(): boolean;
        afficherTableauRelation(): boolean;
        afficherTableauClients(): boolean;
        estVueClients(): boolean;
        estVueRelationEco(): boolean;
        estAfficheBtnRetour(): boolean;
        /** Indique si le bouton "Effectuer la revue" est visible ou non (true => visible) */
        estAfficheBtnEffectuerRevue(): boolean;
        /**
         * Indique si le bouton consulter les produit est visible
         */
        estAfficheBtnVoirProduits(): boolean;
        estAfficheBtnExporter(): boolean;
        estAfficherBoutonSynthese(): boolean;
        estDisabledBoutonVoirProduits(): boolean;
        /** Indique si le bouton "Effectuer la revue" est actif ou non (true => inactif) */
        estDisabledBtnEffectuerRevue(): boolean;
        getTitreVue(): string;
        getNomPanier(): string;
        /**
         * Méthode pour récupérer le texte sur le ratio client ou relation disponible suite à filtrage
         * @returns {string}
         */
        getTxtRatioFiltrage(): string;
        afficherLigneStatsEtTableau(): boolean;
        /**
         * Méthode pour récupérer le texte sur les index des éléments visibles sur la page du tableau client ou relation
         * @returns {string}
         */
        getTxtEtatPagination(): string;
        /**
         * récupération de la page courante depuis IMwTableHandler
         * @param currentPage
         */
        onPageChange(currentPage: number): void;
        /**
         * Fonction appelé lors du changement du filtre tableau
         * @param search
         */
        /**
         * Fonction appelé lors de l'affichage de la vue relation eco
         */
        affichageVueRelationEco(): void;
        /**
         * Fonction appelé lors de l'affichage de la vue clients
         */
        affichageVueClient(): void;
        /**
         * Methode qui retourne le nombre de clients/relations totales affichés
         * @returns {number}
         */
        nbClientsRelationsTotal(): number;
        /**
         * Methode qui retourne le nombre de clients/relations filtres
         * @returns {number}
         */
        nbClientsRelationsFiltre(): number;
        /**
         * Methode qui permet de savoir si on affiche ou non l'icone de filtre actif
         * @returns {boolean}
         */
        afficherFiltreActif(): boolean;
        /**
         * Methode qui permet de savoir si on est en forcage clients ou prospects
         * @returns {boolean}
         */
        estEnForcageTypeClientsOuProspects(): boolean;
        /**
         * Methode qui permet de savoir si on est en forcage tout
         * @returns {boolean}
         */
        estEnForcageTypeTout(): boolean;
        /**
         * Methode qui permet de revenir sur la vue relation économique
         * @returns {void}
         */
        retourVueRelEco(): void;
        /** Méthode permettant de retourner à la page d'accueil (càd page des stats, des graphes,...) */
        retourAccueil(): void;
        /**
         * Méthode permettant d'effectuer la revue (=> en fait on se débranche vers la saisie de la revue).
         */
        effectuerRevue(): ng.IPromise<void>;
        /**
         * Défini l'identifiant du tableau en cours d'utilisation
         */
        private definirIndentifiantTableauEnCours();
        /**
         * Récuperation des information sur le tableau en cours pour les mettre en contexte
         * @param contexteGererPortefeuille
         */
        private miseAJourContexteAvecTableau(contexteGererPortefeuille);
        /**
         * Récuperation du contexte pour les appliquer au tableau en cours
         * @param contexteGererPortefeuille
         */
        private miseAJourTableauAvecContexte(contexte);
        /**
         * Contruire le contexte
         * @param priseEnCompteSelection Permet de prendre en compte la selection dans le tableau client si celle-ci est selectionne
         */
        private construireContexte(priseEnCompteSelection);
        /**
         * Contruire le contexte de relation : Ajout 11/07/2022
         */
        construireContexteRel(): void;
        /**
         * Récuperation du contexte pour les appliquer au tableau relation
         * @param contexteGererRelation
         */
        miseAJourTableauAvecContexteRel(): void;
        /**
         * typeSynthese :
         * 1 – pour la synthèse part
         * 2 – pour la synthèse PM
         * 3 – pour la synthèse EI
         * ici, pas de particulier
         */
        private getTypeSynthese(codePersonnaliteJuridique);
        accederSyntheseClient(): ng.IPromise<void>;
        exporter(): ng.IPromise<void>;
        private colonneCsvClient;
        /**
         *
         */
        private getColonnesExport();
        private getColonnesReferences(colonnesReferencesNonTraitees);
        private getDonneesExport(nomAgent);
        private gereTriHack(type, valeur);
        private formatBoolean(val);
        formaterDate(date: any): any;
        /**
         * Méthode permettant de consulter les produits (=> en fait on se débranche vers l'affichage de la revue).
         */
        consulterProduits(): ng.IPromise<void>;
        /**
         * Methode qui permet de supprimer tous les filtres
         * @returns {void}
         */
        supprimerTousLesFiltres(): void;
        controlerLimiteClientAtteinte(accesDepuisBlocRevue?: boolean): boolean;
        ouvrirChoixForcage(): ng.IPromise<void>;
        private valoriserMessageLimiteClientsAtteinte(typeForcage);
        afficherModifierChoix(): boolean;
        private alimenterObjetEds();
        /**
         * Méthode appelée à chaque fois qu'un tri est demandé sur une des colonnes d'un tableau
         * @param predicate
         * @param reserve
         */
        onSortChange(predicate: any, reserve: any): any;
        /**
         * Gère le tri des données listeTableaux transmise en paramètre en appliquant systématiquement toute valeur à 'NC' en fin de tri.
         * @param listeTableaux
         * @param proprietes
         * @param triEstDecroissant
         */
        private traiterTriDonneesListeTableaux(listeTableaux, proprietes, triEstDecroissant);
        /**
         * Détermine la valeur de la plus grande chaîne (en termes de croissant - décroissant)
         * @param listeDonnees
         * @param proprietes
         */
        private valoriserChaineMaxPourComparaison(listeDonnees, proprietes);
        /**
         * Balaye les propriétés d'un objet de façon récursive jusqu'à atteindre la dernière propriété (càd la plus profonde) indiquée dans le paramètre proprietesAExplorer
         * @param objet
         * @param proprietesAExplorer
         */
        private determinerChaineMaxRecursif(objet, proprietesAExplorer);
        /**
         * Tri récursif en se basant sur les propriétés données de 2 objets, et le sens du tri demandé.
         * @param objetA
         * @param objetB
         * @param listeProprietes
         * @param indicePropriete
         * @param triEstDecroissant
         */
        private analyserRecursifPourTriUnCritere(objetA, objetB, listeProprietes, indicePropriete, triEstDecroissant);
        /**
         * Détermine la valeur correspondant à l'affichage NC pour une chaîne selon le sens du tri
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite chaîne possible; à savoir "")
         * @param triEstDecroissant
         */
        private valoriserChaineNCSelonSensTri(triEstDecroissant);
        /**
         * Détermine la valeur correspondant à l'affichage NC pour un nombre selon le sens du tri
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite valeur numérique possible; à savoir NEGATIVE_INFINITY)
         * @param triEstDecroissant
         */
        private valoriserNombreNCSelonSensTri(triEstDecroissant);
        /**
         * Détermine la valeur correspondant à l'affichage NC pour une date selon le sens du tri
         * (ex pour un tri croissant la valeur retournée correspondra à la plus petite date possible; à savoir 01/01/1970)
         * @param triEstDecroissant
         */
        private valoriserDateNCSelonSensTri(triEstDecroissant);
        /**
         * Détermine si la valeur initiale de la propriété de type chaîne doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param chaineNC
         */
        private valoriserProprieteChaineViaEquivalentNC(valeurInitialePropriete, chaineNC);
        /**
         * Détermine si la valeur initiale de la propriété de type nombre doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param nombreNC
         */
        private valoriserProprieteNombreViaEquivalentNC(valeurInitialePropriete, nombreNC);
        /**
         * Détermine si la valeur initiale de la propriété de type date doit être écrasée par la valeur correspondant à un affichage NC
         * @param valeurInitialePropriete
         * @param dateNC
         */
        private valoriserProprieteDateViaEquivalentNC(valeurInitialePropriete, dateNC);
        /**
         * Compare 2 nombres et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param nombreA
         * @param nombreB
         * @param nombreComparaison
         */
        private comparerNumberANumberB(nombreA, nombreB, nombreComparaison);
        /**
         * Compare 2 dates et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param dateA
         * @param dateB
         * @param dateComparaison
         */
        private comparerDateADateB(dateA, dateB, dateComparaison);
        /**
         * Compare 2 chaînes et restitue le résultat de cette comparaison (0: A égal à B, 1: A supérieur à B, -1: A inférieur à B)
         * @param chaineA
         * @param chaineB
         */
        private comparerStringAStringB(chaineA, chaineB);
    }
}

/// <reference path="../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la page détail client
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Controleur de l'index
     */
    class DetailClientControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor();
    }
}

/// <reference path="../constantes/inject-constantes.d.ts" />
/**
 * Controleur de l'index
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Controleur de l'index
     */
    class IndexControleur {
        private $scope;
        private $location;
        private $window;
        private lisaApplication;
        private contexteService;
        private portefeuilleService;
        private eventService;
        private popupService;
        private $q;
        private listeClientsService;
        private choixUtilisateurService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        edsChoisi: Modeles.Application.ICaracteristiquesAgent;
        titrePage: string;
        afficherHeader: boolean;
        messageAucunPortefeuille: string;
        chargementEnCours: boolean;
        estHabiliteChoixAgent: boolean;
        estHabiliteChoixEDS: boolean;
        messageErreurTechnique: string;
        aErreurTechnique: boolean;
        ouvertureVoletChoixPortefeuille: boolean;
        listePortefeuillesDropDown: Modeles.Application.IAgent[];
        listePortefeuilles: Modeles.Application.IPortefeuille[];
        estVueGlobalConsolide: boolean;
        static $inject: string[];
        /**
         * Constructeur
         * @param $scope
         * @param serviceAgentExtended
         * @param $location
         * @param lisaApplication
         */
        constructor($scope: ng.IScope, $location: ng.ILocationService, $window: ng.IWindowService, lisaApplication: Portefeuille.Services.Application.ILisaApplication, contexteService: Services.Application.IContexteService, portefeuilleService: Services.Application.IPortefeuilleService, eventService: Services.Application.IEventService, popupService: Services.Application.IPopupService, $q: ng.IQService, listeClientsService: Services.Application.IListeClientsService, choixUtilisateurService: Services.Application.IChoixUtilisateurService);
        /**
         *
         */
        private initialiser();
        /**
         *
         * @param habilitation
         */
        initialiserHabilitationChoixAgent(habilitation: boolean): void;
        /**
         *
         * @param habilitation
         */
        initialiserHabilitationChoixEDS(habilitation: boolean): void;
        /**
         *
         */
        estVueMultiSuiviPar(): boolean;
        /**
         *
         */
        afficherPopupChoixAgent(): void;
        /**
         *
         */
        afficherPopupChoixEds(): void;
        /**
         *
         * @param data
         */
        private afficherPopupEDS(data);
        /**
         *
         * @param edsChoisi
         * @param contexte
         * @param listePtfActifs
         */
        majDonneesDonneesEds(edsChoisi: Modeles.Application.ICaracteristiquesAgent, contexte: Modeles.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void>;
        /**
         *
         * @param portefeuille
         * @param listePtfActifs
         */
        private integrerPortefeuilleActifs(portefeuille, listePtfActifs);
        /**
         * Permet de retourner le sous-titre
         * @return {string}
         */
        getSousTitrePage(): string;
        /**
         * Charger la listePorteFeuilleDropDown
         */
        chargerListePortefeilleDropDown(): void;
        /**
         *
         */
        initListePortefeuilles(): ng.IPromise<void>;
        /**
         * Permet d'ouvrir le choix de portefeuille
         * @return {void}
         */
        ouvrirChoixPortefeuille(): void;
        /**
         * Fermeture de l'application
         */
        quitter(): void;
    }
    /**
     * Interface de la classe IndexControleur
     */
    interface IIndexControleur {
        chargerListePortefeilleDropDown(): void;
        initListePortefeuilles(): ng.IPromise<void>;
    }
}

/// <reference path="../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la page portefeuille
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Controleur de l'index
     */
    class PortefeuilleControleur {
        private serviceAgentExtended;
        private $q;
        private $scope;
        private $location;
        private portefeuilleService;
        private eventService;
        private statService;
        private ihmService;
        private contexteService;
        private habilitationService;
        private creationDonutService;
        private indicateurFlecheService;
        private popupService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        chargementEnCours: boolean;
        estVueMultiSuiviPar: boolean;
        anneeEnCours: number;
        messageChoixPtf: string;
        messageAucunPtf: string;
        messageChoixPtfExpert: string;
        estHabiliteBlocRentabilite: boolean;
        estHabiliteBlocRevue: boolean;
        estHabiliteConsultAffaires: boolean;
        estHabiliteConsultPropositions: boolean;
        chargementRentabEnCours: boolean;
        chargementRdvEnCours: boolean;
        chargementPtfEnCours: boolean;
        chargementRevuePtfEnCours: boolean;
        isInitRentab: boolean;
        messageInitRentab: string;
        isInitRevuePtf: boolean;
        messageInitRevuePtf: string;
        isInitPtf: boolean;
        messageInitPtf: string;
        isInitRdv: boolean;
        messageInitRdv: string;
        configBoutonDetailsPortefeuille: IConfigBoutonPanelNiv2;
        configBoutonDetailsPortefeuilleExpert: IConfigBoutonPanelNiv2;
        configDonutSegRel: Services.LibrairieD3.IConfigDonutD3;
        dataIndicateurClientsPmeEsi: IDataIndicateurBadge;
        dataIndicateurClientsPEetPEES: IDataIndicateurBadge;
        dataIndicateurClientsMEetMEES: IDataIndicateurBadge;
        dataIndicateurClientsGEetGEES: IDataIndicateurBadge;
        dataIndicateurClientsPro: IDataIndicateurBadge;
        dataIndicateurAutres: IDataIndicateurBadge;
        titrePanelRdv: string;
        titrePanelRdv2: string;
        configPourcentageVisites: Services.LibrairieD3.IConfigPourcentageD3;
        dataIndicateurNbRdvProspectsRealisesAnneeEnCours: IDataIndicateurBadge;
        dataIndicateurNbRdvProspectsVusAnneeEnCours: IDataIndicateurBadge;
        dataIndicateurNbRelationsEconomiquesAnneeEnCours: IDataIndicateurBadge;
        dataIndicateurNbRdvClientsRealisesAnneeEnCours: IDataIndicateurBadge;
        dataIndicateurNbRdvRealisesAnneeEnCours: IDataIndicateurBadge;
        configBoutonAccederRevuePortefeuille: IConfigBoutonPanelNiv2;
        configPourcentagePortefeuilleRealise: Services.LibrairieD3.IConfigPourcentageD3;
        dataIndicateurNbProduitsAEquiper: IDataIndicateurBadge;
        dataIndicateurNbProduitsAppetence: IDataIndicateurBadge;
        dataIndicateurNbProduitsEquipes: IDataIndicateurBadge;
        dataIndicateurNbClientsAActiver: IDataIndicateurBadge;
        dataIndicateurNbClientsARenegocier: IDataIndicateurBadge;
        dataIndicateurNbPropositionsEnCours: IDataIndicateurBadge;
        dataIndicateurNbAffairesEnCours: IDataIndicateurBadge;
        configDiagrammeColonnePortefeuille: Array<Modeles.Application.IDataIndicateurColonne>;
        afficheAppetencesProduits: boolean;
        dataIndicateurAnneePrecedente: IDataIndicateurBadge;
        configDiagrammeColonneRentabilite: Array<Modeles.Application.IDataIndicateurColonne>;
        configPourcentageRentabilite: Services.LibrairieD3.IConfigPourcentageD3;
        configFlecheRentabilite: Modeles.Application.IConfigIndicateurFleche;
        afficheErreurPoidsPNB: boolean;
        estActifBlocFlux: boolean;
        private isInitFlux;
        private messageInitFlux;
        private chargementFluxEnCours;
        private configFlecheFluxCrediteurs;
        private configFlecheFluxDebiteurs;
        private configDiagrammeColonneFluxCrediteurs;
        private configDiagrammeColonneFluxDebiteurs;
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $scope: ng.IScope, $location: ng.ILocationService, portefeuilleService: Services.Application.IPortefeuilleService, eventService: Services.Application.IEventService, statService: Services.Application.IStatsService, ihmService: Services.Application.IIhmService, contexteService: Services.Application.IContexteService, habilitationService: Services.Application.IHabilitationService, creationDonutService: Services.LibrairieD3.ICreationDonutService, indicateurFlecheService: Services.Application.IIndicateurFlecheService, popupService: Services.Application.IPopupService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param etat
         */
        setEstVueMultiSuiviPar(etat: boolean): void;
        /**
         * Méthode pour initialiser les blocs de statistiques
         */
        initialiserStatistiques(): ng.IPromise<void>;
        /**
         * initialisation bloc Rentabilité
         */
        private initBlocRentabilite();
        /**
         * initialisation bloc Rdv et Portefeuille
         */
        private initStatsRdvEtPortefeuille();
        /**
         * initialisation bloc Revue Portefeuille
         */
        private initStatsRevuePortefeuille();
        /**
         *
         */
        private initStatsFluxMouvementFinancier();
        /**
         * Méthode pour mettre à false les booléen d'init des stats + maj des messages stats
         */
        reinitInitStats(): void;
        /**
         *  ouvre la popin détail des portefeuilles en vue multi-conseiller
         */
        debrancherVersDetailsPorteuille(): void;
        /**
         *  ouvre la popin détail des taux de visite en vue multi-conseiller
         */
        debrancherVersDetailsTauxVisite(): void;
        /**
         *  ouvre la popin détail de la rentablité PNB en vue multi-conseiller
         */
        debrancherVersDetailsRentabilitePNB(): void;
        /**
         *  ouvre la popin détail des revue portfeuille en vue multi-conseiller
         */
        debrancherVersDetailsRevuePortfeuille(): void;
        /**
         *  ouvre la popin détail du flux créditeur en vue multi-conseiller
         */
        debrancherVersDetailsFluxCrediteur(): void;
        /**
         *  ouvre la popin détail du flux débiteur en vue multi-conseiller
         */
        debrancherVersDetailsFluxDebiteur(): void;
        /**
         *
         */
        private initStatRdv();
        /**
         *
         */
        private initStatPtf();
        /**
         *
         */
        private initStatRevuePtf();
        /**
         *
         */
        private initStatRentab();
        /**
         *
         */
        private initStatFlux();
        /**
         * Méthode permettant de créer la config du bouton de détails portefeuille
         * @returns {void}
         */
        private creerConfigBoutonDetailsPortefeuille();
        /**
         * Méthode permettant de créer la config du bouton de détails portefeuille Expert
         * @returns {void}
         */
        private creerConfigBoutonDetailsPortefeuilleExpert();
        /**
         *
         * @param statsRdvEtPortefeuille
         */
        private creerBlocPtf(statsRdvEtPortefeuille);
        /**
         *
         * @param statsRdvEtPortefeuille
         */
        private creerBlocRdv(statsRdvEtPortefeuille);
        /**
         * Méthode permettant de créer la config du donut segmentation Relationnelle
         * @returns {void}
         */
        private creerConfigDonutSegRel(statsRdvEtPortefeuille);
        /**
         * Méthode permettant de créer les données d'entrée du diagramme présenté en colonnes.
         * @returns {void}
         */
        private creerConfigDiagrammeColonnePortefeuille(statsRdvEtPortefeuille);
        /**
         * Méthode permettant de créer la config du bouton de accéder portefeuille
         * @returns {void}
         */
        private creerConfigBoutonAccederRevuePortefeuille();
        private creerBlocRevuePortefeuille(statsRevuePtf);
        /**
         * Méthode d'alimentation du bloc stats rentabilité
         * @param statsRentab
         */
        private creerBlocRentab(statsRentab);
        /**
         * Méthode d'alimentation du bloc flux créditeurs
         * @param statsFlux
         */
        private creerBlocFluxCrediteurs(statsFlux);
        /**
         * Méthode d'alimentation du bloc flux débiteurs
         * @param statsFlux
         */
        private creerBlocFluxDebiteurs(statsFlux);
        /**
         * Méthode permettant de créer la liste des configs grande barre Flux Créditeurs
         * @returns {void}
         */
        private creerConfigDiagrammeColonneFluxCrediteurs(statsFlux);
        /**
         * Méthode permettant de créer la liste des configs grande barre Flux Débiteurs
         * @returns {void}
         */
        private creerConfigDiagrammeColonneFluxDebiteurs(statsFlux);
        /**
         * Méthode permettant de créer la liste des configs grande barre PNB
         * @returns {void}
         */
        private creerConfigDiagrammeColonneRentabilite(statsRentab);
        /**
         * Méthode permettant de créer la config du pourcentage Rentabilité
         * @returns {void}
         */
        private creerConfigPourcentageRentabilite(statsRentab);
        /**
         * Variable contenant la méthode permettant d'acceder à la gestion des portefeuilles Expert
         * @returns {void}
         */
        accederGestionPortefeuillesExpert: () => void;
        /**
         * Variable contenant la méthode permettant d'acceder à la gestion des portefeuilles
         * @returns {void}
         */
        private accederGestionPortefeuilles;
        /**
         * Variable contenant la méthode permettant d'acceder à la revue portefeuille
         * @returns {void}
         */
        private accederRevuePortefeuilles;
    }
}

/// <reference path="../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la page selection indicateurs
 * @module Portefeuille.Controleurs
 * @author S0005354 (JM FOLLETTI)
 */
declare module Portefeuille.Controleurs {
    /**
     * Controleur de l'index
     */
    class SelectionIndicateursControleur {
        private $scope;
        private serviceAgentExtended;
        private $q;
        private $location;
        private ihmService;
        private preferencesService;
        private indicateurService;
        private modalePaniersService;
        private listeClientsService;
        private filtreService;
        private eventService;
        private contexteService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        strFilArianePageActuelle: string;
        strFilArianePageOrigine: string;
        listePaniers: Array<Modeles.Application.IPanier>;
        listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        panierEnCours: Modeles.Application.IPanier;
        panierDefaut: Modeles.Application.IPanier;
        messageErreurNomSelection: string;
        listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        listeCodesIndicateursPanierInit: Array<string>;
        panierDropSettings: Modeles.Application.IDropSettings;
        poubelleDropSettings: Modeles.Application.IDropSettings;
        estAfficherDropPanier: boolean;
        estEnEditionPanier: boolean;
        nomFiltre1: string;
        nomFiltre2: string;
        nomFiltre3: string;
        nomFiltre4: string;
        estDispoAjoutSelection: boolean;
        chargementEnCours: boolean;
        erreurSelection: boolean;
        myForm: ng.IFormController;
        txtTooltip: string;
        private nomSelTemp;
        private estCreationSelection;
        static $inject: string[];
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $location: ng.ILocationService, ihmService: Services.Application.IIhmService, preferencesService: Services.Application.IPreferencesService, indicateurService: Services.Application.IIndicateurService, modalePaniersService: Services.Application.IModalePaniersService, listeClientsService: Services.Application.IListeClientsService, filtreService: Services.Application.IFiltreService, eventService: Services.Application.IEventService, contexteService: Services.Application.IContexteService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant de rafraichir listeTuileCatalogueSettings
         * @return {void}
         */
        rafraichirListeTuileCatalogueSettings(): void;
        panierDeposeEvent: (tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings) => void;
        /**
         * Méthode permettant de retourner le nombre d'indicateur présent dans le panier en cours
         * @return {void}
         */
        getNombreIndicateurPanier(): number;
        /**
         * Méthode permettant de modifier l'état du drop panier
         * @param {boolean} estAfficher
         * @returns {void}
         */
        setEstActiverDropPanier(estAfficher: boolean): void;
        /**
         * Méthode permettant de modifier l'état du drop poubelle
         * @param {boolean} estAfficher
         * @returns {void}
         */
        setEstAfficherDropPoubelle(estAfficher: boolean): void;
        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans la poubelle
         */
        poubelleDeposeEvent: (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => void;
        private creationListePanierSettings();
        private creationListeCatalogueSettings();
        /**
         * Methode qui permet d'afficher ou non le message d'avertissement filtre
         * @param {string} nomFiltre1
         * @param {string} nomFiltre2
         * @param {string} nomFiltre3
         * @param {string} nomFiltre4
         * @return {void}
         */
        afficherMessageAvertissementFiltre(nomFiltre1: string, nomFiltre2: string, nomFiltre3: string, nomFiltre4: string): void;
        getEtatNbIndicateurs(): string;
        getEtatNbSelections(): string;
        getRoleIndicateurSelection(): string;
        getRoleIndicateurNom(): string;
        /**
         * Méthode pour passer en mode édition sur le panier en cours
         */
        gererSelection(): ng.IPromise<void>;
        /**
         * Méthode de changement de selection dans la combo de la liste des sélections
         * @param $item
         */
        changePanier($item: Modeles.Application.IPanier): ng.IPromise<void>;
        /**
         * Méthode pour passer en mode édition sur une nouvelle sélection
         */
        ajouterSelection(): ng.IPromise<void>;
        /**
         * Méthode de mise à jour du panier par défaut et de retour à la page précédente
         */
        appliquer(): ng.IPromise<void>;
        /**
         * Méthode permettant de mettre à jour les indicateurs clients pour le panier en cours
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClientsPanierEnCours();
        /**
         * Méthode permettant de mettre à jour les indicateurs clients pour le panier par defaut
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClientsPanierDefaut();
        private majIndicateursClientsPanier(listeChoixIndicateurs);
        /**
         * Méthode de retour à la page client sans modification du panier par défaut: il faut cependant prendre en compte les modifications faites sur le panier par defaut initial
         */
        retour(): ng.IPromise<void>;
        /**
         * méthode de retour à l'état initial de la page
         */
        annulerModifSelection(): ng.IPromise<void>;
        /**
         * Méthode d'enregistrement de de la sélection
         */
        enregistrerSelection(): ng.IPromise<void>;
        estNomAChanger(): boolean;
        estFormulaireValide(): boolean;
        afficherTuileEmplacementVide(): boolean;
        /**
         * Méthode de mise à jour du panier en cours avec listeTuilePanierSettings
         */
        private majPanierEnCoursAvecListeTuilesPanierSettings();
    }
}

declare module Portefeuille.Constantes {
    module ActionsRemarquables {
        const BTN_CHANGER_AGENT: string;
        const BTN_ACCES_LISTE_CLIENTS: string;
        const BTN_ACCES_LISTE_CLIENTS_REVUE: string;
        const BTN_PANIER: string;
        const BTN_PERSO_INDIC: string;
        const BTN_FILTRES: string;
        const BTN_EXPORT: string;
        const BTN_CONS_PROD: string;
        const BTN_EFFC_REVUE: string;
        const BTN_SYNTH_PM: string;
    }
}

declare module Portefeuille.Constantes {
    module Service {
        let EDS_RECH_GLBL_PARAM_CODE_RELATION: string;
        let EDS_RECH_GLBL_PARAM_PRES_PM_PAR_FCT: boolean;
        let RELATION_COMMERCIALE_NB_MAX_RES: number;
        let RELATION_COMMERCIALE_NB_MAX_NO_LIMIT: number;
        let RELATION_COMMERCIALE_CODE_MAX_CLIENT_ATTEINT: string;
    }
}

/// <reference path="service-constantes.d.ts" />
declare module Portefeuille.Constantes {
    module Application {
        let TITRE_APPLICATION: string;
        let TITRE_VUE_CLIENT: string;
        let TITRE_VUE_RELATION: string;
        let CHAINE_INDICATEUR_ACTIF: string;
        let CHAINE_INDICATEUR_INACTIF: string;
        let CHAINE_INDICATEUR_CLIENT: string;
        let CHAINE_INDICATEUR_TIERS: string;
        let CHAINE_INDICATEUR_PROSPECT: string;
        let CHAINE_INDICATEUR_LEADER: string;
        let CHAINE_INDICATEUR_NON_CONNU: string;
        let CHAINE_AJOUT_PERSONNALISATION: string;
        let CHAINE_OUI: string;
        let CHAINE_NON: string;
        let FORMAT_DATE_IHM: string;
        let FORMAT_DATE_REST: string;
        let CODE_HABILITATION_CHOIX_EDS: string;
        let CODE_HABILITATION_AGENCE_NIVEAU_2: string;
        let CODE_HABILITATION_ACCES_PNB: string;
        let CODE_HABILITATION_CONSULT_REVUE: string;
        let CODE_HABILITATION_CONSULT_AFFAIRES: string;
        let CODE_HABILITATION_CONSULT_PROPOSITIONS: string;
        let CODE_HABILITATION_MAJ_REVUE: string;
        let CODE_HABILITATION_CONSULT_POT_PROSPECT: string;
        let CODE_HABILITATION_MAJ_POT_PROSPECT: string;
        let CODE_HABILITATION_CONSULT_SEGMENTATIONS: string;
        let CODE_HABILITATION_CHOIX_AGENT: string;
        let TXT_SELECTIONNER_TOUT: string;
        let TXT_DESELECTIONNER_TOUT: string;
        let NB_LIGNE_TABLEAU: number;
        let CODE_LEADER_RELATION: string;
        let CHAINE_NOM_PANIER_INDICATEUR: string;
        let TXT_CHOIX_PORTEFEUILLE: string;
        let CLASSE_COLONNE_CLIENTS: string;
        let CLASSE_COLONNE_RELATIONS: string;
        let CLASSE_BTN_FILTRE: string;
        let ID_TABLE_CLIENT: string;
        let CLASSE_ACTIF: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_SINGULIER: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_SINGULIER: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_CLIENTS_PLURIEL: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_PROSPECTS_PLURIEL: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_SINGULIER: string;
        let LIMITE_CLIENTS_ATTEINTE_CHOIX_TOUT_PLURIEL: string;
        let LISTE_RELATIONS_ECONOMIQUES_INACCESSIBLE: string;
        let INDICATEURS_PREDEFINIS_NON_MODIFIABLES: string;
        let NOM_PANIER_FORCAGE: string;
        let NOM_PANIER_DEFAUT: string;
        let NOM_PANIER_CREATION: string;
        let LIMITE_NB_PANIERS: number;
        let FIL_ARIANE_PAGE_SELECTION_INDICATEURS: string;
        let DIAGRAMME_COLONNE_CLIENTS: string;
        let DIAGRAMME_COLONNE_CLIENTS_ACTIFS: string;
        let DIAGRAMME_COLONNE_SANS_CONTRAT: string;
        let DIAGRAMME_COLONNE_PROSPECTS: string;
        let DIAGRAMME_COLONNE_RELATIONS: string;
        let BADGE_CLIENTS_PME_ESI: string;
        let BADGE_CLIENTS_PE_ET_PEES: string;
        let BADGE_CLIENTS_ME_ET_MEES: string;
        let BADGE_CLIENTS_GE_ET_GEES: string;
        let BADGE_CLIENTS_PRO: string;
        let BADGE_AUTRES_CLIENTS: string;
        let GRAPHE_SEGMENTATION_TITRE: string;
        let GRAPHE_SEGMENTATION_TITRE_GROUPE: string;
        let GRAPHE_SEGMENTATION_TITRE_CLIENT: string;
        let PUCE_SEGMENTATION_FIDELISER: string;
        let PUCE_SEGMENTATION_SURVEILLER: string;
        let PUCE_SEGMENTATION_DEVELOPPER: string;
        let PUCE_SEGMENTATION_ACQUERIR: string;
        let PUCE_SEGMENTATION_GERER: string;
        let PUCE_SEGMENTATION_PRESERVER: string;
        let PUCE_SEGMENTATION_NON_SEGMENTE: string;
        const DONUT_PRO: string;
        const DONUT_PME_ESI: string;
        const TABLE_DELOC_SEGMENTATIONS: string;
        let GRAPHE_POIDS_PNB: string;
        const ID_PORTEFEUILLE_MAX_SPC: number;
        let BADGE_PRODUITS_PROPOSER: string;
        let BADGE_APPETENCE_PRODUITS: string;
        let BADGE_CLIENTS_ACTIVER: string;
        let BADGE_CLIENTS_RENEGOCIER: string;
        let BADGE_PROPOSITIONS_EN_COURS: string;
        let BADGE_AFFAIRES_EN_COURS: string;
        let GRAPHE_REVUE_PORTEFEUILLE: string;
        let TITRE_PANEL_RDV: string;
        let TITRE_PANEL_RDV_AVEC_CRE: string;
        let BADGE_RDV_REALISES_ANNEE_EN_COURS: string;
        let BADGE_CLIENTS_REALISES_ANNEE_EN_COURS: string;
        let BADGE_PROSPECTS_REALISES_ANNEE_EN_COURS: string;
        let BADGE_PROSPECTS_VUS_ANNEE_EN_COURS: string;
        let BADGE_RELATION_ECONOMIQUE_ANNEE_EN_COURS: string;
        const LIBELLE_AGGLOMERAT_ENTREE_RELATION: string;
        const LIBELLE_AGGLOMERAT_RISQUE: string;
        const LIBELLE_AGGLOMERAT_PRO_NON_CAPTE: string;
        const LIBELLE_AGGLOMERAT_PRO_PARTIELLEMENT_CAPTE: string;
        const LIBELLE_AGGLOMERAT_PRO_LARGEMENT_CAPTE: string;
        const LIBELLE_AGGLOMERAT_AUTRES: string;
        const FIN_CHAINE_MAX: string;
        const DATE_MIN: string;
        const DATE_MAX: string;
        const DONNEE_NUMBER: string;
        const DONNEE_STRING: string;
        const DONNEE_VALEUR_NUMBER: string;
        const DONNEE_VALEUR_DATE: string;
        const LIBELLE_NOTE_PROSPECT: string[];
        const LIBELLE_TOP_CC_BLANC: string;
    }
}

declare module Portefeuille.Constantes {
    module Contexte {
        const CONTEXTE_GERR_PORTF: string;
        const CONTEXTE_VERS_REVUE: string;
        const CONTEXTE_EDS_PORTEFEUILLES: string;
        const IDENTIFIANT_PERSONNE: string;
        const ACCES_DEPUIS_BLOC_REVUE: string;
        const TYPE_SYNTHESE: string;
    }
}

/// <reference path="../enums/application-enums.d.ts" />
declare module Portefeuille.Constantes {
    module Indicateur {
        const ORDRE_INDICATEUR: Array<string>;
        const ORDRE_INDICATEUR_REVUE: Array<string>;
        const INDICATEUR_PANIER_FORCAGE: Array<string>;
        const INDICATEUR_EN_EURO: Array<string>;
        const INDICATEUR_TAG: Array<string>;
        const INDICATEUR_CEER_MANUELLEMENT: Array<string>;
        const LISTE_COMPARATEUR_COMMUNE: Array<Enum.Filtre.COMPARATEUR>;
        const LISTE_COMPARATEUR_INTERVAL: Array<Enum.Filtre.COMPARATEUR>;
        const LISTE_COMPARATEUR_DERNIERE_REVUE: Array<Enum.Filtre.COMPARATEUR>;
        const LISTE_COMPARATEUR: Array<Enum.Filtre.COMPARATEUR>;
        const LISTE_INDICATEUR_NUMERIQUE: Array<Enum.Indicateur.TYPE>;
        const LISTE_OPERATEURS_FILTRE: Array<Enum.Filtre.OPERATEUR>;
        const LISTE_TOTAL_INDICATEUR: Array<Modeles.Application.IIndicateurType>;
    }
}

declare module Portefeuille.Constantes {
    module CodeProcessusLisa {
        let CODE_LISA_SORTIE: number;
        let CODE_LISA_ACCES_CLIENTS: number;
        let CODE_LISA_SAISIE_REVUE: number;
        let CODE_LISA_BILAN_REVUE: number;
        let CODE_LISA_SYNTHESE_PM: number;
        let CODE_LISA_BILAN_REVUES_PORTEFEUILLE: number;
        let CODE_LISA_BILAN_APPETENCES_PORTEFEUILLE: number;
        let CODE_LISA_GESTION_AFFAIRES: number;
        let CODE_LISA_PROPOSITONS: number;
    }
}

declare module Portefeuille.Constantes {
    module Messages {
        let MESSAGE_CHOIX_PORTEFEUILLE: string;
        let MESSAGE_AUCUN_PORTEFEUILLE: string;
        let MESSAGE_ERREUR_TECHNIQUE: string;
        let MESSAGE_NO_DATA_STATS: string;
        let MESSAGE_CHOIX_PORTEFEUILLE_EXPERT: string;
    }
}

declare module Portefeuille.Constantes {
    module ModalePaniers {
        let ID_HTML_MODALE_PANIERS_BODY: string;
        let CLASS_HTML_BOUTON_TUILE_STANDARD: string;
        let ATTRIBUT_HTML_DISABLED: string;
        let ATTRIBUT_HTML_STYLE: string;
        let STRING_VALUE_TRUE: string;
        let STRING_VALUE_CURSOR_POINTER_IMPORTANT: string;
        let NOMBRE_INDICATEUR_MAX: number;
        let TUILE_CATALOGUE_TAILLE: string;
        let TUILE_CATALOGUE_PICTO_MARQUAGE: string;
        let TUILE_TYPE_MARQUAGE_TEXTE: string;
        let TUILE_CATALOGUE_TYPE_MARQUAGE_PICTO: string;
        let TUILE_CATALOGUE_TYPE_MARQUAGE_AUCUN: string;
        let TUILE_NOM_MARQUAGE_VIDE: string;
        let TUILE_NOM_MARQUAGE_CLIENT: string;
        let TUILE_NOM_MARQUAGE_CLIENT_PROSPECT: string;
        let TUILE_COULEUR_JAUNE: string;
        let TUILE_COULEUR_ROUGE: string;
        let TUILE_COULEUR_SOMBRE: string;
        let TUILE_PANIER_TAILLE: string;
    }
}

declare module Portefeuille.Constantes {
    module Popup {
        let BOUTON_FERMER: string;
        let LIBELLE_ERREUR_CHARGEMENT: string;
        let LIBELLE_ERREUR_DEFAULT: string;
    }
}

declare module Portefeuille.Constantes {
    module Preferences {
        let CODE_PANIER: string;
        let CODE_EDS: string;
        let CODE_PORTEFEUILLE: string;
    }
}

declare module Portefeuille.Constantes {
    module Rest {
        let AGENT_V2_CODE_ACTION_1: string;
        let AGENT_V2_TYPE_RECHERCHE_NOM: number;
        let AGENT_V2_TYPE_RECHERCHE_GROUPE_FONCTION: number;
        let AGENT_V2_TYPE_RECHERCHE_MATRICULE: number;
        let AGENT_V2_TYPE_RECHERCHE_AGENCE_RATTACHEMENT: number;
        let AGENT_V2_RECHERCHE_GROUPE_FONCTION_BDR: string;
        let CODE_PERSONNALITE_JURIDIQUE_EI: string;
        let CODE_PERSONNALITE_JURIDIQUE_PM: string;
        let CODE_TYPE_PERSONNE_CLIENT: string;
        let CODE_TYPE_PERSONNE_TIERS: string;
        let CODE_TYPE_PERSONNE_PROPECT_RESTREINT: string;
        let CODE_TYPE_PERSONNE_PROPECT_ENRICHI: string;
        let CODE_O_TRUE: string;
        let CODE_STRING_ACTIF: string;
        const CODE_ENTREE_EN_RELATION: string;
        const CODE_RISQUE: string;
        const CODE_PRO_NON_CAPTE: string;
        const CODE_PRO_PARTIELLEMENT_CAPTE: string;
        const CODE_PRO_LARGEMENT_CAPTE: string;
        const CODE_AUTRES: string;
        const ENTREE_EN_RELATION: string;
        const PRO_RISQUE: string;
        const NON_CALCULE_NON_CONCERNE: string;
    }
}

declare module Portefeuille.Constantes {
    module Tableau {
        let TAB_LISTE_CLIENTS_CAPTION: string;
        let TAB_LISTE_CLIENTS_NO_ELEMENT: string;
        let TAB_LISTE_CLIENTS_COLONNE_NOM: string;
        let TAB_LISTE_CLIENTS_COLONNE_DETAIL: string;
        let TAB_NO_ELEMENT_CLIENT: string;
        let TAB_NO_ELEMENT_RELATION: string;
        let TAB_LISTE_CLIENTS_COLONNE_ID: string;
        let TAB_LISTE_CLIENTS_COLONNE_RAISON_SOCIALE: string;
        let TAB_LISTE_CLIENTS_COLONNE_MARCHE: string;
        let TAB_LISTE_CLIENTS_COLONNE_OBJECTIF_DE_FLUX: string;
        let VALEUR_POSSIBLE_POTENTIEL_PROSPECT: Array<string>;
        let VALEUR_POSSIBLE_TOP_CC: Array<string>;
        let ID_TABLE_CLIENT: string;
        let ID_TABLE_RELATION: string;
    }
}

declare module Portefeuille.Constantes {
    module Token {
        let TOKEN_ENVIRONNEMENT: string;
        let TOKEN_ENVIRONNEMENT_VALEUR_DUA: string;
        let TOKEN_ENVIRONNEMENT_VALEUR_VFO: string;
    }
}

declare module Portefeuille.Constantes {
    module Url {
        let PORTEFEUILLE: string;
        let CLIENTS: string;
        let DETAIL_CLIENT: string;
        let BILAN_REVUE: string;
        let SAISIE_REVUE: string;
        let BILAN_REVUES_PORTEFEUILLE: string;
        let BILAN_APPETENCES_PORTEFEUILLE: string;
        let SELECTION_INDICATEURS: string;
    }
}

declare module Portefeuille.Constantes {
    module urlsRest {
        const URL_REST: string;
        const URL_REST_TIERSCORPORATEV1_CORPORATE_INFORMATION: string;
        const URL_REST_TIERSCORPORATESERVICV1_RECHERCHE_COMMERCIALE: string;
        const URL_REST_PORTEFEUILLEV1_RECHERCHE: string;
        const URL_REST_PORTEFEUILLEV1_RECHERCHE_LISTE: string;
        const URL_REST_PORTEFEUILLEV1_RELATION_COMMERCIALE: string;
        const URL_REST_PORTEFEUILLEV1_SUIVI_COMPLEMENTAIRE: string;
        const URL_REST_PORTEFEUILLEV1_CLIENT: string;
        const URL_REST_AGENTV2_RECHERCHE: string;
        const URL_REST_AGENTV2_GESTION_AFFECTATION: string;
        const URL_REST_STRUCTUREV2_EDS_NIVEAU_INFERIEURE: string;
        const URL_REST_PREFERENCE_UTILISATEUR: string;
        const URL_REST_PORTEFEUILLECORPORATEV1_STATRENTABILITE: string;
        const URL_REST_PORTEFEUILLECORPORATEV1_STATFLUXMOUVEMENTFINANCIER: string;
        const URL_REST_PORTEFEUILLECORPORATEV1_STATPTF: string;
        const URL_REST_PROPOSITIONCORPORATEV1_STATREVUE: string;
        const URL_REST_PROPOSITIONCORPORATEV1_RECHERCHE_REVUE: string;
        const URL_REST_PROPOSITIONCORPORATEV1_STAT_PORTEFEUILLE_EDS: string;
    }
}

/**
 * Filtres utiles à l'application
 * @module Portefeuille.Filtres
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Filtres {
    /**
     * Filtre la liste des indicateurs qui sont utilisés
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    function indicateurUtilisantPasFiltre($filter: ng.IFilterService): Function;
    /**
     * Filtre la liste des nombre qui sont utilisés
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    function nombreFiltre($filter: ng.IFilterService): Function;
    /**
     * Formate le montant à afficher en foncntion de la valeur
     * @param $filter
     */
    function montantFiltre($filter: ng.IFilterService): Function;
    function pourcentFiltre($filter: ng.IFilterService): Function;
    /**
     * Filtre la liste des indicateurs qui sont de type Date
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    function sansIndicateurDateFiltre($filter: ng.IFilterService): Function;
    /**
     * Filtre les valeurs null est indefinis
     * @param {ng.IFilterService} $filter
     * @return {Function} La fonction du filtre
     */
    function valeurNonConnuFiltre($filter: ng.IFilterService): Function;
    /**
     * Affichage de date NC (Selon la valeur transmise, on affiche ou pas NC)
     */
    function dateNC(): (valeur: Date) => string;
    /**
     * Affichage de nombre NC (Selon la valeur transmise, on affiche ou pas NC)
     */
    function nombreNC(): (valeur: number) => string;
}

declare module Portefeuille.Mocks {
    function getClient(index?: string): {
        "id": string;
        "nom": string;
        "siren": string;
        "relationEconomique": string;
        "listeIndicateurs": {
            "intitule": string;
            "valeur": string;
            "couleur": Enum.PfTuileIndicateur.COULEUR;
            "icone": string;
            "typeIndicateur": Enum.Indicateur.TYPE;
            "code": string;
            "famille": Enum.Indicateur.FAMILLE;
        }[];
    };
    function getRelationEco(index?: string): {
        "nom": string;
        "id": string;
        "siren": string;
        "relationEconomique": string;
        "listeClients": any[];
        "listeIndicateurs": {
            "intitule": string;
            "valeur": string;
            "couleur": Enum.PfTuileIndicateur.COULEUR;
            "icone": string;
            "typeIndicateur": Enum.Indicateur.TYPE;
            "code": string;
            "famille": Enum.Indicateur.FAMILLE;
        }[];
    };
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la modale d'avertissement du choix de portefeuille
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    interface IRetourModaleAvertissement {
        typeForcage: Enum.PageClients.TYPE_FORCAGE;
        nombreBoutonsAffiches: number;
    }
    /**
     * Classe du controleur
     */
    class ModaleAvertissementChoixPortefeuilleControleur {
        private $modalInstance;
        private listeClientsService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        nbMaxPortefeuilles: number;
        estEnMultiPortefeuille: boolean;
        estAfficherBtnProspects: boolean;
        estAfficherBtnClients: boolean;
        listePortefeuilles: Array<Modeles.Application.IPortefeuille>;
        listeMessageAction: Array<string>;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, listeClientsService: Services.Application.IListeClientsService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Permet de déterminer l'affichage ou non des boutons Clients et Prospects
         * @returns {void}
         */
        private determinerAffichageBtnClientsEtProspects();
        private determinerMessagesAction();
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
        /**
         * Action du bouton "Afficher les clients"
         * @returns {void}
         */
        afficherClients(): void;
        /**
         * Action du bouton "Afficher les prospects"
         * @returns {void}
         */
        afficherProspects(): void;
        /**
         * Action du bouton "Afficher les prospects"
         * @returns {void}
         */
        afficherTout(): void;
        /**
         * Action du bouton "Nouvelle sélection"
         * @returns {void}
         */
        nouvelleSelection(): void;
        private setRetourPopup(typeForcage);
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la modale de choix EDS
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleChoixEdsControleur {
        private $q;
        private data;
        private $modalInstance;
        private choixEdsService;
        private popupService;
        private choixUtilisateurService;
        private contexteService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        agentChoisi: MyWay.Model.Agent;
        titre: string;
        chargementAgences: boolean;
        chargementAgents: boolean;
        listeAgences: Array<Modeles.Application.IAgenceEds>;
        agenceChoisi: Modeles.Application.IAgenceEds;
        ancienNiveauEds: number;
        agenceReadOnly: boolean;
        edsAncien: Modeles.Application.IAgenceEds;
        sauveAgentRechercher: MyWay.Model.Agent;
        /**
         * Constructeur
         */
        constructor($q: ng.IQService, data: Portefeuille.Modeles.Application.IPopupData<string>, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, choixEdsService: Services.Application.IChoixEdsService, popupService: Services.Application.IPopupService, choixUtilisateurService: Services.Application.IChoixUtilisateurService, contexteService: Services.Application.IContexteService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Recherche les agents par le nom qui est tapé dans la liste
         * @param agent
         */
        changeAgent(agent: MyWay.Model.Agent): ng.IPromise<void>;
        /**
         * Méthode appelé lors du changement d'agence
         * @returns {void}
         */
        changementAgence(EDS: Modeles.Application.IAgenceEds, ancienEDS: Modeles.Application.IAgenceEds): ng.IPromise<void>;
        /**
         * Action du bouton "Valider"
         * @returns {void}
         */
        valider(): void;
        /**
         *
         */
        estVueEDS: boolean;
        /**
         *
         */
        estChoisiEDS: boolean;
        /**
         *
         */
        estChoisiEDSvalide: boolean;
        /**
         *
         */
        edsRattachement: Modeles.Application.IAgenceEds;
        /**
         *
         */
        afficheListeEdsRattachement: boolean;
        /**
         *
         */
        afficheLibelleEdsRattachement: boolean;
        /**
         *
         */
        nomEdsRattachement: string;
        /**
         *
         */
        afficheEdsSelectionne: boolean;
        /**
         *
         */
        nomEdsSelectionne: string;
        /**
         *
         */
        edsSelectionne: Modeles.Application.IAgenceEds;
        /**
         *
         */
        afficheBlocEds: boolean;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleClientsActiverControleur {
        private $modalInstance;
        private data;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private clientsAActiver;
        private tableauRaisonsSociales;
        private titreModale;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Array<Modeles.ApplicationStats.IClientSimplifie>);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleClientsRenegocierControleur {
        private $modalInstance;
        private data;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private clientsARenegocier;
        private tableauRaisonsSociales;
        private titreModale;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Array<Modeles.ApplicationStats.IClientSimplifie>);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsFluxCrediteurControleur {
        private $modalInstance;
        private data;
        private indicateurFlecheService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammeColonneFluxCrediteur: Array<Modeles.Application.IDataIndicateurMutliColonne>;
        legendeColonne1: string;
        couleurColonne1: Modeles.Application.COULEUR_GRANDE_COLONNE;
        legendeColonne2: string;
        couleurColonne2: Modeles.Application.COULEUR_GRANDE_COLONNE;
        configTendenceFluxCrediteurTotal: Modeles.Application.IConfigIndicateurFleche;
        typeDiagramme: number;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf, indicateurFlecheService: Services.Application.IIndicateurFlecheService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtf);
        /**
         *
         */
        libelle1Total: string;
        /**
         *
         */
        libelle2Total: string;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsFluxDebiteurControleur {
        private $modalInstance;
        private data;
        private indicateurFlecheService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammeColonneFluxDebiteur: Array<Modeles.Application.IDataIndicateurMutliColonne>;
        legendeColonne1: string;
        couleurColonne1: Modeles.Application.COULEUR_GRANDE_COLONNE;
        legendeColonne2: string;
        couleurColonne2: Modeles.Application.COULEUR_GRANDE_COLONNE;
        configTendenceFluxDebiteurTotal: Modeles.Application.IConfigIndicateurFleche;
        typeDiagramme: number;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf, indicateurFlecheService: Services.Application.IIndicateurFlecheService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtf);
        /**
         *
         */
        libelle1Total: string;
        /**
         *
         */
        libelle2Total: string;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsPortefeuilleControleur {
        private $modalInstance;
        private data;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammeColonnePortefeuille: Array<Modeles.Application.IDataIndicateurColonne>;
        nombreTotalClient: number;
        nombreTotalDontActif: number;
        typeDiagramme: number;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtfParSuviPar);
        /**
         *
         */
        libelleTotal: string;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsRentabilitePNBControleur {
        private $modalInstance;
        private data;
        private indicateurFlecheService;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammeColonnePnb: Array<Modeles.Application.IDataIndicateurMutliColonne>;
        legendeColonne1: string;
        couleurColonne1: Modeles.Application.COULEUR_GRANDE_COLONNE;
        legendeColonne2: string;
        couleurColonne2: Modeles.Application.COULEUR_GRANDE_COLONNE;
        configTendencePNBTotal: Modeles.Application.IConfigIndicateurFleche;
        typeDiagramme: number;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf, indicateurFlecheService: Services.Application.IIndicateurFlecheService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammeColonneDetailPtfParSuviPar(statsDetailPtf);
        /**
         *
         */
        libelle1Total: string;
        /**
         *
         */
        libelle2Total: string;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsRevuePortefeuilleControleur {
        private $modalInstance;
        private data;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammePourcentageTauxRevue: Array<Services.LibrairieD3.IConfigPourcentageD3>;
        pourcentageTauxTotal: number;
        configIndicateurPourcentage: Services.LibrairieD3.IConfigPourcentageD3;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammePourcentageDetailTauxRevueParSuviPar(statsDetailPtf);
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleDetailsTauxVisiteControleur {
        private $modalInstance;
        private data;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        private titreModale;
        configDiagrammePourcentageTauxVisite: Array<Services.LibrairieD3.IConfigPourcentageD3>;
        pourcentageTauxTotal: number;
        configIndicateurPourcentage: Services.LibrairieD3.IConfigPourcentageD3;
        /**
         * Constructeur
         */
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Portefeuille.Modeles.ApplicationStats.IDetailPtf);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        /**
         *
         * @param statsDetailPtfParSuviPar
         */
        private creerConfigDiagrammePourcentageDetailTauxVisiteParSuviPar(statsDetailPtf);
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la modale de filtre
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModaleFiltreControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $filter;
        private indicateurService;
        private filtreService;
        private begacliService;
        private static CLASS_NAME;
        private static logger;
        static $inject: string[];
        listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>;
        listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        listeFiltres: Array<Modeles.Application.IFiltre>;
        estVueClient: boolean;
        listeIndicateursFiltreDisponible: Array<Modeles.Application.IIndicateurFiltre>;
        pasDeFiltreDisponible: boolean;
        unSeulFiltreDisponible: boolean;
        sansFiltreActif: boolean;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Modeles.Application.IPopupData<any>, $filter: ng.IFilterService, indicateurService: Services.Application.IIndicateurService, filtreService: Services.Application.IFiltreService, begacliService: Services.Application.IBegacliService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        private ajouterFiltreDisponible(code);
        /**
         * Méthode permettant d'ajouter une condition interne au bloc
         * @returns {void}
         */
        ajouterCondition(setDefaultEt: boolean): void;
        /**
         * Action du bouton "Appliquer"
         * @returns {void}
         */
        appliquer(): void;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
        /**
         * Action de l'appui de la touche "Entrer"
         * @returns {void}
         */
        appuiToucheEntrer($event: any): void;
        /**
         * Action du bouton "Ajouter +"
         * @returns {void}
         */
        afficherBoutonAjouter(): boolean;
        /**
         * Desactiver ou non le bouton "Annuler"
         * @returns {void}
         */
        desactiverBoutonAnnuler(): boolean;
        /**
         * Descativer ou non le bouton "Appliquer"
         * @returns {void}
         */
        desactiverBoutonAppliquer(): boolean;
        /**
         * Controle si un nombre est :
         *  - non null
         *  - non defini
         *  - non négatif
         * @param valeur valeur à controler
         */
        private estVide(valeur);
        /**
         * Controle le la validité du comparateur
         * @param filtre
         */
        private controllerComparateurKo(filtre);
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur de la modale des paniers
 * @module Portefeuille.Controleurs
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class ModalePaniersControleur {
        private $rootScope;
        private $scope;
        private modalePaniersService;
        private $modalInstance;
        private data;
        private preferencesService;
        private popupService;
        private indicateurService;
        private listeClientsService;
        private $q;
        private mwEvents;
        private $location;
        private scroll;
        static CLASS_NAME: string;
        private static logger;
        static $inject: string[];
        listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        listePaniers: Array<Modeles.Application.IPanier>;
        listeFiltresClients: Array<Modeles.Application.IFiltre>;
        listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        panierEnCours: Modeles.Application.IPanier;
        listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        listeCodesIndicateursPanierInit: Array<string>;
        panierDropSettings: Modeles.Application.IDropSettings;
        poubelleDropSettings: Modeles.Application.IDropSettings;
        estAfficherDropPanier: boolean;
        estAfficherBoutonAjouter: boolean;
        estEnEditionPanier: boolean;
        estEnEditionCatalogue: boolean;
        nomFiltre1: string;
        nomFiltre2: string;
        nomFiltre3: string;
        nomFiltre4: string;
        chargementEnCours: boolean;
        listeErreurs: Modeles.Application.IMessageErreurIHM[];
        txtAjoutPerso: string;
        /**
         * Constructeur
         */
        constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, modalePaniersService: Services.Application.IModalePaniersService, $modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: Modeles.Application.IPopupData<any>, preferencesService: Services.Application.IPreferencesService, popupService: Services.Application.IPopupService, indicateurService: Services.Application.IIndicateurService, listeClientsService: Services.Application.IListeClientsService, $q: ng.IQService, mwEvents: MyWay.UI.IMwEvents, $location: ng.ILocationService, scroll: ng.IAnchorScrollService);
        /**
         * Méthode permettant d'initialiser le controleur
         * @returns {void}
         */
        private initialiser();
        private recupererPanierFacticeAjoutSelection();
        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans le panier
         */
        panierDeposeEvent: (tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings) => void;
        /**
         * Méthode permettant de modifier l'état du drop panier
         * @param {boolean} estAfficher
         * @returns {void}
         */
        setEstActiverDropPanier(estAfficher: boolean): void;
        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé dans la poubelle
         */
        poubelleDeposeEvent: (tuilePanierSettings: Modeles.Application.ITuilePanierSettings) => void;
        /**
         * Méthode permettant de modifier l'état du drop poubelle
         * @param {boolean} estAfficher
         * @returns {void}
         */
        setEstAfficherDropPoubelle(estAfficher: boolean): void;
        /**
         * Méthode permettant de modifier l'état du bouton ajouter
         * @param {boolean} estAfficher
         * @returns {void}
         */
        setEstAfficherBoutonAjouter(estAfficher: boolean): void;
        /**
         * Méthode permettant de rafraichir listeTuileCatalogueSettings
         * @return {void}
         */
        rafraichirListeTuileCatalogueSettings(): void;
        /**
         * Méthode permettant de retourner le nombre d'indicateur présent dans le panier en cours
         * @return {void}
         */
        getNombreIndicateurPanier(): number;
        ajouterSelection(): void;
        /**
         * Action du bouton "Ajouter"
         * @returns {void}
         */
        ajouterIndicateur(): void;
        /**
         * Action du bouton "Mode édition"
         * @returns {void}
         */
        activerModeEditionPanier(): void;
        /**
         * Action du bouton "Supprimer la selection"
         * @returns {void}
         */
        supprimerTousLesIndicateurs(): void;
        /**
         * Action du bouton "Enregistrer" en édition panier
         * @returns {void}
         */
        enregistrerEditionPanier(): void;
        /**
         * Action du bouton "Annuler" en édition panier
         * @returns {void}
         */
        annulerEditionPanier(): void;
        /**
         * Méthode permettant d'initialiser la modale lors de la fin de l'édition Panier
         * @returns {void}
         */
        private initFinEditionPanier();
        /**
         * Action du bouton "Enregistrer" en édition catalogue
         * @returns {void}
         */
        enregistrerEditionCatalogue(): void;
        /**
         * Action du bouton "Annuler" en édition catalogue
         * @returns {void}
         */
        annulerEditionCatalogue(): void;
        /**
         * Méthode permettant d'initialiser la modale lors de la fin de l'édition Catalogue
         * @returns {void}
         */
        private initFinEditionCatalogue();
        /**
         * Méthode permettant de remettre le panier initial
         * @returns {void}
         */
        private remettrePanierInitial();
        /**
         * Méthode permettant de mettre à jour les indicateurs clients
         * @returns {ng.IPromise<void>}
         */
        private majIndicateursClients();
        /**
         * Méthode appelé lors de la selection d'un panier
         * @returns {void}
         */
        changePanier($item: Modeles.Application.IPanier): void;
        /**
         * Methode qui permet d'afficher ou non le message d'avertissement filtre
         * @param {string} nomFiltre1
         * @param {string} nomFiltre2
         * @param {string} nomFiltre3
         * @param {string} nomFiltre4
         * @return {void}
         */
        afficherMessageAvertissementFiltre(nomFiltre1: string, nomFiltre2: string, nomFiltre3: string, nomFiltre4: string): void;
        /**
         * Méthode de vérification que le formaulaire est valide
         */
        private estFormulaireValide();
        goToAnchor(ancre: string): void;
        /**
         * Action du bouton "Valider"
         * @returns {ng.IPromise<void>}
         */
        valider(): ng.IPromise<void>;
        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton gérer la selection
         * @returns {boolean}
         */
        estAfficheBtnGererLaSelection(): boolean;
        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton supprimer la selection
         * @returns {boolean}
         */
        estAfficheBtnSupprimerLaSelection(): boolean;
        /**
         * Méthode pour savoir s'il faut afficher ou non le bouton valider
         * @returns {boolean}
         */
        estValidable(): boolean;
        estChangementPanierDisponible(): boolean;
        /**
         * Action du bouton "Fermer"
         * @returns {void}
         */
        fermer(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneDataCAN1Controleur {
        private serviceAgentExtended;
        private $scope;
        private eventService;
        static $inject: string[];
        afficherDate: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, eventService: Services.Application.IEventService);
        /**
         * Méthode qui renvoie le texte à afficher pour la colonne dernier CA
         * @param client
         */
        getTexteCA(client: Modeles.Application.IClient): string;
        getTexteDate(client: Modeles.Application.IClient): string;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneDataCANControleur {
        private serviceAgentExtended;
        private $scope;
        private eventService;
        static $inject: string[];
        afficherDate: boolean;
        tendance: number;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, eventService: Services.Application.IEventService);
        /**
         * Méthode qui renvoie le texte à afficher pour la colonne dernier CA
         * @param client
         */
        getTexteCA(client: Modeles.Application.IClient): string;
        getTexteDate(client: Modeles.Application.IClient): string;
        getTendance(client: Modeles.Application.IClient): number;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneDataClientControleur {
        private serviceAgentExtended;
        private $scope;
        private eventService;
        static $inject: string[];
        indicateurActif: string;
        indicateurInactif: string;
        indicateurLeader: string;
        indicateurProspect: string;
        indicateurPremierEquipement: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, eventService: Services.Application.IEventService);
        /**
         * Méthode qui permet de récupérer la valueur de la note du prospect
         * @param client
         */
        getNoteProspect(client: Modeles.Application.IClient): number;
        /**
         *
         * @param client
         * @param numero
         */
        afficherEtoile(client: Modeles.Application.IClient, numeroEtoile: number): boolean;
        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonne = 'prospect'
         * @param client
         */
        isProspect(client: Modeles.Application.IClient): boolean;
        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Actif'
         * @param client
         */
        isActif(client: Modeles.Application.IClient): boolean;
        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Inactif'
         * @param client
         */
        isInactif(client: Modeles.Application.IClient): boolean;
        /**
         * Méthode qui renvoie true si le client est sans contrat (et qu'il n'est pas prospect)
         * @param client
         */
        isSansContrat(client: Modeles.Application.IClient): boolean;
        isPremierEquipement(client: Modeles.Application.IClient): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    /**
     *
     */
    class ColonneDataDerniereRevueControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static dateLimite: Date;
        static $inject: string[];
        constructor();
        /**
         * Restitue l'indicateur "dernière revue"
         * @param client
         */
        private recupererDerniereRevue(client);
        /**
         * Valorise la date de dernière revue
         * @param client
         */
        valoriserDateRevue(client: Modeles.Application.IClient): string;
        /**
         * Indique si le client à une revue ancienne
         * @param client
         */
        ancienneRevue(client: Modeles.Application.IClient): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    /**
     *
     */
    class ColonneDataDerniereRevueRelControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static dateLimite: Date;
        static $inject: string[];
        constructor();
        /**
         * Restitue l'indicateur "dernière revue"
         * @param relation
         */
        private recupererDerniereRevue(relation);
        /**
         * Valorise la date de dernière revue
         * @param relation
         */
        valoriserDateRevue(relation: Modeles.Application.IRelationEconomique): string;
        /**
         * Indique si le client à une revue ancienne
         * @param relation
         */
        ancienneRevue(relation: Modeles.Application.IRelationEconomique): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneFluxCrediteurControleur {
        static $inject: string[];
        tendance: number;
        constructor();
        getMontant(client: Modeles.Application.IClient): string;
        getTendance(client: Modeles.Application.IClient): number;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneFluxDebiteurControleur {
        static $inject: string[];
        tendance: number;
        constructor();
        getMontant(client: Modeles.Application.IClient): string;
        getTendance(client: Modeles.Application.IClient): number;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonnePnbAnneeNControleur {
        static $inject: string[];
        tendance: number;
        constructor();
        getMontant(client: Modeles.Application.IClient): string;
        getTendance(client: Modeles.Application.IClient): number;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneDataRelationControleur {
        private serviceAgentExtended;
        private $scope;
        private eventService;
        static $inject: string[];
        indicateurProspect: string;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, eventService: Services.Application.IEventService);
        /**
         * Appel à la fonction de filtrage du tableau client du controleur ClientsControleur via EventSErvice
         * @param idRelationFiltre
         */
        filtrerTableauClients(idRelationFiltre: string): void;
        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonneRel = 'prospect'
         * @param client
         */
        isProspect(relationEco: Modeles.Application.IRelationEconomique): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonnePotentielProspectControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        constructor();
        /**
         * Valorise la note du potentiel prospect
         * Paquet mep 27/03
         * @param client
         */
        valoriserPotentielProspect(client: Modeles.Application.IClient): string;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneStatutControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        private indicateurProspect;
        private indicateurActif;
        private indicateurInactif;
        static $inject: string[];
        constructor();
        /**
         * Méthode qui renvoie true si l'indicateur codeTypePersonne = 'prospect'
         * @param client
         */
        isProspect(client: Modeles.Application.IClient): boolean;
        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Actif'
         * @param client
         */
        isActif(client: Modeles.Application.IClient): boolean;
        /**
         * Méthode qui renvoie true si l'indicateur ActifInactif = 'Inactif'
         * @param client
         */
        isInactif(client: Modeles.Application.IClient): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Controleurs.TemplateTableau {
    class ColonneTopCCControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        constructor();
        /**
         * Valorise la couleur Top CC
         * 24/01/2022
         * @param client
         */
        valoriserTopCC(client: Modeles.Application.IClient): string;
    }
}

/**
 * Ensemble d'interfaces de modèles applicatifs
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Modeles.Application {
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
        listeClientAffiches: Array<Modeles.Application.IClient>;
        estClient: boolean;
        typeForcage: string;
    }
    interface IContexteVersSyntheseClient {
        identifiantPersonne: number;
    }
    interface IContexteVersEdsPortefeuilles {
        idEds: number;
        listeIdsPortefeuille: Array<number>;
    }
    interface IContexteGererPortefeuille {
        identifiantPersonne: number;
        raisonSociale: string;
        siren: string;
        identifiantRelation: number;
        libelleRelation: string;
        objetEdsVisu: IObjetEdsChoisi;
        pagination: MyWay.UI.IMwPaginationState;
        colonneTriee: MyWay.UI.IMwSortedColumn;
        colonneFiltre: Array<MyWay.UI.IMwColumnCriterion>;
        identifiantPersonneSelection: number;
        typeVue: Enum.PageClients.TYPE_VUE;
        filtres: Array<Modeles.Application.IFiltre>;
        filtresRelation: Array<Modeles.Application.IFiltre>;
        listeClientAffiches: Array<Modeles.Application.IClient>;
        estClient: boolean;
        typeForcage: string;
    }
    interface IContexteGererRelation {
        pagination: MyWay.UI.IMwPaginationState;
        colonneTriee: MyWay.UI.IMwSortedColumn;
        colonneFiltre: Array<MyWay.UI.IMwColumnCriterion>;
        selectedItems: Array<IRelationEconomique>;
        typeVue: Enum.PageClients.TYPE_VUE;
    }
    interface IElementTableau {
        checked?: boolean;
    }
    /**
     * Modèle d'agent ayant des portfeuille
     */
    interface IAgentPortefeuille {
        id: number;
        libelle: string;
        estAffiche: boolean;
        listePortfeuille: Array<IPortefeuille>;
    }
    /**
     * Modèle de portfeuille
     */
    interface IPortefeuille {
        id: number;
        libelle: string;
        estAffiche: boolean;
        listeRelations: Array<IRelationEconomique>;
        idAgent?: number;
        nomAgent?: string;
        prenomAgent?: string;
        nomPrenonAgent?: string;
        fonctionAgent?: string;
        nombreTotalClients?: number;
        nombreTotalProspectsTiers?: number;
        idAgentString?: string;
        listPortefeuilleParAgent?: IPortefeuille[];
        codeSuiviParComplementaire?: string;
    }
    /**
     *
     */
    interface ICaracteristiquesEDS {
        agences: Array<Modeles.Application.IAgenceEds>;
    }
    /**
     *
     */
    interface IAgenceEds {
        id: number;
        nomEds: string;
        agencesInferieur: Array<IAgenceEds>;
        agencesSuperieur: IAgenceEds;
        typeEDS: string;
        libelleTypeEDS: string;
        affiche: boolean;
    }
    /**
     *
     */
    interface IAgent {
        id: number;
        nomPrenonAgent: string;
        estAffiche: boolean;
        isVisu: boolean;
        listPortefeuilleParAgent: IPortefeuille[];
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
        tendance?: number;
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
     * Position des indicateurs
     */
    interface IPositionIndicateur {
        code: string;
        index: number;
    }
    /**
     *
     */
    interface IListeIndicateur {
        positionIndicateur: Array<IPositionIndicateur>;
        listeIndicateurs: Array<IIndicateur>;
    }
    /**
     * Modèle d'un client
     */
    interface IClient extends IElementTableau, IListeIndicateur {
        nom: string;
        id: string;
        siren: string;
        estClient: boolean;
        estActif: boolean;
        estActifRenseigne: boolean;
        nomRelationEconomique: string;
        idRelationEconomique: number;
        estLeader: boolean;
        estSansContrat: boolean;
        datePremierEquipement: Date;
        libellePortefeuille: string;
        identifiantPortefeuille: number;
        nbPersonneRelation: number;
        codePersonnaliteJuridique: string;
    }
    /**
     * Modèle d'une relation economique
     */
    interface IRelationEconomique extends IElementTableau, IListeIndicateur {
        idPortefeuille: number;
        nom: string;
        id: string;
        idLeader: number;
        relationEconomique: string;
        listeClients: Array<IClient>;
        estClient: boolean;
        libellePortefeuille: string;
        identifiantPortefeuille: number;
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
     * Modèle de valeur de filtre : 23/02 ajout ordreAffichage pour afficher dans l'ordre qu'on veut. Ex : Top CC
     */
    interface IValeurFiltre {
        libelle: string;
        actif: boolean;
        ordreAffichage: number;
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
        listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        listeFiltres: Array<IFiltre>;
        estVueClient?: boolean;
    }
    /**
     * Modèle d'entree/sortie de la popup de indicateurs
     */
    interface IDonneesEntreeSortiePopupIndicateurs {
        listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>;
        listeFiltresClients: Array<IFiltre>;
        listeFiltresRelationEco: Array<IFiltre>;
        listePaniers?: Array<Modeles.Application.IPanier>;
        panier?: Modeles.Application.IPanier;
    }
    /**
     * Modèle d'un indicateur de la popup choix indicateur
     */
    interface IIndicateurChoix {
        indicateur: IIndicateurType;
        choisi: boolean;
        desactive: boolean;
        position?: number;
    }
    /**
     * Modèle d'un panier
     */
    interface IPanier {
        nom: string;
        listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
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
        sousIntitule?: string;
        valeur: number;
        couleur: COULEUR_GRANDE_COLONNE;
        couleurSousValeur?: COULEUR_GRANDE_COLONNE;
        couleurIntitule?: COULEUR_GRANDE_COLONNE;
        hauteur: number;
        hauteurSousValeur?: number;
        estMontant: boolean;
        sousValeur?: number;
        nePasAfficherIntitule?: boolean;
        nomSuiviPar?: string;
    }
    /**
     * Modèle d'indicateur colonne
     */
    interface IDataIndicateurMutliColonne {
        id: string;
        tendence: IConfigIndicateurFleche;
        intitule?: string;
        dataIndicateurMutliColonne: Array<Modeles.Application.IDataIndicateurColonne>;
    }
    enum COULEUR_GRANDE_COLONNE {
        COULEUR_CLIENT,
        COULEUR_SANS_CONTRAT,
        COULEUR_ACTIF,
        COULEUR_PROSPECT,
        COULEUR_RELATIONS,
        COULEUR_PERIODE1,
        COULEUR_PERIODE2,
        COULEUR_PERIODE3,
        COULEUR_MT_NEGATIF,
    }
    interface IConfigIndicateurFleche {
        valeurFormate: string;
        couleur: string;
        icone: string;
    }
    interface ILettreBegacli {
        univers: string;
        lettreMaj: string;
        choisiMaj: boolean;
        lettreMin: string;
        choisiMin: boolean;
    }
    interface INombreBegacli {
        nombre: string;
        choisi: boolean;
    }
    interface IFiltreBegacli {
        listeLettres: Array<ILettreBegacli>;
        listeNombres: Array<INombreBegacli>;
        choisiNC: boolean;
    }
}

/**
 * Ensemble d'interfaces de modèles applicatifs pour les statistiques
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Modeles.ApplicationStats {
    /**
     * Modèle de rentabilite
     */
    interface IRentabilite {
        ratioPNBImportants: number;
        tauxEvolutionPnb: number;
        pnb12DerniersMoisGlissNMoins1: number;
        dateDebPnb12DerMoisGlissNMoins1: Date;
        dateFinPnb12DerMoisGlissNMoins1: Date;
        pnb12DerniersMoisGlissantN: number;
        dateDebPnb12DerMoisGlissN: Date;
        dateFinPnb12DerMoisGlissN: Date;
        pnb3112AnneeNMoins1: number;
        dateDebPnb3112AnneeNMoins1: Date;
        dateFinPnb3112AnneeNMoins1: Date;
    }
    /**
     * Modèle de Flux
     */
    interface IFlux {
        tauxEvolutionFlux: number;
        flux12DerniersMoisGlissNMoins1: number;
        flux12DerniersMoisGlissantN: number;
        dateDebFlux12DerMoisGlissN: Date;
        dateDebFlux12DerMoisGlissNMoins1: Date;
        dateFinFlux12DerMoisGlissNMoins1: Date;
        dateFinFlux12DerMoisGlissN: Date;
    }
    /**
     * Modèle de rdv et portefeuille
     */
    interface IRdvPtf {
        nombreClients: number;
        nombreClientsActifs: number;
        nombreProspects: number;
        nombreRelations: number;
        nombreClientsPMEESI: number;
        nombreClientsPEetPEES: number;
        nombreClientsMEetMEES: number;
        nombreClientsGEetGEES: number;
        nombreClientsPro: number;
        nombreClientsAutres: number;
        listeSegmentationsPMEESI: Array<ISegmentationRelationnelle>;
        listeSegmentationsPro: Array<ISegmentationRelationnelle>;
        nombreRdvProspectAnneeCivile: number;
        nombreRdvProspectAnneeEnCours: number;
        nombreRdvRelationEcoClient: number;
        rdvTauxVisite: number;
        nombreRdvClientAnneeEnCours: number;
        nombreClientsNonEquipe: number;
        nombreClientsAvecProduitService: number;
        nombreClientsSansContratEtProspect: number;
    }
    interface ISegmentationRelationnelle {
        code: string;
        libelle: string;
        pourcentage: number;
    }
    /**
     * Modèle de revue portefeuille
     */
    interface IRevuePortefeuille {
        pourcentageRevuePtfRealisee: number;
        nombreDeProduitsAProposer: number;
        nombreDeClientsAActiver: number;
        nombreDeClientsARenegocier: number;
        nombreDeClientsAAppetence: number;
        nombreDePropositionsEnCours: number;
        nombreDeAffairesEnCours: number;
    }
    interface IClientSimplifie {
        raisonSociale: string;
        identifiantPersonne: number;
        tauxObjectifFlux: number;
        libelleSegment: string;
    }
    /**
     * détail pour les details
     */
    interface IDetailPtf {
        detailParSuviPar: Array<IDetailPtfParSuviPar>;
        tauxDeRevueTotal: number;
        tauxDeVisiteTotal: number;
        dateDebPnb12DerMoisGlissNMoins1: Date;
        dateFinPnb12DerMoisGlissNMoins1: Date;
        dateDebPnb12DerMoisGlissN: Date;
        dateFinPnb12DerMoisGlissN: Date;
        pnb12DerniersMoisGlissNMoins1: number;
        pnb12DerniersMoisGlissantN: number;
        tauxEvolutionPnb: number;
        dateDebFluxAnneeNMoins1: Date;
        dateFinFluxAnneeNMoins1: Date;
        dateDebFluxAnneeN: Date;
        dateFinFluxAnneeN: Date;
        fluxCrediteursNMoins1: number;
        fluxCrediteursAnneeN: number;
        tauxEvolutionFluxCrediteurs: number;
        fluxDebiteursNMoins1: number;
        fluxDebiteursAnneeN: number;
        tauxEvolutionFluxDebiteurs: number;
    }
    /**
     * Modèle détail portefeuille par suivi par
     */
    interface IDetailPtfParSuviPar {
        codeCiviliteSuiviPar: string;
        nomSuiviPar: string;
        prenomSuiviPar: string;
        nombreClients: number;
        nbClientsAvecProduitService: number;
        nombreClientsActifs: number;
        tauxDeVisite: number;
        tauxDeRevue: number;
        pnb12DerniersMoisGlissNMoins1: number;
        pnb12DerniersMoisGlissantN: number;
        tauxEvolutionPnb: number;
        fluxCrediteursNMoins1: number;
        fluxCrediteursAnneeN: number;
        tauxEvolutionFluxCrediteurs: number;
        fluxDebiteursNMoins1: number;
        fluxDebiteursAnneeN: number;
        tauxEvolutionFluxDebiteurs: number;
    }
}

declare module Portefeuille.Modeles.Application {
    interface IContexte {
        identifiantUser: string;
        codeEtablissement: string;
        designation: string;
        edsUser: number;
        edsVisu: number;
        estVueMultiSuiviPar: boolean;
        edsSuperieurUser: number;
    }
}

/**
 * Ensemble d'interfaces de modèles lié à la modale panier
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Modeles.Application {
    /**
     * Modèle des paramètres d'une tuile catalogue
     */
    interface ITuileCatalogueSettings {
        id: number;
        dragSettings: IDragSettings;
        indicateur: IIndicateurChoix;
        estEnEdition: boolean;
    }
    /**
     * Modèle des paramètres d'une tuile panier
     */
    interface ITuilePanierSettings {
        id: number;
        dropSettings: IDropSettings;
        dragSettings: IDragSettings;
        indicateur: IIndicateurChoix;
        estEnEdition: boolean;
    }
}

declare module Portefeuille.Modeles.Application {
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

declare module Portefeuille.Modeles.Application {
    /**
     * Modèle d'un panier pour les préférences utilisateurs
     */
    interface IPanierPreferences {
        numero: number;
        listeCodesIndicateurs: Array<string>;
        nom: string;
        estDefaut: boolean;
    }
}

declare module Portefeuille.Modeles.Tableaux {
    class TableauClientEco implements MyWay.UI.ImwTableOptions {
        tableauColonneDataClient: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
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
        data: Modeles.Application.IClient[];
        selectedItems: Modeles.Application.IClient[];
        disabledItems: Modeles.Application.IClient[];
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, $filter: ng.IFilterService, $parse: ng.IParseService, data: Modeles.Application.IClient[]);
        private initialiser(data);
    }
}

declare module Portefeuille.Modeles.Tableaux {
    class TableauClient implements MyWay.UI.ImwTableOptions {
        tableauColonneDataClient: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDataNbPersonnes: MyWay.UI.ImwTableColumnOptions;
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
        data: Modeles.Application.IClient[];
        selectedItems: Modeles.Application.IClient[];
        disabledItems: Modeles.Application.IClient[];
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        tableHandler: MyWay.UI.IMwTableHandler;
        choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
        hasNoneElements: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, handlerTable: MyWay.UI.IMwTableHandler, $filter: ng.IFilterService, $parse: ng.IParseService, data: Modeles.Application.IClient[], choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>, voirNbPersonne: boolean);
        /**
         *
         * @param data
         * @param $filter
         * @param $parse
         */
        private initialiser(data, $filter, $parse);
        private initEtatFiltre(clientsControleur);
    }
}

declare module Portefeuille.Modeles.Tableaux {
    class TableauRaisonsSociales implements MyWay.UI.ImwTableOptions {
        private tableauColonneId;
        private tableauColonneRaisonSociale;
        private tableauColonneMarche;
        private tableauColonneObjectifDeFlux;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        caption: string;
        readOnly: boolean;
        theadSticky: string;
        templateUrl: string;
        data: Modeles.ApplicationStats.IClientSimplifie[];
        selectedItems: Modeles.ApplicationStats.IClientSimplifie[];
        disabledItems: Modeles.ApplicationStats.IClientSimplifie[];
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        tableHandler: MyWay.UI.IMwTableHandler;
        hasNoneElements: string;
        constructor(colonneObjectif: boolean);
    }
}

declare module Portefeuille.Modeles.Tableaux {
    class TableauRelation implements MyWay.UI.ImwTableOptions {
        tableauColonneDataRelation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneDataNbClients: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
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
        data: Modeles.Application.IRelationEconomique[];
        selectedItems: Modeles.Application.IRelationEconomique[];
        disabledItems: Modeles.Application.IRelationEconomique[];
        columns: MyWay.UI.ImwTableColumnOptions[];
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        tableHandler: MyWay.UI.IMwTableHandler;
        choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>;
        hasNoneElements: string;
        constructor(handler: MyWay.UI.ISelectionChangeHandler, handlerTable: MyWay.UI.IMwTableHandler, $filter: ng.IFilterService, $parse: ng.IParseService, data: Modeles.Application.IRelationEconomique[], choixIndicateurs: Array<Modeles.Application.IIndicateurChoix>);
        private initialiser(data);
        private initEtatFiltre(clientsControleur);
    }
}

declare module Portefeuille.Services.Application {
    /**
     * Configuration du fichier CSV (utilisé par le service mwCsvService).
     */
    interface ICsvOptions {
        /**
         * Use this characters to "escape" fields, otherwise will use double quotes as deafult
         */
        txtDelimiter?: string;
        /**
         * Defines the decimal separator character (default is ,). If set to "locale", it uses the language sensitive representation of the number.
         */
        decimalSeparator?: string;
        /**
         * Will force escaping of every string field. (it should always true)
         */
        quoteStrings?: boolean;
        /**
         * Add the Byte Order Mark, use this option if you are getting an unexpected char when opening the file on any windows App (default is true).
         */
        addByteOrderMarker?: boolean;
        /**
         * Defines the field separator character (default is ;)
         */
        fieldSeparator?: any;
        /**
         * charset encoding
         */
        charset?: string;
        /**
         * output filename (default is export.csv)
         */
        filename?: string;
        /**
         * Defines whether or not using keys as csv column value (default is false).
         */
        label?: boolean;
        /**
         * If provided, would use this attribute to create a header row. This property should be used along with columnOrder because natural order can eventually change.
         */
        header?: string[];
        /**
         * Defines the column order to be set when creating the body of the CSV (may be according to the csv-headers).
         * It can also be used to filter properties in csv.
         */
        columnOrder?: any;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-bloc-condition-filtre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfBlocConditionFiltreControleur {
        private filtreService;
        private begacliService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        listeIndicateurs: Array<Modeles.Application.IIndicateurFiltre>;
        listeFiltres: Array<Modeles.Application.IFiltre>;
        noIndex: number;
        filtre: Modeles.Application.IFiltre;
        filtreBegacli: Modeles.Application.IFiltreBegacli;
        afficherOperateur: boolean;
        estVueClient: boolean;
        listeComparateurs: Array<Enum.Filtre.COMPARATEUR>;
        listeOperateurs: Array<Enum.Filtre.OPERATEUR>;
        private dernierIndicateurSelect;
        private sauvegardeIndicateur;
        isOpen: boolean;
        /**
         * Constructeur
         */
        constructor(filtreService: Services.Application.IFiltreService, begacliService: Services.Application.IBegacliService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        getListeIndicateurs(noIndex: number): Array<Modeles.Application.IIndicateurFiltre>;
        presenceBegacliAutreIndex(noIndex: number): boolean;
        begacliChangeMaj(lettreBegacli: Modeles.Application.ILettreBegacli): void;
        begacliChangeMin(lettreBegacli: Modeles.Application.ILettreBegacli): void;
        selectionnerListeFiltre(): void;
        /**
         * Méthode appelée lors du clique sur le bouton Supprimer de la condition
         * @returns {void}
         */
        supprimerCondition(): void;
        /**
         * Méthode appelée lors de la selection d'un indicateur
         * @returns {void}
         */
        selectionIndicateur(): void;
        comparateurUniqueInactif: boolean;
        /**
         * Méthode permettant de savoir si un comparateur est du type Entre
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        comparateurEstDeTypeEntre(comparateur: Enum.Filtre.COMPARATEUR): boolean;
        /**
         * Méthode permettant de savoir si un comparateur est du type = NC
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        comparateurEstDeTypeNC(comparateur: Enum.Filtre.COMPARATEUR): boolean;
        /**
         * Méthode permettant de savoir si un comparateur est du type = Null (PlaceHolder)
         * @param {Enum.Filtre.COMPARATEUR} comparateur
         * @returns {boolean}
         */
        comparateurNonRenseigne(comparateur: Enum.Filtre.COMPARATEUR): boolean;
        /**
         * Propriété récupérent le type d'indicateur
         */
        estComparateurDeTypeEntre: boolean;
        /**
         * Propriété récupérent le type d'indicateur
         */
        typeIndicateur: Enum.Indicateur.TYPE;
        /**
         * Propriété retourne le code de l'indicateur
         */
        codeIndicateur: string;
        estIndicateur: boolean;
        /**
         * Propriété retournant la liste des valeur possible
         */
        listeValeurs: Modeles.Application.IValeurFiltre[];
        /**
         * Propriété indiquant de cacher le champ saisie date simple
         */
        cacheChampSaisieDateSimple: boolean;
        /**
         * Propriété indiquant de cacher le champ saisie date
         */
        cacheChampsSaisieDate: boolean;
        /**
         * Propriété indiquant si c'est l'indicateur de type date
         */
        estIndicateurDeTypeDate: boolean;
        /**
         * Propriété indiquant si c'est l'indicateur de type numérique
         */
        estIndicateurNumerique: boolean;
        /**
         * Propriété indiquant le comparateur de type NC
         */
        estComparateurDeTypeNC: boolean;
        /**
         * Propriété retournant l'unité borne min de l'indicateur
         */
        uniteMin: string;
        /**
         * Propriété retournant l'unité borne max de l'indicateur
         */
        uniteMax: string;
        estUniteMin: boolean;
        private getUnite(chaineMois);
        /**
         * Propriété retournant la devise de l'indicateur
         */
        devise: string;
        /**
         * Propriété indiquant l'indicateur de type montant
         */
        estIndicateurMontant: boolean;
        /**
         * Propriété indiquant l'indicateur de type pourcentage
         */
        estIndicateurPourcent: boolean;
        /**
         * Propriété indiquant l'indicateur de type texte
         */
        estIndicateurTexte: boolean;
        estIndicateurBegacli: boolean;
    }
}

/**
 * Directive pf-bloc-condition-filtre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfBlocConditionFiltre(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-choix-portefeuille
 * @module portefeuille.Controleurs
 * @author S00053555 (Eric ALBERT)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfChoixPortefeuilleControleur {
        private $location;
        private contexteService;
        private portefeuilleService;
        private eventService;
        private listeClientsService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        listePortefeuillesDropDown: Modeles.Application.IAgent[];
        listePortefeuilles: Modeles.Application.IPortefeuille[];
        ouvertureVoletChoixPortefeuille: boolean;
        estVueGlobalConsolide: boolean;
        tousPortfeuillesSelectionnes: any;
        finInit: boolean;
        sauveListePortefeuille: Modeles.Application.IPortefeuille[];
        /**
         * Constructeur
         */
        constructor($location: ng.ILocationService, contexteService: Services.Application.IContexteService, portefeuilleService: Services.Application.IPortefeuilleService, eventService: Services.Application.IEventService, listeClientsService: Services.Application.IListeClientsService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Annuler le choix du portefeuille
         */
        annulerChoixPortefeuille(): void;
        /**
         *
         * @param indexAgent
         */
        private selectionnerListe(indexAgent?);
        /**
         *
         * @param indexAgent
         * @param estSuiviPar
         */
        aPortefeuillesNonCoches(indexAgent?: number, estSuiviPar?: boolean): boolean;
        /**
         *
         * @param indexAgent
         * @param estSuiviPar
         */
        aPortefeuilleCoche(indexAgent?: number, estSuiviPar?: boolean): boolean;
        /**
         *
         * @param indexAgent
         * @param estSuiviPar
         */
        aTousPortefeuillesCoches(indexAgent?: number, estSuiviPar?: boolean): boolean;
        /**
         * Appelé lorsqu'on actionne une touche et que la case à cocher globale (3 états) a le focus.
         * @param $event
         * @param indexAgent
         */
        keyDownTroisEtat($event: KeyboardEvent, indexAgent?: number): void;
        /**
         * Appelé lorsqu'on clique sur la case à cocher globale (3 états).
         * @param $event
         * @param indexAgent
         */
        forceMultiSelection($event?: ng.IAngularEvent, indexAgent?: number, estSuiviPar?: boolean): void;
        /**
         *
         */
        getLabelTroisEtats(indexAgent?: number, estSuiviPar?: boolean): string;
        /**
         * Permet de retourner le nom et l'ID du portefeuille
         * @param indexPortfeuille position dans la liste de l'agent du portfeuille
         * @param indexAgent position dans la liste d'agent
         * @return {string}
         */
        getLibelleEtIdPortefeuille(indexPortfeuille: number, indexAgent: number): string;
        /**
         * Permet de vérifier si on est sur un portefeuille : id <> 0
         * @param indexPortfeuille
         * @param indexAgent
         * @return {boolean}
         */
        getEstPortefeuille(indexPortfeuille: number, indexAgent: number): boolean;
        /**
         * Permet de vérifier si on est sur un suivi par complémenataire : id = 0
         * @param indexPortfeuille
         * @param indexAgent
         * @return {boolean}
         */
        getEstSuiviParComplementaire(indexPortfeuille: number, indexAgent: number): boolean;
        /**
         * Permet de retourner le nom d'un agent
         * @param {number} index position dans la liste d'agent
         * @return {string} Nom de l'agent
         */
        getLibelleAgent(index: number): string;
        /**
         * obtenir le texte affiché sur le bouton du choix portfeuille
         */
        getTxtChoixPortefeuille(): string;
        /**
         * Méthode pour deselectionner les choix portefeuille si selection de suivi par complémentaire ou deselectionner les choix suivi par complémentaire si selection de portefeuille
         * @param indexPortfeuille
         * @param indexAgent
         */
        majSelection(indexPortfeuille: number, indexAgent: number): void;
        /**
         * Methode pour deselectionner les autres choix de domaine de suivi par complémentaire car un seul choix est possible
         * @param indexPortfeuille
         * @param indexAgent
         */
        private deselectAutresChoixSuiviParComplementaire(indexPortfeuille, indexAgent);
        /**
         * Deselectionner tous les choix typés portefeuille réél
         */
        private deselectChoixPortefeuille();
        /**
         * Deselectionner tous les choix typés Suivi par complémentaire SPC
         */
        private deselectChoixSuiviParComplementaire();
        /**
         * Appelé lorsqu'on ouvre/ferme le dropdown de choix de portefeuille
         */
        ouvrirFermerChoixPortefeuille(): void;
        /**
         *  Sauvegarder le Poretefeuille
         */
        private sauvegarderPoretefeuille();
        /**
         * Restaurer Poretefeuille via la sauvegarde ou sans
         */
        private restaurerPoretefeuille();
        /**
         * Vider sauvagarde Portefeuille
         */
        private viderSauvagardePortefeuille();
        /**
         *
         * @param indexAgent
         */
        setIndetermine(indexAgent?: number, estSuiviPar?: boolean): boolean;
        /**
         *
         */
        validerChoixPortefeuille(): ng.IPromise<void>;
        nbPortefeuilleReel(): number;
        aSuiviParComplementaire(): boolean;
        aPortefeuilleReel(): boolean;
        aPortefeuille(): boolean;
        /**
         * il y a-t-il une designation dans le contexte ?
         */
        estDesignation(): boolean;
        /**
         * Stop la propagation d'un evenement (emit)
         * @param $event
         */
        stopPropagation($event: ng.IAngularEvent): void;
        /**
         *
         * @param indexAgent
         */
        isCheckedGlobal(indexAgent?: number): boolean;
    }
}

/**
 * Directive pf-choix-portefeuille
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfChoixPortefeuille(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-colonne
 * @module portefeuille.Controleurs
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfDiagrammeColonneControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        svgId: string;
        config: Array<Modeles.Application.IDataIndicateurColonne>;
        typeDiagramme: number;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        initialiser(): void;
    }
}

/**
 * Directive pf-diagramme-colonne
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammeColonne(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-detail-filtre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfDetailFiltreControleur {
        private eventService;
        private begacliService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        listeFiltres: Array<Modeles.Application.IFiltre>;
        /**
         * Constructeur
         */
        constructor(eventService: Services.Application.IEventService, begacliService: Services.Application.IBegacliService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        supprimerFiltres(): void;
        getTxtFiltre(filtre: Modeles.Application.IFiltre): string;
        private getTxtListeValeurs(filtre);
        getDevise(code: string): string;
        private getTxtValUnique(filtre);
        private getTxtValMultiple(filtre);
        private getTexteValeurs(filtre, multiple);
        /**
         * Renvoi un text pour les valeurs NC
         * @param filtre pour fournir l'intitulé
         */
        private getTxtValNC(filtre);
        /**
         * Renvoi un text pour indicateur derniere revue : les valeurs Echue, En cours, Non réalisé
         * @param filtre pour fournir l'intitulé
         */
        private getTxtValDerniereRevue(filtre);
    }
}

/**
 * Directive pf-detail-filtre
 * @module portefeuille.Directives
 * @author S0005354 (JM FOLLETTI)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDetailFiltre(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-grande-barre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    interface IConfigDiagrammeGrandeBarre {
        intitule: string;
        couleur: COULEUR_GRANDE_BARRE;
        valeur: number;
        listeValeurs: Array<number>;
    }
    enum COULEUR_GRANDE_BARRE {
        VIOLET_NIV1,
        VIOLET_NIV2,
        VIOLET_NIV3,
    }
    /**
     * Classe du controleur
     */
    class PfDiagrammeGrandeBarreControleur {
        private $element;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        config: IConfigDiagrammeGrandeBarre;
        listeConfig: Array<IConfigDiagrammeGrandeBarre>;
        private valeurMax;
        pourcentage: number;
        /**
         * Constructeur
         */
        constructor($element: ng.IAugmentedJQuery);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant de récupérer la plus grande valeur
         * @returns {void}
         */
        private recupererValeurMax();
        /**
         * Méthode permettant de calculer le rapport de la valeur
         * @returns {void}
         */
        private calculerRapportValeur();
    }
}

/**
 * Directive pf-diagramme-grande-barre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammeGrandeBarre(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-donut
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfDiagrammeDonutControleur {
        private $element;
        private creationDonutService;
        private eventService;
        private statService;
        private scope;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        svgId: string;
        config: Services.LibrairieD3.IConfigDonutD3;
        listeDonuts: Array<string>;
        listeConfigPuceLegende: Array<Portefeuille.Controleurs.IConfigPuceLegende>;
        /**
         * Constructeur
         */
        constructor($element: ng.IAugmentedJQuery, creationDonutService: Services.LibrairieD3.ICreationDonutService, eventService: Services.Application.IEventService, statService: Services.Application.IStatsService, scope: ng.IScope);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        initialiser(): void;
        echangerDonuts(item: string, model: any, label: any, evt: any): void;
    }
}

/**
 * Directive pf-diagramme-donut
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammeDonut(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-petite-barre
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    interface IConfigDiagrammePetiteBarre {
        intitule: string;
        couleur: COULEUR_PETITE_BARRE;
        valeur: number;
        listeValeurs: Array<number>;
    }
    enum COULEUR_PETITE_BARRE {
        BLEU_NIV1,
        BLEU_NIV2,
        BLEU_NIV3,
    }
    /**
     * Classe du controleur
     */
    class PfDiagrammePetiteBarreControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        config: IConfigDiagrammePetiteBarre;
        listeConfig: Array<IConfigDiagrammePetiteBarre>;
        private valeurMax;
        pourcentage: number;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant de récupérer la plus grande valeur
         * @returns {void}
         */
        private recupererValeurMax();
        /**
         * Méthode permettant de calculer le rapport de la valeur
         * @returns {void}
         */
        private calculerRapportValeur();
    }
}

/**
 * Directive pf-diagramme-petite-barre
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammePetiteBarre(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-core-draggable
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfCoreDraggableControleur {
        private $scope;
        private $element;
        private pfDragAndDropService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        dragSettings: Modeles.Application.IDragSettings;
        /**
         * Constructeur
         */
        constructor($scope: any, $element: ng.IAugmentedJQuery, pfDragAndDropService: Services.Application.IPfDragAndDropService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Variable contenant la méthode permettant de gérer l'événement dragStart
         * @param {JQueryEventObject} event
         */
        private dragStart;
        /**
         * Variable contenant la méthode permettant de gérer l'événement dragEnd
         * @param {JQueryEventObject} event
         */
        private dragEnd;
        /**
         * Variable contenant la méthode permettant d'activer le drag
         */
        private activerDrag;
        /**
         * Variable contenant la méthode permettant de desactiver le drag
         */
        private desactiverDrag;
    }
}

/**
 * Directive pf-core-draggable
 * @module portefeuille.Directives
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfCoreDraggable(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-core-drop-target
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfCoreDropTargetControleur {
        private $scope;
        private $element;
        private pfDragAndDropService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        dropSettings: Modeles.Application.IDropSettings;
        /**
         * Constructeur
         */
        constructor($scope: any, $element: ng.IAugmentedJQuery, pfDragAndDropService: Services.Application.IPfDragAndDropService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant de gérer l'événement dragover
         * @param {JQueryEventObject} event
         */
        private onDragOver;
        /**
         * Méthode permettant de gérer l'événement drop
         * @param {JQueryEventObject} event
         */
        private onDrop;
        /**
         * Méthode permettant de gérer l'événement dragenter
         * @param {JQueryEventObject} event
         */
        /**
         * Méthode permettant de gérer l'événement dragleave
         * @param {JQueryEventObject} event
         */
        /**
         * Variable contenant la méthode permettant d'activer le dragover
         */
        private activerDragOver;
        /**
         * Variable contenant la méthode permettant de desactiver le dragover
         */
        private desactiverDragOver;
    }
}

/**
 * Directive pf-core-drop-target
 * @module portefeuille.Directives
 * @author S0078068 (Yannis VESSEREAU)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfCoreDropTarget(): ng.IDirective;
}

declare module Portefeuille.Constantes {
    module DragAndDrop {
        var EVENT_LISTENER_DRAGSTART: string;
        var EVENT_LISTENER_DRAGEND: string;
        var EVENT_LISTENER_DRAGOVER: string;
        var EVENT_LISTENER_DROP: string;
        var ATTRIBUT_DRAGGABLE: string;
        var STRING_VALUE_TRUE: string;
        var STRING_VALUE_FALSE: string;
        var HTML_CLASS_NAME_PF_DROP_TARGET_ELEMENT: string;
        var HTML_CLASS_NAME_PF_DROP_TARGET_ON_DRAG: string;
    }
}

/**
 * Ensemble d'interfaces de modèles drag and drop
 * @module Portefeuille.Modeles.Application
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Modeles.Application {
    /**
     * Modèle des paramètres d'élément glissable (draggable)
     */
    interface IDragSettings {
        donneesATransmettre: any;
        idHTMLElementConteneur: string;
        estActiver: boolean;
        activerDrag?: () => void;
        desactiverDrag?: () => void;
        dragStartBeforeEvent?: () => void;
        dragEndBeforeEvent?: () => void;
    }
    /**
     * Modèle des paramètres d'élément drop
     */
    interface IDropSettings {
        idHTMLElementConteneur: string;
        estActiver: boolean;
        dropEventAction: (donnees: any) => void;
        activerDragOver?: () => void;
        desactiverDragOver?: () => void;
    }
}

/**
 * Service applicatif de gestion du drag and drop
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe PfDragAndDropService
     */
    interface IPfDragAndDropService {
        getDonnees(): any;
        setDonnees(donnees: any): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-pourcentage
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfDiagrammePourcentageControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        config: Array<Services.LibrairieD3.IConfigPourcentageD3>;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        initialiser(): void;
    }
}

/**
 * Directive pf-diagramme-liste-donut
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammePourcentage(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-colonne
 * @module portefeuille.Controleurs
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfDiagrammeMultiColonneControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        config: Array<Modeles.Application.IDataIndicateurMutliColonne>;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        initialiser(): void;
    }
}

/**
 * Directive pf-diagramme-colonne
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfDiagrammeMultiColonne(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-indicateur-badge
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    interface IDataIndicateurBadge {
        intitule: string;
        valeur: string;
        isSousIntitule: boolean;
        debranchementLisa: number;
        debranchementLocal: string;
        showZero: boolean;
    }
    /**
     * Classe du controleur
     */
    class PfIndicateurBadgeControleur {
        private portefeuilleService;
        private contexteService;
        private statsService;
        private lisaService;
        private popupService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        intitule: string;
        valeur: string;
        isSousIntitule: boolean;
        debranchementLisa: number;
        debranchementLocal: string;
        showZero: boolean;
        chargementIndicateurBadgeEnCours: boolean;
        /**
         * Constructeur
         */
        constructor(portefeuilleService: Services.Application.IPortefeuilleService, contexteService: Services.Application.IContexteService, statsService: Services.Application.IStatsService, lisaService: PdtEntreprise.Services.ILisaService, popupService: PdtEntreprise.Services.IPopupService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        show(): boolean;
        debrancherVers(): void;
        debrancherVersSuite(): ng.IPromise<void>;
    }
}

/**
 * Directive pf-indicateur-badge
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfIndicateurBadge(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-indicateur-fleche
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    enum COULEUR_INDICATEUR_FLECHE {
        VERT,
        ORANGE,
        ROUGE,
    }
    enum ICONE_INDICATEUR_FLECHE {
        HAUT,
        BAS,
        DROITE,
    }
    /**
     * Classe du controleur
     */
    class PfIndicateurFlecheControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        config: Modeles.Application.IConfigIndicateurFleche;
        valeurFormate: string;
        couleur: string;
        icone: string;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         *
         */
        isPositif: boolean;
        /**
         *
         */
        isNeutre: boolean;
        /**
         *
         */
        isNegatif: boolean;
    }
}

/**
 * Directive pf-indicateur-badge
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfIndicateurFleche(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-element-eds
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfElementEdsControleur {
        private $compile;
        private choixUtilisateurService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        eds: Modeles.Application.IAgenceEds;
        /**
         * Constructeur
         */
        constructor($compile: ng.ICompileService, choixUtilisateurService: Services.Application.IChoixUtilisateurService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         *
         */
        private nomEds;
        /**
         *
         */
        edsSelectionne: Modeles.Application.IAgenceEds;
        /**
         *
         */
        ouvrir(): ng.IPromise<void>;
        /**
         *
         */
        estfermer: boolean;
        /**
         *
         */
        estOuvert: boolean;
        estCoche: boolean;
        /**
         *
         */
        selectionnerEDS(): Modeles.Application.IAgenceEds;
        /**
         *
         */
        estVide: boolean;
    }
}

/**
 * Directive pf-element-eds
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfElementEds($compile: ng.ICompileService): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-indicateur-colonne
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfIndicateurColonneControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        data: Modeles.Application.IDataIndicateurColonne;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Sous Valeur visible
         */
        estVisibleSousValeur(): boolean;
        /**
         * Intitulé Sous Valeur visible
         */
        estVisibleIntituleSousValeur(): boolean;
        /**
         * suivi par visible
         */
        estVisibleSuiviPar: boolean;
        /**
         *
         */
        estSousValeurEnNombre: boolean;
    }
}

/**
 * Directive pf-indicateur-colonne
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfIndicateurColonne(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-indicateur-pourcentage
 * @module portefeuille.Controleurs
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfIndicateurPourcentageControleur {
        private creationPourcentageService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        config: Services.LibrairieD3.IConfigPourcentageD3;
        /**
         * Constructeur
         */
        constructor(creationPourcentageService: Portefeuille.Services.LibrairieD3.ICreationPourcentageService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         *
         */
        id: string;
        /**
         *
         */
        isIE: boolean;
    }
}

/**
 * Directive pf-indicateur-Pourcentage
 * @module portefeuille.Directives
 * @author S0005355 (Eric ALBERT)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfIndicateurPourcentage(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-ligne-relation-eco
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfLigneRelationEcoControleur {
        private $filter;
        private $parse;
        private eventService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        relationEconomique: Modeles.Application.IRelationEconomique;
        listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>;
        estOuvert: boolean;
        listeIndicateursAAfficher: Array<Modeles.Application.IIndicateur>;
        /**
         * Constructeur
         */
        constructor($filter: ng.IFilterService, $parse: ng.IParseService, eventService: Services.Application.IEventService);
        /**
         * Méthode permettant d'initialiser le composant avec une liste d'indicateurs définis
         * @returns {void}
         */
        reInitialiser(listeIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void;
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant d'ouvrir ou fermer le détail de la ligne
         * @returns {void}
         */
        afficherMoinsPlus(): void;
        onSelectionChange(selectedObject: Modeles.Application.IClient): void;
    }
}

/**
 * Directive pf-ligne-relation-eco
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfLigneRelationEco(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-diagramme-donut
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    interface IConfigPuceLegende {
        intitule: string;
        couleur: any;
        affichagePuceLegendeActif: boolean;
    }
    /**
     * Classe du controleur
     */
    class PfPuceLegendeControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        intitule: string;
        couleur: string;
        affichagePuceLegendeActif: boolean;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
    }
}

/**
 * Directive pf-puce-legende
 * @module portefeuille.Directives
 * @author S0005410 (Eric Jacquot)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfPuceLegende(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-tuile-catalogue
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfTuileCatalogueControleur {
        private $element;
        private modalePaniersService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings;
        listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        listeFiltresClients: Array<Modeles.Application.IFiltre>;
        listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        configTuile: MyWay.UI.iMwConfigTuile;
        /**
         * Constructeur
         */
        constructor($element: ng.IAugmentedJQuery, modalePaniersService: Services.Application.IModalePaniersService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Variable contenant la méthode a appelé avant que le dragStart commence
         */
        private dragStartBeforeEvent;
        /**
         * Variable contenant la méthode a appelé avant que le dragEnd commence
         */
        private dragEndBeforeEvent;
        /**
         * Récupération de la configuration de la tuile
         */
        getConfigTuile(): MyWay.UI.iMwConfigTuile;
        modifIntitule(texte: string): string;
        /**
         * Méthode permettant de gérer l'affichage ou non du marquage de la tuile
         * @returns {boolean}
         */
        afficherMarquage(): boolean;
        /**
         * Méthode permettant de gérer le nom du marquage de la tuile
         * @returns {string}
         */
        nomMarquage(): string;
        /**
         * Méthode permettant de gérer la couleur de la tuile
         * @returns {string}
         */
        couleur(): string;
        /**
         * Méthode permettant de gérer le click sur le plus d'une tuile
         * @returns {void}
         */
        ajouter(): void;
        /**
         * Méthode permettant de savoir si l'indicateur est uniquement client et choisi
         * @returns {boolean}
         */
        estClientEtChoisi(): boolean;
    }
}

/**
 * Directive pf-tuile-catalogue
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfTuileCatalogue(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-panel-niveau-2
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    interface IConfigBoutonPanelNiv2 {
        label: string;
        action: Function;
    }
    /**
     * Classe du controleur
     */
    class PfPanelNiveau2Controleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        configBouton: IConfigBoutonPanelNiv2;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
    }
}

/**
 * Directive pf-panel-niveau-2
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfPanelNiveau2(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-tuile-indicateur
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfTuileIndicateurControleur {
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: any[];
        type: Enum.Indicateur.TYPE;
        intitule: string;
        valeur: string;
        valeurNumber: number;
        isEuro: boolean;
        icone: string;
        /**
         * Constructeur
         */
        constructor();
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Méthode permettant de savoir si valeurNumber est defini
         * utilisé par l'IHM
         * @returns {void}
         */
        valeurNumberDefini(): boolean;
        isGreen(): boolean;
        isOrange(): boolean;
        isTypeDate(): boolean;
        isTypeMontant(): boolean;
        isTypeNombre(): boolean;
        isTypePourcent(): boolean;
        isTypeTexte(): boolean;
        isTypeBegacli(): boolean;
    }
}

/**
 * Directive pf-tuile-indicateur
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfTuileIndicateur(): ng.IDirective;
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service de gestion des indicateurs
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe IndicateurService
     */
    interface IBegacliService {
        getExpReguliere(): string;
        getFiltreBegacli(): Modeles.Application.IFiltreBegacli;
        getFiltreBegacliTexte(filtre: Modeles.Application.IFiltre): any;
        getCasesCochees(): boolean;
        setCasesDecochees(): any;
        completerUniversBegacli(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale): Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        completerUniversBegacliClient(client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de choix EDS
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe EventService
     */
    interface IChoixEdsService {
        getCaracteristiquesAgent(agent: MyWay.Model.Agent): ng.IPromise<Modeles.Application.ICaracteristiquesAgent>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de choix Utilisateur
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe ChoixUtilisateurService
     */
    interface IChoixUtilisateurService {
        rechercherListeAgence(identifiantEds: number): ng.IPromise<Array<Modeles.Application.IAgenceEds>>;
        rechercherAgent(identifiantEdsAgence: number): ng.IPromise<Array<Modeles.Application.ICaracteristiquesAgent>>;
        rechercherEdsInferieurs(edsAgence: Modeles.Application.IAgenceEds): ng.IPromise<Modeles.Application.IAgenceEds>;
        edsSelectionne: Modeles.Application.IAgenceEds;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
    /**
     * Service contenant des méthodes utiles pour gérer le contexte applicatif
     * @author: S0005354
     */
    interface IContexteService {
        /**
         * Chargement contexte habilitation
         *  -> données d'authentification
         *  -> Habilitations
         *  -> Données délocalisées
         */
        getContexte(): ng.IPromise<Modeles.Application.IContexte>;
        getAuthentification(): ng.IPromise<MyWay.Services.Context.AuthentificationInfo>;
        getDesignation(): string;
        ajoutPourDebranchementSyntheseClient(identifiantPersonne: string, typeSynthese: string): ng.IPromise<any>;
        ajouterDonneesDebranchementSyntheseClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille, typeSynthese: string): ng.IPromise<any>;
        ajouterDonneesDebranchementRevueClient(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        recupererRetourDebranchement(): ng.IPromise<Modeles.Application.IContexteGererPortefeuille>;
        supprimerContexteDevenuInutile(listeClesAEffacer: Array<string>): ng.IPromise<void>;
        ajouterDonneesDebranchementBilanRevueRelationEco(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        ajouterDonneesDebranchementBilanRevuePortefeuille(contexteGererPortefeuille: Modeles.Application.IContexteGererPortefeuille): ng.IPromise<void>;
        setEdsVisu(edsVisu: number): void;
        setestVueMultiSuiviPar(estVueMultiSuiviPar: boolean): void;
        isPCM(): ng.IPromise<boolean>;
        tracerSuiviAction(logger: MyWay.Services.Loggers.ILogger, action: string): void;
        tracerSuiviActionPromise(action: string): ng.IPromise<number>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion d'événement
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe EventService
     */
    interface IEventService {
        setPfDiagrammeDonutControleur(pfDiagrammeDonutControleur: Controleurs.PfDiagrammeDonutControleur): void;
        initialiserPfDiagrammeDonutControleur(): void;
        setPfLigneRelationEcoControleur(pfLigneRelationEcoControleur: Controleurs.PfLigneRelationEcoControleur): void;
        reInitialiserLigneRelationEcoPfLigneRelationEcoControleur(listeIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void;
        setClientsControleur(clientsControleur: Controleurs.ClientsControleur): void;
        filtrageTableauClientClientsControleur(idRelationFiltre: string): void;
        setIndexControleur(indexControleur: Controleurs.IndexControleur): void;
        setChoixPortfeuilleControleur(choixPortfeilleControleur: Controleurs.PfChoixPortefeuilleControleur): void;
        initialiserListePortfeuilleIndexControleur(): ng.IPromise<void>;
        initialiserHabilitationChoixAgentIndexControleur(estHabilite: boolean): void;
        initialiserHabilitationChoixEDSIndexControleur(estHabilite: boolean): void;
        ouvrirVoletChoixPortefeuilleIndexControleur(): void;
        initialiserListeRelationEtClient(typeForcage: Enum.PageClients.TYPE_FORCAGE): ng.IPromise<void>;
        supprimerTousLesFiltresClientsControleur(): void;
        setPortefeuilleControleur(portefeuilleControleur: Controleurs.PortefeuilleControleur): void;
        initialiserVueGlobale(): ng.IPromise<void>;
        reinitInitStatsVueGlobale(): void;
        majDonneesDonneesEdsIndexControleur(edsChoisi: Modeles.Application.ICaracteristiquesAgent, contexte: Modeles.Application.IContexte, listePtfActifs: Array<number>): ng.IPromise<void>;
        initListePortefeuilles(): ng.IPromise<void>;
        chargerListePortefeilleDropDown(): void;
        setEstVueMultiGererPar(etat: boolean): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de choix EDS
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Service permettant de gerer le choix EDS
     */
    class ExportService {
        private serviceAgent;
        private mwNotificationService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * Export du tableau affiché dans un fichier CSV
         * @param tableauExport Le tableau à exporter
         * @param nomFichier Le nom du fichier d'export (la date sera ajoutée à la fin du nom indiqué)
         */
        private exporterCSV(tableauExport, nomFichier);
        /**
         * Formatage CSV
         * @param pContenu
         */
        private chargerDonneesTableau(pContenu);
        /**
         *
         * @param listeEntetes
         * @param donneesExport
         * @param fichierExport
         */
        genererFichierExport(listeEntetes: Array<string>, donneesExport: Array<Array<string | number> | Object>, fichierExport: string): ng.IPromise<void>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service de gestion des filtres
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe FiltreService
     */
    interface IFiltreService {
        filtrerListeClients(listeDeClient: Array<Modeles.Application.IClient>, listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IClient>;
        filtrerListeRelationsEco(listeRelationsEco: Array<Modeles.Application.IRelationEconomique>, listeFiltres: Array<Modeles.Application.IFiltre>): Array<Modeles.Application.IRelationEconomique>;
        majFiltresClientNouveauxIndicateurs(listeFiltres: Array<Modeles.Application.IFiltre>, listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>, listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>, listeClients: Array<Modeles.Application.IClient>): void;
        majFiltresRelationEcoNouveauxIndicateurs(listeFiltres: Array<Modeles.Application.IFiltre>, listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>, listeIndicateursFiltre: Array<Modeles.Application.IIndicateurFiltre>, listeRelationEco: Array<Modeles.Application.IRelationEconomique>): void;
        razFiltresRelationEco(): void;
        razFiltresClient(): void;
        ajouterFiltre(listeFiltres: Array<Modeles.Application.IFiltre>, setDefaultEt: boolean): void;
        setFiltresRelationsEco(listeFiltresRelationsEco: Modeles.Application.IFiltre[]): void;
        setFiltresClients(listeFiltresClients: Modeles.Application.IFiltre[]): void;
        getFiltresRelationsEco(): Modeles.Application.IFiltre[];
        getFiltresClients(): Modeles.Application.IFiltre[];
        majAndGetFiltresClientsAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[];
        majAndGetFiltresRelationsEcoAvecListeIndicateursDispo(listeIndicateursChoix: Modeles.Application.IIndicateurChoix[]): Modeles.Application.IFiltre[];
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif des habilitations
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe HabilitationService
     */
    interface IHabilitationService {
        setHabiliteAgenceNiveau2(estHabilite: boolean): void;
        estHabiliteAgenceNiveau2(): boolean;
        setHabiliteAccesPNB(estHabilite: boolean): void;
        estHabiliteAccesPNB(): boolean;
        setHabiliteConsultRevue(estHabilite: boolean): void;
        estHabiliteConsultRevue(): boolean;
        setHabiliteMajRevue(estHabilite: boolean): void;
        estHabiliteMajRevue(): boolean;
        setHabiliteConsultAffaires(estHabilite: boolean): void;
        estHabiliteConsultAffaires(): boolean;
        setHabiliteConsultPropositions(estHabilite: boolean): void;
        estHabiliteConsultPropositions(): boolean;
        setHabiliteConsultPotentielProspect(estHabilite: boolean): void;
        estHabiliteConsultPotentielProspect(): boolean;
        setHabiliteConsultSegmentations(estHabilite: boolean): void;
        estHabiliteConsultSegmentations(): boolean;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion de l'ihm
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe EventService
     */
    interface IIhmService {
        getTypeVue(): Enum.PageClients.TYPE_VUE;
        setTypeVue(type: Enum.PageClients.TYPE_VUE): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion de l'indicateur fleche
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe IndicateurFlecheService
     */
    interface IIndicateurFlecheService {
        getConfigIndicateurFleche(valeur: number): Portefeuille.Modeles.Application.IConfigIndicateurFleche;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service de gestion des indicateurs
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe IndicateurService
     */
    interface IIndicateurService {
        getListeTotaleIndicateursType(): Array<Modeles.Application.IIndicateurType>;
        getListeIndicateurChoix(): Array<Modeles.Application.IIndicateurChoix>;
        setListeIndicateurChoix(liste: Array<Modeles.Application.IIndicateurChoix>): void;
        getListeEcartIndicateurParametrable(liste: Array<Modeles.Application.IIndicateurChoix>): Array<Modeles.Application.IIndicateurType>;
        getPanierDeForcage(): Modeles.Application.IPanierPreferences;
        getListeIndicateursRevue(): Array<Modeles.Application.IIndicateurChoix>;
        getIndicateurIListeIndicateur(objet: Modeles.Application.IListeIndicateur, codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur;
        getIndicateur(listeIndicateurs: Array<Modeles.Application.IIndicateur>, codeIndicateur: Enum.Indicateur.CODE): Modeles.Application.IIndicateur;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
    /**
     * service d'initialisation de l'application
     */
    class InitialisationApplicationService {
        private $rootScope;
        private serviceAgentExtended;
        private $q;
        private $location;
        private contexteService;
        private popupService;
        private eventService;
        private habilitationService;
        private preferencesService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        promesseInitialisation: boolean;
        private static LISTE_HABILITATION;
        private static SERVICE_AGENT_INIT;
        constructor($rootScope: ng.IRootScopeService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService, $location: ng.ILocationService, contexteService: Services.Application.IContexteService, popupService: Services.Application.IPopupService, eventService: Services.Application.IEventService, habilitationService: Services.Application.IHabilitationService, preferencesService: Services.Application.IPreferencesService);
        /**
         * Initialisation des services
         */
        initialisation(): ng.IPromise<void>;
    }
    /**
     * Interface de la classe InitialisationService
     */
    interface IInitialisationService {
        initialisation(): ng.IPromise<void>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe LisaApplication
     */
    interface ILisaApplication {
        next(valeurSortie: number, urlLocal: string): ng.IPromise<void>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe ListeClientsService
     */
    interface IListeClientsService {
        getListeRelationsEconomiques(identifiantEds: number, listePortefeuilles: Array<Modeles.Application.IPortefeuille>, typeForcage: Enum.PageClients.TYPE_FORCAGE, listeIndicateursTableau: Array<Modeles.Application.IIndicateurChoix>, isAccesDepuisBlocRevue: boolean, listeCodeSuiviParComplementaire?: string[]): ng.IPromise<Array<Modeles.Application.IRelationEconomique>>;
        getListeIndicateursFiltre(): Array<Modeles.Application.IIndicateurFiltre>;
        getListeIndicateursRelationEcoFiltre(): Array<Modeles.Application.IIndicateurFiltre>;
        getListePortefeuillesAvecLimite(): Array<Modeles.Application.IPortefeuille>;
        razRelations(): void;
        majClientsIndicateurs(listeIndicateurARecuperer: Array<Modeles.Application.IIndicateurType>): ng.IPromise<void>;
        getListeRelationsEconomiquesCache(): Array<Modeles.Application.IRelationEconomique>;
        ordonnerListeClientsAvecLeader(listeClients: Array<Modeles.Application.IClient>): Array<Modeles.Application.IClient>;
        getEstLimiteClientsAtteinte(): boolean;
        initialiserEstLimiteClientsAtteinte(identifiantEds: number): void;
        getAffichageModificationChoix(): boolean;
        setAffichageModificationChoix(valeur: boolean): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service Permettant l'usage d'un mock
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe EventService
     */
    interface IMockService {
        ajouterLeader(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale): Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        ajouterObjectif(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale): Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        ajouterEncoursBDF(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale): Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        ajouterBegacli(relationCommerciale: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale): Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale;
        ajouterBouchonIndicateurClient(query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree, code: string, client: Modeles.Rest.PortefeuilleV1.client.IClient): Modeles.Rest.PortefeuilleV1.client.IClient;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion du drag and drop
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe ModalePaniersService
     */
    interface IModalePaniersService {
        setModalePaniersControleur(modalePaniersControleur: Controleurs.ModalePaniersControleur): void;
        setSelectionIndicateursControleur(selectionIndicateursControleur: Controleurs.SelectionIndicateursControleur): void;
        activerDropPanier(): void;
        desactiverDropPanier(): void;
        activerDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void;
        desactiverDropTuilesPanier(listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>): void;
        afficherDropPoubelle(): void;
        cacherDropPoubelle(): void;
        afficherBoutonValider(): void;
        cacherBoutonValider(): void;
        rafraichirListeTuileCatalogueSettings(): void;
        rendreCompatibleTuilesAvecDragAndDrop(): void;
        creerDragSettings(tuileCatalogueSettings: Modeles.Application.ITuileCatalogueSettings): Modeles.Application.IDragSettings;
        creerDropSettings(event: (donnees: any) => void): Modeles.Application.IDropSettings;
        supprimerIndicateurPanier(tuilePanierSettings: Modeles.Application.ITuilePanierSettings, listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>, listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>, listeFiltresClients: Array<Modeles.Application.IFiltre>, listeFiltresRelationEco: Array<Modeles.Application.IFiltre>): void;
        copierListe(liste: Array<any>): Array<any>;
        afficherMessageAvertissementFiltre(listeFiltresRelationEco: Array<Modeles.Application.IFiltre>, listeFiltresClients: Array<Modeles.Application.IFiltre>, listeChoixIndicateurs: Array<Modeles.Application.IIndicateurChoix>): void;
        genererIdentifiantAleatoire(): number;
        majEstEditionPanier(val: boolean): void;
        getEstEditionPanier(): boolean;
    }
}

declare module Portefeuille.Services.Application {
    /**
     * Service de génération d'un fichier CSV à partir d'un tableau
     */
    class CsvService {
        private $q;
        private $parse;
        private $window;
        private $document;
        private $timeout;
        static EOL: string;
        static BOM: string;
        static SPECIAL_CHARS: {
            "\\t": string;
            "\\b": string;
            "\\v": string;
            "\\f": string;
            "\\r": string;
        };
        static DEFAULT_OPTIONS: ICsvOptions;
        static $inject: string[];
        constructor($q: ng.IQService, $parse: ng.IParseService, $window: ng.IWindowService, $document: ng.IDocumentService, $timeout: ng.ITimeoutService);
        /**
         * @ngdoc method
         * @name myway.tools.service:mwsfAdresseService#downloadCsv
         * @methodOf myway.tools.service:mwCsvService
         * @param {any[]} data Tableau de données
         * @param {Myway.Tools.ICsvOptions} options Configuration du fichier csv
         * @description
         * Création et téléchargement d'un fichier csv à partir du tableau passé en paramètre.
         * Le tableau doit être un objet simple sans sous-objets puisque ces derniers ne sont pas gérés.
         * Les options sont toutes détaillées dans l'interface dédiée.
         *
         * #Configuration
         * La configuration fonctionne par surcharge, il faut donc indiquer ce qui diffère de la configuration par défaut.
         * <pre class="prettyprint">
         *   header: [ "Nom", "Prénom", "Age" ],
         *   columnOrder: ["nom", "prenom", "age" ],
         *   filename: "personnes.csv"
         * </pre>
         *
         * ##Configuration par défaut du fichier csv:
         * <pre class="prettyprint">
         *   txtDelimiter: "\"",
         *   decimalSeparator: ",",
         *   quoteStrings: true,
         *   addByteOrderMarker: true,
         *   fieldSeparator: ";",
         *   charset: "utf-8",
         *   label: false,
         *   filename: "export.csv"
         * </pre>
         * @returns {Promise<any>} Promesse résolue lorsque le téléchargement est lancé ou rejetée en cas d'erreur.
         */
        downloadCsv(header?: any[], data?: any[], options?: ICsvOptions): ng.IPromise<any>;
        /**
         * Get options
         */
        private getOptions(options?);
        /**
         * Creates a csv from a data array
         */
        private stringify(header, data, options?);
        /**
         * Helper function to check if input is really a special character
         */
        isSpecialChar(input: string): boolean;
        /**
         * Helper function to get what the special character was supposed to be since Angular escapes the first backslash
         */
        getSpecialChar(input: string): string;
        /**
         * Stringify one field
         */
        private stringifyField(data, options);
        /**
         * Helper function to check if input is float
         */
        private isFloat(input);
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
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
        showModal(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalMd(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalLg(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
        showModalFull(templateUrl: string, controllerName: string, templateDatas: Modeles.Application.IPopupData<any>): ng.IPromise<any>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe PortefeuilleService
     */
    interface IPortefeuilleService {
        getListePortefeuilleAgentConnecte(): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        getListePortefeuilleAgentChoisi(edsChoisi: Modeles.Application.ICaracteristiquesAgent): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        getListePortefeuilleEDSChoisi(codeEtablissement: string, edsChoisi: number): ng.IPromise<Modeles.Application.IPortefeuille[]>;
        setListePortfeuillesVisu(portfeuilles: Modeles.Application.IPortefeuille[]): ng.IPromise<void>;
        getListePortefeuillesVisu(): Array<Modeles.Application.IPortefeuille>;
        getListeCodeSuiviParComplementairePortefeuillesExpertVisu(): string[];
        getListeLibelleSuiviParComplementairePortefeuillesExpertVisu(): string[];
        aPortefeuillesAffiche(): boolean;
        aPortefeuillesReelAffiche(): boolean;
        getCaracteristiquesAgent(): Modeles.Application.ICaracteristiquesAgent;
        setCaracteristiquesAgent(caracteristiquesAgent: Modeles.Application.ICaracteristiquesAgent): void;
        getCaracteristiquesAgentConnecte(): ng.IPromise<Modeles.Application.ICaracteristiquesAgent>;
        aPortefeuille(): boolean;
        getListePortefeuillesActifs(): Array<Modeles.Application.IPortefeuille>;
        setListePortefeuillesActifs(listePtfActifs: Array<number>): void;
        setTypeForcage(typeForcage: Enum.PageClients.TYPE_FORCAGE): void;
        getTypeForcage(): Enum.PageClients.TYPE_FORCAGE;
        regrouperPortfeuilleParAgent(listePortefeuilles: Array<Modeles.Application.IPortefeuille>): Array<Modeles.Application.IAgent>;
        regrouperToutPortfeuille(listPortfeuilleParAgent: Array<Modeles.Application.IAgent>): Array<Modeles.Application.IPortefeuille>;
        aSuiviParComplementaire(): boolean;
        aPortefeuilleReel(): boolean;
        aPortefeuilleExpertAffiche(): boolean;
        nbPortefeuilleReel(): number;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion d'événement
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Service de gestion des préférences IHM MyWay via le service serviceAgent.Preferences
     */
    class PreferencesService implements IPreferencesService {
        private serviceAgent;
        private indicateurService;
        private preferenceUtilisateurRestService;
        private contexteService;
        private $q;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        listePaniersPreference: Array<Modeles.Application.IPanier>;
        /**
         * Constructeur
         */
        constructor(serviceAgent: MyWay.Services.ServiceAgent, indicateurService: Services.Application.IIndicateurService, preferenceUtilisateurRestService: Services.Rest.PreferenceUtilisateur.IPreferenceUtilisateurService, contexteService: Services.Application.IContexteService, $q: ng.IQService);
        /**
         * Permet de completer les paniers manquants
         */
        completerCreationPaniers(): ng.IPromise<void>;
        /**
         * Permet d'ecrire les preferences de portefeuilles affiches
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {MyWay.Services.IPromesse<void>}
         */
        ecrireChoixPortefeuilles(portefeuilles: Array<Modeles.Application.IPortefeuille>): ng.IPromise<void>;
        /**
         * Permet de lire une liste d'identifiants portefeuilles selectionnes provenant des préférences
         * @returns {Array<number>}
         */
        lireChoixPortefeuilles(): ng.IPromise<Array<number>>;
        /**
         * Permet de convertir la liste des portefeuilles en liste d'identifiants correspondant aux portefeuilles selectionnes
         * @param {Array<Modeles.Application.IPortefeuille>} portefeuilles
         * @returns {Array<number>}
         */
        convertirListePortefeuilleEnPreference(portefeuilles: Array<Modeles.Application.IPortefeuille>): Array<number>;
        /**
         * Permet d'écrire un panier dans les préférences
         * @param {Array<Modeles.Application.IPanier>} liste des paniers
         * @returns {MyWay.Services.IPromesse<void>}
         */
        ecrirePaniers(paniers: Array<Modeles.Application.IPanier>): ng.IPromise<void>;
        /**
         * permet de récupérer la liste des paniers provenant des préférence
         * @param {Array<Modeles.Application.IIndicateurType>} listeTotaleIndicateurs
         * @return {Array<Modeles.Application.IPanier>} liste des paniers en préférence
         */
        lirePaniers(listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>, sansMajListeIndicateursChoix?: boolean): ng.IPromise<Array<Modeles.Application.IPanier>>;
        /**
         * Permet de lire un panier provenant des préférences
         * @param {Array<Modeles.Application.IIndicateurType>} listeTotaleIndicateurs
         * @returns {Modeles.Application.IPanier}
         */
        lirePanierDefaut(listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): ng.IPromise<Modeles.Application.IPanier>;
        /**
         * Permet de convertir un panier applicatif en panier pour les préférences
         * @param {Array<Modeles.Application.IIndicateurChoix>} listeIndicateursChoix
         * @param {number} numeroPanier
         * @returns {Modeles.Application.IPanierPreferences}
         */
        convertirPanierApplicatifEnPreference(listeIndicateursChoix: Array<Modeles.Application.IIndicateurChoix>, numeroPanier: number, nomPanier: string, estDefautPanier: boolean): Modeles.Application.IPanierPreferences;
        /**
         * Permet de convertir un panier provenant des préférences en panier applicatif
         * @param {Modeles.Application.IPanierPreferences} panierPreference
         * @returns {Modeles.Application.IPanier}
         */
        convertirPanierPreferenceEnApplicatif(panierPreference: Modeles.Application.IPanierPreferences, listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): Modeles.Application.IPanier;
        /**
         * Permet de recupérer une préférence
         * @param {string} cle
         * @returns {ng.IPromise<any>}
         */
        private lirePreference(cle);
    }
    /**
     * Interface de la classe PreferencesService
     */
    interface IPreferencesService {
        ecrirePaniers(paniers: Array<Modeles.Application.IPanier>): ng.IPromise<void>;
        lirePanierDefaut(listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>): ng.IPromise<Modeles.Application.IPanier>;
        lirePaniers(listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>, sansMajListeIndicateursChoix?: boolean): ng.IPromise<Array<Modeles.Application.IPanier>>;
        ecrireChoixPortefeuilles(portefeuilles: Array<Modeles.Application.IPortefeuille>): ng.IPromise<void>;
        lireChoixPortefeuilles(): ng.IPromise<Array<number>>;
        convertirPanierPreferenceEnApplicatif(panierPreference: Modeles.Application.IPanierPreferences, listeTotaleIndicateurs: Array<Modeles.Application.IIndicateurType>, nomPanier: string, estDefautPanier: boolean): Modeles.Application.IPanier;
        completerCreationPaniers(): ng.IPromise<void>;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Service applicatif de gestion des donnees de la vue globale présentant les statistiques des portefeuilles selectionnes
 * @module Portefeuille.Services.Application
 */
declare module Portefeuille.Services.Application {
    /**
     * Interface de la classe StatsService
     */
    interface IStatsService {
        getStatsRentabilite(): ng.IPromise<Modeles.ApplicationStats.IRentabilite>;
        getStatsRdvEtPortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf>;
        getStatsRevuePortefeuille(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille>;
        getStatsListeEds(): ng.IPromise<void>;
        getClientsAActiver(codeEtablissement: string, identifiantElementStructure: number, listeIdentifiantPortefeuille?: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>>;
        getClientsARenegocier(codeEtablissement: string, identifiantElementStructure: number, listeIdentifiantPortefeuille?: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IClientSimplifie>>;
        getStatsFluxMouvementFinancier(listeIdentifiantPortefeuille: Array<number>, listeIdentifiantRelationEco: Array<number>): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>>;
        getStatsRentabiliteEds(): ng.IPromise<Modeles.ApplicationStats.IRentabilite>;
        getStatsRdvEtPortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRdvPtf>;
        getStatsRevuePortefeuilleEds(): ng.IPromise<Modeles.ApplicationStats.IRevuePortefeuille>;
        getStatsFluxMouvementFinancierEds(): ng.IPromise<Array<Modeles.ApplicationStats.IFlux>>;
        getStatsDetail(): Modeles.ApplicationStats.IDetailPtf;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.LibrairieD3 {
    interface IConfigDonutD3 {
        titre: string;
        donutChoisi: string;
        degrade: DEGRADE_DONUT;
        nombreClients: string;
        listeDonnees: Array<IDonneeFluxD3>;
    }
    interface IDonneeFluxD3 {
        nom: string;
        pourcentage: number;
    }
    enum DEGRADE_DONUT {
        BLEU,
        ROSE,
        GRIS,
    }
    interface ICreationDonutService {
        creerDonut(config: IConfigDonutD3, id: string): void;
        getCouleurDegrade(degrade: DEGRADE_DONUT): any;
        viderDonut(): void;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.LibrairieD3 {
    interface IConfigPourcentageD3 {
        titre: string;
        pourcentageUn: number;
        degrade: DEGRADE_POURCENTAGE;
        pourcentageDeux?: number;
        nombreUn?: number;
        nombreDeux?: number;
        legende?: string;
        id?: string;
    }
    enum DEGRADE_POURCENTAGE {
        ORANGE,
        VERT,
        VIOLET,
        BLEU,
    }
    interface ICreationPourcentageService {
        creerPourcentage(data: IConfigPourcentageD3, id: string): any;
    }
}

/// <reference path="../../constantes/inject-constantes.d.ts" />
/**
 * Controleur pour la directive pf-tuile-panier
 * @module portefeuille.Controleurs
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Controleurs {
    /**
     * Classe du controleur
     */
    class PfTuilePanierControleur {
        private $scope;
        private $element;
        private modalePaniersService;
        static CLASS_NAME: string;
        static logger: MyWay.Services.Loggers.ILogger;
        static $inject: string[];
        tuilePanierSettings: Modeles.Application.ITuilePanierSettings;
        listeTuileCatalogueSettings: Array<Modeles.Application.ITuileCatalogueSettings>;
        listeTuilePanierSettings: Array<Modeles.Application.ITuilePanierSettings>;
        listeFiltresClients: Array<Modeles.Application.IFiltre>;
        listeFiltresRelationEco: Array<Modeles.Application.IFiltre>;
        configTuile: MyWay.UI.iMwConfigTuile;
        /**
         * Constructeur
         */
        constructor($scope: ng.IScope, $element: ng.IAugmentedJQuery, modalePaniersService: Services.Application.IModalePaniersService);
        /**
         * Méthode permettant d'initialiser le composant
         * @returns {void}
         */
        private initialiser();
        /**
         * Variable contenant la méthode a appelé avant que le dragStart commence
         */
        private dragStartBeforeEvent;
        /**
         * Variable contenant la méthode a appelé avant que le dragEnd commence
         */
        private dragEndBeforeEvent;
        /**
         * Variable contenant la méthode a appelé lorsqu'un indicateur est déposé sur un indicateur du panier
         */
        indicateurPanierDeposeEvent: (tuileSettings: any) => void;
        /**
         * Méthode permettant de gérer l'affichage ou non du marquage de la tuile
         * @returns {boolean}
         */
        afficherMarquage(): boolean;
        /**
         * Méthode permettant de gérer le nom du marquage de la tuile
         * @returns {string}
         */
        nomMarquage(): string;
        /**
         * Méthode permettant de gérer la couleur de la tuile
         * @returns {string}
         */
        couleur(): string;
        /**
         * Méthode permettant de gérer le click sur la poubelle d'une tuile
         * @returns {void}
         */
        supprimer(): void;
        /**
         * Méthode permettant de gérer le click sur la flèche gauche d'une tuile
         * @returns {void}
         */
        deplacerAGauche(): void;
        /**
         * Méthode permettant de gérer le click sur la flèche droite d'une tuile
         * @returns {void}
         */
        deplacerADroite(): void;
        /**
         * Méthode permettant d'afficher ou non la fléche gauche
         * @returns {boolean}
         */
        afficherFlecheGauche(): boolean;
        /**
         * Méthode permettant d'afficher ou non la fléche droite
         * @returns {boolean}
         */
        afficherFlecheDroite(): boolean;
        /**
         * Retour le libelle famille sur de la tuile
         * @return {string} libelle de la famille
         */
        famille: string;
    }
}

/**
 * Directive pf-tuile-panier
 * @module portefeuille.Directives
 * @author S0078068 (Yannis Vessereau)
 */
declare module Portefeuille.Directives {
    /**
     * Méthode permettant de déclarer la directive
     * @return {ng.IDirective} La directive créée
     */
    function mwPfTuilePanier(): ng.IDirective;
}

declare module Portefeuille.Services.Utils {
    class ApplicationUtils {
        /**
         *
         */
        static recupererNouvelleSelection(): Modeles.Application.IPanier;
        /**
         * Méthode de vérification sur une string pour voir si celle ci correspond à un nom par défaut de création de sélection
         * @param nomSelection
         */
        static estOkNomSelection(nomSelection: string): boolean;
        static recupererPanierDefaut(listePanier: Array<Modeles.Application.IPanier>): Modeles.Application.IPanier;
        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        static calculerHauteurRelativeColonne(valeurMax: number, valeur: number, isPresenceSousValeur?: boolean): number;
        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        static calculerHauteurRelativeColonneSousValeur(valeurMax: number, valeur: number, sousValeur: number): number;
        /**
         * Méthode retournant le pourcentage représenté par "valeur" par rapport à "valeurMax".
         * @param valeurMax
         * @param valeur
         * @returns {number}
         */
        static calculerHauteurRelativeColonneValeur(valeurMax: number, valeur: number, sousValeur: number): number;
        /**
         * Permet de calculer la hauteur de la colonne client actif (par rapport au nombre de client actif)
         * @param valeurMax
         * @param nombreClient
         * @param nombreClientActif
         */
        static calculerHauteurRelativeColonneClient(valeurMax: number, nombreClient: number, nombreClientActif: number): number;
        /**
         * Permet de calculer la hauteur de la colonne client actif (par rapport au nombre de client total)
         * @param valeurMax
         * @param nombreClientActif
         * @param nombreClient
         */
        static calculerHauteurRelativeColonneClientActif(valeurMax: number, nombreClientActif: number, nombreClient: number): number;
        /**
         *
         * @param data
         */
        static getPortefeuilleDepuisDonneeSignifiante(data: Modeles.Rest.PortefeuilleV1.recherche.IDonneeSignifiante): Modeles.Application.IPortefeuille;
        /**
         *
         * @param data
         */
        static getPortefeuilleDepuisListePortefeuille(data: Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleInfo): Modeles.Application.IPortefeuille;
        /**
         *
         * @param indicRest
         */
        static getIndicateur(indicRest: Modeles.Rest.PortefeuilleV1.client.IIndicateur): Modeles.Application.IIndicateur;
        /**
         *
         */
        static formaterPotentielProspect(valeur: string): string;
        /**
         * 23/02/2022 Top_CC
         */
        static formaterTopCC(valeur: string): string;
        /**
         * 23/02/2022 : Mettre dans valeurNumber l'index de la valeur TOP CC du tableau constant
         */
        static ValeurNumberTopCC(valeur: string): number;
        static segmentationsBDR: Array<any>;
        static getLibelleSegmentationRelationnelle(codeSeg: string): string;
        /**
         *
         * @param statsPtf
         */
        static getStatsPortefeuilleAppDepuisRest(statsPtf: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille): Modeles.ApplicationStats.IRdvPtf;
        static getStatsRentabiliteAppDepuisRest(statsRest: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IInfoPnb): Modeles.ApplicationStats.IRentabilite;
        static getStatsRevueAppDepuisRest(statsRest: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue): Modeles.ApplicationStats.IRevuePortefeuille;
        /**
         *
         * @param statsRest
         */
        static getStatsRevueAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IRevuePortefeuille;
        /**
         *
         * @param statsRest
         */
        static getStatsRentabiliteAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IRentabilite;
        /**
         *
         * @param statsRest
         */
        static getStatsPortefeuilleAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IRdvPtf;
        /**
         *
         * @param statsRest
         */
        static getStatsFluxFinancierPortefeuilleAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Array<Modeles.ApplicationStats.IFlux>;
        /**
         *
         * @param statsRest
         */
        static getStatsDetailPortefeuilleAppDepuisRestGlobal(statsRest: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): Modeles.ApplicationStats.IDetailPtf;
        /**
         * Fonction permettant de generer un identifiant aléatoire
         * @returns {number}
         */
        static genererIdentifiantAleatoire(): number;
        /**
         * Agglomère les segmentations Pro reçues du service Rest en fonction des codes segmentation
         * @param listeSegmentationProRest
         */
        static agglomererSegmentationPro(listeSegmentationProRest: Array<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.ISegmentationRelationnellePro>): Array<Modeles.ApplicationStats.ISegmentationRelationnelle>;
        /**
         * Retourne une config de donut selon le type de donut souhaité et les stats passés en paramètre
         * @param typeDonutSouhaite
         * @param statsRdvEtPortefeuille
         */
        static getConfigDonutSelonType(typeDonutSouhaite: string, statsRdvEtPortefeuille: Modeles.ApplicationStats.IRdvPtf): Services.LibrairieD3.IConfigDonutD3;
        /**
         *
         * @param typeDonutSouhaite
         */
        static getConfigDonutD3(typeDonutSouhaite: string): Services.LibrairieD3.IConfigDonutD3;
        /**
         * Retourne les données affichées dans un donut à partir d'une liste de segmentation relationnelle
         * @param listeSegmentation
         */
        static alimenterListeDonneesConfigDonut(listeSegmentation: Array<Modeles.ApplicationStats.ISegmentationRelationnelle>): Array<LibrairieD3.IDonneeFluxD3>;
        /**
         *  Déduit si le navigateur est un Internet Explorer
         */
        static isIE(): boolean;
    }
}

declare module Portefeuille.Services.Utils {
    /**
     *
     */
    class DataUtils {
        /**
         *
         * @param inStr
         */
        static formatterPascaleCase(inStr: string): string;
        /**
         *
         * @param code
         */
        static setONToBoolean(code: string): boolean;
        /**
         *
         * @param code
         */
        static getEstLeaderDepuisCodeLeader(code: string): boolean;
        /**
         *
         * @param indicClientProspect
         */
        static getEstClientDepuisIndicateur(indicClientProspect: Modeles.Application.IIndicateur): boolean;
        /**
         *
         * @param indicClientActif
         */
        static getEstActifDepuisIndicateur(indicClientActif: Modeles.Application.IIndicateur): boolean;
        /**
         *
         * @param code
         */
        static setStrToActifInactif(code: string): string;
        /**
         *
         * @param code
         */
        static setStrToSansContrat(code: string): string;
        /**
         *
         * @param code
         */
        static setStrToLeader(code: string): string;
        /**
         *
         * @param code
         */
        static setStrToClientProspectVide(code: string): string;
        /**
         *
         * @param num
         * @param size
         */
        static lPad(num: number, size: number): string;
        /**
         *
         * @param val
         */
        static booleanToOuiNon(val: boolean): string;
        /**
         *
         * @param val
         */
        static formatDateIhm(val: string): string;
        /**
         *
         * @param val
         * @param unite
         */
        static formatMontant(val: number): string;
        /**
         * utilisé pour afficher le filtre
         * @param val
         */
        static formatPourcent(val: number): string;
        /**
         * retitue un nombre entier au format du pays locale
         * @param val Valeur à affiché
         */
        static formatNombre(val: number): string;
        /**
         *
         * @param dateRest
         */
        static strDateRestToDate(dateRest: string): Date;
        /**
         *
         * @param codeCivilite
         */
        static determinerLibelleCivilite(codeCivilite: string): string;
        /**
         *
         * @param dateFormatString
         */
        static formaterDateValide(dateFormatString: string): Date;
        static getTexteCA(client: Modeles.Application.IClient, code: String): string;
        /**
         *
         * @param client
         * @param code
         */
        static getTexteDate(client: Modeles.Application.IClient, code: string): string;
        /**
         *
         * @param nombre
         */
        static formaterMontantkiloText(nombre: number): string;
    }
}

declare module Portefeuille.Modeles.Rest.AgentV2.gestionAffectation {
    interface IGestionAffectation {
        /**
         * Code Etablissement de l’agent connecté.
         */
        codeEtablissement: string;
        /**
         * Code de l'agent connecté.
         */
        codeAgent: string;
        /**
         * Identifiant Elément de Structure de l’agent connecté.
         */
        identifiantEDS: number;
        /**
         * Code de l'agent à affecter.
         */
        codeAgentAffectation: number;
        listeGestionAffectationAgent: Array<IGestionAffectationAgent>;
        listeGestionAffectationAgentAvM: Array<IGestionAffectationAgentAvM>;
    }
    interface IGestionAffectationAgent {
        /**
         * Identifiant interne du Poste Fonctionnel de l'agent affecté.
         */
        identifiantEDSAffectation: number;
        /**
         * Identifiant interne de l'EDS de rattachement temporaire de l'agent
         */
        identifiantEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement temporaire de l'agent
         */
        libelleEDSRattachement: string;
        /**
         * Il détermine le type d'affectation d'un agent à un Elément de Structure. Cette typologie spécifique à chaque Etablissement.
         * Valeurs :
         * - 'AG' : AFFECTATION GEOGRAPHIQUE
         * - 'MA' : MULTI AFFECTATION
         * - 'MN' : MANAGEMENT
         * - 'R1' : RENFORT COMMERCIAL
         * - 'R2' : REMPLACEMENT FORMATION
         * - 'R3' : REMPLACEMENT CONGES
         * - 'R4' : REMPLACEMENT MALADIE
         */
        typeAffectation: string;
        /**
         * Il détermine la fonction (métier) associée au poste fonctionnel. Cette typologie est spécifique à chaque Etablissement.
         * Exemples :
         * - 072 : CHARGE DE CLIENTELE DE NIVEAU 2
         * - 081 : AGENT COMMERCIAL
         * - 082 : RESPONSABLE DEPARTEMENT ORGANISATION
         * etc ...
         */
        typeFonctionAgentAffectation: string;
        /**
         * Permet d'indiquer si l'agent affecté occupe un poste fonctionnel en qualité de titulaire, remplaçant, suppléant ou au titre d'une affectation temporaire.
         * Valeurs :
         * - 'T' : Titulaire
         * - 'R' : Remplaçant
         * - 'S' : Suppléant
         * - 'A' : Affectation temporaire
         */
        codeQualiteAgentAffectation: string;
        /**
         * Libellé de désignation de la fonction (métier) associée à un poste fonctionnel.
         * ATTENTION : il ne doit pas y avoir dans ce libellé de caractères spéciaux (é,à,ç,ô, etc...).
         */
        libFonctionAgentAffectation: string;
        /**
         * Il détermine le rang du jour dans la semaine.
         * Valeurs :
         * - ' '
         * - '1' : Lundi
         * - '2' : Mardi
         * - '3' : Mercredi
         * - '4' : Jeudi
         * - '5' : Vendredi
         * - '6' : Samedi
         * - '7' : Dimanche
         */
        numeroJourSemaine: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé au début de la journée ou période.
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireDebutPeriode: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé à la fin de la journée ou période.
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireFinPeriode: string;
        /**
         * Date de début d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Date au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriodeAffectation: string;
        /**
         * Date de fin d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Date au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriodeAffectation: string;
        /**
         * Libellé décrivant le motif de l'affectation de l'agent.
         */
        libelleMotifAffectation: string;
        /**
         * Date de modification de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateModificationAffectation: string;
        /**
         * Code civilité de l'agent affecté.
         * Valeurs :
         * - '1' : MME
         * - '2' : MLLE
         * - '3' : M
         */
        codeCiviliteAgentAffectation: string;
        /**
         * Nom de famille (ou patronymique) de l'agent affecté.
         */
        nomFamilleAgentAffectation: string;
        /**
         * Prénom de l'agent affecté.
         */
        prenomAgentAffectation: string;
        /**
         * Libellé de désignation du type d'affectation de l'agent.
         */
        libelleTypeAffectation: string;
        /**
         * Code Agent à l'origine de la création de l'affectation.
         */
        codeAgentCreation: string;
        /**
         * Code civilité de l'agent à l'origine de la création de l'affectation.
         * Valeurs :
         * - '1' : MME
         * - '2' : MLLE
         * - '3' : M
         */
        codeCiviliteAgentCreation: string;
        /**
         * Nom de famille (ou patronymique) de l'agent à l'origine de la création de l'affectation.
         */
        nomFamilleAgentCreation: string;
        /**
         * Prénom de l'agent à l'origine de la création de l'affectation.
         */
        prenomAgentCreation: string;
        /**
         * Numéro de téléphone associé à une adresse, et concernant un particulier ou un lieu d'activité pour un professionnel.
         * Pour un particulier, il s'agit dans la plupart des cas, du numéro de téléphone du domicile.
         */
        numeroTelephoneAdresse: string;
        /**
         * Date de création de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateCreationAffectation: string;
        /**
         * Numéro de fax du particulier ou du lieu d'activité pour un professionnel.
         * Pour un particulier, il s'agit dans la plupart des cas, du numéro de fax du domicile.
         */
        numeroFax: string;
        /**
         * La ligne 4 permet d'identifier la voie de destination : NUMERO-LIBELLE DE LA VOIE
         * Elle peut comprendre :
         *  - Le numéro dans la voie, type et nom de voie
         *  - Le nom d'une résidence ou d'un ensemble immobilier qui ne peut être assimilé à une commune ou à un lieu-dit
         *  - Un service X
         *  - Une boîte postale
         *  - Un numéro de CEDEX
         */
        ligne4Adresse: string;
        /**
         * La ligne 6 permet d'identifier la destination : CODE POSTAL et LOCALITE DE DESTINATION ou CODE CEDEX et LIBELLE CEDEX
         * Elle peut comprendre :
         * - Le numéro de code postal et nom de la localité
         * - Le numéro de code spécifique et nom de la localité complétés éventuellement par la mention CEDEX
         */
        ligne6Adresse: string;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS le matin.
         */
        heureOuvertureMatinEDS: number;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS l'après-midi. Non renseigné si pas de fermeture le midi.
         */
        heureOuvertureApresMidiEDS: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le matin. Non renseigné si pas de fermeture le midi.
         */
        heureFermetureMatinEDS: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le soir.
         */
        heureFermetureApresMidiEDS: number;
        /**
         * Dénomination courte du type de l'élément de structure de rattachement.
         */
        libelleCourtTypeEDSRattachement: string;
    }
    interface IGestionAffectationAgentAvM {
        /**
         * Identifiant interne du Poste Fonctionnel affecté à l'agent.
         */
        identifiantEDSAffectationAvM: number;
        /**
         * Identifiant interne de l'EDS de rattachement du Poste Fonctionnel affecté à l’agent.
         */
        identifiantEDSRattachementAvM: number;
        /**
         * Il détermine le rang du jour dans la semaine.
         * Valeurs :
         * - '0'
         * - '1' : Lundi
         * - '2' : Mardi
         * - '3' : Mercredi
         * - '4' : Jeudi
         * - '5' : Vendredi
         * - '6' : Samedi
         * - '7' : Dimanche
         */
        numeroJourSemaineAvM: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé au début de la journée ou période.
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireDebutPeriodeAvM: string;
        /**
         * Il détermine la plage horaire d'une journée pour l'agent affecté à un poste fonctionnel donné. Ce type est associé à la fin de la journée ou période.
         * Valeurs :
         * - 'J' : Journée
         * - 'M' : Matin
         * - 'A' : Après-midi
         */
        typeHoraireFinPeriodeAvM: string;
        /**
         * Date de début d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Type date au format yyyy-MM-dd
         */
        dateDebutPeriodeAffectationAvM: string;
        /**
         * Date de fin d'affectation de l'agent sur un lieu de travail, un poste fonctionnel ...
         * Type date au format yyyy-MM-dd
         */
        dateFinPeriodeAffectationAvM: string;
        /**
         * Libellé décrivant le motif de l'affectation de l'agent.
         */
        libelleMotifAffectationAvM: string;
        /**
         * Date de modification de l'affectation.
         * Type date au format yyyy-MM-dd
         */
        dateModificationAffectationAvM: string;
        /**
         * Il détermine le type d'affectation d'un agent à un Elément de Structure. Cette typologie spécifique à chaque Etablissement.
         * Valeurs :
         * - 'AG' : AFFECTATION GEOGRAPHIQUE
         * - 'MA' : MULTI AFFECTATION
         * - 'MN' : MANAGEMENT
         * - 'R1' : RENFORT COMMERCIAL
         * - 'R2' : REMPLACEMENT FORMATION
         * - 'R3' : REMPLACEMENT CONGES
         * - 'R4' : REMPLACEMENT MALADIE
         */
        typeAffectationAvM: string;
        /**
         * Date de création de l'affectation au format JJMMAAAA
         * Type date au format yyyy-MM-dd
         */
        dateCreationAffectationAvM: string;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS le matin.
         */
        heureOuvertureMatinEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure d'ouverture de l'EDS l'après-midi. Non renseigné si pas de fermeture le midi.
         */
        heureOuvertureApresMidiEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le matin. Non renseigné si pas de fermeture le midi.
         */
        heureFermetureMatinEDSAvM: number;
        /**
         * Heures et minutes correspondant à l'heure de fermeture de l'EDS le soir.
         */
        heureFermetureApresMidiEDSAvM: number;
    }
    /**
     * Interface représentant un objet pour la méthode GET
     */
    interface IGestionAffectationQuery {
        codeEtablissement: string;
        codeAgentAffectation: number;
        dateDebutPeriodeAffectation: string;
    }
}

declare module Portefeuille.Modeles.Rest.AgentV2.recherche {
    interface IRechercheAgent {
        listeAgents: Array<IAgent>;
    }
    interface IAgent {
        /**
         * Identifiant d'un Etablissement du GCE.
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France.
         *
         * Exemples :
         * 17515 = CE Ile de France
         * 16275 = CE Nord France Europe
         * 43199 = Crédit Foncier de France (CFF)
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE.
         * Numéro chronologique attribué par le système : référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementStructure: number;
        /**
         * Référence externe d'un élément de structure dans un Etablissement du GCE.
         * Référence connue de l'Etablissement.
         * Identifiant défini en fonction du type d'élément de structure.
         */
        referenceElementStructure: number;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel (c'est le cas pour rechercheAgent),  on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationAgent: string;
        /**
         * Cette rubrique décrit la date de début de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeAgent: string;
        /**
         * Cette rubrique décrit la date de fin de validité d'un Elément de Structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAgent: string;
        /**
         * Détermine la fonction (métier) associée au poste fonctionnel.
         * Typologie spécifique à chaque Etablissement.
         *
         * Exemples :
         * 072 / CHARGE DE CLIENTELE DE NIVEAU 2
         * 081 / AGENT COMMERCIAL
         * 082 / RESPONSABLE DEPARTEMENT ORGANISATION
         */
        typeFonction: string;
        /**
         * Libellé de désignation d'une fonction (métier) associée à un poste fonctionnel.
         */
        libelleFonction: string;
        /**
         * Numéro d'identification de l'élément de structure hiérarchiquement supérieur à un élément donné.
         */
        identifiantEDSHierarchique: number;
        /**
         * Référence externe de l'EDS hiérarchiquement supérieur.
         */
        referenceEDSHierarchique: number;
        /**
         * Indique le type organisationnel de l'EDS hiérarchiquement supérieur.
         * Typologie propre à chaque Etablissement du GCE.
         * Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * '008' Siège
         * '003' Agence (Point de vente)
         * '010' GAB
         * '020' Guichet (au sens arrêté de caisse)
         * '001' Poste fonctionnel
         * '002' Service
         * '009' Entité Administrative (Guichet interbancaire)
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement.
         * Exemple : type '003' = agence / point de vente
         */
        typeEDSHierarchique: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleTypeEDSHierarchique: string;
        /**
         * Désignation décrivant l'élément de structure de rattachement (niveau "hiérarchique" supérieur).
         */
        libelleEDSHierarchique: string;
        /**
         * Numéro d'identification d'un agent au sein d'un Etablissement du réseau GCE.
         * Correspond à un individu ou à un acteur générique.
         * Référence unique dans MYSYS.
         */
        identifiantAgent: string;
        /**
         * Détermine si l'agent est générique ou nominatif.
         * Exemple d'agent générique : stagiaire, dépannage, ...
         *
         * Valeurs possibles :
         * - 'O' : Agent générique
         * - 'N' : Agent nominatif
         * - ' ' : Agent générique et Agent nominatif
         */
        indicateurAgentNonNominatif: string;
        /**
         * Indique si l'agent possède le profil de façon personnalisée.
         *
         * Valeurs possibles :
         * - 'F' : ?
         * - 'P' : ?
         */
        typePersonnalisation: string;
        /**
         * Indicateur existence affectation temporaire.
         */
        indicateurAffectationTemporaire: string;
        /**
         * Indicateur non éligibilité prise RDV.
         */
        indicateurNonElligibiliteRDV: string;
    }
    interface IZoneDeTravail {
        /**
         * Code indiquant si d'autres résultats sont disponibles (cas des Qr avec pagination).
         */
        codeSuiteListe: string;
    }
    /**
     * Interface représentant un objet pour la méthode GET
     */
    interface IRechercheAgentQuery {
        codeEtablissement: string;
        typeRecherche: number;
        codeAction: string;
        nomAgentDebutPlage?: string;
        identifiantAgent?: string;
        identifiantEDSRattachement?: number;
        groupeFonction?: string;
    }
}

declare module Portefeuille.Modeles.Tableaux.Comparator {
    class ClientComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module Portefeuille.Modeles.Tableaux.Comparator {
    class DateComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module Portefeuille.Modeles.Tableaux.Comparator {
    class RelationComparator implements MyWay.UI.IMwTableComparator {
        private $filter;
        private $parse;
        constructor($filter: ng.IFilterService, $parse: ng.IParseService);
        comparatorFn(item: Object, criterion: string, columnDescriptor: MyWay.UI.ImwTableColumnOptions): boolean;
    }
}

declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier {
    interface IStatFluxMvtFinancier {
        infoFluxMvtFinancier: IInfoFluxMvtFinancier;
    }
    interface IStatFluxMvtFinancierParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Liste identifiant de la relation économique.
         */
        listeIdentifiantRelationEco: Array<number>;
    }
    interface IInfoFluxMvtFinancier {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Somme des flux crediteurs des clients de l'année N.
         */
        fluxCrediteursAnneeN: number;
        /**
         * Somme des flux débiiteurs des clients de l'année N.
         */
        fluxDebiteursAnneeN: number;
        /**
         * Date début de calcul flux année N.
         */
        dateDebFluxAnneeN: string;
        /**
         * Date fin de calcul flux année N.
         */
        dateFinFluxAnneeN: string;
        /**
         * Somme des flux crediteurs des clients de l'année N-1.
         */
        fluxCrediteursNMoins1: number;
        /**
         * Somme des flux debiiteurs des clients de l'année N-1.
         */
        fluxDebiteursNMoins1: number;
        /**
         * Date début de calcul flux année N-1.
         */
        dateDebFluxAnneeNMoins1: string;
        /**
         * Date fin de calcul flux année N-1.
         */
        dateFinFluxAnneeNMoins1: string;
        /**
         * Taux évolution flux créditeurs
         */
        tauxEvolutionFluxCrediteurs: number;
        /**
         * Taux évolution flux débiteurs
         */
        tauxEvolutionFluxDebiteurs: number;
    }
}

declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statPortefeuille {
    interface IStatPortefeuilleParametres {
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
    }
    interface IPortefeuilleRdv {
        /**
         * Nombre de clients total (non prospects).
         */
        nombreClients: number;
        /**
         * Nombre de cliens actifs.
         */
        nombreClientsActifs: number;
        /**
         * Nombre de prospects.
         */
        nombreProspects: number;
        /**
         * Nombre de relations économiques (toutes catégories confondues).
         */
        nombreRelationsEconomiques: number;
        /**
         * Nombre de clients de type Entreprises - ESI.
         */
        nombreClientsTypePmeEsi: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients PE et PEES
         */
        nombreClientsTypePEetPEES: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients ME et MEES
         */
        nombreClientsTypeMEetMEES: number;
        /**
         * Nombre de clients de type Entreprises - ESI. Dont clients GE et GEES
         */
        nombreClientsTypeGEetGEES: number;
        /**
         * Nombre de clients de type PRO (EI inclus).
         */
        nombreClientsTypeProEi: number;
        /**
         * Nombre de clients de type Autres (ni Entreprise - ESI, PRO, EI).
         */
        nombreClientsTypeAutre: number;
        /**
         * Nombre de rendez vous réalisés pour des prospects depuis le 1er janvier de l'année en cours.
         */
        nbRdvProspectRealiseAnneeCivile: number;
        /**
         * Nombre de prospects qui ont un RDV réalisé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbProspectsVusAnneeEncours: number;
        /**
         * Nombre de relations éco dont le leader est client (non prospect) qui ont un RDV validé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbRelEcoClientVuesAnneeEncours: number;
        /**
         * Nombre de rendez-vous réalisés sur l'année en cours (depuis le 1er janvier) pour
         * les relations économiques de type "clients" (dont le leader est client) / nb de relations  économiques de type "clients" (dont le leader est client) au jour J.
         */
        tauxDeVisite: number;
        /**
         * Le nombre total de clients qui ont une segmentation calculée dans le(s) portefeuille(s).
         */
        nombreTotalClientsSegmentation: number;
        /**
         * Nombre de rendez-vous client.
         */
        nbRdvClient: number;
        /**
         * Nombre de client vus.
         */
        nbClientsVus: number;
        /**
         * Nombre de Clients non équipés
         */
        nbClientsNonEquipe: number;
        /**
         * Nombre Clients PE et PEES
         */
        nbClientsPePees: number;
        /**
         * Nombre Clients ME et MEES
         */
        nbClientsMeMees: number;
        /**
         * Nombre Clients GE et GEES
         */
        nbClientsGeGees: number;
        /**
         * Nombre de Clients avec Produit Service
         */
        nbClientsAvecProduitService: number;
        /**
         * Nombre de Clients sans contrat et prospect.
         */
        nbClientsSansContratEtProspect: number;
    }
    interface ISegmentationRelationnellePmeEsi {
        /**
         * Valeurs :
         * - A_ACQU : A Acquérir
         * - A_DEVP : A Développer
         * - A_FIDE  : A Fidéliser
         * - A_GERE : A Gérer
         * - A_PRES : A Préserver
         * - A_SURV : A Surveiller
         * - NONAFF : Non concerné
         */
        codeSegmentation: string;
        /**
         * Libellé segmentation.
         * Valeurs : A Acquérir, A Développer, A Fidéliser, A Gérer, A Préserver, A Surveiller, Non Concerné.
         */
        libelleSegmentation: string;
        /**
         * Pourcentage nombre de clients des portefeuilles dans segmentation.
         */
        pourcentageNombreDeClients: number;
    }
    interface IStatPortefeuille {
        portefeuilleRdv: IPortefeuilleRdv;
        listeSegmentationRelationnellePmeEsi: Array<ISegmentationRelationnellePmeEsi>;
        listeSegmentationRelationnellePro: Array<ISegmentationRelationnellePro>;
    }
    interface ISegmentationRelationnellePro {
        /**
         * Valeurs :
         * - SCI : Société Civile Immobilière
         * - MED* : Médium PRO Faiblement ou non Capté
         * - MED** : Médium PRO Partiellement Capté
         * - MED*** : Médium PRO Fortement Capté
         * - LRG* : Large PRO Faiblement ou non Capté
         * - LRG** : Large PRO Partiellement Capté
         * - LRG*** : Large PRO Fortement Capté
         * - MED_ER : Médium PRO Entrée en Relation
         * - MED_RK : Médium PRO Risqué
         * - LRG_ER : Large PRO Entrée en Relation
         * - RG_RK : Large PRO Risqué
         * - SML* : Small PRO Faiblement ou non Capté
         * - SML** : Small PRO Partiellement Capté
         * - SML*** : Small PRO Fortement Capté
         * - PLR_ER : PLR Entrée en Relation
         * - PLR_RK : PLR Risqué
         * - SML_ER : Small PRO Entrée en Relation
         * - SML_RK : Small PRO Risqué
         * - PLR* : PLR Faiblement ou non Capté
         * - PLR** : PLR Partiellement Capté
         * - PLR*** : PLR Fortement Capté
         * - noncalNon : Calculé
         * - NONAFF : Non Concerné
         */
        codeSegmentation: string;
        /**
         * Libellé segmentation.
         * Valeurs :
         * Société Civile Immobilière, Médium PRO Faiblement ou non Capté, Médium PRO Fortement Capté ...
         */
        libelleSegmentation: string;
        /**
         * Pourcentage nombre de clients des portefeuilles dans segmentation.
         */
        pourcentageNombreDeClients: number;
    }
}

declare module Portefeuille.Modeles.Rest.PortefeuillCorporateV1.statRentabilite {
    interface IStatRentabiliteParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Liste identifiant de la relation économique.
         */
        listeIdentifiantRelationEco: Array<number>;
        /**
         * Liste numéro de personne.
         */
        listeIdentifiantPersonne: Array<number>;
    }
    interface IStatRentabilite {
        infoPnb: IInfoPnb;
    }
    interface IInfoPnb {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Somme de tous les PNB des clients des portefeuilles au 31/12 de l'année N-1
         */
        pnb3112AnneeNMoins1: number;
        /**
         * Date début de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb3112AnneeNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb3112AnneeNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N-1.
         */
        pnb12DerniersMoisGlissNMoins1: number;
        /**
         * Date début de calcul PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N.
         */
        pnb12DerniersMoisGlissantN: number;
        /**
         * Date début de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissN: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissN: string;
        /**
         * % d'évolution du PNB entre les 12 M glissants N-1 et N.
         */
        tauxEvolutionPnb: number;
        /**
         * Ratio = Poids = Somme des 10 PNB les plus importants, sur 12 mois glissants,  des clients (relations économiques) de tous les portefeuilles sélectionnés / Somme de
         * tous les PNB sur 12 mois glissants de tous les portefeuilles sélectionnés.
         */
        ratioPnbClient: number;
    }
}

declare module Portefeuille.Modeles.Rest.PreferenceUtilisateur {
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

declare module Portefeuille.Modeles.Rest.PortefeuilleV1.client {
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
        /**
         * Pourcentage d'évolution valorisé pour les indicateurs PNB ,  CA, Flux créditeurs et débiteurs de l'année N.
         */
        tendance?: number;
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

declare module Portefeuille.Modeles.Rest.PortefeuilleV1.recherche {
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
        /**
         * code du SuiviPar Complémentaire 'SPC'
         */
        codeSuiviComplementaire?: string;
        /**
         * libellé du SuiviPar Complémentaire 'SPC'
         */
        libelleSuiviComplementaire?: string;
    }
    interface IPortefeuilleInfo {
        /**
         * Code retour Echanges
         */
        codeRetour: number;
        /**
         * Numéro portefeuille
         */
        identifiantPortefeuille: number;
        /**
         * Libellé portefeuille
         */
        libellePortefeuille: string;
        /**
         * Type portefeuille
         */
        codeTypePortefeuille: string;
        /**
         * Code origine mise en portefeuille
         */
        codeMotifPortefeuille: string;
        /**
         * Indicateur d'affectation
         */
        indicateurAffectation: string;
        /**
         * Type de transfert de portefeuille
         */
        typeTransfertPortefeuille: string;
        /**
         * Nombre relations en PTF
         */
        nombreRelationsEnPtf: number;
        /**
         * Date modification enregistrement
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * Référence externe agent
         */
        codeAgent: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonctionPosteFonctionnel: string;
        /**
         * Libellé Elément Structure
         */
        libelleElementStructure: string;
        /**
         * Idt EDS propriétaire portefeuille
         */
        identifiantEdsPortefeuille: number;
        /**
         * Type élément structure
         */
        typeElementStructure: string;
        /**
         * Libellé calculé court EDS
         */
        libelleEdsPortefeuille: string;
        /**
         * EDS d'affectation du portefeuille
         */
        identifiantEdsSuiviPortefeuille: number;
        /**
         * Référence externe EDS
         */
        edsDomiciliation: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCourtEDS: string;
        /**
         * Type élément structure
         */
        typeEDS: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonction: string;
        /**
         * Libellé Elément Structure
         */
        libelleEDS: string;
        /**
         * Numéro de portefeuille cible
         */
        identifiantPtfTransfert: number;
        /**
         * Libellé du portefeuille cible
         */
        libellePortefeuilleCible: string;
        /**
         * Indicateur d'affectation cible
         */
        indicateurAffectationCible: string;
        /**
         * Type de portefeuille cible
         */
        typePortefeuilleCible: string;
        /**
         * Origine de mise en PTF cible
         */
        codeTypeMotifTransfert: string;
        /**
         * EDS d'affectation cible du portefeui
         */
        identifiantEdsPtfTransfert: number;
        /**
         * Référence externe EDS
         */
        referenceExterneEDSNiveau2: number;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds1: string;
        /**
         * Type élément structure
         */
        typeElementStructure1: string;
        /**
         * Libellé fonction poste fonctionnel
         */
        libelleFonctionPf1: string;
        /**
         * Libellé Elément Structure
         */
        libelleEDSDomEntiteTitulaire: string;
        /**
         * EDS propriétaire du port cible
         */
        edsProprietairePortCible: number;
        /**
         * Type élément structure
         */
        typeElementStructure2: string;
        /**
         * Libellé calculé court EDS
         */
        libelleCalculeCourtEds2: string;
        /**
         * Code professionnel relation
         */
        codeProfessionnelRelation: string;
        /**
         * Groupe de fonctions
         */
        groupeFonctions: string;
    }
    interface IListePortefeuille {
        /**
         * le code banque
         */
        codeEtablissement: string;
        /**
         * l'identifiant eds
         */
        identifiantElementStructure: number;
        donneePortefeuille: Array<IPortefeuilleInfo>;
    }
}

declare module Portefeuille.Modeles.Rest.PortefeuilleV1.relationCommerciale {
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

declare module Portefeuille.Modeles.Rest.PortefeuilleV1.suiviComplementaire {
    interface ISuiviComplementaire {
        listeSuivi: Array<ISuivi>;
        suiviComplementaireModifie: ISuiviComplementaireModifie;
    }
    interface ISuiviComplementaireModifie {
        /**
         * Code Etab Banque Entité Juridique
         */
        codeEtablissement: string;
        /**
         * Identifiant personne
         */
        numeroPersonne: number;
        /**
         * Code type suivi complémentaire
         */
        codeTypeSuiviComplementaire: string;
        /**
         * Code action
         */
        codeAction: string;
        /**
         * Identifiant Elément structure
         */
        idEdsInterne: number;
        /**
         * Identifiant élément structure
         */
        identifiantElementStructure: number;
        /**
         * Référence externe agent
         */
        identifiantAgent: number;
    }
    interface ISuivi {
        /**
         * code banque
         */
        codeEtablissement: string;
        /**
         * numéro de la personne
         */
        numeroPersonne: number;
        /**
         * Code type :
         * '001'      MIDDLE
         * '002'      INTERNATIONAL
         * '003'      NEO BUSINESS
         * '004'      SANTE
         * '005'      GRANDS COMPTES
         * '006'      FLUX
         * '007'      BANQUE DE L'ORNE
         */
        codeTypeSuiviComplementaire: string;
        /**
         * Exemples de valeurs :
         *            ---------------------
         * '001'      MIDDLE
         * '002'      INTERNATIONAL
         * '003'      NEO BUSINESS
         * '004'      SANTE
         * '005'      GRANDS COMPTES
         * '006'      FLUX
         * '007'      BANQUE DE L'ORNE
         */
        libelleSuiviComplementaire: string;
        /**
         * Exemples de valeurs :
         *            ---------------------
         * '001'      MIDDLE
         * '002'      Conseiller International
         * '004'      Expert SANTE
         */
        libelleSuiviComplementClient: string;
        /**
         * identifiant de l'element de structure interne
         */
        idEdsInterne: number;
        /**
         * designation longue de l'element de structure
         */
        designationLongueEds: string;
        informationAnimation: IInformationAnimation;
        /**
         * Valeurs :
         *            ---------
         * 'O'        Oui à restituer
         * 'N'        Non ne pas restituer
         */
        indicateurRestitutionClient: string;
        /**
         * Valeurs :
         *            ---------
         * 'O'        Oui à restituer
         * 'N'        Non ne pas restituer
         */
        indicateurRestitutionClientRMP: string;
        dateMajEnregistrement: string;
        /**
         * exemple :
         */
        typeElementStructure: string;
    }
    interface IInformationAnimation {
        /**
         * '1' Personne physique
         * '2' Personne morale ou assimilée morale
         */
        codePersonaliteJuridique: string;
        /**
         * exemple de formulation : "civilité pers 1" et "civilité pers2" et "désignat p1" "désignation pers. 1" et "désignat pers. 2" "désignation pers. 1" et "désignat pers. 2" "et leurs enfants" "Groupe"
         * raison sociale personne morale leader "Famille" nom leader pp + "& Entp" raison sociale leader pm
         */
        intituleRelation: string;
        /**
         * Numéro d'identification de la relation économique
         */
        identifiantRelationEconomique: number;
        /**
         * Nombre de personne appartenant a un ménage économique
         */
        nombrePersonneMenage: number;
        /**
         * Correspond au 2 premiers caractères du code segmentation sur 8 car : voir CODLSH.
         * Valeurs : 'AC' Activation Clientèle Particulier 'AP' Activation Clientèle Professionnel 'BM' Segmentation relationelle BDR 'BR' Segmentation relation économique BDR 'FC' Fréquence Client 'FP'
         * Fréquence PRO 'FR' Fréquence Relation 'MN' Marché national 'SL' Spécifique VAO pour progiciel Norkom / LAB 'SA' Activation Clientèle V2 'SU' Univers de détention
         */
        codeTypeSegmentClientele: string;
        /**
         * Nouveau code segmentation nationale CENCEP 1994 Ce code passe de 2 à 6 positions 1er caractére : le code maxi groupe J jeune, I inactif, B bancarisé, M monodétenteur D diversifié,
         * N nouveau client 2éme caractére : le maxi groupe c'est un découpage qui intervient pour certain maxi groupe 3éme au 5éme caractéres : codes segments comportemen- tal 6éme caractére : potentiel client '+' ou ' '
         */
        codeSegmentClientele: string;
        /**
         * Libellé court de la segmentation clientèle pour affichage sur le poste de travail libellé à caractère confidentiel pour ne pas être interprété par la clientèle
         */
        libelleCourtSegmentation: string;
        /**
         * Correspond au 2 premiers caractères du code segmentation
         */
        typeSegmentation: string;
        /**
         * Ce code passe de 2 à 6 positions 1er caractére : le code maxi groupe J jeune, I inactif, B bancarisé, M monodétenteur D diversifié, N nouveau client 2éme caractére :
         * le maxi groupe c'est un découpage qui intervient pour certain maxi groupe 3éme au 5éme caractéres : codes segments comportemen- tal 6éme caractére : potentiel client '+' ou '
         */
        codeSegmentClientele2: string;
        /**
         * Libellé contenant la désignation d'un segment clientèle, associé au code segment / CODLSH. Etabli dans la table de typologie DU2L
         */
        libelleSegmentClientele2: string;
        /**
         * Détermine le rôle d'une personne dans une relation Permet de déterminer si la personne est leader valeurs : '1' personne '2' personne leader d'un ménage '3' autre personne d'un ménage
         */
        typeRoleRelation: string;
        /**
         * Date du dernier rendez-vous réalisé pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateDernierRdvRealise: string;
        /**
         * Nombre de rendez-vous sur 12 mois glissants
         */
        nombreRdv12Mois: number;
        /**
         * Nombre de rendez-vous planifiés pour une personne
         */
        nombreRdvPlanifies: number;
        /**
         * Nombre de rendez-vous sur l'année en cours pour une personne
         */
        nombreRdvAnneeEnCours: number;
        /**
         * Numéro SIREN entreprise
         */
        numeroSiren: string;
        /**
         * Désignation de la personne morale
         */
        raisonSociale: string;
        /**
         * Valeurs possibles :
         * '0' Personne connue comme client
         * '1' Personne connue comme tiers
         * '2' Personne connue comme prospect
         * '3' Personne connue comme prospect enrichi
         */
        codeTypeRelationPersonne: string;
        /**
         * Date du prochain rendez-vous pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateProchainRdv: string;
        /**
         * Date du dernier entretien réalisé pour une personne.
         * Type date au format yyyy-MM-dd
         */
        dateDernierEntretien: string;
    }
}

declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.rechercheRevue {
    interface IRechercheRevueParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
        /**
         * Liste identifiant de la relation économique.
         */
        listeIdentifiantRelationEco: Array<number>;
        /**
         * Liste numéro de personne.
         */
        listeIdentifiantPersonne: Array<number>;
        /**
         * Indique si il faut récupérer l'équipement.
         */
        codeActionEquipement: string;
    }
    interface IRechercheRevue {
        listeBilanRevue: Array<IBilanRevue>;
        messageInformation: IMessageFonctionnel;
    }
    interface IBilanRevue {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: number;
        /**
         * Code Famille produit porteFeuille BDR.
         */
        codeFamilleProduitPtf: string;
        /**
         * Code sous famille produit portefeuille BDR.
         */
        codeSousFamilleProduitPtf: string;
        /**
         * Numéro d'identification d'un portefeuille.
         */
        identifiantPortefeuille: number;
        /**
         * Numéro d'identification de la relation économique.
         */
        identifiantRelationEco: number;
        /**
         * Numéro d'identification de la personne morale ou EI.
         */
        identifiantPersonne: number;
        /**
         * Raison Sociale.
         */
        raisonSociale: string;
        /**
         * Indicateur client équipé sous famille produit. Valeurs : O/N.
         */
        indicateurClientEquipe: string;
        /**
         * Indicateur sous-famille produit BDR à proposer. Valeurs : O/N.
         */
        indicateurClientAEquiper: string;
        /**
         * Taux objectif flux.
         */
        tauxObjectifFlux: number;
        /**
         * Indicateur client à activer. Valeurs : O/N.
         */
        indicateurClientAActiver: string;
        /**
         * Indicateur tarif à renégocier. Valeurs : O/N.
         */
        indicateurTarifARenegocier: string;
        /**
         * Indicateur client équipé à la concurrence.
         * Valeurs : O/N.
         */
        indicateurClientEquipeConcurren: string;
        /**
         * Indicateur client non intéressé produit.
         * Valeur : O/N
         */
        indicateurClientNonInteresse: string;
        /**
         * Code type segment clientèle.
         */
        codeTypeSegment: string;
        /**
         * Code segment clientèle.
         */
        codeSegment: string;
        /**
         * Libellé segment clientèle.
         */
        libelleSegment: string;
    }
    interface IMessageFonctionnel {
        /**
         * Avec le code Domaine, ce code Message Erreur compose l'identifiant réduit pour le poste PETRA d'un Message d'erreur.
         *
         * Valeurs : La composition de ce code se déduit de l'identifiant complet d'un Message d'Erreur en reprenant :
         *
         * la partie utile du code entité (sur 4 car.) :
         * - pour une entité programme ou dialogue, cela correspond aux 4 derniers caractères du code sachant que les 2 premiers sont connus dans le code bibliothèque (première composante de la clé)
         * - pour un segment, elle correspond aux 4 carac. codifiant le segment. le rang de la rubrique (sur 3 car.) le type de l'erreur (sur 1 car.)
         */
        code: string;
        /**
         * Libellé de description d'une anomalie / erreur associé à un code erreur. Correspond à une erreur de traitement, de contenu de données reçues via un interface (écran de saisie, PTMS, autre Q/R, fichier séquentiel, ...).
         */
        libelle: string;
    }
}

declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds {
    interface IStatPortefeuilleEds {
        parametres: IParametres;
        vueGlobaleStatPtfEds: IStatPtfEdsStandard;
        vueDetailleeStatPtfEds: Array<IStatPtfEdsStandard>;
    }
    interface IParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        listePortefeuilleEds: Array<IPortefeuilleEds>;
        /**
         * Valeur :
         * '0' : vue globale
         * '1' : vue détaillée
         * '2' : vue globale + vue détaillée
         */
        typeVue: string;
    }
    interface IPortefeuilleEds {
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Numéro de portefeuille.
         */
        identifiantPortefeuille: number;
    }
    interface IStatPtfEdsStandard {
        /**
         * Numéro d'identification de l'élément de structure Suivi Par.
         */
        identifiantEds: number;
        /**
         * Code civilité du chargé d'affaire.
         */
        codeCiviliteChargeAffaire: string;
        /**
         * Nom famille du chargé d'affaire
         */
        nomFamilleChargeAffaire: string;
        /**
         * Premier prénom état civil du chargé d'affaire.
         */
        prenomChargeAffaire: string;
        /**
         * Nom usage du chargé d'affaire.
         */
        nomUsageChargeAffaire: string;
        /**
         * Nombre de clients total.
         */
        nombreClients: number;
        /**
         * Nombre de prospects.
         */
        nombreProspects: number;
        /**
         * Nombre de relations économiques (toutes catégories confondues).
         */
        nombreRelationsEconomiques: number;
        /**
         * Nombre de clients de type Entreprises - ESI.
         */
        nombreClientsTypePmeEsi: number;
        /**
         * Nombre de clients de type PRO (EI inclus).
         */
        nombreClientsTypeProEi: number;
        /**
         * Nombre de clients de type Autres (ni Entreprise - ESI, PRO, EI).
         */
        nombreClientsTypeAutre: number;
        /**
         * Nombre de rendez vous réalisés pour des prospects depuis le 1er janvier de l'année en cours.
         */
        nbRdvProspectRealiseAnneeCivile: number;
        /**
         * Nombre de prospects qui ont un RDV réalisé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbProspectsVusAnneeEncours: number;
        /**
         * Nombre de relations éco dont le leader est client (non prospect) qui ont un RDV validé (donc avec un CRE) depuis le 1er janvier de l'année en cours.
         */
        nbRelEcoClientVuesAnneeEncours: number;
        /**
         * Nombre de rendez-vous réalisés sur l'année en cours (depuis le 1er janvier) pour les relations économiques de type "clients"
         * (dont le leader est client) / nb de relations économiques de type "clients" (dont le leader est client) au jour J.
         */
        tauxDeVisite: number;
        /**
         * Le nombre total de clients qui ont une segmentation calculée dans le(s) portefeuille(s).
         */
        nombreTotalClientsSegmentation: number;
        /**
         * Nombre de rendez-vous client.
         */
        nbRdvClient: number;
        /**
         * Nombre de client vus.
         */
        nbClientsVus: number;
        /**
         * Nombre Clients PE et PEES
         */
        nbClientsPePees: number;
        /**
         * Nombre Clients ME et MEES
         */
        nbClientsMeMees: number;
        /**
         * Nombre Clients GE et GEES
         */
        nbClientsGeGees: number;
        /**
         * Date début de calcul flux année N.
         */
        dateDebFluxAnneeN: string;
        /**
         * Date fin de calcul flux année N.
         */
        dateFinFluxAnneeN: string;
        /**
         * Somme des flux créditeurs des clients de l'année N.
         */
        fluxCrediteursAnneeN: number;
        /**
         * Somme des flux débiteurs des clients de l'année N.
         */
        fluxDebiteursAnneeN: number;
        /**
         * Date début de calcul flux année N-1.
         */
        dateDebFluxAnneeNMoins1: string;
        /**
         * Date fin de calcul flux année N-1.
         */
        dateFinFluxAnneeNMoins1: string;
        /**
         * Somme des flux créditeurs des clients de l'année N-1.
         */
        fluxCrediteursNMoins1: number;
        /**
         * Somme des flux débiteurs des clients de l'année N-1.
         */
        fluxDebiteursNMoins1: number;
        /**
         * Taux évolution flux créditeurs
         */
        tauxEvolutionFluxCrediteurs: number;
        /**
         * Taux évolution flux débiteurs
         */
        tauxEvolutionFluxDebiteurs: number;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N.
         */
        pnb12DerniersMoisGlissantN: number;
        /**
         * Date début de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissN: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissN: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles au 31/12 de l'année N-1
         */
        pnb3112AnneeNMoins1: number;
        /**
         * Date début de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb3112AnneeNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB au 31/12 de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb3112AnneeNMoins1: string;
        /**
         * Somme de tous les PNB des clients des portefeuilles des 12 mois glissants de l'année N-1.
         */
        pnb12DerniersMoisGlissNMoins1: number;
        /**
         * Date début de calcul PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateDebPnb12DerMoisGlissNMoins1: string;
        /**
         * Date arrêtée de calcul du PNB de 12 derniers mois glissants de l'année N-1.
         * Type date au format yyyy-MM-dd
         */
        dateFinPnb12DerMoisGlissNMoins1: string;
        /**
         * % d'évolution du PNB entre les 12 M glissants N-1 et N.
         */
        tauxEvolutionPnb: number;
        /**
         * Nombre de clients actifs.
         */
        nombreClientsActifs: number;
        /**
         * Nombre de Clients non équipés
         */
        nbClientsNonEquipe: number;
        /**
         * Pourcentage de revue portefeuille réalisée.
         */
        pourcentageRevuePtfRealisee: number;
        /**
         * Nombre de clients revus.
         */
        nombreDeClientsRevus: number;
        /**
         * Nombre de produits à proposer.
         */
        nombreDeProduitsAProposer: number;
        /**
         * Nombre de clients à activer.
         */
        nombreDeClientsAActiver: number;
        /**
         * Nombre de clients tarif à renégocier.
         */
        nombreDeClientsTarifARenegocier: number;
        /**
         * Nombre de clients avec Appétence.
         */
        nombreDeClientsAAppetence: number;
        /**
         * Nombre de Clients avec Produit Service
         */
        nbClientsAvecProduitService: number;
        /**
         * Nombre de Clients sans contrat et prospect.
         */
        nbClientsSansContratEtProspect: number;
        /**
         * Cumul nombre des affaires.
         */
        cumulNombreAffaires: number;
        /**
         * Cumul Proposition Commerciale BDR.
         */
        cumulPropositionCommerciale: number;
    }
}

declare module Portefeuille.Modeles.Rest.PropositionCorporateV1.statRevue {
    interface IStatRevueParametres {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        identifiantElementStructure: number;
        /**
         * Liste numéro de portefeuille.
         */
        listeIdentifiantPortefeuille: Array<number>;
    }
    interface IStatRevue {
        /**
         * Code Banque sous lequel l'établissement est répertorié par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Numéro d'identification de l'élément de structure.
         */
        identifiantElementStructure: string;
        /**
         * Pourcentage de revue portefeuille réalisée.
         */
        pourcentageRevuePtfRealisee: number;
        /**
         * Nombre de clients revus.
         */
        nombreDeClientsRevus: number;
        /**
         * Nombre de clients total.
         */
        nombreDeClientsTotal: number;
        /**
         * Nombre de produits à proposer.
         */
        nombreDeProduitsAProposer: number;
        /**
         * Nombre de clients à activer.
         */
        nombreDeClientsAActiver: number;
        /**
         * Nombre de clients à renégocier (tarification).
         */
        nombreDeClientsARenegocier: number;
        /**
         * Nombre de clients avec Appétence.
         */
        nombreDeClientsAAppetence: number;
        /**
         * Cumul nombre des affaires.
         */
        cumulNombreAffaires: number;
        /**
         * Cumul Proposition Commerciale BDR.
         */
        cumulPropositionCommerciale: number;
    }
}

declare module Portefeuille.Modeles.Rest.StructureV2.edsniveauinferieur {
    interface IEdsniveauinferieurQuery {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        codeEtablissement: string;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        identifiantInterneEDS: number;
    }
    interface IInfoRattachementEDS {
        /**
         * Identifiant interne de l'EDS de rattachement de l'EDS identifié
         */
        identifiantEDSRattachement: number;
        /**
         * Référence externe de l'EDS de rattachement de l'EDS identifié
         */
        referenceEDSRattachement: number;
        /**
         * Libellé de l'EDS de rattachement de l'EDS identifié
         */
        libelleEDSRattachement: string;
        /**
         * Type de l'EDS de rattachement de l'EDS identifié
         */
        typeEDSRattachement: string;
        /**
         * Libellé long type de l'EDS de rattachement
         */
        libelleTypeEDSRattachement: string;
    }
    interface IInfoEDS {
        /**
         * Identifiant interne de l'élément de structure
         */
        identifiantInterneEDS: number;
        /**
         * Référence externe de l'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * Libellé de l'élément de structure
         */
        libelleEDS: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
    }
    interface IInfoPosteFonctionnel {
        /**
         * Identifiant interne du poste fonctionnel
         */
        identifiantPosteFonctionnel: number;
        /**
         * Référence externe du poste fonctionnel
         */
        referencePosteFonctionnel: number;
        /**
         * Libellé du poste fonctionnel
         */
        libellePosteFonctionnel: string;
        /**
         * Type de l'élément structure
         */
        typeEDS: string;
        /**
         * Libellé long type de l'EDS
         */
        libelleTypeEDS: string;
        /**
         * Référence externe de l'agent
         */
        codeAgent: number;
        /**
         * Désignation longue de l'agent Elle est utilisée pour la constitution de la ligne 1 de l'adresse.
         * Elle est constituée en concaténant la civilité, le nom d'usage et le prénom de l'agent.
         */
        designationAgent: string;
        /**
         * Type de fonction de l'agent
         */
        typeFonction: string;
        /**
         * Libellé de fonction de l'agent
         */
        libelleFonction: string;
        /**
         * Code civilité de l'agent
         */
        civiliteAgent: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         *
         * soit au nom du père
         * soit au nom de la mère
         * soit aux 2 noms accolés (ordre quelconque, dans la limite d'un nom de famille par parent)
         * C'est le seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....).
         * Figure sur toute pièce officielle d'identité. Appelé auparavant nom patronymique.
         */
        nomFamilleAgent: string;
        /**
         * Premier prénom de l'état civil de la personne physique.
         */
        prenomAgent: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         *
         * soit au nom de famille de l'époux(se) (conjoint)
         * soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque Dénomination
         * utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique.
         * Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         * C'est une information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille.
         * Appelé auparavant nom marital.
         */
        nomUsageAgent: string;
    }
    interface IEdsNiveauInferieur {
        infoRattachementEDS: IInfoRattachementEDS;
        infoEDS: Array<IInfoEDS>;
        infoPosteFonctionnel: Array<IInfoPosteFonctionnel>;
    }
}

declare module Portefeuille.Modeles.Rest.SyntheseCorporateV1.flux {
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
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.RechercheRevue {
    /**
     * Interface de la classe StatRevueService
     */
    interface IRechercheRevueService {
        postRechercheRevue(query: Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.rechercheRevue.IRechercheRevue>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.StatFluxMouvementFinancier {
    /**
     * Interface de la classe StatRentabiliteService
     */
    interface IStatFluxMouvementFinancierService {
        postStatFluxMvtFinancier(query: Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancierParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statFluxMouvementFinancier.IStatFluxMvtFinancier>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.StatPortefeuille {
    /**
     * Interface de la classe StatRevueService
     */
    interface IStatPortefeuilleService {
        getStats(query: Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuilleParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statPortefeuille.IStatPortefeuille>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.StatRentabilite {
    /**
     * Interface de la classe StatRentabiliteService
     */
    interface IStatRentabiliteService {
        getStatsRentab(query: Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabiliteParametres): ng.IPromise<Modeles.Rest.PortefeuillCorporateV1.statRentabilite.IStatRentabilite>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.StatRevue {
    /**
     * Interface de la classe StatRevueService
     */
    interface IStatRevueService {
        getStats(query: Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevueParametres): ng.IPromise<Modeles.Rest.PropositionCorporateV1.statRevue.IStatRevue>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.AgentV2.gestionAffectation {
    /**
     * Interface de la classe GestionAffectationService
     */
    interface IGestionAffectationService {
        getGestionAffectation(query: Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectationQuery): ng.IPromise<Modeles.Rest.AgentV2.gestionAffectation.IGestionAffectation>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.AgentV2.recherche {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IRechercheAgentService {
        getListeCaracteristiquesAgent(query: Modeles.Rest.AgentV2.recherche.IRechercheAgentQuery): ng.IPromise<Modeles.Rest.AgentV2.recherche.IRechercheAgent>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.PreferenceUtilisateur {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IPreferenceUtilisateurService {
        getListePreferences(query: Modeles.Rest.PreferenceUtilisateur.IParametresEntree): ng.IPromise<Array<Modeles.Rest.PreferenceUtilisateur.IPreference>>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.Client {
    /**
     * Interface de la classe ClientService
     */
    interface IClientService {
        getClientsIndicateurs(query: Modeles.Rest.PortefeuilleV1.client.IParametresEntree): ng.IPromise<Modeles.Rest.PortefeuilleV1.client.IClient>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.RecherchePortefeuille {
    /**
     * Interface représentant un objet pour la méthode GET
     */
    interface IRecherchePortefeuilleQuery {
        codeEtablissement: string;
        IdentifianElementStructure: number;
        typeRecherche: string;
    }
    /**
     * Interface représentant un objet pour la méthode GET
     */
    interface IListeRecherchePortefeuilleQuery {
        codeEtablissement: string;
        IdentifianElementStructure: number;
    }
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IRecherchePortefeuilleService {
        getPortefeuilles(query: IRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IPortefeuilleRecherche>;
        getlistePortefeuillesParEds(query: IListeRecherchePortefeuilleQuery): ng.IPromise<Modeles.Rest.PortefeuilleV1.recherche.IListePortefeuille>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.RelationCommerciale {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface IRechercheCommercialeService {
        getRelationCommerciale(query: Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommercialeParametres): ng.IPromise<Modeles.Rest.PortefeuilleV1.relationCommerciale.IRelationCommerciale>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.SuiviComplementaire {
    /**
     * Interface de la classe CorporateTiersLiesService
     */
    interface ISuiviComplementaireService {
        getClientsSuiviComplementaire(query: Portefeuille.Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire): ng.IPromise<Modeles.Rest.PortefeuilleV1.suiviComplementaire.ISuiviComplementaire>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
/**
 *
 */
declare module Portefeuille.Services.Rest.PropositioncorporateV1.StatPortefeuilleEds {
    /**
     * Interface IStatPortefeuilleEdsService
     */
    interface IStatPortefeuilleEdsService {
        getStatPortefeuilleEds(query: Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds): ng.IPromise<Modeles.Rest.PropositionCorporateV1.statPortefeuilleEds.IStatPortefeuilleEds>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.Flux {
    /**
     * Interface de la classe FluxService
     */
    interface IFluxService {
        getFlux(query: any): ng.IPromise<Array<Modeles.Rest.SyntheseCorporateV1.flux.IInfosFlux>>;
    }
}

/// <reference path="../../../constantes/inject-constantes.d.ts" />
declare module Portefeuille.Services.Rest.StructureV2.edsNiveauInferieur {
    interface IEdsNiveauInferieurService {
        getEdsNiveauInferieur(query: Modeles.Rest.StructureV2.edsniveauinferieur.IEdsniveauinferieurQuery): ng.IPromise<Modeles.Rest.StructureV2.edsniveauinferieur.IEdsNiveauInferieur>;
    }
}
