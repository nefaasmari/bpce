
declare module Favoris {
    var logg: (values?: any, comments?: string) => void;
    var app: any;
}

interface IMyScope extends ng.IScope {
    modeCreation: boolean;
    connexionReseau: string;
}
declare module Favoris {
    interface IModeParams {
        modeEdition: string;
        headerText: string;
        listeCategories: Array<AjoutFavorisCommun.ICategories>;
        listeFavoris?: AjoutFavorisCommun.IFavoris;
    }
    class AfficherFavorisControleur {
        private $rootScope;
        private $filter;
        private $window;
        private $timeout;
        private modalService;
        private $routeParams;
        private serviceAgentExtended;
        private serviceAgentProvider;
        private favorisService;
        private lireEcrireService;
        private modalCategoriesService;
        private mwNotificationService;
        _favoris: AjoutFavorisCommun.IFavoris;
        _listeFavorisByCategorieId: Array<AjoutFavorisCommun.IFavoris>;
        private _modeParams;
        configGrandesTuiles: MyWay.UI.iMwConfigTuile;
        configGrandesTuilesFirst: MyWay.UI.iMwConfigTuile;
        configGrandesTuilesLast: MyWay.UI.iMwConfigTuile;
        configGrandesTuilesOne: MyWay.UI.iMwConfigTuile;
        private dataListeActions;
        static $inject: string[];
        constructor($rootScope: AjoutFavorisCommun.IModalScope, $filter: ng.IFilterService, $window: ng.IWindowService, $timeout: ng.ITimeoutService, modalService: MyWay.UI.ModalService, $routeParams: AjoutFavorisCommun.IRouteParams, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, serviceAgentProvider: MyWay.Services.ServiceAgentProvider, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService, modalCategoriesService: AjoutFavorisCommun.ModalCategoriesService, mwNotificationService: MyWay.UI.IMwNotificationService);
        listeFavorisByCategorieId: Array<AjoutFavorisCommun.IFavoris>;
        getConfigTuile: (index: number) => MyWay.UI.iMwConfigTuile;
        private ouvrirModalFavorisPerso;
        private creerFavori;
        private modifierFavori;
        pageTitre: string;
        favoris: AjoutFavorisCommun.IFavoris;
        /**
         *  Désactive le bouton "Personnaliser mes favoris" lorsque le nombre de tuile dans les favoris est égal à 0
         */
        initialiserVue: () => void;
        private setBoutonPersonnaliserFavoris;
        /**
         * Editer un favori (ajouter ou modifier)
         * @function
         * @param {object} favori
         * @param {string} modeEdition
         */
        sauvegardeFavoris: (favori: any, modeEdition: string) => void;
        onClickLeft: (objetTuile: Object, listeObjetTuile: Object[]) => void;
        onClickRight: (objetTuile: Object, listeObjetTuile: Object[]) => void;
        /**
         * Action click sur la tuile (favoris)
         * @function
         * @param {AjoutFavorisCommun.IFavoris} tuile
         */
        onTuileClick: (tuile: AjoutFavorisCommun.IFavoris) => void;
        /**
         * Déplacer la tuile (favoris) dans la catégorie cible
         * @function
         * @param {AjoutFavorisCommun.IFavoris} tuile
         */
        onAction1: (tuile: AjoutFavorisCommun.IFavoris) => void;
        /**
         * Supprimer la tuile (favoris) sélectionnée
         * @function
         * @param {any} tuile
         */
        onAction2: (tuile: any) => void;
        /**
         * Déplacer la tuile (favoris) sélectionnée à Droite
         * @function
         * @param {AjoutFavorisCommun.IFavoris} tuile
         */
        onAction3: (tuile: AjoutFavorisCommun.IFavoris) => void;
        /**
         * Déplacer la tuile (favoris) sélectionnée à Gauche
         * @function
         * @param {AjoutFavorisCommun.IFavoris} tuile
         */
        onAction4: (tuile: AjoutFavorisCommun.IFavoris) => void;
    }
}

declare module Favoris {
    class ConfirmerSuppressionCategoriesModal {
        private $filter;
        private $modalInstance;
        private data;
        private $modal;
        model: any;
        private categorieId;
        private categorietitre;
        private favoris;
        static $inject: string[];
        constructor($filter: ng.IFilterService, $modalInstance: any, data: any, $modal: any);
        ok: () => void;
        close: () => void;
    }
}

