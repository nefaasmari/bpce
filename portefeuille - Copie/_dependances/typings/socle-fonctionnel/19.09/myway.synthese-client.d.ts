
declare module syntheseClient {
    interface IRootScope extends ng.IRootScopeService {
        title: string;
    }
    interface IScopeScElementProduit extends ng.IScope {
        flagBoutonTuileListe: string;
        listeObject: string;
        object: any;
        complement: string;
        titre: string;
        id: string;
        avecMarquage: string;
        indicateur: string;
        numeroCompte: string;
        soldeProduit: number;
        statut: string;
        numeroEntiteTitulaire: number;
        dateNaissance: string;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        applicationList: myway.portail.api.ApplicationList;
        clickAction: () => void;
    }
    interface IProduitDetails {
        codeProcessus?: string;
        titre?: string;
        habilitation?: string;
        cleBascule1?: string;
        cleBascule2?: string;
        valeurDepart?: string;
        paramsLisa?: {
            [key: string]: string;
        };
        urlPMM?: boolean;
        url?: string;
        idPersonne?: string;
    }
    interface IProduit {
        [key: string]: IProduitDetails[];
    }
    interface ILisaStartProcess {
        addToGlobalContext?: boolean;
        codeProcessus: string;
        standAlone?: boolean;
        initData?: any;
        valeurDepart?: number;
    }
    interface IDetailCurrentRoute {
        title: string;
        originalPath: string;
    }
    interface ICurrentRoute {
        $$route: IDetailCurrentRoute;
        loadedTemplateUrl: string;
        params: syntheseClient.Modeles.Routage.IScRouteParam;
    }
    interface IRoute extends ng.route.IRoute {
        title?: string;
    }
    interface IRouteProvider extends ng.route.IRouteProvider {
        otherwise(route: syntheseClient.IRoute): syntheseClient.IRouteProvider;
        when(path: string, route: syntheseClient.IRoute): syntheseClient.IRouteProvider;
    }
    interface IModeleRoute extends ng.route.ICurrentRoute {
        $$route: IDetailCurrentRoute;
        locals: {
            $scope: ng.IScope;
            $template: string;
            objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        };
    }
    var d3: D3.Base;
    /**
     * nécessité d'avoir un 'identifiantPersonne' dans le contexte, pour lancer l'application
     * passage par la route 'chargement' pour initialiser :
     * - initialisation du serviceAgent
     * - récupération dans le contexte de l'identifiantPersonne et des données de l'agent
     * - appel rest pour la liste des synthèses + vue par défaut
     * - données de la synthèse pour la personne chargée
     * - redirection vers la vue synthèse demandée
     */
    var app: any;
}

declare module syntheseClient.Constantes {
    class Transactions {
        static T0228: string;
        static T0297: string;
        static T0298: string;
        static listeTransactionSEPACommunCodeProduitUnique: Modeles.Transaction.ITransactionCodeProduit[];
        static listeTransactionSEPACommunCodeProduitSsProduit: Modeles.Transaction.ITransactionSsCodeProduitEligible[];
    }
    class Constantes {
        personnePhysique: string;
        personneMorale: string;
        codeCivilite: string[];
        genre: string[];
        formatDate: string;
        aucunProduit: string;
        aucunProduitService: string;
        static deviseEuro: string;
        static satisfactionNiveau0: string;
        static satisfactionNiveau1: string;
        static satisfactionNiveau2: string;
        static satisfactionNiveau3: string;
        static satisfactionNiveau4: string;
        static clientSansServices: string;
        static clientAvecServices: string;
        static intSansCmptSolde: string;
        static intAvecCmptSolde: string;
        static intDetaillee: string;
        static nomFichierExterne: string;
        static nomFichierInterne: string;
        static libelleBlocComptes: string;
        static libelleBlocMoyensPaiment: string;
        static libelleBlocAutresServices: string;
        static libelleBlocVosComptesTitulaires: string;
        static libelleBlocVosInstrumentsPaiement: string;
        static libelleBlocVosCredits: string;
        static libelleBlocVosServicesAssurances: string;
        static libelleBlocVosAutresContrats: string;
        static libelleBlocVosAutresServices: string;
        static habilitationSyntheseClient: string;
        static blocCompteTitulaire: string;
        static blocCompteInstrumentPaiement: string;
        static blocCompteCredit: string;
        static blocCompteAutreContrat: string;
        static blocCompteAssurance: string;
        static blocCompteAutreService: string;
        static categorieUnique: string;
        static categorieCompteCourant: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieEpargneLiquide: {
            categorie: string;
            libelleCategorie: string;
        };
        static categoriePlanContratEpargne: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieTitre: {
            categorie: string;
            libelleCategorie: string;
        };
        static categoriePlacementAssurance: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieChequier: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieCarte: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieCreditImmoConso: {
            categorie: string;
            libelleCategorie: string;
        };
        static categorieCreditPaiement: {
            categorie: string;
            libelleCategorie: string;
        };
    }
}

declare module syntheseClient {
    class ErreurControleur {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        fermer(): void;
    }
}

