
declare module clotureContratCCE {
    var app: any;
}

declare module clotureContratCCE {
    interface IModaleSimulationArreteScope extends ng.IScope {
        modaleSimulationArreteCtrl: IModaleSimulationArreteControleur;
    }
    interface IModaleSimulationArreteControleur {
        modalDatas: any;
        messageErreur: string;
        afficherMessageErreurCompte: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        ok(): void;
        close(): void;
    }
    class ModaleSimulationArreteControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private decompteAgioService;
        static $inject: string[];
        modalDatas: any;
        messageErreur: string;
        afficherMessageErreurCompte: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        montantNetOperation: MyWay.Model.MontantDevise;
        montantNetCommissionFrais: MyWay.Model.MontantDevise;
        montantNetFraisTenueCompte: MyWay.Model.MontantDevise;
        montantNetInteretCrediteur: MyWay.Model.MontantDevise;
        montantNetInteretDebiteur: MyWay.Model.MontantDevise;
        libelleTotal: string;
        modeArreteCompte: string;
        constructor($scope: IModaleSimulationArreteScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, decompteAgioService: DecompteAgioService);
        ok(): void;
        close(): void;
    }
}

declare module clotureContratCCE {
}

declare module clotureContratCCE {
    class PageTestControleur {
        /**
         * Paramètres directive
         */
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        /**
         * Paramètres directive avec interfaçage CGO
         */
        idBloc: string;
        codeActeGestion: string;
        modeAcces: GestionGeneriqueOffres.Types.ModeAcces;
        modeAffichage: GestionGeneriqueOffres.Types.ModeAffichage;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        /**
         * Autres variables
         */
        indicateurVueDirectiveCloture: boolean;
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        cloturerContratCCE(): void;
        validerCGO(): void;
    }
}

declare module clotureContratCCE {
}

declare module clotureContratCCE {
    interface ICaracteristiqueGenerale {
        fonctionnement: IFonctionnement;
        identificationContrat: IIdentificationContrat;
        messageFonctionnel: Array<IMessageFonctionnel>;
    }
    interface IFonctionnement {
        codeFonctionnementAutorise: string;
        montantSeuil: number;
        codeElementSurveillance: string;
        modeArreteCompte: string;
        codePeriodeArreteCompte: string;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        indicAutorisationCreationDec: string;
        codeAutorisationRemuneration: string;
        codeDepassementAutorisation: string;
        indicAutorisationCmdeCarte: string;
        indicAutorisationCmdeChequier: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        numeroCompteFusion: string;
        codeDateValeurCheque: string;
        libelleCompte: string;
        futurePeriodiciteArrete: string;
        dateChangementPeriod: string;
        codeNatureCompte: string;
        codeEtabComptePrlvmtAgios: string;
        codeEtabCompteSuppFactur: string;
        codeEtabCompteFusion: string;
        numeroComptePrlvmtAgios: string;
        numeroCompteSuppFactur: string;
        codeGuichetComptePrlvmtAgios: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteFusion: string;
        numeroCompteAncien: string;
        codeEtabCompteAncien: string;
        codeGuichetCompteAncien: string;
        codeDevise: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        numeroContrat: number;
    }
    interface IIdentificationContrat {
        codeEtablissement: string;
        codeGuichet: string;
        numeroEntiteTitulaire: number;
        numeroSirenProfessionnel: string;
        identifiantPersonne: number;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codeNatureCompte: string;
        numeroCompte: string;
        codeProduitEngagement: string;
        identifiantContrat: string;
    }
    interface ICloture {
        numeroContrat: number;
        date: string;
        codeMotif: string;
        libelleMotif: string;
        identifiantContrat: IIdentificationContrat;
    }
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
}