declare module Favoris {
    interface IModalFavoris {
        categorie: AjoutFavorisCommun.ICategories;
        categorieId?: string;
        categories: Array<AjoutFavorisCommun.ICategories>;
        categoriesFavoris?: Array<ICategoriesFavoris>;
        favoris: AjoutFavorisCommun.IFavoris;
        favorisPerso: boolean;
        favoriId?: string;
        lien?: string;
        listeCategoriesFavoris?: Array<AjoutFavorisCommun.ICategories>;
        titre?: string;
    }
    interface ICategoriesFavoris {
        favorisId: string;
        categorieId: string;
        label: string;
    }
    class EditerFavorisPersoControleur {
        private $scope;
        private $filter;
        private $modalInstance;
        private data;
        private $modal;
        modalDatas: any;
        model: IModalFavoris;
        private boutonValider;
        private _favoriSelection;
        private categories;
        private favoris;
        static $inject: string[];
        constructor($scope: IMyScope, $filter: ng.IFilterService, $modalInstance: any, data: any, $modal: MyWay.UI.IModalService);
        favoriSelection: any;
        verifierFormEditerFavoris: (datas: any[]) => void;
        private setModelCategoriesFavoris;
        ok: () => void;
        close: () => void;
        getFavorisSelection: (favoriSelection: any) => void;
    }
}

declare module Favoris {
}

declare module Favoris {
}

declare module Favoris {
    class ToolsController {
        private $q;
        private $location;
        private serviceAgentExtended;
        private mwNotificationService;
        private lireEcrireService;
        static $inject: string[];
        constructor($q: ng.IQService, $location: ng.ILocationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
        erasePreferences: () => void;
    }
}

declare module Favoris {
    class ModelesFavoris {
        private $q;
        private _isCategoriesModeEdition;
        private _isFavorisModeEdition;
        private _afficherSpinnerFavoris;
        static $inject: string[];
        constructor($q: ng.IQService);
    }
}

declare module Favoris {
    class EvenementService {
        private $q;
        private favorisService;
        private lireEcrireService;
        private _isCategoriesModeEdition;
        private _isFavorisModeEdition;
        private _afficherSpinnerFavoris;
        static $inject: string[];
        constructor($q: ng.IQService, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
        afficherSpinnerFavoris: boolean;
        isCategoriesModeEdition: boolean;
        isFavorisModeEdition: boolean;
        ecrireCategories: () => ng.IPromise<string>;
        ecrireFavoris: () => ng.IPromise<string>;
    }
}

declare module Favoris {
    interface IApplicationAutorisees {
        [codeApplication: string]: boolean;
    }
    interface IListeApplicationsParametre {
        codeApplication: string;
        codeEtablissement: string;
        codeTypeApplication: number;
        codeVisibiliteApplication: number;
        libelleDescriptionApplication: string;
        libelleDeviceCompatible: string;
        libelleHabilitation: string;
        libelleNomApplication: string;
    }
    interface ICatalogueApplications {
        listeApplicationParametre: Array<IListeApplicationsParametre>;
        versionMySys: string;
    }
    interface IApplicationAttributs {
        codeApplication: string;
        codeBesoinOuvertureGuichet: number;
        codeClientIdentifie: number;
        codeEtablissement: string;
        codeSousFamilleCommunautaire: string;
        codeSousFamilleEtablissement: string;
        codeTypeApplication: number;
        codeVisibiliteApplication: number;
        dateDebutDisponibilite: string;
        dateFinDisponibilite: string;
        identifiantVersionDebutPublication: string;
        libelleDescriptionApplication: string;
        libelleDeviceCompatible: string;
        libelleHabilitation: string;
        libelleNomApplication: string;
        prepilote: number;
    }
    class FavorisApplicationsService {
        private $q;
        private $filter;
        private serviceAgentExtended;
        private favorisService;
        private lireEcrireService;
        private applicationsContexteMobiliteService;
        private _listeApplications;
        private _catalogueApplications;
        private _favorisFiltre;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService, applicationsContexteMobiliteService: ApplicationsContexteMobilite.ApplicationsContexteMobiliteService);
        listeFavorisApplications: ICatalogueApplications;
        favorisFiltre: any;
        catalogueApplications: ICatalogueApplications;
        /**
         * Initialisation des données avant le rendu de la vue
         * Chargement des données : Catégories et Favoris de l'utilisateur
         * Préparation des données : Habilitations, code mobilités, etc.
         * @function
         * @param {ICategories} categories
         * @param {Array<IFavoris>} favoris
         * return {promise} ng.IPromise<string>
         */
        initialisationFavoris: (categories?: any, favoris?: any) => ng.IPromise<string>;
        private setApplicationsContexteMobiliteAutorisations;
        private applyApplicationMobiliteCodeMobilite;
        private getFavorisListeApplications;
        private updateFavorisApplications;
        private verifierCodeHabilitation;
        private isFavorisHabilite;
        private ajouterFavorisFilte;
        private getListeApplications;
        lireCatalogueApplications: () => MyWay.Services.IPromesse<any>;
    }
}
