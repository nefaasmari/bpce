
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
    function graphiqueDetails(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
}

declare module myway.c0410.syntheseCompte {
    function graphiqueTooltip(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    function resultatRecherche(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
    function rechercheOperations(): ng.IDirective;
}

declare module myway.c0410.syntheseCompte {
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
        recherche: IRecherche;
        resultat: IResultat;
    }
    interface IOperationCarteEtMontant {
        numeroCarte: string;
        montantGlobalOperation: number;
    }
    interface IOperationCarteEtMontantType {
        nombre: number;
        somme: number;
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
    interface IRecherche {
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
        static $inject: string[];
        $rootScope: IRootScope;
        listeOperations: Array<IOperation>;
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
        constructor(syntheseService: Service.SyntheseCddService, $q: ng.IQService, $rootScope: IRootScope, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, produitEngageService: myway.transProduitEngage.ProduitEngageService);
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
        initCaracteristiquesContratCDD: () => ng.IPromise<boolean>;
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
        rechercherOperations(typeRecherche: string, json: IRecherche): ng.IPromise<Array<IOperation>>;
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
        /**
         * Paramètre: nombre à compléter
         *  Fonction permettant de completer un nombre en rajoutant des 0 devant trant que le nombvre n'a pas 7 caractères
         *  @returns string (numéro formatté)
         */
        completeNombre(nombre: number): string;
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
        rechercherOperations: (typeRecherche: string, json: IRecherche) => ng.IPromise<IResultat>;
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