declare module syntheseClient {
    class VueDetailAdministratifControleur {
        private objetSynthese;
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private $q;
        private $route;
        private tools;
        private deloc;
        private clientProfilService;
        private syntheseClientSuiviService;
        private syntheseClientUtilitaireService;
        static $inject: string[];
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        adressePostale: Modeles.Coordonnes.ISyntheseClientAdresse;
        synthseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        dateDuJour: Date;
        pictoPersonne: string;
        designation: string;
        labelEmail: string;
        labelNumeroPersonne: string;
        labelIdClient: string;
        labelDateDeces: string;
        labelDatePresumeDeces: string;
        labelArreteSucc: string;
        labelProfession: string;
        labelSiren: string;
        private statut;
        private numeroPersonne;
        private identifiantClient;
        private libelleDateDeces;
        private libelleDatePresDeces;
        private libelleArreteSucc;
        private donneesCommerciales;
        private libelleMetierPersonne;
        private synthesePersonneMorale;
        constructor(objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $q: ng.IQService, $route: ng.route.IRouteService, tools: Service.SyntheseToolsService, deloc: Service.SyntheseClientDonneesDelocService, clientProfilService: Service.SyntheseClientProfilService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
        init(): void;
        idSyntheseCourante: string;
        /**
         * Permet de recuperer les informations de la personne morale
         *
         */
        recupererLibelleMetier(): void;
    }
}

declare module syntheseClient {
    class VueDetailCommercialControleur {
        private objetSynthese;
        private segmentationMarche;
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private $q;
        private $route;
        private tools;
        private donneesDelocService;
        private syntheseClientUtilitaireService;
        private syntheseClientSuiviService;
        private syntheseClientDonneesService;
        private modalService;
        static $inject: string[];
        /**
         * declarations des variables
         */
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        libellePictogramme: string;
        titreRubrique: string;
        private statut;
        private syntheseClientSuivi;
        private libelleAffectationComm;
        donneeAgence: Modeles.Commercial.IDonneeCommune;
        private syntheseClientProfil;
        private syntheseClientOrigine;
        private dateEntreeRelation;
        private indicateurDematClient;
        private labelIndicateurDematClient;
        private labelDateRelation;
        private listeSyntheseClientSegRevise;
        private listeSegAu1erJanv;
        segRevAu1erJanv: Modeles.Commercial.ISyntheseClientSegAu1erJanv;
        private segRevision;
        private segRelPart;
        private segRelPro;
        private codeSegmRevu;
        private codeSegmPart;
        private codeSegmPro;
        codeSegmRevuSU: string;
        private notionPro;
        mentionSocietaire: string;
        private listeSyntheseClientGP;
        private tableDV20;
        private donneesCommerciales;
        private tableCodeCanal;
        private tableCodeMedia;
        private tableCodeMotif;
        private synthesePersonneMorale;
        private libelleSocietaire;
        private libelleCourtSle;
        private libelleCalculeCourt;
        private libelleCalculeLong;
        private detailGP;
        libelleSegmentLigne1: string[];
        libelleSegmentLigne2: string[];
        tableauSimple: MyWay.UI.ImwTableOptions;
        tableauRelPart: MyWay.UI.ImwTableOptions;
        tableauRelPro: MyWay.UI.ImwTableOptions;
        libelleSegActivation: string[];
        constructor(objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient, segmentationMarche: Modeles.Commercial.IInfosSegmentationMarcheReponse, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $q: ng.IQService, $route: ng.route.IRouteService, tools: Service.SyntheseToolsService, donneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, modalService: MyWay.UI.IModalService);
        init(): void;
        /**
         * permet de recuperer les donnees de l'agence
         */
        recupererDonneesAgence(): ng.IPromise<void>;
        idSyntheseCourante: string;
        /**
         * permet de recuperer le code segment le plus recent
         * et si SX3O est vide SX8P est affiche
         */
        recuperersegment(): void;
        /**
         * permet de recuperer le libelle affectation
         * A partir de la table donneesDelocServicealisée CODUSU
         */
        recupererSuiviCommercial(): void;
        /**
         * Permet d'afficher la date d'entree en relation du bloc commercial
         * @param dateEntreeRelation:string
         */
        afficherDateEntreeEnRalation(): void;
        /**
         * Permet de recuperer le libelle e-document activé ou non activé
         * Le résultat attendu doit être une string ou null
         *
         * @param profilClient {Modeles.Profil.ISyntheseClientProfil}
         * @return indicateurDematClient{string}
         */
        afficherDiversCaracteristique(syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil): string;
        recupererLibelleSegmentCom(): void;
        segmentCommercial: Modeles.Commercial.ISegmentCommercial;
        tableauColonneOptionsPersonne: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsSegActivation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsSegRelationnelle: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsUnivers: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(selectedObject: Object): void;
        genererTableauComposition(typeSegmentation: string): Modeles.Commercial.IListeDetailRelations[];
        affichageBlocSyntheseDesContacts(): boolean;
        getTableauComposition(): ng.IPromise<void>;
        ouvrirDetailSegmenation(typeSegmentation?: string): void;
    }
}

declare module syntheseClient {
    interface ILabelDetailProduit {
        label: string;
    }
    class VueDetailProduitsControleur {
        private objetSynthese;
        private $scope;
        private $timeout;
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private $route;
        private tools;
        private syntheseClientUtilitaireService;
        private syntheseProduitService;
        private syntheseClientDonneesService;
        private syntheseServicesService;
        syntheseClientConstantes: Constantes.Constantes;
        private $q;
        choixMultiples: ILabelDetailProduit[];
        nombreCategoriesMaximum: number;
        nombreCategoriesMaximumAtteint: boolean;
        nombreDeProduitsAvantOuverturePanneau: number;
        categoriesFiltrees: string[];
        isCategoriesFiltrees: boolean;
        ihmVisibleFiltre: boolean;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        syntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        libellePictogramme: string;
        private statut;
        syntheseClientServices: Modeles.Services.ISyntheseClientServices;
        numeroPersonne: number;
        libelleIconRisques: string;
        libelleBlocRisques: string;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        totalParEntiteProduits: number;
        totalParEntiteServices: number;
        totalParEntite: number;
        private totalProduitsActifs;
        private totalProduitsSoldes;
        private totalProduitsActifsFiltres;
        private totalProduitsSoldesFiltres;
        private totalProduitsServicesActifsOnglet;
        private totalProduitsServicesSoldesOnglet;
        private gerePar;
        domiciliation: string;
        libelleDomiciliation: string;
        libelleNoteBale: string;
        noteBale: string;
        libelleCotation: string;
        cotationBancaire: string;
        libelleModeComposition: string;
        private totalServicesActifs;
        private totalServicesSoldes;
        private totalServicesActifsFiltres;
        private totalServicesSoldesFiltres;
        totalProduitsServicesActifs: number;
        totalProduitsServicesActifsFiltres: number;
        totalProduitsServicesSoldes: number;
        totalProduitsServicesSoldesFiltres: number;
        nomEntiteService: string;
        tableauEntites: Array<Modeles.Services.ITableauProduitsServices>;
        listeProduits: any;
        listeServices: any;
        entiteSelectionnee: number;
        entiteOuverte: string[];
        chargementEnCours: boolean;
        choixTuilesListesVisible: boolean[];
        statutTabProduit: boolean[];
        filtreAffichage: string;
        /**
         * état de l'accordéon
         */
        private etatAccordeon;
        dateNaissance: string;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        applicationList: myway.portail.api.ApplicationList;
        static $inject: string[];
        constructor(objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient, $scope: ng.IScope, $timeout: ng.ITimeoutService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $route: ng.route.IRouteService, tools: Service.SyntheseToolsService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseServicesService: Service.SyntheseServicesService, syntheseClientConstantes: Constantes.Constantes, $q: ng.IQService);
        typeProduitSelectionne: string;
        verifierEtatAccordeon(): void;
        /**
         * gestion du max de catégories sélectionnées
         */
        filtrerParCategorie(): void;
        /**
         * filtrage des tuiles/blocs produits en fonction des critères sélectionnés
         */
        filtrer(): void;
        /**
         * filtrage visuel des blocs concernés (afficher/masquer en fonction des filtres catégories cochés)
         */
        private addCSSRule(sheet, selector, rules, index);
        init(): void;
        /**
         * modifier l'entité et le type de produit sélectionnés en cliquant sur un onglet; pas de retour attendu, seulement une affectation
         * @param typeProduit {string} le code état pour un produit actif ou soldé
         */
        changementOngletProduit(typeProduit: string): void;
        /**
         * switch l'onglet active .
         * @param typeProduit {string} le code état pour un produit actif ou soldé a activer
         */
        toggleActiveTab(typeProduit: string): void;
        recupererDonneesSyntheseServices(): ng.IPromise<void>;
        /**
         * gestion de l'ouverture/fermeture automatique du calque de filtres, via sortie/entrée de la souris sur le calque
         */
        private _reentre;
        sortirDuFiltre(): void;
        entrerDansFiltre(): void;
        /**
         * obtenir le nom de l'entité titulaire via son numéro
         * @param {number} numeroEntite le numéro d'entité titulaire
         * @param {boolean} modeComposition si true, on demande l'ajout du mode composition dans le libellé
         * @param {boolean} codeUsage le code usage pour générer le libellé
         * @return {string} libelle la designation courte de l'entité demandée
         */
        getLibelleEntite(numeroEntite: number, modeComposition: boolean, codeUsage: boolean): any;
        /**
         * obtenir le code et le mode de l'entité titulaire via son numéro
         * @param {number} numeroEntite le numéro d'entité titulaire
         * @param {boolean} modeComposition si true, on demande l'ajout du mode composition dans le libellé
         * @param {boolean} codeUsage le code usage pour générer le libellé
         * @return {string} libelle la designation courte de l'entité demandée
         */
        getModeCompEntite(numeroEntite: number, modeComposition: boolean, codeUsage: boolean): string;
        recupererTableauProduitsServices(): void;
        /**
         * obtenir le titre de l'onglet produit en fonction du codeEtatProduitService
         */
        titreOngletProduit: {
            "0": string;
            "1": string;
        };
        titreCourtOngletProduit: {
            "0": string;
            "1": string;
        };
        idSyntheseCourante: string;
        /**
         * calcul du nombre de produits et services pour une entite
         * @param {string} typeProduit le code état pour un produit actif ou soldé
         * @param {number} numeroEntite le numero d'entité titulaire à sélectionner
         * @return {number} total le nombre de produits et services pour une entite
         */
        getTotalProduitsServicesParEntite(typeProduit: string, numeroEntite: number): number | string;
        listeCategories: Service.ICategoriesFiltre[];
        panneauAOuvrir: string;
        verifierClick(): void;
    }
}

declare module syntheseClient {
    class VueDetailRisquesAlertesControleur {
        private $scope;
        private objetSynthese;
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private $q;
        private $route;
        private tools;
        private syntheseClientUtilitaireService;
        private syntheseClientSuiviService;
        private syntheseClientRisquesAlertesService;
        private syntheseClientProfilService;
        private syntheseClientDonneesService;
        private syntheseClientDonneesDelocService;
        private syntheseProduitService;
        private modalService;
        private $rootScope;
        static $inject: string[];
        private donneesCommerciales;
        private synthesePersonneMorale;
        private codeExisteInfoInterneService;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        profilClient: Modeles.Profil.ISyntheseClientProfil;
        clientAdresseNpai: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresseNPAI;
        clientAdressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        listeMessage: string[];
        libellePictogramme: string;
        titreRubrique: string;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        synthseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        offresEnInstance: Modeles.OffresEnInstance.IOffre[];
        syntheseClientServices: Modeles.Services.ISyntheseClientServices;
        syntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        identifiantPersonne: number;
        numeroEntiteTitulaire: number;
        libelleQcf: string;
        pictoPersonne: string;
        designation: string;
        statut: string;
        labelStatutPersonne: string;
        numeroPersonne: number;
        libelleStatutPersonne: string;
        statutPersonne: string;
        libelleFiben: string;
        noteFiben: string;
        libelleDateFiben: string;
        dateFiben: string;
        libelleCotation: string;
        codeCotation: string;
        capaciteJuridique: string;
        libelleSurendettement: string;
        libelleEtatDossier: string;
        libelleRetourRpm: string;
        indicAlerteSurPersonne: string;
        libelleIndicAlerteReclamation: string;
        libelleContentieux: string;
        libelleCompteEnDesherence: string;
        libelleReglementaire: string;
        libelleDegSensibilitePers: string;
        libelleIndicPresenceActeSaisie: string;
        libelleWatchList: string;
        libelleAdressePostaleAcorriger: string;
        libelleAdresseAcontroler: string;
        libelleAffichageAdresseNpai: string;
        libelleIndicDecesPresume: string;
        dateDecesPresume: string;
        libelleDatePresDeces: string;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        afficherTableau: boolean;
        provenance: string[];
        codeTypeUsage: string[];
        modeComposition: string[];
        libelleInterditBancaire: string;
        totalListeMessageBoutonAlerte: number;
        totalAlerte: string;
        listeAlertes: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeBouton: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeMessage: string[];
        private _messageSelectionne;
        constructor($scope: ng.IScope, objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $q: ng.IQService, $route: ng.route.IRouteService, tools: Service.SyntheseToolsService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseClientProfilService: Service.SyntheseClientProfilService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientDonneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseProduitService: Service.SyntheseProduitService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService);
        messageSelectionne: Modeles.AlertesMessagesService.IDetailInformationService[];
        tableauSimple: MyWay.UI.ImwTableOptions;
        informationService: Modeles.AlertesMessagesService.IDetailInformationService[];
        tableauColonneOptionsDateCreation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDateFin: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleMessage: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCreePar: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsProvenance: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(selectedObject: Object): void;
        init(): void;
        idSyntheseCourante: string;
        recupererDonneesMessageService(): ng.IPromise<void>;
        /**
         * permet de verifier dans la liste des numero entite titulaire s'il y'a la présente des offres en instance
         */
        recupererDonneesOffresEnInstance(): void;
    }
}

declare module syntheseClient {
    class VueSyntheseControleur {
        private objetSynthese;
        private syntheseInitialisationService;
        private $route;
        private tools;
        private syntheseClientUtilitaireService;
        private syntheseProduitService;
        syntheseTypeBlocs: Service.Typologiesblocs;
        chargementLong: syntheseClient.Service.IChargement;
        objetRoute: syntheseClient.Modeles.Routage.IScRouteParam;
        statutPersonne: string;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        syntheseClientServices: Modeles.Services.ISyntheseClientServices;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        static $inject: string[];
        constructor(objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $route: ng.route.IRouteService, tools: Service.SyntheseToolsService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService, syntheseTypeBlocs: Service.Typologiesblocs);
        init(): void;
        idSyntheseCourante: string;
        listeBlocs(): Modeles.Vues.IBlocs[];
    }
}

declare module syntheseClient {
    class SyntheseMainControleur {
        private $route;
        private $q;
        private $location;
        private $rootScope;
        private $anchorScroll;
        private initialisationService;
        private utilitaireService;
        private chargementService;
        objetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        statut: string;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        urlVueSynthese: string;
        urlVueDetailAdministratif: string;
        urlCommercial: string;
        urlRisques: string;
        statutPersonne: string;
        urlProduits: string;
        routeChange: boolean;
        static $inject: string[];
        constructor($route: ng.route.IRouteService, $q: ng.IQService, $location: ng.ILocationService, $rootScope: ng.IRootScopeService, $anchorScroll: ng.IAnchorScrollService, initialisationService: syntheseClient.Service.SyntheseInitialisationService, utilitaireService: Service.SyntheseClientUtilitaireService, chargementService: Service.SyntheseClientChargementService);
        popupinImpressionCharge: boolean;
        popupGestionMessageService: boolean;
        estARecharger: boolean;
        vueCourante: Modeles.Vues.IEnteteObjet;
        private getDetailUrlBase(vue, typePersonne);
        private init();
        private onChangeRoute(event, next, current);
    }
}

declare module syntheseClient.Enumerations.Utilitaires {
    enum CodeCriteresRecherche {
        NUMERO_COMPTE = 1,
        NUMERO_CREDIT = 2,
    }
}

declare module syntheseClient.Modeles.Vues {
    interface IBlocs {
        numeroOrdre: number;
        bloc: IDetailBloc;
    }
    interface IDetailBloc {
        identifiantBloc: number;
        identifiantBlocEnfant: number;
        identifiantGabarit: number;
        typePersonne: string;
        categorieDomaine: string;
        libelleBlocSynthese: string;
        icone: string;
        indicateurSuppression: number;
        indicateurPersonnalisable: number;
        typeBloc: string;
        niveauBloc: string;
        referenceExterneAgent: number;
    }
    interface IListeVueSynthese {
        listeVueSynthese: Array<IVueSynthese>;
    }
    interface IVueSynthese extends MyWay.UI.IBoutonActionRiche {
        idSynthese?: string;
        id: string;
        url: string;
        indicateurVueParDefaut: boolean;
        libelleVueSynthese: string;
        numeroSynthesePerso: number;
        typePersonne: string;
        typeVision: string;
    }
    interface IEnteteObjet extends MyWay.UI.IBoutonActionRiche {
        url?: string;
        id?: string;
    }
}

declare module syntheseClient.Modeles.TableProduit {
    interface ITableProduit {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITableProduitItem>;
    }
    interface ITableProduitItem {
        GREGM1: string;
        LNEGCO: string;
        CIEGVU: string;
        DDEJCO: string;
        CIEGFT: string;
        COEGPJ: string;
        LCEGCO: string;
        DFEJCO: string;
        COEXSP: string;
        QSESAG: string;
        CODIPR: string;
        BITRAN: string;
        IDEGPS: string;
        COLIDV: string;
        QPESAG: string;
    }
    interface ITableCarte {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITableCarteItem>;
    }
    interface ITableCarteItem {
        CTKTSV: string;
        CIKTMC: string;
        COCXBQ: string;
        CDKRPC: string;
        CODIUE: string;
        COKTTD: string;
        COGXPR: string;
        LBGXCT: string;
        CODMPR: string;
        COKTIC: string;
        CIKTLS: string;
        CODEFM: string;
        COKTIB: string;
        COKTBF: string;
        COKTCD: string;
        CTKRCA: string;
        GRKTPP: string;
        COKTUS: string;
        CIKTEC: string;
        CNKRCA: string;
        LLKTCT: string;
    }
    interface ITableOffre {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITableOffreItem>;
    }
    interface ITableOffreItem {
        IDEGPS: string;
        COLIDV: string;
        QPESAG: string;
        NOEGOU: string;
        COEIMF: string;
        GREGM1: string;
        LNEGCO: string;
        COCXBQ: string;
        CIEGCF: string;
        DDEJCO: string;
        COEGPJ: string;
        LCEGCO: string;
        DFEJCO: string;
        QSESAG: string;
    }
    interface ITablePret {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<ITablePretItem>;
    }
    interface ITablePretItem {
        COEGPY: string;
        COEGPX: string;
        LLEGXE: string;
    }
}

declare module syntheseClient.Modeles.Commercial {
    interface ISyntheseClientSuivi {
        codeSuiviPar: string;
        nomAgentTraitement: string;
        edsDomiciliation: number;
        referenceExterneEDSNiveau1: number;
        typeEDS: string;
        identifiantElementStructure: number;
        typeElementStructure: string;
        codeTypePortefeuille: string;
        codeAgentSuiviPar: number;
        idEdsInterneSuiviPar: number;
        codeCiviliteSuiviPar: string;
    }
    interface ISyntheseClientGP {
        codeEtatSuiviPersonnalise: string;
        libelleCalculeCourtEds: string;
        libelleCalculeCourtEds1: string;
        debutValiditeGestionPrivee: string;
        libelleCourtEDSClientGP: string;
    }
    interface ISyntheseClientSegRevise {
        codeForcageTpSegmentation: string;
        dateSegmRisqueRevu: string;
        codeSegmRevu: string;
        libelleCourtSegmRevu: string;
        libelleSegmRevu: string;
    }
    interface ISyntheseClientSegAu1erJanv {
        dateSegmRisque0101: string;
        codeSegm0101: string;
        libelleCourtSegm0101: string;
        libelleSegm0101: string;
    }
    interface IListeSyntheseClientSegAu1erJanv {
        listeSyntheseClientSegAu1erJanv: Array<ISyntheseClientSegAu1erJanv>;
    }
    interface IListeSyntheseClientGP {
        listeSyntheseClientGP: Array<ISyntheseClientGP>;
    }
    interface ISyntheseClientPiecesManquantes {
        nbPiecesManquantes: number;
    }
    interface ISyntheseClientDonneesCommerciales {
        codeExistenceAlertesCom: string;
        codeExistenceInfoclient: string;
        codeExistenceInfoListeNoire: string;
        dateArreteDossierSuccession: string;
        codeExistenceAccrocheGuichet: string;
        nbDossiersVenteActifs: number;
        codeEtatCompletudeDossier: string;
        dateEnregistrementRendezVous: string;
        nbOpportunitesParRelation: number;
        codeExisteInfoInterneService: string;
        codeExistenceEvtCommerciaux: string;
        indicExistenceRdvJourClient: string;
        syntheseClientPiecesManquantes: ISyntheseClientPiecesManquantes;
    }
    interface ISyntheseClientSurendettement {
        indicPresenceOppo0109Active: string;
        codeFamilleDossier: string;
    }
    interface IInfosSegmentationMarcheReponse {
        codeEtablissement: string;
        identificationTiers: string;
        libelleSegmentationCalculee: string;
        codeSegmentationCalculee: string;
        libelleCourtSegmentationCalculee: string;
        dateCalculSegmentation: string;
        dateModificationSegmentation: string;
        codeForcageSegmentation: string;
        codeSegmentationForcee: string;
        libelleSegmentationForcee: string;
        libelleCourtSegmentationForcee: string;
        codeTypeSegmentMarche: string;
    }
    interface ICaracteristiqueAgence {
        comptoirGuichetRattachement: IComptoirGuichetRattachement;
        donneeCommune: IDonneeCommune;
        donneeSpecifique: IDonneeSpecifique;
        responsableAgence: IResponsableAgence;
        localisation: Array<ILocalisation>;
    }
    interface IComptoirGuichetRattachement {
        codeComptoirBDF: string;
        codeGuichetRisqueBDF: string;
        codeGuichetInterbancaire: string;
        codeGuichetStatistiqueBDF: string;
        codeGuichetBCE: string;
        codeEchantillonBCE: string;
        indicateurGuichetPermanentBCE: string;
        libelleComptoirBDF: string;
        libelleGuichetRisqueBDF: string;
    }
    interface IDonneeCommune {
        referenceElementStructure: number;
        identifiantElementStructure: number;
        typeElementStructure: string;
        libelleElementStructure: string;
        dateDebutValiditeEDS: string;
        dateFinValiditeEDS: string;
        codeEtablissement: string;
        libelleTypeElementStructure: string;
    }
    interface IDonneeSpecifique {
        typeAgence: string;
        codeExistenceCoffre: string;
        codeValidationAutoDepotCheque: string;
    }
    interface ILocalisation {
        identifiantSite: number;
        typeAdresse: string;
        dateDebutValiditeSite: string;
        dateFinValiditeSite: string;
    }
    interface IResponsableAgence {
        identifiantResponsableEDS: number;
        dateDebutValiditeResponsable: string;
        dateFinValiditeResponsable: string;
    }
    interface IListeDetailRelations {
        codeSegmentation: string;
        codeSegmentActivationPro: string;
        typeSegmentationSuMensuel: string;
        codeSegmentationSuMensuel: string;
        identifiantPersonne: number;
        nomRaisonSociale: string;
        libelleSegmentationCommercialLigne1: string;
        libelleSegmentationCommercialLigne2: string;
        libelleSegmentActivation: string;
        segmentationRelationPro: string;
        segmentationRelationParticulier: string;
    }
    interface ISegmentCommercial {
        listeDetailRelations: Array<IListeDetailRelations>;
    }
}

declare module syntheseClient.Modeles.Coordonnes {
    interface ISyntheseClientAdresse {
        codePays: string;
        codeTypeRetourPtt: string;
        dateDernierRetourPttAdresse: Date;
        identifiantAdresse: number;
        codeTypeAdresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        codeValiditeAdresseUNISERV: string;
        codeValiditeAdresseUNIMAIL: string;
        ligne2AdresseLong: string;
        ligne3AdresseLong: string;
        ligne4AdresseLong: string;
        ligne5AdresseLong: string;
        ligne6AdresseLong: string;
    }
    interface ISyntheseClientAdresseNPAI {
        identifiantAdresse: number;
        numeroChronoProfessionnel: number;
        numeroChronoLieuActivite: number;
        codeTypeAdresse: string;
        codeValiditeAdresseUNISERV: string;
        codeValiditeAdresseUNIMAIL: string;
        designationCourte: string;
        numeroTelephoneAdresse: string;
        codePays: string;
        codeTypeRetourPtt: string;
        dateDernierRetourPttAdresse: string;
        dateCreationAdresse: string;
        dateRestructurationAdresse: string;
        dateDerniereMajAdresse: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        ligne2AdresseLong: string;
        ligne3AdresseLong: string;
        ligne4AdresseLong: string;
        ligne5AdresseLong: string;
        ligne6AdresseLong: string;
        codeEtatAdressePND: string;
    }
}

declare module syntheseClient.Modeles.DonneesDeloc {
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
    interface ICODIMC {
        Value: string;
        Key: string;
    }
    interface IDV2C {
        LCDMLI: string;
        LIDMDO: string;
        CTDMCP: string;
        LCDMCA: string;
        LCDMDO: string;
        CTDMDO: string;
        DDDAVA: string;
        DFDAVA: string;
        LCDMAP: string;
    }
    interface IDV7A {
        CTDSMC: string;
        CTDMNE: string;
        CTDMCP: string;
        CTDMTE: string;
        CTDMIN: string;
        CTDMBI: string;
        CTDMER: string;
        CTDMDO: string;
        LIDIPR: string;
        LLDIPR: string;
        DDDAVA: string;
        QUDIPR: string;
        DFDAVA: string;
        CTDMTT: string;
        CODMPR: string;
        CTDMAC: string;
        CIDMAL: string;
        CADMRQ: string;
        CODXET: string;
        CTDMFP: string;
        CTDMCA: string;
    }
    /**
     * SU1P
     */
    interface ISU1P {
        DFEJDA: string;
        CTGXMF: string;
        DDLIEU: string;
        COCXBQ: string;
        LNSMPX: string;
        DDLIEE: string;
        COLIDO: string;
        CTLIME: string;
        COSXAP: string;
        DFLIFR: string;
        DDEJDA: string;
        WLNLU: string;
        COEIO1: string;
        CTSFBA: string;
    }
    interface IDU1A {
        categorieSocioprofessionnelle: string;
        libelleCategorieSociopro: string;
    }
    interface IListeDU1A {
        donnees: Array<IDU1A>;
    }
    interface IListeDV7A {
        donnees: Array<IDV7A>;
    }
    interface IListeDV2C {
        donnees: Array<IDV2C>;
    }
    interface ICODADS {
        Value: string;
        Key: string;
    }
    interface IListeCODADS {
        donnees: Array<ICODADS>;
    }
    interface IDelocKeyValue {
        Value: string;
        Key: string;
    }
    interface IListeDelocKeyValue {
        donnees: Array<IDelocKeyValue>;
    }
    interface IDV20 {
        CIDMSN: string;
        CODMCI: string;
        CIDMSM: string;
        CMDMMO: string;
        LIDMFS: string;
        CODMCA: string;
        LIDMIT: string;
        LIDMEL: string;
        GRDMGP: string;
        CODMPF: string;
        CODMG9: string;
        LIDMSE: string;
        CIDMSV: string;
        PEDMPE: string;
        CODMCS: string;
        CODMCR: string;
    }
    interface IListeDV20 {
        donnees: Array<IDV20>;
    }
    interface ID72C {
        DDEHVA: string;
        CDDKCL: string;
        LBDKCL: string;
        DFEHVA: string;
    }
    interface IEV2X {
        COEGPY: string;
        COEGPX: string;
        LLEGXE: string;
    }
    interface ICARTE {
        CTKTSV: string;
        CIKTMC: string;
        COCXBQ: string;
        CDKRPC: string;
        CODIUE: string;
        COKTTD: string;
        COGXPR: string;
        LBGXCT: string;
        CODMPR: string;
        COKTIC: string;
        CIKTLS: string;
        CODEFM: string;
        COKTIB: string;
        COKTBF: string;
        COKTCD: string;
        CTKRCA: string;
        GRKTPP: string;
        COKTUS: string;
        CIKTEC: string;
        CNKRCA: string;
        LLKTCT: string;
    }
    interface IListeD72C {
        donnees: Array<ID72C>;
    }
    interface ID72D {
        DDEHVA: string;
        CDDKAF: string;
        LBDKME: string;
        DFEHVA: string;
        CDDKME: string;
    }
    interface IListeD72D {
        donnees: Array<ID72D>;
    }
    interface ID72E {
        CDDKAF: string;
        COCXBQ: string;
        CMDKMC: string;
        LMDKMC: string;
    }
    interface IListeD72E {
        donnees: Array<ID72E>;
    }
    interface IN831 {
        CENAPO: string;
        CENAID: string;
        YNOXEP: string;
        CENAPW: string;
    }
    interface IListeN831 {
        donnees: Array<IN831>;
    }
    interface IDU21 {
        CODLTS: string;
        LLDCSG: string;
        LLDCS1: string;
        CODLST: string;
    }
    interface IDU21Liste {
        donnees: Array<IDU21>;
    }
    interface IDU2L {
        CVDLHI: string;
        CODLTS: string;
        LIDLSG: string;
        CODLST: string;
        LIDLSC: string;
        CIDLRS: string;
    }
}

declare module syntheseClient.Modeles.EnqueteSatisfaction {
    interface IInformationEnqueteSatisfaction {
        codeEtablissement: string;
        identifiantPersonne: number;
        niveauSatisfaction: string;
        dateReponseEnqueteSatisfaction: string;
        libelleSatisfactionClient: string;
        noteRecommandation: string;
        motifEchange: string;
    }
    interface IEnqueteSatisfaction {
        resultatEnquete: IInformationEnqueteSatisfaction;
        commentaireEnquete: string;
    }
}

declare module syntheseClient.Modeles.SyntheseGlobale {
    interface ISyntheseDonneesClient {
        indicateurSynchroSynthese: myway.portail.api.IndicateurSynchroSyntheseEnum;
        indicateurChargement: boolean;
        indicateurSyntheseClient: boolean;
        syntheseClientDonneesSignaletiques: ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: syntheseClient.Modeles.Produits.ISyntheseClientProduits;
        syntheseClientServices: syntheseClient.Modeles.Services.ISyntheseClientServices;
    }
    interface ISyntheseClientDonneesSignaletiques {
        syntheseClientAdresse: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        syntheseClientProfil: syntheseClient.Modeles.Profil.ISyntheseClientProfil;
        syntheseClientDonneesCommerciales: syntheseClient.Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        syntheseClientSurendettement: syntheseClient.Modeles.Commercial.ISyntheseClientSurendettement;
        syntheseClientSuivi: syntheseClient.Modeles.Commercial.ISyntheseClientSuivi;
        listeSyntheseClientEntiteTitulaire: Array<Profil.ISyntheseClientEntiteTitulaire>;
        listeSyntheseClientSegRevise: Array<Commercial.ISyntheseClientSegRevise>;
        listeSyntheseClientSegAu1erJanv: Array<Commercial.ISyntheseClientSegAu1erJanv>;
        syntheseClientOrigineClient: syntheseClient.Modeles.Profil.ISyntheseClientOrigineClient;
        listeSyntheseClientGP: Array<Commercial.ISyntheseClientGP>;
        syntheseClientAdresseNPAI: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresseNPAI;
        listeSyntheseEnqueteSatisfaction: Array<syntheseClient.Modeles.EnqueteSatisfaction.IEnqueteSatisfaction>;
    }
}

declare module syntheseClient.Modeles.OffresEnInstance {
    interface IContainer {
        listeOffres: Array<IOffre>;
    }
    interface IOffre {
        codeRetour: number;
        numeroEntiteTitulaire: number;
        numeroOffre: number;
        dateOuvertureOffreSouscrite: string;
        codeEtatOffre: string;
        dateClotureOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitService: number;
        nomCommercialPS: string;
        nomCommercialCourtPS: string;
        codeFamilleGestionPS: string;
    }
}

declare module syntheseClient.Modeles.DetailProduits {
    interface ISyntheseClientProdLivretCommun {
        libelleOffre: string;
        numeroOffre: string;
        libelleEtatOffre: string;
    }
    interface ISyntheseClientProdCodevi extends ISyntheseClientProdLivretCommun {
        libelleCourtCarte: string;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdLEL extends ISyntheseClientProdLivretCommun {
        libelleCourtCarte: string;
    }
    interface ISyntheseClientProdLivretA extends ISyntheseClientProdLivretCommun {
        libelleCourtCarte: string;
        afficherLivretCond: boolean;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdLivretB extends ISyntheseClientProdLivretCommun {
        mntVersementRegulierLivretB: string;
        affichermntVersementRegulierLivretB: boolean;
        libelleDevise: string;
        soldeCompteDevTenu: string;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdLivretJeune extends ISyntheseClientProdLivretCommun {
        libelleCourtCarte: string;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdLivretDev extends ISyntheseClientProdLivretCommun {
    }
    interface ISyntheseClientProdLEP extends ISyntheseClientProdLivretCommun {
    }
    interface ISyntheseClientProdPEL extends ISyntheseClientProdLivretCommun {
        tauxPleinPel: string;
        tauxPelLee: string;
    }
    interface ISyntheseClientProdPEP {
        afficherNantissement: boolean;
        cumulDesRevenusRestantAPayer: string;
        afficherCumulDesRevenusRestantAPayer: boolean;
    }
    interface ISyntheseClientProdPEA {
        libelleEtatProduit: string;
        cumulDesVersementsSurPea: string;
    }
    interface ISyntheseClientProdEpargSalariale {
        nomCourtDomaineNomenclature: string;
        libelleEtablissementPilote: string;
        referenceInterne: string;
        dateOuvertureDossier: string;
        dateDenonciation: string;
        periodeArrete: string;
    }
    interface ISyntheseClientProdEpargnSalComp {
        nomCourtDomaineNomenclature: string;
        libelleEtablissementPilote: string;
        numeroCompte: string;
        dateOuvertureDossier: string;
        periodeArrete: string;
    }
    interface ISyntheseClientProdCreditCommun {
        libelleProduit: string;
        dateEffet: string;
        dateFin: string;
    }
    interface ISyntheseClientProdCredit extends ISyntheseClientProdCreditCommun {
        montantOrigine: string;
        TEG: string;
        montantVerse: string;
        montantRestant: string;
        montantGele: string;
        afficherNombreEcheance: boolean;
        nombreEcheances: string;
        libelleImpaye: string;
        montantImpaye: string;
    }
    interface ISyntheseClientProdCreditAlis extends ISyntheseClientProdCreditCommun {
        libelleContentieux: string;
        montantInitial: string;
        montantHorsBilan: string;
        dateMiseAJourInfos: string;
        montantLUtilisation: string;
        montantImpaye: string;
    }
    interface ISyntheseClientProdCreditBail {
        afficherDateArrete: boolean;
        libelleProduit: string;
        dateArrete: string;
        libelleOrganisme: string;
        numeroCompte: string;
        identifiantContrat: string;
        instanceOuverture: boolean;
    }
    interface ISyntheseClientProdCreditComp extends ISyntheseClientProdCreditCommun {
        libelleContentieux: string;
        montantInitial: string;
        montantHorsBilan: string;
        dateMiseAJourInfos: string;
        montantLUtilisation: string;
        montantImpaye: string;
    }
    interface ISyntheseClientProdAssCNP {
        dateArreteInfo: string;
        dateDebutEffet: string;
        montantISF: string;
        libelleEtatProduit: string;
    }
    interface ISyntheseClientProdAssCFFComp {
        libelleProduit: string;
        numeroOffre: string;
        libelleEtatVente: string;
    }
    interface ISyntheseClientProdAssNatixis {
        dateArrete: string;
        afficherISF: boolean;
        dateDebutEffet: string;
        mtIsfAnneeN: string;
        libelleEtatProduit: string;
        identifiantExtContratAss: string;
    }
    interface ISyntheseClientProdAssCFF {
        dateArrete: string;
        afficherMontantVersementInitial: boolean;
        montantVersementInitial: string;
        dateContrat: string;
        afficherCumulVersementOrigine: boolean;
        cumulVersementOrigine: string;
    }
    interface ISyntheseClientProdAssIARD {
        dateArrete: string;
        datePriseEffet: string;
        afficherOffre: boolean;
        numeroOffre: string;
    }
    interface ISyntheseClientProdAssIARDAllianz {
        libelleSituation: string;
        datePriseEffet: string;
        mtPrimeAssurance: string;
    }
    interface ISyntheseClientProdAssIARDComp {
        dateArrete: string;
        datePriseEffet: string;
        afficherOffre: boolean;
        numeroOffre: string;
    }
    interface ISyntheseClientProdOptAlis extends ISyntheseClientProdCreditCommun {
        libelleStatutDouteux: string;
        montantInitial: string;
        montantHorsBilan: string;
        montantRestant: string;
    }
    interface ISyntheseClientProdSocfim {
        nomCourt: string;
        libelleStatutContrat: string;
        libelleEtablissement: string;
        montantAutoriseQuotePart: string;
        montantEncoursQuotePart: string;
        quotePartFinancement: string;
        dateArrete: string;
    }
    interface ISyntheseClientProdTitres {
        dateValorisation: string;
        montantIsf: string;
        anneeCourante: string;
        dateArrete: string;
        libelleBlocageSouscription: string;
        afficherPourcentagePropriete: boolean;
        travail: string;
        pourcentagePropriete: string;
        valeurPortefeuille: string;
    }
    interface ISyntheseClientProdCCE extends ISyntheseClientProdLivretCommun {
        afficherNatureCompte: boolean;
        affichertypeAutorisationDecouvert: boolean;
        libelleTypeAutorisationDecouvert: string;
        libelleNatureCompte: string;
        libelleTypeFusion: string;
        libelleProduitNational: string;
        soldeCteDevise: string;
        montantDecouvertDevise: string;
        libelleDevise: string;
    }
    interface ISyntheseClientProdEscompteCCE extends ISyntheseClientProdLivretCommun {
        codeCategoriePapier: string;
    }
    interface ISyntheseClientProdDATHorsPEL {
        afficherTauxClientHorsInflation: boolean;
        tauxNominal: string;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdDATPEL {
        numeroRicePel: string;
    }
    interface ISyntheseClientProdCiloger {
        dateArretePosition: string;
        dateDerniereValorisation: string;
        nombrePart: string;
        libelleNature: string;
        dateCoursRachatScpi: string;
        mtEstimationRachatScpi: string;
        valeurUnitaireRachatScpi: string;
    }
    interface ISyntheseClientProdTrade {
        dateDebutAutorisation: string;
        dateEcheanceAutorisation: string;
        libelleTableProduit: string;
    }
    interface ISyntheseClientProdSAP {
        dateEffet: string;
        dateEcheance: string;
        dateMiseAJour: string;
        libelleStatutFormule: string;
        numeroCompte: string;
    }
    interface ISyntheseClientProdCarteAurore {
        numeroCarteRevolving: string;
        montantMensualite: string;
    }
    interface ISyntheseClientProdCptTeoz {
        libelleEtatCompte: string;
        montantDecouvertMax: string;
        dateEffet: string;
        montantSoldeRecouvrement: string;
        codeEtatDossier: string;
        montantDisponible: string;
        montantMensualite: string;
        dateDernierFinancement: string;
    }
    interface ISyntheseClientProdCarteDebCredit {
        libelleEtatCompte: string;
        montantDecouvertMax: string;
        dateEffet: string;
        montantSoldeRecouvrement: string;
        codeEtatDossier: string;
        montantDisponible: string;
        montantMensualite: string;
        dateDernierFinancement: string;
    }
    interface ISyntheseClientProdCartado {
        dateExpiration: string;
    }
    interface ISyntheseClientProdCautionFiliale {
        nomCourtDomCnce: string;
        libelleStatutContrat: string;
        montantTotalFinance: string;
        capitalRestantOuEncours: string;
        quotiteRisqPorteParGarant: string;
        periodeArrete: string;
    }
    interface ISyntheseClientProdCCI extends ISyntheseClientProdLivretCommun {
        libelleCourtNature: string;
        codeDevise: string;
        montantSoldeDisponible: string;
        libelle2: string;
    }
    interface ISyntheseClientProdOctav {
        libelleOffre: string;
        libelleEtatProduit: string;
        refExterneAgent: string;
        identExtEDSRattachement: string;
        refExtAgentCommercial: string;
        codeProduit: string;
        codeEtatProduit: string;
        dateCloture: string;
        datePriseEffet: string;
    }
    interface ISyntheseClientProdOPEFI {
        mtEngagementBrutBilanCt: string;
        mtEngagementBrutBilanMlt: string;
        mtEngagementBrutBilanEps: string;
        mtEngagementBrutBilanEc: string;
        mtEngagementBrutHorsBilanCt: string;
        mtEngagementBrutHorsBilanCmlt: string;
        mtEngagementBrutHorsBilanEps: string;
        mtEngagementBrutHorsBilanEc: string;
        periodeArrete: string;
        nombreOperations: string;
    }
    interface ISyntheseClientProdContratMonetique {
        designationTypePaiement: string;
        libelleEtat: string;
        codeEtatProduit: string;
        dateOuvertureContrat: string;
        dateClotureContrat: string;
        domiciliation: string;
    }
    interface ISyntheseClientProdAutoTransfert {
        numeroOffre: string;
    }
    interface ISyntheseClientProdCptInstance extends ISyntheseClientProdLivretCommun {
    }
    interface ISyntheseClientProdCptDepot extends ISyntheseClientProdLivretCommun {
        dateOuverture: string;
        libelleCourtCarte: string;
        afficherDetenteurCarte: boolean;
        afficherMotifDecouvert: boolean;
        libelleDecouvert: string;
        dateFin: string;
        afficherContentieux: boolean;
        afficherDevise: boolean;
        codeDevise: string;
        soldeCompte: string;
        afficherCumulMontant: boolean;
        cumulMontant: string;
        indiceChoix: boolean;
    }
    interface ISyntheseClientProdMomentverite {
        dateEffet: string;
        libelleTypeObjetCommercial: string;
        libelleEtatDossier: string;
    }
    interface ISyntheseClientProdCreditCEDI {
        libelleEtat: string;
        dateDerniereMaj: string;
        montantSoldeRecouvrement: string;
        afficherEtatDossier: boolean;
        codeEtatDossier: string;
        dateEffetEtatDossier: string;
        libelleStadeOffre: string;
        dateOuvertureSatellis: string;
        dateValidationSimulation: string;
        montantEmprunte: string;
        TEG: string;
        nombreEcheances: string;
    }
    interface ISyntheseClientProdFacturea {
        nomCourtDomaineNomenclature: string;
        libelleOrganisme: string;
        dateArrete: string;
        dateOuverture: string;
        dateEcheance: string;
    }
    interface ISyntheseClientProdCartAffComp {
        nomLong: string;
        dateFinValidite: string;
    }
    interface ISyntheseClientProdVega {
        dateDerniereValorisation: string;
        libelleEtatContrat: string;
        sommeDesCessionsAnneeEnCours: string;
        dateOuvertureContrat: string;
        afficherDateClotureContrat: boolean;
        dateClotureContrat: string;
        identifiantClient: string;
    }
    interface ISyntheseClientProdAssParaBanc {
        situationContrat: string;
        motifResiliation: string;
    }
    interface ISyntheseClientProdSmile {
        typeAdhesion: string;
        libelleProduit: string;
        origineAdhesion: string;
        dateResiliation: string;
    }
    interface ISyntheseClientProdGarantieSante {
        formule: string;
        dateDebutEffetContrat: string;
        dateFinEffetContrat: string;
        dateArrete: string;
        situationContrat: string;
        indicEligibilite: string;
        comptePrelevement: string;
    }
    interface ISyntheseClientProdCoffre {
        edsDomCoffre: string;
        libelleEdsCoffre: string;
        designationCoffre: string;
    }
}

declare module syntheseClient.Modeles.Produits {
    interface ISyntheseProduitsInfoCommune extends ISyntheseClientServicesInfoCom {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        libelleOffre: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        soldeProduitCommun: number;
        indicOppoIBCCE: string;
        indicOppoIBCptDepot: string;
        anneeAyantDroit: number;
        indicVersementDirectLivretA: string;
        nombreEcheanceExt: number;
        nombreEcheance: number;
        nombreEcheancesEnImpaye: number;
        nbreEchEnImpayeCredAlis: number;
        montantEcheance: number;
        montantEcheanceCredAlis: number;
        indicExistenceEngtDomicilation: string;
        codeRespectEngtDomiciliation: string;
        dateOuvertureService: string;
        identDossCommercialCredit: string;
        identifiantEnveloppe: string;
        deviseCredit: string;
        chargeMensuelleEndettement: number;
        mtEcheancePretAvecAssurance: number;
        identifiantContratCredBail: string;
        montantGarantiCredBail: number;
        montantEcheanceMer: number;
        montantAutoriseTotal: number;
        numeroContratCnp: string;
        libelleBlocageSouscriptionTitre: string;
        codeGestionnaireCompteTitres: string;
        codeDeviseTenueCompteCCE: string;
        dateEcheanceCompteHPEL: string;
        dateEcheanceComptePEL: string;
        libelleCourtContratIARD: string;
        libelleCourtContratIARDComp: string;
        typeSituationContratAssIARD: string;
        libelleSituationContratAss: string;
        montantAutoriseEnEuros: number;
        identifiantInterneSerena: string;
        numeroFormule: number;
        codeProduitNationalSAP: string;
        identifiantAdhesion: string;
        montantDecouvertUtileAurore: number;
        montantMensualiteCarteTeoz: number;
        mensualite: number;
        mntAutorisationCAU: number;
        montantGarantiEpargSal: number;
        typeSituationContratAssurance: string;
        codeEtatDossierCEDI: string;
        numDossContratProducteur: string;
        identifiantContratCefi: string;
        numDossierCetelemAurore: string;
        numeroDossierCetelemTeoz: string;
        codeEtatDossierCarteDB: string;
        numeroDossierCreditRevolving: number;
        identifiantContratDebCred: string;
        identifiantSupportCarte: string;
        numCarteAffaire: string;
        libelleCourtContratEpargSal: string;
        identifiantContratEpargSal: string;
        idtExterneContratPlacement: string;
        dateCreationEnregistrement: string;
        libelleLEtatTransfert: string;
        dateFinPel: string;
        codeEtatProduitServiceOrigine: string;
        libelleCourtFDG: string;
        identCredit: string;
        nomCommercialCourtPS: string;
        idExterneContratAssOM: string;
    }
    interface ISyntheseClientServicesInfoCom {
        libelleService: string;
        montantDecouvertCdd: number;
        codeNatureCompteCCE: string;
        montantDecouvertAutoDevise: number;
        identifiantLigneAlisOrigine: string;
        codeOrigineCredDossierOptAlis: string;
        typeCreditAlis: string;
        deviseCreditAlis: string;
        libelleTypeProduitCiloger: string;
        codeOffreCefiPretConso: string;
        libelleTypeProduitVega: string;
        libelle1CompteCci: string;
        codeDeviseTenueCptDepot: string;
        typeCredit: string;
        deviseCreditComp: string;
        libelleNatureCompteCCE: string;
        identifiantProduitAssCFF: string;
        libelleIdentifiantSourceExterne: string;
        nomCourtDomaineCNCECredBail: string;
        numeroContratIardComp: string;
        numeroCoffre: string;
        numeroSalleCoffre: number;
        codeTypeCoffre: string;
    }
    interface ISyntheseClientProduits {
        listeSyntheseClientCodeEtatProduit: Array<ISyntheseClientCodeEtatProduit>;
    }
    interface ISyntheseClientCodeEtatProduit {
        codeEtatProduitService: string;
        listeSyntheseClientEntiteTitulaireProduit: Array<ISyntheseClientEntiteTitulaireProduit>;
    }
    interface ISyntheseClientProdSmile {
        codeAdhesionActeGestion: string;
        operationSurForfaitALOrigine: string;
        identifiantCarteSmiles: string;
        dateCreationContratSMiles: string;
        dateResiliationContratSMiles: string;
    }
    class SyntheseclientTitulaireProduit implements ISyntheseClientEntiteTitulaireProduit {
        numeroEntiteTitulaireProd: number;
        listeSyntheseClientProdAssIARD: Array<ISyntheseClientProdAssIARD>;
        listeSyntheseClientProdLivretA: Array<ISyntheseClientProdLivretA>;
        listeSyntheseClientProdLivretB: Array<ISyntheseClientProdLivretB>;
        listeSyntheseClientProdLEP: Array<ISyntheseClientProdLEP>;
        listeSyntheseClientProdCptDepot: Array<ISyntheseClientProdCptDepot>;
        listeSyntheseClientProdLEL: Array<ISyntheseClientProdLEL>;
        listeSyntheseClientProdPEL: Array<ISyntheseClientProdPEL>;
        listeSyntheseClientProdPER: Array<ISyntheseClientProdPER>;
        listeSyntheseClientProdPEP: Array<ISyntheseClientProdPEP>;
        listeSyntheseClientProdPEA: Array<ISyntheseClientProdPEA>;
        listeSyntheseClientProdLivretJeune: Array<ISyntheseClientProdLivretJeune>;
        listeSyntheseClientProdLivretDev: Array<ISyntheseClientProdLivretDev>;
        listeSyntheseClientProdCptInstance: Array<ISyntheseClientProdCptInstance>;
        listeSyntheseClientProdEscompteCCE: Array<ISyntheseClientProdEscompteCCE>;
        listeSyntheseClientProdCptTeoz: Array<ISyntheseClientProdCptTeoz>;
        listeSyntheseClientProdVega: Array<ISyntheseClientProdVega>;
        listeSyntheseClientProdCredit: Array<ISyntheseClientProdCredit>;
        listeSyntheseClientProdTitres: Array<ISyntheseClientProdTitres>;
        listeSyntheseClientProdCoffre: Array<ISyntheseClientProdCoffre>;
        listeSyntheseClientProdCarteAurore: Array<ISyntheseClientProdCarteAurore>;
        listeSyntheseClientProdAssCNP: Array<ISyntheseClientProdAssCNP>;
        listeSyntheseClientProdCCE: Array<ISyntheseClientProdCCE>;
        listeSyntheseClientProdCreditComp: Array<ISyntheseClientProdCreditComp>;
        listeSyntheseClientProdAssCFF: Array<ISyntheseClientProdAssCFF>;
        listeSyntheseClientProdDATHorsPEL: Array<ISyntheseClientProdDATHorsPEL>;
        listeSyntheseClientProdDATPEL: Array<ISyntheseClientProdDATPEL>;
        listeSyntheseClientProdCreditAlis: Array<ISyntheseClientProdCreditAlis>;
        listeSyntheseClientProdCreditCEDI: Array<ISyntheseClientProdCreditCEDI>;
        listeSyntheseClientProdCiloger: Array<ISyntheseClientProdCiloger>;
        listeSyntheseClientProdTrade: Array<ISyntheseClientProdTrade>;
        listeSyntheseClientProdCreditBail: Array<ISyntheseClientProdCreditBail>;
        listeSyntheseClientProdEpargSalariale: Array<ISyntheseClientProdEpargSalariale>;
        listeSyntheseClientProdEpargnSalComp: Array<ISyntheseClientProdEpargnSalComp>;
        listeSyntheseClientProdOptAlis: Array<ISyntheseClientProdOptAlis>;
        listeSyntheseClientProdAutoTransfert: Array<ISyntheseClientProdAutoTransfert>;
        listeSyntheseClientProdSAP: Array<ISyntheseClientProdSAP>;
        listeSyntheseClientProdGarantieSante: Array<ISyntheseClientProdGarantieSante>;
        listeSyntheseClientProdFacturea: Array<ISyntheseClientProdFacturea>;
        listeSyntheseClientProdCartAffComp: Array<ISyntheseClientProdCartAffComp>;
        listeSyntheseClientProdCartAffaire: Array<ISyntheseClientProdCartAffaire>;
        listeSyntheseClientProdMomentverite: Array<ISyntheseClientProdMomentverite>;
        listeSyntheseClientProdSocfim: Array<ISyntheseClientProdSocfim>;
        listeSyntheseClientProdSmileComp: Array<ISyntheseClientProdSmileComp>;
        listeSyntheseClientProdCarteDebCredit: Array<ISyntheseClientProdCarteDebCredit>;
        listeSyntheseClientProdCautionFiliale: Array<ISyntheseClientProdCautionFiliale>;
        listeSyntheseClientProdAssIARDComp: Array<ISyntheseClientProdAssIARDComp>;
        listeSyntheseClientProdCCI: Array<ISyntheseClientProdCCI>;
        listeSyntheseClientProdOctav: Array<ISyntheseClientProdOctav>;
        listeSyntheseClientProdAssCFFComp: Array<ISyntheseClientProdAssCFFComp>;
        listeSyntheseClientProdAssIARDAllianz: Array<ISyntheseClientProdAssIARDAllianz>;
        listeSyntheseClientProdOPEFI: Array<ISyntheseClientProdOPEFI>;
        listeSyntheseClientProdAssNatixis: Array<ISyntheseClientProdAssNatixis>;
        listeSyntheseClientProdContratMonetique: Array<ISyntheseClientProdContratMonetique>;
        listeSyntheseClientProdCreditExterne: Array<ISyntheseClientProdCreditExterne>;
        listeSyntheseClientProdAssParaBanc: Array<ISyntheseClientProdAssParaBanc>;
        listeSyntheseClientProdCartado: Array<ISyntheseClientProdCartado>;
        listeSyntheseClientProdGarSanteColl: Array<ISyntheseClientProdGarSanteColl>;
        listeSyntheseClientProdSmile: Array<ISyntheseClientProdSmile>;
        listeSyntheseClientProdCodevi: Array<ISyntheseClientProdCodevi>;
        listeSyntheseClientProdFDG: Array<ISyntheseClientProdFDG>;
        listeSyntheseClientProdAssOM: Array<ISyntheseClientProdAssOM>;
    }
    interface ISyntheseClientEntiteTitulaireProduit {
        numeroEntiteTitulaireProd: number;
        listeSyntheseClientProdAssIARD: Array<ISyntheseClientProdAssIARD>;
        listeSyntheseClientProdLivretA: Array<ISyntheseClientProdLivretA>;
        listeSyntheseClientProdLivretB: Array<ISyntheseClientProdLivretB>;
        listeSyntheseClientProdLEP: Array<ISyntheseClientProdLEP>;
        listeSyntheseClientProdCptDepot: Array<ISyntheseClientProdCptDepot>;
        listeSyntheseClientProdLEL: Array<ISyntheseClientProdLEL>;
        listeSyntheseClientProdPEL: Array<ISyntheseClientProdPEL>;
        listeSyntheseClientProdPER: Array<ISyntheseClientProdPER>;
        listeSyntheseClientProdPEP: Array<ISyntheseClientProdPEP>;
        listeSyntheseClientProdPEA: Array<ISyntheseClientProdPEA>;
        listeSyntheseClientProdLivretJeune: Array<ISyntheseClientProdLivretJeune>;
        listeSyntheseClientProdLivretDev: Array<ISyntheseClientProdLivretDev>;
        listeSyntheseClientProdCptInstance: Array<ISyntheseClientProdCptInstance>;
        listeSyntheseClientProdEscompteCCE: Array<ISyntheseClientProdEscompteCCE>;
        listeSyntheseClientProdCptTeoz: Array<ISyntheseClientProdCptTeoz>;
        listeSyntheseClientProdVega: Array<ISyntheseClientProdVega>;
        listeSyntheseClientProdCredit: Array<ISyntheseClientProdCredit>;
        listeSyntheseClientProdTitres: Array<ISyntheseClientProdTitres>;
        listeSyntheseClientProdCoffre: Array<ISyntheseClientProdCoffre>;
        listeSyntheseClientProdCarteAurore: Array<ISyntheseClientProdCarteAurore>;
        listeSyntheseClientProdAssCNP: Array<ISyntheseClientProdAssCNP>;
        listeSyntheseClientProdCCE: Array<ISyntheseClientProdCCE>;
        listeSyntheseClientProdCreditComp: Array<ISyntheseClientProdCreditComp>;
        listeSyntheseClientProdAssCFF: Array<ISyntheseClientProdAssCFF>;
        listeSyntheseClientProdDATHorsPEL: Array<ISyntheseClientProdDATHorsPEL>;
        listeSyntheseClientProdDATPEL: Array<ISyntheseClientProdDATPEL>;
        listeSyntheseClientProdCreditAlis: Array<ISyntheseClientProdCreditAlis>;
        listeSyntheseClientProdCreditCEDI: Array<ISyntheseClientProdCreditCEDI>;
        listeSyntheseClientProdCiloger: Array<ISyntheseClientProdCiloger>;
        listeSyntheseClientProdTrade: Array<ISyntheseClientProdTrade>;
        listeSyntheseClientProdCreditBail: Array<ISyntheseClientProdCreditBail>;
        listeSyntheseClientProdEpargSalariale: Array<ISyntheseClientProdEpargSalariale>;
        listeSyntheseClientProdEpargnSalComp: Array<ISyntheseClientProdEpargnSalComp>;
        listeSyntheseClientProdOptAlis: Array<ISyntheseClientProdOptAlis>;
        listeSyntheseClientProdAutoTransfert: Array<ISyntheseClientProdAutoTransfert>;
        listeSyntheseClientProdSAP: Array<ISyntheseClientProdSAP>;
        listeSyntheseClientProdGarantieSante: Array<ISyntheseClientProdGarantieSante>;
        listeSyntheseClientProdFacturea: Array<ISyntheseClientProdFacturea>;
        listeSyntheseClientProdCartAffComp: Array<ISyntheseClientProdCartAffComp>;
        listeSyntheseClientProdCartAffaire: Array<ISyntheseClientProdCartAffaire>;
        listeSyntheseClientProdMomentverite: Array<ISyntheseClientProdMomentverite>;
        listeSyntheseClientProdSocfim: Array<ISyntheseClientProdSocfim>;
        listeSyntheseClientProdSmileComp: Array<ISyntheseClientProdSmileComp>;
        listeSyntheseClientProdCarteDebCredit: Array<ISyntheseClientProdCarteDebCredit>;
        listeSyntheseClientProdCautionFiliale: Array<ISyntheseClientProdCautionFiliale>;
        listeSyntheseClientProdAssIARDComp: Array<ISyntheseClientProdAssIARDComp>;
        listeSyntheseClientProdCCI: Array<ISyntheseClientProdCCI>;
        listeSyntheseClientProdOctav: Array<ISyntheseClientProdOctav>;
        listeSyntheseClientProdAssCFFComp: Array<ISyntheseClientProdAssCFFComp>;
        listeSyntheseClientProdAssIARDAllianz: Array<ISyntheseClientProdAssIARDAllianz>;
        listeSyntheseClientProdOPEFI: Array<ISyntheseClientProdOPEFI>;
        listeSyntheseClientProdAssNatixis: Array<ISyntheseClientProdAssNatixis>;
        listeSyntheseClientProdContratMonetique: Array<ISyntheseClientProdContratMonetique>;
        listeSyntheseClientProdCreditExterne: Array<ISyntheseClientProdCreditExterne>;
        listeSyntheseClientProdAssParaBanc: Array<ISyntheseClientProdAssParaBanc>;
        listeSyntheseClientProdCartado: Array<ISyntheseClientProdCartado>;
        listeSyntheseClientProdGarSanteColl: Array<ISyntheseClientProdGarSanteColl>;
        listeSyntheseClientProdSmile: Array<ISyntheseClientProdSmile>;
        listeSyntheseClientProdCodevi: Array<ISyntheseClientProdCodevi>;
        listeSyntheseClientProdFDG: Array<ISyntheseClientProdFDG>;
        listeSyntheseClientProdAssOM: Array<ISyntheseClientProdAssOM>;
    }
    interface ISyntheseClientProdAssOM {
        idExterneContratAssOM: string;
        designationCourtierAssExtBOM: string;
        libelleOptionCTAssuranceOM: string;
        dateSouscriptionContratAss: Date;
        encoursContrat: number;
        tauxAssurance: number;
        libelleCommContratAssOM: string;
        numeroCompteSupportContrat: string;
        nomCommercialCourtPS: string;
        nomCommercialPS: string;
    }
    interface ISyntheseClientProdFDG {
        libelleCourtFDG: string;
        identCredit: string;
    }
    interface IListeSyntheseClientProduitInfoCommune {
        listeSyntheseClientProduitInfoCommune: Array<ISyntheseClientProduitInfoCommune>;
    }
    interface ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        soldeProduitCommun: number;
        codeEtatProduitServiceOrigine: string;
        indPresenceDansRpm: string;
    }
    interface ISyntheseClientProdOffreInfoCommune extends ISyntheseClientProduitInfoCommune {
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        libelleOffre?: string;
    }
    interface ISyntheseClientProdSPSPereCommune extends ISyntheseClientProdOffreInfoCommune {
        identifiantProduitSPSPere: number;
        libelleOffre: string;
    }
    interface ISyntheseClientProdCCI extends ISyntheseClientProdSPSPereCommune {
        codeNatureCompteCci: string;
        soldeComptableCompte: number;
        mtSoldeDisponibleCompte: number;
        libelle1CompteCci: string;
        libelleCourtNatureCompte: string;
        libelle2CompteCci: string;
        numeroCompteCCI: string;
        codeDeviseTenueCompteCCI: string;
    }
    interface ISyntheseClientProdCCE extends ISyntheseClientProdSPSPereCommune {
        soldeDeviseTenueCompte: number;
        montantDecouvertAutoDevise: number;
        typeAutorisationDecouvert: string;
        typeNatureCompteEntreprise: string;
        codeTypeFusion: string;
        typeContratEntreprise: string;
        codeNatureCompteCCE: string;
        indicOppoIBCCE: string;
        PresenceDansRpmCCE: string;
        codeDeviseTenueCompteCCE: string;
        soldeCteDeviseTenueCpteCCE: number;
        montantDecouvertDevise: number;
        codeProduitNationalCCE: string;
        libelleNatureCompteCCE: string;
    }
    interface ISyntheseClientProdCarteAurore extends ISyntheseClientProdSPSPereCommune {
        mtDecouvertMaxSurCarteAurore: number;
        activiteContratAurore: string;
        montantMensualiteCarteAurore: number;
        montantDecouvertUtileAurore: number;
        numeroCarteRevolvingAurore: string;
        numDossierCetelemAurore: string;
        dateOuverturePSAurore: string;
        dateDernMajFichierImageAurore: string;
    }
    interface ISyntheseClientProdMntCommun extends ISyntheseClientProdSPSPereCommune {
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
    }
    interface ISyntheseClientProdEscompteCCE extends ISyntheseClientProdSPSPereCommune {
        codeCategoriePapier: string;
        signeMontantsEib: string;
        montantCumuleDesEffets: number;
        montantAutorisationEscompte: number;
    }
    interface ISyntheseClientProdCptTeoz extends ISyntheseClientProdSPSPereCommune {
        libelleEtatCompteTeoz: string;
        mtDecouvertMaxSurCptTeoz: number;
        montantDecouvertUtileTeoz: number;
        numCarteRevolvingTeoz: string;
        activiteContratTeoz: string;
        montantMensualiteCarteTeoz: number;
        numeroDossierCetelemTeoz: string;
        dateOuverturePSTeoz: string;
        dateDernMajFichierImageTeoz: string;
        dateDernierFinancementTeoz: string;
        montantDisponibleTeoz: number;
        codeEtatDossierCptTeoz: string;
        dateEffetEtatDossierNfiTeoz: string;
        mtSoldeRecouvrementTeoz: number;
    }
    interface ISyntheseClientProdCptInstance extends ISyntheseClientProdMntCommun {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        sousCodePSCptInst: string;
    }
    interface ISyntheseClientProdCommunLivret extends ISyntheseClientProduitInfoCommune {
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        codeEtatLOffre?: string;
        libelleOffre?: string;
        numeroOffre?: number;
        indChoixTracabilite: string;
        indChoixPartage: string;
    }
    interface ISyntheseClientProdLEP extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        anneeAyantDroit: string;
        indicAyantDroitAJustifierLep: string;
        anneeGraceLep: string;
    }
    interface ISyntheseClientProdLEL extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        codeProduitCarteLEL: string;
    }
    interface ISyntheseClientProdPEL extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        dateFinPel: string;
        tauxPelLee: number;
        tauxPleinPel: number;
        montantARegulariser: number;
        codEtatContractuelAnniversaire: string;
        syntheseClientAlertePEL: ISyntheseClientAlertePEL;
    }
    interface ISyntheseClientProdLivretDev extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        sousCodePSLivretDev: string;
        mntVersementRegulierLivretD: number;
    }
    interface ISyntheseClientProdCodevi extends ISyntheseClientProdCommunLivret {
        codeProduitCarteCodevi: string;
    }
    interface ISyntheseClientProdLivretB extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        sousCodePSLivretB: string;
        mntVersementRegulierLivretB: number;
        codeDeviseTenueCptDepot: string;
        soldeCompteDeviseTenueCpte: number;
    }
    interface ISyntheseClientProdLivretA extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicLivretConditionnel: string;
        indicVersementDirectLivretA: string;
        codeProduitCarteLivretA: string;
    }
    interface ISyntheseClientProdLivretJeune extends ISyntheseClientProdCommunLivret {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        dateTransformationEnEuro: string;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicAutorisationVirement: string;
        indicAutorisationRetraits: string;
        indicVersementDirectLivret: string;
        codeProduitCarteLivretJ: string;
    }
    interface ISyntheseClientProdCptDepot extends ISyntheseClientProdMntCommun {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        numeroOffre: number;
        codeEtatLOffre: string;
        codeCaractereForfaitaireOffre: string;
        identifiantProduitSPSPere: number;
        soldeProduit: number;
        capitalEnEuroAConversion: number;
        capitalEnFrancAConversion: number;
        codeDeviseAncienSoldeLivret: string;
        ancienSoldeProduit: number;
        indicateurModeGestionLivret: string;
        indicArchivageCompteLivret: string;
        indicateurCpteRattacheRmpLivret: string;
        indicDetenteurCarte: string;
        montantDecouvertCdd: number;
        typeDecouvert: string;
        dateFinValiditeDecouvAcceba: number;
        indicExistenceContentieux: string;
        indicateurHabilitationPredic: string;
        indicateurPertinencePredic: string;
        dateSituationPredic: string;
        codeCouleurMois: string;
        codeDerniereNoteMois: string;
        montantCumuleOperationEcartee: number;
        cumulReservesEncaissement: number;
        montantCumuleImpayePret: number;
        soldeCompteDeviseTenueCpte: number;
        indicExistenceEngtDomicilation: string;
        codeRespectEngtDomiciliation: string;
        libellePersonnalise: string;
        dateOuvertureOffreSouscrite: string;
        indicArchivageCompteDepot: string;
        codeProduitCarteCptDepot: string;
        indPresenceDansRpmCDepot: string;
        codeDeviseTenueCptDepot: string;
        cumulMntOpeEcarteesDevises: number;
        indCpteRattacheRmpDepot: string;
        indicOppoIBCptDepot: string;
        indChoixTracabilite: string;
        numeroOffreGBB: number;
        typeTitulaire: string;
    }
    interface ISyntheseClientProdAssIARD extends ISyntheseClientProdOffreInfoCommune {
        numeroContratIard: string;
        typeSituationContratAssIARD: string;
        datePriseEffetContratIARD: string;
        libelleCourtContratIARD: string;
        dateArreteInformationsIARD: string;
    }
    interface ISyntheseClientProdAutoTransfert extends ISyntheseClientProdOffreInfoCommune {
        codeEtatTraitementTransfert: string;
        codeGuichetClient: string;
        libelleLEtatTransfert: string;
        dateCreationEnregistrement: string;
        referenceProduitService: string;
        codeEtablissementAutoTransf: string;
        codeGuichetAutoTransf: string;
        idtDemandeTransfAuto: number;
    }
    interface ISyntheseClientProdSocfim extends ISyntheseClientProdOffreInfoCommune {
        nomCommercialProduitService: string;
        libelleEtablissementBancaire10c: string;
        libelleStatutContrat: string;
        quotiteEnRisquePorteeParGarant: number;
        typeConcours: string;
        montantAutoriseTotal: number;
        montantEncoursTotal: number;
        montantAutoriseQuotePartSocfim: number;
        montantEncoursQuotePartSocfim: number;
        quotePartFinancement: number;
        nomCourtDomCnceSocfim: string;
        periodeArreteInfSocfim: string;
    }
    interface ISyntheseClientProdCarteDebCredit extends ISyntheseClientProdOffreInfoCommune {
        decouvertMaxAutorise: number;
        mensualite: number;
        totalDu: number;
        numeroDossierCreditRevolving: number;
        decouvertUtilise: number;
        numCarteRevolvingDebCredit: string;
        montantDisponibleDebCred: number;
        identifiantContratDebCred: string;
        dateDernMajFichierImageDebC: string;
        libelleEtatCompteDebCred: string;
        codeEtatDossierCarteDB: string;
        dateEffetEtatDossierNfiDB: string;
        mtSoldeRecouvrementDebC: number;
        dateDernierFinancementDebC: string;
    }
    interface ISyntheseClientProdAssIARDComp extends ISyntheseClientProdOffreInfoCommune {
        typeSituationContratAssurance: string;
        datePriseEffetContrat: string;
        dateArreteInformations: string;
        numeroContratIardComp: string;
        libelleCourtContratIARDComp: string;
    }
    interface ISyntheseClientProdAssCFFComp extends ISyntheseClientProdSPSPereCommune {
        codeEtatVente: string;
    }
    interface ISyntheseClientProdAssIARDAllianz extends ISyntheseClientProdOffreInfoCommune {
        numeroContratIardHorsBpcea: string;
        codeSituationContratAssurance: string;
        libelleSituationContratAss: string;
        mtPrimeAssuranceIardTtc: number;
        idtExterneContratIardPro: string;
        datePriseEffetContratAllianz: string;
    }
    interface ISyntheseClientAlertePEL {
        etatContractuelProchAnniv: string;
        mtARegulariserNonRespect: number;
        codeEtatContractuelPotentiel: string;
        mtARegulariserPotentielNr: number;
        codeEtatPropositionAvenant: string;
        codeDevise: string;
    }
    interface ISyntheseClientProdPER extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        assuranceSurPer: string;
        compteTitrePER: string;
        soldeProduitPER: number;
    }
    interface ISyntheseClientProdPEP extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        dateEcheanceContractuellePep: string;
        indicNantissementPep: string;
        cumulDesRevenusRestantAPayer: number;
        soldeProduitPEP: number;
        sousCodePSPEP: string;
    }
    interface ISyntheseClientProdPEA extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        cumulDesVersementsSurPea: number;
        dateOuvertureService: string;
        soldeProduitPEA: number;
        sousCodePSPEA: string;
        indicateurCpteRattacheRmpPEA: string;
        codeGestionnaireComptePEA: string;
    }
    interface ISyntheseClientProdVega extends ISyntheseClientProduitInfoCommune {
        identifiantClient: string;
        dateOuvertureContratChezVega: string;
        dateClotureContratChezVega: string;
        sommeDesCessionsAnneeEnCours: number;
        codeEtatContart: string;
        libelleTypeProduitVega: string;
        mntValoCpteFinMoisVega: number;
        dateDerniereValorisationVega: string;
    }
    interface ISyntheseClientProdCreditExterne extends ISyntheseClientProduitInfoCommune {
        mtCapitalRestantDuExt: number;
        chargeMensuelleEndettExt: number;
        nombreEcheanceExt: number;
        dateFinCreditExt: string;
        cumulImpayesPretExt: number;
        indicExistenceCTXPretExt: string;
    }
    interface ISyntheseClientProdCredit extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        mtCapitalRestantDu: number;
        chargeMensuelleEndettement: number;
        nombreEcheance: number;
        dateFinCredit: string;
        cumulImpayesPret: number;
        indicExistenceContentieuxPret: string;
        montantOrigineCredit: number;
        tauxEffectifGlobal: number;
        mtTotalVerseUnPret: number;
        montantRestantAVerser: number;
        deviseCredit: string;
        mtCumuleCreancesGelees: number;
        codeOrigineCreditDossier: string;
        identifiantEnveloppe: string;
        PresenceDansRpmCredit: string;
        codeProduitNationalCredit: string;
        identDossCommercialCredit: string;
        dateEffetContratCredit: string;
    }
    interface ISyntheseClientProdTitres extends ISyntheseClientProduitInfoCommune {
        codeDevise: string;
        codeGuichet: string;
        codeProduit: string;
        identifiantProduitService: number;
        numeroCompte: string;
        indicateurExistenceOpposition: string;
        codeEtablissement: string;
        libelleProduit: string;
        valoGestitresPortefeuille: number;
        dateValorisationGestitres: string;
        libelleBlocageSouscriptionTitre: string;
        pourcentagePropriete: number;
        montantCessionsSeuilGeneral: number;
        plusMoinsValueSeuilGeneral: number;
        plusMoinsValueLatente: number;
        valoGestitresPTFPonderee: number;
        codeGestionnaireCompteTitres: string;
        dateArreteInformationsTitres: string;
        montantIsfTitres: number;
    }
    interface ISyntheseClientProdCoffre extends ISyntheseClientProduitInfoCommune {
        codeTypeCoffre: string;
        numeroCoffre: string;
        numeroSalleCoffre: number;
        edsDomiciliationCoffre: number;
        libelleEDSCoffre: string;
        designationBancaireCoffre: string;
        modeCompositionEntTitCoffre: string;
        codeUsageEntTitCoffre: string;
    }
    interface ISyntheseClientProdAssCNP extends ISyntheseClientProduitInfoCommune {
        numeroContratCnp: string;
        valeurRachatAssuranceCnp: number;
        dateArreteInformationsAssCNP: string;
        dateDebutEffetAssCNP: string;
        montantIsfAssCNP: number;
    }
    interface ISyntheseClientProdAssParaBanc extends ISyntheseClientProdSPSPereCommune {
        numeroAdhesionIardAsc: string;
        codeFormuleContratIard: string;
        statutContratIardParaBanc: string;
        numeroCompteAssParaBanc: string;
        numeroRibCpteNumeraireAssocie: string;
        datePriseEffetContratAssParaBanc: string;
        dateArretInfAssParaBanc: string;
        codeSituationContrat: string;
        codeMotifResiliation: string;
    }
    interface ISyntheseClientProdCreditComp extends ISyntheseClientProduitInfoCommune {
        identifiantCreditExterne: string;
        typeCredit: string;
        montantCrd: number;
        indicMontantCrdRenseigne: string;
        dateMiseAJourInfos: string;
        indicDateMajInfosRenseignee: string;
        dateDebutCredit: string;
        montantInitial: number;
        indicMontantInitialRenseigne: string;
        indicDateFinCreditRenseignee: string;
        periodiciteDesMER: string;
        dateProchaineEcheance: string;
        codeDateProchaineEchRenseigne: string;
        codeExistenceContentieux: string;
        montantImpaye: number;
        indicMontantImpayeRenseigne: string;
        nombreEcheancesEnImpaye: number;
        codeNombreImpayesRenseigne: string;
        date1erImpaye: string;
        indicDate1erImpayeRenseignee: string;
        indicMontantHorsBilanRenseigne: string;
        montantLUtilisation: number;
        montantHorsBilan: number;
        codeMacroFamilleDecisionnel: string;
        codeEtatProduitService: string;
        indicMntUtilisationRenseigne: string;
        identifiantProduitCredit: string;
        montantEcheance: number;
        indicMntEcheanceRenseigne: string;
        indicDateDebutCreditRenseigne: string;
        dateFinCreditComp: string;
        indPresenceDansRpmCComp: string;
        codeProduitNationalCredComp: string;
        deviseCreditComp: string;
        dateEffetContratCredit: string;
        dateFinCredit: string;
    }
    interface ISyntheseClientProdAssCFF extends ISyntheseClientProduitInfoCommune {
        codePresenceValeurRachat: string;
        valeurRachatAssurance: number;
        codePresenceDateArrete: string;
        mtVersementInitialContrat: number;
        codePresenceDateContrat: string;
        dateSouscriptionAssurance: string;
        cumulVersementsDepuisLOrigine: number;
        libelleIdentifiantSourceExterne: string;
        identifiantProduitAssCFF: string;
        dateArreteInformationsAssCFF: string;
        PresenceMontantVersementInit: string;
        PresenceCumVersementOrigine: string;
    }
    interface ISyntheseClientProdDATHorsPEL extends ISyntheseClientProduitInfoCommune {
        tauxNominalApplicableCompte: number;
        mtCapitalCompteHPEL: number;
        dateEcheanceCompteHPEL: string;
        sousCodePSHPEL: string;
        indChoixTracabilite: string;
        indChoixPartage: string;
    }
    interface ISyntheseClientProdDATPEL extends ISyntheseClientProduitInfoCommune {
        numeroRicePel: string;
        mtCapitalComptePEL: number;
        dateEcheanceComptePEL: string;
        sousCodePSPEL: string;
    }
    interface ISyntheseClientProdCreditAlis extends ISyntheseClientProduitInfoCommune {
        identifiantProduitCredAlis: string;
        montantEcheanceCredAlis: number;
        montantCrdAlis: number;
        indicMntCrdAlisRenseigne: string;
        dateMiseAJourInfosCredAlis: string;
        dateDebutCreditAlis: string;
        indicMntEchRenseignCredAlis: string;
        indicDateMajInfRenseigCrdAlis: string;
        indicDateDebutCrdAlisRenseign: string;
        montantInitialCredAlis: number;
        indicMntInitRenseignCrdAlis: string;
        dateFinCreditAlis: string;
        indicDateFinCrdAlisRenseign: string;
        periodiciteDesMERCrdAlis: string;
        dateProchaineEchCredAlis: string;
        codeDateProchEchCrdAlisRenseig: string;
        codeExistenceCTXCredAlis: string;
        montantImpayeCredAlis: number;
        indicMntImpayeCrdAlisRenseig: string;
        nbreEchEnImpayeCredAlis: number;
        codeNbreImpayesCrdAlisRenseig: string;
        date1erImpayeCredAlis: string;
        indicDate1erImpRenseigCrdAlis: string;
        PresenceDansRpmCredAlis: string;
        indicMntHorsBilanRenseigCrdAlis: string;
        indicMntUtilCrdAlisRenseigne: string;
        montantLUtilisationCrdAlis: number;
        montantHorsBilanCredAlis: number;
        codeMacroFamilleDecCrdAlis: string;
        codeProduitNationalCrdAlis: string;
        deviseCreditAlis: string;
        identCreditAlisExterne: string;
        typeCreditAlis: string;
    }
    interface ISyntheseClientProdCreditCEDI extends ISyntheseClientProduitInfoCommune {
        codeOffreCefiPretConso: string;
        numeroMysysDossierContratNfi: string;
        mtEcheancePretAvecAssurance: number;
        dateOuvertureContratSatellis: string;
        montantEmprunte: number;
        tauxEffectifGlobalCefi: number;
        nombreEcheancesPretCefi: number;
        periodiciteDesEcheancesCefi: string;
        identifiantContratCefi: string;
        datePremiereMensualite: string;
        dateFinPret: string;
        codeOptionAssTitulaire: string;
        codeOptionAssConjoint: string;
        libelleAssuranceProfilPretCefi: string;
        dateOctroi: string;
        tauxNominal: number;
        libelleSort: string;
        montantCapitalFinance: number;
        dateFinancement: string;
        dateValidationSimulation: string;
        libelleStadeLOffre: string;
        capitalRestantOuEncoursCEDI: number;
        libelleEtatCompteCEDI: string;
        dateDernMajFichierImageCEDI: string;
        mtSoldeRecouvrementCEDI: number;
        codeEtablissementCEDI: string;
        codeGuichetCEDI: string;
        dateProchaineEchCrdCEDI: string;
        codeEtatDossierCEDI: string;
        dateEffetEtatDossierNfiCEDI: string;
        numDossContratProducteur: string;
        refProduit2emeOccurence: string;
    }
    interface ISyntheseClientProdCiloger extends ISyntheseClientProduitInfoCommune {
        dateArretePosition: string;
        nombrePartScpi: number;
        libelleNatureScpi: string;
        libelleTypeProduitCiloger: string;
        mntValoCpteFinMoisCiloger: number;
        dateDerniereValorisationCiloger: string;
        mtEstimationRachatLigneScpi: number;
        dateCoursRachatScpi: string;
        valeurUnitaireRachatPartScpi: number;
    }
    interface ISyntheseClientProdTrade extends ISyntheseClientProduitInfoCommune {
        dateDebutAutorisation: string;
        dateEcheanceAutorisation: string;
        codeDeviseExpressionMt: string;
        montantAutoriseEnEuros: number;
        montantUtiliseEnCvEuros: number;
    }
    interface ISyntheseClientProdCreditBail extends ISyntheseClientProduitInfoCommune {
        sousCodeEtatContrat: string;
        capitalRestantOuEncoursCredBail: number;
        codeProduitNationalCredBail: string;
        nomCourtDomaineCNCECredBail: string;
        periodeArreteInfosCredBail: string;
        libelleOrganismeCredBail: string;
        identifiantContratCredBail: string;
        montantGarantiCredBail: number;
    }
    interface ISyntheseClientEpargCommun extends ISyntheseClientProduitInfoCommune {
        codeProduitNational: string;
        nomCourtDomaineNomenclatureCnce: string;
        periodeArreteInfos: string;
        dateOuvertureDossier: string;
        libelleEtablissementPilote: string;
    }
    interface ISyntheseClientProdEpargSalariale extends ISyntheseClientEpargCommun {
        dateDenonciationConventionNie: string;
        libelleCourtContratEpargSal: string;
        capitalRestantOuEncoursEpargSal: number;
    }
    interface ISyntheseClientProdEpargnSalComp extends ISyntheseClientEpargCommun {
        mtContrevaleurComptableBrute: number;
        codeCategorieProduitDerive: string;
        identifiantContratEpargSal: string;
        montantGarantiEpargSal: number;
        sousCodePSEpargSal: string;
    }
    interface ISyntheseClientProdSAP extends ISyntheseClientProduitInfoCommune {
        identifiantInterneSerena: string;
        numeroFormule: number;
        statutFormule: string;
        codeProduitNationalSAP: string;
        dateEffetSAP: string;
        dateEcheanceSAP: string;
        dateMiseAJourSAP: string;
        codeBanqueCptePrelevSAP: string;
        codeGuichetSAP: string;
        numeroCompteSAP: string;
        cleRibCpteSAP: string;
    }
    interface ISyntheseClientProdCartado extends ISyntheseClientProduitInfoCommune {
        identifiantSupportCarte: string;
        dateExpiration: string;
        codeTypePorteurCartado: string;
    }
    interface ISyntheseClientProdGarantieSante extends ISyntheseClientProduitInfoCommune {
        identifiantAdhesion: string;
        codeProduitMuracef: string;
        dateDebutEffetContrat: string;
        dateFinEffetContrat: string;
        codeMotifResiliation: string;
        codeSituationContrat: string;
        codeFormuleAssSante: string;
        indicEligibiliteClient: string;
        dateArreteInfGarSante: string;
        codeBanqueCptePrelevGarSante: string;
        codeGuichetGarSante: string;
        numeroCompteGarSante: string;
        cleRibCpteGarSante: string;
        segment: string;
    }
    interface ISyntheseClientProdFacturea extends ISyntheseClientEpargCommun {
        dateEcheanceDossier: string;
        mtCumCrdEncours: number;
        mtCumEncoursMoyenDateOp: number;
        mtCumBoPayesMoisEnCours: number;
        mtCumBoPayesCeMoisM: number;
        libelleOrganismeFacturea: string;
        mtCumCommApport1erJanv: number;
    }
    interface ISyntheseClientProdCartAffComp extends ISyntheseClientProduitInfoCommune {
        nomLongPsNomenclatureCnce: string;
        numCarteAffaire: string;
        mntEncTotalCartAffaire: number;
        typeCarteAffaire: string;
        dateFinValiditeCartAffaire: string;
        codeOppositionCartAffaire: string;
    }
    interface ISyntheseClientProdCartAffaire extends ISyntheseClientProduitInfoCommune {
        nomLongPsNomenclatureCnce: string;
        numCarteAffaire: string;
        mntEncTotalCartAffaire: number;
        typeCarteAffaire: string;
        dateFinValiditeCartAffaire: number;
        codeOppositionCartAffaire: string;
    }
    interface ISyntheseClientProdSmileComp extends ISyntheseClientProduitInfoCommune {
        numeroCompteSMiles: string;
        codeProduitNationalSmile: string;
        identifiantCarteSmilesComp: string;
    }
    interface ISyntheseClientProdCautionFiliale extends ISyntheseClientProduitInfoCommune {
        mntGarantiCAU: number;
        mntAutorisationCAU: number;
        nomCourtDomCnceCAU: string;
        libelleStatutContratCAU: string;
        periodeArreteInfosCAU: string;
        quotiteRisqPorteParGarantCAU: number;
        montantTotalFinanceCAU: number;
        capitalRestantOuEncoursCAU: number;
    }
    interface ISyntheseClientProdOctav extends ISyntheseClientProduitInfoCommune {
        idtExterneContratPlacement: string;
        dateCloturePs: string;
        refExterneAgentMaj: number;
        identExtEDSRattachementPI: number;
        codeProduitEpargne: string;
        montantEncoursContrat: number;
        datePriseEffetContratOctav: string;
        refExtAgentCommercialProduct: number;
    }
    interface ISyntheseClientProdOPEFI extends ISyntheseClientProduitInfoCommune {
        codeEtablissementOrigine: string;
        mtEngagementBrutBilanCt: number;
        mtEngagementBrutBilanMlt: number;
        mtEngagementBrutBilanEps: number;
        mtEngagementBrutBilanEc: number;
        mtEngagementBrutHorsBilanCt: number;
        mtEngagementBrutHorsBilanCmlt: number;
        mtEngagementBrutHorsBilanEs: number;
        mtEngagementBrutHorsBilanEc: number;
        nombreOperations: number;
        identifiantContratOPEFI: string;
        numeroSIRENOPEFI: string;
        periodeArreteInfosOPEFI: string;
    }
    interface ISyntheseClientProdAssNatixis extends ISyntheseClientProduitInfoCommune {
        numeroRibCompte: string;
        valeurRachat: number;
        mtCumBrutVerstPeridAnneeN: number;
        mtIsfAnneeN: number;
        dateArreteInformationsNatixis: string;
        dateDebutEffetNatixis: string;
        identifiantExtContratAssurance: string;
    }
    interface ISyntheseClientProdContratMonetique extends ISyntheseClientProduitInfoCommune {
        dateOuvertureContrat: string;
        dateClotureContrat: string;
        designationTypePaiementInterne: string;
        typePdtServContratAssocie: string;
        typeSupportContratCommercant: string;
        codeGuichetContratMonetique: string;
        numeroCompteContratMonetique: string;
        codeEtablissContratMonetique: string;
    }
    interface ISyntheseClientProdGarSanteColl extends ISyntheseClientProduitInfoCommune {
        numRibCpteGarSanteColl: string;
        mntPrimeAnInitGarSanteColl: number;
        codeTypeTarifGarSanteColl: string;
        dateArretInfGarSanteColl: string;
        dateOpeAssGarSanteColl: string;
        libProdGarSanteColl: string;
    }
    interface ISyntheseClientProdOptAlis extends ISyntheseClientProduitInfoCommune {
        identifiantLigneAlisOrigine: string;
        libelleLigneAlisOrigine: string;
        montantNonVerseCredit: number;
        dateFinValiditeReferentiel: string;
        montantEcheanceMer: number;
        codeStatutDouteuxPersonne: string;
        identDossCommercialOptAlis: string;
        mtTotalVerseUnPretOptAlis: number;
        codeDeviseOptAlis: string;
        dateOuvertureDossOptAlis: string;
        dateProchaineEchCrdOptAlis: string;
        mtCapitalRestantDuOptAlis: number;
        codeOrigineCredDossierOptAlis: string;
    }
    interface ISyntheseClientProdPIM {
        indicSteCivileImmoPatrimonial: string;
        indicSocieteExploitation: string;
        indicGarantieSurActifImmoFi: string;
        indicStructureRemboursConcours: string;
        indicexerciceSupActiviteImmo: string;
        codeCategorieProImmo: string;
        timestampCreationQuestionnaire: string;
        indicStructureDedieOpeImmo: string;
        codeEtablissement: string;
    }
    interface ISyntheseClientProdMomentverite extends ISyntheseClientProduitInfoCommune {
        dateEffetContrat: string;
        libelleNatureFinancement: string;
        libelleTypeObjetCommercialToc: string;
        libelleEtatDossier: string;
        typeLoi: string;
        libelleEntiteProprietaireDossier: string;
        libelleAgence: string;
        nomPrescripteur: string;
        codeNatureFinancement: string;
        codeEtatDossier: string;
        codeProduitNationalVerite: string;
    }
    interface IProduitCibleParRecherche {
        codeEtatProduitService: string;
        numeroEntiteTitulaireProd: number;
        produit: any;
    }
}

