
declare module composantsCommunsContratCCE {
    var app: any;
}

declare module composantsCommunsContratCCE {
    interface IModalGestionAjoutCommissionsScope extends ng.IScope {
        viewModelModalGestionAjoutCommissionsCtrl: IModalGestionAjoutCommissionsControleur;
    }
    interface IModalGestionAjoutCommissionsControleur {
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutCommission: Array<Object>;
        montrerListeCommissionsEtFrais: boolean;
        commissionsFraisMarcheSelectionnee: ICommissionFraisMarche;
        messageErreurDate: string;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        tauxApplication: any;
        boutonValiderActif: boolean;
        montrerAjoutCommissionSelectionnee: boolean;
        construireTableauListeCommissionsEtFrais(listeCommissionsFraisMarche: ICommissionFraisMarche[]): void;
        miseEnFormeCommissionFraisMarcheSelectionnee(commissionsFraiMarche: ICommissionFraisMarche): void;
        sauvegarderNouvelleCommission(): void;
        annuler(): void;
    }
    class ModalGestionAjoutCommissionsControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutCommissions: Array<Object>;
        montrerListeCommissionsEtFrais: boolean;
        commissionsFraisMarcheSelectionnee: ICommissionFraisMarche;
        messageErreurDate: string;
        dateOuvContrat: Date;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        tauxApplication: any;
        boutonValiderActif: boolean;
        montrerAjoutCommissionSelectionnee: boolean;
        constructor($scope: IModalGestionAjoutCommissionsScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: ModifierConditionArreteService, servicesCommuns: ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        selectedLinesPourAjoutCommission: Array<Object>;
        construireTableauListeCommissionsEtFrais(listeCommissionsFraisMarche: ICommissionFraisMarche[]): void;
        miseEnFormeCommissionFraisMarcheSelectionnee(commissionsFraisMarche: ICommissionFraisMarche): void;
        rafraichirValeursCalculees(): void;
        changerTauxApplication(): void;
        sauvegarderNouvelleCommission(): void;
        annuler(): void;
    }
}

declare module composantsCommunsContratCCE {
    interface IModalGestionConditionsAjoutDebitricesScope extends ng.IScope {
        viewModelModalGestionAjoutConditionsDebitricesCtrl: IModalGestionAjoutConditionsDebitricesControleur;
    }
    interface IModalGestionAjoutConditionsDebitricesControleur {
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeConditionDebitriceGenerale: MyWay.UI.ImwTableOptions;
        selectedLinesPourAjoutConditionDebitrice: Array<Object>;
        montrerListeConditionDebitriceGenerale: boolean;
        conditionDebitriceGeneraleSelectionnee: IConditionDebitriceGenerale;
        messageErreurDate: string;
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        listePalier: IPalierBaremeDebiteur[];
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        montrerAjoutConditionDebitriceSelectionnee: boolean;
        ajoutPalierAutorise: boolean;
        construireTableauListeConditionsDebitricesGenerales(listeConditionDebitricesGenerales: IConditionDebitriceGenerale[]): void;
        miseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: IConditionDebitriceGenerale): void;
        sauvegarderNouvelleConditionDebitrice(): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        annuler(): void;
    }
    class ModalGestionAjoutConditionsDebitricesControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        tableauListeConditionDebitriceGenerale: MyWay.UI.ImwTableOptions;
        conditionDebitriceGeneraleSelectionnee: IConditionDebitriceGenerale;
        listePalier: IPalierBaremeDebiteur[];
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        boutonValiderActif: boolean;
        montrerListeConditionDebitriceGenerale: boolean;
        montrerAjoutConditionDebitriceSelectionnee: boolean;
        deviseDuCompte: string;
        messageErreurDate: string;
        afficherMessageErreur: boolean;
        ajoutPalierAutorise: boolean;
        constructor($scope: IModalGestionConditionsAjoutDebitricesScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: ModifierConditionArreteService, servicesCommuns: ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        selectedLinesPourAjoutConditionDebitrice: Array<Object>;
        construireTableauListeConditionsDebitricesGenerales(listeConditionDebitricesGenerales: IConditionDebitriceGenerale[]): void;
        getListeTauxSubstitution(conditionDebitriceGeneraleSelectionnee: IConditionDebitriceGenerale): void;
        miseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: IConditionDebitriceGenerale): void;
        sauvegarderNouvelleConditionDebitrice(): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        remiseEnFormeConditionGeneraleSelectionnee(conditionDebitricesGenerales: IConditionDebitriceGenerale, estUnAjout: boolean): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        annuler(): void;
        estDernierPalier(numeroPalier: number): boolean;
        estPremierOuDernierPalier(numeroPalier: number): boolean;
        estNiPremierNiDernierPalier(numeroPalier: number): boolean;
    }
}

