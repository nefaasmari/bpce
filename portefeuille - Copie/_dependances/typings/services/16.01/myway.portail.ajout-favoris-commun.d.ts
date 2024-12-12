
declare module AjoutFavorisCommun {
    var app: any;
}

declare module AjoutFavorisCommun {
    interface IModalScope extends ng.IRootScopeService {
        _closeModalEtat: boolean;
    }
    class ModalCategoriesControleur {
        private $q;
        private $rootScope;
        private $filter;
        private modalCategoriesService;
        private mwNotificationService;
        private favorisService;
        private lireEcrireService;
        static $inject: string[];
        selectedCategorie: ICategories;
        private _closeModalEtat;
        constructor($q: ng.IQService, $rootScope: IModalScope, $filter: ng.IFilterService, modalCategoriesService: AjoutFavorisCommun.ModalCategoriesService, mwNotificationService: MyWay.UI.IMwNotificationService, favorisService: FavorisService, lireEcrireService: LireEcrireService);
        closeModalEtat: boolean;
        /**
         * Méthode pour ajouter ou déplacer un favoris
         */
        ajouterFavori: (tuileSelected: IFavoris, categorieSelected: ICategories) => ng.IPromise<boolean>;
        enregistrerFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        closeModal: () => void;
        getTitle: () => string;
    }
}

declare module AjoutFavorisCommun {
    interface ICategories {
        id: string;
        titre: string;
        position: number;
        shortTitre?: string;
    }
    interface IFavoris {
        id?: string;
        titre: string;
        position?: number;
        categorieId: string;
        disabled?: boolean;
        description?: string;
        marquage?: boolean;
        picto?: string;
        libelleNomApplication?: string;
        libelleDescriptionApplication?: string;
        codeApplication?: string;
        codeHabilitation?: string;
        favorisPerso?: boolean;
        lien?: string;
    }
    interface IRouteParams {
        idCategorieActive: string;
    }
    class FavorisService {
        private $q;
        private $filter;
        private $location;
        private $timeout;
        private lireEcrireService;
        private _categories;
        private _favoris;
        private _idCategorieActive;
        private _titreCategorie;
        private _idCategorieClick;
        private _routeParams;
        URL_FAVORIS: string;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, $location: ng.ILocationService, $timeout: ng.ITimeoutService, lireEcrireService: AjoutFavorisCommun.LireEcrireService);
        categories: Array<ICategories>;
        favoris: IFavoris;
        routeParams: IRouteParams;
        titreCategorie: string;
        idCategorieActive: string;
        idCategorieClick: string;
        initialisation: (categories?: ICategories[], favoris?: IFavoris) => ng.IPromise<string>;
        initialisationEchec: () => void;
        definirTitreEtCategorieActive: () => void;
        /**
         * Ajouter une catégorie à la liste
         * @function
         * @param {string} titre
         * @return {void}
         */
        ajouterCategorie: (titre?: string) => boolean;
        /**
         * Changer l'ordre des catégories
         * @function
         * @param {string} method
         * @param {string} id
         * @return {boolean}
         */
        deplacerCategorie: (method: string, id: string) => void;
        /**
         * Animation du titre des tuiles favoris lorsque l'utilisateur ordonne ses favoris
         * @function
         * @param {string} tuileId
         * @return {void}
         */
        private animationDeplacerCategorie;
        /**
         * Supprimer un catégorie
         * @function
         * @param {string} id
         * @return {void}
         */
        supprimerCategorie: (id: string) => ICategories[];
        /**
         * Retourne les Favoris associés à la catégorie sélectionnée
         * @function
         * @param {string} idcategorie
         * @return {Array<AjoutFavorisCommun.IFavoris>} getListeFavoris
         */
        getListeFavorisByCategorieId: (idcategorie?: string) => IFavoris[];
        /**
         * Déplacer la tuile (favoris) sélectionnée à Gauche ou à Droite
         * @function
         * @param {IFavoris} tuile
         * @param {Array<IFavoris>} getListeFavorisByCategorieId
         * @param {string} direction
         * return {void}
         */
        deplacerFavoris: (tuile: IFavoris, listeFavorisByCategorieId: IFavoris[], direction: string) => void;
        /**
         * Animation du titre des tuiles favoris lorsque l'utilisateur ordonne ses favoris
         * @function
         * @param {string} tuileId
         * @return {void}
         */
        private animationDeplacerTuile;
        /**
         * Ajouter un favori dans la catégorie sélectionnée
         * @function
         * @param {IFavoris} favori
         * @param {boolean} save
         * @return {boolean}
         */
        ajouterFavoris: (favori: IFavoris, save?: boolean) => ng.IPromise<boolean>;
        /**
         * Déplace le favoris sélectionné par l'utilisateur dans la catégorie de destination
         * Ajoute une clé "shortitre" dans l'objet pour créer une version courte du titre dans les boutons
         * @function
         * @param {any} tuileSelected
         * @param {ICategories} categorieSelected
         * @return {boolean} retour
         */
        deplacerFavorisVersCategorie: (tuileSelected: any, categorieSelected: ICategories) => boolean;
        ordonnerFavoris: (categorieId: string) => void;
        /**
         *
         *         Méthodes UTILITAIRES de la classe
         *
         */
        /**
         * Retourne le titre tronqué pour limiter la taille du libellé
         * @function
         * @param {string} myString
         * @return {string}
         */
        private tronquerChaine;
        /**
         * Retourne la chaine de caractères passée en paramètre AVEC les caractères spéciaux échappés
         * @function
         * @param {string} myString
         * @return {string}
         */
        private addslashes;
        /**
         * Retourne la chaine passé en paramétre en lettre bas de casse et la la 1ère lettre en capitale
         * @param {string} myString
         * @return {string} newString
         */
        private titleCase;
    }
}

