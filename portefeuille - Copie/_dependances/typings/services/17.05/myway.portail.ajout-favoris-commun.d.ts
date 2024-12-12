
declare module ajoutFavorisCommun {
    var app: any;
}

declare module ajoutFavorisCommun {
    interface IModalScope extends ng.IRootScopeService {
        _closeModalEtat: boolean;
    }
    class ModalCategoriesControleur {
        private $q;
        private $rootScope;
        private $filter;
        private $window;
        private modalCategoriesService;
        private mwNotificationService;
        private favorisService;
        private lireEcrireService;
        static $inject: string[];
        selectedCategorie: ICategories;
        constructor($q: ng.IQService, $rootScope: IModalScope, $filter: ng.IFilterService, $window: ng.IWindowService, modalCategoriesService: ModalCategoriesService, mwNotificationService: MyWay.UI.IMwNotificationService, favorisService: FavorisService, lireEcrireService: LireEcrireService);
        closeModalEtat: boolean;
        /**
         * Ajouter ou déplacer un favori dans une catégorie
         * @function
         * @param {IFavoris} tuileSelected
         * @param {ICategories} categorieSelected
         * @return {ng.IPromise<boolean>}
         */
        ajouterFavori: (tuileSelected: IFavoris, categorieSelected: ICategories) => ng.IPromise<boolean>;
        /**
         * Enregistrer les favoris dans les préférences utilisateurs
         * @function
         * @param {IFavoris} favoris
         * @return {ng.IPromise<string>}
         */
        enregistrerFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        /**
         * Fermer la fenêtre modal
         * @function
         * @return {void}
         */
        closeModal: () => void;
        /**
         * Définir le titre de la fenêtre modal (ajouter ou déplacer)
         * @function
         * @return {string}
         */
        getTitle: () => string;
    }
}

declare module ajoutFavorisCommun {
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
        private lireEcrireService;
        private _categories;
        private _favoris;
        private _idCategorieActive;
        private _titreCategorie;
        private _idCategorieClick;
        private _routeParams;
        URL_FAVORIS: string;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, lireEcrireService: LireEcrireService);
        categories: Array<ICategories>;
        favoris: IFavoris;
        routeParams: IRouteParams;
        titreCategorie: string;
        idCategorieActive: string;
        idCategorieClick: string;
        /**
         * Initialisation des données au chargement de la SPA :
         * lecture des catégories et favoris de l'utilsateur stockés dans les préférences
         * @function
         * @param {Array<ICategories>} categories
         * @param {IFavoris} favoris
         * @return {ng.IPromise<string>}
         */
        initialisation: (categories?: ICategories[], favoris?: IFavoris) => ng.IPromise<string>;
        /**
         * initialisationEchec permet la création d'objets vides pour peupler les catégories
         * et les favoris de l'utilisateur lorsque le service REST est KO
         * @function
         * @return {void}
         */
        initialisationEchec: () => void;
        /**
         * Définir un titre et une catégories actifs
         * @function
         * @return {void}
         */
        definirTitreEtCategorieActive: () => void;
        /**
         * Ajouter une catégorie à la liste
         * @function
         * @param {string} titre
         * @return {boolean}
         */
        ajouterCategorie: (titre?: string) => boolean;
        /**
         * Changer l'ordre des catégories
         * @function
         * @param {string} method
         * @param {string} id
         * @return {string}
         */
        deplacerCategorie: (method: string, id: string) => string;
        /**
         * Supprimer un catégorie
         * @function
         * @param {string} id
         * @return {Array<ICategories>}
         */
        supprimerCategorie: (id: string) => ICategories[];
        /**
         * Retourne les Favoris associés à la catégorie sélectionnée
         * @function
         * @param {string} idcategorie
         * @return {Array<IFavoris>}
         */
        getListeFavorisByCategorieId: (idcategorie?: string) => IFavoris[];
        /**
         * Déplacer la tuile (favoris) sélectionnée à Gauche ou à Droite
         * @function
         * @param {IFavoris} tuile
         * @param {Array<IFavoris>} listeFavorisByCategorieId
         * @param {string} direction
         * return {string}
         */
        deplacerFavoris: (tuile: IFavoris, listeFavorisByCategorieId: IFavoris[], direction: string) => string;
        /**
         * Ajouter un favori dans la catégorie sélectionnée
         * @function
         * @param {IFavoris} favori
         * @param {boolean} save
         * @return {ng.IPromise<boolean>}
         */
        ajouterFavoris: (favori: IFavoris, save?: boolean) => ng.IPromise<boolean>;
        /**
         * Déplace le favoris sélectionné par l'utilisateur dans la catégorie de destination
         * Ajoute une clé "shortitre" dans l'objet pour créer une version courte du titre dans les boutons
         * @function
         * @param {any} tuileSelected (interface IFavoris n'est pas pris en compte par la méthode _.remove de Lodash)
         * @param {ICategories} categorieSelected
         * @return {boolean}
         */
        deplacerFavorisVersCategorie: (tuileSelected: any, categorieSelected: ICategories) => boolean;
        /**
         * Trier les favoris sur la clé "position"
         * et regénérer un index pour la clé "position"
         * @function
         * @param {string} categorieId
         * @return {void}
         */
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
         * @param {number} caracteresMaxi
         * @return {string}
         */
        private tronquerChaine;
        /**
         * Retourne la chaine de caractères passée en paramètre AVEC les caractères spéciaux échappés
         * @function
         * @param {string} myString
         * @return {string}
         */
        /**
         * Retourne la chaine passé en paramétre en lettre bas de casse et la la 1ère lettre en capitale
         * @param {string} str
         * @return {string}
         */
        private titleCase;
    }
}

