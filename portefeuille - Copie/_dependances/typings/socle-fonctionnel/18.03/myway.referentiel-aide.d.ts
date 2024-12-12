
declare module myway.referentielAide {
    var app: any;
}

declare module myway.referentielAide {
    class CreationCtrl {
        private $scope;
        private habilitationService;
        private champService;
        private mwNotificationService;
        private initialisationService;
        static $inject: string[];
        nom: string;
        libelle: string;
        afficherCreation: boolean;
        private listeChamps;
        private existeDeja;
        constructor($scope: ng.IScope, habilitationService: HabilitationService, champService: ChampService, mwNotificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        annulerCreation(): void;
        allerModuleCreation(): void;
        creerChamp(): void;
        verifNomChamp(nomChamp: string): void;
    }
}

declare module myway.referentielAide {
}

declare module myway.referentielAide {
    class RechercheCtrl {
        private $scope;
        private habilitationService;
        private infobulleService;
        private champService;
        private mwNotificationService;
        private initialisationService;
        static $inject: string[];
        private afficheCriteres;
        private listeInfoBulles;
        private infoBulleSelect;
        listeChamps: model.champ.ChampDTO[];
        private nombreResultat;
        private champSelect;
        private tableauRechercheAvancee;
        datPublication: Date;
        datFinPublication: Date;
        archive: boolean;
        enCours: boolean;
        aVenir: boolean;
        permanent: boolean;
        private rechercheEnCours;
        constructor($scope: ng.IScope, habilitationService: HabilitationService, infobulleService: InfobulleService, champService: ChampService, mwNotificationService: MyWay.UI.IMwNotificationService, initialisationService: InitialisationService);
        /**
         * Permet de differencier la recherche avancée de la recherche simple
         */
        afficherCriteres(): void;
        /**
         * Méthode permettant de récuperer les/l'infobulle(s) à partir de l'idChamp
         * @param idChamp : entier
         */
        getInfobulle(id: number): void;
        /**
         * Méthode permettant de récupérer toutes les infobulles et de les stocker dans une variable pour réutilisation
         */
        private getInfobulles();
        /**
         * Méthode permettant d'éffectuer la recherche avancée en appellant toutes les méthodes concernés que ce soit pour le filtrage ou la création de tableau
         */
        rechercheAvancee(): void;
        /**
         * Méthode permettant de faire le trie entre les infobulles en référence à/aux état(s) sélectionné(s)
         * @param infobulle : model.infobulle.InfoBulleDTO
         */
        private triEtat(infobulle);
        /**
         * Méthode permettant de filtrer les infobulles grâce aux options, date de publication, état( archivé, en cours ... )
         * @param listeInfobulles : model.infobulle.InfoBulleDTO[]
         */
        private filtreTableau(listeInfobulles);
        /**
         * Méthode permettant de créer le tableau de recherche avancée en lui passant en paramètre une liste d'infobulle
         * @param infobulles : liste d'infobulle
         */
        private creerTableau(infobulles);
    }
}

declare module myway.referentielAide {
    function Image(): ng.IDirective;
}

declare module model.champ {
    class ChampDTO {
        id: number;
        nom: string;
        libelle: string;
        constructor(id: number, nom: string, libelle: string);
    }
}

declare module model.infobulle {
    class InfobulleDTO {
        id: number;
        idChamp: number;
        etablissement: string;
        processus: string;
        etape: string;
        dateDebut: Date;
        dateFin: Date;
        majUser: string;
        majDate: Date;
        dateFinNouveaute: Date;
        exclusion: Array<string>;
        contenu: string;
        image: string;
        token: boolean;
        nomChamp: string;
        nouveaute: boolean;
        constructor();
    }
}

declare module myway.referentielAide {
    class DateOutil {
        static TODAY: Date;
        static estArchive(dateFin: Date): boolean;
        static estEnCours(dateDebut: string | Date, dateFin: string | Date): boolean;
        static estAVenir(dateDebut: string | Date): boolean;
        static estPermanent(dateFin: string | Date): boolean;
    }
}

declare module myway.referentielAide {
    class ChampService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        GetChamps(): ng.IPromise<model.champ.ChampDTO[]>;
        /**
         * Méthode permettant de créer un champ
         * @param infobulle : Infobulle
         */
        postChamp(champ: model.champ.ChampDTO): ng.IPromise<model.champ.ChampDTO>;
    }
}

declare module myway.referentielAide {
    class HabilitationService {
        protected serviceAgentExtended: MyWay.Services.ServiceAgentExtended;
        protected $timeout: ng.ITimeoutService;
        protected $location: ng.ILocationService;
        static $inject: string[];
        habilitation: boolean;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService, $location: ng.ILocationService);
        checkHabilitation(): ng.IPromise<any>;
        getHabilitation(): boolean;
    }
}

declare module myway.referentielAide {
    class InfobulleService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Méthode permettant de récuperer la liste des infobulles
         */
        getInfobulles(): ng.IPromise<Object[]>;
        /**
         * Méthode permettant de récuperer l'infobulle à partir de l'idChamp
         * @param idChamp : entier
         */
        getInfobulle(idChamp: number): ng.IPromise<model.infobulle.InfobulleDTO[]>;
        /**
         * Détermine si l'infobulle courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns estPassee: boolean - Le résultat
         */
        estPasse(infobulle: model.infobulle.InfobulleDTO): boolean;
        /**
         * Détermine si l'infobulle courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns enCours: boolean - Le résultat
         */
        estEnCours(infobulle: model.infobulle.InfobulleDTO): boolean;
        /**
         * Détermine si l'infobulle permanente courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns enCoursPermanent: boolean - Le résultat
         */
        estPermanentEnCours(infobulle: model.infobulle.InfobulleDTO): boolean;
        /**
         * Détermine si l'infobulle courante est à venir
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns aVenir: boolean - Le résultat
         */
        estAVenir(infobulle: model.infobulle.InfobulleDTO): boolean;
        /**
         * Détermine si l'infobulle courante est permanente
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns permanent: boolean - Le résultat
         */
        estPermanent(infobulle: model.infobulle.InfobulleDTO): boolean;
    }
}

declare module myway.referentielAide {
    class InitialisationService {
        private serviceAgentExtended;
        private $timeout;
        private habilitationService;
        private champService;
        private infobulleService;
        private mwNotificationService;
        static $inject: string[];
        initPromise: ng.IPromise<any>;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService, habilitationService: HabilitationService, champService: ChampService, infobulleService: InfobulleService, mwNotificationService: MyWay.UI.IMwNotificationService);
        init(): ng.IPromise<any>;
    }
}

declare module myway.referentielAide {
    function entete(): ng.IDirective;
}
