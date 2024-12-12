
declare module myway.c0410.syntheseCompte {
    var logg: {
        show: (comments: string, values?: any) => void;
        debug: (comments: string, values?: any) => void;
        error: (comments: string, values?: any) => void;
        highlight: (comments: string, values?: any) => void;
        serviceRes: (comments: string, values: any) => void;
        serviceParam: (comments: string, values: any) => void;
        _log: (comments: string, color: string, values: any) => void;
    };
    var app: any;
    interface IRootScope extends ng.IRootScopeService {
        chargementRest: boolean;
        libelleEntiteTitulaire: string;
        donneesEntiteTitulaire1: any;
        syntheseCdd: any;
        numeroCompte1: any;
        libelleCompte1: string;
        donneecharge1: boolean;
        chargementApplication: boolean;
        isCompteSolde: boolean;
        page1: any;
        navigation: Array<MyWay.UI.TotemComponent>;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IListeDeroulante<T extends MyWay.Services.StringEnum> {
        values: typeof MyWay.Services.StringEnum;
        choix?: T;
    }
    class ListeDeroulante<T extends MyWay.Services.StringEnum> implements IListeDeroulante<T> {
        values: typeof MyWay.Services.StringEnum;
        choix: T;
        /**
         * construit une liste déroulante : la liste de ses valeurs et éventuellement une valeur par défaut
         */
        constructor(values: typeof MyWay.Services.StringEnum, choix?: T);
    }
    interface IListeRadios<T extends MyWay.Services.StringEnum> {
        values: typeof MyWay.Services.StringEnum;
        choix?: string;
    }
    class ListeRadios<T extends MyWay.Services.StringEnum> implements IListeRadios<T> {
        values: typeof MyWay.Services.StringEnum;
        choix: string;
        /**
         * construit une liste de radios : la liste de ses valeurs et éventuellement une valeur par défaut
         */
        constructor(values: typeof MyWay.Services.StringEnum, choix?: T);
    }
    /**
     * tous les codes utiles à la recherche d'opérations et définis dans REST-IT
     */
    class CodesRecherche {
        static TOUT: string;
        static DEPOT: string;
        static VIREMENT: string;
        static PRELEVEMENT: string;
        static CB: string;
        static ESPECES: string;
        static AUTRE: string;
        static CHEQUE: string;
        static SERIE_CHEQUES: string;
        static TOUS_CHEQUES: string;
        static DATE: string;
        static DATE_A_DATE: string;
        static DEPUIS_DATE: string;
        static MONTANT: string;
        static FOURCHETTE: string;
        static OPE_TOUTES: string;
        static OPE_CREDIT: string;
        static OPE_DEBIT: string;
        static TRI_RECENT: string;
        static TRI_ANCIEN: string;
    }
    /**
     * liste des critères de recherche
     */
    class TypeCritere extends MyWay.Services.StringEnum {
        static TRANSACTION: TypeCritere;
        static CHEQUE: TypeCritere;
        static DATE: TypeCritere;
        static MONTANT: TypeCritere;
        static TOUT: TypeCritere;
    }
    /**
     * liste des transactions
     */
    class TypeTransaction extends MyWay.Services.StringEnum {
        static DEPOT: TypeTransaction;
        static VIREMENT: TypeTransaction;
        static PRELEVEMENT: TypeTransaction;
        static CB: TypeTransaction;
        static ESPECES: TypeTransaction;
        static AUTRE: TypeTransaction;
    }
    /**
     * liste des choix de chèques
     */
    class TypeCheque extends MyWay.Services.StringEnum {
        static UNITAIRE: TypeCritere;
        static SERIE: TypeCritere;
        static TOUS: TypeCritere;
    }
    /**
     * liste des choix de dates
     */
    class TypeDate extends MyWay.Services.StringEnum {
        disabled: boolean;
        static UNITAIRE: TypeDate;
        static PERIODE: TypeDate;
        static RELEVE: TypeDate;
    }
    /**
     * liste des choix de montants
     */
    class TypeMontant extends MyWay.Services.StringEnum {
        static UN_MONTANT: TypeMontant;
        static FOURCHETTE: TypeMontant;
    }
    /**
     * liste des types d'opérations
     */
    class TypeOperations extends MyWay.Services.StringEnum {
        static TOUTES: TypeOperations;
        static CREDIT: TypeOperations;
        static DEBIT: TypeOperations;
    }
    /**
     * liste des options de tri
     */
    class TypeTri extends MyWay.Services.StringEnum {
        static RECENT: TypeTri;
        static ANCIEN: TypeTri;
    }
}

declare module myway.c0410.syntheseCompte {
    /**
     * controleur de la popup affichant les informations détaillées du graphique
     */
    class DetailsGraphiqueControleur {
        private dataService;
        static $inject: string[];
        private listeOperations;
        colonneAnneeMois: MyWay.UI.ImwTableColumnOptions;
        colonneRevenuRegulier: MyWay.UI.ImwTableColumnOptions;
        colonneSoldeMini: MyWay.UI.ImwTableColumnOptions;
        colonneDateOrigineDebit: MyWay.UI.ImwTableColumnOptions;
        colonneInfractionMontant: MyWay.UI.ImwTableColumnOptions;
        colonneDateInfractionMontant: MyWay.UI.ImwTableColumnOptions;
        colonneInfractionDuree: MyWay.UI.ImwTableColumnOptions;
        colonneDecouvertAutorise: MyWay.UI.ImwTableColumnOptions;
        optionsTableau: MyWay.UI.ImwTableOptions;
        constructor(dataService: DataService);
        imprimer: () => void;
    }
}

declare module myway.c0410.syntheseCompte {
    class DetailsSoldeDisponibleControleur {
        private $modalInstance;
        private serviceAgentExtended;
        private dataService;
        private modalService;
        informationsCDD: IInformationsCDD;
        soldeNet: string;
        autorisationDeDecouvert: string;
        cumulDesReserves: string;
        cumulDesEcartes: string;
        cumulDesImpayes: string;
        planDeReglement: string;
        fondMisADisposition: string;
        reservesDeFond: string;
        soldeDisponible: string;
        devise: string;
        static $inject: string[];
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, dataService: DataService, modalService: MyWay.UI.ModalService);
        valider(): void;
        annuler(): void;
    }
}

declare module myway.c0410.syntheseCompte {
}

declare module myway.c0410.syntheseCompte {
}

declare module myway.c0410.syntheseCompte {
    interface IListCurrency {
        [code: string]: ICodeCurrency;
    }
    interface ICodeCurrency {
        text: string;
        fraction: number;
        symbol: string;
    }
    class OperationsCarteControleur {
        private $scope;
        private $rootScope;
        private $q;
        private $filter;
        private mwEvents;
        private dataService;
        private modalService;
        serviceAgent: MyWay.Services.ServiceAgent;
        private serviceAgentExtended;
        tableauResumeColonneDateExtraction: MyWay.UI.ImwTableColumnOptions;
        tableauResumeColonneNumeroCarte: MyWay.UI.ImwTableColumnOptions;
        tableauResumeColonneNombreOperations: MyWay.UI.ImwTableColumnOptions;
        tableauResumeColonneSommeMontantOperations: MyWay.UI.ImwTableColumnOptions;
        tableauResumeOperationsDebitDiffere: MyWay.UI.ImwTableOptions;
        tableauOperationsColonneDate: MyWay.UI.ImwTableColumnOptions;
        tableauOperationsColonneNumeroCarte: MyWay.UI.ImwTableColumnOptions;
        tableauOperationsColonneLibelleDebit: MyWay.UI.ImwTableColumnOptions;
        tableauOperationsColonneMontantOrigine: MyWay.UI.ImwTableColumnOptions;
        tableauOperationsColonneMontantDeLOperation: MyWay.UI.ImwTableColumnOptions;
        tableauOperationsDebitDiffere: MyWay.UI.ImwTableOptions;
        private donneesInitialisees;
        static $inject: string[];
        constructor($scope: ng.IScope, $rootScope: ng.IRootScopeService, $q: ng.IQService, $filter: ng.IFilterService, mwEvents: MyWay.UI.IMwEvents, dataService: DataService, modalService: MyWay.UI.IModalService, serviceAgent: MyWay.Services.ServiceAgent, serviceAgentExtended: MyWay.Services.ServiceAgentExtended);
        private init();
        onSelectionChange(selectedObjet: Object): void;
        getListeOperationsDebitDiffere(): Array<IResumeOperationDebitDiffere>;
        getLibelleOperation(operation: IResumeOperationDebitDiffere): string;
    }
}

declare module myway.c0410.syntheseCompte {
    class OptionInternationalControleur {
        private $modalInstance;
        private data;
        private serviceAgentExtended;
        private $scope;
        private compteurService;
        private $q;
        private dataService;
        static $inject: string[];
        retraitCarte: string;
        paiementsCarte: string;
        virementsEffectues: string;
        dateSouscription: any;
        titrePopUp: string;
        datedeSouscription: any;
        chargementService: boolean;
        mois: any;
        retraitsEffectues: any;
        paiementEffectues: any;
        virementsEffectuesVal: any;
        isCOMVRI: boolean;
        $rootScope: IRootScope;
        codeEtablissement: string;
        constructor($modalInstance: angular.ui.bootstrap.IModalServiceInstance, data: any, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $scope: ng.IScope, $rootScope: IRootScope, compteurService: OptionInternationalCompteurService, $q: ng.IQService, dataService: DataService);
        valider(): void;
        annuler(): void;
    }
}

