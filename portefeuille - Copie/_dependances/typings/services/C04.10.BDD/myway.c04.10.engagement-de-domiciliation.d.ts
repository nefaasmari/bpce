
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
        donneesCompte: myway.c0410.compteDeDepot.DonneesCompte;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeActeGestion: string;
        idBloc: string;
        identifiantFormulaire: string;
        listePeriodicite: string[];
        montantLabel: string;
        montantMinimumLabel: string;
        periodiciteLabel: string;
        contexteAppel: string;
        MODE_PRECEDENT: string;
        constructor($scope: ng.IScope, $q: ng.IQService, engagementService: EngagementDomiciliationService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, espaceGlobalService: myway.c0410.commun.EspaceGlobalService, compteBddCommunService: myway.c0410.commun.CompteBddCommunService, donneesEngagementDomService: myway.c0410.commun.DonneesEngagementDomService);
        /**
         * permet d'appeler la ressource rest servant à récupérer les paramètres de l'engagement de dom
         */
        private recupererParametresEngagement(codeBanque, acte);
        validerDonneeEngagement: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        supprimerDonneesEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        miseEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
        enregistrerEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        modifierEngagement(): ng.IPromise<GestionGeneriqueOffres.Types.CompteRenduMiseEnGestion>;
        hasModifieChamps(nomChamps: string): boolean;
        private determinerMode(mode);
        private recupereNbMoisPeriodicite(libelle);
        private verifierMontantEtMiseAJourDesDonneesDuService(montant);
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
}

declare module myway.c0410.engagementDeDomiciliation {
    class EngagementDomiciliationService {
        private $q;
        private serviceAgentExtended;
        static $inject: string[];
        private restParametresServiceURL;
        private restServiceUrl;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        recupererParametresEngagementDomiciliation(codeEtablissement: string, acte: string): ng.IPromise<ParametresEngagementDomiciliation>;
        creerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        recupererEngagementDomiciliation(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeTypeDeProduitService: string): ng.IPromise<DonneesEngagement>;
        modifierEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, montantMinimumEngagementAutorise: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<DonneesEngagement>;
        supprimerEngagementDomiciliation(numeroOffreSouscrite: number, identifiantProduitService: number, contratEngagement: ContratEngagementDeDomiciliation): ng.IPromise<void>;
    }
}
