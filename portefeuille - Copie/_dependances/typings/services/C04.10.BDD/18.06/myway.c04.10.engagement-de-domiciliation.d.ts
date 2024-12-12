
declare module myway.c0410.engagementDeDomiciliation {
    var engagementDeDomiciliation: ng.IModule;
}

declare module myway.c0410.engagementDeDomiciliation {
    class EngagementDomiciliationControleur {
        private $scope;
        private $q;
        private engagementService;
        private serviceAgentExtended;
        private espaceGlobalService;
        private compteBddCommunService;
        private donneesEngagementDomService;
        private traceService;
        static $inject: string[];
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
        montantLabel: string;
        montantMinimumLabel: string;
        periodiciteLabel: string;
        contexteAppel: string;
        MODE_PRECEDENT: string;
        constructor($scope: ng.IScope, $q: ng.IQService, engagementService: EngagementDomiciliationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, donneesEngagementDomService: myway.c0410.commun.DonneesEngagementDomService, traceService: myway.c0410.engagementDeDomiciliation.TraceService);
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
        /**
         * permet d'appeler la ressource rest servant à récupérer les paramètres de l'engagement de dom
         */
        private recupererParametresEngagement(codeBanque, acte);
        validerDonneeEngagement: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        supprimerDonneesEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        enregistrerEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
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
        private _periodicite;
        private _engagementModifier;
        engagementModifier: boolean;
        montant: number;
        periodiciteEngagementDom: any;
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
    class EngagementDomiciliationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restParametresServiceURL;
        private restServiceUrl;
        private _listeRequeteEncours;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        recupererParametresEngagementDomiciliation(codeEtablissement: string, acte: string): ng.IPromise<ParametresEngagementDomiciliation>;
        creerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        recupererEngagementDomiciliation(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeTypeDeProduitService: string): ng.IPromise<DonneesEngagement>;
        modifierEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        supprimerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<void>;
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
