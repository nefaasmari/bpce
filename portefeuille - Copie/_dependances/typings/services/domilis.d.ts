
declare module myway.c0410.domilis {
    var domilisModule: any;
}

declare module myway.c0410.domilis {
    class DomilisControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private domilisService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        private domilis;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, domilisService: IDomilisService);
        private determinerMode(mode);
        /**
         * Initialisation de l'objet IDomilis à enregistrer ou à clôturer.
         */
        private initialiserDomilis();
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service domilis pour l'ouverture d'un service.
         */
        private enregistrerDomilis();
        /**
         * Appel du service domilis pour la clôture d'un service.
         */
        private cloturerDomilis();
    }
}

declare module myway.c0410.domilis {
    var mwDomilis: ng.IDirective;
}

declare module myway.c0410.domilis {
    interface IDomilis {
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
    }
    /**
     *  La classe encapsulant la référence du produit domilis généré après l'ouverture du P/S.
     */
    class ReferenceDomilis extends myway.c0410.commun.ObjetGenerique {
        /**
         * La référence du produit domilis généré après l'ouverture du P/S.
         */
        referenceProduitService: string;
        constructor(idegps: number);
    }
}

declare module myway.c0410.domilis {
    interface IDomilisService {
        /**
         * Service permettant de créer/ouvrir un produit domilis.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IDomilis} domilis L'objet domilis à créer/enregistrer.
         *
         * @return {ng.IPromise<IDomilis>} L'objet qui a été enregistré.
         */
        ouvertureDomilis(numeroOffreSouscrite: number, domilis: IDomilis): ng.IPromise<IDomilis>;
        /**
         * Service permettant de supprimer/clôturer un produit domilis.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IDomilis} domilis L'objet domilis à supprimer/clôturer.
         *
         * @return {ng.IPromise<IDomilis>}
         */
        cloturerDomilis(numeroOffreSouscrite: number, domilis: IDomilis): ng.IPromise<IDomilis>;
    }
    class DomilisService implements IDomilisService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        static DOMILIS_URL: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IDomilisService.ouvertureDomilis }
         */
        ouvertureDomilis(numeroOffreSouscrite: number, domilis: IDomilis): ng.IPromise<IDomilis>;
        /**
         * @see {@link IDomilisService.cloturerDomilis }
         */
        cloturerDomilis(numeroOffreSouscrite: number, domilis: IDomilis): ng.IPromise<IDomilis>;
    }
}
