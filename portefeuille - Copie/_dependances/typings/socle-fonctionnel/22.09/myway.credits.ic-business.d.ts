
declare namespace ICBusiness.Constantes.Inject {
    namespace Services {
        const accessoiresService: string;
        const appelSGFGASService: string;
        const assurancesService: string;
        const avisService: string;
        const batchRequestService: string;
        const bienAVendreService: string;
        const bonificationService: string;
        const bulleAideOverriderService: string;
        const butLocatifService: string;
        const cacheService: string;
        const catalogueService: string;
        const contexteEditionService: string;
        const contratEpargneLogementService: string;
        const controleDossierService: string;
        const creditComplementaireService: string;
        const creditEpargneLogementService: string;
        const creditExistantService: string;
        const creditExterneService: string;
        const creditPhaseService: string;
        const creditService: string;
        const blocNotesService: string;
        const decisionService: string;
        const dncService: string;
        const dossierSchemaService: string;
        const dossierService: string;
        const editerDocumentsService: string;
        const editionContratService: string;
        const editionOffreService: string;
        const edsService: string;
        const elementSchemaService: string;
        const emprunteurService: string;
        const endettementService: string;
        const entiteExterneService: string;
        const etatDossierService: string;
        const expertiseService: string;
        const garantiesService: string;
        const habilitationService: string;
        const historiqueService: string;
        const impressionService: string;
        const industrialisationService: string;
        const informationsPtzService: string;
        const interroBdfService: string;
        const modalitesService: string;
        const multiRisqueHabitationService: string;
        const objetFinanceService: string;
        const objetPorteEnGarantieWrapperService: string;
        const parametrageAppicatifRemanentService: string;
        const parametrageApplicatifService: string;
        const parametrageChampsProjetImmoService: string;
        const parametreFonctionnelService: string;
        const parametrerestServiceGarantieCredit: string;
        const parametresService: string;
        const personneService: string;
        const piecoService: string;
        const planFinancementService: string;
        const preferencesService: string;
        const prescripteurService: string;
        const produitService: string;
        const projetImmoService: string;
        const projetService: string;
        const pvhService: string;
        const garantiePrincipaleService: string;
        const reamenagementService: string;
        const redacteurActeService: string;
        const refusAssurancesService: string;
        const remiseOffreService: string;
        const rendreDossierService: string;
        const revenuChargeService: string;
        const saisiesComplementairesService: string;
        const signataireService: string;
        const signatureElectroniqueService: string;
        const signatureOffreService: string;
        const smacService: string;
        const suiviEditionsService: string;
        const suivisPlanifiesService: string;
        const surfaceFinanciereService: string;
        const traceService: string;
        const transfertBoService: string;
        const transfertDecisionService: string;
        const transfertService: string;
        const typeDossierService: string;
        const verifierEligibiliteService: string;
        const demandeCreditService: string;
    }
    namespace MywayRisqueServices {
        const interroBdfServiceRisqueClient: string;
    }
    namespace MywayInterDomaine {
        const infobulleAideService: string;
    }
}

declare namespace ICBusiness.Models.Common {
    interface ICodeLabel<T extends string | number | boolean> {
        code: T;
        label: string;
        customObject?: Object;
        toAsciiValue?: () => string;
        toAsciiCode?: () => number;
        /** indique que cet élement représente un groupe est n'est pas sélectionnable */
        isGroupType?: boolean;
    }
    class CodeLabel<T extends string | number> implements ICodeLabel<T> {
        code: T;
        label: string;
        customObject: Object;
        constructor(code: T, label: string, customObject?: Object);
        toAsciiCode(): number;
        toAsciiValue(): string;
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Code des pages passées dans le contexte vers laquelle il faut rediriger
     */
    enum CodePageEnum {
        routeurStateImmo = 0,
        synthese = 1,
        client = 2,
        clientIntervenant = 201,
        clientRevenuEtCharges = 202,
        clientSurfaceFinanciere = 203,
        clientDroitsEpargneLogement = 204,
        projet = 3,
        projetDescription = 301,
        projetReamenagement = 302,
        projetObjetFinance = 302,
        projetMontant = 303,
        projetObjetGarantie = 304,
        projetGarant = 305,
        projetExpertise = 306,
        financement = 4,
        financementCritereRemboursement = 405,
        financementProjet = 401,
        financementDetailCredit = 402,
        financementGarantie = 403,
        financementAssurance = 404,
        assurances = 5,
        garanties = 6,
        gestionAdmin = 7,
        gestionAdminAssurances = 701,
        gestionAdminGaranties = 702,
        gestionAdminModalites = 703,
        gestionAdminRedacteurActe = 704,
        gestionAdminAvis = 705,
        gestionAdminSuivisPlanifies = 706,
        decisionPreteur = 8,
        decisionPreteurAvis = 801,
        decisionPreteurIndicateursOctroi = 802,
        decisionPreteurDecision = 803,
        piecesEtControles = 9,
        piecesEtControlesClients = 901,
        piecesEtControlesAgence = 902,
        piecesEtControlesControles = 903,
        editionOffre = 10,
        editionOffreSectionCaracteristiques = 1001,
        editionOffreSectionClausesPersonnalisees = 1002,
        editionOffreSectionListeMandats = 1003,
        remiseOffre = 11,
        signatureOffre = 12,
        historique = 13,
        signataires = 14,
        majAdmin = 15,
        majAdminAssurances = 1501,
        majAdminGaranties = 1502,
        majAdminRedacteurActe = 1503,
        majAdminSignatureElectronique = 1504,
        majAdminEcoPTZ = 1505,
        routageEditionDocuments = 16,
        emissionDocuments = 17,
        emissionDocumentsClients = 1701,
        emissionDocumentsFicheSuiveuse = 1702,
        emissionDocumentsRefusAssuranceExterne = 1703,
        blocNotes = 18,
        editionOffreElectronique = 19,
        choixEditionDemandeCredit = 20,
        pretReglemente = 21,
        pretReglementeInformationPtz = 2101,
        multiRisqueHabitation = 22,
        suiviEditions = 231,
        editionDocuments = 232,
        demandeCreditSag = 30,
        conformiteDossier = 40,
    }
}

declare namespace ICBusiness.Constantes.Ascii {
    namespace Caractere {
        const space: number;
        const interrogation: number;
    }
    /**
     * Code ascii des caractères numériques
     */
    namespace Nombre {
        const zero: number;
        const un: number;
        const deux: number;
        const trois: number;
        const quatre: number;
        const cinq: number;
        const six: number;
        const sept: number;
        const huit: number;
        const neuf: number;
    }
    /**
     * Code ascii des lettres
     */
    namespace Lettre {
        const A: number;
        const B: number;
        const C: number;
        const D: number;
        const E: number;
        const F: number;
        const G: number;
        const H: number;
        const I: number;
        const J: number;
        const K: number;
        const L: number;
        const M: number;
        const N: number;
        const O: number;
        const P: number;
        const Q: number;
        const R: number;
        const S: number;
        const T: number;
        const U: number;
        const V: number;
        const W: number;
        const X: number;
        const Y: number;
        const Z: number;
        const a: number;
        const b: number;
        const c: number;
        const d: number;
        const e: number;
        const f: number;
        const g: number;
        const h: number;
        const i: number;
        const j: number;
        const k: number;
        const l: number;
        const m: number;
        const n: number;
        const o: number;
        const p: number;
        const q: number;
        const r: number;
        const s: number;
        const t: number;
        const u: number;
        const v: number;
        const w: number;
        const x: number;
        const y: number;
        const z: number;
    }
}

declare namespace ICBusiness.Models.Modalites {
    enum EnumFormeContrat {
        sousSeingPrive = 0,
        enLaFormeAuthentique = 1,
    }
    enum EnumModeDeRecouvrement {
        monoPayeur = 0,
        multiPayeur = 1,
        payeurUniqueParCredit = 2,
    }
    enum EnumTypeFluxFinancier {
        prelevement,
        secours,
        versement,
    }
    interface IModalites {
        listePersonnes: Emprunteur.IPersonne[];
        listeCredits: ICredit[];
        activationOuvertureCompteSupport: boolean;
        ouvertureCompteSupport: number;
        activationMultiPayeur: boolean;
        modeDeRecouvrement: EnumModeDeRecouvrement;
        payeurPrincipal: IFluxFinancier;
        payeurPrincipalAutreDevise: IFluxFinancier;
        payeurImpaye: IFluxFinancier;
        payeurImpayeAutreDevise: IFluxFinancier;
        versement: IFluxFinancier;
        versementAutreDevise: IFluxFinancier;
        montantConvenu: number;
        contrat: IContrat;
    }
    interface ICredit {
        id: string;
        label: string;
        nombrePeriodes: number;
        montantCapital: number;
        codeDevise: string;
        montantEcheance: number;
        jourEcheance: number;
        avisEcheance: boolean;
        idCreditModalite: string;
        idProduitFinancier: string;
        idModaliteCalculImpaye: string;
        numeroModaliteRemboursementAnticipe: number;
        hasPrefinancementPhase: boolean;
        declenchementVersements: IDeclenchementVersements;
        traitementInteretsIntercalaires: Common.ICodeLabel<string>;
        listeModalitesCalculImpaye: IModaliteCalculImpaye[];
        listeModalitesRemboursementAnticipe: IModaliteRemboursementAnticipe[];
        listePayeurs: IFluxFinancier[];
        couvertureCredit: number;
        intitulePayeurPrincipal: string;
    }
    interface IModaliteCalculImpaye {
        code: string;
        label: string;
        value: number;
        isTaux: boolean;
        isReadOnly: boolean;
    }
    interface IModaliteRemboursementAnticipe {
        code: string;
        label: string;
        taux: number;
        tauxConseille: number;
        tauxMaximal: number;
        tauxMinimal: number;
        isSurcout: boolean;
    }
    interface ITypeModaliteCalculImpaye {
        code: string;
        label: string;
        montantConseille: number;
        montantMaximal: number;
        montantMinimal: number;
        tauxConseille: number;
        tauxMaximal: number;
        tauxMinimal: number;
    }
    interface ITypeModaliteRemboursementAnticipe {
        code: number;
        label: string;
        detail: string;
    }
    interface IFluxFinancier {
        id: string;
        mode: Common.ICodeLabel<string>;
        codeModeReglement: string;
        compte: IComptePrelevement;
        estRecouvrement: boolean;
        participationRecouvrement: number;
        ordre: number;
        codeDevise: string;
        estSecours?: boolean;
    }
    interface IComptePrelevement {
        id: string;
        numero: string;
        label: string;
        idPersonne: string;
        intitulePersonne: string;
        codeDevise: string;
    }
    interface IContrat {
        type: Common.ICodeLabel<number>;
        forme: EnumFormeContrat;
        isEditable: boolean;
    }
    interface IDeclenchementVersements {
        /** Vrai si on a soit une échelle soit un type de rattachement défini */
        hasJustificatif: boolean;
        typeDeclenchement: number;
        typeRattachement: Common.ICodeLabel<ICBusiness.Enum.TypeRattachementFacture>;
        montantMinimumVersement: number;
        numeroEchelleVersement: number;
        libelleEchelleVersement: string;
    }
    interface IEchelleVersement {
        numeroDech: number;
        numeroEchelle: string;
        libelleEchelle: string;
        codeAssiette: Enum.TypeAssiette;
        libelleAssiette: string;
        libelleTypeEchelle: string;
        libelleComportement: string;
        tor: string;
        echelons: Array<IEchelonVersement>;
    }
    interface IEchelonVersement {
        ordre: number;
        tauxVersement: number;
        codeEchelonnement: string;
        libelleNature: string;
        libelleCreationNature: string;
    }
}

declare module ICBusiness {
    var app: any;
}

declare namespace ICBusiness.Enum {
    /**
     * Consultation = 0
     * Instruction = 1,
     * Decision = 2,
     * Maj = 3, (Mise à jour administrative ou conformité)
     * Conformite = 4, (Ouverture pour controle de conformite)
     * PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge))
     */
    enum ActionOuvertureDossierEnum {
        /** Consultation = 0 */
        consultation = 0,
        /** Instruction = 1 */
        instruction = 1,
        /** Decision = 2 */
        decision = 2,
        /** Maj = 3, (Mise à jour administrative ou conformité) */
        maj = 3,
        /** Conformite = 4, (Ouverture pour controle de conformite) */
        conformite = 4,
        /** PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge)) */
        priseEnChargeBo = 5,
    }
}

declare namespace ICBusiness.Enum {
    enum CanalEditionEnum {
        /**
         * Canal Non Défini
         */
        NonDefini,
        /**
         * Canal papier
         */
        Papier,
        /**
         * Canal industrialisation
         */
        Industrialisee,
        /**
         * Canal Signature électronique agence (SAG)
         */
        SignatureAgence,
        /**
         * Canal Signature électronique à distance (SED)
         */
        SignatureDistance,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Code application
     */
    enum CodeApplicationEnum {
        neo,
        conso,
        immo,
        pvh,
        pro,
        defi,
    }
}

declare namespace ICBusiness.Enum {
    enum CodeEtapeSimulationPVHEnum {
        /** '1' Dossier créé */
        dossierCree = 1,
        /** '2' Dossier transmis à l'expert */
        dossierTransmisExpert = 2,
        /** '3' Dossier expertisé */
        dossierExpertise = 3,
        /** '4' Demande de prêt édité */
        demandePretEdite = 4,
        /** '5' Demande de prêt signé */
        demandePretSigne = 5,
        /** '6' Dossier transmis aux engagements */
        dossierTransmisEngagement = 6,
        /** '7' dossier transmis NEO */
        dossierTransmisNeo = 7,
        /** '8' Abandon Client */
        abandonClient = 8,
        /** '9' Client rejeté */
        clientRejete = 9,
    }
}

declare namespace ICBusiness.Enum {
    enum CodeRessourceCharge {
        Ressource,
        Charge,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeDeclenchementVersement {
        facture = 0,
        echelle = 1,
    }
    enum TypeRattachementFacture {
        automatique,
        interactif,
    }
    enum TypeAssiette {
        prixConvenu,
        montantEmprunte,
    }
    enum TypeEchelle {
        legale,
        specifiqueEtablissement,
        autre,
    }
    enum TypeComportementEchelle {
        deblocageFond,
        echelleInformative,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Les états du dossier
     */
    enum EtatDossier {
        /** P */
        PropositionCommerciale,
        /** D */
        DemandeDeCredit,
        /** O */
        OffreCommerciale,
    }
    /**
     *  Les sous états du dossier
     */
    enum SousEtatDossier {
        /** A */
        PropositionCommerciale,
        /** B */
        Montage,
        /** C */
        Decision,
        /** D */
        Edition,
        /** E */
        Remise,
        /** G */
        OffreEnAttenteSignature,
        /** H */
        OffreSigneeDelaiRetractation,
        /** I
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreEditeeSansDecisionEnAttenteRemiseEmprunteur,
        /** J
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreEditeeTransfereePourDecision,
        /** K
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreSansDecisionEnAttenteDeSignature,
        /** L
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreEnAttenteDeSignatureTransfereePourDecision,
        /** M
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreSigneeSansDecisionDelaiDeRetractation,
        /** N
         * /!\ OBSOLETE DANS NEO /!\
         */
        OffreSigneeDelaiDeRetractationTransfereePourDecision,
        /** P */
        PropositionCommercialeAutre,
        /** U */
        OffreConclue,
        /** V */
        DemandeCreditSansSuite,
        /** W */
        PropositionCommercialeSansSuite,
        /** X */
        OffreSansSuite,
    }
}

declare namespace ICBusiness.Enum {
    /**
     * Type de sureté d'une garantie
     */
    enum TypeSurete {
        reelle = 0,
        personnelle = 1,
        autre = 2,
    }
    enum TypeCouverture {
        enMontant = 0,
        enTaux = 1,
    }
    enum TypeSaisieCotisation {
        plageMontant = 0,
        listeMontant = 1,
        plageTaux = 2,
        listeTaux = 3,
    }
    enum FinanceMode {
        autre = 0,
        aperiodique = 1,
        enUneFois = 2,
    }
    enum ReponseGarantie {
        enAttente = 0,
        refuse = 1,
        accorde = 2,
    }
    enum TypeObjetPorteEnGarantie {
        objetDuFinancement = 0,
        autre = 1,
    }
}

declare namespace ICBusiness.Enum {
    /**
     * obligatoire = 79
     * interdit = 73
     * facultatif = 70
     */
    enum FicpRules {
        obligatoire,
        interdit,
        facultatif,
    }
    /**
     * NON_HABILITE = 0
     * NON_FORCE = 1
     * FORCE = 2
     */
    enum TypeForcage {
        NON_HABILITE = 0,
        NON_FORCE = 1,
        FORCE = 2,
    }
    /**
     * conso = 49
     * immo = 50
     * droitCommun = 32
     */
    enum TypeLoi {
        conso,
        immo,
        droitCommun,
    }
    /**
     * OK = 0
     * FICHE = 1
     * INDISPONIBLE = 2
     * ERREUR = 3
     */
    enum TypeRecapitulatif {
        OK = 0,
        FICHE = 1,
        INDISPONIBLE = 2,
        ERREUR = 3,
    }
}

declare namespace ICBusiness.Enum {
    /** Mode d'ouverture de l'application (reçu en get par le context lisa) */
    enum ModeOuvertureDossier {
        consultation = 0,
        edition = 1,
    }
}

declare namespace ICBusiness.Enum {
    /**
     *  Familles d'objet commercialisés (TOC)
     */
    enum NatureProjetEnum {
        pro = 0,
        conso = 1,
        eps = 2,
        immo = 3,
    }
}

declare namespace ICBusiness.Enum {
    enum OffreElecEtIndusStatutAction {
        EnAttente = 0,
        EnCours = 1,
        Ok = 2,
        Erreur = 3,
    }
}

declare namespace ICBusiness.Enum {
    enum CodePanelDetailCredit {
        CREDIT = 0,
        MODULATION = 1,
        REVISION = 2,
    }
}

declare namespace ICBusiness.Enum {
    enum Periodicite {
        Annee = 0,
        Semestre = 1,
        Trimestre = 2,
        Bimestre = 3,
        Mois = 4,
        Jour = 5,
    }
}

declare namespace ICBusiness.Enum {
    /**
     * Utilisé en entrée de la directive pour connaitre quel est le type de référence fourni ICDossier.Front.ReferenceLotsCadastresControleur
     */
    enum Reference {
        lot = 0,
        cadastre = 1,
    }
}

declare namespace ICBusiness.Enum {
    /**
     * Normale = 32
     * Démarchage = 68
     * VAD = 86
     * VAD précédée d'un démarchage = 65
     */
    enum TechniqueVente {
        Normale,
        VadDemarchage,
        Demarchage,
        Vad,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeAnomalieEnum {
        AnomalieNonBloquante = 0,
        AnomalieBloquante = 1,
        AnomalieManuelle = 2,
        Alerte = 3,
        Technique = 4,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeControleEnum {
        dossier = 0,
        alerteDossier = 1,
        piecesJustificatives = 2,
        piecesAgence = 3,
        manuel = 4,
        modalites = 5,
        emprunteur = 6,
        caution = 7,
        personne = 8,
        projet = 9,
        planFinancement = 10,
        assurances = 11,
        garanties = 12,
        creditExterne = 13,
        creditInterne = 14,
        elementsFournir = 15,
        suiviEdition = 16,
        redacteurActe = 100,
        MRH = 101,
        SEDSAG = 102,
        infoPTZ = 103,
    }
}

declare namespace ICBusiness.Enum {
    /**
     * Type de destinataire des clauses à l'édition
     */
    enum TypeDestinataireClause {
        emprunteur = 0,
        redacteurActe = 1,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeDocument {
        /** Dossier (0) */
        Dossier = 0,
        /** Offre (1) */
        Offre = 1,
        /** Fiche Suiveuse (3) */
        FicheSuiveuse = 3,
        /** Refus Assurance Externe (4) */
        RefusAssuranceExterne = 4,
        /** Pour la liste des documents pour le conso et le pro page édition de documents (5) */
        DossierConsoPro = 5,
        /** Pour la liste des documents pour le conso et le pro page édition de l'offre et autres documents (6) */
        OffreConsoPro = 6,
        /** Pour la liste des documents permettant une impression papier en mode suivi des écitions */
        SuiviEditionPapier = 7,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeObjetAnomalieEnum {
        CreditInterne = 1,
        CreditExterne = 2,
        CreditExistant = 3,
        Garantie = 4,
    }
}

declare namespace ICBusiness.Enum {
    enum EnumTypePiece {
        client = 0,
        agence = 1,
        controle = 2,
    }
}

declare namespace ICBusiness.Enum {
    enum TypeRafraichissement {
        TousLesIntervenants,
        Emprunteur,
        Garant,
        Signataire,
        AutrePersonne,
    }
}

declare namespace ICBusiness.Enum {
    enum TypologieDocumentEnum {
        /**
         * Non défini
         */
        NonDefini,
        /**
         * Document technique
         */
        Technique,
        /**
         * Document en signature électronique
         */
        SignatureElectronique,
        /**
         * Document en consultation
         */
        Consultation,
        /**
         * Document en édition papier
         */
        SignaturePapier,
    }
}

declare namespace ICBusiness.Constantes.AccordPrincipe {
    const accordOk: number;
    const accordACompleter: number;
    const accordAApprofondir: number;
}

declare namespace ICBusiness.Constantes {
    namespace Toc {
        const _001_: string;
        const _002_: string;
        const _003_CONSTRUCTION: string;
        const _004_LOGEMENT_NEUF: string;
        const _005_TRAVAUX: string;
        const _006_LOGEMENT_EXISTANT: string;
        const _007_PARTS_DE_SCPI_HABITAT: string;
        const _008_OPERATION_IMMOBILIERES_DIVERSES: string;
        const _032_: string;
        const _041_: string;
        const _049_: string;
        const _052_INVEST_PATRIMONIAL_NON_HABITAT: string;
        const _145_REGROUPEMENT_CREDITS_IMMOBILIERS: string;
        const _147_REAM_RACHAT_CREDIT_CONSOMMATION: string;
        const _148_RACHAT_CREDIT_IMMOBILIER: string;
        const _215_: string;
    }
    namespace Tor {
        const _01_: string;
        const _02_TERRAIN_PLUS_CONSTRUCTION_AVEC_CONTRAT: string;
        const _03_CONSTRUCTION_AVEC_CONTRAT: string;
        const _04_LOGEMENT_NEUF_ACQUIS_ETAT_FUTUR_ACHEVEMENT_VEFA: string;
        const _05_LOGEMENT_NEUF_ACQUIS_CLE_MAIN: string;
        const _06_LOGEMENT_AMELIORE_PAR_PROMOTEUR: string;
        const _07_TRANSFORMATION_LOCAUX_NON_HABITABLE_HABITATION: string;
        const _08_PARTS_SOCIETE_DROIT_ATTRIBUTION: string;
        const _09_LOGEMENT_EXISTANT_SANS_TRAVAUX: string;
        const _10_AGRANDISSEMENT_PAR_EXTENSION_OU_SURELEVATION: string;
        const _11_: string;
        const _12_TRAVAUX_PIG: string;
        const _13_TRAVAUX_ECONOMIE_ENERGIE: string;
        const _14_: string;
        const _15_: string;
        const _16_: string;
        const _17_: string;
        const _18_PAIEMENT_DE_SOULTE_LOGEMENT_ANCIEN: string;
        const _20_: string;
        const _21_: string;
        const _22_SCPI_HABITAT: string;
        const _24_LOGEMENT_EXISTANT_AVEC_TRAVAUX: string;
        const _25_NUE_PROPRIETE: string;
        const _26_LOGEMENT_NEUF_RESIDENCE_TOURISME: string;
        const _27_: string;
        const _28_: string;
        const _29_: string;
        const _30_LOGEMENT_NEUF_EN_INDIVISION: string;
        const _31_: string;
        const _32_: string;
        const _33_: string;
        const _34_: string;
        const _35_: string;
        const _36_: string;
        const _37_: string;
        const _38_: string;
        const _57_INVESTISSEMENT_PATRIMONIAL_NON_HABITAT: string;
        const _94_: string;
        const _97_: string;
        const _98_CONSTRUCTION_SANS_CONTRAT: string;
        const _A6_REGROUPEMENT_CREDITS_IMMOBILIERS: string;
        const _A9_: string;
        const _B1_: string;
        const _B4_: string;
        const _B5_: string;
        const _B7_REAM_RACHAT_CREDIT_IMMOBILIER: string;
        const _C1_: string;
        const _C2_: string;
        const _R1_BRS_ANCIEN_SANS_TRAVAUX: string;
        const _R2_BRS_ANCIEN_AVEC_TRAVAUX: string;
        const _R3_BRS_LOGEMENT_NEUF: string;
        const _R4_BRS_CONSTRUCTION_AVEC_CONTRAT: string;
        const _R5_BRS_CONSTRUCTION_SANS_CONTRAT: string;
    }
}

declare namespace ICBusiness.Constantes.AffichageChampsProjetImmo {
    const listeCasChampsMontant: {
        zero: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        un: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        trois: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        six: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        sept: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        huit: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        dix: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        onze: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        treize: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        quatorze: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        quinze: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        seize: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
        dixsept: {
            champsTerrain: boolean;
            champsAcquisition: boolean;
            champsMobilier: boolean;
            afficheFraisNotaire: boolean;
            afficheBoutonNegociation: boolean;
            champsTravaux: boolean;
            champsEcoPTZ: boolean;
            champsPrixConvenu: boolean;
            champsCoutConstruction: boolean;
            fraisDivers: boolean;
            champsRachatCreance: boolean;
            champsBesoin: boolean;
            champsNegociation: boolean;
            rachatRegroupement: boolean;
        };
    };
    const listeCasChampsInfosCompl: Models.ProjetImmo.IChampsInformationsComplementaires[];
    const listeCasChampsProjet: Models.ProjetImmo.IChampsProjet[];
}

declare namespace ICBusiness.Constantes.Anomalie {
    /** Tableau typeControleAnomaliesBloquantesTraites à alimenter si d'autres type de controle d'anomalies bloquantes sont traités */
    const typeControleAnomaliesBloquantesTraites: number[];
    namespace ThemeSpecifiqueControle {
        const idsAnoInfoPTZ: string[];
        const idsAnoSEDSAG: string[];
        const idsAnoMRH: string[];
        const idsAnoProjet: string[];
        const idsAnoRedacteurActe: string[];
    }
}

declare namespace ICBusiness.Constantes.Assurances {
    namespace Risques {
        const listeLibelles: Models.Common.ICodeLabel<number>[];
        const risqueSimple: number;
        const risqueAggrave: number;
    }
    namespace Decision {
        const decisionAccordee: string;
        const dossierAttenteCreation: string;
        const decisionAttente: string;
        const decisionRefusee: string;
    }
    namespace CodeEtat {
        const etatAccorde: number;
        const etatRefuse: number;
    }
    const valeurActiveDocsCNP: string[];
}

declare namespace ICBusiness.Constantes.Avis {
    /**
     * Namespace for the typology codes of notices
     */
    namespace CodeTypologie {
        /**
         * Lender decision (même si le code existe, il n'est jamais géré.)
         */
        const decisionPreteur: string;
        /**
         * Compliance
         */
        const conformite: string;
        /**
         * Service Lutte Anti Blanchiment
         */
        const slab: string;
    }
}

declare namespace ICBusiness.Constantes.BienAVendre {
    const listeObjetsBav: Models.Common.ICodeLabel<string>[];
    const listeTypesVente: Models.Common.ICodeLabel<number>[];
    const listeModesAcquisition: Models.Common.ICodeLabel<number>[];
}

declare namespace ICBusiness.Constantes.BlocNotes {
    const BLOCNOTE: string;
    const DIVERS: string;
    const DOSSIER: string;
}

declare namespace ICBusiness.Constantes.Charge {
    namespace TypeCharge {
        const chargeCreditRelais: string;
    }
}

declare namespace ICBusiness.Constantes {
    /**
     * Namespace de constantes contenant les identifiants des classes pour les appels ListerConstantes, MajElement et MajElements
     */
    namespace ClasseNeo {
        /** Identifiant de classe pour la mise à jour des données d'une assurance */
        const assuranceMaj: string;
        /** Identifiant de classe pour la mise à jour des données de la couverture d'une assurance */
        const couvertureCreditMaj: string;
        /** Indentifiant de classe pour la mise à jour des données d'une cotisation */
        const cotisationMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des personnes physiques
         */
        const activiteMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des batiments habitables financés
         */
        const batimentHabitableFinanceMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des biens sous jacents
         */
        const bienSousJacentMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des charges
         */
        const chargeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des informations complémentaires du dossier
         */
        const complementDossierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des comptes
         */
        const compteDepotMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des constructions financées
         */
        const constructionFinanceeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des contrats épargne logement
         */
        const contratEpargneLogementMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des crédits existants
         */
        const creditExistantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des crédits internes
         */
        const creditInterneMaj: string;
        /** Identifiant de classe pour la mise à jour des crédits internes */
        const creditExterneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des modalités de crédit
         */
        const creditModaliteMaj: string;
        const creditPhaseDiffereTotalMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'emprunteur
         */
        const emprunteurMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des familles épargnes
         */
        const familleEpargneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'un garant
         */
        const garantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'un garant
         */
        const interditBancaireMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'information d'occupation propre au questionnaire annexe PTZ
         */
        const informationOccupationMaj: string;
        /**
         * Identifiant de classe pour la mise à jour d'occupant propre au questionnaire annexe PTZ
         */
        const occupantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des payeurs
         */
        const payeurMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des personnes physiques
         */
        const personnePhysiqueMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des personnes morales
         */
        const personneMoraleMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des phases
         */
        const phaseCreditExistantMaj: string;
        /**
         * Identifiant de classe pour la mise à jour du rattachement foyer fiscal tiers propre au questionnaire annexe PTZ
         */
        const rattachementFoyerFiscalTiersMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des redacteurs d'acte
         */
        const redacteurActeMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des ressources
         */
        const ressourceMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des revenus fiscaux
         */
        const revenuFiscalMaj: string;
        /**
         * Identifiant de classe pour la mise à jour des soultes financées
         */
        const soulteFinanceeMaj: string;
        /**
         * Identifiant de class pour la mise à jour des terrains financés
         */
        const terrainFinanceMaj: string;
        /**
         * Identifiant de class pour la mise à jour des terrains sous jacents
         */
        const terrainSousJacentMaj: string;
        /**
         * Identifiant de class pour la mise à jour d'une Tranche Epargne Logement
         */
        const trancheELMaj: string;
        /**
         * Identifiant de class pour la mise à jour des travaux financés
         */
        const travauxFinancesMaj: string;
        /**
         * Identifiant de classe pour la liste des constantes de statut d'occupation logement
         */
        const categorieEmprunteur: string;
        /**
         * Identifiant de classe pour la liste des libellé de taux conseillés
         */
        const creditParametresTaux: string;
        /**
         * Identifiant de classe pour la liste des natures de financement autorisées
         */
        const natureFinancementAutorise: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element dossier.
         */
        const dossierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element bien conso finance
         */
        const bienConsoFinanceMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element projet non immobilier
         */
        const projetNonImmobilierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element plan de financement
         */
        const planFinancementMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element bien détaillé
         */
        const bienEquipementProMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element tresorerie financée
         */
        const tresorerieFinanceeMaj: string;
        const bienAVendreMaj: string;
        const informationsComplementairesSCIMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de clause personnalisée
         */
        const clausePersonnaliseeMaj: string;
        const garantiePersonnelleMaj: string;
        const garantieReelleMaj: string;
        /**
         * Identifiant pour les saisies complémentaires à l'impression/édition de document
         */
        const saisiesComplementaireMaj: string;
        const donneesCautionPersonneMoraleMaj: string;
        const signataireMaj: string;
        const entrepreneurIndividuelMaj: string;
        const bonDeCaisseCapitalisationMaj: string;
        const delegationLoyerMaj: string;
        const cessionDaillyAutreMaj: string;
        const contratAssuranceMaj: string;
        const gageCompteInstrumentFinancierMaj: string;
        const antichreseMaj: string;
        const cessionDaillyLoyerImmeubleMaj: string;
        const nantissementPartSocialeMaj: string;
        const gageVehiculeMaj: string;
        const nantissementValeurMaterielleMaj: string;
        const nantissementValeurMobiliereMaj: string;
        const nantissementFondDeCommerceMaj: string;
        const hypothequeAerienneMaj: string;
        const hypothequeImmobiliereMaj: string;
        const bienDiversMaj: string;
        const suiviPlanifieMaj: string;
        const pretReamenageMaj: string;
        const infoRegroupementMaj: string;
        const reamenagementMaj: string;
        const projetImmobilierMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element proprietaire
         */
        const proprietaireMaj: string;
        /**
         * Identifiant de classe pour la mise à jour de l'element suivi edition document
         */
        const suiviEditionDocumentMaj: string;
        /**
         * Identifiant de classe pour la mise à jour du refus d'assurance externe
         */
        const refusAssuranceExterneMaj: string;
        /**
         * Identifiant de classe pour la mise à jour du but locatif du projet
         */
        const butLocatifMaj: string;
        /**
         * Identifiant de classe pour la mise à jour pièces et contrôles
         */
        const pieceClientMaj: string;
        const pieceAgenceMaj: string;
        const controleMaj: string;
    }
}

declare namespace ICBusiness.Constantes.CodeCanal {
    /** correspond au Cosxap côté centrale */
    const codeCanalPVH: string;
}

declare namespace ICBusiness.Constantes.ContexteEdition {
    namespace TypeEdition {
        const agence: string;
        const backOffice: string;
        const nonConcerne: string;
    }
}

declare namespace ICBusiness.Constantes.Contrat {
    /**
     * Namespace Codes type engagement
     */
    namespace CodeTypeEngagement {
        /**
         * Engagement de financement actuel ' '
         */
        const typeEngagementFA: string;
        /**
         * Engagement consolidable, sans ligne de crédit 'CO'
         */
        const typeEngagementCO: string;
        /**
         * Engagement de ligne de crédit (reconstituable ou consolidable) 'LC'
         */
        const typeEngagementLC: string;
        /**
         * Engagement au sein d'une ligne d'investissement 'EI'
         */
        const typeEngagementEI: string;
    }
    namespace RemiseOffre {
        const etatDossierSigneElectroniquement: string;
    }
}

declare namespace ICBusiness.Constantes.ConventionAssurance {
    namespace Type {
        const interne: string;
        const externe: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Credit {
        /**
         * Options radio bouton pour type de prêt
         */
        const typePretOptions: Models.Common.ICodeLabel<number>[];
        /**
         * Code de la charge de type APL => ZZ
         */
        const aplCodeCharge: string;
        /**
         * Code de la charge de type AtoutClic => ZC
         */
        const atoutClicCodeCharge: string;
        /**
         * Codes des familles de produits Épargne Logement (CEL et PEL)
         * Contient les codes suivants :
         *  - CL : Crédit Épargne Logement (CEL)
         *  - PL : Plan Épargne Logement (PEL)
         */
        const codesFamillesEpargneLogement: string[];
        /**
         * Code de produit CE
         */
        const codeProduitCE: number;
        /**
         * code du taux de type TAEG
         *  => A
         */
        const codeTaegTauxType: string;
        /**
         * Codes des charges de type "Crédit Existant" (interne et externe)
         * Contient les codes suivants :
         *  - ZP : Crédit existant interne
         *  - ZQ : Crédit existant interne cautionné
         *  - ZR : Crédit existant externe cautionné
         *  - ZX : Crédit existant externe
         *  - ZL : Crédit relais
         */
        const existingCreditCodes: string[];
        const creditCautionneHorsEtablissement: string;
        /**
         * Codes des charges de type "Crédit Interne"
         * Contient les codes suivants :
         *  - ZP : Crédit existant interne
         *  - ZQ : Crédit existant interne cautionné
         */
        const internalCreditCodes: string[];
        /**
         * Code d'investissement pour usage locatif
         */
        const codeAucunePresenceInvestissementUsageLocatif: number;
        const codePresenceInvestissementUsageLocatif: number;
        /**
         * Code Type revenu ménage => Revenu annuel déclaré à N-2 (49)
         */
        const codeTypeRevenuMenage: number;
        const mensualitesTypesList: () => Models.Common.ICodeLabel<string>[];
        const listePeriodicitePhaseComplete: () => Models.Common.ICodeLabel<string>[];
        /**
         * Phase : périodicités
         */
        const phasePeriodicitiesList: () => Models.Common.ICodeLabel<string>[];
        const tauxTypesList: () => Models.Common.ICodeLabel<string>[];
        module Reamenagement {
            const listeReglementations: () => Models.Common.ICodeLabel<number>[];
        }
        module Phase {
            /**
             * Type de phases d'un crédit
             * AM
             */
            const codeTypePhaseAmortissement: string;
            /**
             * PF
             */
            const codeTypePhasePrefinancement: string;
            /**
             * DA
             */
            const codeTypePhaseDiffereAmortissement: string;
            /**
             * MO
             */
            const codeTypePhaseMobilite: string;
            /**
             * DT
             */
            const codeTypePhaseDiffereTotal: string;
            /**
             * Phase : types de phase
             */
            const phaseTypesList: () => Models.Common.ICodeLabel<string>[];
            const listeModeSaisieCapital: () => Models.Common.ICodeLabel<number>[];
            module AmortissementTaux {
                /**
                 * { code: N (78), libelle: "en plage de valeur" }
                 */
                const _enPlageDeValeur: Models.Common.ICodeLabel<number>;
                /**
                 * { code: O (79), libelle: "taux d’intérêt du palier de taux" }
                 */
                const _palierDeTaux: Models.Common.ICodeLabel<number>;
                const listeModeExpressionTaux: Models.Common.ICodeLabel<number>[];
            }
            module PretCombine {
                /**
                 * { code: 3 (51), libelle: "2 en 1 faux relais" }
                 */
                const _2en1FauxRelais: Models.Common.ICodeLabel<number>;
                /**
                 * { code: 2 (50), libelle: "2 en 1 vrai relais" }
                 */
                const _2en1VraiRelais: Models.Common.ICodeLabel<number>;
                /**
                 * { code: 1 (49), libelle: "transformable" }
                 */
                const _transformable: Models.Common.ICodeLabel<number>;
                const listePretCombine: Models.Common.ICodeLabel<number>[];
            }
            module Idws {
                const amortissement: string;
                const prefinancement: string;
                const differeAmortissement: string;
                const differeTotal: string;
                const mobilisation: string;
            }
        }
        namespace CreditExistant {
            const typeTauxPropCreditExistant: number;
            const periodiciteCreditExistant: number;
        }
        namespace ModulationCredit {
            const modulationEcheanceMontant: number;
            const modulationEcheancePourcentage: number;
            const listModulationEcheance: Models.Common.ICodeLabel<number>[];
        }
        namespace RevisionCredit {
            const revisionAjustementDuree: number;
            const revisionAjustementEcheance: number;
            const listRevisionAjustement: Models.Common.ICodeLabel<number>[];
        }
    }
}

declare namespace ICBusiness.Constantes {
    namespace CreditEpargneLogement {
        /**
         * Epargne logement : type de calcul de l'épargne logement
         */
        const listeRadioCalculEnMontantOuEcheance: Models.Common.ICodeLabel<boolean>[];
    }
}

declare namespace ICBusiness.Constantes.CreditExterne {
    const listeNaturePret: () => Models.Common.ICodeLabel<number>[];
    /** Liste types de remboursement infos complémentaires concours externes */
    const listeTypeDeRemboursement: () => Models.Common.ICodeLabel<number>[];
    /** Liste nature de garantie infos complémentaires concours externes */
    const listenatureGarantie: () => Models.Common.ICodeLabel<number>[];
    const listeReglementation: Models.Common.ICodeLabel<number>[];
    const longueurNomEtablissementPretReamenage: number;
}

declare namespace ICBusiness.Constantes {
    namespace Data {
        /**
         * Liste des fonctionnement d'un compte
         */
        const accountStatesList: Models.Common.ICodeLabel<number>[];
        /**
         * Liste des fonctionnement d'un compte (CFF)
         */
        const accountStatesListForCFF: Models.Common.ICodeLabel<number>[];
        /** Renvoi l'élément de 'Autre Banque 99999' pour les comptes hors-ce */
        const etablissementCegcAutreBanque: Models.Common.ICodeLabel<string>;
        /**
         * Employeur commun
         */
        const commonEmployerLabelList: Models.Common.ICodeLabel<number>[];
        /**
         * Compte externe : modes de composition
         */
        const compositionModesList: Models.Common.ICodeLabel<number>[];
        /**
         * Gestion Administrative - Modalités : Forme de contrat
         */
        const contratFormeList: Models.Common.ICodeLabel<number>[];
        /**
         * Crédit existant : types de crédit
         */
        const creditTypesList: Models.Common.ICodeLabel<Models.Emprunteur.EnumTypeCredit>[];
        /**
         * ID de la caisse CFF
         */
        const idCaisseCFF: string;
        /**
         * Gestion Administrative - Modalités : Mode de recouvrement
         */
        const modeDeRecouvrementList: Models.Common.ICodeLabel<number>[];
        const motifAutreCode: string;
        /**
         * Crédit existant : motifs de remboursement anticipé
         */
        const prepaymentMotivesList: Models.Common.ICodeLabel<string>[];
        /**
         * Options d'un radio bouton simple (Oui / Non)
         */
        const simpleYesNoOptions: Models.Common.ICodeLabel<number>[];
        /**
         * Options d'un radio bouton simple (Oui / Non) avec valeur true/false
         */
        const simpleYesNoOptionsBoolean: Models.Common.ICodeLabel<boolean>[];
        /**
         * Options d'un radio bouton simple (Oui / Non) avec valeur "OUI/NON"
         */
        const simpleYesNoOptionsString: Models.Common.ICodeLabel<string>[];
        /**
         * Options d'un radio bouton (Oui / Non / En attente)
         */
        const okKoEnAttenteOptions: Models.Common.ICodeLabel<string>[];
        /** ENTITE TITULAIRE */
        /**
         * Liste des types de compte
         */
        const listeTypeCompte: Models.Common.ICodeLabel<string>[];
        /**
         * code nature du lien Entité titulaire / personne
         */
        const codeNatureLienEntiteTitulairePR: string;
        const listeNatureLienEntiteTitulaire: Models.Common.ICodeLabel<string>[];
        const codeTypeContratEpargneLogement: Models.Common.ICodeLabel<string>[];
        const typeDroitEpargneLogement: Models.Common.ICodeLabel<boolean>[];
        /**
         * Epargne Logement : Types réservation de droit acquis
         */
        const listeReservationsDroitsAcquis: Models.Common.ICodeLabel<number>[];
        /**
         * Epargne Logement: Date réforme de 2011 (1er mars ?) : la date d'arrêté ou simulation ne peut être antérieure à 1 an par rapport à la date du dossier
         */
        const dateReformeEpargneLogement: string;
        /**
         * Epargne Logement : Types résidence  encours
         */
        const listeResidencesEncours: Models.Common.ICodeLabel<number>[];
        const listeDelaiRealisation: Models.Common.ICodeLabel<number>[];
        /**
         * Options d'un radio bouton simple (Oui / Non) avec valeur true/false
         */
        const optionIntegrationLissage: Models.Common.ICodeLabel<boolean>[];
        const conformiteList: Models.Common.ICodeLabel<boolean>[];
    }
}

declare namespace ICBusiness.Constantes {
    /** Constantes relatives au devises */
    namespace Devise {
        /** Code de la devise Euro (EUR) */
        const codeEuro: string;
        /** Code de la devise Dollar Canadien (CAD) */
        const codeDollarCanadien: string;
        /** Code de la devise Dollar (USD) */
        const codeDollar: string;
        /** Code de la devise Franc Suisse (CHF) */
        const codeFrancSuisse: string;
        /** Code de la devise Livre (GBP) */
        const codeLivre: string;
        /** Liste des libellés associés à un code devise */
        const codeDeviseLabel: {
            "EUR": string;
            "CAD": string;
            "USD": string;
            "CHF": string;
            "GBP": string;
            "": string;
        };
    }
}

declare namespace ICBusiness.Constantes.Documents {
    /**
     * Codes des formats éditiques
     */
    namespace FormatEditique {
        const industrialise: number;
        const papier: number;
        const signatureElectronique: number;
    }
    /**
     * Codes des types de documents
     */
    namespace TypeDocument {
        const propositionCommerciale: string;
        const tableauAmortissementCredit: string;
        const assuranceExterne: string;
    }
    /**
     * Codes des types de signature électronique
     *  nonInitialise: number = -30;
     *  defaut: number = 0;
     *  offreSag: number = 1;
     *  offre: number = 2;
     *  demandeCreditSag: number = 3;
     *  demandeCreditSed: number = 4;
     */
    namespace TypeSignatureElectronique {
        const nonInitialise: number;
        const defaut: number;
        const offreSag: number;
        const offre: number;
        const demandeCreditSag: number;
        const demandeCreditSed: number;
    }
    /**
     * Edition Industrialisée : ‘I’, Signature Electronique : ‘S’, Edition Numérique : ‘N’, Autre : ‘ ’
     */
    namespace ModeEdition {
        const autre: number;
        const editionIndustrialise: number;
        const editionNumerique: number;
        const signatureElectronique: number;
    }
    namespace SaisieComplementaire {
        const code: string;
    }
    /**
     * Typologie de document
     */
    namespace TypologieDocumentElectronique {
        /**
         * Non défini
         */
        const nonDefini: number;
        /**
         * Document technique
         */
        const technique: number;
        /**
         * Document de signature électronique de facto obligatoire
         */
        const signatureElectronique: number;
        /**
         * Document en consultation de facto pas obligatoire
         */
        const consultation: number;
        /**
         * Document en édition papier
         */
        const signaturePapier: number;
    }
    /**
     * Documents ayant un traitement spécifique
     */
    namespace DocumentSpecifique {
        /** Notices d'assurance */
        const notice: string;
        /** Service de signature électronique (statique) */
        const serviceSignElecStatique: string;
        /** Service de signature électronique */
        const serviceSignElec: string;
    }
}

declare namespace ICBusiness.Constantes.Dossier {
    namespace CodeEvenementPassageDossierASansSuite {
        const sansSuiteParInstructeur: string;
        const sansSuiteRefusClient: string;
    }
    namespace EtatDossierEdition {
        const aValider: string;
    }
}

declare namespace ICBusiness.Constantes.EditionOffre {
    namespace RolesDestinataires {
        const emprunteur: ICBusiness.Models.Common.ICodeLabel<string>;
        const notaire: ICBusiness.Models.Common.ICodeLabel<string>;
        const caution: ICBusiness.Models.Common.ICodeLabel<string>;
        const listeRoleDestinataires: ICBusiness.Models.Common.ICodeLabel<string>[];
    }
    namespace StatutDocIndus {
        const statutConcerne: string;
        const statutNonConcerne: string;
    }
    namespace DonneesComplementaires {
        const documentFCM17OME: string;
        const documentFCM17GBM: string;
        const listeCodeDocumentUnitaireEnIndustrialise: string[];
    }
}

declare namespace ICBusiness.Constantes.Eds {
    /**
     * Type de recherche
     */
    namespace RecherchePar {
        const identifiantInterne: number;
        const identifiantExterneEtType: number;
        const libelle: number;
        const type: number;
    }
    /**
     * Type Agence EDS Rattachement PF
     */
    namespace TypeAgenceEDSRattachementPf {
        const conseillerDeProximite: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Emprunteur {
        /**
         * Rôles Emprunteur/Personne
         */
        const typeRolePersonneCaution: Models.Common.ICodeLabel<string>;
        const typeRolePersonneEmprunteurClientBancaire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneComposantEmprunteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneVendeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneProprietaire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneHuissier: Models.Common.ICodeLabel<string>;
        const typeRolePersonnePayeur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneOrganismeSignataire: Models.Common.ICodeLabel<string>;
        const typeRolePersonneCaf: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRedacteur: Models.Common.ICodeLabel<string>;
        const typeRolePersonneBeneficiaireVersement: Models.Common.ICodeLabel<string>;
        const typeRolePersonneAssocie: Models.Common.ICodeLabel<string>;
        const typeRolePersonneRepresentant: Models.Common.ICodeLabel<string>;
        const typeRoleConjointNonEmprunteur: Models.Common.ICodeLabel<string>;
        /**
         * Liste des rôles personne répresentant
         */
        const listeTypesRolesPersonne: Models.Common.ICodeLabel<string>[];
        /**
         * Codes de présence d'activités salariales => non
         * 79 => oui
         */
        const codeAucunePresenceActiviteSalariale: number;
        /**
         * Code d'une entreprise en formation
         *  => Le numéro de Siren de l'entreprise en question commence par ce code, c'est-à-dire "F"
         */
        const codeEntrepriseEnFormation: string;
        /**
         * Code d'une entreprise sans Siren
         *  => Le numéro de Siren de l'entreprise en question commande par ce code, c'est-à-dire "Z"
         */
        const codeEntrepriseSansSiren: string;
        /**
         * Codes de présence d'activités salariales => oui
         */
        const codePresenceActiviteSalariale: number;
        /** Code d'affichage de l'employeur commun */
        const codeAffichageEmployeurCommun: string;
        const categorieEtablissementCredit: string;
        const categorieAutreInstitutionFinanciere: string;
        const categorieAdminPubliqueLocale: string;
        const categorieAdminPubliqueSanitaireEtSociale: string;
        const categorieAssociationsEtSyndicats: string;
        const categorieSocieteHlm: string;
        const categorieSocieteEconomieMixte: string;
        const categorieSciDeParticuliers: string;
        const categorieSciDeProfessionnels: string;
    }
    namespace Personne {
        /**
         * Code du type "personne morale"
         */
        const codeTypePersonneMorale: number;
        /**
         * Code du type "personne physique"
         */
        const codeTypePersonnePhysique: number;
        /**
         * Codes de type "personne"
         *  - P : Personne physique
         *  - M : Personne morale
         */
        const codeTypesPersonne: Models.Common.ICodeLabel<number>[];
        const codeTypeContratInconnu: number;
        const libelleTypeContratInconnu: string;
    }
    namespace EntiteTitulaire {
        /**
         * Permet de préciser le type de recherche à effectuer.Valeurs :
         * 1 Recherche par identifiant Tiers (n° personne)
         */
        namespace typeRechercheEntiteTitulaire {
            const rechercheParIdentifiant: string;
        }
        /**
         * modeCompositionEntiteTitulaire => mode indivision
         */
        const modeIndivision: string;
    }
}

declare namespace ICBusiness.Constantes.Environnement {
    const DUA: string;
    const VFO: string;
    const UTI: string;
    const QPA: string;
    const PRO: string;
}

declare namespace ICBusiness.Constantes {
    namespace SignatureElectronique {
        /**
         * Etat Dossier de la signature électronique
         */
        namespace EtatDossierSignatureElectronique {
            /**
             * Dossier électronique en attente de création
             */
            const nonCree: string;
            /**
             * Dossier électronique créé
             */
            const cree: string;
            /**
             * Dossier électronique dont tous les documents obligatoires sont prêts à l'envoi
             */
            const valide: string;
            /**
             * En attente de récépissé (i.e. la liasse a été envoyé au client mais celui-ci n'a pas accusé réception)
             */
            const attenteSignatureRecepisse: string;
            /**
             * Dossier électronique signé partiellement
             */
            const attenteSignatureDefinitive: string;
            /**
             * Dossier électronique signé par la(les) personne(s)
             */
            const signe: string;
            /**
             * Dossier électronique annulé
             */
            const annule: string;
        }
    }
}

declare namespace ICBusiness.Constantes.Garanties {
    namespace CodeNature {
        const codeHypothequePVH: string;
        const codeHypothequeHCR: string;
        const codeHypothequeHCCPF: string;
        const codeHypothequeHCNR: string;
        const codeHypothequeMEM: string;
        const codeHypothequeTirageHCCPF: string;
        const codeHypothequeLegaleSpecialePreteurDenier: string;
        const codeCessionDailly: string;
        const codeGageVehicule: string;
        const codeAutresGages: string;
        const codeHypothequeAerienne: string;
        const codeHypothequeFluviale: string;
        const codeHypothequeImmobiliere: string;
        const codeHypothequeMaritime: string;
        const codeAntichrese: string;
        const codeNantissementDroitPropr: string;
        const codeNantissementFdsComm: string;
        const codeGageMarchandise: string;
        const codeNantissementMarchePublic: string;
        const codeNantissementMarchePrive: string;
        const codeGageMaterielOutillage: string;
        const codeNantissementPartsSociales: string;
        const codeNantissementCompte: string;
        const codeNantissementCIF: string;
        const codePrivilegePr: string;
        const codeSubrogationImmobilier: string;
        const codeAutresSubrogation: string;
        const codeSubrogationVendeurImmeuble: string;
        const codeSubogationVendeurFdsComm: string;
        const codeSubogationVendeurMeubles: string;
        const codeCautionPersonneMorale: string;
        const codeCautionPersonnePhysique: string;
        const codePromesseHypotheque: string;
        const codeLettreIntentionConfort: string;
        const codePrivilegeCoPartage: string;
        const codeCautionPersonneMoraleConv: string;
        const codeCautionSteCautionConv: string;
        const codeDelegationAssururance: string;
        const codeDelegationloyer: string;
        const codeDelegationCessionCreance: string;
        const codeCessionSalaires: string;
        const codeDomiciliationSalaire: string;
        const codePremiereDemande: string;
        const codePrivilegeVendeurPPD: string;
        const codeNantissementCIFEnreg: string;
        const codeNantissementCompteEnreg: string;
        const codeCautionPersonnePhysiqueActe: string;
        const codeNantissementAssurance: string;
        const codeCautionHypothecaireTiers: string;
        const codePromesseEnreg: string;
        const codeNantissementAssuranceExterne: string;
        const codeCessionLoyers: string;
        const codePromesseLoyers: string;
        const codePromesseFdsComm: string;
        const codePromesseParts: string;
        const codePromesseComptes: string;
        const codePromesseob: string;
        const codeGarantieBons: string;
        const codePromesseAssurance: string;
        const codePromesseloyer: string;
        const codeMandatHypothecaire: string;
        const codeCautionDefautPaiement: string;
        const codeSuiGeneris: string;
        const codeCautionPerteFinale: string;
        const codeCautionHypothequeSol: string;
        const codeCautionGagiste: string;
        const codeCessionDroitCommun: string;
        const codeHypothequeJudiciaireProvisoire: string;
        const codeMURACEFUn: string;
        const codeMURACEFDeux: string;
        const codeCautionHypothecaireMorale: string;
        const codeHommeCle: string;
        const codeActifPassif: string;
        const codeInterditHypothecaire: string;
        const codeHypothequeJudiciaireDefinitive: string;
        const codeNantissementPartsSignifie: string;
        const codeHypothequeBailConstruction: string;
        const codeOrdreIrrevocableUn: string;
        const codeConventionBlocage: string;
        const codeNantissementCreance: string;
        const codeOrdreIrrevocableDeux: string;
        const codeNantissementFdsArtisanal: string;
        const codeAssurancePersonnelleExterne: string;
        const codeGarantDiversReprise: string;
        const codeSubrogHypLegaleSpecVendeur: string;
        const codeSubrogHypLegaleSpecCoPartageant: string;
        /**
         * Liste des codes garantie de type privilege
         */
        const listeCodePrivilege: string[];
        /**
         * Liste des codes garantie de type hypotheque
         */
        const listeCodeHypotheque: string[];
        const listeCodesNecessiteRedacteurActe: string[];
    }
    namespace CodeTypeSaisieNeo {
        const montantFixe: number;
        const montantCalcule: number;
        const plageMontantAvecValeurParDefaut: number;
        const tauxFixeSurAssiette: number;
        const tauxDansUnePlage: number;
        const montantFixeEtTauxAssiette: number;
    }
    const codeFormeActeSousSeingPrive: number;
    const codeFormeActeAuthentique: number;
    const listeFormeActe: Models.Common.ICodeLabel<number>[];
    const listeDemandeCessionAnteriorite: Models.Common.ICodeLabel<number>[];
    namespace blocageSaisieMontant {
        const ferme: number;
        const ouvert: number;
    }
    namespace CodeMotifCEGC {
        const codeRefus: string;
        const codeAttenteComplement: string;
        const codeFavorable: string;
        const codeFavorableAvecReserve: string;
        const codeErreur: string;
    }
    namespace CodeBoutonSaccef {
        const btnSaccefVisible: number;
        const btnSaccefActif: number;
    }
    namespace CodesBienGarantie {
        const antichrese: string;
        const bienDivers: string;
        const bonDeCaisseCapitalisation: string;
        const cessionDaillyAutre: string;
        const cessionDaillyLoyerImmeuble: string;
        const contratAssurance: string;
        const delegationLoyer: string;
        const gageCompteInstrumentFinancier: string;
        const gageVehicule: string;
        const hypothequeAerienne: string;
        const hypothequeImmobiliere: string;
        const nantissementFondDeCommerce: string;
        const nantissementPartSociale: string;
        const nantissementValeurMateriel: string;
        const nantissementValeurMobiliere: string;
        const versementAttendu: string;
        const proprietaire: string;
        const referenceCadastrale: string;
        const referenceLot: string;
    }
    namespace TypologieObjetPorteGarantie {
        const listeTypologieObjet: Models.Common.ICodeLabel<string>[];
    }
    const controleIHMBeneficiaire: string;
    /** Tableau de tous les sous-types de Garantie côté Id Néo, utile pour la qualification des anomalies de contrôle notamment */
    const codeIdNeoGarantie: ICRest.Modeles.ElementSchema.CodeIdNeo[];
}

declare namespace ICBusiness.Constantes {
    namespace Genre {
        const feminin: number;
        const masculin: number;
    }
}

/**
 * Constantes pour les habilitations
 */
declare namespace ICBusiness.Constantes.Habilitation {
    /**
     * Habilitation pour l'autorisation pour le forçage du contrôle FICP à l'édition ou à la signature
     */
    const habilitationAutorisationForcageControleFicp: string;
    /**
     * Habilitation pour saisie manuelle d'une expertise pvh
     */
    const habilitationAutorisationSaisieExpertise: string;
    /**
     * Habilitation pour l'autorisation du forçage du controle d'édition de l'offre de type "16"
     * SHFIBR
     */
    const habilitationAutorisationForcageControleSuiviEdition: string;
    /**
     * Habilitation pour lancer le processus de signature electronique
     */
    const habilitationLancerProcessusSignatureElectronique: string;
}

declare namespace ICBusiness.Constantes {
    /***
     * Namespace de constantes contenant les identifiants des listes pour appel ListerConstantes
     */
    namespace ListeConstantes {
        const modesComposition: string;
        /**
         * Type de transport (e.g. "Transport en commun")
         */
        const typeTransport: string;
        /**
         * Periodicité MyWay (e.g. "Mensuelle")
         */
        const periodicite: string;
        /**
         * Motifs (e.g. Assurances : attente de piece ou d'accord)
         */
        const motif: string;
        /**
         * Role (e.g. dirigeant)
         */
        const role: string;
        /**
         * Type de crédit (e.g. Habitat)
         */
        const typeCredit: string;
        /**
         * Secteur (e.g. Privé)
         */
        const secteur: string;
        /**
         * Type de propriétaire (e.g. Pleine propriété)
         */
        const typeProprietaire: string;
        /**
         * Reamenagement
         */
        const reamenagement: string;
        /**
         * Type assiette (e.g. Montant Emprunté)
         */
        const typeAssiette: string;
        /**
         * Destinataire du bien (e.g. Locatif principal)
         */
        const destinataireBien: string;
        /**
         * Type echelle (e.g. Spécifique établissement)
         */
        const typeEchelle: string;
        /**
         * Type echelle complementaire (e.g. Déblocage des fonds)
         */
        const typeEchelleComplementaire: string;
        /**
         * Pacte comissoire (Oui/Non)
         */
        const pacteComissoire: string;
        /**
         * Mise en oeuvre (e.g. Prix du marché de gros oeuvre non signé)
         */
        const miseEnOeuvre: string;
        /**
         * Lieu de résidence (e.g. Métropole)
         */
        const lieuResidence: string;
        /**
         * Technique de vente (e.g. Démarchage)
         */
        const techniqueVente: string;
        /**
         * Type de technique de vente (e.g. Vente à distance)
         */
        const typeTechniqueVente: string;
        /**
         * Type de vente (e.g. Mandat)
         */
        const typeVente: string;
        /**
         * Nature de garantie (e.g. Garantie hypothécaire)
         */
        const natureGarantie: string;
        /**
         * Nature travaux eco PTZ (e.g. Atteinte d'une performance globale)
         */
        const natureTravauxEcoPtz: string;
        /***
         * Type loi scrivener (e.g. Loi conso)
         */
        const typeLoiScrivener: string;
        /**
         * Origine de la demande  (e.g. Campagne commerciale)
         */
        const origineDemande: string;
        /**
         * Envoi mail/sms (e.g. Envoi par mail)
         */
        const envoiMailSms: string;
        /**
         * Type assiette calcul accessorie (e.g. Capital initial avec quotité)
         */
        const typeAssietteCalcAccessoire: string;
        /**
         * Type de phase (crédit) (e.g. Amortissement)
         */
        const typePhaseCredit: string;
        /**
         * Canal de distribution (e.g. Téléphone Sortant)
         */
        const canalDistribution: string;
        /**
         * Type de critère (e.g. Echéance maxi)
         */
        const typeCritere: string;
        /**
         * Type de contrat (e.g. Contrat de construction de maison individuelle ou d'architecte)
         */
        const typeContrat: string;
        /**
         * Type de contrat EMBC (e.g. Titulaire)
         */
        const typeContratEmbc: string;
        /**
         * Lien entre personnes (e.g. Concubin)
         */
        const lienEntrePersonnes: string;
        /**
         * Mode d'acquisition du bien (e.g. Don, Héritage, Donation)
         */
        const modeAcquisitionBien: string;
        /**
         * Type de marché (e.g. Porteur)
         */
        const typeMarche: string;
        /**
         * Mode d'évaluation (e.g. Etroit)
         */
        const modeEvaluation: string;
        /**
         * Mode financier (e.g. Groupe)
         */
        const modeFinancier: string;
        /**
         * Capacité juridique (e.g. Capable)
         */
        const capaciteJuridique: string;
        /**
         * Nationalite (e.g. Etranger U.E)
         */
        const nationalite: string;
        /**
         * Type de risque (e.g. Risque simple)
         */
        const typeRisque: string;
        /**
         * Traitement des types de logement
         */
        const typeDeLogement: string;
        /**
         * Traitement des valeurs de libre d'hypotheque
         */
        const libreHypotheque: string;
        /**
         * Traitement des valeurs de type d'occupation
         */
        const typeOccupation: string;
        /**
         * Traitement des valeurs de zone d'implantation
         */
        const zoneImplantation: string;
        /**
         * Traitement des valeurs de qualite d'emplacement
         */
        const qualiteEmplacement: string;
        /**
         * Traitement des valeurs pour occupation
         */
        const occupePar: string;
        /**
         * Traitement des valeurs pour le pacte commissoire
         */
        const pacteCommissoirePvh: string;
        /**
         * Garatie achèvement travaux
         */
        const garantieAchevementTravaux: string;
        /**
         * Code correspondant aux fonctionnements des comptes
         */
        const codeFonctionnementCompte: string;
        /**
         * Code correspondant aux avis service lutte anti blanchiment
         */
        const codeAvisSlab: string;
    }
}

/**
 * Constantes pour les information PTZ
 */
declare namespace ICBusiness.Constantes.InformationPtz {
    namespace QuestionAnnexe {
        const entitePersonnePhysique: string;
        const entiteTravauxFinances: string;
        namespace LibelleDonneeARestituer {
            const enfantsGardeAlternee: string;
        }
        const idChampInfobulleGardeAlternee: string;
        const idInfobulleGardeAlternee: string;
    }
    namespace FichierPtz {
        const listeCodes: string[];
    }
}

declare namespace ICBusiness.Constantes.InterroBdf {
    namespace Status {
        /**
         * Status BDF OK
         */
        const OK: string;
        /**
         * Statut BDF KO
         */
        const KO: string;
        /**
         * Serveur BDF indisponible
         */
        const INDISPONIBLE: string;
        /**
         * Serveur BDF disponible
         */
        const DISPONIBLE: string;
    }
    namespace CodesEvenements {
        const FICP_OK: string;
        const FICP_KO: string;
        const FICP_TECHNIQUE: string;
        const FICP_HOMONYMIE: string;
        const FCC_OK: string;
        const FCC_KO: string;
        const FCC_TECHNIQUE: string;
    }
    namespace TextesEvenements {
        const FICP_OK: string;
        const FICP_KO: string;
        const FICP_TECHNIQUE: string;
        const FICP_HOMONYMIE: string;
        const FCC_OK: string;
        const FCC_KO: string;
        const FCC_TECHNIQUE: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Modalites {
        /**
         * Modalités - Justificatif : types de rattachement
         */
        const typeRattachementFactureList: Models.Common.ICodeLabel<number>[];
        const typeDeclenchementVersementList: Models.Common.ICodeLabel<number>[];
        /**
         * Code du éco prêt à taux zéro
         */
        const codeEcoPatz: string;
        /**
         * Code du mode de règlement de type "Débit d'office"
         */
        const codeModeDeReglementDebitOffice: string;
        /**
         * Code du mode de règlement de type "Débit d'office Impaye"
         */
        const codeModeDeReglementDebitOfficeImpaye: string;
        /**
         * Code du prêt à taux zéro 2005
         */
        const codePatz2005: string;
        /**
         * Code du prêt à taux zéro (Minitère du Logement)
         */
        const codePatzMinistereLogement: string;
        /**
         * Code prêt à taux zéro Outre-Mer
         * (existe également mais non utilisé YO => Prêt à taux zéro 2005 Outre-Mer)
         */
        const codePatzOutreMer: string;
        /**
         * Codes des types de prêt à taux zéro
         * Contient les codes suivants :
         *  - PY : Prêt à taux zéro 2005
         *  - PX : Éco prêt à taux zéro
         */
        const codesTypesPretATauxZero: string[];
        /**
         * Type de compte particulier - 04
         */
        const partAccountType: string;
        /**
         * Participation au recouvrement du payeur principal (fixé à 100%)
         */
        const participationRecouvrementPayeurPrincipal: number;
        /**
         * Longueur maximale de la saisie dans les modalités pour le recouvrement
         */
        const recouvrementInputLength: number;
        /**
         * Longueur du code trésorerie saisi dans les modalités pour les collectivités
         *  => Cette longueur est fixe et imposée
         */
        const tresorerieCodeLength: number;
        /**
         * Longueur maximale de la saisie dans les modalités pour le versement
         */
        const versementInputLength: number;
        /**
         * Codes des natures d'avantage fiscal si on est dans un cadre fiscal LMT
         * Retourne ["LN", "LP"]
         */
        const codesNatureAvantageFiscalCadreFiscalLMP: string[];
        /**
         * Constantes des modes de flux financier
         */
        module ModeDeFluxFinancier {
            /**
             * Code du flux financier Releve Identite Bancaire (RIB)
             */
            const codeReleveIdentiteBancaire: string;
            /**
             * Code du flux financier Saisie Libre ou Chèque (NOM)
             */
            const codeSaisieLibre: string;
            /**
             * Code du flux financier SEPA ou BIC/IBAN (IBA)
             */
            const codeSepaBicIban: string;
            /**
             * Code du flux financier Tresorerie (TRE)
             */
            const codeTresorerie: string;
        }
        /**
         * Constantes des types de domiciliation
         */
        module TypeDomiciliation {
            /**
             * Code du flux financier Prélèvement Compte interne (PIN)
             */
            const prelevementCompteInterne: string;
        }
    }
}

declare namespace ICBusiness.Constantes {
    namespace NatureProjetPro {
        const tresorerieLocale: string;
        const equipementEcoLocale: string;
        const subordonnees: string;
    }
}

/** Contantes utilisées pour le totem et la navigation */
declare namespace ICBusiness.Constantes.Navigation {
    namespace PageId {
        const synthese: string;
        const client: string;
        const projet: string;
        const financement: string;
        const pretReglemente: string;
        const gestionAdministrative: string;
        const garanties: string;
        const assurance: string;
        const decisionPreteur: string;
        const editionDuContrat: string;
        const remiseDuContrat: string;
        const signatureDuContrat: string;
        const editionOffre: string;
        const remiseOffre: string;
        const editionOffrePapier: string;
        const editionOffreElectronique: string;
        const editionOffreIndus: string;
        const miseAJourAdministrative: string;
        const signataires: string;
        const pieceEtControle: string;
        const historique: string;
        const blocNotes: string;
        const transfererNeo: string;
        const emissionDocuments: string;
        const erreur: string;
        const rattacherPrescripteur: string;
        const recuperationCnp: string;
        const suiviEditions: string;
        const editionDocuments: string;
        const annexesPtz: string;
        const constituerLiasse: string;
        const constituerLiasseSag: string;
        const choixEditionDemandeCredit: string;
        const multiRisqueHabitation: string;
        const retourSag: string;
        const conformiteDossier: string;
    }
    namespace SectionId {
        namespace client {
            const intervenantsDuDossier: string;
            const revenusCharges: string;
            const surfaceFinanciere: string;
            const droitEpargneLogement: string;
        }
        namespace projet {
            const descriptionDuProjet: string;
            const montant: string;
            const objetGarantie: string;
            const garants: string;
            const expertise: string;
            const reamenagement: string;
            const objetFinance: string;
        }
        namespace financement {
            const critereRemboursement: string;
            const financementDuProjet: string;
            const detailCredit: string;
            const garantie: string;
            const assurance: string;
        }
        namespace gestionAdministrative {
            const assurances: string;
            const garanties: string;
            const modalites: string;
            const redacteurActe: string;
            const avis: string;
            const suivisPlanifies: string;
        }
        namespace decisionPreteur {
            const avis: string;
            const indicateurOctroi: string;
            const decision: string;
        }
        namespace edition {
            const caracteristiques: string;
            const clausesPersonnalisees: string;
            const listeMandats: string;
        }
        namespace majAdministratives {
            const assurances: string;
            const garanties: string;
            const signatureElectronique: string;
            const redacteurActe: string;
            const ecoPTZ: string;
        }
        namespace pieceEtControles {
            const piecesClient: string;
            const piecesAgence: string;
            const controles: string;
        }
        namespace emissionDocuments {
            const documentsClients: string;
            const ficheSuiveuse: string;
            const refusAssuranceExterne: string;
        }
        namespace conformiteDossier {
            const avis: string;
        }
        namespace multirisqueHabitation {
            const devis: string;
        }
        namespace pretReglemente {
            const informationPtz: string;
        }
        namespace blocNotes {
            const notesAssociees: string;
        }
    }
}

/** Contantes utilisées pour les notifications myway */
declare namespace ICBusiness.Constantes.Notification {
    namespace Type {
        const validation: string;
        const information: string;
    }
}

declare namespace ICBusiness.Constantes.Optimisation {
    const modaliteOptimcheanceMaxi: string;
    const modaliteOptimEndettementMaxi: string;
    const modaliteOptimchePaliersContraints: string;
    /** Liste des modalités pour le calcul d'optimisation des crédits */
    const listeModalitesOptim: () => Models.Common.ICodeLabel<string>[];
}

/**
 * Constantes pour le paramétrage applicatif
 */
declare namespace ICBusiness.Constantes.ParametrageApplicatif {
    namespace Champ {
        const rubriqueFiltre: string;
    }
    namespace Cegc {
        /**
         * Mode de transmission CEGC / CNFAEE
         */
        const modeEnvoiCegc: string;
        const delaiAttenteInterrogationCEGC: string;
        const nombreInterrogationCEGC: string;
        const transmissionCEGCActif: string;
        /**
         * Paramètre d'envoi saccef autorise
         */
        const rubriqueFiltreEnvoiSaccef: string;
    }
    /**
     * Paramétrage pour la délégation
     */
    namespace Delegation {
        const codeProcessusActif: string;
        const codeModuleDelegation: string;
        const valeurModuleAdelys: string;
        const valeurModuleNeo: string;
    }
    /**
     * Paramétrage pour l'émission des documents
     */
    namespace EmissionDocuments {
        /**
         * Spécifie si la fiche suiveuse est activée
         */
        const codeFicheSuiveuse: string;
    }
    /**
     * Paramétrage pour l'interrogation Banque de France notarisé
     */
    namespace InterroBdf {
        /**
         * Spécifie si la notarisation pour l'interrogation Banque de France est activée
         */
        const codeNotarisationFICP: string;
        /**
         * mode de consultation pour l'interrogation Banque de France
         */
        const modeFICP: string;
        const modeFCC: string;
        /**
         * Spécifie si la présence sur liste noire est activée
         */
        const codeListeNoire: string;
    }
    /**
     * Global
     */
    namespace Global {
        /**
         * Valeur d'un paramètre applicatif quand celui-ci est activé (Nouvelle codification)
         *  => 1
         */
        const valeurParametreApplicatifActive1: string;
        /**
         * Valeur d'un paramètre applicatif quand celui-ci est activé
         *  => O
         */
        const valeurParametreApplicatifActiveO: string;
        /**
         * Valeur d'un paramètre applicatif quand celui-ci est activé
         *  => R
         */
        const valeurParametreApplicatifActiveR: string;
    }
    /**
     * Paramètre établissement
     */
    namespace ParametreEtablissement {
        /**
         * Libellé Param - date de traitement
         */
        const libelleDateTraitement: string;
        /**
         * Valeur d'un paramètre établissement quand celui-ci est activé
         */
        const valeurActive: string;
    }
    namespace ParametreRubrique {
        /**
         * Valeur d'un paramètre rubrique quand celui-ci est activé
         */
        const valeurActiveAdresse: number;
    }
    namespace Pieco {
        /**
         * Nom de la rubrique pour l'activation de la fonctionnalité Pieco
         */
        const activationPieco: string;
    }
    namespace TransfertNeo {
        /**
         * Nom de la rubrique pour l'activation du transfert dans Néo (Dossier Conso)
         */
        const transfertNeoConso: string;
        /**
         * Nom de la rubrique pour l'activation du transfert dans Néo (Dossier Pro/BDR)
         */
        const transfertNeoProBdr: string;
        /** Nom de la rubrique pour l'activation du transfert dans Néo (Dossier Immo) */
        const transfertNeoImmo: string;
    }
    namespace AppelBDF {
        /**
         * Code d'autorisaiton d'historisation BDF
         */
        const historisationBDF: string;
    }
    namespace Transfert {
        /**
         * Code transfert pour conformité
         */
        const conformite: string;
    }
    namespace SuiviEditions {
        /**
         * Code pour l'activation du suivi des éditions immo
         */
        const activationSuiviEditionsImmo: string;
        /**
         * Code pour l'activation du suivi des éditions conso/pro
         */
        const activationSuiviEditionsConsoPro: string;
        /**
         * Code pour l'activation de la signature électronique des annexes PTZ
         */
        const activationSignElecAnnxPtz: string;
    }
    namespace MRH {
        /**
         * Code pour l'activation des MRH4
         */
        const mrh4: string;
    }
    namespace DetailEcoPtz {
        /**
         * Code pour récupérer les paramètres applicatifs propre aux eco prêt complémentaire
         */
        const codeEcoPretComplementaire: string;
        const codeEcoPretComplementairePerformanceGlobale: string;
    }
    namespace EditionOffre {
        /**
         * Indicateur transfert BO automatique à l'édition de l'offre
         */
        const transfertAutoBo: string;
    }
    namespace Smac {
        /**
         * Indicateur smac active
         */
        const smacActive: string;
    }
    namespace CreditComplementaire {
        /**
         * Code activation crédit complémentaire atout clic
         */
        const atoutClic: string;
    }
    namespace ParamPieco {
        const codeAffichageActionPieco: string;
        /**
         * "O" masque activé, que l'on soit en Instruction agence ou Back office
         * "N" masque non activé, que l'on soit en Instruction agence ou Back office
         * "A" masque activé en instruction agence (inactif en BO)
         * "B" masque activé en BO (inactif en agence)
         */
        namespace MasqueBoutonPieco {
            const masqueActive: string;
            const masqueNonActive: string;
            const masqueActiveEnIA: string;
            const masqueActiveEnBO: string;
        }
    }
    namespace ParamExpertise {
        const codeHabilitationSaisieManuelle: string;
    }
    namespace Assurance {
        /**
         * Assurance ADE
         */
        const assuranceADE: string;
    }
    namespace SystemeDecision {
        /**
         * Code rubrique système de décision
         */
        const codeSystemeDelegationDecision: string;
        /**
         * Sytème bloquant (B)
         */
        const valeurSystemeBloquant: string;
        /**
         * Sytème non bloquant (N)
         */
        const valeurSystemeNonBloquant: string;
        /**
         * Sytème débrayable (D)
         */
        const valeurSystemeDebrayable: string;
    }
    namespace SyntheseFinancement {
        /**
         * Indicateur si le marqueur d'accord de principe doit être affiché ou non
         */
        const marqueurAccordPrincipeActif: string;
    }
    namespace Ade {
        /**
         * Indicateur si la case à cocher de tarification dérogatoire est active ou non
         */
        const tarificationDerogatoireActive: string;
    }
    namespace RemiseOffre {
        const bt95EnvoiValidite: string;
    }
}

declare namespace ICBusiness.Constantes.ParametreFonctionnel {
    namespace Idws {
        /** CLCENV */
        const calculEnveloppe: string;
        /** Indiquer s'il faut afficher le champ ADE 8ans pour les assurances externe */
        const ade8Ans: string;
        /** Indiquer s'il faut afficher le champ Durée totale pour les assurances externe */
        const adeDureeTotale: string;
        /** Savoir si on affiche le bouton "Créer Devis ADE Service" dans l'écran Plan Financement (Code CRADEP). */
        const creerDevisADEPlanFi: string;
        /** Savoir si on affiche le bouton "Accéder Dossier ADE Service" dans l'écran Plan Financement (Code COADEP). */
        const accederDossierADEPlanFi: string;
        /** Savoir si on affiche le bouton "Créer Devis ADE Service" dans l'écran Gestion Administrative (Code CRADEG). */
        const creerDevisADEGesAdm: string;
        /** Savoir si on affiche le bouton "Accéder Dossier ADE Service" dans l'écran Gestion Administrative (Code COADEG). */
        const accederDossierADEGesAdm: string;
        /** Savoir si on affiche la saisie QS pour la réponses assureur d'une assurance */
        const reponseAssureurSaisieQS: string;
        const modeInstructionDefi: string;
        /** Savoir si on affiche le bloc Avis service lutte anti blanchiment */
        const avisSLAB: string;
        /** Savoir si on affiche le question SCI */
        const questionnaireSCI: string;
    }
}

declare namespace ICBusiness.Constantes.Pieco {
    /**
     * Donne des identifiants pour gérer l'ancrage du totem appelant
     */
    namespace Ancrage {
        const piecesClient: string;
        const piecesAgence: string;
        const controles: string;
    }
    namespace Filtres {
        /**
         * Valeurs possibles pour la finalité des pièces
         */
        const listeFiltresProcessus: Array<Models.Common.ICodeLabel<string>>;
        /**
         * Valeurs possibles pour le filtre controle traiter avant
         */
        const listeFiltresProcessusControle: Array<Models.Common.ICodeLabel<string>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCActive: Array<Models.Common.ICodeLabel<number>>;
        /**
         * Valeurs possibles pour la conformité des pièces
         */
        const listeStatutDNCDesactive: Array<Models.Common.ICodeLabel<number>>;
        /**
         * Valeurs possibles pour le filtre controle etat
         */
        const listeStatutsControle: Array<Models.Common.ICodeLabel<number>>;
    }
    namespace TitreActionImpression {
        const titrePiecesClient: string;
        const titrePiecesAgence: string;
        const titreControle: string;
        const titreTout: string;
    }
    namespace FormConst {
        const formPieceControlesName: string;
    }
    namespace TitreSyntheseAnomaliesPieco {
        const titre: string;
    }
    namespace Acquisition {
        const acquis: Models.Common.ICodeLabel<string>;
        const nonCollecte: Models.Common.ICodeLabel<string>;
        const enCours: Models.Common.ICodeLabel<string>;
        const listeAcquisition: Models.Common.ICodeLabel<string>[];
    }
    /**
     * Codes des formats éditiques
     */
    namespace TypeDocument {
        const piecoClient: string;
        const piecoAgence: string;
        const piecoControle: string;
    }
}

/**
 * Constantes pour le préférences utilisateurs
 */
declare namespace ICBusiness.Constantes.Preferences {
    /** constantes préférences du mode de calcul */
    namespace ModeCalcul {
        type ModeCalcul = "optimise" | "manuel";
        /** clé de stockage */
        const NAME: string;
        const optimise: Models.Common.CodeLabel<"optimise" | "manuel">;
        const manuel: Models.Common.CodeLabel<"optimise" | "manuel">;
        /** Liste des choix de calcul */
        const list: () => Models.Common.ICodeLabel<"optimise" | "manuel">[];
    }
    /** constantes préférences du mode de restitution */
    namespace ModeRestitution {
        type ModeRestitution = "graphique" | "tableau";
        /** clé de stockage */
        const NAME: string;
        const graphique: Models.Common.CodeLabel<"graphique" | "tableau">;
        const tableau: Models.Common.CodeLabel<"graphique" | "tableau">;
        /** Liste des choix de restitution */
        const list: () => Models.Common.ICodeLabel<"graphique" | "tableau">[];
    }
}

declare namespace ICBusiness.Constantes.ProcessusInstruction {
    const instructionAgence: string;
    const instructionBO: string;
    const priseEnChargeBO: string;
}

declare namespace ICBusiness.Constantes.Produit {
    namespace Famille {
        const codeFamillePEL: string;
        const codeFamilleCEL: string;
    }
}

declare namespace ICBusiness.Constantes.Projet {
    const codePaysLocsDefaut: string;
    const natureProjetImmo: number;
    namespace UsageDuBien {
        const locatifPrincipal: number;
        const locatifSecondaire: number;
    }
    namespace CadreFiscal {
        const nullValeur: string;
        const lmpLmnp: string;
        const scellier: string;
        const girardin: string;
        const malraux: string;
        const lmnpBouvard: string;
    }
    namespace PrimoAccedant {
        const non: number;
        const sansObjet: number;
        const titulaireCarteInvalidite: number;
        const allocationPersonneHandicapee: number;
        const victimeCatastrophe: number;
        const oui: number;
    }
    namespace ObjetFinance {
        const maxSurfaceHabitable: number;
        const maxSurfaceTerrain: number;
        const minDateEntreePatrEtDateAcq: string;
        const maxDateEntreePatrEtDateAcq: string;
        namespace OrigineInstructionSGFGAS {
            const instruction: string;
        }
        namespace TypeAccesSGFGAS {
            const instructionType: string;
            const consultationType: string;
        }
        const debranchementSGFGAS: string;
    }
    namespace DetailEcoPtz {
        const clePremierChampTravauxEcoPtz: string;
        const cleDernierChampTravauxEcoPtz: string;
        const cleBouquet: string;
        const cleEcoPerfene: string;
        const listCommonFieldEcoPerfene: string[];
        const relationCodeCleNatureTravaux: Models.Common.ICodeLabel<number>[];
        const minCodeEcoBouquet: number;
        const maxCodeEcoBouquet: number;
    }
}

declare namespace ICBusiness.Constantes.Pvh {
    const listeTypeDeBien: Models.Common.ICodeLabel<number>[];
    const labelNatureLotDefaut: string;
    const labelNatureCadastreDefaut: string;
    const listeNature: Models.Common.ICodeLabel<number>[];
    const codeNatureGarantiePVH: string;
    const listeNoteBien: Models.Common.ICodeLabel<number>[];
    const codeReferenceLot: number;
    const codeModeleEstmVenl: string;
}

declare namespace ICBusiness.Constantes.Revenu {
    namespace TypeRessource {
        const pensionAlimentaireVersee: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace SignatureOffre {
        module Papier {
            const listeReponsesSignaturePapier: () => Models.Common.ICodeLabel<number>[];
        }
    }
}

declare namespace ICBusiness.Constantes.SuiviEditions {
    namespace codeEtatSignature {
        const nonPrepare: string;
        const editePapier: string;
        const pretAEnvoiElectronique: string;
        const transmisPourSignature: string;
        const signeDefinitivement: string;
        const abandonneParLeClient: string;
        const signePartiellement: string;
        const annuleEtablissement: string;
        const delaiDepasse: string;
    }
    namespace codeHistorisationDocument {
        const nonDefini: number;
        const signature: number;
    }
    namespace codeEntiteRattachementDocument {
        const nonDefini: number;
        const emprunteur: number;
        const personnePhysique: number;
        const personneMorale: number;
        const caution: number;
        const payeur: number;
    }
    namespace libelleCanalEdition {
        const sed: string;
        const sag: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Tiers {
        namespace CodePersonnaliteJuridique {
            /** Personne Physique */
            const physique: string;
            /** Personne Morale */
            const morale: string;
        }
    }
}

declare namespace ICBusiness.Constantes.Transfert {
    namespace TypeTransfert {
        /**
         * Transfert pour conformité 'C'
         */
        const conformite: number;
        /**
         * Transfert pour décision 'D'
         */
        const decision: number;
        /**
         * Transfert au backoffice 'B'
         */
        const backOffice: number;
    }
    namespace Sens {
        const envoi: number;
        const retour: number;
        const sansObjet: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace Tuiles {
        namespace Tailles {
            /** Grande fenêtre */
            const large: string;
            /** Petite fenêtre */
            const petite: string;
        }
        namespace TypeMarquage {
            const texte: string;
            const picto: string;
            const none: string;
        }
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeAccessoire {
        const fraisDelegationAssurance: string;
        const fraisDossier: string;
        const fraisGarantieFeiEti: string;
        const fraisGarantieFeiPme: string;
    }
    namespace SousTypeAccessoire {
        const fraisDelegationAssurance: string;
        const fraisDossier: string;
        const fraisGarantieFeiEti: string;
        const fraisGarantieFeiPme: string;
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeClauses {
        /**
         * Emprunteur (valeur 0)
         */
        const emprunteur: number;
        /**
         * Rédacteur d'acte (valeur 1)
         */
        const redacteurActe: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeSignataire {
        /**
         * Signataire conjoint 'C'
         */
        const conjoint: number;
        /**
         * Signataire emprunteur 'E'
         */
        const emprunteur: number;
    }
}

declare namespace ICBusiness.Constantes {
    namespace TypeTypologie {
        const typeAcquisition: string;
        const zoneImplantation: string;
        const centreGestion: string;
        const typeTechniqueJuridique: string;
        const modeEstimation: string;
        const typeDeVente: string;
    }
}

declare namespace ICBusiness.Constantes.ProduitsEligibles {
    const ptz: Models.Common.ICodeLabel<string>;
    const pc: Models.Common.ICodeLabel<string>;
    const pas: Models.Common.ICodeLabel<string>;
    const ecoptz: Models.Common.ICodeLabel<string>;
    const pel: Models.Common.ICodeLabel<string>;
    const cel: Models.Common.ICodeLabel<string>;
}

declare namespace ICBusiness.Rules {
    class CustomRule implements IValidationRule {
        private delegate;
        private ruleLabel;
        /**
         * Create custom rule
         * @param delegate delegated validation function
         * @param ruleLabel label to show
         */
        constructor(delegate: () => boolean, ruleLabel: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MaxDateRule implements IValidationRule {
        private max;
        private dateToValidate;
        private ruleLabel;
        private maxFormat;
        private dateToValidateFormat;
        static maxDateRuleLabel: string;
        static maxDateParamInvalide: string;
        /**
         *
         * @param max au Format "YYYY-DD-MM"
         * @param dateToValidate soit un string soit une date soit un delegate qui renvoit un string ou une date
         * @param ruleLabel
         * @param maxFormat
         * @param dateToValidateFormat
         */
        constructor(max: string | Date | (() => string | Date), dateToValidate: () => string | Date, ruleLabel?: string, maxFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
        private convertToMoment(value, stringValueFormat);
    }
}

declare namespace ICBusiness.Rules {
    class MaxLengthRule implements IValidationRule {
        private value;
        private maxLength;
        static maxLengthRuleLabel: string;
        constructor(value: () => string, maxLength: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MaxNumberRule implements IValidationRule {
        private max;
        private numberToValidate;
        private ruleLabel;
        static maxnumberRuleLabel: string;
        constructor(max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinDateRule implements IValidationRule {
        private min;
        private dateToValidate;
        private ruleLabel;
        private minFormat;
        private dateToValidateFormat;
        static minnumberRuleLabel: string;
        constructor(min: string | Date | (() => string | Date), dateToValidate: () => string | Date, ruleLabel?: string, minFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinMaxDateRule implements IValidationRule {
        private min;
        private max;
        private dateToValidate;
        private ruleLabel;
        private minFormat;
        private maxFormat;
        private dateToValidateFormat;
        static defaultRuleLabel: string;
        constructor(min: string | Date | (() => string | Date), max: string | Date | (() => string | Date), dateToValidate: () => string | Date, ruleLabel?: string, minFormat?: string, maxFormat?: string, dateToValidateFormat?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinMaxNumberRule implements IValidationRule {
        private min;
        private max;
        private numberToValidate;
        private ruleLabel;
        constructor(min: number, max: number, numberToValidate: () => number, ruleLabel?: string);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class MinNumberRule implements IValidationRule {
        private min;
        private numberToValidate;
        static minNumberRuleLabel: string;
        constructor(min: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class ModuloNumberFloatRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
    class ModuloNumberRule implements IValidationRule {
        private modulo;
        private numberToValidate;
        static moduloNumberRuleLabel: string;
        constructor(modulo: number, numberToValidate: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class PreciseLengthRule implements IValidationRule {
        private value;
        private length;
        static preciseLengthRuleLabel: string;
        constructor(value: () => string, length: () => number);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    class RequiredRule<T> implements IValidationRule {
        private value;
        static requiredRuleLabel: string;
        constructor(value: () => T);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Rules {
    interface IValidationRuleResult {
        isValid: boolean;
        messages: string[];
    }
    interface IValidationRule {
        validate(): IValidationRuleResult;
    }
    interface IFormRules {
        allRules?: IValidationRule[];
    }
}

declare namespace ICBusiness.Rules {
    class ValidationRulesEvaluator implements IValidationRule {
        private rules;
        constructor(rules: IValidationRule[]);
        validate(): IValidationRuleResult;
    }
}

declare namespace ICBusiness.Tools {
    class CodeLabel {
        /**
         * transform any object to ICodeLabel
         * @param obj the obj to map code and label
         * @param codeMapper delegate mapper
         * @param labelMapper delegate mapper
         */
        static toCodeLabel<T extends string | number, U>(obj: U, codeMapper: (obj: U) => T, labelMapper: (obj: U) => string): Models.Common.ICodeLabel<T>;
        /**
         * Return the first element matching with the code. If not found, returns empty object.
         * @param list
         * @param code
         */
        static firstOrEmpty<T extends string | number | boolean>(list: Models.Common.ICodeLabel<T>[], code: T): Models.Common.ICodeLabel<T>;
        /**
         * Return the first element matching with the code. If not found, returns empty object.
         * @param list
         * @param code
         */
        static findOrNull<T extends string | number | boolean>(list: Models.Common.ICodeLabel<T>[], code: T): Models.Common.ICodeLabel<T>;
        static find<T extends string | number | boolean>(list: Models.Common.ICodeLabel<T>[], codeLabel: Models.Common.ICodeLabel<T>): Models.Common.ICodeLabel<T>;
    }
}

declare namespace ICBusiness.Tools {
    class DureeUtils {
        static toPeriodicite(p: string): Enum.Periodicite;
        static toJour(p: Enum.Periodicite): number;
        static getJours(duree: Models.Common.IDuree): number;
        static isModifiableEn(duree: Models.Common.IDuree, nouvellePeriodicite: Enum.Periodicite): boolean;
        static changePeriodicite(duree: Models.Common.IDuree, nouvellePeriodicite: Enum.Periodicite): Models.Common.IDuree;
    }
}

declare namespace ICBusiness.Tools {
    class Garantie {
        static getMontantEmprunteTotal(credits: Models.Financement.ICreditInterne[]): number;
        static getTauxCouvertureGlobale(creditsGarantie: Models.Financement.ICreditInterne[], montantCouvertureGlobale: number): number;
        static getMontantCouvertureGlobale(couvertures: Models.Garanties.ICouverture[]): number;
        static calculerMontantCouvertureGlobaleByQuotite(garantie: Models.Garanties.IGarantie): number;
        static getCoutTotalGarantie(cotisationsLecture: ICRest.Modeles.LireElement.ICotisationLecture[]): number;
    }
}

declare namespace ICBusiness.Tools {
    class PageUtils {
        /**
         * Fonction permettant de savoir s'il s'agit d'une page de la décision
         * @param codePage
         */
        static estPageDecision(codePage: string): boolean;
        /**
         * Fonction permettant de savoir s'il s'agit d'une page de la décision
         * @param codePage
         */
        static estPageEdition(codePage: string): boolean;
    }
}

declare namespace ICBusiness.Tools {
    class TypeApplicationInstruction {
        /**
         * Méthode pour savoir s'il s'agit de l'application instruction conso
         * @param codeApplication
         */
        static estApplicationConso(codeApplication: string): boolean;
        /**
         * Méthode pour savoir s'il s'agit de l'application instruction pro
         * @param codeApplication
         */
        static estApplicationPro(codeApplication: string): boolean;
        /**
         * Méthode pour savoir s'il s'agit de l'application instruction immo
         * @param codeApplication
         */
        static estApplicationImmo(codeApplication: string): boolean;
        /**
         * Méthode pour savoir s'il s'agit de l'application instruction Néo
         * @param codeApplication
         */
        static estApplicationNeo(codeApplication: string): boolean;
        /**
         * Méthode pour savoir s'il s'agit de l'application instruction pvh
         * @param codeApplication
         */
        static estApplicationPvh(codeApplication: string): boolean;
    }
}

declare namespace ICBusiness.Models.InformationsPtz {
    interface IQuestionnaireAnnexe {
        questionsAnnexes: IQuestionAnnexe[];
        formulairesStatutOccupation: IFormulaireStatutOccupation[];
        formulaireLienAvecEmprunteur: IFormulaireLienAvecEmprunteur;
        formulairesRattachementFoyerFiscal: IFormulaireRattachementFoyerFiscal[];
        nombrePersonneComposantLeMenage: number;
    }
    interface IQuestionAnnexe {
        libelle: string;
        isPersonnePhysique: boolean;
        isTravauxFinances: boolean;
        proprieteObjet: string;
        listeReponse: IReponseAnnexe[];
        hasAnomalie: boolean;
        hasInfobulle: boolean;
        infobulleIdChamp: string;
        infobulleId: string;
    }
    interface IReponseAnnexe {
        libelle: string;
        identifiant: string;
        options: Common.ICodeLabel<boolean | number>[];
        value: boolean | number;
    }
    interface IFormulaireStatutOccupation {
        idws: string;
        identifiantPersonne: string;
        libellePersonne: string;
        listeAnomalie: string[];
        listeInformationOccupation: IInformationOccupation[];
    }
    interface IInformationOccupation {
        idws: string;
        dateDebutOccupation: string;
        dateFinOccupation: string;
        statutOccupation: Common.ICodeLabel<number>;
        rattachementAutre: string;
        adresse: string;
    }
    interface IFormulaireLienAvecEmprunteur {
        idws: string;
        identifiantPersonne: string;
        montantRFRN2: number;
        maxOccupant: number;
        listeOccupant: IOccupant[];
        listeAnomalie: string[];
    }
    interface IOccupant {
        idws: string;
        libelleOccupant: string;
        lien: Common.ICodeLabel<string>;
        revenuFiscal: number;
    }
    interface IFormulaireRattachementFoyerFiscal {
        identifiantPersonne: string;
        libellePersonne: string;
        listeAnomalie: string[];
        rattachementIdws: string;
        rattachementIdentification: string;
        rattachementAnnee: string;
        rattachementMontant: number;
    }
    interface IStatutsOccupationToSave {
        entreesOccupation: ICRest.Modeles.DefinirStatutOccup.IEntreeStatutOccupation[];
        infosOccupationMaj: ICRest.Modeles.MajElement.IInformationOccupationMaj[];
    }
    interface IOccupantToSave {
        entreesOccupant: ICRest.Modeles.DefinirOccupant.IOccupantMaj[];
        occupantsMaj: ICRest.Modeles.MajElement.IOccupantMaj[];
    }
    interface IRattachementFoyerFiscalTierToSave {
        entreesRattachement: ICRest.Modeles.DefinirRattFoyerFiscalTiers.IEntreeRattachementFoyerFiscal[];
        rattachementsTiersMaj: ICRest.Modeles.MajElement.IRattachementFoyerFiscalTiersMaj[];
    }
    interface IInfoComplementairePTZ {
        libelleRegle1: string;
        montantPlafondReglementaire: number;
        libelleRegle2: string;
        montantPlafondDeduit: number;
        libelleRegleReductionViaDuree: string;
        libelleRegleReductionViaTaux: string;
        libelleRegle3: string;
        libellePretPincipal: string;
        dureePretPrincipal: number;
        coefficientFamilial: number;
        montantRessourcePondere: number;
        coutOperationPondere: number;
        libelleCoutOperation: string;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle du retour d'ajout d'assurance.
     */
    interface IAssuranceAjout {
        detailsAssurance: IAssuranceDetails;
        listeAnomalies: string[];
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'une assurance détaillée.
     */
    interface IAssuranceDetails {
        id: string;
        idConvention: string;
        idAssure: string;
        codeDevise: string;
        produits: ICouvertureCredit[];
        typeAssurance: ITypeAssurance;
        siren: string;
        libelleSiren: string;
        labelLongConvention: string;
        labelLongNom: string;
        dateNaissanceAssure: string;
        montant: number;
        taux: number;
        labelCompagnie: string;
        detailsConvention: Models.Assurances.IConventionDetails;
        codeDecision: number;
        codeEtatAccessoire: number;
        estAssuranceCnp: boolean;
        labelEtatDossier: string;
        labelAgeAssure: string;
        labelRole: string;
        labelRisque: string;
        beneficiaireAssuranceAvenantVersement: string;
        codeTypeRisque: number;
        codeBeneficiaire: string;
        libelleBeneficiaire: string;
        isCouvertureExts: string;
        dateEnvoi: string;
        dateCloture: string;
        codeResr: number;
        dateAccpAccessoire: string;
        numeroExterne: string;
        accessoireLectureDecision: boolean;
        cnpData: IDecisionCnp;
        codeDele: number;
        idPropositionAssuranceAde: string;
        estQSSaisi?: boolean;
        estQSParametreFonctionnel?: ParametreFonctionnel.IParametreFonctionnel;
    }
    interface ITypeAssurance {
        codeAffichageObligatoire: string;
        codeAffichageFacultatif: string;
        estObligatoire: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IListAssurances {
        ajoutAutorise: boolean;
        assurances: IAssurance[];
    }
    /**
     * Modèle d'une assurance simple.
     */
    interface IAssurance {
        id: string;
        idAssure: string;
        codeDevise: string;
        civiliteAssure: string;
        nomAssure: string;
        prenomAssure: string;
        dateNaissance: string;
        codeRole: string;
        codeEtatAccessoire: number;
        estCnp: boolean;
        convention: IConvention;
        couverturesCredit: ICouvertureCredit[];
        labelTypeAssurance: string;
        estApe: boolean;
        codeCollectiviteAde: string;
        estTarifDerogatoire: boolean;
        estAssuranceAdeParcoursManuel: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'un assuré détaillé.
     */
    interface IAssureDetails {
        labelLongAssure: string;
        dateNaissance: string;
        ageAssure: string;
        labelRole: string;
        etatDossier: string;
        isCnp: boolean;
        assurances: IAssuranceDetails[];
        accessoireLectureDecision: boolean;
        dataCnp: IDecisionCnp;
        estNouvelleAde: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'un assuré simple.
     */
    interface IAssure {
        civiliteAssure: string;
        nomAssure: string;
        prenomAssure: string;
        dateNaissance: string;
        ageAssure: string;
        codeRole: string;
        labelRole: string;
        labelAssurance: string;
        groupeCompagnie: string;
        nombreAssurance: number;
        etatDossier: string;
        isCnp: boolean;
        idPersonne: string;
        idsAssurancesGroupees: string[];
        hasDocuments: boolean;
        hasAssuranceConfigurateurCnp: boolean;
        isAssuranceApe: boolean;
        indemniteJournaliereObligatoire: boolean;
        indemniteJournaliere: IMontantReference;
        estAssuranceAdeParcoursManuel: boolean;
    }
    interface IMontantReference {
        montantConseille: number;
        montantMaximal: number;
        montantMinimal: number;
        montantSaisi: number;
        pas: number;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'une convention détaillée.
     */
    interface IContextCnp {
        idDossierCNP: string;
        listeAnomalieLecture: IAnomalieCnp[];
        jetonCtxCNP: string;
        nomCtxCNP: string;
        prenomCtxCNP: string;
        dateNaissanceCtxCNP: string;
        codeCollSelectCtxCNP: string;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'une convention détaillée.
     */
    interface IConventionDetails {
        id: string;
        label: string;
        labelReference: string;
        commentaireReference: string;
        labelIdentifiant: string;
        labelCompagnie: string;
        montantMaxGarantieParTete: number;
        montantMaxCreditConvention: number;
        ageMaxiEntree: number;
        ageMaxiCouverture: number;
        ageMaxiCouvertureExtension: number;
        dureeMiniCredit: number;
        dureeMaxCredit: number;
        quotiteMin: number;
        quotiteMax: number;
        montantCouverture: number;
        montantCouvertureMin: number;
        montantCouvertureMax: number;
        visibiliteQuotite: Models.Common.IVisibilite;
        visibiliteTaux: Models.Common.IVisibilite;
        visibiliteMontant: Models.Common.IVisibilite;
        isTauxList: boolean;
        isMontantListe: boolean;
        listeMontant: ICBusiness.Models.Common.ICodeLabel<number>[];
        listeTaux: ICBusiness.Models.Common.ICodeLabel<number>[];
        montant: number;
        quotite: number;
        taux: number;
        bornesMontant: IBornesSaisie;
        bornesQuotite: IBornesSaisie;
        bornesTaux: IBornesSaisie;
        isInterne: boolean;
        isDerogationAge: boolean;
        ageMaximumCouvertureAssurance: number;
        ageMaximumAssuranceDerogation: number;
        isConfigAde?: boolean;
    }
    interface IBornesSaisie {
        min: number;
        max: number;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'une convention simple.
     */
    interface IConvention {
        id: string;
        numeroExterne: string;
        isInterne: boolean;
        codeDerogationAge: string;
        dateFinEffet: string;
        label: string;
        labelCompagnie: string;
        labelContrat: string;
        labelContratType: string;
        labelTypeAssurance: string;
        labelSuffix: string;
        isConfigAde: boolean;
        estAncienContrat: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    /**
     * Modèle d'une couverture de crédit simple.
     */
    interface ICouvertureCredit {
        id: string;
        idCredit: string;
        labelCredit: string;
        cotisation: ICotisation;
        couverture: number;
        montantCouverture: number;
        nombrePeriodes: number;
        capital: number;
        codeDevise: string;
        coutAssExt8Ans: number;
        coutTotAssExt: number;
    }
    interface ICotisation {
        id: string;
        montant: number;
        taux: number;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IDecisionCnp {
        libelleDossier: string;
        libelleDemande: string;
        libelleDateEnvoi: string;
        libelleCredit: string;
        libelleAvis: string;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IDocumentsCnp {
        labelErreur: string;
        documents: IDocumentCnp[];
    }
    interface IDocumentCnp {
        donnees: string;
        code: string;
        id: string;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IDossierCnp {
        anomalies: IAnomalieCnp[];
        idDossier: string;
    }
    interface IAnomalieCnp {
        message: string;
        bloquant: boolean;
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IDossierExterne {
        idDossierExterne: string;
        lienDossierExterne: string;
        anomalies: Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Assurances {
    interface IPropositionCnp {
        idDossierCnp: string;
        libelleEtat: string;
        codeCollectivite: string;
        estEnErreur: boolean;
        libelleErreur: string;
        anomalies: Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.BlocNotes {
    interface IBlocNotes {
        id: string;
        contenu: string;
        type: string;
        anomalies: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Avis {
    /**
     * Represente les avis sur un dossier
     */
    interface IAvis {
        /**
         * Date de l'avis
         */
        date: string;
        /**
         * Identifiant de la personne connectée
         */
        idAuteur: String;
        /**
         * Auteur de l'avis
         */
        auteur: String;
        libelle: string;
        codeTypologie: string;
        motif: string;
        valide: boolean;
        nouveau: boolean;
    }
}

declare namespace ICBusiness.Models.Common {
    /**
     * Model describing the AFNOR standard
     */
    interface IAddress {
        /**
         * Recipient civility : title or quality, firstname and surname
         */
        row1: string;
        /**
         * Interior complement : Apartment number or letterbox, floor, corridor and/or stair
         */
        row2: string;
        /**
         * Exterior complemet : entrance, building and/or residence
         */
        row3: string;
        /**
         * Number and name of the street
         */
        row4: string;
        /**
         * "Lieu-dit"
         */
        row5: string;
        /**
         * Zip code and city
         */
        row6: string;
    }
}

declare namespace ICBusiness.Models.Common {
    interface IDuree {
        periodicite: ICBusiness.Enum.Periodicite;
        nombrePeriode: number;
    }
}

declare namespace ICBusiness.Models.Common {
    interface IAnomalieLecture {
        /**
         * TypeCtrl
         */
        typeControle: number;
        /**
         * IdntAno
         */
        idAno: string;
        /**
         * LiblAno
         */
        libelleAno: string;
        /**
         * TypeAno
         */
        typeAno: number;
        /**
         * DateHeurAno
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHeureAno: string;
        /**
         * Idfaco_IdntCtrlRegl
         */
        idControleRegle: string;
        /**
         * IdntObjt
         */
        idObjet: string;
        /**
         * ClasseAnomalie
         */
        classeAnomalie?: number;
    }
    interface IRapportTransaction {
        /**
         * OperationReussie
         */
        operationReussie: boolean;
        /**
         * ListeAnomalie
         */
        listeAnomalie: Array<IAnomalieLecture>;
    }
    interface IAnomaliesInfos {
        listeAnomalies: Array<IAnomalieLecture>;
        hasAnomalieBloquante: boolean;
    }
}

declare namespace ICBusiness.Models.Common {
    interface IChampCheckBox {
        text: string;
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
}

declare namespace ICBusiness.Models.Common {
    /**
     * Context apllicatif regroupant les données necessaire au composant transverse de l'application
     * Menu / boutons d'action / erreurs...
     */
    interface IContext {
        /**
         * Current authentification infos
         * Readoonly
         */
        authentificationInfos: MyWay.Services.Context.AuthentificationInfo;
        /**
         * Current dossier infos
         */
        dossierSchema: ICBusiness.Models.Dossier.IDossierSchema;
        /** current low level params needed to get all others
         * They are loaded first
         */
        lowLevelParams: ILowLevelParams;
        /** active page id */
        currentPage: string;
        isCurrentPageReadOnly: () => boolean;
    }
    interface ILowLevelParams {
        idDossier: string;
        dateInstruction: string;
        mode?: Enum.ModeOuvertureDossier;
        codeApplication?: number;
        idCompteDe?: string;
    }
}

declare namespace ICBusiness.Models.Common {
    interface ILabel {
        enabled: boolean;
        visible: boolean;
        type: string;
        libelle: string;
    }
}

declare namespace ICBusiness.Models.Common {
    /**
     * Represente les regles de visibilite d'un champ/controle
     */
    interface IVisibilite {
        /**
         * Le champ est affiche
         */
        visible: boolean;
        /**
         * Le champ est actif/editable
         */
        actif: boolean;
        /**
         * L'infobulle du champ
         */
        infobulle: string;
    }
    interface IVisibiliteSelectionne extends IVisibilite {
        selectionne: boolean;
        value: string;
    }
}

declare namespace ICBusiness.Models.Common {
    interface IParametreApplicatif {
        code: string;
        label: string;
        validityEndDate: string;
        validityStartDate: string;
        value: string;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IControleDossier {
        listeAnomaliesBloquantes: IAnomalie[];
        listeAlertes: IAnomalie[];
        retourControleDecision?: IRetourControleDecision;
    }
    interface IRedirectionAnomalieControle {
        pageId: string;
        anomalie: IAnomalie;
    }
    interface IAnomalie {
        idAno: string;
        libelle: string;
        typeAnomalie: Enum.TypeAnomalieEnum;
        date: string;
        idObjetAnomalie: string;
        typeControle: Enum.TypeControleEnum;
        typeObjet?: Enum.TypeObjetAnomalieEnum;
    }
    interface IRetourControleDecision {
        validationPossible: boolean;
        modificationPossible: boolean;
        existeImpactTarification: boolean;
        transfertPossible: boolean;
        visualisationDetailPossible: boolean;
        anomalies: Array<IAnomalie>;
        anomaliesControleAvtAccessoirePret: Array<IAnomalie>;
        anomalieImpactTarification: IAnomalie;
        noteBale2: string;
        libelleRisque: string;
        marge: string;
        margeCom: string;
        libelleErreurDelegationTaux: string;
        anomaliesControleBale2: Array<IAnomalie>;
        anomaliesControleReglementaire: Array<IAnomalie>;
        controleReglementaireForcee: boolean;
        controleCtfprmA3Forcee: boolean;
    }
    interface IRetourValdiationAccordClient {
        validationReussie: boolean;
        controleDossier: IControleDossier;
        anomaliesLectures: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierElement {
        /**
         * Idfadi_IdntDoss
         */
        idDossier: string;
        /**
         * VersDoss
         */
        versionDossier: number;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * Cdfiei_CodeImprParExprVers
         */
        codeImprParExpressionVersement: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Nbfapo_NbPassOffr
         */
        nombrePassOffre: number;
        /**
         * Dtfmva_DateDernReslAdr
         * Type date au format yyyy-MM-dd
         */
        dateDernierReslAdresse: string;
        /**
         * Dgfano_DateHorzProj
         * Type date au format yyyy-MM-dd
         */
        dateHorizonProjet: string;
        /**
         * Cdfado_CodeVisbInstr
         */
        codeVisbInstruction: number;
        /**
         * DossExstCent
         */
        dossierExisteCentral: boolean;
        /**
         * NbPersAssrParDeft
         */
        nombrePersonneAssuranceParDeft: number;
        /**
         * ModfEffcPendSess
         */
        modificationEffcPendantSess: boolean;
        /**
         * ModeOuvrDoss
         */
        modeOuvertureDossier: number;
        /**
         * DossModf
         */
        dossierModification: boolean;
        /**
         * ExisteMandatSEPA
         */
        existeMandatSEPA: boolean;
        /**
         * PjPrealableToutesRecues
         */
        pjPrealableToutesRecues: boolean;
        /**
         * PjSuspensifToutesRecues
         */
        pjSuspensifToutesRecues: boolean;
        /**
         * TypeMoteurADR
         */
        typeMoteurADR: number;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Cifoli_CodeLivrnImme
         */
        codeLivrnImme: boolean;
        /**
         * Nofaac_NumeAccrCmps
         */
        numeroAccrCmps: number;
        /**
         * Cnfaeg_EnggRevc
         */
        engagementRevc: number;
        /**
         * Dtfasp_DateSignPret
         * Type date au format yyyy-MM-dd
         */
        dateSignePret: string;
        /**
         * EvenMomnVertPourContConf
         */
        evenMomnVertPourContratConf: string;
        /**
         * Dtfisy_DateTrt
         * Type date au format yyyy-MM-dd
         */
        dateTraitement: string;
        /**
         * DateTrtRegl
         * Type date au format yyyy-MM-dd
         */
        dateTraitementRegle: string;
        /**
         * Cdfbve_ModReglVerst
         */
        modRegleVersement: string;
        /**
         * Cdfiro_IndicPrrgOffr
         */
        indicePrrgOffre: number;
        /**
         * Idfccp_IdntConvPres
         */
        idConventionPres: string;
        /**
         * Idfipp_IdntPres
         */
        idPres: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Mtfasi_MtSouhIntlEmpr
         */
        montantSouhInitialEmprunt: number;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Cefapd_CodeEttPlns
         */
        codeEtatPlns: number;
        /**
         * Cdfaar_CodeApplAnlsRisq
         */
        codeApplicationAnlsRisque: boolean;
        /**
         * Idfaac_IdntDossGest
         */
        idDossierGestion: string;
        /**
         * Idfaeg_IdntelemStrcGest
         */
        idElementStructureGestion: string;
        /**
         * Idfast_IdntelemStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Idfagd_CodeAgntDecd
         */
        codeAgentDecd: string;
        /**
         * Ctfacf_CodeTyplCadrFisc
         */
        codeTypologieCadreFiscal: string;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cifcsb_CodeLevrSecrBanc
         */
        codeLevrSecrBancaire: number;
        /**
         * Dtfccr_DateCretDoss
         * Type date au format yyyy-MM-dd
         */
        dateCreationDossier: string;
        /**
         * Dmfidm_DateDernMaj
         * Type date au format yyyy-MM-dd
         */
        dateDernierMAJ: string;
        /**
         * Ctfado_EtatDoss
         */
        etatDossier: number;
        /**
         * Cefado_SousEtatDoss
         */
        sousEtatDossier: number;
        /**
         * Dtfadf_DateDemnFinn
         * Type date au format yyyy-MM-dd
         */
        dateDemandeFinancier: string;
        /**
         * Dtfaem_DateemssOffr
         * Type date au format yyyy-MM-dd
         */
        dateemssOffre: string;
        /**
         * Dtfirl_DateCiblProj
         * Type date au format yyyy-MM-dd
         */
        dateCiblProjet: string;
        /**
         * Cdfaod_CodeOrigDemn
         */
        codeOrigineDemande: string;
        /**
         * Dtfard_DateAccrPrtr
         * Type date au format yyyy-MM-dd
         */
        dateAccrPrtr: string;
        /**
         * Cefahb_CodeEttEnggHors
         */
        codeEtatEngagementHors: number;
        /**
         * Mtfahb_MtEnggHorsBiln
         */
        montantEngagementHorsBiln: number;
        /**
         * Dffavl_DateFinValdOffr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeOffre: string;
        /**
         * Dtfaro_DateRecpOffrParClnt
         * Type date au format yyyy-MM-dd
         */
        dateRecuperationOffreParClient: string;
        /**
         * Dtfaef_DateEfftOffr
         * Type date au format yyyy-MM-dd
         */
        dateEffetOffre: string;
        /**
         * Cdfdrg_ModeRegl
         */
        modeRegle: string;
        /**
         * Nufpr1_NumeCpteSecoPrel
         */
        numeroCompteSecoPrel: string;
        /**
         * Nufddt_DomcTresCpteSeco
         */
        domiciliationTresCompteSeco: string;
        /**
         * Dtfart_DateLimtRetrEmprLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardEmpruntLoiConsommation: string;
        /**
         * Dffaof_DateLimtRetrOffrLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateLimiteRetardOffreLoiConsommation: string;
        /**
         * Dffaao_DateMiniAccpOffrLoiImmo
         * Type date au format yyyy-MM-dd
         */
        dateMinimumAccpOffreLoiImmobilier: string;
        /**
         * Dtfasg_DateSignEmpr
         * Type date au format yyyy-MM-dd
         */
        dateSigneEmprunt: string;
        /**
         * Dtfare_DateRefuOffrParEmpr
         * Type date au format yyyy-MM-dd
         */
        dateRefuOffreParEmprunt: string;
        /**
         * Dffavi_DateMinnPourVerstFondLoiConso
         * Type date au format yyyy-MM-dd
         */
        dateMinnPourVersementFondLoiConsommation: string;
        /**
         * Dtfieo_DateEdtnOffr
         * Type date au format yyyy-MM-dd
         */
        dateEditionOffre: string;
        /**
         * Idfaex_IdntExtnDoss
         */
        idExterneDossier: string;
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * Cdfafc_CodeAuthCont
         */
        codeAuthentiqueContrat: boolean;
        /**
         * Npfars_DelRetrScrv1
         */
        delRetardScrivener1: number;
        /**
         * Cdfive_CodeVersCret
         */
        codeVersementCreation: string;
        /**
         * Cdfwve_CodeVersDernModf
         */
        codeVersementDernierModification: string;
        /**
         * Mtfcon_MtVerstCnvn
         */
        montantVersementCnvn: number;
        /**
         * Txaufi_PctFinn
         */
        pourcentageFinancier: number;
        /**
         * Nofech_NumeEchlVerst
         */
        numeroEchelleVersement: number;
        /**
         * Ctfco2_TorechlVerst
         */
        torechlVersement: string;
        /**
         * Cdfali_CodeEtatEnvDossSaccef
         */
        codeEtatEnvoiDossierSaccef: number;
        /**
         * Dtfali_DateLieEnvSaccef
         * Type date au format yyyy-MM-dd
         */
        dateLieEnvoiSaccef: string;
        /**
         * Idfcpo_IdntEnvSaccef
         */
        idEnvoiSaccef: string;
        /**
         * Idfaoc_IdntOrigDemn
         */
        idOrigineDemande: string;
        /**
         * Lbfaoc_LiblOrigDemn
         */
        libelleOrigineDemande: string;
        /**
         * Dgfapn_DatePrevSignNotr
         * Type date au format yyyy-MM-dd
         */
        datePrevSigneNotaire: string;
        /**
         * Nufadn_RefeExtnDoss
         */
        referenceExterneDossier: string;
        /**
         * Idfas5_ElemStrc5
         */
        elementStructure5: string;
        /**
         * Idfas6_ElemStrc6
         */
        elementStructure6: string;
        /**
         * ModeDecn
         */
        modeDecn: boolean;
        /**
         * Llfic1_CritRechAppli1
         */
        critereRechercheApplication1: string;
        /**
         * Llfic2_CritRechAppli2
         */
        critereRechercheApplication2: string;
        /**
         * Llfic3_CritRechAppli3
         */
        critereRechercheApplication3: string;
        /**
         * Llfic4_CritRechAppli4
         */
        critereRechercheApplication4: string;
        /**
         * Llfic5_CritRechAppli5
         */
        critereRechercheApplication5: string;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Dtfano_DateSignDossEnv
         * Type date au format yyyy-MM-dd
         */
        dateSigneDossierEnvoi: string;
        /**
         * Dffan1_DateFinValdAccr
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeAccr: string;
        /**
         * IndicOffrPre
         */
        indiceOffrePre: boolean;
        /**
         * Ctfipi_CodePrcsInstr
         */
        codeProcessusInstruction: string;
        /**
         * Ctfitr_CodeTrtComp
         */
        codeTraitementComp: string;
        /**
         * Cefipc_CodeEttPrsChrgDoss
         */
        codeEtatPresenceChargeDossier: number;
        /**
         * Cefiac_CodeEttActvDoss
         */
        codeEtatActiviteDossier: number;
        /**
         * IndicPrsChrgPiecJustParPiec
         */
        indicePresenceChargePieceJustificatifParPiece: number;
        /**
         * Idfabp_IdntAgntBoActlChrgDoss
         */
        idAgentBoActuarielChargeDossier: string;
        /**
         * Idfaes_IdntAgntPrprDoss
         */
        idAgentProprietaireDossier: string;
        /**
         * Idfaei_IdntAgntInstrDoss
         */
        idAgentInstructionDossier: string;
        /**
         * Idfaec_IdntAgntConnDoss
         */
        idAgentConnaissanceDossier: string;
        /**
         * Idfada_IdntAgntPourDecsConf
         */
        idAgentPourDecisionConf: string;
        /**
         * Idfael_IdntEnttDecs
         */
        idEntiteDecision: string;
        /**
         * Idfabi_IdntEnttPourTrnfBo
         */
        idEntitePourTransfertBo: string;
        /**
         * BlocNotes
         */
        blocNotes: string;
        /**
         * Ctfcse_CodeEtpeSiml
         */
        codeEtapeSimulation: number;
        /**
         * Idfifd_NumeFichPres
         */
        numeroFichPres: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Idfdma_ReferenceMandat
         */
        referenceMandat: string;
        /**
         * Dgfdms_DateSignMand
         * Type date au format yyyy-MM-dd
         */
        dateSigneMand: string;
        /**
         * Ctfind_PrecisionTaux
         */
        precisionTaux: number;
        /**
         * Cdficd_CodeDevCredDev
         */
        codeDevCreditDev: string;
        /**
         * Idfics_NumCompteDev
         */
        numeroCompteDev: string;
        /**
         * Ctfimr_ModeReglDev
         */
        modeRegleDev: string;
        /**
         * Ctfimv_ModReglVerstDev
         */
        modRegleVersementDev: string;
        /**
         * IdntComplDoss
         */
        idComplementDossier: string;
        /**
         * Cifiid_IntegrationDossierDeVente
         */
        integrationDossierDeVente: number;
        /**
         * Ctficc_CanalDeCreation
         */
        canalDeCreation: string;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Defiag_DateEnvConvAG
         * Type date au format yyyy-MM-dd
         */
        dateEnvoiConventionAG: string;
        /**
         * Ctfarp_EnvoiMailSms
         */
        envoiMailSms: string;
        /**
         * Cifpcd_OuvCpteSupEchCred
         */
        ouvertureCompteSupEchCredit: boolean;
        /**
         * CodeTypeEditionAutorisee
         */
        codeTypeEditionAutorisee: string;
        /**
         * EstEcoPtzCopro
         */
        estEcoPtzCopro: boolean;
        /**
         * EstCopro100
         */
        estCopro100: boolean;
        /**
         * AutoriserCalculIndicateurEditionAgence
         */
        autoriserCalculIndicateurEditionAgence: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * Cdfcsh_CodeTypeSgnDmdeCred
         */
        codeTypeSgnDmdeCredit: number;
        /**
         * Cdfasd_CodeEtatSgnDmdeCred
         */
        codeEtatSgnDmdeCredit: number;
        /**
         * Hefced_DateEdtDmdeCred
         * Type date au format yyyy-MM-dd
         */
        dateEdtDmdeCredit: string;
        /**
         * Hefcds_DateSignDmdeCred
         * Type date au format yyyy-MM-dd
         */
        dateSigneDmdeCredit: string;
        /**
         * Nofaea_NumEdtDmdeCred
         */
        numeroEdtDmdeCredit: number;
        /**
         * IdntBlcNotsDivr
         */
        idBlocNoteNotsDivr: string;
        /**
         * IdntRedcActe
         */
        idReductionActe: string;
        /**
         * IdntEmpr
         */
        idEmprunt: string;
        /**
         * ListIdntEven
         */
        listeIdEven: Array<string>;
        /**
         * ListIdntAvis
         */
        listeIdAvis: Array<string>;
        /**
         * ListIdntAlrtEntr
         */
        listeIdAlerteEntr: Array<string>;
        /**
         * ListIdntAlrtSort
         */
        listeIdAlerteSort: Array<string>;
        /**
         * ListIdntPrjt
         */
        listeIdProjet: Array<string>;
        /**
         * ListIdntVerst
         */
        listeIdVersement: Array<string>;
        /**
         * ListIdntPers
         */
        listeIdPersonne: Array<string>;
        /**
         * ListIdntGarants
         */
        listeIdGarants: Array<string>;
        /**
         * ListIdntClssPers
         */
        listeIdClassePersonne: Array<string>;
        /**
         * ListIdntAgents
         */
        listeIdAgents: Array<string>;
        /**
         * IdntPoolEPS
         */
        idPoolEPS: string;
        estCadreFiscalLMP: boolean;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierOuvert {
        hasGarantieConventionnee: boolean;
        sousEtat: Enum.SousEtatDossier;
        anosInfos?: Models.Common.IAnomaliesInfos;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierResume {
        idDossier: string;
        codeOrigineDemande: Enum.CodeApplicationEnum;
        codeApplication: Enum.CodeApplicationEnum;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierSchema {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        etat: Enum.EtatDossier;
        hasEmprunteur: boolean;
        hasProjet: boolean;
        idDossier: string;
        idDossierGestion: string;
        idEmprunteur: string;
        libelleSousEtat: string;
        nomCompletEmprunteur: string;
        sousEtat: Enum.SousEtatDossier;
        idProjet: string;
        idPlanFinancement: string;
        coutTotal: number;
        activationGestionDevise: boolean;
        /** Un dossier en EURO avec activationGestionDevise = true est un dossier acceptant plusieurs crédits dans des devises différentes */
        multiDevise: boolean;
        presencePATZPlanRetenu: boolean;
        codeEtapeSimulation: Enum.CodeEtapeSimulationPVHEnum;
        coutObjetSaisieCalculEnvl: boolean;
        entiteInstructeur: string;
        aRefusAssuranceEdite: boolean;
        hasPrescripteur: boolean;
        codeTraitementComp: string;
        codeProcessusInstruction: string;
        devisEcoPTZExist: boolean;
        creationDossierSGFGASPossible: boolean;
        estDossierDefi: boolean;
        natureProjet: number;
        aNotesDossier: boolean;
    }
    interface IComplementDossier {
        idws: string;
        delaiDeRealisation: Common.ICodeLabel<number>;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface INoeudSynthese {
        /**
         * Ordre
         */
        ordre: number;
        /**
         * Actif
         */
        actif: boolean;
        /**
         * Gras
         */
        gras: boolean;
        /**
         * Id
         */
        id: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Ouvert
         */
        ouvert: boolean;
        /**
         * Parent
         */
        parent: string;
        /**
         * Selectable
         */
        selectable: boolean;
    }
    interface ISynthese {
        /**
         * ListNoeudSynthese
         */
        listeNoeudSynthese: Array<INoeudSynthese>;
        /**
         * ListNoeudAlerte
         */
        listeNoeudAlerte: Array<INoeudSynthese>;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IDossierTransfertNeo {
        estTransfere: boolean;
        anomalies: string[];
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IResultatCreationDossier {
        idDossier: string;
        anosInfos: Models.Common.IAnomaliesInfos;
    }
}

declare namespace ICBusiness.Models.Dossier {
    interface IResultatEligibilite {
        type: Models.Common.ICodeLabel<string>;
        isEligible: boolean;
        idProduitFinancier: string;
        messages: string[];
    }
}

declare namespace ICBusiness.Models.ContratEpargneLogement {
    interface IContratEpargneLogement {
        idws: string;
        typeEpargneLogement: string;
        libelleIdCEL: string;
        libelleTitulaireContrat: string;
        libelleOuverture: string;
        libelleTypeDroit: string;
    }
    interface IContratEpargneLogementFormDatas {
        idws: string;
        codeTypeEL: string;
        codeDeviseCompte: string;
        lienParentAvecCedn: Common.ICodeLabel<number>;
        libelleTitulaireContrat: string;
        codeIndiceBenePrimeEpargneLogement: number;
        dateOuvertureContrat: string;
        dateClotureContrat: string;
        codeForc: number;
        codeRaptContratEpargneLogement: number;
        idPersonneApportDroitContrat: Common.ICodeLabel<string>;
        codeDroitJustificatif: number;
        codeResrDroitAcqs: number;
        rapatrierTranche: boolean;
        droitEstCede: boolean;
        idContratEpargneLogement: string;
        listeIdTrancheEpargneLogement: string[];
        attributionPrime: boolean;
        rice: MyWay.Model.Rice;
        estContratEmprunteur: boolean;
        estContratRapatrieClos: boolean;
    }
}

declare namespace ICBusiness.Models.MontantEncoursEpargneLogement {
    interface IPlafondsEncoursEpargneLogement {
        /**
         * montantDencPrtsPEL
         */
        plafondPEL: number;
        /**
         * montantDencPrtsLEL
         */
        plafondCEL: number;
        /**
         * montantDencPrtsEpargneLogement
         */
        plafondTotal: number;
    }
    interface IEncoursEpargneLogement {
        /**
         * montantEncoursIsssPretPEL > Maj: encoursEncoursIsssPretPEL
         */
        pelEtablissement: number;
        /**
         * montantEncoursIsssPretLEL
         */
        celEtablissement: number;
        /**
         * montantEncoursPlnsAutretbl
         */
        pelHorsEtablissement: number;
        /**
         * montantEncoursLivrAutretbl
         */
        celHorsEtablissement: number;
        restePel: number;
        resteCel: number;
        /**
         * codeDestinataireAutreParObjet
         */
        residence: Models.Common.ICodeLabel<number>;
    }
}

declare namespace ICBusiness.Models.TrancheEpargneLogement {
    interface ITrancheEpargneLogement {
        tauxEpargne: number;
        montantDroitAcqs: number;
        dateArreEpargne: string;
        libletblOrigineDroitPret: string;
        codeDroitJustificatif: number;
        codeRaptContratEpargneLogement: number;
        montantDroitAcqsDepsOrigineContratEpargneLogement: number;
        codeDevise: string;
        codeResrDroitAcqs: number;
        idDroitUtilisation: string;
        idContratEpargneLogement: string;
        idws: string;
        libelleResrDroitAcqs: string;
        montantDroitAcqsInitial: number;
        montantDroitUtilises: number;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IAnnulerAccordPreteurRequest {
        identifiantDossier: string;
    }
    interface IResultatOffrePretIndustrialisee {
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: string;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la décision prêteur
     */
    interface IDecisionPreteur {
        listeAvis: Array<Avis.IAvis>;
        decision: ICBusiness.Models.Decision.IDecision;
        indicateursOctroi: IIndicateursOctroi;
        /**
         * Informations sur le dossier
         */
        dossier: Models.Dossier.IDossierSchema;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la section décision
     */
    interface IDecision {
        /**
         * L'affichage du message d'autorisation à décider
         */
        autoriseA: boolean;
        /**
         * La date de la décision
         */
        date: string;
        /**
         * La date maximum de la décision
         */
        dateMax: string;
        /**
         * La date minimum de la décision
         */
        dateMin: string;
        /**
         * La date conseillée de la décision
         */
        dateConseille: string;
        /**
         * Message pour les bornes des dates
         */
        bornesDateMessage: string;
        /**
         * Niveau de délégation requis (Adélys)
         */
        niveauRequis: string;
        /**
         * Libellé du niveau de délégation requis (Adélys)
         */
        libelleNiveauRequis: string;
        /**
         * Code du niveau de délégation (hors Adélys)
         */
        codeNiveauDelegation: string;
        /**
         * Libellé du niveau de délégation (hors Adélys)
         */
        libelleNiveauDelegation: string;
        etatDossier: string;
        /**
         * Booléen pour la possibilité de saisie d'avis
         */
        saisieAvis: boolean;
        /**
         * Booléen pour la possibilité d'accorder
         */
        accordPossible: boolean;
        /**
         * Booléen pour la possibilité de refuser
         */
        refusPossible: boolean;
        /**
         * Booléen pour la possibilité de forcer
         */
        forcagePossible: boolean;
        /**
         * Le moteur de délégation est externe ?
         */
        moteurDelegationExterne: boolean;
        /**
         * NotationBale2
         */
        notationBale2: string;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IExecuterCalculDelegationDecisionRequest {
        identifiantDossier: string;
        identifiantAgentTransfert: string;
        reponse: boolean;
        continu: boolean;
    }
    interface IErreurDelegation {
        /**
         * Titre
         */
        titre: string;
        /**
         * DescriptionsErreur
         */
        descriptionsErreur: Array<string>;
    }
    interface IResultatCalculDelegation {
        /**
         * MoteurDelegationExterne
         */
        moteurDelegationExterne: boolean;
        /**
         * Nofcdi_NiveauDelegationAgent
         */
        niveauDelegationAgent: string;
        /**
         * Tvfyal_Valeur
         */
        valeur: string;
        /**
         * ReponseAutorisation
         */
        reponseAutorisation: boolean;
        /**
         * LibelleNiveauRequis
         */
        libelleNiveauRequis: string;
        /**
         * Cvfide_NiveauRequis
         */
        niveauRequis: string;
        /**
         * ErreurDelegation
         */
        erreurDelegation: IErreurDelegation;
        /**
         * DateDecision
         * Type date au format yyyy-MM-dd
         */
        dateDecision: string;
        /**
         * EtatDossier
         */
        etatDossier: string;
        /**
         * NotationBale2
         */
        notationBale2: string;
        /**
         * AccesSaccef
         */
        accessoireSaccef: boolean;
        /**
         * AccesEnet
         */
        accessoireEnet: boolean;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.Decision {
    /**
     * Represente la section des indicateurs à l'octroi
     */
    interface IIndicateursOctroi {
        /**
         * Taux d'endettement
         */
        tauxEndettement: number;
        /**
         * reste à vivre
         */
        resteAVivre: number;
        /**
         * Loan to value
         */
        tauxLTV: number;
        /**
         * Taux apport personnel
         */
        tauxApportPersonnel: number;
        /**
         * Reste à vivre par personne
         */
        resteAVivreParPersonne: number;
        /**
         * Debt To Income (Endettement global sur revenus stables)
         */
        debtToIncome: number;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IDecisionRequest {
        /**
         * Identifiant du dossier
         */
        identifiantDossier: string;
        /**
         * Sous état du dossier
         */
        sousEtatDossier: number;
        /**
         * Si consultation de la décision
         */
        consultation: boolean;
    }
}

declare namespace ICBusiness.Models.Decision {
    interface IRetourPasserAccordPreteur {
        /**
         * ValidationReussie
         */
        validationReussie: boolean;
        /**
         * Anomalies
         */
        anomalies: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.DNCDefi {
    interface IControleDEFI {
        finalite: string;
        ok: boolean;
    }
}

declare namespace ICBusiness.Models.EditionOffre {
    interface IResultatDocuments {
        listeDocuments: IInfoDocument[];
        listeAnomalies: Common.IAnomalieLecture[];
    }
    interface IInfoDocument {
        /**
         * Code du document
         */
        codeDoc: string;
        /**
         * Libellé du document
         */
        libelleDoc: string;
        /**
         * Code pour les differentes variante d'un document
         */
        codeVariance: number;
        /**
         * Nombre d'exmeplaires emprunteur
         */
        nombreEmp: number;
        /**
         * Nombre d'exmeplaires notaire
         */
        nombreNotaire: number;
        /**
         * Nombre d'exmeplaires caution
         */
        nombreCaution: number;
        /**
         * Nombre d'exmeplaires dossier
         */
        nombreDossier: number;
        /**
         * Nombre d'exmeplaires autre
         */
        nombreAutre: number;
        /**
         * Nombre d'exmeplaires total
         */
        nombreTotal: number;
        /**
         * Code type de traitement
         */
        typeTraitement: number;
        /**
         * Code niveau de traitement
         */
        niveauTraitement: number;
        /**
         * Code modèle théorique
         */
        modeleTheorique: string;
        /**
         * Code processus (permet de déterminer l'autorisation si rénseigné)
         * Exemple : "S1" pour loi conso
         */
        codeProcessus: string;
        /**
         * Est document offre
         */
        estDocOffre: boolean;
        /**
         * Est éditable
         */
        estEditable: boolean;
        /**
         * idws de l'élément
         */
        idwsElement: string;
        /**
         * Information personne
         */
        informationPersonne: string;
        /**
         * Eventuelle notices pour le document
         */
        notices?: INotices;
        /**
         * Mode d'édition  Edition Industrialisée : ‘I’, Signature Electronique : ‘S’, Edition Numérique : ‘N’, Autre : ‘ ’
         */
        modeEdition: number;
        /**
         * Format éditique : Propriété à renseigner lors de l’édition Papier. Elle est définie automatiquement pour la signature électronique et l’édition industrialisée.
         */
        formatEditique: number;
        /**
         * Code signature: Signature de l’offre en agence: ‘1’, Signature de l’offre à distance: ‘2’, Signature de la demande de crédit en agence: ‘3’, signature de la demande de crédit à distance: ‘4’, Prise en charge Back Office: ‘5’
         */
        codeSignature: number;
        /**
         * Flux de données du fichier
         */
        flux: string;
        /**
         *  Etat dans la liasse pour la signature électronique
         */
        etatAjoutLiasse: string;
        /**
         * Type de document en mise à jour 0 pas de flux binaire à transmettre, 1 flux binaire dans le présent objet à transmettre, 2 flux binaire à déterminer par le service
         */
        typeDocumentMaj: number;
        /**
         * Numéro d'ordre
         */
        ordre: number;
        /**
         * Typologie du document (ex.: document technique)
         */
        typologie: number;
        /**
         * Canal d'édition du document (cf. ICBusiness.Enum.CanalEditionEnum)
         */
        canalEdition: number;
        /**
         * Liste d'éventuels paramètres pour les éditions (ex. "IdPersonne": "012122156")
         */
        params: ICBusiness.Models.Impression.IParamEditique[];
        /**
         * Booléen pour savoir s'il s'agit d'un document rattaché à une personne
         */
        estDocPersonne: boolean;
        /**
         * Numéro de personne sir estDocPersonne est vrai
         */
        numPersonne: string;
    }
}

declare namespace ICBusiness.Models.EditionOffre {
    interface INotices {
        titre: ICBusiness.Models.Common.ILabel;
        ajoutNotices: ICBusiness.Models.Common.IChampCheckBox;
    }
}

declare namespace ICBusiness.Models.Eds {
    interface IContextePoste {
        typeAgenceEDSRattachementPF: string;
    }
}

declare namespace ICBusiness.Models.Eds {
    interface IDonneesCommunesEDS {
        /**
         * Code banque sous lequel l'établissement est répertorié à la Banque de France
         */
        codeEtablissement: string;
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
        identifiantElementStructure: number;
        /**
         * Indique le type organisationnel d'un élément de structure d'un Etablissement du GCE. Typologie gérée dans la table CU1B.
         * Typologie propre à chaque Etablissement du GCE. Certains types d'EDS sont INVARIANTS dans le SI et sont communs à tous les Etablissements :
         * 008 - Siège
         * 003 - Agence (Point de vente)
         * 010 - GAB
         * 020 - Guichet (au sens arrêté de caisse)
         * 001 - Poste fonctionnel
         * 002 - Service
         * 009 - Entité Administrative (Guichet interbancaire)
         *
         * Attention : un type d'EDS invariant peut avoir un libellé spécifique par Etablissement (exemple : type '003', agence ou point de vente)
         */
        typeElementStructure: string;
        /**
         * Dénomination courte du type de l'élément de  structure. Exemple :
         * EA     - Entité administrative
         * AGENCE - Agence
         * GROUPE - Groupe commercial
         * ...
         */
        libelleCourtTypeEDS: string;
        /**
         * Dénomination du type de l'élément de structure.
         */
        libelleLongTypeEDS: string;
        /**
         * Référence externe d'un élément de structure dans un établissement du GCE. Référence connue de l'Etablissement. Identifiant défini en fonction du type d'élément de structure
         */
        referenceExterneEDS: number;
        /**
         * ibellé de désignation d'un élément de structure appartenant à un Etablissement du GCE.
         */
        libelleElementStructure: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé court du type d'EDS et de la désignation de l'EDS.
         * Sauf si l'EDS est un poste fonctionnel, on trouve alors le Nom + Prénom de l'Agent titulaire du PF.
         */
        libelleCourtEDS: string;
        /**
         * Désignation décrivant l'élément de structure.
         * Cette désignation est construite par concaténation du libellé long du type d'EDS et de la désignation de l'EDS.
         * Si l'EDS est un poste fonctionnel, on trouve alors le Nom + Prénom de l'Agent titulaire du poste fonctionnel, précédé de la civilité (Mr...).
         */
        libelleLongEDS: string;
        /**
         * Date de début de validité de l’élément de structure.
         * Type date au format yyyy-MM-dd
         */
        dateDebutValiditeEDS: string;
        /**
         * Date de fin de validité de l’élément de structure.
         * Type date au format yyyy-MM-dd
         */
        dateFinValiditeEDS: string;
        /**
         * Identifiant de l'élément de structure qui dirige : Responsable hiérarchique (poste fonctionnel).
         */
        identifiantEDSDirigeant: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Anomalies pour le contrôle avant l'édition de l'offre
     */
    interface IAnomaliesControleEdition {
        anomalies: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Ensemble des anomalies bloquantes (propriété utilisée pour simplification de traitement)
         */
        anomaliesBloquantes: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Ensemble des anomalies non bloquantes (propriété utilisée pour simplification de traitement)
         */
        anomaliesNonBloquantes: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies non bloquantes sur accessoires
         */
        anomaliesAccessoiresOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies bloquantes sur accessoires
         */
        anomaliesBloquantesAccessoiresOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Alertes sur accessoires
         */
        alertesAccessoiresOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies non bloquantes sur modalités de recouvrement
         */
        anomaliesModalitesRecouvrement: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies bloquantes sur modalités de recouvrement
         */
        anomaliesBloquantesModalitesRecouvrement: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Alertes sur modalités de recouvrement
         */
        alertesModalitesRecouvrement: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies non bloquantes sur mandats
         */
        anomaliesMandats: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies bloquantes sur mandats
         */
        anomaliesBloquantesMandats: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Alertes sur mandats
         */
        alertesMandats: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies non bloquantes sur édition de l'offre
         */
        anomaliesEditionOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Anomalies bloquantes sur édition de l'offre
         */
        anomaliesBloquantesEditionOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * Alertes sur édition de l'offre
         */
        alertesEditionOffre: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IClausePersonnalisee {
        /**
         * LiblClsePers
         */
        libelleClassePersonne: string;
        /**
         * NumeReltClsePers
         */
        numeroRelationClassePersonne: number;
        /**
         * DestClsePers
         */
        destinataireClassePersonne: number;
        /**
         * Identifiant de l'élément complet
         */
        idws: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IClausesPersonnalisees {
        /**
         * ClausesPersonnalisees
         */
        clausesPersonnalisees: Array<IClausePersonnalisee>;
        /**
         * PresenceRedacteurActe
         */
        presenceRedacteurActe: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IContextEditionDocument {
        demandeCredit: IContexteEdition;
        offre: IContexteEdition;
        annexePTZ: IContexteEdition;
        numerisation: IContexteNumerisation;
        /** Aggregation de toutes les anomalies de demandeCredit et offre */
        listeAnomalies?: string[];
    }
    interface IContexteEdition {
        /** Edition en agence format papier */
        editionAgencePapier: IContexteEditionEtat;
        /** Edition en back office format papier */
        editionBackOffice: IContexteEditionEtat;
        /** Edition electronique en agence avec signature sur tablette (SAG) */
        electroniqueAgence: IContexteEditionEtat;
        /** Edition electronique à distance (SED) */
        electronique: IContexteEditionEtat;
        /** Edition industrialisée */
        industrialisation?: IContexteIndustrialisation;
        /** TO DO Alexis : Voir pour harmoniser les autorisations ci-dessous et les habilitations 'editionAgencePapier' et 'editionBackOffice' */
        /** Détermine si l'offre est éditable Agence ou BO */
        autoriserEditionOffreAgence?: boolean;
        /** Détermine si le document d'offre est éditable */
        autorisationEditionOffre?: boolean;
    }
    interface IContexteEditionEtat {
        nonConcerne: boolean;
        actif: boolean;
        eligible: boolean;
        listeAnomalies?: string[];
    }
    interface IContexteIndustrialisation {
        /** L'édition industrialisée est possible ou pas */
        estPossible: boolean;
        /** EstMultiDestinatairesAutorise */
        estMultiDestinatairesAutorise: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour le contexte éditique
     */
    interface IContexteEditique {
        /**
         * AutorisationEditionOffre
         */
        autorisationEditionOffre: boolean;
        /**
         * AutoriserEditionOffreAgence
         */
        autoriserEditionOffreAgence: boolean;
        /**
         * DocumentOffrePresent
         */
        documentOffrePresent: boolean;
        /**
         * EstDossierPartenaire
         */
        estDossierPartenaire: boolean;
        /**
         * ListeAnomalieEdition
         */
        listeAnomalieEdition: Array<ICBusiness.Models.Common.IAnomalieLecture>;
        /**
         * ContexteEditionIndustrialisee
         */
        contexteEditionIndustrialisee: IContexteIndustrialisation;
        /**
         * ContexteDossierNumerique
         */
        contexteDossierNumerique: IContexteNumerisation;
        /**
         * ContexteSignatureElectronique
         */
        contexteSignatureElectronique: IContexteElectronique;
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour le contexte de la signature électronique
     */
    interface IContexteElectronique {
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour le contexte d'industrialisation
     */
    interface IContexteIndustrialisation {
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour le contexte de numérisation
     */
    interface IContexteNumerisation {
        /**
         * EstDossierNumeriqueActive
         */
        estDossierNumeriqueActive: boolean;
        /**
         * UrlAcquDossierNumerique
         */
        urlAcquDossierNumerique: string;
        /**
         * UrlConsDossierNumerique
         */
        urlConsolideDossierNumerique: string;
        /**
         * ErreurDossierNumerique
         */
        erreurDossierNumerique: boolean;
        /**
         * ListeAnomalieDossierNumerique
         */
        listeAnomalieDossierNumerique: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IContrat {
        /**
         * Ctfals_TypeLoiScrv
         */
        typeLoiScrivener: number;
        /**
         * LibelleTypeLoiScrv
         */
        libelleTypeLoiScrivener: string;
        /**
         * NumeroOffre
         */
        numeroOffre: number;
        /**
         * LibelleAutorisationEdition
         */
        libelleAutorisationEdition: string;
        /**
         * Présence d'un rédacteur d'acte
         */
        presenceRedacteurActe: boolean;
        /**
         * ClausesPersonnalisees emprunteur
         */
        clausesPersonnaliseesEmprunteur: IClausePersonnalisee[];
        /**
         * ClausesPersonnalisees rédacteur d'acte
         */
        clausesPersonnaliseesRedacteurActe: IClausePersonnalisee[];
        /**
         * ListCreditsInternes
         */
        listeCreditsInternes: Array<ICreditInterne>;
        /**
         * Signataires
         */
        personnesSignataires: IPersonnePhysique[];
        /**
         * Liste des mandats
         */
        listeMandats: IMandats[];
        /**
         * Liste des débiteurs
         */
        debiteurs: ICBusiness.Models.Edition.IDebiteur[];
        /**
         * Liste des instituts d'émission
         */
        listeInstitutsEmission: IInstitutEmission[];
        /**
         * Projet
         */
        projet: IProjet;
        intervenantsSignature: ICBusiness.Models.SignatureOffre.IIntervenantSignature[];
        calculBonificationRequise: boolean;
        /**
         * Cdfcsg_TypeSignature
         */
        typeSignature: number;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        dateEditionOffre: string;
        visualisationEditionOffreIndus: boolean;
        dateRemise: string;
        delaiValidite: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ICreditInterne {
        /**
         * Ccfarc_CodeIndicCalcAFaire
         */
        codeIndiceCalculAFaire: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Cdfbje_CodeIndicExstPiecJustPourDeclechlVerst
         */
        codeIndiceExistePieceJustificatifPourDeclechlVersement: number;
        /**
         * Cdfbju_CodeTypeRattJustDecl
         */
        codeTypeRattachementJustificatifDeclaration: number;
        /**
         * Dhfacj_QuantEche
         */
        jourDateEcheance: number;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * Lbfcvs_LiblLongPrdt
         */
        libelleLongProduit: string;
        /**
         * Mcfafd_CoutTotlFrsDossAsscCred
         */
        coutTotalFrsDossierAssuranceCredit: number;
        /**
         * Mcfgfr_CoutTotlFrsGarnAsscCred
         */
        coutTotalFrsGarantieAssuranceCredit: number;
        /**
         * Mcfaia_MtTotlAssrPerd
         */
        montantTotalAssurancePeriode: number;
        /**
         * Mefacc_MtPrmeEcheAssr
         */
        montantPrmeEcheanceAssurance: number;
        /**
         * Mefape_MtPrmeEcheHorsAccsCred
         */
        montantPrmeEcheanceHorsAccessoireCredit: number;
        /**
         * Mtfcve_MtMiniVerst
         */
        montantMinimumVersement: number;
        /**
         * MontantEcheance
         */
        montantEcheance: number;
        /**
         * Npfcfi_NbPerdCred
         */
        nombrePeriodeCredit: number;
        /**
         * Pefcfi_CodePerdCred
         */
        codePeriodeCredit: number;
        /**
         * TauxAffiche
         */
        tauxAffiche: number;
        /**
         * TauxAnnuelEffectifGlobal
         */
        tauxAnnuelEffectifGlobal: number;
        /**
         * TauxUsure
         */
        tauxUsure: number;
        /**
         * Txfasr_TxNegcSurcRembAntc
         */
        tauxNegocieSurcRemboursementAnticipe: number;
        /**
         * Txfcmg_MargeTauxFutur
         */
        margeTauxFutur: number;
        /**
         * Cdfcie_CodeIndicelgbAuprInstemss
         */
        codeIndicelgbAuprInstemss: number;
        /**
         * LibelleIndicelgbAuprInstemss
         */
        libelleIndicelgbAuprInstemss: string;
        /**
         * Mtfaoc_MtCaptCred
         */
        montantCapitalCredit: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IDebiteur {
        /**
         * Libellé du payeur
         */
        libellePayeur: string;
        /**
         * Id du payeur
         */
        idPayeur: string;
        /**
         * Payeur de secours ?
         */
        estPayeurSecours: boolean;
        /**
         * Au moins une formule de paiement par mandat SEPA
         */
        aMandatSepa: boolean;
        /**
         * Liste des formules de paiement (compte, mandats, etc)
         */
        formulesPaiement: IFormulePaiement[];
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour la donnée complémentaire
     */
    interface IDonneeComplementaire {
        /**
         * Nom de la propriété
         */
        name: string;
        /**
         * Propriétés de la donnée
         */
        data: IChampIhm;
        /**
         * Eventuelles règles de validation
         */
        rules?: ICBusiness.Rules.IValidationRule[];
        /** Nom du parent, dans le cas d'un élément correspondant à un tableau d'objet d'éléments */
        parentName?: string;
        /** Index dans le parent qui serait alors un tableau d'objet d'éléments */
        parentIndex?: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IEntrepreneurIndividuel {
        /**
         * CodeNace
         */
        codeNace: string;
        /**
         * CodeInsee
         */
        codeINSEE: string;
        /**
         * DateDebutEIRL
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDebutEIRL: string;
        /**
         * DateFinEIRL
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateFinEIRL: string;
        /**
         * IndicateurOpposabiliteEIRL
         */
        indicateurOpposabiliteEIRL: number;
        /**
         * NomConjoint
         */
        nomConjoint: string;
        /**
         * EstMandataire
         */
        estMandataire: boolean;
        /**
         * NomMandataire
         */
        nomMandataire: string;
        /**
         * VertuMandataire
         */
        vertuMandataire: string;
        /**
         * EstEIRL
         */
        estEIRL: string;
        /**
         * IndicateurEIRL
         */
        indicateurEIRL: string;
        /**
         * LibelleEIRL
         */
        libelleEIRL: string;
        /**
         * AccordConjoint
         */
        accordConjoint: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Exemplaire dans l'édition industrialisée
     */
    interface IExemplaire {
        code: string;
        libelle: string;
        ordre: number;
        utilite: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IFormulePaiement {
        /**
         * Identifiant unique
         */
        idws: string;
        /**
         * Libellé pour le crédit
         */
        libelleCredit: string;
        /**
         * Identifiant Synchro du crédit
         */
        identifiantSynchroCredit: string;
        /**
         * Code du mode de règlement
         */
        codeModeReglement: string;
        /**
         * Libellé du mode de règlement
         */
        libelleModeReglement: string;
        /**
         * Devise
         */
        devise: string;
        /**
         * Taux de participation
         */
        tauxParticipation: number;
        estComptePrelev: boolean;
        /**
         * Code BIC
         */
        bic: string;
        /**
         * Code IBAN
         */
        iban: string;
        /**
         * Booléen pour savoir s'il s'agit d'un mandat SEPA
         */
        estMandatSepa: boolean;
        /**
         * Référence unique du mandat (RUM)
         */
        referenceUniqueMandat: string;
        estAutre: boolean;
        domiciliationTresorCompte: string;
        /**
         * durée du crédit associé au mandat
         */
        dureeCredit: number;
        montantCapital: number;
        estSecours: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IInstitutEmission {
        /**
         * Libellé de l'institut d'émission
         */
        libelle: string;
        /**
         * Montant emprunté
         */
        montant: number;
        /**
         * Durée
         */
        duree: number;
        /**
         * Périodicité
         */
        periodicite: string;
        /**
         * Taux d'emprunt
         */
        taux: any;
        /**
         * Eligibilité
         */
        eligibilite: string;
        /**
         * Code devise du crédit
         */
        codeDevise: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IMandat {
        idwsPayeur: string;
        /**
         * Identifiant Néo du crédit
         */
        identifiantCredit: string;
        /**
         * Libellé pour le crédit
         */
        libelleCredit: string;
        /**
         * Identifiant Synchro du crédit
         */
        identifiantSynchroCredit: string;
        /**
         * Taux de participation
         */
        tauxParticipation: string;
        /**
         * Libellé du mode de règlemet
         */
        modeReglement: string;
        /**
         * Code BIC
         */
        bic: string;
        /**
         * Code IBAN
         */
        iban: string;
        /**
         * Référence unique du mandat (RUM)
         */
        referenceUniqueMandat: string;
        /**
         * Date de signature du mandat
         */
        dateDeSignature: string;
        /**
         * Indique si le mandat a été validé
         */
        hasBeenValidated: boolean;
        libellePayeur: string;
        estPayeursSecours: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IMandats {
        /**
         * Libellé du payeur
         */
        libellePayeur: string;
        /**
         * Payeur de secours ?
         */
        estPayeurSecours: boolean;
        /**
         * Liste des mandats
         */
        mandats: IMandat[];
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IPersonnePhysique {
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: boolean;
        /**
         * Ctfpse_CodeSexePers
         */
        codeSexePersonne: number;
        /**
         * Dtfpna_DateNais
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateNais: string;
        /**
         * EstEntrepreneurIndividuel
         */
        estEntrepreneurIndividuel: boolean;
        /**
         * Lbfpci_LiblTitrCivl
         */
        libelleTitreCivilite: string;
        /**
         * Lbfpnj_NomJeunFill
         */
        nomJeunFill: string;
        /**
         * Lbfpnm_NomRaisSocl
         */
        nomRaisonSociale: string;
        /**
         * Lbfppn_Prnm
         */
        prenom: string;
        titreLong: string;
        /**
         * ListRoles
         */
        listeRoles: Array<IRole>;
        /**
         * EntrepreneurIndividuel
         */
        entrepreneurIndividuel: IEntrepreneurIndividuel;
        /**
         * Signataire
         */
        signataire: ISignataire;
        /**
         * IdntActv
         */
        idActivite: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IProjet {
        /**
         * Cdfgme_CodeModlEstmVenl
         */
        codeModeleEstmVenl: string;
        /**
         * Cdfomp_CodeMiseOeuvrProjPro
         */
        codeMiseOeuvrProjetPro: number;
        /**
         * Cdfopa_CodePays
         */
        codePays: string;
        /**
         * Cifapp_CodePrscDossPres
         */
        codePrscDossierPres: number;
        /**
         * Cifocs_CoutObjtSaisCalcEnvl
         */
        coutObjetSaisieCalculEnvl: boolean;
        /**
         * Cifttv_TechVent
         */
        techniqueVent: number;
        /**
         * Ctfaen_TypeEngagement
         */
        typeEngagement: string;
        /**
         * Ctfaoc_OrigCommProj
         */
        origineCommissionProjet: number;
        /**
         * Ctfici_CanalDeDistribution
         */
        canalDeDistribution: string;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * Dtfgob_DateEstmVenl
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateEstmVenl: string;
        /**
         * GenreReamenagement
         */
        genreReamenagement: number;
        /**
         * Lbfcor_LibelleLong
         */
        precisionReglementaire: string;
        /**
         * Lbfiaa_LibelleModEstimation
         */
        libelleModEstimation: string;
        /**
         * Lbfoa2_AdrsLign3
         */
        adresseLigne3: string;
        /**
         * Lbfoa3_AdrsLign4
         */
        adresseLigne4: string;
        /**
         * Lbfoa4_CodePost
         */
        codePoste: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Lbfoa6_CompIntt
         */
        adresseLigne1Suite: string;
        /**
         * Lbfomo_LibelleMeta
         */
        libelleMeta: string;
        /**
         * Lbfpen_EnsgnPres
         */
        ensgnPres: string;
        /**
         * Lbni_LibelleLong
         */
        projetAFinancer: string;
        /**
         * LibelleCanalDeDistribution
         */
        libelleCanalDeDistribution: string;
        /**
         * LibelleOrigineCommProjet
         */
        libelleOrigineCommissionProjet: string;
        /**
         * LibelleMiseEnOeuvre
         */
        libelleMiseEnOeuvre: string;
        /**
         * LibelleTechniqueVente
         */
        libelleTechniqueVente: string;
        /**
         * Mtfgob_MtEstmVenl
         */
        montantEstmVenl: number;
        /**
         * Mtfofd_MtFrsDivr
         */
        montantFrsDivr: number;
        /**
         * Mtfoho_CoutTotlObjtHt
         */
        coutTotalObjetHt: number;
        /**
         * Mtfott_CoutTotlObjtTtc
         */
        coutTotalObjetTTC: number;
        /**
         * Cdfcni_TypeObjtFinn
         */
        typeObjetFinancier: string;
        /**
         * Ctfcor_TypeObjtRegl
         */
        typeObjetRegle: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
    }
}

declare namespace ICBusiness.Models.Edition {
    /**
     * Interface pour les données en retour du contrôle de l'édition
     */
    interface IRetourControleEdition {
        anomalies: ICBusiness.Models.Common.IAnomalieLecture;
        anomaliesControleAccessoireOffre: ICBusiness.Models.Common.IAnomalieLecture;
        anomaliesControleModaliteRecouvrement: ICBusiness.Models.Common.IAnomalieLecture;
        anomaliesControleMandats: ICBusiness.Models.Common.IAnomalieLecture;
        anomaliesControleEditionOffre: ICBusiness.Models.Common.IAnomalieLecture;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface IRole {
        /**
         * Ctfprp_TypeRolePersonne
         */
        typeRolePersonne: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
    }
}

declare namespace ICBusiness.Models.Edition {
    import RestModel = ICRest.Modeles.SaisiesComplementaires;
    interface IChampIhm {
        /**
         * Type
         */
        type: string;
        /**
         * Enabled
         */
        enabled: boolean;
        required: boolean;
    }
    interface IChampCacheIhm extends IChampIhm, RestModel.IChampCache {
    }
    interface IChampCheckBoxIhm extends IChampIhm, RestModel.IChampCheckBox {
        /**
         * Name
         */
        name: string;
    }
    interface IChampCheckBoxListIhm extends IChampIhm, RestModel.IChampCheckBoxList {
        /**
         * Propriété pour avoir les chekbox 'en individuel'
         */
        listeCheckBox: IChampCheckBoxIhm[];
    }
    interface IChampComboBoxIhm extends IChampIhm, RestModel.IChampComboBox {
        /**
         * Item sélectionné
         */
        selectedItem: Models.Common.ICodeLabel<number>;
        /**
         * Items
         */
        listeItems: Models.Common.ICodeLabel<number>[];
    }
    interface IChampLabelMultiLineIhm extends IChampIhm, RestModel.IChampLabelMultiLine {
    }
    interface IChampRadioButtonIhm extends IChampIhm, RestModel.IChampRadioButton {
        /**
         * Value
         */
        value: number;
        /**
         * Options
         */
        listeOptions: Models.Common.ICodeLabel<number>[];
    }
    interface IChampTextAreaIhm extends IChampIhm, RestModel.IChampTextArea {
    }
    interface IChampTextBoxIhm extends IChampIhm, RestModel.IChampTextBox {
    }
    interface IChampTextBoxDateIhm extends IChampIhm, RestModel.IChampTextBoxDate {
    }
    interface ILabelIhm extends IChampIhm, RestModel.ILabel {
        text: string;
    }
    interface ISaisieCreditIhm {
        idCreditModifie: string;
        montantCreditModifie: RestModel.IChampTextBox;
    }
    interface ISaisieCredit {
        idCreditModifie: string;
        montantCreditModifie: string;
    }
    interface IChampSpecifique<T> {
        value: T;
        label: string;
    }
    interface IChampSpecifiqueCombo extends IChampSpecifique<string> {
        listeItems: Models.Common.ICodeLabel<string>[];
        selectedItem: Models.Common.ICodeLabel<string>;
    }
    interface IDocumentComplementaireInfos {
        champsGeneriques?: IDonneeComplementaire[];
        champsSpecifiques?: IDonneesComplementairesSpecifiques;
    }
    interface IDonneesComplementairesSpecifiques {
        titre: string;
    }
    interface IFCM17Base extends IDonneesComplementairesSpecifiques {
        presenceEmprunteurIndividuel: IChampSpecifique<boolean>;
        libelleEmprunteurIndividuel: IChampSpecifique<string>;
        accordConjointEmprunteurIndividuel: IChampSpecifique<boolean>;
        libelleConjointEmprunteurIndividuel: IChampSpecifique<string>;
        raisonConstituantMandataire: IChampSpecifique<string>;
        nomMandataire: IChampSpecifique<string>;
        vertuMandataire: IChampSpecifique<string>;
        represPersonneMorale: IChampSpecifique<string>;
        agissantPersonneMorale: IChampSpecifique<string>;
        vertu1PersonneMorale: IChampSpecifique<string>;
        vertu2PersonneMorale: IChampSpecifique<string>;
        vertu3PersonneMorale: IChampSpecifique<string>;
        vertu4PersonneMorale: IChampSpecifique<string>;
        vertu5PersonneMorale: IChampSpecifique<string>;
        vertu6PersonneMorale: IChampSpecifique<string>;
        vertu7PersonneMorale: IChampSpecifique<string>;
        vertu8PersonneMorale: IChampSpecifique<string>;
        vertu9PersonneMorale: IChampSpecifique<string>;
        vertu10PersonneMorale: IChampSpecifique<string>;
        vertu11PersonneMorale: IChampSpecifique<string>;
        vertu12PersonneMorale: IChampSpecifique<string>;
        villeTribunal: IChampSpecifique<string>;
    }
    interface IFCM17GBM extends IFCM17Base {
        nomenclatureBien: IChampSpecifiqueCombo;
        biens: Array<IBien>;
        bienModele: IBien;
    }
    interface IFCM17OME extends IFCM17Base {
        outils: Array<IOutil>;
        outilModele: IOutil;
        represPreteurCE: IChampSpecifique<string>;
    }
    interface IBien {
        natureBien: IChampSpecifique<string>;
        quantiteBien: IChampSpecifique<string>;
        valeurBien: IChampSpecifique<string>;
        lieuSituationBien: IChampSpecifique<string>;
        marqueBien: IChampSpecifique<string>;
        numeroSerieBien: IChampSpecifique<string>;
    }
    interface IOutil {
        marqueOutil: IChampSpecifique<string>;
        typeOutil: IChampSpecifique<string>;
        dateLivraisonOutil: IChampSpecifique<string>;
        serieOutil: IChampSpecifique<string>;
        prixOutil: IChampSpecifique<string>;
        vendIntituleOutil: IChampSpecifique<string>;
        vendCpltIntituleOutil: IChampSpecifique<string>;
        vendAdresseOutil: IChampSpecifique<string>;
        vendCpltAdresseOutil: IChampSpecifique<string>;
        vendCPOutil: IChampSpecifique<string>;
        vendVilleOutil: IChampSpecifique<string>;
        adresseOutil: IChampSpecifique<string>;
        cpltAdresseOutil: IChampSpecifique<string>;
        cPOutil: IChampSpecifique<string>;
        villeOutil: IChampSpecifique<string>;
        deplacementOutil: IChampSpecifique<boolean>;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ISignataire {
        /**
         * ListEmailsContactsChoisissables
         */
        listeEmailsContactsChoisissables: Array<string>;
        /**
         * ListNumerosContactsChoisissables
         */
        listeNumerosContactsChoisissables: Array<string>;
        /**
         * EstAutoriseASigner
         */
        estAutoriseASigner: string;
        /**
         * Cifcps_AutoriseSignatureElectronique
         */
        autoriseSignatureElectronique: string;
        /**
         * TypeSignataire
         */
        typeSignataire: number;
        /**
         * Controles
         */
        controles: Array<ICBusiness.Models.Common.IVisibilite>;
        /**
         * EmailContact
         */
        emailContact: string;
        /**
         * NumeroContact
         */
        numeroContact: string;
        /**
         * EstSignataireEffectif
         */
        estSignataireEffectif: string;
        /**
         * Fonction pour savoir si le signataire est entrepreneur individuel
         */
        estEntrepreneurIndividuel: boolean;
    }
}

declare namespace ICBusiness.Models.Edition {
    interface ISignataires {
        /**
         * Signataires
         */
        signataires: Array<IPersonnePhysique>;
        /**
         * Anomalies
         */
        anomalies: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface IEmprunteur {
        id: string;
        denomination: string;
        estRattache: boolean;
        categorieEmprunteur: Common.ICodeLabel<string>;
        idEntiteTitulaire: string;
        estEmprunteurPhysique: boolean;
        personneMorale: IPersonneMorale;
        personnesPhysiques: Array<IPersonnePhysique>;
        garants: Array<IGarant>;
        tuteurs: Array<ITuteur>;
        nombrePersonnes: number;
        nombreEnfantsACharge: number;
        ageDesEnfants: number[];
        nombrePersonnesSupplementairesACharge: number;
        statutOccupationLogementActuel: Common.ICodeLabel<string>;
        conditionPrimoAccedantPtz: Common.ICodeLabel<string>;
        contratsEpargneLogement: Models.ContratEpargneLogement.IContratEpargneLogement[];
        encoursEpargneLogement: IEncoursDatas;
        fonctionnementDeCompteRecent: Models.Common.ICodeLabel<string>;
        presenceCompteDepotCERecent: boolean;
        fonctionnementDeCompteRecentGarants: IFonctionnementCompteRecentGarant[];
        codeDeviseEmprunteur: Models.Common.ICodeLabel<string>;
        histogrammeCredits: Models.Financement.IHistogrammeSynthese;
    }
    interface IEncoursDatas {
        data: Models.MontantEncoursEpargneLogement.IEncoursEpargneLogement;
        plafonds: Models.MontantEncoursEpargneLogement.IPlafondsEncoursEpargneLogement;
    }
    enum EnumGenre {
        Aucun = 65,
        Feminin = 70,
        Masculin = 77,
    }
    enum EnumTypeEntite {
        Client = 67,
        Prospect = 80,
        Tiers = 84,
    }
    interface IPersonne {
        id: string;
        identifiant: string;
        typeEntite: EnumTypeEntite;
        intitule: string;
        numeroSiren: string;
        estPhysique: boolean;
        estGarante: boolean;
        estPayeuse: boolean;
        estEmprunteur: boolean;
        estConjointNonEmprunteur: boolean;
        estAssocie: boolean;
        estRepresentantLegal: boolean;
        estProspect: boolean;
        listeComptesPrelevement: Common.ICodeLabel<string>[];
    }
    interface IPersonnePhysique extends IPersonne {
        id: string;
        dateNaissance: string;
        genre: EnumGenre;
        nomJeuneFille: string;
        nom: string;
        prenom: string;
        estEntrepreneurIndividuel: boolean;
        identifiantActivite: string;
        identifiantInterditBancaire: string;
        listeIdentifiantsOppositions: string[];
        codeRole: string;
        libelleRole: string;
        autoriseSignatureElectronique: boolean;
        libelleLienPersonneMorale: string;
        infosBDF: IInfosBDF;
    }
    interface IInfosBDF {
        etatFCCAJour: boolean;
        etatBDFAJour: boolean;
        interditFICP: boolean;
        obligatoireFICP: boolean;
    }
    interface IPersonneMorale extends IPersonne {
        listeRepresentants: IPersonne[];
    }
    interface IGarant {
        id: string;
        personne: IPersonnePhysique | IPersonneMorale;
    }
    interface IFonctionnementCompteRecentGarant {
        idGarant: string;
        fonctionnementDeCompteRecent: Models.Common.ICodeLabel<string>;
        label: string;
    }
    interface ITuteur extends IPersonnePhysique {
        idwsTuteur: string;
        libelleTuteur: string;
    }
    interface IDetailPersonne {
        adresse: Common.IAddress;
        email: string;
        telephoneFixe: string;
        telephonePortable: string;
        dateCreation: string;
        numeroInscriptionRcs: string;
        dateInscriptionRcs: string;
        villeInscriptionRcs: string;
        intituleAdresse: string;
        numeroTeleProf: string;
        numeroTelePersonne: string;
        numeroTcpyProf: string;
    }
    interface IDetailPersonnePhysique extends IPersonnePhysique, IDetailPersonne {
        dateEffetSituationFamiliale: string;
        dateEntreeLogement: string;
        libelleCapaciteJuridique: string;
        libelleClauseRegimeMatrimonial: string;
        libelleLieuResidence: string;
        libelleModeLogement: string;
        libelleRegimeMatrimonial: string;
        libelleRoleRepresentant: string;
        libelleSituationFamiliale: string;
        libelleTypeNationalite: string;
        libelleLocaliteNaissance: string;
        telephoneProfessionnel: string;
        employeurCommun: Models.Common.ICodeLabel<number>;
        activite: IActivite;
    }
    interface IDetailPersonneMorale extends IPersonneMorale, IDetailPersonne {
        formeJuridique: string;
    }
    interface IActivite {
        codePostalEmployeur: string;
        dateEffetCategorieSocioProfessionnelle: string;
        dateEmbauche: string;
        dateFinCdd: string;
        estSalarie: boolean;
        idws: string;
        libelleCategorieSocioProfessionnelle: string;
        libelleSecteurActivite: string;
        libelleTypeContrat: string;
        nombreKilometreLogementTravail: number;
        raisonSocialeEmployeur: string;
    }
    interface IRattachementEmprunteur {
        idws: string;
        codeDestinataireAutreParObjet: number;
        listeAnomalies: Models.Common.IAnomalieLecture[];
    }
    interface IEmprunteurElement {
        isAssociationsEtSyndicats: boolean;
        isMarcheSpecialise: boolean;
        codeTypeMarche: number;
        idEntiteTitulaire: string;
        codeTypeMarchePersonne: number;
    }
}

declare namespace ICBusiness.Models.EntiteTitulaire {
    interface IEntiteTitulaire {
        identifiantEntiteTitulaire: number;
        codeEtablissement: string;
        designationEntiteTitulaire: string;
        codeUsageEntiteTitulaire: string;
        modeCompositionEntiteTitulaire: string;
        codeEtatEntiteTitulaire: string;
        modeCompositionIndivision: string;
        complementDesignationEntiteTitulaire: string;
        identifiantEDSDomiciliation: number;
        referenceEDSDomiciliation: number;
        libelleEDSDomiciliation: string;
        dateFermetureEntiteTitulaire: string;
        codePresenceDansRpmOuFds: string;
    }
    interface IInformationEntiteTitulaire {
        caracteristiqueEntiteTitulaire: ICaracteristiqueEntiteTitulaire;
        compositionEntiteTitulaire: ICompositionEntiteTitulaire;
        libelleType: string;
        designationEntiteTitulaire: string;
        listeCompositionEntiteTitulaire: IPersonneEntiteTitulaire[];
    }
    interface ICompositionEntiteTitulaire {
        listePersonneTitulaire: Array<IPersonneEntiteTitulaire>;
        listePersonneUsufruitier: Array<IPersonneEntiteTitulaire>;
        listePersonneMandataire: Array<IPersonneEntiteTitulaire>;
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
        refExterneEDSGestionET: number;
        refExterneEDSDomiciliationET: number;
        codeTypeDesignationEntiteTitulaire: string;
        typeElementStructure: string;
        identEDSGestionETNouveau: number;
        identEDSDomiciliationETNouveau: number;
        identifiantEDSGuichet: number;
    }
    interface IPersonneEntiteTitulaire {
        identifiantTiers: number;
        identifiantProfessionnel: number;
        identifiantLieuActivite: number;
        nomCommercialProfessionnel: string;
        enseigneCommercialeLieuActivite: string;
        designationCourteLieuActivite: string;
        indicateurResponsableCompteET: string;
        codeRangEntiteTitulaire: string;
        designationTiers: string;
        natureLienET: string;
        pourcentageNuePropriete: number;
        pourcentagePleinePropriete: number;
        pourcentageUsufruit: number;
        indicateurAffectationAdresse: boolean;
        typeMandat: string;
        libelleType: string;
        affichage: boolean;
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    /**
     * P(80): Conservé - A(65): Non conservé - F(70): Futur
     */
    enum EnumBudgetStatus {
        conserve = 80,
        nonConserve = 65,
        futur = 70,
    }
    /**
     * E(69) : Emprunteur - C(67) : Garant
     */
    enum EnumRolePersonneCredit {
        emprunteur = 69,
        garant = 67,
    }
    /**
     * 1 : Consommation - 2 : Trésorerie - 3 : Habitat - 9 : Revolving
     */
    enum EnumTypeCredit {
        consommation = 1,
        tresorerie = 2,
        habitat = 3,
        revolving = 9,
    }
    interface IBudgetItem {
        id: string;
        type: Models.Common.ICodeLabel<string>;
        personne: Models.Common.ICodeLabel<string>;
        montantMensuel: number;
        montantPeriodique: number;
        montantAnnuel: number;
        nombrePeriodeParAn: number;
        tauxPondere: number;
        status: Models.Common.ICodeLabel<string>;
        codeDevise: string;
        estRevenu: boolean;
        estCreditExistant?: boolean;
        estLieAEmprunteur: boolean;
        phaseIds?: string[];
        isPensionAlimentaireVersee?: boolean;
        montantDateDuJour?: number;
    }
    interface ICreditExistant {
        dateDebutAmortissement: string;
        dureeAmortissement: number;
        estInvestissementUsageLocatif: boolean;
        estProduitCE: boolean;
        id: string;
        investissementUsageLocatifVisible: boolean;
        labelPreteur: string;
        montantEmprunte: number;
        montantRestantDu: number;
        motifRemboursementAnticipe: Models.Common.ICodeLabel<string>;
        precisionMotifRemboursementAutre: string;
        nombreImpayes: number;
        nombreRegularises: number;
        numeroCredit: string;
        rolePersonne: EnumRolePersonneCredit;
        type: Models.Common.ICodeLabel<EnumTypeCredit>;
        phases: IPhase[];
        isStepTwo: boolean;
        estCreditCautionneHorsEtablissement: boolean;
    }
    interface IPhase {
        dateDebut: string;
        dateFin: string;
        duree: number;
        id: string;
        montantEcheance: number;
        periodicite: Models.Common.ICodeLabel<string>;
        type: Models.Common.ICodeLabel<string>;
        isOpened: boolean;
    }
    interface IRevenuFiscal {
        id: string;
        label: string;
        montantAnnuel: number;
        type: number;
        codeDevise: string;
    }
    interface ISyntheseFinanciere {
        revenusAnnuels: number;
        revenusMensuels: number;
        chargesAnnuels: number;
        chargesMensuels: number;
        chargesAnnuelsOctroi?: number;
        chargesMensuelsOctroi?: number;
        ratioResteAVivre: number;
        resteAVivreMensuel: number;
        ratioEndettement: number;
        indiceResteAVivre: number;
    }
    interface IRevenusCharges {
        revenusEmprunteurs: IBudgetItem[];
        chargesEmprunteurs: IBudgetItem[];
        revenusGarants: IBudgetItem[];
        chargesGarants: IBudgetItem[];
        totalRevenusMensuelsHorsFutur: number;
        totalChargesMensuellesHorsFuture: number;
        revenusFiscaux: IRevenuFiscal[];
    }
}

declare namespace ICBusiness.Models.Emprunteur {
    interface ICompte {
        id: string;
        type: string;
        label: string;
        labelEntiteTitulaire: string;
        personne: Models.Common.ICodeLabel<string>;
        dateOuverture: string;
        estProduitCE: boolean;
        codeDevise: string;
        soldeMinimumLongTerme?: number;
        soldeMoyenCourtTerme?: number;
        soldeMoyenLongTerme?: number;
        moyenDePaiement?: boolean;
        estComptePro?: boolean;
        nombreDeJoursDeDepassement?: number;
        contentieuxOuImpaye?: boolean;
    }
    interface ICompteHorsCe extends ICompte {
        etablissement: Models.Common.ICodeLabel<string>;
        montantAutorisationDecouvert: number;
        modeDeComposition: Models.Common.ICodeLabel<number>;
        soldeArreteM1: number;
        soldeArreteM2: number;
        soldeArreteM3: number;
        montantAgiosM1: number;
        montantAgiosM2: number;
        montantAgiosM3: number;
        nombreJoursDebiteursM1: number;
        nombreJoursDebiteursM2: number;
        nombreJoursDebiteursM3: number;
        presenceFraisForcageCommissionIntervention: number;
        presenceImpayes: number;
        presenceRejetCheques: number;
        presenceRejetPrelevement: number;
        presenceFraisBdf: number;
        fonctionnementCompte: Models.Common.ICodeLabel<string>;
    }
    interface IEpargne {
        id: string;
        type: Models.Common.ICodeLabel<string>;
        labelEtablissement: string;
        personne: Models.Common.ICodeLabel<string>;
        montantAvantOperation: number;
        montantApresOperation: number;
        montantApport: number;
        estProduitCE: boolean;
        codeDevise: string;
    }
    interface IDetailSyntheseEpargne {
        totalEpargneContractuelle: number;
        partEpargneLogement: number;
        capaciteMensuelleEpargneAvantOperation: number;
        totalEpargneLiquide: number;
    }
    interface IPatrimoineEmprunteur {
        valeurPatrimoineImmobilier: number;
        montantPatrimoineMobilier: number;
    }
    interface ISurfaceFinanciere {
        comptesCeEmprunteurs: ICompte[];
        comptesHorsCeEmprunteurs: ICompte[];
        comptesCeGarants: ICompte[];
        comptesHorsCeGarants: ICompte[];
        epargnesCeEmprunteurs: IEpargne[];
        epargnesHorsCeEmprunteurs: IEpargne[];
        epargnesCeGarants: IEpargne[];
        epargnesHorsCeGarants: IEpargne[];
        detailSyntheseEmprunteurs: IDetailSyntheseEpargne;
        detailSyntheseGarants: IDetailSyntheseEpargne;
        patrimoineEmprunteurs: IPatrimoineEmprunteur;
        patrimoineGarants: IPatrimoineEmprunteur;
    }
}

declare namespace ICBusiness.Models.Tiers {
    interface IIdentification {
        isPersonnePhysique: boolean;
    }
    interface ICodeMarche {
        codeMarche: string;
        libelleLongCodeMarche: string;
        libelleCourtCodeMarche: string;
        libelleFamilleCodeMarche: string;
    }
    interface IDonneeIdentification {
        codeEtablissement: string;
        identifiantPersonne: number;
        codePersonnaliteJuridique: string;
        libellePersonnaliteJuridique: string;
        codeEtatPersonne: string;
        codeTypeRelation: string;
        libelleTypeRelation: string;
        dateEntreeRelation: string;
    }
    interface ILutteAntiBlanchiment {
        codeAlerteVAO: boolean;
        messageAlerteVAO: string;
    }
    interface ISuiviCommercial {
        identifiantEDSSuiviCommercial: number;
        typeEDSSuiviCommercial: string;
        referenceExterneEDSSuiviCommercial: number;
        identifiantAgent: number;
        designationCourteEDS: string;
        designationLongueEDS: string;
    }
}

declare namespace ICBusiness.Models.Intervenants {
    import RestModel = ICRest.Modeles.SchemaComplet;
    interface IIntervenantsComplet {
        emprunteur: RestModel.IEmprunteurComplet;
        garants: RestModel.IGarantComplet[];
        tuteurs?: RestModel.ITuteurComplet[];
    }
}

declare namespace ICBusiness.Models.TypeRessource {
    interface ITypeRessource {
        type: string;
        label: string;
        tauxPondere: number;
    }
}

declare namespace ICBusiness.Models.Endettement {
    interface IEndettementFinancement {
        indiceResteAVivre: number;
        mntRAVParPersonne: number;
        mntResteAVivre: number;
        tauxEndettement: number;
    }
    interface IEndettementDecision {
        debtToIncome: number;
        resteAVivre: number;
        tauxEndettement: number;
        resteAVivreParPersonne: number;
    }
}

declare namespace ICBusiness.Models.EntiteExterne {
    interface IDossierDEFI {
        numeroDemandeDEFI: string;
        numeroConcoursDEFI: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IIdentifiantsAccessoire {
        idws: string;
        idwsExterne: string;
    }
    interface IAccessoireTiersAjout {
        idCatlParametreRverTiers: string;
        intitule: string;
        roleTiers: string;
    }
    interface IAccessoire {
        idws: string;
        frais: IFraisAccessoire;
        fraisFinance: number;
        libelleBeneficiaire: string;
        codeBeneficiaire: string;
        libelleTypeAssiette: string;
        codeTypeAccessoire: string;
        codeTypeAssiette: number;
        idCatlParametreRverTiers: string;
        estAccessoireLieProduit: boolean;
        estObligatoire: boolean;
        libelleFrais: string;
        controles: IAccessoireControles;
        phasesControles: IAccessoirePhasesControles;
        idCredit: string;
        periodicite: number;
        libellePeriodicite: string;
        nombrePeriodes: number;
        codeSousTypeAccessoire: string;
        listeMontantsSouhaite: number[];
        listeTauxSouhaite: number[];
        saisieMontantEtTaux: boolean;
        codeDevise: string;
    }
    interface IFraisAccessoire {
        tauxConseille: number;
        tauxSouhaite: number;
        montantConseille: number;
        montantSouhaite: number;
        montantRetenu: number;
        tauxRetenu: number;
        montantMin: number;
        montantMax: number;
        pasMontant: number;
        tauxMin: number;
        tauxMax: number;
    }
    interface IAccessoireControles {
        tauxSouhaite: Models.Common.IVisibilite;
        tauxConseille: Models.Common.IVisibilite;
        montantSouhaite: Models.Common.IVisibilite;
        montantConseille: Models.Common.IVisibilite;
        typeAssiette: Models.Common.IVisibilite;
        beneficiaire: Models.Common.IVisibilite;
        montant: Models.Common.IVisibilite;
        periodicite: Models.Common.IVisibilite;
        finance: Models.Common.IVisibilite;
        tiersAccessoire: Models.Common.IVisibilite;
    }
    interface IAccessoirePhasesControles {
        amortissement: Models.Common.IVisibiliteSelectionne;
        prefinancement: Models.Common.IVisibiliteSelectionne;
        differeAmortissement: Models.Common.IVisibiliteSelectionne;
        differeTotal: Models.Common.IVisibiliteSelectionne;
        mobilisation: Models.Common.IVisibiliteSelectionne;
    }
    interface IAccessoireLieProduit extends IAccessoire {
        /** Identifiant du produit financier associé */
        identifiantProduitFinance: string;
    }
    interface IAccessoireComplementaire extends IAccessoire {
        /** Type d'objet financé */
        codeSousType: string;
        intitule: string;
        roleTiers: string;
    }
    interface IListerTiersAccesoire {
        idCaisseEpargne: number;
        identifiantTiers: string;
        typeRolePersonne: string;
        intitule: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePostal: string;
        localite: string;
    }
    interface IListeRoleTiersAccessoire {
        idCaisseEpargne: number;
        codeSousTAccessoireComplement: string;
        typeRolePersonne: string;
        roleLint: string;
    }
    interface IMiseAJourAccessoireCommonRequest {
        identifiantDossier: string;
        idwsCredit: string;
        montant: number;
        taux: number;
        nombrePaiement: number;
        tsIdwsCreditPhase: Array<string>;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IDroitsAcquis {
        id: number;
        prisEnCompte: Models.Common.ICodeLabel<boolean>;
        tauxEpargne: number;
        tauxPret: number;
        lienParente: Models.Common.ICodeLabel<string>;
        droitsAcquis: number;
        droitsUtilises: number;
        montantPret: number;
        droitLimites: number;
        idwsTrancheEL: string;
        capMaximumOct: number;
        cdfadv: string;
        contratPosteReforme: boolean;
        dateArrete: string;
        dateOuvertureContrat: string;
        droitUtilisable: boolean;
        echMaximumOct: number;
        idContrat: string;
        montantEchUtilise: number;
    }
    interface IDroitsAPret {
        id: number;
        duree: number;
        tauxMoyen: number;
        montantMax: number;
        mensualite: number;
        coutAvecAccessoire: number;
        coutHorsAccessoire: number;
        echAvecAccessoire: number;
    }
    interface IResultatCalculEL {
        droitsAcquis: IDroitsAcquis[];
        hasAlertePrime: boolean;
        labelAlertePrime: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IAjustementTaux {
        remiseMajoration: number;
        nouvelleRemiseMajoration: number;
        tauxActuel: number;
        tauxBonificationMajoration: number;
        tauxConseillePondere: number;
        margeRevision: number;
        remiseTaux: boolean;
        changementTauxConseille: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditBonification {
        idws: string;
        idConvention: string;
        libelleLongConvention: string;
        montantTotal: number;
    }
    interface IConventionBonification {
        idConvention: string;
        libelleLongConvention: string;
        libelleTypePartenaire: string;
        idIntervenant: string;
    }
    interface IRegleEligibilite {
        dureeCredit: number;
        montantMinimumCredit: number;
        montantMaximumCredit: number;
        tauxCredit: number;
    }
    interface ICreditBonificationDetail extends ICreditBonification {
        nomPartenaire: string;
        hasError: boolean;
        montantPartenaire: number;
        montantEtablissement: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICalculCredit {
        credit: ICreditLecture;
        listeAnomalies: string[];
    }
    interface ICreditLecture {
        montantMensualite: number;
        libelle: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICalculModulationCredit {
        anneeDeDepart: number;
        dureeModulation: number;
        modulationEcheance: Common.ICodeLabel<number>;
        montantModulation: number;
    }
    interface IResultatCalculModulationCredit {
        listeEcheance: IEcheanceModulation[];
        resultatCout: number;
        variationDuree: number;
        resultatDuree: number;
        montantDerniereEcheance: number;
        tegApresModulation: number;
    }
    interface IEcheanceModulation {
        annee: number;
        montantEcheance: number;
        montantAssurance: number;
        periode: number;
        cRD: number;
        valeurModulation: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICalculRevisionCredit {
        revisionTaux: number;
        revisionTauxDate: number;
        ajustementDuree: Common.ICodeLabel<number>;
        valAjustDuree: number;
    }
    interface IResultatCalculRevisionCredit {
        anomalies: Models.Common.IAnomalieLecture[];
        dureeApresRevision: string;
        dureeProlongation: string;
        echeance: number;
        echeanceAugmente: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IControleAppelSGFGAS {
        /**
         * ListAno
         */
        listeAno: Common.IAnomalieLecture[];
        /**
         * DevisEcoPTZ
         */
        devisEcoPTZ: boolean;
        /**
         * CreationDossierSGFGAS
         */
        creationDossierSGFGAS: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditComplementaire {
        idws: string;
        libelle: string;
        montantRestantDu: number;
        montantCharge: number;
        codeDevise: string;
        dureAmortissement: number;
        tauxCalcule: number;
    }
    interface ICreditComplementaireDetail extends ICreditComplementaire {
        typeCharge: string;
        tauxPondereCharge: number;
        nombrePeriodeParAn: number;
        codeExisteRessourceApreOper: number;
        integreLissage: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditExistant {
        idws: string;
        libelleTypeCredit: string;
        libelleEntiteTitulaireCE: string;
        montantCapitalDejaRemboursement: number;
        codeDevise: string;
        montantPrcheche: number;
        dureAmortissement: number;
    }
    interface ICreditExistantDetail extends ICreditExistant {
        libletblPret: string;
        dateFinCredit: string;
        manqueInfoCharge: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditExterne {
        idws: string;
        /** Organisme preteur */
        libletblPret: string;
        /** Libellé produit */
        libelleLibrSurConcr: string;
        naturePret: Common.ICodeLabel<number>;
        montantCapital: number;
        periodicite: Common.ICodeLabel<string>;
        dureAmortissementMois: number;
        montantEcheanceAmortissement: number;
        periodiciteDifferee: Common.ICodeLabel<string>;
        dureDiffereMois: number;
        mtecheDiffere: number;
        typeDeRemboursement: Common.ICodeLabel<number>;
        natureGarantie: Common.ICodeLabel<number>;
        tegActu: number;
        /** Assurance perte d'emploi */
        codeIndicePresAssurancePertEmpl: number;
        /** Taux révisable */
        codeIndiceTauxRevision: number;
        codeDevise: string;
        tauxAmortissement: number;
        codeIndiceInterieurTantPPersonne: number;
    }
    interface IResultatCalculCaracteristique {
        capital: number;
        echeance: number;
        taux: number;
        nombrePeriode: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditInterneBase {
        id: string;
        idProduitFinancier: string;
        estManuel: boolean;
    }
    interface ICreditInterneAjustable extends ICreditInterneBase {
        idPlan: string;
        libelleNomPret: string;
        produitFinancier: IProduitFinancier;
        tauxFuture: ITauxIndice;
        ajustementTaux: IAjustementTaux;
    }
    interface ICreditInterne extends ICreditInterneBase {
        libelleNomPret: string;
        montantEcheanceMax: number;
        codePeriodicite: number;
        periodicite: string;
        dureeTotaleCredit: number;
        dureeTotaleCreditAnnee: number;
        dureeTotaleCreditSelected: Common.ICodeLabel<number>;
        saisieManuelleDureeTotaleCredit: boolean;
        listeDureeTotale: Common.ICodeLabel<number>[];
        tauxAffiche: number;
        margeRevision: number;
        montantEcheance: number;
        produitFinancier: IProduitFinancier;
        tegActControle: Models.Common.IVisibilite;
        tegProControle: Models.Common.IVisibilite;
        margeControle: Models.Common.IVisibilite;
        margeFutureControle: Models.Common.IVisibilite;
        tauxActuarielControle: Models.Common.IVisibilite;
        tauxProportionnelControle: Models.Common.IVisibilite;
        doitCalculer: boolean;
        montantCapital: number;
        teg: number;
        tauxUsure: number;
        hasErreurTeg: boolean;
        idCreditGestion: string;
        /** Montant des frais de dossier */
        montantFraisDossier: number;
        /** Montant des frais de garanties */
        montantFraisGaranties: number;
        /** Montant des frais d'assurances */
        montantFraisAssurances: number;
        /** Liste des accessoires liés au produit */
        listeAccessoiresLies: IAccessoireLieProduit[];
        /** Liste des accessoires complémentaires */
        listeAccessoireComplementaires: IAccessoireComplementaire[];
        codeDevise: string;
        dateFinCredit: string;
        listeNaturesGarantieCouvertes: string[];
        montantContrevaleurEuro: number;
        listPhaseIdws: string[];
        tauxMontage: number;
        infoPTZ: IInfoPTZ;
        infoPelCel: IInfoPelCel;
        montantMaximumPretPVH: number;
        montantProjetDefi: number;
        coutTotalCredit: number;
        montantEcheanceRevision: number;
        tauxMoyenProp: number;
        estRevisable: boolean;
        tegModeRestitution: Models.Common.CodeLabel<number>;
        conventionBonification: ICreditBonification;
        estBonifiable: boolean;
        estAjustable: boolean;
    }
    interface ITauxIndice {
        marge: number;
        valeurIndice: number;
    }
    interface IInfoPTZ {
        modeCalculTaux: Models.Common.ICodeLabel<string>;
        montantMinimumPTZ: number;
        montantReglePTZ: number;
        montantPTZVerrouille: boolean;
        dureePTZVerrouillee: boolean;
        phaseDiffTotal: IPhasePTZ;
        phaseAmortissement: IPhasePTZ;
    }
    interface IPhasePTZ {
        idws: string;
        dureePhase: number;
        dureePhaseRecommandee: number;
        dureePhaseMin: number;
        dureePhaseMax: number;
        dureePhasePas: number;
        dureePhaseLibellePeriodicite: string;
    }
    interface IInfoPelCel {
        estPEL: boolean;
        coutProjet: number;
        resteAFinancer: number;
        montantMaxAutorisePEL: number;
        montantMaxAutoriseCEL: number;
        montantMaxAutorisePELCEL: number;
        montantPret: number;
        tauxActuariel: number;
        echeanceHorsAssurances: number;
        dureeCredit: number;
    }
}

declare module ICBusiness.Models.Financement {
    interface ICreditPhaseModel {
        listePhases: ICreditPhase[];
        libelleCredit: string;
        montantCapitalCredit: number;
        tauxNbDecimals: number;
        codeDevise: string;
    }
    interface IEchelleVersement {
        libelleEchelle: string;
        codeTypeAssiette: number;
        montantConvenu: number;
    }
    interface ICreditPhase {
        id: string;
        idws: string;
        nombrePeriodePhase: number;
        codeTypePhase: string;
        numeroRelationPhase: number;
        montantPremiereEcheance: number;
        nombrePeriodePhaseInitial: number;
        dureePhaseMin: number;
        dureePhaseMax: number;
        dureePhasePas: number;
        priseEnCompte: boolean;
        obligatoire: boolean;
        libelle: string;
        mensualite: number;
        reduction: boolean;
        periodicite: Common.ICodeLabel<string>;
        taux: number;
        personnalisable: boolean;
        listeChoixPeriode: Common.ICodeLabel<number>[];
        listePeriodicite: Common.ICodeLabel<string>[];
        periodeEstListe: boolean;
        estTauxDirecteur: boolean;
        tauxMin: number;
        tauxMax: number;
        paiementInterets: TypePaiementInterets;
        interetsDifferes: boolean;
        choixCapitalisation: boolean;
        choixRecouvrement: boolean;
        capitActive: boolean;
        modeCapiInterets: Common.ICodeLabel<string>;
        listeModeCapitalisation: Common.ICodeLabel<string>[];
        recouvActive: boolean;
        modeRecouviInterets: Common.ICodeLabel<string>;
        modeCapitalRecouvrementInterets: number;
        listeModeRecouvrement: Common.ICodeLabel<string>[];
        quotientAmortissementSimple: number;
        quotientAmortissementMin: number;
        quotientAmortissementMax: number;
        typePretCombine: TypePretCombine;
        peutEtreActive: boolean;
        pretCombine: Common.ICodeLabel<number>;
        quotiteAmortissement: IQuotiteAmortissement;
        nombrePhaseAmortissement: number;
        quotientMaxMontantFin: number;
        parametreRevision: IParametreRevision;
        listePalierProgressifs: IPalierProgressif[];
        estVisibleTaux: boolean;
        estVisibleMarge: boolean;
        estActifDuree: boolean;
        estActifPeriodicite: boolean;
        estActifTaux: boolean;
        estActifMarge: boolean;
        estVisibleButoirHausse: boolean;
        estVisibleButoirBaisse: boolean;
        estActifButoirHausse: boolean;
        estActifButoirBaisse: boolean;
        estVisibleTauxHausse: boolean;
        estVisibleTauxBaisse: boolean;
        tauxFixe: number;
        tauxPhase: number;
        repart: number;
        marge: number;
        majorBonif: number;
        modeButoirHausse: string;
        dateButoirHausse: string;
        modeButoirBaisse: string;
        dateButoirBaisse: string;
        estVisibleQuotite: boolean;
        estActifQuotite: boolean;
        estActifJeuxDeParametres: boolean;
        estVisibleJeuxDeParametres: boolean;
    }
    interface IQuotiteAmortissement {
        idws: string;
        modePaiementMontantInteret: Common.ICodeLabel<number>;
        quotientAmortissement: number;
        montantAmortissement: number;
        montantInFine: number;
    }
    interface IParametreRevision {
        idws: string;
        idLoiRevision: string;
        numeroJeuxIndiceRevisionAssuranceCredit: number;
        jeuDeParametre: Common.ICodeLabel<number>;
        listeJeuDeParametre: Common.ICodeLabel<number>[];
        codeIndicecheReclame: number;
        modeExpressionButoireTauxBaisse: number;
        modeExpressionButoireTauxHausse: number;
        valeurButoireTauxBaisse: number;
        valeurButoireTauxHausse: number;
        libelleLoiRevision: string;
        idCreditIntr: string;
        listeIdParametreIndex: Array<string>;
        codeTypePhaseAssuranceParametreRevision: string;
        paramIndexationHausse: IParamIndexation;
        paramIndexationBaisse: IParamIndexation;
        paramIndexation: IParamIndexation;
    }
    interface IParamIndexation {
        typeRolIndice: string;
        modeExpressionUtilisationIndice: number;
        valeurReferenceIndice: number;
    }
    interface IPalierProgressif {
        idws: string;
        numeroPhase: number;
        debut: number;
        fin: number;
        dureeMois: number;
        periodicite: Common.ICodeLabel<string>;
        taux: number;
        modeExpressionTaux: Common.ICodeLabel<number>;
        listeModeExpressionTaux: Common.ICodeLabel<number>[];
        CTFCAM: number;
    }
    type TypePaiementInterets = "capitalisation" | "recouvrement" | "";
    type TypePretCombine = "NComb" | "Transf" | "2en1FR" | "2en1VR";
}

declare namespace ICBusiness.Models.Financement {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface IFamilleProduit {
        label: string;
        listeProduit: IProduit[];
    }
    interface IProduit {
        label: string;
        codeFamilleProduit: string;
        numeroRelationProduit: string;
        estPel: boolean;
        estCel: boolean;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IFrais {
        codeTypeAccessoire: string;
        codeSousTypeAccessoire: string;
        libelleLong: string;
        estLieProduit: boolean;
        obligatoire: boolean;
    }
}

declare namespace ICBusiness.Models.Financement.Optimisation {
    interface ICriteresOptimisation {
        modalite: Models.Common.ICodeLabel<string>;
        idwsPlanFinancement: string;
        montantEcheanceMaxi?: number;
        tauxEndtMaximum?: number;
        endettementResultant?: number;
        echeanceResultante?: number;
        inclureAssurance?: boolean;
        lissageTotal?: boolean;
        listeCritereCredit: ICriteresOptimCredit[];
        listePaliers: IPalierContraint[];
    }
    interface ICriteresOptimCredit {
        idwsCredit: string;
        dureeFixe?: boolean;
        inclureCreditPriorite?: boolean;
        estLissage: boolean;
    }
    interface IPalierContraint {
        idws: string;
        dateDebutPeriode: string;
        dateFinPeriode: string;
        montantEcheance: number;
        dureePalier: number;
    }
    interface ICapaciteRemboursement {
        /**
         * TauxEndettement
         */
        tauxEndettement: number;
        /**
         * MontantResteAVivre
         */
        montantResteAVivre: number;
        /**
         * MontantEcheance
         */
        montantEcheance: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IPlanFinancementMajRequest {
        id: string;
        idProjet: string;
        montantProjet: number;
        montantApport: number;
    }
    /**
     * Données en retour de l'ajout d'un plan de financement
     */
    interface IRetourPlanFinancementAjout {
        id: string;
    }
    /**
     * Données de lecture d'un plan de financement
     */
    interface IPlanFinancement {
        id: string;
        /** Numero du plan de financement dans la proposition */
        numero: number;
        /** Libellé du type d'objet commercialisé */
        labelToc: string;
        /** Libellé du type d'objet réglementaire  */
        labelTor: string;
        /** Libellé du méta */
        labelMeta: string;
        /** Montant du projet  */
        montantProjet: number;
        /** Montant de l'apport */
        montantApport: number;
        /** Montant de l'échéance */
        montantEcheance: number;
        /** Durée totale en mois */
        dureeTotale: number;
        /** Liste des crédits internes */
        listeCreditsInterne: ICreditInterne[];
        listeCreditsExterne: ICreditExterne[];
        /** Reste à financer */
        resteFinancer: number;
        listeAssurances: Assurances.IAssurance[];
        listeGaranties: Garanties.IGarantie[];
        calcAFaire: boolean;
        montantTotal: number;
        dureePlan: number;
        montantMensualiteAvecAssurance: number;
        idSynthese: string;
        listeCreditsComplementaire: ICreditComplementaire[];
        idProduitFinancierAtoutClic: string;
        listeCreditExistant: ICreditExistant[];
        presenceLissage: boolean;
        montantAtoutClic: number;
    }
    interface IProduitFinancier {
        dureeMinimum: number;
        dureeMaximum: number;
        dureeAutre: number;
        pasDuree: number;
        montantMinimum: number;
        montantMaximum: number;
        pasMontant: number;
        qutotiteFinancementAutorise: number;
        montantMinimumVersement: number;
        codeFamilleControle: string;
        estECOPATZ: boolean;
        estPATZ: boolean;
        estPEL: boolean;
        estCEL: boolean;
        estLissage: boolean;
        estModulable: boolean;
        estTauxDirecteur: boolean;
        commentaireProduit: string;
        listeConditionTauxAssuranceProduit: IConditionTauxAssuranceProduit[];
    }
    interface IConditionTauxAssuranceProduit {
        dureeMinimumPlageConditionTaux: number;
        dureeMaximumPlageConditionTaux: number;
        tauxMoyenMinimumCredit: number;
        tauxMoyenMaximumCredit: number;
        tauxMoyenConsolideCredit: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface IProposition {
        planIdws: string;
        synthesePlanIdws: string;
        numeroPlan: number;
        montant: number;
        echeance: number;
        duree: number;
        resteAfinancer: number;
        aCalculer: boolean;
        codeDevise: string;
        labelToc: string;
        labelTor: string;
        coutTotalObjet: number;
    }
}

declare namespace ICBusiness.Models.Financement {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface ITableauAmortissement {
        flux: string;
    }
}

declare namespace ICBusiness.Models.Financement {
    interface ICreditSynthese {
        id: string;
        label: string;
        montant: number;
        cout: number;
        codeDevise: string;
        echeances: IEcheanceCreditSynthese[];
        paliersEcheance: IPalierEcheanceSynthese[];
        /** uniquement pour les crédits internes */
        estRelais?: boolean;
        estLissage?: boolean;
        phases?: IPhaseCreditSynthese[];
        justificationsTeg?: IJustificationTegCreditSynthese;
        taux?: number;
        typeTaux?: Models.Common.ICodeLabel<string>;
        /** uniquement pour les crédits externes */
        premiereMensualiteAmortissement?: number;
        dureeAmortissement?: number;
    }
    interface IPhaseCreditSynthese {
        typePhase: string;
        label: string;
        duree: number;
        taux: number;
        mensualite: number;
        assurance: number;
        estPremierMois: boolean;
    }
    interface IEcheanceCreditSynthese {
        numero: number;
        montant: number;
    }
    interface IJustificationTegCreditSynthese {
        messages: string[];
        listeFrais: IFraisCreditSynthese[];
    }
    interface IFraisCreditSynthese {
        label: string;
        messages: string[];
    }
    interface ISyntheseProjet {
        codeDevise: string;
        coutTotalProjet: number;
        premiereMensualite: number;
        dureeTotale: number;
    }
    interface IPalierEcheanceSynthese {
        debut: number;
        fin: number;
        montant: number;
    }
    interface IHistogrammeSynthese {
        date: string;
        totalCharge: number;
        codeDevise: string;
        credits: IHistogrammeCreditSynthese[];
    }
    interface IHistogrammeCreditSynthese {
        idCredit: string;
        typeCredit: number;
        montant: number;
        codeDevise: string;
        libelle: string;
        taux: number;
        libelleEtabPret: string;
    }
    interface ISyntheseFinancement {
        id: string;
        numeroProposition: number;
        libelle: string;
        coutTotalProjet: number;
        fraisDossier: number;
        autresFrais: number;
        fraisGarantie: number;
        totalOperation: number;
        totalInteret: number;
        totalAssurance: number;
        totalFraisDivers: number;
        coutGlobalCreditInterne: number;
        apport: number;
        /** Total crédit externe */
        creditExterne: number;
        /** Total crédit interne */
        creditInterne: number;
        dureeTotale: number;
        premiereMensualite: number;
        premiereMensualiteNet: number;
        premiereMensualiteHorsAssurances: number;
        coutCreditAvecAssurance: number;
        tauxEndettement: number;
        resteAVivre: number;
        listeCreditSynthese: ICreditSynthese[];
        listeCreditExterneSynthese: ICreditSynthese[];
        syntheseFinanciere: Models.Emprunteur.ISyntheseFinanciere;
        montantAPL: number;
        loanToValue: number;
        tauxApportPersonnel: number;
        debtToIncome: number;
        accordDePrincipe: number;
        resultatsControle: IResultatControle[];
        histogrammeSynthese: IHistogrammeSynthese;
    }
    interface IResultatControle {
        libelle: string;
        messages: string[];
    }
    interface IEditionProposition {
        fluxImpression: string;
        listeAnomalieLecture: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Habilitation {
    /**
     * Interface pour les habilitations de l'agent
     */
    interface IHabilitation {
        /** Autorisation de forçage pour le contrôle FICP à l'édition ou à la signature */
        autoriserForcageControleFicp: boolean;
        /** Autorisation de forçage pour PIECO */
        autoriserForcagePIECO: boolean;
        /** Autorisation d'instruction pour le compte d'une autre personne */
        autoriserInstructionPourX: boolean;
        /** Autorisation pour la sélection d'une date d'instruction différente de la date du jour */
        autoriserDateTraitement: boolean;
        /** Autorisation pour l'ajout de refus d'assurance externe sur la page financement */
        autoriserRefusAssuranceExterne: boolean;
        /** Autorisation pour la saisie manuelle d'une expertise pvh */
        autoriserSaisieExpertise: boolean;
        /** Autorisation pour le forçage d'anomalie à l'édition de l'offre de type 16 */
        autoriserForcageControleSuiviEdition: boolean;
        /** Autorisation pour lancer le processus de SED */
        autoriserLancerSignatureElectronique: boolean;
        autoriserCnpManuelle: boolean;
    }
}

declare namespace ICBusiness.Models.Habilitation {
    /**
     * Interface pour les informations de l'agent
     */
    interface IInformationsAgent {
        identifiantAgent: string;
        libelleAgent: string;
        pyramideInstruction: IPyramideInstruction;
        habilitations: IHabilitation;
        estAgentBo: boolean;
        estConseillerDeProximite: boolean;
    }
}

declare namespace ICBusiness.Models.Habilitation {
    /**
     * Interface pour la pryramide d'instruction
     */
    interface IPyramideInstruction {
        elementStructure1: string;
        elementStructure2: string;
        elementStructure3: string;
        elementStructure4: string;
        elementStructure5: string;
        elementStructure6: string;
    }
}

declare namespace ICBusiness.Models.Historique {
    interface IEvenement {
        /**
         * Nofaed_NumeReltEvenDoss
         */
        numeroRelationEvenDossier: number;
        /**
         * Cefadc_CodeEttDoss
         */
        codeEtatDossier: number;
        /**
         * Dtfaed_DateSaisEven
         * Type date au format yyyy-MM-dd
         */
        dateSaisieEven: string;
        /**
         * Lbfamd_MessEnrgSurEvenDoss
         */
        messEnregistrementSurEvenDossier: string;
        /**
         * Dtfaee_DateEfftEven
         * Type date au format yyyy-MM-dd
         */
        dateEffetEven: string;
        /**
         * Ctfaev_CodeTypeEven
         */
        codeTypeEven: string;
        /**
         * Idfase_IdntEnttSaisEven
         */
        idEntiteSaisieEven: string;
        /**
         * Lbfase_LiblEnttSaisEven
         */
        libelleEntiteSaisieEven: string;
        /**
         * Cefhgc_CodeIndicGestCentEven
         */
        codeIndiceGestionCentralEven: number;
        /**
         * Cdfabo_ElemStrcGestBackCent
         */
        elementStructureGestionBackCentral: string;
        /**
         * Idfce3_IdntCaisAsscBackCent
         */
        idCaisseAssuranceBackCentral: number;
        /**
         * LiblEven
         */
        libelleEven: string;
        /**
         * CodeNatrEven
         */
        codeNatureEven: string;
        /**
         * IdntAvisAsscEven
         */
        idAvisAssuranceEven: string;
    }
}

declare namespace ICBusiness.Models.Garanties {
    interface IListeGarantie {
        idPlanFinancement: string;
        listeGaranties: IGarantieBase[];
    }
    interface IGarantieBase {
        id: string;
        coutTotal: number;
        libelle: string;
        codeDevise: string;
        convention: IConvention;
        nature: INatureGarantie;
        couvertures: ICouverture[];
        montantCouvertureGLobale: number;
        libelleCompletude: string;
        libelleGarant: string;
        libelleObjet: string;
        saccefActif: boolean;
        dateCloture: Date;
        dateAccpAccessoire: Date;
        saccefVisible: boolean;
        beneficiaireVisible: boolean;
    }
    interface IGarantie extends IGarantieBase {
        creditsCouvert: Models.Financement.ICreditInterne[];
        garant: ICBusiness.Models.Emprunteur.IGarant;
        objetPorteEnGarantie: IObjetPorteEnGarantie;
        objetPorteEnGarantieAdmin: IBienPorteEnGarantieAdmin;
        tauxCouvertureGLobale: number;
        resteACouvrir: number;
        /** ascii de O: Authentique, ascii de N: Sous seing privé */
        codeFormeActeAuthentique: number;
        financable: IFinancable;
        dateFinEffet: Date;
        dateEffet: Date;
        dateDeReponse: Date;
        libelleReponseGarantie: string;
        reponseGarantie: Enum.ReponseGarantie;
        personnalisationBeneficiaire: number;
        beneficiaire: Models.Common.ICodeLabel<string>;
        listeBeneficiaire: Models.Common.ICodeLabel<string>[];
        idExterneAccessoire: string;
        codeEtatAccessoire: number;
        dateCreationDossier: Date;
        estGarantiePersonnelle: boolean;
        estGarantieReelle: boolean;
        estHypothequeImmobiliere: boolean;
        estPrivilege: boolean;
        estHypotheque: boolean;
        estPacteCommissoire: boolean;
        needRedacteurActe: boolean;
        estCaution: boolean;
        typeCouverture: Enum.TypeCouverture;
        rang1Hypotheque: number;
        rang2Hypotheque: number;
        sessionAnterioriteHypotheque: Models.Common.ICodeLabel<number>;
        dureeHypothequeMois: number;
        pacteCommissoire: number;
        parametragePacteCommissoire: IParametragePacteCommissoire;
        listePacteCommissoireDisponible: ICBusiness.Models.Common.ICodeLabel<number>[];
        isSaccef: boolean;
        isSaccefCalculAuto: boolean;
        allCodeIndiceAppelEcheanceOk: boolean;
    }
    interface IParametragePacteCommissoire {
        valeurParDefaut: number;
        editable: boolean;
    }
    interface IConvention {
        id: string;
        libelle: string;
        reference: string;
        commentaire: string;
        typeCautionnement: string;
        hasFrais: boolean;
        numeroExterne: string;
        idPersonneCouverture: string;
        hasCotisations: boolean;
        isSaccef: boolean;
    }
    interface ICouverture {
        id: string;
        creditCouvert: Models.Financement.ICreditInterne;
        montantCouvert: number;
        tauxCouverture: number;
        cotisations: ICotisation[];
        montantFraisGarantie: number;
        codeDevise: string;
        bornesSaisieTaux: IBorne;
    }
    interface ICotisation {
        id: string;
        typeFraisLibelle: string;
        coutEnTaux: number;
        coutEnMontant: number;
        codeDevise: string;
        typeSaisie: Enum.TypeSaisieCotisation;
        donneesPourSaisie: IDonneesSaisie;
        blocageSaisieMontant: boolean;
        mode: Enum.FinanceMode;
        nbEcheances: number;
    }
    interface IObjetPorteEnGarantie {
        id: string;
        libelle: string;
        type: Enum.TypeObjetPorteEnGarantie;
        codePays: string;
        codeNatureFinancier: Models.Common.ICodeLabel<string>;
    }
    interface INatureGarantie {
        code: string;
        libelle: string;
        surete: Enum.TypeSurete;
        ordre: number;
        conseillee: boolean;
        codeConvention?: string;
        /** indique si la forme de l'acte peut être modifié */
        formeDeActeModifiable: boolean;
    }
    interface ILigneCotisation {
        idCotisation: string;
        idCouverture: string;
        idCredit: string;
        libelleLongProduit: string;
        montantEmprunte: number;
        montantCouvert: number;
        quotite: number;
        typeFrais: string;
        tauxCotisation: number;
        montantCotisation: number;
        codeDevise: string;
        donneesPourSaisie: IDonneesSaisie;
    }
    interface IFinancable {
        estVisible: boolean;
        estActif: boolean;
        estCoche: boolean;
        fractionFinancierMax: number;
    }
    interface IDonneesSaisie {
        listeTauxSaisie: IListeConseilleSection[];
        plageTauxSaisie: IBorne;
        plageMontantSaisie: IBorne;
    }
    interface IBorne {
        min: number;
        max: number;
    }
    interface IListeConseilleSection {
        value: number;
        selected: boolean;
    }
    interface IResultatAjoutGarantie {
        idGarantie: string;
        anomalies: Common.IAnomalieLecture[];
    }
    interface IResultatTraitementCEGC {
        libelleDecisionGeneral: string;
        libellesDecisionDetails: string[];
        estRefuse: boolean;
        estEnAttenteComplement: boolean;
        estFavorable: boolean;
        estFavorableAvecReserve: boolean;
        estEnErreur: boolean;
        anomalies: Common.IAnomalieLecture[];
    }
    interface IIntervalleInterroCEGC {
        intervalle: number;
        nombreInterro: number;
    }
}

declare namespace ICBusiness.Models.Garanties {
    interface IBienPorteEnGarantieAdmin {
        idws: string;
        libelleObjet: string;
        typeObjetCommercialisation: string;
        adresseLigne1: string;
        adresseLigne3: string;
        adresseLigne4: string;
        codePoste: string;
        ville: string;
        adresseLigne1Suite: string;
        codePays: string;
        adresseLigne5: string;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: string;
        montantEstmPrdn: number;
        dateEstmPrdn: string;
        codeModeleEstmPrdn: string;
        codeMotfReSPrdn: string;
        dateExpressionBienCff: string;
        noteExpressionBienCff: number;
        idObjetGestion: string;
        porteSurProjet: boolean;
        souscriptionContratAssurance: boolean;
        idGarantieReel: string;
    }
    interface IHypothequeAerienne extends IBienPorteEnGarantieAdmin {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IBonDeCaisseCapitalisation extends IBienPorteEnGarantieAdmin {
        referenceCadastrale: string;
        numeroCompte: string;
        numeroSiren: string;
        valeurBonOrigine: number;
        numeroContratTitre: string;
        natureBon: string;
        dateeche: string;
        titreNomPrenDeps: string;
    }
    interface IDelegationLoyer extends IBienPorteEnGarantieAdmin {
        montantAnnuLoye: number;
        numeroCompte: string;
        dateExterneBail: string;
        nomGern: string;
    }
    interface ICessionDaillyAutre extends IBienPorteEnGarantieAdmin {
    }
    interface IContratAssurance extends IBienPorteEnGarantieAdmin {
        dateNaisAssurance: string;
        numeroContratAssurance: string;
        nomCieAssurance: string;
        numeroSiren: string;
        cntrGestion: string;
        typeTechniqueJuridique: string;
        nomContratAssurance: string;
        apportPersonne: number;
        montantMinimumVersementSigne: number;
        codeIndiceAttnVersement: number;
        listeIdVersementAttn: Array<string>;
        listeVersementAttn: GarantieCredit.DTO.ObjetPorteGarantie.IVersementAttendu[];
    }
    interface IAntichrese extends IBienPorteEnGarantieAdmin {
        referenceCads: string;
        numeroLot: string;
    }
    interface ICessionDaillyLoyerImmeuble extends IBienPorteEnGarantieAdmin {
    }
    interface IGageVehicule extends IBienPorteEnGarantieAdmin {
        numeroSer: string;
        numeroImmt: string;
    }
    interface IGageCompteInstrumentFinancier extends IBienPorteEnGarantieAdmin {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface INantissementPartSociale extends IBienPorteEnGarantieAdmin {
        numeroEnregistrement: string;
        numeroCompte: string;
        descriptionOtion: string;
    }
    interface INantissementValeurMaterielle extends IBienPorteEnGarantieAdmin {
        typeValeurMatrimonial: string;
        numeroRefTypeLot: string;
    }
    interface INantissementValeurMobiliere extends IBienPorteEnGarantieAdmin {
        referenceCadastrale: string;
        numeroCompte: string;
    }
    interface INantissementFondDeCommerce extends IBienPorteEnGarantieAdmin {
        numeroInscRcs: string;
        libelleLibr: string;
        titreOccpLocLeqlFondEstExpl: number;
    }
    interface IHypothequeImmobiliere extends IBienPorteEnGarantieAdmin {
        referenceCads: string;
        referenceLot: string;
        typeBien: number;
        typeLogement: string;
        destinataireBien: number;
        surfHabitation: number;
        surfTerr: number;
        zoneImplBien: string;
        qualEmpla: number;
        montantDernierMutt: string;
        dateDernierMutt: string;
        anneConstruction: number;
        montantAnnuLoye: string;
        numeroLotCopr: string;
        numeroSctn: string;
        occpActuarielBien: number;
        codePresHypotheque: number;
        idExpression: string;
        dateDemandeExpression: string;
        listeIdProprios: Array<string>;
        listeIdReferenceCadastrls: Array<string>;
        listeIdReferenceLot: Array<string>;
    }
    interface IBienDivers extends IBienPorteEnGarantieAdmin {
        reference1: string;
        reference2: string;
    }
}

declare namespace ICBusiness.Models.InterroBDF {
    interface IInterroBDFModele {
        idws: string;
        inscriptionFCC: string;
        inscriptionFICP: string;
        messageFICP: string;
        messageFCC: string;
        dateAppelFCC: string;
        dateAppelFICP: string;
        oppositions: IOpposition[];
        cleBdf: string;
        resultBdf: IResultBDF;
        codeCotisationFibenDirg: string;
        libelleListnSurCntrTechniqueRegn: string;
        typeLoi: Enum.TypeLoi;
        interditFICP: boolean;
    }
    interface IOpposition {
        code: string;
        libelle: string;
        dateDebut: string;
        dateFin: string;
    }
    interface IResultBDF {
        reponseFicp: string;
        reponseFcc: string;
        statutFicp: string;
        statutFcc: string;
        reponseFbe?: number;
        presenceHomonymie: boolean;
    }
}

declare namespace ICBusiness.Models.Industrialisation {
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    interface IDocumentOffreIndustrialiseeLecture extends IElementLecture {
        /**
         * CodeEntiteFonctionnelle
         */
        codeEntiteFonctionnelle: string;
        /**
         * IdEntiteFonctionnelle
         */
        idEntiteFonctionnelle: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * CodeDocument
         */
        codeDocument: string;
        /**
         * LibelleDocument
         */
        libelleDocument: string;
        /**
         * LibelleAide
         */
        libelleAide: string;
        /**
         * CodeExterneDocument
         */
        codeExterneDocument: string;
        /**
         * IndicateurCasEcheant
         */
        indicateurCasEcheant: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Origine
         */
        origine: string;
        /**
         * DateCreation
         * Type date au format yyyy-MM-dd
         */
        dateCreation: string;
        /**
         * DateModification
         * Type date au format yyyy-MM-dd
         */
        dateModification: string;
        /**
         * EtatDocument
         */
        etatDocument: string;
        /**
         * DocumentCommun
         */
        documentCommun: string;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * Destinataire
         */
        destinataire: string;
        /**
         * UrlPDF
         */
        urlPDF: string;
        /**
         * EstDocNEO
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
    }
    interface IOffrePretIndustrialiseeLecture extends IElementLecture {
        /**
         * EditionEligible
         */
        editionEligible: boolean;
        /**
         * EditionEligibleEnAgence
         */
        editionEligibleEnAgence: boolean;
        /**
         * LibelleDossier
         */
        libelleDossier: string;
        /**
         * DossierGdeACree
         */
        dossierGdeACree: boolean;
        /**
         * EtatDossierEdition
         */
        etatDossierEdition: string;
        /**
         * NbEnveloppesLigne1
         */
        nombreEnveloppesLigne1: number;
        /**
         * NbEnveloppesLigne2
         */
        nombreEnveloppesLigne2: number;
        /**
         * NbEnveloppesLigne3
         */
        nombreEnveloppesLigne3: number;
        /**
         * LibEnveloppeLigne1
         */
        libelleEnveloppeLigne1: string;
        /**
         * LibEnveloppeLigne2
         */
        libelleEnveloppeLigne2: string;
        /**
         * LibEnveloppeLigne3
         */
        libelleEnveloppeLigne3: string;
        /**
         * NbEnveloppesLigne1NO
         */
        nombreEnveloppesLigne1NO: number;
        /**
         * NbEnveloppesLigne2NO
         */
        nombreEnveloppesLigne2NO: number;
        /**
         * NbEnveloppesLigne3NO
         */
        nombreEnveloppesLigne3NO: number;
        /**
         * LibEnveloppeLigne1NO
         */
        libelleEnveloppeLigne1NO: string;
        /**
         * LibEnveloppeLigne2NO
         */
        libelleEnveloppeLigne2NO: string;
        /**
         * LibEnveloppeLigne3NO
         */
        libelleEnveloppeLigne3NO: string;
        /**
         * NbEnveloppesLigne1CA
         */
        nombreEnveloppesLigne1CA: number;
        /**
         * NbEnveloppesLigne2CA
         */
        nombreEnveloppesLigne2CA: number;
        /**
         * NbEnveloppesLigne3CA
         */
        nombreEnveloppesLigne3CA: number;
        /**
         * LibEnveloppeLigne1CA
         */
        libelleEnveloppeLigne1CA: string;
        /**
         * LibEnveloppeLigne2CA
         */
        libelleEnveloppeLigne2CA: string;
        /**
         * LibEnveloppeLigne3CA
         */
        libelleEnveloppeLigne3CA: string;
        /**
         * LibAbregeCaisse
         */
        libelleAbregeCaisse: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * EdsEdition
         */
        eDSEdition: string;
        /**
         * ValidationImplicite
         */
        validationImplicite: boolean;
        /**
         * DocumentGlobalPDF
         */
        documentGlobalPDF: string;
        /**
         * ListeDocIndusLecture
         */
        listeDocIndusLecture: IDocumentOffreIndustrialiseeLecture[];
        dossierIndusAValider: boolean;
    }
    interface IResultatOffrePretIndustrialisee {
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Valeur
         */
        valeur: string;
        /**
         * AnomaliesPassageEnGestionLecture
         */
        anomaliesPassageEnGestionLecture: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * AnomaliesLecture
         */
        anomaliesLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    interface IResultatAjoutDocumentPretIndustrialisee {
        /**
         * oResultatAjoutDocPretIndustrialisee
         */
        resultatAjoutDocPretIndustrialisee: IResultatOffrePretIndustrialisee;
        /**
         * IdwsDocument
         */
        idwsDocument: string;
    }
    interface IDocumentOffreIndustrialisee {
        /**
         * Identifiant
         */
        idws: string;
        /**
         * FluxDocument
         */
        fluxDocument: string;
    }
}

declare namespace ICBusiness.Models.Impression {
    interface IImpression {
        /**
         * Identifiant du dossier en instruction
         */
        idDossier: string;
        /**
         * Liste des documents
         */
        documents: IDocument[];
        /**
         * Liste des éventuelles anomalies
         */
        anomalies: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    interface IDocument {
        /**
         * Identifiant du document
         */
        idDocument: string;
        /**
         * Libellé du document
         */
        libelleDocument: string;
        /**
         * Booléen pour savoir si le document est une offre/contrat
         */
        estDocOffre: boolean;
        /**
         * Code du document
         */
        codeDocument: string;
        /**
         * Flux du document
         */
        flux: string;
    }
    interface IParamEditique {
        id: string;
        data: string;
    }
}

declare namespace ICBusiness.Models.Navigation.LisaContract.INST_CRDT_CONS_PRO {
    /**  Url Get parameters when accessing step OUVR_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IOuvertureDossierUrlParams extends IInstructionCreditDossierUrlParams {
    }
    /** Context parameters to set when navigating to OUVR_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IOuvertureDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageId: Enum.CodePageEnum;
    }
    /** Url Get parameters when accessing step INS_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IInstructionCreditDossierUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        idDossier: string;
        mode: Enum.ModeOuvertureDossier;
        page: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to INS_DOSS_CRDT on processus INST_CRDT_CONS_PRO */
    interface IInstructionCreditDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageId: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to GERR_DOSS_NUMR on processus INST_CRDT_CONS_PRO */
    interface IDossierNumeriqueMyWayContext {
        REFERENCE_REGROUPEMENT: string;
        CODE_FOURNISSEUR: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.GADM {
    interface IDossierCnpContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageId: Enum.CodePageEnum;
        PARAMCODECOLLSELECT: string;
        PARAMDN: string;
        PARAMNOM: string;
        PARAMPRENOM: string;
        PARAMREF: string;
        ST: string;
        idAssure: string;
        idPlanFinancement: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT {
    /** Context parameters to set when navigating to CRR_DOSS_CRDT_ENTT on processus GERR_EMPR_CRDT */
    interface ICreationDossierContext {
        codeApplication: Enum.CodeApplicationEnum;
        codeDevise: string;
        dateInstruction: string;
        idCompteDe: string;
        identifiantClientBancaire: string;
        identifiantPersonne: string;
    }
    /** Url Get parameters when accessing step CRR_DOSS_CRDT_ENTT on processus GERR_EMPR_CRDT */
    interface ICreationDossierUrlParams extends ICompleterEmprunteurUrlParams {
        codeDevise: string;
        idEntiteTitulaire: string;
        idPersonne: string;
    }
    /** Context parameters to set when navigating to COMP_INFR_EMPR on processus GERR_EMPR_CRDT */
    interface ICompleterEmprunteurContext {
        identifiantDossier: string;
        dateInstruction: string;
        mode: Enum.ModeOuvertureDossier;
        codeApplication: Enum.CodeApplicationEnum;
        idCompteDe: string;
        codePage: Enum.CodePageEnum;
    }
    /** Url Get parameters when accessing step COMP_INFR_EMPR on processus GERR_EMPR_CRDT */
    interface ICompleterEmprunteurUrlParams {
        idDossier: string;
        dateInstruction: string;
        mode: Enum.ModeOuvertureDossier;
        codeApplication: Enum.CodeApplicationEnum;
        idCompteDe: string;
    }
    interface ICreationClientContext {
        identifiantPersonne?: string;
        CLIENT: IClientContext;
        displayName: string;
        rattachementProspect: boolean;
        rattachementProspectEntiteTitulaire: boolean;
    }
    interface IClientContext {
        nomFamille?: string;
        prenom?: string;
        dateNaissance?: string;
        raisonSociale?: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.CONT_CRDT_INST {
    /** Context parameters to set when navigating to CONT_CRDT_CONSO */
    interface IInstructionContractualisationContext {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        identifiantDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageCode: Enum.CodePageEnum;
    }
    /** Context parameters to set when navigating to CONT_CRDT_CONSO */
    interface IInstructionContractualisationUrlParams {
        codeApplication: Enum.CodeApplicationEnum;
        dateInstruction: string;
        idCompteDe: string;
        idDossier: string;
        mode: Enum.ModeOuvertureDossier;
        pageCode: Enum.CodePageEnum;
    }
    interface ITraiterRetourSignContext extends IInstructionContractualisationContext {
        AdresseMail: string;
        EnvoiMail: string;
        IdIdn: string;
        IndicateurImpression: string;
        IdTransactionIcg: string;
        ModeEnvoi: string;
        ModeSignature: string;
        RemisePapier: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.NEO {
    interface INeoContext {
        IDFCEJ: string;
        IDFAEC: string;
        IDFAEP: string;
        LISTE: string;
        RETOUR: string;
        IDFADI: string;
        GUICHET: string;
        IDSEC: string;
        ZB: string;
        ACTION: string;
        TRAC: string;
        AGENT: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.SGFGAS {
    interface IValorisationSGFGASContext {
        ETABLISSEMENT: string;
        NUMERODOSSIERINSTRUCTION: string;
        ORIGINEINSTRUCTION: string;
        TYPEPRET: string;
        IDENTIFIANTPRODUIT: string;
        DEVISE: string;
        TYPEACCES: string;
        URLRETOUR: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.MRH {
    interface IMrhContext {
        IDIDN: string;
        REFEXTERNE: string;
        CODEPRODUIT: string;
        CDINFOTARIF: string;
        CDPILOTAGEEDITION: string;
        CDTYPESIGN: string;
        THEME: string;
        CODECANAL: string;
        CCODESENSCOMMUNICATION: string;
        SIGLE: string;
        CDORGNFINNACTRETAB: string;
        CDPRFLASSR: string;
        IDTIER: string;
        IDEDSACTRETAB: string;
        NOMUSGACTRETAB: string;
        IDACTRETAB: string;
        CDAPPLIAPL: string;
        CDTYPECANLDISTN: string;
        CDTYPEPERIMENT: string;
        CDETABFINNTIER: string;
        IdDossierBienImmo: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.CBP {
    interface ICbpContext {
        pageId: number;
        PARAM_CBP: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.SIGN_REMT_DOCM {
    /** Context parameters to set when navigating to SIGN_REMT_DOCM */
    interface ISignRemtDocmContext extends ICBusiness.Models.Navigation.LisaContract.CONT_CRDT_INST.IInstructionContractualisationContext {
        IdIdn: string;
        IdMat: string;
        Caisse: string;
        Agent: string;
        hubmail: string;
        PointEntree: string;
        ModeSignIDN: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.CONS_HIST_DOSS_CRDT {
    interface IHistoriqueDossierCredit {
        codeBanque: string;
        refrCrdt?: string;
        refrDoss: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.CALC_DU_TX_OPTM_SMAC {
    interface ICalculTauxOptimSMac extends Models.Navigation.LisaContract.INST_CRDT_CONS_PRO.IInstructionCreditDossierContext {
        NUMERODOSSIERNEO: string;
        NUMEROPLANFINANCEMENTNEO: string;
    }
    interface IRetourCalculTauxOptimSMac {
        CODE_RESULTAT: string;
        RETOUR: string;
        NUMERODOSSIERNEO: string;
        NUMEROPLANFINANCEMENTNEO: string;
    }
}
declare namespace ICBusiness.Models.Navigation.LisaContract.SIML_FINN_IMMB_PART {
    interface ICalculEnveloppe {
        identifiantDossier: string;
        dateInstruction: string;
        modeCalcul: number;
        codeApplication: number;
        idCompteDe: string;
    }
}

declare namespace ICBusiness.Models.ParametreFonctionnel {
    interface IParametreFonctionnel {
        codeParametre: string;
        idObjetConcerne: string;
        visible: boolean;
        actif: boolean;
    }
    interface IParametresFonctionnelAde {
        ADE8Ans: ICBusiness.Models.ParametreFonctionnel.IParametreFonctionnel[];
        ADEDureeTotale: ICBusiness.Models.ParametreFonctionnel.IParametreFonctionnel[];
    }
}

declare namespace ICBusiness.Models.BienAVendre {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface IBienAVendre {
        id: string;
        codeObjetBienVendu: string;
        codeTypeVente: number;
        codeTypeAcquisition: number;
        montantCommissionAgence: number;
        montantAcquisition: number;
        dateAcquisition: string;
        montantEstimation: number;
        dateEstimation: string;
        montantCrd: number;
        montantCrdRachat: number;
        prixNetVendeur: number;
        adresseLigne1: string;
        adresseLigne1Suite: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        codePays: string;
        codePoste: string;
        ville: string;
        codeModeleEstmVenl: string;
        codeTypeObjetRegle: string;
    }
}

declare namespace ICBusiness.Models.ButLocatif {
    interface IButLocatif {
        idws: string;
        numeroDecisionFavorable: number;
        dateDecisionFavorable: string;
        pretTransfere: boolean;
        decisionFavorable: boolean;
        dateConvention: string;
        montantLoyer: number;
        montantFraisGestion: number;
        montantFraisEntretien: number;
        montantTaxeFonciere: number;
        serviceVacanceLogement: boolean;
        assuranceLoyerImpaye: boolean;
        natureAvantageFiscal: Models.Common.CodeLabel<string>;
        montantAvantageFiscal: number;
    }
}

declare namespace ICBusiness.Models.DetailEcoPtz {
    interface IDetailsEcoPtz {
        travauxFinances: ITravauxFinancesLecture;
        listeDetailCoutObjet: IDetailCoutObjet[];
    }
    interface ITravauxFinancesLecture {
        idws: string;
        typeTravauxCadreEcpt: ICBusiness.Models.Common.ICodeLabel<string>;
        typeEcoPtz: number;
        dateCreationEcoPtzInitial: string;
        montantEcoPtzInitial: number;
    }
    interface IDetailCoutObjet {
        idws: string;
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        coutTravaux: number;
    }
}

declare namespace ICBusiness.Models.ProjetImmo {
    interface IProjetImmo extends Projet.IProjetCommun, IUniqueProjetImmo {
    }
    interface IUniqueProjetImmo {
        usageBien: Models.Common.ICodeLabel<string>;
        cadreFiscal: Models.Common.ICodeLabel<string>;
        modeOccupation: Models.Common.ICodeLabel<string>;
        typeDeVente: Models.Common.ICodeLabel<string>;
        codeBatimentBassConsommation: Models.Common.ICodeLabel<string>;
        dateDPE: string;
        listeIdws: string[];
        estLogementHLM: boolean;
        typeObjetFinancier: string;
        typeObjetRegle: string;
        coutTotalObjet: number;
        coutObjetSaisieCalculEnvl: boolean;
        afficherTTC: boolean;
        coutTotalObjetHt: number;
        coutTotalObjetTTC: number;
        rachatCreance: number;
        coutFrsNotaire: number;
        montantFrsDivr: number;
        estPartsSCPI: boolean;
        zoneRegleRobnBien: string;
        qualEmplaProjet: number;
        batimentHabitableFinance: IBatimentHabitableFinanceComplet;
        constructionFinancee: IConstructionFinancee;
        travauxFinances: ITravauxFinancesComplet;
        soulteFinance: ISoulteFinanceComplet;
        terrainFinance: ITerrainFinanceComplet;
        controlesVisibilite: IProjetImmoControles;
        bienAVendre: IBienAVendreComplet;
        controlesChampsAssociation: IChampsAssociation;
        informationsComplementairesSCI: IInformationsComplementairesSCI;
        majAFaire?: boolean;
    }
    interface IBatimentHabitableFinanceComplet {
        idws: string;
        coutAcqsBatimentHabitation: number;
        montantMoblFinancier: number;
        montantFrsNegocie: number;
        montantTVAFinancierARemboursement: number;
        surfHabitationCreeParConstruction: number;
        dateConstructionBatimentHabitation: string;
    }
    interface IConstructionFinancee {
        idws: string;
        coutConstructionFinancier: number;
        coutTravauxAChargeMoa: number;
        montantTVAFinancierARemboursement: number;
        surfHabitationCreeParConstruction: number;
        dateFinConstruction: string;
    }
    interface ISoulteFinanceComplet {
        idws: string;
        montantSoul: number;
    }
    interface ITravauxFinancesComplet {
        idws: string;
        coutTravaux: number;
        surfHabitationBatimentSousJacent: number;
        dateConstructionBatimentSousJacent: string;
        dateFinTravaux: string;
        listeDetailCoutObjet: IDetailCoutObjet[];
    }
    interface ITerrainFinanceComplet {
        idws: string;
        coutTerr: number;
        montantFrsNegocie: number;
    }
    interface IBienAVendreComplet {
        idws: string;
        montantCRDRachSurBienVend: number;
    }
    interface IDetailCoutObjet {
        idws: string;
        coutTravaux: number;
    }
    /**
     * Flags d'affichage des données d'un projet
     */
    interface IProjetImmoControles {
        canalRelation: Models.Common.IVisibilite;
        prescripteur: Models.Common.IVisibilite;
        bienRevendu: Models.Common.IVisibilite;
        miseEnOeuvre: Models.Common.IVisibilite;
        htTtc: Models.Common.IVisibilite;
        hlm: Models.Common.IVisibilite;
        performanceEnergetique: Models.Common.IVisibilite;
        champsBanqueParticulier: Models.Common.IVisibilite;
        travauxReserves: Models.Common.IVisibilite;
        dateAchevementTravaux: Models.Common.IVisibilite;
    }
    /** Interfaces de gestions d'affichage des champs sur page projet Immo */
    interface IChampsMontant {
        champsAcquisition: boolean;
        champsMobilier: boolean;
        champsTravaux: boolean;
        champsEcoPTZ: boolean;
        champsTerrain: boolean;
        champsPrixConvenu: boolean;
        champsCoutConstruction: boolean;
        champsRachatCreance: boolean;
        champsBesoin: boolean;
        afficheFraisNotaire: boolean;
        afficheBoutonNegociation: boolean;
        fraisDivers: boolean;
        champsNegociation: boolean;
        rachatRegroupement: boolean;
    }
    interface IChampsInformationsComplementaires {
        champsDateFinConstruction: boolean;
        champsSurfaceHabitable: boolean;
    }
    interface IChampsProjet {
        cadreFiscal: boolean;
    }
    interface IChampsAssociation {
        typeObjetToc: string;
        typeObjetTor: string;
        cas: IChampsMontant;
        eligibilite: boolean;
        casInfosCompl: IChampsInformationsComplementaires;
        casProjet: IChampsProjet;
    }
    interface IInformationsComplementairesSCI {
        idws: string;
        objetSocialDedieAcqBienFin: boolean;
        bienOccupeTitreGratuit: boolean;
        choixVolontaireLoiImmo: boolean;
    }
    interface IProjetImmobilierLecture {
        indiceAchtRvnt: boolean;
        coutObjetSaisieCalculEnvl: number;
    }
    interface IResultCalculFraisNotaire {
        montantFraisNotaire: number;
        montantFraisNegociation: number;
        listeAnomalieLecture: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Projet {
    /**
     * Donnees representant la nature de financement et sa liste de TOC associee
     */
    interface INatureFinancement {
        /**
         * Libelle de la nature de financement
         */
        label: string;
        /**
         * Code de la nature de financement
         */
        code: string;
        /**
         * Liste des TOCs associés
         */
        listeTocs: IToc[];
    }
    /**
     * Données representant le TOC et sa liste de TOR associee
     */
    interface IToc {
        /**
         * Libelle du TOC
         */
        label: string;
        /**
         * Code du TOC
         */
        code: string;
        /**
         * Liste des TORs associés
         */
        listeTors: ITor[];
    }
    /**
     * Données representant le TOR
     */
    interface ITor {
        /**
         * Libelle du TOR
         */
        label: string;
        /**
         * Code du TOR
         */
        code: string;
        /**
         * Libellé méta du TOR
         */
        meta: string;
        /**
         * Libellé complet : tor - meta
         */
        labelTorMeta: string;
    }
    interface ILienBienSousJacent {
        typeObjetFinancierGarantie: string;
        typeObjetRegleTor: string;
        classeObjet: string;
        typeObjetSousJacent: string;
        typeObjetRegleTor1: string;
    }
    /**
     * Données d'un projet
     */
    interface IProjetCommun {
        /** Identifiant du projet */
        id: string;
        /** Cout total du projet */
        coutTotal: number;
        /** Type d'objet commercial (TOC) */
        toc: Models.Common.ICodeLabel<string>;
        /** Type d'objet reglementaire (TOR) */
        tor: Models.Common.ICodeLabel<string>;
        isAchatRevente: boolean;
        estimationAchatRevente: number;
        idBienAVendre: string;
        /** Origine commerciale */
        origineCommerciale: Models.Common.ICodeLabel<string>;
        /** Canal de relation */
        canalRelation: Models.Common.ICodeLabel<string>;
        /** Type de vente/technique de vente */
        typeVente: Models.Common.ICodeLabel<string>;
        /** Prescripteur */
        prescripteur: IPrescripteur;
        detailObjetFinance: IDetailObjetFinance;
        estimationObjetFinance: IEstimation;
        coutsPro: ICoutsPro;
        reamenagementACreer: boolean;
        listeTypeReamenagement: Common.ICodeLabel<string>[];
        listeCritereEligibiliteFEI: Common.ICodeLabel<string>[];
        critereEligibiliteFEI: Common.ICodeLabel<string>;
        fraisNotaireSaisissable: boolean;
    }
    interface IProjet extends IProjetCommun {
        descriptionObjet: string;
        ventilation: IVentilation;
        /** Identifiant du bien conso */
        idBienConso: string;
        /** Vendeur */
        vendeur: string;
        /** Flags de visibilité des controles */
        controlesVisibilite: IProjetControles;
    }
    interface ICoutsPro {
        coutTotalHt: number;
        coutTotalTtc: number;
        typeCoutObjet: EnumTypeCoutObjet;
    }
    enum EnumTypeCoutObjet {
        coutObjetHt = 78,
        coutObjetTtc = 79,
    }
    /**
     * Flags d'affichage des données d'un projet
     */
    interface IProjetControles {
        /** Indique si le champ "Canal de relation" doit être affiche. */
        canalRelation: Models.Common.IVisibilite;
        /** Indique si le champ 'Vendeur' doit être affiche. */
        vendeur: Models.Common.IVisibilite;
        /** Indique si le champ 'Prescripteur' doit être affiche. */
        prescripteur: Models.Common.IVisibilite;
        miseEnOeuvre: Models.Common.IVisibilite;
        htTtc: Models.Common.IVisibilite;
    }
    interface IPrescripteur {
        hasPrescripteur: boolean;
        libellePrescripteur: string;
    }
    interface IVentilation {
        id: string;
        idBienVendre: string;
        achatTerrain: number;
        achatImmeubleCommercial: number;
        achatImmeubleHabitation: number;
        constructionImmeuble: number;
        travauxAmenagement: number;
        pasDePorte: number;
        fondsCommerce: number;
        equipements: number;
        vehicules: number;
        partsSociete: number;
        fraisNegociations: number;
        fraisNotaire: number;
        stocks: number;
        stocksHorsInstruction: number;
        autresBfdr: number;
        autresBfdfHorsInstruction: number;
        autres: number;
        autresHorsInstruction: number;
        tva: number;
        rachatsCreances: number;
        coutsPartsFonds: number;
        total: number;
        totalEmprunter: number;
        totalHorsInstruction: number;
        isTresorerie: boolean;
        rachatBienRevendu: number;
    }
    interface IDetailObjetFinance {
        /** Mise en oeuvre du projet */
        miseEnOeuvre: Models.Common.ICodeLabel<string>;
        etageAdresse: string;
        batimentAdresse: string;
        rueAdresse: string;
        codePostalAdresse: string;
        localiteAdresse: string;
        paysAdresse: string;
    }
    interface IEstimation {
        montant: number;
        date: string;
        modeEstimation: ICBusiness.Models.Common.ICodeLabel<string>;
    }
}

declare namespace ICBusiness.Models.Reamenagement {
    enum CategorieReamenagementEnum {
        rachat = 0,
        regroupement = 1,
    }
    interface IReamenagement {
        idws: string;
        idProjet: string;
        categorieReamenagement: CategorieReamenagementEnum;
        codeDevise: string;
        sommeRemboursementAnticipe: number;
        sommeRestantDue: number;
        montantTotalDu: number;
        sommeAnciennesMensualitesHorsAss: number;
        dureeResiduelleMax: string;
        typeReamenagement: Common.ICodeLabel<string>;
        listeTypeReamenagement: Common.ICodeLabel<string>[];
        valeurAcquisition: number;
        listePretInterne: IPretReamenagement[];
        listePretExterne: IPretReamenagement[];
        ajoutCreditInternePossible: boolean;
        ajoutCreditExternePossible: boolean;
        sommeRestantDueVisible: boolean;
        montantTotalDuVisible: boolean;
        coutAcqsObjetRefn: number;
        estReamenagementUnSeulCredit: boolean;
    }
    interface IPretReamenagement {
        idws: string;
        /** liste des idws des objets liés au pretRea */
        listeIdws: string[];
        /** IPretReamenageLecture.montantRestantDuSurPretRefn "Mtfard_MtRestDuSurPretRefn" */
        montantSrd: number;
        /** IControleIhm */
        montantSrdVisible: boolean;
        /** IInfoRegroupementLecture.montantCRD "Mkfd01_MtCrd" */
        montantCrd: number;
        /** IControleIhm */
        montantCrdVisible: boolean;
        codeDevise: string;
        libelleCredit: string;
        dateFinCredit: string;
        idCreditGestion: string;
        montantEcheancePeriodiquePretRefn: number;
    }
    interface IPretReamenageDetaille {
        idws: string;
        montantInterieurDusJusqFinCredit: number;
        preavisContractuel: boolean;
        montantRestantDuSurPretRefn: number;
        montantEstmRa: number;
        montantFrsMainTotalUneGarantieHypotheque: number;
        dateEnvsPourRemboursementAnticipe: string;
        codeDevise: string;
        aFinancerIndemnite: boolean;
        aFinancerMainLevee: boolean;
        montantCRD: number;
        idwsInfoRegroupement: string;
        nometblPret: string;
        idCreditGestion: string;
        reglementation: Models.Common.ICodeLabel<number>;
        libelleProduit: string;
        dateFinCredit: string;
        periodicite: Models.Common.ICodeLabel<string>;
        mtecheHorsAccessoire: number;
        tauxReference: number;
        creditAffecte: boolean;
    }
    interface IPretInterneReamenageDetaille extends IPretReamenageDetaille {
        dateRappDonneur: string;
        existeUneGarantieHypotheque: boolean;
    }
    interface IPretExterneReamenageDetaille extends IPretReamenageDetaille {
        origineInformationSurTypeLoiScrivenerCreditRach: number;
        origineInformationSurDateFinCredit: number;
        origineInformationSurMtecheHorsAccessoire: number;
        origineInformationSurTauxReference: number;
        origineInformationSurMontantCRD: number;
        origineInformationSurMontantRestantDuSuurPretRach: number;
        origineInformationSurMontantEstmIndemniteRa: number;
        origineInformationSurMontantFrsMainTotal: number;
        origineInformationSurExistePrevContrat: number;
        delPrevContrat: number;
        origineInformationSurDelPrevContrat: number;
        codeBanque: string;
    }
    interface IPretReamenageableBase {
        idws: string;
        origine: string;
        dateFinCredit: string;
        duree: number;
        idCreditGestion: string;
        crd: number;
        srd: number;
        echeance: number;
        libellePeriodicite: string;
        libelleCredit: string;
        codeDevise: string;
        pretReamenageMaj: IPretReamenageMaj;
    }
    interface IPretReamenageMaj extends ICRest.Modeles.AjouterPretReamengbl.IPretReamenageMaj {
    }
    interface IListerPretsReamenageableResult {
        listePrets: IPretReamenageableBase[];
        listeAnomalie: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.ObjetFinance {
    interface IDetailObjetFinance {
        dossier: Dossier.IDossierElement;
        emprunteur: Emprunteur.IEmprunteurElement;
        projet: IProjetImmobilier;
        promotionImmobiliere: IPromotionImmobiliere;
        batimentHabitableFinance: IBatimentHabitableFinance;
        constructionFinancee: IConstructionFinancee;
        bienSousJacent: IBienSousJacent;
        terrainFinance: ITerrainFinance;
        travauxFinances: ITravauxFinances;
        soulteFinance: ISoulteFinance;
    }
    interface IProjetImmobilier {
        idws: string;
        indiceAchtRvnt: boolean;
        coutObjetSaisieCalculEnvl: number;
        idBatimentHabitationFinancier: string;
        idConstructionFinancier: string;
        idObjetPrmtImmobilier: string;
        idReamenagement: string;
        idTerrFinancier: string;
        idTravauxFinancier: string;
        idSoulFinancier: string;
        typeObjetRegle: string;
        typeObjetFinancier: string;
        montantEstmVenl: number;
        dateEstmVenl: string;
        modeEstimation: Common.ICodeLabel<string>;
        modeEvaluation: Common.ICodeLabel<string>;
        typeMarche: Common.ICodeLabel<string>;
        montantInscHypotheque: number;
        codeMiseOeuvrProjetPro: Common.ICodeLabel<string>;
        pourcentageProprietaireApreOper: number;
        typeProprietaire: Common.ICodeLabel<string>;
        indicemssNouvPartScpi: number;
        printTypeAcquisition: boolean;
        codeDestinataireAutreParObjet: number;
    }
    interface ITravauxFinances {
        idws: string;
        idBienSousJacent: string;
        surfHabitationCree: number;
        surfaceHabitableFinale: () => number;
        dateAcqsBatimentSousJacent: string;
        typeLogementBatimentSous: Common.ICodeLabel<string>;
        nbreLogementBatimentSous: number;
        surfHabitationBatimentSousJacent: number;
        dateConstructionBatimentSousJacent: string;
    }
    interface ISoulteFinance {
        idws: string;
        idBienSousJacent: string;
        permDetrSiSoulFaitSuiteDivo: boolean;
        surfHabitationBienSous: number;
        valeurActiviteCorrValeurBienOrigine: number;
        pourcentageProprietaireOrigine: number;
    }
    interface IBatimentHabitableFinance {
        idws: string;
        idTerrSousJacent: string;
        typeLogement1: Common.ICodeLabel<string>;
        typeLogement: Common.ICodeLabel<string>;
        nombreLogementConstruction: number;
        dateAcqsBatimentHabitation: string;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        dateConstructionBatimentHabitation: string;
    }
    interface IConstructionFinancee {
        idws: string;
        idTerrSousJacent: string;
        typeContratConstruction: Common.ICodeLabel<string>;
        typeLogement1: Common.ICodeLabel<string>;
        typeLogement: Common.ICodeLabel<string>;
        nombreLogementConstruction: number;
        dateDebutConstruction: string;
        dateFinConstruction: string;
        surfHabitationCreeParConstruction: number;
        surfAnnx: number;
        presUneGarantieAcheTravaux: Common.ICodeLabel<string>;
    }
    interface IPromotionImmobiliere {
        idws: string;
        nomScpi: string;
        dateDiss: string;
    }
    interface ITerrainFinance {
        idws: string;
        dateAcqsTerr: string;
        surfTerr: number;
    }
    interface IBienSousJacent {
        idws: string;
        crdbienSousJacent: number;
        modeFinancier: Common.ICodeLabel<string>;
        natureGarnt: Common.ICodeLabel<string>;
        modeAcqsBien: Common.ICodeLabel<string>;
        surfTerr: number;
        dateEntrCapitalDateAcqs: string;
        typeObjetCommercialisation: Common.ICodeLabel<string>;
        libTypeObjetCommToc: () => string;
        typeObjetRegle: Common.ICodeLabel<string>;
        libelleTypeObjetRegleTor: () => string;
        montantEstmVenl: number;
        dateEstmVenl: string;
        codeModeleEstmVenl: Common.ICodeLabel<string>;
        isTerrainSousJacent: boolean;
    }
    interface IResultatSGFGAS {
        listeAno: Common.IAnomalieLecture[];
        devisEcoPTZ: boolean;
        creationDossierSGFGAS: boolean;
    }
}

declare namespace ICBusiness.Models.ParamCoutTravauxEcoPtz {
    interface IParamCoutTravauxEcoPtz {
        idCaisseEpargne: number;
        dateDebutApplication: string;
        codeNatureTravaux: string;
        codeTypologieCoutTravaux: string;
        dateFinApplication: string;
        paramTypologieTravaux: IParamTypologieTravaux;
    }
    interface IParamTypologieTravaux {
        idCaisseEpargne: number;
        codeTypologieCoutTravaux: string;
        libelleCreationTypologieCout: string;
        libelleLongTypologieCout: string;
    }
    interface IParamTypologietField {
        montant: number;
        libelleLongTypologieCout: string;
        codeTypologieCoutTravaux: string;
        hasError: boolean;
        isFirstField: boolean;
        isLastField: boolean;
    }
}

declare module ICBusiness.Models {
    interface IPiecoData {
        piecesClient: IPiecoModele[];
        piecesAgence: IPiecoModele[];
        controles: IPiecoModele[];
        commentairePieceClient: string;
        commentairePieceAgence: string;
        erreurContexteDossierNumerique: IErreurDossierNumerique;
    }
    interface IPiecoModele {
        sousTitre: Models.Common.ICodeLabel<string>;
        pieces: IPiece[];
    }
    interface IPiece {
        idws: string;
        libelle: string;
        processus: Models.Common.ICodeLabel<string>;
        statutCode: number;
        acquisition: Models.Common.ICodeLabel<string>;
        aide: string;
        avis: string;
        anciensAvisEtStatut: IAnciensAvisEtStatut;
        typePiece: Enum.EnumTypePiece;
    }
    interface ILibelleEnteteTableau {
        thPiece: string;
        thProcessus: string;
        thStatut: string;
    }
    interface IErreurDossierNumerique {
        titre: string;
        libellesErreurs: string[];
    }
    interface IAnciensAvisEtStatut {
        statutAgence: number;
        statutBoOuConformite: number;
        avisAgence: string;
        avisBoOuConformite: string;
    }
}

declare namespace ICBusiness.Models.Preferences {
    interface IPreferenceUtilisateur {
        modeCalcul: Constantes.Preferences.ModeCalcul.ModeCalcul;
        modeRestitution: Constantes.Preferences.ModeRestitution.ModeRestitution;
    }
}

declare namespace ICBusiness.Models.RefusAssurances {
    /**
     * Modèle d'un refus d'assurance externe pour la liste
     */
    interface IRefusAssurance {
        id: string;
        libelleAssure: string;
        compagnie: string;
        referenceContrat: string;
        dateImpressionCourrier: string;
    }
    interface IRefusAssuranceDetail {
        idws: string;
        assure: ICBusiness.Models.Common.ICodeLabel<string>;
        compagnie: string;
        referenceContrat: string;
        dateReceptionDemande: string;
        rolePersonne: string;
        motif: string;
    }
    interface IResultatEditionREFA {
        fluxImpression: string;
        listeAnomalieLecture: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.Pvh {
    /**
     * Données representant le garant de la garantie hyp donnée par un tiers d'un projet pvh
     */
    interface IProprietaire {
        idws: string;
        civilite: string;
        nom: string;
        prenom: string;
        age: number;
        isEmprunteur: boolean;
        quotitePleinePropriete: number;
        quotiteNuePropriete: number;
        quotiteUsufruit: number;
        idwsPerso: string;
    }
    /**
     * Données representant la garantie principale d'un projet pvh
     */
    interface IGarantiePrincipale {
        idws: string;
        estComplete: boolean;
        address: IAddressBien;
        bien: string;
        typeDeBien: number;
        isLibreHypo: number;
        isOccupe: number;
        occupePar: number;
        dateAcquisition: Date;
        montantAcquisition: number;
        typeDeLogement: string;
        pacteCommissoire: number;
        surfaceHabitable: number;
        surfaceAnnexe: number;
        surfaceTerrain: number;
        zoneImplantation: string;
        qualiteEmplacement: number;
        destinationBien: number;
        bureauHypoOuFoncier: string;
        volumeOuAmalfi: string;
        datePublication: Date;
        numero: number;
        idwsGarantie: string;
        idwsHypoImo: string;
        referencesLots: ILot[];
        referencesCadastres: ICadastre[];
    }
    interface IAddressBien {
        adresseLigne1: string;
        adresseLigne1Suite: string;
        adresseLigne3: string;
        adresseLigne4: string;
        adresseLigne5: string;
        codePays: string;
        codePoste: string;
        ville: string;
    }
    interface IReference {
        idws: string;
        reference: string;
        numeroRelatif: number;
    }
    interface ICadastre extends IReference {
        section: string;
        surface: number;
        commentaires: string;
    }
    interface ILot extends IReference {
        nature: ICBusiness.Models.Common.ICodeLabel<number>;
        tantieme: number;
    }
    interface IExpertise {
        id: string;
        idwsHypoImmo: string;
        demande: IDemandeExpertise;
        retour: IRetourExpertise;
    }
    interface IRetourExpertise {
        adressesMailDestinataire: string[];
        noteBien: Models.Common.ICodeLabel<number>;
        montantExpertise: number;
        observation: string;
        dateEstimation: string;
        anomalies: Models.Common.IAnomalieLecture[];
    }
    interface IDemandeExpertise {
        dateDemande: string;
        numCommandeImothep: string;
        numDosImothep: string;
        anomalies: Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.RedacteurActe {
    interface IRedacteurActe {
        email: string;
        id: string;
        idPersonne: string;
        intitule: string;
        nom: string;
        numeroTelephone: string;
        prenom: string;
        estObligatoire: boolean;
        adresse: Common.IAddress;
        datePrevSigneNotaire: string;
    }
}

declare namespace ICBusiness.Models.RemiseOffre {
    /**
     * Interface pour les données de la remise de l'offre
     */
    interface IRemiseOffre {
        /**
         * Anomalie sur la remise de l'offre
         */
        anomalies: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.SignataireElectronique {
    interface ISignatairesComplet {
        signataires: ISignataire[];
        signatairesDelegataires: ISignataire[];
        anomalies: string[];
    }
    /**
     * Interface pour les données de la remise de l'offre
     */
    interface ISignataire {
        id: string;
        clientGender: number;
        clientFirstName: string;
        clientBirthName: string;
        clientLastName: string;
        clientTitle: string;
        clientBirthday: string;
        clientType: number;
        clientId: string;
        clientRole: string;
        isSignataire: boolean;
        authorizeSignature: boolean;
        isDelegataire: boolean;
        currentMail: string;
        currentPhone: string;
        mails: string[];
        phones: string[];
        isEntrepreneurIndividuel: boolean;
        isEirl: boolean;
        isAccordConjointRequis: boolean;
        isAccordConjoint: boolean;
        nomConjoint: string;
        isMandataire: boolean;
        nomMandataire: string;
        vertuMandataire: string;
    }
}

declare namespace ICBusiness.Models.SignatureOffre {
    /**
     * Interface pour les informations générales d'une signature d'offre
     */
    interface ISignatureOffre {
        /**
         * Date de l'entrée en gestion du dossier
         */
        dateEntreeEnGestion: string;
        /**
         * Indique si le dossier est passé en gestion
         */
        estPasseEnGestion: boolean;
        /**
         * Indique si le dossier contient des mandats SEPA
         */
        hasMandatsSepa: boolean;
        /**
         * Numéro de l'offre
         */
        numeroOffre: number;
        /**
         * Type de loi
         */
        typeDeLoi: Enum.TypeLoi;
        /**
         * Délai pendant lequel l'emprunteur peut se rétracter et ne pas donner suite
         */
        delaiDeRetractation?: number;
        /**
         * Délai minimum de versement - utilisé lors d'une livraison immédiate
         */
        delaiMinimumVersement?: number;
        /**
         * Date avant laquelle l'enregistrement des signatures n'est pas autorisé
         */
        dateMinimumAcceptation?: string;
        /**
         * Indique si le délai de rétractation peut être réduit au détail minimum de versement
         */
        canDoLivraisonImmediate?: boolean;
    }
}

declare namespace ICBusiness.Models.SignatureElectroniqueGene {
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    interface IInformationSignataireOffre {
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationSignataireDemandeDeCreditAgence {
        /**
         * DateMiseADispoDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateMiseADispoDemandeDeCredit: string;
        /**
         * DateSignatureDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDemandeDeCredit: string;
    }
    interface IInformationSignataireGenerique {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * InformationsSignataireOffre
         */
        informationsSignataireOffre: IInformationSignataireOffre;
        /**
         * InformationSignataireDemandeDeCreditAgence
         */
        informationSignataireDemandeDeCreditAgence: IInformationSignataireDemandeDeCreditAgence;
    }
    interface IInformationDossierSignatureOffre {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierDemandeDeCreditAgence {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierSignatureGenerique {
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         * Ce booléen détermine effectivement si tous les documents obligatoires sont ajoutés. Le dossier peut être validé par l’agent et en fonction de son habilitation il peut envoyer l’offre au client.
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         * Cette propriété indique si le dossier est validé par l’agent. Si elle est renseignée à ‘true’, le dossier est gelé par conséquent on ne peut plus faire de modification.
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         * Cette propriété permet de savoir si le dossier a été complètement signé.
         */
        estDossierSigne: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataireGenerique>;
        /**
         * InformationsSignatureOffre
         */
        informationsSignatureOffre: IInformationDossierSignatureOffre;
        /**
         * InformationsDemandeDeCreditAgence
         */
        informationsDemandeDeCreditAgence: IInformationDossierDemandeDeCreditAgence;
    }
    interface IDocumentSignatureElectroniqueLecture extends IElementLecture {
        /**
         * IdentifiantDocument
         */
        identifiantDocument: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * IdentifiantIDN
         */
        identifiantIDN: string;
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * NomDocument
         */
        nomDocument: string;
        /**
         * RefDocProd
         */
        referenceDocProd: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Origine
         */
        origine: string;
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
        /**
         * EstPresent
         */
        estPresent: boolean;
        /**
         * IndicePlan
         */
        indicePlan: number;
        /**
         * IndiceCredit
         */
        indiceCredit: number;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * estDocNeo
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
        /**
         * Typologie du document
         */
        typologieDocument: number;
    }
    interface ISignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureGenerique;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IInformationSignataire {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationDossierSignature {
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         * Ce booléen détermine effectivement si tous les documents obligatoires sont ajouté. Le dossier peut être validé par l’agent et en fonction de son habilitation il peut envoyer l’offre au client.
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         * Cette propriété indique si le dossier est validé par l’agent. Si elle est renseignée à ‘True’, le dossier est gelé par conséquent on ne peut plus faire de modification.  On ne peut qu’envoyer le dossier au client.
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         * Cette propriété permet de savoir si le dossier a été complètement signé.
         */
        estDossierSigne: boolean;
        /**
         * EstProcessusLance
         * Cette propriété indique si la liasse a été envoyé au client pour signature.
         */
        estProcessusLance: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataire>;
    }
    interface IOffreSignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignature;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IResultatOffreSignatureElectronique {
        /**
         * Action
         */
        action: string;
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdentiteActe
         */
        identiteActe: string;
        /**
         * SignatureElectroniqueLecture
         */
        signatureElectroniqueLecture: ISignatureElectroniqueLecture;
        /**
         * OffreSignatureElectroniqueLecture
         */
        offreSignatureElectroniqueLecture: IOffreSignatureElectroniqueLecture;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.SignatureElectronique {
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalie
         */
        listeAnomalieLecture: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
    interface IInformationDossierSignatureLecture {
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         * Ce booléen détermine effectivement si tous les documents obligatoires sont ajoutés. Le dossier peut être validé par l’agent et en fonction de son habilitation il peut envoyer l’offre au client.
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         * Cette propriété indique si le dossier est validé par l’agent. Si elle est renseignée à ‘true’, le dossier est gelé par conséquent on ne peut plus faire de modification.
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         * Cette propriété permet de savoir si le dossier a été complètement signé.
         */
        estDossierSigne: boolean;
        /**
         * EstProcessusLance
         * Cette propriété indique si la liasse a été envoyée au client pour signature.
         */
        estProcessusLance: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataire>;
    }
    interface IDocumentSignatureElectroniqueLecture extends IElementLecture {
        /**
         * IdentifiantDocument
         */
        identifiantDocument: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * IdentifiantIDN
         */
        identifiantIDN: string;
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * NomDocument
         */
        nomDocument: string;
        /**
         * RefDocProd
         */
        referenceDocProd: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Origine
         */
        origine: string;
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
        /**
         * EstPresent
         */
        estPresent: boolean;
        /**
         * IndicePlan
         */
        indicePlan: number;
        /**
         * IndiceCredit
         */
        indiceCredit: number;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * estDocNeo
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
        /**
         * Typologie du document
         */
        typologieDocument: number;
    }
    interface IOffreSignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureLecture;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IInformationSignataire {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
}

declare namespace ICBusiness.Models.SignatureElectronique {
    interface IAlimDossSignElecGeneRequest {
        entreeSignatureElectronique: IEntreeSignatureElectronique;
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueMaj>;
    }
    interface IEntreeSignatureElectronique {
        /**
         * sIdntDoss
         */
        idDossier: string;
        /**
         * CodeSignature
         */
        codeSignature: number;
    }
    interface IElementMaj {
        /**
         * Idws
         */
        idws: string;
    }
    interface IDocumentSignatureElectroniqueMaj extends IElementMaj {
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
    }
    interface IInformationSignataireOffre {
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationSignataireDemandeDeCreditAgence {
        /**
         * DateSignatureDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDemandeDeCredit: string;
        /**
         * DateMiseADispoDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateMiseADispoDemandeDeCredit: string;
    }
    interface IInformationSignataireGenerique {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * InformationsSignataireOffre
         */
        informationsSignataireOffre: IInformationSignataireOffre;
        /**
         * InformationSignataireDemandeDeCreditAgence
         */
        informationSignataireDemandeDeCreditAgence: IInformationSignataireDemandeDeCreditAgence;
    }
    interface IInformationDossierSignatureOffre {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierDemandeDeCreditAgence {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierSignatureGenerique {
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataireGenerique>;
        /**
         * InformationsSignatureOffre
         */
        informationsSignatureOffre: IInformationDossierSignatureOffre;
        /**
         * InformationsDemandeDeCreditAgence
         */
        informationsDemandeDeCreditAgence: IInformationDossierDemandeDeCreditAgence;
    }
    interface ISignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureGenerique;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: Array<IDocumentSignatureElectroniqueLecture>;
    }
    interface IInformationDossierSignature {
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataire>;
    }
    interface IResultatOffreSignatureElectronique {
        /**
         * Action
         */
        action: string;
        /**
         * Code
         */
        code: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * IdentiteActe
         */
        identiteActe: string;
        /**
         * SignatureElectroniqueLecture
         */
        signatureElectroniqueLecture: ISignatureElectroniqueLecture;
        /**
         * OffreSignatureElectroniqueLecture
         */
        offreSignatureElectroniqueLecture: IOffreSignatureElectroniqueLecture;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Models.SignatureElectronique {
    interface IResultatLectureDocumentActeSignature {
        /**
         * FluxDocumentIDN
         */
        fluxDocumentIDN: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: Array<ICBusiness.Models.Common.IAnomalieLecture>;
    }
}

declare namespace ICBusiness.Modeles.SignatureElectronique {
    interface IElementLecture {
        /**
         * Idws
         */
        idws: string;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
    interface IEntreeSignatureElectronique {
        /**
         * sIdntDoss
         */
        idDossier: string;
        /**
         * CodeSignature
         */
        codeSignature: number;
    }
    interface IInformationSignataireOffre {
        /**
         * DateSignatureRecepisse
         * Type date au format yyyy-MM-dd
         */
        dateSignatureRecepisse: string;
        /**
         * DateMiseAdispoOffre
         * Type date au format yyyy-MM-dd
         */
        dateMiseAdispoOffre: string;
        /**
         * DateSignatureOffre
         * Type date au format yyyy-MM-dd
         */
        dateSignatureOffre: string;
    }
    interface IInformationSignataireDemandeDeCreditAgence {
        /**
         * DateSignatureDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateSignatureDemandeDeCredit: string;
        /**
         * DateMiseADispoDemandeDeCredit
         * Type date au format yyyy-MM-dd
         */
        dateMiseADispoDemandeDeCredit: string;
    }
    interface IInformationSignataireGenerique {
        /**
         * LibelleTitreCivilite
         */
        libelleTitreCivilite: string;
        /**
         * NomRaisonSociale
         */
        nomRaisonSociale: string;
        /**
         * Prenoms
         */
        prenoms: string;
        /**
         * InformationsSignataireOffre
         */
        informationsSignataireOffre: IInformationSignataireOffre;
        /**
         * InformationSignataireDemandeDeCreditAgence
         */
        informationSignataireDemandeDeCreditAgence: IInformationSignataireDemandeDeCreditAgence;
    }
    interface IInformationDossierSignatureOffre {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierDemandeDeCreditAgence {
        /**
         * EstProcessusLance
         */
        estProcessusLance: boolean;
    }
    interface IInformationDossierSignatureGenerique {
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * IdentifiantActeIDN
         */
        identifiantActeIDN: string;
        /**
         * DateCreationDosElec
         */
        dateCreationDosElec: string;
        /**
         * DateOuvertureTransaction
         * Type date au format yyyy-MM-dd
         */
        dateOuvertureTransaction: string;
        /**
         * DateCreationActe
         * Type date au format yyyy-MM-dd
         */
        dateCreationActe: string;
        /**
         * IdentifiantEtatDossier
         */
        identifiantEtatDossier: string;
        /**
         * LibelleEtatDossier
         */
        libelleEtatDossier: string;
        /**
         * MotifAnnulation
         */
        motifAnnulation: string;
        /**
         * ActeExiste
         */
        acteExiste: boolean;
        /**
         * EstDossierComplete
         */
        estDossierComplete: boolean;
        /**
         * EstDossierValide
         */
        estDossierValide: boolean;
        /**
         * EstDossierSigne
         */
        estDossierSigne: boolean;
        /**
         * InformationsSignataire
         */
        informationsSignataire: Array<IInformationSignataireGenerique>;
        /**
         * InformationsSignatureOffre
         */
        informationsSignatureOffre: IInformationDossierSignatureOffre;
        /**
         * InformationsDemandeDeCreditAgence
         */
        informationsDemandeDeCreditAgence: IInformationDossierDemandeDeCreditAgence;
    }
    interface IDocumentSignatureElectroniqueLecture extends IElementLecture {
        /**
         * IdentifiantDocument
         */
        identifiantDocument: string;
        /**
         * CodeTypeEntite
         */
        codeTypeEntite: string;
        /**
         * IdentifiantIDN
         */
        identifiantIDN: string;
        /**
         * IdentifiantComplet
         */
        identifiantComplet: string;
        /**
         * NomDocument
         */
        nomDocument: string;
        /**
         * RefDocProd
         */
        referenceDocProd: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * Origine
         */
        origine: string;
        /**
         * TypeSignature
         */
        typeSignature: string;
        /**
         * FluxBinaire
         */
        fluxBinaire: string;
        /**
         * EstPresent
         */
        estPresent: boolean;
        /**
         * IndicePlan
         */
        indicePlan: number;
        /**
         * IndiceCredit
         */
        indiceCredit: number;
        /**
         * IdPersonne
         */
        idPersonne: string;
        /**
         * Exemplaire
         */
        exemplaire: string;
        /**
         * LibelleEntiteRattachement
         */
        libelleEntiteRattachement: string;
        /**
         * NumeroOrdre
         */
        numeroOrdre: number;
        /**
         * Obligatoire
         */
        obligatoire: boolean;
        /**
         * estDocNeo
         */
        estDocNEO: boolean;
        /**
         * EstDocOffre
         */
        estDocOffre: boolean;
    }
    interface ISignatureElectroniqueLecture extends IElementLecture {
        /**
         * InformationDossierSignature
         */
        informationDossierSignature: IInformationDossierSignatureGenerique;
        /**
         * ListeDocumentIDN
         */
        listeDocumentIDN: IDocumentSignatureElectroniqueLecture[];
    }
    interface IResultatTraitementSignature {
        /**
         * SignatureElectroniqueLecture
         */
        signatureElectroniqueLecture: ISignatureElectroniqueLecture;
        /**
         * ListeAnomalieLecture
         */
        listeAnomalieLecture: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.SuiviEditions {
    interface IRetourSuiviEditions {
        listeSuiviDocument: ISuiviDocument[];
        listeAnomalies: Common.IAnomalieLecture[];
    }
    interface ISuiviDocument {
        documentLabel: string;
        code: string;
        isDocumentPersonne: boolean;
        isSelected: boolean;
        editionEnCours: ISuiviEdition;
        editionHistorisees: ISuiviEdition[];
    }
    interface ISuiviEdition {
        idws: string;
        eligibilite: string;
        estSigneElectEligible: boolean;
        canal: string;
        etatSignature: string;
        codeEtatSignatureDocument: string;
        dateEdition: string;
        dateEnvoiDocument: string;
        dateDocument: string;
        dateSignature: string;
        suiviSignataires: ISuiviSignataire[];
        identifiantWsPersonne: string;
    }
    interface ISuiviSignataire {
        identifiantPersonne: string;
        libelleComplet: string;
        etatSignatureDocument: string;
        dateEnvoiDocument: string;
        dateSignature: string;
    }
}

declare namespace ICBusiness.Models.Transfert {
    interface ITransfererDossierViasIdentifiantRequest {
        identifiantDossier: string;
        informationTransfert: ISdInformationTransfert;
        bLancerControleDossier: boolean;
    }
    interface ISdInformationTransfert {
        /**
         * TypeTraitementTransfertDossier
         */
        typeTraitementTransfertDossier: number;
        /**
         * TypeTransfertDossier
         */
        typeTransfertDossier: number;
        /**
         * SIdntAgntTranf
         */
        sIdAgentTranf: string;
        /**
         * Idfas1_1erElmntStrc
         */
        premierElementStructure: string;
        /**
         * Idfas2_2eElmntStrc
         */
        deuxiemeElementStructure: string;
        /**
         * Idfas3_3eElmntStrc
         */
        troisiemeElementStructure: string;
        /**
         * Idfas4_4eElmntStrc
         */
        quatriemeElementStructure: string;
        /**
         * Idfas5_5eElmntStrc
         */
        cinquiemeElementStructure: string;
        /**
         * Idfas6_6eElmntStrc
         */
        sixiemeElementStructure: string;
        /**
         * Raison
         */
        raison: string;
        /**
         * Avis
         */
        avis: string;
    }
    interface IRetourTranfererDossier {
        /**
         * Anomalies
         */
        anomalies: ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * bEstTransferer
         */
        estTransferer: boolean;
    }
    interface ITransfererDossierViaResumeRequest {
        dossierResume: Array<IDossierResume>;
        informationTransfert: ISdInformationTransfert;
    }
    interface IAutorisationDossier {
        /**
         * Consultation
         */
        consultation: boolean;
        /**
         * ConsultationAvis
         */
        consultationAvis: boolean;
        /**
         * Instruction
         */
        instruction: boolean;
        /**
         * EmissionAvis
         */
        emissionAvis: boolean;
        /**
         * PassageSansSuite
         */
        passageSansSuite: boolean;
        /**
         * PriseEnCharge
         */
        priseEnCharge: boolean;
        /**
         * RetourPriseEnCharge
         */
        retourPriseEnCharge: boolean;
        /**
         * AnnulationTransfert
         */
        annulationTransfert: boolean;
        /**
         * MiseEnConformite
         */
        miseEnConformite: boolean;
        /**
         * RetourConformite
         */
        retourConformite: boolean;
        /**
         * AdminMDV
         */
        adminMDV: boolean;
        /**
         * Copie
         */
        copie: boolean;
        /**
         * Decision
         */
        decision: boolean;
        /**
         * RetourDecision
         */
        retourDecision: boolean;
        /**
         * MajAdmin
         */
        mAJAdmin: boolean;
        /**
         * Prorogation
         */
        prorogation: boolean;
        /**
         * Import
         */
        impor: boolean;
        /**
         * Duplication
         */
        duplication: boolean;
        /**
         * TransfertConformite
         */
        transfertConformite: boolean;
        /**
         * TransfertAutreBO
         */
        transfertAutreBO: boolean;
        /**
         * TransfertPropriete
         */
        transfertPropriete: boolean;
    }
    interface IDossierResume {
        /**
         * Idfadi_IdntDoss
         */
        idDossier: string;
        /**
         * VersDoss
         */
        versionDossier: number;
        /**
         * Dtfccr_DateCretDoss
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateCreationDossier: string;
        /**
         * Lbfpnm_NomRaisSoclEmpr
         */
        nomRaisonSocialeEmprunt: string;
        /**
         * Lbfaes_LiblEnttPrprDoss
         */
        libelleEntiteProprietaireDossier: string;
        /**
         * Lbfiba_LiblAgncAffec
         */
        libelleAgenceAffectation: string;
        /**
         * Cefado_CodeEttDoss
         */
        codeEtatDossier: number;
        /**
         * Cdfpci_CodeTitrCivl
         */
        codeTitreCivilite: string;
        /**
         * Dmfidm_DateDernMaj
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateDernierMAJ: string;
        /**
         * Cefwou_CodeEtatOuvrDoss
         */
        codeEtatOuvertureDossier: number;
        /**
         * Idfaec_IdntAgntConnDoss
         */
        idAgentConnaissanceDossier: string;
        /**
         * Ctfado_TypeDoss
         */
        typeDossier: number;
        /**
         * Cdfcni_CodeTypeObjtComl
         */
        codeTypeObjetCommercialisation: string;
        /**
         * Cdfcno_CodeNatrFinn
         */
        codeNatureFinancier: string;
        /**
         * Cdfcke_CodeCatgEmpr
         */
        codeCategorieEmprunt: string;
        /**
         * Lbfoa5_Ville
         */
        ville: string;
        /**
         * Mcfoof_CoutTotlObjt
         */
        coutTotalObjet: number;
        /**
         * Idfaei_IdntAgntInstrDoss
         */
        idAgentInstructionDossier: string;
        /**
         * Lbfpen_NomPres
         */
        nomPres: string;
        /**
         * Llfcco_LiblConvPres
         */
        libelleConventionPres: string;
        /**
         * Idfas1_1erElmntStrc
         */
        premierElementStructure: string;
        /**
         * Idfas2_2eElmntStrc
         */
        deuxiemeElementStructure: string;
        /**
         * Idfas3_3eElmntStrc
         */
        troisiemeElementStructure: string;
        /**
         * Idfas4_4eElmntStrc
         */
        quatriemeElementStructure: string;
        /**
         * Idfas5_5eElmntStrc
         */
        cinquiemeElementStructure: string;
        /**
         * Idfas6_6eElmntStrc
         */
        sixiemeElementStructure: string;
        /**
         * Idfast_IdntelemStrcInstr
         */
        idElementStructureInstruction: string;
        /**
         * Lidanp_NomPatrPartc
         */
        nomPatrPartc: string;
        /**
         * Lidapp_PremPrnmEttCivlPartc
         */
        premierPrenomEtatCivilitePartc: string;
        /**
         * Dffavl_DateFinValdOffr
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateFinValiditeOffre: string;
        /**
         * NatureProjet
         */
        natureProjet: number;
        /**
         * Npfcof_NbPerdValdOffrCont
         */
        nombrePeriodeValiditeOffreContrat: number;
        /**
         * Dtfieo_DateEdtnOffr
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateEditionOffre: string;
        /**
         * Cdfaod_CodeOrigDemn
         */
        codeOrigineDemande: number;
        /**
         * Dgfano_DateHorzProj
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateHorizonProjet: string;
        /**
         * Cdfado_CodeVisbInstr
         */
        codeVisbInstruction: number;
        /**
         * Cdfiei_CodeImprParExprVers
         */
        codeImprParExpressionVersement: number;
        /**
         * Cdfiag_CodeAppliChrgDoss
         */
        codeApplicationChargeDossier: number;
        /**
         * Cdfadv_CodeDevs
         */
        codeDevise: string;
        /**
         * Ctfipi_CodePrcsInstr
         */
        codeProcessusInstruction: string;
        /**
         * Ctfitr_CodeTrtComp
         */
        codeTraitementComp: string;
        /**
         * Cefipc_CodeEttPrsChrgDoss
         */
        codeEtatPresenceChargeDossier: number;
        /**
         * Cefiac_CodeEttActvDoss
         */
        codeEtatActiviteDossier: number;
        /**
         * Ctfaen_CodeTypeEngg
         */
        codeTypeEngagement: string;
        /**
         * Idfaep_IdntEnttTitlClnt
         */
        idEntiteTitulaireClient: string;
        /**
         * Idfada_IdntAgntPourDecsConf
         */
        idAgentPourDecisionConf: string;
        /**
         * Ctfats_CodeTypeElmtStrc
         */
        codeTypeElementStructure: string;
        /**
         * Idfabp_IdntAgntBoActlChrgDoss
         */
        idAgentBoActuarielChargeDossier: string;
        /**
         * Idfabi_IdntEnttPourTrnfBo
         */
        idEntitePourTransfertBo: string;
        /**
         * Ctfabe_CodeTypeElmtStrcBo
         */
        codeTypeElementStructureBo: string;
        /**
         * Idfab1_1erElmntStrc
         */
        premierElementStructure1: string;
        /**
         * Idfab2_2eElmntStrc
         */
        deuxiemeElementStructure1: string;
        /**
         * Idfab3_3eElmntStrc
         */
        troisiemeElementStructure1: string;
        /**
         * Idfab4_4eElmntStrc
         */
        quatriemeElementStructure1: string;
        /**
         * Idfab5_5eElmntStrc
         */
        cinquiemeElementStructure1: string;
        /**
         * Idfab6_6eElmntStrc
         */
        sixiemeElementStructure1: string;
        /**
         * Idfaes_IdntAgntPrprDoss
         */
        idAgentProprietaireDossier: string;
        /**
         * Ctfcse_CodeEtpeSiml
         */
        codeEtapeSimulation: number;
        /**
         * Ctfiai_CodeAlrt
         */
        codeAlerte: number;
        /**
         * Ctfaev_CodeTypeEven
         */
        codeTypeEven: string;
        /**
         * Ctfiax_CodeAlrtEmis
         */
        codeAlerteEmis: string;
        /**
         * Nofiax_NumeAlrt
         */
        numeroAlerte: number;
        /**
         * Nofaed_NumeReltEvenDoss
         */
        numeroRelationEvenDossier: number;
        /**
         * RefrExtnAgntConn
         */
        referenceExterneAgentConnaissance: string;
        /**
         * Idfipp_IdntParnPrnc
         */
        idParentPrincipal: string;
        /**
         * Llfic1_CritRechAppli1
         */
        critereRechercheApplication1: string;
        /**
         * Llfic2_CritRechAppli2
         */
        critereRechercheApplication2: string;
        /**
         * Llfic3_CritRechAppli3
         */
        critereRechercheApplication3: string;
        /**
         * Llfic4_CritRechAppli4
         */
        critereRechercheApplication4: string;
        /**
         * Llfic5_CritRechAppli5
         */
        critereRechercheApplication5: string;
        /**
         * ActionsAutorisees
         */
        actionsAutorisees: IAutorisationDossier;
    }
}

declare namespace ICBusiness.Models.Transfert {
    interface IRendreDossierResultat {
        operationReussie: boolean;
        anomalies: ICBusiness.Models.Common.IAnomalieLecture[];
    }
}

declare namespace ICBusiness.Models.SuivisPlanifies {
    interface ISuiviPlanifieCatalogue {
        /**
         * Ctfcrv_CodeTypeSuivPlnf
         */
        codeTypeSuivantPlafond: string;
        /**
         * Cifcai_CodeSuivPlnfAuto
         */
        codeSuivantPlafondAutomatique: number;
        /**
         * Cifcpd_CodePosmtParDeft
         */
        codePositionnementParDeft: number;
        /**
         * Cifcpe_CodeSuivPlnfPerdq
         */
        codeSuivantPlafondPeriodique: number;
        /**
         * Npfcrw_NbSuivPlnf
         */
        nombreSuivantPlafond: number;
        /**
         * Ptfcrv_PerdicSuivPlnf
         */
        periodiciteSuivantPlafond: number;
        /**
         * Ctfcfp_CodeTypePhas
         */
        codeTypePhase: string;
        /**
         * Npfcrx_DelaiDeclt
         */
        delaiDeclaration: number;
        /**
         * Ptfcrx_PerdicDelaiDeclt
         */
        periodiciteDelaiDeclaration: number;
        /**
         * Ctfcrw_CodeCatgSuivPlnf
         */
        codeCategorieSuivantPlafond: string;
        /**
         * Llfcrv_LiblLongSuivPlnf
         */
        libelleLongSuivantPlafond: string;
        /**
         * Lcfcrv_LiblCrtSuivPlnf
         */
        libelleCreationSuivantPlafond: string;
        /**
         * Ctfcrx_CodeAffecSuivPlan
         */
        codeAffectationSuivantPlan: number;
        /**
         * Idfccl_IdntClse
         */
        idClasse: string;
        /**
         * Llfccl_TitrClse
         */
        titreClasse: string;
        /**
         * Lbfccl_LiblClse
         */
        libelleClasse: string;
        /**
         * Ctfcrd_CodeReglDeclt
         */
        codeRegleDeclaration: string;
        /**
         * Llfcrd_LiblLongReglDeclt
         */
        libelleLongRegleDeclaration: string;
        labelTypeSuivis: string;
        estProduit: string;
    }
}

declare namespace ICBusiness.Models.SuivisPlanifies {
    enum EnumTypeSuivis {
        impose = 0,
        propose = 1,
        autre = 2,
    }
    interface ISuiviPlanifieBase {
        idws: string;
        typeSuivisLabel: string;
        typeSuivis: EnumTypeSuivis;
        label: string;
        product: number;
        estProduit: string;
        canBeDeleted: boolean;
        dateSuivantPlafond: string;
        date: Date;
        labelTraitement: string;
        codeTypeSuivantPlafond: string;
    }
    interface ISuivisPlanifies extends ISuiviPlanifieBase {
        obligatoire: boolean;
        launcher: string;
        date: Date;
        estVisibleTypePhase: boolean;
        libelleTypePhase: string;
        libelleDelaiDeclenchement: string;
        estVisiblePeriode: boolean;
        estActifPeriodique: boolean;
        libellePeriode: string;
        estVisibleDuree: boolean;
        libelleDuree: string;
        estLienModificationActif: boolean;
        estActifDateSuiviPlanifie: boolean;
        libelleLibrAssuranceSuivant: string;
        libelleClause: string;
        aEditer: boolean;
        libelleAEditer: string;
    }
    interface ICreditSuivisPlanifies {
        idwsCredit: string;
        libelleLongCredit: string;
        codeDevise: string;
        montant: number;
        nombrePeriodeMensuelle: number;
        listeSuivisPlanifies: ISuivisPlanifies[];
        idProduitFinancier: string;
    }
}

declare namespace ICBusiness.Models.TypeEds {
    interface ITypeEds {
        /**
         * Code du type d'EDS
         */
        codeType: string;
        /**
         * Libellé de l'EDS
         */
        libelle: string;
        /**
         * Niveau dans la hiérarchie EDS
         */
        rang: number;
    }
}

declare namespace ICBusiness.Services.InformationsPtz {
    import InfoPtzModel = Models.InformationsPtz;
    interface IInformationsPtzService {
        getQuestionnaireAnnexePtz(idDossier: string): ng.IPromise<InfoPtzModel.IQuestionnaireAnnexe>;
        getNewOccupation(): Models.InformationsPtz.IInformationOccupation;
        saveQuestionnaireAnnexePtz(identifiantDossier: string, initialDatas: InfoPtzModel.IQuestionnaireAnnexe, questionsAnnexes: InfoPtzModel.IQuestionAnnexe[], formulairesStatutOccupation: InfoPtzModel.IFormulaireStatutOccupation[], formulaireLienAvecEmprunteur: InfoPtzModel.IFormulaireLienAvecEmprunteur, formulairesRattachementFoyerFiscal: InfoPtzModel.IFormulaireRattachementFoyerFiscal[], idwsElementDeleted: string[]): ng.IPromise<void>;
        getInfoComplementairePTZ(idDossier: string, idPlanFinancement: string): ng.IPromise<InfoPtzModel.IInfoComplementairePTZ>;
        estQuestionsPtzTotalementSaisies(idDossier: string): ng.IPromise<boolean>;
    }
    class InformationsPtzService implements IInformationsPtzService {
        private $q;
        private schemaService;
        private elementService;
        private informationPtzService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, informationPtzService: ICRest.Services.Dossier.IInformationPtzService);
        getQuestionnaireAnnexePtz(idDossier: string): ng.IPromise<InfoPtzModel.IQuestionnaireAnnexe>;
        getNewOccupation(): InfoPtzModel.IInformationOccupation;
        getInfoComplementairePTZ(idDossier: string, idPlanFinancement: string): ng.IPromise<InfoPtzModel.IInfoComplementairePTZ>;
        saveQuestionnaireAnnexePtz(identifiantDossier: string, initialDatas: InfoPtzModel.IQuestionnaireAnnexe, questionsAnnexes: InfoPtzModel.IQuestionAnnexe[], formulairesStatutOccupation: InfoPtzModel.IFormulaireStatutOccupation[], formulaireLienAvecEmprunteur: InfoPtzModel.IFormulaireLienAvecEmprunteur, formulairesRattachementFoyerFiscal: InfoPtzModel.IFormulaireRattachementFoyerFiscal[], idwsElementDeleted: string[]): ng.IPromise<void>;
        private getStatutsOccupationToSave(initialForm, formStatutOccupation);
        private getOccupantToSave(initialForm, formulaireLienAvecEmprunteur);
        private getRattachementToSave(initialForm, formulairesRattachementFoyerFiscal);
        /**
         * Méthode pour savoir si toutes les questions PTZ on été saisies
         * @param idDossier identifiant du dossier en instruction
         */
        estQuestionsPtzTotalementSaisies(idDossier: string): ng.IPromise<boolean>;
        private estSaisieCompleteFormulaireLienAvecEmprunteur(formulaire);
        private estSaisieCompleteFormulaireRattachementFoyerFiscal(formulaire);
        private estSaisieCompleteFormulaireStatutOccupation(formulaire);
        private estSaisieCompleteQuestionsAnnexes(questions);
    }
}

declare namespace ICBusiness.Services.Assurances {
    import RestModel = ICRest.Modeles;
    /** Services relatifs aux assurances */
    interface IAssurancesService {
        /**
         * Retourne les assurance du premier plan de financement de la liste (il n'y a qu'un plan en conso et pro)
         * @param idDossier
         */
        getAssurances(idDossier: string): ng.IPromise<Models.Assurances.IListAssurances>;
        /**
         * Retourne les assurances du plan de financement passé en paramètre
         * @param idDossier
         * @param idPlanFinancement
         */
        getAssurancesParPlan(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Assurances.IListAssurances>;
        getDetailsAssurance(idDossier: string, idAssurances: string[], dateTraitement: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IAssuranceDetails[]>;
        getDetailsConvention(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IConventionDetails>;
        getAssures(idDossier: string): ng.IPromise<Models.Assurances.IAssure[]>;
        getDetailsAssure(idDossier: string, idPersonne: string, idAssurances: string[], dateTraitement: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IAssureDetails>;
        /** Ajoute une assurance */
        ajouterAssuranceControle(idDossier: string, idPersonne: string, idConvention: string, creditsCouvert: string[]): ng.IPromise<Models.Assurances.IAssuranceAjout>;
        /** Supprime une assurance */
        supprimerAssurance(idDossier: string, idAssurance: string): ng.IPromise<void>;
        /** Liste les conventions d'assurances compatibles avec un couple de personnes/crédits */
        listerConventionsAssuranceCompatible(idDossier: string, dateTraitement: string, codeEtablissement: number, listeIdCredit: string[], listeIdPersonnes: string[]): ng.IPromise<Models.Assurances.IConvention[]>;
        /** Mise à jour des données d'une assurance */
        majCouverturesAssurance(idDossier: string, assurance: Models.Assurances.IAssuranceDetails): ng.IPromise<void>;
        getListeReserves(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        refuserAssurance(idDossier: string, idAssurance: string, dateRefus: string): ng.IPromise<void>;
        majDetailsAssurances(idDossier: string, assurances: Models.Assurances.IAssuranceDetails[]): ng.IPromise<void>;
        accorderAssurances(idDossier: string, assurances: Models.Assurances.IAssuranceDetails[]): ng.IPromise<string[]>;
        getCnpContext(idDossierCnp: string, idPersonne: string, idPlanFinancement: string, codeCollectiviteCnp: string, forcerAction: boolean): ng.IPromise<Models.Assurances.IContextCnp>;
        listerCollectivitesCnp(idDossier: string, idPersonne: string, idPlanFinancement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        creerDossierCnp(idDossier: string, idPersonne: string, idPlanFinancement: string, codeCnp: string, forcerCreation: boolean): ng.IPromise<Models.Assurances.IDossierCnp>;
        lireDecisionCnp(idDossier: string, idPersonne: string, idPlan: string, codeCollectivite: string): ng.IPromise<RestModel.LireDecisionCnp.IResultatDecisionCNP>;
        consulterDocsCnp(idDossier: string, idPersonne: string, idPlan: string): ng.IPromise<Models.Assurances.IDocumentsCnp>;
        /**
         * Mise à jour du montantIndemniteJournaliere pour les assurances ayant l'indemnité journalière obligatoire (Magfi avec ITT)
         * @param idDossier
         * @param idAssurance
         * @param montant
         */
        updateAssuranceMontantIndemnitesJournalieres(idDossier: string, idsAssurance: string[], montantIndemniteJournaliere: number): ng.IPromise<void>;
        supprimerAssurances(idDossier: string, idAssurances: string[]): ng.IPromise<void>;
        /**
         * Transmet la proposition d'assurance à la CNP en faisant des vérifications au préalable
         * @param identifiantDossier
         * @param assuranceByAssure
         * @param forcerControles
         */
        transmettrePropositionCnpPourAde(identifiantDossier: string, assuranceByAssure: Models.Assurances.IAssure, forcerControles?: boolean): ng.IPromise<Models.Assurances.IPropositionCnp>;
        /**
         * Consulter les assurances CNP si nécessaire
         * Renvoie un booléen qui indique s'il y a eu une modification ou non des assurance
         * @param idDossier
         */
        consulterAssuranceCNP(idDossier: string): ng.IPromise<boolean>;
        /** Gestion des dossiers Externe CBP */
        creerDossierExterne(idDossier: string, idPlan: string): ng.IPromise<Models.Assurances.IDossierExterne>;
        lireDossierExterne(idDossier: string, idPlan: string): ng.IPromise<Models.Assurances.IDossierExterne>;
        ouvrirDossierExterne(dossier: Models.Assurances.IDossierExterne, currentPageId: number): ng.IPromise<void>;
    }
    /** Services relatifs aux assurances */
    class AssurancesService implements IAssurancesService {
        private $q;
        private conventionsAssuranceService;
        private creditParametreService;
        private accessoiresService;
        private assuranceService;
        private elementService;
        private dossierExterneService;
        private schemaService;
        private catalogueService;
        private lisaService;
        private parametreFonctionnelService;
        static $inject: string[];
        constructor($q: ng.IQService, conventionsAssuranceService: ICRest.Services.Dossier.IConventionsAssuranceService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, accessoiresService: ICRest.Services.Dossier.IAccessoiresService, assuranceService: ICRest.Services.Dossier.IAssuranceService, elementService: ICRest.Services.Element.IElementService, dossierExterneService: ICRest.Services.Dossier.IDossierExterneService, schemaService: Services.Common.IElementSchemaService, catalogueService: Catalogue.ICatalogueService, lisaService: ICCommon.Services.IlisaService, parametreFonctionnelService: Services.ParametreFonctionnel.IParametreFonctionnelService);
        getAssurances(idDossier: string): ng.IPromise<Models.Assurances.IListAssurances>;
        getAssurancesParPlan(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Assurances.IListAssurances>;
        private ajoutAssuranceAutorise(planFiComplet);
        getDetailsAssurance(idDossier: string, idAssurances: string[], dateTraitement: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IAssuranceDetails[]>;
        getAssures(idDossier: string): ng.IPromise<Models.Assurances.IAssure[]>;
        getDetailsAssure(idDossier: string, idPersonne: string, idAssurances: string[], dateTraitement: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IAssureDetails>;
        listerCollectivitesCnp(idDossier: string, idPersonne: string, idPlanFinancement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getDetailsConvention(dateTraitement: string, idConvention: string, codeEtablissement: number): ng.IPromise<Models.Assurances.IConventionDetails>;
        ajouterAssuranceControle(idDossier: string, idPersonne: string, idConvention: string, creditsCouvert: string[]): ng.IPromise<Models.Assurances.IAssuranceAjout>;
        supprimerAssurance(idDossier: string, idAssurance: string): ng.IPromise<void>;
        supprimerAssurances(idDossier: string, idAssurances: string[]): ng.IPromise<void>;
        listerConventionsAssuranceCompatible(idDossier: string, dateTraitement: string, codeEtablissement: number, listeIdCredit: string[], listeIdPersonnes: string[]): ng.IPromise<Models.Assurances.IConvention[]>;
        majCouverturesAssurance(idDossier: string, assurance: Models.Assurances.IAssuranceDetails): ng.IPromise<void>;
        getListeReserves(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        accorderAssurances(idDossier: string, assurances: Models.Assurances.IAssuranceDetails[]): ng.IPromise<string[]>;
        refuserAssurance(idDossier: string, idAssurance: string, dateRefus: string): ng.IPromise<void>;
        majDetailsAssurances(idDossier: string, assurances: Models.Assurances.IAssuranceDetails[]): ng.IPromise<void>;
        getCnpContext(idDossierCnp: string, idPersonne: string, idPlanFinancement: string, codeCollectiviteCnp: string, forcerAction: boolean): ng.IPromise<Models.Assurances.IContextCnp>;
        lireDecisionCnp(idDossier: string, idPersonne: string, idPlan: string, codeCollectivite: string): ng.IPromise<RestModel.LireDecisionCnp.IResultatDecisionCNP>;
        creerDossierCnp(idDossier: string, idPersonne: string, idPlanFinancement: string, codeCnp: string, forcerCreation: boolean): ng.IPromise<Models.Assurances.IDossierCnp>;
        consulterDocsCnp(idDossier: string, idPersonne: string, idPlan: string): ng.IPromise<Models.Assurances.IDocumentsCnp>;
        updateAssuranceMontantIndemnitesJournalieres(idDossier: string, idsAssurance: string[], montantIndemniteJournaliere: number): ng.IPromise<void>;
        /**
         * Transmet la proposition d'assurance à la CNP en faisant des vérifications au préalable
         * @param identifiantDossier
         * @param assuranceByAssure
         * @param forcerControles
         */
        transmettrePropositionCnpPourAde(identifiantDossier: string, assuranceByAssure: Models.Assurances.IAssure, forcerControles?: boolean): ng.IPromise<Models.Assurances.IPropositionCnp>;
        /**
         * Transmet la proposition d'assurance à la CNP
         * @param identifiantDossier
         * @param forcerControles
         * @param assurance
         */
        private transmettrePropositionCnpInternal(identifiantDossier, forcerControles, assurance);
        private listerTypeAssurance(dateTraitement, codeEtablissement);
        consulterAssuranceCNP(idDossier: string): ng.IPromise<boolean>;
        creerDossierExterne(idDossier: string, idPlan: string): ng.IPromise<Models.Assurances.IDossierExterne>;
        lireDossierExterne(idDossier: string, idPlan: string): ng.IPromise<Models.Assurances.IDossierExterne>;
        ouvrirDossierExterne(dossier: Models.Assurances.IDossierExterne, currentPageId: number): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.BlocNotes {
    interface IBlocNotesService {
        /**
         * Ouvrir le bloc notes
         *
         * @param idDossier identifiant du dossier en instruction
         */
        ouvrirBlocNotes(idDossier: string): ng.IPromise<Models.BlocNotes.IBlocNotes>;
        /**
         * Enregistrer le bloc notes
         * @param idDossier identifiant du dossier en instruction
         * @param typeBlocNotes "BLOCNOTE" ou "DIVERS"
         * @param valeurBlocNotes contenu du bloc notes
         */
        definirBlocNotes(idDossier: string, typeBlocNotes: string, valeurBlocNotes: string): ng.IPromise<Models.BlocNotes.IBlocNotes>;
    }
    class BlocNotesService implements IBlocNotesService {
        private blocNotesServiceRest;
        static $inject: string[];
        constructor(blocNotesServiceRest: ICRest.Services.BlocNotes.IBlocNotesService);
        ouvrirBlocNotes(idDossier: string): ng.IPromise<Models.BlocNotes.IBlocNotes>;
        definirBlocNotes(idDossier: string, typeBlocNotes: string, valeurBlocNotes: string): ng.IPromise<Models.BlocNotes.IBlocNotes>;
    }
}

declare namespace ICBusiness.Services.Avis {
    interface IAvisService {
        /**
         * Déclaration de la fonction d'ajout d'un avis
         * @param identifiantDossier
         * @param avis
         */
        ajouterAvis(identifiantDossier: string, avis: Models.Avis.IAvis): ng.IPromise<Models.Avis.IAvis>;
        /**
         * Donne la liste des avis décision (autre que conformité)
         * @param identifiantDossier
         */
        getAvisDecision(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        /**
         * Donne la liste des avis conformité
         * @param identifiantDossier
         */
        getAvisConformite(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        /**
         * Donne la liste des avis service lutte anti blanchiment
         * @param identifiantDossier
         */
        getAvisSLAB(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        /**
         * Permet de filtrer et mapper les avis récupérer par d'autres services plus spécifique
         * @param avis
         */
        filterAndGetAvisDecision(avis: ICRest.Modeles.SchemaComplet.IAvisComplet[]): Models.Avis.IAvis[];
    }
    class AvisService implements IAvisService {
        private $q;
        private schemaService;
        private dossierService;
        private decisionService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.IDossierService, decisionService: ICRest.Services.Dossier.IAvisService);
        ajouterAvis(identifiantDossier: string, avis: Models.Avis.IAvis): ng.IPromise<Models.Avis.IAvis>;
        filterAndGetAvisDecision(avis: ICRest.Modeles.SchemaComplet.IAvisComplet[]): Models.Avis.IAvis[];
        getAvisDecision(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        getAvisConformite(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        getAvisSLAB(identifiantDossier: string): ng.IPromise<Models.Avis.IAvis[]>;
        private getAvis(identifiantDossier);
    }
}

declare namespace ICBusiness.Services.BulleAide {
    class BulleAideOverriderService {
        static $inject: string[];
        constructor(infobulleAideService: myway.aide.InfobulleAideService, cacheService: Services.Common.ICacheService);
    }
}

declare namespace ICBusiness.Services.DemandeCredit {
    /**
     * Interface pour la demande de crédit SED ou SAG
     */
    interface IDemandeCreditService {
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        getContextSIGN_REMT_DOCM(identifiantActeIDN: string, authentificationInfo: MyWay.Services.Context.AuthentificationInfo): ICBusiness.Models.Navigation.LisaContract.SIGN_REMT_DOCM.ISignRemtDocmContext;
    }
    class DemandeCreditService implements IDemandeCreditService {
        private parametrageApplicatifService;
        static $inject: string[];
        constructor(parametrageApplicatifService: Services.ParametrageApplicatif.IParametrageAppicatifService);
        /**
         * Méthode pour savoir si la sign@ des annexes PTZ est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        getContextSIGN_REMT_DOCM(identifiantActeIDN: string, authentificationInfo: MyWay.Services.Context.AuthentificationInfo): ICBusiness.Models.Navigation.LisaContract.SIGN_REMT_DOCM.ISignRemtDocmContext;
    }
}

declare namespace ICBusiness.Services.Catalogue {
    interface ICatalogueService {
        /**
         * Renvoie la liste des TOC/TOR
         * @param idDossier
         * @param familleObjetCommercialise
         */
        getListeTocTors(idDossier: string, familleObjetCommercialise: Enum.NatureProjetEnum): ng.IPromise<Models.Projet.INatureFinancement[]>;
        /**
         * Renvoie la liste des liens Objet Financé pour les biens sous-jacents
         * @param dateDeTraitement
         */
        getListeLienObjFinanceObjSousJacent(dateDeTraitement: string): ng.IPromise<Models.Projet.ILienBienSousJacent[]>;
        /**
         * Renvoie vrai si l'adresse paramètre rubrique existe pour une application donnée
         * @param dateDeTraitement
         * @param codeApplication
         * @param codeParametre
         */
        existsAdresseParametreRubrique(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        /**
         * Renvoie vrai si l'adresse paramètre rubrique est active pour une application donnée
         * @param dateDeTraitement
         * @param codeApplication
         * @param codeParametre
         */
        isAdresseParametreRubriqueActif(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        /**
         * Renvoie la liste des typologies d'instruction
         * @param dateTraitement
         */
        getListeTypologiesInstruction(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des typologies d'instruction selon le type envoyé (voir TypeTypologieConstantes)
         * @param dateTraitement
         * @param type
         */
        getListeTypologiesInstructionByType(dateTraitement: string, type: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie un établissement correspondant au filtre passé en paramètre
         * @param dateDeTraitement
         * @param filtre
         */
        getEtablissement(dateDeTraitement: string, filtre: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        /**
         * Renvoie la liste des types de role
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeTypesRole(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeRolesReversement(dateTraitement: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des catégories d'emprunteur
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des devises pour instruction
         * @param codeEtablissement
         * @param dateDeTraitement
         */
        getListeDevisesPourInstruction(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste total des devises en la filtrant selon les devises que l'on ne souhaite pas récupérer
         * @param codeEtablissement
         * @param dateDeTraitement
         * @param devisesExclues
         */
        getListeDevises(codeEtablissement: number, dateDeTraitement: string, devisesExclues?: string[]): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des fonctionnements de compte depuis Néo
         * @param dateDeTraitement
         */
        getListeFonctionnementsCompteServeur(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des libellés pour Employeur commun
         */
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des modes de composition
         */
        getListeModesDeComposition(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Renvoie la liste des motifs pour remboursement anticipé
         */
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des périodicités de phase
         */
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des risques épargnes
         * @param idDossier
         * @param idPersonne
         * @param horsCE
         */
        getListeRisqueEpargne(idDossier: string, idPersonne: string, horsCE: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de charges
         * @param idDossier
         * @param chargeFuture
         */
        getListeTypeCharge(idDossier: string, chargeFuture: boolean): any;
        /**
         * Renvoie la liste des types de crédit existant
         */
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeLocalites(dateTraitement: string, codeEtablissement: number, codePostaux: string[], localites: string[]): ng.IPromise<Models.Projet.ILocalites[]>;
        /**
         * Renvoie la liste des types de phase
         */
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de règlements
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param isRecouvrement
         */
        getListeTypeReglement(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean, reglementEnDeviseDossier: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des types de ressources
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param estPersonnePhysique
         */
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des constantes
         * @param dateDeTraitement
         * @param codeConstante L' [[identifiant-listes-constantes]] recherché
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /** Renvoie la liste des bénéficiaires filtré par rapport à la date de traitement */
        getListeBeneficiaire(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie le régime matrimonial correspondant au code passé en paramètre
         * @param dateDeTraitement
         * @param codeRegimeMatrimonial
         */
        getRegimeMatrimonialByCode(dateDeTraitement: string, codeRegimeMatrimonial: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        /**
         * Renvoie le type de règlement correspondant au code de type de domiciliation passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param isRecouvrement
         * @param codeTypeDomiciliation
         */
        getTypeReglementByCode(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean, codeTypeDomiciliation: string, codeModeReglement?: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        getListeEtablissementsParFiltre(dateDeTraitement: string, filtre?: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeLienParente(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Récupère la liste des types de logement
         * @param dateDeTraitement
         */
        getListeTypeLogement(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des échelles de versement
         * @param dateDeTraitement
         */
        getListeEchelleVersement(dateDeTraitement: string): ng.IPromise<Models.Modalites.IEchelleVersement[]>;
    }
    class CatalogueService implements ICatalogueService {
        private $q;
        private creditParametreService;
        private catalogueRestService;
        private cacheService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, catalogueRestService: ICRest.Services.Dossier.ICatalogueService, cacheService: Services.Common.ICacheService);
        getListeTocTors(idDossier: string, familleObjetCommercialise: Enum.NatureProjetEnum): ng.IPromise<Models.Projet.INatureFinancement[]>;
        getListeLienObjFinanceObjSousJacent(dateDeTraitement: string): ng.IPromise<Models.Projet.ILienBienSousJacent[]>;
        existsAdresseParametreRubrique(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        isAdresseParametreRubriqueActif(dateDeTraitement: string, codeEtablissement: number, codeApplication: number, codeParametre: string): ng.IPromise<boolean>;
        getEtablissement(dateDeTraitement: string, filtre: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        getListeLocalites(dateTraitement: string, codeEtablissement: number, codePostaux: string[], localites: string[]): ng.IPromise<Models.Projet.ILocalites[]>;
        getListeFonctionnementsCompteServeur(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeCategoriesEmprunteurs(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypologiesInstruction(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypologiesInstructionByType(dateTraitement: string, type: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeDevisesPourInstruction(codeEtablissement: number, dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeDevises(codeEtablissement: number, dateDeTraitement: string, devisesExclues?: string[]): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeLibelleEmployeurCommun(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeModesDeComposition(dateTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeMotifRemboursementAnticipe(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListePeriodicitePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeRisqueEpargne(idDossier: string, idPersonne: string, horsCE: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeCharge(idDossier: string, chargeFuture: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeCreditExistant(): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeTypePhase(): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeReglement(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean, reglementEnDeviseDossier: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypeRessource(dateDeTraitement: string, codeEtablissement: number, estPersonnePhysique: boolean): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des constantes demandée.
         * @param dateDeTraitement Date de traitement du dossier
         * @param codeConstante Code de la constance recherchée (cf. ICBusiness.Constantes.ListeConstantes)
         */
        getListeConstantes(dateDeTraitement: string, codeConstante: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeBeneficiaire(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeTypesRole(dateDeTraitement: string, codeEtablissement: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeRolesReversement(dateTraitement: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private getRegimesMatrimoniaux(dateDeTraitement);
        getRegimeMatrimonialByCode(dateDeTraitement: string, codeRegimeMatrimonial: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        getTypeReglementByCode(dateDeTraitement: string, codeEtablissement: number, isRecouvrement: boolean, codeTypeDomiciliation: string, codeModeReglement?: string): ng.IPromise<Models.Common.ICodeLabel<string>>;
        private mapListeBeneficiaire(listeBeneficiaire, date);
        private filterTypeReglement(typeReglement, dateDeTraitement, isRecouvrement, reglementEnDeviseDossier);
        private filterTypeReglementByCode(typeReglement, dateDeTraitement, isRecouvrement, codeTypeDomiciliation, codeModeReglement);
        private filterTypeRessource(typeRessource, estPersonnePhysique);
        getListeEtablissementsParFiltre(dateDeTraitement: string, filtre?: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private getListeTypeReglementParFiltre(dateDeTraitement, codeEtablissement, nomFiltre, funcFiltre);
        private transformCategorieEmprunteur(categorie);
        private transformConstante(constante);
        private transformDevise(devise);
        private transformEtablissement(etablissement);
        private transformRegimeMatrimonial(regimeMatrimonial);
        private transformRisqueEpargne(epargne);
        private transformTypeCharge(typeCharge);
        private transformTypeReglement(typeReglement);
        private transformTypeRessource(typeRessourceRestModel);
        getListeLienParente(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getListeTypeLogement(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeEchelleVersement(dateDeTraitement: string): ng.IPromise<Models.Modalites.IEchelleVersement[]>;
    }
}

declare namespace ICBusiness.Services.Common {
    interface IBatchRequestService {
        batch(functions: (() => void)[]): IBatchRequest;
    }
    class BatchRequestService implements IBatchRequestService {
        private $q;
        private logger;
        private restElementSchemaService;
        private businessElementSchemaService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, logger: ICCommon.Logger.ILogger, restElementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService, businessElementSchemaService: Services.Common.IElementSchemaService);
        batch(functions: (() => void)[]): IBatchRequest;
    }
    interface IBatchRequest {
        execute(): void;
    }
    class BatchRequest implements IBatchRequest {
        private functions;
        private restElementSchemaService;
        private businessElementSchemaService;
        private $q;
        private logger;
        private resultat;
        private identifiantDossier;
        private entreesLireSchema;
        private executed;
        private exception;
        private wrapperCalled;
        private deferLireShemaComplet;
        constructor(functions: (() => void)[], restElementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService, businessElementSchemaService: Services.Common.IElementSchemaService, $q: ng.IQService, logger: ICCommon.Logger.ILogger);
        /** execute functions batching lireSchemasComplet */
        execute(): void;
        private tries;
        private callLireShemaCompletWhenWrappercalled();
        /** wrap lireSchemaComplet to divert the function implementation */
        private wrap();
        /** wrapper of lireSchemasComplet */
        private wrapper;
        private listFunctionInfos;
        /** unwrap lireSchemasComplet to set the original implementation */
        private unwrap();
        private resolveAll();
        /**
         * Retrouve les résultats correspondant à l'entreeLireSchemaComplet
         * @param entreesLireSchema
         */
        private getResult(entreesLireSchema);
    }
}

declare namespace ICBusiness.Services.Common {
    interface ICacheService {
        /**
         * Set promise reponse to cache and returns pending promise OR ended promise cached data
         * @param key
         * @param promise
         * @param fromCache: default true. if false reset cache and execute promise
         */
        get<T>(key: string, promise: () => ng.IPromise<T>, fromCache?: boolean): ng.IPromise<T>;
    }
}

declare namespace ICBusiness.Services.Common {
    interface IElementSchemaService {
        /**
         * Lecture d'éléments de schema à la demande
         * @param identifiantDossier
         * @param descriptionSchema
         */
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: ICRest.Modeles.SchemaComplet.IEntreeLireSchemaComplet[]): ng.IPromise<ICRest.Modeles.SchemaComplet.IResultatLireSchemaComplet[]>;
    }
    class ElementSchemaService implements IElementSchemaService {
        private elementSchemaService;
        static $inject: Array<string>;
        constructor(elementSchemaService: ICRest.Services.ElementSchema.IElementSchemaService);
        lireSchemasComplet(identifiantDossier: string, descriptionSchema: ICRest.Modeles.SchemaComplet.IEntreeLireSchemaComplet[]): ng.IPromise<ICRest.Modeles.SchemaComplet.IResultatLireSchemaComplet[]>;
    }
}

declare namespace ICBusiness.Services.Decision {
    interface IDecisionService {
        /**
         * Déclaration de la fonction de récupération des informations de décision
         * @param request : la demande de type ICBusiness.Models.Decision.IDecisionRequest
         */
        getDecision(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
        /**
         * Validation de l'accord prêteur
         * @param identifiantDossier
         * @param dateAccordPreteur
         * @param avis
         * @param forcerControleAvtAccessoirePret
         * @param forcerControleBale2
         * @param forcerControleReglementaire
         */
        validerAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<ICBusiness.Models.Decision.IRetourPasserAccordPreteur>;
        /**
         * Modification de l'accord prêteur
         * @param identifiantDossier
         * @param dateAccordPreteur
         * @param avis
         * @param forcerControleAvtAccessoirePret
         * @param forcerControleBale2
         * @param forcerControleReglementaire
         */
        modifierAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<ICBusiness.Models.Decision.IRetourPasserAccordPreteur>;
        /**
         * Refus d'accord prêteur.
         * @param identifiantDossier
         * @param dateRefus
         */
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        /**
         * Annulation de l'accord prêteur.
         * @param identifiantDossier
         */
        annulerAccordPreteur(identifiantDossier: string): ng.IPromise<Models.Decision.IResultatOffrePretIndustrialisee>;
        /**
         * Méthode pour calculer le niveau de délégation de décision d'un agent
         * @param idDossier identifiant du dossier en instructio
         * @param idAgent identifiant de l'agent
         * @param continu si vrai, on fait abstraction des erreurs
         * @param reponse
         */
        calculerDelegationDecision(idDossier: string, idAgent: string, continu: boolean, reponse: boolean): ng.IPromise<Models.Decision.IResultatCalculDelegation>;
    }
    class DecisionService implements IDecisionService {
        private $q;
        private schemaService;
        private dossierService;
        private decisionService;
        private avisService;
        private endettementService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.DossierService, decisionService: ICRest.Services.Dossier.DecisionService, avisService: Services.Avis.IAvisService, endettementService: Services.Endettement.IEndettementService);
        /**
         * Lecture des informations pour la décision prêteur
         * @param identifiantDossier
         */
        getDecision(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Decision.IDecisionPreteur>;
        /**
         * Validation de l'accord prêteur
         * @param identifiantDossier
         * @param dateAccordPreteur
         * @param avis
         * @param forcerControleAvtAccessoirePret
         * @param forcerControleBale2
         * @param forcerControleReglementaire
         */
        validerAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<ICBusiness.Models.Decision.IRetourPasserAccordPreteur>;
        modifierAccordPreteur(identifiantDossier: string, dateAccordPreteur: string, avis: string, forcerControleAvtAccessoirePret: boolean, forcerControleBale2: boolean, forcerControleReglementaire: boolean): ng.IPromise<ICBusiness.Models.Decision.IRetourPasserAccordPreteur>;
        refuserAccordPreteur(identifiantDossier: string, dateRefus: string): ng.IPromise<void>;
        annulerAccordPreteur(identifiantDossier: string): ng.IPromise<Models.Decision.IResultatOffrePretIndustrialisee>;
        calculerDelegationDecision(idDossier: string, idAgent: string, continu: boolean, reponse: boolean): ng.IPromise<Models.Decision.IResultatCalculDelegation>;
    }
}

declare namespace ICBusiness.Services {
    interface IDNCService {
        getControleDefi(idDossier: string): ng.IPromise<Models.DNCDefi.IControleDEFI[]>;
        isDNCActif(idDossier: string): ng.IPromise<boolean>;
        getReferenceRegroupement(idDossier: string): ng.IPromise<string>;
        miseAJourDossierNumerique(idDossier: string): ng.IPromise<void>;
    }
    class DNCService implements IDNCService {
        private $q;
        private qualiteDossierService;
        private contexteEditionService;
        private dossierNumeriqueService;
        static $inject: string[];
        constructor($q: ng.IQService, qualiteDossierService: ICRest.Services.QualiteDossier.IQualiteDossierService, contexteEditionService: Services.Edition.IContexteEditionService, dossierNumeriqueService: ICRest.Services.Dossier.IDossierNumeriqueService);
        getControleDefi(idDossier: string): ng.IPromise<Models.DNCDefi.IControleDEFI[]>;
        isDNCActif(idDossier: string): ng.IPromise<boolean>;
        getReferenceRegroupement(idDossier: string): ng.IPromise<string>;
        miseAJourDossierNumerique(idDossier: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Edition {
    interface IContexteEditionService {
        getContexteEdition(idDossier: string): ng.IPromise<Models.Edition.IContextEditionDocument>;
        getContexteEditionPtz(idDossier: string): ng.IPromise<Models.Edition.IContexteEdition>;
    }
    class ContexteEditionService implements IContexteEditionService {
        private $q;
        private contexteEditionService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, contexteEditionService: ICRest.Services.ContexteEdition.IContexteEditionService, elementService: ICRest.Services.Element.IElementService);
        getContexteEdition(idDossier: string): ng.IPromise<Models.Edition.IContextEditionDocument>;
        getContexteEditionPtz(idDossier: string): ng.IPromise<Models.Edition.IContexteEdition>;
        private mapContexteEdition(c);
        private mapContexteEditionDemandeCredit(contexteEditique);
        private mapContexteEditionOffre(contexteEditique);
        /**
         * Mappage du contexte Annexe
         * Comme les anomalies sont propres à toute l'annexe PTZ, elles sont inclues dans un seul des objets
         * Si le contexte est vide, c'est que le contrôle est fait côté socle et qu'il n'y a pas besoin de les afficher pour le dossier
         * @param contexteAnnexe
         * @param dossierLecture
         */
        private mapContexteEditionAnnexePTZ(contexteEditique);
        private editionOffrePapierAutorisee(c);
        private getAllAnomalies(cd);
        private aggregeAnomalies(resultatSignature, title);
    }
}

declare namespace ICBusiness.Services.EditionContrat {
    interface IEditionContratService {
        getEditionContrat(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
        supprimerClausePersonnalisee(idDossier: string, idws: string): ng.IPromise<void>;
        modifierClausePersonnalisee(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<void>;
        ajouterClause(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<Models.Edition.IClausePersonnalisee>;
        getContratEditionOffre(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
    }
    class EditionContratService implements IEditionContratService {
        private schemaService;
        private clausePersonnaliseeService;
        private elementService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, clausePersonnaliseeService: ICRest.Services.Dossier.ClausePersonnaliseeService, elementService: ICRest.Services.Element.ElementService);
        /**
         * Fonction pour récupérer les informations de l'édition d'un contrat (ex.: l'édition de l'offre de prêt)
         * @param identifiantDossier
         */
        getEditionContrat(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
        /**
         * Fonction pour ajouter une clause personnalisée
         * @param idDossier
         * @param clause
         */
        ajouterClause(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<Models.Edition.IClausePersonnalisee>;
        /**
         * Méthode de modification d'une clause personnalisée
         * @param idDossier
         * @param clause
         */
        modifierClausePersonnalisee(idDossier: string, clause: Models.Edition.IClausePersonnalisee): ng.IPromise<void>;
        /**
         * Méthode pour supprimer une clause personnalisée
         * @param idDossier
         * @param idws
         */
        supprimerClausePersonnalisee(idDossier: string, idws: string): ng.IPromise<void>;
        /**
         * Méthode pour récupérer le contrat
         * @param identifiantDossier identifiant du dossier en instruction
         */
        getContratEditionOffre(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Edition.IContrat>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IParamsControleDecision {
        idDossier: string;
        /**
         * Type date au format yyyy-MM-dd
         */
        dateAccordPreteur: string;
        forcerControleAvtAccessoirePret: boolean;
        forcerControleBale2: boolean;
        forcerControleReglementaire: boolean;
    }
    interface IControleDossierService {
        /**
         * Controle manuelle du dossier
         * @param idDossier
         */
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        /**
         * Controle de completude avant decision prêteur
         * @param idDossier
         */
        controlerCompletude(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        /**
         * Controle après la décision prêteur
         * @param params
         */
        controlerDecision(params: IParamsControleDecision): ng.IPromise<Models.Dossier.IControleDossier>;
    }
    class ControleDossierService implements IControleDossierService {
        private controleRestService;
        static $inject: string[];
        constructor(controleRestService: ICRest.Services.Controle.IControleService);
        controlerDossier(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        controlerCompletude(idDossier: string): ng.IPromise<Models.Dossier.IControleDossier>;
        controlerDecision(params: IParamsControleDecision): ng.IPromise<Models.Dossier.IControleDossier>;
        private mapRetourDecisionToControle(retour);
        private mapRetourDecision(r);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IDossierShemaService {
        /**
         * Get a representation of the "dossier instruction"
         * @param idDossier
         */
        getDossierSchema(idDossier: string): ng.IPromise<Models.Dossier.IDossierSchema>;
    }
    class DossierSchemaService implements IDossierShemaService {
        private elementSchemaService;
        static $inject: string[];
        constructor(elementSchemaService: Services.Common.IElementSchemaService);
        getDossierSchema(idDossier: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        private getLibelleSousEtat(sousEtat);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IDossierService {
        /**
         * Renvoie le dossier nouvellement créé
         * @param dateDeTraitement
         * @param canalDeCreation
         */
        creerDossier(dateDeTraitement: string, canalDeCreation: string, codeApplication: Enum.CodeApplicationEnum, codeDevise: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IResultatCreationDossier>;
        /**
         * Renvoie le dossier pvh nouvellement créé
         * @param dateDeTraitement
         * @param canalDeCreation
         */
        creerDossierPVH(dateDeTraitement: string, canalDeCreation: string, codeApplication: number, codeDevise: string, idClientBancaire: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IResultatCreationDossier>;
        creerDossierAvecProjetImmo(dateDeTraitement: string, canalDeCreation: string, codeDevise: string, idClientBanquaire: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        sauverDossier(idDossier: string): ng.IPromise<void>;
        validerAccordClient(idDossier: string, idPlanFinancement: string): ng.IPromise<void>;
        /**
         * Validation de l'accord client. Permet de remplacer les appels à controlerDossier et validerAccordClient ET de pouvoir récupérer des anomalies
         * @param idDossier
         * @param idPlanFinancement
         * @param forcerControle Permet de forcer la validation s'il n'y a pas d'anomalies bloquantes
         */
        validationAccordClient(idDossier: string, idPlanFinancement: string, forcerControle?: boolean): ng.IPromise<Models.Dossier.IRetourValdiationAccordClient>;
        /**
         * Ferme le dossier, ce dernier est sauvegardé si le paramètre sauvegarde vaut vrai
         * @param identifiantDossier
         * @param sauvegarde
         * @param pourLeCompteDe
         */
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * renvois une synthèse du dossier sous forme de noeud d'arbre
         * @param identifiantDossier
         */
        getSynthese(identifiantDossier: string): ng.IPromise<Models.Dossier.ISynthese>;
        /**
         * Ouvre le dossier dans Neo. Necessaire au préalable de tous les autres appels.
         * @param identifiantDossier
         * @param dateDeTraitement
         * @param codeApplication
         * @param actionSurDossier
         * Consultation = 0
         * Instruction = 1,
         * Decision = 2,
         * Maj = 3, (Mise à jour administrative ou conformité)
         * Conformite = 4, (Ouverture pour controle de conformite)
         * PriseEnChargeBO = 5 (Action où le l'agent BO se transfère un dossier (par le lien Prendre en charge))
         *
         * @param pourLeCompteDe
         * @param ignorerControlModeOuverture
         */
        ouvrirDossier(identifiantDossier: string, dateDeTraitement: string, codeApplication: Enum.CodeApplicationEnum, actionSurDossier: Enum.ActionOuvertureDossierEnum, pourLeCompteDe?: string, ignorerControlModeOuverture?: boolean): ng.IPromise<Models.Dossier.IDossierOuvert>;
        /**
         * Sauvegarde puis tranfere le dossier dans NEO
         * @param identifiantDossier
         */
        transfererDansNeo(identifiantDossier: string): ng.IPromise<Models.Dossier.IDossierTransfertNeo>;
        /**
         * Interface de la fonction de la lecture de l'objet 'element' du dossier
         * @param identifiantDossier
         */
        lireDossierElement(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IDossierElement>;
        /**
         * récupération du dossier dans le cas de répération suite à une erreur
         * @param identifiantDossier
         */
        lireDossierSchema(identifiantDossier: string): ng.IPromise<Models.Dossier.IDossierOuvert>;
        /**
         * Récupère le complement dossier complet
         * @param idDossier
         */
        getComplementDossier(idDossier: string): ng.IPromise<Models.Dossier.IComplementDossier>;
        /**
         * Définit ou met à jour les informations complémentaire du dossier
         * @param identifiantDossier
         * @param complementDossier
         */
        updateComplementDossier(identifiantDossier: string, complementDossier: Models.Dossier.IComplementDossier): ng.IPromise<void>;
        /**
         * Méthode permettant de passer le dossier à Sans suite
         * @param idDossier
         * @param dateInstruction
         * @param codeEvenement par défaut à "refus client"
         */
        passerDossierSansSuite(idDossier: string, dateInstruction: string, codeEvenement?: string): ng.IPromise<void>;
        sauvegardeLocaleValide(idDossier: string, dateTraitement: string): ng.IPromise<boolean>;
        lireDossierResume(idDossier: string): ng.IPromise<Models.Dossier.IDossierResume>;
    }
    class DossierService implements IDossierService {
        private dossierService;
        private syntheseService;
        private elementService;
        private schemaService;
        private elementSchemaService;
        static $inject: string[];
        constructor(dossierService: ICRest.Services.Dossier.IDossierService, syntheseService: ICRest.Services.Synthese.ISyntheseService, elementService: ICRest.Services.Element.IElementService, schemaService: ICRest.Services.Schema.ISchemaService, elementSchemaService: Services.Common.IElementSchemaService);
        creerDossier(dateDeTraitement: string, canalDeCreation: string, codeApplication: Enum.CodeApplicationEnum, codeDevise: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IResultatCreationDossier>;
        creerDossierPVH(dateDeTraitement: string, canalDeCreation: string, codeApplication: number, codeDevise: string, idClientBancaire: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IResultatCreationDossier>;
        creerDossierAvecProjetImmo(dateDeTraitement: string, canalDeCreation: string, codeDevise: string, idClientBanquaire: string, pourLeCompteDe?: string): ng.IPromise<Models.Dossier.IDossierSchema>;
        validerAccordClient(idDossier: string, idPlanFinancement: string): ng.IPromise<void>;
        validationAccordClient(idDossier: string, idPlanFinancement: string, forcerControle?: boolean): ng.IPromise<Models.Dossier.IRetourValdiationAccordClient>;
        sauverDossier(idDossier: string): ng.IPromise<void>;
        fermerDossier(identifiantDossier: string, sauvegarde: boolean, pourLeCompteDe?: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        getSynthese(identifiantDossier: string): ng.IPromise<Models.Dossier.ISynthese>;
        ouvrirDossier(identifiantDossier: string, dateDeTraitement: string, codeApplication: Enum.CodeApplicationEnum, actionSurDossier: Enum.ActionOuvertureDossierEnum, pourLeCompteDe?: string, ignorerControlModeOuverture?: boolean): ng.IPromise<Models.Dossier.IDossierOuvert>;
        private mapDossierShema(dossierSchema);
        lireDossierSchema(identifiantDossier: string): ng.IPromise<Models.Dossier.IDossierOuvert>;
        transfererDansNeo(identifiantDossier: string): ng.IPromise<Models.Dossier.IDossierTransfertNeo>;
        /**
         * Implémentation de l'interface de la fonction de la lecture de l'objet 'element' du dossier
         * @param identifiantDossier
         */
        lireDossierElement(identifiantDossier: string): ng.IPromise<ICBusiness.Models.Dossier.IDossierElement>;
        getComplementDossier(idDossier: string): ng.IPromise<Models.Dossier.IComplementDossier>;
        updateComplementDossier(identifiantDossier: string, complementDossier: Models.Dossier.IComplementDossier): ng.IPromise<void>;
        passerDossierSansSuite(idDossier: string, dateInstruction: string, codeEvenement?: string): ng.IPromise<void>;
        sauvegardeLocaleValide(idDossier: string, dateTraitement: string): ng.IPromise<boolean>;
        lireDossierResume(idDossier: string): ng.IPromise<Models.Dossier.IDossierResume>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IEtatDossierService {
        getSousEtatDossierJusquaProposition(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaMontage(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaEdition(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAnnulationDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourSignature(): Enum.SousEtatDossier[];
        getSousEtatDossierPourConsulterLiasseElec(): Enum.SousEtatDossier[];
        getSousEtatDossierPourTransfertBo(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDemandeElec(): Enum.SousEtatDossier[];
        getSousEtatDossierApresEdition(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAvisPourConformite(): Enum.SousEtatDossier[];
    }
    class EtatDossierService implements IEtatDossierService {
        getSousEtatDossierApresEdition(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaProposition(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaMontage(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierJusquaEdition(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourDemandeElec(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAnnulationDecision(): Enum.SousEtatDossier[];
        getSousEtatDossierPourSignature(): Enum.SousEtatDossier[];
        getSousEtatDossierPourConsulterLiasseElec(): Enum.SousEtatDossier[];
        getSousEtatDossierPourTransfertBo(): Enum.SousEtatDossier[];
        getSousEtatDossierPourAvisPourConformite(): Enum.SousEtatDossier[];
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IHistoriqueDossier {
        lireHistoriqueEvenements(idDossier: string): ng.IPromise<ICBusiness.Models.Historique.IEvenement[]>;
    }
    class HistoriqueDossier implements IHistoriqueDossier {
        private elementService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.ElementService);
        /**
         * Méthode pour récupérer la liste de l'historique des événements
         * @param idDossier
         */
        lireHistoriqueEvenements(idDossier: string): ng.IPromise<ICBusiness.Models.Historique.IEvenement[]>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IParametresService {
        /**
         * Renvoie la liste des primo accédant Ptz
         * @param identifiantDossier
         */
        getListePrimoAccedantPtz(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des statuts d'occupation logement
         * @param identifiantDossier
         */
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Renvoie la liste des categories emprunteur en fonction de la nature de projet
         * @param identifiantDossier
         * @param natureProjet
         */
        getCategoriesEmprunteur(identifiantDossier: string, natureProjet: Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Get nature projet from code application
         * @param codeApplication
         */
        getNatureProjet(codeApplication: Enum.CodeApplicationEnum): Enum.NatureProjetEnum;
        getNaturePret(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getUsagesDuBien(identifiantDossier: string, cadreFiscal: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getModesOccupations(identifiantDossier: string, destination: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getCadresFiscaux(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getPerformancesEnergetiques(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getStatutOccupationPersonne(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getLienAvecEmprunteur(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des nature de travaux
         * La valeur nombreTravaux est par défaut à 1 car si on envoie 0 on ne récupère pas la valeur "Bouquet de travaux"
         * @param identifiantDossier
         * @param nombreTravaux
         */
        getNatureTravaux(identifiantDossier: string, nombreTravaux?: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupère la liste des statuts pour les revenus et charges
         * @param identifiantDossier
         * @param codeRessourceCharge
         * @param withFuture
         * @param typeCharge
         */
        getCodeExistenceRC(identifiantDossier: string, codeRessourceCharge: ICBusiness.Enum.CodeRessourceCharge, withFuture?: boolean, typeCharge?: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Récupération de la liste des intérêts intercalaires
         * @param identifiantDossier
         * @param idwsCreditInterne
         */
        getInteretIntercalaire(identifiantDossier: string, idwsCreditInterne: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
    }
    type FiltreListerConstante = "FiltrePrimoPTZ" | "FiltreStatutOccupationLogement" | "FiltreUsageDuBien" | "FiltreModeOccupation" | "FiltreCadreFiscal" | "FiltrePerformanceEnergetique" | "FiltreCategorieEmprunteur" | "FiltreStatutOccupationPersonne" | "FiltreLienAvecEmprunteur" | "FiltreNatureTravaux" | "FiltreCodeExistenceRC" | "FiltreNatureConcoursExternes" | "FiltreInteretIntercalaire";
    class ParametresService implements IParametresService {
        private parametresService;
        private cacheService;
        static $inject: Array<string>;
        constructor(parametresService: ICRest.Services.Dossier.IParametresService, cacheService: Services.Common.ICacheService);
        getListePrimoAccedantPtz(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getListeStatutOccupationLogement(identifiantDossier: string, conditionDerogatoirePtz: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getStatutOccupationPersonne(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getLienAvecEmprunteur(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getCategoriesEmprunteur(identifiantDossier: string, natureProjet: Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getUsagesDuBien(identifiantDossier: string, cadreFiscal: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getModesOccupations(identifiantDossier: string, destination: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getCadresFiscaux(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getPerformancesEnergetiques(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getNatureTravaux(identifiantDossier: string, nombreTravaux?: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getCodeExistenceRC(identifiantDossier: string, codeRessourceCharge: ICBusiness.Enum.CodeRessourceCharge, withFuture?: boolean, typeCharge?: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        getNaturePret(identifiantDossier: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getNatureProjet(codeApplication: Enum.CodeApplicationEnum): Enum.NatureProjetEnum;
        getInteretIntercalaire(identifiantDossier: string, idwsCreditInterne: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        private getConstante(identifiantDossier, filtreConstante, constante?);
        private transformScConstante(constante);
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IVerifierEligibilite {
        calculerEligibilite(identifiantDossier: string): ng.IPromise<Models.Dossier.IResultatEligibilite[]>;
    }
    class VerifierEligibilite implements IVerifierEligibilite {
        private dossierService;
        static $inject: string[];
        constructor(dossierService: ICRest.Services.Dossier.IDossierService);
        calculerEligibilite(identifiantDossier: string): ng.IPromise<Models.Dossier.IResultatEligibilite[]>;
    }
}

declare namespace ICBusiness.Services.Edition {
    interface IEditionOffreService {
        /**
         * Interface pour le contrôle du dossier avant édition de l'offre
         * @param idDossier
         * @param forcage permet le forcage des différents contrôles
         */
        controlerAvantEditionOffre(idDossier: string, forcage?: boolean): ng.IPromise<ICBusiness.Models.Edition.IAnomaliesControleEdition>;
        /**
         * Méthode pour savoir si le forçage des anomalies bloquantes levées par le contrôle avant l'édition de l'offre est possible
         * @param codeEtablissement
         * @param dateTraitement
         * @param anomaliesBloquantes liste des anomalies bloquantes
         * @param habilitationsAgent (habilitation à forcer de l'agent connecté)
         * @returns une promesse a true si l'agent connecté peut forcer, sinon false.
         */
        autorisationForcageEditionOffre(codeEtablissement: string, dateTraitement: string, anomaliesBloquantes: ICBusiness.Models.Common.IAnomalieLecture[], habilitationsAgent: ICBusiness.Models.Habilitation.IHabilitation): ng.IPromise<boolean>;
        /**
         * Interface de la méthode de listage des documents de l'offre
         * @param idDossier : identifiant du dossier en instruction
         * @param idPlan : identifiant du plan retenu
         * @returns : une liste d'objets ICBusiness.Models.EditionOffre.IInfoDocument
         */
        listerDocumentsOffre(idDossier: string, idPlan: string): ng.IPromise<ICBusiness.Models.EditionOffre.IInfoDocument[]>;
        /**
         * Renvoie la liste des documents ainsi que les anomalies qui leur sont attachées
         * @param idDossier
         * @param idPlan
         * @param typeDocument
         */
        listerDocumentsAvecAnomalies(idDossier: string, idPlan: string, typeDocument: Enum.TypeDocument): ng.IPromise<ICBusiness.Models.EditionOffre.IResultatDocuments>;
        /**
         * Méthode pour récupérer le libellé d'un rôle d'une personne de l'offre
         * @param code code du rôle recherché
         */
        libelleRole(code: string): string;
        /**
         * Méthode pour préparer un document pour l'édition papier
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'impression papier
         */
        completerDocPapier(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de l'offre en signature électronique
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition en offre électronique
         */
        completerDocOffreElec(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de l'offre en industrialisation
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition en industrialisation
         */
        completerDocOffreIndus(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de la demande de crédit en SED
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition de la demande de crédit en SED
         */
        completerDocDemandeCreditSed(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de la demande de crédit en SAG
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition de la demande de crédit en SAG
         */
        completerDocDemandeCreditSag(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer une liste de documents pour une impression papier.
         * @param idDossier identifiant du dossier en instruction
         * @param idPlan identifiant du plan de financement
         * @param listeDocs liste des documents sélectionnés
         */
        preparerDocumentsPourEditionPapier(idDossier: string, idPlan: string, listeDocs: ICBusiness.Models.EditionOffre.IInfoDocument[]): ng.IPromise<ICBusiness.Models.EditionOffre.IResultatDocuments>;
        /**
         * Méthode pour agencer la liste des documents de l'offre (i.e. CCSE en premier puis document type offre puis le reste des documents).
         * @param docs liste des documents
         */
        agencerListeDocumentsOffre(docs: ICBusiness.Models.EditionOffre.IInfoDocument[]): ICBusiness.Models.EditionOffre.IInfoDocument[];
        /**
         * Méthode pour savoir s'il s'agit d'un document CCSE
         * @param code code document
         */
        estDocCCSE(code: string): boolean;
    }
    class EditionOffreService implements IEditionOffreService {
        private $q;
        private parametrageApplicatifService;
        private controlerService;
        private editionOffreService;
        static $inject: string[];
        constructor($q: ng.IQService, parametrageApplicatifService: Services.ParametrageApplicatif.IParametrageAppicatifService, controlerService: ICRest.Services.Controle.IControleService, editionOffreService: ICRest.Services.EditionOffre.IEditionOffreService);
        /**
         * Méthode pour savoir si le forçage des anomalies bloquantes levées par le contrôle avant l'édition de l'offre est possible
         * @param codeEtablissement
         * @param dateTraitement
         * @param anomaliesBloquantes liste des anomalies bloquantes
         * @param habilitationsAgent (habilitation à forcer de l'agent connecté)
         * @returns une promesse a true si l'agent connecté peut forcer, sinon false.
         */
        autorisationForcageEditionOffre(codeEtablissement: string, dateTraitement: string, anomaliesBloquantes: ICBusiness.Models.Common.IAnomalieLecture[], habilitationsAgent: ICBusiness.Models.Habilitation.IHabilitation): ng.IPromise<boolean>;
        /**
         * Vérifie la présence d'anomalies bloquantes non prise en compte dans PIECO ou Suivi Edition
         * @param anomaliesBloquantes
         */
        private verifiePresenceAnomaliesNonForcable(anomaliesBloquantes);
        /**
         * Méthode permettant de déterminer si l'agent est autoriser au forcage PIECO SI Pieco est actif ET qu'il y a des anomalies bloquantes PIECO ET qu'il a l'habilitation pour forcer
         * @param piecoActif
         * @param anomaliesBloquantes
         * @param habilitationsAgent
         */
        private autorisationForcagePieco(piecoActif, anomaliesBloquantes, habilitationsAgent);
        /**
         * Méthode pour savoir si une anomalie bloquante est forçable pour PIECO
         * @param anomalie une anomalie ICBusiness.Models.Common.IAnomalieLecture
         * @returns un booléen a true si l'anomalie est forçable, sinon false.
         */
        private estAnomalieBloquanteForcablePieco(anomalie);
        private autorisationForcageSuiviEdition(anomaliesBloquantes, habilitationsAgent);
        /**
         * Méthode pour contrôler certains des éléments du dossier à l'édition de l'offre
         * @param idDossier identifiant du dossier
         * @param forcage permet le forcage des différents contrôles
         * @returns une promesse de type ICBusiness.Models.Edition.IAnomaliesControleEdition
         */
        controlerAvantEditionOffre(idDossier: string, forcage?: boolean): ng.IPromise<ICBusiness.Models.Edition.IAnomaliesControleEdition>;
        /**
         * Méthode pour lister les documents de l'offre
         * @param idDossier : identifiant du dossier en instruction
         * @param idPlan : identifiant du plan retenu
         * @returns : une liste d'objets ICBusiness.Models.EditionOffre.IInfoDocument
         */
        listerDocumentsOffre(idDossier: string, idPlan: string): ng.IPromise<ICBusiness.Models.EditionOffre.IInfoDocument[]>;
        listerDocumentsAvecAnomalies(idDossier: string, idPlan: string, typeDocument: Enum.TypeDocument): ng.IPromise<ICBusiness.Models.EditionOffre.IResultatDocuments>;
        /**
         * Méthode pour récupérer le libellé d'un rôle d'une personne de l'offre
         * @param code code du rôle recherché
         */
        libelleRole(code: string): string;
        /**
         * Méthode pour préparer un document pour l'édition papier
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'impression papier
         */
        completerDocPapier(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de l'offre en signature électronique
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition en offre électronique
         */
        completerDocOffreElec(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de l'offre en industrialisation
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition en industrialisation
         */
        completerDocOffreIndus(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de la demande de crédit en SED
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition de la demande de crédit en SED
         */
        completerDocDemandeCreditSed(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer un document pour l'édition de la demande de crédit en SAG
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @returns ICBusiness.Models.EditionOffre.IInfoDocument préparé pour l'édition de la demande de crédit en SAG
         */
        completerDocDemandeCreditSag(doc: ICBusiness.Models.EditionOffre.IInfoDocument): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour préparer une liste de documents pour une impression papier.
         * @param idDossier identifiant du dossier en instruction
         * @param idPlan identifiant du plan de financement
         * @param listeDocs liste des documents sélectionnés
         */
        preparerDocumentsPourEditionPapier(idDossier: string, idPlan: string, listeDocs: ICBusiness.Models.EditionOffre.IInfoDocument[]): ng.IPromise<ICBusiness.Models.EditionOffre.IResultatDocuments>;
        private estSimilaire(compare, listeDocs);
        private creerAvecLeSimilaire(doc, listeDocs);
        /**
         * Méthode pour préparer les params
         * @param numPers numéro de personne
         * @param codeDoc code du document
         */
        private creerParams(numPers, codeDoc);
        /**
         * Méthode pour creer un objet ICBusiness.Models.EditionOffre.IInfoDocument pour l'édition papier
         * @param doc objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @param similaire objet ICBusiness.Models.EditionOffre.IInfoDocument similaire mais comportement les informations complémentaires pour l'impression
         */
        private creerInfoDocumentPapier(doc, similaire);
        /**
         * Méthode pour agencer la liste des documents de l'offre (i.e. CCSE en premier puis document type offre puis le reste des documents).
         * @param docs liste des documents
         */
        agencerListeDocumentsOffre(docs: ICBusiness.Models.EditionOffre.IInfoDocument[]): ICBusiness.Models.EditionOffre.IInfoDocument[];
        /**
         * Méthode pour savoir s'il s'agit d'un document CCSE
         * @param code code document
         */
        estDocCCSE(code: string): boolean;
        /**
         * Méthode pour traiter l'ordonnancement des documents de l'offre
         * @param doc document
         */
        private calculerNumeroOrdreDocsOffre(doc);
    }
}

declare namespace ICBusiness.Services.SaisiesComplementaires {
    interface ISaisiesComplementairesService {
        /**
         * Méthode pour les données complémentaires pour l'édition d'un document
         *
         * @param idDossier identifiant du dossier en instruction
         * @param idTheoriqueDocument identifiant théorique du document (i.e. cet identifiant peut être différent du code document affiché)
         * @param isFirstEdition booléen pour savoir s'il s'agit d'une première édition
         * @param traiterNotices booléen pour savoir si les notices d'assurance doivent être traitées
         */
        getSaisiesComplementaires(idDossier: string, idTheoriqueDocument: string, isFirstEdition: boolean, traiterNotices: boolean): ng.IPromise<Models.Edition.IDocumentComplementaireInfos>;
        /**
         * Méthode pour mettre à jour les données 'élémentaires' complémentaires à l'édition d'un document
         * @param identifiantDossier identifiant du dossier en instruction
         * @param donneesComplementaires tableau des données complémentaires
         */
        mettreAJourElementGenerique(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ng.IPromise<void>;
        /**
         * Méthode pour mettre à jour les données complémentaires à l'édition du document FCM17OME
         * @param identifiantDossier identifiant du dossier en instruction
         * @param source les données à mettre à jour
         */
        mettreAJourElementFCM17OME(identifiantDossier: string, source: Models.Edition.IFCM17OME): ng.IPromise<void>;
        /**
         * Méthode pour mettre à jour les données complémentaires à l'édition du document FCM17GBM
         * @param identifiantDossier identifiant du dossier en instruction
         * @param source les données à mettre à jour
         */
        mettreAJourElementFCM17GBM(identifiantDossier: string, source: Models.Edition.IFCM17GBM): ng.IPromise<void>;
        /**
         * Méthode pour mettre à jour les données liste d'éléments complémentaires à l'édition d'un document
         * @param identifiantDossier identifiant du dossier en instruction
         * @param donneesComplementaires tableau des données complémentaires
         */
        mettreAJourListeSaisiesComplementaires(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ng.IPromise<void>;
    }
    class SaisiesComplementairesService implements ISaisiesComplementairesService {
        private $q;
        private elementService;
        private saisiesComplementairesService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, saisiesComplementairesService: ICRest.Services.SaisiesComplementaires.ISaisiesComplementairesService);
        /**
         * Méthode pour les données complémentaires pour l'édition d'un document
         *
         * @param idDossier identifiant du dossier en instruction
         * @param idTheoriqueDocument identifiant théorique du document (i.e. cet identifiant peut être différent du code document affiché)
         * @param isFirstEdition booléen pour savoir s'il s'agit d'une première édition
         * @param traiterNotices booléen pour savoir si les notices d'assurance doivent être traitées
         */
        getSaisiesComplementaires(idDossier: string, idTheoriqueDocument: string, isFirstEdition: boolean, traiterNotices: boolean): ng.IPromise<Models.Edition.IDocumentComplementaireInfos>;
        mettreAJourElementGenerique(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ng.IPromise<void>;
        mettreAJourElementFCM17OME(identifiantDossier: string, data: Models.Edition.IFCM17OME): ng.IPromise<void>;
        mettreAJourElementFCM17GBM(identifiantDossier: string, data: Models.Edition.IFCM17GBM): ng.IPromise<void>;
        private mettreAJourElementSaisiesComplementaires(identifiantDossier, elementsMaj);
        mettreAJourListeSaisiesComplementaires(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Eds {
    interface IEdsService {
        recherche(typeRecherche: number, codeEtab: string, type: string, identifiantExterne: string, libelle: string, identifiantInterne: string): ng.IPromise<ICBusiness.Models.Eds.IDonneesCommunesEDS[]>;
    }
    class EdsService implements IEdsService {
        private edsService;
        static $inject: Array<string>;
        constructor(edsService: ICRest.Eds.Services.IEdsService);
        /**
         * Recherche d'un EDS
         * @param typeRecherche code: 1 Par identifiant interne d’EDS, 2 Par référence externe et par type d'EDS, 3 Par libellé d'EDS, 4 Par type d'EDS
         * @param codeEtab code établissement
         * @param type type d'EDS (RG Ancien Myc: doit être sur trois caractères)
         * @param identifiantExterne identifiant externe de l'EDS
         * @param libelle libellé de l'EDS
         * @param identifiantInterne identifiant interne de l'EDS
         */
        recherche(typeRecherche: number, codeEtab: string, type: string, identifiantExterne: string, libelle: string, identifiantInterne: string): ng.IPromise<ICBusiness.Models.Eds.IDonneesCommunesEDS[]>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IContratEpargneLogementService {
        /**
         * Récupére un objet Contrat Epargne Logement avec les valeurs par défaut (Ajout)
         */
        getContratEpargneLogementFormData(codeDevise: string): Models.ContratEpargneLogement.IContratEpargneLogementFormDatas;
        /**
         * Récupère un objet Contrat Epargne Logement avec les valeurs récupérées (Modification/Consultation)
         * @param identifiantDossier
         * @param idws
         */
        getContratEpargneLogement(identifiantDossier: string, idws: string, listeBeneficiaire: Models.Common.ICodeLabel<string>[], listeLiensParente: Models.Common.ICodeLabel<number>[]): ng.IPromise<Models.ContratEpargneLogement.IContratEpargneLogementFormDatas>;
        /**
         * Ajout d'une nouvelle épargne logement
         * @param idDossier
         * @param cELFormDatas
         */
        ajouterContratEpargneLogement(idDossier: string, cELFormDatas: Models.ContratEpargneLogement.IContratEpargneLogementFormDatas): ng.IPromise<Models.ContratEpargneLogement.IContratEpargneLogementFormDatas>;
        /**
         * Mise à jour d'un contrat épargne logement
         * @param idDossier
         * @param cELFormDatas
         */
        majContratEpargneLogement(idDossier: string, cELFormDatas: Models.ContratEpargneLogement.IContratEpargneLogementFormDatas): ng.IPromise<void>;
        /**
         * Récupère la liste des tranches épargne logement
         * @param idDossier
         * @param trancheIds
         */
        getTrancheEpargneLogement(idDossier: string, trancheIds: string[]): ng.IPromise<Models.TrancheEpargneLogement.ITrancheEpargneLogement[]>;
        /**
         * Mise à jour de la liste des tranches épargne logement
         * @param idDossier
         * @param tranchesEL
         */
        majTrancheEpargneLogement(idDossier: string, tranchesEL: Models.TrancheEpargneLogement.ITrancheEpargneLogement[]): ng.IPromise<void>;
        /**
         * Supprimer une liste d'épargne logement
         * @param idDossier
         * @param idEpargneLogement
         */
        supprimerContratEpargneLogement(idDossier: string, idsEpargneLogement: string[]): ng.IPromise<void>;
    }
    class ContratEpargneLogementService implements IContratEpargneLogementService {
        private $q;
        private clientService;
        private elementService;
        private contratEpargneLogementService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, clientService: ICRest.Services.Dossier.IClientService, elementService: ICRest.Services.Element.IElementService, contratEpargneLogementService: ICRest.Services.Dossier.IContratEpargneLogementService);
        getContratEpargneLogementFormData(codeDevise: string): Models.ContratEpargneLogement.IContratEpargneLogementFormDatas;
        getContratEpargneLogement(identifiantDossier: string, idws: string, listeBeneficiaire: Models.Common.ICodeLabel<string>[], listeLiensParente: Models.Common.ICodeLabel<number>[]): ng.IPromise<Models.ContratEpargneLogement.IContratEpargneLogementFormDatas>;
        ajouterContratEpargneLogement(idDossier: string, cELFormDatas: Models.ContratEpargneLogement.IContratEpargneLogementFormDatas): ng.IPromise<Models.ContratEpargneLogement.IContratEpargneLogementFormDatas>;
        majContratEpargneLogement(idDossier: string, cELFormDatas: Models.ContratEpargneLogement.IContratEpargneLogementFormDatas): ng.IPromise<void>;
        getTrancheEpargneLogement(idDossier: string, trancheIds: string[]): ng.IPromise<Models.TrancheEpargneLogement.ITrancheEpargneLogement[]>;
        majTrancheEpargneLogement(idDossier: string, tranchesEL: Models.TrancheEpargneLogement.ITrancheEpargneLogement[]): ng.IPromise<void>;
        supprimerContratEpargneLogement(idDossier: string, idsEpargneLogement: string[]): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    interface IEmprunteurService {
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string, codeEtablissement: string, garants?: boolean, tuteurs?: boolean): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        getCategorieEmprunteur(idDossier: string): ng.IPromise<string>;
        getRevenusCharges(idDossier: string, garants?: boolean, tuteurs?: boolean): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string, garants?: boolean, tuteurs?: boolean): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourIntervenants(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, encours?: Models.MontantEncoursEpargneLogement.IEncoursEpargneLogement): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        /** When activated, getEmprunteur, getRevenusCharges and getSurfaceFinancière will call the REST service once  */
        activateCache(): void;
        /** Desactivate cache to make call to the REST service */
        desactivateCache(): void;
        definirEmprAvecCtrl(identifiantDossier: string, identifiantClientBancaire: string, rattachement: boolean, pourLeCompteDe: string, forcerAjout?: boolean): ng.IPromise<ICBusiness.Models.Emprunteur.IRattachementEmprunteur>;
        /**
         * Rafraichir tout les intervenants du dossier (personne, emprunteur et garant)
         * @param idws
         * @param listeIdPersonne
         * @param typeRafraichissement
         * @param conserverRCEmprunteur
         * @param forceeControle
         */
        rafraichirIntervenantDossier(idws: string, typeRafraichissement: Enum.TypeRafraichissement, conserverRCEmprunteur: boolean, listeIdPersonne?: string[], forceeControle?: boolean): ng.IPromise<void>;
    }
    class EmprunteurService implements IEmprunteurService {
        private $q;
        private elementService;
        private schemaService;
        private clientService;
        private tiersService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, clientService: ICRest.Services.Dossier.IClientService, tiersService: ICRest.Tiers.Services.ITiersService);
        private intervenantsCacheActivated;
        activateCache(): void;
        desactivateCache(): void;
        definirEmprunteur(identifiantDossier: string, identifiantClientBancaire: string): ng.IPromise<void>;
        getEmprunteur(idDossier: string, codeEtablissement: string, garants: boolean, tuteurs: boolean): ng.IPromise<Models.Emprunteur.IEmprunteur>;
        /**
         * Appel Patch service car lecture du Schema Complet
         * @param idDossier
         */
        getCategorieEmprunteur(idDossier: string): ng.IPromise<string>;
        getRevenusCharges(idDossier: string, garants: boolean, tuteurs: boolean): ng.IPromise<Models.Emprunteur.IRevenusCharges>;
        getSurfaceFinanciere(idDossier: string, garants: boolean, tuteurs: boolean): ng.IPromise<Models.Emprunteur.ISurfaceFinanciere>;
        mettreAJourIntervenants(identifiantDossier: string, emprunteur: Models.Emprunteur.IEmprunteur, surfaceFinanciere: Models.Emprunteur.ISurfaceFinanciere, encours?: Models.MontantEncoursEpargneLogement.IEncoursEpargneLogement): ng.IPromise<void>;
        rafraichirEmprunteur(identifiantDossier: string): ng.IPromise<void>;
        private cachedIntervenants;
        private getIntervenantsComplet(idDossier, garants, tuteurs);
        definirEmprAvecCtrl(identifiantDossier: string, identifiantClientBancaire: string, rattachement: boolean, pourLeCompteDe: string, forcerAjout?: boolean): ng.IPromise<ICBusiness.Models.Emprunteur.IRattachementEmprunteur>;
        rafraichirIntervenantDossier(idws: string, typeRafraichissement: Enum.TypeRafraichissement, conserverRCEmprunteur: boolean, listeIdPersonne?: string[], forceeControle?: boolean): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Emprunteur {
    import RestModel = ICRest.Modeles;
    interface IPersonneService {
        /**
         * Renvoie le détail de la personne morale passée en paramètre
         * @param idDossier
         * @param identifiantEmprunteur
         * @param personne
         */
        getDetailPersonneMorale(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonneMorale>;
        /**
         * Renvoie le détail de la personne physique passée en paramètre
         * @param idDossier
         * @param identifiantEmprunteur
         * @param personne
         */
        getDetailPersonnePhysique(context: Models.Common.IContext, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
        /**
         * Renvoie la liste des personnes correspondant aux critères passés en paramètre
         * @param identifiantDossier (obligatoire)
         * @param rolePersonne (obligatoire)
         * @param typePersonne (obligatoire)
         * @param identifiantPersonne (obligatoire si nom ou numeroSiren non renseignés)
         * @param nom (obligatoire si identifiantPersonne ou numeroSiren non renseignés)
         * @param numeroSiren (obligatoire si identifiantPersonne ou nom non renseignés)
         * @param dateNaissance (facultatif)
         * @param prenom (facultatif)
         * @param numeroCarteBancaire (facultatif)
         * @param numeroCompte (facultatif)
         */
        getListePersonnes(identifiantDossier: string, rolePersonne: string, typePersonne: number, identifiantPersonne: string, nom: string, numeroSiren: string, dateDeNaissance?: string, prenom?: string, numeroCarteBancaire?: string, numeroCompte?: string): ng.IPromise<Models.Emprunteur.IDetailPersonne[]>;
        /**
         * Met à jour l'activité passée en paramètre
         * @param identifiantDossier
         * @param activite
         */
        mettreAJourActivite(identifiantDossier: string, activite: Models.Emprunteur.IActivite): ng.IPromise<void>;
        /**
         * Met à jour la valeur "Employer commun" pour l'emprunteur passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param employeurCommun
         */
        mettreAJourEmployeurCommun(identifiantDossier: string, identifiantEmprunteur: string, employeurCommun: Models.Common.ICodeLabel<number>): ng.IPromise<void>;
        /**
         * Recherche des garants d'un dossier
         * @param idDossier
         * @param codeEtablissement
         */
        getGarants(idDossier: string): ng.IPromise<Models.Emprunteur.IGarant[]>;
        getIntervenants(idDossier: string): ng.IPromise<string[]>;
        /**
         * Recherche les personnes d'un dossier
         * @param idDossier
         * @param codeEtablissement
         */
        getPersonnes(idDossier: string): ng.IPromise<Models.Emprunteur.IPersonne[]>;
        /**
         * Recherche d'une entité titulaire
         * @param codeEtablissement
         * @param identifiantTiers
         */
        getEntitesTitulaires(codeEtablissement: string, identifiantTiers: number, typeRecherche?: string): ng.IPromise<Models.EntiteTitulaire.IEntiteTitulaire[]>;
        /**
         * Recherche des informations d'une entité titulaire'
         * @param codeEtablissement
         * @param identifiantEntiteTitulaire
         */
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Models.EntiteTitulaire.IInformationEntiteTitulaire>;
        /**
         * Ajouter une personne avec contrôle
         * @param identifiantDossier
         * @param listePersonne
         * @param identifiantClasse
         */
        ajouterPersonneAvecCtrl(identifiantDossier: string, listePersonne: RestModel.AjouterPersonneAvecControles.IPersonneMaj[], identifiantClasse: string): ng.IPromise<ICBusiness.Models.Common.IAnomaliesInfos>;
        /**
         * Récupère les informations d'un tiers
         * @param codeEtablissement
         * @param identifiantPersonne
         */
        getIdentificationTiers(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Models.Tiers.IIdentification>;
        /**
         * Supprimer personne avec contrôle
         * @param identifiantDossier
         * @param idws
         * @param forceeControle
         */
        supprimerPersonneAvecControle(identifiantDossier: string, idws: string, forceeControle?: boolean): ng.IPromise<Models.Common.IRapportTransaction>;
        updateChoixSignature(identifiantDossier: string, idpersonne: string, rolePersonne: string, autoriseSignatureElectrobique: boolean): ng.IPromise<void>;
    }
    class PersonneService implements IPersonneService {
        private $q;
        private elementService;
        private personneService;
        private tiersService;
        private catalogueService;
        private schemaService;
        private entiteTitulaireService;
        private clientService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, personneService: ICRest.Services.Dossier.IPersonneService, tiersService: ICRest.Tiers.Services.ITiersService, catalogueService: Catalogue.ICatalogueService, schemaService: Services.Common.IElementSchemaService, entiteTitulaireService: ICRest.Services.EntiteTitulaire.IEntiteTitulaireService, clientService: ICRest.Services.Dossier.IClientService);
        getDetailPersonneMorale(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonneMorale>;
        getDetailPersonnePhysique(context: Models.Common.IContext, identifiantEmprunteur: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IDetailPersonnePhysique>;
        getListePersonnes(identifiantDossier: string, rolePersonne: string, typePersonne: number, identifiantPersonne: string, nom: string, numeroSiren: string, dateDeNaissance?: string, prenom?: string, numeroCarteBancaire?: string, numeroCompte?: string): ng.IPromise<Models.Emprunteur.IDetailPersonne[]>;
        mettreAJourActivite(identifiantDossier: string, activite: Models.Emprunteur.IActivite): ng.IPromise<void>;
        mettreAJourEmployeurCommun(identifiantDossier: string, identifiantEmprunteur: string, employeurCommun: Models.Common.ICodeLabel<number>): ng.IPromise<void>;
        getGarants(idDossier: string): ng.IPromise<Models.Emprunteur.IGarant[]>;
        getIntervenants(idDossier: string): ng.IPromise<string[]>;
        getPersonnes(idDossier: string): ng.IPromise<Models.Emprunteur.IPersonne[]>;
        getEntitesTitulaires(codeEtablissement: string, identifiantTiers: number, typeRecherche?: string): ng.IPromise<Models.EntiteTitulaire.IEntiteTitulaire[]>;
        getInformationEntiteTitulaire(codeEtablissement: string, identifiantEntiteTitulaire: number): ng.IPromise<Models.EntiteTitulaire.IInformationEntiteTitulaire>;
        ajouterPersonneAvecCtrl(identifiantDossier: string, listePersonne: RestModel.AjouterPersonneAvecControles.IPersonneMaj[], identifiantClasse: string): ng.IPromise<ICBusiness.Models.Common.IAnomaliesInfos>;
        getIdentificationTiers(codeEtablissement: string, identifiantPersonne: number): ng.IPromise<Models.Tiers.IIdentification>;
        supprimerPersonneAvecControle(identifiantDossier: string, idws: string, forceeControle?: boolean): ng.IPromise<Models.Common.IRapportTransaction>;
        updateChoixSignature(identifiantDossier: string, idpersonne: string, rolePersonne: string, autoriseSignatureElectronque: boolean): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface IRevenuChargeService {
        /**
         * Ajoute au dossier la charge passée en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param charge
         */
        ajouterCharge(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Ajoute au dossier le crédit existant passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param charge
         */
        ajouterCreditExistant(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<string>;
        /**
         * Ajoute une phase au crédit existant passé en paramètre
         * @param identifiantDossier
         * @param identifiantCreditExistant
         * @param phase
         */
        ajouterPhaseCreditExistant(identifiantDossier: string, identifiantCreditExistant: string, phase: Models.Emprunteur.IPhase): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        /**
         * Ajoute au dossier le revenu passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param revenu
         */
        ajouterRevenu(identifiantDossier: string, identifiantEmprunteur: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Ajoute au dossier le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        ajouterRevenuFiscal(identifiantDossier: string, revenuFiscal: ICBusiness.Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        /**
         * Renvoie le détail du crédit existant passé en paramètre
         * @param identifiantDossier
         * @param charge
         */
        getDetailCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        /**
         * Renvoie le détail du revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        getDetailRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<Models.Emprunteur.IRevenuFiscal>;
        /**
         * Renvoie la liste des identifiants des phases d'un crédit existant
         * @param identifiantDossier
         * @param creditExistant
         */
        getPhaseIdsPourCreditExistant(identifiantDossier: string, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<string[]>;
        /**
         * Met à jour la charge passée en paramètre
         * @param identifiantDossier
         * @param charge
         */
        mettreAJourCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Met à jour le crédit existant passée en paramètre
         * @param identifiantDossier
         * @param phase
         */
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<void>;
        /**
         * Met à jour la phase passée en paramètre
         * @param identifiantDossier
         * @param phase
         */
        mettreAJourPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        /**
         * Met à jour le revenu passé en paramètre
         * @param identifiantDossier
         * @param revenu
         */
        mettreAJourRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Met à jour le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        mettreAJourRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        /**
         * Supprime la charge passée en paramètre
         * @param identifiantDossier
         * @param charge
         */
        supprimerCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Supprime la phase passée en paramètre
         * @param identifiantDossier
         * @param phase
         */
        supprimerPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        /**
         * Supprime le revenu passé en paramètre
         * @param identifiantDossier
         * @param revenu
         */
        supprimerRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        /**
         * Supprime le revenu fiscal passé en paramètre
         * @param identifiantDossier
         * @param revenuFiscal
         */
        supprimerRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
    }
    class RevenuChargeService implements IRevenuChargeService {
        private $q;
        private clientService;
        private creditService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, clientService: ICRest.Services.Dossier.IClientService, creditService: ICRest.Services.Dossier.ICreditService, elementService: ICRest.Services.Element.IElementService);
        private getObjectAjouterPhaseCreditExistant(identifiantDossier, identifiantCreditExistant, phase);
        ajouterCharge(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        ajouterCreditExistant(identifiantDossier: string, identifiantEmprunteur: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<string>;
        ajouterPhaseCreditExistant(identifiantDossier: string, identifiantCreditExistant: string, phase: Models.Emprunteur.IPhase): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        ajouterRevenu(identifiantDossier: string, identifiantEmprunteur: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        ajouterRevenuFiscal(identifiantDossier: string, revenuFiscal: ICBusiness.Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        getDetailCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<Models.Emprunteur.ICreditExistant>;
        getDetailRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<Models.Emprunteur.IRevenuFiscal>;
        getPhaseIdsPourCreditExistant(identifiantDossier: string, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<string[]>;
        mettreAJourCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        mettreAJourCreditExistant(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant): ng.IPromise<void>;
        mettreAJourPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        mettreAJourRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        mettreAJourRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
        supprimerCharge(identifiantDossier: string, charge: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        supprimerListePhasesCreditExistant(identifiantDossier: string, phases: Models.Emprunteur.IPhase[]): ng.IPromise<void>;
        supprimerPhaseCreditExistant(identifiantDossier: string, phase: Models.Emprunteur.IPhase): ng.IPromise<void>;
        supprimerRevenu(identifiantDossier: string, revenu: Models.Emprunteur.IBudgetItem): ng.IPromise<void>;
        supprimerRevenuFiscal(identifiantDossier: string, revenuFiscal: Models.Emprunteur.IRevenuFiscal): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Dossier {
    interface ISurfaceFinanciereService {
        /**
         * Ajoute au dossier le compte passé en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param epargne
         */
        ajouterCompteHorsCe(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
        /**
         * Ajoute au dossier l'épargne passée en paramètre
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param epargne
         */
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        /**
         * Renvoie le détail du compte CE passé en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailCompteCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompte>;
        /**
         * Renvoie le détail du compte CE passé en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompteHorsCe>;
        /**
         * Renvoie le détail de l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        /**
         * Met à jour le compte passé en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        mettreAJourCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
        /**
         * Met à jour l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        /**
         * Supprime le compte passé en paramètre
         * @param identifiantDossier
         * @param compte
         */
        supprimerCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
        /**
         * Supprime l'épargne passée en paramètre
         * @param identifiantDossier
         * @param epargne
         */
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
    class SurfaceFinanciereService implements ISurfaceFinanciereService {
        private $q;
        private clientService;
        private elementService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, clientService: ICRest.Services.Dossier.IClientService, elementService: ICRest.Services.Element.IElementService);
        ajouterCompteHorsCe(identifiantDossier: string, identifiantPersonne: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
        ajouterEpargne(identifiantDossier: string, identifiantPersonne: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        getDetailCompteCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompte>;
        getDetailCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<Models.Emprunteur.ICompteHorsCe>;
        getDetailEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<Models.Emprunteur.IEpargne>;
        mettreAJourCompteHorsCe(identifiantDossier: string, compte: Models.Emprunteur.ICompteHorsCe): ng.IPromise<void>;
        mettreAJourEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
        supprimerCompte(identifiantDossier: string, compte: Models.Emprunteur.ICompte): ng.IPromise<void>;
        supprimerEpargne(identifiantDossier: string, epargne: Models.Emprunteur.IEpargne): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Endettement {
    interface IEndettementService {
        getEndettementFinancement(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Endettement.IEndettementFinancement>;
        getEndettementEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.ISyntheseFinanciere>;
    }
    class EndettementService implements IEndettementService {
        private $q;
        private schemaService;
        static $inject: string[];
        constructor($q: ng.IQService, schemaService: Services.Common.IElementSchemaService);
        getEndettementFinancement(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Endettement.IEndettementFinancement>;
        private getIndiceRAV(tauxEndettement, tauxEndettementMaximum);
        getEndettementEmprunteur(idDossier: string): ng.IPromise<Models.Emprunteur.ISyntheseFinanciere>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IAccessoiresService {
        /** Ajoute un nouvel accessoire lié produit au dossier */
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        /** Ajoute un nouvel accessoire complémentaire au dossier */
        ajouterAccessoireComplementaire(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        /** Supprimer un accessoire */
        supprimerAccessoire(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        /** Retourne la liste des accessoires du catalogue disponible pour un crédit donné */
        listerAccessoiresDisponibles(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IFrais[]>;
        /** Met à jour un accessoire lié produit OU complémentaire */
        majAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire, estChangementFraisFinance: boolean): ng.IPromise<number>;
        /** Récupère les données détaillées d'un accessoire (montant/taux) */
        detailsAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
        /** Ajoute un nouvel tier accessoire complémentaire au dossier */
        retenirBeneficiaireReversement(identifiantDossier: string, identifiantTiers: string, codeRole: string, idAccessoire: string): ng.IPromise<Models.Financement.IAccessoireTiersAjout>;
        /** Liste du tier accessoire au dossier */
        listeTiersReversement(idDossier: string, idAccessoire: string, typeRolePersonne: string, intitule: string, codePostal: string): ng.IPromise<Array<Models.Financement.IListerTiersAccesoire>>;
        /** Supprime le tiers affecté au reversement */
        supprimerTiersReversement(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        /** MaJ des contrôles d'un accessoire */
        updateAccessoireControles(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
        /** récupération de l'idws des phases du crédit non récupérée dans lireSchemaComplet */
        updateAccessoirePhaseControlesValue(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
    }
    class AccessoiresService implements IAccessoiresService {
        private $q;
        private accessoiresService;
        private catalogueService;
        private elementsService;
        private schemaService;
        private creditParam;
        private creditPhaseService;
        static $inject: string[];
        private dateVide;
        constructor($q: ng.IQService, accessoiresService: ICRest.Services.Dossier.IAccessoiresService, catalogueService: ICRest.Services.Dossier.ICatalogueService, elementsService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, creditParam: ICRest.CreditParametre.Services.ICreditParametreService, creditPhaseService: ICBusiness.Services.Financement.ICreditPhaseService);
        ajouterAccessoireLieProduit(idDossier: string, idCredit: string, codeTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        ajouterAccessoireComplementaire(idDossier: string, idCredit: string, codeTypeAccessoire: string, codeSousTypeAccessoire: string): ng.IPromise<Models.Financement.IIdentifiantsAccessoire>;
        supprimerAccessoire(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        listerAccessoiresDisponibles(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IFrais[]>;
        /**
         * Traiement des données accessoires pour Maj Accessoire lié produit ou Accessoire complémentaire
         * @param idDossier
         * @param accessoire Est de type Models.Financement.IAccessoireLieProduit OU Models.Financement.IAccessoireComplementaire
         * @param estChangementFraisFinance Utilisé pour éviter de modifier la valeur de "nombrePaiement" lors du save automatique lié au "frais financé"
         */
        majAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire, estChangementFraisFinance: boolean): ng.IPromise<number>;
        detailsAccessoire(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
        retenirBeneficiaireReversement(identifiantDossier: string, identifiantTiers: string, codeRole: string, idAccessoire: string): ng.IPromise<Models.Financement.IAccessoireTiersAjout>;
        listeTiersReversement(idDossier: string, idAccessoire: string, typeRolePersonne: string, intitule: string, codePostal: string): ng.IPromise<Array<Models.Financement.IListerTiersAccesoire>>;
        supprimerTiersReversement(idDossier: string, idAccessoire: string): ng.IPromise<void>;
        private setMontantTauxAccessoire(montantRetenu, montantSouhaite, taux, idCatlParametreRverTiers, codeSousTypeAccessoire, accessoire);
        updateAccessoireControles(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
        private getPlanFinancementComplet(idDossier);
        updateAccessoirePhaseControlesValue(idDossier: string, accessoire: Models.Financement.IAccessoire): ng.IPromise<Models.Financement.IAccessoire>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IAppelSGFGASService {
        controlerAppelSGFGAS(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Financement.IControleAppelSGFGAS>;
        lancerAppelSGFGAS(idDossier: string, idPlanFinancement: string, estDevis: boolean, urlRetour?: string): ng.IPromise<string>;
    }
    class AppelSGFGASService implements IAppelSGFGASService {
        private planFinancementService;
        static $inject: string[];
        constructor(planFinancementService: ICRest.Services.PlanFinancement.IPlanFinancementService);
        controlerAppelSGFGAS(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Financement.IControleAppelSGFGAS>;
        lancerAppelSGFGAS(idDossier: string, idPlanFinancement: string, estDevis: boolean, urlRetour?: string): ng.IPromise<string>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IBonificationService {
        /**
         * Récupération de la liste des conventions bonification pour un identifiant produit financier définit
         * @param dateDeTraitement
         * @param identifiantProduit
         */
        getListeConventionsBonification(dateDeTraitement: string, identifiantProduit: string): ng.IPromise<Models.Financement.IConventionBonification[]>;
        /**
         * Permet de lier la convention de bonification au crédit
         * @param identifiantDossier
         * @param identifiantCredit
         * @param idConventionBonification
         */
        ajouterConvention(identifiantDossier: string, identifiantCredit: string, idConventionBonification: string): ng.IPromise<void>;
        /**
         * Permet de supprimer la convention de bonification du crédit
         * @param idDossier
         * @param idCreditBonification
         */
        supprimerConvention(idDossier: string, idCreditBonification: string): ng.IPromise<void>;
        /**
         * Récupération de la liste des regles d'éligibilités de la convention sélectionnée
         * @param dateDeTraitement
         * @param identifiantProduit
         * @param identifiantConvention
         */
        getReglesEligibilites(dateDeTraitement: string, identifiantProduit: string, identifiantConvention: string): ng.IPromise<Models.Financement.IRegleEligibilite[]>;
        /**
         * Permet de récupérer les informations du crédit bonification (Principalement pour récupérer le nomPartenaire, non présent dans le schéma complet)
         * @param idDossier
         * @param creditBonification
         */
        lireBonification(idDossier: string, creditBonification: Models.Financement.ICreditBonification): ng.IPromise<Models.Financement.ICreditBonificationDetail>;
        /**
         * Permet de calculer la bonification pour tout les crédits bonifications définit sur le dossier
         * @param idDossier
         */
        calculerBonificationsDossier(idDossier: string): ng.IPromise<void>;
    }
    class BonificationService implements IBonificationService {
        private $q;
        private elementService;
        private creditParametreService;
        private creditService;
        private financementService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, creditService: ICRest.Services.Dossier.ICreditService, financementService: IPlanFinancementService);
        getListeConventionsBonification(dateDeTraitement: string, identifiantProduit: string): ng.IPromise<Models.Financement.IConventionBonification[]>;
        ajouterConvention(identifiantDossier: string, identifiantCredit: string, idConventionBonification: string): ng.IPromise<void>;
        supprimerConvention(idDossier: string, idCreditBonification: string): ng.IPromise<void>;
        getReglesEligibilites(dateDeTraitement: string, identifiantProduit: string, identifiantConvention: string): ng.IPromise<Models.Financement.IRegleEligibilite[]>;
        lireBonification(idDossier: string, creditBonification: Models.Financement.ICreditBonification): ng.IPromise<Models.Financement.ICreditBonificationDetail>;
        calculerBonificationsDossier(idDossier: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditComplementaireService {
        getCreditComplementaire(identifiantDossier: string, creditComplementaire: Models.Financement.ICreditComplementaire, produitFinancier: Models.Financement.IProduitFinancier, codeDevise: string): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        /**
         * Créé un objet creditComplementaire pour la création
         * @param produitFinancier
         * @param codeDevise
         * @param montantCatalogue
         */
        getNewCreditComplementaire(produitFinancier: Models.Financement.IProduitFinancier, codeDevise: string, montantCatalogue: number): Models.Financement.ICreditComplementaireDetail;
        /**
         * Reset les données pour mettre les données propres au catalogue et au besoin calcule le montant charge
         * @param creditComplementaire
         * @param montantCatalogue
         */
        setDonneeCatalogue(creditComplementaire: Models.Financement.ICreditComplementaireDetail, montantCatalogue: number): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        /**
         * Permet de calculer le montant des charges pour le crédit complémentaire
         * @param creditComplementaire
         */
        calculerMontantCharge(creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        /**
         * Ajout de la charge Atout Clic
         * Maj du crédit complémentaire créé
         * Ajout de la phase liée
         * @param identifiantDossier
         * @param dateInstuction
         * @param idEmprunteur
         * @param creditComplementaire
         */
        addCreditComplementaire(identifiantDossier: string, dateInstuction: string, idEmprunteur: string, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<void>;
        /**
         * MaJ charge Atout clic
         * Maj du crédit complémentaire
         * MaJ Phase
         * @param identifiantDossier
         * @param creditComplementaire
         */
        updateCreditComplementaire(identifiantDossier: string, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<void>;
        /**
         * Permet de supprimer plusieurs crédit complémentaire
         * @param idDossier
         * @param idCredit
         */
        supprimerCreditComplementaire(idDossier: string, idCredit: string[]): ng.IPromise<void>;
    }
    class CreditComplementaireService implements ICreditComplementaireService {
        private creditService;
        private elementService;
        private clientService;
        private $q;
        static $inject: string[];
        constructor(creditService: ICRest.CreditService.Services.ICreditService, elementService: ICRest.Services.Element.IElementService, clientService: ICRest.Services.Dossier.IClientService, $q: ng.IQService);
        getCreditComplementaire(identifiantDossier: string, creditComplementaire: Models.Financement.ICreditComplementaire, produitFinancier: Models.Financement.IProduitFinancier, codeDevise: string): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        /**
         * Créé un objet creditComplementaire pour la création
         * @param produitFinancier
         * @param codeDevise
         * @param montantCatalogue
         */
        getNewCreditComplementaire(produitFinancier: Models.Financement.IProduitFinancier, codeDevise: string, montantCatalogue: number): Models.Financement.ICreditComplementaireDetail;
        /**
         * Reset les données pour mettre les données propres au catalogue et au besoin calcule le montant charge
         * @param creditComplementaire
         * @param montantCatalogue
         */
        setDonneeCatalogue(creditComplementaire: Models.Financement.ICreditComplementaireDetail, montantCatalogue: number): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        /**
         * Calcul le montantCharge du crédit
         * @param creditComplementaire
         */
        calculerMontantCharge(creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<Models.Financement.ICreditComplementaireDetail>;
        addCreditComplementaire(identifiantDossier: string, dateInstuction: string, idEmprunteur: string, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<void>;
        updateCreditComplementaire(identifiantDossier: string, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ng.IPromise<void>;
        supprimerCreditComplementaire(idDossier: string, idCredit: string[]): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditEPargneLogementService {
        /**
         * Calculer les droits acquis
         * @param idDossier
         * @param idCredit
         * @param dateTraitement
         * @param duree
         * @param montant
         * @param estEcheance
         */
        calculerDroitsAcquis(idDossier: string, idCredit: string, dateTraitement: string, duree: number, montant: number, estEcheance: boolean): ng.IPromise<Models.Financement.IResultatCalculEL>;
        /**
         * retourne les droits à prêts
         * @param idDossier
         * @param idCredit
         */
        getDroitsAPret(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IDroitsAPret[]>;
        /**
         * Enregistrele droit acquis
         * @param idDossier
         * @param idCredit
         * @param droitAcquis
         * @param prisEnCompte
         */
        saveDroitAcquis(idDossier: string, credit: Models.Financement.ICreditInterne, droitAcquis: Models.Financement.IDroitsAcquis): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * retenir la proposition de prêt épargne logement
         * @param idDossier
         * @param idCredit
         * @param duree
         * @param montantPret
         * @param montantEcheance
         * @param taux
         * @param estEcheance
         */
        retenirProposition(idDossier: string, idCredit: string, duree: number, montantPret: number, montantEcheance: number, taux: number, estEcheance: boolean): ng.IPromise<void>;
    }
    class CreditEPargneLogementService implements ICreditEPargneLogementService {
        private $q;
        private creditEpargneLogementService;
        private creditParametreService;
        static $inject: string[];
        constructor($q: angular.IQService, creditEpargneLogementService: ICRest.Services.Dossier.ICreditEpargneLogementService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService);
        private periodicite;
        calculerDroitsAcquis(idDossier: string, idCredit: string, dateTraitement: string, duree: number, montant: number, estEcheance: boolean): ng.IPromise<Models.Financement.IResultatCalculEL>;
        getDroitsAPret(idDossier: string, idCredit: string): ng.IPromise<Models.Financement.IDroitsAPret[]>;
        saveDroitAcquis(idDossier: string, credit: Models.Financement.ICreditInterne, droitAcquis: Models.Financement.IDroitsAcquis): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        retenirProposition(idDossier: string, idCredit: string, duree: number, montantPret: number, montantEcheance: number, taux: number, estEcheance: boolean): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditExistantService {
        /**
         * Récupération des crédits existants pouvant être inclus dans le lissage
         * Trié selon les crédits existants présent dans les charges de l'emprunteur
         * @param idDossier
         */
        getCreditExistant(idDossier: string): ng.IPromise<Models.Financement.ICreditExistantDetail[]>;
        /**
         * Mise à jour du codePresenceCompCredit des crédits existant sélectionné
         * Valeur pour l'ajout = 79 et pour la suppression = 78
         * @param idDossier
         * @param creditsExistants
         * @param isAjout
         */
        majCreditExistant(idDossier: string, creditsExistants: Models.Financement.ICreditExistant[], isAjout?: boolean): ng.IPromise<void>;
    }
    class CreditExistantService implements ICreditExistantService {
        private schemaService;
        private elementService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService);
        getCreditExistant(idDossier: string): ng.IPromise<Models.Financement.ICreditExistantDetail[]>;
        majCreditExistant(idDossier: string, creditsExistants: Models.Financement.ICreditExistant[], isAjout?: boolean): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditExterneService {
        getCreditExterne(idDossier: string, idCreditExterne: string): ng.IPromise<Models.Financement.ICreditExterne>;
        needsSaving(creditInitial: Models.Financement.ICreditExterne, creditModifie: Models.Financement.ICreditExterne): boolean;
        saveCreditExterne(idDossier: string, idPlanFinancement: string, creditInitial: Models.Financement.ICreditExterne, creditModifie: Models.Financement.ICreditExterne): ng.IPromise<void>;
        supprimerCreditExterne(idDossier: string, idCreditExterne: string): ng.IPromise<void>;
        calculerCaracteristiqueCredit(montantCapital: number, montantEcheance: number, taux: number, dureeAmmortissementMois: number, codePeriodicite: number): ng.IPromise<Models.Financement.IResultatCalculCaracteristique>;
    }
    class CreditExterneService implements ICreditExterneService {
        private elementService;
        private creditService;
        private dossierCreditService;
        private $q;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService, creditService: ICRest.CreditService.Services.ICreditService, dossierCreditService: ICRest.Services.Dossier.ICreditService, $q: ng.IQService);
        getCreditExterne(idDossier: string, idCreditExterne: string): ng.IPromise<Models.Financement.ICreditExterne>;
        private getCreditMaj(c);
        needsSaving(creditInitial: Models.Financement.ICreditExterne, creditModifie: Models.Financement.ICreditExterne): boolean;
        saveCreditExterne(idDossier: string, idPlanFinancement: string, creditInitial: Models.Financement.ICreditExterne, creditModifie: Models.Financement.ICreditExterne): ng.IPromise<void>;
        supprimerCreditExterne(idDossier: string, idCreditExterne: string): ng.IPromise<void>;
        calculerCaracteristiqueCredit(montantCapital: number, montantEcheance: number, taux: number, dureeAmmortissementMois: number, codePeriodicite: number): ng.IPromise<Models.Financement.IResultatCalculCaracteristique>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditPhaseService {
        getPhasesIds(idDossier: string, idCredit: string): ng.IPromise<string[]>;
        getPhases(idDossier: string, idCredit: string, dateDeTraitement: string, codeEtablissement: number, listeIdPhase?: string[]): ng.IPromise<Models.Financement.ICreditPhaseModel>;
        createPhase(idDossier: string, idCredit: string, codeTypePhase: string): ng.IPromise<string>;
        deletePhase(idDossier: string, idPhase: string, listeIdPhase?: string[]): ng.IPromise<void>;
        calculButoir(phase: Models.Financement.ICreditPhase, paramIndex: Models.Financement.IParamIndexation, paramIndexRef: Models.Financement.IParamIndexation, valeurButoir: number): number;
        savePhases(idDossier: string, listePhaseOrigine: Models.Financement.ICreditPhase[], listePhaseModified: Models.Financement.ICreditPhase[]): ng.IPromise<void>;
    }
    class CreditPhaseService implements ICreditPhaseService {
        private elementService;
        private creditParametreService;
        private creditService;
        private $q;
        private parametreApplicatifService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, creditService: ICRest.Services.Dossier.ICreditService, $q: ng.IQService, parametreApplicatifService: ParametrageApplicatif.IParametrageAppicatifService);
        getPhasesIds(idDossier: string, idCredit: string): ng.IPromise<string[]>;
        getPhases(idDossier: string, idCredit: string, dateDeTraitement: string, codeEtablissement: number, listeIdPhase?: string[]): ng.IPromise<Models.Financement.ICreditPhaseModel>;
        createPhase(idDossier: string, idCredit: string, codeTypePhase: string): ng.IPromise<string>;
        deletePhase(idDossier: string, idPhase: string): ng.IPromise<void>;
        private getPhasesDetail(idDossier, creditInterne, dateDeTraitement, codeEtablissement, phases?);
        private listerPaliersDeProgressionParPhase(phases, dateDeTraitement);
        getIndicePhase(codeTypePhase: string): number;
        calculButoir(phase: Models.Financement.ICreditPhase, paramIndex: Models.Financement.IParamIndexation, paramIndexRef: Models.Financement.IParamIndexation, valeurButoir: number): number;
        savePhases(idDossier: string, listePhaseOrigine: Models.Financement.ICreditPhase[], listePhaseModified: Models.Financement.ICreditPhase[]): ng.IPromise<void>;
        private savePhase(idDossier, phaseOrigine, phaseModified);
        private createCreditParamRevision(paramRevisionOrigine, paramRevisionModified);
        private savePalierProgressif(idDossier, listePalierProgressifOrigine, listePalierProgressifModified);
        private getPhaseType(codeTypePhase);
        private createPhaseMaj(phaseOrigine, phaseModified);
        private createComplementPhasePretCombine(qOrigine, qModified);
        private createCreditPalierProgression(palierProgressifOrigine, palierProgressifModified);
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ICreditService {
        /**
         * Ajoute un nouveau crédit interne à un plan de financement puis récupère le crédit
         * @param idDossier Identifiant du dossier
         * @param idPlanFinancement Identifiant du plan de financement
         * @param idProduit Identifiant du produit
         * @param montantEmprunte Montant emprunté pour ce crédit
         * @param initMontant Flag indiquant que le montant doit être initialisé
         * @param enOptim Flag optimisation
         * @param tauxMontage Taux de montage
         * @returns l'ID du crédit créé
         */
        ajouterCreditInterneEtRechageCredit(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<Models.Financement.ICreditInterne>;
        /**
         * Ajoute le crédit interne
         * @param idDossier
         * @param idPlanFinancement
         * @param idProduit
         * @param montantEmprunte
         * @param initMontant
         * @param enOptim
         * @param tauxMontage
         */
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<Models.Financement.ICreditInterneBase>;
        majVentilationDefi(idDossier: string, idProjet: string, montantProjetDefi: number): ng.IPromise<void>;
        /**
         * Mise à jour d'un crédit
         * @param idDossier Identifiant de dossier
         * @param credit Données de mise à jour du crédit
         */
        majCreditInterne(idDossier: string, credit: Models.Financement.ICreditInterne, codeDeviseDossier: string, modeDefi?: boolean): ng.IPromise<void>;
        /**
         * Supprime un crédit interne
         * @param idDossier Identifiant du dossier
         * @param idCredit Identifiant du crédit
         */
        supprimerCreditInterne(idDossier: string, idCredit: string): ng.IPromise<void>;
        /**
         * Calcule les données d'un crédit interne
         * @param idDossier Identifiant du dossier
         * @param idCredit Identifiant du crédit
         * @param financeRaf
         */
        calculerCreditInterne(idDossier: string, idCredit: string, financeRaf?: boolean): ng.IPromise<Models.Financement.ICalculCredit>;
        /**
         * Calcule les données des crédits internes
         * @param idDossier
         * @param listeIdsCredit
         * @param financeRaf
         */
        calculerListeCreditsInternes(idDossier: string, listeIdsCredits: string[]): ng.IPromise<Models.Financement.ICalculCredit[]>;
        /**
         * Calcule les crédits de la liste. Chaque crédit est recalculé uniquement s'il est topé "à recalculer"
         * @param identifiantDossier
         * @param listeIdsCredits
         */
        calculerListeCreditsInternesARecalculer(identifiantDossier: string, listeIdsCredits: string[]): ng.IPromise<void>;
        /**
         * Récupère un crédit sans ses accessoires
         * @param idDossier
         * @param idCredit
         */
        getCreditInterneSansAccessoires(idDossier: string, idCredit: string, planFinancementId: string, dateTraitement: string, codeEtablissement: number, chargerInfoModulationRevision?: boolean, idProjet?: string): ng.IPromise<Models.Financement.ICreditInterne>;
        /**
         * Récupère la liste des crédits
         * @param idDossier
         * @param planFinancementId paramètre optionnel si un seul plan de financement ou proposition déjà retenue, on récupère les crédits du plan unique
         * @param bloquerSousObjets
         */
        listerCredits(idDossier: string, planFinancementId?: string, bloquerSousObjets?: boolean): ng.IPromise<Models.Financement.ICreditInterne[]>;
        getMontantEuroCredit(idDossier: string, idCredit: string): ng.IPromise<number>;
        getDetailProduitFinancier(dateTraitement: string, codeEtablissement: number, idProduitFinancier: string): ng.IPromise<Models.Financement.IProduitFinancier>;
        /**
         * Récupération du formulaire de base de calcul de modulation de crédit
         */
        getInitialFormCalculModulationCredit(): Models.Financement.ICalculModulationCredit;
        /**
         * Permet de récupérer le résultat du calcul de modulation de crédit
         * @param idDossier
         * @param idCredit
         * @param formModulation
         */
        calculerModulationCredit(idDossier: string, idCredit: string, formModulation: Models.Financement.ICalculModulationCredit): ng.IPromise<Models.Financement.IResultatCalculModulationCredit>;
        /**
         * Récupération du formulaire de base de calcul de révision de crédit
         */
        getInitialFormCalculRevisionCredit(): Models.Financement.ICalculRevisionCredit;
        /**
         * Permet de récupérer le résultat du calcul de révision de crédit
         * @param idDossier
         * @param idCredit
         * @param formRevision
         */
        calculerRevisionCredit(idDossier: string, idCredit: string, formRevision: Models.Financement.ICalculRevisionCredit): ng.IPromise<Models.Financement.IResultatCalculRevisionCredit>;
        getCreditInterneAjustable(dateTraitement: string, codeEtablissement: number, idDossier: string, idCredit: string, idProduitFinancier: string): ng.IPromise<Models.Financement.ICreditInterneAjustable>;
        definirRemiseTaux(idDossier: string, idPlan: string, idCredit: string, typeRemise: number, applicationMarge: boolean): ng.IPromise<boolean>;
    }
    class CreditService implements ICreditService {
        private $q;
        private creditService;
        private elementService;
        private schemaService;
        private creditParametreService;
        private creditEpargneLogementService;
        private remiseTauxService;
        static $inject: string[];
        constructor($q: ng.IQService, creditService: ICRest.Services.Dossier.CreditService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, creditEpargneLogementService: ICRest.Services.Dossier.ICreditEpargneLogementService, remiseTauxService: ICRest.Services.Dossier.IDefinirRemiseTauxService);
        ajouterCreditInterneEtRechageCredit(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<Models.Financement.ICreditInterne>;
        ajouterCreditInterne(idDossier: string, idPlanFinancement: string, idProduit: string, montantEmprunte: number, initMontant: boolean, enOptim: boolean, tauxMontage: number): ng.IPromise<Models.Financement.ICreditInterneBase>;
        majVentilationDefi(idDossier: string, idProjet: string, montantProjetDefi: number): ng.IPromise<void>;
        majCreditInterne(idDossier: string, credit: Models.Financement.ICreditInterne, codeDeviseDossier: string, modeDefi?: boolean): ng.IPromise<void>;
        supprimerCreditInterne(idDossier: string, idCredit: string): ng.IPromise<void>;
        calculerCreditInterne(idDossier: string, idCredit: string, financeRaf?: boolean): ng.IPromise<Models.Financement.ICalculCredit>;
        calculerListeCreditsInternes(idDossier: string, listeIdsCredits: string[]): ng.IPromise<Models.Financement.ICalculCredit[]>;
        calculerListeCreditsInternesARecalculer(identifiantDossier: string, listeIdsCredits: string[]): ng.IPromise<void>;
        getCreditInterneSansAccessoires(idDossier: string, idCredit: string, planFinancementId: string, dateTraitement: string, codeEtablissement: number, chargerInfoModulationRevision: boolean, idProjet: string): ng.IPromise<Models.Financement.ICreditInterne>;
        getDetailProduitFinancier(dateTraitement: string, codeEtablissement: number, idProduitFinancier: string): ng.IPromise<Models.Financement.IProduitFinancier>;
        listerCredits(idDossier: string, planFinancementId?: string, bloquerSousObjets?: boolean): ng.IPromise<Models.Financement.ICreditInterne[]>;
        getMontantEuroCredit(idDossier: string, idCredit: string): ng.IPromise<number>;
        getInitialFormCalculModulationCredit(): Models.Financement.ICalculModulationCredit;
        calculerModulationCredit(idDossier: string, idCredit: string, formModulation: Models.Financement.ICalculModulationCredit): ng.IPromise<Models.Financement.IResultatCalculModulationCredit>;
        getInitialFormCalculRevisionCredit(): Models.Financement.ICalculRevisionCredit;
        calculerRevisionCredit(idDossier: string, idCredit: string, formRevision: Models.Financement.ICalculRevisionCredit): ng.IPromise<Models.Financement.IResultatCalculRevisionCredit>;
        getCreditInterneAjustable(dateTraitement: string, codeEtablissement: number, idDossier: string, idCredit: string, idProduitFinancier: string): ng.IPromise<Models.Financement.ICreditInterneAjustable>;
        definirRemiseTaux(idDossier: string, idPlan: string, idCredit: string, typeRemise: number, applicationMarge: boolean): ng.IPromise<boolean>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IEditerDocumentsService {
        editerTableauAmortissement(idDossier: string, idDocument: string): ng.IPromise<Models.Financement.ITableauAmortissement>;
        editerProposition(idDossier: string, idPlan: string): ng.IPromise<Models.Financement.IEditionProposition>;
        /**
         * retourne le flux d'impression
         * @param idDossier
         * @param idPlan
         */
        editerOptimisation(idDossier: string, idPlan: string): ng.IPromise<string>;
    }
    class EditerDocumentsService implements IEditerDocumentsService {
        private editerDocumentsService;
        private editerDocumentFZHCOPTService;
        static $inject: string[];
        constructor(editerDocumentsService: ICRest.Services.Dossier.IEditerDocumentsService, editerDocumentFZHCOPTService: ICRest.Services.Edition.IEditerDocumentFZHCOPTService);
        editerTableauAmortissement(idDossier: string, idDocument: string): ng.IPromise<Models.Financement.ITableauAmortissement>;
        private getParamEditiqueProposition();
        editerProposition(idDossier: string, idPlan: string): ng.IPromise<Models.Financement.IEditionProposition>;
        editerOptimisation(idDossier: string, idPlan: string): ng.IPromise<string>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IPlanFinancementService {
        ajouterPlanFinancement(idDossier: string, idProjet: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        copierPlanFinancement(idDossier: string, idPlanACopier: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        majPlanFinancement(idDossier: string, data: Models.Financement.IPlanFinancementMajRequest): ng.IPromise<void>;
        lirePlanFinancementParId(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Financement.IPlanFinancement>;
        supprimerPlan(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Common.IRapportTransaction>;
        /**
         * Retourne le premier plan de financement trouvé (il n'y a qu'un plan pour conso/pro)
         * @param idDossier
         */
        lirePlanFinancement(idDossier: string): ng.IPromise<Models.Financement.IPlanFinancement>;
        getSyntheseCredits(identifiantDossier: string, listeIdsCredits: string[], codeDeviseDossier: string): ng.IPromise<Models.Financement.ICreditSynthese[]>;
        getPropositions(idDossier: string): ng.IPromise<Models.Financement.IProposition[]>;
        getSyntheseFinancement(idDossier: string, idSyntheses: string[], idPlanFinancement: string): ng.IPromise<Models.Financement.ISyntheseFinancement[]>;
        calculerCapaciteRemboursement(idDossier: string, idPlan: string, montantEcheanceChoisie: number, tauxEndettementChoisie: number): ng.IPromise<Models.Financement.Optimisation.ICapaciteRemboursement>;
        getCriteresOptim(idDossier: string, idPlan: string): ng.IPromise<Models.Financement.Optimisation.ICriteresOptimisation>;
        optimiserPlan(idDossier: string, criteres: Models.Financement.Optimisation.ICriteresOptimisation): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        saveListePaliersContraints(idDossier: string, idPlan: string, listePaliers: Models.Financement.Optimisation.IPalierContraint[]): ng.IPromise<void>;
    }
    class PlanFinancementService implements IPlanFinancementService {
        private $q;
        private planFinancementService;
        private elementSchemaService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, planFinancementService: ICRest.Services.PlanFinancement.IPlanFinancementService, elementSchemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService);
        ajouterPlanFinancement(idDossier: string, idProjet: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        copierPlanFinancement(idDossier: string, idPlanACopier: string): ng.IPromise<Models.Financement.IRetourPlanFinancementAjout>;
        majPlanFinancement(idDossier: string, data: Models.Financement.IPlanFinancementMajRequest): ng.IPromise<void>;
        lirePlanFinancement(idDossier: string): ng.IPromise<Models.Financement.IPlanFinancement>;
        lirePlanFinancementParId(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Financement.IPlanFinancement>;
        getPropositions(idDossier: string): ng.IPromise<Models.Financement.IProposition[]>;
        getSyntheseFinancement(idDossier: string, idSyntheses: string[], idPlanFinancement: string): ng.IPromise<Models.Financement.ISyntheseFinancement[]>;
        getSyntheseCredits(identifiantDossier: string, listeIdsCredits: string[], codeDeviseDossier: string): ng.IPromise<Models.Financement.ICreditSynthese[]>;
        private getPlanFinancementComplet(idDossier, bloquerSousObjets?);
        supprimerPlan(idDossier: string, idPlanFinancement: string): ng.IPromise<Models.Common.IRapportTransaction>;
        calculerCapaciteRemboursement(idDossier: string, idPlan: string, montantEcheanceChoisie: number, tauxEndettementChoisie: number): ng.IPromise<Models.Financement.Optimisation.ICapaciteRemboursement>;
        getCriteresOptim(idDossier: string, idPlan: string): ng.IPromise<Models.Financement.Optimisation.ICriteresOptimisation>;
        saveListePaliersContraints(idDossier: string, idPlan: string, listePaliers: Models.Financement.Optimisation.IPalierContraint[]): ng.IPromise<void>;
        optimiserPlan(idDossier: string, criteres: Models.Financement.Optimisation.ICriteresOptimisation): ng.IPromise<Models.Common.IAnomalieLecture[]>;
    }
}

declare namespace ICBusiness.Services.Financement {
    interface IProduitService {
        listerProduits(idDossier: string, idProjet: string, idPlanFinancement: string, codeDevise: string, estOptimise?: boolean, estLissage?: boolean, fromCache?: boolean): ng.IPromise<Models.Financement.IFamilleProduit[]>;
    }
    class ProduitService implements IProduitService {
        private produitService;
        private cacheService;
        private $q;
        static $inject: string[];
        constructor(produitService: ICRest.Services.Produit.IProduitService, cacheService: Services.Common.ICacheService, $q: ng.IQService);
        listerProduits(idDossier: string, idProjet: string, idPlanFinancement: string, codeDevise: string, estOptimise?: boolean, estLissage?: boolean, fromCache?: boolean): ng.IPromise<Models.Financement.IFamilleProduit[]>;
        private listerProduitsEtGammeLissage(idDossier, idProjet, idPlanFinancement, codeDevise, estOptimise?, estLissage?);
    }
}

declare namespace ICBusiness.Services.Financement {
    interface ISmacService {
        synchroniserAvecSmac(identifiantDossier: string, identifiantPlanFinancement: string, miseAJourDossierSMAC: boolean, miseAJourDossierNEO: boolean, uIDSmac: string): ng.IPromise<Models.Common.IAnomaliesInfos>;
    }
    class SmacService implements ISmacService {
        private planFInancementService;
        static $inject: string[];
        constructor(planFInancementService: ICRest.Services.PlanFinancement.IPlanFinancementService);
        synchroniserAvecSmac(idDossier: string, idPlanFinancement: string, miseAJourDossierSMAC: boolean, miseAJourDossierNEO: boolean, uIDSmac: string): ng.IPromise<Models.Common.IAnomaliesInfos>;
    }
}

declare namespace ICBusiness.Services.EntiteExterne {
    interface IEntiteExterneService {
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getEntiteExterne(idDossier: string): ng.IPromise<Models.EntiteExterne.IDossierDEFI>;
    }
    class EntiteExterneService implements IEntiteExterneService {
        private schemaService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService);
        getEntiteExterne(idDossier: string): ng.IPromise<Models.EntiteExterne.IDossierDEFI>;
    }
}

declare namespace ICBusiness.Services.Garanties {
    /** Services relatifs aux assurances */
    interface IGarantiesService {
        /** Supprime une assurance */
        supprimerGarantie(idDossier: string, idAssurance: string): ng.IPromise<void>;
        /**
         *
         * @param idDossier
         * @param dateTraitement
         * @param codeEtab
         * @param idGarantie
         * @param idPlanFi
         * @param excludeListerConvention Permet de pas pas faire de listerConvention car cela remet le credit "à calculer"
         */
        loadGarantie(idDossier: string, dateTraitement: string, codeEtab: string, idGarantie: string, idPlanFi: string, excludeListerConvention?: boolean, garantieBase?: Models.Garanties.IGarantieBase): ng.IPromise<Models.Garanties.IGarantie>;
        /**
         * Liste les garanties du premier plan de financement de la liste
         * @param idDossier
         */
        getListeGaranties(idDossier: string, avecCompletude?: boolean): ng.IPromise<Models.Garanties.IListeGarantie>;
        /**
         * Liste des garanties du plan passé en paramètre
         * @param idDossier
         * @param planFinancementIdws
         */
        getListeGarantiesParPlan(idDossier: string, planFinancementIdws: string): ng.IPromise<Models.Garanties.IListeGarantie>;
        /**
         * Liste des garanties avec des garanties chargé avec toutes les informations.
         * @param idDossier
         * @param dateDeTraitement
         * @param codeEtab
         */
        getListeGarantiesAvecDetails(idDossier: string, dateDeTraitement: string, codeEtab: string, codeApplication: Enum.CodeApplicationEnum): ng.IPromise<Models.Garanties.IGarantie[]>;
        /**
         * Liste toutes les natures de garantie disponibles
         * @param dateTraitement
         * @param codeEtablissement
         */
        getListeNaturesGarantie(dateTraitement: string, codeEtablissement: string, idDossier: string, listeIdwsCredit: string[]): ng.IPromise<Models.Garanties.INatureGarantie[]>;
        /**
         * Liste les conventions associées à une nature de garantie
         * @param idDossier
         * @param nature
         * @param listeIdwsCredit
         */
        getListeConventionsAssocieNature(idDossier: string, nature: Models.Garanties.INatureGarantie, listeIdwsCredit: string[]): ng.IPromise<Models.Garanties.IConvention[]>;
        /**
         * Regarde si la nature de garantie est conventionnnée
         * @param nature
         */
        isConventionnee(nature: ICBusiness.Models.Garanties.INatureGarantie): boolean;
        /**
         * Regarde si la nature de garantie est personnelle non conventionnée
         * @param nature
         */
        isPersonnelleNonConventionnee(nature: ICBusiness.Models.Garanties.INatureGarantie): boolean;
        /**
         * Ajouter une garantie personnelle conventionnée
         * @param idDossier
         * @param garantie
         */
        ajouterGarantiePersonnelleConventionnee(idDossier: string, garantie: Models.Garanties.IGarantie, forcerAjout: boolean): ng.IPromise<Models.Garanties.IResultatAjoutGarantie>;
        /**
         * Ajouter une garantie personnelle conventionnée
         * @param idDossier
         * @param garantie
         */
        ajouterGarantieAvecControle(idDossier: string, garantie: Models.Garanties.IGarantie, forcerAjout: boolean): ng.IPromise<Models.Garanties.IResultatAjoutGarantie>;
        /**
         * Donne l'organisme de cautionnement
         * @param codeEtablissement
         * @param idDossier
         * @param identifiantPersonne
         */
        getGarantOrganismeCautionnement(codeEtablissement: string, idDossier: string, identifiantPersonne: string): ng.IPromise<Models.Emprunteur.IGarant>;
        /**
         * Sauvegarde une courveture et sa cotisation
         * @param idDossier
         * @param couverture
         * @param cotisation
         */
        saveCouvertureEtCotisation(idDossier: string, couverture: Models.Garanties.ICouverture, cotisation: Models.Garanties.ICotisation, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        /**
         * Sauvegarde une couverture
         * @param idDossier
         * @param couverture
         * @param garantie
         */
        saveCouverture(idDossier: string, couverture: Models.Garanties.ICouverture, typeCouverture: Enum.TypeCouverture): ng.IPromise<void>;
        /**
         * Sauvegarde une couverture
         * @param idDossier
         * @param couverture
         * @param garantie
         */
        saveCotisation(idDossier: string, cotisation: Models.Garanties.ICotisation, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        /**
         * Restore une cotisation avec ses valeurs par défaut
         * @param idDossier
         * @param cotisation
         */
        restoreCotisation(idDossier: string, cotisation: Models.Garanties.ICotisation): ng.IPromise<void>;
        /**
         * Sauvegarde la garantie
         * @param idDossier
         * @param garantie
         */
        saveGarantie(idDossier: string, garantie: Models.Garanties.IGarantie, saveBienPorte: boolean, garantieOrigine?: Models.Garanties.IGarantie, bienPorteEnGarantie?: Models.Garanties.IBienPorteEnGarantieAdmin, bienPorteEnGarantieOrigine?: Models.Garanties.IBienPorteEnGarantieAdmin, objetPorteGarantie?: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie): ng.IPromise<ICBusiness.Models.Common.IAnomalieLecture[]>;
        /**
         * Sauvegarde les couvertures de la garnatie
         * @param idDossier
         * @param garantie
         */
        saveCouvertures(idDossier: string, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        /**
         * Indique si des modifications sont à sauvegarder sur la garantie
         * @param garantie
         * @param garantieOrigine
         */
        garantieAdminNeedsSaving(garantie: Models.Garanties.IGarantie, garantieOrigine: Models.Garanties.IGarantie): boolean;
        objetPorteEnGarantieAdminNeedSaving(idDossier: string, bienPorte: Models.Garanties.IBienPorteEnGarantieAdmin, bienPorteOrigine: Models.Garanties.IBienPorteEnGarantieAdmin, objetPorteGarantie: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie): boolean;
        getListePacteCommissoire(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        addGarant(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IGarant>;
        getListeAutresObjets(dateDeTraitement: string, codeEtab: string, codeApplication: Enum.CodeApplicationEnum, natureGarantie: Models.Garanties.INatureGarantie): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        definirSiObjetDuFinancementPossible(dateDeTraitement: string, codeEtab: string, idDossier: string, idProjet: string, natureGarantie: Models.Garanties.INatureGarantie): ng.IPromise<boolean>;
        estimerSureteReelleHypotheque(idDossier: string, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        saveCoutTotalGarantieReelle(idDossier: string, idGarantie: string, coutTotal: number): ng.IPromise<void>;
        envoyerSaccef(idDossier: string, idPlanFinancement: string): ng.IPromise<string[]>;
        testerPresenceReponseCEGC(idDossier: string): ng.IPromise<boolean>;
        traiterReponseCEGC(idDossier: string): ng.IPromise<Models.Garanties.IResultatTraitementCEGC>;
        controlerAvantAppelCEGC(idDossier: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        checkIfDossierHasOneSAccef(idDossier: string): ng.IPromise<boolean>;
    }
    /** Services relatifs aux assurances */
    class GarantiesService implements IGarantiesService {
        private $q;
        private elementService;
        private schemaService;
        private creditService;
        private creditParametreService;
        private garantieRestService;
        private creditRestService;
        private controleRestService;
        private accessoireRestService;
        private clientService;
        private versementService;
        private catalogueService;
        private cacheService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, creditService: Services.Financement.ICreditService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, garantieRestService: ICRest.Services.Garanties.IGarantieService, creditRestService: ICRest.CreditService.Services.ICreditService, controleRestService: ICRest.Services.Controle.IControleService, accessoireRestService: ICRest.Services.Dossier.IAccessoiresService, clientService: ICRest.Services.Dossier.IClientService, versementService: ICRest.Services.Dossier.IAjouterVersementAttenduService, catalogueService: Services.Catalogue.ICatalogueService, cacheService: Services.Common.ICacheService);
        supprimerGarantie(idDossier: string, idGarantie: string): ng.IPromise<void>;
        loadGarantie(idDossier: string, dateTraitement: string, codeEtab: string, idGarantie: string, idPlanFi: string, excludeListerConvention?: boolean, garantieBase?: Models.Garanties.IGarantieBase): ng.IPromise<Models.Garanties.IGarantie>;
        getListePacteCommissoire(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        private getListeBenificiaire(dateTraitement, codeEtablissement, dossierLecture, garantieLecture);
        /**
         * récupère la liste des garanties en les chargeants une à une
         * @param idDossier
         */
        getListeGarantiesAvecDetails(idDossier: string, dateDeTraitement: string, codeEtab: string, codeApplication: Enum.CodeApplicationEnum): ng.IPromise<Models.Garanties.IGarantie[]>;
        getListeGaranties(idDossier: string, avecCompletude?: boolean): ng.IPromise<Models.Garanties.IListeGarantie>;
        getListeGarantiesParPlan(idDossier: string, planFinancementIdws: string): ng.IPromise<Models.Garanties.IListeGarantie>;
        private _setlibelleCount;
        /**
         * Effectue un appel à controlerCompletudeGarantieAssurance et si pas d'ano bloquante, appel de lireElement de la garantie pour vérifier les dates
         * @param idDossier
         * @param garanties
         */
        private setLibelleCompletude(idDossier, garanties);
        private filterAnomalieGarantie(idGarantie, anomalies, typeAno?);
        private setLibelleCompletudeSansErreur(garanties);
        getParametragePacteCommissoire(dateTraitement: string, codeEtablissement: string, natureGarantie: string): ng.IPromise<Models.Garanties.IParametragePacteCommissoire>;
        getListeNaturesGarantie(dateTraitement: string, codeEtablissement: string, idDossier: string, listeIdwsCredit: string[]): ng.IPromise<Models.Garanties.INatureGarantie[]>;
        getListeConventionsAssocieNature(idDossier: string, nature: Models.Garanties.INatureGarantie, listeIdwsCredit: string[]): ng.IPromise<Models.Garanties.IConvention[]>;
        isConventionnee(nature: ICBusiness.Models.Garanties.INatureGarantie): boolean;
        isPersonnelleNonConventionnee(nature: ICBusiness.Models.Garanties.INatureGarantie): boolean;
        ajouterGarantiePersonnelleConventionnee(idDossier: string, garantie: Models.Garanties.IGarantie, forcerAjout: boolean): ng.IPromise<Models.Garanties.IResultatAjoutGarantie>;
        ajouterGarantieAvecControle(idDossier: string, garantie: Models.Garanties.IGarantie, forcerAjout: boolean): ng.IPromise<Models.Garanties.IResultatAjoutGarantie>;
        getGarantOrganismeCautionnement(codeEtablissement: string, idDossier: string, identifiantPersonne: string): ng.IPromise<Models.Emprunteur.IGarant>;
        saveCouvertureEtCotisation(idDossier: string, couverture: Models.Garanties.ICouverture, cotisation: Models.Garanties.ICotisation, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        saveCouverture(idDossier: string, couverture: Models.Garanties.ICouverture, typeCouverture: Enum.TypeCouverture): ng.IPromise<void>;
        saveCotisation(idDossier: string, cotisation: Models.Garanties.ICotisation, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        restoreCotisation(idDossier: string, cotisation: Models.Garanties.ICotisation): ng.IPromise<void>;
        saveGarantie(idDossier: string, garantie: Models.Garanties.IGarantie, saveBienPorte: boolean, garantieOrigine?: Models.Garanties.IGarantie, bienPorteEnGarantie?: Models.Garanties.IBienPorteEnGarantieAdmin, bienPorteEnGarantieOrigine?: Models.Garanties.IBienPorteEnGarantieAdmin, objetPorteGarantie?: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie): ng.IPromise<ICBusiness.Models.Common.IAnomalieLecture[]>;
        private accorderRefuserGarantie(idDossier, garantie, garantieOrigine?);
        private accorderGarantie(idDossier, garantie);
        saveCouvertures(idDossier: string, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        garantieAdminNeedsSaving(garantie: Models.Garanties.IGarantie, garantieOrigine: Models.Garanties.IGarantie): boolean;
        objetPorteEnGarantieAdminNeedSaving(idDossier: string, bienPorte: Models.Garanties.IBienPorteEnGarantieAdmin, bienPorteOrigine: Models.Garanties.IBienPorteEnGarantieAdmin, objetPorteGarantie: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie): boolean;
        addGarant(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IGarant>;
        private majElementsGarantie(idDossier, garantie, garantieOrigine?, bienPorteEnGarantie?, bienPorteEnGarantieOrigine?, objetPorteGarantie?);
        /**
         *
         * @param garantie
         * @param garantieOrigine
         */
        private getGarantieMaj(garantie, garantieOrigine);
        /**
         * Met à jour le garantieMaj si il y a un rang hypothèque à récuprérer depuis l'objetPorteEngarantie
         * @param garantieMaj
         * @param objetPorteGarantie
         * @param bienPorteEnGarantie
         */
        private updateGarantieMajWithRangHypotheque(garantie, garantieMaj, objetPorteGarantie, bienPorteEnGarantie);
        /**
         * Retourne la classe et l'objet à mettre à jour. Dans le cas d'un versement, on ajoute la promesse à effectuer
         * @param idDossier
         * @param bienPorte
         * @param bienPorteOrigine
         */
        private getObjetPorteEnGarantieMajAndVersementPromise(idDossier, bienPorte, bienPorteOrigine, avecVersementPromise);
        private getCouvertureMaj(couverture, couvOrigine, typeCouverture);
        private getCotisationMaj(cotisation, cotiOrigine, garantie, garantieOrigine);
        private hasONeValueNotUndefined<T>(element);
        private getNewValueOrUndefined<T>(newValue, oldValue);
        private isDifferent<T>(newValue, oldValue);
        getListeAutresObjets(dateDeTraitement: string, codeEtab: string, codeApplication: Enum.CodeApplicationEnum, natureGarantie: Models.Garanties.INatureGarantie): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Définit si l'objet porté en garantie peut être l'objet du financement.
         * Règle : si une nature relative au type d'objet contient le type d'objet financier du projet --> possible
         * @param dateDeTraitement
         * @param codeEtab
         * @param idDossier
         * @param idProjet
         * @param natureGarantie
         */
        definirSiObjetDuFinancementPossible(dateDeTraitement: string, codeEtab: string, idDossier: string, idProjet: string, natureGarantie: Models.Garanties.INatureGarantie): ng.IPromise<boolean>;
        /**
         * Liste les natures relaltives au type d'objet filtrées par rapport à la nature de la garantie
         * @param dateDeTraitement
         * @param codeEtab
         * @param natureGarantie
         */
        private getNaturesTypeObjet(dateDeTraitement, codeEtab, natureGarantie);
        estimerSureteReelleHypotheque(idDossier: string, garantie: Models.Garanties.IGarantie): ng.IPromise<void>;
        saveCoutTotalGarantieReelle(idDossier: string, idGarantie: string, coutTotal: number): ng.IPromise<void>;
        envoyerSaccef(idDossier: string, idPlanFinancement: string): ng.IPromise<string[]>;
        testerPresenceReponseCEGC(idDossier: string): ng.IPromise<boolean>;
        traiterReponseCEGC(idDossier: string): ng.IPromise<Models.Garanties.IResultatTraitementCEGC>;
        controlerAvantAppelCEGC(idDossier: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        private ajouterVersementAttendu(idDossier, idContratAssurance, versement);
        private modifierVersementAttendu(idDossier, versement);
        private supprimerVersementAttendu(idDossier, identifiantElement);
        checkIfDossierHasOneSAccef(idDossier: string): ng.IPromise<boolean>;
        /**
         * Recalcule toutes les couvertures de la garantie passée en paramètre en fonction du coût de couverture globale
         * @param garantie
         */
        private calculerMontantOuTauxCouvertureGlobale(garantie);
    }
}

declare namespace ICBusiness.Services.Garanties {
    interface IObjetPorteGarantieGCData {
        objetPorteGarantieWrapper: GarantieCredit.Modele.IObjetPorteGarantieWrapper;
        contexte: GarantieCredit.Modele.IContexte;
    }
    class ObjetPorteGarantieWrapperService {
        private creditParametreService;
        private mwsfAdresseService;
        private elementService;
        static $inject: Array<string>;
        constructor(creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, mwsfAdresseService: myway.comAdresseDqe.AdresseService, elementService: ICRest.Services.Element.IElementService);
        getParamsDirectiveObjetPorteGarantie(garantieReelle: ICBusiness.Models.Garanties.IGarantie, bienPorteEnGarantie: Models.Garanties.IBienPorteEnGarantieAdmin, idDossier: string, codeEtablissement: string, dateTraitement: string, idEmprunteur: string, idProjet: string): ng.IPromise<IObjetPorteGarantieGCData>;
        private mapObjetPorteEnGarantie(idDossier, codeEtablissement, codeAuthentiqueContrat, idEmprunteur, garantieReelle, projet, redacteurActe, toc, tor, bienPorteEnGarantie, adressesDqe, versements);
        /**
         * Initialisation de l'attribut typeObjetReglemente
         */
        private getTypeObjetReglemente(projet, libelleTypeObjetRegle);
        /**
         * Initialisation de l'attribut creditCouvertParGarantie
         */
        private getCreditCouvertParGarantie(garantieReelle, bienPorteEnGarantie);
        /**
         * Initialisation de l'attribut objetGarantieGlobal
         */
        private getObjetGarantieGlobal(credit, codeAuthentiqueContrat, codeEtablissement, idEmprunteur, redacteurActe, creditsCouvert);
        /**
         * Initialisation de l'attribut DefinitionObjet
         */
        private getObjetPorteGarantie(garantieReelle, bienPorteEnGarantie, toc, adressesDqe, projet, versements);
        /**
         * Initialisation du type objet porté en garantie
         */
        private defineTypeObjetPorteGarantie(garantieReelle, bienPorteEnGarantie, objetPorteGarantie, adressesDqe, projet, versements);
        /**
         * Récupération de l'attribut DefinitionObjet
         */
        private getDefinitionObjet(garantieReelle, bienPorteEnGarantie, adressesDqe, projet);
        /**
         * Récupération du libellé adresse du bien porté en garantie
         */
        private getLibelleAdresseBienPorteEnGarantie(bienPorteEnGarantie);
    }
}

declare module ICBusiness.Services {
    class ParametreRestService {
        private creditParametreService;
        private $filter;
        static TYPE_TYPOLOGIE_TYPE_BIEN: string;
        static TYPE_TYPOLOGIE_ZONE_IMPLANTATION: string;
        static TYPE_TYPOLOGIE_CENTRE_GESTION: string;
        static TYPE_TYPOLOGIE_TYPE_TECHNIQUE_JURIDIQUE: string;
        static TYPE_TYPOLOGIE_MODALITE_ESTIMATION: string;
        private dateInstruction;
        static $inject: string[];
        constructor(creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, $filter: ng.IFilterService);
        /**
         * Instancier la date d'instruction avant tout appel
         * @param date
         */
        setDateInstruction(date: string): void;
        /**
         * Récupération de la liste TypologieCentreGestion
         */
        getTypologiesCentreGestion(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypologie[]>;
        /**
         * Récupération de la liste TypologieTypeTechniqueJuridique
         */
        getTypologiesTypeTechniqueJuridique(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypologie[]>;
        /**
         * Récupération de la liste TypologieZoneImplantation
         */
        getTypologiesZoneImplantation(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypologie[]>;
        /**
         * Récupération de la liste TypologieTypeBien
         */
        getTypologiesTypeBien(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypologie[]>;
        /**
         * Récupère toutes les typologies
         * @param {string} typeTypologie
         * @returns
         */
        private getTypologies(typologie);
        /**
         * Transforme les objets ITypologiesInstruction (instruction) en IParametreTypologie (gestion)
         */
        private transformeParametreTypologie(typologiesInstruction);
        /**
         * Récupération de la liste des types objets réglementés
         */
        getTypesObjetReglemente(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypeObjetReglemente[]>;
        /**
         * Transforme les objets ITypeObjetReglemente (instruction) en IParametreTypeObjetReglemente (gestion)
         */
        private transformeTypeObjetReglemente(tors);
        /**
         * Récupération de la liste de pays
         */
        getPays(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametrePays[]>;
        /**
         * Transforme les objets IScCodePays (instruction) en IParametrePays (gestion)
         */
        private transformeScCodePays(scCodesPays);
        /**
         * Récupération de la liste des types objets financement
         */
        getTypeObjetFinancementGarantie(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreTypeObjetFinancementGarantie[]>;
        /**
         * Transforme les objets ITypeObjetCommercial (instruction) en IParametreTypeObjetFinancementGarantie (gestion)
         */
        private transformeTypeObjetFinancement(tocs);
        /**
         * Récupération de la liste des catégories réglementaires attribution tor
         */
        getCategorieReglementaireAttributionTor(codeEtablissement: number, numeroCredit: string): ng.IPromise<GarantieCredit.DTO.IParametreCategorieReglementaireAttributionTor[]>;
        /**
         * Chargement des listes utilisées pour l'estimation
         */
        loadListesEstimation(codeEtablissement: number, numeroCredit: string, cache: boolean, getListeModalitesVenale: () => GarantieCredit.DTO.ITypeModalite[], pushListeModalitesVenale: (modaliteVenale: GarantieCredit.DTO.ITypeModalite) => void, getListeMotifsVenale: () => GarantieCredit.DTO.IParametreCodeMotif[], pushListeMotifsVenale: (motifVenale: GarantieCredit.DTO.IParametreCodeMotif) => void, getListeModalitesPrudentielle: () => GarantieCredit.DTO.ITypeModalite[], pushListeModalitesPrudentielle: (modalitePrudentielle: GarantieCredit.DTO.ITypeModalite) => void, getListeMotifsPrudentielle: () => GarantieCredit.DTO.IParametreCodeMotif[], pushListeMotifsPrudentielle: (motifPrudentielle: GarantieCredit.DTO.IParametreCodeMotif) => void, filterTypologies: (list: GarantieCredit.DTO.IParametreTypologie[], codeTypologie: string) => GarantieCredit.DTO.IParametreTypologie): ng.IPromise<void>;
        /**
         * Transforme les objets IParametreTypologie (gestion) en ITypeModalite (gestion)
         */
        private transformeTypeModalite(typologie, typeEstimation);
        /**
         * Récupération du fichier parametre
         */
        getParametre(): ParametreRestService;
    }
}

declare namespace ICBusiness.Services.Habilitation {
    interface IHabilitationService {
        /**
         * Retourne vrai si l'agent a les habilitations pour la saisie de la date d'instruction, sinon renvoie false
         * @param authentificationInfo
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        getAutorisationPourDateInstruction(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<boolean>;
        /**
         * Retourne les données de l'agent
         * @param identifiantElementStructure
         * @param identifiantEntiteConnecte
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        listerInfoAgent(identifiantElementStructure: string, identifiantEntiteConnecte: string, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
        /**
         * Permet de savoir si un agent est back-office
         * @param identifiantElementStructure
         * @param identifiantEntiteConnecte
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         * @returns booléen pour savoir si l'agent est back-office
         */
        estAgentBO(identifiantElementStructure: string, identifiantEntiteConnecte: string): ng.IPromise<boolean>;
        /**
         * Permet de savoir si l'agent est autoriser à transférer
         * @param identifiantElementStructure
         * @param identifiantEntiteConnecte
         * @param estTransfertNeoActive
         * @returns booléen pour savoir si l'agent est autoriser à transférer
         */
        estTransfertNeoActive(identifiantElementStructure: string, identifiantEntiteConnecte: string): ng.IPromise<boolean>;
    }
    class HabilitationService implements IHabilitationService {
        private creditParametreService;
        private cacheService;
        static $inject: string[];
        constructor(creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, cacheService: ICRest.Services.Common.ICacheService);
        /**
         * L'agent doit être habilité et la caisse autoriser la selection d'une autre date
         * @param authentificationInfo
         * @param codeCategorieEmprunteur
         * @param codeTypeElementStructure
         */
        getAutorisationPourDateInstruction(authentificationInfo: MyWay.Services.Context.AuthentificationInfo, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<boolean>;
        /**
         * vérifie que l'établissment autorise la sélection de date de traitement du dossier.
         * @param codeEtablissement
         */
        private selectionDateTraitementActifEtablissement(codeEtablissement);
        listerInfoAgent(identifiantElementStructure: string, identifiantEntiteConnecte: string, codeCategorieEmprunteur?: string, codeTypeElementStructure?: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
        estAgentBO(identifiantElementStructure: string, identifiantEntiteConnecte: string): ng.IPromise<boolean>;
        estTransfertNeoActive(identifiantElementStructure: string, identifiantEntiteConnecte: string): ng.IPromise<boolean>;
    }
}

declare namespace ICBusiness.Services.Industrialisation {
    interface IIndustrialisationService {
        lireOffrePretIndustrialisee(idDossier: string): ng.IPromise<ICBusiness.Models.Industrialisation.IOffrePretIndustrialiseeLecture>;
        creerDossier(idDossier: string, listeIdws: string[]): ng.IPromise<ICBusiness.Models.Industrialisation.IResultatOffrePretIndustrialisee>;
        ajouterDocumentsDansDossier(idDossier: string, listeDoc: ICBusiness.Models.Industrialisation.IDocumentOffreIndustrialisee[]): ng.IPromise<ICBusiness.Models.Industrialisation.IResultatAjoutDocumentPretIndustrialisee>;
        annulerDossier(idDossier: string): ng.IPromise<ICRest.Modeles.AnnulerDossierIndus.IResultatOffrePretIndustrialisee>;
    }
    class IndustrialisationService implements IIndustrialisationService {
        private industrialisationService;
        static $inject: string[];
        constructor(industrialisationService: ICRest.Services.Industrialisation.IIndustrialisationService);
        /**
         * Lecture du dossier industrialisé
         *
         * @param idDossier identifiant du dossier en instruction
         */
        lireOffrePretIndustrialisee(idDossier: string): ng.IPromise<ICBusiness.Models.Industrialisation.IOffrePretIndustrialiseeLecture>;
        /**
         * Création du dossier industrialisé
         *
         * @param idDossier identifiant du dossier en instruction
         * @param listeIdws liste des identifiants des documents
         */
        creerDossier(idDossier: string, listeIdws: string[]): ng.IPromise<ICBusiness.Models.Industrialisation.IResultatOffrePretIndustrialisee>;
        /**
         * Ajout de document(s) au dossier industrialisé
         *
         * @param idDossier identifiant du dossier en instruction
         * @param listeDoc liste des documents (identifiant et flux 'binaire')
         */
        ajouterDocumentsDansDossier(idDossier: string, listeDoc: ICBusiness.Models.Industrialisation.IDocumentOffreIndustrialisee[]): ng.IPromise<ICBusiness.Models.Industrialisation.IResultatAjoutDocumentPretIndustrialisee>;
        /**
         * Annulation du dossier industrialisé
         *
         * @param idDossier identifiant du dossier en instruction
         */
        annulerDossier(idDossier: string): ng.IPromise<ICRest.Modeles.AnnulerDossierIndus.IResultatOffrePretIndustrialisee>;
    }
}

declare namespace ICBusiness.Services.ImpressionService {
    interface IImpressionService {
        editerDocument(idDossier: string, idDocument: string, identifiantWs: string, paramsEditiques: ICRest.Impression.Models.IParamEditique[], niveauTraitement: number, modeEdition: number, formatEditique: number, codeSignature: number, forceControleGestion: boolean, forceControleEdition: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        editerOffrePret(idDossier: string, idDocument: string, identifiantWs: string, paramsEditiques: ICRest.Impression.Models.IParamEditique[], niveauTraitement: number, modeEdition: number, formatEditique: number, codeSignature: number, forceControleGestion: boolean, forceControleEdition: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        editerPiecesEtControle(idDossier: string, typePiece: Enum.EnumTypePiece): ng.IPromise<void>;
        lancerImpression(listeDocs: ICBusiness.Models.EditionOffre.IInfoDocument[]): MyWay.Services.IPromesse<any>;
        editerDocumentEpargneLogment(idDossier: string, idCredit: string, dureeAnneeCredit: number, taux: number, montant: number, echeance: number, droitsAcquis: Models.Financement.IDroitsAcquis[], droitsAPret: Models.Financement.IDroitsAPret[]): ng.IPromise<void>;
    }
    /**
     * Services d'impression
     */
    class ImpressionService implements IImpressionService {
        private impressionService;
        private editerDocumentService;
        private serviceAgentExtended;
        private fichierService;
        static $inject: string[];
        constructor(impressionService: ICRest.Impression.Services.IImpressionService, editerDocumentService: ICRest.Services.Dossier.IEditerDocumentsService, serviceAgentExtended: MyWay.Services.ServiceAgentExtended, fichierService: ICCommon.Services.IFichierService);
        editerDocument(idDossier: string, idDocument: string, identifiantWs: string, paramsEditiques: ICBusiness.Models.Impression.IParamEditique[], niveauTraitement: number, modeEdition: number, formatEditique: number, codeSignature: number, forceControleGestion: boolean, forceControleEdition?: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        editerOffrePret(idDossier: string, idDocument: string, identifiantWs: string, paramsEditiques: ICBusiness.Models.Impression.IParamEditique[], niveauTraitement: number, modeEdition: number, formatEditique: number, codeSignature: number, forceControleGestion: boolean, forceControleEdition?: boolean): ng.IPromise<ICBusiness.Models.Impression.IImpression>;
        editerPiecesEtControle(idDossier: string, typePiece: Enum.EnumTypePiece): ng.IPromise<void>;
        private defineTypeDoc(typePiece);
        /**
         *  Paramètres globaux de l'ActiveX d'impression pour une impression par lot
         */
        private getParametresActiveXGlobaux();
        /**
         * Génération d'un document pour l'impression par lot
         */
        private getDocumentImpressionLot(nomFichier, flux, ordreAffichage, nbExemplaires);
        /**
         * Génération des documents pour l'impression par lot
         */
        private getListeDocsImpression(listeDocs);
        /**
         * Edition des documents
         */
        lancerImpression(listeDocs: ICBusiness.Models.EditionOffre.IInfoDocument[]): MyWay.Services.IPromesse<any>;
        editerDocumentEpargneLogment(idDossier: string, idCredit: string, dureeAnneeCredit: number, taux: number, montant: number, echeance: number, droitsAcquis: Models.Financement.IDroitsAcquis[], droitsAPret: Models.Financement.IDroitsAPret[]): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.InterroBdf {
    interface IInterroBdfService {
        /**
         * Vérifie si les personnes passées en paramètre sont fichées bdf
         * @param param
         */
        verifierFichageBdfMultiple(param: IVerifierFichageBdfMultipleParam, notificationPropagation?: boolean): ng.IPromise<[Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][]>;
        /**
         * Vérifie si la personne physique passée en paramètre est fiché BDF
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param dossierSchema
         * @param personne
         */
        verifierFichageBdfSimple(param: IVerifierFichageBdfSimpleParam): ng.IPromise<Models.InterroBDF.IResultBDF>;
        /**
         * Récupère les informations bdf utiles
         * @param dossierSchema
         * @param personnePhysique
         * @param idEmprunteur
         */
        recupererInfoBdfPersonne(dossierSchema: Models.Dossier.IDossierSchema, personnePhysique: Models.Emprunteur.IPersonnePhysique): ng.IPromise<Models.InterroBDF.IInterroBDFModele>;
        /**
         * Met à jour l'interdit bancaire avec MajElement
         * @param interroBdfModel
         * @param identifiantDossier
         */
        majInterditBancaire(interroBdfModel: Models.InterroBDF.IInterroBDFModele, identifiantDossier: string): ng.IPromise<void>;
        /**
         * Deduire le code l'inscription Bdf
         * @param reponse
         * @param statut
         */
        deduireInscription(reponse: string, statut: string): string;
        /**
         * Envoyer les évènements à Néo
         */
        envoyerEvenements(listeEvenements: IEvenement[]): ng.IPromise<void>;
    }
    interface IVerifierFichageBdfMultipleParam {
        dateDeTraitement: string;
        codeEtablissement: string;
        idDossier: string;
        idEmprunteur: string;
        idProjet: string;
        personnes: Models.Emprunteur.IPersonnePhysique[];
        uniquementFICP: boolean;
        historiser: boolean;
        modeAveugle: boolean;
    }
    interface IVerifierFichageBdfRecursifParam {
        result: [Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][];
        personnes: Models.Emprunteur.IPersonnePhysique[];
        indexTabPersonnes: number;
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        uniquementFICP: boolean;
        notarisationActive: boolean;
        historisationBDFActive: boolean;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
        historiser: boolean;
        modeAveugle: boolean;
    }
    interface IVerifierFichageBdfSimpleParam {
        dateDeTraitement: string;
        codeEtablissement: string;
        dossierSchema: Models.Dossier.IDossierSchema;
        personne: Models.Emprunteur.IPersonnePhysique;
        idEmprunteur: string;
    }
    interface IDonneesLectureUtileFichageSimple {
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
    }
    interface IDonneesLectureUtileFichageMultiple extends IDonneesLectureUtileFichageSimple {
        listeInterditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture[];
    }
    interface IDonneesLectureUtileRecupInfoBDF {
        dossierLecture: ICRest.Modeles.LireElement.IDossierLecture;
        projetLecture: ICRest.Modeles.LireElement.IProjetLecture;
        interditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture;
        listeOppositionLecture: ICRest.Modeles.LireElement.IOppositionLecture[];
        personneLecture: ICRest.Modeles.LireElement.IPersonneLecture;
        emprunteurLecture: ICRest.Modeles.LireElement.IEmprunteurLecture;
    }
    interface IEvenement {
        idDossier: string;
        codeTypeEvenement: string;
        libelleFacultatif: string;
    }
    class InterroBdfService implements IInterroBdfService {
        private parametrageApplicatifService;
        private risqueClientInterroBDFService;
        private elementService;
        private mwNotificationService;
        private $q;
        private creditParametreRestService;
        private dossierService;
        private managePromiseService;
        static $inject: string[];
        constructor(parametrageApplicatifService: Services.ParametrageApplicatif.IParametrageAppicatifService, risqueClientInterroBDFService: myway.comRisquesClient.InterroBDFService, elementService: ICRest.Services.Element.IElementService, mwNotificationService: MyWay.UI.IMwNotificationService, $q: ng.IQService, creditParametreRestService: ICRest.CreditParametre.Services.ICreditParametreService, dossierService: ICRest.Services.Dossier.IDossierService, managePromiseService: ICCommon.Services.ManagePromiseService);
        recupererInfoBdfPersonne(dossierSchema: Models.Dossier.IDossierSchema, personnePhysique: Models.Emprunteur.IPersonnePhysique): ng.IPromise<Models.InterroBDF.IInterroBDFModele>;
        /**
         * Crée la clé bdf de la personne : format 5 1ères lettre du nom de jeune fille plus date de naissance "DDMMAA"
         * @param personnePhysique
         */
        private creerCleBdf(personnePhysique);
        verifierFichageBdfMultiple(param: IVerifierFichageBdfMultipleParam, notificationPropagation?: boolean): ng.IPromise<[ICBusiness.Models.Emprunteur.IPersonnePhysique, Models.InterroBDF.IResultBDF][]>;
        /**
         * Vérifie si les personnes physique passées en paramètre sont fichées BDF de manière récursive
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param dossierSchema
         * @param personne
         */
        private verifierFichageBdfRecursif(param);
        private createHistorique(idDossier, resultBdf, personnePhy, personneBdf);
        /**
         * Vérification si l'établissement peut historiser et récupération des évènements à historiser
         * @param peutHistoriser
         * @param idDossier
         * @param resultBdf
         * @param personnePhy
         * @param personneBdf
         * @param checkFICP
         * @param checkFCC
         */
        private createHistoriqueCredit(peutHistoriser, idDossier, resultBdf, personnePhy, personneBdf, checkFICP, checkFCC);
        /**
         * Récupération des évènement FICP à stocker
         * @param idDossier
         * @param resultBdf
         * @param personnePhy
         * @param personneBdf
         */
        private getHistoriqueCreditFICP(idDossier, resultBdf, personnePhy, personneBdf);
        /**
         * Récupération des évènements FCC à stocker
         * @param idDossier
         * @param resultBdf
         * @param personnePhy
         * @param personneBdf
         */
        private getHistoriqueCreditFCC(idDossier, resultBdf, personnePhy, personneBdf);
        private setEvenementDataForHistoriqueCredit(idDossier, typeEvent, libelle);
        envoyerEvenements(listeEvenements: IEvenement[]): ng.IPromise<void>;
        private getLibelleEvtPersonne(personneBdf, personnePhy);
        verifierFichageBdfSimple(param: IVerifierFichageBdfSimpleParam): ng.IPromise<Models.InterroBDF.IResultBDF>;
        /**
         * Construit les critères d'interrogation bdf. Si appel bdf notarisé actif, on ajoute le motifConsultation, le typeCredit et l'idDossier aux critères d'appel
         * @param notarisationActive
         * @param personne
         * @param donnees
         */
        private constructCriteres(notarisationActive, personne, dossierLecture, projetLecture);
        /**
         * Si tous les status sont OK, on affiche une notification indiquant que l'interro bdf est conforme
         * @param tuples
         */
        private notifyIfStatusOk(tuples);
        majInterditBancaire(interroBdfModel: Models.InterroBDF.IInterroBDFModele, identifiantDossier: string): ng.IPromise<void>;
        /**
         * Met à jour les interdits bancaires de plusieurs personnes physiques faisant parties du tuple en paramètre
         * @param data
         * @param idDossier
         * @param listeInterditBancaires
         * @param listeTuple
         */
        private majInterditBancaireMultiple(data, idDossier, listeTuple);
        /**
         * Retourne les données utiles pour récupérer les informations bdf
         * @param dossierSchema
         * @param personnePhysique
         * @param idEmprunteur
         */
        private getDonneesUtilesRecupInfoBDF(dossierSchema, personnePhysique);
        /**
         * Retourne les données utiles pour un fichage simple
         * @param identifiantDossier
         * @param idProjet
         */
        private getDonneesUtilesFichageSimple(identifiantDossier, idProjet, idEmprunteur);
        /**
         * Retourne les données utiles pour un fichage multiple
         * @param identifiantDossier
         * @param idProjet
         */
        private getDonneesUtilesFichageMultiple(idDossier, idEmprunteur, idProjet, listeIdInterditBancaires);
        /**
         * Créé InterroBDFDecouvertCredit pour interroger la brique risque client en notarisé
         * @param personne
         * @param motifConsultation
         * @param typeCredit
         * @param idDossier
         */
        private createInterroBdfDecouvertCreditNotarise(personne, motifConsultation, typeCredit, idDossier);
        /**
         * Créé InterroBDFDecouvertCredit pour interroger la brique risque client
         * @param personne
         */
        private createInterroBdfDecouvertCredit(personne);
        deduireInscription(reponse: string, statut: string): string;
    }
}

declare namespace ICBusiness.Services.Pieco {
    interface IPiecoService {
        /**
         * enregistre les données pièces et contrôles
         * @param idDossier
         * @param piecoData
         */
        savePiecoData(idDossier: string, piecoData: Models.IPiecoData, piecoDataInitiale: Models.IPiecoData): ng.IPromise<void>;
        /**
         * récupère les données pièces et controles
         * @param idDossier
         * @param idPlanFinancement
         * @param estConsulterDNCSeulement
         */
        calculerPiecesEtControles(idDossier: string, idPlanFinancement: number, estConsulterDNCSeulement: boolean): ng.IPromise<Models.IPiecoData>;
        /**
         * retourne une liste de pieces par type avec le statut d'acquisition mis à jour
         * @param liste
         * @param dataPieco
         * @param typePiece
         */
        updatePiecesAcquisition(liste: Models.IPiecoModele[], dataPieco: Models.IPiecoData, typePiece: Enum.EnumTypePiece): Models.IPiecoModele[];
    }
    class PiecoService implements IPiecoService {
        private elementRestService;
        private piecoRestService;
        static $inject: string[];
        constructor(elementRestService: ICRest.Services.Element.IElementService, piecoRestService: ICRest.Services.PiecesEtControles.IPiecesEtControlesService);
        savePiecoData(idDossier: string, piecoData: Models.IPiecoData, piecoDataInitiale: Models.IPiecoData): ng.IPromise<void>;
        calculerPiecesEtControles(idDossier: string, idPlanFinancement: number, estConsulterDNCSeulement: boolean): ng.IPromise<Models.IPiecoData>;
        updatePiecesAcquisition(liste: Models.IPiecoModele[], dataPieco: Models.IPiecoData, typePiece: Enum.EnumTypePiece): Models.IPiecoModele[];
        private getListePieceFromPiecoData(typePiece, dataPieco);
    }
}

declare namespace ICBusiness.Services.Modalites {
    import ModalitesModel = Models.Modalites;
    interface IModalitesService {
        /**
         * Permet d'ajouter un payeur principal au dossier (en l'ajoutant à chacun des crédits) dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listeCredits
         * @param identifiantPersonne
         * @param payeur
         * @param payeurSecondaire le payeur de secours si on est en copro (sinon on ne passe rien)
         */
        ajouterPayeurPrincipal(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier, payeurSecondaire?: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        /**
         * Permet d'ajouter une personne au dossier en tant que payeur
         * @param idDossier
         * @param personne
         */
        ajouterPersonnePayeur(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IPersonne>;
        /**
         * Permet de récupérer le crédit dans l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param identifiantPlanFinancement
         * @param identifiantCredit
         */
        getCredit(identifiantDossier: string, identifiantPlanFinancement: string, identifiantCredit: string): ng.IPromise<ModalitesModel.ICredit>;
        /**
         * Permet de récupérer la modalité de remboursement anticipé du produit financier lié au crédit passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param identifiantCredit
         * @param typeLoi
         */
        getModaliteRemboursementAnticipe(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantCredit: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        /**
         * Permet de récupérer l'ensemble des modalités du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         */
        getModalites(identifiantDossier: string): ng.IPromise<ModalitesModel.IModalites>;
        /**
         * Permet de récupérer la liste des modalités de calcul d'impayé du dossier
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param identifiantDossier
         * @param identifiantEmprunteur
         * @param identifiantModaliteImpaye
         * @param typeLoi
         */
        getModalitesCalculImpaye(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantEmprunteur: string, identifiantCredit: string, identifiantModaliteImpaye: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Permet de mettre à jour les modalités du crédit passé en paramètre
         * @param identifiantDossier
         * @param credit
         */
        mettreAJourCreditModalites(identifiantDossier: string, credit: ModalitesModel.ICredit, fullObject: boolean): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le jour d'échéance de la liste des crédits passés en paramètre
         * @param identifiantDossier
         * @param listeCredits
         * @param jourEcheance
         */
        mettreAJourJourEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], jourEcheance: number): ng.IPromise<void>;
        mettreAJourAvisEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], avisEcheance: boolean): ng.IPromise<void>;
        /**
         * Permet de mettre à jour un justificatif du crédit passé en paramètre
         * @param identifiantDossier
         * @param credit
         */
        mettreAJourJustificatif(identifiantDossier: string, credit: ModalitesModel.ICredit): ng.IPromise<void>;
        /**
         * Permet de mettre à jour les modalités du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param ouvertureCompteSupport
         */
        mettreAJourModalites(identifiantDossier: string, modalites: ModalitesModel.IModalites): ng.IPromise<void>;
        mettreAJourModalitesAEffectuer(modalitesInitiale: ModalitesModel.IModalites, modalites: ModalitesModel.IModalites): boolean;
        /**
         * Permet de mettre à jour le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param payeurPrincipal
         * @param listePayeursPrincipaux
         */
        mettreAJourPayeurPrincipal(identifiantDossier: string, payeurPrincipal: ModalitesModel.IFluxFinancier, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], payeurSecondaire?: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        /**
         * Permet de mettre à jour le payeur en cas d'impayé du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param dateInstruction
         * @param codeEtablissement
         * @param payeurImpaye
         * @param codeDeviseDossier
         */
        mettreAJourPayeurImpaye(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, payeurImpaye: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): ng.IPromise<Models.Common.IAnomalieLecture>;
        /**
         * Permet de remettre à vide le payeur en cas d'impayé du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param dateInstruction
         * @param codeEtablissement
         * @param estImpayeDeviseDossier
         */
        initialiserPayeurImpaye(identifiantDossier: string, estImpayeDeviseDossier: boolean): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le traitement des intérêts intercalaires du crédit dont l'identifiant est passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param identifiantDossier
         * @param credit
         */
        mettreAJourTraitementInteretsIntercalaires(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, credit: ModalitesModel.ICredit): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le versement de fonds du dossier dont l'identifiant est passé en paramètre
         * @param dossier
         * @param listeCredits
         * @param versement
         */
        mettreAJourVersement(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, listeIdsCredits: string[], versement: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): ng.IPromise<Models.Common.IAnomalieLecture>;
        /**
         * Permet de réinitialiser à vide le versement de fonds du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param dateInstruction
         * @param codeEtablissement
         * @param listeIdsCredits
         * @param estVersementDeviseDossier
         */
        initialiserVersement(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, listeIdsCredits: string[], estVersementDeviseDossier: boolean): ng.IPromise<void>;
        /**
         * Permet de remplacer le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listePayeursPrincipaux
         * @param listeCredits
         * @param identifiantPersonne
         * @param payeur
         */
        remplacerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier, payeurSecondaire?: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        /**
         * Permet de supprimer le payeur principal du dossier dont l'identifiant est passé en paramètre
         * @param identifiantDossier
         * @param listePayeursPrincipaux
         */
        supprimerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le dossier avec le nouveau montant convenu
         * @param identifiantDossier
         * @param montantConvenu
         */
        mettreAJourMontantConvenu(identifiantDossier: string, montantConvenu: number): ng.IPromise<void>;
        /**
         * Permet d'ajouter un mandat
         * @param identifiantDossier
         * @param identifiantPayeur
         * @param bicIban
         * @param modeReglement
         */
        ajouterMandat(identifiantDossier: string, identifiantPayeur: string, bicIban: string, modeReglement: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
    }
    class ModalitesService implements IModalitesService {
        private $q;
        private creditParametreServiceRest;
        private creditService;
        private clientService;
        private elementService;
        private payeurService;
        private catalogueService;
        private schemaService;
        private mandatService;
        static $inject: string[];
        constructor($q: ng.IQService, creditParametreServiceRest: ICRest.CreditParametre.Services.ICreditParametreService, creditService: Financement.ICreditService, clientService: ICRest.Services.Dossier.IClientService, elementService: ICRest.Services.Element.IElementService, payeurService: ICRest.Services.Dossier.IPayeurService, catalogueService: Catalogue.ICatalogueService, schemaService: Common.IElementSchemaService, mandatService: ICRest.Services.Dossier.IMandatService);
        ajouterPersonnePayeur(idDossier: string, personne: Models.Emprunteur.IPersonne): ng.IPromise<Models.Emprunteur.IPersonne>;
        private verifierPayeursPrincipalEtSecondaire(identifiantDossier, payeur, payeurSecondaire);
        private ajouterPayeurPrincipalSansVerification(identifiantDossier, listeCredits, identifiantPersonne, payeur, payeurSecondaire?);
        ajouterPayeurPrincipal(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier, payeurSecondaire?: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        private filtrerCreditsParDevise(listeCredits, codeDevise);
        getCredit(identifiantDossier: string, identifiantPlanFinancement: string, identifiantCredit: string): ng.IPromise<ModalitesModel.ICredit>;
        getModaliteRemboursementAnticipe(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantCredit: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<number>[]>;
        getModalites(identifiantDossier: string): ng.IPromise<ModalitesModel.IModalites>;
        getModalitesCalculImpaye(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, identifiantEmprunteur: string, identifiantCredit: string, identifiantModaliteImpaye: string, typeLoi: number): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        mettreAJourCreditModalites(identifiantDossier: string, credit: ModalitesModel.ICredit, fullObject: boolean): ng.IPromise<void>;
        mettreAJourJourEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], jourEcheance: number): ng.IPromise<void>;
        mettreAJourAvisEcheance(identifiantDossier: string, listeCredits: ModalitesModel.ICredit[], avisEcheance: boolean): ng.IPromise<void>;
        mettreAJourJustificatif(identifiantDossier: string, credit: ModalitesModel.ICredit): ng.IPromise<void>;
        mettreAJourModalitesAEffectuer(modalitesInitiale: ModalitesModel.IModalites, modalites: ModalitesModel.IModalites): boolean;
        mettreAJourModalites(identifiantDossier: string, modalites: ModalitesModel.IModalites): ng.IPromise<void>;
        mettreAJourPayeurPrincipal(identifiantDossier: string, payeurPrincipal: ModalitesModel.IFluxFinancier, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], payeurSecondaire?: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        mettreAJourPayeurImpaye(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, payeurImpaye: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): ng.IPromise<Models.Common.IAnomalieLecture>;
        initialiserPayeurImpaye(identifiantDossier: string, estImpayeDeviseDossier: boolean): ng.IPromise<void>;
        mettreAJourTraitementInteretsIntercalaires(dateDeTraitement: string, codeEtablissement: number, identifiantDossier: string, credit: ModalitesModel.ICredit): ng.IPromise<void>;
        mettreAJourVersement(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, listeIdsCredits: string[], versement: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): ng.IPromise<Models.Common.IAnomalieLecture>;
        initialiserVersement(identifiantDossier: string, dateInstruction: string, codeEtablissement: number, listeIdsCredits: string[], estVersementDeviseDossier: boolean): ng.IPromise<void>;
        remplacerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[], listeCredits: ModalitesModel.ICredit[], identifiantPersonne: string, payeur: ModalitesModel.IFluxFinancier, payeurSecondaire: ModalitesModel.IFluxFinancier): ng.IPromise<Models.Common.IAnomalieLecture>;
        supprimerPayeurPrincipal(identifiantDossier: string, listePayeursPrincipaux: ModalitesModel.IFluxFinancier[]): ng.IPromise<void>;
        mettreAJourMontantConvenu(identifiantDossier: string, montantConvenu: number): ng.IPromise<void>;
        ajouterMandat(identifiantDossier: string, identifiantPayeur: string, bicIban: string, modeReglement: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        private ajouterPayeur(identifiantDossier, identifiantCredit, identifiantPersonne, payeur, payeurSecondaire?);
        private filtrerModalitesCalculImpaye(credit, modaliteImpaye);
        private verifierPayeur(identifiantDossier, fluxFinancier, typeFluxFinancier);
    }
}

declare namespace ICBusiness.Services.MultiRisqueHabitation {
    interface IMultiRisqueHabitationService {
        lireDate(idDossier: string): ng.IPromise<string>;
        getContextMRH(idDossier: string): ng.IPromise<ICBusiness.Models.Navigation.LisaContract.MRH.IMrhContext>;
    }
    class MultiRisqueHabitationService implements IMultiRisqueHabitationService {
        private elementService;
        private dossierMRHService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService, dossierMRHService: ICRest.Services.Dossier.IDossierMRHService);
        /**
         * Méthode pour récupérer la liste de l'historique des événements
         * @param idDossier
         */
        lireDate(idDossier: string): ng.IPromise<string>;
        getContextMRH(idDossier: string): ng.IPromise<ICBusiness.Models.Navigation.LisaContract.MRH.IMrhContext>;
    }
}

/**  Interface pour les services du paramétrage applicatif */
declare namespace ICBusiness.Services.ParametrageApplicatif {
    interface IParametrageAppicatifService {
        /**
         * Renvoie le paramètre applicatif correspondant au code passé en paramètre
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param codeParametreApplicatif
         */
        /**
         * Vérifie l'activation de la BT95 CIFCID pour activer ou non le nouveau code de calcul de la date de fin de validité de la remise de l'offre
         * @param dateTraitement
         * @param codeEtablissement
         */
        checkActivationEnvoiDateValiditeRemise(dateTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifie l'activation de l'assurance ADE
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        checkAdeActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifie le mode d'envoi à la CEGC
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        checkCegcSendingMode(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifie l'activation de la fiche suiveuse
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        checkFicheSuiveuseActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifie l'activation de la notarisation FICP dans la BT95
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        checkNotarisationFicpActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si Pieco est activé
         * @param codeEtablissement
         * @param date
         */
        activationPieco(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie que l'accès à l'application myway credit pro/BDR est activé
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie qu el'accès à l'application myway credit Conso est actif
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie que l'accès à l'application myway credit pvh
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayPVHActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Récupération du nombre de décimals à utiliser pour les taux des phases
         * @param codeEtablissement
         * @param date
         */
        getTauxNombreDecimalsGestionPeriode(codeEtablissement: string, date: string): ng.IPromise<number>;
        /**
         * Récupération de l'activation multiDevise
         * @param codeEtablissement
         * @param date
         */
        instructionMultiDeviseActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Trasferer dans NEO actif (Dossier Pro/BDR)
         * @param codeEtablissement
         * @param date
         */
        transfererDossierNeoProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Trasferer dans NEO actif (Dossier Conso)
         * @param codeEtablissement
         * @param date
         */
        transfererDossierNeoConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Trasferer dans NEO actif (Dossier Immo)
         * @param codeEtablissement
         * @param date
         */
        transfereDossierNeoImmoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement peut historiser les appels BDF
         * @param codeEtablissement
         * @param date
         */
        historisationBDFActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le transfert pour conformité est actif (paramétrage BT95)
         * @param dateTraitement
         * @param codeEtablissement
         */
        transfertConformiteActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Retourne l'état d'activation du paramètre MRH4 (BT95-CIFCAO)
         * @param date
         * @param codeEtablissement
         */
        mrh4Actif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le suivi des éditions Immo est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsImmoActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le suivi des éditions Conso/Pro est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsConsoProActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si la sign@ des annexes PTZ est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement a eco pret complémentaire actif
         * @param codeEtablissement
         * @param date
         */
        ecoPretComplementaireActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement a la nouvelle option Complémentaire à performance globale active (BT95 temporaire)
         * @param codeEtablissement
         * @param date
         */
        ecoPretComplementairePerformanceGlobaleActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le transfert automatique au BO après édition de l'offre est actif
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        transfertBoAutoApresEditionOffreActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Permet de savoir si SMAC est activé
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        smacActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour récupérer l'identificant du produit financier d'un crédit complémentaire atout clic
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        getIdentifiantProduitFinancierAtoutClic(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<string>;
        /**
         * Défini si il est possible de tout cocher sur dans les tableaux PIECO
         * @param dateDeTraitement
         * @param codeEtablissement
         * @param codeProcessusInstruction
         */
        paramPiecoPossibilteToutCocher(dateDeTraitement: string, codeEtablissement: string, codeProcessusInstruction: string): ng.IPromise<boolean>;
        getDelaiAttenteInterrogationCEGC(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<number>;
        getNombreInterrogationCEGC(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<number>;
        transmissionCEGCActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        expertisePVHPrendreEnCompteHabilitationSaisieManuelle(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        CNPActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour récupérer le mode de système de délégation de décision
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        modeSystemeDelegationDecision(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<string>;
        /**
         * Retourne l'état d'activation du paramètre BT95 CIFIAP
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        marqueurAccordPrincipeActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Indique si la tarification dérogatoire est active sur l'établissement (ADE)
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        tarificationDerogatoireActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        newTotemV2Actif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
    }
}

/** Services pour le paramétrage applicatif */
declare namespace ICBusiness.Services.ParametrageApplicatif {
    interface IParametrageAppicatifRemanentService {
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        checkFicheSuiveuseActive(dateDeTraitement: string, codeEtablissement: string): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         */
        transfereNeoProActif(codeEtablissement: string, date: string): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         */
        transfereNeoConsoActif(codeEtablissement: string, date: string): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         */
        transfereNeoImmoActif(codeEtablissement: string, date: string): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         */
        transfertConformiteActif(codeEtablissement: string, date: string): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         * @param onPromiseResolved
         */
        suiviEditionsImmoActif(date: string, codeEtablissement: string, onPromiseResolved: () => void): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         * @param onPromiseResolved
         */
        suiviEditionsConsoProActif(date: string, codeEtablissement: string, onPromiseResolved: () => void): boolean;
        /**
         * Retourne faux en attendant que la promesse lancée retourne le résultat
         * Une fois la promesse terminé, retourne le vrai résultat de paramètrage applicatif
         * @param codeEtablissement
         * @param date
         */
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): boolean;
        /**
         * Méthode pour savoir si le transfert automatique au BO après édition de l'offre est actif
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        transfertBoAutoApresEditionOffreActif(dateDeTraitement: string, codeEtablissement: string): boolean;
    }
    /**
     * Classe utilisant un cache local pour stocker le résultat de promesse et retourner des booleen à la place de Ipromise<boolean>
     * Utile pour "bind" sur la visibilité d'un totem par exemple
     */
    class ParametrageAppicatifRemanentService implements IParametrageAppicatifRemanentService {
        private parametrageApplicatifService;
        static $inject: string[];
        constructor(parametrageApplicatifService: Services.ParametrageApplicatif.IParametrageAppicatifService);
        checkFicheSuiveuseActive(dateDeTraitement: string, codeEtablissement: string): boolean;
        transfereNeoProActif(codeEtablissement: string, date: string): boolean;
        transfereNeoConsoActif(codeEtablissement: string, date: string): boolean;
        transfereNeoImmoActif(codeEtablissement: string, date: string): boolean;
        transfertConformiteActif(codeEtablissement: string, date: string): boolean;
        suiviEditionsImmoActif(date: string, codeEtablissement: string, onPromiseResolved: () => void): boolean;
        suiviEditionsConsoProActif(date: string, codeEtablissement: string, onPromiseResolved: () => void): boolean;
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): boolean;
        transfertBoAutoApresEditionOffreActif(dateDeTraitement: string, codeEtablissement: string): boolean;
        /** propriété pour stocker les différents appels */
        private cache;
        /**
         * Gère les appels et la mise en cache
         * @param key
         * @param action
         * @param defaultValue
         * @param onPromiseCalled callback si l'action a déjà été résolue
         */
        private getParam<T>(key, action, defaultValue, onPromiseCalled?);
    }
}

/** Services pour le paramétrage applicatif */
declare namespace ICBusiness.Services.ParametrageApplicatif {
    class ParametrageAppicatifService implements IParametrageAppicatifService {
        private parametrageApplicatifService;
        private cacheService;
        static $inject: string[];
        constructor(parametrageApplicatifService: ICRest.CreditParametre.Services.ICreditParametreService, cacheService: Services.Common.ICacheService);
        checkAdeActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        checkActivationEnvoiDateValiditeRemise(dateTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        checkCegcSendingMode(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        checkFicheSuiveuseActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        checkNotarisationFicpActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si Pieco est activé
         * @param codeEtablissement
         * @param date
         */
        activationPieco(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie que l'accès à l'application myway credit pro/BDR est activé
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie qu el'accès à l'application myway credit Conso est actif
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifie que l'accès à l'application myway credit pvh
         * @param codeEtablissement
         * @param date
         */
        processusInstructionCreditMyWayPVHActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        instructionMultiDeviseActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * VA Pac  3.5 V08   REALISATION SEQUOIA                    *J075794.PREN.FRS.3274
         * DOCUMENTATION DE LA  RUBRIQUE  CTFIND Code Type Nombre de Décimales
         *
         * A NLG : T S VALEUR     DESCRIPTION COMPLEMENTAIRE
         * . 010 :                Définition
         * . 020 :                ----------
         * . 040 :
         * . 100 :                Cette rubrique permet de paramétrer par
         * . 110 :                établissement le nombre de décimales d'affichage et
         * . 120 :                de saisie du taux ou de la marge.
         * . 190 :
         * . 195 :                Cette donnée de trouve dans la table BT95.
         * . 240 :
         * . 250 :                Valeurs autorisées :
         * . 260 :                --------------------
         * . 270 :     '2T'       2 décimales quelles que soient les natures de
         * . 275 :                financement
         * . 280 :     '3T'       3 décimales quelles que soient les natures de
         * . 285 :                financement
         * . 290 :     '3E'       3 décimales pour les natures de financement suivantes
         * . 295 :                . 04 : Trésorerie économie locale
         * . 300 :                . 05 : Equipement économie locale
         * . 305 :                . 09 : divers clientèle non financière
         * . 320 :                2 décimales pour les autres natures de financement
         * . 330 :
         * . 340 :                La demande initiale concerne l'extension à 3 décimales
         * . 350 :                cependant des valeurs au delà de 3 sont possibles.
         * . 360 :                Une valeur différente de "E" dans la 2ème position
         * . 361 :                du paramètre est traitée comme la valeur "T".
         */
        getTauxNombreDecimalsGestionPeriode(codeEtablissement: string, date: string): ng.IPromise<number>;
        /**
         * Trasferer dans NEO actif (Dossier Pro/BDR)
         * @param codeEtablissement
         * @param date
         */
        transfererDossierNeoProActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Trasferer dans NEO actif (Dossier Conso)
         * @param codeEtablissement
         * @param date
         */
        transfererDossierNeoConsoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Trasferer dans NEO actif (Dossier Immo)
         * @param codeEtablissement
         * @param date
         */
        transfereDossierNeoImmoActif(codeEtablissement: string, date: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement peut historiser les appels BDF
         * @param codeEtablissement
         * @param date
         */
        historisationBDFActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le transfert pour conformité est actif (paramétrage BT95)
         * @param dateTraitement
         * @param codeEtablissement
         */
        transfertConformiteActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Retourne l'état d'activation du paramètre MRH4 (BT95-CIFCAO)
         * @param date
         * @param codeEtablissement
         */
        mrh4Actif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le suivi des éditions Immo est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsImmoActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le suivi des éditions Conso/Pro est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsConsoProActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si la sign@ des annexes PTZ est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        signElecAnnexesPtzActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement a eco pret complémentaire actif
         * @param codeEtablissement
         * @param date
         */
        ecoPretComplementaireActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Vérifier si l'établissement a la nouvelle option Complémentaire à performance globale active (BT95 temporaire)
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        ecoPretComplementairePerformanceGlobaleActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le transfert automatique au BO après édition de l'offre est actif
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        transfertBoAutoApresEditionOffreActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour récupérer l'identificant du produit financier d'un crédit complémentaire atout clic
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        getIdentifiantProduitFinancierAtoutClic(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<string>;
        /**
         * Permet de savoir si SMAC est activé
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        smacActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        paramPiecoPossibilteToutCocher(dateDeTraitement: string, codeEtablissement: string, codeProcessusInstruction: string): ng.IPromise<boolean>;
        getDelaiAttenteInterrogationCEGC(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<number>;
        getNombreInterrogationCEGC(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<number>;
        transmissionCEGCActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        expertisePVHPrendreEnCompteHabilitationSaisieManuelle(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        CNPActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour récupérer le type de système de décision
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code établissement
         */
        modeSystemeDelegationDecision(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<string>;
        marqueurAccordPrincipeActif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        tarificationDerogatoireActive(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        newTotemV2Actif(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Call listerParametrageApplicatif and compare valeurParametre with comparedValue
         * @param codeEtablissement
         * @param date
         * @param codeParam
         * @param comparedValue
         */
        private getBooleanCompareToAnyParamApplicatif(codeEtablissement, date, codeParam, comparedValue);
        private listerParametrageApplicatif(date, codeEtablissement, valeursFiltre);
        /**
         * Retourne la liste des paramètres applicatifs pour un établissement donné et à une date donnée
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        private getListeDeTousLesParametresApplicatifsBT95(dateDeTraitement, codeEtablissement);
    }
}

/** Services pour le paramétrage fonctionnel */
declare namespace ICBusiness.Services.ParametreFonctionnel {
    interface IParametreFonctionnelService {
        /**
         * Permet de récupérer le paramètre fonctionnel indiquant si le calcul d'enveloppe est possible
         * @param idDossier
         */
        getCalculEnveloppeParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        /**
         * Permet de récupérer le paramètre fonctionnel indiquant s'il faut afficher les champs pour l'ADE sur 8 ans
         * @param idDossier
         * @param idAssurance
         */
        getADE8AnsParametreFonctionnel(idDossier: string, idAssurance: string): ng.IPromise<Models.ParametreFonctionnel.IParametresFonctionnelAde>;
        /**
         * Permet de récupérer les paramètres fonctionnels indiquant les modalités d'affichage des boutons ADE pour la page Financement
         * @param idDossier
         * @param idPlan
         */
        getDossierADESurPlanFiParametreFonctionnel(idDossier: string, idPlan: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        /**
         * Permet de récupérer les paramètres fonctionnels indiquant les modalités d'affichage des boutons ADE pour la page Gestion administrative
         * @param idDossier
         * @param idAssu
         */
        getDossierADESurGesAdmParametreFonctionnel(idDossier: string, idAssu: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        getModeInstructionDefi(idDossier: string, idPlan: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        /**
         * Permet de récupérer les paramètres fonctionnels indiquant si la saisie QS est possible et active
         * @param idDossier
         * @param listIdAssurance
         */
        getReponsesAssureurSaisieQSParametresFonctionnels(idDossier: string, listIdAssurance: string[]): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        /**
         * Permet de récupérer le paramètre fonctionnel indiquant si le bloc avis service lutte anti blanchiment est visible et
         * si l'instructeur peut ajouter un nouvel avis
         * @param idDossier
         * @param idProjet
         */
        getAvisSLABParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        /**
         * Permet de récupérer le paramètre fonctionnel indiquant si le question SCI est affiché et actif
         * @param idDossier
         * @param idProjet
         */
        getQuestionnaireSCIParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
    }
    class ParametreFonctionnelService implements IParametreFonctionnelService {
        private schemaService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService);
        getCalculEnveloppeParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        getADE8AnsParametreFonctionnel(idDossier: string, idAssurance: string): ng.IPromise<Models.ParametreFonctionnel.IParametresFonctionnelAde>;
        getDossierADESurPlanFiParametreFonctionnel(idDossier: string, idPlan: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        getDossierADESurGesAdmParametreFonctionnel(idDossier: string, idAssu: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        getModeInstructionDefi(idDossier: string, idPlan: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        getReponsesAssureurSaisieQSParametresFonctionnels(idDossier: string, listIdAssurance: string[]): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel[]>;
        getAvisSLABParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        getQuestionnaireSCIParametreFonctionnel(idDossier: string, idProjet: string): ng.IPromise<Models.ParametreFonctionnel.IParametreFonctionnel>;
        private getParametresFonctionnels(idDossier, entrees);
        private mapParametreFonctionnel(codeParametre, idObjetConcerne, visible?, actif?);
    }
}

declare namespace ICBusiness.Services.Preferences {
    interface IPreferencesService {
        getPreferencesUtilisateur(): ng.IPromise<Models.Preferences.IPreferenceUtilisateur>;
        setPreferencesUtilisateur(preferences: Models.Preferences.IPreferenceUtilisateur): ng.IPromise<void>;
        onPreferenceChanged(event: (preferences: Models.Preferences.IPreferenceUtilisateur) => void): void;
    }
    class PreferencesService implements IPreferencesService {
        private serviceAgent;
        private cacheService;
        private $q;
        private fromCache;
        static $inject: string[];
        constructor(serviceAgent: MyWay.Services.ServiceAgentExtended, cacheService: Services.Common.ICacheService, $q: ng.IQService);
        getPreferencesUtilisateur(): ng.IPromise<Models.Preferences.IPreferenceUtilisateur>;
        setPreferencesUtilisateur(preferences: Models.Preferences.IPreferenceUtilisateur): ng.IPromise<void>;
        private listEventsListener;
        private raiseEvents(pref);
        onPreferenceChanged(event: (pref: Models.Preferences.IPreferenceUtilisateur) => void): void;
    }
}

declare namespace ICBusiness.Services.Pvh {
    interface IExpertiseService {
        demanderExpertise(idDossier: string): ng.IPromise<Models.Pvh.IExpertise>;
        getExpertise(idDossier: string, dateInstruction?: string): ng.IPromise<Models.Pvh.IExpertise>;
        envoyerManuellementExpertise(expertise: Models.Pvh.IExpertise, idDossier: string): ng.IPromise<Models.Pvh.IRetourExpertise>;
        obtenirRetourExpertise(idDossier: string): ng.IPromise<Models.Pvh.IRetourExpertise>;
    }
    class ExpertiseService implements IExpertiseService {
        private schemaService;
        private expertiseService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, expertiseService: ICRest.Services.Expertise.IExpertisePVHService);
        demanderExpertise(idDossier: string): ng.IPromise<Models.Pvh.IExpertise>;
        getExpertise(idDossier: string, dateInstruction?: string): ng.IPromise<Models.Pvh.IExpertise>;
        envoyerManuellementExpertise(expertise: Models.Pvh.IExpertise, idDossier: string): ng.IPromise<Models.Pvh.IRetourExpertise>;
        obtenirRetourExpertise(idDossier: string): ng.IPromise<Models.Pvh.IRetourExpertise>;
    }
}

declare namespace ICBusiness.Services.Pvh {
    interface IGarantiePrincipaleService {
        /**
         * Recupere la liste des ICodeLabel concerant la listBox Type de bien
         * @param dateDeTraitement string
         */
        getListBien(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Recupere la liste des ICodeLabel de la constante choisie
         * @param dateDeTraitement string
         * @param codeConstantes string : code de référence pour obtenir les constantes
         */
        getListConstantes(dateDeTraitement: string, codeConstantes: string): ng.IPromise<Models.Common.ICodeLabel<number | string>[]>;
        /**
         * Recupere la garantie principale du dossier pvh demandé
         * @param identifiantDossier string : identifiant de dossier en instruction
         */
        getGarantiePrincipale(identifiantDossier: string): ng.IPromise<Models.Pvh.IGarantiePrincipale>;
        /**
         * Charge la totalité des données liées à la garantie principale
         * @param identifiantDossier string : identifiant de dossier en instruction
         * @param garantie Models.Pvh.IGarantiePrincipale : garantie à renseigner
         */
        loadGarantieData(identifiantDossier: string, garantie: Models.Pvh.IGarantiePrincipale): ng.IPromise<Models.Pvh.IGarantiePrincipale>;
        /**
         * Sauvegarde la garantie et l'hypotheque
         * @param identifiantDossier string : identifiant de dossier en instruction
         * @param garantie Models.Pvh.IGarantiePrincipale : garantie à sauvegarder
         */
        saveGarantie(identifiantDossier: string, garantie: Models.Pvh.IGarantiePrincipale): ng.IPromise<void>;
    }
    class GarantiePrincipaleService implements IGarantiePrincipaleService {
        private $q;
        private catalogueService;
        private schemaService;
        private creditParametreService;
        private elementService;
        private definirReferenceService;
        static $inject: string[];
        constructor($q: ng.IQService, catalogueService: Services.Catalogue.ICatalogueService, schemaService: Services.Common.IElementSchemaService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, elementService: ICRest.Services.Element.IElementService, definirReferenceService: ICRest.Services.Dossier.IDefinirReferenceService);
        /**
         * Recupere la liste des ICodeLabel concerant la listBox Type de bien
         * @param dateDeTraitement string
         */
        getListBien(dateDeTraitement: string): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Recupere la liste des ICodeLabel de la constante choisie
         * @param dateDeTraitement string
         * @param codeConstantes string : code de référence pour obtenir les constantes
         */
        getListConstantes(dateDeTraitement: string, codeConstantes: string): ng.IPromise<Models.Common.ICodeLabel<number | string>[]>;
        /**
         * Surcharge de la methode toAscii de ICodeLabel pour y inclure les strings de taille > 2
         * @param code ICodeLabel
         * @return Si le code est un string de taille > 2, ne le transforme pas. Exemple : 11 => 11 et non "49" initialement
         */
        private toAsciiCode(code);
        /**
         * Recupere la garantie principale du dossier pvh demandé
         * @param identifiantDossier string : identifiant de dossier en instruction
         */
        getGarantiePrincipale(identifiantDossier: string): ng.IPromise<Models.Pvh.IGarantiePrincipale>;
        /**
         * Charge la totalité des données liées à la garantie principale
         * @param identifiantDossier string : identifiant de dossier en instruction
         * @param garantie Models.Pvh.IGarantiePrincipale : garantie à renseigner
         */
        loadGarantieData(identifiantDossier: string, garantieToComplete: Models.Pvh.IGarantiePrincipale): ng.IPromise<Models.Pvh.IGarantiePrincipale>;
        /**
         * Sauvegarde la garantie et l'hypotheque
         * @param identifiantDossier string : identifiant de dossier en instruction
         * @param garantie Models.Pvh.IGarantiePrincipale : garantie à sauvegarder
         */
        saveGarantie(identifiantDossier: string, garantie: Models.Pvh.IGarantiePrincipale): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Pvh {
    interface IPvhService {
        /**
         * Recupere le tableau des garants d'un projet.
         * @param identifiantDossier L'identifiant du dossier concerne.
         */
        getGarantsProjet(identifiantDossier: string): ng.IPromise<Models.Pvh.IProprietaire[]>;
        /**
         * Supprime un garant du projet et retourne l'objet filtre
         * @param identifiantDossier L'identifiant du dossier concerne.
         * @param identifiantProprietaire L'identifiant du proprietaire concerne.
         */
        deleteGarantProjet(identifiantDossier: string, idPersonne: string): ng.IPromise<void>;
        /**
         * Sauvegarde les proprietaires du dossier concerne
         * @param identifiantDossier L'identifiant du dossier concerne.
         * @param listeProprietaires Liste des proprietaires a mettre a jour
         */
        saveProprietaires(identifiantDossier: string, listeProprietaires: Models.Pvh.IProprietaire[]): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Controle completude pvh
         * @param idDossier L'identifiant du dossier concerne.
         * @param controlerPrescripteur Active ou non le controle du prescripteur
         */
        controlerCompletudePvh(idDossier: string, controlerPrescripteur?: boolean): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Ajoute la garantie pvh et retourne l'id créé
         * @param idDossier L'identifiant du dossier concerne.
         * @param garantie
         * @param forcerAjout
         */
        ajouterGarantiePVH(idDossier: string, idCredit: string, personne: Models.Emprunteur.IPersonne, forcerAjout: boolean): ng.IPromise<string>;
    }
    class PvhService implements IPvhService {
        private $q;
        private garantieRestService;
        private elementService;
        private schemaService;
        private proprietaireService;
        private controleService;
        private garantieService;
        static $inject: string[];
        constructor($q: ng.IQService, garantieRestService: ICRest.Services.Garanties.IGarantieService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, proprietaireService: ICRest.Services.Dossier.IProprietaireService, controleService: ICRest.Services.Controle.IControleService, garantieService: Services.Garanties.IGarantiesService);
        /**
         * Recupere le tableau des garants d'un projet.
         * @param identifiantDossier L'identifiant du dossier concerne.
         */
        getGarantsProjet(identifiantDossier: string): ng.IPromise<Models.Pvh.IProprietaire[]>;
        /**
         * Supprime un proprietaire du dossier et retourne l'objet filtre
         * @param identifiantDossier L'identifiant du dossier concerne
         * @param idPersonne L'identifiant de la personne concerne.
         */
        deleteGarantProjet(identifiantDossier: string, idPersonne: string): ng.IPromise<void>;
        /**
         * Sauvegarde les proprietaires du dossier concerne
         * @param identifiantDossier L'identifiant du dossier concerne.
         * @param listeProprietaires Liste des proprietaires a mettre a jour
         */
        saveProprietaires(identifiantDossier: string, listeProprietaires: Models.Pvh.IProprietaire[]): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Controle completude pvh
         * @param idDossier L'identifiant du dossier concerne.
         * @param controlerPrescripteur Active ou non le controle du prescripteur
         */
        controlerCompletudePvh(idDossier: string, controlerPrescripteur?: boolean): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Ajoute la garantie pvh et retourne l'id créé
         * @param idDossier L'identifiant du dossier concerne.
         * @param garantie
         * @param forcerAjout
         */
        ajouterGarantiePVH(idDossier: string, idCredit: string, personne: Models.Emprunteur.IPersonne, forcerAjout: boolean): ng.IPromise<string>;
        /**
         * Ajoute le nouveau garant a la garantie principale
         * @param idDossier L'identifiant du dossier concerne.
         * @param idPersonneGarant L'identifiant Personne du garant a ajouter
         */
        private ajouterToGarantiePrincipale(idDossier, idPersonneGarant);
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IBienAVendreService {
        definirBienAVendre(idDossier: string, idProjet: string, hasBienAVendre: boolean): ng.IPromise<void>;
        lireBienAVendre(idDossier: string, idBienAVendre: string): ng.IPromise<Models.BienAVendre.IBienAVendre>;
        majBienAVendre(idDossier: string, bav: Models.BienAVendre.IBienAVendre): ng.IPromise<void>;
    }
    class BienAVendreService implements IBienAVendreService {
        private $q;
        private bienAVendreService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, bienAVendreService: ICRest.Services.Dossier.IBienAVendreService, elementService: ICRest.Services.Element.IElementService);
        definirBienAVendre(idDossier: string, idProjet: string, hasBienAVendre: boolean): ng.IPromise<void>;
        lireBienAVendre(idDossier: string, idBienAVendre: string): ng.IPromise<Models.BienAVendre.IBienAVendre>;
        majBienAVendre(idDossier: string, bav: Models.BienAVendre.IBienAVendre): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IButLocatifService {
        /**
         * Permet de récupérer le But Locatif du projet
         * @param idDossier
         * @param listeId liste des ids du projet, doit contenir l'id du but locatif "BULO-"
         * @param listeNature
         */
        getButLocatif(idDossier: string, listeId: string[], listeNature: Models.Common.CodeLabel<string>[]): any;
        /**
         * Met à jour le But Locatif du projet
         * @param idDossier
         * @param data
         */
        majButLocatif(idDossier: string, data: Models.ButLocatif.IButLocatif): ng.IPromise<void>;
        /**
         * Permet de récupérer la liste des natures d'avantage fiscal selon le cadre fiscal en cours
         * @param dateTraitement
         * @param estCadreFiscalLMP
         */
        getListeNatureAvantageFiscal(dateTraitement: string, estCadreFiscalLMP: boolean): ng.IPromise<Models.Common.CodeLabel<string>[]>;
    }
    class ButLocatifService implements IButLocatifService {
        private $q;
        private creditParametreService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, elementService: ICRest.Services.Element.IElementService);
        getListeNatureAvantageFiscal(dateTraitement: string, estCadreFiscalLMP: boolean): ng.IPromise<Models.Common.CodeLabel<string>[]>;
        majButLocatif(idDossier: string, data: Models.ButLocatif.IButLocatif): ng.IPromise<void>;
        getButLocatif(idDossier: string, listeId: string[], listeNature: Models.Common.CodeLabel<string>[]): ng.IPromise<Models.ButLocatif.IButLocatif>;
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IObjetFinanceService {
        /**
         * Récupération des éléments détaillant l'objet financé
         * @param identifiantDossier
         * @param projetId
         * @param emprunteurId
         * @param listIdws
         */
        getDetailObjetFinance(identifiantDossier: string, projetId: string, emprunteurId: string, listIdws: string[]): ng.IPromise<Models.ObjetFinance.IDetailObjetFinance>;
        /**
         * Récupère la liste type objet commercialisation pour les bien sous-jacents
         * @param idDossier
         * @param dateInstruction
         * @param typeObjetFinancier
         * @param famille
         */
        getlistTypeObjetCommercialisationBienSousJacent(idDossier: string, dateInstruction: string, typeObjetFinancier: string, famille?: ICBusiness.Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        /**
         * Mise à jour des éléments du détail de l'objet financé
         * @param identifiantDossier
         * @param dossier
         * @param detailInitial
         * @param projet
         * @param batimentHabitableFinance
         * @param constructionFinancee
         * @param travauxFinances
         * @param terrainFinance
         * @param soulteFinance
         * @param bienSousJacent
         */
        majDetailObjetFinance(identifiantDossier: string, dossier: Models.Dossier.IDossierElement, detailInitial: Models.ObjetFinance.IDetailObjetFinance, projet: Models.ObjetFinance.IProjetImmobilier, batimentHabitableFinance: Models.ObjetFinance.IBatimentHabitableFinance, constructionFinancee: Models.ObjetFinance.IConstructionFinancee, travauxFinances: Models.ObjetFinance.ITravauxFinances, terrainFinance: Models.ObjetFinance.ITerrainFinance, soulteFinance: Models.ObjetFinance.ISoulteFinance, bienSousJacent: Models.ObjetFinance.IBienSousJacent): ng.IPromise<void>;
    }
    class ObjetFinanceService {
        private $q;
        private elementService;
        private catalogueService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, catalogueService: ICBusiness.Services.Catalogue.ICatalogueService);
        getDetailObjetFinance(identifiantDossier: string, projetId: string, emprunteurId: string, listIdws: string[]): ng.IPromise<Models.ObjetFinance.IDetailObjetFinance>;
        getlistTypeObjetCommercialisationBienSousJacent(idDossier: string, dateInstruction: string, typeObjetFinancier: string, famille?: ICBusiness.Enum.NatureProjetEnum): ng.IPromise<Models.Common.ICodeLabel<string>[]>;
        majDetailObjetFinance(identifiantDossier: string, dossier: Models.Dossier.IDossierElement, detailInitial: Models.ObjetFinance.IDetailObjetFinance, projet: Models.ObjetFinance.IProjetImmobilier, batimentHabitableFinance: Models.ObjetFinance.IBatimentHabitableFinance, constructionFinancee: Models.ObjetFinance.IConstructionFinancee, travauxFinances: Models.ObjetFinance.ITravauxFinances, terrainFinance: Models.ObjetFinance.ITerrainFinance, soulteFinance: Models.ObjetFinance.ISoulteFinance, bienSousJacent: Models.ObjetFinance.IBienSousJacent): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IParametrageChampsProjetImmoService {
        getParametrage(toc: string, tor: string): Models.ProjetImmo.IChampsAssociation;
    }
    class ParametrageChampsProjetImmoService {
        getParametrage(toc: string, tor: string): Models.ProjetImmo.IChampsAssociation;
        private getCas(toc, tor);
        private getEligibilite(toc, tor);
        private getCasInfosCompl(toc, tor);
        private getCasProjet(toc, tor);
        private isInToc(toc, tocSeek);
        private isInTocTors(toc, tor, tocSeek, torsSeek);
        private isInTocAndNotInTors(toc, tor, tocSeek, torsSeek);
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IPrescripteurService {
        /** Récupère le contexte nécessaire à la navigation vers SDPI */
        getContextSdpi(contexte: Models.Common.IContext): ng.IPromise<Models.Projet.IPrescripteurContexteIn>;
        /** Effectue la mise à jour des données prescripteur d'un dossier */
        majPrescripteur(identifiantDossier: string, prescripteurMaj: Models.Projet.IPrescripteurContexteOut): ng.IPromise<void>;
    }
    class PrescripteurService implements IPrescripteurService {
        private $q;
        private elementService;
        private habilitationService;
        private emprunteurService;
        private schemaService;
        private dossierService;
        static $inject: Array<string>;
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, habilitationService: Services.Habilitation.IHabilitationService, emprunteurService: Services.Emprunteur.IEmprunteurService, schemaService: Services.Common.IElementSchemaService, dossierService: ICRest.Services.Dossier.IDossierService);
        /** Récupère le contexte nécessaire à la navigation vers SDPI */
        getContextSdpi(contexte: Models.Common.IContext): ng.IPromise<Models.Projet.IPrescripteurContexteIn>;
        private getEmprunteurComplet(idDossier);
        /** Effectue la mise à jour des données prescripteur d'un dossier */
        majPrescripteur(identifiantDossier: string, contextePrescripteurOut: Models.Projet.IPrescripteurContexteOut): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IProjetImmoService {
        /**
         * Recupere les donnees d'un projet immobilier.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getProjetImmobilier(idDossier: string): ng.IPromise<Models.ProjetImmo.IProjetImmo>;
        updateProjetImmo(idDossier: string, initialProjet: Models.ProjetImmo.IProjetImmo, projet: Models.ProjetImmo.IProjetImmo, updateProjet: boolean, updateInfosSCI: boolean): ng.IPromise<void>;
        calculCoutTotalObjet(projetImmo: Models.ProjetImmo.IProjetImmo): number;
        estimerFraisNotaire(idDossier: string): ng.IPromise<Models.ProjetImmo.IResultCalculFraisNotaire>;
        getDetailEcoPtz(identifiantDossier: string, travauxFinancesIdws: string, listeDetailCoutObjetIdws: string[], ecoPretComplementaireActif: boolean): ng.IPromise<any>;
        getTravauxEcoPtzFields(dateInstruction: string, typeTravauxFinances: string, listeDetailCoutObjet: Models.DetailEcoPtz.IDetailCoutObjet[]): ng.IPromise<Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]>;
        /**
         * Récupère le code spécifique à la liste des constantes (ex:
         * 1 | 2 | 3 => ECOBOUQUET
         * A => ECOSYSASSE
         * P => ECOPERFENE
         * " " => Aucun
         * @param code
         */
        getNatureTravauxLabelCode(code: number): string;
        /**
         * Vérifie si le code sélectionné est EcoBouquet
         * @param code
         */
        isTravauxEcoBouquet(code: number): boolean;
        /**
         * Vérifier si le champs Cout complémentaire peut être activé si certains champs de la liste n'ont pas de valeur
         * @param travauxFinances
         * @param champs
         */
        checkFieldComplementaireDisabled(travauxFinances: Models.DetailEcoPtz.ITravauxFinancesLecture, champs: Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]): boolean;
        updateTravauxEcoPtz(idDossier: string, initialDatas: Models.DetailEcoPtz.IDetailsEcoPtz, travauxFinances: Models.DetailEcoPtz.ITravauxFinancesLecture, champsTravaux: Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]): ng.IPromise<void>;
        /**
         * Mise a jour de codeConditionDerogationPourPtz et defnSiEmpruntEstPrm pour un projet immobilier via la page emprunteur
         * @param identifiantDossier
         * @param idProjet
         * @param emprunteur
         */
        mettreAJourProjetImmobilierCodeConditionPtz(identifiantDossier: string, idProjet: string, emprunteur: Models.Emprunteur.IEmprunteur): ng.IPromise<void>;
    }
    class ProjetImmoService implements IProjetImmoService {
        private schemaService;
        private elementService;
        private projetImmoService;
        private dossierService;
        private creditParametreService;
        private $q;
        private parametrageChampsProjetImmoService;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, projetImmoService: ICRest.Services.ProjetImmo.IProjetImmoService, dossierService: ICRest.Services.Dossier.IDossierService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, $q: ng.IQService, parametrageChampsProjetImmoService: Services.Projet.IParametrageChampsProjetImmoService);
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getProjetImmobilier(idDossier: string): ng.IPromise<Models.ProjetImmo.IProjetImmo>;
        updateProjetImmo(idDossier: string, initialProjet: Models.ProjetImmo.IProjetImmo, projet: Models.ProjetImmo.IProjetImmo, updateProjet: boolean, updateInfosSCI: boolean): ng.IPromise<void>;
        calculCoutTotalObjet(projetImmo: Models.ProjetImmo.IProjetImmo): number;
        estimerFraisNotaire(idDossier: string): ng.IPromise<Models.ProjetImmo.IResultCalculFraisNotaire>;
        getDetailEcoPtz(identifiantDossier: string, travauxFinancesIdws: string, listeDetailCoutObjetIdws: string[], ecoPretComplementaireActif: boolean): ng.IPromise<Models.DetailEcoPtz.IDetailsEcoPtz>;
        /**
         * Récupère le code spécifique à la liste des constantes (ex: 1 | 2 | 3 === ECOBOUQUET)
         * @param code
         */
        getNatureTravauxLabelCode(code: number): string;
        /**
         * Vérifie si le code sélectionné est EcoBouquet
         * @param code
         */
        isTravauxEcoBouquet(code: number): boolean;
        getTravauxEcoPtzFields(dateInstruction: string, typeTravauxFinances: string, listeDetailCoutObjet: Models.DetailEcoPtz.IDetailCoutObjet[]): ng.IPromise<Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]>;
        checkFieldComplementaireDisabled(travauxFinances: Models.DetailEcoPtz.ITravauxFinancesLecture, champs: Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]): boolean;
        updateTravauxEcoPtz(idDossier: string, initialDatas: Models.DetailEcoPtz.IDetailsEcoPtz, travauxFinances: Models.DetailEcoPtz.ITravauxFinancesLecture, champsTravaux: Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]): ng.IPromise<void>;
        mettreAJourProjetImmobilierCodeConditionPtz(identifiantDossier: string, idProjet: string, emprunteur: Models.Emprunteur.IEmprunteur): ng.IPromise<void>;
        private getProjetImmobiliersByProjects(identifiantDossier, idsProjet);
    }
}

declare namespace ICBusiness.Services.Projet {
    interface IProjetService {
        /**
         * Definit un nouveau projet
         * @param idDossier Identifiant du dossier
         * @param typeObjetCommercial Code TOC
         * @param typeObjetReglemente Code TOR
         * @param natureProjet ENUM type de projet
         */
        definirProjet(idDossier: string, typeObjetCommercial: string, typeObjetReglemente: string, natureProjet?: Enum.NatureProjetEnum, natureFinancement?: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getDescriptionProjet(idDossier: string, isHabitatPro: boolean): ng.IPromise<Models.Projet.IProjet>;
        /**
         * Met à jour les données d'un projet
         * @param idDossier
         * @param data
         * @param updateProjet
         * @param updateBienFinance
         * @param isPro
         */
        updateProjet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean, isPro: boolean, isHabitatPro: boolean): ng.IPromise<void>;
        updateVentilation(idDossier: string, data: Models.Projet.IVentilation): ng.IPromise<void>;
    }
    class ProjetService implements IProjetService {
        private schemaService;
        private elementService;
        private projetService;
        private planFinancementService;
        private $q;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, projetService: ICRest.Services.Projet.IProjetService, planFinancementService: Services.Financement.IPlanFinancementService, $q: ng.IQService);
        definirProjet(idDossier: string, typeObjetCommercial: string, typeObjetReglemente: string, natureProjet?: Enum.NatureProjetEnum, natureFinancement?: string): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        private ajouterPlanFinancementSiAucun(idDossier, projet);
        /**
         * Recupere les donnees de description d'un projet.
         * @param idDossier L'identifiant du dossier concerne.
         */
        getDescriptionProjet(idDossier: string, isHabitatPro: boolean): ng.IPromise<Models.Projet.IProjet>;
        updateProjet(idDossier: string, data: Models.Projet.IProjet, updateProjet: boolean, updateBienFinance: boolean, isPro: boolean, isHabitatPro: boolean): ng.IPromise<void>;
        updateVentilation(idDossier: string, data: Models.Projet.IVentilation): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.Reamenagement {
    interface IReamenagementService {
        getReamenagement(idDossier: string): ng.IPromise<Models.Reamenagement.IReamenagement>;
        saveReamenagement(idDossier: string, reamenagementOrigine: Models.Reamenagement.IReamenagement, reamenagementModifie: Models.Reamenagement.IReamenagement): ng.IPromise<void>;
        listerPretsReamenageable(idDossier: string, idwsReamenagement: string, dateRA: string, dateTraitement: string): ng.IPromise<Models.Reamenagement.IListerPretsReamenageableResult>;
        definirReamenagement(idDossier: string, idProjet: string, typeReamenagement: number): ng.IPromise<void>;
        ajouterPretInterne(idDossier: string, dateRA: string, idwsReamenagement: string, listePretReamenage: Models.Reamenagement.IPretReamenageMaj[]): ng.IPromise<void>;
        rafraichirPretInterne(idDossier: string, idwsReamenagement: string, pret: Models.Reamenagement.IPretInterneReamenageDetaille): ng.IPromise<void>;
        getPretInterne(idDossier: string, idPret: string, idComplement: string): ng.IPromise<Models.Reamenagement.IPretInterneReamenageDetaille>;
        getPretExterne(idDossier: string, idPret: string, idComplement: string, estRegroupement: boolean): ng.IPromise<Models.Reamenagement.IPretExterneReamenageDetaille>;
        pretInterneNeedsSaving(pretOrigine: Models.Reamenagement.IPretInterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretInterneReamenageDetaille): boolean;
        savePretInterne(idDossier: string, pretOrigine: Models.Reamenagement.IPretInterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretInterneReamenageDetaille): ng.IPromise<void>;
        savePretExterne(idDossier: string, pretOrigine: Models.Reamenagement.IPretExterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretExterneReamenageDetaille, estRegroupement: boolean, idwsReamenagement: string): ng.IPromise<void>;
        pretExterneNeedsSaving(pretOrigine: Models.Reamenagement.IPretExterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretExterneReamenageDetaille, estRegroupement: boolean): boolean;
        supprimerPret(idDossier: string, idPret: string): ng.IPromise<void>;
    }
    class ReamenagementService implements IReamenagementService {
        private schemaService;
        private elementService;
        private reamenagementService;
        private $q;
        static $inject: string[];
        constructor(schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, reamenagementService: ICRest.Services.Reamenagement.IReamenagementService, $q: ng.IQService);
        ajouterPretInterne(idDossier: string, dateRA: string, idwsReamenagement: string, listePretReamenage: Models.Reamenagement.IPretReamenageMaj[]): ng.IPromise<void>;
        definirReamenagement(idDossier: string, idProjet: string, typeReamenagement: number): ng.IPromise<void>;
        getReamenagement(idDossier: string): ng.IPromise<Models.Reamenagement.IReamenagement>;
        saveReamenagement(idDossier: string, reamenagementOrigine: Models.Reamenagement.IReamenagement, reamenagementModifie: Models.Reamenagement.IReamenagement): ng.IPromise<void>;
        rafraichirPretInterne(idDossier: string, idwsReamenagement: string, pret: Models.Reamenagement.IPretInterneReamenageDetaille): ng.IPromise<void>;
        getPretExterne(idDossier: string, idPret: string, idComplement: string, estRegroupement: boolean): ng.IPromise<Models.Reamenagement.IPretExterneReamenageDetaille>;
        getPretInterne(idDossier: string, idPret: string, idComplement: string): ng.IPromise<Models.Reamenagement.IPretInterneReamenageDetaille>;
        listerPretsReamenageable(idDossier: string, idwsReamenagement: string, dateRA: string, dateTraitement: string): ng.IPromise<Models.Reamenagement.IListerPretsReamenageableResult>;
        pretInterneNeedsSaving(pretOrigine: Models.Reamenagement.IPretInterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretInterneReamenageDetaille): boolean;
        pretExterneNeedsSaving(pretOrigine: Models.Reamenagement.IPretExterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretExterneReamenageDetaille, estRegroupement: boolean): boolean;
        private getPretInterneMaj(pret);
        private getInfoRegroupementInterneMaj(pret);
        savePretInterne(idDossier: string, pretOrigine: Models.Reamenagement.IPretInterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretInterneReamenageDetaille): ng.IPromise<void>;
        private getPretExterneMaj(pret);
        private getInfoRegroupementExterneMaj(pret, estRegrouppement);
        savePretExterne(idDossier: string, pretOrigine: Models.Reamenagement.IPretExterneReamenageDetaille, pretModifie: Models.Reamenagement.IPretExterneReamenageDetaille, estRegroupement: boolean, idwsReamenagement: string): ng.IPromise<void>;
        supprimerPret(idDossier: string, idPret: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.RedacteurActe {
    interface IRedacteurActeService {
        /**
         * Permet de définir le rédacteur d'acte pour le dossier spécifié
         * @param identifiantDossier
         * @param redacteurActe
         */
        definirRedacteurActe(identifiantDossier: string, redacteurActe: Models.RedacteurActe.IRedacteurActe): ng.IPromise<void>;
        /**
         * Permet de définir le rédacteur d'acte pour le dossier spécifié à partir d'une personne
         * @param identifiantDossier
         * @param personne
         */
        definirRedacteurActeFromPersonne(identifiantDossier: string, personne: Models.Emprunteur.IDetailPersonne, estPhysique: boolean): ng.IPromise<void>;
        /**
         * Renvoie les informations du rédacteur d'acte du dossier
         * @param identifiantDossier
         * @param identifiantRedacteurActe
         */
        getRedacteurActe(identifiantDossier: string): ng.IPromise<Models.RedacteurActe.IRedacteurActe>;
        /**
         * Permet de mettre à jour la date prévisionnelle de signature chez le notaire
         * @param identifiantDossier
         * @param dossier
         */
        mettreAJourDatePrevisionnelleSignatureNotaire(idDossier: string, datePrevSigneNotaire: string): ng.IPromise<void>;
        /**
         * Permet de mettre à jour le rédacteur d'acte du dossier
         * @param identifiantDossier
         * @param redacteurActe
         */
        mettreAJourRedacteurActe(identifiantDossier: string, redacteurActe: Models.RedacteurActe.IRedacteurActe): ng.IPromise<void>;
        /**
         * Permet de supprime le rédacteur d'acte du dossier
         * @param identifiantDossier
         * @param identifiantRedacteurActe
         */
        supprimerRedacteurActe(identifiantDossier: string, identifiantRedacteurActe: string): ng.IPromise<void>;
    }
    class RedacteurActeService implements IRedacteurActeService {
        private elementService;
        private redacteurActeService;
        private schemaService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService, redacteurActeService: ICRest.Services.Dossier.IRedacteurActeService, schemaService: Services.Common.IElementSchemaService);
        definirRedacteurActe(identifiantDossier: string, redacteurActe: Models.RedacteurActe.IRedacteurActe): ng.IPromise<void>;
        definirRedacteurActeFromPersonne(identifiantDossier: string, personne: Models.Emprunteur.IDetailPersonne, estPhysique: boolean): ng.IPromise<void>;
        getRedacteurActe(identifiantDossier: string): ng.IPromise<Models.RedacteurActe.IRedacteurActe>;
        mettreAJourDatePrevisionnelleSignatureNotaire(idDossier: string, datePrevSigneNotaire: string): ng.IPromise<void>;
        mettreAJourRedacteurActe(identifiantDossier: string, redacteurActe: Models.RedacteurActe.IRedacteurActe): ng.IPromise<void>;
        supprimerRedacteurActe(identifiantDossier: string, identifiantRedacteurActe: string): ng.IPromise<void>;
    }
}

declare namespace ICBusiness.Services.SignatureOffre {
    import SignatureOffreModels = Models.SignatureOffre;
    interface ISignatureOffreService {
        /**
         * Enregistre la signature des mandats passés en paramètre
         * @param identifiantDossier
         * @param mandats
         */
        enregistrerMandats(identifiantDossier: string, listeMandats: Models.Edition.IMandat[]): ng.IPromise<void>;
        /**
         * Enregistre la signature papier de l'offre/contrat
         * @param identifiantDossier
         * @param numeroOffre
         * @param listeSignatairesPapier
         * @param forcerCtrlUsureLorsSignature
         */
        enregistrerOffreSignaturePapier(identifiantDossier: string, numeroOffre: number, listeSignatairesPapier: SignatureOffreModels.ISignatairePapier[], forcerCtrlUsureLorsSignature?: boolean): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        /**
         * Renvoie la liste des mandats
         * @param identifiantDossier
         */
        getListeMandats(identifiantDossier: string): ng.IPromise<Models.Edition.IMandats[]>;
        /**
         * Renvoie les informations de la signature
         * @param identifiantDossier
         * @param dateDeTraitement
         */
        getSignatureOffre(identifiantDossier: string, dateDeTraitement: string): ng.IPromise<SignatureOffreModels.ISignatureOffre>;
        /**
         * Renvoie la liste des mandats
         * @param identifiantDossier
         */
        getListeValidationMandats(identifiantDossier: string): ng.IPromise<Models.Edition.IMandat[]>;
    }
    class SignatureOffreService implements ISignatureOffreService {
        private $q;
        private creditParametreService;
        private elementService;
        private offreService;
        private elementSchemaService;
        static $inject: string[];
        constructor($q: ng.IQService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, elementService: ICRest.Services.Element.IElementService, offreService: ICRest.Services.Offre.IOffreService, elementSchemaService: Services.Common.ElementSchemaService);
        enregistrerMandats(identifiantDossier: string, listeMandats: Models.Edition.IMandat[]): ng.IPromise<void>;
        enregistrerOffreSignaturePapier(identifiantDossier: string, numeroOffre: number, listeSignatairesPapier: SignatureOffreModels.ISignatairePapier[], forcerCtrlUsureLorsSignature?: boolean): ng.IPromise<Models.Common.IAnomalieLecture[]>;
        getListeMandats(identifiantDossier: string): ng.IPromise<Models.Edition.IMandats[]>;
        /**
         * Méthode pour récupérer la liste des mandats à valider
         * @param identifiantDossier
         */
        getListeValidationMandats(identifiantDossier: string): ng.IPromise<Models.Edition.IMandat[]>;
        private lireListeValidationMandats(contrat);
        private mapValidationMandat(c, p, estPayeursSecours?);
        private mapValidationMandatDebiteur(d, f);
        getSignatureOffre(identifiantDossier: string, dateDeTraitement: string): ng.IPromise<SignatureOffreModels.ISignatureOffre>;
        private enregistrerMandat(identifiantDossier, dateDeSignature, referenceUniqueMandat);
        private enregistrerOffreSignaturePapierBySignataire(identifiantDossier, numeroOffre, signatairePapier, forcerCtrlUsureLorsSignature);
    }
}

declare namespace ICBusiness.Services.SignatureElectronique {
    interface ISignatureElectroniqueService {
        /**
         * Interface pour la méthode de lecture de l'acte de signature électronique
         * @param idDossier identifiant du dossier en instruction
         */
        lireActeSignatureElectronique(idDossier: string): ng.IPromise<ICBusiness.Models.SignatureElectronique.IOffreSignatureElectroniqueLecture>;
        /**
         * Interface pour la validation de la signature électronique
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature cude du type de signature
         */
        validerActeSignatureElectronique(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Interface pour la validation de la signature électronique
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature cude du type de signature
         */
        lancerProcessusSignatureElectronique(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Interface pour la lecture d'un document
         *
         * @param identifiantIdn identifiant IDN du document
         */
        lireDocActSigElecGen(identifiantIdn: string): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatLectureDocumentActeSignature>;
        /**
         * Interface pour la méthode pour alimenter le dossier IDN
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         * @param documents liste des documents à mettre à jour
         */
        alimDossSignElecGene(idDossier: string, codeSignature: number, documents: ICBusiness.Models.SignatureElectronique.IDocumentSignatureElectroniqueMaj[]): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Interface pour l'annulation du dossier de signature électronique
         *
         * @param idDossier
         * @param motifAnnulation
         */
        annulerActSigneElecGen(idDossier: string, codeSignature: number, motifAnnulation: string): ng.IPromise<ICBusiness.Models.SignatureElectroniqueGene.IResultatOffreSignatureElectronique>;
        /** Lecture des données signataires */
        lireSignataires(idDossier: string): ng.IPromise<Models.SignataireElectronique.ISignatairesComplet>;
        /** Mise à jour des données signataires */
        majSignataires(idDossier: string, signataires: Models.SignataireElectronique.ISignataire[]): ng.IPromise<void>;
        /** Ajout d'un nouveau signataire délégataire */
        ajouterSignataire(): ng.IPromise<void>;
        /**
         * Interface pour la méthode de lecture de l'acte de signature électronique
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         */
        lireActeSignElecGene(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectroniqueGene.IResultatOffreSignatureElectronique>;
        /**
         * Interface pour le traitement retour de la SAG
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         */
        traiterRetourSignSAG(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Modeles.SignatureElectronique.IResultatTraitementSignature>;
    }
    class SignatureElectroniqueService implements ISignatureElectroniqueService {
        private $q;
        private signatureElectroniqueService;
        private schemaService;
        private elementService;
        static $inject: string[];
        constructor($q: ng.IQService, signatureElectroniqueService: ICRest.Services.SignatureElectronique.ISignatureElectroniqueService, schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService);
        /**
         * Méthode de lecture de l'acte de signature électronique
         * @param idDossier identifiant du dossier en instruction
         */
        lireActeSignatureElectronique(idDossier: string): ng.IPromise<ICBusiness.Models.SignatureElectronique.IOffreSignatureElectroniqueLecture>;
        /**
         * Méthode pour la validation de la signature électronique
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature cude du type de signature
         */
        validerActeSignatureElectronique(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Interface pour la validation de la signature électronique
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature cude du type de signature
         */
        lancerProcessusSignatureElectronique(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Méthode pour la lecture d'un document
         *
         * @param identifiantIdn identifiant IDN du document
         */
        lireDocActSigElecGen(identifiantIdn: string): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatLectureDocumentActeSignature>;
        /**
         * Méthode pour alimenter le dossier IDN
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         * @param documents liste des documents à mettre à jour
         */
        alimDossSignElecGene(idDossier: string, codeSignature: number, documents: ICBusiness.Models.SignatureElectronique.IDocumentSignatureElectroniqueMaj[]): ng.IPromise<ICBusiness.Models.SignatureElectronique.IResultatOffreSignatureElectronique>;
        /**
         * Méthode pour l'annulation du dossier de signature électronique
         *
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         * @param motifAnnulation motif de l'annulation
         */
        annulerActSigneElecGen(idDossier: string, codeSignature: number, motifAnnulation: string): ng.IPromise<ICBusiness.Models.SignatureElectroniqueGene.IResultatOffreSignatureElectronique>;
        /** Lecture des données signataires */
        lireSignataires(idDossier: string): ng.IPromise<Models.SignataireElectronique.ISignatairesComplet>;
        ajouterSignataire(): ng.IPromise<void>;
        /** Mise à jour des données signataires */
        majSignataires(idDossier: string, signataires: Models.SignataireElectronique.ISignataire[]): ng.IPromise<void>;
        private getMajNames(elementName);
        /**
         * Méthode de lecture de l'acte de signature électronique
         * @param idDossier identifiant du dossier en instruction
         */
        lireActeSignElecGene(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Models.SignatureElectroniqueGene.IResultatOffreSignatureElectronique>;
        /**
         * Méthode pour le traitement retour de la SAG
         * @param idDossier identifiant du dossier en instruction
         * @param codeSignature code signature
         */
        traiterRetourSignSAG(idDossier: string, codeSignature: number): ng.IPromise<ICBusiness.Modeles.SignatureElectronique.IResultatTraitementSignature>;
    }
}

declare namespace ICBusiness.Services.RefusAssurances {
    import RestModel = ICRest.Modeles;
    /** Services relatifs aux refus d'assurances externes */
    interface IRefusAssurancesService {
        /**
         * Retourne le refus d'assurance correspondant à l'identifiant fourni
         * @param idDossier
         * @param idRefus
         * @parma listePersonne
         */
        getRefusAssuranceDetail(idDossier: string, idRefus: string, listePersonne: Models.Common.ICodeLabel<string>[]): ng.IPromise<Models.RefusAssurances.IRefusAssuranceDetail>;
        /**
         * Retourne les assurance du premier plan de financement de la liste (il n'y a qu'un plan en conso et pro)
         * @param idDossier
         * @param idPlan
         */
        getRefusAssurances(idDossier: string, idPlan: string): ng.IPromise<Models.RefusAssurances.IRefusAssurance[]>;
        /**
         * Retourne l'état de l'habilitation d'ajout de refus d'assurance externe
         * @param idDossier
         * @param numeroInterneAgent
         */
        getAjoutRefusAutorise(entiteInstructeur: string, numeroInterneAgent: string): any;
        /**
         * Ajouter un refus d'assurance et renvoie la donnée mise jour
         * @param idDossier
         * @param idPersonne
         * @param idPlan
         * @param refus
         */
        addRefusAssurance(idDossier: string, idPersonne: string, idPlan: string, refus: Models.RefusAssurances.IRefusAssuranceDetail): ng.IPromise<Models.RefusAssurances.IRefusAssuranceDetail>;
        /**
         * Modifier un refus d'assurance
         * @param idDossier
         * @param refus
         */
        majRefusAssurance(idDossier: string, refus: Models.RefusAssurances.IRefusAssuranceDetail): ng.IPromise<void>;
        /**
         * Supprimer un refus d'assurance externe
         * @param idDossier
         * @param idRefus
         */
        deleteRefusAssurance(idDossier: string, idRefus: string): ng.IPromise<void>;
        /**
         * Imprimer la lettre d'un refus d'assurance externe
         * @param idDossier
         * @param idRefus
         */
        printLettreRefus(idDossier: string, idRefus: string): ng.IPromise<Models.RefusAssurances.IResultatEditionREFA>;
    }
    /** Services relatifs aux assurances */
    class RefusAssurancesService implements IRefusAssurancesService {
        private $q;
        private schemaService;
        private elementService;
        private ajouterRefusService;
        private editionService;
        private habilitationService;
        static $inject: string[];
        constructor($q: angular.IQService, schemaService: Services.Common.IElementSchemaService, elementService: ICRest.Services.Element.IElementService, ajouterRefusService: ICRest.Services.Dossier.IAjouterRefusAssuranceExterneService, editionService: ICRest.Services.Dossier.EditerDocumentFC050REFService, habilitationService: Services.Habilitation.IHabilitationService);
        getRefusAssuranceDetail(idDossier: string, idRefus: string, listePersonne: ICBusiness.Models.Common.ICodeLabel<string>[]): ng.IPromise<Models.RefusAssurances.IRefusAssuranceDetail>;
        getAjoutRefusAutorise(entiteInstructeur: string, numeroInterneAgent: string): ng.IPromise<boolean>;
        getRefusAssurances(idDossier: string, idPlan: string): ng.IPromise<Models.RefusAssurances.IRefusAssurance[]>;
        addRefusAssurance(idDossier: string, idPersonne: string, idPlan: string, refus: Models.RefusAssurances.IRefusAssuranceDetail): ng.IPromise<Models.RefusAssurances.IRefusAssuranceDetail>;
        majRefusAssurance(idDossier: string, refus: Models.RefusAssurances.IRefusAssuranceDetail): ng.IPromise<void>;
        deleteRefusAssurance(idDossier: string, idRefus: string): ng.IPromise<void>;
        printLettreRefus(idDossier: string, idRefus: string): ng.IPromise<RestModel.EditerDocumentFC050REF.IResultatEditionREFALecture>;
    }
}

declare namespace ICBusiness.Services.RemiseOffre {
    /**
     * Interface pour la remise de l'offre
     */
    interface IRemiseOffreService {
        /**
         * Interface pour la méthode de remise de l'offre
         *
         * @param idDossier : identifiant du dossier en instruction
         * @param dateRemise : date de remise de l'offre
         */
        remiseOffre(idDossier: string, date: string): ng.IPromise<ICBusiness.Models.RemiseOffre.IRemiseOffre>;
        /**
         * Interface pour la méthode de calcul de la date maximale de validité de l'offre/contrat
         *
         * @param dateRemise  la date d'de remise de l'offre/contrat
         */
        calculerDateMaxValidite(codeApplication: string, dateRemise: string): string;
    }
    /**
     * Implémentation de l'interface pour la remise de l'offre
     */
    class RemiseOffreService implements IRemiseOffreService {
        private remiseOffreService;
        static $inject: string[];
        constructor(remiseOffreService: ICRest.Services.RemiseOffre.IRemiseOffreService);
        /**
         * Interface pour la méthode de remise de l'offre
         *
         * @param idDossier : identifiant du dossier en instruction
         * @param dateRemise : date de remise de l'offre
         *
         * @returns objet ICBusiness.Models.RemiseOffre.IRemiseOffre
         */
        remiseOffre(idDossier: string, dateRemise: string): ng.IPromise<ICBusiness.Models.RemiseOffre.IRemiseOffre>;
        /**
         * Interface pour la méthode de calcul de la date maximale de validité de l'offre/contrat
         *
         * @param date  la date de référence
         *
         * @returns la date maximale de validité calculée
         */
        calculerDateMaxValidite(codeApplication: string, date: string): string;
    }
}

declare namespace ICBusiness.Services.SuivisPlanifies {
    /** Services relatifs aux assurances */
    interface ISuivisPlanifiesService {
        getSuiviPlanifie(idDossier: string, idSuiviPlanifie: string): ng.IPromise<Models.SuivisPlanifies.ISuivisPlanifies>;
        getListeSuivisPlanifiesParCredit(idDossier: string): ng.IPromise<Models.SuivisPlanifies.ICreditSuivisPlanifies[]>;
        listerSuivisPlanifie(idProduitFinancier: string, dateTraitement: string): ng.IPromise<Models.SuivisPlanifies.ISuiviPlanifieCatalogue[]>;
        ajouterSuivisPlanifies(idDossier: string, idCreditInterne: string, codeTypeSuiv: string[]): ng.IPromise<void>;
        updateSuiviPlanifie(idDossier: string, sP: Models.SuivisPlanifies.ISuivisPlanifies): ng.IPromise<void>;
        supprimerSuiviPlanifie(idDossier: string, idSuiviPlanifie: string): ng.IPromise<void>;
    }
    /** Services relatifs aux assurances */
    class SuivisPlanifiesService implements ISuivisPlanifiesService {
        private $q;
        private elementService;
        private schemaService;
        private creditParametreService;
        private suivisPlanifiesRestService;
        private cacheService;
        private _dateVide;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, schemaService: Services.Common.IElementSchemaService, creditParametreService: ICRest.CreditParametre.Services.ICreditParametreService, suivisPlanifiesRestService: ICRest.Services.SuivisPlanifies.ISuivisPlanifiesService, cacheService: Services.Common.ICacheService);
        listerSuivisPlanifie(idProduitFinancier: string, dateTraitement: string): ng.IPromise<Models.SuivisPlanifies.ISuiviPlanifieCatalogue[]>;
        ajouterSuivisPlanifies(idDossier: string, idCreditInterne: string, codeTypeSuiv: string[]): ng.IPromise<void>;
        updateSuiviPlanifie(idDossier: string, sP: Models.SuivisPlanifies.ISuivisPlanifies): ng.IPromise<void>;
        private mapSuiviPlanifieMaj(sP);
        supprimerSuiviPlanifie(idDossier: string, idSuiviPlanifie: string): ng.IPromise<void>;
        getSuiviPlanifie(idDossier: string, idSuiviPlanifie: string): ng.IPromise<Models.SuivisPlanifies.ISuivisPlanifies>;
        getListeSuivisPlanifiesParCredit(idDossier: string): ng.IPromise<Models.SuivisPlanifies.ICreditSuivisPlanifies[]>;
        private mapSuiviPlanifieCatalogue(sPC);
        /**
         * Retourne Oui ou Non selon le codeAffectation du suivi planifié
         * Pour un objet de type RestSuivisPlanifies.IScSuivisPlanifies, on utilise le param codeAffectationSuivantPlan
         * Pour un objet de type ICRest.Modeles.LireElement.ISuiviPlanifieLecture, on utilise le param codeAffectationSuivantPlafondProduit
         * @param codeAffectationSuivantPlan
         */
        private isProduct(codeAffectationSuivantPlan);
        private mapSuivisPlanifies(credits);
        private mapSuiviPLanifieBase(s);
        private mapSuiviPlanifie(s);
        private getTypeSuivisLabel(type);
        /**
         * Retourne le type de suivi planifié
         * @param suiviPlanifie Suivi planifie
         */
        private getTypeSuivis(codeAffectation, codePlafondAuto, codePostnmtDefaut);
    }
}

declare namespace ICBusiness.Services.SuiviEditions {
    /**
     * Interface pour le suivi des éditions
     */
    interface ISuiviEditionsService {
        suiviEditionsImmoActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        suiviEditionsConsoProActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        suiviEditionsActif(date: string, codeEtablissement: string, codeApplication: number, onPromiseResolved?: () => void): boolean;
        /**
         * Méthode permettant de récupérer les différents suivis d'édition
         * @param idDossier
         * @param isEdition permet de faire un appel à un mémo différent si on est en édition des documents ou en suivi des éditions
         */
        getSuiviEditions(idDossier: string, isEdition: boolean): ng.IPromise<Models.SuiviEditions.IRetourSuiviEditions>;
        /**
         * Méthode permettant de sauvegarder les date des différents suivi des éditions
         * @param identifiantDossier
         * @param suiviDocuments
         */
        saveDateSuiviEditionDocument(identifiantDossier: string, suiviDocuments: Models.SuiviEditions.ISuiviDocument[]): ng.IPromise<void>;
        /**
         * Méthode renvoyant la class a utiliser selon le code d'état de la signature
         * @param code
         */
        getEtatSignatureClass(code: string): string;
    }
    class SuiviEditionsService implements ISuiviEditionsService {
        private $q;
        private elementService;
        private parametrageApplicatifService;
        private schemaService;
        private paramApplicatifRemanentService;
        static $inject: string[];
        constructor($q: ng.IQService, elementService: ICRest.Services.Element.IElementService, parametrageApplicatifService: Services.ParametrageApplicatif.IParametrageAppicatifService, schemaService: Services.Common.IElementSchemaService, paramApplicatifRemanentService: ICBusiness.Services.ParametrageApplicatif.IParametrageAppicatifRemanentService);
        /**
         * Méthode pour savoir si le suivi des éditions Immo est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsImmoActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        /**
         * Méthode pour savoir si le suivi des éditions Conso/Pro est actif
         * @param date date de référence
         * @param codeEtablissement code établissement
         */
        suiviEditionsConsoProActif(date: string, codeEtablissement: string): ng.IPromise<boolean>;
        getSuiviEditions(idDossier: string, isEdition: boolean): ng.IPromise<Models.SuiviEditions.IRetourSuiviEditions>;
        /**
         * Méthode permettant de savoir si le mode suivi des éditions est actif
         * @param date date d'instruction
         * @param codeEtablissement code établissement
         * @param codeApplication code application
         * @param onPromiseResolved callBack si la promesse est résolue
         * @returns booléen
         */
        suiviEditionsActif(date: string, codeEtablissement: string, codeApplication: number, onPromiseResolved?: () => void): boolean;
        saveDateSuiviEditionDocument(identifiantDossier: string, suiviDocuments: Models.SuiviEditions.ISuiviDocument[]): ng.IPromise<void>;
        getEtatSignatureClass(code: string): string;
    }
}

declare namespace ICBusiness.Services.Transfert {
    interface IRendreDossierService {
        /**
         * Permer de rendre le dossier après transfert pour conformité
         * @param idDossier
         * @param forcee
         */
        rendreDossierViaId(idDossier: string, forcee: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRendreDossierResultat>;
    }
    class RendreDossierService implements IRendreDossierService {
        private rendreDossierService;
        static $inject: string[];
        constructor(rendreDossierService: ICRest.Services.RendreDossier.IRendreDossierService);
        rendreDossierViaId(idDossier: string, forcee: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRendreDossierResultat>;
    }
}

declare namespace ICBusiness.Services.TransfertBo {
    interface ITransfertBoService {
        chargerTypeEdsBackOffice(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<ICBusiness.Models.TypeEds.ITypeEds[]>;
        transfertBoPossible(context: ICBusiness.Models.Common.IContext): boolean;
    }
    class TransfertBoService implements ITransfertBoService {
        private $q;
        private transfertBoService;
        private habilitationService;
        private etatDossierService;
        static $inject: string[];
        constructor($q: ng.IQService, transfertBoService: ICRest.Services.TransfertBo.ITransfertBoService, habilitationService: ICBusiness.Services.Habilitation.IHabilitationService, etatDossierService: ICBusiness.Services.Dossier.IEtatDossierService);
        /**
         * Méthode pour charger la liste des types d'EDS possibles pour le transfert au back-office
         *
         * @param dateDeTraitement date de traitement
         * @param codeEtablissement code de l'établissement
         */
        chargerTypeEdsBackOffice(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<ICBusiness.Models.TypeEds.ITypeEds[]>;
        private estTransfertBoPossible;
        private estTransfertBoPossibleOnce;
        /**
         * Méthode pour savoir si le transfert back-office est possible/visible
         * @param context objet ICBusiness.Models.Common.IContext
         */
        transfertBoPossible(context: ICBusiness.Models.Common.IContext): boolean;
    }
}

declare namespace ICBusiness.Services.TransfertDecision {
    interface ITransfertDecisionService {
        chargerTypeEdsDecision(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<ICBusiness.Models.TypeEds.ITypeEds[]>;
        verifierEdsDecision(identifiantDossier: string, codeTypeEds: string, identifiantEds: string): ng.IPromise<boolean>;
        getAgentpourDecisionConf(identifiantDossier: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
    }
    class TransfertDecisionService implements ITransfertDecisionService {
        private transfertDecisionService;
        private elementService;
        static $inject: string[];
        constructor(transfertDecisionService: ICRest.Services.TransfertDecision.ITransfertDecisionService, elementService: ICRest.Services.Element.IElementService);
        /**
         * Méthode pour charger la liste des types d'EDS possibles pour le transfert pour décision
         *
         * @param dateDeTraitement
         * @param codeEtablissement
         */
        chargerTypeEdsDecision(dateDeTraitement: string, codeEtablissement: string): ng.IPromise<ICBusiness.Models.TypeEds.ITypeEds[]>;
        /**
         * Méthode pour vérifier le code EDS externe décision
         *
         * @param identifiantDossier identifiant du dossier
         * @param codeTypeEds code du type d'EDS
         * @param identifiantEds identifiant externe de l'EDS
         */
        verifierEdsDecision(identifiantDossier: string, codeTypeEds: string, identifiantEds: string): ng.IPromise<boolean>;
        getAgentpourDecisionConf(identifiantDossier: string): ng.IPromise<Models.Habilitation.IInformationsAgent>;
    }
}

declare namespace ICBusiness.Services.Transfert {
    interface ITransfertService {
        transfererDossierViaIdDecision(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        transfererDossierViaIdConformite(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        transfererDossierViaIdBackOffice(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        creerDonneesTransfert(idAgent: string, idStructure: string, rang: number): ICBusiness.Models.Transfert.ISdInformationTransfert;
    }
    class TransfertService implements ITransfertService {
        private transfertService;
        static $inject: string[];
        constructor(transfertService: ICRest.Services.Transfert.ITransfertService);
        /**
         * Méthode pour transférer un dossier pour décision
         *
         * @param idDossier
         * @param infoTransfert
         * @param bLancerControleDossier
         */
        transfererDossierViaIdDecision(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        /**
         * Méthode pour transférer un dossier pour conformité
         *
         * @param idDossier
         * @param infoTransfert
         * @param bLancerControleDossier
         */
        transfererDossierViaIdConformite(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        /**
         * Méthode pour transférer un dossier au back-office
         *
         * @param idDossier
         * @param infoTransfert
         * @param bLancerControleDossier
         */
        transfererDossierViaIdBackOffice(idDossier: string, infoTransfert: ICBusiness.Models.Transfert.ISdInformationTransfert, bLancerControleDossier: boolean): ng.IPromise<ICBusiness.Models.Transfert.IRetourTranfererDossier>;
        /**
         * Méthode pour créer les infos de transfert
         * @param idAgent indentifiant externe d'un agent
         * @param idStructure identifiant externe d'un EDS
         * @param rang rang pour un idStructure
         */
        creerDonneesTransfert(idAgent: string, idStructure: string, rang: number): ICBusiness.Models.Transfert.ISdInformationTransfert;
        /**
         * Méthode 'générique' de transfert de dossier
         * @param typeTraitementTransfertDossier
         * @param typeTransfert
         * @param idDossier
         * @param infoTransfert
         * @param bLancerControleDossier
         */
        private transfererDossierViaIdentifiant(typeTraitementTransfertDossier, typeTransfert, idDossier, infoTransfert, bLancerControleDossier);
    }
}

declare namespace ICBusiness.Services.Trace {
    interface ITraceService {
        setOnTrace(): ng.IPromise<void>;
        setOffTrace(indice?: number): ng.IPromise<string>;
    }
    class TraceService implements ITraceService {
        private debugService;
        static $inject: string[];
        constructor(debugService: ICRest.Services.Dossier.IDebugService);
        setOnTrace(): ng.IPromise<void>;
        setOffTrace(indice?: number): ng.IPromise<string>;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Informations Ptz'
     */
    class InformationsPtz {
        static mapQuestionnaireAnnexe(questionnaireAnnexeComplet: RestModel.SchemaComplet.IQuestionnaireAnnexeComplet, nombrePersonneComposantLeMenage: number): Models.InformationsPtz.IQuestionnaireAnnexe;
        static mapQuestionsAnnexes(questionsAnnexes: RestModel.SchemaComplet.IQuestionAnnexeComplet[]): Models.InformationsPtz.IQuestionAnnexe[];
        private static mapOptionsQuestionAnnexe(reponse, isTravauxFinances);
        private static mapQuestionValue(reponse, isTravauxFinances);
        static mapFormulairesStatutOccupation(formulairesStatutOccupationComplet: RestModel.SchemaComplet.IFormulaireStatutOccupationPTZComplet[]): Models.InformationsPtz.IFormulaireStatutOccupation[];
        static mapInformationOccupation(occupationComplet?: RestModel.SchemaComplet.IInformationOccupationComplet): Models.InformationsPtz.IInformationOccupation;
        static mapFormulaireLienAvecEmprunteur(formulaireLienAvecEmprunteurComplet: RestModel.SchemaComplet.IFormulaireLienAvecEmprunteurComplet, nombrePersonneComposantLeMenage: number): Models.InformationsPtz.IFormulaireLienAvecEmprunteur;
        private static mapOccupant(occupantComplet?);
        static mapFormulairesRattachementFoyerFiscal(formulairesRattachementFoyerFiscalComplet: RestModel.SchemaComplet.IFormulaireRattachementFoyerFiscalComplet[]): Models.InformationsPtz.IFormulaireRattachementFoyerFiscal[];
        static mapPersonnePhysiqueReponsesMaj(questionsAnnexes: Models.InformationsPtz.IQuestionAnnexe[], personnesPhysiques: RestModel.LireElement.IElementLecture[]): RestModel.MajElements.IPersonnePhysiqueMaj[];
        private static mapPersonnePhysiqueReponseMaj(idws, personnesPhysiques);
        static mapTravauxFinancesReponsesMaj(questionsAnnexes: Models.InformationsPtz.IQuestionAnnexe[]): RestModel.MajElements.ITravauxFinancesMaj[];
        static mapEntreeOccupation(formStatutOccupation: Models.InformationsPtz.IFormulaireStatutOccupation): ICRest.Modeles.DefinirStatutOccup.IEntreeStatutOccupation;
        static mapStatutOccupationMaj(occupation: Models.InformationsPtz.IInformationOccupation): ICRest.Modeles.MajElement.IInformationOccupationMaj;
        static mapOccupantMaj(occupant: Models.InformationsPtz.IOccupant): ICRest.Modeles.MajElements.IOccupantMaj;
        static mapEntreeRattachementFoyerFiscalTiers(foyer: Models.InformationsPtz.IFormulaireRattachementFoyerFiscal): ICRest.Modeles.DefinirRattFoyerFiscalTiers.IEntreeRattachementFoyerFiscal;
        static mapRattachementFoyerFiscalTiersMaj(foyer: Models.InformationsPtz.IFormulaireRattachementFoyerFiscal): ICRest.Modeles.MajElements.IRattachementFoyerFiscalTiersMaj;
        static mapInfoComplementairePTZ(info: ICRest.Modeles.RecupererInfoCompPTZ.ISortieRecuperationInfoPTZ): Models.InformationsPtz.IInfoComplementairePTZ;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Avis {
        static mapAvis(source: ICRest.Modeles.SchemaComplet.IAvisComplet): Models.Avis.IAvis;
        static mapAvisLecture(source: ICRest.Modeles.AjouterAvis.IAvisLecture, motif: string, conformite: boolean): Models.Avis.IAvis;
        static mapListeAvisType(source: ICRest.Modeles.SchemaComplet.IAvisComplet[], codeTypo: string): Models.Avis.IAvis[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Assurances;
    /**
     * ModelTransformers de l'objet metier 'Assurance'
     */
    class Assurance {
        static mapListeAssures(assurancesCompletes: RestModel.SchemaComplet.IAssuranceComplet[]): BusinessModel.IAssure[];
        static mapMontantReference(montantComplet: RestModel.SchemaComplet.IMontantComplet): BusinessModel.IMontantReference;
        static mapDetailsAssure(assurancesCompletes: RestModel.SchemaComplet.IAssuranceComplet[], assurancesDetails: Models.Assurances.IAssuranceDetails[], parametresFonctionnels: Models.ParametreFonctionnel.IParametreFonctionnel[]): BusinessModel.IAssureDetails;
        static mapListeAssurance(assurancesCompletes: RestModel.SchemaComplet.IAssuranceComplet[]): BusinessModel.IAssurance[];
        static mapRetourAjoutAssurance(retour: RestModel.AjouterAssuranceControle.IResultatAjouterAssuranceAvecControles): Models.Assurances.IAssuranceAjout;
        static mapDetailsAssurance(assurance: RestModel.LireElement.IAssuranceLecture, listeCouvertures: RestModel.LireElement.ICouvertureCreditLecture[], listeCotisations: RestModel.LireElement.ICotisationLecture[], personne: RestModel.LireElement.IPersonnePhysiqueLecture, detailsConvention: Models.Assurances.IConventionDetails, credits: RestModel.LireElement.ICreditInterneLecture[], roles: Models.Common.ICodeLabel<string>[], typesAssurances: ICRest.CreditParametre.Models.TypeAssurance.IScTypeAssurance[], listeBeneficiaires: Models.Common.ICodeLabel<string>[]): BusinessModel.IAssuranceDetails;
        static mapDossierExterneCBP(dossier: RestModel.CreerDossierExterne.IResultatCreationDossierCBP | RestModel.LireDossierExterne.IResultatLireDossierCBP): Models.Assurances.IDossierExterne;
        private static getLibelleCreationTypeAssurance(typesAssurances, typeDass);
        private static getCotisationFromCouverture(couverture, cotisations);
        private static mapCotisationAjout(cotisation);
        private static getLabelRole(roles, roleCode);
        private static getEtatDossier(assuranceComplet, listeCodeEtats, codeDecision);
        private static getStatutDecision(listeCodeEtatAccessoire, estAssuranceCnp);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import CreditParamModel = ICRest.CreditParametre.Models;
    import BusinessModel = Models.Assurances;
    class ConventionsAssurance {
        /** Index du choix "Minimum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMin;
        /** Index du choix "Maximum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMax;
        /** Index du choix "Conseillé" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixConseille;
        /** Liste des IDs d'anciens contrats */
        private static anciensContrats;
        static mapConventions(conventions: RestModel.ListerConventionsAssuranceCompatible.IScConventionResume[], typesAssurances: CreditParamModel.TypeAssurance.IScTypeAssurance[]): BusinessModel.IConvention[];
        private static getLibelleCreationTypeAssurance(typesAssurances, typeDass);
        static mapDetailsConventionAssurance(convention: ICRest.CreditParametre.Models.ChargerConventionAssurance.IScConventionAssurance): Models.Assurances.IConventionDetails;
        /**
         * Récupère les listes de taux/montants associés : borne min [0], borne max [1], valeur conseillée [2]
         * La liste est renvoyée dans l'ordre croissant : min, max, conseillé
         */
        private static getCodeLabelListes(data);
        private static getBornes(data);
        /** Retourne les règles de visibilités selon le mode de calcul pour les champs Taux & Montant */
        private static getTauxMontantVisibilite(convention);
        /** Retourne le libellé du type de contrat (contrat / ancien contrat) */
        private static getContratTypeLabel(numeroExterneConvention, isConfigAde);
        /**
         * Retourne le suffix à ajouter au label d'un contrat
         * @param numeroExterneConvention
         * @param activationAde
         */
        private static getSuffixContratType(numeroExterneConvention);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Decision {
        /**
         * Fonction pour modifier une 'decision' du service rest en 'decision' du business
         * @param donnees
         */
        static mapDecision(donnees: ICRest.Modeles.SchemaComplet.IDecisionPreteurComplet): ICBusiness.Models.Decision.IDecision;
        /**
         * Fonction pour modifier le retour de la validation accord du service rest en retour de validation icbusiness
         * @param retour
         */
        static mapRetourAccord(retour: ICRest.Modeles.ValiderAccordPreteur.IRetourPasserAccordPreteur): ICBusiness.Models.Decision.IRetourPasserAccordPreteur;
        /**
         * Fonction pour modifier le retour de la validation accord du service rest en retour de validation icbusiness
         * @param retour
         */
        static mapRetourModificationAccord(retour: ICRest.Modeles.ModifierAccord.IRetourModificationAccordPreteur): ICBusiness.Models.Decision.IRetourPasserAccordPreteur;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier BlocNotes
     */
    class BlocNotes {
        static mapBlocNotes(blocNoteslecture: ICRest.Modeles.DefinirBlocNotes.IBlocNotesLecture | ICRest.Modeles.OuvrirBlocNotes.IBlocNotesLecture): Models.BlocNotes.IBlocNotes;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * Classe des 'mappers' pour le dossier
     */
    class Dossier {
        /**
         * Fonction pour mapper un ICRest.Modeles.LireElement.IDossierLecture en ICBusiness.Models.Dossier.IDossierElement
         * Remarque: à compléter des informations nécessaires en fonction des besoins
         * @param dossier
         */
        static mapDossier(dossier: ICRest.Modeles.LireElement.IDossierLecture): Models.Dossier.IDossierElement;
        static mapComplementDossier(complementDossier: ICRest.Modeles.SchemaComplet.IComplementDossierComplet): Models.Dossier.IComplementDossier;
        static mapComplementDossierMaj(complementDossier: Models.Dossier.IComplementDossier): ICRest.Modeles.DefinirComplementDossier.IComplementDossierMaj | ICRest.Modeles.MajElements.IComplementDossierMaj;
        static mapListeAnomalieToControle(anomalies: ICRest.Modeles.IAnomalieLecture[]): Models.Dossier.IControleDossier;
        static mapAnomalieLectureToAnomalie(anomalie: ICRest.Modeles.IAnomalieLecture | ICBusiness.Models.Common.IAnomalieLecture): Models.Dossier.IAnomalie;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class VerifierEligibilite {
        /**
         * Map résultat éligibilité pour afficher dans modale
         * @param resultEligib
         */
        static mapResultatEligibilite(resultEligib: ICRest.Modeles.CalculerEligibilite.IResultatEligibilite): Models.Dossier.IResultatEligibilite[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.LireElement;
    class Address {
        static getZipCodeAndCityFromRow6(address: Models.Common.IAddress): string[];
        static mapAddress(source: RestModel.IPersonneLecture): Models.Common.IAddress;
        private static mapAdressPersonne(personne);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Anomalie {
        /**
         * Méthode pour mapper une liste d'anomalies ICRest en anomalies ICBusiness
         * @param anomalies (liste des anomalies)
         * @param codeTypeAnomalie (code du type d'anomalie à traiter NB: le code est facultatif)
         */
        static mapAnomalies(anomalies: ICRest.Modeles.LireElement.IAnomalieLecture[] | ICRest.Modeles.Schema.IAnomalieLecture[], codeTypeAnomalie?: number): ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Méthode pour mapper une anomalie ICRest en anomalie ICBusiness
         * @param anomalie
         */
        static mapAnomalie(anomalie: ICRest.Modeles.LireElement.IAnomalieLecture | ICRest.Modeles.DefinirBlocNotes.IAnomalieLecture | ICRest.Modeles.CalculerFraisNotaire.IAnomalieLecture | ICRest.Modeles.FermerDossier.IAnomalieLecture): ICBusiness.Models.Common.IAnomalieLecture;
        static mapTypeObjetAnomalie(idObjet: string): Enum.TypeObjetAnomalieEnum;
        /**
         * Mathode pour mapper les listes des anomalies du contrôle avant l'édition de l'offre
         * @param anomalies
         */
        static mapAnomaliesControleEdition(anomalies: ICRest.Modeles.ControlerAvantDecisionOffre.IRetourControleEdition): ICBusiness.Models.Edition.IAnomaliesControleEdition;
        /**
         * Méthode pour mapper une liste d'anomalies de type ICBusiness.Models.Dossier.IAnomalie en une liste de type ICBusiness.Models.Common.IAnomalieLecture
         * @param anomalies
         */
        static mapDossierAnomalies(anomalies: ICBusiness.Models.Dossier.IAnomalie[]): ICBusiness.Models.Common.IAnomalieLecture[];
        /**
         * Méthode pour mapper une anomalies de type ICBusiness.Models.Dossier.IAnomalie en une anomalie de type ICBusiness.Models.Common.IAnomalieLecture
         * @param anomalie
         */
        static mapDossierAnomalie(anomalie: ICBusiness.Models.Dossier.IAnomalie): ICBusiness.Models.Common.IAnomalieLecture;
        static mapAnomaliesInfo(listeAnomalies?: ICBusiness.Models.Common.IAnomalieLecture[]): ICBusiness.Models.Common.IAnomaliesInfos;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'ControleVisibilite'
     */
    class ControleVisibilite {
        static mapControleVisibilite(controle: RestModel.SchemaComplet.IControleIhm): Models.Common.IVisibilite;
        static mapControlePhaseVisibilite(controle: RestModel.SchemaComplet.IControleIhm): Models.Common.IVisibiliteSelectionne;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class DateTransformer {
        /**
         * Retourne null si l'annee est 0001 ou 1901
         * @param dateNeo
         */
        static mapDate(dateNeo: string): string;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Montant {
        static getMontantByDevise(estDeviseDossier: boolean, montant: number, codeDevise: string, tauxMontage: number): number;
        private static getMontant(montant, codeDevise, tauxMontage);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.EditionOffre;
    /**
     * Classe des 'mappers' pour les documents
     */
    class Document {
        /**
         * Méthode pour 'mapper' une liste d'objets ICRest.Modeles.EditionOffre.IInfoDocument en une liste d'objets ICBusiness.Models.EditionOffre.IInfoDocument
         * @param document: objet ICRest.Modeles.EditionOffre.IInfoDocument
         * @returns un objet ICBusiness.Models.EditionOffre.IInfoDocument (sans alimentation de la propriété 'notices')
         */
        static mapDocuments(documents: RestModel.IInfoDocument[]): Models.EditionOffre.IInfoDocument[];
        static mapDocumentsAvecAnomalies(resultat: RestModel.IResultatListerDocuments): Models.EditionOffre.IResultatDocuments;
        /**
         * Méthode pour 'mapper' un objet ICRest.Modeles.EditionOffre.IInfoDocument en objet ICBusiness.Models.EditionOffre.IInfoDocument
         * @param document: objet ICRest.Modeles.EditionOffre.IInfoDocument
         * @param ordre: numéro d'ordre
         * @returns un objet ICBusiness.Models.EditionOffre.IInfoDocument (sans alimentation de la propriété 'notices')
         */
        static mapDocument(document: RestModel.IInfoDocument, ordre: number): Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour convertir un objet ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture en ICBusiness.Models.EditionOffre.IInfoDocument pour la SED
         * @param doc objet ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture
         */
        static mapDocumentTechniqueSed(doc: ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour convertir un objet ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture en ICBusiness.Models.EditionOffre.IInfoDocument pour la SAG
         * @param doc objet ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture
         */
        static mapDocumentTechniqueSag(doc: ICBusiness.Models.SignatureElectroniqueGene.IDocumentSignatureElectroniqueLecture): ICBusiness.Models.EditionOffre.IInfoDocument;
        /**
         * Méthode pour transformer un ICBusiness.Models.EditionOffre.IInfoDocument en ICBusiness.Models.SignatureElectronique.IDocumentSignatureElectroniqueMaj
         * @param doc ICBusiness.Models.EditionOffre.IInfoDocument
         * @param flux éventuelle flux d'impression
         */
        static mapInfoDocumentToMaj(doc: ICBusiness.Models.EditionOffre.IInfoDocument, flux?: string): ICBusiness.Models.SignatureElectronique.IDocumentSignatureElectroniqueMaj;
        /**
         * Méthode pour transformer un ICBusiness.Models.EditionOffre.IInfoDocument en ICBusiness.Models.Industrialisation.IDocumentOffreIndustrialisee
         * @param doc ICBusiness.Models.EditionOffre.IInfoDocument
         * @param flux éventuelle flux d'impression
         */
        static mapInfoDocumentToIndus(doc: ICBusiness.Models.EditionOffre.IInfoDocument, flux?: string): ICBusiness.Models.Industrialisation.IDocumentOffreIndustrialisee;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.SaisiesComplementaires;
    class DonneesComplementaires {
        private static initializedPropertiesInIhm;
        static mapDocumentFCM17OME(saisiesComplementaires: RestModel.ISaisiesComplementaireLecture): Models.Edition.IFCM17OME;
        static mapDocumentFCM17GBM(saisiesComplementaires: RestModel.ISaisiesComplementaireLecture): Models.Edition.IFCM17GBM;
        private static mapBienFCM17GBM(source, vierge?);
        private static mapOutilFCM17OME(source, vierge?);
        private static mapChampSpecifiqueString(source, vierge?);
        private static mapChampSpecifiqueCombo(source, vierge?);
        private static mapChampSpecifiqueRadio(source, vierge?);
        static mapDonneesComplementaires(saisiesComplementaires: RestModel.ISaisiesComplementaireLecture, idTheoriqueDocument: string, isFirstEdition: boolean, traiterNotices: boolean): Models.Edition.IDocumentComplementaireInfos;
        private static mapDonneeComplementaireRecursive(datas, isFirstEdition, proprieteParent?, indexParent?);
        private static traitementListeDonneesCreditAModifier(donnees, tableau);
        private static traitementCredit(donnees, credit);
        private static estListeDonneesCreditAModifier(donnee, nom);
        /**
         * Méthode pour créer les données 'élémentaires' de mise à jour des données complémentaires
         * @param identifiantDossier identifiant du dossier en instruction
         * @param donneesComplementaires données complémentaires à traiter
         */
        static mapElementSaisiesComplementairesMaj(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ICRest.Modeles.MajElements.ISaisiesComplementaireMaj;
        static mapElementFCM17OMEMaj(identifiantDossier: string, source: Models.Edition.IFCM17OME): ICRest.Modeles.MajElements.ISaisiesComplementaireMaj;
        private static mapOutilFCM17OMEMaj(source);
        static mapElementFCM17GBMMaj(identifiantDossier: string, source: Models.Edition.IFCM17GBM): ICRest.Modeles.MajElements.ISaisiesComplementaireMaj;
        private static mapBienFCM17GBMMaj(source);
        /**
         * Méthode pour créer les données listes d'éléments de mise à jour des données complémentaires
         * @param identifiantDossier identifiant du dossier en instruction
         * @param donneesComplementaires données complémentaires à traiter
         */
        static mapListeSaisiesComplementairesMaj(identifiantDossier: string, donneesComplementaires: Models.Edition.IDonneeComplementaire[]): ICRest.Modeles.MajElements.ISaisiesComplementaireMaj;
        static estNoticesMaj(donneesComplementaires: Models.Edition.IDonneeComplementaire[]): boolean;
        /**
         * Méthode spécifiques pour traiter
         * @param donneesComplementaires données IHM en entrée
         * @param saisiesComplementaires données REST pour envoi
         */
        private static mapListeDonneesCreditAModifierMaj(donneesComplementaires);
        private static isPropertyVisibleOrRequired(property, propertyName);
        private static mapChampCheckBox(value, values, nom, index);
        private static mapDonneeComplementaire(donnee, nom, nomParent?, indexParent?);
        private static mapSaisieComplementaireMaj(data);
        private static shouldFixInitializationProperties(isFirstEdition, propertyName);
        private static transformLabelToCodeLabel(index, label);
        private static transformIndexLabelToCodeLabel(index, label);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    type IClausePersonnaliseeMaj = RestModel.AjouterClausePersonnalisee.IClausePersonnaliseeMaj | RestModel.MajElement.IClausePersonnaliseeMaj;
    class Contrat {
        static mapContrat(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): ICBusiness.Models.Edition.IContrat;
        /**
         * Fonction pour mapper les intervenants dans la signature de l'offre
         * @param intervenants liste des intervenants
         */
        static mapIntervenants(intervenants: ICRest.Modeles.SchemaComplet.IIntervenantComplet[]): ICBusiness.Models.SignatureOffre.IIntervenantSignature[];
        private static determinerCodereponse(i);
        static mapContratCreditInterne(credits: ICRest.Modeles.SchemaComplet.ICreditInterneComplet[]): ICBusiness.Models.Edition.ICreditInterne[];
        /**
         * Fonction pour mapper les signataires personnes physiques
         * @param contrat
         */
        static mapContratSignataires(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): ICBusiness.Models.Edition.IPersonnePhysique[];
        /**
         * Fonction pour mapper les clauses emprunteur
         * @param contrat
         */
        static mapClausesEmprunteur(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IClausePersonnalisee[];
        /**
         * Fonction pour mapper les clauses rédacteur d'acte
         * @param contrat
         */
        static mapClausesRedacteurActe(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IClausePersonnalisee[];
        /**
         * Fonction pour mapper les clauses en fonction d'un type passé en paramètre
         * @param contrat
         * @param typeClause
         */
        protected static mapClauses(contrat: ICRest.Modeles.SchemaComplet.IContratComplet, typeClause: number): Models.Edition.IClausePersonnalisee[];
        /**
         * Méthode pour mapper une clause ICrest en clause ICBusiness
         * @param clause
         */
        static mapClause(clause: ICRest.Modeles.AjouterClausePersonnalisee.IClausePersonnaliseeLecture): Models.Edition.IClausePersonnalisee;
        /**
         * Fonction pour déterminer la présence d'au moins une clause emprunteur ou rédacteur d'acte
         * @param contrat
         */
        protected static existeClauses(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): boolean;
        /**
         *  Fonction pour mapper le projet
         * @param contrat
         */
        protected static mapProjet(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IProjet;
        /**
         * Fonction pour mapper les mandats
         * @param contrat
         */
        static mapMandats(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IMandats[];
        /**
         * Fonction pour mapper les instituts d'émission
         * @param contrat
         */
        protected static mapInstitutsEmission(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): Models.Edition.IInstitutEmission[];
        protected static creerLibelleLongSignataire(signataire: ICRest.Modeles.SchemaComplet.IPersonnePhysiqueComplet): string;
        /**
         * Méthode pour mapper une clause personnalisée business en clause personnalisée maj
         * @param clause
         */
        static mapClausePersonnaliseeMaj(clause: ICBusiness.Models.Edition.IClausePersonnalisee): IClausePersonnaliseeMaj;
        /**
         * Méthode pour mapper le contrat REST en contrat Business pour restitution dans la SPA de contractualisation
         * @param contrat
         */
        static mapContratEditionOffre(contrat: ICRest.Modeles.SchemaComplet.IContratComplet): ICBusiness.Models.Edition.IContrat;
        /**
         * Méthode pour mapper les débiteurs REST en débiteurs Business
         * @param debiteurs
         */
        static mapDebiteurs(debiteurs: ICRest.Modeles.SchemaComplet.IDebiteurComplet[]): ICBusiness.Models.Edition.IDebiteur[];
        /**
         * Méthode pour mapper les formules de paiement REST en formules de paiement Business
         * @param paiements
         */
        static mapFormulesPaiement(paiements: ICRest.Modeles.SchemaComplet.IFormulePaiementComplet[]): ICBusiness.Models.Edition.IFormulePaiement[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class ContratEpargneLogement {
        static mapContratsEpargneLogement(contratsEpargneLogement: ICRest.Modeles.SchemaComplet.IContratEpargneLogementComplet[]): ICBusiness.Models.ContratEpargneLogement.IContratEpargneLogement[];
        static mapContratEpargneLogement(contratEpargneLogement: ICRest.Modeles.SchemaComplet.IContratEpargneLogementComplet): ICBusiness.Models.ContratEpargneLogement.IContratEpargneLogement;
        static mapEmptyContratEpargneLogementFormData(codeDevise: string): ICBusiness.Models.ContratEpargneLogement.IContratEpargneLogementFormDatas;
        static mapContratEpargneLogementFormData(cELLecture?: ICRest.Modeles.LireElement.IContratEpargneLogementLecture, listeBeneficiaires?: Models.Common.ICodeLabel<string>[], listeLiensParente?: Models.Common.ICodeLabel<number>[]): ICBusiness.Models.ContratEpargneLogement.IContratEpargneLogementFormDatas;
        static convertionIdContratToRice(idContrat: string): MyWay.Model.Rice;
        static convertionRiceToIdContrat(rice: MyWay.Model.Rice): string;
        static mapContratEpargneLogementMaj(cELFormData: ICBusiness.Models.ContratEpargneLogement.IContratEpargneLogementFormDatas): ICRest.Modeles.AjouterContratEpargneLogement.IContratEpargneLogementMaj;
        static mapTranchesEpargneLogement(tranchesEl: ICRest.Modeles.LireElement.ITrancheELLecture[], droitsUtilisation: ICRest.Modeles.LireElement.IDroitUtiliseLecture[]): Models.TrancheEpargneLogement.ITrancheEpargneLogement[];
        static mapTrancheEpargneLogement(trancheEl: ICRest.Modeles.LireElement.ITrancheELLecture, droitsUtilisation: ICRest.Modeles.LireElement.IDroitUtiliseLecture[]): Models.TrancheEpargneLogement.ITrancheEpargneLogement;
        static mapTrancheEpargneLogementMaj(trancheEl: Models.TrancheEpargneLogement.ITrancheEpargneLogement): ICRest.Modeles.MajElements.ITrancheELMaj;
        static mapPlafondsEncoursEpargneLogement(emp: ICRest.Modeles.SchemaComplet.IEmprunteurComplet): Models.MontantEncoursEpargneLogement.IPlafondsEncoursEpargneLogement;
        static mapEncoursEpargneLogement(emp: ICRest.Modeles.SchemaComplet.IEmprunteurComplet): Models.MontantEncoursEpargneLogement.IEncoursEpargneLogement;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Emprunteur {
        static mapEmprunteur(intervenants: Models.Intervenants.IIntervenantsComplet): Models.Emprunteur.IEmprunteur;
        static mapEmprunteurMaj(emprunteur: Models.Emprunteur.IEmprunteur, patrimoine: Models.Emprunteur.IPatrimoineEmprunteur, encours?: Models.MontantEncoursEpargneLogement.IEncoursEpargneLogement): RestModel.MajElements.IEmprunteurMaj;
        static mapGarantMaj(garant: Models.Emprunteur.IGarant, patrimoine: Models.Emprunteur.IPatrimoineEmprunteur, nombreDeGarants: number, fonctCptRecentGarant: Models.Emprunteur.IFonctionnementCompteRecentGarant): RestModel.MajElements.IGarantMaj;
        private static extractPersonneMoraleEmprunteur(emp);
        static mapPersonnePhysiqueMaj(personnePhysique: Models.Emprunteur.IPersonnePhysique): RestModel.MajElements.IPersonnePhysiqueMaj;
        static mapEmprunteurElement(emprunteurLecture: RestModel.LireElement.IEmprunteurLecture): Models.Emprunteur.IEmprunteurElement;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class EntiteTitulaire {
        static mapInformationEntiteTitulaire(infoET: RestModel.EntiteTitulaire.Informationentitetitulaire.IInformationEntiteTitulaire): Models.EntiteTitulaire.IInformationEntiteTitulaire;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Personne {
        private static formatNumeroSiren(numeroSiren);
        private static getLibelleRole(rolesPersonnePourDossier);
        private static hasRole(personne, role);
        static estAssocie(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estConjointNonEmprunteur(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estEmprunteur(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estGarante(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estMorale(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture): boolean;
        static estPayeuse(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        static estPhysique(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture | RestModel.AjouterPersonneAvecControles.IPersonneLecture): boolean;
        static estRepresentantLegal(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet | RestModel.SchemaComplet.IPersonneMoraleComplet): boolean;
        /**
         * Construit l'intitulé d'une personne Physique OU Morale
         * @param personne
         */
        static getIntitule(personne: RestModel.SchemaComplet.IPersonneComplet | RestModel.LireElement.IPersonneLecture | RestModel.AjouterPersonneAvecControles.IPersonneLecture): string;
        static getListeIdwsOppositions(listeOppositions: RestModel.SchemaComplet.IOppositionComplet[]): string[];
        static getPersonneByIdOrEmpty(idPersonne: string, personnes: RestModel.SchemaComplet.IPersonneComplet[]): RestModel.SchemaComplet.IPersonneComplet;
        static mapActivite(activite: RestModel.LireElement.IActiviteLecture, personne: RestModel.LireElement.IPersonnePhysiqueLecture): Models.Emprunteur.IActivite;
        static mapActiviteMaj(activite: Models.Emprunteur.IActivite): RestModel.MajElement.IActiviteMaj;
        static mapDetailPersonneMorale(personne: RestModel.LireElement.IPersonneMoraleLecture): Models.Emprunteur.IDetailPersonneMorale;
        static mapDetailPersonnePhysique(personne: RestModel.LireElement.IPersonnePhysiqueLecture, activite: RestModel.LireElement.IActiviteLecture, activiteProfessionnelle: ICRest.Tiers.Models.CorporateActiviteProfessionnelle.IActiviteProfessionnelle, regimeMatrimonial: Models.Common.ICodeLabel<string>, emprunteur: RestModel.LireElement.IEmprunteurLecture): Models.Emprunteur.IDetailPersonnePhysique;
        static mapTuteur(tuteur: RestModel.SchemaComplet.ITuteurComplet): Models.Emprunteur.ITuteur;
        static mapGarant(garant: RestModel.SchemaComplet.IGarantComplet): Models.Emprunteur.IGarant;
        static mapPersonne(personne: RestModel.SchemaComplet.IPersonneComplet): Models.Emprunteur.IPersonne;
        static mapPersonneLecture(personne: RestModel.LireElement.IPersonneLecture): Models.Emprunteur.IDetailPersonne;
        static mapPersonneLectureToPersonne(personne: RestModel.AjouterPersonneAvecControles.IPersonneLecture | RestModel.LireElement.IPersonneLecture): Models.Emprunteur.IPersonne;
        static mapPersonneMorale(personne: RestModel.SchemaComplet.IPersonneMoraleComplet): Models.Emprunteur.IPersonneMorale;
        static mapPersonneMoraleLecture(personne: RestModel.LireElement.IPersonneMoraleLecture): Models.Emprunteur.IDetailPersonneMorale;
        static mapPersonnePhysique(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet): Models.Emprunteur.IPersonnePhysique;
        static mapInfosBDF(personne: RestModel.SchemaComplet.IPersonnePhysiqueComplet): Models.Emprunteur.IInfosBDF;
        static mapPersonnePhysiqueLecture(personne: RestModel.LireElement.IPersonnePhysiqueLecture): Models.Emprunteur.IDetailPersonnePhysique;
        static mapPersonnePhysiqueLectureToPersonnePhysique(personne: RestModel.AjouterPersonneAvecControles.IPersonnePhysiqueLecture): Models.Emprunteur.IPersonnePhysique;
        static mapPersonneMoraleLectureToPersonneMorale(personne: RestModel.AjouterPersonneAvecControles.IPersonneMoraleLecture): Models.Emprunteur.IPersonneMorale;
        static mapPersonneMaj(personne: Models.Emprunteur.IPersonne, typeRolePersonne: string, forcerAjout?: boolean): ICRest.Modeles.AjouterPersonneAvecControles.IPersonneMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.SchemaComplet;
    type IChargeOrCreditExistantComplet = RestModel.IChargeComplet | RestModel.ICreditExistantComplet;
    type IChargeMaj = ICRest.Modeles.AjouterCharge.IChargeMaj | ICRest.Modeles.MajElement.IChargeMaj;
    type ICreditExistantLecture = ICRest.Modeles.AjouterPhaseCreditExistant.ICreditExistantLecture | ICRest.Modeles.LireElement.ICreditExistantLecture;
    type IPhaseCreditExistantLecture = ICRest.Modeles.AjouterPhaseCreditExistant.IPhaseCreditExistantLecture | ICRest.Modeles.LireElement.IPhaseCreditExistantLecture;
    type IRessourceMaj = ICRest.Modeles.AjouterRessource.IRessourceMaj | ICRest.Modeles.MajElement.IRessourceMaj;
    class RevenusCharges {
        static mapChargeMaj(charge: Models.Emprunteur.IBudgetItem): IChargeMaj;
        static mapChargeAtoutClic(creditComplementaire: Models.Financement.ICreditComplementaireDetail): IChargeMaj;
        static mapCreditExistant(creditExistant: ICreditExistantLecture, phases: IPhaseCreditExistantLecture[]): Models.Emprunteur.ICreditExistant;
        static mapCreditExistantMaj(charge: Models.Emprunteur.IBudgetItem, creditExistant: Models.Emprunteur.ICreditExistant): ICRest.Modeles.MajElement.ICreditExistantMaj;
        static mapPhaseCreditExistantMaj(phase: Models.Emprunteur.IPhase): ICRest.Modeles.MajElement.IPhaseCreditExistantMaj;
        static mapRessourceMaj(revenu: Models.Emprunteur.IBudgetItem): IRessourceMaj;
        static mapRevenuFiscal(revenuFiscalLecture: ICRest.Modeles.LireElement.IRevenuFiscalLecture): Models.Emprunteur.IRevenuFiscal;
        static mapRevenuFiscalMaj(revenuFiscal: Models.Emprunteur.IRevenuFiscal): ICRest.Modeles.MajElement.IRevenuFiscalMaj;
        static mapRevenusCharges(intervenants: Models.Intervenants.IIntervenantsComplet): Models.Emprunteur.IRevenusCharges;
        static mapSyntheseFinanciere(endettement: RestModel.IEndettementComplet): Models.Emprunteur.ISyntheseFinanciere;
        private static getAffectationBudgetItemByIdws(idPersonne, personnes, emp);
        private static getCreditTypeByCode(code);
        private static getPeriodiciteByCode(code);
        private static getPhaseTypeByCode(code);
        private static mapCharge(c, personnes, emp?);
        private static mapRevenu(ress, personnes, emp?);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SurfaceFinanciere {
        static mapCompteDepotMaj(compte: Models.Emprunteur.ICompteHorsCe): RestModel.AjouterComptePersonne.ICompteDepotMaj;
        static mapDetailCompteCe(compte: Models.Emprunteur.ICompte, compteLecture: RestModel.LireElement.ICompteLecture): Models.Emprunteur.ICompte;
        static mapDetailCompteHorsCe(compte: Models.Emprunteur.ICompte, compteDepotLecture: RestModel.LireElement.ICompteDepotLecture): Models.Emprunteur.ICompteHorsCe;
        static mapDetailEpargne(epargne: Models.Emprunteur.IEpargne, epargneLecture: RestModel.LireElement.IFamilleEpargneLecture): Models.Emprunteur.IEpargne;
        static mapFamilleEpargneMaj(epargne: Models.Emprunteur.IEpargne): RestModel.AjouterFamilleEpargne.IFamilleEpargneMaj;
        static mapSurfaceFinanciere(intervenants: Models.Intervenants.IIntervenantsComplet): Models.Emprunteur.ISurfaceFinanciere;
        private static isCe(element);
        private static mapCompte(compte, personnes);
        private static mapDetailSyntheseEpargne(int);
        private static mapEpargne(epargne, personnes);
        private static mapPatrimoineEmprunteur(int);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Tiers {
        static mapIndentification(identification: RestModel.Tiers.Identification.IIdentification): Models.Tiers.IIdentification;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models;
    class TypeRessource {
        static mapTypeRessource(typeRessource: RestModel.TypeRessource.IScTypeRessource): Models.TypeRessource.ITypeRessource;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Financement;
    interface IMappedControlesAccessoire {
        controles: Models.Financement.IAccessoireControles;
        phasesControles: Models.Financement.IAccessoirePhasesControles;
    }
    /**
     * ModelTransformers de l'objet metier 'Accessoire'
     */
    class Accessoire {
        static mapAccessoireLie(credit: RestModel.SchemaComplet.ICreditInterneComplet, acc: RestModel.SchemaComplet.IAccessoireLieProduitComplet): BusinessModel.IAccessoireLieProduit;
        static mapAccessoireComplementaire(credit: RestModel.SchemaComplet.ICreditInterneComplet, acc: RestModel.SchemaComplet.IAccessoireComplementaireComplet): BusinessModel.IAccessoireComplementaire;
        static mapAccessoire(credit: RestModel.SchemaComplet.ICreditInterneComplet, accessoire: RestModel.SchemaComplet.IAccessoireLieProduitComplet | RestModel.SchemaComplet.IAccessoireComplementaireComplet, estAccessoireLieProduit: boolean): BusinessModel.IAccessoire;
        private static mapFraisAccessoire(accessoire);
        private static getLibellePeriodiciteAccessoire(codePeriodicite, controle);
        static mapControlesAccessoire(projet: RestModel.SchemaComplet.IAccessoireComplet): IMappedControlesAccessoire;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Credit-epargne-logement'
     */
    class CreditEpargneLogement {
        private static labelPriseEnCompteTrue();
        private static labelPriseEnCompteFalse();
        static mapCreditEpargneLogement(encoursEL: ICRest.Modeles.CalculerEncoursEL.IResultatCalculEnCoursEL, droitsAcquisEL: ICRest.Modeles.ListerDroitsAcquisEL.IResultatCalculELLecture, creditInterne: ICRest.Modeles.LireElement.ICreditInterneLecture, planFi: ICRest.Modeles.SchemaComplet.IPlanFinancementComplet, produit: ICRest.CreditParametre.Models.ChargerProduitFinancier.IScProduitFinancier): Models.Financement.IInfoPelCel;
        static mapDroitAcquis(droitAcquisELLecture: ICRest.Modeles.CalculerCreditEL.IDroitAcquisELLecture, liensParente: ICRest.CreditParametre.Models.ListerLienParente.IScLienParente[]): Models.Financement.IDroitsAcquis;
        static mapDroitsAPret(droitAPretELLecture: ICRest.Modeles.ListerDrotisAPretEL.IDroitAPretELLecture, index: number): Models.Financement.IDroitsAPret;
        static mapImpressionParam(idDossier: string, dureeAnneeCredit: number, taux: number, montant: number, echeance: number, droitsAcquis: Models.Financement.IDroitsAcquis[], droitsAPret: Models.Financement.IDroitsAPret[]): ICRest.Modeles.EditerDocumentEpargneLogement.ISdImpressionEL;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import ApiModel = ICRest.Modeles.LireElement;
    class CreditPhaseMapper {
        getPhases(produitFinancier: ICRest.CreditParametre.Models.ChargerProduitFinancier.IScProduitFinancier, ci: ApiModel.ICreditInterneLecture, listePhases: ApiModel.ICreditPhaseLecture[], listeComplementPhase: ApiModel.IComplementPhasePretCombineLecture[], listeParametreRevision: ApiModel.ICreditParamRevisionParPhaseLecture[], listePalierProgressif: ApiModel.ICreditPalierProgressionLecture[], listePalierProgressifCatalogue: ICRest.CreditParametre.Models.paliersDeProgressionParPhase.IScPaliersDeProgressionParPhase[], listeCreditParamIndexation: ApiModel.ICreditParamIndexationLecture[], tauxNbDecimals: number): Models.Financement.ICreditPhaseModel;
        private getCreditPhase(produitFinancier, phaseDuCredit, pap, ci, listeComplementPhase, listeParametreRevision, listePalierProgressif, listePalierProgressifCatalogue, listeCreditParamIndexation);
        private getCreditPhaseFromProduit(pap, ci, produitFinancier);
        private getQuotiteAmortissement(phaseDuCredit, cp);
        private getParametreRevision(phaseDuCredit, cp, listeCreditParamIndexation);
        private getJeuDeParametre(listeJeuxparamatre);
        private getParamIndexation(pi);
        private getPalierProgressif(palierCatalogue, palierProgresion?);
        private getModeExpressionTaux(CTFCAM, codeIndexTauxProgressifAmortissement);
        private getQuotiteCredit(quotient, montant);
        private getPhaseObligatoire(codeTypePhase, produitFinancier);
        private getLibellePhase(codeTypePhase, codeTypePretCbin);
        private getTaux(phase?);
        /**
         * genere un Id aléatoire
         */
        private getNewGuid();
        static mapPhaseCreditExistant(identifiantDossier: string, creditComplementaire: ICRest.Modeles.LireElement.ICreditExistantLecture): ICRest.Modeles.AjouterPhaseCreditExistant.IAjouterPhaseCreditExistant;
        static mapPhaseCreditExistantMaj(phase: ICRest.Modeles.LireElement.IPhaseCreditExistantLecture, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ICRest.Modeles.MajElements.IPhaseCreditExistantMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Credit'
     */
    class Credit {
        static mapCalculCredit(credit: ICRest.Modeles.CalculerCreditInterne.ICreditInterneLecture): Models.Financement.ICreditLecture;
        static majCredit(credit: Models.Financement.ICreditInterne, codeDeviseDossier: string, modeDefi: boolean): ICRest.Modeles.MajElement.ICreditInterneMaj;
        static mapNewCreditExistantLecture(dateInstuction: string, creditExistant: ICRest.Modeles.LireElement.ICreditExistantLecture, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ICRest.Modeles.LireElement.ICreditExistantLecture;
        static mapCreditExistantToUpdate(creditExistant: ICRest.Modeles.LireElement.ICreditExistantLecture, creditComplementaire: Models.Financement.ICreditComplementaireDetail): ICRest.Modeles.LireElement.ICreditExistantLecture;
        private static mapPropCommunesCreditExistant(creditComplementaire);
        static mapCreditExistantMaj(creditExistant: ICRest.Modeles.LireElement.ICreditExistantLecture): ICRest.Modeles.MajElements.ICreditExistantMaj;
        static mapCreditExistantDetail(creditExistant: ICRest.Modeles.LireElement.ICreditExistantLecture): Models.Financement.ICreditExistantDetail;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Financement;
    /**
     * ModelTransformers de l'objet metier 'Plan Financement'
     */
    class PlanFinancement {
        static mapPlanFinancement(planFinancement: RestModel.SchemaComplet.IPlanFinancementComplet): BusinessModel.IPlanFinancement;
        static mapCreditComplementaire(creditExistant: RestModel.SchemaComplet.ICreditExistantComplet): BusinessModel.ICreditComplementaire;
        static mapCreditExistant(creditExistant: RestModel.SchemaComplet.ICreditExistantComplet): Models.Financement.ICreditExistant;
        static mapCreditAjustable(credit: RestModel.LireElement.ICreditInterneLecture, produitFinancier: Models.Financement.IProduitFinancier): Models.Financement.ICreditInterneAjustable;
        private static mapAjustementTaux(data);
        private static mapTauxFuture(data);
        static mapCreditInterne(credit: RestModel.SchemaComplet.ICreditInterneComplet, produitFin: ICRest.CreditParametre.Models.ChargerProduitFinancier.IScProduitFinancier, accessoiresLies: BusinessModel.IAccessoireLieProduit[], accessoiresComplementaires: BusinessModel.IAccessoireComplementaire[], creditLecture?: RestModel.LireElement.ICreditInterneLecture, phases?: RestModel.LireElement.ICreditPhaseLecture[], infoPelCel?: Models.Financement.IInfoPelCel): BusinessModel.ICreditInterne;
        static mapConventionBonification(creditBonif: RestModel.SchemaComplet.ICreditBonificationComplet): BusinessModel.ICreditBonification;
        private static mapInfoPTZ(creditLecture, phases);
        private static mapPhasePTZ(phase);
        static mapProduitFinancier(produitFin?: ICRest.CreditParametre.Models.ChargerProduitFinancier.IScProduitFinancier, produitFinancierComplet?: RestModel.SchemaComplet.IProduitFinancierComplet): BusinessModel.IProduitFinancier;
        private static mapCreditsInternes(listeCredit, listeAccessoiresLies, listeAccessoiresComplementaires);
        static mapCreditsExternes(listeCredit: RestModel.SchemaComplet.ICreditExterneComplet[]): BusinessModel.ICreditExterne[];
        private static getAccessoiresLies(credit, listeAccessoiresLies);
        private static getAccessoiresComplementaires(credit, listeAccessoiresComp);
        static getLibelleCodePeriodeCredit(code: number): string;
        static mapPlanFinancementMaj(data: BusinessModel.IPlanFinancementMajRequest): ICRest.Modeles.MajElements.IElementMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class Produit {
        /**
         * Map les données REST d'un projet vers le format du business
         * @param projet Projet au format REST
         * @param bienFinance Partie bien finance du projet
         */
        static mapListeFamilleProduit(listeFamille: RestModel.ListerProdEtFamAuto.IScFamillesDeProduits[]): Models.Financement.IFamilleProduit[];
        private static mapFamilleProduit(famille);
        private static mapProduit(produit);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import LireElementModel = ICRest.Modeles.LireElement;
    import RestModel = ICRest.Modeles;
    class Synthese {
        static mapSyntheseFinancement(syntheseComplet: RestModel.SchemaComplet.ISynthesePlanFinancementComplet, endettementComplet: RestModel.SchemaComplet.IEndettementComplet): Models.Financement.ISyntheseFinancement;
        private static mapResultatControle(listeResultatControle);
        static mapHistogrammeSynthese(restHisto: RestModel.SchemaComplet.IHistogrammeCredits): Models.Financement.IHistogrammeSynthese;
        /**
         * Permet de retrouver tous les paliers de tous les crédits, et d'appliquer les manquants sur chaque crédits
         * afin que tous les crédits aient les mêmes paliers. Un palier à chaque début ou fin de période
         * @example : un crédit de 300 mois, un autre de 192 avec un décalage de 30 mois, on aura sur tous les crédits les paliers
         * 1 > 30 ; 31 > 222 ; 223 > 300... avec le montant qui va bien sur chaque crédit
         * @param synth
         */
        private static fusionnerPaliers(synth);
        static mapSyntheseCredits(listeCredits: LireElementModel.ICreditInterneLecture[], phases: LireElementModel.ICreditPhaseLecture[], codeDeviseDossier: string): Models.Financement.ICreditSynthese[];
        /**
         * Calcule le coût total du crédit
         *  => somme des montants des accessoires et du coût des accessoires - le montant du capital emprunté
         * @param credit
         * @param montantCapital
         * @param estDeviseDossier
         */
        private static calculateCoutTotalCredit(credit, montantCapital, estDeviseDossier);
        private static getTypeTaux(credit);
        private static mapCreditSynthese(credit, phases, codeDeviseDossier);
        private static mapPhaseCreditSynthese(phase, credit, estDeviseDossier);
        private static mapJustificationTegCreditSynthese(echeancesJustifiees);
        private static mapFraisCreditSynthese(groupeJustificationTeg);
        private static mapCreditSyntheseComplet(credit);
        private static mapCreditExterneSyntheseComplet(credit);
        private static mapPalierEcheanceExterne(credit);
        private static mapPalierEcheance(phases);
        private static mapEcheanceCreditSyntheseComplet(echeance);
        private static mapPhaseCreditSyntheseComplet(phase, estCRD);
        private static mapSyntheseFinanciere(endettement, syntheseComplet);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Garanties;
    /**
     * ModelTransformers de l'objet metier 'Assurance'
     */
    class Garantie {
        /** Index du choix "Minimum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMin;
        /** Index du choix "Maximum" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixMax;
        /** Index du choix "Conseillé" dans la liste renvoyé par Néo pour les taux/montants */
        private static indexChoixConseille;
        static mapGarantie(garantieLecture: ICRest.Modeles.LireElement.IGarantieLecture, couverturesLecture: ICRest.Modeles.LireElement.ICouvertureCreditLecture[], cotisationsLecture: ICRest.Modeles.LireElement.ICotisationLecture[], nature: Models.Garanties.INatureGarantie, convention: ICRest.Modeles.ListerConventionsGarantie.IScConventionGarantie, creditsInternes: Models.Financement.ICreditInterne[], accessoires: ICRest.CreditParametre.Models.ListerTypeFraisAccessoire.IScTypeAccessoire[], typeFraisGarantie: ICRest.CreditParametre.Models.TypeFraisGarantie.IScTypesDeFraisGarantie, personne: ICRest.Modeles.LireElement.IPersonnePhysiqueLecture, listeBeneficiaire: Models.Common.ICodeLabel<string>[], dossierLecture: ICRest.Modeles.LireElement.IDossierLecture, listePacteCommissoire: Models.Common.ICodeLabel<number>[], parametrePacteCommissoire: Models.Garanties.IParametragePacteCommissoire, objetPorteEnGarantieLecture: ICRest.Modeles.LireElement.IBienPorteEnGarantieLecture, toc: ICRest.CreditParametre.Models.ListerTypeObjetCommercial.IScTypeObjetCommercialiseToc): BusinessModel.IGarantie;
        private static getLibellePersonne(p);
        static mapCouvertures(couverturesLecture: ICRest.Modeles.LireElement.ICouvertureCreditLecture[], cotisationsLecture: ICRest.Modeles.LireElement.ICotisationLecture[], creditsInternesGarantie: Models.Financement.ICreditInterne[], accessoires: ICRest.CreditParametre.Models.ListerTypeFraisAccessoire.IScTypeAccessoire[], convention: ICRest.Modeles.ListerConventionsGarantie.IScConventionGarantie, typeFraisGarantie: ICRest.CreditParametre.Models.TypeFraisGarantie.IScTypesDeFraisGarantie): BusinessModel.ICouverture[];
        private static mapCotisations(cotisationsLecture, accessoires, convention, codeDevise, typeFraisGarantie);
        private static defineTypeSaisie(codeModeCalcul);
        /**
         * Récupère les listes de taux/montants associés : borne min [0], borne max [1], valeur conseillée [2]
         * La liste est renvoyée dans l'ordre croissant : min, max, conseillé
         */
        private static defineListeConseilleConventionnee(data, valueSaved);
        private static defineListeConseilleFromTypeFrais(typeFraisGarantie, valueSaved);
        private static defineIfNumberAreEquals(value1, value2, precision);
        private static defineBornesConventionnee(data);
        private static defineBornesMontantFromTypeFrais(typeFraisGarantie);
        private static defineBornesTauxFromTypeFrais(typeFraisGarantie);
        /**
         * Calcul le montant quotité en fonction de celui qui est renseigné
         * @param montantCapitalCredit
         * @param montantCouvert
         * @param quotientCouverture
         * @returns [montant, quotient]
         */
        private static getMontantCouvertQuotiteTuple(montantCapitalCredit, montantCouvert, quotientCouverture);
        private static mapTypeFrais(cotisationLecture, accessoires);
        private static mapFinancable(garantieLecture, typeFraisGarantie);
        private static defineModeFinancement(convention, typeFraisGarantie);
        static mapGarantieBase(garantieComplet: RestModel.SchemaComplet.IGarantieComplet): BusinessModel.IGarantieBase;
        static mapListeGarantie(garantiesComplet: RestModel.SchemaComplet.IGarantieComplet[]): BusinessModel.IGarantieBase[];
        private static defineBeneficiaireVisible(controles);
        static mapListeNaturesGarantie(natures: ICRest.CreditParametre.Models.ListerNatureGarantie.IScNatureGarantie[], infosGarantiesConseillees: ICRest.Modeles.ListerInformationGarantie.IScInformationGarantie[]): BusinessModel.INatureGarantie[];
        private static mapNatureGarantie(nature);
        private static mapNatureGarantieFromInfoGarantie(nature, infoGarantie);
        private static defineTypeSurete(surete);
        static mapListeConventions(conventions: ICRest.Modeles.ListerConventionsGarantie.IScConventionGarantie[]): BusinessModel.IConvention[];
        static mapConvention(convention: ICRest.Modeles.ListerConventionsGarantie.IScConventionGarantie): BusinessModel.IConvention;
        private static defineIfHasFrais(convention);
        private static defineIfConventionHasCotisations(convention);
        /**
         * Si la nature de la garantie a sa valeur sureté égale à "reelle" (0) ou "autre" (2), c'est une valeur en montant qu'on attend
         * s'il y a une convention, on détermine si la couverture est en taux ou en montant en fonction du modeDexp
         * si pas de convention, on regarde sur la couvertureLecture
         * toutes les couvertures on le même type de couverture (montant ou taux), on peut donc regarder sur la première
         * règle : si montantCouverture est égal à 0, ça veut dire qu'on est en taux
         * @param convention
         * @param couvertures
         * @param nature
         */
        private static defineTypeCouverture(convention, couvertures, nature);
        static mapGarantOrganismeCautionnement(result: ICRest.Modeles.LirePersonne.IResultat): Models.Emprunteur.IGarant;
        static mapCouvertureMaj(couverture: Models.Garanties.ICouverture, typeCouverture: Enum.TypeCouverture): ICRest.Modeles.MajElements.ICouvertureCreditMaj;
        static mapCotisationMaj(cotisation: Models.Garanties.ICotisation): ICRest.Modeles.MajElements.ICotisationMaj;
        static defineCodeIndiceSaisieMontantMaj(blocageSaisieMontantCotisation: boolean): number;
        static mapCotisationMajPourSaveGarantie(cotisation: Models.Garanties.ICotisation, garantie: Models.Garanties.IGarantie): RestModel.MajElements.ICotisationMaj;
        private static defineFractionFinancierMax(financable);
        private static mapObjetPorteEnGarantie(objetPorteEnGarantieLecture, toc);
        private static defineTypeObjetPorteEnGarantie(typeObjetCommercialisation);
        static mapResultatCEGC(result: ICRest.Modeles.TraiterReponseCEGC.IResultatTraitementCegc): Models.Garanties.IResultatTraitementCEGC;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class ObjetPorteEnGarantieTranformer {
        static transformeWrapperToBienPorteEnGarantie(bienPorteEnGarantie: Models.Garanties.IBienPorteEnGarantieAdmin, objetPorteGarantie: GarantieCredit.DTO.ObjetPorteGarantie.IObjetPorteGarantie): Models.Garanties.IBienPorteEnGarantieAdmin;
        /**
         * Récupération de l'attribut BienPorteEnGarantie en fonction du wrapper
         */
        private static getBienPorteEnGarantie(bienPorteEnGarantie, definitionObjet, libelleObjet);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Evenement {
        /**
         * Fonction pour 'mapper' une liste d'événements ICRest en une liste d'événements ICBusiness
         * @param eventRest
         */
        static mapEvenements(eventsRest: ICRest.Modeles.LireElement.IEvenementLecture[]): ICBusiness.Models.Historique.IEvenement[];
        /**
         * Fonction pour 'mapper' un événement ICRest en événement ICBusiness
         * @param eventRest
         */
        static mapEvenement(eventRest: ICRest.Modeles.LireElement.IEvenementLecture): ICBusiness.Models.Historique.IEvenement;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class InterroBdfTransformer {
        static mapIInterroBFDModele(interditBancaireLecture: ICRest.Modeles.LireElement.IInterditBancaireLecture, oppositionsLecture: ICRest.Modeles.LireElement.IOppositionLecture[], cleBdf: string, typeLoi: number, interditFICP: boolean): Models.InterroBDF.IInterroBDFModele;
        static mapIInterditBancaireMaj(interroBdfModel: Models.InterroBDF.IInterroBDFModele): ICRest.Modeles.MajElements.IInterditBancaireMaj;
        /**
         * Construit un objet IResultBDF en fonction du retour de l'interrogation
         * @param personneBdf
         */
        static mapIResultBDF(personneBdf: myway.comRisquesClient.Model.PersonneBDF): Models.InterroBDF.IResultBDF;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import RestParamModel = ICRest.CreditParametre.Models;
    import ModalitesModel = Models.Modalites;
    type IPayeurMaj = RestModel.AjouterPayeur.IPayeurMaj | RestModel.MajElement.IPayeurMaj;
    class Modalites {
        private static controleGadCompteSupport;
        private static controleGadMultiPayeur;
        private static controleGadRaTauxIndemnite;
        private static controleGadRaSurcoutTaux;
        private static modalitesIndemnite;
        private static modalitesRetard;
        private static modalitesReduction;
        static mapCredit(credit: RestModel.SchemaComplet.ICreditInterneComplet, listeComptes?: RestModel.SchemaComplet.ICompteComplet[], listePersonnes?: Models.Emprunteur.IPersonne[]): ModalitesModel.ICredit;
        private static getIntitulePayeurPrincipal(payeurs, personnes);
        /**
         * Retourne une liste de FluxFinancier comprenant les payeurs principaux du crédits et les éventuels "de secours"
         * @param payeurs
         * @param comptes
         * @param personnes
         * @param creditDevise
         */
        private static mapListePayeurCredits(payeurs, comptes, personnes, creditDevise);
        static mapModalites(gestionAdminComplet: RestModel.SchemaComplet.IGestionAdministrativeComplet, codeDeviseDossier: string): ModalitesModel.IModalites;
        /**
         * Retourne une liste des devises des crédits
         * Max 2 devises possible. Si 2 devises présentes, l'euro sera situé en premier.
         * @param credits
         */
        static getListeDevisesCredits(credits: ModalitesModel.ICredit[]): string[];
        static mapModaliteRemboursementAnticipe(remboursementAnticipeRestModel: RestParamModel.RemboursementAnticipe.IScRemboursementAnticipe): Models.Common.ICodeLabel<number>;
        static mapModalitesCalculImpaye(modaliteImpaye: RestParamModel.ModalitesImpayes.IScModalitesDImpayesParSecteurEtCatEmprunteur): ModalitesModel.ITypeModaliteCalculImpaye;
        static mapCreditModaliteMaj(credit: ModalitesModel.ICredit, fullObject: boolean): RestModel.MajElement.ICreditModaliteMaj;
        static mapJourEcheanceCreditMaj(identifiantCredit: string, jourEcheance: number): RestModel.MajElement.ICreditInterneMaj;
        static mapAvisEcheanceCreditMaj(identifiantCredit: string, avisEcheance: boolean): RestModel.MajElement.ICreditInterneMaj;
        static mapJustificatifCreditMaj(identifiantCredit: string, declenchementVersements: ModalitesModel.IDeclenchementVersements): RestModel.MajElement.ICreditInterneMaj;
        static mapModalitesDossierMaj(identifiantDossier: string, modalites: ModalitesModel.IModalites): RestModel.MajElement.IDossierMaj;
        static mapPayeurMaj(payeur: ModalitesModel.IFluxFinancier, payeurSecondaire?: ModalitesModel.IFluxFinancier): IPayeurMaj;
        static mapPayeurImpayeMaj(identifiantDossier: string, payeurImpaye: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): RestModel.MajElement.IDossierMaj;
        static mapPayeurImpayeInit(identifiantDossier: string, estImpayeDeviseDossier: boolean): RestModel.MajElement.IDossierMaj;
        static mapTraitementInteretsIntercalairesCreditMaj(credit: Models.Modalites.ICredit, produitFinancier: RestParamModel.ChargerProduitFinancier.IScProduitFinancier): RestModel.MajElement.ICreditInterneMaj;
        static mapTraitementInteretsIntercalairesCreditModaliteMaj(credit: Models.Modalites.ICredit): RestModel.MajElement.ICreditModaliteMaj;
        static mapVersementMaj(identifiantDossier: string, listeIdsCredits: string[], versement: ModalitesModel.IFluxFinancier, codeDeviseDossier: string): RestModel.MajElements.IElementMaj[];
        static mapVersementInit(identifiantDossier: string, listeIdsCredits: string[], estVersementDeviseDossier: boolean): RestModel.MajElements.IElementMaj[];
        static transformModalitesCalculImpaye(modaliteImpayeRestModel: RestParamModel.ModalitesImpayes.IScModalitesDImpayesParSecteurEtCatEmprunteur): Models.Common.ICodeLabel<string>;
        static transformTraitementInteretsIntercalaires(traitementInteretsIntercalaires: RestParamModel.Constante.IScConstante): Models.Common.ICodeLabel<string>;
        static mapEchelleVersement(echelle: RestParamModel.ChargerEchellesVersement.IScEchelleVersement): Models.Modalites.IEchelleVersement;
        private static mapLibelleAssietteEchelle(codeAssiette);
        private static mapLibelleTypeEchelle(codeTypeEchelle);
        private static mapLibelleComportementEchelle(codeComportement);
        private static mapEchelonVersement(echelon);
        /**
         * Renvoi le mode de recouvrement par déduction ; soit Copro (un payeur par crédit), soit multipayeur (plusieurs par crédit), soit monopayeur (un seul pour tous les crédits)
         * @param gestionAdminComplet
         * @param listeCredit
         */
        private static getModeRecouvrement(gestionAdminComplet, listeCredit);
        private static getCompteFromNumero(listeComptes, listePersonnes, numeroCompte);
        private static getLabelCompte(compte);
        private static mapCalculImpaye(retenueImpaye, code, isReadOnly?);
        private static mapCalculsImpayes(retenuesImpayes);
        private static mapCompte(compte, personne);
        private static mapContrat(gadm);
        private static mapDeclenchementVersements(credit);
        private static mapFluxFinancier(compte, modeDeReglement, codeModeReglement, codeDevise, estRecouvrement?);
        private static mapModeDeReglement(codeTypeDomiciliation, libelleDeReglement);
        private static mapPayeur(payeur, compte, personne, codeDevise, principal);
        private static mapPayeurPrincipal(credit);
        static mapPersonne(personneComplet: RestModel.SchemaComplet.IPersonneComplet): Models.Emprunteur.IPersonne;
        private static mapRemboursementAnticipe(taux, code, label, isSurcout?);
        private static mapRemboursementsAnticipes(creditModalite);
        private static mapTraitementInteretsIntercalaires(creditModalite);
        private static mapVersementCreditMaj(idCredit, numeroCompteVersement, codeModeDeVersement, codeModeReglement);
        private static mapVersementDossierMaj(identifiantDossier, codeModeReglement, codeDevise, codeDeviseDossier);
        static mapMontantConvenuDossierMaj(identifiantDossier: string, montantConvenu: number): RestModel.MajElement.IDossierMaj;
        private static transformCompte(compte);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models;
    class InformationsAgent {
        static mapInformationsAgent(data: RestModel.InfoAgent.IScInformationAgent): Models.Habilitation.IInformationsAgent;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Impression {
        /**
         * Méthode pour 'mapper' le résultat d'un édition de document en Models.Impression.IImpression
         * @param anomalies liste de ICRest.Modeles.LireElement.IAnomalieLecture
         * @param documents liste de ICRest.Impression.Models.IDocument
         * @param idDossier identifiant du dossier en instruction
         * @param estDocOffre booléen par défaut à false
         */
        static mapImpression(anomalies: RestModel.LireElement.IAnomalieLecture[], documents: ICRest.Impression.Models.IDocument[], idDossier: string, estDocOffre?: boolean): Models.Impression.IImpression;
        /**
         * Méthode pour 'mapper' des ICRest.Impression.Models.IDocument en ICBusiness.Models.Impression.IDocument
         * @param docs liste de ICRest.Impression.Models.IDocument
         * @param estDocOffre booléen par défaut à false
         */
        static mapDocuments(docs: ICRest.Impression.Models.IDocument[], estDocOffre?: boolean): ICBusiness.Models.Impression.IDocument[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class LisaContract {
        static mapContexteCreationConnaissanceClient(criteres: MyWay.Model.Client, personneMorale: boolean, rattachement?: boolean, identifiantPersonne?: string): ICBusiness.Models.Navigation.LisaContract.GERR_EMPR_CRDT.ICreationClientContext;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class PiecoTransformer {
        static mapPieceMaj(piece: Models.IPiece): ICRest.Modeles.MajElement.IPieceMaj;
        static defineIdentifiantClasse(piece: Models.IPiece): string;
        /**
         * Créé les liste des pièces associées à leur sous titre
         * @param dataPieco
         * @param client détermine s'il faut créer une liste de pièces client ou pièces agence (true: piece client, false: pièce agence)
         */
        static createListePiecoModeles(dataPieco: ICRest.Modeles.CalculerPiecesEtControles.IResultatPiecesEtControles, typePiece: Enum.EnumTypePiece): Models.IPiecoModele[];
        /**
         * retourne la liste des pièces
         * @param listePieces
         * @param dataPieco
         */
        private static findtlistPieces(listePieces, dataPieco, typePiece);
        /**
         * Set IPiece datas
         * @param piece
         * @param processus
         */
        static mapPiece(piece: ICRest.Modeles.CalculerPiecesEtControles.IControleManuelLecture | ICRest.Modeles.CalculerPiecesEtControles.IPieceLecture, processus: Models.Common.ICodeLabel<string>, typePiece: Enum.EnumTypePiece): Models.IPiece;
        private static mapAnciensAvisEtStatut(histAgence, histBoOuConformite);
        /**
         * Définit le libellé de la pièce
         * @param piece
         */
        private static defineLibellePiece(piece);
        /**
         * Définit le libellé d'acquisition pour le mapage des pièces
         * @param code
         */
        private static constructAcquisition(code);
        /**
         * Récupère l'historique du type d'acteur que l'on recherche: Agent OU (BO ou Conformité)'
         * @param histControles
         * @param typeActrs
         */
        private static getHistActr(histControles, typeActrs);
        /**
         * Trouve le libelle du processus à afficher en fonction de l'identifiant processus
         * @param dataPieco
         * @param identifiantProcessusAuPlusTard
         */
        private static findProcessusFromDataPieco(dataPieco, identifiantProcessusAuPlusTard);
        /**
         * Set Erreur Dossier Numerique et verification si le contexte est bien présent pour le cas des caisses non pilotes
         * @param titre
         * @param contexte
         */
        static mapErreurDossierNumerique(titre: string, contexte: ICRest.Modeles.CalculerPiecesEtControles.IContexteDossierNumeriqueLecture): Models.IErreurDossierNumerique;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class ButLocatif {
        static mapButLocatif(butLocatifLecture: ICRest.Modeles.LireElement.IButLocatifLecture, natures: Models.Common.CodeLabel<string>[]): Models.ButLocatif.IButLocatif;
        static mapListeNatureAvantageFiscal(liste: ICRest.CreditParametre.Models.ListerNatureAvantageFiscal.IScAdrNatureAvantageFiscal[]): Models.Common.CodeLabel<string>[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class DetailEcoPtz {
        static mapTravauxFinances(travauxLecture: ICRest.Modeles.LireElement.ITravauxFinancesLecture, ecoPretComplementaireActif: boolean, isEcoBouquet: boolean): Models.DetailEcoPtz.ITravauxFinancesLecture;
        static mapDetailsCoutObjet(detailsLecture: ICRest.Modeles.LireElement.IDetailCoutObjetLecture[]): Models.DetailEcoPtz.IDetailCoutObjet[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class ObjetFinance {
        static mapProjetImmobilier(projetImmoLecture: ICRest.Modeles.LireElement.IProjetImmobilierLecture): Models.ObjetFinance.IProjetImmobilier;
        private static printTypeAcquisition(projet);
        static mapBatimentHabitableFinance(bHFLecture: ICRest.Modeles.LireElement.IBatimentHabitableFinanceLecture): Models.ObjetFinance.IBatimentHabitableFinance;
        static mapTravauxFinances(travauxFinancesLecture: ICRest.Modeles.LireElement.ITravauxFinancesLecture, batimentHabitableFinance: Models.ObjetFinance.IBatimentHabitableFinance): Models.ObjetFinance.ITravauxFinances;
        static mapSoulteFinance(soulteFinanceLecture: ICRest.Modeles.LireElement.ISoulteFinanceeLecture): Models.ObjetFinance.ISoulteFinance;
        static mapConstructionFinancee(constructionFinanceeLecture: ICRest.Modeles.LireElement.IConstructionFinanceeLecture): Models.ObjetFinance.IConstructionFinancee;
        static mapPromotionImmobiliere(promotionImmobiliereLecture: ICRest.Modeles.LireElement.IPromotionImmobiliereLecture): Models.ObjetFinance.IPromotionImmobiliere;
        static mapTerrainFinance(terrainFinanceLecture: ICRest.Modeles.LireElement.ITerrainFinanceLecture): Models.ObjetFinance.ITerrainFinance;
        static mapBienSousJacent(bienSousJacentLecture: ICRest.Modeles.LireElement.IBienSousJacentLecture | ICRest.Modeles.LireElement.ITerrainSousJacentLecture): Models.ObjetFinance.IBienSousJacent;
        static mapProjetImmobilierMaj(projetImmo: Models.ObjetFinance.IProjetImmobilier): ICRest.Modeles.MajElements.IProjetImmobilierMaj;
        static mapBatimentHabitableFinanceMaj(bHF: Models.ObjetFinance.IBatimentHabitableFinance, idReamenagement: string): ICRest.Modeles.MajElements.IBatimentHabitableFinanceMaj;
        static mapConstructionFinanceMaj(construFinance: Models.ObjetFinance.IConstructionFinancee): ICRest.Modeles.MajElements.IConstructionFinanceeMaj;
        static mapTravauxFinancesMaj(travauxFinances: Models.ObjetFinance.ITravauxFinances): ICRest.Modeles.MajElements.ITravauxFinancesMaj;
        static mapTerrainFinanceMaj(terrainFinance: Models.ObjetFinance.ITerrainFinance): ICRest.Modeles.MajElements.ITerrainFinanceLecture;
        static mapSoulteFinanceMaj(soulteFinance: Models.ObjetFinance.ISoulteFinance): ICRest.Modeles.MajElements.ISoulteFinanceeLecture;
        static mapBienSousJacentMaj(bienSousJacent: Models.ObjetFinance.IBienSousJacent): ICRest.Modeles.MajElements.IBienSousJacentMaj;
        static mapTerrainSousJacentMaj(bienSousJacent: Models.ObjetFinance.IBienSousJacent): ICRest.Modeles.MajElements.ITerrainSousJacentMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles.MajElements;
    class Prescripteur {
        static mapPrescripteurContexteSdpi(contexte: Models.Common.IContext, dossierLecture: ICRest.Modeles.LireElement.IDossierLecture, infosAgent: Models.Habilitation.IInformationsAgent, emprunteurComplet: ICRest.Modeles.SchemaComplet.IEmprunteurComplet, personneLecture: ICRest.Modeles.LireElement.IPersonnePhysiqueLecture): Models.Projet.IPrescripteurContexteIn;
        /** Map les données de mise à jour d'un prescripteur vers le format REST */
        static mapPrescripteurMaj(identifiantDossier: string, contexte: Models.Projet.IPrescripteurContexteOut): RestModel.IDossierMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'ProjetImmo'
     */
    class ProjetImmo {
        /**
         * Map les données au format REST pour la mise à jour d'un projet immobilier
         */
        static getEmptyProjetImmobilierMajRequest(): ICRest.Modeles.DefinirProjet.IProjetImmobilierMaj;
        static mapProjetImmoMaj(projetImmo: Models.ProjetImmo.IProjetImmo): RestModel.MajElements.IProjetImmobilierMaj;
        mapProjetImmoUsageBien(projetImmo: Models.ProjetImmo.IProjetImmo): RestModel.MajElements.IProjetImmobilierMaj;
        static mapBatimentHabitableFinanceMaj(batiment: Models.ProjetImmo.IBatimentHabitableFinanceComplet): RestModel.MajElements.IBatimentHabitableFinanceMaj;
        static mapConstructionFinanceMaj(construction: Models.ProjetImmo.IConstructionFinancee): RestModel.MajElements.IConstructionFinanceeMaj;
        static mapTravauxFinancesMaj(travaux: Models.ProjetImmo.ITravauxFinancesComplet): RestModel.MajElements.ITravauxFinancesMaj;
        static mapSoulteFinanceeMaj(soulte: Models.ProjetImmo.ISoulteFinanceComplet): RestModel.MajElements.ISoulteFinanceeMaj;
        static mapTerrainFinanceMaj(terrain: Models.ProjetImmo.ITerrainFinanceComplet): RestModel.MajElements.ITerrainFinanceMaj;
        static mapBienAVendreMaj(bien: Models.ProjetImmo.IBienAVendreComplet): RestModel.MajElements.IBienAVendreMaj;
        static mapInformationsComplementairesSCIMaj(information: Models.ProjetImmo.IInformationsComplementairesSCI): RestModel.MajElements.IInformationsComplementairesSCIMaj;
        static mapBienDetailleMaj(): RestModel.MajElements.IBienDetailleMaj;
        static mapDetailCoutObjMaj(codeNatureTravaux: string, champsTravaux: Models.ParamCoutTravauxEcoPtz.IParamTypologietField[]): RestModel.DefinirDetailCoutObj.IDetailCoutObjetMaj[];
        static mapTravauxFinancesEcoPtzMaj(travauxFinances: Models.DetailEcoPtz.ITravauxFinancesLecture): RestModel.MajElements.ITravauxFinancesMaj;
        static mapProjetImmobilierLecture(projetImmobilier: ICRest.Modeles.LireElement.IProjetImmobilierLecture): Models.ProjetImmo.IProjetImmobilierLecture;
        static mapProjetImmoCodeConditionDerogationPourPtzMaj(idProjet: string, codeConditionDerogationPourPtz: Models.Common.ICodeLabel<string>, projImm: Models.ProjetImmo.IProjetImmobilierLecture): ICRest.Modeles.MajElements.IProjetImmobilierMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class Projet {
        /**
         * Map les données REST d'un projet Complet
         * @param projet
         */
        static mapProjetCommun(projet: RestModel.SchemaComplet.IProjetComplet): Models.Projet.IProjetCommun;
        /**
         * Map les données REST d'un projet vers le format du business
         * @param projet Projet au format REST
         * @param bienFinance Partie bien finance du projet
         */
        static mapProjet(projet: RestModel.SchemaComplet.IProjetNonImmobilierComplet): Models.Projet.IProjet;
        /**
         * Map les données d'affichage des controles
         * @param projet
         */
        private static mapControlesProjet(projet);
        /**
         * Map les données REST d'un projet vers le format du business
         * @param projet Projet au format REST
         * @param bienFinance Partie bien finance du projet
         */
        static mapProjetImmo(projet: RestModel.SchemaComplet.IProjetImmobilierComplet, infoCompSCIComplet: RestModel.SchemaComplet.IInformationsComplementairesSCIComplet): Models.ProjetImmo.IProjetImmo;
        /**
         * Map les propriétés propre à un projet Immobilier
         * @param projet
         */
        private static mapUniqueProjetImmo(projet, infoCompSCIComplet);
        /**
         * Map les données d'affichage des controles
         * @param projet
         */
        private static mapControlesProjetImmo(projet);
        /**
         * Map les données au format REST pour la mise à jour d'un projet
         * @param idProjet Identifiant du projet
         */
        static getEmptyProjetMajRequest(): ICRest.Modeles.DefinirProjet.IProjetNonImmobilierMaj;
        static mapProjetNonImmoMaj(data: Models.Projet.IProjet, isPro: boolean): ICRest.Modeles.MajElements.IProjetNonImmobilierMaj;
        static mapBienVendreMaj(ventilation: Models.Projet.IVentilation): ICRest.Modeles.MajElements.IBienAVendreMaj;
        static mapVentilationMaj(ventilation: Models.Projet.IVentilation): ICRest.Modeles.MajElements.ITresorerieFinanceeMaj | ICRest.Modeles.MajElements.IBienDetailleMaj;
        static mapVentilation(projet: ICRest.Modeles.SchemaComplet.IProjetNonImmobilierComplet): Models.Projet.IVentilation;
        static mapDescriptionProjetMajRequest(idProjet: string, canalRelation: string, origineCommerciale: number, typeVente: number, hasPrescripteur: boolean, cadreFiscal?: Models.Common.ICodeLabel<string>): ICRest.Modeles.MajElement.IDossierMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class Reamenagement {
        static mapCreditInterne(pret: ICRest.Modeles.LireElement.IPretReamenageLecture, complement: ICRest.Modeles.LireElement.IInfoRegroupementLecture): Models.Reamenagement.IPretInterneReamenageDetaille;
        static replaceInfoComplement(pret: Models.Reamenagement.IPretInterneReamenageDetaille, complement: ICRest.Modeles.LireElement.IInfoRegroupementLecture): void;
        static mapCreditExterne(pretReamenage: ICRest.Modeles.LireElement.IPretReamenageLecture, complement: ICRest.Modeles.LireElement.IInfoRegroupementLecture, estRegroupement: boolean): Models.Reamenagement.IPretExterneReamenageDetaille;
        static maplistePretInternes(details: ICRest.Modeles.ListerDetailsPretsRea.IResultatListerPretReamenageableLecture, dateTraitement: string): Models.Reamenagement.IListerPretsReamenageableResult;
        private static getLibelleOrigine(codeOrigineApplicationGestionCredit);
        static mapReamenagement(r: ICRest.Modeles.SchemaComplet.IReamenagementComplet): Models.Reamenagement.IReamenagement;
        static mapPret(p: ICRest.Modeles.SchemaComplet.IPretReamenageComplet): Models.Reamenagement.IPretReamenagement;
        static getLibelleSommeRestant(catRea: Models.Reamenagement.CategorieReamenagementEnum): string;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.CreditParametre.Models.ObjetCommercialiseToc;
    /**
     * ModelTransformers de l'objet metier 'Projet'
     */
    class TocTor {
        static codeConsoAffecte: string;
        static libelleConsoAffecte: string;
        static codeTresorerieNonAffecte: string;
        static libelleTresorerieNonAffecte: string;
        static codePop: string;
        static libellePop: string;
        static codeTresoEcoLocale: string;
        static libelleTresoEcoLocale: string;
        static codeEquipementEcoLocale: string;
        static libelleEquipementEcoLocale: string;
        static codeSubordonnes: string;
        static libelleSubordonnes: string;
        static codeImmo: string;
        static libelleImmo: string;
        static libelleHabitatPro: string;
        /**
         * Map la liste des TOC/TOR (format REST) vers le format business
         * @param restData
         */
        static mapListeTocTor(natureProjet: Enum.NatureProjetEnum, restData: RestModel.IScTypeObjetCommercialiseToc[]): Models.Projet.INatureFinancement[];
        private static mapToc(toc);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class Expertise {
        static mapResultatExpertise(retourExpertise: ICRest.Modeles.TraiterExpertisePvh.IResultatLireExpertisePVH): Models.Pvh.IRetourExpertise;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Pvh;
    /**
     * ModelTransformers de l'objet metier 'GarantiePrincipale'
     */
    class GarantiePrincipale {
        static mapListeTocTor(datas: ICRest.CreditParametre.Models.ObjetCommercialiseToc.IScTypeObjetCommercialiseToc[]): Models.Common.ICodeLabel<string>[];
        static mapGarantiePrincipale(garantieComplet: RestModel.SchemaComplet.IGarantieComplet): BusinessModel.IGarantiePrincipale;
        static mapGarantieContenu(garantieLecture: RestModel.LireElement.IGarantieReelleLecture, hypothequeImmobiliereLecture: RestModel.LireElement.IHypothequeImmobiliereLecture, garantieToComplete: BusinessModel.IGarantiePrincipale, lotsLecture: ICRest.Modeles.LireElement.IReferenceLotLecture[], cadastresLecture: ICRest.Modeles.LireElement.IReferenceCadastraleLecture[]): BusinessModel.IGarantiePrincipale;
        private static mapLots(lotsLecture);
        private static mapCadastres(cadastresLecture);
        private static mapAddress(hypothequeImmobiliereLecture);
        static mapGarantieMaj(garantie: BusinessModel.IGarantiePrincipale): RestModel.MajElement.IGarantieReelleMaj;
        static mapHypotheMaj(garantie: BusinessModel.IGarantiePrincipale): RestModel.MajElement.IHypothequeImmobiliereMaj;
        static mapCadastresMaj(cadastres: ICBusiness.Models.Pvh.ICadastre[]): ICRest.Modeles.DefinirReferenceCadastrale.IReferenceCadastraleMaj[];
        static mapLotsMaj(lots: ICBusiness.Models.Pvh.ILot[]): ICRest.Modeles.DefinirReferenceLot.IReferenceLotMaj[];
        private static nonNullDate(date);
        private static fromAsciiToNumber(asciiCode);
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    import BusinessModel = Models.Pvh;
    /**
     * ModelTransformers de l'objet metier 'Proprietaire'
     */
    class Proprietaire {
        static mapProprietairesComplet(proprietairesComplet: RestModel.SchemaComplet.IProprietaireComplet[]): BusinessModel.IProprietaire[];
        static mapProprietaireComplet(proprietaireComplet: RestModel.SchemaComplet.IProprietaireComplet): BusinessModel.IProprietaire;
        static mapProprietairesMaj(proprietaires: BusinessModel.IProprietaire[]): RestModel.MajElements.IProprietaireMaj[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class RedacteurActe {
        private static mapAdressRedacteurActe(redacteurActe);
        static mapRedacteurActe(redacteurActe: RestModel.SchemaComplet.IRedacteurActeComplet): Models.RedacteurActe.IRedacteurActe;
        static mapRedacteurActeMaj(redacteurActe: Models.RedacteurActe.IRedacteurActe): RestModel.DefinirRedacteurActe.IRedacteurActeMaj;
        static mapRedacteurActeMajPersonne(personne: Models.Emprunteur.IDetailPersonne, estPhysique: boolean): RestModel.DefinirRedacteurActe.IRedacteurActeMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Refus Assurance Externe'
     */
    class RefusAssurance {
        static mapRefusAssuranceDetail(refus: RestModel.LireElement.IRefusAssuranceExterneLecture, listePersonne: ICBusiness.Models.Common.ICodeLabel<string>[]): Models.RefusAssurances.IRefusAssuranceDetail;
        static mapListeRefusAssurance(source: RestModel.SchemaComplet.IRefusAssuranceExterneComplet[]): Models.RefusAssurances.IRefusAssurance[];
        static mapResultatEditionREFA(source: RestModel.EditerDocumentFC050REF.IResultatEditionREFALecture): Models.RefusAssurances.IResultatEditionREFA;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class Signataire {
        static mapSignataires(signataires: RestModel.SchemaComplet.IPersonnePhysiqueComplet[], getDelegataires: boolean): Models.SignataireElectronique.ISignataire[];
        static mapSignatairesMaj(signataires: Models.SignataireElectronique.ISignataire[]): RestModel.MajElements.ISignataireMaj[];
        static mapEiMaj(signataires: Models.SignataireElectronique.ISignataire[]): RestModel.MajElements.IEntrepreneurIndividuelMaj[];
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SignatureOffre {
        static mapSignatureOffre(dossier: RestModel.LireElement.IDossierLecture, typeDuree: ICRest.CreditParametre.Models.TypeDuree.IScParamTypeDuree): Models.SignatureOffre.ISignatureOffre;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    /**
     * ModelTransformers de l'objet metier 'Suivi editions complet'
     */
    class SuiviEditions {
        static mapRetourSuiviEditions(suiviEditionsComplet: RestModel.SchemaComplet.ISuiviEditionComplet, isEditionDocument: boolean): Models.SuiviEditions.IRetourSuiviEditions;
        private static mapSuiviDocument(suiviDocument);
        /**
         * Permet de récupérer l'index de l'édition en cours selon:
         * - editionEnCours et différente de l'édition papier
         * - OU editionEnCours
         * - OU 1er element du tableau
         * @param suiviEditionDocuments
         */
        private static getIndexEditionEnCours(suiviEditionDocuments);
        private static mapSuiviEdition(suiviEditionComplet, estHistorique?);
        private static mapSuiviSignataire(suiviSignataireComplet);
        /**
         * Mappage de suivi edition document maj
         * Valeurs code historisation: " " ou "S". Dans ce cas, on n'utilise que S
         * @param suiviDocument
         */
        static mapSuiviEditionDocumentMaj(suiviDocument: Models.SuiviEditions.ISuiviDocument, codeHistorisationDocument?: number): ICRest.Modeles.MajElements.ISuiviEditionDocumentMaj;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    class TypeEds {
        /**
         * Méthode pour transformer une liste d'EDS de décision ICRest en une liste d'EDS de décision ICBusiness
         *
         * @param listeEdsRest
         */
        static mapTypeEds(listeEdsRest: ICRest.Modeles.TypeEds.IScTypeEds[]): ICBusiness.Models.TypeEds.ITypeEds[];
    }
}

declare namespace ICBusiness.Models.Projet {
    interface ILocalites {
        codePoste: string;
        ville: string;
        zonePlus: string;
        zoneDeRobien: string;
        zoneBourgadeRural: string;
        codeComRob: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPersonneSdpi {
        /** Nom / Raison Sociale */
        nomRaisonSociale: string;
        /** Prénom */
        prenom: string;
        /** Date de naissance */
        dateNais: string;
        /** Numéro de téléphone pro */
        numeroTeleProf: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPrescripteurContexteIn {
        /** Code établissement */
        IDFCEJ: string;
        /** Identifiant dossier */
        IDFADI: string;
        /** Numero interne EDS de l'agent connecté */
        IDFAES: string;
        /** Libellé agent connecté */
        LBFAES: string;
        /** Element structure 1 informations agent */
        IDFAS1: string;
        /** Element structure 2 informations agent */
        IDFAS2: string;
        /** Element structure 3 informations agent */
        IDFAS3: string;
        /** Element structure 4 informations agent */
        IDFAS4: string;
        /** Element structure 5 informations agent */
        IDFAS5: string;
        /** Element structure 6 informations agent */
        IDFAS6: string;
        /** Nom de famille de l'agent connecté */
        LBFPNP: string;
        /** Prenom de l'agent connecté */
        LBFPPP: string;
        /** Identifiant de l'entité titulaire client */
        IDFAEP: string;
        /** Date de création du dossier (format DD/MM/YYY%2000:00:00 */
        DTFCCR: string;
        /** Code devise */
        CDFADV: string;
        /** Cout total de l'objet (sans décimales, cout * 100) */
        MCFOOF: number;
        /** Date de traitement (format YYYYMMDD%2000:00:00) */
        DTFISY: string;
        /** Nom raison sociale de la personne SDPI */
        LBFPNM: string;
        /** Prenom de la personne SDPI */
        LBFPPN: string;
        /** Date de naissance de la personne SDPI (format DD/MM/YYYY%2000:00:00 */
        DTFPNA: string;
        /** Numéro de téléphone pro de la personne SDPI */
        NUFPTP: string;
    }
}

declare namespace ICBusiness.Models.Projet {
    interface IPrescripteurContexteOut {
        RETOUR: string;
        /** Identifiant prescripteur du dossier */
        IDFIPP: string;
        /** Enseigne prescripteur du dossier */
        LBFPEN: string;
        /** Code lever secret bancaire */
        CIFCSB: string;
        /** Numéro fiche prescripteur */
        IDFIFD: string;
    }
}

declare namespace ICBusiness.Models.SignatureOffre {
    /**
     * Interface pour les informations d'un signataire papier
     */
    interface ISignatairePapier {
        intitule: string;
        role: string;
        codeReponse: number;
        dateDeSignature: string;
        hasSigned: boolean;
        listeIdsPersonne: string[];
    }
    interface IIntervenantSignature {
        /**
         * Idws
         */
        idws: string;
        /**
         * Signe
         */
        signe: boolean;
        /**
         * Refuse
         */
        refuse: boolean;
        /**
         * DateReponse
         * Type date au format yyyy-MM-dd'T'HH:mm:ss.SSSZ
         */
        dateReponse: string;
        /**
         * IdwsPersonne
         */
        idPersonne: string;
        /**
         * Ctfprp_RolsPersPourDoss
         */
        rolsPersonnePourDossier: Array<string>;
        /**
         * Idfppe_IdntPersSI
         */
        idPersonneSI: string;
        /**
         * Libelle
         */
        libelle: string;
        /**
         * LibelleRole
         */
        libelleRole: string;
        aSigne: boolean;
        codeReponse: number;
    }
}

declare namespace ICBusiness.Services.SignatureOffre {
    import SignatureOffreModels = Models.SignatureOffre;
    interface ISignataireService {
        getListeSignatairesPapier(identifiantDossier: string): ng.IPromise<SignatureOffreModels.ISignatairePapier[]>;
    }
    class SignataireService implements ISignataireService {
        private elementService;
        static $inject: string[];
        constructor(elementService: ICRest.Services.Element.IElementService);
        getListeSignatairesPapier(identifiantDossier: string): ng.IPromise<SignatureOffreModels.ISignatairePapier[]>;
    }
}

declare namespace ICBusiness.ModelsTransformers {
    import RestModel = ICRest.Modeles;
    class SignatairePapier {
        static mapSignatairePapier(emprunteur: RestModel.LireElement.IEmprunteurLecture, dossier: RestModel.LireElement.IDossierLecture): Models.SignatureOffre.ISignatairePapier;
        private static getCodeReponse(dossier);
        private static getDateDeSignature(dossier);
    }
}