declare module AjoutFavorisCommun {
    interface IFavorisClesObligatoires {
        id: string;
        titre: string;
        categorieId: string;
        position: string;
    }
    interface IFavorisClesFacultatives {
        disabled: string;
        description: string;
        marquage: string;
        picto: string;
        codeApplication: string;
        codeHabilitation: string;
        favorisPerso: string;
        lien: string;
    }
    interface IDescripteur {
        timestamp: string;
        countRecords: number;
    }
    class LireEcrireService {
        private $q;
        private serviceAgentExtended;
        private $filter;
        private _nouveauxFavoris;
        static prefixCategories: string;
        static prefixFavoris: string;
        static nomCategorieDefaut: string;
        /**
         * Liste des clés OBLIGATOIRES pour créer, modifier et manipuler l'object "favori"
         */
        static favorisListeClesValeursObligatoire: IFavorisClesObligatoires;
        /**
         * Liste des clés FACULTATIVES pour créer, modifier et manipuler l'object "favori"
         */
        static favorisListeClesValeursFacultatives: IFavorisClesFacultatives;
        static favorisListeClesValeurs: any;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $filter: ng.IFilterService);
        setNouveauFavoris: (nouveauFavori: IFavoris) => void;
        getNouveauFavoris: () => IFavoris[];
        /**
         * Charger les catégories à partir du service ServiceAgentExtended.Preferences.LirePreference
         * @function
         * @return {object} defered promise
         */
        lireCategories: () => ng.IPromise<ICategories>;
        /**
         * Charger les favoris à partir du service ServiceAgentExtended.Preferences.LirePreference
         * @function
         * @return {object} defered promise
         */
        lireFavoris: () => ng.IPromise<IFavoris[]>;
        /**
         * Sauvegrader les catégories à partir du service ServiceAgentExtended.Preferences.EcrirePreference
         * @function
         * @param {abject} datas
         * @return {object} defered promise
         */
        ecrireCategories: (categories: ICategories[]) => ng.IPromise<string>;
        enregistrerFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        /**
         * Ajouter un favori dans la catégorie sélectionnée
         * @function
         * @param {IFavoris} favori
         * @param {boolean} save
         * @return {boolean}
         */
        ajouterFavoris: (favori: IFavoris, favoris: IFavoris) => boolean;
        /**
         * Sauvegrader les favoris à partir du service ServiceAgentExtended.Preferences.EcrirePreference
         * @function
         * @param {abject} datas
         * @return {object} defered promise
         */
        ecrireFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        creerCategorieDefaut: () => ng.IPromise<any>;
        /**
         * Vérification du descripteur des enregistrements des catégories et favoris
         * La fonction vérifie si l'objet n'est pas null
         * et posséde les clés nécessaire pour effectuer la lecture des enregistrements suivants
         * @function
         * @param {abject} descripteur
         * @return {boolean} retour
         */
        private verifierDescripteur;
        private lireEnregistrementsIndex;
        /**
         * Découpe de la chaine de caractères (string) contenant les données à sauvegarder
         * Le contenu (string) envoyé en paramétre est décpoupé puis stocké dans un tableau.
         * La limite imposé par le service REST est 500 caractères pour chaque ligne du tableau.
         * @function
         * @param {string} datas
         * @return {array} myArray
         */
        private decouperDatas;
        /**
         * Optimisation de la longiueur des noms clés
         * Supprimer les clés parasites: la clé générée par Angular $$hashkey est supprimée
         * Pour réduire l'occupation des informations, les labels des clés sont "minifiés"
         * Par exemple : la label de la clé "categorieId" est renommé "c_id"
         *               le label de la clé "position" est renommé "p"
         * @function
         * @param {object} favoris
         * @param {string} operation
         * @return {object} retourObj
         */
        private optimiserTailleFavoris;
        private favorisReduireTailleCle;
        /**
         *
         *         Méthodes UTILITAIRES de la classe
         *
         */
        /**
         * Fusionne 2 objects simple (clé + valeur) et retourne le nouvel objet
         * @function
         * @param {array} objects
         * @return {object} newObject
         */
        private mergeObject;
        /**
         * Retourne la chaine de caractères passée en paramètre AVEC les caractères spéciaux échappés
         * @function
         * @param {string} myString
         * @return {string} myString
         */
        private addslashes;
        /**
         * Retourne la chaine de caractères passée en paramètre SANS les slashes \ de protection
         * @function
         * @param {string} myString
         * @return {string} myString
         */
        private stripslashes;
        chainePropre: (myString: string) => string;
        /**
         * Retourne un timestamp à la manière de MySQL sous une chaine de caractères de type : 20151028162147638 (2015/10/28 16:21:47 638ms)
         * @function
         * @return {string}
         */
        getTimeStamp: () => string;
        getUniqueId: () => string;
        erasePreferences: (compteur?: number) => ng.IPromise<any>;
        ecrire: (key: string, value: string) => any;
        lire: (key: string) => any;
    }
}

declare module AjoutFavorisCommun {
    class ModalCategoriesService {
        private $q;
        private $timeout;
        private favorisService;
        private lireEcrireService;
        selectedTuile: IFavoris;
        tuileText: string;
        private _categories;
        private _favoris;
        private _ajout;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService, favorisService: FavorisService, lireEcrireService: LireEcrireService);
        categories: Array<ICategories>;
        favoris: IFavoris;
        ajout: boolean;
        /**
         * Définir l'ID de l'objet tuile pour cible dans le DOM l'élément ou sera positionnée la modal
         * @function
         * @param {IFavoris} tuile
         * @return {string} idcommun
         */
        getIdCommun: (tuile: IFavoris) => string;
        /**
         * Ouvre la modal et affiche la combo (liste déroulante) contenant la liste des catégories
         * @function
         * @param {IFavoris} tuile
         * @param { Array<ICategories>} categories
         * @param {IFavoris} favoris
         * @param {ajout} boolean
         * @return {void}
         */
        openModal: (tuile: IFavoris, categories: ICategories[], favoris: IFavoris, ajout: boolean, bulle?: boolean) => void;
        closeModal: () => void;
    }
}
