
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
        static $inject: string[];
        formulaireEngagement: FormulaireEngagement;
        formulaireRecapAvenantEngagement: FormulaireEngagement;
        donneeEngagement: DonneesEngagement;
        private enModification;
        private enOuverture;
        private enCloture;
        private enRecapitulatif;
        private erreurMontant;
        avecSignature: string;
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
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, engagementService: EngagementDomiciliationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, donneesEngagementDomService: myway.c0410.commun.DonneesEngagementDomService);
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
    interface IEngagementCl {
        codeEtablissement: string;
        identifiantProduitService: number;
        indicateurEngagementDom: boolean;
        montantEngagementDom: number;
        indicateurEngagementEpargne: boolean;
        montantEngagementEpargne: number;
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
    class EngagementDomiciliationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restParametresServiceURL;
        private restServiceUrl;
        private restEngagementClient;
        private _listeRequeteEncours;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        /**
         * Requête GET
         * Permet de récupérer les paramètres d'un engagement de domiciliation
         * @param {string} codeEtablissement Identifiant d'un Etablissement du Réseau CE, correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France. Ex: "13135"
         * @param {string} acte Acte de gestion : Exemple 'OU' pour ouverture ou 'AV' pour Avenant
         * @returns promise<parametresEngagementDomiciliation>
         */
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
         * @param {number} numeroOffreSouscrite Numéro de l'offre
         * @param {number} identifiantProduitService Code du produit ou IDEGPS = 1310 pour ce produit
         * @param {number} montantMinimumEngagementAutorise Montant minimum paramétré par la caisse lors de la création, récupéré précédemment par la ressource de paramètre
         * @param {object} contratEngagement L'objet contratEngagement
         * @returns promise<DonneesEngagement>
         */
        creerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        /**
         * Requête PUT
         * Permet de modifier un Engagement de domiciliation
         * @param {number} numeroOffreSouscrite Numéro de l'offre
         * @param {number} identifiantProduitService Code du produit ou IDEGPS = 1310 pour ce produit
         * @param {number} montantMinimumEngagementAutorise Montant minimum paramétré par la caisse lors de la création, récupéré précédemment par la ressource de paramètre
         * @param {object} contratEngagement L'objet contratEngagement
         * @returns promise<engagement>
         */
        modifierEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        /**
         * Requête DELETE
         * Permet de supprimer un Engagement de domiciliation
         * @param {number} numeroOffreSouscrite Numéro de l'offre
         * @param {number} identifiantProduitService Montant minimum paramétré par la caisse lors de la création, récupéré précédemment par la ressource de paramètre
         * @param {object} contratEngagement L'objet contratEngagement
         * @returns promise<Engagement>
         */
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
