
declare module ComposantsCommunsGarantiesCCE {
    var app: any;
}

declare module ComposantsCommunsGarantiesCCE {
}

declare module ComposantsCommunsGarantiesCCE.Controleurs {
    class PageDevServiceRestCaracteristiqueGarantieControleur {
        private $scope;
        private serviceAgentExtended;
        private caracteristiqueGarantieCCEService;
        static $inject: string[];
        caracteristiqueGarantieCCEGetQuery: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.ICaracteristiqueGarantieCCEGetQuery;
        caracteristiqueGarantieCCEGetReponse: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEGetErreur: MyWay.Services.Erreur;
        indicateurCaracteristiqueGarantieCCEGetServiceEnCours: boolean;
        indicateurRechercheCaracteristiqueGarantieCCEServiceGet: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServiceGet: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServiceGetNull: boolean;
        caracteristiqueGarantieCCEPostQuery: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEPostReponse: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEPostErreur: MyWay.Services.Erreur;
        indicateurCaracteristiqueGarantieCCEPostServiceEnCours: boolean;
        indicateurRechercheCaracteristiqueGarantieCCEServicePost: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServicePost: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServicePostNull: boolean;
        caracteristiqueGarantieCCEPutQuery: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEPutReponse: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEPutErreur: MyWay.Services.Erreur;
        indicateurCaracteristiqueGarantieCCEPutServiceEnCours: boolean;
        indicateurRechercheCaracteristiqueGarantieCCEServicePut: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServicePut: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServicePutNull: boolean;
        caracteristiqueGarantieCCEDeleteQuery: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce;
        caracteristiqueGarantieCCEDeleteErreur: MyWay.Services.Erreur;
        indicateurCaracteristiqueGarantieCCEDeleteServiceEnCours: boolean;
        indicateurRechercheCaracteristiqueGarantieCCEServiceDelete: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServiceDelete: boolean;
        indicateurSuccesCaracteristiqueGarantieCCEServiceDeleteNull: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caracteristiqueGarantieCCEService: Services.Rest.ICaracteristiqueGarantieCCEService);
        initialiserCaracteristiqueGarantieQueryServiceGet(): void;
        initialiserCaracteristiqueGarantieQueryServicePost(): void;
        initialiserCaracteristiqueGarantieQueryServicePut(): void;
        initialiserCaracteristiqueGarantieQueryServiceDelete(): void;
        envoiRequeteGetCaracteristiqueGarantie(): void;
        envoiRequetePostCaracteristiqueGarantie(): void;
        envoiRequetePutCaracteristiqueGarantie(): void;
        envoiRequeteDeleteCaracteristiqueGarantie(): void;
    }
}

declare module ComposantsCommunsGarantiesCCE.Controleurs {
    class PageDevServiceRestNatureGarantieControleur {
        private $scope;
        private serviceAgentExtended;
        private natureGarantieCCEService;
        static $inject: string[];
        natureGarantieCCEGetQuery: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCceGetQuery;
        natureGarantieCCEGetReponse: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCce;
        natureGarantieCCEGetErreur: MyWay.Services.Erreur;
        indicateurNatureGarantieCCEServiceEnCours: boolean;
        indicateurRechercheNatureGarantieCCEServiceGet: boolean;
        indicateurSuccesNatureGarantieCCEServiceGet: boolean;
        indicateurSuccesNatureGarantieCCEServiceGetNull: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, natureGarantieCCEService: Services.Rest.INatureGarantieCCEService);
        envoiRequeteNatureGarantie(): void;
    }
}

declare module ComposantsCommunsGarantiesCCE.Controleurs {
    class PageDevTableauListeGarantiesCCEControleur implements MyWay.UI.ISelectionChangeHandler {
        private $scope;
        private serviceAgentExtended;
        private natureGarantieCCEService;
        static $inject: string[];
        tableauGarantie: Modeles.Tableaux.TableauListeGarantiesCCEControleur;
        affichageTableau: boolean;
        listeNature: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[];
        erreurPromesses: string;
        indicateurErreurPromesses: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, natureGarantieCCEService: Services.Rest.INatureGarantieCCEService);
        onSelectionChange(selectedObject: any): void;
    }
}