declare module clotureContratCCE {
    interface IAssuranceCourtTerme {
        personne: IPersonneCT;
        parametre: IParametreCT;
        listePersonne: Array<IPersonneCT>;
        referenceAssurance: IReferenceAssuranceCT;
        messageFonctionnel: IMessageFonctionnel;
        assurance: IAssuranceCT;
        parametrage: IParametrageCT;
    }
    interface IPersonneCT {
        identifiantPersonne: number;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: string;
        typeLienInterPersonne: string;
        codeEtatSante: string;
        codeParticipationContrat: string;
        libelleParticipationProduit: string;
        quotiteParticipation: number;
        dureeAssurance: number;
        libelleProfession: string;
        codeCivilite: string;
        categorieSocioPro: string;
        numeroTelephone: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        localiteInsee: string;
        libelleNationalite: string;
        codeEtatPersonne: string;
        assurance: IAssuranceCT;
    }
    interface IParametreCT {
        periodicite: string;
        dureeVie: number;
        ageLimite: number;
        plafondMontant: number;
        dureeRenouvellement: number;
        tauxCalculPrime: number;
        codeOption: string;
        nombrePersonnes: number;
    }
    interface IAssuranceCT {
        typeLigne: string;
        numeroContrat: number;
        nombrePersonneContrat: number;
        dateCloture: string;
        codeEtatProduitService: string;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        dateFinEffet: string;
        montantDisponible: number;
        identifiantPersonne: number;
        codeProlongation: string;
        codebeneficiaire: string;
        libelleBeneficiaire: string;
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        montantGaranti: number;
        ricePrelevement: string;
        dateEffetAssurance: string;
        numeroOffre: number;
        identifiantProduitService: number;
        origineOffre: string;
        codeMotifClotureCCE: string;
    }
    interface IReferenceAssuranceCT {
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        montantGaranti: number;
        ricePrelevement: string;
        dateEffetAssurance: string;
        numeroOffre: number;
        identifiantProduitService: number;
        identifiantEntiteTitulaire: number;
        dateClotureAssurance: string;
    }
    interface IParametrageCT {
        listeConcoursTresorerie: Array<IConcoursTresorerieCT>;
        listeClauseBeneficiaire: Array<IClauseBeneficiaireCT>;
        listeMotifCloture: Array<IMotifClotureCT>;
    }
    interface IConcoursTresorerieCT {
        typeLigne: string;
        libelleLigne: string;
    }
    interface IClauseBeneficiaireCT {
        code: string;
        libelle: string;
    }
    interface IMotifClotureCT {
        code: string;
        libelle: string;
    }
    interface IAssuranceSurCompte {
        parametre: IParametre;
        listeTranche: Array<ITranche>;
        listePersonne: Array<IPersonne>;
        personne: IPersonne;
        listeAssure: Array<IAssurance>;
        assurance: IAssurance;
        messageFonctionnel: IMessageFonctionnel;
        assure: IAssurance;
        parametrage: IParametrage;
    }
    interface IParametre {
        dureeVie: number;
        ageLimite: number;
        plafondMontant: number;
        tauxCalculPrime: number;
        periodicite: string;
        codeOption: string;
    }
    interface ITranche {
        trancheDebut: number;
        trancheFin: number;
        montantPrime: number;
    }
    interface IPersonne {
        identifiantPersonne: number;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: string;
        typeLienInterPersonne: string;
        dateEffetAssurance: string;
        codeEtatSante: string;
        montantDisponible: number;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        codeCivilite: string;
        categorieSocioPro: string;
        numeroTelephone: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        localiteInsee: string;
        libelleNationalite: string;
        codeEtatPersonne: string;
        dateFinEffet: string;
        dateCloture: string;
        libelleProfession: string;
    }
    interface IAssurance {
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        codeGuichet: string;
        montantGaranti: number;
        nombrePersonneContrat: number;
        dateEffet: string;
        ricePrelevement: string;
        riceRecepteur: string;
        numeroOffre: number;
        identifiantProduitService: number;
        identifiantPersonne: number;
        codeEtatSante: string;
        montantDisponible: number;
        codeTypeProduitService: string;
        dateCloture: string;
        codeEtatProduitService: string;
        numeroContratAssurance: number;
        codeMotifCloture: string;
        libelleMotifCloture: string;
        origineOffre: string;
        codeMotifClotureCCE: string;
    }
    interface IParametrage {
        listeMotifCloture: Array<IMotifCloture>;
    }
    interface IMotifCloture {
        code: string;
        libelle: string;
    }
}

