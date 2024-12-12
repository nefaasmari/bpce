
declare module myway.c0410.engagementDeDomiciliation {
    var engagementDeDomiciliation: ng.IModule;
}

declare module myway.c0410.engagementDeDomiciliation {
    class EngagementDomiciliationControleur {
        private $scope;
        private $rootScope;
        private $q;
        private engagementService;
        private serviceAgentExtended;
        private espaceGlobalService;
        private compteBddCommunService;
        private donneesEngagementDomService;
        private traceService;
        formulaireEngagement: FormulaireEngagement;
        formulaireRecapAvenantEngagement: FormulaireEngagement;
        donneeEngagement: DonneesEngagement;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private erreurMontant;
        parametresEngagementDeDomiciliation: ParametresEngagementDomiciliation;
        donneesCompte: myway.c0410.commun.DonneesCompte;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        donneesSauvegardeEngagementDom: myway.c0410.commun.IDonneesSauvegardeTechniqueProduitService;
        codeActeGestion: string;
        idBloc: string;
        identifiantFormulaire: string;
        listePeriodicite: string[];
        existeEngagementClient: boolean;
        montantLabel: string;
        montantEpargneLabel: string;
        montantMinimumLabel: string;
        periodiciteLabel: string;
        contexteAppel: string;
        MODE_PRECEDENT: string;
        private errotab;
        private constructeurTimer;
        parametresComptable: MyWay.Services.Context.ParametresComptables;
        donneesAuthentification: MyWay.Services.Context.AuthentificationInfo;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, engagementService: EngagementDomiciliationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, donneesEngagementDomService: myway.c0410.commun.DonneesEngagementDomService, traceService: myway.c0410.commun.ServiceTrace);
        /**
         * intialisation de la directive en mode ouverture
         */
        private initModeOuverture();
        /**
         * intialisation de la directive en mode modification ou cloture
         */
        private initFormulaireEngagement();
        /**
         * intialisation de la directive en mode modification ou cloture
         */
        private initModeModificationOuCloture();
        private notifierChargementTermine();
        /**
         * permet d'appeler la ressource rest servant à récupérer les paramètres de l'engagement de dom
         */
        private recupererParametresEngagement(codeBanque, acte);
        validerDonneeEngagement: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        gererErreurValiderDonneesEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[]>;
        supprimerDonneesEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        enregistrerEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        controlerEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre>;
        sauvergarderDossierDeVente: GestionGeneriqueOffres.Types.IPointEntreeFonctionSauvegarde;
        /**
         * Fonction permettant de retourner les données de sauvegarde de l'engagement de DOM
         */
        private getDonneesSauvegardeProduitService();
        restaurerDossierDeVente(): void;
        getVueMDEC(): GestionGeneriqueOffres.Types.DossierDeVente.BlocMDEC;
        modifierEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        hasModifieChamps(nomChamps: string): boolean;
        private determinerMode(mode);
        recupereNbMoisPeriodicite(libelle: string): void;
        verifierMontantEtMiseAJourDesDonneesDuService(montant: number): void;
        verifierMontantEpargneEtMiseAJourDesDonneesDuService(montantEpargne: number): void;
        indicateurEngagementChange(): void;
        /**
         * Supprime la périodicité semestrielle
         * @param {boolean} condition
         */
        private supprimerPeriodicitéSemestrielle(condition);
        /**
         * Teste si au moins une signature d'engagement est cochée
         * @Param {object} FormulaireEngagement
         * @Returns {boolean} indicateur
         */
        private auMoinsUnEngagementExiste(formulaireEngagement);
    }
}

declare module myway.c0410.engagementDeDomiciliation {
    function mwEngagementDomiciliation(): ng.IDirective;
}

declare module myway.c0410.engagementDeDomiciliation {
    class PeriodiciteFormulaire {
        static MENSUELLE: {
            libellePeriodicite: string;
            nbMoisPeriodicite: number;
        };
        static TRIMESTRIELLE: {
            libellePeriodicite: string;
            nbMoisPeriodicite: number;
        };
        static SEMESTRIELLE: {
            libellePeriodicite: string;
            nbMoisPeriodicite: number;
        };
        static recupererListePeriodicite(): Array<string>;
        static recupererNbMoisPeriodicite(libelle: string): number;
        static recupererLibellePeriodicite(code: number): string;
    }
    class StatutChampsFormulaire {
        private _nomChamps;
        private isMessagePersonnalise;
        constructor(nomChamps: string, isMessagePersonnalise?: boolean);
        getMessageErreur(): string;
    }
    class FormulaireEngagement extends myway.c0410.commun.ObjetGenerique {
        montantMinimum: number;
        private _montant;
        private _montantEpargne;
        private _indicateurEngagementDom;
        private _indicateurEngagementEpargne;
        private _periodicite;
        private _engagementModifier;
        engagementModifier: boolean;
        montant: number;
        montantEpargne: number;
        periodiciteEngagementDom: any;
        indicateurEngagementDom: boolean;
        indicateurEngagementEpargne: boolean;
        constructor(identifiantFormulaire: string);
        constructor(identifiantFormulaire: string, donneesEngagement: DonneesEngagement);
        metAJourFormulaire(donneesEngagement: DonneesEngagement): void;
        estValideFormulaire(): boolean;
        getInformationsChampsInvalidesFormulaire(): StatutChampsFormulaire[];
        private estValideChamps(champs);
        /**
         * Permet de restaurer  le formulaire à partir des données du dossier de vente
         */
        restaureDonneesSauvegardeProduitService(donneeSauvegardeProduitService: IDonneesSauvegardeEngagementDOM): GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
    }
}