declare module composantsCommunsContratCCE {
    interface IModalGestionModificationCommissionsScope extends ng.IScope {
        viewModelModalGestionModificationCommissionsCtrl: IModalGestionModificationCommissionsControleur;
    }
    interface IModalGestionModificationCommissionsControleur {
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        commissionNegocieeSelectionnee: ICommissionFraisNegociee;
        tauxApplication: any;
        messageErreurDate: string;
        dateEffet: Date;
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        sauvegarderModificationCommission(): void;
        annuler(): void;
    }
    class ModalGestionModificationCommissionsControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        tableauListeCommissionsFraisMarche: MyWay.UI.ImwTableOptions;
        montrerListeCommissionsEtFrais: boolean;
        commissionNegocieeSelectionnee: ICommissionFraisNegociee;
        tauxApplication: any;
        messageErreurDate: string;
        dateOuvContrat: Date;
        dateEffet: Date;
        dateEffetIHM: string;
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        constructor($scope: IModalGestionModificationCommissionsScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: ModifierConditionArreteService, servicesCommuns: ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        miseEnFormeCommissionNegocieeSelectionnee(commissionNegociee: ICommissionFraisNegociee): void;
        rafraichirValeursCalculees(): void;
        changerTauxApplication(): void;
        sauvegarderModificationCommission(): void;
        annuler(): void;
    }
}

declare module composantsCommunsContratCCE {
    interface IModalGestionModificationConditionsDebitricesScope extends ng.IScope {
        viewModelModalGestionModificationConditionsDebitricesCtrl: IModalGestionModificationConditionsDebitricesControleur;
    }
    interface IModalGestionModificationConditionsDebitricesControleur {
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        deviseDuCompte: string;
        conditionDebitriceNegocieeSelectionnee: IConditionDebitriceNegociee;
        messageErreurDate: string;
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        listePalier: IPalierBaremeDebiteur[];
        afficherMessageErreur: boolean;
        boutonValiderActif: boolean;
        ajoutPalierAutorise: boolean;
        sauvegarderModificationConditionDebitrice(): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        annuler(): void;
    }
    class ModalGestionModificationConditionsDebitricesControleur {
        private $scope;
        private $modalInstance;
        private data;
        private $modal;
        private serviceAgentExtended;
        private modifierConditionArreteService;
        private servicesCommuns;
        private mwNotificationService;
        static $inject: string[];
        modalDatas: any;
        informationConditionsArretes: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        conditionDebitriceNegocieeSelectionnee: IConditionDebitriceNegociee;
        conditionDebitriceGeneraleCorrespondante: IConditionDebitriceGenerale;
        listePalier: IPalierBaremeDebiteur[];
        listeCodeTauxSubstitution: string[];
        listeTauxSubstitution: any[];
        dateEffet: Date;
        boutonValiderActif: boolean;
        deviseDuCompte: string;
        messageErreurDate: string;
        afficherMessageErreur: boolean;
        ajoutPalierAutorise: boolean;
        constructor($scope: IModalGestionModificationConditionsDebitricesScope, $modalInstance: any, data: any, $modal: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, modifierConditionArreteService: ModifierConditionArreteService, servicesCommuns: ServicesCommuns, mwNotificationService: MyWay.UI.IMwNotificationService);
        getListeTauxSubstitution(conditionDebitriceNegocieeSelectionnee: IConditionDebitriceNegociee): void;
        miseEnFormeConditionDebitriceNegociee(conditionDebitriceNegocieeSelectionnee: IConditionDebitriceNegociee): void;
        sauvegarderModificationConditionDebitrice(): void;
        modifierNombrePalier(estUnAjout: boolean): void;
        remiseEnFormeConditionDebitriceNegocieeSelectionnee(conditionDebitriceNegocieeSelectionnee: IConditionDebitriceNegociee): void;
        changerCodeTaux(numeroPalier: number): void;
        changerMargeClient(numeroPalier: number): void;
        changerVariationPalier(numeroPalier: number): void;
        annuler(): void;
        estDernierPalier(numeroPalier: number): boolean;
        estPremierOuDernierPalier(numeroPalier: number): boolean;
        estNiPremierNiDernierPalier(numeroPalier: number): boolean;
    }
}