declare module clotureContratCCE {
    interface IAbonnementEdi {
        listeCompteRattache: Array<ICompteRattache>;
    }
    interface ICompteRattache {
        numeroAbonne: string;
        codeProtocole: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeOperationServeur: string;
        codeRetourEchange: number;
    }
}

declare module clotureContratCCE {
    interface IEchelleInteret {
        montantSoldeValeur: number;
        dateArrete: string;
        designationBancaire: string;
        periodiciteArreteCompte: string;
        dateValeurOperation: string;
        dateSuivante: string;
        nombreOperation: number;
        codeSuite: string;
        listeConditionArrete: Array<IConditionArrete>;
        codeDeviseISO: string;
        listePeriodeArreteSurAnnee: Array<IPeriodeArreteSurAnnee>;
        listePeriodeArreteSurTrimestre: Array<IPeriodeArreteSurTrimestre>;
        listeDateValeur: Array<IDateValeur>;
    }
    interface IConditionArrete {
        dateValeurOperation: string;
        libelleTauxReference: string;
        valeurTauxReference: number;
        valeurVariationBaremeDebiteur: number;
        typeLigneDetail: string;
        montantPalier: number;
        borneSuperieurPalier: number;
        numeroPalier: number;
    }
    interface IOperation {
        dateValeurOperation: string;
        dateOperation: string;
        premierLibelleReleve: string;
        deuxiemeLibelleReleve: string;
        montantBrutDeviseCompte: number;
        codeAnnulation: string;
        codeSensInputation: string;
        montantBrutPriseOrdre: number;
        codeDevisePriseOrdre: string;
        codeOperationClient: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroCheque: string;
        dateCreationOperation: string;
        numeroPriseCompteCalculAgio: number;
        codeDeviseTenueCompte: string;
        codeDevisePriseOrdre2: string;
    }
    interface IDateValeur {
        dateValeurOperation: string;
        montantSoldeValeur: number;
        nombreJour: number;
        codeDeviseISO: string;
        montantCumuleOperationCredit: number;
        montantCumuleOperationDebit: number;
        montantCumuleDepassementDecouv: number;
        listeOperation: Array<IOperation>;
    }
    interface ISoldeFusionAgio {
        montantSolde: number;
        codeType: string;
    }
    interface ICompteFusionAgio {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        radical: string;
        cleNumeroCompte: string;
        codeTypeFusion: string;
        indicateurFusionCapital: string;
    }
    interface IAgio {
        typeLigneDetail: string;
        libelleDetailDecompte: string;
        tauxCommission: number;
        montantCommissionAgio: number;
        montantBaseCalculCommission: number;
        montantRemiseCommissionAgio: number;
        tauxRemiseCommission: number;
        dateDebutPeriode: string;
        dateFinPeriode: string;
        codeDeviseISO: string;
        tauxCommission2: number;
        montantNetCommissionInteret: number;
        tauxTVA: number;
        montantTVA: number;
    }
    interface IAssietteCalcul {
        codeCalculEstimation: string;
        dateEstimationPosition: string;
        indicateurFusionAgio: string;
        modeArreteCompte: string;
        tauxInteretGlobal: number;
        montantNetOperation: number;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateArreteInformation: string;
        codeEtablissementPrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        dateEmissionDernierPrelevement: string;
        codeEcretage: string;
        codeDeviseISO: string;
        messageErreurFonctionnel: string;
        soldeMoyenDebiteur: number;
        libelleArreteCompte: string;
        tauxTVA: number;
        montantCumulNetInteret: number;
        montantCumulTVAInteret: number;
        montantNetCommissionFrais: number;
        montantNetFraisTenueCompte: number;
        montantCumulTVACommissionFrais: number;
        montantTVAFraisTenueCompte: number;
        montantNetInteretCrediteur: number;
        montantNetInteretDebiteur: number;
        codeCotationProfessionnel: string;
        designationBancaireCourte: string;
        listePeriodeArrete: Array<IPeriodeArrete>;
        listeInformationArrete: Array<IInformationArrete>;
    }
    interface IDecompteAgio {
        echelleInteret: IEchelleInteret;
        soldeFusionAgio: ISoldeFusionAgio;
        listeCompteFusionAgio: Array<ICompteFusionAgio>;
        listeAgio: Array<IAgio>;
        assietteCalcul: IAssietteCalcul;
        messageFonctionnel: IMessageFonctionnel;
    }
    interface IPeriodeArrete {
        dateDebut: string;
        dateFin: string;
        periodicite: string;
    }
    interface IInformationArrete {
        dateDebut: string;
        dateFin: string;
        indicateurExistence: string;
    }
    interface IInformationArrete2 {
    }
    interface IInformationArrete3 {
    }
    interface IInformationArrete4 {
    }
    interface IPeriodeArrete2 {
    }
    interface IPeriodeArrete3 {
    }
    interface IPeriodeArrete4 {
    }
    interface IPeriodeArrete5 {
    }
    interface IPeriodeArrete6 {
    }
    interface IPeriodeArrete7 {
    }
    interface IPeriodeArrete8 {
    }
    interface IPeriodeArrete9 {
    }
    interface IPeriodeArrete10 {
    }
    interface IPeriodeArrete11 {
    }
    interface IPeriodeArrete12 {
    }
    interface IPeriodeArreteSurAnnee {
        dateDebut: string;
        dateFin: string;
        indicateurFusionAgio: string;
        periodicite: string;
    }
    interface IPeriodeArreteSurTrimestre {
        dateDebut: string;
        dateFin: string;
        indicateurFusionAgio: string;
    }
    interface IPeriodeArreteSurAnnee2 {
    }
    interface IPeriodeArreteSurAnnee3 {
    }
    interface IPeriodeArreteSurAnnee4 {
    }
    interface IPeriodeArreteSurAnnee5 {
    }
    interface IPeriodeArreteSurAnnee6 {
    }
    interface IPeriodeArreteSurAnnee7 {
    }
    interface IPeriodeArreteSurAnnee8 {
    }
    interface IPeriodeArreteSurAnnee9 {
    }
    interface IPeriodeArreteSurAnnee10 {
    }
    interface IPeriodeArreteSurAnnee11 {
    }
    interface IPeriodeArreteSurAnnee12 {
    }
    interface IPeriodeArreteSurTrimestre2 {
    }
    interface IPeriodeArreteSurTrimestre3 {
    }
    interface IPeriodeArreteSurTrimestre4 {
    }
}

