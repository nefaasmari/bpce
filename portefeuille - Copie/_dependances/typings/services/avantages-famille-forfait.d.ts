
declare module myway.c0410.avantagesFamille {
    var avantagesFamilleForfaitModule: any;
}

declare module myway.c0410.avantagesFamille {
    class AvantagesFamilleForfaitControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private avantagesFamilleForfaitService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        private donneesCompte;
        private avantagesFamille;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, avantagesFamilleForfaitService: AvantagesFamilleForfaitService);
        private determinerMode(mode);
        /**
         * Initialisation de l'objet IAvantagesFamille à enregistrer ou à clôturer.
         */
        private initialiserAvantagesFamille();
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service avantages famille forfait pour l'ouverture d'un service.
         */
        private enregistrerAvantagesFamilleForfait();
        /**
         * Appel du service avantages famille forfait pour la clôture d'un service.
         */
        private cloturerAvantagesFamilleForfait();
    }
}

declare module myway.c0410.avantagesFamille {
    function mwAvantagesFamilleForfait(): ng.IDirective;
}

declare module myway.c0410.avantagesFamille {
    interface IAvantagesFamilleForfaitService {
        /**
         * Service permettant de créer/ouvrir un produit avantages famille forfait.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IAvantagesFamille} avantageFamilleForfait L'objet avantages famille forfait à créer/enregistrer.
         *
         * @return {ng.IPromise<IAvantagesFamille>} L'objet qui a été enregistré.
         */
        ouvertureAvantagesFamilleForfait(numeroOffreSouscrite: number, avantageFamilleForfait: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
        /**
         * Service permettant de supprimer/clôturer un produit avantages famille forfait.
         *
         * @param {number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param {IAvantagesFamille} avantageFamilleForfait  L'objet avantages famille forfait à supprimer/clôturer.
         *
         * @return {ng.IPromise<IAvantagesFamille>}
         */
        cloturerAvantagesFamilleForfait(numeroOffreSouscrite: number, avantageFamilleForfait: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
    }
    class AvantagesFamilleForfaitService implements IAvantagesFamilleForfaitService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        static AVANTAGES_FAMILLE_URL: string;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * @see {@link IAvantagesFamilleService.ouvertureAvantagesFamilleForfait }
         */
        ouvertureAvantagesFamilleForfait(numeroOffreSouscrite: number, avantageFamilleForfait: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
        /**
         * @see {@link IAvantagesFamilleService.cloturerAvantagesFamilleForfait }
         */
        cloturerAvantagesFamilleForfait(numeroOffreSouscrite: number, avantageFamilleForfait: IAvantagesFamille): ng.IPromise<IAvantagesFamille>;
    }
}

declare module myway.c0410.avantagesFamille {
    interface IAvantagesFamille {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
    }
}