declare module syntheseClient.Modeles.Profil {
    interface ISyntheseClientOrigineClient {
        typeCategorieClient: string;
        indicSocietaire: string;
        libelleCourtSle: string;
        numeroTelephoneDomicile: string;
        adresseEMail: string;
        totalCollectePersonne: number;
        totalCreditPersonne: number;
        totalImpayesPersonne: number;
        totalDebitsDifferesPersonne: number;
        indicateurExistenceLiens: string;
        indicateurExistenceServices: string;
        libelleInseePays: string;
        totalTresoreriePersonne: number;
        codeResident: string;
        totalDesContentieuxPersonne: number;
        codeStatutDouteuxPersonne: string;
        codeBlocageVao: string;
        totalTresoreriePersonneCpteJoint: number;
        totalCollectePersonneCpteJoint: number;
        identifiantBad: string;
        codeEtatStatutPro: string;
        codePhaseRecouvrement: string;
        totalCreancesGeleesPersonne: number;
        codeSituation: string;
        totalCptCantonnementPersonne: number;
        indicateurExisteParticipations: string;
        codeDeviseOrigineClient: string;
        codeEtablissementOrigineClient: string;
        codePersonnaliteJuridique: string;
        numeroTelephoneTravail: string;
        numeroTelephoneCorresp: string;
        idEdsOrigineClient: number;
    }
    interface ISyntheseClientProfil {
        dateNaissance: string;
        designationCourte: string;
        codeCategorieSocioProf: string;
        dateEffetCsp: string;
        libelleProfessionParticulier: string;
        codeAppartenanceReseau: string;
        codeSuiviCommercial: string;
        nomCommercial: string;
        nomFamille: string;
        prenom: string;
        codeCapaciteJuridique: string;
        codMotifClotureEntTitulaire: string;
        codeCivilite: string;
        nomUsage: string;
        codeClientTiers: string;
        dateDeces: string;
        typeCotationFIBEN: string;
        indicExistenceProfessionnel: string;
        codeCommuneNaissance: string;
        codeCotation: string;
        dateDerniereMAJCotationProf: string;
        dateDernRevisionCotationPro: string;
        dateSituationBDF: string;
        noteBale2Personne: string;
        dateMAJEnregistrement: string;
        libelleMoteur: string;
        codeEtablissementNotation: string;
        cotationPrecedenteFibenBdf: string;
        dateCotationFibenBdfN1: string;
        codeDegradationCotationFiben: string;
        dateBDFAttributionEvenement: string;
        libelleEtablissementNotation: string;
        codeEtablissementPilote: string;
        libelleEtablissementPilote: string;
        indicPresenceActesaisieOuATD: string;
        codeAlerteWatchList: string;
        indicAlerteSurPersonne: string;
        indicAlerteReclamation: string;
        codeAdministrationSpecifique: string;
        codeDegreSensibilitePersonne: string;
        dateEntreeRelation: string;
        codeNiveauWatchListLocale: string;
        dateEntreeEnWatchListLocale: string;
        dateSortieWatchListLocale: string;
        codeNiveauWatchListNationale: string;
        dateEntreeEnWatchListNationale: string;
        dateSortieWatchListNationale: string;
        codeNiveauWatchListBanqueRef: string;
        dateEntreeEnWatchListBanqueRef: string;
        dateSortieWatchListBanqueRef: string;
        indicEnregHorsPresenceClient: string;
        codeTeteGroupe: string;
        codeNatureLienReglementaire: string;
        typeGroupe: string;
        codeSensContact: string;
        codeCanalContact: string;
        codeMediacontact: string;
        dateContact: string;
        codeMotifContact: string;
        codeNiveauConnaissanceClient: string;
        dateDernEvaluationConnaissance: string;
        codeProspect: string;
        indicDecesPresume: string;
        dateDecesPresume: string;
        codePresenceCompteDesherence: string;
        syntheseClientProfilSpecifiquePersonneMorale: ISyntheseClientProfilSpecifiquePersonneMorale;
        indicateurAlerteDRC: string;
        indicateurDematClient: string;
        niveauRisqueInvestisseur: string;
        dateDerniereEvalRisque: string;
        niveauSatisfaction: string;
        dateReponseEnqueteClient: string;
        profilClienteleFragile: string;
    }
    interface ISyntheseClientProfilSpecifiquePersonneMorale {
        raisonSocial: string;
        numeroSIREN: string;
        codeCategorieJuridique: string;
        codeCategoJuridi2DerCaracteres: string;
        numeroSIRET: string;
        dateCreationJuridique: string;
        designationLieuActivite: string;
    }
    interface ISyntheseClientEntiteTitulaire {
        numeroEntiteTitulaire: number;
        modeCompositionEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        codeEtatPersonne: string;
        indicateurEntiteTitulaireDouteuse: number;
        codeCotationBancaire: string;
        sousCodeModeCompositionET: string;
        timestampEvenementNotation: string;
        codeDomaineGestionPacbase: string;
        codeMessageErreur8c: string;
        libelleReponse: string;
        designationBancaireEntTitulaire: string;
        idEdsInterneEntiteTitulaire: number;
        edsDomiciliationEntiteTitulaire: number;
        typeEDSEntiteTitulaire: string;
        libelleCalculeCourtEdsET: string;
        identifiantEDSEntiteTitulaire: number;
        referenceExterneEDSN1ET: number;
        typeEDSNiveau1: string;
        libelleCourtEDSEntiteTitulaire: string;
        numeroTelephoneDomicileET: string;
        noteBale2EntiteTitulaire: string;
    }
    interface IListeSyntheseClientEntiteTitulaire {
        listeSyntheseClientEntiteTitulaire: ISyntheseClientEntiteTitulaire[];
    }
}

declare module syntheseClient.Modeles.AlertesMessagesService {
    interface ITableauMessage {
        dateDebutApplication: string;
        dateFinApplication: string;
        libelle1: string;
        designationLongueAgentInterne: string;
        designationBancaireCourte: string;
        modeCompositionET: string;
        codeTypeUsageET: string;
        codeProvenance: string;
        identifiantChrono: number;
        identifiantEntiteTitulaire: number;
    }
    interface ITableauEntitesTitulaires {
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
    }
    interface IModeleConteneurMessageService {
        listeDetailInformationservice: IModeleMessageService[];
    }
    interface IModeleMessageService {
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantChrono: number;
        identifiantEntiteTitulaire: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelle1: string;
        identifiantEDSAgent: number;
        codeProvenance?: string;
        designationBancaireCourte: string;
        modeCompositionET: string;
        codeTypeUsageET: string;
        designationLongueAgentInterne: string;
    }
    interface IAlerte {
        classe: string;
        libelle: string;
    }
    interface IDetailInformationService {
        designationBancaireCourte: string;
        modeCompositionET: string;
        codeTypeUsageET: string;
        identifiantPersonne: number;
        codeEtablissement: string;
        identifiantChrono: number;
        identifiantEntiteTitulaire: number;
        dateDebutApplication: string;
        dateFinApplication: string;
        libelle1: string;
        designationLongueAgentInterne: string;
        codeProvenance: string;
        identifiantEDSAgent: number;
    }
    interface IInformationService {
        listeDetailInformationservice: Array<IDetailInformationService>;
    }
    interface INoteBale2 {
        typeAttributaireNote: string;
        numeroPersonne: number;
        codeEtablissement: string;
        listeNoteBale2: Array<IDetailNoteBale2>;
    }
    interface IDetailNoteBale2 {
        codeTypeNoteBale2: string;
        codeEtatProprietaireNote: string;
        codeEtablissementPilote: string;
        libelleMoteur: string;
        libelleEtablissementPilote: string;
        libelleOrigineBale2: string;
        libelleProcessusBale2: string;
        indicateurNoteProspect: boolean;
        heureNotation: number;
        dateNotation: string;
        codeContexteMetierBale2: string;
        noteBale2Reduite: string;
        noteBale2calculee: string;
        codeEtablissementNoteur: string;
        libelleEtablissementNoteur: string;
    }
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeEtatEntiteTitulaire: string;
        modeCompositionIndivision: string;
        complementDesignationEntiteTitulaire: string;
        identifiantEDSDomiciliation: number;
        referenceEDSDomiciliation: number;
        libelleEDSDomiciliation: string;
    }
    interface IRechercheEntiteTitulaire {
        listeEntiteTitulaire: Array<IEntiteTitulaire>;
    }
    interface ITableauNoteBale {
        designationBancaireEntTitulaire: string;
        noteBale2EntiteTitulaire: string;
        timestampEvenementNotation: string;
    }
}

declare module syntheseClient.Modeles.Routage {
    interface IScRouteParam extends ng.route.IRouteParamsService {
        typePersonne: string;
        codeAgent: number;
        idEds: number;
        numeroPersonne: number;
        idSynthese: string;
    }
}

declare module syntheseClient.Modeles.DetailServices {
    interface ISyntheseServiceInfosCommune {
        libelleOffre: string;
        numeroOffre: string;
        libelleEtatOffre: string;
    }
    interface ISyntheseServiceDomilis extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServicePaieMobile extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInfoCartes extends ISyntheseServiceInfosCommune {
        rice: string;
        numeroContrat: string;
        typePersonne: string;
        numPersSouscripteurCartes: string;
        numOffreSouscriteCartes: string;
    }
    interface ISyntheseServiceInfoChequiers {
        libelleOffre: string;
        numeroOffre: string;
        libelleEtatOffre: string;
    }
    interface ISyntheseServiceCarteAffaire {
        indicateurSolidariteEntreprise: string;
        rib: string;
        indicateurExistenceOpposition: string;
        dateOpposition: string;
        motifOpposition: string;
        numeroCarteRemplacee: string;
        numeroContrat: string;
        identifiantBad: string;
    }
    interface ISyntheseServiceInfoOptimisTresorerie extends ISyntheseServiceInfosCommune {
        rice: string;
        riceVers: string;
    }
    interface ISyntheseServiceAbonLSE extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceAbonnServeurBancaire extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInfoPhoneEcureuil extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInfoDirectEcureuil extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInfoTelecureuil extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInfoNetecureuil extends ISyntheseServiceInfosCommune {
        designBancNetecureuil: string;
    }
    interface ISyntheseServiceSecureExpressCCE extends ISyntheseServiceInfosCommune {
        rice: string;
        optionSecure: string;
    }
    interface ISyntheseServiceDiamantCCE extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceEquipMonetique extends ISyntheseServiceInfosCommune {
        nomCommercial: string;
        rice: string;
    }
    interface ISyntheseServiceNvellesAssurParaBancaire {
        codeSituationContrat: string;
        codeMotifResiliation: string;
    }
    interface ISyntheseServiceInfoAssProfessionnelsB001 {
        montantGarantiAssurancePro: string;
        rice: string;
        nombrePersonnesPourContrat: string;
    }
    interface ISyntheseServiceASSProB002 {
        montantGarantiAssurancePro: string;
        rice: string;
        nombrePersonnesPourContrat: string;
    }
    interface ISyntheseServiceInfoBorneLibreService extends ISyntheseServiceInfosCommune {
        dateSouschomeBankingBLS: string;
        dateResiliationLAbonnement: string;
    }
    interface ISyntheseServiceInfoSurCIDAILLY {
        codeFinancementDailly: string;
        libelleFinancementDailly: string;
    }
    interface ISyntheseServiceInfoAlerteEcureuil extends ISyntheseServiceInfosCommune {
        statutGestionCanauxComm: string;
        numOffreSouscriteAlerteEcur: string;
        numPersSouscripteurAlerteEcur: string;
    }
    interface ISyntheseServiceInfoDEIMobile extends ISyntheseServiceInfosCommune {
        dateSouschomeBankingDEI: string;
        dateResiliationLAbonnement: string;
    }
    interface ISyntheseServiceInfoDEIPersonnesProtegees extends ISyntheseServiceInfosCommune {
        designBancDEIP: string;
    }
    interface ISyntheseServiceCertificat extends ISyntheseServiceInfosCommune {
        refPorteurCertificat: string;
        indicBlocageCertificat: string;
    }
    interface ISyntheseServiceFluxExtBDRsrvPCL {
        tarifAnnuel: string;
        mtCommission: string;
        nbSocietesActives: string;
        nbSocietesSupp: string;
        nbSocietesTotal: string;
        tauxUtilisation: string;
        periodeArreteInfosPCL: string;
        mtCumCommApport0101PCL: string;
        mtCommissioPrestRcouvAnnee: string;
    }
    interface ISyntheseServiceFluxExtBDRsrvPVGA {
        dateEcheanceDossier: string;
        montantChiffreAff: string;
        periodeArrete: string;
        mtCumCommApport: string;
    }
    interface ISyntheseServiceCashManagement extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceAlerteBDR extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceRMPNumerise extends ISyntheseServiceInfosCommune {
        codeProduit: string;
        dateSouscription: string;
        codeCanalGestion: string;
        dateFinValidite: string;
    }
    interface ISyntheseServiceSOLEnrolement extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceInternetSP extends ISyntheseServiceInfosCommune {
        designBanc: string;
    }
    interface ISyntheseServiceNumAnnuel extends ISyntheseServiceInfosCommune {
        dateSouscription: string;
        codeCanalGestion: string;
        dateFinValidite: string;
    }
    interface ISyntheseServiceCentralisationRecette extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceCoffreFortNum extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceSMONEY extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceVME extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceSmoneyP extends ISyntheseServiceInfosCommune {
    }
    interface ISyntheseServiceUNIK extends ISyntheseServiceInfosCommune {
        codeEtatAbonnUnik: string;
        dateEtatAbonn: string;
        libelleOption: string;
        libelleRoleUtilisateur: string;
        raisonSociale: string;
    }
    interface ISyntheseServiceInfoOptimTresorerieCCE extends ISyntheseServiceInfosCommune {
        rice: string;
        formatCompte: string;
        libelleValeur: string;
    }
    interface ISyntheseServiceSepamail extends ISyntheseServiceInfosCommune {
        optionInscription: string;
        datEnvReferentielNatixis: string;
        dateClotureResiliat: string;
    }
    interface ISyntheseServiceLogicash extends ISyntheseServiceInfosCommune {
        nombreCartes: string;
        rice: string;
    }
}