declare module clotureContratCCE {
    interface IInformationGlobaleOuverture {
        indicateurInfoDecouvert: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        codeAction: string;
        numeroEntiteTitulaire: number;
        codeMonnaie: string;
        identifiantProduitService: number;
        numeroSirenProfessionnel?: string;
        numeroOffreSouscrite?: number;
    }
    interface IInformationGlobale {
        fonctionnement: IFonctionnementBis;
        conditionDebitriceNegociee: Array<IConditionDebitriceNegociee>;
        etatCompte: IEtatCompte;
        donneesCompte: IDonneesCompte;
        parametresReleve: IParametresReleve;
        indicateurFusion: IIndicateurFusion;
        representantLegal: IRepresentantLegal;
        listeInfomationDateValeur: IInformationDateValeur;
        listeConditionDebitriceDefaut: Array<IConditionDebitriceDefaut>;
        listeConditionDebitriceGenerale: Array<IConditionDebitriceGenerale>;
        listeCommissionFraisMarche: Array<ICommissionFraisMarche>;
        listeCommissionFraisNegociee: Array<ICommissionFraisNegociee>;
        conditionArreteSynthese: IConditionArreteSynthese;
        commissionFraisDefaut: ICommissionFraisDefaut;
    }
    interface IFonctionnementBis {
        codeAdresse: string;
        codeAutorisationRemuneration: string;
        codeEtabCompteSuppFactur: string;
        codeDateValeurCheque: string;
        codeDepassementAutorisation: string;
        codeEchelleFusionEnvoi: string;
        codeEchelleCompteEnvoi: string;
        codeElementSurveillance: string;
        codeEtabCompteAncien: string;
        codeEtabCompteFusion: string;
        codeFonctionnementAutorise: string;
        codeGuichetCompteFusion: string;
        codeGuichetCompteSuppFactur: string;
        codeGuichetCompteAncien: string;
        codeGuichetComptePrlvmtAgios: string;
        codeDevise: string;
        codeNatureCompte: string;
        codePeriodeArreteCompte: string;
        codePeriodiciteReleve: string;
        dateChangementPeriod: string;
        dateClotureCompteCourant: string;
        datePassageEuro: string;
        dateOuvertureCompteCourant: string;
        futurePeriodiciteArrete: string;
        indicAutorisationCmdeChequier: string;
        indicAutorisationCreationDec: string;
        indicAutorisationCmdeCarte: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        libelleCompte: string;
        libelleLongNature: string;
        modeArreteCompte: string;
        montantSeuil: number;
        motifClotureCompte: string;
        codeEtabComptePrlvmtAgios: string;
        numeroCompteAncien: string;
        numeroCompteSuppFactur: string;
        numeroContrat: number;
        numeroComptePrlvmtAgios: string;
        numeroCompteFusion: string;
        soldeDeviseTenueCompte: number;
        soldeFrancs: number;
        typeContratEntreprise: string;
        typeNatureCompte: string;
    }
    interface IConditionDebitriceNegociee {
        identifiantBareme: number;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        numeroChrono: number;
        listePalier: Array<IPalier>;
        nombrePaliersActifs: number;
        nombreMaximumPaliers: number;
        dateDebutValidite: string;
    }
    interface IEtatCompte {
        codeDeviseExpressionMontant: string;
        codeEtatProduitService: string;
        dateOuverture: string;
        dateCloture: string;
        soldeCompte: number;
        codeDeviseTenueCompte: string;
        soldeDeviseTenueCompte: number;
    }
    interface IDonneesCompte {
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        codeEtatProduitService: string;
        dateOuverture: string;
        dateCloture: string;
        motifClotureCompte: string;
        soldeDeviseTenueCompte: number;
        libelleCompte: string;
        numeroContrat: number;
        typeNatureCompte: string;
        libelleNatureCompte: string;
        libelleLongNatureCompte: string;
        codeFonctionnement: string;
        libelleFonctionnement: string;
        montantSeuilRemarquable: number;
        codeElementSurveillance: string;
        libelleSurveillance: string;
        indicAutoCreatDecouvert: string;
        codeDepassementAutorisation: string;
        indicAutoCommandeChequier: string;
        indicAutoRemunerationCpte: string;
        indicAutoCommandeCarte: string;
        codeEtablissementGab: string;
        codeGuichetCompteRecepteur: string;
        numeroComptePrelevement: string;
        codeBanqueTarification: string;
        codeGuichetTarification: string;
        numeroCompteTarification: string;
        codeNatureCompte: string;
        codeEtablissement: string;
    }
    interface IParametresReleve {
        codePeriocictié: string;
        codeTypeAdresse: string;
        designationCourte: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        libellePeriodicite: string;
    }
    interface IIndicateurFusion {
        montantSoldeFusionne: number;
        codeTypeFusion: string;
    }
    interface IRepresentantLegal {
        codeEtablissement: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        indicateurResponsableCompte: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        nomFamille: string;
        nomUsage: string;
        premierPrenom: string;
        dateNaissance: string;
        nomLocalite: string;
        libelleNationalite: string;
        ligne2Adresse: string;
        ligne3Adresse: string;
        ligne4Adresse: string;
        ligne5Adresse: string;
        ligne6Adresse: string;
        numeroTelephoneAdresse: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLienInterPersonnes: string;
        referencePieceJustificative: string;
        codeInseeLocalite: string;
        codeResident: string;
        numeroTelephoneTravail: string;
        codeAppartenanceReseau: string;
        codePaysInsee: string;
        codePaysIso: string;
        codePostal: string;
        codeSexe: string;
        codeAgentEconomique: string;
        nomEmployeur: string;
        dateEmbauche: string;
        codePaysNaissance: string;
        codeCategorieSocioPro: string;
        numeroSiren: string;
        numeroSiret: string;
        codeFamilleCategorieJuridique: string;
        codeFamilleApeInsee: string;
        deuxDerniersCarInsee: string;
        rangPersonneET: string;
        codePaysOmcr: string;
        codePaysTitre: string;
    }
    interface IPalier {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        margeTauxReference: number;
        tauxReference: string;
        valeurTaux: number;
        variationBorneSuperieure: number;
    }
    interface IPalier1 {
    }
    interface IPalier2 {
    }
    interface IPalier3 {
    }
    interface IPalier4 {
    }
    interface IPalier5 {
    }
    interface IInformationDateValeur {
        codeDateValeurCheque: string;
        codeGestion: string;
    }
    interface IConditionDebitriceDefaut {
        codeDevise: string;
        identifiantBareme: number;
        indicateurBaremeDefaut: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        listePalier: Array<IPalier>;
        nombrePaliersActifs: number;
    }
    interface IConditionDebitriceGenerale {
        dateDebutValidite: string;
        dateFinEffet: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        codeNiveauResponsabilite: string;
        codeTaux: string;
        libelleTauxDebiteur: string;
        periodiciteMajTaux: string;
        valeurTauxReference: number;
        indicateurBaremeDefaut: string;
        nombrePaliersActifs: number;
        nombreMaximumPaliers: number;
        margeMinimumBareme: number;
        margeMaximumBareme: number;
        codeDevise: string;
        codeTauxSubstitution1: string;
        libelleTauxSubstitution1: string;
        valeurTauxSubstitution1: number;
        periodiciteMajTauxSubstitution1: string;
        codeTauxSubstitution2: string;
        libelleTauxSubstitution2: string;
        periodiciteMajTauxSubstitution2: string;
        valeurTauxSubstitution2: number;
        codeTauxUsure: string;
        libelleTauxUsure: string;
        valeurTauxUsure: number;
        codeGestionTechnique: string;
        identifiantConditionDebitriceGenerale: number;
    }
    interface ICommissionFraisMarche {
        codeDevise: string;
        codeGestionTechnique: string;
        codeNiveauResponsabilite: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionImmobilisation: number;
        dateCreationBareme: string;
        dateModifBareme: string;
        fraisOperations: number;
        indicateurBareme: string;
        libelleBareme: string;
        montantFraisTenueCompte: number;
        numeroBaremeCommission: number;
        codeMarche: string;
        commissionMouvement: number;
    }
    interface ICommissionFraisNegociee {
        codeMarche: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        dateCreation: string;
        dateEffet: string;
        dateFinEffet: string;
        dateModification: string;
        montantFraisOperations: number;
        baseFraisOperations: number;
        indicateurBaremeCommission: string;
        libelleBaremeCommission: string;
        montantFraisTenueCompte: number;
        baseFraisTenueCompte: string;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
        numeroBaremeDebiteur: number;
        codeDeviseCommissionFraisNegociee: string;
        tauxApplicationDecouvert: number;
        codeMonnaieFonctionnement: string;
    }
    interface IConditionArreteSynthese {
        modeArrete: string;
        periodiciteArrete: string;
        periodiciteFutureArrete: string;
        dateChangementPeriodicite: string;
        codeEchelleCompteEnvoi: string;
        codeEchelleFusionEnvoi: string;
        editionEchelleDetailleCompte: string;
        editionEchelleDetailleFusion: string;
        codeBanquePrelevement: string;
        codeGuichetPrelevement: string;
        numeroComptePrelevement: string;
        numeroBaremeCommission: number;
        numeroBaremeInteretDebiteur: number;
        codeTauxDebiteurReference: string;
        libelleTauxDebiteur: string;
        variationTauxBaremeDebiteur: number;
        numeroBaremeInteretCrediteur: number;
        codeTauxCrediteurReference: string;
        libelleTauxCrediteur: string;
        variationBaremeTauxCrediteur: number;
        tauxCaisseCommissionDecouvert: number;
        tauxApplicationComDecouvert: number;
        tauxCommissionDecouvert: number;
        tauxCaisseCommMouvement: number;
        tauxApplicationCommMouvement: number;
        tauxCommissionMouvement: number;
        tauxCaisseCommissionImmo: number;
        tauxApplicationCommissionImmo: number;
        tauxCommissionImmo: number;
        tauxCaisseCommDepassement1: number;
        tauxCaisseCommDepassement2: number;
        tauxCaisseCommDepassement3: number;
        tauxAppCommDepassement1: number;
        tauxAppCommDepassement2: number;
        tauxAppCommDepassement3: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        montantFraisOperationEuro: number;
        tauxApplicationFraisOperation: number;
        montantUnitFraisOperationEuro: number;
        montantCaisseFraisTenueCptEuro: number;
        tauxFraisTenueCompteEuro: number;
        montantFraisTenueCptEuro: number;
        codeGestionTechnique: string;
        indicateurContratOuvertClos: string;
        typeFranchiseAgios: string;
        montantFranchiseAgiosEuro: number;
        libelleFamilleMarche: string;
        indicateurOuvertureAssurance: string;
        libelleCourtBareme: string;
        nombrePaliersBareme: number;
        indicateurConditionsPerso: string;
        margeEtablissementTranche1: number;
        margeEtablissementTranche2: number;
        margeEtablissementTranche3: number;
        margeEtablissementTranche4: number;
        margeEtablissementTranche5: number;
        codeDevise: string;
        nombrePaliersActifs: number;
        libelleCourtBaremeDebit: string;
        indicateurConditionDefaut: string;
        tauxReferencePalier1Devise: string;
        tauxReferencePalier2Devise: string;
        tauxReferencePalier3Devise: string;
        tauxReferencePalier4Devise: string;
        tauxReferencePalier5Devise: string;
        borneSuperieurePalier1Devise: number;
        borneSuperieurePalier2Devise: number;
        borneSuperieurePalier3Devise: number;
        borneSuperieurePalier4Devise: number;
        borneSuperieurePalier5Devise: number;
        margeTauxReferencePalier1Dev: number;
        margeTauxReferencePalier2Dev: number;
        margeTauxReferencePalier3Dev: number;
        margeTauxReferencePalier4Dev: number;
        margeTauxReferencePalier5Dev: number;
        valeurTauxReferenceTranche1Dev: number;
        valeurTauxReferenceTranche2Dev: number;
        valeurTauxReferenceTranche3Dev: number;
        valeurTauxReferenceTranche4Dev: number;
        valeurTauxReferenceTranche5Dev: number;
        listePalier: Array<IPalier>;
    }
    interface ICommissionFraisDefaut {
        codeDeviseCommission: string;
        codeTauxReferenceCredit: string;
        codeTauxReferenceDebit: string;
        commissionDecouvert: number;
        commissionDepassement1: number;
        commissionDepassement2: number;
        commissionDepassement3: number;
        commissionMouvement: number;
        commissionImmobilisation: number;
        delaiRenouvellementDebiteur: number;
        montantFraisTenueCompte: number;
        numeroBaremeCommissionDefaut: number;
        numeroBaremeCrediteurDefaut: number;
        tauxApplicationDecouvert: number;
        tauxApplicationFraisOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxCommissionDecouvert: number;
        tauxCommissionDepassement1: number;
        tauxCommissionDepassement2: number;
        tauxCommissionDepassement3: number;
        tauxCommissionMouvement: number;
        tauxCommissionImmobilisation: number;
        valeurVariationBaremeDebiteur: number;
        montantFraisOperations: number;
        baseFraisOperations: number;
        numeroConditionDebitriceDefaut: number;
    }
}

