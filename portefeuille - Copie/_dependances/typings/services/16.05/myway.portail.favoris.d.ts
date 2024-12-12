
declare module Favoris {
    var logg: (values?: any, comments?: string) => void;
    var app: any;
}

interface IMyScope extends ng.IScope {
    configGrandesTuiles: MyWay.UI.iMwConfigTuile;
    ouvrirModalFavorisPerso: Function;
    modeCreation: boolean;
    connexionReseau: string;
}
interface IMyRootScope extends AjoutFavorisCommun.IModalScope {
    routeParams: string;
    _pageTitre: string;
}
declare module Favoris {
    class AfficherFavorisControleur {
        private $rootScope;
        private $scope;
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
        _favoris: any;
        _listeFavorisByCategorieId: any;
        private _modeParams;
        private dataListeActions;
        static $inject: string[];
        constructor($rootScope: IMyRootScope, $scope: IMyScope, $filter: ng.IFilterService, $window: ng.IWindowService, $timeout: ng.ITimeoutService, modalService: MyWay.UI.ModalService, $routeParams: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, serviceAgentProvider: MyWay.Services.ServiceAgentProvider, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService, modalCategoriesService: AjoutFavorisCommun.ModalCategoriesService, mwNotificationService: MyWay.UI.IMwNotificationService);
        listeFavorisByCategorieId: any;
        private creerFavori;
        private modifierFavori;
        pageTitre: string;
        favoris: AjoutFavorisCommun.IFavoris;
        /**
         *  Désactive le bouton "Personnaliser mes favoris" lorsque le nombre de tuile dans les favoris est égal à 0
         */
        initialiserVue: () => any;
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
         * @param {any} tuile
         */
        onTuileClick: (tuile: AjoutFavorisCommun.IFavoris) => void;
        /**
         * Déplacer la tuile (favoris) dans la catégorie cible
         * @function
         * @param {any} tuile
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
         * @param {any} tuile
         */
        onAction3: (tuile: AjoutFavorisCommun.IFavoris) => void;
        /**
         * Déplacer la tuile (favoris) sélectionnée à Gauche
         * @function
         * @param {any} tuile
         */
        onAction4: (tuile: AjoutFavorisCommun.IFavoris) => void;
    }
}

declare module Favoris {
    class ConfirmerSuppressionCategoriesModal {
        private $scope;
        private $filter;
        private $modalInstance;
        private data;
        private $modal;
        model: any;
        private categorieId;
        private categorietitre;
        private favoris;
        static $inject: string[];
        constructor($scope: IConfirmScope, $filter: ng.IFilterService, $modalInstance: any, data: any, $modal: any);
        ok: () => void;
        close: () => void;
    }
}

declare module Favoris {
    class EditerFavorisPersoControleur {
        private $scope;
        private $filter;
        private $modalInstance;
        private data;
        private $modal;
        modalDatas: any;
        model: any;
        private boutonValider;
        private _favoriSelection;
        private categories;
        private favoris;
        static $inject: string[];
        constructor($scope: IMyScope, $filter: ng.IFilterService, $modalInstance: any, data: any, $modal: any);
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

interface IConfirmScope extends ng.IScope {
    ouvrirModalSupprimerCategories: Function;
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
    class EvenementService {
        private $q;
        private favorisService;
        private lireEcrireService;
        private _isCategoriesModeEdition;
        private _isFavorisModeEdition;
        static $inject: string[];
        constructor($q: ng.IQService, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
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
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, favorisService: AjoutFavorisCommun.FavorisService, lireEcrireService: AjoutFavorisCommun.LireEcrireService, applicationsContexteMobiliteService: ApplicationsContexteMobilite.ApplicationsContexteMobiliteService);
        listeFavorisApplications: ICatalogueApplications;
        catalogueApplications: ICatalogueApplications;
        initialisationFavoris: (categories?: any, favoris?: any) => ng.IPromise<string>;
        private setApplicationsContexteMobiliteAutorisations;
        private applyApplicationMobiliteCodeMobilite;
        private getFavorisListeApplications;
        private updateFavorisApplications;
        private verifierCodeHabilitation;
        private getListeApplications;
        lireCatalogueApplications: () => MyWay.Services.IPromesse<any>;
    }
}