declare module syntheseClient.Modeles.Services {
    interface ISyntheseClientServicesInfoTuile extends ISyntheseClientServicesTuile {
        codePSExterne: string;
        libelleFamilleChequiers: string;
        libelleService: string;
        codeProduit: string;
        numeroCarteSamCh02: string;
        codeActivationECarteBleue: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroCarte: string;
        libelleProduit: string;
        identifiantSupportCarte: string;
        dateTransfertCompte: string;
        montantCapitalTransfere: number;
        codeDevise: string;
        referenceSrvAbonnLSE: string;
        referenceSrvAbonnServBanc: string;
        identifiantAbonneSacEdia: string;
        dateExpirationCartes: string;
        indrenouvellementAutochequiers: string;
        libelleRoutageChequier: string;
        dateExpirationCartado: string;
        datFinValiditeSupportCarte: string;
        dateSouscriptPhoneEcureuil: string;
        datSouscbanqueTelephonique: string;
        dateSouschomeBankingNetEcur: string;
        dateActivationSupportCarte: string;
        indicateurActivationCarte: string;
        dateResiliationLAbonnement: string;
        moyenPaiement: boolean;
        datSouscbanqueTelephoniTele: string;
        dateOuvertureServiceExpress: string;
        numeroClefClient: string;
        dateOuverturetServiceMonet: string;
        nombreEquipementMonetique: number;
        dateFinEffetContrat: string;
        datePriseEffetContrat: string;
        montantGarantiAssurancePro: number;
    }
    interface ISyntheseClientServicesTuile {
        dateDebutOptimTresorerie: string;
        numeroAbonnAlerteEcur: string;
        dateEffectCreatAlerteEcureuil: string;
        dateSouschomeBankingDEIP: string;
        noSerieCertificatElectro1: string;
        dateDebutValiditeCertificat: string;
        dateOuvertureDossierPCL: string;
        dateEcheanceDossierPCL: string;
        dateOuvertureDossierPVGA: string;
        numeroAbonnAlerteBDR: string;
        dateEffectCreatAlerteBDR: string;
        refServiceRMP: string;
        dateDebutValiditeRMP: string;
        dateDebutValiditeEnrolement: string;
        heureDemandeEnrolement: string;
        identifiantProduitService: number;
        dateSouschomeBankingSP: string;
        refServiceNumAnnuel: string;
        dateDebutValiditeNum: string;
        identifiantExterneCfnISAN: string;
        codeEtatProduitServiceOrigine: string;
        dateSouscriptionCoffre: string;
        dateClotureCoffreFortNum: string;
        idtPortefeuilleVme: string;
        dateDebutValiditeVme: string;
        dateDebutValiditeSMoney: string;
        dateOuvertureContrat: string;
        datEnvReferentielNatixis1: string;
        datOuvertureServiceLogicash: string;
        seuilDeclenchement: number;
        libelleProduitFormulePCL: string;
        libelleProduitFormulePVGA: string;
        refServiceDomilis: string;
        numeroPersonne: string;
    }
    interface ISyntheseServiceDomilis extends ISyntheseServiceInfoCommuneService {
        refServiceDomilis: string;
    }
    interface ISyntheseServicePaieMobile extends ISyntheseServiceInfoCommuneService {
        codeDevise: string;
        codeGuichetInterbancaire: string;
    }
    interface ITableauProduitsServices {
        codeEtatProduitService: string;
        listeEntites: any[];
    }
    interface ISyntheseClientServices {
        syntheseClientServices: IListeSyntheseClientCodeEtatService;
    }
    interface IListeSyntheseClientCodeEtatService {
        listeSyntheseClientCodeEtatService: Array<ISyntheseClientCodeEtatService>;
    }
    interface ISyntheseClientCodeEtatService {
        codeEtatProduitService: string;
        listeSyntheseClientEntiteTitulaireService: Array<ISyntheseClientEntiteTitulaireService>;
    }
    interface ISyntheseClientEntiteTitulaireService {
        numeroEntiteTitulaireProd: number;
        listeSyntheseServiceAbonnServeurBancaire: Array<ISyntheseServiceAbonnServeurBancaire>;
        listeSyntheseServiceAbonLSE: Array<ISyntheseServiceAbonLSE>;
        listeSyntheseServiceCertificat: Array<ISyntheseServiceCertificat>;
        listeSyntheseServiceAlerteBDR: Array<ISyntheseServiceAlerteBDR>;
        listeSyntheseServiceInfoAlerteEcureuil: Array<ISyntheseServiceInfoAlerteEcureuil>;
        listeSyntheseServiceInfoCartes: Array<ISyntheseServiceInfoCartes>;
        listeSyntheseServiceInfoChequiers: Array<ISyntheseServiceInfoChequiers>;
        listeSyntheseServiceNumAnnuel: Array<ISyntheseServiceNumAnnuel>;
        listeSyntheseServiceRMPNumerise: Array<ISyntheseServiceRMPNumerise>;
        listeSyntheseServiceSOLEnrolement: Array<ISyntheseServiceSOLEnrolement>;
        listeSyntheseServiceUNIK: Array<ISyntheseServiceUNIK>;
        listeSyntheseServiceCartadoDemandeur: Array<ISyntheseServiceCartadoDemandeur>;
        listeSyntheseServiceInfoDirectEcureuil: Array<ISyntheseServiceInfoDirectEcureuil>;
        listeSyntheseServiceInfoNetecureuil: Array<ISyntheseServiceInfoNetecureuil>;
        listeSyntheseServiceInfoTelecureuil: Array<ISyntheseServiceInfoTelecureuil>;
        listeSyntheseServiceInfoBorneLibreService: Array<ISyntheseServiceInfoBorneLibreService>;
        listeSyntheseServiceInfoDEIMobile: Array<ISyntheseServiceInfoDEIMobile>;
        listeSyntheseServiceInfoDEIPersonnesProtegees: Array<ISyntheseServiceInfoDEIPersonnesProtegees>;
        listeSyntheseServiceInternetSP: Array<ISyntheseServiceInternetSP>;
        listeSyntheseServiceSecureExpressCCE: Array<ISyntheseServiceSecureExpressCCE>;
        listeSyntheseServiceEquipMonetique: Array<ISyntheseServiceEquipMonetique>;
        listeSyntheseServiceSepamail: Array<ISyntheseServiceSepamail>;
        listeSyntheseServiceSmoneyP: Array<ISyntheseServiceSmoneyP>;
        listeSyntheseServiceVME: Array<ISyntheseServiceVME>;
        listeSyntheseServiceInfoOptimisTresorerie: Array<ISyntheseServiceInfoOptimisTresorerie>;
        listeSyntheseServiceInfoSurCIDAILLY: Array<ISyntheseServiceInfoSurCIDAILLY>;
        listeSyntheseServiceNvellesAssurParaBancaire: Array<ISyntheseServiceNvellesAssurParaBancaire>;
        listeSyntheseServiceInfoAssProfessionnelsB001: Array<ISyntheseServiceInfoAssProfessionnelsB001>;
        listeSyntheseServiceASSProB002: Array<ISyntheseServiceASSProB002>;
        listeSyntheseServiceInfoOptimTresorerieCCE: Array<ISyntheseServiceInfoOptimTresorerieCCE>;
        listeSyntheseServiceCarteAffaire: Array<ISyntheseServiceCarteAffaire>;
        listeSyntheseServiceFluxExtBDRsrvPCL: Array<ISyntheseServiceFluxExtBDRsrvPCL>;
        listeSyntheseServiceFluxExtBDRsrvPVGA: Array<ISyntheseServiceFluxExtBDRsrvPVGA>;
        listeSyntheseServiceCoffreFortNum: Array<ISyntheseServiceCoffreFortNum>;
        listeSyntheseServiceLogicash: Array<ISyntheseServiceLogicash>;
        listeSyntheseServiceInfoPhoneEcureuil: Array<ISyntheseServiceInfoPhoneEcureuil>;
        listeSyntheseServiceSMONEY: Array<ISyntheseServiceSMONEY>;
        listeSyntheseServiceDiamantCCE: Array<ISyntheseServiceDiamantCCE>;
        listeSyntheseServiceCashManagement: Array<ISyntheseServiceCashManagement>;
        listeSyntheseServiceCentralisationRecette: Array<ISyntheseServiceCentralisationRecette>;
        designationEntiteTitulaire: string;
        listeSyntheseServiceDomilis: Array<ISyntheseServiceDomilis>;
        listeSyntheseServicePaieMobile: Array<ISyntheseServicePaieMobile>;
    }
    interface ISyntheseServiceInfoCommuneCompte {
        codeGuichet: string;
        numeroEntiteTitulaire: number;
        numeroCompte: string;
    }
    interface ISyntheseServiceInfoCartes extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommuneService {
        numeroContratCarte: number;
        categorieMandat: string;
        indicateurActivationCarte: string;
        dateActivationSupportCarte: string;
        codeActivationECarteBleue: string;
        codeActivationOptionMoneo: string;
        dateExpirationCartes: string;
        numOffreSouscriteCartes: number;
        numPersSouscripteurCartes: number;
        codePSExterne: string;
        numeroCarteSamCh02: string;
        codeTypeProduitService: string;
    }
    interface ISyntheseServiceSOLEnrolement extends ISyntheseServiceInfoCommuneService {
        dateDebutValiditeEnrolement: string;
        heureDemandeEnrolement: string;
    }
    interface ISyntheseServiceUNIK extends ISyntheseServiceInfoCommuneService {
        libelleEtatAbonnement: string;
        idtAbonnementEspaceUnique: string;
        codeRoleUtilisateurAeu: string;
        dateEtatAbonnement: string;
        libelleOptionService: string;
        raisonSociale: string;
        libelleRoleUtilisateurAeu: string;
        codeEtatAbonnementUnik: string;
    }
    interface ISyntheseServiceSepamail extends ISyntheseServiceInfoCommuneService {
        dateOuvertureContrat: string;
        indicInscriptionAnnuaire: string;
        dateEnvoiReferentielNatixis: string;
        dateClotureResiliatContrat: string;
        datEnvReferentielNatixis1: string;
    }
    interface ISyntheseServiceSmoneyP extends ISyntheseServiceInfoCommuneService {
        idtContratSMoney: string;
        dateDebutValiditeSMoney: string;
    }
    interface ISyntheseServiceInfoOptimisTresorerie extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommune, ISyntheseServiceInfoCommuneCompte {
        typeServiceEpargne: string;
        dateTransfertCompte: string;
        montantCapitalTransfere: number;
        codeTypeService: string;
        codEtabClientOptimisTreso: string;
        numCpteOptimTreso: string;
    }
    interface ISyntheseServiceInfoSurCIDAILLY {
        codeFinancementDailly: string;
        libelleFinancementDailly: string;
    }
    interface ISyntheseServiceNvellesAssurParaBancaire {
        identifiantAdhesion: string;
        codeProduitMuracef: string;
        datePriseEffetContrat: string;
        dateFinEffetContrat: string;
        codeMotifResiliation: string;
        codeSituationContrat: string;
        codeForfait: string;
        codEtabClientAssurParaBanc: string;
        numCpteAssurParaBanc: string;
    }
    interface ISyntheseServiceInfoAssProfessionnelsB001 extends ISyntheseServiceInfoCommune, ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        montantGarantiAssurancePro: number;
        nombrePersonnesPourContrat: number;
        numeroRiceComptePrelevement: string;
        tauxCalculPrimeAssurance: number;
        dateEffetAssurancePro: string;
        dateClotureAssurancePro: string;
        ageLimitePourAssurancePro: number;
        dureeVieAssurancePro: number;
        codeOptionCaisseAssurProf: string;
        periodiciteCaisseAssurPro: string;
    }
    interface ISyntheseServiceASSProB002 extends ISyntheseServiceInfoCommune, ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        montantGarantiAssurancePro: number;
        nombrePersonnePourContrat: number;
        numeroRiceComptePrelevement: string;
        codeOptionCaisseAssuranceProf: string;
        trancheDebutAssurancePro: number;
        montantPrimeAssurancePro: number;
        tauxCalculPrimeAssurance: number;
        dateEffetAssurancePro: string;
        numeroRiceCompteRecepteur: string;
        periodiciteCaisseAssurPro: string;
        dateClotureAssurancePro: string;
        ageLimitePourAssurancePro: number;
    }
    interface ISyntheseServiceCarteAffaire extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommune {
        typeCarte: string;
        numeroCarte: string;
        indicateurSolidariteEntreprise: string;
        dateOpposition: string;
        codeOpposition: string;
        numeroCarteRemplacee: string;
        numeroCompteDebite: string;
        cleRibNumeroCompte: string;
        identifiantBad: string;
        datFinValiditeSupportCarte: number;
        codeEtablissementClient: string;
    }
    interface ISyntheseServiceInfoOptimTresorerieCCE extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommune {
        seuilDeclenchement: number;
        codeValeurSicovam: number;
        libelleValeur: string;
        dateProchaineEcheance: string;
        dateDebutOptimTresorerie: string;
        dateFinOptimisatTresorerie: string;
        codePeriodeExecutOptimisat: string;
        codeDeviseTresoCCE: string;
        codEtabClientOptimisTresoCCE: string;
        numCpteTresoCCE: string;
    }
    interface ISyntheseServiceFluxExtBDRsrvPCL extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommune {
        dureeAbonnementEnMois: number;
        mtForfaitAnnuel: number;
        nombreSocietesSupprimees: number;
        nombreSocietesTotal: number;
        tauxUtilisation: number;
        mtCommissionApporteurAnnee: number;
        libelleAbregePeriodicite: string;
        nombreSocietesActives: number;
        mtCommissioPrestRcouvAnnee: number;
        libelleProduitFormulePCL: string;
        dateOuvertureDossierPCL: string;
        dateEcheanceDossierPCL: string;
        periodeArreteInfosPCL: string;
        mtCumCommApport0101PCL: number;
    }
    interface ISyntheseServiceCoffreFortNum extends ISyntheseServiceInfoCommuneService {
        dateSouscriptionCoffre: string;
        sousCodeProduitService: string;
        identifiantExterneCfnISAN: string;
        identCoffreFortNumerique: string;
        dateClotureCoffreFortNum: string;
    }
    interface ISyntheseServiceInfoPhoneEcureuil extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        numeroAbonnePhonecureuil: string;
        dateSouscriptPhoneEcureuil: string;
    }
    interface ISyntheseServiceInfoDirectEcureuil extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        datSouscbanqueTelephonique: string;
        idAbonnBnqADistanceDirectEcur: string;
    }
    interface ISyntheseServiceInfoNetecureuil extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        libelleOperation: string;
        nombreCertificatsDetenus: number;
        idAbonnBnqADistanceNetEcur: string;
        dateSouschomeBankingNetEcur: string;
        designBancNetecureuil: string;
    }
    interface ISyntheseServiceCartadoDemandeur {
        identifiantSupportCarte: string;
        codeTypePorteurCartado: string;
        codeDeviseCartado: string;
        dateExpirationCartado: string;
        indExistenceOppoCartado: string;
    }
    interface ISyntheseServiceVME extends ISyntheseServiceInfoCommuneService {
        idtPortefeuilleVme: string;
        dateDebutValiditeVme: string;
    }
    interface ISyntheseServiceFluxExtBDRsrvPVGA extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommune {
        codeProduitNational: string;
        montantCa: number;
        libelleProduitFormulePVGA: string;
        dateOuvertureDossierPVGA: string;
        dateEcheanceDossierPVGA: string;
        periodeArreteInfosPVGA: string;
        mtCumCommApport0101PVGA: number;
    }
    interface ISyntheseServiceInfoCommuneService {
        codeProduit: string;
        numeroPersonne: number;
        numeroOffre: number;
        codeEtatProduitServiceOrigine: string;
        libelleOffre: string;
        identifiantProduitService: number;
        identifiantProduitSPSPere: number;
        codeCaractereForfaitaireOffre: string;
        codeEtatOffre: string;
        codeEtablissement: string;
        codeEtatProduitService: string;
        libelleService: string;
    }
    interface ISyntheseServiceAbonnServeurBancaire extends ISyntheseServiceInfoCommuneService {
        referenceSrvAbonnServBanc: string;
    }
    interface ISyntheseServiceAbonLSE extends ISyntheseServiceInfoCommuneService {
        referenceSrvAbonnLSE: string;
    }
    interface ISyntheseServiceCertificat extends ISyntheseServiceInfoCommuneService {
        identifiantCertificat: string;
        identifiantTiers: number;
        refPorteurCertificat: string;
        dateDebutValiditeCertificat: string;
        dateFinValiditeCertificat: string;
        dateBlocageCertificat: string;
        refEntiteEmetCertificat: string;
        noSerieCertificatElectro: string;
        noSerieCertificatElectro1: string;
        indicBlocageCertificat: string;
    }
    interface ISyntheseServiceInfoCommune {
        identifiantAbonneSacEdia: string;
        codeDetentionAuthRenforcee: string;
        dateResiliationLAbonnement: string;
        codeDevise: string;
        indicateurExistenceOpposition: string;
        codeGuichetInterbancaire: string;
    }
    interface ISyntheseServiceSMONEY extends ISyntheseServiceInfoCommuneService {
        codeDeviseSmoney: string;
        codeGuichInterbancSmoney: string;
    }
    interface ISyntheseServiceSecureExpressCCE extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommuneService {
        dateClotureServiceExpress: string;
        codeEtabClientSecureExpress: string;
        codGuichClientSecureExpress: string;
        numCpteClientSecureExpress: string;
        codeOptionService: string;
        dateOuvertureServiceExpress: string;
        numeroClefClient: string;
    }
    interface ISyntheseServiceEquipMonetique extends ISyntheseServiceInfoCommuneService {
        codOptAbonnemtTpeMonetique: string;
        dateOuverturetServiceMonet: string;
        dateClotureServicemonet: string;
        codeEtabClientEquipMonet: string;
        codGuichClientEquipMonet: string;
        numCpteClientEquipMonet: string;
        nombreEquipementMonetique: number;
        nomCommercialService: string;
    }
    interface ISyntheseServiceLogicash extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        nombreCartes: number;
        datOuvertureServiceLogicash: string;
        numCpteLogicash: string;
    }
    interface ISyntheseServiceDiamantCCE extends ISyntheseServiceInfoCommuneService {
        indicExistenceOppoDiamantCCE: string;
    }
    interface ISyntheseServiceCashManagement extends ISyntheseServiceInfoCommuneService {
        indicExistenceOppoCashManag: string;
    }
    interface ISyntheseServiceCentralisationRecette extends ISyntheseServiceInfoCommuneService {
        indicExistOppoCentralRecette: string;
    }
    interface ISyntheseServiceInfoChequiers extends ISyntheseServiceInfoCommuneCompte, ISyntheseServiceInfoCommuneService {
        numeroContratChequier: number;
        indrenouvellementAutochequiers: string;
        codeRoutageChequiers: string;
        libelleRoutageChequier: string;
        codeFamilleChequiers: string;
        libelleFamilleChequiers: string;
    }
    interface ISyntheseServiceNumAnnuel extends ISyntheseServiceInfoCommuneService {
        refServiceNumAnnuel: string;
        date1ereSouscriptionNum: string;
        dateDebutValiditeNum: string;
        dateFinValiditeNum: string;
        codeCanalGestionumAnnuel: string;
        indicNumerisationPapier: string;
    }
    interface ISyntheseServiceRMPNumerise extends ISyntheseServiceInfoCommuneService {
        dateDebutValiditeRMP: string;
        date1ereSouscriptionRMP: string;
        codeCanalGestionRMP: string;
        dateFinValiditeRMP: string;
        refServiceRMP: string;
    }
    interface ISyntheseServiceInfoAlerteEcureuil extends ISyntheseServiceInfoCommuneService {
        numeroAbonnAlerteEcur: string;
        dateEffectCreatAlerteEcureuil: string;
        dateClotEffectContraAlerteEcur: string;
        statutGestionCanauxComm: string;
        numPersSouscripteurAlerteEcur: number;
        numOffreSouscriteAlerteEcur: number;
    }
    interface ISyntheseServiceAlerteBDR extends ISyntheseServiceInfoCommuneService {
        numeroAbonnAlerteBDR: string;
        dateEffectCreatAlerteBDR: string;
        datClotEffectContraAlerteBDR: string;
    }
    interface ISyntheseServiceInfoBorneLibreService extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommune {
        dateSouschomeBankingBLS: string;
        codAchatADecAutoriseBLS: string;
    }
    interface ISyntheseServiceInfoDEIMobile extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommune {
        dateSouschomeBankingDEI: string;
        codAchatADecAutoriseDEI: string;
    }
    interface ISyntheseServiceInfoDEIPersonnesProtegees extends ISyntheseServiceInfoCommuneService {
        typeContratBnqADistanceDEIP: string;
        numeroTelephoneDEIP: string;
        designBancDEIP: string;
        codAchatADecAutoriseDEIP: string;
        dateSouschomeBankingDEIP: string;
    }
    interface ISyntheseServiceInternetSP extends ISyntheseServiceInfoCommuneService {
        dateSouschomeBankingSP: string;
        typeContratBnqADistanceSP: string;
        codAchatADecAutoriseSP: string;
        numeroTelephoneSP: string;
        designBancSP: string;
    }
    interface ISyntheseServiceInfoTelecureuil extends ISyntheseServiceInfoCommuneService, ISyntheseServiceInfoCommuneCompte {
        idAbonnBnqADistanceTeleEcur: string;
        datSouscbanqueTelephoniTele: string;
    }
}

declare module syntheseClient.Modeles.Transaction {
    interface ITransactionCodeProduit {
        listeTransaction: string[];
        listeCodeProduit: string[];
    }
    interface ITransactionSsCodeProduitEligible extends ITransactionCodeProduit {
        listeSousCodePS: Array<string>;
    }
}

declare module syntheseClient.Service {
    /**
     * décrit la listes des blocs vs les directives à associer
     * en lien avec le service Rest (numéro = idBlocEnfant)
     */
    class Typologiesblocs {
        listeBlocs: {
            0: {
                nomDirective: string;
                urlVueDetail: string;
                idBloc: string;
            };
            6: {
                nomDirective: string;
                urlVueDetail: string;
                idBloc: string;
            };
            7: {
                nomDirective: string;
                urlVueDetail: string;
                idBloc: string;
            };
            8: {
                nomDirective: string;
                urlVueDetail: string;
                idBloc: string;
            };
            9: {
                nomDirective: string;
                urlVueDetail: string;
                idBloc: string;
            };
        };
    }
}

declare module syntheseClient.Service {
    interface IChargement {
        etat: number;
        visible: boolean;
        promise?: ng.IPromise<any>;
    }
    interface INotification {
        Sujet: string;
    }
    class SyntheseClientChargementService {
        private $q;
        private $timeout;
        private notificationService;
        private serviceAgent;
        private agentService;
        private loaderService;
        private logger;
        private erreurService;
        private contexteClientService;
        private utilitaireService;
        private initialisationService;
        private donneesService;
        private impressionService;
        estARecharger: boolean;
        private authentificationInfo;
        private objetSynthese;
        private codeAgent;
        private numeroPersonne;
        private idEds;
        private typePersonne;
        private objetAuthentificationFormate;
        private identifiantPersonne;
        private numeroCompte;
        private identifiantCredit;
        isReady: boolean;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, notificationService: MyWay.UI.IMwNotificationService, serviceAgent: MyWay.Services.ServiceAgentExtended, agentService: myway.core.AgentService, loaderService: myway.core.loader.LoaderService, logger: myway.core.LoggerService, erreurService: myway.core.ErreurService, contexteClientService: myway.portail.api.ContexteClientService, utilitaireService: syntheseClient.Service.SyntheseClientUtilitaireService, initialisationService: syntheseClient.Service.SyntheseInitialisationService, donneesService: syntheseClient.Service.SyntheseClientDonneesService, impressionService: syntheseClient.Service.ISyntheseImpressionService);
        init(): ng.IPromise<void>;
        /**
         * initialisation du chargement de la synthèse
         * (promesses d'authentification, paramètres comptables, critères de rechercne et identifiant dans le contexte)
         * @param {boolean} rechargement : facultatif, pour indiquer si on doit aller chercher dans le contexte client
         */
        initialisationChargement(rechargement?: boolean, indicateurSynchroSynthese?: myway.portail.api.IndicateurSynchroSyntheseEnum): ng.IPromise<any>;
        /**
         * chargement des données pour la mécanique de lancement de la vue synthèse
         * pas de retour, seulement une redirection sur la vue concernée (synthèse, détail ou erreur)
         */
        private chargerDonnees(rechargement?);
        /**
         * méthode appelée au retour des notifications du serviceAgent
         * permet de vérifier si la synthèse est réactivée ou non
         * @param {INotification} valeur
         */
        rafraichirSynthese(notification: INotification): void;
        /**
         * Redirection vers une page d'erreur
         * @param {string} erreur
         */
        erreur(erreur: string): void;
    }
}

declare module syntheseClient.Service {
    interface IDetailProduit {
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4?: string;
        ligne5?: string;
        specificTuile?: boolean;
        titre?: string;
        infoSup?: string;
    }
    class SyntheseDetailProduitService {
        private syntheseProduitService;
        detailProduitVide: IDetailProduit;
        static $inject: string[];
        constructor(syntheseProduitService: SyntheseProduitService);
        getDetailProduitAbsent(typeProduit: string): IDetailProduit;
        getDetailProduitClientProdAssCFF(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCFF): IDetailProduit;
        getDetailProduitClientProdAssCFFComp(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCFFComp): IDetailProduit;
        getDetailProduitClientProdAssCNP(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCNP): IDetailProduit;
        getDetailProduitClientProdAssIARD(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARD): IDetailProduit;
        getDetailProduitClientProdAssIARDAllianz(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARDAllianz): IDetailProduit;
        getDetailProduitClientProdAssIARDComp(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARDComp): IDetailProduit;
        getDetailProduitClientProdAssNatixis(objetOriginal: Modeles.Produits.ISyntheseClientProdAssNatixis): IDetailProduit;
        getDetailProduitClientProdAssParaBanc(objetOriginal: Modeles.Produits.ISyntheseClientProdAssParaBanc): IDetailProduit;
        getDetailProduitClientProdAutoTransfert(objetOriginal: Modeles.Produits.ISyntheseClientProdAutoTransfert): IDetailProduit;
        getDetailProduitClientProdCCE(objetOriginal: Modeles.Produits.ISyntheseClientProdCCE): IDetailProduit;
        getDetailProduitClientProdCCI(objetOriginal: Modeles.Produits.ISyntheseClientProdCCI): IDetailProduit;
        getDetailProduitClientProdCartAffComp(objetOriginal: Modeles.Produits.ISyntheseClientProdCartAffComp): IDetailProduit;
        getDetailProduitClientProdCartAffaire(objetOriginal: Modeles.Produits.ISyntheseClientProdCartAffaire): IDetailProduit;
        getDetailProduitClientProdCartado(objetOriginal: Modeles.Produits.ISyntheseClientProdCartado): IDetailProduit;
        getDetailProduitClientProdCarteAurore(objetOriginal: Modeles.Produits.ISyntheseClientProdCarteAurore): IDetailProduit;
        getDetailProduitClientProdCarteDebCredit(objetOriginal: Modeles.Produits.ISyntheseClientProdCarteDebCredit): IDetailProduit;
        getDetailProduitClientProdCautionFiliale(objetOriginal: Modeles.Produits.ISyntheseClientProdCautionFiliale): IDetailProduit;
        getDetailProduitClientProdCiloger(objetOriginal: Modeles.Produits.ISyntheseClientProdCiloger): IDetailProduit;
        getDetailProduitClientProdCodevi(objetOriginal: Modeles.Produits.ISyntheseClientProdCodevi): IDetailProduit;
        getDetailProduitClientProdCoffre(objetOriginal: Modeles.Produits.ISyntheseClientProdCoffre): IDetailProduit;
        getDetailProduitClientProdContratMonetique(objetOriginal: Modeles.Produits.ISyntheseClientProdContratMonetique): IDetailProduit;
        getDetailProduitClientProdCptDepot(objetOriginal: Modeles.Produits.ISyntheseClientProdCptDepot): IDetailProduit;
        getDetailProduitClientProdCptInstance(objetOriginal: Modeles.Produits.ISyntheseClientProdCptInstance): IDetailProduit;
        getDetailProduitClientProdCptTeoz(objetOriginal: Modeles.Produits.ISyntheseClientProdCptTeoz): IDetailProduit;
        getDetailProduitClientProdCredit(objetOriginal: Modeles.Produits.ISyntheseClientProdCredit): IDetailProduit;
        getDetailProduitClientProdCreditAlis(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditAlis): IDetailProduit;
        getDetailProduitClientProdCreditBail(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditBail): IDetailProduit;
        getDetailProduitClientProdCreditCEDI(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditCEDI): IDetailProduit;
        getDetailProduitClientProdCreditComp(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditComp): IDetailProduit;
        getDetailProduitClientProdCreditExterne(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditExterne): IDetailProduit;
        getDetailProduitClientProdDATHorsPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdDATHorsPEL): IDetailProduit;
        getDetailProduitClientProdDATPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdDATPEL): IDetailProduit;
        getDetailProduitClientProdEpargnSalComp(objetOriginal: Modeles.Produits.ISyntheseClientProdEpargnSalComp): IDetailProduit;
        getDetailProduitClientProdEpargSalariale(objetOriginal: Modeles.Produits.ISyntheseClientProdEpargSalariale): IDetailProduit;
        getDetailProduitClientProdEscompteCCE(objetOriginal: Modeles.Produits.ISyntheseClientProdEscompteCCE): IDetailProduit;
        getDetailProduitClientProdFacturea(objetOriginal: Modeles.Produits.ISyntheseClientProdFacturea): IDetailProduit;
        getDetailProduitClientProdGarantieSante(objetOriginal: Modeles.Produits.ISyntheseClientProdGarantieSante): IDetailProduit;
        getDetailProduitClientProdGarSanteColl(objetOriginal: Modeles.Produits.ISyntheseClientProdGarSanteColl): IDetailProduit;
        getDetailProduitClientProdLEL(objetOriginal: Modeles.Produits.ISyntheseClientProdLEL): IDetailProduit;
        getDetailProduitClientProdLEP(objetOriginal: Modeles.Produits.ISyntheseClientProdLEP): IDetailProduit;
        getDetailProduitClientProdLivretA(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretA): IDetailProduit;
        getDetailProduitClientProdLivretB(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretB): IDetailProduit;
        getDetailProduitClientProdLivretDev(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretDev): IDetailProduit;
        getDetailProduitClientProdLivretJeune(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretJeune): IDetailProduit;
        getDetailProduitClientProdMomentverite(objetOriginal: Modeles.Produits.ISyntheseClientProdMomentverite): IDetailProduit;
        getDetailProduitClientProdOctav(objetOriginal: Modeles.Produits.ISyntheseClientProdOctav): IDetailProduit;
        getDetailProduitClientProdOPEFI(objetOriginal: Modeles.Produits.ISyntheseClientProdOPEFI): IDetailProduit;
        getDetailProduitClientProdOptAlis(objetOriginal: Modeles.Produits.ISyntheseClientProdOptAlis): IDetailProduit;
        getDetailProduitClientProdPEA(objetOriginal: Modeles.Produits.ISyntheseClientProdPEA): IDetailProduit;
        getDetailProduitClientProdPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdPEL): IDetailProduit;
        getDetailProduitClientProdPEP(objetOriginal: Modeles.Produits.ISyntheseClientProdPEP): IDetailProduit;
        getDetailProduitClientProdPER(objetOriginal: Modeles.Produits.ISyntheseClientProdPER): IDetailProduit;
        getDetailProduitClientProdSAP(objetOriginal: Modeles.Produits.ISyntheseClientProdSAP): IDetailProduit;
        getDetailProduitClientProdSmile(objetOriginal: Modeles.Produits.ISyntheseClientProdSmile): IDetailProduit;
        getDetailProduitClientProdSmileComp(objetOriginal: Modeles.Produits.ISyntheseClientProdSmileComp): IDetailProduit;
        getDetailProduitClientProdSocfim(objetOriginal: Modeles.Produits.ISyntheseClientProdSocfim): IDetailProduit;
        getDetailProduitClientProdTitres(objetOriginal: Modeles.Produits.ISyntheseClientProdTitres): IDetailProduit;
        getDetailProduitClientProdTrade(objetOriginal: Modeles.Produits.ISyntheseClientProdTrade): IDetailProduit;
        getDetailProduitClientProdVega(objetOriginal: Modeles.Produits.ISyntheseClientProdVega): IDetailProduit;
        getDetailProduitClientProdFDG(objetOriginal: Modeles.Produits.ISyntheseClientProdFDG): IDetailProduit;
        getDetailProduitClientProdAssOM(objetOriginal: Modeles.Produits.ISyntheseClientProdAssOM): IDetailProduit;
    }
}

declare module syntheseClient.Service {
    interface IDetailService {
        ligne1: string;
        ligne2: string;
        ligne3: string;
        ligne4: string;
        ligne5: string;
    }
    class SyntheseDetailServiceService {
        private syntheseServicesService;
        detailServiceVide: IDetailService;
        static $inject: string[];
        constructor(syntheseServicesService: SyntheseServicesService);
        getDetailServiceAbsent(typeService: string): IDetailService;
        getDetailServiceAbonLSE(objetOriginal: Modeles.Services.ISyntheseServiceAbonLSE): IDetailService;
        getDetailServiceAbonnServeurBancaire(objetOriginal: Modeles.Services.ISyntheseServiceAbonnServeurBancaire): IDetailService;
        getDetailServiceAlerteBDR(objetOriginal: Modeles.Services.ISyntheseServiceAlerteBDR): IDetailService;
        getDetailServiceCartadoDemandeur(objetOriginal: Modeles.Services.ISyntheseServiceCartadoDemandeur): IDetailService;
        getDetailServiceCarteAffaire(objetOriginal: Modeles.Services.ISyntheseServiceCarteAffaire): IDetailService;
        getDetailServiceCashManagement(objetOriginal: Modeles.Services.ISyntheseServiceCashManagement): IDetailService;
        getDetailServiceCentralisationRecette(objetOriginal: Modeles.Services.ISyntheseServiceCentralisationRecette): IDetailService;
        getDetailServiceCertificat(objetOriginal: Modeles.Services.ISyntheseServiceCertificat): IDetailService;
        getDetailServiceCoffreFortNum(objetOriginal: Modeles.Services.ISyntheseServiceCoffreFortNum): IDetailService;
        getDetailServiceDiamantCCE(objetOriginal: Modeles.Services.ISyntheseServiceDiamantCCE): IDetailService;
        getDetailServiceEquipMonetique(objetOriginal: Modeles.Services.ISyntheseServiceEquipMonetique): IDetailService;
        getDetailServiceFluxExtBDRsrvPCL(objetOriginal: Modeles.Services.ISyntheseServiceFluxExtBDRsrvPCL): IDetailService;
        getDetailServiceFluxExtBDRsrvPVGA(objetOriginal: Modeles.Services.ISyntheseServiceFluxExtBDRsrvPVGA): IDetailService;
        getDetailServiceInfoAlerteEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoAlerteEcureuil): IDetailService;
        getDetailServiceInfoAssProfessionnelsB001(objetOriginal: Modeles.Services.ISyntheseServiceInfoAssProfessionnelsB001): IDetailService;
        getDetailServiceASSProB002(objetOriginal: Modeles.Services.ISyntheseServiceASSProB002): IDetailService;
        getDetailServiceInfoBorneLibreService(objetOriginal: Modeles.Services.ISyntheseServiceInfoBorneLibreService): IDetailService;
        getDetailServiceInfoCartes(objetOriginal: Modeles.Services.ISyntheseServiceInfoCartes): IDetailService;
        getDetailServiceInfoChequiers(objetOriginal: Modeles.Services.ISyntheseServiceInfoChequiers): IDetailService;
        getDetailServiceInfoDEIMobile(objetOriginal: Modeles.Services.ISyntheseServiceInfoDEIMobile): IDetailService;
        getDetailServiceInfoDEIPersonnesProtegees(objetOriginal: Modeles.Services.ISyntheseServiceInfoDEIPersonnesProtegees): IDetailService;
        getDetailServiceInfoDirectEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoDirectEcureuil): IDetailService;
        getDetailServiceInfoNetecureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoNetecureuil): IDetailService;
        getDetailServiceInfoOptimisTresorerie(objetOriginal: Modeles.Services.ISyntheseServiceInfoOptimisTresorerie): IDetailService;
        getDetailServiceInfoOptimTresorerieCCE(objetOriginal: Modeles.Services.ISyntheseServiceInfoOptimTresorerieCCE): IDetailService;
        getDetailServiceInfoPhoneEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoPhoneEcureuil): IDetailService;
        getDetailServiceInfoSurCIDAILLY(objetOriginal: Modeles.Services.ISyntheseServiceInfoSurCIDAILLY): IDetailService;
        getDetailServiceInfoTelecureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoTelecureuil): IDetailService;
        getDetailServiceInternetSP(objetOriginal: Modeles.Services.ISyntheseServiceInternetSP): IDetailService;
        getDetailServiceLogicash(objetOriginal: Modeles.Services.ISyntheseServiceLogicash): IDetailService;
        getDetailServiceNumAnnuel(objetOriginal: Modeles.Services.ISyntheseServiceNumAnnuel): IDetailService;
        getDetailServiceNvellesAssurParaBancaire(objetOriginal: Modeles.Services.ISyntheseServiceNvellesAssurParaBancaire): IDetailService;
        getDetailServiceRMPNumerise(objetOriginal: Modeles.Services.ISyntheseServiceRMPNumerise): IDetailService;
        getDetailServiceSecureExpressCCE(objetOriginal: Modeles.Services.ISyntheseServiceSecureExpressCCE): IDetailService;
        getDetailServiceSepamail(objetOriginal: Modeles.Services.ISyntheseServiceSepamail): IDetailService;
        getDetailServiceSMONEY(objetOriginal: Modeles.Services.ISyntheseServiceSMONEY): IDetailService;
        getDetailServiceSmoneyP(objetOriginal: Modeles.Services.ISyntheseServiceSmoneyP): IDetailService;
        getDetailServiceSOLEnrolement(objetOriginal: Modeles.Services.ISyntheseServiceSOLEnrolement): IDetailService;
        getDetailServiceUNIK(objetOriginal: Modeles.Services.ISyntheseServiceUNIK): IDetailService;
        getDetailServiceVME(objetOriginal: Modeles.Services.ISyntheseServiceVME): IDetailService;
        /**
         * Fonction permettant de générer la ligne "Inclus dans"
         * @param serviceFormate {any} Le service formaté
         * @return {string} la ligne formatée
         */
        private genererLigneInclusDans;
        /**
         * Fonction permettant de formatter un objet détail pour les services qui n'ont qu'une seule ligne "Inclus dans"
         * @param serviceFormate {any} Le service formaté
         * @return {IDetailService} L'objet détail formaté
         */
        private genereObjetServiceDetailInclusDans;
        getDetailServiceDomilis(objetOriginal: Modeles.Services.ISyntheseServiceDomilis): IDetailService;
        getDetailServicePaieMobile(objetOriginal: Modeles.Services.ISyntheseServicePaieMobile): IDetailService;
    }
}

declare module syntheseClient.Service {
    class SyntheseClientDonneesDelocService {
        private serviceAgentExtended;
        private $q;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $q: ng.IQService);
        recupererCleTable(codeEtablissement: string, cle: string, table: string): ng.IPromise<string>;
        getTableDU1A(codeEtablissement: string, codeCategorieSocioProf: string): ng.IPromise<string>;
        getTableDV20(codeEtablissement: string): ng.IPromise<Modeles.DonneesDeloc.IDonneesDelocalisees<Modeles.DonneesDeloc.IDV20>>;
        getTableCARTE<T>(codeEtablissement: string): ng.IPromise<syntheseClient.Modeles.DonneesDeloc.IDonneesDelocalisees<T>>;
        getTableGenerique<T>(codeEtablissement: string, codeTable: string): ng.IPromise<syntheseClient.Modeles.DonneesDeloc.IDonneesDelocalisees<T>>;
    }
}

declare module syntheseClient.Service {
    class SyntheseClientDonneesService {
        private $q;
        private $timeout;
        private serviceAgent;
        private notificationService;
        private erreurService;
        private logger;
        private contexteClientService;
        private portailService;
        private syntheseToolsService;
        private syntheseErreurService;
        private syntheseInitialisationService;
        private urlSyntheseClient;
        private urlListeDesSyntheses;
        private urlListeDesBlocs;
        private urlSegmentationMarche;
        private urlCaracteristiqueAgence;
        private urlSyntheseServices;
        private urlListeMessagesService;
        private urlOffresEnInstance;
        private urlSegmentCommercial;
        private urlNoteBale2;
        private urlEntiteTitulaire;
        private urlContactCommercial;
        private coreContexteClientService;
        private _donneeRestProduits;
        private _segmentationMarche;
        private _caracteristiqueAgence;
        private _syntheseClientServices;
        private _informationService;
        private _offresEnInstance;
        private _segmentCommercial;
        private _noteBale2;
        private _entiteTitulaire;
        private _enqueteSatisfactionClient;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeApplicationContext: myway.portail.api.ApplicationList;
        messageInformation: string;
        indicateurSynchroSynthese: myway.portail.api.IndicateurSynchroSyntheseEnum;
        private _indicateurChargement;
        modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, serviceAgent: MyWay.Services.ServiceAgentExtended, notificationService: MyWay.UI.IMwNotificationService, erreurService: myway.core.ErreurService, logger: myway.core.LoggerService, contexteClientService: myway.portail.api.ContexteClientService, portailService: myway.portail.api.PortailService, syntheseToolsService: Service.SyntheseToolsService, syntheseErreurService: syntheseClient.Service.ErreursManagement, syntheseInitialisationService: Service.SyntheseInitialisationService, urlSyntheseClient: string, urlListeDesSyntheses: string, urlListeDesBlocs: string, urlSegmentationMarche: string, urlCaracteristiqueAgence: string, urlSyntheseServices: string, urlListeMessagesService: string, urlOffresEnInstance: string, urlSegmentCommercial: string, urlNoteBale2: string, urlEntiteTitulaire: string, urlContactCommercial: string, coreContexteClientService: myway.core.ContexteClientService);
        updateIndicateurChargement(value: boolean): ng.IPromise<void>;
        indicateurChargement: boolean;
        recupererProfilClient(codeAgent: string, numeroPersonne: string, identifiantEdsInterne: string): syntheseClient.Modeles.Profil.ISyntheseClientProfil;
        listeMessagesService: Modeles.AlertesMessagesService.IInformationService;
        setDonneeProduits(objet: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient): ng.IPromise<Modeles.SyntheseGlobale.ISyntheseDonneesClient>;
        setSegmentationMarche(objetMarche: Modeles.Commercial.IInfosSegmentationMarcheReponse): void;
        setCaracteristiqueAgence(objetAgence: Modeles.Commercial.ICaracteristiqueAgence): void;
        setSyntheseServices(objetServices: Modeles.Services.ISyntheseClientServices): Modeles.Services.ISyntheseClientServices;
        setOffresEnInstance(objetOffres: syntheseClient.Modeles.OffresEnInstance.IContainer): void;
        setSegmentCommercial(objetCommercial: Modeles.Commercial.ISegmentCommercial): void;
        setNoteBaleII(objetNoteBaleII: Modeles.AlertesMessagesService.INoteBale2): void;
        setListeEntiteTitulaire(objetListeEntiteTitulaire: Modeles.AlertesMessagesService.IRechercheEntiteTitulaire): void;
        setListeEnqueteSatisfactionClient(enqueteSatisfactionClient: Modeles.EnqueteSatisfaction.IEnqueteSatisfaction[]): void;
        recupererNoteBaleII(codeEtablissement: number, numeroPersonne: number, typeAttributaireNote: number, codeTypeRechercheNote: number, forcer?: boolean): ng.IPromise<Modeles.AlertesMessagesService.INoteBale2>;
        recupererSegmentCommercial(codeEtablissement: number, numeroPersonne: number, relationEconomique: boolean, forcer?: boolean): ng.IPromise<Modeles.Commercial.ISegmentCommercial>;
        recupererSyntheseServices(codeAgent: number, numeroPersonne: number, idEdsInterne: number, forcer?: boolean): ng.IPromise<Modeles.Services.ISyntheseClientServices>;
        recupererSyntheseCaracteristiqueAgence(codeEtablissement: string, referenceElementStructure: number, identifiantElementStructure: number, forcer?: boolean): ng.IPromise<Modeles.Commercial.ICaracteristiqueAgence>;
        recupererSyntheseSegmentationMarche(codeEtablissement: number, identifiantTiers: number, forcer?: boolean): ng.IPromise<Modeles.Commercial.IInfosSegmentationMarcheReponse>;
        recupererSyntheseClient(codeAgent: number, numeroPersonne: number, idEdsInterne: number, forcer?: boolean, numeroCompte?: string, identifiantCredit?: string): ng.IPromise<syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient>;
        private checkAppel(codeAgent, numeroPersonne, idEdsInterne, forcer?, numeroCompte?, identifiantCredit?);
        /** Appel au Service REST, avec get liste des Synthèses de l'agent
         * @param {number} codeAgent le code de l'agent
         * @param {number} idEdsInterne l'eds interne de l'agen
         * @param {string} typePersonne "PP" ou "PM"
         * @param {number} codeEtablissement le code établissement courant, ex: 13135
         * @return {ng.IPromise<any>} promesse retournant la liste des synthèses
         */
        recupererListeSyntheses(codeAgent: number, idEdsInterne: number, typePersonne: string, codeEtablissement: string): ng.IPromise<any>;
        /**
         * Service REST get liste des blocs pour une Synthèses l'agent
         * @param codeEtablissement:number
         * @param codeAgent:number
         * @param typePersonne:string (PP ou PM)
         * @param typeVision:string (id de la vue synthèse à décrire)
         */
        recupererListeBlocs(codeEtablissement: number, codeAgent: number, typePersonne: string, typeVision: string): ng.IPromise<Array<syntheseClient.Modeles.Vues.IBlocs>>;
        recupererListeMessagesService(identifiantPersonne: number, codeEtablissement: string, forcer?: boolean): ng.IPromise<Modeles.AlertesMessagesService.IInformationService>;
        supprimerMessageService(messageDetail: Modeles.AlertesMessagesService.IDetailInformationService): ng.IPromise<{}>;
        creerMessageService(modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService): ng.IPromise<{}>;
        modifierMessageService(modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService): ng.IPromise<{}>;
        /**
         * Service debranchement url Rest offres en instance service
         * @param codeAgent{number} le code de l'agent
         * @param codeEtablissement{string} le code établissement en cours
         * @param numeroEntiteTitulaire{number} numero d'entité titulaire à appeler
         * @param forcer{boolean} permet de forcer l'appel distant même si une valeur est en cache
         * @return {ng.IPromise<Modeles.OffresEnInstance.IOffre>}
         */
        recupererOffresEnInstance(codeAgent: number, codeEtablissement: string, numeroEntiteTitulaire: number, forcer?: boolean): ng.IPromise<Modeles.OffresEnInstance.IContainer>;
        recupererListeEntiteTitulaire(codeEtablissement: string, identifiantTiers: number, typeRechercheEntiteTitulaire: number, forcer?: boolean): ng.IPromise<Modeles.AlertesMessagesService.IRechercheEntiteTitulaire>;
        recupererEnqueteSatisfactionClient(codeEtablissement: string, identifiantTiers: number, forcer?: boolean): ng.IPromise<Modeles.EnqueteSatisfaction.IEnqueteSatisfaction[]>;
        getDonneesProduits(): Modeles.Produits.ISyntheseClientProduits;
        getDonneesSignaletiques(): Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        getDonneesObjetSynthese(): syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient;
    }
}