declare module myway.c0410.syntheseCompte {
    class RechercheOperationsConstantes {
        static CONS_HIST_OPRT_FINN_LISA: number;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IOperationDebitCredit extends IOperation {
        montantDebit: number;
        montantCredit: number;
    }
    /**
     * controleur pour la popup qui affiche les résultats de la recherche d'opérations
     */
    class ModaleRechercheOperationsControleur {
        private $scope;
        static $inject: string[];
        private listeOperations;
        tableauColonneOptionsDate: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsTransaction: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsDebit: MyWay.UI.ImwTableColumnOptions;
        tableauColonneOptionsCredit: MyWay.UI.ImwTableColumnOptions;
        tableauComplexe: MyWay.UI.ImwTableOptions;
        resultat: string;
        constructor($scope: any);
        imprimer: () => void;
        onSelectionChange(selectedObjet: Object): void;
        /**
         * Permet de formater le montant des opérations "credit" et "depot"
         * @param liste
         */
        formaterListeOperation(liste: IOperation[]): Array<IOperationDebitCredit>;
    }
}

declare module myway.c0410.syntheseCompte {
    class SyntheseCompteConstantes {
        static INTERVENANT_ENTITE_TITULAIRE: string;
        static DECOUVERTS: string;
        static CARACTERISTIQUES_CDD: string;
        static CARACTERISTIQUES_ENGAGEMENT_CLIENT: string;
        static ENGAGEMENT_DE_DOMICILIATION: string;
        static RELEVE_COMPTE: string;
        static RECHERCHE_OPERATIONS: string;
        static SUIVI_PERIODIQUE: string;
        static SERVICES: string;
        static IDEGPS_RETRAIT_DEPLACE_INTERNATIONAL: number;
        static IDEGPS_OPTION_INTERNATIONALE_FORMULE_1: number;
        static IDEGPS_OPTION_INTERNATIONALE_FORMULE_2: number;
        static IDEGPS_OPTION_INTERNATIONALE_FORMULE_3: number;
        static CODIPR_RETRAIT_DEPLACE_INTERNATIONAL: string;
        static CODIPR_OPTION_INTERNATIONALE: string;
    }
    class SyntheseCddControleur {
        private $scope;
        private $filter;
        private $q;
        private dataService;
        private serviceAgentExtended;
        private impressionRibService;
        private modalService;
        static $inject: string[];
        navigation: Array<MyWay.UI.TotemComponent>;
        private servicesPromise;
        servicesGroupes: Array<IServiceGroupes>;
        configTuiles: MyWay.UI.iMwConfigTuile;
        domiciliationRevenus: IEngagementDomiciliation;
        engagementClient: ICaracteristiqueEngagement;
        soldes: ISoldes;
        devise: string;
        optionInternationalLigne: string;
        private codeTypeProduitService;
        localite: string;
        version: string;
        $rootScope: IRootScope;
        constructor($rootScope: IRootScope, $scope: ng.IScope, $filter: ng.IFilterService, $q: ng.IQService, dataService: DataService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, impressionRibService: rib.ImpressionRibService, modalService: MyWay.UI.ModalService);
        isOptionInternational(service: any): string;
        private determinerCodeTypeProduitService(identifiantProduitService);
        onTuileClick(service: IServicePresent): void;
        onAction1: (objetTuile: any) => void;
        onAction2: (objetTuile: any) => void;
        onAction3: (objetTuile: any) => void;
        onAction4: (objetTuile: any) => void;
        onClickLeft: (objetTuile: Object, listeObjetTuile: Object[]) => void;
        testerServiceAgent(): void;
        getStatutDomiciliation: () => string;
        formatDate(date: string): string;
        modifierServices(): void;
        onClickDetails(): void;
    }
}

declare module myway.c0410.syntheseCompte {
}

declare module myway.c0410.syntheseCompte {
    function graphiqueDetails(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
}

declare module myway.c0410.syntheseCompte {
    function graphiqueTooltip(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    function operationsCarte(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    function resultatRecherche(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    function rechercheOperations(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    interface ICaracteristiqueCDD {
        engagementDomiciliation: IEngagementDomiciliation;
        informationsCDD: IInformationsCDD;
        opposition: IOpposition;
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
    interface IEngagementDomiciliation {
        montantEngagementDomiciliation: number;
        codeRespectEngtDomiciliation: string;
        dateDernierControleContrat: Date;
        dateProchainControleContrat: Date;
        periodiciteVersementEnMois: number;
    }
    interface IInformationsCDD {
        codeDevise: string;
        dateTransformationEnEuro: Date;
        montantSoldeEnFrancs: number;
        soldeMinuteCompte: number;
        montantMoyen: number;
        montantSoldePlusBas: number;
        reversementAgios: string;
        codeParametrageDateValeur: string;
        dateDebutSuppressionDateValeur: Date;
        typeOffre: string;
        dateDerniereOperation: Date;
        montantSoldeReelEnFrancs: number;
        anneeDerniereDomiciliation: string;
        moisDerniereDomiciliation: string;
        montantDomiciliationDesRevenus: number;
        cumulReservesEncaissement: number;
        montantDecouvert: number;
        montantCumuleImpayePret: number;
        montantCumuleOperationEcartee: number;
        numeroOffre: number;
        indicateurHabilitationPredic: string;
        indicateurPertinencePredic: string;
        dateSituationPredic: Date;
        codeCouleurMois: string;
        codeDerniereNoteMois: string;
        presenceFranchiseSeuil: string;
        soldeDebiteurAttenduDeviseOrig: number;
        codeEtatProduitService: string;
        dateOuvertureProduitService: string;
        dateAvenantProduitService: Date;
        dateClotureProduitService: Date;
        soldePlusHautParPeriode: number;
        codeAppliRemunerationCompte: string;
        dateDebutAppliRemuneration: Date;
        tauxRemunerationCompteCDD: number;
        indicateurGestionContentieuse: string;
        indicateurCompteInactif: string;
        montantSoldeDisponibleCDD: number;
        indicateurRevenusReguliers: string;
        typeClotureCDD: string;
        /**
         * Cumul Fonds mis à dispo. INSTP
         */
        cumulFondsMisADispoINSTP: number;
        /**
         * Cumul Réserves fonds INSTPAY
         */
        cumulReservesFondsINSTPAY: number;
    }
    interface IOpposition {
        codeOpposition: string;
        libelleOpposition: string;
        libelleOppositionComplement: string;
        libelleInfoService1: string;
        libelleInfoService2: string;
        libelleInfoService3: string;
        dateDebutEffetOpposition: Date;
        dateFinEffetOpposition: Date;
        identifiantOpposition: number;
        indicateurOppositionCondition: string;
    }
    interface ISoldes {
        actuel: number;
        disponible: number;
    }
}

declare module myway.c0410.syntheseCompte {
    interface ICompteurOperation {
        codeEtab: string;
        codeGuichet: string;
        codeProduit: string;
        referenceProduitService: string;
        anneeMoisTraitementSsaamm: number;
        codeRegroupementServiceGratuit: string;
        nbOperationsAttenteTarification: number;
        qtGratuiteUtilisePeriodeEnCours: number;
        quantiteMaximunServiceGratuit: number;
        codePrestationTarifiableExt: number;
        codeEtat: string;
    }
    class CompteurOperation implements ICompteurOperation {
        codeEtab: string;
        codeGuichet: string;
        codeProduit: string;
        referenceProduitService: string;
        anneeMoisTraitementSsaamm: number;
        codeRegroupementServiceGratuit: string;
        nbOperationsAttenteTarification: number;
        qtGratuiteUtilisePeriodeEnCours: number;
        quantiteMaximunServiceGratuit: number;
        codePrestationTarifiableExt: number;
        codeEtat: string;
    }
}

declare module myway.c0410.syntheseCompte {
    /**
     * décrit les propriétés/bloc à afficher dans l'application
     */
    interface IConfigurationIHM {
        /**
         * indique si l'on affiche le bouton pour "Imprimer RIB" dans le bloc synthèse compte (1er bloc)
         */
        imprimerRICE: boolean;
        /**
         * indique si l'on affiche le bloc de fonctionnement du compte (graphique)
         */
        fonctionnement: boolean;
        /**
         * indique si l'on affiche le bloc des services
         */
        services: boolean;
        /**
         * indique les types (T/N/P) de découverts que l'on peut afficher dans le graphique
         */
        typesDecouverts?: Array<IDataDescription>;
        /**
         * indique les propriétés que l'on peut afficher dans le graphique
         */
        proprietesGraphique: Array<IDataDescription>;
    }
    /**
     * description de propriétés pouvant être utilisés dans le graphique
     */
    class IProprietes {
        static REVENUS: IDataDescription;
        static SOLDE_MIN: IDataDescription;
        static DECOUVERT_PERMANENT: IDataDescription;
        static DECOUVERT_NEGOCIE: IDataDescription;
        static DECOUVERT_TECHNIQUE: IDataDescription;
    }
    /**
     * configuration pour un CODIPR = 4
     */
    class ConfigurationIHM0004 implements IConfigurationIHM {
        imprimerRICE: boolean;
        fonctionnement: boolean;
        services: boolean;
        typesDecouverts: Array<IDataDescription>;
        proprietesGraphique: Array<IDataDescription>;
        constructor();
    }
    /**
     * configuration par défaut
     */
    class ConfigurationIHMDefault implements IConfigurationIHM {
        imprimerRICE: boolean;
        fonctionnement: boolean;
        services: boolean;
        proprietesGraphique: Array<IDataDescription>;
        constructor();
    }
}

declare module myway.c0410.syntheseCompte {
    interface IInfosGenerales {
        codeEtablissement: string;
        codeGuichet: string;
        codeProduit: string;
        numeroCompte: string;
        sousCodeProduit: string;
        soldeCapital: number;
        codeEtatProduit: boolean;
        dateOuverture: string;
        numeroOffreSouscrite: number;
        indicateurOpposition: boolean;
        nombreInstanceLivret: number;
        dateDerniereOperation: string;
        dateCloture: string;
        referenceExterneEDS: number;
        libelleElementStructure: string;
        designationBancaireCourte: string;
        codeTypeUsage: string;
        codeDevise: string;
        dernierNumeroLigneEditee: number;
        identifiantProduitService: number;
        tauxInteret: number;
        soldeDisponible: number;
    }
    interface IPersonnes {
        numeroPersonne: number;
        codeCivilite: string;
        nomFamille: string;
        prenom: string;
        dateNaissance: string;
        nomUsage: string;
        rangEtatCivil: string;
        codeTypeLien: string;
        codeFamilleLienInterPers: string;
    }
    interface IFonctionnement {
        indicateurMontantPlafond?: boolean;
        montantPlafond?: number;
        montantPlafonApresCapit?: number;
        dateTransformationEuro?: string;
        capitalEuro?: number;
        capitalFranc?: number;
        codeDevise?: string;
        codeModeGestion?: string;
        anneePrescription?: string;
        soldeMinReglementaire?: number;
        soldeMaxReglementaire?: number;
    }
    interface IInterets {
        dateDernierCapit: string;
        interetAcquisDerniereCapi: number;
        montantInteretsAnticipes: number;
        cumulInteret: number;
    }
    interface IProduitEngage {
        tracabilite: ITracabilite;
        partage: IPartage;
    }
    interface ITracabilite {
        indicOptionTracabilite: boolean;
        libelleDomaine: string;
        codeUnivers: string;
    }
    interface IPartage {
        indicOptionPartage: boolean;
        raisonSocial: string;
        valeurTauxPartage: number;
    }
    interface ISpecifiqueLivretJeune {
        autorisationRetraitMoins16Ans: boolean;
        autorisationRetraitMoins18Ans: boolean;
        presenceOpposition: boolean;
    }
    interface ITitulaire {
        numeroEntiteTitulaire: number;
        designationBancaireCourte: string;
        codeEtatPersonne: string;
        codeTypeUsage: string;
        modeComposition: string;
        libelleElementStructure: string;
        identifiantElementStructure: number;
        referenceExterneEDS: number;
    }
    interface IPersonne {
        numeroPersonne: number;
        codeCivilite: string;
        nomFamille: string;
        prenom: string;
        dateNaissance: string;
        nomUsage: string;
        rangEtatCivil: string;
        codeTypeLien: string;
        numeroEntiteTitulaire: number;
        codeFamilleLienInterPers: string;
    }
    interface IVersementPeriodique {
        periodicite: string;
        capitalAEcheance: number;
        valeurNetteAEcheance: number;
        typeVersementPeriodique: string;
        dateProchainPrelevement: string;
        dateDernierPrelevement: string;
        prelevementCompteInterne: IPrelevementCompteInterne;
        prelevementCompteExterne: IPrelevementCompteExterne;
        respectContrat: IRespectContrat;
        infosPrime: IInfosPrime;
        montantPeriodique: number;
    }
    interface IInfosCloture {
        dateCloture: string;
        typeCloture: string;
        montantDroitsAPrets: number;
        tauxGestionPEL: number;
        capital: number;
        interetsBruts: number;
        interetsNets: number;
        primePaye: boolean;
        libellePrime: string;
        fiscalitePrime: number;
        fiscaliteInterets: number;
        primeNette: number;
        totalBrut: number;
        totalFiscalite: number;
        totalNet: number;
        primeBrute: number;
    }
    interface IRespectContrat {
        codeEtatContractuel: string;
        montantARegulariser: number;
    }
    interface IInfosPrime {
        codeEtatDemandePrime: string;
    }
    interface IPrelevementCompteExterne {
        infosMandat: IInfosMandat;
        referenceMandat: string;
    }
    interface IInfosMandat {
        codeBIC: string;
        numeroIBAN: string;
        nomDebiteur: string;
        prenomDebiteur: string;
        ligneAdresse1: string;
        ligneAdresse2: string;
        ligneAdresse3: string;
        ligneAdresse4: string;
        codePostal: string;
        nomLocalite: string;
    }
    interface IPrelevementCompteInterne {
        numeroRice: string;
    }
    interface IDonneesProrogation {
        codeRefusProrogAutomatique: string;
        dateRefusProrogAutomatique: string;
    }
    interface IInfosFiscalite {
        codeOptionFiscale: number;
        codeResidenceFiscale: string;
    }
    interface ISpecifiquePEL {
        dateDebut: string;
        dateFinPrevue: string;
        tauxClient: number;
        tauxGestion: number;
        typeOuverture: string;
        dureeContractuelle: number;
        dureeEffective: number;
        versementPeriodique: IVersementPeriodique;
        infosCloture: IInfosCloture;
        infosPrime: IInfosPrime;
        respectContrat: IRespectContrat;
        infosFiscalite: IInfosFiscalite;
        donneesProrogation: IDonneesProrogation;
        listeInteretsAnneeCivile: Array<IInteretAnneeCivile>;
        interetAcquisBaseCalculPrime: number;
        interetAcquis: number;
    }
    interface IInteretAnneeCivile {
        annee: string;
        fiscalite: string;
        interetProductif: number;
        interetsAcquis: number;
        interetsAcquisBaseCalculPrime: number;
    }
    interface ISpecifiqueLEP {
        listeDetailInterets: Array<IDetailInterets>;
        anneeAyantDroitLep: string;
        indicAyantDroitAJustifier: boolean;
        codeJustificatif: string;
        datePresentationJustif: string;
    }
    interface IDetailInterets {
        libelle: string;
        montant: number;
    }
    interface IDetailInteretsOld {
        codeDevise: string;
        revenusIndexesBrutsAcquis: number;
        interetAcquisCapitauxStables: number;
        montantPrime: number;
        soldeCompte: number;
        montantInteretAnticipes: number;
        dateSoldeMoisMoins1: string;
        montantSoldeMoisMoins1: number;
        dateSoldeMoisMoins2: string;
        montantSoldeMoisMoins2: number;
        dateSoldeMoisMoins3: string;
        montantSoldeMoisMoins3: number;
        dateSoldeMoisMoins4: string;
        montantSoldeMoisMoins4: number;
        dateSoldeMoisMoins5: string;
        montantSoldeMoisMoins5: number;
        dateSoldeMoisMoins6: string;
        montantSoldeMoisMoins6: number;
        mtInteretAcquisTransfert: number;
        anneeAyantDroitLEP: string;
        nombreQuinzainesRestantACourir: number;
        capitalStableSemestriel: number;
        dateOuverturePS: string;
    }
    interface ISpecifiqueLGP {
        listeInteretsEnCours: Array<IInteretEnCours>;
        listeInteretsHistorique: Array<IInteretHistorique>;
    }
    interface IInteretEnCours {
        periode: string;
        interetsAuTauxFidelite: string;
    }
    interface IInteretHistorique {
        periode: string;
        interetsAuTauxFidelite: string;
    }
    interface ISpecifiqueLGF {
        listeInteretsHistorique: Array<IInteretHistorique>;
        listeInteretsEnCours: Array<IInteretEnCours>;
    }
    interface ISpecifiqueLE {
        interetAcquisDerniereBalance: number;
        primeAnticipesAvantOpe: number;
    }
    interface IFiscalite {
        codeOptionFiscale: string;
    }
    interface ISpecifiqueCEL {
        detailInteretCEL: IDetailInteretCEL;
    }
    interface IDetailInteretCEL {
        codeDevise: string;
        dateDepartDroitAPret: string;
        dateArreteInterets: string;
        dateFinValiditeRlvInterts: string;
        mtInteretAcquisTransfert: number;
        cumulInteretAcquis: number;
        listeInteretCEL: Array<IInteretCEL>;
    }
    interface IInteretCEL {
        taux: string;
        interetsAcquis: number;
        interetsUtilises: number;
        dateFinCalcul: string;
    }
    interface ISpecificiteSLR {
        primeAnticipesAvantOpe: number;
        codeOptionFiscale: string;
    }
    interface IConsultation {
        infosGenerales: IInfosGenerales;
        listePersonnes: Array<IPersonnes>;
        titulaire: ITitulaire;
    }
    interface IConsultationCompleter extends IConsultation {
        fonctionnement: IFonctionnement;
        interets: IInterets;
    }
    interface IConsultationPel extends IConsultationCompleter {
        specifiquePEL: ISpecifiquePEL;
    }
    interface IConsultationProduitEngage extends IConsultationCompleter {
        produitEngage: IProduitEngage;
    }
    interface IConsultationLJ extends IConsultationProduitEngage {
        specifiqueLivretJeune: ISpecifiqueLivretJeune;
    }
    interface IConsultationLep extends IConsultationProduitEngage {
        specifiqueLEP: ISpecifiqueLEP;
    }
    interface IConsultationCel extends IConsultationCompleter {
        specifiqueCEL: ISpecifiqueCEL;
    }
    interface IConsultationSlr extends IConsultationCompleter {
        specificiteSLR: ISpecificiteSLR;
    }
    interface IConsultationLivretB extends IConsultationProduitEngage {
        specifiqueLGP: ISpecifiqueLGP;
        specifiqueLGF: ISpecifiqueLGF;
        specifiqueLE: ISpecifiqueLE;
        fiscalite: IFiscalite;
    }
}

declare module myway.c0410.syntheseCompte {
    /**
     * description du contexte utilisé par l'application
     */
    interface IContexte {
        id: string;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        numeroDeCompte: string;
        identifiantEntiteTitulaire: string;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IRecherche {
        parametre: IParametreDeRecherche;
        /**
         * Liste des contrats cartes correspondant aux critères de recherche.
         */
        contratsCartes: Array<IContratCarte>;
        informationComplementaire: IInformationComplementaire;
    }
    interface IParametreDeRecherche {
        /**
         * Identifiant d'un Etablissement du RCE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Ce code permet de déterminer le type d'information carte que le client désire.
         *
         * Valorisation:
         * - __X__ pour Toutes les cartes sont retournées
         * - __U__ pour Seule la carte de référence est retournées
         * - __R__ pour Carte à remettre
         */
        typeInterrogationPourLesCartes: string;
        /**
         * Code permettant de définir le mode de recherche à utiliser. Détail exhaustif dans les paramètres d'appel de la ressource.
         *
         * Valorisation:
         * - 1 : Recherche des contrats cartes par type de compte.
         * - 2 : Recherche des contrats cartes par identifiant de la personne.
         * - 3 : Recherche des cartes actives du titulaire pour le chainage du code secret.
         * - 4 : Recherche des contrats cartes par première personne en relation.
         * - 5 : Recherche des cartes pouvant être remises d'une personne.
         * - 6 : Recherche des cartes pouvant être remises d'un compte.
         * - 7 : Recherche des porteurs en déplacement en fonction d'une carte.
         * - 8 : Recherche des cartes en cours de validité d'un compte, dans le cadre du projet Gestion Porteur Abusif.
         * - 9 : Recherche des comptes préabusif à partir du code banque du code guichet, du type de recherche ainsi que de la date de recherche.
         * - 10 : Recherche des cartes et contrats cartes en instance.
         * - 11 : Recherche des informations d'une carte à partir de son numéro.
         * - 12 : Recherche Liste cartes d'un contrat
         */
        codeTypeRecherche: number;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Établissement du Groupe CE) est répertorié par la Banque de France. Cf Fichier des implantations bancaires. Un Établissement bancaire peut disposer de plusieurs guichets.
         */
        codeGuichetInterbancaire: string;
        /**
         * Identifie la première personne liée par un lien inter-personnes avec une 2ième personne selon un type de lien.
         */
        premierePersonneEnRelation: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un type :
         * - siège
         * - agence
         * - service
         * - poste fonctionnel
         * - ...
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementDeStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un type :
         * - siège
         * - agence
         * - service
         * - poste fonctionnel
         * - ...
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementDeStructureBis: number;
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS Perso.
         */
        identifiantDeLaPersonne: number;
        /**
         * Identifiant d'un Etablissement du RCE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissementBis: string;
        /**
         * Cette rubrique permet le type de recherche que l'on effectue dans le cadre de la gestion des pré-abusifs par liste.
         *
         * Valorisation :
         *
         * - __'1'__ : comptes en pré-abusifs
         * - __'2'__ : comptes en levée de pré-abusifs
         * - __'3'__ : comptes déclarés BDF
         * - __'4'__ : comptes en levée de déclaration BDF
         */
        codeFonctionChoixRechercheEtatCompte: string;
        /**
         * Date à laquelle le compte a été mis dans un certain état: pré-abusif, levée de pré-abusif, déclaration BDF, levée BDF
         * Type date au format yyyy-MM-dd
         */
        dateRechercheDeLEtatDuCompte: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Établissement du Groupe CE) est répertorié par la Banque de France. Cf Fichier des implantations bancaires. Un Établissement bancaire peut disposer de plusieurs guichets.
         */
        codeGuichetInterbancaireBis: string;
        /**
         * Date à laquelle le compte a été mis dans un certain état: pré-abusif, levée de pré-abusif, déclaration BDF, levée BDF
         * Type date au format yyyy-MM-dd
         */
        dateRechercheDeLEtatDuCompteBis: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du GCE. Correspond à un type :
         * - siège
         * - agence
         * - service
         * - poste fonctionnel
         * - ...
         *
         * Numéro chronologique attribué par le système : Référence unique dans MYSYS (identifiant interne).
         */
        identifiantElementDeStructureTiers: number;
        /**
         * Date d'ouverture administrative d'un produit ou d'un service.
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureProduitOuService: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS (LICEEL) et de la désignation de l'EDS (LICELI)
         * Sauf si l'EDS est un PF, on trouve alors le Nom+Prénom de l'Agent titulaire du PF précédé de la civilité (Mr...)
         */
        designationLongueElementStructure: string;
    }
    interface IContratCarte {
        historiqueDesCartes: Array<ICarteDuContratCarte>;
        /**
         * Numéro d'identification d'un compte géré par un Etablissement du GCE.
         */
        numeroDeCompte: string;
        /**
         * Numéro d'identification du contrat carte incrémenté de 1 à chaque ouverture (identifiant).
         */
        numeroDuContratCarte: number;
        proprietaire: IProprietaireDuContratCarte;
        serviceDerogatoire: IServiceDerogatoireDuContratCarte;
        option: IOptionDuContratCarte;
        /**
         * Date ouverture du contrat carte.
         * Type date au format yyyy-MM-dd
         */
        dateDOuvertureDuContratCarte: string;
        /**
         * Date modification TP du contrat carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeModificationDuContratCarte: string;
        /**
         * Date de fin du contrat carte: Annulation ou résiliation.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinDuContratCarte: string;
        /**
         * Détermine le type de carte : produit au catalogue du progiciel TIM.
         *
         * Codification _Fnnnn_, F représente le niveau de fonctionnalité :
         * - __0__ : carte particulier immédiat
         * - __1__ : carte particulier différé
         * - __2__ : carte professionnelle immédiat
         * - __3__ : carte professionnelle différé
         * - __4__ : carte de remplacement différé
         * - __5__ : carte de remplacement immédiat
         */
        codeDuProduitCarte: string;
        /**
         * Détermine le produit carte à fabriquer lors du remplacement de la carte.
         */
        codeDuProduitCarteDeRemplacement: string;
        /**
         * Numéro d'identification de l'offre souscrite par un client d'un Etablissement du Groupe CE.
         *
         * Package qui globalise des services et des produits autour éventuellement d'un compte de dépots (ou compte courant) pour un tarif en général forfaitaire.
         *
         * Référencement des offres souscrites dans la table BU1A / appli REFCONTR
         *
         * Numéro chrono attribué par le système: Référence unique dans MYSYS, Table de compostage BU9A / appli REFCONTR
         */
        numeroDeLOffreSouscrite: number;
        /**
         * Numéro d'identification d'un produit ou service dans le Catalogue des produits/services MYSYS.
         *
         * Numéro chronologique attribué par le système :
         * - __P/S simple__ : référence unique dans MYSYS
         * - __autres P/S__ : référence unique par Etablissement
         */
        identifiantDuProduitOuService: number;
        /**
         * Mot de passe cartes VISA premier.
         */
        motDePasse: string;
        /**
         * Date d'enregistrement de la signature du contrat.
         * Type date au format yyyy-MM-dd
         */
        dateDeSignatureDuContratCarte: string;
        /**
         * Identifie une agglomération dans la nomenclature du personnalisateur (Prestataire NATIXIS). Concerne la carte sans contact multiservice (CSCM). Un établissement peut concerner plusieurs réseaux.
         */
        identifiantDuReseauCommercial: string;
        /**
         * Libellé réseau commercial.
         */
        libelleDuReseauCommercial: string;
        /**
         * Référence d'identification d'un compte bancaire d'un Etablissement (Etab de crédit ou Institution financière) en France. Compose l'IBAN / Identification internationale format :
         * - code banque - X5 - COHCBQ
         * - code guichet - X5 - COHCGU
         * - numéro de compte - X11 - IDHDCP
         * - cle RIB - X2 - IKHDCL
         *
         * Dénommé RICE pour les Caisses d'Epargne.
         */
        numeroRIBDuCompte: string;
        /**
         * Les valeurs ci-après sont définies dans la gestion du logiciel:
         * - __001__ : changement de produit
         * - __002__ : volonté client
         * - __003__ : opposition abusive
         * - __004__ : opposition frauduleuse
         * - __005__ : volonté agence
         * - __006__ : contrat échu
         */
        codeDuMotifDeBlocageDuContratCarte: string;
        /**
         * Détermine, pour un contrat, lors du renouvellement automatique d'une carte spécifique à échéance, le mode d'envoi de la carte au client.
         *
         * Valorisation:
         * - _blanc_ : Le mode envoi standard défini par l'établissement sera appliqué. (valeur à blanc).
         * - __1__ : Envoi carte à l'agence de distribution
         * - __2__ : Envoi carte au client par le personnalisateur
         */
        codeDuModeDEnvoiDeLaCarteAEcheance: string;
        /**
         * Identifiant de l'élément de structure de distribution de la carte au client.
         */
        identifiantElementDeStructureDeDistribution: number;
        /**
         * Désignation décrivant l'élément de structure. Cette désignation est construite par concaténation du libellé court du type d'EDS (LCCEEL) et de la désignation de l'EDS (LICELI).
         * Sauf si l'EDS est un PF on trouve alors le Nom+Prénom de l'Agent titulaire du PF.
         */
        libelleCalculeCourtEDS: string;
        /**
         * Code situation du contrat carte.
         *
         * Valorisation:
         * - __00__ : Contrat en cours
         * - __01__ : Contrat bloqué
         * - __10__ : contrat résilié
         * - __13__ : Contrat sans carte
         * - __99__ : Contrat en instance
         */
        codeDeSituationDuContratCarte: string;
        /**
         * Contient le code visuel de la carte.
         */
        codeVisuelDeLaCarte: string;
        /**
         * Détermine la présentation (graphisme) de la carte selon le catalogue de l'application CARTOPPO.
         */
        codeDeRepresentationGraphiqueDeLaCarte: string;
        /**
         * Libellé de désignation du code visuel carte. Sert à l'affichage des interfaces.
         */
        libelleLongDuVisuelDeLaCarte: string;
        /**
         * Détermine, pour un contrat, lors du renouvellement automatique d'une carte à échéance,
         * le mode d'envoi de la carte au client.
         *
         * Valorisation:
         * - _blanc_ : Le mode envoi standard défini par l'établissement sera appliqué. (valeur à blanc).
         * - __0__ : Pas utilisé.
         * - __1__ : Envoi carte au guichet de distribution.
         * - __2__ : Envoi carte au client en pli simple.
         * - __3__ : Envoi carte au client en pli recommandé.
         */
        codeDuModeDEnvoiDeLaCarteAEcheanceBis: string;
        /**
         * Numéro d'identification du contrat TAP. Concerne les cartes co-brandées TAP Victoria spécifique à la banque BCP. Donnée fournie par le partenaire sous forme de fichier.
         */
        numeroDuContratTAP: number;
        /**
         * Référence d'identification du contrat dans le SI Natixis (producteur) / CEFI. Concerne les produits :
         * - cartes TEOZ, AURORE, IZICARTE,
         * - prêts personnels
         */
        identifiantDuContratCEFI: string;
        /**
         * Identifie un dossier crédit dans un système de gestion (Alis Financement, Orfi...).
         */
        numeroDeDossierCredit: string;
        /**
         * Contient le code motif de commande à échéance de la carte. Ce motif permet d'appliquer une prestation spécifique lors du renouvellement.
         */
        codeDuMotifDeCommandeAEcheance: string;
        /**
         * Contient le code visuel à échéance de la carte. Ce code visuel sera appliqué au renouvellement à échéance de la carte.
         */
        codeVisuelAEcheance: string;
        /**
         * dénomination du type de l'élément de structure
         */
        libelleLongTypeEDS: string;
        /**
         * Désignation décrivant l'élément de structure. Cette désignation est construite par concaténation du libellé court du type d'EDS (LCCEEL) et de la désignation de l'EDS (LICELI).
         * Sauf si l'EDS est un PF on trouve alors le Nom+Prénom de l'Agent titulaire du PF.
         */
        libelleCalculeCourtEDSBis: string;
        historiqueDesCartesTEOZ: Array<ICarteTEOZ>;
        /**
         * Variantes cartes dans les différents pays.
         *
         * Valorisation :
         *
         * - __'00'__ : VISA     : Non diffusé dans les listes noires
         * - __'01'__ : VISA     : U.S.A.
         *              Californie, Hawai, Nevada
         *            EUROCARD : Idem
         * - __'02'__ : VISA     : U.S.A.
         *              Alaska, Arizona, Idaho, Oregon, Utah, Washington
         *            EUROCARD : Idem
         * - __'03'__ : VISA     : U.S.A.
         *              Colorado, Iowa, Kansas, Minnesota, Montana, Nebraska
         *                Nouveau Mexique, Dakota du Nord, Dakota du Sud,
         *                Wyoming
         *            EUROCARD : Idem
         */
        codeRegionMonde: string;
        /**
         * Numéro de contrat carte en instance.
         * Numéro séquentiel unique toutes caisses confondues.
         */
        numeroDuContratCarteEnInstance: number;
        /**
         * Occurence de date prise dans l'ensemble des dates
         * Type date au format yyyy-MM-dd
         */
        date: string;
        /**
         * Correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France
         */
        codeGuichet: string;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructure: number;
        /**
         * Numéro d'identification interne d'un élément de structure d'un Etablissement du RCE.
         */
        identifiantElementStructureBis: number;
        /**
         * Désignation décrivant l'élément de structure
         */
        designationElementStructure: string;
        /**
         * Désignation longue de l'élément de structure
         */
        designationAgentInterne: string;
        /**
         * codifie le motif justifiant la commande d'une carte ou d'un code confidentiel.
         */
        motifCommande: string;
        /**
         * Détermine si le service inhibition de la VAD est
         * disponible
         */
        indicateurInhibitionVAD: boolean;
        /**
         * Détermine les valeurs du degré d'inhibition que le
         *             client souhaite appliquer pour la vente à distance sur
         *             une de ses cartes.
         *             Option accessible uniquement pour les cartes ouvertes
         *             au service d'inhibition VAD dans le paramétrage
         *             produit (KU5E.CIKTIV = 'O').
         *
         *             Valeurs :
         *  ' '        Initialisation
         *  'N'        Service d'inhibition indisponible
         *  '0'        Pas d'inhibition VAD
         *  '1'        Blocage de la VAD sur Internet
         *  '2'        Blocage de la VAD, sauf les paiements récurrents
         *  '3'        Blocage total de la VAD
         */
        codeInhibitionVAD: string;
        /**
         * Identifiant personne représentant un organisme bénéficiaire.
         */
        idPersReprOrgnBenf: number;
        /**
         * Montant don unitaire client carte.
         */
        mtDonUntrClntCarte: number;
        /**
         * Montant seuil alerte dons carte.
         */
        mtSeuilAlrtDonsCarte: number;
        /**
         * Indicateur suspension des dons.
         *
         * Valorisation :
         *
         * - __'O'__ : Oui
         * - __'N'__ : Non
         */
        indicSuspDons: string;
        /**
         * Indicateur activation Service DONS.
         *
         * Valorisation :
         *
         * - __'O '__ : Oui
         * - __'N '__ : Non
         * - __'NC'__ : Non Concerné
         */
        indicActivServDons: string;
        /**
         * Indicateur éligilité Geoblocking
         */
        indicateurEligiliteGeoblocking: string;
        /**
         * Code activation Geoblocking
         * Valeurs possibles
         * N	-  Ne rien afficher
         * " "	-  Le service est disponible mais le client n’a jamais choisi le service ,service inactif
         * 0	-  Pas de géoblocking, service inactif
         * 1	-  Géoblocking activé ,service actif
         */
        codeActivationGeoblocking: string;
    }
    interface ICommandeDeLaCarte {
        /**
         * Date à laquelle la carte nous est parvenue du fournisseur.
         * Type date au format yyyy-MM-dd
         */
        dateDeRetourDeLaCommande: string;
        /**
         * Date à laquelle a été extraite puis envoyée chez le fournisseur, la demande de carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeLaCommandeDeLaCarte: string;
        /**
         * Précise le motif justifiant la commande d'une carte ou d'un code confidentiel.
         *
         * Exemple:
         * - __00__ : Premiere carte du contrat
         * - __01__ : Ancienne carte echue
         * - __02__ : Ancienne carte perdue
         */
        codeDuMotifDeLaCommande: string;
        /**
         * Libellé du motif de commande de carte recherché en central pour le local.
         */
        libelleDuMotifDeLaCommande: string;
    }
    interface IOppositionSurLaCarte {
        /**
         * Code motif de l'opposition de la carte interbancaire.
         *
         * Valorisation:
         * - __V__ : vol
         * - __A__ : abusif
         * - __P__ : perte
         * - __F__ : contrefaçon
         * - __X__ : non parvenu
         */
        codeDuMotifDOpposition: string;
        /**
         * Libéllé du motif opposition interbancaire d'une carte.
         */
        libelleDuMotifDOpposition: string;
        /**
         * Date de début d'effet d'une opposition sur carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutDEffetDeLOpposition: string;
        /**
         * SSAAMMJJ - Renseignée automtiquement si carte en opposition
         * Type date au format yyyy-MM-dd
         */
        dateDOpposition: string;
        /**
         * Date à laquelle le client déclare la perte, le vol ou tout autre motif de mise en opposition de sa carte.
         * Peut être égale ou antérieure, mais jamais postérieure à la date de saisie de l'opposition.
         *
         * Sous la forme SSAAMMJJ.
         * Type date au format yyyy-MM-dd
         */
        dateDeclarationOppositionCarte: string;
        /**
         * Heure à laquelle le client a déclaré l'opposition de sa carte. Peut être égale ou antérieure à l'heure de saisie.
         *
         * Sous la forme HHMM
         */
        heureDeclarationOppositionCarte: number;
        /**
         * Il s'agit d'un numéro authentifiant la déclaration de perte ou vol de carte faite auprès du CACB (Centre d'Appels Carte Bleue) ou auprès du SVNCE (Serveur Vocal des Caisses d'Epargne).
         */
        numeroAutorisationOpposition: number;
        dateDeConfirmationOppposition: string;
        /**
         * Lieu de déclaration d'une opposition carte
         *
         * Valorisation :
         *
         * - __1__ : CACB (Centre d'Appels Carte Bleue)
         * - __2__ : SVN (Serveur Vocal National des Caisses d'Epargne)
         * - __7__ : CTB (Centre de Traitement Bancaire CCCEP)
         * - __5__ : VDX (Minitel)
         * - __3__ : Agence
         * - __6__ : Siège
         * - __4__ : Téléphone
         */
        codeLieuDeclarationOppositionCarte: string;
        /**
         * Date du jour de mainlevée de l'opposition par l'Etablissement en interactif.
         *
         * Sous la forme SSAAMMJJ.
         * Type date au format yyyy-MM-dd
         */
        dateMainLeveeOppositionCarte: string;
        /**
         * Date à laquelle la compte a été mis dans l'état pré-abusif
         * Type date au format yyyy-MM-dd
         */
        dateCreationOppositionPreAbusif: string;
        /**
         * Date à laquelle le compte a été mis dans l'état levée de pré-abusif
         * Type date au format yyyy-MM-dd
         */
        dateDeMiseEnLeveeDePreAbusif: string;
        /**
         * Date à laquelle la demande de déclaration BDF du compte a été faite
         * Type date au format yyyy-MM-dd
         */
        dateDemandeDeclarationBDF: string;
        /**
         * c'est la date de déclaration d'opposition sur le compte transmise par la BDF.
         * Type date au format yyyy-MM-dd
         */
        dateDeclarationBDFOppositionCompte: string;
        /**
         * c'est la date de demande de levée d'opposition sur le compte transmise à la BDF.
         * Type date au format yyyy-MM-dd
         */
        dateDemandeLeveeBDFOppositionCpte: string;
        /**
         * c'est la date de levée de l'opposition sur le compte transmise par la BDF.
         * Type date au format yyyy-MM-dd
         */
        dateLeveeBDFOppositionCompte: string;
        /**
         * Code motif de mise en opposition d'un support-carte par l'Etablissement. Les valeurs de ce code sont internes à chaque Etablissement et sont paramétrées.
         *
         * Synonyme : code motif interne.
         *
         * Valorisation:
         *
         * - __01__ : Vol sans perte du code secret
         * - __11__ : Vol avec perte du code secret
         * - __02__ : usage Abusif de carte
         * - __03__ : Perte sans code secret
         * - __13__ : Perte avec code secret
         * - __04__ : Fraude suspectée
         * - __08__ : Surveillance
         * - __00__ : Pas d'opposition sur carte
         */
        codeMotifOpposition: number;
        /**
         * Nombre de jours de dépassement d'une création de pré-abusif depuis une date
         */
        nombreDeJoursDepuisCreationPreAbusif: number;
    }
    interface IRecuperationDeLaCarte {
        /**
         * Motif de récupération du support par la Caisse. Il peut s'agir d'une restitution par le client ou encore d'une capture de carte opposée au cours d'une opération GAB ou TPE.
         */
        codeDuMotifDeRecuperationDeLaCarte: string;
        /**
         * Libéllé du motif de récupération de la carte recherché en central pour le local.
         */
        libelleDuMotifDeRecuperationDeLaCarte: string;
        /**
         * Typologie des lieux susceptibles de récupérer la carte.
         *
         * Valorisation:
         * - _blanc_ : Non récupéré
         * - __01__ : Client
         * - __02__ : Agence
         * - __03__ : Siège
         * - __04__ : GAB interne
         * - __05__ : GAB externe
         * - __06__ : Commerçant, adhérent interne
         * - __07__ : Commerçant, adhérent externe
         * - __08__ : International
         * - __09__ : Autre
         */
        codeDuLieuDeRecuperationDeLaCarte: string;
        /**
         * Libellé associé au code lieu de récupération de la carte.
         *
         * Valorisation:
         * - __01__ : Client
         * - __02__ : Agence
         * - __03__ : Siège
         * - __04__ : GAB Interne
         * - __05__ : GAB externe
         * - __06__ : Commerçant adhérent interne
         * - __07__ : Commerçant adhérent externe
         * - __08__ : International
         * - __09__ : Autre
         */
        libelleDuLieuDeRecuperationDeLaCarte: string;
        /**
         * Date à laquelle a été récupérée un support carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeRecuperationDeLaCarte: string;
        /**
         * Valorisation:
         * - __1__ : Envoi a l'agence
         * - __2__ : Envoi client pli simple
         * - __3__ : Envoi client recommandé
         */
        codeDuModeDEnvoiDeLaCarte: string;
        /**
         * Précise les conditions de distribution de la carte.
         *
         * Valorisation:
         * - __0__ : Pas de modification du mode d'envoi (le porteur ne relève pas d'une zone sensible) : le conditionnement attribué sera inchangé.
         * - __1__ : Le mode d'envoi doit être forcé à envoi agence si le produit carte est paramétré pour tenir compte de cet indicateur.
         * - __2__ : Adresse incomplète : le mode d'envoi carte au client est forcé à envoi agence s'il existe une prestation correspondant à ce mode d'envoi. Dans ce cas, la prestation correspondant au mode d'envoi agence sera attribuée
         */
        codeDuModeDeDistributionDeLaCarte: string;
    }
    interface IPlafondDeLaCarte {
        /**
         * Délai en jour de la période de référence des plafonds de paiements sur carte.
         */
        periodeDesPlafondsDePaiements: number;
        /**
         * Pour une fonction de base, un niveau de service et type de carte, lorsqu'il s'agit d'une opération, un plafond d'activité est défini dans la plage de plafonds mini et maxi établis pour une fonction de base et un type de carte.
         */
        plafondDActiviteDeLaFonctionDeBase: number;
        /**
         * Montant des demandes d'autorisation relatifs aux opérations autres que retrait pour la période définie sur le plafond.
         */
        montantDesAutorisationsHorsRetrait: number;
        /**
         * Montant du solde des autorisations autre que retrait restant pour la période définie sur le plafond.
         */
        montantResiduelDesAutorisationsHorsRetrait: number;
        /**
         * Délai en jour de la période de référence des plafonds de retraits sur carte.
         */
        periodeDesPlafondsDeRetraits: number;
        /**
         * Montant du solde des autorisations de retrait restant pour la période définie sur le plafond.
         */
        montantResiduelDesAutorisationsPourLesRetraits: number;
        /**
         * Montant des demandes d'autorisation relatifs aux opérations de retrait pour la période définie sur le plafond.
         */
        montantDesAutorisationsPourLesRetraits: number;
    }
    interface ISituationDeLaCarte {
        /**
         * Valorisation:
         * - __02__ : Commande saisie
         * - __03__ : Carte en fabrication
         * - __04__ : Carte délivrée
         * - __05__ : Carte récupérée
         * - __06__ : Carte échue
         * - __07__ : Carte active
         * - __08__ : Remise agence
         * - __09__ : Commande au fournisseur
         * - __14__ : Carte expédiée au client
         * - __15__ : Carte reçue ETB
         * - __16__ : Commande à annuler
         * - __17__ : Carte annulée
         * - __18__ : Carte à récupérer
         * - __20__ : Carte récupérée
         */
        codeDeSituationDeLaCarte: string;
        /**
         * Libellé de la situation de la carte.
         */
        libelleDeLaSituationDeLaCarte: string;
        /**
         * Le code statut carte détermine le statut de la carte déclaré à SAM.
         *
         * Valorisation:
         * - __AI__ : Carte en commande Fournisseur
         * - __AP__ : Carte en fabrication
         * - __AS__ : Carte fabriquée et reçue par l'établissement
         * - __DI__ : Carte annulée
         * - __EO__ : Carte remise à l'agence
         * - __EP__ : Carte expédiée au client
         * - __ER__ : Carte délivrée au client
         * - __CI__ : Carte restituée par le porteur
         * - __BI__ : Carte échue
         */
        codeDuStatutDeLaCarte: string;
        /**
         * Libellé du code statut de la carte.
         */
        libelleDuStatutDeLaCarte: string;
        /**
         * Date dernière situation de la carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeDerniereSituationDeLaCarte: string;
        /**
         * Il s'agit du code état d'une carte dans les bases stock de cartes. Les cartes en stock sont les cartes de type 03 04 05 (la valeur sera 99).
         * Les cartes à réceptionner sont les cartes de type 01 02 09 (la valeur sera 98). Dans la table des cartes OU1G, les valeurs possibles sont :
         * ' ', '01', '02', '03', '04', '05', '09', '10', 'AF'.
         *
         * Valorisation:
         * - _blanc_ : Carte en fabrication
         * - __01__ : A valider en EDS (Validée Caisse, à réceptionner)
         * - __02__ : A entrer en stock venant d'un autre EDS(à réception.)
         * - __03__ : Réceptionnée correctement (en stock)
         * - __04__ : Réceptionnée venant d'un autre EDS (en stock)
         * - __05__ : Récupérée (en stock)
         * - __09__ : Réceptionnée à tort
         * - __10__ : Détruite
         * - __AF__ : Carte en anomalie de fabrication
         * - __AC__ : Carte en anomalie de fabrication CNETI
         * - __98__ : A réceptionner (type 01 02 09)
         * - __99__ : En stock (type 03 04 05)
         */
        codeDeLEtatDUneCarteDuStock: string;
        /**
         * Il s'agit du libellé du code état de la carte des bases stock. Il est fonction du code état de la carte du stock.
         *
         * Valorisation:
         * - Carte en fabrication
         * - A valider en EDS
         * - A entrer en stock venant d'un autre EDS
         * - Réceptionnée correctement
         * - Réceptionnée venant d'un autre EDS
         * - Récupérée
         * - Sortie pour envoi au client
         * - Réceptionnée à tort
         * - Carte en anomalie de fabrication
         */
        libelleDeLEtatDUneCarteDuStock: string;
    }
    interface IUtilisateurDeLaCarte {
        /**
         * Identifie la première personne liée par un lien inter-personnes avec une 2ième personne selon un type de lien.
         */
        premierePersonneEnRelation: number;
        /**
         * Code qui permet de respecter la dénomination de la personne suivant sa situation de famille. Ex: une femme divorcée peut choisir entre Mme et Mlle.
         *
         * Valorisation:
         * - __1__ : MME
         * - __2__ : MLLE
         * - __3__ : M
         */
        codeCiviliteDeLaPersonnePhysique: string;
        /**
         * Nom de filiation de la personne physique, correspond :
         * - soit au nom du père
         * - soit au nom de la mère
         * - soit aux 2 noms accolés ordre quelconque, dans la limite d'un nom de famille par parent
         *
         * Donnée règlementaire : Seul nom mentionné sur les actes d'état civil (acte de naissance, de mariage, livret de famille....). Figure sur toute pièce officielle d'identité, appelée auparavant nom patronymique.
         */
        nomDeFamilleDeLaPersonnePhysique: string;
        /**
         * Dénomination de la personne autre que le nom de famille, correspond :
         * - soit au nom de famille de l'époux(se) (conjoint)
         * - soit au nom composé de son nom de famille et de celui de l'époux(se) dans un ordre quelconque
         *
         * Dénomination utilisable dans la vie quotidienne, totalement facultative et sans caractère automatique. Il n'est pas possible d'utiliser comme nom d'usage le nom du concubin ou du partenaire de Pacs.
         *
         * Donnée réglementaire : Information pouvant figurer sur toute pièce officielle d'identité à la suite du nom de famille, appelée auparavant nom marital.
         */
        nomDUsageDeLaPersonnePhysique: string;
        /**
         * Premier prénom de l'état civil de la personne physique. Nom joint au patronyme qui distingue les personnes d'un même groupe familial entre elles.
         */
        premierPrenomDeLEtatCivilDeLaPersonne: string;
        /**
         * Tiers de confiance sur 20 caractères alpha-numériques.
         */
        tiersDeConfiance: string;
        /**
         * Code indiquant le rôle du bénéficiaire de la carte D/C par rapport à la réserve associée. Le bénéficiaire peut être titulaire ou co-titulaire de la réserve.
         *
         * Valorisation:
         * - __T__ : Titulaire
         * - __C__ : Co-titulaire
         * - _blanc_ : Ne concerne pas une carte IZICARTE
         */
        codeDuRoleDuPorteurSurLaReserve: string;
        /**
         * Dénomination banalisée de la personne:
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourte: string;
    }
    interface ICarteDuContratCarte {
        /**
         * Numéro d'identification du contrat carte incrémenté de 1 à chaque ouverture (identifiant).
         */
        numeroDuContratCarte: number;
        utilisateur: IUtilisateurDeLaCarte;
        plafond: IPlafondDeLaCarte;
        situation: ISituationDeLaCarte;
        recuperation: IRecuperationDeLaCarte;
        opposition: IOppositionSurLaCarte;
        commande: ICommandeDeLaCarte;
        /**
         * Identifie une carte bancaire (support) au format réduit sur 19 caractères.
         */
        identifiantDuSupportDeCarte: string;
        /**
         * Code visuel support de la carte.
         */
        codeVisuelDuSupportDeCarte: string;
        /**
         * Libellé de désignation du code visuel carte. Sert à l'affichage des interfaces.
         */
        libelleLongDuVisuelDeLaCarte: string;
        /**
         * Façonnier de la puce sur 32 caractères alpha-numériques.
         */
        faconnierDeLaPuce: string;
        /**
         * Date à partir de laquelle la carte est valide.
         *
         * -> règle de gestion pour les date au format Long mmaaaa : l'année est placée devant le mois aaaamm
         */
        dateDeDebutDeValiditeDeLaCarte: number;
        /**
         * Date à partir de laquelle la carte n'est plus valide, Format MMAA ou AAMM (la date de fin de validité est atteinte en fin de mois MM).
         *
         * -> règle de gestion pour les date au format Long mmaaaa : l'année est placée devant le mois aaaamm
         */
        dateDeFinDeValiditeDeLaCarte: number;
        /**
         * Date à laquelle a été remise en clientèle la carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeRemiseEnClientele: string;
        /**
         * Nom du personnalisateur qui a fabriqué la carte.
         */
        nomDuPersonnalisateurDeCarte: string;
        /**
         * Détermine le type de carte : produit au catalogue du progiciel TIM.
         *
         * Codification _Fnnnn_, F représente le niveau de fonctionnalité :
         * - __0__ : carte particulier immédiat
         * - __1__ : carte particulier différé
         * - __2__ : carte professionnelle immédiat
         * - __3__ : carte professionnelle différé
         * - __4__ : carte de remplacement différé
         * - __5__ : carte de remplacement immédiat
         */
        codeDuProduitCarte: string;
        /**
         * Le numéro de série de la carte en cours correspond à l'identifiant sous lequel le client est connu chez le transporteur partenaire BPCE.
         * Permet d'associer les titres de transport (à l'unité ou abonnement) en cours d'activité. Numéro de série unique par carte.
         */
        numeroDeSerieDeLaCarteEnCours: string;
        /**
         * Référence de l'ancienne carte.
         *
         * Lors d'un renouvellement de carte (à échéance ou remplacement), les titres de transport (à l'unité ou abonnement) toujours actifs sont portés sur la nouvelle carte fabriquée.
         */
        referenceDeLAncienneCarte: string;
        /**
         * N° de carte dont on reconduit le code secret.
         */
        identifiantDuSupportDeCartePourCodeReconduit: string;
        /**
         * Permet de définir si la carte est active ou non.
         *
         * Valorisation:
         * - __N__ : Non activé
         * - __O__ : Activé
         */
        indicateurDActivationDeLaCarte: string;
        /**
         * Date d'activation de la carte complétée par l'heure d'activation de la carte.
         *
         * Format: _AAMMJJHHMMSS_
         * Type date au format yyyy-MM-dd
         */
        dateDActivationDeLaCarte: string;
        /**
         * Permet de définir si la carte de remplacement est active ou non.
         *
         * Valorisation:
         * - __N__ : Non activé
         * - _blanc_ : Non activé
         * - __O__ : Activé
         */
        indicateurDEtatDeLaCarteDeRemplacement: string;
        /**
         * Identifiant de l'élément de structure de distribution de la carte au client.
         */
        identifiantElementDeStructureDeDistribution: number;
        /**
         * Désignation décrivant l'élément de structure. Cette désignation est construite par concaténation du libellé court du type d'EDS (LCCEEL) et de la désignation de l'EDS (LICELI).
         * Sauf si l'EDS est un PF on trouve alors le Nom+Prénom de l'Agent titulaire du PF.
         */
        libelleConstruitDuTypeEDS: string;
        /**
         * Date réédition code secret (mailer).
         * Type date au format yyyy-MM-dd
         */
        dateDeReeditionDuCodeSecret: string;
        /**
         * Précise si l'option 'MONEO' d'une carte est activée.
         *
         * Valorisation:
         * - __N__ : MONEO non actif
         * - __O__ : MONEO actif
         */
        codeActivationDeLOptionMoneo: string;
        /**
         * Date de chargement PEGASU sous la forme _SSAAMMJJ_.
         * Type date au format yyyy-MM-dd
         */
        dateDeChargementPegasus: string;
        /**
         * Référence OTA sur 20 caractères alpha-numériques.
         */
        referenceOTA: string;
        /**
         * Ce code indique, dans la cas d'une souscription via le canal CRC, si on doit effectuer le 2ème appel URL Izicefi (mise en force de la gestion) lors de l'alimentation de la date de signature sur l'écran d'avenant au contrat carte.
         *
         * Valorisation:
         * - __O__ : Appel Izicefi à effectuer.
         * - __N__ : Ne pas effectuer l'appel Izicefi.
         */
        indicateurDe2emeAppelIzicefi: string;
        /**
         * Il s'agit de la date à partir de laquelle le type d'événement doit être géré pour l'établissement.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutDeLaPeriode: string;
        /**
         * Libellé type de carte. C’est le libellé du produit carte.
         */
        libelleDuTypeDeCarte: string;
        /**
         * Référence de la puce sur 14 caractères alpha-numériques.
         */
        referenceDeLaPuce: string;
        /**
         * Il s'agit du numéro de la carte de remplacement dans le cas d'une VISA PREMIER.
         */
        identifiantDeRemplacementPourUneCarteVisa1er: string;
        /**
         * Date de fin de validité de la carte.
         * En général, une carte est valide deux ans sauf les cartes Jeune (un an).
         * Type date au format yyyy-MM-dd
         */
        dateExpirationCarte: string;
        deplacements: Array<IDeplacement>;
        /**
         * Ind eligible Verrouillage Temporaire
         */
        indEligibleVerrouillageTemp: string;
        /**
         * Etat activation Verrouillage Tempo.
         * Valeurs possibles :
         * N	-  Ne rien afficher
         * " "	-  Le service est disponible mais le client n’a jamais choisi le service ,service inactif
         * 0	-  Pas de verrouillage temporaire , service inactif
         * 1	-  Verrouillage temporaire activé  ,service actif
         */
        etatActivationVerrouillageTemp: string;
    }
    interface IOptionDuContratCarte {
        /**
         * Un niveau de service permet de catégoriser les bénéficiaires de contrats carte selon leur typologie: Standard, Haut de gamme, Risque...
         */
        codeDuNiveauDeServiceDuContratCarte: string;
        /**
         * Représente la modalité de tarification d'un contrat carte.
         *
         * Valorisation:
         * - __00__ : Tarif en vigueur
         * - __01__ : Gratuité 1 an
         * - __02__ : Gratuité totale
         * - __03__ : 1/2 tarif
         *
         * 05 pour 1/2 tarif 1 an
         */
        codeDeModaliteDeTarificationDuContratCarte: number;
        /**
         * Précise si l'option _E-Carte-bleue_ est activée(à controler avec la valeur de la zone CEKTEC de la
         * table KW1L).
         *
         * Valorisation:
         * - __N__ : Clôture du service E-carte bleue demandée
         * - __O__ : ouverture du service E-carte bleue demandée
         */
        codeActivationECarteBleue: string;
        /**
         * Indique à quel stade en est la e-carte bleue.
         *
         * Valorisation:
         * - __00__ : En attente d'ouverture
         * - __01__ : En attente de modification
         * - __02__ : En attente de clôture
         * - __03__ : Demande de réédition des user et mot de passe client
         * - __10__ : Demande d'ouverture émise au CNETI
         * - __11__ : Demande de modification émise au CNETI
         * - __12__ : Demande de clôture émise au CNETI
         * - __13__ : Demande de réédition émise au CNETI
         * - __20__ : Demande d'ouverture validée
         * - __30__ : Demande d'ouverture refusée
         * - __31__ : Demande de modification refusée
         * - __32__ : Demande de clôture refusée
         * - __33__ : Demande de réédition refusée
         * - _blanc_ : valeur par défaut
         */
        codeEtatDuServiceECarteBleue: string;
        /**
         * Gamme de la carte.
         *
         * Valorisation:
         * - __1__ Carte de premier niveau (de base) :
         * 	+ Carte Electron Sensea
         * 	+ Carte Visa Classique (débit immédiat ou différé)
         * 	+ Carte Visa classique OM (débit immédiat ou différé)
         * 	+ Carte Téranga
         * 	+ Carte Débit-Crédit Visa classique (débit immédiat/dif)
         * - __2__ Carte de deuxième niveau (gamme supérieure) :
         * 	+ Carte Visa Premier (débit immédiat ou débit différé)
         * 	+ Carte Débit/Crédit Visa Premier (débit immédiat diff)
         * 	+ Visa Infinite (débit immédiat ou débit différé)
         */
        codeDuNiveauDeGamme: string;
        /**
         * Précise si les paiements effectués par une carte donnée sont débités immédiatement ou différés au mois suivant.
         *
         * Valorisation:
         * - __I__ : Carte à débit immédiat
         * - __D__ : Carte à débit différé
         */
        typeDeDebitLorsDuPaiementParCarte: string;
        /**
         * Précise si l'option 'MONEO' d'une carte est activée.
         *
         * Valorisation:
         * - __N__ : MONEO non actif
         * - __O__ : MONEO actif
         */
        codeActivationDeLOptionMoneo: string;
        /**
         * Précise si une souscription d'une carte IZICARTE à eu lieu via le canal CRC ou non.
         *
         * Valorisation:
         * - __O__ : Souscription Izicarte par le CRC
         * - __N__ : Souscription Izicarte via un canal autre que le CRC
         */
        indicateurDeSouscriptionIzicarte: string;
    }
    interface IServiceDerogatoireDuContratCarte {
        /**
         * Permet de déroger au niveau de service du contrat Valeurs définies en table des niveaux de service Absence de dérogation : valeur égale à blancs.
         */
        codeDuNiveauDeServiceDerogatoireDuContratCarte: string;
        /**
         * Date de début d'effet de l'application du niveau de service.
         * Type date au format yyyy-MM-dd
         */
        dateDeDebutDEffetDuNiveauDeServiceDerogatoire: string;
        /**
         * Date de fin d'effet de l'application du niveau de service.
         * Type date au format yyyy-MM-dd
         */
        dateDeFinDEffetDuNiveauDeServiceDerogatoire: string;
        /**
         * Indicateur de tarification NSD (Niveau de Service Dérogatoire).
         *
         * Valorisation:
         * - __O__ : Oui
         * - __N__ : Non
         */
        indicateurDeTarificationNSD: string;
    }
    interface IProprietaireDuContratCarte {
        /**
         * Numéro d'identification de la personne dans le SI d'un Etablissement Référence interne MYSYS Perso.
         */
        identifiantDeLaPersonne: number;
        /**
         * Identifie la première personne liée par un lien inter-personnes avec une 2ième personne selon un type de lien.
         */
        premierePersonneEnRelation: number;
        /**
         * Identifie une personne réprésentant légal ou tuteur ou curateur d'une personne donnée mineur/majeur protégé.
         */
        identifiantPersonneDuRepresentantLegal: number;
        /**
         * Permet de connaître à quel titre une personne (particulier personne physique ou une personne morale) est en relation avec une autre personne.
         *
         * Relation inter-personnes gérée dans la table DU7B. Exemple: NODAP2 est tuteur (valeur 100) de NODAP1.
         */
        codeDuTypeDeLienInterPersonnes: string;
        /**
         * Indicateur permettant aux clientes de choisir si elles désirent avoir leur nom de jeune fille sur leur carte ou nom marital.
         *
         * Valorisation:
         * - __O__ : Choix du nom de jeune fille
         * - __N__ : Choix du nom marital
         */
        indicateurDuNomDeJeuneFille: string;
        /**
         * Nom pour une personne physique ou Raison Sociale pour une personne morale.
         */
        nomPatrinomyqueOuRaisonSociale: string;
        /**
         * Numéro de téléphone portable du client. Ne pas utiliser.
         */
        numeroDuTelephonePortableDuClient: string;
        /**
         * La référence opérateur (ou raison sociale) permet d'identifier l'opérateur téléphonique.
         *
         * Exemple:
         * - __ORANGE__
         */
        referenceDeLOperateurTelephonique: string;
        /**
         * Identification du client chez l'opérateur téléphonique décomposé de la manière suivante :
         *
         * - Code pays du MNO (opérateur) sur 3 caractères.
         * - Identifiant du MNO sur 3 caractères.
         * - Identifiant intra-opérateur mobile de la ligne sur 15 caractères.
         */
        identifiantDuClientChezLOperateur: string;
        /**
         * Dénomination banalisée de la personne:
         * - désignation courte du particulier
         * - libellé libre du lieu d'activité
         */
        designationCourte: string;
        /**
         * Code type de lien.
         *
         * Valorisation:
         * - __A__ : Affinataire
         * - __C__ : Co-branding
         * - _blanc_ : Autres
         */
        codeDuTypeDeLien: string;
        /**
         * Modalité d'embossage de la CB concernant l'identité du porteur pour une femme mariée.
         *
         * Valorisation:
         * - __0__ : Nom marital
         * - __1__ : Nom patronymique suivi du nom marital
         * - __2__ : Nom marital suivi du nom patronymique
         */
        codeDActionDeLIdentiteDuPorteur: string;
        /**
         * nom du porteur de la carte
         */
        nomDuBeneficiaire: string;
        /**
         * Date de naissance
         * Type date au format yyyy-MM-dd
         */
        dateNaissancePersonnePhysique: string;
    }
    interface IInformationComplementaire {
        /**
         * Le premier visuel peut être offert. Cette date signale que l’offre est déjà faite et que les nouveaux visuels sont facturables.
         * Type date au format yyyy-MM-dd
         */
        dateDeGratuiteDuPremierVisuel: string;
        /**
         * Il détermine le nombre d'occurences réponses demandées dans le traitement de fonction serveur de type 'liste'
         * Nombre maximal d'occurences demandées.
         */
        nombreOccurenceQuestionServeur: number;
        /**
         * Il détermine le nombre des occurences réponses délivrées par les fonctions serveurs de type 'liste'.
         * Ce nombre est limité au nombre d'occurences précisé en entrée de la demande, et au nombre supporté par la taille du message (dans le cas d'une sortie de type message).
         */
        nombreOccurenceReponseFonction: number;
        /**
         * Montant en débit ou en crédit sur un produit donné.
         */
        montantOperation: number;
        /**
         * Désignation longue de l'élément de structure elle est utilisée pour la constitution de la ligne 1 de l'adresse
         *
         * Valeur :
         * 2 + B + 17 + B + 10 + B
         * 2  --> Titre
         * B  --> blanc
         * 17 --> Nom
         * B  --> blanc
         * 10 --> Prénom
         * B  --> blanc
         */
        designationLongueAgentInterne: string;
    }
    interface ICarteTEOZ {
        /**
         * Numéro de la carte de crédit Révolving
         */
        nuneroCarteRevolving: string;
        /**
         * identifie :
         *  - soit la personne pour les crédits amortissables (crédits conso Natixis Financement)
         *  - soit le compte support pour les contrats Aurore format X9.
         */
        referenceInternePersonneContrat: string;
        /**
         * Date de réception de la carte en agence
         * Stockée sous la forme SSAAMMJJ
         * Renvoyée sous la forme JJMMSSAA
         * Type date au format yyyy-MM-dd
         */
        dateDeReceptionTEOZ: string;
        /**
         * Pour la Caisse d'Epargne,5 ans
         * Type date au format yyyy-MM-dd
         */
        dateDeValiditeCarte: string;
        /**
         * Nom et prénom du client
         */
        nomEtPrenom: string;
        /**
         * Date de réception accusé de fabrication
         * Stockée sous la forme SSAAMMJJ
         * Renvoyée sous la forme JJMMSSAA
         * Type date au format yyyy-MM-dd
         */
        dateRecepAccuseFabricationTEOZ: string;
        /**
         * Numéro de lot de commandes de cartes TEOZ fixé par Experian
         */
        numeroDeLotCommandeDeCartes: number;
        /**
         * Aucune description
         */
        alphanumeriqueBanalisee040: string;
        /**
         * Il s'agit du code état d'une carte dans les bases stock de cartes.
         *
         * Valorisation :
         *
         * - __'01'__ : A réceptionner en agence
         * - __'02'__ : A entrer en stock venant d'un autre EDS
         * - __'03'__ : Réceptionnée correctement (en stock)
         * - __'04'__ : Réceptionnée venant d'un autre EDS (en stock)
         * - __'05'__ : Récupérée
         * - __'09'__ : Réceptionnée à tort
         * - __'10'__ : Détruite
         *
         * - __'15'__ : Remise au client
         *
         * - __'97'__ : Cartes à détruire
         * - __'98'__ : Cartes en stock = '03' + '04' + '05'
         * - __'99'__ : Cartes à réceptionner = '01' + '02' + '09'
         */
        codeEtatDUneCarteTEOZ: string;
        /**
         * Libellé de la cause de la destruction de la carte TEOZ
         */
        libelleDeDestruction: string;
        /**
         * lieu de provenance de la carte
         */
        lieuDeProvenanceDeLaCarte: string;
        /**
         * lieu de destination de la carte
         */
        lieuDeDestinationDeLaCarte: string;
    }
    interface IDeplacement {
        /**
         * Il s'agit de la date de debut d'effet de la periode de deplacement du porteur.
         * Type date au format yyyy-MM-dd
         */
        dateDebutEffetPorteurDeplacement: string;
        /**
         * Il s'agit de la date de fin d'effet de la periode de deplacement du porteur.
         * Type date au format yyyy-MM-dd
         */
        dateFinEffetPorteurDeplacement: string;
    }
}

declare module myway.c0410.syntheseCompte.rib {
    interface IConversionRibBicIban {
        codeBic: string;
        numeroIbanCompteBeneficiaire: string;
        numeroCompte: string;
        codeEtablissement: string;
        codeGuichet: string;
        cleRib: number;
    }
}

declare module myway.c0410.syntheseCompte.rib {
    interface ICurrencyDetail {
        text: string;
        fraction: number;
        symbol: string | boolean;
    }
    interface ICurrency {
        [key: string]: ICurrencyDetail;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IDecouvert {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateFinDecouvert: Date;
        montantDuDecouvert: number;
        codeMonnaieDecouvert: string;
        fraisDuDecouvert: number;
        valeurDuTauxDecouvert: number;
        margeSurDecouvert: number;
        dateDebutDecouvert: Date;
        identifiantDecouvertClient: number;
        identifiantDecouvertCatalogue: number;
        codeEtatDecouvert: string;
        codeTauxReference: string;
        tauxEffectifGlobalDecouvert: number;
        indicateurGestionDecouvertClient: string;
        libelleDecouvert: string;
        libelleContractuelDecouvert: string;
        valeurDuTauxClient: number;
        codeMnemonique: string;
        codeCategorieDecouvert: string;
    }
    class Decouvert {
        id: number;
        libelleContractuel: string;
        montant: number;
        devise: string;
        category: string;
        prioritaire: boolean;
        dateFinDecouvert: string;
        constructor(id: number, libelleContractuel: string, montant: number, devise: string, category: string, prioritaire: boolean, dateFinDecouvert?: string);
    }
}

declare module myway.c0410.syntheseCompte {
    interface IDonneeLibelle {
        GREGM1: string;
        LNEGCO: string;
        LNEGTE: string;
        CIEGVU: string;
        DDEJCO: string;
        CIEGFT: string;
        COEGPJ: string;
        IDEGPB: string;
        LCEGCO: string;
        DFEJCO: string;
        COEXSP: string;
        QSESAG: string;
        CODIPR: string;
        BITRAN: string;
        IDEGPS: string;
        COLIDV: string;
        QPESAG: string;
    }
    interface ILibelleCompte {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: IDonneeLibelle[];
    }
    interface IJustificatifLibelleDonnee {
        Value: string;
        Key: string;
    }
    interface IJustificatifLibelle {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: IJustificatifLibelleDonnee[];
    }
    interface IFiscaliteDonnees {
        LCQQOF: string;
        DDQQOF: string;
        DFQQOF: string;
        COQQIV: string;
        COQQOF: string;
        CIQQSE: string;
        LRQQCO: string;
        LIQQOF: string;
    }
    interface IFiscaliteLibelle {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: IFiscaliteDonnees[];
    }
    interface IDonneesDelocalisees<T> {
        id: string;
        referentiel: string;
        nom: string;
        datemaj: string;
        donnees: Array<T>;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IChartDescription {
        /**
         * échelle de l'abscisse (périodes)
         */
        _xPeriodeScale: D3.Scale.OrdinalScale;
        /**
         * axe abscisse
         */
        _xAxis: D3.Svg.Axis;
        /**
         * sous-échelle d'une période (division pour chaque barre d'une période de l'histogramme)
         */
        _xMontantsScale: D3.Scale.OrdinalScale;
        /**
         * échelle des ordonnées (montants)
         */
        _yScale: D3.Scale.LinearScale;
        /**
         * axe des ordonnées
         */
        _yAxis: D3.Svg.Axis;
        /**
         * dimensions effectives du graphique (sans les marges)
         */
        dimensions: IDimensions;
        /**
         * initialise les échelles des 2 axes en fonction de la place disponible
         */
        initEchelles(): any;
        /**
         * ajuste les graduations de l'axe des abscisses en fonction des valeurs représentées
         * @params {Array<string>} la liste des périodes à représenter
         * @params {Array<string>} la liste des propriétes à afficher pour chaque période
         */
        setDomainAbscisses(periodes: Array<string>, properties: Array<string>): any;
        /**
         * ajuste les graduations de l'axe des ordonnées en fonction des valeurs représentées
         * @params {number} le plus petit montant à représenter
         * @params {number} la plus grand montant à afficher
         */
        setDomainOrdonnees(montantMin: number, montantMax: number): any;
        /**
         * @returns l'axe des abscisses
         */
        getAxeAbscisses(): D3.Svg.Axis;
        /**
         * @returns l'axe des ordonnées
         */
        getAxeOrdonnees(): D3.Svg.Axis;
        /**
         * @returns l'abscisse (en px) correspondant à la période passée en paramètre
         */
        getAbscisse(periode: string): number;
        /**
         * @returns l'abscisse (en px et au sein de la période) correspondant à la propriété passée en paramètre
         */
        getSubAbscisse(property: string): number;
        /**
         * @returns l'ordonnée (en px) correspondant au montant passé en paramètre
         */
        getOrdonnee(montant: number): number;
        /**
         * @returns la largeur (en px) d'une période
         */
        getLargeurGraduationAbscisses(): number;
        /**
         * @returns la largeur (en px) d'une barre de l'histogramme
         */
        getLargeurSubGraduationAbscisses(): number;
    }
    class ChartDescription implements IChartDescription {
        _xPeriodeScale: D3.Scale.OrdinalScale;
        _xAxis: D3.Svg.Axis;
        _xMontantsScale: D3.Scale.OrdinalScale;
        _yScale: D3.Scale.LinearScale;
        _yAxis: D3.Svg.Axis;
        dimensions: IDimensions;
        constructor();
        initEchelles(): void;
        setDomainAbscisses(periodes: Array<string>, properties: Array<string>): void;
        setDomainOrdonnees(montantMin: number, montantMax: number): void;
        getAxeAbscisses(): D3.Svg.Axis;
        getAxeOrdonnees(): D3.Svg.Axis;
        getAbscisse(periode: string): number;
        getSubAbscisse(property: string): number;
        getOrdonnee(montant: number): number;
        getLargeurGraduationAbscisses(): number;
        getLargeurSubGraduationAbscisses(): number;
    }
    enum TypeLegend {
        RECT,
        LINE,
    }
    interface IColLegendDescription {
        /**
         * forme du picto (rectangle, ligne, ...)
         */
        typeLegend: TypeLegend;
        /**
         * classe css à appliquer à l'item de la légende
         */
        className: string;
        /**
         * données de l'histogramme relatives au bloc de la légende
         */
        data: Array<IDataDescription>;
        /**
         * classe css à appliquer au picto
         */
        legendClassName: string;
    }
    class ColLegendDescription implements IColLegendDescription {
        typeLegend: TypeLegend;
        className: string;
        data: Array<IDataDescription>;
        legendClassName: string;
        constructor(typeLegend: TypeLegend, className: string, data: Array<IDataDescription>, legendClassName?: string);
    }
    interface IDimensions {
        height: number;
        width: number;
    }
    /**
     * données pour la popup de détails
     */
    interface IModaleDataDetailGraphique {
        /**
         * liste des périodes (données du tableau)
         */
        model: Array<IPeriodeFonctionnement>;
        /**
         * période sélectionnée
         */
        selection: IPeriodeFonctionnement;
    }
    /**
     * infos sur la propriété à afficher dans le graphique
     */
    interface IDataDescription {
        /**
         * nom de la proriété à mapper (éventuellement)
         */
        id: string;
        /**
         * label affiché dans la légende
         */
        label: string;
        /**
         * indique si la propriété est affichée (toggle depsuis la légende)
         */
        show: boolean;
        /**
         * méthode à fournir en entrée de selection.filter(selector) (D3.js)
         */
        filterFunction?: (data: IBarData, index: number) => boolean;
    }
    /**
     * description de la donnée affichée sous forme d'histogramme dans le graphique
     */
    interface IBarData {
        /**
         * nom de la proriété à mapper (éventuellement)
         */
        propertyName: string;
        /**
         * label affiché dans la légende
         */
        propertyLabel: string;
        /**
         * valeur (montant) de la barre
         */
        value: number;
        /**
         * classe css à appliquer à la barre
         */
        cssClassName: string;
        /**
         * liste des découverts autorisés pendant la période
         */
        decouverts: Array<IDecouvert>;
        /**
         * liste des dépassements de découvert (1=maitrisé et 2=non maitrisé) pendant la période
         */
        depassements?: {
            [id: string]: {
                /**
                 * montant à partir duquel il y a un dépassement
                 */
                seuil: number;
                /**
                 * montant du dépassement
                 */
                montant: number;
            };
        };
    }
    class BarData implements IBarData {
        propertyName: string;
        propertyLabel: string;
        value: number;
        cssClassName: string;
        decouverts: Array<IDecouvert>;
        constructor(propertyName: string, propertyLabel: string, data: any);
        /**
         * convertit les descriptions des propriétés à afficher dans le graphique
         * en données exploitables par la lib D3.js
         * @param {Array<IDataDescription>} les données affichées dans le graphique
         * @param {IPeriodeFonctionnement} la totalité des données disponibles pour la période choisie
         * @returns {Array<IBarData>} les données à afficher sous forme de barre dans le graphique
         */
        static convert: (properties: IDataDescription[], data: IPeriodeFonctionnement) => IBarData[];
        /**
         * liste les valeurs d'une période
         * @param {Array<IDataDescription>} les données affichées dans le graphique
         * @param {IPeriodeFonctionnement} la totalité des données disponibles pour la période choisie
         * @returns {Array<number>} la liste des valeurs de la période
         */
        static convertValues: (properties: IDataDescription[], data: IPeriodeFonctionnement) => number[];
        /**
         * construit le contenu du tooltip au survol d'une période
         * @param {Array<IDataDescription>} les données affichées dans le graphique
         * @param {IPeriodeFonctionnement} la totalité des données disponibles pour la période choisie
         * @returns {string} le contenu à afficher dans le tooltip
         */
        static getTooltip: (properties: IDataDescription[], data: IPeriodeFonctionnement) => string;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IHistoriqueJustification {
        listeDonneesJutification: Array<IListeDonneesJutification>;
    }
    interface IListeDonneesJutification {
        anneeEmissionJustifAyantDroit: string;
        montantImposition: number;
        codeMotifDeclarationSurHonneur: string;
        dateCreationEvenement: string;
        codeAgent: number;
        anneeFinDroitLep: string;
        anneeAyantDroitLep: string;
        nbPartsFoyerFiscal: number;
        codeLieuResidenceFiscale: string;
        motifDeclarationSurHonneur: string;
        montantRevenuFiscalReference: number;
        heureCreationEvenement: string;
    }
    interface IHistoriqueJustificationFormate {
        anneeEmissionJustifAyantDroit: string;
        anneeAyantDroitLep: string;
        montantRevenuFiscalReference: string;
        nbPartsFoyerFiscal: string;
        anneeFinDroitLep: string;
        codeLieuResidenceFiscale: string;
        dateCreationEvenement: string;
        montantImposition: string;
        motifDeclarationSurHonneur: string;
        codeAgent: string;
    }
    interface IResidence {
        id: string;
        libelle: string;
    }
}

declare module myway.c0410.syntheseCompte.rib {
    interface ISIPRGCE_ImpressionRIB {
        BL_CORPS: SIPRGCE_ImpressionRIBBL_CORPS[];
        _attribute_id: string;
        _attribute_xmlns: string;
    }
    interface SIPRGCE_ImpressionRIBBL_CORPS {
        LOGO_ETABLISSEMENT: SIPRGCE_ImpressionRIBBL_CORPSLOGO_ETABLISSEMENT;
        CAISSE: string;
        GUICHET: string;
        COMPTE: string;
        CLE0: string;
        DOMICILIATION: string;
        BIC: string;
        CLEA: string;
        CLE1: string;
        CLE2: string;
        CLE3: string;
        CLE4: string;
        CLE5: string;
        CLE6: string;
        DOM_1: string;
        ADRESSE1: string;
        DOM_2: string;
        ADRESSE2: string;
        DOM_3: string;
        ADRESSE3: string;
        DOM_4: string;
        ADRESSE4: string;
        DOM_5: string;
        ADRESSE5: string;
        DOM_6: string;
        ADRESSE6: string;
        DOM_7: string;
    }
    interface SIPRGCE_ImpressionRIBBL_CORPSLOGO_ETABLISSEMENT {
        _attribute_Content: MyWay.Services.Impression.TYPE_IMAGE;
        _value_: string;
    }
    class SIPRGCE_ImpressionRIB implements ISIPRGCE_ImpressionRIB {
        BL_CORPS: SIPRGCE_ImpressionRIBBL_CORPS[];
        _attribute_id: string;
        _attribute_xmlns: string;
        constructor();
    }
    class SIPRGCE_ImpressionRIBArchiverParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPRGCE_ImpressionRIBGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPRGCE_ImpressionRIBArchiverGenererParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationOptionnels;
        constructor();
    }
    class SIPRGCE_ImpressionRIBImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPRGCE_ImpressionRIBArchiverImpressionParams {
        systeme: MyWay.Services.Impression.ParametresGenerationSysteme;
        obligatoires: MyWay.Services.Impression.ParametresGenerationImpressionObligatoires;
        optionnels: MyWay.Services.Impression.ParametresGenerationImpressionOptionnels;
        constructor();
    }
    class SIPRGCE_ImpressionRIBImpressionLotParams {
        parametresLot: MyWay.Services.Impression.DocumentImpressionLot;
        constructor();
    }
}

declare module myway.c0410.syntheseCompte {
    interface ILepTableau {
        libelle: string;
        montant: string;
    }
    interface IPelTableau {
        annee: string;
        fiscalite: string;
        interetProductif: string;
        interetsAcquisBaseCalculPrime: string;
        interetsAcquis: string;
    }
    interface IPelTableauCourt {
        annee: string;
        fiscalite: string;
        interetProductif: string;
    }
    interface ILgfTableau {
        montantInteretsAnticipes: string;
        interetAcquisDerniereBalance: string;
        dateDernierCapit: string;
        interetAcquisDerniereCapi: string;
    }
    interface ICelTableau {
        taux: string;
        interetsAcquis: string;
        interetsUtilises: string;
        dateFinCalcul: string;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    class InformationEntiteTitulaire implements IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonne {
        codeEtablissement: string;
        identifiantPersonne: number;
        indiceResponsableET: string;
        codeTypeLienInterPersonnes: string;
        codeFamilleLiensInterPersonnes: string;
        numeroRangPersonneET: string;
        identifiantEntiteTitulaire: number;
        codeTypePersonne: string;
        rangAncienEtatCivil: string;
        codePersonnaliteJuridique: string;
        dateFin: Date;
        dateDebut: Date;
        informationPersonneMoral: IInformationPersonneMoral;
        informationPersonnePhysique: IInformationPersonnePhysique;
    }
    interface IIntervenantEntiteTit {
        listPersonne: Array<IPersonne>;
    }
    interface IInformationPersonneMoral {
        raisonSocial: string;
    }
    interface IInformationPersonnePhysique {
        nomFamille: string;
        nomUsage: string;
        prenom: string;
        codeCivilite: string;
        codeTypeSituationFamille: string;
        codeTypeMandat: string;
    }
    function getLibelleCiviliteFromCode(code: string): string;
}

declare module myway.c0410.syntheseCompte {
    interface IRechercheOperation {
        recherche: IRechercheOp;
        resultat: IResultat;
    }
    interface IInformation {
        parametres: IParametres;
        operations: Array<IOperationDebitDiffere>;
    }
    interface IParametres {
        /**
         * Identifiant d'un Etablissement du RCE. Il correspond au code Banque sous lequel une Caisse ou un établissement du réseau CE est répertoriée par la Banque de France.
         */
        codeEtablissement: string;
        /**
         * Référence sous laquelle un guichet d'une Caisse (ou d'un Etablissement du Groupe CE) est répertorié par la Banque de France. cf Fichier des implantations bancaires. Un Etablissement bancaire peut disposer de plusieurs guichets.
         *
         * Nomenclature des guichets des Etab GCE : CU2U
         *
         * Voir COHCGU pour l'identification du compte / RIB
         *
         * Exemples:
         *
         *     90000 : IDF PARIS de la CE Ile de France
         *     00600 : LILLE de la CE Nord France Europe
         */
        codeGuichetInterbancaire: string;
        /**
         * Numéro d'identification d'un compte géré par un Etablissement du GCE.
         */
        numeroDeCompte: string;
        /**
         * Identifie un support carte (support physique) format interbancaire.
         */
        identifiantDuSupportCarte: string;
        /**
         * cette zone indique comment les informations débits différés sont livrés pour un client donné.
         *
         * Valorisation :
         *
         * - __'1'__ : Détail des mouvements par ordre chronologique
         * - __'2'__ : Détail des mouvements par ordre à rebours
         */
        ordreAffichageEncoursDebitDiffere: string;
        /**
         * Code banalisé permettant d'identifier le type de traitement à réaliser
         */
        codeTypeDeTraitement: string;
        /**
         * Il s'agit du nombre d'opérations ayant servi au calcul du montant cumulé
         */
        nombreDeMouvements: number;
    }
    interface IOperationDebitDiffereAffichage {
        dateDeVente: Date;
        identifiantDuSupportCarte: string;
        raisonSociale: string;
        montantBrutOperationMonnaiePriseDOrdre: string;
        montantBrutOperationMonnaieDuCompte: string;
        codeMonnaieDePriseDOrdre: string;
    }
    interface IOperationDebitDiffere {
        /**
         * cette zone permet d'indiquer si l'opération a été effectuée en France ou à l'étranger
         *
         * Valorisation :
         *
         * - __'F'__ : Opération effectuée en France
         * - __'E'__ : Opération effectuée à l'étranger
         */
        natureDuMouvement: string;
        /**
         * Détermine la devise utilsée pour la gestion du compte
         * Sert notamment à l'établissement de la position / arrêté de situation du compte (solde).
         * Correspond à la devise d'imputation des opérations.
         */
        codeMonnaieTenueDeCompte: string;
        /**
         * Montant brut de l'opération dans la monnaie de tenue de compte.
         */
        montantBrutOperationMonnaieDuCompte: number;
        /**
         * Détermine la devise du montant de l'ordre dans le cadre d'une opération/transaction financière.
         * Peut être différente de la devise de règlement, de la devise de gestion du compte (tenue de compte)
         */
        codeMonnaieDePriseDOrdre: string;
        /**
         * Montant brut de l'opération dans la monnaie de sa prise d'ordre (monnaie initiale) avant chargement de frais, pénalité, taxe ...
         * Le montant net correspond au montant brut quand il n'y a pas de pénalités ou frais
         */
        montantBrutOperationMonnaiePriseDOrdre: number;
        /**
         * Libellé de la devise cotée
         */
        libelleDeLaDeviseCotee: string;
        /**
         * Montant de la commission en Francs sur operation porteur
         */
        montantCommission: number;
        /**
         * La raison sociale est un nom ou une dénomination attribué à une société.
         */
        raisonSociale: string;
        /**
         * C'est la situation géographique d'une enseigne ou raison sociale.
         */
        localisationCommune: string;
        /**
         * Date à laquelle est réglée un mouvement interbancaire.
         * Type date au format yyyy-MM-dd
         */
        dateDeReglement: string;
        /**
         * Date d'extraction de la table des VSOT
         * Pour traitement par le SIT ou Transfert Réseau
         * FORMAT : JJ/MM/SSAA
         *
         * Pour les débits différés :
         * Il s'agit de la date de prochaine extraction.
         * Type date au format yyyy-MM-dd
         */
        dateExtraction: string;
        /**
         * Exemple : pour une opération porteur, il s'agit  de la date à laquelle le porteur a éffectué un achat avec sa carte.
         * Type date au format yyyy-MM-dd
         */
        dateDeVente: string;
        /**
         * Identifie un support carte (support physique) format interbancaire.
         */
        identifiantDuSupportCarte: string;
    }
    interface IOperationCarte {
        dateOperation: Date;
        numeroCarte: string;
        montantGlobalOperation: number;
        codeMonnaieDePriseDOrdre: string;
    }
    interface IResumeOperationDebitDiffere {
        dateExtraction: Date;
        numeroCarte: string;
        nombreOperations: number;
        sommeMontantOperations: string;
        codeMonnaieDePriseDOrdre: string;
    }
    interface IOperation {
        dateEmissionEvenement: Date;
        codeEvenementAtome: string;
        codeModeFinancier: string;
        codeOrigineOperation: string;
        referenceExterneEDSNiveau2: number;
        referenceExterneEDSNiveau1: number;
        dateOperation: Date;
        dateDeValeur: Date;
        deuxiemeLibelleReleveCompte: string;
        codeDeviseMontantOperation: string;
        codeAnnulationOperation: string;
        codeSensImputation: string;
        numeroCheque: string;
        nombreQuinzainesRestantACourir: number;
        montantSoldeAvantOperation: number;
        codeOperationOrigine: string;
        montantGlobalOperation: number;
        codeMonnaiePriseOrdre: string;
        codeMonnaiePriseOrdreLong: string;
        typeElementStructure: string;
        codeMoyenPaiement: string;
        typeMoyenPaiement: string;
        timestampCreationOperation: string;
        codeOrigineReference: string;
        referenceOperation: string;
        numeroCarte: string;
        codeEtablissement: string;
        premierLibelleReleveCompte: string;
        mntBrutOperationParDevTCompte: number;
        numeroNationalEmetteur: string;
        codeProvenanceLotMQseries: string;
        ancienneProvenanceLotMQseries: string;
        identifiantAgent: number;
    }
    interface IRechercheOp {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        dateDebutSelection: string;
        dateFinSelection: string;
        codeTypeInterrogation: string;
        codeTypeOperations: string;
        montantMinimum: number;
        montantMaximum: number;
        numeroDebutCheque: string;
        numeroFinCheque: string;
        nombreOperations: number;
        typeQuestion: string;
        codeTypeTraitement: string;
        timestampSuivant: string;
    }
    interface IResultat {
        codeSuiteTraitement: string;
        listeOperations: Array<IOperation>;
        nombreOperationsRenvoyees: number;
        timestampSuivant: string;
    }
    interface IModalDataRecherche {
        model: Array<IOperation>;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IElementReserve {
        codeAgent: string;
        nombreJourReserveEncaissement: number;
        dateFinReserveEncaissement: string;
        typeReserve: string;
        referenceReserve: string;
        nvelleDateFinReserveEncaiss: string;
    }
    interface IElementFinancement {
        codeModeFinancier: string;
        typeCheque: string;
        codeOrigineOperation: string;
        numeroCheque: string;
        codeEvenementAtome: string;
        mtBrutOperationDevTCompte: number;
        dateOperation: string;
    }
    interface IInformationReserve {
        elementFinanacement: IElementFinancement;
        elementReserve: IElementReserve;
    }
    class InformationReserve implements IInformationReserve {
        elementFinanacement: IElementFinancement;
        elementReserve: IElementReserve;
    }
    interface IRechercheReserve {
        listElementReserve: Array<IElementReserveRecherche>;
        cumulReserve: ICumulReserve;
        codeEtabilssement: string;
    }
    class RechercheReserve implements IRechercheReserve {
        listElementReserve: Array<IElementReserveRecherche>;
        cumulReserve: ICumulReserve;
        codeEtabilssement: string;
    }
    interface IElementReserveRecherche {
        codeDevise: string;
        codeProduit: string;
        typeCheque: string;
        codeOrigineOperation: string;
        codeEvenementAtome: string;
        codeModeFinancier: string;
        nombreJourReserveEncaissement: number;
        numeroCheque: string;
        dateOperation: string;
        dateFinReserveEncaissement: string;
        typeReserveEncaissement: string;
        codeAgentAccesAnnulationOpe: string;
        typeReserve: string;
        referenceReserve: string;
        dateAnnulReserveEncaissement: string;
        montantBrutOperation: number;
    }
    interface ICumulReserve {
        codeDevise: string;
        montantCumulReserveEncaissement: number;
        typeReserve: string;
    }
}

declare module myway.c0410.syntheseCompte {
    interface IServicePresent {
        identifiantProduitService: number;
        numSequenceOuverture: number;
        codeFamilleGestionLocaleContrat: string;
        codeDecompositionPS: string;
        indicateurPSInclusForfait: string;
        codeNaturePSAssocie: string;
        codeAffichageReferencePS: string;
        nombreMiniExemplairesPS: number;
        codeModaliteDetentionPS: string;
        niveauParticipationPS: number;
        nomCommercialPS: string;
        libelleLongPS: string;
        numeroEntiteTitulaire: number;
        identifiantPersonne: number;
        identifiantPSSupport: number;
        codeEtablissement: string;
        codeGuichet: string;
        codeTypeProduitService: string;
        referenceProduitService: string;
        dateIntroductionPSOffre: string;
        dateDernierAvenantPSOffre: string;
        isOptionInternational: boolean;
    }
    interface IContratOffre {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        compositionPersonne: Array<ICompositionPersonne>;
    }
    interface ICompositionEntiteTitulaire {
        numeroEntiteTitulaire: number;
        designationEntiteTitulaire: string;
        codeTypeUsageET: string;
        designationTypeUsageET: string;
        modeCompositionET: string;
        designationModeCompositionET: string;
        servicePresent: Array<IServicePresent>;
    }
    interface ICompositionPersonne {
        identifiantPersonne: number;
        codeCivilitePersonne: string;
        nomFamillePersonne: string;
        nomUsagePersonne: string;
        premierPrenomPersonne: string;
        codePersonnaliteJuridique: string;
        designationCourteParticulier: string;
        servicePresent: Array<IServicePresent>;
    }
    interface IServiceGroupes {
        libelle: string;
        services: Array<IServicePresent>;
    }
}

declare module myway.c0410.syntheseCompte {
    interface ISuiviPeriodiqueCDD {
        periodeFonctionnement: Array<IPeriodeFonctionnement>;
    }
    interface IPeriodeFonctionnement {
        anneePeriode: string;
        moisPeriode: string;
        soldeMinimum: number;
        dateOrigineDebit: Date;
        dateDebutInfractionDuree: Date;
        dateFinInfractionDuree: Date;
        dateDerniereInfractionMontant: Date;
        indicateurInfractionMontant: boolean;
        indicateurInfractionDuree: boolean;
        dateOrigineCalculInfraction: Date;
        montantRevenuRegulierMois: number;
        decouvertsActifs: Array<IDecouvert>;
        depassementDecouvert: boolean;
    }
}

declare module myway.c0410.syntheseCompte.Model {
    interface IIndicPartageTracab {
        indicateurPartageVisible: boolean;
        indicateurTracabiliteVisible: boolean;
        indicateurPartageOblig: boolean;
        indicateurTracabiliteOblig: boolean;
    }
    interface IInfoPartageTracab {
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        indicateurPartage: string;
        identifiantBeneficiaire: number;
        valeurTauxPartage: number;
        indicateurTracabilite: string;
        codeUniversTracabilite: string;
        codeProduit: string;
        identifiantProduitService: string;
        identifiantPersonne: number;
        codeDomaineTracabilite: string;
        libelleDomaineTracabilite: string;
        libelleTracab: string;
        libellePartage: string;
    }
    interface IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    class InformationEntiteTitulaire implements IInformationEntiteTitulaire {
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
    }
    interface ICaracteristiqueEntiteTitulaire {
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        complementDesignationBancaire: string;
        codeEtatEntiteTitulaire: string;
        dateMAJEntiteTitulaire: string;
        codeMotifClotureEntiteTitulaire: string;
        dateClotureEntiteTitulaire: string;
        sousCodeModeCompositionET: string;
        codeAgentGestionEntiteTitulaire: number;
        libelleEDSGestionEntiteTitulaire: string;
        libelleEtatEntiteTitulaire: string;
        libelleTypeDesignationEntiteTitulaire: string;
        libelleUsageEntiteTitulaire: string;
        libelleModeCompositionEntiteTitulaire: string;
        libelleSousCodeModeCompositionET: string;
        libelleEDSDomiciliationEntiteTitulaire: string;
        libelleMotifClotureEntiteTitulaire: string;
        identifiantEDSDomiciliationEntiteTitulaire: number;
        codeEtablissement: string;
        identifiantEntiteTitulaire: number;
        identifiantAdresseEntiteTitulaire: number;
        identifiantEDSGestionEntiteTitulaire: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        refExterneEDSDomiciliationET: number;
        refExterneEDSGestionET: number;
        identifiantEDSGuichet: number;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        designationTiers: string;
        indicateurAffectationAdresse: boolean;
    }
    interface ICaracteristiqueMiniProfil {
        identificationProduit: Array<IIdentificationProduit>;
        donneeCommuneProduit: Array<IDonneeCommuneProduit>;
        donneeSpecfiqueMiniProfil: Array<IDonneeSpecifiqueMiniProfil>;
        donneeSpecifiqueProfilComplet: Array<IDonneeSpecifiqueProfilComplet>;
        detailSoldeDisponible: IDetailSoldeDisponible;
    }
    interface IDetailSoldeDisponible {
        montantDecouvertAutorise: number;
        montantEffetEncaissement: number;
        montantCumuleOperationEcartee: number;
        montantCumuleImpayePret: number;
        soldeMinuteCompte: number;
        codeEtatContractuelAnniversaire: string;
    }
    interface IDonneeSpecifiqueProfilComplet {
        codeEtatContractuelAnniversaire: string;
        montantDecouvertAutorise: number;
        montantCumuleOperationEcartee: number;
        montantARegulariser: number;
        montantVersementRegulier: number;
        montantEffetEncaissement: number;
    }
    interface IDonneeSpecifiqueMiniProfil {
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
    }
    interface IIdentificationProduit {
        codeEtablissement: string;
        codeGuichetInterbancaire: string;
        codeProduitService: string;
        referenceProduitService: string;
        identifiantEntiteTitulaire: number;
        identifiantProduitService: number;
        numeroOffre: number;
        designationBancaireCourte: string;
    }
    interface IDonneeCommuneProduit {
        deviseTenueCompte: string;
        codeEtatProduitService: string;
        indicateurExistenceOpposition: string;
        sousCodeProduitService: string;
        indicateurModeGestionLivret: string;
        soldeMinuteCompte: number;
        montantCumuleImpayePret: number;
        chargeMensuelleEndettement: number;
        participantProduit: Array<IParticipantProduit>;
    }
    interface IParticipantProduit {
        identifiantTiers: number;
        codeRolePersonne: string;
        nomUsage: string;
        prenom: string;
        raisonSociale: string;
        dateNaissance: string;
        codePersonnaliteJuridique: string;
        codeCivilite: string;
    }
}

declare module myway.c0410.syntheseCompte {
    class DataService {
        private syntheseService;
        private $q;
        private serviceAgentExtended;
        private produitEngageService;
        private $http;
        static $inject: string[];
        $rootScope: IRootScope;
        operationsDebitDiffere: IInformation;
        listeOperations: Array<IOperation>;
        listeRecapitulativeOperationsCarte: Array<IResumeOperationDebitDiffere>;
        contexte: string;
        configurationIHM: IConfigurationIHM;
        numeroCourt: string;
        informationsCompte: IConsultationSlr | IConsultationCel | IConsultationLivretB | IConsultationLep | IConsultationPel | IConsultation | IConsultationCompleter | IConsultationProduitEngage | IConsultationLJ;
        titre: string;
        donneecharge: boolean;
        fiscaliteFamille: string;
        donneesTableauLg: IInteretEnCours[];
        donneesTableauLgpHistorique: IInteretEnCours[];
        tableauCelDonnees: ICelTableau[];
        codeOptionFiscale: string;
        codeEtatDemandePrime: string;
        respectContratLibelle: string;
        versementPeriodique: string;
        periodicite: string;
        tableauPelDonneesCourt: IPelTableauCourt[];
        tableauPelDonnees: IPelTableau[];
        totalBrut: string;
        totalFiscalite: string;
        totalNet: string;
        primeBrute: string;
        fiscalitePrime: string;
        primeNette: string;
        interetsBruts: string;
        fiscaliteInterets: string;
        interetsNets: string;
        capital: string;
        montantDroitsAPrets: string;
        tauxGestionPEL: string;
        montantARegulariser: string;
        montantPeriodique: string;
        tauxGestion: string;
        tauxRemuneration: string;
        valeurNetteAEcheance: string;
        prelevementCompteInterne: string;
        dureeEffective: string;
        dureeContractuelle: string;
        historiqueJustificatif: IHistoriqueJustificationFormate[];
        tableauJustificatifDonneesCourt: IHistoriqueJustificationFormate[];
        libelleJustificatif: string;
        codeEtablissement: string;
        codeGuichet: string;
        numeroCompte: string;
        numeroPersonne: number;
        numeroEntiteTitulaire: number;
        private entitetitulaire;
        private informationsCDD;
        private personnes;
        private libelleCompte;
        private cleRice;
        identifiantPersonne: number;
        codeTypeProduitService: string;
        infoPartageTracab: Model.IInfoPartageTracab;
        resumeOperationsDebitDiffere: Array<IResumeOperationDebitDiffere>;
        private isAfficherCumulDebitDiffere;
        private informationsContratsCarteCompte;
        private decouverts;
        contrat: {
            rib: string;
            numeroOffre: string;
            devise: string;
            dateOuverture: string;
            dateCloture: any;
            dateDernierReleve: string;
            domiciliation: IEngagementDomiciliation;
            soldes: ISoldes;
            opposition: IOpposition;
            engagementClient: ICaracteristiqueEngagement;
        };
        private fonctionnement;
        private donneesProduitEngagee;
        private estProduitEngage;
        codeActeGestion: string;
        private devises;
        private fichierDevises;
        constructor(syntheseService: Service.SyntheseCddService, $q: ng.IQService, $rootScope: IRootScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, produitEngageService: myway.transProduitEngage.ProduitEngageService, $http: ng.IHttpService);
        initialiserDonneesProduitEngage(): void;
        /**
         * initialisation du contexte et de la configuration de l'IHM
         * @param {string} ctx le contexte
         * @returns void
         */
        initContexte: (ctx: string) => void;
        /**
         * initialisation de la configuration de l'IHM : en fonction du CODIPR du P/S, on n'affiche pas les même blocs ou infos
         * @returns void
         */
        initConfigurationIHM: () => void;
        /**
         * initialisation de toutes les informations nécessaires au lancement de l'application
         * @returns {promise<Array<boolean>>} un tableau indiquant si les ressources ont bien été chargées
         */
        initData: () => ng.IPromise<boolean[]>;
        initCaracteristiquesContratCDD: () => ng.IPromise<boolean>;
        gererCumulDebitDiffere(): ng.IPromise<boolean>;
        /**
         * Recherche des contrats carte pour un compte donné
         */
        rechercherContratsCartesCompte(): ng.IPromise<IRecherche>;
        rechercherOperationsDebitDiffere(): ng.IPromise<IInformation>;
        getOperationsDebitDiffere(): IInformation;
        getResumeOperationsDebitDiffere(): Array<IResumeOperationDebitDiffere>;
        /**
         * récupération des personnes associées au contrat pour initialiser le 1er bloc
         * @returns {promise<boolean>} indique si le chargement s'est bien effectué
         */
        private initPersonnes;
        /**
         * Requête GET
         * restitue les informations relatives à l'entité titulaire.
         * @return promise IOffreCibleChng
         */
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<InformationEntiteTitulaire>;
        /**
         * permet de construire le libelle à afficher en titre du panel
         * @return {string} libellé de la forme :
         * "Compte de M XXX 0123456"
         * "Compte de M et MME XXX 0123456"
         * "Compte de M XXX et MME YYY 0123456"
         */
        private initLibelleCompte;
        getFromContexte(contexte: any, attr: string): string;
        /**
         * @returns {string} le libellé du compte
         */
        getLibelleCompte: () => string;
        getRIB: () => string;
        /**
         * récupération des découverts associés au compte et identification de celui ou ceux qui sont actuellement actifs
         * @returns {promise<boolean>} indique si le chargement s'est bien effectué
         */
        initDecouverts: () => ng.IPromise<boolean>;
        getDecouvertsActifs: () => Decouvert[];
        private calculerRib();
        getDevise: () => string;
        getDateOuvertureContrat: () => string;
        getDateClotureContrat: () => string;
        iscompteSolde: () => boolean;
        getDateDernierReleve: () => string;
        getDomiciliationRevenu: () => IEngagementDomiciliation;
        getEngagementClient: () => ICaracteristiqueEngagement;
        getSoldes: () => ISoldes;
        getOpposition(): IOpposition;
        getInformationsCDD(): IInformationsCDD;
        static formatDateForIHM(date: string): string;
        /**
         * rechercher les opérations
         * @param {string} typeRecherche le type de recherche (AUC/VIR/CB/ESP/DEP/PRV/AUT/NOPE/CHQ/SCHQ/TCHQ/DATE/DAD/DDAT/MNT/SMNT)
         * @param {IRecherche} json l'objet contenant les paramètres de la recherche (en rapport avec le type de recherche effectuée)
         * @returns {promise<Array<IOperation>>} la liste des opérations
         */
        rechercherOperations(typeRecherche: string, json: IRechercheOp): ng.IPromise<Array<IOperation>>;
        /**
         * rechercher la suite des opérations : si le résultat de la recherche indique typeQuestion = "S", c'est qu'il y a d'autres résultats à récupérer
         * @param {IResultat} le résultat de la recherche précédente
         * @param {string} typeRecherche le type de recherche (AUC/VIR/CB/ESP/DEP/PRV/AUT/NOPE/CHQ/SCHQ/TCHQ/DATE/DAD/DDAT/MNT/SMNT)
         * @param {IRecherche} json l'objet contenant les paramètres de la recherche (en rapport avec le type de recherche effectuée)
         * @returns {promise<Array<IOperation>>} la liste des opérations
         */
        private rechercherSuiteOperations;
        /**
         * initialise le fonctionnement du compte
         * @returns {promise<boolean>} indique si le chargement s'est bien effectué
         */
        initFonctionnement: () => ng.IPromise<boolean>;
        /**
         * associe les découverts à une période donnée
         * @param {IPeriodeFonctionnement} la période (correspond à 1 mois)
         * @returns void
         */
        private fillDecouvertsForPeriode;
        /**
         * détermine si une date est comprise entre 2 dates, ou si le mois est le même
         */
        private isMonthBetweenInclusive(datePeriode, dateDebut, dateFin);
        getFonctionnement: () => IPeriodeFonctionnement[];
        getAllDecouverts: () => IDecouvert[];
        /**
         * récupération des services associés à un contrat
         * @returns {promise<Array<IServiceGroupes>>} les services groupés par détenteur (entité titulaire ou perseonne)
         */
        getServices: () => ng.IPromise<IServiceGroupes[]>;
        /**
         *  Paramètre:  4 premier chiffers su numéro de comtpe
         *  Fonction permettant de retourner la requête correspondante au type de compte
         *  @returns string
         */
        requeteParCompte(numeroCompte: string): string;
        informationCompte: () => ng.IPromise<IConsultationSlr | IConsultationCel | IConsultationLivretB | IConsultationLep | IConsultationPel | IConsultation | IConsultationCompleter | IConsultationProduitEngage | IConsultationLJ>;
        /**
         * Paramètre: informations du compte IConsultationLep
         *  Fonction permettant de récuperer le libelé du compte dans une table délocalisée
         *  return : libellé string
         */
        recupereJustificatifLibelle(informationsCompte: IConsultationLep): ng.IPromise<IJustificatifLibelle>;
        /**
         *  Paramètre:  Toutes les informations recues sur le compte IConsultationLJ
         *  Fonction permettant d'afficher l'IHM pour le livret jeune
         *  @returns  IIhmCaracteristiques
         */
        formatHistoriqueJustificatif(data: IListeDonneesJutification[], mode: number): IHistoriqueJustificationFormate[];
        initPel(data: IConsultationPel): void;
        formateTableauPelCourt(data: IConsultationPel): IPelTableauCourt[];
        formateTableauPel(data: IConsultationPel): IPelTableau[];
        /**
         * Paramètre: Information du compte IConsultationPel
         *  Fonction permettant de récuperer le libelé du compte dans une table délocalisée
         *  return : libellé string
         */
        recuperePeriodicite(informationsCompte: IConsultationPel): ng.IPromise<IJustificatifLibelle>;
        formateTableauCel(data: IConsultationCel): ICelTableau[];
        /**
         *  Fonction permettant de créer le format de l'argent MyWay à partir d'un entier
         *
         *  @returns string
         */
        formatMoney(amount: number): string;
        /**
         *  Fonction permettant de créer un séparation de milliers pour un numéro en entrée
         *  @returns string (numéro formatté)
         */
        formatAffichageNumber(nbr: string): string;
        initFamilleB(data: IConsultationLivretB): void;
        recupereFiscalite(data: IConsultationLivretB | IConsultationSlr): ng.IPromise<IFiscaliteLibelle>;
        /**
         * Paramètre:
         *  Fonction permettant de récuperer les historiques de justifications pour le LEP
         *  return : Model.IHistoriqueJustification
         */
        recupereHistoriqueJustificatif(): ng.IPromise<IListeDonneesJutification[]>;
        /**
         * Paramètre: Les informations du compte IConsultation
         *  Fonction permettant de récuperer le libelé du compte dans une table délocalisée
         *  return : libellé string
         */
        recupereLibelleCompte(informationsCompte: IConsultation): ng.IPromise<ILibelleCompte>;
        recupererOperationsDebitDiffere(): ng.IPromise<IInformation>;
        /**
         * Paramètre: nombre à compléter
         *  Fonction permettant de completer un nombre en rajoutant des 0 devant trant que le nombvre n'a pas 7 caractères
         *  @returns string (numéro formatté)
         */
        completeNombre(nombre: number): string;
        getListeOperations(): Array<IOperation>;
        getListeRecapitulativeOperationsCarte(): Array<IResumeOperationDebitDiffere>;
        isAfficherCumul(): boolean;
        private chargerDevises();
        private convertirCodeDeviseEnSymbole(code);
    }
}

declare module myway.c0410.syntheseCompte.rib {
    class ImpressionRibService {
        private $q;
        private serviceAgentExtended;
        private saisieRiceService;
        static URL_CONVERSION: string;
        static URL_CARACTERISTIQUE_EDS: string;
        static URL_INFOS_ENTITE_TITULAIRE: string;
        static URL_INFOS_ADRESSE: string;
        static $inject: string[];
        private designationEntiteTitulaire;
        private libelleEDSDomiciliation;
        private ligneAdresse;
        constructor($q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, saisieRiceService: comInterdomaine.SaisieRiceService);
        private getBicEtIBan(codeEtablissement, codeGuichet, numeroCompte, cleRice);
        /**
         * Fonction qui permet de récupérer l'intitulé du compte
         */
        private getIntituleCompte(codeEtablissement, identifiantEntiteTitulaire);
        /** Fonction qui permet de récupérer les adresses d'une personne */
        private getAdresse(codeEtablissement, identifiantPersonne, identifiantElementStructure, typeElementStructure, refExterneEDSDomiciliationET);
        /** Fonction qui permet de récupérer les informations relatives à l'EDS */
        private getAgence(codeEtablissement, identifiantElementStructure, typeElementStructure, refExterneEDSDomiciliationET);
        createDocument(contexte: IContexte): ng.IPromise<SIPRGCE_ImpressionRIB>;
        private construireDocument(codeEtablissement, bicIban, infosEDS);
    }
    function createArchiverParams(): SIPRGCE_ImpressionRIBArchiverParams;
    function createGenererParams(): SIPRGCE_ImpressionRIBGenererParams;
    function createArchiverGenererParams(): SIPRGCE_ImpressionRIBArchiverGenererParams;
    function createImpressionParams(): SIPRGCE_ImpressionRIBImpressionParams;
    function createArchiverImpressionParams(): SIPRGCE_ImpressionRIBArchiverImpressionParams;
    function createImpressionLotParams(): SIPRGCE_ImpressionRIBImpressionLotParams;
}

declare module myway.c0410.syntheseCompte {
    class OptionInternationalCompteurService {
        private $q;
        private serviceAgent;
        private saisieRiceService;
        static $inject: string[];
        private offreCibleListeURL;
        constructor($q: ng.IQService, serviceAgent: MyWay.Services.ServiceAgent, saisieRiceService: myway.comInterdomaine.SaisieRiceService);
        /**
         * Requête GET
         * Affichage compteurs Offre Internat.
         * @return promise Array<CompteurOperation>
         */
        recupererListeCompteur(codeEtab: string, codeGuichet: string, codeProduit: string, referenceProduitService: string, anneeMoisTraitementSsaamm: number, hZE: boolean): ng.IPromise<Array<CompteurOperation>>;
    }
}

declare module myway.c0410.syntheseCompte.Service {
    class SyntheseCddService {
        private $q;
        private serviceAgentExtended;
        private $timeout;
        static $inject: string[];
        $rootScope: IRootScope;
        private entitetitulaire;
        private miniProfilURL;
        private informationReserveURL;
        private rechercheReserveURL;
        private restUrlGetIndicPartageTracab;
        private restUrlGererPartageTracabExistant;
        constructor($rootScope: IRootScope, $q: ng.IQService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, $timeout: ng.ITimeoutService);
        getIndicPartageTracab(codeEtablissement: string, codeTypeOperation: string, identifiantProduitService: number): ng.IPromise<Model.IIndicPartageTracab>;
        recupererPartageTracab(codeEtablissement: string, codeGuichet: string, numeroCompte: string, consultationPartage: boolean, consultationTracabilite: boolean): ng.IPromise<Model.IInfoPartageTracab>;
        /**
         * appel REST de récupération des personnes associées au produit/service
         * @param {string} codeEtablissement le code établissement
         * @param {string} codeGuichet le code guichet
         * @param {string} codeTypeProduitService le code du type du P/S
         * @param {string} codeProduitService le code du P/S
         * @return promise<IIntervenantEntiteTit> contient la liste des personnes
         */
        getPersonnes: (codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, codeProduitService: string) => ng.IPromise<IIntervenantEntiteTit>;
        /**
         * appel REST de récupération des découverts
         * @param {string} codeEtablissement le code établissement
         * @param {string} codeGuichet le code guichet
         * @param {string} numeroDeCompte le numéro du compte
         * @param {string} typeDeDecouvert le type de découverts recherchés (T, N ou P)
         * @returns promise<Array<IDecouvert>> la liste des découverts
         */
        getDecouvert: (codeEtablissement: string, codeGuichet: string, numeroDeCompte: string, typeDeDecouvert: string) => ng.IPromise<IDecouvert[]>;
        /**
         * appel REST de récupération des caractéristiques du contrat CDD
         * @param {string} codeEtablissement le code établissement
         * @param {string} codeGuichet le code guichet
         * @param {string} codeTypeProduitService le code du type du P/S
         * @param {string} numeroDeCompte le numéro du compte
         * @returns promise<ICaracteristiqueCDD> un objet contenant la liste des caractéristiques du contrat CDD
         */
        getCaracteristiquesContratCDD: (codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroDeCompte: string) => ng.IPromise<ICaracteristiqueCDD>;
        /**
         * Requête GET
         * @param {string} codeEtablissement Identifiant d'un Etablissement du Réseau CE, correspond au code Banque sous lequel une Caisse ou un Etablissement du réseau CE est répertoriée par la Banque de France. Ex: "13135"
         * @param {string} codeGuichet Ex: "00080"
         * @param {string} numeroCompte Numéro du compte. Ex: "04020423159"
         * @param {string} codeTypeDeProduitService Code du produit ou IDEGPS = 1310 pour ce produit
         * @returns promise<IEngagementDomiciliation>
         */
        getEngagementDomiciliation(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeTypeDeProduitService: string): ng.IPromise<IEngagementDomiciliation>;
        /**
         * Requête GET Engagement Client
         * Permet la consultation des caractéristiques de l'engagement d'un client à partir de son compte de dépot
         * @param {string} Code de l'établissement emetteur
         * @param {string} Code guichet interbancaire
         * @param {string} Numéro du compte porteur de l'engagement (CDD)
         * @returns {promise<ICaracteristiqueEngagement>} Caractéristiques d'engagement du client si trouvé
         */
        getCaracteristiquesEngagementClient: (codeEtablissement: string, codeGuichet: string, codeReferenceProduit: string) => ng.IPromise<ICaracteristiqueEngagement>;
        /**
         * appel REST de récupération de la date du dernier relevé de compte
         * @param {string} codeEtablissement le code établissement
         * @param {string} codeGuichet le code guichet
         * @param {string} numeroEntiteTitulaire le numéro de l'entité titulaire
         * @param {string} numeroDeCompte le numéro du compte
         * @returns promise<string> la date du dernier relevé
         */
        getDateDernierReleve: (codeEtablissement: string, codeGuichet: string, numeroEntiteTitulaire: string, numeroDeCompte: string) => ng.IPromise<string>;
        /**
         * appel REST de recherche d'opérations
         * @param {string} typeRecherche le type de recherche (AUC/VIR/CB/ESP/DEP/PRV/AUT/NOPE/CHQ/SCHQ/TCHQ/DATE/DAD/DDAT/MNT/SMNT)
         * @param {IRecherche} json l'objet contenant les paramètres de la recherche (en rapport avec le type de recherche effectuée)
         * @returns promise<IResultat> contenant la liste des résultats de la recherche
         */
        rechercherOperations: (typeRecherche: string, json: IRechercheOp) => ng.IPromise<IResultat>;
        /**
         * appel REST de récupération du suivi périodique du compte
         * @param {string} codeEtablissement le code établissement
         * @param {string} codeGuichet le code guichet
         * @param {string} codeTypeProduitService le CODIPR du produit
         * @param {string} numeroDeCompte le numéro du compte
         * @returns promise<Array<IPeriodeFonctionnement>> tableau contenant le suivi pour chaque mois
         */
        getSuiviPeriodique: (codeEtablissement: string, codeGuichet: string, codeTypeProduitService: string, numeroDeCompte: string) => ng.IPromise<IPeriodeFonctionnement[]>;
        /**
         * appel REST de récupération des services associés à un contrat
         * @param {string} numeroOffre le numéro de l'offre souscrite
         * @returns promise<IContratOffre> objet contenant les informations des P/S rattachés à ce contrat
         */
        getServices: (numeroOffre: string) => ng.IPromise<IContratOffre>;
        getFromContexte(contexte: any, attr: string): string;
        /**
         * Requête GET
         * restitue les informations relatives à l'entité titulaire.
         * @return promise IOffreCibleChng
         */
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Model.InformationEntiteTitulaire>;
        /**
         * Requête GET
         * restitue les informations relatives aux produits rattachés au client bancaire
         * @return promise CaracteristiqueMiniProfil
         */
        getMiniProfil(codeEtablissement: string, codeGuichetInterbancaire: string, codeProduitService: string, referenceProduitService: string, numeroCarteBancaire: string, identifiantEntiteTitulaire: number, identifiantTiers: number, typeRecherche: string, typeRestitution: string): ng.IPromise<Model.ICaracteristiqueMiniProfil>;
        /**
         * Requête PUT
         * MAJ date de fin Réserve d'Encaissemt
         * @return promise InformationReserve
         */
        putInformationReserve(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeProduit: string, codeDevise: string, codeAction: string, informationReserve: InformationReserve): ng.IPromise<InformationReserve>;
        /**
         * Requête GET
         * MAJ date de fin Réserve d'Encaissemt
         * @return promise RechercheReserve
         */
        getRechercheReserve(codeEtablissement: string, codeGuichet: string, numeroCompte: string, codeProduit: string, typeRechReserveEncaissement: string): ng.IPromise<RechercheReserve>;
    }
}
