
declare module myway.referentielAide {
    var app: any;
}

declare module myway.referentielAide {
}

declare module myway.referentielAide {
}

declare module myway.referentielAide {
}

declare module myway.referentielAide {
    class RechercheCtrl {
        private $scope;
        private infobulleService;
        private champService;
        static $inject: string[];
        private apercuInfobulle;
        private afficheCriteres;
        private listeInfoBulles;
        private infoBulleSelect;
        private listeChamps;
        private nombreResultat;
        private champSelect;
        private scope;
        constructor($scope: ng.IScope, infobulleService: InfobulleService, champService: ChampService);
        /**
         * Permet de differencier la recherche avancée de la recherche simple
         */
        afficherCriteres(): void;
        /**
         * Méthode permettant de récuperer les/l'infobulle(s) à partir de l'idChamp
         * @param idChamp : entier
         */
        getInfobulle(id: number): void;
        creerApercu(infobulle: model.infobulle.InfobulleDTO): model.apercu.infobulle.ApercuInfobulle;
    }
}

declare module myway.referentielAide {
    function Image(): ng.IDirective;
}

declare module model.apercu.infobulle {
    class ApercuInfobulle {
        private type;
        private picto;
        private ouvertureBlock;
        private message1;
        private open;
        constructor(message: string);
    }
}

declare module model.champ {
    class ChampDTO {
        id: number;
        nom: string;
        libelle: string;
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
        static estPassee(dateFin: Date): boolean;
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
        GetChamps(): ng.IPromise<model.champ.ChampDTO>;
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
         * Méthode permettant de créer une infobulle
         * @param infobulle : Infobulle
         */
        putInfobulle(infobulle: model.infobulle.InfobulleDTO): ng.IPromise<model.infobulle.InfobulleDTO>;
        /**
         * Détermine si l'infobulle courante est en cours
         * @param infobulle: Infobulle - L'infobulle à tester
         * @returns estPassee: boolean - Le résultat
         */
        estPasse(infobulle: model.infobulle.InfobulleDTO): boolean;
    }
}

declare module myway.referentielAide {
    function entete(): ng.IDirective;
}