declare module syntheseClient.Service {
    /**
     * test de récupération de logs de comportement utilisateur; version POC, à voir si conservée au final ou non
     */
    interface IActionUtilisateur {
        typeAction: string;
        action?: IComportement;
        erreur?: IErreur;
        cause?: any;
    }
    interface IErreur {
        url: string;
        codeHttp: number;
        methode: string;
        params: string;
        message: string;
    }
    interface IComportement {
        entree: string;
        sortie: string;
        timestamp?: string;
        idElement: string;
        element: any;
    }
    class Comportement implements IComportement {
        entree: any;
        sortie: any;
        timestamp: any;
        idElement: any;
        element: any;
        constructor(comportement: IComportement);
    }
    class ErreursManagement {
        private maximum;
        tableauListeActions: IActionUtilisateur[];
        /**
         * ajout d'une action utilisateur dans le tableau des événements
         * @param {string} action : l'action utilisateur loggée ("click", "lectureContexte", "changement Route", etc.)
         * @param {IComportement} complement : un objet permettant d'avoir plus d'information sur l'action
         */
        ajouterAction(action: string, complement: IComportement): void;
        /**
         * ajout d'une erreur dans le tableau des événements
         * @param {IErreur} erreur : l'erreur remontée, avec les informations ciblées
         * @param {string} cause : un message complémentaire
         */
        ajouterErreur(erreur: IErreur, cause: any): void;
        /**
         * retourne le tableau des "maximum" dernières actions utilisateur
         * @param {string} le format attendu, facultatif, "string" pour stringifier le retour, objet dans les autres cas
         * @return {any} le tableau, soit en objet JSON, soit stringifié pour envoi
         */
        getListeActions(format?: string): any;
    }
}

declare module syntheseClient.Service {
    interface IdataActions {
        titreAction: string;
        clicAction(): string;
    }
    interface IdataListeActions {
        liste: Array<IdataActions>;
    }
    class SyntheseClientHeaderService {
        static $inject: string[];
        constructor();
        getListeSyntheseClient(vueClient: string, vueBase: string): string[];
        afficherSynthesePersonnalise(identifiant: number): string;
        afficherSyntheseVueClient(identifiant: number): string;
    }
}

declare module syntheseClient.Service {
    interface ISyntheseImpressionExterneService {
        createImpressionParamsDocClient: () => Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEImpressionParams;
        createArchiverParamsDocClient: () => Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEArchiverParams;
        createArchiverImpressionParamsDocClient: () => Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEArchiverImpressionParams;
        createDocumentDocClient: (mode: string) => Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESE;
    }
    interface IDecouvert {
        numeroCompte: string;
        montant: string;
    }
    class SyntheseImpressionExterneService implements ISyntheseImpressionExterneService {
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private syntheseClientSuiviService;
        private syntheseClientUtilitaireService;
        private syntheseProduitService;
        private syntheseClientProfilService;
        private syntheseImpressionService;
        private modalService;
        private syntheseServicesService;
        private syntheseDetailServiceService;
        private syntheseDetailProduitService;
        private _objetSynthese;
        private _syntheseClientAdresse;
        private _syntheseClientOrigineClient;
        private _syntheseClientProfil;
        private _syntheseClientSuivi;
        private _personnePhysique;
        private _authentificationInfo;
        private _listeServices;
        private _listeDecouverts;
        static $inject: string[];
        flagLogActive: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService, syntheseClientProfilService: Service.SyntheseClientProfilService, syntheseImpressionService: Service.SyntheseImpressionService, modalService: MyWay.UI.IModalService, syntheseServicesService: Service.SyntheseServicesService, syntheseDetailServiceService: Service.SyntheseDetailServiceService, syntheseDetailProduitService: Service.SyntheseDetailProduitService);
        createImpressionParamsDocClient(): Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEImpressionParams;
        createArchiverParamsDocClient(): Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEArchiverParams;
        createArchiverImpressionParamsDocClient(): Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESEArchiverImpressionParams;
        /**
         * Fonction permettant de créer le document d'impression EXTERNE (impression client)
         * @param mode {string} mode d'impression : "clientAvecServices" ou "clientSansServices"
         * @return doc {Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESE} le document
         */
        createDocumentDocClient(mode: string): Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESE;
        /**
         * Fonction permettant de retourner l'adresse du client sur une ligne
         * @return {string} l'adresse sur une ligne
         */
        private getAdresseUneLigne;
        /**
         * Fonction permettant d'initialiser
         */
        initialisationDonnees: () => void;
        /**
         * Fonction permettant de recupérer la liste des produits actifs de la personne courante
         * @return {any} la liste des produits actifs
         */
        getProduitsActifs: () => any;
        /**
         * Fonction permettant de recupérer la liste des services actifs de la personne courante
         * @return {any} la liste des services actifs
         */
        private getServicesActifs;
        /**
         * Fonction permettant de détecter si un produit contient un découvert et d'ajouter le découvert à la liste des autres services
         * @param produit {SyntheseObjetsProduits} le produit qu'il faut controler
         */
        private traiterDecouvert(produit);
    }
}

declare module syntheseClient.Service {
    interface ISyntheseImpressionInterneService {
        createImpressionParamsDocInterne: () => Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTImpressionParams;
        createArchiverParamsDocInterne: () => Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTArchiverParams;
        createArchiverImpressionParamsDocInterne: () => Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTArchiverImpressionParams;
        createDocumentDocInterne: (mode: string) => Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INT;
    }
    interface IObjetServicesFiltres {
        listeMoyensPaiement: any[];
        listeAutresServices: any[];
    }
    interface IObjetTotal {
        total: number;
        libelle: string;
    }
    interface ITotaux {
        totalCompteCourant: IObjetTotal;
        totalEpargneLiquide: IObjetTotal;
        totalPlanContratEpargne: IObjetTotal;
        totalTitres: IObjetTotal;
        totalPlacementsAssurances: IObjetTotal;
        totalCrédits: IObjetTotal;
    }
    class SyntheseImpressionInterneService implements ISyntheseImpressionInterneService {
        private serviceAgentExtended;
        private syntheseInitialisationService;
        private syntheseClientSuiviService;
        private syntheseClientUtilitaireService;
        private syntheseProduitService;
        private syntheseServicesService;
        private syntheseDetailProduitService;
        private syntheseImpressionService;
        private syntheseClientProfilService;
        private modalService;
        private syntheseDetailServiceService;
        private _objetSynthese;
        private _syntheseClientAdresse;
        private _syntheseClientOrigineClient;
        private _syntheseClientProfil;
        private _syntheseClientSuivi;
        private _listeSyntheseClientEntiteTitulaire;
        private _personnePhysique;
        private _authentificationInfo;
        private _listeServices;
        static $inject: string[];
        flagLogActive: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService, syntheseServicesService: Service.SyntheseServicesService, syntheseDetailProduitService: Service.SyntheseDetailProduitService, syntheseImpressionService: Service.SyntheseImpressionService, syntheseClientProfilService: Service.SyntheseClientProfilService, modalService: MyWay.UI.IModalService, syntheseDetailServiceService: Service.SyntheseDetailServiceService);
        createImpressionParamsDocInterne(): Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTImpressionParams;
        createArchiverParamsDocInterne(): Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTArchiverParams;
        createArchiverImpressionParamsDocInterne(): Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTArchiverImpressionParams;
        /**
         * Fonction permettant de créer le document d'impression INTERNE
         * @param mode {string} mode d'impression : "intSansCmptSolde", "intAvecCmptSolde" ou "intDetaillee"
         * @return doc {Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INT} le document
         */
        createDocumentDocInterne(mode: string): Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INT;
        /**
         * Fonction permettant de filtrer la liste des moyens de paiement et la liste des autres services
         * @param listeEntiteTitulaire {Modeles.Services.IListeSyntheseClientCodeEtatService} la liste des entités titulaire
         * @return {IObjetServicesFiltres} un objet contenant la liste des instruments de paiement et la liste des autres services
         */
        private filtrerServices(listeEntiteTitulaire);
        private _paramNomVariables;
        /**
         * Fonction permettant d'initialiser
         */
        private initialisationDonnees;
        /**
         * Fonction permettant de générer la ligne CB
         * @param numeroEntite {number} le numéro de l'entité titulaire
         * @return {string} la ligne formatée
         */
        private genererLigneCB;
        private genererLignesTitreCompte;
    }
}

declare module syntheseClient.Service {
    interface ISyntheseImpressionService {
        objetSynthese: Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeServicesActifs: Modeles.Services.ISyntheseClientEntiteTitulaireService[];
        estHabilite: boolean;
    }
    class SyntheseImpressionService implements ISyntheseImpressionService {
        private serviceAgentExtended;
        private _objetSynthese;
        private _authentificationInfo;
        private _parametresComptables;
        private _listeServicesActifs;
        private _listeServices;
        estHabilite: boolean;
        static $inject: string[];
        flagLogActive: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Fonction permettant de générer l'entête d'un document
         * @param doc {Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESE | Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INT} Le document
         */
        genererEntete: (doc: Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESE | Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INT) => void;
        /**
         * Setter permettant de récupérer l'objet synthèse afin d'avoir accès à toutes les informations nécessaires à l'impression
         */
        objetSynthese: Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        listeServicesActifs: Modeles.Services.ISyntheseClientEntiteTitulaireService[];
        listeServicesAvantFormatage: Modeles.Services.IListeSyntheseClientCodeEtatService;
    }
}