declare module clotureContratCCE {
    class LibellesMotifCloture {
        static libellesMotifCloture: any;
    }
}

declare module clotureContratCCE {
    interface ICaracteristiqueGeneraleService {
        cloturerCCE(cloture: ICloture): ng.IPromise<any>;
    }
    class CaracteristiqueGeneraleService implements ICaracteristiqueGeneraleService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        cloturerCCE(cloture: ICloture): ng.IPromise<any>;
    }
}

declare module clotureContratCCE {
    interface IContratAssCompteService {
        restituerAssuranceCT(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<IAssuranceCourtTerme>;
        restituerAssuranceSurCompte(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<IAssuranceSurCompte>;
    }
    class ContratAssCompteService implements IContratAssCompteService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        restituerAssuranceCT(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<IAssuranceCourtTerme>;
        restituerAssuranceSurCompte(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<IAssuranceSurCompte>;
    }
}

declare module clotureContratCCE {
    interface IContratServeurBancaireService {
        restituerAbonnementEDI(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<IAbonnementEdi>;
    }
    class ContratServeurBancaireService implements IContratServeurBancaireService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        restituerAbonnementEDI(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<IAbonnementEdi>;
    }
}

declare module clotureContratCCE {
    interface IDecompteAgioService {
        restituerDecompteAgio(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<IDecompteAgio>;
    }
    class DecompteAgioService implements IDecompteAgioService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        restituerDecompteAgio(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<IDecompteAgio>;
    }
}

declare module clotureContratCCE {
    interface IInformationsGlobalesService {
        getInformationsGlobales(informationContrat: IInformationGlobaleOuverture): ng.IPromise<IInformationGlobale>;
    }
    class InformationsGlobalesService implements IInformationsGlobalesService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getInformationsGlobales(informationContrat: IInformationGlobaleOuverture): ng.IPromise<IInformationGlobale>;
    }
}

declare module clotureContratCCE {
    class ServicesCommuns {
        private serviceAgentExtended;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        miseEnFormeDate(date: Date): string;
        MiseEnFormeDateExistante(date: string): string;
    }
}

declare module clotureContratCCE {
    class ClotureContratControleur {
        private $scope;
        private $q;
        private serviceAgentExtended;
        private caracteristiqueGeneraleService;
        private informationsGlobalesService;
        private contratAssCompteService;
        private contratServeurBancaireService;
        private modalService;
        private servicesCommuns;
        private $location;
        private $anchorScroll;
        private mwNotificationService;
        private mwsfDeviseService;
        static $inject: string[];
        /**
         * Paramètres directive avec interfaçage CGO
         */
        idBloc: string;
        codeActeGestion: string;
        contexte: GestionGeneriqueOffres.Types.DonneesContextuelles;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        identifiantEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        infobulleMotifCloture: any;
        grandeListe: Array<Object>;
        choixGrandeListe: any;
        indicateurRequeteEnCours: boolean;
        dateOuvertureContrat: string;
        deviseDuCompte: string;
        popupSimulationArrete: Object;
        listeActionsPrealables: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        listeAnomaliesBloquantes: GestionGeneriqueOffres.Types.ErreurGestionGeneriqueOffre[];
        montantSolde: MyWay.Model.MontantDevise;
        infosCCE: IInformationGlobale;
        listeClotureContratDebitrices: any[];
        tableauConditionsDebitrices: MyWay.UI.ImwTableOptions;
        bloquerConditionCommissionsEtFrais: boolean;
        listeCodeTaux: string[];
        listeConditionsCommissionsEtFrais: any[];
        tableauCommissionsEtFrais: MyWay.UI.ImwTableOptions;
        tableauListeBaremesEtablissement: MyWay.UI.ImwTableOptions;
        montrerConditionsCommissionsEtFrais: boolean;
        montrerListeBaremesEtablissements: boolean;
        bloquerConditionDebitrice: boolean;
        activerBoutonsAjout: boolean;
        authentificationAgent: MyWay.Services.Context.AuthentificationInfo;
        CODE_TYPE_PRODUIT_SERVICE_GCP_TABLE_DELOCALISE: string;
        constructor($scope: ng.IScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, caracteristiqueGeneraleService: CaracteristiqueGeneraleService, informationsGlobalesService: InformationsGlobalesService, contratAssCompteService: ContratAssCompteService, contratServeurBancaireService: ContratServeurBancaireService, modalService: MyWay.UI.IModalService, servicesCommuns: ServicesCommuns, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, mwNotificationService: MyWay.UI.IMwNotificationService, mwsfDeviseService: myway.comInterdomaine.DeviseService);
        changerMotif(item: any, model: any, label: any, event: any): void;
        getListeActionsPrealables(): void;
        getListeMotifsCloture(): void;
        ouvrirPopInSimulation(): void;
        private construirePopInSimulation(url, controller);
        validerFormulaire: GestionGeneriqueOffres.Types.IPointEntreeFonctionValidation;
        mettreEnGestion: GestionGeneriqueOffres.Types.IPointEntreeFonctionMiseEnGestion;
    }
}

declare module clotureContratCCE {
    function mwClotureContratCCE(): ng.IDirective;
}