declare module myway.c0410.engagementDeDomiciliation {
    class ParametresEngagementDomiciliation {
        codeEtablissement: string;
        montantMinimum: number;
        monnaieMontantMinimum: string;
    }
    interface ICaracteristiqueEngagement {
        codePromotion: string;
        dateDebutEngagement: Date;
        dateFinEngagement: Date;
        codeAgent: string;
        dateDerniereMiseAJour: Date;
        indicateurEngagementDom: boolean;
        montantEngagementDomiciliation: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
        codePeriodiciteEngagement: string;
    }
    class ContratEngagementDeDomiciliation {
        codeEtablissement: string;
        codeGuichet: string;
        numeroDeCompte: string;
        codeTypeDeProduitService: string;
        montantEngagementDomiciliation: number;
        periodiciteVersement: number;
        codeRespectEngagementDeDomiciliation: string;
        dateDernierControleEngagement: Date;
        dateProchainControleEngagement: Date;
    }
    interface ICompteSupport {
        codeEtablissement: string;
        codeGuichet: string;
        codeReferenceProduit: string;
    }
    interface IEngagementClient {
        compteSupport: ICompteSupport;
        caracteristiqueEngagement: ICaracteristiqueEngagement;
    }
    class EngagementClient {
        compteSupport: ICompteSupport;
        caracteristiqueEngagement: ICaracteristiqueEngagement;
        constructor(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, donneesCompte: commun.DonneesCompte, formulaireEngagement: FormulaireEngagement);
    }
    interface IControleEngagement {
        /**
         * Identifiant de l'établissement traité
         */
        codeEtablissement: string;
        /**
         * Identifiant de l'offre souscrite
         */
        identifiantOffre: number;
        /**
         * Numéro du client souscripteur
         */
        numeroClient: number;
        /**
         * Montant d'engagement de domiciliation des revenus client
         */
        montantRevenus: number;
        /**
         * Montant d'engagement de domiciliation de l'épargne client
         */
        montantEpargne: number;
        /**
         * Identifiant de l'agent connecté
         */
        identifiantAgent: number;
    }
    interface IListeControleEngagement {
        listeControleEngagement: Array<IControleEngagement>;
    }
    interface IEngagementCl {
        codeEtablissement: string;
        identifiantProduitService: number;
        indicateurEngagementDom: boolean;
        montantEngagementDom: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
    }
    interface IDonneesSecondaireEngagement {
        montantEpargne: number;
        signatureDom: boolean;
        signatureEpargne: boolean;
    }
    class EngagementCl {
        codeEtablissement: string;
        identifiantProduitService: number;
        indicateurEngagementDom: boolean;
        montantEngagementDom: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
        constructor(contexte: GestionGeneriqueOffres.Types.DonneesContextuelles, formulaireEngagement: FormulaireEngagement);
    }
    class DonneesEngagement {
        contratEngagementDeDomiciliation: ContratEngagementDeDomiciliation;
        constructor();
        constructor(donnees: DonneesEngagement);
        miseAjourDonneesOffreDepuisParametre(codeBanque: string, codeGuichet: string, numeroCompte: string): void;
        miseAjourDuModele(formulaire: FormulaireEngagement, estEnAvenant?: boolean): void;
    }
    class EngagementDomiciliationGenerique extends myway.c0410.commun.ObjetGenerique {
        static IDENTIFIANT_ENGAGEMENT_DOM: string;
        engagementDomiciliation: ContratEngagementDeDomiciliation;
        constructor(engagementDomiciliation: ContratEngagementDeDomiciliation);
    }
    /**
     * Données permettant de sauvegarder et restaurer les données de l'engagement de DOM dans le dossier de vente à distance
     *
     */
    interface IDonneesSauvegardeEngagementDOM extends GestionGeneriqueOffres.Types.DossierDeVente.IDonneeSauvegardeProduitService {
        identifiant: string;
        codePeriodicite: number;
        montant: number;
    }
}