declare module composantsCommunsContratCCE {
}

declare module composantsCommunsContratCCE {
    class PageTestControleur {
        localite: string;
        version: string;
        $timeout: ng.ITimeoutService;
        serviceAgent: MyWay.Services.ServiceAgent;
        informationContrat: IInformationGlobaleOuverture;
        informationGlobale: IInformationGlobale;
        constructor(serviceAgent: MyWay.Services.ServiceAgent, $timeout: ng.ITimeoutService);
        testerServiceAgent(): void;
    }
}

declare module composantsCommunsContratCCE {
}

declare module composantsCommunsContratCCE {
    interface IBaremeConditionEtablissement {
        "dateValeurDefaut": IDateValeur[];
    }
}

declare module composantsCommunsContratCCE {
    interface ICaracteristiqueGenerale {
        "fonctionnement": IFonctionnementCatGen;
        "identificationContrat": IIdentificationContrat;
        "messageFonctionnel"?: Array<IMessageFonctionnel>;
    }
}

declare module composantsCommunsContratCCE {
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

declare module composantsCommunsContratCCE {
    interface ICommissionFraisMarche {
        "codeDevise": string;
        "codeGestionTechnique": string;
        "codeNiveauResponsabilite": string;
        "commissionDecouvert": number;
        "commissionDepassement1": number;
        "commissionDepassement2": number;
        "commissionDepassement3": number;
        "commissionImmobilisation": number;
        "dateCreationBareme": string;
        "dateModifBareme": string;
        "fraisOperations": number;
        "indicateurBareme": string;
        "libelleBareme": string;
        "montantFraisTenueCompte": number;
        "numeroBaremeCommission": number;
        "codeMarche": string;
        "commissionMouvement": number;
    }
}

declare module composantsCommunsContratCCE {
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
        dateCreation: Date;
        dateEffet: Date;
        dateFinEffet: Date;
        dateModification: Date;
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
        "codeDeviseCommission"?: string;
        "delaiRenouvellementDebiteur"?: number;
        "numeroBaremeCommissionDefaut"?: number;
        "numeroBaremeCrediteurDefaut"?: number;
        "numeroBaremeDebiteurDefaut"?: number;
        "tauxApplicationFraisOperation"?: number;
        "valeurVariationBaremeDebiteur"?: number;
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionArreteCommission {
        dateEffet: Date;
        numeroBaremeCommission: number;
        numeroBaremeCrediteur: number;
        numeroBaremeDebiteur: number;
        tauxApplicationDecouvert: number;
        tauxApplicationOperation: number;
        tauxApplicationDepassement1: number;
        tauxApplicationDepassement2: number;
        tauxApplicationDepassement3: number;
        tauxApplicationImmobilisation: number;
        tauxApplicationMouvement: number;
        tauxFraisTenueCompte: number;
        variationBaremeCrediteur: number;
        variationBaremeDebiteur: number;
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionArreteSynthese {
        modeArrete: string;
        periodiciteArrete: string;
        periodiciteFutureArrete: string;
        dateChangementPeriodicite: Date;
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
        listePalier: IPalier[];
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionCommissionFrais {
        identificationContrat: IIdentificationContratCommission;
        listeConditionArrete: IConditionArreteCommission[];
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionDebitriceDefaut {
        codeDevise: string;
        identifiantBareme: number;
        indicateurBaremeDefaut: string;
        libelleCourtBareme: string;
        libelleBareme: string;
        margeMaximumBareme: number;
        margeMinimumBareme: number;
        listePalier: IPalier[];
        nombrePaliersActifs: number;
        dateDebutValidite: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionDebitriceGenerale {
        "identifiantConditionDebitriceGenerale": number;
        "dateDebutValidite": string;
        "dateFinEffet": string;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "codeNiveauResponsabilite": string;
        "codeTaux": string;
        "libelleTauxDebiteur": string;
        "periodiciteMajTaux": string;
        "valeurTauxReference": number;
        "indicateurBaremeDefaut": string;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "margeMinimumBareme": string;
        "margeMaximumBareme": string;
        "codeDevise": string;
        "codeTauxSubstitution1": string;
        "libelleTauxSubstitution1": string;
        "valeurTauxSubstitution1": number;
        "periodiciteMajTauxSubstitution1": string;
        "codeTauxSubstitution2": string;
        "libelleTauxSubstitution2": string;
        "periodiciteMajTauxSubstitution2": string;
        "valeurTauxSubstitution2": number;
        "codeTauxUsure": string;
        "libelleTauxUsure": string;
        "valeurTauxUsure": number;
        "codeGestionTechnique": string;
    }
}

declare module composantsCommunsContratCCE {
    interface IConditionDebitriceNegociee {
        "dateDebutValidite": string;
        "dateHeureCreation": string;
        "identifiantBareme": number;
        "libelleCourtBareme": string;
        "libelleBareme": string;
        "margeMaximumBareme": number;
        "margeMinimumBareme": number;
        "montantDecouvert": number;
        "nombrePaliersActifs": number;
        "nombreMaximumPaliers": number;
        "numeroChrono": number;
        "listePalier": IPalier[];
        "indicateurBaremeDefaut"?: string;
        "codeDevise"?: string;
        "codeEtablissement"?: string;
        "codeGuichet"?: string;
        "numeroCompte"?: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IDateValeur {
        typeOperation: string;
        codeProvenance: string;
        nombreJours: number;
        typeCalendrier: string;
        typeOperationInterbancaire: string;
        typeProvenance: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IDateValeurCCE {
        "identificationContrat": IIdentificationContratDatVal;
        "listeDateValeur": IDateValeur[];
    }
}

declare module composantsCommunsContratCCE {
    interface IDevise {
        CILIUD: string;
        COLIDV: string;
        LILIDV: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IDonneesCompte {
        codeGuichet: string;
        numeroCompte: string;
        codeDevise: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
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
}

declare module composantsCommunsContratCCE {
    interface IResultat {
        identifiantPersonne: number;
        codeTypeFamilleResultat: string;
        identifiantProduitService: number;
        codeNatureResultatCommercial: string;
        codeTypeResultatCommercial: string;
        codeTypeProduitService: string;
        indicRattachableCRE: string;
        codeTypeProduitServiceGCP: string;
        codeOrigineFonds: number;
        montantResultatCommercial: number;
        codeModeGestionLivret: string;
        sousCodeProduitService: string;
        codeProduitCarte: string;
        codeModeFinancier: string;
        codeCaractereForfaitaireOffre: string;
        indicProduitServiceObligatoire: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IEtatCompte {
        codeDeviseExpressionMontant: string;
        codeEtatProduitService: string;
        dateOuverture: Date;
        dateCloture: Date;
        soldeCompte: number;
        codeDeviseTenueCompte: string;
        soldeDeviseTenueCompte: number;
    }
}

declare module composantsCommunsContratCCE {
    interface IFonctionnementCatGen {
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
        dateChangementPeriod: Date;
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
}

declare module composantsCommunsContratCCE {
    interface IFonctionnement {
        codeAdresse?: string;
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
        codePeriodiciteReleve?: string;
        dateChangementPeriod?: Date;
        dateClotureCompteCourant?: Date;
        datePassageEuro?: Date;
        dateOuvertureCompteCourant?: Date;
        futurePeriodiciteArrete: string;
        indicAutorisationCmdeChequier: string;
        indicAutorisationCreationDec: string;
        indicAutorisationCmdeCarte: string;
        indicFusionAgios: string;
        indicFusionCapital: string;
        libelleCompte: string;
        libelleLongNature?: string;
        modeArreteCompte: string;
        montantSeuil: number;
        motifClotureCompte?: string;
        codeEtabComptePrlvmtAgios: string;
        numeroCompteAncien: string;
        numeroCompteSuppFactur: string;
        numeroContrat: number;
        numeroComptePrlvmtAgios: string;
        numeroCompteFusion: string;
        soldeDeviseTenueCompte?: number;
        soldeFrancs?: number;
        typeContratEntreprise?: string;
        typeNatureCompte: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IIdentificationContratCommission {
        codeGuichet: string;
        numeroCompte: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        identifiantContrat: number;
    }
}

declare module composantsCommunsContratCCE {
    interface IIdentificationContratDatVal {
        numeroCompte: string;
        codeEtablissement: string;
        numeroOffreSouscrite: number;
        identifiantProduitService: number;
        codeGuichet: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IIdentificationContrat {
        "codeEtablissement": string;
        "codeGuichet": string;
        "numeroEntiteTitulaire"?: number;
        "numeroSirenProfessionnel"?: string;
        "identifiantPersonne"?: number;
        "numeroOffreSouscrite": number;
        "numeroCompte"?: string;
        "codeProduitEngagement"?: string;
        "identifiantContrat"?: string;
        "identifiantProduitService": number;
        "codeNatureCompte"?: string;
        "codeMonnaieFonctionnement"?: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IIndicateurFusion {
        montantSoldeFusionne: number;
        codeTypeFusion: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IInfoDecouvert {
        "numeroContrat": number;
        "codeFonctionnementAutorise": string;
        "montantSeuil": number;
        "codeElementSurveillance": string;
        "modeArreteCompte": string;
        "codePeriodeArreteCompte": string;
        "codeEchelleCompteEnvoi": string;
        "codeEchelleFusionEnvoi": string;
        "indicAutorisationCreationDec": string;
        "codeAutorisationRemuneration": string;
        "codeDepassementAutorisation": string;
        "indicAutorisationCmdeCarte": string;
        "indicAutorisationCmdeChequier": string;
        "indicFusionAgios": string;
        "indicFusionCapital": string;
        "numeroCompteFusion": string;
        "codeDateValeurCheque": string;
        "libelleCompte": string;
        "codeMonnaie": string;
        "futurePeriodiciteArrete": string;
        "dateChangementPeriod": Date;
        "editionEchelleDetCompte": string;
        "editionEchelleDetFusion": string;
        "codeNatureCompte": string;
        "codeGuichet": string;
        "codeEtabComptePrlvmtAgios": string;
        "codeEtabCompteSuppFactur": string;
        "codeEtabCompteFusion": string;
        "numeroComptePrlvmtAgios": string;
        "numeroCompteSuppFactur": string;
        "codeGuichetComptePrlvmtAgios": string;
        "codeGuichetCompteSuppFactur": string;
        "codeGuichetCompteFusion": string;
        "numeroCompteAncien": string;
        "codeEtabCompteAncien": string;
        "codeGuichetCompteAncien": string;
    }
}

declare module composantsCommunsContratCCE {
    interface IInfoSynthese {
        "numeroContrat": number;
        "codeFonctionnementAutorise": string;
        "montantSeuil": number;
        "codeElementSurveillance": string;
        "modeArreteCompte": string;
        "codePeriodeArreteCompte": string;
        "codeEchelleCompteEnvoi": string;
        "codeEchelleFusionEnvoi": string;
        "indicAutorisationCreationDec": string;
        "codeAutorisationRemuneration": string;
        "codeDepassementAutorisation": string;
        "indicAutorisationCmdeCarte": string;
        "indicAutorisationCmdeChequier": string;
        "indicFusionAgios": string;
        "indicFusionCapital": string;
        "numeroCompteFusion": string;
        "codeDateValeurCheque": string;
        "libelleCompte": string;
        "codeMonnaie": string;
        "futurePeriodiciteArrete": string;
        "dateChangementPeriod": Date;
        "editionEchelleDetCompte": string;
        "editionEchelleDetFusion": string;
        "codeNatureCompte": string;
        "codeGuichet": string;
        "codeEtabComptePrlvmtAgios": string;
        "codeEtabCompteSuppFactur": string;
        "codeEtabCompteFusion": string;
        "numeroComptePrlvmtAgios": string;
        "numeroCompteSuppFactur": string;
        "codeGuichetComptePrlvmtAgios": string;
        "codeGuichetCompteSuppFactur": string;
        "codeGuichetCompteFusion": string;
        "numeroCompteAncien": string;
        "codeEtabCompteAncien": string;
        "codeGuichetCompteAncien": string;
    }
}

declare module composantsCommunsContratCCE {
    interface IInformationDateValeur {
        codeDateValeurCheque: string;
        codeGestion: string;
    }
}

declare module composantsCommunsContratCCE {
    interface IInformationGlobale {
        fonctionnement: IFonctionnement;
        conditionDebitriceNegociee: IConditionDebitriceNegociee[];
        etatCompte: IEtatCompte;
        donneesCompte: IDonneesCompte;
        parametresReleve: IParametresReleve;
        indicateurFusion: IIndicateurFusion;
        representantLegal: IRepresentantLegal;
        listeInfomationDateValeur: IInformationDateValeur;
        listeConditionDebitriceDefaut: IConditionDebitriceDefaut[];
        listeConditionDebitriceGenerale: IConditionDebitriceGenerale[];
        listeCommissionFraisMarche: ICommissionFraisMarche[];
        listeCommissionFraisNegociee: ICommissionFraisNegociee[];
        conditionArreteSynthese: IConditionArreteSynthese;
        commissionFraisDefaut: ICommissionFraisDefaut;
    }
}

declare module composantsCommunsContratCCE {
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
}

declare module composantsCommunsContratCCE {
    class ChequesDebites {
        static libelleTypeCalendrier: any;
    }
}

declare module composantsCommunsContratCCE {
    class ErreurDatesDeValeurs {
        static libelleErreur: any;
        static inferieurJInterdit: any;
        static superieurJInterdit: any;
        static superieurJPlus1Interdit: any;
    }
}

declare module composantsCommunsContratCCE {
    class OperationDateDeValeur {
        static libelleOperation: any;
        static libelleTypeCalendrier: any;
        static libelleDateDevaleurAppliquee: any;
    }
}

declare module composantsCommunsContratCCE {
    class InformationFormulaireFonctionnement {
        static libelleArreteMode: any;
        static libelleArretePeriode: any;
        static libelleSurveillance: any;
        static libelleTypeFonctionnement: any;
    }
}

declare module composantsCommunsContratCCE {
    interface IMessageFonctionnel {
        code: string;
        libelle: string;
    }
}

declare module composantsCommunsContratCCE {
    class MessagesErreursProjet {
        static libelleErreur: any;
    }
}

declare module composantsCommunsContratCCE {
    interface IPalierBaremeDebiteur {
        "numeroPalier": number;
        "tauxReference": string;
        "valeurTaux": number;
        "margeTauxReference": number;
        "tauxClientIndicatif": number;
        "borneSuperieure": number;
        "variationBorneSuperieure": number;
        "margeMinimum": number;
        "margeMaximum": number;
    }
}

declare module composantsCommunsContratCCE {
    interface IPalier {
        numeroPalier: number;
        borneInferieure: number;
        borneSuperieure: number;
        margeTauxReference: number;
        tauxReference: string;
        valeurTaux: number;
        variationBorneSuperieure: number;
    }
}

declare module composantsCommunsContratCCE {
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
}

declare module composantsCommunsContratCCE {
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
        dateNaissance: Date;
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
        dateEmbauche: Date;
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
}

declare module composantsCommunsContratCCE {
    interface ITablesDelocalisees {
        "id": string;
        "referentiel": string;
        "nom": string;
        "datemaj": string;
        "donnees": IDevise[];
    }
}

declare module composantsCommunsContratCCE {
    class CreationCCEService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        sauvegarderContratCCE(compteACreer: IIdentificationContrat): ng.IPromise<IIdentificationContrat>;
    }
    interface ICreationCCEService {
        sauvegarderContratCCE: (compteACreer: IIdentificationContrat) => ng.IPromise<IIdentificationContrat>;
    }
}

declare module composantsCommunsContratCCE {
    class DefautService {
        constructor(serviceUrl: string, serviceAgent: MyWay.Services.ServiceAgent);
        details(serviceUrl: string): void;
    }
    interface IDefautService {
        details: (serviceUrl: string) => any;
    }
}

declare module composantsCommunsContratCCE {
    class EntretienCommercialService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        enregistrerResultatEntretien(resultatEntretien: IResultat): ng.IPromise<IResultat>;
    }
}

declare module composantsCommunsContratCCE {
    class InformationsGlobalesService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getInformationsGlobales(informationContrat: IInformationGlobaleOuverture): ng.IPromise<IInformationGlobale>;
        sauvegarderInformationsGlobales(fonctionnementComplet: IFonctionnement, identifiantContrat: IIdentificationContrat): ng.IPromise<ICaracteristiqueGenerale>;
    }
}

declare module composantsCommunsContratCCE {
    class ModifierConditionArreteService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        miseEnFormePalier(listePaliers: IPalierBaremeDebiteur[]): Object[];
        sauvegarderConditionArrete(conditionDebitriceGenerale: IConditionDebitriceGenerale, listePaliers: IPalierBaremeDebiteur[], informationContrat: IInformationGlobaleOuverture): ng.IPromise<IConditionDebitriceNegociee>;
        modifierConditionArrete(conditionArreteDebitrice: IConditionDebitriceNegociee, listePaliers: IPalierBaremeDebiteur[], informationContrat: IInformationGlobaleOuverture): ng.IPromise<IConditionDebitriceNegociee>;
        supprimerConditionArrete(conditionArreteDebitrice: IConditionDebitriceNegociee, informationContrat: IInformationGlobaleOuverture): ng.IPromise<string>;
        sauvegarderConditionCommissionsFrais(commissionFraisMarche: ICommissionFraisMarche, tauxApplication: any, informationContrat: IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<IConditionCommissionFrais>;
        modifierConditionCommissionsFrais(commissionNegociee: ICommissionFraisNegociee, tauxApplication: any, informationContrat: IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<IConditionCommissionFrais>;
        supprimerConditionCommissionsFrais(informationContrat: IInformationGlobaleOuverture, dateEffet: Date): ng.IPromise<IConditionCommissionFrais>;
    }
}

declare module composantsCommunsContratCCE {
    class ModifierDateDeValeurService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getMessageErreur(typeOperation: string): ErreurDatesDeValeurs;
        sauvegarderDatesDeValeurs(contratCCE: IDateValeurCCE): ng.IPromise<IDateValeurCCE>;
    }
}

declare module composantsCommunsContratCCE {
    class MotDePasseService {
        constructor();
        forceDeMotDePasse(motDePasse: string): string;
    }
}

declare module composantsCommunsContratCCE {
    class RecupererConditionArreteService {
        private serviceAgentExtended;
        private servicesCommuns;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, servicesCommuns: ServicesCommuns);
        miseEnFormeDonneesPourAffichageConditionsArretesDebitrices(conditionDebitriceDefaut: IConditionDebitriceDefaut, listeConditionsNegociees: IConditionDebitriceNegociee[], conditionDebitriceGenerales: IConditionDebitriceGenerale[], dateOuvertureContrat: string): IConditionDebitriceNegociee[];
        miseEnFormeDonneesPourAffichageConditionsArretesCommissions(conditionArreteDefaut: ICommissionFraisDefaut, listeConditionArreteNegociee: ICommissionFraisNegociee[], listeCommissionsEtFrais: ICommissionFraisMarche[], dateOuvertureContrat: string): ICommissionFraisNegociee[];
        MiseEnFormeDateDuJours(date: Date): string;
    }
}

declare module composantsCommunsContratCCE {
    class RecupererDateDeValeurService {
        private serviceAgentExtended;
        private mwNotificationService;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended, mwNotificationService: MyWay.UI.IMwNotificationService);
        getLibelleTypeCalendrier(typeCalendrier: string): OperationDateDeValeur;
        getLibelleOperation(typeOperation: string, codeProvenance: string, typeProvenance: string): OperationDateDeValeur;
        getLibelleDateDeValeurAppliquee(typeValeurAppliquee: string): any;
        getListeOperationDateDeValeur(codeEtablissement: string, codeGuichet: string, numeroCompte: string): ng.IPromise<IDateValeur[]>;
        getListeDateDeValeurParDefaut(codeEtablissement: string, codeGuichet: string): ng.IPromise<IDateValeur[]>;
    }
}

declare module composantsCommunsContratCCE {
    class RecupererFonctionnementService {
        private serviceAgentExtended;
        static $inject: string[];
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        getLibelleSurveillance(typeSurveillance: string): InformationFormulaireFonctionnement;
        getLibelleTypeFonctionnement(typeFonctionnement: string): InformationFormulaireFonctionnement;
        getListeTypeFonctionnement(): string[];
        getListeSurveillance(): string[];
    }
}

declare module composantsCommunsContratCCE {
    class ServicesCommuns {
        private serviceAgentExtended;
        static $inject: string[];
        data: Object;
        constructor(serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        miseEnFormeDate(date: Date): string;
        MiseEnFormeDateExistante(date: string): string;
    }
}

declare module composantsCommunsContratCCE {
    class ConditionsArretesControleur {
        private $scope;
        private serviceAgentExtended;
        private recupererConditionArreteService;
        private modifierConditionArreteService;
        private informationsGlobalesService;
        private modalService;
        private servicesCommuns;
        private $location;
        private $anchorScroll;
        private mwNotificationService;
        static $inject: string[];
        /**
         * Paramètres directive
         */
        informationGlobale: IInformationGlobale;
        informationContrat: IInformationGlobaleOuverture;
        informationConditionsArretes: IInformationGlobale;
        dateOuvertureContrat: string;
        deviseDuCompte: string;
        popupConditionArrete: Object;
        listeConditionsArretesDebitrices: any[];
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
        indicateurRequeteEnCours: boolean;
        constructor($scope: ng.IScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, recupererConditionArreteService: RecupererConditionArreteService, modifierConditionArreteService: ModifierConditionArreteService, informationsGlobalesService: InformationsGlobalesService, modalService: MyWay.UI.IModalService, servicesCommuns: ServicesCommuns, $location: ng.ILocationService, $anchorScroll: ng.IAnchorScrollService, mwNotificationService: MyWay.UI.IMwNotificationService);
        initialiserTableaux(): void;
        getAllConditionsArretes(): void;
        selectedLinesPourModificationConditionDebitrice: Array<Object>;
        selectedLinesPourModificationConditionCommissions: Array<Object>;
        construireTableauConditionsArretesDebitrices(conditionDebitriceDefaut: IConditionDebitriceDefaut, listeConditionsDebitricesNegociees: IConditionDebitriceNegociee[], conditionsDebitricesGenerales: IConditionDebitriceGenerale[]): void;
        onSelectionChange(selectedObject: Object): void;
        /**
         * Methode pour savoir si la condition commissions et frais selectionnee est modifiable et supprimable
         */
        isConditionCommissionsFraisModifiableEtSupprimable(): boolean;
        /**
         * Methode pour savoir si la condition debitrice selectionnee est modifiable et supprimable
         */
        isConditionDebitriceModifiableEtSupprimable(): boolean;
        supprimerConditionDebitrice(conditionDebitriceNegociee: IConditionDebitriceNegociee): void;
        private construirePopInConditionDebitrice(url, controller);
        ouvrirPopInAjoutConditionDebitrice(): void;
        ouvrirPopInModificationConditionDebitrice(): void;
        construireTableauConditionsCommissionsEtFrais(conditionArreteDefaut: ICommissionFraisDefaut, listeConditionArreteNegociee: ICommissionFraisNegociee[], listeCommissionsFraisMarche: ICommissionFraisMarche[]): void;
        private construirePopInConditionCommissionsEtFrais(url, controller);
        ouvrirPopInAjoutConditionCommissions(): void;
        ouvrirPopInModificationConditionCommissions(): void;
        supprimerConditionCommissionsEtFrais(conditionCommissionFraisNegociee: ICommissionFraisNegociee): void;
        estConditionCommissionsFraisModifiableEtSupprimable(): boolean;
        estConditionDebitriceModifiableEtSupprimable(): boolean;
    }
}

declare module composantsCommunsContratCCE {
    function mwConditionsArretesCCE(): ng.IDirective;
}
