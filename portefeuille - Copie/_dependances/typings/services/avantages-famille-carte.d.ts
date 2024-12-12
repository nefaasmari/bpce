
declare module myway.c0410.avantagesFamille {
    var avantagesFamilleCarteModule: any;
}

declare module myway.c0410.avantagesFamille {
    class AvantagesFamilleCarteControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private avantagesFamilleCarteService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        private avantagesFamille;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, avantagesFamilleCarteService: IAvantagesFamilleCarteService);
        private determinerMode(mode);
        /**
         * Initialisation de l'objet IAvantagesFamille à enregistrer ou à clôturer.
         */
        private initialiserAvantagesFamille();
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service avantages famille carte pour l'ouverture d'un service.
         */
        private enregistrerAvantagesFamilleCarte();
        /**
         * Appel du service avantages famille carte pour la clôture d'un service.
         */
        private cloturerAvantagesFamilleCarte();
    }
}

declare module myway.c0410.avantagesFamille {
    function mwAvantagesFamilleCarte(): ng.IDirective;
}

declare module myway.c0410.avantagesFamille {
    interface IAvantagesFamilleCarteService {
        /**
         * Service permettant de créer/ouvrir un produit avantages famille carte.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IAvantagesFamille} avantageFamilleCarte L'objet avantages famille carte à créer/enregistrer.
         *
         * @return {ng.IPromise<IAvantagesFamille>} L'objet qui a été enregistré.
         */
        ouvertureAvantagesFamilleCarte(numeroOffreSouscrite: number, avantageFamilleCarte: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
        /**
         * Service permettant de supprimer/clôturer un produit avantages famille carte.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IAvantagesFamille} avantageFamilleCarte L'objet avantages famille carte à supprimer/clôturer.
         *
         * @return {ng.IPromise<IAvantagesFamille>}
         */
        cloturerAvantagesFamilleCarte(numeroOffreSouscrite: number, avantageFamilleCarte: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
    }
    class AvantagesFamilleCarteService implements IAvantagesFamilleCarteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        static AVANTAGES_FAMILLE_URL: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IAvantagesFamilleService.ouvertureAvantagesFamilleCarte }
         */
        ouvertureAvantagesFamilleCarte(numeroOffreSouscrite: number, avantageFamilleCarte: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
        /**
         * @see {@link IAvantagesFamilleService.cloturerAvantagesFamilleCarte }
         */
        cloturerAvantagesFamilleCarte(numeroOffreSouscrite: number, avantageFamilleCarte: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
    }
}

declare module myway.c0410.avantagesFamille {
    interface IAvantagesFamille {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
    }
    /**
     *  La classe encapsulant la référence du produit avantages famille carte générée après l'ouverture du P/S.
     */
    class ReferenceAvantageFamille extends myway.c0410.commun.ObjetGenerique {
        /**
         * La référence du produit avantages famille carte générée après l'ouverture du P/S.
         */
        referenceProduitService: string;
        constructor(idegps: number);
    }
}
