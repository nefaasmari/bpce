
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
        private compteBddCommunService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        private domilis;
        private referenceProduit;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, domilisService: IDomilisService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService);
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

declare module myway.c0410.domilis {
    class Domilis2Controleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private domilis2Service;
        private espaceGlobalService;
        private compteBddCommunService;
        private saisieRiceService;
        static $inject: string[];
        private domilis2;
        private conversionIban;
        private creerMandat;
        private enOuverture;
        private enCloture;
        private enModification;
        private enRecapitulatif;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        identifiantFormulaire: string;
        formulaireDomilis: Domilis2Formulaire;
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        codeActeGestion: string;
        private detenteur;
        contexteAppel: string;
        MODE_PRECEDENT: string;
        private referenceProduit;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, domilis2Service: IDomilis2Service, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        validerDonneesDomilis: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        private determinerMode(mode);
        /**
         * Initialisation le IHM du composant mwDomilis.
         */
        private initialiserIhmDomilis();
        /**
         * Initialisation de l'objet IDomilis à enregistrer ou à clôturer.
         */
        private initialiserDomilis();
        /**
         * Cette fonction permet de calculer le RICE à partir de @Param codeEtab @Param CodeGuichet @Param numeroCompte
         * et @return le IBAN
         */
        private calculerCleRice(codeEtablissement, codeGuichet, numCompte);
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        /**
         * Appel du service domilis pour l'ouverture d'un service.
         */
        private enregistrerDomilis();
        /**
         * Appel du service domilis pour la clôture d'un service.
         */
        private cloturerDomilis();
        /**
         * Appel du service qui permet de récuperer le code IBAN : FRKK BBBB BGGG GGCC CCCC CCCC Ckk.
         */
        private recupererCodeIban();
    }
}

declare module myway.c0410.domilis {
    function mwDomilis2(): ng.IDirective;
}

declare module myway.c0410.domilis {
    class Domilis2Formulaire extends myway.c0410.commun.ObjetGenerique {
        private creerMandat;
        constructor(identifiantFormulaire: string, creationMandat: boolean);
        getCreerMandat(): boolean;
    }
}

declare module myway.c0410.domilis {
    interface IDomilis2 {
        codeEtablissement: string;
        codeGuichet: string;
        referenceProduitService: string;
        codeProduit: string;
        codeIbanBanqueArrivee: string;
        identifiantEntiteTitulaire: number;
        identifiantProduitService: number;
    }
    /**
     *  La classe encapsulant la référence du produit domilis généré après l'ouverture du P/S.
     */
    class ReferenceDomilis2 extends myway.c0410.commun.ObjetGenerique {
        /**
         * La référence du produit domilis généré après l'ouverture du P/S.
         */
        referenceProduitService: string;
        constructor(idegps: number);
    }
    interface IConversionRibBicIban {
        codeBic: string;
        numeroIbanCompteBeneficiaire: string;
        numeroCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: number;
    }
}

declare module myway.c0410.domilis {
    class Domilis2Service implements IDomilis2Service {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private DOMILIS2_URL;
        private CONVERSION_IBAN_URL;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        ouvertureDomilis(numeroOffreSouscrite: number, domilis: IDomilis2, vMandat: boolean): ng.IPromise<IDomilis2>;
        cloturerDomilis(numeroOffreSouscrite: number, domilis: IDomilis2, vMandat: boolean): ng.IPromise<IDomilis2>;
        recupererCodeIban(conversionIban: IConversionRibBicIban): ng.IPromise<IConversionRibBicIban>;
    }
    interface IDomilis2Service {
        /**
         * Service permettant de créer/ouvrir un produit domilis.
         *
         * @return {ng.IPromise<IDomilis2>} L'objet qui a été enregistré.
         */
        ouvertureDomilis(numeroOffreSouscrite: number, domilis: IDomilis2, vMandat: boolean): ng.IPromise<IDomilis2>;
        /**
         * Service permettant de supprimer/clôturer un produit domilis.
         *
         * @param {IDomilis2} domilis L'objet domilis à supprimer/clôturer.
         *
         * @return {ng.IPromise<IDomilis2>}
         */
        cloturerDomilis(numeroOffreSouscrite: number, domilis: IDomilis2, vMandat: boolean): ng.IPromise<IDomilis2>;
        recupererCodeIban(conversionIban: IConversionRibBicIban): ng.IPromise<IConversionRibBicIban>;
    }
}