declare module syntheseClient.Service {
    class SyntheseIndicateursFinanciersService {
        private syntheseClientUtilitaireService;
        private syntheseProduitService;
        static $inject: string[];
        constructor(syntheseClientUtilitaireService: syntheseClient.Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService);
        getTotalTresorerie(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        getTotalCredit(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        getTotalCollecte(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        getTotalImpaye(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        getTotalDebitsDifferes(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        getTotalContentieux(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        calculerTotalAssuranceVie(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): number;
        getTotalAssVie(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): string;
        calculerTotalAssuranceRisque(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): number;
        getTotalAssRisque(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): string;
        calculerTotalValMob(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): number;
        getTotalValMob(syntheseClientCodeEtatActif: Modeles.Produits.ISyntheseClientCodeEtatProduit): string;
    }
}

declare module syntheseClient.Service {
    interface IAgent {
        codeAgent: number;
        edsInterne: number;
    }
    class SyntheseInitialisationService {
        private $q;
        private $location;
        private $route;
        private $timeout;
        private _numeroPersonne;
        private _referenceExterneAgent;
        private _edsInterne;
        private _codeOrigineAppel;
        private _titre;
        private _idSynthese;
        private _codeEtablissement;
        private _listeVuesSyntheses;
        private _listeBlocsSynthese;
        private _codeAgent;
        private _popupinImpressionCharge;
        private _popupGestionMessageService;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, $route: ng.route.IRouteService, $timeout: ng.ITimeoutService);
        /**
         * formate le numéro de personne depuis une string vers un nombre,
         * renvoi null si valeur d'entrée undefined ou non convertible en nombre
         * @param numeroPersonne {string}
         * @return retour {number}
         */
        formaterNumeroPersonne(numeroPersonne: string): number;
        /**
         * retourne un objet simplifié, contenant le codeAgent et l'edsInterne, au format numérique,
         * à partir des informations d'authentification du contexte MyWay
         * @param authentificationInfo {MyWay.Services.Context.AuthentificationInfo}
         *
         */
        preparerDonnesAgent(authentificationInfo: MyWay.Services.Context.AuthentificationInfo): IAgent;
        recupererIdSyntheseParDefaut(objetListeSynthese: Modeles.Vues.IVueSynthese[]): string;
        genererUrlSynthese(codeAgent: number, edsInterne: number, numeroPersonne: number, idSynthese: string, typePersonne: string): string;
        genererUrlVueDetailSynthese(codeAgent: number, edsInterne: number, numeroPersonne: number, idSynthese: string, idVue: string, typePersonne: string): string;
        chargerVuesSynthese(route: string): void;
        /**
         * charger liste de blocs de la synthese active
         */
        getListeBlocs(): Modeles.Vues.IBlocs[];
        setListeBlocs(blocs: Array<syntheseClient.Modeles.Vues.IBlocs>): void;
        genererListeVuesSynthese(listeSynthese: Modeles.Vues.IVueSynthese[], numeroPersonne: number, objetAgent: syntheseClient.Service.IAgent, typePersonne: string): Modeles.Vues.IVueSynthese[];
        getCodeEtablissement(): string;
        setCodeEtablissement(codeEtab: string): void;
        recupererSyntheseParId(listeVuesSyntheses: Modeles.Vues.IVueSynthese[], idSynthese: string): Modeles.Vues.IEnteteObjet;
        genererLibelleAccessibleDetail(libelleRubrique: string, nomPersonne: string): string;
        getListeVuesSyntheses(): Modeles.Vues.IVueSynthese[];
        getCodeAgent(): number;
        getNumeroPersonne(): number;
        setNumeroPersonne(numero: number): void;
        getTitreSyntheseCourante(): string;
        setTitreSyntheseCourante(titre: string): void;
        getIdSyntheseCourante(): string;
        setIdSyntheseCourante(idSynthese: string): void;
        getReferenceExterneAgent(): number;
        getEdsInterne(): number;
        getCodeOrigineAppel(): string;
        private _urlAppel;
        setUrlAppel(url: string): void;
        getUrlAppel(): string;
        popupinImpressionCharge: boolean;
        popupGestionMessageService: boolean;
    }
}

declare module syntheseClient {
    class SyntheseObjetsProduits {
        idProduit: string;
        libelleProduit: string;
        typeProduit: string;
        objetOrigine: any;
        indicateur: string;
        numeroCompte: string;
        complement: string;
        soldeProduitCommun: string;
        libelleCategorie: string;
        libelleCategorieLong: string;
        numeroEntiteTitulaire: number;
        constructor();
    }
    interface IObjetsService {
        idService: string;
        libelleService: string;
        typeService: string;
        objetOrigine: any;
        indicateur: string;
        numeroCompte: string;
        complement: string;
        libelleLigne4: string;
        libelleCategorie: string;
        libelleCategorieLong?: string;
    }
    class SyntheseObjetsServices implements IObjetsService {
        idService: string;
        libelleService: string;
        typeService: string;
        objetOrigine: any;
        indicateur: string;
        numeroCompte: string;
        complement: string;
        libelleLigne4: string;
        libelleCategorie: string;
        constructor();
    }
}

declare module syntheseClient.Service {
    class SyntheseProduitLancementService {
        private $q;
        private serviceAgentExtended;
        private erreurService;
        private logger;
        private syntheseInitialisationService;
        private saisieRiceService;
        private commonService;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, erreurService: myway.core.ErreurService, logger: myway.core.LoggerService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, saisieRiceService: myway.comInterdomaine.SaisieRiceService, commonService: myway.core.CommonService);
        /**
         * Retourne les informations du produit ou service appelé avec les paramétres pour lancer le processus LISA
         * @param produit
         */
        getProcessusReadyToStart(produit: IScopeScElementProduit, situationMobiliteActive: boolean): IProduitDetails[];
        /**
         * Retourne un riceContrat à partir des différents éléments (21 caractères)
         * @param codeEtablissement
         * @param codeGuichet
         * @param numeroCompte
         * @return string
         */
        private getRiceContrat(codeEtablissement, codeGuichet, numeroCompte);
        /**
         * Retourne la liste des produits avec un passage de paramétres de type LISA pour lancer le processus associé
         * @param produit
         * @return IProduit
         */
        getDefineProduits(produit: IScopeScElementProduit): IProduit;
        /**
         * Gestion des débranchements crédits non souhaité (Type EPS)
         * @param produit
         */
        private produitCreditEstAutorise(produit);
        /**
         * Gestion des débranchements Assurance vie
         * @param produit
         */
        private produitDebranchementAssVieAutorise(produit);
        /**
         * Retourne si le produit peut débrancher sur la consultation IARD PRO
         * @param produit
         * @param listeEntite
         */
        private produitDebranchementIARDProAutorise(produit, listeEntite);
        /**
         * Retourne un code processus en fonction du code produit associé pour la classe listeSyntheseServiceSOLEnrolement
         * @param produit
         */
        private produitDebranchementSOLEnrolement(produit, consultation);
        private libelleProduitDebranchementSolEnrolement(produit, consultation);
        private produitDebranchementWebProtextion(produit);
        private produitDebranchementAlerteEcureuil(produit);
        private produitDebranchementAssCourtTerme(produit);
        /**
         * Retourne le bon type de canal de distribution en fonction du typeEds pour les processus IARD PART
         * @param typeEds
         * @return "00" ou "01" ou "02"
         */
        private defineCdTypeCanlDistn(typeEds);
        /**
         * Compare le mode composition souhaité pour autoriser le débranchement à celui hébergé par l'entité titulaire lié à un produit
         * @param modeCompositionAAvoir
         * @param numeroEntiteTitulaire
         * @param listeEntite
         */
        private filtrerModeCompositionEntiteTitulaireAssocieProduit(modeCompositionAAvoir, numeroEntiteTitulaire, listeEntite);
        /**
         * Détermine si un produit est rattacher à un compte et doit proposer les débranchement PMM SEPA
         * Transaction NSDK 0228, 0297 et 0298
         * @param produitInit
         * @param produitLancement
         */
        private enrichirTransactionSEPA(produitInit, produitLancement, riceContrat);
        private enrichirAvecListeTransaction(produitOrigine, produit, listeTransaction, riceContrat);
    }
}

declare module syntheseClient.Service {
    interface ICategoriesFiltre {
        value?: string;
        label: string;
        filtre: string;
        solde?: number;
        idProduits?: string[];
    }
    interface IMicroObjetEntite {
        numeroEntite: number;
        codeEtatPersonne: string;
    }
    interface IOffreFormatee {
        libelleOffre: string;
        numeroOffre: string;
        libelleEtatOffre: string;
    }
    interface IParamBlocsCategories {
        bloc: string;
        categorie: string;
        libelleCategorie?: string;
    }
    class SyntheseProduitService {
        private syntheseInitialisationService;
        private syntheseClientDonneesDelocService;
        private syntheseClientUtilitaireService;
        private syntheseClientConstantes;
        private $q;
        private serviceAgentExtended;
        private $location;
        static $inject: string[];
        constructor(syntheseInitialisationService: Service.SyntheseInitialisationService, syntheseClientDonneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientConstantes: syntheseClient.Constantes.Constantes, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
        typeProduitSelectionne: string;
        referencesModeComposition: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
        };
        referenceCodeUsage: {
            "1": string;
            "2": string;
        };
        referenceTypeSituationContrat: any[];
        referenceLibelleEtatOffre: {
            "0": string;
            "1": string;
            "2": string;
        };
        referenceLibelleEtatProduitServiceOrigine: {
            "0": string;
            "1": string;
            "2": string;
            "3": string;
            "8": string;
            "9": string;
        };
        referenceLibelleStatutFormule: {
            "4": string;
            "5": string;
            "6": string;
            "7": string;
        };
        titreOngletProduit: {
            "0": string;
            "1": string;
        };
        titreOngletService: {
            "0": string;
            "1": string;
        };
        titreOngletDetailProduitsServices: {
            "0": string;
            "1": string;
        };
        titreCourtOngletDetailProduitsServices: {
            "0": string;
            "1": string;
        };
        libellesContentieux: {
            "O": string;
            "N": string;
            "": string;
            "X": string;
        };
        libellesStatutDouteux: {
            "S": string;
            "D": string;
            "C": string;
        };
        libellesEtatVente: {
            "E": string;
            "V": string;
            "A": string;
            "C": string;
        };
        libellesCarteProduit: any[];
        libellesTypesDecouverts: any[];
        libellesProduitNational: any[];
        libellesDecouvert: any[];
        libellesNatureCompte: any[];
        libellesTypeFusion: any[];
        libellesEtatContrat: any[];
        libellesDevise: any[];
        libellesSituationContrat: any[];
        libellesMotifResiliation: any[];
        libelleTableProduit: any[];
        libelleSuivi: any[];
        private _syntheseClientProduits;
        private tableauProduits;
        private _initialisationDonnesDelocaliseesPromesse;
        init(): MyWay.Services.IPromesse<void>;
        /**
         * enrichir la liste des entités par famille de produit en fonction de la liste complète des entités du client
         * @param syntheseClientProduits{syntheseClient.Modeles.Produits.ISyntheseClientProduits} la liste d'origine des entités par produits soldés/actifs
         * @param listeDesDonneeSignaletiques{Modeles.Profil.ISyntheseClientEntiteTitulaire[]} la donnée concernant les entités associées au client, même celles sans produits
         * @return listeAjustee{Modeles.Produits.ISyntheseClientProduits} la nouvelle liste soldés/actifs avec les entités manquantes, sans produit, éventuelles
         */
        affinerListeEntitesTitulaires(syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits, donneesSignaletiques: Modeles.Profil.ISyntheseClientEntiteTitulaire[]): Modeles.Produits.ISyntheseClientProduits;
        /**
         * obtenir le libelle d"une entité titulaire à l"aide de son numéro
         * @param numeroEntiteTitulaire {number} un numéro d"entité titulaire
         * @return libelleEntite {string} la designation bancaire de l"entité
         */
        getNomEntiteTitulaire(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire[], ajouterModeComposition?: boolean, ajouterCodeUsage?: boolean): any;
        getModeCompUsageEntite(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire[], ajouterModeComposition?: boolean, ajouterCodeUsage?: boolean): string;
        getAgenceEntiteTitulaire(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire[]): string;
        getEntiteTitulaireProduit(listeEntiteTitulaireProduit: Array<Modeles.Produits.ISyntheseClientEntiteTitulaireProduit>, numeroEntite: number): Modeles.Produits.ISyntheseClientEntiteTitulaireProduit;
        getTotalProduitParEntite(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[], listeCriteresFiltres?: string[]): number;
        getTotalProduitsActifs(syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits, listeCriteresFiltres?: string[]): number[];
        getNombreMaximumDeProduitRattaches(liste: Modeles.Produits.ISyntheseClientProduits): number;
        getTotalProduitsSoldes(syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits, filtresProduits?: string[]): number[];
        /**
         * description la classe CSS associée à nombre de produit
         * @param nombreProduit{number} le nombre de produits présents
         * @return classe{string} la classe CSS à appliquer par rapport au multiple de 9 (au dela de 6 produits) représenté
         */
        getClasseProduit(nombreProduit: number): string;
        /**
         * permet de recuperer le libelle calcule court eds ET
         * qui correspond au nom de la personne gerant le dossier
         * A recuperer à partir du numero de l"entite titulaire
         * @param numeroEntite {number} numero entite
         * @param syntheseClientEntiteTitulaire {Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>}
         * @return libellecourt {string} le libellé de l'entité
         */
        afficherLibelleGerePar(numeroEntite: number, syntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>): string;
        /**
         * Permet de recuperer l"indicateur du produit OPPO ou IB
         * @param numeroEntite {number} numero de l"entite titulaire
         * @param produit {any} le type de produit
         * @return indicateur {string} le texte de l'indicateur à positionner
         */
        afficherIndicateurProduit(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet d"afficher le numero de compte du produit
         * @param numeroEntite{number} numero du client bancaire
         * @param syntheseClientEntiteTitulaireProduit{Array<Modeles.Produits.ISyntheseClientEntiteTitulaireProduit>}
         * @return la liste des produits de l"entite titulaire
         */
        afficherIdentCpte(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune, nomProduit?: string): string;
        /**
         * Permet de recuperer les informations complementaires du produit de CC
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * @return complement {string} l'information complementaire du produit
         */
        recuperComplementTenuCpte(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet de recuperer les informations complementaires du produit
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * @return complement {string } l'information complementaire du produit
         */
        recupererComplement(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet de recuperer les informations complementaires du produit
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * retourne l"information complementaire du produit
         */
        afficherInfoCompProduit(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune): string;
        /**
         * Permet de recuperer les informations de la ligne4 du produit de type IARD
         * @param objetProduit {Modeles.Produits.ISyntheseProduitsInfoCommune}
         * retourne la ligne4 table deloc CTRSCT à utiliser à la place
         */
        recuperLibelleLigne4(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune, nomProduit?: string): string;
        recupererLibelleProduit(objetProduit: Modeles.Produits.ISyntheseProduitsInfoCommune, nomProduit?: string): string;
        /**
         * generer tableau de produits
         * @param numeroEntite{number} numero entite titulaire
         * @param syntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>
         */
        genererTableauProduits(numeroEntite: number, produitPourEntite: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit): SyntheseObjetsProduits[];
        /**
         * generer tableau de produits
         * @param listeProduits: Array<Modeles.Produits.ISyntheseClientCodeEtatProduit> liste des produits a parcourir
         * @param criteres: MyWay.Model.Client, objet critere ayant permis d"acceder a la synthese
         * @param typeCritere: syntheseClient.Enumerations.Utilitaires.CodeCriteresRecherche la rubrique de l"objet critere qui a
         * permis l acces a la synthese
         *  retourne le premier objet produit qui remplis les criteres de recherche l"id identite titulaire correspondant et
         */
        CherCherProduitParCritere(listeProduits: Array<Modeles.Produits.ISyntheseClientCodeEtatProduit>, criteres: MyWay.Model.Client, typeCritere: syntheseClient.Enumerations.Utilitaires.CodeCriteresRecherche): Modeles.Produits.IProduitCibleParRecherche;
        /**
         * Fonction permettant de formater le produit SX5R
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssCFF} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssCFF} le produit formaté
         */
        listeSyntheseClientProdAssCFF(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCFF): Modeles.DetailProduits.ISyntheseClientProdAssCFF;
        /**
         * Fonction permettant de formater le produit SX8Y
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssCFFComp} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssCFFComp} le produit formaté
         */
        listeSyntheseClientProdAssCFFComp(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCFFComp): Modeles.DetailProduits.ISyntheseClientProdAssCFFComp;
        /**
         * Fonction permettant de formater le produit SX5H
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssCNP} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssCNP} le produit formaté
         */
        listeSyntheseClientProdAssCNP(objetOriginal: Modeles.Produits.ISyntheseClientProdAssCNP): Modeles.DetailProduits.ISyntheseClientProdAssCNP;
        /**
         * Fonction permettant de formater le produit SX5K
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssIARD} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssIARD } le produit formaté
         */
        listeSyntheseClientProdAssIARD(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARD): Modeles.DetailProduits.ISyntheseClientProdAssIARD;
        /**
         * Fonction permettant de formater le produit Sx8Z
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssIARDAllianz} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssIARDAllianz} le produit formaté
         */
        listeSyntheseClientProdAssIARDAllianz(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARDAllianz): Modeles.DetailProduits.ISyntheseClientProdAssIARDAllianz;
        /**
         * Fonction permettant de formater le produit SX8N
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssIARDComp} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssIARDComp} le produit formaté
         */
        listeSyntheseClientProdAssIARDComp(objetOriginal: Modeles.Produits.ISyntheseClientProdAssIARDComp): Modeles.DetailProduits.ISyntheseClientProdAssIARDComp;
        /**
         * Fonction permettant de formater le produit SX94
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssNatixis} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssNatixis} le produit formaté
         */
        listeSyntheseClientProdAssNatixis(objetOriginal: Modeles.Produits.ISyntheseClientProdAssNatixis): Modeles.DetailProduits.ISyntheseClientProdAssNatixis;
        /**
         * Fonction permettant de formater le produit SX5B
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAssParaBanc} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAssParaBanc} le produit formaté
         */
        /**
         * Fonction permettant de formater le produit SX5E
         * @param objetOriginal {any} Le produit à formater
         * @return {any} le produit formaté
         */
        listeSyntheseClientProdAssParaBncBis(objetOriginal: any): any;
        /**
         * Fonction permettant de formater le produit SX75
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdAutoTransfert} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdAutoTransfert} le produit formaté
         */
        listeSyntheseClientProdAutoTransfert(objetOriginal: Modeles.Produits.ISyntheseClientProdAutoTransfert): Modeles.DetailProduits.ISyntheseClientProdAutoTransfert;
        /**
         * Fonction permettant de formater le produit SX5I
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCCE} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCCE} le produit formaté
         */
        listeSyntheseClientProdCCE(objetOriginal: Modeles.Produits.ISyntheseClientProdCCE): Modeles.DetailProduits.ISyntheseClientProdCCE;
        /**
         * Fonction permettant de formater le produit SX8Q
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCCI} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCCI} le produit formaté
         */
        listeSyntheseClientProdCCI(objetOriginal: Modeles.Produits.ISyntheseClientProdCCI): Modeles.DetailProduits.ISyntheseClientProdCCI;
        /**
         * Fonction permettant de formater le produit SX7U
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCartAffComp} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCartAffComp} le produit formaté
         */
        listeSyntheseClientProdCartAffComp(objetOriginal: Modeles.Produits.ISyntheseClientProdCartAffComp): Modeles.DetailProduits.ISyntheseClientProdCartAffComp;
        /**
         * Fonction permettant de formater le produit SX7V
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCartAffaire} Le produit à formater
         * @return objet vide
         */
        listeSyntheseClientProdCartAffaire(objetOriginal: Modeles.Produits.ISyntheseClientProdCartAffaire): void;
        /**
         * Fonction permettant de formater le produit SX7B
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCartado} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCartado}
         */
        listeSyntheseClientProdCartado(objetOriginal: Modeles.Produits.ISyntheseClientProdCartado): Modeles.DetailProduits.ISyntheseClientProdCartado;
        /**
         * Fonction permettant de formater le produit SX5F
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCarteAurore} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCarteAurore} le produit formaté
         */
        listeSyntheseClientProdCarteAurore(objetOriginal: Modeles.Produits.ISyntheseClientProdCarteAurore): Modeles.DetailProduits.ISyntheseClientProdCarteAurore;
        /**
         * Fonction permettant de formater le produit SX8D
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCarteDebCredit} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCarteDebCredit} le produit formaté
         */
        listeSyntheseClientProdCarteDebCredit(objetOriginal: Modeles.Produits.ISyntheseClientProdCarteDebCredit): Modeles.DetailProduits.ISyntheseClientProdCarteDebCredit;
        /**
         * Fonction permettant de formater le produit SX8M
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCautionFiliale} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCautionFiliale} le produit formaté
         */
        listeSyntheseClientProdCautionFiliale(objetOriginal: Modeles.Produits.ISyntheseClientProdCautionFiliale): Modeles.DetailProduits.ISyntheseClientProdCautionFiliale;
        /**
         * Fonction permettant de formater le produit SX65
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCiloger} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCiloger} le produit formaté
         */
        listeSyntheseClientProdCiloger(objetOriginal: Modeles.Produits.ISyntheseClientProdCiloger): Modeles.DetailProduits.ISyntheseClientProdCiloger;
        /**
         * Fonction permettant de formater le produit SX49
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCodevi} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCodevi} le produit formaté
         */
        listeSyntheseClientProdCodevi(objetOriginal: Modeles.Produits.ISyntheseClientProdCodevi): Modeles.DetailProduits.ISyntheseClientProdCodevi;
        /**
         * Fonction permettant de formater le produit SX5D
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCoffre} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCoffre} le produit formaté
         */
        listeSyntheseClientProdCoffre(objetOriginal: Modeles.Produits.ISyntheseClientProdCoffre): Modeles.DetailProduits.ISyntheseClientProdCoffre;
        /**
         * Fonction permettant de formater le produit SX95
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdContratMonetique} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdContratMonetique} le produit formaté
         */
        listeSyntheseClientProdContratMonetique(objetOriginal: Modeles.Produits.ISyntheseClientProdContratMonetique): Modeles.DetailProduits.ISyntheseClientProdContratMonetique;
        /**
         * Fonction permettant de formater le produit SX43
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCptDepot} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCptDepot} le produit formaté
         */
        listeSyntheseClientProdCptDepot(objetOriginal: Modeles.Produits.ISyntheseClientProdCptDepot): Modeles.DetailProduits.ISyntheseClientProdCptDepot;
        /**
         * Fonction permettant de formater le produit SX4V
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCptInstance} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCptInstance} le produit formaté
         */
        listeSyntheseClientProdCptInstance(objetOriginal: Modeles.Produits.ISyntheseClientProdCptInstance): Modeles.DetailProduits.ISyntheseClientProdCptInstance;
        /**
         * Fonction permettant de formater le produit SX56
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCptTeoz} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCptTeoz} le produit formaté
         */
        listeSyntheseClientProdCptTeoz(objetOriginal: Modeles.Produits.ISyntheseClientProdCptTeoz): Modeles.DetailProduits.ISyntheseClientProdCptTeoz;
        /**
         * Fonction permettant de formater le produit SX5A
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCredit} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCredit } le produit formaté
         */
        listeSyntheseClientProdCredit(objetOriginal: Modeles.Produits.ISyntheseClientProdCredit): Modeles.DetailProduits.ISyntheseClientProdCredit;
        /**
         * Fonction permettant de formater le produit SX62
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCreditAlis} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCreditAlis} le produit formaté
         */
        listeSyntheseClientProdCreditAlis(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditAlis): Modeles.DetailProduits.ISyntheseClientProdCreditAlis;
        /**
         * Fonction permettant de formater le produit SX68
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCreditBail} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCreditBail} le produit formaté
         */
        listeSyntheseClientProdCreditBail(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditBail): Modeles.DetailProduits.ISyntheseClientProdCreditBail;
        /**
         * Fonction permettant de formater le produit SX64
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCredit} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCredit} le produit formaté
         */
        listeSyntheseClientProdCreditCEDI(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditCEDI): Modeles.DetailProduits.ISyntheseClientProdCreditCEDI;
        /**
         * Fonction permettant de formater le produit SX5P
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdCreditComp} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdCreditComp} le produit formaté
         */
        listeSyntheseClientProdCreditComp(objetOriginal: Modeles.Produits.ISyntheseClientProdCreditComp): Modeles.DetailProduits.ISyntheseClientProdCreditComp;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {any} Le produit à formater
         * @return {any} le produit formaté
         */
        listeSyntheseClientProdCreditExterne(objetOriginal: any): any;
        /**
         * Fonction permettant de formater le produit SX5T
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdDATHorsPEL} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdDATHorsPEL} le produit formaté
         */
        listeSyntheseClientProdDATHorsPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdDATHorsPEL): Modeles.DetailProduits.ISyntheseClientProdDATHorsPEL;
        /**
         * Fonction permettant de formater le produit SX5U
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdDATPEL} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdDATPEL} le produit formaté
         */
        listeSyntheseClientProdDATPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdDATPEL): Modeles.DetailProduits.ISyntheseClientProdDATPEL;
        /**
         * Fonction permettant de formater le produit SX70
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdEpargSalariale} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdEpargSalariale} le produit formaté
         */
        listeSyntheseClientProdEpargSalariale(objetOriginal: Modeles.Produits.ISyntheseClientProdEpargSalariale): Modeles.DetailProduits.ISyntheseClientProdEpargSalariale;
        /**
         * Fonction permettant de formater le produit SX72
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdEpargnSalComp} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdEpargnSalComp} le produit formaté
         */
        listeSyntheseClientProdEpargnSalComp(objetOriginal: Modeles.Produits.ISyntheseClientProdEpargnSalComp): Modeles.DetailProduits.ISyntheseClientProdEpargnSalComp;
        /**
         * Fonction permettant de formater le produit SX55
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdEscompteCCE} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdEscompteCCE} le produit formaté
         */
        listeSyntheseClientProdEscompteCCE(objetOriginal: Modeles.Produits.ISyntheseClientProdEscompteCCE): Modeles.DetailProduits.ISyntheseClientProdEscompteCCE;
        /**
         * Fonction permettant de formater le produit SX7R
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdFacturea} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdFacturea } le produit formaté
         */
        listeSyntheseClientProdFacturea(objetOriginal: Modeles.Produits.ISyntheseClientProdFacturea): Modeles.DetailProduits.ISyntheseClientProdFacturea;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {ISyntheseClientProdGarSanteColl} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdGarantieSante} le produit formaté
         */
        listeSyntheseClientProdGarSanteColl(objetOriginal: Modeles.Produits.ISyntheseClientProdGarSanteColl): Modeles.DetailProduits.ISyntheseClientProdGarantieSante;
        /**
         * Fonction permettant de formater le produit SX7M
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdGarantieSante} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdGarantieSante} le produit formaté
         */
        listeSyntheseClientProdGarantieSante(objetOriginal: Modeles.Produits.ISyntheseClientProdGarantieSante): Modeles.DetailProduits.ISyntheseClientProdGarantieSante;
        /**
         * Fonction permettant de formater le produit SX44
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdLEL} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLEL} le produit formaté
         */
        listeSyntheseClientProdLEL(objetOriginal: Modeles.Produits.ISyntheseClientProdLEL): Modeles.DetailProduits.ISyntheseClientProdLEL;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdLEP} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLEP} le produit formaté
         */
        listeSyntheseClientProdLEP(objetOriginal: Modeles.Produits.ISyntheseClientProdLEP): Modeles.DetailProduits.ISyntheseClientProdLEP;
        /**
         * Fonction permettant de formater le produit SX40
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdLivretA} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLivretA} le produit formaté
         */
        listeSyntheseClientProdLivretA(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretA): Modeles.DetailProduits.ISyntheseClientProdLivretA;
        /**
         * Fonction permettant de formater le produit SX41
         * @param objetOriginal {any} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLivretB} le produit formaté
         */
        listeSyntheseClientProdLivretB(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretB): Modeles.DetailProduits.ISyntheseClientProdLivretB;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {any} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLivretDev} le produit formaté
         */
        listeSyntheseClientProdLivretDev(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretDev): Modeles.DetailProduits.ISyntheseClientProdLivretDev;
        /**
         * Fonction permettant de formater le produit SX4A
         * @param objetOriginal {any} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdLivretJeune} le produit formaté
         */
        listeSyntheseClientProdLivretJeune(objetOriginal: Modeles.Produits.ISyntheseClientProdLivretJeune): Modeles.DetailProduits.ISyntheseClientProdLivretJeune;
        /**
         * Fonction permettant de formater le produit SX7Y
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdMomentverite} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdMomentverite} le produit formaté
         */
        listeSyntheseClientProdMomentverite(objetOriginal: Modeles.Produits.ISyntheseClientProdMomentverite): Modeles.DetailProduits.ISyntheseClientProdMomentverite;
        /**
         * Fonction permettant de formater le produit SX93
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdOPEFI} Le produit à formater
         * @return { Modeles.DetailProduits.ISyntheseClientProdOPEFI} le produit formaté
         */
        listeSyntheseClientProdOPEFI(objetOriginal: Modeles.Produits.ISyntheseClientProdOPEFI): Modeles.DetailProduits.ISyntheseClientProdOPEFI;
        /**
         * Fonction permettant de formater le produit SX8X
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdOctav} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdOctav} le produit formaté
         */
        listeSyntheseClientProdOctav(objetOriginal: Modeles.Produits.ISyntheseClientProdOctav): Modeles.DetailProduits.ISyntheseClientProdOctav;
        /**
         * Fonction permettant de formater le produit SX74
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdOptAlis} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdOptAlis } le produit formaté
         */
        listeSyntheseClientProdOptAlis(objetOriginal: Modeles.Produits.ISyntheseClientProdOptAlis): Modeles.DetailProduits.ISyntheseClientProdOptAlis;
        /**
         * Fonction permettant de formater le produit SX48
         * @param objetOriginal {any} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdPEA} le produit formaté
         */
        listeSyntheseClientProdPEA(objetOriginal: Modeles.Produits.ISyntheseClientProdPEA): Modeles.DetailProduits.ISyntheseClientProdPEA;
        /**
         * Fonction permettant de formater le produit SX45
         * @param objetOriginal {any} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdPEL} le produit formaté
         */
        listeSyntheseClientProdPEL(objetOriginal: Modeles.Produits.ISyntheseClientProdPEL): Modeles.DetailProduits.ISyntheseClientProdPEL;
        /**
         * Fonction permettant de formater le produit SX47
         * @param objetOriginal {Modeles.DetailProduits.ISyntheseClientProdPEP} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdPEP} le produit formaté
         */
        listeSyntheseClientProdPEP(objetOriginal: Modeles.Produits.ISyntheseClientProdPEP): Modeles.DetailProduits.ISyntheseClientProdPEP;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {odeles.Produits.ISyntheseClientProdPER} Le produit à formater
         * @return objet vide
         */
        listeSyntheseClientProdPER(objetOriginal: Modeles.Produits.ISyntheseClientProdPER): {};
        /**
         * Fonction permettant de formater le produit SX7A
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdSAP} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdSAP} le produit formaté
         */
        listeSyntheseClientProdSAP(objetOriginal: Modeles.Produits.ISyntheseClientProdSAP): Modeles.DetailProduits.ISyntheseClientProdSAP;
        /**
         * Fonction permettant de formater le produit SX66
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdSmile} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdSmile} le produit formaté
         */
        listeSyntheseClientProdSmile(objetOriginal: Modeles.Produits.ISyntheseClientProdSmile): Modeles.DetailProduits.ISyntheseClientProdSmile;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {any} Le produit à formater
         * @return {any} le produit formaté
         */
        listeSyntheseClientProdSmileComp(objetOriginal: any): any;
        /**
         * Fonction permettant de formater le produit SX85
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdSocfim} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdSocfim} le produit formaté
         */
        listeSyntheseClientProdSocfim(objetOriginal: Modeles.Produits.ISyntheseClientProdSocfim): Modeles.DetailProduits.ISyntheseClientProdSocfim;
        /**
         * Fonction permettant de formater le produit SX5C
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdTitres } Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdTitres} le produit formaté
         */
        listeSyntheseClientProdTitres(objetOriginal: Modeles.Produits.ISyntheseClientProdTitres): Modeles.DetailProduits.ISyntheseClientProdTitres;
        /**
         * Fonction permettant de formater le produit SX67
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdTrade} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdTrade} le produit formaté
         */
        listeSyntheseClientProdTrade(objetOriginal: Modeles.Produits.ISyntheseClientProdTrade): Modeles.DetailProduits.ISyntheseClientProdTrade;
        /**
         * Fonction permettant de formater le produit SX57
         * @param objetOriginal {Modeles.Produits.ISyntheseClientProdVega} Le produit à formater
         * @return {Modeles.DetailProduits.ISyntheseClientProdVega} le produit formaté
         */
        listeSyntheseClientProdVega(objetOriginal: Modeles.Produits.ISyntheseClientProdVega): Modeles.DetailProduits.ISyntheseClientProdVega;
        /**
         * Fonction permettant de formater une offre
         * @param libelleOffre {string} le libellé de l'offre
         * @param numeroOffre {number} le numéro de l'offre
         * @param codeEtatOffre {string} le code de l'état de l'offre
         * @return {IOffreFormatee} un objet de l'offre formatée
         */
        formaterOffre(libelleOffre: string, numeroOffre: number, codeEtatOffre: string): IOffreFormatee;
        getProduitsActifs(syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits): any;
        private _tableauCategories;
        private produitInterditALimpression(produit, typeProduit);
        resetListeCategories(): void;
        /**
         * retourner la liste des catégories présentes dans la liste produits
         * @return this._tableauCategories {ICategoriesFiltre[]} liste catégories
         */
        getListeCategories(): ICategoriesFiltre[];
        private formaterProduit(produit, nomProduit, indicateur?, idProduit?);
        /**
         * generation de la liste des produits pour une entité titulaire sélectionnée
         * @param {string} typeProduit le code état pour un produit actif ou soldé
         * @param {number} numeroEntite le numero d'entité titulaire à sélectionner
         */
        genererProduitsPourEntite(typeProduit: string, numeroEntite: number): SyntheseObjetsProduits[];
    }
}

declare module syntheseClient.Service {
    class SyntheseClientProfilService {
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesDelocService;
        private $q;
        static $inject: string[];
        metierPersonne: string;
        constructor(syntheseClientUtilitaireService: SyntheseClientUtilitaireService, syntheseClientDonneesDelocService: syntheseClient.Service.SyntheseClientDonneesDelocService, $q: ng.IQService);
        /**
         * Permet d'afficher le pictogramme en fonction de la civilité et de l'age de la personne
         * @param pictogramme:string
         * @param codeCivilité: string
         * @param age:string
         */
        afficherPictogramme(codeGenre: string, dateNaissance: string, dateDuJour: Date, codePersonnaliteJuridique: string): string;
        /**
         * Permet d'afficher le texte Lié à l'entrepreneur individuel en fonction d'un indicateut
         * @param indicExistenceProfessionnel:string
         */
        formaterEntrepreneurIndividuel(indicExistenceProfessionnel: string): string;
        /**
         * Permet d'afficher le code civilite et la designation courte de la personne physique
         * @param codePersonnaliteJuridique:string
         * @param libelleDesignationCourte:string
         * @param codeCivilite:string
         * @param nomFamille:string
         * @param prenom:string
         */
        afficherDesignationCourte(codePersonnaliteJuridique: string, designationCourte: string, statut: string, codeCivilite: string, nomFamille: string, prenom: string): string;
        /**
         * Permet d'afficher le nom, prenom et code civilité d'une personne physique
         * @param codeCivilite:string
         * @param nomFamille:string
         * @param prenom
         */
        /**
         * Permet d'afficher la mention prospect ou client de la personne
         * @param codePersonnaliteJuridique:string
         * @param codeProspect: string
         * @param libelleMentionPersonne:string
         */
        afficherMentionPersonne(codePersonnaliteJuridique: string, codeProspect: string, codeClientTiers: string): string;
        afficherDateDeCreation(codePersonnaliteJuridique: string, dateCreationJuridique: string): string;
        afficherNumeroSiren(codePersonnaliteJuridique: string, numeroSiren: string): string;
        /**
         * Permet de calculer l'age d'une personne à partir de sa date de naissance et de la date du jour
         * @param dateNaissance:string
         * @param dateDuJour:Date
         * @return age:number
         */
        calculerAgePersonne(dateNaissance: string, dateDuJour: Date): number;
        /**
         * Permet de formater l'affichage du libellé de la date de naissance
         * Le résultat doit être sous la forme jj/mm/aaaa
         * @param dateNaissance:Date
         */
        formaterAffichageLibelleDateNaissance(codePersonnaliteJuridique: string, dateNaissance: string): string;
        afficherLibelleAge(age: number): string;
        /**
         * Permet de formater l'affichage du code Sexe de la personne
         * Le résultat doit être 'M' ou 'F'
         * @param codeSexe:string
         */
        calculerCodeSexe(codeCivilite: string): string;
        /**
         * Permet de formater l'affichage du libelle de la date de dècés
         * Le résultat doit être sous la forme Décédé(e) le jj/mm/aaaa
         * @param libelleAffichageDateDeDeces:string
         */
        formaterAffichageLibelleDateDeces(codePersonnaliteJuridique: string, dateDeDeces: string): string;
        /**
         * Permet de formater l'affichage du libelle de la date de dècés
         * Le résultat doit être sous la forme cloture
         * @param libelle:string
         * @param codMotifClotureEntTitulaire:string
         */
        afficherLibelleCodeMotifCloture(codePersonnaliteJuridique: string, codMotifClotureEntTitulaire: string): string;
        /**
         * Permet de formater l'affichage du libelle d'un contenu simple
         * Le résultat doit être sous la forme label : valeur
         * @param libelleAffichageContenuSimple:string
         */
        formaterAffichageLibelleContenuSimple(value: string, statut: string): string;
        /**
         * Permet de formater l'affichage du metier d'une personne
         * Le résultat doit être sous la forme label : metier / secteur d'activite
         * @param libelleMetierPersonne:string
         */
        afficherMetierPersonne(codeEtablissement: string, codePersonnaliteJuridique: string, statut: string, codeAdministrationSpecifique: string, libelleProfessionParticulier: string, codeCategorieSocioProf: string): ng.IPromise<string>;
        /**
         * Permet de formater l'affichage des lignes de l'adresse postale
         * Le résultat doit être sous la forme Adresse : ligne2 ligne3 ...
         * @param libelleAffichageAdresse:IAdresse
         */
        formaterAffichageLibelleAdressePostale(clientAdresse: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse, statut: string): syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
    }
}

declare module syntheseClient.Service {
    class SyntheseClientRisquesAlertesService {
        private syntheseClientUtilitaireService;
        private syntheseInitialisationService;
        private syntheseClientDonneesDelocService;
        private syntheseClientDonneesService;
        private $q;
        private serviceAgentExtended;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        private: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        private syntheseClientProfil;
        private _indicateurPresenceOffresInstance;
        indicateurOffresEnInstances: string;
        adresseClientNpai: Modeles.Coordonnes.ISyntheseClientAdresseNPAI;
        adressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        afficherPopinMessageService: boolean;
        isSelectedMessage: boolean;
        codeExisteInfoInterneService: string;
        indicateurPresenceMessageService: boolean;
        provenance: string[];
        codeTypeUsage: string[];
        modeComposition: string[];
        modeCompositionET: string[];
        identifiantChrono: number;
        identifiantEntiteTitulaire: number;
        tableauCodeProvenance: any[];
        donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        informationService: Modeles.AlertesMessagesService.IDetailInformationService[];
        private eligibleSU1P;
        modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService;
        static $inject: string[];
        constructor(syntheseClientUtilitaireService: SyntheseClientUtilitaireService, syntheseInitialisationService: Service.SyntheseInitialisationService, syntheseClientDonneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientDonneesService: Service.SyntheseClientDonneesService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        init(): void;
        /**
         * Permet de recuperer le total des alertes
         * @param informationService {}
         * @param codeExisteInfoInterneService {}
         * @param totalAlerte {string}
         */
        getTotalAlerte(informationService: Modeles.AlertesMessagesService.IDetailInformationService[], codeExisteInfoInterneService: string): string[];
        /**
         * Permet de recuperer la note bale II de la personne et supprime le 1 chiffre de la note
         * @param syntheseClientProfil {}
         * @param noteBale {string}
         */
        afficherNoteBale(syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil): string;
        /**
         * Permet de recuperer la compétence financière de la personne
         * @param syntheseClientProfil {}
         * @param cotation {string}
         */
        afficherCompetenceFinanciere(syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil): string;
        affichageStatutPersonne(syntheseClientOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        /**
         * Permet de recuperer le libelle FIBEN d'une personne morale
         * @param libelleFiben{string}
         * @param codePersonnaliteJuridique{string} code: SX3M.CODAPJ
         * @param typeCotationFIBEN {string} code: SX3S.COMRCT
         */
        afficherLibelleFibenBDF(codePersonnaliteJuridique: string, typeCotationFiben: string): string;
        /**
         * Permet de recuperer la note FIBEN d'une personne morale
         * @param noteFiben{string}
         * @param codePersonnaliteJuridique{string} code: SX3M.CODAPJ
         * @param typeCotationFiben {string} code: SX3S.COMRCT
         */
        recupererNoteFibenBDF(codePersonnaliteJuridique: string, typeCotationFiben: string): string;
        /**
         * Permet de recuperer le libelle DATE FIBEN d'une personne morale
         * @param libelleDateFiben{string}
         * @param codePersonnaliteJuridique{string} code: SX3M.CODAPJ
         * @param typeCotationFiben {string} code: SX3S.COMRCT
         */
        afficherLibelleDateFiben(codePersonnaliteJuridique: string, typeCotationFiben: string): string;
        /**
         * Permet de recuperer la DATE FIBEN d'une personne morale
         * Le résultat attendu doit être sous la forme jj/mm/aaaa
         * @param dateFiben{string}
         * @param codePersonnaliteJuridique{string} code: SX3M.CODAPJ
         * @param typeCotationFiben {string} code: SX3S.COMRCT
         * @param dateSituationBDF{string} code: SX3S.DAMRAS
         */
        recupererDateFiben(codePersonnaliteJuridique: string, dateSituationBDF: string, typeCotationFiben: string): string;
        /**
         * Permet de recuperer un libellé pour le recouvrement ou le contentieux
         * Le résultat attendu doit être une string ou null
         *
         * @param objetOrigineClient{ Modeles.Profil.ISyntheseClientOrigineClient}
         * @return libelleContentieux{string}
         */
        getLibelleRecouvrementEtContentieux(objetOrigineClient: Modeles.Profil.ISyntheseClientOrigineClient): string;
        /**
         * Permet de détecter les produits concernés par le RPM Actif
         * @param syntheseClientEntiteTitulaireProduit
         * @return valeurRPM{string}
         */
        verifierRPMActif(syntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): string;
        /**
         * Permet de détecter les produits concernés par le RPM Fiche Suivi
         * @param syntheseClientEntiteTitulaireProduit
         * @return valeurRPM{string}
         */
        verifierRPMFicheSuivi(syntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): any;
        /**
         * Permet de détecter les produits concernés par le RPM Actif
         * @param listeSyntheseClientEntiteTitulaireProduit{Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]}
         * @return valeurRPM{string}
         */
        obtenirValeurRPM(listeSyntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): string;
        /**
         * Permet de recuperer la capcitéJuridique de la personne
         * @param codeCapaciteJuridique{string}
         * @param capaciteJurique{string}
         */
        afficherCapaciteJuridique(codeCapaciteJuridique: string): string;
        /**
         * Permet de recuperer l'indicAlerteSurPersonne
         * @param indicAlerteSurPersonne{string}
         * @param libelleIndicAlerte{string}
         */
        afficherIndicAlerteSurPersonne(indicAlerteSurPersonne: string): string;
        /**
         * Permet de recuperer l'indicAlerteSurPersonne
         * @param indicAlerteReclamation{string}
         * @param libelleIndicAlerteReclamation{string}
         */
        afficherIndicAlerteReclamation(indicAlerteReclamation: string): string;
        /**
         * Permet de détecter les produits concernés par Réglementaire EPARGNE
         * @param syntheseClientEntiteTitulaireProduit
         * @return valeur{string}
         */
        afficherReglementaireEpargne(syntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): string;
        /**
         * Permet de recuperer les produits concernés par Score de Vigilance
         * @param codeDegreSensibilitePersonne{string}
         * @param libelleDegSensibilitePers{string}
         */
        afficherDegSensibilitePers(codeDegreSensibilitePersonne: string): string;
        /**
         * Permet de recuperer les produits concernés par DRC non complet
         * @param codeEtatCompletudeDossier{string}
         * @param indicateurAlerteDRC{string}
         * @return {Modeles.AlertesMessagesService.IAlerte} l'objet Alerte formaté
         */
        afficherEtatDossierClient(codeEtatCompletudeDossier: string, indicateurAlerteDRC: string): Modeles.AlertesMessagesService.IAlerte;
        /**
         * Permet de recuperer l'indicPresenceActesaisieOuATD
         * @param indicPresenceActesaisieOuATD{string}
         * @param libelleIndicPresenceActeSaisie{string}
         */
        afficherIndicPresenceActeSaisie(indicPresenceActesaisieOuATD: string): string;
        /**
         * Permet de recuperer les produits concernés par Watch-List
         * @param codeNiveauWatchListLocale{string}
         * @param codeNiveauWatchListNationale{string}
         * @param codeNiveauWatchListBanqueRef{string}
         * @param libelleWatchList{string}
         */
        afficherWatcList(codeNiveauWatchListLocale: string, codeNiveauWatchListNationale: string, codeNiveauWatchListBanqueRef: string): string;
        getListeMessagesServices(informationService: Modeles.AlertesMessagesService.IDetailInformationService[], codeExisteInfoInterneService: string, statut: string, longueurLibellesChrono?: number): any;
        /**
         * Permet de recuperer les produits concernés par le surendettement
         * @param codeFamilleDossier{string}
         * @param libelleSurendettement{string}
         */
        afficherSurendettementClient(codeFamilleDossier: string): string;
        /**
         * Permet de recuperer l'alerte pour l'adresse postale à corriger
         * @param codeValiditeAdresseUNISERV{string}
         * @param codePersonnaliteJuridique{string}
         * @param libelleAdressePostaleAcorriger{string}
         */
        recupererAdressePostaleAcorriger(codeTypeRetourPtt: string): string;
        /**
         * Permet de recuperer l'alerte pour l'adresse postale à contrôler
         * @param codeEtatAdressePND{string}
         * @return libelleAdresseAcontroler{string}
         */
        recupererAdresseAcontroler(codeEtatAdressePND: string): string;
        /**
         * Permet de recuperer l'alerte pour l'adresse PROF NPAI à corriger
         * @param identifiantAdresse{Modeles.Coordonnes.ISyntheseClientAdresseNPAI}
         * @param identifiantAdresse{Modeles.Coordonnes.ISyntheseClientAdresse}
         * @param libelleAffichageAdresseNpai{string}
         */
        recupererAdresseProfNpaiAcorriger(clientAdresseNpai: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresseNPAI, clientAdressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse): string;
        /**
         * Permet de recuperer le libelle présumé décédé
         * @param indicDecesPresume{string}
         * @param libelleIndicDecesPresume{string}
         */
        afficherLibelleIndicDecesPresume(indicDecesPresume: string): string;
        /**
         * Permet de recuperer la date du présumé décédée
         * Le résultat attendu doit être sous la forme jj/mm/aaaa
         * @param indicDecesPresume{string}
         * @param dateDecesPresume{string}
         */
        afficherDateDecesPresume(profilClient: Modeles.Profil.ISyntheseClientProfil): string;
        /**
         * Permet de recuperer le libelle de l'alerte Interdit Bancaire
         * @param syntheseClientEntiteTitulaireProduit{Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]}
         * @param libelleInterditBancaire{string}
         */
        getInterditBancaire(syntheseClientEntiteTitulaireProduit: Modeles.Produits.ISyntheseClientEntiteTitulaireProduit[]): any;
        /**
         * Permet de récupérer le libellé de l'alerte offres en instance
         * @param offresEnInstance {Modeles.OffresEnInstance.IOffre[]}
         * @param codeEtatOffre {string}
         * @return libelleOffresEnInstance {string}
         */
        getOffresEnInstance(offresEnInstance: Modeles.OffresEnInstance.IOffre[], codeEtatOffre: string): string;
        /**
         * Permet de récupérer la liste de numéro entité titulaire d'une personne
         * @param syntheseClientProduits {Modeles.Produits.ISyntheseClientProduits}
         * @return retourListeNumeroEntiteTitulaire {number}
         */
        getListeNumeroEntiteTitulaire(syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits): number[];
        getindicateurOffresEnInstances(): string;
        setindicateurOffresEnInstances(indicateur: string): void;
        /**
         * valorise la variable privée indicateurPresenceOffresInstance
         * @param listeNumeroEntitesTitulaires{number[]}
         */
        verifierPresenceOffresEnInstances(listeNumeroEntitesTitulaires: number[]): void;
        /**
         * Permet d'afficher le Questionnaire Compétence financière
         * @param codeNiveauConnaissanceClient {string}
         * @param dateDernEvaluationConnaissance {string}
         * @param niveauRisqueInvestisseur {string}
         * @return libelleQcf {string}
         */
        afficherQcf(codeNiveauConnaissanceClient: string, dateDernEvaluationConnaissance: string, niveauRisqueInvestisseur: string): string;
        /**
         * Permet de recuperer le libelle de l'alerte compte en déshérence
         * Le résultat attendu doit être une string ou null
         *
         * @param profilClient {Modeles.Profil.ISyntheseClientProfil}
         * @return libelleCompteEnDesherence{string}
         */
        getLibelleCompteEnDesherence(profilClient: Modeles.Profil.ISyntheseClientProfil): string;
        /**
         * Permet de recuperer le libelle Cotation CE d'une personne physique et morale
         * @param codeCotation{string} code: SX3S.CODAQL et SX3T.CODAQL
         * @param libelleCoationCE {string}
         */
        afficherLibelleCotationCE(codeCotation: string): string;
        /**
         * Permet de recuperer le code Cotation CE d'une personne physique et morale
         * @param codeCoationCE{string} code: SX3S.CODAQL et SX3T.CODAQL
         * @param codeCoationCE{string}
         */
        recupererCodeCotationCE(codeCotation: string): string;
        /**
         * Appel la méthode de suppression via service rest (passage de informationService à supprimer);
         * @param informationService: Modeles.AlertesMessagesService.IDetailInformationService[]
         */
        supprimerMessageService(informationService: Modeles.AlertesMessagesService.IDetailInformationService): ng.IPromise<{}>;
        /**
         * Appel la méthode d'ajout message via service rest
         * @param modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService
         */
        creerMessageService(modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService): ng.IPromise<{}>;
        /**
         * Appel la méthode modifier message via service rest
         * @param modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService
         */
        modifierMessageService(modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService): ng.IPromise<{}>;
        /**
         * permet de recuperer les donnees de la ressource informationService
         * si {donneesCommerciales.codeExisteInfoInterneService === "1"}
         */
        recupererDonneesMessageService(): ng.IPromise<void>;
        /**
         * Permet d'afficher la liste des messages de la ressources
         * informationService dans le tableau du detail risques et alertes
         * @param informationService {Modeles.AlertesMessagesService.IInformationService}
         * @param listeMessageDetail {any[]}
         */
        getListeMessagesServicesDetail(): Modeles.AlertesMessagesService.ITableauMessage[];
        /**
         * permet de recuperer le libelle code composition à partir de la table deloc CODIMC
         * parametre d'entree modeCompositionET
         */
        recuperModeComposition(): void;
        /**
         * permet de recuperer le libelle code provenance à partir de la table deloc CIDNCV
         * parametre d'entree codeProvenanceInformation
         */
        getCodeProvenanceInformation(): void;
        /**
         * permet de recuperer le libelle code type usage à partir de la table deloc CODIUS
         * parametre d'entree codeTypeUsageET
         */
        recuperCodeUsage(): void;
        /**
         * Permet de formater un objet Alerte pour l'afficher dans les risques et alertes
         * @param libelle
         * @param classe
         */
        formaterAlerte(libelle: string, classe?: string): Modeles.AlertesMessagesService.IAlerte;
        /**
         * recuperation de la table délocalisée Modeles.DonneesDeloc.ISU1P[]
         * vérification éligibilité SU1P
         * @return eligibleSU1P<boolean> : un booleen pour savoir si le QCF peut peut être lancé ou non
         */
        verifierPresenceQCF(): ng.IPromise<boolean>;
    }
}

declare module syntheseClient.Service {
    class SyntheseServicesService {
        private syntheseProduitService;
        private syntheseInitialisationService;
        private syntheseClientDonneesDelocService;
        private syntheseClientUtilitaireService;
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        constructor(syntheseProduitService: Service.SyntheseProduitService, syntheseInitialisationService: Service.SyntheseInitialisationService, syntheseClientDonneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private _isInit;
        libellesCarteService: any[];
        libellesN831Service: any[];
        libelleMotifOpposition: any[];
        libelleOptionSecure: any[];
        libelleCodeSituationContrat: any[];
        libelleCodeMotifResiliation: any[];
        private _syntheseClientServices;
        init(): ng.IPromise<string>;
        getNomEntiteTitulaireService(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaireService: Modeles.Services.ISyntheseClientEntiteTitulaireService[]): string;
        getEntiteTitulaireService(listeSyntheseClientEntiteTitulaireService: Array<Modeles.Services.ISyntheseClientEntiteTitulaireService>, numeroEntite: number): Modeles.Services.ISyntheseClientEntiteTitulaireService;
        getTotalServicesParEntite(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaireService: Modeles.Services.ISyntheseClientEntiteTitulaireService[], filtresCategories?: string[]): number;
        getTotalServicesActifs(syntheseClientServices: Modeles.Services.IListeSyntheseClientCodeEtatService, filtres?: string[]): number[];
        getTotalServicesSoldes(syntheseClientServices: Modeles.Services.IListeSyntheseClientCodeEtatService, filtresCategories?: string[]): number[];
        genererTableauEntitesProduitsServices(syntheseClientServices: Modeles.Services.IListeSyntheseClientCodeEtatService, syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits): Array<Modeles.Services.ITableauProduitsServices>;
        recupererLigne3SX5L(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile): string;
        recupererLigne5SX5L(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile): string;
        recupererLigne4SX50(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile): string;
        /**
         * Generation de la ligne1, designation des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @return {string} libelle indiquant le type ie service ou moyens de paiements
         */
        recupererLibelleLigne1(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile): string;
        /**
         * Generation de la ligne2 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererLibelleLigne2(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        /**
         * Generation de la ligne3 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererInfosLigne3(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        /**
         * Generation de la ligne3 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererLibelleLigne3(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        /**
         * Generation de la ligne4 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererInfosLigne4(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        /**
         * Generation de la ligne4 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererLibelleLigne4(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        /**
         * Generation de la ligne 5 des services et moyens de paiements
         * @param objetService {Modeles.Services.ISyntheseClientServicesInfoTuile}
         * @param libelle {string}
         * @return {string} designation indiquant le libelle de la ligne à afficher
         */
        recupererLibelleLigne5(objetService: Modeles.Services.ISyntheseClientServicesInfoTuile, nomService?: string): string;
        genererTableauServices(numeroEntite: number, servicePourEntite: Modeles.Services.ISyntheseClientEntiteTitulaireService, codeEtat: string): any[];
        getNoteBaleEntite(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaire: syntheseClient.Modeles.Profil.ISyntheseClientEntiteTitulaire[]): string;
        getCotationBancaireEntite(numeroEntiteTitulaire: number, listeSyntheseClientEntiteTitulaire: syntheseClient.Modeles.Profil.ISyntheseClientEntiteTitulaire[]): string;
        /**
         * Fonction permettant de formater le moyen de pay. SX5L
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoCartes} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoCartes} l'objet formaté
         */
        listeSyntheseServiceInfoCartes(objetOriginal: Modeles.Services.ISyntheseServiceInfoCartes): Modeles.DetailServices.ISyntheseServiceInfoCartes;
        /**
         * Fonction permettant de formater le moyen de pay. Sx50
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoChequiers} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoChequiers} l'objet formaté
         */
        listeSyntheseServiceInfoChequiers(objetOriginal: Modeles.Services.ISyntheseServiceInfoChequiers): Modeles.DetailServices.ISyntheseServiceInfoChequiers;
        /**
         * Fonction permettant de formater le produit
         * @param objetOriginal {odeles.Services.ISyntheseServiceCartadoDemandeur} Le produit à formater
         * @return objet vide
         */
        listeSyntheseServiceCartadoDemandeur(objetOriginal: Modeles.Services.ISyntheseServiceCartadoDemandeur): {};
        /**
         * Fonction permettant de formater le moyen de pay. SX7T
         * @param objetOriginal {Modeles.Services.ISyntheseServiceCarteAffaire} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceCarteAffaire} l'objet formaté
         */
        listeSyntheseServiceCarteAffaire(objetOriginal: Modeles.Services.ISyntheseServiceCarteAffaire): Modeles.DetailServices.ISyntheseServiceCarteAffaire;
        /**
         * Fonction permettant de formater le service SX4B
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoOptimisTresorerie} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoOptimisTresorerie} l'objet formaté
         */
        listeSyntheseServiceInfoOptimisTresorerie(objetOriginal: Modeles.Services.ISyntheseServiceInfoOptimisTresorerie): Modeles.DetailServices.ISyntheseServiceInfoOptimisTresorerie;
        /**
         * Fonction permettant de formater le service SX5Q
         * @param objetOriginal {Modeles.Services.ISyntheseServiceAbonLSE} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceAbonLSE} l'objet formaté
         */
        listeSyntheseServiceAbonLSE(objetOriginal: Modeles.Services.ISyntheseServiceAbonLSE): Modeles.DetailServices.ISyntheseServiceAbonLSE;
        /**
         * Fonction permettant de formater le service SX5V
         * @param objetOriginal {Modeles.Services.ISyntheseServiceAbonnServeurBancaire} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceAbonnServeurBancaire} l'objet formaté
         */
        listeSyntheseServiceAbonnServeurBancaire(objetOriginal: Modeles.Services.ISyntheseServiceAbonnServeurBancaire): Modeles.DetailServices.ISyntheseServiceAbonnServeurBancaire;
        /**
         * Fonction permettant de formater le service SX5W
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoPhoneEcureuil} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoPhoneEcureuil} l'objet formaté
         */
        listeSyntheseServiceInfoPhoneEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoPhoneEcureuil): Modeles.DetailServices.ISyntheseServiceInfoPhoneEcureuil;
        /**
         * Fonction permettant de formater le service SX5X
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoDirectEcureuil} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoDirectEcureuil} l'objet formaté
         */
        listeSyntheseServiceInfoDirectEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoDirectEcureuil): Modeles.DetailServices.ISyntheseServiceInfoDirectEcureuil;
        /**
         * Fonction permettant de formater le service SX5Y
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoTelecureuil} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoTelecureuil} l'objet formaté
         */
        listeSyntheseServiceInfoTelecureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoTelecureuil): Modeles.DetailServices.ISyntheseServiceInfoTelecureuil;
        /**
         * Fonction permettant de formater le service SX5Y
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoNetecureuil} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoNetecureuil} l'objet formaté
         */
        listeSyntheseServiceInfoNetecureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoNetecureuil): Modeles.DetailServices.ISyntheseServiceInfoNetecureuil;
        /**
         * Fonction permettant de formater le service SX51
         * @param objetOriginal {Modeles.Services.ISyntheseServiceSecureExpressCCE} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceSecureExpressCCE} l'objet formaté
         */
        listeSyntheseServiceSecureExpressCCE(objetOriginal: Modeles.Services.ISyntheseServiceSecureExpressCCE): Modeles.DetailServices.ISyntheseServiceSecureExpressCCE;
        /**
         * Fonction permettant de formater le service SX52
         * @param objetOriginal {Modeles.Services.ISyntheseServiceDiamantCCE} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceDiamantCCE} l'objet formaté
         */
        listeSyntheseServiceDiamantCCE(objetOriginal: Modeles.Services.ISyntheseServiceDiamantCCE): Modeles.DetailServices.ISyntheseServiceDiamantCCE;
        /**
         * Fonction permettant de formater le service SX53
         * @param objetOriginal {Modeles.Services.ISyntheseServiceEquipMonetique} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceEquipMonetique} l'objet formaté
         */
        listeSyntheseServiceEquipMonetique(objetOriginal: Modeles.Services.ISyntheseServiceEquipMonetique): Modeles.DetailServices.ISyntheseServiceEquipMonetique;
        /**
         * Fonction permettant de formater le service SX5B
         * @param objetOriginal {Modeles.Services.ISyntheseServiceNvellesAssurParaBancaire} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceNvellesAssurParaBancaire} l'objet formaté
         */
        listeSyntheseServiceNvellesAssurParaBancaire(objetOriginal: Modeles.Services.ISyntheseServiceNvellesAssurParaBancaire): Modeles.DetailServices.ISyntheseServiceNvellesAssurParaBancaire;
        /**
         * Fonction permettant de formater le service SX5N
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoAssProfessionnelsB001} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoAssProfessionnelsB001} l'objet formaté
         */
        listeSyntheseServiceInfoAssProfessionnelsB001(objetOriginal: Modeles.Services.ISyntheseServiceInfoAssProfessionnelsB001): Modeles.DetailServices.ISyntheseServiceInfoAssProfessionnelsB001;
        /**
         * Fonction permettant de formater le service SX50
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoAssProfessionnelsB002} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoAssProfessionnelsB002} l'objet formaté
         */
        listeSyntheseServiceASSProB002(objetOriginal: Modeles.Services.ISyntheseServiceASSProB002): Modeles.DetailServices.ISyntheseServiceASSProB002;
        /**
         * Fonction permettant de formater le service SX6O
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoBorneLibreService} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoBorneLibreService} l'objet formaté
         */
        listeSyntheseServiceInfoBorneLibreService(objetOriginal: Modeles.Services.ISyntheseServiceInfoBorneLibreService): Modeles.DetailServices.ISyntheseServiceInfoBorneLibreService;
        /**
         * Fonction permettant de formater le service SX58
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoSurCIDAILLY} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoSurCIDAILLY} l'objet formaté
         */
        listeSyntheseServiceInfoSurCIDAILLY(objetOriginal: Modeles.Services.ISyntheseServiceInfoSurCIDAILLY): Modeles.DetailServices.ISyntheseServiceInfoSurCIDAILLY;
        /**
         * Fonction permettant de formater le service SX61
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoAlerteEcureuil} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoAlerteEcureuil} l'objet formaté
         */
        listeSyntheseServiceInfoAlerteEcureuil(objetOriginal: Modeles.Services.ISyntheseServiceInfoAlerteEcureuil): Modeles.DetailServices.ISyntheseServiceInfoAlerteEcureuil;
        /**
         * Fonction permettant de formater le service SX63
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoDEIMobile} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoDEIMobile} l'objet formaté
         */
        listeSyntheseServiceInfoDEIMobile(objetOriginal: Modeles.Services.ISyntheseServiceInfoDEIMobile): Modeles.DetailServices.ISyntheseServiceInfoDEIMobile;
        /**
         * Fonction permettant de formater le service SX7Q
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoDEIPersonnesProtegees} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoDEIPersonnesProtegees} l'objet formaté
         */
        listeSyntheseServiceInfoDEIPersonnesProtegees(objetOriginal: Modeles.Services.ISyntheseServiceInfoDEIPersonnesProtegees): Modeles.DetailServices.ISyntheseServiceInfoDEIPersonnesProtegees;
        /**
         * Fonction permettant de formater le service SX7W
         * @param objetOriginal {Modeles.Services.ISyntheseServiceCertificat} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceCertificat} l'objet formaté
         */
        listeSyntheseServiceCertificat(objetOriginal: Modeles.Services.ISyntheseServiceCertificat): Modeles.DetailServices.ISyntheseServiceCertificat;
        /**
         * Fonction permettant de formater le service SX8A
         * @param objetOriginal {Modeles.Services.ISyntheseServiceFluxExtBDRsrvPCL} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceFluxExtBDRsrvPCL} l'objet formaté
         */
        listeSyntheseServiceFluxExtBDRsrvPCL(objetOriginal: Modeles.Services.ISyntheseServiceFluxExtBDRsrvPCL): Modeles.DetailServices.ISyntheseServiceFluxExtBDRsrvPCL;
        /**
         * Fonction permettant de formater le service SX8B
         * @param objetOriginal {Modeles.Services.ISyntheseServiceFluxExtBDRsrvPCL} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceFluxExtBDRsrvPCL} l'objet formaté
         */
        listeSyntheseServiceFluxExtBDRsrvPVGA(objetOriginal: Modeles.Services.ISyntheseServiceFluxExtBDRsrvPVGA): Modeles.DetailServices.ISyntheseServiceFluxExtBDRsrvPVGA;
        /**
         * Fonction permettant de formater le service SX7X
         * @param objetOriginal {Modeles.Services.ISyntheseServiceFluxExtBDRsrvPCL} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceFluxExtBDRsrvPCL} l'objet formaté
         */
        listeSyntheseServiceCashManagement(objetOriginal: Modeles.Services.ISyntheseServiceCashManagement): Modeles.DetailServices.ISyntheseServiceCashManagement;
        /**
         * Fonction permettant de formater le service SX7Z
         * @param objetOriginal {Modeles.Services.ISyntheseServiceAlerteBDR} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceAlerteBDR} l'objet formaté
         */
        listeSyntheseServiceAlerteBDR(objetOriginal: Modeles.Services.ISyntheseServiceAlerteBDR): Modeles.DetailServices.ISyntheseServiceAlerteBDR;
        /**
         * Fonction permettant de formater le service SX7Z
         * @param objetOriginal {Modeles.Services.ISyntheseServiceAlerteBDR} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceAlerteBDR} l'objet formaté
         */
        listeSyntheseServiceRMPNumerise(objetOriginal: Modeles.Services.ISyntheseServiceRMPNumerise): Modeles.DetailServices.ISyntheseServiceRMPNumerise;
        /**
         * Fonction permettant de formater le service SX8K
         * @param objetOriginal {Modeles.Services.ISyntheseServiceSOLEnrolement} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceSOLEnrolement} l'objet formaté
         */
        listeSyntheseServiceSOLEnrolement(objetOriginal: Modeles.Services.ISyntheseServiceSOLEnrolement): Modeles.DetailServices.ISyntheseServiceSOLEnrolement;
        /**
         * Fonction permettant de formater le service SX8L
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInternetSP} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInternetSP} l'objet formaté
         */
        listeSyntheseServiceInternetSP(objetOriginal: Modeles.Services.ISyntheseServiceInternetSP): Modeles.DetailServices.ISyntheseServiceInternetSP;
        /**
         * Fonction permettant de formater le service sx8W
         * @param objetOriginal {Modeles.Services.ISyntheseServiceNumAnnuel} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceNumAnnuel} l'objet formaté
         */
        listeSyntheseServiceNumAnnuel(objetOriginal: Modeles.Services.ISyntheseServiceNumAnnuel): Modeles.DetailServices.ISyntheseServiceNumAnnuel;
        /**
         * Fonction permettant de formater le service SX8V
         * @param objetOriginal {Modeles.Services.ISyntheseServiceCentralisationRecette} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceCentralisationRecette} l'objet formaté
         */
        listeSyntheseServiceCentralisationRecette(objetOriginal: Modeles.Services.ISyntheseServiceCentralisationRecette): Modeles.DetailServices.ISyntheseServiceCentralisationRecette;
        /**
         * Fonction permettant de formater le service SX73
         * @param objetOriginal {Modeles.Services.ISyntheseServiceCoffreFortNum} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceCoffreFortNum} l'objet formaté
         */
        listeSyntheseServiceCoffreFortNum(objetOriginal: Modeles.Services.ISyntheseServiceCoffreFortNum): Modeles.DetailServices.ISyntheseServiceCoffreFortNum;
        /**
         * Fonction permettant de formater le service SX76
         * @param objetOriginal {Modeles.Services.ISyntheseServiceSMONEY} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceSMONEY} l'objet formaté
         */
        listeSyntheseServiceSMONEY(objetOriginal: Modeles.Services.ISyntheseServiceSMONEY): Modeles.DetailServices.ISyntheseServiceSMONEY;
        /**
         * Fonction permettant de formater le service SX89
         * @param objetOriginal {Modeles.Services.ISyntheseServiceVME} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceVME} l'objet formaté
         */
        listeSyntheseServiceVME(objetOriginal: Modeles.Services.ISyntheseServiceVME): Modeles.DetailServices.ISyntheseServiceVME;
        /**
         * Fonction permettant de formater le service SX90
         * @param objetOriginal {Modeles.Services.ISyntheseServiceSmoneyP} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceSmoneyP} l'objet formaté
         */
        listeSyntheseServiceSmoneyP(objetOriginal: Modeles.Services.ISyntheseServiceSmoneyP): Modeles.DetailServices.ISyntheseServiceSmoneyP;
        /**
         * Fonction permettant de formater le service SX88
         * @param objetOriginal {Modeles.Services.ISyntheseServiceUNIK} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceUNIK} l'objet formaté
         */
        listeSyntheseServiceUNIK(objetOriginal: Modeles.Services.ISyntheseServiceUNIK): Modeles.DetailServices.ISyntheseServiceUNIK;
        /**
         * Fonction permettant de formater le service SX5S
         * @param objetOriginal {Modeles.Services.ISyntheseServiceInfoOptimTresorerieCCE} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceInfoOptimTresorerieCCE} l'objet formaté
         */
        listeSyntheseServiceInfoOptimTresorerieCCE(objetOriginal: Modeles.Services.ISyntheseServiceInfoOptimTresorerieCCE): Modeles.DetailServices.ISyntheseServiceInfoOptimTresorerieCCE;
        /**
         * Fonction permettant de formater le service SX92
         * @param objetOriginal {Modeles.Services.ISyntheseServiceSepamail} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceSepamail} l'objet formaté
         */
        listeSyntheseServiceSepamail(objetOriginal: Modeles.Services.ISyntheseServiceSepamail): Modeles.DetailServices.ISyntheseServiceSepamail;
        /**
         * Fonction permettant de formater le service SX91
         * @param objetOriginal {Modeles.Services.ISyntheseServiceLogicash} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceLogicash} l'objet formaté
         */
        listeSyntheseServiceLogicash(objetOriginal: Modeles.Services.ISyntheseServiceLogicash): Modeles.DetailServices.ISyntheseServiceLogicash;
        /**
         * Fonction permettant de formater le service SX9F
         * @param objetOriginal {Modeles.Services.ISyntheseServiceDomilis} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServiceDomilis} l'objet formaté
         */
        listeSyntheseServiceDomilis(objetOriginal: Modeles.Services.ISyntheseServiceDomilis): Modeles.DetailServices.ISyntheseServiceDomilis;
        /**
         * Fonction permettant de formater le service SX9F
         * @param objetOriginal {Modeles.Services.ISyntheseServicePaieMobile} L'objet à formater
         * @return {Modeles.DetailServices.ISyntheseServicePaieMobile} l'objet formaté
         */
        listeSyntheseServicePaieMobile(objetOriginal: Modeles.Services.ISyntheseServicePaieMobile): Modeles.DetailServices.ISyntheseServicePaieMobile;
        /**
         * permet de formater les services
         */
        private formaterService;
        /**
         * generation de la liste des services pour une entité titulaire sélectionnée
         * @param {string} typeProduit le code état pour un produit actif ou soldé
         * @param {number} numeroEntite le numero d'entité titulaire à sélectionner
         */
        genererServicesPourEntite(typeProduit: string, numeroEntite: number): {
            listeServices: any[];
            nomEntiteService: string;
        };
    }
}