declare module myway.c0410.engagementDeDomiciliation {
    class EngagementDomiciliationService extends myway.c0410.commun.ProduitService {
        private $q;
        private serviceAgentExtended;
        private serviceTrace;
        static $inject: string[];
        private restParametresServiceURL;
        private restServiceUrl;
        private restEngagementClient;
        private restControleEngagement;
        private _listeRequeteEncours;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, serviceTrace: myway.c0410.commun.ServiceTrace);
        recupererParametresEngagementDomiciliation(codeEtablissement: string, acte: string): ng.IPromise<ParametresEngagementDomiciliation>;
        /**
         * Requête GET
         * @param {string} codeEtablissement Identifiant d'un Etablissement du Réseau CE, correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France. Ex: "13135"
         * @param {string} codeGuichet Ex: "00080"
         * @param {string} numeroCompte Numéro du compte. Ex: "04020423159"
         * @param {string} codeTypeDeProduitService Code du produit ou IDEGPS = 1310 pour ce produit
         * @returns promise<DonneesEngagement>
         */
        recupererEngagementDomiciliation(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeTypeDeProduitService: string): ng.IPromise<DonneesEngagement>;
        /**
         * Requête POST
         * Permet de créer un engagement de domiciliation
         * @return promise<EngagementDeDomiciliation>
         */
        creerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        modifierEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        supprimerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<void>;
        /**
         * Requête GET
         * Permet la consultation des caractéristiques de l'engagement d'un client à partir de son compte de dépot
         * @param {string} Code de l'établissement emetteur
         * @param {string} Code guichet interbancaire
         * @param {string} Numéro du compte porteur de l'engagement (CDD)
         * @returns {promise<ICaracteristiqueEngagement>} Caractéristiques d'engagement du client si trouvé
         */
        recupererCaracteristiqueEngagementClient(codeEtablissement: string, codeGuichet: string, codeReferenceProduit: string): ng.IPromise<ICaracteristiqueEngagement>;
        /**
         * Requête POST
         * Permet la création d'un engagement client
         * @param {IEngagementClient}
         * @returns {promise<IEngagementClient>}
         */
        creerEngagementClient(engagementClient: IEngagementClient): ng.IPromise<IEngagementClient>;
        /**
         * Requête POST
         * Permet de vérifier si la création d'un engagement client est possible
         * @param {IControleEngagement}
         * @returns {promise<IControleEngagement>}
         */
        controlerEngagementClient(listeControleEngagement: IListeControleEngagement): ng.IPromise<IControleEngagement>;
        /**
         * Requête PUT
         * Permet la modification de l'engagement d'un client
         * @param {IEngagementClient}
         * @returns {promise<IEngagementClient>}
         */
        modifierEngagementClient(engagementClient: IEngagementClient): ng.IPromise<IEngagementClient>;
        /**
         * Requête DELETE
         * Permet de supprimer/clôturer l'engagement d'un client
         * @param {IEngagementClient}
         * @returns promise<IEngagementClient>
         */
        supprimerEngagementClient(engagementClient: IEngagementClient): ng.IPromise<IEngagementClient>;
        private finRequeteEncours(nomRequete);
        private ajouterRequeteEncours(nomRequete);
        existRequeteEncours(): boolean;
    }
}

declare module myway.c0410.engagementDeDomiciliation {
    const enum LogType {
        DEBUG = 1,
        ERROR = 2,
        INFO = 3,
        WARNING = 4,
    }
    interface ITraceService {
        debug(message: string, action?: any, object?: any): void;
        error(message: string, action?: any, object?: any): void;
        info(message: string, action?: any, object?: any): void;
        warning(message: string, action?: any, object?: any): void;
        historiqueLog: string;
    }
    class TraceService {
        private $q;
        private $timeout;
        private static CLASS_NAME;
        private static logger;
        private _logType;
        private colors;
        historiqueLog: string;
        static $inject: string[];
        constructor($q: ng.IQService, $timeout: ng.ITimeoutService);
        /**
         * Méthode d'affichage des logs dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        log(message?: string, object?: any): void;
        /**
         * Méthode d'affichage des logs en mode DEBUG dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        debug(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode ERROR dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        error(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode INFO dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        info(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warning(message: string, object?: any, cache?: boolean): void;
        /**
         * Méthode d'affichage des logs en mode WARNING dans la console du navigateur et de Trace coté FWK + Kibana
         * @method
         * @param {string} message
         * @param {any} object
         * @return {void}
         */
        warn(message: string, object?: any, cache?: boolean): void;
        traceServiceLogger(logType: string, message: string, object?: any, cache?: boolean): void;
        private getTime();
        clearHistoriqueLog(): void;
        logType: string;
    }
}
