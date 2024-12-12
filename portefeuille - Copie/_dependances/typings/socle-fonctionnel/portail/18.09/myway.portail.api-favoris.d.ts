
declare module myway.portail.favoris {
    var app: any;
}

declare module myway.portail.favoris {
}

declare module myway.portail.favoris {
}

declare module myway.portail.favoris {
}

declare module myway.portail.favoris {
    interface ICategoriePerso {
        id: string;
        titre: string;
        position: number;
    }
}

declare module myway.portail.favoris {
    class CategoriePersoService {
        private $q;
        private $filter;
        private agentService;
        private logger;
        private preferenceService;
        private PREFERENCE_KEY;
        NOM_CATEGORIE_DEFAUT: string;
        NOM_NOUVELLE_CATEGORIE: string;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: myway.core.AgentService, logger: myway.core.LoggerService, preferenceService: preferences.PreferenceService);
        /**
         * Renvoie les catégories
         */
        getCategories(): ng.IPromise<ICategoriePerso[]>;
        /**
         * Renvoie les catégories. Si l'utilisateur n'a pas de catégorie, une catégorie par défaut sera créée.
         */
        getCategoriesWithDefault(): ng.IPromise<ICategoriePerso[]>;
        /**
         * Renvoie une catégorie.
         */
        getCategorie(id: string): ng.IPromise<ICategoriePerso>;
        /**
         *
         */
        saveCategories(categories: ICategoriePerso[]): ng.IPromise<void>;
        /**
         * Initialisation des catégories avec une catégorie par défaut
         * Attention: cela écrase toutes les catégories existantes !
         */
        initCategorieDefaut(): ng.IPromise<void>;
        /**
         * Générer un ID unique de catégorie
         */
        generateId(): string;
    }
}

declare module myway.portail.favoris {
}

declare module myway.portail.favoris {
    class FavoriMetierService {
        private $q;
        private $filter;
        private agentService;
        private preferenceService;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: myway.core.AgentService, preferenceService: preferences.PreferenceService);
        /**
         * Recherche les favoris métiers de l'utilisateur.
         */
        searchUserFavorites(): ng.IPromise<myway.ressources.portailmyway.recherchefavori.ICategorieMetier[]>;
        /**
         * Recherche les favoris métiers.
         */
        searchFavorites(params: myway.ressources.portailmyway.recherchefavori.IGetQueryParams): ng.IPromise<myway.ressources.portailmyway.recherchefavori.ICategorieMetier[]>;
        /**
         * Renvoie une catégorie avec ses favoris.
         */
        getCategorie(id: number): ng.IPromise<myway.ressources.portailmyway.recherchefavori.ICategorieMetier>;
    }
}

declare module myway.portail.favoris {
    interface IFavorisCollection {
        [codeCategory: string]: IFavoris[];
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
        libelleHabilitation?: string;
        libelleNomApplication?: string;
        libelleDescriptionApplication?: string;
        codeApplication?: string;
        codeHabilitation?: string;
        favorisPerso?: boolean;
        lien?: string;
        libelleDeviceCompatible?: string;
        codeVisibiliteApplication?: number;
    }
}

declare module myway.portail.favoris {
    class FavoriPersoService {
        private $q;
        private $filter;
        private preferenceService;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, preferenceService: preferences.PreferenceService);
    }
}

declare module myway.portail.favoris.preferences {
    interface IDescripteur {
        timestamp: string;
        countRecords: number;
    }
}

declare module myway.portail.favoris.preferences {
    class PreferenceService {
        private $q;
        private $filter;
        private agentService;
        private logger;
        static $inject: string[];
        constructor($q: ng.IQService, $filter: ng.IFilterService, agentService: myway.core.AgentService, logger: myway.core.LoggerService);
        read<T>(key: string): ng.IPromise<T[]>;
        write<T>(key: string, items: T[]): ng.IPromise<void>;
        private readDescripteur(key);
        private writeDescripteur(key, countRecords);
        private readData<T>(key, descripteur);
        /**
         * Découpe de la chaine de caractères (string) contenant les données à sauvegarder
         * La limite imposée par le service REST est 500 caractères pour chaque string.
         */
        private splitValue(value);
        private getKeyDescripteur(key);
    }
}