declare module syntheseClient.Service {
    class SyntheseClientSuiviService {
        private syntheseClientUtilitaireService;
        static $inject: string[];
        constructor(syntheseClientUtilitaireService: syntheseClient.Service.SyntheseClientUtilitaireService);
        libelleAgenceRattachementLong: string;
        /**
         * Permet de formater l'affichage du libellé Suivi par
         * Le résultat doit être sous la forme suivi par : Mme xxx xxx
         * @param libelleSuiviPar:string
         */
        afficherNomAgentCommercial(codeCiviliteSuiviPar: string, nomAgentTraitement: string, statut: string): string;
        /**
         * Permet de formater l'affichage de l'agence commercial
         * Le résultat doit être sous la forme : AGENCE AIX...
         * @param caracteristiqueAgence {ICaracteristiqueAgence}
         */
        afficherAgenceDeRattachement(donneeCommune: Modeles.Commercial.IDonneeCommune, statut: string): string;
        recupererObjetSegementation(listeSyntheseClientSegRevise: Array<Modeles.Commercial.ISyntheseClientSegRevise>, codeSegmRevu: string): Modeles.Commercial.ISyntheseClientSegRevise;
        recupererSegmentAu01Janv(listeSeg0101: Array<Modeles.Commercial.ISyntheseClientSegAu1erJanv>, codeSegm: string): Modeles.Commercial.ISyntheseClientSegAu1erJanv;
        /**
         * Permet de formater l'affichage du code marché en vigeur
         * Le résultat doit être sous la forme code marche : MN201201 libelle marche
         * @param libelleCodeSegmentationr:string -> syntheseClientSegRevise
         */
        afficherCodeMarcheEnVigueur(segRevise: Modeles.Commercial.ISyntheseClientSegRevise, statut: string): string;
        recupererDateSegmentationEnVigueur(segRevise: Modeles.Commercial.ISyntheseClientSegRevise): string;
        /**
         * Permet de formater l'affichage du code marché calculé
         * Le résultat doit être sous la forme code marche : MN201201 libelle marche
         * @param libelleCodeMarcheCalcule:string
         */
        afficherCodeMarcheCalcule(codeMarcheCalcule: Array<Modeles.Commercial.IInfosSegmentationMarcheReponse>): string;
        recupererDateSegmentationCalcule(codeMarcheCalcule: Array<Modeles.Commercial.IInfosSegmentationMarcheReponse>): string;
        /**
         * Permet de formater l'affichage du mot societaire
         * Le résultat doit être sous la forme code marche :societaire
         * @param libelleSocietaire:string
         */
        afficherLibelleSocietaire(indicSocietaire: string): string;
        afficherLibelleCourtSle(syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient): string;
        /**
         * Permet de formater l'affichage du libelle du suivi avec la table DV20
         * Le résultat doit être sous la forme exp: suivi par nom prenom
         * @param libelleCalculeCourtEds: string
         */
        afficherLibelleCalculeCourtEds(libelleCalculeCourtEds: string): string;
        recupererLibelleGerePar(listeSyntheseClientGP: Array<Modeles.Commercial.ISyntheseClientGP>, tableDV20: Array<syntheseClient.Modeles.DonneesDeloc.IDV20>, statut: string): string;
        recupererLibelleLongGP(listeSyntheseClientGP: Array<Modeles.Commercial.ISyntheseClientGP>, tableDV20: Array<syntheseClient.Modeles.DonneesDeloc.IDV20>): string;
        recupererLibelleDetailGP(listeSyntheseClientGP: Array<Modeles.Commercial.ISyntheseClientGP>, tableDV20: Array<syntheseClient.Modeles.DonneesDeloc.IDV20>): string;
        /**
         * Permet de formater l'affichage du libelle du code segmentation
         * Le résultat doit être sous la forme code marche :seg:De date:01/01/2016
         * @param libelleSegmentation:string
         */
        afficherLibelleCodeSegmentation(segRevise: Modeles.Commercial.ISyntheseClientSegRevise, segRevise0101: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        /**
         * Ce libellé n'est pas afficher en dur sur l'ecran,mais il est à afficher lorsque
         * la souris passe au dessus du champ seg-RA3: resultat fonction afficherLibelleCodeSegmentation
         * @param libelleSegmentation:string
         */
        afficherLibelleSegment(segRevise: Modeles.Commercial.ISyntheseClientSegRevise, segRevise0101: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        /**
         * Permet de formater l'affichage de l'univers à partir du code segmentation
         * Le résultat doit être sous la forme code marche : univers:bepca
         * @param libelleUnivers:string
         */
        afficherLibelleUnivers(segReviseUnivers: Modeles.Commercial.ISyntheseClientSegRevise, segReviseUniversJanv: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        /**
         * Permet de formater l'affichage de la date de l'univers à partir du code segmentation
         * Le résultat doit être sous la forme code marche : date:xx/xx/xxxx
         * @param libelleDate:string
         */
        afficherLibelleDateUnivers(segRevise: Modeles.Commercial.ISyntheseClientSegRevise, segRevise0101: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        afficherCodeSegmentAu1erJanv(segRevise0101: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        afficherLibelleSegmentAu1erJanv(segRevise0101: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        afficherLibelleUniversAu1erJanv(segReviseUniversJanv: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        afficherDateUniversAu1erJanv(segReviseUniversJanv: Modeles.Commercial.ISyntheseClientSegAu1erJanv): string;
        afficherDateEnregistrementRV(donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales): string;
        afficherDateArreteDossierSuccession(donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales): string;
        afficherDateDecesPresume(profilClient: Modeles.Profil.ISyntheseClientProfil): string;
        afficherCodeCanalContact(profilClient: Modeles.Profil.ISyntheseClientProfil, tableD72C: Array<Modeles.DonneesDeloc.ID72C>): string;
        afficherCodeMediaContact(profilClient: Modeles.Profil.ISyntheseClientProfil, tableD72D: Array<Modeles.DonneesDeloc.ID72D>): string;
        afficherCodeMotifContact(profilClient: Modeles.Profil.ISyntheseClientProfil, tableD72E: Array<Modeles.DonneesDeloc.ID72E>): string;
        afficherCodeSensContact(profilClient: Modeles.Profil.ISyntheseClientProfil): string;
        afficherDateDernierContact(profilClient: Modeles.Profil.ISyntheseClientProfil): string;
        afficherOpportuniteParRelation(donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales): number;
        /**
         * Permet de recuperer le libelle e-document activé ou non activé
         * Le résultat attendu doit être une string ou null
         *
         * @param profilClient {Modeles.Profil.ISyntheseClientProfil}
         * @return indicateurDematClient{string}
         */
        afficherDiversCaracteristique(syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil): string;
    }
}

declare module syntheseClient.Service {
    interface ITools {
        MsgBox: (header: string, msg: string, icon?: string, size?: number) => any;
        extractErreur: (data: any) => any;
        DisplayWarning: (mes: string) => void;
        DisplayInfo: (mes: string) => void;
        log: (message: string) => void;
    }
    class SyntheseToolsService implements ITools {
        private modalService;
        private mwNotificationService;
        private serviceAgentExtended;
        private urlPortailMyWay;
        static $inject: string[];
        flagLogActive: boolean;
        constructor(modalService: any, mwNotificationService: MyWay.UI.IMwNotificationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, urlPortailMyWay: string);
        MsgBox(header: string, msg: string, icon?: string, size?: any): any;
        DisplayInfo(mes: string): void;
        DisplayWarning(mes: string): void;
        Confirmation(question: string): any;
        extractErreur(data: any): string;
        log(message: string): void;
        /**
         * permet de fermer la synthese client
         */
        fermerSyntheseClient(): void;
    }
}

declare module syntheseClient.Service {
    class SyntheseClientUtilitaireService {
        private syntheseClientConstantes;
        static $inject: string[];
        constructor(syntheseClientConstantes: syntheseClient.Constantes.Constantes);
        transformerAccents(value: string): string;
        /**
         * Retourne la chaine tronqué pour limiter la taille du libellé
         * @param {string} chaine d'origine
         * @param {number} le nombre de caractères maximum attendues
         * @return {string} la chaine tronquée
         */
        tronquerChaine(chaineATronquer: string, longueurMaximal: number): string;
        /**
         * Permet de formater l'affichage d'un numero de telephone
         * Le résultat doit être sous la forme xx xx xx xx xx
         * @param {string} le numéro de téléphone
         * @return {string} le numéro formaté sur 10 caractères avec des espaces
         */
        formaterTelephone(numeroTelephone: string): string;
        /**
         * permet d'afficher le libelle du code civilite
         * le resultat doit etre Mme ou Melle ou M
         * @param {string} codeCivilite
         * @return {string} libellé associé à la civilité
         */
        afficherCodeCivilite(genre: string): string;
        /**
         * permet d'afficher le genre associé au code civilite
         * le resultat doit etre F ou M
         * @param {string} le code Civilité
         * @return {string} le genre lié à la civilité
         */
        afficherCodeSexeCivilite(code: string): string;
        /**
         * permet d'afficher le format de la date
         * le resultat doit etre JJ/MM/AAAA
         * @param {string} formatDate
         * @return {string} la date au format JJ/MM/AAAA
         */
        formaterDate(date: string): string;
        /**
         * permet d'afficher l'heure
         * @param {string} formatHeure
         * @return {string} la date au format hh:mm:ss
         */
        formaterHeure(heure: string): string;
        /**
         * Permet de retourner le statut "pp" ou "pm" (personne physique ou personne morale)
         * @param codePersonnaliteJuridique:string ("1" pour particulier, "2" pour professionnel)
         * @return {string} le code pp ou pm
         */
        getStatutPersonne(codePersonnaliteJuridique: string): string;
        /**
         * Permet de formater un nombre au format d'un solde compte
         * @param montant {number}
         * @return {string} le solde précédé d'un +/- en fonction du solde du Produit
         */
        formaterMontant(montant: number, codeDevise: string): string;
        /**
         * Correction du sigle pour les codes devises USD et CAD dans l'entête des listes et dans la tuile v18.01
         * Si le montant est un soldeCompteDeviseTenueCpte afficher le sigle par rapport au codeDevise
         * @param montant  {number}
         * @param codeDevise {string}
         */
        formaterMontantDeviseCAD(montant: number, codeDevise: string): string;
        /**
         * Permet de formater un nombre au format d'un montant sans notion de devise
         * @param montant {number}
         * @return {string} le montant formaté
         */
        formaterMontantSimple(montant: number): string;
        /**
         * Permet de formater un nombre au format d'un montant en kilo (tronqué après la virgule et suffixé par un 'k')
         * @param montant {number} le montant
         * @param devise {string} la devise ('EUR' par défaut)
         * @return {string} le montant formaté
         *
         */
        formaterMontantKilo(montant: number, devise?: string): string;
        /**
         * Permet de de recurer un numero de compte a partir de l objet critere fourni par la recherche
         * @param {MyWay.Model.Client} critere, objet retourné par la rechercher personne
         * @return {string} le numero de compte
         */
        recupererNumeroDeCompte(critere: MyWay.Model.Client): string;
        /**
         * fonction de verification de la taille du reference externe de l'EDS interne
         * de l'agence de rattachement d'une entite titulaire donnée
         * @param {number} idEDs
         * @return {string} un identifiant à 6 chiffres
         */
        getIdentifiant(idEDS: number): string;
        /**
         * Fonction permettant de formater un pourcentage
         * @param pourcentage {number} Le nombre à formater
         * @param diviseur {number} Le nombre par lequel le pourcentage va être divisé
         * @return {string} le pourcentage formaté et suivit de '%'
         */
        formaterPourcentage(pourcentage: number, diviseur: number): string;
        /**
         * Fonction permettant de formater le numero de carte d'un moyen
         * de paiement
         * @param numeroCarte {string} le numero de carte
         * @return {string} le numero formaté du numero de carte
         */
        formaterNumeroCarte(numeroCarte: string): string;
        /**
         * Fonction permettant de formater le numero de compte
         * d'un produit ou d'un service ou d'un moyen de paiement
         * @param numeroCompte {string} le numero de compte
         * @return {string} numero de compte formate
         */
        formaterNumeroCompte(numeroCompte: string): string;
        /**
         * Fonction permettant de formater l'affichage du rice prélevement
         * d'un produit ou d'un service ou d'un moyen de paiement
         * @param numeroCompte {string} le numero de compte
         * @param codeGuichet {string} le code guichet
         * @param codeEtab {string} le code tablissement
         * @return {string} rice formate
         */
        formaterRice(codeEtab: string, codeGuichet: string, numeroCompte: string): string;
        /**
         * Permet de formater un nombre au format sans le diviser par 100
         * @param montant {number}
         * @return {string} le montant précédé d'un +/-
         */
        formaterMontantEcheance(montant: number, codeDevise: string): string;
    }
}

declare module syntheseClient {
    class AccesSegmentationControleur {
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService);
        annuler(): void;
    }
}

declare module syntheseClient {
    class AjoutModificationMessagesServiceControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        private syntheseClientRisquesAlertesService;
        private syntheseInitialisationService;
        private syntheseClientDonneesService;
        private syntheseClientUtilitaireService;
        private donneesDelocService;
        private syntheseClientProfil;
        private syntheseImpressionService;
        tableauEntitesTitulaire: Modeles.AlertesMessagesService.IEntiteTitulaire[];
        private entiteSelectionne;
        informationService: Modeles.AlertesMessagesService.IDetailInformationService[];
        dateDebutApplication: Date;
        dateFinApplication: Date;
        designationAgent: string;
        indicateurPropagationCreation: string;
        indicateurPropagationModification: string;
        codeUsageEntiteTitulaire: string[];
        modeCompositionEntiteTitulaire: string[];
        modeleMessage: Modeles.AlertesMessagesService.IModeleConteneurMessageService;
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, donneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil, syntheseImpressionService: syntheseClient.Service.ISyntheseImpressionService);
        init(): void;
        ajouterMessage(): void;
        annuler(): void;
        modifierMessage(): void;
        tableauSimple: MyWay.UI.ImwTableOptions;
        tableauColonneOptionsIdentifiantEntiteTitulaire: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNomEntiteTitulaire: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsModeComposition: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsModeUsage: MyWay.UI.ImwTableColumnOptions;
        /** Implémentation de la méthode de l'interface MyWay.UI.ISelectionChangeHandler
         *  Permet de selectionner l'entité titulaire après avoir cliqué sur une entrée du tableau des entités titulaires
         */
        onSelectionChange(selectedObject: Modeles.AlertesMessagesService.ITableauEntitesTitulaires): void;
        getDonneesEntiteTitulaire(): ng.IPromise<void>;
        getTableauEntitesTitulaires(): Modeles.AlertesMessagesService.ITableauEntitesTitulaires[];
        /**
         * permet de recuperer le libelle codeUsageEntiteTitulaire à partir de la table deloc CODIUS
         * parametre d'entree codeUsageEntiteTitulaire
         */
        recuperCodeUsage(): void;
        /**
         * permet de recuperer le libelle modeCompositionEntiteTitulaire à partir de la table deloc CODIMC
         * parametre d'entree modeCompositionEntiteTitulaire
         */
        recuperModeComposition(): void;
        estEnModification: boolean;
        estEnCreation: string;
    }
}

declare module syntheseClient {
    class ChoixTypeImpressionControleur {
        private $modalInstance;
        typeDocument: string;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance);
        valider(): void;
        annuler(): void;
    }
}

declare module syntheseClient {
    class PopinNoteBaleIIControleur {
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService);
        annuler(): void;
    }
}

declare module syntheseClient {
    class GestionMessagesServiceControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        private modalService;
        private syntheseClientRisquesAlertesService;
        private syntheseInitialisationService;
        private syntheseClientDonneesDelocService;
        private syntheseClientDonneesService;
        private $rootScope;
        private mwNotificationService;
        private _messageSelectionne;
        codeUsageEntiteTitulaire: string[];
        modeCompositionEntiteTitulaire: string[];
        provenance: string[];
        static $inject: string[];
        constructor($scope: ng.IScope, $modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService, modalService: MyWay.UI.IModalService, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientDonneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientDonneesService: Service.SyntheseClientDonneesService, $rootScope: ng.IRootScopeService, mwNotificationService: MyWay.UI.IMwNotificationService);
        /**
         * permet de recuperer le libelle code provenance à partir de la table deloc CIDNCV
         * parametre d'entree codeProvenanceInformation
         */
        getCodeProvenanceInformation(): void;
        messageSelectionne: Modeles.AlertesMessagesService.IDetailInformationService[];
        tableauSimple: MyWay.UI.ImwTableOptions;
        tableauColonneOptionsDateCreation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDateFin: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsLibelleMessage: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCreePar: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsProvenance: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(informationService?: Modeles.AlertesMessagesService.IDetailInformationService[]): void;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        annuler(): void;
        /**
         * Permet d'appeler la fonction lors du click sur le bouton supprimer message,
         * d'ouvrir la popin de confirmation de suppression du message selectionné
         */
        ouvrirPopinSuppressionMessages(): void;
        /**
         * Permet d'appeler la fonction lors du click sur le bouton ajouter message,
         * d'ouvrir la popin de création de message de service
         */
        ouvrirPopinAjoutMessageService(): void;
        /**
         * Permet d'appeler la fonction lors du click sur le bouton modifier message,
         * d'ouvrir la popin de modification de message de service
         */
        ouvrirPopinModifierMessageService(): void;
    }
}

declare module syntheseClient {
    class SuppressionMessagesServiceControleur {
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService;
        listeMessageDetail: Modeles.AlertesMessagesService.ITableauMessage[];
        alertePropagationSuppression: string;
        static $inject: string[];
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService);
        valider(): void;
        annuler(): void;
        estEnSuppression: string;
    }
}

declare module syntheseClient.Directive {
    interface IScBlocCustom extends ng.IScope {
        scDonneesSignaletiques: syntheseClient.Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        scDonneesProduits: syntheseClient.Modeles.Produits.ISyntheseClientProduits;
        scDonnesObjetSynthese: syntheseClient.Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        objetRoute: syntheseClient.Modeles.Routage.IScRouteParam;
        scUrlDetail: string;
        idBloc: string;
    }
    interface IScParamsBlocCustom {
        nomDirective: string;
        typePersonne: string;
        idBloc: string;
        objetRoute: syntheseClient.Modeles.Routage.IScRouteParam;
    }
    function SyntheseBlocCustomDirective($compile: ng.ICompileService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $route: ng.route.IRouteService): ng.IDirective;
}