declare module ajoutFavorisCommun {
    interface IFavorisClesObligatoires {
        id: string;
        titre: string;
        categorieId: string;
        position: string;
    }
    interface IFavorisClesFacultatives {
        disabled?: string;
        description?: string;
        marquage?: string;
        picto?: string;
        codeApplication: string;
        codeHabilitation?: string;
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
         * Liste des clés OBLIGATOIRES pour créer, modifier et manipuler l'objet "favoris"
         */
        static favorisListeClesValeursObligatoire: IFavorisClesObligatoires;
        /**
         * Liste des clés FACULTATIVES pour créer, modifier et manipuler l'objet "favoris"
         */
        static favorisListeClesValeursFacultatives: IFavorisClesFacultatives;
        static favorisListeClesValeurs: any;
        static $inject: string[];
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $filter: ng.IFilterService);
        /**
         * Ajouter des nouveaux favoris dans la liste initiale de l'utilisateur
         * @function
         * @param {IFavoris} nouveauFavori
         * @return {ng.IPromise<boolean>}
         */
        ajouterNouveauFavoris: (nouveauFavori: IFavoris) => void;
        /**
         * Retourne la liste des nouveaux favoris (ajouter par l'utilisateur à sa liste initiale)
         * @function
         * @return { Array<IFavoris>}
         */
        getNouveauFavoris: () => IFavoris[];
        /**
         * Charger les catégories à partir du service ServiceAgentExtended.Preferences.LirePreference
         * @function
         * @return {ng.IPromise<ICategories>}
         */
        lireCategories: () => ng.IPromise<ICategories>;
        /**
         * Charger les favoris à partir du service ServiceAgentExtended.Preferences.LirePreference
         * @function
         * @return {ng.IPromise<Array<IFavoris>>}
         */
        lireFavoris: () => ng.IPromise<IFavoris[]>;
        /**
         * Sauvegarder les catégories à partir du service ServiceAgentExtended.Preferences.EcrirePreference
         * @function
         * @param {Array<ICategories>} categories
         * @return {ng.IPromise<string>}
         */
        ecrireCategories: (categories: ICategories[]) => ng.IPromise<string>;
        /**
         * Enregistrer les favoris dans les préférences de l'utilisateur
         * @function
         * @param {IFavoris} favoris
         * @return {ng.IPromise<string>}
         */
        enregistrerFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        /**
         * Ajouter un favori dans la catégorie sélectionnée
         * @function
         * @param {IFavoris} favori
         * @param {IFavoris} favoris
         * @return {boolean}
         */
        ajouterFavoris: (favori: IFavoris, favoris: IFavoris) => boolean;
        /**
         * Sauvegarder les favoris à partir du service ServiceAgentExtended.Preferences.EcrirePreference
         * @function
         * @param {IFavoris} favoris
         * @return {ng.IPromise<string>}
         */
        ecrireFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        /**
         * Création et enregistrement d'une catégorie par défaut.
         * @function
         * @return {ng.IPromise<any>}
         */
        creerCategorieDefaut: () => ng.IPromise<any>;
        /**
         * Vérification du descripteur des enregistrements des catégories et favoris
         * La méthode vérifie si l'objet n'est pas null et si il contient
         * les clés nécessaires pour effectuer la lecture des enregistrements suivants
         * @function
         * @param {string} descripteur
         * @return {IDescripteur} retourDescripteur
         */
        private verifierDescripteur;
        /**
         * Retourne un tableau contenant les promises nécessaires à la lecture
         * de TOUS les enregistrements des catégories et favoris
         * @function
         * @param {string} prefixIndex
         * @param {number} nbRecords
         * @return {Array<string[]>} myPromises
         */
        private lireEnregistrementsIndex;
        /**
         * Découpe de la chaine de caractères (string) contenant les données à sauvegarder
         * Le contenu (string) envoyé en paramétre est décpoupé puis stocké dans un tableau.
         * La limite imposé par le service REST est 500 caractères pour chaque ligne du tableau.
         * @function
         * @param {string} datas
         * @return {Array<string>} myArray
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
         * @return {any} retourObj
         */
        private optimiserTailleFavoris;
        /**
         * Retourne les clés de l'objet dans une version "minifiée" selon le contexte de l'opération (lire ou écrire)
         * @function
         * @param {IFavoris} favoris
         * @param {string} operation
         * @return {any} objetRetour
         */
        private favorisReduireTailleCle;
        /**
         *
         *         Méthodes UTILITAIRES de la classe
         *
         */
        /**
         * Fusionne 2 objects simple (clé + valeur) et retourne le nouvel objet
         * @function
         * @param {any} arrayOfObjects
         * @return {Array<string[]>} newObject
         */
        private mergeObject;
        /**
         * Retourne la chaine de caractères passée en paramètre AVEC les caractères spéciaux échappés
         * @function
         * @param {string} myString
         * @return {string} myString
         */
        /**
         * Retourne la chaine de caractères passée en paramètre SANS les slashes \ de protection
         * @function
         * @param {string} myString
         * @return {string} myString
         */
        /**
         * Nettoyer une chaine de caractères en supprimant les balises HTML + ramplacement de la balise HTML entities "&#39;"
         * @function
         * @param {string} myString
         * @return {string}
         */
        chainePropre: (myString: string) => string;
        /**
         * Retourne un timestamp à la manière de MySQL sous une chaine de caractères de type : 20151028162147638 (2015/10/28 16:21:47 638ms)
         * @function
         * @return {string}
         */
        getTimeStamp: () => string;
        /**
         * Retourner un Id unique
         * @function
         * @return {string}
         */
        getUniqueId: () => string;
        /**
         * Effacer les préférences utilisateurs : catégories et favoris
         * @function
         * @param {number} compteur
         * @return {ng.IPromise<any>}
         */
        erasePreferences: (compteur?: number) => ng.IPromise<any>;
    }
}