/**
 * Ensemble d'énumérations pour le projet produits non gérés
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Enumerations {
    enum CaracteristiqueGarantieQueryCodeTypeTraitement {
        RECHERCHE_TOUTES_LIGNES,
        RECHERCHE_UNE_LIGNE,
    }
    /**
     * 'R' Type de garantie réelle
     * 'P'  Type de garantie personnelle
     */
    enum TypeGarantie {
        "Réelle",
        "Personnelle",
    }
    /**
     * 'A' Etat de garantie active
     * 'I'  Etat de garantie inactive
     */
    enum EtatGarantie {
        "Active",
        "Inactive",
    }
}

declare module ComposantsCommunsGarantiesCCE.Filtres {
    function TypeGarantieToStringFilter(): (input: Enumerations.TypeGarantie) => string;
    function EtatGarantieToStringFilter(): (input: Enumerations.EtatGarantie) => string;
    function AjoutSigleMontantFilter(): (input: string, symboleSigle: string) => string;
    function RangFilter(): (input: number) => string;
}

/**
 * Modeles des objets pour le service de recuperation des garanties cce
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEService.CaracteristiqueGarantieCCE {
    interface ICaracteristiqueGarantieCCEGetQuery {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroDossierGarantie: number;
        codeTypeTraitement: ComposantsCommunsGarantiesCCE.Enumerations.CaracteristiqueGarantieQueryCodeTypeTraitement;
    }
    interface IIdentificationContrat {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroContrat?: number;
    }
    interface IGarantie {
        adresse?: IAdresse;
        numeroDossier?: number;
        dateCreation?: Date;
        codeNature?: string;
        dateEffet?: Date;
        typeGarantie?: string;
        dateEcheance: Date;
        montantGarantie?: number;
        codeEtat?: string;
        libelleEtat?: string;
        valeurReel?: number;
        codeDeviseTenueCompte?: string;
        codeDeviseFonctionnement?: string;
        dateEstimationReel?: Date;
        identifiantTiers?: number;
        designationTiers?: string;
        commentaireLigne1?: string;
        commentaireLigne2?: string;
        montantOrigineCredit?: number;
        codeDeviseISO?: string;
        dateDebutCredit?: Date;
        dateFinCredit?: Date;
        designationBancaire?: string;
        typeBienEnGarantie?: string;
        rangGarantie?: number;
        libelleNature?: string;
        libelleTypeBienEnGarantie?: string;
    }
    interface IAdresse {
        ligne2?: string;
        ligne3?: string;
        ligne4?: string;
        ligne5?: string;
        ligne6?: string;
    }
    interface IGarantieCce {
        identificationContrat: IIdentificationContrat;
        listeGarantie: Array<IGarantie>;
    }
}

/**
 * Modeles des objets pour le service de recuperation des natures de garanties cce
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Modeles.GarantieCCEParametreService.NatureGarantieCCE {
    interface INatureGarantieCceGetQuery {
        codeNatureGarantie?: string;
    }
    interface INatureGarantieCce {
        listeNatureGarantie: Array<INatureGarantie>;
    }
    interface INatureGarantie {
        libelleNature: string;
        typeGarantie: string;
        typeGarantieGce: string;
        libelleNationalNature: string;
        codeNatureGarantie: string;
    }
}

/**
 * Modeles des objets pour les type de bien en garantie cce
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Modeles.TypeBienGarantieCCE {
    interface ITypeBienGarantieCCE {
        /**
         * Clé des types de bien en garantie renvoyé par la table delocalisée
         */
        Key: string;
        /**
         * Libellé des types de bien en garantie renvoyé par la table delocalisée
         */
        Value: string;
    }
}

