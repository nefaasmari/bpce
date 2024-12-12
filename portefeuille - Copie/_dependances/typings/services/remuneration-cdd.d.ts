
declare module myway.c0410.remunerationCdd {
    var remunerationCddModule: any;
}

declare module myway.c0410.remunerationCdd {
    class RemunerationCddControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private espaceGlobalService;
        private compteBddCommunService;
        private remunerationCddService;
        static $inject: string[];
        private enOuverture;
        private enCloture;
        private enModification;
        private enRecapitulatif;
        private idBloc;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        private donneesCompte;
        private codeActeGestion;
        private identifiantPersonne;
        private identifiantFormulaire;
        private formulaireRemunerationCdd;
        private formulaireRemuCddAvenant;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, remunerationCddService: IRemunerationCddService);
        private determinerMode(mode);
        private initialiserRemunerationCdd();
        private initialiserRemunerationCddEnAvenant();
        validerDonneesRemunerationCdd: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        private enregistrerRemunerationCdd();
        private supprimerRemunerationCdd();
        hasModifieChamps(nomChamps: string): boolean;
    }
}

declare module myway.c0410.remunerationCdd {
    var mwRemunerationCdd: ng.IDirective;
}

declare module myway.c0410.remunerationCdd {
    interface IBareme {
        identifiantBareme: number;
        libelleBareme: string;
        baremeParDefaut: boolean;
        indicateurConditionsSupprimables: boolean;
        details: string[];
    }
    class FormulaireRemunerationCdd extends myway.c0410.commun.Formulaire {
        static DEVISE: string;
        static CODEMARCHE: string;
        remunerationCdd: IRemunerationCDD;
        baremesPossibles: IBaremesRemuneration[];
        listeDesBaremes: IBareme[];
        baremeSelectionne: IBareme;
        constructor(identifiantFormulaire: string);
        setBaremes(baremesRemuneration: IBaremesRemuneration[]): void;
        setBaremeSelectionne(baremesRemuneration: IBaremesRemuneration[]): void;
        private construireDetails(detailsBareme);
        setRemunerationAvecBaremeChoisi(): void;
        setDonneesRemunerationCdd(codeEtablissement: string, codeGuichet: string, numeroDeCompte: string): void;
        estEnModeOptimise(): boolean;
        getInformationsChampsInvalidesFormulaire(): myway.c0410.commun.StatutChampsFormulaire[];
    }
}

declare module myway.c0410.remunerationCdd {
    interface IRemunerationCDD {
        codeEtablissement: string;
        codeGuichet: string;
        identifiantCompte: string;
        baremesRemuneration: IBaremesRemuneration[];
        codeMarche: string;
        codeDevise: string;
        modeOptimise?: boolean;
    }
    interface IDetailsBareme {
        numeroPalier: number;
        borneSuperieurPalier: number;
        codeTauxReference: string;
        valeurTauxReference: number;
        margeEtablissement: string;
    }
    interface IBaremesRemuneration {
        identifiantBareme: number;
        libelleBareme: string;
        nombrePalierBareme: number;
        typeBareme: string;
        detailsBareme: IDetailsBareme[];
        dateFinApplication: Date;
        numeroChronoConditionCredit: number;
        dateDebutApplication: Date;
        incateurConditionsSupprimables: boolean;
        baremeParDefaut?: boolean;
    }
}