declare module ajoutFavorisCommun {
    class ModalCategoriesService {
        selectedTuile: IFavoris;
        tuileText: string;
        private _categories;
        private _favoris;
        private _ajout;
        constructor();
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
         * @param {Array<ICategories>} categories
         * @param {IFavoris} favoris
         * @param {ajout} boolean
         * @param {ajout} bulle
         * @return {void}
         */
        openModal: (tuile: IFavoris, categories: ICategories[], favoris: IFavoris, ajout: boolean, bulle?: boolean) => void;
    }
}

declare module ajoutFavorisCommun {
    class ModalCategoriesSelectionControleur {
        private $q;
        private $rootScope;
        private $filter;
        private $window;
        private modalCategoriesService;
        private mwNotificationService;
        private favorisService;
        private lireEcrireService;
        static $inject: string[];
        selectedCategorie: ICategories;
        constructor($q: ng.IQService, $rootScope: IModalScope, $filter: ng.IFilterService, $window: ng.IWindowService, modalCategoriesService: ModalCategoriesService, mwNotificationService: MyWay.UI.IMwNotificationService, favorisService: FavorisService, lireEcrireService: LireEcrireService);
        closeModalEtat: boolean;
        /**
         * Ajouter ou déplacer un favori dans une catégorie
         * @function
         * @param {IFavoris} tuileSelected
         * @param {ICategories} categorieSelected
         * @return {ng.IPromise<boolean>}
         */
        ajouterFavori: (tuileSelected: IFavoris, categorieSelected: ICategories) => ng.IPromise<boolean>;
        /**
         * Enregistrer les favoris dans les préférences utilisateurs
         * @function
         * @param {IFavoris} favoris
         * @return {ng.IPromise<string>}
         */
        enregistrerFavoris: (favoris: IFavoris) => ng.IPromise<string>;
        /**
         * Fermer la fenêtre modal
         * @function
         * @return {void}
         */
        closeModal: () => void;
        /**
         * Définir le titre de la fenêtre modal (ajouter ou déplacer)
         * @function
         * @return {string}
         */
        getTitle: () => string;
    }
}

declare module ajoutFavorisCommun.Directive {
    function ModalCategoriesSelectionDirective(): ng.IDirective;
}