/**
 * Service d'initialisation des paramètres de l'application
 * @author S0077482
 */
declare module ComposantsCommunsGarantiesCCE.Services {
    /**
     * Interface du service
     */
    interface IInitialisationService {
        isMockEnabled: () => boolean;
    }
}

/**
 * Service de chargement des mocks dans le dossier "assets/mocks/*.json"
 * @author S0077482
 */
declare module ComposantsCommunsGarantiesCCE.Services {
    /**
     * Interface du service
     */
    interface IMockLoaderService {
        getDataByFileName: <T>(fileName: string) => ng.IPromise<T>;
    }
}

declare module ComposantsCommunsGarantiesCCE.Modeles.Tableaux {
    class TableauListeGarantiesCCEControleur implements MyWay.UI.ImwTableOptions {
        tableauColonneOptionsNumDossier: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsTypeGarantie: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsIntituleNatureGarantie: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsEtat: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDateEffet: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDateEcheance: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsMontantGarantie: MyWay.UI.ImwTableColumnOptions;
        width: string;
        orderBy: string;
        reserve: boolean;
        perPage: number;
        multiSelect: boolean;
        filterEnable: boolean;
        sortEnable: boolean;
        moreEnable: boolean;
        columns: MyWay.UI.ImwTableColumnOptions[];
        data: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie[];
        selectedItems: any[];
        templateUrl: string;
        selectionChangeHandler: MyWay.UI.ISelectionChangeHandler;
        constructor(handler: MyWay.UI.ISelectionChangeHandler);
    }
}

declare module ComposantsCommunsGarantiesCCE.Services.Application {
    interface IDonneesCodeLibelleNatureGarantieService {
        enregistrerDonneesNatureGarantie(donnees: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[]): any;
        recupererDonneesNatureGarantie(): Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[];
        getLibelleNatureGarantieParCodeNature(codeNature: string): string;
    }
    class DonneesCodeLibelleNatureGarantieService implements IDonneesCodeLibelleNatureGarantieService {
        donneesNatureGarantie: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[];
        enregistrerDonneesNatureGarantie(donnees: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[]): void;
        recupererDonneesNatureGarantie(): Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantie[];
        getLibelleNatureGarantieParCodeNature(codeNature: string): string;
    }
}

declare module ComposantsCommunsGarantiesCCE.Services.Application {
    interface IDonneesCodeLibelleTypeBienGarantieService {
        enregistrerDonneesTypeBienGarantie(donnees: Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[]): any;
        recupererDonneesTypeBienGarantie(): Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[];
        getLibelleTypeBienGarantieParCodeTypeBien(codeTypeBien: string): string;
    }
    class DonneesCodeLibelleTypeBienGarantieService implements IDonneesCodeLibelleTypeBienGarantieService {
        donneesTypeBienGarantie: Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[];
        enregistrerDonneesTypeBienGarantie(donnees: Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[]): void;
        recupererDonneesTypeBienGarantie(): Modeles.TypeBienGarantieCCE.ITypeBienGarantieCCE[];
        getLibelleTypeBienGarantieParCodeTypeBien(codeTypeBien: string): string;
    }
}

declare module ComposantsCommunsGarantiesCCE.Services.Application {
    interface IDonneesContexte {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        enConsultationCce: boolean;
    }
    interface IDonneesContexteService {
        enregistrerDonneesContexte(donnees: IDonneesContexte): any;
        recupererDonneesContexte(): IDonneesContexte;
        enregistrerActiverCroixFermer(valeur: boolean): any;
        recupererActiverCroixFermer(): boolean;
    }
    class DonneesContexteService implements IDonneesContexteService {
        donneesContexte: IDonneesContexte;
        activerCroixFermer: boolean;
        enregistrerDonneesContexte(donnees: IDonneesContexte): void;
        recupererDonneesContexte(): IDonneesContexte;
        enregistrerActiverCroixFermer(valeur: boolean): void;
        recupererActiverCroixFermer(): boolean;
    }
}