declare module syntheseClient.Directive {
    interface IDonneeGraphique {
        name: string;
        percent: number;
        id: string;
    }
    interface ID3Selection extends D3.Layout.ArcDescriptor {
        startAngle: number;
        endAngle: number;
        data: IDonneeGraphique;
    }
    class SyntheseBlocFinancierControleur {
        private serviceInit;
        private syntheseIndicateursFinanciersService;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        private syntheseClientProfil;
        statut: string;
        libellePictogramme: string;
        titreRubrique: string;
        labelTotalTresorerie: string;
        totalTresorerie: string;
        labelTotalCredit: string;
        totalCredit: string;
        labelTotalCollecte: string;
        totalCollecte: string;
        totalAssuranceVie: string;
        totalValeurMob: string;
        totalValMob: number;
        labelTotalImpayes: string;
        totalImpayes: string;
        labelTotalDebitDiff: string;
        totalDebitDiff: string;
        labelTotalContentieux: string;
        totalContentieux: string;
        totalAssVie: number;
        total: number;
        tauxTresorArr: number;
        tauxValMobArr: number;
        tauxAssVieArr: number;
        impayeVide: string;
        static $inject: string[];
        constructor(serviceInit: Service.SyntheseInitialisationService, syntheseIndicateursFinanciersService: Service.SyntheseIndicateursFinanciersService);
        initialisation(): void;
        drawPieChart: () => void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocFinancierDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocProduitsControleur {
        private serviceInit;
        private syntheseProduitService;
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesService;
        syntheseClientConstantes: Constantes.Constantes;
        private $scope;
        private $timeout;
        private $q;
        private serviceAgentExtended;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        synthseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        syntheseClientDonneesGlobal: Modeles.SyntheseGlobale.ISyntheseDonneesClient;
        private gerePar;
        statut: string;
        urlVueDetail: string;
        private codePersonnaliteJuridique;
        texteDetailProduit: string;
        produitsEnCours: boolean;
        voletOuvert: boolean;
        tuileFamilleVolet: string;
        private ciblerProduit;
        private produitACibler;
        totalParEntite: number;
        private totalProduitActifs;
        private totalProduitSoldes;
        listeProduitsActifs: SyntheseObjetsProduits[];
        entiteSelectionnee: number;
        statutTabProduit: boolean[];
        statutTabEntitee: number[];
        /**
         * filtre pour choisir affichage "tuile" ou "liste"
         */
        filtreAffichage: string;
        /**
         * pagination
         */
        pageCourante: number;
        nombreParPage: number;
        listeProduitsActifsFiltree: SyntheseObjetsProduits[];
        afficherProduits: boolean;
        dateNaissance: string;
        authentificationInfo: MyWay.Services.Context.AuthentificationInfo;
        parametresComptables: MyWay.Services.Context.ParametresComptables;
        applicationList: myway.portail.api.ApplicationList;
        listeEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        static $inject: string[];
        constructor(serviceInit: Service.SyntheseInitialisationService, syntheseProduitService: Service.SyntheseProduitService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientConstantes: Constantes.Constantes, $scope: ng.IScope, $timeout: ng.ITimeoutService, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        typeProduitSelectionne: string;
        /**
         * Permet d'initialiser les données du service REST
         */
        initialisation(): void;
        /**
         * obtenir le titre de l'onglet produit en fonction du codeEtatProduitService
         */
        titreOngletProduit: {
            "0": string;
            "1": string;
        };
        libelleModeComposition: {
            "1": string;
            "2": string;
            "3": string;
            "4": string;
        };
        libelleCodeUsage: {
            "1": string;
            "2": string;
        };
        /**
         * changer l'entité titulaire sélectionnée et modifier la liste de produits à générer
         * @param typeProduit {string} le code état pour un produit actif ou soldé
         * @param numeroEntite {number} le numero d'entité titulaire à sélectionner
         */
        changerEntite(typeProduit: string, numeroEntite: number): void;
        /**
         * changer la valeur du filtre
         * @param {valeur} : 'tuile'/'liste'
         */
        changerFiltre(valeur: string): void;
        /**
         * obtenir le numéro d'entité titulaire en premier dans la liste pour un type de produit
         * @param typeProduit {string} le code état pour un produit actif ou soldé
         * return entiteTitulaire {number} un numéro d'entité titulaire
         */
        getPremiereEntiteTitulaire(typeProduit: string): number;
        /**
         * modifier l'entité et le type de produit sélectionnés en cliquant sur un onglet
         * @param typeProduit {string} le code état pour un produit actif ou soldé
         */
        changementOngletProduit(typeProduit: string): void;
        /**
         * switch l'onglet active .
         * @param typeProduit {string} le code état pour un produit actif ou soldé a activer
         */
        toggleActiveTab(typeProduit: string): void;
        /**
         * obtenir le nom de l'entité titulaire via son numéro
         * @param numeroEntite {number} le numéro d'entité titulaire
         * @param modeComposition {boolean} si true, on demande l'ajout du mode composition dans le libellé
         * @return libelle {string} la designation courte de l'entité demandée
         */
        getLibelleEntite(numeroEntite: number, modeComposition: boolean, codeUsage: boolean, codeEtatProduit?: string): string;
        /** obtenir la classe CSS gérant la hauteur du bloc produit
         * @return classe {string} le nom de la classe css à associer au bloc produit
         */
        getNomDeClassePourHauteurProduits(): string;
        /**
         * récupérer le libellé de lien détail
         */
        recupererTexteLienDetail(): void;
        /**
         * obtenir le code et le mode de l'entité titulaire via son numéro
         * @param {number} numeroEntite le numéro d'entité titulaire
         * @param {boolean} modeComposition si true, on demande l'ajout du mode composition dans le libellé
         * @param {boolean} codeUsage le code usage pour générer le libellé
         * @return {string} libelle la designation courte de l'entité demandée
         */
        getModeCompEntite(numeroEntite: number, modeComposition: boolean, codeUsage: boolean): string;
        /**
         * remise à vide des éléments pour l'affichage et le contenu du volet
         */
        resetVolet(): void;
        listeProduitsSelectionnesModifiee(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocProduitsDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseElementProduitControleur {
        private $q;
        private $scope;
        syntheseClientUtilitaireService: syntheseClient.Service.SyntheseClientUtilitaireService;
        private syntheseProduitService;
        private syntheseServicesService;
        private $templateCache;
        private $element;
        private $compile;
        private $window;
        private syntheseDetailProduitService;
        private syntheseDetailServiceService;
        private syntheseToolsService;
        private serviceAgentExtended;
        private portailService;
        private lancerProcessusTuile;
        private erreurService;
        private logger;
        private commonService;
        private mwNotificationService;
        private agentService;
        private applicationService;
        nomProduitCourt: string;
        nomProduitMoyen: string;
        complementCourt: string;
        visible: boolean;
        enCours: boolean;
        listActesDeGestions: boolean;
        listeObject: string;
        codeCategorie: string;
        template: any;
        templateFonction: ($scope: ng.IScope, fn: (clone: any) => void) => void;
        produit: Service.IDetailProduit;
        service: Service.IDetailService;
        isProduit: boolean;
        isService: boolean;
        isCliquable: boolean;
        lancerProcessus: IProduitDetails[];
        flagBoutonTuileListe: string;
        titreComplement: string;
        voletOuvert: boolean;
        contexteLancement: string;
        static $inject: string[];
        constructor($q: ng.IQService, $scope: IScopeScElementProduit, syntheseClientUtilitaireService: syntheseClient.Service.SyntheseClientUtilitaireService, syntheseProduitService: Service.SyntheseProduitService, syntheseServicesService: Service.SyntheseServicesService, $templateCache: ng.ITemplateCacheService, $element: ng.IAugmentedJQuery, $compile: ng.ICompileService, $window: ng.IWindowService, syntheseDetailProduitService: Service.SyntheseDetailProduitService, syntheseDetailServiceService: Service.SyntheseDetailServiceService, syntheseToolsService: Service.SyntheseToolsService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, portailService: myway.portail.api.PortailService, lancerProcessusTuile: syntheseClient.Service.SyntheseProduitLancementService, erreurService: myway.core.ErreurService, logger: myway.core.LoggerService, commonService: myway.core.CommonService, mwNotificationService: MyWay.UI.IMwNotificationService, agentService: myway.core.AgentService, applicationService: myway.portail.api.ApplicationService);
        getIsCliquable(habilitation: string): ng.IPromise<boolean>;
        /**
         * report de l'action de click/keypress sur la tuile
         */
        clickAction(): void;
        /**
         * Débranchement sur le volet action
         * @param event
         * @param lancementApp
         */
        debrancherApplication(event: ng.IAngularEvent, lancementApp: IProduitDetails): void;
        /**
         * Lance le processus en fonction du type de l'application [PMM ou Code processus]
         * @param lancementApp
         */
        private lancementParTypeApplication(lancementApp);
    }
}

declare module syntheseClient.Directive {
    function SyntheseElementProduitDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseFooterControleur {
        private $scope;
        private syntheseImpressionService;
        private syntheseImpressionInterneService;
        private syntheseImpressionExterneService;
        private modalService;
        private syntheseInitialisationService;
        private $route;
        private syntheseClientDonneesService;
        private syntheseClientRisquesAlertesService;
        private syntheseClientUtilitaireService;
        private donneesDelocService;
        private $rootScope;
        static $inject: string[];
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        codeExisteInfoInterneService: string;
        private informationService;
        syntheseClientServices: Modeles.Services.ISyntheseClientServices;
        syntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        private syntheseClientProfil;
        private _messageSelectionne;
        listeAlertes: string[];
        filtreListeBouton: string[];
        filtreListeMessage: string[];
        dataListeActions: MyWay.UI.IBoutonActionRiche[];
        tableauComplexe: MyWay.UI.ImwTableOptions;
        tableauSimple: MyWay.UI.ImwTableOptions;
        indicateurPresenceMessageService: boolean;
        numeroPersonne: number;
        provenance: string[];
        codeTypeUsage: string[];
        modeComposition: string[];
        constructor($scope: ng.IScope, syntheseImpressionService: syntheseClient.Service.SyntheseImpressionService, syntheseImpressionInterneService: syntheseClient.Service.SyntheseImpressionInterneService, syntheseImpressionExterneService: syntheseClient.Service.SyntheseImpressionExterneService, modalService: MyWay.UI.IModalService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, $route: ng.route.IRouteService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, donneesDelocService: Service.SyntheseClientDonneesDelocService, $rootScope: ng.IRootScopeService);
        initialisation(): void;
        clientIdPersonne: number;
        vueCourante: Modeles.Vues.IEnteteObjet;
        preparationEntretien(): void;
        affichagePlanDeClassement(): void;
        drcClasseurClient(): void;
        compteRendu(): void;
        activitePro(): void;
        filDeContacts(): void;
        lancerImpressionSynthese(): void;
        private ouvrirPopopImpression();
        /**
         * permet de recuperer le libelle code provenance à partir de la table deloc CIDNCV
         * parametre d'entree codeProvenanceInformation
         */
        getCodeProvenanceInformation(): void;
        /**
         * permet de recuperer le libelle code type usage à partir de la table deloc CODIUS
         * parametre d'entree codeTypeUsageET
         */
        recuperCodeUsage(): void;
        /**
         * permet de recuperer le libelle code composition à partir de la table deloc CODIMC
         * parametre d'entree modeCompositionET
         */
        recuperModeComposition(): void;
        messageSelectionne: Modeles.AlertesMessagesService.IDetailInformationService[];
        /**
         * Permet de lancer la popin des messages de service
         */
        lancerMessagesServiceSynthese(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseFooterDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseHeaderControleur {
        private $location;
        private $timeout;
        private $scope;
        private logger;
        private portailService;
        private contexteClientService;
        private syntheseInitialisationService;
        private syntheseToolsService;
        private syntheseClientDonneesService;
        private syntheseClientProfilService;
        private chargementService;
        static $inject: string[];
        constructor($location: ng.ILocationService, $timeout: ng.ITimeoutService, $scope: ng.IScope, logger: myway.core.LoggerService, portailService: myway.portail.api.PortailService, contexteClientService: myway.portail.api.ContexteClientService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseToolsService: syntheseClient.Service.SyntheseToolsService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientProfilService: Service.SyntheseClientProfilService, chargementService: Service.SyntheseClientChargementService);
        libelleEntrepreneurIndividuel: string;
        vueCourante: Modeles.Vues.IEnteteObjet;
        changementVue(item: syntheseClient.Modeles.Vues.IEnteteObjet): void;
        titreSelectionne: string;
        clientIdPersonne: number;
        affichageVueClient(): void;
        /**
         * bouton de fermeture de la synthese client
         * permet de quitter la synthese
         */
        quitter(): void;
        private initVue();
    }
}

declare module syntheseClient.Directive {
    function SyntheseHeaderDirective(): ng.IDirective;
}

declare module syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT {
    interface ISIDCGCE_SYNTHESE_INT {
        SECTION1: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1[];
        GENERIC_ENTETEETS: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1 {
        _blocChoice_: (choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_TITRE | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_INFOSGENE | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_BALE2 | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_COMPTES | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_COMPTES_DETAIL | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_PAIEMENTS | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_AUTRES_SERVICES | choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_FIN)[];
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_TITRE {
        BL_TITRE: number;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_INFOSGENE {
        BL_INFOSGENE: SIDCGCE_SYNTHESE_INTSECTION1BL_INFOSGENE;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_BALE2 {
        BL_BALE2: SIDCGCE_SYNTHESE_INTSECTION1BL_BALE2;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_COMPTES {
        BL_COMPTES: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_COMPTES_DETAIL {
        BL_COMPTES_DETAIL: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAIL;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_PAIEMENTS {
        BL_PAIEMENTS: SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTS;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_AUTRES_SERVICES {
        BL_AUTRES_SERVICES: SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICES;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1_BL_FIN {
        BL_FIN: SIDCGCE_SYNTHESE_INTSECTION1BL_FIN;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICES {
        NOMLIBELLE1: string;
        LISTE: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTE[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTE {
        LIGNE1: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTELIGNE1[];
        LIGNE2: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTELIGNE2[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTELIGNE1 {
        LIBELLEPRODUIT: string;
        REFERENCE: string;
        SOUSCRIPTION: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_AUTRES_SERVICESLISTELIGNE2 {
        DETAIL: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_BALE2 {
        BALE1: string;
        BALE2: string;
        BALE3: string;
        BALE4: string;
        BALE5: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES {
        NOMLIBELLE1: string;
        LISTE: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE {
        _blocChoice_: (choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE1 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE2 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE3 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE4 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE5)[];
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE1 {
        LIGNE1: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE1;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE2 {
        LIGNE2: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE2;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE3 {
        LIGNE3: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE3;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE4 {
        LIGNE4: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE4;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTE_LIGNE5 {
        LIGNE5: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE5;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE1 {
        TITREPRODUIT: string;
        TITREREFERENCE: string;
        TITRESOLDE: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE2 {
        SOUSTITREPRODUIT: string;
        SOUSTITREREFERENCE: string;
        SOUSTITRESOLDE: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE3 {
        LIGNECB: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE4 {
        LIBELLEPRODUIT: string;
        REFERENCE: string;
        SOLDE: string;
        COMPLEMENT: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTESLISTELIGNE5 {
        MONTANTS: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAIL {
        NOMLIBELLE1: string;
        LISTE: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE[];
        LISTE_TOTAL: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTAL[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE {
        _blocChoice_: (choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE1 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE2 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE3 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE4 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE5 | choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE6)[];
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE1 {
        LIGNE1: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE1;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE2 {
        LIGNE2: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE2;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE3 {
        LIGNE3: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE3;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE4 {
        LIGNE4: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE4;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE5 {
        LIGNE5: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE5;
    }
    interface choice_SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_LIGNE6 {
        LIGNE6: SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE6;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE1 {
        TITREPRODUIT: string;
        TITREREFERENCE: string;
        TITRESOLDE: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE2 {
        SOUSTITREPRODUIT: string;
        SOUSTITREREFERENCE: string;
        SOUSTITRESOLDE: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE3 {
        LIGNECB: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE4 {
        LIBELLEPRODUIT: string;
        REFERENCE: string;
        SOLDE: string;
        COMPLEMENT: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE5 {
        DETAILS: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTELIGNE6 {
        SPACES: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTAL {
        LIGNE1: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE1[];
        LIGNE2: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE2[];
        LIGNE3: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE3[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE1 {
        TITREREFERENCEDETAIL: string;
        TITRESOLDEDETAIL: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE2 {
        SOUSTITREREFERENCEDETAIL: string;
        SOUSTITRESOLDEDETAIL: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_COMPTES_DETAILLISTE_TOTALLIGNE3 {
        REFERENCEDETAIL: string;
        SOLDEDETAIL: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_FIN {
        LIBELLEFIN: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_INFOSGENE {
        SUIVIPAR: string;
        NODAPE: string;
        IDCLIENT: string;
        DESIGNAT: string;
        DATENAIS: string;
        LIDAPR: string;
        NODATP: string;
        NODATC: string;
        NODATL: string;
        LIDGV2: string;
        LIDGV3: string;
        LIDGV4: string;
        LIDGV5: string;
        LIDGV6: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTS {
        NOMLIBELLE1: string;
        LISTE: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTE[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTE {
        LIGNE1: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTELIGNE1[];
        LIGNE2: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTELIGNE2[];
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTELIGNE1 {
        LIBELLEPRODUIT: string;
        REFERENCE: string;
    }
    interface SIDCGCE_SYNTHESE_INTSECTION1BL_PAIEMENTSLISTELIGNE2 {
        DETAIL: string;
    }
    class SIDCGCE_SYNTHESE_INT implements ISIDCGCE_SYNTHESE_INT {
        SECTION1: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.SIDCGCE_SYNTHESE_INTSECTION1[];
        GENERIC_ENTETEETS: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: syntheseClient.Modeles.SIDCGCE_SYNTHESE_INT.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDCGCE_SYNTHESE_INTImpressionLotParams {
        parametresLot: any;
        constructor();
    }
}

declare module syntheseClient.Modeles.SIDIMPONGLETSYNTHESE {
    interface ISIDIMPONGLETSYNTHESE {
        SECTION1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1[];
        GENERIC_ENTETEETS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1 {
        _blocChoice_: (choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_TITRE_DOC_NON_CONTRACTUEL | choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_INFO_PM | choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_INFO_PP | choice_SIDIMPONGLETSYNTHESESECTION1_BL_LIBELLE1 | choice_SIDIMPONGLETSYNTHESESECTION1_BL_SUIVIPAR | choice_SIDIMPONGLETSYNTHESESECTION1_BL_LISTECOMPTE | choice_SIDIMPONGLETSYNTHESESECTION1_BL_TOTAL | choice_SIDIMPONGLETSYNTHESESECTION1_BL_PAIEMENT | choice_SIDIMPONGLETSYNTHESESECTION1_BL_CREDITS | choice_SIDIMPONGLETSYNTHESESECTION1_BL_CREDIT | choice_SIDIMPONGLETSYNTHESESECTION1_BL_SERVICES | choice_SIDIMPONGLETSYNTHESESECTION1_BL_ASSURANCES | choice_SIDIMPONGLETSYNTHESESECTION1_BL_BALE2 | choice_SIDIMPONGLETSYNTHESESECTION1_BL_CONTRATS)[];
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_TITRE_DOC_NON_CONTRACTUEL {
        GENERIC_TITRE_DOC_NON_CONTRACTUEL: GENERIC_TITRE_DOC_NON_CONTRACTUEL;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_INFO_PM {
        GENERIC_INFO_PM: GENERIC_INFO_PM;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_GENERIC_INFO_PP {
        GENERIC_INFO_PP: GENERIC_INFO_PP;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_LIBELLE1 {
        BL_LIBELLE1: SIDIMPONGLETSYNTHESESECTION1BL_LIBELLE1;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_SUIVIPAR {
        BL_SUIVIPAR: SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPAR;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_LISTECOMPTE {
        BL_LISTECOMPTE: SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTE;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_TOTAL {
        BL_TOTAL: SIDIMPONGLETSYNTHESESECTION1BL_TOTAL;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_PAIEMENT {
        BL_PAIEMENT: SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENT;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_CREDITS {
        BL_CREDITS: SIDIMPONGLETSYNTHESESECTION1BL_CREDITS;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_CREDIT {
        BL_CREDIT: SIDIMPONGLETSYNTHESESECTION1BL_CREDIT;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_SERVICES {
        BL_SERVICES: SIDIMPONGLETSYNTHESESECTION1BL_SERVICES;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_ASSURANCES {
        BL_ASSURANCES: SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCES;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_BALE2 {
        BL_BALE2: SIDIMPONGLETSYNTHESESECTION1BL_BALE2;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1_BL_CONTRATS {
        BL_CONTRATS: SIDIMPONGLETSYNTHESESECTION1BL_CONTRATS;
    }
    interface GENERIC_ENTETEETS {
        LOGO_ETABLISSEMENT: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_ENTETEETSLOGO_ETABLISSEMENT;
        LIBELLE_AGENCE: string;
        COCEEL_AGENCE: string;
        NODATP_AGENCE: string;
        DATE_EDITION: string;
        HEURE_EDITION: string;
        NUM_REFDOC: string;
        CODE_BARRE: string;
        REF_ACTE: string;
    }
    interface GENERIC_ENTETEETSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    interface GENERIC_PIEDPAGEETS {
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCES {
        LST_ASSURANCES: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCES[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCES {
        LIGNE_1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCESLIGNE_1[];
        LIGNE_2: number;
        LIGNE_3: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCESLIGNE_3[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCESLIGNE_1 {
        TITREDATAA1: string;
        TITREDATAA2: string;
        TITREDATAA3: string;
    }
    interface GENERIC_INFO_PP {
        LISTE_PERSONNES: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_INFO_PPLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PPLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 | choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE)[];
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS {
        INFOS_PERS: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS2 {
        INFOS_PERS2: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS3 {
        INFOS_PERS3: GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3;
    }
    interface choice_GENERIC_INFO_PPLISTE_PERSONNES_INFOS_PERS_VIDE {
        INFOS_PERS_VIDE: number;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS {
        LIDACV: string;
        LIDANM: string;
        NOM_PRENOM_CLIENT: string;
        LIB_CODIRC: string;
        DADANA: string;
        LIDGIL_NAISSANCE: string;
        LIDGV2_6: string;
        LIDGNA: string;
        IDNSBD: string;
        NODATP_CLIENT: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS2 {
        LIDACV2: string;
        NOM_PRENOM_CLIENT2: string;
        LIDANM2: string;
        NOM_USAGE2: string;
        LIB_CODIRC2: string;
        DADANA2: string;
        LIDGIL_NAISSANCE2: string;
        LIDGV2_62: string;
        LIDGNA2: string;
        IDNSBD2: string;
        NODATP_CLIENT2: string;
        SITUATION_FAMILLE2: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESINFOS_PERS3 {
        LIDACV3: string;
        NOM_PRENOM_CLIENT3: string;
        LIDANM3: string;
        NOM_USAGE3: string;
        LIB_CODIRC3: string;
        DADANA3: string;
        LIDGIL_NAISSANCE3: string;
        LIDGV2_63: string;
        LIDGNA3: string;
        IDNSBD3: string;
        NODATP_CLIENT3: string;
        SITUATION_FAMILLE3: string;
        REGIME_MATRIMONIAL3: string;
    }
    interface GENERIC_INFO_PPLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface GENERIC_INFO_PM {
        LISTE_PERSONNES: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_INFO_PMLISTE_PERSONNES[];
    }
    interface GENERIC_INFO_PMLISTE_PERSONNES {
        _blocChoice_: (choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE | choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM)[];
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_TITRE_ROLE {
        TITRE_ROLE: GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE;
    }
    interface choice_GENERIC_INFO_PMLISTE_PERSONNES_INFOS_PM {
        INFOS_PM: GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESINFOS_PM {
        LIDARS: string;
        DADATJ: string;
        LIDGV2_6: string;
        IDNSBD: string;
        NODATP: string;
    }
    interface GENERIC_INFO_PMLISTE_PERSONNESTITRE_ROLE {
        LIB_CTDHLI: string;
    }
    interface GENERIC_TITRE_DOC_NON_CONTRACTUEL {
        TITREDOC: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_ASSURANCESLST_ASSURANCESLIGNE_3 {
        DATAA1: string;
        DATAA2: string;
        DATAA3: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_BALE2 {
        LST_BALE2: any[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_BALE2LST_BALE2LIGNE1 {
        D1: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CONTRATS {
        LST_CONTRATS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATS[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATS {
        LIGNE_1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE_1[];
        LIGNE_3: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE_3[];
        LIGNE3: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE3[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE_1 {
        TITREDATAC1: string;
        TITREDATAC2: string;
        TITREDATAC3: string;
        TITREDATAC4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE_3 {
        DATAC1: string;
        DATAC2: string;
        DATAC3: string;
        DATAC4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CONTRATSLST_CONTRATSLIGNE3 {
        DATAP1: string;
        DATAP2: string;
        DATAP3: string;
        DATAP4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDIT {
        LST_CREDIT: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDIT[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDIT {
        LIGNE_1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_1[];
        LIGNE_2: number;
        LIGNE_3: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_3[];
        LIGNE_4: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_4[];
        LIGNE_5: number;
        LIGNE_6: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_6[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_1 {
        TITREC1: string;
        TITREC2: string;
        TITREC3: string;
        TITREC4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_3 {
        DATACREDIT1: string;
        DATACREDIT2: string;
        DATACREDIT3: string;
        DATACREDIT4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_4 {
        DATACREDIT1A: string;
        DATACREDIT2A: string;
        DATACREDIT3A: string;
        DATACREDIT4A: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITLST_CREDITLIGNE_6 {
        DATACREDITTOTAL3: string;
        DATACREDITTOTAL4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITS {
        LST_CREDITS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITS[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITS {
        LIGNE_1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_1[];
        LIGNE_2: number;
        LIGNE_3: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_3[];
        LIGNE_4: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_4[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_1 {
        TITREDATAC1: string;
        TITREDATAC2: string;
        TITREDATAC3: string;
        TITREDATAC4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_3 {
        DATAC1: string;
        DATAC2: string;
        DATAC3: string;
        DATAC4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_CREDITSLST_CREDITSLIGNE_4 {
        DATAC1A: string;
        DATAC2A: string;
        DATAC3A: string;
        DATAC4A: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LIBELLE1 {
        NOMLIBELLE1: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTE {
        LISTE_COMPTE: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE {
        _blocChoice_: (choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_1_TITRE | choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_2 | choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_3_DATA | choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_4 | choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_5_TOTAL)[];
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_1_TITRE {
        LIGNE_1_TITRE: SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_1_TITRE;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_2 {
        LIGNE_2: number;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_3_DATA {
        LIGNE_3_DATA: SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_3_DATA;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_4 {
        LIGNE_4: number;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTE_LIGNE_5_TOTAL {
        LIGNE_5_TOTAL: SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_5_TOTAL;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_1_TITRE {
        TITRELISTE: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_3_DATA {
        LNEGCO: string;
        RICE: string;
        SOLDEEUR: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_LISTECOMPTELISTE_COMPTELIGNE_5_TOTAL {
        TOTALEUR: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENT {
        LST_PAIEMENT: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT {
        _blocChoice_: (choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_1 | choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_2 | choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_3)[];
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_1 {
        LIGNE_1: SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENTLIGNE_1;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_2 {
        LIGNE_2: number;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENT_LIGNE_3 {
        LIGNE_3: SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENTLIGNE_3;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENTLIGNE_1 {
        TITREDATAP1: string;
        TITREDATAP2: string;
        TITREDATAP3: string;
        TITREDATAP4: string;
        TITREDATAP5: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_PAIEMENTLST_PAIEMENTLIGNE_3 {
        DATAP1: string;
        DATAP2: string;
        DATAP3: string;
        DATAP4: string;
        DATAP5: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SERVICES {
        LST_SERVICE: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE {
        _blocChoice_: (choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_1 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_2 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_3 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_4)[];
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_1 {
        LIGNE_1: SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_1;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_2 {
        LIGNE_2: number;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_3 {
        LIGNE_3: SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_3;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICE_LIGNE_4 {
        LIGNE_4: SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_4;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_1 {
        TITREDATAS1: string;
        TITREDATAS2: string;
        TITREDATAS3: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_3 {
        DATAS1: string;
        DATAS2: string;
        DATAS3: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SERVICESLST_SERVICELIGNE_4 {
        DATAS4: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPAR {
        LSTINFONODAPE: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE[];
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE {
        _blocChoice_: (choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_1 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_2 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_3 | choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_4)[];
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_1 {
        LIGNE_1: SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_1;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_2 {
        LIGNE_2: SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_2;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_3 {
        LIGNE_3: SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_3;
    }
    interface choice_SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPE_LIGNE_4 {
        LIGNE_4: SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_4;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_1 {
        NODAPE: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_2 {
        BUREAUDOMICILIATION: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_3 {
        CSP: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_SUIVIPARLSTINFONODAPELIGNE_4 {
        SUIVIPAR: string;
    }
    interface SIDIMPONGLETSYNTHESESECTION1BL_TOTAL {
        TOTALCPTEUR: string;
    }
    class SIDIMPONGLETSYNTHESE implements ISIDIMPONGLETSYNTHESE {
        SECTION1: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.SIDIMPONGLETSYNTHESESECTION1[];
        GENERIC_ENTETEETS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_ENTETEETS[];
        GENERIC_PIEDPAGEETS: syntheseClient.Modeles.SIDIMPONGLETSYNTHESE.GENERIC_PIEDPAGEETS;
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: any;
        constructor();
    }
    class SIDIMPONGLETSYNTHESEImpressionLotParams {
        parametresLot: any;
        constructor();
    }
}

declare module syntheseClient.Directive {
    class SyntheseBlocAdministratifPmControleur {
        private clientProfilService;
        private serviceInit;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        adressePostale: Modeles.Coordonnes.ISyntheseClientAdresse;
        synthseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        dateDuJour: Date;
        pictoPersonne: string;
        designation: string;
        texteVueDetail: string;
        labelEmail: string;
        labelSiren: string;
        private statut;
        private syntheseClientPM;
        static $inject: string[];
        constructor(clientProfilService: Service.SyntheseClientProfilService, serviceInit: Service.SyntheseInitialisationService);
        initialisation(): void;
        /**
         * récupérer le libellé de lien détail         *
         */
        recupererTexteLienDetail(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocAdministratifPmDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocRiquesAlertesPmControleur {
        private $scope;
        private syntheseClientRisquesAlertesService;
        private syntheseInitialisationService;
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesService;
        private syntheseClientSuiviService;
        private donneesDelocService;
        private modalService;
        private $rootScope;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        private informationService;
        clientAdresseNpai: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresseNPAI;
        clientAdressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        codeExisteInfoInterneService: string;
        numeroEntiteTitulaire: number;
        libellePictogramme: string;
        titreRubrique: string;
        texteVueDetail: string;
        identifiantPersonne: number;
        statutPersonne: string;
        private statut;
        libelleFiben: string;
        noteFiben: string;
        libelleDateFiben: string;
        dateFiben: string;
        alerteNafi: boolean;
        capaciteJuridique: string;
        libelleSurendettement: string;
        libelleEtatDossier: string;
        libelleRetourRpm: string;
        indicAlerteSurPersonne: string;
        libelleIndicAlerteReclamation: string;
        libelleContentieux: string;
        libelleCompteEnDesherence: string;
        libelleReglementaire: string;
        libelleDegSensibilitePers: string;
        libelleIndicPresenceActeSaisie: string;
        libelleWatchList: string;
        libelleAdressePostaleAcorriger: string;
        libelleAdresseAcontroler: string;
        libelleAffichageAdresseNpai: string;
        libelleIndicDecesPresume: string;
        dateDecesPresume: string;
        libelleDatePresDeces: string;
        libelleInterditBancaire: string;
        totalListeMessageBoutonAlerte: number;
        totalAlerte: string;
        indicateur: string;
        listeAlertes: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeBouton: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeMessage: string[];
        libelleQcf: string;
        private syntheseClientProfil;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        afficherTableau: boolean;
        private afficherPopinMessageService;
        provenance: string[];
        codeTypeUsage: string[];
        modeComposition: string[];
        /**
         * limite du nombre d'alertes à afficher
         */
        limite: number;
        private _messageSelectionne;
        static $inject: string[];
        constructor($scope: ng.IScope, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, donneesDelocService: Service.SyntheseClientDonneesDelocService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService);
        /**
         * Permet d'initialiser les données du service REST
         */
        initialisation(): void;
        /**
         * permet de recuperer les donnees de la ressource informationService
         * si {donneesCommerciales.codeExisteInfoInterneService === "1"}
         */
        recupererDonneesMessageService(): ng.IPromise<void>;
        /**
         * methode de raffraichissement du total des alertes
         */
        private refreshTotalAlertes();
        /**
         * permet de verifier dans la liste des numero entite titulaire s'il y'a la présente des offres en instance
         */
        recupererDonneesOffresEnInstance(): void;
        messageSelectionne: Modeles.AlertesMessagesService.IDetailInformationService[];
        /**
         * Permet de lancer la popin des messages de service
         */
        lancerMessagesServiceSynthese(): void;
        /**
         * récupérer le libellé de lien détail
         */
        recupererTexteLienDetail(): void;
        /**
         * retourne au maximum 4 alertes de la liste
         */
        listeAlertesLimitee: string[];
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocRiquesAlertesPmDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocAdministratifControleur {
        private clientProfilService;
        private serviceInit;
        private $route;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigine: Modeles.Profil.ISyntheseClientOrigineClient;
        adressePostale: Modeles.Coordonnes.ISyntheseClientAdresse;
        synthseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        listeSyntheseEnqueteSatisfaction: Array<syntheseClient.Modeles.EnqueteSatisfaction.IEnqueteSatisfaction>;
        dateDuJour: Date;
        pictoPersonne: string;
        designation: string;
        texteVueDetail: string;
        labelProfession: string;
        labelEmail: string;
        private statut;
        private libelleMetierPersonne;
        private codePersonnaliteJuridique;
        static $inject: string[];
        constructor(clientProfilService: Service.SyntheseClientProfilService, serviceInit: Service.SyntheseInitialisationService, $route: ng.route.IRouteService);
        initialisation(): void;
        recupererLibelleMetier(): void;
        recupererTexteLienDetail(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocAdministratifPartDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocCommercialControleur {
        private serviceInit;
        private donneesDelocService;
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesService;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        libellePictogramme: string;
        titreRubrique: string;
        texteVueDetail: string;
        private statut;
        private syntheseClientSuivi;
        private libelleAffectationComm;
        donneeAgence: Modeles.Commercial.IDonneeCommune;
        private syntheseClientProfil;
        private syntheseClientOrigine;
        private dateEntreeRelation;
        private labelDateRelation;
        private listeSyntheseClientSegRevise;
        private listeSegAu1erJanv;
        private segRevision;
        private segRelPart;
        private segRelPro;
        private codeSegmRevu;
        private codeSegmPart;
        private codeSegmPro;
        codeSegmRevuSU: string;
        private notionPro;
        private listeSyntheseClientGP;
        private tableDV20;
        private donneesCommerciales;
        private tableCodeCanal;
        private tableCodeMedia;
        private tableCodeMotif;
        static $inject: string[];
        constructor(serviceInit: Service.SyntheseInitialisationService, donneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService);
        /**
         * Permet d'initialiser les données du service REST
         */
        initialisation(): void;
        /**
         * permet de recuperer les donnees de l'agence
         */
        recupererDonneesAgence(): ng.IPromise<void>;
        /**
         * permet de recuperer le code segment le plus recent
         * et si SX3O est vide SX8P est affiche
         */
        recuperersegment(): void;
        /**
         * permet de recuperer le libelle affectation
         * A partir de la table delocalisée CODUSU
         */
        recupererSuiviCommercial(): void;
        /**
         * Permet d'afficher la date d'entree en relation du bloc commercial
         * @param dateEntreeRelation:string
         */
        afficherDateEntreeEnRalation(): void;
        /**
         * récupérer le libellé de lien détail
         */
        recupererTexteLienDetail(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocCommercialPartDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocRiquesAlertesControleur {
        private $scope;
        private syntheseClientRisquesAlertesService;
        private syntheseInitialisationService;
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesService;
        private syntheseClientSuiviService;
        private clientProfilService;
        private syntheseProduitService;
        private donneesDelocService;
        private modalService;
        private $rootScope;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        syntheseClientProduits: Modeles.Produits.ISyntheseClientProduits;
        donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        private codeExisteInfoInterneService;
        private informationService;
        syntheseClientServices: Modeles.Services.ISyntheseClientServices;
        syntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire;
        listeSyntheseClientEntiteTitulaire: Array<Modeles.Profil.ISyntheseClientEntiteTitulaire>;
        clientAdresseNpai: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresseNPAI;
        clientAdressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        numeroEntiteTitulaire: number;
        libellePictogramme: string;
        titreRubrique: string;
        texteVueDetail: string;
        identifiantPersonne: number;
        statutPersonne: string;
        private statut;
        libelleFiben: string;
        noteFiben: string;
        libelleDateFiben: string;
        dateFiben: string;
        alerteNafi: boolean;
        capaciteJuridique: string;
        libelleSurendettement: string;
        libelleEtatDossier: string;
        libelleRetourRpm: string;
        indicAlerteSurPersonne: string;
        libelleIndicAlerteReclamation: string;
        libelleContentieux: string;
        libelleCompteEnDesherence: string;
        libelleReglementaire: string;
        libelleDegSensibilitePers: string;
        libelleIndicPresenceActeSaisie: string;
        libelleWatchList: string;
        libelleAdressePostaleAcorriger: string;
        libelleAdresseAcontroler: string;
        libelleAffichageAdresseNpai: string;
        libelleIndicDecesPresume: string;
        dateDecesPresume: string;
        libelleDatePresDeces: string;
        libelleInterditBancaire: string;
        totalListeMessageBoutonAlerte: number;
        totalAlerte: string;
        indicateur: string;
        listeAlertes: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeBouton: Modeles.AlertesMessagesService.IAlerte[];
        filtreListeMessage: string[];
        libelleQcf: string;
        private syntheseClientProfil;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        afficherTableau: boolean;
        private afficherPopinMessageService;
        provenance: string[];
        codeTypeUsage: string[];
        modeComposition: string[];
        /**
         * limite du nombre d'alertes à afficher
         */
        limite: number;
        private _messageSelectionne;
        static $inject: string[];
        constructor($scope: ng.IScope, syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService, syntheseClientSuiviService: Service.SyntheseClientSuiviService, clientProfilService: Service.SyntheseClientProfilService, syntheseProduitService: Service.SyntheseProduitService, donneesDelocService: Service.SyntheseClientDonneesDelocService, modalService: MyWay.UI.IModalService, $rootScope: ng.IRootScopeService);
        /**
         * Permet d'initialiser les données du service REST
         */
        initialisation(): void;
        /**
         * permet de recuperer les donnees de la ressource informationService
         * si {donneesCommerciales.codeExisteInfoInterneService === "1"}
         */
        recupererDonneesMessageService(): ng.IPromise<void>;
        private refreshTotalAlertes();
        /**
         * permet de verifier dans la liste des numero entite titulaire s'il y'a la présente des offres en instance
         */
        recupererDonneesOffresEnInstance(): void;
        messageSelectionne: Modeles.AlertesMessagesService.IDetailInformationService[];
        /**
         * Permet de lancer la popin des messages de service
         */
        lancerMessagesServiceSynthese(): void;
        /**
         * récupérer le libellé de lien détail
         */
        recupererTexteLienDetail(): void;
        /**
         * retourne au maximum 4 alertes de la liste
         */
        listeAlertesLimitee: string[];
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocRiquesAlertesPartDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseBlocCommercialPmControleur {
        private serviceInit;
        private donneesDelocService;
        private syntheseClientUtilitaireService;
        private syntheseClientDonneesService;
        /**
         * declarations des variables
         */
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        dateDuJour: Date;
        libellePictogramme: string;
        titreRubrique: string;
        texteVueDetail: string;
        private statut;
        private syntheseClientSuivi;
        private libelleAffectationComm;
        donneeAgence: Modeles.Commercial.IDonneeCommune;
        private syntheseClientProfil;
        private syntheseClientOrigine;
        private dateEntreeRelation;
        private labelDateRelation;
        private listeSyntheseClientSegRevise;
        private listeSegAu1erJanv;
        private segRevision;
        private segRelPart;
        private segRelPro;
        private codeSegmRevu;
        private codeSegmPart;
        private codeSegmPro;
        codeSegmRevuSU: string;
        private notionPro;
        private listeSyntheseClientGP;
        private tableDV20;
        private donneesCommerciales;
        private tableCodeCanal;
        private tableCodeMedia;
        private tableCodeMotif;
        static $inject: string[];
        constructor(serviceInit: Service.SyntheseInitialisationService, donneesDelocService: Service.SyntheseClientDonneesDelocService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, syntheseClientDonneesService: syntheseClient.Service.SyntheseClientDonneesService);
        /**
         * Permet d'initialiser les données du service REST
         */
        initialisation(): void;
        /**
         * permet de recuperer les donnees de l'agence
         */
        recupererDonneesAgence(): ng.IPromise<void>;
        /**
         * permet de recuperer le code segment le plus recent
         * et si SX3O est vide SX8P est affiche
         */
        recuperersegment(): void;
        /**
         * permet de recuperer le libelle affectation
         * A partir de la table delocalisée CODUSU
         */
        recupererSuiviCommercial(): void;
        /**
         * Permet d'afficher la date d'entree en relation du bloc commercial
         * @param dateEntreeRelation:string
         */
        afficherDateEntreeEnRalation(): void;
        /**
         * récupérer le libellé de lien détail         *
         */
        recupererTexteLienDetail(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseBlocCommercialPmDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseCodeMarcheControleur {
        private syntheseClientSuiviService;
        private syntheseClientUtilitaireService;
        statut: string;
        private libelleCodeMarcheEnVigeur;
        private libelleCodeMarcheCalcule;
        private listeSegment;
        private codeSegmRevu;
        private codeMarcheCalcule;
        private dateSegmentationEnVigueur;
        private dateSegmentationCalcule;
        codeStatutPro: string;
        libelleCodeCalcule: string;
        libelleDateCalcule: string;
        libelleDateEnvigueur: string;
        libelle: string;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
        getStatut(): boolean;
    }
}

declare module syntheseClient.Directive {
    function SyntheseCodeMarcheDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseGereParControleur {
        private syntheseClientSuiviService;
        statut: string;
        private libelleSocietaire;
        private indiceSocietaire;
        private libelleCalculeCourt;
        private listeGerePar;
        private tableGerePar;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService);
        getStatut(): boolean;
    }
}

declare module syntheseClient.Directive {
    function SyntheseGereParDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseOpportuniteControleur {
        private syntheseClientSuiviService;
        private donneesCommerciales;
        private nbOpportunites;
        statut: string;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseOpportuniteDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseSegmentationControleur {
        private syntheseClientSuiviService;
        private statut;
        private codeSegment;
        private listeSegment;
        private listeSegmentJanv;
        private libelleCodeSeg;
        private libelleSegment;
        segRevise: Modeles.Commercial.ISyntheseClientSegRevise;
        segAu01Janv: Modeles.Commercial.ISyntheseClientSegAu1erJanv;
        segReviseUnivers: Modeles.Commercial.ISyntheseClientSegRevise;
        segRevise01SU: Modeles.Commercial.ISyntheseClientSegAu1erJanv;
        private libelleSegUnivers;
        private codeSegmentUnivers;
        private libelleDateUnivers;
        private libelleSegAu1erJanv;
        private codeSegAu1erJanv;
        private libelleUniversAu1erJanv;
        private dateAu1erJanv;
        private afficherUnivers;
        private afficherSegAu1erJanv;
        private libelleTitreSeg;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService);
        getStatut(): boolean;
    }
}

declare module syntheseClient.Directive {
    function SyntheseSegmentationDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseSuiviParControleur {
        private syntheseClientSuiviService;
        private statut;
        private codeCiviliteSuiviPar;
        private nomAgentTraitement;
        private libelleAffichageSuiviPar;
        private donneeAgence;
        private libelleAgence;
        libelle: string;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseSuiviParDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseAdressePostaleControleur {
        private syntheseClientProfilService;
        adressePostale: syntheseClient.Modeles.Coordonnes.ISyntheseClientAdresse;
        statut: string;
        private adresse;
        labelAdresse: string;
        labelAdresseDetail: string;
        static $inject: string[];
        constructor(syntheseClientProfilService: Service.SyntheseClientProfilService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseAdressePostaleDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseContactControleur {
        private syntheseClientSuiviService;
        statut: string;
        private profilClient;
        private donneesCommerciales;
        private libelleDateRDV;
        private libelleDernierContact;
        private libelleCodeCanalContact;
        private tableCanal;
        private libelleCodeMediaContact;
        private tableMedia;
        private libelleCodeMotifContact;
        private tableMotif;
        private libelleCodeSensContact;
        static $inject: string[];
        constructor(syntheseClientSuiviService: Service.SyntheseClientSuiviService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseContactDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseContenuSimpleControleur {
        private syntheseClientProfilService;
        libelleAffichageContenuSimple: string;
        valeur: string;
        private statut;
        label: string;
        topCommercial: boolean;
        static $inject: string[];
        constructor(syntheseClientProfilService: Service.SyntheseClientProfilService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseContenuSimpleDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseDateNaissanceControleur {
        private syntheseClientProfilService;
        private syntheseClientUtilitaireService;
        libelleAffichageDateNaissance: string;
        libelleAffichageDateDeces: string;
        private codePersonnaliteJuridique;
        private codMotifClotureEntTitulaire;
        private libelleMentionPersonne;
        private codeProspect;
        private codeClientTiers;
        private libelleAge;
        statut: string;
        private dateNaissance;
        private codeCivilite;
        private dateDeDeces;
        private codeGenre;
        private libelleDateDeCreation;
        private libelleCodeMotifCloture;
        static $inject: string[];
        constructor(syntheseClientProfilService: Service.SyntheseClientProfilService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseDateNaissanceDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseSatisfactionControleur {
        private syntheseClientUtilitaireService;
        private modalService;
        statut: string;
        listeEnqueteSatisfactionClient: Modeles.EnqueteSatisfaction.IEnqueteSatisfaction[];
        lastEnqueteSatisfaction: Modeles.EnqueteSatisfaction.IEnqueteSatisfaction;
        iconClassNiveau: string;
        dateLastEnquete: string;
        listeFiltrer: Modeles.EnqueteSatisfaction.IEnqueteSatisfaction[];
        static $inject: string[];
        constructor(syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService, modalService: MyWay.UI.IModalService);
        private init();
        ouvrirHistorique(): void;
        private determinerIcone(niveauSatisfaction);
    }
}

declare module syntheseClient.Directive {
    function SyntheseSatisfactionDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseTelephoneControleur {
        private syntheseClientUtilitaireService;
        telephoneDomicile: string;
        telephonePortable: string;
        telephoneTravail: string;
        labelTelephoneDomicile: string;
        labelTelephoneTravail: string;
        labelTelephonePortable: string;
        statut: string;
        static $inject: string[];
        constructor(syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseTelephoneDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseMenuDetailControleur {
        private syntheseClientProfilService;
        private $location;
        libellePictogramme: string;
        urlVueSynthese: string;
        urlVueDetailAdministratif: string;
        urlVueDetailCommercial: string;
        urlVueDetailRisques: string;
        urlVueDetailProduits: string;
        private codePersonnaliteJuridique;
        private codeCivilite;
        private dateNaissance;
        private dateDuJour;
        static $inject: string[];
        constructor(syntheseClientProfilService: Service.SyntheseClientProfilService, $location: ng.ILocationService);
        /**
         * renvoi true si la vue courante est la vue client
         * return boolean
         */
        isVueClient: boolean;
        /**
         * Permet d'activer le bouton du lien correspondant
         * lorsque la page est ouverte
         * @param path{string} le chemin à tester
         * @return boolean
         */
        isCurrentPath(path: string): boolean;
    }
}

declare module syntheseClient.Directive {
    function SyntheseMenuDetailDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseNoteBaleControleur {
        private syntheseClientRisquesAlertesService;
        private syntheseClientDonneesService;
        private modalService;
        private syntheseInitialisationService;
        private syntheseClientUtilitaireService;
        statut: string;
        noteBale: string;
        alerteNafi: boolean;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientEntiteTitulaire: Modeles.Profil.ISyntheseClientEntiteTitulaire[];
        noteBalePersonne: Modeles.AlertesMessagesService.INoteBale2;
        detailNoteBale: Modeles.AlertesMessagesService.IDetailNoteBale2;
        noteBale2calculee: string;
        etabNotation: string;
        dateNotation: string;
        compFinanciere: string;
        static $inject: string[];
        constructor(syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseClientDonneesService: Service.SyntheseClientDonneesService, modalService: MyWay.UI.IModalService, syntheseInitialisationService: syntheseClient.Service.SyntheseInitialisationService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
        tableauSimple: MyWay.UI.ImwTableOptions;
        tableauColonneOptionsDesignation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNoteclient: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDate: MyWay.UI.ImwTableColumnOptions;
        onSelectionChange(selectedObject: Object): void;
        ouvrirDetailNoteBaleII(): void;
        getNoteBaleII(): ng.IPromise<void>;
        getTableauEntites(): Modeles.AlertesMessagesService.ITableauNoteBale[];
    }
}

declare module syntheseClient.Directive {
    function SyntheseNoteBaleDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseMessagesServiceControleur {
        private syntheseClientRisquesAlertesService;
        private syntheseClientUtilitaireService;
        informationService: Modeles.AlertesMessagesService.IDetailInformationService[];
        private codeExisteInfoInterneService;
        private statut;
        longueurLibellesChrono: number;
        static $inject: string[];
        constructor(syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
        listeMessage: string[];
    }
}

declare module syntheseClient.Directive {
    function SyntheseMessagesServiceDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseFibenStatutPersonneControleur {
        private syntheseClientRisquesAlertesService;
        private syntheseClientUtilitaireService;
        syntheseClientDonneesSignaletiques: Modeles.SyntheseGlobale.ISyntheseClientDonneesSignaletiques;
        donneesCommerciales: Modeles.Commercial.ISyntheseClientDonneesCommerciales;
        syntheseClientProfil: Modeles.Profil.ISyntheseClientProfil;
        syntheseClientOrigineClient: syntheseClient.Modeles.Profil.ISyntheseClientOrigineClient;
        libelleFiben: string;
        noteFiben: string;
        libelleDateFiben: string;
        dateFiben: string;
        libelleStatutPersonne: string;
        statutPersonne: string;
        statut: string;
        libelleCotation: string;
        codeCotation: string;
        static $inject: string[];
        constructor(syntheseClientRisquesAlertesService: Service.SyntheseClientRisquesAlertesService, syntheseClientUtilitaireService: Service.SyntheseClientUtilitaireService);
        initialisation(): void;
    }
}

declare module syntheseClient.Directive {
    function SyntheseFibenStatutPersonneDirective(): ng.IDirective;
}

declare module syntheseClient.Directive {
    class SyntheseTitreBlocControleur {
        private syntheseClientProfilService;
        libellePictogramme: string;
        libelleDesignationCourte: string;
        idLienDetail: string;
        libelleEntrepreneurIndividuel: string;
        private codePersonnaliteJuridique;
        private codeCivilite;
        private dateNaissance;
        private dateDuJour;
        private designationCourte;
        private statut;
        private nomFamille;
        private prenom;
        static $inject: string[];
        constructor(syntheseClientProfilService: Service.SyntheseClientProfilService);
    }
}

declare module syntheseClient.Directive {
    function SyntheseTitreBlocDirective(): ng.IDirective;
}

declare module syntheseClient {
    interface IRenduTableauEnqueteSatisfaction {
        dateEnquete: string;
        satisfaction: string;
        recommandation: string;
        motifEchange: string;
        commentaireClient: string;
    }
    class SatisfactionModaleCtrl {
        private $modalInstance;
        private data;
        private $modal;
        private $window;
        static $inject: string[];
        listeEnqueteSatisfaction: Modeles.EnqueteSatisfaction.IEnqueteSatisfaction[];
        renduTableauEnqueteSatisfaction: IRenduTableauEnqueteSatisfaction[];
        tableauSimple: MyWay.UI.ImwTableOptions;
        tableauColonneOptionsDate: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsNiveauSatisfaction: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsRecommandation: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMotifEchange: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCommentaireClient: MyWay.UI.ImwTableColumnOptions;
        constructor($modalInstance: ng.ui.bootstrap.IModalServiceInstance, data: any, $modal: ng.ui.bootstrap.IModalSettings, $window: ng.IWindowService);
        /**
         * Génération du tableau de rendu de l'enquête de satisfaction'
         */
        private genererTableau();
        /**
         * Retourne le libellé associé au niveau de satisfaction
         * @param niveau
         */
        private transformerNiveauSatisfactionEnLibelle(niveau);
        annuler(): void;
    }
}