declare module myway.c0410.remunerationCdd {
    interface IRemunerationCddService {
        /**
         * @description Service de récupération des paramètres de rémunération de compte CDD.
         *
         * @param{string} codeEtablissementBanque Le code de l'établissement.
         * @param{string} codeMarche Détermine un marché selon la segmentation du marché national
         * @param{string} codeDevise Le code devise
         *
         * @returns{ng.IPromise<IRemunerationCDD>} Une promesse contenant un objet remuneration avec les différents barêmes.
         */
        getParametreRemunerationCdd(codeEtablissementBanque: string, codeMarche: string, codeDevise: string): ng.IPromise<IRemunerationCDD>;
        /**
         * @description Service de rechercher la rémunération par défaut d'un compte CDD.
         *
         * @param{number} identifiantProduitService L'identifiant du Produit/Service.
         * @param{number} montantEngagementDomiciliation Le montantEngagementDomiciliation de l'engagement de domiciliation.
         * @param{IRemunerationCDD} remunerationCDD L'objet RemunerationCDD qui servira à la recherche.
         *
         * @returns{ng.IPromise<IRemunerationCDD>} Une promesse contenant un objet remuneration avec les différents barêmes.
         */
        rechercherRemunerationCddParDefaut(identifiantProduitService: number, montantEngagementDomiciliation: number, remunerationCDD: IRemunerationCDD): ng.IPromise<IRemunerationCDD>;
        /**
         * @description Service de récupération d'une remuneration de compte CDD.
         *
         * @param{string} codeEtablissement Le code de l'établissement.
         * @param{string} codeGuichet Le code Guichet de l'établissement bancaire.
         * @param{string} numeroCompte Le numéro de compte.
         * @param{number} numeroPersonne Le numéro de la personne.
         *
         * @returns{ng.IPromise<IRemunerationCDD>} Une promesse contenant l'objet remuneration retourné par le GET.
         */
        getRemunerationCdd(codeEtablissement: string, codeGuichet: string, numeroCompte: string, numeroPersonne: number): ng.IPromise<IRemunerationCDD>;
        /**
         * @description Service de création d'une remuneration de compte CDD.
         *
         * @param{number} identifiantPersonne Le numéro de la personne.
         * @param{number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param{IRemunerationCDD} l'objet RemunerationCDD à créér.
         *
         * @returns{ng.IPromise<IRemunerationCDD>} Une promesse contenant l'objet remuneration retourné par le POST.
         */
        creerRemunerationCdd(identifiantPersonne: number, numeroOffreSouscrite: number, remunerationCdd: IRemunerationCDD): ng.IPromise<IRemunerationCDD>;
        /**
         * @description Service de cloturer une remuneration de compte CDD.
         *
         * @param{number} identifiantPersonne Le numéro de la personne.
         * @param{number} numeroOffreSouscrite Le numéro de l'offre souscrite.
         * @param{IRemunerationCDD} l'objet RemunerationCDD à supprimer.
         *
         * @returns{void}
         */
        cloturerRemunerationCdd(identifiantPersonne: number, numeroOffreSouscrite: number, remunerationCdd: IRemunerationCDD): ng.IPromise<void>;
    }
    class RemunerationCddService implements IRemunerationCddService {
        private serviceAgentExtended;
        private static RECHERCHE_REMUNERATION_CDD_URL;
        private static PARAMETRE_REMUNERATION_CDD_URL;
        private static REMUNERATION_CDD_URL;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * See {@link IRemunerationCddService#geParametretRemunerationCdd}.
         */
        getParametreRemunerationCdd(codeEtablissementBanque: string, codeMarche: string, codeDevise: string): ng.IPromise<IRemunerationCDD>;
        /**
         * See {@link IRemunerationCddService#rechercherRemunerationCddParDefaut}.
         */
        rechercherRemunerationCddParDefaut(identifiantProduitService: number, montantEngagementDomiciliation: number, remunerationCdd: IRemunerationCDD): ng.IPromise<IRemunerationCDD>;
        /**
         * See {@link IRemunerationCddService#getRemunerationCdd}.
         */
        getRemunerationCdd(codeEtablissement: string, codeGuichet: string, numeroCompte: string, numeroPersonne: number): ng.IPromise<IRemunerationCDD>;
        /**
         * See {@link IRemunerationCddService#creerRemunerationCdd}.
         */
        creerRemunerationCdd(identifiantPersonne: number, numeroOffreSouscrite: number, remunerationCdd: IRemunerationCDD): ng.IPromise<IRemunerationCDD>;
        /**
         * See {@link IRemunerationCddService#cloturerRemunerationCdd}.
         */
        cloturerRemunerationCdd(identifiantPersonne: number, numeroOffreSouscrite: number, remunerationCdd: IRemunerationCDD): ng.IPromise<void>;
    }
}
