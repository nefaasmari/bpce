
declare module myway.c0410.assuranceSurCompte {
    var assuranceSurCompteModule: any;
}

declare module myway.c0410.assuranceSurCompte {
    class AssuranceSurCompteControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private assuranceSurCompteService;
        private saisieRiceService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        private donneesCompte;
        codeActeGestion: string;
        private codeControle;
        private assuranceSurCompte;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, assuranceSurCompteService: AssuranceSurCompteService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        private estAssuranceIndividuelle();
        private setCodeControle();
        private determinerMode(mode);
        /**
         * Initilaisation de l'objet IAssuranceSurCompte à clôturer ou à ouvrir.
         */
        private initialiserAssuranceCompte();
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service assurance sur compte pour l'ouverture d'un service.
         */
        private enregistrerAssuranceSurCompte();
        /**
         * Appel du service assurance sur compte pour la clôture d'un service.
         */
        private cloturerAssuranceSurCompte();
    }
}

declare module myway.c0410.assuranceSurCompte {
    function mwAssuranceSurCompte(): ng.IDirective;
}

declare module myway.c0410.assuranceSurCompte {
    interface IAssuranceSurCompte {
        codeEtablissementBanque: string;
        codeGuichetInterbancaire: string;
        identifiantCompteProduitService: string;
        cleControleCompteAssure: string;
    }
}

declare module myway.c0410.assuranceSurCompte {
    class AssuranceSurCompteService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private static ASSURANCE_SUR_COMPTE_URL;
        private assuranceSurCompte;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        creerAssuranceSurCompte(assuranceSurCompte: IAssuranceSurCompte, codeTypeProduitService: string, numeroOffreSouscrite: number, identifiantProduitService: number): ng.IPromise<IAssuranceSurCompte>;
        cloturerAssuranceSurCompte(assuranceSurCompte: IAssuranceSurCompte, codeTypeProduitService: string, numeroOffreSouscrite: number, identifiantProduitService: number): ng.IPromise<void>;
        initialiser(codeEtablissementBanque: string, codeGuichetInterbancaire: string, identifiantCompteProduitService: string): IAssuranceSurCompte;
    }
}