declare module ComposantsCommunsGarantiesCCE.Services.Application {
    interface IDonneesGarantieSelectionneeService {
        enregistrerDonneesGarantieSelectionnee(donnees: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie): any;
        recupererDonneesGarantieSelectionnee(): Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie;
    }
    class DonneesGarantieSelectionneeService implements IDonneesGarantieSelectionneeService {
        donneesGarantieSelectionnee: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie;
        enregistrerDonneesGarantieSelectionnee(donnees: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie): void;
        recupererDonneesGarantieSelectionnee(): Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantie;
    }
}

/***
 * Service de recuperation de l'url lisa de garanties
 * @module ComposantsCommunsGarantiesCCE.Services.Application
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Services.Application {
    /**
     * Classe du service
     */
    class GarantieUrlLisaService {
        private serviceAgentExtended;
        private $location;
        static $inject: string[];
        private donnees;
        private donneesDejaRecuperees;
        /**
         * Constructeur
         */
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $location: ng.ILocationService);
        /**
         * Méthode permettant de récupérer les données depuis l'URL et de les renvoyer
         * @return {any} Le tableau de données
         */
        getDonnees(): any;
    }
}

/**
 * Service pour la récupération des garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Services.Rest {
    /**
     * Interface du service de caracteristique garantie CCE
     */
    interface ICaracteristiqueGarantieCCEService {
        getRequest: (query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.ICaracteristiqueGarantieCCEGetQuery) => ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        postRequest: (query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce) => ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        putRequest: (query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce) => ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        deleteRequest: (query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce) => ng.IPromise<any>;
    }
    /**
     * Déclaration du service de caracteristique garantie CCE
     */
    class CaracteristiqueGarantieCCEService implements ICaracteristiqueGarantieCCEService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Retourne l'url de la ressource REST
         */
        url(): string;
        /**
         * Methode d'appel GET
         */
        getRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.ICaracteristiqueGarantieCCEGetQuery): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode d'appel POST
         */
        postRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode d'appel PUT
         */
        putRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode d'appel DELETE
         */
        deleteRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<any>;
    }
    /**
     * Déclaration du service Mock de caracteristique garantie CCE
     */
    class CaracteristiqueGarantieCCEMockService implements ICaracteristiqueGarantieCCEService {
        private serviceAgent;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode Mock d'appel GET
         */
        getRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.ICaracteristiqueGarantieCCEGetQuery): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode Mock d'appel POST
         */
        postRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode Mock d'appel PUT
         */
        putRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce>;
        /**
         * Methode d'appel DELETE
         */
        deleteRequest(query: Modeles.GarantieCCEService.CaracteristiqueGarantieCCE.IGarantieCce): ng.IPromise<any>;
    }
}

/**
 * Service pour la récupération des natures de garanties CCE
 * @author S0077482 (Thomas PRAT)
 */
declare module ComposantsCommunsGarantiesCCE.Services.Rest {
    /**
     * Interface du service de nature garantie CCE
     */
    interface INatureGarantieCCEService {
        getRequest: (query: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCceGetQuery) => ng.IPromise<Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCce>;
    }
    /**
     * Déclaration du service de nature garantie CCE
     */
    class NatureGarantieCCEService implements INatureGarantieCCEService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Methode d'appel GET
         */
        getRequest(query: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCceGetQuery): ng.IPromise<Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCce>;
    }
    /**
     * Déclaration du service Mock de caracteristique garantie CCE
     */
    class NatureGarantieCCEMockService implements INatureGarantieCCEService {
        private serviceAgentExtended;
        private mockLoaderService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mockLoaderService: Services.IMockLoaderService);
        /**
         * Methode d'appel GET
         */
        getRequest(query: Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCceGetQuery): ng.IPromise<Modeles.GarantieCCEParametreService.NatureGarantieCCE.INatureGarantieCce>;
    }
}
